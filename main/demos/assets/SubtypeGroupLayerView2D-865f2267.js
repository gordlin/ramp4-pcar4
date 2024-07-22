import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-a114cab0.js';
import { X } from './FeatureLayerView2D-be4dbced.js';
import './preload-helper-a4975f27.js';
import './Container-40dbb3f0.js';
import './highlightReasons-cb86c9e3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-022a66dc.js';
import './LayerView-f1579c86.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-54e261e7.js';
import './floatRGBA-859d7f13.js';
import './FeatureCommandQueue-7a765071.js';
import './HighlightCounter-515e2dce.js';
import './popupUtils-49aade21.js';
import './RefreshableLayerView-d9d103b3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
