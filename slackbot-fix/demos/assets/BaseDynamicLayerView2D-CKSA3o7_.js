import { af as b$1, H as s$1, aW as e, aX as y, aY as c } from './main-DpOWVR1F.js';
import { a } from './BitmapContainer-bCQOxwkq.js';
import { m as m$1, u } from './LayerView-Do182Hd-.js';
import { v } from './ExportStrategy-Bk8I8SOP.js';
import { i } from './RefreshableLayerView-BnL0qXhC.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-DCXw91Xc.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-0ig_RgXL.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-QlTrS6N7.js';
import './Program-5oogqi-H.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-Dbyi00gT.js';
import './Container-CKjTCrE8.js';
import './highlightReasons-CwpKaacA.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-Ba-lGY9L.js';
import './Bitmap-cLZH8GdD.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
