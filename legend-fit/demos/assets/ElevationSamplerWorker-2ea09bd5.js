import { X as has } from './main-b051658a.js';
import { s } from './PooledRBush-bf4bb43f.js';
import { g } from './meshVertexSpaceUtils-7cd0d699.js';
import { P } from './georeference-02fa9dfc.js';
import './preload-helper-a4975f27.js';
import './MeshLocalVertexSpace-304488ee.js';
import './vec3-1dd34e10.js';
import './mat3f64-3fe11525.js';
import './mat4f64-b32e2490.js';
import './computeTranslationToOriginAndRotation-d7d9a91c.js';
import './DoubleArray-71be8b57.js';
import './quat-192d9c77.js';
import './quatf64-137a8dbb.js';
import './BufferView-b9134ebe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class n{async createIndex(t,r){const n=new Array;if(!t.vertexAttributes?.position)return new s;const o=this._createMeshData(t),s$1=null!=r?await r.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return this._createPooledRBush().fromJSON(s$1)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let s=0;s<t.length;s+=9)r[n++]=o(t,s,s+3,s+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const o of r)n+=o.length/3;const s=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)s[a++]=o(t,3*i[e],3*i[e+1],3*i[e+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const n=(g(e.vertexSpace)?P({position:e.vertexAttributes.position,normal:null,tangent:null},e.vertexSpace,e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:n}:{position:n,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new s(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function o(e,t,r,n){return {minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}

export { n as default };
