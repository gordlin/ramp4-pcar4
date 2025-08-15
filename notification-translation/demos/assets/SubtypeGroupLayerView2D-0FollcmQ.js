import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DAn2heHU.js';
import { X } from './FeatureLayerView2D-DwWZ7r9U.js';
import './preload-helper-dJJaZANz.js';
import './Container-CGre6sTp.js';
import './highlightReasons-CkZQkIj6.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CDiylge2.js';
import './LayerView-DlsngPI6.js';
import './TechniqueInstance-C71Lroc3.js';
import './UpdateTracking2D-C8g1GFj0.js';
import './TurboLine-PgIMX9LU.js';
import './enums-DZmWLm_j.js';
import './earcut-C4Bmxvn7.js';
import './GeometryUtils-DE39i9Go.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Bjmg9I1E.js';
import './Program-T8akyY2n.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BEpx_WJD.js';
import './constants-C0QDwCF4.js';
import './TileContainer-ClAb41j4.js';
import './WGLContainer-Bwwug1I-.js';
import './ProgramTemplate-BCAWRt5y.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-C4jfXzHj.js';
import './floatRGBA-B6Oliw3m.js';
import './FeatureCommandQueue-NZmtPB9N.js';
import './HighlightCounter-BpL98gdE.js';
import './popupUtils-C_pirah6.js';
import './RefreshableLayerView-BI5GtcxN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
