import{a3 as ot,a2 as E,eB as d,b8 as D,b6 as I,a6 as x,b5 as N,b7 as B,ey as W,C as V,fc as ct,bo as lt}from"./main-D8a2_wp1.js";import{a0 as f,a as h,X as H,v as K,w as Q,m as M,b as a,r as s,U as g,Q as P,Z as T,B as C,P as w,af as X,ag as j,ah as k,g as b,F as ut,ai as ft,aj as dt,E as q,ak as wt,N as O,A as S,al as ht,am as mt,I as G,an as yt,ao as J}from"./arcadeUtils-CzGH4xfs.js";import{c as A,r as L,b as y}from"./TimeOnly-rYd_WDzU.js";import{l as Y}from"./portalUtils-C8TrFxU7.js";import{disjoint as pt,intersects as vt,touches as gt,crosses as Pt,within as It,contains as At,overlaps as Ft,equals as bt,relate as Rt,intersect as xt,union as Nt,difference as Ot,symmetricDifference as St,clip as Dt,cut as jt,planarArea as _,geodesicArea as $,planarLength as Z,geodesicLength as z,distance as Lt,densify as tt,geodesicDensify as nt,generalize as Tt,buffer as Ct,geodesicBuffer as Jt,offset as Zt,rotate as et,simplify as it,isSimple as Ut,convexHull as Mt,nearestCoordinate as kt,nearestVertex as qt}from"./geometryEngineAsync-CjgnsHlo.js";async function rt(r,n,e){if(!ot?.findCredential(r.restUrl))return null;if(r.loadStatus==="loaded"&&n===""&&r.user?.sourceJSON&&e===!1)return r.user.sourceJSON;const c={responseType:"json",query:{f:"json"}};if(e&&(c.query.returnUserLicenseTypeExtensions=!0),n===""){const t=await E(r.restUrl+"/community/self",c);if(t.data){const i=t.data;if(i?.username)return i}return null}const l=await E(r.restUrl+"/community/users/"+n,c);if(l.data){const t=l.data;return t.error?null:t}return null}function at(r){return ct.indexOf("4.")===0?N.fromExtent(r):new N({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function F(r,n,e){if(h(r,2,2,n,e),!(r[0]instanceof d&&r[1]instanceof d)&&!(r[0]instanceof d&&r[1]===null)&&!(r[1]instanceof d&&r[0]===null)&&(r[0]!==null||r[1]!==null))throw new a(n,s.InvalidParameter,e)}async function st(r,n){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=yt(r.spatialReference)/lt(r.spatialReference));let c=0;if(r.type==="polyline")for(const t of r.paths)for(let i=1;i<t.length;i++)c+=J(t[i],t[i-1],e);else if(r.type==="polygon")for(const t of r.rings){for(let i=1;i<t.length;i++)c+=J(t[i],t[i-1],e);(t[0][0]!==t[t.length-1][0]||t[0][1]!==t[t.length-1][1]||t[0][2]!==void 0&&t[0][2]!==t[t.length-1][2])&&(c+=J(t[0],t[t.length-1],e))}else r.type==="extent"&&(c+=2*J([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*J([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(w(r.zmax,0)*e-w(r.zmin,0)*e));const l=new I({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return Z(l,n)}function zt(r){r.mode==="async"&&(r.functions.disjoint=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]===null||t[1]===null||pt(t[0],t[1])))},r.functions.intersects=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&vt(t[0],t[1])))},r.functions.touches=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&gt(t[0],t[1])))},r.functions.crosses=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&Pt(t[0],t[1])))},r.functions.within=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&It(t[0],t[1])))},r.functions.contains=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&At(t[0],t[1])))},r.functions.overlaps=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]!==null&&t[1]!==null&&Ft(t[0],t[1])))},r.functions.equals=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(h(t,2,2,n,e),t[0]===t[1]||(t[0]instanceof d&&t[1]instanceof d?bt(t[0],t[1]):(H(t[0])&&H(t[1])||!!(K(t[0])&&K(t[1])||Q(t[0])&&Q(t[1])))&&t[0].equals(t[1]))))},r.functions.relate=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,3,3,n,e),t[0]instanceof d&&t[1]instanceof d)return Rt(t[0],t[1],M(t[2]));if(t[0]instanceof d&&t[1]===null||t[1]instanceof d&&t[0]===null||t[0]===null&&t[1]===null)return!1;throw new a(n,s.InvalidParameter,e)})},r.functions.intersection=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]===null||t[1]===null?null:xt(t[0],t[1])))},r.functions.union=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{const i=[];if((t=f(t)).length===0)throw new a(n,s.WrongNumberOfParameters,e);if(t.length===1)if(g(t[0])){const o=f(t[0]);for(let u=0;u<o.length;u++)if(o[u]!==null){if(!(o[u]instanceof d))throw new a(n,s.InvalidParameter,e);i.push(o[u])}}else{if(!P(t[0])){if(t[0]instanceof d)return T(A(t[0]),n.spatialReference);if(t[0]===null)return null;throw new a(n,s.InvalidParameter,e)}{const o=f(t[0].toArray());for(let u=0;u<o.length;u++)if(o[u]!==null){if(!(o[u]instanceof d))throw new a(n,s.InvalidParameter,e);i.push(o[u])}}}else for(let o=0;o<t.length;o++)if(t[o]!==null){if(!(t[o]instanceof d))throw new a(n,s.InvalidParameter,e);i.push(t[o])}return i.length===0?null:Nt(i)})},r.functions.difference=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]===null?null:t[1]===null?A(t[0]):Ot(t[0],t[1])))},r.functions.symmetricdifference=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>(F(t=f(t),n,e),t[0]===null&&t[1]===null?null:t[0]===null?A(t[1]):t[1]===null?A(t[0]):St(t[0],t[1])))},r.functions.clip=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),!(t[1]instanceof D)&&t[1]!==null)throw new a(n,s.InvalidParameter,e);if(t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return t[1]===null?null:Dt(t[0],t[1])})},r.functions.cut=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),!(t[1]instanceof I)&&t[1]!==null)throw new a(n,s.InvalidParameter,e);if(t[0]===null)return[];if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return t[1]===null?[A(t[0])]:jt(t[0],t[1])})},r.functions.area=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(h(t,1,2,n,e),(t=f(t))[0]===null)return 0;if(C(t[0])){const i=await t[0].sumArea(L(w(t[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new a(n,s.Cancelled,e);return i}if(g(t[0])||P(t[0])){const i=X(t[0],n.spatialReference);return i===null?0:_(i,L(w(t[1],-1)))}if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return _(t[0],L(w(t[1],-1)))})},r.functions.areageodetic=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(h(t,1,2,n,e),(t=f(t))[0]===null)return 0;if(C(t[0])){const i=await t[0].sumArea(L(w(t[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new a(n,s.Cancelled,e);return i}if(g(t[0])||P(t[0])){const i=X(t[0],n.spatialReference);return i===null?0:$(i,L(w(t[1],-1)))}if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return $(t[0],L(w(t[1],-1)))})},r.functions.length=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(h(t,1,2,n,e),(t=f(t))[0]===null)return 0;if(C(t[0])){const i=await t[0].sumLength(y(w(t[1],-1)),!1,n.abortSignal);if(n.abortSignal.aborted)throw new a(n,s.Cancelled,e);return i}if(g(t[0])||P(t[0])){const i=j(t[0],n.spatialReference);return i===null?0:Z(i,y(w(t[1],-1)))}if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return Z(t[0],y(w(t[1],-1)))})},r.functions.length3d=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(h(t,1,2,n,e),(t=f(t))[0]===null)return 0;if(g(t[0])||P(t[0])){const i=j(t[0],n.spatialReference);return i===null?0:i.hasZ===!0?st(i,y(w(t[1],-1))):Z(i,y(w(t[1],-1)))}if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return t[0].hasZ===!0?st(t[0],y(w(t[1],-1))):Z(t[0],y(w(t[1],-1)))})},r.functions.lengthgeodetic=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(h(t,1,2,n,e),(t=f(t))[0]===null)return 0;if(C(t[0])){const i=await t[0].sumLength(y(w(t[1],-1)),!0,n.abortSignal);if(n.abortSignal.aborted)throw new a(n,s.Cancelled,e);return i}if(g(t[0])||P(t[0])){const i=j(t[0],n.spatialReference);return i===null?0:z(i,y(w(t[1],-1)))}if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return z(t[0],y(w(t[1],-1)))})},r.functions.distance=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{t=f(t),h(t,2,3,n,e);let i=t[0];(g(t[0])||P(t[0]))&&(i=k(t[0],n.spatialReference));let o=t[1];if((g(t[1])||P(t[1]))&&(o=k(t[1],n.spatialReference)),!(i instanceof d))throw new a(n,s.InvalidParameter,e);if(!(o instanceof d))throw new a(n,s.InvalidParameter,e);return Lt(i,o,y(w(t[2],-1)))})},r.functions.distancegeodetic=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{t=f(t),h(t,2,3,n,e);const i=t[0],o=t[1];if(!(i instanceof x))throw new a(n,s.InvalidParameter,e);if(!(o instanceof x))throw new a(n,s.InvalidParameter,e);const u=new I({paths:[],spatialReference:i.spatialReference});return u.addPath([i,o]),z(u,y(w(t[2],-1)))})},r.functions.densify=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,3,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);if(i<=0)throw new a(n,s.InvalidParameter,e);return t[0]instanceof N||t[0]instanceof I?tt(t[0],i,y(w(t[2],-1))):t[0]instanceof D?tt(at(t[0]),i,y(w(t[2],-1))):t[0]})},r.functions.densifygeodetic=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,3,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);if(i<=0)throw new a(n,s.InvalidParameter,e);return t[0]instanceof N||t[0]instanceof I?nt(t[0],i,y(w(t[2],-1))):t[0]instanceof D?nt(at(t[0]),i,y(w(t[2],-1))):t[0]})},r.functions.generalize=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,4,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);return Tt(t[0],i,ut(w(t[2],!0)),y(w(t[3],-1)))})},r.functions.buffer=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,3,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);return i===0?A(t[0]):Ct(t[0],i,y(w(t[2],-1)))})},r.functions.buffergeodetic=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,3,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);return i===0?A(t[0]):Jt(t[0],i,y(w(t[2],-1)))})},r.functions.offset=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,6,n,e),t[0]===null)return null;if(!(t[0]instanceof N||t[0]instanceof I))throw new a(n,s.InvalidParameter,e);const i=b(t[1]);if(isNaN(i))throw new a(n,s.InvalidParameter,e);const o=b(w(t[4],10));if(isNaN(o))throw new a(n,s.InvalidParameter,e);const u=b(w(t[5],0));if(isNaN(u))throw new a(n,s.InvalidParameter,e);return Zt(t[0],i,y(w(t[2],-1)),M(w(t[3],"round")).toLowerCase(),o,u)})},r.functions.rotate=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,3,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);const i=t[0]instanceof D?N.fromExtent(t[0]):t[0],o=b(t[1]);if(isNaN(o))throw new a(n,s.InvalidParameter,e);const u=w(t[2],null);if(u===null)return et(i,o);if(u instanceof x)return et(i,o,u);throw new a(n,s.InvalidParameter,e)})},r.functions.centroid=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,1,1,n,e),t[0]===null)return null;let i=t[0];if((g(t[0])||P(t[0]))&&(i=k(t[0],n.spatialReference)),i===null)return null;if(!(i instanceof d))throw new a(n,s.InvalidParameter,e);return i instanceof x?T(A(i),n.spatialReference):i instanceof N?i.centroid:i instanceof I?ft(i):i instanceof B?dt(i):i instanceof D?i.center:null})},r.functions.measuretocoordinate=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),t[0]===null)return null;let i=t[0];if((g(t[0])||P(t[0]))&&(i=j(t[0],n.spatialReference)),i===null)return null;if(!(i instanceof d))throw new a(n,s.InvalidParameter,e);if(!(i instanceof I))throw new a(n,s.InvalidParameter,e);if(q(t[1]===!1))throw new a(n,s.InvalidParameter,e);const o=wt(i,t[1]);return o?O.convertObjectToArcadeDictionary(o,S(n),!1,!0):null})},r.functions.pointtocoordinate=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),t[0]===null)return null;let i=t[0];if((g(t[0])||P(t[0]))&&(i=j(t[0],n.spatialReference)),i===null)return null;if(!(i instanceof d))throw new a(n,s.InvalidParameter,e);if(!(i instanceof I))throw new a(n,s.InvalidParameter,e);const o=t[1];if(o===null)return null;if(!(o instanceof x))throw new a(n,s.InvalidParameter,e);if(q(t[1]===!1))throw new a(n,s.InvalidParameter,e);const u=ht(i,o);return u?O.convertObjectToArcadeDictionary(u,S(n),!1,!0):null})},r.functions.distancetocoordinate=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),t[0]===null)return null;let i=t[0];if((g(t[0])||P(t[0]))&&(i=j(t[0],n.spatialReference)),i===null)return null;if(!(i instanceof d))throw new a(n,s.InvalidParameter,e);if(!(i instanceof I))throw new a(n,s.InvalidParameter,e);if(q(t[1]===!1))throw new a(n,s.InvalidParameter,e);const o=mt(i,t[1]);return o?O.convertObjectToArcadeDictionary(o,S(n),!1,!0):null})},r.functions.multiparttosinglepart=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(t=f(t),h(t,1,1,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);if(t[0]instanceof x)return[T(A(t[0]),n.spatialReference)];if(t[0]instanceof D)return[T(A(t[0]),n.spatialReference)];const i=await it(t[0]);if(i instanceof N){const o=[],u=[];for(let m=0;m<i.rings.length;m++)if(i.isClockwise(i.rings[m])){const p=W({rings:[i.rings[m]],hasZ:i.hasZ===!0,hasM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});o.push(p)}else u.push({ring:i.rings[m],pt:i.getPoint(m,0)});for(let m=0;m<u.length;m++)for(let p=0;p<o.length;p++)if(o[p].contains(u[m].pt)){o[p].addRing(u[m].ring);break}return o}if(i instanceof I){const o=[];for(let u=0;u<i.paths.length;u++){const m=W({paths:[i.paths[u]],hasZ:i.hasZ===!0,hasM:i.hasM===!0,spatialReference:i.spatialReference.toJSON()});o.push(m)}return o}if(t[0]instanceof B){const o=[],u=T(A(t[0]),n.spatialReference);for(let m=0;m<u.points.length;m++)o.push(u.getPoint(m));return o}return null})},r.functions.issimple=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,1,1,n,e),t[0]===null)return!0;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return Ut(t[0])})},r.functions.simplify=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,1,1,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return it(t[0])})},r.functions.convexhull=function(n,e){return r.standardFunctionAsync(n,e,(c,l,t)=>{if(t=f(t),h(t,1,1,n,e),t[0]===null)return null;if(!(t[0]instanceof d))throw new a(n,s.InvalidParameter,e);return Mt(t[0])})},r.functions.getuser=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{h(t,0,2,n,e);let i=w(t[1],""),o=i===!0;if(i=i===!0||i===!1?"":M(i),t.length===0||t[0]instanceof G){let m;m=n.services?.portal?n.services.portal:V.getDefault(),t.length>0&&(m=Y(t[0],m));const p=await rt(m,i,o);if(p){const R=JSON.parse(JSON.stringify(p));for(const v of["lastLogin","created","modified"])R[v]!==void 0&&R[v]!==null&&(R[v]=new Date(R[v]));return O.convertObjectToArcadeDictionary(R,S(n))}return null}let u=null;if(C(t[0])&&(u=t[0]),u){if(o=!1,i)return null;await u.load();const m=await u.getOwningSystemUrl();if(!m){if(!i){const v=await u.getIdentityUser();return v?O.convertObjectToArcadeDictionary({username:v},S(n)):null}return null}let p;p=n.services?.portal?n.services.portal:V.getDefault(),p=Y(new G(m),p);const R=await rt(p,i,o);if(R){const v=JSON.parse(JSON.stringify(R));for(const U of["lastLogin","created","modified"])v[U]!==void 0&&v[U]!==null&&(v[U]=new Date(v[U]));return O.convertObjectToArcadeDictionary(v,S(n))}return null}throw new a(n,s.InvalidParameter,e)})},r.functions.nearestcoordinate=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),!(t[0]instanceof d||t[0]===null))throw new a(n,s.InvalidParameter,e);if(!(t[1]instanceof x||t[1]===null))throw new a(n,s.InvalidParameter,e);if(t[0]===null||t[1]===null)return null;const i=await kt(t[0],t[1]);return i===null?null:O.convertObjectToArcadeDictionary({coordinate:i.coordinate,distance:i.distance,sideOfLine:i.distance===0?"straddle":i.isRightSide?"right":"left"},S(n),!1,!0)})},r.functions.nearestvertex=function(n,e){return r.standardFunctionAsync(n,e,async(c,l,t)=>{if(t=f(t),h(t,2,2,n,e),!(t[0]instanceof d||t[0]===null))throw new a(n,s.InvalidParameter,e);if(!(t[1]instanceof x||t[1]===null))throw new a(n,s.InvalidParameter,e);if(t[0]===null||t[1]===null)return null;const i=await qt(t[0],t[1]);return i===null?null:O.convertObjectToArcadeDictionary({coordinate:i.coordinate,distance:i.distance,sideOfLine:i.distance===0?"straddle":i.isRightSide?"right":"left"},S(n),!1,!0)})})}export{zt as registerFunctions};