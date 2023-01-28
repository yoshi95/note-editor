const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const { generate } = require('./src/alphanumeric')
const baseDoc = require('./static/base-doc.json')
const initBase = require('./static/init-base.json')
const docData = require('./documents/doc-list.json')
const req = require('express/lib/request')
const { reset } = require('nodemon')

const app = express()
const port = 6576

express.static.mime.define({'font/opentype': ['otf']});

let currentDoc = docData.editing;
const getAssetUploadFolder = () => `static/doc-assets`

const baseDir = {
  collapsed: false,
  directories: [],
  documents: [],
  generatedLink: null,

  isCollapsed: false,
  isShared: false,
  
  ownSharedLink: null,
  shared: false,
  user: null,
}

const writeDocFile = data => {
  const file = path.join(__dirname, 'documents', 'doc-list.json')
  return fs.writeJSON(file, data)
}

app.use(express.json({limit: '50mb'}))
app.use(express.text({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
})

app.get('/api/init2', (req, res) => {
  const data = JSON.parse(JSON.stringify(initBase))
  const { documents, directories } = docData
  docDirMap = documents.reduce((result, doc) => {
    const { id, directory } = doc
    if (directory) {
      result[directory] = result[directory] || []
      result[directory].push({...baseDoc, ...doc})
    }
    return result;
  }, {})
  const directoriesData = JSON.parse(JSON.stringify(directories))
  directoriesData.forEach(dir => {
    dir.documents = docDirMap[dir.id]
  })
  data.tree.documents.push(...documents
                            .filter(doc => !doc.directory)
                            .map(doc =>({...baseDoc, ...doc}))
                           )
  data.tree.directories.push(...directoriesData)
  res.json(data)
})

app.put('/api/documents/:id/content', (req, res) => {
  const file = path.join(__dirname, 'documents', `${req.params.id}.json`)

  try {
    const data = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : req.body
    fs.writeJson(file, data).then(doc => {
      res.send(200)
    })
  } catch(err) {
    console.error(err)
    res.send(500)
  }
})

app.post('/api/images/request-upload-info', (req, res) => {
  const { fileName } = req.body
  const staticPathName = getAssetUploadFolder();
  const folderName = staticPathName
  const newFileName = fileName

  return res.send({
    folderName,
    newFileName,
    imagePolicy: {
      acl: 'public-read',
      key: `${folderName}/contents/${newFileName}`
    },
    thumbnailPolicy: {
      acl: 'public-read',
      key: `${folderName}/thumbnails/${newFileName}`
    },
  })
})

const storage = multer.memoryStorage()
const upload = multer({ storage })

app.post('/image-upload', upload.single('file'), (req, res) => {
  const assetFolderName = getAssetUploadFolder()
  const { file, body: { key: assetPath } } = req
  const { originalname: name, buffer: data } = file
  fs.outputFile(
    assetPath,
    data
  ).then(() => {
    res.send(200)
  })

})

app.delete('/api/images/list', (req, res) => {
  const { imageNames } = req.body
  const folder = getAssetUploadFolder()
  Promise.all(
    imageNames.map(img => Promise.all([
      fs.remove(`${folder}/contents/${img}`),
      fs.remove(`${folder}/thumbnails/${img}`)
    ]))
  ).then(() => {
    res.send(200)
  })
})

app.get('/api/images/list', (req, res) => {
  const folder = getAssetUploadFolder()
  const dir = path.join(__dirname, folder, 'thumbnails')

  fs.readdir(dir, (err, files) => {
    if (err) {
      res.send(500)
    } else {
      Promise.all(files.map(file => new Promise((resolve, reject) => {
        const key = file
        fs.stat(`${dir}/${file}`, (err, stats) => {
          if (err) {
            console.error(`Error reading file ${file}`, err)
            resolve({ key, err})
          }
          const { size, mtime } = stats
          resolve({ size, mtime, key })
        })
      }))).then(imageFiles => {
        res.send({
          folder,
          images: imageFiles
        })
      })
    }
    
  })
})

app.put('/api/directories/:id/rename', (req, res) => {
  const { name } = req.body
  const id = req.params.id

  try {
    const found = docData.directories.find(dir => dir.id === id)
    found.name = name
    writeDocFile(docData).then(() => {
      res.send(200);
    })
    
  } catch(err) {
    console.error(err)
    res.send(500)
  }
})

app.post('/api/directories', (req, res) => {
  const { name } = req.body
  const id = generate(9)

  try {
    docData.directories = docData.directories || [];
    const dirData = {
      id,
      name,
      ...baseDir
    }
    docData.directories.push(dirData)
    writeDocFile(docData).then(() => {
      res.send(dirData);
    })
    
  } catch(err) {
    console.error(err)
    res.send(500)
  }

})

app.get('/api/documents/:id', (req, res) => {
  const isActive = req.params.id === 'active2'
  const id = isActive ? currentDoc : req.params.id;
  const file = path.join(__dirname, 'documents', `${id}.json`)

  try {
    const foundDoc = docData.documents.find(data => data.id === id)
    if (!foundDoc) {
      throw new Error(`doc ${id} not found`);
    }

    fs.readJson(file).then(doc => {
      documentResponse = {
        ...baseDoc,
        data: JSON.stringify(doc),
        ...foundDoc
      };
      res.send(
        isActive ? {
          status: "found-document",
          documentResponse 
        } : documentResponse
      )
    })
  } catch(err) {
    console.error(err)
    res.send(500)
  }
})

app.put('/api/documents/:id/editing', (req, res) => {

  try {
    docData.editing = req.params.id;
    writeDocFile(docData).then(() => {
      res.sendStatus(200);
    })
    
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }

})

app.put('/api/documents/:id/rename', (req, res) => {

  try {
    const foundDoc = docData.documents.find(data => data.id === req.params.id)
    if (!foundDoc) {
      throw new Error(`doc ${req.params.id} not found`);
    }
    foundDoc.name = req.body.name
    writeDocFile(docData).then(() => {
      res.send(200);
    })
  } catch(err) {
    console.error(err)
    res.send(500)
  }

})


app.post('/api/export/zip2', (req, res) => {
  const { nodes = [] } = req.body;
  const documents = nodes.map(node => {
    const { id } = node;
    const docId = uuidv4();
    return { id: docId, serverId: id }
  })
  const id = uuidv4();
  const data = {
    tree: JSON.stringify({
      id: null,
      documentIds: documents.map(doc => doc.id),
      directories: []
    }),
    directories: [],
    documents
  };

  res.json(data)
})

app.put('/api/tree/delete', (req, res) => {
  const { idInfo } = req.body

  const ioPromises = []

  idInfo.map(dirInfo => {
    const isDirDelete = dirInfo.type === 1

    if (isDirDelete) {
      const foundDir = docData.directories.find(dir => dir.id === dirInfo.id)
      const foundIndex = docData.directories.indexOf(foundDir)
      if (foundIndex > -1) {
        docData.directories.splice(foundIndex, 1)
      }
    }
    
    const docsToDelete = docData.documents.reduce((docsToDelete, doc, index) => {
      const shouldDelete = isDirDelete 
        ? doc.directory === dirInfo.id
        : doc.id === dirInfo.id
      if (shouldDelete) {
        docsToDelete.push(index)
      }
      return docsToDelete
    }, [])
    docsToDelete.forEach(deleteId => {
      const doc = docData.documents[deleteId];
      const { assets = [] } = doc
      const docPath = path.join(__dirname, 'documents', `${doc.id}.json`)
      const assetsPath = assets.map(
        asset => path.join(__dirname, 'static/doc-assets', asset)
      )
      ioPromises.push(...assetsPath.map(asset => fs.remove(asset)))
      ioPromises.push(fs.remove(docPath))
      docData.documents.splice(deleteId, 1)

    })
  })

  docData.editing = docData.documents[0].id
  ioPromises.push(writeDocFile(docData))
  Promise.all(ioPromises).then(() => {
    const data = docData.documents.reduce((result, doc) => {
      const { directories, documentIds } = result;
      const { directory, id } = doc
      if (directory) {
        directories.push({
          directories: [],
          documentIds: [id],
          id: directory
        })
      } else {
        documentIds.push(id)
      }
      return result
    }, { directories: [], documentIds: [] })
    docData.directories.forEach(dir => {
      const { id } = dir
      const found = data.directories.find(dataDir => dataDir.id === id)
      if (!found) {
        data.directories.push({
          id,
          directories: [],
          documentIds: []
        })
      }
    })
    res.json({
      ...data,
      info: null
    })
  })
})

app.put('/api/tree/move', (req, res) => {
  const { documents } = docData
  const { directoryId, nodes } = req.body
  nodes.forEach(({ id, type }) => {
    if (type === 0) {
      const foundDoc = documents.find(
        ({ id: docId }) => id === docId
      )
      if (foundDoc) {
        foundDoc.directory = directoryId
      }
    }
  })
  writeDocFile(docData).then(() => {
    res.sendStatus(200)
  })
})

app.put('/api/tree/info', (req, res) => {
  const { collapsedToggles } = req.body
  const {directories} = docData
  collapsedToggles.forEach(({ id, collapsed }) => {
    const foundDir = directories.find(
      ({ id: dirId }) => dirId === id
    )
    if (foundDir) {
      foundDir.collapsed = collapsed
    }
  })
  writeDocFile(docData).then(() => {
    res.sendStatus(200)
  })
  
})

app.get('/api/tree/dir/:id', (req, res) => {
  const {directories, documents} = docData
  const foundDir = directories.find(dir => dir.id === req.params.id)

  const dirData = {...foundDir}
  const docs = documents.filter(doc => doc.directory === req.params.id)
  dirData.documents = docs.map(doc => ({
    baseDoc,
    ...doc
  }))

  res.json(dirData)
})

app.post('/api/document', (req, res) => {
  const { name, directoryId = ''} = req.body;

  const id = generate(9);

  const docFile = path.join(__dirname, 'documents', `${id}.json`)
  const defaultDoc = {
    "id": "r0.8981361802185374",
    "lines": [{
        "id": "n0.9774502445295502",
        "blocks": []
  }]}
  try {
    docData.documents.push({ id, name, directory: directoryId })
    docData.editing = id;

    Promise.all([
      fs.writeJson(docFile, defaultDoc),
      writeDocFile(docData)
    ]).then(() => {
      res.json({
        data: null,
        id,
        name,
        rowVersion: null,
        settings: "{}"
      })
    })
    
  } catch(err) {
    console.error(err);
    res.send(500)
  }
  
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})