import { aW as e, aX as y, aY as c } from './main-B9uF9icM.js';
import { X } from './FeatureLayerView2D-CM7HULkl.js';
import './preload-helper-dJJaZANz.js';
import './Container-DxqikPZb.js';
import './highlightReasons-6DBHmD1h.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-Bd11PDQo.js';
import './LayerView-DLJ5t0Cc.js';
import './TechniqueInstance-CMBqCOZm.js';
import './UpdateTracking2D-DmOpqcDq.js';
import './TurboLine-BY30MIjV.js';
import './enums-DZmWLm_j.js';
import './earcut-CZNeGzhs.js';
import './GeometryUtils-DdwcpEMb.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DRREd0bV.js';
import './Program-BqeG9bfe.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-B82fuewf.js';
import './constants-C0QDwCF4.js';
import './TileContainer-B3_xePJA.js';
import './WGLContainer-BuJW5tmA.js';
import './ProgramTemplate-CTBOYvd2.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-eOzdCG8V.js';
import './floatRGBA-mB-e23nw.js';
import './FeatureCommandQueue-BHCGx3RS.js';
import './HighlightCounter-BlJr1TVF.js';
import './popupUtils-DTV8J_Gj.js';
import './RefreshableLayerView-ByFWkRjz.js';

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
