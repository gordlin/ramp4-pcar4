import { cE as c } from "./main-B3NqHQap.js";
import { c as i } from "./observers-BRpWCcxP.js";
const n = /* @__PURE__ */ new Set();
let e;
const r = { childList: !0 };
function f(o) {
  e || (e = i("mutation", s)), e.observe(o.el, r);
}
function l(o) {
  n.delete(o.el), s(e.takeRecords()), e.disconnect();
  for (const [t] of n.entries())
    e.observe(t, r);
}
function s(o) {
  o.forEach(({ target: t }) => {
    c(t);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-BS0ekURv.js.map