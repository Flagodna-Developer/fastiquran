/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@editorjs/header@2.6.1/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.Header = t())
    : (e.Header = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      n(1).toString();
      /**
       * Header block for the Editor.js.
       *
       * @author CodeX (team@ifmo.su)
       * @copyright CodeX 2018
       * @license MIT
       * @version 2.0.0
       */
      var a = (function () {
        function e(t) {
          var n = t.data,
            r = t.config,
            i = t.api,
            a = t.readOnly;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.api = i),
            (this.readOnly = a),
            (this._CSS = {
              block: this.api.styles.block,
              settingsButton: this.api.styles.settingsButton,
              settingsButtonActive: this.api.styles.settingsButtonActive,
              wrapper: "ce-header",
            }),
            (this._settings = r),
            (this._data = this.normalizeData(n)),
            (this.settingsButtons = []),
            (this._element = this.getTag());
        }
        var t, a, o;
        return (
          (t = e),
          (o = [
            {
              key: "conversionConfig",
              get: function () {
                return { export: "text", import: "text" };
              },
            },
            {
              key: "sanitize",
              get: function () {
                return { level: !1, text: {} };
              },
            },
            {
              key: "isReadOnlySupported",
              get: function () {
                return !0;
              },
            },
            {
              key: "pasteConfig",
              get: function () {
                return { tags: ["H1", "H2", "H3", "H4", "H5", "H6"] };
              },
            },
            {
              key: "toolbox",
              get: function () {
                return { icon: n(6).default, title: "Heading" };
              },
            },
          ]),
          (a = [
            {
              key: "normalizeData",
              value: function (e) {
                var t = {};
                return (
                  "object" !== r(e) && (e = {}),
                  (t.text = e.text || ""),
                  (t.level = parseInt(e.level) || this.defaultLevel.number),
                  t
                );
              },
            },
            {
              key: "render",
              value: function () {
                return this._element;
              },
            },
            {
              key: "renderSettings",
              value: function () {
                var e = this,
                  t = document.createElement("DIV");
                return (
                  this.levels.length <= 1 ||
                    this.levels.forEach(function (n) {
                      var r = document.createElement("SPAN");
                      r.classList.add(e._CSS.settingsButton),
                        e.currentLevel.number === n.number &&
                          r.classList.add(e._CSS.settingsButtonActive),
                        (r.innerHTML = n.svg),
                        (r.dataset.level = n.number),
                        r.addEventListener("click", function () {
                          e.setLevel(n.number);
                        }),
                        t.appendChild(r),
                        e.settingsButtons.push(r);
                    }),
                  t
                );
              },
            },
            {
              key: "setLevel",
              value: function (e) {
                var t = this;
                (this.data = { level: e, text: this.data.text }),
                  this.settingsButtons.forEach(function (n) {
                    n.classList.toggle(
                      t._CSS.settingsButtonActive,
                      parseInt(n.dataset.level) === e
                    );
                  });
              },
            },
            {
              key: "merge",
              value: function (e) {
                var t = {
                  text: this.data.text + e.text,
                  level: this.data.level,
                };
                this.data = t;
              },
            },
            {
              key: "validate",
              value: function (e) {
                return "" !== e.text.trim();
              },
            },
            {
              key: "save",
              value: function (e) {
                return { text: e.innerHTML, level: this.currentLevel.number };
              },
            },
            {
              key: "getTag",
              value: function () {
                var e = document.createElement(this.currentLevel.tag);
                return (
                  (e.innerHTML = this._data.text || ""),
                  e.classList.add(this._CSS.wrapper),
                  (e.contentEditable = this.readOnly ? "false" : "true"),
                  (e.dataset.placeholder = this.api.i18n.t(
                    this._settings.placeholder || ""
                  )),
                  e
                );
              },
            },
            {
              key: "onPaste",
              value: function (e) {
                var t = e.detail.data,
                  n = this.defaultLevel.number;
                switch (t.tagName) {
                  case "H1":
                    n = 1;
                    break;
                  case "H2":
                    n = 2;
                    break;
                  case "H3":
                    n = 3;
                    break;
                  case "H4":
                    n = 4;
                    break;
                  case "H5":
                    n = 5;
                    break;
                  case "H6":
                    n = 6;
                }
                this._settings.levels &&
                  (n = this._settings.levels.reduce(function (e, t) {
                    return Math.abs(t - n) < Math.abs(e - n) ? t : e;
                  })),
                  (this.data = { level: n, text: t.innerHTML });
              },
            },
            {
              key: "data",
              get: function () {
                return (
                  (this._data.text = this._element.innerHTML),
                  (this._data.level = this.currentLevel.number),
                  this._data
                );
              },
              set: function (e) {
                if (
                  ((this._data = this.normalizeData(e)),
                  void 0 !== e.level && this._element.parentNode)
                ) {
                  var t = this.getTag();
                  (t.innerHTML = this._element.innerHTML),
                    this._element.parentNode.replaceChild(t, this._element),
                    (this._element = t);
                }
                void 0 !== e.text &&
                  (this._element.innerHTML = this._data.text || "");
              },
            },
            {
              key: "currentLevel",
              get: function () {
                var e = this,
                  t = this.levels.find(function (t) {
                    return t.number === e._data.level;
                  });
                return t || (t = this.defaultLevel), t;
              },
            },
            {
              key: "defaultLevel",
              get: function () {
                var e = this;
                if (this._settings.defaultLevel) {
                  var t = this.levels.find(function (t) {
                    return t.number === e._settings.defaultLevel;
                  });
                  if (t) return t;
                  console.warn(
                    "(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels"
                  );
                }
                return this.levels[1];
              },
            },
            {
              key: "levels",
              get: function () {
                var e = this,
                  t = [
                    {
                      number: 1,
                      tag: "H1",
                      svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>',
                    },
                    {
                      number: 2,
                      tag: "H2",
                      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>',
                    },
                    {
                      number: 3,
                      tag: "H3",
                      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>',
                    },
                    {
                      number: 4,
                      tag: "H4",
                      svg: '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>',
                    },
                    {
                      number: 5,
                      tag: "H5",
                      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>',
                    },
                    {
                      number: 6,
                      tag: "H6",
                      svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>',
                    },
                  ];
                return this._settings.levels
                  ? t.filter(function (t) {
                      return e._settings.levels.includes(t.number);
                    })
                  : t;
              },
            },
          ]) && i(t.prototype, a),
          o && i(t, o),
          e
        );
      })();
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(2);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var i = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(4)(r, i);
      r.locals && (e.exports = r.locals);
    },
    function (e, t, n) {
      (e.exports = n(3)(!1)).push([
        e.i,
        "/**\n * Plugin styles\n */\n.ce-header {\n  padding: 1em 0;\n  margin: 0;\n  margin-bottom: -0.9em;\n  line-height: 1.5em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",
        "",
      ]);
    },
    function (e, t) {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var i =
                      ((o = r),
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                        " */"),
                    a = r.sources.map(function (e) {
                      return "/*# sourceURL=" + r.sourceRoot + e + " */";
                    });
                  return [n].concat(a).concat([i]).join("\n");
                }
                var o;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
              var a = this[i][0];
              "number" == typeof a && (r[a] = !0);
            }
            for (i = 0; i < e.length; i++) {
              var o = e[i];
              ("number" == typeof o[0] && r[o[0]]) ||
                (n && !o[2]
                  ? (o[2] = n)
                  : n && (o[2] = "(" + o[2] + ") and (" + n + ")"),
                t.push(o));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      var r,
        i,
        a = {},
        o =
          ((r = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === i && (i = r.apply(this, arguments)), i;
          }),
        s = function (e) {
          return document.querySelector(e);
        },
        c = (function (e) {
          var t = {};
          return function (e) {
            if ("function" == typeof e) return e();
            if (void 0 === t[e]) {
              var n = s.call(this, e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          };
        })(),
        l = null,
        u = 0,
        f = [],
        d = n(5);
      function h(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = a[r.id];
          if (i) {
            i.refs++;
            for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
            for (; o < r.parts.length; o++) i.parts.push(y(r.parts[o], t));
          } else {
            var s = [];
            for (o = 0; o < r.parts.length; o++) s.push(y(r.parts[o], t));
            a[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function v(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
          var a = e[i],
            o = t.base ? a[0] + t.base : a[0],
            s = { css: a[1], media: a[2], sourceMap: a[3] };
          r[o] ? r[o].parts.push(s) : n.push((r[o] = { id: o, parts: [s] }));
        }
        return n;
      }
      function p(e, t) {
        var n = c(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var r = f[f.length - 1];
        if ("top" === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            f.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
          if ("object" != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var i = c(e.insertInto + " " + e.insertAt.before);
          n.insertBefore(t, i);
        }
      }
      function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = f.indexOf(e);
        t >= 0 && f.splice(t, 1);
      }
      function m(e) {
        var t = document.createElement("style");
        return (
          void 0 === e.attrs.type && (e.attrs.type = "text/css"),
          b(t, e.attrs),
          p(e, t),
          t
        );
      }
      function b(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function y(e, t) {
        var n, r, i, a;
        if (t.transform && e.css) {
          if (!(a = t.transform(e.css))) return function () {};
          e.css = a;
        }
        if (t.singleton) {
          var o = u++;
          (n = l || (l = m(t))),
            (r = L.bind(null, n, o, !1)),
            (i = L.bind(null, n, o, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = (function (e) {
                var t = document.createElement("link");
                return (
                  void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                  (e.attrs.rel = "stylesheet"),
                  b(t, e.attrs),
                  p(e, t),
                  t
                );
              })(t)),
              (r = _.bind(null, n, t)),
              (i = function () {
                g(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = m(t)),
              (r = H.bind(null, n)),
              (i = function () {
                g(n);
              }));
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else i();
          }
        );
      }
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = v(e, t);
        return (
          h(n, t),
          function (e) {
            for (var r = [], i = 0; i < n.length; i++) {
              var o = n[i];
              (s = a[o.id]).refs--, r.push(s);
            }
            e && h(v(e, t), t);
            for (i = 0; i < r.length; i++) {
              var s;
              if (0 === (s = r[i]).refs) {
                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                delete a[s.id];
              }
            }
          }
        );
      };
      var w,
        x =
          ((w = []),
          function (e, t) {
            return (w[e] = t), w.filter(Boolean).join("\n");
          });
      function L(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, i);
        else {
          var a = document.createTextNode(i),
            o = e.childNodes;
          o[t] && e.removeChild(o[t]),
            o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
        }
      }
      function H(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute("media", r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function _(e, t, n) {
        var r = n.css,
          i = n.sourceMap,
          a = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || a) && (r = d(r)),
          i &&
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
              " */");
        var o = new Blob([r], { type: "text/css" }),
          s = e.href;
        (e.href = URL.createObjectURL(o)), s && URL.revokeObjectURL(s);
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (e, t) {
            var i,
              a = t
                .trim()
                .replace(/^"(.*)"$/, function (e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function (e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
              ? e
              : ((i =
                  0 === a.indexOf("//")
                    ? a
                    : 0 === a.indexOf("/")
                    ? n + a
                    : r + a.replace(/^\.\//, "")),
                "url(" + JSON.stringify(i) + ")");
          }
        );
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default =
          '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n');
    },
  ]);
});
