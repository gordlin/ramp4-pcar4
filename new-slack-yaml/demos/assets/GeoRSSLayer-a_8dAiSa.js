import { dZ as n, d_ as f, d$ as u$1, e0 as j, e1 as t, e2 as m, r as bt, B as a, U as U$1, a8 as C, D as s$1, aW as e, aX as y, e3 as o, aH as M, e4 as I, e5 as c, e6 as d, aY as c$1, e7 as n$1, e8 as d$1, e9 as n$2, ea as y$1, eb as S, ec as b } from './main-Bmb_kS21.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const G=["atom","xml"],P={base:n$1,key:"type",typeMap:{"simple-line":d$1},errorContext:"symbol"},R={base:n$1,key:"type",typeMap:{"picture-marker":n$2,"simple-marker":y$1},errorContext:"symbol"},k={base:n$1,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let _=class extends(n(f(u$1(j(t(m(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,o){return "string"==typeof e?{url:e,...o}:e}readFeatureCollections(e,o){return o.featureCollection.layers.forEach((e=>{const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&o.outline?.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),o.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?bt(this.url,G)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const o=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(a).then((()=>this._fetchService(o))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const t=this.spatialReference,{data:s}=await U$1(s$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:C(t)?void 0:t.wkid??JSON.stringify(t)},signal:e});return s}_hasGeometry(e){return this.featureCollections?.some((o=>o.featureSet?.geometryType===e&&o.featureSet.features?.length>0))??!1}};e([y()],_.prototype,"description",void 0),e([y()],_.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],_.prototype,"readFeatureCollections",null),e([y({type:M,json:{name:"lookAtExtent"}})],_.prototype,"fullExtent",void 0),e([y(I)],_.prototype,"id",void 0),e([y(c)],_.prototype,"legendEnabled",void 0),e([y({types:P,json:{write:!0}})],_.prototype,"lineSymbol",void 0),e([y({type:["show","hide"]})],_.prototype,"listMode",void 0),e([y({types:R,json:{write:!0}})],_.prototype,"pointSymbol",void 0),e([y({types:k,json:{write:!0}})],_.prototype,"polygonSymbol",void 0),e([y({type:["GeoRSS"]})],_.prototype,"operationalLayerType",void 0),e([y(d)],_.prototype,"url",void 0),e([y({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],_.prototype,"title",null),e([y({readOnly:!0,json:{read:!1},value:"geo-rss"})],_.prototype,"type",void 0),_=e([c$1("esri.layers.GeoRSSLayer")],_);const w=_;

export { w as default };
