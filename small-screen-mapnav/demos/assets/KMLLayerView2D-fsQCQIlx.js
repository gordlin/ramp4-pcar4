import{fe as z,bq as k,_ as T,U as B,b6 as D,a0 as O,bh as F,ff as N,bn as C,aY as $,bp as W,by as U,fg as H,fh as A,c2 as K,fi as Y,bb as v,bc as S,bd as J}from"./main-Bd3SZcXj.js";import{b as P,g as Q,d as X}from"./kmlUtils-CiPLow-p.js";import{g as Z,f as tt,b as et}from"./Bitmap-CbqLOGXX.js";import{a as it}from"./BitmapContainer-DXdFkD2F.js";import{f as at,y as st}from"./LayerView-C4FyfwIf.js";import{t as M}from"./GraphicContainer-D3Mtj3aG.js";import{V as R}from"./GraphicsView2D-BiB8tsd3.js";import{C as rt,e as ot}from"./rasterProjectionHelper-DoR3A7hC.js";import{a as nt}from"./WGLContainer-CWqGt0mI.js";import{y as lt,o as ht}from"./RenderingContext-CGW9EA6y.js";import{D as E,G as pt,U as mt,X as q}from"./enums-BlUEVwJR.js";import{E as ct}from"./Program-BSmKXPKo.js";import{c as dt}from"./rasterUtils-Dga7axS-.js";import{e as L,c as ut}from"./Texture-DNiwv72Q.js";import"./preload-helper-ExcqyqRp.js";import"./Container-BEV9YswJ.js";import"./highlightReasons-VeQ5arLg.js";import"./definitions-Y_v3njP4.js";import"./layerViewUtils-CuYS5zdy.js";import"./AGraphicContainer-Bkp9zppK.js";import"./TechniqueInstance-CY-Ma_ZB.js";import"./UpdateTracking2D-EDdk3siQ.js";import"./BidiEngine-BwB1Df7c.js";import"./GeometryUtils-CTTgsV2E.js";import"./enums-BRXbslMp.js";import"./Rect-CUzevAry.js";import"./LabelMetric-GQKInEqt.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-D5pU6H0E.js";import"./TileContainer-DThfNUp9.js";import"./FeatureCommandQueue-CfJ19oos.js";import"./ProgramTemplate-S8nQ_zjF.js";import"./constants-D5zmR9t2.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-BZNSBqER.js";import"./TimeOnly-DyZpOaTG.js";import"./timeSupport-Lab0Eo4S.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-ebWpKjEo.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-Cp4GkPVZ.js";import"./webglDeps-CbW30r5v.js";import"./NestedMap-DFQLExW6.js";import"./renderState-C37QfRey.js";import"./basicInterfaces-DngWxyLO.js";import"./interfaces-B8ge7Jg9.js";import"./testSVGPremultipliedAlpha-naFr-8H0.js";import"./floatRGBA-CLGUGdd6.js";import"./doublePrecisionUtils-B0owpBza.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),s=z(i);s.getExtension("OES_texture_float"),this._rctx=new lt(s,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=ht("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new nt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const i=k(t.extent,a),s=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:l,y:h}=rt(s,a,t.extent);let o=(l+h)/2;const n=Math.round((i.xmax-i.xmin)/o),u=Math.round((i.ymax-i.ymin)/o);o=(i.width/n+i.height/u)/2;const I=new T({x:o,y:o,spatialReference:i.spatialReference}),g=ot({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,g),y=new L(n,u);y.wrapMode=E.CLAMP_TO_EDGE;const m=new ct(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,n,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:f=0,height:b=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",f,b),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",n,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,_=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,pt.RGBA,mt.UNSIGNED_BYTE,_.data);const G=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:i,imageData:_}}const x=m.detachColorTexture(q.COLOR_ATTACHMENT0);return m.dispose(),{texture:x,extent:i}}reprojectBitmapData(t,a){const r=Z(t.bitmapData)?tt(t.bitmapData):t.bitmapData,i=new L;i.wrapMode=E.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const s=new ut(this._rctx,i,r),l=this.reprojectTexture({texture:s,extent:t.extent},a,!0);l.texture.dispose();const h=document.createElement("canvas"),o=l.imageData;return h.width=o.width,h.height=o.height,h.getContext("2d").putImageData(o,0,0),{bitmapData:h,extent:l.extent}}async loadAndReprojectBitmapData(t,a,r){const i=(await B(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=i.width,s.height=i.height;const l=s.getContext("2d");l.drawImage(i,0,0);const h=l.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const o=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:o.bitmapData,extent:o.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends at(st){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new it,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new O}async hitTest(e,t){const a=this.layer;return[this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map(r=>(r.layer=a,r.sourceLayer=a,{type:"graphic",graphic:r,layer:a,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),F(()=>this.layer.visibleSublayers,e=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of e){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=N(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,$.fromJSON(e.extent),this.view.spatialReference).then(t=>{const a=new et(t.bitmapData);a.x=t.extent.xmin,a.y=t.extent.ymax,a.resolution=t.extent.width/t.bitmapData.width,a.rotation=e.rotation,this._mapImageContainer.addChild(a),this._bitmapIndex.set(e,a)})}async _getViewDependentUrl(e,t){const{viewFormat:a,viewBoundScale:r,httpQuery:i}=e;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await W(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),s=c}else s=t.extent;s=k(s,U.WGS84);const l=k(s,U.WebMercator),h=s.xmin,o=s.xmax,n=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(l.width,l.height),y={"[bboxWest]":h.toString(),"[bboxEast]":o.toString(),"[bboxSouth]":n.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":H,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let _;for(_ in y)c[V]=c[V].replace(_,y[_])}},f=A(a);m(f);let b={};i!=null&&(b=A(i),m(b));const x=K(e.href);return x.query={...x.query,...f,...b},`${x.path}?${Y(f)}`}return e.href}async _fetchService(e){const t=new j;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t?.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,a){return this._fetchParsedKML(e,a).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const s=i.points?await P(i.points):[],l=i.polylines?await P(i.polylines):[],h=i.polygons?await P(i.polygons):[],o=i.mapImages||[];if(t.allPoints.push(...s.map(n=>({item:n,sublayerId:i.id}))),t.allPolylines.push(...l.map(n=>({item:n,sublayerId:i.id}))),t.allPolygons.push(...h.map(n=>({item:n,sublayerId:i.id}))),t.allMapImages.push(...o.map(n=>({item:n,sublayerId:i.id}))),i.networkLink){const n=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(n,t,a)}}})}_fetchParsedKML(e,t){return Q(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>X(a.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([J("esri.views.2d.layers.KMLLayerView2D")],d);const ce=d;export{ce as default};
