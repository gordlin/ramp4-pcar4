import { W as has, s as s$1, J as s$2 } from './main-069f4a5d.js';
import { C, c as c$1, P, B, G, M as M$1, U, L, D as D$1, V } from './enums-af0bf3a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o$1=()=>s$2.getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return "Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return "Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return "Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return "WebGL context has been lost";default:return "Unknown error"}}const n=!!has("enable-feature:webgl-debug");function a$1(){return n}function c(){return n}function u$2(r){if(a$1()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o$1().error(new s$1("webgl-error","WebGL error occurred",{message:a,stack:c}));}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var e$1;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer";}(e$1||(e$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s(s){switch(s){case C.BYTE:case C.UNSIGNED_BYTE:return 1;case C.SHORT:case C.UNSIGNED_SHORT:return 2;case C.FLOAT:case C.INT:case C.UNSIGNED_INT:return 4}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return "An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return "An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return "The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return "The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return "Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return "WebGL context is lost"}return "Unknown error"}function E$1(r,t,s$1,a,c=0){const i=r.gl;r.bindBuffer(s$1);for(const R of a){const s$1=t.get(R.name);if(void 0===s$1){console.warn(`There is no location for vertex attribute '${R.name}' defined.`);continue}const a=c*R.stride;if(R.count<=4)i.vertexAttribPointer(s$1,R.count,R.type,R.normalized,R.stride,R.offset+a),i.enableVertexAttribArray(s$1),R.divisor>0&&r.gl.vertexAttribDivisor(s$1,R.divisor);else if(9===R.count)for(let e=0;e<3;e++)i.vertexAttribPointer(s$1+e,3,R.type,R.normalized,R.stride,R.offset+12*e+a),i.enableVertexAttribArray(s$1+e),R.divisor>0&&r.gl.vertexAttribDivisor(s$1+e,R.divisor);else if(16===R.count)for(let e=0;e<4;e++)i.vertexAttribPointer(s$1+e,4,R.type,R.normalized,R.stride,R.offset+16*e+a),i.enableVertexAttribArray(s$1+e),R.divisor>0&&r.gl?.vertexAttribDivisor(s$1+e,R.divisor);else console.error("Unsupported vertex attribute element count: "+R.count);if(a$1()){const e=o(r),t=s(R.type),s$1=R.offset,c=Math.round(t/s$1)!==t/s$1?`. Offset not a multiple of stride. DataType requires ${t} bytes, but descriptor has an offset of ${s$1}`:"";e&&console.error(`Unable to bind vertex attribute "${R.name}" with baseInstanceOffset ${a}${c}:`,e,R);}}}function u$1(e){switch(e){case G.ALPHA:case G.LUMINANCE:case G.RED:case G.RED_INTEGER:case P.R8:case P.R8I:case P.R8UI:case P.R8_SNORM:case B.STENCIL_INDEX8:return 1;case G.LUMINANCE_ALPHA:case G.RG:case G.RG_INTEGER:case P.RGBA4:case P.R16F:case P.R16I:case P.R16UI:case P.RG8:case P.RG8I:case P.RG8UI:case P.RG8_SNORM:case P.RGB565:case P.RGB5_A1:case B.DEPTH_COMPONENT16:return 2;case G.DEPTH_COMPONENT:case G.RGB:case G.RGB_INTEGER:case P.RGB8:case P.RGB8I:case P.RGB8UI:case P.RGB8_SNORM:case P.SRGB8:case B.DEPTH_COMPONENT24:return 3;case G.DEPTH_STENCIL:case G.DEPTH24_STENCIL8:case G.RGBA:case G.RGBA_INTEGER:case P.RGBA8:case P.R32F:case P.R11F_G11F_B10F:case P.RG16F:case P.R32I:case P.R32UI:case P.RG16I:case P.RG16UI:case P.RGBA8I:case P.RGBA8UI:case P.RGBA8_SNORM:case P.SRGB8_ALPHA8:case P.RGB9_E5:case P.RGB10_A2UI:case P.RGB10_A2:case B.DEPTH_STENCIL:case B.DEPTH_COMPONENT32F:case B.DEPTH24_STENCIL8:return 4;case B.DEPTH32F_STENCIL8:return 5;case P.RGB16F:case P.RGB16I:case P.RGB16UI:return 6;case P.RG32F:case P.RG32I:case P.RG32UI:case P.RGBA16F:case P.RGBA16I:case P.RGBA16UI:return 8;case P.RGB32F:case P.RGB32I:case P.RGB32UI:return 12;case P.RGBA32F:case P.RGBA32I:case P.RGBA32UI:return 16;case c$1.COMPRESSED_RGB_S3TC_DXT1_EXT:case c$1.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case c$1.COMPRESSED_RGBA_S3TC_DXT3_EXT:case c$1.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case c$1.COMPRESSED_R11_EAC:case c$1.COMPRESSED_SIGNED_R11_EAC:case c$1.COMPRESSED_RGB8_ETC2:case c$1.COMPRESSED_SRGB8_ETC2:case c$1.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case c$1.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case c$1.COMPRESSED_RG11_EAC:case c$1.COMPRESSED_SIGNED_RG11_EAC:case c$1.COMPRESSED_RGBA8_ETC2_EAC:case c$1.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(p=0,e=p){this.width=p,this.height=e,this.target=M$1.TEXTURE_2D,this.pixelFormat=G.RGBA,this.dataType=U.UNSIGNED_BYTE,this.samplingMode=L.LINEAR,this.wrapMode=D$1.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1;}}function r(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(null==t.internalFormat?4:u$1(t.internalFormat)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class a extends e{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case P.R16F:case P.R16I:case P.R16UI:case P.R32F:case P.R32I:case P.R32UI:case P.R8_SNORM:case P.R8:case P.R8I:case P.R8UI:this.pixelFormat=G.RED;}}static validate(s,e){return new a(s,e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const _=4;let m$1=class h{constructor(e,r=null,s=null){if(this.type=e$1.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,s=r;else {const i=a.validate(e,r);if(!i)throw new s$1("Texture descriptor invalid");this._descriptor=i;}this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(s):this.setData(s);}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return r(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(V.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null);}release(){this.dispose();}resize(e,r){const s=this._descriptor;if(s.width!==e||s.height!==r){if(this._wasImmutablyAllocated)throw new s$1("Immutable textures can't be resized!");s.width=e,s.height=r,this._descriptor.target===M$1.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null);}}_setDataCubeMap(t=null){for(let e=M$1.TEXTURE_CUBE_MAP_POSITIVE_X;e<=M$1.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e);}setData(t){this._setData(t);}_setData(i,s){if(!this._descriptor.context?.gl)return;const o=this._descriptor.context.gl;u$2(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(V.Texture,this)),void 0===i&&(i=null);const a=this._descriptor,n=s??a.target,l=R(n);null===i&&(a.width=a.width||_,a.height=a.height||_,l&&(a.depth=a.depth??1));const p=this._descriptor.context.bindTexture(this,h.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),u(a),this._configurePixelStorage(),u$2(o);const d=this._deriveInternalFormat();if(I(i)){let t="width"in i?i.width:i.codedWidth,r="height"in i?i.height:i.codedHeight;const s=1;i instanceof HTMLVideoElement&&(t=i.videoWidth,r=i.videoHeight),a.width&&a.height,l&&a.depth,a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,d,a.hasMipmap,t,r,s),this._texImage(n,0,d,t,r,s,i),u$2(o),a.hasMipmap&&this.generateMipmap(),a.width||(a.width=t),a.height||(a.height=r),l&&!a.depth&&(a.depth=s);}else {const{width:r,height:s,depth:h}=a;if(null==r||null==s)throw new s$1("Width and height must be specified!");if(l&&null==h)throw new s$1("Depth must be specified!");if(a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,d,a.hasMipmap,r,s,h),A(i)){const e=i.levels,l=w(n,r,s,h),p=Math.min(l-1,e.length-1);o.texParameteri(a.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,p);const _=d;if(!M(_))throw new s$1("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,i,r,s)=>{const o=e[Math.min(t,e.length-1)];this._compressedTexImage(n,t,_,i,r,s,o);}),p);}else this._texImage(n,0,d,r,s,h,i),u$2(o),a.hasMipmap&&this.generateMipmap();}T(o,this._descriptor),g(o,this._descriptor),E(this._descriptor.context,this._descriptor),u$2(o),this._descriptor.context.bindTexture(p,h.TEXTURE_UNIT_FOR_UPDATES);}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,p=this._deriveInternalFormat(),{context:d,pixelFormat:_,dataType:c,target:m,isImmutable:u}=l;if(u&&!this._wasImmutablyAllocated)throw new s$1("Cannot update immutable texture before allocation!");const T=d.bindTexture(this,h.TEXTURE_UNIT_FOR_UPDATES,!0);(i<0||r<0||s>l.width||o>l.height||i+s>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:g}=d;n&&g.pixelStorei(g.UNPACK_SKIP_ROWS,n),I(a)?g.texSubImage2D(m,e,i,r,s,o,_,c,a):A(a)?g.compressedTexSubImage2D(m,e,i,r,s,o,p,a.levels[e]):g.texSubImage2D(m,e,i,r,s,o,_,c,a),n&&g.pixelStorei(g.UNPACK_SKIP_ROWS,0),d.bindTexture(T,h.TEXTURE_UNIT_FOR_UPDATES);}updateData3D(e,i,r,s,o,a,n,l){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor,d=this._deriveInternalFormat(),{context:_,pixelFormat:c,dataType:m,isImmutable:u,target:T}=p;if(u&&!this._wasImmutablyAllocated)throw new s$1("Cannot update immutable texture before allocation!");R(T)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=_.bindTexture(this,h.TEXTURE_UNIT_FOR_UPDATES);_.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||o>p.width||a>p.height||n>p.depth||i+o>p.width||r+a>p.height||s+n>p.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:E}=_;if(A(l))l=l.levels[e],E.compressedTexSubImage3D(T,e,i,r,s,o,a,n,d,l);else {const t=l;E.texSubImage3D(T,e,i,r,s,o,a,n,c,m,t);}_.bindTexture(g,h.TEXTURE_UNIT_FOR_UPDATES);}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new s$1("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,u(e);}e.samplingMode===L.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=L.LINEAR_MIPMAP_NEAREST):e.samplingMode===L.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=L.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,h.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,h.TEXTURE_UNIT_FOR_UPDATES);}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0);}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,u(this._descriptor),this._wrapModeDirty=!0);}applyChanges(){const t=this._descriptor,e=t.context.gl;this._samplingModeDirty&&(T(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(g(e,t),this._wrapModeDirty=!1);}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===G.DEPTH_STENCIL&&(this._descriptor.internalFormat=G.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case U.FLOAT:switch(this._descriptor.pixelFormat){case G.RGBA:return this._descriptor.internalFormat=P.RGBA32F;case G.RGB:return this._descriptor.internalFormat=P.RGB32F;default:throw new s$1("Unable to derive format")}case U.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case G.RGBA:return this._descriptor.internalFormat=P.RGBA8;case G.RGB:return this._descriptor.internalFormat=P.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===G.DEPTH_STENCIL?G.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0);}_texStorage(e,i,r,s,o,a){const{gl:n}=this._descriptor.context;if(!x(i))throw new s$1("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const h=r?w(e,s,o,a):1;if(R(e)){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");n.texStorage3D(e,h,i,s,o,a);}else n.texStorage2D(e,h,i,s,o);this._wasImmutablyAllocated=!0;}_texImage(e,i,r,s,o,a,n){const h=this._descriptor.context.gl,l=R(e),{isImmutable:p,pixelFormat:d,dataType:_}=this._descriptor;if(p){if(null!=n){const r=n;if(l){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");h.texSubImage3D(e,i,0,0,0,s,o,a,d,_,r);}else h.texSubImage2D(e,i,0,0,s,o,d,_,r);}}else {const p=n;if(l){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");h.texImage3D(e,i,r,s,o,a,0,d,_,p);}else h.texImage2D(e,i,r,s,o,0,d,_,p);}}_compressedTexImage(e,i,r,s,o,a,n){const h=this._descriptor.context.gl,l=R(e);if(this._descriptor.isImmutable){if(null!=n)if(l){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");h.compressedTexSubImage3D(e,i,0,0,0,s,o,a,r,n);}else h.compressedTexSubImage2D(e,i,0,0,s,o,r,n);}else if(l){if(null==a)throw new s$1("Missing depth dimension for 3D texture upload");h.compressedTexImage3D(e,i,r,s,o,a,0,n);}else h.compressedTexImage2D(e,i,r,s,o,0,n);}_forEachMipmapLevel(e,r=1/0){let{width:s,height:o,depth:a,hasMipmap:n,target:h}=this._descriptor;const l=h===M$1.TEXTURE_3D;if(null==s||null==o||l&&null==a)throw new s$1("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,s,o,a),n&&(1!==s||1!==o||l&&1!==a)&&!(t>=r);++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1),l&&(a=Math.max(1,a>>1));}};function u(t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");}function T(t,e){let i=e.samplingMode,r=e.samplingMode;i===L.LINEAR_MIPMAP_NEAREST||i===L.LINEAR_MIPMAP_LINEAR?(i=L.LINEAR,e.hasMipmap||(r=L.LINEAR)):i!==L.NEAREST_MIPMAP_NEAREST&&i!==L.NEAREST_MIPMAP_LINEAR||(i=L.NEAREST,e.hasMipmap||(r=L.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r);}function g(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t));}function E(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1);}function x(t){return t in P}function M(t){return t in c$1}function A(t){return null!=t&&"type"in t&&"compressed"===t.type}function f(t){return null!=t&&"byteLength"in t}function I(t){return null!=t&&!A(t)&&!f(t)}function R(t){return t===M$1.TEXTURE_3D||t===M$1.TEXTURE_2D_ARRAY}function w(t,e,r,s=1){let o=Math.max(e,r);return t===M$1.TEXTURE_3D&&(o=Math.max(o,s)),Math.round(Math.log(o)/Math.LN2)+1}m$1.TEXTURE_UNIT_FOR_UPDATES=0;

export { E$1 as E, u$1 as a, e$1 as b, a$1 as c, c as d, e, m$1 as m, o, s, u$2 as u };
