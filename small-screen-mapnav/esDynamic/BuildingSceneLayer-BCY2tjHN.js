import{dG as de,O as t,P as r,dO as S,gZ as ue,n7 as _,Q as l,n8 as ce,eP as $,k9 as J,cU as he,em as G,D as w,gy as ge,a2 as H,f0 as fe,l1 as me,s as O,_ as ve,b8 as be,bv as W,gY as Se,gG as we,gE as Oe,W as Fe,dB as X,eO as Ie,gJ as xe,V as f,dn as Le,n9 as je,bV as c,ad as u,na as Te,dC as Be,dY as Ee,dK as Pe,dL as Ae,dM as _e,dN as qe,dZ as Ne,d_ as Re,bP as Me,b3 as ke,a1 as Qe,gO as Ue,nb as Ke,dQ as De,e4 as Ce,dX as Ve}from"./main-D8a2_wp1.js";import{s as Ze}from"./capabilities-xlBnI7Aq.js";import{r as $e,L as Je,C as Y}from"./SceneService-DnICavPt.js";import{p as Ge,a as He,y as We,m as Xe}from"./I3SLayerDefinitions-WtEZ8xL-.js";import{$ as Ye}from"./I3SUtil-C_nz0XaG.js";import{n as ze,p as et}from"./popupUtils-DKC-DLpu.js";import{s as tt}from"./associatedFeatureServiceUtils-DKqQ1weK.js";import{$ as z,Z as rt,w as st}from"./elevationInfoUtils-Bao_-ORt.js";let p=class extends de(ce){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],p.prototype,"title",void 0),t([S("service","title",["alias","name"])],p.prototype,"readTitle",null),t([r()],p.prototype,"layer",void 0),t([r({type:ue,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],p.prototype,"id",void 0),t([S("service","id")],p.prototype,"readIdOnlyOnce",null),t([r(_(String))],p.prototype,"modelName",void 0),t([r(_(Boolean))],p.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],p.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],p.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],p.prototype,"opacity",void 0),p=t([l("esri.layers.buildingSublayers.BuildingSublayer")],p);const ee=p,te=xe();let o=class extends $.LoadableMixin(J(ee)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new he(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,a=s.associatedLayerID;return i!=null&&typeof a=="number"?new G({portalItem:i,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=e!=null?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=$e(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,w.getLogger(this),s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return ge(this,e)}async _fetchService(e){const s=(await H(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){const i=this.getFeatureType(s?.feature)?.domains?.[e];return i&&i.type!=="inherited"?i:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ze,{query:s,data:{supportsZ:i,supportsM:a,isVersioned:y}}=e;return{query:s,data:{supportsZ:i,supportsM:a,isVersioned:y}}}createQuery(){const e=new fe;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i?.features)for(const a of i.features)a.layer=this.layer,a.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const i=me(this.fieldsIndex,await ze(this,et(this)));return Ye(this.parsedUrl.path,this.attributeStorageInfo,e,s,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,s){const i=await this.queryCachedAttributes(e,[s]);if(!i||i.length===0)throw new O("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new ve({attributes:i[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new O("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new O("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r({type:Ge,readOnly:!0})],o.prototype,"nodePages",void 0),t([r({type:[He],readOnly:!0})],o.prototype,"materialDefinitions",void 0),t([r({type:[We],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),t([r({type:[Xe],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],o.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),t([r({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),t([r(te.fields)],o.prototype,"fields",void 0),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:G})],o.prototype,"associatedLayer",void 0),t([S("service","associatedLayer",["associatedLayerID"])],o.prototype,"readAssociatedLayer",null),t([r(te.outFields)],o.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],o.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),t([r({readOnly:!0,type:String})],o.prototype,"apiKey",null),t([r({readOnly:!0,type:String})],o.prototype,"customParameters",null),t([r({readOnly:!0,type:be})],o.prototype,"fullExtent",null),t([r({readOnly:!0,type:W})],o.prototype,"spatialReference",null),t([r({readOnly:!0})],o.prototype,"version",null),t([r({readOnly:!0,type:Se})],o.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],o.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],o.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r({types:we,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([r(Oe)],o.prototype,"popupEnabled",void 0),t([r({type:Fe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"types",null),t([r()],o.prototype,"typeIdField",null),t([r({json:{write:!1}}),X(new Ie({"3DObject":"3d-object",Point:"point"}))],o.prototype,"layerType",void 0),t([r()],o.prototype,"geometryType",null),t([r()],o.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),t([r({readOnly:!0})],o.prototype,"statisticsInfo",void 0),o=t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")],o);const q=o;var N;const re={type:f,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:se}}},read:!1}};function se(e,s,i){if(e&&Array.isArray(e))return new f(e.map(a=>{const y=it(a);if(y){const b=new y;return b.read(a,i),b}return i?.messages&&a&&i.messages.push(new Le("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:i})),null}))}let h=N=class extends ee{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return je(this,e=>N.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}))}};function it(e){return e.layerType==="group"?h:q}t([r({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),t([r(re)],h.prototype,"sublayers",void 0),h=N=t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),function(e){function s(i,a){i.forEach(y=>{a(y),y.type==="building-group"&&s(y.sublayers,a)})}e.sublayersProperty=re,e.readSublayers=se,e.forEachSublayer=s}(h||(h={}));const m=h;let j=class extends c{constructor(){super(...arguments),this.type=null}};t([r({type:String,readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=t([l("esri.layers.support.BuildingFilterAuthoringInfo")],j);const ie=j;var R;let F=R=class extends c{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:u(this.filterValues)})}};t([r({type:String,json:{write:!0}})],F.prototype,"filterType",void 0),t([r({type:[String],json:{write:!0}})],F.prototype,"filterValues",void 0),F=R=t([l("esri.layers.support.BuildingFilterAuthoringInfoType")],F);const ot=F;var M;const at=f.ofType(ot);let T=M=class extends c{clone(){return new M({filterTypes:u(this.filterTypes)})}};t([r({type:at,json:{write:!0}})],T.prototype,"filterTypes",void 0),T=M=t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")],T);const nt=T;var k;const lt=f.ofType(nt);let I=k=class extends ie{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:u(this.filterBlocks)})}};t([r({type:["checkbox"]})],I.prototype,"type",void 0),t([r({type:lt,json:{write:!0}})],I.prototype,"filterBlocks",void 0),I=k=t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],I);const oe=I;let B=class extends c{};t([r({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),B=t([l("esri.layers.support.BuildingFilterMode")],B);const E=B;var Q;let P=Q=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new Q}};t([r({type:["solid"],readOnly:!0,json:{write:!0}})],P.prototype,"type",void 0),P=Q=t([l("esri.layers.support.BuildingFilterModeSolid")],P);const U=P;var K;let x=K=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:u(this.edges)})}};t([X({wireFrame:"wire-frame"})],x.prototype,"type",void 0),t([r(Te)],x.prototype,"edges",void 0),x=K=t([l("esri.layers.support.BuildingFilterModeWireFrame")],x);const ae=x;var D;let A=D=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new D}};t([r({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=D=t([l("esri.layers.support.BuildingFilterModeXRay")],A);const ne=A;var C;const pt={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:U,"wire-frame":ae,"x-ray":ne}},json:{read:e=>{switch(e?.type){case"solid":return U.fromJSON(e);case"wireFrame":return ae.fromJSON(e);case"x-ray":return ne.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=C=class extends c{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new U,this.title=""}clone(){return new C({filterExpression:this.filterExpression,filterMode:u(this.filterMode),title:this.title})}};t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([r(pt)],v.prototype,"filterMode",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=C=t([l("esri.layers.support.BuildingFilterBlock")],v);const yt=v;var V;const dt=f.ofType(yt);let g=V=class extends c{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Be(),this.name=null}clone(){return new V({description:this.description,filterBlocks:u(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:u(this.filterAuthoringInfo)})}};t([r({type:String,json:{write:!0}})],g.prototype,"description",void 0),t([r({type:dt,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t([r({types:{key:"type",base:ie,typeMap:{checkbox:oe}},json:{read:e=>e?.type==="checkbox"?oe.fromJSON(e):null,write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t([r({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t([r({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=V=t([l("esri.layers.support.BuildingFilter")],g);const ut=g;let d=class extends c{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([r({type:String})],d.prototype,"fieldName",void 0),t([r({type:String})],d.prototype,"modelName",void 0),t([r({type:String})],d.prototype,"label",void 0),t([r({type:Number})],d.prototype,"min",void 0),t([r({type:Number})],d.prototype,"max",void 0),t([r({json:{read:e=>Array.isArray(e)&&(e.every(s=>typeof s=="string")||e.every(s=>typeof s=="number"))?e.slice():null}})],d.prototype,"mostFrequentValues",void 0),t([r({type:[Number]})],d.prototype,"subLayerIds",void 0),d=t([l("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],d);let L=class extends $.LoadableMixin(J(c)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(w.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const s=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(s)),Promise.resolve(this)}async _fetchService(e){const s=(await H(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(s,{origin:"service"})}};t([r({constructOnly:!0,type:String})],L.prototype,"url",void 0),t([r({readOnly:!0,type:[d],json:{read:{source:"summary"}}})],L.prototype,"fields",null),L=t([l("esri.layers.support.BuildingSummaryStatistics")],L);const le=L,pe=f.ofType(ut),ye=u(m.sublayersProperty),Z=ye.json?.origins;Z&&(Z["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Z["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let n=class extends Je(Ee(Pe(Ae(_e(qe(Ne(Re(Ve)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Me({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.type==="building-group"?s.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new pe,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,s,i){const a=m.readSublayers(e,s,i);return m.forEachSublayer(a,y=>y.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:s,context:i}){m.forEachSublayer(e,a=>a.read(s.get(a.id),i))}readSublayerOverrides(e,s){const i=new Map;for(const a of e)a!=null&&typeof a=="object"&&typeof a.id=="number"?i.set(a.id,a):s.messages?.push(new O("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:a}));return{overrides:i,context:s}}writeSublayerOverrides(e,s,i){const a=[];m.forEachSublayer(this.sublayers,y=>{const b=y.write({},i);Object.keys(b).length>1&&a.push(b)}),a.length>0&&(s.sublayers=a)}writeUnappliedOverrides(e,s){s.sublayers=[],e.overrides.forEach(i=>{s.sublayers.push(u(i))})}write(e,s){return e=super.write(e,s),!s||s.origin!=="web-scene"&&s.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,s):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,s){if(super.read(e,s),s&&(s.origin==="web-scene"||s.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,s);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,s){if(typeof s.statisticsHRef=="string"){const i=ke(this.parsedUrl?.path,s.statisticsHRef);return new le({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const s=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Qe).then(()=>this._fetchService(s)).then(()=>this._fetchAssociatedFeatureService(s));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return Ue(this,e=>{m.forEachSublayer(this.sublayers,s=>{s.type!=="building-group"&&e(s)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,s){return this._debouncedSaveOperations(Y.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Y.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new O("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:s}=await tt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=s}catch(s){w.getLogger(this).warn("Associated feature service item could not be loaded",s)}}_validateElevationInfo(){const e=this.elevationInfo,s="Building scene layers";z(w.getLogger(this),rt(s,"absolute-height",e)),z(w.getLogger(this),st(s,e))}};t([r({type:["BuildingSceneLayer"]})],n.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],n.prototype,"allSublayers",void 0),t([r(ye)],n.prototype,"sublayers",void 0),t([S("service","sublayers")],n.prototype,"readSublayers",null),t([r({type:pe,nonNullable:!0,json:{write:!0}})],n.prototype,"filters",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"activeFilterId",void 0),t([r({readOnly:!0,type:le})],n.prototype,"summaryStatistics",void 0),t([S("summaryStatistics",["statisticsHRef"])],n.prototype,"readSummaryStatistics",null),t([r({type:[String],json:{read:!1}})],n.prototype,"outFields",void 0),t([r(Ke)],n.prototype,"fullExtent",void 0),t([r(De)],n.prototype,"legendEnabled",void 0),t([r({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),t([r(_(W))],n.prototype,"spatialReference",void 0),t([r(Ce)],n.prototype,"elevationInfo",null),t([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([r()],n.prototype,"associatedFeatureServiceItem",void 0),n=t([l("esri.layers.BuildingSceneLayer")],n);const ct=n;export{ct as default};
