import { bX as i, cz as m, aU as r } from "./main-DhP7SIFv.js";
import { d as x } from "./queryTopFeatures-DOuAya3F.js";
async function N(n, o, e) {
  const s = i(n), a = await x(s, m.from(o), { ...e }), t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax) ? { count: a.data.count, extent: null } : { count: a.data.count, extent: r.fromJSON(t) };
}
export {
  N as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-D1I_ed58.js.map
