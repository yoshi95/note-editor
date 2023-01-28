(window.mobilecheck = function () {
  var e,
    n = !1;
  return (
    (e = navigator.userAgent || navigator.vendor || window.opera),
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      e
    ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        e.substr(0, 4)
      )) &&
      (n = !0),
    n
  );
}),
  "function" != typeof Object.assign &&
    (Object.assign = function (e, n) {
      "use strict";
      if (null == e)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var o = Object(e), t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        if (null != r)
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (o[a] = r[a]);
      }
      return o;
    }),
  Array.prototype.map ||
    (Array.prototype.map = function (e, n) {
      for (var o = [], t = 0; t < this.length; t++)
        o.push(e.call(n, this[t], t, this));
      return o;
    }),
  Array.prototype.forEach ||
    (Array.prototype.forEach = function (e, n) {
      for (var o = 0; o < this.length; o++) e.call(n, this[o], o, this);
    }),
  Object.keys ||
    (Object.keys = function (e) {
      var n = [];
      for (var o in e) e.hasOwnProperty(o) && n.push(o);
      return n;
    }),
  (function (e) {
    var n = {
        browser: [
          [/msie ([\.\_\d]+)/, "ie"],
          [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
          [/firefox\/([\.\_\d]+)/, "firefox"],
          [/chrome\/([\.\_\d]+)/, "chrome"],
          [/version\/([\.\_\d]+).*?safari/, "safari"],
          [/mobile safari ([\.\_\d]+)/, "safari"],
          [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
          [/crios\/([\.\_\d]+).*?safari/, "chrome"],
          [/opera/, "opera"],
          [/opera\/([\.\_\d]+)/, "opera"],
          [/opera ([\.\_\d]+)/, "opera"],
          [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
          [/opios\/([a-z\.\_\d]+)/, "opera"],
          [/blackberry/, "blackberry"],
          [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
          [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
          [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
          [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
          [/edge\/([\.\d]+)/, "edge"],
        ],
        os: [
          [/linux ()([a-z\.\_\d]+)/, "linux"],
          [/mac os x/, "macos"],
          [/mac os x.*?([\.\_\d]+)/, "macos"],
          [/os ([\.\_\d]+) like mac os/, "ios"],
          [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
          [/android/, "android"],
          [/android ([a-z\.\_\d]+);/, "android"],
          [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
          [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
          [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
          [/windows mobile/, "windows.mobile"],
          [/blackberry/, "blackberryos"],
          [/bb\d+/, "blackberryos"],
          [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"],
        ],
        device: [
          [/ipad/, "ipad"],
          [/iphone/, "iphone"],
          [/lumia/, "lumia"],
          [/htc/, "htc"],
          [/nexus/, "nexus"],
          [/galaxy nexus/, "galaxy.nexus"],
          [/nokia/, "nokia"],
          [/ gt\-/, "galaxy"],
          [/ sm\-/, "galaxy"],
          [/xbox/, "xbox"],
          [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"],
        ],
      },
      s = "Unknown",
      t = Object.keys(n);
    function o() {
      var n = this;
      t.forEach(function (e) {
        n[e] = { name: s, version: [], versionString: s };
      });
    }
    function r(r, a, i) {
      n[a].forEach(function (e) {
        var n = e[0],
          o = e[1],
          t = i.match(n);
        t &&
          ((r[a].name = o),
          t[2]
            ? ((r[a].versionString = t[2]), (r[a].version = []))
            : t[1]
            ? ((r[a].versionString = t[1].replace(/_/g, ".")),
              (r[a].version = (function (e) {
                return e.split(/[\._]/).map(function (e) {
                  return parseInt(e);
                });
              })(t[1])))
            : ((r[a].versionString = s), (r[a].version = [])));
      });
    }
    (o.prototype.sniff = function (e) {
      var n = this,
        o = (e || navigator.userAgent || "").toLowerCase();
      t.forEach(function (e) {
        r(n, e, o);
      });
    }),
      "undefined" != typeof module && module.exports
        ? (module.exports = o)
        : ((e.Sniffr = new o()), e.Sniffr.sniff(navigator.userAgent));
  })(this),
  (function () {
    "use strict";
    var n,
      o = [];
    function e() {
      for (; o.length; ) o[0](), o.shift();
    }
    function a(e) {
      (this.a = i), (this.b = void 0), (this.f = []);
      var n = this;
      try {
        e(
          function (e) {
            !(function n(o, e) {
              if (o.a == i) {
                if (e == o) throw new TypeError();
                var t = !1;
                try {
                  var r = e && e.then;
                  if (
                    null != e &&
                    "object" == typeof e &&
                    "function" == typeof r
                  )
                    return void r.call(
                      e,
                      function (e) {
                        t || n(o, e), (t = !0);
                      },
                      function (e) {
                        t || d(o, e), (t = !0);
                      }
                    );
                } catch (e) {
                  return void (t || d(o, e));
                }
                (o.a = 0), (o.b = e), c(o);
              }
            })(n, e);
          },
          function (e) {
            d(n, e);
          }
        );
      } catch (e) {
        d(n, e);
      }
    }
    n = function () {
      setTimeout(e);
    };
    var i = 2;
    function s(n) {
      return new a(function (e) {
        e(n);
      });
    }
    function d(e, n) {
      if (e.a == i) {
        if (n == e) throw new TypeError();
        (e.a = 1), (e.b = n), c(e);
      }
    }
    function c(r) {
      !(function (e) {
        o.push(e), 1 == o.length && n();
      })(function () {
        if (r.a != i)
          for (; r.f.length; ) {
            var e = (t = r.f.shift())[0],
              n = t[1],
              o = t[2],
              t = t[3];
            try {
              0 == r.a
                ? o("function" == typeof e ? e.call(void 0, r.b) : r.b)
                : 1 == r.a &&
                  ("function" == typeof n ? o(n.call(void 0, r.b)) : t(r.b));
            } catch (e) {
              t(e);
            }
          }
      });
    }
    (a.prototype.g = function (e) {
      return this.c(void 0, e);
    }),
      (a.prototype.c = function (o, t) {
        var r = this;
        return new a(function (e, n) {
          r.f.push([o, t, e, n]), c(r);
        });
      }),
      window.Promise ||
        ((window.Promise = a),
        (window.Promise.resolve = s),
        (window.Promise.reject = function (o) {
          return new a(function (e, n) {
            n(o);
          });
        }),
        (window.Promise.race = function (t) {
          return new a(function (e, n) {
            for (var o = 0; o < t.length; o += 1) s(t[o]).c(e, n);
          });
        }),
        (window.Promise.all = function (i) {
          return new a(function (o, e) {
            function n(n) {
              return function (e) {
                (r[n] = e), (t += 1) == i.length && o(r);
              };
            }
            var t = 0,
              r = [];
            0 == i.length && o(r);
            for (var a = 0; a < i.length; a += 1) s(i[a]).c(n(a), e);
          });
        }),
        (window.Promise.prototype.then = a.prototype.c),
        (window.Promise.prototype.catch = a.prototype.g));
  })(),
  (function () {
    function r(e, n) {
      document.addEventListener
        ? e.addEventListener("scroll", n, !1)
        : e.attachEvent("scroll", n);
    }
    function y(e) {
      (this.a = document.createElement("div")),
        this.a.setAttribute("aria-hidden", "true"),
        this.a.appendChild(document.createTextNode(e)),
        (this.b = document.createElement("span")),
        (this.c = document.createElement("span")),
        (this.h = document.createElement("span")),
        (this.f = document.createElement("span")),
        (this.g = -1),
        (this.b.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.c.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.f.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.h.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.b.appendChild(this.h),
        this.c.appendChild(this.f),
        this.a.appendChild(this.b),
        this.a.appendChild(this.c);
    }
    function F(e, n) {
      e.a.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" +
        n +
        ";";
    }
    function a(e) {
      var n = e.a.offsetWidth,
        o = n + 100;
      return (
        (e.f.style.width = o + "px"),
        (e.c.scrollLeft = o),
        (e.b.scrollLeft = e.b.scrollWidth + 100),
        e.g !== n && ((e.g = n), !0)
      );
    }
    function g(e, n) {
      function o() {
        var e = t;
        a(e) && e.a.parentNode && n(e.g);
      }
      var t = e;
      r(e.b, o), r(e.c, o), a(e);
    }
    function e(e, n) {
      var o = n || {};
      (this.family = e),
        (this.style = o.style || "normal"),
        (this.weight = o.weight || "normal"),
        (this.stretch = o.stretch || "normal");
    }
    var M = null,
      o = null,
      t = null,
      n = null;
    function i() {
      return null === n && (n = !!document.fonts), n;
    }
    function x(e, n) {
      return [
        e.style,
        e.weight,
        (function () {
          if (null === t) {
            var e = document.createElement("div");
            try {
              e.style.font = "condensed 100px sans-serif";
            } catch (e) {}
            t = "" !== e.style.font;
          }
          return t;
        })()
          ? e.stretch
          : "",
        "100px",
        n,
      ].join(" ");
    }
    (e.prototype.load = function (e, n) {
      var p = this,
        m = e || "BESbswy",
        b = 0,
        w = n || 3e3,
        v = new Date().getTime();
      return new Promise(function (u, f) {
        if (
          i() &&
          !(function () {
            if (null === o)
              if (i() && /Apple/.test(window.navigator.vendor)) {
                var e =
                  /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  );
                o = !!e && parseInt(e[1], 10) < 603;
              } else o = !1;
            return o;
          })()
        ) {
          var e = new Promise(function (o, e) {
              !(function n() {
                new Date().getTime() - v >= w
                  ? e()
                  : document.fonts.load(x(p, '"' + p.family + '"'), m).then(
                      function (e) {
                        1 <= e.length ? o() : setTimeout(n, 25);
                      },
                      function () {
                        e();
                      }
                    );
              })();
            }),
            n = new Promise(function (e, n) {
              b = setTimeout(n, w);
            });
          Promise.race([n, e]).then(
            function () {
              clearTimeout(b), u(p);
            },
            function () {
              f(p);
            }
          );
        } else
          !(function (n) {
            document.body
              ? n()
              : document.addEventListener
              ? document.addEventListener("DOMContentLoaded", function e() {
                  document.removeEventListener("DOMContentLoaded", e), n();
                })
              : document.attachEvent("onreadystatechange", function e() {
                  ("interactive" != document.readyState &&
                    "complete" != document.readyState) ||
                    (document.detachEvent("onreadystatechange", e), n());
                });
          })(function () {
            function o() {
              var e;
              (e =
                (-1 != i && -1 != s) ||
                (-1 != i && -1 != d) ||
                (-1 != s && -1 != d)) &&
                ((e = i != s && i != d && s != d) ||
                  (null === M &&
                    ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                      window.navigator.userAgent
                    )),
                    (M =
                      !!e &&
                      (parseInt(e[1], 10) < 536 ||
                        (536 === parseInt(e[1], 10) &&
                          parseInt(e[2], 10) <= 11)))),
                  (e =
                    M &&
                    ((i == n && s == n && d == n) ||
                      (i == c && s == c && d == c) ||
                      (i == l && s == l && d == l)))),
                (e = !e)),
                e &&
                  (h.parentNode && h.parentNode.removeChild(h),
                  clearTimeout(b),
                  u(p));
            }
            var t = new y(m),
              r = new y(m),
              a = new y(m),
              i = -1,
              s = -1,
              d = -1,
              n = -1,
              c = -1,
              l = -1,
              h = document.createElement("div");
            (h.dir = "ltr"),
              F(t, x(p, "sans-serif")),
              F(r, x(p, "serif")),
              F(a, x(p, "monospace")),
              h.appendChild(t.a),
              h.appendChild(r.a),
              h.appendChild(a.a),
              document.body.appendChild(h),
              (n = t.a.offsetWidth),
              (c = r.a.offsetWidth),
              (l = a.a.offsetWidth),
              (function e() {
                if (new Date().getTime() - v >= w)
                  h.parentNode && h.parentNode.removeChild(h), f(p);
                else {
                  var n = document.hidden;
                  (!0 !== n && void 0 !== n) ||
                    ((i = t.a.offsetWidth),
                    (s = r.a.offsetWidth),
                    (d = a.a.offsetWidth),
                    o()),
                    (b = setTimeout(e, 50));
                }
              })(),
              g(t, function (e) {
                (i = e), o();
              }),
              F(t, x(p, '"' + p.family + '",sans-serif')),
              g(r, function (e) {
                (s = e), o();
              }),
              F(r, x(p, '"' + p.family + '",serif')),
              g(a, function (e) {
                (d = e), o();
              }),
              F(a, x(p, '"' + p.family + '",monospace'));
          });
      });
    }),
      "undefined" != typeof module
        ? (module.exports = e)
        : ((window.FontFaceObserver = e),
          (window.FontFaceObserver.prototype.load = e.prototype.load));
  })();
var cdnPrefix = window.cdnPrefix;
function getParameterByName(e, n) {
  n || (n = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
  var o = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
  return o ? (o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "") : null;
}
function contribute(e) {
  if (!mathGlobal.connectionError) {
    var n = document.getElementById("progress-bar");
    mathGlobal.loaded += e;
    var o = (mathGlobal.loaded / mathGlobal.sizes.totalSize) * 100;
    console.log("percentage: ", o),
      (n.style["stroke-dashoffset"] = Math.max(0, 100 - o) + "px");
  }
}
function loadAjax(r) {
  return new Promise(function (e, n) {
    var o = new XMLHttpRequest();
    o.open("GET", r, !0),
      (o.onload = function () {
        4 === o.readyState &&
          (200 === o.status ? e(o.response) : (n(), console.error(o.response)));
      });
    var t = 0;
    (o.onprogress = function (e) {
      var n = e.loaded - t;
      (t = e.loaded), contribute(n / 1e3);
    }),
      o.send();
  });
}
function otherFontFunc(e) {
  return console.log("load finished: ", e), contribute(20), !0;
}
function loadFonts() {
  var e = 2e5,
    n = null,
    o = [
      new FontFaceObserver("Asana").load(n, e).then(function () {
        return contribute(400), console.log("ok aasana"), !0;
      }),
      new FontFaceObserver("Asana-Math")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Math")),
      new FontFaceObserver("Asana-Mathbb")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathbb")),
      new FontFaceObserver("Asana-Mathit")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathit")),
      new FontFaceObserver("Asana-Mathcal")
        .load("ABCDEFGHIJKLMNOPQRSTXYZW", e)
        .then(otherFontFunc.bind(this, "Asana-Mathcal")),
      new FontFaceObserver("Asana-Mathfrak")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathfrak")),
      new FontFaceObserver("Asana-mathsf")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-mathsf")),
      new FontFaceObserver("Asana-Mathtt")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathtt")),
      new FontFaceObserver("Asana-Mathrm")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathrm")),
      new FontFaceObserver("Asana-Mathscr")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Asana-Mathscr")),
    ];
  if (0 <= window.location.href.indexOf("-more-fonts-")) {
    var t = new FontFaceObserver("LatinModern").load(n, e).then(function () {
        return console.log("ok aLatinModern"), !0;
      }),
      r = new FontFaceObserver("LatinModern-Math")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Math")),
      a = new FontFaceObserver("LatinModern-Mathbb")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathbb")),
      i = new FontFaceObserver("LatinModern-Mathit")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathit")),
      s = new FontFaceObserver("LatinModern-Mathcal")
        .load("ABCDEFGHIJKLMNOPQRSTXYZW", e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathcal")),
      d = new FontFaceObserver("LatinModern-Mathfrak")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathfrak")),
      c = new FontFaceObserver("LatinModern-mathsf")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-mathsf")),
      l = new FontFaceObserver("LatinModern-Mathtt")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathtt")),
      h = new FontFaceObserver("LatinModern-Mathrm")
        .load(n, e)
        .then(otherFontFunc.bind(this, "LatinModern-Mathrm")),
      u = new FontFaceObserver("Computer Modern Serif")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Serif")),
      f = new FontFaceObserver("Computer Modern Serif", { weight: "bold" })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Serif")),
      p = new FontFaceObserver("Computer Modern Serif", { style: "italic" })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Serif")),
      m = new FontFaceObserver("Computer Modern Serif", {
        weight: "bold",
        style: "italic",
      })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Serif")),
      b = new FontFaceObserver("Computer Modern Sans")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Sans")),
      w = new FontFaceObserver("Computer Modern Sans", { weight: "bold" })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Sans")),
      v = new FontFaceObserver("Computer Modern Sans", { style: "italic" })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Sans")),
      y = new FontFaceObserver("Computer Modern Sans", {
        weight: "bold",
        style: "italic",
      })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern Sans")),
      F = new FontFaceObserver("Computer Modern TypeWriter")
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern TypeWriter")),
      g = new FontFaceObserver("Computer Modern TypeWriter", { weight: "bold" })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern TypeWriter")),
      M = new FontFaceObserver("Computer Modern TypeWriter", {
        style: "italic",
      })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern TypeWriter")),
      x = new FontFaceObserver("Computer Modern TypeWriter", {
        weight: "bold",
        style: "italic",
      })
        .load(n, e)
        .then(otherFontFunc.bind(this, "Computer Modern TypeWriter"));
    o = o.concat([
      t,
      r,
      a,
      i,
      s,
      d,
      c,
      l,
      h,
      fontAwesome,
      u,
      f,
      p,
      m,
      b,
      w,
      v,
      y,
      F,
      g,
      M,
      x,
    ]);
  }
  return o;
}
function setStyle(e) {
  var n = document.createElement("style");
  (n.type = "text/css"),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)),
    document.head.appendChild(n);
}
function setScript(e) {
  var n = document.createElement("script");
  (n.text = e), document.head.appendChild(n);
}
function loadMainStyle() {
  return loadAjax(cdnPrefix + "/styles-" + mathGlobal.version + ".css").then(
    function (e) {
      setStyle(e);
    }
  );
}
function loadFontAwesomeStyle() {
  return loadAjax(
    cdnPrefix + "/font-icomoon-" + mathGlobal.version + ".css"
  ).then(function (e) {
    setStyle(e);
  });
}
function loadFontAwesomeFont() {
  return loadAjax(cdnPrefix + "/fonts/icomoon.woff").then(function () {
    console.log("Font awesome downloaded");
  });
}
(mathGlobal = Object.assign(
  {},
  {
    environment: "production",
    sizes: {
      bundleSize: 3500,
      asanaMathSize: 400,
      styleSize: 90,
      asanaOtherAsanaFontSize: 180,
      totalSize: 0,
      initDataSize: 5,
    },
    loaded: 0,
    connectionError: !1,
    version: g_version,
    initData: {},
  },
  mathGlobal
)),
  (mathGlobal.sizes.totalSize =
    mathGlobal.sizes.bundleSize +
    mathGlobal.sizes.asanaMathSize +
    mathGlobal.sizes.asanaOtherAsanaFontSize +
    mathGlobal.sizes.styleSize +
    mathGlobal.sizes.initDataSize);
var shouldLoad = !0,
  errorMessage = "",
  notSupportedBrowserMessage =
    "Sorry! Only Desktop Chrome,Firefox, Safari browser are supported for this alpha release.";
function loadWebWorkers() {
  var n = [];
  return (
    webWorkers.forEach(function (e) {
      n.push(loadAjax(e));
    }),
    n
  );
}
if (
  ("ios" == Sniffr.os.name
    ? Sniffr.os.version[0] < 10
      ? ((shouldLoad = !1),
        (errorMessage = "Sorry! Please upgrade to ios 10 and above"))
      : (shouldLoad = !0)
    : "android" == Sniffr.os.name
    ? "chrome" == Sniffr.browser.name && Sniffr.browser.version[0] < 51
      ? ((shouldLoad = !1),
        (errorMessage = "Sorry! Please use Chrome version 51 or above"))
      : "firefox" == Sniffr.browser.name
      ? ((shouldLoad = !1),
        (errorMessage =
          "Sorry! Firefox on Android is not supported, please use Chrome instead"))
      : (shouldLoad = !0)
    : "firefoxos" == Sniffr.os.name
    ? ((shouldLoad = !1),
      (errorMessage =
        "Sorry! Firefox on Android is not supported, please use Chrome instead"))
    : "chrome" != Sniffr.browser.name &&
      "firefox" != Sniffr.browser.name &&
      "safari" != Sniffr.browser.name
    ? ((shouldLoad = !1), (errorMessage = notSupportedBrowserMessage))
    : "Unknown" != Sniffr.device.name
    ? ((shouldLoad = !1), (errorMessage = notSupportedBrowserMessage))
    : "chrome" == Sniffr.browser.name && Sniffr.browser.version[0] < 51
    ? ((shouldLoad = !1),
      (errorMessage = "Sorry! Please use Chrome version 51 or above"))
    : "firefox" == Sniffr.browser.name && Sniffr.browser.version[0] < 49
    ? ((shouldLoad = !1),
      (errorMessage = "Sorry! Please use Firefox version 49 or above"))
    : "safari" == Sniffr.browser.name &&
      Sniffr.browser.version[0] < 10 &&
      ((shouldLoad = !1),
      (errorMessage = "Sorry! Please use Safari version 10 or above")),
  getParameterByName("force") && (shouldLoad = !0),
  shouldLoad)
)
  window.Promise.all(
    [
      loadAjax(cdnPrefix + "/script.js"),
      loadMainStyle(),
      loadFontAwesomeStyle(),
      loadFontAwesomeFont(),
    ]
      .concat(loadWebWorkers())
      .concat(loadFonts())
  ).then(
    function (e) {
      console.log("all loaded");
      var n = document.getElementById("main-container");
      n.parentNode.removeChild(n), setScript(e[0]);
    },
    function (e) {
      (mathGlobal.connectionError = !0),
        (document.getElementById("error-span").innerHTML =
          "<br/>Could not load resources, the problem may be: <br/> - Internet Connection. <br/> - Browser Extensions (Adblocks, ...). <br/><br/> You can try to: <br/> - Reload the page <br/> - Open page in Cognito Mode <br/> - Disable browser extensions <br/> - Try other browsers <br/><br/> If problem still persists, please contact team@mathcha.io for supports"),
        console.error(e);
    }
  );
else {
  var progressBarContainer = document.getElementById("progress-bar-container");
  progressBarContainer.parentNode.removeChild(progressBarContainer);
  var errorSpan = document.getElementById("error-span");
  errorSpan.innerText = errorMessage;
}
