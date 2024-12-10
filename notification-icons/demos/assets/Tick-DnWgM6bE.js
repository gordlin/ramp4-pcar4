import { eT as n } from './main-ClOnxQFK.js';
import { i as ii, b as Ke, az as Me, w as w$1, N as N$1, aA as ee, r, aB as B, C as g$1, a3 as zt, ad as e, aC as Zt, al as ri, aD as ie, a0 as y$1 } from './Theme-D-FM2_es.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class b extends ee{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0});}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e);}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t);}_onSetIndex(e,t,s){this.processor&&this.processor.processRow(s),super._onSetIndex(e,t,s);}}class g extends Me{constructor(e,t,s){super(s),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty();}markDirty(){this.component.markDirtyValues(this);}_startAnimation(){this.component._root._addAnimation(this);}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose();}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e);}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e);}isHidden(){return !this.get("visible")}}class _ extends ii{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new b}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1});}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e;}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef();}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll((e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)w$1(t,(e=>{e.dispose();})),t.length=0,this._onDataClear();else if("push"===e.type){const s=new g(this,e.newValue,this._makeDataItem(e.newValue));t.push(s),this.processDataItem(s);}else if("setIndex"===e.type){const s=t[e.index],i=this._makeDataItem(e.newValue);s.bullets&&0==s.bullets.length&&(s.bullets=void 0),N$1(i).forEach((e=>{s.animate({key:e,to:i[e],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")});})),s.dataContext=e.newValue;}else if("insertIndex"===e.type){const s=new g(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,s),this.processDataItem(s);}else if("removeIndex"===e.type){t[e.index].dispose(),t.splice(e.index,1);}else {if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const s=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,s);}}this._afterDataChange();})));}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},w$1(this.valueFields,(e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"});}))),this.fields&&(this._fields=[],this._fieldsF={},w$1(this.fields,(e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field");})));}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&w$1(this._valueFields,(s=>{const i=this.get(this._valueFieldsF[s].fieldKey);t[s]=e[i],t[this._valueFieldsF[s].workingKey]=t[s];})),this._fields&&w$1(this._fields,(s=>{const i=this.get(this._fieldsF[s]);t[s]=e[i];})),t}makeDataItem(e){let t=new g(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(t,s){return n(this,void 0,void 0,(function*(){t.set("visible",!0);}))}hideDataItem(t,s){return n(this,void 0,void 0,(function*(){t.set("visible",!1);}))}_clearDirty(){super._clearDirty(),this._valuesDirty=!1;}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1;}this.inited=!0;}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0;}_markDirtyGroup(){this._dataGrouped=!1;}markDirtySize(){this._sizeDirty=!0,this.markDirty();}}function v(e){return new Promise(((t,s)=>{setTimeout(t,e);}))}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ii.classNames.concat([_.className])});let y={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function w(e,t){return null==t&&(t=1),y[e]*t}function I(e,t,s,i,a,l,n){if(!n||a){let n=0;switch(a||"millisecond"==t||(n=e.getTimezoneOffset(),e.setUTCMinutes(e.getUTCMinutes()-n)),t){case"day":let t=e.getUTCDate();if(s>1){if(l){l=I(l,"day",1);let t=e.getTime()-l.getTime(),i=Math.floor(t/w("day")/s),a=w("day",i*s);e.setTime(l.getTime()+a-n*w("minute"));}}else e.setUTCDate(t);e.setUTCHours(0,0,0,0);break;case"second":let a=e.getUTCSeconds();s>1&&(a=Math.floor(a/s)*s),e.setUTCSeconds(a,0);break;case"millisecond":if(1==s)return e;let o=e.getUTCMilliseconds();o=Math.floor(o/s)*s,e.setUTCMilliseconds(o);break;case"hour":let h=e.getUTCHours();s>1&&(h=Math.floor(h/s)*s),e.setUTCHours(h,0,0,0);break;case"minute":let u=e.getUTCMinutes();s>1&&(u=Math.floor(u/s)*s),e.setUTCMinutes(u,0,0);break;case"month":let d=e.getUTCMonth();s>1&&(d=Math.floor(d/s)*s),e.setUTCMonth(d,1),e.setUTCHours(0,0,0,0);break;case"year":let c=e.getUTCFullYear();s>1&&(c=Math.floor(c/s)*s),e.setUTCFullYear(c,0,1),e.setUTCHours(0,0,0,0);break;case"week":let m=e.getUTCDate(),p=e.getUTCDay();g$1(i)||(i=1),m=p>=i?m-p+i:m-(7+p)+i,e.setUTCDate(m),e.setUTCHours(0,0,0,0);}if(!a&&"millisecond"!=t&&(e.setUTCMinutes(e.getUTCMinutes()+n),"day"==t||"week"==t||"month"==t||"year"==t)){let t=e.getTimezoneOffset();if(t!=n){let s=t-n;e.setUTCMinutes(e.getUTCMinutes()+s);}}return e}{if(isNaN(e.getTime()))return e;let o=n.offsetUTC(e),h=e.getTimezoneOffset(),u=n.parseDate(e),d=u.year,c=u.month,m=u.day,p=u.hour,f=u.minute,b=u.second,g=u.millisecond,_=u.weekday,v=o-h;switch(t){case"day":if(s>1&&l){l=I(l,"day",1,i,a,void 0,n);let t=e.getTime()-l.getTime(),r=Math.floor(t/w("day")/s),o=w("day",r*s);e.setTime(l.getTime()+o),u=n.parseDate(e),d=u.year,c=u.month,m=u.day;}p=0,f=v,b=0,g=0;break;case"second":f+=v,s>1&&(b=Math.floor(b/s)*s),g=0;break;case"millisecond":f+=v,s>1&&(g=Math.floor(g/s)*s);break;case"hour":s>1&&(p=Math.floor(p/s)*s),f=v,b=0,g=0;break;case"minute":s>1&&(f=Math.floor(f/s)*s),f+=v,b=0,g=0;break;case"month":s>1&&(c=Math.floor(c/s)*s),m=1,p=0,f=v,b=0,g=0;break;case"year":s>1&&(d=Math.floor(d/s)*s),c=0,m=1,p=0,f=v,b=0,g=0;break;case"week":g$1(i)||(i=1),m=_>=i?m-_+i:m-(7+_)+i,p=0,f=v,b=0,g=0;}let y=(e=new Date(d,c,m,p,f,b,g)).getTimezoneOffset(),D=n.offsetUTC(e)-y;return D!=v&&e.setTime(e.getTime()+6e4*(D-v)),e}}class D extends _{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new ee}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:ii.new(this._root,{width:r,height:r,position:"absolute"})});}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll((e=>{if("clear"===e.type)this._handleBullets(this.dataItems);else if("push"===e.type)this._handleBullets(this.dataItems);else if("setIndex"===e.type)this._handleBullets(this.dataItems);else if("insertIndex"===e.type)this._handleBullets(this.dataItems);else if("removeIndex"===e.type)this._handleBullets(this.dataItems);else {if("moveIndex"!==e.type)throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems);}})));}_dispose(){this.bulletsContainer.dispose(),super._dispose();}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){w$1(e,(e=>{const t=e.bullets;t&&(w$1(t,(e=>{e.dispose();})),e.bullets=void 0);})),this.markDirtyValues();}getDataItemById(e){return B(this.dataItems,(t=>t.get("id")==e))}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each((t=>{this._makeBullet(e,t);})));}_shouldMakeBullet(e){return !0}_makeBullet(e,t,s){const i=t(this._root,this,e);return i&&(i._index=s,this._makeBulletReal(e,i)),i}_makeBulletReal(e,t){let s=t.get("sprite");s&&(s._setDataItem(e),s.setRaw("position","absolute"),this.bulletsContainer.children.push(s)),t.series=this,e.bullets.push(t);}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t);}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1;}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const e=this.getPrivate("baseValueSeries");e&&this._disposers.push(e.onPrivate("startIndex",(()=>{this.markDirtyValues();})));}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,0!=e&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(0===e&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let e=this.get("tooltip");e&&(e.hide(0),e.set("tooltipTarget",this));}if(this.isDirty("fill")||this.isDirty("stroke")){let e;const t=this.get("legendDataItem");if(t&&(e=t.get("markerRectangle"),e&&this.isVisible())){if(this.isDirty("stroke")){let t=this.get("stroke");e.set("stroke",t);}if(this.isDirty("fill")){let t=this.get("fill");e.set("fill",t);}}this.updateLegendMarker(void 0);}if(this.bullets.length>0){let e=this.startIndex(),t=this.endIndex();t<this.dataItems.length&&t++;for(let s=e;s<t;s++){let e=this.dataItems[s];e.bullets||this._makeBullets(e);}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let s=this._valueFields;if(!s)throw new Error("No value fields are set for the series.");const i={},l={},r={},n={},o={},h={},u={},d={},c={};w$1(s,(e=>{i[e]=0,l[e]=0,r[e]=0;})),w$1(s,(s=>{let a=s+"Change",m=s+"ChangePercent",p=s+"ChangePrevious",f=s+"ChangePreviousPercent",b=s+"ChangeSelection",g=s+"ChangeSelectionPercent",_="valueY";"valueX"!=s&&"openValueX"!=s&&"lowValueX"!=s&&"highValueX"!=s||(_="valueX");const v=this.getPrivate("baseValueSeries"),y=this.getPrivate("adjustedStartIndex",e);for(let w=y;w<t;w++){const t=this.dataItems[w];let y=t.get(s);null!=y&&(r[s]++,i[s]+=y,l[s]+=Math.abs(y),d[s]=i[s]/r[s],(n[s]>y||null==n[s])&&(n[s]=y),(o[s]<y||null==o[s])&&(o[s]=y),u[s]=y,null==h[s]&&(h[s]=y,c[s]=y,v&&(h[_]=v._getBase(_))),0===e&&(t.setRaw(a,y-h[_]),t.setRaw(m,(y-h[_])/h[_]*100)),t.setRaw(p,y-c[_]),t.setRaw(f,(y-c[_])/c[_]*100),t.setRaw(b,y-h[_]),t.setRaw(g,(y-h[_])/h[_]*100),c[s]=y);}if(t<this.dataItems.length-1){const e=this.dataItems[t];let i=e.get(s);e.setRaw(p,i-c[_]),e.setRaw(f,(i-c[_])/c[_]*100),e.setRaw(b,i-h[_]),e.setRaw(g,(i-h[_])/h[_]*100);}e>0&&e--,delete c[s];for(let t=e;t<y;t++){const e=this.dataItems[t];let i=e.get(s);null==c[s]&&(c[s]=i),null!=i&&(e.setRaw(p,i-c[_]),e.setRaw(f,(i-c[_])/c[_]*100),e.setRaw(b,i-h[_]),e.setRaw(g,(i-h[_])/h[_]*100),c[s]=i);}})),w$1(s,(e=>{this.setPrivate(e+"AverageSelection",d[e]),this.setPrivate(e+"CountSelection",r[e]),this.setPrivate(e+"SumSelection",i[e]),this.setPrivate(e+"AbsoluteSumSelection",l[e]),this.setPrivate(e+"LowSelection",n[e]),this.setPrivate(e+"HighSelection",o[e]),this.setPrivate(e+"OpenSelection",h[e]),this.setPrivate(e+"CloseSelection",u[e]);})),0===e&&t===this.dataItems.length&&w$1(s,(e=>{this.setPrivate(e+"Average",d[e]),this.setPrivate(e+"Count",r[e]),this.setPrivate(e+"Sum",i[e]),this.setPrivate(e+"AbsoluteSum",l[e]),this.setPrivate(e+"Low",n[e]),this.setPrivate(e+"High",o[e]),this.setPrivate(e+"Open",h[e]),this.setPrivate(e+"Close",u[e]);}));}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e$1=this.get("heatRules");if(this._valuesDirty&&e$1&&e$1.length>0&&w$1(e$1,(e$1=>{const t=e$1.minValue||this.getPrivate(e$1.dataField+"Low")||0,s=e$1.maxValue||this.getPrivate(e$1.dataField+"High")||0;w$1(e$1.target._entities,(i=>{const a=i.dataItem.get(e$1.dataField);if(g$1(a))if(e$1.customFunction)e$1.customFunction.call(this,i,t,s,a);else {let l,n;l=e$1.logarithmic?(Math.log(a)*Math.LOG10E-Math.log(t)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(t)*Math.LOG10E):(a-t)/(s-t),!g$1(a)||g$1(l)&&Math.abs(l)!=1/0||(l=.5),g$1(e$1.min)?n=e$1.min+(e$1.max-e$1.min)*l:e$1.min instanceof zt?n=zt.interpolate(l,e$1.min,e$1.max):e$1.min instanceof e&&(n=Zt(l,e$1.min,e$1.max)),i.set(e$1.key,n);const o=i.states;if(o){const t=o.lookup("default");t&&t.set(e$1.key,n);}}else {e$1.neutral&&i.set(e$1.key,e$1.neutral);const t=i.states;if(t){const s=t.lookup("default");s&&s.set(e$1.key,e$1.neutral);}}}));})),this.get("visible")){let e=this.dataItems.length,t=this.startIndex(),s=this.endIndex();s<e&&s++,t>0&&t--;for(let i=0;i<t;i++)this._hideBullets(this.dataItems[i]);for(let i=t;i<s;i++)this._positionBullets(this.dataItems[i]);for(let i=s;i<e;i++)this._hideBullets(this.dataItems[i]);}}_positionBullets(e){e.bullets&&w$1(e.bullets,(e=>{this._positionBullet(e);const t=e.get("sprite");e.get("dynamic")&&(t&&(t._markDirtyKey("fill"),t.markDirtySize()),t instanceof ii&&t.walkChildren((e=>{e._markDirtyKey("fill"),e.markDirtySize(),e instanceof ri&&e.text.markDirtyText();}))),t instanceof ri&&t.get("populateText")&&t.text.markDirtyText();}));}_hideBullets(e){e.bullets&&w$1(e.bullets,(e=>{let t=e.get("sprite");t&&t.setPrivate("visible",!1);}));}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer);}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e);}disposeDataItem(e){const t=e.bullets;t&&w$1(t,(e=>{e.dispose();}));}_getItemReaderLabel(){return ""}showDataItem(t,s){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return n(this,void 0,void 0,(function*(){const e=[i.showDataItem.call(this,t,s)],l=t.bullets;l&&w$1(l,(t=>{const i=t.get("sprite");i&&e.push(i.show(s));})),yield Promise.all(e);}))}hideDataItem(t,s){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return n(this,void 0,void 0,(function*(){const e=[i.hideDataItem.call(this,t,s)],l=t.bullets;l&&w$1(l,(t=>{const i=t.get("sprite");i&&e.push(i.hide(s));})),yield Promise.all(e);}))}_sequencedShowHide(t,s){return n(this,void 0,void 0,(function*(){if(this.get("sequencedInterpolation"))if(g$1(s)||(s=this.get("interpolationDuration",0)),s>0){const i=this.startIndex(),a=this.endIndex();yield Promise.all(y$1(this.dataItems,((l,r)=>n(this,void 0,void 0,(function*(){let e=s||0;(r<i-10||r>a+10)&&(e=0);let n=this.get("sequencedDelay",0)+e/(a-i);yield v(n*(r-i)),t?yield this.showDataItem(l,e):yield this.hideDataItem(l,e);})))));}else yield Promise.all(y$1(this.dataItems,(e=>t?this.showDataItem(e,0):this.hideDataItem(e,0))));}))}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const s=t.get("valueLabel");if(s){const t=s.text;let i="";s._setDataItem(e),i=this.get("legendValueText",t.get("text","")),s.set("text",i),t.markDirtyText();}const i=t.get("label");if(i){const t=i.text;let s="";i._setDataItem(e),s=this.get("legendLabelText",t.get("text","")),i.set("text",s),t.markDirtyText();}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide();}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function x(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];if(i.length>0){let t=i[0];if(t.length>0){let s=t[0];e.moveTo(s.x,s.y);for(let t=0,a=i.length;t<a;t++)C(e,i[t]);}}}}function C(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];e.lineTo(i.x,i.y);}}Object.defineProperty(D,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(D,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:_.classNames.concat([D.className])});class P extends Ke{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0);}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let t=e[0];this._display.moveTo(t.x,t.y),x(this._display,[[e]]);}else if(t)x(this._display,t);else if(!this.get("draw")){let e=this.width(),t=this.height();this._display.moveTo(0,0),this._display.lineTo(e,t);}}}}function k(e){return function(){return e}}Object.defineProperty(P,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(P,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Ke.classNames.concat([P.className])});const T=Math.PI,M=2*T,O=1e-6,$=M-O;function j(e){this._+=e[0];for(let t=1,s=e.length;t<s;++t)this._+=arguments[t]+e[t];}function S(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return j;const s=10**t;return function(e){this._+=e[0];for(let t=1,i=e.length;t<i;++t)this._+=Math.round(arguments[t]*s)/s+e[t];}}class F{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?j:S(e);}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`;}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`);}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`;}quadraticCurveTo(e,t,s,i){this._append`Q${+e},${+t},${this._x1=+s},${this._y1=+i}`;}bezierCurveTo(e,t,s,i,a,l){this._append`C${+e},${+t},${+s},${+i},${this._x1=+a},${this._y1=+l}`;}arcTo(e,t,s,i,a){if(e=+e,t=+t,s=+s,i=+i,(a=+a)<0)throw new Error(`negative radius: ${a}`);let l=this._x1,r=this._y1,n=s-e,o=i-t,h=l-e,u=r-t,d=h*h+u*u;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(d>O)if(Math.abs(u*n-o*h)>O&&a){let c=s-l,m=i-r,p=n*n+o*o,f=c*c+m*m,b=Math.sqrt(p),g=Math.sqrt(d),_=a*Math.tan((T-Math.acos((p+d-f)/(2*b*g)))/2),v=_/g,y=_/b;Math.abs(v-1)>O&&this._append`L${e+v*h},${t+v*u}`,this._append`A${a},${a},0,0,${+(u*c>h*m)},${this._x1=e+y*n},${this._y1=t+y*o}`;}else this._append`L${this._x1=e},${this._y1=t}`;else;}arc(e,t,s,i,a,l){if(e=+e,t=+t,l=!!l,(s=+s)<0)throw new Error(`negative radius: ${s}`);let r=s*Math.cos(i),n=s*Math.sin(i),o=e+r,h=t+n,u=1^l,d=l?i-a:a-i;null===this._x1?this._append`M${o},${h}`:(Math.abs(this._x1-o)>O||Math.abs(this._y1-h)>O)&&this._append`L${o},${h}`,s&&(d<0&&(d=d%M+M),d>$?this._append`A${s},${s},0,1,${u},${e-r},${t-n}A${s},${s},0,1,${u},${this._x1=o},${this._y1=h}`:d>O&&this._append`A${s},${s},0,${+(d>=T)},${u},${this._x1=e+s*Math.cos(a)},${this._y1=t+s*Math.sin(a)}`);}rect(e,t,s,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${s=+s}v${+i}h${-s}Z`;}toString(){return this._}}function V(e){let t=3;return e.digits=function(s){if(!arguments.length)return t;if(null==s)t=null;else {const e=Math.floor(s);if(!(e>=0))throw new RangeError(`invalid digits: ${s}`);t=e;}return e},()=>new F(t)}class N extends ii{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(ii.new(this._root,{width:r,height:r,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:ii.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:r,height:r})});}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ii.classNames.concat([N.className])});class R extends N{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:ii.new(this._root,{width:r,height:r,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new ie});}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll((t=>{if("clear"===t.type){w$1(t.oldValues,(e=>{this._removeSeries(e);}));const e=this.get("colors");e&&e.reset();}else if("push"===t.type)e.moveValue(t.newValue),this._processSeries(t.newValue);else if("setIndex"===t.type)e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("insertIndex"===t.type)e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("removeIndex"===t.type)this._removeSeries(t.oldValue);else {if("moveIndex"!==t.type)throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value);}})));}_processSeries(e){e.chart=this,e._placeBulletsContainer(this);}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer());}}Object.defineProperty(R,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(R,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:N.classNames.concat([R.className])});class U extends P{}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:P.classNames.concat([U.className])});

export { D, I, R, U, V, _, g, k };
