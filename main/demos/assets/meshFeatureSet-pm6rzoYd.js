import { b5 as d$1, bk as f$1, a4 as c, aH as M, F as x$1, c3 as s, c4 as r, H as s$1 } from './main-BtYHawlJ.js';
import { $ } from './Mesh-wNoBzdTt.js';
import { d as d$2 } from './georeference-L9nP8eV-.js';
import { o, i } from './External-CoIUVVsb.js';
import './preload-helper-dJJaZANz.js';
import './imageUtils-CGA9Uoxd.js';
import './MeshLocalVertexSpace-DsaZXuOQ.js';
import './meshVertexSpaceUtils-BjcQJyuL.js';
import './vec3-CBSdWO0v.js';
import './earcut-B_OmKtHR.js';
import './DoubleArray-BNx9ryfg.js';
import './Indices-BhERPO95.js';
import './deduplicate-6tpnrZNt.js';
import './plane-DZj1ZTUT.js';
import './mat3f64-DiVtVT5k.js';
import './mat4f64-D1udxz0O.js';
import './quatf64-BVXz_O4E.js';
import './triangle-D5qi3m5y.js';
import './Util-DwjPEBzN.js';
import './ObjectStack-CnJUd6hy.js';
import './lineSegment-P_-fQEfg.js';
import './basicInterfaces-WNnrzIVI.js';
import './VertexAttribute-NSFkUlX8.js';
import './quat-DS5RBkPB.js';
import './computeTranslationToOriginAndRotation-B5EQgpc6.js';
import './BufferView-D79rukpz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=()=>s$1.getLogger("esri.rest.support.meshFeatureSet");function p(t,r,o){const n=o.features;o.features=[],delete o.geometryType;const s=d$1.fromJSON(o);if(s.geometryType="mesh",!o.assetMaps)return s;const i=S(r,o.assetMaps),u=t.sourceSpatialReference??f$1.WGS84,f=o.globalIdFieldName,{outFields:c$1}=t,m=null!=c$1&&c$1.length>0?g(c$1.includes("*")?null:new Set(c$1)):()=>({});for(const a of n){const t=h(a,f,u,r,i);null!=t&&s.features.push(new c({geometry:t,attributes:m(a)}));}return s}function g(e){return ({attributes:t})=>{if(!t)return {};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function h(e,t,r,s,a){const i=e.attributes[t],u=a.get(i);if(null==u)return m().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return m().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const f=y(e,r,s),c=M.fromJSON(e.geometry);c.spatialReference=r;const l=E(e.attributes,s),p=r.isGeographic?"local":"georeferenced",g=w(u);return g?$.createWithExternalSource(f,g,{extent:c,transform:l,vertexSpace:p}):$.createIncomplete(f,{extent:c,transform:l,vertexSpace:p})}function y({attributes:e},t,{transformFieldRoles:r}){const o=e[r.originX],n=e[r.originY],a=e[r.originZ];return new x$1({x:o,y:n,z:a,spatialReference:t})}function E(e,{transformFieldRoles:t}){return new d$2({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var d;function S(e,t){const o=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s$1=n.assetName,a=n.assetType,i=n.assetHash,u=n.assetURL,f=n.conversionStatus,l=n.seqNo,p=s(a,e.supportedFormats);if(!p){m().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const g=r(o,t,(()=>({files:new Map})));r(g.files,s$1,(()=>({name:s$1,type:a,mimeType:p,status:D(f),parts:[]}))).parts[l]={hash:i,url:u};}return o}function w(e){const t=Array.from(e.files.values()),r=new Array;for(const o$1 of t){if(o$1.status!==d.COMPLETED)return null;const e=new Array;for(const t of o$1.parts){if(!t)return null;e.push(new o(t.url,t.hash));}r.push(new i(o$1.name,o$1.mimeType,e));}return r}function D(e){switch(e){case"COMPLETED":case"SUBMITTED":return d.COMPLETED;case"INPROGRESS":return d.PENDING;default:return d.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED";}(d||(d={}));

export { S as assetMapFromAssetMapsJSON, h as extractMesh, p as meshFeatureSetFromJSON };