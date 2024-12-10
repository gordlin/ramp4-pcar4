import{bs as L,cc as V,g4 as Y,ap as M,g5 as D,g6 as I,g7 as b,cj as T,g8 as B,co as h,cd as K,eM as Q,g9 as W,G as X,dl as Z,e4 as _}from"./main-Bd3SZcXj.js";import{e as nn}from"./mat3f64-q3fE-ZOt.js";import{o as tn,e as E}from"./mat4f64-CSKppSlJ.js";import{a as A}from"./spatialReferenceEllipsoidUtils-DVw2kBWl.js";import{u as F}from"./computeTranslationToOriginAndRotation-B9pP-nJi.js";import{m as rn}from"./meshVertexSpaceUtils-B16dZLjC.js";import{i as v,e as S,f as z}from"./vec3-RHuB5nfT.js";import{logProjectionError as $,transformNormal as k,transformTangent as q,projectFromPCPF as on,projectNormalFromPCPF as en,projectTangentFromPCPF as an,projectToPCPF as ln,projectNormalToPCPF as sn,projectTangentToPCPF as cn}from"./projection-BXObFWL-.js";function G(n,t,r,e){if(L(n.spatialReference,r)){w[0]=n.x,w[1]=n.y;const a=n.z;return w[2]=a??e??0,V(w,n.spatialReference,0,t,r,0,1)}const o=Y(n,r);return!!o&&(t[0]=o?.x,t[1]=o?.y,t[2]=o?.z??e??0,!0)}const w=M(),g=()=>X.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function Nn(n,t,{vertexSpace:r,spatialReference:e}){if(r.type==="georeferenced"){const u=n;if(!G(t,u,e))return!1;const{origin:c}=r;return Z(n,u,c),!0}const o=A(e),a=n;if(!G(t,a,o))return!1;const{origin:i}=r,l=d;if(!F(e,i,l,o))return!1;const s=h(d,l);return s!=null&&(_(n,a,s),!0)}function On(n,t,r){const{vertexSpace:e,transform:o,vertexAttributes:a}=n,i=y(n.spatialReference,r,p.SOURCE|p.TARGET);if(rn(e,t)&&(!o||D(o.localMatrix,tn))&&I(i,1)){const{position:l,normal:s,tangent:u}=a,c=r?.allowBufferReuse;return{position:c?l:l.slice(),normal:c?s:s?.slice(),tangent:c?u:u?.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?mn(n,n.vertexSpace,t.origin,r):fn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?gn(n,n.vertexSpace,t.origin,r):un(n,n.vertexSpace,t.origin,r)}}function un({vertexAttributes:n,transform:t,spatialReference:r},{origin:e},o,a){const{position:i,normal:l,tangent:s}=t?P(n,t.localMatrix):n,u=new Float64Array(i.length);let c=i;if(e&&(c=v(u,c,e)),o){const x=b(J,o);c=v(u,c,x)}y(r,a,p.NONE);const m=a?.allowBufferReuse;return{position:c!==n.position||m?c:c.slice(),normal:l!==n.normal||m?l:l?.slice(),tangent:s!==n.tangent||m?s:s?.slice()}}function fn({spatialReference:n,vertexAttributes:t,transform:r},{origin:e},o,a){const i=A(n);if(!F(n,e,f,i))return $(g(),n,i),null;r&&T(f,f,r.localMatrix),H(f,n,a,p.SOURCE);const l=new Float64Array(t.position.length),s=$n(t.position,f,n,l);if(!s)return null;const u=An(s,l,t.normal,f,n);if(t.normal&&!u)return null;const c=xn(s,l,t.tangent,f,n);if(t.tangent&&!c)return null;if(o){const m=b(J,o);v(s,s,m)}return{position:s,normal:u,tangent:c}}function gn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const i=A(t);if(!F(t,o,f,i))return $(g(),t,i),null;const l=1/y(t,a,p.TARGET);B(f,f,[l,l,l]);const s=h(R,f),{position:u,normal:c,tangent:m}=pn(n,e,r),x=new Float64Array(u.length),C=Rn(u,t,s,x);if(!C)return null;const j=K(wn,s),N=Fn(c,u,x,t,j,c!==n.normal?c:void 0);if(!N&&c)return null;const O=vn(m,u,x,t,j,m!==n.tangent?m:void 0);return!O&&m?null:{position:C,normal:N,tangent:O}}function pn(n,t,r){if(!t)return n;if(!r){const{position:o,normal:a,tangent:i}=n;return{position:v(new Float64Array(o.length),o,t),tangent:i,normal:a}}const e=P(n,r.localMatrix);return v(e.position,e.position,t),e}function mn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,a){const i=A(t);if(!F(t,e,f,i))return $(g(),t,i),null;if(r&&T(f,f,r.localMatrix),!F(t,o,R,i))return $(g(),i,t),null;h(R,R);const l=T(f,R,f);return H(l,t,a,p.SOURCE|p.TARGET),P(n,l)}function P(n,t){const r=new Float64Array(n.position.length);S(r,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&k(n.normal,e,t),o&&n.tangent&&q(n.tangent,o,t),{position:r,normal:e,tangent:o}}function $n(n,t,r,e){S(e,n,t);const o=new Float64Array(n.length);return on(e,o,r)?o:($(g(),A(r),r),null)}function An(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return k(r,a,e),en(a,n,t,o,a)?a:($(g(),A(o),o),null)}function xn(n,t,r,e,o){if(r==null)return null;const a=new Float32Array(r.length);return q(r,a,e),an(a,n,t,o,a)?a:($(g(),A(o),o),null)}function H(n,t,r,e){const o=y(t,r,e);o!==1&&B(n,n,[o,o,o])}function y(n,t,r){const e=!!(r&p.SOURCE),o=!!(r&p.TARGET),a=t?.sourceUnit,i=t?.targetUnit;if(!a&&!i)return 1;let l=U(a,n);!e&&a&&l!==1&&(g().warn("source unit conversion not supported"),l=1);let s=1/U(i,n);return!o&&i&&s!==1&&(g().warn("target unit conversion not supported"),s=1),l*s}function Rn(n,t,r,e){const o=ln(n,t,e);if(!o)return $(g(),t,A(t)),null;const a=new Float64Array(o.length);return S(a,o,r),a}function Fn(n,t,r,e,o,a){if(n==null)return null;const i=a??new Float32Array(n.length);return sn(n,t,r,e,i)?(z(i,i,o),i):($(g(),e,A(e)),null)}function vn(n,t,r,e,o,a){if(n==null)return null;const i=a??new Float32Array(n.length);return cn(n,t,r,e,i)?(z(i,i,o,4),i):($(g(),e,A(e)),null)}function U(n,t){if(n==null)return 1;const r=Q(t);return 1/W(r,"meters",n)}const f=E(),R=E(),wn=nn(),J=M(),d=E();var p;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET"})(p||(p={}));export{On as M,Nn as N,U as X,G as c};
