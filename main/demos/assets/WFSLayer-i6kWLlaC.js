import { aW as e, aX as y, aY as c, eZ as m, b0 as k, b5 as d, aH as M$1, s, dL as o, dU as v$1, eP as p$1, V as has, H as s$1, aP as i, g3 as c$1, eB as e$1, g4 as c$2, g5 as p, dZ as n, g6 as f, d_ as f$1, e1 as t, d$ as u$1, e0 as j, e2 as m$1, bk as f$2, g7 as p$2, g1 as g, dK as y$1, ew as o$2, I, g8 as p$3, f9 as b, g9 as c$3, eJ as f$3, ex as r, ga as m$2, gb as C, gc as i$1, e5 as c$4, gA as T, h2 as b$1, ge as y$2, b6 as P, gf as m$3, gg as u, gh as p$4, e6 as d$1, gj as s$2, ec as b$2 } from './main-BtYHawlJ.js';
import { l, o as o$1 } from './clientSideDefaults-BqQfiF6f.js';
import { v, Y, z, W, S } from './wfsUtils-BoCDuKIo.js';
import './preload-helper-dJJaZANz.js';
import './QueryEngineCapabilities-CCudnOfH.js';
import './geojson-DgtLhw2K.js';
import './date-BI_YP58O.js';
import './xmlUtils-r35QJ2K-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let x=class extends m{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=l(!1,!1),this.type="wfs",this.refresh=k((async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}));}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){const r=await this.queryFeaturesJSON(e,t);return d.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e,t={}){return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return {count:r.count,extent:M$1.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._workerHandler.querySnapping(e,t)}async _createLoadOptions(e){const{url:r,customParameters:o$1,name:a,namespaceUri:s$1,fields:i,geometryType:n,maxRecordCount:l,maxPageCount:u,maxTotalRecordCount:p,swapXY:h}=this.layer,w="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!r)throw new s("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await v(r,{customParameters:o$1,...e}));const g=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),x=g?await Y(this.wfsCapabilities,a,s$1,{spatialReference:w,customParameters:o$1,signal:e?.signal}):{...z(i??[]),geometryType:n,name:a,namespaceUri:s$1,spatialReference:w,swapXY:h},F=W(this.wfsCapabilities.readFeatureTypes(),x.name,x.namespaceUri),S=o.toJSON(x.geometryType),{operations:j}=this.wfsCapabilities,C=j.GetFeature.url,O=j.GetFeature.outputFormat;return {customParameters:o$1,featureType:F,fields:x.fields?.map((e=>e.toJSON()))??[],geometryField:x.geometryField,geometryType:S,getFeatureUrl:C,getFeatureOutputFormat:O,maxRecordCount:l,maxPageCount:u,maxTotalRecordCount:p,objectIdField:x.objectIdField,spatialReference:x.spatialReference?.toJSON(),swapXY:!!x.swapXY}}async _startWorker(e){const[t,r]=await v$1([this._createLoadOptions(e),p$1("WFSSourceWorker",{...e,strategy:has("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),a=t.error||r.error||null,n=r.value||null;if(a)throw n&&n.close(),a;const l=t.value;this._connection=r.value,this._workerHandler=this._connection.createInvokeProxy();const c=await this._workerHandler.load(l,e);for(const s of c.warnings)s$1.getLogger(this.layer).warn("#load()",`${s.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:s});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:i},extent:c.extent,fields:l.fields,geometryType:l.geometryType,objectIdField:l.objectIdField,geometryField:l.geometryField,drawingInfo:o$1(l.geometryType),name:l.featureType.title,wfsInfo:{name:l.featureType.name,featureUrl:l.getFeatureUrl,maxFeatures:l.maxRecordCount,swapXY:l.swapXY,supportedSpatialReferences:l.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:l.featureType.namespaceUri}};}};e([y()],x.prototype,"capabilities",void 0),e([y({constructOnly:!0})],x.prototype,"layer",void 0),e([y()],x.prototype,"sourceJSON",void 0),e([y()],x.prototype,"type",void 0),e([y()],x.prototype,"wfsCapabilities",void 0),x=e([c("esri.layers.graphics.sources.WFSSource")],x);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var B;const G=s$2();let J=B=class extends(c$1(e$1(c$2(p(n(f(f$1(t(u$1(j(m$1(b$2)))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m}=e;return new B({customParameters:r,fields:t,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:d,wfsCapabilities:m})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new x({layer:this}),this.spatialReference=f$2.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),p$2(this.renderer,this.fieldsIndex),g(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,t){const i=e.filter((e=>e.name!==S));this.geometryField&&i.unshift(new y$1({name:this.geometryField,alias:this.geometryField,type:"geometry"})),o$2(t,i.map((e=>e.toJSON())),r);}get parsedUrl(){return I(this.url)}set renderer(e){p$2(e,this.fieldsIndex),this._set("renderer",e);}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e);}createPopupTemplate(e){return p$3(this,e)}createQuery(){const e=new b;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:t}=this;return e.timeExtent=null!=r&&null!=t?t.offset(-r.value,r.unit):t||null,e}getFieldDomain(e,r){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery(),r)))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery(),r)))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery(),r)))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return null!=r&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e([y({readOnly:!0})],J.prototype,"capabilities",null),e([y({type:String})],J.prototype,"copyright",void 0),e([y({readOnly:!0})],J.prototype,"createQueryVersion",null),e([y({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],J.prototype,"customParameters",void 0),e([y(c$3("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),e([y({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],J.prototype,"definitionExpression",void 0),e([y({type:String})],J.prototype,"displayField",void 0),e([y(f$3)],J.prototype,"elevationInfo",void 0),e([y({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"featureUrl",void 0),e([y({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],J.prototype,"fields",void 0),e([r("fields")],J.prototype,"writeFields",null),e([y(G.fieldsIndex)],J.prototype,"fieldsIndex",void 0),e([y({type:M$1,json:{name:"extent"}})],J.prototype,"fullExtent",void 0),e([y()],J.prototype,"geometryField",void 0),e([y({type:String,json:{read:{source:"layerDefinition.geometryType",reader:o.read},write:{target:"layerDefinition.geometryType",writer:o.write,ignoreOrigin:!0},origins:{service:{read:o.read}}}})],J.prototype,"geometryType",void 0),e([y({type:String})],J.prototype,"id",void 0),e([y(m$2)],J.prototype,"labelsVisible",void 0),e([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$1},write:!0}})],J.prototype,"labelingInfo",void 0),e([y(c$4)],J.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],J.prototype,"listMode",void 0),e([y({type:String})],J.prototype,"objectIdField",void 0),e([y({type:["WFS"]})],J.prototype,"operationalLayerType",void 0),e([y({type:T,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"maxRecordCount",void 0),e([y({type:T})],J.prototype,"maxPageCount",void 0),e([y({type:T})],J.prototype,"maxTotalRecordCount",void 0),e([y({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],J.prototype,"mode",void 0),e([y({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"name",void 0),e([y({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"namespaceUri",void 0),e([y(b$1)],J.prototype,"opacity",void 0),e([y(G.outFields)],J.prototype,"outFields",void 0),e([y({readOnly:!0})],J.prototype,"parsedUrl",null),e([y(y$2)],J.prototype,"popupEnabled",void 0),e([y({type:P,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),e([y({types:m$3,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:u,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],J.prototype,"renderer",null),e([y(p$4)],J.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],J.prototype,"source",void 0),e([y({type:f$2,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],J.prototype,"spatialReference",void 0),e([y({readOnly:!0,type:[T],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"spatialReferences",void 0),e([y({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"swapXY",void 0),e([y({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],J.prototype,"title",void 0),e([y({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),e([y(d$1)],J.prototype,"url",void 0),e([y({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],J.prototype,"version",void 0),e([y()],J.prototype,"wfsCapabilities",null),J=B=e([c("esri.layers.WFSLayer")],J);const M=J;

export { M as default };
