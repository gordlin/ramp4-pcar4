import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-b051658a.js';
import { X } from './FeatureLayerView2D-88cae373.js';
import './preload-helper-a4975f27.js';
import './Container-ef13f0e0.js';
import './highlightReasons-a2269d3e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-69c3fea5.js';
import './LayerView-fc13a2d5.js';
import './TechniqueInstance-3add0b94.js';
import './UpdateTracking2D-f81eb4f4.js';
import './TurboLine-bf994b35.js';
import './enums-d24bcbbf.js';
import './earcut-501a169f.js';
import './GeometryUtils-0e3793e3.js';
import './Rect-09e0f861.js';
import './LabelMetric-e9dcfdb9.js';
import './Program-2fa83996.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-8a3182ff.js';
import './constants-412c3a33.js';
import './TileContainer-4ac8fded.js';
import './WGLContainer-3bf30a5b.js';
import './ProgramTemplate-f2041862.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-67d51fbc.js';
import './floatRGBA-576033d5.js';
import './FeatureCommandQueue-cfbbf52d.js';
import './HighlightCounter-558324a9.js';
import './popupUtils-875ecd58.js';
import './RefreshableLayerView-54c56b24.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
