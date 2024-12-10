import { af as b$1, H as s$1, aW as e, aX as y, aY as c } from './main-BtYHawlJ.js';
import { a } from './BitmapContainer-CEgPnlGc.js';
import { m as m$1, u } from './LayerView-DugfY1NR.js';
import { v } from './ExportStrategy-nrLarfk9.js';
import { i } from './RefreshableLayerView-C_OGGpRC.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-DXKeRDRf.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-CWewWHrx.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-C9RaZhhN.js';
import './Program-DWP4U_eW.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-CPhtTd6j.js';
import './Container-ClmJlGj6.js';
import './highlightReasons-piG1EPJA.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-B_OmKtHR.js';
import './Bitmap-CmJmSXNH.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };