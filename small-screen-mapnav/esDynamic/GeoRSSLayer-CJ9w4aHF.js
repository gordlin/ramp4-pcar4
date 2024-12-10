import{dI as n,dJ as y,dK as p,dL as d,dM as u,dN as h,o as c,a1 as S,a2 as m,aq as g,a4 as v,O as o,P as s,dO as f,b8 as b,dP as C,dQ as G,dR as P,Q as x,dS as a,dT as R,dU as _,dV as w,dW as k,dX as F}from"./main-D8a2_wp1.js";const j=["atom","xml"],E={base:a,key:"type",typeMap:{"simple-line":R},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"picture-marker":_,"simple-marker":w},errorContext:"symbol"},O={base:a,key:"type",typeMap:{"simple-fill":k},errorContext:"symbol"};let t=class extends n(y(p(d(u(h(F)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?c(this.url,j)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(S).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await m(v.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:g(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([f("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:b,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(C)],t.prototype,"id",void 0),o([s(G)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:O,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(P)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([x("esri.layers.GeoRSSLayer")],t);const L=t;export{L as default};
