import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-c1a54cbf.js';
import { X } from './FeatureLayerView2D-9bc81f94.js';
import './preload-helper-a4975f27.js';
import './Container-d19ec178.js';
import './highlightReasons-e23744c4.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f0adabc3.js';
import './LayerView-5d22a49e.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-9e742542.js';
import './floatRGBA-1892c96d.js';
import './FeatureCommandQueue-997886f7.js';
import './HighlightCounter-87e851c4.js';
import './popupUtils-2ae2d449.js';
import './RefreshableLayerView-1dbddc68.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
