import{b7 as _,b8 as w,b9 as g,a6 as u,ba as p,ax as f,G as I,bb as d,bc as S,bd as T}from"./main-Bd3SZcXj.js";import{r as b,n as m}from"./imageUtils-Bn4e2ceA.js";import{f as V,y as x}from"./LayerView-C4FyfwIf.js";import{i as v}from"./RefreshableLayerView-DpP5J5VK.js";import"./preload-helper-ExcqyqRp.js";import"./Bitmap-CbqLOGXX.js";import"./Container-BEV9YswJ.js";import"./highlightReasons-VeQ5arLg.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DNiwv72Q.js";import"./WGLContainer-CWqGt0mI.js";import"./LabelMetric-GQKInEqt.js";import"./enums-BRXbslMp.js";import"./Program-BSmKXPKo.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-S8nQ_zjF.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-Cp4GkPVZ.js";import"./TileContainer-DThfNUp9.js";import"./layerViewUtils-CuYS5zdy.js";const M=new Set([102113,102100,3857,3785,900913]),q=[0,0];let a=class extends v(b(V(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new _(e),this._fetchQueue=new w({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new g({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some(t=>u(t.tileInfo?.spatialReference,e))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:h=0}=t;if(!i)return this._fetchImage(e,s);const r=new p(0,0,0,0);let n;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),n=await this._fetchImage(r,s)}catch(l){if(f(l))throw l;if(h<3){const o=this._tileInfoView.getTileParentId(e.id);if(o){const c=new p(o),y=await this.fetchTile(c,{...t,resamplingLevel:h+1});return m(this._tileInfoView,y,c,e)}}throw l}return m(this._tileInfoView,n,r,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){f(t)||I.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>u(s.tileInfo?.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>M.has(s.tileInfo?.spatialReference.wkid??-1))),i}};d([S({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=d([T("esri.views.2d.layers.WMTSLayerView2D")],a);const Y=a;export{Y as default};
