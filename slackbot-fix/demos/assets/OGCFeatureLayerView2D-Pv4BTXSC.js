import { aW as e, aX as y, aY as c } from './main-DpOWVR1F.js';
import { X } from './FeatureLayerView2D-CzOM7lEW.js';
import './preload-helper-dJJaZANz.js';
import './Container-CKjTCrE8.js';
import './highlightReasons-CwpKaacA.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-QlTrS6N7.js';
import './LayerView-Do182Hd-.js';
import './TechniqueInstance-CQrTdqXs.js';
import './UpdateTracking2D-CYL-fUlZ.js';
import './TurboLine-CiKpQHFO.js';
import './enums-DZmWLm_j.js';
import './earcut-Ba-lGY9L.js';
import './GeometryUtils-D2s0IQVv.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-0ig_RgXL.js';
import './Program-5oogqi-H.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-l19NVVae.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BIHwoalG.js';
import './WGLContainer-DCXw91Xc.js';
import './ProgramTemplate-Dbyi00gT.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BgfV_Jlp.js';
import './floatRGBA-BT_eYljb.js';
import './FeatureCommandQueue-Cfhxw1xT.js';
import './HighlightCounter-Du7aZIMw.js';
import './popupUtils-DJuRWcxc.js';
import './RefreshableLayerView-BnL0qXhC.js';

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
