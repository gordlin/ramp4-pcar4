import{O as i,P as r,Q as w,hr as q,eX as C,k$ as te,bV as A,gx as G,dF as se,V as P,b5 as R,bp as ie,dn as Q,iu as re,dO as v,bi as ae,f9 as oe,p as ne,a2 as V,ad as le,s as p,b3 as de,ha as pe,dY as ue,dK as ce,dL as ye,dM as he,dN as fe,dZ as me,d_ as ge,bU as we,cU as ve,hb as be,gw as k,l0 as $,D as m,a1 as Ie,t as Le,f0 as Fe,l1 as Se,_ as Te,gy as _e,eY as K,l2 as Oe,l3 as xe,a6 as Ee,l4 as je,gQ as z,ei as D,M as Ae,gS as Pe,l5 as Re,l6 as De,l7 as Ue,e4 as Ne,gA as qe,gB as Ce,gC as J,dQ as Ge,l8 as Qe,gG as Ve,gE as ke,W as $e,gH as Ke,kE as ze,gJ as Je,dX as Me}from"./main-D8a2_wp1.js";import{$ as He}from"./Mesh-bBZYEXxL.js";import{i as We,m as Be}from"./uploadAssetErrors-CgTTwqmr.js";import{L as Ze,C as M}from"./SceneService-DnICavPt.js";import{s as Xe}from"./associatedFeatureServiceUtils-DKqQ1weK.js";import{s as Ye}from"./capabilities-xlBnI7Aq.js";import{p as H,a as et,y as tt,m as st}from"./I3SLayerDefinitions-WtEZ8xL-.js";import{a as it}from"./fetchService-CQ6qe3hG.js";import{j as rt}from"./persistable-BhXekffx.js";import{$ as W,P as at,w as ot}from"./elevationInfoUtils-Bao_-ORt.js";import{$ as nt}from"./I3SUtil-C_nz0XaG.js";import{n as lt,p as dt}from"./popupUtils-DKC-DLpu.js";function B({associatedLayer:e,serviceUpdateTimeStamp:t}){const s=e?.editingInfo?.lastEditDate,o=e?.serverGens,n=s!=null,l=t!=null,d=n&&l&&t.lastUpdate!==s.getTime();return n&&(d||!l&&o?.minServerGen!==o?.serverGen)}const pt=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const s=this.associatedLayer?.timeInfo;if(s==null)return null;const o=s.clone();return G(o,this.fieldsIndex),o}set timeInfo(s){G(s,this.fieldsIndex),this._override("timeInfo",s)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(s){this._override("timeExtent",s)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(s){this._override("timeOffset",s)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(s){this._override("datesInUnknownTimezone",s)}async loadTimeInfoFromService(s){const{serviceTimeInfo:o}=this;if(o==null)return;const{startTimeField:n,endTimeField:l}=o;if(n==null&&l==null||B({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const d=async c=>{let h=null;try{h=(await this.fetchStatistics?.(c,s))?.stats}catch{}if(h==null)return null;const{minTimeStr:I,min:O,maxTimeStr:x,max:E}=h,F=c===n?I??O:x??E;return F!=null?new Date(F):null},[u,y]=await Promise.all([d(n),d(l)]);if(n!=null&&u==null||l!=null&&y==null)return;const f=new C({start:u,end:y});this.setAtOrigin("timeInfo",new q({endField:l,startField:n,fullTimeExtent:f}),"service")}};return i([r({type:q,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([r({type:C,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([r({type:te,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([r({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([r({type:L,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([w("esri.layers.mixins.TemporalSceneLayer")],t),t};let L=class extends A{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([r({type:String})],L.prototype,"endTimeField",void 0),i([r({type:String})],L.prototype,"startTimeField",void 0),L=i([w("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],L);let g=class extends A{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([r({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),i([r({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),i([r({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([r({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([r({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i([w("esri.layers.support.RangeInfo")],g);var T;let U=T=class extends se(P.ofType(R)){constructor(e){super(e)}clone(){return new T(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map(s=>{if(!t.equals(s.spatialReference)){if(!ie(s.spatialReference,t))return e?.messages&&e.messages.push(new Q("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new R;re(s,n,t),s=n}const o=s.toJSON(e);return delete o.spatialReference,o}).filter(s=>s!=null):(e?.messages&&e.messages.push(new Q("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(s=>s.toJSON(e)))}static fromJSON(e,t){const s=new T;return e.forEach(o=>s.add(R.fromJSON(o,t))),s}};U=T=i([w("esri.layers.support.PolygonCollection")],U);const _=U;var N;let b=N=class extends A{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new _,this._geometriesSource=null}initialize(){this.addHandles(ae(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,oe))}readGeometries(e,t,s){Array.isArray(e)?this.geometries=_.fromJSON(e,s):this._geometriesSource={url:ne(e,s),context:s}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:s,context:o}=this._geometriesSource,n=await V(s,{responseType:"json",signal:t?.signal}),l=e.toJSON(),d=n.data.map(u=>({...u,spatialReference:l}));this.geometries=_.fromJSON(d,o),this._geometriesSource=null}clone(){const e=new N({geometries:le(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([r({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],b.prototype,"spatialRelationship",void 0),i([r({type:_,nonNullable:!0,json:{write:!0}}),rt({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],b.prototype,"geometries",void 0),i([v(["web-scene","portal-item"],"geometries")],b.prototype,"readGeometries",null),b=N=i([w("esri.layers.support.SceneFilter")],b);const ut=b;async function ct({fieldName:e,statisticsInfo:t,errorContext:s,fieldsIndex:o,path:n,customParameters:l,apiKey:d,signal:u}){if(t==null)throw new p(`${s}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=o.get(e);if(y==null)throw new p(`${s}:field-unexisting`,`Field '${e}' does not exist on the layer`);const f=t.find(I=>I.name===y.name);if(f==null)throw new p(`${s}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=de(n,f.href),{data:h}=await V(c,{query:{f:"json",...l,token:d},responseType:"json",signal:u});return h}async function yt(e){const t=[];for(const s of e)s.name.toLowerCase().endsWith(".zip")?t.push(ht(s)):t.push(Promise.resolve(s));return(await Promise.all(t)).flat()}async function ht(e){const{BlobReader:t,ZipReader:s,BlobWriter:o}=await import("./zipjs-wrapper-DlcHxyCX.js"),n=[];return(await new s(new t(e)).getEntries()).forEach(l=>{if(l.directory||/^__MACOS/i.test(l.filename))return;const d=new o,u=l.getData?.(d).then(y=>new File([y],l.filename));u&&n.push(u)}),Promise.all(n)}const ft=new Set(["3DObject","Point"]),Z=Je();let a=class extends pt(pe(Ze(ue(ce(ye(he(fe(me(ge(we(Me))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new P,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const s=this.getFeatureType(t?.feature)?.domains?.[e];return s&&s.type!=="inherited"?s:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new ve(this.fields)}readNodePages(e,t,s){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:H.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&be(this.associatedLayer)}get geometryType(){return mt[this.profile]||"mesh"}set renderer(e){k(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??Ye;const{query:t,queryRelated:s,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:d,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:y,supportsM:f,isVersioned:c,supportsAttachment:h},operations:{supportsEditing:I,supportsAdd:O,supportsUpdate:x,supportsDelete:E,supportsQuery:F,supportsQueryAttachments:Y,supportsAsyncConvert3D:ee}}=e,S=e.operations.supportsChangeTracking,j=!!this.associatedLayer?.infoFor3D&&$();return{query:t,queryRelated:s,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:n,supportsGeometryUpdate:j&&d,supportsUploadWithItemId:l},data:{supportsAttachment:h,supportsZ:y,supportsM:f,isVersioned:c},operations:{supportsQuery:F,supportsQueryAttachments:Y,supportsEditing:I&&S,supportsAdd:j&&O&&S,supportsDelete:j&&E&&S,supportsUpdate:x&&S,supportsAsyncConvert3D:ee}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeOID"&&(e=s.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(s=>(s.type==="esriFieldTypeGlobalID"&&(e=s.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const s=t.store.profile;return s!=null&&X[s]?X[s]:(m.getLogger(this).error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Ie),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await Le(this,{origin:"service"},t),k(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new Fe;return this.geometryType==="mesh"?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),t)).then(s=>{if(s?.features)for(const o of s.features)o.layer=this,o.sourceLayer=this;return s})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const s=Se(this.fieldsIndex,await lt(this,dt(this)));return nt(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const s=await this.queryCachedAttributes(e,[t]);if(!s||s.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new Te;return o.attributes=s[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(s=>s.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return _e(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new p("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(M.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(M.SAVE,e)}async applyEdits(e,t){const{applyEdits:s}=await import("./editingSupport-B9TPV_0W.js");let o=t;await this.load();const n=this.associatedLayer;if(!n)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,d=!!n.infoFor3D,u=o?.globalIdUsed??!0;if(d&&l==null)throw new p(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(d&&!u)throw new p(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return K(n.url)&&d&&e.deleteFeatures!=null&&l!=null&&(o={...o,globalIdToObjectId:await Oe(n,e.deleteFeatures,l)}),s(this,n.source,e,o)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new p(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const s=c=>{throw m.getLogger(this).error(".convertMesh()",c.message),c};await this.load(),this.infoFor3D||s(new p("invalid:layer","SceneLayer has no capability for mesh conversion"));const o=await this.extractAndFilterFiles(e),n=o.reduce((c,h)=>xe(this.infoFor3D,h)?c+1:c,0);n===0&&s(new We),n>1&&s(new Be);const l=this.spatialReference,d=t?.location??new Ee({x:0,y:0,z:0,spatialReference:l}),u=d.spatialReference.isGeographic?"local":"georeferenced",y=He.createWithExternalSource(d,o,{vertexSpace:u}),[f]=await this.uploadAssets([y],t);return f}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await yt(e)).filter(s=>je(t,s)):e}validateLayer(e){if(e.layerType&&!ft.has(e.layerType))throw new p("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(s,o){let n=!1,l=!1;if(s==null)n=!0,l=!0;else{const d=o&&o.isGeographic;switch(s){case"east-north-up":case"earth-centered":n=!0,l=d;break;case"vertex-reference-frame":n=!0,l=!d;break;default:n=!1}}if(!n)throw new p("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new p("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new p("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some(n=>n.name===e.name),s=!!this.associatedLayer?.fields?.some(n=>n&&e.name===n.name),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||s,supportsLayerQuery:s};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const s=this.getField(t.name);s?(!s.domain&&t.domain&&(s.domain=t.domain.clone()),s.editable=t.editable,s.nullable=t.nullable,s.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=z(this);for(let s=0;s<e.length;s++){const o=e[s],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===D.SERVICE||l===D.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");$()&&this.associatedLayer?.infoFor3D!=null&&e&&K(this.associatedLayer?.url)&&B(this)&&z(this).setAtOrigin("fullExtent",e.clone(),D.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:s,portalItem:o}=await Xe(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await it.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:s,portalItem:o}),await this.associatedLayer.load()}catch(t){Ae(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Pe(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&W(m.getLogger(this),at("Mesh scene layers","relative-to-scene",e)),W(m.getLogger(this),ot("Scene layers",e))}async fetchStatistics(e,t){return await ct({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};i([r({types:{key:"type",base:Re,typeMap:{selection:De}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),i([r({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),i([r({json:{read:!1}})],a.prototype,"associatedLayer",void 0),i([r({type:["show","hide"]})],a.prototype,"listMode",void 0),i([r({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([r({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),i([r({...Z.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),i([r()],a.prototype,"types",null),i([r()],a.prototype,"typeIdField",null),i([r()],a.prototype,"templates",null),i([r()],a.prototype,"formTemplate",null),i([r({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),i([r({type:Ue,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),i([r(Z.outFields)],a.prototype,"outFields",void 0),i([r({type:H,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),i([v("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),i([r({type:[et],readOnly:!0})],a.prototype,"materialDefinitions",void 0),i([r({type:[tt],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),i([r({type:[st],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),i([r({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),i([r({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),i([r({readOnly:!0})],a.prototype,"statisticsInfo",void 0),i([r({type:P.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),i([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),i([r({type:ut,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([r(Ne)],a.prototype,"elevationInfo",null),i([r({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([r({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([r({type:String})],a.prototype,"geometryType",null),i([r(qe)],a.prototype,"labelsVisible",void 0),i([r({type:[Ce],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:J},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:J},write:!0}})],a.prototype,"labelingInfo",void 0),i([r(Ge)],a.prototype,"legendEnabled",void 0),i([r({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if(typeof e=="number"&&e>=0&&e<=1)return e;const s=t.layerDefinition?.drawingInfo?.transparency;return s!==void 0?Qe(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),i([r({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),i([r({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),i([r({types:Ve,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),i([r({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),i([v("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),i([r({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([r({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),i([r({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),i([r({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),i([r(ke)],a.prototype,"popupEnabled",void 0),i([r({type:$e,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),i([r({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),i([v("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),i([r({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),i([v("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),i([r({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),i([r({type:String,json:{read:!1}})],a.prototype,"profile",void 0),i([v("service","profile",["store.profile"])],a.prototype,"readProfile",null),i([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),i([r(Ke)],a.prototype,"screenSizePerspectiveEnabled",void 0),i([r({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),i([r(ze)],a.prototype,"useViewTime",null),a=i([w("esri.layers.SceneLayer")],a);const X={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},mt={"mesh-pyramids":"mesh",points:"point"},gt=a;export{gt as default};
