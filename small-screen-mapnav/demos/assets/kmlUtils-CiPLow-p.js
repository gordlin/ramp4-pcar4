import{P as p,B as P,bB as I,D as k,U as w,bC as G,bD as b,bE as m,bF as d,bG as E,by as x,bj as v,bl as F,bk as O}from"./main-Bd3SZcXj.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function $(s){const r=s.folders||[],t=r.slice(),e=new Map,n=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(s.featureCollection?.layers||[]).forEach(o=>{const y=p(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?S(n,g,o.featureSet.features):a==="esriGeometryPolyline"?S(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&S(f,g,o.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(o=>{c.set(o.id,o)}),r.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=C(y,o.id,s.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=p(e.get("esriGeometryPoint")),o.polylines=p(e.get("esriGeometryPolyline")),o.polygons=p(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[M[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=h([o])}});const u=h(t);return{folders:r,sublayers:t,extent:u}}function B(s,r,t,e){const n=P?.findCredential(s);s=I(s,{token:n?.token});const i=k.kmlServiceUrl;return w(i,{query:{url:s,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:e})}function J(s,r,t=null,e=[]){const n=[],i={},f=r.sublayers,c=new Set(r.folders.map(l=>l.id));return f.forEach(l=>{const u=new s;if(t?u.read(l,t):u.read(l),e.length&&c.has(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers?.unshift(u)}else n.unshift(u)}),n}function S(s,r,t){t.forEach(e=>{s.set(e.attributes[r],e)})}function j(s,r){let t;return r.some(e=>e.id===s&&(t=e,!0)),t}function C(s,r,t){const e=j(s,t);return e&&(e.parentFolderId=r,e.networkLink=e),e}async function L(s){const r=v.fromJSON(s.featureSet).features,t=s.layerDefinition,e=F(t.drawingInfo.renderer),n=O.fromJSON(s.popupInfo),i=[];for(const f of r){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=n,f.visible=!0,i.push(f)}return i}function h(s){const r=G(b),t=G(b);for(const e of s){if(e.polygons?.featureSet?.features)for(const n of e.polygons.featureSet.features)m(r,n.geometry),d(t,r);if(e.polylines?.featureSet?.features)for(const n of e.polylines.featureSet.features)m(r,n.geometry),d(t,r);if(e.points?.featureSet?.features)for(const n of e.points.featureSet.features)m(r,n.geometry),d(t,r);if(e.mapImages)for(const n of e.mapImages)m(r,n.extent),d(t,r)}return E(t,b)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:x.WGS84}}export{J as S,L as b,$ as d,B as g,h as j};
