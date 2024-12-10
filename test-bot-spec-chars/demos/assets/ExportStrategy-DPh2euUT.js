import { ak as u$1, aV as e, aW as e$1, aX as y$1, aY as c, dY as S$1, b0 as k, J as s, al as s$1, B as a$1, dU as v$1, ev as c$1, fl as j$1, aS as h } from './main-h69rSE3m.js';
import { b } from './Bitmap-ms01YIU7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,o){const a=n(o.rotation),r=Math.abs(Math.cos(a)),s=Math.abs(Math.sin(a)),[u,c]=o.size;return t[0]=Math.round(c*s+u*r),t[1]=Math.round(c*r+u*s),t}function a(t,n,o,a){const[r,s]=n,[u,c]=a,h=.5*o;return t[0]=r-h*u,t[1]=s-h*c,t[2]=r+h*u,t[3]=s+h*c,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const y=u$1(),x=[0,0],S=new e(0,0,0,0),_={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let w=class extends S$1{constructor(t){super(t),this._imagePromise=null,this.bitmaps=[],this.hidpi=_.hidpi,this.imageMaxWidth=_.imageMaxWidth,this.imageMaxHeight=_.imageMaxHeight,this.imageRotationSupported=_.imageRotationSupported,this.imageNormalizationSupported=_.imageNormalizationSupported,this.update=k((async(t,e)=>{if(s(e),!t.stationary||this.destroyed)return;const i=t.state,s$2=s$1(i.spatialReference),a=this.hidpi?t.pixelRatio:1,n=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0],p=this.imageMaxWidth??0,m=this.imageMaxHeight??0;n?(x[0]=i.worldScreenWidth,x[1]=i.size[1]):this.imageRotationSupported?(x[0]=i.size[0],x[1]=i.size[1]):o(x,i);const h=Math.floor(x[0]*a)>p||Math.floor(x[1]*a)>m,c=s$2&&(i.extent.xmin<s$2.valid[0]||i.extent.xmax>s$2.valid[1]),u=!this.imageNormalizationSupported&&c,g=!h&&!u,f=this.imageRotationSupported?i.rotation:0,y=this.container.children.slice();if(g){const t=n?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,x,t,i.resolution,f,a,e);}else {let t=Math.min(p,m);u&&(t=Math.min(i.worldScreenWidth,t)),this._imagePromise=this._tiledExport(i,t,a,e);}try{const t=await this._imagePromise??[];s(e);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=t;for(const e of y)t.includes(e)||i.push(e.fadeOut().then((()=>{e.remove(),e.destroy();})));for(const e of t)i.push(e.fadeIn());await Promise.all(i);}catch(S){this._imagePromise=null,a$1(S);}}),5e3),this.updateExports=k((async t=>{const e=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;e.push(t(i).then((()=>{i.invalidateTexture(),i.requestRender();})));}this._imagePromise=v$1(e).then((()=>this._imagePromise=null)),await this._imagePromise;}));}destroy(){this.bitmaps.forEach((t=>t.destroy())),this.bitmaps=[];}get updating(){return !this.destroyed&&null!==this._imagePromise}async _export(t,e,i,r,s$1,a){const n=await this.fetchSource(t,Math.floor(e*s$1),Math.floor(i*s$1),{rotation:r,pixelRatio:s$1,signal:a});s(a);const p=new b(null,!0);return p.x=t.xmin,p.y=t.ymax,p.resolution=t.width/e,p.rotation=r,p.pixelRatio=s$1,p.opacity=0,this.container.addChild(p),await p.setSourceAsync(n,a),s(a),p}async _singleExport(t,e,i,o,r,s,a$1){a(y,i,o,e);const n=c$1(y,t.spatialReference);return [await this._export(n,e[0],e[1],r,s,a$1)]}_tiledExport(t,e,i,o){const r=j$1.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),s=new h(r),a=s.getTileCoverage(t);if(!a)return null;const n=[];return a.forEach(((r,a,p,l)=>{S.set(r,a,p,0),s.getTileBounds(y,S);const h=c$1(y,t.spatialReference);n.push(this._export(h,e,e,0,i,o).then((t=>(0!==l&&(S.set(r,a,p,l),s.getTileBounds(y,S),t.x=y[0],t.y=y[3]),t))));})),Promise.all(n)}};e$1([y$1()],w.prototype,"_imagePromise",void 0),e$1([y$1()],w.prototype,"bitmaps",void 0),e$1([y$1()],w.prototype,"container",void 0),e$1([y$1()],w.prototype,"fetchSource",void 0),e$1([y$1()],w.prototype,"hidpi",void 0),e$1([y$1()],w.prototype,"imageMaxWidth",void 0),e$1([y$1()],w.prototype,"imageMaxHeight",void 0),e$1([y$1()],w.prototype,"imageRotationSupported",void 0),e$1([y$1()],w.prototype,"imageNormalizationSupported",void 0),e$1([y$1()],w.prototype,"requestUpdate",void 0),e$1([y$1()],w.prototype,"updating",null),w=e$1([c("esri.views.2d.layers.support.ExportStrategy")],w);const v=w;

export { v };
