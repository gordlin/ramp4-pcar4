import { s, v as t, y as s$1, Q, p as p$1 } from './main-BtYHawlJ.js';
import { t as t$3 } from './fetchService-JK1En_1a.js';
import { l, a, n, u, i, c, s as s$2, t as t$2, r, e as e$1 } from './portalLayers-Dvl9duUm.js';
import { populateGroupLayer as w } from './layersCreator-CmD0zdbE.js';
import { t as t$1, a as a$1 } from './lazyLayerLoader-BlI136DX.js';
import { e } from './jsonContext-C7kbxINa.js';
import './preload-helper-dJJaZANz.js';
import './associatedFeatureServiceUtils-Dl8rWXzp.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function I(e,t){const r=e.instance.portalItem;if(r?.id)return await r.load(t),L(e),e.validateItem&&e.validateItem(r),v(e,t)}function L(t){const r=t.instance.portalItem;if(!r?.type||!t.supportedTypes.includes(r.type))throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:t.supportedTypes.join(", ")})}async function v(e$2,t$1){const r=e$2.instance,o=r.portalItem;if(!o)return;const{url:n,title:s}=o,i=e(o,"portal-item");if("group"===r.type)return S(r,i,e$2);n&&"media"!==r.type&&r.read({url:n},i);const p=new e$1,u=await C(e$2,p,t$1);return u&&r.read(u,i),r.resourceReferences={portalItem:o,paths:i.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:s},i),t(r,i)}async function S(t,r,a){const o=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:n,type:s$2}=o;if("Group Layer"===s$2){if(!s$1(o,"Map"))throw new s("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return T(t)}return t.read({title:n},r),j(t,a)}async function T(e$1){const t=e$1.portalItem,r=await t.fetchData("json");if(!r)return;const a=e(t,"web-map");e$1.read(r,a),await w(e$1,r,{context:a}),e$1.resourceReferences={portalItem:t,paths:a.readResourcePaths??[]};}async function j(t,r){let o;const{portalItem:n$1}=t;if(!n$1)return;const s$1=n$1.type,l$1=r.layerModuleTypeMap;switch(s$1){case"Feature Service":case"Feature Collection":o=l$1.FeatureLayer;break;case"Stream Service":o=l$1.StreamLayer;break;case"Scene Service":o=l$1.SceneLayer;break;default:throw new s("portal:unsupported-item-type-as-group",`The item type '${s$1}' is not supported as a 'IGroupLayer'`)}const d=new e$1;let[h,w]=await Promise.all([o(),C(r,d)]),g=()=>h;if("Feature Service"===s$1){const e=l(w)?.customParameters;w=n$1.url?await a(w,n$1.url,d):{};const r=n(w),a$1=u(w),o=i(w),s=[];if(r.length||a$1?.length){r.length&&s.push("SubtypeGroupLayer"),a$1?.length&&s.push("OrientedImageryLayer"),o?.length&&s.push("CatalogLayer");const e=[];for(const r of s){const t=l$1[r];e.push(t());}const t=await Promise.all(e),n=new Map;s.forEach(((e,r)=>{n.set(e,t[r]);})),g=e=>e.layerType?n.get(e.layerType)??h:h;}const f=await G(n$1.url,{customParameters:e,loadContext:d});return await M(t,g,w,f)}return "Scene Service"===s$1&&n$1.url&&(w=await c(n$1,w,d)),s$2(w)>0?await M(t,g,w):await P(t,g)}async function P(e,t){const{portalItem:r}=e;if(!r?.url)return;const a=await t$1(r.url);a&&M(e,t,{layers:a.layers?.map(t$2),tables:a.tables?.map(t$2)});}async function M(e,t,r,a){let o=r.layers||[];const s=r.tables||[];if("Feature Collection"===e.portalItem?.type?(o.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&s.push(e);})),o=o.filter((e=>"Table"!==e?.layerDefinition?.type))):(o.reverse(),s.reverse()),o.forEach((o=>{const n=a?.(o);if(n||!a){const a=x(e,t(o),r,o,n);e.add(a);}})),s.length){const t=await a$1.FeatureLayer();s.forEach((o=>{const n=a?.(o);if(n||!a){const a=x(e,t,r,o,n);e.tables.add(a);}}));}}function x(e,t,r,a,o){const n=e.portalItem,l={portalItem:n.clone(),layerId:a.id};null!=a.url&&(l.url=a.url);const i=new t(l);if("sourceJSON"in i&&(i.sourceJSON=o),"subtype-group"!==i.type&&"catalog"!==i.type&&(i.sublayerTitleMode="service-name"),"Feature Collection"===n.type){const e={origin:"portal-item",portal:n.portal||Q.getDefault()};i.read(a,e);const t=r.showLegend;null!=t&&i.read({showLegend:t},e);}return i}async function C(e,t,r$1){if(!1===e.supportsData)return;const a=e.instance,o=a.portalItem;if(!o)return;let n$1=null;try{n$1=await o.fetchData("json",r$1);}catch(s){}if(k(a)){let e=null;const r$1=await F(o,n$1,t);if((n$1?.layers||n$1?.tables)&&r$1>0){if(null==a.layerId){const e=n(n$1);a.layerId="subtype-group"===a.type?e?.[0]:r(n$1);}e=D(n$1,a),e&&null!=n$1.showLegend&&(e.showLegend=n$1.showLegend);}return r$1>1&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),e}return n$1}async function F(e,r,a){if(r?.layers&&r?.tables)return s$2(r);const o=p$1(e.url);if(!o)return 1;const n=await a.fetchServiceMetadata(o.url.path,{customParameters:l(r)?.customParameters}).catch((()=>null));return (r?.layers?.length??n?.layers?.length??0)+(r?.tables?.length??n?.tables?.length??0)}function D(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&E(a,t)?a:null}function k(e){return "stream"!==e.type&&"layerId"in e}function E(e,t){return !("feature"===t.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===t.type&&!("layerType"in e))}async function G(e,t){const{layersJSON:a}=await t$3(e,t);if(!a)return null;const o=[...a.layers,...a.tables];return e=>o.find((t=>t.id===e.id))}

export { I as load };
