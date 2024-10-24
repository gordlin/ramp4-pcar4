import { aX as e, aY as y, aZ as c } from './main-8956256f.js';
import { X } from './FeatureLayerView2D-5d3990be.js';
import './preload-helper-a4975f27.js';
import './Container-9058c855.js';
import './highlightReasons-84a84780.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-468aed99.js';
import './LayerView-4c71a3bf.js';
import './TechniqueInstance-8f6d6f2f.js';
import './UpdateTracking2D-ed6e6fa3.js';
import './TurboLine-27be2016.js';
import './enums-d24bcbbf.js';
import './earcut-f248c730.js';
import './GeometryUtils-4a543686.js';
import './Rect-09e0f861.js';
import './LabelMetric-cecde990.js';
import './Program-f7dad41b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-364f0155.js';
import './constants-412c3a33.js';
import './TileContainer-95424c66.js';
import './WGLContainer-ae615ef4.js';
import './ProgramTemplate-89960743.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-0cf56b00.js';
import './floatRGBA-eefcd805.js';
import './FeatureCommandQueue-1a3716b9.js';
import './HighlightCounter-ba036f22.js';
import './popupUtils-feb47f8f.js';
import './RefreshableLayerView-e6206bd0.js';

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
