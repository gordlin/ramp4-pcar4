import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-069f4a5d.js';
import { a } from './BitmapContainer-512bc884.js';
import { m as m$1, u } from './LayerView-1a28ec73.js';
import { $ } from './GraphicsView2D-d4f596c5.js';
import { h } from './HighlightGraphicContainer-b8b42936.js';
import { v } from './ExportStrategy-d8d5e443.js';
import { i } from './RefreshableLayerView-f828277f.js';
import { U, r } from './drapedUtils-e45625c7.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-34f82b62.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-b8b0d935.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-0c973e28.js';
import './Program-4af7aacf.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-e77c3c50.js';
import './Container-1bd58a8f.js';
import './highlightReasons-3fd38fa8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-bfea4cb9.js';
import './UpdateTracking2D-27e9cdec.js';
import './TurboLine-f8c54ce1.js';
import './GeometryUtils-af85a41d.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-8488ffa4.js';
import './constants-412c3a33.js';
import './AttributeStore-b6a060cd.js';
import './TimeOnly-dc3bcd42.js';
import './timeSupport-fc51b3ba.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-638e4b7c.js';
import './normalizeUtilsSync-6b12bd74.js';
import './AGraphicContainer-3f2622ed.js';
import './TechniqueInstance-e51e5ef8.js';
import './TileContainer-dfc831f5.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-87b73e32.js';
import './popupUtils-468e7e4c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
