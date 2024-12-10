import { dX as s, aW as e$1, aX as y$1, e3 as o, gA as T, mg as w, aY as c$5, mh as S, eZ as m$6, jT as n$4, cZ as Z, er as We, H as s$1, g8 as p$8, U as U$1, f9 as b, jp as x, s as s$3, a4 as c$6, aH as M$1, bk as f$1, gz as h, gg as u$3, ge as y$2, b6 as P, dR as o$1, eY as s$5, gj as s$6, a3 as V, dD as s$7, mi as a$4, c1 as f$2, W as a$5, mj as t$3, dS as n$6, eA as l$5, d$ as u$4, e0 as j, e1 as t$4, e2 as m$8, eB as e$2, eC as i$2, bv as l$6, aA as V$1, B as a$6, gp as t$5, mk as v, e5 as c$7, eJ as f$3, ec as b$1 } from './main-DAn2heHU.js';
import { m as m$5, s as s$2 } from './capabilities-Chc0Nf4l.js';
import { r, L, P as P$1 } from './SceneService-r-VQP3Is.js';
import { s as s$4, l as l$4, u as u$2, m as m$7 } from './I3SLayerDefinitions-B8Q4UhqT.js';
import { $ } from './I3SUtil-CAhEV8Kg.js';
import { n as n$5, p as p$9 } from './popupUtils-C_pirah6.js';
import { s as s$8 } from './associatedFeatureServiceUtils-CwzWypcn.js';
import { I, x as x$1, Z as Z$1 } from './elevationInfoUtils-DWKNiYxR.js';
import './preload-helper-dJJaZANz.js';
import './originUtils-CRfESh92.js';
import './multiOriginJSONSupportUtils-Dlz6FGm5.js';
import './jsonContext-Bqrcj1jp.js';
import './resourceUtils-EfP8igiD.js';
import './resourceUtils-Cti3D-Xj.js';
import './saveAPIKeyUtils-D6CNbUlw.js';
import './saveUtils-BRhtbjJr.js';
import './mat4f64-D1udxz0O.js';
import './computeTranslationToOriginAndRotation-BmiBAuBS.js';
import './sphere-3DP19ri7.js';
import './ObjectStack-DNyyOmc2.js';
import './plane-C-MOGRmb.js';
import './mat3f64-DiVtVT5k.js';
import './quatf64-BVXz_O4E.js';
import './I3SBinaryReader-Bqi39-wG.js';
import './VertexAttribute-NSFkUlX8.js';
import './symbolColorUtils-eFBb4bAG.js';
import './orientedBoundingBox-DqK85IOt.js';
import './quat-CbVOmtft.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let n$3=class n extends(s(S)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1;}readTitle(e,o){return "string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(e){return -1!==this.id?this.id:"number"==typeof e?e:-1}};e$1([y$1({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n$3.prototype,"title",void 0),e$1([o("service","title",["alias","name"])],n$3.prototype,"readTitle",null),e$1([y$1()],n$3.prototype,"layer",void 0),e$1([y$1({type:T,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n$3.prototype,"id",void 0),e$1([o("service","id")],n$3.prototype,"readIdOnlyOnce",null),e$1([y$1(w(String))],n$3.prototype,"modelName",void 0),e$1([y$1(w(Boolean))],n$3.prototype,"isEmpty",void 0),e$1([y$1({type:Boolean,nonNullable:!0})],n$3.prototype,"legendEnabled",void 0),e$1([y$1({type:Boolean,json:{name:"visibility",write:!0}})],n$3.prototype,"visible",void 0),e$1([y$1({type:Number,json:{write:!0}})],n$3.prototype,"opacity",void 0),n$3=e$1([c$5("esri.layers.buildingSublayers.BuildingSublayer")],n$3);const a$3=n$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const E=s$6();let A=class extends(m$5(m$6.LoadableMixin(n$4(a$3)))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object";}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new Z(this.fields)}readAssociatedLayer(e,r){const t=this.layer.associatedFeatureServiceItem,o=r.associatedLayerID;return null!=t&&"number"==typeof o?new We({portalItem:t,customParameters:this.customParameters,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r$1=null!=e?e.signal:null,t=this._fetchService(r$1).then((()=>{this.indexInfo=r(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,s$1.getLogger(this),r$1);}));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){return p$8(this,e)}async _fetchService(e){const r=(await U$1(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl});}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){const t=this.getFeatureType(r?.feature)?.domains?.[e];return t&&"inherited"!==t.type?t:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return "3d-object"===this.layerType?"mesh":"point"}get profile(){return "3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:s$2,{query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}=e;return {query:r,data:{supportsZ:t,supportsM:o,isVersioned:s}}}createQuery(){const e=new b;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryExtent(e||this.createQuery(),r)))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatureCount(e||this.createQuery(),r)))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryFeatures(e||this.createQuery(),r))).then((e=>{if(e?.features)for(const r of e.features)r.layer=this.layer,r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then((t=>t.queryObjectIds(e||this.createQuery(),r)))}async queryCachedAttributes(e,r){const t=x(this.fieldsIndex,await n$5(this,p$9(this)));return $(this.parsedUrl.path,this.attributeStorageInfo,e,r,t,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const o=await this.queryCachedAttributes(e,[t]);if(!o||0===o.length)throw new s$3("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new c$6;return s.attributes=o[0],s.layer=this,s.sourceLayer=this,s}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new s$3("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$3("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};e$1([y$1({readOnly:!0})],A.prototype,"parsedUrl",null),e$1([y$1({type:s$4,readOnly:!0})],A.prototype,"nodePages",void 0),e$1([y$1({type:[l$4],readOnly:!0})],A.prototype,"materialDefinitions",void 0),e$1([y$1({type:[u$2],readOnly:!0})],A.prototype,"textureSetDefinitions",void 0),e$1([y$1({type:[m$7],readOnly:!0})],A.prototype,"geometryDefinitions",void 0),e$1([y$1({readOnly:!0})],A.prototype,"serviceUpdateTimeStamp",void 0),e$1([y$1({readOnly:!0})],A.prototype,"store",void 0),e$1([y$1({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],A.prototype,"rootNode",void 0),e$1([y$1({readOnly:!0})],A.prototype,"attributeStorageInfo",void 0),e$1([y$1(E.fields)],A.prototype,"fields",void 0),e$1([y$1({readOnly:!0})],A.prototype,"fieldsIndex",null),e$1([y$1({readOnly:!0,type:We})],A.prototype,"associatedLayer",void 0),e$1([o("service","associatedLayer",["associatedLayerID"])],A.prototype,"readAssociatedLayer",null),e$1([y$1(E.outFields)],A.prototype,"outFields",void 0),e$1([y$1({type:String,readOnly:!0})],A.prototype,"objectIdField",null),e$1([y$1({readOnly:!0,type:String,json:{read:!1}})],A.prototype,"displayField",null),e$1([y$1({readOnly:!0,type:String})],A.prototype,"apiKey",null),e$1([y$1({readOnly:!0,type:String})],A.prototype,"customParameters",null),e$1([y$1({readOnly:!0,type:M$1})],A.prototype,"fullExtent",null),e$1([y$1({readOnly:!0,type:f$1})],A.prototype,"spatialReference",null),e$1([y$1({readOnly:!0})],A.prototype,"version",null),e$1([y$1({readOnly:!0,type:h})],A.prototype,"elevationInfo",null),e$1([y$1({readOnly:!0,type:Number})],A.prototype,"minScale",null),e$1([y$1({readOnly:!0,type:Number})],A.prototype,"maxScale",null),e$1([y$1({readOnly:!0,type:Number})],A.prototype,"effectiveScaleRange",null),e$1([y$1({type:["hide","show"],json:{write:!0}})],A.prototype,"listMode",void 0),e$1([y$1({types:u$3,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],A.prototype,"renderer",void 0),e$1([y$1({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],A.prototype,"definitionExpression",void 0),e$1([y$1(y$2)],A.prototype,"popupEnabled",void 0),e$1([y$1({type:P,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],A.prototype,"popupTemplate",void 0),e$1([y$1({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],A.prototype,"normalReferenceFrame",void 0),e$1([y$1({readOnly:!0,json:{read:!1}})],A.prototype,"defaultPopupTemplate",null),e$1([y$1()],A.prototype,"types",null),e$1([y$1()],A.prototype,"typeIdField",null),e$1([y$1({json:{write:!1}}),o$1(new s$5({"3DObject":"3d-object",Point:"point"}))],A.prototype,"layerType",void 0),e$1([y$1()],A.prototype,"geometryType",null),e$1([y$1()],A.prototype,"profile",null),e$1([y$1({readOnly:!0,json:{read:!1}})],A.prototype,"capabilities",null),A=e$1([c$5("esri.layers.buildingSublayers.BuildingComponentSublayer")],A);const _=A;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var a$2;const l$3={type:V,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p$7}}},read:!1}};function p$7(r,o,t){if(r&&Array.isArray(r))return new V(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}return t?.messages&&r&&t.messages.push(new s$7("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t})),null})))}let c$4=a$2=class extends a$3{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null;}loadAll(){return a$4(this,(r=>a$2.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e);}))))}};function y(r){return "group"===r.layerType?c$4:_}e$1([y$1({type:["hide","show","hide-children"],json:{write:!0}})],c$4.prototype,"listMode",void 0),e$1([y$1(l$3)],c$4.prototype,"sublayers",void 0),c$4=a$2=e$1([c$5("esri.layers.buildingSublayers.BuildingGroupSublayer")],c$4),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o);}));}r.sublayersProperty=l$3,r.readSublayers=p$7,r.forEachSublayer=e;}(c$4||(c$4={}));const d$2=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e=class extends f$2{constructor(){super(...arguments),this.type=null;}};e$1([y$1({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=e$1([c$5("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p$6=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var i$1;let p$5=i$1=class extends f$2{constructor(){super(...arguments),this.filterType=null,this.filterValues=null;}clone(){return new i$1({filterType:this.filterType,filterValues:a$5(this.filterValues)})}};e$1([y$1({type:String,json:{write:!0}})],p$5.prototype,"filterType",void 0),e$1([y$1({type:[String],json:{write:!0}})],p$5.prototype,"filterValues",void 0),p$5=i$1=e$1([c$5("esri.layers.support.BuildingFilterAuthoringInfoType")],p$5);const l$2=p$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var c$3;const l$1=V.ofType(l$2);let m$4=c$3=class extends f$2{clone(){return new c$3({filterTypes:a$5(this.filterTypes)})}};e$1([y$1({type:l$1,json:{write:!0}})],m$4.prototype,"filterTypes",void 0),m$4=c$3=e$1([c$5("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m$4);const n$2=m$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p$4;const l=V.ofType(n$2);let n$1=p$4=class extends p$6{constructor(){super(...arguments),this.type="checkbox";}clone(){return new p$4({filterBlocks:a$5(this.filterBlocks)})}};e$1([y$1({type:["checkbox"]})],n$1.prototype,"type",void 0),e$1([y$1({type:l,json:{write:!0}})],n$1.prototype,"filterBlocks",void 0),n$1=p$4=e$1([c$5("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n$1);const m$3=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$2=class t extends f$2{};e$1([y$1({readOnly:!0,json:{read:!1}})],t$2.prototype,"type",void 0),t$2=e$1([c$5("esri.layers.support.BuildingFilterMode")],t$2);const p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t$1;let p$2=t$1=class extends p$3{constructor(){super(...arguments),this.type="solid";}clone(){return new t$1}};e$1([y$1({type:["solid"],readOnly:!0,json:{write:!0}})],p$2.prototype,"type",void 0),p$2=t$1=e$1([c$5("esri.layers.support.BuildingFilterModeSolid")],p$2);const i=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var c$2;let m$2=c$2=class extends p$3{constructor(){super(...arguments),this.type="wire-frame",this.edges=null;}clone(){return new c$2({edges:a$5(this.edges)})}};e$1([o$1({wireFrame:"wire-frame"})],m$2.prototype,"type",void 0),e$1([y$1(t$3)],m$2.prototype,"edges",void 0),m$2=c$2=e$1([c$5("esri.layers.support.BuildingFilterModeWireFrame")],m$2);const a$1=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;let p$1=t=class extends p$3{constructor(){super(...arguments),this.type="x-ray";}clone(){return new t}};e$1([y$1({type:["x-ray"],readOnly:!0,json:{write:!0}})],p$1.prototype,"type",void 0),p$1=t=e$1([c$5("esri.layers.support.BuildingFilterModeXRay")],p$1);const c$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var d$1;const a={nonNullable:!0,types:{key:"type",base:p$3,typeMap:{solid:i,"wire-frame":a$1,"x-ray":c$1}},json:{read:e=>{switch(e?.type){case"solid":return i.fromJSON(e);case"wireFrame":return a$1.fromJSON(e);case"x-ray":return c$1.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let m$1=d$1=class extends f$2{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new i,this.title="";}clone(){return new d$1({filterExpression:this.filterExpression,filterMode:a$5(this.filterMode),title:this.title})}};e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"filterExpression",void 0),e$1([y$1(a)],m$1.prototype,"filterMode",void 0),e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m$1.prototype,"title",void 0),m$1=d$1=e$1([c$5("esri.layers.support.BuildingFilterBlock")],m$1);const c=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var d;const u$1=V.ofType(c);let m=d=class extends f$2{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=n$6(),this.name=null;}clone(){return new d({description:this.description,filterBlocks:a$5(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:a$5(this.filterAuthoringInfo)})}};e$1([y$1({type:String,json:{write:!0}})],m.prototype,"description",void 0),e$1([y$1({type:u$1,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),e$1([y$1({types:{key:"type",base:p$6,typeMap:{checkbox:m$3}},json:{read:o=>"checkbox"===o?.type?m$3.fromJSON(o):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),e$1([y$1({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),e$1([y$1({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=d=e$1([c$5("esri.layers.support.BuildingFilter")],m);const f=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends f$2{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null;}};e$1([y$1({type:String})],p.prototype,"fieldName",void 0),e$1([y$1({type:String})],p.prototype,"modelName",void 0),e$1([y$1({type:String})],p.prototype,"label",void 0),e$1([y$1({type:Number})],p.prototype,"min",void 0),e$1([y$1({type:Number})],p.prototype,"max",void 0),e$1([y$1({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),e$1([y$1({type:[Number]})],p.prototype,"subLayerIds",void 0),p=e$1([c$5("esri.layers.support.BuildingFieldStatistics")],p);let n=class extends(m$6.LoadableMixin(n$4(f$2))){constructor(){super(...arguments),this.url=null;}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(s$1.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const t=(await U$1(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"});}};e$1([y$1({constructOnly:!0,type:String})],n.prototype,"url",void 0),e$1([y$1({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],n.prototype,"fields",null),n=e$1([c$5("esri.layers.support.BuildingSummaryStatistics")],n);const u=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const C=V.ofType(f),R=a$5(d$2.sublayersProperty),U=R.json?.origins;U&&(U["web-scene"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},U["portal-item"]={type:[_],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let M=class extends(L(l$5(u$4(j(t$4(m$8(e$2(i$2(b$1))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new l$6({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new C,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene";}normalizeCtorArgs(e){return "string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy();}readSublayers(e,r,t){const s=d$2.readSublayers(e,r,t);return d$2.forEachSublayer(s,(e=>e.layer=this)),this._sublayerOverrides&&(this.applySublayerOverrides(s,this._sublayerOverrides),this._sublayerOverrides=null),s}applySublayerOverrides(e,{overrides:r,context:t}){d$2.forEachSublayer(e,(e=>e.read(r.get(e.id),t)));}readSublayerOverrides(e,r){const t=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?t.set(i.id,i):r.messages?.push(new s$3("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return {overrides:t,context:r}}writeSublayerOverrides(e,r,t){const s=[];d$2.forEachSublayer(this.sublayers,(e=>{const r=e.write({},t);Object.keys(r).length>1&&s.push(r);})),s.length>0&&(r.sublayers=s);}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach((e=>{r.sublayers.push(a$5(e));}));}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this._sublayerOverrides=t;}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const e=V$1(this.parsedUrl?.path,r.statisticsHRef);return new u({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(a$6).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return t$5(this,(e=>{d$2.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r);})),this.summaryStatistics&&e(this.summaryStatistics);}))}async saveAs(e,r){return this._debouncedSaveOperations(P$1.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(P$1.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new s$3("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return ["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await s$8(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r;}catch(r){s$1.getLogger(this).warn("Associated feature service item could not be loaded",r);}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";I(s$1.getLogger(this),x$1(r,"absolute-height",e)),I(s$1.getLogger(this),Z$1(r,e));}};e$1([y$1({type:["BuildingSceneLayer"]})],M.prototype,"operationalLayerType",void 0),e$1([y$1({readOnly:!0})],M.prototype,"allSublayers",void 0),e$1([y$1(R)],M.prototype,"sublayers",void 0),e$1([o("service","sublayers")],M.prototype,"readSublayers",null),e$1([y$1({type:C,nonNullable:!0,json:{write:!0}})],M.prototype,"filters",void 0),e$1([y$1({type:String,json:{write:!0}})],M.prototype,"activeFilterId",void 0),e$1([y$1({readOnly:!0,type:u})],M.prototype,"summaryStatistics",void 0),e$1([o("summaryStatistics",["statisticsHRef"])],M.prototype,"readSummaryStatistics",null),e$1([y$1({type:[String],json:{read:!1}})],M.prototype,"outFields",void 0),e$1([y$1(v)],M.prototype,"fullExtent",void 0),e$1([y$1(c$7)],M.prototype,"legendEnabled",void 0),e$1([y$1({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),e$1([y$1(w(f$1))],M.prototype,"spatialReference",void 0),e$1([y$1(f$3)],M.prototype,"elevationInfo",null),e$1([y$1({json:{read:!1},readOnly:!0})],M.prototype,"type",void 0),e$1([y$1()],M.prototype,"associatedFeatureServiceItem",void 0),M=e$1([c$5("esri.layers.BuildingSceneLayer")],M);const H=M;

export { H as default };
