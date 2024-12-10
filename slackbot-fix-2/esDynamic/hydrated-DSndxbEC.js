import { a6 as r, aR as c, aS as h, aT as x, aU as m } from "./main-BDEhVfMj.js";
const Z = { convertToGEGeometry: g, exportPoint: p, exportPolygon: u, exportPolyline: l, exportMultipoint: M, exportExtent: f };
function g(t, e) {
  if (e == null) return null;
  let a = "cache" in e ? e.cache._geVersion : void 0;
  return a == null && (a = t.convertJSONToGeometry(e), "cache" in e && (e.cache._geVersion = a)), a;
}
function p(t, e, a) {
  const o = t.hasZ(e), i = t.hasM(e), s = new r({ x: t.getPointX(e), y: t.getPointY(e), spatialReference: a });
  return o && (s.z = t.getPointZ(e)), i && (s.m = t.getPointM(e)), s.cache._geVersion = e, s;
}
function u(t, e, a) {
  const o = new c({ rings: t.exportPaths(e), hasZ: t.hasZ(e), hasM: t.hasM(e), spatialReference: a });
  return o.cache._geVersion = e, o;
}
function l(t, e, a) {
  const o = new h({ paths: t.exportPaths(e), hasZ: t.hasZ(e), hasM: t.hasM(e), spatialReference: a });
  return o.cache._geVersion = e, o;
}
function M(t, e, a) {
  const o = new x({ hasZ: t.hasZ(e), hasM: t.hasM(e), points: t.exportPoints(e), spatialReference: a });
  return o.cache._geVersion = e, o;
}
function f(t, e, a) {
  const o = t.hasZ(e), i = t.hasM(e), s = new m({ xmin: t.getXMin(e), ymin: t.getYMin(e), xmax: t.getXMax(e), ymax: t.getYMax(e), spatialReference: a });
  if (o) {
    const n = t.getZExtent(e);
    s.zmin = n.vmin, s.zmax = n.vmax;
  }
  if (i) {
    const n = t.getMExtent(e);
    s.mmin = n.vmin, s.mmax = n.vmax;
  }
  return s.cache._geVersion = e, s;
}
export {
  Z as hydratedAdapter
};
//# sourceMappingURL=hydrated-DSndxbEC.js.map
