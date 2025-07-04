import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-Bmb_kS21.js';
import { X } from './FeatureLayerView2D-iJBozguZ.js';
import './preload-helper-dJJaZANz.js';
import './Container-D3-PLfx_.js';
import './highlightReasons-ADRKoUyz.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-D0DmMC4M.js';
import './LayerView-CJKGRvYh.js';
import './TechniqueInstance-DFZsrmxA.js';
import './UpdateTracking2D-9EDv1F6n.js';
import './TurboLine-n0Ek8Zhn.js';
import './enums-DZmWLm_j.js';
import './earcut-g4H8BB3k.js';
import './GeometryUtils-D-uAqNDn.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-ClRAnfmc.js';
import './Program-CxZGKOvB.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BeAJOu1C.js';
import './constants-C0QDwCF4.js';
import './TileContainer-MTcCEnvV.js';
import './WGLContainer-DjD--VBD.js';
import './ProgramTemplate-D2YWwnJR.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-oA1CVkHd.js';
import './floatRGBA-D2QjkIO0.js';
import './FeatureCommandQueue-CtAMeZxG.js';
import './HighlightCounter-CDFOZCBa.js';
import './popupUtils-BuziboZF.js';
import './RefreshableLayerView-CJsZyu8E.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
