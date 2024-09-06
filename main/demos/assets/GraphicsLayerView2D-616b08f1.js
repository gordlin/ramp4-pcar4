import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-069f4a5d.js';
import { t as t$2 } from './highlightReasons-3fd38fa8.js';
import { m as m$1, u as u$2 } from './LayerView-1a28ec73.js';
import { t as t$1 } from './GraphicContainer-da0efb95.js';
import { $ } from './GraphicsView2D-d4f596c5.js';
import { t } from './HighlightCounter-51d18f6a.js';
import './preload-helper-a4975f27.js';
import './Container-1bd58a8f.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0c973e28.js';
import './AGraphicContainer-3f2622ed.js';
import './TechniqueInstance-e51e5ef8.js';
import './UpdateTracking2D-27e9cdec.js';
import './TurboLine-f8c54ce1.js';
import './enums-d24bcbbf.js';
import './earcut-bfea4cb9.js';
import './GeometryUtils-af85a41d.js';
import './Rect-09e0f861.js';
import './LabelMetric-b8b0d935.js';
import './Program-4af7aacf.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-8488ffa4.js';
import './constants-412c3a33.js';
import './TileContainer-dfc831f5.js';
import './WGLContainer-34f82b62.js';
import './ProgramTemplate-e77c3c50.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-638e4b7c.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-b6a060cd.js';
import './TimeOnly-dc3bcd42.js';
import './timeSupport-fc51b3ba.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-6b12bd74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
