import{cF as n}from"./main-Bd3SZcXj.js";import{c as r}from"./observers-CfYjPQwS.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */let t;const i={childList:!0};function f(o){t||(t=r("mutation",c)),t.observe(o.el,i)}function l(o){t.unobserve(o.el)}function c(o){o.forEach(({target:e})=>{n(e)})}export{f as c,l as d};