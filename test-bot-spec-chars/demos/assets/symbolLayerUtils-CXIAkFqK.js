const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./objectResourceUtils-Bkqk4Y3e.js","./devEnvironmentUtils-CAuYLvCt.js","./main-h69rSE3m.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./mat3f64-DiVtVT5k.js","./mat4f64-D1udxz0O.js","./BufferView-DOckU9Zg.js","./vec3-BPrL4God.js","./DefaultMaterial_COLOR_GAMMA-B7MydOpD.js","./enums-CgzwTbC2.js","./quat-COL_8n6s.js","./quatf64-BVXz_O4E.js","./resourceUtils-Dy0BKz2i.js","./basicInterfaces-WNnrzIVI.js","./Indices-D5OxfFuj.js","./NestedMap-DnQjTF8c.js","./requestImageUtils-ByjVZ9yv.js","./orientedBoundingBox-CjrPR-GK.js","./computeTranslationToOriginAndRotation-DfBszygQ.js","./plane-D79m6cvY.js","./triangle-DIoXyf1U.js","./Util-BD7FrGeQ.js","./ObjectStack-C9J9mgSv.js","./lineSegment-BoiNZNS4.js","./VertexAttribute-NSFkUlX8.js","./Texture-BJG8yYCh.js","./InterleavedLayout-DCMRSa2l.js","./types-iH5tHpma.js","./OrderIndependentTransparency-NzZWznOo.js","./sphere-CBxMBTcS.js","./BindType-KnpK3yZX.js","./symbolColorUtils-CnnLUsDO.js","./doublePrecisionUtils-D7kjth1C.js","./RenderState-Bf2oUuZv.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { dN as e, s, U as U$1, dO as F, bo as i$1, dP as c$1, cl as n$1 } from './main-h69rSE3m.js';

let c=a();function a(){return new e(50)}function u(){c=a();}async function l(e,o){if(e.resource?.href)return m(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(r){return U$1(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const s$1=c.get(o);if(void 0!==s$1)return s$1;const{fetch:n}=await __vitePreload(() => import('./objectResourceUtils-Bkqk4Y3e.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]):void 0,import.meta.url),a=await n(o,{disableTextures:!0}),u=F(a.referenceBoundingBox,n$1());return c.put(o,u),u}if(!e.resource?.primitive)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=i$1(c$1(e.resource.primitive));if(null!=o)for(let r=0;r<a.length;r++)a[r]*=o;return F(a,n$1())}

export { u as clearBoundingBoxCache, l as computeIconLayerResourceSize, f as computeObjectLayerResourceSize };
