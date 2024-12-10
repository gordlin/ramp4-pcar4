import{C as x,a4 as C,bl as E,bm as J,bn as M,bv as I,a0 as Q,eB as W,eD as U,eE as j}from"./main-D8a2_wp1.js";import{a as G,b as l,r as p,I as B,m as P,G as w,ab as K,P as V,N as T,U as S,A as X,E as k,X as D,w as z,v as H,ac as L,ad as N,ae as O}from"./arcadeUtils-CzGH4xfs.js";import{l as Y}from"./portalUtils-C8TrFxU7.js";import{p as Z,n as _}from"./project-mmz0dOmc.js";import{s as $,m as ee,t as re,p as ae,c as te}from"./GraphQueryStreaming-CPca2gag.js";let u=null;async function ie(e){const r=C.geometryServiceUrl??"";if(!r){E()||await J();for(const a of e)a.container[a.indexer]=M(a.container[a.indexer],I.WGS84);return}const t=e.map(a=>a.container[a.indexer]),n=new Z({geometries:t,outSpatialReference:I.WGS84}),s=await _(r,n);for(let a=0;a<s.length;a++){const i=e[a];i.container[i.indexer]=s[a]}}async function q(e,r){const t=new Q({portal:e,id:r});return await t.load(),u===null&&(u=await import("./knowledgeGraphService-BQiNOXrs.js").then(n=>n.k)),await u.fetchKnowledgeGraph(t.url)}function v(e,r,t,n,s){if(e===null)return null;if(w(e)||k(e))return e;if(D(e)||D(e))return e.toJSDate();if(z(e))return e.toStorageFormat();if(H(e))return e.toStorageString();if(L(e)){const a={};for(const i of e.keys())a[i]=v(e.field(i),r,t,n,s),a[i]instanceof W&&s.push({container:a,indexer:i});return a}if(S(e)){const a=e.map(i=>v(i,r,t,n,s));for(let i=0;i<a.length;i++)a[i]instanceof W&&s.push({container:a,indexer:i});return a}return N(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?U(e):e:void 0}function ne(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return j(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new l(r,p.WrongSpatialReference,null)}function R(e,r){if(!e)return null;const t={};for(const n in e)t[n]=m(e[n],r);return t}function m(e,r){return e===null?null:S(e)?e.map(t=>m(t,r)):e instanceof ee?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:R(e.properties,r)}:e instanceof re?{graphType:"object",properties:R(e.properties,r)}:e instanceof ae?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:R(e.properties,r)}:e instanceof te?{graphType:"path",path:e.path?e.path.map(t=>m(t,r)):null}:N(e)?ne(e,r):w(e)||k(e)||O(e)?e:null}function oe(e){e.mode==="async"&&(e.functions.knowledgegraphbyportalitem=function(r,t){return e.standardFunctionAsync(r,t,(n,s,a)=>{if(G(a,2,2,r,t),a[0]===null)throw new l(r,p.PortalRequired,t);if(a[0]instanceof B){const d=P(a[1]);let f;return f=r.services?.portal?r.services.portal:x.getDefault(),q(Y(a[0],f),d)}if(w(a[0])===!1)throw new l(r,p.InvalidParameter,t);const i=P(a[0]);return q(r.services?.portal??x.getDefault(),i)})},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,t){return e.standardFunctionAsync(r,t,async(n,s,a)=>{G(a,2,4,r,t);const i=a[0];if(!K(i))throw new l(r,p.InvalidParameter,t);const d=a[1];if(!w(d))throw new l(r,p.InvalidParameter,t);u===null&&(u=await import("./knowledgeGraphService-BQiNOXrs.js").then(o=>o.k));let f=null;const h=V(a[2],null);if(!(h instanceof T||h===null))throw new l(r,p.InvalidParameter,t);if(h){let o=[];f=v(h,!0,!1,r,o),o=o.filter(c=>!c.container[c.indexer].spatialReference.isWGS84),o.length>0&&await ie(o)}const b=new $({openCypherQuery:d,bindParameters:f});(i?.serviceDefinition?.currentVersion??11.3)>11.2&&(b.outputSpatialReference=r.spatialReference);const A=(await u.executeQueryStreaming(i,b)).resultRowsStream.getReader(),y=[];try{for(;;){const{done:o,value:c}=await A.read();if(o)break;if(S(c))for(const g of c)y.push(m(g,r));else{const g=[];for(const F of c)g.push(m(c[F],r));y.push(g)}}}catch(o){throw o}return T.convertJsonToArcade(y,X(r),!1,!0)})},e.signatures.push({name:"querygraph",min:2,max:4}))}export{oe as registerFunctions};