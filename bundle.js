(() => {
  var e = {
      721: (e, t, r) => {
        var n = {
          "./dice-1.png": 15,
          "./dice-2.png": 942,
          "./dice-3.png": 968,
          "./dice-4.png": 616,
          "./dice-5.png": 699,
          "./dice-6.png": 7,
        };
        function c(e) {
          var t = o(e);
          return r(t);
        }
        function o(e) {
          if (!r.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        (c.keys = function () {
          return Object.keys(n);
        }),
          (c.resolve = o),
          (e.exports = c),
          (c.id = 721);
      },
      15: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-1.4f0eb1f1.png";
      },
      942: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-2.41531477.png";
      },
      968: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-3.c277ce86.png";
      },
      616: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-4.23089185.png";
      },
      699: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-5.3db952d1.png";
      },
      7: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        const n = r.p + "./images/dice-6.170d5ce6.png";
      },
    },
    t = {};
  function r(n) {
    var c = t[n];
    if (void 0 !== c) return c.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length) for (var c = n.length - 1; c > -1 && !e; ) e = n[c--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })(),
    (() => {
      "use strict";
      for (let e = 1; e <= 6; e++) {
        let t = r(721)(`./${e}.png`);
        someImageElement.src = t;
      }
      const e = [
          document.getElementById("current--0"),
          document.getElementById("current--1"),
        ],
        t = [
          document.querySelector("#score--0"),
          document.getElementById("score--1"),
        ],
        n = [
          document.querySelector(".player--0"),
          document.querySelector(".player--1"),
        ],
        c = document.querySelector(".dice"),
        o = document.querySelector(".btn--new"),
        s = document.querySelector(".btn--roll"),
        i = document.querySelector(".btn--hold"),
        a = document.querySelector(".dice"),
        l = [0, 0];
      let d = 0,
        u = 0,
        p = !1,
        g = !0;
      (t[0].textContent = 0),
        (t[1].textContent = 0),
        c.classList.add("hidden"),
        s.addEventListener("click", () => {
          if (!g) return;
          p = !0;
          const t = Math.trunc(6 * Math.random()) + 1;
          c.classList.remove("hidden"),
            y(() => {
              m(t),
                1 !== t
                  ? ((d += t), (e[u].textContent = d))
                  : ((d = 0),
                    (e[u].textContent = d),
                    n[u].classList.toggle("player--active"),
                    (u = 0 === u ? 1 : 0),
                    n[u].classList.toggle("player--active"),
                    (p = !1));
            });
        }),
        i.addEventListener("click", () => {
          g &&
            (p
              ? ((l[u] += d),
                (t[u].textContent = l[u]),
                (d = 0),
                (e[u].textContent = d),
                l[u] >= 100
                  ? (n[u].classList.add("player--winner"),
                    n[u].classList.remove("player--active"),
                    (g = !1))
                  : (n[u].classList.toggle("player--active"),
                    (u = 1 === u ? 0 : 1),
                    n[u].classList.toggle("player--active"),
                    (p = !1)))
              : alert("請擲骰子！"));
        }),
        o.addEventListener("click", function () {
          (p = !1),
            (t[0].textContent = 0),
            (t[1].textContent = 0),
            (l[0] = 0),
            (l[1] = 0),
            c.classList.add("hidden"),
            n[0].classList.add("player--active"),
            n[0].classList.remove("player--winner"),
            n[1].classList.remove("player--winner"),
            (u = 0),
            (e[0].textContent = 0),
            (e[1].textContent = 0),
            (g = !0);
        });
      const m = (e) => {
          a.src = `./images/dice-${e}.png`;
        },
        y = (e) => {
          c.style.transform = "translateX(-50%) rotate(90deg)";
          let t = setInterval(() => {
            let e = Math.floor(6 * Math.random()) + 1;
            (c.src = `./public/images/dice-${e}.png`),
              (c.style.transform = "translateX(-50%) rotate(0deg)");
          }, 80);
          setTimeout(() => {
            clearInterval(t), e && e();
          }, 1e3);
        };
    })();
})();
