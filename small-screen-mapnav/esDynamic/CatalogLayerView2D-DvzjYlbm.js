import{O as t,P as i,Q as n,V as o}from"./main-D8a2_wp1.js";import{f as l,y}from"./LayerView-D0YwCKSp.js";const d=a=>{let e=class extends a{constructor(...r){super(...r),this.layerViews=new o}get dynamicGroupLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.dynamicGroupLayer)}get footprintLayerView(){return this.layerViews.find(r=>r.layer===this.layer?.footprintLayer)}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return t([i()],e.prototype,"layer",void 0),t([i()],e.prototype,"layerViews",void 0),t([i({readOnly:!0})],e.prototype,"dynamicGroupLayerView",null),t([i({readOnly:!0})],e.prototype,"footprintLayerView",null),e=t([n("esri.views.layers.CatalogLayerView")],e),e};let s=class extends d(l(y)){constructor(){super(...arguments),this.layerViews=new o}update(a){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((a,e)=>this.container.addChildAt(a.container,e))}};t([i()],s.prototype,"layerViews",void 0),s=t([n("esri.views.2d.layers.CatalogLayerView2D")],s);const p=s;export{p as default};