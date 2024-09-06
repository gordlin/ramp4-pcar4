import { aF as j$1, aI as M$1, bl as f$1, df as K, d8 as e, dg as M$2, dh as s } from './main-b051658a.js';
import { j as j$2 } from './timeSupport-6e3e68b2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=new Float64Array(2),p=new Float64Array(2),M="0123456789bcdefghjkmnpqrstuvwxyz",j=64;function S(t,e$1,f,l){const a=[t.xmin,t.ymin,t.xmax,t.ymax],u=j$1.fromExtent(M$1.fromBounds(a,l)),h=j$2(u,l,f$1.WGS84,{densificationStep:e$1*j});if(!h)return null;const m=K(new e,h,!1,!1),p=m.coords.filter(((t,o)=>!(o%2))),g=m.coords.filter(((t,o)=>o%2)),y=Math.min(...p),d=Math.min(...g),x=Math.max(...p),M=Math.max(...g),S=A(y,d,f,f$1.WGS84),G=A(x,M,f,f$1.WGS84);return S&&G?{bounds:a,geohashBounds:{xLL:S[0],yLL:S[1],xTR:G[0],yTR:G[1]},level:f}:null}function A(o,r,s$1,i){if(i.isWebMercator){const n=M$2(o/s.radius),i=n-360*Math.floor((n+180)/360),c=[0,0];return Y(c,0,M$2(Math.PI/2-2*Math.atan(Math.exp(-r/s.radius))),i,s$1),c}const f=j$2({x:o,y:r},i,f$1.WGS84);if(!f)return null;const l=[0,0];return Y(l,0,f.y,f.x,s$1),l}function W(t){return M[t]}function b(t){return (t[0]+t[1])/2}function w(t,o,r){return t[0]=o,t[1]=r,t}function C(t,o){const r=b(t),n=o,e=!o;t[0]=e*t[0]+n*r,t[1]=e*r+n*t[1];}function L(t,o){const r=o>b(t);return C(t,r),r}function R(t,o){let r=-90,n=90,e=-180,s=180;for(let i=0;i<o;i++){const o=Math.ceil((i+1)/2),c=Math.floor((i+1)/2),f=1-i%2,l=30-(3*o+2*c),a=30-(2*o+3*c),u=3*f+2*(1-f),h=2*f+3*(1-f),m=3*f+7*(1-f)<<a,p=(7*f+3*(1-f)<<l&t.geohashX)>>l,g=(m&t.geohashY)>>a;for(let t=u-1;t>=0;t--){const o=(e+s)/2,r=p&1<<t?1:0;e=(1-r)*e+r*o,s=(1-r)*o+r*s;}for(let t=h-1;t>=0;t--){const o=(r+n)/2,e=g&1<<t?1:0;r=(1-e)*r+e*o,n=(1-e)*o+e*n;}}return [e,r,s,n]}function Y(t,o,r,n,e){e%2&&(e+=1);let s=0,i=0,c=-90,f=90,l=-180,a=180;for(let u=0;u<e/2;u++){for(let t=0;t<5;t++){const o=(l+a)/2,r=n>o?1:0;s|=r<<29-(t+5*u),l=(1-r)*l+r*o,a=(1-r)*o+r*a;}for(let t=0;t<5;t++){const o=(c+f)/2,n=r>o?1:0;i|=n<<29-(t+5*u),c=(1-n)*c+n*o,f=(1-n)*o+n*f;}}t[2*o]=s,t[2*o+1]=i;}function z$1(t,o,r){let n="";const e=w(m,-90,90),s=w(p,-180,180);for(let i=0;i<r;i++){let r=0;!(i%2)?(r|=L(s,o)<<4,r|=L(e,t)<<3,r|=L(s,o)<<2,r|=L(e,t)<<1,r|=L(s,o)<<0):(r|=L(e,t)<<4,r|=L(s,o)<<3,r|=L(e,t)<<2,r|=L(s,o)<<1,r|=L(e,t)<<0),n+=W(r);}return n}

export { A, R, S, z$1 as z };
