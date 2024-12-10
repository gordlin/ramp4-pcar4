import{al as C,i1 as a,jb as L,hN as F,dj as q,ap as l,dk as G,dl as h,dp as M,dn as g,hO as T,ak as v,aa as S,jc as z,a9 as H,jd as E,am as y,je as I,e4 as J,dm as K,jf as d,ao as Q,jg as A,fs as O,jh as U,ji as W,i2 as tt}from"./main-Bd3SZcXj.js";import{c as f,f as nt}from"./plane-Bf2c5DrH.js";function it(t,i){const n=C(t,i)/(a(t)*a(i));return-L(n)}class et{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&F(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,R));i++)this._items.push(this._allocator())}}const R=1024;function N(t){return t?k(q(t.origin),q(t.direction)):k(l(),l())}function k(t,i){return{origin:t,direction:i}}function Rt(t,i){const n=ot.get();return n.origin=t,n.direction=i,n}function st(t,i,n=N()){return G(n.origin,t),h(n.direction,i,t),n}function rt(t,i,n){const e=C(t.direction,h(n,i,t.origin));return M(n,t.origin,g(n,t.direction,e)),n}const ot=new et(()=>N()),ct=w();function w(){return T()}const ut=v,at=v;function Z(t,i){return S(i,t)}function ft(t,i){return z(t[0],t[1],t[2],i)}function ht(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function gt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function p(t){return t[3]}function mt(t){return t}function dt(t,i,n,e){return z(t,i,n,e)}function _t(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Mt(t,i,n){return t!==n&&Z(t,n),n}function $(t,i,n){if(i==null||!V(t,i,_))return!1;let{t0:e,t1:s}=_;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(n){const{origin:r,direction:o}=i;n[0]=r[0]+o[0]*e,n[1]=r[1]+o[1]*e,n[2]=r[2]+o[2]*e}return!0}function pt(t,i,n){const e=st(i,n);if(!V(t,e,_))return[];const{origin:s,direction:r}=e,{t0:o,t1:c}=_,u=m=>{const j=l();return tt(j,s,r,m),x(t,j,j)};return Math.abs(o-c)<H()?[u(o)]:[u(o),u(c)]}const _={t0:0,t1:0};function V(t,i,n){const{origin:e,direction:s}=i,r=$t;r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(o===0)return!1;const c=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const m=Math.sqrt(u);return n.t0=(-c-m)/(2*o),n.t1=(-c+m)/(2*o),!0}const $t=l();function jt(t,i){return $(t,i,null)}function Pt(t,i,n){if($(t,i,n))return n;const e=X(t,i,f.get());return M(n,i.origin,g(f.get(),i.direction,E(i.origin,e)/a(i.direction))),n}function X(t,i,n){const e=f.get(),s=nt.get();y(e,i.origin,i.direction);const r=p(t);y(n,e,i.origin),g(n,n,1/a(n)*r);const o=Y(t,i.origin),c=it(i.origin,n);return I(s,c+o,e),J(n,n,s),n}function St(t,i,n){return $(t,i,n)?n:(rt(i,t,n),x(t,n,n))}function x(t,i,n){const e=h(f.get(),i,t),s=g(f.get(),e,t[3]/a(e));return M(n,s,t)}function bt(t,i){const n=h(f.get(),i,t),e=K(n),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function Y(t,i){const n=h(f.get(),i,t),e=a(n),s=p(t),r=s+Math.abs(s-e);return L(s/r)}const P=l();function B(t,i,n,e){const s=h(P,i,t);switch(n){case d.X:{const r=A(s,P)[2];return O(e,-Math.sin(r),Math.cos(r),0)}case d.Y:{const r=A(s,P),o=r[1],c=r[2],u=Math.sin(o);return O(e,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case d.Z:return Q(e,s);default:return}}function D(t,i){const n=h(b,i,t);return a(n)-t[3]}function wt(t,i,n,e){const s=D(t,i),r=B(t,i,d.Z,b),o=g(b,r,n-s);return M(e,i,o)}function xt(t,i){const n=U(t,i),e=p(t);return n<=e*e}function qt(t,i,n=T()){const e=E(t,i),s=t[3],r=i[3];return e+r<s?(S(n,t),n):e+s<r?(S(n,i),n):(W(n,t,i,(e+r-s)/(2*e)),n[3]=(e+s+r)/2,n)}const b=l(),yt=w();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:D,angleToSilhouette:Y,axisAt:B,clear:lt,closestPoint:St,closestPointOnSilhouette:X,containsPoint:xt,copy:Z,create:w,distanceToSilhouette:bt,elevate:_t,equals:at,exactEquals:ut,fromCenterAndRadius:ft,fromRadius:gt,fromValues:dt,getCenter:mt,getRadius:p,intersectLine:pt,intersectRay:$,intersectRayClosestSilhouette:Pt,intersectsRay:jt,projectPoint:x,setAltitudeAt:wt,setExtent:Mt,tmpSphere:yt,union:qt,wrap:ht},Symbol.toStringTag,{value:"Module"}));export{jt as H,p as N,Z as T,mt as V,w as _,xt as a,Rt as l,N as m,et as s};
