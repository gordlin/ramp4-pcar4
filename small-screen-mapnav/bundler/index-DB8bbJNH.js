import { openBlock as o, createElementBlock as r, defineComponent as H, inject as L, resolveComponent as N, createVNode as x, unref as v, withCtx as $, createElementVNode as p, ref as f, onMounted as Z, nextTick as j, onBeforeUnmount as G, computed as R, resolveDirective as I, withDirectives as O, createBlock as g, normalizeClass as W, createCommentVNode as _, Fragment as b, renderList as A, resolveDynamicComponent as F, normalizeStyle as Y } from "vue";
import { _ as V, d as z, F as q, G as Q } from "./main-CK-BNsF8.js";
import { useI18n as B } from "vue-i18n";
import { throttle as S } from "throttle-debounce";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const U = {}, J = { class: "border-b p-0 self-center w-2/3" };
function K(w, n) {
  return o(), r("span", J);
}
const k = /* @__PURE__ */ V(U, [["render", K]]), X = /* @__PURE__ */ H({
  __name: "zoom-nav",
  setup(w) {
    const { t: n } = B(), t = L("iApi"), i = S(400, !0, () => t.geo.map.zoomIn()), l = S(400, !0, () => t.geo.map.zoomOut());
    return (a, e) => {
      const s = N("mapnav-button");
      return o(), r("div", null, [
        x(s, {
          onClickFunction: v(i),
          tooltip: v(n)("mapnav.zoomIn")
        }, {
          default: $(() => e[0] || (e[0] = [
            p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              p("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              p("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        x(k),
        x(s, {
          onClickFunction: v(l),
          tooltip: v(n)("mapnav.zoomOut")
        }, {
          default: $(() => e[1] || (e[1] = [
            p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              p("path", { d: "M19 13H5v-2h14v2z" }),
              p("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
}), ee = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, te = ["content"], oe = { class: "mapnav-section bg-white-75 hover:bg-white" }, ne = {
  key: 0,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, ie = ["content"], ae = /* @__PURE__ */ H({
  __name: "mapnav",
  setup(w) {
    const n = L("iApi"), t = f(void 0), i = z(), { t: l } = B(), a = f(), e = f(n.$rootEl?.clientHeight), s = f(!1), c = f(0), P = () => {
      e.value = n.$rootEl?.clientHeight;
    }, C = () => {
      a.value._tippy.hide();
    }, E = (m) => {
      m.key === "Tab" && a.value?.matches(":focus") && a.value._tippy.show();
    };
    Z(() => {
      a.value?.addEventListener("blur", C), a.value?.addEventListener("keyup", E), t.value = new ResizeObserver(P), t.value.observe(n.$rootEl), j(() => {
        c.value = u.value.length * 60;
      });
    }), G(() => {
      a.value?.removeEventListener("blur", C), a.value?.removeEventListener("keyup", E), t.value.disconnect();
    });
    const u = R(() => i.order.map((m) => i.items[m]).filter((m) => m.componentId));
    return (m, d) => {
      const D = N("mapnav-button"), T = I("focus-list"), M = I("tippy");
      return o(), r("div", ee, [
        O((o(), r("div", {
          class: "mapnav-section flex flex-col",
          content: v(l)("panels.controls.items"),
          ref_key: "el",
          ref: a
        }, [
          x(X, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          d[1] || (d[1] = p("span", { class: "py-1" }, null, -1)),
          p("div", oe, [
            e.value <= c.value ? (o(), g(D, {
              key: 0,
              class: "self-center",
              onClickFunction: () => {
                s.value = !s.value;
              },
              tooltip: s.value ? m.$t("mapnav.closeMenu") : m.$t("mapnav.openMenu")
            }, {
              default: $(() => [
                (o(), r("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "shape-rendering": "geometricPrecision",
                  "text-rendering": "geometricPrecision",
                  "image-rendering": "optimizeQuality",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  viewBox: "0 0 319 511.61",
                  class: W(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": s.value }])
                }, d[0] || (d[0] = [
                  p("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
                ]), 2))
              ]),
              _: 1
            }, 8, ["onClickFunction", "tooltip"])) : _("", !0)
          ]),
          e.value > c.value ? (o(), r("div", ne, [
            (o(!0), r(b, null, A(u.value, (h, y) => (o(), r(b, {
              key: h.id + "button"
            }, [
              (o(), g(F(h.id + "-nav-button"))),
              y !== u.value.length - 1 ? (o(), g(k, {
                key: 0,
                class: "mapnav-divider"
              })) : _("", !0)
            ], 64))), 128))
          ])) : _("", !0)
        ], 8, te)), [
          [T],
          [M, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ]),
        e.value <= c.value && s.value ? O((o(), r("div", {
          key: 0,
          class: "flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0",
          style: Y({ maxHeight: `${(e.value - 70) * 0.8}px`, height: "fit-content", width: "fit-content" }),
          content: v(l)("panels.controls.items")
        }, [
          (o(!0), r(b, null, A(u.value, (h, y) => (o(), r(b, {
            key: h.id + "button"
          }, [
            (o(), g(F(h.id + "-nav-button"), {
              class: "mapnav-section bg-white-75 hover:bg-white",
              style: { "margin-left": "1px" },
              showOutline: ""
            })),
            y !== u.value.length - 1 ? (o(), g(k, {
              key: 0,
              class: "mapnav-divider w-[20px]"
            })) : _("", !0)
          ], 64))), 128))
        ], 12, ie)), [
          [M, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : _("", !0)
      ]);
    };
  }
}), re = /* @__PURE__ */ V(ae, [["__scopeId", "data-v-7d48c5f7"]]);
class se extends q {
  mapnavStore = z(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(n) {
    if (!n)
      return;
    const t = n.items.map((i) => ({
      id: i
    }));
    this.mapnavStore.items = t.reduce((i, l) => (i[l.id] = l, i), {}), this.mapnavStore.order = t.map((i) => i.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const n = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((t) => {
      (this.$iApi.fixture.exists(t) || n.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
    });
  }
}
const le = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Re extends se {
  async added() {
    Object.entries(le).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
    const { destroy: n, el: t } = this.mount(re, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const l = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), a = this.$iApi.event.on(Q.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      l(), this.$iApi.event.off(a);
      const e = z(this.$vApp.$pinia), s = { ...e.items };
      Object.keys(s).forEach((c) => e.removeItem(c)), e.$reset(), n();
    };
  }
}
export {
  Re as default
};
