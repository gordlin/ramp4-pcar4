import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-286bff4f.js';
import { X } from './FeatureLayerView2D-9ecb5f2a.js';
import './preload-helper-a4975f27.js';
import './Container-2114797c.js';
import './highlightReasons-1db4b1ec.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-445382d4.js';
import './LayerView-2864aa40.js';
import './TechniqueInstance-2704f923.js';
import './UpdateTracking2D-2876d622.js';
import './TurboLine-c8b876ec.js';
import './enums-d24bcbbf.js';
import './earcut-4b74680e.js';
import './GeometryUtils-16c2fcf6.js';
import './Rect-09e0f861.js';
import './LabelMetric-b0b0251e.js';
import './Program-8c1e758a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-48c9c2f5.js';
import './constants-412c3a33.js';
import './TileContainer-0066966c.js';
import './WGLContainer-d36777bf.js';
import './ProgramTemplate-53151e01.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-c3df5b8a.js';
import './floatRGBA-31f1a1ed.js';
import './FeatureCommandQueue-04beae1b.js';
import './HighlightCounter-1da6650d.js';
import './popupUtils-7282b392.js';
import './RefreshableLayerView-deae7a58.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
