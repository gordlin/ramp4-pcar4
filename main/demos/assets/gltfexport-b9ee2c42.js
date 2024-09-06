import { s as s$2, lw as tt, a1 as ot, fv as o$2, cv as e$3, cj as _, cl as z, cm as n$1, hy as G, hH as l$1, ct as t$1, l_ as _$1, eX as z$1, j7 as f$3, hw as h, c5 as r$2, J as s$3, ib as R$1, G as x$1, l$ as ct } from './main-069f4a5d.js';
import { o as o$4, e as e$4 } from './mat4f64-b32e2490.js';
import { N as N$1, T } from './quat-0db165b6.js';
import { o as o$3, r as r$1, e as e$5 } from './quatf64-137a8dbb.js';
import { i as i$4 } from './MeshLocalVertexSpace-8f582728.js';
import { a as m } from './Mesh-48ecfa9a.js';
import { O, C as C$1 } from './georeference-940a4137.js';
import { C, D as D$1 } from './enums-af0bf3a9.js';
import { r as r$3 } from './resourceUtils-831d3da7.js';
import './preload-helper-a4975f27.js';
import './mat3f64-3fe11525.js';
import './imageUtils-c7c8662b.js';
import './meshVertexSpaceUtils-99d7a89f.js';
import './vec3-eb36e0b2.js';
import './earcut-bfea4cb9.js';
import './DoubleArray-90c9c174.js';
import './Indices-1ba069f5.js';
import './deduplicate-8b86cd00.js';
import './plane-55c615a6.js';
import './triangle-90cc9222.js';
import './Util-8488ffa4.js';
import './ObjectStack-bd196f71.js';
import './lineSegment-c89188a5.js';
import './basicInterfaces-f85cdac5.js';
import './VertexAttribute-66b2103c.js';
import './External-d8459a34.js';
import './computeTranslationToOriginAndRotation-af47534b.js';
import './BufferView-87539b8d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a$2(e){const t=o$1(e);return null!=t?t.toDataURL():""}async function r(t){const n=o$1(t);if(null==n)throw new s$2("imageToArrayBuffer","Unsupported image type");const a=await i$3(t),r=await new Promise((e=>n.toBlob(e,a)));if(!r)throw new s$2("imageToArrayBuffer","Failed to encode image");return {data:await r.arrayBuffer(),type:a}}async function i$3(e){if(!(e instanceof HTMLImageElement))return "image/png";const a=e.src;if(tt(a)){const e=ot(a);return "image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return /\.png$/i.test(a)?"image/png":/\.(jpg|jpeg)$/i.test(a)?"image/jpeg":"image/png"}function o$1(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function c$1(e){const t=[],n=new Uint8Array(e);for(let a=0;a<n.length;a++)t.push(String.fromCharCode(n[a]));return "data:application/octet-stream;base64,"+btoa(t.join(""))}function g(e){if(e.byteLength<8)return !1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN";}(t||(t={}));let e$2 = class e{constructor(i,r){if(!i)throw new Error("GLB requires a JSON gltf chunk");this._length=e.HEADER_SIZE,this._length+=e.CHUNK_HEADER_SIZE;const n=this._textToArrayBuffer(i);if(this._length+=this._alignTo(n.byteLength,4),r&&(this._length+=e.CHUNK_HEADER_SIZE,this._length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const h=this._writeChunk(n,12,t.JSON,32);r&&this._writeChunk(r,h,t.BIN);}_writeHeader(){this._outView.setUint32(0,e.MAGIC,!0),this._outView.setUint32(4,e.VERSION,!0),this._outView.setUint32(8,this._length,!0);}_writeChunk(t,e,i,r=0){const n=this._alignTo(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,i,!0),this._writeArrayBuffer(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,i,r,n){new Uint8Array(t,i,n).set(new Uint8Array(e,r,n),0);}_textToArrayBuffer(t){return (new TextEncoder).encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}};e$2.HEADER_SIZE=12,e$2.CHUNK_HEADER_SIZE=8,e$2.MAGIC=1179937895,e$2.VERSION=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var E,A,R,L$1,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB";}(E||(E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB";}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";}(R||(R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4";}(L$1||(L$1={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN";}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND";}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor";}(N||(N={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$2 = class i{constructor(t,s,i,r,n){this._buffer=t,this._componentType=i,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),s.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType();}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this._accessorMax[s];this._accessorMax[s]="number"!=typeof r?e:Math.max(r,e);}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case C.BYTE:return new Int8Array(e,t);case C.FLOAT:return new Float32Array(e,t);case C.SHORT:return new Int16Array(e,t);case C.UNSIGNED_BYTE:return new Uint8Array(e,t);case C.UNSIGNED_INT:return new Uint32Array(e,t);case C.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data);}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this._data.push(t[s]);delete this._asyncWritePromise;})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t);}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,i=(this._data.length-this._accessorIndex)/t;if(i%1)throw new Error("An accessor was ended with missing component values");for(let s=0;s<this._accessorMin.length;++s)"number"!=typeof this._accessorMin[s]&&(this._accessorMin[s]=0),"number"!=typeof this._accessorMax[s]&&(this._accessorMax[s]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:i,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case C.UNSIGNED_BYTE:case C.UNSIGNED_SHORT:r.normalized=!0;}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve();}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case C.BYTE:case C.UNSIGNED_BYTE:return 1;case C.SHORT:case C.UNSIGNED_SHORT:return 2;case C.UNSIGNED_INT:case C.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case L$1.SCALAR:return 1;case L$1.VEC2:return 2;case L$1.VEC3:return 3;case L$1.VEC4:case L$1.MAT2:return 4;case L$1.MAT3:return 9;case L$1.MAT4:return 16}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let i$1 = class i{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this._buffer=i;}addBufferView(i,t,r){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new i$2(this,this._gltf,i,t,r);return this._bufferViews.push(f),f}getByteOffset(e){let i=0;for(const t of this._bufferViews){if(t===e)return i;i+=t.byteSize;}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const t of this._bufferViews){if(e&&t===e)return i;i.push(t.finalized);}return i}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let t=0;for(const r of this._bufferViews)r.writeOutToBuffer(i,t),t+=r.byteSize;return i}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e;})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const i of this._bufferViews)e+=i.byteSize;return e}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function c(o,n){if(o.components)for(const s of o.components)s.faces&&"smooth"===s.shading&&e$1(s,n);}function e$1(r,c){null==c.normal&&(c.normal=new Float32Array(c.position.length));const e=r.faces,{position:m,normal:p}=c,h=e.length/3;for(let t=0;t<h;++t){const r=3*e[3*t],c=3*e[3*t+1],l=3*e[3*t+2],h=o$2(a$1,m[r],m[r+1],m[r+2]),g=o$2(f$2,m[c],m[c+1],m[c+2]),u=o$2(i,m[l],m[l+1],m[l+2]),b=e$3(g,g,h),j=e$3(u,u,h),v=_(b,b,j);p[r]+=v[0],p[r+1]+=v[1],p[r+2]+=v[2],p[c]+=v[0],p[c+1]+=v[1],p[c+2]+=v[2],p[l]+=v[0],p[l+1]+=v[1],p[l+2]+=v[2];}for(let n=0;n<p.length;n+=3)o$2(l,p[n],p[n+1],p[n+2]),z(l,l),p[n]=l[0],p[n+1]=l[1],p[n+2]=l[2];}const a$1=n$1(),f$2=n$1(),i=n$1(),l=n$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const L=()=>s$3.getLogger("gltf");class S{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e);}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===E.GLB||t.options.imageOutputType===A.GLB;s&&(t.binChunkBuffer=new i$1(this.gltf)),e.forEachScene((e=>{this._addScene(e);})),s&&t.binChunkBuffer.finalize();}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e));})),this.gltf.scenes.push(t);}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;G(s,l$1)||(t.translation=t$1(s));const r=e.rotation;N$1(r,o$3)||(t.rotation=r$1(r));const i=e.scale;G(i,_$1)||(t.scale=t$1(i));const a=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),r=[a];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),r.push(this.gltf.nodes.length),this.gltf.nodes.push(t);}return r}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e));})),[a]}_addMesh(e,t){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s;}_createMeshes(t){const s=this.gltf.extras,r=s.options.bufferOutputType===E.GLB;let n;n=r?s.binChunkBuffer:new i$1(this.gltf),this.params.origin||(this.params.origin=t.anchor);const{ignoreLocalTransform:l}=this.params,c$1=l?null:t.transform,{vertexSpace:h,spatialReference:f}=t,u=h.origin,p=t.vertexAttributes;let g=null;if("local"===h.type){const e=z$1(f);f$3(v,c$1?.localMatrix??o$4,[e,e,e]),g=O(p,v);}else {const e=l?new i$4({origin:u?t$1(u):null}):h;g=C$1(p,e,c$1,this.params.origin,{geographic:this.params.geographic,unit:"meters"});}if(null==g)throw new s$2("Error during gltf export.");p.position&&g.position===p.position&&(g.position=p.position.slice()),p.normal&&g.normal===p.normal&&(g.normal=p.normal.slice()),p.tangent&&g.tangent===p.tangent&&(g.tangent=p.tangent.slice()),c(t,g),this._flipYZAxis(g);const b=n.addBufferView(C.FLOAT,L$1.VEC3,R.ARRAY_BUFFER);let O$1,w,I,N;g.normal&&(O$1=n.addBufferView(C.FLOAT,L$1.VEC3,R.ARRAY_BUFFER)),p.uv&&(w=n.addBufferView(C.FLOAT,L$1.VEC2,R.ARRAY_BUFFER)),g.tangent&&(I=n.addBufferView(C.FLOAT,L$1.VEC4,R.ARRAY_BUFFER)),p.color&&(N=n.addBufferView(C.UNSIGNED_BYTE,L$1.VEC4,R.ARRAY_BUFFER)),b.startAccessor("POSITION"),O$1&&O$1.startAccessor("NORMAL"),w&&w.startAccessor("TEXCOORD_0"),I&&I.startAccessor("TANGENT"),N&&N.startAccessor("COLOR_0");const C$2=g.position.length/3,{position:L,normal:S,tangent:y}=g,{color:F,uv:j}=p;for(let e=0;e<C$2;++e)b.push(L[3*e]),b.push(L[3*e+1]),b.push(L[3*e+2]),O$1&&null!=S&&(O$1.push(S[3*e]),O$1.push(S[3*e+1]),O$1.push(S[3*e+2])),w&&null!=j&&(w.push(j[2*e]),w.push(j[2*e+1])),I&&null!=y&&(I.push(y[4*e]),I.push(y[4*e+1]),I.push(y[4*e+2]),I.push(y[4*e+3])),N&&null!=F&&(N.push(F[4*e]),N.push(F[4*e+1]),N.push(F[4*e+2]),N.push(F[4*e+3]));const V=b.endAccessor(),D=this._addAccessor(b.index,V);let k,G,Y,U,P;if(O$1){const e=O$1.endAccessor();k=this._addAccessor(O$1.index,e);}if(w){const e=w.endAccessor();G=this._addAccessor(w.index,e);}if(I){const e=I.endAccessor();Y=this._addAccessor(I.index,e);}if(N){const e=N.endAccessor();U=this._addAccessor(N.index,e);}const z=[];return t.components&&t.components.length>0&&t.components[0].faces?(P=n.addBufferView(C.UNSIGNED_INT,L$1.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(P,t.components,z,D,k,G,Y,U)):this._addMeshVertexNonIndexed(t.components,z,D,k,G,Y,U),b.finalize(),O$1&&O$1.finalize(),w&&w.finalize(),I&&I.finalize(),P&&P.finalize(),N&&N.finalize(),r||n.finalize(),z}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4);}_flipYZBuffer(e,t){if(null!=e)for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t;}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=I.MASK;break;case"auto":case"blend":s.alphaMode=I.BLEND;}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof m){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]];}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness;}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,L().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:h(t.rotation)},s):s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,r$2(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else {const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r$1=this.gltf.extras;switch(r$1.options.imageOutputType){case A.GLB:{const e=r$1.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE,L$1.SCALAR);if(r$3(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else {const r$1=r(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(r$1).then((()=>{e.finalize();}));}s.bufferView=e.index;break}case A.DataURI:if(r$3(t)){L().warnOnce("Image export for basis compressed textures not available.");break}s.uri=a$2(t);break;default:if(r$3(t)){L().warnOnce("Image export for basis compressed textures not available.");break}r$1.promises.push(r(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t;})));}}const r$1=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r$1),r$1}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=D$1.REPEAT,s=D$1.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=D$1.CLAMP_TO_EDGE,s=D$1.CLAMP_TO_EDGE;break;case"mirror":t=D$1.MIRRORED_REPEAT,s=D$1.MIRRORED_REPEAT;}else {switch(e.wrap.vertical){case"clamp":s=D$1.CLAMP_TO_EDGE;break;case"mirror":s=D$1.MIRRORED_REPEAT;}switch(e.wrap.horizontal){case"clamp":t=D$1.CLAMP_TO_EDGE;break;case"mirror":t=D$1.MIRRORED_REPEAT;}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,a,o,n){const l=new Map;for(const c of t){e.startAccessor("INDICES");for(let s=0;s<c.faces.length;++s)e.push(c.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(c.material)};i&&"flat"!==c.shading&&(h.attributes.NORMAL=i),a&&(h.attributes.TEXCOORD_0=a),o&&"flat"!==c.shading&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n);const f=l.get(c.name);if(f)f.primitives.push(h);else {const e={name:c.name,primitives:[h]};l.set(c.name,e),s.push(e);}}}_addMeshVertexNonIndexed(e,t,s,r,i,a,o){const n={primitives:[]};t.push(n);const l={attributes:{POSITION:s}};r&&(l.attributes.NORMAL=r),i&&(l.attributes.TEXCOORD_0=i),a&&(l.attributes.TANGENT=a),o&&(l.attributes.COLOR_0=o),e&&(l.material=this._addMaterial(e[0].material)),n.primitives.push(l);}}const v=e$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$1 = class s{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[];}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e);}removeScene(s){R$1(this._scenes,s);}forEachScene(e){this._scenes.forEach(e);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this._nodes=[];}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d);}forEachNode(d){this._nodes.forEach(d);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(t){this.mesh=t,this.name="",this.translation=n$1(),this.rotation=e$5(),this.scale=t$1(_$1),this._nodes=[];}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t);}forEachNode(t){this._nodes.forEach(t);}set rotationAngles(s){T(this.rotation,s[0],s[1],s[2]);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const a="model.gltf",f$1="model.glb";async function u(u,p,m){const c=new S(u,p=p||{},m);let l=c.params;l?l.origin||(l.origin=new x$1({x:-1,y:-1,z:-1})):l={origin:new x$1({x:-1,y:-1,z:-1})};const g$1=l.origin,y=c.gltf,d=y.extras?.promises??[];let j=1,x=1,b=null;await Promise.allSettled(d);const w={origin:g$1};delete y.extras;const B="number"==typeof p.jsonSpacing?p.jsonSpacing:4,h=JSON.stringify(y,((e,t)=>{if("extras"!==e){if(t instanceof ArrayBuffer){if(g(t))switch(p.imageOutputType){case A.DataURI:case A.GLB:break;case A.External:default:{const e=`img${x}.png`;return x++,w[e]=t,e}}switch(p.bufferOutputType){case E.DataURI:return c$1(t);case E.GLB:if(b)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(b=t);case E.External:default:{const e=`data${j}.bin`;return j++,w[e]=t,e}}}return t}}),B);return p.bufferOutputType===E.GLB||p.imageOutputType===A.GLB?w[f$1]=new e$2(h,b).buffer:w[a]=h,w}function p(e,t){return u(e,{bufferOutputType:E.GLB,imageOutputType:A.GLB,jsonSpacing:0},t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s{constructor(e,o){this._file={type:"model/gltf-binary",data:e},this.origin=o;}buffer(){return Promise.resolve(this._file)}download(o){ct(new Blob([this._file.data],{type:this._file.type}),o);}}function f(e$1,f){const d$1=new s$1,l=new d;return d$1.addScene(l),l.addNode(new e(e$1)),p(d$1,f).then((e=>new s(e[f$1],e.origin)))}

export { f as toBinaryGLTF };
