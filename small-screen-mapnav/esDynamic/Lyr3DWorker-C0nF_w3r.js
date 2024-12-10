import{f3 as y}from"./main-D8a2_wp1.js";var p,N,f,g,m,d,S,b,U,I,L,h,M,R,a;(function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"})(p||(p={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(N||(N={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(f||(f={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(g||(g={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(m||(m={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(d||(d={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(S||(S={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(b||(b={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(U||(U={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(I||(I={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(L||(L={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(h||(h={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(M||(M={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(R||(R={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(a||(a={}));function D(){return new Promise(e=>import("./lyr3DWorker-nbGJHgrW.js").then(t=>t.l).then(({default:t})=>{const n=t({locateFile:P,onRuntimeInitialized:()=>e(n)})})).catch(e=>{throw e})}function P(e){return y(`esri/libs/lyr3d/${e}`)}let o,r;async function x(e){if(await T(),e.inputs.length<1)return{result:{status:a.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const i of e.inputs){const u=r._malloc(i.byteLength);new Uint8Array(r.HEAPU8.buffer,u,i.byteLength).set(new Uint8Array(i)),t.ptrs.push(u),t.sizes.push(i.byteLength)}const n=r.process(e.jobDescJson,t,e.isMissingResourceCase),l=n.status===a.Succeeded&&n.data,c=n.status===a.MissingInputs&&n.missingInputUrls.length>0;if(l){const i=n.data.slice();n.data=i}else c&&(n.jobDescJson=n.jobDescJson.slice(0),n.originalInputs=e.inputs);for(let i=0;i<t.ptrs.length;++i)r._free(t.ptrs[i]);const s=[];if(l)s.push(n.data.buffer);else if(c)for(const i of e.inputs)s.push(i);return{result:n,transferList:s}}function F(){r&&(r.uninitialize_lyr3d_worker_wasm(),r=null)}function T(){return r?Promise.resolve():(o||(o=D().then(e=>{r=e,r.initialize_lyr3d_worker_wasm(),o=null})),o)}export{F as destroyWasm,T as initialize,x as process};
