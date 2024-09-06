import { aX as e, aY as y$1, aI as M$1, fm as j$1, aZ as c, c2 as f$1, e4 as o$1, a4 as V$2, s, jz as o$3, G as x$1, f_ as p$4, jA as r, jB as R$1, q, d_ as n$1, d$ as f$2, e2 as t, e0 as u$1, e1 as j$2, e3 as m$2, b3 as d$1, fn as C$1, a_ as v$1, C as a, ac as t$1, jC as e$1, jD as p$5, jE as I$1, U as U$1, fY as o$4, X as a$1, I as I$2, fr as v$2, ey as r$1, ed as b$1 } from './main-069f4a5d.js';
import { o as o$2 } from './xmlUtils-8a76dfc0.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l;let n=l=class extends f$1{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null;}clone(){const t=new l;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};e([y$1({type:M$1,json:{read:{source:"fullExtent"}}})],n.prototype,"fullExtent",void 0),e([y$1({type:String,json:{read:{source:"id"}}})],n.prototype,"id",void 0),e([y$1({type:j$1,json:{read:{source:"tileInfo"}}})],n.prototype,"tileInfo",void 0),n=l=e([c("esri.layer.support.TileMatrixSet")],n);const p$3=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var o;let i=o=class extends f$1{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null;}clone(){const r=new o;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};e([y$1({json:{read:{source:"id"}}})],i.prototype,"id",void 0),e([y$1({json:{read:{source:"title"}}})],i.prototype,"title",void 0),e([y$1({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),e([y$1({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),e([y$1({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),e([y$1({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=o=e([c("esri.layer.support.WMTSStyle")],i);const p$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p$1;let m$1=p$1=class extends f$1{constructor(t){super(t),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null;}readFullExtent(t,e){return (t=e.fullExtent)?M$1.fromJSON(t):null}readFullExtents(t,e){return e.fullExtents?.length?e.fullExtents.map((t=>M$1.fromJSON(t))):e.tileMatrixSets?.map((t=>M$1.fromJSON(t.fullExtent))).filter((t=>t))??[]}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.includes("image/")||e&&!e.includes(t))&&(t.includes("image/")||(t="image/"+t),e&&!e.includes(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t);}get styleId(){let t=this._get("styleId");return t||(t=this.styles?.at(0)?.id??""),t}set styleId(t){this._set("styleId",t);}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new p$1;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};e([y$1()],m$1.prototype,"description",void 0),e([y$1()],m$1.prototype,"fullExtent",void 0),e([o$1("fullExtent",["fullExtent"])],m$1.prototype,"readFullExtent",null),e([y$1({readOnly:!0})],m$1.prototype,"fullExtents",void 0),e([o$1("fullExtents",["fullExtents","tileMatrixSets"])],m$1.prototype,"readFullExtents",null),e([y$1()],m$1.prototype,"id",void 0),e([y$1()],m$1.prototype,"imageFormat",null),e([y$1({json:{read:{source:"formats"}}})],m$1.prototype,"imageFormats",void 0),e([y$1()],m$1.prototype,"layer",void 0),e([y$1()],m$1.prototype,"parent",void 0),e([y$1()],m$1.prototype,"styleId",null),e([y$1({type:V$2.ofType(p$2),json:{read:{source:"styles"}}})],m$1.prototype,"styles",void 0),e([y$1({json:{write:{ignoreOrigin:!0}}})],m$1.prototype,"title",void 0),e([y$1()],m$1.prototype,"tileMatrixSetId",void 0),e([y$1({readOnly:!0})],m$1.prototype,"tileMatrixSet",null),e([y$1({type:V$2.ofType(p$3),json:{read:{source:"tileMatrixSets"}}})],m$1.prototype,"tileMatrixSets",void 0),m$1=p$1=e([c("esri.layers.support.WMTSSublayer")],m$1);const h$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u=90.71428571428571;function p(e){const n=e.replaceAll(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(n,"text/xml").documentElement))throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function f(e,n){e=e.replaceAll(/ows:/gi,"");const i=(new DOMParser).parseFromString(e,"text/xml").documentElement,r=new Map,l=new Map,o=g("Contents",i);if(!o)throw new s("wmtslayer:wmts-capabilities-xml-is-not-valid");const s$1=g("OperationsMetadata",i),a=s$1?.querySelector("[name='GetTile']"),c=a?.getElementsByTagName("Get"),u=c&&Array.prototype.slice.call(c),p=n.url?.indexOf("https"),f=void 0!==p&&p>-1;let d,m,h=n.serviceMode,T=n?.url;if(u?.length&&u.some((e=>{const t=g("Constraint",e);return !t||C("AllowedValues","Value",h,t)?(T=e.attributes[0].nodeValue,!0):(!t||C("AllowedValues","Value","RESTful",t)||C("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!C("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)})),!T)if(m)T=m,h="RESTful";else if(d)T=d,h="KVP";else {const e=g("ServiceMetadataURL",i);T=e?.getAttribute("xlink:href");}const y=T.indexOf("1.0.0/");-1===y&&"RESTful"===h?T+="/":y>-1&&(T=T.substring(0,y)),"KVP"===h&&(T+=y>-1?"":"?"),f&&(T=T.replace(/^http:/i,"https:"));const R=w("ServiceIdentification>ServiceTypeVersion",i),S=w("ServiceIdentification>AccessConstraints",i),A=S&&/^none$/i.test(S)?null:S,V=x("Layer",o),b=x("TileMatrixSet",o),E=V.map((e=>{const t=w("Identifier",e);return r.set(t,e),M(t,e,b,f,R)}));return {copyright:A,dimensionMap:l,layerMap:r,layers:E,serviceMode:h,tileUrl:T}}function d(e){return e.layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((n=>{n.scale=96*n.scale/t.dpi,n.resolution=j(t.spatialReference?.wkid,n.scale*u/96,e.id);})),t.dpi=96);}));})),e}function m(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(m(i)&&i.nodeName===e)return i}return null}function x(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];m(r)&&r.nodeName===e&&n.push(r);}return n}function h(t,n){const i=[];for(let e=0;e<n.childNodes.length;e++){const r=n.childNodes[e];m(r)&&r.nodeName===t&&i.push(r);}return i.map((e=>e.textContent)).filter(q)}function w(e,t){return e.split(">").forEach((e=>{t&&(t=g(e,t));})),t&&t.textContent}function C(e,t,n,i){let r;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=g(t,i),l=e?.textContent;if(l===n||n.split(":")&&n.split(":")[1]===l)return r=i,!0}return !1})),r}function M(e,t,n,i,r){const l=w("Abstract",t),o=h("Format",t);return {id:e,fullExtent:A(t),fullExtents:V$1(t),description:l,formats:o,styles:b(t,i),title:w("Title",t),tileMatrixSets:E(r,t,n)}}function T(e,t){const n=[],i=e.layerMap?.get(t);if(!i)return null;const r=x("ResourceURL",i),l=x("Dimension",i);let o,s,a,c;return l.length&&(o=w("Identifier",l[0]),s=h("Default",l[0])||h("Value",l[0])),l.length>1&&(a=w("Identifier",l[1]),c=h("Default",l[1])||h("Value",l[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:c}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&s.length)if(t.includes("{"+o+"}"))t=t.replace("{"+o+"}","{dimensionValue}");else {const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2));}if(a&&c.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else {const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2));}n.push({template:t,format:e.getAttribute("format"),resourceType:"tile"});}})),n}function y(e,t,n,i,r,l,o,s){const a=R(e,t,i);if(!(a?.length>0))return "";const{dimensionMap:c}=e,u=c.get(t).dimensions?.[0],p=c.get(t).dimensions2?.[0];return a[o%a.length].template.replaceAll(/\{Style\}/gi,r??"").replaceAll(/\{TileMatrixSet\}/gi,n??"").replaceAll(/\{TileMatrix\}/gi,l).replaceAll(/\{TileRow\}/gi,""+o).replaceAll(/\{TileCol\}/gi,""+s).replaceAll(/\{dimensionValue\}/gi,u).replaceAll(/\{dimensionValue2\}/gi,p)}function R(e,t,n){const i=T(e,t),r=i?.filter((e=>e.format===n));return (r?.length?r:i)??[]}function S(e,t,n,i){const{dimensionMap:r}=e,l=T(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions?.[0],s=r.get(t).dimensions2?.[0];o=l[0].template,o.endsWith(".xxx")&&(o=o.slice(0,-4)),o=o.replaceAll(/\{Style\}/gi,i),o=o.replaceAll(/\{TileMatrixSet\}/gi,n),o=o.replaceAll(/\{TileMatrix\}/gi,"{level}"),o=o.replaceAll(/\{TileRow\}/gi,"{row}"),o=o.replaceAll(/\{TileCol\}/gi,"{col}"),o=o.replaceAll(/\{dimensionValue\}/gi,e),o=o.replaceAll(/\{dimensionValue2\}/gi,s);}return o}function A(e){const t=g("WGS84BoundingBox",e),n=t?w("LowerCorner",t).split(" "):["-180","-90"],i=t?w("UpperCorner",t).split(" "):["180","90"];return {xmin:parseFloat(n[0]),ymin:parseFloat(n[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function V$1(e){const t=[];return o$2(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const n=e.getAttribute("crs").toLowerCase(),i=I(n),r=n.includes("epsg")&&o$3(i.wkid);let l,a,c,u;o$2(e,{LowerCorner:e=>{[l,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([l,a]=[a,l]);},UpperCorner:e=>{[c,u]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([c,u]=[u,c]);}}),t.push({xmin:l,ymin:a,xmax:c,ymax:u,spatialReference:i});}}),t}function b(e,t){return x("Style",e).map((e=>{const n=g("LegendURL",e),i=g("Keywords",e),r=i?h("Keyword",i):[];let l=n&&n.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return {abstract:w("Abstract",e),id:w("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:w("Title",e)}}))}function E(e,t,n){return x("TileMatrixSetLink",t).map((t=>L(e,t,n)))}function L(e,t,n){const i=g("TileMatrixSet",t).textContent,r=h("TileMatrix",t),l=n.find((e=>{const t=g("Identifier",e),n=t?.textContent;return !!(n===i||i.split(":")&&i.split(":")[1]===n)})),o=g("TileMatrixSetLimits",t),s=o&&x("TileMatrixLimits",o),a=new Map;if(s?.length)for(const c of s){const e=g("TileMatrix",c).textContent,t=+g("MinTileRow",c).textContent,n=+g("MaxTileRow",c).textContent,i=+g("MinTileCol",c).textContent,r=+g("MaxTileCol",c).textContent;a.set(e,{minCol:i,maxCol:r,minRow:t,maxRow:n});}const u=w("SupportedCRS",l).toLowerCase(),p=N(l,u),f=p.spatialReference,d=g("TileMatrix",l),m=[parseInt(w("TileWidth",d),10),parseInt(w("TileHeight",d),10)],M=[];if(r.length)r.forEach(((e,t)=>{const n=C("TileMatrix","Identifier",e,l);M.push(k(n,u,t,i,a));}));else {x("TileMatrix",l).forEach(((e,t)=>{M.push(k(e,u,t,i,a));}));}const T=F$1(e,l,p,m,M[0]).toJSON(),y=new j$1({dpi:96,spatialReference:f,size:m,origin:p,lods:M}).toJSON();return {id:i,fullExtent:T,tileInfo:y}}function I(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const n=O(e);return null!=n&&(t=n),{wkid:t}}function N(e,t){return v(g("TileMatrix",e),t)}function v(e,t){const n=I(t),[i,l]=w("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&o$3(n.wkid);return new x$1(s?{x:l,y:i,spatialReference:n}:{x:i,y:l,spatialReference:n})}function F$1(e,t,n,r,l){const o=g("BoundingBox",t);let s,a,c,u,p,f;if(o&&(s=w("LowerCorner",o).split(" "),a=w("UpperCorner",o).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),f=parseFloat(a[1]);else {const e=g("TileMatrix",t),i=parseInt(w("MatrixWidth",e),10),o=parseInt(w("MatrixHeight",e),10);c=n.x,f=n.y,u=c+i*r[0]*l.resolution,p=f-o*r[1]*l.resolution;}return U(e,n.spatialReference,n)?new M$1(p,c,f,u,n.spatialReference):new M$1(c,p,u,f,n.spatialReference)}function U(e,t,n){return "1.0.0"===e&&o$3(t.wkid)&&!(n.spatialReference.isGeographic&&n.x<-90&&n.y>=-90)}var D;function O(e){return e.includes("crs84")||e.includes("crs:84")?D.CRS84:e.includes("crs83")||e.includes("crs:83")?D.CRS83:e.includes("crs27")||e.includes("crs:27")?D.CRS27:null}function k(e,t,n,i,r){const l=I(t),o=w("Identifier",e);let s=parseFloat(w("ScaleDenominator",e));const c=j(l.wkid,s,i);s*=96/u;const p=+w("MatrixWidth",e),f=+w("MatrixHeight",e),{maxCol:d=p-1,maxRow:m=f-1,minCol:g=0,minRow:x=0}=r.get(o)??{},{x:h,y:C}=v(e,t);return new p$4({cols:[g,d],level:n,levelValue:o,origin:[h,C],scale:s,resolution:c,rows:[x,m]})}function j(e,t,i){let r$1;return r$1=r.hasOwnProperty(""+e)?r.values[r[e]]:"default028mm"===i?6370997*Math.PI/180:R$1(e).metersPerDegree,7*t/25e3/r$1}!function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27";}(D||(D={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var W;const F={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},V=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let B=W=class extends(n$1(f$2(t(u$1(j$2(m$2(b$1))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([d$1((()=>this.activeLayer),((e,t)=>{t&&!this.sublayers?.includes(t)&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this);}),C$1),v$1((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this,e.parent=this;}),C$1),v$1((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null;}),C$1),d$1((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=null,r.parent=null;if(e)for(const r of e)r.layer=this,r.parent=this;}),C$1)]);}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(a).then((()=>this._fetchService(e))).catch((e=>{throw a(e),new s("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new h$1);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i?.layerIdentifier;let o=null;const l=i?.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=s?.format,m=s?.style;return new h$1({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=t$1("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId};}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return $(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(q)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new e$1(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e);}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e);}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,a=new p$5({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new I$1({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:a})}async fetchTile(e,r,i,s={}){const{signal:a}=s,o=this.getTileUrl(e,r,i),{data:l}=await U$1(o,{responseType:"image",signal:a});return l}async fetchImageBitmapTile(e,r,i,s={}){const{signal:a}=s;if(this.fetchTile!==W.prototype.fetchTile){const t=await this.fetchTile(e,r,i,s);return o$4(t,e,r,i,a)}const o=this.getTileUrl(e,r,i),{data:l}=await U$1(o,{responseType:"blob",signal:a});return o$4(l,e,r,i,a)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],a=s?s.levelValue||`${s.level}`:`${e}`;let o=this.resourceInfo?"":y({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);if(!o){o=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,a).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`);}return o=this._appendCustomLayerParameters(o),o}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=S({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return F[r.toLowerCase()]&&(s=F[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return ""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),p(t.data);}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),p(t.data),this.serviceMode=i;}catch(r){throw new s("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=d(t.data):t.data=f(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"});}async _getCapabilities(e,r){const i=this._getCapabilitiesUrl(e);return await U$1(i,{...r,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...a$1(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=I$2(e),i={...r.query,...t},s=v$2(i);return ""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=I$2(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const e=`/${this.version}/WMTSCapabilities.xml`,r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=I$2(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e];})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?a$1(e):{},t.forEach((t=>{e.hasOwnProperty(t)||V.has(t)||(e[t]=r[t]);})));}return e}};function $(e,t){return e.map((e=>{const r=new h$1;return r.read(e,t),r}))}e([y$1()],B.prototype,"dimensionMap",void 0),e([y$1()],B.prototype,"layerMap",void 0),e([y$1({type:h$1,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],B.prototype,"activeLayer",void 0),e([o$1("service","activeLayer",["layers"])],B.prototype,"readActiveLayerFromService",null),e([o$1(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],B.prototype,"readActiveLayerFromItemOrWebDoc",null),e([r$1(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:j$1},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],B.prototype,"writeActiveLayer",null),e([y$1({type:String,value:"",json:{write:!0}})],B.prototype,"copyright",void 0),e([y$1({type:["show","hide"]})],B.prototype,"listMode",void 0),e([y$1({json:{read:!0,write:!0}})],B.prototype,"blendMode",void 0),e([y$1({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],B.prototype,"customParameters",void 0),e([o$1(["portal-item","web-document"],"customParameters")],B.prototype,"readCustomParameters",null),e([y$1({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],B.prototype,"customLayerParameters",void 0),e([y$1({type:M$1,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],B.prototype,"fullExtent",void 0),e([y$1({readOnly:!0})],B.prototype,"fullExtents",null),e([y$1({type:["WebTiledLayer"]})],B.prototype,"operationalLayerType",void 0),e([y$1()],B.prototype,"resourceInfo",void 0),e([y$1()],B.prototype,"serviceMode",void 0),e([o$1(["portal-item","web-document"],"serviceMode",["templateUrl"])],B.prototype,"readServiceMode",null),e([y$1({type:V$2.ofType(h$1)})],B.prototype,"sublayers",void 0),e([o$1("service","sublayers",["layers"])],B.prototype,"readSublayersFromService",null),e([y$1({readOnly:!0})],B.prototype,"supportedSpatialReferences",null),e([y$1({readOnly:!0})],B.prototype,"tilemapCache",null),e([y$1({json:{read:{source:"title"}}})],B.prototype,"title",null),e([y$1({json:{read:!1},readOnly:!0,value:"wmts"})],B.prototype,"type",void 0),e([y$1({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],B.prototype,"url",null),e([y$1()],B.prototype,"version",void 0),B=W=e([c("esri.layers.WMTSLayer")],B);const K=B;

export { K as default };
