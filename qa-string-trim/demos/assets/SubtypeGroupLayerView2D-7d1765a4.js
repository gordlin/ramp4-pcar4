import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-8956256f.js';
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
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
