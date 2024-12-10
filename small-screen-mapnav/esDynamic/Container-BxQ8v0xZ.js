import{O as g,P as m,Q,dH as J,ac as A,D as N,ad as I,l9 as $,la as tt,lb as et,cP as it,ag as F,bo as st,eO as nt,bG as rt}from"./main-D8a2_wp1.js";import{l as ot,c as L}from"./highlightReasons-DopVoYY9.js";import{I as lt,r as C,a as W}from"./definitions-Doe0g1C2.js";import{D as ht,O as at,I as b}from"./enums-DDkmfb-t.js";import{e as ct,c as dt}from"./Texture-qX2W_hus.js";const R=-1;let d=class extends J{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=A("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(q(t))}catch(e){this._transitionTo([]),N.getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return this._to!==null}canTransitionTo(t){try{return this.scale>0&&U(this._current,q(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&U(this._current,t,this.scale)?(this._final=t,this._to=I(t),ut(this._current,this._to,this.scale),this._from=I(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?I(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const s=this._current[i],n=this._from[i],a=this._to[i];s.scale=ft(n.scale,a.scale,e);for(let o=0;o<s.effects.length;o++){const l=s.effects[o],r=n.effects[o],u=a.effects[o];l.interpolate(r,u,e)}}e===1&&(this._current=this._final,this._set("effects",this._current[0]?I(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),this._current.length===0)return;const e=this._current,i=this._current.length-1;let s,n,a=1;if(e.length===1||t>=e[0].scale)n=s=e[0].effects;else if(t<=e[i].scale)n=s=e[i].effects;else for(let o=0;o<i;o++){const l=e[o],r=e[o+1];if(l.scale>=t&&r.scale<=t){a=(t-l.scale)/(r.scale-l.scale),s=l.effects,n=r.effects;break}}for(let o=0;o<this.effects.length;o++)this.effects[o].interpolate(s[o],n[o],a)}};function q(t){const e=$(t)||[];return pt(e)?[{scale:R,effects:e}]:e}function U(t,e,i){return!t[0]?.effects||!e[0]?.effects?!0:!((t[0]?.scale===R||e[0]?.scale===R)&&(t.length>1||e.length>1)&&i<=0)&&tt(t[0].effects,e[0].effects)}function ut(t,e,i){const s=t.length>e.length?t:e,n=t.length>e.length?e:t,a=n[n.length-1],o=a?.scale??i,l=a?.effects??[];for(let r=n.length;r<s.length;r++)n.push({scale:o,effects:[...l]});for(let r=0;r<s.length;r++)n[r].scale=n[r].scale===R?i:n[r].scale,s[r].scale=s[r].scale===R?i:s[r].scale,et(n[r].effects,s[r].effects)}function ft(t,e,i){return t+(e-t)*i}function pt(t){const e=t[0];return!!e&&"type"in e}g([m()],d.prototype,"_to",void 0),g([m()],d.prototype,"duration",void 0),g([m({value:""})],d.prototype,"effect",null),g([m({readOnly:!0})],d.prototype,"effects",void 0),g([m({readOnly:!0})],d.prototype,"hasEffects",null),g([m({value:0})],d.prototype,"scale",null),g([m({readOnly:!0})],d.prototype,"transitioning",null),d=g([Q("esri.layers.effects.EffectView")],d);let V=class extends it{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=F(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=F(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&this.computedOpacity===0&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){const i=A("mapview-transitions-duration")===0?0:1/A("mapview-transitions-duration");if(this.fadeTransitionEnabled&&i!==0){const s=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===s)this.computedVisible=this.visible;else{const a=t*i;this.computedOpacity=n>s?Math.max(s,n-a):Math.min(s,n+a),this.computedVisible=this.computedOpacity>0;const o=s===this.computedOpacity;this.inFadeTransition=!o,o||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}};const B=1,gt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],_t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],y=256,_={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},M=()=>N.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function mt(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=_.outlineWidth,e.outerHaloWidth=_.outerHaloWidth,e.innerHaloWidth=_.innerHaloWidth,e.outlinePosition=_.outlinePosition}const Tt=[0,0,0,0];class K{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_.outlinePosition,outlineWidth:_.outlineWidth,innerHaloWidth:_.innerHaloWidth,outerHaloWidth:_.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*y),this._minMaxDistance=[0,0]}setHighlightOptions(e){const i=this._convertedHighlightOptions;mt(e,i);const s=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,n=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,o=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,l=Math.sqrt(Math.PI/2)*B,r=Math.abs(s)>l?Math.round(10*(Math.abs(s)-l))/10:0,u=Math.abs(o)>l?Math.round(10*(Math.abs(o)-l))/10:0;let f;r&&!u?M().error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&u?M().error("The inner rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&u&&M().error("The highlight is "+Math.max(r,u)+"px away from the edge of the feature; consider reducing some width values.");const h=[void 0,void 0,void 0,void 0];function T(c,v,p){h[0]=(1-p)*c[0]+p*v[0],h[1]=(1-p)*c[1]+p*v[1],h[2]=(1-p)*c[2]+p*v[2],h[3]=(1-p)*c[3]+p*v[3]}const{_texelData:E}=this;for(let c=0;c<y;++c)f=s+c/(y-1)*(o-s),f<s?(h[0]=0,h[1]=0,h[2]=0,h[3]=0):f<n?T(Tt,i.outlineColor,(f-s)/(n-s)):f<a?[h[0],h[1],h[2],h[3]]=i.outlineColor:f<o?T(i.outlineColor,i.fillColor,(f-a)/(o-a)):[h[0],h[1],h[2],h[3]]=i.fillColor,E[4*c]=255*h[0],E[4*c+1]=255*h[1],E[4*c+2]=255*h[2],E[4*c+3]=255*h[3];this._minMaxDistance[0]=s,this._minMaxDistance[1]=o,this._shadeTexChanged=!0}applyHighlightOptions(e,i){if(!this._shadeTex){const s=new ct;s.wrapMode=ht.CLAMP_TO_EDGE,s.width=y,s.height=1,this._shadeTex=new dt(e,s)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,y,1,this._texelData),this._shadeTexChanged=!1),e.bindTexture(this._shadeTex,lt),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<ot.length)-1,activeGradient:this}]}}let Rt=class{constructor(){this.type="multi";const t={};for(const e in L)t[e]=new K;this.gradients=t}setHighlightOptions(t){for(const e in L){const i=L[e](t);this.gradients[e].setHighlightOptions(i)}}applyHighlightOptions(t,e,i){this.gradients[i].applyHighlightOptions(t,e)}destroy(){for(const t in L)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1;const e=[];for(const i in this.gradients){const s=this.gradients[i];e.push({activeReasons:t,activeGradient:s}),t<<=1}return e}};var X,S,w,Y,P,k,O,H,G;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(X||(X={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(S||(S={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(w||(w={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(Y||(Y={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(P||(P={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(k||(k={})),function(t){t[t.All=0]="All",t[t.Highlight=1]="Highlight",t[t.InsideEffect=2]="InsideEffect",t[t.OutsideEffect=3]="OutsideEffect"}(O||(O={})),function(t){t[t.BATCHING=0]="BATCHING",t[t.STRICT_ORDER=1]="STRICT_ORDER",t[t.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(H||(H={})),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT"}(G||(G={}));const Z={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:t=>t.stencilRef,compare:at.EQUAL,mask:255,op:{fail:b.KEEP,zFail:b.KEEP,zPass:b.REPLACE}}}},yt={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},Ot={...Z,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function z({pixelRatio:t,state:e,displayLevel:i,requiredLevel:s},n){const a=1/2**(i-n.key.level),o=1/2**(s-n.key.level);return{displayMat3:Array.from(e.displayMat3),displayViewMat3:Array.from(e.displayViewMat3),displayViewScreenMat3:Array.from(n.transforms.displayViewScreenMat3),viewMat3:Array.from(e.viewMat3),tileMat3:Array.from(n.transforms.tileMat3),displayZoomFactor:a,requiredZoomFactor:o,tileOffset:[n.x,n.y],currentScale:e.scale,currentZoom:i,metersPerSRUnit:st(e.spatialReference),rotation:e.rotation,pixelRatio:t}}function D(t){return t.passOptions?.type==="highlight"}function x(t){return t.passOptions?.type==="hittest"}function Et(t){if(!x(t))return null;const{position:e,distance:i,smallSymbolDistance:s,smallSymbolSizeThreshold:n}=t.passOptions;return{position:e,distance:i,smallSymbolDistance:s,smallSymbolSizeThreshold:n}}function vt(t){if(!D(t))return null;const{activeReasons:e,highlightAll:i}=t.passOptions;return{activeReasons:e,highlightAll:i?1:0}}function It(t,e,i){const s={};for(const n in i)i[n]instanceof Function?s[n]=i[n](t,e):s[n]=i[n];return s}function Lt(t,e){const{attributeView:i,context:s}=t;return{storage:i.getUniforms(s),view:z(t,e),hittestRequest:Et(t),highlight:vt(t)}}function Ct(t){return{inside:t.selection===O.InsideEffect,outside:t.selection===O.OutsideEffect}}function j(t){return x(t)?yt:D(t)&&t.passOptions.stepType==="clear"?Ot:Z}function At(t){const{row:e,col:i}=t.key,s=i*W,n=e*W;return{tileOffsetFromLocalOrigin:[s%C,n%C],maxIntsToLocalOrigin:[Math.floor(s/C),Math.floor(n/C)]}}const bt=new nt({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function Mt(t){return bt.toJSON(t)}function St(t){const{bandCount:e,attributeTable:i,colormap:s,pixelType:n}=t.raster.rasterInfo;return e===1&&(i!=null||s!=null||n==="u8"||n==="s8")}function wt(t,e){return t?.type==="single"&&e.multiHighlightEnabled&&(t.destroy(),t=null),t?.type!=="multi"||e.multiHighlightEnabled||(t.destroy(),t=null),t||(t=e.multiHighlightEnabled?new Rt:new K),t.setHighlightOptions(e),t}function Pt(t,e,i){const{painter:s,highlightGradient:n}=t,{highlight:a}=s.effects;if(!n)return;const o=t.passOptions,l=n.getReasonsWithGradients();for(let r=0;r<l.length;r++){const u={...t,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"burn",highlightAll:e}};if(a.bind(u),i(u),r<l.length-1){let h=0;for(let T=r+1;T<l.length;T++)h|=l[T].activeReasons;i({...t,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:h,stepType:"clear",highlightAll:e}})}const f={...t,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"draw",highlightAll:e}};s.setPipelineState(j(t)),s.updatePipelineState(t.context),a.draw(f),a.unbind()}t.passOptions=o}class Ht extends V{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(i=>i.clips=e)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new d),this._effectView.effect=e,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){if(!e)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions?.equals(e)||(this._highlightOptions=e,this._highlightGradient=wt(this._highlightGradient,e),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(e=>e.hasHighlight)}get hasLabels(){return this.children.some(e=>e.hasLabels)}get requiresDedicatedFBO(){return this.children.some(e=>"blendMode"in e&&e.blendMode&&e.blendMode!=="normal")}updateTransitionProperties(e,i){super.updateTransitionProperties(e,i),this._effectView&&(this._effectView.transitionStep(e,i),this._effectView.transitioning&&this.requestRender())}doRender(e){const i=this.createRenderParams(e),{painter:s}=i;s.beforeRenderLayer(i,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(i),s.afterRenderLayer(i,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,i=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const s=e.parent;return s&&s!==this&&s.removeChild(e),i>=this.children.length?this.children.push(e):this.children.splice(i,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const i=this.children.splice(e,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,i}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}beforeRender(e){super.beforeRender(e);for(const i of this.children)i.beforeRender(e)}afterRender(e){super.afterRender(e);for(const i of this.children)i.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:rt()}}onAttach(){super.onAttach();const e=this.stage;for(const i of this.children)i.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const i of this.children)i.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}}export{P as A,S as E,w as L,j as M,H as N,O as R,G as S,Pt as a,d as b,Mt as c,Ct as d,z as e,D as f,It as g,Ht as h,_t as i,B as o,x as p,St as r,V as s,gt as t,At as w,Lt as y};