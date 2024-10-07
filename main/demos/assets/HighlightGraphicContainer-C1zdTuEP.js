import { aW as e, aY as c } from './main-SY5HUWvs.js';
import { E, a as a$1, R } from './Container-G1sUZ8Sn.js';
import { i } from './AGraphicContainer-CArp3U3y.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===E.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),a$1(r,!0,(r=>{this._renderChildren(r,R.All);})));}};a=e([c("esri.views.2d.layers.support.HighlightGraphicContainer")],a);const h=a;

export { h };
