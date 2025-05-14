import { openBlock as o, createElementBlock as r, defineComponent as V, inject as B, resolveComponent as P, createVNode as x, unref as v, withCtx as k, createElementVNode as p, ref as b, onMounted as T, onBeforeUnmount as G, computed as R, resolveDirective as O, withDirectives as F, createBlock as h, normalizeClass as S, createCommentVNode as g, Fragment as w, renderList as H, resolveDynamicComponent as L } from "vue";
import { _ as D, d as C, F as W, G as Y } from "./main-tFXCcQgY.js";
import { useI18n as Z } from "vue-i18n";
import { throttle as N } from "throttle-debounce";
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
const q = {}, Q = { class: "border-b p-0 self-center w-2/3" };
function U(f, n) {
  return o(), r("span", Q);
}
const z = /* @__PURE__ */ D(q, [["render", U]]), J = /* @__PURE__ */ V({
  __name: "zoom-nav",
  setup(f) {
    const { t: n } = Z(), t = B("iApi"), i = N(400, !0, () => t.geo.map.zoomIn()), l = N(400, !0, () => t.geo.map.zoomOut());
    return (a, e) => {
      const s = P("mapnav-button");
      return o(), r("div", null, [
        x(s, {
          onClickFunction: v(i),
          tooltip: v(n)("mapnav.zoomIn")
        }, {
          default: k(() => e[0] || (e[0] = [
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
        x(z),
        x(s, {
          onClickFunction: v(l),
          tooltip: v(n)("mapnav.zoomOut")
        }, {
          default: k(() => e[1] || (e[1] = [
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
}), K = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, X = ["content"], ee = { class: "mapnav-section bg-white-75 hover:bg-white" }, te = {
  key: 0,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, oe = ["content"], c = 420, ne = /* @__PURE__ */ V({
  __name: "mapnav",
  setup(f) {
    const n = B("iApi"), t = b(void 0), i = C(), { t: l } = Z(), a = b(), e = b(n.$rootEl?.clientHeight), s = b(!1), y = () => {
      e.value = n.$rootEl?.clientHeight;
    }, E = () => {
      a.value._tippy.hide();
    }, M = (m) => {
      m.key === "Tab" && a.value?.matches(":focus") && a.value._tippy.show();
    };
    T(() => {
      a.value?.addEventListener("blur", E), a.value?.addEventListener("keyup", M), t.value = new ResizeObserver(y), t.value.observe(n.$rootEl);
    }), G(() => {
      a.value?.removeEventListener("blur", E), a.value?.removeEventListener("keyup", M), t.value.disconnect();
    });
    const _ = R(() => i.order.map((m) => i.items[m]).filter((m) => m.componentId));
    return (m, u) => {
      const j = P("mapnav-button"), I = O("focus-list"), A = O("tippy");
      return o(), r("div", K, [
        F((o(), r("div", {
          class: "mapnav-section flex flex-col",
          content: v(l)("panels.controls.items"),
          ref_key: "el",
          ref: a
        }, [
          x(J, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          u[1] || (u[1] = p("span", { class: "py-1" }, null, -1)),
          p("div", ee, [
            e.value <= c ? (o(), h(j, {
              key: 0,
              class: "self-center",
              onClickFunction: () => {
                s.value = !s.value;
              },
              tooltip: s.value ? m.$t("mapnav.closeMenu") : m.$t("mapnav.openMenu")
            }, {
              default: k(() => [
                (o(), r("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "shape-rendering": "geometricPrecision",
                  "text-rendering": "geometricPrecision",
                  "image-rendering": "optimizeQuality",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  viewBox: "0 0 319 511.61",
                  class: S(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": s.value }])
                }, u[0] || (u[0] = [
                  p("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
                ]), 2))
              ]),
              _: 1
            }, 8, ["onClickFunction", "tooltip"])) : g("", !0)
          ]),
          e.value > c ? (o(), r("div", te, [
            (o(!0), r(w, null, H(_.value, (d, $) => (o(), r(w, {
              key: d.id + "button"
            }, [
              (o(), h(L(d.id + "-nav-button"))),
              $ !== _.value.length - 1 ? (o(), h(z, {
                key: 0,
                class: "mapnav-divider"
              })) : g("", !0)
            ], 64))), 128))
          ])) : g("", !0)
        ], 8, X)), [
          [I],
          [A, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ]),
        e.value <= c && s.value ? F((o(), r("div", {
          key: 0,
          class: S(["mapnav-section absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0 bg-white-75 hover:bg-white", {
            "h-[198px]": e.value <= c - 78,
            "h-[165px]": e.value <= c - 110,
            "h-[131px]": e.value <= c - 140,
            "h-[100px]": e.value <= c - 175
          }]),
          content: v(l)("panels.controls.items")
        }, [
          (o(!0), r(w, null, H(_.value, (d, $) => (o(), r(w, {
            key: d.id + "button"
          }, [
            (o(), h(L(d.id + "-nav-button"))),
            $ !== _.value.length - 1 ? (o(), h(z, {
              key: 0,
              class: "mapnav-divider w-[20px]"
            })) : g("", !0)
          ], 64))), 128))
        ], 10, oe)), [
          [I],
          [A, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : g("", !0)
      ]);
    };
  }
}), ie = /* @__PURE__ */ D(ne, [["__scopeId", "data-v-1bc2ee5c"]]);
class ae extends W {
  mapnavStore = C(this.$vApp.$pinia);
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
const re = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Te extends ae {
  async added() {
    Object.entries(re).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
    const { destroy: n, el: t } = this.mount(ie, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const l = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), a = this.$iApi.event.on(Y.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      l(), this.$iApi.event.off(a);
      const e = C(this.$vApp.$pinia), s = { ...e.items };
      Object.keys(s).forEach((y) => e.removeItem(y)), e.$reset(), n();
    };
  }
}
export {
  Te as default
};
