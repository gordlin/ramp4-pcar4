import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DUYV3SPV.js';
import { X } from './FeatureLayerView2D-BapvcYHy.js';
import './preload-helper-dJJaZANz.js';
import './Container-CoyWQoxg.js';
import './highlightReasons-DU85GHHk.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CYfWnfCb.js';
import './LayerView-DLHf2M1T.js';
import './TechniqueInstance-Cv7YGV4G.js';
import './UpdateTracking2D-L4iRDv9Q.js';
import './TurboLine-C2vPkAPH.js';
import './enums-DZmWLm_j.js';
import './earcut-CBXRCmlo.js';
import './GeometryUtils-DpK89EDw.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-K8oM5J7g.js';
import './Program-k_MqFkF-.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CQlc1LFn.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BsmlwYvd.js';
import './WGLContainer-BCrEPaML.js';
import './ProgramTemplate-BKI9ENJk.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BMqewsAU.js';
import './floatRGBA-CuhMI-s4.js';
import './FeatureCommandQueue-CRjTSxR4.js';
import './HighlightCounter-GQhp8mXA.js';
import './popupUtils-BrclnANB.js';
import './RefreshableLayerView-Bs_mQIUL.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
