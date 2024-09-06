import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { cF as p$1, cG as d$1, kh as i, ki as n$1, kj as n$2, b4 as n$3, aX as e$1, aY as y, kk as n$4, eP as y$1, ey as r$2, aI as M, bl as f$1, f6 as c, aZ as c$1, c2 as f$2, c3 as v, a5 as c$2, e4 as o$2, gv as i$1, b$ as f$3, a3 as R$1, c1 as s, c0 as n$5, U as U$1, dZ as S$1, b1 as k, a_ as v$1, s as s$1, ay as e$2, a4 as V, q, eb as y$2, c5 as r$3, be as W, W as has, kl as o$3, K as s$2, km as b, cS as i$2 } from './main-069f4a5d.js';
import { n as n$6, p as p$2 } from './popupUtils-468e7e4c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const o=t[r].size;"number"==typeof o&&(e+=o,n++);}return e/n}function n(t,n){return "number"==typeof t?t:t?.stops?.length?e(t.stops):n}function r$1(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:o}=e;return (n(r,t)+n(o,t))/2}));let o=0;const s=r.length;if(0===s)return t;for(let n=0;n<s;n++)o+=r[n];const f=Math.floor(o/s);return Math.max(f,t)}function o$1(e){const n=e?.renderer,o=e?.pointerType,s="touch"===o?9:6;if(!n)return s;const f="visualVariables"in n?r$1(s,n.visualVariables):s;if("simple"===n.type)return t(f,n.symbol);if("unique-value"===n.type){let e=f;return n.uniqueValueInfos?.forEach((n=>{e=t(e,n.symbol);})),e}if("class-breaks"===n.type){let e=f;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol);})),e}return "dot-density"===n.type||n.type,f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(e,r){const{dpi:n,gdbVersion:s,geometry:o,geometryPrecision:a,height:m,historicMoment:p,layerOption:f,mapExtent:y,maxAllowableOffset:u,returnFieldName:c,returnGeometry:d,returnUnformattedValues:g,returnZ:x,spatialReference:h,timeExtent:b,tolerance:E,width:O}=e.toJSON(),{dynamicLayers:S,layerDefs:j,layerIds:N}=l(e),$=null!=r?.geometry?r.geometry:null,I={historicMoment:p,geometryPrecision:a,maxAllowableOffset:u,returnFieldName:c,returnGeometry:d,returnUnformattedValues:g,returnZ:x,tolerance:E},R=$&&$.toJSON()||o;I.imageDisplay=`${O},${m},${n}`,s&&(I.gdbVersion=s),R&&(delete R.spatialReference,I.geometry=JSON.stringify(R),I.geometryType=p$1(R));const U=h??R?.spatialReference??y?.spatialReference;if(U&&(I.sr=d$1(U)),I.time=b?[b.start,b.end].join(","):null,y){const{xmin:e,ymin:t,xmax:r,ymax:i}=y;I.mapExtent=`${e},${t},${r},${i}`;}return j&&(I.layerDefs=j),S&&!j&&(I.dynamicLayers=S),I.layers="popup"===f?"visible":f,N&&!S&&(I.layers+=`:${N.join(",")}`),I}function l(e){const{mapExtent:t,floors:i$1,width:o,sublayers:l,layerIds:m,layerOption:p,gdbVersion:f}=e,y=l?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===p,c={},d=i({extent:t,width:o,spatialReference:t?.spatialReference}),g=[],x=e=>{const t=0===d,r=0===e.minScale||d<=e.minScale,i=0===e.maxScale||d>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(x);else {if(!1===m?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;g.unshift(e);}};if(l?.forEach(x),l&&!g.length)c.layerIds=[];else {const e=n$1(g,y,f),t=g.map((e=>{const t=n$2(i$1,e);return e.toExportImageJSON(t)}));if(e)c.dynamicLayers=JSON.stringify(t);else {if(l){let e=g.map((({id:e})=>e));m&&(e=e.filter((e=>m.includes(e)))),c.layerIds=e;}else m?.length&&(c.layerIds=m);const e=a$2(i$1,g);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(c.layerDefs=JSON.stringify(t));}}}return c}function a$2(t,r){const i=!!t?.length,s=r.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return s.length?s.map((r=>{const i=n$2(t,r),s=n$3(i,r.definitionExpression);return {id:r.id,definitionExpression:s??void 0}})):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var a$1;let u$1=a$1=class extends f$2{static from(t){return v(a$1,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400;}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime();}};e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"dpi",void 0),e$1([y()],u$1.prototype,"floors",void 0),e$1([y({type:String,json:{write:!0}})],u$1.prototype,"gdbVersion",void 0),e$1([y({types:n$4,json:{read:y$1,write:!0}})],u$1.prototype,"geometry",void 0),e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"geometryPrecision",void 0),e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"height",void 0),e$1([y({type:Date})],u$1.prototype,"historicMoment",void 0),e$1([r$2("historicMoment")],u$1.prototype,"writeHistoricMoment",null),e$1([y({type:[Number],json:{write:!0}})],u$1.prototype,"layerIds",void 0),e$1([y({type:["top","visible","all","popup"],json:{write:!0}})],u$1.prototype,"layerOption",void 0),e$1([y({type:M,json:{write:!0}})],u$1.prototype,"mapExtent",void 0),e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"maxAllowableOffset",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"returnFieldName",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"returnGeometry",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"returnM",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"returnUnformattedValues",void 0),e$1([y({type:Boolean,json:{write:!0}})],u$1.prototype,"returnZ",void 0),e$1([y({type:f$1,json:{write:!0}})],u$1.prototype,"spatialReference",void 0),e$1([y()],u$1.prototype,"sublayers",void 0),e$1([y({type:c,json:{write:!0}})],u$1.prototype,"timeExtent",void 0),e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"tolerance",void 0),e$1([y({type:Number,json:{write:!0}})],u$1.prototype,"width",void 0),u$1=a$1=e$1([c$1("esri.rest.support.IdentifyParameters")],u$1);const d=u$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let u=class extends f$2{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null;}readFeature(r,t){return c$2.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(r,e){if(!r)return;const{attributes:t,geometry:o}=r;t&&(e.attributes={...t}),null!=o&&(e.geometry=o.toJSON(),e.geometryType=i$1.toJSON(o.type));}};e$1([y({type:String,json:{write:!0}})],u.prototype,"displayFieldName",void 0),e$1([y({type:c$2})],u.prototype,"feature",void 0),e$1([o$2("feature",["attributes","geometry"])],u.prototype,"readFeature",null),e$1([r$2("feature")],u.prototype,"writeFeature",null),e$1([y({type:Number,json:{write:!0}})],u.prototype,"layerId",void 0),e$1([y({type:String,json:{write:!0}})],u.prototype,"layerName",void 0),u=e$1([c$1("esri.rest.support.IdentifyResult")],u);const m$1=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function f(u,i,f){const c=(i=a(i)).geometry?[i.geometry]:[],l=f$3(u);return l.path+="/identify",R$1(c).then((e=>{const t=o(i,{geometry:e?.[0]}),u=s({...l.query,f:"json",...t}),a=n$5(u,f);return U$1(l.path,a).then(m).then((r=>p(r,i.sublayers)))}))}function m(r){const e=r.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map((r=>m$1.fromJSON(r))),e}function a(r){return r=d.from(r)}function p(r,e){if(!e?.length)return r;const t=new Map;function o(r){t.set(r.id,r),r.sublayers&&r.sublayers.forEach(o);}e.forEach(o);for(const s of r.results)s.feature.sourceLayer=t.get(s.layerId);return r}

let G=null;function S(e,t){return "tile"===t.type||"map-image"===t.type}let U=class extends S$1{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=k((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})));}));}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution);};this.addHandles([v$1((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})]);}async fetchPopupFeaturesAtLocation(e,t){const{layerView:{layer:r,view:{scale:s}}}=this;if(!e)throw new s$1("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const i=_(r.sublayers,s,t);if(!i.length)return [];const a=await A(r,i);if(!((r.capabilities?.operations?.supportsIdentify??!0)&&r.version>=10.5)&&!a)throw new s$1("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return a?this._fetchPopupFeaturesUsingQueries(e,i,t):this._fetchPopupFeaturesUsingIdentify(e,i,t)}clearHighlights(){this.highlightGraphics?.removeAll();}highlight(e){const r=this.highlightGraphics;if(!r)return e$2();let o=null;if(e instanceof c$2?o=[e]:V.isCollection(e)&&e.length>0?o=e.toArray():Array.isArray(e)&&e.length>0&&(o=e),o=o?.filter(q),!o?.length)return e$2();for(const t of o){const e=t.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(t.visible=!1);}return r.addMany(o),e$2((()=>r.removeMany(o??[])))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:r,highlightGraphicUpdated:s}=this;if(r&&s)for(const i of e){const e=i.sourceLayer&&"renderer"in i.sourceLayer&&i.sourceLayer.renderer;i.sourceLayer&&"geometryType"in i.sourceLayer&&"point"===i.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(i).then((async o=>{o||=new y$2;let a=null;const n="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;n&&(G||(G=(await __vitePreload(() => import('./main-069f4a5d.js').then(n => n.qJ),true?["./main-069f4a5d.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).getSize),a=G(n,i,{view:t.type,scale:t.scale,shape:"simple-marker"===o.type?o.style:null})),a||="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16,r.includes(i)&&(i.symbol=new y$2({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(i,"symbol"),i.visible=!0);}));}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(this._highlightGeometriesResolution=e,!i||!s?.length||!t.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),a=new Map;for(const c of s)if(!this._featuresResolutions.has(c)||this._featuresResolutions.get(c)>o){const e=c.sourceLayer;r$3(a,e,(()=>new Map)).set(c.getObjectId(),c);}const l=Array.from(a,(([e,t])=>{const s=e.createQuery();return s.objectIds=[...t.keys()],s.outFields=[e.objectIdField],s.returnGeometry=!0,s.maxAllowableOffset=o,s.outSpatialReference=r.spatialReference,e.queryFeatures(s)})),p=await Promise.all(l);if(!this.destroyed)for(const{features:n}of p)for(const e of n){const t=e.sourceLayer,r=a.get(t).get(e.getObjectId());r&&s.includes(r)&&(r.geometry=e.geometry,i(r,"geometry"),this._featuresResolutions.set(r,o));}}_getTargetResolution(e){const t=e*W(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const s=await this._createIdentifyParameters(e,t,r);if(null==s)return [];const{results:i}=await f(this.layerView.layer.parsedUrl,s,r);return i.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:s,layer:i,timeExtent:o,view:{spatialReference:a,scale:n}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load(r).catch((()=>{})))));const l=Math.min(has("mapservice-popup-identify-max-tolerance"),i.allSublayers.reduce(((e,t)=>t.renderer?o$1({renderer:t.renderer,pointerType:r?.pointerType}):e),2)),p=this.createFetchPopupFeaturesQueryGeometry(e,l),c=o$3(n,a),u=Math.round(p.width/c),h=new M({xmin:p.center.x-c*u,ymin:p.center.y-c*u,xmax:p.center.x+c*u,ymax:p.center.y+c*u,spatialReference:p.spatialReference});return new d({floors:s,gdbVersion:"gdbVersion"in i?i.gdbVersion:void 0,geometry:e,height:u,layerOption:"popup",mapExtent:h,returnGeometry:!0,spatialReference:a,sublayers:i.sublayers,timeExtent:o,tolerance:l,width:u})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:o}}=this,a=t.map((async({sublayer:t,popupTemplate:s})=>{if(await t.load(r).catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return [];const a=t.createQuery(),n=o$1({renderer:t.renderer,pointerType:r?.pointerType}),l=this.createFetchPopupFeaturesQueryGeometry(e,n),c=new Set,[u]=await Promise.all([n$6(t,s),t.renderer?.collectRequiredFields(c,t.fieldsIndex)]);s$2(r),b(c,t.fieldsIndex,u);const h=Array.from(c).sort();if(a.geometry=l,a.outFields=h,a.timeExtent=o,i){const e=i.clone(),r=n$2(e,t);null!=r&&(a.where=a.where?`(${a.where}) AND (${r})`:r);}const y=this._getTargetResolution(l.width/n),m=await R(s);s$2(r);const f="point"===t.geometryType||m&&m.arcadeUtils.hasGeometryOperations(s);f||(a.maxAllowableOffset=y);let{features:b$1}=await t.queryFeatures(a,r);const v=f?0:y;b$1=await T(t,b$1,r);for(const e of b$1)this._featuresResolutions.set(e,v);return b$1}));return (await Promise.allSettled(a)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(q)}};function _(e,t,r){const s=[];if(!e)return s;const i=e=>{const o=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&a)if(e.sublayers)e.sublayers.forEach(i);else if(e.popupEnabled){const t=p$2(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&s.unshift({sublayer:e,popupTemplate:t});}};return e.map(i),s}function R(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?i$2():Promise.resolve()}async function A(e,t){if(e.capabilities?.operations?.supportsQuery)return !0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return !1}}async function T(e,t,r){const s=e.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(t=s.valueExpression?await Promise.all(t.map((e=>s.getSymbolAsync(e,r).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=s.getSymbol(e)))),t}e$1([y({constructOnly:!0})],U.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),e$1([y({constructOnly:!0})],U.prototype,"layerView",void 0),e$1([y({constructOnly:!0})],U.prototype,"highlightGraphics",void 0),e$1([y({constructOnly:!0})],U.prototype,"highlightGraphicUpdated",void 0),e$1([y({constructOnly:!0})],U.prototype,"updatingHandles",void 0),U=e$1([c$1("esri.views.layers.support.MapService")],U);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(t,r,i,a=new M){let o=0;if("2d"===i.type)o=r*(i.resolution??0);else if("3d"===i.type){const n=i.overlayPixelSizeInMapUnits(t),a=i.basemapSpatialReference;o=null==a||a.equals(i.spatialReference)?r*n:W(a)/W(i.spatialReference);}const s=t.x-o,l=t.y-o,m=t.x+o,p=t.y+o,{spatialReference:c}=i;return a.xmin=Math.min(s,m),a.ymin=Math.min(l,p),a.xmax=Math.max(s,m),a.ymax=Math.max(l,p),a.spatialReference=c,a}new M;

export { S, U, r };
