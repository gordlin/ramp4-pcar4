import { fb as u$1 } from './main-DpOWVR1F.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t=512;var i$1,s$1;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon";}(i$1||(i$1={}));let h$1 = class h{constructor(t,i){this.x=t,this.y=i;}clone(){return new h(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){return this.x=t,this.y=i,this}normalize(){const t=this.x,i=this.y,s=Math.sqrt(t*t+i*i);return this.x/=s,this.y/=s,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,i){return this.x+=t,this.y+=i,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}assignSub(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}rotate(t,i){const s=this.x,h=this.y;return this.x=s*t-h*i,this.y=s*i+h*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,i){const s=i.x-t.x,h=i.y-t.y;return Math.sqrt(s*s+h*h)}static add(t,i){return new h(t.x+i.x,t.y+i.y)}static sub(t,i){return new h(t.x-i.x,t.y-i.y)}};class n{constructor(t,i,s){this.ratio=t,this.x=i,this.y=s;}}let e$1 = class e{constructor(i,s,h,n=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=e,this._tileSize=t*n,this._dz=i,this._yPos=s,this._xPos=h;}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent));}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const s=t>>this._dz;i>s&&(i=s),this._margin=i,this._xmin=s*this._xPos-i,this._ymin=s*this._yPos-i,this._xmax=this._xmin+s+2*i,this._ymax=this._ymin+s+2*i;}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0;}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new h$1(t,i),this._firstPt=new h$1(t,i),this._dist=0;}lineTo(t,i){const s=this._isIn(t,i),e=new h$1(t,i),_=h$1.distance(this._prevPt,e);let x,l,y,a,r,o,u,m;if(s)this._prevIsIn?this._lineTo(t,i,!0):(x=this._prevPt,l=e,y=this._intersect(l,x),this._start=this._dist+_*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(l.x,l.y,!0));else if(this._prevIsIn)l=this._prevPt,x=e,y=this._intersect(l,x),this._lineTo(y.x,y.y,!0),this._lineTo(x.x,x.y,!1);else {const t=this._prevPt,i=e;if(t.x<=this._xmin&&i.x<=this._xmin||t.x>=this._xmax&&i.x>=this._xmax||t.y<=this._ymin&&i.y<=this._ymin||t.y>=this._ymax&&i.y>=this._ymax)this._lineTo(i.x,i.y,!1);else {const s=[];if((t.x<this._xmin&&i.x>this._xmin||t.x>this._xmin&&i.x<this._xmin)&&(a=(this._xmin-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this._ymin?o=!1:m>=this._ymax?o=!0:s.push(new n(a,this._xmin,m))),(t.x<this._xmax&&i.x>this._xmax||t.x>this._xmax&&i.x<this._xmax)&&(a=(this._xmax-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this._ymin?o=!1:m>=this._ymax?o=!0:s.push(new n(a,this._xmax,m))),(t.y<this._ymin&&i.y>this._ymin||t.y>this._ymin&&i.y<this._ymin)&&(a=(this._ymin-t.y)/(i.y-t.y),u=t.x+a*(i.x-t.x),u<=this._xmin?r=!1:u>=this._xmax?r=!0:s.push(new n(a,u,this._ymin))),(t.y<this._ymax&&i.y>this._ymax||t.y>this._ymax&&i.y<this._ymax)&&(a=(this._ymax-t.y)/(i.y-t.y),u=t.x+a*(i.x-t.x),u<=this._xmin?r=!1:u>=this._xmax?r=!0:s.push(new n(a,u,this._ymax))),0===s.length)r?o?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):o?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this._start=this._dist+_*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else {this._start=this._dist+_*s[0].ratio;for(let t=0;t<s.length;t++)this._lineTo(s[t].x,s[t].y,!0);}this._lineTo(i.x,i.y,!1);}}this._dist+=_,this._prevIsIn=s,this._prevPt=e;}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this._line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h;}}result(t=!0){return this._pushLine(),0===this._lines.length?null:(this._type===i$1.Polygon&&t&&x$1.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==i$1.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,s=t.length;if(0===s)return null;const h=[];for(let i=0;i<s;i++)h.push({line:t[i],start:this._starts[i]||0});return h}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let s,n,e;if(i.x>=this._xmin&&i.x<=this._xmax)n=i.y<=this._ymin?this._ymin:this._ymax,e=(n-t.y)/(i.y-t.y),s=t.x+e*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)s=i.x<=this._xmin?this._xmin:this._xmax,e=(s-t.x)/(i.x-t.x),n=t.y+e*(i.y-t.y);else {n=i.y<=this._ymin?this._ymin:this._ymax,s=i.x<=this._xmin?this._xmin:this._xmax;const h=(s-t.x)/(i.x-t.x),_=(n-t.y)/(i.y-t.y);h<_?(e=h,n=t.y+h*(i.y-t.y)):(e=_,s=t.x+_*(i.x-t.x));}return this._r=e,new h$1(s,n)}_pushLine(){this._line&&(this._type===i$1.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i$1.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i$1.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0;}_moveTo(t,s,n){this._type!==i$1.Polygon?n&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new h$1(t,s))):(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new h$1(t,s)),this._isH=!1,this._isV=!1);}_lineTo(t,s,n){let e,_;if(this._type!==i$1.Polygon)if(n){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(e=this._line[this._line.length-1],e.equals(t,s)))return;this._line.push(new h$1(t,s));}else this._line&&this._line.length>0&&this._pushLine();else if(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){e=this._line[this._line.length-1];const i=e.x===t,n=e.y===s;if(i&&n)return;this._isH&&i||this._isV&&n?(e.x=t,e.y=s,_=this._line[this._line.length-2],_.x===t&&_.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(_=this._line[this._line.length-2],this._isH=_.x===t,this._isV=_.y===s)):(this._isH=_.x===t,this._isV=_.y===s)):(this._line.push(new h$1(t,s)),this._isH=i,this._isV=n);}else this._line.push(new h$1(t,s));}};class _{setExtent(t){this._ratio=4096===t?1:4096/t;}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null;}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const s=this._ratio;this._line.push(new h$1(t*s,i*s));}lineTo(t,i){const s=this._ratio;this._line.push(new h$1(t*s,i*s));}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0]);}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(t){t[t.sideLeft=0]="sideLeft",t[t.sideRight=1]="sideRight",t[t.sideTop=2]="sideTop",t[t.sideBottom=3]="sideBottom";}(s$1||(s$1={}));let x$1 = class x{static simplify(t,i,h){if(!h)return;const n=-i,e=t+i,_=-i,l=t+i,y=[],a=[],r=h.length;for(let x=0;x<r;++x){const t=h[x];if(!t||t.length<2)continue;let i,r=t[0];const o=t.length;for(let h=1;h<o;++h)i=t[h],r.x===i.x&&(r.x<=n&&(r.y>i.y?(y.push(x),y.push(h),y.push(s$1.sideLeft),y.push(-1)):(a.push(x),a.push(h),a.push(s$1.sideLeft),a.push(-1))),r.x>=e&&(r.y<i.y?(y.push(x),y.push(h),y.push(s$1.sideRight),y.push(-1)):(a.push(x),a.push(h),a.push(s$1.sideRight),a.push(-1)))),r.y===i.y&&(r.y<=_&&(r.x<i.x?(y.push(x),y.push(h),y.push(s$1.sideTop),y.push(-1)):(a.push(x),a.push(h),a.push(s$1.sideTop),a.push(-1))),r.y>=l&&(r.x>i.x?(y.push(x),y.push(h),y.push(s$1.sideBottom),y.push(-1)):(a.push(x),a.push(h),a.push(s$1.sideBottom),a.push(-1)))),r=i;}if(0===y.length||0===a.length)return;x.fillParent(h,a,y),x.fillParent(h,y,a);const o=[];x.calcDeltas(o,a,y),x.calcDeltas(o,y,a),x.addDeltas(o,h);}static fillParent(t,i,h){const n=h.length,e=i.length;for(let _=0;_<e;_+=4){const e=i[_],x=i[_+1],y=i[_+2],a=t[e][x-1],r=t[e][x];let o=8092,u=-1;for(let i=0;i<n;i+=4){if(h[i+2]!==y)continue;const n=h[i],e=h[i+1],_=t[n][e-1],x=t[n][e];switch(y){case s$1.sideLeft:case s$1.sideRight:if(l$1(a.y,_.y,x.y)&&l$1(r.y,_.y,x.y)){const t=Math.abs(x.y-_.y);t<o&&(o=t,u=i);}break;case s$1.sideTop:case s$1.sideBottom:if(l$1(a.x,_.x,x.x)&&l$1(r.x,_.x,x.x)){const t=Math.abs(x.x-_.x);t<o&&(o=t,u=i);}}}i[_+3]=u;}}static calcDeltas(t,i,s){const h=i.length;for(let n=0;n<h;n+=4){const h=[],e=x.calcDelta(n,i,s,h);t.push(i[n]),t.push(i[n+1]),t.push(i[n+2]),t.push(e);}}static calcDelta(t,i,s,h){const n=i[t+3];if(-1===n)return 0;const e=h.length;return e>1&&h[e-2]===n?0:(h.push(n),x.calcDelta(n,s,i,h)+1)}static addDeltas(t,i){const h=t.length;let n=0;for(let s=0;s<h;s+=4){const i=t[s+3];i>n&&(n=i);}for(let e=0;e<h;e+=4){const h=i[t[e]],_=t[e+1],x=n-t[e+3];switch(t[e+2]){case s$1.sideLeft:h[_-1].x-=x,h[_].x-=x,1===_&&(h[h.length-1].x-=x),_===h.length-1&&(h[0].x-=x);break;case s$1.sideRight:h[_-1].x+=x,h[_].x+=x,1===_&&(h[h.length-1].x+=x),_===h.length-1&&(h[0].x+=x);break;case s$1.sideTop:h[_-1].y-=x,h[_].y-=x,1===_&&(h[h.length-1].y-=x),_===h.length-1&&(h[0].y-=x);break;case s$1.sideBottom:h[_-1].y+=x,h[_].y+=x,1===_&&(h[h.length-1].y+=x),_===h.length-1&&(h[0].y+=x);}}}};const l$1=(t,i,s)=>t>=i&&t<=s||t>=s&&t<=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=Number.POSITIVE_INFINITY,o=Math.PI,e=2*o,i=128/o,u=256/360,s=o/180,c=1/Math.LN2;function a(t,n){return (t%=n)>=0?t:t+n}function f(t){return a(t*i,256)}function l(t){return a(t*u,256)}function h(t){return Math.log(t)*c}function p(t,n,r){return t*(1-r)+n*r}const x=8,y=14,M=16;function d$1(t){return x+Math.max((t-y)*M,0)}function I(t,n,r){let o,e,i,u=0;for(const s of r){o=s.length;for(let r=1;r<o;++r){if(e=s[r-1],i=s[r],e.y>n==i.y>n)continue;(i.x-e.x)*(n-e.y)-(i.y-e.y)*(t-e.x)>0?u++:u--;}}return 0!==u}function N(n,r,o,e){let i,u,s,c;const a=e*e;for(const f of o){const o=f.length;if(!(o<2)){i=f[0].x,u=f[0].y;for(let e=1;e<o;++e){if(s=f[e].x,c=f[e].y,u$1(n,r,i,u,s,c)<a)return !0;i=s,u=c;}}}return !1}function w(t,n,r,o,e,i,u){const s=Math.max(o,Math.min(n,i))-n,c=Math.max(e,Math.min(r,u))-r;return s*s+c*c<=t*t}function P(t,r){if(0===r||Number.isNaN(r))return t;const o=[],e=new h$1(0,0),i=new h$1(0,0),u=new h$1(0,0);for(let s=0;s<t.length;s++){const c=t[s],a=[];for(let t=0;t<c.length;t++){const o=c[t-1],s=c[t],f=c[t+1];0===t?e.setCoords(0,0):e.assignSub(s,o).normalize().rightPerpendicular(),t===c.length-1?i.setCoords(0,0):i.assignSub(f,s).normalize().rightPerpendicular(),u.assignAdd(e,i).normalize();const l=u.x*i.x+u.y*i.y;0!==l&&u.scale(1/l),a.push(h$1.add(s,u.scale(r)));}o.push(a);}return o}function b(t,r,o,e){const i=new h$1(t[0],t[1]);if(i.scale(e),"viewport"===r){const t=-o*(Math.PI/180),n=Math.cos(t),r=Math.sin(t);i.rotate(n,r);}return i}

export { I, N, P, _, a, b, h as c, d$1 as d, e, f, e$1 as g, h$1 as h, i$1 as i, l, o, p, r, s, w };
