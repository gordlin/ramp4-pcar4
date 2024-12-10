import { t as t$1 } from './date-BI_YP58O.js';
import { s, a8 as C, d7 as d$1, d8 as pe, d9 as t, da as e } from './main-CI1sR_n3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const c={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return c[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t);}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e;}}function*p(e$1,t$1={}){const{geometryType:n,objectIdField:i}=t$1;for(const s of e$1){const{geometry:e$1,properties:c,id:l}=s;if(e$1&&u(e$1.type)!==n)continue;const f=c||{};let p;i&&(p=f[i],null==l||p||(f[i]=p=l));const a=new t(e$1?h(new e,e$1,t$1):null,f,null,p??void 0);yield a;}}function a(e){for(const t of e)if(t.length>2)return !0;return !1}function y(e){return !g(e)}function d(e){return g(e)}function g(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1];}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function h(e,t,n){switch(t.type){case"LineString":return w(e,t,n);case"MultiLineString":return P(e,t,n);case"MultiPoint":return j(e,t,n);case"MultiPolygon":return b(e,t,n);case"Point":return S(e,t,n);case"Polygon":return F(e,t,n)}}function w(e,t,n){return M(e,t.coordinates,n),e}function P(e,t,n){for(const o of t.coordinates)M(e,o,n);return e}function j(e,t,n){return M(e,t.coordinates,n),e}function b(e,t,n){for(const o of t.coordinates){G(e,o[0],n);for(let t=1;t<o.length;t++)k(e,o[t],n);}return e}function S(e,t,n){return O(e,t.coordinates,n),e}function F(e,t,n){const o=t.coordinates;G(e,o[0],n);for(let r=1;r<o.length;r++)k(e,o[r],n);return e}function G(e,t,n){const o=m(t);y(o)?T(e,o,n):M(e,o,n);}function k(e,t,n){const o=m(t);d(o)?T(e,o,n):M(e,o,n);}function M(e,t,n){for(const o of t)O(e,o,n);e.lengths.push(t.length);}function T(e,t,n){for(let o=t.length-1;o>=0;o--)O(e,t[o],n);e.lengths.push(t.length);}function O(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0);}function L(t){switch(typeof t){case"string":return t$1(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return "esriFieldTypeDouble";default:return "unknown"}}function E(e,o=4326){if(!e)throw new s("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:r}=e;if(!r)return;const i="string"==typeof r?r:"name"===r.type?r.properties.name:"EPSG"===r.type?r.properties.code:null,s$1=C({wkid:o})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${o})$`,"i");if(!i||!s$1.test(i))throw new s("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:r})}function I(e,t={}){const n=[],o=new Set,r=new Set;let c,p=!1,y=null,d=!1,{geometryType:g=null}=t,m=!1;for(const s of l(e)){const{geometry:e,properties:t,id:l}=s;if(!e||(g||(g=u(e.type)),u(e.type)===g)){if(!p){p=a(f(e));}if(d||(d=null!=l,d&&(c=typeof l,t&&(y=Object.keys(t).filter((e=>t[e]===l))))),t&&y&&d&&null!=l&&(y.length>1?y=y.filter((e=>t[e]===l)):1===y.length&&(y=t[y[0]]===l?y:[])),!m&&t){let e=!0;for(const s in t){if(o.has(s))continue;const c=t[s];if(null==c){e=!1,r.add(s);continue}const u=L(c);if("unknown"===u){r.add(s);continue}r.delete(s),o.add(s);const l=d$1(s);l&&n.push({name:l,alias:s,type:u});}m=e;}}}const h=d$1(1===y?.length&&y[0]||null)??void 0;if(h)for(const i of n)if(i.name===h&&pe(i)){i.type="esriFieldTypeOID";break}return {fields:n,geometryType:g,hasZ:p,objectIdFieldName:h,objectIdFieldType:c,unknownFields:Array.from(r)}}function N(e,t){return Array.from(p(l(e),t))}

export { E, I, N, u };
