const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gif-BvOLBPfo.js","./main-BtYHawlJ.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./apng-BHlgJdVv.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { a0 as ot, ae as t, U as U$1, af as b$1, s as s$1 } from './main-BtYHawlJ.js';

let i=null,o=!0;function s(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e)}catch(a){o=!1;}return m(t,e,r)}function c(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e,r)}catch(i){o=!1;}const n=m(e,r,a);return n.data.set(t,0),n}function f(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function m(t,e,r){return r||(r=f()),r.getContext("2d").createImageData(t,e)}async function u(a,n){const i=window.URL.createObjectURL(a);try{const{data:e}=await U$1(i,{...n,responseType:"image"});return e}catch(o){if(!b$1(o))throw new s$1("invalid-image",`Could not fetch requested image at ${i}`);throw o}finally{window.URL.revokeObjectURL(i);}}async function p(t,e){const{arrayBuffer:r,mediaType:a}=await d(t,e),n="image/png"===a;if("image/gif"===a){const{isAnimatedGIF:t,parseGif:a}=await __vitePreload(() => import('./gif-BvOLBPfo.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);if(t(r))return a(r,e)}if(n){const{isAnimatedPNG:t,parseApng:a}=await __vitePreload(() => import('./apng-BHlgJdVv.js'),true?__vite__mapDeps([4,1,2,3]):void 0,import.meta.url);if(t(r))return a(r,e)}return u(new Blob([r],{type:a}),e)}async function d(e,r){const i=ot(e);if(i?.isBase64)return {arrayBuffer:t(i.data),mediaType:i.mediaType};const o=await U$1(e,{responseType:"array-buffer",...r});return {arrayBuffer:o.data,mediaType:o.getHeader?.("Content-Type")??""}}

export { c, p, s };
