import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-13aeab07.js';
import { X } from './FeatureLayerView2D-8e4abca8.js';
import './preload-helper-a4975f27.js';
import './Container-3dc9cf5e.js';
import './highlightReasons-0fc02987.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-c8a8d54b.js';
import './LayerView-d39db279.js';
import './TechniqueInstance-c3049b10.js';
import './UpdateTracking2D-00d8ecd9.js';
import './TurboLine-b0c7c726.js';
import './enums-d24bcbbf.js';
import './earcut-44192e77.js';
import './GeometryUtils-a9f72666.js';
import './Rect-09e0f861.js';
import './LabelMetric-7e52e4bb.js';
import './Program-dd2b3adf.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-7e6007ce.js';
import './constants-412c3a33.js';
import './TileContainer-762b02a6.js';
import './WGLContainer-29f10536.js';
import './ProgramTemplate-d3ffdf35.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-9390e75f.js';
import './floatRGBA-3d601eac.js';
import './FeatureCommandQueue-cf20e949.js';
import './HighlightCounter-75b3bccc.js';
import './popupUtils-72940e20.js';
import './RefreshableLayerView-03fa2fcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
