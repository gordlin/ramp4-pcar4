const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-tgpFW-qc.js","./geometryEngineBase-BgT5Vzpw.js","./main-BtYHawlJ.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./json-Beimr7gP.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { n } from './date-BI_YP58O.js';
import { db as Ae, dc as Ue, d8 as pe, dd as ye, aI as ge, de as _e, df as N } from './main-BtYHawlJ.js';

class u{constructor(){this.code=null,this.description=null;}}class c{constructor(t){this.error=new u,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t;}}function f(t){return new c(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t;}}function d(t){return new a(t)}const m=new Set;function p(t,n,i,o=!1){m.clear();for(const s in i){const l=t.get(s);if(!l)continue;const u=g(l,i[s]);if(m.add(l.name),l&&(o||l.editable)){const t=Ae(l,u);if(t)return f(Ue(t,l,u));n[l.name]=u;}}for(const e of t?.requiredFields??[])if(!m.has(e.name))return f(`missing required field "${e.name}"`);return null}function g(n$1,e){let r=e;return pe(n$1)&&"string"==typeof e?r=parseFloat(e):ye(n$1)&&null!=e&&"string"!=typeof e?r=String(e):ge(n$1)&&"string"==typeof e&&(r=n(e)),_e(r)}let h;function y(t,e){if(!t||!N(e))return t;if("rings"in t||"paths"in t){if(null==h)throw new TypeError("geometry engine not loaded");return h.simplify(e,t)}return t}async function w(){return null==h&&(h=await __vitePreload(() => import('./geometryEngineJSON-tgpFW-qc.js').then(n => n.g),true?__vite__mapDeps([0,1,2,3,4,5]):void 0,import.meta.url)),h}async function j(t,e){!N(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await w();}

export { d, f, j, p, y };
