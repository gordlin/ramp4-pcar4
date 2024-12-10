import { openBlock as t, createElementBlock as a, defineComponent as S, inject as P, resolveComponent as H, createVNode as b, unref as c, withCtx as k, createElementVNode as m, ref as y, onMounted as D, onBeforeUnmount as Z, computed as j, resolveDirective as E, withDirectives as I, createBlock as d, normalizeClass as A, createCommentVNode as h, Fragment as w, renderList as F, resolveDynamicComponent as L } from "vue";
import { _ as N, d as $, F as T, G } from "./main-BSV700RN.js";
import { useI18n as V } from "vue-i18n";
import { throttle as O } from "throttle-debounce";
import "tiny-emitter";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const W = {}, Y = { class: "border-b p-0 self-center w-2/3" };
function q(g, i) {
  return t(), a("span", Y);
}
const z = /* @__PURE__ */ N(W, [["render", q]]), Q = /* @__PURE__ */ S({
  __name: "zoom-nav",
  setup(g) {
    const { t: i } = V(), o = P("iApi"), e = O(400, !0, () => o.geo.map.zoomIn()), r = O(400, !0, () => o.geo.map.zoomOut());
    return (s, n) => {
      const l = H("mapnav-button");
      return t(), a("div", null, [
        b(l, {
          onClickFunction: c(e),
          tooltip: c(i)("mapnav.zoomIn")
        }, {
          default: k(() => n[0] || (n[0] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              m("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        b(z),
        b(l, {
          onClickFunction: c(r),
          tooltip: c(i)("mapnav.zoomOut")
        }, {
          default: k(() => n[1] || (n[1] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13H5v-2h14v2z" }),
              m("path", {
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
}), U = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, J = ["content"], K = {
  key: 1,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, R = ["content"], X = /* @__PURE__ */ S({
  __name: "mapnav",
  setup(g) {
    const i = $(), { t: o } = V(), e = y(), r = y(window.innerHeight), s = y(!1), n = () => {
      r.value = window.innerHeight;
    }, l = () => {
      e.value._tippy.hide();
    }, f = (p) => {
      p.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    D(() => {
      e.value?.addEventListener("blur", l), e.value?.addEventListener("keyup", f), window.addEventListener("resize", n);
    }), Z(() => {
      e.value?.removeEventListener("blur", l), e.value?.removeEventListener("keyup", f), window.removeEventListener("resize", n);
    });
    const _ = j(() => i.order.map((p) => i.items[p]).filter((p) => p.componentId));
    return (p, v) => {
      const B = H("mapnav-button"), C = E("focus-list"), M = E("tippy");
      return t(), a("div", U, [
        I((t(), a("div", {
          class: "flex flex-col",
          content: c(o)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          b(Q, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          v[1] || (v[1] = m("span", { class: "py-1" }, null, -1)),
          r.value <= 460 ? (t(), d(B, {
            key: 0,
            class: "mapnav-section bg-white-75 hover:bg-white self-center",
            onClickFunction: () => {
              s.value = !s.value;
            },
            tooltip: s.value ? p.$t("mapnav.closeMenu") : p.$t("mapnav.openMenu")
          }, {
            default: k(() => [
              (t(), a("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "shape-rendering": "geometricPrecision",
                "text-rendering": "geometricPrecision",
                "image-rendering": "optimizeQuality",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                viewBox: "0 0 319 511.61",
                class: A(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": s.value }])
              }, v[0] || (v[0] = [
                m("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
              ]), 2))
            ]),
            _: 1
          }, 8, ["onClickFunction", "tooltip"])) : h("", !0),
          r.value > 460 ? (t(), a("div", K, [
            (t(!0), a(w, null, F(_.value, (u, x) => (t(), a(w, {
              key: u.id + "button"
            }, [
              (t(), d(L(u.id + "-nav-button"))),
              x !== _.value.length - 1 ? (t(), d(z, {
                key: 0,
                class: "mapnav-divider"
              })) : h("", !0)
            ], 64))), 128))
          ])) : h("", !0)
        ], 8, J)), [
          [C],
          [M, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]),
        r.value <= 460 && s.value ? I((t(), a("div", {
          key: 0,
          class: A(["absolute right-56 bottom-36 sm:bottom-48 mapnav-section flex flex-col flex-wrap gap-x-1 items-start", { "h-[165px]": r.value <= 400, "h-[99px]": r.value <= 340 }]),
          content: c(o)("panels.controls.items")
        }, [
          (t(!0), a(w, null, F(_.value, (u, x) => (t(), a(w, {
            key: u.id + "button"
          }, [
            (t(), d(L(u.id + "-nav-button"), { class: "mapnav-section bg-white-75 hover:bg-white" })),
            x !== _.value.length - 1 ? (t(), d(z, {
              key: 0,
              class: "mapnav-divider"
            })) : h("", !0)
          ], 64))), 128))
        ], 10, R)), [
          [C],
          [M, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : h("", !0)
      ]);
    };
  }
}), ee = /* @__PURE__ */ N(X, [["__scopeId", "data-v-de64fedb"]]);
class te extends T {
  mapnavStore = $(this.$vApp.$pinia);
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
  _parseConfig(i) {
    if (!i)
      return;
    const o = i.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = o.reduce((e, r) => (e[r.id] = r, e), {}), this.mapnavStore.order = o.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const i = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((o) => {
      (this.$iApi.fixture.exists(o) || i.includes(o)) && (this.mapnavStore.items[o].componentId = `${o}-nav-button`);
    });
  }
}
const oe = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class tt extends te {
  async added() {
    Object.entries(oe).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: i, el: o } = this.mount(ee, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this._parseConfig(this.config);
    const r = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), s = this.$iApi.event.on(G.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      r(), this.$iApi.event.off(s);
      const n = $(this.$vApp.$pinia), l = { ...n.items };
      Object.keys(l).forEach((f) => n.removeItem(f)), n.$reset(), i();
    };
  }
}
export {
  tt as default
};
