import { aA as o$1 } from './main-069f4a5d.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var r,t,n,a={exports:{}};r=a,t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(t=t||__filename),n=function(e={}){var r,n,a=e;a.ready=new Promise(((e,t)=>{r=e,n=t;}));var i,o,u,s=Object.assign({},a),l="./this.program",c="object"==typeof window,f="function"==typeof importScripts,d="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h="";function p(e){return a.locateFile?a.locateFile(e,h):h+e}if(d){var v=require("fs"),m=require("path");h=f?m.dirname(h)+"/":__dirname+"/",i=(e,r)=>(e=G(e)?new URL(e):m.normalize(e),v.readFileSync(e,r?void 0:"utf8")),u=e=>{var r=i(e,!0);return r.buffer||(r=new Uint8Array(r)),r},o=(e,r,t,n=!0)=>{e=G(e)?new URL(e):m.normalize(e),v.readFile(e,n?void 0:"utf8",((e,a)=>{e?t(e):r(n?a.buffer:a);}));},!a.thisProgram&&process.argv.length>1&&(l=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),a.inspect=()=>"[Emscripten Module object]";}else (c||f)&&(f?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),t&&(h=t),h=0!==h.indexOf("blob:")?h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},f&&(u=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),o=(e,r,t)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?r(n.response):t();},n.onerror=t,n.send(null);});a.print||console.log.bind(console);var y,g,w=a.printErr||console.error.bind(console);Object.assign(a,s),s=null,a.arguments&&a.arguments,a.thisProgram&&(l=a.thisProgram),a.quit&&a.quit,a.wasmBinary&&(y=a.wasmBinary),a.noExitRuntime,"object"!=typeof WebAssembly&&V("no native wasm support detected");var _,b,A,T,C,E,F,P,S=!1;function W(){var e=g.buffer;a.HEAP8=_=new Int8Array(e),a.HEAP16=A=new Int16Array(e),a.HEAPU8=b=new Uint8Array(e),a.HEAPU16=T=new Uint16Array(e),a.HEAP32=C=new Int32Array(e),a.HEAPU32=E=new Uint32Array(e),a.HEAPF32=F=new Float32Array(e),a.HEAPF64=P=new Float64Array(e);}var j=[],M=[],R=[];function O(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)$(a.preRun.shift());Q(j);}function D(){Q(M);}function x(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)U(a.postRun.shift());Q(R);}function $(e){j.unshift(e);}function k(e){M.unshift(e);}function U(e){R.unshift(e);}var H=0,I=null;function Y(e){H++,a.monitorRunDependencies&&a.monitorRunDependencies(H);}function z(e){if(H--,a.monitorRunDependencies&&a.monitorRunDependencies(H),0==H&&I){var r=I;I=null,r();}}function V(e){a.onAbort&&a.onAbort(e),w(e="Aborted("+e+")"),S=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw n(r),r}var B,q="data:application/octet-stream;base64,";function L(e){return e.startsWith(q)}function G(e){return e.startsWith("file://")}function X(e){if(e==B&&y)return new Uint8Array(y);if(u)return u(e);throw "both async and sync fetching of the wasm failed"}function N(e){if(!y&&(c||f)){if("function"==typeof fetch&&!G(e))return fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw "failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>X(e)));if(o)return new Promise(((r,t)=>{o(e,(e=>r(new Uint8Array(e))),t);}))}return Promise.resolve().then((()=>X(e)))}function J(e,r,t){return N(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{w(`failed to asynchronously prepare wasm: ${e}`),V(e);}))}function Z(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||L(r)||G(r)||d||"function"!=typeof fetch?J(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return w(`wasm streaming compile failed: ${e}`),w("falling back to ArrayBuffer instantiation"),J(r,t,n)}))))}function K(){var e={a:Vr};function r(e,r){return Br=e.exports,g=Br.w,W(),xe=Br.y,k(Br.x),z(),Br}function t(e){r(e.instance);}if(Y(),a.instantiateWasm)try{return a.instantiateWasm(e,r)}catch(i){w(`Module.instantiateWasm callback failed with error: ${i}`),n(i);}return Z(y,B,e,t).catch(n),{}}L(B="lclayout.wasm")||(B=p(B));var Q=e=>{for(;e.length>0;)e.shift()(a);};function ee(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){E[this.ptr+4>>2]=e;},this.get_type=function(){return E[this.ptr+4>>2]},this.set_destructor=function(e){E[this.ptr+8>>2]=e;},this.get_destructor=function(){return E[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,_[this.ptr+12>>0]=e;},this.get_caught=function(){return 0!=_[this.ptr+12>>0]},this.set_rethrown=function(e){e=e?1:0,_[this.ptr+13>>0]=e;},this.get_rethrown=function(){return 0!=_[this.ptr+13>>0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r);},this.set_adjusted_ptr=function(e){E[this.ptr+16>>2]=e;},this.get_adjusted_ptr=function(){return E[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Nr(this.get_type()))return E[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr};}var re,te,ne,ae=(e,r,t)=>{throw new ee(e).init(r,t),e},ie=(e,r,t,n,a)=>{},oe=()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);re=e;},ue=e=>{for(var r="",t=e;b[t];)r+=re[b[t++]];return r},se={},le={},ce={},fe=e=>{throw new te(e)},de=e=>{throw new ne(e)},he=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&de("Mismatched type converter count");for(var a=0;a<e.length;++a)ve(e[a],n[a]);}e.forEach((function(e){ce[e]=r;}));var a=new Array(r.length),i=[],o=0;r.forEach(((e,r)=>{le.hasOwnProperty(e)?a[r]=le[e]:(i.push(e),se.hasOwnProperty(e)||(se[e]=[]),se[e].push((()=>{a[r]=le[e],++o===i.length&&n(a);})));})),0===i.length&&n(a);};function pe(e,r,t={}){var n=r.name;if(e||fe(`type "${n}" must have a positive integer typeid pointer`),le.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;fe(`Cannot register type '${n}' twice`);}if(le[e]=r,delete ce[e],se.hasOwnProperty(e)){var a=se[e];delete se[e],a.forEach((e=>e()));}}function ve(e,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return pe(e,r,t)}var me=8,ye=(e,r,t,n)=>{ve(e,{name:r=ue(r),fromWireType:function(e){return !!e},toWireType:function(e,r){return r?t:n},argPackAdvance:me,readValueFromPointer:function(e){return this.fromWireType(b[e])},destructorFunction:null});},ge=(e,r,t)=>{e=ue(e),he([],[r],(function(r){return r=r[0],a[e]=r.fromWireType(t),[]}));};function we(){Object.assign(_e.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e);}});}function _e(){this.allocated=[void 0],this.freelist=[];}var be=new _e,Ae=e=>{e>=be.reserved&&0==--be.get(e).refcount&&be.free(e);},Te=()=>{for(var e=0,r=be.reserved;r<be.allocated.length;++r)void 0!==be.allocated[r]&&++e;return e},Ce=()=>{be.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),be.reserved=be.allocated.length,a.count_emval_handles=Te;},Ee={toValue:e=>(e||fe("Cannot use deleted val. handle = "+e),be.get(e).value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return be.allocate({refcount:1,value:e})}}};function Fe(e){return this.fromWireType(C[e>>2])}var Pe=(e,r)=>{ve(e,{name:r=ue(r),fromWireType:e=>{var r=Ee.toValue(e);return Ae(e),r},toWireType:(e,r)=>Ee.toHandle(r),argPackAdvance:me,readValueFromPointer:Fe,destructorFunction:null});},Se=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(F[e>>2])};case 8:return function(e){return this.fromWireType(P[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},We=(e,r,t)=>{ve(e,{name:r=ue(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:me,readValueFromPointer:Se(r,t),destructorFunction:null});},je=48,Me=57,Re=e=>{if(void 0===e)return "_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=je&&r<=Me?`_${e}`:e},Oe=e=>{for(;e.length;){var r=e.pop();e.pop()(r);}};function De(e,r,t,n,a,i){var o=r.length;o<2&&fe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==t,s=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){s=!0;break}var c="void"!==r[0].name,f=o-2,d=new Array(f),h=[],p=[];return function(){var t;arguments.length!==f&&fe(`function ${e} called with ${arguments.length} arguments, expected ${f}`),p.length=0,h.length=u?2:1,h[0]=a,u&&(t=r[1].toWireType(p,this),h[1]=t);for(var i=0;i<f;++i)d[i]=r[i+2].toWireType(p,arguments[i]),h.push(d[i]);function o(e){if(s)Oe(p);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a);}if(c)return r[0].fromWireType(e)}return o(n.apply(null,h))}}var xe,$e=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||fe(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n;}},ke=(e,r,t)=>{a.hasOwnProperty(e)?((void 0===t||void 0!==a[e].overloadTable&&void 0!==a[e].overloadTable[t])&&fe(`Cannot register public name '${e}' twice`),$e(a,e,e),a.hasOwnProperty(t)&&fe(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[e].overloadTable[t]=r):(a[e]=r,void 0!==t&&(a[e].numArguments=t));},Ue=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(E[r+4*n>>2]);return t},He=(e,r,t)=>{a.hasOwnProperty(e)||de("Replacing nonexistant public symbol"),void 0!==a[e].overloadTable&&void 0!==t?a[e].overloadTable[t]=r:(a[e]=r,a[e].argCount=t);},Ie=(e,r,t)=>{var n=a["dynCall_"+e];return t&&t.length?n.apply(null,[r].concat(t)):n.call(null,r)},Ye=[],ze=e=>{var r=Ye[e];return r||(e>=Ye.length&&(Ye.length=e+1),Ye[e]=r=xe.get(e)),r},Ve=(e,r,t)=>e.includes("j")?Ie(e,r,t):ze(r).apply(null,t),Be=(e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),Ve(e,r,t)}},qe=(e,r)=>{function t(){return e.includes("j")?Be(e,r):ze(r)}e=ue(e);var n=t();return "function"!=typeof n&&fe(`unknown function pointer with signature ${e}: ${r}`),n};function Le(e,r){return {[e=Re(e)]:function(){return r.apply(this,arguments)}}[e]}var Ge,Xe=(e,r)=>{var t=Le(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""));}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t},Ne=e=>{var r=qr(e),t=ue(r);return Xr(r),t},Je=(e,r)=>{var t=[],n={};function a(e){n[e]||le[e]||(ce[e]?ce[e].forEach(a):(t.push(e),n[e]=!0));}throw r.forEach(a),new Ge(`${e}: `+t.map(Ne).join([", "]))},Ze=(e,r,t,n,a,i,o)=>{var u=Ue(r,t);e=ue(e),a=qe(n,a),ke(e,(function(){Je(`Cannot call ${e} due to unbound types`,u);}),r-1),he([],u,(function(t){var n=[t[0],null].concat(t.slice(1));return He(e,De(e,n,null,a,i),r-1),[]}));},Ke=(e,r,t)=>{switch(r){case 1:return t?e=>_[e>>0]:e=>b[e>>0];case 2:return t?e=>A[e>>1]:e=>T[e>>1];case 4:return t?e=>C[e>>2]:e=>E[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Qe=(e,r,t,n,a)=>{r=ue(r);var i=e=>e;if(0===n){var o=32-8*t;i=e=>e<<o>>>o;}var u=r.includes("unsigned"),s=(e,r)=>{};ve(e,{name:r,fromWireType:i,toWireType:u?function(e,r){return s(r,this.name),r>>>0}:function(e,r){return s(r,this.name),r},argPackAdvance:me,readValueFromPointer:Ke(r,t,0!==n),destructorFunction:null});},er=(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=E[e>>2],t=E[e+4>>2];return new n(_.buffer,t,r)}ve(e,{name:t=ue(t),fromWireType:a,argPackAdvance:me,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0});};function rr(e){return this.fromWireType(E[e>>2])}var tr,nr=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,i=t+n-1,o=0;o<e.length;++o){var u=e.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++o)),u<=127){if(t>=i)break;r[t++]=u;}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u;}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u;}else {if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u;}}return r[t]=0,t-a},ar=(e,r,t)=>nr(e,b,r,t),ir=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3;}return r},or="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ur=(e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&or)return or.decode(e.subarray(r,a));for(var i="";r<a;){var o=e[r++];if(128&o){var u=63&e[r++];if(192!=(224&o)){var s=63&e[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|s:(7&o)<<18|u<<12|s<<6|63&e[r++])<65536)i+=String.fromCharCode(o);else {var l=o-65536;i+=String.fromCharCode(55296|l>>10,56320|1023&l);}}else i+=String.fromCharCode((31&o)<<6|u);}else i+=String.fromCharCode(o);}return i},sr=(e,r)=>e?ur(b,e,r):"",lr=(e,r)=>{var t="std::string"===(r=ue(r));ve(e,{name:r,fromWireType(e){var r,n=E[e>>2],a=e+4;if(t)for(var i=a,o=0;o<=n;++o){var u=a+o;if(o==n||0==b[u]){var s=sr(i,u-i);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),i=u+1;}}else {var l=new Array(n);for(o=0;o<n;++o)l[o]=String.fromCharCode(b[a+o]);r=l.join("");}return Xr(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||fe("Cannot pass non-string to std::string"),n=t&&a?ir(r):r.length;var i=Gr(4+n+1),o=i+4;if(E[i>>2]=n,t&&a)ar(r,o,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(Xr(o),fe("String has UTF-16 code units that do not fit in 8 bits")),b[o+u]=s;}else for(u=0;u<n;++u)b[o+u]=r[u];return null!==e&&e.push(Xr,i),i},argPackAdvance:me,readValueFromPointer:rr,destructorFunction(e){Xr(e);}});},cr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,fr=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&T[n];)++n;if((t=n<<1)-e>32&&cr)return cr.decode(b.subarray(e,t));for(var i="",o=0;!(o>=r/2);++o){var u=A[e+2*o>>1];if(0==u)break;i+=String.fromCharCode(u);}return i},dr=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,i=0;i<a;++i){var o=e.charCodeAt(i);A[r>>1]=o,r+=2;}return A[r>>1]=0,r-n},hr=e=>2*e.length,pr=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=C[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var i=a-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i);}else n+=String.fromCharCode(a);}return n},vr=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,i=0;i<e.length;++i){var o=e.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),C[r>>2]=o,(r+=4)+4>a)break}return C[r>>2]=0,r-n},mr=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4;}return r},yr=(e,r,t)=>{var n,a,i,o,u;t=ue(t),2===r?(n=fr,a=dr,o=hr,i=()=>T,u=1):4===r&&(n=pr,a=vr,o=mr,i=()=>E,u=2),ve(e,{name:t,fromWireType:e=>{for(var t,a=E[e>>2],o=i(),s=e+4,l=0;l<=a;++l){var c=e+4+l*r;if(l==a||0==o[c>>u]){var f=n(s,c-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=c+r;}}return Xr(e),t},toWireType:(e,n)=>{"string"!=typeof n&&fe(`Cannot pass non-string to C++ string type ${t}`);var i=o(n),s=Gr(4+i+r);return E[s>>2]=i>>u,a(n,s+4,i+r),null!==e&&e.push(Xr,s),s},argPackAdvance:me,readValueFromPointer:Fe,destructorFunction(e){Xr(e);}});},gr=(e,r)=>{ve(e,{isVoid:!0,name:r=ue(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}});},wr=!0,_r=()=>wr,br=()=>{V("");},Ar=()=>Date.now(),Tr=()=>2147483648,Cr=()=>Tr();tr=()=>performance.now();var Er=(e,r,t)=>b.copyWithin(e,r,r+t),Fr=e=>{var r=(e-g.buffer.byteLength+65535)/65536;try{return g.grow(r),W(),1}catch(t){}},Pr=e=>{var r=b.length;e>>>=0;var t=Tr();if(e>t)return !1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var i=r*(1+.2/a);i=Math.min(i,e+100663296);var o=Math.min(t,n(Math.max(e,i),65536));if(Fr(o))return !0}return !1},Sr={},Wr=()=>l||"./this.program",jr=()=>{if(!jr.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:Wr()};for(var r in Sr)void 0===Sr[r]?delete e[r]:e[r]=Sr[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);jr.strings=t;}return jr.strings},Mr=(e,r)=>{for(var t=0;t<e.length;++t)_[r++>>0]=e.charCodeAt(t);_[r>>0]=0;},Rr=(e,r)=>{var t=0;return jr().forEach(((n,a)=>{var i=r+t;E[e+4*a>>2]=i,Mr(n,i),t+=n.length+1;})),0},Or=(e,r)=>{var t=jr();E[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),E[r>>2]=n,0},Dr=e=>e%4==0&&(e%100!=0||e%400==0),xr=(e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t},$r=[31,29,31,30,31,30,31,31,30,31,30,31],kr=[31,28,31,30,31,30,31,31,30,31,30,31],Ur=(e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=Dr(t.getFullYear()),a=t.getMonth(),i=(n?$r:kr)[a];if(!(r>i-t.getDate()))return t.setDate(t.getDate()+r),t;r-=i-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1));}return t};function Hr(e,r,t){var n=t>0?t:ir(e)+1,a=new Array(n),i=nr(e,a,0,a.length);return r&&(a.length=i),a}var Ir=(e,r)=>{_.set(e,r);},Yr=(e,r,t,n)=>{var a=E[n+40>>2],i={tm_sec:C[n>>2],tm_min:C[n+4>>2],tm_hour:C[n+8>>2],tm_mday:C[n+12>>2],tm_mon:C[n+16>>2],tm_year:C[n+20>>2],tm_wday:C[n+24>>2],tm_yday:C[n+28>>2],tm_isdst:C[n+32>>2],tm_gmtoff:C[n+36>>2],tm_zone:a?sr(a):""},o=sr(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)o=o.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d(e,r){return f(e,r,"0")}function h(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function p(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function v(e){var r=Ur(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=p(t),i=p(n);return h(a,r)<=0?h(i,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var m={"%a":e=>l[e.tm_wday].substring(0,3),"%A":e=>l[e.tm_wday],"%b":e=>c[e.tm_mon].substring(0,3),"%B":e=>c[e.tm_mon],"%C":e=>d((e.tm_year+1900)/100|0,2),"%d":e=>d(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>v(e).toString().substring(2),"%G":e=>v(e),"%H":e=>d(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":e=>d(e.tm_mday+xr(Dr(e.tm_year+1900)?$r:kr,e.tm_mon-1),3),"%m":e=>d(e.tm_mon+1,2),"%M":e=>d(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&Dr(e.tm_year)||(r=1);}}else {r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&Dr(e.tm_year%400-1))&&r++;}return d(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in o=o.replace(/%%/g,"\0\0"),m)o.includes(s)&&(o=o.replace(new RegExp(s,"g"),m[s](i)));var y=Hr(o=o.replace(/\0\0/g,"%"),!1);return y.length>r?0:(Ir(y,e),y.length-1)},zr=(e,r,t,n,a)=>Yr(e,r,t,n);oe(),te=a.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError";}},ne=a.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError";}},we(),Ce(),Ge=a.UnboundTypeError=Xe(Error,"UnboundTypeError");var Vr={a:ae,m:ie,k:ye,i:ge,j:Pe,h:We,b:Ze,d:Qe,c:er,g:lr,e:yr,l:gr,r:_r,f:br,s:Ar,n:Cr,u:tr,v:Er,t:Pr,p:Rr,q:Or,o:zr},Br=K(),qr=e=>(qr=Br.z)(e);a.__embind_initialize_bindings=()=>(a.__embind_initialize_bindings=Br.A)();var Lr,Gr=a._malloc=e=>(Gr=a._malloc=Br.B)(e),Xr=a._free=e=>(Xr=a._free=Br.C)(e),Nr=e=>(Nr=Br.D)(e);function Jr(){function e(){Lr||(Lr=!0,a.calledRun=!0,S||(D(),r(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),x()));}H>0||(O(),H>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("");}),1),e();}),1)):e()));}if(a.dynCall_viijii=(e,r,t,n,i,o,u)=>(a.dynCall_viijii=Br.E)(e,r,t,n,i,o,u),a.dynCall_iiiiij=(e,r,t,n,i,o,u)=>(a.dynCall_iiiiij=Br.F)(e,r,t,n,i,o,u),a.dynCall_iiiiijj=(e,r,t,n,i,o,u,s,l)=>(a.dynCall_iiiiijj=Br.G)(e,r,t,n,i,o,u,s,l),a.dynCall_iiiiiijj=(e,r,t,n,i,o,u,s,l,c)=>(a.dynCall_iiiiiijj=Br.H)(e,r,t,n,i,o,u,s,l,c),I=function e(){Lr||Jr(),Lr||(I=e);},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Jr(),e.ready},r.exports=n;const i=o$1(a.exports),o=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));

export { o as l };
