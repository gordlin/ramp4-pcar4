import { a2 as r } from "./main-BLBMGEjI.js";
async function y(a, t) {
  const { data: e } = await r(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const n = { BingMapsLayer: async () => (await import("./BingMapsLayer-CV8dc576.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-CVXk2_wo.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-c35AGReB.js")).default, CSVLayer: async () => (await import("./CSVLayer-CodHDun2.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-D4BT5eRP.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-DJkt3TMJ.js")).default, FeatureLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qM)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-DQpJ8s7Q.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-D4sjaupV.js")).default, GroupLayer: async () => (await import("./GroupLayer-Jx-8K7nu.js")).default, ImageryLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qN)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-DAWMRIOw.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-B88EhHzr.js")).default, KMLLayer: async () => (await import("./KMLLayer-Dc54uqdL.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-k4Sh4ugQ.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-fZqiUAlF.js")).default, MapImageLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qO)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DyNF1iGG.js")).default, MediaLayer: async () => (await import("./MediaLayer-BcUnYUzM.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-CECP9Exp.js")).default, OpenStreetMapLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qQ)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-CnvXPULG.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-C5DaDOa-.js")).default, RouteLayer: async () => (await import("./RouteLayer-BEcioQL4.js")).default, SceneLayer: async () => (await import("./SceneLayer-DHhEiDIL.js")).default, StreamLayer: async () => (await import("./StreamLayer-QNY0bxSL.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-CUE1D616.js")).default, TileLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qR)).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-CedHPyvR.js")).default, UnknownLayer: async () => (await import("./UnknownLayer-DlZyfUnn.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-DYJxmzK9.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-CkheoSts.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DFxqeVFC.js")).default, WFSLayer: async () => (await import("./WFSLayer-CyaHnSHU.js")).default, WMSLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qS)).default, WMTSLayer: async () => (await import("./WMTSLayer-BMFo8oXr.js")).default, WebTileLayer: async () => (await import("./main-BLBMGEjI.js").then((a) => a.qP)).default };
export {
  n as a,
  y as t
};
//# sourceMappingURL=lazyLayerLoader-CdoNGci6.js.map