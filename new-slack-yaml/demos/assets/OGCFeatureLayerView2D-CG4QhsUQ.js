import { aW as e, aX as y, aY as c } from './main-Bmb_kS21.js';
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
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
