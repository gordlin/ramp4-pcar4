import { aW as e, aX as y, aY as c } from './main-h69rSE3m.js';
import { X } from './FeatureLayerView2D-CNnAbNug.js';
import './preload-helper-dJJaZANz.js';
import './Container-DtPA5NS0.js';
import './highlightReasons-B0Kzav6T.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BJG8yYCh.js';
import './LayerView-G96FX7DO.js';
import './TechniqueInstance-0p6uT0ms.js';
import './UpdateTracking2D-DHR5LIJd.js';
import './TurboLine-NKqMiTsD.js';
import './enums-DZmWLm_j.js';
import './earcut-CsVH2To6.js';
import './GeometryUtils-D6f53zDr.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-C4AMbr_K.js';
import './Program-D85t3rgN.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BD7FrGeQ.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CBskpmyx.js';
import './WGLContainer-D-MCdVI3.js';
import './ProgramTemplate-C8SJXrmN.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BtvNmQic.js';
import './floatRGBA-D08X39FZ.js';
import './FeatureCommandQueue-BKlin3cE.js';
import './HighlightCounter-DkGxVXHP.js';
import './popupUtils-D-nLFbJs.js';
import './RefreshableLayerView-CAeZ1WME.js';

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
