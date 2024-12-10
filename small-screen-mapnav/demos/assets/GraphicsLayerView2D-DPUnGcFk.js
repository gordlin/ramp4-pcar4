import{bn as o,a1 as g,a0 as m,O as n,aQ as a,bb as p,bc as l,bd as c}from"./main-Bd3SZcXj.js";import{t as d}from"./highlightReasons-VeQ5arLg.js";import{f as u,y as w}from"./LayerView-C4FyfwIf.js";import{t as y}from"./GraphicContainer-D3Mtj3aG.js";import{V}from"./GraphicsView2D-BiB8tsd3.js";import{e as f}from"./HighlightCounter-BMCtNjHF.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BEV9YswJ.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DNiwv72Q.js";import"./layerViewUtils-CuYS5zdy.js";import"./AGraphicContainer-Bkp9zppK.js";import"./TechniqueInstance-CY-Ma_ZB.js";import"./UpdateTracking2D-EDdk3siQ.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-CTTgsV2E.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-GQKInEqt.js";import"./Program-BSmKXPKo.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-D5pU6H0E.js";import"./TileContainer-DThfNUp9.js";import"./WGLContainer-CWqGt0mI.js";import"./ProgramTemplate-S8nQ_zjF.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-Cp4GkPVZ.js";import"./FeatureCommandQueue-CfJ19oos.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-BZNSBqER.js";import"./TimeOnly-DyZpOaTG.js";import"./timeSupport-Lab0Eo4S.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-ebWpKjEo.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let e;typeof i=="number"?e=[i]:i instanceof g?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(e=i.map(h=>h&&h.uid).toArray());const r=e?.filter(n);return r?.length?(this._addHighlight(r,t),a(()=>this._removeHighlight(r,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightReason(t),r=d(e);i.push({objectId:t,highlightFlags:r})}this.graphicsView?.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const hi=s;export{hi as default};