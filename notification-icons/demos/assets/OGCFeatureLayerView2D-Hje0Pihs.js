import { aW as e, aX as y, aY as c } from './main-ClOnxQFK.js';
import { X } from './FeatureLayerView2D-BRRQaEsB.js';
import './preload-helper-dJJaZANz.js';
import './Container-CMUYCjJP.js';
import './highlightReasons-B0v_2l-b.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-DMd9N_E1.js';
import './LayerView-B1AhOmm5.js';
import './TechniqueInstance-BQZcSs39.js';
import './UpdateTracking2D-hJ9djLCe.js';
import './TurboLine-B8FYcwuo.js';
import './enums-DZmWLm_j.js';
import './earcut-BqlGe0Uw.js';
import './GeometryUtils-hGjfp9BV.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-sQJ9-9Y4.js';
import './Program-Bl70PNJy.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-DmEUcOyb.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Candae5s.js';
import './WGLContainer-CVt2rfjK.js';
import './ProgramTemplate-CiPnPzFm.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CvVmXXQN.js';
import './floatRGBA-Dbi8EwLH.js';
import './FeatureCommandQueue-DZj1YNPf.js';
import './HighlightCounter-DMHtpPxg.js';
import './popupUtils-v9aqDIGU.js';
import './RefreshableLayerView-B3gsn5AU.js';

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
