const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-Bd3SZcXj.js","./preload-helper-ExcqyqRp.js","./main-Bh92dUh-.css"])))=>i.map(i=>d[i]);
import{_ as ee}from"./preload-helper-ExcqyqRp.js";import{cB as te,cC as re,kn as se,ko as ie,kp as _,fc as J,bb as a,bc as p,kq as oe,eC as ne,eo as B,aY as j,by as ae,eY as le,bd as G,bY as D,c5 as ue,a1 as T,dS as pe,gY as ye,c2 as ce,$ as he,c4 as fe,c3 as de,U as me,dL as ge,eQ as be,be as we,s as U,aQ as I,a0 as xe,O as H,dZ as k,c7 as ve,br as N,N as $e,kr as Se,dq as Q,ks as Re,cP as Fe}from"./main-Bd3SZcXj.js";import{n as Ee,p as Oe}from"./popupUtils-kexfs8Sj.js";function M(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function je(t){let e=0,s=0;for(let i=0;i<t.length;i++){const r=t[i].size;typeof r=="number"&&(e+=r,s++)}return e/s}function z(t,e){return typeof t=="number"?t:t?.stops?.length?je(t.stops):e}function Ie(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:h,minSize:u}=o;return(z(h,t)+z(u,t))/2});let i=0;const r=s.length;if(r===0)return t;for(let o=0;o<r;o++)i+=s[o];const n=Math.floor(i/r);return Math.max(n,t)}function q(t){const e=t?.renderer,s=t?.pointerType,i=s==="touch"?9:6;if(!e)return i;const r="visualVariables"in e?Ie(i,e.visualVariables):i;if(e.type==="simple")return M(r,e.symbol);if(e.type==="unique-value"){let n=r;return e.uniqueValueInfos?.forEach(o=>{n=M(n,o.symbol)}),n}if(e.type==="class-breaks"){let n=r;return e.classBreakInfos.forEach(o=>{n=M(n,o.symbol)}),n}return e.type==="dot-density"||e.type,r}function Me(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:n,height:o,historicMoment:h,layerOption:u,mapExtent:l,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:v,returnZ:d,spatialReference:S,timeExtent:b,tolerance:g,width:w}=t.toJSON(),{dynamicLayers:F,layerDefs:E,layerIds:A}=Pe(t),Y=e?.geometry!=null?e.geometry:null,x={historicMoment:h,geometryPrecision:n,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:v,returnZ:d,tolerance:g},O=Y?.toJSON()||r;x.imageDisplay=`${w},${o},${s}`,i&&(x.gdbVersion=i),O&&(delete O.spatialReference,x.geometry=JSON.stringify(O),x.geometryType=te(O));const L=S??O?.spatialReference??l?.spatialReference;if(L&&(x.sr=re(L)),x.time=b?[b.start,b.end].join(","):null,l){const{xmin:C,ymin:W,xmax:K,ymax:X}=l;x.mapExtent=`${C},${W},${K},${X}`}return E&&(x.layerDefs=E),F&&!E&&(x.dynamicLayers=F),x.layers=u==="popup"?"visible":u,A&&!F&&(x.layers+=`:${A.join(",")}`),x}function Pe(t){const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:n,layerOption:o,gdbVersion:h}=t,u=r?.find(d=>d.layer!=null)?.layer?.serviceSublayers,l=o==="popup",y={},c=se({extent:e,width:i,spatialReference:e?.spatialReference}),m=[],v=d=>{const S=c===0,b=d.minScale===0||c<=d.minScale,g=d.maxScale===0||c>=d.maxScale;if(d.visible&&(S||b&&g))if(d.sublayers)d.sublayers.forEach(v);else{if(n?.includes(d.id)===!1||l&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r?.forEach(v),r&&!m.length)y.layerIds=[];else{const d=ie(m,u,h),S=m.map(b=>{const g=_(s,b);return b.toExportImageJSON(g)});if(d)y.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:w})=>w);n&&(g=g.filter(w=>n.includes(w))),y.layerIds=g}else n?.length&&(y.layerIds=n);const b=Ne(s,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(y.layerDefs=JSON.stringify(g))}}}return y}function Ne(t,e){const s=!!t?.length,i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const n=_(t,r),o=J(n,r.definitionExpression);return{id:r.id,definitionExpression:o??void 0}}):null}var V;let f=V=class extends D{static from(t){return ue(V,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};a([p({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),a([p()],f.prototype,"floors",void 0),a([p({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),a([p({types:oe,json:{read:ne,write:!0}})],f.prototype,"geometry",void 0),a([p({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),a([p({type:Number,json:{write:!0}})],f.prototype,"height",void 0),a([p({type:Date})],f.prototype,"historicMoment",void 0),a([B("historicMoment")],f.prototype,"writeHistoricMoment",null),a([p({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),a([p({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),a([p({type:j,json:{write:!0}})],f.prototype,"mapExtent",void 0),a([p({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),a([p({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),a([p({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),a([p({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),a([p({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),a([p({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),a([p({type:ae,json:{write:!0}})],f.prototype,"spatialReference",void 0),a([p()],f.prototype,"sublayers",void 0),a([p({type:le,json:{write:!0}})],f.prototype,"timeExtent",void 0),a([p({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),a([p({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=V=a([G("esri.rest.support.IdentifyParameters")],f);const Z=f;let $=class extends D{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return T.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=ye.toJSON(i.type))}};a([p({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),a([p({type:T})],$.prototype,"feature",void 0),a([pe("feature",["attributes","geometry"])],$.prototype,"readFeature",null),a([B("feature")],$.prototype,"writeFeature",null),a([p({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),a([p({type:String,json:{write:!0}})],$.prototype,"layerName",void 0),$=a([G("esri.rest.support.IdentifyResult")],$);const Ve=$;async function _e(t,e,s){const i=(e=Te(e)).geometry?[e.geometry]:[],r=ce(t);return r.path+="/identify",he(i).then(n=>{const o=Me(e,{geometry:n?.[0]}),h=fe({...r.query,f:"json",...o}),u=de(h,s);return me(r.path,u).then(Ge).then(l=>Ae(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Ve.fromJSON(s)),e}function Te(t){return t=Z.from(t)}function Ae(t,e){if(!e?.length)return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let P=null;function Je(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends ge{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=be(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([we(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new U("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Le(s.sublayers,i,e);if(!r.length)return[];const n=await He(s,r);if(!((s.capabilities?.operations?.supportsIdentify??!0)&&s.version>=10.5)&&!n)throw new U("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return I();let s=null;if(t instanceof T?s=[t]:xe.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s?.filter(H),!s?.length)return I();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),I(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async o=>{o||=new k;let h=null;const u="visualVariables"in n?n.visualVariables?.find(l=>l.type==="size"):void 0;u&&(P||(P=(await ee(async()=>{const{getSize:l}=await import("./main-Bd3SZcXj.js").then(y=>y.ru);return{getSize:l}},__vite__mapDeps([0,1,2]),import.meta.url)).getSize),h=P(u,r,{view:e.type,scale:e.scale,shape:o.type==="simple-marker"?o.style:null})),h||="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:16,s.includes(r)&&(r.symbol=new k({style:"square",size:h,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!i?.length||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),o=new Map;for(const l of i)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const y=l.sourceLayer;ve(o,y,()=>new Map).set(l.getObjectId(),l)}const h=Array.from(o,([l,y])=>{const c=l.createQuery();return c.objectIds=[...y.keys()],c.outFields=[l.objectIdField],c.returnGeometry=!0,c.maxAllowableOffset=n,c.outSpatialReference=s.spatialReference,l.queryFeatures(c)}),u=await Promise.all(h);if(!this.destroyed)for(const{features:l}of u)for(const y of l){const c=y.sourceLayer,m=o.get(c).get(y.getObjectId());m&&i.includes(m)&&(m.geometry=y.geometry,r(m,"geometry"),this._featuresResolutions.set(m,n))}}_getTargetResolution(t){const e=t*N(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,i,s);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:n,view:{spatialReference:o,scale:h}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:v})=>v.load(s).catch(()=>{})));const u=Math.min($e("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((v,d)=>d.renderer?q({renderer:d.renderer,pointerType:s?.pointerType}):v,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,u),y=Se(h,o),c=Math.round(l.width/y),m=new j({xmin:l.center.x-y*c,ymin:l.center.y-y*c,xmax:l.center.x+y*c,ymax:l.center.y+y*c,spatialReference:l.spatialReference});return new Z({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:c,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:o,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:c})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,n=e.map(async({sublayer:o,popupTemplate:h})=>{if(await o.load(s).catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const u=o.createQuery(),l=q({renderer:o.renderer,pointerType:s?.pointerType}),y=this.createFetchPopupFeaturesQueryGeometry(t,l),c=new Set,[m]=await Promise.all([Ee(o,h),o.renderer?.collectRequiredFields(c,o.fieldsIndex)]);Q(s),Re(c,o.fieldsIndex,m);const v=Array.from(c).sort();u.geometry=y,u.outFields=v,u.timeExtent=r;const d=_(i,o);u.where=J(u.where,d);const S=this._getTargetResolution(y.width/l),b=await Ue(h);Q(s);const g=o.geometryType==="point"||b&&b.arcadeUtils.hasGeometryOperations(h);g||(u.maxAllowableOffset=S);let{features:w}=await o.queryFeatures(u,s);const F=g?0:S;w=await ke(o,w,s);for(const E of w)this._featuresResolutions.set(E,F);return w});return(await Promise.allSettled(n)).reduce((o,h)=>h.status==="fulfilled"?[...o,...h.value]:o,[]).filter(H)}};function Le(t,e,s){const i=[];if(!t)return i;const r=n=>{const o=n.minScale===0||e<=n.minScale,h=n.maxScale===0||e>=n.maxScale;if(n.visible&&o&&h){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const u=Oe(n,{...s,defaultPopupTemplateEnabled:!1});u!=null&&i.unshift({sublayer:n,popupTemplate:u})}}};return t.map(r),i}function Ue(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?Fe():Promise.resolve()}async function He(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:s})=>s.load().then(()=>s.capabilities.operations.supportsQuery)))}catch{return!1}}async function ke(t,e,s){const i=t.renderer;return i&&"defaultSymbol"in i&&!i.defaultSymbol&&(e=i.valueExpression?await Promise.all(e.map(r=>i.getSymbolAsync(r,s).then(n=>n?r:null))).then(r=>r.filter(n=>n!=null)):e.filter(r=>i.getSymbol(r)!=null)),e}a([p({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),a([p({constructOnly:!0})],R.prototype,"layerView",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),a([p({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=a([G("esri.views.layers.support.MapServiceLayerViewHelper")],R);function Be(t,e,s,i=new j){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const y=s.overlayPixelSizeInMapUnits(t),c=s.basemapSpatialReference;r=c==null||c.equals(s.spatialReference)?e*y:N(c)/N(s.spatialReference)}const n=t.x-r,o=t.y-r,h=t.x+r,u=t.y+r,{spatialReference:l}=s;return i.xmin=Math.min(n,h),i.ymin=Math.min(o,u),i.xmax=Math.max(n,h),i.ymax=Math.max(o,u),i.spatialReference=l,i}new j;export{Je as U,R as _,Be as r};
