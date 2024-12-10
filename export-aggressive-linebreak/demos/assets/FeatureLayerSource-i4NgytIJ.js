const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./uploadAssets-CKr9qiN5.js","./main-hedDFcxy.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./External-DO4ly1xH.js","./uploadAssetErrors-ENe_uGBp.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { a7 as G$1, a8 as C, a9 as w, eV as J, eW as z, eX as Wt, H as s$1, s, a4 as c, eO as y$1, eY as s$2, aW as e, aX as y$2, eZ as m$1, b0 as k, V as has, e_ as x, e$ as Q, U as U$1, q, f0 as i, f1 as i$1, f2 as c$1, f3 as a, f4 as t, aH as M, f5 as c$2, f6 as w$1, aA as V$1, f7 as A, ew as o$1, B as a$1, a1 as r, bk as f$1, f8 as F, f9 as b$1, fa as s$3, aY as c$3, C as t$1 } from './main-hedDFcxy.js';
import { g as g$1, a as a$2 } from './meshVertexSpaceUtils-6O9quUp3.js';
import { v as v$1 } from './External-DO4ly1xH.js';
import { isFeatureIdentifierArrayWithGlobalId as $$1, isFeatureIdentifierArrayWithObjectId as v } from './editingSupport-JNM3aeWn.js';
import { o } from './clientSideDefaults-DQ1e6iVD.js';
import './MeshLocalVertexSpace-DESy0wqm.js';
import './vec3-C1brgJM9.js';
import './QueryEngineCapabilities-CCudnOfH.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function p(t,e,a){const{geometry:s}=e,n={...e.attributes};if(null!=a&&"mesh"===s?.type){const{transformFieldRoles:e}=a,{origin:d,spatialReference:c,transform:p,vertexSpace:m}=s,f="local"===m.type,g=t.spatialReference,b=g.isGeographic,R=G$1(g,c),y=R||C(g)&&(C(c)||w(c));if(!(f&&b&&y||!f&&!b&&R))return null;const I=J(d,c,g);if(null==I)return null;if(n[e.originX]=I.x,n[e.originY]=I.y,n[e.originZ]=I.z??0,null!=p){const{translation:t,scale:a,rotation:s}=p,o=f?1:z(c)/z(g);n[e.translationX]=t[0]*o,n[e.translationY]=t[2]*o,n[e.translationZ]=-t[1]*o,n[e.scaleX]=a[0],n[e.scaleY]=a[2],n[e.scaleZ]=a[1],n[e.rotationX]=s[0],n[e.rotationY]=s[2],n[e.rotationZ]=-s[1],n[e.rotationDeg]=s[3];}return {attributes:n}}return null==s?{attributes:n}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:n}}async function m(t,e){const a=await Promise.all((e.addAttachments??[]).map((e=>f(t,e)))),r=await Promise.all((e.updateAttachments??[]).map((e=>f(t,e)))),s=e.deleteAttachments??[];return a.length||r.length||s.length?{adds:a,updates:r,deletes:[...s]}:null}async function f(t,e){const{feature:a,attachment:r}=e,{globalId:o,name:n,contentType:l,data:i,uploadId:u}=r,d={globalId:o};if(a&&("attributes"in a?d.parentGlobalId=a.attributes?.[t.globalIdField]:a.globalId&&(d.parentGlobalId=a.globalId)),u)d.uploadId=u;else if(i){const t=await Wt(i);t&&(d.contentType=t.mediaType,d.data=t.data),i instanceof File&&(d.name=i.name);}return n&&(d.name=n),l&&(d.contentType=l),d}function g(t,e,a){if(!e||0===e.length)return [];if(a&&$$1(e))return e.map((t=>t.globalId));if(v(e))return e.map((t=>t.objectId));const r=a?t.globalIdField:t.objectIdField;return r?e.map((t=>t.getAttribute(r))):[]}function b(t){const e=t?.assetMaps;if(e){for(const t of e.addResults)t.success||s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);for(const t of e.updateResults)t.success||s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);}const r=t?.attachments,s={addFeatureResults:t?.addResults?.map(R)??[],updateFeatureResults:t?.updateResults?.map(R)??[],deleteFeatureResults:t?.deleteResults?.map(R)??[],addAttachmentResults:r?.addResults?r.addResults.map(R):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(R):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(R):[]};return t?.editMoment&&(s.editMoment=t.editMoment),s}function R(t){const a=!0===t.success?null:t.error||{code:void 0,description:void 0};return {objectId:t.objectId,globalId:t.globalId,error:a?new s("feature-layer-source:edit-failure",a.description,{code:a.code}):null}}function y(e,a){return new c({attributes:e.attributes,geometry:y$1({...e.geometry,spatialReference:a})})}function I(t,e){return {adds:t?.adds?.map((t=>y(t,e)))||[],updates:t?.updates?.map((t=>({original:y(t[0],e),current:y(t[1],e)})))||[],deletes:t?.deletes?.map((t=>y(t,e)))||[],spatialReference:e}}function h(t){const e=t.details.raw,a=+e.code,r=+e.extendedCode;return 500===a&&(-2147217144===r||-2147467261===r)}

const D=new s$2({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),P=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),$=new s$2({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let V=class extends m$1{constructor(){super(...arguments),this.type="feature-layer",this.refresh=k((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return {dataChanged:!0,updates:{}};try{await this._fetchService(null);}catch{return {dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return {dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map;}load(e){const t=this.layer.sourceJSON,s=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get queryTask(){const{capabilities:e,parsedUrl:t,dynamicDataSource:s,infoFor3D:r,gdbVersion:a,spatialReference:i,fieldsIndex:o}=this.layer,n=has("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==r,u=e?.operations?.supportsQueryAttachments??!1;return new x({url:t.path,pbfSupported:n,fieldsIndex:o,infoFor3D:r,dynamicDataSource:s,gdbVersion:a,sourceSpatialReference:i,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:r}=this;await Q(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/addAttachment",o=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,o.query);try{const e=await U$1(i,{body:n});return R(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async updateAttachment(e,t,r){await this.load();const{layer:a}=this;await Q(a,"editing");const i=e.attributes[a.objectIdField],o=a.parsedUrl.path+"/"+i+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(r,n.query);try{const e=await U$1(o,{body:u});return R(e.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(i,l)}}async applyEdits(e,r){await this.load();const{layer:o}=this;await Q(o,"editing");const n=o.infoFor3D,u=null!=n,l=u||(r?.globalIdUsed??!1),c=u?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,d=e.addFeatures?.map((e=>p(this.layer,e,n)))??[],p$1=(await Promise.all(d)).filter(q),y=e.updateFeatures?.map((e=>p(this.layer,e,n)))??[],h$1=(await Promise.all(y)).filter(q),m$1=g(this.layer,e.deleteFeatures,l);i(p$1,h$1,o.spatialReference);const f=await m(this.layer,e),g$1=o.capabilities.editing.supportsAsyncApplyEdits&&u,w=r?.gdbVersion||o.gdbVersion,S={gdbVersion:w,rollbackOnFailure:r?.rollbackOnFailureEnabled,useGlobalIds:l,returnEditMoment:r?.returnEditMoment,usePreviousEditMoment:r?.usePreviousEditMoment,async:g$1};await i$1(this.layer.url,w,!0);const q$1=c$1(this.layer.url,w||null);if(await a(o.url,w,o.historicMoment))throw new s("feature-layer-source:historic-version","Editing a historic version is not allowed");r?.returnServiceEditsOption?(S.edits=JSON.stringify([{id:o.layerId,adds:p$1,updates:h$1,deletes:m$1,attachments:f,assetMaps:c}]),S.returnServiceEditsOption=D.toJSON(r?.returnServiceEditsOption),S.returnServiceEditsInSourceSR=r?.returnServiceEditsInSourceSR):(S.adds=p$1.length?JSON.stringify(p$1):null,S.updates=h$1.length?JSON.stringify(h$1):null,S.deletes=m$1.length?l?JSON.stringify(m$1):m$1.join(","):null,S.attachments=f&&JSON.stringify(f),S.assetMaps=null!=c?JSON.stringify(c):void 0);const E=this._getLayerRequestOptions({method:"post",query:S});q$1&&(E.authMode="immediate",E.query.returnEditMoment=!0,E.query.sessionId=t);const F=r?.returnServiceEditsOption?o.url:o.parsedUrl.path;let _;try{_=g$1?await this._asyncApplyEdits(F+"/applyEdits",E):await U$1(F+"/applyEdits",E);}catch(x){if(!h(x))throw x;E.authMode="immediate",_=g$1?await this._asyncApplyEdits(F+"/applyEdits",E):await U$1(F+"/applyEdits",E);}if(!o.capabilities.operations?.supportsEditing&&o.effectiveCapabilities?.operations?.supportsEditing){const e=t$1?.findCredential(o.url);await(e?.refreshToken());}return this._createEditsResult(_)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await Q(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return (await U$1(i,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(R)}catch(o){throw this._createAttachmentErrorResult(a,o)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:i}=this.layer,{data:o}=await U$1(`${i}/${a}`,t),{id:n,extent:u,fullExtent:l,timeExtent:c}=o,d=u||l;return {id:n,fullExtent:d&&M.fromJSON(d),timeExtent:c&&c$2.fromJSON({start:c[0],end:c[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){await this.load();const s=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&s.features.length&&s.features.forEach((t=>{const s=t.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const t=e.toLowerCase();t&&t in s&&e!==t&&(s[e]=s[t],delete s[t]);}}));})),s}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!w$1(this.layer.url))return "unavailable";const e=V$1(this.layer.url,"status"),t=await U$1(e,{query:{f:"json"}});return $.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:s}=await __vitePreload(() => import('./uploadAssets-CKr9qiN5.js'),true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url);return s(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const r=(await U$1(e,t)).data.statusUrl;for(;;){const e=(await U$1(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return U$1(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new s("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new s("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await A(G);}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};has("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await U$1(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a;}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!P.has(r))throw new s("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=o(e.geometryType).renderer;o$1("drawingInfo.renderer",t,e);}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await U$1(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference});}catch(r){a$1(r);}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;const s=await this._filterRedundantAssetMaps(t);if(!t?.length)return null;const r=new Array,a=new Map;for(const i of s){const{geometry:e}=i,{vertexSpace:t}=e;if(g$1(t))r.push(e);else {const t=a$2(e);a.set(t,e),i.geometry=t,r.push(t);}}await this.uploadAssets(r);for(const[i,o]of a)o.addExternalSources(i.metadata.externalSources.items);return {adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,s=this.layer.globalIdField,r$1=this.layer.parsedUrl;for(const a of e){const e=a.geometry,{metadata:i}=e,o=i.getExternalSourcesOnService(r$1),n=a.getAttribute(s);if(0===o.length){s$1.getLogger(this).error(`Skipping feature ${n}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=o.find(v$1)??o[0];for(const s of l)1===s.parts.length?t.push({globalId:r(),parentGlobalId:n,assetName:s.assetName,assetHash:s.parts[0].partHash,flags:[]}):s$1.getLogger(this).error(`Skipping asset ${s.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);}return t}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(t))for(const o of t)r.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===s&&(a={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else a=t;const i=b(a);if(r.length>0){i.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,s=t?.spatialReference?new f$1(t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:I(t,s)});}}return i}_createAttachmentErrorResult(e,t){const s$1=t.details.messages?.[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return {objectId:e,globalId:null,error:new s("feature-layer-source:attachment-failure",s$1,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const e=t[r];null!=e&&(s.set?s.set(r,e):s.append(r,e));}return s}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:s,dynamicDataSource:r}=this.layer;return {...e,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:s,infoFor3D:r,parsedUrl:i}=t;if(null==r||null==s)return e;const o=F(r);if(null==o)return e;const n=V$1(i.path,`../${o.id}`),u=new Array,l=new Array;for(const a of e)a.geometry.metadata.getExternalSourcesOnService(i).length>0?l.push(a):u.push(a);const c=l.map((e=>e.getAttribute(s))).filter(q);if(0===c.length)return e;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:p}}=r,h=new b$1;h.where=`${d} IN (${c.map((e=>`'${e}'`))})`,h.outFields=[p,d],h.returnGeometry=!1;const m=await s$3(n,h),{features:f}=m;return 0===f.length?e:[...u,...l.filter((e=>{const t=e.getAttribute(s);if(!t)return !0;const{metadata:r}=e.geometry,a=f.filter((e=>e.getAttribute(d)===t));if(0===a.length)return !0;const o=a.map((e=>e.getAttribute(p)));return r.getExternalSourcesOnService(i).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>o.every((t=>e!==t))))}))]}};e([y$2()],V.prototype,"type",void 0),e([y$2({constructOnly:!0})],V.prototype,"layer",void 0),e([y$2({readOnly:!0})],V.prototype,"queryTask",null),V=e([c$3("esri.layers.graphics.sources.FeatureLayerSource")],V);const G=1e3,H=V;

export { H as default };
