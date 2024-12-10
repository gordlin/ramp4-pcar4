import{fa as B,bn as D,a6 as T,a2 as O,E as P,V as F,S as N,fb as W,Z as S,b8 as E,bm as H,bv as U,fc as K,fd as A,b$ as $,fe as J,O as v,P as C,Q as Y}from"./main-D8a2_wp1.js";import{b as M,g as Q,d as X}from"./kmlUtils-BiCehAc9.js";import{g as Z,f as tt,b as et}from"./Bitmap-HRHmz0eI.js";import{a as it}from"./BitmapContainer-CRwqQkMK.js";import{f as at,y as st}from"./LayerView-D0YwCKSp.js";import{t as R}from"./GraphicContainer-BC2--kRL.js";import{V as k}from"./GraphicsView2D-BizQRKDB.js";import{C as rt,e as nt}from"./rasterProjectionHelper-CNriP7_k.js";import{a as ot}from"./WGLContainer-CcGUJwIh.js";import{y as lt,o as ht}from"./RenderingContext-ogF3wIB8.js";import{D as L,G as pt,U as ct,X as q}from"./enums-DDkmfb-t.js";import{E as mt}from"./Program-DApHDGD-.js";import{c as dt}from"./rasterUtils-DCtB6vuY.js";import{e as j,c as ut}from"./Texture-qX2W_hus.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),s=B(i);s.getExtension("OES_texture_float"),this._rctx=new lt(s,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=ht("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const i=D(t.extent,a),s=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:l,y:h}=rt(s,a,t.extent);let n=(l+h)/2;const o=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/o+i.height/u)/2;const I=new T({x:n,y:n,spatialReference:i.spatialReference}),g=nt({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,g),y=new j(o,u);y.wrapMode=L.CLAMP_TO_EDGE;const c=new mt(this._rctx,y);this._rctx.bindFramebuffer(c),this._rctx.setViewport(0,0,o,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:f=0,height:x=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",f,x),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",o,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:m,height:V}=c,_=new ImageData(m??0,V??0);c.readPixels(0,0,m??0,V??0,pt.RGBA,ct.UNSIGNED_BYTE,_.data);const z=c.detachColorTexture(q.COLOR_ATTACHMENT0);return c.dispose(),{texture:z,extent:i,imageData:_}}const b=c.detachColorTexture(q.COLOR_ATTACHMENT0);return c.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,a){const r=Z(t.bitmapData)?tt(t.bitmapData):t.bitmapData,i=new j;i.wrapMode=L.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const s=new ut(this._rctx,i,r),l=this.reprojectTexture({texture:s,extent:t.extent},a,!0);l.texture.dispose();const h=document.createElement("canvas"),n=l.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:l.extent}}async loadAndReprojectBitmapData(t,a,r){const i=(await O(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=i.width,s.height=i.height;const l=s.getContext("2d");l.drawImage(i,0,0);const h=l.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class G{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends at(st){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new it,this._kmlVisualData=new G,this._fetchController=null,this.allVisiblePoints=new P,this.allVisiblePolylines=new P,this.allVisiblePolygons=new P,this.allVisibleMapImages=new F}async hitTest(e,t){const a=this.layer;return[this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map(r=>(r.layer=a,r.sourceLayer=a,{type:"graphic",graphic:r,layer:a,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new k({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new k({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new k({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new R(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),N(()=>this.layer.visibleSublayers,e=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of e){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=W(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,E.fromJSON(e.extent),this.view.spatialReference).then(t=>{const a=new et(t.bitmapData);a.x=t.extent.xmin,a.y=t.extent.ymax,a.resolution=t.extent.width/t.bitmapData.width,a.rotation=e.rotation,this._mapImageContainer.addChild(a),this._bitmapIndex.set(e,a)})}async _getViewDependentUrl(e,t){const{viewFormat:a,viewBoundScale:r,httpQuery:i}=e;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await H(),r!=null&&r!==1){const m=new E(t.extent);m.expand(r),s=m}else s=t.extent;s=D(s,U.WGS84);const l=D(s,U.WebMercator),h=s.xmin,n=s.xmax,o=s.ymin,u=s.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,w=Math.max(l.width,l.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":o.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":K,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},c=m=>{for(const V in m){let _;for(_ in y)m[V]=m[V].replace(_,y[_])}},f=A(a);c(f);let x={};i!=null&&(x=A(i),c(x));const b=$(e.href);return b.query={...b.query,...f,...x},`${b.path}?${J(f)}`}return e.href}async _fetchService(e){const t=new G;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t?.visibility&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,a){return this._fetchParsedKML(e,a).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const s=i.points?await M(i.points):[],l=i.polylines?await M(i.polylines):[],h=i.polygons?await M(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...s.map(o=>({item:o,sublayerId:i.id}))),t.allPolylines.push(...l.map(o=>({item:o,sublayerId:i.id}))),t.allPolygons.push(...h.map(o=>({item:o,sublayerId:i.id}))),t.allMapImages.push(...n.map(o=>({item:o,sublayerId:i.id}))),i.networkLink){const o=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(o,t,a)}}})}_fetchParsedKML(e,t){return Q(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>X(a.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([Y("esri.views.2d.layers.KMLLayerView2D")],d);const _t=d;export{_t as default};