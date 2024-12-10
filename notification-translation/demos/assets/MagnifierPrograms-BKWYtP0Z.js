import { c as n$2 } from './WGLContainer-Bwwug1I-.js';
import { t as t$4 } from './CircularArray-Bo8gDF9W.js';
import { V as has, cU as o$1, aj as e$2, dY as S$1, aW as e$3, aX as y, aY as c$3, no as _$2, h9 as c$4, cl as n$3, fv as o$2, hB as s$3, cw as g$2, np as l$3, F as x$1, b1 as p$1, nq as kt, nr as i, cm as r$7, fy as o$3, ns as rt, nt as u$1, nu as Gt, h7 as n$4, nv as $, nw as bt, nx as pt, ny as r$8, b9 as u$2, nz as Rt } from './main-DAn2heHU.js';
import { a as t$5 } from './testSVGPremultipliedAlpha-CClCqsvc.js';
import { u, O, Q } from './definitions-slUvtMCM.js';
import { t as t$6 } from './AttributeStore-B-n6pSMK.js';
import { e as e$4 } from './ProgramTemplate-BCAWRt5y.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e$1={shaders:{vertexShader:n$2("bitBlit/bitBlit.vert"),fragmentShader:n$2("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r$6={shaders:{vertexShader:n$2("stencil/stencil.vert"),fragmentShader:n$2("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t$3={shaders:{vertexShader:n$2("highlight/textured.vert"),fragmentShader:n$2("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},r$5={shaders:{vertexShader:n$2("highlight/textured.vert"),fragmentShader:n$2("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r$4=has("esri-2d-profiler");let n$1 = class n{constructor(n,i){if(this._events=new o$1,this._entries=new Map,this._timings=new t$4(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!r$4)return;this._ext=t$5(n.gl,{}),this._debugOutput=i;const o=n.gl;if(!this.enableCommandLogging)return;let a;for(a in o)if("function"==typeof o[a]){const e=o[a],t=a.includes("draw");o[a]=(...s)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:a,args:s,isDrawCommand:t}),this._currentSummary&&(this._currentSummary.commands++,t&&this._currentSummary.drawCommands++),e.apply(o,s));}}get enableCommandLogging(){return !("object"==typeof r$4&&r$4.disableCommands)}recordContainerStart(e){r$4&&(this._currentContainer=e);}recordContainerEnd(){r$4&&(this._currentContainer=null);}recordPassStart(e){r$4&&(this._currentPass=e,this._initSummary());}recordPassEnd(){r$4&&(this._currentPass=null,this._emitSummary());}recordBrushStart(e){r$4&&(this._currentBrush=e);}recordBrushEnd(){r$4&&(this._currentBrush=null);}recordStart(e){if(r$4&&null!=this._ext){if(this._entries.has(e)){const t=this._entries.get(e),s=this._ext.resultAvailable(t.query),r=this._ext.disjoint();if(s&&!r){const s=this._ext.getResult(t.query)/1e6;let r=0;if(null!=this._timings.enqueue(s)){const e=this._timings.entries,t=e.length;let s=0;for(const r of e)s+=r;r=s/t;}const n=s.toFixed(2),i=r?r.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${n} ms (${i} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${n} ms (${i} last 10 avg)`),this._debugOutput.innerHTML=`${n} (${i})`;}for(const e of t.handles)e.remove();this._ext.deleteQuery(t.query),this._entries.delete(e);}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(t.handles.push(this._events.on("command",(e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++;}))),t.handles.push(this._events.on("summary",(e=>{t.summaries.push(e);})))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t);}}recordEnd(e){r$4&&null!=this._ext&&this._entries.has(e)&&this._ext.endTimeElapsed();}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0});}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e=1,h$1=0,o=1,r$3=2;let l$2 = class l{constructor(t,s,h){this._debugMap=new Map,this._width=t*h,this._height=s*h,this._pixelRatio=h;const o=Math.ceil(this._width/e),r=Math.ceil(this._height/e);this._cols=o,this._rows=r,this._cells=t$6.create(o*r);}insertMetrics(t){this._markMetrics(t);}hasCollision(t){let i=0;for(const{computedX:e,computedY:h,width:l,height:c}of t.bounds){const t=(l+u)*this._pixelRatio,a=(c+u)*this._pixelRatio;switch(this._collide(e,h,t,a)){case r$3:return r$3;case o:i++;}}return i===t.bounds.length?o:h$1}getCellId(t,s){return t+s*this._cols}has(t){return this._cells.has(t)}hasRange(t,s){return this._cells.hasRange(t,s)}set(t){this._cells.set(t);}setRange(t,s){this._cells.setRange(t,s);}_collide(s,i,l,c){const a=s-l/2,n=i-c/2,_=a+l,u=n+c;if(_<0||u<0||a>this._width||n>this._height)return o;const d=e$2(Math.floor(a/e),0,this._cols),f=e$2(Math.floor(n/e),0,this._rows),p=e$2(Math.ceil(_/e),0,this._cols),M=e$2(Math.ceil(u/e),0,this._rows);for(let t=f;t<=M;t++)for(let s=d;s<=p;s++){const i=this.getCellId(s,t);if(this.has(i))return r$3}return h$1}_mark(s,i,h,o,r){const l=s-h/2,c=i-o/2,a=l+h,n=c+o,_=e$2(Math.floor(l/e),0,this._cols),u=e$2(Math.floor(c/e),0,this._rows),d=e$2(Math.ceil(a/e),0,this._cols),f=e$2(Math.ceil(n/e),0,this._rows);for(let t=u;t<=f;t++)for(let s=_;s<=d;s++){const i=this.getCellId(s,t);this._debugMap.set(i,r),this.set(i);}return !1}_markMetrics(t){for(const{computedX:i,computedY:e,width:h,height:o}of t.bounds){const r=(h+u)*this._pixelRatio,l=(o+u)*this._pixelRatio;this._mark(i,e,r,l,t.entityTexel);}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const s$2=254,r$2=255,c$2=0;function a$4(e,t){const o=e.children.slice();o.sort(((e,t)=>e.tileAge-t.tileAge)),o.forEach((e=>{null!=e.labelMetrics&&e.isReady&&t(e,e.labelMetrics);}));}function f$2(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}let d$4 = class d{run(e,t,o,i){const n=[];for(let l=e.length-1;l>=0;l--){const t=e[l];t.labelingCollisionInfos?.length&&n.push(...t.labelingCollisionInfos);}has("esri-2d-update-debug")&&n.length&&console.debug("CollisionEngine.run"),this._transformMetrics(n),this._runCollision(n,t,o,i);for(const l of n)l.container.requestRender();}_runCollision(e,t,i,n){const[l,d]=t.state.size,u=new l$2(l,d,t.pixelRatio);for(const{container:o,deconflictionEnabled:b,visible:h}of e){const e=o.attributeView;b?h?(this._prepare(o),this._collideVisible(u,o,i,n),this._collideInvisible(u,o)):a$4(o,((t,o)=>{for(const i of o)e.setLabelMinZoom(i.entityTexel,r$2);})):a$4(o,((t,o)=>{for(const n of o)f$2(n,i)?(e.setLabelMinZoom(n.entityTexel,c$2),h&&u.insertMetrics(n)):e.setLabelMinZoom(n.entityTexel,s$2);}));}}_isFiltered(o,i,n){const l=i.getFilterFlags(o),s=!n.hasFilter||!!(l&O),r=null==n.featureEffect||n.featureEffect.excludedLabelsVisible||!!(l&Q);return !(s&&r)}_prepare(e){const t=e.attributeView,o=new Set;a$4(e,((i,n)=>{for(const l of n){const i=l.entityTexel;if(o.has(i))continue;if(o.add(i),this._isFiltered(i,t,e.layerView)){t.setLabelMinZoom(i,s$2);continue}t.getLabelMinZoom(i)!==c$2?t.setLabelMinZoom(i,r$2):t.setLabelMinZoom(i,c$2);}}));}_collideVisible(e,t,o$1,r){const d=t.attributeView,u=new Set;a$4(t,((t,a)=>{for(let b=0;b<a.length;b++){const h=a[b].entityTexel;if(u.has(h))continue;if(t.key.level!==r){d.setLabelMinZoom(h,s$2),u.add(h);continue}if(!f$2(a[b],o$1)){d.setLabelMinZoom(h,s$2),u.add(h);continue}if(0!==d.getLabelMinZoom(h)){u.add(h);continue}let m=!1,M=!0;const g=b;let p=b;for(;p<a.length;p++){const t=a[p];if(t.entityTexel!==h)break;if(m)continue;switch(e.hasCollision(t)){case o:break;case r$3:m=!0,M=!1;break;case h$1:M=!1;}}if(!m)for(let t=g;t<p;t++)e.insertMetrics(a[t]);b=p-1,M||(u.add(h),d.setLabelMinZoom(h,m?s$2:c$2));}}));}_collideInvisible(e,t){const o$1=t.attributeView,s=new Set;a$4(t,((t,a)=>{for(let f=0;f<a.length;f++){const t=a[f].entityTexel;if(s.has(t))continue;if(o$1.getLabelMinZoom(t)!==r$2){s.add(t);continue}let d=!1,u=!0;const b=f;let h=f;for(;h<a.length;h++){const o$1=a[h];if(o$1.entityTexel!==t)break;if(d)continue;switch(e.hasCollision(o$1)){case o:break;case r$3:d=!0,u=!1;break;case h$1:u=!1;}}if(!d)for(let o=b;o<h;o++)e.insertMetrics(a[o]);f=h-1,u||(s.add(t),o$1.setLabelMinZoom(t,d?r$2:c$2));}}));}_transformMetrics(e){for(const{container:t,geometryType:o,vvEvaluators:i}of e)a$4(t,((e,n)=>{const l=t.attributeView,s=e.transforms.labelMat2d;s[4]=Math.round(s[4]),s[5]=Math.round(s[5]);const r="polyline"===o;for(const t of n){const{entityTexel:e,anchorX:o,anchorY:n}=t;let c=t.referenceBounds?.size??0;const a=i[0];if(null!=a){const t=a(l.getVVSize(e));c=isNaN(t)||null==t||t===1/0?c:t;}const f=t.directionX*(c/2),d=t.directionY*(c/2);for(const i of t.bounds){let e=o,t=n;if(r){let o=e+i.x+f,n=t+i.y+d;o=s[0]*o+s[2]*n+s[4],n=s[1]*o+s[3]*n+s[5],i.computedX=Math.floor(o),i.computedY=Math.floor(n);}else {e=s[0]*o+s[2]*n+s[4],t=s[1]*o+s[3]*n+s[5];const l=e+i.x+f,r=t+i.y+d;i.computedX=l,i.computedY=r;}}}}));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r$1=32;let a$3=class a extends S$1{constructor(e){super(e),this._lastUpdate=0,this.collisionEngine=new d$4,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null;}get updating(){return has("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:\n-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(e){const t=performance.now();t-this._lastUpdate>=r$1?(this._lastUpdate=t,this.doUpdate(e)):this.requestUpdate();}viewChange(){this.requestUpdate();}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate());}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e));}doUpdate(e){const t=this.view;if(t)try{const s=e.state.scale,o=t.featuresTilingScheme.getClosestInfoForScale(s).level;this.collisionEngine.run(t.allLayerViews.items,e,s,o);}catch(s){}}};e$3([y()],a$3.prototype,"updateRequested",void 0),e$3([y()],a$3.prototype,"updating",null),e$3([y()],a$3.prototype,"view",void 0),a$3=e$3([c$3("esri.views.2d.LabelManager")],a$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const a$2="esri-zoom-box",n={container:`${a$2}__container`,overlay:`${a$2}__overlay`,background:`${a$2}__overlay-background`,box:`${a$2}__outline`},h={zoom:"Shift",counter:"Ctrl"};let l$1=class l extends S$1{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this);}destroy(){this.view=null;}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[h.zoom],(t=>this._handleDrag(t,1)),_$2.INTERNAL),t.on("drag",[h.zoom,h.counter],(t=>this._handleDrag(t,-1)),_$2.INTERNAL)]);}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin();}_update(t,e,i,r){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=r,this._rafId||(this._rafId=requestAnimationFrame(this._redraw));}_end(t,e,r,s,o){const a=this.view,n=a.toMap(c$4(t+.5*r,e+.5*s));let h=Math.max(r/a.width,s/a.height);-1===o&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h});}_updateBox(t,e,i,r){const s=this._boxShape;s.setAttributeNS(null,"x",""+t),s.setAttributeNS(null,"y",""+e),s.setAttributeNS(null,"width",""+i),s.setAttributeNS(null,"height",""+r),s.setAttributeNS(null,"class",n.box);}_updateBackground(t,e,i,r){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,r,this.view.width,this.view.height));}_createContainer(){const t=document.createElement("div");t.className=n.container,this.view.root.appendChild(t),this._container=t;}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",n.background);const r=document.createElementNS("http://www.w3.org/2000/svg","rect"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),s.setAttributeNS(null,"class",n.overlay),s.appendChild(i),s.appendChild(r),this._container.appendChild(s),this._backgroundShape=i,this._boxShape=r,this._overlay=s;}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null;}_toSVGPath(t,e,i,r,s,o){const a=t+i,n=e+r;return "M 0 0 L "+s+" 0 L "+s+" "+o+" L 0 "+o+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const i=t.x,r=t.y,s=t.origin.x,o=t.origin.y;let a,n,h,l;switch(i>s?(a=s,h=i-s):(a=i,h=s-i),r>o?(n=o,l=r-o):(n=r,l=o-r),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e);}t.stopPropagation();}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:i,height:r}=this._box;this._updateBox(t,e,i,r),this._updateBackground(t,e,i,r),this._rafId=requestAnimationFrame(this._redraw);}};e$3([y()],l$1.prototype,"navigation",void 0),e$3([y()],l$1.prototype,"view",null),l$1=e$3([c$3("esri.views.2d.navigation.ZoomBox")],l$1);const c$1=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$2 = class t{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0;}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e);}this.lastValue=t;}reset(){this.lastValue=void 0,this.filteredDelta=void 0;}hasLastValue(){return void 0!==this.lastValue}hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return void 0===this.lastValue?NaN:t-this.lastValue}_updateDelta(t){void 0!==this.filteredDelta?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction));}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class l extends t$1{constructor(e,t,i,s,n){super(e,t,i),this._sceneVelocity=s,this.direction=n;}value(e){return super.valueFromInitialVelocity(this._sceneVelocity,e)}}class c{constructor(e=300,t=12,i=.84){this._minimumInitialVelocity=e,this._stopVelocity=t,this._friction=i,this.enabled=!0,this._time=new t$2(.6),this._screen=[new t$2(.4),new t$2(.4)],this._scene=[new t$2(.6),new t$2(.6),new t$2(.6)],this._tmpDirection=n$3();}add(e,t,i){if(this.enabled){if(this._time.hasLastValue()){if(this._time.computeDelta(i)<.015)return}this._screen[0].update(e[0]),this._screen[1].update(e[1]),this._scene[0].update(t[0]),this._scene[1].update(t[1]),this._scene[2].update(t[2]),this._time.update(i);}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset();}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const e=this._screen[0].filteredDelta,t=this._screen[1].filteredDelta,i=null==e||null==t?0:Math.sqrt(e*e+t*t),s=this._time.filteredDelta,n=null==s||null==i?0:i/s;return Math.abs(n)<this._minimumInitialVelocity?null:this.createMomentum(n,this._stopVelocity,this._friction)}createMomentum(s,n,r){o$2(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const c=s$3(this._tmpDirection);c>0&&g$2(this._tmpDirection,this._tmpDirection,1/c);const h=this._time.filteredDelta;return new l(s,n,r,null==h?0:c/h,this._tmpDirection)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d$3=class d extends S$1{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new c(500,6,.92),this.momentum=null,this.tmpMomentum=n$3(),this.momentumFinished=!1,this.viewpoint=new l$3({targetGeometry:new x$1,scale:0,rotation:0}),this._previousDrag=null,p$1((()=>this.momentumFinished),(()=>this.navigation.stop()));}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this._previousDrag=i;}update(t,i){this.addToEstimator(i);let o=i.center.x,e=i.center.y;const s=this._previousDrag;o=s?s.center.x-o:-o,e=s?e-s.center.y:e,t.viewpoint=kt(this.viewpoint,t.viewpoint,[o||0,e||0]),this._previousDrag=i;}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end();}addToEstimator(t){const i$1=t.center.x,o=t.center.y,e=i(-i$1,o),m=r$7(-i$1,o,0);this.momentumEstimator.add(e,m,.001*t.timestamp);}onAnimationUpdate(t){this.navigation.animationManager?.animateContinous(t.viewpoint,((i,o)=>{const{momentum:e,animationTime:s,tmpMomentum:m}=this,n=.001*o;if(!(this.momentumFinished=!e||e.isFinished(s))){const o=e.valueDelta(s,n);g$2(m,e.direction,o),kt(i,i,m),t.constraints.constrainByGeometry(i);}this.animationTime+=n;}));}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop());}};e$3([y()],d$3.prototype,"momentumFinished",void 0),e$3([y()],d$3.prototype,"viewpoint",void 0),e$3([y()],d$3.prototype,"navigation",void 0),d$3=e$3([c$3("esri.views.2d.navigation.actions.Pan")],d$3);const v$1=d$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$1 = class s{constructor(t=2.5,i=.01,s=.95,l=12){this._minimumInitialVelocity=t,this._stopVelocity=i,this._friction=s,this._maxVelocity=l,this.enabled=!0,this.value=new t$2(.8),this.time=new t$2(.3);}add(t,e){if(this.enabled&&null!=e){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset();}}this.time.update(e),this.value.update(t);}}reset(){this.value.reset(),this.time.reset();}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=e$2(e,-this._maxVelocity,this._maxVelocity),Math.abs(e)<this._minimumInitialVelocity?null:this.createMomentum(e,this._stopVelocity,this._friction)}createMomentum(t,e,s){return new t$1(t,e,s)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a$1 = class a extends s$1{constructor(t=3,a=.01,s=.95,o=12){super(t,a,s,o);}add(t,a){const s=this.value.lastValue;if(null!=s){let a=t-s;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;t=s+a;}super.add(t,a);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class r extends t$1{constructor(e,t,r){super(e,t,r);}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends s$1{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s);}add(e,t){super.add(Math.log(e),t);}createMomentum(e,t,s){return new r(e,t,s)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let _$1=class _ extends S$1{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new a$1(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new s,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new l$3({targetGeometry:new x$1,scale:0,rotation:0}),this.addHandles(p$1((()=>this._momentumFinished),(()=>this.navigation.stop())));}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1);}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,m=Math.abs(180*(i-this._startAngle)/Math.PI),n=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=n-m>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y]);}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e;}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end();}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o);}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp);}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager?.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),m=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),l=.001*i;if(this._momentumFinished=e&&m,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,l))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,l)):1;const e=n$4(),m=n$4();if(this._previousCenter){o$3(e,this._previousCenter.x,this._previousCenter.y),rt(m,t.size,t.padding),u$1(e,e,m);const{constraints:r,scale:l}=t,p=l*s;s<1&&!r.canZoomInTo(p)?(s=l/r.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!r.canZoomOutTo(p)&&(s=l/r.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Gt(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o);}}this._animationTime+=l;}));}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop());}};e$3([y()],_$1.prototype,"_momentumFinished",void 0),e$3([y()],_$1.prototype,"viewpoint",void 0),e$3([y()],_$1.prototype,"navigation",void 0),_$1=e$3([c$3("esri.views.2d.navigation.actions.Pinch")],_$1);const d$2=_$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const d$1=n$4(),g$1=n$4();let j=class extends S$1{constructor(t){super(t),this._previousCenter=n$4(),this.viewpoint=new l$3({targetGeometry:new x$1,scale:0,rotation:0});}begin(t,e){this.navigation.begin(),o$3(this._previousCenter,e.center.x,e.center.y);}update(t,e){const{state:{size:o,padding:r}}=t;o$3(d$1,e.center.x,e.center.y),$(g$1,o,r),t.viewpoint=bt(this.viewpoint,t.state.paddedViewState.viewpoint,pt(g$1,this._previousCenter,d$1)),r$8(this._previousCenter,d$1);}end(){this.navigation.end();}};e$3([y()],j.prototype,"viewpoint",void 0),e$3([y()],j.prototype,"navigation",void 0),j=e$3([c$3("esri.views.2d.actions.Rotate")],j);const f$1=j;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v=10,w=1,g=new l$3({targetGeometry:new x$1}),d=[0,0],_=250;let T=class extends S$1{constructor(t){super(t),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1;}initialize(){this.pan=new v$1({navigation:this}),this.rotate=new f$1({navigation:this}),this.pinch=new d$2({navigation:this}),this.zoomBox=new c$1({view:this.view,navigation:this});}destroy(){this.pan=u$2(this.pan),this.rotate=u$2(this.rotate),this.pinch=u$2(this.pinch),this.zoomBox=u$2(this.zoomBox),this.animationManager=null;}begin(){this.stop(),this._set("interacting",!0);}end(){this._lastEventTimestamp=performance.now(),this._startTimer(_);}async zoom(t,i=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(i):this.zoomOut(i);this.setViewpoint(i,t,0,[0,0]);}async zoomIn(t){const i=this.view,o=i.constraints.snapToNextScale(i.scale);return this._zoomToScale(o,t)}async zoomOut(t){const i=this.view,o=i.constraints.snapToPreviousScale(i.scale);return this._zoomToScale(o,t)}setViewpoint(t,i,o,n){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end();}setViewpointImmediate(t,i=0,o=[0,0],n=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o);}continousRotateClockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinous(t,(t=>{bt(t,t,-w);}));}continousRotateCounterclockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinous(t,(t=>{bt(t,t,w);}));}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0);}continousPanLeft(){this._continuousPan([-v,0]);}continousPanRight(){this._continuousPan([v,0]);}continousPanUp(){this._continuousPan([0,v]);}continousPanDown(){this._continuousPan([0,-v]);}continuousPanVector({x:t,y:i}){this._continuousPan([t*v,i*v]);}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1));}_continuousPan(t){const i=this.view.viewpoint;this.animationManager?.animateContinous(i,(i=>{kt(i,i,t),this.view.constraints.constrainByGeometry(i);}));}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-(this._lastEventTimestamp??0);t<_?this._endTimer=this._startTimer(t):this._set("interacting",!1);}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:i,right:o,top:n,bottom:e}}=this.view;return d[0]=.5*(t[0]-o+i),d[1]=.5*(t[1]-e+n),d}async _zoomToScale(t,i=this._getDefaultAnchor()){const{view:o}=this,{constraints:n,scale:e,viewpoint:s,size:a,padding:r}=o,c=n.canZoomInTo(t),m=n.canZoomOutTo(t);if(!(t<e&&!c||t>e&&!m))return Rt(g,s,t/e,0,i,a,r),n.constrainByGeometry(g),o.goTo(g,{animate:!0,pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(t,i,o,n,e){const{view:s}=this,{size:a,padding:r,constraints:m,scale:p,viewpoint:u}=s,l=p*o,v=m.canZoomInTo(l),w=m.canZoomOutTo(l);return (o<1&&!v||o>1&&!w)&&(o=1),kt(u,u,e),Rt(t,u,o,n,i,a,r),m.constrainByGeometry(t)}};e$3([y()],T.prototype,"animationManager",void 0),e$3([y({type:Boolean,readOnly:!0})],T.prototype,"interacting",void 0),e$3([y()],T.prototype,"pan",void 0),e$3([y()],T.prototype,"pinch",void 0),e$3([y()],T.prototype,"rotate",void 0),e$3([y()],T.prototype,"view",void 0),e$3([y()],T.prototype,"zoomBox",void 0),T=e$3([c$3("esri.views.2d.navigation.MapViewNavigation")],T);const f=T;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const a={shaders:{vertexShader:n$2("magnifier/magnifier.vert"),fragmentShader:n$2("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function t(r){return e$4(r,a)}

export { r$5 as a, t as b, a as c, a$3 as d, e$1 as e, f, n$1 as n, r$6 as r, t$3 as t };
