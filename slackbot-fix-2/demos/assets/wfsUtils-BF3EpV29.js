import { U as U$1, dE as n, s, dF as dt, dG as F$1, dH as $t, dI as o$1, bk as f$1, aH as M$1, a7 as G$1, dJ as I$1, bc as U$2, dK as y, dL as o$2, dM as v$1, cY as g, d0 as K$1 } from './main-B9uF9icM.js';
import { u } from './geojson-ChrN4pzQ.js';
import { o, n as n$1 } from './xmlUtils-r35QJ2K-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const T="xlink:href",F="2.0.0",S="__esri_wfs_id__",x="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",C="wfs-layer:feature-type-not-found",R="wfs-layer:geojson-not-supported",k="wfs-layer:kvp-encoding-not-supported",P="wfs-layer:malformed-json",j="wfs-layer:unknown-geometry-type",A="wfs-layer:unknown-field-type",G="wfs-layer:unsupported-spatial-reference",N="wfs-layer:unsupported-wfs-version";async function v(t,r){const n=U((await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F,...r?.customParameters},signal:r?.signal})).data);return L(t,n),n}function U(e){const t=te(e);ne(t),ae(t);const n$1=t.firstElementChild,a=n($(n$1));return {operations:D(n$1),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const I=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function M(e){for(const t of I){const r=e.findIndex((e=>e.toLowerCase()===t));if(r>=0)return e[r]}return null}function D(e){let r=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],o$1=[];if(o(e,{OperationsMetadata:{Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:({textContent:e})=>{e&&a.push(e);}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(T);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(T);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(T);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:({textContent:e})=>{e&&o$1.push(e);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{r="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),n.GetFeature.outputFormat=M(o$1)??M(a),!r)throw new s(k,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new s(R,"WFS service doesn't support GeoJSON output format");return n}function L(e,t){dt(e)&&(F$1(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=$t(t.operations.DescribeFeatureType.url)),F$1(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=$t(t.operations.GetFeature.url)));}function V(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function $(e){return n$1(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return o(e,{Name:e=>{const{name:r,prefix:n}=re(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n);},Abstract:e=>{t.description=e.textContent;},Title:e=>{t.title=e.textContent;},WGS84BoundingBox:e=>{t.extent=O(e);},DefaultCRS:e=>{const n=V(e);n&&(t.defaultSpatialReference=n,r.add(n));},OtherCRS:e=>{const t=V(e);t&&r.add(t);}}),t.title||(t.title=t.name),r.add(4326),t.supportedSpatialReferences.push(...r),t}}})}function O(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:g}}function W(e,t,r){return o$1(e,(e=>r?e.name===t&&e.namespaceUri===r:e.typeName===t||e.name===t))}async function Y(e,t,r,n={}){const{featureType:a,extent:o}=await X(e,t,r,n),{spatialReference:i}=oe(e.operations.GetFeature.url,a,n.spatialReference),{fields:s,geometryType:p,swapXY:u,objectIdField:l,geometryField:c}=await q(e,a,i,n);return {url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:s,geometryField:c,geometryType:p,objectIdField:l,spatialReference:n.spatialReference??new f$1({wkid:a.defaultSpatialReference}),extent:o,swapXY:u,wfsCapabilities:e,customParameters:n.customParameters}}async function X(e,r,n,a={}){const o=e.readFeatureTypes(),i=r?W(o,r,n):o.next().value,{spatialReference:u=new f$1({wkid:i?.defaultSpatialReference})}=a;if(null==i)throw r?new s(C,`The type '${r}' could not be found in the service`):new s(E,"The service is empty");let c=new M$1({...i.extent,spatialReference:f$1.WGS84});if(!G$1(c.spatialReference,u))try{await I$1(c.spatialReference,u,void 0,a),c=U$2(c,u);}catch{throw new s(G,"Projection not supported")}return {extent:c,spatialReference:u,featureType:i}}async function q(e,r,n,a={}){const{typeName:o}=r,[i,s$1]=await Promise.allSettled([Q(e.operations.DescribeFeatureType.url,o,a),_(e,o,n,a)]),p=e=>new s(x,`An error occurred while getting info about the feature type '${o}'`,{error:e});if("rejected"===i.status)throw p(i.reason);if("rejected"===s$1.status)throw p(s$1.reason);const{fields:u,errors:l}=i.value??{},c=i.value?.geometryType||s$1.value?.geometryType,m=s$1.value?.swapXY??!1;if(null==c)throw new s(j,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:c,fields:u,errors:l});return {...z(u??[]),geometryType:c,swapXY:m}}function z(e){const t=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new y({name:S,type:"oid",alias:S}),e.unshift(r)),{geometryField:t?.name??null,objectIdField:r.name,fields:e}}async function _(t,r,n,a={}){let o,i=!1;const[s,p]=await Promise.all([K(t.operations.GetFeature.url,r,n,t.operations.GetFeature.outputFormat,{...a,count:1}),U$1(t.operations.GetFeature.url,{responseType:"text",query:Z(r,n,void 0,{...a,count:1}),signal:a?.signal})]),u$1="FeatureCollection"===s.type&&s.features[0]?.geometry;if(u$1){let e;switch(o=o$2.fromJSON(u(u$1.type)),u$1.type){case"Point":e=u$1.coordinates;break;case"LineString":case"MultiPoint":e=u$1.coordinates[0];break;case"MultiLineString":case"Polygon":e=u$1.coordinates[0][0];break;case"MultiPolygon":e=u$1.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(i=!0);}}return {geometryType:o,swapXY:i}}async function Q(t,r,n){return H(r,(await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:r,TYPENAMES:r,...n?.customParameters},signal:n?.signal})).data)}function H(e,r){const{name:a}=re(e),o=te(r);ae(o);const i=o$1(n$1(o.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===a));if(null!=i){const e=i.getAttribute("type"),t=e?o$1(n$1(o.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===re(e).name)):o$1(n$1(i,{complexType:e=>e}),(()=>!0));if(t)return B(t)}throw new s(C,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const J=new Set(["objectid","fid"]);function B(e){const r=[],n=[];let a;const o$1=n$1(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const i of o$1){const o$1=i.getAttribute("name");if(!o$1)continue;let s$1,p;if(i.hasAttribute("type")?s$1=re(i.getAttribute("type")).name:o(i,{simpleType:{restriction:e=>(s$1=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!s$1)continue;const u="true"===i.getAttribute("nillable");let l=!1;switch(s$1.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new y({name:o$1,alias:o$1,type:"integer",nullable:u,length:K$1("integer")}));break;case"float":case"double":case"decimal":n.push(new y({name:o$1,alias:o$1,type:"double",nullable:u,length:K$1("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new y({name:o$1,alias:o$1,type:"string",nullable:u,length:p??K$1("string")}));break;case"datetime":case"date":n.push(new y({name:o$1,alias:o$1,type:"date",nullable:u,length:p??K$1("date")}));break;case"pointpropertytype":a="point",l=!0;break;case"multipointpropertytype":a="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,r.push(new s(j,`geometry type '${s$1}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new s(A,`Unknown field type '${s$1}'`,{type:(new XMLSerializer).serializeToString(e)}));}l&&n.push(new y({name:o$1,alias:o$1,type:"geometry",nullable:u}));}for(const t of n)if("integer"===t.type&&!t.nullable&&J.has(t.name.toLowerCase())){t.type="oid";break}return {geometryType:a,fields:n,errors:r}}async function K(r,n,a,o,i){let{data:s$1}=await U$1(r,{responseType:"text",query:Z(n,a,o,i),signal:i?.signal});s$1=s$1.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s$1)}catch(p){throw new s(P,"Error while parsing the response",{response:s$1,error:p})}}function Z(e,t,r,n){const a="number"==typeof t?t:t.wkid;return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:r,SRSNAME:"EPSG:"+a,STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}async function ee(t,r,n){const a=await U$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:r,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(o?.groups)return +o.groups.numberMatched}function te(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:r??t}}function ne(e){const r=e.firstElementChild?.getAttribute("version");if(r&&r!==F)throw new s(N,`Unsupported WFS version ${r}. Supported version: ${F}`)}function ae(e){let r="",n="";if(o(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),r)throw new s(`wfs-layer:${r}`,n)}function oe(e,t,r){const n={wkid:t.defaultSpatialReference},a=null!=r?.wkid?{wkid:r.wkid}:n;return {spatialReference:a,getFeatureSpatialReference:v$1(e)||a.wkid&&t.supportedSpatialReferences.includes(a.wkid)?{wkid:a.wkid}:{wkid:t.defaultSpatialReference}}}

export { K, S, W, Y, ee as e, oe as o, v, z };
