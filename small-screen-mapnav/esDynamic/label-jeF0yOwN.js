import{i as L,q as p,c as k}from"./dom-BHTTQ4_z.js";import{c as w}from"./component-CWGf1hug.js";const E="calciteInternalLabelClick",d="calciteInternalLabelConnected",u="calciteInternalLabelDisconnected",h="calcite-label",o=new WeakMap,r=new WeakMap,c=new WeakMap,f=new WeakMap,s=new Set,C=e=>{const{id:t}=e,n=t&&p(e,{selector:`${h}[for="${t}"]`});if(n)return n;const l=k(e,h);return!l||x(l,e)?null:l};function x(e,t){let n;const l="custom-element-ancestor-check",i=a=>{a.stopImmediatePropagation();const m=a.composedPath();n=m.slice(m.indexOf(t),m.indexOf(e))};return e.addEventListener(l,i,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,i),n.filter(a=>a!==t&&a!==e).filter(a=>a.tagName?.includes("-")).length>0}function b(e){if(!e)return;const t=C(e.el);if(r.has(t)&&t===e.labelEl||!t&&s.has(e))return;const n=q.bind(e);if(t){e.labelEl=t;const l=o.get(t)||[];l.push(e),o.set(t,l.sort(v)),r.has(e.labelEl)||(r.set(e.labelEl,g),e.labelEl.addEventListener(E,g)),s.delete(e),document.removeEventListener(d,c.get(e)),f.set(e,n),document.addEventListener(u,n)}else s.has(e)||(n(),document.removeEventListener(u,f.get(e)))}function I(e){if(!e||(s.delete(e),document.removeEventListener(d,c.get(e)),document.removeEventListener(u,f.get(e)),c.delete(e),f.delete(e),!e.labelEl))return;const t=o.get(e.labelEl);t.length===1&&(e.labelEl.removeEventListener(E,r.get(e.labelEl)),r.delete(e.labelEl)),o.set(e.labelEl,t.filter(n=>n!==e).sort(v)),e.labelEl=null}function v(e,t){return L(e.el,t.el)?-1:1}function M(e){return e.label||e.labelEl?.textContent?.trim()||""}function g(e){const t=e.detail.sourceEvent.target,n=o.get(this),l=n.find(a=>a.el===t);if(n.includes(l))return;const i=n[0];i.disabled||i.onLabelClick(e)}function W(){s.has(this)&&b(this)}function q(){s.add(this);const e=c.get(this)||W.bind(this);c.set(this,e),document.addEventListener(d,e)}async function y(e){if(await w(e),o.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame(()=>{for(const n of s)if(n.el===t){b(n);break}})}export{y as a,u as b,b as c,I as d,M as g,d as l};
