import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-286bff4f.js';
import { a } from './BitmapContainer-558c2e58.js';
import { m as m$1, u } from './LayerView-2864aa40.js';
import { v } from './ExportStrategy-69bf437b.js';
import { i } from './RefreshableLayerView-deae7a58.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-d36777bf.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-b0b0251e.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-445382d4.js';
import './Program-8c1e758a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-53151e01.js';
import './Container-2114797c.js';
import './highlightReasons-1db4b1ec.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-4b74680e.js';
import './Bitmap-12c0b92c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
