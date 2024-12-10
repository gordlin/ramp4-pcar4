import { ak as u$1, al as s, am as a$1, a9 as w, an as r, ao as u, ap as l, ag as m, aq as f$1, ar as s$1, as as a$2, at as s$2, au as g$1, av as i } from './main-DAn2heHU.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function p(t){return f(t,!0)}function a(t){return f(t,!1)}function f(i$1,n){if(null==i$1)return null;const p=i$1.spatialReference,a=s(p),f=a$1(i$1)?i$1.toJSON():i$1;if(!a)return f;const I=w(p)?102100:4326,g=r[I].maxX,v=r[I].minX;if(u(f))return y(f,g,v);if(l(f))return f.points=f.points.map((t=>y(t,g,v))),f;if(m(f))return d(f,a);if(f$1(f)||s$1(f)){const t=a$2(S,f),i$1={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},e=i(i$1.xmin,v)*(2*g),h=0===e?f:s$2(f,e);return i$1.xmin+=e,i$1.xmax+=e,i$1.xmax>g?P(h,g,n):i$1.xmin<v?P(h,v,n):h}return f}function d(t,i){if(!i)return t;const s=I(t,i).map((t=>t.extent));return s.length<2?s[0]||t:s.length>2?(t.xmin=i.valid[0],t.xmax=i.valid[1],t):{rings:s.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function y(t,i$1,s){if(Array.isArray(t)){const n=t[0];if(n>i$1){const s=i(n,i$1);t[0]=n+s*(-2*i$1);}else if(n<s){const i$1=i(n,s);t[0]=n+i$1*(-2*s);}}else {const n=t.x;if(n>i$1){const s=i(n,i$1);t.x+=s*(-2*i$1);}else if(n<s){const i$1=i(n,s);t.x+=i$1*(-2*s);}}return t}function I(t,i){const s=[],{ymin:n,ymax:e,xmin:h,xmax:o}=t,r=t.xmax-t.xmin,[u,m]=i.valid,{x,frameId:_}=g(t.xmin,i),{x:l,frameId:c}=g(t.xmax,i),p=x===l&&r>0;if(r>2*m){const t={xmin:h<o?x:l,ymin:n,xmax:m,ymax:e},i={xmin:u,ymin:n,xmax:h<o?l:x,ymax:e},r={xmin:0,ymin:n,xmax:m,ymax:e},p={xmin:u,ymin:n,xmax:0,ymax:e},a=[],f=[];v(t,r)&&a.push(_),v(t,p)&&f.push(_),v(i,r)&&a.push(c),v(i,p)&&f.push(c);for(let s=_+1;s<c;s++)a.push(s),f.push(s);s.push(new C(t,[_]),new C(i,[c]),new C(r,a),new C(p,f));}else x>l||p?s.push(new C({xmin:x,ymin:n,xmax:m,ymax:e},[_]),new C({xmin:u,ymin:n,xmax:l,ymax:e},[c])):s.push(new C({xmin:x,ymin:n,xmax:l,ymax:e},[_]));return s}function g(t,i){const[s,n]=i.valid,e=2*n;let h,o=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,o=h):t<s&&(h=Math.ceil(Math.abs(t-s)/e),t+=h*e,o=-h),{x:t,frameId:o}}function v(t,i){const{xmin:s,ymin:n,xmax:e,ymax:h}=i;return O(t,s,n)&&O(t,s,h)&&O(t,e,h)&&O(t,e,n)}function O(t,i,s){return i>=t.xmin&&i<=t.xmax&&s>=t.ymin&&s<=t.ymax}function P(t,i,s=!0){const e=!s$1(t);if(e&&g$1(t),s){return (new T).cut(t,i)}const h=e?t.rings:t.paths,o=e?4:2,r=h.length,m=-2*i;for(let n=0;n<r;n++){const t=h[n];if(t&&t.length>=o){const i=[];for(const s of t)i.push([s[0]+m,s[1]]);h.push(i);}}return e?t.rings=h:t.paths=h,t}class C{constructor(t,i){this.extent=t,this.frameIds=i;}}const S=u$1();class T{constructor(){this._linesIn=[],this._linesOut=[];}cut(t,i){let s;if(this._xCut=i,t.rings)this._closed=!0,s=t.rings,this._minPts=4;else {if(!t.paths)return null;this._closed=!1,s=t.paths,this._minPts=2;}for(const e of s){if(!e||e.length<this._minPts)continue;let t=!0;for(const i of e)t?(this.moveTo(i),t=!1):this.lineTo(i);this._closed&&this.close();}this._pushLineIn(),this._pushLineOut(),s=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&s.push(e);const n=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=n;s.push(e);}return this._closed?t.rings=s:t.paths=s,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t;}lineTo(t){const i=this._side(t[0]);if(i*this._prevSide==-1){const s=this._intersect(this._prevPt,t);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(t[0],t[1],i);}else this._lineTo(t[0],t[1],i);this._prevSide=i,this._prevPt=t;}close(){const t=this._firstPt,i=this._prevPt;t[0]===i[0]&&t[1]===i[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut);}_moveTo(t,i,s){this._closed?(this._lineIn.push([s<=0?t:this._xCut,i]),this._lineOut.push([s>=0?t:this._xCut,i])):(s<=0&&this._lineIn.push([t,i]),s>=0&&this._lineOut.push([t,i]));}_lineTo(t,i,s){this._closed?(this._addPolyVertex(this._lineIn,s<=0?t:this._xCut,i),this._addPolyVertex(this._lineOut,s>=0?t:this._xCut,i)):s<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,i])):s>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,i])):this._prevSide<0?(this._lineIn.push([t,i]),this._lineOut.push([t,i])):this._prevSide>0&&(this._lineOut.push([t,i]),this._lineIn.push([t,i]));}_addPolyVertex(t,i,s){const n=t.length;n>1&&t[n-1][0]===i&&t[n-2][0]===i?t[n-1][1]=s:t.push([i,s]);}_checkClosingPt(t){const i=t.length;i>3&&t[0][0]===this._xCut&&t[i-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[i-2][1],t.pop());}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,i){const s=(this._xCut-t[0])/(i[0]-t[0]);return t[1]+s*(i[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[];}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[];}}

export { a, p };
