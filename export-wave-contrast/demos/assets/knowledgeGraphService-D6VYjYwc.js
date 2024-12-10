const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./arcgis-knowledge-client-core-simd-BcQ9VZH7.js","./main-CLKD9wBG.js","./preload-helper-dJJaZANz.js","./main-B99Uwap2.css","./arcgis-knowledge-client-core-CP2x7Vko.js"])))=>i.map(i=>d[i]);
import { aW as e$4, aX as y$2, aY as c$6, dY as S$1, c1 as f$3, bk as f$4, V as has, h$ as n$2, s as s$6, eN as n$3, aG as u$1, F as x$2, aF as m$3, aE as j$3, H as s$7, U as U$1, C as t$8 } from './main-CLKD9wBG.js';
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { m as m$4, p as p$4, t as t$7, c as c$7 } from './GraphQueryStreaming-CSr337XO.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$6=class t extends S$1{constructor(r){super(r),this.resultRows=[];}};e$4([y$2()],t$6.prototype,"resultRows",void 0),t$6=e$4([c$6("esri.rest.knowledgeGraph.GraphQueryResult")],t$6);const c$5=t$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$5=class t extends S$1{constructor(r){super(r),this.resultRowsStream=new ReadableStream;}};e$4([y$2()],t$5.prototype,"resultRowsStream",void 0),t$5=e$4([c$6("esri.rest.knowledgeGraph.GraphQueryResult")],t$5);const c$4=t$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$5=class s extends f$3{constructor(o){super(o),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null;}};e$4([y$2({type:String,json:{write:!0}})],s$5.prototype,"name",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],s$5.prototype,"unique",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],s$5.prototype,"ascending",void 0),e$4([y$2({type:String,json:{write:!0}})],s$5.prototype,"description",void 0),e$4([y$2({type:[String],json:{write:!0}})],s$5.prototype,"fieldNames",void 0),s$5=e$4([c$6("esri.rest.knowledgeGraph.FieldIndex")],s$5);const i$5=s$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$4=class i extends f$3{constructor(t){super(t),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null;}};e$4([y$2({type:String,json:{write:!0}})],i$4.prototype,"name",void 0),e$4([y$2({type:String,json:{write:!0}})],i$4.prototype,"alias",void 0),e$4([y$2({type:String,json:{write:!0}})],i$4.prototype,"fieldType",void 0),e$4([y$2({type:String,json:{write:!0}})],i$4.prototype,"geometryType",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"hasM",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"hasZ",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"nullable",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"editable",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"required",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"defaultVisibility",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$4.prototype,"systemMaintained",void 0),e$4([y$2()],i$4.prototype,"role",void 0),e$4([y$2({type:Object,json:{type:String,write:{writer:(t,e)=>{e.defaultValue=null!=t?t.toString():null;}}}})],i$4.prototype,"defaultValue",void 0),i$4=e$4([c$6("esri.rest.knowledgeGraph.GraphProperty")],i$4);const l$3=i$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$3=class i extends f$3{constructor(o){super(o),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null;}};e$4([y$2({type:String,json:{write:!0}})],i$3.prototype,"name",void 0),e$4([y$2({type:String,json:{write:!0}})],i$3.prototype,"alias",void 0),e$4([y$2({type:String,json:{write:!0}})],i$3.prototype,"role",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$3.prototype,"strict",void 0),e$4([y$2({type:[l$3],json:{write:!0}})],i$3.prototype,"properties",void 0),e$4([y$2({type:[i$5],json:{write:!0}})],i$3.prototype,"fieldIndexes",void 0),i$3=e$4([c$6("esri.rest.knowledgeGraph.GraphObjectType")],i$3);const n$1=i$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$3=class e extends n$1{constructor(r){super(r);}};e$3=e$4([c$6("esri.rest.knowledgeGraph.EntityType")],e$3);const t$4=e$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$3=class t extends n$1{constructor(o){super(o),this.endPoints=[];}};e$4([y$2()],t$3.prototype,"endPoints",void 0),t$3=e$4([c$6("esri.rest.knowledgeGraph.RelationshipType")],t$3);const p$3=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let n=class extends f$3{constructor(t){super(t),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null;}};e$4([y$2({type:Date,json:{type:Number,write:{writer:(t,e)=>{e.timestamp=t?.getTime();}}}})],n.prototype,"timestamp",void 0),e$4([y$2({type:f$4,json:{write:!0}})],n.prototype,"spatialReference",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],n.prototype,"strict",void 0),e$4([y$2({type:String,json:{write:!0}})],n.prototype,"objectIdField",void 0),e$4([y$2({type:String,json:{write:!0}})],n.prototype,"globalIdField",void 0),e$4([y$2()],n.prototype,"arcgisManaged",void 0),e$4([y$2()],n.prototype,"identifierInfo",void 0),e$4([y$2()],n.prototype,"searchIndexes",void 0),e$4([y$2({type:[t$4],json:{write:!0}})],n.prototype,"entityTypes",void 0),e$4([y$2({type:[p$3],json:{write:!0}})],n.prototype,"relationshipTypes",void 0),n=e$4([c$6("esri.rest.knowledgeGraph.DataModel")],n);const l$2=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$2=class i extends f$3{constructor(t){super(t),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1;}};e$4([y$2({type:[String],json:{write:!0}})],i$2.prototype,"capabilities",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$2.prototype,"supportsSearch",void 0),e$4([y$2({type:[String],json:{write:!0}})],i$2.prototype,"supportedQueryFormats",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$2.prototype,"allowGeometryUpdates",void 0),e$4([y$2({type:Number,json:{write:!0}})],i$2.prototype,"searchMaxRecordCount",void 0),e$4([y$2({type:Object,json:{write:!0}})],i$2.prototype,"serviceCapabilities",void 0),e$4([y$2({type:Number,json:{write:!0}})],i$2.prototype,"maxRecordCount",void 0),e$4([y$2({type:String,json:{write:!0}})],i$2.prototype,"description",void 0),e$4([y$2({type:String,json:{write:!0}})],i$2.prototype,"copyrightText",void 0),e$4([y$2({type:String,json:{write:!0}})],i$2.prototype,"units",void 0),e$4([y$2({type:Object,json:{write:!0}})],i$2.prototype,"spatialReference",void 0),e$4([y$2({type:Number,json:{write:!0}})],i$2.prototype,"currentVersion",void 0),e$4([y$2({type:Object,json:{write:!0}})],i$2.prototype,"dateFieldsTimeReference",void 0),e$4([y$2({type:String,json:{write:!0}})],i$2.prototype,"serviceItemId",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$2.prototype,"supportsDocuments",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$2.prototype,"dataEditingNotSupported",void 0),e$4([y$2({type:Boolean,json:{write:!0}})],i$2.prototype,"schemaEditingNotSupported",void 0),i$2=e$4([c$6("esri.rest.knowledgeGraph.ServiceDefinition")],i$2);const s$4=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$2=class p extends f$3{constructor(o){super(o),this.dataModel=null,this.serviceDefinition=null;}};e$4([y$2({type:String,json:{write:!0}})],p$2.prototype,"url",void 0),e$4([y$2({type:l$2,json:{write:!0}})],p$2.prototype,"dataModel",void 0),e$4([y$2({type:s$4,json:{write:!0}})],p$2.prototype,"serviceDefinition",void 0),p$2=e$4([c$6("esri.rest.knowledgeGraph.KnowledgeGraph")],p$2);const c$3=p$2;

const t$2="esri/rest/knowledgeGraph/wasmInterface/";let s$3;async function r$2(){const e=s$3;if(e)return e;const t=has("wasm-simd");return s$3=o$1(t),s$3}async function o$1(s){if(s){const{default:s}=await __vitePreload(() => import('./arcgis-knowledge-client-core-simd-BcQ9VZH7.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url).then((e=>e.a));return s({locateFile:s=>n$2(t$2+s)})}const{default:n}=await __vitePreload(() => import('./arcgis-knowledge-client-core-CP2x7Vko.js'),true?__vite__mapDeps([4,1,2,3]):void 0,import.meta.url).then((e=>e.a));return n({locateFile:s=>n$2(t$2+s)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a$2(e,t){const n=new t.ArrayValue;return n.deleteLater(),e.forEach((e=>{n.add_value(m$2(e,t));})),n}function l$1(e,t){const n=new t.ObjectValue;n.deleteLater();for(const[o,r]of Object.entries(e))n.set_key_value(o,m$2(r,t));return n}function s$2(i,a){if(i instanceof u$1)return f$2(i,a);if(i instanceof x$2)return g$2(i,a);if(i instanceof m$3||i instanceof j$3)return c$2(i,a);throw new s$6("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:i})}function u(e,t){t.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin};}function y$1(t,n,o){if(!t.extent)throw new s$6("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",t.extent);if(!t.quantizeMode)throw new s$6("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",t.quantizeMode);if(!t.tolerance)throw new s$6("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",t.quantizeMode);n.output_quantization_parameters={extent:{xmax:t.extent.xmax,ymax:t.extent.ymax,xmin:t.extent.xmin,ymin:t.extent.ymin},quantize_mode:o.esriQuantizeMode[t.quantizeMode],tolerance:t.tolerance};}function m$2(e,t){if(null==e)return "";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof n$3)return s$2(e,t);if(Array.isArray(e)){const n=new t.ArrayValue;return n.deleteLater(),e.forEach((e=>{n.add_value(m$2(e,t));})),n}return l$1(e,t)}function c$2(e,t){const n=new t.GeometryValue;n.deleteLater(),n.has_z=e.hasZ,n.has_m=e.hasM;const i=[],a=[];let l=[];e instanceof m$3?(n.geometry_type=t.esriGeometryType.esriGeometryPolyline,l=e.paths):e instanceof j$3&&(n.geometry_type=t.esriGeometryType.esriGeometryPolygon,l=e.rings);let s=0,u=0;return l.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{i[u]=e,u++;}));})),a[s]=t,s++;})),n.coords=new Float64Array(i),n.lengths=new Uint32Array(a),n}function f$2(e,t){const n=new t.GeometryValue;n.deleteLater(),n.geometry_type=n.geometry_type=t.esriGeometryType.esriGeometryMultipoint,n.has_z=e.hasZ,n.has_m=e.hasM;const o=[],r=[];r[0]=e.points.length;let i=0;return e.points.forEach((e=>{e.forEach((e=>{o[i]=e,i++;}));})),n.coords=new Float64Array(o),n.lengths=new Uint32Array(r),n}function g$2(e,t){const n=new t.GeometryValue;n.deleteLater(),n.geometry_type=t.esriGeometryType.esriGeometryPoint,n.has_z=e.hasZ,n.has_m=e.hasM;const o=[],r=[];r[0]=1,o[0]=e.x,o[1]=e.y;let i=2;return e.hasZ&&(o[i]=e.z,i++),e.hasM&&(o[i]=e.m,i++),n.coords=new Float64Array(o),n.lengths=new Uint32Array(r),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r$1(i,n){if(!i.typeName)throw new s$6("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(i instanceof m$4){const e=new n.EntityValue;e.deleteLater(),e.type_name=i.typeName;for(const[t,o]of Object.entries(i.properties))e.set_key_value(t,a$1(o,n));return i.id&&e.set_id(i.id),e}if(i instanceof p$4){const e=new n.RelationshipValue;e.deleteLater(),e.type_name=i.typeName;for(const[t,o]of Object.entries(i.properties))e.set_key_value(t,a$1(o,n));return i.id&&e.set_id(i.id),i.originId&&i.destinationId&&e.set_related_entity_ids(i.originId,i.destinationId),e}throw new s$6("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function s$1(e){return {xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function a$1(e,t){return null==e?"":"object"!=typeof e||e instanceof Date?e:e instanceof n$3?s$2(e,t):""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1=class t extends S$1{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map;}};e$4([y$2()],t$1.prototype,"name",void 0),e$4([y$2()],t$1.prototype,"supportedCategory",void 0),e$4([y$2()],t$1.prototype,"analyzers",void 0),e$4([y$2()],t$1.prototype,"searchProperties",void 0),t$1=e$4([c$6("esri.rest.knowledgeGraph.SearchIndex")],t$1);const p$1=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var e$2,r,i$1,t,o,s,y;!function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document";}(e$2||(e$2={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset";}(r||(r={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch";}(i$1||(i$1={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122";}(t||(t={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth";}(o||(o={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension";}(s||(s={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty";}(y||(y={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function _$1(i){return i.deleteLater(),new l$2({timestamp:i.timestamp,spatialReference:new f$4(i.spatial_reference),strict:i.strict,objectIdField:i.objectid_property,globalIdField:i.globalid_property,arcgisManaged:i.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:y[i.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:i.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:i.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:t[i.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:M$1(i.search_indexes),entityTypes:j$2(i.entity_types),relationshipTypes:x$1(i.relationship_types)})}function c$1(e){return e.deleteLater(),new t$4(z$1(e))}function g$1(e){return e.deleteLater(),new i$5({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:I$1(e.fields)})}function z$1(e){return {name:e.name,alias:e.alias,role:e$2[e.role.value]?e$2[e.role.value]:null,strict:e.strict,properties:T$2(e.properties),fieldIndexes:w(e.field_indexes)}}function b$1(e){return e.deleteLater(),new l$3({alias:e.alias,name:e.name,fieldType:r[e.field_type.value]?r[e.field_type.value]:null,geometryType:i$1[e.geometry_type.value]?i$1[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:s[e.role.value],defaultValue:e.default_value})}function v$1(e){e.deleteLater();const t=z$1(e),i=[];for(let n=0;n<e.end_points.size();n++){const t=e.end_points.get(n);i.push({originEntityType:t.origin_entity_type,destinationEntityType:t.dest_entity_type});}return e.end_points.delete(),new p$3(Object.assign({endPoints:i},t))}function j$2(e){const t=[];for(let i=0;i<e.size();i++)t.push(c$1(e.get(i)));return e.delete(),t}function I$1(e){const t=[];for(let i=0;i<e.size();i++)t.push(e.get(i));return e.delete(),t}function T$2(e){const t=[];for(let i=0;i<e.size();i++)t.push(b$1(e.get(i)));return e.delete(),t}function w(e){const t=[];for(let i=0;i<e.size();i++)t.push(g$1(e.get(i)));return e.delete(),t}function x$1(e){const t=[];for(let i=0;i<e.size();i++)t.push(v$1(e.get(i)));return e.delete(),t}function M$1(e){const t=[];for(let i=0;i<e.size();i++){const i=new p$1,n=e.get(0);i.name=n.name,i.supportedCategory=o[n.supported_category.value];const r=n.analyzers.size();for(let e=0;e<r;e++)i.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){const t=n.search_properties.keys().get(e),r=n.search_properties.get(t),a=[];for(let e=0;e<r.property_names.size();e++)a.push(r.property_names.get(e));i.searchProperties.set(t,{propertyNames:a});}t.push(i);}return e.delete(),t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var E$2;!function(E){E[E.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",E[E.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",E[E.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",E[E.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",E[E.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",E[E.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",E[E.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",E[E.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH";}(E$2||(E$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var T$1,A$1;!function(T){T[T.OBJECT=0]="OBJECT",T[T.ENTITY=1]="ENTITY",T[T.RELATIONSHIP=2]="RELATIONSHIP",T[T.PATH=3]="PATH",T[T.ARRAY=4]="ARRAY";}(T$1||(T$1={})),function(T){T[T.view=0]="view",T[T.edit=1]="edit";}(A$1||(A$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function l(e,o){const r={spatialReference:o},n=c(e,r),s=e.lengths,l=e.coords,i=s[0];r.points=[];let a=0;for(let t=0;t<i;t++){const e=[];for(let t=0;t<n;t++)e[t]=l[a],a++;r.points.push(e);}return new u$1(r)}function i(e,t){const r={spatialReference:t};let n=2;c(e,r);const s=e.coords;return r.x=s[0],r.y=s[1],e.has_z&&(r.z=s[n],n++),e.has_m&&(r.m=s[n]),new x$2(r)}function a(e,t){return new m$3(f$1(e,t))}function m$1(e,t){return new j$3(f$1(e,t))}function f$1(t,o){const r={spatialReference:o},n=c(t,r),l=t.lengths,i=t.coords;let a="";if(t.geometry_type.value===E$2.ESRI_GEOMETRY_POLYGON)a="rings";else {if(t.geometry_type.value!==E$2.ESRI_GEOMETRY_POLYLINE)throw new s$6("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");a="paths";}r[a]=[];let m=0;return l.forEach((e=>{const t=[];for(let o=0;o<e;o++){const e=[];for(let t=0;t<n;t++)e[t]=i[m],m++;t.push(e);}r[a].push(t);})),r}function c(e,t){let o=2;return e.has_z?(t.hasZ=e.has_z,o++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,o++):t.hasM=!1,o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const _=()=>s$7.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),d={decodedWasmObjToQueryResponseObj:(e,t,n)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case E$2.ESRI_GEOMETRY_POINT:return i(e,n);case E$2.ESRI_GEOMETRY_MULTIPOINT:return l(e,n);case E$2.ESRI_GEOMETRY_POLYLINE:return a(e,n);case E$2.ESRI_GEOMETRY_POLYGON:return m$1(e,n);case E$2.ESRI_GEOMETRY_ENVELOPE:case E$2.ESRI_GEOMETRY_MULTI_PATCH:return _().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case E$2.ESRI_GEOMETRY_NULL:case E$2.ESRI_GEOMETRY_ANY:default:return _().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else {if(!("object_value_type"in e))return _().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case T$1.OBJECT:return g(e,t,n);case T$1.ENTITY:return f(e,t,n);case T$1.RELATIONSHIP:return j$1(e,t,n);case T$1.PATH:return R$1(e,t,n);case T$1.ARRAY:return m(e,t,n);default:return _().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function m(e,t,n){const r=[],o=e.count();for(let s=0;s<o;s++){const o=e.get_value_at(s);r.push(E$1(o,t,n));}return r}function E$1(e,t,n){return d.decodedWasmObjToQueryResponseObj(e,t,n)}function f(e,n,r){const o=e.type_name,s=O(e,n,r),u=e.get_id();return new m$4(Object.assign({typeName:o,id:u},s))}function O(e,t,n){const r={},o=e.key_count();for(let s=0;s<o;s++)r[e.get_key_at(s)]=E$1(e.get_value_at(s),t,n);return {properties:r}}function g(e,t,n){return new t$7(O(e,t,n))}function R$1(e,t,n){const r=e.entity_count(),s=e.relationship_count(),u=[];for(let o=0;o<r;o++)u.push(f(e.get_entity_at(o),t,n)),o<s&&u.push(j$1(e.get_relationship_at(o),t,n));return new c$7({path:u})}function j$1(e,t,n){const r=e.type_name,o=O(e,t,n);return new p$4(Object.assign({typeName:r,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$1=class e extends S$1{constructor(r){super(r),this.hasError=null,this.error=null,this.editResults=[];}};e$4([y$2()],e$1.prototype,"hasError",void 0),e$4([y$2()],e$1.prototype,"error",void 0),e$4([y$2()],e$1.prototype,"editResults",void 0),e$1=e$4([c$6("esri.rest.knowledgeGraph.GraphApplyEdits")],e$1);const p=e$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e){const o=new p;o.hasError=e.has_error(),o.hasError&&(o.error={errorCode:e.error.error_code,errorMessage:e.error.error_message});const t=e.get_edit_results_count();for(let r=0;r<t;r++){const t=e.get_edit_results_at(r),s=e.get_edit_results_type_name_at(r),_=[],d=[],a=[],u=t.get_add_results_count(),l=t.get_update_results_count(),g=t.get_delete_results_count();for(let r=0;r<u;r++){const e=t.get_add_result_at(r);_.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}});}for(let r=0;r<l;r++){const e=t.get_update_result_at(r);d.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}});}for(let r=0;r<g;r++){const e=t.get_delete_result_at(r);a.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}});}o.editResults.push({typeName:s,adds:_,updates:d,deletes:a});}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const b={fetchKnowledgeGraph:async e=>{const t=new c$3({url:e}),r=[];return r.push(q(t)),r.push(Q(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await z(e);},refreshServiceDefinition:async e=>{const r=(await U$1(e.url,{query:{f:"json"}})).data;return r.capabilities=r?.capabilities?.split(","),r.supportedQueryFormats=r?.supportedQueryFormats?.split(","),e.serviceDefinition=new s$4(r),e.serviceDefinition},executeQueryStreaming:async(e,t,a)=>{const n=`${e.url}/graph/query`;await M(e);const i=await F(n,a);i.data.body=await D(t,e);const d=await A(i.data.url,i.data);if(e.dataModel)return new c$4({resultRowsStream:await I(d,e.dataModel,t.outputSpatialReference??void 0)});throw new s$6("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,a)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new s$6("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await M(e);const o=await F(n,a);o.data.body=await C(t,e);return P(await A(o.data.url,o.data))},executeQuery:async(e,a,o)=>{const i=`${e.url}/graph/query`,d=await U$1(i,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:a.openCypherQuery,...o?.query},signal:o?.signal,timeout:o?.timeout}),p=d.getHeader?.("content-type"),c=d.data;if(p?.includes("application/x-protobuf")){const t=new((await r$2()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new c$5({resultRows:L(t,c,e.dataModel)});throw new s$6("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new s$6("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:p,data:d.data})},executeSearch:async(e,a,o)=>{const i=a.typeCategoryFilter,d=`${e.url}/graph/search`,p=await U$1(d,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${a.searchQuery}"`,typeCategoryFilter:i,...o?.query},signal:o?.signal,timeout:o?.timeout}),c=p.getHeader?.("content-type"),l=p.data;if(c?.includes("application/x-protobuf")){const t=new((await r$2()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new c$5({resultRows:L(t,l,e.dataModel)});throw new s$6("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new s$6("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:c,data:p.data})},executeSearchStreaming:async(e,t,a)=>{const n=`${e.url}/graph/search`;await M(e);const i=await F(n,a);i.data.body=await W(t);const d=await A(i.data.url,i.data);if(e.dataModel)return new c$4({resultRowsStream:await I(d,e.dataModel)});throw new s$6("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,t)=>fetch(e,t)};async function v(e,t,r){return b.executeApplyEdits(e,t,r)}async function S(e,t,r){return b.executeQuery(e,t,r)}async function G(e,t,r){return b.executeQueryStreaming(e,t,r)}async function x(e,t,r){return b.executeSearch(e,t,r)}async function E(e,t,r){return b.executeSearchStreaming(e,t,r)}async function T(e){return b.fetchKnowledgeGraph(e)}async function q(e){return b.refreshDataModel(e)}async function Q(e){return b.refreshServiceDefinition(e)}async function A(e,t){return b._fetchWrapper(e,t)}async function M(t){const r=t$8?.findCredential(t.url);r||(t.dataModel?await z(t):await q(t));}function R(e,t,a){if(0!==e.error_code)throw new s$6(t,a,{errorCode:e.error_code,errorMessage:e.error_message})}function j(e,t,r,a){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof n$3?r.set_param_key_value(e,s$2(t,a)):t instanceof Array?r.set_param_key_value(e,a$2(t,a)):r.set_param_key_value(e,l$1(t,a));}async function C(e,t){if(t.dataModel||await q(t),!t.dataModel)throw new s$6("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const a=await r$2(),n=!!e.options?.cascadeDelete,o=new a.GraphApplyEditsEncoder(a.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?s$1(e.options?.inputQuantizationParameters):a.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let t;e.entityAdds?.forEach((e=>{t=o.add_entity(r$1(e,a)),R(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder");})),e.relationshipAdds?.forEach((e=>{if(!e.originId||!e.destinationId)throw new s$6("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship(r$1(e,a)),R(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder");})),e.entityUpdates?.forEach((e=>{if(!e.id)throw new s$6("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity(r$1(e,a)),R(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder");})),e.relationshipUpdates?.forEach((e=>{if(!e.id)throw new s$6("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship(r$1(e,a)),R(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder");})),e.entityDeletes?.forEach((e=>{if(!e.typeName)throw new s$6("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach((e=>{t.delete_by_id(e);}));})),e.relationshipDeletes?.forEach((e=>{if(!e.typeName)throw new s$6("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach((e=>{t.delete_by_id(e);}));})),o.encode();}catch(d){throw new s$6("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:d})}const i=o.get_encoding_result();return R(i.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(i.get_byte_buffer())}async function D(e,t){const a=await r$2(),n=new a.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=a.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[r,d]of Object.entries(e.bindParameters))j(r,d,n,a);if(e.bindGeometryQuantizationParameters)u(e.bindGeometryQuantizationParameters,n);else {if(t.dataModel||await q(t),4326!==t.dataModel?.spatialReference?.wkid)throw new s$6("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=a.InputQuantizationUtil.WGS84_lossless();}e.outputQuantizationParameters&&y$1(e.outputQuantizationParameters,n,a);try{n.encode();}catch(i){throw new s$6("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:i})}const o=n.get_encoding_result();if(0!==o.error.error_code)throw new s$6("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}async function W(e){const t=await r$2(),a=new t.GraphSearchRequestEncoder;if(a.deleteLater(),a.search_query=e.searchQuery,a.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(a.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(a.start_index=e.start),null!=e.num&&(a.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{a.set_ids_filter(a$2(e.idsFilter,t));}catch(o){throw new s$6("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:o})}e.namedTypesFilter?.forEach((e=>{a.add_named_type_filter(e);}));try{a.encode();}catch(o){throw new s$6("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:o})}const n=a.get_encoding_result();if(0!==n.error.error_code)throw new s$6("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}async function F(e,r){return U$1(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...r?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r?.signal,timeout:r?.timeout})}async function P(e$1){const t=e$1.headers.get("content-type");if(t?.includes("application/x-protobuf")){const t=await e$1.arrayBuffer(),r=new((await r$2()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),e(r)}throw new s$6("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e$1.text()})}function L(e,t,a,n=new f$4({wkid:f$4.WGS84.wkid})){e.push_buffer(new Uint8Array(t));const o=[];let i=0;for(;e.next_row();){i||(i=e.get_header_keys().size());const t=new Array(i);for(let r=0;r<i;r++){const o=e.get_value(r);t[r]=E$1(o,a,n);}o.push(t);}if(e.has_error())throw new s$6("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return o}async function I(e,t,n){const o=e.headers.get("content-type");if(e.headers.get("content-length")&&s$7.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),o?.includes("application/x-protobuf")){const a=e.body?.getReader(),o=new((await r$2()).GraphQueryDecoder);return o.deleteLater(),new ReadableStream({async start(e){try{return i()}catch(d){a?.releaseLock(),e.error(new s$6("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:d})),e.close();}function i(){return a?.read().then((({done:d,value:s})=>{if(d){let t;if(o.has_error()&&(t=new s$6("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:o.error.error_code,errorMessage:o.error.error_message})),a.releaseLock(),t)throw e.error(t),t;return void e.close()}const p=L(o,s,t,n);return p.length>0&&e.enqueue(p),i()}))}}})}throw new s$6("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:e.text()})}async function z(e){const a=`${e.url}/dataModel/queryDataModel`,n=await U$1(a,{responseType:"array-buffer",query:{f:"pbf"}}),o=n.getHeader?.("content-type"),i=n.data;if(o?.includes("application/x-protobuf")){const e=(await r$2()).decode_data_model_from_protocol_buffer(new Uint8Array(i));if(!e)throw new s$6("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return _$1(e)}throw new s$6("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:n.data})}

const knowledgeGraphService = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	_fetchWrapper: A,
	executeApplyEdits: v,
	executeQuery: S,
	executeQueryStreaming: G,
	executeSearch: x,
	executeSearchStreaming: E,
	fetchKnowledgeGraph: T,
	kgRestServices: b,
	refreshDataModel: q,
	refreshServiceDefinition: Q
}, Symbol.toStringTag, { value: 'Module' }));

export { G, T, knowledgeGraphService as k, p$3 as p, t$4 as t };
