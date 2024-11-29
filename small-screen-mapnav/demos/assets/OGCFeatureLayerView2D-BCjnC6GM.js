import { aW as e, aX as y, aY as c } from './main-BeQD74TG.js';
import { X } from './FeatureLayerView2D-DVC0NWUH.js';
import './preload-helper-dJJaZANz.js';
import './Container-80NMYVve.js';
import './highlightReasons-IpPu1k8j.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DrFRuVHM.js';
import './LayerView-Dn3omEnE.js';
import './TechniqueInstance-CXZrNwJM.js';
import './UpdateTracking2D-DzDqa2AQ.js';
import './TurboLine-DDGNTNC0.js';
import './enums-DZmWLm_j.js';
import './earcut-7M8H89RF.js';
import './GeometryUtils-Br-takLs.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-_cERRPv-.js';
import './Program-DjRqKkor.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-D95_EkL5.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CHrIv7QR.js';
import './WGLContainer-b24VBGCl.js';
import './ProgramTemplate-C_NXtxxi.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-vcVseYvA.js';
import './floatRGBA-DxdesFah.js';
import './FeatureCommandQueue-CIlb-4QT.js';
import './HighlightCounter-D5lqYXQ4.js';
import './popupUtils-DiDbtxgu.js';
import './RefreshableLayerView-CMDPOsfm.js';

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
