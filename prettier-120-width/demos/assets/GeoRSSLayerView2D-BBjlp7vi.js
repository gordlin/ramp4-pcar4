import { b2 as d$1, b4 as P$1, b5 as d, a3 as V, b6 as P, b7 as t, b8 as m, aW as e, aY as c } from './main-C6zPP_lC.js';
import { m as m$1, u } from './LayerView-CKpBGhsa.js';
import { t as t$1 } from './GraphicContainer-CoMTJ4Oo.js';
import { $ } from './GraphicsView2D-CpTVmu9h.js';
import './preload-helper-dJJaZANz.js';
import './Container-Bem7HWUz.js';
import './highlightReasons-D1YpaZno.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DAoiEMI_.js';
import './AGraphicContainer-o9Z7w_pc.js';
import './TechniqueInstance-BAxCyb_Z.js';
import './UpdateTracking2D-DkEcCiV2.js';
import './TurboLine-BgEmDMv8.js';
import './enums-DZmWLm_j.js';
import './earcut-BMcH9yBQ.js';
import './GeometryUtils-Bno0fYX1.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C30eVJCV.js';
import './Program-W70Ssia-.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BcTeIU4j.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DVutA4B9.js';
import './WGLContainer-CJaxjlow.js';
import './ProgramTemplate-BDKOv53a.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-Bj0UtDvA.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-y5VG9OyN.js';
import './TimeOnly-B4CV_kk3.js';
import './timeSupport-yASC2wYI.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-Bi0VVdTN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(m$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?P.fromJSON(i):null,y=t(n.renderer),g=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P$1),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e});}),P$1),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new m({symbol:e});}),P$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([c("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
