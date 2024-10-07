import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-c1a54cbf.js';
import { a } from './BitmapContainer-cc3c6ab6.js';
import { m as m$1, u } from './LayerView-5d22a49e.js';
import { v } from './ExportStrategy-93db589e.js';
import { i } from './RefreshableLayerView-1dbddc68.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-dde6a06d.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-d72162d2.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-f0adabc3.js';
import './Program-e50ef60c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-02cb9116.js';
import './Container-d19ec178.js';
import './highlightReasons-e23744c4.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-0580b432.js';
import './Bitmap-91f75f52.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
