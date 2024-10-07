import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-c1a54cbf.js';
import { t as t$2 } from './highlightReasons-e23744c4.js';
import { m as m$1, u as u$2 } from './LayerView-5d22a49e.js';
import { t as t$1 } from './GraphicContainer-af374777.js';
import { $ } from './GraphicsView2D-fbc050c3.js';
import { t } from './HighlightCounter-87e851c4.js';
import './preload-helper-a4975f27.js';
import './Container-d19ec178.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f0adabc3.js';
import './AGraphicContainer-29d69f80.js';
import './TechniqueInstance-d56f9586.js';
import './UpdateTracking2D-20dbf7b8.js';
import './TurboLine-cf37f1ac.js';
import './enums-d24bcbbf.js';
import './earcut-0580b432.js';
import './GeometryUtils-e9f88def.js';
import './Rect-09e0f861.js';
import './LabelMetric-d72162d2.js';
import './Program-e50ef60c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-361cdb43.js';
import './constants-412c3a33.js';
import './TileContainer-d70cbae9.js';
import './WGLContainer-dde6a06d.js';
import './ProgramTemplate-02cb9116.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-997886f7.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-1822f862.js';
import './TimeOnly-2cde2523.js';
import './timeSupport-fcdc92dd.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-aeab889c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
