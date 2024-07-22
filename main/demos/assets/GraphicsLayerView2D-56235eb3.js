import { ba as u$1, a6 as c, a5 as V, q, az as e, aX as e$1, aY as y, aZ as c$1 } from './main-a114cab0.js';
import { t as t$2 } from './highlightReasons-cb86c9e3.js';
import { m as m$1, u as u$2 } from './LayerView-f1579c86.js';
import { t as t$1 } from './GraphicContainer-3975dcb6.js';
import { $ } from './GraphicsView2D-fd6d4cd6.js';
import { t } from './HighlightCounter-515e2dce.js';
import './preload-helper-a4975f27.js';
import './Container-40dbb3f0.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-022a66dc.js';
import './AGraphicContainer-161b5084.js';
import './TechniqueInstance-94517a58.js';
import './UpdateTracking2D-790738b0.js';
import './TurboLine-07dc9d2a.js';
import './enums-d24bcbbf.js';
import './earcut-a8aed0ff.js';
import './GeometryUtils-10d8ac24.js';
import './Rect-09e0f861.js';
import './LabelMetric-2d28816d.js';
import './Program-777622b2.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-13eb2cf5.js';
import './constants-412c3a33.js';
import './TileContainer-dfd35951.js';
import './WGLContainer-a073700b.js';
import './ProgramTemplate-3b6c1f27.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-7a765071.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-ea87f995.js';
import './TimeOnly-34a08280.js';
import './timeSupport-3b12f2ba.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-03e22fc0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
