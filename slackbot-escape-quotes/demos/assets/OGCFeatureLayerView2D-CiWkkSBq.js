import { aW as e, aX as y, aY as c } from './main-CiDEuP9F.js';
import { X } from './FeatureLayerView2D-BhytwFd2.js';
import './preload-helper-dJJaZANz.js';
import './Container-B86LANmw.js';
import './highlightReasons-CnFfpXgS.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-2he6eqNY.js';
import './LayerView-BSvJ4Ws7.js';
import './TechniqueInstance-BEEeGN2L.js';
import './UpdateTracking2D-XqSBVoG7.js';
import './TurboLine-CxQtjXko.js';
import './enums-DZmWLm_j.js';
import './earcut-BKSaaJNq.js';
import './GeometryUtils-NkfE0kky.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DcYHRtgf.js';
import './Program-BIe5Abjh.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-B-aL1wGV.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CBaqE_5t.js';
import './WGLContainer-CrEBu4y7.js';
import './ProgramTemplate-Dm0DNTK_.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BpmB6Q5_.js';
import './floatRGBA-BTrCEDfx.js';
import './FeatureCommandQueue-D_iO02vk.js';
import './HighlightCounter-OmAv2Arf.js';
import './popupUtils-BRYD2eYz.js';
import './RefreshableLayerView-yE645YRZ.js';

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
