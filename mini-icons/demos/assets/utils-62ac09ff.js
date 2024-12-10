import { ay as e, az as n$1 } from './main-13aeab07.js';
import { d } from './enums-d24bcbbf.js';
import { e as e$1 } from './AttributeStore-7429df11.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(t){return n$1(t.frameDurations.reduce(((t,e)=>t+e),0))}function o(t){const{width:e,height:r}=t,i=t.frameDurations.reverse(),a=e=>{const r=t.frameDurations.length-1-e;return t.getFrame(r)};return {frameCount:t.frameCount,duration:t.duration,frameDurations:i,getFrame:a,width:e,height:r}}function s(t,r){const{width:i,height:a,getFrame:n}=t,o=r/t.duration,s=t.frameDurations.map((t=>n$1(t*o)));return {frameCount:t.frameCount,duration:t.duration,frameDurations:s,getFrame:n,width:i,height:a}}function m(t,r){const{width:i,height:a,getFrame:n}=t,o=t.frameDurations.slice(),s=o.shift();return o.unshift(n$1(s+r)),{frameCount:t.frameCount,duration:t.duration+r,frameDurations:o,getFrame:n,width:i,height:a}}function u(t,r){const{width:i,height:a,getFrame:n}=t,o=t.frameDurations.slice(),s=o.pop();return o.push(n$1(s+r)),{frameCount:t.frameCount,duration:t.duration+r,frameDurations:o,getFrame:n,width:i,height:a}}class h{constructor(t,e,r,i){this._animation=t,this._repeatType=r,this._onFrameData=i,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let a=0;for(;e>a;)a+=this.timeToFrame,this.nextFrame();const n=this._animation.getFrame(this._currentFrame);this._onFrameData(n);}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case d.None:this._currentFrame-=this._direction;break;case d.Loop:this._currentFrame=0;break;case d.Oscillate:this._currentFrame-=this._direction,this._direction=-1;}}else if(-1===this._currentFrame)switch(this._repeatType){case d.None:this._currentFrame-=this._direction;break;case d.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case d.Oscillate:this._currentFrame-=this._direction,this._direction=1;}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const t=this._animation.getFrame(this._currentFrame);this._onFrameData(t);}}function c(t,r,c,f){let l,{repeatType:d$1}=r;if(null==d$1&&(d$1=d.Loop),!0===r.reverseAnimation&&(t=o(t)),null!=r.duration&&(t=s(t,n$1(1e3*r.duration))),null!=r.repeatDelay){const a=1e3*r.repeatDelay;d$1===d.Loop?t=u(t,n$1(a)):d$1===d.Oscillate&&(t=m(u(t,n$1(a/2)),n$1(a/2)));}if(null!=r.startTimeOffset)l=n$1(1e3*r.startTimeOffset);else if(null!=r.randomizeStartTime){const i=82749913,o=null!=r.randomizeStartSeed?r.randomizeStartSeed:i,s=e$1(c,o);l=n$1(s*n(t));}else l=n$1(0);return new h(t,l,d$1,f)}function f(e$1,r,i,a){const n=null==r.playAnimation||r.playAnimation,o=c(e$1,r,i,a);let s,m=o.timeToFrame;function u(){s=n?setTimeout((()=>{o.nextFrame(),m=o.timeToFrame,u();}),m):void 0;}return u(),e((()=>n&&clearTimeout(s)))}

export { f };
