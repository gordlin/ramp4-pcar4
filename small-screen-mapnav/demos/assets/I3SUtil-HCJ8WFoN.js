import{by as d,jc as N,aD as l,U as h,kA as C,kB as g}from"./main-Bd3SZcXj.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-DVw2kBWl.js";import"./sphere-DaDgt6au.js";import{I as D}from"./I3SBinaryReader-BG6sBaYz.js";import"./floatRGBA-CLGUGdd6.js";import"./NormalAttribute.glsl-CyOBldlO.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./VertexAttribute-BlT9lbVY.js";import{I as P}from"./orientedBoundingBox-BkmV2ZP4.js";function x(n,i,t,s){return{x:n,y:i,z:t,hasZ:t!=null,hasM:!1,spatialReference:s,type:"point"}}x(0,0,0,d.WGS84);var a;(function(n){n[n.INVISIBLE=0]="INVISIBLE",n[n.TRANSPARENT=1]="TRANSPARENT",n[n.OPAQUE=2]="OPAQUE"})(a||(a={}));var T;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(T||(T={}));var E,I;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(E||(E={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(I||(I={}));function A(n){return{...L,...n,type:E.Solid}}const L={color:N(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.OPAQUE,hasSlicePlane:!1};N(0,0,0,.2),a.OPAQUE;l();var p;async function q(n,i,t,s,m,U,y,R){const c=[];for(const r of i)if(r&&m.includes(r.name)){const e=`${n}/nodes/${t}/attributes/${r.key}/0`;c.push({url:e,storageInfo:r})}const u=await Promise.allSettled(c.map(r=>h(r.url,{responseType:"array-buffer",query:{...y,token:U},signal:R?.signal}).then(e=>D(r.storageInfo,e.data)))),f=[];for(const r of s){const e={};for(let o=0;o<u.length;o++){const S=u[o];if(S.status==="fulfilled"){const O=S.value;e[c[o].storageInfo.name]=k(O,r)}}f.push(e)}return f}(function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"})(p||(p={}));const _=-32768,$=-(2**31);function k(n,i){if(!n)return null;const t=n[i];return C(n)?t===_?null:t:g(n)?t===$?null:t:t!=t?null:t}A({color:[0,0,0,0],opacity:0});l();l();new P;new Array(72);export{q as $};