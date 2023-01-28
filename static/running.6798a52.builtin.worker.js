/*! For license information please see running.6798a52.builtin.worker.js.LICENSE.txt */
(() => {
  var e = {
      928: (e) => {
        "use strict";
        var t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          r = {
            "{": "\\{",
            "}": "\\}",
            "\\": "\\textbackslash{}",
            "#": "\\#",
            $: "\\$",
            "%": "\\%",
            "&": "\\&",
            "^": "\\textasciicircum{}",
            _: "\\_",
            "~": "\\textasciitilde{}",
          },
          n = {
            "–": "\\--",
            "—": "\\---",
            " ": "~",
            "\t": "\\qquad{}",
            "\r\n": "\\newline{}",
            "\n": "\\newline{}",
          },
          a = function e(r, n) {
            return t({}, r, n);
          };
        e.exports = function (e) {
          for (
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = o.preserveFormatting,
              s = void 0 !== i && i,
              u = o.escapeMapFn,
              c = void 0 === u ? a : u,
              l = String(e),
              p = "",
              f = c(t({}, r), s ? t({}, n) : {}),
              m = Object.keys(f),
              h = function e() {
                var t = !1;
                m.forEach(function (e, r) {
                  t ||
                    (l.length >= e.length &&
                      l.slice(0, e.length) === e &&
                      ((p += f[m[r]]),
                      (l = l.slice(e.length, l.length)),
                      (t = !0)));
                }),
                  t || ((p += l.slice(0, 1)), (l = l.slice(1, l.length)));
              };
            l;

          )
            h();
          return p;
        };
      },
      228: (e) => {
        e.exports = function e(t, r) {
          "use strict";
          var n =
              /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
            a = /(^[ ]*|[ ]*$)/g,
            o =
              /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            i = /^0x[0-9a-f]+$/i,
            s = /^0/,
            u = function (t) {
              return (e.insensitive && ("" + t).toLowerCase()) || "" + t;
            },
            c = u(t).replace(a, "") || "",
            l = u(r).replace(a, "") || "",
            p = c
              .replace(n, "\0$1\0")
              .replace(/\0$/, "")
              .replace(/^\0/, "")
              .split("\0"),
            f = l
              .replace(n, "\0$1\0")
              .replace(/\0$/, "")
              .replace(/^\0/, "")
              .split("\0"),
            m =
              parseInt(c.match(i), 16) ||
              (1 !== p.length && c.match(o) && Date.parse(c)),
            h =
              parseInt(l.match(i), 16) ||
              (m && l.match(o) && Date.parse(l)) ||
              null,
            d,
            g;
          if (h) {
            if (m < h) return -1;
            if (m > h) return 1;
          }
          for (var y = 0, v = Math.max(p.length, f.length); y < v; y++) {
            if (
              ((d = (!(p[y] || "").match(s) && parseFloat(p[y])) || p[y] || 0),
              (g = (!(f[y] || "").match(s) && parseFloat(f[y])) || f[y] || 0),
              isNaN(d) !== isNaN(g))
            )
              return isNaN(d) ? 1 : -1;
            if ((typeof d != typeof g && ((d += ""), (g += "")), d < g))
              return -1;
            if (d > g) return 1;
          }
          return 0;
        };
      },
      653: (e, t, r) => {
        var n = r(145);
        e.exports = function e(t, r, a) {
          var o,
            i = n(t, r, (r - t) / (a - 1));
          return i.length == a ? i : i.concat(r);
        };
      },
      145: (e) => {
        var t = 1 / 0,
          r = 9007199254740991,
          n = 17976931348623157e292,
          a = NaN,
          o = "[object Function]",
          i = "[object GeneratorFunction]",
          s = "[object Symbol]",
          u = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          l = /^0b[01]+$/i,
          p = /^0o[0-7]+$/i,
          f = /^(?:0|[1-9]\d*)$/,
          m = parseInt;
        function h(e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        }
        var d,
          g = Object.prototype.toString,
          y = Math.ceil,
          v = Math.max;
        function x(e, t, r, n) {
          for (var a = -1, o = v(y((t - e) / (r || 1)), 0), i = Array(o); o--; )
            (i[n ? o : ++a] = e), (e += r);
          return i;
        }
        function b(e) {
          return function (t, r, n) {
            return (
              n && "number" != typeof n && S(t, r, n) && (r = n = void 0),
              (t = j(t)),
              void 0 === r ? ((r = t), (t = 0)) : (r = j(r)),
              x(t, r, (n = void 0 === n ? (t < r ? 1 : -1) : j(n)), e)
            );
          };
        }
        var w = h("length");
        function N(e, t) {
          return (
            !!(t = null == t ? r : t) &&
            ("number" == typeof e || f.test(e)) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
          );
        }
        function S(e, t, r) {
          if (!T(r)) return !1;
          var n = typeof t;
          return (
            !!("number" == n
              ? A(r) && N(t, r.length)
              : "string" == n && t in r) && E(r[t], e)
          );
        }
        function E(e, t) {
          return e === t || (e != e && t != t);
        }
        function A(e) {
          return null != e && C(w(e)) && !O(e);
        }
        function O(e) {
          var t = T(e) ? g.call(e) : "";
          return t == o || t == i;
        }
        function C(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
        }
        function T(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function M(e) {
          return !!e && "object" == typeof e;
        }
        function k(e) {
          return "symbol" == typeof e || (M(e) && g.call(e) == s);
        }
        function j(e) {
          return e
            ? (e = q(e)) === t || e === -1 / 0
              ? (e < 0 ? -1 : 1) * n
              : e == e
              ? e
              : 0
            : 0 === e
            ? e
            : 0;
          var r;
        }
        function q(e) {
          if ("number" == typeof e) return e;
          if (k(e)) return a;
          if (T(e)) {
            var t = O(e.valueOf) ? e.valueOf() : e;
            e = T(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(u, "");
          var r = l.test(e);
          return r || p.test(e) ? m(e.slice(2), r ? 2 : 8) : c.test(e) ? a : +e;
        }
        var P = b();
        e.exports = P;
      },
      211: function (e, t) {
        !(function (e, r) {
          r(t);
        })(this, function (e) {
          "use strict";
          function t(e, t, r) {
            return e < t ? (r - e) / (t - e) : (e - r) / (e - t);
          }
          function r() {
            (this.successCallback = null),
              (this.verbose = !1),
              (this.polygons = !1),
              (this.polygons_full = !1),
              (this.linearRing = !0),
              (this.noQuadTree = !1),
              (this.noFrame = !1);
          }
          function n(e) {
            var n, a, o, i, s;
            for (
              i = new r(), e = e || {}, s = Object.keys(i), n = 0;
              n < s.length;
              n++
            )
              null != (o = e[(a = s[n])]) && (i[a] = o);
            return (i.polygons_full = !i.polygons), (i.interpolate = t), i;
          }
          function a(e, t, r, n) {
            var a = [];
            return (
              e.polygons.forEach(function (e) {
                e.forEach(function (e) {
                  (e[0] += t), (e[1] += r);
                }),
                  n.linearRing && e.push(e[0]),
                  a.push(e);
              }),
              a
            );
          }
          function o(e, t, r, n) {
            return (
              0 === r
                ? ((e += 1), (t += n[0][1]))
                : 1 === r
                ? (e += n[0][0])
                : 2 === r
                ? (t += n[0][1])
                : 3 === r && ((e += n[0][0]), (t += 1)),
              [e, t]
            );
          }
          function i(e, t, r) {
            return (
              0 === r
                ? e++
                : 1 === r || (2 === r ? t++ : 3 === r && (e++, t++)),
              [e, t]
            );
          }
          function s(e, t) {
            var r, n, a, o, i;
            for (r = !0, n = e[0].length, a = e.length, i = 0; i < a; i++)
              if (e[i][0] >= t || e[i][n - 1] >= t) {
                r = !1;
                break;
              }
            if (
              (r && (e[a - 1][0] >= t || e[a - 1][n - 1] >= t) && (r = !1), r)
            )
              for (o = 0; o < n - 1; o++)
                if (e[0][o] >= t || e[a - 1][o] > t) {
                  r = !1;
                  break;
                }
            return r;
          }
          function u(e, t, r) {
            var n,
              a,
              u,
              c,
              l,
              p,
              f,
              m,
              h,
              d,
              g,
              y,
              v,
              x,
              b,
              w = [],
              N = e.length - 1,
              S = e[0].length - 1,
              E = ["right", "bottom", "left", "top"],
              A = [0, -1, 0, 1],
              O = [-1, 0, 1, 0],
              C = { bottom: 1, left: 2, top: 3, right: 0 };
            return (
              r.noFrame ||
                (s(e, r.threshold) &&
                  (r.linearRing
                    ? w.push([
                        [0, 0],
                        [0, N],
                        [S, N],
                        [S, 0],
                        [0, 0],
                      ])
                    : w.push([
                        [0, 0],
                        [0, N],
                        [S, N],
                        [S, 0],
                      ]))),
              t.forEach(function (e, s) {
                e.forEach(function (e, T) {
                  for (n = null, a = 0; a < 4; a++)
                    if (((n = E[a]), "object" == typeof e.edges[n])) {
                      for (
                        l = [],
                          u = e.edges[n],
                          p = n,
                          f = s,
                          m = T,
                          h = !1,
                          d = [s + u.path[0][0], T + u.path[0][1]],
                          l.push(d);
                        !h && "object" == typeof (c = t[f][m]).edges[p];

                      )
                        if (
                          ((u = c.edges[p]),
                          delete c.edges[p],
                          ((g = u.path[1])[0] += f),
                          (g[1] += m),
                          l.push(g),
                          (p = u.move.enter),
                          (f += u.move.x),
                          (m += u.move.y),
                          void 0 === t[f] || void 0 === t[f][m])
                        ) {
                          if (!r.linearRing) break;
                          if (
                            ((y = 0),
                            (v = 0),
                            f === S
                              ? (f--, (y = 0))
                              : f < 0
                              ? (f++, (y = 2))
                              : m === N
                              ? (m--, (y = 3))
                              : m < 0 && (m++, (y = 1)),
                            f === s && m === T && y === C[n])
                          ) {
                            (h = !0), (p = n);
                            break;
                          }
                          for (;;) {
                            if (((x = !1), v > 4))
                              throw new Error(
                                "Direction change counter overflow! This should never happen!"
                              );
                            if (
                              void 0 !== t[f] &&
                              void 0 !== t[f][m] &&
                              ((c = t[f][m]),
                              (b = E[y]),
                              "object" == typeof c.edges[b])
                            ) {
                              (u = c.edges[b]),
                                l.push(o(f, m, y, u.path)),
                                (p = b),
                                (x = !0);
                              break;
                            }
                            if (x) break;
                            if (
                              (l.push(i(f, m, y)),
                              (m += O[y]),
                              (void 0 !== t[(f += A[y])] &&
                                void 0 !== t[f][m]) ||
                                (((0 === y && m < 0) ||
                                  (1 === y && f < 0) ||
                                  (2 === y && m === N) ||
                                  (3 === y && f === S)) &&
                                  ((f -= A[y]),
                                  (m -= O[y]),
                                  (y = (y + 1) % 4),
                                  v++)),
                              f === s && m === T && y === C[n])
                            ) {
                              (h = !0), (p = n);
                              break;
                            }
                          }
                        }
                      !r.linearRing ||
                        (l[l.length - 1][0] === d[0] &&
                          l[l.length - 1][1] === d[1]) ||
                        l.push(d),
                        w.push(l);
                    }
                });
              }),
              w
            );
          }
          function c(e, t, r, n, a) {
            var o = n,
              i = a,
              s = 0,
              u = 0;
            if (
              ((this.x = t),
              (this.y = r),
              (this.lowerBound = null),
              (this.upperBound = null),
              (this.childA = null),
              (this.childB = null),
              (this.childC = null),
              (this.childD = null),
              1 === n && 1 === a)
            )
              (this.lowerBound = Math.min(
                e[r][t],
                e[r][t + 1],
                e[r + 1][t + 1],
                e[r + 1][t]
              )),
                (this.upperBound = Math.max(
                  e[r][t],
                  e[r][t + 1],
                  e[r + 1][t + 1],
                  e[r + 1][t]
                ));
            else {
              if (n > 1) {
                for (; 0 !== o; ) (o >>= 1), s++;
                n === 1 << (s - 1) && s--, (o = 1 << (s - 1));
              }
              if (a > 1) {
                for (; 0 !== i; ) (i >>= 1), u++;
                a === 1 << (u - 1) && u--, (i = 1 << (u - 1));
              }
              (this.childA = new c(e, t, r, o, i)),
                (this.lowerBound = this.childA.lowerBound),
                (this.upperBound = this.childA.upperBound),
                n - o > 0 &&
                  ((this.childB = new c(e, t + o, r, n - o, i)),
                  (this.lowerBound = Math.min(
                    this.lowerBound,
                    this.childB.lowerBound
                  )),
                  (this.upperBound = Math.max(
                    this.upperBound,
                    this.childB.upperBound
                  )),
                  a - i > 0 &&
                    ((this.childC = new c(e, t + o, r + i, n - o, a - i)),
                    (this.lowerBound = Math.min(
                      this.lowerBound,
                      this.childC.lowerBound
                    )),
                    (this.upperBound = Math.max(
                      this.upperBound,
                      this.childC.upperBound
                    )))),
                a - i > 0 &&
                  ((this.childD = new c(e, t, r + i, o, a - i)),
                  (this.lowerBound = Math.min(
                    this.lowerBound,
                    this.childD.lowerBound
                  )),
                  (this.upperBound = Math.max(
                    this.upperBound,
                    this.childD.upperBound
                  )));
            }
          }
          function l(e) {
            var t, r;
            if (!e) throw new Error("data is required");
            if (!Array.isArray(e) || !Array.isArray(e[0]))
              throw new Error(
                "data must be scalar field, i.e. array of arrays"
              );
            if (e.length < 2)
              throw new Error("data must contain at least two rows");
            if ((r = e[0].length) < 2)
              throw new Error("data must contain at least two columns");
            for (t = 1; t < e.length; t++) {
              if (!Array.isArray(e[t]))
                throw new Error("Row " + t + " is not an array");
              if (e[t].length != r)
                throw new Error(
                  "unequal row lengths detected, please provide a regular grid"
                );
            }
            (this.data = e),
              (this.root = new c(e, 0, 0, e[0].length - 1, e.length - 1));
          }
          function p(e, t, r) {
            var o,
              i,
              s,
              c = !1,
              p = !1,
              m = null,
              h = null,
              d = null,
              g = null,
              y = null,
              v = [];
            if (!e) throw new Error("data is required");
            if (null == t) throw new Error("threshold is required");
            if (r && "object" != typeof r)
              throw new Error("options must be an object");
            if (((o = n(r)), e instanceof l))
              (m = e), (h = e.root), (d = e.data), o.noQuadTree || (c = !0);
            else {
              if (!Array.isArray(e) || !Array.isArray(e[0]))
                throw new Error(
                  "input is neither array of arrays nor object retrieved from 'QuadTree()'"
                );
              d = e;
            }
            if (Array.isArray(t)) {
              for (p = !0, o.noQuadTree || (c = !0), i = 0; i < t.length; i++)
                if (isNaN(+t[i]))
                  throw new Error("threshold[" + i + "] is not a number");
            } else {
              if (isNaN(+t))
                throw new Error(
                  "threshold must be a number or array of numbers"
                );
              t = [t];
            }
            return (
              c && !h && ((m = new l(d)), (h = m.root), (d = m.data)),
              o.verbose &&
                (o.polygons
                  ? console.log(
                      "MarchingSquaresJS-isoLines: returning single lines (polygons) for each grid cell"
                    )
                  : console.log(
                      "MarchingSquaresJS-isoLines: returning line paths (polygons) for entire data grid"
                    ),
                p &&
                  console.log(
                    "MarchingSquaresJS-isoLines: multiple lines requested, returning array of line paths instead of lines for a single threshold"
                  )),
              t.forEach(function (e, t) {
                if (
                  ((y = []),
                  (o.threshold = e),
                  o.verbose &&
                    console.log(
                      "MarchingSquaresJS-isoLines: computing iso lines for threshold " +
                        e
                    ),
                  o.polygons)
                )
                  if (c)
                    h.cellsBelowThreshold(o.threshold, !0).forEach(function (
                      e
                    ) {
                      y = y.concat(a(f(d, e.x, e.y, o), e.x, e.y, o));
                    });
                  else
                    for (s = 0; s < d.length - 1; ++s)
                      for (t = 0; t < d[0].length - 1; ++t)
                        y = y.concat(a(f(d, t, s, o), t, s, o));
                else {
                  for (g = [], t = 0; t < d[0].length - 1; ++t) g[t] = [];
                  if (c)
                    h.cellsBelowThreshold(o.threshold, !1).forEach(function (
                      e
                    ) {
                      g[e.x][e.y] = f(d, e.x, e.y, o);
                    });
                  else
                    for (t = 0; t < d[0].length - 1; ++t)
                      for (s = 0; s < d.length - 1; ++s)
                        g[t][s] = f(d, t, s, o);
                  y = u(d, g, o);
                }
                p ? v.push(y) : (v = y),
                  "function" == typeof o.successCallback &&
                    o.successCallback(v, e);
              }),
              v
            );
          }
          function f(e, t, r, n) {
            var a,
              o,
              i,
              s,
              u,
              c,
              l = 0,
              p = e[r + 1][t],
              f = e[r + 1][t + 1],
              m = e[r][t + 1],
              h = e[r][t],
              d = n.threshold;
            if (!(isNaN(h) || isNaN(m) || isNaN(f) || isNaN(p))) {
              switch (
                ((l |= p >= d ? 8 : 0),
                (l |= f >= d ? 4 : 0),
                (l |= m >= d ? 2 : 0),
                (c = {
                  cval: (l = +(l |= h >= d ? 1 : 0)),
                  polygons: [],
                  edges: {},
                  x0: h,
                  x1: m,
                  x2: f,
                  x3: p,
                }),
                l)
              ) {
                case 0:
                  n.polygons &&
                    c.polygons.push([
                      [0, 0],
                      [0, 1],
                      [1, 1],
                      [1, 0],
                    ]);
                  break;
                case 15:
                  break;
                case 14:
                  (a = n.interpolate(h, p, d)),
                    (s = n.interpolate(h, m, d)),
                    n.polygons_full &&
                      (c.edges.left = {
                        path: [
                          [0, a],
                          [s, 0],
                        ],
                        move: { x: 0, y: -1, enter: "top" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, a],
                        [s, 0],
                      ]);
                  break;
                case 13:
                  (s = n.interpolate(h, m, d)),
                    (o = n.interpolate(m, f, d)),
                    n.polygons_full &&
                      (c.edges.bottom = {
                        path: [
                          [s, 0],
                          [1, o],
                        ],
                        move: { x: 1, y: 0, enter: "left" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [s, 0],
                        [1, o],
                        [1, 0],
                      ]);
                  break;
                case 11:
                  (o = n.interpolate(m, f, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.right = {
                        path: [
                          [1, o],
                          [i, 1],
                        ],
                        move: { x: 0, y: 1, enter: "bottom" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [1, o],
                        [i, 1],
                        [1, 1],
                      ]);
                  break;
                case 7:
                  (a = n.interpolate(h, p, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.top = {
                        path: [
                          [i, 1],
                          [0, a],
                        ],
                        move: { x: -1, y: 0, enter: "right" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [i, 1],
                        [0, a],
                        [0, 1],
                      ]);
                  break;
                case 1:
                  (a = n.interpolate(h, p, d)),
                    (s = n.interpolate(h, m, d)),
                    n.polygons_full &&
                      (c.edges.bottom = {
                        path: [
                          [s, 0],
                          [0, a],
                        ],
                        move: { x: -1, y: 0, enter: "right" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [s, 0],
                        [0, a],
                        [0, 1],
                        [1, 1],
                        [1, 0],
                      ]);
                  break;
                case 2:
                  (s = n.interpolate(h, m, d)),
                    (o = n.interpolate(m, f, d)),
                    n.polygons_full &&
                      (c.edges.right = {
                        path: [
                          [1, o],
                          [s, 0],
                        ],
                        move: { x: 0, y: -1, enter: "top" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, 1],
                        [1, 1],
                        [1, o],
                        [s, 0],
                      ]);
                  break;
                case 4:
                  (o = n.interpolate(m, f, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.top = {
                        path: [
                          [i, 1],
                          [1, o],
                        ],
                        move: { x: 1, y: 0, enter: "left" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, 1],
                        [i, 1],
                        [1, o],
                        [1, 0],
                      ]);
                  break;
                case 8:
                  (a = n.interpolate(h, p, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.left = {
                        path: [
                          [0, a],
                          [i, 1],
                        ],
                        move: { x: 0, y: 1, enter: "bottom" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, a],
                        [i, 1],
                        [1, 1],
                        [1, 0],
                      ]);
                  break;
                case 12:
                  (a = n.interpolate(h, p, d)),
                    (o = n.interpolate(m, f, d)),
                    n.polygons_full &&
                      (c.edges.left = {
                        path: [
                          [0, a],
                          [1, o],
                        ],
                        move: { x: 1, y: 0, enter: "left" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, a],
                        [1, o],
                        [1, 0],
                      ]);
                  break;
                case 9:
                  (s = n.interpolate(h, m, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.bottom = {
                        path: [
                          [s, 0],
                          [i, 1],
                        ],
                        move: { x: 0, y: 1, enter: "bottom" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [s, 0],
                        [i, 1],
                        [1, 1],
                        [1, 0],
                      ]);
                  break;
                case 3:
                  (a = n.interpolate(h, p, d)),
                    (o = n.interpolate(m, f, d)),
                    n.polygons_full &&
                      (c.edges.right = {
                        path: [
                          [1, o],
                          [0, a],
                        ],
                        move: { x: -1, y: 0, enter: "right" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, a],
                        [0, 1],
                        [1, 1],
                        [1, o],
                      ]);
                  break;
                case 6:
                  (s = n.interpolate(h, m, d)),
                    (i = n.interpolate(p, f, d)),
                    n.polygons_full &&
                      (c.edges.top = {
                        path: [
                          [i, 1],
                          [s, 0],
                        ],
                        move: { x: 0, y: -1, enter: "top" },
                      }),
                    n.polygons &&
                      c.polygons.push([
                        [0, 0],
                        [0, 1],
                        [i, 1],
                        [s, 0],
                      ]);
                  break;
                case 10:
                  (a = n.interpolate(h, p, d)),
                    (o = n.interpolate(m, f, d)),
                    (s = n.interpolate(h, m, d)),
                    (i = n.interpolate(p, f, d)),
                    (u = (h + m + f + p) / 4),
                    n.polygons_full &&
                      (u < d
                        ? ((c.edges.left = {
                            path: [
                              [0, a],
                              [i, 1],
                            ],
                            move: { x: 0, y: 1, enter: "bottom" },
                          }),
                          (c.edges.right = {
                            path: [
                              [1, o],
                              [s, 0],
                            ],
                            move: { x: 0, y: -1, enter: "top" },
                          }))
                        : ((c.edges.right = {
                            path: [
                              [1, o],
                              [i, 1],
                            ],
                            move: { x: 0, y: 1, enter: "bottom" },
                          }),
                          (c.edges.left = {
                            path: [
                              [0, a],
                              [s, 0],
                            ],
                            move: { x: 0, y: -1, enter: "top" },
                          }))),
                    n.polygons &&
                      (u < d
                        ? c.polygons.push([
                            [0, 0],
                            [0, a],
                            [i, 1],
                            [1, 1],
                            [1, o],
                            [s, 0],
                          ])
                        : (c.polygons.push([
                            [0, 0],
                            [0, a],
                            [s, 0],
                          ]),
                          c.polygons.push([
                            [i, 1],
                            [1, 1],
                            [1, o],
                          ])));
                  break;
                case 5:
                  (a = n.interpolate(h, p, d)),
                    (o = n.interpolate(m, f, d)),
                    (s = n.interpolate(h, m, d)),
                    (i = n.interpolate(p, f, d)),
                    (u = (h + m + f + p) / 4),
                    n.polygons_full &&
                      (u < d
                        ? ((c.edges.bottom = {
                            path: [
                              [s, 0],
                              [0, a],
                            ],
                            move: { x: -1, y: 0, enter: "right" },
                          }),
                          (c.edges.top = {
                            path: [
                              [i, 1],
                              [1, o],
                            ],
                            move: { x: 1, y: 0, enter: "left" },
                          }))
                        : ((c.edges.top = {
                            path: [
                              [i, 1],
                              [0, a],
                            ],
                            move: { x: -1, y: 0, enter: "right" },
                          }),
                          (c.edges.bottom = {
                            path: [
                              [s, 0],
                              [1, o],
                            ],
                            move: { x: 1, y: 0, enter: "left" },
                          }))),
                    n.polygons &&
                      (u < d
                        ? c.polygons.push([
                            [0, a],
                            [0, 1],
                            [i, 1],
                            [1, o],
                            [1, 0],
                            [s, 0],
                          ])
                        : (c.polygons.push([
                            [0, a],
                            [0, 1],
                            [i, 1],
                          ]),
                          c.polygons.push([
                            [s, 0],
                            [1, o],
                            [1, 0],
                          ])));
              }
              return c;
            }
          }
          (c.prototype.cellsInBand = function (e, t, r) {
            var n = [];
            return (
              (r = void 0 === r || r),
              this.lowerBound > t ||
                this.upperBound < e ||
                (this.childA || this.childB || this.childC || this.childD
                  ? (this.childA &&
                      (n = n.concat(this.childA.cellsInBand(e, t, r))),
                    this.childB &&
                      (n = n.concat(this.childB.cellsInBand(e, t, r))),
                    this.childD &&
                      (n = n.concat(this.childD.cellsInBand(e, t, r))),
                    this.childC &&
                      (n = n.concat(this.childC.cellsInBand(e, t, r))))
                  : (r || this.lowerBound <= e || this.upperBound >= t) &&
                    n.push({ x: this.x, y: this.y })),
              n
            );
          }),
            (c.prototype.cellsBelowThreshold = function (e, t) {
              var r = [];
              return (
                (t = void 0 === t || t),
                this.lowerBound > e ||
                  (this.childA || this.childB || this.childC || this.childD
                    ? (this.childA &&
                        (r = r.concat(this.childA.cellsBelowThreshold(e, t))),
                      this.childB &&
                        (r = r.concat(this.childB.cellsBelowThreshold(e, t))),
                      this.childD &&
                        (r = r.concat(this.childD.cellsBelowThreshold(e, t))),
                      this.childC &&
                        (r = r.concat(this.childC.cellsBelowThreshold(e, t))))
                    : (t || this.upperBound >= e) &&
                      r.push({ x: this.x, y: this.y })),
                r
              );
            }),
            (e.isoLines = p),
            (e.isoContours = p),
            Object.defineProperty(e, "__esModule", { value: !0 });
        });
      },
      377: (e, t, r) => {
        var n = r(832),
          a = r(652),
          o = r(801),
          i = r(30),
          s = r(618),
          u = r(49),
          c = r(971);
        (c.alea = n),
          (c.xor128 = a),
          (c.xorwow = o),
          (c.xorshift7 = i),
          (c.xor4096 = s),
          (c.tychei = u),
          (e.exports = c);
      },
      832: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this,
              r = c();
            (t.next = function () {
              var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
              return (t.s0 = t.s1), (t.s1 = t.s2), (t.s2 = e - (t.c = 0 | e));
            }),
              (t.c = 1),
              (t.s0 = r(" ")),
              (t.s1 = r(" ")),
              (t.s2 = r(" ")),
              (t.s0 -= r(e)),
              t.s0 < 0 && (t.s0 += 1),
              (t.s1 -= r(e)),
              t.s1 < 0 && (t.s1 += 1),
              (t.s2 -= r(e)),
              t.s2 < 0 && (t.s2 += 1),
              (r = null);
          }
          function s(e, t) {
            return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
          }
          function u(e, t) {
            var r = new i(e),
              n = t && t.state,
              a = r.next;
            return (
              (a.int32 = function () {
                return (4294967296 * r.next()) | 0;
              }),
              (a.double = function () {
                return a() + 11102230246251565e-32 * ((2097152 * a()) | 0);
              }),
              (a.quick = a),
              n &&
                ("object" == typeof n && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          function c() {
            var e = 4022871197,
              t;
            return function (t) {
              t = String(t);
              for (var r = 0; r < t.length; r++) {
                var n = 0.02519603282416938 * (e += t.charCodeAt(r));
                (n -= e = n >>> 0),
                  (e = (n *= e) >>> 0),
                  (e += 4294967296 * (n -= e));
              }
              return 2.3283064365386963e-10 * (e >>> 0);
            };
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.alea = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      49: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this,
              r = "";
            (t.next = function () {
              var e = t.b,
                r = t.c,
                n = t.d,
                a = t.a;
              return (
                (e = (e << 25) ^ (e >>> 7) ^ r),
                (r = (r - n) | 0),
                (n = (n << 24) ^ (n >>> 8) ^ a),
                (a = (a - e) | 0),
                (t.b = e = (e << 20) ^ (e >>> 12) ^ r),
                (t.c = r = (r - n) | 0),
                (t.d = (n << 16) ^ (r >>> 16) ^ a),
                (t.a = (a - e) | 0)
              );
            }),
              (t.a = 0),
              (t.b = 0),
              (t.c = -1640531527),
              (t.d = 1367130551),
              e === Math.floor(e)
                ? ((t.a = (e / 4294967296) | 0), (t.b = 0 | e))
                : (r += e);
            for (var n = 0; n < r.length + 20; n++)
              (t.b ^= 0 | r.charCodeAt(n)), t.next();
          }
          function s(e, t) {
            return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
          }
          function u(e, t) {
            var r = new i(e),
              n = t && t.state,
              a = function () {
                return (r.next() >>> 0) / 4294967296;
              };
            return (
              (a.double = function () {
                do {
                  var e,
                    t,
                    n =
                      ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
                      (1 << 21);
                } while (0 === n);
                return n;
              }),
              (a.int32 = r.next),
              (a.quick = a),
              n &&
                ("object" == typeof n && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.tychei = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      652: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this,
              r = "";
            (t.x = 0),
              (t.y = 0),
              (t.z = 0),
              (t.w = 0),
              (t.next = function () {
                var e = t.x ^ (t.x << 11);
                return (
                  (t.x = t.y),
                  (t.y = t.z),
                  (t.z = t.w),
                  (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
                );
              }),
              e === (0 | e) ? (t.x = e) : (r += e);
            for (var n = 0; n < r.length + 64; n++)
              (t.x ^= 0 | r.charCodeAt(n)), t.next();
          }
          function s(e, t) {
            return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
          }
          function u(e, t) {
            var r = new i(e),
              n = t && t.state,
              a = function () {
                return (r.next() >>> 0) / 4294967296;
              };
            return (
              (a.double = function () {
                do {
                  var e,
                    t,
                    n =
                      ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
                      (1 << 21);
                } while (0 === n);
                return n;
              }),
              (a.int32 = r.next),
              (a.quick = a),
              n &&
                ("object" == typeof n && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.xor128 = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      618: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this;
            function r(e, t) {
              var r,
                n,
                a,
                o,
                i,
                s = [],
                u = 128;
              for (
                t === (0 | t)
                  ? ((n = t), (t = null))
                  : ((t += "\0"), (n = 0), (u = Math.max(u, t.length))),
                  a = 0,
                  o = -32;
                o < u;
                ++o
              )
                t && (n ^= t.charCodeAt((o + 32) % t.length)),
                  0 === o && (i = n),
                  (n ^= n << 10),
                  (n ^= n >>> 15),
                  (n ^= n << 4),
                  (n ^= n >>> 13),
                  o >= 0 &&
                    ((i = (i + 1640531527) | 0),
                    (a = 0 == (r = s[127 & o] ^= n + i) ? a + 1 : 0));
              for (
                a >= 128 && (s[127 & ((t && t.length) || 0)] = -1),
                  a = 127,
                  o = 512;
                o > 0;
                --o
              )
                (n = s[(a + 34) & 127]),
                  (r = s[(a = (a + 1) & 127)]),
                  (n ^= n << 13),
                  (r ^= r << 17),
                  (n ^= n >>> 15),
                  (r ^= r >>> 12),
                  (s[a] = n ^ r);
              (e.w = i), (e.X = s), (e.i = a);
            }
            (t.next = function () {
              var e = t.w,
                r = t.X,
                n = t.i,
                a,
                o;
              return (
                (t.w = e = (e + 1640531527) | 0),
                (o = r[(n + 34) & 127]),
                (a = r[(n = (n + 1) & 127)]),
                (o ^= o << 13),
                (a ^= a << 17),
                (o ^= o >>> 15),
                (a ^= a >>> 12),
                (o = r[n] = o ^ a),
                (t.i = n),
                (o + (e ^ (e >>> 16))) | 0
              );
            }),
              r(t, e);
          }
          function s(e, t) {
            return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
          }
          function u(e, t) {
            null == e && (e = +new Date());
            var r = new i(e),
              n = t && t.state,
              a = function () {
                return (r.next() >>> 0) / 4294967296;
              };
            return (
              (a.double = function () {
                do {
                  var e,
                    t,
                    n =
                      ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
                      (1 << 21);
                } while (0 === n);
                return n;
              }),
              (a.int32 = r.next),
              (a.quick = a),
              n &&
                (n.X && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.xor4096 = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      30: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this;
            function r(e, t) {
              var r,
                n,
                a = [];
              if (t === (0 | t)) n = a[0] = t;
              else
                for (t = "" + t, r = 0; r < t.length; ++r)
                  a[7 & r] =
                    (a[7 & r] << 15) ^
                    ((t.charCodeAt(r) + a[(r + 1) & 7]) << 13);
              for (; a.length < 8; ) a.push(0);
              for (r = 0; r < 8 && 0 === a[r]; ++r);
              for (
                n = 8 == r ? (a[7] = -1) : a[r], e.x = a, e.i = 0, r = 256;
                r > 0;
                --r
              )
                e.next();
            }
            (t.next = function () {
              var e = t.x,
                r = t.i,
                n,
                a,
                o;
              return (
                (n = e[r]),
                (a = (n ^= n >>> 7) ^ (n << 24)),
                (a ^= (n = e[(r + 1) & 7]) ^ (n >>> 10)),
                (a ^= (n = e[(r + 3) & 7]) ^ (n >>> 3)),
                (a ^= (n = e[(r + 4) & 7]) ^ (n << 7)),
                (n = e[(r + 7) & 7]),
                (a ^= (n ^= n << 13) ^ (n << 9)),
                (e[r] = a),
                (t.i = (r + 1) & 7),
                a
              );
            }),
              r(t, e);
          }
          function s(e, t) {
            return (t.x = e.x.slice()), (t.i = e.i), t;
          }
          function u(e, t) {
            null == e && (e = +new Date());
            var r = new i(e),
              n = t && t.state,
              a = function () {
                return (r.next() >>> 0) / 4294967296;
              };
            return (
              (a.double = function () {
                do {
                  var e,
                    t,
                    n =
                      ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
                      (1 << 21);
                } while (0 === n);
                return n;
              }),
              (a.int32 = r.next),
              (a.quick = a),
              n &&
                (n.x && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.xorshift7 = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      801: function (e, t, r) {
        var n;
        !(function (e, a, o) {
          function i(e) {
            var t = this,
              r = "";
            (t.next = function () {
              var e = t.x ^ (t.x >>> 2);
              return (
                (t.x = t.y),
                (t.y = t.z),
                (t.z = t.w),
                (t.w = t.v),
                ((t.d = (t.d + 362437) | 0) +
                  (t.v = t.v ^ (t.v << 4) ^ e ^ (e << 1))) |
                  0
              );
            }),
              (t.x = 0),
              (t.y = 0),
              (t.z = 0),
              (t.w = 0),
              (t.v = 0),
              e === (0 | e) ? (t.x = e) : (r += e);
            for (var n = 0; n < r.length + 64; n++)
              (t.x ^= 0 | r.charCodeAt(n)),
                n == r.length && (t.d = (t.x << 10) ^ (t.x >>> 4)),
                t.next();
          }
          function s(e, t) {
            return (
              (t.x = e.x),
              (t.y = e.y),
              (t.z = e.z),
              (t.w = e.w),
              (t.v = e.v),
              (t.d = e.d),
              t
            );
          }
          function u(e, t) {
            var r = new i(e),
              n = t && t.state,
              a = function () {
                return (r.next() >>> 0) / 4294967296;
              };
            return (
              (a.double = function () {
                do {
                  var e,
                    t,
                    n =
                      ((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
                      (1 << 21);
                } while (0 === n);
                return n;
              }),
              (a.int32 = r.next),
              (a.quick = a),
              n &&
                ("object" == typeof n && s(n, r),
                (a.state = function () {
                  return s(r, {});
                })),
              a
            );
          }
          a && a.exports
            ? (a.exports = u)
            : r.amdD && r.amdO
            ? void 0 ===
                (n = function () {
                  return u;
                }.call(t, r, t, a)) || (a.exports = n)
            : (this.xorwow = u);
        })(this, (e = r.nmd(e)), r.amdD);
      },
      971: function (e, t, r) {
        var n;
        !(function (a, o, i) {
          var s = 256,
            u = 6,
            c = 52,
            l = "random",
            p = i.pow(s, 6),
            f = i.pow(2, c),
            m = 2 * f,
            h = 255,
            d;
          function g(e, t, r) {
            var n = [],
              a = b(
                x(
                  (t = 1 == t ? { entropy: !0 } : t || {}).entropy
                    ? [e, N(o)]
                    : null == e
                    ? w()
                    : e,
                  3
                ),
                n
              ),
              u = new y(n),
              c = function () {
                for (var e = u.g(6), t = p, r = 0; e < f; )
                  (e = (e + r) * s), (t *= s), (r = u.g(1));
                for (; e >= m; ) (e /= 2), (t /= 2), (r >>>= 1);
                return (e + r) / t;
              };
            return (
              (c.int32 = function () {
                return 0 | u.g(4);
              }),
              (c.quick = function () {
                return u.g(4) / 4294967296;
              }),
              (c.double = c),
              b(N(u.S), o),
              (
                t.pass ||
                r ||
                function (e, t, r, n) {
                  return (
                    n &&
                      (n.S && v(n, u),
                      (e.state = function () {
                        return v(u, {});
                      })),
                    r ? ((i.random = e), t) : e
                  );
                }
              )(c, a, "global" in t ? t.global : this == i, t.state)
            );
          }
          function y(e) {
            var t,
              r = e.length,
              n = this,
              a = 0,
              o = (n.i = n.j = 0),
              i = (n.S = []);
            for (r || (e = [r++]); a < s; ) i[a] = a++;
            for (a = 0; a < s; a++)
              (i[a] = i[(o = h & (o + e[a % r] + (t = i[a])))]), (i[o] = t);
            (n.g = function (e) {
              for (var t, r = 0, a = n.i, o = n.j, i = n.S; e--; )
                (t = i[(a = h & (a + 1))]),
                  (r =
                    r * s +
                    i[h & ((i[a] = i[(o = h & (o + t))]) + (i[o] = t))]);
              return (n.i = a), (n.j = o), r;
            })(s);
          }
          function v(e, t) {
            return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
          }
          function x(e, t) {
            var r = [],
              n = typeof e,
              a;
            if (t && "object" == n)
              for (a in e)
                try {
                  r.push(x(e[a], t - 1));
                } catch (e) {}
            return r.length ? r : "string" == n ? e : e + "\0";
          }
          function b(e, t) {
            for (var r = e + "", n, a = 0; a < r.length; )
              t[h & a] = h & ((n ^= 19 * t[h & a]) + r.charCodeAt(a++));
            return N(t);
          }
          function w() {
            try {
              var e;
              return (
                d && (e = d.randomBytes)
                  ? (e = e(s))
                  : ((e = new Uint8Array(s)),
                    (a.crypto || a.msCrypto).getRandomValues(e)),
                N(e)
              );
            } catch (e) {
              var t = a.navigator,
                r = t && t.plugins;
              return [+new Date(), a, r, a.screen, N(o)];
            }
          }
          function N(e) {
            return String.fromCharCode.apply(0, e);
          }
          if ((b(i.random(), o), e.exports)) {
            e.exports = g;
            try {
              d = r(42);
            } catch (e) {}
          } else
            void 0 ===
              (n = function () {
                return g;
              }.call(t, r, t, e)) || (e.exports = n);
        })("undefined" != typeof self ? self : this, [], Math);
      },
      279: (e) => {
        function t() {}
        (t.prototype = {
          on: function (e, t, r) {
            var n = this.e || (this.e = {});
            return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this;
          },
          once: function (e, t, r) {
            var n = this;
            function a() {
              n.off(e, a), t.apply(r, arguments);
            }
            return (a._ = t), this.on(e, a, r);
          },
          emit: function (e) {
            for (
              var t = [].slice.call(arguments, 1),
                r = ((this.e || (this.e = {}))[e] || []).slice(),
                n = 0,
                a = r.length;
              n < a;
              n++
            )
              r[n].fn.apply(r[n].ctx, t);
            return this;
          },
          off: function (e, t) {
            var r = this.e || (this.e = {}),
              n = r[e],
              a = [];
            if (n && t)
              for (var o = 0, i = n.length; o < i; o++)
                n[o].fn !== t && n[o].fn._ !== t && a.push(n[o]);
            return a.length ? (r[e] = a) : delete r[e], this;
          },
        }),
          (e.exports = t),
          (e.exports.TinyEmitter = t);
      },
      287: function (e, t) {
        "use strict";
        var r, n, a;
        !(function (o, i) {
          (n = []),
            void 0 === (a = "function" == typeof (r = i) ? r.apply(t, n) : r) ||
              (e.exports = a);
        })(this, function () {
          function e() {
            return !0;
          }
          function t() {
            return !1;
          }
          function r() {}
          function n() {
            var a = [
                {
                  name: "number",
                  test: function (e) {
                    return "number" == typeof e;
                  },
                },
                {
                  name: "string",
                  test: function (e) {
                    return "string" == typeof e;
                  },
                },
                {
                  name: "boolean",
                  test: function (e) {
                    return "boolean" == typeof e;
                  },
                },
                {
                  name: "Function",
                  test: function (e) {
                    return "function" == typeof e;
                  },
                },
                { name: "Array", test: Array.isArray },
                {
                  name: "Date",
                  test: function (e) {
                    return e instanceof Date;
                  },
                },
                {
                  name: "RegExp",
                  test: function (e) {
                    return e instanceof RegExp;
                  },
                },
                {
                  name: "Object",
                  test: function (e) {
                    return (
                      "object" == typeof e &&
                      null !== e &&
                      e.constructor === Object
                    );
                  },
                },
                {
                  name: "null",
                  test: function (e) {
                    return null === e;
                  },
                },
                {
                  name: "undefined",
                  test: function (e) {
                    return void 0 === e;
                  },
                },
              ],
              o = { name: "any", test: e },
              i = [],
              s = [],
              u = { types: a, conversions: s, ignore: i };
            function c(e) {
              var t = X(u.types, function (t) {
                return t.name === e;
              });
              if (t) return t;
              if ("any" === e) return o;
              var r = X(u.types, function (t) {
                return t.name.toLowerCase() === e.toLowerCase();
              });
              throw new TypeError(
                'Unknown type "' +
                  e +
                  '"' +
                  (r ? '. Did you mean "' + r.name + '"?' : "")
              );
            }
            function l(e) {
              return e === o ? 999 : u.types.indexOf(e);
            }
            function p(e) {
              var t = X(u.types, function (t) {
                return t.test(e);
              });
              if (t) return t.name;
              throw new TypeError("Value has unknown type. Value: " + e);
            }
            function f(e, t) {
              if (!e.signatures)
                throw new TypeError("Function is no typed-function");
              var r;
              if ("string" == typeof t) {
                r = t.split(",");
                for (var n = 0; n < r.length; n++) r[n] = r[n].trim();
              } else {
                if (!Array.isArray(t))
                  throw new TypeError(
                    "String array or a comma separated string expected"
                  );
                r = t;
              }
              var a = r.join(","),
                o = e.signatures[a];
              if (o) return o;
              throw new TypeError(
                "Signature not found (signature: " +
                  (e.name || "unnamed") +
                  "(" +
                  r.join(", ") +
                  "))"
              );
            }
            function m(e, t) {
              var r = p(e);
              if (t === r) return e;
              for (var n = 0; n < u.conversions.length; n++) {
                var a = u.conversions[n];
                if (a.from === r && a.to === t) return a.convert(e);
              }
              throw new Error("Cannot convert from " + r + " to " + t);
            }
            function h(e) {
              return e
                .map(function (e) {
                  var t = e.types.map(S);
                  return (e.restParam ? "..." : "") + t.join("|");
                })
                .join(",");
            }
            function d(e, t) {
              var r = 0 === e.indexOf("..."),
                n,
                a = (r ? (e.length > 3 ? e.slice(3) : "any") : e)
                  .split("|")
                  .map(z)
                  .filter(_)
                  .filter(D),
                o = j(t, a),
                i = a.map(function (e) {
                  var t = c(e);
                  return {
                    name: e,
                    typeIndex: l(t),
                    test: t.test,
                    conversion: null,
                    conversionIndex: -1,
                  };
                }),
                s = o.map(function (e) {
                  var r = c(e.from);
                  return {
                    name: e.from,
                    typeIndex: l(r),
                    test: r.test,
                    conversion: e,
                    conversionIndex: t.indexOf(e),
                  };
                });
              return { types: i.concat(s), restParam: r };
            }
            function g(e, t, r) {
              var n = [];
              return (
                "" !== e.trim() &&
                  (n = e
                    .split(",")
                    .map(z)
                    .map(function (e, t, n) {
                      var a = d(e, r);
                      if (a.restParam && t !== n.length - 1)
                        throw new SyntaxError(
                          'Unexpected rest parameter "' +
                            e +
                            '": only allowed for the last parameter'
                        );
                      return a;
                    })),
                n.some($) ? null : { params: n, fn: t }
              );
            }
            function y(e) {
              var t = W(e);
              return !!t && t.restParam;
            }
            function v(e) {
              return e.types.some(function (e) {
                return null != e.conversion;
              });
            }
            function x(t) {
              if (t && 0 !== t.types.length) {
                if (1 === t.types.length) return c(t.types[0].name).test;
                if (2 === t.types.length) {
                  var r = c(t.types[0].name).test,
                    n = c(t.types[1].name).test;
                  return function e(t) {
                    return r(t) || n(t);
                  };
                }
                var a = t.types.map(function (e) {
                  return c(e.name).test;
                });
                return function e(t) {
                  for (var r = 0; r < a.length; r++) if (a[r](t)) return !0;
                  return !1;
                };
              }
              return e;
            }
            function b(e) {
              var t, r, n;
              if (y(e)) {
                var a = (t = U(e).map(x)).length,
                  o = x(W(e)),
                  i = function (e) {
                    for (var t = a; t < e.length; t++) if (!o(e[t])) return !1;
                    return !0;
                  };
                return function e(r) {
                  for (var n = 0; n < t.length; n++) if (!t[n](r[n])) return !1;
                  return i(r) && r.length >= a + 1;
                };
              }
              return 0 === e.length
                ? function e(t) {
                    return 0 === t.length;
                  }
                : 1 === e.length
                ? ((r = x(e[0])),
                  function e(t) {
                    return r(t[0]) && 1 === t.length;
                  })
                : 2 === e.length
                ? ((r = x(e[0])),
                  (n = x(e[1])),
                  function e(t) {
                    return r(t[0]) && n(t[1]) && 2 === t.length;
                  })
                : ((t = e.map(x)),
                  function e(r) {
                    for (var n = 0; n < t.length; n++)
                      if (!t[n](r[n])) return !1;
                    return r.length === t.length;
                  });
            }
            function w(e, t) {
              return t < e.params.length
                ? e.params[t]
                : y(e.params)
                ? W(e.params)
                : null;
            }
            function N(e, t, r) {
              var n = w(e, t),
                a;
              return (n ? (r ? n.types.filter(E) : n.types) : []).map(S);
            }
            function S(e) {
              return e.name;
            }
            function E(e) {
              return null === e.conversion || void 0 === e.conversion;
            }
            function A(e, t) {
              var r = G(
                Q(e, function (e) {
                  return N(e, t, !1);
                })
              );
              return -1 !== r.indexOf("any") ? ["any"] : r;
            }
            function O(e, t, r) {
              var n,
                a,
                o = e || "unnamed",
                i = r,
                s;
              for (s = 0; s < t.length; s++) {
                var u = i.filter(function (e) {
                  var r = x(w(e, s));
                  return (s < e.params.length || y(e.params)) && r(t[s]);
                });
                if (0 === u.length) {
                  if ((a = A(i, s)).length > 0) {
                    var c = p(t[s]);
                    return (
                      ((n = new TypeError(
                        "Unexpected type of argument in function " +
                          o +
                          " (expected: " +
                          a.join(" or ") +
                          ", actual: " +
                          c +
                          ", index: " +
                          s +
                          ")"
                      )).data = {
                        category: "wrongType",
                        fn: o,
                        index: s,
                        actual: c,
                        expected: a,
                      }),
                      n
                    );
                  }
                } else i = u;
              }
              var l = i.map(function (e) {
                return y(e.params) ? 1 / 0 : e.params.length;
              });
              if (t.length < Math.min.apply(null, l))
                return (
                  (a = A(i, s)),
                  ((n = new TypeError(
                    "Too few arguments in function " +
                      o +
                      " (expected: " +
                      a.join(" or ") +
                      ", index: " +
                      t.length +
                      ")"
                  )).data = {
                    category: "tooFewArgs",
                    fn: o,
                    index: t.length,
                    expected: a,
                  }),
                  n
                );
              var f = Math.max.apply(null, l);
              return t.length > f
                ? (((n = new TypeError(
                    "Too many arguments in function " +
                      o +
                      " (expected: " +
                      f +
                      ", actual: " +
                      t.length +
                      ")"
                  )).data = {
                    category: "tooManyArgs",
                    fn: o,
                    index: t.length,
                    expectedLength: f,
                  }),
                  n)
                : (((n = new TypeError(
                    'Arguments of type "' +
                      t.join(", ") +
                      '" do not match any of the defined signatures of function ' +
                      o +
                      "."
                  )).data = { category: "mismatch", actual: t.map(p) }),
                  n);
            }
            function C(e) {
              for (var t = 999, r = 0; r < e.types.length; r++)
                E(e.types[r]) && (t = Math.min(t, e.types[r].typeIndex));
              return t;
            }
            function T(e) {
              for (var t = 999, r = 0; r < e.types.length; r++)
                E(e.types[r]) || (t = Math.min(t, e.types[r].conversionIndex));
              return t;
            }
            function M(e, t) {
              var r;
              return 0 !== (r = e.restParam - t.restParam) ||
                0 !== (r = v(e) - v(t)) ||
                0 !== (r = C(e) - C(t))
                ? r
                : T(e) - T(t);
            }
            function k(e, t) {
              var r = Math.min(e.params.length, t.params.length),
                n,
                a;
              if (0 !== (a = e.params.some(v) - t.params.some(v))) return a;
              for (n = 0; n < r; n++)
                if (0 !== (a = v(e.params[n]) - v(t.params[n]))) return a;
              for (n = 0; n < r; n++)
                if (0 !== (a = M(e.params[n], t.params[n]))) return a;
              return e.params.length - t.params.length;
            }
            function j(e, t) {
              var r = {};
              return (
                e.forEach(function (e) {
                  -1 !== t.indexOf(e.from) ||
                    -1 === t.indexOf(e.to) ||
                    r[e.from] ||
                    (r[e.from] = e);
                }),
                Object.keys(r).map(function (e) {
                  return r[e];
                })
              );
            }
            function q(e, t) {
              var r = t;
              if (e.some(v)) {
                var n = y(e),
                  a = e.map(P);
                r = function e() {
                  for (
                    var r = [],
                      o = n ? arguments.length - 1 : arguments.length,
                      i = 0;
                    i < o;
                    i++
                  )
                    r[i] = a[i](arguments[i]);
                  return n && (r[o] = arguments[o].map(a[o])), t.apply(this, r);
                };
              }
              var o = r;
              if (y(e)) {
                var i = e.length - 1;
                o = function e() {
                  return r.apply(
                    this,
                    H(arguments, 0, i).concat([H(arguments, i)])
                  );
                };
              }
              return o;
            }
            function P(e) {
              var t,
                r,
                n,
                a,
                o = [],
                i = [];
              switch (
                (e.types.forEach(function (e) {
                  e.conversion &&
                    (o.push(c(e.conversion.from).test),
                    i.push(e.conversion.convert));
                }),
                i.length)
              ) {
                case 0:
                  return function e(t) {
                    return t;
                  };
                case 1:
                  return (
                    (t = o[0]),
                    (n = i[0]),
                    function e(r) {
                      return t(r) ? n(r) : r;
                    }
                  );
                case 2:
                  return (
                    (t = o[0]),
                    (r = o[1]),
                    (n = i[0]),
                    (a = i[1]),
                    function e(o) {
                      return t(o) ? n(o) : r(o) ? a(o) : o;
                    }
                  );
                default:
                  return function e(t) {
                    for (var r = 0; r < i.length; r++)
                      if (o[r](t)) return i[r](t);
                    return t;
                  };
              }
            }
            function F(e) {
              var t = {};
              return (
                e.forEach(function (e) {
                  e.params.some(v) ||
                    I(e.params, !0).forEach(function (r) {
                      t[h(r)] = e.fn;
                    });
                }),
                t
              );
            }
            function I(e, t) {
              function r(e, n, a) {
                if (n < e.length) {
                  var o = e[n],
                    i = t ? o.types.filter(E) : o.types,
                    s;
                  if (o.restParam) {
                    var u = i.filter(E);
                    s = u.length < i.length ? [u, i] : [i];
                  } else
                    s = i.map(function (e) {
                      return [e];
                    });
                  return Q(s, function (t) {
                    return r(e, n + 1, a.concat([t]));
                  });
                }
                var c;
                return [
                  a.map(function (t, r) {
                    return { types: t, restParam: r === e.length - 1 && y(e) };
                  }),
                ];
              }
              return r(e, 0, []);
            }
            function R(e, t) {
              for (
                var r = Math.max(e.params.length, t.params.length), n = 0;
                n < r;
                n++
              ) {
                var a, o;
                if (!V(N(e, n, !0), N(t, n, !0))) return !1;
              }
              var i = e.params.length,
                s = t.params.length,
                u = y(e.params),
                c = y(t.params);
              return u ? (c ? i === s : s >= i) : c ? i >= s : i === s;
            }
            function B(e, n) {
              if (0 === Object.keys(n).length)
                throw new SyntaxError("No signatures provided");
              var a = [];
              Object.keys(n)
                .map(function (e) {
                  return g(e, n[e], u.conversions);
                })
                .filter(L)
                .forEach(function (e) {
                  var t = X(a, function (t) {
                    return R(t, e);
                  });
                  if (t)
                    throw new TypeError(
                      'Conflicting signatures "' +
                        h(t.params) +
                        '" and "' +
                        h(e.params) +
                        '".'
                    );
                  a.push(e);
                });
              var o = Q(a, function (e) {
                var t;
                return (e ? I(e.params, !1) : []).map(function (t) {
                  return { params: t, fn: e.fn };
                });
              }).filter(L);
              o.sort(k);
              var i = o[0] && o[0].params.length <= 2 && !y(o[0].params),
                s = o[1] && o[1].params.length <= 2 && !y(o[1].params),
                c = o[2] && o[2].params.length <= 2 && !y(o[2].params),
                l = o[3] && o[3].params.length <= 2 && !y(o[3].params),
                p = o[4] && o[4].params.length <= 2 && !y(o[4].params),
                f = o[5] && o[5].params.length <= 2 && !y(o[5].params),
                m = i && s && c && l && p && f,
                d = o.map(function (e) {
                  return b(e.params);
                }),
                v = i ? x(o[0].params[0]) : t,
                w = s ? x(o[1].params[0]) : t,
                N = c ? x(o[2].params[0]) : t,
                S = l ? x(o[3].params[0]) : t,
                E = p ? x(o[4].params[0]) : t,
                A = f ? x(o[5].params[0]) : t,
                C = i ? x(o[0].params[1]) : t,
                T = s ? x(o[1].params[1]) : t,
                M = c ? x(o[2].params[1]) : t,
                j = l ? x(o[3].params[1]) : t,
                P = p ? x(o[4].params[1]) : t,
                B = f ? x(o[5].params[1]) : t,
                D = o.map(function (e) {
                  return q(e.params, e.fn);
                }),
                z = i ? D[0] : r,
                _ = s ? D[1] : r,
                $ = c ? D[2] : r,
                U = l ? D[3] : r,
                W = p ? D[4] : r,
                H = f ? D[5] : r,
                J = i ? o[0].params.length : -1,
                V = s ? o[1].params.length : -1,
                G = c ? o[2].params.length : -1,
                Z = l ? o[3].params.length : -1,
                Y = p ? o[4].params.length : -1,
                K = f ? o[5].params.length : -1,
                ee = m ? 6 : 0,
                te = o.length,
                re = function t() {
                  for (var r = ee; r < te; r++)
                    if (d[r](arguments)) return D[r].apply(this, arguments);
                  throw O(e, arguments, o);
                },
                ne = function e(t, r) {
                  return arguments.length === J && v(t) && C(r)
                    ? z.apply(e, arguments)
                    : arguments.length === V && w(t) && T(r)
                    ? _.apply(e, arguments)
                    : arguments.length === G && N(t) && M(r)
                    ? $.apply(e, arguments)
                    : arguments.length === Z && S(t) && j(r)
                    ? U.apply(e, arguments)
                    : arguments.length === Y && E(t) && P(r)
                    ? W.apply(e, arguments)
                    : arguments.length === K && A(t) && B(r)
                    ? H.apply(e, arguments)
                    : re.apply(e, arguments);
                };
              try {
                Object.defineProperty(ne, "name", { value: e });
              } catch (e) {}
              return (ne.signatures = F(o)), ne;
            }
            function D(e) {
              return -1 === u.ignore.indexOf(e);
            }
            function z(e) {
              return e.trim();
            }
            function _(e) {
              return !!e;
            }
            function L(e) {
              return null !== e;
            }
            function $(e) {
              return 0 === e.types.length;
            }
            function U(e) {
              return e.slice(0, e.length - 1);
            }
            function W(e) {
              return e[e.length - 1];
            }
            function H(e, t, r) {
              return Array.prototype.slice.call(e, t, r);
            }
            function J(e, t) {
              return -1 !== e.indexOf(t);
            }
            function V(e, t) {
              for (var r = 0; r < e.length; r++) if (J(t, e[r])) return !0;
              return !1;
            }
            function X(e, t) {
              for (var r = 0; r < e.length; r++) if (t(e[r])) return e[r];
            }
            function G(e) {
              for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
              return Object.keys(t);
            }
            function Q(e, t) {
              return Array.prototype.concat.apply([], e.map(t));
            }
            function Z(e) {
              for (var t = "", r = 0; r < e.length; r++) {
                var n = e[r];
                if (
                  ("object" == typeof n.signatures ||
                    "string" == typeof n.signature) &&
                  "" !== n.name
                )
                  if ("" === t) t = n.name;
                  else if (t !== n.name) {
                    var a = new Error(
                      "Function names do not match (expected: " +
                        t +
                        ", actual: " +
                        n.name +
                        ")"
                    );
                    throw ((a.data = { actual: n.name, expected: t }), a);
                  }
              }
              return t;
            }
            function Y(e) {
              var t,
                r = {};
              function n(e, n) {
                if (r.hasOwnProperty(e) && n !== r[e])
                  throw (
                    (((t = new Error(
                      'Signature "' + e + '" is defined twice'
                    )).data = { signature: e }),
                    t)
                  );
              }
              for (var a = 0; a < e.length; a++) {
                var o = e[a];
                if ("object" == typeof o.signatures)
                  for (var i in o.signatures)
                    o.signatures.hasOwnProperty(i) &&
                      (n(i, o.signatures[i]), (r[i] = o.signatures[i]));
                else {
                  if ("string" != typeof o.signature)
                    throw (
                      (((t = new TypeError(
                        "Function is no typed-function (index: " + a + ")"
                      )).data = { index: a }),
                      t)
                    );
                  n(o.signature, o), (r[o.signature] = o);
                }
              }
              return r;
            }
            return (
              ((u = B("typed", {
                "string, Object": B,
                Object: function (e) {
                  var t = [],
                    r;
                  for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
                  return B(Z(t), e);
                },
                "...Function": function (e) {
                  return B(Z(e), Y(e));
                },
                "string, ...Function": function (e, t) {
                  return B(e, Y(t));
                },
              })).create = n),
              (u.types = a),
              (u.conversions = s),
              (u.ignore = i),
              (u.convert = m),
              (u.find = f),
              (u.addType = function (e, t) {
                if (
                  !e ||
                  "string" != typeof e.name ||
                  "function" != typeof e.test
                )
                  throw new TypeError(
                    "Object with properties {name: string, test: function} expected"
                  );
                if (!1 !== t)
                  for (var r = 0; r < u.types.length; r++)
                    if ("Object" === u.types[r].name)
                      return void u.types.splice(r, 0, e);
                u.types.push(e);
              }),
              (u.addConversion = function (e) {
                if (
                  !e ||
                  "string" != typeof e.from ||
                  "string" != typeof e.to ||
                  "function" != typeof e.convert
                )
                  throw new TypeError(
                    "Object with properties {from: string, to: string, convert: function} expected"
                  );
                u.conversions.push(e);
              }),
              u
            );
          }
          return n();
        });
      },
      42: () => {},
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var o = (t[n] = { id: n, loaded: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  (r.amdD = function () {
    throw new Error("define cannot be used indirect");
  }),
    (r.amdO = {}),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = {};
      function t(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.r(e),
        r.d(e, {
          createAbs: () => Dd,
          createAccessorNode: () => El,
          createAcos: () => Tg,
          createAcosh: () => Mg,
          createAcot: () => kg,
          createAcoth: () => jg,
          createAcsc: () => qg,
          createAcsch: () => Pg,
          createAdd: () => cg,
          createAddScalar: () => zd,
          createAnd: () => xg,
          createApply: () => Lp,
          createApplyTransform: () => jh,
          createArrayNode: () => Cl,
          createAsec: () => Fg,
          createAsech: () => Ig,
          createAsin: () => Rg,
          createAsinh: () => Bg,
          createAssignmentNode: () => Il,
          createAtan: () => Dg,
          createAtan2: () => zg,
          createAtanh: () => _g,
          createBellNumbers: () => uc,
          createBitAnd: () => fg,
          createBitNot: () => mg,
          createBitOr: () => hg,
          createBitXor: () => dg,
          createBlockNode: () => Dl,
          createBoolean: () => fl,
          createCatalan: () => pc,
          createCbrt: () => _d,
          createCeil: () => Ld,
          createChain: () => bu,
          createChainClass: () => ia,
          createClone: () => hd,
          createCombinations: () => Og,
          createCombinationsWithRep: () => hf,
          createCompare: () => Vf,
          createCompareNatural: () => Zf,
          createCompareText: () => rm,
          createCompile: () => qp,
          createComposition: () => hc,
          createConditionalNode: () => Ll,
          createConstantNode: () => Yl,
          createCos: () => Lg,
          createCosh: () => $g,
          createCot: () => Ug,
          createCoth: () => Wg,
          createCsc: () => Hg,
          createCsch: () => Jg,
          createCube: () => $d,
          createDeepEqual: () => Tm,
          createDerivative: () => Du,
          createDivide: () => pg,
          createDivideScalar: () => og,
          createE: () => Rc,
          createEqual: () => im,
          createEqualScalar: () => Uf,
          createEqualText: () => cm,
          createErf: () => Im,
          createEvaluate: () => Ip,
          createExp: () => Ud,
          createExpm1: () => Wd,
          createFactorial: () => vf,
          createFalse: () => kc,
          createFilter: () => Jp,
          createFilterTransform: () => Ih,
          createFix: () => Hd,
          createFloor: () => Jd,
          createForEach: () => Qp,
          createForEachTransform: () => zh,
          createFormat: () => Eh,
          createFunctionAssignmentNode: () => tp,
          createFunctionNode: () => Op,
          createGamma: () => Cg,
          createGcd: () => Vd,
          createHasNumericValue: () => bd,
          createHelp: () => yu,
          createHelpClass: () => na,
          createHypot: () => rc,
          createIndex: () => Sg,
          createIndexNode: () => ap,
          createInfinity: () => qc,
          createIsInteger: () => ey,
          createIsNaN: () => ay,
          createIsNegative: () => ty,
          createIsNumeric: () => yd,
          createIsPositive: () => ry,
          createIsPrime: () => Od,
          createIsZero: () => ny,
          createLN10: () => zc,
          createLN2: () => Dc,
          createLOG10E: () => Lc,
          createLOG2E: () => _c,
          createLarger: () => wm,
          createLargerEq: () => Am,
          createLcm: () => Xd,
          createLeftShift: () => gg,
          createLog: () => sg,
          createLog10: () => Gd,
          createLog1p: () => ug,
          createLog2: () => Qd,
          createMad: () => ph,
          createMap: () => ef,
          createMapTransform: () => $h,
          createMatrix: () => Eg,
          createMax: () => Qm,
          createMaxTransform: () => Vh,
          createMean: () => oh,
          createMeanTransform: () => Qh,
          createMedian: () => uh,
          createMin: () => Km,
          createMinTransform: () => Kh,
          createMod: () => Zd,
          createMode: () => Um,
          createMultinomial: () => wf,
          createMultiply: () => Kd,
          createMultiplyScalar: () => Yd,
          createNaN: () => Pc,
          createNode: () => xl,
          createNorm: () => lg,
          createNot: () => bg,
          createNthRoot: () => Hu,
          createNull: () => jc,
          createNumber: () => il,
          createNumeric: () => Md,
          createObjectNode: () => sp,
          createOperatorNode: () => lp,
          createOr: () => wg,
          createParenthesisNode: () => mp,
          createParse: () => Mp,
          createParser: () => dl,
          createParserClass: () => Dp,
          createPartitionSelect: () => pf,
          createPermutations: () => Ef,
          createPhi: () => Bc,
          createPi: () => Fc,
          createPickRandom: () => jf,
          createPow: () => ig,
          createPrint: () => Ch,
          createProd: () => Vm,
          createQuantileSeq: () => vh,
          createRandom: () => If,
          createRandomInt: () => zf,
          createRange: () => af,
          createRangeClass: () => $n,
          createRangeNode: () => gp,
          createRangeTransform: () => rd,
          createRationalize: () => Lu,
          createRelationalNode: () => xp,
          createReplacer: () => Id,
          createResultSet: () => zn,
          createReviver: () => qd,
          createRightArithShift: () => yg,
          createRightLogShift: () => vg,
          createRound: () => Ku,
          createSQRT1_2: () => $c,
          createSQRT2: () => Uc,
          createSec: () => Vg,
          createSech: () => Xg,
          createSign: () => eg,
          createSimplify: () => Iu,
          createSin: () => Gg,
          createSinh: () => Qg,
          createSize: () => uf,
          createSmaller: () => mm,
          createSmallerEq: () => ym,
          createSqrt: () => tg,
          createSquare: () => rg,
          createStd: () => wh,
          createStdTransform: () => od,
          createStirlingS2: () => oc,
          createString: () => cl,
          createSubset: () => Ag,
          createSubsetTransform: () => Kg,
          createSubtract: () => ng,
          createSum: () => rh,
          createSumTransform: () => ud,
          createSymbolNode: () => Np,
          createTan: () => Zg,
          createTanh: () => Yg,
          createTau: () => Ic,
          createTrue: () => Mc,
          createTypeOf: () => Sd,
          createTyped: () => qn,
          createUnaryMinus: () => Rd,
          createUnaryPlus: () => Bd,
          createUnequal: () => qm,
          createUppercaseE: () => Jc,
          createUppercasePi: () => Hc,
          createVariance: () => dh,
          createVarianceTransform: () => pd,
          createVersion: () => Vc,
          createXgcd: () => ag,
          createXor: () => Ng,
        });
      var n = 550,
        a = {
          DEFAULT_WIDTH: n,
          DEFAULT_HEIGHT: 350,
          TIP_X_EPS: 1,
          DEFAULT_ITERATIONS: void 0,
          MAX_ITERATIONS: 1100,
        },
        o = r(653),
        i = r.n(o),
        s = function e(t) {
          return "number" == typeof t && !isNaN(t);
        },
        u = function e(t, r) {
          return i()(t.lo, t.hi, r);
        },
        c = function e(t) {
          return t < 0 ? -1 : t > 0 ? 1 : 0;
        };
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function p(e) {
        return "number" == typeof e;
      }
      function f(e) {
        return (
          !(!e || "object" != typeof e || "function" != typeof e.constructor) &&
          ((!0 === e.isBigNumber &&
            "object" == typeof e.constructor.prototype &&
            !0 === e.constructor.prototype.isBigNumber) ||
            ("function" == typeof e.constructor.isDecimal &&
              !0 === e.constructor.isDecimal(e)))
        );
      }
      function m(e) {
        return (
          (e &&
            "object" == typeof e &&
            !0 === Object.getPrototypeOf(e).isComplex) ||
          !1
        );
      }
      function h(e) {
        return (
          (e &&
            "object" == typeof e &&
            !0 === Object.getPrototypeOf(e).isFraction) ||
          !1
        );
      }
      function d(e) {
        return (e && !0 === e.constructor.prototype.isUnit) || !1;
      }
      function g(e) {
        return "string" == typeof e;
      }
      var y = Array.isArray;
      function v(e) {
        return (e && !0 === e.constructor.prototype.isMatrix) || !1;
      }
      function x(e) {
        return Array.isArray(e) || v(e);
      }
      function b(e) {
        return (
          (e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix) ||
          !1
        );
      }
      function w(e) {
        return (
          (e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix) ||
          !1
        );
      }
      function N(e) {
        return (e && !0 === e.constructor.prototype.isRange) || !1;
      }
      function S(e) {
        return (e && !0 === e.constructor.prototype.isIndex) || !1;
      }
      function E(e) {
        return "boolean" == typeof e;
      }
      function A(e) {
        return (e && !0 === e.constructor.prototype.isResultSet) || !1;
      }
      function O(e) {
        return (e && !0 === e.constructor.prototype.isHelp) || !1;
      }
      function C(e) {
        return "function" == typeof e;
      }
      function T(e) {
        return e instanceof Date;
      }
      function M(e) {
        return e instanceof RegExp;
      }
      function k(e) {
        return !(
          !e ||
          "object" != typeof e ||
          e.constructor !== Object ||
          m(e) ||
          h(e)
        );
      }
      function j(e) {
        return null === e;
      }
      function q(e) {
        return void 0 === e;
      }
      function P(e) {
        return (
          (e &&
            !0 === e.isAccessorNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function F(e) {
        return (
          (e &&
            !0 === e.isArrayNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function I(e) {
        return (
          (e &&
            !0 === e.isAssignmentNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function R(e) {
        return (
          (e &&
            !0 === e.isBlockNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function B(e) {
        return (
          (e &&
            !0 === e.isConditionalNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function D(e) {
        return (
          (e &&
            !0 === e.isConstantNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function z(e) {
        return (
          (e &&
            !0 === e.isFunctionAssignmentNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function _(e) {
        return (
          (e &&
            !0 === e.isFunctionNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function L(e) {
        return (
          (e &&
            !0 === e.isIndexNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function $(e) {
        return (
          (e && !0 === e.isNode && !0 === e.constructor.prototype.isNode) || !1
        );
      }
      function U(e) {
        return (
          (e &&
            !0 === e.isObjectNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function W(e) {
        return (
          (e &&
            !0 === e.isOperatorNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function H(e) {
        return (
          (e &&
            !0 === e.isParenthesisNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function J(e) {
        return (
          (e &&
            !0 === e.isRangeNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function V(e) {
        return (
          (e &&
            !0 === e.isSymbolNode &&
            !0 === e.constructor.prototype.isNode) ||
          !1
        );
      }
      function X(e) {
        return (e && !0 === e.constructor.prototype.isChain) || !1;
      }
      function G(e) {
        var t = typeof e;
        return "object" === t
          ? null === e
            ? "null"
            : Array.isArray(e)
            ? "Array"
            : e instanceof Date
            ? "Date"
            : e instanceof RegExp
            ? "RegExp"
            : f(e)
            ? "BigNumber"
            : m(e)
            ? "Complex"
            : h(e)
            ? "Fraction"
            : v(e)
            ? "Matrix"
            : d(e)
            ? "Unit"
            : S(e)
            ? "Index"
            : N(e)
            ? "Range"
            : A(e)
            ? "ResultSet"
            : $(e)
            ? e.type
            : X(e)
            ? "Chain"
            : O(e)
            ? "Help"
            : "Object"
          : "function" === t
          ? "Function"
          : t;
      }
      function Q(e) {
        var t = typeof e;
        if ("number" === t || "string" === t || "boolean" === t || null == e)
          return e;
        if ("function" == typeof e.clone) return e.clone();
        if (Array.isArray(e))
          return e.map(function (e) {
            return Q(e);
          });
        if (e instanceof Date) return new Date(e.valueOf());
        if (f(e)) return e;
        if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
        return Z(e, Q);
      }
      function Z(e, t) {
        var r = {};
        for (var n in e) ie(e, n) && (r[n] = t(e[n]));
        return r;
      }
      function Y(e, t) {
        for (var r in t) ie(t, r) && (e[r] = t[r]);
        return e;
      }
      function K(e, t) {
        if (Array.isArray(t))
          throw new TypeError("Arrays are not supported by deepExtend");
        for (var r in t)
          if (
            ie(t, r) &&
            !(r in Object.prototype) &&
            !(r in Function.prototype)
          )
            if (t[r] && t[r].constructor === Object)
              void 0 === e[r] && (e[r] = {}),
                e[r] && e[r].constructor === Object
                  ? K(e[r], t[r])
                  : (e[r] = t[r]);
            else {
              if (Array.isArray(t[r]))
                throw new TypeError("Arrays are not supported by deepExtend");
              e[r] = t[r];
            }
        return e;
      }
      function ee(e, t) {
        var r, n, a;
        if (Array.isArray(e)) {
          if (!Array.isArray(t)) return !1;
          if (e.length !== t.length) return !1;
          for (n = 0, a = e.length; n < a; n++) if (!ee(e[n], t[n])) return !1;
          return !0;
        }
        if ("function" == typeof e) return e === t;
        if (e instanceof Object) {
          if (Array.isArray(t) || !(t instanceof Object)) return !1;
          for (r in e) if (!(r in t) || !ee(e[r], t[r])) return !1;
          for (r in t) if (!(r in e) || !ee(e[r], t[r])) return !1;
          return !0;
        }
        return e === t;
      }
      function te(e) {
        var t = {};
        return re(e, t), t;
      }
      function re(e, t) {
        for (var r in e)
          if (ie(e, r)) {
            var n = e[r];
            "object" == typeof n && null !== n ? re(n, t) : (t[r] = n);
          }
      }
      function ne() {
        try {
          if (Object.defineProperty)
            return Object.defineProperty({}, "x", { get: function e() {} }), !0;
        } catch (e) {}
        return !1;
      }
      function ae(e, t, r) {
        var n = !0,
          a;
        Object.defineProperty(e, t, {
          get: function e() {
            return n && ((a = r()), (n = !1)), a;
          },
          set: function e(t) {
            (a = t), (n = !1);
          },
          configurable: !0,
          enumerable: !0,
        });
      }
      function oe(e, t) {
        if (t && "string" == typeof t) return oe(e, t.split("."));
        var r = e;
        if (t)
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a in r || (r[a] = {}), (r = r[a]);
          }
        return r;
      }
      function ie(e, t) {
        return e && Object.hasOwnProperty.call(e, t);
      }
      function se(e) {
        return e && "function" == typeof e.factory;
      }
      function ue(e, t) {
        if ("string" == typeof t) return me(t) ? ue(e, t.split(".")) : e[t];
        for (var r = e, n = 0; n < t.length; n++) {
          var a = t[n];
          r = r ? r[a] : void 0;
        }
        return r;
      }
      function ce(e, t, r) {
        if ("string" == typeof t)
          return me(t) ? ce(e, t.split("."), r) : ((e[t] = r), e);
        for (var n = e, a = 0, o; a < t.length - 1; a++) {
          var i = t[a];
          void 0 === n[i] && (n[i] = {}), (n = n[i]);
        }
        t.length > 0 && (n[t[t.length - 1]] = r);
        return e;
      }
      function le(e, t, r) {
        for (var n = {}, a = 0; a < t.length; a++) {
          var o = t[a],
            i = ue(e, o);
          void 0 !== i && ce(n, o, r ? r(i, o) : i);
        }
        return n;
      }
      function pe(e, t) {
        for (var r = {}, n = 0; n < t.length; n++) {
          var a = t[n],
            o = e[a];
          void 0 !== o && (r[a] = o);
        }
        return r;
      }
      function fe(e) {
        return Object.keys(e).map((t) => e[t]);
      }
      function me(e) {
        return -1 !== e.indexOf(".");
      }
      var he = r(279);
      function de(e) {
        var t = new he();
        return (
          (e.on = t.on.bind(t)),
          (e.off = t.off.bind(t)),
          (e.once = t.once.bind(t)),
          (e.emit = t.emit.bind(t)),
          e
        );
      }
      function ge(e, t, r, n) {
        function a(n) {
          var a = pe(n, t.map(Ne));
          return be(e, t, n), r(a);
        }
        return (
          (a.isFactory = !0),
          (a.fn = e),
          (a.dependencies = t.slice().sort()),
          n && (a.meta = n),
          a
        );
      }
      function ye(e) {
        var t = {};
        function r(e, n) {
          if (xe(e)) {
            if (contains(e.dependencies, n.fn || n.name)) return !0;
            if (e.dependencies.some((e) => r(t[e], n))) return !0;
          }
          return !1;
        }
        e.forEach((e) => {
          t[e.fn] = e;
        });
        var n = [];
        function a(e) {
          for (var t = 0; t < n.length && !r(n[t], e); ) t++;
          n.splice(t, 0, e);
        }
        return e.filter(xe).forEach(a), e.filter((e) => !xe(e)).forEach(a), n;
      }
      function ve(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return ye(e).forEach((e) => e(t)), t;
      }
      function xe(e) {
        return (
          "function" == typeof e &&
          "string" == typeof e.fn &&
          Array.isArray(e.dependencies)
        );
      }
      function be(e, t, r) {
        var n;
        if (!t.filter((e) => !we(e)).every((e) => void 0 !== r[e])) {
          var a = t.filter((e) => void 0 === r[e]);
          throw new Error(
            'Cannot create function "'.concat(e, '", ') +
              "some dependencies are missing: ".concat(
                a.map((e) => '"'.concat(e, '"')).join(", "),
                "."
              )
          );
        }
      }
      function we(e) {
        return e && "?" === e[0];
      }
      function Ne(e) {
        return e && "?" === e[0] ? e.slice(1) : e;
      }
      function Se(e) {
        for (var t = []; Array.isArray(e); ) t.push(e.length), (e = e[0]);
        return t;
      }
      function Ee(e, t, r) {
        var n,
          a = e.length;
        if (a !== t[r]) throw new DimensionError(a, t[r]);
        if (r < t.length - 1) {
          var o = r + 1;
          for (n = 0; n < a; n++) {
            var i = e[n];
            if (!Array.isArray(i))
              throw new DimensionError(t.length - 1, t.length, "<");
            Ee(e[n], t, o);
          }
        } else
          for (n = 0; n < a; n++)
            if (Array.isArray(e[n]))
              throw new DimensionError(t.length + 1, t.length, ">");
      }
      function Ae(e, t) {
        var r;
        if (0 === t.length) {
          if (Array.isArray(e)) throw new DimensionError(e.length, 0);
        } else Ee(e, t, 0);
      }
      function Oe(e, t) {
        if (!isNumber(e) || !isInteger(e))
          throw new TypeError("Index must be an integer (value: " + e + ")");
        if (e < 0 || ("number" == typeof t && e >= t))
          throw new IndexError(e, t);
      }
      function Ce(e, t, r) {
        if (!Array.isArray(e) || !Array.isArray(t))
          throw new TypeError("Array expected");
        if (0 === t.length)
          throw new Error("Resizing to scalar is not supported");
        var n;
        return (
          t.forEach(function (e) {
            if (!isNumber(e) || !isInteger(e) || e < 0)
              throw new TypeError(
                "Invalid size, must contain positive integers (size: " +
                  format(t) +
                  ")"
              );
          }),
          Te(e, t, 0, void 0 !== r ? r : 0),
          e
        );
      }
      function Te(e, t, r, n) {
        var a,
          o,
          i = e.length,
          s = t[r],
          u = Math.min(i, s);
        if (((e.length = s), r < t.length - 1)) {
          var c = r + 1;
          for (a = 0; a < u; a++)
            (o = e[a]),
              Array.isArray(o) || ((o = [o]), (e[a] = o)),
              Te(o, t, c, n);
          for (a = u; a < s; a++) (o = []), (e[a] = o), Te(o, t, c, n);
        } else {
          for (a = 0; a < u; a++) for (; Array.isArray(e[a]); ) e[a] = e[a][0];
          for (a = u; a < s; a++) e[a] = n;
        }
      }
      function Me(e, t) {
        var r = Be(e),
          n = r.length;
        if (!Array.isArray(e) || !Array.isArray(t))
          throw new TypeError("Array expected");
        if (0 === t.length) throw new DimensionError(0, n, "!=");
        var a = je((t = ke(t, n)));
        if (n !== a) throw new DimensionError(a, n, "!=");
        try {
          return qe(r, t);
        } catch (e) {
          if (e instanceof DimensionError) throw new DimensionError(a, n, "!=");
          throw e;
        }
      }
      function ke(e, t) {
        var r = je(e),
          n = e.slice(),
          a = -1,
          o = e.indexOf(a),
          i,
          s,
          u;
        if (e.indexOf(a, o + 1) >= 0)
          throw new Error("More than one wildcard in sizes");
        if (o >= 0) {
          if (!(t % r == 0))
            throw new Error(
              "Could not replace wildcard, since " +
                t +
                " is no multiple of " +
                -r
            );
          n[o] = -t / r;
        }
        return n;
      }
      function je(e) {
        return e.reduce((e, t) => e * t, 1);
      }
      function qe(e, t) {
        for (var r = e, n, a = t.length - 1; a > 0; a--) {
          var o = t[a];
          n = [];
          for (var i = r.length / o, s = 0; s < i; s++)
            n.push(r.slice(s * o, (s + 1) * o));
          r = n;
        }
        return r;
      }
      function Pe(e, t) {
        for (var r = t || Se(e); Array.isArray(e) && 1 === e.length; )
          (e = e[0]), r.shift();
        for (var n = r.length; 1 === r[n - 1]; ) n--;
        return n < r.length && ((e = Fe(e, n, 0)), (r.length = n)), e;
      }
      function Fe(e, t, r) {
        var n, a;
        if (r < t) {
          var o = r + 1;
          for (n = 0, a = e.length; n < a; n++) e[n] = Fe(e[n], t, o);
        } else for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Ie(e, t, r, n) {
        var a = n || Se(e);
        if (r) for (var o = 0; o < r; o++) (e = [e]), a.unshift(1);
        for (e = Re(e, t, 0); a.length < t; ) a.push(1);
        return e;
      }
      function Re(e, t, r) {
        var n, a;
        if (Array.isArray(e)) {
          var o = r + 1;
          for (n = 0, a = e.length; n < a; n++) e[n] = Re(e[n], t, o);
        } else for (var i = r; i < t; i++) e = [e];
        return e;
      }
      function Be(e) {
        if (!Array.isArray(e)) return e;
        var t = [];
        return (
          e.forEach(function e(r) {
            Array.isArray(r) ? r.forEach(e) : t.push(r);
          }),
          t
        );
      }
      function De(e, t) {
        return Array.prototype.map.call(e, t);
      }
      function ze(e, t) {
        Array.prototype.forEach.call(e, t);
      }
      function _e(e, t) {
        if (1 !== Se(e).length)
          throw new Error("Only one dimensional matrices supported");
        return Array.prototype.filter.call(e, t);
      }
      function Le(e, t) {
        if (1 !== Se(e).length)
          throw new Error("Only one dimensional matrices supported");
        return Array.prototype.filter.call(e, (e) => t.test(e));
      }
      function $e(e, t) {
        return Array.prototype.join.call(e, t);
      }
      function Ue(e) {
        if (!Array.isArray(e)) throw new TypeError("Array input expected");
        if (0 === e.length) return e;
        var t = [],
          r = 0;
        t[0] = { value: e[0], identifier: 0 };
        for (var n = 1; n < e.length; n++)
          e[n] === e[n - 1] ? r++ : (r = 0),
            t.push({ value: e[n], identifier: r });
        return t;
      }
      function We(e) {
        if (!Array.isArray(e)) throw new TypeError("Array input expected");
        if (0 === e.length) return e;
        for (var t = [], r = 0; r < e.length; r++) t.push(e[r].value);
        return t;
      }
      function He(e, t) {
        for (var r, n = 0, a = 0; a < e.length; a++) {
          var o = e[a],
            i = Array.isArray(o);
          if ((0 === a && i && (n = o.length), i && o.length !== n)) return;
          var s = i ? He(o, t) : t(o);
          if (void 0 === r) r = s;
          else if (r !== s) return "mixed";
        }
        return r;
      }
      function Je(e) {
        return e[e.length - 1];
      }
      function Ve(e) {
        return e.slice(0, e.length - 1);
      }
      function Xe(e, t) {
        return -1 !== e.indexOf(t);
      }
      function Ge(e, t, r, n) {
        if (!(this instanceof Ge))
          throw new SyntaxError(
            "Constructor must be called with the new operator"
          );
        (this.fn = e),
          (this.count = t),
          (this.min = r),
          (this.max = n),
          (this.message =
            "Wrong number of arguments in function " +
            e +
            " (" +
            t +
            " provided, " +
            r +
            (null != n ? "-" + n : "") +
            " expected)"),
          (this.stack = new Error().stack);
      }
      function Qe(e, t, r, n) {
        function a(e, t) {
          var r = arguments.length;
          if (1 !== r && 2 !== r) throw new Ge("import", r, 1, 2);
          function n(e, r, a) {
            if (Array.isArray(r)) r.forEach((t) => n(e, t));
            else if ("object" == typeof r)
              for (var o in r) ie(r, o) && n(e, r[o], o);
            else if (xe(r) || void 0 !== a) {
              var i = xe(r) ? (b(r) ? r.fn + ".transform" : r.fn) : a;
              if (ie(e, i) && e[i] !== r && !t.silent)
                throw new Error('Cannot import "' + i + '" twice');
              e[i] = r;
            } else if (!t.silent)
              throw new TypeError("Factory, Object, or Array expected");
          }
          t || (t = {});
          var a = {};
          for (var i in (n(a, e), a))
            if (ie(a, i)) {
              var s = a[i];
              if (xe(s)) c(s, t);
              else if (l(s)) o(i, s, t);
              else if (!t.silent)
                throw new TypeError("Factory, Object, or Array expected");
            }
        }
        function o(t, a, o) {
          if (
            (o.wrap && "function" == typeof a && (a = u(a)),
            g(a) && (a = e(t, { [a.signature]: a })),
            p(r[t]) && p(a))
          )
            return (
              (a = o.override ? e(t, a.signatures) : e(r[t], a)),
              (r[t] = a),
              delete n[t],
              i(t, a),
              void r.emit("import", t, function e() {
                return a;
              })
            );
          if (void 0 === r[t] || o.override)
            return (
              (r[t] = a),
              delete n[t],
              i(t, a),
              void r.emit("import", t, function e() {
                return a;
              })
            );
          if (!o.silent)
            throw new Error('Cannot import "' + t + '": already exists');
        }
        function i(e, t) {
          t && "function" == typeof t.transform
            ? ((r.expression.transform[e] = t.transform),
              y(e) && (r.expression.mathWithTransform[e] = t.transform))
            : (delete r.expression.transform[e],
              y(e) && (r.expression.mathWithTransform[e] = t));
        }
        function s(e) {
          delete r.expression.transform[e],
            y(e)
              ? (r.expression.mathWithTransform[e] = r[e])
              : delete r.expression.mathWithTransform[e];
        }
        function u(e) {
          var t = function t() {
            for (var n = [], a = 0, o = arguments.length; a < o; a++) {
              var i = arguments[a];
              n[a] = i && i.valueOf();
            }
            return e.apply(r, n);
          };
          return e.transform && (t.transform = e.transform), t;
        }
        function c(t, a) {
          var o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : t.fn;
          if (Xe(o, "."))
            throw new Error(
              "Factory name should not contain a nested path. Name: " +
                JSON.stringify(o)
            );
          var i = b(t) ? r.expression.transform : r,
            u = o in r.expression.transform,
            c = ie(i, o) ? i[o] : void 0,
            l = function n() {
              var i = {};
              t.dependencies.map(Ne).forEach((e) => {
                if (Xe(e, "."))
                  throw new Error(
                    "Factory dependency should not contain a nested path. Name: " +
                      JSON.stringify(e)
                  );
                "math" === e
                  ? (i.math = r)
                  : "mathWithTransform" === e
                  ? (i.mathWithTransform = r.expression.mathWithTransform)
                  : "classes" === e
                  ? (i.classes = r)
                  : (i[e] = r[e]);
              });
              var s = t(i);
              if (s && "function" == typeof s.transform)
                throw new Error(
                  'Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"'
                );
              if (void 0 === c || a.override) return s;
              if (p(c) && p(s)) return e(c, s);
              if (a.silent) return c;
              throw new Error('Cannot import "' + o + '": already exists');
            };
          t.meta && !1 === t.meta.lazy
            ? ((i[o] = l()),
              c && u
                ? s(o)
                : (b(t) || x(t)) &&
                  ae(r.expression.mathWithTransform, o, () => i[o]))
            : (ae(i, o, l),
              c && u
                ? s(o)
                : (b(t) || x(t)) &&
                  ae(r.expression.mathWithTransform, o, () => i[o])),
            (n[o] = t),
            r.emit("import", o, l);
        }
        function l(e) {
          return (
            "function" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "boolean" == typeof e ||
            null === e ||
            d(e) ||
            m(e) ||
            f(e) ||
            h(e) ||
            v(e) ||
            Array.isArray(e)
          );
        }
        function p(e) {
          return "function" == typeof e && "object" == typeof e.signatures;
        }
        function g(e) {
          return "function" == typeof e && "string" == typeof e.signature;
        }
        function y(e) {
          return !ie(w, e);
        }
        function x(e) {
          return !(
            -1 !== e.fn.indexOf(".") ||
            ie(w, e.fn) ||
            (e.meta && e.meta.isClass)
          );
        }
        function b(e) {
          return (
            (void 0 !== e &&
              void 0 !== e.meta &&
              !0 === e.meta.isTransformFunction) ||
            !1
          );
        }
        var w = {
          expression: !0,
          type: !0,
          docs: !0,
          error: !0,
          json: !0,
          chain: !0,
        };
        return a;
      }
      (Ge.prototype = new Error()),
        (Ge.prototype.constructor = Error),
        (Ge.prototype.name = "ArgumentsError"),
        (Ge.prototype.isArgumentsError = !0);
      var Ze = {
          epsilon: 1e-12,
          matrix: "Matrix",
          number: "number",
          precision: 64,
          predictable: !1,
          randomSeed: null,
        },
        Ye = ["Matrix", "Array"],
        Ke = ["number", "BigNumber", "Fraction"];
      function et(e, t) {
        function r(r) {
          if (r) {
            var n = Z(e, Q);
            rt(r, "matrix", Ye), rt(r, "number", Ke), K(e, r);
            var a = Z(e, Q),
              o = Z(r, Q);
            return t("config", a, n, o), a;
          }
          return Z(e, Q);
        }
        return (
          (r.MATRIX_OPTIONS = Ye),
          (r.NUMBER_OPTIONS = Ke),
          Object.keys(Ze).forEach((t) => {
            Object.defineProperty(r, t, {
              get: () => e[t],
              enumerable: !0,
              configurable: !0,
            });
          }),
          r
        );
      }
      function tt(e, t) {
        return -1 !== e.indexOf(t);
      }
      function rt(e, t, r) {
        void 0 === e[t] ||
          tt(r, e[t]) ||
          console.warn(
            'Warning: Unknown value "' +
              e[t] +
              '" for configuration option "' +
              t +
              '". Available options: ' +
              r.map((e) => JSON.stringify(e)).join(", ") +
              "."
          );
      }
      function nt(e, t, r) {
        if (!(this instanceof nt))
          throw new SyntaxError(
            "Constructor must be called with the new operator"
          );
        (this.actual = e),
          (this.expected = t),
          (this.relation = r),
          (this.message =
            "Dimension mismatch (" +
            (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) +
            " " +
            (this.relation || "!=") +
            " " +
            (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) +
            ")"),
          (this.stack = new Error().stack);
      }
      function at(e, t, r) {
        if (!(this instanceof at))
          throw new SyntaxError(
            "Constructor must be called with the new operator"
          );
        (this.index = e),
          arguments.length < 3
            ? ((this.min = 0), (this.max = t))
            : ((this.min = t), (this.max = r)),
          void 0 !== this.min && this.index < this.min
            ? (this.message =
                "Index out of range (" + this.index + " < " + this.min + ")")
            : void 0 !== this.max && this.index >= this.max
            ? (this.message =
                "Index out of range (" +
                this.index +
                " > " +
                (this.max - 1) +
                ")")
            : (this.message = "Index out of range (" + this.index + ")"),
          (this.stack = new Error().stack);
      }
      function ot(e, t) {
        var r = l({}, Ze, t);
        if ("function" != typeof Object.create)
          throw new Error(
            "ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility."
          );
        var n = de({
          isNumber: p,
          isComplex: m,
          isBigNumber: f,
          isFraction: h,
          isUnit: d,
          isString: g,
          isArray: y,
          isMatrix: v,
          isCollection: x,
          isDenseMatrix: b,
          isSparseMatrix: w,
          isRange: N,
          isIndex: S,
          isBoolean: E,
          isResultSet: A,
          isHelp: O,
          isFunction: C,
          isDate: T,
          isRegExp: M,
          isObject: k,
          isNull: j,
          isUndefined: q,
          isAccessorNode: P,
          isArrayNode: F,
          isAssignmentNode: I,
          isBlockNode: R,
          isConditionalNode: B,
          isConstantNode: D,
          isFunctionAssignmentNode: z,
          isFunctionNode: _,
          isIndexNode: L,
          isNode: $,
          isObjectNode: U,
          isOperatorNode: W,
          isParenthesisNode: H,
          isRangeNode: J,
          isSymbolNode: V,
          isChain: X,
        });
        (n.config = et(r, n.emit)),
          (n.expression = {
            transform: {},
            mathWithTransform: { config: n.config },
          });
        var a = [],
          o = [];
        function i(e) {
          if (xe(e)) return e(n);
          var t = e[Object.keys(e)[0]];
          if (xe(t)) return t(n);
          if (!se(e))
            throw (
              (console.warn(
                "Factory object with properties `type`, `name`, and `factory` expected",
                e
              ),
              new Error(
                "Factory object with properties `type`, `name`, and `factory` expected"
              ))
            );
          var s = a.indexOf(e),
            u;
          return (
            -1 === s
              ? ((u =
                  !0 === e.math
                    ? e.factory(n.type, r, i, n.typed, n)
                    : e.factory(n.type, r, i, n.typed)),
                a.push(e),
                o.push(u))
              : (u = o[s]),
            u
          );
        }
        var s = {};
        function u() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return n.typed.apply(n.typed, t);
        }
        var c = Qe(u, i, n, s);
        return (
          (n.import = c),
          n.on("config", () => {
            fe(s).forEach((e) => {
              e &&
                e.meta &&
                e.meta.recreateOnConfigChange &&
                c(e, { override: !0 });
            });
          }),
          (n.create = ot.bind(null, e)),
          (n.factory = ge),
          n.import(fe(te(e))),
          (n.ArgumentsError = Ge),
          (n.DimensionError = nt),
          (n.IndexError = at),
          n
        );
      }
      function it(e) {
        return "boolean" == typeof e || (!!isFinite(e) && e === Math.round(e));
      }
      (nt.prototype = new RangeError()),
        (nt.prototype.constructor = RangeError),
        (nt.prototype.name = "DimensionError"),
        (nt.prototype.isDimensionError = !0),
        (at.prototype = new RangeError()),
        (at.prototype.constructor = RangeError),
        (at.prototype.name = "IndexError"),
        (at.prototype.isIndexError = !0);
      var st =
          Math.sign ||
          function (e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          },
        ut =
          Math.log2 ||
          function e(t) {
            return Math.log(t) / Math.LN2;
          },
        ct =
          Math.log10 ||
          function e(t) {
            return Math.log(t) / Math.LN10;
          },
        lt =
          Math.log1p ||
          function (e) {
            return Math.log(e + 1);
          },
        pt =
          Math.cbrt ||
          function e(t) {
            if (0 === t) return t;
            var r = t < 0,
              n;
            return (
              r && (t = -t),
              (n = isFinite(t)
                ? (t / ((n = Math.exp(Math.log(t) / 3)) * n) + 2 * n) / 3
                : t),
              r ? -n : n
            );
          },
        ft =
          Math.expm1 ||
          function e(t) {
            return t >= 2e-4 || t <= -2e-4
              ? Math.exp(t) - 1
              : t + (t * t) / 2 + (t * t * t) / 6;
          };
      function mt(e, t, r) {
        var n,
          a = { 2: "0b", 8: "0o", 16: "0x" }[t],
          o = "";
        if (r) {
          if (r < 1) throw new Error("size must be in greater than 0");
          if (!it(r)) throw new Error("size must be an integer");
          if (e > 2 ** (r - 1) - 1 || e < -(2 ** (r - 1)))
            throw new Error(
              "Value must be in range [-2^"
                .concat(r - 1, ", 2^")
                .concat(r - 1, "-1]")
            );
          if (!it(e)) throw new Error("Value must be an integer");
          e < 0 && (e += 2 ** r), (o = "i".concat(r));
        }
        var i = "";
        return (
          e < 0 && ((e = -e), (i = "-")),
          "".concat(i).concat(a).concat(e.toString(t)).concat(o)
        );
      }
      function ht(e, t) {
        if ("function" == typeof t) return t(e);
        if (e === 1 / 0) return "Infinity";
        if (e === -1 / 0) return "-Infinity";
        if (isNaN(e)) return "NaN";
        var r = "auto",
          n,
          a;
        if (
          t &&
          (t.notation && (r = t.notation),
          p(t) ? (n = t) : p(t.precision) && (n = t.precision),
          t.wordSize && "number" != typeof (a = t.wordSize))
        )
          throw new Error('Option "wordSize" must be a number');
        switch (r) {
          case "fixed":
            return yt(e, n);
          case "exponential":
            return vt(e, n);
          case "engineering":
            return gt(e, n);
          case "bin":
            return mt(e, 2, a);
          case "oct":
            return mt(e, 8, a);
          case "hex":
            return mt(e, 16, a);
          case "auto":
            return xt(e, n, t && t).replace(/((\.\d*?)(0+))($|e)/, function () {
              var e = arguments[2],
                t = arguments[4];
              return "." !== e ? e + t : t;
            });
          default:
            throw new Error(
              'Unknown notation "' +
                r +
                '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.'
            );
        }
      }
      function dt(e) {
        var t = String(e)
          .toLowerCase()
          .match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
        if (!t) throw new SyntaxError("Invalid number " + e);
        var r = t[1],
          n = t[2],
          a = parseFloat(t[4] || "0"),
          o = n.indexOf(".");
        a += -1 !== o ? o - 1 : n.length - 1;
        var i = n
          .replace(".", "")
          .replace(/^0*/, function (e) {
            return (a -= e.length), "";
          })
          .replace(/0*$/, "")
          .split("")
          .map(function (e) {
            return parseInt(e);
          });
        return (
          0 === i.length && (i.push(0), a++),
          { sign: r, coefficients: i, exponent: a }
        );
      }
      function gt(e, t) {
        if (isNaN(e) || !isFinite(e)) return String(e);
        var r,
          n = bt(dt(e), t),
          a = n.exponent,
          o = n.coefficients,
          i = a % 3 == 0 ? a : a < 0 ? a - 3 - (a % 3) : a - (a % 3);
        if (p(t)) for (; t > o.length || a - i + 1 > o.length; ) o.push(0);
        else
          for (var s = Math.abs(a - i) - (o.length - 1), u = 0; u < s; u++)
            o.push(0);
        for (var c = Math.abs(a - i), l = 1; c > 0; ) l++, c--;
        var f = o.slice(l).join(""),
          m = (p(t) && f.length) || f.match(/[1-9]/) ? "." + f : "",
          h =
            o.slice(0, l).join("") +
            m +
            "e" +
            (a >= 0 ? "+" : "") +
            i.toString();
        return n.sign + h;
      }
      function yt(e, t) {
        if (isNaN(e) || !isFinite(e)) return String(e);
        var r = dt(e),
          n = "number" == typeof t ? bt(r, r.exponent + 1 + t) : r,
          a = n.coefficients,
          o = n.exponent + 1,
          i = o + (t || 0);
        return (
          a.length < i && (a = a.concat(wt(i - a.length))),
          o < 0 && ((a = wt(1 - o).concat(a)), (o = 1)),
          o < a.length && a.splice(o, 0, 0 === o ? "0." : "."),
          n.sign + a.join("")
        );
      }
      function vt(e, t) {
        if (isNaN(e) || !isFinite(e)) return String(e);
        var r = dt(e),
          n = t ? bt(r, t) : r,
          a = n.coefficients,
          o = n.exponent;
        a.length < t && (a = a.concat(wt(t - a.length)));
        var i = a.shift();
        return (
          n.sign +
          i +
          (a.length > 0 ? "." + a.join("") : "") +
          "e" +
          (o >= 0 ? "+" : "") +
          o
        );
      }
      function xt(e, t, r) {
        if (isNaN(e) || !isFinite(e)) return String(e);
        var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
          a = r && void 0 !== r.upperExp ? r.upperExp : 5,
          o = dt(e),
          i = t ? bt(o, t) : o;
        if (i.exponent < n || i.exponent >= a) return vt(e, t);
        var s = i.coefficients,
          u = i.exponent;
        s.length < t && (s = s.concat(wt(t - s.length))),
          (s = s.concat(
            wt(u - s.length + 1 + (s.length < t ? t - s.length : 0))
          ));
        var c = u > 0 ? u : 0;
        return (
          c < (s = wt(-u).concat(s)).length - 1 && s.splice(c + 1, 0, "."),
          i.sign + s.join("")
        );
      }
      function bt(e, t) {
        for (
          var r = {
              sign: e.sign,
              coefficients: e.coefficients,
              exponent: e.exponent,
            },
            n = r.coefficients,
            a;
          t <= 0;

        )
          n.unshift(0), r.exponent++, t++;
        if (n.length > t && n.splice(t, n.length - t)[0] >= 5) {
          var o = t - 1;
          for (n[o]++; 10 === n[o]; )
            n.pop(), 0 === o && (n.unshift(0), r.exponent++, o++), n[--o]++;
        }
        return r;
      }
      function wt(e) {
        for (var t = [], r = 0; r < e; r++) t.push(0);
        return t;
      }
      function Nt(e) {
        return e
          .toExponential()
          .replace(/e.*$/, "")
          .replace(/^0\.?0*|\./, "").length;
      }
      var St = Number.EPSILON || 2220446049250313e-31;
      function Et(e, t, r) {
        if (null == r) return e === t;
        if (e === t) return !0;
        if (isNaN(e) || isNaN(t)) return !1;
        if (isFinite(e) && isFinite(t)) {
          var n = Math.abs(e - t);
          return n < St || n <= Math.max(Math.abs(e), Math.abs(t)) * r;
        }
        return !1;
      }
      var At =
          Math.acosh ||
          function (e) {
            return Math.log(Math.sqrt(e * e - 1) + e);
          },
        Ot =
          Math.asinh ||
          function (e) {
            return Math.log(Math.sqrt(e * e + 1) + e);
          },
        Ct =
          Math.atanh ||
          function (e) {
            return Math.log((1 + e) / (1 - e)) / 2;
          },
        Tt =
          Math.cosh ||
          function (e) {
            return (Math.exp(e) + Math.exp(-e)) / 2;
          },
        Mt =
          Math.sinh ||
          function (e) {
            return (Math.exp(e) - Math.exp(-e)) / 2;
          },
        kt =
          Math.tanh ||
          function (e) {
            var t = Math.exp(2 * e);
            return (t - 1) / (t + 1);
          },
        jt = "number",
        qt = "number, number";
      function Pt(e) {
        return Math.abs(e);
      }
      function Ft(e, t) {
        return e + t;
      }
      function It(e, t) {
        return e - t;
      }
      function Rt(e, t) {
        return e * t;
      }
      function Bt(e, t) {
        return e / t;
      }
      function Dt(e) {
        return -e;
      }
      function zt(e) {
        return e;
      }
      function _t(e) {
        return pt(e);
      }
      function Lt(e) {
        return Math.ceil(e);
      }
      function $t(e) {
        return e * e * e;
      }
      function Ut(e) {
        return Math.exp(e);
      }
      function Wt(e) {
        return ft(e);
      }
      function Ht(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      }
      function Jt(e) {
        return Math.floor(e);
      }
      function Vt(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Parameters in function gcd must be integer numbers");
        for (var r; 0 !== t; ) (r = e % t), (e = t), (t = r);
        return e < 0 ? -e : e;
      }
      function Xt(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Parameters in function lcm must be integer numbers");
        if (0 === e || 0 === t) return 0;
        for (var r, n = e * t; 0 !== t; ) (t = e % (r = t)), (e = r);
        return Math.abs(n / e);
      }
      function Gt(e) {
        return Math.log(e);
      }
      function Qt(e) {
        return ct(e);
      }
      function Zt(e) {
        return ut(e);
      }
      function Yt(e) {
        return lt(e);
      }
      function Kt(e, t) {
        if (t > 0) return e - t * Math.floor(e / t);
        if (0 === t) return e;
        throw new Error("Cannot calculate mod for a negative divisor");
      }
      function er(e, t) {
        var r = t < 0;
        if ((r && (t = -t), 0 === t)) throw new Error("Root must be non-zero");
        if (e < 0 && Math.abs(t) % 2 != 1)
          throw new Error("Root must be odd when a is negative.");
        if (0 === e) return r ? 1 / 0 : 0;
        if (!isFinite(e)) return r ? 0 : e;
        var n = Math.pow(Math.abs(e), 1 / t);
        return (n = e < 0 ? -n : n), r ? 1 / n : n;
      }
      function tr(e) {
        return st(e);
      }
      function rr(e) {
        return Math.sqrt(e);
      }
      function nr(e) {
        return e * e;
      }
      function ar(e, t) {
        var r,
          n,
          a,
          o = 0,
          i = 1,
          s = 1,
          u = 0,
          c;
        if (!it(e) || !it(t))
          throw new Error(
            "Parameters in function xgcd must be integer numbers"
          );
        for (; t; )
          (a = e - (n = Math.floor(e / t)) * t),
            (r = o),
            (o = i - n * o),
            (i = r),
            (r = s),
            (s = u - n * s),
            (u = r),
            (e = t),
            (t = a);
        return (c = e < 0 ? [-e, -i, -u] : [e, e ? i : 0, u]);
      }
      function or(e, t) {
        return (e * e < 1 && t === 1 / 0) || (e * e > 1 && t === -1 / 0)
          ? 0
          : Math.pow(e, t);
      }
      function ir(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return parseFloat(yt(e, t));
      }
      function sr(e) {
        return Math.abs(e);
      }
      (Pt.signature = jt),
        (Ft.signature = qt),
        (It.signature = qt),
        (Rt.signature = qt),
        (Bt.signature = qt),
        (Dt.signature = jt),
        (zt.signature = jt),
        (_t.signature = jt),
        (Lt.signature = jt),
        ($t.signature = jt),
        (Ut.signature = jt),
        (Wt.signature = jt),
        (Ht.signature = jt),
        (Jt.signature = jt),
        (Vt.signature = qt),
        (Xt.signature = qt),
        (Gt.signature = jt),
        (Qt.signature = jt),
        (Zt.signature = jt),
        (Yt.signature = jt),
        (Kt.signature = qt),
        (er.signature = qt),
        (tr.signature = jt),
        (rr.signature = jt),
        (nr.signature = jt),
        (ar.signature = qt),
        (or.signature = qt),
        (ir.signature = qt),
        (sr.signature = jt);
      var ur = "number",
        cr = "number, number";
      function lr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function bitAnd");
        return e & t;
      }
      function pr(e) {
        if (!it(e)) throw new Error("Integer expected in function bitNot");
        return ~e;
      }
      function fr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function bitOr");
        return e | t;
      }
      function mr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function bitXor");
        return e ^ t;
      }
      function hr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function leftShift");
        return e << t;
      }
      function dr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function rightArithShift");
        return e >> t;
      }
      function gr(e, t) {
        if (!it(e) || !it(t))
          throw new Error("Integers expected in function rightLogShift");
        return e >>> t;
      }
      (lr.signature = cr),
        (pr.signature = ur),
        (fr.signature = cr),
        (mr.signature = cr),
        (hr.signature = cr),
        (dr.signature = cr),
        (gr.signature = cr);
      var yr = "number",
        vr = "number, number";
      function xr(e) {
        return !e;
      }
      function br(e, t) {
        return !(!e && !t);
      }
      function wr(e, t) {
        return !!e != !!t;
      }
      function Nr(e, t) {
        return !(!e || !t);
      }
      function Sr(e, t) {
        if (t < e) return 1;
        if (t === e) return t;
        var r = (t + e) >> 1;
        return Sr(e, r) * Sr(r + 1, t);
      }
      function Er(e, t) {
        if (!it(e) || e < 0)
          throw new TypeError(
            "Positive integer value expected in function combinations"
          );
        if (!it(t) || t < 0)
          throw new TypeError(
            "Positive integer value expected in function combinations"
          );
        if (t > e) throw new TypeError("k must be less than or equal to n");
        var r = e - t,
          n;
        return t < r
          ? (n = Sr(r + 1, e)) / Sr(1, t)
          : (n = Sr(t + 1, e)) / Sr(1, r);
      }
      function Ar(e) {
        var t;
        if (it(e))
          return e <= 0
            ? isFinite(e)
              ? 1 / 0
              : NaN
            : e > 171
            ? 1 / 0
            : Sr(1, e - 1);
        if (e < 0.5) return Math.PI / (Math.sin(Math.PI * e) * Ar(1 - e));
        if (e >= 171.35) return 1 / 0;
        if (e > 85) {
          var r = e * e,
            n = r * e,
            a = n * e,
            o = a * e;
          return (
            Math.sqrt((2 * Math.PI) / e) *
            Math.pow(e / Math.E, e) *
            (1 +
              1 / (12 * e) +
              1 / (288 * r) -
              139 / (51840 * n) -
              571 / (2488320 * a) +
              163879 / (209018880 * o) +
              5246819 / (75246796800 * o * e))
          );
        }
        --e, (t = Cr[0]);
        for (var i = 1; i < Cr.length; ++i) t += Cr[i] / (e + i);
        var s = e + Or + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(s, e + 0.5) * Math.exp(-s) * t;
      }
      (xr.signature = yr),
        (br.signature = vr),
        (wr.signature = vr),
        (Nr.signature = vr),
        (Er.signature = "number, number"),
        (Ar.signature = "number");
      var Or = 4.7421875,
        Cr = [
          0.9999999999999971, 57.15623566586292, -59.59796035547549,
          14.136097974741746, -0.4919138160976202, 3399464998481189e-20,
          4652362892704858e-20, -9837447530487956e-20, 0.0001580887032249125,
          -0.00021026444172410488, 0.00021743961811521265,
          -0.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21,
          36899182659531625e-22,
        ],
        Tr = "number",
        Mr = "number, number";
      function kr(e) {
        return Math.acos(e);
      }
      function jr(e) {
        return At(e);
      }
      function qr(e) {
        return Math.atan(1 / e);
      }
      function Pr(e) {
        return isFinite(e)
          ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2
          : 0;
      }
      function Fr(e) {
        return Math.asin(1 / e);
      }
      function Ir(e) {
        var t = 1 / e;
        return Math.log(t + Math.sqrt(t * t + 1));
      }
      function Rr(e) {
        return Math.acos(1 / e);
      }
      function Br(e) {
        var t = 1 / e,
          r = Math.sqrt(t * t - 1);
        return Math.log(r + t);
      }
      function Dr(e) {
        return Math.asin(e);
      }
      function zr(e) {
        return Ot(e);
      }
      function _r(e) {
        return Math.atan(e);
      }
      function Lr(e, t) {
        return Math.atan2(e, t);
      }
      function $r(e) {
        return Ct(e);
      }
      function Ur(e) {
        return Math.cos(e);
      }
      function Wr(e) {
        return Tt(e);
      }
      function Hr(e) {
        return 1 / Math.tan(e);
      }
      function Jr(e) {
        var t = Math.exp(2 * e);
        return (t + 1) / (t - 1);
      }
      function Vr(e) {
        return 1 / Math.sin(e);
      }
      function Xr(e) {
        return 0 === e
          ? Number.POSITIVE_INFINITY
          : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * st(e);
      }
      function Gr(e) {
        return 1 / Math.cos(e);
      }
      function Qr(e) {
        return 2 / (Math.exp(e) + Math.exp(-e));
      }
      function Zr(e) {
        return Math.sin(e);
      }
      function Yr(e) {
        return Mt(e);
      }
      function Kr(e) {
        return Math.tan(e);
      }
      function en(e) {
        return kt(e);
      }
      (kr.signature = Tr),
        (jr.signature = Tr),
        (qr.signature = Tr),
        (Pr.signature = Tr),
        (Fr.signature = Tr),
        (Ir.signature = Tr),
        (Rr.signature = Tr),
        (Br.signature = Tr),
        (Dr.signature = Tr),
        (zr.signature = Tr),
        (_r.signature = Tr),
        (Lr.signature = Mr),
        ($r.signature = Tr),
        (Ur.signature = Tr),
        (Wr.signature = Tr),
        (Hr.signature = Tr),
        (Jr.signature = Tr),
        (Vr.signature = Tr),
        (Xr.signature = Tr),
        (Gr.signature = Tr),
        (Qr.signature = Tr),
        (Zr.signature = Tr),
        (Yr.signature = Tr),
        (Kr.signature = Tr),
        (en.signature = Tr);
      var tn = "number";
      function rn(e) {
        return it(e);
      }
      function nn(e) {
        return e < 0;
      }
      function an(e) {
        return e > 0;
      }
      function on(e) {
        return 0 === e;
      }
      function sn(e) {
        return Number.isNaN(e);
      }
      function un() {
        throw new Error('No "bignumber" implementation available');
      }
      function cn() {
        throw new Error('No "fraction" implementation available');
      }
      function ln() {
        throw new Error('No "matrix" implementation available');
      }
      function pn() {
        throw new Error('No "index" implementation available');
      }
      function fn() {
        throw new Error('No "matrix" implementation available');
      }
      (rn.signature = tn),
        (nn.signature = tn),
        (an.signature = tn),
        (on.signature = tn),
        (sn.signature = tn);
      var mn = r(287);
      function hn(e, t) {
        if (wn(e) && vn(e, t)) return e[t];
        if ("function" == typeof e[t] && bn(e, t))
          throw new Error('Cannot access method "' + t + '" as a property');
        throw new Error('No access to property "' + t + '"');
      }
      function dn(e, t, r) {
        if (wn(e) && vn(e, t)) return (e[t] = r), r;
        throw new Error('No access to property "' + t + '"');
      }
      function gn(e) {
        return Object.keys(e).filter((t) => hasOwnProperty(e, t));
      }
      function yn(e, t) {
        return t in e;
      }
      function vn(e, t) {
        return (
          !(!e || "object" != typeof e) &&
          (!!ie(Nn, t) ||
            (!(t in Object.prototype) && !(t in Function.prototype)))
        );
      }
      function xn(e, t) {
        if (!bn(e, t)) throw new Error('No access to method "' + t + '"');
      }
      function bn(e, t) {
        return (
          null != e &&
          "function" == typeof e[t] &&
          !(
            ie(e, t) &&
            Object.getPrototypeOf &&
            t in Object.getPrototypeOf(e)
          ) &&
          (!!ie(Sn, t) ||
            (!(t in Object.prototype) && !(t in Function.prototype)))
        );
      }
      function wn(e) {
        return "object" == typeof e && e && e.constructor === Object;
      }
      var Nn = { length: !0, name: !0 },
        Sn = { toString: !0, valueOf: !0, toLocaleString: !0 };
      class En {
        constructor(e) {
          this.wrappedObject = e;
        }
        keys() {
          return Object.keys(this.wrappedObject);
        }
        get(e) {
          return hn(this.wrappedObject, e);
        }
        set(e, t) {
          return dn(this.wrappedObject, e, t), this;
        }
        has(e) {
          return yn(this.wrappedObject, e);
        }
      }
      function An() {
        return new Map();
      }
      function On(e) {
        if (!e) return An();
        if (Tn(e)) return e;
        if (k(e)) return new En(e);
        throw new Error("createMap can create maps from objects or Maps");
      }
      function Cn(e) {
        if (e instanceof En) return e.wrappedObject;
        var t = {};
        for (var r of e.keys()) {
          var n;
          dn(t, r, e.get(r));
        }
        return t;
      }
      function Tn(e) {
        return (
          !!e &&
          (e instanceof Map ||
            e instanceof En ||
            ("function" == typeof e.set &&
              "function" == typeof e.get &&
              "function" == typeof e.keys &&
              "function" == typeof e.has))
        );
      }
      function Mn(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (var a of r)
          if (a)
            if (Tn(a)) for (var o of a.keys()) e.set(o, a.get(o));
            else if (k(a)) for (var i of Object.keys(a)) e.set(i, a[i]);
        return e;
      }
      var kn = function e() {
          return (kn = mn.create), mn;
        },
        jn,
        qn = ge(
          "typed",
          ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"],
          function e(t) {
            var { BigNumber: r, Complex: n, DenseMatrix: a, Fraction: o } = t,
              i = kn();
            return (
              (i.types = [
                { name: "number", test: p },
                { name: "Complex", test: m },
                { name: "BigNumber", test: f },
                { name: "Fraction", test: h },
                { name: "Unit", test: d },
                { name: "string", test: g },
                { name: "Chain", test: X },
                { name: "Array", test: y },
                { name: "Matrix", test: v },
                { name: "DenseMatrix", test: b },
                { name: "SparseMatrix", test: w },
                { name: "Range", test: N },
                { name: "Index", test: S },
                { name: "boolean", test: E },
                { name: "ResultSet", test: A },
                { name: "Help", test: O },
                { name: "function", test: C },
                { name: "Date", test: T },
                { name: "RegExp", test: M },
                { name: "null", test: j },
                { name: "undefined", test: q },
                { name: "AccessorNode", test: P },
                { name: "ArrayNode", test: F },
                { name: "AssignmentNode", test: I },
                { name: "BlockNode", test: R },
                { name: "ConditionalNode", test: B },
                { name: "ConstantNode", test: D },
                { name: "FunctionNode", test: _ },
                { name: "FunctionAssignmentNode", test: z },
                { name: "IndexNode", test: L },
                { name: "Node", test: $ },
                { name: "ObjectNode", test: U },
                { name: "OperatorNode", test: W },
                { name: "ParenthesisNode", test: H },
                { name: "RangeNode", test: J },
                { name: "SymbolNode", test: V },
                { name: "Map", test: Tn },
                { name: "Object", test: k },
              ]),
              (i.conversions = [
                {
                  from: "number",
                  to: "BigNumber",
                  convert: function e(t) {
                    if ((r || Pn(t), Nt(t) > 15))
                      throw new TypeError(
                        "Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " +
                          t +
                          "). Use function bignumber(x) to convert to BigNumber."
                      );
                    return new r(t);
                  },
                },
                {
                  from: "number",
                  to: "Complex",
                  convert: function e(t) {
                    return n || Fn(t), new n(t, 0);
                  },
                },
                {
                  from: "number",
                  to: "string",
                  convert: function e(t) {
                    return t + "";
                  },
                },
                {
                  from: "BigNumber",
                  to: "Complex",
                  convert: function e(t) {
                    return n || Fn(t), new n(t.toNumber(), 0);
                  },
                },
                {
                  from: "Fraction",
                  to: "BigNumber",
                  convert: function e(t) {
                    throw new TypeError(
                      "Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction."
                    );
                  },
                },
                {
                  from: "Fraction",
                  to: "Complex",
                  convert: function e(t) {
                    return n || Fn(t), new n(t.valueOf(), 0);
                  },
                },
                {
                  from: "number",
                  to: "Fraction",
                  convert: function e(t) {
                    o || Rn(t);
                    var r = new o(t);
                    if (r.valueOf() !== t)
                      throw new TypeError(
                        "Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " +
                          t +
                          "). Use function fraction(x) to convert to Fraction."
                      );
                    return r;
                  },
                },
                {
                  from: "string",
                  to: "number",
                  convert: function e(t) {
                    var r = Number(t);
                    if (isNaN(r))
                      throw new Error('Cannot convert "' + t + '" to a number');
                    return r;
                  },
                },
                {
                  from: "string",
                  to: "BigNumber",
                  convert: function e(t) {
                    r || Pn(t);
                    try {
                      return new r(t);
                    } catch (e) {
                      throw new Error(
                        'Cannot convert "' + t + '" to BigNumber'
                      );
                    }
                  },
                },
                {
                  from: "string",
                  to: "Fraction",
                  convert: function e(t) {
                    o || Rn(t);
                    try {
                      return new o(t);
                    } catch (e) {
                      throw new Error('Cannot convert "' + t + '" to Fraction');
                    }
                  },
                },
                {
                  from: "string",
                  to: "Complex",
                  convert: function e(t) {
                    n || Fn(t);
                    try {
                      return new n(t);
                    } catch (e) {
                      throw new Error('Cannot convert "' + t + '" to Complex');
                    }
                  },
                },
                {
                  from: "boolean",
                  to: "number",
                  convert: function e(t) {
                    return +t;
                  },
                },
                {
                  from: "boolean",
                  to: "BigNumber",
                  convert: function e(t) {
                    return r || Pn(t), new r(+t);
                  },
                },
                {
                  from: "boolean",
                  to: "Fraction",
                  convert: function e(t) {
                    return o || Rn(t), new o(+t);
                  },
                },
                {
                  from: "boolean",
                  to: "string",
                  convert: function e(t) {
                    return String(t);
                  },
                },
                {
                  from: "Array",
                  to: "Matrix",
                  convert: function e(t) {
                    return a || In(), new a(t);
                  },
                },
                {
                  from: "Matrix",
                  to: "Array",
                  convert: function e(t) {
                    return t.valueOf();
                  },
                },
              ]),
              i
            );
          }
        );
      function Pn(e) {
        throw new Error(
          "Cannot convert value ".concat(
            e,
            " into a BigNumber: no class 'BigNumber' provided"
          )
        );
      }
      function Fn(e) {
        throw new Error(
          "Cannot convert value ".concat(
            e,
            " into a Complex number: no class 'Complex' provided"
          )
        );
      }
      function In() {
        throw new Error(
          "Cannot convert array into a Matrix: no class 'DenseMatrix' provided"
        );
      }
      function Rn(e) {
        throw new Error(
          "Cannot convert value ".concat(
            e,
            " into a Fraction, no class 'Fraction' provided."
          )
        );
      }
      var Bn,
        Dn,
        zn = ge(
          "ResultSet",
          [],
          () => {
            function e(t) {
              if (!(this instanceof e))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              this.entries = t || [];
            }
            return (
              (e.prototype.type = "ResultSet"),
              (e.prototype.isResultSet = !0),
              (e.prototype.valueOf = function () {
                return this.entries;
              }),
              (e.prototype.toString = function () {
                return "[" + this.entries.join(", ") + "]";
              }),
              (e.prototype.toJSON = function () {
                return { mathjs: "ResultSet", entries: this.entries };
              }),
              (e.fromJSON = function (t) {
                return new e(t.entries);
              }),
              e
            );
          },
          { isClass: !0 }
        ),
        _n,
        Ln,
        $n = ge(
          "Range",
          [],
          () => {
            function e(t, r, n) {
              if (!(this instanceof e))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              var a = null != t,
                o = null != r,
                i = null != n;
              if (a)
                if (f(t)) t = t.toNumber();
                else if ("number" != typeof t)
                  throw new TypeError("Parameter start must be a number");
              if (o)
                if (f(r)) r = r.toNumber();
                else if ("number" != typeof r)
                  throw new TypeError("Parameter end must be a number");
              if (i)
                if (f(n)) n = n.toNumber();
                else if ("number" != typeof n)
                  throw new TypeError("Parameter step must be a number");
              (this.start = a ? parseFloat(t) : 0),
                (this.end = o ? parseFloat(r) : 0),
                (this.step = i ? parseFloat(n) : 1);
            }
            return (
              (e.prototype.type = "Range"),
              (e.prototype.isRange = !0),
              (e.parse = function (t) {
                if ("string" != typeof t) return null;
                var r,
                  n = t.split(":").map(function (e) {
                    return parseFloat(e);
                  }),
                  a;
                if (
                  n.some(function (e) {
                    return isNaN(e);
                  })
                )
                  return null;
                switch (n.length) {
                  case 2:
                    return new e(n[0], n[1]);
                  case 3:
                    return new e(n[0], n[2], n[1]);
                  default:
                    return null;
                }
              }),
              (e.prototype.clone = function () {
                return new e(this.start, this.end, this.step);
              }),
              (e.prototype.size = function () {
                var e = 0,
                  t = this.start,
                  r = this.step,
                  n,
                  a = this.end - t;
                return (
                  st(r) === st(a) ? (e = Math.ceil(a / r)) : 0 === a && (e = 0),
                  isNaN(e) && (e = 0),
                  [e]
                );
              }),
              (e.prototype.min = function () {
                var e = this.size()[0];
                return e > 0
                  ? this.step > 0
                    ? this.start
                    : this.start + (e - 1) * this.step
                  : void 0;
              }),
              (e.prototype.max = function () {
                var e = this.size()[0];
                return e > 0
                  ? this.step > 0
                    ? this.start + (e - 1) * this.step
                    : this.start
                  : void 0;
              }),
              (e.prototype.forEach = function (e) {
                var t = this.start,
                  r = this.step,
                  n = this.end,
                  a = 0;
                if (r > 0) for (; t < n; ) e(t, [a], this), (t += r), a++;
                else if (r < 0) for (; t > n; ) e(t, [a], this), (t += r), a++;
              }),
              (e.prototype.map = function (e) {
                var t = [];
                return (
                  this.forEach(function (r, n, a) {
                    t[n[0]] = e(r, n, a);
                  }),
                  t
                );
              }),
              (e.prototype.toArray = function () {
                var e = [];
                return (
                  this.forEach(function (t, r) {
                    e[r[0]] = t;
                  }),
                  e
                );
              }),
              (e.prototype.valueOf = function () {
                return this.toArray();
              }),
              (e.prototype.format = function (e) {
                var t = ht(this.start, e);
                return (
                  1 !== this.step && (t += ":" + ht(this.step, e)),
                  (t += ":" + ht(this.end, e))
                );
              }),
              (e.prototype.toString = function () {
                return this.format();
              }),
              (e.prototype.toJSON = function () {
                return {
                  mathjs: "Range",
                  start: this.start,
                  end: this.end,
                  step: this.step,
                };
              }),
              (e.fromJSON = function (t) {
                return new e(t.start, t.end, t.step);
              }),
              e
            );
          },
          { isClass: !0 }
        );
      function Un(e, t, r) {
        var n,
          a = new (0, e.constructor)(2),
          o = "";
        if (r) {
          if (r < 1) throw new Error("size must be in greater than 0");
          if (!it(r)) throw new Error("size must be an integer");
          if (
            e.greaterThan(a.pow(r - 1).sub(1)) ||
            e.lessThan(a.pow(r - 1).mul(-1))
          )
            throw new Error(
              "Value must be in range [-2^"
                .concat(r - 1, ", 2^")
                .concat(r - 1, "-1]")
            );
          if (!e.isInteger()) throw new Error("Value must be an integer");
          e.lessThan(0) && (e = e.add(a.pow(r))), (o = "i".concat(r));
        }
        switch (t) {
          case 2:
            return "".concat(e.toBinary()).concat(o);
          case 8:
            return "".concat(e.toOctal()).concat(o);
          case 16:
            return "".concat(e.toHexadecimal()).concat(o);
          default:
            throw new Error("Base ".concat(t, " not supported "));
        }
      }
      function Wn(e, t) {
        if ("function" == typeof t) return t(e);
        if (!e.isFinite())
          return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
        var r = "auto",
          n,
          a;
        if (
          void 0 !== t &&
          (t.notation && (r = t.notation),
          "number" == typeof t ? (n = t) : t.precision && (n = t.precision),
          t.wordSize && "number" != typeof (a = t.wordSize))
        )
          throw new Error('Option "wordSize" must be a number');
        switch (r) {
          case "fixed":
            return Vn(e, n);
          case "exponential":
            return Jn(e, n);
          case "engineering":
            return Hn(e, n);
          case "bin":
            return Un(e, 2, a);
          case "oct":
            return Un(e, 8, a);
          case "hex":
            return Un(e, 16, a);
          case "auto":
            var o = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
              i = t && void 0 !== t.upperExp ? t.upperExp : 5,
              s;
            if (e.isZero()) return "0";
            var u = e.toSignificantDigits(n),
              c = u.e;
            return (s = c >= o && c < i ? u.toFixed() : Jn(e, n)).replace(
              /((\.\d*?)(0+))($|e)/,
              function () {
                var e = arguments[2],
                  t = arguments[4];
                return "." !== e ? e + t : t;
              }
            );
          default:
            throw new Error(
              'Unknown notation "' +
                r +
                '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.'
            );
        }
      }
      function Hn(e, t) {
        var r = e.e,
          n = r % 3 == 0 ? r : r < 0 ? r - 3 - (r % 3) : r - (r % 3),
          a = e.mul(Math.pow(10, -n)),
          o = a.toPrecision(t);
        return (
          -1 !== o.indexOf("e") && (o = a.toString()),
          o + "e" + (r >= 0 ? "+" : "") + n.toString()
        );
      }
      function Jn(e, t) {
        return void 0 !== t ? e.toExponential(t - 1) : e.toExponential();
      }
      function Vn(e, t) {
        return e.toFixed(t);
      }
      function Xn(e, t) {
        var r = e.length - t.length,
          n = e.length;
        return e.substring(r, n) === t;
      }
      function Gn(e, t) {
        return "number" == typeof e
          ? ht(e, t)
          : f(e)
          ? Wn(e, t)
          : Kn(e)
          ? t && "decimal" === t.fraction
            ? e.toString()
            : e.s * e.n + "/" + e.d
          : Array.isArray(e)
          ? Yn(e, t)
          : g(e)
          ? '"' + e + '"'
          : "function" == typeof e
          ? e.syntax
            ? String(e.syntax)
            : "function"
          : e && "object" == typeof e
          ? "function" == typeof e.format
            ? e.format(t)
            : e && e.toString(t) !== {}.toString()
            ? e.toString(t)
            : "{" +
              Object.keys(e)
                .map((r) => '"' + r + '": ' + Gn(e[r], t))
                .join(", ") +
              "}"
          : String(e);
        var r;
      }
      function Qn(e) {
        for (var t = String(e), r = "", n = 0; n < t.length; ) {
          var a = t.charAt(n);
          "\\" === a
            ? ((r += a),
              n++,
              ("" !== (a = t.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(a)) ||
                (r += "\\"),
              (r += a))
            : (r += '"' === a ? '\\"' : a),
            n++;
        }
        return '"' + r + '"';
      }
      function Zn(e) {
        var t = String(e);
        return (t = t
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;"));
      }
      function Yn(e, t) {
        if (Array.isArray(e)) {
          for (var r = "[", n = e.length, a = 0; a < n; a++)
            0 !== a && (r += ", "), (r += Yn(e[a], t));
          return (r += "]");
        }
        return Gn(e, t);
      }
      function Kn(e) {
        return (
          (e &&
            "object" == typeof e &&
            "number" == typeof e.s &&
            "number" == typeof e.n &&
            "number" == typeof e.d) ||
          !1
        );
      }
      function ea(e, t) {
        if (!g(e))
          throw new TypeError(
            "Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " +
              G(e) +
              ", index: 0)"
          );
        if (!g(t))
          throw new TypeError(
            "Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " +
              G(t) +
              ", index: 1)"
          );
        return e === t ? 0 : e > t ? 1 : -1;
      }
      var ta = "Help",
        ra = ["parse"],
        na = ge(
          ta,
          ra,
          (e) => {
            var { parse: t } = e;
            function r(e) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!e) throw new Error('Argument "doc" missing');
              this.doc = e;
            }
            return (
              (r.prototype.type = "Help"),
              (r.prototype.isHelp = !0),
              (r.prototype.toString = function () {
                var e = this.doc || {},
                  r = "\n";
                if (
                  (e.name && (r += "Name: " + e.name + "\n\n"),
                  e.category && (r += "Category: " + e.category + "\n\n"),
                  e.description &&
                    (r += "Description:\n    " + e.description + "\n\n"),
                  e.syntax &&
                    (r += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"),
                  e.examples)
                ) {
                  r += "Examples:\n";
                  for (var n = {}, a = 0; a < e.examples.length; a++) {
                    var o = e.examples[a];
                    r += "    " + o + "\n";
                    var i = void 0;
                    try {
                      i = t(o).compile().evaluate(n);
                    } catch (e) {
                      i = e;
                    }
                    void 0 === i ||
                      O(i) ||
                      (r += "        " + Gn(i, { precision: 14 }) + "\n");
                  }
                  r += "\n";
                }
                return (
                  e.seealso &&
                    e.seealso.length &&
                    (r += "See also: " + e.seealso.join(", ") + "\n"),
                  r
                );
              }),
              (r.prototype.toJSON = function () {
                var e = Q(this.doc);
                return (e.mathjs = "Help"), e;
              }),
              (r.fromJSON = function (e) {
                var t = {};
                return (
                  Object.keys(e)
                    .filter((e) => "mathjs" !== e)
                    .forEach((r) => {
                      t[r] = e[r];
                    }),
                  new r(t)
                );
              }),
              (r.prototype.valueOf = r.prototype.toString),
              r
            );
          },
          { isClass: !0 }
        ),
        aa = "Chain",
        oa = ["?on", "math"],
        ia = ge(
          aa,
          oa,
          (e) => {
            var { on: t, math: r } = e;
            function n(e) {
              if (!(this instanceof n))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              X(e) ? (this.value = e.value) : (this.value = e);
            }
            function a(e, t) {
              "function" == typeof t && (n.prototype[e] = i(t));
            }
            function o(e, t) {
              ae(n.prototype, e, function e() {
                var r = t();
                if ("function" == typeof r) return i(r);
              });
            }
            function i(e) {
              return function () {
                for (var t = [this.value], r = 0; r < arguments.length; r++)
                  t[r + 1] = arguments[r];
                return new n(e.apply(e, t));
              };
            }
            (n.prototype.type = "Chain"),
              (n.prototype.isChain = !0),
              (n.prototype.done = function () {
                return this.value;
              }),
              (n.prototype.valueOf = function () {
                return this.value;
              }),
              (n.prototype.toString = function () {
                return Gn(this.value);
              }),
              (n.prototype.toJSON = function () {
                return { mathjs: "Chain", value: this.value };
              }),
              (n.fromJSON = function (e) {
                return new n(e.value);
              }),
              (n.createProxy = function (e, t) {
                if ("string" == typeof e) a(e, t);
                else {
                  var r = function t(r) {
                    ie(e, r) && void 0 === s[r] && o(r, () => e[r]);
                  };
                  for (var n in e) r(n);
                }
              });
            var s = {
              expression: !0,
              docs: !0,
              type: !0,
              classes: !0,
              json: !0,
              error: !0,
              isChain: !0,
            };
            return (
              n.createProxy(r),
              t &&
                t("import", function (e, t, r) {
                  r || o(e, t);
                }),
              n
            );
          },
          { isClass: !0 }
        ),
        sa = {
          name: "bignumber",
          category: "Construction",
          syntax: ["bignumber(x)"],
          description: "Create a big number from a number or string.",
          examples: [
            "0.1 + 0.2",
            "bignumber(0.1) + bignumber(0.2)",
            'bignumber("7.2")',
            'bignumber("7.2e500")',
            "bignumber([0.1, 0.2, 0.3])",
          ],
          seealso: [
            "boolean",
            "complex",
            "fraction",
            "index",
            "matrix",
            "string",
            "unit",
          ],
        },
        ua = {
          name: "typeOf",
          category: "Utils",
          syntax: ["typeOf(x)"],
          description: "Get the type of a variable.",
          examples: [
            "typeOf(3.5)",
            "typeOf(2 - 4i)",
            "typeOf(45 deg)",
            'typeOf("hello world")',
          ],
          seealso: ["getMatrixDataType"],
        },
        ca = {
          name: "isZero",
          category: "Utils",
          syntax: ["isZero(x)"],
          description: "Test whether a value is zero.",
          examples: [
            "isZero(2)",
            "isZero(0)",
            "isZero(-4)",
            "isZero([3, 0, -2, 0])",
          ],
          seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"],
        },
        la = {
          name: "isPrime",
          category: "Utils",
          syntax: ["isPrime(x)"],
          description:
            "Test whether a value is prime: has no divisors other than itself and one.",
          examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
          seealso: ["isInteger", "isNumeric", "isNegative", "isZero"],
        },
        pa = {
          name: "isPositive",
          category: "Utils",
          syntax: ["isPositive(x)"],
          description: "Test whether a value is positive: larger than zero.",
          examples: [
            "isPositive(2)",
            "isPositive(0)",
            "isPositive(-4)",
            "isPositive([3, 0.5, -2])",
          ],
          seealso: ["isInteger", "isNumeric", "isNegative", "isZero"],
        },
        fa = {
          name: "isNumeric",
          category: "Utils",
          syntax: ["isNumeric(x)"],
          description:
            "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
          examples: [
            "isNumeric(2)",
            'isNumeric("2")',
            'hasNumericValue("2")',
            "isNumeric(0)",
            "isNumeric(bignumber(500))",
            "isNumeric(fraction(0.125))",
            "isNumeric(2 + 3i)",
            'isNumeric([2.3, "foo", false])',
          ],
          seealso: [
            "isInteger",
            "isZero",
            "isNegative",
            "isPositive",
            "isNaN",
            "hasNumericValue",
          ],
        },
        ma = {
          name: "hasNumericValue",
          category: "Utils",
          syntax: ["hasNumericValue(x)"],
          description:
            "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
          examples: [
            "hasNumericValue(2)",
            'hasNumericValue("2")',
            'isNumeric("2")',
            "hasNumericValue(0)",
            "hasNumericValue(bignumber(500))",
            "hasNumericValue(fraction(0.125))",
            "hasNumericValue(2 + 3i)",
            'hasNumericValue([2.3, "foo", false])',
          ],
          seealso: [
            "isInteger",
            "isZero",
            "isNegative",
            "isPositive",
            "isNaN",
            "isNumeric",
          ],
        },
        ha = {
          name: "isNegative",
          category: "Utils",
          syntax: ["isNegative(x)"],
          description: "Test whether a value is negative: smaller than zero.",
          examples: [
            "isNegative(2)",
            "isNegative(0)",
            "isNegative(-4)",
            "isNegative([3, 0.5, -2])",
          ],
          seealso: ["isInteger", "isNumeric", "isPositive", "isZero"],
        },
        da = {
          name: "isInteger",
          category: "Utils",
          syntax: ["isInteger(x)"],
          description: "Test whether a value is an integer number.",
          examples: [
            "isInteger(2)",
            "isInteger(3.5)",
            "isInteger([3, 0.5, -2])",
          ],
          seealso: ["isNegative", "isNumeric", "isPositive", "isZero"],
        },
        ga = {
          name: "isNaN",
          category: "Utils",
          syntax: ["isNaN(x)"],
          description: "Test whether a value is NaN (not a number)",
          examples: [
            "isNaN(2)",
            "isNaN(0 / 0)",
            "isNaN(NaN)",
            "isNaN(Infinity)",
          ],
          seealso: ["isNegative", "isNumeric", "isPositive", "isZero"],
        },
        ya = {
          name: "format",
          category: "Utils",
          syntax: ["format(value)", "format(value, precision)"],
          description: "Format a value of any type as string.",
          examples: [
            "format(2.3)",
            "format(3 - 4i)",
            "format([])",
            "format(pi, 3)",
          ],
          seealso: ["print"],
        },
        va = {
          name: "bin",
          category: "Utils",
          syntax: ["bin(value)"],
          description: "Format a number as binary",
          examples: ["bin(2)"],
          seealso: ["oct", "hex"],
        },
        xa = {
          name: "oct",
          category: "Utils",
          syntax: ["oct(value)"],
          description: "Format a number as octal",
          examples: ["oct(56)"],
          seealso: ["bin", "hex"],
        },
        ba = {
          name: "hex",
          category: "Utils",
          syntax: ["hex(value)"],
          description: "Format a number as hexadecimal",
          examples: ["hex(240)"],
          seealso: ["bin", "oct"],
        },
        wa = {
          name: "clone",
          category: "Utils",
          syntax: ["clone(x)"],
          description:
            "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
          examples: [
            "clone(3.5)",
            "clone(2 - 4i)",
            "clone(45 deg)",
            "clone([1, 2; 3, 4])",
            'clone("hello world")',
          ],
          seealso: [],
        },
        Na = {
          name: "to",
          category: "Units",
          syntax: ["x to unit", "to(x, unit)"],
          description: "Change the unit of a value.",
          examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
          seealso: [],
        },
        Sa = {
          name: "tanh",
          category: "Trigonometry",
          syntax: ["tanh(x)"],
          description: "Compute the hyperbolic tangent of x in radians.",
          examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
          seealso: ["sinh", "cosh"],
        },
        Ea = {
          name: "tan",
          category: "Trigonometry",
          syntax: ["tan(x)"],
          description: "Compute the tangent of x in radians.",
          examples: [
            "tan(0.5)",
            "sin(0.5) / cos(0.5)",
            "tan(pi / 4)",
            "tan(45 deg)",
          ],
          seealso: ["atan", "sin", "cos"],
        },
        Aa = {
          name: "sinh",
          category: "Trigonometry",
          syntax: ["sinh(x)"],
          description: "Compute the hyperbolic sine of x in radians.",
          examples: ["sinh(0.5)"],
          seealso: ["cosh", "tanh"],
        },
        Oa = {
          name: "sech",
          category: "Trigonometry",
          syntax: ["sech(x)"],
          description:
            "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
          examples: ["sech(2)", "1 / cosh(2)"],
          seealso: ["coth", "csch", "cosh"],
        },
        Ca = {
          name: "sec",
          category: "Trigonometry",
          syntax: ["sec(x)"],
          description:
            "Compute the secant of x in radians. Defined as 1/cos(x)",
          examples: ["sec(2)", "1 / cos(2)"],
          seealso: ["cot", "csc", "cos"],
        },
        Ta = {
          name: "csch",
          category: "Trigonometry",
          syntax: ["csch(x)"],
          description:
            "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
          examples: ["csch(2)", "1 / sinh(2)"],
          seealso: ["sech", "coth", "sinh"],
        },
        Ma = {
          name: "csc",
          category: "Trigonometry",
          syntax: ["csc(x)"],
          description:
            "Compute the cosecant of x in radians. Defined as 1/sin(x)",
          examples: ["csc(2)", "1 / sin(2)"],
          seealso: ["sec", "cot", "sin"],
        },
        ka = {
          name: "coth",
          category: "Trigonometry",
          syntax: ["coth(x)"],
          description: "Compute the hyperbolic cotangent of x in radians.",
          examples: ["coth(2)", "1 / tanh(2)"],
          seealso: ["sech", "csch", "tanh"],
        },
        ja = {
          name: "cot",
          category: "Trigonometry",
          syntax: ["cot(x)"],
          description:
            "Compute the cotangent of x in radians. Defined as 1/tan(x)",
          examples: ["cot(2)", "1 / tan(2)"],
          seealso: ["sec", "csc", "tan"],
        },
        qa = {
          name: "cosh",
          category: "Trigonometry",
          syntax: ["cosh(x)"],
          description: "Compute the hyperbolic cosine of x in radians.",
          examples: ["cosh(0.5)"],
          seealso: ["sinh", "tanh", "coth"],
        },
        Pa = {
          name: "cos",
          category: "Trigonometry",
          syntax: ["cos(x)"],
          description: "Compute the cosine of x in radians.",
          examples: [
            "cos(2)",
            "cos(pi / 4) ^ 2",
            "cos(180 deg)",
            "cos(60 deg)",
            "sin(0.2)^2 + cos(0.2)^2",
          ],
          seealso: ["acos", "sin", "tan"],
        },
        Fa = {
          name: "atan2",
          category: "Trigonometry",
          syntax: ["atan2(y, x)"],
          description:
            "Computes the principal value of the arc tangent of y/x in radians.",
          examples: [
            "atan2(2, 2) / pi",
            "angle = 60 deg in rad",
            "x = cos(angle)",
            "y = sin(angle)",
            "atan2(y, x)",
          ],
          seealso: ["sin", "cos", "tan"],
        },
        Ia = {
          name: "atanh",
          category: "Trigonometry",
          syntax: ["atanh(x)"],
          description:
            "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
          examples: ["atanh(0.5)"],
          seealso: ["acosh", "asinh"],
        },
        Ra = {
          name: "atan",
          category: "Trigonometry",
          syntax: ["atan(x)"],
          description: "Compute the inverse tangent of a value in radians.",
          examples: ["atan(0.5)", "atan(tan(0.5))"],
          seealso: ["tan", "acos", "asin"],
        },
        Ba = {
          name: "asinh",
          category: "Trigonometry",
          syntax: ["asinh(x)"],
          description:
            "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
          examples: ["asinh(0.5)"],
          seealso: ["acosh", "atanh"],
        },
        Da = {
          name: "asin",
          category: "Trigonometry",
          syntax: ["asin(x)"],
          description: "Compute the inverse sine of a value in radians.",
          examples: ["asin(0.5)", "asin(sin(0.5))"],
          seealso: ["sin", "acos", "atan"],
        },
        za = {
          name: "asech",
          category: "Trigonometry",
          syntax: ["asech(x)"],
          description: "Calculate the inverse secant of a value.",
          examples: ["asech(0.5)"],
          seealso: ["acsch", "acoth"],
        },
        _a = {
          name: "asec",
          category: "Trigonometry",
          syntax: ["asec(x)"],
          description: "Calculate the inverse secant of a value.",
          examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
          seealso: ["acos", "acot", "acsc"],
        },
        La = {
          name: "acsch",
          category: "Trigonometry",
          syntax: ["acsch(x)"],
          description:
            "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
          examples: ["acsch(0.5)"],
          seealso: ["asech", "acoth"],
        },
        $a = {
          name: "acsc",
          category: "Trigonometry",
          syntax: ["acsc(x)"],
          description: "Calculate the inverse cotangent of a value.",
          examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
          seealso: ["csc", "asin", "asec"],
        },
        Ua = {
          name: "acoth",
          category: "Trigonometry",
          syntax: ["acoth(x)"],
          description:
            "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
          examples: ["acoth(2)", "acoth(0.5)"],
          seealso: ["acsch", "asech"],
        },
        Wa = {
          name: "acot",
          category: "Trigonometry",
          syntax: ["acot(x)"],
          description: "Calculate the inverse cotangent of a value.",
          examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
          seealso: ["cot", "atan"],
        },
        Ha = {
          name: "acosh",
          category: "Trigonometry",
          syntax: ["acosh(x)"],
          description:
            "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
          examples: ["acosh(1.5)"],
          seealso: ["cosh", "asinh", "atanh"],
        },
        Ja = {
          name: "acos",
          category: "Trigonometry",
          syntax: ["acos(x)"],
          description: "Compute the inverse cosine of a value in radians.",
          examples: ["acos(0.5)", "acos(cos(2.3))"],
          seealso: ["cos", "atan", "asin"],
        },
        Va = {
          name: "sum",
          category: "Statistics",
          syntax: ["sum(a, b, c, ...)", "sum(A)"],
          description: "Compute the sum of all values.",
          examples: [
            "sum(2, 3, 4, 1)",
            "sum([2, 3, 4, 1])",
            "sum([2, 5; 4, 3])",
          ],
          seealso: [
            "max",
            "mean",
            "median",
            "min",
            "prod",
            "std",
            "sum",
            "variance",
          ],
        },
        Xa = {
          name: "std",
          category: "Statistics",
          syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
          description:
            'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
          examples: [
            "std(2, 4, 6)",
            "std([2, 4, 6, 8])",
            'std([2, 4, 6, 8], "uncorrected")',
            'std([2, 4, 6, 8], "biased")',
            "std([1, 2, 3; 4, 5, 6])",
          ],
          seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"],
        },
        Ga = {
          name: "quantileSeq",
          category: "Statistics",
          syntax: [
            "quantileSeq(A, prob[, sorted])",
            "quantileSeq(A, [prob1, prob2, ...][, sorted])",
            "quantileSeq(A, N[, sorted])",
          ],
          description:
            "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
          examples: [
            "quantileSeq([3, -1, 5, 7], 0.5)",
            "quantileSeq([3, -1, 5, 7], [1/3, 2/3])",
            "quantileSeq([3, -1, 5, 7], 2)",
            "quantileSeq([-1, 3, 5, 7], 0.5, true)",
          ],
          seealso: [
            "mean",
            "median",
            "min",
            "max",
            "prod",
            "std",
            "sum",
            "variance",
          ],
        },
        Qa = {
          name: "prod",
          category: "Statistics",
          syntax: ["prod(a, b, c, ...)", "prod(A)"],
          description: "Compute the product of all values.",
          examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
          seealso: [
            "max",
            "mean",
            "min",
            "median",
            "min",
            "std",
            "sum",
            "variance",
          ],
        },
        Za = {
          name: "mode",
          category: "Statistics",
          syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
          description:
            "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
          examples: [
            "mode(2, 1, 4, 3, 1)",
            "mode([1, 2.7, 3.2, 4, 2.7])",
            "mode(1, 4, 6, 1, 6)",
          ],
          seealso: [
            "max",
            "mean",
            "min",
            "median",
            "prod",
            "std",
            "sum",
            "variance",
          ],
        },
        Ya = {
          name: "min",
          category: "Statistics",
          syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
          description: "Compute the minimum value of a list of values.",
          examples: [
            "min(2, 3, 4, 1)",
            "min([2, 3, 4, 1])",
            "min([2, 5; 4, 3])",
            "min([2, 5; 4, 3], 1)",
            "min([2, 5; 4, 3], 2)",
            "min(2.7, 7.1, -4.5, 2.0, 4.1)",
            "max(2.7, 7.1, -4.5, 2.0, 4.1)",
          ],
          seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"],
        },
        Ka = {
          name: "median",
          category: "Statistics",
          syntax: ["median(a, b, c, ...)", "median(A)"],
          description:
            "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
          examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
          seealso: [
            "max",
            "mean",
            "min",
            "prod",
            "std",
            "sum",
            "variance",
            "quantileSeq",
          ],
        },
        eo = {
          name: "mean",
          category: "Statistics",
          syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
          description: "Compute the arithmetic mean of a list of values.",
          examples: [
            "mean(2, 3, 4, 1)",
            "mean([2, 3, 4, 1])",
            "mean([2, 5; 4, 3])",
            "mean([2, 5; 4, 3], 1)",
            "mean([2, 5; 4, 3], 2)",
            "mean([1.0, 2.7, 3.2, 4.0])",
          ],
          seealso: ["max", "median", "min", "prod", "std", "sum", "variance"],
        },
        to = {
          name: "max",
          category: "Statistics",
          syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
          description: "Compute the maximum value of a list of values.",
          examples: [
            "max(2, 3, 4, 1)",
            "max([2, 3, 4, 1])",
            "max([2, 5; 4, 3])",
            "max([2, 5; 4, 3], 1)",
            "max([2, 5; 4, 3], 2)",
            "max(2.7, 7.1, -4.5, 2.0, 4.1)",
            "min(2.7, 7.1, -4.5, 2.0, 4.1)",
          ],
          seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"],
        },
        ro = {
          name: "mad",
          category: "Statistics",
          syntax: ["mad(a, b, c, ...)", "mad(A)"],
          description:
            "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
          examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
          seealso: ["mean", "median", "std", "abs"],
        },
        no = {
          name: "erf",
          category: "Special",
          syntax: ["erf(x)"],
          description:
            "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
          examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
          seealso: [],
        },
        ao = {
          name: "setUnion",
          category: "Set",
          syntax: ["setUnion(set1, set2)"],
          description:
            "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: [
            "setUnion([1, 2, 3, 4], [3, 4, 5, 6])",
            "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])",
          ],
          seealso: ["setIntersect", "setDifference"],
        },
        oo = {
          name: "setSymDifference",
          category: "Set",
          syntax: ["setSymDifference(set1, set2)"],
          description:
            "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
          examples: [
            "setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])",
            "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])",
          ],
          seealso: ["setUnion", "setIntersect", "setDifference"],
        },
        io = {
          name: "setSize",
          category: "Set",
          syntax: ["setSize(set)", "setSize(set, unique)"],
          description:
            'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
          examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
          seealso: ["setUnion", "setIntersect", "setDifference"],
        },
        so,
        uo,
        co,
        lo,
        po,
        fo,
        mo,
        ho,
        go,
        yo,
        vo,
        xo,
        bo,
        wo,
        No,
        So,
        Eo,
        Ao,
        Oo,
        Co,
        To,
        Mo,
        ko,
        jo,
        qo,
        Po,
        Fo,
        Io,
        Ro,
        Bo,
        Do,
        zo,
        _o,
        Lo,
        $o,
        Uo,
        Wo,
        Ho,
        Jo,
        Vo,
        Xo,
        Go,
        Qo,
        Zo,
        Yo,
        Ko,
        ei,
        ti,
        ri,
        ni,
        ai,
        oi,
        ii,
        si,
        ui,
        ci,
        li,
        pi,
        fi,
        mi,
        hi,
        di,
        gi,
        yi,
        vi,
        xi,
        bi,
        wi,
        Ni,
        Si,
        Ei,
        Ai,
        Oi,
        Ci,
        Ti,
        Mi,
        ki,
        ji,
        qi,
        Pi,
        Fi,
        Ii,
        Ri,
        Bi,
        Di,
        zi,
        _i,
        Li,
        $i,
        Ui,
        Wi,
        Hi,
        Ji,
        Vi,
        Xi,
        Gi,
        Qi,
        Zi,
        Yi,
        Ki,
        es,
        ts,
        rs,
        ns,
        as,
        os,
        is,
        ss,
        us,
        cs,
        ls,
        ps,
        fs,
        ms,
        hs,
        ds,
        gs,
        ys,
        vs,
        xs,
        bs,
        ws,
        Ns,
        Ss,
        Es,
        As,
        Os,
        Cs,
        Ts,
        Ms,
        ks,
        js,
        qs,
        Ps = {
          name: "pi",
          category: "Constants",
          syntax: ["pi"],
          description:
            "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
          examples: ["pi", "sin(pi/2)"],
          seealso: ["tau"],
        },
        Fs,
        Is,
        Rs,
        Bs,
        Ds,
        zs,
        _s,
        Ls,
        $s,
        Us = {
          name: "e",
          category: "Constants",
          syntax: ["e"],
          description:
            "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
          examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
          seealso: ["exp"],
        },
        Ws,
        Hs,
        Js,
        Vs,
        Xs,
        Gs,
        Qs,
        Zs,
        Ys,
        Ks,
        eu,
        tu,
        ru,
        nu,
        au,
        ou,
        iu,
        su,
        uu,
        cu,
        lu,
        pu,
        fu,
        mu,
        hu = {
          bignumber: sa,
          boolean: {
            name: "boolean",
            category: "Construction",
            syntax: ["x", "boolean(x)"],
            description: "Convert a string or number into a boolean.",
            examples: [
              "boolean(0)",
              "boolean(1)",
              "boolean(3)",
              'boolean("true")',
              'boolean("false")',
              "boolean([1, 0, 1, 1])",
            ],
            seealso: [
              "bignumber",
              "complex",
              "index",
              "matrix",
              "number",
              "string",
              "unit",
            ],
          },
          complex: {
            name: "complex",
            category: "Construction",
            syntax: ["complex()", "complex(re, im)", "complex(string)"],
            description: "Create a complex number.",
            examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
            seealso: [
              "bignumber",
              "boolean",
              "index",
              "matrix",
              "number",
              "string",
              "unit",
            ],
          },
          createUnit: {
            name: "createUnit",
            category: "Construction",
            syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
            description:
              "Create a user-defined unit and register it with the Unit type.",
            examples: [
              'createUnit("foo")',
              'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})',
              'createUnit("mph", "1 mile/hour")',
            ],
            seealso: ["unit", "splitUnit"],
          },
          fraction: {
            name: "fraction",
            category: "Construction",
            syntax: ["fraction(num)", "fraction(num,den)"],
            description:
              "Create a fraction from a number or from a numerator and denominator.",
            examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "index",
              "matrix",
              "string",
              "unit",
            ],
          },
          index: {
            name: "index",
            category: "Construction",
            syntax: [
              "[start]",
              "[start:end]",
              "[start:step:end]",
              "[start1, start 2, ...]",
              "[start1:end1, start2:end2, ...]",
              "[start1:step1:end1, start2:step2:end2, ...]",
            ],
            description:
              "Create an index to get or replace a subset of a matrix",
            examples: [
              "[]",
              "[1, 2, 3]",
              "A = [1, 2, 3; 4, 5, 6]",
              "A[1, :]",
              "A[1, 2] = 50",
              "A[0:2, 0:2] = ones(2, 2)",
            ],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "matrix,",
              "number",
              "range",
              "string",
              "unit",
            ],
          },
          matrix: {
            name: "matrix",
            category: "Construction",
            syntax: [
              "[]",
              "[a1, b1, ...; a2, b2, ...]",
              "matrix()",
              'matrix("dense")',
              "matrix([...])",
            ],
            description: "Create a matrix.",
            examples: [
              "[]",
              "[1, 2, 3]",
              "[1, 2, 3; 4, 5, 6]",
              "matrix()",
              "matrix([3, 4])",
              'matrix([3, 4; 5, 6], "sparse")',
              'matrix([3, 4; 5, 6], "sparse", "number")',
            ],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "index",
              "number",
              "string",
              "unit",
              "sparse",
            ],
          },
          number: {
            name: "number",
            category: "Construction",
            syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
            description:
              "Create a number or convert a string or boolean into a number.",
            examples: [
              "2",
              "2e3",
              "4.05",
              "number(2)",
              'number("7.2")',
              "number(true)",
              "number([true, false, true, true])",
              'number(unit("52cm"), "m")',
            ],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "fraction",
              "index",
              "matrix",
              "string",
              "unit",
            ],
          },
          sparse: {
            name: "sparse",
            category: "Construction",
            syntax: [
              "sparse()",
              "sparse([a1, b1, ...; a1, b2, ...])",
              'sparse([a1, b1, ...; a1, b2, ...], "number")',
            ],
            description: "Create a sparse matrix.",
            examples: [
              "sparse()",
              "sparse([3, 4; 5, 6])",
              'sparse([3, 0; 5, 0], "number")',
            ],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "index",
              "number",
              "string",
              "unit",
              "matrix",
            ],
          },
          splitUnit: {
            name: "splitUnit",
            category: "Construction",
            syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
            description:
              "Split a unit in an array of units whose sum is equal to the original unit.",
            examples: ['splitUnit(1 m, ["feet", "inch"])'],
            seealso: ["unit", "createUnit"],
          },
          string: {
            name: "string",
            category: "Construction",
            syntax: ['"text"', "string(x)"],
            description: "Create a string or convert a value to a string",
            examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "index",
              "matrix",
              "number",
              "unit",
            ],
          },
          unit: {
            name: "unit",
            category: "Construction",
            syntax: ["value unit", "unit(value, unit)", "unit(string)"],
            description: "Create a unit.",
            examples: [
              "5.5 mm",
              "3 inch",
              'unit(7.1, "kilogram")',
              'unit("23 deg")',
            ],
            seealso: [
              "bignumber",
              "boolean",
              "complex",
              "index",
              "matrix",
              "number",
              "string",
            ],
          },
          e: Us,
          E: Us,
          false: {
            name: "false",
            category: "Constants",
            syntax: ["false"],
            description: "Boolean value false",
            examples: ["false"],
            seealso: ["true"],
          },
          i: {
            name: "i",
            category: "Constants",
            syntax: ["i"],
            description:
              "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
            examples: ["i", "i * i", "sqrt(-1)"],
            seealso: [],
          },
          Infinity: {
            name: "Infinity",
            category: "Constants",
            syntax: ["Infinity"],
            description:
              "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
            examples: ["Infinity", "1 / 0"],
            seealso: [],
          },
          LN2: {
            name: "LN2",
            category: "Constants",
            syntax: ["LN2"],
            description:
              "Returns the natural logarithm of 2, approximately equal to 0.693",
            examples: ["LN2", "log(2)"],
            seealso: [],
          },
          LN10: {
            name: "LN10",
            category: "Constants",
            syntax: ["LN10"],
            description:
              "Returns the natural logarithm of 10, approximately equal to 2.302",
            examples: ["LN10", "log(10)"],
            seealso: [],
          },
          LOG2E: {
            name: "LOG2E",
            category: "Constants",
            syntax: ["LOG2E"],
            description:
              "Returns the base-2 logarithm of E, approximately equal to 1.442",
            examples: ["LOG2E", "log(e, 2)"],
            seealso: [],
          },
          LOG10E: {
            name: "LOG10E",
            category: "Constants",
            syntax: ["LOG10E"],
            description:
              "Returns the base-10 logarithm of E, approximately equal to 0.434",
            examples: ["LOG10E", "log(e, 10)"],
            seealso: [],
          },
          NaN: {
            name: "NaN",
            category: "Constants",
            syntax: ["NaN"],
            description: "Not a number",
            examples: ["NaN", "0 / 0"],
            seealso: [],
          },
          null: {
            name: "null",
            category: "Constants",
            syntax: ["null"],
            description: "Value null",
            examples: ["null"],
            seealso: ["true", "false"],
          },
          pi: Ps,
          PI: Ps,
          phi: {
            name: "phi",
            category: "Constants",
            syntax: ["phi"],
            description:
              "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
            examples: ["phi"],
            seealso: [],
          },
          SQRT1_2: {
            name: "SQRT1_2",
            category: "Constants",
            syntax: ["SQRT1_2"],
            description:
              "Returns the square root of 1/2, approximately equal to 0.707",
            examples: ["SQRT1_2", "sqrt(1/2)"],
            seealso: [],
          },
          SQRT2: {
            name: "SQRT2",
            category: "Constants",
            syntax: ["SQRT2"],
            description:
              "Returns the square root of 2, approximately equal to 1.414",
            examples: ["SQRT2", "sqrt(2)"],
            seealso: [],
          },
          tau: {
            name: "tau",
            category: "Constants",
            syntax: ["tau"],
            description:
              "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
            examples: ["tau", "2 * pi"],
            seealso: ["pi"],
          },
          true: {
            name: "true",
            category: "Constants",
            syntax: ["true"],
            description: "Boolean value true",
            examples: ["true"],
            seealso: ["false"],
          },
          version: {
            name: "version",
            category: "Constants",
            syntax: ["version"],
            description: "A string with the version number of math.js",
            examples: ["version"],
            seealso: [],
          },
          speedOfLight: {
            description: "Speed of light in vacuum",
            examples: ["speedOfLight"],
          },
          gravitationConstant: {
            description: "Newtonian constant of gravitation",
            examples: ["gravitationConstant"],
          },
          planckConstant: {
            description: "Planck constant",
            examples: ["planckConstant"],
          },
          reducedPlanckConstant: {
            description: "Reduced Planck constant",
            examples: ["reducedPlanckConstant"],
          },
          magneticConstant: {
            description: "Magnetic constant (vacuum permeability)",
            examples: ["magneticConstant"],
          },
          electricConstant: {
            description: "Electric constant (vacuum permeability)",
            examples: ["electricConstant"],
          },
          vacuumImpedance: {
            description: "Characteristic impedance of vacuum",
            examples: ["vacuumImpedance"],
          },
          coulomb: { description: "Coulomb's constant", examples: ["coulomb"] },
          elementaryCharge: {
            description: "Elementary charge",
            examples: ["elementaryCharge"],
          },
          bohrMagneton: {
            description: "Borh magneton",
            examples: ["bohrMagneton"],
          },
          conductanceQuantum: {
            description: "Conductance quantum",
            examples: ["conductanceQuantum"],
          },
          inverseConductanceQuantum: {
            description: "Inverse conductance quantum",
            examples: ["inverseConductanceQuantum"],
          },
          magneticFluxQuantum: {
            description: "Magnetic flux quantum",
            examples: ["magneticFluxQuantum"],
          },
          nuclearMagneton: {
            description: "Nuclear magneton",
            examples: ["nuclearMagneton"],
          },
          klitzing: {
            description: "Von Klitzing constant",
            examples: ["klitzing"],
          },
          bohrRadius: { description: "Borh radius", examples: ["bohrRadius"] },
          classicalElectronRadius: {
            description: "Classical electron radius",
            examples: ["classicalElectronRadius"],
          },
          electronMass: {
            description: "Electron mass",
            examples: ["electronMass"],
          },
          fermiCoupling: {
            description: "Fermi coupling constant",
            examples: ["fermiCoupling"],
          },
          fineStructure: {
            description: "Fine-structure constant",
            examples: ["fineStructure"],
          },
          hartreeEnergy: {
            description: "Hartree energy",
            examples: ["hartreeEnergy"],
          },
          protonMass: { description: "Proton mass", examples: ["protonMass"] },
          deuteronMass: {
            description: "Deuteron Mass",
            examples: ["deuteronMass"],
          },
          neutronMass: {
            description: "Neutron mass",
            examples: ["neutronMass"],
          },
          quantumOfCirculation: {
            description: "Quantum of circulation",
            examples: ["quantumOfCirculation"],
          },
          rydberg: { description: "Rydberg constant", examples: ["rydberg"] },
          thomsonCrossSection: {
            description: "Thomson cross section",
            examples: ["thomsonCrossSection"],
          },
          weakMixingAngle: {
            description: "Weak mixing angle",
            examples: ["weakMixingAngle"],
          },
          efimovFactor: {
            description: "Efimov factor",
            examples: ["efimovFactor"],
          },
          atomicMass: {
            description: "Atomic mass constant",
            examples: ["atomicMass"],
          },
          avogadro: {
            description: "Avogadro's number",
            examples: ["avogadro"],
          },
          boltzmann: {
            description: "Boltzmann constant",
            examples: ["boltzmann"],
          },
          faraday: { description: "Faraday constant", examples: ["faraday"] },
          firstRadiation: {
            description: "First radiation constant",
            examples: ["firstRadiation"],
          },
          loschmidt: {
            description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
            examples: ["loschmidt"],
          },
          gasConstant: {
            description: "Gas constant",
            examples: ["gasConstant"],
          },
          molarPlanckConstant: {
            description: "Molar Planck constant",
            examples: ["molarPlanckConstant"],
          },
          molarVolume: {
            description:
              "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
            examples: ["molarVolume"],
          },
          sackurTetrode: {
            description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
            examples: ["sackurTetrode"],
          },
          secondRadiation: {
            description: "Second radiation constant",
            examples: ["secondRadiation"],
          },
          stefanBoltzmann: {
            description: "Stefan-Boltzmann constant",
            examples: ["stefanBoltzmann"],
          },
          wienDisplacement: {
            description: "Wien displacement law constant",
            examples: ["wienDisplacement"],
          },
          molarMass: {
            description: "Molar mass constant",
            examples: ["molarMass"],
          },
          molarMassC12: {
            description: "Molar mass constant of carbon-12",
            examples: ["molarMassC12"],
          },
          gravity: {
            description:
              "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
            examples: ["gravity"],
          },
          planckLength: {
            description: "Planck length",
            examples: ["planckLength"],
          },
          planckMass: { description: "Planck mass", examples: ["planckMass"] },
          planckTime: { description: "Planck time", examples: ["planckTime"] },
          planckCharge: {
            description: "Planck charge",
            examples: ["planckCharge"],
          },
          planckTemperature: {
            description: "Planck temperature",
            examples: ["planckTemperature"],
          },
          derivative: {
            name: "derivative",
            category: "Algebra",
            syntax: [
              "derivative(expr, variable)",
              "derivative(expr, variable, {simplify: boolean})",
            ],
            description:
              "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
            examples: [
              'derivative("2x^3", "x")',
              'derivative("2x^3", "x", {simplify: false})',
              'derivative("2x^2 + 3x + 4", "x")',
              'derivative("sin(2x)", "x")',
              'f = parse("x^2 + x")',
              'x = parse("x")',
              "df = derivative(f, x)",
              "df.evaluate({x: 3})",
            ],
            seealso: ["simplify", "parse", "evaluate"],
          },
          lsolve: {
            name: "lsolve",
            category: "Algebra",
            syntax: ["x=lsolve(L, b)"],
            description:
              "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
            examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
            seealso: [
              "lsolveAll",
              "lup",
              "lusolve",
              "usolve",
              "matrix",
              "sparse",
            ],
          },
          lsolveAll: {
            name: "lsolveAll",
            category: "Algebra",
            syntax: ["x=lsolveAll(L, b)"],
            description:
              "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
            examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
            seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"],
          },
          lup: {
            name: "lup",
            category: "Algebra",
            syntax: ["lup(m)"],
            description:
              "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
            examples: [
              "lup([[2, 1], [1, 4]])",
              "lup(matrix([[2, 1], [1, 4]]))",
              "lup(sparse([[2, 1], [1, 4]]))",
            ],
            seealso: [
              "lusolve",
              "lsolve",
              "usolve",
              "matrix",
              "sparse",
              "slu",
              "qr",
            ],
          },
          lusolve: {
            name: "lusolve",
            category: "Algebra",
            syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
            description:
              "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
            examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
            seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"],
          },
          simplify: {
            name: "simplify",
            category: "Algebra",
            syntax: ["simplify(expr)", "simplify(expr, rules)"],
            description: "Simplify an expression tree.",
            examples: [
              'simplify("3 + 2 / 4")',
              'simplify("2x + x")',
              'f = parse("x * (x + 2 + x)")',
              "simplified = simplify(f)",
              "simplified.evaluate({x: 2})",
            ],
            seealso: ["derivative", "parse", "evaluate"],
          },
          rationalize: {
            name: "rationalize",
            category: "Algebra",
            syntax: [
              "rationalize(expr)",
              "rationalize(expr, scope)",
              "rationalize(expr, scope, detailed)",
            ],
            description:
              "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
            examples: [
              'rationalize("2x/y - y/(x+1)")',
              'rationalize("2x/y - y/(x+1)", true)',
            ],
            seealso: ["simplify"],
          },
          slu: {
            name: "slu",
            category: "Algebra",
            syntax: ["slu(A, order, threshold)"],
            description:
              "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
            examples: [
              "slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)",
            ],
            seealso: [
              "lusolve",
              "lsolve",
              "usolve",
              "matrix",
              "sparse",
              "lup",
              "qr",
            ],
          },
          usolve: {
            name: "usolve",
            category: "Algebra",
            syntax: ["x=usolve(U, b)"],
            description:
              "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
            examples: [
              "x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])",
            ],
            seealso: [
              "usolveAll",
              "lup",
              "lusolve",
              "lsolve",
              "matrix",
              "sparse",
            ],
          },
          usolveAll: {
            name: "usolveAll",
            category: "Algebra",
            syntax: ["x=usolve(U, b)"],
            description:
              "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
            examples: [
              "x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])",
            ],
            seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"],
          },
          qr: {
            name: "qr",
            category: "Algebra",
            syntax: ["qr(A)"],
            description:
              "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
            examples: [
              "qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])",
            ],
            seealso: ["lup", "slu", "matrix"],
          },
          abs: {
            name: "abs",
            category: "Arithmetic",
            syntax: ["abs(x)"],
            description: "Compute the absolute value.",
            examples: ["abs(3.5)", "abs(-4.2)"],
            seealso: ["sign"],
          },
          add: {
            name: "add",
            category: "Operators",
            syntax: ["x + y", "add(x, y)"],
            description: "Add two values.",
            examples: [
              "a = 2.1 + 3.6",
              "a - 3.6",
              "3 + 2i",
              "3 cm + 2 inch",
              '"2.3" + "4"',
            ],
            seealso: ["subtract"],
          },
          cbrt: {
            name: "cbrt",
            category: "Arithmetic",
            syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
            description:
              "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
            examples: [
              "cbrt(64)",
              "cube(4)",
              "cbrt(-8)",
              "cbrt(2 + 3i)",
              "cbrt(8i)",
              "cbrt(8i, true)",
              "cbrt(27 m^3)",
            ],
            seealso: ["square", "sqrt", "cube", "multiply"],
          },
          ceil: {
            name: "ceil",
            category: "Arithmetic",
            syntax: ["ceil(x)"],
            description:
              "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
            examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
            seealso: ["floor", "fix", "round"],
          },
          cube: {
            name: "cube",
            category: "Arithmetic",
            syntax: ["cube(x)"],
            description:
              "Compute the cube of a value. The cube of x is x * x * x.",
            examples: ["cube(2)", "2^3", "2 * 2 * 2"],
            seealso: ["multiply", "square", "pow"],
          },
          divide: {
            name: "divide",
            category: "Operators",
            syntax: ["x / y", "divide(x, y)"],
            description: "Divide two values.",
            examples: [
              "a = 2 / 3",
              "a * 3",
              "4.5 / 2",
              "3 + 4 / 2",
              "(3 + 4) / 2",
              "18 km / 4.5",
            ],
            seealso: ["multiply"],
          },
          dotDivide: {
            name: "dotDivide",
            category: "Operators",
            syntax: ["x ./ y", "dotDivide(x, y)"],
            description: "Divide two values element wise.",
            examples: [
              "a = [1, 2, 3; 4, 5, 6]",
              "b = [2, 1, 1; 3, 2, 5]",
              "a ./ b",
            ],
            seealso: ["multiply", "dotMultiply", "divide"],
          },
          dotMultiply: {
            name: "dotMultiply",
            category: "Operators",
            syntax: ["x .* y", "dotMultiply(x, y)"],
            description: "Multiply two values element wise.",
            examples: [
              "a = [1, 2, 3; 4, 5, 6]",
              "b = [2, 1, 1; 3, 2, 5]",
              "a .* b",
            ],
            seealso: ["multiply", "divide", "dotDivide"],
          },
          dotPow: {
            name: "dotPow",
            category: "Operators",
            syntax: ["x .^ y", "dotPow(x, y)"],
            description: "Calculates the power of x to y element wise.",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
            seealso: ["pow"],
          },
          exp: {
            name: "exp",
            category: "Arithmetic",
            syntax: ["exp(x)"],
            description: "Calculate the exponent of a value.",
            examples: [
              "exp(1.3)",
              "e ^ 1.3",
              "log(exp(1.3))",
              "x = 2.4",
              "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula",
            ],
            seealso: ["expm", "expm1", "pow", "log"],
          },
          expm: {
            name: "expm",
            category: "Arithmetic",
            syntax: ["exp(x)"],
            description:
              "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
            examples: ["expm([[0,2],[0,0]])"],
            seealso: ["exp"],
          },
          expm1: {
            name: "expm1",
            category: "Arithmetic",
            syntax: ["expm1(x)"],
            description:
              "Calculate the value of subtracting 1 from the exponential value.",
            examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
            seealso: ["exp", "pow", "log"],
          },
          fix: {
            name: "fix",
            category: "Arithmetic",
            syntax: ["fix(x)"],
            description:
              "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
            examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
            seealso: ["ceil", "floor", "round"],
          },
          floor: {
            name: "floor",
            category: "Arithmetic",
            syntax: ["floor(x)"],
            description:
              "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
            examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
            seealso: ["ceil", "fix", "round"],
          },
          gcd: {
            name: "gcd",
            category: "Arithmetic",
            syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
            description: "Compute the greatest common divisor.",
            examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
            seealso: ["lcm", "xgcd"],
          },
          hypot: {
            name: "hypot",
            category: "Arithmetic",
            syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
            description: "Calculate the hypotenusa of a list with values. ",
            examples: [
              "hypot(3, 4)",
              "sqrt(3^2 + 4^2)",
              "hypot(-2)",
              "hypot([3, 4, 5])",
            ],
            seealso: ["abs", "norm"],
          },
          lcm: {
            name: "lcm",
            category: "Arithmetic",
            syntax: ["lcm(x, y)"],
            description: "Compute the least common multiple.",
            examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
            seealso: ["gcd"],
          },
          log: {
            name: "log",
            category: "Arithmetic",
            syntax: ["log(x)", "log(x, base)"],
            description:
              "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
            examples: [
              "log(3.5)",
              "a = log(2.4)",
              "exp(a)",
              "10 ^ 4",
              "log(10000, 10)",
              "log(10000) / log(10)",
              "b = log(1024, 2)",
              "2 ^ b",
            ],
            seealso: ["exp", "log1p", "log2", "log10"],
          },
          log2: {
            name: "log2",
            category: "Arithmetic",
            syntax: ["log2(x)"],
            description:
              "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
            examples: [
              "log2(0.03125)",
              "log2(16)",
              "log2(16) / log2(2)",
              "pow(2, 4)",
            ],
            seealso: ["exp", "log1p", "log", "log10"],
          },
          log1p: {
            name: "log1p",
            category: "Arithmetic",
            syntax: ["log1p(x)", "log1p(x, base)"],
            description: "Calculate the logarithm of a `value+1`",
            examples: [
              "log1p(2.5)",
              "exp(log1p(1.4))",
              "pow(10, 4)",
              "log1p(9999, 10)",
              "log1p(9999) / log(10)",
            ],
            seealso: ["exp", "log", "log2", "log10"],
          },
          log10: {
            name: "log10",
            category: "Arithmetic",
            syntax: ["log10(x)"],
            description: "Compute the 10-base logarithm of a value.",
            examples: [
              "log10(0.00001)",
              "log10(10000)",
              "10 ^ 4",
              "log(10000) / log(10)",
              "log(10000, 10)",
            ],
            seealso: ["exp", "log"],
          },
          mod: {
            name: "mod",
            category: "Operators",
            syntax: ["x % y", "x mod y", "mod(x, y)"],
            description:
              "Calculates the modulus, the remainder of an integer division.",
            examples: [
              "7 % 3",
              "11 % 2",
              "10 mod 4",
              "isOdd(x) = x % 2",
              "isOdd(2)",
              "isOdd(3)",
            ],
            seealso: ["divide"],
          },
          multiply: {
            name: "multiply",
            category: "Operators",
            syntax: ["x * y", "multiply(x, y)"],
            description: "multiply two values.",
            examples: [
              "a = 2.1 * 3.4",
              "a / 3.4",
              "2 * 3 + 4",
              "2 * (3 + 4)",
              "3 * 2.1 km",
            ],
            seealso: ["divide"],
          },
          norm: {
            name: "norm",
            category: "Arithmetic",
            syntax: ["norm(x)", "norm(x, p)"],
            description: "Calculate the norm of a number, vector or matrix.",
            examples: [
              "abs(-3.5)",
              "norm(-3.5)",
              "norm(3 - 4i)",
              "norm([1, 2, -3], Infinity)",
              "norm([1, 2, -3], -Infinity)",
              "norm([3, 4], 2)",
              "norm([[1, 2], [3, 4]], 1)",
              'norm([[1, 2], [3, 4]], "inf")',
              'norm([[1, 2], [3, 4]], "fro")',
            ],
          },
          nthRoot: {
            name: "nthRoot",
            category: "Arithmetic",
            syntax: ["nthRoot(a)", "nthRoot(a, root)"],
            description:
              'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
            examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
            seealso: ["nthRoots", "pow", "sqrt"],
          },
          nthRoots: {
            name: "nthRoots",
            category: "Arithmetic",
            syntax: ["nthRoots(A)", "nthRoots(A, root)"],
            description:
              'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
            examples: ["nthRoots(1)", "nthRoots(1, 3)"],
            seealso: ["sqrt", "pow", "nthRoot"],
          },
          pow: {
            name: "pow",
            category: "Operators",
            syntax: ["x ^ y", "pow(x, y)"],
            description: "Calculates the power of x to y, x^y.",
            examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)"],
            seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"],
          },
          round: {
            name: "round",
            category: "Arithmetic",
            syntax: ["round(x)", "round(x, n)"],
            description:
              "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
            examples: [
              "round(3.2)",
              "round(3.8)",
              "round(-4.2)",
              "round(-4.8)",
              "round(pi, 3)",
              "round(123.45678, 2)",
            ],
            seealso: ["ceil", "floor", "fix"],
          },
          sign: {
            name: "sign",
            category: "Arithmetic",
            syntax: ["sign(x)"],
            description:
              "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
            examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
            seealso: ["abs"],
          },
          sqrt: {
            name: "sqrt",
            category: "Arithmetic",
            syntax: ["sqrt(x)"],
            description:
              "Compute the square root value. If x = y * y, then y is the square root of x.",
            examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
            seealso: [
              "square",
              "sqrtm",
              "multiply",
              "nthRoot",
              "nthRoots",
              "pow",
            ],
          },
          sqrtm: {
            name: "sqrtm",
            category: "Arithmetic",
            syntax: ["sqrtm(x)"],
            description:
              "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
            examples: ["sqrtm([[1, 2], [3, 4]])"],
            seealso: ["sqrt", "abs", "square", "multiply"],
          },
          square: {
            name: "square",
            category: "Arithmetic",
            syntax: ["square(x)"],
            description:
              "Compute the square of a value. The square of x is x * x.",
            examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
            seealso: ["multiply", "pow", "sqrt", "cube"],
          },
          subtract: {
            name: "subtract",
            category: "Operators",
            syntax: ["x - y", "subtract(x, y)"],
            description: "subtract two values.",
            examples: [
              "a = 5.3 - 2",
              "a + 2",
              "2/3 - 1/6",
              "2 * 3 - 3",
              "2.1 km - 500m",
            ],
            seealso: ["add"],
          },
          unaryMinus: {
            name: "unaryMinus",
            category: "Operators",
            syntax: ["-x", "unaryMinus(x)"],
            description:
              "Inverse the sign of a value. Converts booleans and strings to numbers.",
            examples: ["-4.5", "-(-5.6)", '-"22"'],
            seealso: ["add", "subtract", "unaryPlus"],
          },
          unaryPlus: {
            name: "unaryPlus",
            category: "Operators",
            syntax: ["+x", "unaryPlus(x)"],
            description: "Converts booleans and strings to numbers.",
            examples: ["+true", '+"2"'],
            seealso: ["add", "subtract", "unaryMinus"],
          },
          xgcd: {
            name: "xgcd",
            category: "Arithmetic",
            syntax: ["xgcd(a, b)"],
            description:
              "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
            examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
            seealso: ["gcd", "lcm"],
          },
          bitAnd: {
            name: "bitAnd",
            category: "Bitwise",
            syntax: ["x & y", "bitAnd(x, y)"],
            description:
              "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
            examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
            seealso: [
              "bitNot",
              "bitOr",
              "bitXor",
              "leftShift",
              "rightArithShift",
              "rightLogShift",
            ],
          },
          bitNot: {
            name: "bitNot",
            category: "Bitwise",
            syntax: ["~x", "bitNot(x)"],
            description:
              "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
            examples: ["~1", "~2", "bitNot([2, -3, 4])"],
            seealso: [
              "bitAnd",
              "bitOr",
              "bitXor",
              "leftShift",
              "rightArithShift",
              "rightLogShift",
            ],
          },
          bitOr: {
            name: "bitOr",
            category: "Bitwise",
            syntax: ["x | y", "bitOr(x, y)"],
            description:
              "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
            examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
            seealso: [
              "bitAnd",
              "bitNot",
              "bitXor",
              "leftShift",
              "rightArithShift",
              "rightLogShift",
            ],
          },
          bitXor: {
            name: "bitXor",
            category: "Bitwise",
            syntax: ["bitXor(x, y)"],
            description:
              "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
            examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
            seealso: [
              "bitAnd",
              "bitNot",
              "bitOr",
              "leftShift",
              "rightArithShift",
              "rightLogShift",
            ],
          },
          leftShift: {
            name: "leftShift",
            category: "Bitwise",
            syntax: ["x << y", "leftShift(x, y)"],
            description:
              "Bitwise left logical shift of a value x by y number of bits.",
            examples: ["4 << 1", "8 >> 1"],
            seealso: [
              "bitAnd",
              "bitNot",
              "bitOr",
              "bitXor",
              "rightArithShift",
              "rightLogShift",
            ],
          },
          rightArithShift: {
            name: "rightArithShift",
            category: "Bitwise",
            syntax: ["x >> y", "rightArithShift(x, y)"],
            description:
              "Bitwise right arithmetic shift of a value x by y number of bits.",
            examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
            seealso: [
              "bitAnd",
              "bitNot",
              "bitOr",
              "bitXor",
              "leftShift",
              "rightLogShift",
            ],
          },
          rightLogShift: {
            name: "rightLogShift",
            category: "Bitwise",
            syntax: ["x >>> y", "rightLogShift(x, y)"],
            description:
              "Bitwise right logical shift of a value x by y number of bits.",
            examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
            seealso: [
              "bitAnd",
              "bitNot",
              "bitOr",
              "bitXor",
              "leftShift",
              "rightArithShift",
            ],
          },
          bellNumbers: {
            name: "bellNumbers",
            category: "Combinatorics",
            syntax: ["bellNumbers(n)"],
            description:
              "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
            examples: ["bellNumbers(3)", "bellNumbers(8)"],
            seealso: ["stirlingS2"],
          },
          catalan: {
            name: "catalan",
            category: "Combinatorics",
            syntax: ["catalan(n)"],
            description:
              "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
            examples: ["catalan(3)", "catalan(8)"],
            seealso: ["bellNumbers"],
          },
          composition: {
            name: "composition",
            category: "Combinatorics",
            syntax: ["composition(n, k)"],
            description:
              "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
            examples: ["composition(5, 3)"],
            seealso: ["combinations"],
          },
          stirlingS2: {
            name: "stirlingS2",
            category: "Combinatorics",
            syntax: ["stirlingS2(n, k)"],
            description:
              "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
            examples: ["stirlingS2(5, 3)"],
            seealso: ["bellNumbers"],
          },
          config: {
            name: "config",
            category: "Core",
            syntax: ["config()", "config(options)"],
            description: "Get configuration or change configuration.",
            examples: [
              "config()",
              "1/3 + 1/4",
              'config({number: "Fraction"})',
              "1/3 + 1/4",
            ],
            seealso: [],
          },
          import: {
            name: "import",
            category: "Core",
            syntax: ["import(functions)", "import(functions, options)"],
            description: "Import functions or constants from an object.",
            examples: [
              "import({myFn: f(x)=x^2, myConstant: 32 })",
              "myFn(2)",
              "myConstant",
            ],
            seealso: [],
          },
          typed: {
            name: "typed",
            category: "Core",
            syntax: ["typed(signatures)", "typed(name, signatures)"],
            description: "Create a typed function.",
            examples: [
              'double = typed({ "number, number": f(x)=x+x })',
              "double(2)",
              'double("hello")',
            ],
            seealso: [],
          },
          arg: {
            name: "arg",
            category: "Complex",
            syntax: ["arg(x)"],
            description:
              "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
            examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
            seealso: ["re", "im", "conj", "abs"],
          },
          conj: {
            name: "conj",
            category: "Complex",
            syntax: ["conj(x)"],
            description:
              "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
            examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
            seealso: ["re", "im", "abs", "arg"],
          },
          re: {
            name: "re",
            category: "Complex",
            syntax: ["re(x)"],
            description: "Get the real part of a complex number.",
            examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
            seealso: ["im", "conj", "abs", "arg"],
          },
          im: {
            name: "im",
            category: "Complex",
            syntax: ["im(x)"],
            description: "Get the imaginary part of a complex number.",
            examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
            seealso: ["re", "conj", "abs", "arg"],
          },
          evaluate: {
            name: "evaluate",
            category: "Expression",
            syntax: [
              "evaluate(expression)",
              "evaluate([expr1, expr2, expr3, ...])",
            ],
            description: "Evaluate an expression or an array with expressions.",
            examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'],
            seealso: [],
          },
          help: {
            name: "help",
            category: "Expression",
            syntax: ["help(object)", "help(string)"],
            description: "Display documentation on a function or data type.",
            examples: ["help(sqrt)", 'help("complex")'],
            seealso: [],
          },
          distance: {
            name: "distance",
            category: "Geometry",
            syntax: [
              "distance([x1, y1], [x2, y2])",
              "distance([[x1, y1], [x2, y2]])",
            ],
            description:
              "Calculates the Euclidean distance between two points.",
            examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
            seealso: [],
          },
          intersect: {
            name: "intersect",
            category: "Geometry",
            syntax: [
              "intersect(expr1, expr2, expr3, expr4)",
              "intersect(expr1, expr2, expr3)",
            ],
            description:
              "Computes the intersection point of lines and/or planes.",
            examples: [
              "intersect([0, 0], [10, 10], [10, 0], [0, 10])",
              "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])",
            ],
            seealso: [],
          },
          and: {
            name: "and",
            category: "Logical",
            syntax: ["x and y", "and(x, y)"],
            description:
              "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
            examples: ["true and false", "true and true", "2 and 4"],
            seealso: ["not", "or", "xor"],
          },
          not: {
            name: "not",
            category: "Logical",
            syntax: ["not x", "not(x)"],
            description:
              "Logical not. Flips the boolean value of given argument.",
            examples: ["not true", "not false", "not 2", "not 0"],
            seealso: ["and", "or", "xor"],
          },
          or: {
            name: "or",
            category: "Logical",
            syntax: ["x or y", "or(x, y)"],
            description:
              "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
            examples: ["true or false", "false or false", "0 or 4"],
            seealso: ["not", "and", "xor"],
          },
          xor: {
            name: "xor",
            category: "Logical",
            syntax: ["x xor y", "xor(x, y)"],
            description:
              "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
            examples: [
              "true xor false",
              "false xor false",
              "true xor true",
              "0 xor 4",
            ],
            seealso: ["not", "and", "or"],
          },
          concat: {
            name: "concat",
            category: "Matrix",
            syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
            description:
              "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
            examples: [
              "A = [1, 2; 5, 6]",
              "B = [3, 4; 7, 8]",
              "concat(A, B)",
              "concat(A, B, 1)",
              "concat(A, B, 2)",
            ],
            seealso: [
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          count: {
            name: "count",
            category: "Matrix",
            syntax: ["count(x)"],
            description:
              "Count the number of elements of a matrix, array or string.",
            examples: [
              "a = [1, 2; 3, 4; 5, 6]",
              "count(a)",
              "size(a)",
              'count("hello world")',
            ],
            seealso: ["size"],
          },
          cross: {
            name: "cross",
            category: "Matrix",
            syntax: ["cross(A, B)"],
            description:
              "Calculate the cross product for two vectors in three dimensional space.",
            examples: [
              "cross([1, 1, 0],  [0, 1, 1])",
              "cross([3, -3, 1], [4, 9, 2])",
              "cross([2, 3, 4],  [5, 6, 7])",
            ],
            seealso: ["multiply", "dot"],
          },
          column: {
            name: "column",
            category: "Matrix",
            syntax: ["column(x, index)"],
            description: "Return a column from a matrix or array.",
            examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
            seealso: ["row", "matrixFromColumns"],
          },
          ctranspose: {
            name: "ctranspose",
            category: "Matrix",
            syntax: ["x'", "ctranspose(x)"],
            description: "Complex Conjugate and Transpose a matrix",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "zeros",
            ],
          },
          det: {
            name: "det",
            category: "Matrix",
            syntax: ["det(x)"],
            description: "Calculate the determinant of a matrix",
            examples: [
              "det([1, 2; 3, 4])",
              "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])",
            ],
            seealso: [
              "concat",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          diag: {
            name: "diag",
            category: "Matrix",
            syntax: ["diag(x)", "diag(x, k)"],
            description:
              "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
            examples: [
              "diag(1:3)",
              "diag(1:3, 1)",
              "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]",
              "diag(a)",
            ],
            seealso: [
              "concat",
              "det",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          diff: {
            name: "diff",
            category: "Matrix",
            syntax: ["diff(arr)", "diff(arr, dim)"],
            description: [
              "Create a new matrix or array with the difference of the passed matrix or array.",
              "Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference",
              "If no dimension parameter is passed it is assumed as dimension 0",
              "Dimension is zero-based in javascript and one-based in the parser",
              "Arrays must be 'rectangular' meaning arrays like [1, 2]",
              "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays",
            ],
            examples: [
              "diff([1, 2, 4, 7, 0])",
              "diff([1, 2, 4, 7, 0], 0)",
              "diff(matrix([1, 2, 4, 7, 0]))",
              "diff([[1, 2], [3, 4]])",
              "diff([[1, 2], [3, 4]], 0)",
              "diff([[1, 2], [3, 4]], 1)",
              "diff([[1, 2], [3, 4]], bignumber(1))",
              "diff(matrix([[1, 2], [3, 4]]), 1)",
              "diff([[1, 2], matrix([3, 4])], 1)",
            ],
            seealso: ["subtract", "partitionSelect"],
          },
          dot: {
            name: "dot",
            category: "Matrix",
            syntax: ["dot(A, B)", "A * B"],
            description:
              "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
            examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
            seealso: ["multiply", "cross"],
          },
          getMatrixDataType: {
            name: "getMatrixDataType",
            category: "Matrix",
            syntax: ["getMatrixDataType(x)"],
            description:
              'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
            examples: [
              "getMatrixDataType([1, 2, 3])",
              "getMatrixDataType([[5 cm], [2 inch]])",
              'getMatrixDataType([1, "text"])',
              "getMatrixDataType([1, bignumber(4)])",
            ],
            seealso: ["matrix", "sparse", "typeOf"],
          },
          identity: {
            name: "identity",
            category: "Matrix",
            syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
            description:
              "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
            examples: [
              "identity(3)",
              "identity(3, 5)",
              "a = [1, 2, 3; 4, 5, 6]",
              "identity(size(a))",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          filter: {
            name: "filter",
            category: "Matrix",
            syntax: ["filter(x, test)"],
            description: "Filter items in a matrix.",
            examples: [
              "isPositive(x) = x > 0",
              "filter([6, -2, -1, 4, 3], isPositive)",
              "filter([6, -2, 0, 1, 0], x != 0)",
            ],
            seealso: ["sort", "map", "forEach"],
          },
          flatten: {
            name: "flatten",
            category: "Matrix",
            syntax: ["flatten(x)"],
            description:
              "Flatten a multi dimensional matrix into a single dimensional matrix.",
            examples: [
              "a = [1, 2, 3; 4, 5, 6]",
              "size(a)",
              "b = flatten(a)",
              "size(b)",
            ],
            seealso: ["concat", "resize", "size", "squeeze"],
          },
          forEach: {
            name: "forEach",
            category: "Matrix",
            syntax: ["forEach(x, callback)"],
            description:
              "Iterates over all elements of a matrix/array, and executes the given callback function.",
            examples: [
              "forEach([1, 2, 3], function(val) { console.log(val) })",
            ],
            seealso: ["map", "sort", "filter"],
          },
          inv: {
            name: "inv",
            category: "Matrix",
            syntax: ["inv(x)"],
            description: "Calculate the inverse of a matrix",
            examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          eigs: {
            name: "eigs",
            category: "Matrix",
            syntax: ["eigs(x)"],
            description:
              "Calculate the eigenvalues and eigenvectors of a real symmetric matrix",
            examples: ["eigs([[5, 2.3], [2.3, 1]])"],
            seealso: ["inv"],
          },
          kron: {
            name: "kron",
            category: "Matrix",
            syntax: ["kron(x, y)"],
            description:
              "Calculates the kronecker product of 2 matrices or vectors.",
            examples: [
              "kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])",
              "kron([1,1], [2,3,4])",
            ],
            seealso: ["multiply", "dot", "cross"],
          },
          matrixFromFunction: {
            name: "matrixFromFunction",
            category: "Matrix",
            syntax: [
              "math.matrixFromFunction(size, fn)",
              "math.matrixFromFunction(size, fn, format)",
              "math.matrixFromFunction(size, fn, format, datatype)",
              "math.matrixFromFunction(size, format, fn)",
              "math.matrixFromFunction(size, format, datatype, fn)",
            ],
            description:
              "Create a matrix by evaluating a generating function at each index.",
            examples: [
              "f(I) = I[1] - I[2]",
              "matrixFromFunction([3,3], f)",
              "g(I) = I[1] - I[2] == 1 ? 4 : 0",
              'matrixFromFunction([100, 100], "sparse", g)',
              "matrixFromFunction([5], random)",
            ],
            seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"],
          },
          matrixFromRows: {
            name: "matrixFromRows",
            category: "Matrix",
            syntax: [
              "math.matrixFromRows(...arr)",
              "math.matrixFromRows(row1, row2)",
              "math.matrixFromRows(row1, row2, row3)",
            ],
            description:
              "Create a dense matrix from vectors as individual rows.",
            examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"],
            seealso: [
              "matrix",
              "matrixFromColumns",
              "matrixFromFunction",
              "zeros",
            ],
          },
          matrixFromColumns: {
            name: "matrixFromColumns",
            category: "Matrix",
            syntax: [
              "math.matrixFromColumns(...arr)",
              "math.matrixFromColumns(row1, row2)",
              "math.matrixFromColumns(row1, row2, row3)",
            ],
            description:
              "Create a dense matrix from vectors as individual columns.",
            examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"],
            seealso: [
              "matrix",
              "matrixFromRows",
              "matrixFromFunction",
              "zeros",
            ],
          },
          map: {
            name: "map",
            category: "Matrix",
            syntax: ["map(x, callback)"],
            description:
              "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
            examples: ["map([1, 2, 3], square)"],
            seealso: ["filter", "forEach"],
          },
          ones: {
            name: "ones",
            category: "Matrix",
            syntax: [
              "ones(m)",
              "ones(m, n)",
              "ones(m, n, p, ...)",
              "ones([m])",
              "ones([m, n])",
              "ones([m, n, p, ...])",
            ],
            description: "Create a matrix containing ones.",
            examples: [
              "ones(3)",
              "ones(3, 5)",
              "ones([2,3]) * 4.5",
              "a = [1, 2, 3; 4, 5, 6]",
              "ones(size(a))",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          partitionSelect: {
            name: "partitionSelect",
            category: "Matrix",
            syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
            description:
              "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
            examples: [
              "partitionSelect([5, 10, 1], 2)",
              'partitionSelect(["C", "B", "A", "D"], 1)',
            ],
            seealso: ["sort"],
          },
          range: {
            name: "range",
            category: "Type",
            syntax: [
              "start:end",
              "start:step:end",
              "range(start, end)",
              "range(start, end, step)",
              "range(string)",
            ],
            description:
              "Create a range. Lower bound of the range is included, upper bound is excluded.",
            examples: [
              "1:5",
              "3:-1:-3",
              "range(3, 7)",
              "range(0, 12, 2)",
              'range("4:10")',
              "a = [1, 2, 3, 4; 5, 6, 7, 8]",
              "a[1:2, 1:2]",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          resize: {
            name: "resize",
            category: "Matrix",
            syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
            description: "Resize a matrix.",
            examples: [
              "resize([1,2,3,4,5], [3])",
              "resize([1,2,3], [5])",
              "resize([1,2,3], [5], -1)",
              "resize(2, [2, 3])",
              'resize("hello", [8], "!")',
            ],
            seealso: ["size", "subset", "squeeze", "reshape"],
          },
          reshape: {
            name: "reshape",
            category: "Matrix",
            syntax: ["reshape(x, sizes)"],
            description:
              "Reshape a multi dimensional array to fit the specified dimensions.",
            examples: [
              "reshape([1, 2, 3, 4, 5, 6], [2, 3])",
              "reshape([[1, 2], [3, 4]], [1, 4])",
              "reshape([[1, 2], [3, 4]], [4])",
            ],
            seealso: ["size", "squeeze", "resize"],
          },
          rotate: {
            name: "rotate",
            category: "Matrix",
            syntax: ["rotate(w, theta)", "rotate(w, theta, v)"],
            description:
              "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
            examples: [
              "rotate([1, 0], math.pi / 2)",
              'rotate(matrix([1, 0]), unit("35deg"))',
              'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])',
              'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))',
            ],
            seealso: ["matrix", "rotationMatrix"],
          },
          rotationMatrix: {
            name: "rotationMatrix",
            category: "Matrix",
            syntax: [
              "rotationMatrix(theta)",
              "rotationMatrix(theta, v)",
              "rotationMatrix(theta, v, format)",
            ],
            description:
              "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
            examples: [
              "rotationMatrix(pi / 2)",
              'rotationMatrix(unit("45deg"), [0, 0, 1])',
              'rotationMatrix(1, matrix([0, 0, 1]), "sparse")',
            ],
            seealso: ["cos", "sin"],
          },
          row: {
            name: "row",
            category: "Matrix",
            syntax: ["row(x, index)"],
            description: "Return a row from a matrix or array.",
            examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
            seealso: ["column", "matrixFromRows"],
          },
          size: {
            name: "size",
            category: "Matrix",
            syntax: ["size(x)"],
            description: "Calculate the size of a matrix.",
            examples: [
              "size(2.3)",
              'size("hello world")',
              "a = [1, 2; 3, 4; 5, 6]",
              "size(a)",
              "size(1:6)",
            ],
            seealso: [
              "concat",
              "count",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "squeeze",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          sort: {
            name: "sort",
            category: "Matrix",
            syntax: ["sort(x)", "sort(x, compare)"],
            description:
              'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
            examples: [
              "sort([5, 10, 1])",
              'sort(["C", "B", "A", "D"])',
              "sortByLength(a, b) = size(a)[1] - size(b)[1]",
              'sort(["Langdon", "Tom", "Sara"], sortByLength)',
              'sort(["10", "1", "2"], "natural")',
            ],
            seealso: ["map", "filter", "forEach"],
          },
          squeeze: {
            name: "squeeze",
            category: "Matrix",
            syntax: ["squeeze(x)"],
            description:
              "Remove inner and outer singleton dimensions from a matrix.",
            examples: [
              "a = zeros(3,2,1)",
              "size(squeeze(a))",
              "b = zeros(1,1,3)",
              "size(squeeze(b))",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "subset",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          subset: {
            name: "subset",
            category: "Matrix",
            syntax: [
              "value(index)",
              "value(index) = replacement",
              "subset(value, [index])",
              "subset(value, [index], replacement)",
            ],
            description:
              "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
            examples: [
              "d = [1, 2; 3, 4]",
              "e = []",
              "e[1, 1:2] = [5, 6]",
              "e[2, :] = [7, 8]",
              "f = d * e",
              "f[2, 1]",
              "f[:, 1]",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "trace",
              "transpose",
              "zeros",
            ],
          },
          trace: {
            name: "trace",
            category: "Matrix",
            syntax: ["trace(A)"],
            description:
              "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
            examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "transpose",
              "zeros",
            ],
          },
          transpose: {
            name: "transpose",
            category: "Matrix",
            syntax: ["x'", "transpose(x)"],
            description: "Transpose a matrix",
            examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "zeros",
            ],
          },
          zeros: {
            name: "zeros",
            category: "Matrix",
            syntax: [
              "zeros(m)",
              "zeros(m, n)",
              "zeros(m, n, p, ...)",
              "zeros([m])",
              "zeros([m, n])",
              "zeros([m, n, p, ...])",
            ],
            description: "Create a matrix containing zeros.",
            examples: [
              "zeros(3)",
              "zeros(3, 5)",
              "a = [1, 2, 3; 4, 5, 6]",
              "zeros(size(a))",
            ],
            seealso: [
              "concat",
              "det",
              "diag",
              "identity",
              "inv",
              "ones",
              "range",
              "size",
              "squeeze",
              "subset",
              "trace",
              "transpose",
            ],
          },
          combinations: {
            name: "combinations",
            category: "Probability",
            syntax: ["combinations(n, k)"],
            description:
              "Compute the number of combinations of n items taken k at a time",
            examples: ["combinations(7, 5)"],
            seealso: ["combinationsWithRep", "permutations", "factorial"],
          },
          combinationsWithRep: {
            name: "combinationsWithRep",
            category: "Probability",
            syntax: ["combinationsWithRep(n, k)"],
            description:
              "Compute the number of combinations of n items taken k at a time with replacements.",
            examples: ["combinationsWithRep(7, 5)"],
            seealso: ["combinations", "permutations", "factorial"],
          },
          factorial: {
            name: "factorial",
            category: "Probability",
            syntax: ["n!", "factorial(n)"],
            description: "Compute the factorial of a value",
            examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
            seealso: [
              "combinations",
              "combinationsWithRep",
              "permutations",
              "gamma",
            ],
          },
          gamma: {
            name: "gamma",
            category: "Probability",
            syntax: ["gamma(n)"],
            description:
              "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
            examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
            seealso: ["factorial"],
          },
          kldivergence: {
            name: "kldivergence",
            category: "Probability",
            syntax: ["kldivergence(x, y)"],
            description:
              "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
            examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
            seealso: [],
          },
          multinomial: {
            name: "multinomial",
            category: "Probability",
            syntax: ["multinomial(A)"],
            description:
              "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
            examples: ["multinomial([1, 2, 1])"],
            seealso: ["combinations", "factorial"],
          },
          permutations: {
            name: "permutations",
            category: "Probability",
            syntax: ["permutations(n)", "permutations(n, k)"],
            description:
              "Compute the number of permutations of n items taken k at a time",
            examples: ["permutations(5)", "permutations(5, 3)"],
            seealso: ["combinations", "combinationsWithRep", "factorial"],
          },
          pickRandom: {
            name: "pickRandom",
            category: "Probability",
            syntax: [
              "pickRandom(array)",
              "pickRandom(array, number)",
              "pickRandom(array, weights)",
              "pickRandom(array, number, weights)",
              "pickRandom(array, weights, number)",
            ],
            description: "Pick a random entry from a given array.",
            examples: [
              "pickRandom(0:10)",
              "pickRandom([1, 3, 1, 6])",
              "pickRandom([1, 3, 1, 6], 2)",
              "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])",
              "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])",
              "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)",
            ],
            seealso: ["random", "randomInt"],
          },
          random: {
            name: "random",
            category: "Probability",
            syntax: [
              "random()",
              "random(max)",
              "random(min, max)",
              "random(size)",
              "random(size, max)",
              "random(size, min, max)",
            ],
            description: "Return a random number.",
            examples: ["random()", "random(10, 20)", "random([2, 3])"],
            seealso: ["pickRandom", "randomInt"],
          },
          randomInt: {
            name: "randomInt",
            category: "Probability",
            syntax: [
              "randomInt(max)",
              "randomInt(min, max)",
              "randomInt(size)",
              "randomInt(size, max)",
              "randomInt(size, min, max)",
            ],
            description: "Return a random integer number",
            examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
            seealso: ["pickRandom", "random"],
          },
          compare: {
            name: "compare",
            category: "Relational",
            syntax: ["compare(x, y)"],
            description:
              "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
            examples: [
              "compare(2, 3)",
              "compare(3, 2)",
              "compare(2, 2)",
              "compare(5cm, 40mm)",
              "compare(2, [1, 2, 3])",
            ],
            seealso: [
              "equal",
              "unequal",
              "smaller",
              "smallerEq",
              "largerEq",
              "compareNatural",
              "compareText",
            ],
          },
          compareNatural: {
            name: "compareNatural",
            category: "Relational",
            syntax: ["compareNatural(x, y)"],
            description:
              "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
            examples: [
              "compareNatural(2, 3)",
              "compareNatural(3, 2)",
              "compareNatural(2, 2)",
              "compareNatural(5cm, 40mm)",
              'compareNatural("2", "10")',
              "compareNatural(2 + 3i, 2 + 4i)",
              "compareNatural([1, 2, 4], [1, 2, 3])",
              "compareNatural([1, 5], [1, 2, 3])",
              "compareNatural([1, 2], [1, 2])",
              "compareNatural({a: 2}, {a: 4})",
            ],
            seealso: [
              "equal",
              "unequal",
              "smaller",
              "smallerEq",
              "largerEq",
              "compare",
              "compareText",
            ],
          },
          compareText: {
            name: "compareText",
            category: "Relational",
            syntax: ["compareText(x, y)"],
            description:
              "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
            examples: [
              'compareText("B", "A")',
              'compareText("A", "B")',
              'compareText("A", "A")',
              'compareText("2", "10")',
              'compare("2", "10")',
              "compare(2, 10)",
              'compareNatural("2", "10")',
              'compareText("B", ["A", "B", "C"])',
            ],
            seealso: ["compare", "compareNatural"],
          },
          deepEqual: {
            name: "deepEqual",
            category: "Relational",
            syntax: ["deepEqual(x, y)"],
            description:
              "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
            examples: [
              "deepEqual([1,3,4], [1,3,4])",
              "deepEqual([1,3,4], [1,3])",
            ],
            seealso: [
              "equal",
              "unequal",
              "smaller",
              "larger",
              "smallerEq",
              "largerEq",
              "compare",
            ],
          },
          equal: {
            name: "equal",
            category: "Relational",
            syntax: ["x == y", "equal(x, y)"],
            description:
              "Check equality of two values. Returns true if the values are equal, and false if not.",
            examples: [
              "2+2 == 3",
              "2+2 == 4",
              "a = 3.2",
              "b = 6-2.8",
              "a == b",
              "50cm == 0.5m",
            ],
            seealso: [
              "unequal",
              "smaller",
              "larger",
              "smallerEq",
              "largerEq",
              "compare",
              "deepEqual",
              "equalText",
            ],
          },
          equalText: {
            name: "equalText",
            category: "Relational",
            syntax: ["equalText(x, y)"],
            description:
              "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
            examples: [
              'equalText("Hello", "Hello")',
              'equalText("a", "A")',
              'equal("2e3", "2000")',
              'equalText("2e3", "2000")',
              'equalText("B", ["A", "B", "C"])',
            ],
            seealso: ["compare", "compareNatural", "compareText", "equal"],
          },
          larger: {
            name: "larger",
            category: "Relational",
            syntax: ["x > y", "larger(x, y)"],
            description:
              "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
            examples: [
              "2 > 3",
              "5 > 2*2",
              "a = 3.3",
              "b = 6-2.8",
              "(a > b)",
              "(b < a)",
              "5 cm > 2 inch",
            ],
            seealso: [
              "equal",
              "unequal",
              "smaller",
              "smallerEq",
              "largerEq",
              "compare",
            ],
          },
          largerEq: {
            name: "largerEq",
            category: "Relational",
            syntax: ["x >= y", "largerEq(x, y)"],
            description:
              "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
            examples: [
              "2 >= 1+1",
              "2 > 1+1",
              "a = 3.2",
              "b = 6-2.8",
              "(a >= b)",
            ],
            seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"],
          },
          smaller: {
            name: "smaller",
            category: "Relational",
            syntax: ["x < y", "smaller(x, y)"],
            description:
              "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
            examples: [
              "2 < 3",
              "5 < 2*2",
              "a = 3.3",
              "b = 6-2.8",
              "(a < b)",
              "5 cm < 2 inch",
            ],
            seealso: [
              "equal",
              "unequal",
              "larger",
              "smallerEq",
              "largerEq",
              "compare",
            ],
          },
          smallerEq: {
            name: "smallerEq",
            category: "Relational",
            syntax: ["x <= y", "smallerEq(x, y)"],
            description:
              "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
            examples: [
              "2 <= 1+1",
              "2 < 1+1",
              "a = 3.2",
              "b = 6-2.8",
              "(a <= b)",
            ],
            seealso: [
              "equal",
              "unequal",
              "larger",
              "smaller",
              "largerEq",
              "compare",
            ],
          },
          unequal: {
            name: "unequal",
            category: "Relational",
            syntax: ["x != y", "unequal(x, y)"],
            description:
              "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
            examples: [
              "2+2 != 3",
              "2+2 != 4",
              "a = 3.2",
              "b = 6-2.8",
              "a != b",
              "50cm != 0.5m",
              "5 cm != 2 inch",
            ],
            seealso: [
              "equal",
              "smaller",
              "larger",
              "smallerEq",
              "largerEq",
              "compare",
              "deepEqual",
            ],
          },
          setCartesian: {
            name: "setCartesian",
            category: "Set",
            syntax: ["setCartesian(set1, set2)"],
            description:
              "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
            examples: ["setCartesian([1, 2], [3, 4])"],
            seealso: [
              "setUnion",
              "setIntersect",
              "setDifference",
              "setPowerset",
            ],
          },
          setDifference: {
            name: "setDifference",
            category: "Set",
            syntax: ["setDifference(set1, set2)"],
            description:
              "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
            examples: [
              "setDifference([1, 2, 3, 4], [3, 4, 5, 6])",
              "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])",
            ],
            seealso: ["setUnion", "setIntersect", "setSymDifference"],
          },
          setDistinct: {
            name: "setDistinct",
            category: "Set",
            syntax: ["setDistinct(set)"],
            description:
              "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
            examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
            seealso: ["setMultiplicity"],
          },
          setIntersect: {
            name: "setIntersect",
            category: "Set",
            syntax: ["setIntersect(set1, set2)"],
            description:
              "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
            examples: [
              "setIntersect([1, 2, 3, 4], [3, 4, 5, 6])",
              "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])",
            ],
            seealso: ["setUnion", "setDifference"],
          },
          setIsSubset: {
            name: "setIsSubset",
            category: "Set",
            syntax: ["setIsSubset(set1, set2)"],
            description:
              "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
            examples: [
              "setIsSubset([1, 2], [3, 4, 5, 6])",
              "setIsSubset([3, 4], [3, 4, 5, 6])",
            ],
            seealso: ["setUnion", "setIntersect", "setDifference"],
          },
          setMultiplicity: {
            name: "setMultiplicity",
            category: "Set",
            syntax: ["setMultiplicity(element, set)"],
            description:
              "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
            examples: [
              "setMultiplicity(1, [1, 2, 2, 4])",
              "setMultiplicity(2, [1, 2, 2, 4])",
            ],
            seealso: ["setDistinct", "setSize"],
          },
          setPowerset: {
            name: "setPowerset",
            category: "Set",
            syntax: ["setPowerset(set)"],
            description:
              "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
            examples: ["setPowerset([1, 2, 3])"],
            seealso: ["setCartesian"],
          },
          setSize: io,
          setSymDifference: oo,
          setUnion: ao,
          erf: no,
          mad: ro,
          max: to,
          mean: eo,
          median: Ka,
          min: Ya,
          mode: Za,
          prod: Qa,
          quantileSeq: Ga,
          std: Xa,
          sum: Va,
          variance: {
            name: "variance",
            category: "Statistics",
            syntax: [
              "variance(a, b, c, ...)",
              "variance(A)",
              "variance(A, normalization)",
            ],
            description:
              'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
            examples: [
              "variance(2, 4, 6)",
              "variance([2, 4, 6, 8])",
              'variance([2, 4, 6, 8], "uncorrected")',
              'variance([2, 4, 6, 8], "biased")',
              "variance([1, 2, 3; 4, 5, 6])",
            ],
            seealso: [
              "max",
              "mean",
              "min",
              "median",
              "min",
              "prod",
              "std",
              "sum",
            ],
          },
          acos: Ja,
          acosh: Ha,
          acot: Wa,
          acoth: Ua,
          acsc: $a,
          acsch: La,
          asec: _a,
          asech: za,
          asin: Da,
          asinh: Ba,
          atan: Ra,
          atanh: Ia,
          atan2: Fa,
          cos: Pa,
          cosh: qa,
          cot: ja,
          coth: ka,
          csc: Ma,
          csch: Ta,
          sec: Ca,
          sech: Oa,
          sin: {
            name: "sin",
            category: "Trigonometry",
            syntax: ["sin(x)"],
            description: "Compute the sine of x in radians.",
            examples: [
              "sin(2)",
              "sin(pi / 4) ^ 2",
              "sin(90 deg)",
              "sin(30 deg)",
              "sin(0.2)^2 + cos(0.2)^2",
            ],
            seealso: ["asin", "cos", "tan"],
          },
          sinh: Aa,
          tan: Ea,
          tanh: Sa,
          to: Na,
          clone: wa,
          format: ya,
          bin: va,
          oct: xa,
          hex: ba,
          isNaN: ga,
          isInteger: da,
          isNegative: ha,
          isNumeric: fa,
          hasNumericValue: ma,
          isPositive: pa,
          isPrime: la,
          isZero: ca,
          typeOf: ua,
          numeric: {
            name: "numeric",
            category: "Utils",
            syntax: ["numeric(x)"],
            description:
              "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
            examples: [
              'numeric("4")',
              'numeric("4", "number")',
              'numeric("4", "BigNumber")',
              'numeric("4", "Fraction)',
              'numeric(4, "Fraction")',
              'numeric(fraction(2, 5), "number)',
            ],
            seealso: ["number", "fraction", "bignumber", "string", "format"],
          },
        },
        du = "help",
        gu,
        yu = ge(du, ["typed", "mathWithTransform", "Help"], (e) => {
          var { typed: t, mathWithTransform: r, Help: n } = e;
          return t(du, {
            any: function e(t) {
              var a,
                o = t;
              if ("string" != typeof t)
                for (a in r)
                  if (ie(r, a) && t === r[a]) {
                    o = a;
                    break;
                  }
              var i = hn(hu, o);
              if (!i) {
                var s = "function" == typeof o ? o.name : o;
                throw new Error('No documentation found on "' + s + '"');
              }
              return new n(i);
            },
          });
        }),
        vu = "chain",
        xu,
        bu = ge(vu, ["typed", "Chain"], (e) => {
          var { typed: t, Chain: r } = e;
          return t(vu, {
            "": function e() {
              return new r();
            },
            any: function e(t) {
              return new r(t);
            },
          });
        }),
        wu,
        Nu,
        Su = ge(
          "simplifyUtil",
          ["FunctionNode", "OperatorNode", "SymbolNode"],
          (e) => {
            var { FunctionNode: t, OperatorNode: r, SymbolNode: n } = e,
              a = { add: !0, multiply: !0 },
              o = { add: !0, multiply: !0 };
            function i(e, t) {
              if (!W(e)) return !0;
              var r = e.fn.toString();
              return t && ie(t, r) && ie(t[r], "commutative")
                ? t[r].commutative
                : a[r] || !1;
            }
            function s(e, t) {
              if (!W(e)) return !1;
              var r = e.fn.toString();
              return t && ie(t, r) && ie(t[r], "associative")
                ? t[r].associative
                : o[r] || !1;
            }
            function u(e) {
              if (!e.args || 0 === e.args.length) return e;
              e.args = c(e);
              for (var t = 0; t < e.args.length; t++) u(e.args[t]);
            }
            function c(e) {
              var t,
                r = [],
                n = function e(n) {
                  for (var a = 0; a < n.args.length; a++) {
                    var o = n.args[a];
                    W(o) && t === o.op ? e(o) : r.push(o);
                  }
                };
              return s(e) ? ((t = e.op), n(e), r) : e.args;
            }
            function l(e) {
              if (e.args && 0 !== e.args.length) {
                for (var t = f(e), r = e.args.length, n = 0; n < r; n++)
                  l(e.args[n]);
                if (r > 2 && s(e)) {
                  for (var a = e.args.pop(); e.args.length > 0; )
                    a = t([e.args.pop(), a]);
                  e.args = a.args;
                }
              }
            }
            function p(e) {
              if (e.args && 0 !== e.args.length) {
                for (var t = f(e), r = e.args.length, n = 0; n < r; n++)
                  p(e.args[n]);
                if (r > 2 && s(e)) {
                  for (var a = e.args.shift(); e.args.length > 0; )
                    a = t([a, e.args.shift()]);
                  e.args = a.args;
                }
              }
            }
            function f(e) {
              return W(e)
                ? function (t) {
                    try {
                      return new r(e.op, e.fn, t, e.implicit);
                    } catch (e) {
                      return console.error(e), [];
                    }
                  }
                : function (r) {
                    return new t(new n(e.name), r);
                  };
            }
            return {
              createMakeNodeFunction: f,
              isCommutative: i,
              isAssociative: s,
              flatten: u,
              allChildren: c,
              unflattenr: l,
              unflattenl: p,
            };
          }
        ),
        Eu,
        Au,
        Ou = ge(
          "simplifyCore",
          [
            "equal",
            "isZero",
            "add",
            "subtract",
            "multiply",
            "divide",
            "pow",
            "ConstantNode",
            "OperatorNode",
            "FunctionNode",
            "ParenthesisNode",
          ],
          (e) => {
            var {
                equal: t,
                isZero: r,
                add: n,
                subtract: a,
                multiply: o,
                divide: i,
                pow: s,
                ConstantNode: u,
                OperatorNode: c,
                FunctionNode: l,
                ParenthesisNode: p,
              } = e,
              f = new u(0),
              m = new u(1);
            function h(e) {
              if (W(e) && e.isUnary()) {
                var d = h(e.args[0]);
                if ("+" === e.op) return d;
                if ("-" === e.op) {
                  if (W(d)) {
                    if (d.isUnary() && "-" === d.op) return d.args[0];
                    if (d.isBinary() && "subtract" === d.fn)
                      return new c("-", "subtract", [d.args[1], d.args[0]]);
                  }
                  return new c(e.op, e.fn, [d]);
                }
              } else if (W(e) && e.isBinary()) {
                var g = h(e.args[0]),
                  y = h(e.args[1]);
                if ("+" === e.op) {
                  if (D(g)) {
                    if (r(g.value)) return y;
                    if (D(y)) return new u(n(g.value, y.value));
                  }
                  return D(y) && r(y.value)
                    ? g
                    : W(y) && y.isUnary() && "-" === y.op
                    ? new c("-", "subtract", [g, y.args[0]])
                    : new c(e.op, e.fn, y ? [g, y] : [g]);
                }
                if ("-" === e.op) {
                  if (D(g) && y) {
                    if (D(y)) return new u(a(g.value, y.value));
                    if (r(g.value)) return new c("-", "unaryMinus", [y]);
                  }
                  if ("subtract" === e.fn)
                    return D(y) && r(y.value)
                      ? g
                      : W(y) && y.isUnary() && "-" === y.op
                      ? h(new c("+", "add", [g, y.args[0]]))
                      : new c(e.op, e.fn, [g, y]);
                } else {
                  if ("*" === e.op) {
                    if (D(g)) {
                      if (r(g.value)) return f;
                      if (t(g.value, 1)) return y;
                      if (D(y)) return new u(o(g.value, y.value));
                    }
                    if (D(y)) {
                      if (r(y.value)) return f;
                      if (t(y.value, 1)) return g;
                      if (W(g) && g.isBinary() && g.op === e.op) {
                        var v = g.args[0];
                        if (D(v)) {
                          var x = new u(o(v.value, y.value));
                          return new c(e.op, e.fn, [x, g.args[1]], e.implicit);
                        }
                      }
                      return new c(e.op, e.fn, [y, g], e.implicit);
                    }
                    return new c(e.op, e.fn, [g, y], e.implicit);
                  }
                  if ("/" === e.op) {
                    if (D(g)) {
                      if (r(g.value)) return f;
                      if (
                        D(y) &&
                        (t(y.value, 1) || t(y.value, 2) || t(y.value, 4))
                      )
                        return new u(i(g.value, y.value));
                    }
                    return new c(e.op, e.fn, [g, y]);
                  }
                  if ("^" === e.op) {
                    if (D(y)) {
                      if (r(y.value)) return m;
                      if (t(y.value, 1)) return g;
                      if (D(g)) return new u(s(g.value, y.value));
                      if (W(g) && g.isBinary() && "^" === g.op) {
                        var b = g.args[1];
                        if (D(b))
                          return new c(e.op, e.fn, [
                            g.args[0],
                            new u(o(b.value, y.value)),
                          ]);
                      }
                    }
                    return new c(e.op, e.fn, [g, y]);
                  }
                }
              } else {
                if (H(e)) {
                  var w = h(e.content);
                  return H(w) || V(w) || D(w) ? w : new p(w);
                }
                if (_(e)) {
                  var N = e.args.map(h).map(function (e) {
                    return H(e) ? e.content : e;
                  });
                  return new l(h(e.fn), N);
                }
              }
              return e;
            }
            return h;
          }
        ),
        Cu,
        Tu,
        Mu = ge(
          "simplifyConstant",
          [
            "typed",
            "config",
            "mathWithTransform",
            "?fraction",
            "?bignumber",
            "ConstantNode",
            "OperatorNode",
            "FunctionNode",
            "SymbolNode",
          ],
          (e) => {
            var {
                typed: t,
                config: r,
                mathWithTransform: n,
                fraction: a,
                bignumber: o,
                ConstantNode: i,
                OperatorNode: s,
                FunctionNode: u,
                SymbolNode: c,
              } = e,
              {
                isCommutative: l,
                isAssociative: p,
                allChildren: f,
                createMakeNodeFunction: m,
              } = Su({ FunctionNode: u, OperatorNode: s, SymbolNode: c });
            function d(e, t) {
              var r = S(e, t);
              return $(r) ? r : y(r);
            }
            function g(e, t, r) {
              try {
                return x(n[e].apply(null, t), r);
              } catch (a) {
                return (
                  (t = t.map(function (e) {
                    return h(e) ? e.valueOf() : e;
                  })),
                  x(n[e].apply(null, t), r)
                );
              }
            }
            var y = t({
              Fraction: w,
              number: function e(t) {
                return t < 0 ? b(new i(-t)) : new i(t);
              },
              BigNumber: function e(t) {
                return t < 0 ? b(new i(-t)) : new i(t);
              },
              Complex: function e(t) {
                throw new Error("Cannot convert Complex number to Node");
              },
            });
            function v(e, t) {
              var r;
              if (t && !1 !== t.exactFractions && isFinite(e) && a) {
                var n = a(e),
                  o =
                    t && "number" == typeof t.fractionsLimit
                      ? t.fractionsLimit
                      : 1 / 0;
                if (n.valueOf() === e && n.n < o && n.d < o) return n;
              }
              return e;
            }
            var x = t({
              "string, Object": function e(t, n) {
                return "BigNumber" === r.number
                  ? (void 0 === o && un(), o(t))
                  : "Fraction" === r.number
                  ? (void 0 === a && cn(), a(t))
                  : v(parseFloat(t), n);
                var i;
              },
              "Fraction, Object": function e(t, r) {
                return t;
              },
              "BigNumber, Object": function e(t, r) {
                return t;
              },
              "number, Object": function e(t, r) {
                return v(t, r);
              },
              "Complex, Object": function e(t, r) {
                return 0 !== t.im ? t : v(t.re, r);
              },
            });
            function b(e) {
              return new s("-", "unaryMinus", [e]);
            }
            function w(e) {
              var t,
                r = e.s * e.n;
              return (
                (t = r < 0 ? new s("-", "unaryMinus", [new i(-r)]) : new i(r)),
                1 === e.d ? t : new s("/", "divide", [t, new i(e.d)])
              );
            }
            function N(e, t, r, n) {
              return t.reduce(function (t, a) {
                if ($(t) || $(a)) $(t) ? $(a) || (a = y(a)) : (t = y(t));
                else {
                  try {
                    return g(e, [t, a], n);
                  } catch (e) {}
                  (t = y(t)), (a = y(a));
                }
                return r([t, a]);
              });
            }
            function S(e, t) {
              switch (e.type) {
                case "SymbolNode":
                  return e;
                case "ConstantNode":
                  return "number" != typeof e.value && isNaN(e.value)
                    ? e
                    : x(e.value, t);
                case "FunctionNode":
                  if (n[e.name] && n[e.name].rawArgs) return e;
                  var r;
                  if (-1 === ["add", "multiply"].indexOf(e.name)) {
                    var a = e.args.map((e) => S(e, t));
                    if (!a.some($))
                      try {
                        return g(e.name, a, t);
                      } catch (e) {}
                    return (
                      (a = a.map(function (e) {
                        return $(e) ? e : y(e);
                      })),
                      new u(e.name, a)
                    );
                  }
                case "OperatorNode":
                  var o = e.fn.toString(),
                    i,
                    s,
                    c = m(e);
                  if (W(e) && e.isUnary())
                    s = $((i = [S(e.args[0], t)])[0]) ? c(i) : g(o, i, t);
                  else if (p(e))
                    if (((i = (i = f(e)).map((e) => S(e, t))), l(o))) {
                      for (var h = [], d = [], v = 0; v < i.length; v++)
                        $(i[v]) ? d.push(i[v]) : h.push(i[v]);
                      h.length > 1
                        ? ((s = N(o, h, c, t)),
                          d.unshift(s),
                          (s = N(o, d, c, t)))
                        : (s = N(o, i, c, t));
                    } else s = N(o, i, c, t);
                  else s = N(o, (i = e.args.map((e) => S(e, t))), c, t);
                  return s;
                case "ParenthesisNode":
                  return S(e.content, t);
                case "AccessorNode":
                case "ArrayNode":
                case "AssignmentNode":
                case "BlockNode":
                case "FunctionAssignmentNode":
                case "IndexNode":
                case "ObjectNode":
                case "RangeNode":
                case "ConditionalNode":
                default:
                  throw new Error(
                    "Unimplemented node type in simplifyConstant: ".concat(
                      e.type
                    )
                  );
              }
            }
            return d;
          }
        ),
        ku,
        ju,
        qu = ge(
          "resolve",
          ["parse", "FunctionNode", "OperatorNode", "ParenthesisNode"],
          (e) => {
            var {
              parse: t,
              FunctionNode: r,
              OperatorNode: n,
              ParenthesisNode: a,
            } = e;
            function o(e, i) {
              if (!i) return e;
              if ((Tn(i) || (i = On(i)), V(e))) {
                var s = i.get(e.name);
                if ($(s)) return o(s, i);
                if ("number" == typeof s) return t(String(s));
              } else {
                if (W(e)) {
                  var u = e.args.map(function (e) {
                    return o(e, i);
                  });
                  return new n(e.op, e.fn, u, e.implicit);
                }
                if (H(e)) return new a(o(e.content, i));
                if (_(e)) {
                  var c = e.args.map(function (e) {
                    return o(e, i);
                  });
                  return new r(e.name, c);
                }
              }
              return e;
            }
            return o;
          }
        ),
        Pu,
        Fu,
        Iu = ge(
          "simplify",
          [
            "config",
            "typed",
            "parse",
            "add",
            "subtract",
            "multiply",
            "divide",
            "pow",
            "isZero",
            "equal",
            "?fraction",
            "?bignumber",
            "mathWithTransform",
            "ConstantNode",
            "FunctionNode",
            "OperatorNode",
            "ParenthesisNode",
            "SymbolNode",
          ],
          (e) => {
            var {
                config: t,
                typed: r,
                parse: n,
                add: a,
                subtract: o,
                multiply: i,
                divide: s,
                pow: u,
                isZero: c,
                equal: l,
                fraction: p,
                bignumber: f,
                mathWithTransform: m,
                ConstantNode: h,
                FunctionNode: d,
                OperatorNode: g,
                ParenthesisNode: y,
                SymbolNode: v,
              } = e,
              x = Mu({
                typed: r,
                config: t,
                mathWithTransform: m,
                fraction: p,
                bignumber: f,
                ConstantNode: h,
                OperatorNode: g,
                FunctionNode: d,
                SymbolNode: v,
              }),
              b = Ou({
                equal: l,
                isZero: c,
                add: a,
                subtract: o,
                multiply: i,
                divide: s,
                pow: u,
                ConstantNode: h,
                OperatorNode: g,
                FunctionNode: d,
                ParenthesisNode: y,
              }),
              w = qu({
                parse: n,
                FunctionNode: d,
                OperatorNode: g,
                ParenthesisNode: y,
              }),
              {
                isCommutative: N,
                isAssociative: S,
                flatten: E,
                unflattenr: A,
                unflattenl: O,
                createMakeNodeFunction: C,
              } = Su({ FunctionNode: d, OperatorNode: g, SymbolNode: v }),
              T = r("simplify", {
                string: function e(t) {
                  return this(n(t), this.rules, An(), {});
                },
                "string, Map | Object": function e(t, r) {
                  return this(n(t), this.rules, r, {});
                },
                "string, Map | Object, Object": function e(t, r, a) {
                  return this(n(t), this.rules, r, a);
                },
                "string, Array": function e(t, r) {
                  return this(n(t), r, An(), {});
                },
                "string, Array, Map | Object": function e(t, r, a) {
                  return this(n(t), r, a, {});
                },
                "string, Array, Map | Object, Object": function e(t, r, a, o) {
                  return this(n(t), r, a, o);
                },
                "Node, Map | Object": function e(t, r) {
                  return this(t, this.rules, r, {});
                },
                "Node, Map | Object, Object": function e(t, r, n) {
                  return this(t, this.rules, r, n);
                },
                Node: function e(t) {
                  return this(t, this.rules, An(), {});
                },
                "Node, Array": function e(t, r) {
                  return this(t, r, An(), {});
                },
                "Node, Array, Map | Object": function e(t, r, n) {
                  return this(t, r, n, {});
                },
                "Node, Array, Object, Object": function e(t, r, n, a) {
                  return this(t, r, On(n), a);
                },
                "Node, Array, Map, Object": function e(t, r, n, a) {
                  r = j(r);
                  for (
                    var o = w(t, n),
                      i = {},
                      s = (o = M(o)).toString({ parenthesis: "all" });
                    !i[s];

                  ) {
                    (i[s] = !0), (q = 0);
                    for (var u = 0; u < r.length; u++)
                      "function" == typeof r[u]
                        ? (o = r[u](o, a))
                        : (E(o), (o = F(o, r[u]))),
                        O(o);
                    s = o.toString({ parenthesis: "all" });
                  }
                  return o;
                },
              });
            function M(e) {
              return e.transform(function (e, t, r) {
                return H(e) ? M(e.content) : e;
              });
            }
            (T.simplifyCore = b), (T.resolve = w);
            var k = {
              true: !0,
              false: !0,
              e: !0,
              i: !0,
              Infinity: !0,
              LN2: !0,
              LN10: !0,
              LOG2E: !0,
              LOG10E: !0,
              NaN: !0,
              phi: !0,
              pi: !0,
              SQRT1_2: !0,
              SQRT2: !0,
              tau: !0,
            };
            function j(e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var a = e[r],
                  o = void 0,
                  i = typeof a;
                switch (i) {
                  case "string":
                    var s = a.split("->");
                    if (2 !== s.length)
                      throw SyntaxError("Could not parse rule: " + a);
                    a = { l: s[0], r: s[1] };
                  case "object":
                    if (
                      ((o = { l: M(n(a.l)), r: M(n(a.r)) }),
                      a.context && (o.evaluate = a.context),
                      a.evaluate && (o.evaluate = n(a.evaluate)),
                      S(o.l))
                    ) {
                      var u = C(o.l),
                        c = P();
                      (o.expanded = {}),
                        (o.expanded.l = u([o.l.clone(), c])),
                        E(o.expanded.l),
                        A(o.expanded.l),
                        (o.expanded.r = u([o.r, c]));
                    }
                    break;
                  case "function":
                    o = a;
                    break;
                  default:
                    throw TypeError("Unsupported type of rule: " + i);
                }
                t.push(o);
              }
              return t;
            }
            T.rules = [
              b,
              { l: "log(e)", r: "1" },
              { l: "n-n1", r: "n+-n1" },
              { l: "-(c*v)", r: "(-c) * v" },
              { l: "-v", r: "(-1) * v" },
              { l: "n/n1^n2", r: "n*n1^-n2" },
              { l: "n/n1", r: "n*n1^-1" },
              { l: "(n ^ n1) ^ n2", r: "n ^ (n1 * n2)" },
              { l: "n*n", r: "n^2" },
              { l: "n * n^n1", r: "n^(n1+1)" },
              { l: "n^n1 * n^n2", r: "n^(n1+n2)" },
              { l: "n+n", r: "2*n" },
              { l: "n+-n", r: "0" },
              { l: "n1*n2 + n2", r: "(n1+1)*n2" },
              { l: "n1*n3 + n2*n3", r: "(n1+n2)*n3" },
              { l: "n1 + -1 * (n2 + n3)", r: "n1 + -1 * n2 + -1 * n3" },
              x,
              { l: "(-n)*n1", r: "-(n*n1)" },
              { l: "c+v", r: "v+c", context: { add: { commutative: !1 } } },
              {
                l: "v*c",
                r: "c*v",
                context: { multiply: { commutative: !1 } },
              },
              { l: "n+-n1", r: "n-n1" },
              { l: "n*(n1^-1)", r: "n/n1" },
              { l: "n*n1^-n2", r: "n/n1^n2" },
              { l: "n1^-1", r: "1/n1" },
              { l: "n*(n1/n2)", r: "(n*n1)/n2" },
              { l: "n-(n1+n2)", r: "n-n1-n2" },
              { l: "1*n", r: "n" },
              { l: "n1/(n2/n3)", r: "(n1*n3)/n2" },
            ];
            var q = 0;
            function P() {
              return new v("_p" + q++);
            }
            var F = r("applyRule", {
              "Node, Object": function e(t, r) {
                var n = t;
                if (n instanceof g || n instanceof d) {
                  if (n.args)
                    for (var a = 0; a < n.args.length; a++)
                      n.args[a] = F(n.args[a], r);
                } else
                  n instanceof y && n.content && (n.content = F(n.content, r));
                var o = r.r,
                  i = _(r.l, n)[0];
                if (
                  (!i &&
                    r.expanded &&
                    ((o = r.expanded.r), (i = _(r.expanded.l, n)[0])),
                  i)
                ) {
                  var s = n.implicit;
                  (n = o.clone()),
                    s && "implicit" in o && (n.implicit = !0),
                    (n = n.transform(function (e) {
                      return e.isSymbolNode && ie(i.placeholders, e.name)
                        ? i.placeholders[e.name].clone()
                        : e;
                    }));
                }
                return n;
              },
            });
            function I(e, t) {
              var r = [],
                n,
                a,
                o = C(e);
              if (N(e, t))
                for (var i = 0; i < e.args.length; i++)
                  (a = e.args.slice(0)).splice(i, 1),
                    (n = 1 === a.length ? a[0] : o(a)),
                    r.push(o([e.args[i], n]));
              else
                (n = 1 === (a = e.args.slice(1)).length ? a[0] : o(a)),
                  r.push(o([e.args[0], n]));
              return r;
            }
            function R(e, t) {
              var r = { placeholders: {} };
              if (!e.placeholders && !t.placeholders) return r;
              if (!e.placeholders) return t;
              if (!t.placeholders) return e;
              for (var n in e.placeholders)
                if (
                  ie(e.placeholders, n) &&
                  ((r.placeholders[n] = e.placeholders[n]),
                  ie(t.placeholders, n) &&
                    !L(e.placeholders[n], t.placeholders[n]))
                )
                  return null;
              for (var a in t.placeholders)
                ie(t.placeholders, a) &&
                  (r.placeholders[a] = t.placeholders[a]);
              return r;
            }
            function B(e, t) {
              var r = [],
                n;
              if (0 === e.length || 0 === t.length) return r;
              for (var a = 0; a < e.length; a++)
                for (var o = 0; o < t.length; o++)
                  (n = R(e[a], t[o])) && r.push(n);
              return r;
            }
            function z(e) {
              if (0 === e.length) return e;
              for (
                var t = e.reduce(B), r = [], n = {}, a = 0;
                a < t.length;
                a++
              ) {
                var o = JSON.stringify(t[a]);
                n[o] || ((n[o] = !0), r.push(t[a]));
              }
              return r;
            }
            function _(e, t, r) {
              var n = [{ placeholders: {} }];
              if (
                (e instanceof g && t instanceof g) ||
                (e instanceof d && t instanceof d)
              ) {
                if (e instanceof g) {
                  if (e.op !== t.op || e.fn !== t.fn) return [];
                } else if (e instanceof d && e.name !== t.name) return [];
                if (
                  !(
                    (1 === t.args.length && 1 === e.args.length) ||
                    (!S(t) && t.args.length === e.args.length) ||
                    r
                  )
                ) {
                  if (t.args.length >= 2 && 2 === e.args.length) {
                    for (
                      var a = I(t, e.context), o = [], i = 0;
                      i < a.length;
                      i++
                    ) {
                      var s = _(e, a[i], !0);
                      o = o.concat(s);
                    }
                    return o;
                  }
                  if (e.args.length > 2)
                    throw Error(
                      "Unexpected non-binary associative function: " +
                        e.toString()
                    );
                  return [];
                }
                for (var u = [], c = 0; c < e.args.length; c++) {
                  var p = _(e.args[c], t.args[c]);
                  if (0 === p.length) return [];
                  u.push(p);
                }
                n = z(u);
              } else if (e instanceof v) {
                if (0 === e.name.length)
                  throw new Error("Symbol in rule has 0 length...!?");
                if (k[e.name]) {
                  if (e.name !== t.name) return [];
                } else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2))
                  n[0].placeholders[e.name] = t;
                else if ("v" === e.name[0]) {
                  if (D(t)) return [];
                  n[0].placeholders[e.name] = t;
                } else {
                  if ("c" !== e.name[0])
                    throw new Error("Invalid symbol in rule: " + e.name);
                  if (!(t instanceof h)) return [];
                  n[0].placeholders[e.name] = t;
                }
              } else {
                if (!(e instanceof h)) return [];
                if (!l(e.value, t.value)) return [];
              }
              return n;
            }
            function L(e, t) {
              if (e instanceof h && t instanceof h) {
                if (!l(e.value, t.value)) return !1;
              } else if (e instanceof v && t instanceof v) {
                if (e.name !== t.name) return !1;
              } else {
                if (
                  !(
                    (e instanceof g && t instanceof g) ||
                    (e instanceof d && t instanceof d)
                  )
                )
                  return !1;
                if (e instanceof g) {
                  if (e.op !== t.op || e.fn !== t.fn) return !1;
                } else if (e instanceof d && e.name !== t.name) return !1;
                if (e.args.length !== t.args.length) return !1;
                for (var r = 0; r < e.args.length; r++)
                  if (!L(e.args[r], t.args[r])) return !1;
              }
              return !0;
            }
            return T;
          }
        ),
        Ru,
        Bu,
        Du = ge(
          "derivative",
          [
            "typed",
            "config",
            "parse",
            "simplify",
            "equal",
            "isZero",
            "numeric",
            "ConstantNode",
            "FunctionNode",
            "OperatorNode",
            "ParenthesisNode",
            "SymbolNode",
          ],
          (e) => {
            var {
                typed: t,
                config: r,
                parse: n,
                simplify: a,
                equal: o,
                isZero: i,
                numeric: s,
                ConstantNode: u,
                FunctionNode: c,
                OperatorNode: l,
                ParenthesisNode: p,
                SymbolNode: f,
              } = e,
              m = t("derivative", {
                "Node, SymbolNode, Object": function e(t, r, n) {
                  var o = {};
                  d(o, t, r.name);
                  var i = g(t, o);
                  return n.simplify ? a(i) : i;
                },
                "Node, SymbolNode": function e(t, r) {
                  return this(t, r, { simplify: !0 });
                },
                "string, SymbolNode": function e(t, r) {
                  return this(n(t), r);
                },
                "string, SymbolNode, Object": function e(t, r, a) {
                  return this(n(t), r, a);
                },
                "string, string": function e(t, r) {
                  return this(n(t), n(r));
                },
                "string, string, Object": function e(t, r, a) {
                  return this(n(t), n(r), a);
                },
                "Node, string": function e(t, r) {
                  return this(t, n(r));
                },
                "Node, string, Object": function e(t, r, a) {
                  return this(t, n(r), a);
                },
              });
            (m._simplify = !0),
              (m.toTex = function (e) {
                return h.apply(null, e.args);
              });
            var h = t("_derivTex", {
                "Node, SymbolNode": function e(t, r) {
                  return D(t) && "string" === G(t.value)
                    ? h(n(t.value).toString(), r.toString(), 1)
                    : h(t.toString(), r.toString(), 1);
                },
                "Node, ConstantNode": function e(t, r) {
                  if ("string" === G(r.value)) return h(t, n(r.value));
                  throw new Error(
                    "The second parameter to 'derivative' is a non-string constant"
                  );
                },
                "Node, SymbolNode, ConstantNode": function e(t, r, n) {
                  return h(t.toString(), r.name, n.value);
                },
                "string, string, number": function e(t, r, n) {
                  var a;
                  return (
                    (a =
                      1 === n
                        ? "{d\\over d" + r + "}"
                        : "{d^{" + n + "}\\over d" + r + "^{" + n + "}}") +
                    "\\left[".concat(t, "\\right]")
                  );
                },
              }),
              d = t("constTag", {
                "Object, ConstantNode, string": function e(t, r) {
                  return (t[r] = !0), !0;
                },
                "Object, SymbolNode, string": function e(t, r, n) {
                  return r.name !== n && ((t[r] = !0), !0);
                },
                "Object, ParenthesisNode, string": function e(t, r, n) {
                  return d(t, r.content, n);
                },
                "Object, FunctionAssignmentNode, string": function e(t, r, n) {
                  return -1 === r.params.indexOf(n)
                    ? ((t[r] = !0), !0)
                    : d(t, r.expr, n);
                },
                "Object, FunctionNode | OperatorNode, string": function e(
                  t,
                  r,
                  n
                ) {
                  if (r.args.length > 0) {
                    for (
                      var a = d(t, r.args[0], n), o = 1;
                      o < r.args.length;
                      ++o
                    )
                      a = d(t, r.args[o], n) && a;
                    if (a) return (t[r] = !0), !0;
                  }
                  return !1;
                },
              }),
              g = t("_derivative", {
                "ConstantNode, Object": function e(t) {
                  return v(0);
                },
                "SymbolNode, Object": function e(t, r) {
                  return void 0 !== r[t] ? v(0) : v(1);
                },
                "ParenthesisNode, Object": function e(t, r) {
                  return new p(g(t.content, r));
                },
                "FunctionAssignmentNode, Object": function e(t, r) {
                  return void 0 !== r[t] ? v(0) : g(t.expr, r);
                },
                "FunctionNode, Object": function e(t, r) {
                  if ((1 !== t.args.length && y(t), void 0 !== r[t]))
                    return v(0);
                  var n = t.args[0],
                    a,
                    o = !1,
                    i = !1,
                    s,
                    u,
                    p;
                  switch (t.name) {
                    case "cbrt":
                      (o = !0),
                        (s = new l("*", "multiply", [
                          v(3),
                          new l("^", "pow", [
                            n,
                            new l("/", "divide", [v(2), v(3)]),
                          ]),
                        ]));
                      break;
                    case "sqrt":
                    case "nthRoot":
                      if (1 === t.args.length)
                        (o = !0),
                          (s = new l("*", "multiply", [
                            v(2),
                            new c("sqrt", [n]),
                          ]));
                      else if (2 === t.args.length)
                        return (
                          (r[(a = new l("/", "divide", [v(1), t.args[1]]))] =
                            r[t.args[1]]),
                          g(new l("^", "pow", [n, a]), r)
                        );
                      break;
                    case "log10":
                      a = v(10);
                    case "log":
                      if (a || 1 !== t.args.length) {
                        if (
                          (1 === t.args.length && a) ||
                          (2 === t.args.length && void 0 !== r[t.args[1]])
                        )
                          (s = new l("*", "multiply", [
                            n.clone(),
                            new c("log", [a || t.args[1]]),
                          ])),
                            (o = !0);
                        else if (2 === t.args.length)
                          return g(
                            new l("/", "divide", [
                              new c("log", [n]),
                              new c("log", [t.args[1]]),
                            ]),
                            r
                          );
                      } else (s = n.clone()), (o = !0);
                      break;
                    case "pow":
                      return (
                        (r[a] = r[t.args[1]]),
                        g(new l("^", "pow", [n, t.args[1]]), r)
                      );
                    case "exp":
                      s = new c("exp", [n.clone()]);
                      break;
                    case "sin":
                      s = new c("cos", [n.clone()]);
                      break;
                    case "cos":
                      s = new l("-", "unaryMinus", [new c("sin", [n.clone()])]);
                      break;
                    case "tan":
                      s = new l("^", "pow", [new c("sec", [n.clone()]), v(2)]);
                      break;
                    case "sec":
                      s = new l("*", "multiply", [
                        t,
                        new c("tan", [n.clone()]),
                      ]);
                      break;
                    case "csc":
                      (i = !0),
                        (s = new l("*", "multiply", [
                          t,
                          new c("cot", [n.clone()]),
                        ]));
                      break;
                    case "cot":
                      (i = !0),
                        (s = new l("^", "pow", [
                          new c("csc", [n.clone()]),
                          v(2),
                        ]));
                      break;
                    case "asin":
                      (o = !0),
                        (s = new c("sqrt", [
                          new l("-", "subtract", [
                            v(1),
                            new l("^", "pow", [n.clone(), v(2)]),
                          ]),
                        ]));
                      break;
                    case "acos":
                      (o = !0),
                        (i = !0),
                        (s = new c("sqrt", [
                          new l("-", "subtract", [
                            v(1),
                            new l("^", "pow", [n.clone(), v(2)]),
                          ]),
                        ]));
                      break;
                    case "atan":
                      (o = !0),
                        (s = new l("+", "add", [
                          new l("^", "pow", [n.clone(), v(2)]),
                          v(1),
                        ]));
                      break;
                    case "asec":
                      (o = !0),
                        (s = new l("*", "multiply", [
                          new c("abs", [n.clone()]),
                          new c("sqrt", [
                            new l("-", "subtract", [
                              new l("^", "pow", [n.clone(), v(2)]),
                              v(1),
                            ]),
                          ]),
                        ]));
                      break;
                    case "acsc":
                      (o = !0),
                        (i = !0),
                        (s = new l("*", "multiply", [
                          new c("abs", [n.clone()]),
                          new c("sqrt", [
                            new l("-", "subtract", [
                              new l("^", "pow", [n.clone(), v(2)]),
                              v(1),
                            ]),
                          ]),
                        ]));
                      break;
                    case "acot":
                      (o = !0),
                        (i = !0),
                        (s = new l("+", "add", [
                          new l("^", "pow", [n.clone(), v(2)]),
                          v(1),
                        ]));
                      break;
                    case "sinh":
                      s = new c("cosh", [n.clone()]);
                      break;
                    case "cosh":
                      s = new c("sinh", [n.clone()]);
                      break;
                    case "tanh":
                      s = new l("^", "pow", [new c("sech", [n.clone()]), v(2)]);
                      break;
                    case "sech":
                      (i = !0),
                        (s = new l("*", "multiply", [
                          t,
                          new c("tanh", [n.clone()]),
                        ]));
                      break;
                    case "csch":
                      (i = !0),
                        (s = new l("*", "multiply", [
                          t,
                          new c("coth", [n.clone()]),
                        ]));
                      break;
                    case "coth":
                      (i = !0),
                        (s = new l("^", "pow", [
                          new c("csch", [n.clone()]),
                          v(2),
                        ]));
                      break;
                    case "asinh":
                      (o = !0),
                        (s = new c("sqrt", [
                          new l("+", "add", [
                            new l("^", "pow", [n.clone(), v(2)]),
                            v(1),
                          ]),
                        ]));
                      break;
                    case "acosh":
                      (o = !0),
                        (s = new c("sqrt", [
                          new l("-", "subtract", [
                            new l("^", "pow", [n.clone(), v(2)]),
                            v(1),
                          ]),
                        ]));
                      break;
                    case "atanh":
                      (o = !0),
                        (s = new l("-", "subtract", [
                          v(1),
                          new l("^", "pow", [n.clone(), v(2)]),
                        ]));
                      break;
                    case "asech":
                      (o = !0),
                        (i = !0),
                        (s = new l("*", "multiply", [
                          n.clone(),
                          new c("sqrt", [
                            new l("-", "subtract", [
                              v(1),
                              new l("^", "pow", [n.clone(), v(2)]),
                            ]),
                          ]),
                        ]));
                      break;
                    case "acsch":
                      (o = !0),
                        (i = !0),
                        (s = new l("*", "multiply", [
                          new c("abs", [n.clone()]),
                          new c("sqrt", [
                            new l("+", "add", [
                              new l("^", "pow", [n.clone(), v(2)]),
                              v(1),
                            ]),
                          ]),
                        ]));
                      break;
                    case "acoth":
                      (o = !0),
                        (i = !0),
                        (s = new l("-", "subtract", [
                          v(1),
                          new l("^", "pow", [n.clone(), v(2)]),
                        ]));
                      break;
                    case "abs":
                      s = new l("/", "divide", [
                        new c(new f("abs"), [n.clone()]),
                        n.clone(),
                      ]);
                      break;
                    case "gamma":
                    default:
                      throw new Error(
                        'Function "' +
                          t.name +
                          '" is not supported by derivative, or a wrong number of arguments is passed'
                      );
                  }
                  o
                    ? ((u = "/"), (p = "divide"))
                    : ((u = "*"), (p = "multiply"));
                  var m = g(n, r);
                  return (
                    i && (m = new l("-", "unaryMinus", [m])),
                    new l(u, p, [m, s])
                  );
                },
                "OperatorNode, Object": function e(t, r) {
                  if (void 0 !== r[t]) return v(0);
                  if ("+" === t.op)
                    return new l(
                      t.op,
                      t.fn,
                      t.args.map(function (e) {
                        return g(e, r);
                      })
                    );
                  if ("-" === t.op) {
                    if (t.isUnary())
                      return new l(t.op, t.fn, [g(t.args[0], r)]);
                    if (t.isBinary())
                      return new l(t.op, t.fn, [
                        g(t.args[0], r),
                        g(t.args[1], r),
                      ]);
                  }
                  if ("*" === t.op) {
                    var n = t.args.filter(function (e) {
                      return void 0 !== r[e];
                    });
                    if (n.length > 0) {
                      var a = t.args.filter(function (e) {
                          return void 0 === r[e];
                        }),
                        s = 1 === a.length ? a[0] : new l("*", "multiply", a),
                        u = n.concat(g(s, r));
                      return new l("*", "multiply", u);
                    }
                    return new l(
                      "+",
                      "add",
                      t.args.map(function (e) {
                        return new l(
                          "*",
                          "multiply",
                          t.args.map(function (t) {
                            return t === e ? g(t, r) : t.clone();
                          })
                        );
                      })
                    );
                  }
                  if ("/" === t.op && t.isBinary()) {
                    var p = t.args[0],
                      f = t.args[1];
                    return void 0 !== r[f]
                      ? new l("/", "divide", [g(p, r), f])
                      : void 0 !== r[p]
                      ? new l("*", "multiply", [
                          new l("-", "unaryMinus", [p]),
                          new l("/", "divide", [
                            g(f, r),
                            new l("^", "pow", [f.clone(), v(2)]),
                          ]),
                        ])
                      : new l("/", "divide", [
                          new l("-", "subtract", [
                            new l("*", "multiply", [g(p, r), f.clone()]),
                            new l("*", "multiply", [p.clone(), g(f, r)]),
                          ]),
                          new l("^", "pow", [f.clone(), v(2)]),
                        ]);
                  }
                  if ("^" === t.op && t.isBinary()) {
                    var m = t.args[0],
                      h = t.args[1];
                    if (void 0 !== r[m])
                      return D(m) && (i(m.value) || o(m.value, 1))
                        ? v(0)
                        : new l("*", "multiply", [
                            t,
                            new l("*", "multiply", [
                              new c("log", [m.clone()]),
                              g(h.clone(), r),
                            ]),
                          ]);
                    if (void 0 !== r[h]) {
                      if (D(h)) {
                        if (i(h.value)) return v(0);
                        if (o(h.value, 1)) return g(m, r);
                      }
                      var d = new l("^", "pow", [
                        m.clone(),
                        new l("-", "subtract", [h, v(1)]),
                      ]);
                      return new l("*", "multiply", [
                        h.clone(),
                        new l("*", "multiply", [g(m, r), d]),
                      ]);
                    }
                    return new l("*", "multiply", [
                      new l("^", "pow", [m.clone(), h.clone()]),
                      new l("+", "add", [
                        new l("*", "multiply", [
                          g(m, r),
                          new l("/", "divide", [h.clone(), m.clone()]),
                        ]),
                        new l("*", "multiply", [
                          g(h, r),
                          new c("log", [m.clone()]),
                        ]),
                      ]),
                    ]);
                  }
                  throw new Error(
                    'Operator "' +
                      t.op +
                      '" is not supported by derivative, or a wrong number of arguments is passed'
                  );
                },
              });
            function y(e) {
              if (
                ("log" !== e.name &&
                  "nthRoot" !== e.name &&
                  "pow" !== e.name) ||
                2 !== e.args.length
              ) {
                for (var t = 0; t < e.args.length; ++t) e.args[t] = v(0);
                throw (
                  (e.compile().evaluate(),
                  new Error("Expected TypeError, but none found"))
                );
              }
            }
            function v(e, t) {
              return new u(s(e, t || r.number));
            }
            return m;
          }
        ),
        zu = "rationalize",
        _u,
        Lu = ge(
          zu,
          [
            "config",
            "typed",
            "equal",
            "isZero",
            "add",
            "subtract",
            "multiply",
            "divide",
            "pow",
            "parse",
            "simplify",
            "?bignumber",
            "?fraction",
            "mathWithTransform",
            "ConstantNode",
            "OperatorNode",
            "FunctionNode",
            "SymbolNode",
            "ParenthesisNode",
          ],
          (e) => {
            var {
                config: t,
                typed: r,
                equal: n,
                isZero: a,
                add: o,
                subtract: i,
                multiply: s,
                divide: u,
                pow: c,
                parse: l,
                simplify: p,
                fraction: f,
                bignumber: m,
                mathWithTransform: h,
                ConstantNode: d,
                OperatorNode: g,
                FunctionNode: y,
                SymbolNode: v,
                ParenthesisNode: x,
              } = e,
              b = Mu({
                typed: r,
                config: t,
                mathWithTransform: h,
                fraction: f,
                bignumber: m,
                ConstantNode: d,
                OperatorNode: g,
                FunctionNode: y,
                SymbolNode: v,
              }),
              w = Ou({
                equal: n,
                isZero: a,
                add: o,
                subtract: i,
                multiply: s,
                divide: u,
                pow: c,
                ConstantNode: d,
                OperatorNode: g,
                FunctionNode: y,
                ParenthesisNode: x,
              });
            return r(zu, {
              string: function e(t) {
                return this(l(t), {}, !1);
              },
              "string, boolean": function e(t, r) {
                return this(l(t), {}, r);
              },
              "string, Object": function e(t, r) {
                return this(l(t), r, !1);
              },
              "string, Object, boolean": function e(t, r, n) {
                return this(l(t), r, n);
              },
              Node: function e(t) {
                return this(t, {}, !1);
              },
              "Node, boolean": function e(t, r) {
                return this(t, {}, r);
              },
              "Node, Object": function e(t, r) {
                return this(t, r, !1);
              },
              "Node, Object, boolean": function e(t, r, n) {
                var a = S(),
                  o = N(t, r, !0, a.firstRules),
                  i = o.variables.length;
                if (((t = o.expression), i >= 1)) {
                  var s, u;
                  t = E(t);
                  var c = !0,
                    l = !1,
                    f;
                  for (
                    t = p(t, a.firstRules, {}, { exactFractions: !1 });
                    (u = c ? a.distrDivRules : a.sucDivRules),
                      (c = !c),
                      (f = (t = p(t, u)).toString()) !== s;

                  )
                    (l = !0), (s = f);
                  l &&
                    (t = p(t, a.firstRulesAgain, {}, { exactFractions: !1 })),
                    (t = p(t, a.finalRules, {}, { exactFractions: !1 }));
                }
                var m = [],
                  h = {};
                return (
                  "OperatorNode" === t.type && t.isBinary() && "/" === t.op
                    ? (1 === i &&
                        ((t.args[0] = A(t.args[0], m)),
                        (t.args[1] = A(t.args[1]))),
                      n &&
                        ((h.numerator = t.args[0]),
                        (h.denominator = t.args[1])))
                    : (1 === i && (t = A(t, m)),
                      n && ((h.numerator = t), (h.denominator = null))),
                  n
                    ? ((h.coefficients = m),
                      (h.variables = o.variables),
                      (h.expression = t),
                      h)
                    : t
                );
              },
            });
            function N(e, t, r, n) {
              var a = [],
                o = p(e, n, t, { exactFractions: !1 }),
                i = "+-*" + ((r = !!r) ? "/" : "");
              u(o);
              var s = {};
              return (s.expression = o), (s.variables = a), s;
              function u(e) {
                var t = e.type;
                if ("FunctionNode" === t)
                  throw new Error("There is an unsolved function call");
                if ("OperatorNode" === t)
                  if ("^" === e.op) {
                    if (
                      "ConstantNode" !== e.args[1].type ||
                      !it(parseFloat(e.args[1].value))
                    )
                      throw new Error("There is a non-integer exponent");
                    u(e.args[0]);
                  } else {
                    if (-1 === i.indexOf(e.op))
                      throw new Error(
                        "Operator " + e.op + " invalid in polynomial expression"
                      );
                    for (var r = 0; r < e.args.length; r++) u(e.args[r]);
                  }
                else if ("SymbolNode" === t) {
                  var n = e.name,
                    o;
                  -1 === a.indexOf(n) && a.push(n);
                } else if ("ParenthesisNode" === t) u(e.content);
                else if ("ConstantNode" !== t)
                  throw new Error(
                    "type " + t + " is not allowed in polynomial expression"
                  );
              }
            }
            function S() {
              var e = [
                  w,
                  { l: "n+n", r: "2*n" },
                  { l: "n+-n", r: "0" },
                  b,
                  { l: "n*(n1^-1)", r: "n/n1" },
                  { l: "n*n1^-n2", r: "n/n1^n2" },
                  { l: "n1^-1", r: "1/n1" },
                  { l: "n*(n1/n2)", r: "(n*n1)/n2" },
                  { l: "1*n", r: "n" },
                ],
                t = [
                  { l: "(-n1)/(-n2)", r: "n1/n2" },
                  { l: "(-n1)*(-n2)", r: "n1*n2" },
                  { l: "n1--n2", r: "n1+n2" },
                  { l: "n1-n2", r: "n1+(-n2)" },
                  { l: "(n1+n2)*n3", r: "(n1*n3 + n2*n3)" },
                  { l: "n1*(n2+n3)", r: "(n1*n2+n1*n3)" },
                  { l: "c1*n + c2*n", r: "(c1+c2)*n" },
                  { l: "c1*n + n", r: "(c1+1)*n" },
                  { l: "c1*n - c2*n", r: "(c1-c2)*n" },
                  { l: "c1*n - n", r: "(c1-1)*n" },
                  { l: "v/c", r: "(1/c)*v" },
                  { l: "v/-c", r: "-(1/c)*v" },
                  { l: "-v*-c", r: "c*v" },
                  { l: "-v*c", r: "-c*v" },
                  { l: "v*-c", r: "-c*v" },
                  { l: "v*c", r: "c*v" },
                  { l: "-(-n1*n2)", r: "(n1*n2)" },
                  { l: "-(n1*n2)", r: "(-n1*n2)" },
                  { l: "-(-n1+n2)", r: "(n1-n2)" },
                  { l: "-(n1+n2)", r: "(-n1-n2)" },
                  { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" },
                  { l: "-(-n1/n2)", r: "(n1/n2)" },
                  { l: "-(n1/n2)", r: "(-n1/n2)" },
                ],
                r = [
                  { l: "(n1/n2 + n3/n4)", r: "((n1*n4 + n3*n2)/(n2*n4))" },
                  { l: "(n1/n2 + n3)", r: "((n1 + n3*n2)/n2)" },
                  { l: "(n1 + n2/n3)", r: "((n1*n3 + n2)/n3)" },
                ],
                n = [
                  { l: "(n1/(n2/n3))", r: "((n1*n3)/n2)" },
                  { l: "(n1/n2/n3)", r: "(n1/(n2*n3))" },
                ],
                a = {};
              return (
                (a.firstRules = e.concat(t, n)),
                (a.distrDivRules = r),
                (a.sucDivRules = n),
                (a.firstRulesAgain = e.concat(t)),
                (a.finalRules = [
                  w,
                  { l: "n*-n", r: "-n^2" },
                  { l: "n*n", r: "n^2" },
                  b,
                  { l: "n*-n^n1", r: "-n^(n1+1)" },
                  { l: "n*n^n1", r: "n^(n1+1)" },
                  { l: "n^n1*-n^n2", r: "-n^(n1+n2)" },
                  { l: "n^n1*n^n2", r: "n^(n1+n2)" },
                  { l: "n^n1*-n", r: "-n^(n1+1)" },
                  { l: "n^n1*n", r: "n^(n1+1)" },
                  { l: "n^n1/-n", r: "-n^(n1-1)" },
                  { l: "n^n1/n", r: "n^(n1-1)" },
                  { l: "n/-n^n1", r: "-n^(1-n1)" },
                  { l: "n/n^n1", r: "n^(1-n1)" },
                  { l: "n^n1/-n^n2", r: "n^(n1-n2)" },
                  { l: "n^n1/n^n2", r: "n^(n1-n2)" },
                  { l: "n1+(-n2*n3)", r: "n1-n2*n3" },
                  { l: "v*(-c)", r: "-c*v" },
                  { l: "n1+-n2", r: "n1-n2" },
                  { l: "v*c", r: "c*v" },
                  { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" },
                ]),
                a
              );
            }
            function E(e, t, r) {
              var n = e.type,
                a = arguments.length > 1;
              if ("OperatorNode" === n && e.isBinary()) {
                var o = !1,
                  i;
                if (
                  ("^" === e.op &&
                    (("ParenthesisNode" !== e.args[0].type &&
                      "OperatorNode" !== e.args[0].type) ||
                      "ConstantNode" !== e.args[1].type ||
                      (o = (i = parseFloat(e.args[1].value)) >= 2 && it(i))),
                  o)
                ) {
                  if (i > 2) {
                    var s = e.args[0],
                      u = new g("^", "pow", [
                        e.args[0].cloneDeep(),
                        new d(i - 1),
                      ]);
                    e = new g("*", "multiply", [s, u]);
                  } else
                    e = new g("*", "multiply", [
                      e.args[0],
                      e.args[0].cloneDeep(),
                    ]);
                  a && ("content" === r ? (t.content = e) : (t.args[r] = e));
                }
              }
              if ("ParenthesisNode" === n) E(e.content, e, "content");
              else if ("ConstantNode" !== n && "SymbolNode" !== n)
                for (var c = 0; c < e.args.length; c++) E(e.args[c], e, c);
              if (!a) return e;
            }
            function A(e, t) {
              void 0 === t && (t = []), (t[0] = 0);
              var r = { cte: 1, oper: "+", fire: "" },
                n = 0,
                a = "";
              f(e, null, r);
              for (var o = !0, i, s = (n = t.length - 1); s >= 0; s--)
                if (0 !== t[s]) {
                  var u = new d(o ? t[s] : Math.abs(t[s])),
                    c = t[s] < 0 ? "-" : "+";
                  if (s > 0) {
                    var l = new v(a);
                    if (s > 1) {
                      var p = new d(s);
                      l = new g("^", "pow", [l, p]);
                    }
                    u =
                      -1 === t[s] && o
                        ? new g("-", "unaryMinus", [l])
                        : 1 === Math.abs(t[s])
                        ? l
                        : new g("*", "multiply", [u, l]);
                  }
                  (i = o
                    ? u
                    : "+" === c
                    ? new g("+", "add", [i, u])
                    : new g("-", "subtract", [i, u])),
                    (o = !1);
                }
              return o ? new d(0) : i;
              function f(e, r, o) {
                var i = e.type;
                if ("FunctionNode" === i)
                  throw new Error("There is an unsolved function call");
                if ("OperatorNode" === i) {
                  if (-1 === "+-*^".indexOf(e.op))
                    throw new Error("Operator " + e.op + " invalid");
                  if (null !== r) {
                    if (
                      ("unaryMinus" === e.fn || "pow" === e.fn) &&
                      "add" !== r.fn &&
                      "subtract" !== r.fn &&
                      "multiply" !== r.fn
                    )
                      throw new Error("Invalid " + e.op + " placing");
                    if (
                      ("subtract" === e.fn ||
                        "add" === e.fn ||
                        "multiply" === e.fn) &&
                      "add" !== r.fn &&
                      "subtract" !== r.fn
                    )
                      throw new Error("Invalid " + e.op + " placing");
                    if (
                      ("subtract" === e.fn ||
                        "add" === e.fn ||
                        "unaryMinus" === e.fn) &&
                      0 !== o.noFil
                    )
                      throw new Error("Invalid " + e.op + " placing");
                  }
                  ("^" !== e.op && "*" !== e.op) || (o.fire = e.op);
                  for (var s = 0; s < e.args.length; s++)
                    "unaryMinus" === e.fn && (o.oper = "-"),
                      ("+" !== e.op && "subtract" !== e.fn) ||
                        ((o.fire = ""),
                        (o.cte = 1),
                        (o.oper = 0 === s ? "+" : e.op)),
                      (o.noFil = s),
                      f(e.args[s], e, o);
                } else if ("SymbolNode" === i) {
                  if (e.name !== a && "" !== a)
                    throw new Error("There is more than one variable");
                  if (((a = e.name), null === r)) return void (t[1] = 1);
                  if ("^" === r.op && 0 !== o.noFil)
                    throw new Error(
                      "In power the variable should be the first parameter"
                    );
                  if ("*" === r.op && 1 !== o.noFil)
                    throw new Error(
                      "In multiply the variable should be the second parameter"
                    );
                  ("" !== o.fire && "*" !== o.fire) ||
                    (n < 1 && (t[1] = 0),
                    (t[1] += o.cte * ("+" === o.oper ? 1 : -1)),
                    (n = Math.max(1, n)));
                } else {
                  if ("ConstantNode" !== i)
                    throw new Error("Type " + i + " is not allowed");
                  var u = parseFloat(e.value);
                  if (null === r) return void (t[0] = u);
                  if ("^" === r.op) {
                    if (1 !== o.noFil)
                      throw new Error("Constant cannot be powered");
                    if (!it(u) || u <= 0)
                      throw new Error("Non-integer exponent is not allowed");
                    for (var c = n + 1; c < u; c++) t[c] = 0;
                    return (
                      u > n && (t[u] = 0),
                      (t[u] += o.cte * ("+" === o.oper ? 1 : -1)),
                      void (n = Math.max(u, n))
                    );
                  }
                  (o.cte = u),
                    "" === o.fire &&
                      (t[0] += o.cte * ("+" === o.oper ? 1 : -1));
                }
              }
            }
          }
        ),
        $u = "nthRoot",
        Uu = null,
        Wu = null,
        Hu = ge($u, ["typed"], (e) => {
          var { typed: t } = e;
          return t($u, { number: er, "number, number": er });
        });
      function Ju(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Vu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ju(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ju(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Xu = "Number of decimals in function round must be an integer",
        Gu = "round",
        Qu = null,
        Zu = null,
        Yu = {
          number: ir,
          "number, number": function e(t, r) {
            if (!it(r)) throw new TypeError(Xu);
            if (r < 0 || r > 15)
              throw new Error(
                "Number of decimals in function round must be in the range of 0-15"
              );
            return ir(t, r);
          },
        },
        Ku = ge(Gu, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Gu, Yu);
        }),
        ec = "hypot",
        tc,
        rc = ge(
          ec,
          [
            "typed",
            "abs",
            "addScalar",
            "divideScalar",
            "multiplyScalar",
            "sqrt",
            "smaller",
            "isPositive",
          ],
          (e) => {
            var {
              typed: t,
              abs: r,
              addScalar: n,
              divideScalar: a,
              multiplyScalar: o,
              sqrt: i,
              smaller: s,
              isPositive: u,
            } = e;
            return t(ec, {
              "... number | BigNumber": c,
              Array: function e(t) {
                return this.apply(this, Be(t));
              },
              Matrix: function e(t) {
                return this.apply(this, Be(t.toArray()));
              },
            });
            function c(e) {
              for (var t = 0, c = 0, l = 0; l < e.length; l++) {
                var p = r(e[l]);
                s(c, p)
                  ? ((t = o(t, o(a(c, p), a(c, p)))), (t = n(t, 1)), (c = p))
                  : (t = n(t, u(p) ? o(a(p, c), a(p, c)) : p));
              }
              return o(c, i(t));
            }
          }
        ),
        nc = "stirlingS2",
        ac,
        oc = ge(
          nc,
          [
            "typed",
            "addScalar",
            "subtract",
            "multiplyScalar",
            "divideScalar",
            "pow",
            "factorial",
            "combinations",
            "isNegative",
            "isInteger",
            "larger",
          ],
          (e) => {
            var {
              typed: t,
              addScalar: r,
              subtract: n,
              multiplyScalar: a,
              divideScalar: o,
              pow: i,
              factorial: s,
              combinations: u,
              isNegative: c,
              isInteger: l,
              larger: p,
            } = e;
            return t(nc, {
              "number | BigNumber, number | BigNumber": function e(t, f) {
                if (!l(t) || c(t) || !l(f) || c(f))
                  throw new TypeError(
                    "Non-negative integer value expected in function stirlingS2"
                  );
                if (p(f, t))
                  throw new TypeError(
                    "k must be less than or equal to n in function stirlingS2"
                  );
                for (var m = s(f), h = 0, d = 0; d <= f; d++) {
                  var g = i(-1, n(f, d)),
                    y = u(f, d),
                    v = i(d, t);
                  h = r(h, a(a(y, v), g));
                }
                return o(h, m);
              },
            });
          }
        ),
        ic = "bellNumbers",
        sc,
        uc = ge(
          ic,
          ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"],
          (e) => {
            var {
              typed: t,
              addScalar: r,
              isNegative: n,
              isInteger: a,
              stirlingS2: o,
            } = e;
            return t(ic, {
              "number | BigNumber": function e(t) {
                if (!a(t) || n(t))
                  throw new TypeError(
                    "Non-negative integer value expected in function bellNumbers"
                  );
                for (var i = 0, s = 0; s <= t; s++) i = r(i, o(t, s));
                return i;
              },
            });
          }
        ),
        cc = "catalan",
        lc,
        pc = ge(
          cc,
          [
            "typed",
            "addScalar",
            "divideScalar",
            "multiplyScalar",
            "combinations",
            "isNegative",
            "isInteger",
          ],
          (e) => {
            var {
              typed: t,
              addScalar: r,
              divideScalar: n,
              multiplyScalar: a,
              combinations: o,
              isNegative: i,
              isInteger: s,
            } = e;
            return t(cc, {
              "number | BigNumber": function e(t) {
                if (!s(t) || i(t))
                  throw new TypeError(
                    "Non-negative integer value expected in function catalan"
                  );
                return n(o(a(t, 2), t), r(t, 1));
              },
            });
          }
        ),
        fc = "composition",
        mc,
        hc = ge(
          fc,
          [
            "typed",
            "addScalar",
            "combinations",
            "isNegative",
            "isPositive",
            "isInteger",
            "larger",
          ],
          (e) => {
            var {
              typed: t,
              addScalar: r,
              combinations: n,
              isPositive: a,
              isNegative: o,
              isInteger: i,
              larger: s,
            } = e;
            return t(fc, {
              "number | BigNumber, number | BigNumber": function e(t, o) {
                if (!(i(t) && a(t) && i(o) && a(o)))
                  throw new TypeError(
                    "Positive integer value expected in function composition"
                  );
                if (s(o, t))
                  throw new TypeError(
                    "k must be less than or equal to n in function composition"
                  );
                return n(r(t, -1), r(o, -1));
              },
            });
          }
        ),
        dc = "9.4.4";
      function gc(e) {
        var t = 0,
          r = 1,
          n = Object.create(null),
          a = Object.create(null),
          o = 0,
          i = function e(i) {
            var s = a[i];
            if (s && (delete n[s], delete a[i], --t, r === s)) {
              if (!t) return (o = 0), void (r = 1);
              for (; !hasOwnProperty.call(n, ++r); );
            }
          };
        return (
          (e = Math.abs(e)),
          {
            hit: function s(u) {
              var c = a[u],
                l = ++o;
              if (((n[l] = u), (a[u] = l), !c)) {
                if (++t <= e) return;
                return (u = n[r]), i(u), u;
              }
              if ((delete n[c], r === c))
                for (; !hasOwnProperty.call(n, ++r); );
            },
            delete: i,
            clear: function e() {
              (t = o = 0),
                (r = 1),
                (n = Object.create(null)),
                (a = Object.create(null));
            },
          }
        );
      }
      function yc(e) {
        var { hasher: t, limit: r } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          (r = null == r ? Number.POSITIVE_INFINITY : r),
          (t = null == t ? JSON.stringify : t),
          function n() {
            "object" != typeof n.cache &&
              (n.cache = {
                values: new Map(),
                lru: gc(r || Number.POSITIVE_INFINITY),
              });
            for (var a = [], o = 0; o < arguments.length; o++)
              a[o] = arguments[o];
            var i = t(a);
            if (n.cache.values.has(i))
              return n.cache.lru.hit(i), n.cache.values.get(i);
            var s = e.apply(e, a);
            return (
              n.cache.values.set(i, s),
              n.cache.values.delete(n.cache.lru.hit(i)),
              s
            );
          }
        );
      }
      function vc(e, t) {
        var r = function r() {
          for (var n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a];
          for (var o = 0; o < r.cache.length; o++) {
            var i = r.cache[o];
            if (t(n, i.args)) return i.res;
          }
          var s = e.apply(e, n);
          return r.cache.unshift({ args: n, res: s }), s;
        };
        return (r.cache = []), r;
      }
      function xc(e) {
        return Object.keys(e.signatures || {}).reduce(function (e, t) {
          var r = (t.match(/,/g) || []).length + 1;
          return Math.max(e, r);
        }, -1);
      }
      var bc = yc(
          function (e) {
            return new e(1).exp();
          },
          { hasher: Ec }
        ),
        wc = yc(
          function (e) {
            return new e(1).plus(new e(5).sqrt()).div(2);
          },
          { hasher: Ec }
        ),
        Nc = yc(
          function (e) {
            return e.acos(-1);
          },
          { hasher: Ec }
        ),
        Sc = yc(
          function (e) {
            return Nc(e).times(2);
          },
          { hasher: Ec }
        );
      function Ec(e) {
        return e[0].precision;
      }
      var Ac = Math.PI,
        Oc = 2 * Math.PI,
        Cc = Math.E,
        Tc = 1.618033988749895,
        Mc = ge("true", [], () => !0),
        kc = ge("false", [], () => !1),
        jc = ge("null", [], () => null),
        qc = Qc("Infinity", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r(1 / 0) : 1 / 0;
        }),
        Pc = Qc("NaN", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r(NaN) : NaN;
        }),
        Fc = Qc("pi", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? Nc(r) : Ac;
        }),
        Ic = Qc("tau", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? Sc(r) : Oc;
        }),
        Rc = Qc("e", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? bc(r) : Cc;
        }),
        Bc = Qc("phi", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? wc(r) : Tc;
        }),
        Dc = Qc("LN2", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r(2).ln() : Math.LN2;
        }),
        zc = Qc("LN10", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r(10).ln() : Math.LN10;
        }),
        _c = Qc("LOG2E", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number
            ? new r(1).div(new r(2).ln())
            : Math.LOG2E;
        }),
        Lc = Qc("LOG10E", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number
            ? new r(1).div(new r(10).ln())
            : Math.LOG10E;
        }),
        $c = Qc("SQRT1_2", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r("0.5").sqrt() : Math.SQRT1_2;
        }),
        Uc = Qc("SQRT2", ["config", "?BigNumber"], (e) => {
          var { config: t, BigNumber: r } = e;
          return "BigNumber" === t.number ? new r(2).sqrt() : Math.SQRT2;
        }),
        Wc = null,
        Hc = ge("PI", ["pi"], (e) => {
          var { pi: t } = e;
          return t;
        }),
        Jc = ge("E", ["e"], (e) => {
          var { e: t } = e;
          return t;
        }),
        Vc = ge("version", [], () => dc),
        Xc,
        Gc;
      function Qc(e, t, r) {
        return ge(e, t, r, { recreateOnConfigChange: !0 });
      }
      function Zc(e) {
        for (var t = 0; t < e.length; t++) if (x(e[t])) return !0;
        return !1;
      }
      function Yc(e, t) {
        v(e) && (e = e.valueOf());
        for (var r = 0, n = e.length; r < n; r++) {
          var a = e[r];
          Array.isArray(a) ? Yc(a, t) : t(a);
        }
      }
      function Kc(e, t, r) {
        return e && "function" == typeof e.map
          ? e.map(function (e) {
              return Kc(e, t, r);
            })
          : t(e);
      }
      function el(e, t, r) {
        var n = Array.isArray(e) ? Se(e) : e.size();
        if (t < 0 || t >= n.length) throw new at(t, n.length);
        return v(e) ? e.create(tl(e.valueOf(), t, r)) : tl(e, t, r);
      }
      function tl(e, t, r) {
        var n, a, o, i;
        if (t <= 0) {
          if (Array.isArray(e[0])) {
            for (i = rl(e), a = [], n = 0; n < i.length; n++)
              a[n] = tl(i[n], t - 1, r);
            return a;
          }
          for (o = e[0], n = 1; n < e.length; n++) o = r(o, e[n]);
          return o;
        }
        for (a = [], n = 0; n < e.length; n++) a[n] = tl(e[n], t - 1, r);
        return a;
      }
      function rl(e) {
        var t = e.length,
          r = e[0].length,
          n,
          a,
          o = [];
        for (a = 0; a < r; a++) {
          var i = [];
          for (n = 0; n < t; n++) i.push(e[n][a]);
          o.push(i);
        }
        return o;
      }
      function nl(e, t, r, n, a, o, i, s, u, c, l) {
        var p = e._values,
          f = e._index,
          m = e._ptr,
          h,
          d,
          g,
          y;
        if (n)
          for (d = m[t], g = m[t + 1], h = d; h < g; h++)
            r[(y = f[h])] !== o
              ? ((r[y] = o),
                i.push(y),
                c
                  ? ((n[y] = u ? s(p[h], l) : s(l, p[h])), (a[y] = o))
                  : (n[y] = p[h]))
              : ((n[y] = u ? s(p[h], n[y]) : s(n[y], p[h])), (a[y] = o));
        else
          for (d = m[t], g = m[t + 1], h = d; h < g; h++)
            r[(y = f[h])] !== o ? ((r[y] = o), i.push(y)) : (a[y] = o);
      }
      function al(e) {
        var t = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/),
          r,
          n,
          a;
        return t
          ? {
              input: e,
              radix: { "0b": 2, "0o": 8, "0x": 16 }[t[1]],
              integerPart: t[2],
              fractionalPart: t[3],
            }
          : null;
      }
      function ol(e) {
        for (
          var t = parseInt(e.integerPart, e.radix), r = 0, n = 0;
          n < e.fractionalPart.length;
          n++
        ) {
          var a;
          r +=
            parseInt(e.fractionalPart[n], e.radix) / Math.pow(e.radix, n + 1);
        }
        var o = t + r;
        if (isNaN(o))
          throw new SyntaxError('String "' + e.input + '" is no valid number');
        return o;
      }
      var il = ge("number", ["typed"], (e) => {
          var { typed: t } = e,
            r = t("number", {
              "": function e() {
                return 0;
              },
              number: function e(t) {
                return t;
              },
              string: function e(t) {
                if ("NaN" === t) return NaN;
                var r = al(t);
                if (r) return ol(r);
                var n = 0,
                  a = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                a && ((n = Number(a[2])), (t = a[1]));
                var o = Number(t);
                if (isNaN(o))
                  throw new SyntaxError(
                    'String "' + t + '" is no valid number'
                  );
                if (a) {
                  if (o > 2 ** n - 1)
                    throw new SyntaxError(
                      'String "'.concat(t, '" is out of range')
                    );
                  o >= 2 ** (n - 1) && (o -= 2 ** n);
                }
                return o;
              },
              BigNumber: function e(t) {
                return t.toNumber();
              },
              Fraction: function e(t) {
                return t.valueOf();
              },
              Unit: function e(t) {
                throw new Error("Second argument with valueless unit expected");
              },
              null: function e(t) {
                return 0;
              },
              "Unit, string | Unit": function e(t, r) {
                return t.toNumber(r);
              },
              "Array | Matrix": function e(t) {
                return Kc(t, this);
              },
            });
          return (
            (r.fromJSON = function (e) {
              return parseFloat(e.value);
            }),
            r
          );
        }),
        sl = "string",
        ul,
        cl = ge(sl, ["typed"], (e) => {
          var { typed: t } = e;
          return t(sl, {
            "": function e() {
              return "";
            },
            number: ht,
            null: function e(t) {
              return "null";
            },
            boolean: function e(t) {
              return t + "";
            },
            string: function e(t) {
              return t;
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
            any: function e(t) {
              return String(t);
            },
          });
        }),
        ll = "boolean",
        pl,
        fl = ge(ll, ["typed"], (e) => {
          var { typed: t } = e;
          return t(ll, {
            "": function e() {
              return !1;
            },
            boolean: function e(t) {
              return t;
            },
            number: function e(t) {
              return !!t;
            },
            null: function e(t) {
              return !1;
            },
            BigNumber: function e(t) {
              return !t.isZero();
            },
            string: function e(t) {
              var r = t.toLowerCase();
              if ("true" === r) return !0;
              if ("false" === r) return !1;
              var n = Number(t);
              if ("" !== t && !isNaN(n)) return !!n;
              throw new Error('Cannot convert "' + t + '" to a boolean');
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
          });
        }),
        ml = "parser",
        hl,
        dl = ge(ml, ["typed", "Parser"], (e) => {
          var { typed: t, Parser: r } = e;
          return t(ml, {
            "": function e() {
              return new r();
            },
          });
        }),
        gl = new Set(["end"]),
        yl,
        vl,
        xl = ge(
          "Node",
          ["mathWithTransform"],
          (e) => {
            var { mathWithTransform: t } = e;
            function r() {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
            }
            function n(e) {
              for (var t of [...gl])
                if (e.has(t))
                  throw new Error(
                    'Scope contains an illegal symbol, "' +
                      t +
                      '" is a reserved keyword'
                  );
            }
            return (
              (r.prototype.evaluate = function (e) {
                return this.compile().evaluate(e);
              }),
              (r.prototype.type = "Node"),
              (r.prototype.isNode = !0),
              (r.prototype.comment = ""),
              (r.prototype.compile = function () {
                var e = this._compile(t, {}),
                  r = {},
                  a = null;
                function o(t) {
                  var o = On(t);
                  return n(o), e(o, r, a);
                }
                return { evaluate: o };
              }),
              (r.prototype._compile = function (e, t) {
                throw new Error(
                  "Method _compile should be implemented by type " + this.type
                );
              }),
              (r.prototype.forEach = function (e) {
                throw new Error("Cannot run forEach on a Node interface");
              }),
              (r.prototype.map = function (e) {
                throw new Error("Cannot run map on a Node interface");
              }),
              (r.prototype._ifNode = function (e) {
                if (!$(e))
                  throw new TypeError("Callback function must return a Node");
                return e;
              }),
              (r.prototype.traverse = function (e) {
                function t(e, r) {
                  e.forEach(function (e, n, a) {
                    r(e, n, a), t(e, r);
                  });
                }
                e(this, null, null), t(this, e);
              }),
              (r.prototype.transform = function (e) {
                function t(r, n, a) {
                  var o = e(r, n, a);
                  return o !== r ? o : r.map(t);
                }
                return t(this, null, null);
              }),
              (r.prototype.filter = function (e) {
                var t = [];
                return (
                  this.traverse(function (r, n, a) {
                    e(r, n, a) && t.push(r);
                  }),
                  t
                );
              }),
              (r.prototype.clone = function () {
                throw new Error("Cannot clone a Node interface");
              }),
              (r.prototype.cloneDeep = function () {
                return this.map(function (e) {
                  return e.cloneDeep();
                });
              }),
              (r.prototype.equals = function (e) {
                return !!e && ee(this, e);
              }),
              (r.prototype.toString = function (e) {
                var t = this._getCustomString(e);
                return void 0 !== t ? t : this._toString(e);
              }),
              (r.prototype.toJSON = function () {
                throw new Error(
                  "Cannot serialize object: toJSON not implemented by " +
                    this.type
                );
              }),
              (r.prototype.toHTML = function (e) {
                var t = this._getCustomString(e);
                return void 0 !== t ? t : this.toHTML(e);
              }),
              (r.prototype._toString = function () {
                throw new Error("_toString not implemented for " + this.type);
              }),
              (r.prototype.toTex = function (e) {
                var t = this._getCustomString(e);
                return void 0 !== t ? t : this._toTex(e);
              }),
              (r.prototype._toTex = function (e) {
                throw new Error("_toTex not implemented for " + this.type);
              }),
              (r.prototype._getCustomString = function (e) {
                if (e && "object" == typeof e)
                  switch (typeof e.handler) {
                    case "object":
                    case "undefined":
                      return;
                    case "function":
                      return e.handler(this, e);
                    default:
                      throw new TypeError(
                        "Object or function expected as callback"
                      );
                  }
              }),
              (r.prototype.getIdentifier = function () {
                return this.type;
              }),
              (r.prototype.getContent = function () {
                return this;
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        );
      function bl(e) {
        return e && e.isIndexError
          ? new at(
              e.index + 1,
              e.min + 1,
              void 0 !== e.max ? e.max + 1 : void 0
            )
          : e;
      }
      function wl(e) {
        var { subset: t } = e;
        return function e(r, n) {
          try {
            if (Array.isArray(r)) return t(r, n);
            if (r && "function" == typeof r.subset) return r.subset(n);
            if ("string" == typeof r) return t(r, n);
            if ("object" == typeof r) {
              if (!n.isObjectProperty())
                throw new TypeError(
                  "Cannot apply a numeric index as object property"
                );
              return hn(r, n.getObjectProperty());
            }
            throw new TypeError(
              "Cannot apply index: unsupported type of object"
            );
          } catch (e) {
            throw bl(e);
          }
        };
      }
      var Nl,
        Sl,
        El = ge(
          "AccessorNode",
          ["subset", "Node"],
          (e) => {
            var { subset: t, Node: r } = e,
              n = wl({ subset: t });
            function a(e, t) {
              if (!(this instanceof a))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!$(e))
                throw new TypeError('Node expected for parameter "object"');
              if (!L(t))
                throw new TypeError('IndexNode expected for parameter "index"');
              (this.object = e || null),
                (this.index = t),
                Object.defineProperty(this, "name", {
                  get: function () {
                    return this.index
                      ? this.index.isObjectProperty()
                        ? this.index.getObjectProperty()
                        : ""
                      : this.object.name || "";
                  }.bind(this),
                  set: function e() {
                    throw new Error(
                      "Cannot assign a new name, name is read-only"
                    );
                  },
                });
            }
            function o(e) {
              return !(P(e) || F(e) || D(e) || _(e) || U(e) || H(e) || V(e));
            }
            return (
              (a.prototype = new r()),
              (a.prototype.type = "AccessorNode"),
              (a.prototype.isAccessorNode = !0),
              (a.prototype._compile = function (e, t) {
                var r = this.object._compile(e, t),
                  a = this.index._compile(e, t);
                if (this.index.isObjectProperty()) {
                  var o = this.index.getObjectProperty();
                  return function e(t, n, a) {
                    return hn(r(t, n, a), o);
                  };
                }
                return function e(t, o, i) {
                  var s = r(t, o, i),
                    u = a(t, o, s);
                  return n(s, u);
                };
              }),
              (a.prototype.forEach = function (e) {
                e(this.object, "object", this), e(this.index, "index", this);
              }),
              (a.prototype.map = function (e) {
                return new a(
                  this._ifNode(e(this.object, "object", this)),
                  this._ifNode(e(this.index, "index", this))
                );
              }),
              (a.prototype.clone = function () {
                return new a(this.object, this.index);
              }),
              (a.prototype._toString = function (e) {
                var t = this.object.toString(e);
                return (
                  o(this.object) && (t = "(" + t + ")"),
                  t + this.index.toString(e)
                );
              }),
              (a.prototype.toHTML = function (e) {
                var t = this.object.toHTML(e);
                return (
                  o(this.object) &&
                    (t =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      t +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                  t + this.index.toHTML(e)
                );
              }),
              (a.prototype._toTex = function (e) {
                var t = this.object.toTex(e);
                return (
                  o(this.object) && (t = "\\left(' + object + '\\right)"),
                  t + this.index.toTex(e)
                );
              }),
              (a.prototype.toJSON = function () {
                return {
                  mathjs: "AccessorNode",
                  object: this.object,
                  index: this.index,
                };
              }),
              (a.fromJSON = function (e) {
                return new a(e.object, e.index);
              }),
              a
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        Al,
        Ol,
        Cl = ge(
          "ArrayNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (
                ((this.items = e || []),
                !Array.isArray(this.items) || !this.items.every($))
              )
                throw new TypeError("Array containing Nodes expected");
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "ArrayNode"),
              (r.prototype.isArrayNode = !0),
              (r.prototype._compile = function (e, t) {
                var r = De(this.items, function (r) {
                    return r._compile(e, t);
                  }),
                  n;
                if ("Array" !== e.config.matrix) {
                  var a = e.matrix;
                  return function e(t, n, o) {
                    return a(
                      De(r, function (e) {
                        return e(t, n, o);
                      })
                    );
                  };
                }
                return function e(t, n, a) {
                  return De(r, function (e) {
                    return e(t, n, a);
                  });
                };
              }),
              (r.prototype.forEach = function (e) {
                for (var t = 0; t < this.items.length; t++) {
                  var r;
                  e(this.items[t], "items[" + t + "]", this);
                }
              }),
              (r.prototype.map = function (e) {
                for (var t = [], n = 0; n < this.items.length; n++)
                  t[n] = this._ifNode(
                    e(this.items[n], "items[" + n + "]", this)
                  );
                return new r(t);
              }),
              (r.prototype.clone = function () {
                return new r(this.items.slice(0));
              }),
              (r.prototype._toString = function (e) {
                var t;
                return (
                  "[" +
                  this.items
                    .map(function (t) {
                      return t.toString(e);
                    })
                    .join(", ") +
                  "]"
                );
              }),
              (r.prototype.toJSON = function () {
                return { mathjs: "ArrayNode", items: this.items };
              }),
              (r.fromJSON = function (e) {
                return new r(e.items);
              }),
              (r.prototype.toHTML = function (e) {
                var t;
                return (
                  '<span class="math-parenthesis math-square-parenthesis">[</span>' +
                  this.items
                    .map(function (t) {
                      return t.toHTML(e);
                    })
                    .join('<span class="math-separator">,</span>') +
                  '<span class="math-parenthesis math-square-parenthesis">]</span>'
                );
              }),
              (r.prototype._toTex = function (e) {
                function t(r, n) {
                  var a = r.some(F) && !r.every(F),
                    o = n || a,
                    i = o ? "&" : "\\\\",
                    s = r
                      .map(function (r) {
                        return r.items ? t(r.items, !n) : r.toTex(e);
                      })
                      .join(i);
                  return a || !o || (o && !n)
                    ? "\\begin{bmatrix}" + s + "\\end{bmatrix}"
                    : s;
                }
                return t(this.items, !1);
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        );
      function Tl(e) {
        var { subset: t, matrix: r } = e;
        return function e(n, a, o) {
          try {
            if (Array.isArray(n)) return r(n).subset(a, o).valueOf();
            if (n && "function" == typeof n.subset) return n.subset(a, o);
            if ("string" == typeof n) return t(n, a, o);
            if ("object" == typeof n) {
              if (!a.isObjectProperty())
                throw TypeError(
                  "Cannot apply a numeric index as object property"
                );
              return dn(n, a.getObjectProperty(), o), n;
            }
            throw new TypeError(
              "Cannot apply index: unsupported type of object"
            );
          } catch (e) {
            throw bl(e);
          }
        };
      }
      var Ml = [
        { AssignmentNode: {}, FunctionAssignmentNode: {} },
        {
          ConditionalNode: {
            latexLeftParens: !1,
            latexRightParens: !1,
            latexParens: !1,
          },
        },
        { "OperatorNode:or": { associativity: "left", associativeWith: [] } },
        { "OperatorNode:xor": { associativity: "left", associativeWith: [] } },
        { "OperatorNode:and": { associativity: "left", associativeWith: [] } },
        {
          "OperatorNode:bitOr": { associativity: "left", associativeWith: [] },
        },
        {
          "OperatorNode:bitXor": { associativity: "left", associativeWith: [] },
        },
        {
          "OperatorNode:bitAnd": { associativity: "left", associativeWith: [] },
        },
        {
          "OperatorNode:equal": { associativity: "left", associativeWith: [] },
          "OperatorNode:unequal": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:smaller": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:larger": { associativity: "left", associativeWith: [] },
          "OperatorNode:smallerEq": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:largerEq": {
            associativity: "left",
            associativeWith: [],
          },
          RelationalNode: { associativity: "left", associativeWith: [] },
        },
        {
          "OperatorNode:leftShift": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:rightArithShift": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:rightLogShift": {
            associativity: "left",
            associativeWith: [],
          },
        },
        { "OperatorNode:to": { associativity: "left", associativeWith: [] } },
        { RangeNode: {} },
        {
          "OperatorNode:add": {
            associativity: "left",
            associativeWith: ["OperatorNode:add", "OperatorNode:subtract"],
          },
          "OperatorNode:subtract": {
            associativity: "left",
            associativeWith: [],
          },
        },
        {
          "OperatorNode:multiply": {
            associativity: "left",
            associativeWith: [
              "OperatorNode:multiply",
              "OperatorNode:divide",
              "Operator:dotMultiply",
              "Operator:dotDivide",
            ],
          },
          "OperatorNode:divide": {
            associativity: "left",
            associativeWith: [],
            latexLeftParens: !1,
            latexRightParens: !1,
            latexParens: !1,
          },
          "OperatorNode:dotMultiply": {
            associativity: "left",
            associativeWith: [
              "OperatorNode:multiply",
              "OperatorNode:divide",
              "OperatorNode:dotMultiply",
              "OperatorNode:doDivide",
            ],
          },
          "OperatorNode:dotDivide": {
            associativity: "left",
            associativeWith: [],
          },
          "OperatorNode:mod": { associativity: "left", associativeWith: [] },
        },
        {
          "OperatorNode:unaryPlus": { associativity: "right" },
          "OperatorNode:unaryMinus": { associativity: "right" },
          "OperatorNode:bitNot": { associativity: "right" },
          "OperatorNode:not": { associativity: "right" },
        },
        {
          "OperatorNode:pow": {
            associativity: "right",
            associativeWith: [],
            latexRightParens: !1,
          },
          "OperatorNode:dotPow": {
            associativity: "right",
            associativeWith: [],
          },
        },
        { "OperatorNode:factorial": { associativity: "left" } },
        { "OperatorNode:transpose": { associativity: "left" } },
      ];
      function kl(e, t) {
        var r = e;
        "keep" !== t && (r = e.getContent());
        for (var n = r.getIdentifier(), a = 0; a < Ml.length; a++)
          if (n in Ml[a]) return a;
        return null;
      }
      function jl(e, t) {
        var r = e;
        "keep" !== t && (r = e.getContent());
        var n = r.getIdentifier(),
          a = kl(r, t);
        if (null === a) return null;
        var o = Ml[a][n];
        if (ie(o, "associativity")) {
          if ("left" === o.associativity) return "left";
          if ("right" === o.associativity) return "right";
          throw Error(
            "'" +
              n +
              "' has the invalid associativity '" +
              o.associativity +
              "'."
          );
        }
        return null;
      }
      function ql(e, t, r) {
        var n = "keep" !== r ? e.getContent() : e,
          a = "keep" !== r ? e.getContent() : t,
          o = n.getIdentifier(),
          i = a.getIdentifier(),
          s = kl(n, r);
        if (null === s) return null;
        var u = Ml[s][o];
        if (ie(u, "associativeWith") && u.associativeWith instanceof Array) {
          for (var c = 0; c < u.associativeWith.length; c++)
            if (u.associativeWith[c] === i) return !0;
          return !1;
        }
        return null;
      }
      var Pl,
        Fl,
        Il = ge(
          "AssignmentNode",
          ["subset", "?matrix", "Node"],
          (e) => {
            var { subset: t, matrix: r, Node: n } = e,
              a = wl({ subset: t }),
              o = Tl({ subset: t, matrix: r });
            function i(e, t, r) {
              if (!(this instanceof i))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (
                ((this.object = e),
                (this.index = r ? t : null),
                (this.value = r || t),
                !V(e) && !P(e))
              )
                throw new TypeError(
                  'SymbolNode or AccessorNode expected as "object"'
                );
              if (V(e) && "end" === e.name)
                throw new Error('Cannot assign to symbol "end"');
              if (this.index && !L(this.index))
                throw new TypeError('IndexNode expected as "index"');
              if (!$(this.value))
                throw new TypeError('Node expected as "value"');
              Object.defineProperty(this, "name", {
                get: function () {
                  return this.index
                    ? this.index.isObjectProperty()
                      ? this.index.getObjectProperty()
                      : ""
                    : this.object.name || "";
                }.bind(this),
                set: function e() {
                  throw new Error(
                    "Cannot assign a new name, name is read-only"
                  );
                },
              });
            }
            function s(e, t) {
              t || (t = "keep");
              var r = kl(e, t),
                n = kl(e.value, t);
              return "all" === t || (null !== n && n <= r);
            }
            return (
              (i.prototype = new n()),
              (i.prototype.type = "AssignmentNode"),
              (i.prototype.isAssignmentNode = !0),
              (i.prototype._compile = function (e, t) {
                var r = this.object._compile(e, t),
                  n = this.index ? this.index._compile(e, t) : null,
                  i = this.value._compile(e, t),
                  s = this.object.name;
                if (this.index) {
                  if (this.index.isObjectProperty()) {
                    var u = this.index.getObjectProperty();
                    return function e(t, n, a) {
                      var o = r(t, n, a),
                        s = i(t, n, a);
                      return dn(o, u, s), s;
                    };
                  }
                  if (V(this.object))
                    return function e(t, a, u) {
                      var c = r(t, a, u),
                        l = i(t, a, u),
                        p = n(t, a, c);
                      return t.set(s, o(c, p, l)), l;
                    };
                  var c = this.object.object._compile(e, t);
                  if (this.object.index.isObjectProperty()) {
                    var l = this.object.index.getObjectProperty();
                    return function e(t, r, a) {
                      var s = c(t, r, a),
                        u = hn(s, l),
                        p = n(t, r, u),
                        f = i(t, r, a);
                      return dn(s, l, o(u, p, f)), f;
                    };
                  }
                  var p = this.object.index._compile(e, t);
                  return function e(t, r, s) {
                    var u = c(t, r, s),
                      l = p(t, r, u),
                      f = a(u, l),
                      m = n(t, r, f),
                      h = i(t, r, s);
                    return o(u, l, o(f, m, h)), h;
                  };
                }
                if (!V(this.object))
                  throw new TypeError("SymbolNode expected as object");
                return function e(t, r, n) {
                  var a = i(t, r, n);
                  return t.set(s, a), a;
                };
              }),
              (i.prototype.forEach = function (e) {
                e(this.object, "object", this),
                  this.index && e(this.index, "index", this),
                  e(this.value, "value", this);
              }),
              (i.prototype.map = function (e) {
                var t, r, n;
                return new i(
                  this._ifNode(e(this.object, "object", this)),
                  this.index
                    ? this._ifNode(e(this.index, "index", this))
                    : null,
                  this._ifNode(e(this.value, "value", this))
                );
              }),
              (i.prototype.clone = function () {
                return new i(this.object, this.index, this.value);
              }),
              (i.prototype._toString = function (e) {
                var t = this.object.toString(e),
                  r = this.index ? this.index.toString(e) : "",
                  n = this.value.toString(e);
                return (
                  s(this, e && e.parenthesis) && (n = "(" + n + ")"),
                  t + r + " = " + n
                );
              }),
              (i.prototype.toJSON = function () {
                return {
                  mathjs: "AssignmentNode",
                  object: this.object,
                  index: this.index,
                  value: this.value,
                };
              }),
              (i.fromJSON = function (e) {
                return new i(e.object, e.index, e.value);
              }),
              (i.prototype.toHTML = function (e) {
                var t = this.object.toHTML(e),
                  r = this.index ? this.index.toHTML(e) : "",
                  n = this.value.toHTML(e);
                return (
                  s(this, e && e.parenthesis) &&
                    (n =
                      '<span class="math-paranthesis math-round-parenthesis">(</span>' +
                      n +
                      '<span class="math-paranthesis math-round-parenthesis">)</span>'),
                  t +
                    r +
                    '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' +
                    n
                );
              }),
              (i.prototype._toTex = function (e) {
                var t = this.object.toTex(e),
                  r = this.index ? this.index.toTex(e) : "",
                  n = this.value.toTex(e);
                return (
                  s(this, e && e.parenthesis) &&
                    (n = "\\left(".concat(n, "\\right)")),
                  t + r + ":=" + n
                );
              }),
              i
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        Rl,
        Bl,
        Dl = ge(
          "BlockNode",
          ["ResultSet", "Node"],
          (e) => {
            var { ResultSet: t, Node: r } = e;
            function n(e) {
              if (!(this instanceof n))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!Array.isArray(e)) throw new Error("Array expected");
              this.blocks = e.map(function (e) {
                var t = e && e.node,
                  r = !e || void 0 === e.visible || e.visible;
                if (!$(t))
                  throw new TypeError('Property "node" must be a Node');
                if ("boolean" != typeof r)
                  throw new TypeError('Property "visible" must be a boolean');
                return { node: t, visible: r };
              });
            }
            return (
              (n.prototype = new r()),
              (n.prototype.type = "BlockNode"),
              (n.prototype.isBlockNode = !0),
              (n.prototype._compile = function (e, r) {
                var n = De(this.blocks, function (t) {
                  return {
                    evaluate: t.node._compile(e, r),
                    visible: t.visible,
                  };
                });
                return function e(r, a, o) {
                  var i = [];
                  return (
                    ze(n, function e(t) {
                      var n = t.evaluate(r, a, o);
                      t.visible && i.push(n);
                    }),
                    new t(i)
                  );
                };
              }),
              (n.prototype.forEach = function (e) {
                for (var t = 0; t < this.blocks.length; t++)
                  e(this.blocks[t].node, "blocks[" + t + "].node", this);
              }),
              (n.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.blocks.length; r++) {
                  var a = this.blocks[r],
                    o = this._ifNode(e(a.node, "blocks[" + r + "].node", this));
                  t[r] = { node: o, visible: a.visible };
                }
                return new n(t);
              }),
              (n.prototype.clone = function () {
                var e;
                return new n(
                  this.blocks.map(function (e) {
                    return { node: e.node, visible: e.visible };
                  })
                );
              }),
              (n.prototype._toString = function (e) {
                return this.blocks
                  .map(function (t) {
                    return t.node.toString(e) + (t.visible ? "" : ";");
                  })
                  .join("\n");
              }),
              (n.prototype.toJSON = function () {
                return { mathjs: "BlockNode", blocks: this.blocks };
              }),
              (n.fromJSON = function (e) {
                return new n(e.blocks);
              }),
              (n.prototype.toHTML = function (e) {
                return this.blocks
                  .map(function (t) {
                    return (
                      t.node.toHTML(e) +
                      (t.visible ? "" : '<span class="math-separator">;</span>')
                    );
                  })
                  .join('<span class="math-separator"><br /></span>');
              }),
              (n.prototype._toTex = function (e) {
                return this.blocks
                  .map(function (t) {
                    return t.node.toTex(e) + (t.visible ? "" : ";");
                  })
                  .join("\\;\\;\n");
              }),
              n
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        zl,
        _l,
        Ll = ge(
          "ConditionalNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e, t, n) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!$(e))
                throw new TypeError("Parameter condition must be a Node");
              if (!$(t))
                throw new TypeError("Parameter trueExpr must be a Node");
              if (!$(n))
                throw new TypeError("Parameter falseExpr must be a Node");
              (this.condition = e), (this.trueExpr = t), (this.falseExpr = n);
            }
            function n(e) {
              if (
                "number" == typeof e ||
                "boolean" == typeof e ||
                "string" == typeof e
              )
                return !!e;
              if (e) {
                if (f(e)) return !e.isZero();
                if (m(e)) return !(!e.re && !e.im);
                if (d(e)) return !!e.value;
              }
              if (null == e) return !1;
              throw new TypeError(
                'Unsupported type of condition "' + G(e) + '"'
              );
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "ConditionalNode"),
              (r.prototype.isConditionalNode = !0),
              (r.prototype._compile = function (e, t) {
                var r = this.condition._compile(e, t),
                  a = this.trueExpr._compile(e, t),
                  o = this.falseExpr._compile(e, t);
                return function e(t, i, s) {
                  return n(r(t, i, s)) ? a(t, i, s) : o(t, i, s);
                };
              }),
              (r.prototype.forEach = function (e) {
                e(this.condition, "condition", this),
                  e(this.trueExpr, "trueExpr", this),
                  e(this.falseExpr, "falseExpr", this);
              }),
              (r.prototype.map = function (e) {
                return new r(
                  this._ifNode(e(this.condition, "condition", this)),
                  this._ifNode(e(this.trueExpr, "trueExpr", this)),
                  this._ifNode(e(this.falseExpr, "falseExpr", this))
                );
              }),
              (r.prototype.clone = function () {
                return new r(this.condition, this.trueExpr, this.falseExpr);
              }),
              (r.prototype._toString = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = kl(this, t),
                  n = this.condition.toString(e),
                  a = kl(this.condition, t);
                ("all" === t ||
                  "OperatorNode" === this.condition.type ||
                  (null !== a && a <= r)) &&
                  (n = "(" + n + ")");
                var o = this.trueExpr.toString(e),
                  i = kl(this.trueExpr, t);
                ("all" === t ||
                  "OperatorNode" === this.trueExpr.type ||
                  (null !== i && i <= r)) &&
                  (o = "(" + o + ")");
                var s = this.falseExpr.toString(e),
                  u = kl(this.falseExpr, t);
                return (
                  ("all" === t ||
                    "OperatorNode" === this.falseExpr.type ||
                    (null !== u && u <= r)) &&
                    (s = "(" + s + ")"),
                  n + " ? " + o + " : " + s
                );
              }),
              (r.prototype.toJSON = function () {
                return {
                  mathjs: "ConditionalNode",
                  condition: this.condition,
                  trueExpr: this.trueExpr,
                  falseExpr: this.falseExpr,
                };
              }),
              (r.fromJSON = function (e) {
                return new r(e.condition, e.trueExpr, e.falseExpr);
              }),
              (r.prototype.toHTML = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = kl(this, t),
                  n = this.condition.toHTML(e),
                  a = kl(this.condition, t);
                ("all" === t ||
                  "OperatorNode" === this.condition.type ||
                  (null !== a && a <= r)) &&
                  (n =
                    '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                    n +
                    '<span class="math-parenthesis math-round-parenthesis">)</span>');
                var o = this.trueExpr.toHTML(e),
                  i = kl(this.trueExpr, t);
                ("all" === t ||
                  "OperatorNode" === this.trueExpr.type ||
                  (null !== i && i <= r)) &&
                  (o =
                    '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                    o +
                    '<span class="math-parenthesis math-round-parenthesis">)</span>');
                var s = this.falseExpr.toHTML(e),
                  u = kl(this.falseExpr, t);
                return (
                  ("all" === t ||
                    "OperatorNode" === this.falseExpr.type ||
                    (null !== u && u <= r)) &&
                    (s =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      s +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                  n +
                    '<span class="math-operator math-conditional-operator">?</span>' +
                    o +
                    '<span class="math-operator math-conditional-operator">:</span>' +
                    s
                );
              }),
              (r.prototype._toTex = function (e) {
                return (
                  "\\begin{cases} {" +
                  this.trueExpr.toTex(e) +
                  "}, &\\quad{\\text{if }\\;" +
                  this.condition.toTex(e) +
                  "}\\\\{" +
                  this.falseExpr.toTex(e) +
                  "}, &\\quad{\\text{otherwise}}\\end{cases}"
                );
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        $l = r(928),
        Ul = {
          Alpha: "A",
          alpha: "\\alpha",
          Beta: "B",
          beta: "\\beta",
          Gamma: "\\Gamma",
          gamma: "\\gamma",
          Delta: "\\Delta",
          delta: "\\delta",
          Epsilon: "E",
          epsilon: "\\epsilon",
          varepsilon: "\\varepsilon",
          Zeta: "Z",
          zeta: "\\zeta",
          Eta: "H",
          eta: "\\eta",
          Theta: "\\Theta",
          theta: "\\theta",
          vartheta: "\\vartheta",
          Iota: "I",
          iota: "\\iota",
          Kappa: "K",
          kappa: "\\kappa",
          varkappa: "\\varkappa",
          Lambda: "\\Lambda",
          lambda: "\\lambda",
          Mu: "M",
          mu: "\\mu",
          Nu: "N",
          nu: "\\nu",
          Xi: "\\Xi",
          xi: "\\xi",
          Omicron: "O",
          omicron: "o",
          Pi: "\\Pi",
          pi: "\\pi",
          varpi: "\\varpi",
          Rho: "P",
          rho: "\\rho",
          varrho: "\\varrho",
          Sigma: "\\Sigma",
          sigma: "\\sigma",
          varsigma: "\\varsigma",
          Tau: "T",
          tau: "\\tau",
          Upsilon: "\\Upsilon",
          upsilon: "\\upsilon",
          Phi: "\\Phi",
          phi: "\\phi",
          varphi: "\\varphi",
          Chi: "X",
          chi: "\\chi",
          Psi: "\\Psi",
          psi: "\\psi",
          Omega: "\\Omega",
          omega: "\\omega",
          true: "\\mathrm{True}",
          false: "\\mathrm{False}",
          i: "i",
          inf: "\\infty",
          Inf: "\\infty",
          infinity: "\\infty",
          Infinity: "\\infty",
          oo: "\\infty",
          lim: "\\lim",
          undefined: "\\mathbf{?}",
        },
        Wl = {
          transpose: "^\\top",
          ctranspose: "^H",
          factorial: "!",
          pow: "^",
          dotPow: ".^\\wedge",
          unaryPlus: "+",
          unaryMinus: "-",
          bitNot: "\\~",
          not: "\\neg",
          multiply: "\\cdot",
          divide: "\\frac",
          dotMultiply: ".\\cdot",
          dotDivide: ".:",
          mod: "\\mod",
          add: "+",
          subtract: "-",
          to: "\\rightarrow",
          leftShift: "<<",
          rightArithShift: ">>",
          rightLogShift: ">>>",
          equal: "=",
          unequal: "\\neq",
          smaller: "<",
          larger: ">",
          smallerEq: "\\leq",
          largerEq: "\\geq",
          bitAnd: "\\&",
          bitXor: "\\underline{|}",
          bitOr: "|",
          and: "\\wedge",
          xor: "\\veebar",
          or: "\\vee",
        },
        Hl = {
          abs: { 1: "\\left|${args[0]}\\right|" },
          add: { 2: "\\left(${args[0]}".concat(Wl.add, "${args[1]}\\right)") },
          cbrt: { 1: "\\sqrt[3]{${args[0]}}" },
          ceil: { 1: "\\left\\lceil${args[0]}\\right\\rceil" },
          cube: { 1: "\\left(${args[0]}\\right)^3" },
          divide: { 2: "\\frac{${args[0]}}{${args[1]}}" },
          dotDivide: {
            2: "\\left(${args[0]}".concat(Wl.dotDivide, "${args[1]}\\right)"),
          },
          dotMultiply: {
            2: "\\left(${args[0]}".concat(Wl.dotMultiply, "${args[1]}\\right)"),
          },
          dotPow: {
            2: "\\left(${args[0]}".concat(Wl.dotPow, "${args[1]}\\right)"),
          },
          exp: { 1: "\\exp\\left(${args[0]}\\right)" },
          expm1: "\\left(e".concat(Wl.pow, "{${args[0]}}-1\\right)"),
          fix: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" },
          floor: { 1: "\\left\\lfloor${args[0]}\\right\\rfloor" },
          gcd: "\\gcd\\left(${args}\\right)",
          hypot: "\\hypot\\left(${args}\\right)",
          log: {
            1: "\\ln\\left(${args[0]}\\right)",
            2: "\\log_{${args[1]}}\\left(${args[0]}\\right)",
          },
          log10: { 1: "\\log_{10}\\left(${args[0]}\\right)" },
          log1p: {
            1: "\\ln\\left(${args[0]}+1\\right)",
            2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)",
          },
          log2: "\\log_{2}\\left(${args[0]}\\right)",
          mod: { 2: "\\left(${args[0]}".concat(Wl.mod, "${args[1]}\\right)") },
          multiply: {
            2: "\\left(${args[0]}".concat(Wl.multiply, "${args[1]}\\right)"),
          },
          norm: { 1: "\\left\\|${args[0]}\\right\\|", 2: void 0 },
          nthRoot: { 2: "\\sqrt[${args[1]}]{${args[0]}}" },
          nthRoots: { 2: "\\{y : $y^{args[1]} = {${args[0]}}\\}" },
          pow: {
            2: "\\left(${args[0]}\\right)".concat(Wl.pow, "{${args[1]}}"),
          },
          round: { 1: "\\left\\lfloor${args[0]}\\right\\rceil", 2: void 0 },
          sign: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" },
          sqrt: { 1: "\\sqrt{${args[0]}}" },
          square: { 1: "\\left(${args[0]}\\right)^2" },
          subtract: {
            2: "\\left(${args[0]}".concat(Wl.subtract, "${args[1]}\\right)"),
          },
          unaryMinus: {
            1: "".concat(Wl.unaryMinus, "\\left(${args[0]}\\right)"),
          },
          unaryPlus: {
            1: "".concat(Wl.unaryPlus, "\\left(${args[0]}\\right)"),
          },
          bitAnd: {
            2: "\\left(${args[0]}".concat(Wl.bitAnd, "${args[1]}\\right)"),
          },
          bitNot: { 1: Wl.bitNot + "\\left(${args[0]}\\right)" },
          bitOr: {
            2: "\\left(${args[0]}".concat(Wl.bitOr, "${args[1]}\\right)"),
          },
          bitXor: {
            2: "\\left(${args[0]}".concat(Wl.bitXor, "${args[1]}\\right)"),
          },
          leftShift: {
            2: "\\left(${args[0]}".concat(Wl.leftShift, "${args[1]}\\right)"),
          },
          rightArithShift: {
            2: "\\left(${args[0]}".concat(
              Wl.rightArithShift,
              "${args[1]}\\right)"
            ),
          },
          rightLogShift: {
            2: "\\left(${args[0]}".concat(
              Wl.rightLogShift,
              "${args[1]}\\right)"
            ),
          },
          bellNumbers: { 1: "\\mathrm{B}_{${args[0]}}" },
          catalan: { 1: "\\mathrm{C}_{${args[0]}}" },
          stirlingS2: { 2: "\\mathrm{S}\\left(${args}\\right)" },
          arg: { 1: "\\arg\\left(${args[0]}\\right)" },
          conj: { 1: "\\left(${args[0]}\\right)^*" },
          im: { 1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace" },
          re: { 1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace" },
          and: { 2: "\\left(${args[0]}".concat(Wl.and, "${args[1]}\\right)") },
          not: { 1: Wl.not + "\\left(${args[0]}\\right)" },
          or: { 2: "\\left(${args[0]}".concat(Wl.or, "${args[1]}\\right)") },
          xor: { 2: "\\left(${args[0]}".concat(Wl.xor, "${args[1]}\\right)") },
          cross: {
            2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)",
          },
          ctranspose: { 1: "\\left(${args[0]}\\right)".concat(Wl.ctranspose) },
          det: { 1: "\\det\\left(${args[0]}\\right)" },
          dot: { 2: "\\left(${args[0]}\\cdot${args[1]}\\right)" },
          expm: { 1: "\\exp\\left(${args[0]}\\right)" },
          inv: { 1: "\\left(${args[0]}\\right)^{-1}" },
          sqrtm: { 1: "{${args[0]}}".concat(Wl.pow, "{\\frac{1}{2}}") },
          trace: { 1: "\\mathrm{tr}\\left(${args[0]}\\right)" },
          transpose: { 1: "\\left(${args[0]}\\right)".concat(Wl.transpose) },
          combinations: { 2: "\\binom{${args[0]}}{${args[1]}}" },
          combinationsWithRep: {
            2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)",
          },
          factorial: { 1: "\\left(${args[0]}\\right)".concat(Wl.factorial) },
          gamma: { 1: "\\Gamma\\left(${args[0]}\\right)" },
          equal: {
            2: "\\left(${args[0]}".concat(Wl.equal, "${args[1]}\\right)"),
          },
          larger: {
            2: "\\left(${args[0]}".concat(Wl.larger, "${args[1]}\\right)"),
          },
          largerEq: {
            2: "\\left(${args[0]}".concat(Wl.largerEq, "${args[1]}\\right)"),
          },
          smaller: {
            2: "\\left(${args[0]}".concat(Wl.smaller, "${args[1]}\\right)"),
          },
          smallerEq: {
            2: "\\left(${args[0]}".concat(Wl.smallerEq, "${args[1]}\\right)"),
          },
          unequal: {
            2: "\\left(${args[0]}".concat(Wl.unequal, "${args[1]}\\right)"),
          },
          erf: { 1: "erf\\left(${args[0]}\\right)" },
          max: "\\max\\left(${args}\\right)",
          min: "\\min\\left(${args}\\right)",
          variance: "\\mathrm{Var}\\left(${args}\\right)",
          acos: { 1: "\\cos^{-1}\\left(${args[0]}\\right)" },
          acosh: { 1: "\\cosh^{-1}\\left(${args[0]}\\right)" },
          acot: { 1: "\\cot^{-1}\\left(${args[0]}\\right)" },
          acoth: { 1: "\\coth^{-1}\\left(${args[0]}\\right)" },
          acsc: { 1: "\\csc^{-1}\\left(${args[0]}\\right)" },
          acsch: { 1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)" },
          asec: { 1: "\\sec^{-1}\\left(${args[0]}\\right)" },
          asech: { 1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)" },
          asin: { 1: "\\sin^{-1}\\left(${args[0]}\\right)" },
          asinh: { 1: "\\sinh^{-1}\\left(${args[0]}\\right)" },
          atan: { 1: "\\tan^{-1}\\left(${args[0]}\\right)" },
          atan2: { 2: "\\mathrm{atan2}\\left(${args}\\right)" },
          atanh: { 1: "\\tanh^{-1}\\left(${args[0]}\\right)" },
          cos: { 1: "\\cos\\left(${args[0]}\\right)" },
          cosh: { 1: "\\cosh\\left(${args[0]}\\right)" },
          cot: { 1: "\\cot\\left(${args[0]}\\right)" },
          coth: { 1: "\\coth\\left(${args[0]}\\right)" },
          csc: { 1: "\\csc\\left(${args[0]}\\right)" },
          csch: { 1: "\\mathrm{csch}\\left(${args[0]}\\right)" },
          sec: { 1: "\\sec\\left(${args[0]}\\right)" },
          sech: { 1: "\\mathrm{sech}\\left(${args[0]}\\right)" },
          sin: { 1: "\\sin\\left(${args[0]}\\right)" },
          sinh: { 1: "\\sinh\\left(${args[0]}\\right)" },
          tan: { 1: "\\tan\\left(${args[0]}\\right)" },
          tanh: { 1: "\\tanh\\left(${args[0]}\\right)" },
          to: { 2: "\\left(${args[0]}".concat(Wl.to, "${args[1]}\\right)") },
          numeric: function e(t, r) {
            return t.args[0].toTex();
          },
          number: {
            0: "0",
            1: "\\left(${args[0]}\\right)",
            2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)",
          },
          string: {
            0: '\\mathtt{""}',
            1: "\\mathrm{string}\\left(${args[0]}\\right)",
          },
          bignumber: { 0: "0", 1: "\\left(${args[0]}\\right)" },
          complex: {
            0: "0",
            1: "\\left(${args[0]}\\right)",
            2: "\\left(\\left(${args[0]}\\right)+".concat(
              Ul.i,
              "\\cdot\\left(${args[1]}\\right)\\right)"
            ),
          },
          matrix: {
            0: "\\begin{bmatrix}\\end{bmatrix}",
            1: "\\left(${args[0]}\\right)",
            2: "\\left(${args[0]}\\right)",
          },
          sparse: {
            0: "\\begin{bsparse}\\end{bsparse}",
            1: "\\left(${args[0]}\\right)",
          },
          unit: {
            1: "\\left(${args[0]}\\right)",
            2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)",
          },
        },
        Jl = "\\mathrm{${name}}\\left(${args}\\right)",
        Vl = { deg: "^\\circ" };
      function Xl(e) {
        return $l(e, { preserveFormatting: !0 });
      }
      function Gl(e, t) {
        return (t = void 0 !== t && t)
          ? ie(Vl, e)
            ? Vl[e]
            : "\\mathrm{" + Xl(e) + "}"
          : ie(Ul, e)
          ? Ul[e]
          : Xl(e);
      }
      var Ql,
        Zl,
        Yl = ge(
          "ConstantNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              this.value = e;
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "ConstantNode"),
              (r.prototype.isConstantNode = !0),
              (r.prototype._compile = function (e, t) {
                var r = this.value;
                return function e() {
                  return r;
                };
              }),
              (r.prototype.forEach = function (e) {}),
              (r.prototype.map = function (e) {
                return this.clone();
              }),
              (r.prototype.clone = function () {
                return new r(this.value);
              }),
              (r.prototype._toString = function (e) {
                return Gn(this.value, e);
              }),
              (r.prototype.toHTML = function (e) {
                var t = this._toString(e);
                switch (G(this.value)) {
                  case "number":
                  case "BigNumber":
                  case "Fraction":
                    return '<span class="math-number">' + t + "</span>";
                  case "string":
                    return '<span class="math-string">' + t + "</span>";
                  case "boolean":
                    return '<span class="math-boolean">' + t + "</span>";
                  case "null":
                    return '<span class="math-null-symbol">' + t + "</span>";
                  case "undefined":
                    return '<span class="math-undefined">' + t + "</span>";
                  default:
                    return '<span class="math-symbol">' + t + "</span>";
                }
              }),
              (r.prototype.toJSON = function () {
                return { mathjs: "ConstantNode", value: this.value };
              }),
              (r.fromJSON = function (e) {
                return new r(e.value);
              }),
              (r.prototype._toTex = function (e) {
                var t = this._toString(e);
                switch (G(this.value)) {
                  case "string":
                    return "\\mathtt{" + Xl(t) + "}";
                  case "number":
                  case "BigNumber":
                    if (!isFinite(this.value))
                      return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
                    var r = t.toLowerCase().indexOf("e");
                    return -1 !== r
                      ? t.substring(0, r) +
                          "\\cdot10^{" +
                          t.substring(r + 1) +
                          "}"
                      : t;
                  case "Fraction":
                    return this.value.toLatex();
                  default:
                    return t;
                }
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        Kl,
        ep,
        tp = ge(
          "FunctionAssignmentNode",
          ["typed", "Node"],
          (e) => {
            var { typed: t, Node: r } = e;
            function n(e, t, r) {
              if (!(this instanceof n))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if ("string" != typeof e)
                throw new TypeError('String expected for parameter "name"');
              if (!Array.isArray(t))
                throw new TypeError(
                  'Array containing strings or objects expected for parameter "params"'
                );
              if (!$(r))
                throw new TypeError('Node expected for parameter "expr"');
              if (gl.has(e))
                throw new Error(
                  'Illegal function name, "' + e + '" is a reserved keyword'
                );
              (this.name = e),
                (this.params = t.map(function (e) {
                  return (e && e.name) || e;
                })),
                (this.types = t.map(function (e) {
                  return (e && e.type) || "any";
                })),
                (this.expr = r);
            }
            function a(e, t) {
              var r = kl(e, t),
                n = kl(e.expr, t);
              return "all" === t || (null !== n && n <= r);
            }
            return (
              (n.prototype = new r()),
              (n.prototype.type = "FunctionAssignmentNode"),
              (n.prototype.isFunctionAssignmentNode = !0),
              (n.prototype._compile = function (e, r) {
                var n = Object.create(r);
                ze(this.params, function (e) {
                  n[e] = !0;
                });
                var a = this.expr._compile(e, n),
                  o = this.name,
                  i = this.params,
                  s = $e(this.types, ","),
                  u = o + "(" + $e(this.params, ", ") + ")";
                return function e(r, n, c) {
                  var l = {};
                  l[s] = function () {
                    for (var e = Object.create(n), t = 0; t < i.length; t++)
                      e[i[t]] = arguments[t];
                    return a(r, e, c);
                  };
                  var p = t(o, l);
                  return (p.syntax = u), r.set(o, p), p;
                };
              }),
              (n.prototype.forEach = function (e) {
                e(this.expr, "expr", this);
              }),
              (n.prototype.map = function (e) {
                var t = this._ifNode(e(this.expr, "expr", this));
                return new n(this.name, this.params.slice(0), t);
              }),
              (n.prototype.clone = function () {
                return new n(this.name, this.params.slice(0), this.expr);
              }),
              (n.prototype._toString = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = this.expr.toString(e);
                return (
                  a(this, t) && (r = "(" + r + ")"),
                  this.name + "(" + this.params.join(", ") + ") = " + r
                );
              }),
              (n.prototype.toJSON = function () {
                var e = this.types;
                return {
                  mathjs: "FunctionAssignmentNode",
                  name: this.name,
                  params: this.params.map(function (t, r) {
                    return { name: t, type: e[r] };
                  }),
                  expr: this.expr,
                };
              }),
              (n.fromJSON = function (e) {
                return new n(e.name, e.params, e.expr);
              }),
              (n.prototype.toHTML = function (e) {
                for (
                  var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = [],
                    n = 0;
                  n < this.params.length;
                  n++
                )
                  r.push(
                    '<span class="math-symbol math-parameter">' +
                      Zn(this.params[n]) +
                      "</span>"
                  );
                var o = this.expr.toHTML(e);
                return (
                  a(this, t) &&
                    (o =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      o +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                  '<span class="math-function">' +
                    Zn(this.name) +
                    '</span><span class="math-parenthesis math-round-parenthesis">(</span>' +
                    r.join('<span class="math-separator">,</span>') +
                    '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' +
                    o
                );
              }),
              (n.prototype._toTex = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = this.expr.toTex(e);
                return (
                  a(this, t) && (r = "\\left(".concat(r, "\\right)")),
                  "\\mathrm{" +
                    this.name +
                    "}\\left(" +
                    this.params.map(Gl).join(",") +
                    "\\right):=" +
                    r
                );
              }),
              n
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        rp,
        np,
        ap = ge(
          "IndexNode",
          ["Range", "Node", "size"],
          (e) => {
            var { Range: t, Node: r, size: n } = e;
            function a(e, t) {
              if (!(this instanceof a))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (
                ((this.dimensions = e),
                (this.dotNotation = t || !1),
                !Array.isArray(e) || !e.every($))
              )
                throw new TypeError(
                  'Array containing Nodes expected for parameter "dimensions"'
                );
              if (this.dotNotation && !this.isObjectProperty())
                throw new Error(
                  "dotNotation only applicable for object properties"
                );
            }
            function o(e, r, n) {
              return new t(
                f(e) ? e.toNumber() : e,
                f(r) ? r.toNumber() : r,
                f(n) ? n.toNumber() : n
              );
            }
            return (
              (a.prototype = new r()),
              (a.prototype.type = "IndexNode"),
              (a.prototype.isIndexNode = !0),
              (a.prototype._compile = function (e, t) {
                var r = De(this.dimensions, function (r, a) {
                    if (J(r)) {
                      if (r.needsEnd()) {
                        var i = Object.create(t);
                        i.end = !0;
                        var s = r.start._compile(e, i),
                          u = r.end._compile(e, i),
                          c = r.step
                            ? r.step._compile(e, i)
                            : function () {
                                return 1;
                              };
                        return function e(t, r, i) {
                          var l = n(i).valueOf(),
                            p = Object.create(r);
                          return (
                            (p.end = l[a]),
                            o(s(t, p, i), u(t, p, i), c(t, p, i))
                          );
                        };
                      }
                      var l = r.start._compile(e, t),
                        p = r.end._compile(e, t),
                        f = r.step
                          ? r.step._compile(e, t)
                          : function () {
                              return 1;
                            };
                      return function e(t, r, n) {
                        return o(l(t, r, n), p(t, r, n), f(t, r, n));
                      };
                    }
                    if (V(r) && "end" === r.name) {
                      var m = Object.create(t);
                      m.end = !0;
                      var h = r._compile(e, m);
                      return function e(t, r, o) {
                        var i = n(o).valueOf(),
                          s = Object.create(r);
                        return (s.end = i[a]), h(t, s, o);
                      };
                    }
                    var d = r._compile(e, t);
                    return function e(t, r, n) {
                      return d(t, r, n);
                    };
                  }),
                  a = hn(e, "index");
                return function e(t, n, o) {
                  var i = De(r, function (e) {
                    return e(t, n, o);
                  });
                  return a(...i);
                };
              }),
              (a.prototype.forEach = function (e) {
                for (var t = 0; t < this.dimensions.length; t++)
                  e(this.dimensions[t], "dimensions[" + t + "]", this);
              }),
              (a.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.dimensions.length; r++)
                  t[r] = this._ifNode(
                    e(this.dimensions[r], "dimensions[" + r + "]", this)
                  );
                return new a(t, this.dotNotation);
              }),
              (a.prototype.clone = function () {
                return new a(this.dimensions.slice(0), this.dotNotation);
              }),
              (a.prototype.isObjectProperty = function () {
                return (
                  1 === this.dimensions.length &&
                  D(this.dimensions[0]) &&
                  "string" == typeof this.dimensions[0].value
                );
              }),
              (a.prototype.getObjectProperty = function () {
                return this.isObjectProperty()
                  ? this.dimensions[0].value
                  : null;
              }),
              (a.prototype._toString = function (e) {
                return this.dotNotation
                  ? "." + this.getObjectProperty()
                  : "[" + this.dimensions.join(", ") + "]";
              }),
              (a.prototype.toJSON = function () {
                return {
                  mathjs: "IndexNode",
                  dimensions: this.dimensions,
                  dotNotation: this.dotNotation,
                };
              }),
              (a.fromJSON = function (e) {
                return new a(e.dimensions, e.dotNotation);
              }),
              (a.prototype.toHTML = function (e) {
                for (var t = [], r = 0; r < this.dimensions.length; r++)
                  t[r] = this.dimensions[r].toHTML();
                return this.dotNotation
                  ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' +
                      Zn(this.getObjectProperty()) +
                      "</span>"
                  : '<span class="math-parenthesis math-square-parenthesis">[</span>' +
                      t.join('<span class="math-separator">,</span>') +
                      '<span class="math-parenthesis math-square-parenthesis">]</span>';
              }),
              (a.prototype._toTex = function (e) {
                var t = this.dimensions.map(function (t) {
                  return t.toTex(e);
                });
                return this.dotNotation
                  ? "." + this.getObjectProperty()
                  : "_{" + t.join(",") + "}";
              }),
              a
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        op,
        ip,
        sp = ge(
          "ObjectNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (
                ((this.properties = e || {}),
                e &&
                  ("object" != typeof e ||
                    !Object.keys(e).every(function (t) {
                      return $(e[t]);
                    })))
              )
                throw new TypeError("Object containing Nodes expected");
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "ObjectNode"),
              (r.prototype.isObjectNode = !0),
              (r.prototype._compile = function (e, t) {
                var r = {};
                for (var n in this.properties)
                  if (ie(this.properties, n)) {
                    var a = Qn(n),
                      o = JSON.parse(a);
                    if (!vn(this.properties, o))
                      throw new Error('No access to property "' + o + '"');
                    r[o] = this.properties[n]._compile(e, t);
                  }
                return function e(t, n, a) {
                  var o = {};
                  for (var i in r) ie(r, i) && (o[i] = r[i](t, n, a));
                  return o;
                };
              }),
              (r.prototype.forEach = function (e) {
                for (var t in this.properties)
                  ie(this.properties, t) &&
                    e(this.properties[t], "properties[" + Qn(t) + "]", this);
              }),
              (r.prototype.map = function (e) {
                var t = {};
                for (var n in this.properties)
                  ie(this.properties, n) &&
                    (t[n] = this._ifNode(
                      e(this.properties[n], "properties[" + Qn(n) + "]", this)
                    ));
                return new r(t);
              }),
              (r.prototype.clone = function () {
                var e = {};
                for (var t in this.properties)
                  ie(this.properties, t) && (e[t] = this.properties[t]);
                return new r(e);
              }),
              (r.prototype._toString = function (e) {
                var t = [];
                for (var r in this.properties)
                  ie(this.properties, r) &&
                    t.push(Qn(r) + ": " + this.properties[r].toString(e));
                return "{" + t.join(", ") + "}";
              }),
              (r.prototype.toJSON = function () {
                return { mathjs: "ObjectNode", properties: this.properties };
              }),
              (r.fromJSON = function (e) {
                return new r(e.properties);
              }),
              (r.prototype.toHTML = function (e) {
                var t = [];
                for (var r in this.properties)
                  ie(this.properties, r) &&
                    t.push(
                      '<span class="math-symbol math-property">' +
                        Zn(r) +
                        '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' +
                        this.properties[r].toHTML(e)
                    );
                return (
                  '<span class="math-parenthesis math-curly-parenthesis">{</span>' +
                  t.join('<span class="math-separator">,</span>') +
                  '<span class="math-parenthesis math-curly-parenthesis">}</span>'
                );
              }),
              (r.prototype._toTex = function (e) {
                var t = [];
                for (var r in this.properties)
                  ie(this.properties, r) &&
                    t.push(
                      "\\mathbf{" +
                        r +
                        ":} & " +
                        this.properties[r].toTex(e) +
                        "\\\\"
                    );
                return "\\left\\{\\begin{array}{ll}".concat(
                  t.join("\n"),
                  "\\end{array}\\right\\}"
                );
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        up,
        cp,
        lp = ge(
          "OperatorNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e, t, n, a) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if ("string" != typeof e)
                throw new TypeError('string expected for parameter "op"');
              if ("string" != typeof t)
                throw new TypeError('string expected for parameter "fn"');
              if (!Array.isArray(n) || !n.every($))
                throw new TypeError(
                  'Array containing Nodes expected for parameter "args"'
                );
              (this.implicit = !0 === a),
                (this.op = e),
                (this.fn = t),
                (this.args = n || []);
            }
            function n(e, t, r, n, a) {
              var o = kl(e, t),
                i = jl(e, t),
                s;
              if (
                "all" === t ||
                (n.length > 2 &&
                  "OperatorNode:add" !== e.getIdentifier() &&
                  "OperatorNode:multiply" !== e.getIdentifier())
              )
                return n.map(function (e) {
                  switch (e.getContent().type) {
                    case "ArrayNode":
                    case "ConstantNode":
                    case "SymbolNode":
                    case "ParenthesisNode":
                      return !1;
                    default:
                      return !0;
                  }
                });
              switch (n.length) {
                case 0:
                  s = [];
                  break;
                case 1:
                  var u = kl(n[0], t);
                  if (a && null !== u) {
                    var c, l;
                    if (
                      ("keep" === t
                        ? ((c = n[0].getIdentifier()), (l = e.getIdentifier()))
                        : ((c = n[0].getContent().getIdentifier()),
                          (l = e.getContent().getIdentifier())),
                      !1 === Ml[o][l].latexLeftParens)
                    ) {
                      s = [!1];
                      break;
                    }
                    if (!1 === Ml[u][c].latexParens) {
                      s = [!1];
                      break;
                    }
                  }
                  if (null === u) {
                    s = [!1];
                    break;
                  }
                  if (u <= o) {
                    s = [!0];
                    break;
                  }
                  s = [!1];
                  break;
                case 2:
                  var p,
                    f = kl(n[0], t),
                    m = ql(e, n[0], t),
                    h;
                  p = null !== f && ((f === o && "right" === i && !m) || f < o);
                  var d = kl(n[1], t),
                    g = ql(e, n[1], t),
                    y,
                    v,
                    x;
                  if (
                    ((h =
                      null !== d && ((d === o && "left" === i && !g) || d < o)),
                    a)
                  )
                    "keep" === t
                      ? ((y = e.getIdentifier()),
                        (v = e.args[0].getIdentifier()),
                        (x = e.args[1].getIdentifier()))
                      : ((y = e.getContent().getIdentifier()),
                        (v = e.args[0].getContent().getIdentifier()),
                        (x = e.args[1].getContent().getIdentifier())),
                      null !== f &&
                        (!1 === Ml[o][y].latexLeftParens && (p = !1),
                        !1 === Ml[f][v].latexParens && (p = !1)),
                      null !== d &&
                        (!1 === Ml[o][y].latexRightParens && (h = !1),
                        !1 === Ml[d][x].latexParens && (h = !1));
                  s = [p, h];
                  break;
                default:
                  ("OperatorNode:add" !== e.getIdentifier() &&
                    "OperatorNode:multiply" !== e.getIdentifier()) ||
                    (s = n.map(function (r) {
                      var n = kl(r, t),
                        a = ql(e, r, t),
                        s = jl(r, t);
                      return (
                        null !== n && ((o === n && i === s && !a) || n < o)
                      );
                    }));
              }
              return (
                n.length >= 2 &&
                  "OperatorNode:multiply" === e.getIdentifier() &&
                  e.implicit &&
                  "auto" === t &&
                  "hide" === r &&
                  (s = n.map(function (e, t) {
                    var r = "ParenthesisNode" === e.getIdentifier();
                    return !(!s[t] && !r);
                  })),
                s
              );
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "OperatorNode"),
              (r.prototype.isOperatorNode = !0),
              (r.prototype._compile = function (e, t) {
                if ("string" != typeof this.fn || !bn(e, this.fn))
                  throw e[this.fn]
                    ? new Error('No access to function "' + this.fn + '"')
                    : new Error(
                        "Function " +
                          this.fn +
                          ' missing in provided namespace "math"'
                      );
                var r = hn(e, this.fn),
                  n = De(this.args, function (r) {
                    return r._compile(e, t);
                  });
                if (1 === n.length) {
                  var a = n[0];
                  return function e(t, n, o) {
                    return r(a(t, n, o));
                  };
                }
                if (2 === n.length) {
                  var o = n[0],
                    i = n[1];
                  return function e(t, n, a) {
                    return r(o(t, n, a), i(t, n, a));
                  };
                }
                return function e(t, a, o) {
                  return r.apply(
                    null,
                    De(n, function (e) {
                      return e(t, a, o);
                    })
                  );
                };
              }),
              (r.prototype.forEach = function (e) {
                for (var t = 0; t < this.args.length; t++)
                  e(this.args[t], "args[" + t + "]", this);
              }),
              (r.prototype.map = function (e) {
                for (var t = [], n = 0; n < this.args.length; n++)
                  t[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this));
                return new r(this.op, this.fn, t, this.implicit);
              }),
              (r.prototype.clone = function () {
                return new r(
                  this.op,
                  this.fn,
                  this.args.slice(0),
                  this.implicit
                );
              }),
              (r.prototype.isUnary = function () {
                return 1 === this.args.length;
              }),
              (r.prototype.isBinary = function () {
                return 2 === this.args.length;
              }),
              (r.prototype._toString = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = e && e.implicit ? e.implicit : "hide",
                  a = this.args,
                  o = n(this, t, r, a, !1);
                if (1 === a.length) {
                  var i = jl(this, t),
                    s = a[0].toString(e);
                  o[0] && (s = "(" + s + ")");
                  var u = /[a-zA-Z]+/.test(this.op);
                  return "right" === i
                    ? this.op + (u ? " " : "") + s
                    : "left" === i
                    ? s + (u ? " " : "") + this.op
                    : s + this.op;
                }
                if (2 === a.length) {
                  var c = a[0].toString(e),
                    l = a[1].toString(e);
                  return (
                    o[0] && (c = "(" + c + ")"),
                    o[1] && (l = "(" + l + ")"),
                    this.implicit &&
                    "OperatorNode:multiply" === this.getIdentifier() &&
                    "hide" === r
                      ? c + " " + l
                      : c + " " + this.op + " " + l
                  );
                }
                if (
                  a.length > 2 &&
                  ("OperatorNode:add" === this.getIdentifier() ||
                    "OperatorNode:multiply" === this.getIdentifier())
                ) {
                  var p = a.map(function (t, r) {
                    return (t = t.toString(e)), o[r] && (t = "(" + t + ")"), t;
                  });
                  return this.implicit &&
                    "OperatorNode:multiply" === this.getIdentifier() &&
                    "hide" === r
                    ? p.join(" ")
                    : p.join(" " + this.op + " ");
                }
                return this.fn + "(" + this.args.join(", ") + ")";
              }),
              (r.prototype.toJSON = function () {
                return {
                  mathjs: "OperatorNode",
                  op: this.op,
                  fn: this.fn,
                  args: this.args,
                  implicit: this.implicit,
                };
              }),
              (r.fromJSON = function (e) {
                return new r(e.op, e.fn, e.args, e.implicit);
              }),
              (r.prototype.toHTML = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = e && e.implicit ? e.implicit : "hide",
                  a = this.args,
                  o = n(this, t, r, a, !1);
                if (1 === a.length) {
                  var i = jl(this, t),
                    s = a[0].toHTML(e);
                  return (
                    o[0] &&
                      (s =
                        '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                        s +
                        '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                    "right" === i
                      ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' +
                        Zn(this.op) +
                        "</span>" +
                        s
                      : s +
                        '<span class="math-operator math-unary-operator math-righthand-unary-operator">' +
                        Zn(this.op) +
                        "</span>"
                  );
                }
                if (2 === a.length) {
                  var u = a[0].toHTML(e),
                    c = a[1].toHTML(e);
                  return (
                    o[0] &&
                      (u =
                        '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                        u +
                        '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                    o[1] &&
                      (c =
                        '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                        c +
                        '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                    this.implicit &&
                    "OperatorNode:multiply" === this.getIdentifier() &&
                    "hide" === r
                      ? u +
                        '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' +
                        c
                      : u +
                        '<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
                        Zn(this.op) +
                        "</span>" +
                        c
                  );
                }
                var l = a.map(function (t, r) {
                  return (
                    (t = t.toHTML(e)),
                    o[r] &&
                      (t =
                        '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                        t +
                        '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                    t
                  );
                });
                return a.length > 2 &&
                  ("OperatorNode:add" === this.getIdentifier() ||
                    "OperatorNode:multiply" === this.getIdentifier())
                  ? this.implicit &&
                    "OperatorNode:multiply" === this.getIdentifier() &&
                    "hide" === r
                    ? l.join(
                        '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>'
                      )
                    : l.join(
                        '<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
                          Zn(this.op) +
                          "</span>"
                      )
                  : '<span class="math-function">' +
                      Zn(this.fn) +
                      '</span><span class="math-paranthesis math-round-parenthesis">(</span>' +
                      l.join('<span class="math-separator">,</span>') +
                      '<span class="math-paranthesis math-round-parenthesis">)</span>';
              }),
              (r.prototype._toTex = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep",
                  r = e && e.implicit ? e.implicit : "hide",
                  a = this.args,
                  o = n(this, t, r, a, !0),
                  i = Wl[this.fn];
                if (((i = void 0 === i ? this.op : i), 1 === a.length)) {
                  var s = jl(this, t),
                    u = a[0].toTex(e);
                  return (
                    o[0] && (u = "\\left(".concat(u, "\\right)")),
                    "right" === s ? i + u : u + i
                  );
                }
                if (2 === a.length) {
                  var c = a[0],
                    l = c.toTex(e);
                  o[0] && (l = "\\left(".concat(l, "\\right)"));
                  var p,
                    f = a[1].toTex(e),
                    m;
                  switch (
                    (o[1] && (f = "\\left(".concat(f, "\\right)")),
                    (m =
                      "keep" === t
                        ? c.getIdentifier()
                        : c.getContent().getIdentifier()),
                    this.getIdentifier())
                  ) {
                    case "OperatorNode:divide":
                      return i + "{" + l + "}{" + f + "}";
                    case "OperatorNode:pow":
                      switch (((l = "{" + l + "}"), (f = "{" + f + "}"), m)) {
                        case "ConditionalNode":
                        case "OperatorNode:divide":
                          l = "\\left(".concat(l, "\\right)");
                      }
                      break;
                    case "OperatorNode:multiply":
                      if (this.implicit && "hide" === r) return l + "~" + f;
                  }
                  return l + i + f;
                }
                if (
                  a.length > 2 &&
                  ("OperatorNode:add" === this.getIdentifier() ||
                    "OperatorNode:multiply" === this.getIdentifier())
                ) {
                  var h = a.map(function (t, r) {
                    return (
                      (t = t.toTex(e)),
                      o[r] && (t = "\\left(".concat(t, "\\right)")),
                      t
                    );
                  });
                  return "OperatorNode:multiply" === this.getIdentifier() &&
                    this.implicit
                    ? h.join("~")
                    : h.join(i);
                }
                return (
                  "\\mathrm{" +
                  this.fn +
                  "}\\left(" +
                  a
                    .map(function (t) {
                      return t.toTex(e);
                    })
                    .join(",") +
                  "\\right)"
                );
              }),
              (r.prototype.getIdentifier = function () {
                return this.type + ":" + this.fn;
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        pp,
        fp,
        mp = ge(
          "ParenthesisNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!$(e))
                throw new TypeError('Node expected for parameter "content"');
              this.content = e;
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "ParenthesisNode"),
              (r.prototype.isParenthesisNode = !0),
              (r.prototype._compile = function (e, t) {
                return this.content._compile(e, t);
              }),
              (r.prototype.getContent = function () {
                return this.content.getContent();
              }),
              (r.prototype.forEach = function (e) {
                e(this.content, "content", this);
              }),
              (r.prototype.map = function (e) {
                var t;
                return new r(e(this.content, "content", this));
              }),
              (r.prototype.clone = function () {
                return new r(this.content);
              }),
              (r.prototype._toString = function (e) {
                return !e ||
                  (e && !e.parenthesis) ||
                  (e && "keep" === e.parenthesis)
                  ? "(" + this.content.toString(e) + ")"
                  : this.content.toString(e);
              }),
              (r.prototype.toJSON = function () {
                return { mathjs: "ParenthesisNode", content: this.content };
              }),
              (r.fromJSON = function (e) {
                return new r(e.content);
              }),
              (r.prototype.toHTML = function (e) {
                return !e ||
                  (e && !e.parenthesis) ||
                  (e && "keep" === e.parenthesis)
                  ? '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      this.content.toHTML(e) +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'
                  : this.content.toHTML(e);
              }),
              (r.prototype._toTex = function (e) {
                return !e ||
                  (e && !e.parenthesis) ||
                  (e && "keep" === e.parenthesis)
                  ? "\\left(".concat(this.content.toTex(e), "\\right)")
                  : this.content.toTex(e);
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        hp,
        dp,
        gp = ge(
          "RangeNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e, t, n) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!$(e)) throw new TypeError("Node expected");
              if (!$(t)) throw new TypeError("Node expected");
              if (n && !$(n)) throw new TypeError("Node expected");
              if (arguments.length > 3) throw new Error("Too many arguments");
              (this.start = e), (this.end = t), (this.step = n || null);
            }
            function n(e, t) {
              var r = kl(e, t),
                n = {},
                a = kl(e.start, t);
              if (((n.start = (null !== a && a <= r) || "all" === t), e.step)) {
                var o = kl(e.step, t);
                n.step = (null !== o && o <= r) || "all" === t;
              }
              var i = kl(e.end, t);
              return (n.end = (null !== i && i <= r) || "all" === t), n;
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "RangeNode"),
              (r.prototype.isRangeNode = !0),
              (r.prototype.needsEnd = function () {
                var e;
                return (
                  this.filter(function (e) {
                    return V(e) && "end" === e.name;
                  }).length > 0
                );
              }),
              (r.prototype._compile = function (e, t) {
                var r = e.range,
                  n = this.start._compile(e, t),
                  a = this.end._compile(e, t);
                if (this.step) {
                  var o = this.step._compile(e, t);
                  return function e(t, i, s) {
                    return r(n(t, i, s), a(t, i, s), o(t, i, s));
                  };
                }
                return function e(t, o, i) {
                  return r(n(t, o, i), a(t, o, i));
                };
              }),
              (r.prototype.forEach = function (e) {
                e(this.start, "start", this),
                  e(this.end, "end", this),
                  this.step && e(this.step, "step", this);
              }),
              (r.prototype.map = function (e) {
                return new r(
                  this._ifNode(e(this.start, "start", this)),
                  this._ifNode(e(this.end, "end", this)),
                  this.step && this._ifNode(e(this.step, "step", this))
                );
              }),
              (r.prototype.clone = function () {
                return new r(this.start, this.end, this.step && this.step);
              }),
              (r.prototype._toString = function (e) {
                var t,
                  r = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
                  a,
                  o = this.start.toString(e);
                if ((r.start && (o = "(" + o + ")"), (a = o), this.step)) {
                  var i = this.step.toString(e);
                  r.step && (i = "(" + i + ")"), (a += ":" + i);
                }
                var s = this.end.toString(e);
                return r.end && (s = "(" + s + ")"), (a += ":" + s);
              }),
              (r.prototype.toJSON = function () {
                return {
                  mathjs: "RangeNode",
                  start: this.start,
                  end: this.end,
                  step: this.step,
                };
              }),
              (r.fromJSON = function (e) {
                return new r(e.start, e.end, e.step);
              }),
              (r.prototype.toHTML = function (e) {
                var t,
                  r = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
                  a,
                  o = this.start.toHTML(e);
                if (
                  (r.start &&
                    (o =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      o +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                  (a = o),
                  this.step)
                ) {
                  var i = this.step.toHTML(e);
                  r.step &&
                    (i =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      i +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                    (a +=
                      '<span class="math-operator math-range-operator">:</span>' +
                      i);
                }
                var s = this.end.toHTML(e);
                return (
                  r.end &&
                    (s =
                      '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                      s +
                      '<span class="math-parenthesis math-round-parenthesis">)</span>'),
                  (a +=
                    '<span class="math-operator math-range-operator">:</span>' +
                    s)
                );
              }),
              (r.prototype._toTex = function (e) {
                var t,
                  r = n(this, e && e.parenthesis ? e.parenthesis : "keep"),
                  a = this.start.toTex(e);
                if (
                  (r.start && (a = "\\left(".concat(a, "\\right)")), this.step)
                ) {
                  var o = this.step.toTex(e);
                  r.step && (o = "\\left(".concat(o, "\\right)")),
                    (a += ":" + o);
                }
                var i = this.end.toTex(e);
                return (
                  r.end && (i = "\\left(".concat(i, "\\right)")), (a += ":" + i)
                );
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        yp,
        vp,
        xp = ge(
          "RelationalNode",
          ["Node"],
          (e) => {
            var { Node: t } = e;
            function r(e, t) {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (!Array.isArray(e))
                throw new TypeError("Parameter conditionals must be an array");
              if (!Array.isArray(t))
                throw new TypeError("Parameter params must be an array");
              if (e.length !== t.length - 1)
                throw new TypeError(
                  "Parameter params must contain exactly one more element than parameter conditionals"
                );
              (this.conditionals = e), (this.params = t);
            }
            return (
              (r.prototype = new t()),
              (r.prototype.type = "RelationalNode"),
              (r.prototype.isRelationalNode = !0),
              (r.prototype._compile = function (e, t) {
                var r = this,
                  n = this.params.map((r) => r._compile(e, t));
                return function t(a, o, i) {
                  for (
                    var s, u = n[0](a, o, i), c = 0;
                    c < r.conditionals.length;
                    c++
                  ) {
                    var l;
                    if (
                      ((s = u),
                      (u = n[c + 1](a, o, i)),
                      !hn(e, r.conditionals[c])(s, u))
                    )
                      return !1;
                  }
                  return !0;
                };
              }),
              (r.prototype.forEach = function (e) {
                this.params.forEach(
                  (t, r) => e(t, "params[" + r + "]", this),
                  this
                );
              }),
              (r.prototype.map = function (e) {
                return new r(
                  this.conditionals.slice(),
                  this.params.map(
                    (t, r) => this._ifNode(e(t, "params[" + r + "]", this)),
                    this
                  )
                );
              }),
              (r.prototype.clone = function () {
                return new r(this.conditionals, this.params);
              }),
              (r.prototype._toString = function (e) {
                for (
                  var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = kl(this, t),
                    n = this.params.map(function (n, a) {
                      var o = kl(n, t);
                      return "all" === t || (null !== o && o <= r)
                        ? "(" + n.toString(e) + ")"
                        : n.toString(e);
                    }),
                    a = {
                      equal: "==",
                      unequal: "!=",
                      smaller: "<",
                      larger: ">",
                      smallerEq: "<=",
                      largerEq: ">=",
                    },
                    o = n[0],
                    i = 0;
                  i < this.conditionals.length;
                  i++
                )
                  o += " " + a[this.conditionals[i]] + " " + n[i + 1];
                return o;
              }),
              (r.prototype.toJSON = function () {
                return {
                  mathjs: "RelationalNode",
                  conditionals: this.conditionals,
                  params: this.params,
                };
              }),
              (r.fromJSON = function (e) {
                return new r(e.conditionals, e.params);
              }),
              (r.prototype.toHTML = function (e) {
                for (
                  var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = kl(this, t),
                    n = this.params.map(function (n, a) {
                      var o = kl(n, t);
                      return "all" === t || (null !== o && o <= r)
                        ? '<span class="math-parenthesis math-round-parenthesis">(</span>' +
                            n.toHTML(e) +
                            '<span class="math-parenthesis math-round-parenthesis">)</span>'
                        : n.toHTML(e);
                    }),
                    a = {
                      equal: "==",
                      unequal: "!=",
                      smaller: "<",
                      larger: ">",
                      smallerEq: "<=",
                      largerEq: ">=",
                    },
                    o = n[0],
                    i = 0;
                  i < this.conditionals.length;
                  i++
                )
                  o +=
                    '<span class="math-operator math-binary-operator math-explicit-binary-operator">' +
                    Zn(a[this.conditionals[i]]) +
                    "</span>" +
                    n[i + 1];
                return o;
              }),
              (r.prototype._toTex = function (e) {
                for (
                  var t = e && e.parenthesis ? e.parenthesis : "keep",
                    r = kl(this, t),
                    n = this.params.map(function (n, a) {
                      var o = kl(n, t);
                      return "all" === t || (null !== o && o <= r)
                        ? "\\left(" + n.toTex(e) + "\right)"
                        : n.toTex(e);
                    }),
                    a = n[0],
                    o = 0;
                  o < this.conditionals.length;
                  o++
                )
                  a += Wl[this.conditionals[o]] + n[o + 1];
                return a;
              }),
              r
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        bp,
        wp,
        Np = ge(
          "SymbolNode",
          ["math", "?Unit", "Node"],
          (e) => {
            var { math: t, Unit: r, Node: n } = e;
            function a(e) {
              return !!r && r.isValuelessUnit(e);
            }
            function o(e) {
              if (!(this instanceof o))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if ("string" != typeof e)
                throw new TypeError('String expected for parameter "name"');
              this.name = e;
            }
            return (
              (o.prototype = new n()),
              (o.prototype.type = "SymbolNode"),
              (o.prototype.isSymbolNode = !0),
              (o.prototype._compile = function (e, t) {
                var n = this.name;
                if (!0 === t[n])
                  return function (e, t, r) {
                    return t[n];
                  };
                if (n in e)
                  return function (t, r, a) {
                    return t.has(n) ? t.get(n) : hn(e, n);
                  };
                var i = a(n);
                return function (e, t, a) {
                  return e.has(n)
                    ? e.get(n)
                    : i
                    ? new r(null, n)
                    : o.onUndefinedSymbol(n);
                };
              }),
              (o.prototype.forEach = function (e) {}),
              (o.prototype.map = function (e) {
                return this.clone();
              }),
              (o.onUndefinedSymbol = function (e) {
                throw new Error("Undefined symbol " + e);
              }),
              (o.prototype.clone = function () {
                return new o(this.name);
              }),
              (o.prototype._toString = function (e) {
                return this.name;
              }),
              (o.prototype.toHTML = function (e) {
                var t = Zn(this.name);
                return "true" === t || "false" === t
                  ? '<span class="math-symbol math-boolean">' + t + "</span>"
                  : "i" === t
                  ? '<span class="math-symbol math-imaginary-symbol">' +
                    t +
                    "</span>"
                  : "Infinity" === t
                  ? '<span class="math-symbol math-infinity-symbol">' +
                    t +
                    "</span>"
                  : "NaN" === t
                  ? '<span class="math-symbol math-nan-symbol">' + t + "</span>"
                  : "null" === t
                  ? '<span class="math-symbol math-null-symbol">' +
                    t +
                    "</span>"
                  : "undefined" === t
                  ? '<span class="math-symbol math-undefined-symbol">' +
                    t +
                    "</span>"
                  : '<span class="math-symbol">' + t + "</span>";
              }),
              (o.prototype.toJSON = function () {
                return { mathjs: "SymbolNode", name: this.name };
              }),
              (o.fromJSON = function (e) {
                return new o(e.name);
              }),
              (o.prototype._toTex = function (e) {
                var r = !1;
                void 0 === t[this.name] && a(this.name) && (r = !0);
                var n = Gl(this.name, r);
                return "\\" === n[0] ? n : " " + n;
              }),
              o
            );
          },
          { isClass: !0, isNode: !0 }
        );
      function Sp(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return "function" == typeof e.createSubScope
          ? Mn(e.createSubScope(), ...r)
          : Mn(An(), e, ...r);
      }
      var Ep,
        Ap,
        Op = ge(
          "FunctionNode",
          ["math", "Node", "SymbolNode"],
          (e) => {
            var { math: t, Node: r, SymbolNode: n } = e;
            function a(e, t) {
              if (!(this instanceof a))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              if (("string" == typeof e && (e = new n(e)), !$(e)))
                throw new TypeError('Node expected as parameter "fn"');
              if (!Array.isArray(t) || !t.every($))
                throw new TypeError(
                  'Array containing Nodes expected for parameter "args"'
                );
              (this.fn = e),
                (this.args = t || []),
                Object.defineProperty(this, "name", {
                  get: function () {
                    return this.fn.name || "";
                  }.bind(this),
                  set: function e() {
                    throw new Error(
                      "Cannot assign a new name, name is read-only"
                    );
                  },
                });
            }
            (a.prototype = new r()),
              (a.prototype.type = "FunctionNode"),
              (a.prototype.isFunctionNode = !0),
              (a.prototype._compile = function (e, t) {
                if (!(this instanceof a))
                  throw new TypeError("No valid FunctionNode");
                var r = this.args.map((r) => r._compile(e, t));
                if (!V(this.fn)) {
                  if (
                    P(this.fn) &&
                    L(this.fn.index) &&
                    this.fn.index.isObjectProperty()
                  ) {
                    var n = this.fn.object._compile(e, t),
                      o = this.fn.index.getObjectProperty(),
                      i = this.args;
                    return function t(a, s, u) {
                      var c = n(a, s, u),
                        l;
                      if ((xn(c, o), c[o] && c[o].rawArgs))
                        return c[o](i, e, Sp(a, s), a);
                      var p = r.map((e) => e(a, s, u));
                      return c[o].apply(c, p);
                    };
                  }
                  var s = this.fn._compile(e, t),
                    u = this.args;
                  return function t(n, a, o) {
                    var i = s(n, a, o),
                      c;
                    if (i && i.rawArgs) return i(u, e, Sp(n, a), n);
                    var l = r.map((e) => e(n, a, o));
                    return i.apply(i, l);
                  };
                }
                var c = this.fn.name,
                  l = c in e ? hn(e, c) : void 0,
                  p = "function" == typeof l && !0 === l.rawArgs,
                  f = (t) =>
                    t.has(c)
                      ? t.get(c)
                      : c in e
                      ? hn(e, c)
                      : a.onUndefinedFunction(c);
                if (p) {
                  var m = this.args;
                  return function t(r, n, a) {
                    var o;
                    return f(r)(m, e, Sp(r, n), r);
                  };
                }
                switch (r.length) {
                  case 0:
                    return function e(t, r, n) {
                      var a;
                      return f(t)();
                    };
                  case 1:
                    return function e(t, n, a) {
                      var o, i;
                      return f(t)((0, r[0])(t, n, a));
                    };
                  case 2:
                    return function e(t, n, a) {
                      var o = f(t),
                        i = r[0],
                        s = r[1];
                      return o(i(t, n, a), s(t, n, a));
                    };
                  default:
                    return function e(t, n, a) {
                      var o, i;
                      return f(t)(...r.map((e) => e(t, n, a)));
                    };
                }
              }),
              (a.prototype.forEach = function (e) {
                e(this.fn, "fn", this);
                for (var t = 0; t < this.args.length; t++)
                  e(this.args[t], "args[" + t + "]", this);
              }),
              (a.prototype.map = function (e) {
                for (
                  var t = this._ifNode(e(this.fn, "fn", this)), r = [], n = 0;
                  n < this.args.length;
                  n++
                )
                  r[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this));
                return new a(t, r);
              }),
              (a.prototype.clone = function () {
                return new a(this.fn, this.args.slice(0));
              }),
              (a.onUndefinedFunction = function (e) {
                throw new Error("Undefined function " + e);
              });
            var o = a.prototype.toString;
            function i(e, t, r) {
              for (
                var n = "",
                  a = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi,
                  o = 0,
                  i;
                null !== (i = a.exec(e));

              )
                if (
                  ((n += e.substring(o, i.index)), (o = i.index), "$$" === i[0])
                )
                  (n += "$"), o++;
                else {
                  o += i[0].length;
                  var s = t[i[1]];
                  if (!s)
                    throw new ReferenceError(
                      "Template: Property " + i[1] + " does not exist."
                    );
                  if (void 0 === i[2])
                    switch (typeof s) {
                      case "string":
                        n += s;
                        break;
                      case "object":
                        if ($(s)) n += s.toTex(r);
                        else {
                          if (!Array.isArray(s))
                            throw new TypeError(
                              "Template: " +
                                i[1] +
                                " has to be a Node, String or array of Nodes"
                            );
                          n += s
                            .map(function (e, t) {
                              if ($(e)) return e.toTex(r);
                              throw new TypeError(
                                "Template: " +
                                  i[1] +
                                  "[" +
                                  t +
                                  "] is not a Node."
                              );
                            })
                            .join(",");
                        }
                        break;
                      default:
                        throw new TypeError(
                          "Template: " +
                            i[1] +
                            " has to be a Node, String or array of Nodes"
                        );
                    }
                  else {
                    if (!$(s[i[2]] && s[i[2]]))
                      throw new TypeError(
                        "Template: " + i[1] + "[" + i[2] + "] is not a Node."
                      );
                    n += s[i[2]].toTex(r);
                  }
                }
              return (n += e.slice(o));
            }
            (a.prototype.toString = function (e) {
              var t,
                r = this.fn.toString(e);
              return (
                e &&
                  "object" == typeof e.handler &&
                  ie(e.handler, r) &&
                  (t = e.handler[r](this, e)),
                void 0 !== t ? t : o.call(this, e)
              );
            }),
              (a.prototype._toString = function (e) {
                var t = this.args.map(function (t) {
                    return t.toString(e);
                  }),
                  r;
                return (
                  (z(this.fn)
                    ? "(" + this.fn.toString(e) + ")"
                    : this.fn.toString(e)) +
                  "(" +
                  t.join(", ") +
                  ")"
                );
              }),
              (a.prototype.toJSON = function () {
                return { mathjs: "FunctionNode", fn: this.fn, args: this.args };
              }),
              (a.fromJSON = function (e) {
                return new a(e.fn, e.args);
              }),
              (a.prototype.toHTML = function (e) {
                var t = this.args.map(function (t) {
                  return t.toHTML(e);
                });
                return (
                  '<span class="math-function">' +
                  Zn(this.fn) +
                  '</span><span class="math-paranthesis math-round-parenthesis">(</span>' +
                  t.join('<span class="math-separator">,</span>') +
                  '<span class="math-paranthesis math-round-parenthesis">)</span>'
                );
              });
            var s = a.prototype.toTex;
            return (
              (a.prototype.toTex = function (e) {
                var t;
                return (
                  e &&
                    "object" == typeof e.handler &&
                    ie(e.handler, this.name) &&
                    (t = e.handler[this.name](this, e)),
                  void 0 !== t ? t : s.call(this, e)
                );
              }),
              (a.prototype._toTex = function (e) {
                var r = this.args.map(function (t) {
                    return t.toTex(e);
                  }),
                  n,
                  a;
                switch (
                  (Hl[this.name] && (n = Hl[this.name]),
                  !t[this.name] ||
                    ("function" != typeof t[this.name].toTex &&
                      "object" != typeof t[this.name].toTex &&
                      "string" != typeof t[this.name].toTex) ||
                    (n = t[this.name].toTex),
                  typeof n)
                ) {
                  case "function":
                    a = n(this, e);
                    break;
                  case "string":
                    a = i(n, this, e);
                    break;
                  case "object":
                    switch (typeof n[r.length]) {
                      case "function":
                        a = n[r.length](this, e);
                        break;
                      case "string":
                        a = i(n[r.length], this, e);
                    }
                }
                return void 0 !== a ? a : i(Jl, this, e);
              }),
              (a.prototype.getIdentifier = function () {
                return this.type + ":" + this.name;
              }),
              a
            );
          },
          { isClass: !0, isNode: !0 }
        ),
        Cp = "parse",
        Tp,
        Mp = ge(
          Cp,
          [
            "typed",
            "numeric",
            "config",
            "AccessorNode",
            "ArrayNode",
            "AssignmentNode",
            "BlockNode",
            "ConditionalNode",
            "ConstantNode",
            "FunctionAssignmentNode",
            "FunctionNode",
            "IndexNode",
            "ObjectNode",
            "OperatorNode",
            "ParenthesisNode",
            "RangeNode",
            "RelationalNode",
            "SymbolNode",
          ],
          (e) => {
            var {
                typed: t,
                numeric: r,
                config: n,
                AccessorNode: a,
                ArrayNode: o,
                AssignmentNode: i,
                BlockNode: s,
                ConditionalNode: u,
                ConstantNode: c,
                FunctionAssignmentNode: p,
                FunctionNode: f,
                IndexNode: m,
                ObjectNode: h,
                OperatorNode: d,
                ParenthesisNode: g,
                RangeNode: y,
                RelationalNode: v,
                SymbolNode: x,
              } = e,
              b = t(Cp, {
                string: function e(t) {
                  return H(t, {});
                },
                "Array | Matrix": function e(t) {
                  return w(t, {});
                },
                "string, Object": function e(t, r) {
                  var n;
                  return H(t, void 0 !== r.nodes ? r.nodes : {});
                },
                "Array | Matrix, Object": w,
              });
            function w(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = void 0 !== t.nodes ? t.nodes : {};
              return Kc(e, function (e) {
                if ("string" != typeof e)
                  throw new TypeError("String expected");
                return H(e, r);
              });
            }
            var N = 0,
              S = 1,
              E = 2,
              A = 3,
              O = 4,
              C = {
                ",": !0,
                "(": !0,
                ")": !0,
                "[": !0,
                "]": !0,
                "{": !0,
                "}": !0,
                '"': !0,
                "'": !0,
                ";": !0,
                "+": !0,
                "-": !0,
                "*": !0,
                ".*": !0,
                "/": !0,
                "./": !0,
                "%": !0,
                "^": !0,
                ".^": !0,
                "~": !0,
                "!": !0,
                "&": !0,
                "|": !0,
                "^|": !0,
                "=": !0,
                ":": !0,
                "?": !0,
                "==": !0,
                "!=": !0,
                "<": !0,
                ">": !0,
                "<=": !0,
                ">=": !0,
                "<<": !0,
                ">>": !0,
                ">>>": !0,
              },
              T = {
                mod: !0,
                to: !0,
                in: !0,
                and: !0,
                xor: !0,
                or: !0,
                not: !0,
              },
              M = { true: !0, false: !1, null: null, undefined: void 0 },
              k = ["NaN", "Infinity"];
            function j() {
              return {
                extraNodes: {},
                expression: "",
                comment: "",
                index: 0,
                token: "",
                tokenType: N,
                nestingLevel: 0,
                conditionalLevel: null,
              };
            }
            function q(e, t) {
              return e.expression.substr(e.index, t);
            }
            function F(e) {
              return q(e, 1);
            }
            function I(e) {
              e.index++;
            }
            function R(e) {
              return e.expression.charAt(e.index - 1);
            }
            function B(e) {
              return e.expression.charAt(e.index + 1);
            }
            function z(e) {
              for (
                e.tokenType = N, e.token = "", e.comment = "";
                b.isWhitespace(F(e), e.nestingLevel);

              )
                I(e);
              if ("#" === F(e))
                for (; "\n" !== F(e) && "" !== F(e); )
                  (e.comment += F(e)), I(e);
              if ("" !== F(e)) {
                if ("\n" === F(e) && !e.nestingLevel)
                  return (e.tokenType = S), (e.token = F(e)), void I(e);
                var t = F(e),
                  r = q(e, 2),
                  n = q(e, 3);
                if (3 === n.length && C[n])
                  return (
                    (e.tokenType = S), (e.token = n), I(e), I(e), void I(e)
                  );
                if (2 === r.length && C[r])
                  return (e.tokenType = S), (e.token = r), I(e), void I(e);
                if (C[t]) return (e.tokenType = S), (e.token = t), void I(e);
                if (b.isDigitDot(t)) {
                  e.tokenType = E;
                  var a = q(e, 2);
                  if ("0b" === a || "0o" === a || "0x" === a) {
                    for (
                      e.token += F(e), I(e), e.token += F(e), I(e);
                      b.isHexDigit(F(e));

                    )
                      (e.token += F(e)), I(e);
                    if ("." === F(e))
                      for (e.token += ".", I(e); b.isHexDigit(F(e)); )
                        (e.token += F(e)), I(e);
                    else if ("i" === F(e))
                      for (e.token += "i", I(e); b.isDigit(F(e)); )
                        (e.token += F(e)), I(e);
                    return;
                  }
                  if ("." === F(e)) {
                    if (((e.token += F(e)), I(e), !b.isDigit(F(e))))
                      return void (e.tokenType = S);
                  } else {
                    for (; b.isDigit(F(e)); ) (e.token += F(e)), I(e);
                    b.isDecimalMark(F(e), B(e)) && ((e.token += F(e)), I(e));
                  }
                  for (; b.isDigit(F(e)); ) (e.token += F(e)), I(e);
                  if ("E" === F(e) || "e" === F(e))
                    if (b.isDigit(B(e)) || "-" === B(e) || "+" === B(e)) {
                      if (
                        ((e.token += F(e)),
                        I(e),
                        ("+" !== F(e) && "-" !== F(e)) ||
                          ((e.token += F(e)), I(e)),
                        !b.isDigit(F(e)))
                      )
                        throw Te(e, 'Digit expected, got "' + F(e) + '"');
                      for (; b.isDigit(F(e)); ) (e.token += F(e)), I(e);
                      if (b.isDecimalMark(F(e), B(e)))
                        throw Te(e, 'Digit expected, got "' + F(e) + '"');
                    } else if ("." === B(e))
                      throw (I(e), Te(e, 'Digit expected, got "' + F(e) + '"'));
                } else {
                  if (!b.isAlpha(F(e), R(e), B(e))) {
                    for (e.tokenType = O; "" !== F(e); )
                      (e.token += F(e)), I(e);
                    throw Te(e, 'Syntax error in part "' + e.token + '"');
                  }
                  for (; b.isAlpha(F(e), R(e), B(e)) || b.isDigit(F(e)); )
                    (e.token += F(e)), I(e);
                  ie(T, e.token) ? (e.tokenType = S) : (e.tokenType = A);
                }
              } else e.tokenType = S;
            }
            function L(e) {
              do {
                z(e);
              } while ("\n" === e.token);
            }
            function $(e) {
              e.nestingLevel++;
            }
            function U(e) {
              e.nestingLevel--;
            }
            function H(e, t) {
              var r = j();
              l(r, { expression: e, extraNodes: t }), z(r);
              var n = J(r);
              if ("" !== r.token)
                throw r.tokenType === S
                  ? Me(r, "Unexpected operator " + r.token)
                  : Te(r, 'Unexpected part "' + r.token + '"');
              return n;
            }
            function J(e) {
              var t,
                r = [],
                n;
              for (
                "" !== e.token &&
                "\n" !== e.token &&
                ";" !== e.token &&
                ((t = X(e)).comment = e.comment);
                "\n" === e.token || ";" === e.token;

              )
                0 === r.length &&
                  t &&
                  ((n = ";" !== e.token), r.push({ node: t, visible: n })),
                  z(e),
                  "\n" !== e.token &&
                    ";" !== e.token &&
                    "" !== e.token &&
                    (((t = X(e)).comment = e.comment),
                    (n = ";" !== e.token),
                    r.push({ node: t, visible: n }));
              return r.length > 0
                ? new s(r)
                : (t || ((t = new c(void 0)).comment = e.comment), t);
            }
            function X(e) {
              var t,
                r,
                n,
                a,
                o = G(e);
              if ("=" === e.token) {
                if (V(o))
                  return (t = o.name), L(e), (n = X(e)), new i(new x(t), n);
                if (P(o)) return L(e), (n = X(e)), new i(o.object, o.index, n);
                if (
                  _(o) &&
                  V(o.fn) &&
                  ((a = !0),
                  (r = []),
                  (t = o.name),
                  o.args.forEach(function (e, t) {
                    V(e) ? (r[t] = e.name) : (a = !1);
                  }),
                  a)
                )
                  return L(e), (n = X(e)), new p(t, r, n);
                throw Te(e, "Invalid left hand side of assignment operator =");
              }
              return o;
            }
            function G(e) {
              for (var t = Q(e); "?" === e.token; ) {
                var r = e.conditionalLevel;
                (e.conditionalLevel = e.nestingLevel), L(e);
                var n = t,
                  a = X(e);
                if (":" !== e.token)
                  throw Te(e, "False part of conditional expression expected");
                (e.conditionalLevel = null), L(e);
                var o = X(e);
                (t = new u(n, a, o)), (e.conditionalLevel = r);
              }
              return t;
            }
            function Q(e) {
              for (var t = Z(e); "or" === e.token; )
                L(e), (t = new d("or", "or", [t, Z(e)]));
              return t;
            }
            function Z(e) {
              for (var t = Y(e); "xor" === e.token; )
                L(e), (t = new d("xor", "xor", [t, Y(e)]));
              return t;
            }
            function Y(e) {
              for (var t = K(e); "and" === e.token; )
                L(e), (t = new d("and", "and", [t, K(e)]));
              return t;
            }
            function K(e) {
              for (var t = ee(e); "|" === e.token; )
                L(e), (t = new d("|", "bitOr", [t, ee(e)]));
              return t;
            }
            function ee(e) {
              for (var t = te(e); "^|" === e.token; )
                L(e), (t = new d("^|", "bitXor", [t, te(e)]));
              return t;
            }
            function te(e) {
              for (var t = re(e); "&" === e.token; )
                L(e), (t = new d("&", "bitAnd", [t, re(e)]));
              return t;
            }
            function re(e) {
              for (
                var t = [ne(e)],
                  r = [],
                  n = {
                    "==": "equal",
                    "!=": "unequal",
                    "<": "smaller",
                    ">": "larger",
                    "<=": "smallerEq",
                    ">=": "largerEq",
                  };
                ie(n, e.token);

              ) {
                var a = { name: e.token, fn: n[e.token] };
                r.push(a), L(e), t.push(ne(e));
              }
              return 1 === t.length
                ? t[0]
                : 2 === t.length
                ? new d(r[0].name, r[0].fn, t)
                : new v(
                    r.map((e) => e.fn),
                    t
                  );
            }
            function ne(e) {
              var t, r, n, a;
              t = ae(e);
              for (
                var o = {
                  "<<": "leftShift",
                  ">>": "rightArithShift",
                  ">>>": "rightLogShift",
                };
                ie(o, e.token);

              )
                (n = o[(r = e.token)]),
                  L(e),
                  (a = [t, ae(e)]),
                  (t = new d(r, n, a));
              return t;
            }
            function ae(e) {
              var t, r, n, a;
              t = oe(e);
              for (var o = { to: "to", in: "to" }; ie(o, e.token); )
                (n = o[(r = e.token)]),
                  L(e),
                  "in" === r && "" === e.token
                    ? (t = new d("*", "multiply", [t, new x("in")], !0))
                    : ((a = [t, oe(e)]), (t = new d(r, n, a)));
              return t;
            }
            function oe(e) {
              var t,
                r = [];
              if (
                ((t = ":" === e.token ? new c(1) : se(e)),
                ":" === e.token && e.conditionalLevel !== e.nestingLevel)
              ) {
                for (r.push(t); ":" === e.token && r.length < 3; )
                  L(e),
                    ")" === e.token ||
                    "]" === e.token ||
                    "," === e.token ||
                    "" === e.token
                      ? r.push(new x("end"))
                      : r.push(se(e));
                t =
                  3 === r.length ? new y(r[0], r[2], r[1]) : new y(r[0], r[1]);
              }
              return t;
            }
            function se(e) {
              var t, r, n, a;
              t = ue(e);
              for (var o = { "+": "add", "-": "subtract" }; ie(o, e.token); )
                (n = o[(r = e.token)]),
                  L(e),
                  (a = [t, ue(e)]),
                  (t = new d(r, n, a));
              return t;
            }
            function ue(e) {
              var t, r, n, a;
              r = t = ce(e);
              for (
                var o = {
                  "*": "multiply",
                  ".*": "dotMultiply",
                  "/": "divide",
                  "./": "dotDivide",
                  "%": "mod",
                  mod: "mod",
                };
                ie(o, e.token);

              )
                (a = o[(n = e.token)]),
                  L(e),
                  (r = ce(e)),
                  (t = new d(n, a, [t, r]));
              return t;
            }
            function ce(e) {
              var t, r;
              for (
                r = t = le(e);
                e.tokenType === A ||
                ("in" === e.token && D(t)) ||
                !(e.tokenType !== E || D(r) || (W(r) && "!" !== r.op)) ||
                "(" === e.token;

              )
                (r = le(e)), (t = new d("*", "multiply", [t, r], !0));
              return t;
            }
            function le(e) {
              for (var t = pe(e), r = t, n = []; "/" === e.token && D(r); ) {
                if ((n.push(l({}, e)), L(e), e.tokenType !== E)) {
                  l(e, n.pop());
                  break;
                }
                if (
                  (n.push(l({}, e)), L(e), e.tokenType !== A && "(" !== e.token)
                ) {
                  n.pop(), l(e, n.pop());
                  break;
                }
                l(e, n.pop()),
                  n.pop(),
                  (r = pe(e)),
                  (t = new d("/", "divide", [t, r]));
              }
              return t;
            }
            function pe(e) {
              var t,
                r,
                n,
                a = {
                  "-": "unaryMinus",
                  "+": "unaryPlus",
                  "~": "bitNot",
                  not: "not",
                };
              return ie(a, e.token)
                ? ((n = a[e.token]),
                  (t = e.token),
                  L(e),
                  (r = [pe(e)]),
                  new d(t, n, r))
                : fe(e);
            }
            function fe(e) {
              var t, r, n, a;
              return (
                (t = me(e)),
                ("^" !== e.token && ".^" !== e.token) ||
                  ((n = "^" === (r = e.token) ? "pow" : "dotPow"),
                  L(e),
                  (a = [t, pe(e)]),
                  (t = new d(r, n, a))),
                t
              );
            }
            function me(e) {
              var t, r, n, a;
              t = he(e);
              for (
                var o = { "!": "factorial", "'": "ctranspose" };
                ie(o, e.token);

              )
                (n = o[(r = e.token)]),
                  z(e),
                  (t = ge(e, (t = new d(r, n, (a = [t])))));
              return t;
            }
            function he(e) {
              var t = [];
              if (e.tokenType === A && ie(e.extraNodes, e.token)) {
                var r = e.extraNodes[e.token];
                if ((z(e), "(" === e.token)) {
                  if (((t = []), $(e), z(e), ")" !== e.token))
                    for (t.push(X(e)); "," === e.token; ) z(e), t.push(X(e));
                  if (")" !== e.token) throw Te(e, "Parenthesis ) expected");
                  U(e), z(e);
                }
                return new r(t);
              }
              return de(e);
            }
            function de(e) {
              var t, n;
              return e.tokenType === A || (e.tokenType === S && e.token in T)
                ? ((n = e.token),
                  z(e),
                  (t = ge(
                    e,
                    (t = ie(M, n)
                      ? new c(M[n])
                      : -1 !== k.indexOf(n)
                      ? new c(r(n, "number"))
                      : new x(n))
                  )))
                : ye(e);
            }
            function ge(e, t, r) {
              for (
                var n;
                !(
                  ("(" !== e.token && "[" !== e.token && "." !== e.token) ||
                  (r && -1 === r.indexOf(e.token))
                );

              )
                if (((n = []), "(" === e.token)) {
                  if (!V(t) && !P(t)) return t;
                  if (($(e), z(e), ")" !== e.token))
                    for (n.push(X(e)); "," === e.token; ) z(e), n.push(X(e));
                  if (")" !== e.token) throw Te(e, "Parenthesis ) expected");
                  U(e), z(e), (t = new f(t, n));
                } else if ("[" === e.token) {
                  if (($(e), z(e), "]" !== e.token))
                    for (n.push(X(e)); "," === e.token; ) z(e), n.push(X(e));
                  if ("]" !== e.token) throw Te(e, "Parenthesis ] expected");
                  U(e), z(e), (t = new a(t, new m(n)));
                } else {
                  if ((z(e), e.tokenType !== A))
                    throw Te(e, "Property name expected after dot");
                  var o;
                  n.push(new c(e.token)), z(e), (t = new a(t, new m(n, !0)));
                }
              return t;
            }
            function ye(e) {
              var t, r;
              return '"' === e.token
                ? ((r = ve(e)), (t = ge(e, (t = new c(r)))))
                : xe(e);
            }
            function ve(e) {
              for (var t = ""; "" !== F(e) && '"' !== F(e); )
                "\\" === F(e) && ((t += F(e)), I(e)), (t += F(e)), I(e);
              if ((z(e), '"' !== e.token))
                throw Te(e, 'End of string " expected');
              return z(e), JSON.parse('"' + t + '"');
            }
            function xe(e) {
              var t, r;
              return "'" === e.token
                ? ((r = be(e)), (t = ge(e, (t = new c(r)))))
                : we(e);
            }
            function be(e) {
              for (var t = ""; "" !== F(e) && "'" !== F(e); )
                "\\" === F(e) && ((t += F(e)), I(e)), (t += F(e)), I(e);
              if ((z(e), "'" !== e.token))
                throw Te(e, "End of string ' expected");
              return z(e), JSON.parse('"' + t + '"');
            }
            function we(e) {
              var t, r, n, a;
              if ("[" === e.token) {
                if (($(e), z(e), "]" !== e.token)) {
                  var i = Ne(e);
                  if (";" === e.token) {
                    for (n = 1, r = [i]; ";" === e.token; )
                      z(e), (r[n] = Ne(e)), n++;
                    if ("]" !== e.token)
                      throw Te(e, "End of matrix ] expected");
                    U(e), z(e), (a = r[0].items.length);
                    for (var s = 1; s < n; s++)
                      if (r[s].items.length !== a)
                        throw Me(
                          e,
                          "Column dimensions mismatch (" +
                            r[s].items.length +
                            " !== " +
                            a +
                            ")"
                        );
                    t = new o(r);
                  } else {
                    if ("]" !== e.token)
                      throw Te(e, "End of matrix ] expected");
                    U(e), z(e), (t = i);
                  }
                } else U(e), z(e), (t = new o([]));
                return ge(e, t);
              }
              return Se(e);
            }
            function Ne(e) {
              for (var t = [X(e)], r = 1; "," === e.token; )
                z(e), (t[r] = X(e)), r++;
              return new o(t);
            }
            function Se(e) {
              if ("{" === e.token) {
                var t;
                $(e);
                var r = {};
                do {
                  if ((z(e), "}" !== e.token)) {
                    if ('"' === e.token) t = ve(e);
                    else if ("'" === e.token) t = be(e);
                    else {
                      if (
                        !(
                          e.tokenType === A ||
                          (e.tokenType === S && e.token in T)
                        )
                      )
                        throw Te(e, "Symbol or string expected as object key");
                      (t = e.token), z(e);
                    }
                    if (":" !== e.token)
                      throw Te(e, "Colon : expected after object key");
                    z(e), (r[t] = X(e));
                  }
                } while ("," === e.token);
                if ("}" !== e.token)
                  throw Te(
                    e,
                    "Comma , or bracket } expected after object value"
                  );
                U(e), z(e);
                var n = new h(r);
                return (n = ge(e, n));
              }
              return Ee(e);
            }
            function Ee(e) {
              var t;
              return e.tokenType === E
                ? ((t = e.token), z(e), new c(r(t, n.number)))
                : Ae(e);
            }
            function Ae(e) {
              var t;
              if ("(" === e.token) {
                if (($(e), z(e), (t = X(e)), ")" !== e.token))
                  throw Te(e, "Parenthesis ) expected");
                return U(e), z(e), (t = ge(e, (t = new g(t))));
              }
              return Oe(e);
            }
            function Oe(e) {
              throw "" === e.token
                ? Te(e, "Unexpected end of expression")
                : Te(e, "Value expected");
            }
            function Ce(e) {
              return e.index - e.token.length + 1;
            }
            function Te(e, t) {
              var r = Ce(e),
                n = new SyntaxError(t + " (char " + r + ")");
              return (n.char = r), n;
            }
            function Me(e, t) {
              var r = Ce(e),
                n = new SyntaxError(t + " (char " + r + ")");
              return (n.char = r), n;
            }
            return (
              (b.isAlpha = function e(t, r, n) {
                return (
                  b.isValidLatinOrGreek(t) ||
                  b.isValidMathSymbol(t, n) ||
                  b.isValidMathSymbol(r, t)
                );
              }),
              (b.isValidLatinOrGreek = function e(t) {
                return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(
                  t
                );
              }),
              (b.isValidMathSymbol = function e(t, r) {
                return (
                  /^[\uD835]$/.test(t) &&
                  /^[\uDC00-\uDFFF]$/.test(r) &&
                  /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(
                    r
                  )
                );
              }),
              (b.isWhitespace = function e(t, r) {
                return " " === t || "\t" === t || ("\n" === t && r > 0);
              }),
              (b.isDecimalMark = function e(t, r) {
                return "." === t && "/" !== r && "*" !== r && "^" !== r;
              }),
              (b.isDigitDot = function e(t) {
                return (t >= "0" && t <= "9") || "." === t;
              }),
              (b.isDigit = function e(t) {
                return t >= "0" && t <= "9";
              }),
              (b.isHexDigit = function e(t) {
                return (
                  (t >= "0" && t <= "9") ||
                  (t >= "a" && t <= "f") ||
                  (t >= "A" && t <= "F")
                );
              }),
              b
            );
          }
        ),
        kp = "compile",
        jp,
        qp = ge(kp, ["typed", "parse"], (e) => {
          var { typed: t, parse: r } = e;
          return t(kp, {
            string: function e(t) {
              return r(t).compile();
            },
            "Array | Matrix": function e(t) {
              return Kc(t, function (e) {
                return r(e).compile();
              });
            },
          });
        }),
        Pp = "evaluate",
        Fp,
        Ip = ge(Pp, ["typed", "parse"], (e) => {
          var { typed: t, parse: r } = e;
          return t(Pp, {
            string: function e(t) {
              var n = An();
              return r(t).compile().evaluate(n);
            },
            "string, Map | Object": function e(t, n) {
              return r(t).compile().evaluate(n);
            },
            "Array | Matrix": function e(t) {
              var n = An();
              return Kc(t, function (e) {
                return r(e).compile().evaluate(n);
              });
            },
            "Array | Matrix, Map | Object": function e(t, n) {
              return Kc(t, function (e) {
                return r(e).compile().evaluate(n);
              });
            },
          });
        }),
        Rp,
        Bp,
        Dp = ge(
          "Parser",
          ["parse"],
          (e) => {
            var { parse: t } = e;
            function r() {
              if (!(this instanceof r))
                throw new SyntaxError(
                  "Constructor must be called with the new operator"
                );
              Object.defineProperty(this, "scope", {
                value: An(),
                writable: !1,
              });
            }
            return (
              (r.prototype.type = "Parser"),
              (r.prototype.isParser = !0),
              (r.prototype.evaluate = function (e) {
                return t(e).compile().evaluate(this.scope);
              }),
              (r.prototype.get = function (e) {
                if (this.scope.has(e)) return this.scope.get(e);
              }),
              (r.prototype.getAll = function () {
                return Cn(this.scope);
              }),
              (r.prototype.getAllAsMap = function () {
                return this.scope;
              }),
              (r.prototype.set = function (e, t) {
                return this.scope.set(e, t), t;
              }),
              (r.prototype.remove = function (e) {
                this.scope.delete(e);
              }),
              (r.prototype.clear = function () {
                this.scope.clear();
              }),
              r
            );
          },
          { isClass: !0 }
        ),
        zp = "apply",
        _p,
        Lp = ge(zp, ["typed", "isInteger"], (e) => {
          var { typed: t, isInteger: r } = e;
          return t(zp, {
            "Array | Matrix, number | BigNumber, function": function e(
              t,
              n,
              a
            ) {
              if (!r(n))
                throw new TypeError("Integer number expected for dimension");
              var o = Array.isArray(t) ? Se(t) : t.size();
              if (n < 0 || n >= o.length) throw new at(n, o.length);
              return v(t) ? t.create($p(t.valueOf(), n, a)) : $p(t, n, a);
            },
          });
        });
      function $p(e, t, r) {
        var n, a, o;
        if (t <= 0) {
          if (Array.isArray(e[0])) {
            for (o = Up(e), a = [], n = 0; n < o.length; n++)
              a[n] = $p(o[n], t - 1, r);
            return a;
          }
          return r(e);
        }
        for (a = [], n = 0; n < e.length; n++) a[n] = $p(e[n], t - 1, r);
        return a;
      }
      function Up(e) {
        var t = e.length,
          r = e[0].length,
          n,
          a,
          o = [];
        for (a = 0; a < r; a++) {
          var i = [];
          for (n = 0; n < t; n++) i.push(e[n][a]);
          o.push(i);
        }
        return o;
      }
      var Wp,
        Hp,
        Jp = ge("filter", ["typed"], (e) => {
          var { typed: t } = e;
          return t("filter", {
            "Array, function": Vp,
            "Matrix, function": function e(t, r) {
              return t.create(Vp(t.toArray(), r));
            },
            "Array, RegExp": Le,
            "Matrix, RegExp": function e(t, r) {
              return t.create(Le(t.toArray(), r));
            },
          });
        });
      function Vp(e, t) {
        var r = xc(t);
        return _e(e, function (e, n, a) {
          return 1 === r ? t(e) : 2 === r ? t(e, [n]) : t(e, [n], a);
        });
      }
      var Xp = "forEach",
        Gp,
        Qp = ge(Xp, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Xp, {
            "Array, function": Zp,
            "Matrix, function": function e(t, r) {
              return t.forEach(r);
            },
          });
        });
      function Zp(e, t) {
        var r = xc(t),
          n;
        (function n(a, o) {
          Array.isArray(a)
            ? ze(a, function (e, t) {
                n(e, o.concat(t));
              })
            : 1 === r
            ? t(a)
            : 2 === r
            ? t(a, o)
            : t(a, o, e);
        })(e, []);
      }
      var Yp = "map",
        Kp,
        ef = ge(Yp, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Yp, {
            "Array, function": tf,
            "Matrix, function": function e(t, r) {
              return t.map(r);
            },
          });
        });
      function tf(e, t) {
        var r = xc(t),
          n;
        return (function n(a, o) {
          return Array.isArray(a)
            ? a.map(function (e, t) {
                return n(e, o.concat(t));
              })
            : 1 === r
            ? t(a)
            : 2 === r
            ? t(a, o)
            : t(a, o, e);
        })(e, []);
      }
      var rf = "range",
        nf,
        af = ge(
          rf,
          [
            "typed",
            "config",
            "?matrix",
            "?bignumber",
            "smaller",
            "smallerEq",
            "larger",
            "largerEq",
          ],
          (e) => {
            var {
              typed: t,
              config: r,
              matrix: n,
              bignumber: a,
              smaller: o,
              smallerEq: i,
              larger: s,
              largerEq: u,
            } = e;
            return t(rf, {
              string: l,
              "string, boolean": l,
              "number, number": function e(t, r) {
                return c(p(t, r, 1));
              },
              "number, number, number": function e(t, r, n) {
                return c(p(t, r, n));
              },
              "number, number, boolean": function e(t, r, n) {
                return c(n ? f(t, r, 1) : p(t, r, 1));
              },
              "number, number, number, boolean": function e(t, r, n, a) {
                return c(a ? f(t, r, n) : p(t, r, n));
              },
              "BigNumber, BigNumber": function e(t, r) {
                var n;
                return c(m(t, r, new (0, t.constructor)(1)));
              },
              "BigNumber, BigNumber, BigNumber": function e(t, r, n) {
                return c(m(t, r, n));
              },
              "BigNumber, BigNumber, boolean": function e(t, r, n) {
                var a = t.constructor;
                return c(n ? h(t, r, new a(1)) : m(t, r, new a(1)));
              },
              "BigNumber, BigNumber, BigNumber, boolean": function e(
                t,
                r,
                n,
                a
              ) {
                return c(a ? h(t, r, n) : m(t, r, n));
              },
            });
            function c(e) {
              return "Matrix" === r.matrix ? (n ? n(e) : ln()) : e;
            }
            function l(e, t) {
              var n = d(e),
                o;
              if (!n)
                throw new SyntaxError('String "' + e + '" is no valid range');
              return "BigNumber" === r.number
                ? (void 0 === a && un(),
                  c((o = t ? h : m)(a(n.start), a(n.end), a(n.step))))
                : c((o = t ? f : p)(n.start, n.end, n.step));
            }
            function p(e, t, r) {
              var n = [],
                a = e;
              if (r > 0) for (; o(a, t); ) n.push(a), (a += r);
              else if (r < 0) for (; s(a, t); ) n.push(a), (a += r);
              return n;
            }
            function f(e, t, r) {
              var n = [],
                a = e;
              if (r > 0) for (; i(a, t); ) n.push(a), (a += r);
              else if (r < 0) for (; u(a, t); ) n.push(a), (a += r);
              return n;
            }
            function m(e, t, r) {
              var n = a(0),
                i = [],
                u = e;
              if (r.gt(n)) for (; o(u, t); ) i.push(u), (u = u.plus(r));
              else if (r.lt(n)) for (; s(u, t); ) i.push(u), (u = u.plus(r));
              return i;
            }
            function h(e, t, r) {
              var n = a(0),
                o = [],
                s = e;
              if (r.gt(n)) for (; i(s, t); ) o.push(s), (s = s.plus(r));
              else if (r.lt(n)) for (; u(s, t); ) o.push(s), (s = s.plus(r));
              return o;
            }
            function d(e) {
              var t,
                r = e.split(":").map(function (e) {
                  return Number(e);
                }),
                n;
              if (
                r.some(function (e) {
                  return isNaN(e);
                })
              )
                return null;
              switch (r.length) {
                case 2:
                  return { start: r[0], end: r[1], step: 1 };
                case 3:
                  return { start: r[0], end: r[2], step: r[1] };
                default:
                  return null;
              }
            }
          }
        ),
        of = "size",
        sf,
        uf = ge(of, ["typed", "config", "?matrix"], (e) => {
          var { typed: t, config: r, matrix: n } = e;
          return t(of, {
            Matrix: function e(t) {
              return t.create(t.size());
            },
            Array: Se,
            string: function e(t) {
              return "Array" === r.matrix ? [t.length] : n([t.length]);
            },
            "number | Complex | BigNumber | Unit | boolean | null": function e(
              t
            ) {
              return "Array" === r.matrix ? [] : n ? n([]) : ln();
            },
          });
        }),
        cf = "partitionSelect",
        lf,
        pf = ge(cf, ["typed", "isNumeric", "isNaN", "compare"], (e) => {
          var { typed: t, isNumeric: r, isNaN: n, compare: a } = e,
            o = a,
            i = (e, t) => -a(e, t);
          return t(cf, {
            "Array | Matrix, number": function e(t, r) {
              return s(t, r, o);
            },
            "Array | Matrix, number, string": function e(t, r, n) {
              if ("asc" === n) return s(t, r, o);
              if ("desc" === n) return s(t, r, i);
              throw new Error('Compare string must be "asc" or "desc"');
            },
            "Array | Matrix, number, function": s,
          });
          function s(e, t, r) {
            if (!it(t) || t < 0)
              throw new Error("k must be a non-negative integer");
            if (v(e)) {
              var n;
              if (e.size().length > 1)
                throw new Error("Only one dimensional matrices supported");
              return u(e.valueOf(), t, r);
            }
            if (Array.isArray(e)) return u(e, t, r);
          }
          function u(e, t, a) {
            if (t >= e.length) throw new Error("k out of bounds");
            for (var o = 0; o < e.length; o++)
              if (r(e[o]) && n(e[o])) return e[o];
            for (var i = 0, s = e.length - 1; i < s; ) {
              for (
                var u = i,
                  c = s,
                  l = e[Math.floor(Math.random() * (s - i + 1)) + i];
                u < c;

              )
                if (a(e[u], l) >= 0) {
                  var p = e[c];
                  (e[c] = e[u]), (e[u] = p), --c;
                } else ++u;
              a(e[u], l) > 0 && --u, t <= u ? (s = u) : (i = u + 1);
            }
            return e[t];
          }
        }),
        ff = "combinationsWithRep",
        mf,
        hf = ge(ff, ["typed"], (e) => {
          var { typed: t } = e;
          return t(ff, {
            "number, number": function e(t, r) {
              if (!it(t) || t < 0)
                throw new TypeError(
                  "Positive integer value expected in function combinationsWithRep"
                );
              if (!it(r) || r < 0)
                throw new TypeError(
                  "Positive integer value expected in function combinationsWithRep"
                );
              if (t < 1)
                throw new TypeError(
                  "k must be less than or equal to n + k - 1"
                );
              var n, a;
              return r < t - 1
                ? Sr(t, t + r - 1) / Sr(1, r)
                : Sr(r + 1, t + r - 1) / Sr(1, t - 1);
            },
            "BigNumber, BigNumber": function e(t, r) {
              var n,
                a,
                o,
                i = new (0, t.constructor)(1),
                s = t.minus(i);
              if (!df(t) || !df(r))
                throw new TypeError(
                  "Positive integer value expected in function combinationsWithRep"
                );
              if (t.lt(i))
                throw new TypeError(
                  "k must be less than or equal to n + k - 1 in function combinationsWithRep"
                );
              if (((a = i), r.lt(s)))
                for (o = i; o.lte(s); o = o.plus(i))
                  a = a.times(r.plus(o)).dividedBy(o);
              else
                for (o = i; o.lte(r); o = o.plus(i))
                  a = a.times(s.plus(o)).dividedBy(o);
              return a;
            },
          });
        });
      function df(e) {
        return e.isInteger() && e.gte(0);
      }
      var gf = "factorial",
        yf,
        vf = ge(gf, ["typed", "gamma"], (e) => {
          var { typed: t, gamma: r } = e;
          return t(gf, {
            number: function e(t) {
              if (t < 0) throw new Error("Value must be non-negative");
              return r(t + 1);
            },
            BigNumber: function e(t) {
              if (t.isNegative()) throw new Error("Value must be non-negative");
              return r(t.plus(1));
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
          });
        }),
        xf = "multinomial",
        bf,
        wf = ge(
          xf,
          [
            "typed",
            "add",
            "divide",
            "multiply",
            "factorial",
            "isInteger",
            "isPositive",
          ],
          (e) => {
            var {
              typed: t,
              add: r,
              divide: n,
              multiply: a,
              factorial: o,
              isInteger: i,
              isPositive: s,
            } = e;
            return t(xf, {
              "Array | Matrix": function e(t) {
                var u = 0,
                  c = 1;
                return (
                  Yc(t, function (e) {
                    if (!i(e) || !s(e))
                      throw new TypeError(
                        "Positive integer value expected in function multinomial"
                      );
                    (u = r(u, e)), (c = a(c, o(e)));
                  }),
                  n(o(u), c)
                );
              },
            });
          }
        ),
        Nf = "permutations",
        Sf,
        Ef = ge(Nf, ["typed", "factorial"], (e) => {
          var { typed: t, factorial: r } = e;
          return t(Nf, {
            "number | BigNumber": r,
            "number, number": function e(t, r) {
              if (!it(t) || t < 0)
                throw new TypeError(
                  "Positive integer value expected in function permutations"
                );
              if (!it(r) || r < 0)
                throw new TypeError(
                  "Positive integer value expected in function permutations"
                );
              if (r > t)
                throw new TypeError(
                  "second argument k must be less than or equal to first argument n"
                );
              return Sr(t - r + 1, t);
            },
            "BigNumber, BigNumber": function e(t, r) {
              var n, a, o;
              if (!Af(t) || !Af(r))
                throw new TypeError(
                  "Positive integer value expected in function permutations"
                );
              if (r.gt(t))
                throw new TypeError(
                  "second argument k must be less than or equal to first argument n"
                );
              for (
                n = t.mul(0).add(1), a = t.minus(r).plus(1);
                a.lte(t);
                a = a.plus(1)
              )
                n = n.times(a);
              return n;
            },
          });
        });
      function Af(e) {
        return e.isInteger() && e.gte(0);
      }
      var Of = r(377),
        Cf = Of(Date.now());
      function Tf(e) {
        var t;
        function r(e) {
          t = null === e ? Cf : Of(String(e));
        }
        function n() {
          return t();
        }
        return r(e), n;
      }
      var Mf = "pickRandom",
        kf,
        jf = ge(Mf, ["typed", "config", "?on"], (e) => {
          var { typed: t, config: r, on: n } = e,
            a = Tf(r.randomSeed);
          return (
            n &&
              n("config", function (e, t) {
                e.randomSeed !== t.randomSeed && (a = Tf(e.randomSeed));
              }),
            t(Mf, {
              "Array | Matrix": function e(t) {
                return o(t, {});
              },
              "Array | Matrix, Object": function e(t, r) {
                return o(t, r);
              },
              "Array | Matrix, number": function e(t, r) {
                return o(t, { number: r });
              },
              "Array | Matrix, Array | Matrix": function e(t, r) {
                return o(t, { weights: r });
              },
              "Array | Matrix, Array | Matrix, number": function e(t, r, n) {
                return o(t, { number: n, weights: r });
              },
              "Array | Matrix, number, Array | Matrix": function e(t, r, n) {
                return o(t, { number: r, weights: n });
              },
            })
          );
          function o(e, t) {
            var { number: r, weights: n, elementWise: o = !0 } = t,
              i = void 0 === r;
            i && (r = 1);
            var s = v(e) ? e.create : v(n) ? n.create : null;
            (e = e.valueOf()),
              n && (n = n.valueOf()),
              !0 === o && ((e = Be(e)), (n = Be(n)));
            var u = 0;
            if (void 0 !== n) {
              if (n.length !== e.length)
                throw new Error(
                  "Weights must have the same length as possibles"
                );
              for (var c = 0, l = n.length; c < l; c++) {
                if (!p(n[c]) || n[c] < 0)
                  throw new Error(
                    "Weights must be an array of positive numbers"
                  );
                u += n[c];
              }
            }
            for (var f = e.length, m = [], h; m.length < r; ) {
              if (void 0 === n) h = e[Math.floor(a() * f)];
              else
                for (var d = a() * u, g = 0, y = e.length; g < y; g++)
                  if ((d -= n[g]) < 0) {
                    h = e[g];
                    break;
                  }
              m.push(h);
            }
            return i ? m[0] : s ? s(m) : m;
          }
        }),
        qf = "random",
        Pf = null,
        Ff = null,
        If = ge(qf, ["typed", "config", "?on"], (e) => {
          var { typed: t, config: r, on: n, matrix: a } = e,
            o = Tf(r.randomSeed);
          return (
            n &&
              n("config", function (e, t) {
                e.randomSeed !== t.randomSeed && (o = Tf(e.randomSeed));
              }),
            t(qf, {
              "": () => i(0, 1),
              number: (e) => i(0, e),
              "number, number": (e, t) => i(e, t),
            })
          );
          function i(e, t) {
            return e + o() * (t - e);
          }
        });
      function Rf(e, t) {
        var r = [];
        if ((e = e.slice(0)).length > 1)
          for (var n = 0, a = e.shift(); n < a; n++) r.push(Rf(e, t));
        else for (var o = 0, i = e.shift(); o < i; o++) r.push(t());
        return r;
      }
      var Bf = "randomInt",
        Df,
        zf = ge(Bf, ["typed", "config", "?on"], (e) => {
          var { typed: t, config: r, on: n } = e,
            a = Tf(r.randomSeed);
          return (
            n &&
              n("config", function (e, t) {
                e.randomSeed !== t.randomSeed && (a = Tf(e.randomSeed));
              }),
            t(Bf, {
              "": () => i(0, 1),
              number: (e) => i(0, e),
              "number, number": (e, t) => i(e, t),
              "Array | Matrix": (e) => o(e, 0, 1),
              "Array | Matrix, number": (e, t) => o(e, 0, t),
              "Array | Matrix, number, number": (e, t, r) => o(e, t, r),
            })
          );
          function o(e, t, r) {
            var n = Rf(e.valueOf(), () => i(t, r));
            return v(e) ? e.create(n) : n;
          }
          function i(e, t) {
            return Math.floor(e + a() * (t - e));
          }
        }),
        _f = "equalScalar",
        Lf = null,
        $f = null,
        Uf = ge(_f, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(_f, {
            "number, number": function e(t, n) {
              return Et(t, n, r.epsilon);
            },
          });
        }),
        Wf = "compare",
        Hf = null,
        Jf = null,
        Vf = ge(Wf, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(Wf, {
            "number, number": function e(t, n) {
              return Et(t, n, r.epsilon) ? 0 : t > n ? 1 : -1;
            },
          });
        }),
        Xf = r(228),
        Gf = "compareNatural",
        Qf,
        Zf = ge(Gf, ["typed", "compare"], (e) => {
          var { typed: t, compare: r } = e,
            n = r.signatures["boolean,boolean"];
          return t(Gf, {
            "any, any": function e(t, s) {
              var u = G(t),
                c = G(s),
                l;
              if (
                !(
                  ("number" !== u && "BigNumber" !== u && "Fraction" !== u) ||
                  ("number" !== c && "BigNumber" !== c && "Fraction" !== c)
                )
              )
                return "0" !== (l = r(t, s)).toString()
                  ? l > 0
                    ? 1
                    : -1
                  : Xf(u, c);
              if (
                "Array" === u ||
                "Matrix" === u ||
                "Array" === c ||
                "Matrix" === c
              )
                return 0 !== (l = a(this, t, s)) ? l : Xf(u, c);
              if (u !== c) return Xf(u, c);
              if ("Complex" === u) return Yf(t, s);
              if ("Unit" === u)
                return t.equalBase(s)
                  ? this(t.value, s.value)
                  : o(this, t.formatUnits(), s.formatUnits());
              if ("boolean" === u) return n(t, s);
              if ("string" === u) return Xf(t, s);
              if ("Object" === u) return i(this, t, s);
              if ("null" === u) return 0;
              if ("undefined" === u) return 0;
              throw new TypeError('Unsupported type of value "' + u + '"');
            },
          });
          function a(e, t, r) {
            return w(t) && w(r)
              ? o(e, t.toJSON().values, r.toJSON().values)
              : w(t)
              ? a(e, t.toArray(), r)
              : w(r)
              ? a(e, t, r.toArray())
              : b(t)
              ? a(e, t.toJSON().data, r)
              : b(r)
              ? a(e, t, r.toJSON().data)
              : Array.isArray(t)
              ? Array.isArray(r)
                ? o(e, t, r)
                : a(e, t, [r])
              : a(e, [t], r);
          }
          function o(e, t, r) {
            for (var n = 0, a = Math.min(t.length, r.length); n < a; n++) {
              var o = e(t[n], r[n]);
              if (0 !== o) return o;
            }
            return t.length > r.length ? 1 : t.length < r.length ? -1 : 0;
          }
          function i(e, t, r) {
            var n = Object.keys(t),
              a = Object.keys(r);
            n.sort(Xf), a.sort(Xf);
            var i = o(e, n, a);
            if (0 !== i) return i;
            for (var s = 0; s < n.length; s++) {
              var u = e(t[n[s]], r[a[s]]);
              if (0 !== u) return u;
            }
            return 0;
          }
        });
      function Yf(e, t) {
        return e.re > t.re
          ? 1
          : e.re < t.re
          ? -1
          : e.im > t.im
          ? 1
          : e.im < t.im
          ? -1
          : 0;
      }
      var Kf = "compareText",
        em = null,
        tm = null,
        rm = ge(Kf, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Kf, { "any, any": ea });
        }),
        nm = "equal",
        am = null,
        om = null,
        im = ge(nm, ["typed", "equalScalar"], (e) => {
          var { typed: t, equalScalar: r } = e;
          return t(nm, {
            "any, any": function e(t, n) {
              return null === t
                ? null === n
                : null === n
                ? null === t
                : void 0 === t
                ? void 0 === n
                : void 0 === n
                ? void 0 === t
                : r(t, n);
            },
          });
        }),
        sm = "equalText",
        um,
        cm = ge(sm, ["typed", "compareText", "isZero"], (e) => {
          var { typed: t, compareText: r, isZero: n } = e;
          return t(sm, {
            "any, any": function e(t, a) {
              return n(r(t, a));
            },
          });
        }),
        lm = "smaller",
        pm = null,
        fm = null,
        mm = ge(lm, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(lm, {
            "number, number": function e(t, n) {
              return t < n && !Et(t, n, r.epsilon);
            },
          });
        }),
        hm = "smallerEq",
        dm = null,
        gm = null,
        ym = ge(hm, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(hm, {
            "number, number": function e(t, n) {
              return t <= n || Et(t, n, r.epsilon);
            },
          });
        }),
        vm = "larger",
        xm = null,
        bm = null,
        wm = ge(vm, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(vm, {
            "number, number": function e(t, n) {
              return t > n && !Et(t, n, r.epsilon);
            },
          });
        }),
        Nm = "largerEq",
        Sm = null,
        Em = null,
        Am = ge(Nm, ["typed", "config"], (e) => {
          var { typed: t, config: r } = e;
          return t(Nm, {
            "number, number": function e(t, n) {
              return t >= n || Et(t, n, r.epsilon);
            },
          });
        }),
        Om = "deepEqual",
        Cm,
        Tm = ge(Om, ["typed", "equal"], (e) => {
          var { typed: t, equal: r } = e;
          return t(Om, {
            "any, any": function e(t, r) {
              return n(t.valueOf(), r.valueOf());
            },
          });
          function n(e, t) {
            if (Array.isArray(e)) {
              if (Array.isArray(t)) {
                var a = e.length;
                if (a !== t.length) return !1;
                for (var o = 0; o < a; o++) if (!n(e[o], t[o])) return !1;
                return !0;
              }
              return !1;
            }
            return !Array.isArray(t) && r(e, t);
          }
        }),
        Mm = "unequal",
        km = null,
        jm = null,
        qm = ge(Mm, ["typed", "equalScalar"], (e) => {
          var { typed: t, equalScalar: r } = e;
          return t(Mm, {
            "any, any": function e(t, n) {
              return null === t
                ? null !== n
                : null === n
                ? null !== t
                : void 0 === t
                ? void 0 !== n
                : void 0 === n
                ? void 0 !== t
                : !r(t, n);
            },
          });
        }),
        Pm,
        Fm,
        Im = ge("erf", ["typed"], (e) => {
          var { typed: t } = e;
          return t("name", {
            number: function e(t) {
              var o = Math.abs(t);
              return o >= _m
                ? st(t)
                : o <= Rm
                ? st(t) * r(o)
                : o <= 4
                ? st(t) * (1 - n(o))
                : st(t) * (1 - a(o));
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
          });
          function r(e) {
            var t = e * e,
              r = Dm[0][4] * t,
              n = t,
              a;
            for (a = 0; a < 3; a += 1)
              (r = (r + Dm[0][a]) * t), (n = (n + zm[0][a]) * t);
            return (e * (r + Dm[0][3])) / (n + zm[0][3]);
          }
          function n(e) {
            var t = Dm[1][8] * e,
              r = e,
              n;
            for (n = 0; n < 7; n += 1)
              (t = (t + Dm[1][n]) * e), (r = (r + zm[1][n]) * e);
            var a = (t + Dm[1][7]) / (r + zm[1][7]),
              o = parseInt(16 * e) / 16,
              i = (e - o) * (e + o);
            return Math.exp(-o * o) * Math.exp(-i) * a;
          }
          function a(e) {
            var t = 1 / (e * e),
              r = Dm[2][5] * t,
              n = t,
              a;
            for (a = 0; a < 4; a += 1)
              (r = (r + Dm[2][a]) * t), (n = (n + zm[2][a]) * t);
            var o = (t * (r + Dm[2][4])) / (n + zm[2][4]);
            o = (Bm - o) / e;
            var i = (e - (t = parseInt(16 * e) / 16)) * (e + t);
            return Math.exp(-t * t) * Math.exp(-i) * o;
          }
        }),
        Rm = 0.46875,
        Bm = 0.5641895835477563,
        Dm = [
          [
            3.1611237438705655, 113.86415415105016, 377.485237685302,
            3209.3775891384694, 0.18577770618460315,
          ],
          [
            0.5641884969886701, 8.883149794388377, 66.11919063714163,
            298.6351381974001, 881.952221241769, 1712.0476126340707,
            2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8,
          ],
          [
            0.30532663496123236, 0.36034489994980445, 0.12578172611122926,
            0.016083785148742275, 0.0006587491615298378, 0.016315387137302097,
          ],
        ],
        zm = [
          [
            23.601290952344122, 244.02463793444417, 1282.6165260773723,
            2844.236833439171,
          ],
          [
            15.744926110709835, 117.6939508913125, 537.1811018620099,
            1621.3895745666903, 3290.7992357334597, 4362.619090143247,
            3439.3676741437216, 1230.3393548037495,
          ],
          [
            2.568520192289822, 1.8729528499234604, 0.5279051029514285,
            0.06051834131244132, 0.0023352049762686918,
          ],
        ],
        _m = Math.pow(2, 53),
        Lm = "mode",
        $m,
        Um = ge(Lm, ["typed", "isNaN", "isNumeric"], (e) => {
          var { typed: t, isNaN: r, isNumeric: n } = e;
          return t(Lm, {
            "Array | Matrix": a,
            "...": function e(t) {
              return a(t);
            },
          });
          function a(e) {
            var t;
            if (0 === (e = Be(e.valueOf())).length)
              throw new Error("Cannot calculate mode of an empty array");
            for (var a = {}, o = [], i = 0, s = 0; s < e.length; s++) {
              var u = e[s];
              if (n(u) && r(u))
                throw new Error(
                  "Cannot calculate mode of an array containing NaN values"
                );
              u in a || (a[u] = 0),
                a[u]++,
                a[u] === i ? o.push(u) : a[u] > i && ((i = a[u]), (o = [u]));
            }
            return o;
          }
        });
      function Wm(e, t, r) {
        var n;
        return -1 !== String(e).indexOf("Unexpected type")
          ? ((n =
              arguments.length > 2
                ? " (type: " + G(r) + ", value: " + JSON.stringify(r) + ")"
                : " (type: " + e.data.actual + ")"),
            new TypeError(
              "Cannot calculate " + t + ", unexpected type of argument" + n
            ))
          : -1 !== String(e).indexOf("complex numbers")
          ? ((n =
              arguments.length > 2
                ? " (type: " + G(r) + ", value: " + JSON.stringify(r) + ")"
                : ""),
            new TypeError(
              "Cannot calculate " +
                t +
                ", no ordering relation is defined for complex numbers" +
                n
            ))
          : e;
      }
      var Hm = "prod",
        Jm,
        Vm = ge(Hm, ["typed", "config", "multiplyScalar", "numeric"], (e) => {
          var { typed: t, config: r, multiplyScalar: n, numeric: a } = e;
          return t(Hm, {
            "Array | Matrix": o,
            "Array | Matrix, number | BigNumber": function e(t, r) {
              throw new Error("prod(A, dim) is not yet supported");
            },
            "...": function e(t) {
              return o(t);
            },
          });
          function o(e) {
            var t;
            if (
              (Yc(e, function (e) {
                try {
                  t = void 0 === t ? e : n(t, e);
                } catch (t) {
                  throw Wm(t, "prod", e);
                }
              }),
              "string" == typeof t && (t = a(t, r.number)),
              void 0 === t)
            )
              throw new Error("Cannot calculate prod of an empty array");
            return t;
          }
        }),
        Xm = "max",
        Gm,
        Qm = ge(Xm, ["typed", "config", "numeric", "larger"], (e) => {
          var { typed: t, config: r, numeric: n, larger: a } = e;
          return t(Xm, {
            "Array | Matrix": i,
            "Array | Matrix, number | BigNumber": function e(t, r) {
              return el(t, r.valueOf(), o);
            },
            "...": function e(t) {
              if (Zc(t))
                throw new TypeError("Scalar values expected in function max");
              return i(t);
            },
          });
          function o(e, t) {
            try {
              return a(e, t) ? e : t;
            } catch (e) {
              throw Wm(e, "max", t);
            }
          }
          function i(e) {
            var t;
            if (
              (Yc(e, function (e) {
                try {
                  isNaN(e) && "number" == typeof e
                    ? (t = NaN)
                    : (void 0 === t || a(e, t)) && (t = e);
                } catch (t) {
                  throw Wm(t, "max", e);
                }
              }),
              void 0 === t)
            )
              throw new Error("Cannot calculate max of an empty array");
            return "string" == typeof t && (t = n(t, r.number)), t;
          }
        }),
        Zm = "min",
        Ym,
        Km = ge(Zm, ["typed", "config", "numeric", "smaller"], (e) => {
          var { typed: t, config: r, numeric: n, smaller: a } = e;
          return t(Zm, {
            "Array | Matrix": i,
            "Array | Matrix, number | BigNumber": function e(t, r) {
              return el(t, r.valueOf(), o);
            },
            "...": function e(t) {
              if (Zc(t))
                throw new TypeError("Scalar values expected in function min");
              return i(t);
            },
          });
          function o(e, t) {
            try {
              return a(e, t) ? e : t;
            } catch (e) {
              throw Wm(e, "min", t);
            }
          }
          function i(e) {
            var t;
            if (
              (Yc(e, function (e) {
                try {
                  isNaN(e) && "number" == typeof e
                    ? (t = NaN)
                    : (void 0 === t || a(e, t)) && (t = e);
                } catch (t) {
                  throw Wm(t, "min", e);
                }
              }),
              void 0 === t)
            )
              throw new Error("Cannot calculate min of an empty array");
            return "string" == typeof t && (t = n(t, r.number)), t;
          }
        }),
        eh = "sum",
        th,
        rh = ge(eh, ["typed", "config", "add", "numeric"], (e) => {
          var { typed: t, config: r, add: n, numeric: a } = e;
          return t(eh, {
            "Array | Matrix": o,
            "Array | Matrix, number | BigNumber": i,
            "...": function e(t) {
              if (Zc(t))
                throw new TypeError("Scalar values expected in function sum");
              return o(t);
            },
          });
          function o(e) {
            var t;
            return (
              Yc(e, function (e) {
                try {
                  t = void 0 === t ? e : n(t, e);
                } catch (t) {
                  throw Wm(t, "sum", e);
                }
              }),
              void 0 === t && (t = a(0, r.number)),
              "string" == typeof t && (t = a(t, r.number)),
              t
            );
          }
          function i(e, t) {
            try {
              var r;
              return el(e, t, n);
            } catch (e) {
              throw Wm(e, "sum");
            }
          }
        }),
        nh = "mean",
        ah,
        oh = ge(nh, ["typed", "add", "divide"], (e) => {
          var { typed: t, add: r, divide: n } = e;
          return t(nh, {
            "Array | Matrix": o,
            "Array | Matrix, number | BigNumber": a,
            "...": function e(t) {
              if (Zc(t))
                throw new TypeError("Scalar values expected in function mean");
              return o(t);
            },
          });
          function a(e, t) {
            try {
              var a = el(e, t, r),
                o = Array.isArray(e) ? Se(e) : e.size();
              return n(a, o[t]);
            } catch (e) {
              throw Wm(e, "mean");
            }
          }
          function o(e) {
            var t,
              a = 0;
            if (
              (Yc(e, function (e) {
                try {
                  (t = void 0 === t ? e : r(t, e)), a++;
                } catch (t) {
                  throw Wm(t, "mean", e);
                }
              }),
              0 === a)
            )
              throw new Error("Cannot calculate the mean of an empty array");
            return n(t, a);
          }
        }),
        ih = "median",
        sh,
        uh = ge(
          ih,
          ["typed", "add", "divide", "compare", "partitionSelect"],
          (e) => {
            var {
              typed: t,
              add: r,
              divide: n,
              compare: a,
              partitionSelect: o,
            } = e;
            function i(e) {
              try {
                var t = (e = Be(e.valueOf())).length;
                if (0 === t)
                  throw new Error("Cannot calculate median of an empty array");
                if (t % 2 == 0) {
                  for (
                    var r = t / 2 - 1, n = o(e, r + 1), i = e[r], c = 0;
                    c < r;
                    ++c
                  )
                    a(e[c], i) > 0 && (i = e[c]);
                  return u(i, n);
                }
                var l = o(e, (t - 1) / 2);
                return s(l);
              } catch (e) {
                throw Wm(e, "median");
              }
            }
            var s = t({
                "number | BigNumber | Complex | Unit": function e(t) {
                  return t;
                },
              }),
              u = t({
                "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit":
                  function e(t, a) {
                    return n(r(t, a), 2);
                  },
              });
            return t(ih, {
              "Array | Matrix": i,
              "Array | Matrix, number | BigNumber": function e(t, r) {
                throw new Error("median(A, dim) is not yet supported");
              },
              "...": function e(t) {
                if (Zc(t))
                  throw new TypeError(
                    "Scalar values expected in function median"
                  );
                return i(t);
              },
            });
          }
        ),
        ch = "mad",
        lh,
        ph = ge(ch, ["typed", "abs", "map", "median", "subtract"], (e) => {
          var { typed: t, abs: r, map: n, median: a, subtract: o } = e;
          return t(ch, {
            "Array | Matrix": i,
            "...": function e(t) {
              return i(t);
            },
          });
          function i(e) {
            if (0 === (e = Be(e.valueOf())).length)
              throw new Error(
                "Cannot calculate median absolute deviation (mad) of an empty array"
              );
            try {
              var t = a(e);
              return a(
                n(e, function (e) {
                  return r(o(e, t));
                })
              );
            } catch (e) {
              throw e instanceof TypeError && -1 !== e.message.indexOf("median")
                ? new TypeError(e.message.replace("median", "mad"))
                : Wm(e, "mad");
            }
          }
        }),
        fh = "unbiased",
        mh = "variance",
        hh,
        dh = ge(
          mh,
          ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
          (e) => {
            var {
              typed: t,
              add: r,
              subtract: n,
              multiply: a,
              divide: o,
              apply: i,
              isNaN: s,
            } = e;
            return t(mh, {
              "Array | Matrix": function e(t) {
                return u(t, fh);
              },
              "Array | Matrix, string": u,
              "Array | Matrix, number | BigNumber": function e(t, r) {
                return c(t, r, fh);
              },
              "Array | Matrix, number | BigNumber, string": c,
              "...": function e(t) {
                return u(t, fh);
              },
            });
            function u(e, t) {
              var i,
                u = 0;
              if (0 === e.length)
                throw new SyntaxError(
                  "Function variance requires one or more parameters (0 provided)"
                );
              if (
                (Yc(e, function (e) {
                  try {
                    (i = void 0 === i ? e : r(i, e)), u++;
                  } catch (t) {
                    throw Wm(t, "variance", e);
                  }
                }),
                0 === u)
              )
                throw new Error("Cannot calculate variance of an empty array");
              var c = o(i, u);
              if (
                ((i = void 0),
                Yc(e, function (e) {
                  var t = n(e, c);
                  i = void 0 === i ? a(t, t) : r(i, a(t, t));
                }),
                s(i))
              )
                return i;
              switch (t) {
                case "uncorrected":
                  return o(i, u);
                case "biased":
                  return o(i, u + 1);
                case "unbiased":
                  var l = f(i) ? i.mul(0) : 0;
                  return 1 === u ? l : o(i, u - 1);
                default:
                  throw new Error(
                    'Unknown normalization "' +
                      t +
                      '". Choose "unbiased" (default), "uncorrected", or "biased".'
                  );
              }
            }
            function c(e, t, r) {
              try {
                if (0 === e.length)
                  throw new SyntaxError(
                    "Function variance requires one or more parameters (0 provided)"
                  );
                return i(e, t, (e) => u(e, r));
              } catch (e) {
                throw Wm(e, "variance");
              }
            }
          }
        ),
        gh,
        yh,
        vh = ge(
          "quantileSeq",
          ["typed", "add", "multiply", "partitionSelect", "compare"],
          (e) => {
            var {
              typed: t,
              add: r,
              multiply: n,
              partitionSelect: a,
              compare: o,
            } = e;
            function i(e, t, r) {
              var n, a, o;
              if (arguments.length < 2 || arguments.length > 3)
                throw new SyntaxError(
                  "Function quantileSeq requires two or three parameters"
                );
              if (x(e)) {
                if ("boolean" == typeof (r = r || !1)) {
                  if (((a = e.valueOf()), p(t))) {
                    if (t < 0) throw new Error("N/prob must be non-negative");
                    if (t <= 1) return s(a, t, r);
                    if (t > 1) {
                      if (!it(t))
                        throw new Error("N must be a positive integer");
                      var i = t + 1;
                      n = new Array(t);
                      for (var u = 0; u < t; ) n[u] = s(a, ++u / i, r);
                      return n;
                    }
                  }
                  if (f(t)) {
                    var c = t.constructor;
                    if (t.isNegative())
                      throw new Error("N/prob must be non-negative");
                    if (((o = new c(1)), t.lte(o))) return new c(s(a, t, r));
                    if (t.gt(o)) {
                      if (!t.isInteger())
                        throw new Error("N must be a positive integer");
                      var l = t.toNumber();
                      if (l > 4294967295)
                        throw new Error(
                          "N must be less than or equal to 2^32-1, as that is the maximum length of an Array"
                        );
                      var m = new c(l + 1);
                      n = new Array(l);
                      for (var h = 0; h < l; )
                        n[h] = new c(s(a, new c(++h).div(m), r));
                      return n;
                    }
                  }
                  if (Array.isArray(t)) {
                    n = new Array(t.length);
                    for (var d = 0; d < n.length; ++d) {
                      var g = t[d];
                      if (p(g)) {
                        if (g < 0 || g > 1)
                          throw new Error(
                            "Probability must be between 0 and 1, inclusive"
                          );
                      } else {
                        if (!f(g))
                          throw new TypeError(
                            "Unexpected type of argument in function quantileSeq"
                          );
                        if (
                          ((o = new g.constructor(1)),
                          g.isNegative() || g.gt(o))
                        )
                          throw new Error(
                            "Probability must be between 0 and 1, inclusive"
                          );
                      }
                      n[d] = s(a, g, r);
                    }
                    return n;
                  }
                  throw new TypeError(
                    "Unexpected type of argument in function quantileSeq"
                  );
                }
                throw new TypeError(
                  "Unexpected type of argument in function quantileSeq"
                );
              }
              throw new TypeError(
                "Unexpected type of argument in function quantileSeq"
              );
            }
            function s(e, t, i) {
              var s = Be(e),
                c = s.length;
              if (0 === c)
                throw new Error(
                  "Cannot calculate quantile of an empty sequence"
                );
              if (p(t)) {
                var l = t * (c - 1),
                  f = l % 1;
                if (0 === f) {
                  var m = i ? s[l] : a(s, l);
                  return u(m), m;
                }
                var h = Math.floor(l),
                  d,
                  g;
                if (i) (d = s[h]), (g = s[h + 1]);
                else {
                  (g = a(s, h + 1)), (d = s[h]);
                  for (var y = 0; y < h; ++y) o(s[y], d) > 0 && (d = s[y]);
                }
                return u(d), u(g), r(n(d, 1 - f), n(g, f));
              }
              var v = t.times(c - 1);
              if (v.isInteger()) {
                v = v.toNumber();
                var x = i ? s[v] : a(s, v);
                return u(x), x;
              }
              var b = v.floor(),
                w = v.minus(b),
                N = b.toNumber(),
                S,
                E;
              if (i) (S = s[N]), (E = s[N + 1]);
              else {
                (E = a(s, N + 1)), (S = s[N]);
                for (var A = 0; A < N; ++A) o(s[A], S) > 0 && (S = s[A]);
              }
              u(S), u(E);
              var O = new w.constructor(1);
              return r(n(S, O.minus(w)), n(E, w));
            }
            var u = t({
              "number | BigNumber | Unit": function e(t) {
                return t;
              },
            });
            return i;
          }
        ),
        xh = "std",
        bh,
        wh = ge(xh, ["typed", "sqrt", "variance"], (e) => {
          var { typed: t, sqrt: r, variance: n } = e;
          return t(xh, {
            "Array | Matrix": a,
            "Array | Matrix, string": a,
            "Array | Matrix, number | BigNumber": a,
            "Array | Matrix, number | BigNumber, string": a,
            "...": function e(t) {
              return a(t);
            },
          });
          function a(e, t) {
            if (0 === e.length)
              throw new SyntaxError(
                "Function std requires one or more parameters (0 provided)"
              );
            try {
              return r(n.apply(null, arguments));
            } catch (e) {
              throw e instanceof TypeError &&
                -1 !== e.message.indexOf(" variance")
                ? new TypeError(e.message.replace(" variance", " std"))
                : e;
            }
          }
        }),
        Nh = "format",
        Sh,
        Eh = ge(Nh, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Nh, { any: Gn, "any, Object | function | number": Gn });
        }),
        Ah = "print",
        Oh,
        Ch = ge(Ah, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Ah, {
            "string, Object | Array": Th,
            "string, Object | Array, number | Object": Th,
          });
        });
      function Th(e, t, r) {
        return e.replace(/\$([\w.]+)/g, function (e, n) {
          for (
            var a = n.split("."), o = t[a.shift()];
            a.length && void 0 !== o;

          ) {
            var i = a.shift();
            o = i ? o[i] : o + ".";
          }
          return void 0 !== o ? (g(o) ? o : Gn(o, r)) : e;
        });
      }
      var Mh,
        kh,
        jh = ge(
          "apply",
          ["typed", "isInteger"],
          (e) => {
            var { typed: t, isInteger: r } = e,
              n = Lp({ typed: t, isInteger: r });
            return t("apply", {
              "...any": function e(t) {
                var r = t[1];
                p(r) ? (t[1] = r - 1) : f(r) && (t[1] = r.minus(1));
                try {
                  return n.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        );
      function qh(e, t, r) {
        var n = e.filter(function (e) {
          return V(e) && !(e.name in t) && !r.has(e.name);
        })[0];
        if (!n)
          throw new Error(
            'No undefined variable found in inline expression "' + e + '"'
          );
        var a = n.name,
          o = Sp(r),
          i = e.compile();
        return function e(t) {
          return o.set(a, t), i.evaluate(o);
        };
      }
      var Ph,
        Fh,
        Ih = ge(
          "filter",
          ["typed"],
          (e) => {
            var { typed: t } = e;
            function r(e, t, r) {
              var a, o;
              return (
                e[0] && (a = e[0].compile().evaluate(r)),
                e[1] &&
                  (o =
                    V(e[1]) || z(e[1])
                      ? e[1].compile().evaluate(r)
                      : qh(e[1], t, r)),
                n(a, o)
              );
            }
            r.rawArgs = !0;
            var n = t("filter", {
              "Array, function": Rh,
              "Matrix, function": function e(t, r) {
                return t.create(Rh(t.toArray(), r));
              },
              "Array, RegExp": Le,
              "Matrix, RegExp": function e(t, r) {
                return t.create(Le(t.toArray(), r));
              },
            });
            return r;
          },
          { isTransformFunction: !0 }
        );
      function Rh(e, t) {
        var r = xc(t);
        return _e(e, function (e, n, a) {
          return 1 === r ? t(e) : 2 === r ? t(e, [n + 1]) : t(e, [n + 1], a);
        });
      }
      var Bh,
        Dh,
        zh = ge(
          "forEach",
          ["typed"],
          (e) => {
            var { typed: t } = e;
            function r(e, t, r) {
              var a, o;
              return (
                e[0] && (a = e[0].compile().evaluate(r)),
                e[1] &&
                  (o =
                    V(e[1]) || z(e[1])
                      ? e[1].compile().evaluate(r)
                      : qh(e[1], t, r)),
                n(a, o)
              );
            }
            r.rawArgs = !0;
            var n = t("forEach", {
              "Array | Matrix, function": function e(t, r) {
                var n = xc(r),
                  a;
                (function e(a, o) {
                  Array.isArray(a)
                    ? ze(a, function (t, r) {
                        e(t, o.concat(r + 1));
                      })
                    : 1 === n
                    ? r(a)
                    : 2 === n
                    ? r(a, o)
                    : r(a, o, t);
                })(t.valueOf(), []);
              },
            });
            return r;
          },
          { isTransformFunction: !0 }
        ),
        _h,
        Lh,
        $h = ge(
          "map",
          ["typed"],
          (e) => {
            var { typed: t } = e;
            function r(e, t, r) {
              var a, o;
              return (
                e[0] && (a = e[0].compile().evaluate(r)),
                e[1] &&
                  (o =
                    V(e[1]) || z(e[1])
                      ? e[1].compile().evaluate(r)
                      : qh(e[1], t, r)),
                n(a, o)
              );
            }
            r.rawArgs = !0;
            var n = t("map", {
              "Array, function": function e(t, r) {
                return Uh(t, r, t);
              },
              "Matrix, function": function e(t, r) {
                return t.create(Uh(t.valueOf(), r, t));
              },
            });
            return r;
          },
          { isTransformFunction: !0 }
        );
      function Uh(e, t, r) {
        var n = xc(t);
        function a(e, o) {
          return Array.isArray(e)
            ? De(e, function (e, t) {
                return a(e, o.concat(t + 1));
              })
            : 1 === n
            ? t(e)
            : 2 === n
            ? t(e, o)
            : t(e, o, r);
        }
        return a(e, []);
      }
      function Wh(e) {
        if (2 === e.length && x(e[0])) {
          var t = (e = e.slice())[1];
          p(t) ? (e[1] = t - 1) : f(t) && (e[1] = t.minus(1));
        }
        return e;
      }
      var Hh,
        Jh,
        Vh = ge(
          "max",
          ["typed", "config", "numeric", "larger"],
          (e) => {
            var { typed: t, config: r, numeric: n, larger: a } = e,
              o = Qm({ typed: t, config: r, numeric: n, larger: a });
            return t("max", {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return o.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        Xh,
        Gh,
        Qh = ge(
          "mean",
          ["typed", "add", "divide"],
          (e) => {
            var { typed: t, add: r, divide: n } = e,
              a = oh({ typed: t, add: r, divide: n });
            return t("mean", {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return a.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        Zh,
        Yh,
        Kh = ge(
          "min",
          ["typed", "config", "numeric", "smaller"],
          (e) => {
            var { typed: t, config: r, numeric: n, smaller: a } = e,
              o = Km({ typed: t, config: r, numeric: n, smaller: a });
            return t("min", {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return o.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        ed,
        td,
        rd = ge(
          "range",
          [
            "typed",
            "config",
            "?matrix",
            "?bignumber",
            "smaller",
            "smallerEq",
            "larger",
            "largerEq",
          ],
          (e) => {
            var {
                typed: t,
                config: r,
                matrix: n,
                bignumber: a,
                smaller: o,
                smallerEq: i,
                larger: s,
                largerEq: u,
              } = e,
              c = af({
                typed: t,
                config: r,
                matrix: n,
                bignumber: a,
                smaller: o,
                smallerEq: i,
                larger: s,
                largerEq: u,
              });
            return t("range", {
              "...any": function e(t) {
                var r, n;
                return (
                  "boolean" != typeof t[t.length - 1] && t.push(!0),
                  c.apply(null, t)
                );
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        nd,
        ad,
        od = ge(
          "std",
          ["typed", "sqrt", "variance"],
          (e) => {
            var { typed: t, sqrt: r, variance: n } = e,
              a = wh({ typed: t, sqrt: r, variance: n });
            return t("std", {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return a.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        id = "sum",
        sd,
        ud = ge(
          id,
          ["typed", "config", "add", "numeric"],
          (e) => {
            var { typed: t, config: r, add: n, numeric: a } = e,
              o = rh({ typed: t, config: r, add: n, numeric: a });
            return t(id, {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return o.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        cd = "variance",
        ld,
        pd = ge(
          cd,
          ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
          (e) => {
            var {
                typed: t,
                add: r,
                subtract: n,
                multiply: a,
                divide: o,
                apply: i,
                isNaN: s,
              } = e,
              u = dh({
                typed: t,
                add: r,
                subtract: n,
                multiply: a,
                divide: o,
                apply: i,
                isNaN: s,
              });
            return t(cd, {
              "...any": function e(t) {
                t = Wh(t);
                try {
                  return u.apply(null, t);
                } catch (e) {
                  throw bl(e);
                }
              },
            });
          },
          { isTransformFunction: !0 }
        ),
        fd = "clone",
        md,
        hd = ge(fd, ["typed"], (e) => {
          var { typed: t } = e;
          return t(fd, { any: Q });
        }),
        dd = "isNumeric",
        gd,
        yd = ge(dd, ["typed"], (e) => {
          var { typed: t } = e;
          return t(dd, {
            "number | BigNumber | Fraction | boolean": function e() {
              return !0;
            },
            "Complex | Unit | string | null | undefined | Node": function e() {
              return !1;
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
          });
        }),
        vd = "hasNumericValue",
        xd,
        bd = ge(vd, ["typed", "isNumeric"], (e) => {
          var { typed: t, isNumeric: r } = e;
          return t(vd, {
            string: function e(t) {
              return t.trim().length > 0 && !isNaN(Number(t));
            },
            any: function e(t) {
              return r(t);
            },
          });
        }),
        wd = "typeOf",
        Nd,
        Sd = ge(wd, ["typed"], (e) => {
          var { typed: t } = e;
          return t(wd, { any: G });
        }),
        Ed = "isPrime",
        Ad,
        Od = ge(Ed, ["typed"], (e) => {
          var { typed: t } = e;
          return t(Ed, {
            number: function e(t) {
              if (0 * t != 0) return !1;
              if (t <= 3) return t > 1;
              if (t % 2 == 0 || t % 3 == 0) return !1;
              for (var r = 5; r * r <= t; r += 6)
                if (t % r == 0 || t % (r + 2) == 0) return !1;
              return !0;
            },
            BigNumber: function e(t) {
              if (0 * t.toNumber() != 0) return !1;
              if (t.lte(3)) return t.gt(1);
              if (t.mod(2).eq(0) || t.mod(3).eq(0)) return !1;
              if (t.lt(Math.pow(2, 32))) {
                for (var r = t.toNumber(), n = 5; n * n <= r; n += 6)
                  if (r % n == 0 || r % (n + 2) == 0) return !1;
                return !0;
              }
              function a(e, t, r) {
                for (var n = 1; !t.eq(0); )
                  t.mod(2).eq(0)
                    ? ((t = t.div(2)), (e = e.mul(e).mod(r)))
                    : ((t = t.sub(1)), (n = e.mul(n).mod(r)));
                return n;
              }
              for (
                var o = t.constructor.clone({
                    precision: 2 * t.toFixed(0).length,
                  }),
                  i = 0,
                  s = (t = new o(t)).sub(1);
                s.mod(2).eq(0);

              )
                (s = s.div(2)), (i += 1);
              var u = null;
              if (t.lt("3317044064679887385961981"))
                u = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter(
                  (e) => e < t
                );
              else {
                var c = Math.min(
                  t.toNumber() - 2,
                  Math.floor(
                    2 * Math.pow(t.toFixed(0).length * Math.log(10), 2)
                  )
                );
                u = [];
                for (var l = 2; l <= c; l += 1) u.push(c);
              }
              for (var p = 0; p < u.length; p += 1) {
                var f = u[p],
                  m = a(t.sub(t).add(f), s, t);
                if (!m.eq(1))
                  for (
                    var h = 0, d = m;
                    !d.eq(t.sub(1));
                    h += 1, d = d.mul(d).mod(t)
                  )
                    if (h === i - 1) return !1;
              }
              return !0;
            },
            "Array | Matrix": function e(t) {
              return Kc(t, this);
            },
          });
        }),
        Cd,
        Td,
        Md = ge("numeric", ["number", "?bignumber", "?fraction"], (e) => {
          var { number: t, bignumber: r, fraction: n } = e,
            a = { string: !0, number: !0, BigNumber: !0, Fraction: !0 },
            o = {
              number: (e) => t(e),
              BigNumber: r ? (e) => r(e) : un,
              Fraction: n ? (e) => n(e) : cn,
            };
          return function e(t, r) {
            var n = G(t);
            if (!(n in a))
              throw new TypeError(
                "Cannot convert " +
                  t +
                  ' of type "' +
                  n +
                  '"; valid input types are ' +
                  Object.keys(a).join(", ")
              );
            if (!(r in o))
              throw new TypeError(
                "Cannot convert " +
                  t +
                  ' to type "' +
                  r +
                  '"; valid output types are ' +
                  Object.keys(o).join(", ")
              );
            return r === n ? t : o[r](t);
          };
        }),
        kd,
        jd,
        qd = ge("reviver", ["classes"], (e) => {
          var { classes: t } = e;
          return function e(r, n) {
            var a = t[n && n.mathjs];
            return a && "function" == typeof a.fromJSON ? a.fromJSON(n) : n;
          };
        }),
        Pd,
        Fd,
        Id = ge(
          "replacer",
          [],
          () =>
            function e(t, r) {
              return "number" != typeof r || (isFinite(r) && !isNaN(r))
                ? r
                : { mathjs: "number", value: String(r) };
            }
        ),
        Rd = oy("unaryMinus", Dt),
        Bd = oy("unaryPlus", zt),
        Dd = oy("abs", Pt),
        zd = oy("addScalar", Ft),
        _d = oy("cbrt", _t),
        Ld = oy("ceil", Lt),
        $d = oy("cube", $t),
        Ud = oy("exp", Ut),
        Wd = oy("expm1", Wt),
        Hd = oy("fix", Ht),
        Jd = oy("floor", Jt),
        Vd = oy("gcd", Vt),
        Xd = oy("lcm", Xt),
        Gd = oy("log10", Qt),
        Qd = oy("log2", Zt),
        Zd = oy("mod", Kt),
        Yd = oy("multiplyScalar", Rt),
        Kd = oy("multiply", Rt),
        eg = oy("sign", tr),
        tg = oy("sqrt", rr),
        rg = oy("square", nr),
        ng = oy("subtract", It),
        ag = oy("xgcd", ar),
        og = oy("divideScalar", Bt),
        ig = oy("pow", or),
        sg = oy("log", Gt),
        ug = oy("log1p", Yt),
        cg = oy("add", Ft),
        lg = oy("norm", sr),
        pg = oy("divide", Bt),
        fg = oy("bitAnd", lr),
        mg = oy("bitNot", pr),
        hg = oy("bitOr", fr),
        dg = oy("bitXor", mr),
        gg = oy("leftShift", hr),
        yg = oy("rightArithShift", dr),
        vg = oy("rightLogShift", gr),
        xg = oy("and", Nr),
        bg = oy("not", xr),
        wg = oy("or", br),
        Ng = oy("xor", wr),
        Sg = ge("index", [], () => pn),
        Eg = ge("matrix", [], () => ln),
        Ag = ge("subset", [], () => fn),
        Og = oy("combinations", Er),
        Cg = oy("gamma", Ar),
        Tg = oy("acos", kr),
        Mg = oy("acosh", jr),
        kg = oy("acot", qr),
        jg = oy("acoth", Pr),
        qg = oy("acsc", Fr),
        Pg = oy("acsch", Ir),
        Fg = oy("asec", Rr),
        Ig = oy("asech", Br),
        Rg = oy("asin", Dr),
        Bg = oy("asinh", zr),
        Dg = oy("atan", _r),
        zg = oy("atan2", Lr),
        _g = oy("atanh", $r),
        Lg = oy("cos", Ur),
        $g = oy("cosh", Wr),
        Ug = oy("cot", Hr),
        Wg = oy("coth", Jr),
        Hg = oy("csc", Vr),
        Jg = oy("csch", Xr),
        Vg = oy("sec", Gr),
        Xg = oy("sech", Qr),
        Gg = oy("sin", Zr),
        Qg = oy("sinh", Yr),
        Zg = oy("tan", Kr),
        Yg = oy("tanh", en),
        Kg = ge("subset", [], () => fn, { isTransformFunction: !0 }),
        ey = oy("isInteger", rn),
        ty = oy("isNegative", nn),
        ry = oy("isPositive", an),
        ny = oy("isZero", on),
        ay = oy("isNaN", sn);
      function oy(e, t) {
        return ge(e, ["typed"], (e) => {
          var { typed: r } = e;
          return r(t);
        });
      }
      var iy,
        sy = ot(e, {});
      sy.import(
        {
          createUnit: function e() {
            throw new Error("Function createUnit is disabled");
          },
          eval: function e() {
            throw new Error("Function eval is disabled");
          },
          simplify: function e() {
            throw new Error("Function simplify is disabled");
          },
          derivative: function e() {
            throw new Error("Function derivative is disabled");
          },
          NotANumber: function e() {
            return Number.NaN;
          },
        },
        { override: !0 }
      );
      var uy = function e(t) {
        return Math.log(t);
      };
      uy.transform = function (e) {
        return uy(e);
      };
      var cy = function e(t, r) {
        return void 0 !== r ? Math.log(t) / Math.log(r) : Math.log(t);
      };
      cy.transform = function (e, t) {
        return cy(e, t);
      };
      var ly = function e(t, r) {
        try {
          return sy.nthRoot(t, r);
        } catch (e) {
          return NaN;
        }
      };
      (ly.transform = function (e, t) {
        return ly(e, t);
      }),
        sy.import({ ln: uy, log: cy, safeNthRoot: ly }, { override: !0 });
      class py {
        isSupportedVariableNames(e) {
          return ["pi", "deg"].indexOf(e) >= 0;
        }
        isSupported(e) {
          return (
            [
              "unaryMinus",
              "unaryPlus",
              "abs",
              "addScalar",
              "cbrt",
              "ceil",
              "cube",
              "exp",
              "expm1",
              "fix",
              "floor",
              "gcd",
              "lcm",
              "log10",
              "log2",
              "mod",
              "multiplyScalar",
              "multiply",
              "sign",
              "sqrt",
              "square",
              "subtract",
              "xgcd",
              "divideScalar",
              "pow",
              "log",
              "log1p",
              "add",
              "norm",
              "divide",
              "bitAnd",
              "bitNot",
              "bitOr",
              "bitXor",
              "leftShift",
              "rightArithShift",
              "rightLogShift",
              "and",
              "not",
              "or",
              "xor",
              "index",
              "matrix",
              "subset",
              "combinations",
              "gamma",
              "acos",
              "acosh",
              "acot",
              "acoth",
              "acsc",
              "acsch",
              "asec",
              "asech",
              "asin",
              "asinh",
              "atan",
              "atan2",
              "atanh",
              "cos",
              "cosh",
              "cot",
              "coth",
              "csc",
              "csch",
              "sec",
              "sech",
              "sin",
              "sinh",
              "tan",
              "tanh",
              "chain",
              "simplify",
              "derivative",
              "rationalize",
              "nthRoot",
              "round",
              "hypot",
              "stirlingS2",
              "bellNumbers",
              "catalan",
              "composition",
              "e",
              "E",
              "false",
              "Infinity",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "NaN",
              "null",
              "phi",
              "pi",
              "PI",
              "SQRT1_2",
              "SQRT2",
              "tau",
              "true",
              "version",
              "number",
              "string",
              "boolean",
              "map",
              "range",
              "size",
              "partitionSelect",
              "combinationsWithRep",
              "factorial",
              "multinomial",
              "permutations",
              "pickRandom",
              "random",
              "randomInt",
              "equalScalar",
              "compare",
              "compareNatural",
              "compareText",
              "equal",
              "equalText",
              "smaller",
              "smallerEq",
              "larger",
              "largerEq",
              "deepEqual",
              "unequal",
              "erf",
              "mode",
              "prod",
              "max",
              "min",
              "sum",
              "mean",
              "median",
              "mad",
              "variance",
              "quantileSeq",
              "std",
              "format",
              "print",
              "clone",
              "isNumeric",
              "hasNumericValue",
              "typeOf",
              "isPrime",
              "numeric",
              "reviver",
              "ln",
              "breakMark",
              "NotANumber",
            ].indexOf(e) >= 0
          );
        }
      }
      var fy = new py();
      class my {
        process(e, t) {
          var r = this.firstProccess(e, t),
            n;
          return this.secondProccess(e, r);
        }
        secondProccess(e, t) {
          return t.transform((t, r, n) => {
            if (!t.isOperatorNode || "^" != t.op) return t;
            var a = this.resolvePrimitiveFraction(t.args[1]);
            return a
              ? (console.log("powerByPrimitiveFraction matched!!!"),
                this.convertPowerByPrimitiveFraction(e, t, a[0], a[1]))
              : t;
          });
        }
        convertPowerByPrimitiveFraction(e, t, r, n) {
          return new e.FunctionNode("safeNthRoot", [
            new e.OperatorNode("^", "pow", [t.args[0], new e.ConstantNode(r)]),
            new e.ConstantNode(n),
          ]);
        }
        resolvePrimitiveFraction(e) {
          if (e) {
            if (e.isParenthesisNode)
              return this.resolvePrimitiveFraction(e.content);
            if (e.isOperatorNode && "/" == e.op) {
              var t = this.resolveNumberConstantNode(e.args[0]),
                r = this.resolveNumberConstantNode(e.args[1]);
              if (void 0 !== t && void 0 !== r) return [t, r];
            }
          }
        }
        resolveNumberConstantNode(e) {
          return e && e.isParenthesisNode
            ? this.resolveNumberConstantNode(e.content)
            : e && e.isConstantNode && e.value && "number" == typeof e.value
            ? e.value
            : void 0;
        }
        firstProccess(e, t) {
          return t.transform((t, r, n) =>
            this.isMultiplyOpWithPowerConsiderAsFunctionCall(t)
              ? this.multiplyPowerToFnCall(e, t)
              : this.isMultiplyOpConsiderAsFunctionCall(t)
              ? this.multiplyToFnCall(e, t)
              : this.isFirstArgumentUnSupportedFunc(t)
              ? this.processFirstArgUnSupportedFunc(e, t)
              : this.shouldSplitToMultipleVariables(t, n)
              ? this.splitIntoMultipleVariables(e, t.name, [])
              : this.isUnRecognizedFunction(t)
              ? this.splitForFunctions(e, t)
              : t
          );
        }
        isMultiplyOpWithPowerConsiderAsFunctionCall(e) {
          if (e.isOperatorNode && "*" == e.op && e.implicit) {
            var t = e.args[0];
            if (!t || "^" != t.op) return !1;
            var r = t.args[0];
            return !!r.isSymbolNode && !!fy.isSupported(r.name);
          }
        }
        multiplyPowerToFnCall(e, t) {
          console.log("convert multiply power to fn call");
          var r = t.args[0],
            n = r.args[0];
          return new e.OperatorNode("^", "pow", [
            new e.FunctionNode(n, [t.args[1]]),
            r.args[1],
          ]);
        }
        multiplyToFnCall(e, t) {
          var r;
          return (
            console.log("convert multiply to fn call"),
            new e.FunctionNode(t.args[0].cloneDeep(), [t.args[1].cloneDeep()])
          );
        }
        isMultiplyOpConsiderAsFunctionCall(e) {
          if (e.isOperatorNode && "*" == e.op && e.implicit) {
            var t = e.args[0];
            return !(!t || !t.isSymbolNode) && !!fy.isSupported(t.name);
          }
          return !1;
        }
        isFirstArgumentUnSupportedFunc(e) {
          return (
            e.args &&
            e.args[0] &&
            e.args[0].isFunctionNode &&
            this.isUnRecognizedFunction(e.args[0])
          );
        }
        processFirstArgUnSupportedFunc(e, t) {
          console.log("unsupported fn to multiply");
          var r = t.args[0],
            n = new e.ParenthesisNode(r.args[0]),
            a = t.clone();
          return (
            (a.args[0] = n),
            (a.args = a.args.map((t) => this.process(e, t))),
            this.splitIntoMultipleVariables(e, r.name, [a])
          );
        }
        splitForFunctions(e, t) {
          var r = t.args.map((t) => this.process(e, t));
          return this.splitIntoMultipleVariables(e, t.name, r);
        }
        isUnRecognizedFunction(e) {
          return (
            !!e.isFunctionNode &&
            1 == e.args.length &&
            ("string" == typeof e.fn
              ? !fy.isSupported(e.fn)
              : !fy.isSupported(e.fn.name))
          );
        }
        shouldSplitToMultipleVariables(e, t) {
          if (!e.isSymbolNode) return !1;
          var r = e.name;
          return (
            !fy.isSupportedVariableNames(r) &&
            !(r.length <= 1) &&
            (!t || !t.isFunctionNode || t.fn != e)
          );
        }
        splitIntoMultipleVariables(e, t, r) {
          console.log("split to multiple variables");
          var n = [];
          return (
            t.split(/([\d\.]+)/).map((t) => {
              t &&
                (isNaN(t)
                  ? (n = n.concat(t.split("").map((t) => new e.SymbolNode(t))))
                  : n.push(new e.ConstantNode(Number.parseFloat(t))));
            }),
            this.recursiveMultiply(e, n.concat(r))
          );
        }
        recursiveMultiply(e, t) {
          if (t.length > 2) {
            var r = t.slice(0, t.length - 1);
            return new e.OperatorNode("*", "multiply", [
              this.recursiveMultiply(e, r),
              t[t.length - 1],
            ]);
          }
          return new e.OperatorNode("*", "multiply", t);
        }
      }
      var hy = new my();
      function dy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function gy(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? dy(Object(n), !0).forEach(function (r) {
                t(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dy(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      class yy {
        constructor(e, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          t(this, "vType", void 0),
            t(this, "evalFunc", void 0),
            t(this, "casesBreak", { lastBreak: -1, breakSwitch: !1 }),
            t(this, "runObj", void 0),
            t(
              this,
              "breakMark",
              (e) => (
                this.casesBreak.lastBreak != e
                  ? ((this.casesBreak.breakSwitch = !0),
                    console.log("switch: ", this.casesBreak.lastBreak, e))
                  : (this.casesBreak.breakSwitch = !1),
                (this.casesBreak.lastBreak = e),
                0
              )
            ),
            (this.vType = e);
          var a = sy.parse(r),
            o = hy.process(sy, a);
          (this.evalFunc = o.compile()),
            (this.runObj = gy(gy({}, n), {}, { breakMark: this.breakMark }));
        }
        static isNotNumber(e) {
          return isNaN(e);
        }
        evaluate(e, t, r) {
          switch (this.vType) {
            case "t":
              this.runObj.t = e;
              break;
            case "x":
              this.runObj.x = e;
              break;
            case "y":
              this.runObj.y = e;
              break;
            case "xy":
              (this.runObj.x = e), (this.runObj.y = t);
              break;
            case "xyz":
              (this.runObj.x = e), (this.runObj.y = t), (this.runObj.z = r);
              break;
            case "uv":
              (this.runObj.u = e), (this.runObj.v = t);
              break;
            case "u":
              this.runObj.u = e;
          }
          return this.evalFunc.evaluate(this.runObj);
        }
        isCurrentBreak() {
          return this.casesBreak.breakSwitch;
        }
        restoreBreakState() {
          this.casesBreak = { lastBreak: -1, breakSwitch: !1 };
        }
      }
      var vy = 50;
      class xy {
        checkAsymptote(e, t, r, n, a) {
          if (!a) return { asymptote: !0, from: e, to: t };
          for (
            var o = 10, s = e.x, u = t.x, l = i()(s, u, o), p, f, m = 0;
            m < o;
            m += 1
          ) {
            var h = l[m],
              d = r.evaluate(h),
              g,
              y;
            if (yy.isNotNumber(d))
              return (
                console.log("complex number", d),
                { asymptote: !0, from: e, to: t }
              );
            if (m)
              if (c(d - p) === n)
                return this.checkAsymptote(
                  { x: f, y: p },
                  { x: h, y: d },
                  r,
                  n,
                  a - 1
                );
            (p = d), (f = h);
          }
          return { asymptote: !1, from: e, to: t };
        }
        split(e, t, r) {
          var n,
            a = [],
            o = [];
          if (t.length <= 0) return o;
          t[0] && (a.push(t[0]), (n = c(t[1].y - t[0].y)));
          for (var i = 1; i < t.length; )
            if (
              t[i].x != Number.MAX_SAFE_INTEGER ||
              t[i].y != Number.MAX_SAFE_INTEGER
            ) {
              var s = t[i - 1].y;
              if (s != Number.MAX_SAFE_INTEGER) {
                var u,
                  l = t[i].y - s,
                  p = c(l);
                if (
                  0 !== p &&
                  n !== p &&
                  o.length <= vy &&
                  Math.abs(l * r) > 1
                ) {
                  var f = this.checkAsymptote(t[i - 1], t[i], e, p, 3);
                  f.asymptote &&
                    (a.push({ x: t[i].x, y: f.from.y }),
                    o.push(a),
                    (a = [{ x: t[i].x, y: f.to.y }]));
                }
                0 !== p && (n = p), a.push(t[i]), ++i;
              } else a.push(t[i]), ++i;
            } else o.push(a), (a = []), i++;
          return a.length && o.push(a), o;
        }
        runPlotLinear(e, t, r, n) {
          e.restoreBreakState();
          var a = [];
          return this.runPlot(e, t.lo, t.hi, r, n, 2, a), this.split(e, a, n.y);
        }
        runSingle(e, t, r, n, a) {
          var o = new yy(t ? "y" : "x", e.fn, e.scope),
            i;
          return this.runPlotLinear(o, r, n, a);
        }
        runPlot(e, t, r, n, a, o, i) {
          if (!(o <= 0))
            for (
              var c = a.x,
                l = a.y,
                p = u({ lo: t, hi: r }, n),
                f = p[1] - p[0],
                m,
                h,
                d = 0;
              d < p.length;
              d += 1
            ) {
              var g = p[d],
                y = e.evaluate(g);
              if (yy.isNotNumber(y)) {
                if (void 0 === h || void 0 === m) continue;
                i.length > 0 &&
                  i.push({
                    x: Number.MAX_SAFE_INTEGER,
                    y: Number.MAX_SAFE_INTEGER,
                  }),
                  (h = void 0),
                  (m = void 0);
              } else if (s(g) && s(y)) {
                if (e.isCurrentBreak())
                  i.length > 0 &&
                    i.push({
                      x: Number.MAX_SAFE_INTEGER,
                      y: Number.MAX_SAFE_INTEGER,
                    }),
                    (h = void 0),
                    (m = void 0);
                else {
                  var v = Math.abs(y - m) * l,
                    x = Math.abs(g - h) * c;
                  if (void 0 !== m && null != h && v > 30 && x > 1) {
                    var b = Math.min(2, v);
                    this.runPlot(e, p[d - 1] + f / b / 2, g, b, a, o - 1, i);
                  }
                }
                i.push({ x: g, y }), (m = y), (h = g);
              } else (m = void 0), (h = void 0);
            }
        }
      }
      var by = new xy();
      function wy(e) {
        if (Array.isArray(e)) return e;
      }
      function Ny(e, t) {
        var r =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var n = [],
            a = !0,
            o = !1,
            i,
            s;
          try {
            for (
              r = r.call(e);
              !(a = (i = r.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              a = !0
            );
          } catch (e) {
            (o = !0), (s = e);
          } finally {
            try {
              a || null == r.return || r.return();
            } finally {
              if (o) throw s;
            }
          }
          return n;
        }
      }
      function Sy(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Ey(e, t) {
        if (e) {
          if ("string" == typeof e) return Sy(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Sy(e, t)
              : void 0
          );
        }
      }
      function Ay() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function Oy(e, t) {
        return wy(e) || Ny(e, t) || Ey(e, t) || Ay();
      }
      class Cy {
        runSingle(e, t, r) {
          for (
            var n,
              a = Oy(this.splitInto2(e.fn), 2),
              o = a[0],
              i = a[1],
              s = new yy("t", o, e.scope),
              c = new yy("t", i, e.scope),
              l = t.lo,
              p = t.hi,
              f = u({ lo: l, hi: p }, r),
              m = [],
              h = [m],
              d = 0;
            d < f.length;
            d += 1
          ) {
            var g = f[d],
              y = s.evaluate(g),
              v = c.evaluate(g);
            yy.isNotNumber(y) || yy.isNotNumber(v)
              ? ((m = []), h.push(m))
              : m.push({ x: y, y: v });
          }
          return h;
        }
        splitInto2(e) {
          var t = e.split(",");
          if (!t[0] || !t[1]) throw new Error("missing ,");
          return [t[0], t[1]];
        }
      }
      var Ty = new Cy(),
        My = r(211);
      class ky {
        runSingle(e, t, r, n, a) {
          for (
            var o = (t.to - t.from) / n,
              i = (r.to - r.from) / a,
              s = new yy("xy", e.fn, e.scope),
              u = [],
              c = 0;
            c < a;
            c++
          ) {
            for (var l = [], p = 0; p < n; p++) {
              var f = s.evaluate(t.from + p * o, r.from + c * i);
              l.push(f);
            }
            u.push(l);
          }
          var m;
          return (0, My.isoLines)(u, 0, { linearRing: !1, noFrame: !0 }).map(
            (e) =>
              e.map((e) => {
                var n, a;
                return { x: t.from + e[0] * o, y: r.from + e[1] * i };
              })
          );
        }
      }
      var jy = new ky();
      class qy {
        evalValue(e, t) {
          if (!e || /^\s+$/.test(e)) return 0;
          if (/^[\,\.\s\d]+$/.test(e)) return Number.parseFloat(e) || 0;
          var r,
            n = new yy("none", e, t).evaluate() || 0;
          return yy.isNotNumber(n) ? 0 : n;
        }
      }
      var Py = new qy();
      class Fy {
        runPoints(e) {
          var t, r;
          return e.fn
            .split(/[\s\,\;\|\(\)\[\]\{\}]+/g)
            .filter((e) => e)
            .map((t) => Py.evalValue(t, e.scope));
        }
        numbersToPoints(e) {
          for (var t = [], r = 0; r < e.length; r += 2) {
            var n = e[r],
              a = e[r + 1];
            null != n && null != a && t.push({ x: n, y: a });
          }
          return t;
        }
      }
      var Iy = new Fy();
      class Ry {
        runSingle(e) {
          var t = Iy.runPoints(e);
          return [Iy.numbersToPoints(t)];
        }
      }
      var By = new Ry();
      class Dy {
        runSingle(e) {
          var t = Iy.runPoints(e);
          return [Iy.numbersToPoints(t)];
        }
      }
      var zy = new Dy();
      class _y {
        runSingle(e, t, r, n, a) {
          for (
            var o,
              i,
              s,
              c,
              l,
              p,
              f,
              m,
              h,
              d,
              g,
              y = null !== (o = a.scale) && void 0 !== o ? o : 1,
              v = new yy("xy", e, r),
              x = new yy("xy", t, r),
              b = Math.min(
                Math.max(null !== (i = a.xstep) && void 0 !== i ? i : 20, 1),
                200
              ),
              w = Math.min(
                Math.max(null !== (s = a.ystep) && void 0 !== s ? s : 20, 1),
                200
              ),
              N = u(
                {
                  lo:
                    null !==
                      (c =
                        null === (l = a.xrange) || void 0 === l
                          ? void 0
                          : l.lo) && void 0 !== c
                      ? c
                      : n.xDomain.from,
                  hi:
                    null !==
                      (p =
                        null === (f = a.xrange) || void 0 === f
                          ? void 0
                          : f.hi) && void 0 !== p
                      ? p
                      : n.xDomain.to,
                },
                b
              ),
              S = u(
                {
                  lo:
                    null !==
                      (m =
                        null === (h = a.yrange) || void 0 === h
                          ? void 0
                          : h.lo) && void 0 !== m
                      ? m
                      : n.yDomain.from,
                  hi:
                    null !==
                      (d =
                        null === (g = a.yrange) || void 0 === g
                          ? void 0
                          : g.hi) && void 0 !== d
                      ? d
                      : n.yDomain.to,
                },
                w
              ),
              E = b * w,
              A = new Array(E),
              O = new Array(E),
              C = 0,
              T = 0;
            T < N.length;
            T++
          )
            for (var M = N[T], k = 0; k < S.length; k++) {
              var j = S[k];
              (A[C] = { x: M, y: j }),
                (O[C] = {
                  x: (v.evaluate(M, j) || 0) * y,
                  y: (x.evaluate(M, j) || 0) * y,
                }),
                C++;
            }
          return [A, O];
        }
      }
      var Ly = new _y();
      class $y {
        constructor() {
          t(this, "handleMessageData", (e) => {
            var t, r, n;
            return {
              responseType: "plot",
              expressions: e.expressions.map((e) => this.runWithRequest(e)),
            };
          });
        }
        isSwitchXToY(e) {
          return !e.type && !!e.switchXToY;
          var t;
        }
        runRegularWithSwitchXToY(e) {
          var t = e.expStr,
            r = e.settings,
            n = r.domain,
            o = r.view,
            i = r.domainToViewScale,
            s = o.viewHeight,
            u = e.expression;
          return this.runWithParams({
            exp: t,
            variables: e.variables,
            switchXToY: !0,
            lowHight: this.resolveLowHigh(u.range, {
              lo: n.yDomain.from,
              hi: n.yDomain.to,
            }),
            nSamples: Math.min(a.MAX_ITERATIONS, a.DEFAULT_ITERATIONS || 2 * s),
            scale: { x: i.y, y: i.x },
          });
        }
        runWithParams(e) {
          var t = e.exp,
            r = e.switchXToY,
            n = e.lowHight,
            a = e.nSamples,
            o = e.scale,
            i = e.variables;
          return by.runSingle({ fn: t, scope: i }, r, n, a, o);
        }
        runRegularExpression(e) {
          if (this.isSwitchXToY(e.expression))
            return this.runRegularWithSwitchXToY(e);
          var t = e.settings,
            r = t.domain,
            n = t.view,
            o = t.domainToViewScale,
            i = e.expression;
          return this.runWithParams({
            exp: e.expStr,
            variables: e.variables,
            switchXToY: !1,
            lowHight: this.resolveLowHigh(i.range, {
              lo: r.xDomain.from,
              hi: r.xDomain.to,
            }),
            nSamples: Math.min(
              a.MAX_ITERATIONS,
              a.DEFAULT_ITERATIONS || 2 * n.viewWidth
            ),
            scale: o,
          });
        }
        resolveLowHigh(e, t) {
          var r, n;
          if (!e) return t;
          var a = null !== (r = e.lo) && void 0 !== r ? r : t.lo,
            o = null !== (n = e.hi) && void 0 !== n ? n : t.hi;
          return (
            (a = Math.max(a, t.lo)) > (o = Math.min(o, t.hi)) && (a = o),
            { lo: a, hi: o }
          );
        }
        runParametric(e) {
          var t,
            r,
            n = e.settings.view,
            a = e.expression,
            o = null !== (t = a.t1) && void 0 !== t ? t : -1,
            i = null !== (r = a.t2) && void 0 !== r ? r : 1;
          return Ty.runSingle(
            { fn: e.expStr, scope: e.variables },
            { lo: o, hi: i },
            2 * n.viewWidth
          );
        }
        runImplicit(e) {
          return jy.runSingle(
            { fn: e.expStr, scope: e.variables },
            e.settings.domain.xDomain,
            e.settings.domain.yDomain,
            Math.min(e.settings.view.viewWidth, 300),
            Math.min(e.settings.view.viewHeight, 300)
          );
        }
        runWithRequest(e) {
          var t = e.expStr,
            r = e.settings,
            n = e.expression,
            a = e.variables;
          try {
            var o = [];
            return (
              n.type || (o = this.runRegularExpression(e)),
              "parametric" == n.type && (o = this.runParametric(e)),
              "implicit" == n.type && (o = this.runImplicit(e)),
              "point-list" == n.type &&
                (o = By.runSingle({ fn: e.expStr, scope: e.variables })),
              "vector" == n.type &&
                (o = zy.runSingle({ fn: e.expStr, scope: e.variables })),
              "vector-field" == n.type &&
                (o = Ly.runSingle(
                  e.expStr,
                  e.expStr2,
                  e.variables,
                  e.settings.domain,
                  e.expression
                )),
              {
                type: "ok",
                regions: o,
                expStr: t,
                settings: r,
                expression: n,
                variables: a,
              }
            );
          } catch (e) {
            return {
              type: "error",
              message: e.message,
              expStr: t,
              settings: r,
              expression: n,
              variables: a,
            };
          }
        }
      }
      var Uy = new Uint32Array([
          0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822,
          3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692,
          2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314,
          1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129,
          3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479,
          2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613,
          876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035,
          1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065,
          2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167,
          3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453,
          204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755,
          3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737,
          1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863,
          598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317,
          3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403,
          2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385,
          1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445,
          1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111,
          2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993,
          3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915,
          153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541,
          1295, 1030, 778, 515, 265, 0,
        ]),
        Wy = [
          [],
          [0, 8, 3],
          [0, 1, 9],
          [1, 8, 3, 9, 8, 1],
          [1, 2, 10],
          [0, 8, 3, 1, 2, 10],
          [9, 2, 10, 0, 2, 9],
          [2, 8, 3, 2, 10, 8, 10, 9, 8],
          [3, 11, 2],
          [0, 11, 2, 8, 11, 0],
          [1, 9, 0, 2, 3, 11],
          [1, 11, 2, 1, 9, 11, 9, 8, 11],
          [3, 10, 1, 11, 10, 3],
          [0, 10, 1, 0, 8, 10, 8, 11, 10],
          [3, 9, 0, 3, 11, 9, 11, 10, 9],
          [9, 8, 10, 10, 8, 11],
          [4, 7, 8],
          [4, 3, 0, 7, 3, 4],
          [0, 1, 9, 8, 4, 7],
          [4, 1, 9, 4, 7, 1, 7, 3, 1],
          [1, 2, 10, 8, 4, 7],
          [3, 4, 7, 3, 0, 4, 1, 2, 10],
          [9, 2, 10, 9, 0, 2, 8, 4, 7],
          [2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4],
          [8, 4, 7, 3, 11, 2],
          [11, 4, 7, 11, 2, 4, 2, 0, 4],
          [9, 0, 1, 8, 4, 7, 2, 3, 11],
          [4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1],
          [3, 10, 1, 3, 11, 10, 7, 8, 4],
          [1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4],
          [4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3],
          [4, 7, 11, 4, 11, 9, 9, 11, 10],
          [9, 5, 4],
          [9, 5, 4, 0, 8, 3],
          [0, 5, 4, 1, 5, 0],
          [8, 5, 4, 8, 3, 5, 3, 1, 5],
          [1, 2, 10, 9, 5, 4],
          [3, 0, 8, 1, 2, 10, 4, 9, 5],
          [5, 2, 10, 5, 4, 2, 4, 0, 2],
          [2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8],
          [9, 5, 4, 2, 3, 11],
          [0, 11, 2, 0, 8, 11, 4, 9, 5],
          [0, 5, 4, 0, 1, 5, 2, 3, 11],
          [2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5],
          [10, 3, 11, 10, 1, 3, 9, 5, 4],
          [4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10],
          [5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3],
          [5, 4, 8, 5, 8, 10, 10, 8, 11],
          [9, 7, 8, 5, 7, 9],
          [9, 3, 0, 9, 5, 3, 5, 7, 3],
          [0, 7, 8, 0, 1, 7, 1, 5, 7],
          [1, 5, 3, 3, 5, 7],
          [9, 7, 8, 9, 5, 7, 10, 1, 2],
          [10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3],
          [8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2],
          [2, 10, 5, 2, 5, 3, 3, 5, 7],
          [7, 9, 5, 7, 8, 9, 3, 11, 2],
          [9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11],
          [2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7],
          [11, 2, 1, 11, 1, 7, 7, 1, 5],
          [9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11],
          [5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0],
          [11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0],
          [11, 10, 5, 7, 11, 5],
          [10, 6, 5],
          [0, 8, 3, 5, 10, 6],
          [9, 0, 1, 5, 10, 6],
          [1, 8, 3, 1, 9, 8, 5, 10, 6],
          [1, 6, 5, 2, 6, 1],
          [1, 6, 5, 1, 2, 6, 3, 0, 8],
          [9, 6, 5, 9, 0, 6, 0, 2, 6],
          [5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8],
          [2, 3, 11, 10, 6, 5],
          [11, 0, 8, 11, 2, 0, 10, 6, 5],
          [0, 1, 9, 2, 3, 11, 5, 10, 6],
          [5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11],
          [6, 3, 11, 6, 5, 3, 5, 1, 3],
          [0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6],
          [3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9],
          [6, 5, 9, 6, 9, 11, 11, 9, 8],
          [5, 10, 6, 4, 7, 8],
          [4, 3, 0, 4, 7, 3, 6, 5, 10],
          [1, 9, 0, 5, 10, 6, 8, 4, 7],
          [10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4],
          [6, 1, 2, 6, 5, 1, 4, 7, 8],
          [1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7],
          [8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6],
          [7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9],
          [3, 11, 2, 7, 8, 4, 10, 6, 5],
          [5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11],
          [0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6],
          [9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6],
          [8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6],
          [5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11],
          [0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7],
          [6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9],
          [10, 4, 9, 6, 4, 10],
          [4, 10, 6, 4, 9, 10, 0, 8, 3],
          [10, 0, 1, 10, 6, 0, 6, 4, 0],
          [8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10],
          [1, 4, 9, 1, 2, 4, 2, 6, 4],
          [3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4],
          [0, 2, 4, 4, 2, 6],
          [8, 3, 2, 8, 2, 4, 4, 2, 6],
          [10, 4, 9, 10, 6, 4, 11, 2, 3],
          [0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6],
          [3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10],
          [6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1],
          [9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3],
          [8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1],
          [3, 11, 6, 3, 6, 0, 0, 6, 4],
          [6, 4, 8, 11, 6, 8],
          [7, 10, 6, 7, 8, 10, 8, 9, 10],
          [0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10],
          [10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0],
          [10, 6, 7, 10, 7, 1, 1, 7, 3],
          [1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7],
          [2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9],
          [7, 8, 0, 7, 0, 6, 6, 0, 2],
          [7, 3, 2, 6, 7, 2],
          [2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7],
          [2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7],
          [1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11],
          [11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1],
          [8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6],
          [0, 9, 1, 11, 6, 7],
          [7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0],
          [7, 11, 6],
          [7, 6, 11],
          [3, 0, 8, 11, 7, 6],
          [0, 1, 9, 11, 7, 6],
          [8, 1, 9, 8, 3, 1, 11, 7, 6],
          [10, 1, 2, 6, 11, 7],
          [1, 2, 10, 3, 0, 8, 6, 11, 7],
          [2, 9, 0, 2, 10, 9, 6, 11, 7],
          [6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8],
          [7, 2, 3, 6, 2, 7],
          [7, 0, 8, 7, 6, 0, 6, 2, 0],
          [2, 7, 6, 2, 3, 7, 0, 1, 9],
          [1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6],
          [10, 7, 6, 10, 1, 7, 1, 3, 7],
          [10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8],
          [0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7],
          [7, 6, 10, 7, 10, 8, 8, 10, 9],
          [6, 8, 4, 11, 8, 6],
          [3, 6, 11, 3, 0, 6, 0, 4, 6],
          [8, 6, 11, 8, 4, 6, 9, 0, 1],
          [9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6],
          [6, 8, 4, 6, 11, 8, 2, 10, 1],
          [1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6],
          [4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9],
          [10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3],
          [8, 2, 3, 8, 4, 2, 4, 6, 2],
          [0, 4, 2, 4, 6, 2],
          [1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8],
          [1, 9, 4, 1, 4, 2, 2, 4, 6],
          [8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1],
          [10, 1, 0, 10, 0, 6, 6, 0, 4],
          [4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3],
          [10, 9, 4, 6, 10, 4],
          [4, 9, 5, 7, 6, 11],
          [0, 8, 3, 4, 9, 5, 11, 7, 6],
          [5, 0, 1, 5, 4, 0, 7, 6, 11],
          [11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5],
          [9, 5, 4, 10, 1, 2, 7, 6, 11],
          [6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5],
          [7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2],
          [3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6],
          [7, 2, 3, 7, 6, 2, 5, 4, 9],
          [9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7],
          [3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0],
          [6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8],
          [9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7],
          [1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4],
          [4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10],
          [7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10],
          [6, 9, 5, 6, 11, 9, 11, 8, 9],
          [3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5],
          [0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11],
          [6, 11, 3, 6, 3, 5, 5, 3, 1],
          [1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6],
          [0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10],
          [11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5],
          [6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3],
          [5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2],
          [9, 5, 6, 9, 6, 0, 0, 6, 2],
          [1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8],
          [1, 5, 6, 2, 1, 6],
          [1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6],
          [10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0],
          [0, 3, 8, 5, 6, 10],
          [10, 5, 6],
          [11, 5, 10, 7, 5, 11],
          [11, 5, 10, 11, 7, 5, 8, 3, 0],
          [5, 11, 7, 5, 10, 11, 1, 9, 0],
          [10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1],
          [11, 1, 2, 11, 7, 1, 7, 5, 1],
          [0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11],
          [9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7],
          [7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2],
          [2, 5, 10, 2, 3, 5, 3, 7, 5],
          [8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5],
          [9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2],
          [9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2],
          [1, 3, 5, 3, 7, 5],
          [0, 8, 7, 0, 7, 1, 1, 7, 5],
          [9, 0, 3, 9, 3, 5, 5, 3, 7],
          [9, 8, 7, 5, 9, 7],
          [5, 8, 4, 5, 10, 8, 10, 11, 8],
          [5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0],
          [0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5],
          [10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4],
          [2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8],
          [0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11],
          [0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5],
          [9, 4, 5, 2, 11, 3],
          [2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4],
          [5, 10, 2, 5, 2, 4, 4, 2, 0],
          [3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9],
          [5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2],
          [8, 4, 5, 8, 5, 3, 3, 5, 1],
          [0, 4, 5, 1, 0, 5],
          [8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5],
          [9, 4, 5],
          [4, 11, 7, 4, 9, 11, 9, 10, 11],
          [0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11],
          [1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11],
          [3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4],
          [4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2],
          [9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3],
          [11, 7, 4, 11, 4, 2, 2, 4, 0],
          [11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4],
          [2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9],
          [9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7],
          [3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10],
          [1, 10, 2, 8, 7, 4],
          [4, 9, 1, 4, 1, 7, 7, 1, 3],
          [4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1],
          [4, 0, 3, 7, 4, 3],
          [4, 8, 7],
          [9, 10, 8, 10, 11, 8],
          [3, 0, 9, 3, 9, 11, 11, 9, 10],
          [0, 1, 10, 0, 10, 8, 8, 10, 11],
          [3, 1, 10, 11, 3, 10],
          [1, 2, 11, 1, 11, 9, 9, 11, 8],
          [3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9],
          [0, 2, 11, 8, 0, 11],
          [3, 2, 11],
          [2, 3, 8, 2, 8, 10, 10, 8, 9],
          [9, 10, 2, 0, 9, 2],
          [2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8],
          [1, 10, 2],
          [1, 3, 8, 9, 1, 8],
          [0, 9, 1],
          [0, 3, 8],
          [],
        ],
        Hy = [
          [0, 0, 0],
          [1, 0, 0],
          [1, 1, 0],
          [0, 1, 0],
          [0, 0, 1],
          [1, 0, 1],
          [1, 1, 1],
          [0, 1, 1],
        ],
        Jy = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 4],
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7],
        ],
        Vy = function e(t, r, n) {
          n || (n = [[0, 0, 0], t]);
          for (var a = [0, 0, 0], o = [0, 0, 0], i = 0; i < 3; ++i)
            (a[i] = (n[1][i] - n[0][i]) / (t[i] - 1)), (o[i] = n[0][i]);
          var s = [],
            u = [],
            c = 0,
            l = new Array(8),
            p = new Array(12),
            f = [0, 0, 0];
          for (f[2] = 0; f[2] < t[2] - 1; ++f[2], c += t[0])
            for (f[1] = 0; f[1] < t[1] - 1; ++f[1], ++c)
              for (f[0] = 0; f[0] < t[0] - 1; ++f[0], ++c) {
                for (var m = 0, i = 0; i < 8; ++i) {
                  var h = Hy[i],
                    d = r(
                      a[0] * (f[0] + h[0]) + o[0],
                      a[1] * (f[1] + h[1]) + o[1],
                      a[2] * (f[2] + h[2]) + o[2]
                    );
                  (l[i] = d), (m |= d > 0 ? 1 << i : 0);
                }
                var g = Uy[m];
                if (0 !== g) {
                  for (var i = 0; i < 12; ++i)
                    if (0 != (g & (1 << i))) {
                      p[i] = s.length;
                      var y = [0, 0, 0],
                        v = Jy[i],
                        x = Hy[v[0]],
                        b = Hy[v[1]],
                        w = l[v[0]],
                        N,
                        S = w - l[v[1]],
                        E = 0;
                      Math.abs(S) > 1e-6 && (E = w / S);
                      for (var A = 0; A < 3; ++A)
                        y[A] = a[A] * (f[A] + x[A] + E * (b[A] - x[A])) + o[A];
                      s.push(y);
                    }
                  for (var O = Wy[m], i = 0; i < O.length; i += 3)
                    u.push([p[O[i]], p[O[i + 1]], p[O[i + 2]]]);
                }
              }
          return { positions: s, cells: u };
        };
      class Xy {
        runSingle(e, t, r, n) {
          for (
            var a,
              o,
              i,
              s,
              c,
              l,
              p,
              f,
              m,
              h = new yy("xyz", t),
              d = new yy("xyz", r),
              g = new yy("xyz", n),
              y = e.xRange,
              v = e.yRange,
              x = e.zRange,
              b = Math.min(
                Math.max(
                  null !== (a = null == y ? void 0 : y.step) && void 0 !== a
                    ? a
                    : 10,
                  1
                ),
                50
              ),
              w = Math.min(
                Math.max(
                  null !== (o = null == v ? void 0 : v.step) && void 0 !== o
                    ? o
                    : 10,
                  1
                ),
                50
              ),
              N = Math.min(
                Math.max(
                  null !== (i = null == x ? void 0 : x.step) && void 0 !== i
                    ? i
                    : 10,
                  1
                ),
                50
              ),
              S = u(
                {
                  lo:
                    null !== (s = null == y ? void 0 : y.from) && void 0 !== s
                      ? s
                      : -20,
                  hi:
                    null !== (c = null == y ? void 0 : y.to) && void 0 !== c
                      ? c
                      : 20,
                },
                b
              ),
              E = u(
                {
                  lo:
                    null !== (l = null == v ? void 0 : v.from) && void 0 !== l
                      ? l
                      : -20,
                  hi:
                    null !== (p = null == v ? void 0 : v.to) && void 0 !== p
                      ? p
                      : 20,
                },
                w
              ),
              A = u(
                {
                  lo:
                    null !== (f = null == x ? void 0 : x.from) && void 0 !== f
                      ? f
                      : -20,
                  hi:
                    null !== (m = null == x ? void 0 : x.to) && void 0 !== m
                      ? m
                      : 20,
                },
                N
              ),
              O = b * w * N,
              C = S,
              T = E,
              M = A,
              k = new Array(O),
              j = new Array(O),
              q = new Array(O),
              P = 0,
              F = 0;
            F < S.length;
            F++
          )
            for (var I = S[F], R = 0; R < E.length; R++)
              for (var B = E[R], D = 0; D < A.length; D++) {
                var z = A[D];
                (k[P] = h.evaluate(I, B, z) || 0),
                  (j[P] = d.evaluate(I, B, z) || 0),
                  (q[P] = g.evaluate(I, B, z) || 0),
                  P++;
              }
          return {
            type: "vector-field",
            xrun: C,
            yrun: T,
            zrun: M,
            i: k,
            j,
            k: q,
          };
        }
      }
      var Gy = new Xy(),
        Qy;
      class Zy {
        constructor() {
          t(this, "handleMessageData", (e) => {
            var t, r, n;
            return {
              responseType: "plotly-3d-func",
              expressions: e.expressions.map((e) => this.runWithRequest(e)),
            };
          });
        }
        runPlotSurface(e, t) {
          var r = new yy("xy", t),
            n = e.xRange,
            a = e.yRange,
            o = i()(n.from, n.to, Math.min(n.step, 100)),
            s = i()(a.from, a.to, Math.min(a.step, 100)),
            u = new Array(s.length);
          return (
            s.forEach((e, t) => {
              var n = new Array(o.length);
              (u[t] = n),
                o.forEach((t, a) => {
                  n[a] = r.evaluate(t, e) || 0;
                });
            }),
            { type: "surface", x: o, y: s, z: u }
          );
        }
        runPlotImplicit(e, t) {
          var r = new yy("xyz", t),
            n = e.xRange,
            a = e.yRange,
            o = e.zRange,
            i = Math.min(n.step, 100),
            s = Math.min(a.step, 100),
            u = Math.min(o.step, 100),
            c = Vy([i, s, u], (e, t, n) => r.evaluate(e, t, n) || 0, [
              [n.from, a.from, o.from],
              [n.to, a.to, o.to],
            ]);
          return {
            type: "implicit",
            x: c.positions.map((e) => e[0]),
            y: c.positions.map((e) => e[1]),
            z: c.positions.map((e) => e[2]),
            i: c.cells.map((e) => e[0]),
            j: c.cells.map((e) => e[1]),
            k: c.cells.map((e) => e[2]),
          };
        }
        runPlotPointList(e, t) {
          for (
            var r = Iy.runPoints({ fn: t, scope: {} }),
              n = [],
              a = [],
              o = [],
              i = 0;
            i < r.length;
            i += 3
          ) {
            var s = r[i],
              u = r[i + 1],
              c = r[i + 2];
            null != s &&
              null != u &&
              null != c &&
              (n.push(s), a.push(u), o.push(c));
          }
          return { type: "point-list", x: n, y: a, z: o };
        }
        runPlotVector(e, t) {
          var r = Iy.runPoints({ fn: t, scope: {} }),
            n = { x: 0, y: 0, z: 0 },
            a = { x: 0, y: 0, z: 0 };
          return (
            r.length >= 3 && (n = { x: r[0], y: r[1], z: r[2] }),
            r.length >= 6 && (a = { x: r[3], y: r[4], z: r[5] }),
            { type: "vector", p1: n, p2: a }
          );
        }
        runPlotParametric(e, t, r, n) {
          var a = new yy("uv", t),
            o = new yy("uv", r),
            s = new yy("uv", n),
            u = e.uRange,
            c = e.vRange,
            l = i()(u.from, u.to, Math.min(u.step, 100)),
            p = i()(c.from, c.to, Math.min(c.step, 100)),
            f = [],
            m = [],
            h = [],
            d = 0;
          p.forEach((e) => {
            l.forEach((t) => {
              (f[d] = a.evaluate(t, e) || 0),
                (m[d] = o.evaluate(t, e) || 0),
                (h[d] = s.evaluate(t, e) || 0),
                d++;
            });
          });
          for (
            var g = [], y = [], v = [], x = p.length, b = l.length, w = 0;
            w < x - 1;
            w++
          )
            for (var N = 0; N < b - 1; N++)
              g.push(w * b + N),
                v.push((w + 1) * b + N),
                y.push((w + 1) * b + N + 1),
                y.push((w + 1) * b + N + 1),
                v.push(w * b + N + 1),
                g.push(w * b + N);
          return {
            type: "parametric",
            x: f,
            y: m,
            z: h,
            i: g,
            j: y,
            k: v,
            vLength: x,
            uLength: b,
          };
        }
        runPlotParametricCurve(e, t, r, n) {
          var a = new yy("u", t),
            o = new yy("u", r),
            s = new yy("u", n),
            u = e.uRange,
            c = i()(u.from, u.to, Math.min(u.step, 100)),
            l = [],
            p = [],
            f = [],
            m = 0;
          return (
            c.forEach((e) => {
              (l[m] = a.evaluate(e) || 0),
                (p[m] = o.evaluate(e) || 0),
                (f[m] = s.evaluate(e) || 0),
                m++;
            }),
            { type: "parametric-curve", x: l, y: p, z: f }
          );
        }
        runWithRequest(e) {
          var t = e.expStr,
            r = e.expression,
            n = e.expStr2,
            a = e.expStr3;
          try {
            var o;
            switch (r.type) {
              case "surface":
                o = this.runPlotSurface(r, t);
                break;
              case "implicit":
                o = this.runPlotImplicit(r, t);
                break;
              case "parametric":
                o = this.runPlotParametric(r, t, n, a);
                break;
              case "parametric-curve":
                o = this.runPlotParametricCurve(r, t, n, a);
                break;
              case "point-list":
                o = this.runPlotPointList(r, t);
                break;
              case "vector":
                o = this.runPlotVector(r, t);
                break;
              case "vector-field":
                o = Gy.runSingle(r, t, n, a);
            }
            return { type: "ok", expStr: t, expression: r, resultdata: o };
          } catch (e) {
            return {
              type: "error",
              message: e.message,
              expStr: t,
              expression: r,
            };
          }
        }
      }
      class Yy {
        constructor(e) {
          t(this, "workerGlobal", void 0),
            t(this, "plot2dProcess", new $y()),
            t(this, "plot3dProccess", new Zy()),
            t(this, "handleMessage", (e) => {
              var t = e.data,
                r = e.data.id,
                n = t.data,
                a;
              switch (n.requestType) {
                case "plot":
                  a = this.plot2dProcess.handleMessageData(n);
                  break;
                case "plotly-3d-func":
                  a = this.plot3dProccess.handleMessageData(n);
              }
              var o = { data: a, id: r };
              this.workerGlobal.postMessage(o);
            }),
            (this.workerGlobal = e);
        }
        registerSelf() {
          this.workerGlobal.addEventListener("message", this.handleMessage);
        }
      }
      new Yy(self).registerSelf();
    })();
})();
