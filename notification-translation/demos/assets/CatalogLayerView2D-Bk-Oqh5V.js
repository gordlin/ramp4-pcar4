import { a3 as V, aW as e, aX as y, aY as c } from './main-DAn2heHU.js';
import { m as m$1, u } from './LayerView-DlsngPI6.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGre6sTp.js';
import './highlightReasons-CkZQkIj6.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CDiylge2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends(m$1(u)){constructor(){super(...arguments),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y()],s.prototype,"dynamicGroupLayerView",null),e([y()],s.prototype,"footprintLayerView",null),e([y()],s.prototype,"layerViews",void 0),s=e([c("esri.views.2d.layers.CatalogLayerView2D")],s);const n=s;

export { n as default };
