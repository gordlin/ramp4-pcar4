const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lyr3DWorker-Dlfc3Rg8.js","./main-h69rSE3m.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { h$ as n$2 } from './main-h69rSE3m.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var e$2,t,n$1,i$2,a,o$1,r$1,N,p,s,c,l,S,g,u;!function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet";}(e$2||(e$2={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet";}(t||(t={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet";}(n$1||(n$1={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet";}(i$2||(i$2={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend";}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet";}(o$1||(o$1={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet";}(r$1||(r$1={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet";}(N||(N={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet";}(p||(p={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet";}(s||(s={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet";}(c||(c={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet";}(l||(l={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet";}(S||(S={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit";}(g||(g={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs";}(u||(u={}));

function e$1(){return new Promise((t=>__vitePreload(() => import('./lyr3DWorker-Dlfc3Rg8.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i$1,onRuntimeInitialized:()=>t(e)});})))).catch((t=>{throw t}))}function i$1(n){return n$2(`esri/libs/lyr3d/${n}`)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e,n;async function r(t){if(await o(),t.inputs.length<1)return {result:{status:u.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const e={ptrs:[],sizes:[]};for(const s of t.inputs){const t=n._malloc(s.byteLength);new Uint8Array(n.HEAPU8.buffer,t,s.byteLength).set(new Uint8Array(s)),e.ptrs.push(t),e.sizes.push(s.byteLength);}const r=n.process(t.jobDescJson,e,t.isMissingResourceCase),i=r.status===u.Succeeded&&r.data,a=r.status===u.MissingInputs&&r.missingInputUrls.length>0;if(i){const s=r.data.slice();r.data=s;}else a&&(r.jobDescJson=r.jobDescJson.slice(0),r.originalInputs=t.inputs);for(let s=0;s<e.ptrs.length;++s)n._free(e.ptrs[s]);const u$1=[];if(i)u$1.push(r.data.buffer);else if(a)for(const s of t.inputs)u$1.push(s);return {result:r,transferList:u$1}}function i(){n&&(n.uninitialize_lyr3d_worker_wasm(),n=null);}function o(){return n?Promise.resolve():(e||(e=e$1().then((s=>{n=s,n.initialize_lyr3d_worker_wasm(),e=null;}))),e)}

export { i as destroyWasm, o as initialize, r as process };
