import{$ as l,j as y}from"./utils-Dihuhg_M.js";import{o as f}from"./jsonContext-DFhgTlQ-.js";import{r as v,a as d,f as s,i as I}from"./main-Bd3SZcXj.js";import{p as i}from"./resourceUtils-WzTTiOL6.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-BUhJYgWy.js";import"./saveUtils-CKbKl79J.js";import"./preload-helper-ExcqyqRp.js";import"./resourceUtils-CkjyjEKQ.js";const n="Group Layer",g="group-layer-save",A="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function m(e,r){return{...f(e,"web-map",!0),initiator:r}}function u(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,s.METADATA),I(r,o)}async function D(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:P,createJSONContext:t=>m(t,e),createItemData:u,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function J(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>m(a,e),createItemData:u,errorNamePrefix:A,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{D as save,J as saveAs};
