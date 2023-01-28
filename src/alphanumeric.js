const crypto = require('crypto');

const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomize(seed, len) {
  const sourceArray = seed.split('');
  let baselen = typeof len === 'undefined' ? sourceArray.length : len;
  const rnd = crypto.randomBytes(baselen);
  const result = [];
  let counter = 0, characterIndex, r;
  while (baselen > 0) {
    r = rnd[counter];
    characterIndex = r % sourceArray.length;
    result.push(sourceArray.splice(characterIndex, 1)[0]);
    baselen--;
    counter++;
  }
  return result.join('');
}

function generate(len,prepend='') {
  const alphaseed = randomize(alphanumeric);
  return randomize(alphaseed, len) + prepend
}

module.exports = {
  generate, randomize
}
