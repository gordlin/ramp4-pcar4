import { a, d, p as p$1, q as q$1, l as l$1, b as a$2, u, f, L, s, i as i$1 } from './main-hedDFcxy.js';
import { i } from './originUtils-CRfESh92.js';
import { $ as $$1, w, I, v, j as j$1, y, P as P$1, l, d as d$1, c } from './utils-CRMvWB-N.js';
import { t } from './fetchService-B48jxzyl.js';
import { a as a$1 } from './lazyLayerLoader-BrqYE0uQ.js';
import './preload-helper-dJJaZANz.js';
import './multiOriginJSONSupportUtils-Dlz6FGm5.js';
import './jsonContext-VUcl2ffb.js';
import './saveAPIKeyUtils-Bwbx5ZbT.js';
import './saveUtils-_MCrIF-J.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const A="Feature Service",P="feature-layer-utils",E=`${P}-save`,g=`${P}-save-as`,$=`${P}-saveall`,x=`${P}-saveall-as`;function N(e){return {isValid:L(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function O(e){const a=[],r=[];for(const{layer:t,layerJSON:n}of e)t.isTable?r.push(n):a.push(n);return {layers:a,tables:r}}function U(e){return O([e])}async function j(e,a){return /\/\d+\/?$/.test(e.url)?U(a[0]):F(a,e)}async function F(e,a){if(e.reverse(),!a)return O(e);const r=await J(a,e);for(const t of e)C(t.layer,t.layerJSON,r);return D(r,e),r}async function J(e,a){let r=await e.fetchData("json");if(M(r))return r;r||={},R(r);const{layer:{url:t,customParameters:n,apiKey:o}}=a[0];return await _(r,{url:t??"",customParameters:n,apiKey:o},a.map((e=>e.layer.layerId))),r}function M(e){return !!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function R(e){e.layers||=[],e.tables||=[];}function D(e,a){const r=[],t=[];for(const{layer:n}of a){const{isTable:e,layerId:a}=n;e?t.push(a):r.push(a);}K(e.layers,r),K(e.tables,t);}function K(a$1,r){if(a$1.length<2)return;const t=[];for(const{id:e}of a$1)t.push(e);a(t.sort(Y),r.slice().sort(Y))&&a$1.sort(((e,a)=>{const t=r.indexOf(e.id),n=r.indexOf(a.id);return t<n?-1:t>n?1:0}));}function Y(e,a){return e<a?-1:e>a?1:0}async function _(e,a,r){const{url:t$1,customParameters:n,apiKey:o}=a,{serviceJSON:s,layersJSON:i}=await t(t$1,{customParameters:n,apiKey:o}),l=z(e.layers,s.layers,r),c=z(e.tables,s.tables,r);e.layers=l.itemResources,e.tables=c.itemResources;const u=[...l.added,...c.added],y=i?[...i.layers,...i.tables]:[];await G(e,u,t$1,y);}function z(e,r,t){const n=d(e,r,((e,a)=>e.id===a.id));e=e.filter((e=>!n.removed.some((a=>a.id===e.id))));const o=n.added;return o.forEach((({id:a})=>{e.push({id:a});})),{itemResources:e,added:o.filter((({id:e})=>!t.includes(e)))}}async function G(e,a,r,t){const n=await k(a),o=a.map((({id:e,type:a})=>new(n.get(a))({url:r,layerId:e,sourceJSON:t.find((({id:a})=>a===e))})));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((a=>{const{layerId:r,loaded:t,defaultPopupTemplate:n}=a;if(!t||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==a.operationalLayerType&&(o.layerType=a.operationalLayerType),C(a,o,e);}));}async function k(e){const a=[];e.forEach((({type:e})=>{const r=B(e),t=a$1[r];a.push(t());}));const r=await Promise.all(a),t=new Map;return e.forEach((({type:e},a)=>{t.set(e,r[a]);})),t}function B(e){let a;switch(e){case"Feature Layer":case"Table":a="FeatureLayer";break;case"Oriented Imagery Layer":a="OrientedImageryLayer";break;case"Catalog Layer":a="CatalogLayer";}return a}function C(e,a,r){e.isTable?V(r.tables,a):V(r.layers,a);}function V(e,a){const r=e.findIndex((({id:e})=>e===a.id));-1===r?e.push(a):e[r]=a;}function q(e,a){if(!e.length)throw new s(`${a}:missing-parameters`,"'layers' array should contain at least one feature layer")}function H(e,a){const r=e.map((e=>e.portalItem.id));if(new Set(r).size>1)throw new s(`${a}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function Q(e,a){const r=e.map((e=>e.layerId));if(new Set(r).size!==r.length)throw new s(`${a}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function W(e){q(e,$),await Promise.all(e.map((e=>e.load())));for(const a of e)l(a,$,N),d$1({layer:a,itemType:A,errorNamePrefix:$});H(e,$),Q(e,$);}async function X(e,a){const{url:r,layerId:t,title:n,fullExtent:o,isTable:s}=e,i=p$1(r);a.url="FeatureServer"===i?.serverType?r:`${r}/${t}`,a.title||=n,a.extent=null,s||null==o||(a.extent=await l$1(o)),a$2(a,f.METADATA),a$2(a,f.MULTI_LAYER),i$1(a,f.SINGLE_LAYER),s&&i$1(a,f.TABLE);}function Z(e,a){for(const s$1 of e){const r=s$1.parsedUrl.path,n=p$1(r),o=n?.url.path;if(!o)throw new s(`${a}:invalid-parameters`,c(s$1,`has unsupported url pattern: ${r}`),{layer:s$1});const i=n?.serverType;if("FeatureServer"!==i&&"MapServer"!==i)throw new s(`${a}:invalid-parameters`,c(s$1,`has unsupported server type: ${i}`),{layer:s$1});if("MapServer"===i&&e.length>1)throw new s(`${a}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const r=p$1(e[0].parsedUrl.path),n=r?.url.path,o=e.every((e=>{const a=p$1(e.parsedUrl.path);return a?.url.path===n}));if(!o)throw new s(`${a}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function ee(e){q(e,x),await Promise.all(e.map((e=>e.load())));for(const a of e)l(a,x,N);Z(e,x),Q(e,x);}async function ae(e,a){let t=0,n=0;for(const{isTable:r}of a)r?n++:t++;const o=a[0].parsedUrl.path,s=p$1(o);if(e.url="FeatureServer"===s?.serverType?s.url.path:o,e.title||=s.title,e.extent=null,t>0){const t=a.map((e=>e.fullExtent)).filter(q$1).reduce(((e,a)=>e.clone().union(a)));t&&(e.extent=await l$1(t));}a$2(e,f.METADATA),u(e,f.MULTI_LAYER,a.length>1),u(e,f.SINGLE_LAYER,1===a.length),u(e,f.TABLE,n>0&&0===t),v(e);}async function re(e,a){return $$1({layer:e,itemType:A,validateLayer:N,createItemData:(e,a)=>j(a,[e]),errorNamePrefix:E},a)}async function te(e,a){await W(e);const r=e[0].portalItem,t=w(r),o=await Promise.all(e.map((e=>I(e,t,a)))),c=await j(r,e.map(((e,a)=>({layer:e,layerJSON:o[a]}))));return v(r),await r.update({data:c}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),i(t),r.clone()}async function ne(e,a,r){return j$1({layer:e,itemType:A,validateLayer:N,createItemData:(e,a)=>Promise.resolve(U(e)),errorNamePrefix:g,newItem:a,setItemProperties:X},r)}async function oe(e,a,r){await ee(e);const t=y({itemType:A,errorNamePrefix:x,newItem:a}),o=w(t),l=await Promise.all(e.map((e=>I(e,o,r)))),c=await F(e.map(((e,a)=>({layer:e,layerJSON:l[a]}))));await ae(t,e),await P$1(t,c,r);for(const n of e)n.portalItem=t.clone();return i(o),t}

export { re as save, te as saveAll, oe as saveAllAs, ne as saveAs };
