const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-Ytq1YqoI.js","./main-Bd3SZcXj.js","./preload-helper-ExcqyqRp.js","./main-Bh92dUh-.css","./projection-BXObFWL-.js","./mat3f64-q3fE-ZOt.js","./mat4f64-CSKppSlJ.js","./spatialReferenceEllipsoidUtils-DVw2kBWl.js","./computeTranslationToOriginAndRotation-B9pP-nJi.js","./DoubleArray-B5mfaNu4.js","./BufferView-CiC3OiDZ.js","./vec3-RHuB5nfT.js","./vec4-Ct7kC64X.js"])))=>i.map(i=>d[i]);
import{_ as S}from"./preload-helper-ExcqyqRp.js";import{f4 as K,by as C,ce as Q}from"./main-Bd3SZcXj.js";import{y as W}from"./DoubleArray-B5mfaNu4.js";import{i as X,a as Z}from"./MeshLocalVertexSpace-DYqxzQK0.js";import{f as ee,l as te}from"./vec3-RHuB5nfT.js";import"./sphere-DaDgt6au.js";import"./I3SUtil-HCJ8WFoN.js";import"./plane-Bf2c5DrH.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-Bdb9ZJJK.js";import"./spatialReferenceEllipsoidUtils-DVw2kBWl.js";import"./I3SBinaryReader-BG6sBaYz.js";import"./VertexAttribute-BlT9lbVY.js";import"./floatRGBA-CLGUGdd6.js";import"./NormalAttribute.glsl-CyOBldlO.js";import"./interfaces-B8ge7Jg9.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-BkmV2ZP4.js";import"./quat-aj5-jZFo.js";import"./computeTranslationToOriginAndRotation-B9pP-nJi.js";var N,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(N||(N={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function oe(){return F||(F=new Promise(e=>S(()=>import("./i3s-Ytq1YqoI.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:re,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),F}function re(e){return K(`esri/libs/i3s/${e}`)}let F;var $,h,B,k,H;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})($||($={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(h||(h={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(B||(B={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(k||(k={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(H||(H={}));async function Se(e){n=await b();const t=[e.geometryBuffer];return{result:V(n,e,t),transferList:t}}async function Ne(e){n=await b();const t=[e.geometryBuffer],{geometryBuffer:o}=e,f=o.byteLength,i=n._malloc(f),u=new Uint8Array(n.HEAPU8.buffer,i,f);u.set(new Uint8Array(o));const c=n.dracoDecompressPointCloudData(i,u.byteLength);if(n._free(i),c.error.length>0)throw new Error(`i3s.wasm: ${c.error}`);const l=c.featureIds?.length>0?c.featureIds.slice():null,s=c.positions.slice();return l&&t.push(l.buffer),t.push(s.buffer),{result:{positions:s,featureIds:l},transferList:t}}async function Ue(e){await b(),ie(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Me(e){await b(),ne(e)}async function ve(e){n=await b(),n.setLegacySchema(e.context,e.jsonSchema)}async function Fe(e){const{localMatrix:t,origin:o,positions:f,vertexSpace:i,localMode:u}=e,c=C.fromJSON(e.inSpatialReference),l=C.fromJSON(e.outSpatialReference);let s;const[{projectBuffer:E},{initializeProjection:U}]=await Promise.all([S(()=>import("./main-Bd3SZcXj.js").then(a=>a.rv),__vite__mapDeps([1,2,3]),import.meta.url),S(()=>import("./main-Bd3SZcXj.js").then(a=>a.rw),__vite__mapDeps([1,2,3]),import.meta.url)]);await U(c,l);const g=[0,0,0];if(!E(o,c,0,g,l,0,1))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(s=new Float64Array(f.length),!E(f,c,0,s,l,0,s.length/3))throw new Error("Failed to project")}else{const a=i.type==="georeferenced"?X.fromJSON(i):Z.fromJSON(i),{project:m}=await S(async()=>{const{project:L}=await import("./projection-BXObFWL-.js");return{project:L}},__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12]),import.meta.url),d=m({positions:f,transform:t?{localMatrix:t}:void 0,vertexSpace:a,inSpatialReference:c,outSpatialReference:l,localMode:u});if(!d)throw new Error("Failed to project");s=W(d)}const w=s.length,[I,_,A]=g;for(let a=0;a<w;a+=3)s[a]-=I,s[a+1]-=_,s[a+2]-=A;return{result:{projected:s,original:f,projectedOrigin:g},transferList:[s.buffer,f.buffer]}}async function Oe({normalMatrix:e,normals:t}){const o=new Float32Array(t.length);return ee(o,t,e),Q(e)&&te(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function Te(e){Y(e)}let P,n;function ne(e){if(!n)return;const t=e.modifications,o=n._malloc(8*t.length),f=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function V(e,t,o){const{context:f,globalTrafo:i,mbs:u,obbData:c,elevationOffset:l,geometryBuffer:s,geometryDescriptor:E,indexToVertexProjector:U,vertexToRenderProjector:g}=t,w=e._malloc(s.byteLength),I=33,_=e._malloc(I*Float64Array.BYTES_PER_ELEMENT),A=new Uint8Array(e.HEAPU8.buffer,w,s.byteLength);A.set(new Uint8Array(s));const a=new Float64Array(e.HEAPU8.buffer,_,I);R(a,[NaN,NaN,NaN]);let m=a.byteOffset+3*a.BYTES_PER_ELEMENT,d=new Float64Array(a.buffer,m);R(d,i),m+=16*a.BYTES_PER_ELEMENT,d=new Float64Array(a.buffer,m),R(d,u),m+=4*a.BYTES_PER_ELEMENT,c&&(d=new Float64Array(a.buffer,m),R(d,c));const L=E,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(p=>p.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(p=>p.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(p=>p.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(p=>p.some(y=>y.name==="uvRegion")),featureIndex:L.featureIndex},r=e.process(f,!!t.obbData,w,A.byteLength,L,J,_,l,U,g,t.normalReferenceFrame);if(e._free(_),e._free(w),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const M=r.componentOffsets.length>0?r.componentOffsets.slice():null,v=r.featureIds.length>0?r.featureIds.slice():null,z=r.anchorIds.length>0?Array.from(r.anchorIds):null,G=r.anchors.length>0?Array.from(r.anchors):null,O=r.interleavedVertedData.slice().buffer,T=r.indicesType===N.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),x=r.positions.slice(),D=r.positionIndicesType===N.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:O,indices:T,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:x,indices:D}};return v&&o.push(v.buffer),M&&o.push(M.buffer),o.push(O),o.push(T.buffer),o.push(x.buffer),o.push(D.buffer),{componentOffsets:M,featureIds:v,anchorIds:z,anchors:G,transformedGeometry:q,obb:r.obb,globalTrafo:i}}function xe(e){return e===0?h.Unmodified:e===1?h.PotentiallyModified:e===2?h.Culled:h.Unknown}function ie(e){if(!n)return;const{context:t,buffer:o}=e,f=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(n.HEAPU8.buffer,f,i),c=new Float64Array(o);u.set(c),n.filterOBBs(t,f,i),c.set(u),n._free(f)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function R(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function De(){n||await b()}function b(){return n?Promise.resolve(n):(P||(P=oe().then(e=>(n=e,P=null,n))),P)}const Ce={transform:(e,t)=>n&&V(n,e,t),destroy:Y};export{Te as destroyContext,Ne as dracoDecompressPointCloudData,Ue as filterObbsForModifications,ie as filterObbsForModificationsSync,De as initialize,xe as interpretObbModificationResults,Se as process,Fe as project,ve as setLegacySchema,Me as setModifications,ne as setModificationsSync,Ce as test,Oe as transformNormals};
