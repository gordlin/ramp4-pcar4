import { az as o$1, eU as e$1 } from './main-hedDFcxy.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var e,r,a,o={exports:{}};e=o,r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(n){var e,a,o;n=n||{},e||(e=void 0!==n?n:{}),e.ready=new Promise((function(n,t){a=n,o=t;}));var i=Object.assign({},e),u="./this.program",c="";"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),r&&(c=r),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var f,s=e.print||console.log.bind(console),l=e.printErr||console.warn.bind(console);Object.assign(e,i),i=null,e.thisProgram&&(u=e.thisProgram),e.wasmBinary&&(f=e.wasmBinary),e.noExitRuntime,"object"!=typeof WebAssembly&&R("no native wasm support detected");var h,d,p,v,m,y,g,b,w,A,T,_,C=!1,P="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function $(n,t,e){var r=t+e;for(e=t;n[e]&&!(e>=r);)++e;if(16<e-t&&n.buffer&&P)return P.decode(n.subarray(t,e));for(r="";t<e;){var a=n[t++];if(128&a){var o=63&n[t++];if(192==(224&a))r+=String.fromCharCode((31&a)<<6|o);else {var i=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|o<<6|i:(7&a)<<18|o<<12|i<<6|63&n[t++])?r+=String.fromCharCode(a):(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a));}}else r+=String.fromCharCode(a);}return r}function k(n,t,e,r){if(0<r){r=e+r-1;for(var a=0;a<n.length;++a){var o=n.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++a)),127>=o){if(e>=r)break;t[e++]=o;}else {if(2047>=o){if(e+1>=r)break;t[e++]=192|o>>6;}else {if(65535>=o){if(e+2>=r)break;t[e++]=224|o>>12;}else {if(e+3>=r)break;t[e++]=240|o>>18,t[e++]=128|o>>12&63;}t[e++]=128|o>>6&63;}t[e++]=128|63&o;}}t[e]=0;}}function W(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++e):t+=3;}return t}function E(){var n=h.buffer;d=n,e.HEAP8=p=new Int8Array(n),e.HEAP16=m=new Int16Array(n),e.HEAP32=g=new Int32Array(n),e.HEAPU8=v=new Uint8Array(n),e.HEAPU16=y=new Uint16Array(n),e.HEAPU32=b=new Uint32Array(n),e.HEAPF32=w=new Float32Array(n),e.HEAPF64=_=new Float64Array(n),e.HEAP64=A=new BigInt64Array(n),e.HEAPU64=T=new BigUint64Array(n);}var j,O=[],S=[],F=[];function D(){var n=e.preRun.shift();O.unshift(n);}var M,U=0,I=null;function R(n){throw e.onAbort&&e.onAbort(n),l(n="Aborted("+n+")"),C=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),o(n),n}function x(){return M.startsWith("data:application/octet-stream;base64,")}if(M="arcgis-knowledge-client-core.wasm",!x()){var H=M;M=e.locateFile?e.locateFile(H,c):c+H;}function Y(){var n=M;try{if(n==M&&f)return new Uint8Array(f);throw "both async and sync fetching of the wasm failed"}catch(t){R(t);}}function V(){return f||"function"!=typeof fetch?Promise.resolve().then((function(){return Y()})):fetch(M,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw "failed to load wasm binary file at '"+M+"'";return n.arrayBuffer()})).catch((function(){return Y()}))}function B(n){for(;0<n.length;)n.shift()(e);}function z(n){this.fa=n-24,this.Ya=function(n){b[this.fa+4>>2]=n;},this.Oa=function(n){b[this.fa+8>>2]=n;},this.Ua=function(){g[this.fa>>2]=0;},this.Ma=function(){p[this.fa+12>>0]=0;},this.Va=function(){p[this.fa+13>>0]=0;},this.Ia=function(n,t){this.La(),this.Ya(n),this.Oa(t),this.Ua(),this.Ma(),this.Va();},this.La=function(){b[this.fa+16>>2]=0;};}var q={};function N(n){for(;n.length;){var t=n.pop();n.pop()(t);}}function L(n){return this.fromWireType(g[n>>2])}var G={},J={},X={};function Z(n){if(void 0===n)return "_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function K(n,t){return n=Z(n),function(){return t.apply(this,arguments)}}function Q(n){var t=Error,e=K(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""));}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var nn=void 0;function tn(n){throw new nn(n)}function en(n,t,e){function r(t){(t=e(t)).length!==n.length&&tn("Mismatched type converter count");for(var r=0;r<n.length;++r)fn(n[r],t[r]);}n.forEach((function(n){X[n]=t;}));var a=Array(t.length),o=[],i=0;t.forEach(((n,t)=>{J.hasOwnProperty(n)?a[t]=J[n]:(o.push(n),G.hasOwnProperty(n)||(G[n]=[]),G[n].push((()=>{a[t]=J[n],++i===o.length&&r(a);})));})),0===o.length&&r(a);}function rn(n){if(null===n)return "null";var t=typeof n;return "object"===t||"array"===t||"function"===t?n.toString():""+n}var an=void 0;function on(n){for(var t="";v[n];)t+=an[v[n++]];return t}var un=void 0;function cn(n){throw new un(n)}function fn(n,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(n||cn('type "'+r+'" must have a positive integer typeid pointer'),J.hasOwnProperty(n)){if(e.Wa)return;cn("Cannot register type '"+r+"' twice");}J[n]=t,delete X[n],G.hasOwnProperty(n)&&(t=G[n],delete G[n],t.forEach((n=>n())));}function sn(n,t,e){switch(t){case 0:return e?function(n){return p[n]}:function(n){return v[n]};case 1:return e?function(n){return m[n>>1]}:function(n){return y[n>>1]};case 2:return e?function(n){return g[n>>2]}:function(n){return b[n>>2]};case 3:return e?function(n){return A[n>>3]}:function(n){return T[n>>3]};default:throw new TypeError("Unknown integer type: "+n)}}function ln(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function hn(n){cn(n.da.ga.ea.name+" instance already deleted");}var dn=!1;function pn(){}function vn(n){--n.count.value,0===n.count.value&&(n.ia?n.ka.na(n.ia):n.ga.ea.na(n.fa));}function mn(n,t,e){return t===e?n:void 0===e.la||null===(n=mn(n,t,e.la))?null:e.Ka(n)}var yn={},gn=[];function bn(){for(;gn.length;){var n=gn.pop();n.da.ta=!1,n.delete();}}var wn=void 0,An={};function Tn(n,t){for(void 0===t&&cn("ptr should not be undefined");n.la;)t=n.va(t),n=n.la;return An[t]}function _n(n,t){return t.ga&&t.fa||tn("makeClassHandle requires ptr and ptrType"),!!t.ka!=!!t.ia&&tn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},Cn(Object.create(n,{da:{value:t}}))}function Cn(n){return "undefined"==typeof FinalizationRegistry?(Cn=n=>n,n):(dn=new FinalizationRegistry((n=>{vn(n.da);})),pn=n=>{dn.unregister(n);},(Cn=n=>{var t=n.da;return t.ia&&dn.register(n,{da:t},n),n})(n))}function Pn(){}function $n(n,t,e){if(void 0===n[t].ha){var r=n[t];n[t]=function(){return n[t].ha.hasOwnProperty(arguments.length)||cn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].ha+")!"),n[t].ha[arguments.length].apply(this,arguments)},n[t].ha=[],n[t].ha[r.sa]=r;}}function kn(n,t,r){e.hasOwnProperty(n)?((void 0===r||void 0!==e[n].ha&&void 0!==e[n].ha[r])&&cn("Cannot register public name '"+n+"' twice"),$n(e,n,n),e.hasOwnProperty(r)&&cn("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),e[n].ha[r]=t):(e[n]=t,void 0!==r&&(e[n].kb=r));}function Wn(n,t,e,r,a,o,i,u){this.name=n,this.constructor=t,this.oa=e,this.na=r,this.la=a,this.Pa=o,this.va=i,this.Ka=u,this.$a=[];}function En(n,t,e){for(;t!==e;)t.va||cn("Expected null or instance of "+e.name+", got an instance of "+t.name),n=t.va(n),t=t.la;return n}function jn(n,t){return null===t?(this.Aa&&cn("null is not a valid "+this.name),0):(t.da||cn('Cannot pass "'+rn(t)+'" as a '+this.name),t.da.fa||cn("Cannot pass deleted object as a pointer of type "+this.name),En(t.da.fa,t.da.ga.ea,this.ea))}function On(n,t){if(null===t){if(this.Aa&&cn("null is not a valid "+this.name),this.xa){var e=this.Ba();return null!==n&&n.push(this.na,e),e}return 0}if(t.da||cn('Cannot pass "'+rn(t)+'" as a '+this.name),t.da.fa||cn("Cannot pass deleted object as a pointer of type "+this.name),!this.wa&&t.da.ga.wa&&cn("Cannot convert argument of type "+(t.da.ka?t.da.ka.name:t.da.ga.name)+" to parameter type "+this.name),e=En(t.da.fa,t.da.ga.ea,this.ea),this.xa)switch(void 0===t.da.ia&&cn("Passing raw pointer to smart pointer is illegal"),this.fb){case 0:t.da.ka===this?e=t.da.ia:cn("Cannot convert argument of type "+(t.da.ka?t.da.ka.name:t.da.ga.name)+" to parameter type "+this.name);break;case 1:e=t.da.ia;break;case 2:if(t.da.ka===this)e=t.da.ia;else {var r=t.clone();e=this.ab(e,Ln((function(){r.delete();}))),null!==n&&n.push(this.na,e);}break;default:cn("Unsupporting sharing policy");}return e}function Sn(n,t){return null===t?(this.Aa&&cn("null is not a valid "+this.name),0):(t.da||cn('Cannot pass "'+rn(t)+'" as a '+this.name),t.da.fa||cn("Cannot pass deleted object as a pointer of type "+this.name),t.da.ga.wa&&cn("Cannot convert argument of type "+t.da.ga.name+" to parameter type "+this.name),En(t.da.fa,t.da.ga.ea,this.ea))}function Fn(n,t,e,r,a,o,i,u,c,f,s){this.name=n,this.ea=t,this.Aa=e,this.wa=r,this.xa=a,this.Za=o,this.fb=i,this.Ga=u,this.Ba=c,this.ab=f,this.na=s,a||void 0!==t.la?this.toWireType=On:(this.toWireType=r?jn:Sn,this.ja=null);}function Dn(n,t,r){e.hasOwnProperty(n)||tn("Replacing nonexistant public symbol"),void 0!==e[n].ha&&void 0!==r?e[n].ha[r]=t:(e[n]=t,e[n].sa=r);}var Mn=[];function Un(n,t){n=on(n);var e=Mn[t];return e||(t>=Mn.length&&(Mn.length=t+1),Mn[t]=e=j.get(t)),"function"!=typeof e&&cn("unknown function pointer with signature "+n+": "+t),e}var In=void 0;function Rn(n){var t=on(n=$t(n));return Pt(n),t}function xn(n,t){function e(n){a[n]||J[n]||(X[n]?X[n].forEach(e):(r.push(n),a[n]=!0));}var r=[],a={};throw t.forEach(e),new In(n+": "+r.map(Rn).join([", "]))}function Hn(n,t,e,r,a){var o=t.length;2>o&&cn("argTypes array size mismatch! Must at least get return value and 'this' types!");var i=null!==t[1]&&null!==e,u=!1;for(e=1;e<t.length;++e)if(null!==t[e]&&void 0===t[e].ja){u=!0;break}var c="void"!==t[0].name,f=o-2,s=Array(f),l=[],h=[];return function(){if(arguments.length!==f&&cn("function "+n+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,l.length=i?2:1,l[0]=a,i){var e=t[1].toWireType(h,this);l[1]=e;}for(var o=0;o<f;++o)s[o]=t[o+2].toWireType(h,arguments[o]),l.push(s[o]);if(o=r.apply(null,l),u)N(h);else for(var d=i?1:2;d<t.length;d++){var p=1===d?e:s[d-2];null!==t[d].ja&&t[d].ja(p);}return e=c?t[0].fromWireType(o):void 0}}function Yn(n,t){for(var e=[],r=0;r<n;r++)e.push(b[t+4*r>>2]);return e}function Vn(n,t,e){return n instanceof Object||cn(e+' with invalid "this": '+n),n instanceof t.ea.constructor||cn(e+' incompatible with "this" of type '+n.constructor.name),n.da.fa||cn("cannot call emscripten binding method "+e+" on deleted object"),En(n.da.fa,n.da.ga.ea,t.ea)}var Bn=[],zn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function qn(n){4<n&&0==--zn[n].Ca&&(zn[n]=void 0,Bn.push(n));}var Nn=n=>(n||cn("Cannot use deleted val. handle = "+n),zn[n].value),Ln=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Bn.length?Bn.pop():zn.length;return zn[t]={Ca:1,value:n},t}};function Gn(n,t,e){switch(t){case 0:return function(n){return this.fromWireType((e?p:v)[n])};case 1:return function(n){return this.fromWireType((e?m:y)[n>>1])};case 2:return function(n){return this.fromWireType((e?g:b)[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function Jn(n,t){var e=J[n];return void 0===e&&cn(t+" has unknown type "+Rn(n)),e}function Xn(n,t){switch(t){case 2:return function(n){return this.fromWireType(w[n>>2])};case 3:return function(n){return this.fromWireType(_[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}var Zn="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Kn(n,t){for(var e=n>>1,r=e+t/2;!(e>=r)&&y[e];)++e;if(32<(e<<=1)-n&&Zn)return Zn.decode(v.subarray(n,e));for(e="",r=0;!(r>=t/2);++r){var a=m[n+2*r>>1];if(0==a)break;e+=String.fromCharCode(a);}return e}function Qn(n,t,e){if(void 0===e&&(e=2147483647),2>e)return 0;var r=t;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)m[t>>1]=n.charCodeAt(a),t+=2;return m[t>>1]=0,t-r}function nt(n){return 2*n.length}function tt(n,t){for(var e=0,r="";!(e>=t/4);){var a=g[n+4*e>>2];if(0==a)break;++e,65536<=a?(a-=65536,r+=String.fromCharCode(55296|a>>10,56320|1023&a)):r+=String.fromCharCode(a);}return r}function et(n,t,e){if(void 0===e&&(e=2147483647),4>e)return 0;var r=t;e=r+e-4;for(var a=0;a<n.length;++a){var o=n.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&n.charCodeAt(++a)),g[t>>2]=o,(t+=4)+4>e)break}return g[t>>2]=0,t-r}function rt(n){for(var t=0,e=0;e<n.length;++e){var r=n.charCodeAt(e);55296<=r&&57343>=r&&++e,t+=4;}return t}function at(n,t){for(var e=Array(n),r=0;r<n;++r)e[r]=Jn(b[t+4*r>>2],"parameter "+r);return e}var ot={};function it(n){var t=ot[n];return void 0===t?on(n):t}var ut=[];function ct(){function n(n){n.$$$embind_global$$$=n;var t="object"==typeof $$$embind_global$$$&&n.$$$embind_global$$$==n;return t||delete n.$$$embind_global$$$,t}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof e$1&&n(e$1)?$$$embind_global$$$=e$1:"object"==typeof self&&n(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}function ft(n){var t=ut.length;return ut.push(n),t}var st=[],lt={};function ht(){if(!dt){var n,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(n in lt)void 0===lt[n]?delete t[n]:t[n]=lt[n];var e=[];for(n in t)e.push(n+"="+t[n]);dt=e;}return dt}var dt,pt=[null,[],[]];function vt(n){return 0==n%4&&(0!=n%100||0==n%400)}var mt=[31,29,31,30,31,30,31,31,30,31,30,31],yt=[31,28,31,30,31,30,31,31,30,31,30,31];function gt(n){var t=Array(W(n)+1);return k(n,t,0,t.length),t}function bt(n,t,e,r){function a(n,t,e){for(n="number"==typeof n?n.toString():n||"";n.length<t;)n=e[0]+n;return n}function o(n,t){return a(n,t,"0")}function i(n,t){function e(n){return 0>n?-1:0<n?1:0}var r;return 0===(r=e(n.getFullYear()-t.getFullYear()))&&0===(r=e(n.getMonth()-t.getMonth()))&&(r=e(n.getDate()-t.getDate())),r}function u(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function c(n){var t=n.qa;for(n=new Date(new Date(n.ra+1900,0,1).getTime());0<t;){var e=n.getMonth(),r=(vt(n.getFullYear())?mt:yt)[e];if(!(t>r-n.getDate())){n.setDate(n.getDate()+t);break}t-=r-n.getDate()+1,n.setDate(1),11>e?n.setMonth(e+1):(n.setMonth(0),n.setFullYear(n.getFullYear()+1));}return e=new Date(n.getFullYear()+1,0,4),t=u(new Date(n.getFullYear(),0,4)),e=u(e),0>=i(t,n)?0>=i(e,n)?n.getFullYear()+1:n.getFullYear():n.getFullYear()-1}var f=g[r+40>>2];for(var s in r={ib:g[r>>2],hb:g[r+4>>2],ya:g[r+8>>2],Da:g[r+12>>2],za:g[r+16>>2],ra:g[r+20>>2],ma:g[r+24>>2],qa:g[r+28>>2],lb:g[r+32>>2],gb:g[r+36>>2],jb:f&&f?$(v,f):""},e=e?$(v,e):"",f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})e=e.replace(new RegExp(s,"g"),f[s]);var l="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),h="January February March April May June July August September October November December".split(" ");for(s in f={"%a":function(n){return l[n.ma].substring(0,3)},"%A":function(n){return l[n.ma]},"%b":function(n){return h[n.za].substring(0,3)},"%B":function(n){return h[n.za]},"%C":function(n){return o((n.ra+1900)/100|0,2)},"%d":function(n){return o(n.Da,2)},"%e":function(n){return a(n.Da,2," ")},"%g":function(n){return c(n).toString().substring(2)},"%G":function(n){return c(n)},"%H":function(n){return o(n.ya,2)},"%I":function(n){return 0==(n=n.ya)?n=12:12<n&&(n-=12),o(n,2)},"%j":function(n){for(var t=0,e=0;e<=n.za-1;t+=(vt(n.ra+1900)?mt:yt)[e++]);return o(n.Da+t,3)},"%m":function(n){return o(n.za+1,2)},"%M":function(n){return o(n.hb,2)},"%n":function(){return "\n"},"%p":function(n){return 0<=n.ya&&12>n.ya?"AM":"PM"},"%S":function(n){return o(n.ib,2)},"%t":function(){return "\t"},"%u":function(n){return n.ma||7},"%U":function(n){return o(Math.floor((n.qa+7-n.ma)/7),2)},"%V":function(n){var t=Math.floor((n.qa+7-(n.ma+6)%7)/7);if(2>=(n.ma+371-n.qa-2)%7&&t++,t)53==t&&(4==(e=(n.ma+371-n.qa)%7)||3==e&&vt(n.ra)||(t=1));else {t=52;var e=(n.ma+7-n.qa-1)%7;(4==e||5==e&&vt(n.ra%400-1))&&t++;}return o(t,2)},"%w":function(n){return n.ma},"%W":function(n){return o(Math.floor((n.qa+7-(n.ma+6)%7)/7),2)},"%y":function(n){return (n.ra+1900).toString().substring(2)},"%Y":function(n){return n.ra+1900},"%z":function(n){var t=0<=(n=n.gb);return n=Math.abs(n)/60,(t?"+":"-")+String("0000"+(n/60*100+n%60)).slice(-4)},"%Z":function(n){return n.jb},"%%":function(){return "%"}},e=e.replace(/%%/g,"\0\0"),f)e.includes(s)&&(e=e.replace(new RegExp(s,"g"),f[s](r)));return (s=gt(e=e.replace(/\0\0/g,"%"))).length>t?0:(p.set(s,n),s.length-1)}nn=e.InternalError=Q("InternalError");for(var wt=Array(256),At=0;256>At;++At)wt[At]=String.fromCharCode(At);an=wt,un=e.BindingError=Q("BindingError"),Pn.prototype.isAliasOf=function(n){if(!(this instanceof Pn&&n instanceof Pn))return !1;var t=this.da.ga.ea,e=this.da.fa,r=n.da.ga.ea;for(n=n.da.fa;t.la;)e=t.va(e),t=t.la;for(;r.la;)n=r.va(n),r=r.la;return t===r&&e===n},Pn.prototype.clone=function(){if(this.da.fa||hn(this),this.da.ua)return this.da.count.value+=1,this;var n=Cn,t=Object,e=t.create,r=Object.getPrototypeOf(this),a=this.da;return (n=n(e.call(t,r,{da:{value:{count:a.count,ta:a.ta,ua:a.ua,fa:a.fa,ga:a.ga,ia:a.ia,ka:a.ka}}}))).da.count.value+=1,n.da.ta=!1,n},Pn.prototype.delete=function(){this.da.fa||hn(this),this.da.ta&&!this.da.ua&&cn("Object already scheduled for deletion"),pn(this),vn(this.da),this.da.ua||(this.da.ia=void 0,this.da.fa=void 0);},Pn.prototype.isDeleted=function(){return !this.da.fa},Pn.prototype.deleteLater=function(){return this.da.fa||hn(this),this.da.ta&&!this.da.ua&&cn("Object already scheduled for deletion"),gn.push(this),1===gn.length&&wn&&wn(bn),this.da.ta=!0,this},e.getInheritedInstanceCount=function(){return Object.keys(An).length},e.getLiveInheritedInstances=function(){var n,t=[];for(n in An)An.hasOwnProperty(n)&&t.push(An[n]);return t},e.flushPendingDeletes=bn,e.setDelayFunction=function(n){wn=n,gn.length&&wn&&wn(bn);},Fn.prototype.Qa=function(n){return this.Ga&&(n=this.Ga(n)),n},Fn.prototype.Ea=function(n){this.na&&this.na(n);},Fn.prototype.argPackAdvance=8,Fn.prototype.readValueFromPointer=L,Fn.prototype.deleteObject=function(n){null!==n&&n.delete();},Fn.prototype.fromWireType=function(n){function t(){return this.xa?_n(this.ea.oa,{ga:this.Za,fa:e,ka:this,ia:n}):_n(this.ea.oa,{ga:this,fa:n})}var e=this.Qa(n);if(!e)return this.Ea(n),null;var r=Tn(this.ea,e);if(void 0!==r)return 0===r.da.count.value?(r.da.fa=e,r.da.ia=n,r.clone()):(r=r.clone(),this.Ea(n),r);if(r=this.ea.Pa(e),!(r=yn[r]))return t.call(this);r=this.wa?r.Ha:r.pointerType;var a=mn(e,this.ea,r.ea);return null===a?t.call(this):this.xa?_n(r.ea.oa,{ga:r,fa:a,ka:this,ia:n}):_n(r.ea.oa,{ga:r,fa:a})},In=e.UnboundTypeError=Q("UnboundTypeError"),e.count_emval_handles=function(){for(var n=0,t=5;t<zn.length;++t)void 0!==zn[t]&&++n;return n},e.get_first_emval=function(){for(var n=5;n<zn.length;++n)if(void 0!==zn[n])return zn[n];return null};var Tt={n:function(n){return Ct(n+24)+24},m:function(n,t,e){throw new z(n).Ia(t,e),n},u:function(n){var t=q[n];delete q[n];var e=t.Ba,r=t.na,a=t.Fa;en([n],a.map((n=>n.Ta)).concat(a.map((n=>n.cb))),(n=>{var o={};return a.forEach(((t,e)=>{var r=n[e],i=t.Ra,u=t.Sa,c=n[e+a.length],f=t.bb,s=t.eb;o[t.Na]={read:n=>r.fromWireType(i(u,n)),write:(n,t)=>{var e=[];f(s,n,c.toWireType(e,t)),N(e);}};})),[{name:t.name,fromWireType:function(n){var t,e={};for(t in o)e[t]=o[t].read(n);return r(n),e},toWireType:function(n,t){for(var a in o)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var i=e();for(a in o)o[a].write(i,t[a]);return null!==n&&n.push(r,i),i},argPackAdvance:8,readValueFromPointer:L,ja:r}]}));},E:function(n,t,e,r,a){t=on(t),e=ln(e);var o=-1!=t.indexOf("u");o&&(a=(1n<<64n)-1n),fn(n,{name:t,fromWireType:function(n){return n},toWireType:function(n,e){if("bigint"!=typeof e&&"number"!=typeof e)throw new TypeError('Cannot convert "'+rn(e)+'" to '+this.name);if(e<r||e>a)throw new TypeError('Passing a number "'+rn(e)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+r+", "+a+"]!");return e},argPackAdvance:8,readValueFromPointer:sn(t,e,!o),ja:null});},S:function(n,t,e,r,a){var o=ln(e);fn(n,{name:t=on(t),fromWireType:function(n){return !!n},toWireType:function(n,t){return t?r:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var r=p;else if(2===e)r=m;else {if(4!==e)throw new TypeError("Unknown boolean type size: "+t);r=g;}return this.fromWireType(r[n>>o])},ja:null});},f:function(n,t,e,r,a,o,i,u,c,f,s,l,h){s=on(s),o=Un(a,o),u&&(u=Un(i,u)),f&&(f=Un(c,f)),h=Un(l,h);var d=Z(s);kn(d,(function(){xn("Cannot construct "+s+" due to unbound types",[r]);})),en([n,t,e],r?[r]:[],(function(t){if(t=t[0],r)var e=t.ea,a=e.oa;else a=Pn.prototype;t=K(d,(function(){if(Object.getPrototypeOf(this)!==i)throw new un("Use 'new' to construct "+s);if(void 0===c.pa)throw new un(s+" has no accessible constructor");var n=c.pa[arguments.length];if(void 0===n)throw new un("Tried to invoke ctor of "+s+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.pa).toString()+") parameters instead!");return n.apply(this,arguments)}));var i=Object.create(a,{constructor:{value:t}});t.prototype=i;var c=new Wn(s,t,i,h,e,o,u,f);e=new Fn(s,c,!0,!1,!1),a=new Fn(s+"*",c,!1,!1,!1);var l=new Fn(s+" const*",c,!1,!0,!1);return yn[n]={pointerType:a,Ha:l},Dn(d,t),[e,a,l]}));},o:function(n,t,e,r,a,o,i){var u=Yn(e,r);t=on(t),o=Un(a,o),en([],[n],(function(n){function r(){xn("Cannot call "+a+" due to unbound types",u);}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var c=n.ea.constructor;return void 0===c[t]?(r.sa=e-1,c[t]=r):($n(c,t,a),c[t].ha[e-1]=r),en([],u,(function(n){return n=Hn(a,[n[0],null].concat(n.slice(1)),null,o,i),void 0===c[t].ha?(n.sa=e-1,c[t]=n):c[t].ha[e-1]=n,[]})),[]}));},i:function(n,t,e,r,a,o){0<t||R();var i=Yn(t,e);a=Un(r,a),en([],[n],(function(n){var e="constructor "+(n=n[0]).name;if(void 0===n.ea.pa&&(n.ea.pa=[]),void 0!==n.ea.pa[t-1])throw new un("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.ea.pa[t-1]=()=>{xn("Cannot construct "+n.name+" due to unbound types",i);},en([],i,(function(r){return r.splice(1,0,null),n.ea.pa[t-1]=Hn(e,r,null,a,o),[]})),[]}));},b:function(n,t,e,r,a,o,i,u){var c=Yn(e,r);t=on(t),o=Un(a,o),en([],[n],(function(n){function r(){xn("Cannot call "+a+" due to unbound types",c);}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.ea.$a.push(t);var f=n.ea.oa,s=f[t];return void 0===s||void 0===s.ha&&s.className!==n.name&&s.sa===e-2?(r.sa=e-2,r.className=n.name,f[t]=r):($n(f,t,a),f[t].ha[e-2]=r),en([],c,(function(r){return r=Hn(a,r,n,o,i),void 0===f[t].ha?(r.sa=e-2,f[t]=r):f[t].ha[e-2]=r,[]})),[]}));},c:function(n,t,e,r,a,o,i,u,c,f){t=on(t),a=Un(r,a),en([],[n],(function(n){var r=(n=n[0]).name+"."+t,s={get:function(){xn("Cannot access "+r+" due to unbound types",[e,i]);},enumerable:!0,configurable:!0};return s.set=c?()=>{xn("Cannot access "+r+" due to unbound types",[e,i]);}:()=>{cn(r+" is a read-only property");},Object.defineProperty(n.ea.oa,t,s),en([],c?[e,i]:[e],(function(e){var i=e[0],s={get:function(){var t=Vn(this,n,r+" getter");return i.fromWireType(a(o,t))},enumerable:!0};if(c){c=Un(u,c);var l=e[1];s.set=function(t){var e=Vn(this,n,r+" setter"),a=[];c(f,e,l.toWireType(a,t)),N(a);};}return Object.defineProperty(n.ea.oa,t,s),[]})),[]}));},R:function(n,t){fn(n,{name:t=on(t),fromWireType:function(n){var t=Nn(n);return qn(n),t},toWireType:function(n,t){return Ln(t)},argPackAdvance:8,readValueFromPointer:L,ja:null});},s:function(n,t,e,r){function a(){}e=ln(e),t=on(t),a.values={},fn(n,{name:t,constructor:a,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,t){return t.value},argPackAdvance:8,readValueFromPointer:Gn(t,e,r),ja:null}),kn(t,a);},e:function(n,t,e){var r=Jn(n,"enum");t=on(t),n=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:e},constructor:{value:K(r.name+"_"+t,(function(){}))}}),n.values[e]=r,n[t]=r;},D:function(n,t,e){e=ln(e),fn(n,{name:t=on(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Xn(t,e),ja:null});},V:function(n,t,e,r,a,o){var i=Yn(t,e);n=on(n),a=Un(r,a),kn(n,(function(){xn("Cannot call "+n+" due to unbound types",i);}),t-1),en([],i,(function(e){return Dn(n,Hn(n,[e[0],null].concat(e.slice(1)),null,a,o),t-1),[]}));},w:function(n,t,e,r,a){t=on(t),-1===a&&(a=4294967295),a=ln(e);var o=n=>n;if(0===r){var i=32-8*e;o=n=>n<<i>>>i;}e=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},fn(n,{name:t,fromWireType:o,toWireType:e,argPackAdvance:8,readValueFromPointer:sn(t,a,0!==r),ja:null});},q:function(n,t,e){function r(n){var t=b;return new a(d,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];fn(n,{name:e=on(e),fromWireType:r,argPackAdvance:8,readValueFromPointer:r},{Wa:!0});},h:function(n,t,e,r,a,o,i,u,c,f,s,l){e=on(e),o=Un(a,o),u=Un(i,u),f=Un(c,f),l=Un(s,l),en([n],[t],(function(n){return n=n[0],[new Fn(e,n.ea,!1,!1,!0,n,r,o,u,f,l)]}));},F:function(n,t){var e="std::string"===(t=on(t));fn(n,{name:t,fromWireType:function(n){var t=b[n>>2],r=n+4;if(e)for(var a=r,o=0;o<=t;++o){var i=r+o;if(o==t||0==v[i]){if(a=a?$(v,a,i-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=i+1;}}else {for(u=Array(t),o=0;o<t;++o)u[o]=String.fromCharCode(v[r+o]);u=u.join("");}return Pt(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r="string"==typeof t;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||cn("Cannot pass non-string to std::string");var a=e&&r?W(t):t.length,o=Ct(4+a+1),i=o+4;if(b[o>>2]=a,e&&r)k(t,v,i,a+1);else if(r)for(r=0;r<a;++r){var u=t.charCodeAt(r);255<u&&(Pt(i),cn("String has UTF-16 code units that do not fit in 8 bits")),v[i+r]=u;}else for(r=0;r<a;++r)v[i+r]=t[r];return null!==n&&n.push(Pt,o),o},argPackAdvance:8,readValueFromPointer:L,ja:function(n){Pt(n);}});},A:function(n,t,e){if(e=on(e),2===t)var r=Kn,a=Qn,o=nt,i=()=>y,u=1;else 4===t&&(r=tt,a=et,o=rt,i=()=>b,u=2);fn(n,{name:e,fromWireType:function(n){for(var e,a=b[n>>2],o=i(),c=n+4,f=0;f<=a;++f){var s=n+4+f*t;f!=a&&0!=o[s>>u]||(c=r(c,s-c),void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),c=s+t);}return Pt(n),e},toWireType:function(n,r){"string"!=typeof r&&cn("Cannot pass non-string to C++ string type "+e);var i=o(r),c=Ct(4+i+t);return b[c>>2]=i>>u,a(r,c+4,i+t),null!==n&&n.push(Pt,c),c},argPackAdvance:8,readValueFromPointer:L,ja:function(n){Pt(n);}});},v:function(n,t,e,r,a,o){q[n]={name:on(t),Ba:Un(e,r),na:Un(a,o),Fa:[]};},l:function(n,t,e,r,a,o,i,u,c,f){q[n].Fa.push({Na:on(t),Ta:e,Ra:Un(r,a),Sa:o,cb:i,bb:Un(u,c),eb:f});},T:function(n,t){fn(n,{Xa:!0,name:t=on(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},k:function(n,t,e){n=Nn(n),t=Jn(t,"emval::as");var r=[],a=Ln(r);return b[e>>2]=a,t.toWireType(r,n)},z:function(n,t){return n=Nn(n),(t=Jn(t,"emval::as")).toWireType(null,n)},W:function(n,t,e,r){n=Nn(n),e=at(t,e);for(var a=Array(t),o=0;o<t;++o){var i=e[o];a[o]=i.readValueFromPointer(r),r+=i.argPackAdvance;}return n=n.apply(void 0,a),Ln(n)},U:function(n,t,e,r,a){n=ut[n],t=Nn(t),e=it(e);var o=[];return b[r>>2]=Ln(o),n(t,e,o,a)},G:function(n,t,e,r){(n=ut[n])(t=Nn(t),e=it(e),null,r);},a:qn,H:function(n){return 0===n?Ln(ct()):(n=it(n),Ln(ct()[n]))},B:function(n,t){var e=at(n,t),r=e[0];t=r.name+"_$"+e.slice(1).map((function(n){return n.name})).join("_")+"$";var a=st[t];if(void 0!==a)return a;var o=Array(n-1);return a=ft(((t,a,i,u)=>{for(var c=0,f=0;f<n-1;++f)o[f]=e[f+1].readValueFromPointer(u+c),c+=e[f+1].argPackAdvance;for(t=t[a].apply(t,o),f=0;f<n-1;++f)e[f+1].Ja&&e[f+1].Ja(o[f]);if(!r.Xa)return r.toWireType(i,t)})),st[t]=a},r:function(n,t){return n=Nn(n),t=Nn(t),Ln(n[t])},g:function(n){4<n&&(zn[n].Ca+=1);},I:function(n,t){return (n=Nn(n))instanceof(t=Nn(t))},t:function(n){return "number"==typeof(n=Nn(n))},x:function(n){return "string"==typeof(n=Nn(n))},p:function(n){return Ln(it(n))},j:function(n){N(Nn(n)),qn(n);},d:function(n,t){return n=(n=Jn(n,"_emval_take_value")).readValueFromPointer(t),Ln(n)},y:function(n){return n=Nn(n),Ln(typeof n)},C:function(){R("");},N:function(n,t,e){v.copyWithin(n,t,t+e);},M:function(n){var t=v.length;if(2147483648<(n>>>=0))return !1;for(var e=1;4>=e;e*=2){var r=t*(1+.2/e);r=Math.min(r,n+100663296);var a=Math;r=Math.max(n,r),a=a.min.call(a,2147483648,r+(65536-r%65536)%65536);n:{try{h.grow(a-d.byteLength+65535>>>16),E();var o=1;break n}catch(i){}o=void 0;}if(o)return !0}return !1},K:function(n,t){var e=0;return ht().forEach((function(r,a){var o=t+e;for(a=b[n+4*a>>2]=o,o=0;o<r.length;++o)p[a++>>0]=r.charCodeAt(o);p[a>>0]=0,e+=r.length+1;})),0},L:function(n,t){var e=ht();b[n>>2]=e.length;var r=0;return e.forEach((function(n){r+=n.length+1;})),b[t>>2]=r,0},Q:function(){return 52},P:function(){return 70},O:function(n,t,e,r){for(var a=0,o=0;o<e;o++){var i=b[t>>2],u=b[t+4>>2];t+=8;for(var c=0;c<u;c++){var f=v[i+c],h=pt[n];0===f||10===f?((1===n?s:l)($(h,0)),h.length=0):h.push(f);}a+=u;}return b[r>>2]=a,0},J:function(n,t,e,r){return bt(n,t,e,r)}};!function(){function n(n){e.asm=n.exports,h=e.asm.X,E(),j=e.asm.ba,S.unshift(e.asm.Y),U--,e.monitorRunDependencies&&e.monitorRunDependencies(U),0==U&&I&&(n=I,I=null,n());}function t(t){n(t.instance);}function r(n){return V().then((function(n){return WebAssembly.instantiate(n,a)})).then((function(n){return n})).then(n,(function(n){l("failed to asynchronously prepare wasm: "+n),R(n);}))}var a={a:Tt};if(U++,e.monitorRunDependencies&&e.monitorRunDependencies(U),e.instantiateWasm)try{return e.instantiateWasm(a,n)}catch(i){l("Module.instantiateWasm callback failed with error: "+i),o(i);}(f||"function"!=typeof WebAssembly.instantiateStreaming||x()||"function"!=typeof fetch?r(t):fetch(M,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,a).then(t,(function(n){return l("wasm streaming compile failed: "+n),l("falling back to ArrayBuffer instantiation"),r(t)}))}))).catch(o);}(),e.___wasm_call_ctors=function(){return (e.___wasm_call_ctors=e.asm.Y).apply(null,arguments)};var _t,Ct=e._malloc=function(){return (Ct=e._malloc=e.asm.Z).apply(null,arguments)},Pt=e._free=function(){return (Pt=e._free=e.asm._).apply(null,arguments)},$t=e.___getTypeName=function(){return ($t=e.___getTypeName=e.asm.$).apply(null,arguments)};function kt(){function n(){if(!_t&&(_t=!0,e.calledRun=!0,!C)){if(B(S),a(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var n=e.postRun.shift();F.unshift(n);}B(F);}}if(!(0<U)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)D();B(O),0<U||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("");}),1),n();}),1)):n());}}if(e.__embind_initialize_bindings=function(){return (e.__embind_initialize_bindings=e.asm.aa).apply(null,arguments)},e.___cxa_is_pointer_type=function(){return (e.___cxa_is_pointer_type=e.asm.ca).apply(null,arguments)},I=function n(){_t||kt(),_t||(I=n);},e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return kt(),n.ready},e.exports=a;const i=o$1(o.exports),u=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));

export { u as a };
