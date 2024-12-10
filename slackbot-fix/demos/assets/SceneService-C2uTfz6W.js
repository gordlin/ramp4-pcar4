import { U as U$1, s, aW as e, aX as y, e4 as I, bk as f$1, e3 as o, aH as M, i0 as v, e6 as d, ex as r$1, aY as c, b0 as k, gP as h, p as p$1, i1 as m, i2 as g, H as s$1, i3 as S, I as I$1, S as S$1, Q } from './main-DpOWVR1F.js';
import { i as i$1 } from './originUtils-CRfESh92.js';
import { o as o$1 } from './jsonContext-ah_w6ZGl.js';
import { p, n as n$1 } from './resourceUtils-B68flJKm.js';
import { i } from './saveAPIKeyUtils-CWyRL2Uw.js';
import { t } from './saveUtils-Cqj0ZQXG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function r(r,n,t,s$1,a,i,l){let d=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return {type:"page",rootPage:(await U$1(n,{query:{f:"json",...s$1,token:a},responseType:"json",signal:l})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(g){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),d=g;}}if(!n)return null;const p=n?.split("/").pop(),c=`${r}/nodes/`,u=c+p;try{return {type:"node",rootNode:(await U$1(u,{query:{f:"json",...s$1,token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(g){throw new s("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:g,url:u})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let n=null;function u(){return n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const L=L=>{let V=class extends L{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=k((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}));}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return f$1.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f$1(o):null}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return M.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<T))?null:new M({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return "item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return h(this.url,t.name);let o=t.name;if(!o&&this.url){const e=p$1(this.url);null!=e&&(o=e.title);}return "item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),m(o)}set url(e){const t=g({layer:this,url:e,nonStandardUrlAllowed:!1,logger:s$1.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId);}writeUrl(e,t,r,o){S(this,e,"layers",t,o);}get parsedUrl(){const e=this._get("url"),t=I$1(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=r(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,s$1.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo);}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new s("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s$1=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s$1-a,this.fullExtent.zmax=s$1+a;}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o);}}async _fetchService(e){if(null==this.url)throw new s("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t);}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await U$1(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await U$1(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i);}async _fetchVoxelServiceLayer(e){const r=(await U$1(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r);}_getServiceContext(){return {origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave();}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===U.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))));}async _saveAs(e,t){const o={...O,...t};let i$2=S$1.from(e);if(!i$2)throw new s("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");i(i$2),i$2.id&&(i$2=i$2.clone(),i$2.id=null);const s$1=i$2.portal||Q.getDefault();await this._ensureLoadBeforeSave(),i$2.type=K,i$2.portal=s$1;const a=o$1(i$2,"portal-item",!0),n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),i$2.url=this.url,i$2.title||(i$2.title=this.title),this._updateTypeKeywords(i$2,o,U.newItem),await s$1.signIn(),await(s$1.user?.addItem({item:i$2,folder:o?.folder,data:n})),await p(this.resourceReferences,a),this.portalItem=i$2,i$1(a),a.portalItem=i$2,i$2}async _save(e){const t={...O,...e};if(!this.portalItem)throw new s("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(i(this.portalItem),this.portalItem.type!==K)throw new s("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${K}"`);await this._ensureLoadBeforeSave();const o=o$1(this.portalItem,"portal-item",!0),i$2={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i$2,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,U.existingItem),await n$1(this.portalItem,i$2,this.resourceReferences,o),i$1(o),this.portalItem}async _validateAgainstJSONSchema(e,t$1,i){const s$2=i?.validationOptions;t(t$1,{errorName:"sceneservice:save"},{ignoreUnsupported:s$2?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=s$2?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,i.portalItemLayerType);if(!t.length)return;const a=`Layer item did not validate:\n${t.join("\n")}`;if(s$1.getLogger(this).error(`_validateAgainstJSONSchema(): ${a}`),"throw"===s$2.failPolicy){const e=t.map((e=>new s("sceneservice:schema-validation",e)));throw new s("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return e([y(I)],V.prototype,"id",void 0),e([y({type:f$1})],V.prototype,"spatialReference",void 0),e([o("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],V.prototype,"readSpatialReference",null),e([y({type:M})],V.prototype,"fullExtent",void 0),e([o("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],V.prototype,"readFullExtent",null),e([y({readOnly:!0,type:v})],V.prototype,"heightModelInfo",void 0),e([y({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],V.prototype,"minScale",void 0),e([y({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],V.prototype,"maxScale",void 0),e([y({readOnly:!0})],V.prototype,"version",void 0),e([o("version",["store.version"])],V.prototype,"readVersion",null),e([y({type:String,json:{read:{source:"copyrightText"}}})],V.prototype,"copyright",void 0),e([y({type:String,json:{read:!1}})],V.prototype,"sublayerTitleMode",void 0),e([y({type:String})],V.prototype,"title",void 0),e([o("portal-item","title")],V.prototype,"readTitlePortalItem",null),e([o("service","title",["name"])],V.prototype,"readTitleService",null),e([y({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],V.prototype,"layerId",void 0),e([y(d)],V.prototype,"url",null),e([r$1("url")],V.prototype,"writeUrl",null),e([y()],V.prototype,"parsedUrl",null),e([y({readOnly:!0})],V.prototype,"store",void 0),e([y({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],V.prototype,"rootNode",void 0),V=e([c("esri.layers.mixins.SceneService")],V),V},T=-1e38;var U;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem";}(U||(U={}));const K="Scene Service",O={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS";}(P||(P={}));

export { L, P, r };