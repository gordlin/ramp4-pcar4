import { aW as e, aX as y, aY as c } from './main-C6zPP_lC.js';
import { X } from './FeatureLayerView2D-Bj8rslow.js';
import './preload-helper-dJJaZANz.js';
import './Container-Bem7HWUz.js';
import './highlightReasons-D1YpaZno.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DAoiEMI_.js';
import './LayerView-CKpBGhsa.js';
import './TechniqueInstance-BAxCyb_Z.js';
import './UpdateTracking2D-DkEcCiV2.js';
import './TurboLine-BgEmDMv8.js';
import './enums-DZmWLm_j.js';
import './earcut-BMcH9yBQ.js';
import './GeometryUtils-Bno0fYX1.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C30eVJCV.js';
import './Program-W70Ssia-.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BcTeIU4j.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DVutA4B9.js';
import './WGLContainer-CJaxjlow.js';
import './ProgramTemplate-BDKOv53a.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BXpQpd_g.js';
import './floatRGBA-TzwvrXDN.js';
import './FeatureCommandQueue-Bj0UtDvA.js';
import './HighlightCounter-B8HXVRpI.js';
import './popupUtils-37L_U3w3.js';
import './RefreshableLayerView-Du3rglWx.js';

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
