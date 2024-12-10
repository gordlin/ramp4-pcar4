import { defineComponent as c, inject as n, resolveComponent as m, openBlock as h, createBlock as l, unref as g, withCtx as v, createElementVNode as o, markRaw as f } from "vue";
import "tiny-emitter";
import { F as u, h as s, b as d, d as S } from "./main-BSV700RN.js";
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
import "throttle-debounce";
import "pinia";
import { useI18n as b } from "vue-i18n";
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
class x extends u {
}
const w = /* @__PURE__ */ c({
  __name: "nav-button",
  setup(t) {
    const { t: e } = b(), r = n("iApi"), a = () => {
      r?.panel.toggle("geosearch");
    };
    return ($, i) => {
      const p = m("mapnav-button");
      return h(), l(p, {
        onClickFunction: a,
        tooltip: g(e)("geosearch.title")
      }, {
        default: v(() => i[0] || (i[0] = [
          o("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
            o("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), A = { en: { "geosearch.title": "Geolocation Search", "geosearch.noResults": "No results to show for ", "geosearch.searchText": "Search for a location...", "geosearch.visible": "Visible on map", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Clear filters", "geosearch.serviceError": "No response from {services} service(s)", "geosearch.badChars": "The character(s) {chars} are not supported and will be ignored" }, fr: { "geosearch.title": "Recherche géolocalisée", "geosearch.noResults": "Aucun résultat à afficher pour ", "geosearch.searchText": "Rechercher un emplacement...", "geosearch.visible": "Visible sur la carte", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Effacer les filtres", "geosearch.serviceError": "Pas de réponse de la part des services de {services}", "geosearch.badChars": "Les caractères {chars} ne sont pas pris en charge et seront ignorés" } };
class Ae extends x {
  async added() {
    s(this.$vApp.$pinia).initService(this.$iApi.language, this.config), this.$iApi.component("geosearch-nav-button", w), this.$iApi.panel.register(
      {
        id: "geosearch",
        config: {
          screens: {
            "geosearch-component": () => f(import("./screen-DcUys8Oi.js"))
          },
          button: {
            tooltip: "geosearch.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "geosearch.title"
        }
      },
      { i18n: { messages: A } }
    ), this.handlePanelTeleports(["geosearch"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && d(this.$vApp.$pinia).removeButton("geosearch"), this.$iApi.fixture.exists("mapnav") && S(this.$vApp.$pinia).removeItem("geosearch"), s(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("geosearch");
  }
}
export {
  Ae as default
};