import { markRaw as t } from "vue";
import "tiny-emitter";
import { F as p, b as a } from "./main-BSV700RN.js";
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
import "vue-i18n";
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
const i = { en: { "layer-reorder.title": "Reorder Layers", "layer-reorder.nolayers": "No Layers", "layer-reorder.loading": "Loading", "layer-reorder.expand": "Expand Sublayers", "layer-reorder.expanded": "{name} sublayers expanded", "layer-reorder.collapse": "Collapse Sublayers", "layer-reorder.collapsed": "{name} sublayers collapsed", "layer-reorder.move.up": "Move up", "layer-reorder.move.down": "Move down", "layer-reorder.layermoved": "{name} moved to index {index}" }, fr: { "layer-reorder.title": "Réorganiser les couches", "layer-reorder.nolayers": "Aucune couche", "layer-reorder.loading": "Chargement", "layer-reorder.expand": "Développer les sous-couches", "layer-reorder.expanded": "Sous-couches {name} développées", "layer-reorder.collapse": "Réduire les sous-couches", "layer-reorder.collapsed": "Sous-couches {name} réduites", "layer-reorder.move.up": "Déplacer vers le haut", "layer-reorder.move.down": "Déplacer vers le bas", "layer-reorder.layermoved": "{name} déplacé vers l'index {index}" } };
class l extends p {
  /**
   * Opens or closes the layer reorder fixture panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof LayerReorderAPI
   */
  toggleLayerReorder(r) {
    const o = this.$iApi.panel.get("layer-reorder");
    this.$iApi.panel.toggle(o, r);
  }
}
class ir extends l {
  added() {
    this.$iApi.panel.register(
      {
        "layer-reorder": {
          screens: {
            "layer-reorder-screen": () => t(import("./screen-o2yYfGgu.js"))
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "layer-reorder.title",
            // https://fonts.google.com/icons?selected=Material+Icons:low_priority
            icon: '<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'
          },
          alertName: "layer-reorder.title"
        }
      },
      {
        i18n: { messages: i }
      }
    ), this.handlePanelTeleports(["layer-reorder"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && a(this.$vApp.$pinia).removeButton("layer-reorder"), this.$iApi.panel.remove("layer-reorder");
  }
}
export {
  ir as default
};
