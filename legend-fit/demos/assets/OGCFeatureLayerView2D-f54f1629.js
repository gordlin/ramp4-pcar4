import { aX as e, aY as y, aZ as c } from './main-b051658a.js';
import { X } from './FeatureLayerView2D-88cae373.js';
import './preload-helper-a4975f27.js';
import './Container-ef13f0e0.js';
import './highlightReasons-a2269d3e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-69c3fea5.js';
import './LayerView-fc13a2d5.js';
import './TechniqueInstance-3add0b94.js';
import './UpdateTracking2D-f81eb4f4.js';
import './TurboLine-bf994b35.js';
import './enums-d24bcbbf.js';
import './earcut-501a169f.js';
import './GeometryUtils-0e3793e3.js';
import './Rect-09e0f861.js';
import './LabelMetric-e9dcfdb9.js';
import './Program-2fa83996.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-8a3182ff.js';
import './constants-412c3a33.js';
import './TileContainer-4ac8fded.js';
import './WGLContainer-3bf30a5b.js';
import './ProgramTemplate-f2041862.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-67d51fbc.js';
import './floatRGBA-576033d5.js';
import './FeatureCommandQueue-cfbbf52d.js';
import './HighlightCounter-558324a9.js';
import './popupUtils-875ecd58.js';
import './RefreshableLayerView-54c56b24.js';

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
