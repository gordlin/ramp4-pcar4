import { A as o$1 } from './main-b051658a.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(t,n){for(var e=0;e<n.length;e++){const r=n[e];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>r[n]});}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var e,r,o,i={exports:{}};e=i,r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,o=function(t={}){var n,e,o=t;o.ready=new Promise(((t,r)=>{n=t,e=r;}));var i=Object.assign({},o),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var f,s="";function c(t){return o.locateFile?o.locateFile(t,s):s+t}(a||u)&&(u?s=self.location.href:"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(f=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var l,p,h=o.print||console.log.bind(console),m=o.printErr||console.error.bind(console);Object.assign(o,i),i=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(l=o.wasmBinary),"object"!=typeof WebAssembly&&O("no native wasm support detected");var y,d,v=!1;function g(){var t=p.buffer;o.HEAP8=new Int8Array(t),o.HEAP16=new Int16Array(t),o.HEAPU8=y=new Uint8Array(t),o.HEAPU16=new Uint16Array(t),o.HEAP32=new Int32Array(t),o.HEAPU32=d=new Uint32Array(t),o.HEAPF32=new Float32Array(t),o.HEAPF64=new Float64Array(t);}var b=[],w=[],A=[];function E(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)S(o.preRun.shift());q(b);}function R(){q(w);}function P(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)H(o.postRun.shift());q(A);}function S(t){b.unshift(t);}function _(t){w.unshift(t);}function H(t){A.unshift(t);}var j=0,I=null;function x(t){j++,o.monitorRunDependencies?.(j);}function T(t){if(j--,o.monitorRunDependencies?.(j),0==j&&I){var n=I;I=null,n();}}function O(t){o.onAbort?.(t),m(t="Aborted("+t+")"),v=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw e(n),n}var W,C="data:application/octet-stream;base64,",F=t=>t.startsWith(C);function M(t){if(t==W&&l)return new Uint8Array(l);if(f)return f(t);throw "both async and sync fetching of the wasm failed"}function U(t){return l||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>M(t))):fetch(t,{credentials:"same-origin"}).then((n=>{if(!n.ok)throw "failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()})).catch((()=>M(t)))}function B(t,n,e){return U(t).then((t=>WebAssembly.instantiate(t,n))).then((t=>t)).then(e,(t=>{m(`failed to asynchronously prepare wasm: ${t}`),O(t);}))}function D(t,n,e,r){return t||"function"!=typeof WebAssembly.instantiateStreaming||F(n)||"function"!=typeof fetch?B(n,e,r):fetch(n,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,e).then(r,(function(t){return m(`wasm streaming compile failed: ${t}`),m("falling back to ArrayBuffer instantiation"),B(n,e,r)}))))}function k(){var t={a:tt};function n(t,n){return nt=t.exports,p=nt.i,g(),L=nt.m,_(nt.j),T(),nt}function r(t){n(t.instance);}if(x(),o.instantiateWasm)try{return o.instantiateWasm(t,n)}catch(i){m(`Module.instantiateWasm callback failed with error: ${i}`),e(i);}return D(l,W,t,r).catch(e),{}}F(W="libtess.wasm")||(W=c(W));var q=t=>{for(;t.length>0;)t.shift()(o);};o.noExitRuntime;var L,z=()=>{throw 1/0},N=(t,n,e)=>y.copyWithin(t,n,n+e),$=()=>2147483648,Y=t=>{var n=(t-p.buffer.byteLength+65535)/65536;try{return p.grow(n),g(),1}catch(e){}},G=t=>{var n=y.length;t>>>=0;var e=$();if(t>e)return !1;for(var r=(t,n)=>t+(n-t%n)%n,o=1;o<=4;o*=2){var i=n*(1+.2/o);i=Math.min(i,t+100663296);var a=Math.min(e,r(Math.max(t,i),65536));if(Y(a))return !0}return !1},X=[null,[],[]],J="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,K=(t,n,e)=>{for(var r=n+e,o=n;t[o]&&!(o>=r);)++o;if(o-n>16&&t.buffer&&J)return J.decode(t.subarray(n,o));for(var i="";n<o;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var f=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&t[n++])<65536)i+=String.fromCharCode(a);else {var s=a-65536;i+=String.fromCharCode(55296|s>>10,56320|1023&s);}}else i+=String.fromCharCode((31&a)<<6|u);}else i+=String.fromCharCode(a);}return i},Q=(t,n)=>{var e=X[t];0===n||10===n?((1===t?h:m)(K(e,0)),e.length=0):e.push(n);},V=[],Z=t=>{var n=V[t];return n||(t>=V.length&&(V.length=t+1),V[t]=n=L.get(t)),n},tt={e:z,g:N,f:G,c:(t,n,e,r)=>{for(var o=0,i=0;i<e;i++){var a=d[n>>2],u=d[n+4>>2];n+=8;for(var f=0;f<u;f++)Q(t,y[a+f]);o+=u;}return d[r>>2]=o,0},b:ft,h:st,d:ut,a:at},nt=k();o._malloc=t=>(o._malloc=nt.k)(t),o._free=t=>(o._free=nt.l)(t),o._triangulate=(t,n,e,r,i,a)=>(o._triangulate=nt.n)(t,n,e,r,i,a);var et,rt=(t,n)=>(rt=nt.o)(t,n),ot=()=>(ot=nt.p)(),it=t=>(it=nt.q)(t);function at(t,n,e){var r=ot();try{Z(t)(n,e);}catch(o){if(it(r),o!==o+0)throw o;rt(1,0);}}function ut(t,n){var e=ot();try{Z(t)(n);}catch(r){if(it(e),r!==r+0)throw r;rt(1,0);}}function ft(t,n){var e=ot();try{return Z(t)(n)}catch(r){if(it(e),r!==r+0)throw r;rt(1,0);}}function st(t,n,e,r){var o=ot();try{return Z(t)(n,e,r)}catch(i){if(it(o),i!==i+0)throw i;rt(1,0);}}function ct(){function t(){et||(et=!0,o.calledRun=!0,v||(R(),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),P()));}j>0||(E(),j>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("");}),1),t();}),1)):t()));}if(I=function t(){et||ct(),et||(I=t);},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();ct();let lt=null,pt=null,ht=null,mt=null;const yt=2,dt=4e3;let vt=0;const gt=(t,n,e)=>{lt||(lt=o._triangulate);let r=o.HEAPF32;const i=o.HEAP32.BYTES_PER_ELEMENT,a=2,u=r.BYTES_PER_ELEMENT;e>vt&&(vt=e,ht&&(o._free(ht),ht=0),pt&&(o._free(pt),pt=0)),ht||(ht=o._malloc(e*u)),mt||(mt=o._malloc(dt*i));const f=e*yt;pt||(pt=o._malloc(f*u)),r=o.HEAPF32,r.set(t,ht/u),o.HEAP32.set(n,mt/i);const s=f/a,c=lt(ht,mt,Math.min(n.length,dt),a,pt,s),l=c*a;r=o.HEAPF32;const p=r.slice(pt/u,pt/u+l),h={};return h.buffer=p,h.vertexCount=c,h};return o.triangulate=gt,t.ready},e.exports=o;var a=i.exports;const u=n({__proto__:null,default:o$1(a)},[a]);

export { u as l };
