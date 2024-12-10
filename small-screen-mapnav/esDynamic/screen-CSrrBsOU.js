import{fw as L,fx as U,fO as V,iV as z,fA as q,fC as p,fE as a,fI as l,fD as u,fM as x,fH as s,fK as T,fN as v,fJ as f,fL as _,iJ as B,iK as A,fY as C,ix as H,fQ as I,fP as E,fU as J,fV as W,fB as D,fF as F,fG as M,fX as O,fW as G}from"./main-D8a2_wp1.js";const N={class:"mb-10"},P=["aria-label"],Q={key:0,class:"w-full h-30 hidden"},X=["alt","src"],Y=["alt","src"],R=["alt"],Z={class:"pl-5"},$={class:"ml-auto pr-5"},ee=["content"],ae={key:0,class:"rv-basemap-check absolute top-0 right-0"},le=L({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(e){const{t:b}=U(),y=V("iApi"),i=z(),m=q(()=>i.activeBasemapConfig),o=c=>{c.id!==m.value.id&&y?.geo.map.setBasemap(c.id)};return(c,t)=>{const g=p("truncate"),n=p("tippy"),h=p("focus-item");return a(),l("div",N,[u((a(),l("button",{class:"basemap-item-button bg-gray-300 w-full h-full",type:"button","aria-label":x(b)("basemap.select"),onClick:t[2]||(t[2]=r=>o(e.basemap))},[s("div",null,[s("div",{class:T(["flex hover:opacity-50 basemap-item-image basemap-item-container",e.basemap.hideThumbnail?"h-30":"h-180"])},[e.basemap.hideThumbnail?(a(),l("div",Q)):e.basemap.thumbnailUrl?(a(),l("img",{key:1,class:"w-full h-180",alt:e.basemap.altText,src:e.basemap.thumbnailUrl},null,8,X)):e.tileSchema.thumbnailTileUrls&&e.tileSchema.thumbnailTileUrls.length>0&&e.basemap.layers.every(r=>r.layerType==="esri-tile")?(a(!0),l(v,{key:2},f(e.basemap.layers,r=>(a(),l("div",{key:r.id,class:"flex basemap-item-inner h-180"},[(a(!0),l(v,null,f(e.tileSchema.thumbnailTileUrls,(w,k)=>(a(),l("img",{class:"w-full",alt:e.basemap.altText,src:r.url+w,key:k},null,8,Y))),128))]))),128)):(a(),l("img",{key:3,class:"w-full bg-white h-180",alt:e.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,R))],2)]),s("div",{class:T(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",e.basemap.hideThumbnail&&e.basemap.id===m.value.id?"opacity-85":"opacity-75"])},[u((a(),l("div",Z,[s("span",null,_(e.basemap.name),1)])),[[g]]),s("div",$,[u((a(),l("a",{onClick:t[0]||(t[0]=B(()=>{},["stop"])),onKeydown:t[1]||(t[1]=A(B(()=>{},["prevent"]),["enter","space"])),content:e.basemap.description},t[3]||(t[3]=[s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,ee)),[[n,{placement:"bottom",trigger:"click focus"}]])])],2),e.basemap.id===m.value.id&&!e.basemap.hideThumbnail?(a(),l("div",ae,t[4]||(t[4]=[s("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]))):C("",!0)],8,P)),[[h]])])}}}),te=H(le,[["__scopeId","data-v-7cf27f80"]]),se=["content"],ie={class:"h-600 overflow-y-auto"},ne={class:"font-bold text-xl"},re={key:0,class:"border-t border-b border-gray-600"},me=L({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:b}=U(),y=z(),i=I("el"),m=E([]),o=E([]),c=n=>{n.key==="Tab"&&i.value?.matches(":focus")&&i.value._tippy.show()},t=()=>{i.value._tippy.hide()};J(()=>{const n=y.config.map;m.value=n.tileSchemas,o.value=n.basemaps,i.value?.addEventListener("blur",t),i.value?.addEventListener("keyup",c)}),W(()=>{i.value?.removeEventListener("blur",t),i.value?.removeEventListener("keyup",c)});const g=n=>o.value.filter(h=>h.tileSchemaId===n);return(n,h)=>{const r=D("panel-screen"),w=p("truncate"),k=p("focus-list"),j=p("tippy");return a(),F(r,{panel:e.panel},{header:M(()=>[O(_(x(b)("basemap.title")),1)]),content:M(()=>[u((a(),l("div",{content:x(b)("panels.controls.items"),ref_key:"el",ref:i},[s("div",ie,[(a(!0),l(v,null,f(m.value,(d,K)=>(a(),l("div",{class:"mx-5",key:d.id},[s("div",{class:T((K===0?"mt-5":"mt-36")+" flex mb-5")},[u((a(),l("h3",ne,[O(_(d.name),1)])),[[w]])],2),o.value.length>0?(a(),l("ul",re,[(a(!0),l(v,null,f(g(d.id),S=>(a(),l("li",{key:S.id},[G(te,{basemap:S,tileSchema:d,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])):C("",!0)]))),128))])],8,se)),[[k],[j,{trigger:"manual",placement:"top-end",maxWidth:190}]])]),_:1},8,["panel"])}}});export{me as default};
