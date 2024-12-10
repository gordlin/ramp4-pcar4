import{s as g,D as Y,bL as L,lc as B,aQ as R}from"./main-D8a2_wp1.js";import"./enums-BsbtGCGp.js";import{s as H,e as P,c as k}from"./Texture-qX2W_hus.js";import{U as u,C as c}from"./enums-DDkmfb-t.js";import"./Program-DApHDGD-.js";import{t as v}from"./VertexElementDescriptor-BAy1DPb3.js";let l=class m{constructor(t,e,s,i,r,o,a){this.instanceId=t,this.textureKey=e,this.indexStart=s,this.indexCount=i,this.vertexStart=r,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new m(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,s,i,r,o,a,h){t.push(e),t.push(s),t.push(i),t.push(r),t.push(o),t.push(a),t.push(h)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),s=t.readInt32(),i=t.readInt32(),r=t.readInt32(),o=t.readInt32(),a=t.readInt32(),h=t.readInt32();return new m(e,s,i,r,o,a,h)}};l.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function I(n,t){if(t!==null){n.push(t.length);for(const e of t)e.serialize(n);return n}n.push(0)}function E(n,t,e){const s=n.readInt32(),i=new Array(s);for(let r=0;r<i.length;r++)i[r]=t.deserialize(n,e);return i}let S=class N{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),I(t,this.records),t}static deserialize(t){const e=t.readInt32(),s=t.readF32(),i=new N(e,s);return i.records=E(t,l)??[],i}};S.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+l.byteSizeHint;const x=()=>Y.getLogger("esri.views.2d.engine.webgl.Utils");function C(n){switch(n){case u.UNSIGNED_BYTE:return 1;case u.UNSIGNED_SHORT_4_4_4_4:return 2;case u.FLOAT:return 4;default:return void x().error(new g("webgl-utils",`Unable to handle type ${n}`))}}function z(n){switch(n){case u.UNSIGNED_BYTE:return Uint8Array;case u.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.FLOAT:return Float32Array;default:return void x().error(new g("webgl-utils",`Unable to handle type ${n}`))}}function O(n){const t={};for(const e in n){const s=n[e];let i=0;t[e]=s.map(r=>{const o=new v(r.name,r.count,r.type,i,0,r.normalized||!1);return i+=r.count*H(r.type),o}),t[e]?.forEach(r=>r.stride=i)}return t}const D=n=>{const t=new Map;for(const e in n)for(const s of n[e])t.set(s.name,s.location);return t},G=n=>{const t={};for(const e in n){const s=n[e];t[e]=s?.length?s[0].stride:0}return t},p=new Map,W=(n,t)=>{if(!p.has(n)){const e=O(t),s={strides:G(e),bufferLayouts:e,attributes:D(t)};p.set(n,s)}return p.get(n)},X=n=>n.includes("data:image/svg+xml");function $(n){const t=[];for(let e=0;e<n.length;e++)t.push(n.charCodeAt(e));return t}function K(n,t,e){const s=new P(t.width,t.height);return s.dataType=t.dataType,t.depth&&(s.depth=t.depth),t.flipped&&(s.flipped=t.flipped),t.hasMipmap&&(s.hasMipmap=t.hasMipmap),s.internalFormat=t.internalFormat,t.isImmutable&&(s.isImmutable=t.isImmutable),t.isOpaque&&(s.isOpaque=t.isOpaque),t.maxAnisotropy&&(s.maxAnisotropy=t.maxAnisotropy),s.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(s.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(s.samplingMode=t.samplingMode),t.target&&(s.target=t.target),s.uniform=t.uniform,t.unpackAlignment&&(s.unpackAlignment=t.unpackAlignment),t.wrapMode&&(s.wrapMode=t.wrapMode),new k(n,s,e)}function q(n){return"url"in n&&"urlHash"in n?{...n,url:""}:n}let M=class y{constructor(t,e,s,i){this.computedX=0,this.computedY=0,this.center=L(t,e),this.centerT=B(),this.halfWidth=s/2,this.halfHeight=i/2,this.width=s,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new y(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const s=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),r=(t.halfWidth+this.halfWidth+e)/s,o=(t.halfHeight+this.halfHeight+e)/i,a=Math.min(r,o);return Math.log2(a)}extend(t){const e=Math.min(this.xmin,t.xmin),s=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,r=Math.max(this.ymax,t.ymax)-s,o=e+i/2,a=s+r/2;this.width=i,this.height=r,this.halfWidth=i/2,this.halfHeight=r/2,this.x=o,this.y=a}static deserialize(t){const e=t.readF32(),s=t.readF32(),i=t.readInt32(),r=t.readInt32();return new y(e,s,i,r)}};const F=new Float32Array(1),j=new Uint32Array(F.buffer);function V(n){return F[0]=n,j[0]}function J(n,t){return 65535&n|t<<16}function _(n){const t=V(n),e=t>>>31;let s=t>>>23&255,i=8388607&t;return s-=127,s>15?e<<15|31744:s<-25?0:(s<-14&&(i+=8388608,i/=2**(-14-s),s=-15),s+=15,i/=8192,i=Q(i,1023),e<<15|s<<10|i)}function Q(n,t){const e=Math.floor(n),s=n-e;return e<t&&(s>.5||s===.5&&e%2==1)?e+1:e}function w(n){let t=n>>>15,e=n>>10&31,s=1023&n;return t=t?-1:1,e-=15,s/=1024,e>-15?s+=1:e=-14,t*2**e*s}function Z(n){const t=n.map(({name:e,count:s,type:i})=>`${e}.${s}.${i}`).join(",");return R(t)}function f(n,t,e,s,i,r,o){if(n.primitiveName===t){for(const a in n)if(a===e){let h=s?.readWithDefault(i,r,n[a]&&o);return n.type==="text"&&(h=h.toString()),void(n[a]=h)}}if("type"in n&&n.type!=null)switch(n.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(n.symbolLayers)for(const a of n.symbolLayers)f(a,t,e,s,i,r,o);break;case"CIMHatchFill":n.lineSymbol&&f(n.lineSymbol,t,e,s,i,r,o);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(n.type==="CIMVectorMarker"&&n.markerGraphics)for(const a of n.markerGraphics)f(a,t,e,s,i,r,o),f(a.symbol,t,e,s,i,r,o)}}const tt=400;function et(n){const t=n.width;return n.effects!=null?tt:Math.max(1.25*t,8)}function st(n,t,e,s){const i=e.packPrecisionFactor??1;switch(e.type){case c.BYTE:if(e.count===1)n.setInt8(s+e.offset,t*i);else for(let r=0;r<e.count;r++){const o=r*Int8Array.BYTES_PER_ELEMENT;n.setInt8(s+e.offset+o,t[r]*i)}break;case c.UNSIGNED_BYTE:if(e.count===1)n.setUint8(s+e.offset,t*i);else for(let r=0;r<e.count;r++){const o=r*Uint8Array.BYTES_PER_ELEMENT;n.setUint8(s+e.offset+o,t[r]*i)}break;case c.SHORT:if(e.count===1)n.setInt16(s+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Int16Array.BYTES_PER_ELEMENT;n.setInt16(s+e.offset+o,t[r]*i,!0)}break;case c.UNSIGNED_SHORT:if(e.count===1)n.setUint16(s+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(s+e.offset+o,t[r]*i,!0)}break;case c.INT:if(e.count===1)n.setInt32(s+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Int32Array.BYTES_PER_ELEMENT;n.setInt32(s+e.offset+o,t[r]*i,!0)}break;case c.UNSIGNED_INT:if(e.count===1)n.setUint32(s+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Uint32Array.BYTES_PER_ELEMENT;n.setUint32(s+e.offset+o,t[r]*i,!0)}break;case c.FLOAT:if(e.count===1)n.setFloat32(s+e.offset,t*i,!0);else for(let r=0;r<e.count;r++){const o=r*Float32Array.BYTES_PER_ELEMENT;n.setFloat32(s+e.offset+o,t[r]*i,!0)}break;case c.HALF_FLOAT:if(e.count===1)n.setUint16(s+e.offset,_(t*i),!0);else for(let r=0;r<e.count;r++){const o=r*Uint16Array.BYTES_PER_ELEMENT;n.setUint16(s+e.offset+o,_(t[r]*i),!0)}}}function nt(n,t,e){switch(t.type){case c.BYTE:{if(t.count===1)return n.getInt8(e+t.offset);const s=[];for(let i=0;i<t.count;i++){const r=i*Int8Array.BYTES_PER_ELEMENT;s.push(n.getInt8(e+t.offset+r))}return s}case c.UNSIGNED_BYTE:{if(t.count===1)return n.getUint8(e+t.offset);const s=[];for(let i=0;i<t.count;i++){const r=i*Uint8Array.BYTES_PER_ELEMENT;s.push(n.getUint8(e+t.offset+r))}return s}case c.SHORT:{if(t.count===1)return n.getInt16(e+t.offset,!0);const s=[];for(let i=0;i<t.count;i++){const r=i*Int16Array.BYTES_PER_ELEMENT;s.push(n.getInt16(e+t.offset+r,!0))}return s}case c.UNSIGNED_SHORT:{if(t.count===1)return n.getUint16(e+t.offset,!0);const s=[];for(let i=0;i<t.count;i++){const r=i*Uint16Array.BYTES_PER_ELEMENT;s.push(n.getUint16(e+t.offset+r,!0))}return s}case c.INT:{if(t.count===1)return n.getInt32(e+t.offset,!0);const s=[];for(let i=0;i<t.count;i++){const r=i*Int32Array.BYTES_PER_ELEMENT;s.push(n.getInt32(e+t.offset+r,!0))}return s}case c.UNSIGNED_INT:{if(t.count===1)return n.getUint32(e+t.offset,!0);const s=[];for(let i=0;i<t.count;i++){const r=i*Uint32Array.BYTES_PER_ELEMENT;s.push(n.getUint32(e+t.offset+r,!0))}return s}case c.FLOAT:{if(t.count===1)return n.getFloat32(e+t.offset,!0);const s=[];for(let i=0;i<t.count;i++){const r=i*Float32Array.BYTES_PER_ELEMENT;s.push(n.getFloat32(e+t.offset+r,!0))}return s}case c.HALF_FLOAT:{if(t.count===1)return w(n.getUint16(e+t.offset,!0));const s=[];for(let i=0;i<t.count;i++){const r=i*Uint16Array.BYTES_PER_ELEMENT;s.push(w(n.getUint16(e+t.offset+r,!0)))}return s}}}class T{constructor(t,e,s,i,r,o,a,h,d=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=s,this.directionX=i,this.directionY=r,this.maxScale=o,this.minScale=a,this.referenceBounds=h,this.bounds=d}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),I(t,this.bounds)}static deserialize(t){const e=t.readInt32(),s=t.readF32(),i=t.readF32(),r=t.readF32(),o=t.readF32(),a=t.readF32(),h=t.readF32(),d=t.readF32(),U=t.readF32(),A=t.readF32(),b=E(t,M)??[];return new T(e,s,i,r,o,a,h,{size:d,offsetX:U,offsetY:A},b)}}export{q as M,K as T,Z as a,W as b,C as c,z as d,st as e,J as f,et as g,nt as h,M as i,$ as j,E as n,f as o,T as r,S as s,l as t,X as y};
