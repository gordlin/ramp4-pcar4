const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-CTk2tvKz.js","./main-h69rSE3m.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { eP as p$1, H as s$1, ax as e, i9 as R, J as s$2, ia as p, eA as l, d$ as u$1, e0 as j, e2 as m, ib as t$1, s as s$3, B as a$1, U as U$1, fr as v, aW as e$1, aX as y, e3 as o, i0 as v$1, e6 as d, aY as c, ec as b } from './main-h69rSE3m.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class a{constructor(a,t,s,e){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in a?(this.values=a.pixelData,this.width=a.width,this.height=a.height,this.noDataValue=a.noDataValue):(this.values=a,this.width=t,this.height=s,this.noDataValue=e);}get hasNoDataValues(){if(null==this._hasNoDataValues){const a=this.noDataValue;this._hasNoDataValues=this.values.includes(a);}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:a,values:t}=this;let s=1/0,e=-1/0,i=!0;for(const u of t)u===a?this._hasNoDataValues=!0:(s=u<s?u:s,e=u>e?u:e,i=!1);i?(this._minValue=0,this._maxValue=0):(this._minValue=s,this._maxValue=e>-3e38?e:0);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=p$1(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>s$1.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)));}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),e((()=>{i.removed=!0,R(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={};}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:s})}return this._promise?this._promise.then((()=>(s$2(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class r extends h{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}release(){--this.ref<=0&&(t.forEach(((e,r)=>{e===this&&t.delete(r);})),this.destroy());}}const t=new Map;function s(e=null){let s=t.get(e);return s||(null!=e?(s=new r((r=>e.immediate.schedule(r))),t.set(e,s)):(s=new r,t.set(null,s))),++s.ref,s}

let w=class extends(p(l(u$1(j(m(b)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=s();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=t$1(this._lercDecoder);}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return {operations:{supportsTileMap:!1}};return {operations:{supportsTileMap:t.includes("tilemap")}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$3("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(a$1).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,i,o){const s=null!=(o=o||{signal:null}).signal?o.signal:o.signal=(new AbortController).signal,a$1={responseType:"array-buffer",signal:s},p={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,o))).then((()=>U$1(this.getTileUrl(e,t,i),a$1))).then((e=>this._lercDecoder.decode(e.data,p,s))).then((e=>new a(e)))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=v({...this.parsedUrl.query,blankTile:!i&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __vitePreload(() => import('./ElevationQuery-CTk2tvKz.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);s$2(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __vitePreload(() => import('./ElevationQuery-CTk2tvKz.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);s$2(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await U$1(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile[S]}};e$1([y({readOnly:!0})],w.prototype,"capabilities",void 0),e$1([o("service","capabilities",["capabilities"])],w.prototype,"readCapabilities",null),e$1([y({json:{read:{source:"copyrightText"}}})],w.prototype,"copyright",void 0),e$1([y({readOnly:!0,type:v$1})],w.prototype,"heightModelInfo",void 0),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],w.prototype,"path",void 0),e$1([y({type:["show","hide"]})],w.prototype,"listMode",void 0),e$1([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],w.prototype,"minScale",void 0),e$1([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],w.prototype,"maxScale",void 0),e$1([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],w.prototype,"opacity",void 0),e$1([y({type:["ArcGISTiledElevationServiceLayer"]})],w.prototype,"operationalLayerType",void 0),e$1([y()],w.prototype,"sourceJSON",void 0),e$1([y({json:{read:!1},value:"elevation",readOnly:!0})],w.prototype,"type",void 0),e$1([y(d)],w.prototype,"url",void 0),e$1([y()],w.prototype,"version",void 0),e$1([o("version",["currentVersion"])],w.prototype,"readVersion",null),w=e$1([c("esri.layers.ElevationLayer")],w);const S=Symbol("default-fetch-tile");w.prototype.fetchTile[S]=!0;const T=w;

export { T as default };
