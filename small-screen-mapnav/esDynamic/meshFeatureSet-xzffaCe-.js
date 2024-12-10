import{U as S,bv as d,_ as N,b8 as D,a6 as M,c3 as w,c4 as m,D as F}from"./main-D8a2_wp1.js";import{$ as E}from"./Mesh-bBZYEXxL.js";import{N as T,o as I,i as b}from"./MeshTransform-CIzGerO_.js";const L=()=>F.getLogger("esri.rest.support.meshFeatureSet");function O(e,t,s){const n=s.features;s.features=[],delete s.geometryType;const r=S.fromJSON(s);if(r.geometryType="mesh",!s.assetMaps)return r;const a=h(t,s.assetMaps),i=e.sourceSpatialReference??d.WGS84,l=s.globalIdFieldName,{outFields:o}=e,f=o!=null&&o.length>0?x(o.includes("*")?null:new Set(o)):()=>({});for(const u of n){const c=g(u,l,i,t,a);r.features.push(new N({geometry:c,attributes:f(u)}))}return r}function x(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const s in t)e.has(s)||delete t[s];return t}}function g(e,t,s,n,r){const a=e.attributes[t],i=r.get(a);if(i==null||!e.geometry)return null;const l=A(e,s,n),o=D.fromJSON(e.geometry);o.spatialReference=s;const f=P(e.attributes,n),u=s.isGeographic?"local":"georeferenced",c=R(i);return c?E.createWithExternalSource(l,c,{extent:o,transform:f,vertexSpace:u}):E.createIncomplete(l,{extent:o,transform:f,vertexSpace:u})}function A({attributes:e},t,{transformFieldRoles:s}){const n=e[s.originX],r=e[s.originY],a=e[s.originZ];return new M({x:n,y:r,z:a,spatialReference:t})}function P(e,{transformFieldRoles:t}){return new T({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var p;function h(e,t){const s=new Map;for(const n of t){const r=n.parentGlobalId;if(r==null)continue;const a=n.assetName,i=n.assetType,l=n.assetHash,o=n.assetURL,f=n.conversionStatus,u=n.seqNo,c=w(i,e.supportedFormats);if(!c){L().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const y=m(s,r,()=>({files:new Map}));m(y.files,a,()=>({name:a,type:i,mimeType:c,status:v(f),parts:[]})).parts[u]={hash:l,url:o}}return s}function R(e){const t=Array.from(e.files.values()),s=new Array;for(const n of t){if(n.status!==p.COMPLETED)return null;const r=new Array;for(const a of n.parts){if(!a)return null;r.push(new I(a.url,a.hash))}s.push(new b(n.name,n.mimeType,r))}return s}function v(e){switch(e){case"COMPLETED":case"SUBMITTED":return p.COMPLETED;case"INPROGRESS":return p.PENDING;default:return p.FAILED}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(p||(p={}));export{h as assetMapFromAssetMapsJSON,g as extractMesh,O as meshFeatureSetFromJSON};
