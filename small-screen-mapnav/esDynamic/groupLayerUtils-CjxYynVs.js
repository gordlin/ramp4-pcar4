import{$ as y,j as p}from"./utils-DTOlNcmn.js";import{o as f}from"./jsonContext-D0O0i8XV.js";import{r as v,a as d,i as I,f as o}from"./main-D8a2_wp1.js";import{p as n}from"./resourceUtils-BxpcpVN3.js";const i="Group Layer",g="group-layer-save",A="group-layer-save-as",s=o.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:v(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function l(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,o.METADATA),I(r,s)}async function L(e,r){return y({layer:e,itemType:i,validateLayer:c,validateItem:P,createJSONContext:a=>u(a,e),createItemData:l,errorNamePrefix:g,saveResources:async(a,t)=>(e.sourceIsPortalItem||await a.removeAllResources().catch(()=>{}),n(e.resourceReferences,t))},r)}async function O(e,r,a){return p({layer:e,itemType:i,validateLayer:c,createJSONContext:t=>u(t,e),createItemData:l,errorNamePrefix:A,newItem:r,setItemProperties:R,saveResources:(t,m)=>n(e.resourceReferences,m)},a)}export{L as save,O as saveAs};