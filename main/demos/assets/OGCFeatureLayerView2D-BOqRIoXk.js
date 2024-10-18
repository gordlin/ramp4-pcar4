import { aW as e, aX as y, aY as c } from './main-SY5HUWvs.js';
import { X } from './FeatureLayerView2D-CB9KAAs0.js';
import './preload-helper-dJJaZANz.js';
import './Container-G1sUZ8Sn.js';
import './highlightReasons-DV7UMr09.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-B8apGDfX.js';
import './LayerView-DF6LAgEU.js';
import './TechniqueInstance-BLZlyuAl.js';
import './UpdateTracking2D-CCuej8bc.js';
import './TurboLine-LzIuooNa.js';
import './enums-DZmWLm_j.js';
import './earcut-D0YzUv6F.js';
import './GeometryUtils-CPFWhE16.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BJBpQdDc.js';
import './Program-CCNgB-lx.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BrMAlzFt.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BWL523YC.js';
import './WGLContainer-Dqaq54qt.js';
import './ProgramTemplate-DgpCyeZj.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D0YTduxF.js';
import './floatRGBA-B4q0qTQy.js';
import './FeatureCommandQueue-F2WPm__e.js';
import './HighlightCounter-DFDTN0bU.js';
import './popupUtils-PY7waqgF.js';
import './RefreshableLayerView-BpkyKCZU.js';

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
