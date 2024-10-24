import { af as b$1, H as s$1, aW as e, aX as y, aY as c } from './main-C39fOgt6.js';
import { a } from './BitmapContainer-DJ_35mRe.js';
import { m as m$1, u } from './LayerView-BZZnypGf.js';
import { v } from './ExportStrategy-BVfwLbr7.js';
import { i } from './RefreshableLayerView-CZtoMwWt.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-BmthR8E8.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-BhLiIIpn.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-_PUwobm2.js';
import './Program-BVPS4QBc.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-Bbdh-1vb.js';
import './Container-GGxCmWWR.js';
import './highlightReasons-peID8D6K.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-ku44kUUK.js';
import './Bitmap-B394Eewx.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
