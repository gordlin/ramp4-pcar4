import { v as t$1, S as S$1, a3 as V } from './main-CiDEuP9F.js';
import { w as w$1, e as e$1 } from './portalLayers-CdDb0I17.js';
import { a } from './lazyLayerLoader-Bcisp-ND.js';
import './preload-helper-dJJaZANz.js';
import './associatedFeatureServiceUtils-C0Lkji-R.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function n(e){return t(e,"route")}function t(e,r){return !(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function c(e,r,a){if(!r)return;const t=r.map((e=>f(e,a))),y=await Promise.allSettled(t);for(const i of y)"rejected"===i.status||i.value&&e.add(i.value);}const l={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},u={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"UnsupportedLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},m={...u,LinkChartLayer:"LinkChartLayer"},g={...d},T={...I};async function f(e,r){return G(await M(e,r),e,r)}async function G(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await w(t,r,a):b(r)?h(t,r,a.context):A(r)&&await C(t,r,a.context)),await t$1(t,a.context),t}async function M(e$2,o){const c=o.context,l=v(c);let s=e$2.layerType||e$2.type;!s&&o?.defaultLayerType&&(s=o.defaultLayerType);const p=l[s];let S=p?a[p]:a.UnknownLayer;if(b(e$2)){const y=c?.portal;if(e$2.itemId){const i=new S$1({id:e$2.itemId,portal:y});await i.load();const L=(await w$1(i,new e$1)).className||"UnknownLayer";S=a[L];}}else "ArcGISFeatureLayer"===s?e(e$2)||r(e$2)?S=a.MapNotesLayer:n(e$2)?S=a.RouteLayer:A(e$2)&&(S=a.GroupLayer):e$2.wmtsInfo?.url&&e$2.wmtsInfo.layerIdentifier?S=a.WMTSLayer:"WFS"===s&&"2.0.0"!==e$2.wfsInfo?.version&&(S=a.UnsupportedLayer);return S()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||b(e))return !1;return (e.featureCollection?.layers?.length??0)>1}function b(e){return "Feature Collection"===e.type}function v(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=p;break;default:r=l;}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=m;}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=d;break;default:r=u;}}return r}async function w(r,a,t){const y=new V,i=c(y,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,"group"===r.type)return r.layers.addMany(y),r}catch(L){r.destroy();for(const e of y)e.destroy();throw L}}catch(L){throw L}}function h(e,r,a){r.itemId&&(e.portalItem=new S$1({id:r.itemId,portal:a?.portal}),e.when((()=>{const t=t=>{const y=t.layerId;F(t,e,r,y,a);const i=r.featureCollection?.layers?.[y];i&&t.read(i,a);};e.layers?.forEach(t),e.tables?.forEach(t);})));}async function C(e,r,t){const y=a.FeatureLayer,i=await y(),L=r.featureCollection,n=L?.showLegend,o=L?.layers?.map(((a,y)=>{const L=new i;L.read(a,t);const o={...t,ignoreDefaults:!0};return F(L,e,r,y,o),null!=n&&L.read({showLegend:n},o),L}));e.layers.addMany(o??[]);}function F(e,r,a,t,y){e.read({id:`${r.id}-sublayer-${t}`,visibility:a.visibleLayers?.includes(t)??!0},y);}

export { w as populateGroupLayer, c as populateOperationalLayers };
