import { z as ze, i as ii, C as g, ar as pt, ak as Ft, am as de } from './Theme-D78eiVV-.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class n extends ze{_beforeChanged(){super._beforeChanged(),(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))&&(this._clear=!0);}_draw(){let e=this.width(),a=this.height(),r=e,n=a,o=r/Math.abs(e),h=n/Math.abs(a);if(g(r)&&g(n)){let e=Math.min(r,n)/2,s=pt(this.get("cornerRadiusTL",8),e),a=pt(this.get("cornerRadiusTR",8),e),l=pt(this.get("cornerRadiusBR",8),e),c=pt(this.get("cornerRadiusBL",8),e),d=Math.min(Math.abs(r/2),Math.abs(n/2));s=de(s,0,d),a=de(a,0,d),l=de(l,0,d),c=de(c,0,d);const u=this._display;u.moveTo(s*o,0),u.lineTo(r-a*o,0),a>0&&u.arcTo(r,0,r,a*h,a),u.lineTo(r,n-l*h),l>0&&u.arcTo(r,n,r-l*o,n,l),u.lineTo(c*o,n),c>0&&u.arcTo(0,n,0,n-c*h,c),u.lineTo(0,s*h),s>0&&u.arcTo(0,0,s*o,0,s),u.closePath();}}}Object.defineProperty(n,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"}),Object.defineProperty(n,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ze.classNames.concat([n.className])});class o extends ii{_afterNew(){this._settings.themeTags=Ft(this._settings.themeTags,["button"]),super._afterNew(),this._settings.background||this.set("background",n.new(this._root,{themeTags:Ft(this._settings.themeTags,["background"])})),this.setPrivate("trustBounds",!0);}_prepareChildren(){if(super._prepareChildren(),this.isDirty("icon")){const e=this._prevSettings.icon,s=this.get("icon");s!==e&&(this._disposeProperty("icon"),e&&e.dispose(),s&&this.children.push(s),this._prevSettings.icon=s);}if(this.isDirty("label")){const e=this._prevSettings.label,s=this.get("label");s!==e&&(this._disposeProperty("label"),e&&e.dispose(),s&&this.children.push(s),this._prevSettings.label=s);}}}Object.defineProperty(o,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"}),Object.defineProperty(o,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ii.classNames.concat([o.className])});

export { n, o };
