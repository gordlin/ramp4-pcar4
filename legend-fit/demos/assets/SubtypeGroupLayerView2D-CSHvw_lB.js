import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-G3ByAwdD.js';
import { X } from './FeatureLayerView2D-BUQ0Ne-k.js';
import './preload-helper-dJJaZANz.js';
import './Container-CFQ3xi5a.js';
import './highlightReasons-BZkjWt7t.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-B0QlpTVR.js';
import './LayerView-Bcn2Z64Q.js';
import './TechniqueInstance-nkpz7GOm.js';
import './UpdateTracking2D-FhJKGzme.js';
import './TurboLine-dHsMwPSw.js';
import './enums-DZmWLm_j.js';
import './earcut-ZnarHoKq.js';
import './GeometryUtils-DjKPqOSC.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-B_v1KQ7J.js';
import './Program-BeoAuqVb.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DxZ8MOnN.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BLeSYzIE.js';
import './WGLContainer-BmPMKQoZ.js';
import './ProgramTemplate-CdCgPCPT.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DwS8pH-7.js';
import './floatRGBA-BFx2Rnvn.js';
import './FeatureCommandQueue-CpzZ-uZs.js';
import './HighlightCounter-Ci6bLdxZ.js';
import './popupUtils-DgbvMpZy.js';
import './RefreshableLayerView-yNb1m6D-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
