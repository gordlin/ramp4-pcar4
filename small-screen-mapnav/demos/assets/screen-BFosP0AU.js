const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./header-BWwwrdaz.js","./main-Bd3SZcXj.js","./preload-helper-ExcqyqRp.js","./main-Bh92dUh-.css","./header-EfIoE9qb.css","./item-U-ZP8ndX.js","./marked.esm-DmSrlTiT.js","./item-C61Rvwhd.css"])))=>i.map(i=>d[i]);
import{_ as l}from"./preload-helper-ExcqyqRp.js";import{fA as A,fB as I,fS as x,fT as b,fY as B,fZ as D,fE as T,fF as C,fG as c,fJ as p,fK as u,fI as n,f$ as P,fP as V,fQ as r,f_ as w,fH as N,fM as f,fR as O,fN as R,gk as d}from"./main-Bd3SZcXj.js";const j=["content"],M=A({__name:"screen",props:{panel:{type:Object,required:!0}},setup(_){const m=d(()=>l(()=>import("./header-BWwwrdaz.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),v=d(()=>l(()=>import("./item-U-ZP8ndX.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url)),{t:s}=I(),g=x("iApi"),e=b(),o=()=>{e.value._tippy.hide()},a=t=>{t.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};B(()=>{e.value?.addEventListener("blur",o),e.value?.addEventListener("keyup",a)}),D(()=>{e.value?.removeEventListener("blur",o),e.value?.removeEventListener("keyup",a)});const y=T(()=>{let t=g.fixture.get("legend");return t?[...t.getLegend()]:[]});return(t,E)=>{const h=C("panel-screen"),k=c("focus-list"),L=c("tippy");return n(),p(h,{panel:_.panel},{header:u(()=>[P(V(r(s)("legend.title")),1)]),content:u(()=>[w(r(m)),N((n(),f("div",{content:r(s)("panels.controls.items"),ref_key:"el",ref:e},[(n(!0),f(O,null,R(y.value,i=>(n(),p(r(v),{legendItem:i,key:i.uid},null,8,["legendItem"]))),128))],8,j)),[[k],[L,{trigger:"manual",placement:"top-end",maxWidth:190}]])]),_:1},8,["panel"])}}});export{M as default};
