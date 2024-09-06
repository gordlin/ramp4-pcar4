import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-069f4a5d.js';
import { X } from './FeatureLayerView2D-c2551930.js';
import './preload-helper-a4975f27.js';
import './Container-1bd58a8f.js';
import './highlightReasons-3fd38fa8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-0c973e28.js';
import './LayerView-1a28ec73.js';
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
import './tileUtils-6f82bc7d.js';
import './SDFHelper-4560a943.js';
import './floatRGBA-b917d5b6.js';
import './FeatureCommandQueue-638e4b7c.js';
import './HighlightCounter-51d18f6a.js';
import './popupUtils-468e7e4c.js';
import './RefreshableLayerView-f828277f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
