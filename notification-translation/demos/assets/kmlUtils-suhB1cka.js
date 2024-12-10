import { W as a, C as t, bn as Et, D as s$1, U as U$1, bo as i$1, bp as C, bq as m, br as o, bs as B, bk as f$1, b5 as d$1, b7 as t$1, b6 as P$1 } from './main-DAn2heHU.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a$1=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection?.layers||[]).forEach((e=>{const o=a(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a$1=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?h(n,a$1,e.featureSet.features):"esriGeometryPolyline"===t?h(i,a$1,e.featureSet.features):"esriGeometryPolygon"===t&&h(f,a$1,e.featureSet.features);})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a$1.set(e.id,e);})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s);}));})),t.forEach((e=>{if(e.featureInfos){e.points=a(r.get("esriGeometryPoint")),e.polylines=a(r.get("esriGeometryPolyline")),e.polygons=a(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]]?.featureSet.features.push(t);break}case"GroundOverlay":{const t=a$1.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e]);}}));const u=j(t);return {folders:o,sublayers:t,extent:u}}function g(t$1,s,i,f){const a=t?.findCredential(t$1);t$1=Et(t$1,{token:a?.token});const l=s$1.kmlServiceUrl;return U$1(l,{query:{url:t$1,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=new Set(o.folders.map((e=>e.id)));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.has(i.id)&&(i.visible=r.includes(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(i);}else s.unshift(i);})),s}function h(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t);}));}function G(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=G(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=d$1.fromJSON(e.featureSet).features,r=e.layerDefinition,s=t$1(r.drawingInfo.renderer),n=P$1.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t);}return i}function j(e){const o$1=i$1(C),t=i$1(C);for(const r of e){if(r.polygons?.featureSet?.features)for(const e of r.polygons.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.polylines?.featureSet?.features)for(const e of r.polylines.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.points?.featureSet?.features)for(const e of r.points.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.mapImages)for(const e of r.mapImages)m(o$1,e.extent),o(t,o$1);}return B(t,C)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:f$1.WGS84}}

export { S, b, d, g, j };
