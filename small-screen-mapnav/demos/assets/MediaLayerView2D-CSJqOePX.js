import{fk as L,bh as v,bi as g,fl as S,fm as P,fn as O,G as D,s as z,fo as I,a0 as W,be as $,b8 as Q,b9 as k,fp as B,ax as F,aY as N,c7 as Y,bb as w,bc as A,bd as J,aD as K,fq as X}from"./main-Bd3SZcXj.js";import{j as Z,m as C}from"./perspectiveUtils-CunmdoNC.js";import"./GeometryUtils-CTTgsV2E.js";import"./UpdateTracking2D-EDdk3siQ.js";import{d as x}from"./enums-BRXbslMp.js";import"./definitions-Y_v3njP4.js";import"./floatRGBA-CLGUGdd6.js";import{s as ee}from"./Container-BEV9YswJ.js";import"./WGLContainer-CWqGt0mI.js";import{e as te,c as q}from"./Texture-DNiwv72Q.js";import{D as re,E as ie,F as G}from"./enums-BlUEVwJR.js";import{c as M}from"./Program-BSmKXPKo.js";import"./LabelMetric-GQKInEqt.js";import"./StyleDefinition-BK3ROBTO.js";import"./enums-BRzLM11V.js";import"./MagnifierPrograms-BtqPNiq_.js";import"./FeatureCommandQueue-CfJ19oos.js";import"./PieChartMeshWriter-DPc3hk6f.js";import"./renderState-C37QfRey.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-naFr-8H0.js";import"./GraphicsView2D-BiB8tsd3.js";import"./earcut-Cp4GkPVZ.js";import"./vec3f32-nZdmKIgz.js";import{e as se}from"./mat3f64-q3fE-ZOt.js";import{f as ne}from"./utils-CFltzCoD.js";import{o as oe}from"./ProgramTemplate-S8nQ_zjF.js";import{f as ae}from"./OverlayContainer-CuYee5pX.js";import{f as le,y as he}from"./LayerView-C4FyfwIf.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtilsSync-ebWpKjEo.js";import"./BidiEngine-BwB1Df7c.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-D5pU6H0E.js";import"./highlightReasons-VeQ5arLg.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./config-MDUrh2eL.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-BZNSBqER.js";import"./TimeOnly-DyZpOaTG.js";import"./timeSupport-Lab0Eo4S.js";import"./json-Wa8cmqdu.js";import"./constants-D5zmR9t2.js";import"./TurboLine-C8Z2pTA2.js";import"./basicInterfaces-DngWxyLO.js";import"./grouping-BoBBBStb.js";import"./layerViewUtils-CuYS5zdy.js";const me=[1,1],ce=4,c=se(),de={none:x.None,loop:x.Loop,oscillate:x.Oscillate};function pe(t){return t?{...t,playAnimation:t.playing,repeatType:t.repeatType?de[t.repeatType]:void 0}:{}}class ue extends ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=L(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(v(()=>this.elementView.element.opacity,r=>this.opacity=r,g),v(()=>[this.elementView.coords],()=>{this.requestRender()},g),v(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{this._playHandle?.remove(),this.texture=S(this.texture),this.requestRender()},g),P(()=>this.elementView.element.loaded,()=>{const r=this.elementView.element;this.ready(),r.type==="video"&&r.content!=null&&this._handles.push(O(r.content,"play",()=>this.requestRender()))},g)),e.element.load().catch(r=>{D.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new z("element-load-error","Element cannot be displayed",{element:e,error:r}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._playHandle?.remove(),this._handles.forEach(e=>e.remove()),this.texture=S(this.texture)}get textureSize(){return me}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:r}=e,i=this.elementView.element.content;if(i!=null){const s=i instanceof HTMLImageElement,o=i instanceof HTMLVideoElement,n=s?i.naturalWidth:o?i.videoWidth:i.width,h=s?i.naturalHeight:o?i.videoHeight:i.height;if(this._updatePerspectiveTransform(n,h),this.texture)o&&!i.paused&&(this.texture.setData(i),this.requestRender(),this.texture.generateMipmap());else{const l=new te;if(l.wrapMode=re.CLAMP_TO_EDGE,l.preMultiplyAlpha=!0,l.width=n,l.height=h,"getFrame"in i){const u=m=>{this.texture?this.texture.setData(m):this.texture=new q(r,l,m),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=ne(i,pe(this.elementView.element.animationOptions),null,u))}else this.texture=new q(r,l,i);this.texture.generateMipmap(),o&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}draw(e){e.drawArrays(ie.TRIANGLE_STRIP,0,ce)}updateDrawCoords(e,r,i,s){const{coords:o,bounds:n}=this.elementView;if(o==null||n==null)return;const[h,l,u,m]=o.rings[0],U=this._vertices,{x:f,y}=e;U.set([l[0]-f,l[1]-y,h[0]-f,h[1]-y,u[0]-f,u[1]-y,m[0]-f,m[1]-y]);let _=r;if(s){const[E,,R]=n,{worldWidth:T,xBounds:j}=s,[b,V]=j;E<b&&R>b?_=T:R>V&&E<V&&(_=-T)}this.wrapAroundShift=_,this.isWrapAround=_!==0}getVAO(e,r,i){if(this.elementView.coords==null)return null;const s=this._vertices;if(this._vao)this._geometryVbo.setData(s);else{this._geometryVbo=M.createVertex(e,G.DYNAMIC_DRAW,s);const o=M.createVertex(e,G.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new oe(e,i,r,{geometry:this._geometryVbo,tex:o})}return this._vao}_updatePerspectiveTransform(e,r){const i=this._vertices;Z(c,[0,0,e,0,0,r,e,r],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),I(this.perspectiveTransform,c[6]/c[8]*e,c[7]/c[8]*r)}}let p=class extends le(he){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new W}attach(){this.addAttachHandles([$(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(t=>this._updateTile(t)),this.requestUpdate()}),$(()=>this.layer.effectiveSource,"change",({element:t})=>this._elementUpdateHandler(t))]),this._overlayContainer=new ae,this.container.addChild(this._overlayContainer),this._fetchQueue=new Q({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(t,e)=>this._queryElements(t,e)}),this._tileStrategy=new k({cachePolicy:"purge",resampling:!0,acquireTile:t=>this._acquireTile(t),releaseTile:t=>this._releaseTile(t),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(t){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(t){this._tileStrategy.update(t),this._debugGraphicsView?.update(t)}async hitTest(t,e){const r=[],i=t.normalize(),s=[i.x,i.y];for(const{projectedElement:{normalizedCoords:o,element:n}}of this._elementReferences.values())o!=null&&B(o.rings,s)&&r.push({type:"media",element:n,layer:this.layer,mapPoint:t,sourcePoint:n.toSource(t)});return r.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updateTile(t))}_acquireTile(t){const e=new fe(t.clone());return this._updateTile(e),e}_updateTile(t){this._updatingHandles.addPromise(this._fetchQueue.push(t.key).then(e=>{const[r,i]=t.setElements(e);this._referenceElements(t,r),this._dereferenceElements(t,i),this.requestUpdate()},e=>{F(e)||D.getLogger(this).error(e)}))}_releaseTile(t){this._fetchQueue.abort(t.key.id),t.elements&&this._dereferenceElements(t,t.elements),this.requestUpdate()}async _queryElements(t,e){const r=this.layer.effectiveSource;if(r==null)return[];this.view.featuresTilingScheme.getTileBounds(a,t,!0);const i=new N({xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:this.view.spatialReference});return r.queryElements(i,e)}_referenceElements(t,e){if(this.layer.source!=null)for(const r of e)this._referenceElement(t,r)}_referenceElement(t,e){Y(this._elementReferences,e.uid,()=>{const r=new C({element:e,spatialReference:this.view.spatialReference}),i=new ue(r);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:r,overlay:i,debugGraphic:null}}).tiles.add(t)}_dereferenceElements(t,e){for(const r of e)this._dereferenceElement(t,r)}_dereferenceElement(t,e){const r=this._elementReferences.get(e.uid);r.tiles.delete(t),r.tiles.size||(this._overlayContainer.removeChild(r.overlay),r.overlay.destroy(),r.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),this._debugGraphicsView?.graphics.remove(r.debugGraphic))}_elementUpdateHandler(t){let e=this._elementReferences.get(t.uid);if(e){const i=e.projectedElement.normalizedCoords;if(i==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),void this._debugGraphicsView?.graphics.remove(e.debugGraphic);const s=[],o=[];for(const n of this._tileStrategy.tiles){const h=H(this.view.featuresTilingScheme,n,i);e.tiles.has(n)?h||o.push(n):h&&s.push(n)}for(const n of s)this._referenceElement(n,t);for(const n of o)this._dereferenceElement(n,t);return e=this._elementReferences.get(t.uid),void(e?.debugGraphic&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const r=new C({element:t,spatialReference:this.view.spatialReference}).normalizedCoords;if(r!=null)for(const i of this._tileStrategy.tiles)H(this.view.featuresTilingScheme,i,r)&&this._referenceElement(i,t)}};w([A()],p.prototype,"layer",void 0),w([A({readOnly:!0})],p.prototype,"elements",void 0),p=w([J("esri.views.2d.layers.MediaLayerView2D")],p);const a=K(),d={xmin:0,ymin:0,xmax:0,ymax:0};function H(t,e,r){return t.getTileBounds(a,e.key,!0),d.xmin=a[0],d.ymin=a[1],d.xmax=a[2],d.ymax=a[3],X(d,r)}class fe{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const r=[],i=new Set(this.elements);this.elements=e;for(const s of e)i.has(s)?i.delete(s):r.push(s);return this.isReady=!0,[r,Array.from(i)]}destroy(){}}const mt=p;export{mt as default};
