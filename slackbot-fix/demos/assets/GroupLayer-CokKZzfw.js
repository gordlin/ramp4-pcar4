const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./groupLayerUtils-B-JHl5BM.js","./utils-B_UzR29P.js","./main-DpOWVR1F.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./originUtils-CRfESh92.js","./multiOriginJSONSupportUtils-Dlz6FGm5.js","./jsonContext-ah_w6ZGl.js","./saveAPIKeyUtils-CWyRL2Uw.js","./saveUtils-Cqj0ZQXG.js","./resourceUtils-B68flJKm.js","./resourceUtils-BIxLZ5Du.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { dZ as n, e1 as t, d$ as u$1, e0 as j, gk as n$1, gl as d, e2 as m, bv as l, gm as t$1, b0 as k, b2 as d$1, gn as e$1, go as f, S, B as a$1, gp as t$2, gq as A, gr as t$3, aW as e$2, aX as y, ex as r$1, e3 as o, gs as A$1, aZ as v, fm as C$1, aY as c, ec as b, H as s$1 } from './main-DpOWVR1F.js';
import { a } from './lazyLayerLoader-DDO_l1gP.js';
import { r } from './saveUtils-Cqj0ZQXG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e=Symbol("WebScene");

let V=class extends(n(t(u$1(j(n$1(d(m(b)))))))){constructor(e){super(e),this.allLayers=new l({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=t$1(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=k((async(e,i,t)=>{const{save:r,saveAs:s}=await __vitePreload(() => import('./groupLayerUtils-B-JHl5BM.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]):void 0,import.meta.url);switch(e){case A.SAVE:return r(this,i);case A.SAVE_AS:return s(this,t,i)}}));}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d$1((()=>{let e$1=this.parent;for(;e$1&&"parent"in e$1&&e$1.parent;)e$1=e$1.parent;return e$1&&e in e$1}),(e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(v((()=>this.tables),"before-add",(e=>{e.preventDefault(),s$1.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");})),i));}),A$1),d$1((()=>this.visible),this._onVisibilityChange.bind(this),C$1)]);}destroy(){this.allLayers.destroy(),this.allTables.destroy();}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===e$1.USER}_writeLayers(e,i,t,r){const s=[];if(!e)return s;e.forEach((e=>{const i=f(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);i?.layerType&&s.push(i);})),i.layers=s;}set portalItem(e){this._set("portalItem",e);}readPortalItem(e,i,t){const{itemId:r,layerType:s}=i;if("GroupLayer"===s&&r)return new S({id:r,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id);}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible);}async beforeSave(){return r(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:a},e).catch((e=>{if(a$1(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return t$2(this,(e=>{e(this.layers,this.tables);}))}async save(e){return this._debouncedSaveOperations(A.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(A.SAVE_AS,i,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(d$1((()=>e.visible),(i=>this._onChildVisibilityChange(e,i)),C$1),e.uid);}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1);}));}_enforceVisibility(e,i){if(!t$3(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i;}));}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e;}));}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};e$2([y({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),e$2([y({readOnly:!0})],V.prototype,"allTables",void 0),e$2([y({json:{read:!0,write:!0}})],V.prototype,"blendMode",void 0),e$2([y()],V.prototype,"fullExtent",void 0),e$2([y({readOnly:!0})],V.prototype,"sourceIsPortalItem",null),e$2([y({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),e$2([r$1("layers")],V.prototype,"_writeLayers",null),e$2([y({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),e$2([y({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return {enabled:"Group Layer"===e?.type&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),e$2([o("web-map","portalItem",["itemId"])],V.prototype,"readPortalItem",null),e$2([r$1("web-map","portalItem",{itemId:{type:String}})],V.prototype,"writePortalItem",null),e$2([y()],V.prototype,"spatialReference",void 0),e$2([y({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),e$2([y({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{"inherited"!==e&&(i[t]=e);}}}}})],V.prototype,"visibilityMode",null),V=e$2([c("esri.layers.GroupLayer")],V);const C=V;

export { C as default };
