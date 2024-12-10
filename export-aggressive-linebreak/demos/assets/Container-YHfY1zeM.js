import { aW as e$1, aX as y$1, aY as c$1, dY as S$1, V as has, H as s$2, W as a$4, kN as y$2, kO as t$1, kP as e$2, cU as o$1, Z as L$1, bd as W, eY as s$4, fk as e$4 } from './main-hedDFcxy.js';
import { l as l$2, c as c$2 } from './highlightReasons-CKnlFFr1.js';
import { J, s as s$3, a as a$5 } from './definitions-slUvtMCM.js';
import { D as D$1, O, I as I$1 } from './enums-CgzwTbC2.js';
import { e as e$3, m as m$2 } from './Texture-BxJm3T_A.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l$1=-1;let h$3=class h extends S$1{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=has("mapview-transitions-duration"),this.effects=[];}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(a$3(t));}catch(e){this._transitionTo([]),s$2.getLogger(this).warn("Invalid Effect",{effect:t,error:e});}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t);}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&u$2(this._current,a$3(t),this.scale)}catch{return !1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e);}endTransitions(){this._applyTimeTransition(this.duration);}_transitionTo(t){this.scale>0&&u$2(this._current,t,this.scale)?(this._final=t,this._to=a$4(t),_$1(this._current,this._to,this.scale),this._from=a$4(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?a$4(this._current[0].effects):[]);}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const t=this._current[s],r=this._from[s],i=this._to[s];t.scale=p$1(r.scale,i.scale,e);for(let s=0;s<t.effects.length;s++){const n=t.effects[s],c=r.effects[s],o=i.effects[s];n.interpolate(c,o,e);}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?a$4(this._current[0].effects):[]),this._from=this._to=this._final=null);}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let r,i,n=1;if(1===e.length||t>=e[0].scale)i=r=e[0].effects;else if(t<=e[s].scale)i=r=e[s].effects;else for(let c=0;c<s;c++){const s=e[c],o=e[c+1];if(s.scale>=t&&o.scale<=t){n=(t-s.scale)/(o.scale-s.scale),r=s.effects,i=o.effects;break}}for(let c=0;c<this.effects.length;c++){this.effects[c].interpolate(r[c],i[c],n);}}};function a$3(t){const e=y$2(t)||[];return m(e)?[{scale:l$1,effects:e}]:e}function u$2(t,e,s){if(!t[0]?.effects||!e[0]?.effects)return !0;return !((t[0]?.scale===l$1||e[0]?.scale===l$1)&&(t.length>1||e.length>1)&&s<=0)&&t$1(t[0].effects,e[0].effects)}function _$1(t,e,s){const r=t.length>e.length?t:e,i=t.length>e.length?e:t,n=i[i.length-1],c=n?.scale??s,o=n?.effects??[];for(let f=i.length;f<r.length;f++)i.push({scale:c,effects:[...o]});for(let h=0;h<r.length;h++)i[h].scale=i[h].scale===l$1?s:i[h].scale,r[h].scale=r[h].scale===l$1?s:r[h].scale,e$2(i[h].effects,r[h].effects);}function p$1(t,e,s){return t+(e-t)*s}function m(t){const e=t[0];return !!e&&"type"in e}e$1([y$1()],h$3.prototype,"_to",void 0),e$1([y$1()],h$3.prototype,"duration",void 0),e$1([y$1({value:""})],h$3.prototype,"effect",null),e$1([y$1({readOnly:!0})],h$3.prototype,"effects",void 0),e$1([y$1({readOnly:!0})],h$3.prototype,"hasEffects",null),e$1([y$1({value:0})],h$3.prototype,"scale",null),e$1([y$1({readOnly:!0})],h$3.prototype,"transitioning",null),h$3=e$1([c$1("esri.layers.effects.EffectView")],h$3);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const s$1=0===has("mapview-transitions-duration")?0:1/has("mapview-transitions-duration");let i$1 = class i extends o$1{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0;}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender();}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender());}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t?.trashDisplayObject(this);}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender());}get hasLabels(){return !1}get hasHighlight(){return !1}get hasBlending(){return !1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=L$1(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=L$1(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender();}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale),this.setTransform(e.state);}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null);}remove(){this.parent?.removeChild(this);}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e);}requestRender(){this.stage&&this.stage.requestRender();}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach");}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled&&0!==s$1){const t=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===t)this.computedVisible=this.visible;else {const r=e*s$1;this.computedOpacity=i>t?Math.max(t,i-r):Math.min(t,i+r),this.computedVisible=this.computedOpacity>0;const a=t===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender();}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible;}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender());}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=1,t=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n$1=256,e={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const a$2=()=>s$2.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function u$1(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=e.outlineWidth,i.outerHaloWidth=e.outerHaloWidth,i.innerHaloWidth=e.innerHaloWidth,i.outlinePosition=e.outlinePosition;}const d$1=[0,0,0,0];class g{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:e.outlinePosition,outlineWidth:e.outlineWidth,innerHaloWidth:e.innerHaloWidth,outerHaloWidth:e.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*n$1),this._minMaxDistance=[0,0];}setHighlightOptions(o$1){const i=this._convertedHighlightOptions;u$1(o$1,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,e=i.outlinePosition-i.outlineWidth/2,n=i.outlinePosition+i.outlineWidth/2,h=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,s=Math.sqrt(Math.PI/2)*o,g=Math.abs(t)>s?Math.round(10*(Math.abs(t)-s))/10:0,f=Math.abs(h)>s?Math.round(10*(Math.abs(h)-s))/10:0;let C;g&&!f?a$2().error("The outer rim of the highlight is "+g+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!g&&f?a$2().error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):g&&f&&a$2().error("The highlight is "+Math.max(g,f)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3];}const{_texelData:p}=this;for(let r=0;r<n$1;++r)C=t+r/(n$1-1)*(h-t),C<t?(c[0]=0,c[1]=0,c[2]=0,c[3]=0):C<e?m(d$1,i.outlineColor,(C-t)/(e-t)):C<n?[c[0],c[1],c[2],c[3]]=i.outlineColor:C<h?m(i.outlineColor,i.fillColor,(C-n)/(h-n)):[c[0],c[1],c[2],c[3]]=i.fillColor,p[4*r]=255*c[0],p[4*r+1]=255*c[1],p[4*r+2]=255*c[2],p[4*r+3]=255*c[3];this._minMaxDistance[0]=t,this._minMaxDistance[1]=h,this._shadeTexChanged=!0;}applyHighlightOptions(o,i){if(!this._shadeTex){const i=new e$3;i.wrapMode=D$1.CLAMP_TO_EDGE,i.width=n$1,i.height=1,this._shadeTex=new m$2(o,i);}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,n$1,1,this._texelData),this._shadeTexChanged=!1),o.bindTexture(this._shadeTex,J),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance);}destroy(){this._shadeTex?.dispose(),this._shadeTex=null;}getReasonsWithGradients(){return [{activeReasons:(1<<l$2.length)-1,activeGradient:this}]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s{constructor(){this.type="multi";const s={};for(const n in c$2)s[n]=new g;this.gradients=s;}setHighlightOptions(i){for(const s in c$2){const n=c$2[s](i);this.gradients[s].setHighlightOptions(n);}}applyHighlightOptions(t,i,s){this.gradients[s].applyHighlightOptions(t,i);}destroy(){for(const i in c$2)this.gradients[i].destroy();}getReasonsWithGradients(){let t=1;const i=[];for(const s in this.gradients){const n=this.gradients[s];i.push({activeReasons:t,activeGradient:n}),t<<=1;}return i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var T,E,L,I,A,_,R,N,S;!function(T){T[T.FILL=0]="FILL",T[T.LINE=1]="LINE",T[T.MARKER=2]="MARKER",T[T.TEXT=3]="TEXT",T[T.LABEL=4]="LABEL";}(T||(T={})),function(T){T[T.NONE=0]="NONE",T[T.MAP=1]="MAP",T[T.LABEL=2]="LABEL",T[T.LABEL_ALPHA=4]="LABEL_ALPHA",T[T.HITTEST=8]="HITTEST",T[T.HIGHLIGHT=16]="HIGHLIGHT",T[T.CLIP=32]="CLIP",T[T.DEBUG=64]="DEBUG",T[T.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES";}(E||(E={})),function(T){T[T.SIZE=0]="SIZE",T[T.COLOR=1]="COLOR",T[T.OPACITY=2]="OPACITY",T[T.ROTATION=3]="ROTATION";}(L||(L={})),function(T){T[T.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",T[T.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",T[T.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",T[T.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE";}(I||(I={})),function(T){T[T.SPRITE=0]="SPRITE",T[T.GLYPH=1]="GLYPH";}(A||(A={})),function(T){T[T.DEFAULT=0]="DEFAULT",T[T.SIMPLE=1]="SIMPLE",T[T.DOT_DENSITY=2]="DOT_DENSITY",T[T.OUTLINE_FILL=3]="OUTLINE_FILL",T[T.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",T[T.HEATMAP=5]="HEATMAP",T[T.PIE_CHART=6]="PIE_CHART";}(_||(_={})),function(T){T[T.All=0]="All",T[T.Highlight=1]="Highlight",T[T.InsideEffect=2]="InsideEffect",T[T.OutsideEffect=3]="OutsideEffect";}(R||(R={})),function(T){T[T.BATCHING=0]="BATCHING",T[T.STRICT_ORDER=1]="STRICT_ORDER",T[T.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT";}(N||(N={})),function(T){T[T.FILL=0]="FILL",T[T.LINE=1]="LINE",T[T.MARKER=2]="MARKER",T[T.TEXT=3]="TEXT";}(S||(S={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:t=>t.stencilRef,compare:O.EQUAL,mask:255,op:{fail:I$1.KEEP,zFail:I$1.KEEP,zPass:I$1.REPLACE}}}},l={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},a={...n,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function c({pixelRatio:e,state:i,displayLevel:o,requiredLevel:r},s){const n=1/2**(o-s.key.level),l=1/2**(r-s.key.level);return {displayMat3:Array.from(i.displayMat3),displayViewMat3:Array.from(i.displayViewMat3),displayViewScreenMat3:Array.from(s.transforms.displayViewScreenMat3),viewMat3:Array.from(i.viewMat3),tileMat3:Array.from(s.transforms.tileMat3),displayZoomFactor:n,requiredZoomFactor:l,tileOffset:[s.x,s.y],currentScale:i.scale,currentZoom:o,metersPerSRUnit:W(i.spatialReference),rotation:i.rotation,pixelRatio:e}}function f$1(t){return "highlight"===t.passOptions?.type}function m$1(t){return "hittest"===t.passOptions?.type}function p(t){if(!m$1(t))return null;const{position:e}=t.passOptions,i=t.pixelRatio,o=has("esri-mobile");return {position:e,distance:has(o?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance")*i,smallSymbolDistance:has(o?"hittest-2d-mobile-tolerance":"hittest-2d-small-symbol-tolerance")*i,smallSymbolSizeThreshold:has("hittest-2d-small-symbol-tolerance-threshold")}}function u(t){if(!f$1(t))return null;const{activeReasons:e,highlightAll:i}=t.passOptions;return {activeReasons:e,highlightAll:i?1:0}}function d(t,e,i){const o={};for(const r in i)i[r]instanceof Function?o[r]=i[r](t,e):o[r]=i[r];return o}function h$2(t,e){const{attributeView:i,context:o}=t;return {storage:i.getUniforms(o),view:c(t,e),hittestRequest:p(t),highlight:u(t)}}function y(t){return {inside:t.selection===R.InsideEffect,outside:t.selection===R.OutsideEffect}}function M(t){return m$1(t)?l:f$1(t)&&"clear"===t.passOptions.stepType?a:n}function w(t){const{row:o,col:r}=t.key,s=r*a$5,n=o*a$5;return {tileOffsetFromLocalOrigin:[s%s$3,n%s$3],maxIntsToLocalOrigin:[Math.floor(s/s$3),Math.floor(n/s$3)]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
new s$4({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function r(t){const{bandCount:e,attributeTable:i,colormap:n,pixelType:l}=t.raster.rasterInfo;return 1===e&&(null!=i||null!=n||"u8"===l||"s8"===l)}function h$1(t,n){return "single"===t?.type&&n.multiHighlightEnabled&&(t.destroy(),t=null),"multi"!==t?.type||n.multiHighlightEnabled||(t.destroy(),t=null),t||(t=n.multiHighlightEnabled?new s:new g),t.setHighlightOptions(n),t}function a$1(t,e,i){const{painter:l,highlightGradient:s}=t,{highlight:o}=l.effects;if(!s)return;const r=t.passOptions,h=s.getReasonsWithGradients();for(let a=0;a<h.length;a++){const s={...t,passOptions:{type:"highlight",activeGradient:h[a].activeGradient,activeReasons:h[a].activeReasons,stepType:"burn",highlightAll:e}};if(o.bind(s),i(s),a<h.length-1){let n=0;for(let t=a+1;t<h.length;t++)n|=h[t].activeReasons;i({...t,passOptions:{type:"highlight",activeGradient:h[a].activeGradient,activeReasons:n,stepType:"clear",highlightAll:e}});}const r={...t,passOptions:{type:"highlight",activeGradient:h[a].activeGradient,activeReasons:h[a].activeReasons,stepType:"draw",highlightAll:e}};l.setPipelineState(M(t)),l.updatePipelineState(t.context),o.draw(r),o.unbind();}t.passOptions=r;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class h extends i$1{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null;}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender();}get children(){return this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e));}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new h$3),this._effectView.effect=e,this.requestRender());}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){if(!e)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(e)||(this._highlightOptions=e,this._highlightGradient=h$1(this._highlightGradient,e),this.requestRender());}get hasBlending(){return !!this.blendMode}get hasHighlight(){return this.children.some((e=>e.hasHighlight))}get hasLabels(){return this.children.some((e=>e.hasLabels))}get requiresDedicatedFBO(){return this.children.some((e=>"blendMode"in e&&e.blendMode&&"normal"!==e.blendMode))}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender());}doRender(e){const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity);}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender());}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0;}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1);}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e);}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e);}_createTransforms(){return {displayViewScreenMat3:e$4()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e;}onDetach(){super.onDetach();for(const e of this.children)e.stage=null;}renderChildren(e){for(const t of this.children)t.processRender(e);}createRenderParams(e){return {...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}}

export { A, E, L, M, N, R, S, a$1 as a, h$3 as b, h$2 as c, c as d, d as e, f$1 as f, i as g, h, i$1 as i, m$1 as m, o, r, t, w, y };
