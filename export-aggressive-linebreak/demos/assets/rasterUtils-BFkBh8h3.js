import { bm as a } from './main-hedDFcxy.js';
import { P, U, L, D as D$1, o, G } from './enums-CgzwTbC2.js';
import { e, m as m$1 } from './Texture-BxJm3T_A.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f(e$1,o,f="nearest",c=!1){const m=!(c&&"u8"===o.pixelType),l=m?U.FLOAT:U.UNSIGNED_BYTE,_=null==o.pixels||0===o.pixels.length?null:m?o.getAsRGBAFloat():o.getAsRGBA(),g=e$1.capabilities.textureFloat?.textureFloatLinear,p=new e;return p.width=o.width,p.height=o.height,p.internalFormat=m?P.RGBA32F:G.RGBA,p.samplingMode=!g||"bilinear"!==f&&"cubic"!==f?L.NEAREST:L.LINEAR,p.dataType=l,p.wrapMode=D$1.CLAMP_TO_EDGE,new m$1(e$1,p,_)}function c(e$1,r){const{spacing:o,offsets:f,coefficients:c,size:[m,l]}=r,_=o[0]>1,g=new e;g.width=_?4*m:m,g.height=l,g.internalFormat=P.RGBA32F,g.dataType=U.FLOAT,g.samplingMode=L.NEAREST,g.wrapMode=D$1.CLAMP_TO_EDGE;const p=new Float32Array(_?m*l*16:2*f.length);if(_&&null!=c)for(let t=0,n=0;t<c.length;t++)p[n++]=c[t],t%3==2&&(p[n++]=1);else for(let t=0;t<l;t++)for(let e=0;e<m;e++){const n=4*(t*m+e),r=2*(e*l+t);p[n]=f[r],p[n+1]=f[r+1],p[n+3]=-1===f[r]?0:1;}return new m$1(e$1,g,p)}function m(e$1,t){const n=new e;return n.internalFormat=G.RGBA,n.width=t.length/4,n.height=1,n.samplingMode=L.NEAREST,n.wrapMode=D$1.CLAMP_TO_EDGE,new m$1(e$1,n,t)}function l(t,n,r,a$1=1,i=!0){return {u_flipY:i,u_applyTransform:!!t,u_opacity:a$1,u_transformSpacing:t?t.spacing:a,u_transformGridSize:t?t.size:a,u_targetImageSize:n,u_srcImageSize:r}}function _(e,t){return {u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function g(e,t){return {u_scale:e,u_offset:t}}function p(e){return {u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function A(e){return {u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function T(e,t){const n=e.gl,r=t.glName,a=new Map;if(null==r)return a;const i=n.getProgramParameter(r,n.ACTIVE_UNIFORMS);let o;for(let s=0;s<i;s++)o=n.getActiveUniform(r,s),o&&a.set(o.name,{location:n.getUniformLocation(r,o.name),info:o});return a}function h(e,t,n){Object.keys(n).forEach((r=>{const a=t.get(r)||t.get(r+"[0]");a&&E(e,r,n[r],a);}));}function O(e,t,n,r){n.length===r.length&&(r.some((e=>null==e))||n.some((e=>null==e))||n.forEach(((n,a)=>{t.setUniform1i(n,a),e.bindTexture(r[a],a);})));}function E(e,t,n,r){if(null===r||null==n)return !1;const{info:a}=r;switch(a.type){case o.FLOAT:a.size>1?e.setUniform1fv(t,n):e.setUniform1f(t,n);break;case o.FLOAT_VEC2:e.setUniform2fv(t,n);break;case o.FLOAT_VEC3:e.setUniform3fv(t,n);break;case o.FLOAT_VEC4:e.setUniform4fv(t,n);break;case o.FLOAT_MAT3:e.setUniformMatrix3fv(t,n);break;case o.FLOAT_MAT4:e.setUniformMatrix4fv(t,n);break;case o.INT:a.size>1?e.setUniform1iv(t,n):e.setUniform1i(t,n);break;case o.BOOL:e.setUniform1i(t,n?1:0);break;case o.INT_VEC2:case o.BOOL_VEC2:e.setUniform2iv(t,n);break;case o.INT_VEC3:case o.BOOL_VEC3:e.setUniform3iv(t,n);break;case o.INT_VEC4:case o.BOOL_VEC4:e.setUniform4iv(t,n);break;default:return !1}return !0}

export { A, O, T, _, c, f, g, h, l, m, p };
