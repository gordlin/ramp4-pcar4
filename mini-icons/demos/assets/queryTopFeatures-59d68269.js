import { cE as t, I, a3 as R, cC as t$1, U as U$1, aB as V$1, cF as p$1, cG as d$1 } from './main-13aeab07.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function y(t,e){const r=t.geometry,o=t.toJSON(),s=o;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=p$1(r),s.inSR=d$1(r.spatialReference)),o.topFilter?.groupByFields&&(s.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),o.topFilter?.orderByFields&&(s.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),o.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?o.outFields.includes("*")?s.outFields="*":s.outFields=o.outFields.join(","):delete s.outFields,o.outSR?s.outSR=d$1(o.outSR):r&&o.returnGeometry&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete o.timeExtent;}return s}async function p(t$1,e,r,n){const o=await c(t$1,e,"json",n);return t(e,r,o.data),o}async function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,e,"json",r,{returnIdsOnly:!0})}async function d(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function a(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function c(n,i,l,u={},p={}){const m="string"==typeof n?I(n):n,d=i.geometry?[i.geometry]:[];return u.responseType="pbf"===l?"array-buffer":"json",R(d,null,u).then((e=>{const n=e?.[0];null!=n&&((i=i.clone()).geometry=n);const o=t$1({...m.query,f:l,...p,...y(i,p)});return U$1(V$1(m.path,"queryTopFeatures"),{...u,query:{...o,...u.query}})}))}

export { a, d, m, p };
