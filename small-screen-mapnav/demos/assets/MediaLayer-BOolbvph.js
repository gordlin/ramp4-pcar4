const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mediaLayerUtils-C36AzN7v.js","./utils-Dihuhg_M.js","./main-Bd3SZcXj.js","./preload-helper-ExcqyqRp.js","./main-Bh92dUh-.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-DFhgTlQ-.js","./saveAPIKeyUtils-BUhJYgWy.js","./saveUtils-CKbKl79J.js","./resourceUtils-WzTTiOL6.js","./resourceUtils-CkjyjEKQ.js"])))=>i.map(i=>d[i]);
import{_ as Ee}from"./preload-helper-ExcqyqRp.js";import{bb as s,bd as x,jC as we,es as D,G as W,bc as l,_ as d,dJ as Me,by as ae,fo as A,s as T,fy as v,ma as Le,dS as K,eo as oe,mb as U,mc as he,aV as ce,fk as R,bY as Te,md as X,aY as ue,e3 as je,me,mf as He,ee as Ne,em as q,mg as Ae,dR as ve,eP as xe,p as Ce,ec as fe,eg as Ve,ed as We,ef as Ge,mh as Re,eh as ze,mi as Ue,U as Be,dG as ke,aT as Fe,mj as Je,a0 as te,kd as qe,cS as De,bh as Ke,dq as Qe,bH as Ye,dx as Xe,a6 as Ze,bq as et,fr as tt,fq as nt,dM as ot,dQ as rt,dO as st,dP as it,eQ as lt,gT as Z,c8 as at,d$ as ct}from"./main-Bd3SZcXj.js";import{p as b,j as _e,m as ut}from"./perspectiveUtils-CunmdoNC.js";import{t as pt,e as ne}from"./mat3f64-q3fE-ZOt.js";import{p as dt}from"./imageUtils-B8Scnic2.js";import{p as ht}from"./resourceExtension-7NoZqc-X.js";import{o as mt}from"./BoundsStore-WTV-d1jl.js";import"./normalizeUtilsSync-ebWpKjEo.js";import"./PooledRBush-vvpk5Qq5.js";let ie=class extends we{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=D(e,t);return n?null:n||o?o:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([x("esri.layers.support.GeoreferenceBase")],ie);const Q=ie,re=ne(),p=R();let F=class extends Te{};s([l({type:Number,json:{write:!0}})],F.prototype,"x",void 0),s([l({type:Number,json:{write:!0}})],F.prototype,"y",void 0),F=s([x("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],F);let J=class extends we{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],J.prototype,"sourcePoint",void 0),s([l({type:d})],J.prototype,"mapPoint",void 0),J=s([x("esri.layers.support.ControlPointsGeoreference.ControlPoint")],J);let P=class extends Me(Q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=ae.fromJSON(t.spatialReference),n=pt(...t.coefficients,1);return e.map(r=>(A(p,r.x,r.y),b(p,p,n),{sourcePoint:r,mapPoint:new d({x:p[0],y:p[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new T("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n?.layer,georeference:this});n?.messages?n.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return wt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,a,c]]}=e,u={sourcePoint:v(0,n),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:v(0,0),mapPoint:new d({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:v(o,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:v(o,n),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(h)&&y(m)&&y(g)&&(ye(re,u,h,m,g),this.controlPoints=this.controlPoints.map(({sourcePoint:_})=>(A(p,_.x,_.y),b(p,p,re),{sourcePoint:_,mapPoint:new d({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Le(ne(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;A(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return b(p,p,this.transform),new d({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=D(e,t).geometry)==null?null:(A(p,e.x,e.y),b(p,p,this.inverseTransform),v(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,a,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(i,u),m=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!m.valid||!g.valid||!y(h.controlPoint))return null;e==null&&(e=ne());let _=null;return _=y(m.controlPoint)&&y(g.controlPoint)?ye(e,r,h.controlPoint,m.controlPoint,g.controlPoint):y(m.controlPoint)?yt(e,r,h.controlPoint,m.controlPoint):ft(e,r,h.controlPoint),_.every(Oe=>Oe===0)?null:_}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=D(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return e?.sourcePoint!=null&&e.mapPoint!=null}s([l({type:[J],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[F]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],P.prototype,"controlPoints",void 0),s([K("controlPoints")],P.prototype,"readControlPoints",null),s([oe("controlPoints")],P.prototype,"writeControlPoints",null),s([l({clonable:!1})],P.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"height",void 0),s([l({readOnly:!0})],P.prototype,"inverseTransform",null),s([l({readOnly:!0})],P.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"width",void 0),P=s([x("esri.layers.support.ControlPointsGeoreference")],P);const $=R(),S=R(),C=R(),j=R(),I=R(),O=R(),V=R(),H=R(),ee=Math.PI/2;function E(e,t,o){A(e,o.sourcePoint.x,o.sourcePoint.y),A(t,o.mapPoint.x,o.mapPoint.y)}function ft(e,t,o){return E($,I,t),E(S,O,o),U(C,S,$,ee),U(j,$,S,ee),U(V,O,I,-ee),U(H,I,O,-ee),pe(e,$,S,C,j,I,O,V,H)}function yt(e,t,o,n){return E($,I,t),E(S,O,o),E(C,V,n),he(j,$,S,.5),U(j,C,j,Math.PI),he(H,I,O,.5),U(H,V,H,Math.PI),pe(e,$,S,C,j,I,O,V,H)}function ye(e,t,o,n,r){return E($,I,t),E(S,O,o),E(C,V,n),E(j,H,r),pe(e,$,S,C,j,I,O,V,H)}const gt=new Array(8).fill(0),Pt=new Array(8).fill(0);function ge(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function pe(e,t,o,n,r,i,a,c,u){return _e(e,ge(gt,t,o,n,r),ge(Pt,i,a,c,u))}function wt(e,t,o,n){const r=X(0,o),i=X(0,0),a=X(t,0),c=X(t,o);return b(r,r,e),b(i,i,e),b(a,a,e),b(c,c,e),new ce({rings:[[r,i,a,c,r]],spatialReference:n})}const Y=P,B=R();let M=class extends Q{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:n,bottomRight:r}=this;if(t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;return o=this.projectOrWarn(o,i),n=this.projectOrWarn(n,i),r=this.projectOrWarn(r,i),o==null||n==null||r==null?null:new ce({rings:[[[n.x,n.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[n.x,n.y]]],spatialReference:i})}set coords(t){const{topLeft:o}=this;if(o==null)return;const n=o.spatialReference;if((t=this.projectOrWarn(t,n))==null)return;const{rings:[[r,i,a,c]]}=t;this.bottomLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topLeft=new d({x:i[0],y:i[1],spatialReference:n}),this.topRight=new d({x:a[0],y:a[1],spatialReference:n}),this.bottomRight=new d({x:c[0],y:c[1],spatialReference:n})}toSourceNormalized(t){const{topLeft:o,topRight:n,bottomRight:r,bottomLeft:i}=this;if(t==null||o==null||n==null||r==null||i==null)return null;const a=o.spatialReference;t=t.normalize();const c=D(t,a).geometry;if(c==null)return null;A(B,c.x,c.y);const u=_e(ne(),[o.x,o.y,i.x,i.y,n.x,n.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return b(B,B,u),v(B[0],B[1])}};s([l({clonable:!1})],M.prototype,"coords",null),s([l({type:d})],M.prototype,"bottomLeft",void 0),s([l({type:d})],M.prototype,"bottomRight",void 0),s([l({type:d})],M.prototype,"topLeft",void 0),s([l({type:d})],M.prototype,"topRight",void 0),M=s([x("esri.layers.support.CornersGeoreference")],M);const vt=M;let G=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=se(a,c,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:a}}}=e,c=je(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=se(i,a,-c),[h,m]=u(o[0],o[1]),[g,_]=u(r[0],r[1]);this.extent=new ue({xmin:h,ymin:m,xmax:g,ymax:_,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=D(e,u).geometry;if(h==null)return null;let m=h.x,g=h.y;return o&&([m,g]=se(c.x,c.y,-o)(m,g)),v(me(m,n,i,0,1),me(g,a,r,0,1))}};function se(e,t,o){const n=He(o),r=Math.cos(n),i=Math.sin(n);return(a,c)=>[r*(a-e)+i*(c-t)+e,r*(c-t)-i*(a-e)+t]}s([l({clonable:!1})],G.prototype,"coords",null),s([l({type:ue})],G.prototype,"extent",void 0),s([l({type:Number})],G.prototype,"rotation",void 0),G=s([x("esri.layers.support.ExtentAndRotationGeoreference")],G);const xt=G;function Rt(e){return e?.type==="media"}function be(e,t){const o=Ne(t);return Rt(e)&&!!e.portalItem&&o!=null&&o>q.PORTAL_ITEM}function _t(e,t,o){if(!e||e.type==="control-points")return e;const{coords:n}=e;if(n?.rings[0]?.length!==5)return null;const[r,i,a,c]=n.rings[0],{spatialReference:u}=n;return new Y({controlPoints:[{mapPoint:new d({x:r[0],y:r[1],spatialReference:u}),sourcePoint:v(0,o)},{mapPoint:new d({x:i[0],y:i[1],spatialReference:u}),sourcePoint:v(0,0)},{mapPoint:new d({x:a[0],y:a[1],spatialReference:u}),sourcePoint:v(t,0)},{mapPoint:new d({x:c[0],y:c[1],spatialReference:u}),sourcePoint:v(t,o)}],width:t,height:o})}const bt={key:"type",base:Q,typeMap:{"control-points":Y,corners:vt,"extent-and-rotation":xt}},$t={key:"type",base:Q,typeMap:{"control-points":Y}};let N=class extends Ae(ve(xe)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Y.fromJSON(e)}writeGeoreference(e,t,o,n){const r=n?.resources?.pendingOperations,i=()=>{const a=_t(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&n?.messages)return void n.messages.push(new T("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[o]=a.write({},n)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[o]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([l({types:bt,json:{write:!0,types:$t}})],N.prototype,"georeference",void 0),s([K("georeference")],N.prototype,"readGeoreference",null),s([oe("georeference")],N.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],N.prototype,"opacity",void 0),N=s([x("esri.layers.support.MediaElementBase")],N);const de=N;let w=class extends de{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=dt(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new T("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Ce(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r?.portalItem,a=r?.resources;if(!i||!a)return void(typeof t=="string"&&(o[n]=fe(t,r)));const c=St(t)?t:null;if(c){if(Ve(c)==null)return void(o[n]=c);const u=fe(c,{...r,verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},We.NO);if(i&&u&&!Ge(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",a.pendingOperations.push(It(t).then(u=>{const h=Et(u,i);o[n]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}write(t,o){const n=super.write(t,o);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};s([l()],w.prototype,"animationOptions",void 0),s([l({readOnly:!0})],w.prototype,"content",void 0),s([l({readOnly:!0})],w.prototype,"contentWidth",null),s([l({readOnly:!0})],w.prototype,"contentHeight",null),s([l({json:{name:"url",type:String,write:{overridePolicy:(e,t,o)=>({enabled:!be(o?.layer,o?.origin)})}}})],w.prototype,"image",void 0),s([K("image",["url"])],w.prototype,"readImage",null),s([oe("image")],w.prototype,"writeImage",null),s([l({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],w.prototype,"type",void 0),w=s([x("esri.layers.support.ImageElement")],w);const $e=w;function St(e){return typeof e=="string"&&!Re(e)&&!ze(e)}async function It(e){return typeof e=="string"?Re(e)?Ue(e):(await Be(e,{responseType:"blob"})).data:new Promise(t=>Ot(e).toBlob(t))}function Ot(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function Et(e,t){const o=ke(),n=`${Fe("media",o)}.${ht({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let L=class extends de{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new T("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{const n=Je(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))})}};s([l()],L.prototype,"autoplay",void 0),s([l({readOnly:!0})],L.prototype,"content",void 0),s([l({readOnly:!0})],L.prototype,"contentWidth",null),s([l({readOnly:!0})],L.prototype,"contentHeight",null),s([l()],L.prototype,"video",null),L=s([x("esri.layers.support.VideoElement")],L);const Se=L,Mt={key:"type",defaultKeyValue:"image",base:de,typeMap:{image:$e,video:Se}},Pe=te.ofType(Mt);let z=class extends xe.LoadableMixin(qe(De.EventedAccessor)){constructor(e){super(e),this._index=new mt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new ut({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=Ke(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new Pe}async load(e){if(Qe(e),!this.spatialReference){const t=this.elements.find(o=>o.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ye(e,this._get("elements"),Pe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Xe(e.spatialReference,this.spatialReference,null,t);const o=Ze(e.spatialReference,this.spatialReference)?e:et(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(tt(i),({normalizedCoords:a,element:c})=>{a!=null&&nt(i,a)&&r.push(c)});return r.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],z.prototype,"elements",null),s([l({readOnly:!0})],z.prototype,"fullExtent",null),s([l()],z.prototype,"spatialReference",null),z=s([x("esri.layers.support.LocalMediaElementSource")],z);const k=z;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function Ie(e){return le(e)&&e.type==="image"}let f=class extends ot(rt(st(it(ve(ct))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=lt(async(t,o,n)=>{const{save:r,saveAs:i}=await Ee(()=>import("./mediaLayerUtils-C36AzN7v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);switch(t){case Z.SAVE:return r(this,o);case Z.SAVE_AS:return i(this,n,o)}}),this.source=new k}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new T("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),t=o);const n=le(t)?new k({elements:new te([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(e),this.spatialReference=n.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new k({elements:new te(e)}):e instanceof te?new k({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;const n=this._createSource(t);return n?.read(t,o),n}writeSource(e,t,o,n){if(e&&e instanceof k){const r=e.elements.length;if(r!==1)return void(n?.messages&&n.messages.push(new T("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}Ie(e)?e.write(t,n):n?.messages&&(e?n.messages.push(new T("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):n.messages.push(new T("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(Z.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(Z.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new $e;case"video":return new Se}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===q.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===q.WEB_MAP||this.originIdOf("georeference")===q.WEB_SCENE)){const o=e.toJSON(),n=this._createSource(o);return n.read({...o},{origin:"portal-item"}),n.read({georeference:t},{origin:"web-map"}),n.read({georeference:t},{origin:"web-scene"}),n}return null}};s([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),s([K("web-document","georeference")],f.prototype,"readGeoreference",null),s([l({type:String})],f.prototype,"copyright",void 0),s([l({readOnly:!0})],f.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],f.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:Y}},overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:be(this,o?.origin)&&Ie(e)&&!!e.georeference&&e.originIdOf("georeference")>q.PORTAL_ITEM}}}}})],f.prototype,"source",null),s([at("source")],f.prototype,"castSource",null),s([K("source",["url"])],f.prototype,"readSource",null),s([oe("source")],f.prototype,"writeSource",null),s([l()],f.prototype,"spatialReference",void 0),s([l({readOnly:!0})],f.prototype,"type",void 0),f=s([x("esri.layers.MediaLayer")],f);const kt=f;export{kt as default};
