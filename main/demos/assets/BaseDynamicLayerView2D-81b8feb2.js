import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-069f4a5d.js';
import { a } from './BitmapContainer-512bc884.js';
import { m as m$1, u } from './LayerView-1a28ec73.js';
import { v } from './ExportStrategy-d8d5e443.js';
import { i } from './RefreshableLayerView-f828277f.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-34f82b62.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-b8b0d935.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-0c973e28.js';
import './Program-4af7aacf.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-e77c3c50.js';
import './Container-1bd58a8f.js';
import './highlightReasons-3fd38fa8.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-bfea4cb9.js';
import './Bitmap-87b73e32.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
