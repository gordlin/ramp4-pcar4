import { cw as g$1, cx as u$1, cl as n$1, h7 as n, cm as r$1, hH as l$1, fv as o$1, fV as E$2, hI as f$1, hJ as X$3, hK as Z$1, hL as p$1, h6 as f$2, fw as S$1, hM as z$1, hN as O$3, eE as n$2, hO as W$1, hx as n$3, eI as K$2, eH as b$1, hP as s$1, hQ as l$2, eG as m$1, hB as s$2, hR as q$1, hS as l$3, hT as c$1, hU as y$1 } from './main-BtYHawlJ.js';
import { t as t$1, e } from './mat3f64-DiVtVT5k.js';
import { e as e$2 } from './mat4f64-D1udxz0O.js';
import { X as X$2, O as O$2, x as x$1 } from './quat-DS5RBkPB.js';
import { o, e as e$1 } from './quatf64-BVXz_O4E.js';
import { a, R as R$1 } from './computeTranslationToOriginAndRotation-B5EQgpc6.js';
import { c, o as o$2, F as F$2 } from './plane-DZj1ZTUT.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=t){this.data=s,this.size=t,this.stride=i;}}class t extends s{constructor(s,t,i,e=!1,c=i){super(s,i,c),this.indices=t,this.exclusive=e;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=1e-6,f=n$1(),h=n$1();function u(t,r){const{data:n,size:i}=t,o=n.length/i;if(o<=0)return;const s$1=new tt$1(t);it$1(f,s$1.minProj,s$1.maxProj),st$1(f,f,.5),ot$1(h,s$1.maxProj,s$1.minProj);const a=nt$1(h),m=new rt$1;m.quality=a,o<14&&(t=new s(new Float64Array(s$1.buffer,112,42),3));const u=n$1(),j=n$1(),P=n$1(),b=n$1(),x=n$1(),I=n$1(),N=n$1();switch(l(s$1,t,N,u,j,P,b,x,I,m)){case 1:return void O$1(f,h,r);case 2:return void K$1(t,b,r)}w(t,N,u,j,P,b,x,I,m),L$1(t,m.b0,m.b1,m.b2,D,H);const V=n$1();ot$1(V,H,D),m.quality=nt$1(V),m.quality<a?Z(m.b0,m.b1,m.b2,D,H,V,r):O$1(f,h,r);}function l(t,r,n,i,o,s,e,a,c,f){if(A(t,i,o),ft$1(i,o)<m)return 1;ot$1(e,i,o),ct$1(e,e);return q(r,i,e,s)<m?2:(ot$1(a,o,s),ct$1(a,a),ot$1(c,s,i),ct$1(c,c),at$1(n,a,e),ct$1(n,n),Y$1(r,n,e,a,c,f),0)}const j=n$1(),P=n$1(),b=n$1(),x=n$1(),I$1=n$1(),N$1=n$1(),V=n$1(),y=n$1();function w(t,r,n,i,o,s,e,a,c){M(t,r,n,j,P),void 0!==j[0]&&(ot$1(b,j,n),ct$1(b,b),ot$1(x,j,i),ct$1(x,x),ot$1(I$1,j,o),ct$1(I$1,I$1),at$1(N$1,x,s),ct$1(N$1,N$1),at$1(V,I$1,e),ct$1(V,V),at$1(y,b,a),ct$1(y,y),Y$1(t,N$1,s,x,b,c),Y$1(t,V,e,I$1,x,c),Y$1(t,y,a,b,I$1,c)),void 0!==P[0]&&(ot$1(b,P,n),ct$1(b,b),ot$1(x,P,i),ct$1(x,x),ot$1(I$1,P,o),ct$1(I$1,I$1),at$1(N$1,x,s),ct$1(N$1,N$1),at$1(V,I$1,e),ct$1(V,V),at$1(y,b,a),ct$1(y,y),Y$1(t,N$1,s,x,b,c),Y$1(t,V,e,I$1,x,c),Y$1(t,y,a,b,I$1,c));}function A(t,r,n){let i=ft$1(t.maxVert[0],t.minVert[0]),o=0;for(let s=1;s<7;++s){const r=ft$1(t.maxVert[s],t.minVert[s]);r>i&&(i=r,o=s);}et$1(r,t.minVert[o]),et$1(n,t.maxVert[o]);}const g=[0,0,0];function q(t,r,n,i){const{data:o,size:s}=t;let e=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=s){g[0]=o[c]-r[0],g[1]=o[c+1]-r[1],g[2]=o[c+2]-r[2];const t=n[0]*g[0]+n[1]*g[1]+n[2]*g[2],i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-t*t/i;s>e&&(e=s,a=c);}return et$1(i,o,a),e}const d=n();function M(t,r,n,i,o){G(t,r,d,o,i);const s=ht$1(n,r);d[1]-m<=s&&(i[0]=void 0),d[0]+m>=s&&(o[0]=void 0);}const F$1=n$1(),T$1=n$1(),v=n$1(),E$1=n$1(),p=n$1(),z=n$1();function Y$1(t,r,n,i,o,s){if(mt$1(r)<m)return;at$1(F$1,n,r),at$1(T$1,i,r),at$1(v,o,r),S(t,r,d),p[1]=d[0],E$1[1]=d[1],z[1]=E$1[1]-p[1];const e=[n,i,o],a=[F$1,T$1,v];for(let c=0;c<3;++c){S(t,e[c],d),p[0]=d[0],E$1[0]=d[1],S(t,a[c],d),p[2]=d[0],E$1[2]=d[1],z[0]=E$1[0]-p[0],z[2]=E$1[2]-p[2];const n=nt$1(z);n<s.quality&&(et$1(s.b0,e[c]),et$1(s.b1,r),et$1(s.b2,a[c]),s.quality=n);}}const _=n$1();function S(t,r,n){const{data:i,size:o}=t;n[0]=Number.POSITIVE_INFINITY,n[1]=Number.NEGATIVE_INFINITY;for(let s=0;s<i.length;s+=o){const t=i[s]*r[0]+i[s+1]*r[1]+i[s+2]*r[2];n[0]=Math.min(n[0],t),n[1]=Math.max(n[1],t);}}function G(t,r,n,i,o){const{data:s,size:e}=t;et$1(i,s),et$1(o,i),n[0]=ht$1(_,r),n[1]=n[0];for(let a=e;a<s.length;a+=e){const t=s[a]*r[0]+s[a+1]*r[1]+s[a+2]*r[2];t<n[0]&&(n[0]=t,et$1(i,s,a)),t>n[1]&&(n[1]=t,et$1(o,s,a));}}function O$1(t,n,i){i.center=t,i.halfSize=g$1(n,n,.5),i.quaternion=o;}const k=n$1(),B=n$1(),C=n$1(),D=n$1(),H=n$1(),J$1=n$1();function K$1(t,r,n){et$1(k,r),Math.abs(r[0])>Math.abs(r[1])&&Math.abs(r[0])>Math.abs(r[2])?k[0]=0:Math.abs(r[1])>Math.abs(r[2])?k[1]=0:k[2]=0,mt$1(k)<m&&(k[0]=k[1]=k[2]=1),at$1(B,r,k),ct$1(B,B),at$1(C,r,B),ct$1(C,C),L$1(t,r,B,C,D,H),ot$1(J$1,H,D),Z(r,B,C,D,H,J$1,n);}function L$1(t,r,n,i,o,s){S(t,r,d),o[0]=d[0],s[0]=d[1],S(t,n,d),o[1]=d[0],s[1]=d[1],S(t,i,d),o[2]=d[0],s[2]=d[1];}const Q=n$1(),R=n$1(),U=n$1(),W=t$1(1,0,0,0,1,0,0,0,1),X$1=e$1();function Z(t,r,n,i,e,a,c){W[0]=t[0],W[1]=t[1],W[2]=t[2],W[3]=r[0],W[4]=r[1],W[5]=r[2],W[6]=n[0],W[7]=n[1],W[8]=n[2],c.quaternion=ut$1(X$1,W),it$1(Q,i,e),st$1(Q,Q,.5),st$1(R,t,Q[0]),st$1(U,r,Q[1]),it$1(R,R,U),st$1(U,n,Q[2]),c.center=u$1(R,R,U),c.halfSize=g$1(Q,a,.5);}const $$1=7;let tt$1 = class tt{constructor(t){this.minVert=new Array($$1),this.maxVert=new Array($$1);const r=64*$$1;this.buffer=new ArrayBuffer(r);let n=0;this.minProj=new Float64Array(this.buffer,n,$$1),n+=8*$$1,this.maxProj=new Float64Array(this.buffer,n,$$1),n+=8*$$1;for(let a=0;a<$$1;++a)this.minVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$$1;++a)this.maxVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$$1;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const i=new Array($$1),o=new Array($$1),{data:s,size:e}=t;for(let a=0;a<s.length;a+=e){let t=s[a];t<this.minProj[0]&&(this.minProj[0]=t,i[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=s[a+1],t<this.minProj[1]&&(this.minProj[1]=t,i[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=s[a+2],t<this.minProj[2]&&(this.minProj[2]=t,i[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=s[a]+s[a+1]+s[a+2],t<this.minProj[3]&&(this.minProj[3]=t,i[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=s[a]+s[a+1]-s[a+2],t<this.minProj[4]&&(this.minProj[4]=t,i[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=s[a]-s[a+1]+s[a+2],t<this.minProj[5]&&(this.minProj[5]=t,i[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=s[a]-s[a+1]-s[a+2],t<this.minProj[6]&&(this.minProj[6]=t,i[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a);}for(let a=0;a<$$1;++a){let t=i[a];et$1(this.minVert[a],s,t),t=o[a],et$1(this.maxVert[a],s,t);}}};let rt$1 = class rt{constructor(){this.b0=r$1(1,0,0),this.b1=r$1(0,1,0),this.b2=r$1(0,0,1),this.quality=0;}};function nt$1(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function it$1(t,r,n){t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2];}function ot$1(t,r,n){t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2];}function st$1(t,r,n){t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n;}function et$1(t,r,n=0){t[0]=r[n],t[1]=r[n+1],t[2]=r[n+2];}function at$1(t,r,n){const i=r[0],o=r[1],s=r[2],e=n[0],a=n[1],c=n[2];t[0]=o*c-s*a,t[1]=s*e-i*c,t[2]=i*a-o*e;}function ct$1(t,r){const n=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(n>0){const i=1/Math.sqrt(n);t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i;}}function mt$1(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function ft$1(t,r){const n=r[0]-t[0],i=r[1]-t[1],o=r[2]-t[2];return n*n+i*i+o*o}function ht$1(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function ut$1(t,r){const n=r[0]+r[4]+r[8];if(n>0){let i=Math.sqrt(n+1);t[3]=.5*i,i=.5/i,t[0]=(r[5]-r[7])*i,t[1]=(r[6]-r[2])*i,t[2]=(r[1]-r[3])*i;}else {let n=0;r[4]>r[0]&&(n=1),r[8]>r[3*n+n]&&(n=2);const i=(n+1)%3,o=(n+2)%3;let s=Math.sqrt(r[3*n+n]-r[3*i+i]-r[3*o+o]+1);t[n]=.5*s,s=.5/s,t[3]=(r[3*i+o]-r[3*o+i])*s,t[i]=(r[3*i+n]+r[3*n+i])*s,t[o]=(r[3*o+n]+r[3*n+o])*s;}return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class O{constructor(t=l$1,a=gt,e=o){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],e[0],e[1],e[2],e[3]];}clone(){const t=new O;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1;}get isValid(){return this._data[3]>=0}static fromData(t){const a=new O;return a._data=t.slice(),a}static fromJSON(t){return new O(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice();}get center(){return o$1(c.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2];}setCenter(t,a,e){this._data[0]=t,this._data[1]=a,this._data[2]=e;}get halfSize(){return o$1(c.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2];}get quaternion(){return X$2(o$2.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3];}get data(){return this._data}getCorners(t){const a=T,e=this._data;a[0]=e[6],a[1]=e[7],a[2]=e[8],a[3]=e[9];for(let s=0;s<8;++s){const i=t[s];i[0]=(1&s?-1:1)*e[3],i[1]=(2&s?-1:1)*e[4],i[2]=(4&s?-1:1)*e[5],E$2(i,i,a),i[0]+=e[0],i[1]+=e[1],i[2]+=e[2];}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],e=this._data[5];return Math.sqrt(t*t+a*a+e*e)}intersectSphere(t){E[0]=this._data[0]-t[0],E[1]=this._data[1]-t[1],E[2]=this._data[2]-t[2];const a=this.getQuaternion(X);return O$2(T,a),E$2(E,E,T),f$1(E,E),F[0]=Math.min(E[0],this._data[3]),F[1]=Math.min(E[1],this._data[4]),F[2]=Math.min(E[2],this._data[5]),X$3(F,E)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const e=this._data;E[0]=e[0]-t[0],E[1]=e[1]-t[1],E[2]=e[2]-t[2];const s=t[3],i=s+a;return !(Z$1(E)>i*i)&&(T[0]=-e[6],T[1]=-e[7],T[2]=-e[8],T[3]=e[9],E$2(E,E,T),f$1(E,E),F[0]=Math.min(E[0],e[3]),F[1]=Math.min(E[1],e[4]),F[2]=Math.min(E[2],e[5]),X$3(F,E)<s*s)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],e=this.projectedRadius(F$2(t));return a>e?1:a<-e?-1:0}intersectRay(t,a,e=0){const s=this._data,i=T;i[0]=-s[6],i[1]=-s[7],i[2]=-s[8],i[3]=s[9],E[0]=t[0]-s[0],E[1]=t[1]-s[1],E[2]=t[2]-s[2];const r=E$2(E,E,T),n=E$2(F,a,T);let o=-1/0,h=1/0;const c=this.getHalfSize(ct);for(let d=0;d<3;d++){const t=r[d],a=n[d],s=c[d]+e;if(Math.abs(a)>1e-6){const e=(s-t)/a,i=(-s-t)/a;o=Math.max(o,Math.min(e,i)),h=Math.min(h,Math.max(e,i));}else if(t>s||t<-s)return !1}return o<=h}projectedArea(e,s,i,n){const o=this.getQuaternion(X);O$2(T,o),E[0]=e[0]-this._data[0],E[1]=e[1]-this._data[1],E[2]=e[2]-this._data[2],E$2(E,E,T);const h=this.getHalfSize(ct),l=E[0]<-h[0]?-1:E[0]>h[0]?1:0,_=E[1]<-h[1]?-1:E[1]>h[1]?1:0,m=E[2]<-h[2]?-1:E[2]>h[2]?1:0,g=Math.abs(l)+Math.abs(_)+Math.abs(m);if(0===g)return 1/0;const p=1===g?4:6,M=6*(l+3*_+9*m+13);p$1(dt,o),f$2(dt,dt,h);const b=this.getCenter(ot);for(let t=0;t<p;t++){const a=K[M+t];o$1(E,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),S$1(E,E,dt),u$1(I,b,E),I[3]=1,z$1(I,I,s);const e=1/Math.max(1e-6,I[3]);N[2*t]=I[0]*e,N[2*t+1]=I[1]*e;}const j=2*p-2;let S=N[0]*(N[3]-N[j+1])+N[j]*(N[1]-N[j-1]);for(let t=2;t<j;t+=2)S+=N[t]*(N[t+3]-N[t-1]);return Math.abs(S)*i*n*.125}projectedRadius(t){const a=this.getQuaternion(X);return O$2(T,a),E$2(E,t,T),Math.abs(E[0]*this._data[3])+Math.abs(E[1]*this._data[4])+Math.abs(E[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(F$2(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(F$2(t))}toAaBoundingBox(a){const e=this.getQuaternion(X),s=p$1(dt,e),i=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),r=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),n=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);a[0]=this._data[0]-i,a[1]=this._data[1]-r,a[2]=this._data[2]-n,a[3]=this._data[0]+i,a[4]=this._data[1]+r,a[5]=this._data[2]+n;}transform(t,a$1,e,s=0,i=a(e),r=a(a$1),n=W$1(a$1,r)){if(e===i)a$1.isGeographic?st(this,t,a$1,s,r):et(this,t,a$1,s,r,n);else if(a$1.isWGS84&&(e.isWebMercator||O$3(e)))$(a$1,this,e,t,s);else if(a$1.isWebMercator&&O$3(e))tt(a$1,this,e,t,s);else {const i=this.getCenter(ot);i[2]+=s,n$2(i,a$1,0,i,e,0,1),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(X),t.halfSize=this.getHalfSize(ct));}}}const T=e$1(),X=e$1(),Y=e$1(),E=n$1(),F=n$1(),I=n$3();function J(t,a=new O){return u(t,a),a}const N=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],K=(()=>{const t=new Int8Array(162);let a=0;const e=e=>{for(let s=0;s<e.length;s++)t[a+s]=e[s];a+=6;};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),t})();function L(t,a,e,s,i){const n=t.getQuaternion(X);i.quaternion=n,O$2(T,n);const o=t.getCenter(ot),h=t.getHalfSize(ct);if(s===l$2.Global){E$2(mt,o,T),f$1(ft,mt),m$1(ut,ft,h),K$2(ut,ft,ut);const s=s$2(ut);u$1(ut,ft,h);const r=s$2(ut);if(s<e)i.center=o,o$1(mt,e,e,e),i.halfSize=u$1(mt,h,mt);else {const n=r>0?1+a/r:1,o=s>0?1+e/s:1,c=(o+n)/2,l=(o-n)/2;g$1(ut,ft,l),i.halfSize=q$1(ut,ut,h,c),g$1(ut,ft,c),q$1(ut,ut,h,l),l$3(mt,mt),c$1(mt,ut,mt);const _=t.getQuaternion(Y);i.center=E$2(mt,mt,_);}}else {i.center=q$1(mt,o,y$1,(e+a)/2);const t=E$2(mt,y$1,T);f$1(t,t),i.halfSize=q$1(ft,h,t,(e-a)/2);}return i}function $(t,a$1,e,s,i){a$1.getCenter(ot),ot[2]+=i;const r=a(e);n$2(ot,t,0,ot,r,0,1),at(r,a$1,ot,e,s);}function tt(t,a,e,s,i){a.getCenter(ot),ot[2]+=i,at(t,a,ot,e,s);}function at(a,e,s,i,r){const n=e.getQuaternion(X),o=p$1(dt,n),h=e.getHalfSize(ct);for(let t=0;t<8;++t){for(let a=0;a<3;++a)nt[a]=h[a]*(0!=(t&1<<a)?-1:1);for(let a=0;a<3;++a){let e=s[a];for(let t=0;t<3;++t)e+=nt[t]*o[3*t+a];it[3*t+a]=e;}}n$2(it,a,0,it,i,0,8),J(rt,r);}function et(t,a$1,e,s,i=a(e),o=W$1(e,i)){t.getCorners(_t),t.getCenter(nt),nt[2]+=s,R$1(e,nt,lt,i),a$1.setCenter(lt[12],lt[13],lt[14]);const h=2*Math.sqrt(1+lt[0]+lt[5]+lt[10]);T[0]=(lt[6]-lt[9])/h,T[1]=(lt[8]-lt[2])/h,T[2]=(lt[1]-lt[4])/h,T[3]=.25*h;const _=t.getQuaternion(X);a$1.quaternion=x$1(T,T,_),O$2(T,T),o$1(ft,0,0,0);const m=a$1.getCenter(ht);for(const r of _t)r[2]+=s,o(r,0,r,0),K$2(mt,r,m),E$2(mt,mt,T),f$1(mt,mt),b$1(ft,ft,mt);a$1.halfSize=ft;}function st(t,a$1,e,s,i=a(e)){const n=s$1(e),o=1+Math.max(0,s)/(n.radius+t.centerZ);t.getCenter(nt),nt[2]+=s,n$2(nt,e,0,nt,i,0,1),a$1.center=nt;const h=t.getQuaternion(X);a$1.quaternion=h,O$2(T,h),o$1(mt,0,0,1),E$2(mt,mt,T);const l=t.getHalfSize(ct);o$1(mt,l[0]*Math.abs(mt[0]),l[1]*Math.abs(mt[1]),l[2]*Math.abs(mt[2])),g$1(mt,mt,n.inverseFlattening),u$1(mt,l,mt),a$1.halfSize=g$1(mt,mt,o);}const it=new Array(24),rt=new s(it,3),nt=n$1(),ot=n$1(),ht=n$1(),ct=n$1(),dt=e(),lt=e$2(),_t=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],mt=n$1(),ft=n$1(),ut=n$1(),gt=r$1(-1,-1,-1);

export { L, O, t };
