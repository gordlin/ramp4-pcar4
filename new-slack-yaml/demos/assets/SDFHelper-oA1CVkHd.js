import { o } from './floatRGBA-D2QjkIO0.js';
import { ag as m$1 } from './main-Bmb_kS21.js';
import { t } from './UpdateTracking2D-9EDv1F6n.js';
import { $ } from './definitions-slUvtMCM.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(t){switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;if(!o||1!==o.length)return null;const n=o[0];return "CIMVectorMarker"!==n.type?null:e(n)}case"CIMVectorMarker":{const o=t.markerGraphics;if(!o||1!==o.length)return null;const n=o[0];if(!n)return null;const r=n.geometry;if(!r)return null;const e=n.symbol;return !e||"CIMPolygonSymbol"!==e.type&&"CIMLineSymbol"!==e.type||e.symbolLayers?.some((t=>!!t.effects))?null:{type:"sdf",geom:r,asFill:"CIMPolygonSymbol"===e.type}}}}function l(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function i(t$1){let o=1/0,r=-1/0,e=1/0,l=-1/0;for(const n of t$1)for(const t of n)t[0]<o&&(o=t[0]),t[0]>r&&(r=t[0]),t[1]<e&&(e=t[1]),t[1]>l&&(l=t[1]);return new t(o,e,r-o,l-e)}function s(t){let o=1/0,n=-1/0,r=1/0,e=-1/0;for(const l of t)for(const t of l)t[0]<o&&(o=t[0]),t[0]>n&&(n=t[0]),t[1]<r&&(r=t[1]),t[1]>e&&(e=t[1]);return [o,r,n,e]}function f(t){return t?t.rings?s(t.rings):t.paths?s(t.paths):m$1(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function m(t,o,n,e,l){const[i,s,f,m]=t;if(f<i||m<s)return [0,0,0,1];const a=f-i,c=m-s,u=128,y=$,h=Math.floor(.5*(.5*u-y)),x=(u-2*(h+y))/Math.max(a,c),M=Math.round(a*x)+2*h,p=Math.round(c*x)+2*h;let g=1;if(o){g=p/x/(o.ymax-o.ymin);}let d=0,b=0,w=1;e&&(l?o&&n&&o.ymax-o.ymin>0&&(w=(o.xmax-o.xmin)/(o.ymax-o.ymin),d=e.x/(n*w),b=e.y/n):(d=e.x,b=e.y)),o&&(d=.5*(o.xmax+o.xmin)+d*(o.xmax-o.xmin),b=.5*(o.ymax+o.ymin)+b*(o.ymax-o.ymin)),d-=i,b-=s,d*=x,b*=x,d+=h,b+=h;let C=d/M-.5,I=b/p-.5;return l&&n&&(C*=n*w,I*=n),[g,C,I,w]}function a(t){const o=l(t.geom),n=i(o),e=128,s=$,f=Math.floor(.5*(.5*e-s)),m=(e-2*(f+s))/Math.max(n.width,n.height),a=Math.round(n.width*m)+2*f,h=Math.round(n.height*m)+2*f,x=[];for(const r of o)if(r&&r.length>1){const o=[];for(const e of r){let[r,l]=e;r-=n.x,l-=n.y,r*=m,l*=m,r+=f-.5,l+=f-.5,t.asFill?o.push([r,l]):o.push([Math.round(r),Math.round(l)]);}if(t.asFill){const t=o.length-1;o[0][0]===o[t][0]&&o[0][1]===o[t][1]||o.push(o[0]);}x.push(o);}const M=c(x,a,h,f);return t.asFill&&u(x,a,h,f,M),[y(M,f),a,h]}function c(t,o,n,r){const e=o*n,l=new Array(e),i=r*r+1;for(let s=0;s<e;++s)l[s]=i;for(const s of t){const t=s.length;for(let e=1;e<t;++e){const t=s[e-1],i=s[e];let f,m,a,c;t[0]<i[0]?(f=t[0],m=i[0]):(f=i[0],m=t[0]),t[1]<i[1]?(a=t[1],c=i[1]):(a=i[1],c=t[1]);let u=Math.floor(f)-r,y=Math.floor(m)+r,h=Math.floor(a)-r,x=Math.floor(c)+r;u<0&&(u=0),y>o&&(y=o),h<0&&(h=0),x>n&&(x=n);const M=i[0]-t[0],p=i[1]-t[1],g=M*M+p*p;for(let r=u;r<y;r++)for(let e=h;e<x;e++){let s,f,m=(r-t[0])*M+(e-t[1])*p;m<0?(s=t[0],f=t[1]):m>g?(s=i[0],f=i[1]):(m/=g,s=t[0]+m*M,f=t[1]+m*p);const a=(r-s)*(r-s)+(e-f)*(e-f),c=(n-e-1)*o+r;a<l[c]&&(l[c]=a);}}}for(let s=0;s<e;++s)l[s]=Math.sqrt(l[s]);return l}function u(t,o,n,r,e){for(const l of t){const t=l.length;for(let i=1;i<t;++i){const t=l[i-1],s=l[i];let f,m,a,c;t[0]<s[0]?(f=t[0],m=s[0]):(f=s[0],m=t[0]),t[1]<s[1]?(a=t[1],c=s[1]):(a=s[1],c=t[1]);let u=Math.floor(f),y=Math.floor(m)+1,h=Math.floor(a),x=Math.floor(c)+1;u<r&&(u=r),y>o-r&&(y=o-r),h<r&&(h=r),x>n-r&&(x=n-r);for(let l=h;l<x;++l){if(t[1]>l==s[1]>l)continue;const i=(n-l-1)*o;for(let o=u;o<y;++o)o<(s[0]-t[0])*(l-t[1])/(s[1]-t[1])+t[0]&&(e[i+o]=-e[i+o]);for(let t=r;t<u;++t)e[i+t]=-e[i+t];}}}}function y(o$1,n){const r=2*n,e=o$1.length,l=new Uint8Array(4*e);for(let i=0;i<e;++i){const n=.5-o$1[i]/r;o(n,l,4*i);}return l}

export { a, e, f, m };