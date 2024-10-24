import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-7a68adbe.js';
import { a } from './BitmapContainer-2d97bf72.js';
import { m as m$1, u } from './LayerView-0a5f6b27.js';
import { v } from './ExportStrategy-6e65919c.js';
import { i } from './RefreshableLayerView-10294cfb.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-27daf205.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-5317cf7f.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-f6538227.js';
import './Program-b5227155.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-808a39e8.js';
import './Container-e88530a5.js';
import './highlightReasons-d4860bae.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-3a443dc4.js';
import './Bitmap-69a11fb3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
