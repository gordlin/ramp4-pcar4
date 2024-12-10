import{c9 as N,ca as R,cb as _,cc as j,cd as h,ce as k,aH as w,cf as O,bp as v,cg as $,ch as B,a8 as W,ci as Y,cj as H,ck as I,aI as S,cl as q}from"./main-D8a2_wp1.js";import{e as z}from"./mat3f64-Dh9_zhFu.js";import{o as g,e as D}from"./mat4f64-Dn1WEGBx.js";import{a as E}from"./spatialReferenceEllipsoidUtils-BZBj3zL4.js";import{u as G}from"./computeTranslationToOriginAndRotation-B6nbBT4O.js";import{t as L,o as J}from"./DoubleArray-B_zc96OT.js";import{i as P,T as y}from"./BufferView-CmfjD4mm.js";import{f as K,l as V,e as x}from"./vec3-BwkOG3r8.js";import{n as Q}from"./vec4-C0aMNyTR.js";const U="Projection may be possible after calling projection.load().";function X(r,o,e,t){r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${e.wkid}).${t?" ":""}${t}`)}function Z(r,o,e,t,a){return M(m.TO_PCPF,P.fromTypedArray(r),l.NORMAL,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(a))?a:null}function rr(r,o,e,t,a){return M(m.FROM_PCPF,P.fromTypedArray(r),l.NORMAL,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(a))?a:null}function or(r,o,e){return N(r,o,0,e,E(o),0,r.length/3)?e:null}function er(r,o,e){return N(r,E(e),0,o,e,0,r.length/3)?o:null}function tr(r,o,e){return R(c,e),K(o,r,c),_(c)&&V(o,o),o}function ar(r,o,e){return j(c,e),Q(o,r,c),_(c)&&V(o,o,4),o}function nr(r,o,e,t,a){if(!M(m.TO_PCPF,P.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),l.TANGENT,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let i=3;i<r.length;i+=4)a[i]=r[i];return a}function cr(r,o,e,t,a){if(!M(m.FROM_PCPF,P.fromTypedArray(r,16),l.TANGENT,y.fromTypedArray(o),y.fromTypedArray(e),t,P.fromTypedArray(a,16)))return null;for(let i=3;i<r.length;i+=4)a[i]=r[i];return a}var l,m;function b(r,o,e,t,a){switch(G(t,e,T,t),r===m.FROM_PCPF&&q(T,T),o){case l.NORMAL:return R(a,T);case l.TANGENT:return j(a,T)}}function M(r,o,e,t,a,i,u){if(!o)return;const f=t.count,A=E(i);if(lr(i))for(let s=0;s<f;s++)a.getVec(s,C),o.getVec(s,p),h(p,p,b(r,e,C,A,c)),u.setVec(s,p);else for(let s=0;s<f;s++){a.getVec(s,C),o.getVec(s,p);const F=k(t.get(s,1));let n=Math.cos(F);e===l.TANGENT!=(r===m.TO_PCPF)&&(n=1/n),b(r,e,C,A,c),r===m.TO_PCPF?(c[0]*=n,c[1]*=n,c[2]*=n,c[3]*=n,c[4]*=n,c[5]*=n):(c[0]*=n,c[3]*=n,c[6]*=n,c[1]*=n,c[4]*=n,c[7]*=n),h(p,p,c),w(p,p),u.setVec(s,p)}return u}function sr(r){return r.vertexSpace.type==="local"?ir(r):fr(r)}function ir({vertexSpace:r,transform:o,inSpatialReference:e,outSpatialReference:t,localMode:a,outPositions:i,positions:u}){const f=r.origin??O,A=r.origin!=null?o?.localMatrix??g:g,s=E(e),F=t.isWebMercator&&a||!v(e,s)?e:s;G(e,f,T,F),$(T,T,A);const n=i??L(u.length);return x(n,u,T),N(n,F,0,n,t,0,n.length/3),n}function fr({vertexSpace:r,transform:o,outPositions:e,positions:t,inSpatialReference:a,outSpatialReference:i}){const u=r.origin!=null?o?.localMatrix??g:g,f=e??L(t.length);B(u,g)?J(f,t):x(f,t,u);const A=r.origin??O;if(!W(A,O)){const[s,F,n]=A;for(let d=0;d<f.length;d+=3)f[d]+=s,f[d+1]+=F,f[d+2]+=n}return N(f,a,0,f,i,0,f.length/3)?f:null}function lr(r){return r.isWGS84||Y(r)||H(r)||I(r)}(function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"})(l||(l={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(m||(m={}));const C=S(),p=S(),T=D(),c=z();export{l as VectorType,U as loadProjectErrorMessage,X as logProjectionError,sr as project,er as projectFromPCPF,rr as projectNormalFromPCPF,Z as projectNormalToPCPF,cr as projectTangentFromPCPF,nr as projectTangentToPCPF,or as projectToPCPF,tr as transformNormal,ar as transformTangent};
