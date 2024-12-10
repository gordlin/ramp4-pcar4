import{cA as d,cC as G,cE as T,cF as k,ex as B,cG as M,hu as W}from"./main-D8a2_wp1.js";import{c as q,d as P}from"./conditionalSlot-DSKkNadV.js";import{g as _,u as A,l as E,o as F}from"./dom-BHTTQ4_z.js";import{a as R,s as j,c as I}from"./loadable-d_Nl85PU.js";import{c as J,d as K}from"./locale-DPY8GlW-.js";import{c as w}from"./observers-D0wbU2CF.js";import{u as N,c as Q,s as U,d as V}from"./t9n-Orba4GOb.js";import{S as g,d as X}from"./action-group-aF9NmZaE.js";import{S as Y,d as Z,a as $}from"./action-menu-BXhKW7cO.js";import{d as ee}from"./action-Dngus_e2.js";import{d as te}from"./icon-BDCMdNwz.js";import{d as oe}from"./loader-C0s2fF7D.js";import{d as ae}from"./debounce-27Hmkkyg.js";const ie=2,C=e=>e.reduce((t,o)=>t+o,0)/e.length,se=e=>{const t=e.filter(a=>a.slot!==g.menuActions),o=t?.length;return{actionWidth:o?C(t.map(a=>a.clientWidth||0)):0,actionHeight:o?C(t.map(a=>a.clientHeight||0)):0}},ne=({width:e,actionWidth:t,layout:o,height:a,actionHeight:l,groupCount:s})=>{const n=o==="horizontal"?e:a,i=o==="horizontal"?t:l;return Math.floor((n-s*ie)/i)},le=({layout:e,actionCount:t,actionWidth:o,width:a,actionHeight:l,height:s,groupCount:n})=>Math.max(t-ne({width:a,actionWidth:o,layout:e,height:s,actionHeight:l,groupCount:n}),0),v=e=>Array.from(e.querySelectorAll("calcite-action")).filter(t=>t.closest("calcite-action-menu")?t.slot===Y.trigger:!0),ce=({actionGroups:e,expanded:t,overflowCount:o})=>{let a=o;e.reverse().forEach(l=>{let s=0;const n=v(l).reverse();n.forEach(i=>{i.slot===g.menuActions&&(i.removeAttribute("slot"),i.textEnabled=t)}),a>0&&n.some(i=>(n.filter(c=>!c.slot).length>1&&n.length>2&&!i.closest("calcite-action-menu")&&(i.textEnabled=!0,i.setAttribute("slot",g.menuActions),s++,s>1&&a--),a<1)),G(l)})},H={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function re(e,t){return e||t.closest("calcite-shell-panel")?.position||"start"}function f({el:e,expanded:t}){v(e).filter(o=>o.slot!==g.menuActions).forEach(o=>o.textEnabled=t),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(o=>o.expanded=t)}const de=({tooltip:e,referenceElement:t,expanded:o,ref:a})=>(e&&(e.referenceElement=!o&&t?t:null),a&&a(t),t),he=({expanded:e,expandText:t,collapseText:o,expandLabel:a,collapseLabel:l,toggle:s,el:n,position:i,tooltip:c,ref:r,scale:h})=>{const m=_(n)==="rtl",u=e?o:t,b=e?l:a,p=[H.chevronsLeft,H.chevronsRight];m&&p.reverse();const y=re(i,n)==="end",D=y?p[1]:p[0],S=y?p[0]:p[1];return d("calcite-action",{icon:e?D:S,id:"expand-toggle",label:b,onClick:s,ref:O=>de({tooltip:c,referenceElement:O,expanded:e,ref:r}),scale:h,text:u,textEnabled:e,title:!e&&!c?u:null})},pe={actionGroupEnd:"action-group--end"},x={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},ue=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",ge=ue,z=T(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=B(this,"calciteActionBarToggle",6),this.mutationObserver=w("mutation",()=>{const{el:e,expanded:t}=this;f({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=w("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=ae(({width:e,height:t})=>{const{el:o,expanded:a,expandDisabled:l,layout:s,overflowActionsDisabled:n}=this;if(n||s==="vertical"&&!t||s==="horizontal"&&!e)return;const i=v(o),c=l?i.length:i.length+1,r=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(r);const h=this.hasActionsEnd||this.hasBottomActions||!l?r.length+1:r.length,{actionHeight:m,actionWidth:u}=se(i),b=le({layout:s,actionCount:c,actionHeight:m,actionWidth:u,height:t,width:e,groupCount:h});ce({actionGroups:r,expanded:a,overflowCount:b})},W.resize),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.handleDefaultSlotChange=e=>{const t=A(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=E(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=E(e)},this.handleTooltipSlotChange=e=>{const t=A(e).filter(o=>o?.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;f({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){if(e){this.resizeObserver?.disconnect();return}this.resizeObserver?.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){N(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;R(this),f({el:e,expanded:t}),this.overflowActions()}connectedCallback(){const{el:e,expanded:t}=this;J(this),Q(this),f({el:e,expanded:t}),this.mutationObserver?.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(e),this.overflowActions(),q(this)}async componentWillLoad(){j(this),await U(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),P(this),K(this),V(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await I(this),F(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:a,toggleExpand:l,scale:s,layout:n,messages:i,actionsEndGroupLabel:c,overlayPositioning:r}=this,h=t?null:d(he,{collapseLabel:i.collapseLabel,collapseText:i.collapse,el:o,expandLabel:i.expandLabel,expandText:i.expand,expanded:e,position:a,scale:s,toggle:l,tooltip:this.expandTooltip});return d("calcite-action-group",{class:pe.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:c,layout:n,overlayPositioning:r,scale:s},d("slot",{name:x.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),d("slot",{name:x.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),d("slot",{name:x.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),h)}render(){return d(M,{key:"ff6e365531a0ed2032864bb0777910c3932e9c6b",onCalciteActionMenuOpen:this.actionMenuOpenHandler},d("slot",{key:"f12b2f455752a62ee32b65224bed385940135a49",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ge}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function L(){typeof customElements>"u"||["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,z);break;case"calcite-action":customElements.get(e)||ee();break;case"calcite-action-group":customElements.get(e)||X();break;case"calcite-action-menu":customElements.get(e)||$();break;case"calcite-icon":customElements.get(e)||te();break;case"calcite-loader":customElements.get(e)||oe();break;case"calcite-popover":customElements.get(e)||Z();break}})}L();const fe=z,me=L;export{fe as CalciteActionBar,me as defineCustomElement};
