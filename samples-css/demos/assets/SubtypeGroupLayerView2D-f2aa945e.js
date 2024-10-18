import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-8614bd93.js';
import { X } from './FeatureLayerView2D-a847010a.js';
import './preload-helper-a4975f27.js';
import './Container-4c5c32c7.js';
import './highlightReasons-a4d9294d.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-aef45268.js';
import './LayerView-f63206a9.js';
import './TechniqueInstance-39772f06.js';
import './UpdateTracking2D-20a16c2c.js';
import './TurboLine-5b625139.js';
import './enums-d24bcbbf.js';
import './earcut-417f7302.js';
import './GeometryUtils-17f9c5ca.js';
import './Rect-09e0f861.js';
import './LabelMetric-491188ea.js';
import './Program-d7da8f85.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-810f3f81.js';
import './constants-412c3a33.js';
import './TileContainer-0fe809bf.js';
import './WGLContainer-60682b0f.js';
import './ProgramTemplate-6e43d1b0.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-8d3dc6ca.js';
import './floatRGBA-9f7341c4.js';
import './FeatureCommandQueue-d9d88b0e.js';
import './HighlightCounter-2fe4e732.js';
import './popupUtils-b188bd75.js';
import './RefreshableLayerView-04f303a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
