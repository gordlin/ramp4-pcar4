import{bb as a,bc as i,bd as L,a0 as V,eQ as C,fa as F,aQ as U,fb as _,G as x,fc as w}from"./main-Bd3SZcXj.js";import{f as H,y as I}from"./LayerView-C4FyfwIf.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BEV9YswJ.js";import"./highlightReasons-VeQ5arLg.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DNiwv72Q.js";import"./layerViewUtils-CuYS5zdy.js";const u=Symbol(),O=o=>{let e=class extends o{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=C(async()=>{const{layer:r,parent:s}=this,n=s?.footprintLayerView;let d=[];const l=this._createQuery();if(l&&n){const{features:h}=await n.queryFeatures(l);this.suspended||(d=h.map(c=>r.acquireLayer(c)))}this.removeHandles(u),this.addHandles(d,u)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(u))])}updateLayers(){this.suspended?this.removeHandles(u):this._updatingHandles.addPromise(_(this._debouncedUpdate()).catch(r=>{x.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:n},view:{scale:d}}=this;if(!n)return null;const{itemTypeField:l,itemSourceField:h,itemNameField:c,minScaleField:m,maxScaleField:f,objectIdField:v,orderBy:$}=s,b=w(`${m} IS NULL OR ${d} <= ${m} OR ${m} = 0`,`${f} IS NULL OR ${d} >= ${f}`),p=$?.find(y=>y.field&&!y.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=n,t.outFields=[v,h,c],t.where=w(t.where,b),this.unsupportedItemTypes!=null){const y=`${l} NOT IN (${this.unsupportedItemTypes.map(S=>`'${S}'`)})`;t.where=w(t.where,y)}return p?.field&&(t.orderByFields=[`${p.field} ${p.order==="descending"?"DESC":"ASC"}`],t.outFields.push(p.field)),t}};return a([i({readOnly:!0})],e.prototype,"creatingLayerViews",null),a([i()],e.prototype,"layer",void 0),a([i()],e.prototype,"layerViews",void 0),a([i({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),a([i()],e.prototype,"parent",void 0),a([i({readOnly:!0})],e.prototype,"isUpdating",null),e=a([L("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(o){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((o,e)=>this.container.addChildAt(o.container,e))}};g=a([L("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const k=g;export{k as default};
