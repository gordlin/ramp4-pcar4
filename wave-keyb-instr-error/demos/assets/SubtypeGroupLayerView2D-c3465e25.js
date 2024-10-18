import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-7a68adbe.js';
import { X } from './FeatureLayerView2D-72021ed6.js';
import './preload-helper-a4975f27.js';
import './Container-e88530a5.js';
import './highlightReasons-d4860bae.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f6538227.js';
import './LayerView-0a5f6b27.js';
import './TechniqueInstance-83bfc0f8.js';
import './UpdateTracking2D-2e4f5f6f.js';
import './TurboLine-5909d867.js';
import './enums-d24bcbbf.js';
import './earcut-3a443dc4.js';
import './GeometryUtils-451b03d4.js';
import './Rect-09e0f861.js';
import './LabelMetric-5317cf7f.js';
import './Program-b5227155.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-aaaf2fdc.js';
import './constants-412c3a33.js';
import './TileContainer-47fe289f.js';
import './WGLContainer-27daf205.js';
import './ProgramTemplate-808a39e8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-bec655c2.js';
import './floatRGBA-35ce90f2.js';
import './FeatureCommandQueue-e28b1e64.js';
import './HighlightCounter-0adef93d.js';
import './popupUtils-e5ab75fe.js';
import './RefreshableLayerView-10294cfb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
