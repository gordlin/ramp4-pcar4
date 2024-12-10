import{hL as c,bv as d,dv as p,hM as f,c_ as m,hN as _,hO as y,hP as g}from"./main-D8a2_wp1.js";let b=class{constructor(i,e,t){this.uid=i,this.geometry=e,this.attributes=t,this.visible=!0,this.objectId=null,this.centroid=null}};class P{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function C(i,e,t,s){if(e?.size&&t!=null&&i)for(const r in i){if(!e.has(r))continue;const n=i[r];typeof n=="string"&&n.length>t&&(s(r),i[r]="")}}function G(i,e){return e}function l(i,e,t,s){switch(t){case 0:return h(i,e+s,0);case 1:return i.originPosition==="lowerLeft"?h(i,e+s,1):M(i,e+s,1)}}function u(i,e,t,s){return t===2?h(i,e,2):l(i,e,t,s)}function v(i,e,t,s){return t===2?h(i,e,3):l(i,e,t,s)}function A(i,e,t,s){return t===3?h(i,e,3):u(i,e,t,s)}function h({translate:i,scale:e},t,s){return i[s]+t*e[s]}function M({translate:i,scale:e},t,s){return i[s]-t*e[s]}class T{constructor(e){this._options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new P}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=c(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(t!=null)for(const s of e.features)t(s.geometry)}createSpatialReference(){return new d}addField(e,t){e.fields.push(p.fromJSON(t));const s=e.fields.map(r=>r.name);this._attributesConstructor=function(){for(const r of s)this[r]=null}}addFeature(e,t){const s=this._options.maxStringAttributeLength,r=this._options.maxStringAttributeFields;C(t.attributes,r,s,n=>{const o=t.attributes[e.objectIdFieldName];o!=null&&this._missingAttributes.push({objectId:o,attribute:n})}),e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:s,queryGeometryType:r}=t,n=f(s.clone(),s,!1,!1,this._transform),o=m(n,r,!1,!1);let a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,e.queryGeometryType=r,e.queryGeometry=o}prepareFeatures(e){switch(this._transform=e.transform??null,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,s,r)=>this.addCoordinatePoint(t,s,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,s,r)=>this._addCoordinatePolygon(t,s,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,s,r)=>this._addCoordinatePolyline(t,s,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,s,r)=>this._addCoordinateMultipoint(t,s,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:_(e.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new b(y(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this._lengths.reduce((t,s)=>t+s,0);this._coordinateBuffer=new Float64Array(e*this._vertexDimension),this._coordinateBufferPtr=0}addLength(e,t){this._lengths.length===0&&(this._toAddInCurrentPath=t),this._lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,s){const r=this._transform?this._applyTransform(this._transform,t,s,0):t;if(r!=null)switch(s){case 0:e.x=r;break;case 1:e.y=r;break;case 2:e.hasZ?e.z=r:e.m=r;break;case 3:e.m=r}}_transformPathLikeValue(e,t){let s=0;return t<=1&&(s=this._previousCoordinate[t],this._previousCoordinate[t]+=e),this._transform?this._applyTransform(this._transform,e,t,s):e}_addCoordinatePolyline(e,t,s){this._dehydratedAddPointsCoordinate(e.paths,t,s)}_addCoordinatePolygon(e,t,s){this._dehydratedAddPointsCoordinate(e.rings,t,s)}_addCoordinateMultipoint(e,t,s){s===0&&e.points.push([]);const r=this._transformPathLikeValue(t,s);e.points[e.points.length-1].push(r)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,s){s===0&&this._toAddInCurrentPath--==0&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(t,s),n=e[e.length-1],o=this._coordinateBuffer;if(o){if(s===0){const a=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(o.buffer,a,this._vertexDimension))}o[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(e){const{hasZ:t,hasM:s}=e;return t&&s?A:t?u:s?v:l}}class R{_parseFeatureQuery(e){const t=new T(e.options),s=g(e.buffer,t),r={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map(n=>n.toJSON()):void 0,missingAttributes:t.missingAttributes};return Promise.resolve(r)}}function x(){return new R}export{x as default};
