import{bb as a,bc as m,bd as E,fz as M,bn as F,s as f,dq as S,ax as C,G as q,bh as R,aY as U}from"./main-Bd3SZcXj.js";import{a as $}from"./BitmapContainer-DXdFkD2F.js";import{f as V,y as L}from"./LayerView-C4FyfwIf.js";import{_ as W}from"./ExportStrategy-BhxUQ5zQ.js";import{i as z}from"./RefreshableLayerView-DpP5J5VK.js";import{i as A}from"./timeSupport-DMh9lNA1.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-CWqGt0mI.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-GQKInEqt.js";import"./enums-BRXbslMp.js";import"./Texture-DNiwv72Q.js";import"./enums-BlUEVwJR.js";import"./Program-BSmKXPKo.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-S8nQ_zjF.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BEV9YswJ.js";import"./highlightReasons-VeQ5arLg.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./earcut-Cp4GkPVZ.js";import"./layerViewUtils-CuYS5zdy.js";import"./Bitmap-CbqLOGXX.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new M({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return A(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,s){const{layer:o}=this;if(!i)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:d}=o;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const r=this.createFetchPopupFeaturesQuery(i);if(!r)return[];const{extent:n,width:p,height:h,x:c,y}=r;if(!(n&&p&&h))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,c,y);return S(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends H(z(V(L))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||q.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:s,y:o}=e,{spatialReference:d}=t;let r,n=0,p=0;if(i.children.some(g=>{const{width:w,height:b,resolution:v,x:l,y:x}=g,I=l+v*w,P=x-v*b;return s>=l&&s<=I&&o<=x&&o>=P&&(r=new U({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),n=w,p=b,!0)}),!r)return null;const h=r.width/n,c=Math.round((s-r.xmin)/h),y=Math.round((r.ymax-o)/h);return{extent:r,width:n,height:p,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const ht=u;export{ht as default};