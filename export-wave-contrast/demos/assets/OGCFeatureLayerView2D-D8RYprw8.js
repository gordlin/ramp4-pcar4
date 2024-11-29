import { aW as e, aX as y, aY as c } from './main-CLKD9wBG.js';
import { X } from './FeatureLayerView2D-JlsHM1eV.js';
import './preload-helper-dJJaZANz.js';
import './Container-Dikq1Ual.js';
import './highlightReasons-B9llHV7I.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CY0O2H1E.js';
import './LayerView-CkSkKTPN.js';
import './TechniqueInstance-BeHzNkWq.js';
import './UpdateTracking2D-Bcbj_HNx.js';
import './TurboLine-CO8mAOgw.js';
import './enums-DZmWLm_j.js';
import './earcut-DoM-ueUv.js';
import './GeometryUtils-DY8wyAef.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-Dwgo4ZfQ.js';
import './Program-BLdQkSIm.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BISIJv8c.js';
import './constants-C0QDwCF4.js';
import './TileContainer-C8EUbyc_.js';
import './WGLContainer-CHbDLJ9-.js';
import './ProgramTemplate-JO8fvSuJ.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BZXWKNU8.js';
import './floatRGBA-DDlXCmEu.js';
import './FeatureCommandQueue-ChPvtK1s.js';
import './HighlightCounter-imn1Zi2D.js';
import './popupUtils-B9WAES18.js';
import './RefreshableLayerView-DrRcISmZ.js';

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
