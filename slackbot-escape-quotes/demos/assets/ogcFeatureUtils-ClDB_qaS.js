import { s, dk as _, bn as Et, U as U$1, c_ as i, cZ as Z$1, aP as i$1, bk as f$1, dl as lt, d3 as rt, d2 as ot, dm as g, cY as g$1, I as I$2, H as s$1, dn as e } from './main-CiDEuP9F.js';
import { E, I as I$1, N as N$1 } from './geojson-CXMoHtbI.js';
import { o } from './clientSideDefaults-yyrNuJut.js';
import { p } from './sourceUtils-ChXPRzF2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const F=()=>s$1.getLogger("esri.layers.ogc.ogcFeatureUtils"),I="startindex",T=new Set([I,"offset"]),k="http://www.opengis.net/def/crs/",x=`${k}OGC/1.3/CRS84`;var S;async function v(n,o$1,s$1={},a=5){const{links:l}=n,c=L(l,"items",S.geojson)||L(l,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==c)throw new s("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:u,customParameters:d,signal:p}=s$1,y=_(c.href,n.landingPage.url),b={limit:a,...d,token:u},T=Et(y,b),k={accept:S.geojson},{data:x}=await U$1(T,{signal:p,headers:k}),v=A(T,a,x.links)??I;E(x);const N=I$1(x,{geometryType:o$1.geometryType}),O=o$1.fields||N.fields||[],P=null!=o$1.hasZ?o$1.hasZ:N.hasZ,q=N.geometryType,C=o$1.objectIdField||N.objectIdFieldName||"OBJECTID";let R=o$1.timeInfo;const $=O.find((({name:e})=>e===C));if($)$.editable=!1,$.nullable=!1;else {if(!N.objectIdFieldType)throw new s("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");O.unshift({name:C,alias:C,type:"number"===N.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1});}if(C!==N.objectIdFieldName){const e=O.find((({name:e})=>e===N.objectIdFieldName));e&&(e.type="esriFieldTypeInteger");}O===N.fields&&N.unknownFields.length>0&&F().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:N.unknownFields}});for(const e of O){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new s("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!i.jsonValues.includes(e.type))throw new s("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(R){const e=new Z$1(O);if(R.startTimeField){const t=e.get(R.startTimeField);t?(R.startTimeField=t.name,t.type="esriFieldTypeDate"):R.startTimeField=null;}if(R.endTimeField){const t=e.get(R.endTimeField);t?(R.endTimeField=t.name,t.type="esriFieldTypeDate"):R.endTimeField=null;}if(R.trackIdField){const t=e.get(R.trackIdField);t?R.trackIdField=t.name:(R.trackIdField=null,F().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:R}}));}R.timeReference||={timeZoneIANA:i$1},R.startTimeField||R.endTimeField||(F().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:R}}),R=null);}return {drawingInfo:q?o(q):null,extent:K(n),geometryType:q,fields:O,hasZ:!!P,objectIdField:C,paginationParameter:v,timeInfo:R}}async function N(n,r={}){const{links:o,url:s$1}=n,a=L(o,"data",S.json)||L(o,"http://www.opengis.net/def/rel/ogc/1.0/data",S.json);if(null==a)throw new s("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:l,customParameters:c,signal:u}=r,d=_(a.href,s$1),{data:f}=await U$1(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});for(const e of f.collections)e.landingPage=n;return f}async function O(n,r={}){const{links:o,url:s$1}=n,a=L(o,"conformance",S.json)||L(o,"http://www.opengis.net/def/rel/ogc/1.0/conformance",S.json);if(null==a)throw new s("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:l,customParameters:c,signal:u}=r,d=_(a.href,s$1),{data:f}=await U$1(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});return f}async function P(t,n={}){const{apiKey:i,customParameters:r,signal:o}=n,{data:s}=await U$1(t,{signal:o,headers:{accept:S.json},query:{...r,token:i}});return s.url=t,s}async function q(t,n={}){const{links:r,url:o}=t,s=L(r,"service-desc",S.openapi);if(null==s)return F().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:a,customParameters:l,signal:c}=n,u=_(s.href,o),{data:d}=await U$1(u,{signal:c,headers:{accept:S.openapi},query:{...l,token:a}});return d}function C(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:r}=n;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return f$1.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return f$1.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function R(e,t,n){const i=await $(e,t,n);return lt(i)}async function $(n,r,o){const{collection:{links:l,landingPage:{url:f}},layerDefinition:m,maxRecordCount:g$2,queryParameters:{apiKey:j,customParameters:h},spatialReference:F,supportedCrs:I}=n,T=L(l,"items",S.geojson)||L(l,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==T)throw new s("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:v,timeExtent:N,where:O}=r;if(r.objectIds)throw new s("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const P=f$1.fromJSON(F),q=r.outSpatialReference??P,C=q.isWGS84?null:W(q,I),R=U(k,I),$=M(N),G=Z(O),D=x??(null==v?g$2:10),K=0===v?void 0:v,{fields:A,geometryType:J,hasZ:z,objectIdField:E,paginationParameter:_$1}=m,B=_(T.href,f),{data:Q}=await U$1(B,{...o,query:{...h,...R,crs:C,datetime:$,query:G,limit:D,[_$1]:K,token:j},headers:{accept:S.geojson}}),V=N$1(Q,{geometryType:J,hasZ:z,objectIdField:E}),H=V.length===D&&!!L(Q.links??[],"next",S.geojson),X=new Z$1(A);for(const e of V){const t={};p(X,t,e.attributes),t[E]=e.attributes[E],e.attributes=t;}if(!C&&q.isWebMercator)for(const e of V)if(null!=e.geometry&&null!=J){const t=rt(e.geometry,J,z,!1);t.spatialReference=f$1.WGS84,e.geometry=ot(g(t,q));}for(const e of V)e.objectId=e.attributes[E];const Y=C||!C&&q.isWebMercator?q.toJSON():g$1,ee=new e;return ee.exceededTransferLimit=H,ee.features=V,ee.fields=A,ee.geometryType=J,ee.hasZ=z,ee.objectIdFieldName=E,ee.spatialReference=Y,ee}function G(e){return null!=e&&"extent"===e.type}function W(e,t){const{isWebMercator:n,wkid:i}=e;if(!i)return null;const r=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return r?`${k}${r}`:null}function D(e){if(null==e)return "";const{xmin:t,ymin:n,xmax:i,ymax:r}=e;return `${t},${n},${i},${r}`}function M(e){if(null==e)return null;const{start:t,end:n}=e;return `${null!=t?t.toISOString():".."}/${null!=n?n.toISOString():".."}`}function Z(e){return null!=e&&e&&"1=1"!==e?e:null}function U(e,t){if(!G(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return {bbox:D(e)};const i=W(n,t);return null!=i?{bbox:D(e),"bbox-crs":i}:n.isWebMercator?{bbox:D(g(e,f$1.WGS84))}:null}function K(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],i=4===n.length,[r,o]=n,s=i?void 0:n[2];return {xmin:r,ymin:o,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:s,zmax:i?void 0:n[5],spatialReference:f$1.WGS84.toJSON()}}function L(e,t,n){return e.find((({rel:e,type:i})=>e===t&&i===n))??e.find((({rel:e,type:n})=>e===t&&!n))}function A(e,t,n){if(!n)return;const i=L(n,"next",S.geojson),r=I$2(i?.href)?.query;if(!r)return;const s=I$2(e).query,a=Object.keys(s??{}),l=Object.entries(r).filter((([e])=>!a.includes(e))).find((([e,n])=>T.has(e.toLowerCase())&&Number.parseInt(n,10)===t)),c=l?.[0];return c}!function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0";}(S||(S={}));

export { $, C, N, O, P, R, k, q, v, x };
