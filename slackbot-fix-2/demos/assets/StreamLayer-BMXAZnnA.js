const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./streamLayerUtils-D8q8fDVr.js","./utils-d0sLCWXy.js","./main-B9uF9icM.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./originUtils-CRfESh92.js","./multiOriginJSONSupportUtils-Dlz6FGm5.js","./jsonContext-DnUzuOBU.js","./saveAPIKeyUtils-CcT1e9SH.js","./saveUtils-C16PhBO6.js","./createConnection-CVmAk30S.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { aW as e, aX as y, aY as c, c1 as f, g4 as c$1, g5 as p$1, dZ as n, g6 as f$1, e1 as t$1, d_ as f$2, eA as l, d$ as u$1, e0 as j, e2 as m, eB as e$1, dW as i$1, bk as f$3, b0 as k, s, B as a, g7 as p$2, gx as o, H as s$1, gy as D, dL as o$1, fC as r, g8 as p$3, f9 as b, gq as A, U as U$1, dK as y$1, g1 as g, v as t$2, gz as h, aH as M, ga as m$1, gb as C, gc as i$2, e5 as c$2, gA as T, gB as S, gC as T$1, ge as y$2, b6 as P, gf as m$2, gg as u, e3 as o$2, W as a$1, gh as p$4, e6 as d, gj as s$2, ec as b$1 } from './main-B9uF9icM.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;let i=t=class extends f{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([y({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([c("esri.layers.support.PurgeOptions")],i);const p=i;

const Y=s$2();function Z(e,t){return new s("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let ee=class extends(c$1(p$1(n(f$1(t$1(f$2(l(u$1(j(m(e$1(i$1(b$1))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f$3.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=k((async(e,t,r)=>{const{save:i,saveAs:o}=await __vitePreload(() => import('./streamLayerUtils-D8q8fDVr.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]):void 0,import.meta.url);switch(e){case A.SAVE:return i(this,t);case A.SAVE_AS:return o(this,r,t)}}));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new s("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(a).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t);}set renderer(e){p$2(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,t,i){t=t.layerDefinition||t;const o$1=t.drawingInfo?.renderer;if(o$1){const e=o(o$1,t,i)||void 0;return e||s$1.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return D(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([__vitePreload(() => import('./createConnection-CVmAk30S.js'),true?__vite__mapDeps([10,3,2,4]):void 0,import.meta.url),this.load()]),r$1=this.geometryType?o$1.toJSON(this.geometryType):null,{customParameters:i=null,definitionExpression:o=null,geometryDefinition:s=null,maxReconnectionAttempts:n=0,maxReconnectionInterval:a=20,spatialReference:l=this.spatialReference}=e||this.createConnectionParameters(),d=t(this.parsedUrl,this.spatialReference,l,r$1,o,s,n,a,i??void 0),m=r([this.on("send-message-to-socket",(e=>d.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>d.sendMessageToClient(e)))]);return d.once("destroy",m.remove),d}createConnectionParameters(){return {spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return p$3(this,e)}createQuery(){const e=new b;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return !0}sendMessageToSocket(e){this.emit("send-message-to-socket",e);}sendMessageToClient(e){this.emit("send-message-to-client",e);}async save(e){return this._debouncedSaveOperations(A.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(A.SAVE_AS,t,e)}write(e,t){const r=t?.messages;return this.webSocketUrl?(r?.push(Z(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(r?.push(Z(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!!!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await U$1(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t;}}else {if(!this.timeInfo?.trackIdField)throw new s("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new s("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e;}if(!this.fields)throw new s("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new y$1({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new s("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl);}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),p$2(this.renderer,this.fieldsIndex),g(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),t$2(this,{origin:"service"})}};e([y({type:String})],ee.prototype,"copyright",void 0),e([y({readOnly:!0})],ee.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ee.prototype,"definitionExpression",void 0),e([y({type:String})],ee.prototype,"displayField",void 0),e([y({type:h})],ee.prototype,"elevationInfo",void 0),e([y({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ee.prototype,"featureReduction",null),e([y(Y.fields)],ee.prototype,"fields",void 0),e([y(Y.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),e([y({type:M,json:{name:"layerDefinition.definitionGeometry",write:!0}})],ee.prototype,"geometryDefinition",void 0),e([y({type:o$1.apiValues,json:{read:{reader:o$1.read}}})],ee.prototype,"geometryType",void 0),e([y(m$1)],ee.prototype,"labelsVisible",void 0),e([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$2},write:!0}})],ee.prototype,"labelingInfo",void 0),e([y(c$2)],ee.prototype,"legendEnabled",void 0),e([y({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ee.prototype,"listMode",void 0),e([y({type:T})],ee.prototype,"maxReconnectionAttempts",void 0),e([y({type:T})],ee.prototype,"maxReconnectionInterval",void 0),e([y(S)],ee.prototype,"maxScale",void 0),e([y(T$1)],ee.prototype,"minScale",void 0),e([y({type:String})],ee.prototype,"objectIdField",void 0),e([y({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ee.prototype,"operationalLayerType",void 0),e([y({readOnly:!0})],ee.prototype,"outFields",void 0),e([y(y$2)],ee.prototype,"popupEnabled",void 0),e([y({type:P,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),e([y({type:p})],ee.prototype,"purgeOptions",void 0),e([y({json:{read:!1,write:!1}})],ee.prototype,"refreshInterval",void 0),e([y({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:u,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ee.prototype,"renderer",null),e([o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ee.prototype,"readRenderer",null),e([y((()=>{const e=a$1(p$4);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],ee.prototype,"screenSizePerspectiveEnabled",void 0),e([y()],ee.prototype,"sourceJSON",void 0),e([y({type:f$3,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ee.prototype,"spatialReference",void 0),e([y({json:{read:!1}})],ee.prototype,"type",void 0),e([y(d)],ee.prototype,"url",void 0),e([y({type:Number})],ee.prototype,"updateInterval",void 0),e([y({json:{read:!1,write:!1}})],ee.prototype,"useViewTime",void 0),e([y({type:String})],ee.prototype,"webSocketUrl",void 0),ee=e([c("esri.layers.StreamLayer")],ee);const te=ee;

export { te as default };
