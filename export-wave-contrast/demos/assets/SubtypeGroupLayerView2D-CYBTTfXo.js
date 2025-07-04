import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-CLKD9wBG.js';
import { X } from './FeatureLayerView2D-JlsHM1eV.js';
import './preload-helper-dJJaZANz.js';
import './Container-Dikq1Ual.js';
import './highlightReasons-B9llHV7I.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CY0O2H1E.js';
import './LayerView-CkSkKTPN.js';
import './TechniqueInstance-BeHzNkWq.js';
import './UpdateTracking2D-Bcbj_HNx.js';
import './TurboLine-CO8mAOgw.js';
import './enums-DZmWLm_j.js';
import './earcut-DoM-ueUv.js';
import './GeometryUtils-DY8wyAef.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Dwgo4ZfQ.js';
import './Program-BLdQkSIm.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BISIJv8c.js';
import './constants-C0QDwCF4.js';
import './TileContainer-C8EUbyc_.js';
import './WGLContainer-CHbDLJ9-.js';
import './ProgramTemplate-JO8fvSuJ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BZXWKNU8.js';
import './floatRGBA-DDlXCmEu.js';
import './FeatureCommandQueue-ChPvtK1s.js';
import './HighlightCounter-imn1Zi2D.js';
import './popupUtils-B9WAES18.js';
import './RefreshableLayerView-DrRcISmZ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
