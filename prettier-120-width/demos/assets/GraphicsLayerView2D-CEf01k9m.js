import { b9 as u$1, a4 as c, a3 as V, q, ax as e, aW as e$1, aX as y, aY as c$1 } from './main-C6zPP_lC.js';
import { t as t$2 } from './highlightReasons-D1YpaZno.js';
import { m as m$1, u as u$2 } from './LayerView-CKpBGhsa.js';
import { t as t$1 } from './GraphicContainer-CoMTJ4Oo.js';
import { $ } from './GraphicsView2D-CpTVmu9h.js';
import { t } from './HighlightCounter-B8HXVRpI.js';
import './preload-helper-dJJaZANz.js';
import './Container-Bem7HWUz.js';
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
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
