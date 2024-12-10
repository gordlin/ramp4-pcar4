import{ft as j,fg as k,fi as B,T as w,fj as J,fh as Q,bn as _,b5 as Z,fu as R,a6 as H,aO as K,es as $,_ as C,dW as ee,dT as W,dV as q,Z as F,S as V,O as b,P as M,Q as te}from"./main-D8a2_wp1.js";import{i as N}from"./TelemetryDisplay-CfDjnmtM.js";import{f as ie}from"./OverlayContainer-DpTdtGu4.js";import{s as se}from"./Container-BxQ8v0xZ.js";import{a as re,f as ne,y as oe}from"./LayerView-D0YwCKSp.js";import{c as z}from"./Program-DApHDGD-.js";import{D as ae,F as I,E as le}from"./enums-DDkmfb-t.js";import{e as he,c as me}from"./Texture-qX2W_hus.js";import{o as ye}from"./ProgramTemplate-BlPDhbrc.js";import{t as ce}from"./GraphicContainer-BC2--kRL.js";import{V as pe}from"./GraphicsView2D-BizQRKDB.js";const x=2;class de extends se{constructor(e){super(),this.element=e,this._handles=new j,this.isWrapAround=!1,this.perspectiveTransform=k(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add(B(()=>this.element,()=>{const t=this.element;this.ready(),t&&this._handles.add(J(t,"play",()=>this.requestRender()))},w))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=Q(this.texture),this._vao&&(this._vao.dispose(),this._vao=null),this._vbo&&(this._vbo.dispose(),this._vbo=null),this.texture&&(this.texture.dispose(),this.texture=null)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(t==null)return;const{context:r}=e,{videoWidth:i,videoHeight:s}=t;if(i!==0&&s!==0){if(this.texture)t.paused||this.texture.setData(t);else{const n=new he;n.wrapMode=ae.CLAMP_TO_EDGE,n.preMultiplyAlpha=!0,n.width=i,n.height=s,this.texture=new me(r,n,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,r,i){const s=this.element,n=this._getFrameInfo();if(!s||!n)return;this._initializeData(e,n,r);const{controlPoints:a,horizon:h}=n,m=Math.sqrt(a.length),p=m,{x:o,y}=e,u=this._vertices,T=a[0],O=a[m-1],Y=a[(p-1)*m],X=a[(p-1)*m+m-1],G=_(h?h[0].mapPoint:T.mapPoint,r),P=_(h?h[1].mapPoint:O.mapPoint,r),f=_(Y.mapPoint,r),D=_(X.mapPoint,r);this.clipGeometry=h?new re({geometry:Z.fromJSON({rings:[[[f.x,f.y],[D.x,D.y],[P.x,P.y],[G.x,G.y],[f.x,f.y]]],spatialReference:r})}):null;for(let c=0;c<a.length;c++){const E=a[c],{sourcePoint:S,mapPoint:A}=E;if(S==null||A==null)continue;const v=_(A,r);u[c*x+0]=v.x-o,u[c*x+1]=v.y-y}let L=t;if(i){const c=Math.min(G.x,P.x,f.x,D.x),E=Math.max(G.x,P.x,f.x,D.x),{worldWidth:S,xBounds:A}=i,[v,U]=A;c<v&&E>v?L=S:E>U&&c<U&&(L=-S)}this.wrapAroundShift=L,this.isWrapAround=L!==0}getVAO(e,t,r){if(this._vertices==null)return null;const i=this._vertices;if(this._vao)this._vbo.setData(i);else{this._vbo=z.createVertex(e,I.DYNAMIC_DRAW,i);const s=z.createVertex(e,I.STATIC_DRAW,this._texCoords);this._ibo=z.createIndex(e,I.DYNAMIC_DRAW,this._indices),this._vao=new ye(e,r,t,{geometry:this._vbo,tex:s},this._ibo)}return this._vao}draw(e){e.drawElements(le.TRIANGLE_STRIP,this._indices.length,e.gl.UNSIGNED_SHORT,0)}_initializeData(e,t,r){if(this._vertices!=null&&this._indices!=null)return;const{controlPoints:i}=t,s=Math.sqrt(i.length),n=s,a=new Float32Array(x*i.length),h=new Uint16Array(2*i.length);for(let o=0;o<i.length;o++){const y=i[o],{sourcePoint:u,mapPoint:T}=y;if(u==null||T==null)continue;const O=_(T,r);a[o*x+0]=O.x-e.x,a[o*x+1]=O.y-e.y,h[2*o+0]=u.x,h[2*o+1]=u.y}const m=new Uint16Array(n*s+(n-2)*(s+2));let p=0;for(let o=0;o<n;o++){for(let y=0;y<s;y++)m[p++]=o*s+y,m[p++]=(o+1)*s+y;o<n-2&&(m[p++]=(o+1)*s+(s-1),m[p++]=(o+1)*s)}this._vertices=a,this._texCoords=h,this._indices=m}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let r=null;if(t){const i=t.startX,s=t.startY,n=t.endX,a=t.endY;r=[{sourcePoint:R(i,s),mapPoint:new H(t.startLongitude,t.startLatitude)},{sourcePoint:R(n,a),mapPoint:new H(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:r}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e?.length;if(!t)return[];const r=new Array(t);for(let i=0;i<t;i++){const{x:s,y:n,lat:a,lon:h}=e[i];r[i]={sourcePoint:R(s,-n),mapPoint:new H(h,a)}}return r}}const g=new K([255,127,0]);let d=class extends ne(oe){constructor(){super(...arguments),this._graphicsLayer=new $,this._frameOutlineGraphic=new C({symbol:new ee({outline:{type:"simple-line",color:g}})}),this._sensorTrailGraphic=new C({symbol:new W({color:g})}),this._lineOfSightGraphic=new C({symbol:new W({color:g})}),this._sensorLocationGraphic=new C({symbol:new q({color:g})}),this._frameCenterGraphic=new C({symbol:new q({color:g})}),this._overlayContainer=null,this.layer=null,this.symbolColor=g,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=F(this._graphicsLayer)}initialize(){this.addHandles(V(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},w)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new N({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new ie,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new pe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new ce(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([V(()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),w),V(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),w)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=F(this.graphicsView)}supportsSpatialReference(l){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(l){this.graphicsView.processUpdate(l)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:l}=this.layer,{visibleTelemetryElements:e}=this;l&&e&&(e.frameOutline&&l.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,e.sensorTrail&&l.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,e.lineOfSight&&l.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,e.sensorLocation&&l.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,e.frameCenter&&l.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const l=new de(this.layer.videoElement);this.addAttachHandles([V(()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints],()=>{l.frameHorizonPoints=this.layer.frameHorizonPoints,l.groundControlPoints=this.layer.groundControlPoints},w)]),this._overlayContainer.addChild(l),this.view.stage.requestRender()}};b([M()],d.prototype,"graphicsView",void 0),b([M()],d.prototype,"layer",void 0),b([M()],d.prototype,"symbolColor",void 0),b([M({type:N})],d.prototype,"visibleTelemetryElements",void 0),d=b([te("esri.views.2d.layers.VideoLayerView2D")],d);const ue=d;export{ue as default};
