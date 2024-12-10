import { a2 as r } from "./main-BmGptCZr.js";
async function y(a, t) {
  const { data: e } = await r(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const n = { BingMapsLayer: async () => (await import("./BingMapsLayer-Cqy1t2l2.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-DSL3ZLbe.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-wcXmfi-w.js")).default, CSVLayer: async () => (await import("./CSVLayer-DG9OpB_A.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-Bz0D7vRX.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-ugpvaP0Q.js")).default, FeatureLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qM)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-kSXLR1Da.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CIuj_sH-.js")).default, GroupLayer: async () => (await import("./GroupLayer-CM1dCMsM.js")).default, ImageryLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qN)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-D7-ckFgY.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-Dm4JlJrn.js")).default, KMLLayer: async () => (await import("./KMLLayer-BM6Vfl2e.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-CJjiklcC.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-DmSc_fkG.js")).default, MapImageLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qO)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DYE3wMPI.js")).default, MediaLayer: async () => (await import("./MediaLayer-iJliG70D.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-B7yTBv7S.js")).default, OpenStreetMapLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qQ)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-B8NRhB0A.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-Cmo68zDH.js")).default, RouteLayer: async () => (await import("./RouteLayer-BDwAGWd9.js")).default, SceneLayer: async () => (await import("./SceneLayer-zN0DwQ3e.js")).default, StreamLayer: async () => (await import("./StreamLayer-D9ns76gg.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-C3HicZAt.js")).default, TileLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qR)).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-Bw8MVm6q.js")).default, UnknownLayer: async () => (await import("./UnknownLayer-Ce9rZEnV.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-BD18yaMi.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-ttCXmB2g.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-mmTvfzsZ.js")).default, WFSLayer: async () => (await import("./WFSLayer-DE7S6J5D.js")).default, WMSLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qS)).default, WMTSLayer: async () => (await import("./WMTSLayer-DFKOM3tZ.js")).default, WebTileLayer: async () => (await import("./main-BmGptCZr.js").then((a) => a.qP)).default };
export {
  n as a,
  y as t
};
//# sourceMappingURL=lazyLayerLoader-Co9aSCIG.js.map