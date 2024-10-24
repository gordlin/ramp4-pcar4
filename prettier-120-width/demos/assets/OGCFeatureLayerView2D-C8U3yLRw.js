import { aW as e, aX as y, aY as c } from './main-C39fOgt6.js';
import { X } from './FeatureLayerView2D-C-XScNtL.js';
import './preload-helper-dJJaZANz.js';
import './Container-GGxCmWWR.js';
import './highlightReasons-peID8D6K.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-_PUwobm2.js';
import './LayerView-BZZnypGf.js';
import './TechniqueInstance-Bsn0OJbF.js';
import './UpdateTracking2D-m6BTHeK5.js';
import './TurboLine-tzuN6b42.js';
import './enums-DZmWLm_j.js';
import './earcut-ku44kUUK.js';
import './GeometryUtils-BLTLxk7u.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BhLiIIpn.js';
import './Program-BVPS4QBc.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Cy3FdYgc.js';
import './constants-C0QDwCF4.js';
import './TileContainer-oGM_ExVO.js';
import './WGLContainer-BmthR8E8.js';
import './ProgramTemplate-Bbdh-1vb.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-C5OSEkzi.js';
import './floatRGBA-CaxrmZ3b.js';
import './FeatureCommandQueue-4vktMPcf.js';
import './HighlightCounter-DWcNV3kr.js';
import './popupUtils-CFQbssQd.js';
import './RefreshableLayerView-CZtoMwWt.js';

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
