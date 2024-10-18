import { b9 as u$1, a4 as c, a3 as V, q, ax as e, aW as e$1, aX as y, aY as c$1 } from './main-CRxYF44d.js';
import { t as t$2 } from './highlightReasons-DcFy4YKG.js';
import { m as m$1, u as u$2 } from './LayerView-BX-7LRqw.js';
import { t as t$1 } from './GraphicContainer-B0VnzqGk.js';
import { $ } from './GraphicsView2D-Tnx1byK4.js';
import { t } from './HighlightCounter-AIYJL2Jr.js';
import './preload-helper-dJJaZANz.js';
import './Container-BsJY-TeW.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bchd70sA.js';
import './AGraphicContainer-CVCKHn47.js';
import './TechniqueInstance-RhEFMJ-o.js';
import './UpdateTracking2D-UKBNAFBM.js';
import './TurboLine-BQRzDvfh.js';
import './enums-DZmWLm_j.js';
import './earcut-EbjLl-Ev.js';
import './GeometryUtils-C83Q38_k.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CQHCi133.js';
import './Program-Br319YOs.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DkAiKHlJ.js';
import './constants-C0QDwCF4.js';
import './TileContainer-GD5et0eo.js';
import './WGLContainer-CxBM_1b8.js';
import './ProgramTemplate-CNLAwOq_.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-Bhj3ktNP.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-Cs1gDt4k.js';
import './TimeOnly-LQoXnWQ6.js';
import './timeSupport-9IC9rUOt.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-QSefW2Ff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
