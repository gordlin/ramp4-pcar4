function c(r, t, n) {
  for (let o = 0; o < n; ++o) t[2 * o] = r[o], t[2 * o + 1] = r[o] - t[2 * o];
}
function f(r, t) {
  const n = r.length;
  for (let o = 0; o < n; ++o) e[0] = r[o], t[o] = e[0];
  return t;
}
function l(r, t) {
  const n = r.length;
  for (let o = 0; o < n; ++o) e[0] = r[o], e[1] = r[o] - e[0], t[o] = e[1];
  return t;
}
const e = new Float32Array(2);
export {
  f as o,
  l as r,
  c as t
};
//# sourceMappingURL=doublePrecisionUtils-BJbYwoii.js.map
