import { iO as pe, iP as me, bC as ht, bF as W, ip as nt, fH as Ot, bH as Dt, bN as et, bT as dt, fC as B, bO as Pt, bP as Z, bR as ct, bQ as N, i4 as Et, bD as It, ij as ve, ii as ye, a4 as ge, ha as xt, bL as Nt, kF as be, bE as ke, bG as xe, fK as ut, bJ as Se, bM as zt, lt as St } from "./main-D-HsupCS.js";
import { r as we } from "./vue.esm-bundler-DugU9Ut-.js";
import { T as Pe } from "./toggle-switch-control-CKLqoIHY.js";
var Tt = { exports: {} };
(function(C, L) {
  (function(j, y) {
    C.exports = y(we);
  })(typeof self < "u" ? self : pe, function(j) {
    return function() {
      var y = { 388: function(l, d) {
        var s, i, c;
        (function(S, O) {
          i = [], s = O, c = typeof s == "function" ? s.apply(d, i) : s, c === void 0 || (l.exports = c);
        })(typeof self < "u" && self, function() {
          function S() {
            var O = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!O && "currentScript" in document && document.currentScript || O && O.get !== S && document.currentScript) return document.currentScript;
            try {
              throw new Error();
            } catch (tt) {
              var A, q, _, f = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, x = /@([^@]*):(\d+):(\d+)\s*$/gi, m = f.exec(tt.stack) || x.exec(tt.stack), X = m && m[1] || !1, rt = m && m[2] || !1, Q = document.location.href.replace(document.location.hash, ""), $ = document.getElementsByTagName("script");
              X === Q && (A = document.documentElement.outerHTML, q = new RegExp("(?:[^\\n]+?\\n){0," + (rt - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), _ = A.replace(q, "$1").trim());
              for (var D = 0; D < $.length; D++)
                if ($[D].readyState === "interactive" || $[D].src === X || X === Q && $[D].innerHTML && $[D].innerHTML.trim() === _) return $[D];
              return null;
            }
          }
          return S;
        });
      }, 905: function(l, d, s) {
        s.r(d);
        var i = s(117), c = s.n(i), S = s(488), O = s.n(S), A = O()(c());
        A.push([l.id, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), d.default = A;
      }, 121: function(l, d, s) {
        s.r(d);
        var i = s(117), c = s.n(i), S = s(488), O = s.n(S), A = O()(c());
        A.push([l.id, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), d.default = A;
      }, 207: function(l, d, s) {
        s.r(d);
        var i = s(117), c = s.n(i), S = s(488), O = s.n(S), A = O()(c());
        A.push([l.id, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), d.default = A;
      }, 488: function(l) {
        l.exports = function(d) {
          var s = [];
          return s.toString = function() {
            return this.map(function(i) {
              var c = "", S = typeof i[5] < "u";
              return i[4] && (c += "@supports (".concat(i[4], ") {")), i[2] && (c += "@media ".concat(i[2], " {")), S && (c += "@layer".concat(i[5].length > 0 ? " ".concat(i[5]) : "", " {")), c += d(i), S && (c += "}"), i[2] && (c += "}"), i[4] && (c += "}"), c;
            }).join("");
          }, s.i = function(i, c, S, O, A) {
            typeof i == "string" && (i = [[null, i, void 0]]);
            var q = {};
            if (S) for (var _ = 0; _ < this.length; _++) {
              var f = this[_][0];
              f != null && (q[f] = !0);
            }
            for (var x = 0; x < i.length; x++) {
              var m = [].concat(i[x]);
              S && q[m[0]] || (typeof A < "u" && (typeof m[5] > "u" || (m[1] = "@layer".concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {").concat(m[1], "}")), m[5] = A), c && (m[2] && (m[1] = "@media ".concat(m[2], " {").concat(m[1], "}")), m[2] = c), O && (m[4] ? (m[1] = "@supports (".concat(m[4], ") {").concat(m[1], "}"), m[4] = O) : m[4] = "".concat(O)), s.push(m));
            }
          }, s;
        };
      }, 117: function(l) {
        l.exports = function(d) {
          return d[1];
        };
      }, 831: function(l, d) {
        d.Z = (s, i) => {
          const c = s.__vccOpts || s;
          for (const [S, O] of i) c[S] = O;
          return c;
        };
      }, 466: function(l, d, s) {
        var i = s(905);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[l.id, i, ""]]), i.locals && (l.exports = i.locals);
        var c = s(959).Z;
        c("50bc1720", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 18: function(l, d, s) {
        var i = s(121);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[l.id, i, ""]]), i.locals && (l.exports = i.locals);
        var c = s(959).Z;
        c("10aa5f36", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 631: function(l, d, s) {
        var i = s(207);
        i.__esModule && (i = i.default), typeof i == "string" && (i = [[l.id, i, ""]]), i.locals && (l.exports = i.locals);
        var c = s(959).Z;
        c("1772934e", i, !0, { sourceMap: !1, shadowMode: !1 });
      }, 959: function(l, d, s) {
        function i(p, w) {
          for (var k = [], b = {}, v = 0; v < w.length; v++) {
            var R = w[v], V = R[0], E = R[1], F = R[2], G = R[3], J = { id: p + ":" + v, css: E, media: F, sourceMap: G };
            b[V] ? b[V].parts.push(J) : k.push(b[V] = { id: V, parts: [J] });
          }
          return k;
        }
        s.d(d, { Z: function() {
          return rt;
        } });
        var c = typeof document < "u";
        if (typeof DEBUG < "u" && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var S = {}, O = c && (document.head || document.getElementsByTagName("head")[0]), A = null, q = 0, _ = !1, f = function() {
        }, x = null, m = "data-vue-ssr-id", X = typeof navigator < "u" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function rt(p, w, k, b) {
          _ = k, x = b || {};
          var v = i(p, w);
          return Q(v), function(R) {
            for (var V = [], E = 0; E < v.length; E++) {
              var F = v[E], G = S[F.id];
              G.refs--, V.push(G);
            }
            for (R ? (v = i(p, R), Q(v)) : v = [], E = 0; E < V.length; E++)
              if (G = V[E], G.refs === 0) {
                for (var J = 0; J < G.parts.length; J++) G.parts[J]();
                delete S[G.id];
              }
          };
        }
        function Q(p) {
          for (var w = 0; w < p.length; w++) {
            var k = p[w], b = S[k.id];
            if (b) {
              b.refs++;
              for (var v = 0; v < b.parts.length; v++) b.parts[v](k.parts[v]);
              for (; v < k.parts.length; v++) b.parts.push(D(k.parts[v]));
              b.parts.length > k.parts.length && (b.parts.length = k.parts.length);
            } else {
              var R = [];
              for (v = 0; v < k.parts.length; v++) R.push(D(k.parts[v]));
              S[k.id] = { id: k.id, refs: 1, parts: R };
            }
          }
        }
        function $() {
          var p = document.createElement("style");
          return p.type = "text/css", O.appendChild(p), p;
        }
        function D(p) {
          var w, k, b = document.querySelector("style[" + m + '~="' + p.id + '"]');
          if (b) {
            if (_) return f;
            b.parentNode.removeChild(b);
          }
          if (X) {
            var v = q++;
            b = A || (A = $()), w = K.bind(null, b, v, !1), k = K.bind(null, b, v, !0);
          } else b = $(), w = ft.bind(null, b), k = function() {
            b.parentNode.removeChild(b);
          };
          return w(p), function(R) {
            if (R) {
              if (R.css === p.css && R.media === p.media && R.sourceMap === p.sourceMap) return;
              w(p = R);
            } else k();
          };
        }
        var tt = /* @__PURE__ */ function() {
          var p = [];
          return function(w, k) {
            return p[w] = k, p.filter(Boolean).join(`
`);
          };
        }();
        function K(p, w, k, b) {
          var v = k ? "" : b.css;
          if (p.styleSheet) p.styleSheet.cssText = tt(w, v);
          else {
            var R = document.createTextNode(v), V = p.childNodes;
            V[w] && p.removeChild(V[w]), V.length ? p.insertBefore(R, V[w]) : p.appendChild(R);
          }
        }
        function ft(p, w) {
          var k = w.css, b = w.media, v = w.sourceMap;
          if (b && p.setAttribute("media", b), x.ssrId && p.setAttribute(m, w.id), v && (k += `
/*# sourceURL=` + v.sources[0] + " */", k += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(v)))) + " */"), p.styleSheet) p.styleSheet.cssText = k;
          else {
            for (; p.firstChild; ) p.removeChild(p.firstChild);
            p.appendChild(document.createTextNode(k));
          }
        }
      }, 927: function(l) {
        l.exports = j;
      } }, U = {};
      function g(l) {
        var d = U[l];
        if (d !== void 0) return d.exports;
        var s = U[l] = { id: l, exports: {} };
        return y[l].call(s.exports, s, s.exports, g), s.exports;
      }
      (function() {
        g.n = function(l) {
          var d = l && l.__esModule ? function() {
            return l.default;
          } : function() {
            return l;
          };
          return g.d(d, { a: d }), d;
        };
      })(), function() {
        g.d = function(l, d) {
          for (var s in d) g.o(d, s) && !g.o(l, s) && Object.defineProperty(l, s, { enumerable: !0, get: d[s] });
        };
      }(), function() {
        g.o = function(l, d) {
          return Object.prototype.hasOwnProperty.call(l, d);
        };
      }(), function() {
        g.r = function(l) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
        };
      }(), function() {
        g.p = "";
      }();
      var T = {};
      return function() {
        if (g.d(T, { default: function() {
          return ue;
        } }), typeof window < "u") {
          var l = window.document.currentScript, d = g(388);
          l = d(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: d });
          var s = l && l.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          s && (g.p = s[1]);
        }
        var i = g(927);
        function c(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        }
        var S = { key: 0, class: "vue-slider-marks" };
        function O(t, e, n, r, o, a) {
          var u = (0, i.resolveComponent)("vue-slider-mark"), I = (0, i.resolveComponent)("vue-slider-dot");
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", (0, i.mergeProps)({ ref: "container", class: t.containerClasses, style: t.containerStyles, onClick: e[2] || (e[2] = function() {
            return t.clickHandle && t.clickHandle.apply(t, arguments);
          }), onTouchstartPassive: e[3] || (e[3] = function() {
            return t.dragStartOnProcess && t.dragStartOnProcess.apply(t, arguments);
          }), onMousedownPassive: e[4] || (e[4] = function() {
            return t.dragStartOnProcess && t.dragStartOnProcess.apply(t, arguments);
          }) }, t.$attrs), [(0, i.createElementVNode)("div", { class: "vue-slider-rail", style: (0, i.normalizeStyle)(t.railStyle) }, [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.processArray, function(h, M) {
            return (0, i.renderSlot)(t.$slots, "process", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)), function() {
              return [((0, i.openBlock)(), (0, i.createElementBlock)("div", { class: "vue-slider-process", key: "process-".concat(M), style: (0, i.normalizeStyle)(h.style) }, null, 4))];
            });
          }), 256)), t.sliderMarks && t.control ? ((0, i.openBlock)(), (0, i.createElementBlock)("div", S, [((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.control.markList, function(h, M) {
            return (0, i.renderSlot)(t.$slots, "mark", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)), function() {
              var H;
              return [((0, i.openBlock)(), (0, i.createBlock)(u, { key: "mark-".concat(M), mark: h, hideLabel: t.hideLabel, style: (0, i.normalizeStyle)((H = {}, c(H, t.isHorizontal ? "height" : "width", "100%"), c(H, t.isHorizontal ? "width" : "height", t.tailSize), c(H, t.mainDirection, "".concat(h.pos, "%")), H)), stepStyle: t.stepStyle, stepActiveStyle: t.stepActiveStyle, labelStyle: t.labelStyle, labelActiveStyle: t.labelActiveStyle, onPressLabel: e[0] || (e[0] = function(ot) {
                return t.clickable && t.setValueByPos(ot);
              }) }, { step: (0, i.withCtx)(function() {
                return [(0, i.renderSlot)(t.$slots, "step", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)))];
              }), label: (0, i.withCtx)(function() {
                return [(0, i.renderSlot)(t.$slots, "label", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)))];
              }), _: 2 }, 1032, ["mark", "hideLabel", "style", "stepStyle", "stepActiveStyle", "labelStyle", "labelActiveStyle"]))];
            });
          }), 256))])) : (0, i.createCommentVNode)("", !0), ((0, i.openBlock)(!0), (0, i.createElementBlock)(i.Fragment, null, (0, i.renderList)(t.dots, function(h, M) {
            var H;
            return (0, i.openBlock)(), (0, i.createBlock)(I, (0, i.mergeProps)({ ref_for: !0, ref: "dot-".concat(M), key: "dot-".concat(M), value: h.value, disabled: h.disabled, focus: h.focus, "dot-style": [h.style, h.disabled ? h.disabledStyle : null, h.focus ? h.focusStyle : null], tooltip: h.tooltip || t.tooltip, "tooltip-style": [t.tooltipStyle, h.tooltipStyle, h.disabled ? h.tooltipDisabledStyle : null, h.focus ? h.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(t.sliderTooltipFormatter) ? t.sliderTooltipFormatter[M] : t.sliderTooltipFormatter, "tooltip-placement": t.tooltipDirections[M], style: [t.dotBaseStyle, (H = {}, c(H, t.mainDirection, "".concat(h.pos, "%")), c(H, "transition", "".concat(t.mainDirection, " ").concat(t.animateTime, "s")), H)], onDragStart: function() {
              return t.dragStart(M);
            }, role: "slider", "aria-valuenow": h.value, "aria-valuemin": t.min, "aria-valuemax": t.max, "aria-orientation": t.isHorizontal ? "horizontal" : "vertical", tabindex: "0", onFocus: function() {
              return t.focus(h, M);
            }, onBlur: e[1] || (e[1] = function() {
              return t.blur();
            }) }, t.dotAttrs), { dot: (0, i.withCtx)(function() {
              return [(0, i.renderSlot)(t.$slots, "dot", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)))];
            }), tooltip: (0, i.withCtx)(function() {
              return [(0, i.renderSlot)(t.$slots, "tooltip", (0, i.normalizeProps)((0, i.guardReactiveProps)(h)))];
            }), _: 2 }, 1040, ["value", "disabled", "focus", "dot-style", "tooltip", "tooltip-style", "tooltip-formatter", "tooltip-placement", "style", "onDragStart", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "onFocus"]);
          }), 128))], 4), (0, i.renderSlot)(t.$slots, "default", { value: t.getValue() })], 16);
        }
        var A = ["aria-valuetext"], q = { class: "vue-slider-dot-tooltip-text" };
        function _(t, e, n, r, o, a) {
          var u;
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", { ref: "dot", class: (0, i.normalizeClass)(t.dotClasses), "aria-valuetext": (u = t.tooltipValue) === null || u === void 0 ? void 0 : u.toString(), onMousedownPassive: e[0] || (e[0] = function() {
            return t.dragStart && t.dragStart.apply(t, arguments);
          }), onTouchstartPassive: e[1] || (e[1] = function() {
            return t.dragStart && t.dragStart.apply(t, arguments);
          }) }, [(0, i.renderSlot)(t.$slots, "dot", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.handleClasses), style: (0, i.normalizeStyle)(t.dotStyle) }, null, 6)];
          }), t.tooltip !== "none" ? ((0, i.openBlock)(), (0, i.createElementBlock)("div", { key: 0, class: (0, i.normalizeClass)(t.tooltipClasses) }, [(0, i.renderSlot)(t.$slots, "tooltip", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.tooltipInnerClasses), style: (0, i.normalizeStyle)(t.tooltipStyle) }, [(0, i.createElementVNode)("span", q, (0, i.toDisplayString)(t.tooltipValue), 1)], 6)];
          })], 2)) : (0, i.createCommentVNode)("", !0)], 42, A);
        }
        g(466);
        var f = (0, i.defineComponent)({ name: "VueSliderDot", emits: ["drag-start"], props: { value: { type: [String, Number], default: 0 }, tooltip: { type: String, required: !0 }, tooltipPlacement: { type: String, validator: function(t) {
          return ["top", "right", "bottom", "left"].indexOf(t) > -1;
        }, required: !0 }, tooltipFormatter: { type: [String, Function] }, focus: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, dotStyle: { type: Object }, tooltipStyle: { type: Object } }, computed: { dotClasses: function() {
          return ["vue-slider-dot", { "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active", "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
        }, handleClasses: function() {
          return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
        }, tooltipClasses: function() {
          return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
        }, tooltipInnerClasses: function() {
          return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
        }, showTooltip: function() {
          switch (this.tooltip) {
            case "always":
              return !0;
            case "none":
              return !1;
            case "focus":
            case "active":
              return !!this.focus;
            default:
              return !1;
          }
        }, tooltipValue: function() {
          return this.tooltipFormatter ? typeof this.tooltipFormatter == "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
        } }, methods: { dragStart: function() {
          if (this.disabled) return !1;
          this.$emit("drag-start");
        } } }), x = g(831), X = (0, x.Z)(f, [["render", _]]);
        function rt(t, e, n, r, o, a) {
          return (0, i.openBlock)(), (0, i.createElementBlock)("div", { class: (0, i.normalizeClass)(t.marksClasses) }, [(0, i.renderSlot)(t.$slots, "step", {}, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.stepClasses), style: (0, i.normalizeStyle)([t.stepStyle, t.mark.style || {}, t.mark.active && t.stepActiveStyle ? t.stepActiveStyle : {}, t.mark.active && t.mark.activeStyle ? t.mark.activeStyle : {}]) }, null, 6)];
          }), t.hideLabel ? (0, i.createCommentVNode)("", !0) : (0, i.renderSlot)(t.$slots, "label", { key: 0 }, function() {
            return [(0, i.createElementVNode)("div", { class: (0, i.normalizeClass)(t.labelClasses), style: (0, i.normalizeStyle)([t.labelStyle, t.mark.labelStyle || {}, t.mark.active && t.labelActiveStyle ? t.labelActiveStyle : {}, t.mark.active && t.mark.labelActiveStyle ? t.mark.labelActiveStyle : {}]), onClick: e[0] || (e[0] = function() {
              return t.labelClickHandle && t.labelClickHandle.apply(t, arguments);
            }) }, (0, i.toDisplayString)(t.mark.label), 7)];
          })], 2);
        }
        g(18);
        var Q = (0, i.defineComponent)({ name: "VueSliderMark", emits: ["press-label"], props: { mark: { type: Object, required: !0 }, hideLabel: { type: Boolean }, stepStyle: { type: Object, default: function() {
          return {};
        } }, stepActiveStyle: { type: Object, default: function() {
          return {};
        } }, labelStyle: { type: Object, default: function() {
          return {};
        } }, labelActiveStyle: { type: Object, default: function() {
          return {};
        } } }, computed: { marksClasses: function() {
          return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
        }, stepClasses: function() {
          return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
        }, labelClasses: function() {
          return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
        } }, methods: { labelClickHandle: function(t) {
          t.stopPropagation(), this.$emit("press-label", this.mark.pos);
        } } });
        const $ = (0, x.Z)(Q, [["render", rt]]);
        var D, tt = $, K = function(t) {
          return typeof t == "number" ? "".concat(t, "px") : t;
        }, ft = function(t) {
          var e = document.documentElement, n = document.body, r = t.getBoundingClientRect(), o = { y: r.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || n.clientTop || 0), x: r.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || n.clientLeft || 0) };
          return o;
        }, p = function(t, e, n) {
          var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = "targetTouches" in t ? t.targetTouches[0] : t, a = ft(e), u = { x: o.pageX - a.x, y: o.pageY - a.y };
          return { x: n ? e.offsetWidth * r - u.x : u.x, y: n ? e.offsetHeight * r - u.y : u.y };
        };
        (function(t) {
          t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN";
        })(D || (D = {}));
        var w = function(t, e) {
          if (e.hook) {
            var n = e.hook(t);
            if (typeof n == "function") return n;
            if (!n) return null;
          }
          switch (t.keyCode) {
            case D.UP:
              return function(r) {
                return e.direction === "ttb" ? r - 1 : r + 1;
              };
            case D.RIGHT:
              return function(r) {
                return e.direction === "rtl" ? r - 1 : r + 1;
              };
            case D.DOWN:
              return function(r) {
                return e.direction === "ttb" ? r + 1 : r - 1;
              };
            case D.LEFT:
              return function(r) {
                return e.direction === "rtl" ? r + 1 : r - 1;
              };
            case D.END:
              return function() {
                return e.max;
              };
            case D.HOME:
              return function() {
                return e.min;
              };
            case D.PAGE_UP:
              return function(r) {
                return r + 10;
              };
            case D.PAGE_DOWN:
              return function(r) {
                return r - 10;
              };
            default:
              return null;
          }
        };
        function k(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function b(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function v(t, e, n) {
          return e && b(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function R(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        }
        var V, E, F = function() {
          function t(e) {
            k(this, t), R(this, "num", void 0), this.num = e;
          }
          return v(t, [{ key: "decimal", value: function(e, n) {
            var r = this.num, o = this.getDecimalLen(r), a = this.getDecimalLen(e), u = 0;
            switch (n) {
              case "+":
                u = this.getExponent(o, a), this.num = (this.safeRoundUp(r, u) + this.safeRoundUp(e, u)) / u;
                break;
              case "-":
                u = this.getExponent(o, a), this.num = (this.safeRoundUp(r, u) - this.safeRoundUp(e, u)) / u;
                break;
              case "*":
                this.num = this.safeRoundUp(this.safeRoundUp(r, this.getExponent(o)), this.safeRoundUp(e, this.getExponent(a))) / this.getExponent(o + a);
                break;
              case "/":
                u = this.getExponent(o, a), this.num = this.safeRoundUp(r, u) / this.safeRoundUp(e, u);
                break;
              case "%":
                u = this.getExponent(o, a), this.num = this.safeRoundUp(r, u) % this.safeRoundUp(e, u) / u;
                break;
            }
            return this;
          } }, { key: "plus", value: function(e) {
            return this.decimal(e, "+");
          } }, { key: "minus", value: function(e) {
            return this.decimal(e, "-");
          } }, { key: "multiply", value: function(e) {
            return this.decimal(e, "*");
          } }, { key: "divide", value: function(e) {
            return this.decimal(e, "/");
          } }, { key: "remainder", value: function(e) {
            return this.decimal(e, "%");
          } }, { key: "toNumber", value: function() {
            return this.num;
          } }, { key: "getDecimalLen", value: function(e) {
            var n = "".concat(e).split("e");
            return ("".concat(n[0]).split(".")[1] || "").length - (n[1] ? +n[1] : 0);
          } }, { key: "getExponent", value: function(e, n) {
            return Math.pow(10, n !== void 0 ? Math.max(e, n) : e);
          } }, { key: "safeRoundUp", value: function(e, n) {
            return Math.round(e * n);
          } }]), t;
        }();
        function G(t, e) {
          return Ht(t) || _t(t, e) || Rt(t, e) || J();
        }
        function J() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function _t(t, e) {
          var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
          if (n != null) {
            var r, o, a = [], u = !0, I = !1;
            try {
              for (n = n.call(t); !(u = (r = n.next()).done) && (a.push(r.value), !(e && a.length === e)); u = !0) ;
            } catch (h) {
              I = !0, o = h;
            } finally {
              try {
                u || n.return == null || n.return();
              } finally {
                if (I) throw o;
              }
            }
            return a;
          }
        }
        function Ht(t) {
          if (Array.isArray(t)) return t;
        }
        function At(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(o) {
              return Object.getOwnPropertyDescriptor(t, o).enumerable;
            })), n.push.apply(n, r);
          }
          return n;
        }
        function $t(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e] != null ? arguments[e] : {};
            e % 2 ? At(Object(n), !0).forEach(function(r) {
              P(t, r, n[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function(r) {
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
            });
          }
          return t;
        }
        function it(t) {
          return qt(t) || Ut(t) || Rt(t) || Ft();
        }
        function Ft() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Rt(t, e) {
          if (t) {
            if (typeof t == "string") return pt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pt(t, e) : void 0;
          }
        }
        function Ut(t) {
          if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
        }
        function qt(t) {
          if (Array.isArray(t)) return pt(t);
        }
        function pt(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function Gt(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Yt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function Wt(t, e, n) {
          return e && Yt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function P(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        }
        (function(t) {
          t[t.VALUE = 1] = "VALUE", t[t.INTERVAL = 2] = "INTERVAL", t[t.MIN = 3] = "MIN", t[t.MAX = 4] = "MAX", t[t.ORDER = 5] = "ORDER";
        })(E || (E = {}));
        var Zt = (V = {}, P(V, E.VALUE, 'The type of the "value" is illegal'), P(V, E.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), P(V, E.MIN, 'The "value" must be greater than or equal to the "min".'), P(V, E.MAX, 'The "value" must be less than or equal to the "max".'), P(V, E.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), V), Xt = function() {
          function t(e) {
            Gt(this, t), P(this, "dotsPos", []), P(this, "dotsValue", []), P(this, "data", void 0), P(this, "enableCross", void 0), P(this, "fixed", void 0), P(this, "max", void 0), P(this, "min", void 0), P(this, "interval", void 0), P(this, "minRange", void 0), P(this, "maxRange", void 0), P(this, "order", void 0), P(this, "marks", void 0), P(this, "included", void 0), P(this, "process", void 0), P(this, "adsorb", void 0), P(this, "dotOptions", void 0), P(this, "onError", void 0), P(this, "cacheRangeDir", {}), this.data = e.data, this.max = e.max, this.min = e.min, this.interval = e.interval, this.order = e.order, this.marks = e.marks, this.included = e.included, this.process = e.process, this.adsorb = e.adsorb, this.dotOptions = e.dotOptions, this.onError = e.onError, this.order ? (this.minRange = e.minRange || 0, this.maxRange = e.maxRange || 0, this.enableCross = e.enableCross, this.fixed = e.fixed) : ((e.minRange || e.maxRange || !e.enableCross || e.fixed) && this.emitError(E.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(e.value);
          }
          return Wt(t, [{ key: "setValue", value: function(e) {
            this.setDotsValue(Array.isArray(e) ? it(e) : [e], !0);
          } }, { key: "setDotsValue", value: function(e, n) {
            this.dotsValue = e, n && this.syncDotsPos();
          } }, { key: "setDotsPos", value: function(e) {
            var n = this, r = this.order ? it(e).sort(function(o, a) {
              return o - a;
            }) : e;
            this.dotsPos = r, this.setDotsValue(r.map(function(o) {
              return n.getValueByPos(o);
            }), this.adsorb);
          } }, { key: "getValueByPos", value: function(e) {
            var n = this.parsePos(e);
            if (this.included) {
              var r = 100;
              this.markList.forEach(function(o) {
                var a = Math.abs(o.pos - e);
                a < r && (r = a, n = o.value);
              });
            }
            return n;
          } }, { key: "syncDotsPos", value: function() {
            var e = this;
            this.dotsPos = this.dotsValue.map(function(n) {
              return e.parseValue(n);
            });
          } }, { key: "markList", get: function() {
            var e = this;
            if (!this.marks) return [];
            var n = function(r, o) {
              var a = e.parseValue(r);
              return $t({ pos: a, value: r, label: r, active: e.isActiveByPos(a) }, o);
            };
            return this.marks === !0 ? this.getValues().map(function(r) {
              return n(r);
            }) : Object.prototype.toString.call(this.marks) === "[object Object]" ? Object.keys(this.marks).sort(function(r, o) {
              return +r - +o;
            }).map(function(r) {
              var o = e.marks[r];
              return n(r, typeof o != "string" ? o : { label: o });
            }) : Array.isArray(this.marks) ? this.marks.map(function(r) {
              return n(r);
            }) : typeof this.marks == "function" ? this.getValues().map(function(r) {
              return { value: r, result: e.marks(r) };
            }).filter(function(r) {
              var o = r.result;
              return !!o;
            }).map(function(r) {
              var o = r.value, a = r.result;
              return n(o, a);
            }) : [];
          } }, { key: "getRecentDot", value: function(e) {
            var n = this.dotsPos.map(function(r) {
              return Math.abs(r - e);
            });
            return n.indexOf(Math.min.apply(Math, it(n)));
          } }, { key: "getIndexByValue", value: function(e) {
            return this.data ? this.data.indexOf(e) : new F(+e).minus(this.min).divide(this.interval).toNumber();
          } }, { key: "getValueByIndex", value: function(e) {
            return e < 0 ? e = 0 : e > this.total && (e = this.total), this.data ? this.data[e] : new F(e).multiply(this.interval).plus(this.min).toNumber();
          } }, { key: "setDotPos", value: function(e, n) {
            e = this.getValidPos(e, n).pos;
            var r = e - this.dotsPos[n];
            if (r) {
              var o = new Array(this.dotsPos.length);
              this.fixed ? o = this.getFixedChangePosArr(r, n) : this.minRange || this.maxRange ? o = this.getLimitRangeChangePosArr(e, r, n) : o[n] = r, this.setDotsPos(this.dotsPos.map(function(a, u) {
                return a + (o[u] || 0);
              }));
            }
          } }, { key: "getFixedChangePosArr", value: function(e, n) {
            var r = this;
            return this.dotsPos.forEach(function(o, a) {
              if (a !== n) {
                var u = r.getValidPos(o + e, a), I = u.pos, h = u.inRange;
                h || (e = Math.min(Math.abs(I - o), Math.abs(e)) * (e < 0 ? -1 : 1));
              }
            }), this.dotsPos.map(function(o) {
              return e;
            });
          } }, { key: "getLimitRangeChangePosArr", value: function(e, n, r) {
            var o = this, a = [{ index: r, changePos: n }], u = n;
            return [this.minRange, this.maxRange].forEach(function(I, h) {
              if (!I) return !1;
              var M = h === 0, H = n > 0, ot = 0;
              ot = M ? H ? 1 : -1 : H ? -1 : 1;
              for (var ce = function(he, fe) {
                var Bt = Math.abs(he - fe);
                return M ? Bt < o.minRangeDir : Bt > o.maxRangeDir;
              }, at = r + ot, st = o.dotsPos[at], jt = e; o.isPos(st) && ce(st, jt); ) {
                var de = o.getValidPos(st + u, at), Mt = de.pos;
                a.push({ index: at, changePos: Mt - st }), at += ot, jt = Mt, st = o.dotsPos[at];
              }
            }), this.dotsPos.map(function(I, h) {
              var M = a.filter(function(H) {
                return H.index === h;
              });
              return M.length ? M[0].changePos : 0;
            });
          } }, { key: "isPos", value: function(e) {
            return typeof e == "number";
          } }, { key: "getValidPos", value: function(e, n) {
            var r = this.valuePosRange[n], o = !0;
            return e < r[0] ? (e = r[0], o = !1) : e > r[1] && (e = r[1], o = !1), { pos: e, inRange: o };
          } }, { key: "parseValue", value: function(e) {
            if (this.data) e = this.data.indexOf(e);
            else if (typeof e == "number" || typeof e == "string") {
              if (e = +e, e < this.min) return this.emitError(E.MIN), 0;
              if (e > this.max) return this.emitError(E.MAX), 0;
              if (typeof e != "number" || e !== e) return this.emitError(E.VALUE), 0;
              e = new F(e).minus(this.min).divide(this.interval).toNumber();
            }
            var n = new F(e).multiply(this.gap).toNumber();
            return n < 0 ? 0 : n > 100 ? 100 : n;
          } }, { key: "parsePos", value: function(e) {
            var n = Math.round(e / this.gap);
            return this.getValueByIndex(n);
          } }, { key: "isActiveByPos", value: function(e) {
            return this.processArray.some(function(n) {
              var r = G(n, 2), o = r[0], a = r[1];
              return e >= o && e <= a;
            });
          } }, { key: "getValues", value: function() {
            if (this.data) return this.data;
            for (var e = [], n = 0; n <= this.total; n++) e.push(new F(n).multiply(this.interval).plus(this.min).toNumber());
            return e;
          } }, { key: "getRangeDir", value: function(e) {
            return e ? new F(e).divide(new F(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
          } }, { key: "emitError", value: function(e) {
            this.onError && this.onError(e, Zt[e]);
          } }, { key: "processArray", get: function() {
            if (this.process) {
              if (typeof this.process == "function") return this.process(this.dotsPos);
              if (this.dotsPos.length === 1) return [[0, this.dotsPos[0]]];
              if (this.dotsPos.length > 1) return [[Math.min.apply(Math, it(this.dotsPos)), Math.max.apply(Math, it(this.dotsPos))]];
            }
            return [];
          } }, { key: "total", get: function() {
            var e = 0;
            return e = this.data ? this.data.length - 1 : new F(this.max).minus(this.min).divide(this.interval).toNumber(), e - Math.floor(e) !== 0 ? (this.emitError(E.INTERVAL), 0) : e;
          } }, { key: "gap", get: function() {
            return 100 / this.total;
          } }, { key: "minRangeDir", get: function() {
            return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
          } }, { key: "maxRangeDir", get: function() {
            return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
          } }, { key: "getDotRange", value: function(e, n, r) {
            if (!this.dotOptions) return r;
            var o = Array.isArray(this.dotOptions) ? this.dotOptions[e] : this.dotOptions;
            return o && o[n] !== void 0 ? this.parseValue(o[n]) : r;
          } }, { key: "valuePosRange", get: function() {
            var e = this, n = this.dotsPos, r = [];
            return n.forEach(function(o, a) {
              r.push([Math.max(e.minRange ? e.minRangeDir * a : 0, e.enableCross ? 0 : n[a - 1] || 0, e.getDotRange(a, "min", 0)), Math.min(e.minRange ? 100 - e.minRangeDir * (n.length - 1 - a) : 100, e.enableCross ? 100 : n[a + 1] || 100, e.getDotRange(a, "max", 100))]);
            }), r;
          } }, { key: "dotsIndex", get: function() {
            var e = this;
            return this.dotsValue.map(function(n) {
              return e.getIndexByValue(n);
            });
          } }]), t;
        }();
        function Kt(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function Jt(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }
        function Qt(t, e, n) {
          return e && Jt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
        }
        function Vt(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        }
        var te = function() {
          function t(e) {
            Kt(this, t), Vt(this, "map", void 0), Vt(this, "states", 0), this.map = e;
          }
          return Qt(t, [{ key: "add", value: function(e) {
            this.states |= e;
          } }, { key: "delete", value: function(e) {
            this.states &= ~e;
          } }, { key: "toggle", value: function(e) {
            this.has(e) ? this.delete(e) : this.add(e);
          } }, { key: "has", value: function(e) {
            return !!(this.states & e);
          } }]), t;
        }();
        g(631);
        function mt(t) {
          return re(t) || ne(t) || Lt(t) || ee();
        }
        function ee() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ne(t) {
          if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
        }
        function re(t) {
          if (Array.isArray(t)) return gt(t);
        }
        function vt(t) {
          return vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e;
          } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, vt(t);
        }
        function Ct(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(o) {
              return Object.getOwnPropertyDescriptor(t, o).enumerable;
            })), n.push.apply(n, r);
          }
          return n;
        }
        function lt(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e] != null ? arguments[e] : {};
            e % 2 ? Ct(Object(n), !0).forEach(function(r) {
              Y(t, r, n[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach(function(r) {
              Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
            });
          }
          return t;
        }
        function Y(t, e, n) {
          return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
        }
        function yt(t, e) {
          return ae(t) || oe(t, e) || Lt(t, e) || ie();
        }
        function ie() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Lt(t, e) {
          if (t) {
            if (typeof t == "string") return gt(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gt(t, e) : void 0;
          }
        }
        function gt(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function oe(t, e) {
          var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
          if (n != null) {
            var r, o, a = [], u = !0, I = !1;
            try {
              for (n = n.call(t); !(u = (r = n.next()).done) && (a.push(r.value), !(e && a.length === e)); u = !0) ;
            } catch (h) {
              I = !0, o = h;
            } finally {
              try {
                u || n.return == null || n.return();
              } finally {
                if (I) throw o;
              }
            }
            return a;
          }
        }
        function ae(t) {
          if (Array.isArray(t)) return t;
        }
        var z = { None: 0, Drag: 2, Focus: 4 }, bt = 4, se = (0, i.defineComponent)({ name: "VueSlider", components: { VueSliderDot: X, VueSliderMark: tt }, emits: ["change", "drag-start", "dragging", "drag-end", "error", "update:modelValue"], data: function() {
          return { control: null, states: new te(z), scale: 1, focusDotIndex: 0 };
        }, props: { modelValue: { type: [Number, String, Array], default: 0 }, silent: { type: Boolean, default: !1 }, direction: { type: String, default: "ltr", validator: function(t) {
          return ["ltr", "rtl", "ttb", "btt"].indexOf(t) > -1;
        } }, width: { type: [Number, String] }, height: { type: [Number, String] }, dotSize: { type: [Number, Array], default: 14 }, contained: { type: Boolean, default: !1 }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, interval: { type: Number, default: 1 }, disabled: { type: Boolean, default: !1 }, clickable: { type: Boolean, default: !0 }, dragOnClick: { type: Boolean, default: !1 }, duration: { type: Number, default: 0.5 }, data: { type: [Object, Array] }, dataValue: { type: String, default: "value" }, dataLabel: { type: String, default: "label" }, lazy: { type: Boolean, default: !1 }, tooltip: { type: String, default: "active", validator: function(t) {
          return ["none", "always", "focus", "hover", "active"].indexOf(t) > -1;
        } }, tooltipPlacement: { type: [String, Array], validator: function(t) {
          return (Array.isArray(t) ? t : [t]).every(function(e) {
            return ["top", "right", "bottom", "left"].indexOf(e) > -1;
          });
        } }, tooltipFormatter: { type: [String, Array, Function] }, useKeyboard: { type: Boolean, default: !0 }, keydownHook: { type: Function }, enableCross: { type: Boolean, default: !0 }, fixed: { type: Boolean, default: !1 }, order: { type: Boolean, default: !0 }, minRange: { type: Number }, maxRange: { type: Number }, marks: { type: [Boolean, Object, Array, Function], default: !1 }, process: { type: [Boolean, Function], default: !0 }, zoom: { type: Number }, included: { type: Boolean }, adsorb: { type: Boolean }, hideLabel: { type: Boolean }, dotOptions: { type: [Object, Array] }, dotAttrs: { type: Object }, railStyle: { type: Object }, processStyle: { type: Object }, dotStyle: { type: Object }, tooltipStyle: { type: Object }, stepStyle: { type: Object }, stepActiveStyle: { type: Object }, labelStyle: { type: Object }, labelActiveStyle: { type: Object } }, computed: { isHorizontal: function() {
          return this.direction === "ltr" || this.direction === "rtl";
        }, isReverse: function() {
          return this.direction === "rtl" || this.direction === "btt";
        }, tailSize: function() {
          return K((this.isHorizontal ? this.height : this.width) || bt);
        }, containerClasses: function() {
          return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
        }, containerStyles: function() {
          var t = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], e = yt(t, 2), n = e[0], r = e[1], o = this.width ? K(this.width) : this.isHorizontal ? "auto" : K(bt), a = this.height ? K(this.height) : this.isHorizontal ? K(bt) : "auto";
          return { padding: this.contained ? "".concat(r / 2, "px ").concat(n / 2, "px") : this.isHorizontal ? "".concat(r / 2, "px 0") : "0 ".concat(n / 2, "px"), width: o, height: a };
        }, processArray: function() {
          var t = this;
          return this.control.processArray.map(function(e, n) {
            var r, o = yt(e, 3), a = o[0], u = o[1], I = o[2];
            if (a > u) {
              var h = [u, a];
              a = h[0], u = h[1];
            }
            var M = t.isHorizontal ? "width" : "height";
            return { start: a, end: u, index: n, style: lt(lt((r = {}, Y(r, t.isHorizontal ? "height" : "width", "100%"), Y(r, t.isHorizontal ? "top" : "left", 0), Y(r, t.mainDirection, "".concat(a, "%")), Y(r, M, "".concat(u - a, "%")), Y(r, "transitionProperty", "".concat(M, ",").concat(t.mainDirection)), Y(r, "transitionDuration", "".concat(t.animateTime, "s")), r), t.processStyle), I) };
          });
        }, dotBaseStyle: function() {
          var t, e = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], n = yt(e, 2), r = n[0], o = n[1];
          return t = this.isHorizontal ? Y({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), WebkitTransform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, this.direction === "ltr" ? "left" : "right", "0") : Y({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), WebkitTransform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, this.direction === "btt" ? "bottom" : "top", "0"), lt({ width: "".concat(r, "px"), height: "".concat(o, "px") }, t);
        }, mainDirection: function() {
          switch (this.direction) {
            case "ltr":
              return "left";
            case "rtl":
              return "right";
            case "btt":
              return "bottom";
            case "ttb":
              return "top";
            default:
              return "left";
          }
        }, tooltipDirections: function() {
          var t = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
          return Array.isArray(t) ? t : this.dots.map(function() {
            return t;
          });
        }, dots: function() {
          var t = this;
          return this.control.dotsPos.map(function(e, n) {
            return lt({ pos: e, index: n, value: t.control.dotsValue[n], focus: t.states.has(z.Focus) && t.focusDotIndex === n, disabled: t.disabled, style: t.dotStyle }, (Array.isArray(t.dotOptions) ? t.dotOptions[n] : t.dotOptions) || {});
          });
        }, animateTime: function() {
          return this.states.has(z.Drag) ? 0 : this.duration;
        }, canSort: function() {
          return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
        }, sliderData: function() {
          var t = this;
          return this.isObjectArrayData(this.data) ? this.data.map(function(e) {
            return e[t.dataValue];
          }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
        }, sliderMarks: function() {
          var t = this;
          return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(e) {
            var n = { label: e };
            return t.data.some(function(r) {
              return r[t.dataValue] === e && (n.label = r[t.dataLabel], !0);
            }), n;
          } : this.isObjectData(this.data) ? this.data : void 0;
        }, sliderTooltipFormatter: function() {
          var t = this;
          if (this.tooltipFormatter) return this.tooltipFormatter;
          if (this.isObjectArrayData(this.data)) return function(n) {
            var r = "" + n;
            return t.data.some(function(o) {
              return o[t.dataValue] === n && (r = o[t.dataLabel], !0);
            }), r;
          };
          if (this.isObjectData(this.data)) {
            var e = this.data;
            return function(n) {
              return e[n];
            };
          }
        }, isNotSync: function() {
          var t = this.control.dotsValue;
          return Array.isArray(this.modelValue) ? this.modelValue.length !== t.length || this.modelValue.some(function(e, n) {
            return e !== t[n];
          }) : this.modelValue !== t[0];
        }, dragRange: function() {
          var t = this.dots[this.focusDotIndex - 1], e = this.dots[this.focusDotIndex + 1];
          return [t ? t.pos : -1 / 0, e ? e.pos : 1 / 0];
        } }, watch: { modelValue: function() {
          this.control && !this.states.has(z.Drag) && this.isNotSync && this.control.setValue(this.modelValue);
        } }, methods: { isObjectData: function(t) {
          return !!t && Object.prototype.toString.call(t) === "[object Object]";
        }, isObjectArrayData: function(t) {
          return !!t && Array.isArray(t) && t.length > 0 && vt(t[0]) === "object";
        }, bindEvent: function() {
          document.addEventListener("touchmove", this.dragMove, { passive: !1 }), document.addEventListener("touchend", this.dragEnd, { passive: !1 }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
        }, unbindEvent: function() {
          document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
        }, setScale: function() {
          this.scale = new F(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).multiply(this.zoom || 1).divide(100).toNumber();
        }, initControl: function() {
          var t = this;
          this.control = new Xt({ value: this.modelValue, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(e) {
            t.$watch(e, function(n) {
              if (e === "data" && Array.isArray(t.control.data) && Array.isArray(n) && t.control.data.length === n.length && n.every(function(r, o) {
                return r === t.control.data[o];
              })) return !1;
              switch (e) {
                case "data":
                case "dataLabel":
                case "dataValue":
                  t.control.data = t.sliderData;
                  break;
                case "mark":
                  t.control.marks = t.sliderMarks;
                  break;
                default:
                  t.control[e] = n;
              }
              ["data", "max", "min", "interval"].indexOf(e) > -1 && t.control.syncDotsPos();
            });
          });
        }, syncValueByPos: function() {
          var t = this.control.dotsValue;
          if (this.isDiff(t, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])) {
            var e = t.length === 1 ? t[0] : mt(t);
            this.$emit("change", e, this.focusDotIndex), this.$emit("update:modelValue", e);
          }
        }, isDiff: function(t, e) {
          return t.length !== e.length || t.some(function(n, r) {
            return n !== e[r];
          });
        }, emitError: function(t, e) {
          this.silent || console.error("[VueSlider error]: ".concat(e)), this.$emit("error", t, e);
        }, dragStartOnProcess: function(t) {
          if (this.dragOnClick) {
            this.setScale();
            var e = this.getPosByEvent(t), n = this.control.getRecentDot(e);
            if (this.dots[n].disabled) return;
            this.dragStart(n), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos();
          }
        }, dragStart: function(t) {
          this.focusDotIndex = t, this.setScale(), this.states.add(z.Drag), this.states.add(z.Focus), this.$emit("drag-start", this.focusDotIndex);
        }, dragMove: function(t) {
          if (!this.states.has(z.Drag)) return !1;
          t.preventDefault();
          var e = this.getPosByEvent(t);
          this.isCrossDot(e), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos();
          var n = this.control.dotsValue;
          this.$emit("dragging", n.length === 1 ? n[0] : mt(n), this.focusDotIndex);
        }, isCrossDot: function(t) {
          if (this.canSort) {
            var e = this.focusDotIndex, n = t;
            if (n > this.dragRange[1] ? (n = this.dragRange[1], this.focusDotIndex++) : n < this.dragRange[0] && (n = this.dragRange[0], this.focusDotIndex--), e !== this.focusDotIndex) {
              var r = this.$refs["dot-".concat(this.focusDotIndex)];
              r && r.$el && r.$el.focus(), this.control.setDotPos(n, e);
            }
          }
        }, dragEnd: function(t) {
          var e = this;
          if (!this.states.has(z.Drag)) return !1;
          setTimeout(function() {
            e.lazy && e.syncValueByPos(), e.included && e.isNotSync ? e.control.setValue(e.modelValue) : e.control.syncDotsPos(), e.states.delete(z.Drag), e.useKeyboard && !("targetTouches" in t) || e.states.delete(z.Focus), e.$emit("drag-end", e.focusDotIndex);
          });
        }, blurHandle: function(t) {
          if (!this.states.has(z.Focus) || !this.$refs.container || this.$refs.container.contains(t.target)) return !1;
          this.states.delete(z.Focus);
        }, clickHandle: function(t) {
          if (!this.clickable || this.disabled) return !1;
          if (!this.states.has(z.Drag)) {
            this.setScale();
            var e = this.getPosByEvent(t);
            this.setValueByPos(e);
          }
        }, focus: function(t) {
          var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          t.disabled || (this.states.add(z.Focus), this.focusDotIndex = e);
        }, blur: function() {
          this.states.delete(z.Focus);
        }, getValue: function() {
          var t = this.control.dotsValue;
          return t.length === 1 ? t[0] : t;
        }, getIndex: function() {
          var t = this.control.dotsIndex;
          return t.length === 1 ? t[0] : t;
        }, setValue: function(t) {
          this.control.setValue(Array.isArray(t) ? mt(t) : [t]), this.syncValueByPos();
        }, setIndex: function(t) {
          var e = this, n = Array.isArray(t) ? t.map(function(r) {
            return e.control.getValueByIndex(r);
          }) : this.control.getValueByIndex(t);
          this.setValue(n);
        }, setValueByPos: function(t) {
          var e = this, n = this.control.getRecentDot(t);
          if (this.disabled || this.dots[n].disabled) return !1;
          this.focusDotIndex = n, this.control.setDotPos(t, n), this.syncValueByPos(), this.useKeyboard && this.states.add(z.Focus), setTimeout(function() {
            e.included && e.isNotSync ? e.control.setValue(e.modelValue) : e.control.syncDotsPos();
          });
        }, keydownHandle: function(t) {
          var e = this;
          if (!this.useKeyboard || !this.states.has(z.Focus)) return !1;
          var n = this.included && this.marks, r = w(t, { direction: this.direction, max: n ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
          if (r) {
            t.preventDefault();
            var o = -1, a = 0;
            n ? (this.control.markList.some(function(u, I) {
              return u.value === e.control.dotsValue[e.focusDotIndex] && (o = r(I), !0);
            }), o < 0 ? o = 0 : o > this.control.markList.length - 1 && (o = this.control.markList.length - 1), a = this.control.markList[o].pos) : (o = r(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), a = this.control.parseValue(this.control.getValueByIndex(o))), this.isCrossDot(a), this.control.setDotPos(a, this.focusDotIndex), this.syncValueByPos();
          }
        }, getPosByEvent: function(t) {
          return p(t, this.$el, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
        }, renderSlot: function(t, e, n) {
          var r = this.$slots[t];
          return r ? r(e) : n;
        } }, created: function() {
          this.initControl();
        }, mounted: function() {
          this.bindEvent();
        }, beforeUnmount: function() {
          this.unbindEvent();
        } }), kt = (0, x.Z)(se, [["render", O]]);
        kt.VueSliderMark = tt, kt.VueSliderDot = X;
        var le = kt, ue = le;
      }(), T = T.default, T;
    }();
  });
})(Tt);
var Oe = Tt.exports;
const De = /* @__PURE__ */ me(Oe), Ee = { class: "rv-label" }, Ae = ["innerHTML"], Re = { class: "flex flex-row pl-30" }, Ve = /* @__PURE__ */ ht({
  __name: "slider-control",
  props: {
    name: String,
    icon: String,
    config: {
      type: Object,
      required: !0
    }
  },
  setup(C) {
    const L = C, j = W(L.config.value), y = W(!!L.config.disabled), U = nt([]);
    return U.push(
      // watch the config for changes to the opacity value
      Ot(
        () => L.config,
        (g) => {
          j.value = g.value, y.value = !!g.disabled;
        },
        { deep: !0 }
      )
    ), Dt(() => {
      U.forEach((g) => g());
    }), (g, T) => (et(), dt("div", null, [
      B("div", Ee, [
        B("div", {
          innerHTML: C.icon,
          class: "p-8 pl-0"
        }, null, 8, Ae),
        Pt(" " + Z(C.name), 1)
      ]),
      B("div", Re, [
        ct(N(De), {
          class: "mr-16",
          onChange: C.config.onChange,
          modelValue: j.value,
          "onUpdate:modelValue": T[0] || (T[0] = (l) => j.value = l),
          disabled: y.value,
          width: 250,
          min: 0,
          max: 100
        }, null, 8, ["onChange", "modelValue", "disabled"]),
        Pt(" " + Z(C.config.value) + "% ", 1)
      ])
    ]));
  }
}), Ce = /* @__PURE__ */ Et(Ve, [["__scopeId", "data-v-9f0c5af5"]]), Le = { class: "rv-label text-sm pt-10" }, je = { class: "flex flex-row" }, Me = ["value", "disabled"], Be = { class: "text-xs pt-10 text-gray-600 mb-20" }, ze = /* @__PURE__ */ ht({
  __name: "input-control",
  props: {
    config: {
      type: Object,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  },
  setup(C) {
    const { t: L } = It(), j = C, y = W(!!j.config.disabled), U = nt([]);
    return U.push(
      // watch the config for changes to the opacity value
      Ot(
        () => j.config,
        (g) => {
          y.value = !!g.disabled;
        },
        { deep: !0 }
      )
    ), Dt(() => {
      U.forEach((g) => g());
    }), (g, T) => (et(), dt("div", null, [
      B("div", Le, Z(C.name), 1),
      B("div", je, [
        B("input", {
          onKeypress: T[0] || (T[0] = ve(ye(() => {
          }, ["prevent"]), ["enter"])),
          class: "rv-input text-md w-full",
          type: "number",
          value: N(ge).value,
          disabled: y.value,
          min: "0",
          max: "100"
        }, null, 40, Me)
      ]),
      B("div", Be, Z(N(L)("settings.label.refreshOff")), 1)
    ]));
  }
}), Ie = /* @__PURE__ */ Et(ze, [["__scopeId", "data-v-86d3b932"]]), Ne = {
  visibility: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  opacity: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z" fill="none"/><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>',
  box: '<svg xmlns="http://www.w3.org/2000/svg" fit="" height="20" width="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false"><g id="cube-outline"><path d="M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 12.0009,4.15093L 6.04124,7.5L 12.0009,10.8491L 17.9591,7.5L 12.0009,4.15093 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.209L 5,15.9149 Z M 19,15.9149L 19,9.20901L 13,12.5806L 13,19.2875L 19,15.9149 Z "></path></g></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  refresh: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>'
}, wt = /* @__PURE__ */ ht({
  __name: "component",
  props: {
    type: {
      type: String,
      required: !0
    },
    config: {
      type: Object,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    },
    ariaLabel: {
      type: String,
      required: !0
    }
  },
  setup(C) {
    const L = nt(Ne), j = nt({
      slider: xt(Ce),
      toggle: xt(Pe),
      input: xt(Ie)
    });
    return (y, U) => (et(), Nt(be(j[C.type]), {
      icon: L[C.icon],
      name: C.name,
      config: C.config,
      "aria-label": C.ariaLabel
    }, null, 8, ["icon", "name", "config", "aria-label"]));
  }
}), Te = { key: 0 }, _e = { class: "p-8 font-bold break-words mb-8 bg-gray-100" }, He = { class: "flex flex-col justify-center" }, $e = { class: "rv-subheader" }, Fe = { class: "flex flex-col justify-center" }, Ue = { class: "rv-subheader" }, qe = {
  key: 1,
  class: "p-5"
}, Ge = /* @__PURE__ */ ht({
  __name: "screen",
  props: {
    panel: { type: Object, required: !0 },
    layer: { type: Object, required: !0 }
  },
  setup(C) {
    const { t: L } = It(), j = ke("iApi"), y = C, U = W(""), g = W(y.layer.uid), T = W(y.layer.visibility), l = W(y.layer.opacity * 100), d = W(y.layer.identify), s = W(!1), i = nt([]), c = nt([]);
    s.value = y.layer !== void 0 && !y.layer.isRemoved, c.push(
      Ot(
        () => y.layer.uid,
        (f, x) => {
          f !== x && _();
        }
      )
    ), xe(() => {
      _(), i.push(
        j.event.on(ut.LAYER_VISIBILITYCHANGE, (f) => {
          g.value === f.layer.uid && (T.value = f.visibility);
        })
      ), i.push(
        j.event.on(ut.LAYER_OPACITYCHANGE, (f) => {
          g.value === f.layer.uid && (l.value = Math.round(f.opacity * 100));
        })
      ), i.push(
        j.event.on(ut.LAYER_RELOAD_END, (f) => {
          f.loadPromise().then(() => {
            g.value === f.uid && _();
          });
        })
      ), i.push(
        j.event.on(ut.LAYER_REMOVE, (f) => {
          g.value === f.uid && y.panel.close();
        })
      );
    }), Dt(() => {
      i.forEach((f) => j.event.off(f)), c.forEach((f) => f());
    });
    const S = (f) => {
      const x = j.fixture.get("settings");
      if (!x || Object.keys(x).length === 0)
        return console.warn("Settings panel cannot check for layer control because it could not find settings fixture api"), !1;
      const m = x?.getLayerFixtureConfig(y.layer.id);
      return m && (m.controls || m.disabledControls) ? j.geo.shared.controlAvailable(f, m) : y.layer.controlAvailable(f);
    }, O = (f) => {
      y.layer.visibility = f, T.value = f;
    }, A = (f) => {
      y.layer.opacity = f / 100, l.value = f;
    }, q = (f) => {
      y.layer.identify = f, d.value = f;
    }, _ = () => {
      s.value = y.layer !== void 0 && !y.layer.isRemoved;
      const f = y.layer.uid;
      y.layer.loadPromise().then(() => {
        f === y.layer.uid && (T.value = y.layer.visibility, l.value = Math.round(y.layer.opacity * 100), d.value = y.layer.identify, U.value = y.layer.name);
      });
    };
    return (f, x) => {
      const m = Se("panel-screen");
      return et(), Nt(m, { panel: C.panel }, {
        header: zt(() => [
          Pt(Z(N(L)("settings.title")), 1)
        ]),
        content: zt(() => [
          s.value ? (et(), dt("div", Te, [
            B("div", _e, Z(U.value), 1),
            B("div", He, [
              B("span", $e, Z(N(L)("settings.label.display")), 1),
              x[0] || (x[0] = B("div", { class: "rv-settings-divider" }, null, -1)),
              ct(wt, {
                class: "rv-subsection",
                type: "toggle",
                icon: "visibility",
                onToggled: O,
                name: N(L)("settings.label.visibility"),
                config: {
                  value: T.value,
                  disabled: !S(N(St).Visibility)
                },
                ariaLabel: N(L)("settings.label.visibility")
              }, null, 8, ["name", "config", "ariaLabel"]),
              x[1] || (x[1] = B("div", { class: "rv-settings-divider" }, null, -1)),
              ct(wt, {
                class: "rv-subsection",
                type: "slider",
                name: N(L)("settings.label.opacity"),
                icon: "opacity",
                config: {
                  onChange: A,
                  value: l.value,
                  disabled: !S(N(St).Opacity)
                },
                ariaLabel: N(L)("settings.label.opacity")
              }, null, 8, ["name", "config", "ariaLabel"]),
              x[2] || (x[2] = B("div", { class: "rv-settings-divider" }, null, -1))
            ]),
            B("div", Fe, [
              B("span", Ue, Z(N(L)("settings.label.data")), 1),
              x[3] || (x[3] = B("div", { class: "rv-settings-divider" }, null, -1)),
              ct(wt, {
                class: "rv-subsection",
                type: "toggle",
                name: N(L)("settings.label.identify"),
                icon: "location",
                onToggled: q,
                config: {
                  value: d.value,
                  disabled: !(S(N(St).Identify) && y.layer.supportsIdentify)
                },
                ariaLabel: N(L)("settings.label.identify")
              }, null, 8, ["name", "config", "ariaLabel"]),
              x[4] || (x[4] = B("div", { class: "rv-settings-divider" }, null, -1))
            ])
          ])) : (et(), dt("div", qe, [
            B("span", null, Z(N(L)("settings.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Ke = /* @__PURE__ */ Et(Ge, [["__scopeId", "data-v-72efbdd5"]]);
export {
  Ke as default
};
//# sourceMappingURL=screen-BwCmXOar.js.map