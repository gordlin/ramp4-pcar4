import { v as pi } from "./main-BcMvGAQ2.js";
function yi(ct, gt) {
  for (var lt = 0; lt < gt.length; lt++) {
    const rt = gt[lt];
    if (typeof rt != "string" && !Array.isArray(rt)) {
      for (const _ in rt) if (_ !== "default" && !(_ in ct)) {
        const ut = Object.getOwnPropertyDescriptor(rt, _);
        ut && Object.defineProperty(ct, _, ut.get ? ut : { enumerable: !0, get: () => rt[_] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(ct, Symbol.toStringTag, { value: "Module" }));
}
var At = { exports: {} };
(function(ct, gt) {
  function lt() {
    function _(e) {
      if (typeof e == "number") return k.Tc.Zg(e);
      if (e == null) return null;
      if (kt[e] != null) return k.Tc.Zg(kt[e]);
      throw Error("Unrecognised Unit Type");
    }
    function ut(e) {
      if (typeof e == "number") return k.Tc.Zg(e);
      if (e == null) return null;
      if (Mt[e] != null) return k.Tc.Zg(Mt[e]);
      throw Error("Unrecognised Unit Type");
    }
    function pt(e) {
      if (e) switch (e) {
        case "loxodrome":
          return 1;
        case "great-elliptic":
          return 2;
        case "normal-section":
          return 3;
        case "shape-preserving":
          return 4;
      }
      return 0;
    }
    function Y(e, v, f, r) {
      if (f == null || f.B()) return null;
      switch (f.getType()) {
        case k.qn.Point:
          return e.exportPoint(v, f, r);
        case k.qn.Polygon:
          return e.exportPolygon(v, f, r);
        case k.qn.Polyline:
          return e.exportPolyline(v, f, r);
        case k.qn.MultiPoint:
          return e.exportMultipoint(v, f, r);
        case k.qn.Envelope:
          return e.exportExtent(v, f, r);
      }
      return null;
    }
    function bt(e, v, f, r) {
      if (f.getType() !== k.qn.Point) throw Error("Geometry not Point");
      return e.exportPoint(v, f, r);
    }
    function q(e, v, f) {
      return e.convertToGEGeometry(v, f);
    }
    function F(e) {
      var v = e.wkid;
      e = e.wkt2 || e.wkt;
      var f = at.get(v || e);
      return f == null && (v !== -1 && v != null ? (f = k.Eg.create(v), at.set(v, f)) : e && (f = k.Eg.qP(e), at.set(e, f)), ft.has(v || e) && f.VW(ft.get(v || e))), f;
    }
    function Nt(e) {
      var v, f, r;
      if (e == null) return null;
      var n = F(e);
      return e = n.Hd(), n = n.Kn(), (v = {}).tolerance = n, v.unitType = e == null ? -1 : e.od, v.unitID = e == null ? -1 : e.Ec(), v.unitBaseFactor = e == null ? 0 : e.ai, v.unitSquareDerivative = e == null ? 0 : (r = (f = k.Tc.aG(e)) === null || f === void 0 ? void 0 : f.Ec()) !== null && r !== void 0 ? r : 0, v;
    }
    function It(e, v, f, r) {
      return f == null ? null : (f = k.$b.clip(q(e, P, f), q(e, P, r), F(v)), Y(e, P, f, v));
    }
    function Tt(e, v, f, r) {
      f = k.$b.dl(q(e, P, f), q(e, P, r), F(v)), r = [];
      for (var n = 0; n < f.length; n++) r.push(Y(e, P, f[n], v));
      return r;
    }
    function Ct(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.contains(q(e, P, f), q(e, P, r), F(v));
    }
    function Bt(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.BP(q(e, P, f), q(e, P, r), F(v));
    }
    function Pt(e, v, f, r, n) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.tb(q(e, P, f), q(e, P, r), F(v), _(n));
    }
    function Dt(e, v, f, r) {
      return !(f == null && r != null || r == null && f != null) && k.$b.Nb(q(e, P, f), q(e, P, r), F(v));
    }
    function qt(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.TS(q(e, P, f), q(e, P, r), F(v));
    }
    function Gt(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.touches(q(e, P, f), q(e, P, r), F(v));
    }
    function Ft(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.qY(q(e, P, f), q(e, P, r), F(v));
    }
    function Et(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.TP(q(e, P, f), q(e, P, r), F(v));
    }
    function St(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.DU(q(e, P, f), q(e, P, r), F(v));
    }
    function Ot(e, v, f, r, n) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      return k.$b.yB(q(e, P, f), q(e, P, r), F(v), n);
    }
    function Ht(e, v, f) {
      if (f == null) throw Error("Illegal Argument Exception");
      return k.$b.dT(q(e, P, f), F(v));
    }
    function Rt(e, v, f) {
      if (f == null) throw Error("Illegal Argument Exception");
      return f = k.$b.eC(q(e, P, f), F(v)), Y(e, P, f, v);
    }
    function Jt(e, v, f, r) {
      if (r === void 0 && (r = !1), f == null) throw Error("Illegal Argument Exception");
      if (Array.isArray(f)) {
        var n = r, t = [];
        for (r = 0; r < f.length; r++) t.push(q(e, P, f[r]));
        for (f = k.$b.jP(t, n), n = Array(f.length), r = 0; r < f.length; r++) n[r] = Y(e, P, f[r], v);
        return n;
      }
      return r = k.$b.iP(q(e, P, f), F(v)), Y(e, P, r, v);
    }
    function Kt(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      if (Array.isArray(f)) {
        for (var n = [], t = 0; t < f.length; t++) n.push(q(e, P, f[t]));
        for (f = k.$b.QP(n, q(e, P, r), F(v)), r = Array(f.length), t = 0; t < f.length; t++) r[t] = Y(e, P, f[t], v);
        return r;
      }
      return t = k.$b.im(q(e, P, f), q(e, P, r), F(v)), Y(e, P, t, v);
    }
    function Lt(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      if (Array.isArray(f)) {
        for (var n = [], t = 0; t < f.length; t++) n.push(q(e, P, f[t]));
        for (f = k.$b.VX(n, q(e, P, r), F(v)), r = Array(f.length), t = 0; t < f.length; t++) r[t] = Y(e, P, f[t], v);
        return r;
      }
      return t = k.$b.ep(q(e, P, f), q(e, P, r), F(v)), Y(e, P, t, v);
    }
    function Ut(e, v, f, r) {
      if (f == null || r == null) throw Error("Illegal Argument Exception");
      if (Array.isArray(f)) {
        for (var n = [], t = 0; t < f.length; t++) n.push(q(e, P, f[t]));
        for (f = k.$b.RS(n, q(e, P, r), F(v)), r = Array(f.length), t = 0; t < f.length; t++) r[t] = Y(e, P, f[t], v);
        return r;
      }
      return t = k.$b.Ea(q(e, P, f), q(e, P, r), F(v)), Y(e, P, t, v);
    }
    function Wt(e, v, f, r) {
      if (f == null) return null;
      var n = [];
      if (Array.isArray(f)) {
        if (f.length === 0) return null;
        for (r = 0; r < f.length; r++) n.push(q(e, P, f[r]));
      } else n.push(q(e, P, f)), r != null && n.push(q(e, P, r));
      return Y(e, P, k.$b.jY(n, F(v)), v);
    }
    function Vt(e, v, f, r, n, t, i, h) {
      var s = 0;
      if (t != null) switch (t) {
        case "round":
          s = 0;
          break;
        case "bevel":
          s = 1;
          break;
        case "miter":
          s = 2;
          break;
        case "square":
          s = 3;
      }
      if (Array.isArray(f)) {
        if (f == null) e = null;
        else if (f.length === 0) e = [];
        else {
          var o = [];
          for (t = 0; t < f.length; t++) o.push(q(e, P, f[t]));
          for (f = k.$b.BU(o, F(v), r, s, i, h, _(n)), r = Array(f.length), t = 0; t < f.length; t++) r[t] = Y(e, P, f[t], v);
          e = r;
        }
        return e;
      }
      return f = k.$b.offset(q(e, P, f), F(v), r, s, i, h, _(n)), Y(e, P, f, v);
    }
    function Xt(e, v, f, r, n, t) {
      if (t === void 0 && (t = !1), Array.isArray(f)) {
        if (!Array.isArray(r)) {
          for (var i = [], h = 0; h < f.length; h++) i.push(r);
          r = i;
        }
        if (r.length != f.length) {
          if (r.length == 0) throw Error("Illegal Argument Exception");
          i = [];
          var s = 0;
          for (h = 0; h < f.length; h++) r[h] === void 0 ? i.push(s) : (i.push(r[h]), s = r[h]);
          r = i;
        }
        return xt(e, v, f, r, n, !1, t, "geodesic", NaN);
      }
      return f = k.$b.buffer(q(e, P, f), F(v), r, _(n), !1, 0, NaN), Y(e, P, f, v);
    }
    function Yt(e, v, f, r, n, t, i, h) {
      if (Array.isArray(f)) {
        if (!Array.isArray(r)) {
          for (var s = [], o = 0; o < f.length; o++) s.push(r);
          r = s;
        }
        if (r.length !== f.length) {
          if (r.length === 0) throw Error("Illegal Argument Exception");
          s = [];
          var a = 0;
          for (o = 0; o < f.length; o++) r[o] === void 0 ? s.push(a) : (s.push(r[o]), a = r[o]);
          r = s;
        }
        return xt(e, v, f, r, n, !0, t, i, h);
      }
      return i === void 0 && (i = NaN), f = k.$b.buffer(q(e, P, f), F(v), r, _(n), !0, pt(t), i), Y(e, P, f, v);
    }
    function xt(e, v, f, r, n, t, i, h, s) {
      if (s === void 0 && (s = NaN), f == null) return null;
      if (f.length === 0) return [];
      for (var o = [], a = 0; a < f.length; a++) o.push(q(e, P, f[a]));
      for (f = k.$b.MN(o, F(v), r, _(n), t, i, pt(h), s), r = Array(f.length), a = 0; a < f.length; a++) r[a] = Y(e, P, f[a], v);
      return r;
    }
    function Qt(e, v, f, r, n) {
      var t;
      return n === void 0 && (n = !0), f = k.$b.nz(q(e, P, f), q(e, P, r), n), (t = {}).coordinate = bt(e, P, f.fz(), v), t.distance = f.hz(), t.isRightSide = f.Sz(), t.vertexIndex = f.Ua(), t.isEmpty = f.B(), t;
    }
    function $t(e, v, f, r) {
      var n;
      return f = k.$b.oz(q(e, P, f), q(e, P, r)), (n = {}).coordinate = bt(e, P, f.fz(), v), n.distance = f.hz(), n.isRightSide = f.Sz(), n.vertexIndex = f.Ua(), n.isEmpty = f.B(), n;
    }
    function Zt(e, v, f, r, n, t) {
      var i;
      for (f = k.$b.pz(q(e, P, f), q(e, P, r), n, t), r = [], n = 0; n < f.length; n++) f[n].B() === !1 && r.push(((i = {}).coordinate = bt(e, P, f[n].fz(), v), i.distance = f[n].hz(), i.isRightSide = f[n].Sz(), i.vertexIndex = f[n].Ua(), i.isEmpty = f[n].B(), i));
      return r;
    }
    function _t(e, v, f, r, n, t) {
      return f = k.$b.QQ(q(e, P, f), F(v), r, n, _(t)), Y(e, P, f, v);
    }
    function ti(e, v, f, r, n) {
      return f = k.$b.Qr(q(e, P, f), F(v), r, _(n)), Y(e, P, f, v);
    }
    function ii(e, v, f, r, n, t) {
      return t === void 0 && (t = 0), f = k.$b.Wy(q(e, P, f), F(v), r, _(n), t), Y(e, P, f, v);
    }
    function ni(e, v, f, r) {
      if (f == null) throw Error("Illegal Argument Exception");
      return k.$b.JU(q(e, P, f), F(v), ut(r));
    }
    function hi(e, v, f, r) {
      if (f == null) throw Error("Illegal Argument Exception");
      return k.$b.KU(q(e, P, f), F(v), _(r));
    }
    function ri(e, v, f, r, n) {
      if (f == null) throw Error("Illegal Argument Exception");
      return k.$b.WQ(q(e, P, f), F(v), ut(r), pt(n));
    }
    function ei(e, v, f, r, n) {
      if (f == null) throw Error("Illegal Argument Exception");
      return k.$b.ZQ(q(e, P, f), F(v), _(r), pt(n));
    }
    function si(e) {
      k.NL.bind(e);
    }
    function oi(e, v, f, r, n) {
      var t = null, i = null;
      if (r) {
        if (!n) throw k.i.N("AOI missing Spatial Reference");
        t = q(e, P, r), i = F(n).fh();
      }
      return (e = k.gu.XR(F(v).fh(), F(f).fh(), t, i)) !== null ? e : null;
    }
    function ai(e, v, f, r, n) {
      var t = null, i = null;
      if (r) {
        if (!n) throw k.i.N("AOI missing Spatial Reference");
        t = q(e, P, r), i = F(n).fh();
      }
      return k.gu.YR(F(v).fh(), F(f).fh(), t, i);
    }
    function ui(e, v, f, r, n, t) {
      if (n === void 0 && (n = null), t === void 0 && (t = null), t) {
        var i = new k.yC();
        i.Vu = t.densificationStep, i.Jr = t.centralMeridianOfOutputGCS, t.clipWithInputHorizon && i.PW(t.clipWithInputHorizon), t.clipWithOutputHorizon && i.QW(t.clipWithOutputHorizon);
      }
      if (this.KY === !1) throw Error("Projection Engine must be enabled using enableProjection");
      if (v.length === 0) return [];
      if (n) {
        if (!(t = n.getCachedGeTransformation(f, r))) t: {
          if (t = n, n = null, t) {
            var h = t.getGTListEntry();
            if (h !== null) {
              n = new k.wC(null);
              for (var s = 0, o = h.steps; s < o.length; s++) {
                h = o[s];
                var a = new k.Dx(h.geogtran);
                h.isInverse && a.Qz(), n.add(a);
              }
              i = k.vr.Nr(F(f).fh(), F(r).fh(), n, i), t.assignCachedGe(f, r, i), t = i;
              break t;
            }
          }
          if (n === null && t && t.steps && 0 < t.steps.length) {
            for (n = new k.wC(null), s = 0, o = t.steps; s < o.length; s++) (h = o[s]).wkid != -1 && h.wkid != null ? n.add(k.Dx.create(h.wkid, h.isInverse)) : n.add(k.Dx.uP(h.wkt, h.isInverse));
            i = k.vr.Nr(F(f).fh(), F(r).fh(), n, i), t.assignCachedGe(f, r, i), t = i;
          } else t = k.vr.Nr(F(f).fh(), F(r).fh(), n, i);
        }
        for (f = [], n = 0; n < v.length; n++) i = v[n], f.push(mt(e, i, r, t));
      } else for (t = k.vr.Nr(F(f).fh(), F(r).fh(), null), f = [], n = 0; n < v.length; n++) i = v[n], f.push(mt(e, i, r, t));
      return f;
    }
    function mt(e, v, f, r) {
      return v = k.$b.zh(q(e, P, v), r), Y(e, P, v, f);
    }
    function fi(e, v) {
      e != null && (e = e.wkid || e.wkt2 || e.wkt, ft.has(e), ft.set(e, v), at.has(e) && at.delete(e));
    }
    function ci(e) {
      e != null && (e = e.wkid || e.wkt2 || e.wkt, ft.has(e) && (ft.delete(e), at.has(e) && at.delete(e)));
    }
    function li(e, v, f, r) {
      if (f == null || r == null) return [];
      var n = [], t = 0;
      for (f = k.$b.QS(q(e, P, f), q(e, P, r), F(v)) || []; t < f.length; t++) n.push(Y(e, P, f[t], v));
      return n;
    }
    var Z, k, it, jt, J = this && this.__extends || /* @__PURE__ */ function() {
      function e(v, f) {
        return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
          r.__proto__ = n;
        } || function(r, n) {
          for (var t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
        })(v, f);
      }
      return function(v, f) {
        function r() {
          this.constructor = v;
        }
        e(v, f), v.prototype = f === null ? Object.create(f) : (r.prototype = f.prototype, new r());
      };
    }();
    (function(e) {
      var v;
      (v = e.qn || (e.qn = {}))[v.Unknown = 0] = "Unknown", v[v.Point = 33] = "Point", v[v.Line = 322] = "Line", v[v.Envelope = 197] = "Envelope", v[v.MultiPoint = 550] = "MultiPoint", v[v.Polyline = 1607] = "Polyline", v[v.Polygon = 1736] = "Polygon", function(r) {
        r[r.enumMild = 0] = "enumMild", r[r.enumMedium = 1] = "enumMedium", r[r.enumHot = 2] = "enumHot";
      }(e.YK || (e.YK = {}));
      var f = function() {
        function r() {
          this.description = null, this.VA = 0;
        }
        return r.prototype.getType = function() {
          return 0;
        }, r.prototype.Db = function() {
          return -1;
        }, r.prototype.Nf = function(n) {
          this.vc(), n != this.description && this.sn(n);
        }, r.prototype.sn = function() {
        }, r.prototype.Jl = function(n) {
          this.vc(), n != this.description && (n = e.ee.CR(this.description, n)) != this.description && this.sn(n);
        }, r.prototype.hasAttribute = function(n) {
          return this.description.hasAttribute(n);
        }, r.prototype.re = function(n) {
          this.vc(), this.description.hasAttribute(n) || (n = e.ee.BR(this.description, n), this.sn(n));
        }, r.prototype.Tg = function() {
          return null;
        }, r.prototype.bn = function() {
        }, r.prototype.A = function() {
        }, r.prototype.Qo = function() {
        }, r.prototype.xc = function(n) {
          this.A(n);
        }, r.prototype.B = function() {
          return !0;
        }, r.prototype.Oa = function() {
        }, r.prototype.Oc = function() {
        }, r.prototype.Ia = function() {
          return null;
        }, r.prototype.copyTo = function() {
        }, r.prototype.Ke = function() {
          return 0;
        }, r.prototype.Qb = function() {
          return 0;
        }, r.prototype.iG = function() {
          return this.hasAttribute(1);
        }, r.tf = function(n) {
          return 1 + ((192 & n) >> 6) >> 1;
        }, r.Rn = function(n) {
          return (32 & n) != 0;
        }, r.US = function(n) {
          return (128 & n) != 0;
        }, r.yd = function(n) {
          return (256 & n) != 0;
        }, r.xj = function(n) {
          return (512 & n) != 0;
        }, r.Hc = function(n) {
          return (1024 & n) != 0;
        }, r.prototype.Of = function() {
          var n = this.Ia();
          return this.copyTo(n), n;
        }, r.prototype.mg = function() {
          return null;
        }, r.jg = function(n) {
          var t = n.Ia();
          return n.copyTo(t), t;
        }, r.prototype.vc = function() {
          0 <= this.VA && (this.VA += 2147483649);
        }, r.Ax = function(n) {
          var t = n.getType();
          if (r.xj(t)) return n.I();
          if (n.B()) return 0;
          if (t == 197) return 4;
          if (t == 33) return 1;
          if (r.yd(t)) return 2;
          throw e.i.fa("missing type");
        }, r;
      }();
      e.aa = f;
    })(k || (k = {})), it = k || (k = {}), jt = function() {
      function e() {
        this.y = this.x = 0;
      }
      return e.construct = function(v, f) {
        var r = new e();
        return r.x = v, r.y = f, r;
      }, e.al = function(v) {
        var f = new e();
        return f.x = v.x, f.y = v.y, f;
      }, e.prototype.ma = function(v, f) {
        this.x = v, this.y = f;
      }, e.prototype.L = function(v) {
        this.x = v.x, this.y = v.y;
      }, e.prototype.fq = function(v, f) {
        return this.x === v && this.y === f;
      }, e.prototype.Rz = function(v) {
        return 2220446049250313e-31 >= Math.abs(this.x - v.x) && 2220446049250313e-31 >= Math.abs(this.y - v.y);
      }, e.prototype.qb = function(v) {
        return this.x === v.x && this.y === v.y;
      }, e.prototype.Nb = function(v) {
        return v == this || v instanceof e && this.x == v.x && this.y == v.y;
      }, e.prototype.sub = function(v) {
        this.x -= v.x, this.y -= v.y;
      }, e.prototype.uc = function(v, f) {
        this.x = v.x - f.x, this.y = v.y - f.y;
      }, e.prototype.add = function(v, f) {
        f !== void 0 ? (this.x = v.x + f.x, this.y = v.y + f.y) : (this.x += v.x, this.y += v.y);
      }, e.prototype.Sq = function() {
        this.x = -this.x, this.y = -this.y;
      }, e.prototype.mt = function(v) {
        this.x = -v.x, this.y = -v.y;
      }, e.prototype.NS = function(v, f, r) {
        this.x = v.x * (1 - r) + f.x * r, this.y = v.y * (1 - r) + f.y * r;
      }, e.prototype.Ct = function(v, f) {
        this.x = this.x * v + f.x, this.y = this.y * v + f.y;
      }, e.prototype.HW = function(v, f, r) {
        this.x = f.x * v + r.x, this.y = f.y * v + r.y;
      }, e.prototype.scale = function(v) {
        this.x *= v, this.y *= v;
      }, e.prototype.compare = function(v) {
        return this.y < v.y ? -1 : this.y > v.y ? 1 : this.x < v.x ? -1 : this.x > v.x ? 1 : 0;
      }, e.prototype.normalize = function() {
        var v = this.length();
        v == 0 && (this.x = 1, this.y = 0), this.x /= v, this.y /= v;
      }, e.prototype.length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }, e.prototype.Sk = function() {
        return this.x * this.x + this.y * this.y;
      }, e.tb = function(v, f) {
        return Math.sqrt(this.yc(v, f));
      }, e.Oy = function(v, f, r, n) {
        return v -= r, f -= n, Math.sqrt(v * v + f * f);
      }, e.prototype.Qh = function(v) {
        return this.x * v.x + this.y * v.y;
      }, e.prototype.fD = function(v) {
        return Math.abs(this.x * v.x) + Math.abs(this.y * v.y);
      }, e.prototype.wi = function(v) {
        return this.x * v.y - this.y * v.x;
      }, e.prototype.Bt = function(v, f) {
        var r = -this.x * f + this.y * v;
        this.x = this.x * v + this.y * f, this.y = r;
      }, e.prototype.Hv = function() {
        var v = this.x;
        this.x = -this.y, this.y = v;
      }, e.prototype.MG = function(v) {
        this.x = -v.y, this.y = v.x;
      }, e.prototype.ar = function() {
        var v = this.x;
        this.x = this.y, this.y = -v;
      }, e.prototype.qu = function() {
        return 0 < this.x ? 0 <= this.y ? 1 : 4 : 0 < this.y ? 2 : this.x == 0 ? 4 : 3;
      }, e.nu = function(v, f) {
        var r = v.qu(), n = f.qu();
        return n == r ? 0 > (v = v.wi(f)) ? 1 : 0 < v ? -1 : 0 : r < n ? -1 : 1;
      }, e.yc = function(v, f) {
        var r = v.x - f.x;
        return r * r + (v = v.y - f.y) * v;
      }, e.prototype.toString = function() {
        return "(" + this.x + " , " + this.y + ")";
      }, e.prototype.Rc = function() {
        this.y = this.x = NaN;
      }, e.prototype.isNaN = function() {
        return isNaN(this.x) || isNaN(this.y);
      }, e.prototype.offset = function(v, f) {
        var r = e.tb(v, f), n = e.construct(this.x, this.y);
        if (r == 0) return e.tb(n, v);
        var t = new e();
        return t.L(f), t.sub(v), n.sub(v), n.wi(t) / r;
      }, e.Uq = function(v, f, r) {
        var n = new it.Wb();
        n.set(f.x), n.sub(v.x);
        var t = new it.Wb();
        t.set(r.y), t.sub(v.y);
        var i = new it.Wb();
        i.set(f.y), i.sub(v.y);
        var h = new it.Wb();
        return h.set(r.x), h.sub(v.x), n.Ag(t), i.Ag(h), n.sub(i), n.ps() ? (n = new it.hp(f.x), t = new it.hp(v.x), i = new it.hp(v.y), n = n.jt(t), v = (v = new it.hp(r.y)).jt(i), f = (f = new it.hp(f.y)).jt(i), r = (r = new it.hp(r.x)).jt(t), n = n.lr(v), f = f.lr(r), (n = n.lr(f)).nT() ? -1 : n.fS() ? 1 : 0) : 0 > (r = n.value()) ? -1 : 0 < r ? 1 : 0;
      }, e.prototype.cc = function() {
        return it.O.uj(it.O.uj());
      }, e;
    }(), it.h = jt, function(e) {
      var v = function() {
        function f(r) {
          this.Fy = this.Mt = 0, this.OX = r;
        }
        return f.prototype.reset = function() {
          this.Fy = this.Mt = 0;
        }, f.prototype.add = function(r) {
          r -= this.Fy;
          var n = this.Mt + r;
          this.Fy = n - this.Mt - r, this.Mt = n;
        }, f.prototype.sub = function(r) {
          this.add(-r);
        }, f.prototype.rm = function() {
          return this.OX + this.Mt;
        }, f;
      }();
      e.Fx = v, e.lc = function() {
        function f() {
        }
        return f.Cn = function(r, n) {
          return 0 <= n ? Math.abs(r) : -Math.abs(r);
        }, f.sign = function(r) {
          return 0 > r ? -1 : 0 < r ? 1 : 0;
        }, f.RK = function(r) {
          return r - 360 * Math.floor(r / 360);
        }, f.round = function(r) {
          return Math.floor(r + 0.5);
        }, f.ox = function(r) {
          return r * r;
        }, f.hq = function(r, n, t) {
          return 0.5 >= t ? r + (n - r) * t : n - (n - r) * (1 - t);
        }, f.OG = function(r, n, t, i) {
          0.5 >= t ? (i.x = r.x + (n.x - r.x) * t, i.y = r.y + (n.y - r.y) * t) : (i.x = n.x - (n.x - r.x) * (1 - t), i.y = n.y - (n.y - r.y) * (1 - t));
        }, f.lT = function(r, n, t, i, h, s) {
          0.5 >= h ? (s.x = r + (t - r) * h, s.y = n + (i - n) * h) : (s.x = t - (t - r) * (1 - h), s.y = i - (i - n) * (1 - h));
        }, f;
      }();
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          var n = f.call(this) || this;
          return n.sa = 0, n.na = 0, n.pa = 0, n.la = 0, n.ka = null, n;
        }
        return J(r, f), r.prototype.ac = function() {
          return e.h.construct(this.sa, this.na);
        }, r.prototype.Yp = function(n) {
          n.x = this.sa, n.y = this.na;
        }, r.prototype.Dc = function(n) {
          this.em(0, n);
        }, r.prototype.ZB = function(n, t) {
          this.em(0, e.h.construct(n, t));
        }, r.prototype.To = function(n) {
          this.hD(0, n);
        }, r.prototype.setStart = function(n) {
          this.uD(0, n);
        }, r.prototype.wv = function(n, t) {
          return this.Od(0, n, t);
        }, r.prototype.YB = function(n, t, i) {
          this.tn(0, n, t, i);
        }, r.prototype.wc = function() {
          return e.h.construct(this.pa, this.la);
        }, r.prototype.Tr = function(n) {
          n.x = this.pa, n.y = this.la;
        }, r.prototype.Qc = function(n) {
          this.em(1, n);
        }, r.prototype.Ql = function(n, t) {
          this.em(1, e.h.construct(n, t));
        }, r.prototype.Po = function(n) {
          this.hD(1, n);
        }, r.prototype.setEnd = function(n) {
          this.uD(1, n);
        }, r.prototype.gv = function(n, t) {
          return this.Od(1, n, t);
        }, r.prototype.OB = function(n, t, i) {
          this.tn(1, n, t, i);
        }, r.prototype.Db = function() {
          return 1;
        }, r.prototype.B = function() {
          return this.Ac();
        }, r.prototype.Oa = function() {
        }, r.prototype.Ke = function() {
          return 0;
        }, r.prototype.Ea = function(n, t, i, h, s) {
          return this.KM(n, t, i, h, s);
        }, r.prototype.isIntersecting = function(n, t) {
          return this.zr(n, t, !1) != 0;
        }, r.prototype.qs = function(n, t) {
          return this.ru(n, t, !1);
        }, r.prototype.ru = function() {
          return null;
        }, r.prototype.Ac = function() {
          return !1;
        }, r.prototype.ay = function(n) {
          if (this.vc(), this.ka == null && 0 < n) this.ka = e.O.lg(2 * n);
          else if (this.ka != null && this.ka.length < 2 * n) {
            for (var t = this.ka.slice(0), i = this.ka.length; i < 2 * n; i++) t[i] = 0;
            this.ka = t;
          }
        }, r.gM = function(n, t, i) {
          if (0 < i) var h = 0;
          for (var s = 0; s < i; s++) t[0 + h] = n[0], h++;
        }, r.prototype.em = function(n, t) {
          n != 0 ? (this.pa = t.x, this.la = t.y) : (this.sa = t.x, this.na = t.y);
        }, r.prototype.sn = function(n) {
          if (this.ka != null) {
            for (var t = e.ee.Iw(n, this.description), i = [], h = r.Gg(this.description, 0), s = r.Gg(this.description, 1), o = r.Gg(n, 0), a = r.Gg(n, 1), u = 0, c = 1, l = n.Aa; c < l; c++) {
              var p = n.kd(c), y = e.ra.Va(p);
              if (t[c] == -1) {
                var d = e.ra.se(p);
                for (p = 0; p < y; p++) i[o + u] = d, i[a + u] = d, u++;
              } else for (d = this.description.$j(t[c]) - 2, p = 0; p < y; p++) i[o + u] = this.ka[h + d], i[a + u] = this.ka[s + d], u++, d++;
            }
            this.ka = i;
          }
          this.description = n;
        }, r.prototype.hD = function(n, t) {
          if (this.Ac()) throw e.i.fa("empty geometry");
          t.Nf(this.description), t.Ac() && t.un();
          for (var i = 0; i < this.description.Aa; i++) for (var h = this.description.Ed(i), s = 0, o = e.ra.Va(h); s < o; s++) {
            var a = this.Od(n, h, s);
            t.setAttribute(h, s, a);
          }
        }, r.prototype.uD = function(n, t) {
          if (this.vc(), t.Ac()) throw e.i.fa("empty geometry");
          for (var i = t.description, h = 0, s = i.Aa; h < s; h++) for (var o = i.Ed(h), a = e.ra.Va(o), u = 0; u < a; u++) {
            var c = t.Uc(o, u);
            this.tn(n, o, u, c);
          }
        }, r.prototype.Od = function(n, t, i) {
          if (this.Ac()) throw e.i.fa("This operation was performed on an Empty Geometry.");
          if (t == 0) return n != 0 ? i != 0 ? this.la : this.pa : i != 0 ? this.na : this.sa;
          if (i >= e.ra.Va(t)) throw e.i.ce();
          var h = this.description.Pf(t);
          return 0 <= h ? (this.ka != null && this.ay(this.description.Ae.length - 2), this.ka[r.Gg(this.description, n) + this.description.$j(h) - 2 + i]) : e.ra.se(t);
        }, r.prototype.tn = function(n, t, i, h) {
          if (this.vc(), i >= e.ra.Va(t)) throw e.i.ce();
          var s = this.description.Pf(t);
          0 > s && (this.re(t), s = this.description.Pf(t)), t == 0 ? n != 0 ? i != 0 ? this.la = h : this.pa = h : i != 0 ? this.na = h : this.sa = h : (this.ka == null && this.ay(this.description.Ae.length - 2), this.ka[r.Gg(this.description, n) + this.description.$j(s) - 2 + i] = h);
        }, r.prototype.copyTo = function(n) {
          if (n.getType() != this.getType()) throw e.i.N();
          n.description = this.description, n.ay(this.description.Ae.length - 2), r.gM(this.ka, n.ka, 2 * (this.description.Ae.length - 2)), n.sa = this.sa, n.na = this.na, n.pa = this.pa, n.la = this.la, n.vc(), this.op(n);
        }, r.prototype.Tg = function(n, t) {
          var i = new e.Nc();
          return this.Ac() ? (i.Oa(), i) : (i.oa = this.Od(0, n, t), i.va = i.oa, i.Lk(this.Od(1, n, t)), i);
        }, r.prototype.ZI = function(n) {
          this.Ac() ? n.Oa() : (n.oa = this.Od(0, 0, 0), n.va = n.oa, n.Lk(this.Od(1, 0, 0)));
        }, r.prototype.Tw = function(n, t) {
          t.Nf(this.description), t.Cb(this.hc(n));
          for (var i = 1, h = this.description.Aa; i < h; i++) for (var s = this.description.Ed(i), o = e.ra.Va(s), a = 0; a < o; a++) {
            var u = this.Uc(n, s, a);
            t.setAttribute(s, a, u);
          }
        }, r.prototype.FM = function(n) {
          if (this.description != n.description || this.sa != n.sa || this.pa != n.pa || this.na != n.na || this.la != n.la) return !1;
          for (var t = 0; t < 2 * (this.description.Ae.length - 2); t++) if (this.ka[t] != n.ka[t]) return !1;
          return !0;
        }, r.prototype.BG = function() {
          return this.sa == this.pa && this.na == this.la;
        }, r.prototype.reverse = function() {
          var n = this.sa;
          this.sa = this.pa, this.pa = n, n = this.na, this.na = this.la, this.la = n, n = 1;
          for (var t = this.description.Aa; n < t; n++) for (var i = this.description.kd(n), h = 0, s = e.ra.Va(i); h < s; h++) {
            var o = this.Od(0, i, h), a = this.Od(1, i, h);
            this.tn(0, i, h, a), this.tn(1, i, h, o);
          }
        }, r.prototype.zr = function(n, t, i) {
          var h = this.getType(), s = n.getType();
          if (h === 322) {
            if (s == 322) return e.yb.OM(this, n, t, i);
            throw e.i.Qa();
          }
          throw e.i.Qa();
        }, r.prototype.KM = function(n, t, i, h, s) {
          var o = this.getType(), a = n.getType();
          if (o === 322) {
            if (a == 322) return e.yb.Zx(this, n, t, i, h, s);
            throw e.i.Qa();
          }
          throw e.i.Qa();
        }, r.prototype.Tx = function() {
          return null;
        }, r.Gg = function(n, t) {
          return t * (n.Ae.length - 2);
        }, r.prototype.hc = function(n, t) {
          if (t === void 0) return t = new e.h(), this.hc(n, t), t;
          e.lc.lT(this.sa, this.na, this.pa, this.la, n, t);
        }, r.prototype.fe = function() {
          return null;
        }, r.prototype.eG = function() {
          return null;
        }, r.prototype.cq = function() {
          return null;
        }, r.prototype.Bi = function() {
          return null;
        }, r.prototype.Pn = function() {
          return null;
        }, r.prototype.kg = function() {
          return null;
        }, r.prototype.Ux = function(n, t) {
          return t !== void 0 ? this.vx(t) - this.vx(n) : this.vx(n);
        }, r.prototype.op = function() {
        }, r.prototype.dl = function() {
          return null;
        }, r.prototype.ah = function() {
        }, r.prototype.Uc = function() {
          return null;
        }, r.prototype.Pe = function() {
          return null;
        }, r.prototype.vx = function() {
          return null;
        }, r.prototype.NG = function() {
          return null;
        }, r.prototype.tb = function(n, t) {
          if (!t && this.zr(n, 0, !1) != 0) return 0;
          t = 17976931348623157e292;
          var i = this.ac(), h = n.fe(i, !1);
          return i.sub(n.hc(h)), (i = i.length()) < t && (t = i), i = this.wc(), h = n.fe(i, !1), i.sub(n.hc(h)), (i = i.length()) < t && (t = i), i = n.ac(), h = this.fe(i, !1), i.sub(this.hc(h)), (i = i.length()) < t && (t = i), i = n.wc(), h = this.fe(i, !1), i.sub(this.hc(h)), (i = i.length()) < t && (t = i), t;
        }, r.prototype.mg = function() {
          return e.pi.gm(this, null);
        }, r;
      }(e.aa);
      e.SC = v;
    }(k || (k = {})), new k.h(), function(e) {
      var v;
      (v = e.$K || (e.$K = {}))[v.Unknown = -1] = "Unknown", v[v.Not = 0] = "Not", v[v.Weak = 1] = "Weak", v[v.Strong = 2] = "Strong", function(r) {
        r[r.DirtyIsKnownSimple = 1] = "DirtyIsKnownSimple", r[r.IsWeakSimple = 2] = "IsWeakSimple", r[r.IsStrongSimple = 4] = "IsStrongSimple", r[r.DirtyOGCFlags = 8] = "DirtyOGCFlags", r[r.DirtyVerifiedStreams = 32] = "DirtyVerifiedStreams", r[r.DirtyExactIntervals = 64] = "DirtyExactIntervals", r[r.DirtyLooseIntervals = 128] = "DirtyLooseIntervals", r[r.DirtyIntervals = 192] = "DirtyIntervals", r[r.DirtyIsEnvelope = 256] = "DirtyIsEnvelope", r[r.DirtyLength2D = 512] = "DirtyLength2D", r[r.DirtyRingAreas2D = 1024] = "DirtyRingAreas2D", r[r.DirtyCoordinates = 1993] = "DirtyCoordinates", r[r.DirtyAllInternal = 65535] = "DirtyAllInternal", r[r.DirtyAll = 16777215] = "DirtyAll";
      }(e.MK || (e.MK = {}));
      var f = function(r) {
        function n() {
          var t = r.call(this) || this;
          return t.Hm = 65535, t.wa = 0, t.Pg = -1, t.Bb = null, t;
        }
        return J(n, r), n.prototype.op = function() {
        }, n.prototype.$x = function() {
        }, n.prototype.iy = function() {
        }, n.prototype.I = function() {
          return this.wa;
        }, n.prototype.B = function() {
          return this.Ac();
        }, n.prototype.Ac = function() {
          return this.wa == 0;
        }, n.prototype.ak = function(t) {
          return (this.Hm & t) != 0;
        }, n.prototype.Lf = function(t, i) {
          this.Hm = i ? this.Hm | t : this.Hm & ~t;
        }, n.prototype.mc = function() {
          this.ak(32) && this.bN();
        }, n.prototype.wx = function() {
          if (this.Ac()) throw e.i.fa("This operation was performed on an Empty Geometry.");
        }, n.prototype.ve = function(t, i) {
          if (0 > t || t >= this.wa) throw e.i.fa("index out of bounds");
          this.mc(), i.Nf(this.description), i.B() && i.un();
          for (var h = 0; h < this.description.Aa; h++) for (var s = this.description.Ed(h), o = 0, a = e.ra.Va(s); o < a; o++) {
            var u = this.za[h].eg(a * t + o);
            i.setAttribute(s, o, u);
          }
        }, n.prototype.Ht = function(t, i) {
          this.mc();
          for (var h = i.description, s = 0; s < h.Aa; s++) for (var o = h.Ed(s), a = e.ra.Va(o), u = 0; u < a; u++) {
            var c = i.Uc(o, u);
            this.setAttribute(o, t, u, c);
          }
        }, n.prototype.D = function(t, i) {
          if (0 > t || t >= this.I()) throw e.i.ce();
          this.mc(), this.za[0].tc(2 * t, i);
        }, n.prototype.Na = function(t) {
          var i = new e.h();
          return this.D(t, i), i;
        }, n.prototype.Gc = function(t, i) {
          this.za[0].tc(2 * t, i);
        }, n.prototype.Cb = function(t, i, h) {
          if (0 > t || t >= this.wa) throw e.i.ce();
          this.mc();
          var s = this.za[0];
          h !== void 0 ? (s.write(2 * t, i), s.write(2 * t + 1, h)) : s.Tt(2 * t, i), this.Pc(1993);
        }, n.prototype.Cz = function() {
          if (void 0 >= this.I()) throw e.i.ce();
          this.mc();
          var t = this.za[0], i = new e.Nd();
          return i.x = t.read(NaN), i.y = t.read(NaN), i.z = this.hasAttribute(1) ? this.za[1].eg() : e.ra.se(1), i;
        }, n.prototype.dC = function(t) {
          if (0 > t || t >= this.I()) throw e.i.ce();
          this.re(1), this.mc(), this.Pc(1993);
          var i = this.za[0];
          i.write(2 * t, (void 0).x), i.write(2 * t + 1, (void 0).y), this.za[1].pr(t, (void 0).z);
        }, n.prototype.Uc = function(t, i, h) {
          if (0 > i || i >= this.wa) throw e.i.ce();
          var s = e.ra.Va(t);
          if (h >= s) throw e.i.ce();
          this.mc();
          var o = this.description.Pf(t);
          return 0 <= o ? this.za[o].eg(i * s + h) : e.ra.se(t);
        }, n.prototype.yF = function(t, i) {
          return this.Uc(t, i);
        }, n.prototype.setAttribute = function(t, i, h, s) {
          if (0 > i || i >= this.wa) throw e.i.ce();
          var o = e.ra.Va(t);
          if (h >= o) throw e.i.ce();
          this.re(t), this.mc(), t = this.description.Pf(t), this.Pc(1993), this.za[t].pr(i * o + h, s);
        }, n.prototype.ub = function(t) {
          return this.wx(), this.re(t), this.mc(), this.za[this.description.Pf(t)];
        }, n.prototype.hn = function(t, i) {
          if (i != null && e.ra.Tp(t) != i.Tp()) throw e.i.N();
          this.re(t), t = this.description.Pf(t), this.za == null && (this.za = e.Yc.qI(this.description.Aa)), this.za[t] = i, this.Pc(16777215);
        }, n.prototype.sn = function(t) {
          var i = null;
          if (this.za != null) {
            var h = e.ee.Iw(t, this.description);
            i = [];
            for (var s = 0, o = t.Aa; s < o; s++) h[s] != -1 && (i[s] = this.za[h[s]]);
          }
          this.description = t, this.za = i, this.Pg = -1, this.Pc(16777215);
        }, n.prototype.AD = function(t) {
          this.wu(!0), t instanceof e.l ? this.$.A(t) : this.$.Qo(t);
        }, n.prototype.aN = function(t) {
          this.wu(!1), t instanceof e.l ? this.$.A(t) : this.$.Qo(t);
        }, n.prototype.bn = function(t) {
          this.wu(!0), this.$.copyTo(t);
        }, n.prototype.A = function(t) {
          this.AD(t);
        }, n.prototype.Qo = function(t) {
          this.AD(t);
        }, n.prototype.xc = function(t) {
          this.aN(t);
        }, n.prototype.Tg = function(t, i) {
          var h = new e.Nc();
          return this.Ac() ? (h.Oa(), h) : (this.wu(!0), this.$.Tg(t, i));
        }, n.prototype.cc = function() {
          var t = this.description.cc();
          if (!this.Ac()) for (var i = this.I(), h = 0, s = this.description.Aa; h < s; h++) t = this.za[h].An(t, 0, i * e.ra.Va(this.description.Ed(h)));
          return t;
        }, n.prototype.Nb = function(t) {
          if (t == this) return !0;
          if (!(t instanceof n && this.description.Nb(t.description)) || this.Ac() != t.Ac()) return !1;
          if (this.Ac()) return !0;
          var i = this.I();
          if (i != t.I()) return !1;
          for (var h = 0; h < this.description.Aa; h++) {
            var s = this.description.kd(h), o = this.ub(s), a = t.ub(s);
            if (!o.Nb(a, 0, i * e.ra.Va(s))) return !1;
          }
          return !0;
        }, n.prototype.copyTo = function(t) {
          if (t.getType() != this.getType()) throw e.i.N();
          this.dD(t);
        }, n.prototype.dD = function(t) {
          this.mc(), t.description = this.description, t.za = null;
          var i = this.description.Aa, h = null;
          if (this.za != null) {
            h = [];
            for (var s = 0; s < i; s++) this.za[s] != null && (h[s] = this.za[s].GB(this.I() * e.ra.Va(this.description.Ed(s))));
          }
          this.$ != null ? (t.$ = this.$.Ia(), this.$.copyTo(t.$)) : t.$ = null, t.wa = this.wa, t.Hm = this.Hm, t.za = h;
          try {
            this.op(t);
          } catch {
            throw t.Oa(), e.i.fu();
          }
        }, n.prototype.wD = function() {
          this.wa = 0, this.Pg = -1, this.za = null, this.Pc(16777215);
        }, n.prototype.Pc = function(t) {
          t == 16777215 && (this.Pg = -1, this.$x()), this.Hm |= t, this.lM(), this.vc();
        }, n.prototype.wu = function(t) {
          if (this.mc(), this.ak(192)) if (this.$ == null ? this.$ = new e.Fh(this.description) : this.$.Nf(this.description), this.B()) this.$.Oa();
          else {
            this.hy(t);
            for (var i = 1; i < this.description.Aa; i++) for (var h = this.description.Ed(i), s = e.ra.Va(h), o = this.za[i], a = 0; a < s; a++) {
              var u = new e.Nc();
              u.Oa();
              for (var c = 0; c < this.wa; c++) {
                var l = o.eg(c * s + a);
                u.Zb(l);
              }
              this.$.setInterval(h, a, u);
            }
            t && this.Lf(192, !1);
          }
        }, n.prototype.hy = function() {
          this.$.Oa();
          for (var t = this.za[0], i = new e.h(), h = 0; h < this.wa; h++) t.tc(2 * h, i), this.$.Zb(i);
        }, n.prototype.yp = function(t) {
          t.Oa();
          for (var i = this.za[0], h = new e.h(), s = 0; s < this.wa; s++) i.tc(2 * s, h), t.Zb(h);
        }, n.prototype.bN = function() {
          if (this.Pg < this.wa) {
            this.za == null && (this.za = e.Yc.qI(this.description.Aa)), this.Pg = 2147483647;
            for (var t = 0; t < this.description.Aa; t++) {
              var i = this.description.Ed(t);
              if (this.za[t] != null) {
                var h = e.ra.Va(i), s = e.O.truncate(this.za[t].size / h);
                s < this.wa && (s = e.O.truncate(this.Pg > this.wa + 5 ? (5 * this.wa + 3) / 4 : this.wa), this.za[t].resize(s * h, e.ra.se(i))), s < this.Pg && (this.Pg = s);
              } else this.za[t] = e.Yc.YE(i, this.wa), this.Pg = this.wa;
            }
          }
          this.iy(), this.Lf(32, !1);
        }, n.prototype.dm = function(t) {
          if (0 > t) throw e.i.N();
          t != this.wa && (this.wa = t, this.Pc(65535));
        }, n.prototype.om = function(t) {
          if (!this.ak(1)) {
            if (!this.ak(2)) return 0;
            if (this.QT >= t) return this.ak(8) ? 1 : 2;
          }
          return -1;
        }, n.prototype.Ch = function(t, i) {
          if (this.QT = i, t == -1) this.Lf(1, !0), this.Lf(8, !0);
          else if (this.Lf(1, !1), this.Lf(8, !0), t == 0) this.Lf(2, !1), this.Lf(4, !1);
          else if (t == 1) this.Lf(2, !0), this.Lf(4, !1);
          else {
            if (t != 2) throw e.i.fa("internal error.");
            this.Lf(2, !0), this.Lf(4, !0);
          }
        }, n.prototype.lM = function() {
          this.Bb != null && (this.Bb = null);
        }, n.prototype.kD = function(t, i, h, s) {
          if (0 > t || t >= this.wa || 0 > i || i >= this.wa) throw e.i.fa("index out of bounds");
          this.mc(), s.Nf(this.description), s.B() && s.un();
          for (var o = 0; o < this.description.Aa; o++) for (var a = this.description.Ed(o), u = 0, c = e.ra.Va(a); u < c; u++) {
            var l = this.za[o].eg(c * t + u), p = this.za[o].eg(c * i + u);
            s.setAttribute(a, u, e.lc.hq(l, p, h));
          }
        }, n.prototype.yr = function(t, i) {
          var h = this.za[0].o, s = h[2 * t] - h[2 * i];
          return t = h[2 * t + 1] - h[2 * i + 1], Math.sqrt(s * s + t * t);
        }, n.prototype.KR = function(t) {
          if (0 > t || t >= this.wa) throw e.i.ce();
          this.mc();
          var i = new e.Sa();
          i.Nf(this.description), i.B() && i.un();
          for (var h = 0; h < this.description.Aa; h++) for (var s = this.description.kd(h), o = 0, a = e.ra.Va(s); o < a; o++) {
            var u = this.za[h].eg(a * t + o);
            i.setAttribute(s, o, u);
          }
          return i;
        }, n.prototype.Dh = function(t, i) {
          if (0 > t || t >= this.wa) throw e.i.ce();
          if (i.B()) throw e.i.N();
          this.mc();
          for (var h = i.description, s = 0; s < h.Aa; s++) for (var o = h.kd(s), a = e.ra.Va(o), u = 0; u < a; u++) {
            var c = i.Uc(o, u);
            this.setAttribute(o, t, u, c);
          }
        }, n.prototype.lu = function() {
          return null;
        }, n.prototype.fj = function() {
          return null;
        }, n;
      }(e.aa);
      e.Gx = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.ob = this.Zn = null, this.Tm = 124234251, this.Rv = !0, this.Qe = -1, this.ob = new e.$c(7), this.Zn = null;
        }
        return f.prototype.Vo = function(r) {
          this.Zn = r;
        }, f.prototype.RP = function() {
          this.Rv = !1;
        }, f.prototype.De = function(r) {
          this.ob.De(r);
        }, f.prototype.Pr = function(r) {
          var n = this.ob.Ce();
          return this.rX(n), this.uX(r, n), n;
        }, f.prototype.MP = function(r) {
          this.ob.jd(r);
        }, f.prototype.addElement = function(r, n) {
          return n == -1 && (this.Qe == -1 && (this.Qe = this.Pr(-1)), n = this.Qe), this.FD(r, 0, n);
        }, f.prototype.KD = function(r) {
          return this.Qe == -1 && (this.Qe = this.Pr(-1)), this.FD(r, 1, this.Qe);
        }, f.prototype.xn = function(r) {
          this.Qe == -1 && (this.Qe = this.Pr(-1));
          var n = this.Qe, t = this.ob.o;
          if (n == -1 || t[7 * n] == -1) return r = this.ob.Ll([-1, -1, -1, r, this.gl(), -1, -1]), (t = this.ob.o)[7 * n] = r, this.vp(-1, r, n, t), r;
          var i = n == -1 ? -1 : t[7 * n + 2];
          return r = this.ob.Ll([-1, -1, i, r, this.gl(), -1, -1]), (t = this.ob.o)[7 * i + 1] = r, this.oy(r, t), t[7 * r + 2] === -1 && (t[7 * n] = r), this.vp(-1, r, n, t), r;
        }, f.prototype.zu = function(r, n, t, i) {
          var h = -1;
          h == -1 && (this.Qe == -1 && (this.Qe = this.Pr(-1)), h = this.Qe);
          var s = this.ob.o;
          if (h == -1 || s[7 * h] == -1) return t = this.ob.Ll([-1, -1, -1, t, this.gl(), -1, -1]), (s = this.ob.o)[7 * h] = t, this.vp(-1, t, h, s), t;
          if (i) {
            i = n != -1 ? this.Zn.compare(this, t, n) : -1;
            var o = r != -1 ? this.Zn.compare(this, t, r) : 1;
          } else i = -1, o = 1;
          if (i == 0 || o == 0) return s[7 * h + 3] = i == 0 ? n : r, -1;
          for ((n != -1 && r != -1 ? this.Tm > e.O.bB(this.Tm) >> 1 : n != -1) ? r = n : i = o, n = !0; ; ) {
            if (0 > i) {
              if ((o = s[7 * r]) == -1) {
                i = r, t = this.ob.Ll([-1, -1, r, t, this.gl(), -1, -1]), (s = this.ob.o)[7 * r] = t;
                break;
              }
              r = o;
            } else {
              if ((o = s[7 * r + 1]) == -1) {
                i = s[7 * r + 6], t = this.ob.Ll([-1, -1, r, t, this.gl(), -1, -1]), (s = this.ob.o)[7 * r + 1] = t;
                break;
              }
              r = o;
            }
            n && (i *= -1, n = !1);
          }
          return this.oy(t, s), s[7 * t + 2] === -1 && (s[7 * h] = t), this.vp(i, t, h, s), t;
        }, f.prototype.FF = function() {
          return this.iR(this.Qe);
        }, f.prototype.vd = function(r, n) {
          n = n == -1 ? this.Qe : n, this.Rv ? this.LP(r, n) : this.iY(r, n);
        }, f.prototype.search = function(r, n) {
          for (n = this.sv(n); n != -1; ) {
            var t = this.Zn.compare(this, r, n);
            if (t == 0) return n;
            n = 0 > t ? this.ll(n) : this.Xp(n);
          }
          return -1;
        }, f.prototype.IW = function(r) {
          for (var n = this.sv(-1), t = -1; n != -1; ) {
            var i = r.compare(this, n);
            if (i == 0) return n;
            0 > i ? n = this.ll(n) : (t = n, n = this.Xp(n));
          }
          return t;
        }, f.prototype.uJ = function(r) {
          for (var n = this.sv(-1), t = -1; n != -1; ) {
            var i = r.compare(this, n);
            if (i == 0) return n;
            0 > i ? (t = n, n = this.ll(n)) : n = this.Xp(n);
          }
          return t;
        }, f.prototype.ja = function(r) {
          return this.ob.T(r, 3);
        }, f.prototype.ll = function(r) {
          return this.ob.T(r, 0);
        }, f.prototype.Xp = function(r) {
          return this.ob.T(r, 1);
        }, f.prototype.getParent = function(r) {
          return this.ob.T(r, 2);
        }, f.prototype.lb = function(r) {
          return this.ob.T(r, 6);
        }, f.prototype.we = function(r) {
          return this.ob.T(r, 5);
        }, f.prototype.rc = function(r) {
          return r == -1 ? this.kl(this.Qe) : this.kl(r);
        }, f.prototype.Fc = function(r) {
          return r == -1 ? this.Zr(this.Qe) : this.Zr(r);
        }, f.prototype.ZR = function(r) {
          return r == -1 ? this.bG(this.Qe) : this.bG(r);
        }, f.prototype.Sj = function(r, n) {
          this.NB(r, n);
        }, f.prototype.sv = function(r) {
          return r == -1 ? this.YF(this.Qe) : this.YF(r);
        }, f.prototype.clear = function() {
          this.ob.mj(!1), this.Qe = -1;
        }, f.prototype.size = function(r) {
          return r == -1 ? this.$F(this.Qe) : this.$F(r);
        }, f.prototype.KN = function(r, n) {
          for (var t = n[7 * r], i = n[7 * r + 1], h = n[7 * r + 4]; t != -1 || i != -1; ) {
            var s = t != -1 ? n[7 * t + 4] : 2147483647;
            if (i = i != -1 ? n[7 * i + 4] : 2147483647, h <= Math.min(s, i)) break;
            s <= i ? this.sJ(t, n) : this.rJ(r, n), t = n[7 * r], i = n[7 * r + 1];
          }
        }, f.prototype.oy = function(r, n) {
          if (this.Rv) for (var t = n[7 * r + 4], i = n[7 * r + 2]; i != -1 && n[7 * i + 4] > t; ) n[7 * i] == r ? this.sJ(r, n) : this.rJ(i, n), i = n[7 * r + 2];
        }, f.prototype.rJ = function(r, n) {
          var t = n[7 * r + 1];
          n[7 * t + 2] = n[7 * r + 2], n[7 * r + 2] = t;
          var i = n[7 * t];
          n[7 * r + 1] = i, i != -1 && (n[7 * i + 2] = r), n[7 * t] = r, (i = n[7 * t + 2]) != -1 && (n[7 * i] == r ? n[7 * i] = t : n[7 * i + 1] = t);
        }, f.prototype.sJ = function(r, n) {
          var t = n[7 * r + 2];
          n[7 * r + 2] = n[7 * t + 2], n[7 * t + 2] = r;
          var i = n[7 * r + 1];
          n[7 * t] = i, i != -1 && (n[7 * i + 2] = t), n[7 * r + 1] = t, (i = n[7 * r + 2]) != -1 && (n[7 * i] === t ? n[7 * i] = r : n[7 * i + 1] = r);
        }, f.prototype.Pk = function(r, n) {
          this.ob.S(r, 2, n);
        }, f.prototype.TB = function(r, n) {
          this.ob.S(r, 0, n);
        }, f.prototype.XB = function(r, n) {
          this.ob.S(r, 1, n);
        }, f.prototype.WB = function(r, n) {
          this.ob.S(r, 5, n);
        }, f.prototype.ex = function(r, n) {
          this.ob.S(r, 6, n);
        }, f.prototype.XJ = function(r, n) {
          this.ob.S(n, 0, r);
        }, f.prototype.rX = function(r) {
          this.ob.S(r, 4, 0);
        }, f.prototype.uX = function(r, n) {
          this.ob.S(n, 5, r);
        }, f.prototype.YF = function(r) {
          return r == -1 ? -1 : this.ob.T(r, 0);
        }, f.prototype.kl = function(r) {
          return r == -1 ? -1 : this.ob.T(r, 1);
        }, f.prototype.Zr = function(r) {
          return r == -1 ? -1 : this.ob.T(r, 2);
        }, f.prototype.iR = function(r) {
          return r == -1 ? -1 : this.ob.T(r, 3);
        }, f.prototype.$F = function(r) {
          return r == -1 ? 0 : this.ob.T(r, 4);
        }, f.prototype.bG = function(r) {
          return this.ob.T(r, 5);
        }, f.prototype.Pw = function() {
          return this.ob.Ll([-1, -1, -1, void 0, this.gl(), -1, -1]);
        }, f.prototype.fl = function(r) {
          r != -1 && this.ob.jd(r);
        }, f.prototype.gl = function() {
          return this.Tm = e.O.bB(this.Tm), 1073741823 & this.Tm;
        }, f.prototype.FD = function(r, n, t) {
          var i = this.ob.o;
          if (t == -1 || i[7 * t] == -1) return r = this.ob.Ll([-1, -1, -1, r, this.gl(), -1, -1]), (i = this.ob.o)[7 * t] = r, this.vp(-1, r, t, i), r;
          for (var h = t == -1 ? -1 : i[7 * t]; ; ) {
            var s = n == -1 ? 1 : this.Zn.compare(this, r, h);
            if (0 > s) {
              if ((s = this.ll(h)) == -1) {
                n = h, r = this.ob.Ll([-1, -1, h, r, this.gl(), -1, -1]), (i = this.ob.o)[7 * h] = r;
                break;
              }
              h = s;
            } else {
              if (n == 1 && s == 0) return i[7 * t + 3] = h, -1;
              if ((s = i[7 * h + 1]) == -1) {
                n = i[7 * h + 6], r = this.ob.Ll([-1, -1, h, r, this.gl(), -1, -1]), (i = this.ob.o)[7 * h + 1] = r;
                break;
              }
              h = s;
            }
          }
          return this.oy(r, i), i[7 * r + 2] === -1 && (i[7 * t] = r), this.vp(n, r, t, i), r;
        }, f.prototype.vp = function(r, n, t, i) {
          if (r != -1) {
            var h = i[7 * r + 5];
            i[7 * r + 5] = n;
          } else h = t == -1 ? -1 : i[7 * t + 2];
          i[7 * n + 5] = h, h != -1 && (i[7 * h + 6] = n), i[7 * n + 6] = r, r == (t == -1 ? -1 : i[7 * t + 1]) && (i[7 * t + 1] = n), r == -1 && (i[7 * t + 2] = n), i[7 * t + 4] = (t == -1 ? 0 : i[7 * t + 4]) + 1;
        }, f.prototype.AB = function(r, n) {
          var t = this.ob.o, i = t[7 * r + 5];
          r = t[7 * r + 6], i != -1 ? t[7 * i + 6] = r : t[7 * n + 1] = r, r != -1 ? t[7 * r + 5] = i : t[7 * n + 2] = i, t[7 * n + 4] = n === -1 ? -1 : t[7 * n + 4] - 1;
        }, f.prototype.iY = function(r, n) {
          this.AB(r, n);
          var t = this.ll(r), i = this.Xp(r), h = this.getParent(r), s = r;
          if (t != -1 && i != -1) {
            this.Tm = e.O.bB(this.Tm);
            var o = 1073741823 < this.Tm ? this.lb(r) : this.we(r), a = this.getParent(o) == r;
            this.ob.gC(r, o, 0), this.ob.gC(r, o, 1), this.ob.gC(r, o, 2), h != -1 ? this.ll(h) == r ? this.TB(h, o) : this.XB(h, o) : this.XJ(o, n), a ? (t == o ? (this.TB(o, r), this.Pk(i, o)) : i == o && (this.XB(o, r), this.Pk(t, o)), this.Pk(r, o), h = o) : (this.Pk(t, o), this.Pk(i, o), h = this.getParent(r), s = o), t = this.ll(r), i = this.Xp(r), t != -1 && this.Pk(t, r), i != -1 && this.Pk(i, r);
          }
          t = t != -1 ? t : i, h == -1 ? this.XJ(t, n) : this.ll(h) == s ? this.TB(h, t) : this.XB(h, t), t != -1 && this.Pk(t, h), this.fl(r);
        }, f.prototype.LP = function(r, n) {
          var t = this.ob.o;
          t[7 * r + 4] = 2147483647;
          var i = -1, h = -1, s = n === -1 ? -1 : t[7 * n], o = s == r;
          if (o && (i = t[7 * s], h = t[7 * s + 1], i == -1 && h == -1)) return this.AB(s, n), this.fl(s), void (t[7 * n] = -1);
          this.KN(r, t), (s = t[7 * r + 2]) != -1 && (t[7 * s] == r ? t[7 * s] = -1 : t[7 * s + 1] = -1), this.AB(r, n), this.fl(r), o && (t[7 * n] = i == -1 || t[7 * i + 2] != -1 ? h : i);
        }, f.prototype.NB = function(r, n) {
          this.ob.S(r, 3, n);
        }, f;
      }();
      e.Yj = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n) {
          r !== void 0 && this.K(r, n);
        }
        return f.prototype.K = function(r, n) {
          this.oa = r, this.va = n, this.normalize();
        }, f.prototype.isIntersecting = function(r) {
          return this.oa <= r.oa ? this.va >= r.oa : r.va >= this.oa;
        }, f.prototype.move = function(r) {
          this.B() || (this.oa += r, this.va += r);
        }, f.prototype.normalize = function() {
          if (!isNaN(this.oa)) {
            if (this.oa > this.va) {
              var r = this.oa;
              this.oa = this.va, this.va = r;
            }
            isNaN(this.va) && this.Oa();
          }
        }, f.prototype.Oa = function() {
          this.va = this.oa = NaN;
        }, f.prototype.B = function() {
          return isNaN(this.oa);
        }, f.prototype.Zb = function(r) {
          typeof r == "number" ? this.B() ? this.va = this.oa = r : this.Lk(r) : r.B() || (this.B() ? (this.oa = r.oa, this.va = r.va) : (this.oa > r.oa && (this.oa = r.oa), this.va < r.va && (this.va = r.va), this.oa > this.va && this.Oa()));
        }, f.prototype.Lk = function(r) {
          r < this.oa ? this.oa = r : r > this.va && (this.va = r);
        }, f.prototype.contains = function(r) {
          return typeof r == "number" ? r >= this.oa && r <= this.va : r.oa >= this.oa && r.va <= this.va;
        }, f.prototype.Ea = function(r) {
          this.B() || r.B() ? this.Oa() : (this.oa < r.oa && (this.oa = r.oa), this.va > r.va && (this.va = r.va), this.oa > this.va && this.Oa());
        }, f.prototype.W = function(r) {
          this.B() || (this.oa -= r, this.va += r, this.va < this.oa && this.Oa());
        }, f.prototype.xr = function() {
          return this.B() ? 2220446049250313e-29 : 2220446049250313e-29 * (Math.abs(this.oa) + Math.abs(this.va) + 1);
        }, f.prototype.KB = function(r, n) {
          r > n ? (this.oa = n, this.va = r) : (this.oa = r, this.va = n);
        }, f.prototype.It = function(r) {
          return e.O.Rk(r, this.oa, this.va);
        }, f.prototype.R = function() {
          return this.va - this.oa;
        }, f.prototype.sf = function() {
          return 0.5 * (this.oa + this.va);
        }, f.prototype.Nb = function(r) {
          return r == this || r instanceof f && (!(!this.B() || !r.B()) || this.oa == r.oa && this.va == r.va);
        }, f.prototype.cc = function() {
          return e.O.uj(e.O.uj());
        }, f;
      }();
      e.Nc = v;
    }(k || (k = {})), function(e) {
      var v = new e.Nc(), f = new e.Nc(), r = function() {
        this.ne = null, this.pb = -1, this.sb = new e.yb(), this.qA = 55555555, this.Tv = this.Vv = !1, this.Uf = new e.Nc(), this.Uf.KB(0, 0);
      };
      e.IY = r;
      var n = function() {
        function t(i, h, s) {
          this.g = i, this.Hk = NaN, this.NH = this.Kq = 0, this.OH = NaN, this.qa = h, this.Nq = 10 * h, this.PH = this.QH = NaN, this.rg = !1, this.Dm = this.gt = this.Lo = this.Xs = this.Ws = -1, this.gA = s, this.TA = new r(), this.YH = new r(), e.O.truncate(3 * i.fd / 2);
        }
        return t.prototype.mG = function(i, h, s, o) {
          i.ne = o === null ? null : o[s[5 * h]], i.Tv = i.ne != null, i.Tv || ((o = s[5 * h + 2]) !== -1 && this.g.mW(s[5 * h], s[5 * o], i.sb), i.ne = i.sb, i.Uf.KB(i.sb.sa, i.sb.pa), i.Uf.va += this.qa, i.sb.rI(), i.Vv = i.sb.la == i.sb.na, i.Vv || (i.qA = (i.sb.pa - i.sb.sa) / (i.sb.la - i.sb.na)));
        }, t.prototype.OO = function(i, h) {
          var s = i.zr(h, this.qa, !0);
          return s != 0 ? s == 2 ? this.Qy() : this.xi() : (i.Yp(ht), i.Tr(et), h.Yp(st), h.Tr(ot), Q.ma(this.Kq, this.Hk), ht.qb(st) && this.Hk == ht.y ? 0 > et.compare(ot) ? Q.L(et) : Q.L(ot) : ht.qb(ot) && this.Hk == ht.y ? 0 > et.compare(st) ? Q.L(et) : Q.L(st) : st.qb(et) && this.Hk == st.y ? 0 > ht.compare(ot) ? Q.L(ht) : Q.L(ot) : et.qb(ot) && this.Hk == et.y && (0 > ht.compare(st) ? Q.L(ht) : Q.L(st)), i.Pe(Q.y, Q.x) < h.Pe(Q.y, Q.x) ? -1 : 1);
        }, t.prototype.MO = function(i, h) {
          if (i.sb.na == h.sb.na && i.sb.sa == h.sb.sa) return i.sb.la == h.sb.la && i.sb.pa == h.sb.pa ? this.gA ? this.Qy() : 0 : this.PE(i, h);
          if (i.sb.la == h.sb.la && i.sb.pa == h.sb.pa) return this.OE(i, h);
          var s = this.OE(i, h);
          return i = this.PE(i, h), 0 > s && 0 > i ? -1 : 0 < s && 0 < i ? 1 : this.xi();
        }, t.prototype.IO = function(i, h) {
          if (i.pa > h.pa) {
            if (h.pa > h.sa && h.la - h.na < 2 * this.qa && i.vi(h.pa, h.la, this.qa)) return this.xi();
          } else if ((h.la - h.na) / (h.pa - h.sa) * (i.pa - i.sa) < this.Nq && h.vi(i.pa, i.la, this.qa)) return this.xi();
          return 1;
        }, t.prototype.JO = function(i, h) {
          if (i.sa < h.sa) {
            if (h.pa > h.sa && h.la - h.na < 2 * this.qa && i.vi(h.pa, h.la, this.qa)) return this.xi();
          } else if ((h.la - h.na) / (h.pa - h.sa) * (i.sa - i.pa) < this.Nq && h.vi(i.sa, i.na, this.qa)) return this.xi();
          return -1;
        }, t.prototype.KO = function(i, h) {
          var s = new e.h();
          s.uc(h.wc(), h.ac()), s.ar(), s.normalize();
          var o = new e.h();
          o.uc(i.ac(), h.ac());
          var a = new e.h();
          a.uc(i.wc(), h.ac()), o = o.Qh(s), s = a.Qh(s), a = Math.abs(o);
          var u = Math.abs(s);
          if (a < u) {
            if (a < this.Nq && h.vi(i.sa, i.na, this.qa)) return this.xi();
          } else if (u < this.Nq && h.vi(i.pa, i.la, this.qa)) return this.xi();
          return 0 > o && 0 > s ? -1 : 0 < o && 0 < s ? 1 : this.xi();
        }, t.prototype.NE = function(i, h) {
          return i.na == h.na && i.sa == h.sa ? this.IO(i, h) : i.la == h.la && i.pa == h.pa ? this.JO(i, h) : this.KO(i, h);
        }, t.prototype.LO = function(i, h) {
          return i.la == h.la && i.pa == h.pa && i.na == h.na && i.sa == h.sa ? this.gA ? this.Qy() : 0 : this.xi();
        }, t.prototype.OE = function(i, h) {
          var s = 1;
          if (i.sb.na < h.sb.na) {
            s = -1;
            var o = i;
            i = h, h = o;
          }
          i = i.sb, o = h.sb;
          var a = i.sa - o.sa;
          h = h.qA * (i.na - o.na);
          var u = this.Nq;
          return a < h - u ? -s : a > h + u ? s : o.vi(i.sa, i.na, this.qa) ? this.xi() : a < h ? -s : s;
        }, t.prototype.PE = function(i, h) {
          var s = 1;
          if (h.sb.la < i.sb.la) {
            s = -1;
            var o = i;
            i = h, h = o;
          }
          i = i.sb, o = h.sb;
          var a = i.pa - o.sa;
          h = h.qA * (i.la - o.na);
          var u = this.Nq;
          return a < h - u ? -s : a > h + u ? s : o.vi(i.pa, i.la, this.qa) ? this.xi() : a < h ? -s : s;
        }, t.prototype.Qy = function() {
          return this.rg = !0, this.Ni = new e.Md(5, this.Lo, this.gt), -1;
        }, t.prototype.xi = function() {
          return this.rg = !0, this.gA ? this.Ni = new e.Md(4, this.Lo, this.gt) : this.gt = this.Lo = this.Xs = this.Ws = -1, -1;
        }, t.prototype.NO = function(i, h, s, o) {
          if (this.rg) return -1;
          var a = this.OH == this.Hk && this.NH == this.Kq;
          if (a && i == this.Ws) var u = this.PH;
          else u = NaN, this.Ws = -1;
          return a && h == this.Xs ? a = this.QH : (a = NaN, this.Xs = -1), s.ne.ZI(v), o.ne.ZI(f), v.va < f.oa ? -1 : f.va < v.oa ? 1 : (this.OH = this.Hk, this.NH = this.Kq, isNaN(u) && (this.Ws = i, this.PH = u = i = s.ne.Pe(this.Hk, this.Kq)), isNaN(a) && (this.Xs = h, this.QH = a = i = o.ne.Pe(this.Hk, this.Kq)), Math.abs(u - a) <= this.qa ? this.OO(s.ne, o.ne) : u < a ? -1 : u > a ? 1 : 0);
        }, t.prototype.Kr = function() {
          this.rg = !1;
        }, t.prototype.rm = function() {
          return this.Ni;
        }, t.prototype.$J = function(i, h) {
          this.Hk = i, this.Kq = h, this.gt = this.Lo = this.Xs = this.Ws = -1;
        }, t.prototype.compare = function(i, h, s) {
          return this.rg ? -1 : (i = i.ja(s), this.Dm = s, this.RE(h, h, i, i));
        }, t.prototype.RE = function(i, h, s, o) {
          if (this.Lo == h) var a = this.TA;
          else this.Lo = h, a = this.TA, this.TA.pb = i, this.mG(a, h, this.g.td.o, this.g.We);
          if (u == null) {
            this.gt = o;
            var u = this.YH;
            this.YH.pb = s, this.mG(u, o, this.g.td.o, this.g.We);
          }
          return a.Tv || u.Tv ? this.NO(h, o, a, u) : a.Uf.va < u.Uf.oa ? -1 : u.Uf.va < a.Uf.oa ? 1 : (i = a.Vv ? 1 : 0, (i |= u.Vv ? 2 : 0) == 0 ? this.MO(a, u) : i == 1 ? this.NE(a.sb, u.sb) : i == 2 ? -1 * this.NE(u.sb, a.sb) : this.LO(a.sb, u.sb));
        }, t;
      }();
      e.UC = n;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n) {
          this.g = r, this.qa = n, this.rg = !1, this.Lo = -1, this.Uf = new e.Nc(), this.Gq = new e.h(), this.Gq.Rc(), this.ie = new e.yb(), this.Dm = -1, this.BA = 17976931348623157e292;
        }
        return f.prototype.Kr = function() {
          this.rg = !1, this.BA = 17976931348623157e292;
        }, f.prototype.Dh = function(r) {
          this.Gq.L(r);
        }, f.prototype.compare = function(r, n) {
          return this.SE(n, r.ja(n));
        }, f.prototype.SE = function(r, n) {
          var t = this.g.bc(n) != null;
          if (t || (this.g.ed(n, this.ie), this.Uf.KB(this.ie.sa, this.ie.pa)), t) throw e.i.fa("not implemented");
          if (this.Gq.x + this.qa < this.Uf.oa) return -1;
          if (this.Gq.x - this.qa > this.Uf.va) return 1;
          if (this.ie.na == this.ie.la) return this.Dm = r, this.rg = !0, 0;
          this.ie.rI(), t = this.ie.ac(), (n = new e.h()).uc(this.ie.wc(), t), n.ar();
          var i = new e.h();
          return i.uc(this.Gq, t), t = n.Qh(i), (t /= n.length()) < 10 * -this.qa ? -1 : t > 10 * this.qa ? 1 : this.ie.qs(this.Gq, this.qa) && ((n = Math.abs(t)) < this.BA && (this.Dm = r, this.BA = n), this.rg = !0, n < 0.25 * this.qa) ? 0 : 0 > t ? -1 : 1;
        }, f;
      }();
      e.aM = v;
    }(k || (k = {})), function(e) {
      function v(r, n, t, i) {
        t = new Float64Array(r.subarray(t, i)), r.set(t, n);
      }
      var f = function() {
        function r(n) {
          this.Pb = this.pk = !1, this.o = null;
          var t = n;
          2 > t && (t = 2), this.o = new Float64Array(t), this.size = n;
        }
        return r.prototype.rotate = function(n, t, i) {
          if (this.Pb) throw e.i.fa("invalid_call");
          if (t < n || t > i || n > i) throw e.i.N();
          n != t && i != t && (this.ni(n, t - n, 1), this.ni(t, i - t, 1), this.ni(n, i - n, 1));
        }, r.qf = function(n, t) {
          var i = new r(n), h = i.o;
          if (2 > n && (n = 2), t !== 0) for (var s = 0; s < n; s++) h[s] = t;
          return i;
        }, r.Bn = function(n) {
          var t = new r(0);
          return t.o = new Float64Array(n.o), t.size = n.size, t;
        }, r.Lr = function(n, t) {
          var i = new r(0);
          return i.size = n.size, i.size > t && (i.size = t), 2 > (t = i.size) && (t = 2), i.o = new Float64Array(t), i.o.set(n.o.length <= t ? n.o : n.o.subarray(0, t), 0), i;
        }, r.prototype.Jb = function(n) {
          0 >= n || (this.o == null ? this.o = new Float64Array(n) : n <= this.o.length || (0 < this.o.length ? ((n = new Float64Array(n)).set(this.o), this.o = n) : this.o = new Float64Array(n)));
        }, r.prototype.read = function(n) {
          return this.o[n];
        }, r.prototype.tc = function(n, t) {
          t.x = this.o[n], t.y = this.o[n + 1];
        }, r.prototype.get = function(n) {
          return this.o[n];
        }, r.prototype.write = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.set = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.Tt = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.add = function(n) {
          this.resize(this.size + 1), this.o[this.size - 1] = n;
        }, r.prototype.GB = function(n) {
          return r.Lr(this, n);
        }, r.prototype.eg = function(n) {
          return this.read(n);
        }, r.prototype.resize = function(n, t) {
          if (t === void 0 && (t = 0), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          if (n <= this.size) {
            if (30 < this.o.length && 5 * n / 4 < this.o.length) {
              var i = new Float64Array(this.o, 0, n);
              this.o = i;
            }
          } else {
            n > this.o.length && (i = e.O.truncate(64 > n ? Math.max(2 * n, 4) : 5 * n / 4), (i = new Float64Array(i)).set(this.o), this.o = i), i = this.o;
            for (var h = this.size; h < n; h++) i[h] = t;
          }
          this.size = n;
        }, r.prototype.Bh = function(n) {
          if ((this.o == null || n > this.o.length) && this.resize(n), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          this.size = n;
        }, r.prototype.pr = function(n, t) {
          this.write(n, t);
        }, r.prototype.An = function(n, t, i) {
          for (var h = this.size; t < h && t < i; t++) n = e.O.uj(this.read(t));
          return n;
        }, r.prototype.Nb = function(n, t, i) {
          if (n == null || !(n instanceof r)) return !1;
          var h = this.size, s = n.size;
          if (i > h || i > s && h != s) return !1;
          for (i > h && (i = h); t < i; t++) if (this.read(t) != n.read(t)) return !1;
          return !0;
        }, r.prototype.addRange = function(n, t, i, h, s) {
          if (this.Pb) throw e.i.Hb();
          if (!h && (1 > s || i % s != 0)) throw e.i.N();
          var o = this.size;
          if (this.resize(o + i), h) this.o.set(n.o.subarray(t, t + i), o);
          else {
            h = i;
            for (var a = 0; a < i; a += s) {
              h -= s;
              for (var u = 0; u < s; u++) this.o[o + a + u] = n.o[t + h + u];
            }
          }
        }, r.prototype.Mn = function(n, t, i, h, s, o, a) {
          if (this.Pb) throw e.i.Hb();
          if (!s && (1 > o || h % o != 0)) throw e.i.N();
          var u = this.size - a;
          if (u < h && this.resize(this.size + h - u), v(this.o, n + h, n, n + (a - n)), this.o == t.o && n < i && (i += h), s) this.o.set(t.o.subarray(i, i + h), n);
          else for (s = h, a = 0; a < h; a += o) for (s -= o, u = 0; u < o; u++) this.o[n + a + u] = t.o[i + s + u];
        }, r.prototype.Iz = function(n, t, i, h, s, o) {
          if (this.Pb) throw e.i.Hb();
          if (0 > o && (o = this.size), this.size + 2 * h > this.o.length ? this.resize(this.size + 2 * h) : this.size += 2 * h, v(this.o, n + 2 * h, n, n + (o - n)), s) for (s = 0; s < h; s++) o = t[i++], this.o[n++] = o.x, this.o[n++] = o.y;
          else {
            s = 0;
            for (var a = h - 1; s < h; ++s) o = t[i + a], this.o[n++] = o.x, this.o[n++] = o.y, a--;
          }
        }, r.prototype.Ln = function(n, t, i, h) {
          if (this.Pb) throw e.i.Hb();
          for (h -= n, v(this.o, n + h, n, n + h), h = 0; h < i; h++) this.o[n + h] = t;
        }, r.prototype.vj = function(n, t, i) {
          if (this.Pb) throw e.i.Hb();
          v(this.o, n + 2, n, n + (i - n)), this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.Ut = function(n, t, i, h, s, o) {
          if (0 > n || 0 > t || 0 > h || !s && (0 >= o || t % o != 0) || i.size < h + t) throw e.i.N();
          if (t != 0) if (this.size < t + n && this.resize(t + n), i == this) this.Ar(n, t, h, s, o);
          else if (s) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h++;
          else if (h = h + t - o, o == 1) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h--;
          else for (s = 0, t = e.O.truncate(t / o); s < t; s++) {
            for (var a = 0; a < o; a++) this.o[n + a] = i.o[h + a];
            n += o, h -= o;
          }
        }, r.prototype.En = function(n, t, i) {
          if (this.Pb || n + t > this.size) throw e.i.Hb();
          0 < i - (n + t) && v(this.o, n, n + t, n + (i - (n + t)) + t), this.size -= t;
        }, r.prototype.ni = function(n, t, i) {
          if (this.Pb || 1 > i || t % i != 0) throw e.i.Hb();
          for (var h = t >> 1, s = 0; s < h; s += i) {
            t -= i;
            for (var o = 0; o < i; o++) {
              var a = this.o[n + s + o];
              this.o[n + s + o] = this.o[n + t + o], this.o[n + t + o] = a;
            }
          }
        }, r.prototype.Wj = function(n, t, i) {
          if (0 > t || 0 > i || 0 > t || i + t > this.size) throw e.i.N();
          for (var h = t; h < t + i; h++) this.o[h] = n;
        }, r.prototype.Ar = function(n, t, i, h, s) {
          if (!(h && n == i || (this.o.set(this.o.subarray(i, i + t), n), h))) for (i = n, n = n + t - s, h = 0, t = e.O.truncate(t / 2); h < t; h++) {
            for (var o = 0; o < s; o++) {
              var a = this.o[i + o];
              this.o[i + o] = this.o[n + o], this.o[n + o] = a;
            }
            i += s, n -= s;
          }
        }, r.prototype.vC = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h) throw e.i.N();
          if (t != 0) for (this.size < (t << 1) + n && this.resize((t << 1) + n), s || (n += t - 1 << 1), s = s ? 2 : -2, t += h; h < t; h++) this.o[n] = i[h].x, this.o[n + 1] = i[h].y, n += s;
        }, r.prototype.uC = function(n, t, i) {
          if (0 > n || 0 > t) throw e.i.N();
          if (t != 0) {
            this.size < (t << 1) + n && this.resize((t << 1) + n), t += 0;
            for (var h = 0; h < t; h++) this.o[n] = i[h][0], this.o[n + 1] = i[h][1], n += 2;
          }
        }, r.prototype.Vw = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h || this.size < t + n) throw e.i.N();
          if (s) for (s = 0; s < t; s++) i[h + s] = this.o[n + s];
          else for (h = h + t - 1; n < t; n++) i[h] = this.o[n], h--;
        }, r.prototype.uB = function(n, t, i) {
          if (0 > n || 0 > t || this.size < (t >> 1) + n) throw e.i.N();
          if (t != 0) {
            t = 0 + t;
            for (var h = 0; h < t; h++) i[h][0] = this.o[n], i[h][1] = this.o[n + 1], n += 2;
          }
        }, r.prototype.clear = function(n) {
          n ? this.resize(0) : this.Bh(0);
        }, r.prototype.ix = function() {
          this.pk = this.Pb = !0;
        }, r.prototype.Vd = function(n, t, i) {
          Array.prototype.sort.call(this.o.subarray(n, t), i);
        }, r.prototype.Tp = function() {
          return 1;
        }, r;
      }();
      e.be = f;
    }(k || (k = {})), function(e) {
      function v(r, n, t, i) {
        t = new Int32Array(r.subarray(t, i)), r.set(t, n);
      }
      e.rY = function() {
        this.random = 1973;
      };
      var f = function() {
        function r(n) {
          this.Pb = this.pk = !1, this.o = null;
          var t = n;
          2 > t && (t = 2), this.o = new Int32Array(t), this.size = n;
        }
        return r.prototype.rotate = function(n, t, i) {
          if (this.Pb) throw e.i.fa("invalid_call");
          if (t < n || t > i || n > i) throw e.i.N();
          n != t && i != t && (this.ni(n, t - n, 1), this.ni(t, i - t, 1), this.ni(n, i - n, 1));
        }, r.qf = function(n, t) {
          var i = new r(n), h = i.o;
          if (2 > n && (n = 2), t !== 0) for (var s = 0; s < n; s++) h[s] = t;
          return i;
        }, r.Bn = function(n) {
          var t = new r(0);
          return t.o = new Int32Array(n.o), t.size = n.size, t;
        }, r.Lr = function(n, t) {
          var i = new r(0);
          return i.size = n.size, i.size > t && (i.size = t), 2 > (t = i.size) && (t = 2), i.o = new Int32Array(t), i.o.set(n.o.length <= t ? n.o : n.o.subarray(0, t), 0), i;
        }, r.prototype.Jb = function(n) {
          0 >= n || (this.o == null ? this.o = new Int32Array(n) : n <= this.o.length || (0 < this.o.length ? ((n = new Int32Array(n)).set(this.o), this.o = n) : this.o = new Int32Array(n)));
        }, r.prototype.read = function(n) {
          return this.o[n];
        }, r.prototype.tc = function(n, t) {
          t.x = this.o[n], t.y = this.o[n + 1];
        }, r.prototype.get = function(n) {
          return this.o[n];
        }, r.prototype.write = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.set = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.Tt = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.add = function(n) {
          this.resize(this.size + 1), this.o[this.size - 1] = n;
        }, r.prototype.GB = function(n) {
          return r.Lr(this, n);
        }, r.prototype.eg = function(n) {
          return this.read(n);
        }, r.prototype.resize = function(n, t) {
          if (t === void 0 && (t = 0), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          if (n <= this.size) {
            if (30 < this.o.length && 5 * n / 4 < this.o.length) {
              var i = new Int32Array(this.o, 0, n);
              this.o = i;
            }
          } else {
            n > this.o.length && (i = e.O.truncate(64 > n ? Math.max(2 * n, 4) : 5 * n / 4), (i = new Int32Array(i)).set(this.o), this.o = i), i = this.o;
            for (var h = this.size; h < n; h++) i[h] = t;
          }
          this.size = n;
        }, r.prototype.Bh = function(n) {
          if ((this.o == null || n > this.o.length) && this.resize(n), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          this.size = n;
        }, r.prototype.pr = function(n, t) {
          this.write(n, t);
        }, r.prototype.An = function(n, t, i) {
          for (var h = this.size; t < h && t < i; t++) n = e.O.Th(this.read(t), n);
          return n;
        }, r.prototype.Nb = function(n, t, i) {
          if (n == null || !(n instanceof r)) return !1;
          var h = this.size, s = n.size;
          if (i > h || i > s && h != s) return !1;
          for (i > h && (i = h); t < i; t++) if (this.read(t) != n.read(t)) return !1;
          return !0;
        }, r.prototype.addRange = function(n, t, i, h, s) {
          if (this.Pb) throw e.i.Hb();
          if (!h && (1 > s || i % s != 0)) throw e.i.N();
          var o = this.size;
          if (this.resize(o + i), h) this.o.set(n.o.subarray(t, t + i), o);
          else {
            h = i;
            for (var a = 0; a < i; a += s) {
              h -= s;
              for (var u = 0; u < s; u++) this.o[o + a + u] = n.o[t + h + u];
            }
          }
        }, r.prototype.Mn = function(n, t, i, h, s, o, a) {
          if (this.Pb) throw e.i.Hb();
          if (!s && (1 > o || h % o != 0)) throw e.i.N();
          if (v(this.o, n + h, n, n + (a - n)), this.o == t.o && n < i && (i += h), s) this.o.set(t.o.subarray(i, i + h), n);
          else for (s = h, a = 0; a < h; a += o) {
            s -= o;
            for (var u = 0; u < o; u++) this.o[n + a + u] = t.o[i + s + u];
          }
        }, r.prototype.Iz = function(n, t, i, h, s, o) {
          if (this.Pb) throw e.i.Hb();
          if (0 > o && (o = this.size), this.size + 2 * h > this.o.length ? this.resize(this.size + 2 * h) : this.size += 2 * h, v(this.o, n + 2 * h, n, n + (o - n)), s) for (s = 0; s < h; s++) o = t[i++], this.o[n++] = o.x, this.o[n++] = o.y;
          else {
            s = 0;
            for (var a = h - 1; s < h; ++s) o = t[i + a], this.o[n++] = o.x, this.o[n++] = o.y, a--;
          }
        }, r.prototype.Ln = function(n, t, i, h) {
          if (this.Pb) throw e.i.Hb();
          for (h -= n, v(this.o, n + h, n, n + h), h = 0; h < i; h++) this.o[n + h] = t;
        }, r.prototype.vj = function(n, t, i) {
          if (this.Pb) throw e.i.Hb();
          v(this.o, n + 2, n, n + (i - n)), this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.Ut = function(n, t, i, h, s, o) {
          if (0 > n || 0 > t || 0 > h || !s && (0 >= o || t % o != 0) || i.size < h + t) throw e.i.N();
          if (t != 0) if (this.size < t + n && this.resize(t + n), i == this) this.Ar(n, t, h, s, o);
          else if (s) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h++;
          else if (h = h + t - o, o == 1) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h--;
          else for (s = 0, t = e.O.truncate(t / o); s < t; s++) {
            for (var a = 0; a < o; a++) this.o[n + a] = i.o[h + a];
            n += o, h -= o;
          }
        }, r.prototype.En = function(n, t, i) {
          if (this.Pb || n + t > this.size) throw e.i.Hb();
          0 < i - (n + t) && v(this.o, n, n + t, n + (i - (n + t)) + t), this.size -= t;
        }, r.prototype.ni = function(n, t, i) {
          if (this.Pb || 1 > i || t % i != 0) throw e.i.Hb();
          for (var h = t >> 1, s = 0; s < h; s += i) {
            t -= i;
            for (var o = 0; o < i; o++) {
              var a = this.o[n + s + o];
              this.o[n + s + o] = this.o[n + t + o], this.o[n + t + o] = a;
            }
          }
        }, r.prototype.Wj = function(n, t, i) {
          if (0 > t || 0 > i || 0 > t || i + t > this.size) throw e.i.N();
          for (var h = t; h < t + i; h++) this.o[h] = n;
        }, r.prototype.Ar = function(n, t, i, h, s) {
          if (!(h && n == i || (this.o.set(this.o.subarray(i, i + t), n), h))) for (i = n, n = n + t - s, h = 0, t = e.O.truncate(t / 2); h < t; h++) {
            for (var o = 0; o < s; o++) {
              var a = this.o[i + o];
              this.o[i + o] = this.o[n + o], this.o[n + o] = a;
            }
            i += s, n -= s;
          }
        }, r.prototype.vC = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h) throw e.i.N();
          if (t != 0) for (this.size < (t << 1) + n && this.resize((t << 1) + n), s || (n += t - 1 << 1), s = s ? 2 : -2, t += h; h < t; h++) this.o[n] = i[h].x, this.o[n + 1] = i[h].y, n += s;
        }, r.prototype.Vw = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h || this.size < t + n) throw e.i.N();
          if (s) for (s = 0; s < t; s++) i[h + s] = this.o[n + s];
          else for (h = h + t - 1; n < t; n++) i[h] = this.o[n], h--;
        }, r.prototype.clear = function(n) {
          n ? this.resize(0) : this.Bh(0);
        }, r.prototype.ix = function() {
          this.pk = this.Pb = !0;
        }, r.prototype.Vd = function(n, t, i) {
          10 > t - n ? r.rG(this.o, n, t, i) : r.qB(this.o, n, t - 1, i);
        }, r.prototype.Tp = function() {
          return 2;
        }, r.prototype.Fc = function() {
          return this.o[this.size - 1];
        }, r.prototype.If = function() {
          this.resize(this.size - 1);
        }, r.prototype.bX = function(n) {
          this.o[this.size - 1] = n;
        }, r.prototype.SV = function(n) {
          n < this.size - 1 && (this.o[n] = this.o[this.size - 1]), this.resize(this.size - 1);
        }, r.prototype.lF = function(n) {
          for (var t = 0, i = this.size; t < i; t++) if (this.o[t] == n) return t;
          return -1;
        }, r.prototype.hG = function(n) {
          return 0 <= this.lF(n);
        }, r.rG = function(n, t, i, h) {
          for (var s = t; s < i; s++) {
            for (var o = n[s], a = s - 1; a >= t && 0 < h(n[a], o); ) n[a + 1] = n[a], a--;
            n[a + 1] = o;
          }
        }, r.tx = function(n, t, i) {
          var h = n[i];
          n[i] = n[t], n[t] = h;
        }, r.qB = function(n, t, i, h) {
          if (!(t >= i)) for (; ; ) {
            if (9 > i - t) {
              r.rG(n, t, i + 1, h);
              break;
            }
            var s = n[t];
            r.tx(n, t, i);
            for (var o = t, a = t; a < i; a++) 0 >= h(n[a], s) && (r.tx(n, o, a), o += 1);
            r.tx(n, o, i), o - t < i - o ? (r.qB(n, t, o - 1, h), t = o + 1) : (r.qB(n, o + 1, i, h), i = o - 1);
          }
        }, r;
      }();
      e.ia = f;
    }(k || (k = {})), function(e) {
      function v(r, n, t, i) {
        t = new Int8Array(r.subarray(t, i)), r.set(t, n);
      }
      var f = function() {
        function r(n) {
          this.o = null;
          var t = n;
          2 > t && (t = 2), this.o = new Int8Array(t), this.size = n;
        }
        return r.prototype.rotate = function(n, t, i) {
          if (this.Pb) throw e.i.fa("invalid_call");
          if (t < n || t > i || n > i) throw e.i.N();
          n != t && i != t && (this.ni(n, t - n, 1), this.ni(t, i - t, 1), this.ni(n, i - n, 1));
        }, r.qf = function(n, t) {
          var i = new r(n), h = i.o;
          if (2 > n && (n = 2), t !== 0) for (var s = 0; s < n; s++) h[s] = t;
          return i;
        }, r.Bn = function(n) {
          var t = new r(0);
          return t.o = new Int8Array(n.o), t.size = n.size, t;
        }, r.Lr = function(n, t) {
          var i = new r(0);
          return i.size = n.size, i.size > t && (i.size = t), 2 > (t = i.size) && (t = 2), i.o = new Int8Array(t), i.o.set(n.o.length <= t ? n.o : n.o.subarray(0, t), 0), i;
        }, r.prototype.Jb = function(n) {
          0 >= n || (this.o == null ? this.o = new Int8Array(n) : n <= this.o.length || (0 < this.o.length ? ((n = new Int8Array(n)).set(this.o), this.o = n) : this.o = new Int8Array(n)));
        }, r.prototype.read = function(n) {
          return this.o[n];
        }, r.prototype.tc = function(n, t) {
          t.x = this.o[n], t.y = this.o[n + 1];
        }, r.prototype.get = function(n) {
          return this.o[n];
        }, r.prototype.write = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.set = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t;
        }, r.prototype.Tt = function(n, t) {
          if (this.Pb) throw e.i.Hb();
          this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.add = function(n) {
          this.resize(this.size + 1), this.o[this.size - 1] = n;
        }, r.prototype.GB = function(n) {
          return r.Lr(this, n);
        }, r.prototype.eg = function(n) {
          return this.read(n);
        }, r.prototype.resize = function(n, t) {
          if (t === void 0 && (t = 0), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          if (n <= this.size) {
            if (30 < this.o.length && 5 * n / 4 < this.o.length) {
              var i = new Int8Array(this.o, 0, n);
              this.o = i;
            }
          } else {
            n > this.o.length && (i = e.O.truncate(64 > n ? Math.max(2 * n, 4) : 5 * n / 4), (i = new Int8Array(i)).set(this.o), this.o = i), i = this.o;
            for (var h = this.size; h < n; h++) i[h] = t;
          }
          this.size = n;
        }, r.prototype.Bh = function(n) {
          if ((this.o == null || n > this.o.length) && this.resize(n), this.pk) throw e.i.fa("invalid call. Attribute Stream is locked and cannot be resized.");
          this.size = n;
        }, r.prototype.pr = function(n, t) {
          this.write(n, t);
        }, r.prototype.An = function(n, t, i) {
          for (var h = this.size; t < h && t < i; t++) n = e.O.Th(this.read(t), n);
          return n;
        }, r.prototype.Nb = function(n, t, i) {
          if (n == null || !(n instanceof r)) return !1;
          var h = this.size, s = n.size;
          if (i > h || i > s && h != s) return !1;
          for (i > h && (i = h); t < i; t++) if (this.read(t) != n.read(t)) return !1;
          return !0;
        }, r.prototype.addRange = function(n, t, i, h, s) {
          if (this.Pb) throw e.i.Hb();
          if (!h && (1 > s || i % s != 0)) throw e.i.N();
          var o = this.size;
          if (this.resize(o + i), h) this.o.set(n.o.subarray(t, t + i), o);
          else {
            h = i;
            for (var a = 0; a < i; a += s) {
              h -= s;
              for (var u = 0; u < s; u++) this.o[o + a + u] = n.o[t + h + u];
            }
          }
        }, r.prototype.Mn = function(n, t, i, h, s, o, a) {
          if (this.Pb) throw e.i.Hb();
          if (!s && (1 > o || h % o != 0)) throw e.i.N();
          if (v(this.o, n + h, n, n + (a - n)), this.o == t.o && n < i && (i += h), s) this.o.set(t.o.subarray(i, i + h), n);
          else for (s = h, a = 0; a < h; a += o) {
            s -= o;
            for (var u = 0; u < o; u++) this.o[n + a + u] = t.o[i + s + u];
          }
        }, r.prototype.Ln = function(n, t, i, h) {
          if (this.Pb) throw e.i.Hb();
          for (h -= n, v(this.o, n + h, n, n + h), h = 0; h < i; h++) this.o[n + h] = t;
        }, r.prototype.Iz = function(n, t, i, h, s, o) {
          if (this.Pb) throw e.i.Hb();
          if (0 > o && (o = this.size), this.size + 2 * h > this.o.length ? this.resize(this.size + 2 * h) : this.size += 2 * h, v(this.o, n + 2 * h, n, n + (o - n)), s) for (s = 0; s < h; s++) o = t[i++], this.o[n++] = o.x, this.o[n++] = o.y;
          else {
            s = 0;
            for (var a = h - 1; s < h; ++s) o = t[i + a], this.o[n++] = o.x, this.o[n++] = o.y, a--;
          }
        }, r.prototype.vj = function(n, t, i) {
          if (this.Pb) throw e.i.Hb();
          v(this.o, n + 2, n, n + (i - n)), this.o[n] = t.x, this.o[n + 1] = t.y;
        }, r.prototype.Ut = function(n, t, i, h, s, o) {
          if (0 > n || 0 > t || 0 > h || !s && (0 >= o || t % o != 0) || i.size < h + t) throw e.i.N();
          if (t != 0) if (this.size < t + n && this.resize(t + n), i == this) this.Ar(n, t, h, s, o);
          else if (s) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h++;
          else if (h = h + t - o, o == 1) for (s = 0; s < t; s++) this.o[n] = i.o[h], n++, h--;
          else for (s = 0, t = e.O.truncate(t / o); s < t; s++) {
            for (var a = 0; a < o; a++) this.o[n + a] = i.o[h + a];
            n += o, h -= o;
          }
        }, r.prototype.En = function(n, t, i) {
          if (this.Pb || n + t > this.size) throw e.i.Hb();
          0 < i - (n + t) && v(this.o, n, n + t, n + (i - (n + t)) + t), this.size -= t;
        }, r.prototype.ni = function(n, t, i) {
          if (this.Pb || 1 > i || t % i != 0) throw e.i.Hb();
          for (var h = t >> 1, s = 0; s < h; s += i) {
            t -= i;
            for (var o = 0; o < i; o++) {
              var a = this.o[n + s + o];
              this.o[n + s + o] = this.o[n + t + o], this.o[n + t + o] = a;
            }
          }
        }, r.prototype.Wj = function(n, t, i) {
          if (0 > t || 0 > i || 0 > t || i + t > this.size) throw e.i.N();
          for (var h = t; h < t + i; h++) this.o[h] = n;
        }, r.prototype.Ar = function(n, t, i, h, s) {
          if (!(h && n == i || (this.o.set(this.o.subarray(i, i + t), n), h))) for (i = n, n = n + t - s, h = 0, t = e.O.truncate(t / 2); h < t; h++) {
            for (var o = 0; o < s; o++) {
              var a = this.o[i + o];
              this.o[i + o] = this.o[n + o], this.o[n + o] = a;
            }
            i += s, n -= s;
          }
        }, r.prototype.vC = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h) throw e.i.N();
          if (t != 0) for (this.size < (t << 1) + n && this.resize((t << 1) + n), s || (n += t - 1 << 1), s = s ? 2 : -2, t += h; h < t; h++) this.o[n] = i[h].x, this.o[n + 1] = i[h].y, n += s;
        }, r.prototype.Vw = function(n, t, i, h, s) {
          if (0 > n || 0 > t || 0 > h || this.size < t + n) throw e.i.N();
          if (s) for (s = 0; s < t; s++) i[h + s] = this.o[n + s];
          else for (h = h + t - 1; n < t; n++) i[h] = this.o[n], h--;
        }, r.prototype.clear = function(n) {
          n ? this.resize(0) : this.Bh(0);
        }, r.prototype.ix = function() {
          this.pk = this.Pb = !0;
        }, r.prototype.Vd = function(n, t, i) {
          t = this.o.subarray(n, t), Array.prototype.sort.call(t, i), this.o.set(t, n);
        }, r.prototype.zJ = function(n, t) {
          if (this.Pb) throw e.i.fa("invalid call. Attribute Stream is read only.");
          this.o[n] |= t;
        }, r.prototype.KE = function(n, t) {
          if (this.Pb) throw e.i.fa("invalid call. Attribute Stream is read only.");
          this.o[n] &= ~t;
        }, r.prototype.Tp = function() {
          return 1;
        }, r;
      }();
      e.pn = f;
    }(k || (k = {})), function(e) {
      e.Yc = function() {
        function v() {
        }
        return v.Mr = function(f, r) {
          return e.pn.qf(f, r);
        }, v.Dn = function(f, r) {
          return e.be.qf(f, r);
        }, v.pP = function(f, r, n) {
          switch (f) {
            case 1:
              f = e.be.qf(r, n);
              break;
            case 2:
              f = e.ia.qf(r, n);
              break;
            case 4:
              f = e.pn.qf(r, n);
              break;
            default:
              throw e.i.Qa();
          }
          return f;
        }, v.YE = function(f, r) {
          return v.pP(e.ra.Tp(f), r * e.ra.Va(f), e.ra.se(f));
        }, v.Oh = function(f, r) {
          return e.ia.qf(f, r);
        }, v.qI = function(f) {
          var r, n = [];
          for (r = 0; r < f; r++) n.push(null);
          return n;
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.ga = function(v) {
        v === void 0 && (v = 0), this.u = v;
      };
    }(k || (k = {})), function(e) {
      e.NL = function() {
        function v() {
        }
        return v.bind = function(f) {
          e.Sc = f.PeDefs, e.pf = f.PeFactory, e.NC = f.PeVertcs, e.ej = f.PeCSTransformations, e.MC = f.PeGTTransformations, e.LL = f.PeGeogtran, e.KL = f.PeFactoryCodechange, e.LC = f.PeGCSExtent, e.Cg = f.PePCSInfo, e.ML = f.PeHorizon, e.JL = f.PeCoordsys, e.lp = f.PeGTlistExtended, e.lp.PE_GTLIST_OPTS_USE_DEFAULT = 128, e.pf.initialize(null), e.Mx = f.PeGTlistExtendedEntry, e.pf.fromString(e.Sc.PE_TYPE_UNIT, 'UNIT["Meter",1.0]');
        }, v;
      }(), e.pf = null, e.NC = null, e.JL = null, e.ML = null, e.Cg = null, e.lp = null, e.Mx = null, e.LC = null, e.KL = null, e.LL = null, e.Sc = null, e.MC = null, e.ej = null;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.Mb = function(r, n) {
          return 0 <= n ? f.P(r) : -f.P(r);
        }, f.P = function(r) {
          return 0 > r ? -r : r;
        }, f.ti = function(r) {
          return 3552713678800501e-30 > r;
        }, f.KC = function(r, n, t) {
          return f.P(r - n) <= t * (1 + (f.P(r) + f.P(n)) / 2);
        }, f.Y = function(r, n) {
          return f.KC(r, n, 3552713678800501e-30);
        }, f.FL = function(r) {
          return 3552713678800501e-30 >= f.P(r);
        }, f.Cd = function(r) {
          return f.FL(r);
        }, f;
      }();
      e.s = v, e.F = function() {
        function f() {
        }
        return f.gp = function(r, n) {
          var t = 0;
          return (r = v.P(r)) + (n = v.P(n)) != 0 && (r > n ? (t = n / r, t = r * Math.sqrt(1 + t * t)) : (t = r / n, t = n * Math.sqrt(1 + t * t))), t;
        }, f.Wq = function(r, n, t, i, h) {
          for (var s = [0, 0, 0], o = [0, 0, 0], a = 0; 2 >= a; a++) n[a] -= r[a], t[a] -= n[a];
          t = s[1] * o[2] - s[2] * o[1], n = s[2] * o[0] - s[0] * o[2], s = s[0] * o[1] - s[1] * o[0], r = -1 * (t * r[0] + n * r[1] + s * r[2]), i[0] = t, i[1] = n, i[2] = s, i[3] = r, o = f.on(i), i[0] /= o, i[1] /= o, i[2] /= o, i[3] /= o, h != 0 && (o = v.Cd(s) ? v.Cd(r) ? v.Mb(1, n) : -v.Mb(1, r) : v.Mb(1, s), o *= v.Mb(1, h), i[0] *= o, i[1] *= o, i[2] *= o, i[3] *= o);
        }, f.zx = function(r, n, t) {
          t[0] = r[1] * n[2] - n[1] * r[2], t[1] = r[2] * n[0] - n[2] * r[0], t[2] = r[0] * n[1] - n[0] * r[1];
        }, f.St = function(r, n) {
          return r[0] * n[0] + r[1] * n[1] + r[2] * n[2];
        }, f.on = function(r) {
          return f.gp(f.gp(r[0], r[1]), r[2]);
        }, f.cl = function(r, n, t, i, h, s, o, a) {
          r = f.n(r, n, t);
          var u = Math.cos(t);
          s.u = (r + h) * u * Math.cos(i), o.u = (r + h) * u * Math.sin(i), a.u = (r * (1 - n) + h) * Math.sin(t);
        }, f.jO = function(r, n, t, i, h, s, o) {
          var a = f.gp(n, t), u = 1 * Math.sqrt(1 - r), c = u / 1;
          if (v.Y(a, 0)) s.u = 0, h.u = v.Mb(1.570796326794897, i), o.u = v.P(i) - u;
          else {
            s.u = Math.atan2(t, n), t = Math.atan2(1 * i, u * a), s = Math.cos(t);
            var l = Math.sin(t);
            n = u * r / (1 - r), r *= 1, t = Math.atan2(i + n * l * l * l, a - r * s * s * s), 3.141592653589793 < v.P(t) && (t = v.Mb(3.141592653589793, t) - t), t = Math.atan(c * Math.tan(t)), l = Math.sin(t), s = Math.cos(t), h.u = Math.atan2(i + n * l * l * l, a - r * s * s * s), 1.570796326794897 < v.P(h.u) && (h.u = v.Mb(3.141592653589793, h.u) - h.u), t = Math.atan(c * Math.tan(h.u)), l = Math.sin(t), s = Math.cos(t), o.u = (i - u * l) * Math.sin(h.u) + (a - 1 * s) * Math.cos(h.u);
          }
        }, f.n = function(r, n, t) {
          return t = Math.sin(t), r / Math.sqrt(1 - n * t * t);
        }, f.ot = function(r, n) {
          return Math.atan2(Math.sin(n) * (1 - r), Math.cos(n));
        }, f.Qj = function(r, n) {
          return Math.atan2(Math.sin(n), Math.cos(n) * (1 - r));
        }, f.Rq = function(r, n) {
          if (v.ti(r) || n == 0 || v.Y(v.P(n), 1.570796326794897)) return n;
          if (0.006884661117170036 > r) {
            var t = Math.sqrt(1 - r), i = (1 - t) / (1 + t), h = i * i, s = i * h, o = i * s, a = i * o, u = i * a, c = i * u, l = 1.572916666666667 * s - 3.2578125 * a + 4.295068359375 * c;
            r = 2.142578125 * o - 6.071484375 * u, t = 3.129296875 * a - 11.249837239583334 * c;
            var p = 4.775276692708333 * u, y = 7.958636765252976 * c, d = Math.cos(2 * n);
            return n + Math.sin(2 * n) * (1.5 * i - 0.84375 * s + 0.525390625 * a - 0.2688395182291667 * c - l + t - y + d * (2 * (1.3125 * h - 1.71875 * o + 1.650146484375 * u) - 4 * r + 6 * p + d * (4 * l - 12 * t + 24 * y + d * (8 * r - 32 * p + d * (16 * t - 80 * y + d * (32 * p + 64 * d * y))))));
          }
          for (t = 1 - r, i = r / 2, s = (h = v.P(n)) * f.Zu(r) / (1.570796326794897 * t), o = 9999, u = h, h = 0; 1e-16 < o && 50 > h; h++) c = f.w(r, u), a = u - (l = (a = (f.kG(u, r) - i * Math.sin(2 * u) / c) / t - s) / (c = 1 / (c * c * c))), o = v.P(l), u = a;
          return 0 <= n ? u : -u;
        }, f.qW = function(r, n) {
          return v.ti(n) ? r : r * f.Zu(n) / 1.570796326794897;
        }, f.ba = function(r) {
          return 0 > (r = f.pF(r, 6.283185307179586)) ? r + 6.283185307179586 : 3.141592653589793 > v.P(r) || v.Y(v.P(r), 3.141592653589793) ? r : r - 6.283185307179586;
        }, f.pF = function(r, n) {
          return r - Math.floor(r / n) * n;
        }, f.Ah = function(r, n) {
          if (0.006884661117170036 > n) {
            var t = (n = (1 - (n = Math.sqrt(1 - n))) / (1 + n)) * n, i = t * t;
            return r / (1 + n) * (1 + 0.25 * t + 0.015625 * i + 390625e-8 * t * i) * 1.570796326794897;
          }
          return r * f.Zu(n);
        }, f.Vq = function(r, n) {
          var t = v.Mb(1, Math.sin(n));
          return n = 1.570796326794897 >= (n = v.P(f.pF(n, 3.141592653589793))) ? n : 3.141592653589793 - n, (v.Y(n, 1.570796326794897) ? n : Math.atan(Math.sqrt(1 - r) * Math.tan(n))) * t;
        }, f.q = function(r, n, t) {
          if (0.006884661117170036 > n) {
            var i = (n = (1 - (n = Math.sqrt(1 - n))) / (1 + n)) * n, h = n * i, s = n * h, o = n * s, a = n * o, u = n * a, c = -0.7291666666666666 * h + 0.2278645833333333 * o + 0.03987630208333334 * u, l = 0.615234375 * s - 0.21533203125 * a, p = -0.54140625 * o + 0.20302734375 * u, y = 0.48876953125 * a, d = -0.4488699776785715 * u, g = Math.cos(2 * t);
            return r / (1 + n) * ((1 + 0.25 * i + 0.015625 * s + 390625e-8 * a) * t + Math.sin(2 * t) * (-1.5 * n + 0.1875 * h + 0.0234375 * o + 0.00732421875 * u - c + p - d + g * (2 * (0.9375 * i - 0.234375 * s - 0.03662109375 * a) - 4 * l + 6 * y + g * (4 * c - 12 * p + 24 * d + g * (8 * l - 32 * y + g * (16 * p - 80 * d + g * (32 * y + 64 * g * d)))))));
          }
          return r * (f.kG(t, n) - 0.5 * n * Math.sin(2 * t) / f.w(n, t));
        }, f.w = function(r, n) {
          return n = Math.sin(n), Math.sqrt(1 - r * n * n);
        }, f.Zu = function(r) {
          return v.KC(r, 1, 2220446049250313e-31) ? 1 : 1 > r ? f.Xw(0, 1 - r) - r / 3 * f.Uw(0, 1 - r) : NaN;
        }, f.kG = function(r, n) {
          var t = v.Mb(1, r);
          r = v.P(r);
          var i = Math.floor(r / 1.570796326794897);
          if (1 < n) n = r == 0 ? 0 : NaN;
          else if (v.Cd(i)) n = (r = f.sin(r)) * f.Xw(1 - r * r, 1 - n * r * r) - n / 3 * r * r * r * f.Uw(1 - r * r, 1 - n * r * r);
          else {
            var h = e.O.truncate(i % 2), s = f.Zu(n);
            0 < h ? (r = 1.570796326794897 * (i + 1) - r, n = s * (i + 1) - (n = (r = Math.sin(r)) * f.Xw(1 - r * r, 1 - n * r * r) - n / 3 * r * r * r * f.Uw(1 - r * r, 1 - n * r * r))) : (r -= 1.570796326794897 * i, n = s * i + (n = (r = Math.sin(r)) * f.Xw(1 - r * r, 1 - n * r * r) - n / 3 * r * r * r * f.Uw(1 - r * r, 1 - n * r * r)));
          }
          return n * t;
        }, f.sin = function(r) {
          r = f.ba(r);
          var n = v.Mb(1, r);
          return r = v.P(r), v.Y(r, 3.141592653589793) ? 0 : v.Y(r, 1.570796326794897) ? 1 * n : Math.sin(r) * n;
        }, f.Uw = function(r, n) {
          var t, i, h, s, o = r, a = n, u = 1;
          for (n = 0, r = 1; i = ((t = 0.2 * (o + a + 3 * u)) - o) / t, h = (t - a) / t, s = (t - u) / t, !(1e-4 > v.P(i) && 1e-4 > v.P(h) && 1e-4 > v.P(s)); ) s = Math.sqrt(a), n += r / ((t = Math.sqrt(u)) * (u + (s = Math.sqrt(o) * (s + t) + s * t))), r *= 0.25, o = 0.25 * (o + s), a = 0.25 * (a + s), u = 0.25 * (u + s);
          return a = (o = i * h) - (u = s * s), 3 * n + r * (1 + (u = o - 6 * u) * (0.10227272727272728 * u - 0.2142857142857143 - 0.1730769230769231 * s * (i = u + a + a)) + s * (0.1666666666666667 * i + s * (-0.4090909090909091 * a + 0.1153846153846154 * s * o))) / (t * Math.sqrt(t));
        }, f.Xw = function(r, n) {
          for (var t, i, h, s, o = 1; i = 2 - ((t = (r + n + o) / 3) + r) / t, h = 2 - (t + n) / t, s = 2 - (t + o) / t, !(1e-4 > v.P(i) && 1e-4 > v.P(h) && 1e-4 > v.P(s)); o = 0.25 * (o + t)) t = Math.sqrt(n), i = Math.sqrt(o), r = 0.25 * (r + (t = Math.sqrt(r) * (t + i) + t * i)), n = 0.25 * (n + t);
          return (1 + (0.04166666666666666 * (r = i * h - s * s) - 0.1 - 0.06818181818181818 * (n = i * h * s)) * r + 0.07142857142857142 * n) / Math.sqrt(t);
        }, f.Qw = function(r, n) {
          if (v.ti(r) || n == 0 || v.Y(v.P(n), 1.570796326794897)) return n;
          if (0.006884661117170036 > r) {
            var t = r * r, i = r * t, h = r * i, s = r * h, o = r * s, a = r * o, u = -(0.02708333333333333 * i + 0.03430059523809524 * h + 0.03149181547619048 * s + 0.02634359154541446 * o + 0.02156896735835538 * a), c = 0.007669890873015873 * h + 0.01299603174603175 * s + 0.0148051353064374 * o + 0.01454454953803912 * a, l = -(0.002275545634920635 * s + 0.004830845032667949 * o + 0.006558395368616723 * a), p = 6957236677288761e-19 * o + 0.001775193002406544 * a, y = -217324089394402e-18 * a, d = Math.cos(2 * n);
            return n + Math.sin(2 * n) * (-(0.5 * r + 0.2083333333333333 * t + 0.09375 * i + 0.04878472222222222 * h + 0.02916666666666667 * s + 0.01938905423280423 * o + 0.01388255931712963 * a) - u + l - y + d * (2 * (0.1041666666666667 * t + 0.0875 * i + 0.06050347222222222 * h + 0.04151785714285714 * s + 0.02958958540013228 * o + 0.02203667534722222 * a) - 4 * c + 6 * p + d * (4 * u - 12 * l + 24 * y + d * (8 * c - 32 * p + d * (16 * l - 80 * y + d * (32 * p + 64 * d * y))))));
          }
          return n == 0 || v.Y(v.P(n), 1.570796326794897) ? t = n : (h = (i = Math.sqrt(r)) * Math.sin(n), t = Math.tan(0.7853981633974483 + n / 2) * Math.pow((1 - h) / (1 + h), i / 2), t = 2 * Math.atan(t) - 1.570796326794897), t;
        }, f.yO = function(r, n) {
          if (v.ti(r) || n == 0 || v.Y(v.P(n), 1.570796326794897)) return n;
          if (0.006884661117170036 > r) {
            var t = r * (p = r * (l = r * (d = r * r))), i = r * (y = r * t), h = 0.05833333333333333 * l + 0.07232142857142858 * p + 0.05634300595238095 * t + 0.0355325796406526 * y + 0.020235546186067 * i, s = 0.02653149801587302 * p + 0.04379960317460317 * t + 0.0429211791776896 * y + 0.03255384637546096 * i, o = 0.01294022817460318 * t + 0.02668104344536636 * y + 0.03155651254609588 * i, a = 0.00659454790965208 * y + 0.0163075268674227 * i, u = 0.003463473736911237 * i, c = Math.cos(2 * n);
            return n + Math.sin(2 * n) * (0.5 * r + 0.2083333333333333 * d + 0.08333333333333333 * l + 0.03611111111111111 * p + 0.01875 * t + 0.01195601851851852 * y + 0.008863673941798942 * i - h + o - u + c * (2 * (0.1458333333333333 * d + 0.1208333333333333 * l + 0.07039930555555556 * p + 0.03616071428571429 * t + 0.01839451058201058 * y + 0.01017113095238095 * i) - 4 * s + 6 * a + c * (4 * h - 12 * o + 24 * u + c * (8 * s - 32 * a + c * (16 * o - 80 * u + c * (32 * a + 64 * c * u))))));
          }
          var l = Math.sqrt(r), p = l / 2, y = Math.tan(0.7853981633974483 + n / 2);
          r = 0, h = 1;
          for (var d = n; h != 0; d = i) t = l * Math.sin(d), i = y * Math.pow((1 + t) / (1 - t), p), i = 2 * Math.atan(i) - 1.570796326794897, r++, (v.Y(i, d) || 3e4 < r) && (h = 0);
          return d;
        }, f;
      }();
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.ul = this.Us = null, this.Iv = !1, this.GA = this.HA = 0, this.HH = new e.h(), this.XH = new e.h(), this.KA = !1, this.vq = new e.l(), this.wH = this.sw = 0, this.tw = null, this.zl = !1, this.Eo = null, this.bA = 0, this.Ue = r, this.As = e.zb.xv(this.Ue, 0, !0), this.HH.Rc(), this.XH.Rc(), this.RH = NaN;
          var n = r.getCode();
          0 < n ? (this.Kk = n, e.pf.getCode(r)) : this.Kk = e.pf.getCode(r), 0 > this.Kk && (this.Kk = 0);
          var t = this.Ue.getType();
          if (this.jH = t == e.Sc.PE_TYPE_PROJCS ? 2 : 1, t == e.Sc.PE_TYPE_PROJCS && !r.loadConstants()) throw e.i.N("PeProjcs.loadConstants failed");
          n = t == e.Sc.PE_TYPE_GEOGCS ? this.Ue : this.Ue.getGeogcs(), t != e.Sc.PE_TYPE_GEOGCS && e.pf.getCode(n), this.Eo = r.getUnit(), this.RH = n.getPrimem().getLongitude(), this.wH = r = n.getUnit().getUnitFactor(), r = Math.PI / (180 * r), 1e-10 > Math.abs(r - 1) && (r = 1), this.GA = r, t & e.Sc.PE_TYPE_PROJCS ? (n = this.Ue, this.HA = 1 / n.getUnit().getUnitFactor(), this.sw = 1e-3 / this.Ue.getUnit().getUnitFactor(), this.tw = e.Cg.generate(n, e.Cg.PE_PCSINFO_OPTION_NONE), this.zl = this.tw.isPannableRectangle(), this.bA = e.zb.qN(this.tw.getCentralMeridian(), this.GA)) : (this.KA = this.zl = !0, this.HA = 0, t = 1 / n.getUnit().getUnitFactor(), this.sw = 1e-3 / n.getDatum().getSpheroid().getAxis() * t, this.bA = 0), this.zl && (this.xx(), this.DK(), this.nY(), this.CK(), this.lY(), this.mY());
        }
        return f.prototype.$r = function() {
          return this.Kk;
        }, f.prototype.kk = function() {
          return this.tw;
        }, f.Py = function(r, n) {
          return r == n || r != null && n != null && r.Kk == 0 && n.Kk == 0 && r.As === n.As;
        }, f.prototype.Wc = function() {
          return this.zl;
        }, f.prototype.gh = function(r) {
          r.K(this.so);
        }, f.prototype.pv = function() {
          return this.so.v;
        }, f.prototype.ov = function() {
          return this.so.C;
        }, f.prototype.GR = function(r) {
          r.K(this.uw);
        }, f.prototype.lY = function() {
          var r = this.Ue.getType();
          if (r == e.Sc.PE_TYPE_PROJCS) {
            r = this.Ue;
            var n = this.kk().getCentralMeridian(), t = r.getGeogcs();
            if (t == null) throw e.i.fa("internal error");
            n = [[n + (t = 1 / t.getUnit().getUnitFactor() * Math.PI), 0]], e.ej.geogToProj(r, 1, n), n = n[0][0], t = r.getParameters()[e.Sc.PE_PARM_X0].getValue();
            var i = this.ml();
            r = new e.l(), i.A(r), n = (i = Math.abs(n - t)) + t, t = -1 * i + t, i = r.H, r = r.G;
            var h = new e.l();
            h.K(t, r, n, i), this.so == null && (this.so = h);
          } else {
            if (r != e.Sc.PE_TYPE_GEOGCS) throw e.i.fa("internal error");
            t = 1 / this.Ue.getUnit().getUnitFactor() * Math.PI, (r = new e.l()).K(-t, -t / 2, t, t / 2), this.so == null && (this.so = r);
          }
        }, f.prototype.mY = function() {
          var r = this.Ue.getType();
          if (r == e.Sc.PE_TYPE_PROJCS) {
            var n = this.Ue;
            if (r = this.kk().getCentralMeridian(), (n = n.getGeogcs()) == null) throw e.i.fa("internal error");
            n = 1 / n.getUnit().getUnitFactor() * Math.PI;
            var t = this.Vr(), i = new e.l();
            t.A(i), (t = new e.l()).K(r - n, i.G, r + n, i.H), this.uw == null && (this.uw = t);
          } else {
            if (r != e.Sc.PE_TYPE_GEOGCS) throw e.i.fa("internal error");
            n = 1 / this.Ue.getUnit().getUnitFactor() * Math.PI, (r = new e.l()).K(-n, -n / 2, n, n / 2), this.uw == null && (this.uw = r);
          }
        }, f.prototype.bf = function() {
          return this.GA;
        }, f.prototype.pm = function() {
          return this.HA;
        }, f.prototype.Vr = function() {
          if (this.zl) return this.ul;
          var r = this.ul;
          return r ?? (this.xx(), this.ul);
        }, f.prototype.Wr = function() {
          return this.zl ? null : (this.ul != null || this.xx(), this.YG);
        }, f.prototype.xx = function() {
          if (this.Ue.getType() == e.Sc.PE_TYPE_PROJCS) {
            var r = this.Ue, n = r.getGeogcs(), t = r.horizonGcsGenerate();
            if (t != null) {
              var i = t[0].getNump(), h = t[0].getKind();
              r = 0 < t[0].getInclusive();
              var s = this.bf(), o = 90 * s, a = 360 * s, u = 370 * s, c = 180 * s * e.Sc.PE_HORIZON_DELTA / Math.PI, l = new e.l(), p = null;
              if (1 < i) {
                for (var y = 1; y < i; y++) if (t[y].getKind() == e.Sc.PE_HORIZON_LINE) {
                  p == null && (p = new e.Ta());
                  var d = t[y].getCoord();
                  p.sx(d[0][0], d[0][1]), p.yj(d[1][0], d[1][1]);
                }
              }
              if (h == e.Sc.PE_HORIZON_RECT) t = t[0].getCoord(), l.K(t[0][0], t[0][1]), l.Zb(t[1][0], t[1][1]), Math.abs(l.H - o) < 1e-7 * c && (l.H = o), Math.abs(l.G + o) < 1e-7 * c && (l.G = -o), l.R() > u && (t = -400 * s, l.K(t, l.G, t + 5 * a, l.H)), t = new e.Fh(l), this.ul == null && (this.ul = t, this.Iv = r);
              else {
                if (u = new e.Da(), a = this.kk().isGcsHorizonMultiOverlap(), l = e.gu.bF(n, e.hu.Integer64), a) {
                  for (u = new e.gL(), c = e.Gh.local().V(u, l, null), y = 0; y < i; y++) if (t[y].getKind() == e.Sc.PE_HORIZON_POLY) {
                    for (n = t[y].getSize(), s = t[y].getCoord(), h = [], o = 0; o < n; o++) h[o] = e.h.construct(s[o][0], s[o][1]);
                    t[y].getInclusive(), a && ((s = new e.Da()).Yk(h, n - 1), u.ZX(s), c.qe());
                  }
                  u = c.next();
                } else for (y = 0; y < i; y++) if (t[y].getKind() == e.Sc.PE_HORIZON_POLY) {
                  for (n = t[y].getSize(), s = t[y].getCoord(), a = [], o = 0; o < n; o++) a[o] = e.h.construct(s[o][0], s[o][1]);
                  t[y].getInclusive(), u.Yk(a, n - 1);
                }
                r ? e.Xj.local().wn(u, l, 1) : e.kp.local().wn(u, l, 1), e.dj.local().wn(u, l, 1), this.ul == null && (this.ul = u, this.Iv = r, this.YG = p);
              }
            }
          }
        }, f.prototype.hv = function() {
          return this.zl || this.ul == null && this.xx(), this.Iv;
        }, f.prototype.DK = function() {
          if (this.jH == 2) {
            var r = this.Ue.horizonPcsGenerate();
            if (r != null) {
              var n = r[0].getKind();
              r[0].getInclusive();
              var t = r[0].getNump(), i = !1;
              if (n == e.Sc.PE_HORIZON_RECT) r = r[0].getCoord(), (t = new e.l()).K(r[0][0], r[0][1]), t.Zb(r[1][0], r[1][1]), r = new e.Fh(t);
              else {
                for (n = -1, i = 0; i < t; i++) r[i].getKind() == e.Sc.PE_HORIZON_POLY && (n = i);
                for (i = r[n].getSize() - 1, r = r[n].getCoord(), t = [], n = 0; n < i; n++) t[n] = e.h.construct(r[n][0], r[n][1]);
                r = n = new e.Da(), n.Yk(t, i), i = !0;
              }
              this.kk().isDensificationNeeded() && (t = 1e5 * this.pm(), r = e.Xl.local().V(r, t, null)), i && (i = new e.Fh(), r.bn(i), r.Ke(), r.Qb(), r.qR(), e.Xj.local().wn(r, null, 1)), this.Us == null && (this.Us = r);
            }
          }
        }, f.prototype.ml = function() {
          if (this.zl) return this.Us;
          var r = this.Us;
          return r ?? (this.DK(), this.Us);
        }, f.prototype.nY = function() {
          if (this.Ue.getType() == e.Sc.PE_TYPE_PROJCS) {
            var r = 90 * this.bf();
            r = [[0, r], [0, -r]], e.ej.geogToProj(this.Ue, 2, r);
            var n = this.kk(), t = n.getNorthPoleLocation() != e.Cg.PE_POLE_OUTSIDE_BOUNDARY;
            n = n.getSouthPoleLocation() != e.Cg.PE_POLE_OUTSIDE_BOUNDARY, this.KA || (t && this.HH.ma(r[0][0], r[0][1]), n && this.XH.ma(r[1][0], r[1][1]));
          }
          this.KA = !0;
        }, f.prototype.CK = function() {
          if (this.jH == 1) {
            var r = 400 * this.bf();
            this.vq.K(-r, -r, r, r);
          } else r = e.Cg.generate(this.Ue, e.Cg.PE_PCSINFO_OPTION_DOMAIN), r = e.l.construct(r.getDomainMinx(), r.getDomainMiny(), r.getDomainMaxx(), r.getDomainMaxy()), this.vq.B() && this.vq.K(r);
        }, f.prototype.hR = function(r) {
          this.zl && r.K(this.vq), this.vq.B() && this.CK(), r.K(this.vq);
        }, f.prototype.Up = function() {
          return this.RH;
        }, f.prototype.zi = function() {
          return this.bA;
        }, f.prototype.Hd = function() {
          return this.Eo;
        }, f.prototype.Xr = function() {
          return this.wH;
        }, f;
      }();
      e.OC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.KT = r, this.As = e.zb.xv(r, 0, !0);
          var n = r.getCode();
          this.ss = 0 < n ? n : e.pf.getCode(r), 0 > this.ss && (this.ss = 0), this.Eo = n = this.KT.getUnit(), this.IH = 1 / n.getUnitFactor(), e.pf.getCode(r);
        }
        return f.Py = function(r, n) {
          return r == n || r != null && n != null && r.ss == 0 && n.ss == 0 && r.As === n.As;
        }, f.prototype.$r = function() {
          return this.ss;
        }, f;
      }();
      e.PL = v;
    }(k || (k = {})), function(e) {
      e.Yg = function() {
        function v() {
        }
        return v.tb = function(f, r, n, t, i, h, s, o) {
          if (h != null || s != null || o != null) {
            t = e.F.ba(t), r = e.F.ba(r), n = e.F.ba(n), i = e.F.ba(i), 1.570796326794897 < e.s.P(n) && (n = e.s.Mb(3.141592653589793, n) - n, r = e.F.ba(r + 3.141592653589793)), 1.570796326794897 < e.s.P(i) && (i = e.s.Mb(3.141592653589793, i) - i, t = e.F.ba(t + 3.141592653589793));
            var a = e.F.ba(t - r);
            if (e.s.Y(n, i) && (e.s.Y(r, t) || e.s.Y(e.s.P(n), 1.570796326794897))) h != null && (h.u = 0), s != null && (s.u = 0), o != null && (o.u = 0);
            else {
              if (e.s.Y(n, -i)) {
                if (e.s.Y(e.s.P(n), 1.570796326794897)) return h != null && (h.u = 3.141592653589793 * f), s != null && (s.u = 0 < n ? e.F.ba(3.141592653589793 - e.F.ba(t)) : e.F.ba(t)), void (o != null && (o.u = 0 < n ? e.F.ba(t) : e.F.ba(3.141592653589793 - e.F.ba(t))));
                if (e.s.Y(e.s.P(a), 3.141592653589793)) return h != null && (h.u = 3.141592653589793 * f), s != null && (s.u = 0), void (o != null && (o.u = 0));
              }
              var u = e.s.P(n) == 1.570796326794897 ? 0 : Math.cos(n), c = Math.sin(n), l = e.s.P(i) == 1.570796326794897 ? 0 : Math.cos(i), p = Math.sin(i), y = e.s.P(a) == 1.570796326794897 ? 0 : Math.cos(a), d = e.s.P(a) == 3.141592653589793 ? 0 : Math.sin(a);
              if (h != null) {
                var g = Math.sin((i - n) / 2);
                a = Math.sin(a / 2), h.u = 2 * Math.asin(Math.sqrt(g * g + u * l * a * a)) * f;
              }
              s != null && (s.u = e.s.Y(e.s.P(n), 1.570796326794897) ? 0 > n ? t : e.F.ba(3.141592653589793 - t) : Math.atan2(l * d, u * p - c * l * y)), o != null && (e.s.Y(e.s.P(i), 1.570796326794897) ? o.u = 0 > i ? r : e.F.ba(3.141592653589793 - r) : (o.u = Math.atan2(u * d, p * u * y - l * c), o.u = e.F.ba(o.u + 3.141592653589793)));
            }
          }
        }, v.rf = function(f, r, n, t, i, h, s) {
          if (h != null || s != null) {
            r = e.F.ba(r), n = e.F.ba(n), 1.570796326794897 < e.s.P(n) && (n = e.s.Mb(3.141592653589793, n) - n, r = e.F.ba(r + 3.141592653589793)), e.s.Y(e.s.P(n), 1.570796326794897) && (r = 0), i = e.F.ba(i);
            var o = e.s.Y(e.s.P(i), 1.570796326794897) ? 0 : Math.cos(i), a = e.s.Y(e.s.P(i), 3.141592653589793) ? 0 : Math.sin(i), u = e.s.Y(e.s.P(n), 1.570796326794897) ? 0 : Math.cos(n), c = Math.sin(n);
            f = t / f, t = e.s.Y(e.s.P(f), 1.570796326794897) ? 0 : Math.cos(f);
            var l = e.s.Y(e.s.P(f), 3.141592653589793) ? 0 : Math.sin(f), p = Math.asin(c * t + u * l * o);
            s != null && (s.u = p), h != null && (h.u = e.s.Y(e.s.P(p), 1.570796326794897) ? e.s.Y(n, -p) ? 0 > p ? i : e.F.ba(3.141592653589793 - i) : r : e.s.Y(e.s.P(n), 1.570796326794897) && e.s.Y(f, 3.141592653589793) ? 0 > n ? i : e.F.ba(3.141592653589793 - i) : e.F.ba(r + Math.atan2(l * a, u * t - c * l * o)));
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.Wk = function() {
        function v() {
        }
        return v.tb = function(f, r, n, t, i, h, s, o, a) {
          var u = new e.ga(0), c = new e.ga(0), l = [0, 0, 0], p = [0, 0, 0], y = [0, 0, 0], d = new e.ga(0), g = new e.ga(0), b = new e.ga(0), x = new e.ga(0), m = new e.ga(0);
          if (s != null || o != null || a != null) if (e.s.ti(r)) e.Yg.tb(f, n, t, i, h, s, o, a);
          else {
            i = e.F.ba(i), n = e.F.ba(n);
            var w = e.F.ba(i - n);
            if (e.s.Y(t, h) && (e.s.Y(n, i) || e.s.Y(e.s.P(t), 1.570796326794897))) s != null && (s.u = 0), o != null && (o.u = 0), a != null && (a.u = 0);
            else {
              if (e.s.Y(t, -h)) {
                if (e.s.Y(e.s.P(t), 1.570796326794897)) return s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0 < t ? e.F.ba(3.141592653589793 - e.F.ba(i)) : e.F.ba(i)), void (a != null && (a.u = 0 < t ? e.F.ba(i) : e.F.ba(3.141592653589793 - e.F.ba(i))));
                e.s.Y(e.s.P(w), 3.141592653589793) && (s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0), a != null && (a.u = 0));
              } else (e.s.Y(e.s.P(t), 1.570796326794897) || e.s.Y(e.s.P(h), 1.570796326794897)) && (e.s.Y(e.s.P(t), 1.570796326794897) ? n = i : i = n);
              var j = 0;
              if (0 > w) {
                j = 1;
                var M = n;
                n = i, i = M, M = t, t = h, h = M;
              }
              w = e.F.ot(r, t);
              var A = e.F.ot(r, h);
              o == null && a == null || (e.Yg.tb(f, n, w, i, A, null, u, c), u = Math.atan2(Math.sin(u.u) * Math.cos(t - w), Math.cos(u.u)), c = Math.atan2(Math.sin(c.u) * Math.cos(h - A), Math.cos(c.u)), j != 0 && (M = u, u = c, c = M), o != null && (o.u = u), a != null && (a.u = c)), s != null && (e.F.cl(1, r, t, n, 0, b, x, m), l[0] = b.u, l[1] = x.u, l[2] = m.u, e.F.cl(1, r, h, i, 0, b, x, m), p[0] = b.u, p[1] = x.u, p[2] = m.u, y[0] = l[1] * p[2] - p[1] * l[2], y[1] = -(l[0] * p[2] - p[0] * l[2]), y[2] = l[0] * p[1] - p[0] * l[1], r = 1 - e.F.w(r, e.F.Vq(r, e.F.Qj(r, Math.acos(y[2] / Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]))))), r *= 2 - r, o = Math.atan2(-y[1], -y[0]), y = e.F.ba(o - 1.570796326794897), o = e.F.ba(o + 1.570796326794897), y = e.s.P(e.F.ba(n - y)) <= e.s.P(e.F.ba(n - o)) ? y : o, e.Yg.tb(1, y, 0, n, w, d, null, null), e.Yg.tb(1, y, 0, i, A, g, null, null), 3.141592653589793 < d.u + g.u && (y = e.F.ba(y + 3.141592653589793), e.Yg.tb(1, y, 0, n, w, d, null, null), e.Yg.tb(1, y, 0, i, A, g, null, null)), d.u *= e.s.Mb(1, t), g.u *= e.s.Mb(1, h), d.u = e.F.Qj(r, d.u), g.u = e.F.Qj(r, g.u), n = e.F.q(f, r, d.u), f = e.F.q(f, r, g.u), s.u = e.s.P(f - n));
            }
          }
        }, v.rf = function(f, r, n, t, i, h, s, o) {
          var a = 0, u = new e.ga(0), c = new e.ga(0), l = [0, 0, 0], p = [0, 0, 0], y = new e.ga(0), d = new e.ga(0), g = new e.ga(0);
          if (s != null || o != null) if (e.s.ti(r)) e.Yg.rf(f, n, t, i, h, s, o);
          else if (e.s.Cd(i)) s != null && (s.u = n), o != null && (o.u = t);
          else if (h = e.F.ba(h), 0 > i && (i = e.s.P(i), h = e.F.ba(h + 3.141592653589793)), n = e.F.ba(n), t = e.F.ba(t), 1.570796326794897 < e.s.P(t) && (n = e.F.ba(n + 3.141592653589793), t = e.s.Mb(3.141592653589793, t) - t), e.s.Y(e.s.P(t), 1.570796326794897) && (n = 0), e.s.Cd(t)) {
            var b = e.s.P(1.570796326794897 - e.s.P(h));
            b = e.F.Qj(r, b), b = 1 - e.F.w(r, e.F.Vq(r, b)), b *= 2 - b, f = i / e.F.Ah(f, b) * 1.570796326794897, f = e.F.Rq(b, f), f = e.F.ot(b, f), e.Yg.rf(1, n, t, f, h, s, u), o != null && (a = u.u), o != null && (o.u = e.F.Qj(r, a));
          } else if (e.s.Y(e.s.P(t), 1.570796326794897)) u = 2 * (a = e.F.Ah(f, r)), h = 0 < (f = e.s.Mb(1.570796326794897, t)) ? e.F.ba(3.141592653589793 - h) : h, t = a - i, e.s.P(t) <= a ? s != null && (s.u = h) : (t = Math.floor(i / u), e.O.truncate(t % 2) == 0 ? (s != null && (s.u = h), i -= t * u) : (s != null && (s.u = e.F.ba(h + 3.141592653589793)), i = (t + 1) * u - i), t = a - i), o != null && (o.u = e.F.Rq(r, t / a * f));
          else {
            b = e.F.ot(r, t), h = Math.atan2(Math.sin(h), Math.cos(h) * Math.cos(t - b));
            var x = e.O.truncate(e.s.Mb(1, b)) * (1.570796326794897 >= e.s.P(h) ? 1 : -1);
            h = e.F.ba(n + Math.atan(Math.tan(h) * -Math.sin(b))), e.Yg.tb(f, h, 0, n, b, null, c, null), b = e.s.P(1.570796326794897 - e.s.P(c.u)), b = e.F.Qj(r, b), b = 1 - e.F.w(r, e.F.Vq(r, b)), b *= 2 - b, e.F.cl(1, r, 0, h, 0, y, d, g), l[0] = y.u, l[1] = d.u, l[2] = g.u, e.F.cl(1, r, t, n, 0, y, d, g), p[0] = y.u, p[1] = d.u, p[2] = g.u, t = Math.acos((l[0] * p[0] + l[1] * p[1] + l[2] * p[2]) / Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2])), t = e.F.Qj(b, t), i = 0 < (t = e.F.q(f, b, t) + i * x) ? c.u : e.F.ba(c.u + 3.141592653589793), f = e.s.P(t) / e.F.Ah(f, b) * 1.570796326794897, f = e.F.Rq(b, f), f = e.F.ot(b, f), e.Yg.rf(1, h, 0, f, i, s, u), o != null && (a = u.u), o != null && (o.u = e.F.Qj(r, a));
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.cu = function() {
        function v() {
        }
        return v.tb = function(f, r, n, t, i, h, s, o, a) {
          var u = 0, c = 0, l = 0;
          if (s != null || o != null || a != null) if (e.s.ti(r)) e.Yg.tb(f, n, t, i, h, s, o, a);
          else {
            var p = e.F.ba(i - n);
            if (e.s.Y(t, h) && (e.s.Cd(p) || e.s.Y(e.s.P(t), 1.570796326794897))) s != null && (s.u = 0), o != null && (o.u = 0), a != null && (a.u = 0);
            else {
              if (e.s.Y(t, -h)) {
                if (e.s.Y(e.s.P(t), 1.570796326794897)) return s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0 < t ? e.F.ba(3.141592653589793 - e.F.ba(i)) : e.F.ba(i)), void (a != null && (a.u = 0 < t ? e.F.ba(i) : e.F.ba(3.141592653589793 - e.F.ba(i))));
                e.s.Y(e.s.P(p), 3.141592653589793) && (s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0), a != null && (a.u = 0));
              } else if (e.s.Y(e.s.P(t), 1.570796326794897) || e.s.Y(e.s.P(h), 1.570796326794897) || e.s.Cd(p) || e.s.Y(e.s.P(p), 3.141592653589793)) return void e.Wk.tb(f, r, n, t, i, h, s, o, a);
              var y = 1 - Math.sqrt(1 - r), d = r / (1 - r), g = f * (1 - y);
              f = e.F.Vq(r, t);
              var b = e.F.Vq(r, h);
              r = e.s.P(f) == 1.570796326794897 ? 0 : Math.cos(f);
              var x = Math.sin(f), m = e.s.P(b) == 1.570796326794897 ? 0 : Math.cos(b), w = Math.sin(b), j = p, M = Math.cos(j), A = Math.sin(j), z = 1, N = 0;
              do {
                var I = j, C = Math.sqrt(Math.pow(m * A, 2) + Math.pow(r * w - x * m * M, 2)), T = x * w + r * m * M, D = Math.atan2(C, T);
                if (C == 0) {
                  z = 0;
                  break;
                }
                var B = r * m * A / C;
                if (u = Math.cos(Math.asin(B)), c = T - 2 * x * w / (u *= u), 1 < e.s.P(c) && (c = e.s.Mb(1, c)), j = p + (1 - (j = y / 16 * u * (4 + y * (4 - 3 * u)))) * y * B * (D + j * C * (c + j * T * (2 * (l = c * c) - 1))), M = Math.cos(j), A = Math.sin(j), N++, 3.141592653589793 < e.s.P(j) && 30 < N) {
                  z = 0;
                  break;
                }
              } while (5e3 >= N && !e.s.Y(I, j));
              if (z != 0) y = (d *= u) * (256 + d * (d * (74 - 47 * d) - 128)) / 1024, s != null && (s.u = g * (1 + d * (4096 + d * (d * (320 - 175 * d) - 768)) / 16384) * (D - y * C * (c + y / 4 * (T * (2 * l - 1) - y / 6 * c * (4 * C * C - 3) * (4 * l - 3))))), o != null && (o.u = e.s.Y(e.s.P(t), 1.570796326794897) ? 0 > t ? i : e.F.ba(3.141592653589793 - i) : Math.atan2(m * A, r * w - x * m * M)), a != null && (e.s.Y(e.s.P(h), 1.570796326794897) ? a.u = 0 > h ? n : e.F.ba(3.141592653589793 - n) : (a.u = Math.atan2(r * A, r * w * M - x * m), a.u = e.F.ba(a.u + 3.141592653589793)));
              else {
                j = e.s.Mb(3.141592653589793, p), T = x * w - r * m, D = Math.acos(T), C = Math.sin(D), u = 1, N = B = 0;
                do
                  l = B, M = 1 - 0.25 * (B = y * (u *= u) * (1 + y + y * y)) + 0.1875 * (c = y * y * (M = u * u) * (1 + 2.25 * y)) - 0.1953125 * (z = y * y * y * M * u), B = 0.25 * B - 0.25 * c + 0.29296875 * z, A = 0.03125 * c - 0.05859375 * z, z *= 0.00651041666666667, c = T - 2 * x * w / u, 1 < e.s.P(c) && (c = e.s.Mb(1, c)), u = Math.acos(c), T = Math.cos(2 * u), I = Math.cos(3 * u), A = (B = e.s.Y(t, -h) ? e.F.ba(3.141592653589793 - p) / (3.141592653589793 * y * M) : e.F.ba(j - p) / (y * (M * D + B * C * c + A * Math.sin(2 * D) * T + z * Math.sin(3 * D) * I))) * C / (r * m), j = 1.570796326794897 < e.s.P(p) ? e.s.Mb(3.141592653589793, A) - Math.asin(A) : Math.asin(A), M = Math.cos(j), C = Math.sqrt(Math.pow(m * A, 2) + Math.pow(r * w - x * m * M, 2)), D = 3.141592653589793 - Math.asin(e.s.P(C)), T = Math.cos(D), u = Math.cos(Math.asin(B)), N++;
                while (70 >= N && !e.s.Y(l, B));
                s != null && (M = 1 + (d *= u *= u) * (4096 + d * (d * (320 - 175 * d) - 768)) / 16384, e.s.Y(t, -h) ? s.u = 3.141592653589793 * g * M : (c = T - 2 * x * w / u, u = Math.acos(c), T = Math.cos(2 * u), I = Math.cos(3 * u), s.u = g * (M * D + d * (d * (128 + d * (35 * d - 60)) - 512) / 2048 * C * c + d * (5 * d - 4) / 6144 * d * d * Math.sin(2 * D) * T + z * Math.sin(3 * D) * I + -762939453125e-16 * d * d * d * d * Math.sin(4 * D) * Math.cos(4 * u)))), o != null && (e.s.Cd(t) && e.s.Cd(h) ? (u = Math.sqrt(1 - B * B), o.u = Math.acos(u), 0 > p && (o.u *= -1)) : e.s.Y(e.s.P(t), 1.570796326794897) ? o.u = 0 > t ? i : e.F.ba(3.141592653589793 - i) : (s = B / r, g = Math.sqrt(1 - s * s), 0 > r * w - x * m * Math.cos(j) && (g *= -1), o.u = Math.atan2(s, g), e.s.Y(t, -h) && e.s.P(e.F.ba(n - i)) > 3.141592653589793 * (1 - y * Math.cos(t)) && (0 < t && 1.570796326794897 > e.s.P(o.u) || 0 > t && 1.570796326794897 < e.s.P(o.u)) && (o.u = e.s.Mb(3.141592653589793, o.u) - o.u))), a != null && (e.s.Cd(t) && e.s.Cd(h) ? (u = Math.sqrt(1 - B * B), a.u = Math.acos(u), 0 <= p && (a.u *= -1)) : e.s.Y(e.s.P(h), 1.570796326794897) ? a.u = 0 > h ? n : e.F.ba(3.141592653589793 - n) : (p = B / m, s = Math.sqrt(1 - p * p), g = Math.sin(j / 2), 0 > Math.sin(b - f) - 2 * r * w * g * g && (s *= -1), a.u = Math.atan2(p, s), a.u = e.F.ba(a.u + 3.141592653589793), e.s.Y(t, -h) && !e.s.Cd(t) && !e.s.Y(e.s.P(t), 1.570796326794897) && e.s.P(e.F.ba(n - i)) > 3.141592653589793 * (1 - y * Math.cos(t)) && (o != null ? g = o.u : (s = B / r, g = Math.sqrt(1 - s * s), 0 > r * w - x * m * Math.cos(j) && (g *= -1), g = Math.atan2(s, g), e.s.Y(t, -h) && e.s.P(e.F.ba(n - i)) > 3.141592653589793 * (1 - y * Math.cos(t)) && (0 < t && 1.570796326794897 > e.s.P(g) || 0 > t && 1.570796326794897 < e.s.P(g)) && (g = e.s.Mb(3.141592653589793, g) - g)), 1.570796326794897 >= e.s.P(g) && 1.570796326794897 < e.s.P(a.u) || 1.570796326794897 <= e.s.P(g) && 1.570796326794897 > e.s.P(a.u)) && (a.u = -1 * e.F.ba(a.u + 3.141592653589793))));
              }
            }
          }
        }, v.rf = function(f, r, n, t, i, h, s, o) {
          if (s != null || o != null) if (e.s.ti(r)) e.Yg.rf(f, n, t, i, h, s, o);
          else if (h = e.F.ba(h), e.s.Y(e.s.P(t), 1.570796326794897) || e.s.Cd(h) || e.s.Y(e.s.P(h), 3.141592653589793)) e.Wk.rf(f, r, n, t, i, h, s, o);
          else {
            var a = e.s.P(h) == 1.570796326794897 ? 0 : Math.cos(h), u = e.s.P(h) == 3.141592653589793 ? 0 : Math.sin(h);
            e.s.Y(e.s.P(t), 1.570796326794897) && (n = 0), h = 1 - Math.sqrt(1 - r);
            var c = e.F.Vq(r, t);
            t = e.s.P(c) == 1.570796326794897 ? 0 : Math.cos(c);
            var l = Math.sin(c);
            c = Math.atan2(Math.tan(c), a);
            var p = t * u, y = p * p, d = 1 - y, g = r / (1 - r) * d, b = (r = g * (256 + g * (g * (74 - 47 * g) - 128)) / 1024) / 4, x = r / 6, m = i / (f * (1 - h) * (1 + g * (4096 + g * (g * (320 - 175 * g) - 768)) / 16384)), w = m;
            do {
              var j = w;
              i = e.s.P(w) == 1.570796326794897 ? 0 : Math.cos(w);
              var M = (g = e.s.P(w) == 3.141592653589793 ? 0 : Math.sin(w)) * g;
              w = r * g * ((f = Math.cos(2 * c + w)) + b * (i * (2 * (w = f * f) - 1) - x * f * (4 * M - 3) * (4 * w - 3))) + m;
            } while (!e.s.Y(j, w));
            i = e.s.P(w) == 1.570796326794897 ? 0 : Math.cos(w), g = e.s.P(w) == 3.141592653589793 ? 0 : Math.sin(w), s != null && (u = Math.atan2(g * u, t * i - l * g * a), d = h / 16 * d * (4 + h * (4 - 3 * d)), f = Math.cos(2 * c + w), s.u = e.F.ba(n + (u - (1 - d) * h * p * (w + d * g * (f + d * i * (2 * f * f - 1)))))), o != null && (d = l * g - t * i * a, d = (1 - h) * Math.sqrt(y + d * d), o.u = Math.atan2(l * i + t * g * a, d));
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.PC = function() {
        function v() {
        }
        return v.tb = function(f, r, n, t, i, h, s, o, a) {
          var u = e.F.ba(i - n), c = e.s.Y(e.s.P(t), 1.570796326794897), l = e.s.Y(e.s.P(h), 1.570796326794897);
          if (e.s.Y(t, h) && (e.s.Cd(u) || c)) s != null && (s.u = 0), o != null && (o.u = 0), a != null && (a.u = 0);
          else {
            if (e.s.ti(r)) {
              var p = Math.sin(t), y = Math.sin(h);
              p = Math.sqrt((1 + p) / (1 - p)), y = Math.sqrt((1 + y) / (1 - y)), p = Math.log(y) - Math.log(p), p = Math.atan2(u, p), s != null && (s.u = e.s.Y(t, h) ? e.s.P(f * Math.cos(t) * u) : e.s.P((f * h - f * t) / Math.cos(p)));
            } else y = e.F.Qw(r, h), p = Math.sin(e.F.Qw(r, t)), y = Math.sin(y), p = Math.sqrt((1 + p) / (1 - p)), y = Math.sqrt((1 + y) / (1 - y)), p = Math.log(y) - Math.log(p), p = Math.atan2(u, p), s != null && (e.s.Y(t, h) ? s.u = e.s.P(f * u * Math.cos(t) / e.F.w(r, t)) : (u = e.F.q(f, r, t), f = e.F.q(f, r, h), s.u = e.s.P((f - u) / Math.cos(p))));
            o == null && a == null || (s = e.F.ba(p + 3.141592653589793), c && l || !c && !l || (c ? p = 0 > t ? i : e.F.ba(3.141592653589793 - i) : l && (s = 0 > h ? n : e.F.ba(3.141592653589793 - n))), o != null && (o.u = p), a != null && (a.u = s));
          }
        }, v.rf = function(f, r, n, t, i, h, s, o) {
          h = e.F.ba(h), 0 > i && (i = e.s.P(i), h = e.F.ba(h + 3.141592653589793)), e.s.ti(r) ? e.s.Y(e.s.P(t), 1.570796326794897) ? (n = 0 > t ? h : e.F.ba(3.141592653589793 - h), 3.141592653589793 >= (h = i / f % 6.283185307179586) ? f = t - e.s.Mb(h, t) : (n = e.F.ba(n + 3.141592653589793), f = -t + e.s.Mb(h - 3.141592653589793, t))) : e.s.Y(e.s.P(h), 1.570796326794897) ? (n = e.F.ba(n + e.s.Mb(i, h) / (f * Math.cos(t))), f = t) : (f = t + i * Math.cos(h) / f, 1.570796326794897 < e.s.P(f) && (f = 1.570796326794897), e.s.Y(e.s.P(f), 1.570796326794897) && (e.s.Cd(h) || e.s.Y(e.s.P(h), 3.141592653589793)) || (1.570796316258184 < e.s.P(f) && (f = e.s.Mb(1.570796316258184, f)), r = Math.sin(t), t = Math.sin(f), r = Math.sqrt((1 + r) / (1 - r)), t = Math.sqrt((1 + t) / (1 - t)), r = Math.log(t) - Math.log(r), n = e.F.ba(n + Math.tan(h) * r))) : e.s.Y(e.s.P(t), 1.570796326794897) ? (n = 0 > t ? h : e.F.ba(3.141592653589793 - h), h = i / e.F.qW(f, r), 3.141592653589793 >= (h %= 6.283185307179586) ? f = t - e.s.Mb(h, t) : (n = e.F.ba(n + 3.141592653589793), f = -t + e.s.Mb(h - 3.141592653589793, t)), f = e.F.Rq(r, f)) : e.s.Y(e.s.P(h), 1.570796326794897) ? (n = e.F.ba(n + e.s.Mb(i, h) * e.F.w(r, t) / (f * Math.cos(t))), f = t) : (f = 1.570796326794897 * (i * Math.cos(h) + e.F.q(f, r, t)) / e.F.Ah(f, r), 1.570796326794897 < e.s.P(f) && (f = e.s.Mb(1.570796326794897, f)), f = e.F.Rq(r, f), e.s.Y(e.s.P(f), 1.570796326794897) && (e.s.Cd(h) || e.s.Y(e.s.P(h), 3.141592653589793)) || (i = e.F.Qw(r, t), t = e.F.Qw(r, f), 1.570796316258184 < e.s.P(t) && (t = e.s.Mb(1.570796316258184, f), f = e.F.yO(r, t)), r = Math.sin(i), t = Math.sin(t), r = Math.sqrt((1 + r) / (1 - r)), t = Math.sqrt((1 + t) / (1 - t)), r = Math.log(t) - Math.log(r), n = e.F.ba(n + Math.tan(h) * r))), s != null && (s.u = n), o != null && (o.u = f);
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.kb = function() {
        function v() {
        }
        return v.Xy = function(f, r, n, t, i, h, s) {
          e.cu.tb(f, r, n, t, i, h, null, s, null);
        }, v.yi = function(f, r, n, t, i, h, s, o) {
          e.cu.rf(f, r, n, t, i, h, s, o);
        }, v.wd = function(f, r, n, t, i, h, s, o, a, u) {
          switch (u) {
            case 2:
              e.Wk.tb(f, r, n, t, i, h, s, o, a);
              break;
            case 3:
              e.QC.tb(f, r, n, t, i, h, s, o, a);
              break;
            case 1:
              e.PC.tb(f, r, n, t, i, h, s, o, a);
              break;
            default:
              e.cu.tb(f, r, n, t, i, h, s, o, a);
          }
        }, v.oj = function(f, r, n, t, i, h, s, o, a) {
          switch (a) {
            case 2:
              e.Wk.rf(f, r, n, t, i, h, s, o);
              break;
            case 3:
              e.QC.rf(f, r, n, t, i, h, s, o);
              break;
            case 1:
              e.PC.rf(f, r, n, t, i, h, s, o);
              break;
            default:
              e.cu.rf(f, r, n, t, i, h, s, o);
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function() {
        function r() {
          this.y = this.x = null;
        }
        return r.construct = function(n) {
          var t = new r();
          return t.x = new e.Wb(), t.x.set(n.x), t.y = new e.Wb(), t.y.set(n.y), t;
        }, r.VE = function(n, t) {
          var i = new r();
          return i.x = new e.Wb(), i.x.set(n), i.y = new e.Wb(), i.y.set(t), i;
        }, r.prototype.qg = function() {
          return this.x.qg() && this.y.qg();
        }, r.prototype.value = function() {
          return e.h.construct(this.x.value(), this.y.value());
        }, r;
      }();
      e.vY = v;
      var f = function() {
        function r() {
          this.z = this.y = this.x = null;
        }
        return r.construct = function(n) {
          var t = new r();
          return t.x = new e.Wb(), t.x.set(n.x), t.y = new e.Wb(), t.y.set(n.y), t.z = new e.Wb(), t.z.set(n.z), t;
        }, r.VE = function(n, t, i) {
          var h = new r();
          return h.x = new e.Wb(), h.x.set(n), h.y = new e.Wb(), h.y.set(t), h.z = new e.Wb(), h.z.set(i), h;
        }, r.prototype.qg = function() {
          return this.x.qg() && this.y.qg() && this.z.qg();
        }, r.prototype.value = function() {
          return new e.Nd(this.x.value(), this.y.value(), this.z.value());
        }, r.prototype.Qh = function(n) {
          var t = new e.Wb(), i = new e.Wb(), h = new e.Wb();
          return t.Kl(this.x, n.x), i.Kl(this.y, n.y), h.Kl(this.z, n.z), (n = new e.Wb()).dN(t, i), n.add(h), n;
        }, r.prototype.cF = function(n) {
          var t = new r();
          t.x.Kl(this.y, n.z), t.y.Kl(this.z, n.x), t.z.Kl(this.x, n.y);
          var i = new e.Wb(), h = new e.Wb(), s = new e.Wb();
          return i.Kl(this.z, n.y), h.Kl(this.x, n.z), s.Kl(this.y, n.x), t.x.sub(i), t.y.sub(h), t.z.sub(s), t;
        }, r;
      }();
      e.wY = f, e.Ox = function() {
        function r() {
        }
        return r.EP = function(n, t, i) {
          var h = t.x;
          t = t.y, r.cl(1, n, Math.cos(h), Math.sin(h), Math.cos(t), Math.sin(t), i);
        }, r.DP = function(n, t) {
          var i = new e.Nd();
          return r.EP(n, t, i), i;
        }, r.cl = function(n, t, i, h, s, o, a) {
          n /= Math.sqrt(1 - t * o * o), a.K(n * s * i, n * s * h, n * (1 - t) * o);
        }, r.Yu = function(n, t) {
          var i = new e.Wb(), h = new e.Wb(), s = new e.Wb(), o = new e.Wb();
          i.cos(t.x), h.sin(t.x), s.cos(t.y), o.sin(t.y);
          var a = new e.Wb();
          return a.set(o), a.Ag(o), a.No(n), a.No(-1), a.kN(), a.sqrt(), (t = new e.Wb()).set(1), t.jm(a), (a = new e.Wb()).set(t), a.Ag(s), a.Ag(i), (i = new e.Wb()).set(t), i.Ag(s), i.Ag(h), (h = new e.Wb()).set(t), h.No(1 - n), h.Ag(o), f.VE(a, i, h);
        }, r.SS = function(n, t, i, h) {
          if (Math.abs(t.x - i.x) > Math.PI || Math.abs(t.y) > 0.5 * Math.PI || Math.abs(i.y) > 0.5 * Math.PI || (Math.abs(t.y) == 0.5 * Math.PI || Math.abs(i.y) == 0.5 * Math.PI) && t.x != i.x) return NaN;
          if (h = r.cB(h, Math.min(t.x, i.x), Math.max(t.x, i.x)), !new e.Nc(t.x, i.x).contains(h)) return NaN;
          var s = v.construct(t);
          if (i = v.construct(i), s = r.Yu(n, s), i = r.Yu(n, i), (i = s.cF(i)).z.qg()) return t.y;
          var o = new e.Wb();
          o.set(i.x), o.jm(i.z), o.No(-1);
          var a = new e.Wb();
          a.set(i.y), a.jm(i.z), a.No(-1);
          var u = new e.Wb();
          return u.set(a), u.Ag(a), (s = new e.Wb()).set(o), s.Ag(o), s.add(u), s.sqrt(), s.qg() || o.qg() && a.qg() ? t.y : (t = Math.atan2(a.value(), o.value()), t = Math.atan2(s.value() * Math.cos(t - h), 1 - n), h = r.DP(n, e.h.construct(h, t)), n = new e.Nd(h.x, h.y, -h.z), h = i.value().Qh(h), n = i.value().Qh(n), Math.abs(n) < Math.abs(h) && (t = -t), t);
        }, r.Oz = function(n, t, i, h, s) {
          if (s[0] = NaN, s[1] = NaN, Math.abs(t.x - i.x) > Math.PI || Math.abs(t.y) > 0.5 * Math.PI || Math.abs(i.y) > 0.5 * Math.PI || (Math.abs(t.y) == 0.5 * Math.PI || Math.abs(i.y) == 0.5 * Math.PI) && t.x != i.x || Math.abs(h) >= 0.5 * Math.PI || 0 < t.y && 0 < i.y && t.y > h && i.y > h || 0 > t.y && 0 > i.y && t.y < h && i.y < h) return 0;
          var o = v.construct(t), a = v.construct(i);
          o = r.Yu(n, o), a = r.Yu(n, a);
          var u = o.cF(a);
          if (u.z.qg()) return new e.Nc(t.y, i.y).contains(h) ? (s[0] = t.x, 1) : 0;
          (a = new e.Wb()).set(u.x), a.jm(u.z), a.No(-1), (o = new e.Wb()).set(u.y), o.jm(u.z), o.No(-1), (u = new e.Wb()).set(o), u.Ag(o);
          var c = new e.Wb();
          return c.set(a), c.Ag(a), c.add(u), c.sqrt(), c.qg() || a.qg() && o.qg() ? h == 0 ? (s[0] = t.x, s[1] = i.x, 2) : 0 : (n = (1 - n) * Math.tan(h) / c.value(), 1 < Math.abs(n) ? 0 : (n = Math.acos(n), u = Math.atan2(o.value(), a.value()), a = Math.min(t.x, i.x), o = Math.max(t.x, i.x), i = r.cB(u - n, a, o), n = h != 0 ? r.cB(u + n, a, o) : i, h = 0, a <= i && i <= o && (s[h] = i, h++), n != i && a <= n && n <= o && (s[h] = n, ++h == 2 && Math.abs(s[0] - t.x) > Math.abs(s[1] - t.x) && (t = s[0], s[0] = s[1], s[1] = t)), h));
        }, r.cB = function(n, t, i) {
          return n > i ? n -= 2 * (t = Math.ceil((n - i) / (2 * Math.PI))) * Math.PI : n < t && (n += 2 * (t = Math.ceil((t - n) / (2 * Math.PI))) * Math.PI), n;
        }, r;
      }();
    }(k || (k = {})), function(e) {
      e.XK = function() {
        function v() {
        }
        return v.$X = function(f, r) {
          var n = 8, t = [0, 0, 0, 0], i = new e.h();
          i.L(r), i.scale(e.cb.sc(f).Hd().Ec() == 9102 ? 1 : e.cb.sc(f).Hd().ai / 3.141592653589793 * 180), -180 > i.x ? (i.x -= i.x % 360, -180 > i.x && (i.x += 360)) : 180 < i.x && (i.x -= i.x % 360, 180 < i.x && (i.x -= 360)), 90 < i.y && (i.y = 90), -90 > i.y && (i.y = -90);
          for (var h = -180, s = 180, o = (f = 5 * n) - 1, a = (r = (f + 31) / 32) - 1; 0 <= a; a--) for (var u = o - 32 * a, c = Math.min(32, f - 32 * a), l = 1; l < c; l += 2) {
            var p = 0.5 * (s + h);
            i.x >= p ? (t[a] |= 1 << u, h = p) : s = p, u -= 2, o -= 2;
          }
          for (h = -90, s = 90, o = f - 2, a = r - 1; 0 <= a; a--) for (u = o - 32 * a, c = Math.min(32, f - 32 * a), l = 0; l < c; l += 2) p = 0.5 * (s + h), i.y >= p ? (t[a] |= 1 << u, h = p) : s = p, u -= 2, o -= 2;
          return v.$P(t, n, n);
        }, v.$P = function(f, r, n) {
          for (var t = [], i = 0; i < r; i++) t[i] = "";
          for (var h = i = 0, s = 0; s < r; s++) {
            var o = f[i] >> h & 31;
            if (31 < (h += 5)) {
              var a = 37 - h;
              o &= (1 << a) - 1, h -= 32, o |= (f[++i] & (1 << h) - 1) << a;
            }
            t[r - 1 - s] = "0123456789bcdefghjkmnpqrstuvwxyz".split("")[o];
          }
          if (n > r) for (s = 0; s < n - r; s++) t.push("0");
          else n < r && (t.length = n);
          return t.join("");
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = { gcstol: [0, 2e-9, 1, 2241706620489156e-24, 2, 2313672246530541e-24, 3, 898240164660333e-23, 4, 8982433838020134e-24, 5, 8982439417325895e-24, 6, 8982466029667677e-24, 7, 8982476760268133e-24, 8, 8982492642167149e-24, 9, 898251968292634e-23, 10, 898253685210448e-23, 11, 8982546725256576e-24, 12, 8982557456049832e-24, 13, 898257333682596e-23, 14, 8982575482995276e-24, 15, 8982578488197342e-24, 16, 8982579775336987e-24, 17, 89825840676828e-22, 18, 8982599090925448e-24, 19, 8982605529473397e-24, 20, 8982609220517402e-24, 21, 8982611968030573e-24, 22, 8982616260407152e-24, 23, 8982620552787834e-24, 24, 8982633429954492e-24, 25, 8982637722351582e-24, 26, 898264416095491e-23, 27, 8982646307158072e-24, 28, 8982654891980968e-24, 29, 8982667769246082e-24, 30, 8982674207892485e-24, 31, 8982680646548117e-24, 32, 8982682792768713e-24, 33, 8982685798042582e-24, 34, 8982689231436652e-24, 35, 898269137766135e-23, 36, 898269266624163e-23, 37, 8982705114087017e-24, 38, 8982706830791106e-24, 39, 8982711958374661e-24, 40, 8982712839964735e-24, 41, 8982717991496125e-24, 42, 8982721424914803e-24, 43, 8982723571154887e-24, 44, 8982727863638127e-24, 45, 8982730868942154e-24, 46, 8982734302370678e-24, 47, 8982745033612112e-24, 48, 8982751472369276e-24, 49, 8982755764879183e-24, 50, 8982762203651733e-24, 51, 8982764776628385e-24, 52, 8982766496171896e-24, 53, 898277722749025e-23, 54, 898278152002477e-23, 55, 898279933943848e-23, 56, 89829143024805e-22, 57, 8982922161948598e-24, 58, 898292327314211e-23, 59, 8982925667349601e-24, 60, 8982932222965576e-24, 61, 8982961298941316e-24, 62, 8982965524049989e-24, 63, 8982994818246099e-24, 64, 8982994895706967e-24, 65, 898299489597736e-23, 66, 8983000733443498e-24, 67, 8983055097289157e-24, 68, 8983064111047368e-24, 69, 8983111996941178e-24, 70, 8983120447446023e-24, 71, 898312748954554e-23, 72, 8983134531656096e-24, 73, 8983141573777694e-24, 74, 8983148615910332e-24, 75, 8983152841195215e-24, 76, 8983153545409748e-24, 77, 8983153827095593e-24, 78, 898315396793852e-23, 79, 8983154249624393e-24, 80, 8983155658054012e-24, 81, 8983960794340072e-24, 82, 8984061344391998e-24, 83, 8984072829255685e-24, 84, 8984194981201908e-24, 85, 8984275233099427e-24, 86, 8984326127007554e-24, 87, 8984330099816539e-24, 88, 898433275258421e-23, 89, 8984333047023206e-24, 90, 8984333885258723e-24, 91, 8984337959508212e-24, 92, 8984365176209457e-24, 93, 8984727360418079e-24, 94, 8984901041679577e-24, 95, 898542662091587e-23, 96, 898610024130669e-23, 97, 8992894229037531e-24, 98, 8993203677616635e-24, 99, 8993206178094346e-24, 100, 8993216059187305e-24, 101, 899322029394808e-23, 102, 8994627867045891e-24, 103, 9467559984315793e-24, 104, 946881168618118e-23, 105, 9980888154931644e-24, 106, 9981105353606775e-24, 107, 9983807356573187e-24, 108, 1687060485811522e-23, 109, 1688447560354875e-23, 110, 2176606011487185e-23, 111, 2225078816042032e-23, 112, 2348476432064694e-23, 113, 2348765250187846e-23, 114, 2378108974103778e-23, 115, 314559636297708e-22, 116, 3297788621680806e-23, 117, 3667892343788279e-23, 118, 4235973644320739e-23, 119, 4794625900676345e-23, 120, 7262742998235812e-23, 121, 7499447580246377e-23, 122, 7525056410964318e-23, 123, 7979913581209237e-23, 124, 9662020153976783e-23, 125, 9799175562353741e-23, 126, 9897353517547472e-23, 127, 102313891987647e-21, 128, 1081460541960784e-22, 129, 121905913857622e-21, 130, 2246893314238523e-22, 131, 2297344808062643e-22, 132, 242984645941825e-21, 133, 2754604784282804e-22, 134, 2884548130346993e-22, 135, 3370339971357784e-22, 136, 4307953346848296e-22, 137, 5208707228462029e-22, 138, 5509209568565608e-22, 139, 6452227422644406e-22, 140, 6740679942715567e-22, 141, 6861770001566745e-22, 142, 7252630318111686e-22, 143, 7441010326374328e-22, 144, 7742672907173287e-22, 145, 9629542775307953e-22, 146, 1061032953945969e-21, 147, 1143628333594458e-21, 148, 1162186197019925e-21, 149, 136418522650196e-20, 150, 1367441038498385e-21, 151, 1432394487827058e-21, 152, 1736235742820677e-21, 153, 1848250952034914e-21, 154, 1909859317102744e-21, 155, 1975716534933873e-21, 156, 2122065907891938e-21, 157, 272837045300392e-20, 158, 3183098861837907e-21, 159, 3580986219567645e-21, 160, 3819718634205488e-21, 161, 409255567950588e-20, 162, 4407367654852486e-21, 163, 4774648292756861e-21, 164, 5161781938115525e-21, 165, 520870722846203e-20, 166, 5729577951308232e-21, 167, 6031134685587613e-21, 168, 6987290184522236e-21, 169, 9241254760174569e-21, 170, 1145915590261646e-20], pcstol: [0, 6666666666666667e-24, 1, 2e-8, 2, 4970973863636364e-20, 3, 4970978156565657e-20, 4, 4970980410559237e-20, 5, 1e-3, 6, 0.001093615055555556, 7, 0.001093615194444445, 8, 0.001093619003239988, 9, 0.001093623110088878, 10, 0.003280833333333333, 11, 0.003280839895013123, 12, 0.003280843014596366, 13, 0.003280845583333334, 14, 0.003280869330266636, 15, 0.00497101413676763], newtoold: [2154, 102110, 2195, 102200, 2204, 32036, 2205, 26979, 2225, 102641, 2226, 102642, 2227, 102643, 2228, 102644, 2229, 102645, 2230, 102646, 2231, 102653, 2232, 102654, 2233, 102655, 2234, 102656, 2235, 102657, 2236, 102658, 2237, 102659, 2238, 102660, 2239, 102666, 2240, 102667, 2241, 102668, 2242, 102669, 2243, 102670, 2246, 102679, 2247, 102680, 2248, 102685, 2249, 102686, 2250, 102687, 2254, 102694, 2255, 102695, 2257, 102712, 2258, 102713, 2259, 102714, 2260, 102715, 2261, 102716, 2262, 102717, 2263, 102718, 2264, 102719, 2267, 102724, 2268, 102725, 2271, 102728, 2272, 102729, 2274, 102736, 2275, 102737, 2276, 102738, 2277, 102739, 2278, 102740, 2279, 102741, 2283, 102746, 2284, 102747, 2285, 102748, 2286, 102749, 2287, 102752, 2288, 102753, 2289, 102754, 2312, 23433, 2326, 102140, 2395, 2091, 2396, 2092, 2397, 2166, 2398, 2167, 2399, 2168, 2759, 102229, 2760, 102230, 2761, 102248, 2762, 102249, 2763, 102250, 2764, 102251, 2765, 102252, 2766, 102241, 2767, 102242, 2768, 102243, 2769, 102244, 2770, 102245, 2771, 102246, 2772, 102253, 2773, 102254, 2774, 102255, 2775, 102256, 2776, 102257, 2777, 102258, 2778, 102259, 2779, 102260, 2780, 102266, 2781, 102267, 2782, 102261, 2783, 102262, 2784, 102263, 2785, 102264, 2786, 102265, 2787, 102268, 2788, 102269, 2789, 102270, 2790, 102271, 2791, 102272, 2792, 102273, 2793, 102274, 2794, 102275, 2795, 102276, 2796, 102277, 2797, 102278, 2798, 102279, 2799, 102280, 2800, 102281, 2801, 102282, 2802, 102283, 2803, 102284, 2804, 102285, 2805, 102286, 2806, 102287, 2807, 102288, 2808, 102289, 2809, 102290, 2810, 102291, 2811, 102292, 2812, 102293, 2813, 102294, 2814, 102295, 2815, 102296, 2816, 102297, 2817, 102298, 2818, 102300, 2819, 102304, 2820, 102307, 2821, 102308, 2822, 102309, 2823, 102310, 2824, 102311, 2825, 102312, 2826, 102313, 2827, 102314, 2828, 102315, 2829, 102316, 2830, 102317, 2831, 102318, 2832, 102320, 2833, 102321, 2834, 102322, 2835, 102323, 2836, 102324, 2837, 102325, 2838, 102326, 2839, 102327, 2840, 102330, 2841, 102334, 2842, 102335, 2843, 102336, 2844, 102337, 2845, 102338, 2846, 102339, 2847, 102340, 2848, 102341, 2849, 102342, 2850, 102343, 2851, 102344, 2852, 102345, 2853, 102346, 2854, 102347, 2855, 102348, 2856, 102349, 2857, 102350, 2858, 102351, 2859, 102352, 2860, 102353, 2861, 102354, 2862, 102355, 2863, 102356, 2864, 102357, 2865, 102358, 2866, 102361, 2942, 102167, 2943, 102169, 2944, 2139, 2945, 2140, 2946, 2141, 2947, 2142, 2948, 2143, 2949, 2144, 2950, 2145, 2951, 2146, 2952, 2147, 2953, 2036, 2954, 2291, 2955, 2153, 2956, 2152, 2957, 2151, 2958, 2150, 2959, 2149, 2960, 2037, 2961, 2038, 2962, 2148, 2965, 2244, 2966, 2245, 3003, 102091, 3004, 102092, 3005, 102190, 3060, 2982, 3067, 102139, 3072, 102606, 3074, 102608, 3075, 102208, 3077, 102210, 3078, 102123, 3080, 102119, 3081, 102603, 3082, 102602, 3083, 102601, 3088, 65163, 3089, 102763, 3090, 102363, 3092, 102151, 3093, 102152, 3094, 102153, 3095, 102154, 3096, 102155, 3097, 102145, 3098, 102146, 3099, 102147, 3100, 102148, 3101, 102149, 3102, 2155, 3107, 102172, 3110, 102170, 3111, 102171, 3119, 2214, 3158, 102234, 3159, 102235, 3160, 102236, 3336, 2979, 3338, 102006, 3346, 2600, 3370, 102126, 3371, 102127, 3372, 102130, 3373, 102131, 3389, 2577, 3390, 2694, 3400, 102184, 3401, 102185, 3404, 3359, 3407, 3366, 3417, 102675, 3418, 102676, 3419, 102677, 3420, 102678, 3421, 102707, 3422, 102708, 3423, 102709, 3424, 102711, 3433, 102651, 3434, 102652, 3435, 102671, 3436, 102672, 3437, 102710, 3438, 102730, 3448, 102095, 3451, 102681, 3452, 102682, 3455, 102735, 3461, 2063, 3462, 2064, 3463, 3073, 3464, 3076, 3560, 102742, 3566, 102743, 3567, 102744, 3734, 102722, 3735, 102723, 3736, 102755, 3737, 102756, 3738, 102757, 3739, 102758, 3741, 102205, 3742, 102206, 3743, 102207, 3748, 102211, 3750, 102202, 3751, 102203, 3759, 102663, 3760, 102463, 3764, 102112, 3770, 102090, 3771, 102180, 3772, 102181, 3773, 102182, 3775, 102186, 3776, 102187, 3777, 102188, 3800, 102183, 3801, 102189, 3812, 102199, 3814, 102609, 3815, 102469, 3819, 104990, 3821, 104136, 3824, 104137, 3825, 102444, 3826, 102443, 3827, 102442, 3828, 102441, 3857, 102100, 3889, 104991, 3906, 104992, 4048, 103201, 4049, 103202, 4050, 103203, 4051, 103204, 4056, 103205, 4057, 103206, 4058, 103207, 4059, 103208, 4060, 103209, 4061, 103210, 4062, 103211, 4063, 103212, 4071, 103213, 4082, 103214, 4083, 103215, 4093, 103216, 4094, 103217, 4095, 103218, 4096, 103219, 4167, 104108, 4169, 37252, 4171, 104107, 4189, 104110, 4197, 4234, 4223, 37223, 4304, 104304, 4414, 102201, 4415, 102762, 4417, 102764, 4434, 102765, 4437, 102647, 4455, 32029, 4456, 32018, 4457, 3454, 4462, 102439, 4463, 4466, 4470, 4469, 4484, 103794, 4485, 103795, 4486, 103796, 4487, 103797, 4488, 103798, 4489, 103799, 4611, 104104, 4612, 104111, 4613, 37255, 4615, 37247, 4616, 37250, 4617, 4140, 4618, 4291, 4620, 37211, 4626, 37235, 4647, 102362, 4658, 37204, 4668, 37201, 4669, 4126, 4672, 37217, 4673, 104125, 4675, 37220, 4684, 37232, 4698, 4631, 4707, 37213, 4708, 37231, 4709, 37212, 4710, 37238, 4711, 37214, 4712, 37237, 4713, 37208, 4714, 37215, 4715, 37253, 4716, 37216, 4717, 37239, 4719, 37219, 4722, 37242, 4724, 37233, 4725, 37222, 4727, 37224, 4728, 37246, 4729, 37226, 4730, 37227, 4731, 37228, 4732, 37229, 4733, 37230, 4734, 37251, 4735, 37259, 4736, 37254, 4739, 37205, 4758, 104133, 4760, 37001, 4762, 104114, 4826, 102214, 5013, 104142, 5014, 102331, 5015, 102332, 5016, 102333, 5173, 102085, 5174, 102086, 5175, 102087, 5176, 102088, 5177, 102089, 5178, 102040, 5179, 102080, 5185, 102081, 5186, 102082, 5187, 102083, 5188, 102084, 5221, 102066, 5246, 104100, 5247, 102490, 5324, 104144, 5325, 102420, 5329, 2934, 5365, 104143, 5367, 102305, 5451, 104132, 5513, 102065, 5514, 102067, 5519, 102111, 5520, 31461, 5646, 102745, 5839, 5388, 5858, 5532, 5879, 4474, 6207, 104256, 6244, 102769, 6245, 102790, 6246, 102770, 6247, 102771, 6248, 102793, 6249, 102796, 6250, 102772, 6251, 102788, 6252, 102775, 6253, 102795, 6254, 102781, 6255, 102767, 6256, 102774, 6257, 102768, 6258, 102797, 6259, 102789, 6260, 102780, 6261, 102783, 6262, 102787, 6263, 102791, 6264, 102777, 6265, 102798, 6266, 102779, 6267, 102784, 6268, 102792, 6269, 102782, 6270, 102785, 6271, 102794, 6272, 102773, 6273, 102778, 6274, 102786, 6275, 102776, 6311, 104141, 6318, 104145, 6322, 104287, 6325, 104286, 6328, 102046, 6329, 102047, 6330, 102048, 6331, 102049, 6332, 102050, 6333, 102051, 6334, 102052, 6335, 102053, 6336, 102054, 6337, 102055, 6338, 102056, 6339, 102057, 6340, 102058, 6341, 102059, 6342, 102382, 6343, 102383, 6344, 102384, 6345, 102385, 6346, 102386, 6347, 102387, 6348, 102388, 6350, 102965, 6355, 102975, 6356, 102976, 6391, 6141, 6393, 102966, 6394, 102977, 6395, 102978, 6396, 102979, 6397, 102980, 6398, 102981, 6399, 102982, 6400, 102983, 6401, 102984, 6402, 102985, 6403, 102986, 6404, 102988, 6405, 102991, 6406, 102987, 6407, 102990, 6408, 102989, 6409, 102992, 6410, 102993, 6411, 102995, 6412, 102994, 6413, 102996, 6414, 102962, 6415, 102997, 6416, 103003, 6417, 102998, 6418, 103004, 6419, 102999, 6420, 103005, 6421, 103e3, 6422, 103006, 6423, 103001, 6424, 103007, 6425, 103002, 6426, 103008, 6427, 103010, 6428, 103013, 6429, 103009, 6430, 103012, 6431, 103011, 6432, 103014, 6433, 103015, 6434, 103016, 6435, 103017, 6436, 103018, 6437, 103019, 6438, 103022, 6439, 102967, 6440, 103021, 6441, 103024, 6442, 103020, 6443, 103023, 6444, 103025, 6445, 103027, 6446, 103026, 6447, 103028, 6448, 103030, 6449, 103033, 6450, 103029, 6451, 103032, 6452, 103031, 6453, 103034, 6454, 103035, 6455, 103037, 6456, 103036, 6457, 103038, 6458, 103039, 6459, 103041, 6460, 103040, 6461, 103042, 6462, 103043, 6463, 103045, 6464, 103044, 6465, 103046, 6466, 103047, 6467, 103049, 6468, 103048, 6469, 103050, 6470, 103051, 6471, 103052, 6472, 103053, 6473, 103054, 6474, 103055, 6475, 103056, 6476, 103057, 6477, 103059, 6478, 103058, 6479, 103060, 6480, 103066, 6481, 103065, 6482, 103067, 6483, 103061, 6484, 103063, 6485, 103062, 6486, 103064, 6487, 103068, 6488, 103069, 6489, 103071, 6490, 103073, 6491, 103070, 6492, 103072, 6493, 103075, 6494, 103078, 6495, 103074, 6496, 103077, 6497, 102968, 6498, 103076, 6499, 103079, 6500, 103081, 6501, 103084, 6502, 103080, 6503, 103083, 6504, 103082, 6505, 103085, 6506, 103086, 6507, 103088, 6508, 102963, 6509, 103087, 6510, 103089, 6511, 103091, 6512, 103090, 6513, 103092, 6514, 103093, 6515, 103094, 6516, 103095, 6518, 103098, 6519, 103101, 6520, 103097, 6521, 103100, 6522, 103099, 6523, 103102, 6524, 103103, 6525, 103104, 6526, 103105, 6527, 103106, 6528, 103108, 6529, 103111, 6530, 103107, 6531, 103110, 6532, 103109, 6533, 103112, 6534, 103114, 6535, 103118, 6536, 103113, 6537, 103117, 6538, 103116, 6539, 103120, 6540, 103115, 6541, 103119, 6542, 103121, 6543, 103122, 6544, 103123, 6545, 103125, 6546, 103124, 6547, 103126, 6548, 103127, 6549, 103129, 6550, 103128, 6551, 103130, 6552, 103131, 6553, 103133, 6554, 103132, 6555, 103134, 6556, 102969, 6557, 102970, 6558, 103135, 6559, 103137, 6560, 103136, 6561, 103138, 6562, 103139, 6563, 103140, 6564, 103141, 6565, 103142, 6566, 103200, 6567, 103143, 6568, 103144, 6569, 103145, 6570, 103146, 6571, 103147, 6572, 103149, 6573, 103148, 6574, 103150, 6575, 103151, 6576, 103152, 6577, 103155, 6578, 103160, 6579, 102971, 6580, 102972, 6581, 103153, 6582, 103158, 6583, 103154, 6584, 103159, 6585, 103157, 6586, 103162, 6587, 103156, 6588, 103161, 6589, 103172, 6590, 103173, 6592, 103174, 6593, 103176, 6594, 103175, 6595, 103177, 6596, 103178, 6597, 103180, 6598, 103179, 6599, 103181, 6600, 103182, 6601, 103184, 6602, 103183, 6603, 103185, 6605, 103190, 6606, 103186, 6607, 103189, 6608, 103188, 6609, 103191, 6610, 102973, 6611, 103192, 6612, 103196, 6613, 103193, 6614, 103197, 6615, 103195, 6616, 103199, 6617, 103194, 6618, 103198, 6619, 103164, 6620, 103163, 6621, 103165, 6625, 103170, 6626, 103169, 6627, 103171, 6628, 102520, 6629, 102521, 6630, 102522, 6631, 102523, 6632, 102524, 6633, 102527, 6634, 102493, 6635, 102494, 6636, 102496, 6637, 102495, 6668, 104020, 6669, 102610, 6670, 102611, 6671, 102612, 6672, 102613, 6673, 102614, 6674, 102615, 6675, 102616, 6676, 102617, 6677, 102618, 6678, 102619, 6679, 102620, 6680, 102621, 6681, 102622, 6682, 102623, 6683, 102624, 6684, 102625, 6685, 102626, 6686, 102627, 6687, 102628, 6688, 102593, 6689, 102594, 6690, 102595, 6691, 102596, 6692, 102597, 6783, 104223, 6784, 102530, 6785, 102500, 6788, 102532, 6789, 102502, 6792, 102533, 6793, 102503, 6796, 102531, 6797, 102501, 6800, 102534, 6801, 102504, 6804, 102535, 6805, 102505, 6808, 102536, 6809, 102506, 6812, 102537, 6813, 102507, 6816, 102538, 6817, 102508, 6820, 102539, 6821, 102509, 6824, 102540, 6825, 102510, 6828, 102541, 6829, 102511, 6832, 102542, 6833, 102512, 6836, 102543, 6837, 102513, 6840, 102544, 6841, 102514, 6844, 102546, 6845, 102516, 6848, 102545, 6849, 102515, 6852, 102547, 6853, 102517, 6856, 102548, 6857, 102518, 6860, 102549, 6861, 102519, 6867, 102380, 6868, 102381, 6879, 103187, 6880, 103096, 6884, 102376, 6885, 102378, 6886, 102377, 6887, 102379, 7136, 6980, 7139, 6987, 7142, 102706, 7692, 102557, 7693, 102558, 7694, 102559, 7695, 102560, 7696, 102561, 8090, 103318, 8091, 103418, 8092, 103317, 8093, 103417, 8095, 103371, 8096, 103471, 8097, 103369, 8098, 103469, 8099, 103368, 8100, 103468, 8101, 103367, 8102, 103467, 8103, 103366, 8104, 103466, 8105, 103365, 8106, 103465, 8107, 103364, 8108, 103464, 8109, 103363, 8110, 103463, 8111, 103362, 8112, 103462, 8113, 103361, 8114, 103461, 8115, 103360, 8116, 103460, 8117, 103359, 8118, 103459, 8119, 103357, 8120, 103457, 8121, 103356, 8122, 103456, 8123, 103355, 8124, 103455, 8125, 103354, 8126, 103454, 8127, 103353, 8128, 103453, 8129, 103352, 8130, 103452, 8131, 103350, 8132, 103450, 8133, 103349, 8134, 103449, 8135, 103348, 8136, 103448, 8139, 103343, 8140, 103443, 8141, 103342, 8142, 103442, 8143, 103341, 8144, 103441, 8145, 103339, 8146, 103439, 8147, 103337, 8148, 103437, 8149, 103336, 8150, 103436, 8151, 103334, 8152, 103434, 8153, 103333, 8154, 103433, 8155, 103331, 8156, 103431, 8161, 103326, 8162, 103426, 8163, 103325, 8164, 103425, 8165, 103324, 8166, 103424, 8171, 103321, 8172, 103421, 8173, 103320, 8177, 103420, 8179, 103316, 8180, 103416, 8181, 103315, 8182, 103415, 8184, 103314, 8185, 103414, 8191, 103312, 8193, 103412, 8196, 103311, 8197, 103411, 8198, 103310, 8200, 103410, 8201, 103309, 8202, 103409, 8203, 103308, 8204, 103408, 8207, 103306, 8208, 103406, 8209, 103305, 8210, 103405, 8212, 103304, 8213, 103404, 8214, 103303, 8216, 103403, 8218, 103302, 8220, 103402, 8222, 103301, 8224, 103401, 8431, 104248, 8441, 102590, 8693, 102449, 8826, 102605, 8857, 54035, 8858, 54036, 8859, 54037, 8860, 8449, 8988, 104115, 8989, 104116, 8990, 104117, 8991, 104118, 8992, 104119, 8993, 104120, 8994, 104121, 8995, 104122, 8996, 104123, 8997, 104124, 8998, 104896, 8999, 104257, 9e3, 104019, 9014, 104010, 9019, 104021, 9053, 104011, 9054, 104012, 9055, 104013, 9056, 104014, 9057, 104015, 9059, 104258, 9060, 104179, 9061, 104180, 9062, 104181, 9063, 104182, 9064, 104183, 9065, 104184, 9066, 104185, 9067, 104186, 21896, 21891, 21897, 21892, 21898, 21893, 21899, 21894, 26701, 102124, 26702, 102125, 26799, 26747, 26847, 102683, 26848, 102684, 26849, 102691, 26850, 102692, 26851, 102693, 26852, 102704, 26853, 102750, 26854, 102751, 26857, 102466, 26858, 102467, 26859, 102468, 26901, 102128, 26902, 102129, 27493, 27492, 29101, 29100, 29168, 29118, 29169, 29119, 29170, 29120, 29171, 29121, 29172, 29122, 29187, 29177, 29188, 29178, 29189, 29179, 29190, 29180, 29191, 29181, 29192, 29182, 29193, 29183, 29194, 29184, 29195, 29185, 29902, 29900, 31279, 31278, 31281, 31291, 31282, 31292, 31283, 31293, 31284, 31294, 31285, 31295, 31286, 31296, 31287, 31297, 31466, 31462, 31467, 31463, 31468, 31464, 31469, 31465, 31986, 31917, 31987, 31918, 31988, 31919, 31989, 31920, 31990, 31921, 31991, 31922, 32064, 32074, 32065, 32075, 32066, 32076, 32067, 32077, 102550, 2181, 102551, 2182, 102552, 2183, 102553, 2184, 102554, 2185, 102555, 2186, 102556, 2187], pcsid: [2066, 15, 2136, 12, 2155, 10, 2157, 5, 2158, 5, 2159, 12, 2160, 12, 2219, 5, 2220, 5, 2244, 10, 2245, 10, 2256, 11, 2265, 11, 2266, 11, 2269, 11, 2270, 11, 2273, 11, 2290, 5, 2291, 5, 2294, 5, 2295, 5, 2313, 5, 2314, 14, 2899, 10, 2900, 10, 2901, 11, 2909, 11, 2910, 11, 2911, 10, 2912, 10, 2913, 11, 2914, 11, 2964, 10, 2967, 10, 2968, 10, 2991, 5, 2992, 11, 2993, 5, 2994, 11, 3073, 5, 3076, 5, 3079, 5, 3091, 10, 3106, 5, 3108, 5, 3109, 5, 3141, 5, 3142, 5, 3167, 4, 3337, 5, 3347, 5, 3348, 5, 3359, 10, 3360, 5, 3361, 11, 3362, 5, 3363, 10, 3364, 5, 3365, 10, 3366, 14, 3402, 5, 3403, 5, 3405, 5, 3406, 5, 3439, 5, 3440, 5, 3447, 5, 3449, 5, 3450, 5, 3453, 10, 3454, 10, 3460, 5, 3479, 11, 3480, 5, 3481, 11, 3482, 5, 3483, 11, 3484, 5, 3485, 10, 3486, 5, 3487, 10, 3488, 5, 3489, 5, 3490, 10, 3491, 5, 3492, 10, 3493, 5, 3494, 10, 3495, 5, 3496, 10, 3497, 5, 3498, 10, 3499, 5, 3500, 10, 3501, 5, 3502, 10, 3503, 5, 3504, 10, 3505, 5, 3506, 10, 3507, 5, 3508, 10, 3509, 5, 3510, 10, 3511, 5, 3512, 10, 3513, 5, 3514, 5, 3515, 10, 3516, 5, 3517, 10, 3518, 5, 3519, 10, 3520, 5, 3521, 10, 3522, 5, 3523, 10, 3524, 5, 3525, 10, 3526, 5, 3527, 10, 3528, 5, 3529, 10, 3530, 5, 3531, 10, 3532, 5, 3533, 10, 3534, 5, 3535, 10, 3536, 5, 3537, 10, 3538, 5, 3539, 10, 3540, 5, 3541, 10, 3542, 5, 3543, 10, 3544, 5, 3545, 10, 3546, 5, 3547, 10, 3548, 5, 3549, 10, 3550, 5, 3551, 10, 3552, 5, 3553, 10, 3582, 10, 3583, 5, 3584, 10, 3585, 5, 3586, 10, 3587, 5, 3588, 11, 3589, 5, 3590, 11, 3591, 5, 3592, 5, 3593, 11, 3598, 10, 3599, 5, 3600, 10, 3605, 11, 3606, 5, 3607, 5, 3608, 10, 3609, 5, 3610, 10, 3611, 5, 3612, 10, 3613, 5, 3614, 10, 3615, 5, 3616, 10, 3617, 5, 3618, 10, 3619, 5, 3620, 10, 3621, 5, 3622, 10, 3623, 5, 3624, 10, 3625, 5, 3626, 10, 3627, 5, 3628, 10, 3629, 5, 3630, 10, 3631, 5, 3632, 10, 3633, 5, 3634, 11, 3635, 5, 3636, 11, 3640, 10, 3641, 5, 3642, 10, 3643, 5, 3644, 11, 3645, 5, 3646, 11, 3647, 5, 3648, 11, 3649, 5, 3650, 10, 3651, 5, 3652, 10, 3653, 5, 3654, 10, 3655, 5, 3656, 11, 3657, 5, 3658, 10, 3659, 5, 3660, 10, 3661, 5, 3662, 10, 3663, 5, 3664, 10, 3668, 10, 3669, 5, 3670, 10, 3671, 5, 3672, 10, 3673, 5, 3674, 10, 3675, 5, 3676, 11, 3677, 10, 3678, 5, 3679, 11, 3680, 10, 3681, 5, 3682, 11, 3683, 10, 3684, 5, 3685, 5, 3686, 10, 3687, 5, 3688, 10, 3689, 5, 3690, 10, 3691, 5, 3692, 10, 3696, 10, 3697, 5, 3698, 10, 3699, 5, 3700, 10, 3740, 5, 3749, 5, 3783, 5, 3784, 5, 3793, 5, 3794, 5, 3802, 5, 3816, 5, 3829, 5, 3854, 5, 3911, 5, 3912, 5, 3920, 5, 3978, 5, 3979, 5, 3991, 10, 3992, 10, 4026, 5, 4037, 5, 4038, 5, 4087, 5, 4088, 5, 4217, 10, 4438, 10, 4439, 10, 4467, 5, 4471, 5, 4474, 5, 4559, 5, 4822, 5, 4839, 5, 5018, 5, 5048, 5, 5167, 5, 5168, 5, 5223, 5, 5234, 5, 5235, 5, 5243, 5, 5266, 5, 5316, 5, 5320, 5, 5321, 5, 5330, 5, 5331, 5, 5337, 5, 5361, 5, 5362, 5, 5382, 5, 5383, 5, 5396, 5, 5456, 5, 5457, 5, 5469, 5, 5472, 9, 5490, 5, 5518, 5, 5523, 5, 5559, 5, 5588, 11, 5589, 14, 5596, 5, 5627, 5, 5629, 5, 5641, 5, 5643, 5, 5644, 5, 5654, 10, 5655, 10, 5659, 5, 5700, 5, 5825, 5, 5836, 5, 5837, 5, 5842, 5, 5844, 5, 5880, 5, 5887, 5, 5890, 5, 6128, 11, 6129, 11, 6141, 11, 6204, 5, 6210, 5, 6211, 5, 6307, 5, 6312, 5, 6316, 5, 6362, 5, 6591, 5, 6646, 5, 6703, 5, 6786, 5, 6787, 11, 6790, 5, 6791, 11, 6794, 5, 6795, 11, 6798, 5, 6799, 11, 6802, 5, 6803, 11, 6806, 5, 6807, 11, 6810, 5, 6811, 11, 6814, 5, 6815, 11, 6818, 5, 6819, 11, 6822, 5, 6823, 11, 6826, 5, 6827, 11, 6830, 5, 6831, 11, 6834, 5, 6835, 11, 6838, 5, 6839, 11, 6842, 5, 6843, 11, 6846, 5, 6847, 11, 6850, 5, 6851, 11, 6854, 5, 6855, 11, 6858, 5, 6859, 11, 6862, 5, 6863, 11, 6870, 5, 6875, 5, 6876, 5, 6915, 5, 6922, 5, 6923, 10, 6924, 5, 6925, 10, 6962, 5, 6984, 5, 6991, 5, 7128, 10, 7131, 5, 7132, 10, 7257, 5, 7258, 10, 7259, 5, 7260, 10, 7261, 5, 7262, 10, 7263, 5, 7264, 10, 7265, 5, 7266, 10, 7267, 5, 7268, 10, 7269, 5, 7270, 10, 7271, 5, 7272, 10, 7273, 5, 7274, 10, 7275, 5, 7276, 10, 7277, 5, 7278, 10, 7279, 5, 7280, 10, 7281, 5, 7282, 10, 7283, 5, 7284, 10, 7285, 5, 7286, 10, 7287, 5, 7288, 10, 7289, 5, 7290, 10, 7291, 5, 7292, 10, 7293, 5, 7294, 10, 7295, 5, 7296, 10, 7297, 5, 7298, 10, 7299, 5, 7300, 10, 7301, 5, 7302, 10, 7303, 5, 7304, 10, 7305, 5, 7306, 10, 7307, 5, 7308, 10, 7309, 5, 7310, 10, 7311, 5, 7312, 10, 7313, 5, 7314, 10, 7315, 5, 7316, 10, 7317, 5, 7318, 10, 7319, 5, 7320, 10, 7321, 5, 7322, 10, 7323, 5, 7324, 10, 7325, 5, 7326, 10, 7327, 5, 7328, 10, 7329, 5, 7330, 10, 7331, 5, 7332, 10, 7333, 5, 7334, 10, 7335, 5, 7336, 10, 7337, 5, 7338, 10, 7339, 5, 7340, 10, 7341, 5, 7342, 10, 7343, 5, 7344, 10, 7345, 5, 7346, 10, 7347, 5, 7348, 10, 7349, 5, 7350, 10, 7351, 5, 7352, 10, 7353, 5, 7354, 10, 7355, 5, 7356, 10, 7357, 5, 7358, 10, 7359, 5, 7360, 10, 7361, 5, 7362, 10, 7363, 5, 7364, 10, 7365, 5, 7366, 10, 7367, 5, 7368, 10, 7369, 5, 7370, 10, 7877, 5, 7878, 5, 7882, 5, 7883, 5, 7887, 5, 7899, 5, 7991, 5, 7992, 5, 8035, 10, 8036, 10, 8058, 5, 8059, 5, 8082, 5, 8083, 5, 8088, 5, 8137, 5, 8138, 10, 8157, 5, 8158, 10, 8159, 5, 8160, 10, 8167, 5, 8168, 10, 8169, 5, 8170, 10, 8187, 5, 8189, 10, 8205, 5, 8206, 10, 8225, 5, 8226, 10, 8311, 5, 8312, 11, 8313, 5, 8314, 11, 8315, 5, 8316, 11, 8317, 5, 8318, 11, 8319, 5, 8320, 11, 8321, 5, 8322, 11, 8323, 5, 8324, 11, 8325, 5, 8326, 11, 8327, 5, 8328, 11, 8329, 5, 8330, 11, 8331, 5, 8332, 11, 8333, 5, 8334, 11, 8335, 5, 8336, 11, 8337, 5, 8338, 11, 8339, 5, 8340, 11, 8341, 5, 8342, 11, 8343, 5, 8344, 11, 8345, 5, 8346, 11, 8347, 5, 8348, 11, 8352, 5, 8353, 5, 8379, 5, 8380, 10, 8381, 5, 8382, 10, 8383, 5, 8384, 10, 8385, 5, 8387, 10, 8391, 5, 8395, 5, 8433, 5, 8455, 5, 8456, 5, 8531, 10, 8682, 5, 8687, 5, 8692, 5, 8903, 5, 8950, 5, 8951, 5, 9039, 5, 9040, 5, 9141, 5, 9149, 5, 9150, 5, 9191, 5, 9221, 5, 9222, 5, 20499, 5, 20538, 5, 20539, 5, 20790, 5, 20791, 5, 21291, 5, 21292, 5, 21500, 5, 21817, 5, 21818, 5, 22032, 5, 22033, 5, 22091, 5, 22092, 5, 22332, 5, 22391, 5, 22392, 5, 22700, 5, 22770, 5, 22780, 5, 22832, 5, 23090, 5, 23095, 5, 23239, 5, 23240, 5, 23433, 5, 23700, 5, 24047, 5, 24048, 5, 24100, 14, 24200, 5, 24305, 5, 24306, 5, 24382, 6, 24383, 5, 24500, 5, 24547, 5, 24548, 5, 24571, 2, 24600, 5, 25e3, 5, 25231, 5, 25884, 5, 25932, 5, 26237, 5, 26331, 5, 26332, 5, 26591, 5, 26592, 5, 26632, 5, 26692, 5, 26855, 10, 26856, 10, 27120, 5, 27200, 5, 27291, 7, 27292, 7, 27429, 5, 27492, 5, 27500, 5, 27700, 5, 28232, 5, 28600, 5, 28991, 5, 28992, 5, 29100, 5, 29220, 5, 29221, 5, 29333, 5, 29635, 5, 29636, 5, 29701, 5, 29738, 5, 29739, 5, 29849, 5, 29850, 5, 29871, 3, 29872, 13, 29873, 5, 29900, 5, 29901, 5, 29903, 5, 30200, 15, 30339, 5, 30340, 5, 30791, 5, 30792, 5, 31028, 5, 31121, 5, 31154, 5, 31170, 5, 31171, 5, 31370, 5, 31528, 5, 31529, 5, 31600, 5, 31700, 5, 31838, 5, 31839, 5, 31901, 5, 32061, 5, 32062, 5, 32098, 5, 32099, 10, 32100, 5, 32104, 5, 32161, 5, 32766, 5, 53048, 5, 53049, 5, 54090, 5, 54091, 5, 65061, 10, 65062, 10, 65161, 5, 65163, 5, 102041, 10, 102064, 8, 102068, 1, 102069, 0, 102118, 10, 102119, 11, 102120, 10, 102121, 10, 102217, 10, 102218, 5, 102219, 10, 102220, 10, 102378, 11, 102379, 11, 102380, 5, 102381, 11, 102498, 5, 102499, 5, 102589, 10, 102590, 5, 102599, 10, 102600, 10, 102604, 10, 102605, 5, 102606, 5, 102647, 5, 102704, 10, 102705, 10, 102706, 5, 102733, 10, 102761, 10, 102762, 5, 102763, 10, 102764, 5, 102765, 5, 102766, 10, 102962, 5, 102963, 5, 102970, 11, 102974, 10, 102993, 5, 102994, 5, 102995, 10, 102996, 10, 103015, 5, 103016, 10, 103017, 5, 103018, 10, 103025, 5, 103026, 5, 103027, 10, 103028, 10, 103035, 5, 103036, 5, 103037, 10, 103038, 10, 103039, 5, 103040, 5, 103041, 10, 103042, 10, 103043, 5, 103044, 5, 103045, 10, 103046, 10, 103047, 5, 103048, 5, 103049, 10, 103050, 10, 103051, 5, 103052, 10, 103053, 5, 103054, 10, 103055, 5, 103056, 10, 103057, 5, 103058, 5, 103059, 10, 103060, 10, 103061, 5, 103062, 5, 103063, 10, 103064, 10, 103069, 10, 103070, 5, 103071, 5, 103072, 10, 103073, 10, 103086, 5, 103087, 5, 103088, 10, 103089, 10, 103094, 11, 103095, 5, 103096, 10, 103103, 5, 103104, 10, 103105, 5, 103106, 10, 103121, 5, 103122, 10, 103123, 5, 103124, 5, 103125, 11, 103126, 11, 103127, 5, 103128, 5, 103129, 10, 103130, 10, 103131, 5, 103132, 5, 103133, 10, 103134, 10, 103135, 5, 103136, 5, 103137, 11, 103138, 11, 103139, 5, 103140, 10, 103141, 5, 103142, 10, 103143, 5, 103144, 10, 103145, 5, 103146, 11, 103147, 5, 103148, 5, 103149, 10, 103150, 10, 103151, 5, 103152, 10, 103172, 5, 103173, 10, 103174, 5, 103175, 5, 103176, 10, 103177, 10, 103178, 5, 103179, 5, 103180, 10, 103181, 10, 103182, 5, 103183, 5, 103184, 10, 103185, 10, 103228, 5, 103229, 5, 103230, 10, 103231, 10, 103250, 5, 103251, 10, 103252, 5, 103253, 10, 103260, 5, 103261, 5, 103262, 10, 103263, 10, 103270, 5, 103271, 5, 103272, 10, 103273, 10, 103274, 5, 103275, 5, 103276, 10, 103277, 10, 103278, 5, 103279, 5, 103280, 10, 103281, 10, 103282, 5, 103283, 5, 103284, 10, 103285, 10, 103286, 5, 103287, 10, 103288, 5, 103289, 10, 103290, 5, 103291, 10, 103292, 5, 103293, 5, 103294, 10, 103295, 10, 103296, 5, 103297, 5, 103298, 10, 103299, 10, 103376, 10, 103377, 5, 103378, 5, 103379, 10, 103380, 10, 103393, 5, 103394, 5, 103395, 10, 103396, 10, 103472, 5, 103473, 11, 103474, 5, 103475, 10, 103482, 5, 103483, 10, 103484, 5, 103485, 10, 103500, 5, 103501, 10, 103502, 5, 103503, 5, 103504, 11, 103505, 11, 103506, 5, 103507, 5, 103508, 10, 103509, 10, 103510, 5, 103511, 5, 103512, 10, 103513, 10, 103514, 5, 103515, 10, 103516, 5, 103517, 10, 103518, 5, 103519, 10, 103520, 5, 103521, 11, 103522, 5, 103523, 5, 103524, 10, 103525, 10, 103526, 5, 103527, 10, 103561, 10, 103562, 10, 103563, 5, 103564, 5, 103565, 10, 103566, 10, 103567, 5, 103568, 5, 103569, 10, 103570, 10, 103585, 10, 103586, 5, 103587, 10, 103588, 11, 103589, 5, 103590, 10, 103591, 11, 103592, 5, 103593, 10, 103594, 11, 103695, 10, 103846, 5, 103946, 10], pcsidc: [[2e3, 2045, 5], [2056, 2065, 5], [2067, 2135, 5], [2137, 2153, 5], [2161, 2170, 5], [2172, 2193, 5], [2196, 2198, 5], [2200, 2203, 5], [2206, 2217, 5], [2222, 2224, 11], [2251, 2253, 11], [2280, 2282, 11], [2308, 2311, 5], [2315, 2325, 5], [2327, 2394, 5], [2400, 2491, 5], [2494, 2758, 5], [2867, 2869, 11], [2870, 2888, 10], [2891, 2895, 10], [2896, 2898, 11], [2902, 2908, 10], [2915, 2920, 10], [2921, 2923, 11], [2924, 2930, 10], [2931, 2941, 5], [2969, 2973, 5], [2975, 2982, 5], [2984, 2988, 5], [2995, 3002, 5], [3006, 3051, 5], [3054, 3059, 5], [3061, 3066, 5], [3068, 3071, 5], [3084, 3087, 5], [3112, 3118, 5], [3120, 3138, 5], [3146, 3151, 5], [3153, 3157, 5], [3161, 3166, 5], [3168, 3172, 5], [3174, 3203, 5], [3294, 3313, 5], [3315, 3335, 5], [3339, 3345, 5], [3350, 3358, 5], [3367, 3369, 5], [3374, 3388, 5], [3391, 3399, 5], [3408, 3416, 5], [3425, 3432, 10], [3441, 3446, 10], [3456, 3459, 10], [3465, 3478, 5], [3554, 3559, 5], [3561, 3565, 10], [3568, 3570, 10], [3571, 3581, 5], [3594, 3597, 5], [3601, 3604, 5], [3637, 3639, 5], [3665, 3667, 5], [3693, 3695, 5], [3701, 3727, 5], [3728, 3733, 10], [3744, 3747, 5], [3753, 3758, 10], [3761, 3763, 5], [3765, 3769, 5], [3779, 3781, 5], [3788, 3791, 5], [3797, 3799, 5], [3832, 3841, 5], [3844, 3852, 5], [3873, 3885, 5], [3890, 3893, 5], [3942, 3950, 5], [3968, 3970, 5], [3973, 3976, 5], [3986, 3989, 5], [3994, 3997, 5], [4390, 4398, 5], [4399, 4413, 10], [4418, 4433, 10], [4491, 4554, 5], [4568, 4589, 5], [4652, 4656, 5], [4766, 4800, 5], [5069, 5072, 5], [5105, 5130, 5], [5180, 5184, 5], [5253, 5259, 5], [5269, 5275, 5], [5292, 5311, 5], [5343, 5349, 5], [5355, 5357, 5], [5387, 5389, 5], [5459, 5463, 5], [5479, 5482, 5], [5530, 5539, 5], [5550, 5552, 5], [5562, 5583, 5], [5623, 5625, 10], [5631, 5639, 5], [5649, 5653, 5], [5663, 5680, 5], [5682, 5685, 5], [5875, 5877, 5], [5896, 5899, 5], [5921, 5940, 5], [6050, 6125, 5], [6351, 6354, 5], [6366, 6372, 5], [6381, 6387, 5], [6622, 6624, 5], [6707, 6709, 5], [6720, 6723, 5], [6732, 6738, 5], [6931, 6933, 5], [7005, 7007, 5], [7057, 7070, 10], [7074, 7082, 5], [7109, 7118, 5], [7119, 7127, 11], [7374, 7376, 5], [7528, 7586, 5], [7587, 7645, 10], [7755, 7787, 5], [7791, 7795, 5], [7799, 7801, 5], [7803, 7805, 5], [7825, 7831, 5], [7845, 7859, 5], [8013, 8032, 5], [8065, 8068, 11], [8518, 8529, 10], [8533, 8536, 10], [8538, 8540, 10], [8677, 8679, 5], [8836, 8840, 5], [8908, 8910, 5], [9154, 9159, 5], [9205, 9218, 5], [20002, 20032, 5], [20062, 20092, 5], [20135, 20138, 5], [20248, 20258, 5], [20348, 20358, 5], [20436, 20440, 5], [20822, 20824, 5], [20934, 20936, 5], [21035, 21037, 5], [21095, 21097, 5], [21148, 21150, 5], [21413, 21423, 5], [21473, 21483, 5], [21780, 21782, 5], [21891, 21894, 5], [22171, 22177, 5], [22181, 22187, 5], [22191, 22197, 5], [22234, 22236, 5], [22521, 22525, 5], [22991, 22994, 5], [23028, 23038, 5], [23830, 23853, 5], [23866, 23872, 5], [23877, 23884, 5], [23886, 23894, 5], [23946, 23948, 5], [24311, 24313, 5], [24342, 24347, 5], [24370, 24374, 6], [24375, 24381, 5], [24718, 24721, 5], [24817, 24821, 5], [24877, 24882, 5], [24891, 24893, 5], [25391, 25395, 5], [25828, 25838, 5], [26191, 26195, 5], [26391, 26393, 5], [26703, 26722, 5], [26729, 26760, 10], [26766, 26798, 10], [26860, 26870, 10], [26891, 26899, 5], [26903, 26923, 5], [26929, 26946, 5], [26948, 26998, 5], [27037, 27040, 5], [27205, 27232, 5], [27258, 27260, 5], [27391, 27398, 5], [27561, 27564, 5], [27571, 27574, 5], [27581, 27584, 5], [27591, 27594, 5], [28191, 28193, 5], [28348, 28358, 5], [28402, 28432, 5], [28462, 28492, 5], [29118, 29122, 5], [29177, 29185, 5], [30161, 30179, 5], [30491, 30494, 5], [30729, 30732, 5], [31251, 31259, 5], [31265, 31268, 5], [31275, 31278, 5], [31288, 31297, 5], [31461, 31465, 5], [31491, 31495, 5], [31917, 31922, 5], [31965, 31985, 5], [31992, 32e3, 5], [32001, 32003, 10], [32005, 32031, 10], [32033, 32060, 10], [32074, 32077, 10], [32081, 32086, 5], [32107, 32130, 5], [32133, 32158, 5], [32164, 32167, 10], [32180, 32199, 5], [32201, 32260, 5], [32301, 32360, 5], [32601, 32662, 5], [32664, 32667, 10], [32701, 32761, 5], [53001, 53004, 5], [53008, 53019, 5], [53021, 53032, 5], [53034, 53037, 5], [53042, 53046, 5], [53074, 53080, 5], [54001, 54004, 5], [54008, 54019, 5], [54021, 54032, 5], [54034, 54037, 5], [54042, 54046, 5], [54048, 54053, 5], [54074, 54080, 5], [54098, 54101, 5], [102001, 102040, 5], [102042, 102063, 5], [102065, 102067, 5], [102070, 102112, 5], [102114, 102117, 5], [102122, 102208, 5], [102210, 102216, 5], [102221, 102300, 5], [102304, 102377, 5], [102382, 102388, 5], [102389, 102398, 10], [102399, 102444, 5], [102445, 102447, 10], [102448, 102458, 5], [102459, 102468, 10], [102469, 102496, 5], [102500, 102519, 11], [102520, 102524, 5], [102525, 102529, 10], [102530, 102549, 5], [102557, 102588, 5], [102593, 102598, 5], [102601, 102603, 5], [102608, 102628, 5], [102629, 102646, 10], [102648, 102672, 10], [102675, 102700, 10], [102701, 102703, 5], [102707, 102730, 10], [102735, 102758, 10], [102767, 102900, 5], [102965, 102969, 5], [102971, 102973, 5], [102975, 102989, 5], [102990, 102992, 11], [102997, 103002, 5], [103003, 103008, 10], [103009, 103011, 5], [103012, 103014, 10], [103019, 103021, 5], [103022, 103024, 10], [103029, 103031, 5], [103032, 103034, 10], [103065, 103068, 5], [103074, 103076, 5], [103077, 103079, 11], [103080, 103082, 5], [103083, 103085, 10], [103090, 103093, 5], [103097, 103099, 5], [103100, 103102, 10], [103107, 103109, 5], [103110, 103112, 10], [103113, 103116, 5], [103117, 103120, 10], [103153, 103157, 5], [103158, 103162, 10], [103163, 103165, 5], [103166, 103168, 11], [103169, 103171, 10], [103186, 103188, 5], [103189, 103191, 10], [103192, 103195, 5], [103196, 103199, 10], [103200, 103224, 5], [103225, 103227, 11], [103232, 103237, 5], [103238, 103243, 10], [103244, 103246, 5], [103247, 103249, 10], [103254, 103256, 5], [103257, 103259, 10], [103264, 103266, 5], [103267, 103269, 10], [103300, 103375, 5], [103381, 103383, 5], [103384, 103386, 11], [103387, 103389, 5], [103390, 103392, 10], [103397, 103399, 5], [103400, 103471, 10], [103476, 103478, 5], [103479, 103481, 10], [103486, 103488, 5], [103489, 103491, 10], [103492, 103495, 5], [103496, 103499, 10], [103539, 103543, 5], [103544, 103548, 10], [103549, 103551, 5], [103552, 103554, 11], [103555, 103557, 10], [103558, 103560, 5], [103571, 103573, 5], [103574, 103576, 10], [103577, 103580, 5], [103581, 103583, 10], [103595, 103597, 5], [103600, 103694, 5], [103696, 103698, 5], [103700, 103793, 10], [103794, 103799, 5]], gcsid: [4001, 81, 4002, 85, 4003, 70, 4004, 84, 4005, 82, 4006, 83, 4007, 60, 4008, 67, 4009, 39, 4010, 57, 4011, 63, 4012, 64, 4013, 64, 4014, 63, 4015, 92, 4016, 90, 4018, 86, 4019, 75, 4020, 68, 4021, 70, 4022, 55, 4023, 75, 4024, 66, 4025, 73, 4027, 95, 4028, 59, 4029, 58, 4031, 75, 4032, 78, 4033, 77, 4034, 65, 4035, 100, 4036, 70, 4042, 88, 4044, 87, 4045, 89, 4046, 75, 4047, 99, 4052, 101, 4053, 97, 4054, 61, 4075, 75, 4081, 75, 4120, 84, 4121, 75, 4122, 80, 4123, 55, 4124, 84, 4126, 75, 4130, 75, 4131, 92, 4132, 64, 4133, 75, 4134, 64, 4140, 75, 4141, 75, 4142, 64, 4143, 64, 4144, 92, 4145, 87, 4146, 89, 4147, 66, 4148, 75, 4149, 84, 4150, 84, 4151, 75, 4152, 75, 4153, 55, 4154, 55, 4155, 63, 4156, 84, 4157, 60, 4162, 84, 4163, 75, 4164, 66, 4165, 55, 4166, 75, 4168, 58, 4170, 75, 4172, 75, 4173, 75, 4174, 58, 4175, 64, 4176, 75, 4178, 66, 4179, 66, 4180, 75, 4188, 81, 4190, 75, 4191, 66, 4192, 55, 4193, 63, 4198, 64, 4199, 55, 4200, 66, 4201, 64, 4202, 70, 4203, 70, 4204, 55, 4205, 66, 4206, 63, 4207, 55, 4208, 55, 4209, 64, 4210, 64, 4211, 84, 4212, 64, 4213, 63, 4214, 66, 4215, 55, 4216, 67, 4218, 55, 4219, 84, 4220, 64, 4221, 55, 4222, 64, 4224, 55, 4225, 55, 4229, 68, 4230, 55, 4231, 55, 4232, 64, 4234, 64, 4235, 55, 4236, 55, 4237, 70, 4238, 70, 4239, 92, 4240, 92, 4241, 65, 4242, 67, 4243, 88, 4244, 92, 4245, 86, 4246, 64, 4250, 64, 4251, 64, 4252, 63, 4253, 67, 4254, 55, 4255, 55, 4256, 64, 4257, 84, 4258, 75, 4259, 55, 4260, 64, 4261, 106, 4262, 84, 4263, 64, 4265, 55, 4266, 63, 4267, 67, 4269, 75, 4270, 64, 4271, 55, 4272, 55, 4273, 82, 4274, 55, 4275, 63, 4276, 73, 4280, 84, 4281, 57, 4282, 63, 4283, 75, 4284, 66, 4285, 55, 4286, 68, 4288, 55, 4289, 84, 4291, 70, 4292, 55, 4293, 83, 4294, 84, 4295, 84, 4296, 63, 4297, 55, 4298, 90, 4299, 85, 4300, 85, 4301, 84, 4302, 60, 4303, 68, 4306, 84, 4307, 64, 4308, 84, 4309, 55, 4310, 63, 4311, 55, 4312, 84, 4313, 55, 4314, 84, 4315, 63, 4316, 55, 4317, 66, 4318, 75, 4319, 75, 4322, 80, 4324, 80, 4326, 75, 4466, 75, 4469, 75, 4475, 55, 4483, 75, 4490, 75, 4555, 66, 4558, 75, 4608, 67, 4609, 67, 4610, 74, 4614, 55, 4619, 75, 4624, 75, 4625, 55, 4627, 75, 4636, 55, 4637, 55, 4638, 67, 4639, 55, 4657, 93, 4659, 75, 4660, 55, 4661, 75, 4666, 84, 4667, 75, 4670, 75, 4671, 63, 4674, 75, 4679, 64, 4680, 64, 4682, 92, 4683, 67, 4686, 75, 4687, 75, 4693, 75, 4694, 75, 4695, 67, 4696, 64, 4697, 64, 4702, 75, 4703, 64, 4704, 55, 4705, 55, 4706, 68, 4718, 55, 4720, 80, 4721, 55, 4723, 67, 4726, 67, 4737, 75, 4738, 60, 4740, 79, 4741, 55, 4742, 75, 4743, 64, 4744, 64, 4745, 84, 4746, 84, 4747, 75, 4748, 56, 4749, 75, 4750, 75, 4751, 91, 4752, 56, 4753, 55, 4754, 55, 4759, 75, 4761, 75, 4801, 84, 4802, 55, 4803, 55, 4804, 84, 4805, 84, 4806, 55, 4807, 106, 4808, 84, 4809, 55, 4810, 105, 4811, 106, 4816, 106, 4817, 82, 4818, 84, 4820, 84, 4821, 106, 4823, 55, 4824, 55, 4901, 107, 4902, 107, 4903, 59, 4904, 84, 5228, 84, 5229, 84, 5233, 92, 5252, 75, 5264, 75, 5340, 75, 5354, 75, 5360, 75, 5371, 75, 5373, 75, 5381, 75, 5393, 75, 5464, 60, 5467, 67, 5489, 75, 5524, 55, 5527, 70, 5546, 75, 5561, 66, 5593, 75, 5681, 84, 5886, 75, 6135, 75, 6365, 75, 6706, 75, 6881, 64, 6882, 64, 6883, 55, 6892, 64, 6894, 64, 6980, 75, 6983, 75, 6987, 75, 6990, 75, 7035, 75, 7037, 75, 7039, 75, 7041, 75, 7073, 75, 7084, 75, 7086, 75, 7133, 75, 7373, 75, 7683, 76, 7798, 75, 7844, 75, 7881, 75, 7886, 75, 8042, 96, 8043, 96, 8086, 75, 8232, 75, 8237, 75, 8240, 75, 8246, 75, 8249, 75, 8252, 75, 8255, 75, 8351, 84, 8427, 75, 8428, 55, 8449, 75, 8545, 75, 8685, 75, 8694, 64, 8699, 75, 8818, 75, 8888, 75, 8900, 75, 8902, 75, 8907, 75, 8949, 75, 9003, 75, 9006, 75, 9009, 75, 9012, 75, 9017, 75, 9068, 75, 9069, 75, 9140, 75, 9148, 75, 9153, 75, 37001, 73, 37002, 69, 37003, 72, 37004, 71, 37005, 62, 37006, 91, 37007, 94, 37008, 101, 37201, 55, 37202, 92, 37203, 87, 37204, 55, 37205, 55, 37206, 64, 37207, 71, 37208, 64, 37211, 64, 37220, 67, 37221, 55, 37222, 55, 37223, 63, 37224, 55, 37225, 106, 37226, 55, 37227, 55, 37228, 64, 37229, 62, 37230, 55, 37231, 70, 37232, 55, 37233, 55, 37235, 55, 37237, 55, 37238, 55, 37239, 67, 37240, 64, 37241, 55, 37242, 55, 37243, 67, 37252, 67, 37253, 55, 37254, 64, 37255, 84, 37257, 66, 37259, 55, 37260, 67, 104017, 79, 104018, 79, 104024, 75, 104027, 75, 104047, 98, 104050, 75, 104100, 75, 104101, 84, 104102, 84, 104103, 64, 104104, 55, 104105, 84, 104106, 55, 104107, 75, 104108, 75, 104109, 67, 104110, 75, 104111, 75, 104112, 67, 104113, 67, 104128, 102, 104129, 75, 104130, 55, 104131, 84, 104132, 67, 104133, 75, 104134, 75, 104135, 66, 104136, 70, 104137, 75, 104138, 55, 104139, 106, 104140, 106, 104223, 75, 104248, 55, 104256, 92, 104261, 63, 104286, 75, 104287, 75, 104304, 63, 104700, 49, 104701, 9, 104702, 24, 104703, 15, 104704, 28, 104705, 32, 104706, 53, 104707, 46, 104708, 37, 104709, 54, 104710, 11, 104711, 14, 104712, 30, 104713, 52, 104714, 4, 104715, 4, 104716, 23, 104717, 14, 104718, 48, 104719, 29, 104720, 22, 104721, 21, 104722, 35, 104723, 21, 104724, 46, 104725, 22, 104726, 49, 104727, 45, 104728, 52, 104729, 10, 104730, 10, 104731, 21, 104732, 31, 104733, 26, 104734, 40, 104735, 19, 104736, 30, 104737, 34, 104738, 27, 104739, 46, 104740, 5, 104741, 12, 104742, 50, 104743, 9, 104744, 43, 104745, 21, 104746, 26, 104747, 25, 104748, 21, 104749, 7, 104750, 53, 104751, 6, 104752, 33, 104753, 29, 104754, 19, 104755, 41, 104756, 31, 104757, 3, 104758, 41, 104759, 25, 104760, 49, 104761, 41, 104762, 44, 104763, 50, 104764, 46, 104765, 6, 104766, 40, 104767, 16, 104768, 8, 104769, 17, 104770, 48, 104771, 42, 104772, 50, 104773, 25, 104774, 29, 104775, 25, 104776, 32, 104777, 13, 104778, 36, 104779, 47, 104780, 14, 104781, 29, 104782, 23, 104783, 38, 104784, 42, 104785, 18, 104786, 20, 104808, 51, 104896, 75, 104900, 112, 104901, 104, 104902, 103, 104903, 116, 104904, 109, 104905, 108, 104906, 169, 104907, 164, 104908, 0, 104909, 168, 104910, 141, 104911, 166, 104912, 114, 104913, 160, 104914, 151, 104915, 117, 104916, 110, 104917, 140, 104918, 115, 104919, 170, 104920, 163, 104921, 154, 104922, 158, 104923, 161, 104924, 148, 104925, 0, 104926, 159, 104927, 167, 104928, 127, 104929, 131, 104930, 145, 104931, 159, 104932, 136, 104933, 123, 104934, 139, 104935, 134, 104936, 166, 104937, 150, 104938, 137, 104939, 147, 104940, 121, 104941, 165, 104942, 128, 104943, 111, 104944, 1, 104945, 126, 104946, 152, 104947, 157, 104948, 162, 104949, 153, 104950, 156, 104951, 149, 104952, 132, 104953, 122, 104954, 160, 104955, 146, 104956, 143, 104957, 156, 104958, 120, 104959, 125, 104960, 2, 104961, 144, 104962, 142, 104963, 138, 104964, 155, 104965, 135, 104966, 133, 104967, 151, 104968, 118, 104969, 119, 104970, 124, 104971, 108, 104972, 129, 104973, 130, 104974, 113, 104975, 0, 104990, 84, 104991, 75, 104992, 84], gcsidc: [[4127, 4129, 67], [4135, 4139, 67], [4158, 4161, 55], [4181, 4185, 55], [4194, 4196, 55], [4226, 4228, 63], [4247, 4249, 55], [4277, 4279, 81], [4600, 4607, 64], [4621, 4623, 55], [4628, 4633, 55], [4641, 4646, 55], [4662, 4665, 55], [4676, 4678, 66], [4688, 4692, 55], [4699, 4701, 64], [4755, 4757, 75], [4763, 4765, 75], [4813, 4815, 84], [8972, 8987, 75], [37212, 37219, 55], [37245, 37247, 55], [37249, 37251, 55], [104009, 104015, 75], [104019, 104022, 75], [104114, 104124, 75], [104125, 104127, 55], [104141, 104145, 75], [104179, 104186, 75], [104257, 104260, 75]] }, f = { c: [[2e3, 2035, 9001], [2039, 2045, 9001], [2056, 2062, 9001], [2067, 2090, 9001], [2093, 2135, 9001], [2161, 2165, 9001], [2172, 2180, 9001], [2188, 2193, 9001], [2195, 2198, 9001], [2200, 2203, 9001], [2205, 2213, 9001], [2215, 2217, 9001], [2222, 2224, 9002], [2225, 2243, 9003], [2246, 2250, 9003], [2251, 2253, 9002], [2257, 2264, 9003], [2274, 2279, 9003], [2280, 2282, 9002], [2283, 2289, 9003], [2308, 2313, 9001], [2315, 2491, 9001], [2494, 2576, 9001], [2578, 2599, 9001], [2601, 2693, 9001], [2695, 2866, 9001], [2867, 2869, 9002], [2870, 2888, 9003], [2891, 2895, 9003], [2896, 2898, 9002], [2902, 2908, 9003], [2915, 2920, 9003], [2921, 2923, 9002], [2924, 2930, 9003], [2931, 2933, 9001], [2935, 2962, 9001], [2964, 2968, 9003], [2969, 2973, 9001], [2975, 2978, 9001], [2984, 2988, 9001], [2995, 3051, 9001], [3054, 3072, 9001], [3077, 3079, 9001], [3081, 3088, 9001], [3092, 3101, 9001], [3106, 3138, 9001], [3146, 3151, 9001], [3153, 3166, 9001], [3168, 3172, 9001], [3174, 3203, 9001], [3294, 3313, 9001], [3315, 3348, 9001], [3350, 3358, 9001], [3367, 3403, 9001], [3408, 3416, 9001], [3417, 3438, 9003], [3441, 3446, 9003], [3447, 3450, 9001], [3451, 3453, 9003], [3455, 3459, 9003], [3460, 3478, 9001], [3554, 3559, 9001], [3560, 3570, 9003], [3571, 3581, 9001], [3594, 3597, 9001], [3601, 3604, 9001], [3637, 3639, 9001], [3665, 3667, 9001], [3693, 3695, 9001], [3701, 3727, 9001], [3728, 3739, 9003], [3740, 3751, 9001], [3753, 3760, 9003], [3761, 3773, 9001], [3775, 3777, 9001], [3779, 3781, 9001], [3788, 3791, 9001], [3797, 3802, 9001], [3814, 3816, 9001], [3825, 3829, 9001], [3832, 3841, 9001], [3844, 3852, 9001], [3873, 3885, 9001], [3890, 3893, 9001], [3942, 3950, 9001], [3968, 3970, 9001], [3973, 3976, 9001], [3986, 3989, 9001], [3994, 3997, 9001], [4001, 4016, 9102], [4018, 4025, 9102], [4027, 4029, 9102], [4031, 4036, 9102], [4044, 4047, 9102], [4048, 4051, 9001], [4052, 4054, 9102], [4056, 4063, 9001], [4093, 4096, 9001], [4120, 4124, 9102], [4127, 4139, 9102], [4141, 4176, 9102], [4178, 4185, 9102], [4188, 4216, 9102], [4218, 4232, 9102], [4235, 4260, 9102], [4265, 4267, 9102], [4269, 4286, 9102], [4292, 4304, 9102], [4306, 4319, 9102], [4390, 4398, 9001], [4399, 4413, 9003], [4418, 4433, 9003], [4455, 4457, 9003], [4484, 4489, 9001], [4491, 4554, 9001], [4568, 4589, 9001], [4600, 4630, 9102], [4636, 4639, 9102], [4641, 4646, 9102], [4652, 4656, 9001], [4657, 4680, 9102], [4682, 4684, 9102], [4686, 4765, 9102], [4766, 4800, 9001], [4801, 4806, 9102], [4813, 4815, 9102], [5014, 5016, 9001], [5069, 5072, 9001], [5105, 5130, 9001], [5173, 5188, 9001], [5253, 5259, 9001], [5269, 5275, 9001], [5292, 5311, 9001], [5329, 5331, 9001], [5343, 5349, 9001], [5355, 5357, 9001], [5459, 5463, 9001], [5479, 5482, 9001], [5518, 5520, 9001], [5533, 5539, 9001], [5550, 5552, 9001], [5562, 5583, 9001], [5623, 5625, 9003], [5631, 5639, 9001], [5649, 5653, 9001], [5663, 5680, 9001], [5682, 5685, 9001], [5875, 5877, 9001], [5896, 5899, 9001], [5921, 5940, 9001], [6050, 6125, 9001], [6244, 6275, 9001], [6328, 6348, 9001], [6350, 6356, 9001], [6366, 6372, 9001], [6381, 6387, 9001], [6393, 6404, 9001], [6480, 6483, 9001], [6511, 6514, 9001], [6579, 6581, 9001], [6619, 6624, 9001], [6625, 6627, 9003], [6628, 6632, 9001], [6634, 6637, 9001], [6669, 6692, 9001], [6707, 6709, 9001], [6720, 6723, 9001], [6732, 6738, 9001], [6881, 6883, 9102], [6931, 6933, 9001], [7005, 7007, 9001], [7057, 7070, 9003], [7074, 7082, 9001], [7109, 7118, 9001], [7119, 7127, 9002], [7374, 7376, 9001], [7528, 7586, 9001], [7587, 7645, 9003], [7692, 7696, 9001], [7755, 7787, 9001], [7791, 7795, 9001], [7799, 7801, 9001], [7803, 7805, 9001], [7825, 7831, 9001], [7845, 7859, 9001], [8013, 8032, 9001], [8065, 8068, 9002], [8518, 8529, 9003], [8533, 8536, 9003], [8538, 8540, 9003], [8677, 8679, 9001], [8836, 8840, 9001], [8857, 8859, 9001], [8908, 8910, 9001], [8972, 9e3, 9102], [9053, 9057, 9102], [9059, 9069, 9102], [9154, 9159, 9001], [9205, 9218, 9001], [20002, 20032, 9001], [20062, 20092, 9001], [20135, 20138, 9001], [20248, 20258, 9001], [20348, 20358, 9001], [20436, 20440, 9001], [20822, 20824, 9001], [20934, 20936, 9001], [21035, 21037, 9001], [21095, 21097, 9001], [21148, 21150, 9001], [21413, 21423, 9001], [21473, 21483, 9001], [21780, 21782, 9001], [21896, 21899, 9001], [22171, 22177, 9001], [22181, 22187, 9001], [22191, 22197, 9001], [22234, 22236, 9001], [22521, 22525, 9001], [22991, 22994, 9001], [23028, 23038, 9001], [23830, 23853, 9001], [23866, 23872, 9001], [23877, 23884, 9001], [23886, 23894, 9001], [23946, 23948, 9001], [24311, 24313, 9001], [24342, 24347, 9001], [24370, 24374, 9084], [24375, 24381, 9001], [24718, 24721, 9001], [24817, 24821, 9001], [24877, 24882, 9001], [24891, 24893, 9001], [25391, 25395, 9001], [25828, 25838, 9001], [26191, 26195, 9001], [26391, 26393, 9001], [26701, 26722, 9001], [26729, 26746, 9003], [26748, 26760, 9003], [26766, 26799, 9003], [26847, 26870, 9003], [26891, 26899, 9001], [26901, 26923, 9001], [26929, 26946, 9001], [26948, 26978, 9001], [26980, 26998, 9001], [27037, 27040, 9001], [27205, 27232, 9001], [27258, 27260, 9001], [27391, 27398, 9001], [27561, 27564, 9001], [27571, 27574, 9001], [27581, 27584, 9001], [27591, 27594, 9001], [28191, 28193, 9001], [28348, 28358, 9001], [28402, 28432, 9001], [28462, 28492, 9001], [29168, 29172, 9001], [29187, 29195, 9001], [29901, 29903, 9001], [30161, 30179, 9001], [30491, 30494, 9001], [30729, 30732, 9001], [31251, 31259, 9001], [31265, 31268, 9001], [31275, 31277, 9001], [31281, 31290, 9001], [31466, 31469, 9001], [31491, 31495, 9001], [31965, 32e3, 9001], [32001, 32003, 9003], [32005, 32017, 9003], [32019, 32028, 9003], [32033, 32035, 9003], [32037, 32060, 9003], [32064, 32067, 9003], [32081, 32086, 9001], [32107, 32130, 9001], [32133, 32158, 9001], [32164, 32167, 9003], [32180, 32199, 9001], [32201, 32260, 9001], [32301, 32360, 9001], [32601, 32662, 9001], [32664, 32667, 9003], [32701, 32761, 9001], [37002, 37008, 9102], [53001, 53004, 9001], [53008, 53019, 9001], [53021, 53032, 9001], [53034, 53037, 9001], [53042, 53046, 9001], [53074, 53080, 9001], [54001, 54004, 9001], [54008, 54019, 9001], [54021, 54032, 9001], [54042, 54046, 9001], [54048, 54053, 9001], [54074, 54080, 9001], [54098, 54101, 9001], [102001, 102005, 9001], [102007, 102039, 9001], [102042, 102045, 9001], [102060, 102063, 9001], [102070, 102079, 9001], [102096, 102099, 9001], [102101, 102109, 9001], [102114, 102117, 9001], [102132, 102138, 9001], [102141, 102144, 9001], [102156, 102166, 9001], [102173, 102179, 9001], [102191, 102198, 9001], [102221, 102228, 9001], [102231, 102233, 9001], [102237, 102240, 9001], [102364, 102375, 9001], [102389, 102398, 9003], [102399, 102419, 9001], [102421, 102438, 9001], [102445, 102447, 9003], [102450, 102458, 9001], [102459, 102462, 9003], [102470, 102489, 9001], [102550, 102556, 9001], [102562, 102588, 9001], [102629, 102640, 9003], [102648, 102650, 9003], [102688, 102690, 9003], [102696, 102700, 9003], [102701, 102703, 9001], [102799, 102900, 9001], [103166, 103168, 9002], [103220, 103224, 9001], [103225, 103227, 9002], [103232, 103237, 9001], [103238, 103243, 9003], [103244, 103246, 9001], [103247, 103249, 9003], [103254, 103256, 9001], [103257, 103259, 9003], [103264, 103266, 9001], [103267, 103269, 9003], [103327, 103330, 9001], [103344, 103347, 9001], [103372, 103375, 9001], [103381, 103383, 9001], [103384, 103386, 9002], [103387, 103389, 9001], [103390, 103392, 9003], [103397, 103399, 9001], [103427, 103430, 9003], [103444, 103447, 9003], [103476, 103478, 9001], [103479, 103481, 9003], [103486, 103488, 9001], [103489, 103491, 9003], [103492, 103495, 9001], [103496, 103499, 9003], [103539, 103543, 9001], [103544, 103548, 9003], [103549, 103551, 9001], [103552, 103554, 9002], [103555, 103557, 9003], [103558, 103560, 9001], [103571, 103573, 9001], [103574, 103576, 9003], [103577, 103580, 9001], [103581, 103583, 9003], [103595, 103597, 9001], [103600, 103694, 9001], [103696, 103698, 9001], [103700, 103793, 9003], [104101, 104103, 9102], [104126, 104131, 9102], [104259, 104261, 9102], [104700, 104786, 9102], [104900, 104975, 9102]], nc: [2065, 9001, 2066, 9039, 2136, 9094, 2137, 9001, 2138, 9001, 2154, 9001, 2157, 9001, 2158, 9001, 2159, 9094, 2160, 9094, 2169, 9001, 2170, 9001, 2204, 9003, 2219, 9001, 2220, 9001, 2254, 9003, 2255, 9003, 2256, 9002, 2265, 9002, 2266, 9002, 2267, 9003, 2268, 9003, 2269, 9002, 2270, 9002, 2271, 9003, 2272, 9003, 2273, 9002, 2290, 9001, 2294, 9001, 2295, 9001, 2314, 9005, 2899, 9003, 2900, 9003, 2901, 9002, 2909, 9002, 2910, 9002, 2911, 9003, 2912, 9003, 2913, 9002, 2914, 9002, 2980, 9001, 2981, 9001, 2991, 9001, 2992, 9002, 2993, 9001, 2994, 9002, 3074, 9001, 3075, 9001, 3080, 9002, 3089, 9003, 3090, 9001, 3091, 9003, 3102, 9003, 3141, 9001, 3142, 9001, 3167, 9301, 3360, 9001, 3361, 9002, 3362, 9001, 3363, 9003, 3364, 9001, 3365, 9003, 3404, 9003, 3405, 9001, 3406, 9001, 3407, 9005, 3439, 9001, 3440, 9001, 3479, 9002, 3480, 9001, 3481, 9002, 3482, 9001, 3483, 9002, 3484, 9001, 3485, 9003, 3486, 9001, 3487, 9003, 3488, 9001, 3489, 9001, 3490, 9003, 3491, 9001, 3492, 9003, 3493, 9001, 3494, 9003, 3495, 9001, 3496, 9003, 3497, 9001, 3498, 9003, 3499, 9001, 3500, 9003, 3501, 9001, 3502, 9003, 3503, 9001, 3504, 9003, 3505, 9001, 3506, 9003, 3507, 9001, 3508, 9003, 3509, 9001, 3510, 9003, 3511, 9001, 3512, 9003, 3513, 9001, 3514, 9001, 3515, 9003, 3516, 9001, 3517, 9003, 3518, 9001, 3519, 9003, 3520, 9001, 3521, 9003, 3522, 9001, 3523, 9003, 3524, 9001, 3525, 9003, 3526, 9001, 3527, 9003, 3528, 9001, 3529, 9003, 3530, 9001, 3531, 9003, 3532, 9001, 3533, 9003, 3534, 9001, 3535, 9003, 3536, 9001, 3537, 9003, 3538, 9001, 3539, 9003, 3540, 9001, 3541, 9003, 3542, 9001, 3543, 9003, 3544, 9001, 3545, 9003, 3546, 9001, 3547, 9003, 3548, 9001, 3549, 9003, 3550, 9001, 3551, 9003, 3552, 9001, 3553, 9003, 3582, 9003, 3583, 9001, 3584, 9003, 3585, 9001, 3586, 9003, 3587, 9001, 3588, 9002, 3589, 9001, 3590, 9002, 3591, 9001, 3592, 9001, 3593, 9002, 3598, 9003, 3599, 9001, 3600, 9003, 3605, 9002, 3606, 9001, 3607, 9001, 3608, 9003, 3609, 9001, 3610, 9003, 3611, 9001, 3612, 9003, 3613, 9001, 3614, 9003, 3615, 9001, 3616, 9003, 3617, 9001, 3618, 9003, 3619, 9001, 3620, 9003, 3621, 9001, 3622, 9003, 3623, 9001, 3624, 9003, 3625, 9001, 3626, 9003, 3627, 9001, 3628, 9003, 3629, 9001, 3630, 9003, 3631, 9001, 3632, 9003, 3633, 9001, 3634, 9002, 3635, 9001, 3636, 9002, 3640, 9003, 3641, 9001, 3642, 9003, 3643, 9001, 3644, 9002, 3645, 9001, 3646, 9002, 3647, 9001, 3648, 9002, 3649, 9001, 3650, 9003, 3651, 9001, 3652, 9003, 3653, 9001, 3654, 9003, 3655, 9001, 3656, 9002, 3657, 9001, 3658, 9003, 3659, 9001, 3660, 9003, 3661, 9001, 3662, 9003, 3663, 9001, 3664, 9003, 3668, 9003, 3669, 9001, 3670, 9003, 3671, 9001, 3672, 9003, 3673, 9001, 3674, 9003, 3675, 9001, 3676, 9002, 3677, 9003, 3678, 9001, 3679, 9002, 3680, 9003, 3681, 9001, 3682, 9002, 3683, 9003, 3684, 9001, 3685, 9001, 3686, 9003, 3687, 9001, 3688, 9003, 3689, 9001, 3690, 9003, 3691, 9001, 3692, 9003, 3696, 9003, 3697, 9001, 3698, 9003, 3699, 9001, 3700, 9003, 3783, 9001, 3784, 9001, 3793, 9001, 3794, 9001, 3812, 9001, 3819, 9102, 3821, 9102, 3824, 9102, 3854, 9001, 3857, 9001, 3889, 9102, 3906, 9102, 3911, 9001, 3912, 9001, 3920, 9001, 3978, 9001, 3979, 9001, 3991, 9003, 3992, 9003, 4026, 9001, 4037, 9001, 4038, 9001, 4042, 9102, 4071, 9001, 4075, 9102, 4081, 9102, 4082, 9001, 4083, 9001, 4087, 9001, 4088, 9001, 4217, 9003, 4261, 9105, 4262, 9102, 4263, 9102, 4288, 9102, 4289, 9102, 4322, 9102, 4324, 9102, 4326, 9102, 4414, 9001, 4415, 9001, 4417, 9001, 4434, 9001, 4437, 9001, 4438, 9003, 4439, 9003, 4462, 9001, 4463, 9102, 4467, 9001, 4470, 9102, 4471, 9001, 4475, 9102, 4483, 9102, 4490, 9102, 4555, 9102, 4558, 9102, 4559, 9001, 4632, 9102, 4633, 9102, 4647, 9001, 4807, 9105, 4808, 9102, 4809, 9102, 4810, 9105, 4811, 9105, 4816, 9105, 4817, 9102, 4818, 9102, 4820, 9102, 4821, 9105, 4822, 9001, 4823, 9102, 4824, 9102, 4826, 9001, 4839, 9001, 4901, 9105, 4902, 9105, 4903, 9102, 4904, 9102, 5013, 9102, 5018, 9001, 5048, 9001, 5167, 9001, 5168, 9001, 5221, 9001, 5223, 9001, 5228, 9102, 5229, 9102, 5233, 9102, 5234, 9001, 5235, 9001, 5243, 9001, 5246, 9102, 5247, 9001, 5252, 9102, 5264, 9102, 5266, 9001, 5316, 9001, 5320, 9001, 5321, 9001, 5324, 9102, 5325, 9001, 5337, 9001, 5340, 9102, 5354, 9102, 5360, 9102, 5361, 9001, 5362, 9001, 5365, 9102, 5367, 9001, 5371, 9102, 5373, 9102, 5381, 9102, 5382, 9001, 5383, 9001, 5387, 9001, 5389, 9001, 5393, 9102, 5396, 9001, 5451, 9102, 5456, 9001, 5457, 9001, 5464, 9102, 5467, 9102, 5469, 9001, 5472, 9037, 5489, 9102, 5490, 9001, 5513, 9001, 5514, 9001, 5523, 9001, 5524, 9102, 5527, 9102, 5530, 9001, 5531, 9001, 5546, 9102, 5559, 9001, 5561, 9102, 5588, 9002, 5589, 9005, 5593, 9102, 5596, 9001, 5627, 9001, 5629, 9001, 5641, 9001, 5643, 9001, 5644, 9001, 5646, 9003, 5654, 9003, 5655, 9003, 5659, 9001, 5681, 9102, 5700, 9001, 5825, 9001, 5836, 9001, 5837, 9001, 5839, 9001, 5842, 9001, 5844, 9001, 5858, 9001, 5879, 9001, 5880, 9001, 5886, 9102, 5887, 9001, 5890, 9001, 6128, 9002, 6129, 9002, 6135, 9102, 6204, 9001, 6207, 9102, 6210, 9001, 6211, 9001, 6307, 9001, 6311, 9102, 6312, 9001, 6316, 9001, 6318, 9102, 6322, 9102, 6325, 9102, 6362, 9001, 6365, 9102, 6391, 9002, 6405, 9002, 6406, 9001, 6407, 9002, 6408, 9001, 6409, 9002, 6410, 9001, 6411, 9003, 6412, 9001, 6413, 9003, 6414, 9001, 6415, 9001, 6416, 9003, 6417, 9001, 6418, 9003, 6419, 9001, 6420, 9003, 6421, 9001, 6422, 9003, 6423, 9001, 6424, 9003, 6425, 9001, 6426, 9003, 6427, 9001, 6428, 9003, 6429, 9001, 6430, 9003, 6431, 9001, 6432, 9003, 6433, 9001, 6434, 9003, 6435, 9001, 6436, 9003, 6437, 9001, 6438, 9003, 6439, 9001, 6440, 9001, 6441, 9003, 6442, 9001, 6443, 9003, 6444, 9001, 6445, 9003, 6446, 9001, 6447, 9003, 6448, 9001, 6449, 9003, 6450, 9001, 6451, 9003, 6452, 9001, 6453, 9003, 6454, 9001, 6455, 9003, 6456, 9001, 6457, 9003, 6458, 9001, 6459, 9003, 6460, 9001, 6461, 9003, 6462, 9001, 6463, 9003, 6464, 9001, 6465, 9003, 6466, 9001, 6467, 9003, 6468, 9001, 6469, 9003, 6470, 9001, 6471, 9003, 6472, 9001, 6473, 9003, 6474, 9001, 6475, 9003, 6476, 9001, 6477, 9003, 6478, 9001, 6479, 9003, 6484, 9003, 6485, 9001, 6486, 9003, 6487, 9001, 6488, 9003, 6489, 9001, 6490, 9003, 6491, 9001, 6492, 9003, 6493, 9001, 6494, 9002, 6495, 9001, 6496, 9002, 6497, 9001, 6498, 9001, 6499, 9002, 6500, 9001, 6501, 9003, 6502, 9001, 6503, 9003, 6504, 9001, 6505, 9003, 6506, 9001, 6507, 9003, 6508, 9001, 6509, 9001, 6510, 9003, 6515, 9002, 6516, 9001, 6518, 9001, 6519, 9003, 6520, 9001, 6521, 9003, 6522, 9001, 6523, 9003, 6524, 9001, 6525, 9003, 6526, 9001, 6527, 9003, 6528, 9001, 6529, 9003, 6530, 9001, 6531, 9003, 6532, 9001, 6533, 9003, 6534, 9001, 6535, 9003, 6536, 9001, 6537, 9003, 6538, 9001, 6539, 9003, 6540, 9001, 6541, 9003, 6542, 9001, 6543, 9003, 6544, 9001, 6545, 9002, 6546, 9001, 6547, 9002, 6548, 9001, 6549, 9003, 6550, 9001, 6551, 9003, 6552, 9001, 6553, 9003, 6554, 9001, 6555, 9003, 6556, 9001, 6557, 9002, 6558, 9001, 6559, 9002, 6560, 9001, 6561, 9002, 6562, 9001, 6563, 9003, 6564, 9001, 6565, 9003, 6566, 9001, 6567, 9001, 6568, 9003, 6569, 9001, 6570, 9002, 6571, 9001, 6572, 9003, 6573, 9001, 6574, 9003, 6575, 9001, 6576, 9003, 6577, 9001, 6578, 9003, 6582, 9003, 6583, 9001, 6584, 9003, 6585, 9001, 6586, 9003, 6587, 9001, 6588, 9003, 6589, 9001, 6590, 9003, 6591, 9001, 6592, 9001, 6593, 9003, 6594, 9001, 6595, 9003, 6596, 9001, 6597, 9003, 6598, 9001, 6599, 9003, 6600, 9001, 6601, 9003, 6602, 9001, 6603, 9003, 6605, 9003, 6606, 9001, 6607, 9003, 6608, 9001, 6609, 9003, 6610, 9001, 6611, 9001, 6612, 9003, 6613, 9001, 6614, 9003, 6615, 9001, 6616, 9003, 6617, 9001, 6618, 9003, 6633, 9003, 6646, 9001, 6668, 9102, 6703, 9001, 6706, 9102, 6783, 9102, 6784, 9001, 6785, 9002, 6786, 9001, 6787, 9002, 6788, 9001, 6789, 9002, 6790, 9001, 6791, 9002, 6792, 9001, 6793, 9002, 6794, 9001, 6795, 9002, 6796, 9001, 6797, 9002, 6798, 9001, 6799, 9002, 6800, 9001, 6801, 9002, 6802, 9001, 6803, 9002, 6804, 9001, 6805, 9002, 6806, 9001, 6807, 9002, 6808, 9001, 6809, 9002, 6810, 9001, 6811, 9002, 6812, 9001, 6813, 9002, 6814, 9001, 6815, 9002, 6816, 9001, 6817, 9002, 6818, 9001, 6819, 9002, 6820, 9001, 6821, 9002, 6822, 9001, 6823, 9002, 6824, 9001, 6825, 9002, 6826, 9001, 6827, 9002, 6828, 9001, 6829, 9002, 6830, 9001, 6831, 9002, 6832, 9001, 6833, 9002, 6834, 9001, 6835, 9002, 6836, 9001, 6837, 9002, 6838, 9001, 6839, 9002, 6840, 9001, 6841, 9002, 6842, 9001, 6843, 9002, 6844, 9001, 6845, 9002, 6846, 9001, 6847, 9002, 6848, 9001, 6849, 9002, 6850, 9001, 6851, 9002, 6852, 9001, 6853, 9002, 6854, 9001, 6855, 9002, 6856, 9001, 6857, 9002, 6858, 9001, 6859, 9002, 6860, 9001, 6861, 9002, 6862, 9001, 6863, 9002, 6867, 9001, 6868, 9002, 6870, 9001, 6875, 9001, 6876, 9001, 6879, 9001, 6880, 9003, 6884, 9001, 6885, 9002, 6886, 9001, 6887, 9002, 6892, 9102, 6894, 9102, 6915, 9001, 6922, 9001, 6923, 9003, 6924, 9001, 6925, 9003, 6962, 9001, 6983, 9102, 6984, 9001, 6990, 9102, 6991, 9001, 7035, 9102, 7037, 9102, 7039, 9102, 7041, 9102, 7073, 9102, 7084, 9102, 7086, 9102, 7128, 9003, 7131, 9001, 7132, 9003, 7133, 9102, 7136, 9102, 7139, 9102, 7142, 9001, 7257, 9001, 7258, 9003, 7259, 9001, 7260, 9003, 7261, 9001, 7262, 9003, 7263, 9001, 7264, 9003, 7265, 9001, 7266, 9003, 7267, 9001, 7268, 9003, 7269, 9001, 7270, 9003, 7271, 9001, 7272, 9003, 7273, 9001, 7274, 9003, 7275, 9001, 7276, 9003, 7277, 9001, 7278, 9003, 7279, 9001, 7280, 9003, 7281, 9001, 7282, 9003, 7283, 9001, 7284, 9003, 7285, 9001, 7286, 9003, 7287, 9001, 7288, 9003, 7289, 9001, 7290, 9003, 7291, 9001, 7292, 9003, 7293, 9001, 7294, 9003, 7295, 9001, 7296, 9003, 7297, 9001, 7298, 9003, 7299, 9001, 7300, 9003, 7301, 9001, 7302, 9003, 7303, 9001, 7304, 9003, 7305, 9001, 7306, 9003, 7307, 9001, 7308, 9003, 7309, 9001, 7310, 9003, 7311, 9001, 7312, 9003, 7313, 9001, 7314, 9003, 7315, 9001, 7316, 9003, 7317, 9001, 7318, 9003, 7319, 9001, 7320, 9003, 7321, 9001, 7322, 9003, 7323, 9001, 7324, 9003, 7325, 9001, 7326, 9003, 7327, 9001, 7328, 9003, 7329, 9001, 7330, 9003, 7331, 9001, 7332, 9003, 7333, 9001, 7334, 9003, 7335, 9001, 7336, 9003, 7337, 9001, 7338, 9003, 7339, 9001, 7340, 9003, 7341, 9001, 7342, 9003, 7343, 9001, 7344, 9003, 7345, 9001, 7346, 9003, 7347, 9001, 7348, 9003, 7349, 9001, 7350, 9003, 7351, 9001, 7352, 9003, 7353, 9001, 7354, 9003, 7355, 9001, 7356, 9003, 7357, 9001, 7358, 9003, 7359, 9001, 7360, 9003, 7361, 9001, 7362, 9003, 7363, 9001, 7364, 9003, 7365, 9001, 7366, 9003, 7367, 9001, 7368, 9003, 7369, 9001, 7370, 9003, 7373, 9102, 7683, 9102, 7798, 9102, 7844, 9102, 7877, 9001, 7878, 9001, 7881, 9102, 7882, 9001, 7883, 9001, 7886, 9102, 7887, 9001, 7899, 9001, 7991, 9001, 7992, 9001, 8035, 9003, 8036, 9003, 8042, 9102, 8043, 9102, 8058, 9001, 8059, 9001, 8082, 9001, 8083, 9001, 8086, 9102, 8088, 9001, 8090, 9001, 8091, 9003, 8092, 9001, 8093, 9003, 8095, 9001, 8096, 9003, 8097, 9001, 8098, 9003, 8099, 9001, 8100, 9003, 8101, 9001, 8102, 9003, 8103, 9001, 8104, 9003, 8105, 9001, 8106, 9003, 8107, 9001, 8108, 9003, 8109, 9001, 8110, 9003, 8111, 9001, 8112, 9003, 8113, 9001, 8114, 9003, 8115, 9001, 8116, 9003, 8117, 9001, 8118, 9003, 8119, 9001, 8120, 9003, 8121, 9001, 8122, 9003, 8123, 9001, 8124, 9003, 8125, 9001, 8126, 9003, 8127, 9001, 8128, 9003, 8129, 9001, 8130, 9003, 8131, 9001, 8132, 9003, 8133, 9001, 8134, 9003, 8135, 9001, 8136, 9003, 8137, 9001, 8138, 9003, 8139, 9001, 8140, 9003, 8141, 9001, 8142, 9003, 8143, 9001, 8144, 9003, 8145, 9001, 8146, 9003, 8147, 9001, 8148, 9003, 8149, 9001, 8150, 9003, 8151, 9001, 8152, 9003, 8153, 9001, 8154, 9003, 8155, 9001, 8156, 9003, 8157, 9001, 8158, 9003, 8159, 9001, 8160, 9003, 8161, 9001, 8162, 9003, 8163, 9001, 8164, 9003, 8165, 9001, 8166, 9003, 8167, 9001, 8168, 9003, 8169, 9001, 8170, 9003, 8171, 9001, 8172, 9003, 8173, 9001, 8177, 9003, 8179, 9001, 8180, 9003, 8181, 9001, 8182, 9003, 8184, 9001, 8185, 9003, 8187, 9001, 8189, 9003, 8191, 9001, 8193, 9003, 8196, 9001, 8197, 9003, 8198, 9001, 8200, 9003, 8201, 9001, 8202, 9003, 8203, 9001, 8204, 9003, 8205, 9001, 8206, 9003, 8207, 9001, 8208, 9003, 8209, 9001, 8210, 9003, 8212, 9001, 8213, 9003, 8214, 9001, 8216, 9003, 8218, 9001, 8220, 9003, 8222, 9001, 8224, 9003, 8225, 9001, 8226, 9003, 8232, 9102, 8237, 9102, 8240, 9102, 8246, 9102, 8249, 9102, 8252, 9102, 8255, 9102, 8311, 9001, 8312, 9002, 8313, 9001, 8314, 9002, 8315, 9001, 8316, 9002, 8317, 9001, 8318, 9002, 8319, 9001, 8320, 9002, 8321, 9001, 8322, 9002, 8323, 9001, 8324, 9002, 8325, 9001, 8326, 9002, 8327, 9001, 8328, 9002, 8329, 9001, 8330, 9002, 8331, 9001, 8332, 9002, 8333, 9001, 8334, 9002, 8335, 9001, 8336, 9002, 8337, 9001, 8338, 9002, 8339, 9001, 8340, 9002, 8341, 9001, 8342, 9002, 8343, 9001, 8344, 9002, 8345, 9001, 8346, 9002, 8347, 9001, 8348, 9002, 8351, 9102, 8352, 9001, 8353, 9001, 8379, 9001, 8380, 9003, 8381, 9001, 8382, 9003, 8383, 9001, 8384, 9003, 8385, 9001, 8387, 9003, 8391, 9001, 8395, 9001, 8427, 9102, 8428, 9102, 8431, 9102, 8433, 9001, 8441, 9001, 8455, 9001, 8456, 9001, 8531, 9003, 8545, 9102, 8682, 9001, 8685, 9102, 8687, 9001, 8692, 9001, 8693, 9001, 8694, 9102, 8699, 9102, 8818, 9102, 8826, 9001, 8860, 9102, 8888, 9102, 8900, 9102, 8902, 9102, 8903, 9001, 8907, 9102, 8949, 9102, 8950, 9001, 8951, 9001, 9003, 9102, 9006, 9102, 9009, 9102, 9012, 9102, 9014, 9102, 9017, 9102, 9019, 9102, 9039, 9001, 9040, 9001, 9140, 9102, 9141, 9001, 9148, 9102, 9149, 9001, 9150, 9001, 9153, 9102, 9191, 9001, 9221, 9001, 9222, 9001, 20499, 9001, 20538, 9001, 20539, 9001, 20790, 9001, 20791, 9001, 21291, 9001, 21292, 9001, 21500, 9001, 21817, 9001, 21818, 9001, 22032, 9001, 22033, 9001, 22091, 9001, 22092, 9001, 22332, 9001, 22391, 9001, 22392, 9001, 22700, 9001, 22770, 9001, 22780, 9001, 22832, 9001, 23090, 9001, 23095, 9001, 23239, 9001, 23240, 9001, 23700, 9001, 24047, 9001, 24048, 9001, 24100, 9005, 24200, 9001, 24305, 9001, 24306, 9001, 24382, 9084, 24383, 9001, 24500, 9001, 24547, 9001, 24548, 9001, 24571, 9062, 24600, 9001, 25e3, 9001, 25231, 9001, 25884, 9001, 25932, 9001, 26237, 9001, 26331, 9001, 26332, 9001, 26591, 9001, 26592, 9001, 26632, 9001, 26692, 9001, 27120, 9001, 27200, 9001, 27291, 9040, 27292, 9040, 27429, 9001, 27493, 9001, 27500, 9001, 27700, 9001, 28232, 9001, 28600, 9001, 28991, 9001, 28992, 9001, 29101, 9001, 29220, 9001, 29221, 9001, 29333, 9001, 29635, 9001, 29636, 9001, 29701, 9001, 29738, 9001, 29739, 9001, 29849, 9001, 29850, 9001, 29871, 9042, 29872, 9041, 29873, 9001, 30200, 9039, 30339, 9001, 30340, 9001, 30791, 9001, 30792, 9001, 31028, 9001, 31121, 9001, 31154, 9001, 31170, 9001, 31171, 9001, 31279, 9001, 31370, 9001, 31528, 9001, 31529, 9001, 31600, 9001, 31700, 9001, 31838, 9001, 31839, 9001, 31901, 9001, 32030, 9003, 32031, 9003, 32061, 9001, 32062, 9001, 32098, 9001, 32099, 9003, 32100, 9001, 32104, 9001, 32161, 9001, 32766, 9001, 37202, 9102, 37203, 9102, 37206, 9102, 37207, 9102, 37218, 9102, 37221, 9102, 37225, 9105, 37240, 9102, 37241, 9102, 37243, 9102, 37245, 9102, 37249, 9102, 37257, 9102, 37260, 9102, 53048, 9001, 53049, 9001, 54034, 9001, 54090, 9001, 54091, 9001, 65061, 9003, 65062, 9003, 65161, 9001, 102041, 9003, 102064, 9085, 102068, 109030, 102069, 109031, 102093, 9001, 102094, 9001, 102118, 9003, 102120, 9003, 102121, 9003, 102122, 9001, 102150, 9001, 102168, 9001, 102204, 9001, 102212, 9001, 102213, 9001, 102215, 9001, 102216, 9001, 102217, 9003, 102218, 9001, 102219, 9003, 102220, 9003, 102247, 9001, 102299, 9001, 102306, 9001, 102319, 9001, 102328, 9001, 102329, 9001, 102359, 9001, 102360, 9001, 102440, 9001, 102448, 9001, 102464, 9003, 102465, 9003, 102491, 9001, 102492, 9001, 102498, 9001, 102499, 9001, 102525, 9003, 102526, 9003, 102528, 9003, 102529, 9003, 102589, 9003, 102598, 9001, 102599, 9003, 102600, 9003, 102604, 9003, 102661, 9003, 102662, 9003, 102664, 9003, 102665, 9003, 102705, 9003, 102720, 9003, 102721, 9003, 102726, 9003, 102727, 9003, 102733, 9003, 102761, 9003, 102766, 9003, 102974, 9003, 103228, 9001, 103229, 9001, 103230, 9003, 103231, 9003, 103250, 9001, 103251, 9003, 103252, 9001, 103253, 9003, 103260, 9001, 103261, 9001, 103262, 9003, 103263, 9003, 103270, 9001, 103271, 9001, 103272, 9003, 103273, 9003, 103274, 9001, 103275, 9001, 103276, 9003, 103277, 9003, 103278, 9001, 103279, 9001, 103280, 9003, 103281, 9003, 103282, 9001, 103283, 9001, 103284, 9003, 103285, 9003, 103286, 9001, 103287, 9003, 103288, 9001, 103289, 9003, 103290, 9001, 103291, 9003, 103292, 9001, 103293, 9001, 103294, 9003, 103295, 9003, 103296, 9001, 103297, 9001, 103298, 9003, 103299, 9003, 103300, 9001, 103307, 9001, 103313, 9001, 103319, 9001, 103322, 9001, 103323, 9001, 103332, 9001, 103335, 9001, 103338, 9001, 103340, 9001, 103351, 9001, 103358, 9001, 103370, 9001, 103376, 9003, 103377, 9001, 103378, 9001, 103379, 9003, 103380, 9003, 103393, 9001, 103394, 9001, 103395, 9003, 103396, 9003, 103400, 9003, 103407, 9003, 103413, 9003, 103419, 9003, 103422, 9003, 103423, 9003, 103432, 9003, 103435, 9003, 103438, 9003, 103440, 9003, 103451, 9003, 103458, 9003, 103470, 9003, 103472, 9001, 103473, 9002, 103474, 9001, 103475, 9003, 103482, 9001, 103483, 9003, 103484, 9001, 103485, 9003, 103500, 9001, 103501, 9003, 103502, 9001, 103503, 9001, 103504, 9002, 103505, 9002, 103506, 9001, 103507, 9001, 103508, 9003, 103509, 9003, 103510, 9001, 103511, 9001, 103512, 9003, 103513, 9003, 103514, 9001, 103515, 9003, 103516, 9001, 103517, 9003, 103518, 9001, 103519, 9003, 103520, 9001, 103521, 9002, 103522, 9001, 103523, 9001, 103524, 9003, 103525, 9003, 103526, 9001, 103527, 9003, 103561, 9003, 103562, 9003, 103563, 9001, 103564, 9001, 103565, 9003, 103566, 9003, 103567, 9001, 103568, 9001, 103569, 9003, 103570, 9003, 103585, 9003, 103586, 9001, 103587, 9003, 103588, 9002, 103589, 9001, 103590, 9003, 103591, 9002, 103592, 9001, 103593, 9003, 103594, 9002, 103695, 9003, 103846, 9001, 103946, 9003, 104009, 9102, 104017, 9102, 104018, 9102, 104022, 9102, 104024, 9102, 104027, 9102, 104047, 9102, 104050, 9102, 104105, 9102, 104106, 9102, 104109, 9102, 104112, 9102, 104113, 9102, 104134, 9102, 104135, 9102, 104138, 9102, 104139, 9105, 104140, 9105, 104808, 9102] };
      e.wr = function() {
        function r() {
        }
        return r.Sy = function(n) {
          r.xp === !1 && r.yt();
          var t = r.FQ(n);
          if (t == -1) {
            var i = r.Bx(n);
            i != n && (t = r.Sy(i));
          }
          return t == -1 && (i = r.FK(n)) != n && (t = r.Sy(i)), t;
        }, r.FQ = function(n) {
          return r.Fw[n] !== void 0 ? r.Fw[n] : -1;
        }, r.CQ = function(n) {
          r.xp === !1 && r.yt();
          var t = r.nF(n);
          if (t == 1e38) {
            var i = r.Bx(n);
            if (i != n && (t = r.nF(i)), t == 1e38) return 1e-10;
          }
          return t;
        }, r.ZS = function(n) {
          if (r.Is[n] !== void 0) return !0;
          var t = r.Bx(n);
          return t != n && r.Is[t] !== void 0;
        }, r.aT = function(n) {
          if (r.xo[n] !== void 0) return !0;
          var t = r.Bx(n);
          return t != n && r.xo[t] !== void 0;
        }, r.nF = function(n) {
          return r.xp === !1 && r.yt(), r.Is[n] !== void 0 ? r.Is[n] : r.xo[n] !== void 0 ? r.xo[n] : 1e38;
        }, r.FK = function(n) {
          return r.xp === !1 && r.yt(), r.WA[n] !== void 0 ? r.WA[n] : n;
        }, r.Bx = function(n) {
          return r.xp === !1 && r.yt(), r.XA[n] !== void 0 ? r.XA[n] : n;
        }, r.yt = function() {
          for (var n, t = v, i = 0; i < t.pcsid.length; i += 2) r.xo[t.pcsid[i]] = t.pcstol[2 * t.pcsid[i + 1] + 1];
          for (i = 0; i < t.pcsidc.length; i += 1) for (var h = (n = t.pcsidc[i])[0]; h <= n[1]; h++) r.xo[h] = t.pcstol[2 * n[2] + 1];
          for (i = 0; i < t.gcsid.length; i += 2) r.Is[t.gcsid[i]] = t.gcstol[2 * t.gcsid[i + 1] + 1];
          for (i = 0; i < t.gcsidc.length; i += 1) for (h = (n = t.gcsidc[i])[0]; h <= n[1]; h++) r.xo[h] = t.gcstol[2 * n[2] + 1];
          for (i = 0; i < f.c.length; i += 1) for (h = (n = f.c[i])[0]; h <= n[1]; h++) r.Fw[h] = n[2];
          for (i = 0; i < f.nc.length; i += 2) r.Fw[f.nc[i]] = f.nc[i + 1];
          for (f = null, i = 0; i < t.newtoold.length; i += 2) r.WA[t.newtoold[i + 1]] = t.newtoold[i], r.XA[t.newtoold[i]] = t.newtoold[i + 1];
          v = null, r.xp = !0;
        }, r.xp = !1, r.Is = [], r.xo = [], r.WA = [], r.XA = [], r.Fw = [], r;
      }();
    }(k || (k = {})), function(e) {
      function v(r) {
        return r.length === 0 ? '""' : r[0] == '"' || r[0] == "." || "0" <= r[0] && "9" >= r[0] ? r : '"' + r.trim() + '"';
      }
      var f = [];
      e.XC = function() {
        function r() {
        }
        return r.EQ = function(n) {
          try {
            for (var t = 0; t < f.length; t++) if (f[t].wkttext === n) return f[t].unit;
            for (var i, h = t = "", s = !1, o = 0; o < n.length; o++) {
              var a = n[o];
              s === !0 ? a == '"' ? n[o + 1] == '"' ? t += a : s = s = !1 : t += a : /[\s]/.test(a) || (a == "," ? (h = t !== "" ? h + (v(t) + ",") : h + ",", t = "") : a == ")" || a == "]" ? (h = t !== "" ? h + (v(t) + "]}") : h + "]}", t = "") : a == "(" || a == "[" ? (h += '{ "entity": "' + t.toUpperCase().trim() + '", "values":[', t = "") : a == '"' ? (s = !0, t = "") : t += a);
            }
            i = JSON.parse(h);
            var u = r.mF(i);
            if (u === null) return null;
            for (i = null, a = 0; a < u.values.length; a++) if (typeof u.values[a] == "object" && (u.values[a].entity === "UNIT" || u.values[a].entity === "ANGLEUNIT" || u.values[a].entity === "LENGTHUNIT")) {
              i = u.values[a];
              break;
            }
            if (i === null) return null;
            var c = e.Tc.ZO(u.entity === "GEOGCS" || u.entity === "GEOGCRS" ? 1 : 0, i.values[1], i.values[2]);
            return f.push({ wkttext: n, unit: c }), 10 < f.length && f.shift(), c;
          } catch {
            return null;
          }
        }, r.mF = function(n) {
          if (n === null) return null;
          switch (n.entity) {
            case "GEOGCRS":
            case "GEOGCS":
            case "PROJCRS":
            case "PROJCS":
              return n;
          }
          for (var t = [], i = 0; i < n.values.length; i++) if (typeof n.values[i] == "object" && n.values[i].entity !== void 0) switch (n.values[i].entity) {
            case "GEOGCRS":
            case "GEOGCS":
            case "PROJCRS":
            case "PROJCS":
              return n.values[i];
            default:
              t.push(n.values[i]);
          }
          for (n = 0; n < t.length; n++) if ((i = r.mF(t[n])) !== null) return i;
          return null;
        }, r.DQ = function(n) {
          var t = -1;
          if (n != null && 0 < n.length) {
            var i = n.search(/PROJCR?S/);
            if (0 <= i) {
              var h = 0;
              if (0 <= (i = n.lastIndexOf("UNIT")) && 0 < (i = n.indexOf(",", i + 4))) {
                i++;
                var s = n.indexOf("]", i + 1);
                if (0 < s) try {
                  h = parseFloat(n.substring(i, s));
                } catch {
                  h = 0;
                }
              }
              0 < h && (t = 1e-3 / h);
            } else if (0 <= (i = n.search(/GEOGCR?S/))) {
              var o = 0;
              if (h = 0, (i = n.indexOf("SPHEROID", i + 6)) === -1 && (i = n.indexOf("ELLIPSOID", i + 7)), 0 < i && 0 < (i = n.indexOf(",", i + 8))) {
                if (i++, 0 < (s = n.indexOf(",", i + 1))) try {
                  o = parseFloat(n.substring(i, s));
                } catch {
                  o = 0;
                }
                if (0 < o && ((i = n.lastIndexOf("ANGLEUNIT", s + 1)) === -1 && (i = n.lastIndexOf("UNIT", s + 1)), 0 <= i && 0 < (i = n.indexOf(",", i + 4)) && (i++, 0 < (s = n.indexOf("]", i + 1))))) try {
                  h = parseFloat(n.substring(i, s));
                } catch {
                  h = 0;
                }
              }
              0 < o && 0 < h && (t = 1e-3 / (o * h));
            }
          }
          return t;
        }, r;
      }();
    }(k || (k = {})), function(e) {
      var v;
      (v = e.eL || (e.eL = {}))[v.NONE = 0] = "NONE", v[v.LINEAR = 1] = "LINEAR", v[v.ANGULAR = 2] = "ANGULAR", function(r) {
        r[r.enumFloat = 0] = "enumFloat", r[r.enumDouble = 1] = "enumDouble", r[r.enumInt32 = 2] = "enumInt32", r[r.enumInt64 = 3] = "enumInt64", r[r.enumInt8 = 4] = "enumInt8", r[r.enumInt16 = 5] = "enumInt16";
      }(e.QL || (e.QL = {})), function(r) {
        r[r.POSITION = 0] = "POSITION", r[r.Z = 1] = "Z", r[r.M = 2] = "M", r[r.ID = 3] = "ID", r[r.NORMAL = 4] = "NORMAL", r[r.TEXTURE1D = 5] = "TEXTURE1D", r[r.TEXTURE2D = 6] = "TEXTURE2D", r[r.TEXTURE3D = 7] = "TEXTURE3D", r[r.ID2 = 8] = "ID2", r[r.MAXSEMANTICS = 10] = "MAXSEMANTICS";
      }(e.Ih || (e.Ih = {}));
      var f = function() {
        function r(n, t) {
          if (this.Vs = this.Ae = null, this.Oq = this.Aa = 0, this.uh = this.bg = null, this.wl = 0, t !== void 0) {
            for (this.Aa = t.Aa, this.Oq = t.Oq, this.bg = t.bg.slice(0), this.uh = t.uh.slice(0), this.wl = t.wl, this.Vs = [], n = t = 0; n < this.Aa; n++) this.Vs[n] = t, t += r.Va(this.bg[n]);
            for (this.Oq = t, this.Ae = [], n = 0; n < this.Aa; n++) {
              t = r.Va(this.kd(n));
              for (var i = r.se(this.kd(n)), h = 0; h < t; h++) this.Ae[this.Vs[n] + h] = i;
            }
          } else this.Oq = this.Aa = 0;
        }
        return r.prototype.kd = function(n) {
          if (0 > n || n > this.Aa) throw e.i.N();
          return this.bg[n];
        }, r.prototype.Pf = function(n) {
          return this.uh[n];
        }, r.lz = function(n) {
          return r.JM[n];
        }, r.Tp = function(n) {
          return r.SM[n];
        }, r.Va = function(n) {
          return r.rM[n];
        }, r.prototype.hasAttribute = function(n) {
          return 0 <= this.uh[n];
        }, r.prototype.iG = function() {
          return this.hasAttribute(1);
        }, r.se = function(n) {
          return r.eD[n];
        }, r.prototype.LR = function(n) {
          return this.Vs[n];
        }, r.DG = function(n, t) {
          return r.eD[n] === t;
        }, r.prototype.Nb = function(n) {
          return this === n;
        }, r.prototype.An = function() {
          for (var n = e.O.Th(this.bg[0]), t = 1; t < this.Aa; t++) n = e.O.Th(this.bg[t], n);
          return n;
        }, r.prototype.$j = function(n) {
          return this.Vs[n];
        }, r.prototype.cc = function() {
          return this.wl;
        }, r.prototype.Ed = function(n) {
          return this.bg[n];
        }, r.eD = [0, 0, NaN, 0, 0, 0, 0, 0, 0], r.JM = [1, 1, 1, 0, 2, 1, 1, 1, 0], r.SM = [1, 1, 1, 2, 0, 0, 0, 0, 2], r.rM = [2, 1, 1, 1, 3, 1, 2, 3, 2], r;
      }();
      e.ra = f;
    }(k || (k = {})), function(e) {
      function v(s, o, a) {
        var u = o - (s = new h(s)).e, c = s.c;
        for (c.length > ++o && f(s, u, h.eu), c[0] ? a ? u = o : (c = s.c, u = s.e + u + 1) : ++u; c.length < u; c.push(0)) ;
        return u = s.e, a === 1 || a && (o <= u || u <= n) ? (0 > s.Bd && c[0] ? "-" : "") + (1 < c.length ? c[0] + "." + c.join("").slice(1) : c[0]) + (0 > u ? "e" : "e+") + u : s.toString();
      }
      function f(s, o, a, u) {
        var c = s.c, l = s.e + o + 1;
        if (a === 1 ? u = 5 <= c[l] : a === 2 ? u = 5 < c[l] || c[l] == 5 && (u || 0 > l || c[l + 1] !== void 0 || 1 & c[l - 1]) : a === 3 ? u = u || c[l] !== void 0 || 0 > l : (u = !1, a !== 0 && r("!Big.RM!")), 1 > l || !c[0]) u ? (s.e = -o, s.c = [1]) : s.c = [s.e = 0];
        else {
          if (c.length = l--, u) for (; 9 < ++c[l]; ) c[l] = 0, l-- || (++s.e, c.unshift(1));
          for (l = c.length; !c[--l]; c.pop()) ;
        }
        return s;
      }
      function r(s) {
        throw (s = Error(s)).name = "BigError", s;
      }
      var n = -7, t = 21, i = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, h = function() {
        function s(o) {
          if (o instanceof s) this.Bd = o.Bd, this.e = o.e, this.c = o.c.slice();
          else {
            var a, u, c;
            for (o === 0 && 0 > 1 / o ? o = "-0" : i.test(o += "") || r(NaN), this.Bd = o.charAt(0) == "-" ? (o = o.slice(1), -1) : 1, -1 < (a = o.indexOf(".")) && (o = o.replace(".", "")), 0 < (u = o.search(/e/i)) ? (0 > a && (a = u), a += +o.slice(u + 1), o = o.substring(0, u)) : 0 > a && (a = o.length), u = 0; o.charAt(u) == "0"; u++) ;
            if (u == (c = o.length)) this.c = [this.e = 0];
            else {
              for (; o.charAt(--c) == "0"; ) ;
              for (this.e = a - u - 1, this.c = [], a = 0; u <= c; this.c[a++] = +o.charAt(u++)) ;
            }
          }
        }
        return s.prototype.abs = function() {
          var o = new s(this);
          return o.Bd = 1, o;
        }, s.prototype.cmp = function(o) {
          var a = this.c, u = (o = new s(o)).c, c = this.Bd, l = o.Bd, p = this.e, y = o.e;
          if (!a[0] || !u[0]) return a[0] ? c : u[0] ? -l : 0;
          if (c != l) return c;
          if (o = 0 > c, p != y) return p > (y ^ o) ? 1 : -1;
          for (c = -1, l = (p = a.length) < (y = u.length) ? p : y; ++c < l; ) if (a[c] != u[c]) return a[c] > (u[c] ^ o) ? 1 : -1;
          return p == y ? 0 : p > (y ^ o) ? 1 : -1;
        }, s.prototype.jm = function(o) {
          var a = this.c, u = (o = new s(o)).c, c = this.Bd == o.Bd ? 1 : -1, l = s.rr;
          if ((l !== ~~l || 0 > l || 1e6 < l) && r("!Big.DP!"), !a[0] || !u[0]) return a[0] == u[0] && r(NaN), u[0] || r(c / 0), new s(0 * c);
          var p, y, d = u.slice(), g = p = u.length, b = a.length, x = a.slice(0, p), m = x.length, w = o, j = w.c = [], M = 0, A = l + (w.e = this.e - o.e) + 1;
          for (w.Bd = c, c = 0 > A ? 0 : A, d.unshift(0); m++ < p; x.push(0)) ;
          do {
            for (y = 0; 10 > y; y++) {
              if (p != (m = x.length)) var z = p > m ? 1 : -1;
              else {
                var N = -1;
                for (z = 0; ++N < p; ) if (u[N] != x[N]) {
                  z = u[N] > x[N] ? 1 : -1;
                  break;
                }
              }
              if (!(0 > z)) break;
              for (o = m == p ? u : d; m; ) {
                if (x[--m] < o[m]) {
                  for (N = m; N && !x[--N]; x[N] = 9) ;
                  --x[N], x[m] += 10;
                }
                x[m] -= o[m];
              }
              for (; !x[0]; x.shift()) ;
            }
            j[M++] = z ? y : ++y, x[0] && z ? x[m] = a[g] || 0 : x = [a[g]];
          } while ((g++ < b || x[0] !== void 0) && c--);
          return j[0] || M == 1 || (j.shift(), w.e--), M > A && f(w, l, s.eu, x[0] !== void 0), w;
        }, s.prototype.fS = function() {
          return 0 < this.cmp(0);
        }, s.prototype.nT = function() {
          return 0 > this.cmp(0);
        }, s.prototype.jt = function(o) {
          var a, u = this.Bd, c = (o = new s(o)).Bd;
          if (u != c) return o.Bd = -c, this.tI(o);
          var l = this.c.slice(), p = this.e, y = o.c, d = o.e;
          if (!l[0] || !y[0]) return y[0] ? (o.Bd = -c, o) : new s(l[0] ? this : 0);
          if (u = p - d) {
            for ((a = 0 > u) ? (u = -u, p = l) : (d = p, p = y), p.reverse(), c = u; c--; p.push(0)) ;
            p.reverse();
          } else for (p = ((a = l.length < y.length) ? l : y).length, u = c = 0; c < p; c++) if (l[c] != y[c]) {
            a = l[c] < y[c];
            break;
          }
          if (a && (p = l, l = y, y = p, o.Bd = -o.Bd), 0 < (c = (p = y.length) - (a = l.length))) for (; c--; l[a++] = 0) ;
          for (c = a; p > u; ) {
            if (l[--p] < y[p]) {
              for (a = p; a && !l[--a]; l[a] = 9) ;
              --l[a], l[p] += 10;
            }
            l[p] -= y[p];
          }
          for (; l[--c] == 0; l.pop()) ;
          for (; l[0] == 0; ) l.shift(), --d;
          return l[0] || (o.Bd = 1, l = [d = 0]), o.c = l, o.e = d, o;
        }, s.prototype.tI = function(o) {
          var a = this.Bd, u = (o = new s(o)).Bd;
          if (a != u) return o.Bd = -u, this.jt(o);
          u = this.e;
          var c = this.c, l = o.e, p = o.c;
          if (!c[0] || !p[0]) return p[0] ? o : new s(c[0] ? this : 0 * a);
          if (c = c.slice(), a = u - l) {
            for (0 < a ? (l = u, u = p) : (a = -a, u = c), u.reverse(); a--; u.push(0)) ;
            u.reverse();
          }
          for (0 > c.length - p.length && (u = p, p = c, c = u), a = p.length, u = 0; a; ) u = (c[--a] = c[a] + p[a] + u) / 10 | 0, c[a] %= 10;
          for (u && (c.unshift(u), ++l), a = c.length; c[--a] == 0; c.pop()) ;
          return o.c = c, o.e = l, o;
        }, s.prototype.pow = function(o) {
          var a = this, u = new s(1), c = u, l = 0 > o;
          for ((o !== ~~o || -1e6 > o || 1e6 < o) && r("!pow!"), o = l ? -o : o; 1 & o && (c = c.lr(a)), o >>= 1; ) a = a.lr(a);
          return l ? u.jm(c) : c;
        }, s.prototype.round = function(o, a) {
          var u = this;
          return o == null ? o = 0 : (o !== ~~o || 0 > o || 1e6 < o) && r("!round!"), f(u = new s(u), o, a ?? s.eu), u;
        }, s.prototype.sqrt = function() {
          var o = this.c, a = this.Bd, u = this.e, c = new s("0.5");
          if (!o[0]) return new s(this);
          0 > a && r(NaN), (a = Math.sqrt(this.toString())) == 0 || a == 1 / 0 ? ((a = o.join("")).length + u & 1 || (a += "0"), (o = new s(Math.sqrt(a).toString())).e = ((u + 1) / 2 | 0) - (0 > u || 1 & u)) : o = new s(a.toString()), a = o.e + (s.rr += 4);
          do
            u = o, o = c.lr(u.tI(this.jm(u)));
          while (u.c.slice(0, a).join("") !== o.c.slice(0, a).join(""));
          return f(o, s.rr -= 4, s.eu), o;
        }, s.prototype.lr = function(o) {
          var a = this.c, u = (o = new s(o)).c, c = a.length, l = u.length, p = this.e, y = o.e;
          if (o.Bd = this.Bd == o.Bd ? 1 : -1, !a[0] || !u[0]) return new s(0 * o.Bd);
          if (o.e = p + y, c < l) {
            var d = a;
            a = u, u = d, y = c, c = l, l = y;
          }
          for (d = Array(y = c + l); y--; d[y] = 0) ;
          for (p = l; p--; ) {
            for (l = 0, y = c + p; y > p; ) l = d[y] + u[p] * a[y - p - 1] + l, d[y--] = l % 10, l = l / 10 | 0;
            d[y] = (d[y] + l) % 10;
          }
          for (l && ++o.e, d[0] || d.shift(), p = d.length; !d[--p]; d.pop()) ;
          return o.c = d, o;
        }, s.prototype.toString = function() {
          var o = this.e, a = this.c.join(""), u = a.length;
          if (o <= n || o >= t) a = a.charAt(0) + (1 < u ? "." + a.slice(1) : "") + (0 > o ? "e" : "e+") + o;
          else if (0 > o) {
            for (; ++o; a = "0" + a) ;
            a = "0." + a;
          } else if (0 < o) if (++o > u) for (o -= u; o--; a += "0") ;
          else o < u && (a = a.slice(0, o) + "." + a.slice(o));
          else 1 < u && (a = a.charAt(0) + "." + a.slice(1));
          return 0 > this.Bd && this.c[0] ? "-" + a : a;
        }, s.prototype.toExponential = function(o) {
          return o == null ? o = this.c.length - 1 : (o !== ~~o || 0 > o || 1e6 < o) && r("!toExp!"), v(this, o, 1);
        }, s.prototype.toFixed = function(o) {
          var a = n, u = t;
          if (n = -(t = 1 / 0), o == null) var c = this.toString();
          else o === ~~o && 0 <= o && 1e6 >= o && (c = v(this, this.e + o), 0 > this.Bd && this.c[0] && 0 > c.indexOf("-") && (c = "-" + c));
          return n = a, t = u, c || r("!toFix!"), c;
        }, s.prototype.toPrecision = function(o) {
          return o == null ? this.toString() : ((o !== ~~o || 1 > o || 1e6 < o) && r("!toPre!"), v(this, o - 1, 2));
        }, s.rr = 20, s.eu = 1, s;
      }();
      e.hp = h;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.lf = r;
        }
        return f.prototype.nr = function(r, n, t) {
          var i = new e.h(), h = new e.h(), s = this.lf;
          t.Vd(r, n, function(o, a) {
            return s.tc(2 * o, i), s.tc(2 * a, h), i.compare(h);
          });
        }, f.prototype.$p = function(r) {
          return this.lf.read(2 * r + 1);
        }, f;
      }();
      e.pi = function() {
        function f() {
        }
        return f.aq = function(r) {
          if (r.B()) return !1;
          var n = r.getType();
          return n == 1736 ? r.Ke() != 0 : n == 1607 ? (n = [!1], f.sE(r, !0, n), n[0]) : !(n != 197 && (!e.aa.yd(n) || r.BG()));
        }, f.gm = function(r) {
          var n = r.getType();
          if (n == 1736) return n = new e.Ta(r.description), r.B() || r.dD(n), n;
          if (n == 1607) return f.sE(r, !1, null);
          if (n == 197) return n = new e.Ta(r.description), r.B() || n.ad(r, !1), n;
          if (e.aa.yd(n)) {
            if (n = new e.de(r.description), !r.B() && !r.BG()) {
              var t = new e.Sa();
              r.To(t), n.add(t), r.Po(t), n.add(t);
            }
            return n;
          }
          if (e.aa.Rn(n)) return null;
          throw e.i.N();
        }, f.sE = function(r, n, t) {
          t != null && (t[0] = !1);
          var i = null;
          if (n || (i = new e.de(r.description)), !r.B()) {
            var h = new e.ia(0);
            h.Jb(2 * r.da());
            for (var s = 0, o = r.da(); s < o; s++) if (0 < r.Ja(s) && !r.Nn(s)) {
              var a = r.Ba(s);
              h.add(a), a = r.Vc(s) - 1, h.add(a);
            }
            if (0 < h.size) {
              o = new e.Xt(), s = r.ub(0), o.sort(h, 0, h.size, new v(s)), o = new e.h(), s.tc(2 * h.get(0), o), a = 0;
              for (var u = 1, c = new e.Sa(), l = new e.h(), p = 1, y = h.size; p < y; p++) if (s.tc(2 * h.get(p), l), l.qb(o)) h.get(a) > h.get(p) ? (h.set(a, 2147483647), a = p) : h.set(p, 2147483647), u++;
              else {
                if (!(1 & u)) h.set(a, 2147483647);
                else if (n) return t != null && (t[0] = !0), null;
                o.L(l), a = p, u = 1;
              }
              if (!(1 & u)) h.set(a, 2147483647);
              else if (n) return t != null && (t[0] = !0), null;
              if (!n) for (h.Vd(0, h.size, function(d, g) {
                return d - g;
              }), p = 0, y = h.size; p < y && h.get(p) != 2147483647; p++) r.ve(h.get(p), c), i.add(c);
            }
          }
          return n ? null : i;
        }, f;
      }();
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.yf = new e.ia(0), this.ys = new e.ia(0), this.EH = 1, this.Es = NaN;
        }
        return f.prototype.sort = function(r, n, t, i) {
          if (32 > t - n) i.nr(n, t, r);
          else {
            var h = !0;
            try {
              for (var s = 1 / 0, o = -1 / 0, a = n; a < t; a++) {
                var u = i.$p(r.get(a));
                u < s && (s = u), u > o && (o = u);
              }
              if (this.reset(t - n, s, o, t - n)) {
                for (a = n; a < t; a++) {
                  var c = r.get(a);
                  u = i.$p(c);
                  var l = this.zF(u);
                  this.yf.set(l, this.yf.get(l) + 1), this.ys.write(a - n, c);
                }
                var p = this.yf.get(0);
                this.yf.set(0, 0), a = 1;
                for (var y = this.yf.size; a < y; a++) {
                  var d = this.yf.get(a);
                  this.yf.set(a, p), p += d;
                }
                for (a = n; a < t; a++) {
                  c = this.ys.read(a - n), u = i.$p(c), l = this.zF(u);
                  var g = this.yf.get(l);
                  r.set(g + n, c), this.yf.set(l, g + 1);
                }
                h = !1;
              }
            } catch {
              this.yf.resize(0), this.ys.resize(0);
            }
            if (h) i.nr(n, t, r);
            else {
              for (a = t = 0, y = this.yf.size; a < y; a++) h = t, (t = this.yf.get(a)) > h && i.nr(n + h, n + t, r);
              100 < this.yf.size && (this.yf.resize(0), this.ys.resize(0));
            }
          }
        }, f.prototype.reset = function(r, n, t, i) {
          return !(2 > r || t == n) && (r = Math.min(f.hL, r), this.yf.Jb(r), this.yf.resize(r), this.yf.Wj(0, 0, this.yf.size), this.EH = n, this.ys.resize(i), this.Es = (t - n) / (r - 1), !0);
        }, f.prototype.zF = function(r) {
          return e.O.truncate((r - this.EH) / this.Es);
        }, f.hL = 65536, f;
      }();
      e.Xt = v;
    }(k || (k = {})), function(e) {
      var v, f;
      (f = v || (v = {}))[f.enum_line = 1] = "enum_line", f[f.enum_arc = 2] = "enum_arc", f[f.enum_dummy = 4] = "enum_dummy", f[f.enum_concave_dip = 8] = "enum_concave_dip", f[f.enum_connection = 3] = "enum_connection";
      var r = function() {
        function s() {
        }
        return s.Qu = function(o, a, u, c, l, p) {
          var y = new s();
          return y.Im = new e.h(), y.Vm = new e.h(), y.aw = new e.h(), y.Im.L(o), y.Vm.L(a), y.aw.L(u), y.Co = c, y.qh = l, y.sh = p, y;
        }, s.construct = function(o, a, u, c) {
          var l = new s();
          return l.Im = new e.h(), l.Vm = new e.h(), l.aw = new e.h(), l.Im.L(o), l.Vm.L(a), l.aw.Rc(), l.Co = 4, l.qh = u, l.sh = c, l;
        }, s;
      }(), n = function() {
        function s(o, a, u, c, l, p) {
          this.Yv = null, this.ya = 0, this.EA = o, this.bI = this.$H = 0, this.Ka = a, this.Mj = u, this.vk = c, this.Dq = l, this.Ub = p;
        }
        return s.prototype.next = function() {
          for (var o = new e.Sa(); ; ) {
            if (this.ya == this.EA.I()) return null;
            if (this.EA.ve(this.ya, o), this.ya++, !o.B()) break;
          }
          var a = !1;
          if (this.Yv == null && (this.$H = o.Lg(), this.bI = o.ih(), this.Yv = h.buffer(o, this.Ka, this.Mj, this.vk, this.Dq, this.Ub), a = !0), this.ya < this.EA.I()) {
            var u = new e.Da();
            this.Yv.copyTo(u);
          } else u = this.Yv;
          if (!a) {
            a = new e.Dd();
            var c = o.Lg() - this.$H;
            o = o.ih() - this.bI, a.gg(c, o), u.Oc(a);
          }
          return u;
        }, s.prototype.La = function() {
          return 0;
        }, s.prototype.qe = function() {
        }, s;
      }(), t = function() {
        function s(o, a) {
          this.Wa = o, this.ya = 0, this.oq = a;
        }
        return s.prototype.next = function() {
          var o = this.Wa.X;
          if (this.ya < o.da()) {
            var a = this.ya;
            if (this.ya++, !o.Nn(a)) for (var u = o.Na(o.Vc(a) - 1); this.ya < o.da(); ) {
              var c = o.Na(o.Ba(this.ya));
              if (o.Nn(this.ya) || c != u) break;
              u = o.Na(o.Vc(this.ya) - 1), this.ya++;
            }
            if (this.ya - a == 1) return this.Wa.kE(this.Wa.X, a, this.oq);
            for ((u = new e.Ta(this.Wa.X.description)).addPath(this.Wa.X, a, !0), a += 1; a < this.ya; a++) u.Dr(this.Wa.X, a, 0, o.rv(a), !1);
            return this.Wa.kE(u, 0, this.oq);
          }
          return null;
        }, s.prototype.La = function() {
          return 0;
        }, s.prototype.qe = function() {
        }, s;
      }(), i = function() {
        function s(o) {
          this.Wa = o, this.ya = 0;
        }
        return s.prototype.next = function() {
          var o = this.Wa.X;
          if (this.ya < o.da()) {
            var a = this.ya;
            for (o.Ir(this.ya), this.ya++; this.ya < o.da() && !(0 < o.Ir(this.ya)); ) this.ya++;
            return a == 0 && this.ya == o.da() ? this.Wa.py(o, 0, o.da()) : this.Wa.py(o, a, this.ya);
          }
          return null;
        }, s.prototype.La = function() {
          return 0;
        }, s.prototype.qe = function() {
        }, s;
      }(), h = function() {
        function s(o) {
          this.Ks = this.lw = this.Ls = this.Id = null, this.Zd = [], this.Ub = o, this.rb = this.Kv = this.JT = this.Ka = this.tA = this.ct = this.qa = 0, this.oA = this.vk = -1, this.oq = !0;
        }
        return s.buffer = function(o, a, u, c, l, p) {
          if (o == null || 0 > c) throw e.i.N();
          if (o.B()) return new e.Da(o.description);
          var y = new e.l();
          return o.xc(y), 0 < a && y.W(a, a), (p = new s(p)).Mj = u, p.X = o, p.qa = e.ta.Wd(u, y, !0), p.ct = e.ta.Wd(null, y, !0), p.Ka = a, p.JT = o.getType(), 0 >= l && (l = 96), p.rb = Math.abs(p.Ka), p.Kv = p.rb != 0 ? 1 / p.rb : 0, isNaN(c) || c == 0 ? c = 1e-5 * p.rb : c > 0.5 * p.rb && (c = 0.5 * p.rb), 12 > l && (l = 12), (o = Math.abs(a) * (1 - Math.cos(Math.PI / l))) > c ? c = o : (o = Math.PI / Math.acos(1 - c / Math.abs(a))) < l - 1 && 12 > (l = e.O.truncate(o)) && (l = 12, c = Math.abs(a) * (1 - Math.cos(Math.PI / l))), p.vk = c, p.Dq = l, p.tA = Math.min(p.ct, 0.25 * c), p.lE();
        }, s.prototype.cv = function() {
          if (this.Id == null) this.Id = [];
          else if (this.Id.length !== 0) return;
          var o = this.qE();
          o = e.O.truncate((o + 3) / 4);
          var a = 0.5 * Math.PI / o;
          this.oA = a;
          for (var u = 0; u < 4 * o; u++) this.Id.push(null);
          var c = Math.cos(a);
          a = Math.sin(a);
          var l = e.h.construct(0, 1);
          for (u = 0; u < o; u++) this.Id[u + 0 * o] = e.h.construct(l.y, -l.x), this.Id[u + 1 * o] = e.h.construct(-l.x, -l.y), this.Id[u + 2 * o] = e.h.construct(-l.y, l.x), this.Id[u + 3 * o] = l, (l = e.h.construct(l.x, l.y)).Bt(c, a);
        }, s.prototype.lE = function() {
          var o = this.X.getType();
          if (e.aa.yd(o)) return (o = new e.Ta(this.X.description)).oc(this.X, !0), this.X = o, this.lE();
          if (this.Ka <= this.qa) {
            if (!e.aa.US(o)) return new e.Da(this.X.description);
            if (0 >= this.Ka && (o = new e.l(), this.X.A(o), o.R() <= 2 * -this.Ka || o.ca() <= 2 * this.Ka)) return new e.Da(this.X.description);
          }
          switch (this.X.getType()) {
            case 33:
              return this.PN();
            case 550:
              return this.ON();
            case 1607:
              return this.RN();
            case 1736:
              return this.QN();
            case 197:
              return this.LN();
            default:
              throw e.i.Qa();
          }
        }, s.prototype.RN = function() {
          if (this.EG(this.X)) {
            var o = new e.Sa();
            this.X.ve(0, o);
            var a = new e.l();
            return this.X.A(a), o.Cb(a.sf()), this.Gu(o);
          }
          return this.X = this.WV(this.X), o = new t(this, this.oq), e.Gh.local().V(o, this.Mj, this.Ub).next();
        }, s.prototype.QN = function() {
          if (this.Ka == 0) return this.X;
          var o = e.Yl.local();
          if (this.cv(), this.X = o.V(this.X, null, !1, this.Ub), 0 > this.Ka) {
            var a = this.X;
            return a = this.py(a, 0, a.da()), o.V(a, this.Mj, !1, this.Ub);
          }
          return this.EG(this.X) ? (o = new e.Sa(), this.X.ve(0, o), a = new e.l(), this.X.A(a), o.Cb(a.sf()), this.Gu(o)) : (o = new i(this), e.Gh.local().V(o, this.Mj, this.Ub).next());
        }, s.prototype.py = function(o, a, u) {
          for (var c = new e.Da(o.description); a < u; a++) if (!(1 > o.Ja(a))) {
            var l = o.Ir(a), p = new e.l();
            if (o.Rj(a, p), 0 < this.Ka) {
              if (0 < l) if (this.FG(o, a)) l = new e.Sa(), o.ve(o.Ba(a), l), l.Cb(p.sf()), this.yu(c, l);
              else {
                var y = l = new e.Ta(o.description);
                y = e.Zt.JG(this.X, a) || this.zn(this.X, a, y, !0, 1) == 2 ? this.jE(o, a) : this.yn(l), c.add(y, !1);
              }
              else if (!(p.R() + this.qa <= 2 * this.rb || p.ca() + this.qa <= 2 * this.rb || (y = l = new e.Ta(o.description), this.zn(this.X, a, y, !0, 1), l.B()))) {
                var d = new e.l();
                for (d.K(p), d.W(this.rb, this.rb), y.tp(d), p = 1, l = (y = this.yn(l)).da(); p < l; p++) c.addPath(y, p, !0);
              }
            } else if (0 < l) {
              if (!(p.R() + this.qa <= 2 * this.rb || p.ca() + this.qa <= 2 * this.rb || (y = l = new e.Ta(o.description), this.zn(this.X, a, y, !0, -1), l.B()))) for (d = new e.l(), y.xc(d), d.W(this.rb, this.rb), y.tp(d), p = 1, l = (y = this.yn(l)).da(); p < l; p++) c.addPath(y, p, !0);
            } else for (y = l = new e.Ta(o.description), this.zn(this.X, a, y, !0, -1), p = 0, l = (y = this.yn(l)).da(); p < l; p++) c.addPath(y, p, !0);
          }
          if (0 < this.Ka) return 1 < c.da() ? c = this.yn(c) : s.kx(c);
          if (o = new e.l(), c.xc(o), c.B()) return s.kx(c);
          for (o.W(this.rb, this.rb), c.tp(o), c = this.yn(c), o = new e.Da(c.description), p = 1, l = c.da(); p < l; p++) o.addPath(c, p, !1);
          return s.kx(o);
        }, s.prototype.PN = function() {
          return this.Gu(this.X);
        }, s.prototype.Gu = function(o) {
          var a = new e.Da(this.X.description);
          return this.yu(a, o), this.sX(a);
        }, s.prototype.ON = function() {
          var o = new n(this.X, this.Ka, this.Mj, this.vk, this.Dq, this.Ub);
          return e.Gh.local().V(o, this.Mj, this.Ub).next();
        }, s.prototype.LN = function() {
          var o = new e.Da(this.X.description);
          if (0 >= this.Ka) {
            if (this.Ka == 0) o.ad(this.X, !1);
            else {
              var a = new e.Fh();
              this.X.bn(a), a.W(this.Ka, this.Ka), o.ad(a, !1);
            }
            return o;
          }
          return o.ad(this.X, !1), this.X = o, this.jE(o, 0);
        }, s.prototype.jE = function(o, a) {
          this.cv();
          var u = new e.Da(o.description), c = new e.h(), l = new e.h(), p = new e.h(), y = new e.h(), d = new e.h(), g = new e.h(), b = new e.h(), x = new e.h(), m = o.Ja(a), w = o.Ba(a), j = 0;
          for (a = o.Ja(a); j < a; j++) {
            if (o.D(w + j, l), o.D(w + (j + 1) % m, y), o.D(w + (j + 2) % m, g), b.uc(y, l), b.length() == 0 || (b.Hv(), b.normalize(), b.scale(this.rb), c.add(b, l), p.add(b, y), j == 0 ? u.Lt(c) : u.Ci(c), u.Ci(p), x.uc(g, y), x.length() == 0)) throw e.i.Qa();
            x.Hv(), x.normalize(), x.scale(this.rb), d.add(x, y), this.GD(u, y, p, d, !1);
          }
          return s.kx(u);
        }, s.prototype.kE = function(o, a, u) {
          if (this.cv(), 1 > o.Ja(a)) return null;
          if (this.FG(o, a) && 0 < this.Ka) {
            u = new e.Sa(), o.ve(o.Ba(a), u);
            var c = new e.l();
            return o.Rj(a, c), u.Cb(c.sf()), this.Gu(u);
          }
          if (c = new e.Ta(o.description), o.Nn(a)) this.zn(o, a, c, u, 1), this.zn(o, a, c, u, -1);
          else {
            var l = new e.Ta(o.description);
            l.addPath(o, a, !1), l.Dr(o, a, 0, o.rv(a), !1), this.zn(l, 0, c, u, 1);
          }
          return this.yn(c);
        }, s.prototype.Xq = function() {
          if (this.Ys++, this.Ys % 1024 == 0 && this.Ub != null && !this.Ub.progress(-1, -1)) throw e.i.fu("user_canceled");
        }, s.prototype.yn = function(o) {
          return e.Fg.Mk(o, this.ct, !0, !0, this.Ub);
        }, s.prototype.qE = function() {
          if (this.vk == 0) return this.Dq;
          var o = 1 - this.vk * Math.abs(this.Kv);
          return 4 > (o = -1 > o ? 4 : 2 * Math.PI / Math.acos(o) + 0.5) ? o = 4 : o > this.Dq && (o = this.Dq), e.O.truncate(o);
        }, s.prototype.GD = function(o, a, u, c, l) {
          this.cv();
          var p = new e.h();
          p.uc(u, a), p.scale(this.Kv);
          var y = new e.h();
          y.uc(c, a), y.scale(this.Kv), 0 > (p = Math.atan2(p.y, p.x) / this.oA) && (p = this.Id.length + p), p = this.Id.length - p, 0 > (y = Math.atan2(y.y, y.x) / this.oA) && (y = this.Id.length + y), (y = this.Id.length - y) < p && (y += this.Id.length);
          var d = e.O.truncate(y);
          y = e.O.truncate(Math.ceil(p)), (p = new e.h()).L(this.Id[y % this.Id.length]), p.Ct(this.rb, a);
          var g = 10 * this.qa;
          for (p.sub(u), p.length() < g && (y += 1), p.L(this.Id[d % this.Id.length]), p.Ct(this.rb, a), p.sub(c), p.length() < g && --d, u = d - y, u++, d = 0, y %= this.Id.length; d < u; d++, y = (y + 1) % this.Id.length) p.L(this.Id[y]), p.Ct(this.rb, a), o.Ci(p), this.Xq();
          l && o.Ci(c);
        }, s.prototype.zn = function(o, a, u, c, l) {
          var p = new e.gd(), y = p.mN(o, a);
          if (p.Gp(this.tA, !1, !1), 2 > p.I(y)) return 0 > l || (l = o, p = new e.Sa(), l.ve(l.Ba(a), p), this.yu(u, p)), 1;
          var d = p.Na(p.Xa(p.Ob(y))), g = new e.Dd();
          if (g.gg(-d.x, -d.y), p.Oc(g), c && (this.tQ(p, y, l), 2 > p.I(y))) return 0 > l || (l = o, p = new e.Sa(), l.ve(l.Ba(a), p), this.yu(u, p)), 1;
          this.Zd.length = 0;
          var b = p.Ob(y);
          a = p.Xa(b);
          var x = l == 1 ? p.Ma(a) : p.U(a);
          o = l == 1 ? p.U(a) : p.Ma(a);
          var m = !0;
          c = new e.h(), y = new e.h();
          var w = new e.h(), j = new e.h(), M = new e.h(), A = new e.h(), z = new e.h(), N = new e.h(), I = new e.h(), C = new e.h(), T = this.rb;
          b = p.Ja(b);
          for (var D = 0; D < b; D++) p.D(o, y), m && (p.D(a, c), p.D(x, w), N.uc(c, w), N.normalize(), C.MG(N), C.scale(T), j.add(C, c)), z.uc(y, c), z.normalize(), I.MG(z), I.scale(T), M.add(c, I), x = N.wi(z), m = N.Qh(z), 0 > x || 0 > m && x == 0 ? this.Zd.push(r.Qu(j, M, c, 2, this.Zd.length + 1, this.Zd.length - 1)) : j.qb(M) || (this.Zd.push(r.construct(j, c, this.Zd.length + 1, this.Zd.length - 1, "dummy")), this.Zd.push(r.construct(c, M, this.Zd.length + 1, this.Zd.length - 1, "dummy"))), A.add(y, I), this.Zd.push(r.Qu(M, A, c, 1, this.Zd.length + 1, this.Zd.length - 1)), j.L(A), C.L(I), w.L(c), c.L(y), N.L(z), x = a, a = o, m = !1, o = l == 1 ? p.U(a) : p.Ma(a);
          return this.Zd[this.Zd.length - 1].qh = 0, this.Zd[0].sh = this.Zd.length - 1, this.YV(u), g.gg(d.x, d.y), u.YD(g, u.da() - 1), 1;
        }, s.prototype.YV = function(o) {
          for (var a = this.zO(), u = !0, c = a + 1, l = a; c != a; l = c) {
            var p = this.Zd[l];
            c = p.qh != -1 ? p.qh : (l + 1) % this.Zd.length, p.Co != 0 && (u && o.Lt(p.Im), p.Co == 2 ? this.GD(o, p.aw, p.Im, p.Vm, !0) : o.Ci(p.Vm), u = !1);
          }
        }, s.prototype.zO = function() {
          this.Ks == null && (this.Ks = [null, null, null, null, null, null, null, null, null]);
          for (var o = 0, a = 0, u = this.Zd.length; a < u; ) {
            var c = this.Zd[a];
            if (3 & c.Co) {
              o = a;
              break;
            }
            a = c.qh;
          }
          for (u = o + 1, a = o; u != o; a = u) {
            u = (c = this.Zd[a]).qh;
            for (var l = 1, p = null; u != a && !(3 & (p = this.Zd[u]).Co); ) u = p.qh, l++;
            l != 1 && (c.Co & p.Co) == 1 && (this.Ls == null && (this.Ls = new e.yb(), this.lw = new e.yb()), this.Ls.Dc(c.Im), this.Ls.Qc(c.Vm), this.lw.Dc(p.Im), this.lw.Qc(p.Vm), this.Ls.Ea(this.lw, this.Ks, null, null, this.ct) == 1 && (c.Vm.L(this.Ks[0]), p.Im.L(this.Ks[0]), c.qh = u, p.sh = a));
          }
          return o;
        }, s.prototype.Fv = function(o, a, u) {
          var c = new e.h();
          if (c.uc(u, o), u = c.length(), 0 < (u = this.rb * this.rb - u * u * 0.25)) {
            u = Math.sqrt(u), c.normalize(), c.ar();
            var l = new e.h();
            if (l.uc(a, o), l.Qh(c) + u >= this.rb) return !0;
          }
          return !1;
        }, s.prototype.tQ = function(o, a, u) {
          for (var c = 0; 1 > c; c++) {
            var l = !1, p = o.Ob(a), y = o.Ja(p);
            if (y == 0) break;
            var d = y;
            if (3 > y) break;
            !o.dc(p) && (d = y - 1), p = o.Xa(p), y = 0 < u ? o.Ma(p) : o.U(p);
            for (var g = 0 < u ? o.U(p) : o.Ma(p), b = y, x = !0, m = new e.h(), w = new e.h(), j = new e.h(), M = new e.h(), A = new e.h(), z = e.h.construct(0, 0), N = new e.h(), I = new e.h(), C = new e.h(), T = new e.h(), D = this.rb, B = 0, E = 0; E < d && (o.D(g, w), x && (o.D(p, m), o.D(y, j), b = y), I.uc(m, j), I.normalize(), N.uc(w, m), N.normalize(), b != g); ) {
              var G = I.wi(N), H = I.Qh(N), U = !0;
              if (0 > G || 0 > H && G == 0 || !this.Fv(j, m, w) || (z.L(w), U = !1, ++B, l = !0), U) {
                if (0 < B) for (; (G = 0 < u ? o.Ma(b) : o.U(b)) != p; ) {
                  if (o.D(G, M), !this.Fv(M, j, z)) {
                    G != g && this.Fv(M, j, w) && this.Fv(M, m, w) && (j.L(M), b = G, U = !1, ++B);
                    break;
                  }
                  j.L(M), b = G, U = !1, ++B;
                }
                if (!U) continue;
                if (0 < B) {
                  for (b = 0 < u ? o.Ma(y) : o.U(y), x = 1; x < B; x++) U = 0 < u ? o.Ma(b) : o.U(b), o.pd(b, !0), b = U;
                  C.uc(m, j), B = D * D - (B = C.length()) * B * 0.25, D - (B = Math.sqrt(B)) > 0.5 * this.vk ? (A.add(j, m), A.scale(0.5), C.normalize(), C.ar(), T.L(C), T.scale(D - B), A.add(T), o.mf(y, A)) : o.pd(y, !0), B = 0;
                }
                j.L(m), b = p;
              }
              m.L(w), y = p, p = g, g = 0 < u ? o.U(p) : o.Ma(p), E++, x = !1;
            }
            if (0 < B) {
              for (b = 0 < u ? o.Ma(y) : o.U(y), x = 1; x < B; x++) U = 0 < u ? o.Ma(b) : o.U(b), o.pd(b, !0), b = U;
              A.add(j, m), A.scale(0.5), C.uc(m, j), B = D * D - (B = C.length()) * B * 0.25, B = Math.sqrt(B), C.normalize(), C.ar(), T.L(C), T.scale(D - B), A.add(T), o.mf(y, A);
            }
            if (o.Gp(this.tA, !1, !1), !l) break;
          }
        }, s.prototype.FG = function(o, a) {
          if (o.Ja(a) == 1) return !0;
          var u = new e.l();
          return o.Rj(a, u), Math.max(u.R(), u.ca()) < 0.5 * this.vk;
        }, s.prototype.EG = function(o) {
          var a = new e.l();
          return o.A(a), Math.max(a.R(), a.ca()) < 0.5 * this.vk;
        }, s.prototype.WV = function(o) {
          for (var a = 0, u = 0, c = (o = e.EC.local().V(o, 0.25 * this.vk, !1, this.Ub)).da(); u < c; u++) a = Math.max(o.Ja(u), a);
          return 32 > a ? (this.oq = !1, o) : (this.oq = !0, e.Fg.Mk(o, this.ct, !1, !0, this.Ub));
        }, s.prototype.yu = function(o, a) {
          if (a = a.D(), this.Id != null && this.Id.length !== 0) {
            var u = new e.h();
            u.L(this.Id[0]), u.Ct(this.rb, a), o.Lt(u);
            for (var c = 1, l = this.Id.length; c < l; c++) u.L(this.Id[c]), u.Ct(this.rb, a), o.Ci(u);
          } else {
            c = this.qE(), u = e.O.truncate((c + 3) / 4), c = 0.5 * Math.PI / u, l = Math.cos(c);
            for (var p = Math.sin(c), y = new e.h(), d = 3; 0 <= d; d--) {
              switch (y.ma(0, this.rb), d) {
                case 0:
                  for (c = 0; c < u; c++) o.yj(y.x + a.x, y.y + a.y), y.Bt(l, p);
                  break;
                case 1:
                  for (c = 0; c < u; c++) o.yj(-y.y + a.x, y.x + a.y), y.Bt(l, p);
                  break;
                case 2:
                  for (c = 0; c < u; c++) o.yj(-y.x + a.x, -y.y + a.y), y.Bt(l, p);
                  break;
                default:
                  for (o.sx(y.y + a.x, -y.x + a.y), c = 1; c < u; c++) y.Bt(l, p), o.yj(y.y + a.x, -y.x + a.y);
              }
              this.Xq();
            }
          }
        }, s.kx = function(o) {
          return o.Ch(1, 0), o;
        }, s.prototype.sX = function(o) {
          return o.Ch(2, this.qa), o.fm(), o;
        }, s;
      }();
      e.HK = h;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.Ca = r, this.g = new e.gd(), this.dd = new e.ia(0);
        }
        return f.prototype.Lh = function(r, n, t) {
          switch (n) {
            case 0:
              if (r.v < t && r.C <= t) break;
              return r.v >= t ? 1 : -1;
            case 1:
              if (r.G < t && r.H <= t) break;
              return r.G >= t ? 1 : -1;
            case 2:
              if (r.v >= t && r.C > t) break;
              return r.C <= t ? 1 : -1;
            case 3:
              if (!(r.G >= t && r.H > t)) return r.H <= t ? 1 : -1;
          }
          return 0;
        }, f.prototype.Ay = function(r, n) {
          return r.getType() == 1736 ? this.Cy(r, n) : this.Dy(r);
        }, f.prototype.Cy = function(r, n) {
          if (this.Ca.R() == 0 || this.Ca.ca() == 0) return r.Ia();
          var t = new e.l();
          r.xc(t), this.X = this.g.Ib(r);
          var i = new e.l(), h = new e.l(), s = new e.h(), o = new e.h(), a = [0, 0, 0, 0, 0, 0, 0, 0, 0], u = [0, 0, 0, 0, 0, 0, 0, 0, 0];
          new e.ig();
          var c = new e.yb(), l = new e.ia(0);
          l.Jb(Math.min(100, r.I()));
          for (var p = !1, y = 0; !p && 4 > y; y++) {
            var d = !1, g = (1 & y) != 0, b = 0;
            switch (y) {
              case 0:
                b = this.Ca.v, d = t.v <= b && t.C >= b;
                break;
              case 1:
                b = this.Ca.G, d = t.G <= b && t.H >= b;
                break;
              case 2:
                b = this.Ca.C, d = t.v <= b && t.C >= b;
                break;
              case 3:
                b = this.Ca.H, d = t.G <= b && t.H >= b;
            }
            if (d) for (p = !0, d = this.g.Ob(this.X); d != -1; ) {
              var x = -1, m = -1, w = this.g.Xa(d), j = w;
              do {
                var M = this.g.bc(j);
                M == null && (M = c, this.g.D(j, s), M.Dc(s), this.g.D(this.g.U(j), o), M.Qc(o)), M.A(i);
                var A = this.Lh(i, y, b), z = 0, N = -1;
                if (A == -1) {
                  z = 0 < (M = M.cq(g, b, a, u)) ? this.g.Ul(j, u, M) : 0, z += 1;
                  var I = j, C = this.g.U(I);
                  for (M = 0; M < z; M++) {
                    if (this.g.D(I, s), this.g.D(C, o), (N = this.g.bc(I)) == null && ((N = c).Dc(s), N.Qc(o)), N.A(h), (N = this.Lh(h, y, b)) == -1) {
                      if (g) (N = Math.abs(s.y - b)) < (T = Math.abs(o.y - b)) ? (s.y = b, this.g.mf(I, s)) : (o.y = b, this.g.mf(C, o));
                      else {
                        N = Math.abs(s.x - b);
                        var T = Math.abs(o.x - b);
                        N < T ? (s.x = b, this.g.mf(I, s)) : (o.x = b, this.g.mf(C, o));
                      }
                      (N = this.g.bc(I)) == null && ((N = c).Dc(s), N.Qc(o)), N.A(h), N = this.Lh(h, y, b);
                    }
                    T = x, x = N, m == -1 && (m = x), T == 0 && x == 1 || T == 1 && x == 0 || T != 0 || x != 0 || l.add(I), x == 1 && (p = !1), N = I = C, C = this.g.U(C);
                  }
                }
                z == 0 && (T = x, x = A, m == -1 && (m = x), T == 0 && x == 1 || T == 1 && x == 0 || T != 0 || x != 0 || l.add(j), x == 1 && (p = !1), N = this.g.U(j)), j = N;
              } while (j != w);
              for (m == 0 && x == 0 && l.add(w), M = 0, x = l.size; M < x; M++) m = l.get(M), this.g.pd(m, !1);
              l.clear(!1), d = 3 > this.g.Ja(d) ? this.g.Zq(d) : this.g.Rb(d);
            }
          }
          return p ? r.Ia() : (this.FB(), 0 < n && this.My(n), this.g.Ne(this.X));
        }, f.prototype.Dy = function(r) {
          var n = new e.l(), t = new e.l(), i = [0, 0, 0, 0, 0, 0, 0, 0, 0], h = [0, 0, 0, 0, 0, 0, 0, 0, 0], s = new e.ig(), o = r, a = new e.l();
          r.xc(a);
          for (var u = 0; 4 > u; u++) {
            var c = !1, l = (1 & u) != 0, p = 0;
            switch (u) {
              case 0:
                p = this.Ca.v, c = a.v <= p && a.C >= p;
                break;
              case 1:
                p = this.Ca.G, c = a.G <= p && a.H >= p;
                break;
              case 2:
                p = this.Ca.C, c = a.v <= p && a.C >= p;
                break;
              case 3:
                p = this.Ca.H, c = a.G <= p && a.H >= p;
            }
            if (c) {
              c = o, o = r.Ia(), (c = c.Ga()).Zi();
              for (var y, d = new e.h(); c.$a(); ) for (var g, b = !0; c.Ha(); ) {
                var x = c.ha();
                x.A(n);
                var m = this.Lh(n, u, p);
                if (m == -1) {
                  if (0 < (m = x.cq(l, p, i, h))) {
                    var w = 0;
                    y = x.ac();
                    for (var j = 0; j <= m; j++) if (w != (g = j < m ? h[j] : 1)) {
                      x.ah(w, g, s);
                      var M = s.get();
                      M.Dc(y), j < m && (l ? (d.x = i[j], d.y = p) : (d.x = p, d.y = i[j]), M.Qc(d)), M.A(t);
                      var A = this.Lh(t, u, p);
                      if (A == -1) {
                        if (y = M.ac(), w = M.wc(), l) (A = Math.abs(y.y - p)) < (z = Math.abs(w.y - p)) ? (y.y = p, M.Dc(y)) : (w.y = p, M.Qc(w));
                        else {
                          A = Math.abs(y.x - p);
                          var z = Math.abs(w.x - p);
                          A < z ? (y.x = p, M.Dc(y)) : (w.x = p, M.Qc(w));
                        }
                        M.A(t), A = this.Lh(t, u, p);
                      }
                      y = M.wc(), w = g, (g = A) == 1 ? (o.oc(M, b), b = !1) : b = !0;
                    }
                  }
                } else (g = m) == 1 ? (o.oc(x, b), b = !1) : b = !0;
              }
            }
          }
          return o;
        }, f.prototype.FB = function() {
          this.ji = -1, this.Vl(!1, this.Ca.v), this.Vl(!1, this.Ca.C), this.Vl(!0, this.Ca.G), this.Vl(!0, this.Ca.H), this.dd.resize(0), this.dd.Jb(100), this.ji = this.g.Gd();
          for (var r = new e.h(), n = this.g.Ob(this.X); n != -1; n = this.g.Rb(n)) for (var t = this.g.Xa(n), i = 0, h = this.g.Ja(n); i < h; i++, t = this.g.U(t)) this.g.D(t, r), (this.Ca.v == r.x || this.Ca.C == r.x || this.Ca.G == r.y || this.Ca.H == r.y) && (this.g.Ra(t, this.ji, this.dd.size), this.dd.add(t));
          this.Nl(!1, this.Ca.v), this.Nl(!1, this.Ca.C), this.Nl(!0, this.Ca.G), this.Nl(!0, this.Ca.H), this.Ty();
        }, f.prototype.My = function(r) {
          for (var n = new e.h(), t = new e.h(), i = e.O.lg(2048, 0), h = this.g.Ob(this.X); h != -1; h = this.g.Rb(h)) {
            var s = this.g.Xa(h), o = s;
            do {
              var a = this.g.U(o);
              this.g.D(o, n);
              var u = -1;
              if (n.x == this.Ca.v ? (this.g.D(a, t), t.x == this.Ca.v && (u = 1)) : n.x == this.Ca.C && (this.g.D(a, t), t.x == this.Ca.C && (u = 1)), n.y == this.Ca.G ? (this.g.D(a, t), t.y == this.Ca.G && (u = 0)) : n.y == this.Ca.H && (this.g.D(a, t), t.y == this.Ca.H && (u = 0)), u != -1 && (u = e.h.tb(n, t), !(1 >= (u = e.O.truncate(Math.min(Math.ceil(u / r), 2048)))))) {
                for (var c = 1; c < u; c++) i[c - 1] = 1 * c / u;
                this.g.Ul(o, i, u - 1);
              }
              o = a;
            } while (o != s);
          }
        }, f.prototype.Vl = function(r, n) {
          var t = this.g.Gd(), i = new e.h(), h = new e.ia(0);
          h.Jb(100);
          for (var s = this.g.Ob(this.X); s != -1; s = this.g.Rb(s)) for (var o = this.g.Xa(s), a = 0, u = this.g.Ja(s); a < u; a++) {
            var c = this.g.U(o);
            this.g.D(o, i), (r ? i.y == n : i.x == n) && (this.g.D(c, i), (r ? i.y == n : i.x == n) && (this.g.Pa(o, t) != 1 && (h.add(o), this.g.Ra(o, t, 1)), this.g.Pa(c, t) != 1 && (h.add(c), this.g.Ra(c, t, 1)))), o = c;
          }
          if (this.g.Td(t), !(3 > h.size)) {
            var l = this;
            h.Vd(0, h.size, function(A, z) {
              return l.Mh(A, z);
            }), t = new e.h(), s = new e.h(), o = new e.h(), s.Rc();
            var p = -1;
            a = new e.ia(0), u = new e.ia(0), c = this.g.Gd();
            for (var y = this.g.Gd(), d = 0, g = h.size; d < g; d++) {
              var b = h.get(d);
              if (this.g.D(b, i), !i.qb(s)) {
                if (p != -1) {
                  for (var x = p; x < d; x++) {
                    p = h.get(x);
                    var m = this.g.U(p);
                    b = this.g.Ma(p);
                    var w = !1;
                    0 > this.Mh(p, m) && (this.g.D(m, t), r ? t.y == n : t.x == n) && (a.add(p), w = !0, this.g.Ra(p, y, 1)), 0 > this.Mh(p, b) && (this.g.D(b, t), r ? t.y == n : t.x == n) && (w || a.add(p), this.g.Ra(p, c, 1));
                  }
                  for (x = 0, w = a.size; x < w; x++) {
                    if (p = a.get(x), b = this.g.Pa(p, c), m = this.g.Pa(p, y), b == 1) {
                      b = this.g.Ma(p), this.g.D(b, o);
                      var j = [0];
                      if (j[0] = 0, !o.qb(i)) {
                        var M = e.h.tb(s, o);
                        j[0] = e.h.tb(o, i) / M, j[0] == 0 ? j[0] = 2220446049250313e-31 : j[0] == 1 && (j[0] = 0.9999999999999998), this.g.Ul(b, j, 1), b = this.g.Ma(p), this.g.mf(b, i), u.add(b), this.g.Ra(b, c, 1), this.g.Ra(b, y, -1);
                      }
                    }
                    m == 1 && (m = this.g.U(p), this.g.D(m, o), (j = [0])[0] = 0, o.qb(i) || (M = e.h.tb(s, o), j[0] = e.h.tb(s, i) / M, j[0] == 0 ? j[0] = 2220446049250313e-31 : j[0] == 1 && (j[0] = 0.9999999999999998), this.g.Ul(p, j, 1), b = this.g.U(p), this.g.mf(b, i), u.add(b), this.g.Ra(b, c, -1), this.g.Ra(b, y, 1)));
                  }
                  p = a, a = u, (u = p).clear(!1);
                }
                p = d, s.L(i);
              }
            }
            this.g.Td(c), this.g.Td(y);
          }
        }, f.prototype.Nl = function(r, n) {
          var t = new e.h(), i = new e.ia(0);
          i.Jb(100);
          for (var h = this.g.Gd(), s = 0, o = this.dd.size; s < o; s++) {
            var a = this.dd.get(s);
            if (a != -1) {
              var u = this.g.U(a);
              this.g.D(a, t), (r ? t.y == n : t.x == n) && (this.g.D(u, t), (r ? t.y == n : t.x == n) && (this.g.Pa(a, h) != -2 && (i.add(a), this.g.Ra(a, h, -2)), this.g.Pa(u, h) != -2 && (i.add(u), this.g.Ra(u, h, -2))));
            }
          }
          if (i.size != 0) {
            var c = this;
            for (i.Vd(0, i.size, function(z, N) {
              return c.Mh(z, N);
            }), s = 0, o = i.size; s < o; s++) {
              var l = i.get(s);
              this.g.Ra(l, h, s);
            }
            a = new e.h(), (u = new e.h()).Rc();
            var p = -1;
            for (s = 0, o = i.size; s < o; s++) if ((l = i.get(s)) != -1 && (this.g.D(l, t), !t.qb(u))) {
              if (p != -1) for (; ; ) {
                l = !1;
                for (var y = 1 < s - p ? s - 1 : s, d = p; d < y; d++) {
                  var g = i.get(d);
                  if (g != -1) {
                    var b = -1, x = this.g.U(g);
                    0 > this.Mh(g, x) && (this.g.D(x, a), r ? a.y == n : a.x == n) && (b = x), x = -1;
                    var m = this.g.Ma(g);
                    if (0 > this.Mh(g, m) && (this.g.D(m, a), r ? a.y == n : a.x == n) && (x = m), b != -1 && x != -1) this.Kh(g, i, h), this.g.pd(g, !1), this.Kh(b, i, h), this.g.pd(b, !1), l = !0;
                    else if (b != -1 || x != -1) {
                      for (m = d + 1; m < s; m++) {
                        var w = i.get(m);
                        if (w != -1) {
                          var j = this.g.U(w), M = -1;
                          0 > this.Mh(w, j) && (this.g.D(j, a), r ? a.y == n : a.x == n) && (M = j), j = this.g.Ma(w);
                          var A = -1;
                          if (0 > this.Mh(w, j) && (this.g.D(j, a), r ? a.y == n : a.x == n) && (A = j), M != -1 && A != -1) {
                            this.Kh(w, i, h), this.g.pd(w, !1), this.Kh(M, i, h), this.g.pd(M, !1), l = !0;
                            break;
                          }
                          if (b != -1 && A != -1) {
                            this.zt(i, g, b, w, A, h), l = !0;
                            break;
                          }
                          if (x != -1 && M != -1) {
                            this.zt(i, w, M, g, x, h), l = !0;
                            break;
                          }
                        }
                      }
                      if (l) break;
                    }
                  }
                }
                if (!l) break;
              }
              p = s, u.L(t);
            }
          }
          this.g.Td(h);
        }, f.prototype.Kh = function(r, n, t) {
          t = this.g.Pa(r, t), n.set(t, -1), t = this.g.Pa(r, this.ji), this.dd.set(t, -1), (n = this.g.bd(r)) != -1 && this.g.Xa(n) == r && (this.g.Jf(n, -1), this.g.Wg(n, -1));
        }, f.prototype.zt = function(r, n, t, i, h, s) {
          this.g.Bc(n, i), this.g.Cc(i, n), this.g.Cc(t, h), this.g.Bc(h, t), this.Kh(i, r, s), this.g.mi(i, !1), this.Kh(h, r, s), this.g.mi(h, !0);
        }, f.prototype.Ty = function() {
          for (var r = 0, n = this.dd.size; r < n; r++) {
            var t = this.dd.get(r);
            t != -1 && this.g.aj(t, -1);
          }
          for (var i = 0, h = 0, s = this.g.Ob(this.X); s != -1; ) {
            var o = this.g.Xa(s);
            if (o == -1 || s != this.g.bd(o)) {
              var a = s;
              s = this.g.Rb(s), this.g.Jf(a, -1), this.g.$q(a);
            } else {
              t = o, a = 0;
              do
                this.g.aj(t, s), a++, t = this.g.U(t);
              while (t != o);
              2 >= a ? (t = this.g.Pa(o, this.ji), this.dd.set(t, -1), o = this.g.pd(o, !1), a == 2 && (t = this.g.Pa(o, this.ji), this.dd.set(t, -1), this.g.pd(o, !1)), a = s, s = this.g.Rb(s), this.g.Jf(a, -1), this.g.$q(a)) : (this.g.cp(s, !1), this.g.Wg(s, this.g.Ma(o)), this.g.Vj(s, a), h += a, i++, s = this.g.Rb(s));
            }
          }
          for (r = 0, n = this.dd.size; r < n; r++) if ((t = this.dd.get(r)) != -1 && (s = this.g.bd(t)) == -1) {
            s = this.g.vf(this.X, -1), a = 0, o = t;
            do
              this.g.aj(t, s), a++, t = this.g.U(t);
            while (t != o);
            2 >= a ? (t = this.g.Pa(o, this.ji), this.dd.set(t, -1), o = this.g.pd(o, !1), a == 2 && (0 <= (t = this.g.Pa(o, this.ji)) && this.dd.set(t, -1), this.g.pd(o, !1)), a = s, this.g.Jf(a, -1), this.g.$q(a)) : (this.g.kn(s, !0), this.g.Vj(s, a), this.g.Jf(s, o), this.g.Wg(s, this.g.Ma(o)), this.g.cp(s, !1), h += a, i++);
          }
          for (this.g.Rl(this.X, i), this.g.Tj(this.X, h), r = 0, n = this.g.ld; n != -1; n = this.g.ue(n)) r += this.g.I(n);
          this.g.bC(r);
        }, f.By = function(r, n, t) {
          return new f(n).Ay(r, t);
        }, f.clip = function(r, n, t, i) {
          if (r.B()) return r;
          if (n.B()) return r.Ia();
          if ((t = r.getType()) == 33) return i = r.D(), n.contains(i) ? r : r.Ia();
          if (t == 197) return i = new e.l(), r.A(i), i.Ea(n) ? (n = new e.Fh(), r.copyTo(n), n.Xo(i), n) : r.Ia();
          var h = new e.l();
          if (r.xc(h), n.contains(h)) return r;
          if (!n.isIntersecting(h)) return r.Ia();
          if ((h = r.Bb) != null && (h = h.Fk) != null) {
            if ((h = h.Ro(n)) == 1) {
              if (t != 1736) throw e.i.Qa();
              return (r = new e.Da(r.description)).tp(n), r;
            }
            if (h == 0) return r.Ia();
          }
          switch (t) {
            case 550:
              t = null, h = r.I();
              for (var s = r.ub(0), o = 0, a = 0; a < h; a++) i = new e.h(), s.tc(2 * a, i), n.contains(i) || (o == 0 && (t = r.Ia()), o < a && t.Fd(r, o, a), o = a + 1);
              return 0 < o && t.Fd(r, o, h), o == 0 ? r : t;
            case 1736:
            case 1607:
              return f.By(r, n, i);
            default:
              throw e.i.Qa();
          }
        }, f.prototype.Mh = function(r, n) {
          var t = new e.h();
          return this.g.D(r, t), r = new e.h(), this.g.D(n, r), t.compare(r);
        }, f;
      }();
      e.Ud = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n) {
          this.Ca = r, this.g = new e.gd(), this.dd = new e.ia(0), this.nd = n;
        }
        return f.prototype.Lh = function(r, n, t) {
          switch (n) {
            case 0:
              if (r.v < t && r.C <= t) break;
              return r.v >= t ? 1 : -1;
            case 1:
              if (r.G < t && r.H <= t) break;
              return r.G >= t ? 1 : -1;
            case 2:
              if (r.v >= t && r.C > t) break;
              return r.C <= t ? 1 : -1;
            case 3:
              if (!(r.G >= t && r.H > t)) return r.H <= t ? 1 : -1;
          }
          return 0;
        }, f.prototype.Ay = function(r, n) {
          return r.getType() == 1736 ? this.Cy(r, n) : this.Dy(r);
        }, f.prototype.Cy = function(r, n) {
          if (this.Ca.R() == 0 || this.Ca.ca() == 0) return r.Ia();
          var t = new e.l();
          r.xc(t), this.X = this.g.Ib(r);
          var i = new e.l(), h = new e.l(), s = new e.h(), o = new e.h(), a = [0, 0, 0, 0, 0, 0, 0, 0, 0], u = [0, 0, 0, 0, 0, 0, 0, 0, 0], c = new e.yb(), l = new e.ia(0);
          l.Jb(256);
          for (var p = !1, y = 0; !p && 4 > y; y++) {
            var d = !1, g = (1 & y) != 0, b = 0;
            switch (y) {
              case 0:
                b = this.Ca.v, d = t.v <= b && t.C >= b;
                break;
              case 1:
                b = this.Ca.G, d = t.G <= b && t.H >= b;
                break;
              case 2:
                b = this.Ca.C, d = t.v <= b && t.C >= b;
                break;
              case 3:
                b = this.Ca.H, d = t.G <= b && t.H >= b;
            }
            if (d) for (p = !0, d = this.g.Ob(this.X); d != -1; ) {
              var x = !0, m = -1, w = -1, j = this.g.Xa(d), M = j;
              do {
                var A = this.g.bc(M);
                A == null && (A = c, this.g.D(M, s), A.Dc(s), this.g.D(this.g.U(M), o), A.Qc(o)), A.A(i);
                var z = this.Lh(i, y, b), N = 0, I = -1;
                if (z == -1) {
                  N = 0 < (A = A.cq(g, b, a, u)) ? this.g.LX(M, u, A) : 0, N += 1;
                  var C = M, T = this.g.U(C);
                  for (A = 0; A < N; A++) {
                    if (this.g.D(C, s), this.g.D(T, o), (I = this.g.bc(C)) == null && ((I = c).Dc(s), I.Qc(o)), I.A(h), (I = this.Lh(h, y, b)) == -1) {
                      if (g) (I = Math.abs(s.y - b)) < (D = Math.abs(o.y - b)) ? (s.y = b, this.g.mf(C, s)) : (o.y = b, this.g.mf(T, o));
                      else {
                        I = Math.abs(s.x - b);
                        var D = Math.abs(o.x - b);
                        I < D ? (s.x = b, this.g.mf(C, s)) : (o.x = b, this.g.mf(T, o));
                      }
                      (I = this.g.bc(C)) == null && ((I = c).Dc(s), I.Qc(o)), I.A(h), I = this.Lh(h, y, b);
                    }
                    D = m, m = I, w == -1 && (w = m), D == 0 && m == 1 || D == 1 && m == 0 || D != 0 || m != 0 || l.add(C), m == 1 && (x = p = !1), I = C = T, T = this.g.U(T);
                  }
                }
                if (N == 0 && (D = m, m = z, w == -1 && (w = m), D == 0 && m == 1 || D == 1 && m == 0 || D != 0 || m != 0 || l.add(M), m == 1 && (x = p = !1), I = this.g.U(M)), M = I, 256 <= l.size) {
                  for (A = 1, z = l.size - 1; A < z; A++) N = l.get(A), this.g.pd(N, !1);
                  l.set(1, l.Fc()), l.Bh(2);
                }
              } while (M != j);
              if (!x) for (w == 0 && m == 0 && l.add(j), A = 0, z = l.size; A < z; A++) N = l.get(A), this.g.pd(N, !1);
              l.clear(!1), d = x || this.g.Ja(d) == 0 ? this.g.Zq(d) : this.g.Rb(d);
            }
          }
          return p ? r.Ia() : (this.FB(), 0 < n && this.My(n), this.g.Ne(this.X));
        }, f.prototype.Dy = function(r) {
          var n = new e.l(), t = new e.l(), i = [0, 0, 0, 0, 0, 0, 0, 0, 0], h = [0, 0, 0, 0, 0, 0, 0, 0, 0], s = new e.ig(), o = r, a = new e.l();
          r.xc(a);
          for (var u = new e.h(), c = new e.h(), l = null, p = null, y = 0; 4 > y; y++) {
            var d = !1, g = (1 & y) != 0, b = 0;
            switch (y) {
              case 0:
                b = this.Ca.v, d = a.v <= b && a.C >= b;
                break;
              case 1:
                b = this.Ca.G, d = a.G <= b && a.H >= b;
                break;
              case 2:
                b = this.Ca.C, d = a.v <= b && a.C >= b;
                break;
              case 3:
                b = this.Ca.H, d = a.G <= b && a.H >= b;
            }
            if (d) for (d = o, o = r.Ia(), (d = d.Ga()).Zi(); d.$a(); ) for (var x, m = !0; d.Ha(); ) {
              var w = d.ha();
              w.A(n);
              var j = this.Lh(n, y, b);
              if (j == -1) {
                if (0 < (j = w.cq(g, b, i, h))) {
                  var M = 0;
                  w.Yp(u);
                  for (var A = 0; A <= j; A++) if (M != (x = A < j ? h[A] : 1)) {
                    w.ah(M, x, s);
                    var z = s.get();
                    z.Dc(u), A < j && (g ? (c.x = i[A], c.y = b) : (c.x = b, c.y = i[A]), z.Qc(c)), z.A(t);
                    var N = this.Lh(t, y, b);
                    N == -1 && (l == null && (l = new e.h()), p == null && (p = new e.h()), z.Yp(l), z.Tr(p), g ? (M = Math.abs(l.y - b)) < (N = Math.abs(p.y - b)) ? (l.y = b, z.Dc(l)) : (p.y = b, z.Qc(p)) : (M = Math.abs(l.x - b)) < (N = Math.abs(p.x - b)) ? (l.x = b, z.Dc(l)) : (p.x = b, z.Qc(p)), z.A(t), N = this.Lh(t, y, b)), z.Tr(u), M = x, (x = N) == 1 ? (o.oc(z, m), m = !1) : m = !0;
                  }
                }
              } else (x = j) == 1 ? (o.oc(w, m), m = !1) : m = !0;
            }
          }
          return o;
        }, f.prototype.FB = function() {
          this.ji = -1, this.Vl(!1, this.Ca.v), this.Vl(!1, this.Ca.C), this.Vl(!0, this.Ca.G), this.Vl(!0, this.Ca.H), this.dd.resize(0), this.dd.Jb(100), this.ji = this.g.Gd();
          for (var r = new e.h(), n = this.g.Ob(this.X); n != -1; n = this.g.Rb(n)) for (var t = this.g.Xa(n), i = 0, h = this.g.Ja(n); i < h; i++, t = this.g.U(t)) this.g.D(t, r), (this.Ca.v == r.x || this.Ca.C == r.x || this.Ca.G == r.y || this.Ca.H == r.y) && (this.g.Ra(t, this.ji, this.dd.size), this.dd.add(t));
          this.Nl(!1, this.Ca.v), this.Nl(!1, this.Ca.C), this.Nl(!0, this.Ca.G), this.Nl(!0, this.Ca.H), this.Ty();
        }, f.prototype.My = function(r) {
          for (var n = new e.h(), t = new e.h(), i = null, h = null, s = e.O.lg(2048, 0), o = this.g.Ob(this.X); o != -1; o = this.g.Rb(o)) {
            var a = this.g.Xa(o), u = a;
            do {
              var c = this.g.U(u);
              this.g.D(u, n);
              var l = -1;
              if (n.x == this.Ca.v ? (this.g.D(c, t), t.x == this.Ca.v && (l = 1)) : n.x == this.Ca.C && (this.g.D(c, t), t.x == this.Ca.C && (l = 1)), n.y == this.Ca.G ? (this.g.D(c, t), t.y == this.Ca.G && (l = 0)) : n.y == this.Ca.H && (this.g.D(c, t), t.y == this.Ca.H && (l = 0)), l != -1) {
                if (i == null && (i = new e.h()), h == null && (h = new e.h()), i.L(n), h.ma(0, 0), l == 0) {
                  var p = n.x - this.Ca.v;
                  h.x = e.lc.sign(t.x - n.x), i.x = r * e.lc.Cn(Math.floor(Math.abs(p / r)), p) + this.Ca.v, 0 > i.x && (i.x += r);
                } else p = n.y - this.Ca.G, h.y = e.lc.sign(t.y - n.y), i.y = r * e.lc.Cn(Math.floor(Math.abs(p / r)), p) + this.Ca.G, 0 > i.y && (i.y += r);
                p = l != 0 ? t.y - n.y : t.x - n.x;
                var y = Math.abs(p);
                if (65536 < y / r) throw e.i.fa("internal error");
                if (0 < y) {
                  y = e.O.truncate(y / r) + 2, s.length < y && (s = e.O.lg(y));
                  for (var d = y = 0; ; d++) {
                    var g = new e.h();
                    if (g.x = i.x + h.x * d * r, g.y = i.y + h.y * d * r, 1 <= (g = (l != 0 ? g.y - n.y : g.x - n.x) / p)) break;
                    0 >= g || (s[y] = g, y++);
                  }
                  y != 0 && this.g.Ul(u, s, y);
                }
              }
              u = c;
            } while (u != a);
          }
        }, f.prototype.Vl = function(r, n) {
          for (var t = -1, i = new e.h(), h = null, s = this.g.Ob(this.X); s != -1; s = this.g.Rb(s)) for (var o = this.g.Xa(s), a = 0, u = this.g.Ja(s); a < u; a++) {
            var c = this.g.U(o);
            this.g.D(o, i), (r ? i.y == n : i.x == n) && (this.g.D(c, i), (r ? i.y == n : i.x == n) && (t == -1 && (t = this.g.Gd()), h == null && (h = new e.ia(0)).Jb(100), this.g.Pa(o, t) != 1 && (h.add(o), this.g.Ra(o, t, 1)), this.g.Pa(c, t) != 1 && (h.add(c), this.g.Ra(c, t, 1)))), o = c;
          }
          if (t != -1 && this.g.Td(t), !(h == null || 3 > h.size)) {
            var l = this;
            h.Vd(0, h.size, function(A, z) {
              return l.Mh(A, z);
            }), t = new e.h(), s = new e.h(), o = new e.h(), s.Rc();
            var p = -1;
            a = new e.ia(0), u = new e.ia(0), c = null;
            for (var y = this.g.Gd(), d = this.g.Gd(), g = 0, b = h.size; g < b; g++) {
              var x = h.get(g);
              if (this.g.D(x, i), !i.qb(s)) {
                if (p != -1) {
                  for (var m = p; m < g; m++) {
                    p = h.get(m);
                    var w = this.g.U(p);
                    x = this.g.Ma(p);
                    var j = !1;
                    this.g.D(w, t), 0 > s.compare(t) && (r ? t.y == n : t.x == n) && (a.add(p), j = !0, this.g.Ra(p, d, 1)), this.g.D(x, t), 0 > s.compare(t) && (r ? t.y == n : t.x == n) && (j || a.add(p), this.g.Ra(p, y, 1));
                  }
                  for (m = 0, j = a.size; m < j; m++) {
                    if (p = a.get(m), x = this.g.Pa(p, y), w = this.g.Pa(p, d), x == 1 && (x = this.g.Ma(p), this.g.D(x, o), !o.qb(i))) {
                      c == null && (c = []);
                      var M = e.h.tb(s, o);
                      c[0] = e.h.tb(o, i) / M, c[0] == 0 ? c[0] = 2220446049250313e-31 : c[0] == 1 && (c[0] = 0.9999999999999998), this.g.Ul(x, c, 1), x = this.g.Ma(p), this.g.mf(x, i), u.add(x), this.g.Ra(x, y, 1), this.g.Ra(x, d, -1);
                    }
                    w == 1 && (w = this.g.U(p), this.g.D(w, o), o.qb(i) || (c == null && (c = []), M = e.h.tb(s, o), c[0] = e.h.tb(s, i) / M, c[0] == 0 ? c[0] = 2220446049250313e-31 : c[0] == 1 && (c[0] = 0.9999999999999998), this.g.Ul(p, c, 1), x = this.g.U(p), this.g.mf(x, i), u.add(x), this.g.Ra(x, y, -1), this.g.Ra(x, d, 1)));
                  }
                  p = a, a = u, (u = p).clear(!1);
                }
                p = g, s.L(i);
              }
            }
            this.g.Td(y), this.g.Td(d);
          }
        }, f.prototype.Nl = function(r, n) {
          for (var t = new e.h(), i = null, h = -1, s = 0, o = this.dd.size; s < o; s++) {
            var a = this.dd.get(s);
            if (a != -1) {
              var u = this.g.U(a);
              this.g.D(a, t), (r ? t.y == n : t.x == n) && (this.g.D(u, t), (r ? t.y == n : t.x == n) && (h == -1 && (h = this.g.Gd()), i == null && (i = new e.ia(0)).Jb(100), this.g.Pa(a, h) != -2 && (i.add(a), this.g.Ra(a, h, -2)), this.g.Pa(u, h) != -2 && (i.add(u), this.g.Ra(u, h, -2))));
            }
          }
          if (i == null) h != -1 && this.g.Td(h);
          else {
            var c = this;
            for (i.Vd(0, i.size, function(z, N) {
              return c.Mh(z, N);
            }), s = 0, o = i.size; s < o; s++) {
              var l = i.get(s);
              this.g.Ra(l, h, s);
            }
            a = new e.h(), (u = new e.h()).Rc();
            var p = -1;
            for (s = 0, o = i.size; s < o; s++) if ((l = i.get(s)) != -1 && (this.g.D(l, t), !t.qb(u))) {
              if (p != -1) for (; ; ) {
                l = !1;
                for (var y = 1 < s - p ? s - 1 : s, d = p; d < y; d++) {
                  var g = i.get(d);
                  if (g != -1) {
                    var b = -1, x = this.g.U(g);
                    this.g.D(x, a), 0 > u.compare(a) && (r ? a.y == n : a.x == n) && (b = x), x = -1;
                    var m = this.g.Ma(g);
                    if (this.g.D(m, a), 0 > u.compare(a) && (r ? a.y == n : a.x == n) && (x = m), b != -1 && x != -1) this.Kh(g, i, h), this.g.pd(g, !1), this.Kh(b, i, h), this.g.pd(b, !1), l = !0;
                    else if (b != -1 || x != -1) {
                      for (m = d + 1; m < s; m++) {
                        var w = i.get(m);
                        if (w != -1) {
                          var j = this.g.U(w), M = -1;
                          this.g.D(j, a), 0 > u.compare(a) && (r ? a.y == n : a.x == n) && (M = j), j = this.g.Ma(w);
                          var A = -1;
                          if (this.g.D(j, a), 0 > u.compare(a) && (r ? a.y == n : a.x == n) && (A = j), M != -1 && A != -1) {
                            this.Kh(w, i, h), this.g.pd(w, !1), this.Kh(M, i, h), this.g.pd(M, !1), l = !0;
                            break;
                          }
                          if (b != -1 && A != -1) {
                            this.zt(i, g, b, w, A, h), l = !0;
                            break;
                          }
                          if (x != -1 && M != -1) {
                            this.zt(i, w, M, g, x, h), l = !0;
                            break;
                          }
                        }
                      }
                      if (l) break;
                    }
                  }
                }
                if (!l) break;
              }
              p = s, u.L(t);
            }
            this.g.Td(h);
          }
        }, f.prototype.Kh = function(r, n, t) {
          t = this.g.Pa(r, t), n.set(t, -1), t = this.g.Pa(r, this.ji), this.dd.set(t, -1), (n = this.g.bd(r)) != -1 && this.g.Xa(n) == r && (this.g.Jf(n, -1), this.g.Wg(n, -1));
        }, f.prototype.zt = function(r, n, t, i, h, s) {
          this.g.Bc(n, i), this.g.Cc(i, n), this.g.Cc(t, h), this.g.Bc(h, t), this.Kh(i, r, s), this.g.mi(i, !1), this.Kh(h, r, s), this.g.mi(h, !0);
        }, f.prototype.Ty = function() {
          for (var r = 0, n = this.dd.size; r < n; r++) {
            var t = this.dd.get(r);
            t != -1 && this.g.aj(t, -1);
          }
          for (var i = 0, h = 0, s = this.g.Ob(this.X); s != -1; ) {
            var o = this.g.Xa(s);
            if (o == -1 || s != this.g.bd(o)) {
              var a = s;
              s = this.g.Rb(s), this.g.Jf(a, -1), this.g.$q(a);
            } else {
              t = o, a = 0;
              do
                this.g.aj(t, s), a++, t = this.g.U(t);
              while (t != o);
              this.g.cp(s, !1), this.g.Wg(s, this.g.Ma(o)), this.g.Vj(s, a), h += a, i++, s = this.g.Rb(s);
            }
          }
          for (r = 0, n = this.dd.size; r < n; r++) if ((t = this.dd.get(r)) != -1 && (s = this.g.bd(t)) == -1) {
            s = this.g.vf(this.X, -1), a = 0, o = t;
            do
              this.g.aj(t, s), a++, t = this.g.U(t);
            while (t != o);
            2 >= a ? (t = this.g.Pa(o, this.ji), this.dd.set(t, -1), o = this.g.pd(o, !1), a == 2 && (0 <= (t = this.g.Pa(o, this.ji)) && this.dd.set(t, -1), this.g.pd(o, !1)), a = s, this.g.Jf(a, -1), this.g.$q(a)) : (this.g.kn(s, !0), this.g.Vj(s, a), this.g.Jf(s, o), this.g.Wg(s, this.g.Ma(o)), this.g.cp(s, !1), h += a, i++);
          }
          for (this.g.Rl(this.X, i), this.g.Tj(this.X, h), r = 0, n = this.g.ld; n != -1; n = this.g.ue(n)) r += this.g.I(n);
          this.g.bC(r);
        }, f.By = function(r, n, t, i) {
          return new f(n, i).Ay(r, t);
        }, f.clip = function(r, n, t, i, h) {
          return f.Nu(r, n, null, t, i, h);
        }, f.Nu = function(r, n, t, i, h, s) {
          var o = r.getType();
          if (o == 33) return h = r.D(), n.contains(h) ? r : r.Ia();
          if (o == 197) return h = new e.l(), r.A(h), h.Ea(n) ? (n = new e.Fh(), r.copyTo(n), n.Xo(h), n) : r.Ia();
          if (r.B()) return r;
          if (n.B()) return r.Ia();
          var a = new e.l();
          if (r.xc(a), n.contains(a)) return r;
          if (!n.isIntersecting(a)) return r.Ia();
          if ((t != null || isNaN(i)) && e.ta.ty(t, n, !1), !e.aa.xj(o)) throw e.i.N();
          if ((t = r.Bb) != null && (t = t.Fk) != null) {
            if ((t = t.Ro(n)) == 1) {
              if (o != 1736) throw e.i.fa("internal error");
              return (r = new e.Da(r.description)).tp(n), r;
            }
            if (t == 0) return r.Ia();
          }
          switch (o) {
            case 550:
              for (s = null, o = r.I(), t = r.ub(0), i = 0, h = new e.h(), a = 0; a < o; a++) t.tc(2 * a, h), n.contains(h) || (i == 0 && (s = r.Ia()), i < a && s.Fd(r, i, a), i = a + 1);
              return 0 < i && s.Fd(r, i, o), i == 0 ? r : s;
            case 1736:
            case 1607:
              return f.By(r, n, h, s);
            default:
              throw e.i.fa("internal error");
          }
        }, f.prototype.Mh = function(r, n) {
          var t = new e.h();
          return this.g.D(r, t), r = new e.h(), this.g.D(n, r), t.compare(r);
        }, f;
      }();
      e.ri = v;
    }(k || (k = {})), function(e) {
      var v = new e.h(), f = function() {
        function n(t, i, h, s, o) {
          this.Pm = new e.h(), this.Dk = new e.h(), this.Pi = new e.h(), this.g = t, this.Aw = h, this.no = s, this.Pm = i, this.yl = o, this.Dk.Rc(), this.Pi.Rc();
        }
        return n.prototype.xE = function(t) {
          this.g.D(t, this.Dk), t = e.O.truncate((this.Dk.x - this.Pm.x) * this.no + 0.5);
          var i = e.O.truncate((this.Dk.y - this.Pm.y) * this.no + 0.5);
          return r.jG(t, i);
        }, n.prototype.jz = function(t) {
          return this.g.Pa(t, this.yl);
        }, n.prototype.Py = function(t, i) {
          return this.g.D(t, this.Dk), this.g.D(i, this.Pi), r.Cv(this.Dk.x, this.Dk.y, this.Pi.x, this.Pi.y, this.Aw);
        }, n;
      }();
      e.sY = function() {
      };
      var r = function() {
        function n() {
          this.Pm = new e.h(), this.pq = [0, 0, 0, 0], this.xs = [0, 0, 0, 0], this.qo = this.yl = -1;
        }
        return n.iQ = function(t, i) {
          var h = new n();
          return h.g = t, h.qa = i, h.Aw = i * i, h.$v = 2 * i, h.no = 1 / h.$v, h.BO();
        }, n.Cv = function(t, i, h, s, o) {
          return (t -= h) * t + (i -= s) * i <= o;
        }, n.jG = function(t, i) {
          return e.O.Th(i, e.O.Th(t));
        }, n.prototype.DO = function(t, i) {
          this.g.Gc(t, v);
          for (var h = (v.y - this.Pm.y) * this.no, s = e.O.truncate((v.x - this.Pm.x) * this.no), o = e.O.truncate(h), a = h = 0; 1 >= a; a += 1) for (var u = 0; 1 >= u; u += 1) {
            var c = n.jG(s + a, o + u), l = this.xl.rR(c);
            l != -1 && (this.pq[h] = l, this.xs[h] = c, h++);
          }
          for (s = h - 1; 1 <= s; s--) for (l = this.pq[s], o = s - 1; 0 <= o; o--) if (l == this.pq[o]) {
            this.xs[o] = -1, s != --h && (this.xs[s] = this.xs[h], this.pq[s] = this.pq[h]);
            break;
          }
          for (o = 0; o < h; o++) this.EO(t, this.xs[o], v, this.pq[o], i);
        }, n.prototype.EO = function(t, i, h, s, o) {
          for (var a = new e.h(); s != -1; s = this.xl.ER(s)) {
            var u = this.xl.ja(s);
            t == u || i != -1 && this.g.Pa(u, this.yl) != i || (this.g.Gc(u, a), n.Cv(h.x, h.y, a.x, a.y, this.Aw) && o.add(s));
          }
        }, n.prototype.Xm = function(t, i, h) {
          var s = this.g.Pa(t, this.qo), o = this.g.Pa(i, this.qo);
          return s == -1 && (s = this.zd.Ph(), this.zd.addElement(s, t), this.g.Ra(t, this.qo, s)), o == -1 ? this.zd.addElement(s, i) : this.zd.Hy(s, o), this.g.Ra(i, this.qo, -2), i = this.YT(t, i), h && (h = this.kw.xE(t), this.g.Ra(t, this.yl, h)), i;
        }, n.WT = function(t, i, h) {
          t.Nb(i), h = t;
          var s = new e.h();
          n.XT(t.D(), i.D(), s), h.Cb(s);
        }, n.XT = function(t, i, h) {
          var s = t.x;
          t.x != i.x && (s = (1 * t.x + 1 * i.x) / 2);
          var o = t.y;
          t.y != i.y && (o = (1 * t.y + 1 * i.y) / 2), h.ma(s, o);
        }, n.prototype.YT = function(t, i) {
          var h = new e.h();
          this.g.D(t, h);
          var s = new e.h();
          this.g.D(i, s);
          var o = this.g.cG(t), a = o + (i = this.g.cG(i)), u = 0, c = h.x;
          h.x != s.x && (c = (h.x * o + s.x * i) / a, u++);
          var l = h.y;
          return h.y != s.y && (l = (h.y * o + s.y * i) / a, u++), 0 < u && this.g.Cb(t, c, l), this.g.vX(t, a), u != 0;
        }, n.prototype.BO = function() {
          var t = this.g.fd, i = this.g.IF();
          for (this.Pm = i.mz(), i = Math.max(i.ca(), i.R()) / 2147483646, this.$v < i && (this.$v = i, this.no = 1 / this.$v), this.zd = new e.au(), this.zd.At(e.O.truncate(this.g.fd / 3 + 1)), this.zd.fn(e.O.truncate(this.g.fd / 3 + 1)), this.yl = this.g.Gd(), this.qo = this.g.Gd(), this.kw = new f(this.g, this.Pm, this.Aw, this.no, this.yl), this.xl = new e.dL(e.O.truncate(4 * t / 3), this.kw), this.xl.AW(this.g.fd), t = !1, i = this.g.ld; i != -1; i = this.g.ue(i)) for (var h = this.g.Ob(i); h != -1; h = this.g.Rb(h)) for (var s = this.g.Xa(h), o = 0, a = this.g.Ja(h); o < a; o++) {
            var u = this.kw.xE(s);
            this.g.Ra(s, this.yl, u), this.xl.addElement(s, u), s = this.g.U(s);
          }
          var c = new e.ia(0);
          for (c.Jb(10), i = this.g.ld; i != -1; i = this.g.ue(i)) for (h = this.g.Ob(i); h != -1; h = this.g.Rb(h)) for (s = this.g.Xa(h), o = 0, a = this.g.Ja(h); o < a; o++) {
            if (this.g.Pa(s, this.qo) != -2) for (u = this.g.Pa(s, this.yl), this.xl.jd(s, u); this.DO(s, c), c.size != 0; ) {
              u = !1;
              for (var l = 0, p = c.size; l < p; l++) {
                var y = c.get(l), d = this.xl.ja(y);
                this.xl.vd(y), u = this.Xm(s, d, l + 1 == p) || u;
              }
              if (t = t || u, c.clear(!1), !u) break;
            }
            s = this.g.U(s);
          }
          return t && this.vN(), this.kw = this.xl = null, this.g.Td(this.yl), this.g.Td(this.qo), t;
        }, n.prototype.vN = function() {
          for (var t = new e.h(), i = this.zd.je; i != -1; i = this.zd.qz(i)) {
            var h = this.zd.rc(i);
            for (this.g.D(this.zd.ja(h), t), h = this.zd.lb(h); h != -1; h = this.zd.lb(h)) this.g.mf(this.zd.ja(h), t);
          }
        }, n;
      }();
      e.Yt = r;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          r === void 0 && (r = null), this.yg = null, this.Pb = !1, this.yg = r === null ? [] : r;
        }
        return f.prototype.copyTo = function(r) {
          if (r.Pb) throw e.i.fa("CompositeGeographicTransformation is read-only");
          for (var n = 0; n < this.yg.length; n++) r.yg.push(this.yg[n].Of());
        }, f.prototype.count = function() {
          return this.yg.length;
        }, f.prototype.add = function(r) {
          if (this.Pb) throw e.i.fa("CompositeGeographicTransformation is read-only");
          this.yg.push(r.Of());
        }, f.prototype.clear = function() {
          if (this.Pb) throw e.i.fa("CompositeGeographicTransformation is read-only");
          this.yg.length = 0;
        }, f.prototype.remove = function(r) {
          if (this.Pb) throw e.i.fa("CompositeGeographicTransformation is read-only");
          this.yg.splice(r, 1);
        }, f.prototype.jg = function() {
          var r = new f();
          return this.copyTo(r), r;
        }, f.prototype.Of = function() {
          return this.jg();
        }, f.prototype.transform = function(r, n, t, i) {
          if (r.length < n) throw e.i.fa("invalid Argument");
          var h = t;
          for (t = 0; t < this.yg.length; t++) {
            var s = this.yg[t];
            if (s.qm() != null) {
              var o = s.Un, a = o ? 1 : 0, u = o ? s.qm().getGeogcs2() : s.qm().getGeogcs1();
              if (u = h / (u = u.getUnit().getUnitFactor()), 3552713678800501e-30 < Math.abs(u - 1)) for (h = 0; h < n; h++) r[h][0] *= u, r[h][1] *= u;
              e.MC.geogToGeog(s.qm(), n, r, null, a), h = (o ? s.qm().getGeogcs1() : s.qm().getGeogcs2()).getUnit().getUnitFactor();
            }
          }
          if (u = h / i, 3552713678800501e-30 < Math.abs(u - 1)) for (h = 0; h < n; h++) r[h][0] *= u, r[h][1] *= u;
          return n;
        }, f.prototype.Nb = function(r) {
          if (r == this) return !0;
          if (!(r instanceof f) || this.yg.length != r.yg.length) return !1;
          for (var n = 0; n < this.yg.length; n++) if (!this.yg[n].Nb(r.yg[n])) return !1;
          return !0;
        }, f.prototype.ix = function() {
          this.Pb = !0;
        }, f.prototype.toString = function() {
          for (var r = "CGT (" + this.count() + ") ", n = 0, t = this.count(); n < t; ++n) r += this.yg[n].toString() + ", ";
          return 200 < r.length ? r.substring(0, 197) + "... (" + r.length.toString() + " characters)" : r;
        }, f.create = function() {
          return new f();
        }, f;
      }();
      e.wC = v;
    }(k || (k = {})), function(e) {
      var v, f = Math.PI, r = 2 * Math.PI, n = Math.PI / 2, t = function() {
        function s() {
        }
        return s.TO = function(o, a) {
          var u = new s();
          return u.x = o, u.y = a, u.type = 0, u.Uh = 0, u;
        }, s.al = function(o) {
          var a = new s();
          return a.x = o.x, a.y = o.y, a.type = 0, a.Uh = 0, a;
        }, s.SO = function(o) {
          var a = new s();
          return a.x = o.x, a.y = o.y, a.type = o.type, a.Uh = o.Uh, a;
        }, s.Pd = function(o, a, u) {
          var c = new s();
          return c.x = o.x + a * Math.cos(u), c.y = o.y + a * Math.sin(u), c.type = o.type, c.Uh = o.Uh, c;
        }, s.Pu = function(o, a) {
          var u = new s();
          return u.x = 0.5 * (o.x + a.x), u.y = 0.5 * (o.y + a.y), u.type = o.type, u.Uh = o.Uh, u;
        }, s.TE = function(o, a) {
          var u = new s();
          return u.x = o.x + 1e-3 * (a.x - o.x), u.y = o.y + 1e-3 * (a.y - o.y), u.type = o.type, u.Uh = o.Uh, u;
        }, s;
      }(), i = function() {
      };
      (v = e.fL || (e.fL = {}))[v.Round = 0] = "Round", v[v.Bevel = 1] = "Bevel", v[v.Miter = 2] = "Miter", v[v.Square = 3] = "Square";
      var h = function() {
        function s(o) {
          this.NA = this.Yb = this.wg = null, this.nd = o;
        }
        return s.V = function(o, a, u, c, l, p) {
          if (o == null || 1 > o.Db()) throw e.i.N();
          return a == 0 || o.B() ? o : ((p = new s(p)).ko = o, p.Ka = a, p.qa = l, p.Ki = u, p.CA = c, p.Rx());
        }, s.prototype.eM = function() {
          var o = this.ko, a = o.ac(), u = o.wc(), c = new e.h();
          return c.uc(u, a), c.normalize(), c.Hv(), c.scale(this.Ka), a.add(c), u.add(c), c = o.Ia(), o.Dc(a), o.Qc(u), c;
        }, s.prototype.dM = function() {
          var o = this.ko;
          if (0 < this.Ka && this.Ki != 2) {
            var a = new e.Da();
            return a.ad(o, !1), this.ko = a, this.Rx();
          }
          return (o = new e.Fh(o.$)).W(this.Ka, this.Ka), o;
        }, s.prototype.tJ = function(o, a, u, c) {
          return (a.x - o.x) * (c.x - u.x) + (a.y - o.y) * (c.y - u.y);
        }, s.prototype.fc = function(o, a) {
          if (a === void 0) this.Yb.push(o), this.gf++;
          else if (this.gf == 0) this.fc(o);
          else {
            var u = this.Bw, c = this.wg[a == 0 ? u - 1 : a - 1], l = this.wg[a], p = this.tJ(c, l, this.Yb[this.gf - 1], o);
            0 < p ? this.fc(o) : 0 > p && (0 < this.tJ(c, l, l, this.Yb[this.gf - 1]) ? (l = this.wg[a == 0 ? u - 2 : a == 1 ? u - 1 : a - 2], u = t.Pd(c, this.Ka, Math.atan2(c.y - l.y, c.x - l.x) - n), this.Yb[this.gf - 1] = u, this.Ki == 1 || this.Ki == 2 ? (u = t.Pu(u, c), this.fc(u), u = t.Pd(c, this.Ka, this.Jv + n), (c = t.Pu(u, c)).type |= 256, this.fc(c)) : (u = t.Pd(c, this.Ka, this.Jv + n)).type |= 256, this.fc(u), this.fc(o, a)) : (u = t.Pd(l, this.Ka, this.Jv + n), this.fc(u), this.Ki == 1 || this.Ki == 2 ? (u = t.Pu(u, l), this.fc(u), u = t.Pd(l, this.Ka, this.aA - n), (c = t.Pu(u, l)).type |= 256, this.fc(c)) : (u = t.Pd(l, this.Ka, this.aA - n)).type |= 256, this.fc(u)));
          }
        }, s.prototype.mE = function() {
          var o, a = this.Bw;
          this.gf = 0;
          var u = 0.5 * this.qa, c = 0, l = 0;
          for (o = 0; o < a; o++) {
            var p = this.wg[o], y = o == 0 ? this.wg[a - 1] : this.wg[o - 1], d = o == a - 1 ? this.wg[0] : this.wg[o + 1], g = y.x - p.x, b = y.y - p.y, x = d.x - p.x, m = d.y - p.y, w = Math.atan2(b, g), j = Math.atan2(m, x);
            if (this.Jv = w, this.aA = j, o == 0 && (c = w, l = j), g = g * m - x * b, b = j, j < w && (j += r), 0 < g * this.Ka) this.Ki == 1 || this.Ki == 2 ? (w = t.Pd(p, this.Ka, w + n), this.fc(w), w = t.TE(p, w), this.fc(w), w = t.Pd(p, this.Ka, j - n), (p = t.TE(p, w)).type |= 256, this.fc(p), this.fc(w)) : (g = 0.5 * (j - w), g = this.Ka / Math.abs(Math.sin(g)), w = t.Pd(p, g, 0.5 * (w + j)), this.fc(w, o));
            else if (512 & p.type) {
              for (g = 1 - u / Math.abs(this.Ka), y = 1, d = 0 > this.Ka ? -f : f, -1 < g && 1 > g && (0.017453292519943295 > (b = 2 * Math.acos(g)) && (b = 0.017453292519943295), 1 < (y = e.O.truncate(f / b + 1.5)) && (d /= y)), b = w + n, w = t.Pd(p, this.Ka, b), o == 0 && (w.type |= 1024), this.fc(w, o), g = this.Ka / Math.cos(d / 2), b += d / 2, (w = t.Pd(p, g, b)).type |= 1024, this.fc(w); 0 < --y; ) b += d, (w = t.Pd(p, g, b)).type |= 1024, this.fc(w);
              (w = t.Pd(p, this.Ka, j - n)).type |= 1024, this.fc(w);
            } else if (this.Ki == 1) w = t.Pd(p, this.Ka, w + n), this.fc(w, o), w = t.Pd(p, this.Ka, j - n), this.fc(w);
            else if (this.Ki == 0) for (g = 1 - u / Math.abs(this.Ka), y = 1, d = j - n - (w + n), -1 < g && 1 > g && (0.017453292519943295 > (b = 2 * Math.acos(g)) && (b = 0.017453292519943295), 1 < (y = e.O.truncate(Math.abs(d) / b + 1.5)) && (d /= y)), g = this.Ka / Math.cos(0.5 * d), b = w + n + 0.5 * d, w = t.Pd(p, g, b), this.fc(w, o); 0 < --y; ) b += d, w = t.Pd(p, g, b), this.fc(w);
            else this.Ki == 2 ? (g = y.x - p.x, b = y.y - p.y, 0.99999999 < (y = (g * (x = d.x - p.x) + b * (m = d.y - p.y)) / Math.sqrt(g * g + b * b) / Math.sqrt(x * x + m * m)) ? (w = t.Pd(p, 1.4142135623730951 * this.Ka, j - 0.25 * f), this.fc(w, o), w = t.Pd(p, 1.4142135623730951 * this.Ka, j + 0.25 * f), this.fc(w)) : (y = Math.abs(this.Ka / Math.sin(0.5 * Math.acos(y)))) > (d = Math.abs(this.CA * this.Ka)) ? (g = 0.5 * (j - w), g = this.Ka / Math.abs(Math.sin(g)), w = t.Pd(p, g, 0.5 * (w + j)), j = e.h.construct(w.x, w.y), w = e.h.construct(p.x, p.y), (p = new e.h()).uc(j, w), (j = new e.h()).HW(d / p.length(), p, w), w = (y - d) * Math.abs(this.Ka) / Math.sqrt(y * y - this.Ka * this.Ka), 0 < this.Ka ? p.Hv() : p.ar(), p.scale(w / p.length()), (w = new e.h()).add(j, p), (y = new e.h()).uc(j, p), w = t.al(w), this.fc(w, o), w = t.al(y), this.fc(w)) : (g = 0.5 * (j - w), g = this.Ka / Math.abs(Math.sin(g)), w = t.Pd(p, g, 0.5 * (w + j)), this.fc(w, o))) : (j = b, 0 < this.Ka ? (j > w && (j -= r), y = w - j < n) : (j < w && (j += r), y = j - w < n), y ? (b = 0 > (g = 1.4142135623730951 * this.Ka) ? w + 0.25 * f : w + 0.75 * f, w = t.Pd(p, g, b), this.fc(w, o), b = 0 > g ? j - 0.25 * f : j - 0.75 * f, w = t.Pd(p, g, b), this.fc(w)) : (g = 0.5 * (j - w), g = this.Ka / Math.abs(Math.sin(g)), j < w && (j += r), w = t.Pd(p, g, (w + j) / 2), this.fc(w, o)));
          }
          return this.Jv = c, this.aA = l, this.fc(this.Yb[0], 0), p = t.SO(this.Yb[this.gf - 1]), this.Yb[0] = p, this.wW();
        }, s.prototype.Au = function(o, a) {
          if (!(2 > a)) for (var u = 0; u < a; u++) {
            var c = this.Yb[o + u];
            u != 0 ? this.NA.Ci(e.h.construct(c.x, c.y)) : this.NA.Lt(e.h.construct(c.x, c.y));
          }
        }, s.prototype.fM = function(o, a, u) {
          var c = o.Ba(a), l = o.Vc(a);
          if (this.Yb = [], this.NA = u, o.dc(a)) {
            for (a = o.Na(c); o.Na(l - 1).qb(a); ) l--;
            if (2 <= l - c) {
              for (this.Bw = l - c, this.wg = [], a = c; a < l; a++) this.wg.push(t.al(o.Na(a)));
              this.mE() && this.Au(0, this.gf - 1);
            }
          } else {
            for (a = o.Na(c); c < l && o.Na(c + 1).qb(a); ) c++;
            for (a = o.Na(l - 1); c < l && o.Na(l - 2).qb(a); ) l--;
            if (2 <= l - c) {
              for (this.Bw = 2 * (l - c) - 2, this.wg = [], (u = t.al(o.Na(c))).type |= 1536, this.wg.push(u), a = c + 1; a < l - 1; a++) u = t.al(o.Na(a)), this.wg.push(u);
              for ((u = t.al(o.Na(l - 1))).type |= 512, this.wg.push(u), a = l - 2; a >= c + 1; a--) (u = t.al(o.Na(a))).type |= 1024, this.wg.push(u);
              if (this.mE()) if (2 <= this.Yb.length) {
                for (o = -1, (l = (1024 & this.Yb[this.gf - 1].type) != 0) || (o = 0), a = 1; a < this.gf; a++) (c = (1024 & this.Yb[a].type) != 0) ? l || 1 < (l = a - 1) - o + 1 && this.Au(o, l - o + 1) : l && (o = a - 1), l = c;
                l || 1 < (l = this.gf - 1) - o + 1 && this.Au(o, l - o + 1);
              } else o = 0, l = this.gf - 1, 0 <= o && 1 <= l - o && this.Au(o, l - o + 1);
            }
          }
          this.wg = null, this.Bw = 0, this.Yb = null, this.gf = 0;
        }, s.prototype.wW = function() {
          for (var o = !1, a = 0; a < this.gf; a++) {
            var u = this.Yb[a];
            u.qh = a + 1, u.sh = a - 1, this.Yb[a] = u;
          }
          for ((u = this.Yb[0]).sh = this.gf - 2, this.Yb[0] = u, (u = this.Yb[this.gf - 2]).qh = 0, this.Yb[this.gf - 2] = u, a = u = 0; a < this.gf; a++) if (256 & this.Yb[u].type) {
            var c = this.GP(u);
            if (c == -1) {
              o = !0;
              break;
            }
            u = c;
          } else u = this.Yb[u].qh;
          return !o && (this.QO(u), !0);
        }, s.prototype.GP = function(o) {
          for (var a, u, c = this.gf - 1, l = o, p = 1; p <= c - 2; p++) {
            a = l = this.Yb[l].qh, u = o;
            for (var y = 1; y <= p; y++) {
              if (u = this.Yb[u].sh, (256 & this.Yb[u].type) == 0 && (256 & this.Yb[a].type) == 0) {
                var d = this.gS(u, a);
                if (d != -1) return d;
              }
              a = this.Yb[a].sh;
            }
          }
          return -1;
        }, s.prototype.gS = function(o, a) {
          var u = this.Yb[this.Yb[o].sh], c = this.Yb[o], l = this.Yb[this.Yb[a].sh], p = this.Yb[a];
          if (!this.JW(u, c, l, p)) return -1;
          var y = new i();
          return this.xQ(u, c, l, p, y) && !y.bE && e.O.bK((c.x - u.x) * (p.y - l.y) - (c.y - u.y) * (p.x - l.x)) != e.O.bK(this.Ka) ? (u = this.Yb[o].sh, y.an.type = c.type, y.an.qh = a, y.an.sh = u, this.Yb[o] = y.an, y.an = this.Yb[a], y.an.sh = o, this.Yb[a] = y.an, a) : -1;
        }, s.prototype.JW = function(o, a, u, c) {
          return Math.max(o.x, a.x) >= Math.min(u.x, c.x) && Math.max(u.x, c.x) >= Math.min(o.x, a.x) && Math.max(o.y, a.y) >= Math.min(u.y, c.y) && Math.max(u.y, c.y) >= Math.min(o.y, a.y);
        }, s.prototype.xQ = function(o, a, u, c, l) {
          l.bE = !1;
          var p = (a.y - o.y) * (c.x - u.x) - (a.x - o.x) * (c.y - u.y), y = (u.y - o.y) * (a.x - o.x) - (u.x - o.x) * (a.y - o.y);
          if (0 <= (p = p == 0 ? 2 : y / p) && 1 >= p) {
            var d = p;
            if (p = (c.y - u.y) * (a.x - o.x) - (c.x - u.x) * (a.y - o.y), y = (o.y - u.y) * (c.x - u.x) - (o.x - u.x) * (c.y - u.y), 0 <= (p = p == 0 ? 2 : y / p) && 1 >= p) return l.an = t.TO(o.x + p * (a.x - o.x), o.y + p * (a.y - o.y)), l.an.Uh = u.Uh + d * (c.Uh - u.Uh), d != 0 && d != 1 || p != 0 && p != 1 || (l.bE = !0), l.VY = p, l.WY = d, !((d == 0 || d == 1) && 0 < p && 1 > p || (p == 0 || p == 1) && 0 < d && 1 > d);
          }
          return !1;
        }, s.prototype.QO = function(o) {
          for (; this.Yb[o].sh < o; ) o = this.Yb[o].sh;
          var a = 0, u = o;
          do
            u = this.Yb[u], this.Yb[a] = u, u = u.qh, a++;
          while (u != o);
          this.Yb[a] = this.Yb[0], this.gf = a + 1;
        }, s.prototype.$C = function(o) {
          var a = this.ko, u = a.Ga();
          if (u != null) {
            u.Zi();
            for (var c = -1; u.$a(); ) c++, this.fM(a, c, o);
          }
        }, s.prototype.Rx = function() {
          var o = this.ko.getType();
          return o == 322 ? this.eM() : o == 197 ? this.dM() : e.aa.yd(o) ? ((o = new e.Ta()).oc(this.ko, !0), this.ko = o, this.Rx()) : o == 1607 ? (o = new e.Ta(), this.$C(o), o) : o == 1736 ? (o = new e.Da(), this.$C(o), o) : null;
        }, s;
      }();
      e.IK = h;
    }(k || (k = {})), function(e) {
      var v = function() {
        function t(i) {
          this.qk = i;
        }
        return t.prototype.D = function(i, h) {
          this.qk.g.D(i, h);
        }, t.prototype.vd = function(i) {
          var h = this.qk.Fa.ja(i);
          this.qk.Fa.vd(i, -1), this.qk.g.pd(h, !1);
        }, t;
      }(), f = function() {
        function t(i) {
          this.qk = i;
        }
        return t.prototype.D = function(i, h) {
          this.qk.IT.D(i, h);
        }, t.prototype.vd = function(i) {
          this.qk.Fa.vd(i, -1);
        }, t;
      }(), r = function() {
        function t(i) {
          this.qk = i;
        }
        return t.prototype.D = function(i, h) {
          h.L(this.qk.LT[i]);
        }, t.prototype.vd = function(i) {
          this.qk.Fa.vd(i, -1);
        }, t;
      }(), n = function() {
        function t(i) {
          i === void 0 ? (this.Fa = new e.Yj(), this.Fa.De(20), this.g = new e.gd(), this.xT = this.g.Ig(550), this.Ss = this.g.vf(this.xT, -1), this.Xh = new v(this)) : i instanceof Array ? (this.Fa = new e.Yj(), this.Fa.De(20), this.LT = i, this.Xh = new r(this)) : (this.Fa = new e.Yj(), this.Fa.De(20), this.IT = i, this.Xh = new f(this));
        }
        return t.prototype.Ib = function(i) {
          var h = i.getType();
          if (e.Gx.xj(h)) this.jN(i);
          else if (e.Vk.yd(h)) this.oN(i);
          else if (h == 197) this.gN(i);
          else {
            if (h != 33) throw e.i.N("invalid shape type");
            this.nN(i);
          }
        }, t.prototype.cR = function() {
          var i = new e.Sa(), h = this.Fa.rc(-1), s = new e.Da(this.g.ht);
          for (this.g.Vi(this.Fa.ja(h), i), s.nf(i), h = this.Fa.lb(h); h != -1; h = this.Fa.lb(h)) this.g.Vi(this.Fa.ja(h), i), s.lineTo(i);
          return s;
        }, t.RO = function(i) {
          var h = new t(i), s = i.I(), o = 1, a = new e.h(), u = new e.h(), c = new e.h();
          for (i.D(0, a); i.D(o, u), u.Rz(a) && o < s - 1; ) o++;
          for (h.Fa.addElement(0, -1), h.Fa.xn(o), s = o + 1; s < i.I(); s++) i.D(s, c), (o = h.pC(c)) != -1 && h.Fa.Sj(o, s);
          for (c = new e.Sa(), o = h.Fa.rc(-1), s = new e.Da(i.description), i.ve(h.Fa.ja(o), c), s.nf(c), o = h.Fa.lb(o); o != -1; o = h.Fa.lb(o)) i.ve(h.Fa.ja(o), c), s.lineTo(c);
          return s;
        }, t.construct = function(i, h, s) {
          for (var o = new t(i), a = 1, u = i[0]; i[a].Rz(u) && a < h - 1; ) a++;
          for (o.Fa.addElement(0, -1), o.Fa.xn(a), a += 1; a < h; a++) (u = o.pC(i[a])) != -1 && o.Fa.Sj(u, a);
          for (i = 0, h = o.Fa.rc(-1); h != -1; h = o.Fa.lb(h)) s[i++] = o.Fa.ja(h);
          return i;
        }, t.JG = function(i, h) {
          var s = i.Ba(h), o = i.Vc(h);
          if (h = !i.dc(h) && i.Nn(h), i = i.ub(0), o *= 2, h && (o -= 2), 6 > o - (s *= 2)) return !0;
          h = new e.h();
          var a = new e.h(), u = new e.h();
          i.tc(s, h), i.tc(s + 2, a), i.tc(s + 4, u);
          var c = t.Wu(a, u, h);
          if (c.ps() || !t.um(c.value())) return !1;
          var l = e.h.construct(a.x, a.y), p = new e.h();
          for (s += 6; s < o; s += 2)
            if (p.L(a), a.L(u), i.tc(s, u), (c = t.Wu(a, u, h)).ps() || !t.um(c.value()) || (c = t.Wu(l, u, h)).ps() || !t.um(c.value()) || (c = t.Wu(a, u, p)).ps() || !t.um(c.value())) return !1;
          return !0;
        }, t.prototype.jN = function(i) {
          for (var h = new e.Sa(), s = new e.h(), o = 0; o < i.I(); o++) {
            i.D(o, s);
            var a = this.Cr(s);
            if (a != -1) {
              i.ve(o, h);
              var u = this.g.fc(this.Ss, h);
              this.Fa.Sj(a, u);
            }
          }
        }, t.prototype.gN = function(i) {
          for (var h = new e.Sa(), s = new e.h(), o = 0; 4 > o; o++) {
            i.mB(o, s);
            var a = this.Cr(s);
            if (a != -1) {
              i.Hf(o, h);
              var u = this.g.fc(this.Ss, h);
              this.Fa.Sj(a, u);
            }
          }
        }, t.prototype.oN = function(i) {
          var h = new e.Sa(), s = i.ac();
          if ((s = this.Cr(s)) != -1) {
            i.To(h);
            var o = this.g.fc(this.Ss, h);
            this.Fa.Sj(s, o);
          }
          s = i.wc(), (s = this.Cr(s)) != -1 && (i.Po(h), i = this.g.fc(this.Ss, h), this.Fa.Sj(s, i));
        }, t.prototype.nN = function(i) {
          var h = i.D();
          (h = this.Cr(h)) != -1 && (i = this.g.fc(this.Ss, i), this.Fa.Sj(h, i));
        }, t.prototype.Cr = function(i) {
          var h = -1;
          if (this.Fa.size(-1) == 0) return this.Fa.addElement(-4, -1);
          if (this.Fa.size(-1) == 1) {
            var s = this.g.Na(this.Fa.ja(this.Fa.rc(-1)));
            return i.Rz(s) || (h = this.Fa.xn(-5)), h;
          }
          return this.pC(i);
        }, t.prototype.pC = function(i) {
          var h = -1;
          do {
            var s = this.Fa.rc(-1), o = this.Fa.Fc(-1), a = this.Fa.ja(s), u = this.Fa.ja(o), c = new e.h(), l = new e.h();
            if (this.Xh.D(a, c), this.Xh.D(u, l), a = e.h.Uq(l, i, c), t.um(a)) h = this.Fa.xn(-1), (c = this.nC(i, o, s)) != s && this.oC(i, s, this.Fa.we(c));
            else if (t.CG(a)) {
              l = this.Fa.sv(-1);
              var p = this.Fa.rc(-1), y = this.Fa.Fc(-1);
              for (a = new e.h(), u = new e.h(); p != this.Fa.we(y); ) {
                var d = this.Fa.ja(l);
                this.Xh.D(d, a), d = e.h.Uq(a, i, c), t.CG(d) ? (y = l, l = this.Fa.ll(l)) : (p = l, l = this.Fa.Xp(l));
              }
              if (l = y, c = p, d = this.Fa.ja(l), p = this.Fa.ja(c), this.Xh.D(d, a), this.Xh.D(p, u), c != s && (a = e.h.Uq(u, i, a), !t.um(a))) continue;
              h = this.Fa.zu(c, l, -2, !1), this.oC(i, l, o), this.nC(i, c, s);
            } else this.sb == null && (this.sb = new e.yb()), this.sb.Dc(l), this.sb.Qc(c), 0 > (c = this.sb.fe(i, !0)) ? (c = this.Fa.we(o), this.Fa.vd(o, -1), h = this.Fa.xn(-3), this.nC(i, c, s)) : 1 < c && (c = this.Fa.lb(s), this.Fa.vd(s, -1), h = this.Fa.zu(-1, c, -3, !1), this.oC(i, c, o));
          } while (!1);
          return h;
        }, t.prototype.oC = function(i, h, s) {
          if (h != s) {
            var o = this.Fa.ja(h), a = this.Fa.lb(h), u = new e.h(), c = new e.h();
            for (this.Xh.D(o, u); h != s && 2 < this.Fa.size(-1) && (this.Xh.D(this.Fa.ja(a), c), o = e.h.Uq(c, i, u), !t.um(o)); ) o = h, h = a, u.L(c), a = this.Fa.lb(h), this.Xh.vd(o);
          }
        }, t.prototype.nC = function(i, h, s) {
          if (h == s) return s;
          var o = this.Fa.ja(h), a = this.Fa.we(h), u = new e.h(), c = new e.h();
          for (this.Xh.D(o, u); h != s && 2 < this.Fa.size(-1) && (this.Xh.D(this.Fa.ja(a), c), o = e.h.Uq(u, i, c), !t.um(o)); ) o = h, h = a, u.L(c), a = this.Fa.we(h), this.Xh.vd(o);
          return h;
        }, t.Wu = function(i, h, s) {
          var o = new e.Wb();
          o.set(h.x), o.sub(i.x);
          var a = new e.Wb();
          a.set(s.y), a.sub(i.y);
          var u = new e.Wb();
          return u.set(h.y), u.sub(i.y), (h = new e.Wb()).set(s.x), h.sub(i.x), o.Ag(a), u.Ag(h), o.sub(u), o;
        }, t.um = function(i) {
          return 0 > i;
        }, t.CG = function(i) {
          return 0 < i;
        }, t;
      }();
      e.Zt = n;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.g = null, this.tH = !0, this.nd = r;
        }
        return f.zU = function(r, n, t) {
          return r = e.ta.Er(r), e.Yt.Cv(n.Lg(), n.ih(), t.Lg(), t.ih(), e.lc.ox(r));
        }, f.CO = function(r, n) {
          var t = new e.Sa();
          return e.Yt.WT(r, n, t), t;
        }, f.V = function(r, n, t, i) {
          return (t = new f(t)).g = r, t.qa = n, t.tH = i, t.EM();
        }, f.prototype.nM = function(r) {
          return e.Yt.iQ(this.g, r);
        }, f.prototype.sM = function(r) {
          return e.$t.V(this.g, r, this.nd);
        }, f.prototype.EM = function() {
          var r = this.qa, n = e.ta.Er(r), t = 1.00001 * (r = e.ta.rN(r));
          r *= 1.000001;
          for (var i = !1, h = 30 < this.g.fd + 10 ? 1e3 : (this.g.fd + 10) * (this.g.fd + 10), s = 0, o = this.g.jS(); ; s++) {
            if (s > h) throw e.i.fa("Internal Error: max number of iterations exceeded");
            var a = this.nM(n);
            if (i = i || a, this.tH && (a = this.g.Gp(n, !0, !1) != 0, i = i || a), a = !1, (s == 0 || o || e.$t.kI(!0, this.g, r, null, this.nd)) && (a = this.sM(t), i = i || a), !a) break;
            e.mp.zp(this.nd);
          }
          return i;
        }, f;
      }();
      e.Tk = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function r(n) {
          this.$d = this.Mc = null, this.Ys = 0, this.Ub = n, this.cA = !0;
        }
        return r.prototype.uv = function(n, t) {
          var i = this.g.bc(n);
          if (i == null) {
            if (!this.g.ed(n, t)) return null;
            i = t;
          }
          return i;
        }, r.prototype.Xq = function() {
          var n;
          n === void 0 && (n = !1), this.Ys++, (n || !(4095 & this.Ys)) && (this.Ys = 0, e.mp.zp(this.Ub));
        }, r.prototype.nP = function() {
          var n = this.g.Yq(!1), t = !1, i = new e.yb(), h = new e.yb(), s = new e.l();
          s.Oa();
          var o = new e.l();
          o.Oa();
          for (var a = new e.Sa(), u = new e.TC(), c = n.next(); c != -1; c = n.next()) {
            e.mp.zp(this.Ub);
            var l = null, p = !1;
            if (!e.aa.Rn(this.g.ic(n.ck))) {
              if ((l = this.uv(c, i)) == null) continue;
              if (l.A(s), s.W(this.qa, this.qa), l.Bi(this.qa)) {
                if (!l.Bi(0)) continue;
                p = !0, l = null;
              }
            }
            var y = this.g.Yq(n), d = y.next();
            for (d != -1 && (d = y.next()); d != -1; d = y.next()) {
              var g = null, b = !1;
              if (!e.aa.Rn(this.g.ic(y.ck))) {
                if ((g = this.uv(d, h)) == null) continue;
                if (g.A(o), g.Bi(this.qa)) {
                  if (!g.Bi(0)) continue;
                  b = !0, g = null;
                }
              }
              var x = 0, m = 0;
              if (l != null && g != null) s.HG(o) && (u.Oo(l), u.Oo(g), u.Ea(this.qa, !1), 0 < (x = u.ol(0)) + (m = u.ol(1)) && (this.g.jr(c, u, 0, !0), this.g.jr(d, u, 1, !0)), u.clear());
              else if (l != null) {
                var w = new e.h();
                if (this.g.D(d, w), s.contains(w)) {
                  if (u.Oo(l), this.g.Vi(d, a), u.Kz(this.qa, a, !1), 0 < (x = u.ol(0))) if (this.g.jr(c, u, 0, !0), b) {
                    for (b = -1, w = this.g.U(d); w != -1 && w != d && (b = w, (g = this.uv(w, h)) != null && g.Bi(0)); w = this.g.U(w)) ;
                    for (w = d; w != -1 && (this.g.Dh(w, u.Bf), w != b); w = this.g.U(w)) ;
                  } else this.g.Dh(d, u.Bf);
                  u.clear();
                }
              } else {
                if (g == null) continue;
                if (w = new e.h(), this.g.D(c, w), o.W(this.qa, this.qa), o.contains(w)) {
                  if (u.Oo(g), this.g.Vi(c, a), u.Kz(this.qa, a, !1), 0 < (m = u.ol(0))) if (this.g.jr(d, u, 0, !0), p) {
                    for (b = -1, w = this.g.U(c); w != -1 && w != c && (b = w, (g = this.uv(w, h)) != null && g.Bi(0)); w = this.g.U(w)) ;
                    for (w = c; w != -1 && (this.g.Dh(w, u.Bf), w != b); w = this.g.U(w)) ;
                  } else this.g.Dh(c, u.Bf);
                  u.clear();
                }
              }
              if (x + m != 0) {
                if (x != 0) {
                  if ((l = this.g.bc(c)) == null) {
                    if (!this.g.ed(c, i)) continue;
                    l = i, i.A(s);
                  } else l.A(s);
                  if (l.Bi(this.qa)) break;
                }
                t = !0;
              }
            }
          }
          return t;
        }, r.prototype.oP = function() {
          return this.QU();
        }, r.prototype.QU = function() {
          return new e.RC().PX(this.g, this.qa);
        }, r.prototype.lI = function() {
          var n = !1;
          this.Mc == null && (this.Mc = new e.Yj());
          var t = new e.ia(0);
          t.Jb(this.g.fd + 1);
          for (var i = this.g.Yq(), h = i.next(); h != -1; h = i.next()) t.add(h);
          this.g.nx(t, t.size), t.add(-1), i = this.g.Gd(), h = this.g.Gd(), this.$d = new e.UC(this.g, this.qa, !this.cA), this.Mc.Vo(this.$d);
          var s = new e.ia(0), o = new e.ia(0), a = 0;
          new e.h();
          var u = this.g.td;
          this.g.vb.mc();
          for (var c, l, p = this.g.vb.za[0].o, y = t.get(a++); y != -1; ) {
            var d = c = p[2 * (l = u.T(y, 0))], g = l = p[2 * l + 1];
            do {
              var b = u.T(y, 2), x = u.T(y, 1);
              if (b != -1) {
                var m = u.T(b, 0), w = p[2 * m];
                0 > (g < (m = p[2 * m + 1]) ? -1 : g > m ? 1 : d < w ? -1 : d > w ? 1 : 0) && (o.add(y), o.add(b));
              }
              x != -1 && (w = p[2 * (m = u.T(x, 0))], 0 > (g < (m = p[2 * m + 1]) ? -1 : g > m ? 1 : d < w ? -1 : d > w ? 1 : 0) && (o.add(x), o.add(x))), (w = this.g.Pa(y, i)) != -1 && (s.add(w), this.g.Ra(y, i, -1)), (w = this.g.Pa(y, h)) != -1 && (s.add(w), this.g.Ra(y, h, -1)), (y = t.get(a++)) !== -1 && (d = p[2 * (g = u.T(y, 0))], g = p[2 * g + 1]);
            } while (y != -1 && d === c && g === l);
            for (d = s.size == 1 && o.size == 2, w = g = -1, b = 0, x = s.size; b < x; b++) {
              m = s.get(b);
              var j = this.Mc.we(m);
              if (j == -1 || s.hG(j) || (g = j), (m = this.Mc.lb(m)) == -1 || s.hG(m) || (w = m), g != -1 && w != -1) break;
            }
            for (this.$d.$J(l, c), b = 0, x = s.size; b < x; b++) m = s.get(b), this.Mc.vd(m, -1);
            if (s.clear(!1), !d && g != -1 && w != -1 && this.qO(g, w)) {
              n = !0, this.Ni = this.$d.rm();
              break;
            }
            for (b = 0, x = o.size; b < x; b += 2) {
              if (l = o.get(b), c = o.get(b + 1), d ? (l = this.Mc.zu(g, w, l, !0), d = !1) : l = this.Mc.addElement(l, -1), this.$d.rg) {
                this.Ni = this.$d.rm(), n = !0;
                break;
              }
              this.g.Pa(c, i) == -1 ? this.g.Ra(c, i, l) : this.g.Ra(c, h, l);
            }
            if (n) break;
            o.Bh(0);
          }
          return this.g.Td(i), this.g.Td(h), n;
        }, r.prototype.qO = function(n, t) {
          return this.$d.compare(this.Mc, this.Mc.ja(n), t), n = this.$d.rg, this.$d.Kr(), n;
        }, r.yE = function(n) {
          for (var t = n.ld; t != -1; t = n.ue(t)) if (e.aa.Hc(n.ic(t))) return !0;
          return !1;
        }, r.fQ = function(n, t, i, h) {
          return !!r.yE(n) && ((t = new r(h)).g = n, t.qa = i, 15 > n.fd ? n = t.nP() : t.oP());
        }, r.V = function(n, t, i) {
          return r.fQ(n, n.IF(), t, i);
        }, r.kI = function(n, t, i, h, s) {
          if (!r.yE(t)) return !1;
          var o = new r(s);
          if (o.g = t, o.qa = i, o.cA = n, o.lI()) return h?.Wt(o.Ni), !0;
          var a = new e.Dd();
          return a.$B(), t.Oc(a), (o = new r(s)).g = t, o.qa = i, o.cA = n, n = o.lI(), a.$B(), t.Oc(a), !!n && (h?.Wt(o.Ni), !0);
        }, r.Ml = function(n, t) {
          return !(16 > (n = n.I())) && 2 * n + Math.log(n) * Math.LOG10E / Math.log(2) * t < 1 * n * t;
        }, r.lP = function(n, t, i, h) {
          var s = t.getType();
          if (e.aa.Hc(s)) return new r(h).mP(n, t, i);
          throw e.i.fa("crack_A_with_B");
        }, r.prototype.mP = function(n, t, i) {
          var h = new e.l();
          n.xc(h);
          var s = new e.l();
          if (t.xc(s), s.W(i, i), !s.isIntersecting(h)) return n;
          var o = n.Bb, a = null;
          o != null && (a = o.Fb), r.Ml(n, n.I()) && (a = e.ta.jj(n, s));
          var u = a != null ? a.getIterator() : null, c = t.Ga();
          t = n.Ga();
          var l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (s = []; c.$a(); ) for (; c.Ha(); ) {
            var p = c.ha();
            if (a != null) {
              for (u.Uo(p, i), o = u.next(); o != -1; o = u.next()) if (this.Xq(), t.Vb(a.ja(o), -1), t.Ha()) {
                var y = (o = t.ha()).Ea(p, null, l, null, i);
                for (o = 0; o < y; ++o) {
                  var d = l[o];
                  if (d != 0 && d != 1) {
                    var g = t.wb(), b = new f();
                    b.t = d, b.index = g, s.push(b);
                  }
                }
              }
            } else {
              var x = new e.l();
              if (p.xc(x), x.W(i, i), h.isIntersecting(x)) {
                for (t.Zi(); t.$a(); ) for (; t.Ha(); ) if (this.Xq(), o = t.ha(), d = new e.l(), o.xc(d), d.isIntersecting(x)) for (y = o.Ea(p, null, l, null, i), o = 0; o < y; ++o) (d = l[o]) != 0 && d != 1 && (g = t.wb(), (b = new f()).t = d, b.index = g, s.push(b));
              }
            }
          }
          if (s.length == 0) return n;
          for (s = s.sort(f.Ey), n = n.Ia(), t.Zi(); t.$a() && !t.Ha(); ) ;
          for (i = t.ha(), h = new e.ig(), a = -1, o = 0, u = s.length; o < u; ) {
            for (l = s[o].index, c = o + 1; c < u && s[c].index == l; ) ++c;
            for (; t.wb() < l; ) {
              if (this.Xq(), p = t.Ha(), d = t.gb, (x = p || !t.On() || t.Pn()) && n.oc(i, a != d), a = d, !p) for (; t.$a() && !t.Ha(); ) ;
              i = t.ha();
            }
            for (l = 0; o < c; o++) (d = s[o].t) != l && (i.ah(l, d, h), l = d, d = t.gb, n.oc(h.get(), a != d), a = d);
            if ((x = (p = t.Ha()) || !t.On() || t.Pn()) && (i.ah(l, 1, h), n.oc(h.get(), !1)), p) i = t.ha();
            else {
              for (; t.$a() && !t.Ha(); ) ;
              i = t.Ha() ? t.ha() : null;
            }
            o = c;
          }
          for (i != null && (d = t.gb, (x = (p = t.Ha()) || !t.On() || t.Pn()) && n.oc(i, a != d), a = d), p = t.Ha(); ; ) {
            if (!p) {
              for (; t.$a() && !(p = t.Ha()); ) ;
              if (!p) break;
            }
            i = t.ha(), d = t.gb, (x = (p = t.Ha()) || !t.On() || t.Pn()) && n.oc(i, a != d), a = d;
          }
          return n;
        }, r;
      }();
      e.$t = v;
      var f = function() {
        function r() {
        }
        return r.Ey = function(n, t) {
          return n.index == t.index ? n.t > t.t ? 1 : n.t < t.t ? -1 : 0 : n.index > t.index ? 1 : -1;
        }, r;
      }();
    }(k || (k = {})), function(e) {
      var v;
      (v = e.KK || (e.KK = {}))[v.Left = 0] = "Left", v[v.Right = 1] = "Right", v[v.Coincident = 2] = "Coincident", v[v.Undefined = 3] = "Undefined", v[v.Uncut = 4] = "Uncut";
      var f = function(t, i, h, s, o, a, u, c, l, p, y) {
        this.X = t, this.bt = i, this.Ns = h, this.tg = s, this.Lm = p, this.Al = y;
      };
      e.uY = f;
      var r = function() {
        function t(i, h) {
          this.JH = i, this.Hi = h;
        }
        return t.prototype.qM = function(i, h) {
          var s = new e.h();
          this.Hi.D(i, s);
          var o = new e.h();
          return this.Hi.D(h, o), (s = s.compare(o)) != 0 ? s : (i = this.Hi.Pa(i, this.JH)) < (h = this.Hi.Pa(h, this.JH)) ? -1 : i == h ? 0 : 1;
        }, t;
      }(), n = function(t, i, h, s, o, a, u, c, l) {
        this.tg = t, this.Ns = i, this.OA = h, this.UH = s, this.Ei = o, this.Al = a, this.Lm = u, this.VH = c, this.OT = l;
      };
      e.tY = n, e.LK = function() {
        function t() {
        }
        return t.JK = function(i, h, s, o, a, u) {
          if (h.B()) i = new f(h, 4, -1, -1, NaN, 4, -1, -1, NaN, -1, -1), a.push(i);
          else if (s.B()) i = new f(h, 4, -1, -1, NaN, 4, -1, -1, NaN, -1, -1), a.push(i);
          else {
            var c = new e.gd();
            if (c.Ib(h), c.Ib(s), e.Tk.V(c, o, u, !0), c.fd == 0) i = new f(h.Ia(), 4, -1, -1, NaN, 4, -1, -1, NaN, -1, -1), a.push(i);
            else {
              for (h = 0, s = c.Gd(), o = c.ld; o != -1; o = c.ue(o)) for (u = c.Ob(o); u != -1; u = c.Rb(u)) for (var l = c.Xa(u), p = 0, y = c.Ja(u); p < y; l = c.U(l), p++) c.Ra(l, s, h++);
              h = t.HM(s, c), t.cM(i, h, c, a);
            }
          }
        }, t.HM = function(i, h) {
          for (var s = h.fd, o = new e.ia(0), a = h.ld; a != -1; a = h.ue(a)) for (var u = h.Ob(a); u != -1; u = h.Rb(u)) for (var c = h.Xa(u), l = 0, p = h.Ja(u); l < p; c = h.U(c), l++) o.add(c);
          var y = new r(i, h);
          o.Vd(0, s, function(C, T) {
            return y.qM(C, T);
          }), i = [];
          var d = [], g = h.Gd(), b = h.Gd();
          a = h.ld, u = h.ue(a), p = new e.h();
          var x = new e.h(), m = o.get(0), w = h.bd(m), j = h.Qf(w);
          h.D(m, p);
          var M = 1;
          for (c = 0; M < s - 1; ) {
            var A = !1;
            for (l = M; l < s; l++) if (l != c) {
              var z = o.get(l), N = h.bd(z), I = h.Qf(N);
              if (h.D(z, x), !p.qb(x)) break;
              j == a && I == u && (A = t.uM(g, b, h, i, d, w, m, N, z));
            }
            if (A || c == M - 1) {
              if (A && c == M - 1 && M--, ++c == s) break;
              m = o.get(c), w = h.bd(m), j = h.Qf(w), h.D(m, p);
            }
            A || (M = c + 1);
          }
          for (s = [], a = h.ld; a != -1; a = h.ue(a)) for (u = h.Ob(a); u != -1; u = h.Rb(u)) for (o = h.Xa(u), l = 0, p = h.Ja(u); l < p; o = h.U(o), l++) {
            if (0 <= (c = h.Pa(o, b))) for (; c < d.length && d[c].tg == o; ) s.push(d[c++]);
            if (0 <= (c = h.Pa(o, g))) for (; c < i.length && i[c].tg == o; ) s.push(i[c++]);
          }
          return h.Td(g), h.Td(b), s;
        }, t.uM = function(i, h, s, o, a, u, c, l, p) {
          var y = s.rj(u), d = s.rj(l), g = s.Xa(u), b = s.Xa(l), x = s.Ma(c), m = s.Ma(p), w = !1, j = !1, M = !1, A = !1;
          return c != g && (p != b && (w = t.vM(i, s, o, u, x, l, m)), p != d && (j = t.wM(i, s, o, u, x, l, p))), c != y && (p != b && (M = t.xM(h, s, a, u, c, l, m, g)), p != d && (A = t.yM(h, s, a, u, c, l, p, g))), w && j && M ? (i = o.length - 1, a[A ? a.length - 2 : a.length - 1].Ei == 2 && (o[i - 1] = o[i], --o.length)) : w && j && A && a[a.length - 1].Ei == 2 && (a = o[o.length - 1], --o.length, s.Pa(a.tg, i) == o.length && s.Ra(a.tg, i, -1)), w || j || M || A;
        }, t.vM = function(i, h, s, o, a, u, c) {
          var l = new e.yb(), p = new e.yb(), y = [0, 0], d = [0, 0], g = h.bc(a);
          return g == null && (h.ed(a, l), g = l), (l = h.bc(c)) == null && (h.ed(c, p), l = p), 2 > (g = g.Ea(l, null, y, d, 0)) && (o = new n(a, o, y[0], NaN, g, c, u, d[0], NaN), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1)), !0;
        }, t.wM = function(i, h, s, o, a, u, c) {
          var l = new e.yb(), p = new e.yb(), y = [0, 0], d = [0, 0], g = h.bc(a);
          return g == null && (h.ed(a, l), g = l), (l = h.bc(c)) == null && (h.ed(c, p), l = p), 2 > (g = g.Ea(l, null, y, d, 0)) && (o = new n(a, o, y[0], NaN, g, c, u, d[0], NaN), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1), !0);
        }, t.xM = function(i, h, s, o, a, u, c, l) {
          var p = new e.yb(), y = new e.yb(), d = [0, 0], g = [0, 0], b = h.bc(a);
          return b == null && (h.ed(a, p), b = p), (p = h.bc(c)) == null && (h.ed(c, y), p = y), (b = b.Ea(p, null, d, g, 0)) == 2 ? (o = new n(a, o, d[0], d[1], b, c, u, g[0], g[1]), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1), !0) : (y = !1, a == l && (o = new n(a, o, d[0], NaN, b, c, u, g[0], NaN), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1), y = !0), y);
        }, t.yM = function(i, h, s, o, a, u, c, l) {
          var p = new e.yb(), y = new e.yb(), d = [0, 0], g = [0, 0], b = h.bc(a);
          return b == null && (h.ed(a, p), b = p), (p = h.bc(c)) == null && (h.ed(c, y), p = y), (b = b.Ea(p, null, d, g, 0)) == 2 ? (o = new n(a, o, d[0], d[1], b, c, u, g[0], g[1]), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1), !0) : (y = !1, a == l && (o = new n(a, o, d[0], NaN, b, c, u, g[0], NaN), s.push(o), 0 > (o = h.Pa(a, i)) && h.Ra(a, i, s.length - 1), y = !0), y);
        }, t.cM = function(i, h, s, o) {
          var a = [];
          a[0] = new e.h(), a[1] = new e.h(), a[2] = new e.h(), a[3] = new e.h();
          var u = new e.h(), c = new e.h(), l = new e.h(), p = new e.h(), y = null;
          o != null && (y = new e.ig()).Or();
          var d = 0, g = null, b = new e.yb();
          new e.yb();
          for (var x = s.Ob(s.ld); x != -1; x = s.Rb(x)) {
            for (var m = 4, w = -1, j = -1, M = -1, A = -1, z = NaN, N = !0, I = !1, C = !0, T = !0, D = !0, B = 0, E = x, G = 0, H = s.Xa(x), U = s.Ja(x), $ = 0; $ < U; H = s.U(H), $++) {
              var W = s.bc(H);
              if (W == null) {
                if (!s.ed(H, b)) continue;
                W = b;
              }
              j == -1 && (j = H);
              for (var R = 0; d < h.length && H == h[d].tg; ) {
                w = h[d].Ns;
                var K = h[d].tg, S = h[d].OA, X = h[d].Lm, V = h[d].Al, nt = h[d].VH;
                if (h[d].Ei == 2) {
                  if (I || (E = w, j = K, G = S, M = X, A = V, z = nt, m = 2, o != null ? g = new e.Ta() : B = 0, D = !1, T = !0), S = h[d].UH, nt = h[d].OT, o != null ? (W.ah(R, h[d].UH, y), g.oc(y.get(), T)) : B++, R = S, I = !0, T = N = !1, d + 1 == h.length || h[d + 1].Ei != 2 || h[d + 1].tg == K && h[d + 1].OA != R) {
                    if (o != null) {
                      var O = new f(g, 2, w, K, S, m, E, j, G, X, V);
                      o.push(O);
                    } else null.add(B);
                    E = w, j = K, G = S, M = X, A = V, z = nt, m = 2, I = N = !1, T = D = !0;
                  }
                } else {
                  var tt = s.U(K);
                  if (d < h.length - 1 && h[d + 1].tg == tt && h[d + 1].Al == V && h[d + 1].Ei == 2) S != R && (D && (o != null ? g = new e.Ta() : B = 0), N = 0 < d && h[d - 1].Ns == w ? m == 1 ? 0 : m == 0 ? 1 : 3 : 3, o != null ? (W.ah(R, S, y), g.oc(y.get(), T), O = new f(g, N, w, K, S, m, E, j, G, X, V), o.push(O)) : (B++, null.add(B)), R = S, E = w, j = K, G = S, M = X, A = V, z = nt, m = N, N = C = !1, T = D = !0);
                  else if (!t.CM(i, s, h, d, u, c)) {
                    t.zM(s, h, d, x, H, l, p);
                    var L = !1;
                    if (tt = !1, O = !0, !(u.qb(l) || c.qb(l) || u.qb(p) || c.qb(p))) {
                      a[0].L(u), a[1].L(c), a[2].L(l), a[3].L(p), a.sort(e.h.nu);
                      var yt = a[0], vt = a[1], dt = a[2], wt = a[3];
                      yt.qb(u) ? vt.qb(c) ? i ? (tt = L = !0, O = !1) : L = !1 : wt.qb(c) ? i ? O = tt = L = !0 : L = !1 : (L = !0, O = vt.qb(l)) : vt.qb(u) ? dt.qb(c) ? i ? (tt = L = !0, O = !1) : L = !1 : yt.qb(c) ? i ? O = tt = L = !0 : L = !1 : (L = !0, O = dt.qb(l)) : dt.qb(u) ? wt.qb(c) ? i ? (tt = L = !0, O = !1) : L = !1 : vt.qb(c) ? i ? O = tt = L = !0 : L = !1 : (L = !0, O = wt.qb(l)) : yt.qb(c) ? i ? (tt = L = !0, O = !1) : L = !1 : dt.qb(c) ? i ? O = tt = L = !0 : L = !1 : (L = !0, O = yt.qb(l));
                    }
                    L && (L = H == K, (S != R || L && R == 0) && (D && (o != null ? g = new e.Ta() : B = 0), o != null ? (W.ah(R, S, y), g.oc(y.get(), T)) : B++), O ? m != 1 ? ((S != R || L && R == 0) && (o != null ? (O = new f(g, 1, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B)), tt ? (d >= h.length - 2 || h[d + 2].Ns != w) && (m = 0) : m = 1) : ((S != R || L && R == 0) && (o != null ? (O = new f(g, 3, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B)), m = 1) : m != 0 ? ((S != R || L && R == 0) && (o != null ? (O = new f(g, 0, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B)), tt ? (d >= h.length - 2 || h[d + 2].Ns != w) && (m = 1) : m = 0) : ((S != R || L && R == 0) && (o != null ? (O = new f(g, 3, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B)), m = 0), (S != R || L && R == 0) && (R = S, E = w, j = K, G = S, M = X, A = V, z = nt, N = C = !1, T = D = !0));
                  }
                }
                d++;
              }
              R != 1 && (D && (o != null ? g = new e.Ta() : B = 0), o != null ? (W.ah(R, 1, y), g.oc(y.get(), T)) : B++, T = D = !1, C = !0);
            }
            C && (S = 1, K = s.rj(x), K = s.Ma(K), V = X = -1, nt = NaN, N ? o != null ? (O = new f(g, 4, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B) : (N = m == 1 ? 0 : m == 0 ? 1 : 3, o != null ? (O = new f(g, N, w, K, S, m, E, j, G, X, V), o.push(O)) : null.add(B)));
          }
        }, t.CM = function(i, h, s, o, a, u) {
          var c = s[o].VH;
          if (c == 1) return t.AM(i, h, s, o, a, u);
          if (c == 0) return t.BM(i, h, s, o, a, u);
          throw e.i.Qa();
        }, t.AM = function(i, h, s, o, a, u) {
          var c = new e.yb(), l = s[o].tg, p = s[o].Lm, y = s[o].Al, d = -1, g = -1, b = -1, x = -1;
          if (!i && 0 < o) {
            var m = s[o - 1];
            d = m.tg, g = m.Lm, b = m.Al, x = m.Ei;
          }
          var w = -1, j = -1, M = -1, A = -1;
          o < s.length - 1 && (w = (m = s[o + 1]).tg, j = m.Lm, M = m.Al, A = m.Ei);
          var z = h.U(l);
          return m = h.U(y), i ? o == s.length - 1 || w != l || j != p || M != m || A == 2 ? ((i = h.bc(y)) == null && (h.ed(y, c), i = c), u.L(i.kg()), a.mt(u), u.normalize(), a.normalize(), !1) : ((i = h.bc(y)) == null && (h.ed(y, c), i = c), a.L(i.kg()), (i = h.bc(m)) == null && (h.ed(m, c), i = c), u.L(i.kg()), a.Sq(), u.normalize(), a.normalize(), !1) : 0 < o && d == l && g == p && b == m && x == 2 || o < s.length - 1 && w == z && j == p && M == m && A == 2 ? ((i = h.bc(y)) == null && (h.ed(y, c), i = c), u.L(i.kg()), a.mt(u), u.normalize(), a.normalize(), !1) : !(o < s.length - 1 && w == l && j == p && M == m) || ((i = h.bc(y)) == null && (h.ed(y, c), i = c), a.L(i.kg()), (i = h.bc(m)) == null && (h.ed(m, c), i = c), u.L(i.kg()), a.Sq(), u.normalize(), a.normalize(), !1);
        }, t.BM = function(i, h, s, o, a, u) {
          var c = new e.yb(), l = s[o].tg, p = s[o].Lm, y = s[o].Al, d = -1, g = -1, b = -1, x = -1;
          if (!i && o < s.length - 1) {
            var m = s[o + 1];
            d = m.tg, g = m.Lm, b = m.Al, x = m.Ei;
          }
          var w = -1, j = -1, M = -1;
          m = -1, 0 < o && (w = (m = s[o - 1]).tg, j = m.Lm, M = m.Al, m = m.Ei);
          var A = h.U(l), z = h.Ma(y);
          return i ? o != 0 && w == l && j == p && M == z && m != 2 || ((i = h.bc(y)) == null && (h.ed(y, c), i = c), u.L(i.kg()), a.mt(u), u.normalize(), a.normalize(), !1) : !(0 < o && w == l && j == p && M == z && m == 2 || o < s.length - 1 && d == A && g == p && b == z && x == 2) || ((i = h.bc(y)) == null && (h.ed(y, c), i = c), u.L(i.kg()), a.mt(u), u.normalize(), a.normalize(), !1);
        }, t.zM = function(i, h, s, o, a, u, c) {
          var l = new e.yb(), p = i.bc(a);
          if (p == null && (i.ed(a, l), p = l), h = (s = h[s]).tg, s = s.OA, a = i.U(h), s == 1) u.L(p.kg()), a != -1 && a != i.rj(o) ? ((p = i.bc(a)) == null && (i.ed(a, l), p = l), c.L(p.kg()), (p = i.bc(h)) == null && i.ed(h, l)) : c.L(u), u.Sq(), c.normalize(), u.normalize();
          else {
            if (s != 0) throw e.i.Qa();
            c.L(p.kg()), u.mt(c), c.normalize(), u.normalize();
          }
        }, t;
      }();
    }(k || (k = {})), function(e) {
      var v;
      (v = e.bM || (e.bM = {}))[v.Linear = 0] = "Linear", v[v.Angular = 1] = "Angular", v[v.Area = 2] = "Area";
      var f = function() {
        function o(a, u, c) {
          this.od = u, this.ai = c, this.vA = a;
        }
        return o.prototype.Nb = function(a) {
          return a instanceof o && this.ai === a.ai;
        }, o.aG = function(a) {
          return a.od !== 0 ? null : a.vA === -1 ? new o(-1, 2, a.ai * a.ai) : o.Zg(h[a.vA]);
        }, o.Zg = function(a) {
          return (a = i[a]) === void 0 ? null : a;
        }, o.ZO = function(a, u, c) {
          var l = null;
          if (c != null) try {
            c.values[0] === "EPSG" && (l = o.Zg(parseInt(c.values[1])));
          } catch {
          }
          return l === null && (l = new o(-1, a, u)), l;
        }, o.prototype.Ec = function() {
          return this.vA;
        }, o.prototype.CF = function(a) {
          if (a.od != this.od) throw e.i.Hb();
          return this.ai / a.ai;
        }, o.Nh = function(a, u, c) {
          return u.CF(c) * a;
        }, o.XE = function(a, u, c, l, p) {
          for (c = c.CF(l), l = 0; l < u; l++) p[l] = a[l] * c;
        }, o;
      }();
      e.Tc = f;
      for (var r = [109401, 1e4, 109402, 4046.8564224, 109403, 4046.87260987425, 109404, 1, 109405, 0.09290304, 109406, 0.09290341161327487, 109407, 0.09290137299531805, 109408, 3.34450944, 109409, 3429904, 109410, 1.000027193184865, 109411, 404.6872609874253, 109412, 0.04046872609874253, 109413, 2.5899984703195216e6, 109414, 1e6, 109415, 0.8361123569578626, 109416, 404.67838076760535, 109417, 0.04046783807676053, 109418, 0.8361244606523066, 109419, 0.09290271785025629, 109420, 404.68423895571647, 109421, 0.04046842389557164, 109422, 0.83612589696064, 109423, 0.0929028774400711, 109424, 404.6849341289498, 109425, 0.04046849341289498, 109426, 0.836125904805842, 109427, 0.09290287831176021, 109428, 404.68493792602754, 109429, 0.04046849379260275, 109430, 0.09290354800069446, 109431, 0.09290274144751023, 109432, 0.09290207073852812, 109433, 0.09290279616016, 109434, 0.09290273520025, 109435, 0.836124673027592, 109436, 0.836118636646753, 109437, 0.8361251654414399, 109438, 0.83612461680225, 109439, 2589988110336e-6, 109440, 0.09290286332673177, 109441, 0.09290349665192114, 109442, 0.83612736, 109443, 0.8361307045194736, 109444, 404.68564224000005, 109445, 0.04046856422400001, 109446, 0.8361237024040001, 109447, 0.0929026336004445, 109448, 404.683871963536, 109449, 0.0404683871963536, 109450, 0.01, 109451, 1e-4, 109452, 1e-6, 109453, 64516e-8, 109454, 6451625806477421e-19, 109455, 25.292852640000003, 109456, 25.29295381171408, 109457, 3.4345281495040003e6, 109458, 3434290937856e-6, 109459, 2.89612324, 109460, 25e8, 109461, 225e8, 109462, 0.7168473118308245, 109463, 100, 109464, 1244521604938272e-22, 109465, 1e-12, 109466, 1e-18], n = [1031, 484813681109536e-23, 9101, 1, 9102, 0.0174532925199433, 9103, 2908882086657216e-19, 9104, 484813681109536e-20, 9105, 0.01570796326794897, 9106, 0.01570796326794897, 9109, 1e-6, 9112, 1570796326794897e-19, 9113, 1570796326794897e-21, 9114, 9817477042468104e-19], t = [1025, 1e-3, 109452, 1033, 0.01, 109451, 9001, 1, 109404, 9002, 0.3048, 109405, 9003, 0.3048006096012192, 109406, 9005, 0.3047972654, 109407, 9014, 1.8288, 109408, 9030, 1852, 109409, 9031, 1.0000135965, 109410, 9033, 20.11684023368047, 109411, 9034, 0.2011684023368047, 109412, 9035, 1609.3472186944375, 109413, 9036, 1e3, 109414, 9037, 0.9143917962000001, 109415, 9038, 20.1166195164, 109416, 9039, 0.201166195164, 109417, 9040, 0.9143984146160287, 109418, 9041, 0.304799471538676, 109419, 9042, 20.116765121552632, 109420, 9043, 0.2011676512155263, 109421, 9050, 0.9143992, 109422, 9051, 0.3047997333333333, 109423, 9052, 20.1167824, 109424, 9053, 0.201167824, 109425, 9060, 0.9143992042898124, 109426, 9061, 0.3047997347632708, 109427, 9062, 20.116782494375872, 109428, 9063, 0.2011678249437587, 109429, 9070, 0.3048008333333334, 109430, 9080, 0.3047995102481469, 109431, 9081, 0.30479841, 109432, 9082, 0.3047996, 109433, 9083, 0.3047995, 109434, 9084, 0.9143985307444408, 109435, 9085, 0.91439523, 109436, 9086, 0.9143988, 109437, 9087, 0.9143985, 109438, 9093, 1609.344, 109439, 9094, 0.3047997101815088, 109440, 9095, 0.3048007491, 109441, 9096, 0.9144, 109442, 9097, 20.1168, 109444, 9098, 0.201168, 109445, 9099, 0.914398, 109446, 9300, 0.3047993333333334, 109447, 9301, 20.116756, 109448, 9302, 0.20116756, 109449, 109001, 0.9144, 109442, 109002, 0.9144018288036576, 109443, 109003, 20.1168, 109444, 109004, 0.201168, 109445, 109005, 0.1, 109450, 109006, 0.01, 109451, 109007, 1e-3, 109452, 109008, 0.0254, 109453, 109009, 0.0254000508001016, 109454, 109010, 5.0292, 109455, 109011, 5.029210058420118, 109456, 109012, 1853.248, 109457, 109013, 1853.184, 109458, 109014, 1.7018, 109459, 109015, 0.8466683600033867, 109462, 109016, 3527777777777778e-19, 109464, 109017, 1e-6, 109465, 109018, 1e-9, 109466, 109030, 5e4, 109460, 109031, 15e4, 109461], i = [], h = [], s = 0; s < r.length; s += 2) i[r[s]] = new f(r[s], 2, r[s + 1]);
      for (r = null, s = 0; s < n.length; s += 2) i[n[s]] = new f(n[s], 1, n[s + 1]);
      for (n = null, s = 0; s < t.length; s += 3) i[t[s]] = new f(t[s], 0, t[s + 1]), h[t[s]] = t[s + 2];
      t = null;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.xb = this.pb = 0;
        }
        return f.prototype.set = function(r, n) {
          n !== void 0 ? (this.pb = r, this.xb = n) : typeof r == "number" ? (this.pb = r, this.xb = 0) : (this.pb = r.pb, this.xb = r.xb);
        }, f.prototype.value = function() {
          return this.pb;
        }, f.prototype.add = function(r) {
          var n = this.pb + r.pb;
          r = this.xb + r.xb + 2220446049250313e-31 * Math.abs(n), this.pb = n, this.xb = r;
        }, f.prototype.kN = function() {
          var r = this.pb + 1, n = this.xb + 2220446049250313e-31 * Math.abs(r);
          this.pb = r, this.xb = n;
        }, f.prototype.dN = function(r, n) {
          this.pb = r.pb + n.pb, this.xb = r.xb + n.xb + 2220446049250313e-31 * Math.abs(this.pb);
        }, f.prototype.sub = function(r) {
          if (typeof r == "number") {
            var n = this.pb - r;
            r = this.xb + 2220446049250313e-31 * Math.abs(n);
          } else n = this.pb - r.pb, r = this.xb + r.xb + 2220446049250313e-31 * Math.abs(n);
          this.pb = n, this.xb = r;
        }, f.prototype.Ag = function(r) {
          var n = this.pb * r.pb;
          this.xb = this.xb * Math.abs(r.pb) + r.xb * Math.abs(this.pb) + this.xb * r.xb + 2220446049250313e-31 * Math.abs(n), this.pb = n;
        }, f.prototype.No = function(r) {
          var n = this.pb * r;
          this.xb = this.xb * Math.abs(r) + 2220446049250313e-31 * Math.abs(n), this.pb = n;
        }, f.prototype.Kl = function(r, n) {
          var t = Math.abs(r.pb) * Math.abs(n.pb);
          this.xb = r.xb * Math.abs(n.pb) + n.xb * Math.abs(r.pb) + r.xb * n.xb + 2220446049250313e-31 * Math.abs(t), this.pb = t;
        }, f.prototype.jm = function(r) {
          var n = Math.abs(r.pb), t = this.pb / r.pb, i = (this.xb + Math.abs(t) * r.xb) / n;
          r.xb > 0.01 * n && (i *= 1 + (1 + (r = r.xb / n)) * r), this.pb = t, this.xb = i + 2220446049250313e-31 * Math.abs(t);
        }, f.prototype.sqrt = function() {
          if (0 <= this.pb) {
            var r = Math.sqrt(this.pb), n = this.pb > 10 * this.xb ? 0.5 * this.xb / r : this.pb > this.xb ? r - Math.sqrt(this.pb - this.xb) : Math.max(r, Math.sqrt(this.pb + this.xb) - r);
            n += 2220446049250313e-31 * Math.abs(r);
          } else this.pb < -1 * this.xb ? n = r = NaN : (r = 0, n = Math.sqrt(this.xb));
          this.pb = r, this.xb = n;
        }, f.prototype.sin = function(r) {
          var n = Math.sin(r.pb), t = Math.cos(r.pb);
          this.pb = n, n = Math.abs(n), this.xb = (Math.abs(t) + 0.5 * n * r.xb) * r.xb + 2220446049250313e-31 * n;
        }, f.prototype.cos = function(r) {
          var n = Math.sin(r.pb), t = Math.cos(r.pb);
          this.pb = t, t = Math.abs(t), this.xb = (Math.abs(n) + 0.5 * t * r.xb) * r.xb + 2220446049250313e-31 * t;
        }, f.prototype.qg = function() {
          return Math.abs(this.pb) <= this.xb;
        }, f.prototype.ps = function() {
          return this.qg() && this.xb != 0;
        }, f;
      }();
      e.Wb = v;
    }(k || (k = {}));
    var Q = new k.h(), ht = new k.h(), et = new k.h(), st = new k.h(), ot = new k.h();
    (function(e) {
      var v, f;
      (f = v || (v = {}))[f.closedPath = 1] = "closedPath", f[f.exteriorPath = 2] = "exteriorPath", f[f.ringAreaValid = 4] = "ringAreaValid";
      var r = function() {
        function n(t, i, h, s, o, a, u) {
          i !== void 0 ? (this.ib = t, this.ck = i, this.bl = h, this.ii = s, this.ya = a, this.hA = u, this.ew = o) : (this.ib = t.ib, this.ck = t.ck, this.bl = t.bl, this.ii = t.ii, this.ya = t.ya, this.hA = t.hA, this.ew = t.ew), this.bH = !0;
        }
        return n.prototype.next = function() {
          return this.bH ? (this.bH = !1, this.ii) : this.ii != -1 ? (this.ii = this.ib.U(this.ii), this.ya++, this.ii != -1 && this.ii != this.ew ? this.ii : this.$T()) : -1;
        }, n.prototype.$T = function() {
          for (this.bl = this.ib.Rb(this.bl), this.ya = 0; this.ck != -1; ) {
            for (; this.bl != -1; this.bl = this.ib.Rb(this.bl)) if (this.ew = this.ii = this.ib.Xa(this.bl), this.ii != -1) return this.ii;
            if (this.ck = this.ib.ue(this.ck), this.ck == -1) break;
            this.hA && !e.aa.Hc(this.ib.ic(this.ck)) || (this.bl = this.ib.Ob(this.ck));
          }
          return -1;
        }, n.AP = function(t, i, h, s, o, a, u) {
          return new n(t, i, h, s, o, a, u);
        }, n;
      }();
      e.zY = r, v = function() {
        function n() {
          this.jo = this.Am = this.wk = this.cd = this.Ck = this.vo = this.Oi = this.md = this.bi = this.Sg = this.We = this.Il = null, this.qw = this.ld = -1, this.fd = 0, this.fA = !1, this.ht = this.it = this.vb = null;
        }
        return n.prototype.Sh = function(t) {
          return this.We != null ? this.We[t] : null;
        }, n.prototype.Xg = function(t, i) {
          if (this.We == null) {
            if (i == null) return;
            this.We = [];
            for (var h = 0, s = this.vb.I(); h < s; h++) this.We.push(null);
          }
          this.We[t] = i;
        }, n.prototype.bp = function(t, i) {
          this.md.S(t, 1, i);
        }, n.prototype.ap = function(t, i) {
          this.md.S(t, 2, i);
        }, n.prototype.VB = function(t, i) {
          this.md.S(t, 6, i);
        }, n.prototype.Sp = function(t) {
          return this.md.T(t, 6);
        }, n.prototype.gx = function(t, i) {
          this.md.S(t, 7, i);
        }, n.prototype.qv = function(t) {
          return this.md.T(t, 0);
        }, n.prototype.OJ = function(t, i) {
          this.cd.S(t, 1, i);
        }, n.prototype.SJ = function(t, i) {
          this.cd.S(t, 0, i);
        }, n.prototype.JF = function(t) {
          return this.cd.T(t, 7);
        }, n.prototype.Zo = function(t, i) {
          this.cd.S(t, 3, i);
        }, n.prototype.$o = function(t, i) {
          this.cd.S(t, 4, i);
        }, n.prototype.uU = function(t) {
          this.cd == null && (this.cd = new e.$c(8));
          var i = this.cd.Ce();
          return this.cd.S(i, 2, t), this.cd.S(i, 5, 0), this.cd.S(i, 6, 0), this.cd.S(i, 7, i), i;
        }, n.prototype.OQ = function(t) {
          this.cd.jd(t);
        }, n.prototype.wU = function(t) {
          this.md == null && (this.md = new e.$c(8), this.td = new e.$c(5), this.Oi = new e.be(0), this.vo = new e.be(0));
          var i = this.md.Ce();
          return this.md.S(i, 0, i), this.md.S(i, 3, 0), this.md.S(i, 6, 0), this.gx(i, t), i >= this.Oi.size && (t = 16 > i ? 16 : e.O.truncate(3 * i / 2), this.Oi.resize(t), this.vo.resize(t)), this.Oi.set(i, 0), this.vo.set(i, 0), i;
        }, n.prototype.sF = function(t) {
          this.md.jd(t);
        }, n.prototype.Vy = function(t) {
          this.td.jd(t), this.fd--;
        }, n.prototype.oI = function(t) {
          this.md == null && (this.md = new e.$c(8), this.td = new e.$c(5), this.Oi = new e.be(0), this.vo = new e.be(0));
          var i = this.td.Ce(), h = 0 <= t ? t : i;
          if (this.td.S(i, 0, h), 0 > t) {
            if (h >= this.vb.I()) {
              if (t = 16 > h ? 16 : e.O.truncate(3 * h / 2), this.vb.resize(t), this.We != null) for (var s = 0; s < t; s++) this.We.push(null);
              this.Sg != null && this.Sg.resize(t), this.it = this.vb.ub(0);
            }
            this.vb.Cb(h, -1e38, -1e38), this.We != null && (this.We[h] = null), this.Sg != null && this.Sg.write(h, 1);
          }
          return this.td.S(i, 4, 2 * h), this.fd++, i;
        }, n.prototype.wj = function(t, i, h) {
          var s = i != -1 ? this.Ma(i) : this.rj(t), o = s != -1 ? this.U(s) : -1, a = this.oI(h == null ? this.fd : -1), u = this.Ua(a);
          return h != null && this.vb.Ht(u, h), this.aj(a, t), this.Bc(a, o), this.Cc(a, s), o != -1 && this.Cc(o, a), s != -1 && this.Bc(s, a), h = this.dc(t), s = this.Xa(t), i == -1 && this.Wg(t, a), i == s && this.Jf(t, a), h && o == -1 && (this.Bc(a, a), this.Cc(a, a)), this.Vj(t, this.Ja(t) + 1), t = this.Qf(t), this.Tj(t, this.I(t) + 1), a;
        }, n.prototype.nm = function() {
          return this.jo == null && (this.jo = new e.Sa(this.vb.description)), this.jo;
        }, n.prototype.Yo = function(t, i) {
          this.cd.S(t, 2, -134217729 & this.cd.T(t, 2) || (i == 1 ? 134217728 : 0));
        }, n.prototype.In = function(t) {
          return 134217728 & this.cd.T(t, 2) ? 1 : 0;
        }, n.prototype.hN = function(t) {
          var i = this.Ig(t.getType(), t.description);
          return t.getType() == 1736 && this.Yo(i, t.In()), this.UD(i, t), i;
        }, n.prototype.iN = function(t) {
          var i = this.Ig(t.getType(), t.description);
          return this.VD(i, t), i;
        }, n.prototype.XV = function(t, i) {
          this.md == null && (this.md = new e.$c(8), this.td = new e.$c(5), this.Oi = new e.be(0), this.vo = new e.be(0)), this.md.De(this.md.Hg + t), this.td.De(this.td.Hg + i), this.Oi.Jb(this.Oi.size + t), this.vo.Jb(this.vo.size + t);
        }, n.prototype.UD = function(t, i) {
          this.XV(i.da(), i.I()), this.Il.Fd(i, 0, i.I()), this.it = this.vb.ub(0);
          for (var h = this.We != null && i.Ve != null, s = 0, o = i.da(); s < o; s++) if (!(2 > i.Ja(s))) {
            var a = this.vf(t, -1);
            this.kn(a, i.dc(s));
            for (var u = i.Ba(s), c = i.Vc(s); u < c; u++) {
              var l = this.wj(a, -1, null);
              if (h) if (l = this.Ua(l), (1 & i.ZF(u)) != 0) this.Xg(l, null);
              else {
                var p = new e.ig();
                i.bc(u, p, !0), this.Xg(l, p.get());
              }
            }
          }
        }, n.prototype.VD = function(t, i) {
          this.Il.Fd(i, 0, i.I()), this.it = this.vb.ub(0), t = this.vf(t, -1);
          var h = 0;
          for (i = i.I(); h < i; h++) this.wj(t, -1, null);
        }, n.prototype.NX = function(t, i, h) {
          var s = this.U(t);
          if (s == -1) throw e.i.Qa();
          for (var o = this.nm(), a = this.bd(t), u = 0, c = i.ol(h); u < c; u++) {
            var l = this.Ua(t), p = this.U(t), y = i.Vp(h, u);
            u == 0 && (y.To(o), this.Dh(t, o)), y.getType() == 322 ? this.Xg(l, null) : this.Xg(l, e.aa.jg(y)), y.Po(o), u < c - 1 ? t = this.wj(a, p, o) : this.Dh(s, o);
          }
        }, n.prototype.MX = function(t, i, h) {
          var s = this.U(t);
          if (s == -1) throw e.i.Qa();
          for (var o = this.nm(), a = this.bd(t), u = 0, c = i.ol(h); u < c; u++) {
            var l = this.Ua(t), p = this.U(t), y = i.Vp(h, c - u - 1);
            u == 0 && (y.Po(o), this.Dh(t, o)), y.getType() == 322 ? this.Xg(l, null) : this.Xg(l, e.aa.jg(y)), y.To(o), u < c - 1 ? t = this.wj(a, p, o) : this.Dh(s, o);
          }
        }, n.prototype.IF = function() {
          var t = new e.l();
          t.Oa();
          for (var i = this.Yq(), h = new e.h(), s = !0, o = i.next(); o != -1; o = i.next()) this.D(o, h), s ? t.Zb(h.x, h.y) : t.Lk(h.x, h.y), s = !1;
          return t;
        }, n.prototype.Ib = function(t) {
          var i = t.getType();
          if (e.aa.Hc(i)) return this.hN(t);
          if (i == 550) return this.iN(t);
          throw e.i.Qa();
        }, n.prototype.uN = function(t, i) {
          var h = i.getType();
          if (e.aa.Hc(h)) this.UD(t, i);
          else {
            if (h != 550) throw e.i.Qa();
            this.VD(t, i);
          }
        }, n.prototype.mN = function(t, i) {
          var h = this.Ig(1736, t.description);
          if (2 > t.Ja(i)) return h;
          this.Il.Fd(t, t.Ba(i), t.Vc(i)), this.it = this.vb.ub(0);
          var s = this.vf(h, -1);
          this.kn(s, t.dc(i) || !0);
          var o = this.We != null && t.Ve != null, a = t.Ba(i);
          for (i = t.Vc(i); a < i; a++) {
            var u = this.wj(s, -1, null);
            if (o) if (u = this.Ua(u), (1 & t.ZF(a)) != 0) this.Xg(u, null);
            else {
              var c = new e.ig();
              t.bc(a, c, !0), this.Xg(u, c.get());
            }
          }
          return h;
        }, n.prototype.Ne = function(t) {
          var i = this.ic(t), h = e.ZK.Ig(i, this.Il.description), s = this.I(t);
          if (s == 0) return h;
          if (e.aa.Hc(i)) {
            i = this.da(t);
            for (var o = e.Yc.Oh(i + 1), a = e.Yc.Mr(i + 1, 0), u = h.description, c = 0, l = u.Aa; c < l; c++) {
              for (var p = u.kd(c), y = e.ra.Va(p), d = e.Yc.YE(p, s), g = this.vb.ub(p), b = 0, x = 0, m = 0, w = this.Ob(t); w != -1; w = this.Rb(w)) {
                var j = 0;
                this.dc(w) && (j |= 1), this.YS(w) && (j |= 4), j != 0 && a.zJ(x, j);
                var M = this.Ja(w);
                if (o.write(x++, m), m += M, p == 0) {
                  M = g;
                  var A = d, z = new e.h();
                  for (j = this.Xa(w); b < m; j = this.U(j), b++) {
                    var N = this.Ua(j);
                    M.tc(2 * N, z), A.Tt(2 * b, z);
                  }
                } else for (j = this.Xa(w); b < m; j = this.U(j), b++) for (N = this.Ua(j), A = 0; A < y; A++) z = g.eg(N * y + A), d.pr(b * y + A, z);
              }
              h.hn(p, d), o.write(i, s);
            }
            h.PJ(a), h.QJ(o), h.Pc(16777215);
          } else if (i == 550) {
            for (u = h.description, h.resize(s), c = 0, l = u.Aa; c < l; c++) {
              for (p = u.kd(c), y = e.ra.Va(p), d = h.ub(p), g = this.vb.ub(p), b = 0, w = this.Ob(t), M = this.Ja(w), j = this.Xa(w); b < M; j = this.U(j), b++) for (N = this.Ua(j), A = 0; A < y; A++) z = g.eg(N * y + A), d.pr(b * y + A, z);
              h.hn(p, d);
            }
            h.Pc(16777215);
          }
          return h;
        }, n.prototype.BB = function(t) {
          for (var i = this.Ob(t); i != -1; i = this.Zq(i)) ;
          i = this.PR(t);
          var h = this.ue(t);
          i != -1 ? this.OJ(i, h) : this.ld = h, h != -1 ? this.SJ(h, i) : this.qw = i, this.OQ(t);
        }, n.prototype.Ig = function(t, i) {
          return i === void 0 ? this.$E(t, e.ee.og()) : this.$E(t, i);
        }, n.prototype.$E = function(t, i) {
          return t = this.uU(t), this.vb == null ? this.vb = this.Il = new e.de(i) : this.Il.Jl(i), this.ht = this.Il.description, this.fA = 1 < this.ht.Aa, this.ld == -1 ? this.ld = t : (this.SJ(t, this.qw), this.OJ(this.qw, t)), this.qw = t;
        }, n.prototype.ue = function(t) {
          return this.cd.T(t, 1);
        }, n.prototype.PR = function(t) {
          return this.cd.T(t, 0);
        }, n.prototype.ic = function(t) {
          return 2147483647 & this.cd.T(t, 2);
        }, n.prototype.HJ = function(t, i, h) {
          i = this.wk[i], (t = this.JF(t)) >= i.size && i.resize(Math.max(e.O.truncate(1.25 * t), 16), -1), i.write(t, h);
        }, n.prototype.KF = function(t, i) {
          return (t = this.JF(t)) < (i = this.wk[i]).size ? i.read(t) : -1;
        }, n.prototype.aF = function() {
          this.wk == null && (this.wk = []);
          for (var t = 0; t < this.wk.length; t++) if (this.wk[t] == null) return this.wk[t] = e.Yc.Oh(0), t;
          return this.wk.push(e.Yc.Oh(0)), this.wk.length - 1;
        }, n.prototype.xW = function(t) {
          this.wk[t] = null;
        }, n.prototype.Ob = function(t) {
          return this.cd.T(t, 3);
        }, n.prototype.kv = function(t) {
          return this.cd.T(t, 4);
        }, n.prototype.I = function(t) {
          return this.cd.T(t, 5);
        }, n.prototype.da = function(t) {
          return this.cd.T(t, 6);
        }, n.prototype.Gp = function(t, i, h) {
          for (var s = 0, o = this.ld; o != -1; o = this.ue(o)) {
            var a = this.ic(o);
            if (e.aa.Hc(a) && (!h || a == 1736)) {
              a = this.ic(o) == 1736;
              for (var u = this.Ob(o); u != -1; ) {
                for (var c = 0, l = this.Xa(u); c < e.O.truncate(this.Ja(u) / 2); ) {
                  var p = this.U(l);
                  if (p == -1) break;
                  var y = this.Ua(l), d = this.Sh(y);
                  d != null ? y = d.Qb() : (d = this.Ua(p), y = this.vb.yr(y, d)), y <= t ? (y == 0 ? s == 0 && (s = -1) : s = 1, p != this.rj(u) && (this.lC(p, l), this.pd(p, !0))) : l = this.U(l), c++;
                }
                for (c = this.Xa(u), l = this.dc(u) ? c : this.rj(u); 0 < this.Ja(u); ) {
                  if ((p = this.Ma(l)) == -1) {
                    this.pd(l, !0), s == 0 && (s = -1);
                    break;
                  }
                  var g = this.Ua(p);
                  if ((d = this.Sh(g)) != null ? y = d.Qb() : (y = this.Ua(l), y = this.vb.yr(y, g)), y <= t) y == 0 ? s == 0 && (s = -1) : s = 1, this.lC(p, l), this.pd(p, !1), c == p && (c = this.Xa(u));
                  else if ((l = this.Ma(l)) == c) break;
                }
                l = this.Ja(u), i && (a ? 3 > l : 2 > l) ? (u = this.Zq(u), s = 0 < l ? 1 : s == 0 ? -1 : s) : u = this.Rb(u);
              }
            }
          }
          return s;
        }, n.prototype.lC = function(t, i) {
          var h = this.Ua(t), s = this.Ua(i);
          if (this.Sg != null && (h = this.Sg.read(h), this.Sg.write(s, h)), this.bi != null) {
            for (s = 0, h = this.bi.length; s < h; s++) if (this.bi[s] != null) {
              var o = this.Pa(t, s);
              o != -1 && this.Ra(i, s, o);
            }
          }
        }, n.prototype.Ul = function(t, i, h) {
          var s = 0, o = this.U(t);
          if (o == -1) throw e.i.Qa();
          for (var a = this.Ua(t), u = this.Ua(o), c = this.Sh(a), l = c == null ? this.vb.yr(a, u) : c.Qb(), p = 0; p < h; p++) {
            var y = i[p];
            if (0 < y && 1 > y) {
              var d = y;
              c != null && (d = 0 < l ? c.Ux(y) / l : 0), this.vb.kD(a, u, d, this.nm());
              var g = this.wj(this.bd(t), o, this.nm());
              if (s++, c != null) {
                var b = c.dl(0, y);
                d = this.Ua(this.Ma(g)), this.Xg(d, b), this.mf(g, b.wc()), p != h - 1 && i[p + 1] != 1 || (y = c.dl(y, 1), this.Xg(d, y));
              }
            }
          }
          return s;
        }, n.prototype.LX = function(t, i, h) {
          var s = 0, o = this.U(t);
          if (o == -1) throw e.i.fa("internal error");
          var a = this.Ua(t), u = this.Ua(o), c = this.Sh(a), l = c == null ? this.vb.yr(a, u) : c.Qb(), p = 0;
          t = this.bd(t);
          for (var y = 0; y < h; y++) {
            var d = i[y];
            if (p < d && 1 > d) {
              var g = d;
              if (c != null && (g = 0 < l ? c.Ux(d) / l : 0), this.vb.kD(a, u, g, this.nm()), g = this.yS(t, o, this.nm()), s++, c != null) {
                p = c.dl(p, d);
                var b = this.Ua(this.Ma(g));
                this.Xg(b, p), this.Cb(g, p.pa, p.la), y != h - 1 && i[y + 1] != 1 || (p = c.dl(d, 1), g = this.Ua(g), this.Xg(g, p));
              }
            }
            p = d;
          }
          return s;
        }, n.prototype.yS = function(t, i, h) {
          var s = i != -1 ? this.Ma(i) : this.rj(t), o = s != -1 ? this.U(s) : -1, a = this.oI(h == null ? this.fd : -1), u = this.Ua(a);
          return h != null && this.vb.Ht(u, h), this.aj(a, t), this.Bc(a, o), this.Cc(a, s), o != -1 && this.Cc(o, a), s != -1 && this.Bc(s, a), h = this.dc(t), s = this.Xa(t), i == -1 && this.Wg(t, a), i == s && (h && s != -1 || this.Jf(t, a)), h && o == -1 && (this.Bc(a, a), this.Cc(a, a)), this.Vj(t, this.Ja(t) + 1), t = this.Qf(t), this.Tj(t, this.I(t) + 1), a;
        }, n.prototype.uE = function(t, i, h) {
          var s = this.Ua(i), o = this.Ua(h);
          if (0 > s || o > this.fd - 1) throw e.i.N("invalid call");
          if (s > o && !this.dc(t)) throw e.i.N("cannot iterate across an open path");
          for (t = 0; i != h; i = this.U(i)) s = this.Ua(i), (o = this.Sh(s)) != null ? t += o.Qb() : (o = this.Ua(this.U(i)), t += this.vb.yr(s, o));
          return t;
        }, n.prototype.Dh = function(t, i) {
          var h = this.Ua(t);
          this.vb.Ht(h, i), (h = this.Sh(h)) != null && h.setStart(i), (t = this.Ma(t)) != -1 && (t = this.Ua(t), this.Sh(t) != null && h.setEnd(i));
        }, n.prototype.Vi = function(t, i) {
          t = this.Ua(t), this.vb.ve(t, i);
        }, n.prototype.mf = function(t, i) {
          this.Cb(t, i.x, i.y);
        }, n.prototype.Cb = function(t, i, h) {
          var s = this.Ua(t);
          this.vb.Cb(s, i, h), (s = this.Sh(s)) != null && s.ZB(i, h), (t = this.Ma(t)) != -1 && (t = this.Ua(t), this.Sh(t) != null && s.Ql(i, h));
        }, n.prototype.D = function(t, i) {
          this.vb.D(this.td.T(t, 0), i);
        }, n.prototype.Gc = function(t, i) {
          this.vb.za[0].tc(2 * this.td.T(t, 0), i);
        }, n.prototype.Na = function(t) {
          var i = new e.h();
          return this.vb.D(this.td.T(t, 0), i), i;
        }, n.prototype.dG = function(t, i) {
          this.it.tc(2 * t, i);
        }, n.prototype.Uc = function(t, i, h) {
          return this.vb.Uc(t, this.Ua(i), h);
        }, n.prototype.setAttribute = function(t, i, h, s) {
          this.vb.setAttribute(t, this.Ua(i), h, s);
        }, n.prototype.Ua = function(t) {
          return this.td.T(t, 0);
        }, n.prototype.ih = function() {
          var t = new e.h();
          return this.D(void 0, t), t.y;
        }, n.prototype.fq = function(t, i) {
          t = this.Ua(t), i = this.Ua(i);
          var h = this.vb.za[0].o;
          return h[2 * t] === h[2 * i] && h[2 * t + 1] === h[2 * i + 1];
        }, n.prototype.Dv = function(t, i) {
          t = this.Ua(t);
          var h = this.vb.za[0].o;
          return h[2 * t] === i.x && h[2 * t + 1] === i.y;
        }, n.prototype.vX = function(t, i) {
          if (1 > i && (i = 1), this.Sg == null) {
            if (i == 1) return;
            this.Sg = e.Yc.Dn(this.vb.I(), 1);
          }
          (t = this.Ua(t)) >= this.Sg.size && this.Sg.resize(t + 1, 1), this.Sg.write(t, i);
        }, n.prototype.cG = function(t) {
          return t = this.Ua(t), this.Sg == null || t >= this.Sg.size ? 1 : this.Sg.read(t);
        }, n.prototype.Ra = function(t, i, h) {
          i = this.bi[i], t = this.Ua(t), i.size < this.vb.I() && i.resize(this.vb.I(), -1), i.write(t, h);
        }, n.prototype.Pa = function(t, i) {
          return (t = this.Ua(t)) < (i = this.bi[i]).size ? i.read(t) : -1;
        }, n.prototype.Gd = function() {
          this.bi == null && (this.bi = []);
          for (var t = 0; t < this.bi.length; t++) if (this.bi[t] == null) return this.bi[t] = e.Yc.Oh(0, -1), t;
          return this.bi.push(e.Yc.Oh(0, -1)), this.bi.length - 1;
        }, n.prototype.Td = function(t) {
          this.bi[t] = null;
        }, n.prototype.bc = function(t) {
          return this.We != null ? (t = this.Ua(t), this.We[t]) : null;
        }, n.prototype.ed = function(t, i) {
          var h = this.td.T(t, 2);
          if (h == -1) return !1;
          if (this.fA) {
            var s = new e.Sa();
            this.Vi(t, s), i.setStart(s), this.Vi(h, s), i.setEnd(s);
          } else this.vb.Gc(this.td.T(t, 0), Q), i.em(0, Q), this.vb.Gc(this.td.T(h, 0), Q), i.em(1, Q);
          return !0;
        }, n.prototype.mW = function(t, i, h) {
          if (this.fA) {
            var s = new e.Sa();
            this.Vi(t, s), h.setStart(s), this.Vi(i, s), h.setEnd(s);
          } else this.vb.Gc(t, Q), h.em(0, Q), this.vb.Gc(i, Q), h.em(1, Q);
        }, n.prototype.vf = function(t, i) {
          if (i != -1) {
            if (t != this.Qf(i)) throw e.i.Qa();
            var h = this.cs(i);
          } else h = this.kv(t);
          var s = this.wU(t);
          return i != -1 && this.bp(i, s), this.ap(s, i), this.bp(s, h), h != -1 ? this.ap(h, s) : this.Zo(t, s), i == -1 && this.$o(t, s), this.Rl(t, this.da(t) + 1), s;
        }, n.prototype.nG = function(t, i, h, s) {
          t = this.vf(t, -1);
          for (var o = 0, a = i, u = !1; a == h && (u = !0), this.aj(a, t), o++, (a = this.U(a)) != i; ) ;
          return this.kn(t, !0), this.Vj(t, o), u && (i = h), this.Jf(t, i), this.Wg(t, this.Ma(i)), this.cp(t, !1), s != null && (s[0] = u), t;
        }, n.prototype.Zq = function(t) {
          var i = this.cs(t), h = this.Rb(t), s = this.Qf(t);
          return i != -1 ? this.ap(i, h) : this.Zo(s, h), h != -1 ? this.bp(h, i) : this.$o(s, i), this.AO(t), this.Rl(s, this.da(s) - 1), this.sF(t), h;
        }, n.prototype.AO = function(t) {
          var i = this.Xa(t);
          if (i != -1) {
            for (var h = 0, s = this.Ja(t); h < s; h++) {
              var o = i;
              i = this.U(i), this.Vy(o);
            }
            i = this.Qf(t), this.Tj(i, this.I(i) - this.Ja(t));
          }
          this.Vj(t, 0);
        }, n.prototype.Rb = function(t) {
          return this.md.T(t, 2);
        }, n.prototype.cs = function(t) {
          return this.md.T(t, 1);
        }, n.prototype.Ja = function(t) {
          return this.md.T(t, 3);
        }, n.prototype.dc = function(t) {
          return (1 & this.Sp(t)) != 0;
        }, n.prototype.kn = function(t, i) {
          if (this.dc(t) != i) {
            if (0 < this.Ja(t)) {
              var h = this.Xa(t), s = this.rj(t);
              i ? (this.Bc(s, h), this.Cc(h, s), h = this.Ua(s)) : (this.Bc(s, -1), this.Cc(h, -1), h = this.Ua(s)), this.Xg(h, null);
            }
            this.VB(t, (1 | this.Sp(t)) - 1 | (i ? 1 : 0));
          }
        }, n.prototype.Qf = function(t) {
          return this.md.T(t, 7);
        }, n.prototype.YS = function(t) {
          return (2 & this.Sp(t)) != 0;
        }, n.prototype.PB = function(t, i) {
          this.VB(t, (2 | this.Sp(t)) - 2 | (i ? 2 : 0));
        }, n.prototype.wz = function(t) {
          if (this.cT(t)) return this.Oi.get(this.qv(t));
          var i = new e.yb(), h = this.Xa(t);
          if (h == -1) return 0;
          var s = new e.h();
          this.D(h, s);
          for (var o = 0, a = 0, u = this.Ja(t); a < u; a++, h = this.U(h)) {
            var c = this.bc(h);
            if (c == null) {
              if (!this.ed(h, i)) continue;
              c = i;
            }
            o += c.Tx(s.x, s.y);
          }
          return this.cp(t, !0), this.Oi.set(this.qv(t), o), o;
        }, n.prototype.gr = function(t, i, h) {
          i = this.Ck[i], t = this.qv(t), i.size < this.Oi.size && i.resize(this.Oi.size, -1), i.write(t, h);
        }, n.prototype.sj = function(t, i) {
          return (t = this.qv(t)) < (i = this.Ck[i]).size ? i.read(t) : -1;
        }, n.prototype.Ky = function() {
          this.Ck == null && (this.Ck = []);
          for (var t = 0; t < this.Ck.length; t++) if (this.Ck[t] == null) return this.Ck[t] = e.Yc.Oh(0), t;
          return this.Ck.push(e.Yc.Oh(0)), this.Ck.length - 1;
        }, n.prototype.CB = function(t) {
          this.Ck[t] = null;
        }, n.prototype.ZT = function(t, i, h) {
          if (h == -1) throw e.i.N();
          if (i != h) {
            var s = this.Rb(h), o = this.cs(h), a = this.Qf(h);
            o == -1 ? this.Zo(a, s) : this.ap(o, s), s == -1 ? this.$o(a, o) : this.bp(s, o), this.Tj(a, this.I(a) - this.Ja(h)), this.Rl(a, this.da(a) - 1), o = i == -1 ? this.kv(t) : this.cs(i), this.bp(h, o), this.ap(h, i), i == -1 ? this.$o(t, h) : this.bp(i, h), o == -1 ? this.Zo(t, h) : this.ap(o, h), this.Tj(t, this.I(t) + this.Ja(h)), this.Rl(t, this.da(t) + 1), this.gx(h, t);
          }
        }, n.prototype.ij = function(t, i) {
          this.vb.ve(this.Ua(i), this.nm()), this.wj(t, -1, this.nm());
        }, n.prototype.pd = function(t, i) {
          var h = this.bd(t), s = this.Ma(t), o = this.U(t);
          s != -1 && this.Bc(s, o);
          var a = this.Ja(h);
          if (t == this.Xa(h) && this.Jf(h, 1 < a ? o : -1), o != -1 && this.Cc(o, s), t == this.rj(h) && this.Wg(h, 1 < a ? s : -1), s != -1 && o != -1) {
            s = this.Ua(s);
            var u = this.Ua(o);
            i ? (i = this.Sh(s)) != null && (s = new e.h(), this.vb.D(u, s), i.Qc(s)) : (u = this.Ua(t), i = this.Sh(u), this.Xg(s, i), i != null && (s = this.vb.Na(s), i.Dc(s)));
          }
          return this.Vj(h, a - 1), h = this.Qf(h), this.Tj(h, this.I(h) - 1), this.Vy(t), o;
        }, n.prototype.Xa = function(t) {
          return this.md.T(t, 4);
        }, n.prototype.rj = function(t) {
          return this.md.T(t, 5);
        }, n.prototype.U = function(t) {
          return this.td.T(t, 2);
        }, n.prototype.Ma = function(t) {
          return this.td.T(t, 1);
        }, n.prototype.bd = function(t) {
          return this.td.T(t, 3);
        }, n.prototype.fc = function(t, i) {
          return this.wj(t, -1, i);
        }, n.prototype.Yq = function(t) {
          if (t === void 0) return this.Yq(!1);
          if (t instanceof r) return new r(t);
          var i, h = -1, s = -1, o = -1, a = 0, u = !1;
          for (i = this.ld; i != -1; i = this.ue(i)) if (!t || e.aa.Hc(this.ic(i))) {
            for (h = this.Ob(i); h != -1; h = this.Rb(h)) if (o = s = this.Xa(h), a = 0, s != -1) {
              u = !0;
              break;
            }
            if (u) break;
          }
          return r.AP(this, i, h, s, o, a, t);
        }, n.prototype.Oc = function(t) {
          if (this.Il.Oc(t), this.We != null) for (var i = 0, h = this.We.length; i < h; i++) this.We[i] != null && this.We[i].Oc(t);
        }, n.prototype.jr = function(t, i, h, s) {
          s ? this.NX(t, i, h) : this.MX(t, i, h);
        }, n.prototype.Cc = function(t, i) {
          this.td.S(t, 1, i);
        }, n.prototype.Bc = function(t, i) {
          this.td.S(t, 2, i);
        }, n.prototype.aj = function(t, i) {
          this.td.S(t, 3, i);
        }, n.prototype.Vj = function(t, i) {
          this.md.S(t, 3, i);
        }, n.prototype.Jf = function(t, i) {
          this.md.S(t, 4, i);
        }, n.prototype.Wg = function(t, i) {
          this.md.S(t, 5, i);
        }, n.prototype.Rl = function(t, i) {
          this.cd.S(t, 6, i);
        }, n.prototype.Tj = function(t, i) {
          this.cd.S(t, 5, i);
        }, n.prototype.pJ = function(t) {
          var i = t;
          do {
            var h = this.U(i);
            this.Bc(i, this.Ma(i)), this.Cc(i, h), i = h;
          } while (i != t);
        }, n.prototype.bC = function(t) {
          this.fd = t;
        }, n.prototype.$q = function(t) {
          var i = this.cs(t), h = this.Rb(t), s = this.Qf(t);
          i != -1 ? this.ap(i, h) : this.Zo(s, h), h != -1 ? this.bp(h, i) : this.$o(s, i), this.Jf(t, -1), this.Wg(t, -1), this.sF(t);
        }, n.prototype.mi = function(t, i) {
          var h = this.Ma(t), s = this.U(t);
          if (h != -1 && this.Bc(h, s), s != -1 && this.Cc(s, h), h != -1 && s != -1) if (h = this.Ua(h), s = this.Ua(s), i) {
            if ((i = this.Sh(h)) != null) {
              var o = new e.h();
              this.vb.D(s, o), i.Qc(o);
            }
          } else i = this.Ua(t), i = this.Sh(i), this.Xg(h, i), i != null && (o = new e.h(), this.vb.D(h, o), i.Dc(o));
          this.Vy(t);
        }, n.prototype.cT = function(t) {
          return (4 & this.Sp(t)) != 0;
        }, n.prototype.cp = function(t, i) {
          this.VB(t, (4 | this.Sp(t)) - 4 | (i ? 4 : 0));
        }, n.prototype.nx = function(t, i) {
          var h = this.td.o;
          this.vb.mc();
          var s = this.vb.za[0].o;
          t.Vd(0, i, function(o, a) {
            var u = h[5 * o];
            o = h[5 * a], a = s[2 * u], u = s[2 * u + 1];
            var c = s[2 * o];
            return u < (o = s[2 * o + 1]) ? -1 : u > o ? 1 : a < c ? -1 : a > c ? 1 : 0;
          });
        }, n.prototype.jS = function() {
          for (var t = this.ld; t != -1; t = this.ue(t)) if (!e.aa.Hc(this.ic(t))) return !0;
          return !1;
        }, n.prototype.hC = function(t, i) {
          for (var h = this.Ob(t), s = this.Ob(i), o = this.kv(t), a = this.kv(i), u = this.Ob(t); u != -1; u = this.Rb(u)) this.gx(u, i);
          for (u = this.Ob(i); u != -1; u = this.Rb(u)) this.gx(u, t);
          this.Zo(t, s), this.Zo(i, h), this.$o(t, a), this.$o(i, o), h = this.I(t), s = this.da(t), o = this.da(i), this.Tj(t, this.I(i)), this.Tj(i, h), this.Rl(t, o), this.Rl(i, s), h = this.cd.T(t, 2), this.cd.S(t, 2, this.cd.T(i, 2)), this.cd.S(i, 2, h);
        }, n;
      }(), e.gd = v;
    })(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n, t, i, h) {
          var s = f.call(this) || this;
          return s.$ = new e.l(), n === void 0 ? s.UE() : typeof n == "number" ? s.VO(n, t, i, h) : n instanceof e.Sa ? t !== void 0 ? s.Qu(n, t, i) : s.WO(n) : n instanceof e.ra ? t !== void 0 ? s.YO(n, t) : s.XO(n) : n instanceof e.l ? s.UO(n) : s.UE(), s;
        }
        return J(r, f), r.prototype.Qu = function(n, t, i) {
          this.description = e.ee.og(), this.$.Oa(), n.B() || this.tu(n, t, i);
        }, r.prototype.UO = function(n) {
          this.description = e.ee.og(), this.$.K(n), this.$.normalize();
        }, r.prototype.XO = function(n) {
          if (n == null) throw e.i.N();
          this.description = n, this.$.Oa();
        }, r.prototype.YO = function(n, t) {
          if (n == null) throw e.i.N();
          this.description = n, this.$.K(t), this.$.normalize();
        }, r.prototype.UE = function() {
          this.description = e.ee.og(), this.$.Oa();
        }, r.prototype.WO = function(n) {
          this.description = e.ee.og(), this.$.Oa(), n.B() || this.tu(n);
        }, r.prototype.VO = function(n, t, i, h) {
          this.description = e.ee.og(), this.K(n, t, i, h);
        }, r.prototype.K = function(n, t, i, h) {
          if (this.vc(), typeof n == "number") this.$.K(n, t, i, h);
          else for (this.Oa(), t = 0, i = n.length; t < i; t++) this.Zb(n[t]);
        }, r.prototype.Xo = function(n) {
          if (this.vc(), !n.fT()) throw e.i.N();
          this.$.K(n);
        }, r.prototype.Oa = function() {
          this.vc(), this.$.Oa();
        }, r.prototype.B = function() {
          return this.$.B();
        }, r.prototype.R = function() {
          return this.$.R();
        }, r.prototype.ca = function() {
          return this.$.ca();
        }, r.prototype.gk = function() {
          return this.$.gk();
        }, r.prototype.Jp = function() {
          return this.$.Jp();
        }, r.prototype.Ip = function() {
          return this.$.sf();
        }, r.prototype.Zb = function(n) {
          if (n instanceof e.h) this.vc(), this.$.Zb(n);
          else if (n instanceof e.l) this.vc(), this.$.Zb(n);
          else if (n instanceof e.Sa) {
            if (this.vc(), !n.Ac()) {
              var t = n.description;
              if (this.description != t && this.Jl(t), this.B()) this.tu(n);
              else {
                this.$.Zb(n.D());
                for (var i = 1, h = t.Aa; i < h; i++) for (var s = t.Ed(i), o = e.ra.Va(s), a = 0; a < o; a++) {
                  var u = n.Uc(s, a), c = this.Tg(s, a);
                  c.Zb(u), this.setInterval(s, a, c);
                }
              }
            }
          } else if (n instanceof r && !n.B()) for ((t = n.description) != this.description && this.Jl(t), this.$.Zb(n.$), i = 1, h = t.Aa; i < h; i++) for (s = t.kd(i), o = e.ra.Va(s), a = 0; a < o; a++) u = n.Tg(s, a), (c = this.Tg(s, a)).Zb(u), this.setInterval(s, a, c);
        }, r.prototype.tu = function(n, t, i) {
          if (t !== void 0) {
            this.$.K(n.D(), t, i), i = 1;
            for (var h = (t = n.description).Aa; i < h; i++) for (var s = t.Ed(i), o = e.ra.Va(s), a = 0; a < o; a++) {
              var u = n.Uc(s, a);
              this.setInterval(s, a, u, u);
            }
          } else for (this.$.K(n.ka[0], n.ka[1]), i = 1, h = (t = n.description).Aa; i < h; i++) for (s = t.Ed(i), o = e.ra.Va(s), a = 0; a < o; a++) u = n.Uc(s, a), this.setInterval(s, a, u, u);
        }, r.prototype.setInterval = function(n, t, i, h) {
          if (i = typeof i == "number" ? new e.Nc(i, h) : i, this.vc(), n == 0) if (t == 0) this.$.v = i.oa, this.$.C = i.va;
          else {
            if (t != 1) throw e.i.ce();
            this.$.G = i.oa, this.$.H = i.va;
          }
          else this.vD(0, n, t, i.oa), this.vD(1, n, t, i.va);
        }, r.prototype.W = function(n, t) {
          this.vc(), this.$.W(n, t);
        }, r.prototype.Oc = function(n) {
          if (n instanceof e.Dd) this.vc(), n.mC(this.$);
          else if (this.vc(), !this.$.B()) {
            var t = new e.OK();
            this.Qo(t), t.XS() ? t.Oa() : n.mC(t);
          }
        }, r.prototype.copyTo = function(n) {
          if (n.getType() != this.getType()) throw e.i.N();
          if (n.vc(), n.description = this.description, n.$.K(this.$), n.ka = null, this.ka != null) {
            n.ou();
            for (var t = 0; t < 2 * (this.description.Ae.length - 2); t++) n.ka[t] = this.ka[t];
          }
        }, r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.Ke = function() {
          return this.$.wF();
        }, r.prototype.Qb = function() {
          return this.$.yR();
        }, r.prototype.getType = function() {
          return 197;
        }, r.prototype.Db = function() {
          return 2;
        }, r.prototype.bn = function(n) {
          this.copyTo(n);
        }, r.prototype.A = function(n) {
          n.v = this.$.v, n.G = this.$.G, n.C = this.$.C, n.H = this.$.H;
        }, r.prototype.Qo = function(n) {
          n.v = this.$.v, n.G = this.$.G, n.C = this.$.C, n.H = this.$.H, n.K(this.$.v, this.$.G, this.Od(0, 1, 0), this.$.C, this.$.H, this.Od(1, 1, 0));
        }, r.prototype.Tg = function(n, t) {
          var i = new e.Nc();
          return i.K(this.Od(0, n, t), this.Od(1, n, t)), i;
        }, r.prototype.Hf = function(n, t) {
          t.Nf(this.description);
          var i = this.description.Aa - 1;
          switch (n) {
            case 0:
              for (n = 0; n < i; n++) for (var h = this.description.kd(n), s = e.ra.Va(h), o = 0; o < s; o++) t.setAttribute(h, o, this.Od(0, h, o));
              t.Cb(this.$.v, this.$.G);
              break;
            case 1:
              for (n = 0; n < i; n++) for (h = this.description.kd(n), s = e.ra.Va(h), o = 0; o < s; o++) t.setAttribute(h, o, this.Od(1, h, o));
              t.Cb(this.$.v, this.$.H);
              break;
            case 2:
              for (n = 0; n < i; n++) for (h = this.description.kd(n), s = e.ra.Va(h), o = 0; o < s; o++) t.setAttribute(h, o, this.Od(0, h, o));
              t.Cb(this.$.C, this.$.H);
              break;
            case 3:
              for (n = 0; n < i; n++) for (h = this.description.kd(n), s = e.ra.Va(h), o = 0; o < s; o++) t.setAttribute(h, o, this.Od(1, h, o));
              t.Cb(this.$.C, this.$.G);
              break;
            default:
              throw e.i.ce();
          }
        }, r.prototype.mB = function(n, t) {
          n = this.$.mB(n), t.ma(n.x, n.y);
        }, r.prototype.kR = function(n, t) {
          return t * (n.Oq - 2);
        }, r.prototype.xF = function(n, t, i) {
          if (this.$.B()) throw e.i.fa("empty geometry");
          if (t == 0) return n != 0 ? i != 0 ? this.$.H : this.$.C : i != 0 ? this.$.G : this.$.v;
          if (i >= e.ra.Va(t)) throw e.i.N();
          var h = this.description.Pf(t);
          return this.ou(), 0 <= h ? this.ka[this.kR(this.description, n) + this.description.LR(h) - 2 + i] : e.ra.se(t);
        }, r.prototype.ou = function() {
          if (this.vc(), this.ka == null && 2 < this.description.Ae.length) {
            this.ka = [];
            for (var n = r.Gg(this.description, 0), t = r.Gg(this.description, 1), i = 0, h = 1, s = this.description.Aa; h < s; h++) {
              var o = this.description.kd(h), a = e.ra.Va(o);
              o = e.ra.se(o);
              for (var u = 0; u < a; u++) this.ka[n + i] = o, this.ka[t + i] = o, i++;
            }
          }
        }, r.prototype.sn = function(n) {
          if (this.ka != null) if (2 < n.Ae.length) {
            for (var t = e.ee.Iw(n, this.description), i = [], h = r.Gg(this.description, 0), s = r.Gg(this.description, 1), o = r.Gg(n, 0), a = r.Gg(n, 1), u = 0, c = 1, l = n.Aa; c < l; c++) {
              var p = n.kd(c), y = e.ra.Va(p);
              if (t[c] == -1) {
                var d = e.ra.se(p);
                for (p = 0; p < y; p++) i[o + u] = d, i[a + u] = d, u++;
              } else for (d = this.description.$j(t[c]) - 2, p = 0; p < y; p++) i[o + u] = this.ka[h + d], i[a + u] = this.ka[s + d], u++, d++;
            }
            this.ka = i;
          } else this.ka = null;
          this.description = n;
        }, r.prototype.Od = function(n, t, i) {
          if (this.$.B()) throw e.i.fa("This operation was performed on an Empty Geometry.");
          if (t == 0) return n != 0 ? i != 0 ? this.$.H : this.$.C : i != 0 ? this.$.G : this.$.v;
          if (i >= e.ra.Va(t)) throw e.i.ce();
          var h = this.description.Pf(t);
          return 0 <= h ? (this.ou(), this.ka[r.Gg(this.description, n) + this.description.$j(h) - 2 + i]) : e.ra.se(t);
        }, r.prototype.vD = function(n, t, i, h) {
          if (this.vc(), t == 0) n != 0 ? i != 0 ? this.$.H = h : this.$.C = h : i != 0 ? this.$.G = h : this.$.v = h;
          else {
            if (i >= e.ra.Va(t)) throw e.i.ce();
            if (!this.hasAttribute(t)) {
              if (e.ra.DG(t, h)) return;
              this.re(t);
            }
            t = this.description.Pf(t), this.ou(), this.ka[r.Gg(this.description, n) + this.description.$j(t) - 2 + i] = h;
          }
        }, r.Gg = function(n, t) {
          return t * (n.Ae.length - 2);
        }, r.prototype.Ea = function(n) {
          this.vc();
          var t = new e.l();
          return n.A(t), this.$.Ea(t);
        }, r.prototype.isIntersecting = function(n) {
          return n instanceof e.l ? this.$.isIntersecting(n) : this.$.isIntersecting(n.$);
        }, r.prototype.Ju = function(n, t) {
          this.vc(), n.B() ? this.Oa() : t !== void 0 ? this.tu(n, t) : this.$.Ju(n.Lg(), n.ih());
        }, r.prototype.offset = function(n, t) {
          this.vc(), this.$.offset(n, t);
        }, r.prototype.normalize = function() {
          this.vc(), this.$.normalize();
        }, r.prototype.sf = function(n) {
          if (n === void 0) {
            if (n = new e.Sa(this.description), this.B()) return n;
            for (t = this.description.Aa, i = 1; i < t; i++) for (h = this.description.Ed(i), s = e.ra.Va(h), o = 0; o < s; o++) a = 0.5 * (this.Od(0, h, o) + this.Od(1, h, o)), n.setAttribute(h, o, a);
            return n.Cb(this.$.gk(), this.$.Jp()), n;
          }
          if (n.Nf(this.description), this.B()) n.Oa();
          else {
            for (var t = this.description.Aa, i = 1; i < t; i++) for (var h = this.description.kd(i), s = e.ra.Va(h), o = 0; o < s; o++) {
              var a = 0.5 * (this.xF(0, h, o) + this.xF(1, h, o));
              n.setAttribute(h, o, a);
            }
            n.Cb(this.$.sf());
          }
        }, r.prototype.mz = function() {
          return new e.Sa(this.$.mz());
        }, r.prototype.contains = function(n) {
          return n instanceof e.Sa ? !n.B() && this.$.contains(n.Lg(), n.ih()) : this.$.contains(n.$);
        }, r.prototype.dP = function(n) {
          return this.$.contains(n);
        }, r.prototype.Nb = function(n) {
          if (n == this) return !0;
          if (!(n instanceof r) || this.description != n.description) return !1;
          if (this.B()) return !!n.B();
          if (!this.$.Nb(n.$)) return !1;
          for (var t = 0, i = 2 * (this.description.Ae.length - 2); t < i; t++) if (this.ka[t] != n.ka[t]) return !1;
          return !0;
        }, r.prototype.cc = function() {
          var n = this.description.cc();
          if (n = e.O.Th(n, this.$.cc()), !this.B() && this.ka != null) for (var t = 0, i = 2 * (this.description.Ae.length - 2); t < i; t++) n = e.O.Th(n, this.ka[t]);
          return n;
        }, r.prototype.es = function() {
          return this.$.v;
        }, r.prototype.gs = function() {
          return this.$.G;
        }, r.prototype.ds = function() {
          return this.$.C;
        }, r.prototype.fs = function() {
          return this.$.H;
        }, r.prototype.mg = function() {
          return e.pi.gm(this, null);
        }, r.prototype.toString = function() {
          return this.B() ? "Envelope: []" : "Envelope: [" + this.$.v + ", " + this.$.G + ", " + this.$.C + ", " + this.$.H + "]";
        }, r;
      }(e.aa);
      e.Fh = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i) {
          r === void 0 ? this.Oa() : (this.v = r, this.G = n, this.C = t, this.H = i);
        }
        return f.construct = function(r, n, t, i) {
          var h = new f();
          return h.v = r, h.G = n, h.C = t, h.H = i, h;
        }, f.prototype.K = function(r, n, t, i) {
          typeof r == "number" ? t !== void 0 ? (this.v = r, this.G = n, this.C = t, this.H = i, this.normalize()) : (this.v = r, this.G = n, this.C = r, this.H = n) : r instanceof e.h ? n !== void 0 ? (this.v = r.x - 0.5 * n, this.C = this.v + n, this.G = r.y - 0.5 * t, this.H = this.G + t, this.normalize()) : (this.v = r.x, this.G = r.y, this.C = r.x, this.H = r.y) : r instanceof f ? this.K(r.v, r.G, r.C, r.H) : r instanceof e.Nc && (r.B() || n.B() ? this.Oa() : (this.v = r.oa, this.C = r.va, this.G = n.oa, this.H = n.va));
        }, f.prototype.Zw = function(r, n) {
          if (n !== void 0) if (n == 0) this.Oa();
          else {
            this.v = r[0].x, this.G = r[0].y, this.C = this.v, this.H = this.G;
            for (var t = 1; t < n; t++) {
              var i = r[t];
              i.x < this.v ? this.v = i.x : i.x > this.C && (this.C = i.x), i.y < this.G ? this.G = i.y : i.y > this.H && (this.H = i.y);
            }
          }
          else if (r == null || r.length == 0) this.Oa();
          else for (i = r[0], this.K(i.x, i.y), t = 1; t < r.length; t++) n = r[t], this.Lk(n.x, n.y);
        }, f.prototype.Oa = function() {
          this.H = this.C = this.G = this.v = NaN;
        }, f.prototype.B = function() {
          return isNaN(this.v);
        }, f.prototype.Zb = function(r, n) {
          typeof r == "number" ? this.B() ? (this.v = r, this.G = n, this.C = r, this.H = n) : (this.v > r ? this.v = r : this.C < r && (this.C = r), this.G > n ? this.G = n : this.H < n && (this.H = n)) : r instanceof e.h || r instanceof e.Nd ? this.Zb(r.x, r.y) : r instanceof f && !r.B() && (this.Zb(r.v, r.G), this.Zb(r.C, r.H));
        }, f.prototype.Lk = function(r, n) {
          this.v > r ? this.v = r : this.C < r && (this.C = r), this.G > n ? this.G = n : this.H < n && (this.H = n);
        }, f.prototype.W = function(r, n) {
          this.B() || (this.v -= r, this.C += r, this.G -= n, this.H += n, (this.v > this.C || this.G > this.H) && this.Oa());
        }, f.prototype.scale = function(r) {
          0 > r && this.Oa(), this.B() || (this.v *= r, this.C *= r, this.G *= r, this.H *= r);
        }, f.prototype.zoom = function(r, n) {
          this.B() || this.K(this.sf(), r * this.R(), n * this.ca());
        }, f.prototype.isIntersecting = function(r) {
          return !this.B() && !r.B() && (this.v <= r.v ? this.C >= r.v : r.C >= this.v) && (this.G <= r.G ? this.H >= r.G : r.H >= this.G);
        }, f.prototype.HG = function(r) {
          return (this.v <= r.v ? this.C >= r.v : r.C >= this.v) && (this.G <= r.G ? this.H >= r.G : r.H >= this.G);
        }, f.prototype.Ea = function(r) {
          return !this.B() && !r.B() && (r.v > this.v && (this.v = r.v), r.C < this.C && (this.C = r.C), r.G > this.G && (this.G = r.G), r.H < this.H && (this.H = r.H), (r = this.v <= this.C && this.G <= this.H) || this.Oa(), r);
        }, f.prototype.mB = function(r) {
          switch (r) {
            case 0:
              return e.h.construct(this.v, this.G);
            case 1:
              return e.h.construct(this.v, this.H);
            case 2:
              return e.h.construct(this.C, this.H);
            case 3:
              return e.h.construct(this.C, this.G);
            default:
              throw e.i.ce();
          }
        }, f.prototype.nB = function(r) {
          if (r == null || 4 > r.length) throw e.i.N();
          r[0] != null ? r[0].ma(this.v, this.G) : r[0] = e.h.construct(this.v, this.G), r[1] != null ? r[1].ma(this.v, this.H) : r[1] = e.h.construct(this.v, this.H), r[2] != null ? r[2].ma(this.C, this.H) : r[2] = e.h.construct(this.C, this.H), r[3] != null ? r[3].ma(this.C, this.G) : r[3] = e.h.construct(this.C, this.G);
        }, f.prototype.wF = function() {
          return this.B() ? 0 : this.R() * this.ca();
        }, f.prototype.yR = function() {
          return this.B() ? 0 : 2 * (this.R() + this.ca());
        }, f.prototype.gk = function() {
          return (this.C + this.v) / 2;
        }, f.prototype.Jp = function() {
          return (this.H + this.G) / 2;
        }, f.prototype.R = function() {
          return this.C - this.v;
        }, f.prototype.ca = function() {
          return this.H - this.G;
        }, f.prototype.move = function(r, n) {
          this.B() || (this.v += r, this.G += n, this.C += r, this.H += n);
        }, f.prototype.Ju = function(r, n) {
          if (n !== void 0) this.move(r - this.gk(), n - this.Jp());
          else if (r instanceof e.h) this.Ju(r.x, r.y);
          else {
            if (!(r instanceof e.Sa)) throw e.i.N();
            n = (this.C - this.v) / 2;
            var t = (this.H - this.G) / 2;
            this.v = r.Lg() - n, this.C = r.Lg() + n, this.G = r.ih() - t, this.H = r.ih() + t;
          }
        }, f.prototype.offset = function(r, n) {
          this.v += r, this.C += r, this.G += n, this.H += n;
        }, f.prototype.normalize = function() {
          if (!this.B()) {
            var r = Math.min(this.v, this.C), n = Math.max(this.v, this.C);
            this.v = r, this.C = n, r = Math.min(this.G, this.H), n = Math.max(this.G, this.H), this.G = r, this.H = n;
          }
        }, f.prototype.dn = function(r) {
          r.ma(this.v, this.G);
        }, f.prototype.$I = function(r) {
          r.ma(this.C, this.G);
        }, f.prototype.cJ = function(r) {
          r.ma(this.v, this.H);
        }, f.prototype.en = function(r) {
          r.ma(this.C, this.H);
        }, f.prototype.fT = function() {
          return this.B() || this.v <= this.C && this.G <= this.H;
        }, f.prototype.sf = function() {
          return e.h.construct((this.C + this.v) / 2, (this.H + this.G) / 2);
        }, f.prototype.mz = function() {
          return e.h.construct(this.v, this.G);
        }, f.prototype.contains = function(r, n) {
          if (n !== void 0) return r >= this.v && r <= this.C && n >= this.G && n <= this.H;
          if (r instanceof e.Sa) return this.contains(r.Lg(), r.ih());
          if (r instanceof e.h) return this.contains(r.x, r.y);
          if (r instanceof f) return r.v >= this.v && r.C <= this.C && r.G >= this.G && r.H <= this.H;
          throw e.i.N();
        }, f.prototype.hm = function(r, n) {
          if (n !== void 0) return r > this.v && r < this.C && n > this.G && n < this.H;
          if (r instanceof e.h) return this.hm(r.x, r.y);
          if (r instanceof f) return r.v > this.v && r.C < this.C && r.G > this.G && r.H < this.H;
          throw e.i.N();
        }, f.prototype.Nb = function(r) {
          return r == this || r instanceof f && (!(!this.B() || !r.B()) || this.v == r.v && this.G == r.G && this.C == r.C && this.H == r.H);
        }, f.prototype.cc = function() {
          var r = this.v;
          r = e.O.truncate(r ^ r >>> 32);
          var n = e.O.Th(r);
          return r = this.C, r = e.O.truncate(r ^ r >>> 32), n = e.O.Th(r, n), r = this.G, r = e.O.truncate(r ^ r >>> 32), n = e.O.Th(r, n), r = this.H, r = e.O.truncate(r ^ r >>> 32), e.O.Th(r, n);
        }, f.prototype.xr = function() {
          return this.B() ? 2220446049250313e-29 : 2220446049250313e-29 * (Math.abs(this.v) + Math.abs(this.C) + Math.abs(this.G) + Math.abs(this.H) + 1);
        }, f.prototype.zy = function(r, n) {
          var t = this.Zj(r), i = this.Zj(n);
          if (t & i) return 0;
          if (!(t | i)) return 4;
          var h = (t != 0 ? 1 : 0) | (i != 0 ? 2 : 0);
          do {
            var s = n.x - r.x, o = n.y - r.y;
            if (s > o ? t & f.YC ? (t & f.ju ? (r.y += o * (this.v - r.x) / s, r.x = this.v) : (r.y += o * (this.C - r.x) / s, r.x = this.C), t = this.Zj(r)) : i & f.YC ? (i & f.ju ? (n.y += o * (this.v - n.x) / s, n.x = this.v) : (n.y += o * (this.C - n.x) / s, n.x = this.C), i = this.Zj(n)) : t != 0 ? (t & f.ku ? (r.x += s * (this.G - r.y) / o, r.y = this.G) : (r.x += s * (this.H - r.y) / o, r.y = this.H), t = this.Zj(r)) : (i & f.ku ? (n.x += s * (this.G - n.y) / o, n.y = this.G) : (n.x += s * (this.H - n.y) / o, n.y = this.H), i = this.Zj(n)) : t & f.ZC ? (t & f.ku ? (r.x += s * (this.G - r.y) / o, r.y = this.G) : (r.x += s * (this.H - r.y) / o, r.y = this.H), t = this.Zj(r)) : i & f.ZC ? (i & f.ku ? (n.x += s * (this.G - n.y) / o, n.y = this.G) : (n.x += s * (this.H - n.y) / o, n.y = this.H), i = this.Zj(n)) : t != 0 ? (t & f.ju ? (r.y += o * (this.v - r.x) / s, r.x = this.v) : (r.y += o * (this.C - r.x) / s, r.x = this.C), t = this.Zj(r)) : (i & f.ju ? (n.y += o * (this.v - n.x) / s, n.x = this.v) : (n.y += o * (this.C - n.x) / s, n.x = this.C), i = this.Zj(n)), (t & i) != 0) return 0;
          } while (t | i);
          return h;
        }, f.prototype.Zj = function(r) {
          return (r.x < this.v ? 1 : 0) | (r.x > this.C ? 1 : 0) << 1 | (r.y < this.G ? 1 : 0) << 2 | (r.y > this.H ? 1 : 0) << 3;
        }, f.prototype.Bi = function(r) {
          return !this.B() && (this.R() <= r || this.ca() <= r);
        }, f.prototype.tb = function(r) {
          return r instanceof e.h ? Math.sqrt(this.iK(r)) : Math.sqrt(this.px(r));
        }, f.prototype.px = function(r) {
          var n = 0, t = 0, i = this.v - r.C;
          return i > n && (n = i), (i = this.G - r.H) > t && (t = i), (i = r.v - this.C) > n && (n = i), (i = r.G - this.H) > t && (t = i), n * n + t * t;
        }, f.prototype.iK = function(r) {
          var n = 0, t = 0, i = this.v - r.x;
          return i > n && (n = i), (i = this.G - r.y) > t && (t = i), (i = r.x - this.C) > n && (n = i), (i = r.y - this.H) > t && (t = i), n * n + t * t;
        }, f.prototype.cn = function(r) {
          this.B() ? r.Oa() : r.K(this.v, this.C);
        }, f.ju = 1, f.ku = 4, f.YC = 3, f.ZC = 12, f;
      }();
      e.l = v;
    }(k || (k = {})), function(e) {
      var v, f;
      (f = v || (v = {}))[f.initialize = 0] = "initialize", f[f.initializeRed = 1] = "initializeRed", f[f.initializeBlue = 2] = "initializeBlue", f[f.initializeRedBlue = 3] = "initializeRedBlue", f[f.sweep = 4] = "sweep", f[f.sweepBruteForce = 5] = "sweepBruteForce", f[f.sweepRedBlueBruteForce = 6] = "sweepRedBlueBruteForce", f[f.sweepRedBlue = 7] = "sweepRedBlue", f[f.sweepRed = 8] = "sweepRed", f[f.sweepBlue = 9] = "sweepBlue", f[f.iterate = 10] = "iterate", f[f.iterateRed = 11] = "iterateRed", f[f.iterateBlue = 12] = "iterateBlue", f[f.iterateBruteForce = 13] = "iterateBruteForce", f[f.iterateRedBlueBruteForce = 14] = "iterateRedBlueBruteForce", f[f.resetRed = 15] = "resetRed", f[f.resetBlue = 16] = "resetBlue";
      var r = function() {
        function n(t, i) {
          this.ci = t, this.dH = i;
        }
        return n.prototype.nr = function(t, i, h) {
          this.ci.JX(h, t, i, this.dH);
        }, n.prototype.$p = function(t) {
          return this.ci.Rr(t, this.dH);
        }, n;
      }();
      v = function() {
        function n() {
          this.ow = this.oo = this.ff = this.rd = null, this.wq = new e.l(), this.Am = this.Hj = this.Ij = this.Ad = this.Ef = this.Ld = this.cw = this.fo = this.qd = this.Eb = null, this.Xb = -1, this.qa = 0, this.Nk();
        }
        return n.prototype.kr = function() {
          this.Nk(), this.Pv = !0, this.Eb == null ? (this.fo = new e.ia(0), this.Eb = []) : (this.fo.Bh(0), this.Eb.length = 0);
        }, n.prototype.ad = function(t, i) {
          if (!this.Pv) throw e.i.Hb();
          var h = new e.l();
          h.K(i), this.fo.add(t), this.Eb.push(h);
        }, n.prototype.Fp = function() {
          if (!this.Pv) throw e.i.Hb();
          this.Pv = !1, this.Eb != null && 0 < this.Eb.length && (this.Xb = 0, this.Ic = !1);
        }, n.prototype.pK = function() {
          this.Nk(), this.Ov = !0, this.Eb == null ? (this.fo = new e.ia(0), this.Eb = []) : (this.fo.Bh(0), this.Eb.length = 0);
        }, n.prototype.JD = function(t, i) {
          if (!this.Ov) throw e.i.Hb();
          var h = new e.l();
          h.K(i), this.fo.add(t), this.Eb.push(h);
        }, n.prototype.iF = function() {
          if (!this.Ov) throw e.i.Hb();
          this.Ov = !1, this.Eb != null && 0 < this.Eb.length && this.qd != null && 0 < this.qd.length && (this.Xb == -1 || this.Xb == 2 ? this.Xb = 3 : this.Xb != 3 && (this.Xb = 1), this.Ic = !1);
        }, n.prototype.oK = function() {
          this.Nk(), this.Nv = !0, this.qd == null ? (this.cw = new e.ia(0), this.qd = []) : (this.cw.Bh(0), this.qd.length = 0);
        }, n.prototype.ED = function(t, i) {
          if (!this.Nv) throw e.i.Hb();
          var h = new e.l();
          h.K(i), this.cw.add(t), this.qd.push(h);
        }, n.prototype.hF = function() {
          if (!this.Nv) throw e.i.Hb();
          this.Nv = !1, this.Eb != null && 0 < this.Eb.length && this.qd != null && 0 < this.qd.length && (this.Xb == -1 || this.Xb == 1 ? this.Xb = 3 : this.Xb != 3 && (this.Xb = 2), this.Ic = !1);
        }, n.prototype.next = function() {
          if (this.Ic) return !1;
          for (var t = !0; t; ) switch (this.Xb) {
            case 0:
              t = this.Gz();
              break;
            case 1:
              t = this.rS();
              break;
            case 2:
              t = this.oS();
              break;
            case 3:
              t = this.qS();
              break;
            case 4:
              t = this.UX();
              break;
            case 5:
              t = this.QX();
              break;
            case 6:
              t = this.RX();
              break;
            case 7:
              t = this.SX();
              break;
            case 8:
              t = this.ux();
              break;
            case 9:
              t = this.iC();
              break;
            case 10:
              t = this.Uz();
              break;
            case 11:
              t = this.jT();
              break;
            case 12:
              t = this.gT();
              break;
            case 13:
              t = this.hT();
              break;
            case 14:
              t = this.iT();
              break;
            case 15:
              t = this.kJ();
              break;
            case 16:
              t = this.jJ();
              break;
            default:
              throw e.i.Qa();
          }
          return !this.Ic;
        }, n.prototype.aC = function(t) {
          this.qa = t;
        }, n.prototype.uz = function(t) {
          return this.Eb[t];
        }, n.prototype.az = function(t) {
          return this.qd[t];
        }, n.prototype.nl = function(t) {
          return this.fo.read(t);
        }, n.prototype.hl = function(t) {
          return this.cw.read(t);
        }, n.Tz = function(t) {
          return (1 & t) == 1;
        }, n.eq = function(t) {
          return (1 & t) == 0;
        }, n.prototype.Nk = function() {
          this.Pv = this.Nv = this.Ov = !1, this.Cf = this.Df = this.Rg = this.pe = -1, this.Ic = !0;
        }, n.prototype.Gz = function() {
          if (this.Af = this.Vf = -1, 10 > this.Eb.length) return this.pe = this.Eb.length, this.Xb = 5, !0;
          this.rd == null && (this.rd = new e.sr(!0), this.oo = this.rd.getIterator(), this.Ld = new e.ia(0)), this.rd.kr();
          for (var t = 0; t < this.Eb.length; t++) {
            var i = this.Eb[t];
            this.rd.Br(i.v, i.C);
          }
          for (this.rd.Fp(), this.Ld.Jb(2 * this.Eb.length), this.Ld.resize(0), t = 0; t < 2 * this.Eb.length; t++) this.Ld.add(t);
          return this.Kt(this.Ld, 2 * this.Eb.length, !0), this.pe = 2 * this.Eb.length, this.Xb = 4, !0;
        }, n.prototype.rS = function() {
          if (this.Af = this.Vf = -1, 10 > this.Eb.length || 10 > this.qd.length) return this.pe = this.Eb.length, this.Xb = 6, !0;
          this.rd == null && (this.rd = new e.sr(!0), this.oo = this.rd.getIterator(), this.Ld = new e.ia(0)), this.rd.kr();
          for (var t = 0; t < this.Eb.length; t++) {
            var i = this.Eb[t];
            this.rd.Br(i.v, i.C);
          }
          for (this.rd.Fp(), this.Ld.Jb(2 * this.Eb.length), this.Ld.resize(0), t = 0; t < 2 * this.Eb.length; t++) this.Ld.add(t);
          return this.Kt(this.Ld, this.Ld.size, !0), this.pe = this.Ld.size, this.Df != -1 && (this.Ad.bh(this.Df), this.Ij.resize(0), this.Df = -1), this.Xb = 7, this.jJ();
        }, n.prototype.oS = function() {
          if (this.Af = this.Vf = -1, 10 > this.Eb.length || 10 > this.qd.length) return this.pe = this.Eb.length, this.Xb = 6, !0;
          this.ff == null && (this.ff = new e.sr(!0), this.ow = this.ff.getIterator(), this.Ef = new e.ia(0)), this.ff.kr();
          for (var t = 0; t < this.qd.length; t++) {
            var i = this.qd[t];
            this.ff.Br(i.v, i.C);
          }
          for (this.ff.Fp(), this.Ef.Jb(2 * this.qd.length), this.Ef.resize(0), t = 0; t < 2 * this.qd.length; t++) this.Ef.add(t);
          return this.Kt(this.Ef, this.Ef.size, !1), this.Rg = this.Ef.size, this.Cf != -1 && (this.Ad.bh(this.Cf), this.Hj.resize(0), this.Cf = -1), this.Xb = 7, this.kJ();
        }, n.prototype.qS = function() {
          if (this.Af = this.Vf = -1, 10 > this.Eb.length || 10 > this.qd.length) return this.pe = this.Eb.length, this.Xb = 6, !0;
          this.rd == null && (this.rd = new e.sr(!0), this.oo = this.rd.getIterator(), this.Ld = new e.ia(0)), this.ff == null && (this.ff = new e.sr(!0), this.ow = this.ff.getIterator(), this.Ef = new e.ia(0)), this.rd.kr();
          for (var t = 0; t < this.Eb.length; t++) {
            var i = this.Eb[t];
            this.rd.Br(i.v, i.C);
          }
          for (this.rd.Fp(), this.ff.kr(), t = 0; t < this.qd.length; t++) i = this.qd[t], this.ff.Br(i.v, i.C);
          for (this.ff.Fp(), this.Ld.Jb(2 * this.Eb.length), this.Ef.Jb(2 * this.qd.length), this.Ld.resize(0), this.Ef.resize(0), t = 0; t < 2 * this.Eb.length; t++) this.Ld.add(t);
          for (t = 0; t < 2 * this.qd.length; t++) this.Ef.add(t);
          return this.Kt(this.Ld, this.Ld.size, !0), this.Kt(this.Ef, this.Ef.size, !1), this.pe = this.Ld.size, this.Rg = this.Ef.size, this.Df != -1 && (this.Ad.bh(this.Df), this.Ij.resize(0), this.Df = -1), this.Cf != -1 && (this.Ad.bh(this.Cf), this.Hj.resize(0), this.Cf = -1), this.Xb = 7, !0;
        }, n.prototype.UX = function() {
          var t = this.Ld.get(--this.pe), i = t >> 1;
          return n.eq(t) ? (this.rd.remove(i), this.pe != 0 || (this.Af = this.Vf = -1, this.Ic = !0, !1)) : (this.oo.EB(this.Eb[i].v, this.Eb[i].C, this.qa), this.Vf = i, this.Xb = 10, !0);
        }, n.prototype.QX = function() {
          return --this.pe == -1 ? (this.Af = this.Vf = -1, this.Ic = !0, !1) : (this.Rg = this.Vf = this.pe, this.Xb = 13, !0);
        }, n.prototype.RX = function() {
          return --this.pe == -1 ? (this.Af = this.Vf = -1, this.Ic = !0, !1) : (this.Vf = this.pe, this.Rg = this.qd.length, this.Xb = 14, !0);
        }, n.prototype.SX = function() {
          var t = this.Ld.get(this.pe - 1), i = this.Ef.get(this.Rg - 1), h = this.Rr(t, !0), s = this.Rr(i, !1);
          return h > s ? this.ux() : h < s ? this.iC() : n.Tz(t) ? this.ux() : n.Tz(i) ? this.iC() : this.ux();
        }, n.prototype.ux = function() {
          var t = this.Ld.get(--this.pe), i = t >> 1;
          if (n.eq(t)) return this.Df != -1 && this.Ij.get(i) != -1 ? (this.Ad.jd(this.Df, this.Ij.get(i)), this.Ij.set(i, -1)) : this.rd.remove(i), this.pe != 0 || (this.Af = this.Vf = -1, this.Ic = !0, !1);
          if (this.Cf != -1 && 0 < this.Ad.bs(this.Cf)) for (t = this.Ad.rc(this.Cf); t != -1; ) {
            var h = this.Ad.getData(t);
            this.ff.vj(h), this.Hj.set(h, -1), h = this.Ad.lb(t), this.Ad.jd(this.Cf, t), t = h;
          }
          return 0 < this.ff.size() ? (this.ow.EB(this.Eb[i].v, this.Eb[i].C, this.qa), this.Vf = i, this.Xb = 12) : (this.Df == -1 && (this.Ad == null && (this.Ad = new e.jp()), this.Ij = new e.ia(0), this.Ij.resize(this.Eb.length, -1), this.Ij.Wj(-1, 0, this.Eb.length), this.Df = this.Ad.Ph(1)), this.Ij.set(i, this.Ad.addElement(this.Df, i)), this.Xb = 7), !0;
        }, n.prototype.iC = function() {
          var t = this.Ef.get(--this.Rg), i = t >> 1;
          if (n.eq(t)) return this.Cf != -1 && this.Hj.get(i) != -1 ? (this.Ad.jd(this.Cf, this.Hj.get(i)), this.Hj.set(i, -1)) : this.ff.remove(i), this.Rg != 0 || (this.Af = this.Vf = -1, this.Ic = !0, !1);
          if (this.Df != -1 && 0 < this.Ad.bs(this.Df)) for (t = this.Ad.rc(this.Df); t != -1; ) {
            var h = this.Ad.getData(t);
            this.rd.vj(h), this.Ij.set(h, -1), h = this.Ad.lb(t), this.Ad.jd(this.Df, t), t = h;
          }
          return 0 < this.rd.size() ? (this.oo.EB(this.qd[i].v, this.qd[i].C, this.qa), this.Af = i, this.Xb = 11) : (this.Cf == -1 && (this.Ad == null && (this.Ad = new e.jp()), this.Hj = new e.ia(0), this.Hj.resize(this.qd.length, -1), this.Hj.Wj(-1, 0, this.qd.length), this.Cf = this.Ad.Ph(0)), this.Hj.set(i, this.Ad.addElement(this.Cf, i)), this.Xb = 7), !0;
        }, n.prototype.Uz = function() {
          if (this.Af = this.oo.next(), this.Af != -1) return !1;
          var t = this.Ld.get(this.pe) >> 1;
          return this.rd.vj(t), this.Xb = 4, !0;
        }, n.prototype.jT = function() {
          if (this.Vf = this.oo.next(), this.Vf != -1) return !1;
          this.Af = this.Vf = -1;
          var t = this.Ef.get(this.Rg) >> 1;
          return this.ff.vj(t), this.Xb = 7, !0;
        }, n.prototype.gT = function() {
          if (this.Af = this.ow.next(), this.Af != -1) return !1;
          var t = this.Ld.get(this.pe) >> 1;
          return this.rd.vj(t), this.Xb = 7, !0;
        }, n.prototype.hT = function() {
          if (--this.Rg == -1) return this.Xb = 5, !0;
          this.wq.K(this.Eb[this.pe]);
          var t = this.Eb[this.Rg];
          return this.wq.W(this.qa, this.qa), !this.wq.isIntersecting(t) || (this.Af = this.Rg, !1);
        }, n.prototype.iT = function() {
          if (--this.Rg == -1) return this.Xb = 6, !0;
          this.wq.K(this.Eb[this.pe]);
          var t = this.qd[this.Rg];
          return this.wq.W(this.qa, this.qa), !this.wq.isIntersecting(t) || (this.Af = this.Rg, !1);
        }, n.prototype.kJ = function() {
          return this.rd == null ? (this.Ic = !0, !1) : (this.pe = this.Ld.size, 0 < this.rd.size() && this.rd.reset(), this.Df != -1 && (this.Ad.bh(this.Df), this.Ij.resize(0), this.Df = -1), this.Ic = !1, !0);
        }, n.prototype.jJ = function() {
          return this.ff == null ? (this.Ic = !0, !1) : (this.Rg = this.Ef.size, 0 < this.ff.size() && this.ff.reset(), this.Cf != -1 && (this.Ad.bh(this.Cf), this.Hj.resize(0), this.Cf = -1), this.Ic = !1, !0);
        }, n.prototype.Kt = function(t, i, h) {
          this.Am == null && (this.Am = new e.Xt()), h = new r(this, h), this.Am.sort(t, 0, i, h);
        }, n.prototype.JX = function(t, i, h, s) {
          var o = this;
          t.Vd(i, h, function(a, u) {
            var c = o.Rr(a, s), l = o.Rr(u, s);
            return c < l || c == l && n.eq(a) && n.Tz(u) ? -1 : 1;
          });
        }, n.prototype.Rr = function(t, i) {
          var h = 0.5 * this.qa;
          return i ? (i = this.Eb[t >> 1], n.eq(t) ? i.G - h : i.H + h) : (i = this.qd[t >> 1], n.eq(t) ? i.G - h : i.H + h);
        }, n;
      }(), e.xC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.construct = function(r, n, t, i, h, s) {
          var o = new f();
          return o.v = r, o.G = n, o.Ye = t, o.C = i, o.H = h, o.Bg = s, o;
        }, f.prototype.Oa = function() {
          this.Ye = this.v = NaN;
        }, f.prototype.B = function() {
          return isNaN(this.v);
        }, f.prototype.XS = function() {
          return isNaN(this.Ye);
        }, f.prototype.K = function(r, n, t, i, h, s) {
          i !== void 0 ? typeof r == "number" ? (this.v = r, this.G = n, this.Ye = t, this.C = i, this.H = h, this.Bg = s) : (this.v = r.x - 0.5 * n, this.C = this.v + n, this.G = r.y - 0.5 * t, this.H = this.G + t, this.Ye = r.z - 0.5 * i, this.Bg = this.Ye + i) : (this.v = r, this.G = n, this.Ye = t, this.C = r, this.H = n, this.Bg = t);
        }, f.prototype.move = function(r) {
          this.v += r.x, this.G += r.y, this.Ye += r.z, this.C += r.x, this.H += r.y, this.Bg += r.z;
        }, f.prototype.copyTo = function(r) {
          r.v = this.v, r.G = this.G, r.C = this.C, r.H = this.H;
        }, f.prototype.Lk = function(r, n, t) {
          this.v > r ? this.v = r : this.C < r && (this.C = r), this.G > n ? this.G = n : this.H < n && (this.H = n), isNaN(this.Ye) == 0 ? this.Ye > t ? this.Ye = t : this.Bg < t && (this.Bg = t) : this.Bg = this.Ye = t;
        }, f.prototype.Zb = function(r, n, t) {
          if (typeof r == "number") this.B() ? (this.v = r, this.G = n, this.Ye = t, this.C = r, this.H = n, this.Bg = t) : this.Lk(r, n, t);
          else if (r instanceof e.Nd) this.Zb(r.x, r.y, r.z);
          else {
            if (!(r instanceof f)) throw e.i.N();
            r.B() || (this.Zb(r.v, r.G, r.Ye), this.Zb(r.C, r.H, r.Bg));
          }
        }, f.prototype.construct = function(r, n, t) {
          r.B() || n.B() ? this.Oa() : (this.v = r.oa, this.C = r.va, this.G = n.oa, this.H = n.va, this.Ye = t.oa, this.Bg = t.va);
        }, f.prototype.nB = function(r) {
          if (r == null || 8 > r.length) throw e.i.N();
          r[0] = new e.Nd(this.v, this.G, this.Ye), r[1] = new e.Nd(this.v, this.H, this.Ye), r[2] = new e.Nd(this.C, this.H, this.Ye), r[3] = new e.Nd(this.C, this.G, this.Ye), r[4] = new e.Nd(this.v, this.G, this.Bg), r[5] = new e.Nd(this.v, this.H, this.Bg), r[6] = new e.Nd(this.C, this.H, this.Bg), r[7] = new e.Nd(this.C, this.G, this.Bg);
        }, f.prototype.Zw = function(r) {
          if (r == null || r.length == 0) this.Oa();
          else {
            var n = r[0];
            for (this.K(n.x, n.y, n.z), n = 1; n < r.length; n++) {
              var t = r[n];
              this.Lk(t.x, t.y, t.z);
            }
          }
        }, f;
      }();
      e.OK = v;
    }(k || (k = {})), function(e) {
      (function(v) {
        v.Qa = function() {
          var f = Error();
          return f.message = "Internal Error", f;
        }, v.Ie = function() {
          var f = Error();
          return f.message = "Not Implemented", f;
        }, v.Xk = function() {
          var f = Error();
          return f.message = "The input unit and the spatial reference unit are not of the same unit type.ie Linear vs.Angular", f;
        }, v.Hb = function() {
          var f = Error();
          return f.message = "Invalid Call", f;
        }, v.N = function(f) {
          var r = Error();
          return r.message = "Illegal Argument Exception", f !== void 0 && (r.message += ": " + f), r;
        }, v.fu = function(f) {
          var r = Error();
          return r.message = f !== void 0 ? "Runtime Exception: " + f : "Runtime Exception.", r;
        }, v.fa = function(f) {
          var r = Error();
          return r.message = "Geometry Exception: " + f, r;
        }, v.GK = function() {
          var f = Error();
          return f.message = "Assert Failed Exception", f;
        }, v.ce = function() {
          var f = Error();
          return f.message = "IndexOutOfBoundsException", f;
        }, v.WC = function() {
          var f = Error();
          return f.message = "UserCancelException", f;
        };
      })(e.i || (e.i = {}));
    }(k || (k = {})), function(e) {
      (e = e.bm || (e.bm = {}))[e.forward = 0] = "forward", e[e.reverse = 1] = "reverse";
    }(k || (k = {})), function(e) {
      var v = function() {
        function n(t, i) {
          this.Wa = t, this.FH = i, this.LH = -1, this.sl = !1;
        }
        return n.prototype.qe = function() {
        }, n.prototype.next = function() {
          if (++this.LH == this.FH.I()) return null;
          var t = this.FH.Na(this.LH);
          t.scale(this.Wa.ec);
          var i = new e.Da();
          return this.Wa.sy(t, this.sl, i), i;
        }, n.prototype.La = function() {
          return 0;
        }, n;
      }(), f = function() {
        function n(t, i, h) {
          this.Wa = t, this.rw = i, this.Xn = !1, this.co = h, this.bw = [0], this.sk = [0], this.Nj = [0], this.Gs = [0], this.sl = !1, this.qq = new e.Da(), this.uk = [];
        }
        return n.prototype.qe = function() {
        }, n.prototype.next = function() {
          if (this.Xn) {
            this.Xn = !1, this.sd.ha();
            var t = e.aa.jg(this.qq);
            return e.Fg.Mk(t, this.Wa.Aq, !0, !0, this.Wa.Ub);
          }
          if (this.sd == null && (this.sd = this.rw.Ga(), this.sd.$a(), this.co != null && this.co.Yk(null, 0)), !this.sd.Ha()) {
            if (!this.sd.$a()) return null;
            this.co != null && this.co.Yk(null, 0);
          }
          t = null, this.sk[0] = 0, this.FA = this.bw[0] = 0, this.di = NaN, this.Xn = !1;
          for (var i = this.uk.length = 0, h = new e.h(), s = new e.h(), o = [0]; this.sd.Ha() && 8 > this.FA; ) {
            var a = this.sd.ha();
            if (h.L(a.ac()), s.L(a.wc()), h.scale(this.Wa.ec), s.scale(this.Wa.ec), e.cj.Mu(h, s) ? h.x = s.x : e.cj.Ku(h, s) && (s.x = h.x), this.uk.length = 0, e.cj.tF(this.Wa.Tb, this.Wa.kc, this.Wa.ze, h, s, this.Wa.QA, this.Wa.Zs, o, this.Nj, this.Gs, this.uk, this.bw), this.co != null && (a = this.uk.slice(0), this.co.qG(this.co.da() - 1, a, a.length - 1)), e.cj.Lu(h, s) ? (this.qq.Oa(), this.Wa.sy(h, this.sl, this.qq), this.Xn = !0) : (this.qq.Oa(), this.Xn = this.xy(o[0], this.qq)), this.Xn) {
              if (this.sd.li(), this.sd.Ez()) {
                this.sd.li(), this.sd.ha();
                break;
              }
              this.sd.DW();
              break;
            }
            t == null && (t = new e.Da()).Yk(null, 0), this.OD(t), i++;
          }
          if (this.bw[0] = 0, 0 < i) {
            for (o = this.sd.wb(); 0 < i; ) this.sd.li(), h.L(this.rw.Na(this.sd.wb())), s.L(this.rw.Na(this.sd.ik())), h.scale(this.Wa.ec), s.scale(this.Wa.ec), this.sl && (e.cj.Mu(h, s) ? h.x = s.x : e.cj.Ku(h, s) && (s.x = h.x)), this.uk.length = 0, e.cj.tF(this.Wa.Tb, this.Wa.kc, this.Wa.ze, s, h, this.Wa.QA, this.Wa.Zs, null, this.Nj, this.Gs, this.uk, this.bw), this.OD(t), i--;
            return h.L(this.rw.Na(this.sd.wb())), h.scale(this.Wa.ec), r.Hr(this.Wa.Tb, this.Wa.kc, this.Wa.ec, this.Wa.rb, h, this.di + 1.570796326794897, this.di + 4.71238898038469, this.Wa.ao, this.sl, this.sk, t, NaN, NaN), this.sd.Vb(o), this.sd.ha(), i = e.ta.kj(null, t, !0), e.Fg.Mk(t, i, !0, !0, this.Wa.Ub);
          }
          return this.Xn = !1, this.sd.ha(), t = e.aa.jg(this.qq), e.Fg.Mk(t, this.Wa.Aq, !0, !0, this.Wa.Ub);
        }, n.prototype.OD = function(t) {
          var i = this.uk[0], h = this.Nj[0] - 1.570796326794897, s = this.Gs[0] + 1.570796326794897;
          if (!isNaN(this.di)) {
            if (this.di >= this.Nj[0]) {
              var o = this.di + 1.570796326794897;
              h = o + 3.141592653589793 - (this.di - this.Nj[0]);
            } else h = (o = this.di + 1.570796326794897) + 3.141592653589793 - (6.283185307179586 - (this.Nj[0] - this.di));
            var a = !(this.di >= this.Nj[0] && 3.141592653589793 >= this.di - this.Nj[0]) && !(this.di < this.Nj[0] && 3.141592653589793 <= this.Nj[0] - this.di), u = !1;
            if (Math.abs(h - o) <= 0.5 * this.Wa.ao) if (a) {
              var c = t.Na(t.I() - 2);
              c.scale(this.Wa.ec);
              var l = new e.ga(0);
              for (e.kb.Xy(this.Wa.Tb, this.Wa.kc, i.x, i.y, c.x, c.y, l), c = l.u; c <= o; ) c += 6.283185307179586;
              for (; c > o; ) c -= 6.283185307179586;
              c < h && (u = !0);
            } else u = !0;
            u ? (t.DB(0, t.I() - 1), this.sl || ((i = new e.h()).L(t.Na(t.I() - 1)), i.scale(this.Wa.ec), -3.141592653589793 > i.x - this.sk[0] ? this.sk[0] -= 6.283185307179586 : 3.141592653589793 < i.x - this.sk[0] && (this.sk[0] += 6.283185307179586)), a || (h = 0.5 * (h + o))) : (a ? ((o = new e.h()).L(i), o.scale(1 / this.Wa.ec), t.wf(0, -1, o)) : r.Hr(this.Wa.Tb, this.Wa.kc, this.Wa.ec, this.Wa.rb, this.uk[0], o, h, this.Wa.ao, this.sl, this.sk, t, NaN, NaN), this.FA += 1);
          }
          r.qy(this.Wa.Tb, this.Wa.kc, this.Wa.ec, this.Wa.rb, this.Wa.ze, this.uk, h, s, this.sl, this.sk, t), this.di = this.Gs[0];
        }, n.prototype.xy = function(t, i) {
          return this.Wa.xy(this.uk, t, this.Nj[0], this.Gs[0], this.sl, i);
        }, n.prototype.La = function() {
          return 0;
        }, n;
      }(), r = function() {
        function n() {
        }
        return n.buffer = function(t, i, h, s, o, a) {
          if (t == null) throw e.i.N("Geometry::Geodesic_bufferer::buffer");
          if (t.B()) return new e.Da(t.description);
          var u = new n();
          u.Qg = i, u.Jc = e.cb.sc(i);
          var c = e.cb.vv(u.Jc);
          if (u.Ub = a, u.Tb = e.cb.ev(u.Jc), u.kc = c * (2 - c), u.ec = u.Jc.Hd().ai, u.qa = u.Qg.Kn(), u.Aq = u.Jc.Kn(), u.Zs = u.Aq * u.ec, u.zq = 1.570796326794897 / u.ec, u.OY = 3.141592653589793 / u.ec, u.Js = 6.283185307179586 / u.ec, u.PY = u.Js / 6, u.LA = 0, u.NY = 1.5707963267948966 * u.Tb / u.LA, h == 4 ? (u.ze = 2, u.Wv = !0) : (u.ze = h, u.Wv = !1), u.Ka = s, u.rb = Math.abs(s), isNaN(o) || 1e-3 > o ? u.xX() : u.$n = o, h = t.getType(), e.aa.yd(h) ? ((h = new e.Ta(t.description)).oc(t, !0), t = h, h = 1607) : h == 197 && (h = new e.l(), t.A(h), h.R() <= u.qa || h.ca() <= u.qa ? ((h = new e.Ta(t.description)).ad(t, !1), t = h, h = 1607) : ((h = new e.Da(t.description)).ad(t, !1), t = h, h = 1736)), u.yX(), e.aa.Rn(h) || u.zX(), u.rb <= 0.5 * u.$n) return h != 1736 ? new e.Da(t.description) : u.Wv ? t : e.cj.Qr(t, u.Qg, u.ze, u.QA, -1, a);
          if (0 > u.Ka && h != 1736) return new e.Da(t.description);
          if (u.Wv && e.aa.Hc(h) ? (i = e.cj.Qr(t, i, 4, NaN, u.$n, a), t = e.cb.zh(i, u.Qg, u.Jc)) : t = e.cb.zh(t, u.Qg, u.Jc), (t = e.Hh.lj(t, u.Jc)).B()) return new e.Da(t.description);
          switch (!u.Wv && e.aa.Hc(h) && (t = e.cj.pI(u.ec, t)), t = n.KX(t, u.Jc), h) {
            case 1736:
              i = u.UN(t);
              break;
            case 1607:
              i = u.VN(t);
              break;
            case 550:
              i = u.SN(t);
              break;
            case 33:
              i = u.TN(t);
              break;
            default:
              throw e.i.fa("corrupted_geometry");
          }
          return (u = e.cb.zh(i, u.Jc, u.Qg)).Jl(t.description), u;
        }, n.prototype.UN = function(t) {
          var i = new e.Da();
          t = new f(this, t, i), t = e.Gh.local().V(t, this.Jc, this.Ub).next(), t = e.ip.nj(t, this.Jc, 2);
          var h = new e.Dd();
          return h.scale(1 / this.ec, 1 / this.ec), i.Oc(h), i = e.ip.nj(i, this.Jc, 2), 0 <= this.Ka ? e.Gh.local().V(i, t, this.Jc, this.Ub) : e.kp.local().V(i, t, this.Jc, this.Ub);
        }, n.prototype.VN = function(t) {
          return t = new f(this, t, null), t = e.Gh.local().V(t, this.Jc, this.Ub).next(), e.ip.nj(t, this.Jc, 2);
        }, n.prototype.SN = function(t) {
          return t = new v(this, t), t = e.Gh.local().V(t, this.Jc, this.Ub).next(), e.ip.nj(t, this.Jc, 2);
        }, n.prototype.TN = function(t) {
          (t = t.D()).scale(this.ec);
          var i = new e.Da();
          return this.sy(t, !1, i), e.ip.nj(i, this.Jc, 2);
        }, n.prototype.xy = function(t, i, h, s, o, a) {
          var u = t[0], c = t[t.length - 1], l = u.y > c.y ? u.y : c.y, p = e.F.q(this.Tb, this.kc, u.y < c.y ? u.y : c.y);
          if (l = e.F.q(this.Tb, this.kc, l), 1e-3 < this.LA - (p + i + this.rb) && 1e-3 < this.LA + (l - i - this.rb)) return !1;
          p = (i = h - 1.570796326794897) - 3.141592653589793, l = i + 3.141592653589793;
          var y = (h = s + 1.570796326794897) + 3.141592653589793, d = [NaN], g = [NaN], b = [NaN], x = [NaN];
          if (s = !1, n.dJ(this.Tb, this.kc, this.rb, u, i, p, c, h, d, g), n.dJ(this.Tb, this.kc, this.rb, c, y, h, u, p, b, x), (h < d[0] && d[0] < y || h < g[0] && g[0] < y) && (s = !0), s || (p < b[0] && b[0] < i || p < x[0] && x[0] < i) && (s = !0), !s && o) return !1;
          for (var m = [], w = t.length - 1; 0 <= w; w--) m.push(t[w]);
          return a.Oa(), a.Yk(null, 0), w = [0], n.qy(this.Tb, this.kc, this.ec, this.rb, this.ze, t, i, h, o, w, a), n.Hr(this.Tb, this.kc, this.ec, this.rb, c, h, y, this.ao, o, w, a, d[0], g[0]), n.qy(this.Tb, this.kc, this.ec, this.rb, this.ze, m, y, l, o, w, a), n.Hr(this.Tb, this.kc, this.ec, this.rb, u, p, i, this.ao, o, w, a, b[0], x[0]), t = !1, o || (t = this.IE(this.ec, a)), s || t;
        }, n.prototype.sy = function(t, i, h) {
          h.Oa(), h.Yk(null, 0), n.Hr(this.Tb, this.kc, this.ec, this.rb, t, -this.ao, 6.283185307179586, this.ao, i, [0], h, NaN, NaN), i || this.IE(this.ec, h);
        }, n.prototype.IE = function(t, i) {
          var h = this.vO(t, i);
          return t = this.wO(t, i), h || t;
        }, n.prototype.vO = function(t, i) {
          var h = i.I(), s = !1, o = new e.l();
          if (i.A(o), !e.s.Y(o.H * t, 1.570796326794897) && !e.s.Y(o.G * t, -1.570796326794897)) return !1;
          var a = new e.h();
          for (--h; 0 <= h; h--) i.D(h, a), (a.y == o.H && e.s.Y(a.y * t, 1.570796326794897) || a.y == o.G && e.s.Y(a.y * t, -1.570796326794897)) && (s = !0, this.OI(a, h, i));
          return s;
        }, n.prototype.wO = function(t, i) {
          var h = i.Na(0), s = i.Na(i.I() - 1);
          return 3.141592653589793 < Math.abs(h.x - s.x) * t ? (this.VV(i), !0) : this.uO(i);
        }, n.prototype.uO = function(t) {
          return 0 > t.Ke() && (this.UV(t), !0);
        }, n.prototype.OI = function(t, i, h) {
          var s = h.I(), o = 0 < i ? i - 1 : s - 1;
          if (s = h.Na(i < s - 1 ? i + 1 : 0), o = h.Na(o), !e.s.Y(s.y, t.y) && !e.s.Y(s.x, t.x)) {
            var a = new e.h();
            a.ma(s.x, t.y), h.Cb(i, a);
          }
          e.s.Y(o.y, t.y) || e.s.Y(o.x, t.x) || ((s = new e.h()).ma(o.x, t.y), h.wf(0, i, s));
        }, n.prototype.VV = function(t) {
          var i = new e.Da(), h = new e.Da(), s = new e.Dd(), o = t.Na(0), a = t.Na(t.I() - 1), u = new e.h();
          o.x > a.x ? (a = this.zq, s.gg(-this.Js, 0)) : (a = -this.zq, s.gg(this.Js, 0)), i.add(t, !1), t.Oa(), h.add(i, !1), h.Oc(s), o = new e.l(), h.A(o), o.W((this.Js - o.R()) / 2, 0), o.G = -this.zq, o.H = this.zq;
          for (var c = 0; c < h.I(); c++) h.D(c, u), i.wf(0, -1, u);
          for (h.Oc(s), c = 0; c < h.I(); c++) h.D(c, u), i.wf(0, -1, u);
          h = i.Na(0), s = i.Na(i.I() - 1), u.ma(s.x, a), i.wf(0, -1, u), u.ma(0.5 * (s.x + h.x), a), i.wf(0, -1, u), u.ma(h.x, a), i.wf(0, -1, u), i = e.Hh.ks(i, this.Jc, 2, !0, o.v), i = e.Hh.ks(i, this.Jc, 2, !0, o.C), i = e.Ud.clip(i, o, this.Aq, NaN), t.add(i, !1);
        }, n.prototype.UV = function(t) {
          var i = new e.l();
          t.A(i), i.W((this.Js - i.R()) / 2, 0), i.G = -this.zq, i.H = this.zq, t.Yk(null, 0);
          var h = new e.h();
          h.ma(i.v, i.G), t.wf(1, -1, h), h.ma(i.v, i.H), t.wf(1, -1, h), h.ma(0.5 * (i.v + i.C), i.H), t.wf(1, -1, h), h.ma(i.C, i.H), t.wf(1, -1, h), h.ma(i.C, i.G), t.wf(1, -1, h), h.ma(0.5 * (i.v + i.C), i.G), t.wf(1, -1, h);
        }, n.qy = function(t, i, h, s, o, a, u, c, l, p, y) {
          var d = null;
          l || ((d = new e.h()).Rc(), 0 < y.I() && (d.L(y.Na(y.I() - 1)), d.scale(h)));
          var g = new e.ga(0), b = new e.ga(0), x = new e.ga(0), m = new e.h(), w = new e.h(), j = a[a.length - 1];
          h = 1 / h;
          for (var M = 0; M < a.length; M++) {
            var A = a[M];
            if (M == 0) var z = u;
            else M == a.length - 1 ? z = c : (e.kb.wd(t, i, j.x, j.y, A.x, A.y, null, null, g, o), z = g.u - 1.570796326794897);
            e.kb.yi(t, i, A.x, A.y, s, z, b, x), l ? w.ma(b.u, x.u) : (m.ma(b.u, x.u), n.gJ(A.x, m.x, d.x, p), w.ma(p[0] + m.x, m.y), d.L(w)), w.scale(h), y.wf(0, -1, w);
          }
        }, n.Hr = function(t, i, h, s, o, a, u, c, l, p, y, d, g) {
          if (!(u - a < c)) {
            var b = new e.ga(0), x = new e.ga(0), m = new e.h(), w = new e.h(), j = null;
            l || ((j = new e.h()).Rc(), 0 < y.I() && (j.L(y.Na(y.I() - 1)), j.scale(h)));
            var M = e.O.truncate(Math.ceil(a / c)), A = M++ * c;
            for (A == a && (A = M++ * c), h = 1 / h; A < u + c && (a < d && d < A ? (A = d, M--) : a < g && g < A && (A = g, M--), !(A >= u)); ) e.kb.yi(t, i, o.x, o.y, s, A, b, x), l ? w.ma(b.u, x.u) : (m.ma(b.u, x.u), n.gJ(o.x, m.x, j.x, p), w.ma(p[0] + m.x, m.y), j.L(w)), w.scale(h), y.wf(0, -1, w), a = A, A = M++ * c;
          }
        }, n.dJ = function(t, i, h, s, o, a, u, c, l, p) {
          var y = new e.h(), d = new e.h(), g = new e.ga(0), b = new e.ga(0);
          for (e.kb.yi(t, i, s.x, s.y, h, o, g, b), y.ma(g.u, b.u), e.kb.yi(t, i, s.x, s.y, h, a, g, b), d.ma(g.u, b.u), h = new e.ga(0), e.kb.Xy(t, i, u.x, u.y, y.x, y.y, h), l[0] = h.u, e.kb.Xy(t, i, u.x, u.y, d.x, d.y, h), p[0] = h.u; l[0] <= p[0]; ) l[0] += 6.283185307179586;
          for (; l[0] > p[0]; ) l[0] -= 6.283185307179586;
          for (; l[0] >= c; ) l[0] -= 6.283185307179586, p[0] -= 6.283185307179586;
          for (; l[0] < c; ) l[0] += 6.283185307179586, p[0] += 6.283185307179586;
        }, n.gJ = function(t, i, h, s) {
          if (isNaN(h)) {
            for (; 3.141592653589793 < s[0] + i - t; ) s[0] -= 6.283185307179586;
            for (; 3.141592653589793 < t - (s[0] + i); ) s[0] += 6.283185307179586;
          } else 3.141592653589793 < s[0] + i - h ? s[0] -= 6.283185307179586 : 3.141592653589793 < h - (s[0] + i) && (s[0] += 6.283185307179586);
        }, n.KX = function(t, i) {
          var h = t.getType(), s = e.aa.Hc(h) ? t.da() : h == 550 ? t.I() : 1;
          if (s == 1) return t;
          var o = new e.ia(0);
          o.resize(s);
          for (var a = [], u = new e.l(), c = 0; c < s; c++) {
            if (o.write(c, c), e.aa.Hc(h)) {
              t.Rj(c, u);
              var l = u.sf();
            } else l = t.Na(c);
            l = e.XK.$X(i, l), a[c] = l;
          }
          for (o.Vd(0, o.size, function(p, y) {
            return a[p] < a[y] ? -1 : a[p] > a[y] ? 1 : 0;
          }), i = t.Ia(), c = 0; c < s; c++) u = o.read(c), e.aa.Hc(h) ? i.addPath(t, u, !0) : i.Fd(t, u, u + 1);
          return i;
        }, n.prototype.yX = function() {
          var t = Math.min(3.141592653589793 * this.Tb - this.rb, this.rb);
          t = Math.min(t, 0.39269908169872414 * this.Tb);
          var i = new e.h();
          i.ma(0, 10 * this.ec);
          var h = 45 * this.ec, s = new e.ga(0), o = new e.ga(0), a = new e.ga(0), u = new e.ga(0), c = new e.ga(0), l = new e.ga(0), p = new e.ga(0), y = new e.ga(0), d = new e.h(), g = new e.h(), b = new e.h(), x = new e.h();
          e.kb.yi(this.Tb, this.kc, i.x, i.y, t, 0, s, o), d.ma(s.u, o.u), e.kb.yi(this.Tb, this.kc, i.x, i.y, t, h, a, u), g.ma(a.u, u.u), s = new e.ga(0), o = new e.ga(0);
          for (var m = new e.ga(0); e.kb.yi(this.Tb, this.kc, i.x, i.y, t, 0.5 * (0 + h), c, l), b.ma(c.u, l.u), e.kb.wd(this.Tb, this.kc, d.x, d.y, g.x, g.y, s, o, null, 2), e.kb.oj(this.Tb, this.kc, d.x, d.y, 0.5 * s.u, o.u, p, y, 2), x.ma(p.u, y.u), e.kb.wd(this.Tb, this.kc, b.x, b.y, x.x, x.y, m, null, null, 2), !(m.u <= this.$n); ) h *= 0.9, e.kb.yi(this.Tb, this.kc, i.x, i.y, t, h, a, u), g.ma(a.u, u.u);
          this.ao = 6.283185307179586 / Math.ceil(6.283185307179586 / (h - 0));
        }, n.prototype.zX = function() {
          var t = Math.min(3.141592653589793 * this.Tb - this.rb, this.rb);
          t = Math.min(t, 0.39269908169872414 * this.Tb);
          var i = new e.h(), h = new e.h();
          i.ma(0, 10 * this.ec), h.ma(10 * this.ec, 10 * this.ec);
          var s = new e.ga(0), o = new e.ga(0), a = new e.ga(0);
          e.kb.wd(this.Tb, this.kc, i.x, i.y, h.x, h.y, a, s, o, this.ze);
          var u = new e.ga(0), c = new e.ga(0), l = new e.ga(0), p = new e.ga(0), y = new e.h(), d = new e.ga(0), g = new e.ga(0), b = new e.ga(0), x = new e.ga(0), m = new e.ga(0), w = new e.ga(0), j = new e.ga(0), M = new e.ga(0), A = new e.ga(0), z = new e.h(), N = new e.h(), I = new e.h(), C = new e.h(), T = 1;
          s = s.u, o = o.u + 1.570796326794897, a = a.u, e.kb.yi(this.Tb, this.kc, i.x, i.y, t, s - 1.570796326794897, g, b), z.ma(g.u, b.u), e.kb.yi(this.Tb, this.kc, h.x, h.y, t, o, x, m), N.ma(x.u, m.u), g = new e.ga(0), b = new e.ga(0), o = new e.ga(0);
          for (var D = new e.ga(0); e.kb.oj(this.Tb, this.kc, i.x, i.y, 0.5 * (0 + T) * a, s, u, c, this.ze), y.ma(u.u, c.u), e.kb.wd(this.Tb, this.kc, i.x, i.y, y.x, y.y, null, null, d, this.ze), e.kb.yi(this.Tb, this.kc, y.x, y.y, t, d.u + 1.570796326794897, w, j), I.ma(w.u, j.u), e.kb.wd(this.Tb, this.kc, z.x, z.y, N.x, N.y, g, b, null, 2), e.kb.oj(this.Tb, this.kc, z.x, z.y, 0.5 * g.u, b.u, M, A, 2), C.ma(M.u, A.u), e.kb.wd(this.Tb, this.kc, I.x, I.y, C.x, C.y, o, null, null, 2), !(o.u <= this.$n); ) T *= 0.9, e.kb.oj(this.Tb, this.kc, i.x, i.y, T * a, s, l, p, this.ze), h.ma(l.u, p.u), e.kb.wd(this.Tb, this.kc, i.x, i.y, h.x, h.y, null, null, D, this.ze), e.kb.yi(this.Tb, this.kc, h.x, h.y, t, D.u + 1.570796326794897, x, m), N.ma(x.u, m.u);
          1e5 < (t = T * a) && (t = 1e5), this.QA = t;
        }, n.prototype.xX = function() {
          var t = 5e4 < this.rb ? 100 : 1e4 < this.rb ? 10 : 1;
          500 > this.rb / t && (t = this.rb / 500), 0.01 > t && (t = 0.01), this.$n = t;
        }, n;
      }();
      e.VK = r;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.Mf = function(r, n) {
          var t = new e.h();
          t.L(n), r.push(t);
        }, f.up = function(r, n) {
          r.add(n.x), r.add(n.y);
        }, f.hB = function(r) {
          r.Bh(r.size - 2);
        }, f.oB = function(r, n) {
          n.ma(r.get(r.size - 2), r.get(r.size - 1));
        }, f.Qr = function(r, n, t, i, h, s) {
          if (r == null) throw e.i.N();
          var o = r.getType();
          if (r.B() || e.aa.Rn(o)) return r;
          var a = new f();
          a.Qg = n, a.Jc = e.cb.sc(n);
          var u = e.cb.vv(a.Jc);
          if (a.Ub = s, a.Tb = e.cb.ev(a.Jc), a.kc = u * (2 - u), a.ec = a.Jc.Hd().ai, a.Aq = a.Jc.Kn(), a.Zs = a.Aq * a.ec, a.AA = i, a.zA = h, a.ze = t, o == 197 ? (t = new e.Da(r.description)).ad(r, !1) : e.aa.yd(o) ? (t = new e.Ta(r.description)).oc(r, !0) : t = r, a.ze != 4) {
            if ((n = a.Qg.Nb(a.Jc) == 0 ? e.cb.zh(t, a.Qg, a.Jc) : e.Hh.lj(t, a.Jc)).B()) return n;
            n = f.pI(a.ec, n), n = a.Zy(n), n = e.ip.nj(n, a.Jc, a.ze), a = e.cb.zh(n, a.Jc, a.Qg);
          } else {
            if (e.Eg.Sb(n) == 2 ? (r = e.cb.ml(), (n = e.Xj.local().V(t, r, n, s)) == r && (n = new e.Da(), r.copyTo(n))) : n = e.Hh.lj(t, a.Jc), n.B()) return n;
            a = a.CX(n);
          }
          return a;
        }, f.pI = function(r, n) {
          var t = new e.l();
          if (n.xc(t), 3.141592653589793 > t.R() * r) return n;
          var i = !1;
          t = n.Ga();
          for (var h = new e.h(), s = new e.h(); t.$a(); ) for (; t.Ha(); ) {
            var o = t.ha();
            if (h.L(o.ac()), s.L(o.wc()), h.scale(r), s.scale(r), 3.141592653589793 < Math.abs(h.x - s.x)) {
              var a = f.Lu(h, s);
              if (!a) {
                i = !0;
                break;
              }
              if (6.283185307179586 < Math.abs(h.x - s.x)) {
                i = !0;
                break;
              }
            }
          }
          if (!i) return n;
          i = n.Ia();
          var u = 1 < n.description.Aa, c = new e.h(), l = new e.h(), p = new e.h(), y = new e.h(), d = new e.Sa();
          for (t.Zi(); t.$a(); ) for (var g = NaN, b = [0]; t.Ha(); ) {
            if (o = t.ha(), h.L(o.ac()), s.L(o.wc()), h.scale(r), s.scale(r), isNaN(g) ? (f.Wi(h.x, NaN, b), l.L(h)) : l.L(p), g = l.x, a = f.Lu(h, s)) {
              if (6.283185307179586 < s.x - h.x) for (; 6.283185307179586 < s.x - h.x; ) s.x -= 6.283185307179586;
              if (-6.283185307179586 > s.x - h.x) for (; -6.283185307179586 > s.x - h.x; ) s.x += 6.283185307179586;
              f.Wi(s.x, NaN, b), p.L(s);
            } else c.L(s), f.AU(c), f.Wi(c.x, g, b), p.ma(b[0] + c.x, c.y);
            0.5 > Math.abs(p.x - s.x) && p.L(s), u ? (o.Tw(0, d), y.L(l), y.scale(1 / r), d.Cb(y), (a = t.vm()) ? i.nf(d) : i.lineTo(d), t.Qn() && !n.dc(t.gb) && (o.Tw(1, d), y.L(p), y.scale(1 / r), d.Cb(y), i.lineTo(d))) : ((a = t.vm()) && i.Hz(null, 0), o = i.da() - 1, y.L(l), y.scale(1 / r), i.wf(o, -1, y), t.Qn() && !n.dc(t.gb) && (y.L(p), y.scale(1 / r), i.wf(o, -1, y)));
          }
          return i;
        }, f.tF = function(r, n, t, i, h, s, o, a, u, c, l, p) {
          var y = new e.h(), d = new e.h(), g = 0 < i.compare(h);
          f.fJ(g, i, h, y, d), f.uF(r, n, t, y, d, s, NaN, o, a, u, c, null, l, p), g && f.fC(u, c, null, l);
        }, f.prototype.Zy = function(r) {
          var n = r.Ia(), t = r.Ga(), i = [], h = null, s = null, o = 1 < r.description.Aa;
          o && (h = new e.be(0), s = new e.ig());
          for (var a = [0], u = new e.h(), c = new e.h(), l = new e.h(), p = new e.h(); t.$a(); ) for (a[0] = 0; t.Ha(); ) {
            var y = t.ha();
            u.L(y.ac()), c.L(y.wc()), u.scale(this.ec), c.scale(this.ec);
            var d = 0 < u.compare(c);
            f.fJ(d, u, c, l, p), i.length = 0, h?.Bh(0), 0 < this.AA ? f.uF(this.Tb, this.kc, this.ze, l, p, this.AA, this.zA, this.Zs, null, null, null, o ? h : null, i, a) : f.aR(this.Tb, this.kc, this.ze, l, p, this.zA, this.Zs, o ? h : null, i, a), d && f.fC(null, null, o ? h : null, i), i[0].L(y.ac()), i[i.length - 1].L(y.wc());
            for (var g = 1; g < i.length - 1; g++) i[g].scale(1 / this.ec);
            o ? (d = f.eJ(d, y, s), f.TD(t.vm(), t.Qn() && !r.dc(t.gb), y, d, h, i, n)) : f.SD(t.vm(), t.Qn() && !r.dc(t.gb), i, n);
          }
          return n;
        }, f.prototype.CX = function(r) {
          var n = r.Ia(), t = r.Ga(), i = [], h = null, s = new e.ig(), o = 1 < r.description.Aa;
          for (o && (h = new e.be(0)); t.$a(); ) for (; t.Ha(); ) {
            var a = t.ha(), u = a.ac(), c = a.wc();
            u = 0 < u.compare(c), c = f.eJ(u, a, s), i.length = 0, h?.Bh(0), f.BX(this.Tb, this.kc, this.ec, c, this.Qg, this.AA, this.zA, o ? h : null, i), u && f.fC(null, null, o ? h : null, i), o ? f.TD(t.vm(), t.Qn() && !r.dc(t.gb), a, c, h, i, n) : f.SD(t.vm(), t.Qn() && !r.dc(t.gb), i, n);
          }
          return n;
        }, f.SD = function(r, n, t, i) {
          r && i.Hz(null, 0), r = i.da() - 1;
          var h = t.slice(0);
          i.qG(r, h, h.length - 1), n && i.wf(r, -1, t[t.length - 1]);
        }, f.TD = function(r, n, t, i, h, s, o) {
          var a = new e.Sa();
          if (t.To(a), r ? o.nf(a) : o.lineTo(a), 2 < s.length) {
            r = i.Qb();
            for (var u = 1; u < s.length - 1; u++) {
              var c = i.NG(h.get(u) * r);
              i.Tw(c, a), a.Cb(s[u]), o.lineTo(a);
            }
          }
          n && (t.Po(a), o.lineTo(a));
        }, f.uF = function(r, n, t, i, h, s, o, a, u, c, l, p, y, d) {
          var g = new e.ga(0), b = new e.ga(0), x = new e.ga(0);
          e.kb.wd(r, n, i.x, i.y, h.x, h.y, x, g, b, t), x = x.u;
          var m = g = g.u;
          0 > m && (m += 6.283185307179586), 0 > (b = b.u) && (b += 6.283185307179586), u != null && (u[0] = x), c != null && (c[0] = m), l != null && (l[0] = b), c = u = NaN, p != null && (u = ((c = e.F.Ah(r, n)) - (l = e.F.q(r, n, i.y))) / x, c = (c + l) / x), l = f.Mu(i, h), b = f.Ku(i, h), m = l || b;
          var w = f.FE(i, h, a), j = new e.ga(0), M = new e.ga(0), A = new e.h(), z = new e.h(), N = new e.h();
          f.Wi(i.x, NaN, d);
          var I = [d[0]];
          if (x <= s) f.Mf(y, i), f.Wi(h.x, NaN, d), p?.add(0), m ? (l && f.kB(i, h, p, y), b && f.iB(i, h, p, y)) : w ? f.jB(i, h, g, u, c, p, y) : 0 < o && (z.ma(i.x - I[0], i.y), A.ma(h.x - d[0], h.y), f.Yy(r, n, t, i, x, g, z, A, 0, 1, o, p, y, I)), f.Mf(y, h);
          else {
            var C = x / ((s = 1 + e.O.truncate(Math.ceil(x / s))) - 1), T = new e.h(), D = 0;
            f.Mf(y, i), T.L(i), z.ma(i.x - d[0], i.y), p?.add(0);
            for (var B = 1; B < s; B++) {
              if (B < s - 1) {
                e.kb.oj(r, n, i.x, i.y, B * C, g, j, M, t), A.ma(j.u, M.u), f.Wi(A.x, T.x, d), N.ma(d[0] + A.x, A.y);
                var E = B / (s - 1);
              } else f.Wi(h.x, NaN, d), A.ma(h.x - d[0], h.y), N.L(h), E = 1;
              m ? (B == 1 && l && f.kB(i, N, p, y), B == s - 1 && b && f.iB(T, h, p, y)) : w ? f.EE(T, N, a) && (i.x < h.x ? T.x > N.x && (d[0] += 6.283185307179586, N.ma(d[0] + A.x, A.y)) : T.x < N.x && (d[0] -= 6.283185307179586, N.ma(d[0] + A.x, A.y)), f.jB(T, N, g, u, c, p, y)) : 0 < o && f.Yy(r, n, t, i, x, g, z, A, D, E, o, p, y, I), f.Mf(y, N), p?.add(E), T.L(N), z.L(A), I[0] = d[0], D = E;
            }
          }
        }, f.aR = function(r, n, t, i, h, s, o, a, u, c) {
          var l = new e.ga(0), p = new e.ga(0), y = new e.ga(0);
          e.kb.wd(r, n, i.x, i.y, h.x, h.y, y, l, p, t), p = y.u, l = l.u;
          var d = y = NaN;
          if (a != null) {
            d = e.F.Ah(r, n);
            var g = e.F.q(r, n, i.y);
            y = (d - g) / p, d = (d + g) / p;
          }
          g = f.Mu(i, h);
          var b = f.Ku(i, h), x = g || b;
          o = f.FE(i, h, o);
          var m = f.Lu(i, h);
          m = x || o || m, f.Wi(i.x, NaN, c);
          var w = new e.h();
          f.Mf(u, i), w.L(i), a?.add(0), m ? (x ? (g && f.kB(i, h, a, u), b && f.iB(i, h, a, u)) : o && f.jB(i, h, l, y, d, a, u), f.Wi(h.x, NaN, c), f.Mf(u, h)) : p <= s ? (f.Wi(h.x, NaN, c), f.Mf(u, h)) : (y = new e.h(), o = new e.h(), y.L(i), o.L(h), y.x -= c[0], o.x -= c[0], -3.141592653589793 > o.x ? o.x += 6.283185307179586 : 3.141592653589793 < o.x && (o.x -= 6.283185307179586), f.Yy(r, n, t, i, p, l, y, o, 0, 1, s, a, u, c), f.Mf(u, h), f.Wi(h.x, NaN, c)), a?.add(1);
        }, f.Yy = function(r, n, t, i, h, s, o, a, u, c, l, p, y, d) {
          var g = new e.h(), b = new e.h();
          g.ma(o.x + d[0], o.y), new e.ga(0), new e.ga(0), new e.ga(0), new e.ga(0);
          var x = new e.ga(0), m = new e.ga(0), w = new e.ga(0), j = new e.h(), M = new e.h(), A = new e.h(), z = new e.h();
          j.L(o), M.L(a), o = new e.be(0), a = new e.be(0), f.up(o, M), a.add(c);
          var N = new e.h(), I = new e.yb(), C = [];
          for (f.YJ(4, C); 0 < o.size; ) {
            for (var T, D = !1, B = NaN, E = 0; 3 > E; E++) if (T = C[E] * c + (1 - C[E]) * u, e.kb.oj(r, n, i.x, i.y, T * h, s, x, m, t), A.ma(x.u, m.u), E == 0 && (B = T, z.L(A)), f.WW(j, A, M, I), I.hc(I.fe(A, !0), N), e.kb.wd(r, n, A.x, A.y, N.x, N.y, w, null, null, 2), w.u > l) {
              D = !0;
              break;
            }
            D ? (M.L(z), c = B, f.up(o, M), a.add(c)) : (f.hB(o), a.En(a.size - 1, 1, a.size - 1), 0 < o.size && (f.Wi(M.x, g.x, d), b.ma(d[0] + M.x, M.y), f.Mf(y, b), g.L(b), p?.add(c), j.L(M), u = c, f.oB(o, M), c = a.get(a.size - 1)));
          }
        }, f.BX = function(r, n, t, i, h, s, o, a, u) {
          var c = new e.h(), l = new e.h(), p = new e.h(), y = new e.h(), d = new e.h(), g = new e.h(), b = new e.h(), x = new e.h(), m = new e.h(), w = new e.h(), j = new e.ga(0), M = new e.ga(0), A = new e.h(), z = [[], []], N = e.Eg.Sb(h) == 1;
          h = h.Xd(0);
          var I = i.ac(), C = i.wc();
          N ? (g.ma(I.x * t, I.y * t), b.ma(C.x * t, C.y * t)) : (z[0][0] = I.x, z[0][1] = I.y, z[1][0] = C.x, z[1][1] = C.y, e.cb.vt(), g.x = z[0][0] * t, g.y = z[0][1] * t, b.x = z[1][0] * t, b.y = z[1][1] * t);
          var T = 0, D = 0, B = 1, E = i.Pn();
          c.L(I), l.L(C), C = new e.be(0);
          var G = new e.be(0), H = new e.be(0);
          f.up(C, l), f.up(G, b), H.add(B), f.Mf(u, c), a?.add(D);
          var U = [], $ = 0 < o ? E ? 5 : 3 : E ? 5 : 1;
          f.YJ($, U);
          for (var W = new e.ga(0), R = new e.ga(0), K = new e.ga(0), S = new e.ga(0), X = new e.ga(0), V = new e.ga(0), nt = new e.ga(0); 0 < G.size; ) {
            var O = !1, tt = NaN;
            for (e.kb.wd(r, n, g.x, g.y, b.x, b.y, W, R, null, 2), I = 0; I < $ && !(I == 0 && (!E && 0 >= o && W.u <= s && 3.141592653589793 > Math.abs(g.x - b.x) || i.Ux(D, B) <= h)); I++) {
              var L = U[I] * B + (1 - U[I]) * D;
              if (i.hc(L, p), N ? x.ma(p.x * t, p.y * t) : (z[0][0] = p.x, z[0][1] = p.y, e.cb.vt(), x.x = z[0][0] * t, x.y = z[0][1] * t), I == 0 && (tt = L, d.L(p), w.L(x), 0 < s && (W.u > s || 3.141592653589793 <= Math.abs(g.x - b.x)))) {
                O = !0;
                break;
              }
              if (E && 0 < s) {
                if (e.kb.wd(r, n, g.x, g.y, x.x, x.y, K, null, null, 2), K.u > s || 3.141592653589793 <= Math.abs(g.x - x.x)) {
                  O = !0;
                  break;
                }
              } else if (0 < o) {
                if (E ? (y.NS(c, l, U[I]), N ? m.ma(y.x * t, y.y * t) : (z[0][0] = y.x, z[0][1] = y.y, e.cb.vt(), m.x = z[0][0] * t, m.y = z[0][1] * t)) : (y.L(p), m.L(x)), e.kb.wd(r, n, g.x, g.y, m.x, m.y, S, null, null, 2), !(S.u <= W.u)) {
                  O = !0;
                  break;
                }
                if (e.kb.oj(r, n, g.x, g.y, S.u, R.u, j, M, 2), A.ma(j.u, M.u), e.kb.wd(r, n, A.x, A.y, x.x, x.y, X, null, null, 2), X.u > o) {
                  O = !0;
                  break;
                }
                if (E) {
                  if (e.kb.wd(r, n, A.x, A.y, m.x, m.y, V, null, null, 2), V.u > o) {
                    O = !0;
                    break;
                  }
                  if (e.kb.wd(r, n, m.x, m.y, x.x, x.y, nt, null, null, 2), nt.u > o) {
                    O = !0;
                    break;
                  }
                }
              }
            }
            O ? (l.L(d), b.L(w), B = tt, f.up(C, l), f.up(G, b), H.add(B)) : (f.hB(C), f.hB(G), H.En(H.size - 1, 1, H.size - 1), f.Mf(u, l), T += W.u, a?.add(T), 0 < G.size && (c.L(l), g.L(b), D = B, f.oB(C, l), f.oB(G, b), B = H.get(H.size - 1)));
          }
          if (a != null) for (r = 1 / T, I = 0; I < a.size; I++) a.write(I, a.read(I) * r);
        }, f.fC = function(r, n, t, i) {
          i.reverse(), t?.ni(0, t.size, 1), t = r != null ? r[0] : NaN, i = n != null ? n[0] : NaN, r != null && (r[0] = i), n != null && (n[0] = t);
        }, f.fJ = function(r, n, t, i, h) {
          r ? (i.L(t), h.L(n)) : (i.L(n), h.L(t));
        }, f.eJ = function(r, n, t) {
          return r ? (t.create(n.getType()), n.copyTo(t.get()), t.get().reverse(), t.get()) : n;
        }, f.Wi = function(r, n, t) {
          if (isNaN(n)) {
            for (; 3.141592653589793 < t[0] - r; ) t[0] -= 6.283185307179586;
            for (; 3.141592653589793 < r - t[0]; ) t[0] += 6.283185307179586;
          } else 3.141592653589793 < t[0] + r - n ? t[0] -= 6.283185307179586 : 3.141592653589793 < n - (t[0] + r) && (t[0] += 6.283185307179586);
        }, f.WW = function(r, n, t, i) {
          3.141592653589793 > Math.abs(n.x - r.x) ? (i.Dc(r), 3.141592653589793 <= t.x - r.x ? i.Ql(t.x - 6.283185307179586, t.y) : 3.141592653589793 <= r.x - t.x ? i.Ql(t.x + 6.283185307179586, t.y) : i.Ql(t.x, t.y)) : (i.Dc(t), 3.141592653589793 <= r.x - t.x ? i.Ql(r.x - 6.283185307179586, r.y) : 3.141592653589793 <= t.x - r.x ? i.Ql(r.x + 6.283185307179586, r.y) : i.Ql(r.x, r.y));
        }, f.YJ = function(r, n) {
          for (var t = 0; t < r; t++) {
            var i = Math.ceil(t / 2) / (r + 1);
            t % 2 != 0 && (i = -i), n[t] = 0.5 + i;
          }
        }, f.Mu = function(r, n) {
          return !!(e.s.Y(r.y, 1.570796326794897) && !e.s.Y(n.y, 1.570796326794897) || e.s.Y(r.y, -1.570796326794897) && !e.s.Y(n.y, -1.570796326794897));
        }, f.Ku = function(r, n) {
          return !!(e.s.Y(n.y, 1.570796326794897) && !e.s.Y(r.y, 1.570796326794897) || e.s.Y(n.y, -1.570796326794897) && !e.s.Y(r.y, -1.570796326794897));
        }, f.FE = function(r, n, t) {
          return !(!f.EE(r, n, t) || e.s.Y(r.y, 1.570796326794897) || e.s.Y(r.y, -1.570796326794897) || e.s.Y(n.y, 1.570796326794897) || e.s.Y(n.y, -1.570796326794897));
        }, f.EE = function(r, n, t) {
          return Math.abs(Math.abs(r.x - n.x) - 3.141592653589793) <= t;
        }, f.Lu = function(r, n) {
          return !!(e.s.Y(r.y, 1.570796326794897) && e.s.Y(n.y, 1.570796326794897) || e.s.Y(r.y, -1.570796326794897) && e.s.Y(n.y, -1.570796326794897));
        }, f.kB = function(r, n, t, i) {
          if (0 < r.y) {
            var h = new e.h();
            h.ma(n.x, 1.570796326794897);
          } else (h = new e.h()).ma(n.x, -1.570796326794897);
          e.s.Y(r.x, h.x) || e.s.Y(n.y, h.y) || (f.Mf(i, h), t?.add(0));
        }, f.iB = function(r, n, t, i) {
          if (0 < n.y) {
            var h = new e.h();
            h.ma(r.x, 1.570796326794897);
          } else (h = new e.h()).ma(r.x, -1.570796326794897);
          e.s.Y(n.x, h.x) || e.s.Y(r.y, h.y) || (f.Mf(i, h), t?.add(1));
        }, f.jB = function(r, n, t, i, h, s, o) {
          e.s.Cd(t) ? (0 < 1.570796326794897 - r.y && ((t = new e.h()).ma(r.x, 1.570796326794897), f.Mf(o, t), s?.add(i)), 0 < 1.570796326794897 - n.y && ((t = new e.h()).ma(n.x, 1.570796326794897), f.Mf(o, t), s?.add(i))) : (0 < 1.570796326794897 + r.y && ((t = new e.h()).ma(r.x, -1.570796326794897), f.Mf(o, t), s?.add(h)), 0 < 1.570796326794897 + n.y && ((t = new e.h()).ma(n.x, -1.570796326794897), f.Mf(o, t), s?.add(h)));
        }, f.AU = function(r) {
          if (-3.141592653589793 > r.x) for (; -3.141592653589793 > r.x; ) r.x += 6.283185307179586;
          if (3.141592653589793 < r.x) for (; 3.141592653589793 < r.x; ) r.x -= 6.283185307179586;
        }, f;
      }();
      e.cj = v;
    }(k || (k = {})), function(e) {
      e.ip = function() {
        function v() {
        }
        return v.nj = function(f, r, n) {
          if (f == null || r == null || !e.cb.Wc(r)) throw e.i.N();
          if (f.B()) return f;
          var t = f, i = t.getType();
          if (e.aa.Hc(i)) {
            t = e.Hh.lj(f, r), f = new e.l(), t.A(f), i = e.ta.Wd(r, f, !1);
            for (var h = e.cb.gh(r), s = Math.floor((f.v - h.v) / h.R()) * h.R() + h.v; s < f.C; ) s > f.v + i && s < f.C - i && (t = e.Hh.ks(t, r, n, !0, s)), s += h.R();
          } else {
            if (i == 197) return (f = new e.Da(t.description)).ad(t, !1), v.nj(f, r, n);
            if (e.aa.yd(i)) return (f = new e.Ta(t.description)).oc(t, !0), v.nj(f, r, n);
          }
          return v.Uy(t, r);
        }, v.Uy = function(f, r) {
          if (f == null || r == null || !e.cb.Wc(r)) throw e.i.N();
          if (f.B()) return f;
          var n = f.getType();
          return n == 197 ? (n = new e.Da(f.description)).ad(f, !1) : e.aa.yd(n) ? (n = new e.Ta(f.description)).oc(f, !0) : n = f, (n = e.Hh.lj(n, r)).B() ? n : e.Eg.Sb(r) == 1 ? e.Hh.Fn(n, r, 0, n != f, 0) : v.NQ(n, r, n != f);
        }, v.NQ = function(f, r, n) {
          if (!e.cb.Wc(r)) throw e.i.N();
          if (f.B()) return f;
          var t = e.cb.bf(r), i = -180 * t;
          return t *= 360, e.Eg.Sb(r) == 2 && (t = (i = e.cb.gh(r)).C, t -= i = i.v), e.Hh.Hp(f, i, t, r, n, 0, !0);
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.BY = function() {
        function v() {
        }
        return v.P = function(f) {
          return 0 > f ? -f : f;
        }, v.Mb = function(f, r) {
          return 0 <= r ? v.P(f) : -v.P(f);
        }, v.Y = function(f, r) {
          return f == r || v.P(f - r) <= v.JC * (1 + (v.P(f) + v.P(r)) / 2);
        }, v.Cd = function(f) {
          return f == 0 || v.P(f) <= v.JC;
        }, v.Ah = function(f, r) {
          var n = (r = (1 - (r = Math.sqrt(1 - r))) / (1 + r)) * r;
          return f / (1 + r) * (1 + n * (0.25 + n * (0.015625 + 1 / 256 * n))) * v.EL;
        }, v.EL = 1.5707963267948966, v.JC = 3552713678800501e-30, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function(r) {
        this.Wf = r, this.Kk = this.Wf.getCode(), 0 > this.Kk && (this.Kk = 0);
      };
      e.DY = v;
      var f = function() {
        function r(n) {
          n === void 0 && (n = null), this.Cj = null, this.Un = !1, n !== null && (this.Cj = new v(n));
        }
        return r.prototype.Ec = function() {
          return this.Cj != null ? this.Cj.Kk : 0;
        }, r.prototype.Of = function() {
          var n = new r();
          return this.copyTo(n), n;
        }, r.prototype.copyTo = function(n) {
          n.Cj = this.Cj, n.Un = this.Un;
        }, r.prototype.Qz = function() {
          this.Un = !this.Un;
        }, r.prototype.qm = function() {
          return this.Cj != null ? this.Cj.Wf : null;
        }, r.prototype.LJ = function(n) {
          if (0 >= n) throw e.i.N();
          if (n != this.Ec()) {
            if ((n = e.pf.geogtran(n)) == null) throw e.i.N("Geogtran not found.");
            this.Cj = new v(n);
          }
        }, r.prototype.Bz = function() {
          return this.Cj == null ? null : this.Cj.Wf.toString();
        }, r.prototype.tX = function(n) {
          if (n == null) throw e.i.N();
          var t = null;
          try {
            t = e.pf.fromString(e.Sc.PE_TYPE_GEOGTRAN, n);
          } catch {
            throw e.i.N();
          }
          this.Cj = new v(t);
        }, r.prototype.Nb = function(n) {
          return n == this || !(!(n instanceof r) || (0 >= this.Ec() || this.Ec() != n.Ec()) && !this.qm().isEqual(n.qm())) && this.Un == n.Un;
        }, r.prototype.toString = function() {
          var n = "GeographicTransformation: " + this.Bz();
          return 200 < n.length ? n.substring(0, 197) + "... (" + n.length.toString() + " characters)" : n;
        }, r.create = function(n, t) {
          var i = new r();
          return i.LJ(n), t && i.Qz(), i;
        }, r.uP = function(n, t) {
          var i = new r();
          return i.tX(n), t && i.Qz(), i;
        }, r;
      }();
      e.Dx = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function r() {
        }
        return r.construct = function(n, t, i, h) {
          var s = new r();
          return s.hw = n, s.iw = t, s.QY = i, s.RY = h, s;
        }, r.Ey = function(n, t) {
          return n.hw == t.hw ? n.iw == t.iw ? 0 : n.iw < t.iw ? -1 : 1 : n.hw < t.hw ? -1 : 1;
        }, r;
      }(), f = function() {
        function r() {
          this.yT = [], this.zT = [], this.qp();
        }
        return r.kz = function() {
          return r.jK == null && (r.jK = new r()), r.jK;
        }, r.prototype.qp = function() {
          this.iD(this.yT), this.iD(this.zT);
        }, r.prototype.iD = function(n) {
          try {
            var t = [];
            t = t.sort(v.Ey);
            for (var i = 0; i < t.length; i++) n.push(t[i]);
          } catch {
          }
        }, r;
      }();
      e.CY = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.prototype.yD = function(r) {
          this.Fk = r;
        }, f.prototype.WM = function(r) {
          this.Fb = r;
        }, f.prototype.xD = function(r) {
          this.zo = r;
        }, f.CE = function(r) {
          return !(r.B() || r.getType() != 1607 && r.getType() != 1736);
        }, f.AE = function(r) {
          return !(r.B() || r.getType() != 1607 && r.getType() != 1736 || 20 > r.I());
        }, f.BE = function(r) {
          return !(r.B() || r.getType() != 1607 && r.getType() != 1736 || 20 > r.I());
        }, f;
      }();
      e.Uk = v;
    }(k || (k = {})), function(e) {
      e.$b = function() {
        function v() {
        }
        return v.TT = function(f) {
          var r = new e.Da();
          return r.sx(f.es(), f.gs()), r.yj(f.es(), f.fs()), r.yj(f.ds(), f.fs()), r.yj(f.ds(), f.gs()), r;
        }, v.zh = function(f, r) {
          return f === null ? null : e.Hx.local().V(f, r, null);
        }, v.jY = function(f, r) {
          var n = e.Gh.local();
          return f = new e.Zc(f), n.V(f, r, null).next();
        }, v.im = function(f, r, n) {
          return e.kp.local().V(f, r, n, null);
        }, v.ep = function(f, r, n) {
          return e.Kx.local().V(f, r, n, null);
        }, v.VX = function(f, r, n) {
          var t = e.Kx.local();
          for (f = new e.Zc(f), r = new e.Zc(r), n = t.V(f, r, n, null), t = []; (r = n.next()) != null; ) t.push(r);
          return t;
        }, v.Nb = function(f, r, n) {
          return e.dj.local().V(3, f, r, n, null);
        }, v.TP = function(f, r, n) {
          return e.dj.local().V(4, f, r, n, null);
        }, v.RS = function(f, r, n) {
          var t = e.Xj.local();
          for (f = new e.Zc(f), r = new e.Zc(r), n = t.V(f, r, n, null), t = []; (r = n.next()) != null; ) t.push(r);
          return t;
        }, v.QP = function(f, r, n) {
          var t = e.kp.local();
          for (f = new e.Zc(f), r = new e.Zc(r), n = t.V(f, r, n, null), t = []; (r = n.next()) != null; ) t.push(r);
          return t;
        }, v.Ea = function(f, r, n) {
          return e.Xj.local().V(f, r, n, null);
        }, v.QS = function(f, r, n) {
          if ((f = e.Xj.local().V(f, r, n, null, 1)) === null) return [];
          if (f.getType() === 550) {
            for (r = [], n = 0; n < f.wa; n++) r.push(f.KR(n));
            return r;
          }
          return f.getType() === 33 ? [f] : [];
        }, v.qY = function(f, r, n) {
          return e.dj.local().V(2, f, r, n, null);
        }, v.contains = function(f, r, n) {
          return e.dj.local().V(1, f, r, n, null);
        }, v.BP = function(f, r, n) {
          return e.dj.local().V(16, f, r, n, null);
        }, v.touches = function(f, r, n) {
          return e.dj.local().V(8, f, r, n, null);
        }, v.DU = function(f, r, n) {
          return e.dj.local().V(32, f, r, n, null);
        }, v.TS = function(f, r, n) {
          return e.dj.local().V(1073741824, f, r, n, null);
        }, v.yB = function(f, r, n, t) {
          return e.zL.local().V(f, r, n, t, null);
        }, v.tb = function(f, r, n, t) {
          var i = null;
          if (n != null) {
            if (i = n.Hd(), t != null && i.Ec() != t.Ec() && i.od != t.od) throw e.i.Xk();
          } else if (t != null) throw e.i.N();
          return f = e.rL.local().V(f, r, null), i !== null && t !== null && (f = e.Tc.Nh(f, i, t)), f;
        }, v.clip = function(f, r, n) {
          return e.kL.local().V(f, e.l.construct(r.es(), r.gs(), r.ds(), r.fs()), n, null);
        }, v.dl = function(f, r, n) {
          if (f == null || r == null) return null;
          for (f = e.mL.local().V(!0, f, r, n, null), r = []; (n = f.next()) != null; ) n.B() || r.push(n);
          return r.slice(0);
        }, v.MN = function(f, r, n, t, i, h, s, o) {
          if (i === !0) return v.NN(f, r, n, t, h, s, o);
          if (i = n, r != null) {
            if (s = r.Hd(), t != null && s.Ec() != t.Ec()) {
              if (s.od != t.od) throw e.i.Xk();
              i = [], e.Tc.XE(n, n.length, t, s, i);
            }
          } else if (t != null) throw e.i.N();
          if (n = e.AC.local(), h) {
            for (f = new e.Zc(f), r = n.V(f, r, i, h, null), f = []; (h = r.next()) != null; ) f.push(h);
            h = f.slice(0);
          } else for (h = [], t = 0; t < f.length; t++) h[t] = n.V(f[t], r, i[t], null);
          return h;
        }, v.NN = function(f, r, n, t, i, h, s) {
          if (r === null || (t == null && (t = r.Ec() !== 4326 ? r.Hd() : e.Tc.Zg(9001)), t.od !== 0)) throw e.i.N();
          if (e.Tc.XE(n, n.length, t, e.Tc.Zg(9001), n), t = e.FC.local(), i) {
            for (f = new e.Zc(f), r = t.V(f, r, h, n, s, !1, i, null), n = []; (h = r.next()) != null; ) n.push(h);
            i = n.slice(0);
          } else {
            i = [];
            for (var o = 0; o < f.length; o++) i[o] = t.V(f[o], r, h, n[o], s, !1, null);
          }
          return i;
        }, v.buffer = function(f, r, n, t, i, h, s) {
          var o = n;
          if (i === !1) {
            if (r != null) {
              if (i = r.Hd(), t != null && i.Ec() != t.Ec()) {
                if (i.od != t.od) throw e.i.Xk();
                o = e.Tc.Nh(n, t, i);
              }
            } else if (t != null) throw e.i.N();
            f = e.AC.local().V(f, r, o, null);
          } else {
            if (r === null || (t == null && (t = r.Ec() !== 4326 ? r.Hd() : e.Tc.Zg(9001)), t.od !== 0)) throw e.i.N();
            o = e.Tc.Nh(n, t, e.Tc.Zg(9001)), f = e.FC.local().V(f, r, h, o, s, !1, null);
          }
          return f;
        }, v.BU = function(f, r, n, t, i, h, s) {
          if (r != null) {
            var o = r.Hd();
            if (s != null && o.Ec() != s.Ec()) {
              if (o.od != s.od) throw e.i.Xk();
              n = e.Tc.Nh(n, s, o);
            }
          } else if (s != null) throw e.i.N();
          for (f = new e.Zc(f), r = e.IC.local().V(f, r, n, t, i, h, null), n = []; (t = r.next()) != null; ) n.push(t);
          return n.slice(0);
        }, v.offset = function(f, r, n, t, i, h, s) {
          if (r != null) {
            var o = r.Hd();
            if (s != null && o.Ec() != s.Ec()) {
              if (o.od != s.od) throw e.i.Xk();
              n = e.Tc.Nh(n, s, o);
            }
          } else if (s != null) throw e.i.N();
          return e.IC.local().V(f, r, n, t, i, h, null);
        }, v.iP = function(f) {
          return e.CC.local().V(f, null);
        }, v.jP = function(f, r) {
          var n = e.CC.local();
          for (f = new e.Zc(f), r = n.V(f, r, null), n = []; (f = r.next()) != null; ) n.push(f);
          return n;
        }, v.nz = function(f, r, n) {
          return e.Ix.local().nz(f, r, n);
        }, v.oz = function(f, r) {
          return e.Ix.local().oz(f, r);
        }, v.pz = function(f, r, n, t) {
          return e.Ix.local().pz(f, r, n, t);
        }, v.eC = function(f, r) {
          return e.Yl.local().V(f, r, !1, null);
        }, v.dT = function(f, r) {
          return e.Yl.local().rs(f, r, null);
        }, v.QQ = function(f, r, n, t, i) {
          var h = e.EC.local();
          if (r != null) {
            if (r = r.Hd(), i != null && r.Ec() != i.Ec()) {
              if (r.od != i.od) throw e.i.Xk();
              n = e.Tc.Nh(n, i, r);
            }
          } else if (i != null) throw e.i.N();
          return h.V(f, n, t, null);
        }, v.Qr = function(f, r, n, t) {
          var i = e.Xl.local();
          if (r != null) {
            if (r = r.Hd(), t != null && r.Ec() != t.Ec()) {
              if (r.od != t.od) throw e.i.Xk();
              n = e.Tc.Nh(n, t, r);
            }
          } else if (t != null) throw e.i.N();
          return i.V(f, n, null);
        }, v.Wy = function(f, r, n, t, i) {
          i === void 0 && (i = 0);
          var h = e.tL.local();
          if (i == 4 || i !== 0) throw e.i.Ie();
          if (t !== null) {
            if (t.od !== 0) throw e.i.N("Unit must be a linear unit type");
            n = e.Tc.Nh(n, t, e.Tc.Zg(9001));
          }
          return h.V(f, n, r, i, null);
        }, v.WQ = function(f, r, n, t) {
          if (f === null) return 0;
          if (t == 4 || t !== 0) throw e.i.Ie();
          if (f.getType() == 197) f = v.TT(f);
          else if (f.getType() != 1736) return 0;
          if (t = e.cb.sc(r), f = e.cb.zh(f, r, t), f = e.UK.XQ([f])[0], n !== null) {
            if (n.od !== 2) throw e.i.N("Unit must be a area unit type");
            f = e.Tc.Nh(f, e.Tc.Zg(109404), n);
          }
          return f;
        }, v.ZQ = function(f, r, n, t) {
          if (f = e.vL.local().V(f, r, t, null), n !== null) {
            if (n.od !== 0) throw e.i.N("Unit must be a linear unit type");
            f = e.Tc.Nh(f, e.Tc.Zg(9001), n);
          }
          return f;
        }, v.JU = function(f, r, n) {
          if (f === null) return 0;
          var t = null;
          if (r != null) {
            if ((t = r.Hd()).od == 0 && (t = e.Tc.aG(t)) == null && n !== null) throw e.i.N();
            if (n != null && t.Ec() != n.Ec() && t.od != n.od) throw e.i.Xk();
          } else if (n != null) throw e.i.N();
          return f.getType() == 1736 || f.getType() == 197 ? (f = f.Ke(), n !== null ? e.Tc.Nh(f, t, n) : f) : 0;
        }, v.KU = function(f, r, n) {
          if (f === null || f.B() || 1 > f.Db()) return 0;
          var t = null;
          if (r != null) {
            if (t = r.Hd(), n != null && t.Ec() != n.Ec() && t.od != n.od) throw e.i.Xk();
          } else if (n != null) throw e.i.N();
          f.getType() == 1736 || f.getType() == 197 ? r = f.mg() : e.aa.yd(f.getType()) ? (r = new e.Ta(f.description)).oc(f, !0) : r = f, f = 0, r = r.Ga();
          for (var i = new e.h(), h = new e.h(); r.$a(); ) for (; r.Ha(); ) {
            var s = r.ha();
            s.Yp(i), s.Tr(h), f += e.h.tb(i, h);
          }
          return t !== null && n !== null && (f = e.Tc.Nh(f, t, n)), f;
        }, v.fP = function(f) {
          return f.points !== void 0 ? v.mS(f, f.hasZ !== void 0 && f.hasZ, f.hasM !== void 0 && f.hasM) : f.rings !== void 0 ? v.lG(f.rings, f.hasZ !== void 0 && f.hasZ, f.hasM !== void 0 && f.hasM, "P") : f.paths !== void 0 ? v.lG(f.paths, f.hasZ !== void 0 && f.hasZ, f.hasM !== void 0 && f.hasM, "L") : f.x !== void 0 ? v.nS(f) : f.xmin !== void 0 ? v.lS(f) : null;
        }, v.nS = function(f) {
          if (f.x == null || f.x == "NaN") return new e.Sa();
          var r = new e.Sa(f.x, f.y);
          return f.z !== void 0 && f.z !== null && r.wX(f.z), f.m !== void 0 && f.m !== null && r.hX(f.m), r;
        }, v.lS = function(f) {
          if (f.xmin == null || f.xmin == "NaN") return new e.Fh();
          var r = new e.Fh(f.xmin, f.ymin, f.xmax, f.ymax);
          return f.zmin !== void 0 && f.zmin !== null && r.setInterval(1, 0, f.zmin, f.zmax), f.mmin !== void 0 && f.mmin !== null && r.setInterval(2, 0, f.mmin, f.mmax), r;
        }, v.mS = function(f, r, n) {
          var t = 0, i = new e.de(), h = 3 * f.points.length;
          h % 2 != 0 && h++, 2 > h && (h = 2);
          var s = e.O.truncate(3 * f.points.length / 2);
          4 > s ? s = 4 : 16 > s && (s = 16), h = e.Yc.Dn(h, 0);
          var o = e.Yc.Dn(s);
          s = e.Yc.Dn(s);
          for (var a = 0; a < f.points.length; a++) h.write(2 * a, f.points[a][0]), h.write(2 * a + 1, f.points[a][1]), o.write(a, r || n ? f.points[a][2] : NaN), s.write(a, n && r ? f.points[a][3] : NaN), t++;
          return t != 0 && (i.resize(t), i.hn(0, h)), r && (i.re(1), i.hn(1, o)), n && (i.re(2), i.hn(2, r == 0 ? o : s)), i.Pc(16777215), i;
        }, v.lG = function(f, r, n, t) {
          var i = 0, h = 2;
          if (t == "P") {
            var s = new e.Da();
            i = 1, h = 3;
          } else s = new e.Ta();
          for (var o = e.Yc.Oh(0), a = e.Yc.Mr(0), u = 0, c = 0, l = [], p = [], y = 0; y < f.length; y++) {
            var d = f[y].length;
            if (l[y] = !1, t === "P" && f[y][0][0] === f[y][f[y].length - 1][0] && f[y][0][1] === f[y][f[y].length - 1][1]) {
              var g = n == 0 || f[y][0][3] === f[y][f[y].length - 1][3] || f[y][0][3] === void 0 && f[y][f[y].length - 1][3] === void 0;
              (r == 0 || f[y][0][2] === f[y][f[y].length - 1][2] || f[y][0][2] === void 0 && f[y][f[y].length - 1][2] === void 0) && g && (l[y] = !0, --d);
            }
            d >= h ? (p[y] = !1, c += 1, o.add(u), a.add(i), u += d) : p[y] = !0;
          }
          for ((t = 3 * u) % 2 != 0 && t++, 2 > t && (t = 2), 4 > (y = e.O.truncate(3 * u / 2)) ? y = 4 : 16 > y && (y = 16), t = e.Yc.Dn(t, 0), i = e.Yc.Dn(y), h = e.Yc.Dn(y), y = d = 0; y < f.length; y++) if (p[y] === !1) for (g = 0; g < f[y].length; g++) {
            var b = !1;
            g === f[y].length - 1 && l[y] === !0 && (b = !0), b || (t.write(2 * d, f[y][g][0]), t.write(2 * d + 1, f[y][g][1]), i.write(d, r || n ? f[y][g][2] : NaN), h.write(d, n && r ? f[y][g][3] : NaN), d++);
          }
          return u != 0 && (f = s, o.resize(c), a.resize(c), 0 < u && (o.add(u), a.add(0)), f.hn(0, t), f.PJ(a), f.QJ(o)), r && (s.re(1), s.hn(1, i)), n && (s.re(2), s.hn(2, r == 0 ? i : h)), s.Pc(16777215), s;
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.Ex = function() {
        function v() {
        }
        return v.br = function(f) {
          var r, n = 0, t = f.length, i = f[0];
          for (r = 0; r < t - 1; r++) {
            var h = f[r + 1];
            n += (h[0] - i[0]) * (h[1] + i[1]), i = h;
          }
          return 0 <= n;
        }, v.rotate = function(f, r, n) {
          r = r * Math.PI / 180;
          var t = Math.cos(r), i = Math.sin(r);
          if (f.paths !== void 0) {
            r = { paths: [] };
            for (var h = 0; h < f.paths.length; h++) {
              for (var s = f.paths[h], o = [], a = 0; a < s.length; a++) {
                var u = s[a].slice(0);
                o.push(u);
                var c = t * (s[a][0] - n.x) - i * (s[a][1] - n.y) + n.x, l = i * (s[a][0] - n.x) + t * (s[a][1] - n.y) + n.y;
                u[0] = c, u[1] = l;
              }
              r.paths.push(o), f.hasZ !== void 0 && (r.hasZ = f.hasZ), f.hasM !== void 0 && (r.hasM = f.hasM);
            }
            return r;
          }
          if (f.rings !== void 0) {
            for (r = { rings: [] }, h = 0; h < f.rings.length; h++) {
              s = f.rings[h], o = [];
              var p = v.br(s);
              for (a = 0; a < s.length; a++) u = s[a].slice(0), o.push(u), c = t * (s[a][0] - n.x) - i * (s[a][1] - n.y) + n.x, l = i * (s[a][0] - n.x) + t * (s[a][1] - n.y) + n.y, u[0] = c, u[1] = l;
              v.br(o) !== p && o.reverse(), r.rings.push(o), f.hasZ !== void 0 && (r.hasZ = f.hasZ), f.hasM !== void 0 && (r.hasM = f.hasM);
            }
            return r;
          }
          if (f.x !== void 0) return r = { x: t * (f.x - n.x) - i * (f.y - n.y) + n.x, y: i * (f.x - n.x) + t * (f.y - n.y) + n.y }, f.z !== void 0 && (r.z = f.z), f.m !== void 0 && (r.m = f.m), f.hasZ !== void 0 && (r.hasZ = f.hasZ), f.hasM !== void 0 && (r.hasM = f.hasM), r;
          if (f.points !== void 0) {
            for (r = { points: [] }, h = f.points, a = 0; a < h.length; a++) (s = h[a].slice(0))[0] = t * (h[a][0] - n.x) - i * (h[a][1] - n.y) + n.x, s[1] = i * (h[a][0] - n.x) + t * (h[a][1] - n.y) + n.y, r.points.push(s);
            return f.hasZ !== void 0 && (r.hasZ = f.hasZ), f.hasM !== void 0 && (r.hasM = f.hasM), r;
          }
          return null;
        }, v.JQ = function(f, r) {
          if (f.paths !== void 0) {
            for (var n = { paths: [] }, t = 0; t < f.paths.length; t++) {
              for (var i = f.paths[t], h = [], s = 0; s < i.length; s++) {
                var o = i[s].slice(0);
                h.push(o);
                var a = r.x - i[s][0];
                o[0] = i[s][0] + 2 * a;
              }
              n.paths.push(h);
            }
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          if (f.rings !== void 0) {
            for (n = { rings: [] }, t = 0; t < f.rings.length; t++) {
              i = f.rings[t];
              var u = v.br(i);
              for (h = [], s = 0; s < i.length; s++) o = i[s].slice(0), h.push(o), a = r.x - i[s][0], o[0] = i[s][0] + 2 * a;
              v.br(h) !== u && h.reverse(), n.rings.push(h);
            }
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          if (f.x !== void 0) return a = r.x - f.x, n = { x: f.x + 2 * a, y: f.y }, f.z !== void 0 && (n.z = f.z), f.m !== void 0 && (n.m = f.m), f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          if (f.points !== void 0) {
            for (n = { points: [] }, t = f.points, s = 0; s < t.length; s++) i = t[s].slice(0), a = r.x - i[0], i[0] += 2 * a, n.points.push(i);
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          return f.xmin !== void 0 ? (n = { v: f.xmin, G: f.ymin, C: f.xmax, H: f.ymax }, f.zmin !== void 0 && (n.zmin = f.zmin, n.zmax = f.zmax), f.mmin !== void 0 && (n.mmin = f.mmin, n.mmax = f.mmax), a = r.x - f.xmin, n.xmax = f.xmin + 2 * a, a = r.x - f.xmax, n.xmin = f.xmax + 2 * a, f.zmin !== void 0 && (n.zmin = f.zmin), f.zmax !== void 0 && (n.zmax = f.zmax), f.mmin !== void 0 && (n.mmin = f.mmin), f.mmax !== void 0 && (n.mmax = f.mmax), f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n) : null;
        }, v.KQ = function(f, r) {
          if (f.paths !== void 0) {
            for (var n = { paths: [] }, t = 0; t < f.paths.length; t++) {
              for (var i = f.paths[t], h = [], s = 0; s < i.length; s++) {
                var o = i[s].slice(0);
                h.push(o);
                var a = r.y - i[s][1];
                o[1] = i[s][1] + 2 * a;
              }
              n.paths.push(h);
            }
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          if (f.rings !== void 0) {
            for (n = { rings: [] }, t = 0; t < f.rings.length; t++) {
              i = f.rings[t];
              var u = v.br(i);
              for (h = [], s = 0; s < i.length; s++) o = i[s].slice(0), h.push(o), a = r.y - i[s][1], o[1] = i[s][1] + 2 * a;
              v.br(h) !== u && h.reverse(), n.rings.push(h);
            }
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          if (f.x !== void 0) return a = r.y - f.y, n = { y: f.y + 2 * a, x: f.x }, f.z !== void 0 && (n.z = f.z), f.m !== void 0 && (n.m = f.m), f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          if (f.points !== void 0) {
            for (n = { points: [] }, t = f.points, s = 0; s < t.length; s++) i = t[s].slice(0), a = r.y - i[1], i[1] += 2 * a, n.points.push(i);
            return f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n;
          }
          return f.xmin !== void 0 ? (n = { v: f.xmin, G: f.ymin, C: f.xmax, H: f.ymax }, f.zmin !== void 0 && (n.zmin = f.zmin, n.zmax = f.zmax), f.mmin !== void 0 && (n.mmin = f.mmin, n.mmax = f.mmax), a = r.y - f.ymin, n.ymax = f.ymin + 2 * a, a = r.y - f.ymax, n.ymin = f.ymax + 2 * a, f.zmin !== void 0 && (n.zmin = f.zmin), f.zmax !== void 0 && (n.zmax = f.zmax), f.mmin !== void 0 && (n.mmin = f.mmin), f.mmax !== void 0 && (n.mmax = f.mmax), f.hasZ !== void 0 && (n.hasZ = f.hasZ), f.hasM !== void 0 && (n.hasM = f.hasM), n) : null;
        }, v;
      }();
    }(k || (k = {})), function(e) {
      e.ZK = function() {
        function v() {
        }
        return v.Ig = function(f, r) {
          switch (r == null && (r = e.ee.og()), f) {
            case 33:
              return new e.Sa(r);
            case 322:
              return new e.yb(r);
            case 197:
              return new e.Fh(r);
            case 550:
              return new e.de(r);
            case 1607:
              return new e.Ta(r);
            case 1736:
              return new e.Da(r);
            default:
              throw e.i.fa("invalid argument.");
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n) {
          this.Te = e.ia.qf(r, -1), this.ua = new e.au(), this.wl = n;
        }
        return f.prototype.AW = function(r) {
          this.ua.At(Math.min(this.Te.size, r)), this.ua.fn(r);
        }, f.prototype.addElement = function(r, n) {
          if (n === void 0) return this.eN(r);
          n = e.O.truncate(n % this.Te.size);
          var t = this.Te.get(n);
          return t == -1 && (t = this.ua.Ph(), this.Te.set(n, t)), this.ua.addElement(t, r);
        }, f.prototype.eN = function(r) {
          var n = this.wl.jz(r);
          n = e.O.truncate(n % this.Te.size);
          var t = this.Te.get(n);
          return t == -1 && (t = this.ua.Ph(), this.Te.set(n, t)), this.ua.addElement(t, r);
        }, f.prototype.jd = function(r, n) {
          if (n === void 0) this.KP(r);
          else {
            n = e.O.truncate(n % this.Te.size);
            var t = this.Te.get(n);
            if (t == -1) throw e.i.N();
            for (var i = this.ua.rc(t), h = -1; i != -1; ) {
              var s = this.ua.lb(i);
              this.ua.ja(i) == r ? (this.ua.jd(t, h, i), this.ua.rc(t) == -1 && (this.ua.bh(t), this.Te.set(n, -1))) : h = i, i = s;
            }
          }
        }, f.prototype.KP = function(r) {
          var n = this.wl.jz(r);
          n = e.O.truncate(n % this.Te.size);
          var t = this.Te.get(n);
          if (t == -1) throw e.i.N();
          for (var i = this.ua.rc(t), h = -1; i != -1; ) {
            var s = this.ua.lb(i);
            this.ua.ja(i) == r ? (this.ua.jd(t, h, i), this.ua.rc(t) == -1 && (this.ua.bh(t), this.Te.set(n, -1))) : h = i, i = s;
          }
        }, f.prototype.rR = function(r) {
          return r = e.O.truncate(r % this.Te.size), (r = this.Te.get(r)) == -1 ? -1 : this.ua.rc(r);
        }, f.prototype.ER = function(r) {
          return this.ua.lb(r);
        }, f.prototype.vd = function(r) {
          var n = this.wl.jz(this.ja(r));
          n = e.O.truncate(n % this.Te.size);
          var t = this.Te.get(n);
          if (t == -1) throw e.i.N();
          for (var i = this.ua.rc(t), h = -1; i != -1; ) {
            if (i == r) return this.ua.jd(t, h, i), void (this.ua.rc(t) == -1 && (this.ua.bh(t), this.Te.set(n, -1)));
            h = i, i = this.ua.lb(i);
          }
          throw e.i.N();
        }, f.prototype.ja = function(r) {
          return this.ua.ja(r);
        }, f.prototype.clear = function() {
          this.Te = e.ia.qf(this.Te.size, -1), this.ua.clear();
        }, f.prototype.size = function() {
          return this.ua.TF();
        }, f;
      }();
      e.dL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.Li = new e.$c(3), this.ua = new e.$c(6), this.sT = !1, this.je = -1;
        }
        return f.prototype.fl = function(r) {
          this.Li.jd(r);
        }, f.prototype.Pw = function() {
          return this.Li.Ce();
        }, f.prototype.bv = function(r) {
          this.ua.jd(r);
        }, f.prototype.$A = function() {
          return this.ua.Ce();
        }, f.prototype.WB = function(r, n) {
          this.Li.S(r, 1, n);
        }, f.prototype.ex = function(r, n) {
          this.Li.S(r, 2, n);
        }, f.prototype.gX = function(r, n) {
          this.Li.S(r, 3, n);
        }, f.prototype.UB = function(r, n) {
          this.ua.S(r, 4, n);
        }, f.prototype.jX = function(r, n) {
          this.ua.S(r, 3, n);
        }, f.prototype.TJ = function(r, n) {
          this.ua.S(r, 2, n);
        }, f.prototype.Ph = function(r) {
          var n = this.$A();
          return this.ua.S(n, 3, this.je), this.ua.S(n, 4, 0), this.ua.S(n, 5, r), this.je != -1 && this.TJ(this.je, n), this.je = n;
        }, f.prototype.bh = function(r) {
          this.LE(r);
          var n = this.ua.T(r, 2), t = this.ua.T(r, 3);
          return n != -1 ? this.jX(n, t) : this.je = t, t != -1 && this.TJ(t, n), this.bv(r), t;
        }, f.prototype.At = function(r) {
          this.ua.De(r);
        }, f.prototype.PF = function(r) {
          return this.ua.T(r, 5);
        }, f.prototype.fX = function(r, n) {
          this.ua.S(r, 5, n);
        }, f.prototype.addElement = function(r, n) {
          return this.tS(r, n);
        }, f.prototype.tS = function(r, n) {
          var t = this.Pw();
          this.ex(t, -1), this.ua.T(r, 0) == -1 && this.ua.S(r, 0, t);
          var i = this.ua.T(r, 1);
          return this.WB(t, i), i != -1 && this.ex(i, t), this.ua.S(r, 1, t), this.setData(t, n), this.UB(r, this.bs(r) + 1), this.sT && this.gX(t, r), t;
        }, f.prototype.jd = function(r, n) {
          var t = this.we(n), i = this.lb(n);
          return t != -1 ? this.ex(t, i) : this.ua.S(r, 0, i), i != -1 ? this.WB(i, t) : this.ua.S(r, 1, t), this.fl(n), this.UB(r, this.bs(r) - 1), i;
        }, f.prototype.fn = function(r) {
          this.Li.De(r);
        }, f.prototype.getData = function(r) {
          return this.Li.T(r, 0);
        }, f.prototype.setData = function(r, n) {
          this.Li.S(r, 0, n);
        }, f.prototype.lb = function(r) {
          return this.Li.T(r, 2);
        }, f.prototype.we = function(r) {
          return this.Li.T(r, 1);
        }, f.prototype.rc = function(r) {
          return this.ua.T(r, 0);
        }, f.prototype.Fc = function(r) {
          return this.ua.T(r, 1);
        }, f.prototype.clear = function() {
          for (var r = this.je; r != -1; ) r = this.bh(r);
        }, f.prototype.LE = function(r) {
          for (var n = this.Fc(r); n != -1; ) {
            var t = n;
            n = this.we(t), this.fl(t);
          }
          this.ua.S(r, 0, -1), this.ua.S(r, 1, -1), this.UB(r, 0);
        }, f.prototype.B = function() {
          return this.Li.size == 0;
        }, f.prototype.TF = function() {
          return this.Li.size;
        }, f.prototype.bs = function(r) {
          return this.ua.T(r, 4);
        }, f.prototype.qz = function(r) {
          return this.ua.T(r, 3);
        }, f;
      }();
      e.jp = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          r === void 0 ? (this.ug = new e.$c(2), this.ua = new e.$c(4), this.je = -1, this.Qv = !0) : (this.ug = new e.$c(2), this.ua = new e.$c(r ? 4 : 2), this.je = -1, this.Qv = r);
        }
        return f.prototype.fl = function(r) {
          this.ug.jd(r);
        }, f.prototype.Pw = function() {
          return this.ug.Ce();
        }, f.prototype.bv = function(r) {
          this.ua.jd(r);
        }, f.prototype.$A = function() {
          return this.ua.Ce();
        }, f.prototype.Ph = function() {
          var r = this.$A();
          return this.Qv && (this.ua.S(r, 3, this.je), this.je != -1 && this.ua.S(this.je, 2, r), this.je = r), r;
        }, f.prototype.bh = function(r) {
          for (var n = this.rc(r); n != -1; ) {
            var t = n;
            n = this.lb(n), this.fl(t);
          }
          this.Qv && (n = this.ua.T(r, 2), t = this.ua.T(r, 3), n != -1 ? this.ua.S(n, 3, t) : this.je = t, t != -1 && this.ua.S(t, 2, n)), this.bv(r);
        }, f.prototype.At = function(r) {
          this.ua.De(r);
        }, f.prototype.addElement = function(r, n) {
          var t = this.ua.T(r, 1), i = this.Pw();
          return t != -1 ? this.ug.S(t, 1, i) : this.ua.S(r, 0, i), this.ua.S(r, 1, i), this.ug.S(i, 0, n), i;
        }, f.prototype.fn = function(r) {
          this.ug.De(r);
        }, f.prototype.jd = function(r, n, t) {
          n != -1 ? (this.ug.S(n, 1, this.ug.T(t, 1)), this.ua.T(r, 1) == t && this.ua.S(r, 1, n)) : (this.ua.S(r, 0, this.ug.T(t, 1)), this.ua.T(r, 1) == t && this.ua.S(r, 1, -1)), this.fl(t);
        }, f.prototype.Hy = function(r, n) {
          var t = this.ua.T(r, 1), i = this.ua.T(n, 0);
          i != -1 && (t != -1 ? this.ug.S(t, 1, i) : this.ua.S(r, 0, i), this.ua.S(r, 1, this.ua.T(n, 1))), this.Qv && (r = this.ua.T(n, 2), t = this.ua.T(n, 3), r != -1 ? this.ua.S(r, 3, t) : this.je = t, t != -1 && this.ua.S(t, 2, r)), this.bv(n);
        }, f.prototype.ja = function(r) {
          return this.ug.T(r, 0);
        }, f.prototype.Sj = function(r, n) {
          this.ug.S(r, 0, n);
        }, f.prototype.lb = function(r) {
          return this.ug.T(r, 1);
        }, f.prototype.rc = function(r) {
          return this.ua.T(r, 0);
        }, f.prototype.Jn = function(r) {
          return this.ja(this.rc(r));
        }, f.prototype.clear = function() {
          this.ug.mj(!0), this.ua.mj(!0), this.je = -1;
        }, f.prototype.B = function() {
          return this.ug.size == 0;
        }, f.prototype.TF = function() {
          return this.ug.size;
        }, f.prototype.qz = function(r) {
          return this.ua.T(r, 3);
        }, f;
      }();
      e.au = v;
    }(k || (k = {})), function(e) {
      e.ta = function() {
        function v() {
        }
        return v.Wd = function(f, r, n) {
          return r = r.xr(), f = f != null && f.Xd !== void 0 ? f.Xd(0) : 0, n && (r *= 4, f *= 1.1), Math.max(f, r);
        }, v.Er = function(f) {
          return 2 * Math.sqrt(2) * f;
        }, v.rN = function(f) {
          return Math.sqrt(2) * f;
        }, v.kj = function(f, r, n) {
          var t = new e.l();
          return r.A(t), v.Wd(f, t, n);
        }, v.wE = function(f, r, n) {
          return r = r.Tg(1, 0).xr(), f = f != null ? f.Xd(1) : 0, n && (r *= 4, f *= 1.1), Math.max(f, r);
        }, v.mv = function(f, r) {
          var n = new e.l();
          return f.xc(n), f = new e.l(), r.xc(f), n.Zb(f), n;
        }, v.YN = function(f) {
          var r = new e.l();
          if (f.xc(r), r.B()) return null;
          var n = new e.du(r, 8), t = -1, i = new e.l(), h = !1;
          do
            for (var s = 0, o = f.da(); s < o; s++) {
              if (f.Rj(s, i), (t = n.Jz(s, i, t)) == -1) {
                if (h) throw e.i.fa("internal error");
                f.yp(r, !1), h = !0, n.reset(r, 8);
                break;
              }
              h = !1;
            }
          while (h);
          return n;
        }, v.nE = function(f) {
          var r = new e.l();
          f.xc(r);
          for (var n = new e.du(r, 8), t = -1, i = f.Ga(), h = new e.l(), s = !1; i.$a(); ) for (; i.Ha(); ) {
            var o = i.ha(), a = i.wb();
            if (o.A(h), (t = n.Jz(a, h, t)) == -1) {
              if (s) throw e.i.Qa();
              f.yp(r, !1), s = !0, n.reset(r, 8), i.Zi();
              break;
            }
          }
          return n;
        }, v.jj = function(f, r) {
          var n = new e.l();
          f.xc(n);
          for (var t = new e.du(n, 8), i = -1, h = new e.l(), s = f.Ga(), o = !1; s.$a(); ) for (; s.Ha(); ) {
            var a = s.ha(), u = s.wb();
            if (a.A(h), h.isIntersecting(r) && (i = t.Jz(u, h, i)) == -1) {
              if (o) throw e.i.fa("internal error.");
              f.yp(n, !1), o = !0, t.reset(n, 8), s.Zi();
              break;
            }
          }
          return t;
        }, v.oE = function(f, r) {
          for (var n = new e.du(r, 8), t = new e.h(), i = !1, h = new e.l(), s = 0; s < f.I(); s++) if (f.D(s, t), r.contains(t) && (h.K(t), n.vj(s, h) == -1)) {
            if (i) throw e.i.Qa();
            i = !0, s = new e.l(), f.yp(s, !1), n.reset(s, 8), s = -1;
          }
          return n;
        }, v.lR = function(f, r, n) {
          var t = new e.l(), i = new e.l();
          f.xc(t), r.xc(i), t.W(n, n), i.W(n, n);
          var h = new e.l();
          h.K(t), h.Ea(i), f = f.Ga(), r = r.Ga();
          var s = new e.xC();
          s.aC(n);
          var o = !1;
          for (s.pK(); f.$a(); ) for (; f.Ha(); ) f.ha().A(t), t.isIntersecting(h) && (o = !0, (n = new e.l()).K(t), s.JD(f.wb(), n));
          if (s.iF(), !o) return null;
          for (t = !1, s.oK(); r.$a(); ) for (; r.Ha(); ) r.ha().A(i), i.isIntersecting(h) && (t = !0, (n = new e.l()).K(i), s.ED(r.wb(), n));
          return s.hF(), t ? s : null;
        }, v.mR = function(f, r, n, t, i) {
          var h = f.getType(), s = r.getType(), o = new e.l(), a = new e.l();
          f.xc(o), r.xc(a), o.W(n, n), a.W(n, n);
          var u = new e.l();
          u.K(o), u.Ea(a);
          var c = new e.xC();
          c.aC(n);
          var l = !1;
          c.pK();
          var p = 0;
          for (n = f.da(); p < n; p++) t && h == 1736 && !f.Ev(p) || (f.Rj(p, o), o.isIntersecting(u) && (l = !0, c.JD(p, o)));
          if (c.iF(), !l) return null;
          for (f = !1, c.oK(), t = 0, n = r.da(); t < n; t++) i && s == 1736 && !r.Ev(t) || (r.Rj(t, a), a.isIntersecting(u) && (f = !0, c.ED(t, a)));
          return c.hF(), f ? c : null;
        }, v.Ru = function(f, r, n) {
          if (f != r) for (var t = 0; t < n; t++) f[t] == null ? f[t] = e.h.al(r[t]) : f[t].L(r[t]);
        }, v.Jy = function(f, r, n, t) {
          var i = 0;
          for (t += 0; i < t; n++, i++) f[i] == null && (f[i] = [0, 0]), f[i][0] = r[n].x, f[i][1] = r[n].y;
        }, v.Iy = function(f, r, n, t) {
          var i = r, h = 0;
          for (r = t + r; i < r; h++, i++) f[i] == null ? f[i] = e.h.construct(n[h][0], n[h][1]) : f[i].ma(n[h][0], n[h][1]);
        }, v.kP = function(f, r, n) {
          if (f != r) for (var t = 0; t < n; t++) f[t] == null ? f[t] = new e.Sa(r[t]) : r[t].copyTo(f[t]);
        }, v.vE = function(f, r, n, t) {
          var i = 0;
          return f != null && (i = f.Xd(0), t && !n || f == null || (i += 1.01 * f.vz(0))), n && (r *= 4, i *= 1.01), Math.max(i, r);
        }, v.ty = function(f, r, n) {
          return v.vE(f, r.xr(), n, !1);
        }, v.gO = function(f, r) {
          var n = new e.l();
          return r.A(n), v.ty(f, n, !0);
        }, v.uy = function(f, r) {
          return v.vE(f, r.xr(), !1, !0);
        }, v.Hu = function(f, r) {
          var n = new e.l();
          return r.A(n), v.uy(f, n);
        }, v.AG = function(f, r, n, t) {
          t *= t;
          var i = new e.h();
          if (i.uc(f, r), (f = new e.h()).uc(n, r), r = i.Sk(), n = f.Sk(), r <= t && n <= t) return !0;
          var h = e.lc.ox(i.wi(f));
          return (h <= t * r || h <= t * n) && 0 <= i.Qh(f);
        }, v.dK = function(f, r, n, t) {
          for (var i = 0; i < r; i++) {
            var h = f[i].y, s = e.O.Rk(h, n, t);
            s != h && (f[i].y = s);
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v, f, r = function() {
        function h(s) {
          this.Ya = s;
        }
        return h.prototype.compare = function(s, o, a) {
          s = s.ja(a), a = this.Ya.nk(o);
          var u = this.Ya.nk(s);
          return a < u ? -1 : a == u ? i.gq(o) && i.Gv(s) ? -1 : i.gq(s) && i.Gv(o) ? 1 : 0 : 1;
        }, h;
      }(), n = function() {
        function h(s) {
          this.Ya = s;
        }
        return h.prototype.nr = function(s, o, a) {
          this.Ya.GX(a, s, o);
        }, h.prototype.$p = function(s) {
          return this.Ya.nk(s);
        }, h;
      }();
      (f = v || (v = {}))[f.initialize = 0] = "initialize", f[f.pIn = 1] = "pIn", f[f.pL = 2] = "pL", f[f.pR = 3] = "pR", f[f.pT = 4] = "pT", f[f.right = 5] = "right", f[f.left = 6] = "left", f[f.all = 7] = "all";
      var t = function() {
        function h() {
          this.Ya = null, this.Qi = new e.Nc(), this.hi = new e.ia(0), this.sg = [0, 0];
        }
        return h.prototype.Xi = function(s, o) {
          this.Qi.oa = s.oa - o, this.Qi.va = s.va + o, this.hi.resize(0), this.he = 0, this.sg[0] = 0;
        }, h.prototype.EB = function(s, o, a) {
          if (s > o) throw e.i.N();
          this.Qi.oa = s - a, this.Qi.va = o + a, this.hi.resize(0), this.he = 0, this.sg[0] = 0;
        }, h.prototype.Uo = function(s, o) {
          this.Qi.oa = s - o, this.Qi.va = s + o, this.hi.resize(0), this.he = 0, this.sg[0] = 0;
        }, h.prototype.next = function() {
          if (!this.Ya.lq) throw e.i.Hb();
          if (0 > this.he) return -1;
          for (var s = !0; s; ) switch (this.sg[this.he]) {
            case 1:
              s = this.FU();
              break;
            case 2:
              s = this.GU();
              break;
            case 3:
              s = this.HU();
              break;
            case 4:
              s = this.IU();
              break;
            case 5:
              s = this.GW();
              break;
            case 6:
              s = this.kT();
              break;
            case 7:
              s = this.tN();
              break;
            case 0:
              s = this.Gz();
              break;
            default:
              throw e.i.Qa();
          }
          return this.Og != -1 ? this.Mp() >> 1 : -1;
        }, h.construct = function(s) {
          var o = new h();
          return o.Ya = s, o.hi.Jb(20), o.he = -1, o;
        }, h.prototype.Gz = function() {
          return this.Og = this.vH = this.Mi = this.Lc = -1, this.Ya.me != null && 0 < this.Ya.me.size ? (this.sg[0] = 1, this.Mi = this.Ya.kf, !0) : (this.he = -1, !1);
        }, h.prototype.FU = function() {
          if (this.Lc = this.Mi, this.Lc == -1) return this.Og = this.he = -1, !1;
          var s = this.Ya.Np(this.Lc);
          return this.Qi.va < s ? (s = this.Ya.mk(this.Lc), this.Mi = this.Ya.qj(this.Lc), s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 6), !0) : s < this.Qi.oa ? (s = this.Ya.mk(this.Lc), this.Mi = this.Ya.lk(this.Lc), s != -1 && (this.ei = this.Ya.Zr(s), this.sg[++this.he] = 5), !0) : (this.sg[this.he] = 2, this.vH = this.Lc, s = this.Ya.mk(this.Lc), this.Mi = this.Ya.qj(this.Lc), s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 7), !0);
        }, h.prototype.GU = function() {
          if (this.Lc = this.Mi, this.Lc == -1) return this.sg[this.he] = 3, this.Mi = this.Ya.lk(this.vH), !0;
          if (this.Ya.Np(this.Lc) < this.Qi.oa) {
            var s = this.Ya.mk(this.Lc);
            return this.Mi = this.Ya.lk(this.Lc), s != -1 && (this.ei = this.Ya.Zr(s), this.sg[++this.he] = 5), !0;
          }
          return s = this.Ya.mk(this.Lc), this.Mi = this.Ya.qj(this.Lc), s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 7), (s = this.Ya.lk(this.Lc)) != -1 && this.hi.add(s), !0;
        }, h.prototype.HU = function() {
          if (this.Lc = this.Mi, this.Lc == -1) return this.sg[this.he] = 4, !0;
          if (this.Qi.va < this.Ya.Np(this.Lc)) {
            var s = this.Ya.mk(this.Lc);
            return this.Mi = this.Ya.qj(this.Lc), s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 6), !0;
          }
          return s = this.Ya.mk(this.Lc), this.Mi = this.Ya.lk(this.Lc), s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 7), (s = this.Ya.qj(this.Lc)) != -1 && this.hi.add(s), !0;
        }, h.prototype.IU = function() {
          if (this.hi.size == 0) return this.Og = this.he = -1, !1;
          this.Lc = this.hi.get(this.hi.size - 1), this.hi.resize(this.hi.size - 1);
          var s = this.Ya.mk(this.Lc);
          return s != -1 && (this.ei = this.Ya.kl(s), this.sg[++this.he] = 7), this.Ya.qj(this.Lc) != -1 && this.hi.add(this.Ya.qj(this.Lc)), this.Ya.lk(this.Lc) != -1 && this.hi.add(this.Ya.lk(this.Lc)), !0;
        }, h.prototype.kT = function() {
          return this.Og = this.ei, this.Og != -1 && i.gq(this.Mp()) && this.Ya.nk(this.Mp()) <= this.Qi.va ? (this.ei = this.SF(), !1) : (this.he--, !0);
        }, h.prototype.GW = function() {
          return this.Og = this.ei, this.Og != -1 && i.Gv(this.Mp()) && this.Ya.nk(this.Mp()) >= this.Qi.oa ? (this.ei = this.QR(), !1) : (this.he--, !0);
        }, h.prototype.tN = function() {
          return this.Og = this.ei, this.Og != -1 && i.gq(this.Mp()) ? (this.ei = this.SF(), !1) : (this.he--, !0);
        }, h.prototype.SF = function() {
          return this.Ya.Sf ? this.Ya.$f.lb(this.Og) : this.Ya.Ti.lb(this.Og);
        }, h.prototype.QR = function() {
          return this.Ya.Sf ? this.Ya.$f.we(this.Og) : this.Ya.Ti.we(this.Og);
        }, h.prototype.Mp = function() {
          return this.Ya.Sf ? this.Ya.$f.ja(this.Og) : this.Ya.Ti.getData(this.Og);
        }, h;
      }();
      e.EY = t;
      var i = function() {
        function h(s) {
          this.Am = this.$h = this.$f = this.Ti = this.Km = this.Ej = this.me = this.Fj = null, this.Sf = s, this.lq = this.Sv = !1;
        }
        return h.prototype.kr = function() {
          this.Nk(!0);
        }, h.prototype.Br = function(s, o) {
          if (!this.Sv) throw e.i.Hb();
          this.Fj.push(new e.Nc(s, o));
        }, h.prototype.Fp = function() {
          if (!this.Sv) throw e.i.fa("invalid call");
          this.Sv = !1, this.lq = !0, this.Sf || (this.vS(), this.Zv = this.Fj.length);
        }, h.prototype.vj = function(s) {
          if (!this.Sf || !this.lq) throw e.i.N("invalid call");
          if (this.kf == -1) {
            var o = this.Fj.length;
            if (this.iA) {
              var a = new e.ia(0);
              a.Jb(2 * o), this.bJ(a), this.$h.Jb(2 * o), this.$h.resize(0), this.aJ(a), this.Km.resize(o, -1), this.Km.Wj(-1, 0, o), this.iA = !1;
            } else this.Km.Wj(-1, 0, o);
            this.kf = this.Tu();
          }
          o = this.pG(s << 1, this.kf), a = this.$f.addElement(1 + (s << 1), this.xz(o)), this.VJ(o, a), this.Km.set(s, o), this.Zv++;
        }, h.prototype.remove = function(s) {
          if (!this.Sf || !this.lq) throw e.i.fa("invalid call");
          var o = this.Km.get(s);
          if (o == -1) throw e.i.N("the interval does not exist in the interval tree");
          this.Km.set(s, -1), this.Zv--;
          var a = this.xz(o), u = this.$f.ZR(a);
          this.$f.vd(this.wR(o), a), this.$f.vd(this.TR(o), a), (s = this.$f.size(a)) == 0 && (this.$f.MP(a), this.ZJ(u, -1)), this.Ej.jd(o), a = this.UF(u);
          var c = this.qj(u), l = this.lk(u);
          for (o = 0; !(0 < s || u == this.kf || c != -1 && l != -1); ) u == this.qj(a) ? c != -1 ? (this.Ok(a, c), this.Uj(c, a), this.Ok(u, -1)) : l != -1 ? (this.Ok(a, l), this.Uj(l, a), this.Qk(u, -1)) : this.Ok(a, -1) : c != -1 ? (this.Qk(a, c), this.Uj(c, a), this.Ok(u, -1)) : l != -1 ? (this.Qk(a, l), this.Uj(l, a), this.Qk(u, -1)) : this.Qk(a, -1), this.Uj(u, -1), o++, u = a, s = (a = this.mk(u)) != -1 ? this.$f.size(a) : 0, c = this.qj(u), l = this.lk(u), a = this.UF(u);
        }, h.prototype.reset = function() {
          if (!this.Sf || !this.lq) throw e.i.N("invalid call");
          this.Nk(!1);
        }, h.prototype.size = function() {
          return this.Zv;
        }, h.prototype.getIterator = function() {
          return t.construct(this);
        }, h.prototype.bJ = function(s) {
          for (var o = this.Fj.length, a = 0; a < 2 * o; a++) s.add(a);
          this.HX(s, 2 * o);
        }, h.prototype.aJ = function(s) {
          for (var o = NaN, a = 0; a < s.size; a++) {
            var u = s.get(a), c = this.nk(u);
            c != o && (this.$h.add(u), o = c);
          }
        }, h.prototype.vS = function() {
          var s = this.Fj.length, o = new e.ia(0);
          o.Jb(2 * s), this.bJ(o), this.$h.Jb(2 * s), this.$h.resize(0), this.aJ(o), this.Ej.De(s), this.Ti.fn(2 * s);
          var a = e.Yc.Oh(s);
          for (a.Wj(-1, 0, s), this.kf = this.Tu(), s = 0; s < o.size; s++) {
            var u = o.get(s), c = a.get(u >> 1);
            c != -1 ? this.VJ(c, this.Ti.addElement(this.xz(c), u)) : (c = this.pG(u, this.kf), a.set(u >> 1, c));
          }
        }, h.prototype.pG = function(s, o) {
          var a = o, u = o, c = -1, l = 0, p = this.$h.size - 1, y = 0, d = s >> 1, g = NaN, b = NaN, x = !0, m = this.DR(d);
          for (d = this.AR(d); x; ) {
            l < p ? (y = l + e.O.truncate((p - l) / 2), this.gz(a) == -1 && this.FJ(a, this.$h.get(y), this.$h.get(y + 1))) : this.gz(a) == -1 && this.FJ(a, this.$h.get(l), this.$h.get(l));
            var w = this.Np(a);
            if (d < w) o != -1 && (o == a ? (u = a, g = w, b = (o = this.qj(a)) != -1 ? this.Np(o) : NaN) : b > w && (w < g ? this.Ok(u, a) : this.Qk(u, a), this.Qk(a, o), this.Sf && (this.Uj(a, u), this.Uj(o, a)), u = a, g = w, o = -1, b = NaN)), (p = this.xR(a)) == -1 && (p = this.Tu(), this.dX(a, p)), a = p, p = y;
            else if (m > w) o != -1 && (o == a ? (u = a, g = w, b = (o = this.lk(a)) != -1 ? this.Np(o) : NaN) : b < w && (w < g ? this.Ok(u, a) : this.Qk(u, a), this.Ok(a, o), this.Sf && (this.Uj(a, u), this.Uj(o, a)), u = a, g = w, o = -1, b = NaN)), (l = this.UR(a)) == -1 && (l = this.Tu(), this.oX(a, l)), a = l, l = y + 1;
            else {
              (x = this.mk(a)) == -1 && (x = this.zP(a), this.ZJ(a, x));
              var j = this.fN(x, s);
              c = this.xP(), this.qX(c, x), this.cX(c, j), a != o && (w < g ? this.Ok(u, a) : this.Qk(u, a), this.Sf && this.Uj(a, u), o != -1 && (b < w ? this.Ok(a, o) : this.Qk(a, o), this.Sf && this.Uj(o, a))), x = !1;
            }
          }
          return c;
        }, h.prototype.Tu = function() {
          return this.me.Ce();
        }, h.prototype.zP = function(s) {
          return this.Sf ? this.$f.Pr(s) : this.Ti.Ph(s);
        }, h.prototype.xP = function() {
          return this.Ej.Ce();
        }, h.prototype.Nk = function(s) {
          s ? (this.Sv = this.iA = !0, this.lq = !1, this.$h == null ? this.$h = e.Yc.Oh(0) : this.$h.resize(0), this.Fj == null ? this.Fj = [] : this.Fj.length = 0) : this.iA = !1, this.Sf ? this.Km == null ? (this.Km = e.Yc.Oh(0), this.$f = new e.Yj(), this.$f.Vo(new r(this))) : this.$f.clear() : this.Ti == null ? this.Ti = new e.jp() : this.Ti.clear(), this.me == null ? (this.Ej = new e.$c(3), this.me = new e.$c(this.Sf ? 8 : 7)) : (this.Ej.mj(!1), this.me.mj(!1)), this.kf = -1, this.Zv = 0;
        }, h.prototype.FJ = function(s, o, a) {
          this.XW(s, o), this.YW(s, a);
        }, h.prototype.Np = function(s) {
          var o = this.gz(s);
          return o == -1 ? NaN : (o = this.nk(o)) == (s = this.nk(this.gR(s))) ? o : 0.5 * (o + s);
        }, h.prototype.XW = function(s, o) {
          this.me.S(s, 0, o);
        }, h.prototype.YW = function(s, o) {
          this.me.S(s, 1, o);
        }, h.prototype.dX = function(s, o) {
          this.me.S(s, 3, o);
        }, h.prototype.oX = function(s, o) {
          this.me.S(s, 4, o);
        }, h.prototype.ZJ = function(s, o) {
          this.me.S(s, 2, o);
        }, h.prototype.Ok = function(s, o) {
          this.me.S(s, 5, o);
        }, h.prototype.Qk = function(s, o) {
          this.me.S(s, 6, o);
        }, h.prototype.Uj = function(s, o) {
          this.me.S(s, 7, o);
        }, h.prototype.qX = function(s, o) {
          this.Ej.S(s, 0, o);
        }, h.prototype.fN = function(s, o) {
          return this.Sf ? this.$f.addElement(o, s) : this.Ti.addElement(s, o);
        }, h.prototype.cX = function(s, o) {
          this.Ej.S(s, 1, o);
        }, h.prototype.VJ = function(s, o) {
          this.Ej.S(s, 2, o);
        }, h.prototype.kl = function(s) {
          return this.Sf ? this.$f.rc(s) : this.Ti.rc(s);
        }, h.prototype.Zr = function(s) {
          return this.Sf ? this.$f.Fc(s) : this.Ti.Fc(s);
        }, h.gq = function(s) {
          return (1 & s) == 0;
        }, h.Gv = function(s) {
          return (1 & s) == 1;
        }, h.prototype.gz = function(s) {
          return this.me.T(s, 0);
        }, h.prototype.gR = function(s) {
          return this.me.T(s, 1);
        }, h.prototype.mk = function(s) {
          return this.me.T(s, 2);
        }, h.prototype.xR = function(s) {
          return this.me.T(s, 3);
        }, h.prototype.UR = function(s) {
          return this.me.T(s, 4);
        }, h.prototype.qj = function(s) {
          return this.me.T(s, 5);
        }, h.prototype.lk = function(s) {
          return this.me.T(s, 6);
        }, h.prototype.UF = function(s) {
          return this.me.T(s, 7);
        }, h.prototype.xz = function(s) {
          return this.Ej.T(s, 0);
        }, h.prototype.wR = function(s) {
          return this.Ej.T(s, 1);
        }, h.prototype.TR = function(s) {
          return this.Ej.T(s, 2);
        }, h.prototype.DR = function(s) {
          return this.Fj[s].oa;
        }, h.prototype.AR = function(s) {
          return this.Fj[s].va;
        }, h.prototype.HX = function(s, o) {
          this.Am == null && (this.Am = new e.Xt());
          var a = new n(this);
          this.Am.sort(s, 0, o, a);
        }, h.prototype.GX = function(s, o, a) {
          var u = this;
          s.Vd(o, a, function(c, l) {
            var p = u.nk(c), y = u.nk(l);
            return p < y || p == y && h.gq(c) && h.Gv(l) ? -1 : 1;
          });
        }, h.prototype.nk = function(s) {
          var o = this.Fj[s >> 1];
          return h.gq(s) ? o.oa : o.va;
        }, h;
      }();
      e.sr = i;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          if (r == null) throw e.i.fa("Invalid arguement");
          this.hf = r;
          var n = r.nR();
          n.hS() ? r.ef.IG() ? this.lo = e.si.PannableFold : this.lo = e.si.Clip : this.lo = e.si.DontClip, n.iS() ? r.Yf.IG() ? this.Qm = e.si.PannableFold : this.Qm = e.si.Clip : this.Qm = e.si.DontClip, this.Bm = n.Jr, this.mH = n.Vu, r = this.hf.sH, this.aH = r.hs(2147483648), this.Uv = r.hs(1073741824);
        }
        return f.zh = function(r, n, t) {
          return n.ww.zh(r, t);
        }, f.Rt = function(r, n, t, i) {
          return r.ww.Rt(n, t, i);
        }, f.Qt = function(r, n, t, i) {
          if (t = 0 > t ? n.length : t, (r = r.ww.Rt(n, t, i)) == t) return r;
          for (var h = n = 0; h < t; h++) {
            var s = i[h];
            s.isNaN() || (n < h && i[n].L(s), n++);
          }
          for (; n < t; n++) i[n].Rc();
          return r;
        }, f.transform = function(r, n, t, i, h) {
          if (r.isIdentity()) return e.ta.kP(i, n, t), t;
          for (var s = [], o = 0, a = 0; a < t; ) {
            for (var u = Math.min(s.length, t - a), c = a, l = 0; c < u; c++, l++) s[l] == null ? s[l] = n[c].D() : n[c].D(s[l]);
            var p = h ? f.Qt(r, s, u, s) : f.Rt(r, s, u, s);
            for (l = c = 0; c < p; c++, l++) i[a] == null && (i[a] = new e.Sa(n[a])), i[a].Cb(s[l]);
            a += u, o += p;
          }
          return o;
        }, f.prototype.Rt = function(r, n, t) {
          if (this.hf.isIdentity()) return r != t && e.ta.Ru(t, r, n), n;
          var i = this.hf.ef, h = this.hf.Yf, s = i.Sb(), o = h.Sb();
          if (s == 0 && s === o) {
            var a = i.Qp();
            return h = a / (h = h.Qp()), (a = new e.Dd()).setScale(h, h), a.eY(r, n, t), n;
          }
          if (a = e.O.Fu(Math.min(n, 64)), s == 3) {
            var u = i.Ji;
            s = (i = u.fk()).Sb(), t != r && e.ta.Ru(t, r, n), e.zb.$k(u, t, n, !0), u.Qt(e.bm.forward, t, n), e.zb.Zk(u, t, n, !0);
          }
          if (s == 3 || o === 3) throw e.i.fa("image: transform_in_place_");
          if (s == 2) this.lo == e.si.Clip ? (t != r && e.ta.Ru(t, r, n), r = i.ml(), e.zb.OS(r, i, t, n)) : (t != r && e.ta.Ru(t, r, n), i.Wc() && (s = i.Xd(0), u = i.Oe(), e.zb.EX(t, n, u, s), e.zb.qF(t, n, i, 0))), e.zb.IL(i, t, n, a);
          else for (s = i.Xd(0), u = i.Oe(), i = 0; i < n; i++) e.zb.FX(r[i], u, s, t[i]);
          for (e.zb.GL(this.hf, t, n, a), r = 0, (o = o == 2) ? r = h.zi() : isNaN(this.Bm) || (r = this.Bm), o && this.Qm != e.si.Clip || e.zb.qF(t, n, h.sc(), r), o && (e.zb.yG(t, n, h, this.Qm), e.zb.HL(h, t, n, a)), r = n, i = 0; i < n; ++i) t[i].isNaN() && r--;
          return r;
        }, f.prototype.zh = function(r, n) {
          if (this.hf.isIdentity() || r.B()) return r;
          if (r.getType() == 33) return this.XI(r);
          var t = this.hf.ef, i = this.hf.Yf, h = t.Sb(), s = i.Sb();
          if (h == 0 && h == s) return n = t.Qp(), n /= i = i.Qp(), (i = new e.Dd()).setScale(n, n), (r = e.aa.jg(r)).Oc(i), r;
          switch (r.getType()) {
            case 1607:
            case 1736:
              r = this.VI(r, n);
              break;
            case 550:
              r = this.fW(r, n);
              break;
            case 197:
              r = this.eW(r, n);
              break;
            default:
              throw e.i.fa("");
          }
          return r;
        }, f.prototype.XI = function(r) {
          var n = r.D(), t = [];
          return t[0] = n, this.Rt(t, 1, t), (r = new e.Sa(r)).Cb(t[0]), r;
        }, f.prototype.VI = function(r, n) {
          if (r.tm()) throw e.i.fa("curves not supported");
          var t = r.getType();
          if (t == 1736) return this.gW(r, n);
          if (t == 1607) return this.hW(r, n);
          throw e.i.fa("projectMultiPath");
        }, f.prototype.gW = function(r, n) {
          var t = this.hf.ef, i = this.hf.Yf, h = t.Sb(), s = i.Sb(), o = e.O.Fu(Math.min(r.I(), 64)), a = e.Da.jg(r);
          h == 3 && (h = (t = (r = t.Ji).fk()).Sb(), a = r.$k(a, !0), this.wp(r, e.bm.forward, a), a = r.Zk(a, !0)), r = null, s == 3 && (s = (i = (r = i.Ji).fk()).Sb());
          var u = h == 2, c = s == 2, l = c ? i.sc() : i, p = !c && !this.Uv;
          s = !1;
          var y = a;
          if (u) {
            if ((y = e.zb.UI(y, t, this.lo, n)).B()) return y;
          } else {
            if (a = new e.l(), y.xc(a), h = t.Oe(), a.G < h.G || a.H > h.H) {
              var d = e.l.construct(a.v - 1, h.G, a.C + 1, h.H);
              if ((y = e.ri.Nu(y, d, t, NaN, 0, n)).B()) return y;
            }
            a.R() > 2 * h.R() && (y = e.zb.Hp(y, -2 * h.R(), 2 * h.R(), t, !0, 0, !0, n));
          }
          a = this.mH, (h = !isNaN(a)) && (y = e.Xl.local().V(y, a, n)), d = c ? i.kk() : null;
          var g = NaN;
          u && (g = t.zi());
          var b = i.Wr() != null;
          if (this.aH) u && (e.zb.ur(t, g, y, o), h && (u = t.hh(), a *= (g = t.sc().hh()) / u)), e.zb.tr(this.hf, y, p, o), h && (u = t.sc().hh(), a *= (g = i.sc().hh()) / u), t = y;
          else {
            var x = new e.Ta(y.description);
            x.DD(y), u && (e.zb.ur(t, g, x, o), h && (u = t.hh(), a *= (g = t.sc().hh()) / u)), e.zb.tr(this.hf, x, p, o), h && (u = t.sc().pm(), a *= (g = i.sc().pm()) / u), p = NaN, c ? (d = i.kk(), p = i.zi()) : isNaN(this.Bm) || (p = this.Bm), u = f.tv(t) | f.tv(i), g = 10 * l.Xd(0), this.Uv && (u = 3, g = 0), t = e.zb.UQ(y, t, x, l, p, n, u, g);
          }
          return b && (t = e.zb.XD(t, i, n)), c && (s || (c = l.Oe().R(), t.Tg(0, 0).R() >= c - l.Xd(0) && (l = d.getNorthPoleLocation(), c = d.getSouthPoleLocation(), y = d.getNorthPoleGeometry(), d = d.getSouthPoleGeometry(), p = 0, y == e.Cg.PE_POLE_POINT && l != e.Cg.PE_POLE_OUTSIDE_BOUNDARY && (p = 1), d == e.Cg.PE_POLE_POINT && c != e.Cg.PE_POLE_OUTSIDE_BOUNDARY && (p |= 2), p !== 0 && (s = !0))), t = e.zb.Mz(t, i, this.Qm, n), h && (t = e.Xl.local().V(t, a, n)), e.zb.Lx(i, t, o)), t.B() || (s && (t = e.Yl.local().V(t, i, !1, n)), r != null && (t = r.Zk(t, !1), this.wp(r, e.bm.reverse, t), t = r.$k(t, !1))), t;
        }, f.tv = function(r) {
          if (r.Sb() != 2) return 0;
          var n = 0, t = r.kk();
          r = t.getNorthPoleLocation();
          var i = t.getSouthPoleLocation(), h = t.getNorthPoleGeometry();
          return t = t.getSouthPoleGeometry(), h == e.Cg.PE_POLE_POINT && r != e.Cg.PE_POLE_OUTSIDE_BOUNDARY && (n = 1), t == e.Cg.PE_POLE_POINT && i != e.Cg.PE_POLE_OUTSIDE_BOUNDARY && (n |= 2), n;
        }, f.prototype.hW = function(r, n) {
          var t = this.hf.ef, i = this.hf.Yf, h = t.Sb(), s = i.Sb(), o = e.O.Fu(Math.min(r.I(), 64)), a = e.Ta.jg(r);
          h == 3 && (h = (t = (r = t.Ji).fk()).Sb(), a = r.$k(a, !0), this.wp(r, e.bm.forward, a), a = r.Zk(a, !0)), r = null, s == 3 && (s = (i = (r = i.Ji).fk()).Sb());
          var u = h == 2;
          h = (s = s == 2) ? i.sc() : i;
          var c = !s && !this.Uv;
          if (u) {
            if ((a = e.zb.UI(a, t, this.lo, n)).B()) return a;
          } else {
            var l = new e.l();
            a.xc(l);
            var p = t.Oe();
            if ((l.G < p.G || l.H > p.H) && (l = e.l.construct(l.v - 1, p.G, l.C + 1, p.H), (a = e.ri.Nu(a, l, t, NaN, 0, n)).B())) return a;
          }
          var y = NaN;
          u && (y = t.zi()), l = i.Wr() != null, p = this.mH;
          var d = !isNaN(p);
          if (d && (a = e.Xl.local().V(a, p, n)), this.aH) u && e.zb.ur(t, y, a, o), d && (u = t.hh(), p *= (y = t.sc().hh()) / u), e.zb.tr(this.hf, a, c, o), d && (u = t.sc().hh(), p *= (y = i.sc().hh()) / u), t = a;
          else {
            var g = new e.Ta(a.description);
            g.DD(a), u && (e.zb.ur(t, y, g, o), d && (u = t.hh(), p *= (y = t.sc().hh()) / u)), e.zb.tr(this.hf, g, c, o), d && (u = t.sc().hh(), p *= (y = i.sc().hh()) / u), c = NaN, s ? c = i.zi() : isNaN(this.Bm) || (c = this.Bm), u = f.tv(t) | f.tv(i), y = 10 * h.Xd(0), this.Uv && (u = 3, y = 0), t = e.zb.VQ(a, t, g, h, c, n, u, y);
          }
          return l && (t = e.zb.XD(t, i, n)), s && (t = e.zb.Mz(t, i, this.Qm, n), d && (t = e.Xl.local().V(t, p, n)), e.zb.Lx(i, t, o)), t.B() || r != null && (t = r.Zk(t, !1), this.wp(r, e.bm.reverse, t), t = r.$k(t, !1)), t;
        }, f.prototype.eW = function(r, n) {
          var t = (r.ca() + r.R()) / 400;
          return t != 0 ? (t = e.Xl.local().V(r, t, n), t = this.VI(t, n), n = r.Ia(), t.bn(n)) : (n = new e.Sa(r.Ip()), t = this.XI(n), n = r.Ia(), t.B() ? n.Oa() : (r.copyTo(n), r = t.D(), n.K(r.x, r.y, r.x, r.y))), n;
        }, f.prototype.fW = function(r, n) {
          r = e.aa.jg(r);
          var t = this.hf.ef, i = this.hf.Yf, h = t.Sb(), s = i.Sb(), o = e.O.Fu(Math.min(r.I(), 64));
          if (h == 3) {
            var a = t.Ji;
            h = (t = a.fk()).Sb(), r = a.Zk(r, !0), this.wp(a, e.bm.forward, r), r = a.$k(r, !0);
          }
          if (h == 2) {
            if (this.lo == e.si.Clip ? r = e.Xj.local().V(r, t.ml(), t, n) : t.Wc() && (h = new e.l(), r.xc(h), t.Oe().contains(h) || (this.lo == e.si.PannableFold && (r = e.zb.lj(r, t)), e.zb.Jt(r, t.Oe(), t.Xd(0), !0), r = e.zb.Fn(r, t, 0, !0, 0, n))), r.B()) return r;
            e.zb.ur(t, 0, r, o);
          } else e.zb.Jt(r, t.Oe(), t.Xd(0), !0);
          return e.zb.tr(this.hf, r, !1, o), t = 0, h = !1, a = null, s == 3 && (h = !0, s = (i = (a = i.Ji).fk()).Sb()), (s = s == 2) ? t = i.zi() : isNaN(this.Bm) || (t = this.Bm), s && this.Qm != e.si.Clip || (r = e.zb.Fn(r, i.sc(), t, !1, 0, n)), s && (r = e.zb.Mz(r, i, this.Qm, n), e.zb.Lx(i, r, o), r.B()) || h && (r = a.Zk(r, !0), this.wp(a, e.bm.reverse, r), r = a.$k(r, !0)), r;
        }, f.prototype.wp = function(r, n, t) {
          var i = t.I();
          if (i != 0) {
            for (var h = t.ub(0), s = e.O.lg(200, 0), o = [], a = 0; a < i; ) {
              var u = Math.min(100, i - a);
              h.Vw(2 * a, 2 * u, s, 2, !0);
              for (var c = 0; c < u; ++c) o[c] = e.h.construct(s[2 * a], s[2 * a + 1]);
              r.Qt(n, o, u), a += u;
            }
            t.Pc(1993);
          }
        }, f.Uy = function(r, n, t) {
          if (r == null || n == null || !n.Wc()) throw e.i.fa("Invalid Arguement");
          if (r.B()) return r;
          var i = r.getType();
          return i == 197 ? (i = new e.Da(r.description)).ad(r, !1) : e.aa.yd(i) ? (i = new e.Ta(r.description)).oc(r, !0) : i = r, (i = e.zb.lj(i, n)).B() ? i : e.zb.Fn(i, n, 0, i != r, 0, t);
        }, f.nj = function(r, n, t, i) {
          if (r == null || n == null || !n.Wc()) throw e.i.fa("Invalid Arguement");
          if (r.B()) return r;
          var h = r.getType();
          if (e.aa.Hc(h)) {
            r = e.zb.lj(r, n), h = new e.l(), r.A(h);
            for (var s = e.ta.ty(n, h, !1), o = n.gh(), a = Math.floor((h.v - o.v) / o.R()) * o.R() + o.v; a < h.C; ) a > h.v + s && a < h.C - s && (r = e.zb.uS(r, n, t, a)), a += o.R();
          } else {
            if (h == 197) return (h = new e.Da(r.description)).ad(r, !1), f.nj(h, n, t, i);
            if (e.aa.yd(h)) return (h = new e.Ta(r.description)).oc(r, !0), f.nj(h, n, t, i);
          }
          return f.Uy(r, n, i);
        }, f;
      }();
      e.bu = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n, t, i, h) {
          var s = f.call(this) || this;
          return n === void 0 ? s.description = e.ee.og() : i === void 0 ? s.description = n : (s.description = e.ee.og(), s.ZB(n, t), s.Ql(i, h)), s;
        }
        return J(r, f), r.prototype.getType = function() {
          return 322;
        }, r.prototype.Qb = function() {
          var n = this.sa - this.pa, t = this.na - this.la;
          return Math.sqrt(n * n + t * t);
        }, r.prototype.Bi = function(n) {
          var t = this.sa - this.pa, i = this.na - this.la;
          return Math.sqrt(t * t + i * i) <= n;
        }, r.prototype.Pn = function() {
          return !1;
        }, r.prototype.kg = function() {
          var n = new e.h();
          return n.uc(this.wc(), this.ac()), n;
        }, r.cP = function(n, t) {
          return new r(n.x, n.y, t.x, t.y);
        }, r.prototype.bn = function(n) {
          n.Oa(), n.Nf(this.description);
          var t = new e.l();
          this.A(t), n.Xo(t), t = 1;
          for (var i = this.description.Aa; t < i; t++) for (var h = this.description.kd(t), s = e.ra.Va(h); t < s; t++) {
            var o = this.Tg(h, 0);
            n.setInterval(h, 0, o);
          }
        }, r.prototype.A = function(n) {
          n.K(this.sa, this.na, this.pa, this.la), n.normalize();
        }, r.prototype.Qo = function(n) {
          n.Oa(), n.Zb(this.sa, this.na, this.Od(0, 1, 0)), n.Zb(this.pa, this.la, this.Od(1, 1, 0));
        }, r.prototype.Oc = function(n) {
          if (n instanceof e.Dd) {
            this.vc();
            var t = new e.h();
            t.x = this.sa, t.y = this.na, n.Eh(t, t), this.sa = t.x, this.na = t.y, t.x = this.pa, t.y = this.la, n.Eh(t, t), this.pa = t.x, this.la = t.y;
          } else this.vc(), (t = new e.Nd()).x = this.sa, t.y = this.na, t.z = this.Od(0, 1, 0), t = n.fp(t), this.sa = t.x, this.na = t.y, this.tn(0, 1, 0, t.z), t.x = this.pa, t.y = this.la, t.z = this.Od(1, 1, 0), t = n.fp(t), this.pa = t.x, this.la = t.y, this.tn(1, 1, 0, t.z);
        }, r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.Tx = function(n, t) {
          return (this.pa - n - (this.sa - n)) * (this.la - t + (this.na - t)) * 0.5;
        }, r.prototype.vx = function(n) {
          return n * this.Qb();
        }, r.prototype.NG = function(n) {
          return n / this.Qb();
        }, r.prototype.DF = function(n) {
          return e.lc.hq(this.sa, this.pa, n);
        }, r.prototype.fR = function(n) {
          return e.lc.hq(this.na, this.la, n);
        }, r.prototype.dl = function(n, t) {
          var i = new e.ig();
          return this.ah(n, t, i), i.get();
        }, r.prototype.ah = function(n, t, i) {
          if (i == null) throw e.i.N();
          i.Or(), (i = i.get()).Nf(this.description);
          var h = new e.h();
          this.hc(n, h), i.ZB(h.x, h.y), this.hc(t, h), i.Ql(h.x, h.y), h = 1;
          for (var s = this.description.Aa; h < s; h++) for (var o = this.description.Ed(h), a = e.ra.Va(o), u = 0; u < a; u++) {
            var c = this.Uc(n, o, u);
            i.YB(o, u, c), c = this.Uc(t, o, u), i.OB(o, u, c);
          }
        }, r.prototype.Uc = function(n, t, i) {
          if (t == 0) return i == 0 ? this.hc(n).x : this.hc(n).y;
          switch (e.ra.lz(t)) {
            case 0:
              return 0.5 > n ? this.wv(t, i) : this.gv(t, i);
            case 1:
              var h = this.wv(t, i);
              return t = this.gv(t, i), e.lc.hq(h, t, n);
            case 2:
              throw e.i.fa("not implemented");
          }
          throw e.i.Qa();
        }, r.prototype.fe = function(n, t) {
          var i = this.pa - this.sa, h = this.la - this.na, s = i * i + h * h;
          return s == 0 ? 0.5 : (n = ((n.x - this.sa) * i + (n.y - this.na) * h) / s, t || (0 > n ? n = 0 : 1 < n && (n = 1)), n);
        }, r.prototype.cq = function(n, t, i, h) {
          if (n) {
            if ((n = this.la - this.na) == 0) return t == this.la ? -1 : 0;
            if (0 > (t = (t - this.na) / n) || 1 < t) return 0;
            i != null && (i[0] = this.DF(t));
          } else {
            if ((n = this.pa - this.sa) == 0) return t == this.pa ? -1 : 0;
            if (0 > (t = (t - this.sa) / n) || 1 < t) return 0;
            i != null && (i[0] = this.fR(t));
          }
          return h != null && (h[0] = t), 1;
        }, r.prototype.Pe = function(n, t) {
          var i = this.la - this.na;
          return i == 0 ? n == this.la ? t : NaN : (n = (n - this.na) / i, t = this.DF(n), n == 1 && (t = this.pa), t);
        }, r.prototype.ru = function(n, t, i) {
          return 0 <= this.rp(n.x, n.y, t, i);
        }, r.prototype.vi = function(n, t, i) {
          return 0 <= this.rp(n, t, i, !0);
        }, r.prototype.qs = function(n, t) {
          return this.ru(n, t, !1);
        }, r.prototype.rI = function() {
          if (this.la < this.na || this.la == this.na && this.pa < this.sa) {
            var n = this.sa;
            this.sa = this.pa, this.pa = n, n = this.na, this.na = this.la, this.la = n, n = 0;
            for (var t = this.description.Oq - 2; n < t; n++) {
              var i = this.ka[n];
              this.ka[n] = this.ka[n + t], this.ka[n + t] = i;
            }
          }
        }, r.prototype.uu = function(n, t) {
          (t = e.h.construct(n, t)).sub(this.ac());
          var i = new e.h();
          return i.uc(this.wc(), this.ac()), (n = i.wi(t)) > (t = 8881784197001252e-31 * (Math.abs(i.x * t.y) + Math.abs(i.y * t.x))) ? -1 : n < -t ? 1 : 0;
        }, r.prototype.rp = function(n, t, i, h) {
          var s = this.sa, o = this.na, a = n - s, u = t - o;
          if ((a = Math.sqrt(a * a + u * u)) <= Math.max(i, 6661338147750939e-31 * a)) return h && a == 0 ? NaN : 0;
          if (a = n - this.pa, u = t - this.la, (a = Math.sqrt(a * a + u * u)) <= Math.max(i, 6661338147750939e-31 * a)) return h && a == 0 ? NaN : 1;
          if (a = this.pa - this.sa, u = this.la - this.na, 0 < (h = Math.sqrt(a * a + u * u))) {
            var c = 1 / h, l = n - s, p = t - o, y = l * (a *= c) + p * (u *= c), d = 17763568394002505e-31 * (Math.abs(l * a) + Math.abs(p * u)), g = a;
            if (a = -u, u = g, y < -(d = Math.max(i, d)) || y > h + d) return NaN;
            if (Math.abs(l * a + p * u) <= Math.max(i, 17763568394002505e-31 * (Math.abs(l * a) + Math.abs(p * u))) && (0.5 >= (a = e.O.Rk(y * c, 0, 1)) ? (u = this.sa + (this.pa - this.sa) * a, h = this.na + (this.la - this.na) * a) : (u = this.pa - (this.pa - this.sa) * (1 - a), h = this.la - (this.la - this.na) * (1 - a)), e.h.Oy(u, h, n, t) <= i)) {
              if (0.5 > a) {
                if (e.h.Oy(u, h, s, o) <= i) return 0;
              } else if (e.h.Oy(u, h, this.pa, this.la) <= i) return 1;
              return a;
            }
          }
          return NaN;
        }, r.prototype.Nb = function(n) {
          return n != null && (n == this || n.constructor === this.constructor && this.FM(n));
        }, r.prototype.rD = function(n, t, i) {
          var h = i ? this.sa : this.pa;
          i = i ? this.na : this.la;
          var s = new e.h();
          return s.x = n.pa - h, s.y = n.la - i, !(t.Qh(s) > 6661338147750939e-31 * t.fD(s)) || (s.x = n.sa - h, s.y = n.na - i, t.Qh(s) <= 6661338147750939e-31 * t.fD(s));
        }, r.prototype.qD = function(n) {
          var t = new e.h();
          return t.x = this.pa - this.sa, t.y = this.la - this.na, !!this.rD(n, t, !1) && (t.Sq(), !!this.rD(n, t, !0));
        }, r.NM = function(n, t) {
          var i = n.uu(t.sa, t.na), h = n.uu(t.pa, t.la);
          return !(0 > i && 0 > h || 0 < i && 0 < h) && (i = t.uu(n.sa, n.na), h = t.uu(n.pa, n.la), !(0 > i && 0 > h || 0 < i && 0 < h) && ((i = n.Qb()) > (h = t.Qb()) ? n.qD(t) : t.qD(n)));
        }, r.LM = function(n, t, i) {
          var h = e.h.construct(NaN, NaN), s = n.pa - n.sa, o = n.la - n.na, a = t.pa - t.sa, u = t.la - t.na, c = a * o - s * u;
          if (c == 0) return h;
          var l = 8881784197001252e-31 * (Math.abs(a * o) + Math.abs(s * u)), p = t.sa - n.sa, y = t.na - n.na, d = a * y - p * u, g = d / c, b = Math.abs(c);
          return g < -(a = (8881784197001252e-31 * (Math.abs(a * y) + Math.abs(p * u)) * b + l * Math.abs(d)) / (c * c) + 2220446049250313e-31 * Math.abs(g)) || g > 1 + a || (a = (u = s * y - p * o) / c) < -(s = (8881784197001252e-31 * (Math.abs(s * y) + Math.abs(p * o)) * b + l * Math.abs(u)) / (c * c) + 2220446049250313e-31 * Math.abs(a)) || a > 1 + s || (g = e.O.Rk(g, 0, 1), s = e.O.Rk(a, 0, 1), o = n.hc(g), c = t.hc(s), (l = new e.h()).uc(o, c), l.length() > i && (l.add(o, c), l.scale(0.5), g = n.fe(l, !1), s = t.fe(l, !1), n = n.hc(g), t = t.hc(s), n.sub(t), n.length() > i) || h.ma(g, s)), h;
        }, r.OM = function(n, t, i, h) {
          var s = 0;
          if ((n.sa == t.sa && n.na == t.na || n.sa == t.pa && n.na == t.la) && (s++, !h)) return 1;
          if (n.pa == t.sa && n.la == t.na || n.pa == t.pa && n.la == t.la) {
            if (++s == 2) return 2;
            if (!h) return 1;
          }
          return t.vi(n.sa, n.na, i) || t.vi(n.pa, n.la, i) || n.vi(t.sa, t.na, i) || n.vi(t.pa, t.la, i) ? 1 : h && s != 0 || r.NM(n, t) == 0 ? 0 : 1;
        }, r.Zx = function(n, t, i, h, s, o) {
          var a = 0, u = n.rp(t.sa, t.na, o, !1), c = n.rp(t.pa, t.la, o, !1), l = t.rp(n.sa, n.na, o, !1), p = t.rp(n.pa, n.la, o, !1);
          return isNaN(u) || (h != null && (h[a] = u), s != null && (s[a] = 0), i != null && (i[a] = e.h.construct(t.sa, t.na)), a++), isNaN(c) || (h != null && (h[a] = c), s != null && (s[a] = 1), i != null && (i[a] = e.h.construct(t.pa, t.la)), a++), a == 2 || isNaN(l) || u == 0 && l == 0 || c == 0 && l == 1 || (h != null && (h[a] = 0), s != null && (s[a] = l), i != null && (i[a] = e.h.construct(n.sa, n.na)), a++), a == 2 || isNaN(p) || u == 1 && p == 0 || c == 1 && p == 1 || (h != null && (h[a] = 1), s != null && (s[a] = p), i != null && (i[a] = e.h.construct(t.pa, t.la)), a++), 0 < a ? (a == 2 && h != null && h[0] > h[1] && (n = h[0], h[0] = h[1], h[1] = n, s != null && (h = s[0], s[0] = s[1], s[1] = h), i != null && (s = e.h.construct(i[0].x, i[0].y), i[0] = i[1], i[1] = s)), a) : (a = r.LM(n, t, o), isNaN(a.x) ? 0 : (i != null && (i[0] = n.hc(a.x)), h != null && (h[0] = a.x), s != null && (s[0] = a.y), 1));
        }, r.prototype.eG = function() {
          return 0;
        }, r.prototype.op = function() {
        }, r.prototype.toString = function() {
          return "Line: [" + this.sa.toString() + ", " + this.na.toString() + ", " + this.pa.toString() + ", " + this.la.toString() + "]";
        }, r;
      }(e.SC);
      e.yb = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.Jm = [], this.ya = -1;
        }
        return f.prototype.La = function() {
          return this.ya;
        }, f.prototype.next = function() {
          if (this.Jm != null && this.Jm.length != 0) {
            this.ya++;
            var r = this.Jm[0];
            return this.Jm = 1 >= this.Jm.length ? [] : this.Jm.slice(1), r;
          }
          return this.Jm = null;
        }, f.prototype.ZX = function(r) {
          this.Jm.push(r);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.gL = v;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.SL || (e.SL = {}))[v.enumFillRuleOddEven = 0] = "enumFillRuleOddEven", v[v.enumFillRuleWinding = 1] = "enumFillRuleWinding";
      var f = function(r) {
        function n(t, i) {
          var h = r.call(this) || this;
          if (h.xf = !1, h.Eq = null, h.sq = 0, h.rq = 0, h.Aj = null, h.Mg = !1, h.nb = null, h.mb = null, h.Ve = null, h.Lj = null, h.Sd = null, h.tq = 0, h.gb = 0, h.xq = 0, i === void 0) h.xf = t, h.Mg = !1, h.tq = 0, h.sq = 0, h.rq = 0, h.wa = 0, h.description = e.ee.og();
          else {
            if (i == null) throw e.i.N();
            h.xf = t, h.Mg = !1, h.tq = 0, h.sq = 0, h.rq = 0, h.wa = 0, h.description = i;
          }
          return h.Aj = null, h.gb = 0, h;
        }
        return J(n, r), n.prototype.tm = function() {
          return 0 < this.tq;
        }, n.prototype.Yx = function() {
          this.vc(), this.Eq == null ? this.Eq = new e.Sa(this.description) : this.Eq.Nf(this.description);
        }, n.prototype.sx = function(t, i) {
          var h = new e.h();
          h.x = t, h.y = i, this.Lt(h);
        }, n.prototype.Lt = function(t) {
          this.Yx(), this.Eq.Cb(t), this.Mg = !0;
        }, n.prototype.nf = function(t) {
          if (t.B()) throw e.i.N();
          this.Jl(t.description), this.Yx(), t.copyTo(this.Eq), this.Mg = !0;
        }, n.prototype.Sx = function() {
          var t = 1;
          this.Mg && (this.Yx(), this.nb == null ? (this.nb = e.Yc.Oh(2), this.nb.write(0, 0), this.mb = e.Yc.Mr(2, 0)) : (this.nb.resize(this.nb.size + 1, 0), this.mb.resize(this.mb.size + 1, 0)), this.xf && this.mb.write(this.mb.size - 2, 1), t++);
          var i = this.wa;
          this.nb.write(this.nb.size - 1, this.wa + t), this.dm(i + t), this.mb.write(this.nb.size - 1, 0), this.Mg && (this.Ht(i, this.Eq), this.Mg = !1);
        }, n.prototype.yj = function(t, i) {
          this.Sx(), this.Cb(this.wa - 1, t, i);
        }, n.prototype.Ci = function(t) {
          this.Sx(), this.Cb(this.wa - 1, t);
        }, n.prototype.lineTo = function(t) {
          this.Sx(), this.Ht(this.wa - 1, t);
        }, n.prototype.CU = function(t) {
          if (this.vc(), this.xf) throw e.i.Qa();
          var i = this.da();
          if (t > i) throw e.i.Qa();
          if (this.dc(t)) {
            if (this.mb == null) throw e.i.Qa();
            var h = this.wa, s = this.Ba(t), o = this.Vc(t);
            this.dm(this.wa + 1), this.mc();
            for (var a = 0, u = this.description.Aa; a < u; a++) if (this.za[a] != null) {
              var c = e.ra.Va(this.description.Ed(a));
              this.za[a].Mn(c * o, this.za[a], c * s, c, !0, 1, c * h);
            }
            for (; i > t; i--) h = this.nb.read(i), this.nb.write(i, h + 1);
            this.mb.KE(t, 1);
          }
        }, n.prototype.Ap = function() {
          if (this.wx(), t === void 0) {
            this.Mg = !1;
            var t = this.da() - 1;
          }
          var i = this.mb.read(t);
          this.mb.write(t, 1 | i), this.Ve != null && (t = this.Vc(t) - 1, this.Ve.write(t, 1), this.Lj.write(t, -1));
        }, n.prototype.dc = function(t) {
          return (1 & this.mb.read(t)) != 0;
        }, n.prototype.Nn = function(t) {
          if (this.dc(t)) return !0;
          var i = this.Ba(t);
          return !(i > (t = this.Vc(t) - 1)) && (i = this.Na(i), t = this.Na(t), i.qb(t));
        }, n.prototype.yv = function(t) {
          return (2 & this.mb.read(t)) != 0;
        }, n.prototype.oc = function(t, i) {
          if (this.Jl(t.description), t.getType() != 322) throw e.i.Qa();
          var h = new e.Sa();
          (i || this.B()) && (t.To(h), this.nf(h)), t.Po(h), this.lineTo(h);
        }, n.prototype.tp = function(t) {
          var i = this.wa == 0;
          this.sx(t.v, t.G), this.yj(t.v, t.H), this.yj(t.C, t.H), this.yj(t.C, t.G), this.Ap(), this.Mg = !1, i && this.Lf(256, !1);
        }, n.prototype.ad = function(t, i) {
          if (!t.B()) {
            for (var h = this.wa == 0, s = new e.Sa(this.description), o = 0; 4 > o; o++) t.Hf(i ? 4 - o - 1 : o, s), o == 0 ? this.nf(s) : this.lineTo(s);
            this.Ap(), this.Mg = !1, h && !i && this.Lf(256, !1);
          }
        }, n.prototype.add = function(t, i) {
          for (var h = 0; h < t.da(); h++) this.addPath(t, h, !i);
        }, n.prototype.addPath = function(t, i, h) {
          this.vf(-1, t, i, h);
        }, n.prototype.Yk = function(t, i) {
          this.Hz(t, i);
        }, n.prototype.Dr = function(t, i, h, s, o) {
          if (o || this.da() != 0 || (o = !0), 0 > i && (i = t.da() - 1), i >= t.da() || 0 > h || 0 > s || s > t.rv(i)) throw e.i.fa("index out of bounds");
          if (s != 0) {
            var a = t.dc(i) && h + s == t.rv(i);
            if (!a || s != 1) {
              if (this.Mg = !1, this.Jl(t.description), h = t.Ba(i) + h + 1, o && (s++, h--), a && s--, a = this.wa, this.dm(this.wa + s), this.mc(), o) {
                if (s == 0) return;
                this.nb.add(this.wa), o = t.mb.read(i), o &= -5, this.xf && (o |= 1), this.mb.write(this.mb.size - 1, o), this.mb.add(0);
              } else this.nb.write(this.mb.size - 1, this.wa);
              o = 0;
              for (var u = this.description.Aa; o < u; o++) {
                var c = this.description.kd(o), l = e.ra.Va(c), p = t.description.Pf(c);
                0 > p || t.za[p] == null ? this.za[o].Ln(l * a, e.ra.se(c), s * l, l * a) : this.za[o].Mn(l * a, t.za[p], l * h, s * l, !0, l, l * a);
              }
              if (this.tm() || t.yv(i)) throw e.i.Qa();
              this.Pc(1993);
            }
          }
        }, n.prototype.oJ = function() {
          for (var t = 0, i = this.da(); t < i; t++) this.FW(t);
        }, n.prototype.FW = function(t) {
          if (this.mc(), t >= this.da()) throw e.i.N();
          var i = this.Ba(t), h = this.Ja(t);
          t = this.dc(t) ? 1 : 0;
          for (var s = 0, o = this.description.Aa; s < o; s++) if (this.za[s] != null) {
            var a = e.ra.Va(this.description.Ed(s));
            this.za[s].ni(a * (i + t), a * (h - t), a);
          }
          this.Pc(1993);
        }, n.prototype.Zq = function(t) {
          this.mc();
          var i = this.da();
          if (0 > t && (t = i - 1), t >= i) throw e.i.N();
          for (var h = this.Ba(t), s = this.Ja(t), o = 0, a = this.description.Aa; o < a; o++) if (this.za[o] != null) {
            var u = e.ra.Va(this.description.Ed(o));
            this.za[o].En(u * h, u * s, u * this.wa);
          }
          for (h = t + 1; h <= i; h++) o = this.nb.read(h), this.nb.write(h - 1, o - s);
          if (this.mb == null) for (h = t + 1; h <= i; h++) t = this.mb.read(h), this.mb.write(h - 1, t);
          this.nb.resize(i), this.mb.resize(i), this.wa -= s, this.Pg -= s, this.Pc(1993);
        }, n.prototype.vf = function(t, i, h, s) {
          if (i == this || h >= i.da()) throw e.i.N();
          var o = this.da();
          if (t > o) throw e.i.N();
          0 > t && (t = o), 0 > h && (h = i.da() - 1), this.Mg = !1, this.Jl(i.description), i.mc();
          var a = i.Ba(h), u = i.Ja(h), c = this.wa, l = i.dc(h) && !s ? 1 : 0;
          this.dm(this.wa + u), this.mc();
          for (var p = t < o ? this.Ba(t) : c, y = 0, d = this.description.Aa; y < d; y++) {
            var g = this.description.Ed(y), b = i.description.Pf(g), x = e.ra.Va(g);
            0 <= b && i.za[b] != null ? (l != 0 && this.za[y].Mn(p * x, i.za[b], x * a, x, !0, x, x * c), this.za[y].Mn((p + l) * x, i.za[b], x * (a + l), x * (u - l), s, x, x * (c + l))) : this.za[y].Ln(p * x, e.ra.se(g), x * u, x * c);
          }
          for (this.nb.add(c + u), s = o; s >= t + 1; s--) a = this.nb.read(s - 1), this.nb.write(s, a + u);
          for (i.yv(h), this.mb.add(0), s = o - 1; s >= t + 1; s--) o = this.mb.read(s), o &= -5, this.mb.write(s + 1, o);
          o = i.JR().read(h), o &= -5, this.xf && (o |= 1), this.mb.write(t, o);
        }, n.prototype.Hz = function(t, i) {
          var h = -1, s = this.da();
          if (h > s) throw e.i.N();
          0 > h && (h = s), this.Mg = !1;
          var o = this.wa;
          this.dm(this.wa + i), this.mc();
          var a = h < s ? this.Ba(h) : o;
          if (t != null) this.za[0].Iz(2 * a, t, 0, i, !0, 2 * o);
          else {
            var u = e.ra.se(0);
            this.za[0].Ln(2 * a, u, 2 * i, 2 * o);
          }
          t = 1;
          for (var c = this.description.Aa; t < c; t++) {
            u = this.description.kd(t);
            var l = e.ra.Va(u);
            u = e.ra.se(u), this.za[t].Ln(a * l, u, l * i, l * o);
          }
          for (this.nb.add(this.wa), o = s; o >= h + 1; o--) a = this.nb.read(o - 1), this.nb.write(o, a + i);
          for (this.mb.add(0), o = s - 1; o >= h + 1; o--) i = this.mb.read(o), i &= -5, this.mb.write(o + 1, i);
          this.xf && this.mb.write(h, 1);
        }, n.prototype.qG = function(t, i, h) {
          var s = -1;
          if (0 > t && (t = this.da()), t > this.da() || s > this.Ja(t) || h > i.length) throw e.i.fa("index out of bounds");
          if (h != 0) {
            t == this.da() && (this.nb.add(this.wa), this.xf ? this.mb.add(1) : this.mb.add(0)), 0 > s && (s = this.Ja(t)), this.mc();
            var o = this.wa;
            this.dm(this.wa + h), this.mc();
            for (var a = 0, u = this.description.Aa; a < u; a++) {
              var c = this.description.Ed(a), l = e.ra.Va(c);
              this.za[a].Ut(l * (this.Ba(t) + s + h), (o - this.Ba(t) - s) * l, this.za[a], l * (this.Ba(t) + s), !0, l), a == 0 ? this.za[a].vC(l * (this.Ba(t) + s), h, i, 0, !0) : this.za[a].Wj(e.ra.se(c), (this.Ba(t) + s) * l, h * l);
            }
            for (this.tm() && (this.Ve.Ut(this.Ba(t) + s + h, o - this.Ba(t) - s, this.Ve, this.Ba(t) + s, !0, 1), this.Lj.Ut(this.Ba(t) + s + h, o - this.Ba(t) - s, this.Lj, this.Ba(t) + s, !0, 1), this.Ve.Wj(1, this.Ba(t) + s, h), this.Lj.Wj(-1, this.Ba(t) + s, h)), t += 1, i = this.da(); t <= i; t++) this.nb.write(t, this.nb.read(t) + h);
          }
        }, n.prototype.wf = function(t, i, h) {
          var s = this.da();
          if (0 > t && (t = this.da()), t >= s || i > this.Ja(t)) throw e.i.fa("index out of bounds");
          t == this.da() && (this.nb.add(this.wa), this.xf ? this.mb.add(1) : this.mb.add(0)), 0 > i && (i = this.Ja(t));
          var o = this.wa;
          this.dm(this.wa + 1), this.mc();
          var a = this.Ba(t);
          this.za[0].vj(2 * (a + i), h, 2 * o), h = 1;
          for (var u = this.description.Aa; h < u; h++) {
            var c = this.description.Ed(h), l = e.ra.Va(c);
            this.za[h].Ln(l * (a + i), e.ra.se(c), l, l * o);
          }
          for (t += 1; t <= s; t++) this.nb.write(t, this.nb.read(t) + 1);
        }, n.prototype.DB = function(t, i) {
          var h = this.da();
          if (0 > t && (t = h - 1), t >= h || i >= this.Ja(t)) throw e.i.fa("index out of bounds");
          this.mc();
          var s = this.Ba(t);
          0 > i && (i = this.Ja(t) - 1), i = s + i, s = 0;
          for (var o = this.description.Aa; s < o; s++) if (this.za[s] != null) {
            var a = e.ra.Va(this.description.Ed(s));
            this.za[s].En(a * i, a, a * this.wa);
          }
          for (; h >= t + 1; h--) i = this.nb.read(h), this.nb.write(h, i - 1);
          this.wa--, this.Pg--, this.Pc(1993);
        }, n.prototype.uE = function(t, i, h) {
          var s = this.Ba(t) + i;
          if ((h = this.Ba(h) + void 0) < s || 0 > s || h > this.I() - 1) throw e.i.N();
          i = 0, (t = this.Ga()).Vb(s);
          do {
            for (; t.Ha() && (s = t.ha(), t.wb() != h); ) i += s = s.Qb();
            if (t.wb() == h) break;
          } while (t.$a());
          return i;
        }, n.prototype.fO = function(t, i, h) {
          if (i = this.Ba(t) + i, h = this.Ba(t) + h, 0 > i || h > this.I() - 1) throw e.i.N();
          var s = this.Ga();
          if (i > h) {
            if (!this.dc(t)) throw e.i.N("cannot iterate across an open path");
            s.JB();
          }
          var o = t = 0;
          s.Vb(i);
          do
            o += t, t = s.ha().Qb();
          while (s.wb() != h);
          return o;
        }, n.prototype.mg = function() {
          return e.pi.gm(this, null);
        }, n.prototype.KS = function(t, i, h) {
          for (var s = t; s < h - 1; s++) if (this.dc(s)) throw e.i.N("cannot interpolate across closed paths");
          if ((s = this.description.Aa) != 1) {
            var o = this.uE(t, i, h);
            if (o != 0) for (var a = 1; a < s; a++) {
              var u = this.description.kd(a);
              if (e.ra.lz(u) != 2) for (var c = e.ra.Va(u), l = 0; l < c; l++) this.MS(u, t, i, h, o, l);
            }
          }
        }, n.prototype.JS = function(t, i, h) {
          var s = this.description.Aa;
          if (s != 1) {
            var o = this.fO(t, i, h);
            if (o != 0) for (var a = 1; a < s; a++) {
              var u = this.description.kd(a);
              if (e.ra.lz(u) != 2) for (var c = e.ra.Va(u), l = 0; l < c; l++) this.LS(u, t, i, h, o, l);
            }
          }
        }, n.prototype.MS = function(t, i, h, s, o, a) {
          var u = this.Ga(), c = this.Ba(i) + h;
          s = this.Ba(s) + void 0, i = this.Uc(t, c, a), h = this.Uc(t, s, a);
          var l = i, p = 0;
          u.Vb(c);
          do
            if (u.Ha()) {
              if (u.ha(), u.wb() == s) break;
              this.setAttribute(t, u.wb(), a, l), u.li();
              do {
                if (c = u.ha(), u.ik() == s) return;
                p += c = c.Qb(), l = e.lc.hq(i, h, p / o), u.On() || this.setAttribute(t, u.ik(), a, l);
              } while (u.Ha());
            }
          while (u.$a());
        }, n.prototype.LS = function(t, i, h, s, o, a) {
          var u = this.Ga(), c = this.Ba(i) + h;
          if ((i = this.Ba(i) + s) != c) {
            s = this.Uc(t, c, a), h = this.Uc(t, i, a);
            var l = 0;
            u.Vb(c), u.JB(), c = s;
            do {
              var p = u.ha();
              this.setAttribute(t, u.wb(), a, c), l += c = p.Qb(), c = e.lc.hq(s, h, l / o);
            } while (u.ik() != i);
          }
        }, n.prototype.Oa = function() {
          this.tq = 0, this.Mg = !1, this.Sd = this.Ve = this.Lj = this.mb = this.nb = null, this.wD();
        }, n.prototype.Oc = function(t) {
          t instanceof e.Dd ? this.YD(t, -1) : this.wN(t);
        }, n.prototype.YD = function(t, i) {
          if (!this.B() && !t.isIdentity()) {
            this.mc();
            var h = this.za[0], s = new e.h(), o = new e.h();
            if (0 > i) {
              var a = this.tm(), u = 0;
              i = this.wa;
            } else a = this.yv(i), u = this.Ba(i), i = this.Vc(i);
            for (; u < i; u++) {
              if (s.x = h.read(2 * u), s.y = h.read(2 * u + 1), a) {
                var c = this.Lj.read(u);
                if (0 <= c) switch (7 & this.Ve.read(u)) {
                  case 2:
                    o.x = this.Sd.read(c), o.y = this.Sd.read(c + 1), t.Eh(o, o), this.Sd.write(c, o.x), this.Sd.write(c + 1, o.y), o.x = this.Sd.read(c + 3), o.y = this.Sd.read(c + 4), t.Eh(o, o), this.Sd.write(c + 3, o.x), this.Sd.write(c + 4, o.y);
                    break;
                  case 4:
                    throw e.i.Qa();
                }
              }
              t.Eh(s, s), h.write(2 * u, s.x), h.write(2 * u + 1, s.y);
            }
            this.Pc(1993);
          }
        }, n.prototype.wN = function(t) {
          if (!this.B()) {
            this.re(1), this.mc();
            for (var i = this.za[0], h = this.za[1], s = new e.Nd(), o = new e.Nd(), a = this.tm(), u = 0; u < this.wa; u++) {
              if (s.x = i.read(2 * u), s.y = i.read(2 * u + 1), s.z = h.read(u), a) {
                var c = this.Lj.read(u);
                if (0 <= c) switch (7 & this.Ve.read(u)) {
                  case 2:
                    o.x = this.Sd.read(c), o.y = this.Sd.read(c + 1), o.z = this.Sd.read(c + 2), o = t.fp(o), this.Sd.write(c, o.x), this.Sd.write(c + 1, o.y), this.Sd.write(c + 1, o.z), o.x = this.Sd.read(c + 3), o.y = this.Sd.read(c + 4), o.z = this.Sd.read(c + 5), o = t.fp(o), this.Sd.write(c + 3, o.x), this.Sd.write(c + 4, o.y), this.Sd.write(c + 5, o.z);
                    break;
                  case 4:
                    throw e.i.Qa();
                }
              }
              s = t.fp(s), i.write(2 * u, s.x), i.write(2 * u + 1, s.y), h.write(u, s.z);
            }
            this.Pc(1993);
          }
        }, n.prototype.iy = function() {
          this.nb == null && (this.nb = e.Yc.Oh(1, 0), this.mb = e.Yc.Mr(1, 0)), this.Ve != null && (this.Ve.resize(this.Pg, 1), this.Lj.resize(this.Pg, -1));
        }, n.prototype.op = function(t) {
          t.Mg = !1, t.tq = this.tq, t.xq = this.xq, t.nb = this.nb != null ? e.ia.Bn(this.nb) : null, t.mb = this.mb != null ? e.pn.Bn(this.mb) : null, t.Lj = this.Lj != null ? e.ia.Bn(this.Lj) : null, t.Ve = this.Ve != null ? e.pn.Bn(this.Ve) : null, t.Sd = this.Sd != null ? e.be.Bn(this.Sd) : null, t.sq = this.sq, t.rq = this.rq, t.Aj = this.ak(1024) ? null : this.Aj;
        }, n.prototype.Qb = function() {
          if (!this.ak(512)) return this.sq;
          for (var t = this.Ga(), i = new e.Fx(0); t.$a(); ) for (; t.Ha(); ) i.add(t.ha().Qb());
          return this.sq = i.rm(), this.Lf(512, !1), i.rm();
        }, n.prototype.Nb = function(t) {
          if (t == this) return !0;
          if (!(t instanceof n && r.prototype.Nb.call(this, t))) return !1;
          var i = this.da();
          return !(i != t.da() || this.nb != null && !this.nb.Nb(t.nb, 0, i + 1) || this.xq != t.xq || this.mb != null && !this.mb.Nb(t.mb, 0, i)) && r.prototype.Nb.call(this, t);
        }, n.prototype.Ga = function() {
          return new e.YL(this);
        }, n.prototype.hy = function(t) {
          if (r.prototype.hy.call(this, t), this.tm()) for (t = this.Ga(); t.$a(); )
            t.Ha();
        }, n.prototype.yp = function(t, i) {
          if (r.prototype.yp.call(this, t, i), this.tm()) for (t = this.Ga(); t.$a(); )
            t.Ha();
        }, n.prototype.$x = function() {
          this.wa = this.nb == null || this.nb.size == 0 ? 0 : this.nb.read(this.nb.size - 1);
        }, n.prototype.Ke = function() {
          return this.xf ? (this.xu(), this.rq) : 0;
        }, n.prototype.Ev = function(t) {
          return !!this.xf && (this.ak(8) ? (this.xu(), 0 < this.Aj.read(t)) : (4 & this.mb.read(t)) != 0);
        }, n.prototype.Ir = function(t) {
          return this.xf ? (this.xu(), this.Aj.read(t)) : 0;
        }, n.prototype.xu = function() {
          if (this.ak(1024)) {
            var t = this.da();
            this.Aj == null ? this.Aj = new e.be(t) : this.Aj.size != t && this.Aj.resize(t), t = new e.Fx(0);
            for (var i = new e.Fx(0), h = new e.h(), s = 0, o = this.Ga(); o.$a(); ) {
              for (i.reset(), this.D(this.Ba(o.gb), h); o.Ha(); ) i.add(o.ha().Tx(h.x, h.y));
              t.add(i.rm());
              var a = s++;
              this.Aj.write(a, i.rm());
            }
            this.rq = t.rm(), this.Lf(1024, !1);
          }
        }, n.prototype.FR = function() {
          if (this.xf) {
            this.fm();
            for (var t = this.da(), i = 0; i < t; i++) 4 & this.mb.read(i);
          }
        }, n.prototype.fm = function() {
          if (this.ak(8)) {
            this.xu();
            var t = this.da();
            (this.mb == null || this.mb.size < t) && (this.mb = e.Yc.Mr(t + 1));
            for (var i = 1, h = 0; h < t; h++) {
              var s = this.Aj.read(h);
              h == 0 && (i = 0 < s ? 1 : -1), 0 < s * i ? this.mb.zJ(h, 4) : this.mb.KE(h, 4);
            }
            this.Lf(8, !1);
          }
        }, n.prototype.sz = function(t) {
          var i = this.gb, h = this.da();
          if (0 <= i && i < h) {
            if (t < this.Vc(i)) {
              if (t >= this.Ba(i)) return i;
              i--;
            } else i++;
            if (0 <= i && i < h && t >= this.Ba(i) && t < this.Vc(i)) return this.gb = i;
          }
          if (5 > h) {
            for (i = 0; i < h; i++) if (t < this.Vc(i)) return this.gb = i;
            throw e.i.fa("corrupted geometry");
          }
          for (i = 0, --h; h > i; ) {
            var s = i + (h - i >> 1);
            if (t < this.Ba(s)) h = s - 1;
            else {
              if (!(t >= (i = this.Vc(s)))) return this.gb = s;
              i = s + 1;
            }
          }
          return this.gb = i;
        }, n.prototype.yz = function() {
          var t = this.I();
          if (!this.xf) {
            t -= this.da();
            for (var i = 0, h = this.da(); i < h; i++) this.dc(i) && t++;
          }
          return t;
        }, n.prototype.rv = function(t) {
          var i = this.Ja(t);
          return this.dc(t) || i--, i;
        }, n.prototype.Ia = function() {
          return new n(this.xf, this.description);
        }, n.prototype.Db = function() {
          return this.xf ? 2 : 1;
        }, n.prototype.getType = function() {
          return this.xf ? 1736 : 1607;
        }, n.prototype.QJ = function(t) {
          this.nb = t, this.Pc(16777215);
        }, n.prototype.VR = function() {
          return this.wx(), this.Ve;
        }, n.prototype.JR = function() {
          return this.wx(), this.mb;
        }, n.prototype.PJ = function(t) {
          this.mb = t, this.Pc(16777215);
        }, n.prototype.da = function() {
          return this.nb != null ? this.nb.size - 1 : 0;
        }, n.prototype.Vc = function(t) {
          return this.nb.read(t + 1);
        }, n.prototype.Ja = function(t) {
          return this.nb.read(t + 1) - this.nb.read(t);
        }, n.prototype.Ba = function(t) {
          return this.nb.read(t);
        }, n.prototype.lu = function(t, i) {
          this.Bb == null && (this.Bb = new e.Uk()), i = e.Nx.pW(i);
          var h = this.Bb.Fk;
          if (h != null) {
            if (!(h.Ik < t || i > h.RR())) return !0;
            this.Bb.yD(null);
          }
          return h = e.Nx.create(this, t, i), this.Bb.yD(h), !0;
        }, n.prototype.cc = function() {
          var t = r.prototype.cc.call(this);
          if (!this.Ac()) {
            var i = this.da();
            this.nb != null && this.nb.An(t, 0, i + 1), this.mb != null && this.mb.An(t, 0, i);
          }
          return t;
        }, n.prototype.ZF = function(t) {
          return this.Ve != null ? this.Ve.read(t) : 1;
        }, n.prototype.bc = function(t, i, h) {
          var s = this.sz(t);
          if (t == this.Vc(s) - 1 && !this.dc(s)) throw e.i.fa("index out of bounds");
          this.mc();
          var o = this.Ve, a = 1;
          if (o != null && (a = 7 & o.read(t)), a !== 1) throw e.i.Qa();
          if (i.Or(), i = i.get(), h ? i.Nf(e.ee.og()) : i.Nf(this.description), s = t == this.Vc(s) - 1 && this.dc(s) ? this.Ba(s) : t + 1, o = new e.h(), this.D(t, o), i.Dc(o), this.D(s, o), i.Qc(o), !h) for (h = 1, o = this.description.Aa; h < o; h++) {
            a = this.description.Ed(h);
            for (var u = e.ra.Va(a), c = 0; c < u; c++) {
              var l = this.Uc(a, t, c);
              i.YB(a, c, l), l = this.Uc(a, s, c), i.OB(a, c, l);
            }
          }
        }, n.prototype.Rj = function(t, i) {
          if (t >= this.da()) throw e.i.N();
          if (this.B()) i.Oa();
          else {
            if (this.yv(t)) throw e.i.fa("not implemented");
            var h = this.ub(0), s = new e.h(), o = new e.l();
            o.Oa();
            var a = this.Ba(t);
            for (t = this.Vc(t); a < t; a++) h.tc(2 * a, s), o.Zb(s);
            i.K(o);
          }
        }, n.prototype.fj = function(t) {
          return this.Bb == null && (this.Bb = new e.Uk()), !(t == 0 || 16 > this.I()) && (t = e.ta.nE(this), this.Bb.WM(t), !0);
        }, n.prototype.hM = function() {
          if (this.Bb == null && (this.Bb = new e.Uk()), this.Bb.zo == null) {
            this.Bb.xD(null);
            var t = e.ta.YN(this);
            this.Bb.xD(t);
          }
        }, n.prototype.Yo = function(t) {
          this.xq = t;
        }, n.prototype.In = function() {
          return this.xq;
        }, n.prototype.DD = function(t) {
          if (this == t) throw e.i.fa("MultiPathImpl.add");
          for (var i = this.da(), h = 0; h < t.da(); h++) this.addPath(t, h, !0), this.CU(i), i++;
        }, n.prototype.kO = function(t) {
          var i = this.sz(t), h = this.Ba(i);
          if (h != t) {
            if (t >= (i = this.Vc(i)) || t < h) throw e.i.fa("change_ring_start_point");
            for (var s = 0, o = this.description.Aa; s < o; s++) {
              var a = this.description.kd(s);
              a = e.ra.Va(a), this.za[s].rotate(h * a, t * a, i * a);
            }
          }
        }, n;
      }(e.Gx);
      e.Vk = f;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n) {
          var t = f.call(this) || this;
          if (n !== void 0) {
            if (n == null) throw e.i.N();
            t.description = n;
          } else t.description = e.ee.og();
          return t.wa = 0, t;
        }
        return J(r, f), r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.add = function(n) {
          this.resize(this.wa + 1), this.Dh(this.wa - 1, n);
        }, r.prototype.Bu = function(n, t) {
          this.resize(this.wa + 1);
          var i = new e.h();
          i.ma(n, t), this.Cb(this.wa - 1, i);
        }, r.prototype.Fd = function(n, t, i) {
          if (i = 0 > i ? n.I() : i, 0 > t || t > n.I() || i < t) throw e.i.N();
          if (t != i) {
            this.Jl(n.description), i -= t;
            var h = this.wa;
            this.resize(this.wa + i), this.mc();
            for (var s = 0, o = n.description.Aa; s < o; s++) {
              var a = n.description.Ed(s), u = e.ra.Va(a), c = this.ub(a);
              a = n.ub(a), c.Mn(h * u, a, t * u, i * u, !0, 1, h * u);
            }
          }
        }, r.prototype.HD = function(n, t) {
          var i = n.length;
          if (t = 0 > t ? i : t, 0 > i || 0 > t) throw e.i.N();
          if (t != 0) {
            i = t - 0, t = this.wa, this.resize(this.wa + i);
            for (var h = 0; h < i; h++) this.Cb(t + h, n[0 + h]);
          }
        }, r.prototype.DB = function(n) {
          if (0 > n || n >= this.I()) throw e.i.fa("index out of bounds");
          this.mc();
          for (var t = 0, i = this.description.Aa; t < i; t++) if (this.za[t] != null) {
            var h = e.ra.Va(this.description.Ed(t));
            this.za[t].En(h * n, h, h * this.wa);
          }
          this.wa--, this.Pg--, this.Pc(1993);
        }, r.prototype.resize = function(n) {
          this.dm(n);
        }, r.prototype.op = function() {
        }, r.prototype.Oa = function() {
          f.prototype.wD.call(this);
        }, r.prototype.Oc = function(n) {
          if (n instanceof e.Dd) {
            if (this.B()) return;
            this.mc();
            for (var t = this.za[0], i = new e.h(), h = 0; h < this.wa; h++) i.x = t.read(2 * h), i.y = t.read(2 * h + 1), n.Eh(i, i), t.write(2 * h, i.x), t.write(2 * h + 1, i.y);
          } else {
            if (this.B()) return;
            this.mc(), this.re(1), this.mc(), t = this.za[0], i = this.za[1];
            var s = new e.Nd();
            for (h = 0; h < this.wa; h++) {
              s.x = t.read(2 * h), s.y = t.read(2 * h + 1), s.z = i.read(h);
              var o = n.fp(s);
              t.write(2 * h, o.x), t.write(2 * h + 1, o.y), i.write(h, o.z);
            }
          }
          this.Pc(1993);
        }, r.prototype.Db = function() {
          return 0;
        }, r.prototype.getType = function() {
          return 550;
        }, r.prototype.Ke = function() {
          return 0;
        }, r.prototype.Qb = function() {
          return 0;
        }, r.prototype.Nb = function(n) {
          return n == this || n instanceof r && f.prototype.Nb.call(this, n);
        }, r.prototype.lW = function(n, t) {
          var i = this.wa;
          if (i = Math.min(i, t + 1e3), 0 > t || t >= this.wa || i < t || n.length != 1e3) throw e.i.N();
          var h = i - t, s = [];
          for (this.ub(0).Vw(2 * t, 2 * h, s, 0, !0), t = 0; t < h; t++) n[t] = e.h.construct(s[2 * t], s[2 * t + 1]);
          return i;
        }, r.prototype.$x = function() {
        }, r.prototype.iy = function() {
        }, r.prototype.lu = function() {
          return !1;
        }, r.prototype.fj = function() {
          return !1;
        }, r.prototype.mg = function() {
          return null;
        }, r;
      }(e.Gx);
      e.de = v;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.iL || (e.iL = {}))[v.NotDetermined = 0] = "NotDetermined", v[v.Structure = 1] = "Structure", v[v.DegenerateSegments = 2] = "DegenerateSegments", v[v.Clustering = 3] = "Clustering", v[v.Cracking = 4] = "Cracking", v[v.CrossOver = 5] = "CrossOver", v[v.RingOrientation = 6] = "RingOrientation", v[v.RingOrder = 7] = "RingOrder", v[v.OGCPolylineSelfTangency = 8] = "OGCPolylineSelfTangency", v[v.OGCPolygonSelfTangency = 9] = "OGCPolygonSelfTangency", v[v.OGCDisconnectedInterior = 10] = "OGCDisconnectedInterior";
      var f = function() {
        function r(n, t, i) {
          n === void 0 ? (this.Jj = 0, this.Ko = this.Jo = -1) : (this.Jj = n, this.Jo = t, this.Ko = i);
        }
        return r.prototype.Wt = function(n) {
          this.Jj = n.Jj, this.Jo = n.Jo, this.Ko = n.Ko;
        }, r;
      }();
      e.Md = f;
    }(k || (k = {})), function(e) {
      e.O = function() {
        function v() {
        }
        return v.assert = function(f) {
          if (f === !1) throw e.i.GK();
        }, v.bK = function(f) {
          return isNaN(f) ? NaN : f === 0 ? f : 0 < f ? 1 : -1;
        }, v.Fu = function(f) {
          var r;
          r === void 0 && (r = 0);
          for (var n = [], t = 0; t < f; t++) n[t] = v.lg(2, r);
          return n;
        }, v.lg = function(f, r) {
          r === void 0 && (r = 0);
          for (var n = [], t = 0; t < f; t++) n[t] = r;
          return n;
        }, v.$u = function(f, r) {
          var n, t;
          for (n === void 0 && (n = 0), t === void 0 && (t = f.length - 1); n <= t; n++) f[n] = r;
        }, v.Rk = function(f, r, n) {
          return f < r ? r : f > n ? n : f;
        }, v.Th = function(f, r) {
          var n = 5381;
          return ((n = ((n = ((n = r !== void 0 ? (r << 5) + r + (255 & f) : (n << 5) + n + (255 & f)) << 5) + n + (f >> 8 & 255)) << 5) + n + (f >> 16 & 255)) << 5) + n + (f >> 24 & 255) & 2147483647;
        }, v.uj = function() {
          throw Error("Not Implemented");
        }, v.bB = function(f) {
          return v.aU(f) + 12345 & 2147483647;
        }, v.XG = function(f) {
          var r = 32, n = f % v.Qx | 0, t = f / v.Qx | 0;
          return (r &= 63) == 0 ? f : (32 > r ? (f = n >>> r | t << 32 - r, r = t >> r) : (f = t >> r - 32, r = 0 <= t ? 0 : -1), r * v.Qx + (f >>> 0));
        }, v.aU = function(f) {
          var r = 1103515245, n = 65535 & r;
          return ((r - n) * (f |= 0) | 0) + (n * f | 0) | 0;
        }, v.truncate = function(f) {
          return 0 > f ? -1 * Math.floor(Math.abs(f)) : Math.floor(f);
        }, v.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1, v.MIN_SAFE_INTEGER = -v.MAX_SAFE_INTEGER, v.VC = 65536, v.Qx = v.VC * v.VC, v;
      }();
    }(k || (k = {})), function(e) {
      var v;
      (v = e.CL || (e.CL = {}))[v.Project = 0] = "Project", v[v.Union = 1] = "Union", v[v.Difference = 2] = "Difference", v[v.Proximity2D = 3] = "Proximity2D", v[v.Relate = 4] = "Relate", v[v.Equals = 5] = "Equals", v[v.Disjoint = 6] = "Disjoint", v[v.Intersects = 7] = "Intersects", v[v.Within = 8] = "Within", v[v.Contains = 9] = "Contains", v[v.Crosses = 10] = "Crosses", v[v.Touches = 11] = "Touches", v[v.Overlaps = 12] = "Overlaps", v[v.Buffer = 13] = "Buffer", v[v.Distance = 14] = "Distance", v[v.Intersection = 15] = "Intersection", v[v.Clip = 16] = "Clip", v[v.Cut = 17] = "Cut", v[v.DensifyByLength = 18] = "DensifyByLength", v[v.DensifyByAngle = 19] = "DensifyByAngle", v[v.LabelPoint = 20] = "LabelPoint", v[v.GeodesicBuffer = 21] = "GeodesicBuffer", v[v.GeodeticDensifyByLength = 22] = "GeodeticDensifyByLength", v[v.ShapePreservingDensify = 23] = "ShapePreservingDensify", v[v.GeodeticLength = 24] = "GeodeticLength", v[v.GeodeticArea = 25] = "GeodeticArea", v[v.Simplify = 26] = "Simplify", v[v.SimplifyOGC = 27] = "SimplifyOGC", v[v.Offset = 28] = "Offset", v[v.Generalize = 29] = "Generalize", v[v.SymmetricDifference = 30] = "SymmetricDifference", v[v.ConvexHull = 31] = "ConvexHull", v[v.Boundary = 32] = "Boundary", v[v.SimpleRelation = 33] = "SimpleRelation";
      var f = function() {
        function r() {
        }
        return r.prototype.getType = function() {
          return null;
        }, r.prototype.wn = function() {
        }, r.prototype.Iu = function() {
          return !1;
        }, r;
      }();
      e.Je = f;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 13;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h, s) {
          return n instanceof e.aa ? (s = new e.Zc(n), this.V(s, t, [i], !1, h).next()) : h === !0 ? (i = new e.BC(n, t, i, !1, s), e.Gh.local().V(i, t, s)) : new e.BC(n, t, i, !1, s);
        }, r.instance = null, r;
      }(e.Je);
      e.AC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h) {
          this.ya = -1, this.Rd = r, this.$z = n, this.Cs = t, this.tT = new e.l(), this.tT.Oa(), this.eo = -1, this.Ub = h;
        }
        return f.prototype.next = function() {
          for (var r; (r = this.Rd.next()) != null; ) return this.ya = this.Rd.La(), this.eo + 1 < this.Cs.length && this.eo++, this.buffer(r, this.Cs[this.eo]);
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.buffer = function(r, n) {
          return e.HK.buffer(r, n, this.$z, NaN, 96, this.Ub);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.BC = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 16;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h) {
          return n instanceof e.aa ? (n = new e.Zc(n), this.V(n, t, i, h).next()) : new e.lL(n, t, i, h);
        }, r.instance = null, r;
      }(e.Je);
      e.kL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t) {
          if (this.ya = -1, r == null) throw e.i.N();
          this.$ = n, this.yk = r, this.qa = e.ta.Wd(t, n, !1);
        }
        return f.prototype.next = function() {
          var r;
          return (r = this.yk.next()) != null ? (this.ya = this.yk.La(), e.Ud.clip(r, this.$, this.qa, 0)) : null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.lL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 31;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i) {
          return n instanceof e.aa ? e.DC.rE(n) : new e.DC(t, n, i);
        }, r.instance = null, r;
      }(e.Je);
      e.CC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t) {
          if (this.uA = new e.Zt(), this.ya = -1, n == null) throw e.i.N();
          this.cH = r, this.Ic = !1, this.yk = n, this.Ub = t;
        }
        return f.prototype.next = function() {
          if (this.cH) {
            if (!this.Ic) {
              var r = this.dO(this.yk);
              return this.Ic = !0, r;
            }
            return null;
          }
          if (!this.Ic) {
            if ((r = this.yk.next()) != null) return this.ya = this.yk.La(), f.rE(r);
            this.Ic = !0;
          }
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.dO = function(r) {
          for (var n; (n = r.next()) != null; ) this.uA.Ib(n);
          return this.uA.cR();
        }, f.prototype.qe = function() {
          if (!this.Ic) {
            if (!this.cH) throw e.i.fa("Invalid call for non merging convex hull.");
            var r = this.yk.next();
            if (r == null) throw e.i.fa("Expects a non-null geometry.");
            this.uA.Ib(r);
          }
        }, f.rE = function(r) {
          if (f.VS(r)) return r;
          var n = r.getType();
          if (e.Vk.yd(n)) return (n = new e.Ta(r.description)).oc(r, !0), n;
          if (n == 550 && r.I() == 2) {
            var t = new e.Sa();
            return n = new e.Ta(r.description), r.ve(0, t), n.nf(t), r.ve(1, t), n.lineTo(t), n;
          }
          return e.Zt.RO(r);
        }, f.VS = function(r) {
          if (r.B()) return !0;
          var n = r.getType();
          return n == 33 || n == 197 || !e.Vk.yd(n) && (n == 550 ? r.I() == 1 : n == 1607 ? r.da() == 1 && 2 >= r.I() : r.da() == 1 && (2 >= r.I() || e.Zt.JG(r, 0)));
        }, f;
      }();
      e.DC = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 17;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h, s) {
          return new e.nL(n, t, i, h, s);
        }, r.instance = null, r;
      }(e.Je);
      e.mL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h) {
          if (this.Tf = null, n == null || t == null) throw e.i.fa("invalid argument");
          this.qT = r, this.nA = n, this.lH = t, r = e.ta.mv(n, t), this.qa = e.ta.Wd(i, r, !0), this.kH = -1, this.nd = h;
        }
        return f.prototype.La = function() {
          return 0;
        }, f.prototype.next = function() {
          return this.RQ(), ++this.kH < this.Tf.length ? this.Tf[this.kH] : null;
        }, f.prototype.RQ = function() {
          if (this.Tf == null) switch (this.Tf = [], this.nA.getType()) {
            case 1607:
              this.TQ();
              break;
            case 1736:
              this.SQ();
          }
        }, f.prototype.TQ = function() {
          var r = new e.Ta(), n = new e.Ta(), t = new e.Ta();
          this.Tf.push(r), this.Tf.push(n);
          var i = [];
          e.LK.JK(this.qT, this.nA, this.lH, this.qa, i, this.nd);
          for (var h = 0; h < i.length; h++) {
            var s = i[h];
            if (s.bt == 0) r.add(s.X, !1);
            else if (s.bt == 1 || s.bt == 2) n.add(s.X, !1);
            else if (s.bt == 3) this.Tf.push(s.X);
            else {
              if (s.bt != 4) throw e.i.fa("internal");
              t.add(s.X, !1);
            }
          }
          t.B() || r.B() && n.B() && !(3 <= this.Tf.length) || this.Tf.push(t), r.B() && n.B() && 3 > this.Tf.length && (this.Tf.length = 0);
        }, f.prototype.SQ = function() {
          var r = new e.ia(0), n = new e.gd(), t = n.aF(), i = n.Ib(this.nA), h = n.Ib(this.lH), s = new e.Fg();
          try {
            s.Ft(n, this.qa, this.nd), s.dl(t, i, h, r);
            var o = n.Ne(i), a = new e.Da(), u = new e.Da();
            for (this.Tf.length = 0, this.Tf.push(a), this.Tf.push(u), i = 0; i < r.size; i++) {
              var c = new e.gd(), l = c.Ib(o), p = c.Ib(n.Ne(r.get(i)));
              s.dr(c, this.nd);
              var y = s.Av(l, p), d = c.Ne(y);
              if (!d.B()) {
                var g = n.KF(r.get(i), t);
                g == 2 ? a.add(d, !1) : g == 1 ? u.add(d, !1) : this.Tf.push(d);
                var b = new e.gd();
                l = b.Ib(o), p = b.Ib(n.Ne(r.get(i))), s.dr(b, this.nd), o = b.Ne(s.im(l, p));
              }
            }
            !o.B() && 0 < r.size && this.Tf.push(o), a.B() && u.B() && (this.Tf.length = 0);
          } finally {
            s.Ug();
          }
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.nL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 18;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i) {
          if (n instanceof e.aa) return n = new e.Zc(n), this.V(n, t, i).next();
          if (0 >= t) throw e.i.N();
          return new e.oL(n, t, i);
        }, r.instance = null, r;
      }(e.Je);
      e.Xl = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n) {
          this.ya = -1, this.Rd = r, this.Ps = n;
        }
        return f.prototype.La = function() {
          return this.ya;
        }, f.prototype.next = function() {
          var r;
          return (r = this.Rd.next()) != null ? (this.ya = this.Rd.La(), this.NP(r)) : null;
        }, f.prototype.NP = function(r) {
          if (r.B() || 1 > r.Db()) return r;
          var n = r.getType();
          if (n == 1736 || n == 1607) return this.Ny(r);
          if (e.aa.yd(n)) return this.PP(r);
          if (n == 197) return this.OP(r);
          throw e.i.Qa();
        }, f.prototype.PP = function(r) {
          if (r.Qb() <= this.Ps) return r;
          var n = new e.Ta(r.description);
          return n.oc(r, !0), this.Ny(n);
        }, f.prototype.OP = function(r) {
          var n = new e.Da(r.description);
          n.ad(r, !1);
          var t = new e.l();
          return r.A(t), r = t.ca(), t.R() <= this.Ps && r <= this.Ps ? n : this.Ny(n);
        }, f.prototype.Ny = function(r) {
          for (var n = r.Ia(), t = r.Ga(); t.$a(); ) for (var i = !0; t.Ha(); ) {
            var h = t.ha();
            if (h.getType() != 322) throw e.i.fa("not implemented");
            var s = t.On(), o = h.Qb();
            if (o > this.Ps) {
              var a = Math.ceil(o / this.Ps);
              o = new e.Sa(r.description), i && (h.To(o), n.nf(o));
              var u = i = 1 / a, c = 0;
              for (--a; c < a; c++) h.Tw(u, o), n.lineTo(o), u += i;
              s ? n.Ap() : (h.Po(o), n.lineTo(o));
            } else s ? n.Ap() : n.oc(h, i);
            i = !1;
          }
          return n;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.oL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.getType = function() {
          return 2;
        }, r.prototype.V = function(n, t, i, h) {
          return n instanceof e.aa ? (n = new e.Zc(n), t = new e.Zc(t), this.V(n, t, i, h).next()) : new e.qL(n, t, i, h);
        }, r.im = function(n, t, i, h) {
          if (n.B() || t.B()) return n;
          var s = n.Db(), o = t.Db();
          if (s > o) return n;
          var a = n.getType(), u = t.getType(), c = new e.l(), l = new e.l(), p = new e.l();
          n.A(c), t.A(l), p.K(c), p.Zb(l);
          var y = (p = e.ta.Wd(i, p, !0)) * Math.sqrt(2) * 1.00001, d = new e.l();
          if (d.K(c), d.W(y, y), !d.isIntersecting(l)) return n;
          if (s == 1 && o == 2) return r.KV(n, t, u, i, h);
          if (a == 33) switch (e.Vk.yd(u) ? (i = new e.Ta(t.description), i.oc(t, !0)) : i = t, u) {
            case 1736:
              return r.XU(n, i, p);
            case 1607:
              return r.YU(n, i, p);
            case 550:
              return r.VU(n, i, p);
            case 197:
              return r.UU(n, i, p);
            case 33:
              return r.WU(n, i, p);
            default:
              throw e.i.N();
          }
          else if (a == 550) switch (u) {
            case 1736:
              return r.nU(n, t, p);
            case 197:
              return r.lU(n, t, p);
            case 33:
              return r.mU(n, t, p);
          }
          return e.Fg.im(n, t, i, h);
        }, r.XU = function(n, t, i) {
          return e.hd.KG(t, n, i) == 0 ? n : n.Ia();
        }, r.YU = function(n, t, i) {
          var h = n.D();
          t = t.Ga();
          for (var s = i * Math.sqrt(2) * 1.00001, o = s * s, a = new e.l(); t.$a(); ) for (; t.Ha(); ) {
            var u = t.ha();
            if (u.A(a), a.W(s, s), a.contains(h)) {
              if (u.qs(h, i)) return n.Ia();
              var c = u.ac();
              if (e.h.yc(h, c) <= o || (c = u.wc(), e.h.yc(h, c) <= o)) return n.Ia();
            }
          }
          return n;
        }, r.VU = function(n, t, i) {
          var h = t.ub(0);
          t = t.I();
          var s = n.D(), o = new e.h();
          i = i * Math.sqrt(2) * 1.00001, i *= i;
          for (var a = 0; a < t; a++) if (h.tc(2 * a, o), e.h.yc(o, s) <= i) return n.Ia();
          return n;
        }, r.UU = function(n, t, i) {
          var h = new e.l();
          return t.A(h), h.W(i, i), t = n.D(), h.contains(t) ? n.Ia() : n;
        }, r.WU = function(n, t, i) {
          i = i * Math.sqrt(2) * 1.00001, i *= i;
          var h = n.D();
          return t = t.D(), e.h.yc(h, t) <= i ? n.Ia() : n;
        }, r.nU = function(n, t, i) {
          var h = new e.l();
          t.A(h), h.W(i, i);
          for (var s = n.I(), o = !1, a = [], u = 0; u < s; u++) a[u] = !1;
          var c = new e.h();
          for (u = 0; u < s; u++) n.D(u, c), h.contains(c) && e.hd.Yd(t, c, i) != 0 && (o = !0, a[u] = !0);
          if (!o) return n;
          for (t = n.Ia(), u = 0; u < s; u++) a[u] || t.Fd(n, u, u + 1);
          return t;
        }, r.lU = function(n, t, i) {
          var h = new e.l();
          t.A(h), h.W(i, i), t = n.I();
          var s = !1;
          i = [];
          for (var o = 0; o < t; o++) i[o] = !1;
          var a = new e.h();
          for (o = 0; o < t; o++) n.D(o, a), h.contains(a) && (s = !0, i[o] = !0);
          if (!s) return n;
          for (h = n.Ia(), o = 0; o < t; o++) i[o] || h.Fd(n, o, o + 1);
          return h;
        }, r.mU = function(n, t, i) {
          var h = n.ub(0), s = n.I(), o = t.D(), a = new e.h(), u = !1;
          t = [];
          for (var c = 0; c < s; c++) t[c] = !1;
          for (i = (c = i * Math.sqrt(2) * 1.00001) * c, c = 0; c < s; c++) h.tc(2 * c, a), e.h.yc(a, o) <= i && (u = !0, t[c] = !0);
          if (!u) return n;
          for (h = n.Ia(), c = 0; c < s; c++) t[c] || h.Fd(n, c, c + 1);
          return h;
        }, r.KV = function(n, t, i, h, s) {
          var o = new e.Fh();
          n.bn(o);
          var a = new e.l();
          return t.A(a), o.Zb(a), o.W(0.1 * o.R(), 0.1 * o.ca()), (a = new e.Da()).ad(o, !1), i == 1736 ? a.add(t, !0) : a.ad(t, !0), e.Xj.local().V(n, a, h, s);
        }, r.instance = null, r;
      }(e.Je);
      e.kp = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i) {
          this.ts = n == null, this.ya = -1, this.Rd = r, this.$z = t, this.wT = n.next(), this.Ub = i;
        }
        return f.prototype.next = function() {
          return this.ts ? null : (r = this.Rd.next()) != null ? (this.ya = this.Rd.La(), e.kp.im(r, this.wT, this.$z, this.Ub)) : null;
          var r;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.qL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function r(n) {
          this.nd = n, this.Bj = new e.l(), this.Bj.Oa(), this.oh = new e.l(), this.oh.Oa();
        }
        return r.prototype.Nt = function() {
          var n = this.Bj.v;
          this.Bj.v = this.oh.v, this.oh.v = n, n = this.Bj.C, this.Bj.C = this.oh.C, this.oh.C = n, n = this.Bj.G, this.Bj.G = this.oh.G, this.oh.G = n, n = this.Bj.H, this.Bj.H = this.oh.H, this.oh.H = n;
        }, r.prototype.eQ = function(n, t) {
          if (this.nd != null && !this.nd.progress(-1, -1)) throw e.i.fu("user_canceled");
          var i = !this.Bj.isIntersecting(this.oh);
          return e.aa.Hc(n.getType()) && e.aa.Hc(t.getType()) ? n.I() > t.I() ? this.gE(n, t, i) : (this.Nt(), n = this.gE(t, n, i), this.Nt(), n) : n.getType() == 550 && e.aa.Hc(t.getType()) ? (n = this.hE(t, n, i), this.Nt(), n) : t.getType() == 550 && e.aa.Hc(n.getType()) ? this.hE(n, t, i) : n.getType() == 550 && t.getType() == 550 ? n.I() > t.I() ? this.iE(n, t) : (this.Nt(), n = this.iE(t, n), this.Nt(), n) : 0;
        }, r.prototype.gE = function(n, t, i) {
          var h = n.Ga(), s = t.Ga(), o = new e.l(), a = new e.l(), u = 17976931348623157e292;
          if (!i && this.pY(n, t, h, s)) return 0;
          for (; h.$a(); ) for (; h.Ha(); ) if ((n = h.ha()).A(o), !(o.px(this.oh) > u)) {
            for (; s.$a(); ) for (; s.Ha(); ) if ((t = s.ha()).A(a), o.px(a) < u && (t = n.tb(t, i), (t *= t) < u)) {
              if (t == 0) return 0;
              u = t;
            }
            s.Zi();
          }
          return Math.sqrt(u);
        }, r.prototype.hE = function(n, t, i) {
          var h = n.Ga(), s = new e.l(), o = 17976931348623157e292, a = new e.h(), u = t.I();
          for (i = !i && n.getType() == 1736; h.$a(); ) for (; h.Ha(); ) {
            var c = h.ha();
            if (c.A(s), !(1 < u && s.px(this.oh) > o)) {
              for (var l = 0; l < u; l++) {
                if (t.D(l, a), i && e.hd.Yd(n, a, 0) != 0) return 0;
                var p = c.fe(a, !1);
                if (a.sub(c.hc(p)), (p = a.Sk()) < o) {
                  if (p == 0) return 0;
                  o = p;
                }
              }
              i = !1;
            }
          }
          return Math.sqrt(o);
        }, r.prototype.iE = function(n, t) {
          for (var i, h = 17976931348623157e292, s = new e.h(), o = new e.h(), a = n.I(), u = t.I(), c = 0; c < a; c++) if (n.D(c, s), !(1 < u && this.oh.iK(s) > h)) {
            for (var l = 0; l < u; l++) if (t.D(l, o), (i = e.h.yc(s, o)) < h) {
              if (i == 0) return 0;
              h = i;
            }
          }
          return Math.sqrt(h);
        }, r.prototype.pY = function(n, t, i, h) {
          if (n.getType() == 1736) {
            for (; h.$a(); ) if (h.Ha()) {
              var s = h.ha();
              if (e.hd.Yd(n, s.wc(), 0) != 0) return !0;
            }
            h.Zi();
          }
          if (t.getType() == 1736) {
            for (; i.$a(); ) if (i.Ha() && (n = i.ha(), e.hd.Yd(t, n.wc(), 0) != 0)) return !0;
            i.Zi();
          }
          return !1;
        }, r.prototype.gm = function(n, t) {
          return n.B() || t.B() ? NaN : (n.A(this.Bj), t.A(this.oh), this.eQ(n, t));
        }, r;
      }(), f = function(r) {
        function n() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return J(n, r), n.prototype.V = function(t, i, h) {
          if (t == null || i == null) throw e.i.N();
          if (t.B() || i.B()) return NaN;
          var s = t.getType(), o = i.getType();
          if (s == 33) {
            if (o == 33) return e.h.tb(t.D(), i.D());
            if (o == 197) return h = new e.l(), i.A(h), h.tb(t.D());
            (s = new e.de()).add(t), t = s;
          } else if (s == 197) {
            if (o == 197) return o = new e.l(), t.A(o), h = new e.l(), i.A(h), h.tb(o);
            (s = new e.Da()).ad(t, !1), t = s;
          }
          return o == 33 ? ((o = new e.de()).add(i), i = o) : o == 197 && ((o = new e.Da()).ad(i, !1), i = o), new v(h).gm(t, i);
        }, n.local = function() {
          return n.instance === null && (n.instance = new n()), n.instance;
        }, n.prototype.getType = function() {
          return 14;
        }, n.instance = null, n;
      }(e.Je);
      e.rL = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i) {
          this.zH = r, this.DH = n, this.nd = i, this.$G = t;
        }
        return f.prototype.next = function() {
          var r = this.zH.next();
          return r == null ? null : this.zC(r);
        }, f.prototype.La = function() {
          return this.zH.La();
        }, f.prototype.zC = function(r) {
          var n = r.getType();
          if (e.aa.Rn(n)) return r;
          if (n == 197) return (n = new e.Da(r.description)).ad(r, !1), this.zC(n);
          if (r.B()) return r;
          if (r == null) throw e.i.Qa();
          n = r.Ia();
          for (var t = new e.yb(), i = 0, h = r.da(); i < h; i++) this.TK(r, i, n, t);
          return n;
        }, f.prototype.TK = function(r, n, t, i) {
          if (!(2 > r.Ja(n))) {
            var h = r.Ba(n), s = r.Vc(n) - 1, o = r.ub(0), a = r.dc(n), u = new e.ia(0);
            u.Jb(r.Ja(n) + 1);
            var c = new e.ia(0);
            for (c.Jb(r.Ja(n) + 1), u.add(a ? h : s), u.add(h), h = new e.h(); 1 < u.size; ) {
              var l = u.Fc();
              u.If();
              var p = u.Fc();
              r.D(l, h), i.Dc(h), r.D(p, h), i.Qc(h), 0 <= (p = this.SK(i, h, o, l, p, s)) ? (u.add(p), u.add(l)) : c.add(l);
            }
            if (a || c.add(u.get(0)), c.size == u.size) t.addPath(r, n, !0);
            else if (2 <= c.size && (!this.$G || c.size != 2 || !(a || e.h.tb(r.Na(c.get(0)), r.Na(c.get(1))) <= this.DH))) {
              for (n = new e.Sa(), i = 0, s = c.size; i < s; i++) r.ve(c.get(i), n), i == 0 ? t.nf(n) : t.lineTo(n);
              a && (this.$G || c.size != 2 || t.lineTo(n), t.Ap());
            }
          }
        }, f.prototype.SK = function(r, n, t, i, h, s) {
          var o = h - 1;
          for (h <= i && (o = s), s = h = -1, i += 1; i <= o; i++) {
            t.tc(2 * i, n);
            var a = n.x, u = n.y;
            r.hc(r.fe(n, !1), n), n.x -= a, n.y -= u, (a = n.length()) > this.DH && a > s && (h = i, s = a);
          }
          return h;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.sL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 29;
        }, r.prototype.V = function(n, t, i, h) {
          return n instanceof e.aa ? (n = new e.Zc(n), this.V(n, t, i, h).next()) : new e.sL(n, t, i, h);
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.instance = null, r;
      }(e.Je);
      e.EC = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 21;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h, s, o, a, u) {
          return n instanceof e.aa ? (u = new e.Zc(n), this.V(u, t, i, [h], s, o, !1, a).next()) : a === !0 ? (i = new e.GC(n, t, i, h, s, !1, !1, u), e.Gh.local().V(i, t, u)) : new e.GC(n, t, i, h, s, !1, !1, u);
        }, r.instance = null, r;
      }(e.Je);
      e.FC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h, s, o, a) {
          if (s) throw e.i.Ie();
          if (n == null) throw e.i.N();
          this.ya = -1, this.Ms = r, this.vg = n, this.ze = t, this.Cs = i, this.$n = h, this.eo = -1, this.Ub = a, this.uT = new e.l(), this.uT.Oa();
        }
        return f.prototype.next = function() {
          for (var r; (r = this.Ms.next()) != null; ) return this.ya = this.Ms.La(), this.eo + 1 < this.Cs.length && this.eo++, this.$Q(r, this.Cs[this.eo]);
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.$Q = function(r, n) {
          return e.VK.buffer(r, this.vg, this.ze, n, this.$n, this.Ub);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.GC = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 24;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i) {
          if (t == null) throw e.i.N();
          if (n.B() || 1 > n.Db()) return 0;
          if (i == 4) throw e.i.Ie();
          var h = e.cb.sc(t), s = e.cb.vv(h), o = e.cb.ev(h);
          s *= 2 - s;
          var a = h.Hd().ai, u = n.getType();
          if (u == 1736 || u == 197) var c = n.mg();
          else e.aa.yd(u) ? (c = new e.Ta(n.description)).oc(n, !0) : c = n;
          if (h.Nb(t) == 0) {
            if (e.cb.Wc(t)) {
              c = e.Hh.lj(c, t), u == 1607 && c == n && (c = e.aa.jg(n)), n = new e.Nc(), e.cb.gh(t).cn(n), u = 0;
              for (var l = c.I(); u < l; u++) {
                var p = c.Na(u);
                p.x = e.Hh.Zm(p.x, n), c.Cb(u, p);
              }
            }
            n = c.Ia(), c = e.Hh.WI(t, h, c, n) ? n : e.cb.zh(c, t, h);
          }
          return this.hQ(c, i, o, s, a);
        }, r.prototype.hQ = function(n, t, i, h, s) {
          var o = new e.ga(0), a = 0;
          for (n = n.Ga(); n.$a(); ) for (; n.Ha(); ) {
            var u = n.ha(), c = u.ac();
            u = u.wc(), c.scale(s), u.scale(s), e.kb.wd(i, h, c.x, c.y, u.x, u.y, o, null, null, t), a += o.u;
          }
          return a;
        }, r.instance = null, r;
      }(e.Je);
      e.vL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 18;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h, s) {
          return n instanceof e.aa ? (n = new e.Zc(n), this.V(n, t, i, h, s).next()) : new e.uL(n, i, h, t, -1, -1, s);
        }, r.instance = null, r;
      }(e.Je);
      e.tL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h, s) {
          if (0 < s || t != 4 && 0 < h) throw e.i.Ie();
          if (n == null) throw e.i.N();
          this.ya = -1, this.Ms = r, this.vg = n, this.ze = t, this.DT = i, this.CT = h;
        }
        return f.prototype.next = function() {
          for (var r; (r = this.Ms.next()) != null; ) return this.ya = this.Ms.La(), this.Zy(r);
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.Zy = function(r) {
          return e.cj.Qr(r, this.vg, this.ze, this.DT, this.CT, this.Ub);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.uL = v;
    }(k || (k = {})), function(e) {
      (function(v) {
        v[v.Unknown = 0] = "Unknown", v[v.Contains = 1] = "Contains", v[v.Within = 2] = "Within", v[v.Equals = 3] = "Equals", v[v.Disjoint = 4] = "Disjoint", v[v.Touches = 8] = "Touches", v[v.Crosses = 16] = "Crosses", v[v.Overlaps = 32] = "Overlaps", v[v.NoThisRelation = 64] = "NoThisRelation", v[v.Intersects = 1073741824] = "Intersects", v[v.IntersectsOrDisjoint = 1073741828] = "IntersectsOrDisjoint";
      })(e.cL || (e.cL = {})), e.wL = function() {
        function v() {
        }
        return v.nW = function(f, r) {
          var n = f.getType(), t = r.getType();
          if (e.aa.xj(n)) {
            var i = f.Bb;
            if (i != null && (i = i.Fk) != null) {
              if (t == 33) {
                var h = r.D();
                i = i.So(h.x, h.y);
              } else h = new e.l(), r.A(h), i = i.Ro(h);
              if (i == 1) return 1;
              if (i == 0) return 4;
            }
          }
          if (e.aa.xj(t) && (i = r.Bb) != null && (i = i.Fk) != null) {
            if (n == 33 ? (f = f.D(), i = i.So(f.x, f.y)) : (r = new e.l(), f.A(r), i = i.Ro(r)), i == 1) return 2;
            if (i == 0) return 4;
          }
          return 0;
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.getType = function() {
          return 15;
        }, r.prototype.V = function(n, t, i, h, s) {
          return n instanceof e.aa ? (n = new e.Zc(n), t = new e.Zc(t), this.V(n, t, i, h, s === void 0 ? -1 : s).next()) : s === void 0 ? new e.HC(n, t, i, h, -1) : new e.HC(n, t, i, h, s);
        }, r.prototype.wn = function(n, t, i) {
          this.Iu(n) && (t = e.ta.kj(t, n, !1), n.fj(i) || n.lu(t, i));
        }, r.prototype.Iu = function(n) {
          return e.Nx.zE(n);
        }, r.instance = null, r;
      }(e.Je);
      e.Xj = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h) {
          if (this.ts = n == null, this.ya = -1, this.Rd = r, this.vg = t, this.Se = n.next(), this.Dj = this.Se.getType(), this.Ub = i, this.Fi = h, this.Fi != -1 && (0 >= this.Fi || 7 < this.Fi)) throw e.i.N("bad dimension mask");
        }
        return f.prototype.next = function() {
          if (this.ts) return null;
          if (this.zw != null) {
            var r = this.zw.next();
            if (r != null) return r;
            this.zw = null;
          }
          for (; (r = this.Rd.next()) != null; ) return this.ya = this.Rd.La(), this.Fi == -1 ? r = this.Ea(r) : (this.zw = this.PS(r), r = this.zw.next()), r;
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.Ea = function(r) {
          var n = this.zK(r);
          if (n != null) return n;
          n = e.ta.mv(this.Se, r);
          var t = e.ta.Wd(this.vg, n, !0);
          n = new e.l(), this.Se.A(n);
          var i = new e.l();
          return r.A(i), n.W(2 * t, 2 * t), n.Ea(i), n.W(100 * t, 100 * t), t = e.Ud.clip(this.Se, n, 0, 0), r = e.Ud.clip(r, n, 0, 0), e.Fg.Av(r, t, this.vg, this.Ub);
        }, f.prototype.QI = function(r, n, t) {
          var i = 0;
          if (1 & n) t[0] == null && (t[0] = new e.de(r)), i++;
          else for (var h = 0; h < t.length - 1; h++) t[h] = t[h + 1];
          if (2 & n) t[i] == null && (t[i] = new e.Ta(r)), i++;
          else for (h = i; h < t.length - 1; h++) t[h] = t[h + 1];
          if (4 & n) t[i] == null && (t[i] = new e.Da(r)), i++;
          else for (h = i; h < t.length - 1; h++) t[h] = t[h + 1];
          if (i != 3) {
            for (r = [], h = 0; h < i; h++) r[h] = t[h];
            return new e.Zc(r);
          }
          return new e.Zc(t);
        }, f.prototype.PS = function(r) {
          var n = this.zK(r);
          if (n != null) {
            var t = [null, null, null];
            return t[n.Db()] = n, this.QI(r.description, this.Fi, t);
          }
          n = e.ta.mv(this.Se, r), t = e.ta.Wd(this.vg, n, !0), n = new e.l(), this.Se.A(n), n.W(2 * t, 2 * t);
          var i = new e.l();
          return r.A(i), n.Ea(i), n.W(100 * t, 100 * t), t = e.Ud.clip(this.Se, n, 0, 0), n = e.Ud.clip(r, n, 0, 0), t = e.Fg.Pz(n, t, this.vg, this.Ub), this.QI(r.description, this.Fi, t);
        }, f.prototype.zK = function(r) {
          var n = e.ta.mv(r, this.Se), t = e.ta.Wd(this.vg, n, !0);
          n = r.getType();
          var i = r.B(), h = this.Se.B();
          if (!(h = i || h)) {
            h = new e.l(), r.A(h);
            var s = new e.l();
            this.Se.A(s), s.W(2 * t, 2 * t), h = !h.isIntersecting(s);
          }
          if (!h) if ((s = e.wL.nW(this.Se, r)) == 4) h = !0;
          else {
            if (2 & s) return this.Se;
            if (1 & s) return r;
          }
          if (h) return (t = e.aa.tf(n)) < (h = e.aa.tf(this.Dj)) ? f.HB(r, i) : t > h || t == 0 && n == 550 && this.Dj == 33 ? this.nJ() : f.HB(r, i);
          if ((this.Fi == -1 || this.Fi == 4) && n == 197 && this.Dj == 197) return t = this.Se, n = new e.l(), r.A(n), i = new e.l(), t.A(i), n.Ea(i), t = new e.Fh(), r.copyTo(t), t.Xo(n), t;
          if (n == 197 && e.aa.tf(this.Dj) == 0 || this.Dj == 197 && e.aa.tf(n) == 0) return i = n == 197 ? r : this.Se, r = n == 197 ? this.Se : r, n = new e.l(), i.A(n), e.Ud.clip(r, n, t, 0);
          if (e.aa.tf(n) == 0 && 0 < e.aa.tf(this.Dj) || 0 < e.aa.tf(n) && e.aa.tf(this.Dj) == 0) {
            if (t = e.ta.kj(this.vg, r, !1), n == 550 || n == 33) return e.Fg.zG(r, this.Se, t);
            if (this.Dj == 550 || this.Dj == 33) return e.Fg.zG(this.Se, r, t);
            throw e.i.Qa();
          }
          return this.Fi != -1 && this.Fi != 2 || n != 1607 || this.Dj != 1736 ? this.Fi != -1 && this.Fi != 2 || n != 1736 || this.Dj != 1607 ? null : this.wK(this.Se, r) : this.wK(r, this.Se);
        }, f.prototype.wK = function(r, n) {
          var t = r, i = n, h = e.ta.kj(this.vg, n, !1), s = new e.l();
          i.A(s);
          var o = new e.l();
          t.A(o), o.W(2 * h, 2 * h), s.Ea(o), s.W(10 * h, 10 * h), t = r = e.Ud.clip(r, s, 0, 0), o = new e.ia(0);
          var a = -1, u = i.Bb;
          if (u != null) {
            var c = u.Fk;
            if (c != null) {
              a = 0, o.Jb(t.I() + t.da());
              for (var l = new e.l(), p = t.Ga(); p.$a(); ) for (; p.Ha(); ) {
                p.ha().A(l);
                var y = c.Ro(l);
                y == 1 ? o.add(1) : y == 0 ? o.add(0) : (o.add(-1), a++);
              }
            }
          }
          if (5 < n.I() && (u = (i = n = e.Ud.clip(n, s, 0, 0)).Bb), 0 > a && (a = t.yz()), s = t.I() + i.I(), a * i.I() > Math.log(s) * s * 4) return null;
          s = null, a = i.Ga(), u != null && u.Fb != null && (s = u.Fb), s == null && 20 < i.I() && (s = e.ta.nE(i)), r = r.Ia(), i = null, u = t.Ga(), c = [0, 0, 0, 0, 0, 0, 0, 0, 0], l = new e.be(0), p = new e.ig(), y = -1;
          for (var d = 0, g = 0, b = 0 < o.size, x = -1; u.$a(); ) {
            x = u.gb;
            var m = 0;
            for (y = -1, d = 0; u.Ha(); ) {
              var w = b ? e.O.truncate(o.get(g)) : -1;
              g++;
              var j = u.ha();
              if (0 > w) {
                if (s != null) for (i == null ? i = s.vR(j, h) : i.Uo(j, h), w = i.next(); w != -1; w = i.next()) {
                  a.Vb(s.ja(w)), w = a.ha();
                  var M = j.Ea(w, null, c, null, h);
                  for (w = 0; w < M; w++) l.add(c[w]);
                }
                else for (a.Zi(); a.$a(); ) for (; a.Ha(); ) for (w = a.ha(), M = j.Ea(w, null, c, null, h), w = 0; w < M; w++) l.add(c[w]);
                if (0 < l.size) {
                  l.Vd(0, l.size, function(C, T) {
                    return C - T;
                  });
                  var A = 0;
                  l.add(1), M = -1, w = 0;
                  for (var z = l.size; w < z; w++) {
                    var N = l.get(w);
                    if (N != A) {
                      var I = !1;
                      if (A != 0 || N != 1 ? (j.ah(A, N, p), A = p.get()) : (A = j, I = !0), 2 <= m) {
                        if (r.Dr(t, x, y, d, m == 3), this.QD(n, A.ac(), h) != 1 && this.RD(n, A, h) != 1) return null;
                        r.oc(A, !1), m = 1, d = 0;
                      } else switch (M = this.RD(n, A, h), M) {
                        case 1:
                          I ? 2 > m ? (y = u.wb() - t.Ba(x), d = 1, m = m == 0 ? 3 : 2) : d++ : (r.oc(A, m == 0), m = 1);
                          break;
                        case 0:
                          m = 0, y = -1, d = 0;
                          break;
                        default:
                          return null;
                      }
                      A = N;
                    }
                  }
                } else {
                  if (0 > (w = this.QD(n, j.ac(), h))) return null;
                  w == 1 ? (2 > m && (y = u.wb() - t.Ba(x), m = m == 0 ? 3 : 2), d++) : (y = -1, d = 0);
                }
                l.clear(!1);
              } else w != 0 && w == 1 && (m == 0 ? (m = 3, y = u.wb() - t.Ba(x)) : m == 1 ? (m = 2, y = u.wb() - t.Ba(x)) : d++);
            }
            2 <= m && (r.Dr(t, x, y, d, m == 3), y = -1);
          }
          return r;
        }, f.prototype.QD = function(r, n, t) {
          return e.Dg.wm(r, n, t);
        }, f.prototype.RD = function(r, n, t) {
          var i = n.ac();
          n = n.wc();
          var h = e.Dg.wm(r, i, t), s = e.Dg.wm(r, n, t);
          return h == 1 && s == 0 || h == 0 && s == 1 ? -1 : h == 0 || s == 0 ? 0 : h == 1 || s == 1 ? 1 : ((h = new e.h()).add(i, n), h.scale(0.5), (r = e.Dg.wm(r, h, t)) == 0 ? 0 : r == 1 ? 1 : -1);
        }, f.HB = function(r, n) {
          return n ? r : r.Ia();
        }, f.prototype.nJ = function() {
          return this.yH == null && (this.yH = this.Se.Ia()), this.yH;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.HC = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 28;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h, s, o, a) {
          return n instanceof e.aa ? (n = new e.Zc(n), this.V(n, t, i, h, s, o, a).next()) : new e.xL(n, t, i, h, s, o, a);
        }, r.instance = null, r;
      }(e.Je);
      e.IC = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i, h, s, o) {
          this.ya = -1, this.Rd = r, this.Mj = n, this.Ka = t, this.Ki = i, this.CA = h, this.uH = s, this.nd = o;
        }
        return f.prototype.next = function() {
          var r = this.Rd.next();
          return r != null ? (this.ya = this.Rd.La(), this.jL(r)) : null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.jL = function(r) {
          var n = 0 >= this.uH ? e.ta.kj(this.Mj, r, !1) : this.uH;
          return e.IK.V(r, this.Ka, this.Ki, this.CA, n, this.nd);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.xL = v;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.NK || (e.NK = {}))[v.clipToDomainOnly = 1] = "clipToDomainOnly", v[v.clipWithHorizon = 2] = "clipWithHorizon", v[v.foldAndClipWithHorizon = 3] = "foldAndClipWithHorizon";
      var f = function(r) {
        function n() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return J(n, r), n.prototype.getType = function() {
          return 0;
        }, n.local = function() {
          return n.instance === null && (n.instance = new n()), n.instance;
        }, n.prototype.V = function(t, i, h) {
          return t instanceof e.aa ? (t = new e.Zc(t), this.V(t, i, h).next()) : new e.yL(t, i, h);
        }, n.prototype.transform = function(t, i, h, s) {
          return e.bu.transform(t, i, h, s, !0);
        }, n.prototype.Qt = function(t, i, h, s) {
          return e.bu.Qt(t, i, h, s);
        }, n.instance = null, n;
      }(e.Je);
      e.Hx = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t) {
          this.ya = -1, this.Rd = r, this.MT = n, this.nd = t;
        }
        return f.prototype.next = function() {
          var r = this.Rd.next();
          return r != null ? (this.ya = this.Rd.La(), e.bu.zh(r, this.MT, this.nd)) : null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.yL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function r() {
        }
        return r.prototype.reset = function() {
          this.ph = this.xk = -1, this.us = this.kq = !1;
        }, r.prototype.AQ = function(n, t, i) {
          for (n.Vb(t, i); n.Ha(); ) {
            var h = n.ha();
            if ((h = h.Qb()) != 0) return n.wb();
          }
          for (n.Vb(t, i); n.Ez(); ) if ((h = (h = n.li()).Qb()) != 0) return n.wb();
          return -1;
        }, r.prototype.BQ = function(n, t) {
          for (n.Vb(t, -1); n.Ez(); ) if (n.li().Qb() != 0) return n.wb();
          return -1;
        }, r.prototype.zQ = function(n, t) {
          for (n.Vb(t, -1), n.ha(); n.Ha(); ) if (n.ha().Qb() != 0) return n.wb();
          return -1;
        }, r.prototype.yQ = function(n, t, i, h) {
          if (this.xk = this.AQ(t, i, h), this.xk != -1) {
            t.Vb(this.xk, -1);
            var s = t.ha(), o = s.hc(s.fe(n, !1));
            if (i = e.h.yc(o, n), (h = new e.h()).L(o), h.sub(s.ac()), (o = new e.h()).L(n), o.sub(s.ac()), this.kq = 0 > h.wi(o), this.ph = this.zQ(t, this.xk), this.ph != -1) {
              t.Vb(this.ph, -1);
              var a = (s = t.ha()).fe(n, !1);
              a = s.hc(a);
              var u = e.h.yc(a, n);
              u > i ? this.ph = -1 : (h.L(a), h.sub(s.ac()), o.L(n), o.sub(s.ac()), this.us = 0 > h.wi(o));
            }
            this.ph == -1 && (this.ph = this.BQ(t, this.xk), this.ph != -1 && (t.Vb(this.ph, -1), a = (s = t.ha()).fe(n, !1), a = s.hc(a), (u = e.h.yc(a, n)) > i ? this.ph = -1 : (h.L(a), h.sub(s.ac()), o.L(n), o.sub(s.ac()), this.us = 0 > h.wi(o), n = this.xk, this.xk = this.ph, this.ph = n, n = this.kq, this.kq = this.us, this.us = n)));
          }
        }, r.prototype.cO = function(n, t, i, h, s) {
          return i = i.Ga(), this.yQ(n, i, h, s), this.xk != -1 && this.ph == -1 ? this.kq : this.xk != -1 && this.ph != -1 ? this.kq == this.us ? this.kq : (i.Vb(this.xk, -1), n = i.ha().kg(), i.Vb(this.ph, -1), t = i.ha().kg(), 0 <= n.wi(t)) : t;
        }, r;
      }(), f = function(r) {
        function n() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return J(n, r), n.local = function() {
          return n.instance === null && (n.instance = new n()), n.instance;
        }, n.prototype.getType = function() {
          return 3;
        }, n.prototype.nz = function(t, i, h) {
          var s;
          if (s === void 0 && (s = !1), t.B()) return new e.$l();
          i = i.D();
          var o = t, a = t.getType();
          switch (a == 197 && ((o = new e.Da()).ad(t, !1), a = 1736), a) {
            case 33:
              return this.xI(o, i);
            case 550:
              return this.jI(o, i);
            case 1607:
            case 1736:
              return this.bU(o, i, h, s);
            default:
              throw e.i.fa("not implemented");
          }
        }, n.prototype.oz = function(t, i) {
          if (t.B()) return new e.$l();
          i = i.D();
          var h = t, s = t.getType();
          switch (s == 197 && ((h = new e.Da()).ad(t, !1), s = 1736), s) {
            case 33:
              return this.xI(h, i);
            case 550:
            case 1607:
            case 1736:
              return this.jI(h, i);
            default:
              throw e.i.fa("not implemented");
          }
        }, n.prototype.pz = function(t, i, h, s) {
          if (0 > s) throw e.i.N();
          if (t.B()) return [];
          i = i.D();
          var o = t, a = t.getType();
          switch (a == 197 && ((o = new e.Da()).ad(t, !1), a = 1736), a) {
            case 33:
              return this.TU(o, i, h, s);
            case 550:
            case 1607:
            case 1736:
              return this.tU(o, i, h, s);
            default:
              throw e.i.fa("not implemented");
          }
        }, n.prototype.bU = function(t, i, h, s) {
          if (t.getType() == 1736 && h && (h = new e.l(), t.A(h), h = e.ta.Wd(null, h, !1), (s ? e.hd.Yd(t, i, 0) : e.hd.Yd(t, i, h)) != 0)) {
            var o = new e.$l(i, 0, 0);
            return s && o.WJ(!0), o;
          }
          var a = t.Ga();
          o = new e.h();
          for (var u = h = -1, c = 17976931348623157e292, l = 0; a.$a(); ) for (; a.Ha(); ) {
            var p = a.ha();
            p = p.hc(p.fe(i, !1));
            var y = e.h.yc(p, i);
            y < c ? (l = 1, o = p, h = a.wb(), u = a.gb, c = y) : y == c && l++;
          }
          return o = new e.$l(o, h, Math.sqrt(c)), s && (a.Vb(h, u), p = a.ha(), s = 0 > e.h.Uq(i, p.ac(), p.wc()), 1 < l && ((l = new v()).reset(), s = l.cO(i, s, t, h, u)), o.WJ(s)), o;
        }, n.prototype.xI = function(t, i) {
          return t = t.D(), i = e.h.tb(t, i), new e.$l(t, 0, i);
        }, n.prototype.jI = function(t, i) {
          for (var h = t.ub(0), s = t.I(), o = t = 0, a = 0, u = 17976931348623157e292, c = 0; c < s; c++) {
            var l = new e.h();
            h.tc(2 * c, l);
            var p = e.h.yc(l, i);
            p < u && (o = l.x, a = l.y, t = c, u = p);
          }
          return (i = new e.$l()).ey(o, a, t, Math.sqrt(u)), i;
        }, n.prototype.TU = function(t, i, h, s) {
          return s == 0 ? [] : (h *= h, t = t.D(), (i = e.h.yc(t, i)) <= h ? (h = [], (s = new e.$l()).ey(t.x, t.y, 0, Math.sqrt(i)), h[0] = s) : h = [], h);
        }, n.prototype.tU = function(t, i, h, s) {
          if (s == 0) return [];
          var o = t.ub(0), a = t.I();
          t = [], h *= h;
          for (var u = 0; u < a; u++) {
            var c = o.read(2 * u), l = o.read(2 * u + 1), p = i.x - c, y = i.y - l;
            (p = p * p + y * y) <= h && ((y = new e.$l()).ey(c, l, u, Math.sqrt(p)), t.push(y));
          }
          return i = t.length, t.sort(function(d, g) {
            return d.Ka < g.Ka ? -1 : d.Ka == g.Ka ? 0 : 1;
          }), s >= i || (t.length = s), t.slice(0);
        }, n.instance = null, n;
      }(e.Je);
      e.Ix = f;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 4;
        }, r.prototype.V = function(n, t, i, h, s) {
          return e.am.yB(n, t, i, h, s);
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.Iu = function(n) {
          return e.Vt.wy(n);
        }, r.prototype.wn = function(n, t, i) {
          e.Vt.CD(n, t, i);
        }, r.instance = null, r;
      }(e.Je);
      e.zL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 33;
        }, r.prototype.V = function(n, t, i, h, s) {
          return n === 1073741824 ? !e.ud.zB(t, i, h, 4, s) : e.ud.zB(t, i, h, n, s);
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.Iu = function(n) {
          return e.Vt.wy(n);
        }, r.prototype.wn = function(n, t, i) {
          e.Vt.CD(n, t, i);
        }, r.instance = null, r;
      }(e.Je);
      e.dj = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i) {
          if (this.nd = i, this.rT = t, this.ya = -1, r == null) throw e.i.N();
          this.yk = r, this.Mj = n;
        }
        return f.prototype.next = function() {
          var r;
          if ((r = this.yk.next()) != null) {
            if (this.ya = this.yk.La(), this.nd != null && !this.nd.progress(-1, -1)) throw e.i.fu("user_canceled");
            return this.eC(r);
          }
          return null;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.eC = function(r) {
          if (r == null) throw e.i.N();
          return e.Jx.cK(r, this.Mj, this.rT, this.nd);
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.AL = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 26;
        }, r.prototype.V = function(n, t, i, h) {
          return n instanceof e.aa ? (n = new e.Zc(n), this.V(n, t, i, h).next()) : new e.AL(n, t, i, h);
        }, r.prototype.rs = function(n, t, i, h, s) {
          return 0 < (h !== void 0 ? e.Jx.rs(n, t, i, h, s) : e.Jx.rs(n, t, !1, null, i));
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.instance = null, r;
      }(e.Je);
      e.Yl = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function s() {
          this.yq = 0;
        }
        return s.prototype.nX = function(o) {
          this.yq &= -2, this.yq |= o ? 1 : 0;
        }, s.prototype.Wp = function() {
          return (1 & this.yq) != 0;
        }, s.prototype.XF = function() {
          return this.Wp() ? 0 : 1;
        }, s;
      }();
      e.xY = v;
      var f = function() {
      }, r = function(s, o, a, u) {
        this.x = s, this.y = o, this.Ai = a, this.xm = u;
      }, n = function() {
        function s(o) {
          this.Be = o;
        }
        return s.prototype.compare = function(o, a, u) {
          return o = o.ja(u), a = this.Be.lf.read(2 * a), 0 > (a -= o = this.Be.lf.read(2 * o)) ? -1 : 0 < a ? 1 : 0;
        }, s;
      }(), t = function() {
        function s(o) {
          this.Be = o;
        }
        return s.prototype.compare = function(o, a, u) {
          a = this.Be.hb[a], o = this.Be.hb[o.ja(u)];
          var c = a.Wp(), l = o.Wp();
          u = a.ne.Pe(this.Be.Mo, 0);
          var p = o.ne.Pe(this.Be.Mo, 0);
          return u == p && ((c = 0.5 * ((u = Math.min(c ? a.ne.na : a.ne.la, l ? o.ne.na : o.ne.la)) - this.Be.Mo) + this.Be.Mo) == this.Be.Mo && (c = u), u = a.ne.Pe(c, 0), p = o.ne.Pe(c, 0)), u < p ? -1 : u > p ? 1 : 0;
        }, s;
      }(), i = function() {
        function s(o, a) {
          this.YI = new e.h(), this.parent = o, this.dS = a;
        }
        return s.prototype.nr = function(o, a, u) {
          var c = this.parent, l = this.dS;
          u.Vd(o, a, function(p, y) {
            return c.Mh(p, y, l);
          });
        }, s.prototype.$p = function(o) {
          return o = this.parent.gi.get(o), this.parent.lf.tc(2 * (o >> 1), this.YI), this.YI.y + (1 & o ? this.parent.Oj : -this.parent.Oj);
        }, s;
      }(), h = function() {
        function s(o, a, u, c, l) {
          this.nH = o.description, this.X = o, this.Qg = a, this.Oj = e.ta.kj(this.Qg, o, !1), this.Bo = e.ta.kj(this.Qg, o, !0), this.xA = u, this.oT = this.nH.Aa, this.hb = [], this.po = [], this.mh = new e.jp(), this.fb = new e.Yj(), this.ke = new e.Md(), this.ZG = this.ql = l;
        }
        return s.prototype.eT = function() {
          return this.ZG = !0, (!e.aa.Hc(this.X.getType()) || this.GE() && this.DE(!1)) && this.mO() ? e.aa.Hc(this.X.getType()) ? this.pO() ? this.X.getType() == 1607 ? this.rO() ? 2 : 0 : this.sO() ? this.tO() : 0 : 0 : 2 : 0;
        }, s.prototype.kC = function(o, a) {
          var u = this.lf.read(2 * o);
          o = this.lf.read(2 * o + 1);
          var c = this.lf.read(2 * a);
          a = this.lf.read(2 * a + 1);
          var l = !e.Yt.Cv(u, o, c, a, this.Oj * this.Oj);
          return l || this.X.Db() != 0 && u == c && o == a;
        }, s.prototype.GE = function() {
          for (var o = this.X, a = o.xf ? 3 : 2, u = 0, c = o.da(); u < c; u++) if (o.Ja(u) < a) return this.ke = new e.Md(1, u, 0), !1;
          return !0;
        }, s.prototype.DE = function(o) {
          var a = this.X, u = a.Ga(), c = a.hasAttribute(1);
          for (a = c ? e.ta.wE(this.Qg, a, !1) : 0; u.$a(); ) for (; u.Ha(); ) {
            var l = u.ha();
            if (!(l.Qb() > this.Oj)) {
              if (o && c) {
                var p = l.wv(1, 0);
                if (l = l.wv(1, 0), Math.abs(l - p) > a) continue;
              }
              return this.ke = new e.Md(2, u.wb(), -1), !1;
            }
          }
          return !0;
        }, s.prototype.mO = function() {
          var o = this.X, a = null;
          e.aa.Hc(this.X.getType()) && (a = this.X);
          var u = (this.ZG || this.ql) && a != null, c = o.I();
          this.lf = o.ub(0), this.gi = new e.ia(0), this.gi.Jb(2 * c), this.fi = new e.ia(0), this.fi.Jb(2 * c), u && (this.Fl == null && (this.Fl = new e.ia(0)), this.Fl.Jb(c));
          for (var l = o = 0; l < c; l++) if (this.gi.add(2 * l), this.gi.add(2 * l + 1), this.fi.add(2 * l), this.fi.add(2 * l + 1), u) {
            for (; l >= a.Vc(o); ) o++;
            this.Fl.add(o);
          }
          for (new e.Xt().sort(this.fi, 0, 2 * c, new i(this, u)), this.fb.clear(), this.fb.Vo(new n(this)), this.fb.De(c), a = 0, c *= 2; a < c; a++) if (u = this.fi.get(a), u = (o = this.gi.get(u)) >> 1, (1 & o) == 0) {
            if (o = this.fb.addElement(u, -1), (l = this.fb.we(o)) != -1 && !this.kC(this.fb.ja(l), u)) return this.ke = new e.Md(3, u, this.fb.ja(l)), !1;
            var p = this.fb.lb(o);
            if (p != -1 && !this.kC(this.fb.ja(p), u)) return this.ke = new e.Md(3, u, this.fb.ja(p)), !1;
          } else if (o = this.fb.search(u, -1), l = this.fb.we(o), p = this.fb.lb(o), this.fb.vd(o, -1), l != -1 && p != -1 && !this.kC(this.fb.ja(l), this.fb.ja(p))) return this.ke = new e.Md(3, this.fb.ja(l), this.fb.ja(p)), !1;
          return !0;
        }, s.prototype.pO = function() {
          return 10 > this.X.I() ? this.nO() : this.oO();
        }, s.prototype.oO = function() {
          var o = new e.gd();
          o.Ib(this.X);
          var a = new e.Md();
          return !e.$t.kI(!1, o, this.Oj, a, this.nd) || (a.Jo = o.Ua(a.Jo), a.Ko = o.Ua(a.Ko), this.ke.Wt(a), !1);
        }, s.prototype.nO = function() {
          var o = this.X, a = o.Ga();
          for (o = o.Ga(); a.$a(); ) for (; a.Ha(); ) {
            var u = a.ha();
            if (!a.Qn() || !a.$S()) {
              o.BW(a);
              do
                for (; o.Ha(); ) {
                  var c = o.ha();
                  if ((c = u.zr(c, this.Oj, !0)) != 0) return this.ke = new e.Md(c == 2 ? 5 : 4, a.wb(), o.wb()), !1;
                }
              while (o.$a());
            }
          }
          return !0;
        }, s.prototype.sO = function() {
          var o = this.X;
          this.hb.length = 0, this.po.length = 0, this.Zf = o.Ga(), this.Zf.JB();
          var a = new e.ia(0);
          a.Jb(10);
          var u = NaN, c = 0, l = 0;
          for (o = 2 * o.I(); l < o; l++) {
            var p = this.fi.get(l);
            if (!(1 & (p = this.gi.get(p)))) {
              p >>= 1;
              var y = this.lf.read(2 * p), d = this.lf.read(2 * p + 1);
              if (a.size != 0 && (y != u || d != c)) {
                if (!this.RI(a)) return !1;
                a?.clear(!1);
              }
              a.add(p), u = y, c = d;
            }
          }
          return !!this.RI(a);
        }, s.prototype.rO = function() {
          for (var o = this.X, a = Array(o.da()), u = 0, c = o.da(); u < c; u++) a[u] = o.Nn(u);
          c = new f();
          var l = new e.h();
          u = this.fi.get(0);
          var p = (u = this.gi.get(u)) >> 1;
          this.lf.tc(2 * p, l);
          var y = a[u = this.Fl.get(p)], d = o.Ba(u), g = o.Vc(u) - 1;
          c.el = p == d || p == g, c.ny = this.ql ? !y && c.el : c.el, c.Ai = u, c.x = l.x, c.y = l.y, c.xm = p;
          for (var b = new f(), x = 1, m = this.fi.size; x < m; x++) if (u = this.fi.get(x), (1 & (u = this.gi.get(u))) == 0) {
            p = u >> 1, this.lf.tc(2 * p, l), (u = this.Fl.get(p)) != c.Ai && (y = a[u], d = o.Ba(u), g = o.Vc(u) - 1);
            var w = p == d || p == g, j = this.ql ? !y && c.el : c.el;
            if (b.x = l.x, b.y = l.y, b.Ai = u, b.xm = p, b.ny = j, b.el = w, b.x == c.x && b.y == c.y) {
              if (this.ql) {
                if (!(b.ny && c.ny || b.Ai == c.Ai && (b.el || c.el))) return this.ke = new e.Md(8, b.xm, c.xm), !1;
              } else if (!b.el || !c.el) return this.ke = new e.Md(5, b.xm, c.xm), !1;
            }
            u = c, c = b, b = u;
          }
          return !0;
        }, s.prototype.JE = function() {
          for (var o = this.X, a = [], u = -1, c = !1, l = 0, p = o.da(); l < p; l++) o.Ev(l) && (c = !1, u++, l < p - 1 && (o.Ev(l + 1) || (c = !0))), a[l] = c ? u : -1;
          c = new e.h(), l = this.fi.get(0);
          var y = (l = this.gi.get(l)) >> 1;
          this.lf.tc(2 * y, c), l = this.Fl.get(y), u = new r(c.x, c.y, l, y, a[l]), o = [];
          var d = 1;
          for (p = this.fi.size; d < p; d++) if (l = this.fi.get(d), (1 & (l = this.gi.get(l))) == 0) {
            if (y = l >> 1, this.lf.tc(2 * y, c), l = this.Fl.get(y), (l = new r(c.x, c.y, l, y, a[l])).x == u.x && l.y == u.y) {
              if (l.Ai == u.Ai) return this.ke = new e.Md(9, l.xm, u.xm), !1;
              0 <= a[l.Ai] && a[l.Ai] == a[u.Ai] && (o.length != 0 && o[o.length - 1] == u || o.push(u), o.push(l));
            }
            u = l;
          }
          if (o.length == 0) return !0;
          for (l = new e.jp(!0), e.O.$u(a, -1), c = -1, (d = new e.h()).Rc(), u = 0, p = o.length; u < p; u++) {
            (y = o[u]).x == d.x && y.y == d.y || (c = l.Ph(0), d.x = y.x, d.y = y.y);
            var g = a[y.Ai];
            g == -1 && (g = l.Ph(2), a[y.Ai] = g), l.addElement(g, c), l.addElement(c, g);
          }
          for ((p = new e.ia(0)).Jb(10), u = l.je; u != -1; u = l.qz(u)) if (!(1 & (o = l.PF(u))) && 2 & o) {
            for (o = -1, p.add(u), p.add(-1); 0 < p.size; ) {
              if (c = p.Fc(), p.If(), d = p.Fc(), p.If(), (1 & (y = l.PF(d))) != 0) {
                o = 2 & y ? d : c;
                break;
              }
              for (l.fX(d, 1 | y), y = l.rc(d); y != -1; y = l.lb(y)) (g = l.getData(y)) != c && (p.add(g), p.add(d));
            }
            if (o != -1) {
              for (l = -1, u = 0, p = a.length; u < p; u++) if (a[u] == o) {
                l = u;
                break;
              }
              return this.ke = new e.Md(10, l, -1), !1;
            }
          }
          return !0;
        }, s.prototype.tO = function() {
          var o = this.X;
          if (0 >= o.Ke()) return this.ke = new e.Md(6, o.da() == 1 ? 1 : -1, -1), 0;
          if (o.da() == 1) return this.ql && !this.JE() ? 0 : 2;
          this.to = e.ia.qf(o.da(), 0), this.JA = e.ia.qf(o.da(), -1);
          for (var a = -1, u = 0, c = 0, l = o.da(); c < l; c++) {
            var p = o.Ir(c);
            if (this.to.write(c, 0 > p ? 0 : 256), 0 < p) a = c, u = p;
            else {
              if (p == 0) return this.ke = new e.Md(6, c, -1), 0;
              if ((0 > a || u < Math.abs(p)) && (this.ke = new e.Md(7, c, -1), this.ql)) return 0;
              this.JA.write(c, a);
            }
          }
          for (this.dt = o.da(), this.Om = new e.ia(0), this.Om.Jb(10), l = o.I(), this.Mo = NaN, (o = new e.ia(0)).Jb(10), this.Qq = e.ia.qf(l, -1), this.Hw = e.ia.qf(l, -1), this.zj != null ? this.zj.clear(!1) : this.zj = new e.ia(0), this.zj.Jb(10), this.fb.clear(), this.fb.Vo(new t(this)), a = 0, l *= 2; 0 < this.dt && a < l; a++) if (u = this.fi.get(a), (1 & (u = this.gi.get(u))) == 0) {
            if (u >>= 1, (c = this.lf.read(2 * u + 1)) != this.Mo && o.size != 0) {
              if (!this.ut(o)) return 0;
              o?.clear(!1);
            }
            o.add(u), this.Mo = c;
          }
          return 0 < this.dt && !this.ut(o) ? 0 : this.ql ? this.ke.Jj == 0 && this.JE() ? 2 : 0 : this.ke.Jj == 0 ? 2 : 1;
        }, s.prototype.RI = function(o) {
          if (o.size == 1) return !0;
          for (var a = 0, u = o.size; a < u; a++) {
            var c = o.get(a);
            this.Zf.Vb(c);
            var l = this.Zf.li();
            this.hb.push(this.Su(l, c, this.Zf.gb, !0)), this.Zf.ha(), l = this.Zf.ha(), this.hb.push(this.Su(l, c, this.Zf.gb, !1));
          }
          var p = this;
          for (this.hb.sort(function(g, b) {
            return p.XP(g, b);
          }), (c = this.mh.je) == -1 && (c = this.mh.Ph(0)), this.mh.fn(this.hb.length), a = 0, u = this.hb.length; a < u; a++) this.mh.addElement(c, a);
          a = !0;
          for (var y = u = -1; a && (a = !1, (l = this.mh.rc(c)) != -1); ) for (var d = this.mh.lb(l); d != -1; ) if (u = this.mh.getData(l), y = this.mh.getData(d), (u = this.hb[u].Io) != (y = this.hb[y].Io)) l = d, d = this.mh.lb(l);
          else if (a = !0, this.mh.jd(c, l), l = this.mh.we(d), (d = this.mh.jd(c, d)) == -1 || l == -1) break;
          if (a = this.mh.bs(c), this.mh.LE(c), 0 < a) return this.ke = new e.Md(5, u, y), !1;
          for (a = 0, u = o.size; a < u; a++) this.vB(this.hb[a]);
          return this.hb.length = 0, !0;
        }, s.prototype.ut = function(o) {
          for (var a = 0, u = o.size; a < u; a++) {
            var c = o.get(a), l = this.Qq.read(c);
            if (l != -1) {
              var p = this.fb.ja(l);
              this.zj.add(p), this.fb.vd(l, -1), this.vB(this.hb[p]), this.hb[p] = null, this.Qq.write(c, -1);
            }
            (l = this.Hw.read(c)) != -1 && (p = this.fb.ja(l), this.zj.add(p), this.fb.vd(l, -1), this.vB(this.hb[p]), this.hb[p] = null, this.Hw.write(c, -1));
          }
          for (a = 0, u = o.size; a < u; a++) {
            if (c = o.get(a), this.Zf.Vb(c), (l = this.Zf.li()).na > l.la) {
              var y = this.Zf.wb(), d = this.Su(l, c, this.Zf.gb, !0);
              0 < this.zj.size ? (p = this.zj.Fc(), this.zj.If(), this.hb[p] = d) : (p = this.hb.length, this.hb.push(d)), l = this.fb.addElement(p, -1), this.Qq.read(y) == -1 ? this.Qq.write(y, l) : this.Hw.write(y, l), !(3 & this.to.read(this.Zf.gb)) && this.Om.add(l);
            }
            this.Zf.ha(), (l = this.Zf.ha()).na < l.la && (y = this.Zf.ik(), d = this.Su(l, c, this.Zf.gb, !1), 0 < this.zj.size ? (p = this.zj.Fc(), this.zj.If(), this.hb[p] = d) : (p = this.hb.length, this.hb.push(d)), l = this.fb.addElement(p, -1), this.Qq.read(y) == -1 ? this.Qq.write(y, l) : this.Hw.write(y, l), !(3 & this.to.read(this.Zf.gb)) && this.Om.add(l));
          }
          for (a = 0, u = this.Om.size; a < u && 0 < this.dt; a++) if (l = this.Om.get(a), (3 & this.to.read(this.hb[this.fb.ja(l)].IA)) == 0) {
            o = -1, c = this.fb.we(l);
            var g = l;
            d = null, p = -1;
            for (var b = 0; c != -1 && (p = this.fb.ja(c), p = (d = this.hb[p]).IA, (3 & (b = this.to.read(p))) == 0); ) g = c, c = this.fb.we(c);
            c == -1 ? (y = 1, c = g) : (o = (3 & b) == 1 ? p : this.JA.read(p), y = d.XF() != 0 ? 0 : 1, c = this.fb.lb(c));
            do {
              if (p = this.fb.ja(c), p = (d = this.hb[p]).IA, (3 & (g = this.to.read(p))) == 0) {
                if (y != d.XF()) return this.ke = new e.Md(6, p, -1), !1;
                if (g = 252 & g | (b = y == 0 || d.Wp() ? 2 : 1), this.to.write(p, b), b == 2 && this.ke.Jj == 0 && this.JA.read(p) != o && (this.ke = new e.Md(7, p, -1), this.ql)) return !1;
                if (this.dt--, this.dt == 0) return !0;
              }
              (3 & g) == 1 && (o = p), g = c, c = this.fb.lb(c), y = y != 0 ? 0 : 1;
            } while (g != l);
          }
          return this.Om != null ? this.Om.clear(!1) : this.Om = new e.ia(0), !0;
        }, s.prototype.Su = function(o, a, u, c) {
          if (o.getType() != 322) throw e.i.Qa();
          return (o = this.sP(o)).Io = a, o.IA = u, o.yq = 0, o.nX(c), o;
        }, s.prototype.sP = function(o) {
          if (0 < this.po.length) {
            var a = this.po[this.po.length - 1];
            --this.po.length, o.copyTo(a.ne);
          } else (a = new v()).ne = e.SC.jg(o);
          return a;
        }, s.prototype.vB = function(o) {
          o.ne.getType() == 322 && this.po.push(o);
        }, s.prototype.kU = function() {
          for (var o = this.X.I(), a = new e.ia(0), u = 0; u < o; u++) a.add(u);
          var c = this;
          for (a.Vd(0, o, function(l, p) {
            return c.Ou(l, p);
          }), u = 1; u < o; u++) if (this.Ou(a.get(u - 1), a.get(u)) == 0) return this.ke = new e.Md(3, a.get(u - 1), a.get(u)), 0;
          return 2;
        }, s.prototype.JV = function() {
          return this.GE() && this.DE(!0) ? 2 : 0;
        }, s.prototype.oV = function() {
          return this.eT();
        }, s.prototype.pU = function() {
          for (var o = this.X.I(), a = new e.ia(0), u = 0; u < o; u++) a.add(u);
          var c = this;
          a.Vd(0, o, function(g, b) {
            return c.PO(g, b);
          });
          var l = Array(o);
          for (e.O.$u(l, !1), l[a.get(0)] = !0, u = 1; u < o; u++) {
            var p = a.get(u - 1), y = a.get(u);
            this.Ou(p, y) == 0 ? l[y] = !1 : l[y] = !0;
          }
          a = this.X.Ia(), p = this.X, y = 0;
          var d = 1;
          for (u = 0; u < o; u++) l[u] ? d = u + 1 : (y < d && a.Fd(p, y, d), y = u + 1);
          return y < d && a.Fd(p, y, d), a.Ch(2, this.Bo), a;
        }, s.prototype.NV = function() {
          var o = this.X, a = o.Ga(), u = o.Ga(), c = this.X.Ia(), l = this.X, p = o.hasAttribute(1), y = p ? e.ta.wE(this.Qg, o, !0) : 0, d = new e.ia(0), g = new e.ia(0);
          for (d.Jb(e.O.truncate(o.I() / 2 + 1)), g.Jb(e.O.truncate(o.I() / 2 + 1)); a.$a(); ) if (u.$a(), !(2 > o.Ja(a.gb))) {
            u.EW();
            for (var b, x, m = !0; a.Ha(); ) {
              var w = a.ha(), j = u.li();
              if (a.wb() > u.wb()) break;
              m && (d.add(a.wb()), g.add(u.ik()), m = !1), x = d.Fc();
              var M = a.ik();
              if (1 < M - x) {
                var A = new e.h();
                A.uc(o.Na(x), o.Na(M)), b = A.length();
              } else b = w.Qb();
              x = g.Fc(), 1 < (M = u.wb()) - x ? ((A = new e.h()).uc(o.Na(x), o.Na(M)), x = A.length()) : x = j.Qb(), b > this.Bo ? d.add(a.ik()) : p && (b = o.Uc(1, d.Fc(), 0), w = w.gv(1, 0), Math.abs(w - b) > y && d.add(a.ik())), x > this.Bo ? g.add(u.wb()) : p && (b = o.Uc(1, g.Fc(), 0), w = j.gv(1, 0), Math.abs(w - b) > y && g.add(u.wb()));
            }
            if (d.Fc() < g.Fc() ? d.size > g.size ? d.If() : g.If() : (d.Fc() != g.Fc() && g.If(), g.If()), 2 <= g.size + d.size) {
              for (m = new e.Sa(), j = 0, w = d.size; j < w; j++) l.ve(d.get(j), m), j == 0 ? c.nf(m) : c.lineTo(m);
              for (j = g.size - 1; 0 < j; j--) l.ve(g.get(j), m), c.lineTo(m);
              l.dc(a.gb) ? c.Ap() : 0 < g.size && (l.ve(g.get(0), m), c.lineTo(m));
            }
            d?.clear(!1), g?.clear(!1);
          }
          return c.Ch(2, this.Bo), c;
        }, s.prototype.rV = function() {
          return this.DX();
        }, s.prototype.DX = function() {
          return this.X.getType() == 1736 && this.X.In() == 1 ? e.Fg.Mk(this.X, this.Bo, !0, !1, this.nd) : (this.Hi = new e.gd(), this.Hi.Ib(this.X), this.Hi.fd != 0 && (this.xA != 1 && e.Tk.V(this.Hi, this.Bo, this.nd, !0), this.X.getType() == 1736 && e.rn.V(this.Hi, this.Hi.ld, this.xA, !1, this.nd)), this.X = this.Hi.Ne(this.Hi.ld), this.X.getType() == 1736 && (this.X.fm(), this.X.Yo(0)), this.X.Ch(2, this.Bo), this.X);
        }, s.rs = function(o, a, u, c, l) {
          if (c != null && (c.Jj = 0, c.Jo = -1, c.Ko = -1), o.B()) return 1;
          var p = o.getType();
          if (p == 33) return 1;
          var y = e.ta.kj(a, o, !1);
          if (p == 197) return a = new e.l(), o.A(a), a.Bi(y) ? (c != null && (c.Jj = 2, c.Jo = -1, c.Ko = -1), 0) : 1;
          if (e.aa.yd(p)) return (y = new e.Ta(o.description)).oc(o, !0), s.rs(y, a, u, c, l);
          var d = o.om(y);
          if ((u = u ? -1 : d) != -1) return u;
          if (a = new s(o, a, u, l, !1), p == 550) u = a.kU();
          else if (p == 1607) u = a.JV();
          else {
            if (p != 1736) throw e.i.Qa();
            u = a.oV();
          }
          return o.Ch(u, y), c != null && u == 0 && c.Wt(a.ke), u;
        }, s.cK = function(o, a, u, c) {
          if (o.B()) return o;
          var l = o.getType();
          if (l == 33) return o;
          var p = e.ta.kj(a, o, !1);
          if (l == 197) return a = new e.l(), o.A(a), a.Bi(p) ? o.Ia() : o;
          if (e.aa.yd(l)) return (l = new e.Ta(o.description)).oc(o, !0), s.cK(l, a, u, c);
          if (p = o.om(p), (u = u ? -1 : p) == 2) return o;
          if (o = new s(o, a, u, c, !1), l == 550) o = o.pU();
          else if (l == 1607) o = o.NV();
          else {
            if (l != 1736) throw e.i.Qa();
            o = o.rV();
          }
          return o;
        }, s.prototype.Mh = function(o, a, u) {
          if (o == a) return 0;
          o = this.gi.get(o);
          var c = this.gi.get(a);
          a = o >> 1;
          var l = c >> 1, p = new e.h(), y = new e.h();
          return this.lf.tc(2 * a, p), p.y += 1 & o ? this.Oj : -this.Oj, this.lf.tc(2 * l, y), y.y += 1 & c ? this.Oj : -this.Oj, (o = p.compare(y)) == 0 && u ? 0 > (u = this.Fl.get(a) - this.Fl.get(l)) ? -1 : 0 < u ? 1 : 0 : o;
        }, s.prototype.Ou = function(o, a) {
          if (o == a) return 0;
          var u = this.X, c = u.Na(o), l = u.Na(a);
          if (c.x < l.x) return -1;
          if (c.x > l.x) return 1;
          if (c.y < l.y) return -1;
          if (c.y > l.y) return 1;
          for (c = 1; c < this.oT; c++) {
            l = this.nH.kd(c);
            for (var p = e.ra.Va(l), y = 0; y < p; y++) {
              var d = u.Uc(l, o, y), g = u.Uc(l, a, y);
              if (d < g) return -1;
              if (d > g) return 1;
            }
          }
          return 0;
        }, s.prototype.PO = function(o, a) {
          var u = this.Ou(o, a);
          return u == 0 ? o < a ? -1 : 1 : u;
        }, s.prototype.XP = function(o, a) {
          if (o === a) return 0;
          var u = o.ne.kg();
          o.Wp() && u.Sq(), o = a.ne.kg(), a.Wp() && o.Sq(), a = u.qu();
          var c = o.qu();
          return c == a ? (a = u.wi(o), Math.abs(a) <= 8881784197001252e-31 * (Math.abs(o.x * u.y) + Math.abs(o.y * u.x)) && (a--, a++), 0 > a ? 1 : 0 < a ? -1 : 0) : a < c ? -1 : 1;
        }, s;
      }();
      e.Jx = h;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 30;
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.prototype.V = function(n, t, i, h) {
          return n instanceof e.aa ? (n = new e.Zc(n), t = new e.Zc(t), this.V(n, t, i, h).next()) : new e.BL(n, t, i, h);
        }, r.ep = function(n, t, i, h) {
          var s = n.Db(), o = t.Db();
          if (n.B() && t.B()) return s > o ? n : t;
          if (n.B()) return t;
          if (t.B()) return n;
          var a = new e.l(), u = new e.l(), c = new e.l();
          return n.A(a), t.A(u), c.K(a), c.Zb(u), a = e.ta.Wd(i, c, !0), u = n.getType(), c = t.getType(), u == 33 && c == 33 ? r.aV(n, t, a) : u != c ? 0 < s || 0 < o ? s > o ? n : t : u == 550 ? r.iI(n, t, a) : r.iI(t, n, a) : e.Fg.ep(n, t, i, h);
        }, r.aV = function(n, t, i) {
          i = i * Math.sqrt(2) * 1.00001, i *= i;
          var h = n.D(), s = t.D(), o = new e.de(n.description);
          return e.h.yc(h, s) > i && (o.add(n), o.add(t)), o;
        }, r.iI = function(n, t, i) {
          var h = n.ub(0), s = n.I(), o = t.D(), a = n.Ia();
          i = i * Math.sqrt(2) * 1.00001;
          var u = new e.l();
          if (n.A(u), u.W(i, i), u.contains(o)) {
            i *= i, u = !1;
            for (var c = [], l = 0; l < s; l++) c[l] = !1;
            for (l = 0; l < s; l++) {
              var p = h.read(2 * l), y = h.read(2 * l + 1);
              (p -= o.x) * p + (y -= o.y) * y <= i && (u = !0, c[l] = !0);
            }
            if (u) for (l = 0; l < s; l++) c[l] || a.Fd(n, l, l + 1);
            else a.Fd(n, 0, s), a.add(t);
          } else a.Fd(n, 0, s), a.add(t);
          return a;
        }, r.instance = null, r;
      }(e.Je);
      e.Kx = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t, i) {
          this.ts = n == null, this.ya = -1, this.Rd = r, this.vg = t, this.NT = n.next(), this.Ub = i;
        }
        return f.prototype.next = function() {
          return this.ts ? null : (r = this.Rd.next()) != null ? (this.ya = this.Rd.La(), e.Kx.ep(r, this.NT, this.vg, this.Ub)) : null;
          var r;
        }, f.prototype.La = function() {
          return this.ya;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.BL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function n() {
        }
        return n.prototype.Fz = function() {
          this.$y = null, this.Ax = -1, this.AK = !1;
        }, n;
      }(), f = function() {
        function n() {
          this.Gr = 0, this.pj = [];
        }
        return n.prototype.pN = function(t) {
          this.Gr += t.Ax, this.pj.push(t);
        }, n.prototype.TV = function() {
          this.Gr -= this.pj[this.pj.length - 1].Ax, --this.pj.length;
        }, n.prototype.my = function() {
          return this.pj[this.pj.length - 1];
        }, n.prototype.Nb = function(t) {
          return t === this;
        }, n;
      }(), r = function() {
        function n(t, i, h) {
          this.ya = -1, this.Ic = !1, this.AH = [!1, !1, !1, !1], this.uq = [0, 0, 0, 0], this.jA = !1, this.zk = -1, this.iq = 0, this.bo = -1, this.Do = [], this.Rd = t, this.vg = i, this.Ub = h;
        }
        return n.dE = function(t) {
          var i = [], h = 0;
          for (t = Object.keys(t); h < t.length; h++) i.push(Number(t[h]));
          return i.sort(function(s, o) {
            return s - o;
          }), i;
        }, n.prototype.fG = function(t) {
          var i = this.Do[t], h = n.dE(i)[0], s = i[h], o = s.my().$y;
          return s = s.my().AK, delete i[h], s && (o = e.Yl.local().V(o, this.vg, !1, this.Ub), t == 0 && o.getType() == 33 && (t = new e.de(o.description), o.B() || t.add(o), o = t)), o;
        }, n.prototype.next = function() {
          if (this.Ic && this.bo == this.zk) return null;
          for (; !this.qK(); ) ;
          if (this.zk == -1) return null;
          if (this.jA) {
            for (this.bo++; ; ) {
              if (this.bo > this.zk || 0 > this.bo) throw e.i.Qa();
              if (this.AH[this.bo]) break;
            }
            return this.ya++, this.fG(this.bo);
          }
          return this.ya = 0, this.bo = this.zk, this.fG(this.zk);
        }, n.prototype.La = function() {
          return this.ya;
        }, n.prototype.qK = function() {
          if (this.Ic) return !0;
          var t = null;
          if (this.Rd != null && (t = this.Rd.next()) == null && (this.Ic = !0, this.Rd = null), e.mp.zp(this.Ub), t != null) {
            var i = t.Db();
            this.AH[i] = !0, i >= this.zk && !this.jA && (this.ND(i, !1, t), i > this.zk && !this.jA && this.zW(i));
          }
          if (0 < this.iq) for (i = 0; i <= this.zk; i++) for (; 1 < this.uq[i] && (t = this.FO(i)).length != 0; ) t = e.Fg.VP(t, this.vg, this.Ub), this.ND(i, !0, t);
          return this.Ic;
        }, n.prototype.FO = function(t) {
          for (var i = [], h = [], s = this.Do[t], o = n.dE(s), a = 0; a < o.length; a++) {
            var u = o[a], c = s[u];
            if (this.Ic || 1e4 < c.Gr && 1 < c.pj.length) {
              for (this.uq[t] -= c.pj.length, this.iq -= c.pj.length; 0 < c.pj.length; ) i.push(c.my().$y), c.TV();
              h.push(u);
            }
          }
          for (a = 0; a < h.length; a++) delete s[h[a]];
          return i;
        }, n.prototype.zW = function(t) {
          for (var i = 0; i < t; i++) this.Do[i] = [], this.iq -= this.uq[i], this.uq[i] = 0;
        }, n.prototype.ND = function(t, i, h) {
          var s = new v();
          if (s.Fz(), s.$y = h, h = n.eS(h), s.Ax = h, h = n.cS(h), t + 1 > this.Do.length) for (var o = 0, a = Math.max(2, t + 1); o < a; o++) this.Do.push([]);
          (o = this.Do[t][h]) === void 0 && (o = new f(), this.Do[t][h] = o), s.AK = i, o.pN(s), this.uq[t]++, this.iq++, this.zk = Math.max(this.zk, t);
        }, n.cS = function(t) {
          return 0 < t ? e.O.truncate(Math.log(t) / Math.log(4) + 0.5) : 0;
        }, n.eS = function(t) {
          var i = t.getType();
          if (e.aa.xj(i)) return t.I();
          if (i == 33) return 1;
          if (i == 197) return 4;
          if (e.aa.yd(i)) return 2;
          throw e.i.Qa();
        }, n.prototype.qe = function() {
          this.qK();
        }, n;
      }();
      e.DL = r;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          return f !== null && f.apply(this, arguments) || this;
        }
        return J(r, f), r.prototype.getType = function() {
          return 1;
        }, r.prototype.V = function(n, t, i, h) {
          return h === void 0 ? new e.DL(n, t, i) : this.gQ(n, t, i, h);
        }, r.prototype.gQ = function(n, t, i, h) {
          return n = new e.Zc([n, t]), this.V(n, i, h).next();
        }, r.local = function() {
          return r.instance === null && (r.instance = new r()), r.instance;
        }, r.instance = null, r;
      }(e.Je);
      e.Gh = v;
    }(k || (k = {})), function(e) {
      var v, f;
      (f = v || (v = {}))[f.nextPath = 0] = "nextPath", f[f.nextSegment = 1] = "nextSegment", f[f.iterate = 2] = "iterate", v = function() {
        function r(n, t, i, h) {
          this.Ts = new e.l(), this.GT = n, this.HT = t, this.mq = h, this.uo = -1, this.rl = !1;
          var s = n.Bb;
          s != null && (s = h ? s.zo : s.Fb) != null && (this.Ic = !1, this.qa = i, this.Fb = s, this.xw = this.Fb.getIterator(), this.nq = this.rl = !0, this.Xb = 0, h ? this.uo = t.da() : this.sd = t.Ga()), this.rl || (s = t.Bb) != null && (s = h ? s.zo : s.Fb) != null && (this.Ic = !1, this.qa = i, this.Fb = s, this.xw = this.Fb.getIterator(), this.rl = !0, this.nq = !1, this.Xb = 0, h ? this.uo = n.da() : this.sd = n.Ga()), this.rl || (this.ci = h ? e.ta.mR(n, t, i, 1 <= n.om(0), 1 <= t.om(0)) : e.ta.lR(n, t, i));
        }
        return r.prototype.next = function() {
          if (this.rl) {
            if (this.Ic) return !1;
            for (var n = !0; n; ) switch (this.Xb) {
              case 0:
                n = this.xU();
                break;
              case 1:
                n = this.yU();
                break;
              case 2:
                n = this.Uz();
                break;
              default:
                throw e.i.fa("internal error");
            }
            return !this.Ic;
          }
          return this.ci != null && this.ci.next();
        }, r.prototype.nl = function() {
          return this.rl ? this.nq ? this.Fb.ja(this.Fs) : this.mq ? this.uo : this.sd.wb() : this.ci.nl(this.ci.Vf);
        }, r.prototype.hl = function() {
          return this.rl ? this.nq ? this.mq ? this.uo : this.sd.wb() : this.Fb.ja(this.Fs) : this.ci.hl(this.ci.Af);
        }, r.prototype.uz = function() {
          if (!this.mq) throw e.i.fa("internal error");
          return this.rl ? this.nq ? this.Fb.GF(this.Fs) : this.Ts : this.ci.uz(this.ci.Vf);
        }, r.prototype.az = function() {
          if (!this.mq) throw e.i.fa("internal error");
          return this.rl ? this.nq ? this.Ts : this.Fb.GF(this.Fs) : this.ci.az(this.ci.Af);
        }, r.prototype.xU = function() {
          return this.mq ? --this.uo == -1 ? (this.Ic = !0, !1) : (this.nq ? this.HT.Rj(this.uo, this.Ts) : this.GT.Rj(this.uo, this.Ts), this.xw.Xi(this.Ts, this.qa), this.Xb = 2, !0) : this.sd.$a() ? (this.Xb = 1, !0) : (this.Ic = !0, !1);
        }, r.prototype.yU = function() {
          if (!this.sd.Ha()) return this.Xb = 0, !0;
          var n = this.sd.ha();
          return this.xw.Uo(n, this.qa), this.Xb = 2, !0;
        }, r.prototype.Uz = function() {
          return this.Fs = this.xw.next(), this.Fs == -1 && (this.Xb = this.mq ? 0 : 1, !0);
        }, r;
      }(), e.Zl = v;
    }(k || (k = {})), function(e) {
      (e = e.OL || (e.OL = {}))[e.enumClosed = 1] = "enumClosed", e[e.enumHasNonlinearSegments = 2] = "enumHasNonlinearSegments", e[e.enumOGCStartPolygon = 4] = "enumOGCStartPolygon", e[e.enumCalcMask = 4] = "enumCalcMask";
    }(k || (k = {})), function(e) {
      e.QC = function() {
        function v() {
        }
        return v.tb = function(f, r, n, t, i, h, s, o, a) {
          var u = [0, 0, 0], c = [0, 0, 0], l = [0, 0, 0], p = [0, 0, 0, 0], y = new e.ga(0), d = new e.ga(0), g = new e.ga(0);
          if (s != null || o != null || a != null) if (e.s.ti(r)) e.Yg.tb(f, n, t, i, h, s, o, a);
          else {
            i = e.F.ba(i), n = e.F.ba(n);
            var b = e.F.ba(i - n);
            if (e.s.Y(t, h) && (e.s.Y(n, i) || e.s.Y(e.s.P(t), 1.570796326794897))) s != null && (s.u = 0), o != null && (o.u = 0), a != null && (a.u = 0);
            else {
              if (e.s.Y(t, -h)) {
                if (e.s.Y(e.s.P(t), 1.570796326794897)) return s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0 < t ? e.F.ba(3.141592653589793 - e.F.ba(i)) : e.F.ba(i)), void (a != null && (a.u = 0 < t ? e.F.ba(i) : e.F.ba(3.141592653589793 - e.F.ba(i))));
                e.s.Y(e.s.P(b), 3.141592653589793) && (s != null && (s.u = 2 * e.F.Ah(f, r)), o != null && (o.u = 0), a != null && (a.u = 0));
              } else if (e.s.Y(e.s.P(t), 1.570796326794897) || e.s.Y(e.s.P(h), 1.570796326794897) || e.s.Y(n, i) || e.s.Y(e.s.P(b), 3.141592653589793) || e.s.Cd(t)) return void e.Wk.tb(f, r, n, t, i, h, s, o, a);
              var x = Math.sqrt(1 - r);
              i = e.F.ba(i - n), n = 0, e.F.cl(1, r, t, n, 0, y, d, g), u[0] = y.u, u[1] = d.u, u[2] = g.u, e.F.cl(1, r, h, i, 0, y, d, g), c[0] = y.u, c[1] = d.u, c[2] = g.u, l[0] = 0, l[1] = 0, l[2] = -1 * r * e.F.n(1, r, t) * Math.sin(t), 0 > i ? e.F.Wq(l, c, u, p, 0) : e.F.Wq(l, u, c, p, 0), d = [0, 0, 0], g = [0, 0, 0];
              var m = [0, 0, 0];
              u = [0, 0, 0], y = [0, 0, 0];
              var w = Math.acos(p[2] / 1), j = 1 - r, M = Math.tan(w), A = 1 + M * M / j, z = 2 * l[2] * M / j;
              for (j = (-z + (M = Math.sqrt(z * z - 4 * A * (l[2] * l[2] / j - 1)))) / (A *= 2), z = (-z - M) / A, M = Math.tan(w), w = (j + z) / 2, l = ((A = M * j + l[2]) + (M * z + l[2])) / 2, M = e.F.gp(j - w, A - l), j = l / x * 1.570796326794897, z = 0; 100 > z && (A = (A = e.F.w(r, j)) * A / Math.cos(j) * (Math.sin(j) - l * A / (1 - r)), !e.s.Cd(A)); z++) j -= A;
              l = e.F.n(1, r, j) * Math.cos(j), M = 1 - M / (l = Math.sqrt((l - w) * (l + w))), M *= 2 - M, A = e.F.on(d), w = e.F.on(g), j = e.F.on(m);
              var N = e.F.St(m, d);
              z = e.F.St(m, g), e.F.zx(m, d, u), e.F.zx(m, g, y), d = Math.acos(N / (j * A)), g = Math.acos(z / (j * w)), g *= e.s.Mb(1, e.F.St(u, y)), (1.570796326794897 <= e.s.P(d) && 1.570796326794897 <= e.s.P(g) || 3.141592653589793 < e.s.P(d - g)) && (d = (3.141592653589793 - e.s.P(d)) * e.s.Mb(1, d), g = (3.141592653589793 - e.s.P(g)) * e.s.Mb(1, g)), u = e.F.Qj(M, g), y = e.F.q(l, M, e.F.Qj(M, d)), u = e.F.q(l, M, u), u = e.s.P(u - y) * f, d = new e.ga(0), g = new e.ga(0), m = p[1] / 1, m *= -e.s.Mb(1, b), y = Math.acos(m) * e.s.Mb(1, b), v.rf(f, r, n, t, u, y, d, g), e.s.Y(i, d.u) && e.s.Y(h, g.u) || (M = e.F.gp(e.F.ba(i - d.u), h - g.u), v.rf(f, r, n, t, u, e.F.ba(y + 3.141592653589793), d, g), (A = e.F.gp(e.F.ba(i - d.u), h - g.u)) < M && (y = e.F.ba(y + 3.141592653589793))), d = [0, 0, 0, 0], g = [0, 0, 0, 0], M = [0, 0, 0], f = [0, 0, 0], n = [0, 0, 0], t = [0, 0, 0], m = [0, 0, 0], (l = [0, 0, 0])[0] = 0, l[1] = 0, l[2] = x, M[0] = 0, M[1] = 0, M[2] = 0, e.F.Wq(M, l, c, d, 0), e.s.Cd(h) ? (f[0] = c[0], f[1] = c[1], f[2] = 1, n[0] = 1 * Math.cos(i) - 1 * Math.sin(i), n[1] = 1 * Math.sin(i) + 1 * Math.cos(i)) : (r = e.F.n(1, r, h) * Math.cos(h), f[0] = 0, f[1] = 0, c[2] += Math.tan(1.570796326794897 - e.s.P(h)) * r * e.s.Mb(1, h), n[0] = r * Math.cos(i) - r * Math.sin(i), n[1] = r * Math.sin(i) + r * Math.cos(i)), n[2] = c[2], e.F.Wq(c, n, f, g, 1), e.F.zx(g, d, t), e.F.zx(g, p, m), m = e.F.St(t, m) / (e.F.on(t) * e.F.on(m)), m *= e.s.Mb(1, b), i = Math.acos(m) * -e.s.Mb(1, b), (0 < y && 0 < i || 0 > y && 0 > i) && (i = e.F.ba(i + 3.141592653589793)), s != null && (s.u = u), o != null && (o.u = y), a != null && (a.u = i);
            }
          }
        }, v.rf = function(f, r, n, t, i, h, s, o) {
          var a = [0, 0, 0], u = [0, 0, 0], c = [0, 0, 0], l = [0, 0, 0], p = [0, 0, 0], y = [0, 0, 0], d = [0, 0, 0], g = [0, 0, 0, 0], b = new e.ga(0), x = new e.ga(0), m = new e.ga(0), w = new e.ga(0), j = new e.ga(0), M = new e.ga(0);
          if (s != null && o != null) if (e.s.ti(r)) e.Yg.rf(f, n, t, i, h, s, o);
          else if (e.s.Cd(i)) s != null && (s.u = n), o != null && (o.u = t);
          else if (h = e.F.ba(h), 0 > i && (i = e.s.P(i), h = e.F.ba(h + 3.141592653589793)), n = e.F.ba(n), t = e.F.ba(t), 1.570796326794897 < e.s.P(t) && (n = e.F.ba(n + 3.141592653589793), t = e.s.Mb(3.141592653589793, t) - t), e.s.Y(e.s.P(t), 1.570796326794897) || e.s.Cd(t) || e.s.Cd(h) || e.s.Y(e.s.P(h), 3.141592653589793)) e.Wk.rf(f, r, n, t, i, h, s, o);
          else {
            var A = Math.sqrt(1 - r);
            for (f = i / f, e.F.cl(1, r, t, 0, 0, w, j, M), a[0] = w.u, a[1] = j.u, a[2] = j.u, d[0] = 0, d[1] = 0, d[2] = -1 * r * e.F.n(1, r, t) * Math.sin(t), w = e.F.n(1, r, t), j = e.F.ba(1.570796326794897 - h), M = Math.sin(j), i = Math.cos(t), t = Math.sin(t), p[0] = w * i - t * M, p[1] = Math.cos(j), p[2] = (1 - r) * w * t + i * M, 0 > h ? e.F.Wq(d, p, a, g, 0) : e.F.Wq(d, a, p, g, 0), a = Math.acos(g[2] / 1), g = Math.atan2(-g[1], -g[0]), t = 1 - r, j = 1 + (p = Math.tan(a)) * p / t, t = (-(w = 2 * d[2] * p / t) + (p = Math.sqrt(w * w - 4 * j * (d[2] * d[2] / t - 1)))) / (j *= 2), w = (-w - p) / j, p = Math.tan(a), a = (t + w) / 2, d = ((j = p * t + d[2]) + (p * w + d[2])) / 2, p = e.F.gp(t - a, j - d), A = d / A * 1.570796326794897, t = 0; 100 > t && (w = (w = e.F.w(r, A)) * w / Math.cos(A) * (Math.sin(A) - d * w / (1 - r)), !e.s.Cd(w)); t++) A -= w;
            A = e.F.n(1, r, A) * Math.cos(A), d = 1 - p / (A = Math.sqrt((A - a) * (A + a))), d *= 2 - d, y = Math.acos(e.F.St(y, u) / (e.F.on(y) * e.F.on(u))), y *= e.s.Mb(1, u[0]), h = (e.F.q(A, d, e.F.Qj(d, y)) + f * e.s.Mb(1, h)) / e.F.Ah(A, d), h = e.F.ba(1.570796326794897 * h), h = e.F.Rq(d, h), e.F.n(A, d, h), p = e.F.ba(g + n), n = Math.cos(p), h = Math.sin(p), c[0] = l[0] * n + l[1] * -h, c[1] = l[0] * h + l[1] * n, c[2] = l[2], e.F.jO(r, c[0], c[1], c[2], m, x, b), s != null && (s.u = x.u), o != null && (o.u = m.u);
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function() {
        function i(h) {
          this.Ya = null, this.wt = new e.h(), this.xt = new e.h(), this.g = h;
        }
        return i.prototype.compare = function(h, s, o) {
          return this.g.Gc(s, this.wt), this.g.Gc(h.ja(o), this.xt), this.wt.compare(this.xt);
        }, i;
      }(), f = function() {
        function i(h) {
          this.Bf = new e.h(), this.Dk = new e.h(), this.g = h;
        }
        return i.prototype.Dh = function(h) {
          this.Bf.L(h);
        }, i.prototype.compare = function(h, s) {
          return this.g.Gc(h.ja(s), this.Dk), this.Bf.compare(this.Dk);
        }, i;
      }(), r = function(i) {
        function h(s) {
          var o = i.call(this, s.g, s.qa, !1) || this;
          return o.ib = s, o;
        }
        return J(h, i), h.prototype.compare = function(s, o, a) {
          if (this.rg) return -1;
          var u = this.ib.Qd.Jn(this.ib.Rh(o));
          s = s.ja(a);
          var c = this.ib.Qd.Jn(this.ib.Rh(s));
          return this.Dm = a, this.RE(o, u, s, c);
        }, h;
      }(e.UC), n = function(i) {
        function h(s) {
          var o = i.call(this, s.g, s.qa) || this;
          return o.ib = s, o;
        }
        return J(h, i), h.prototype.compare = function(s, o) {
          return this.rg ? -1 : (s = this.ib.Qd.Jn(this.ib.Rh(s.ja(o))), this.Dm = o, this.SE(o, s));
        }, h;
      }(e.aM), t = function() {
        function i() {
          this.Mc = this.df = this.jo = this.Qd = this.lh = this.zd = this.hb = this.g = null, this.Ng = !1, this.vh = this.Nm = this.ie = this.Gk = this.nh = this.Ak = this.Ff = this.$d = null, this.xh = this.Jq = this.UA = this.qa = 0, this.Xv = this.Wn = !1, this.yo = new e.h(), this.Pi = new e.h(), this.hb = new e.$c(8), this.zd = new e.$c(5), this.lh = new e.au(), this.Qd = new e.au(), this.Ng = !1, this.vh = new e.h(), this.vh.ma(0, 0), this.qa = 0, this.xh = -1, this.Wn = !1, this.g = null, this.df = new e.Yj(), this.Mc = new e.Yj(), this.nh = new e.ia(0), this.Gk = new e.TC(), this.Ff = new e.ia(0), this.Ak = new e.ia(0), this.jo = new e.Sa();
        }
        return i.prototype.PX = function(h, s) {
          var o = new e.Dd();
          return o.$B(), h.Oc(o), this.er(h), this.Wn = !1, this.qa = s, this.UA = s * s, s = this.jC(), h.Oc(o), s || (this.qQ(), s || this.jC()), this.xh != -1 && (this.g.Td(this.xh), this.xh = -1), this.g = null, this.Wn;
        }, i.prototype.TX = function(h, s) {
          this.er(h), this.Wn = !1, this.qa = s, this.UA = s * s, this.Ng = !1, this.jC(), this.Ng || (this.Ng = h.Gp(s, !0, !1) == 1), this.xh != -1 && (this.g.Td(this.xh), this.xh = -1), this.g = null;
        }, i.prototype.pg = function(h, s) {
          return this.hb.T(h, 0 + s);
        }, i.prototype.LB = function(h, s, o) {
          this.hb.S(h, 0 + s, o);
        }, i.prototype.Rh = function(h) {
          return this.hb.T(h, 2);
        }, i.prototype.ZW = function(h, s) {
          this.hb.S(h, 2, s);
        }, i.prototype.RF = function(h, s) {
          return this.hb.T(h, 3 + s);
        }, i.prototype.Pp = function(h) {
          return this.hb.T(h, 7);
        }, i.prototype.Pl = function(h, s) {
          this.hb.S(h, 7, s);
        }, i.prototype.Rp = function(h, s) {
          return this.hb.T(h, 3 + this.Op(h, s));
        }, i.prototype.fr = function(h, s, o) {
          this.hb.S(h, 3 + this.Op(h, s), o);
        }, i.prototype.NR = function(h, s) {
          return this.hb.T(h, 5 + this.Op(h, s));
        }, i.prototype.hr = function(h, s, o) {
          this.hb.S(h, 5 + this.Op(h, s), o);
        }, i.prototype.Sr = function(h) {
          return this.zd.T(h, 0);
        }, i.prototype.UW = function(h, s) {
          this.zd.S(h, 0, s);
        }, i.prototype.ez = function(h) {
          return this.zd.T(h, 4);
        }, i.prototype.cr = function(h, s) {
          this.zd.S(h, 4, s);
        }, i.prototype.il = function(h) {
          return this.zd.T(h, 1);
        }, i.prototype.ln = function(h, s) {
          this.zd.S(h, 1, s);
        }, i.prototype.dz = function(h) {
          return this.zd.T(h, 3);
        }, i.prototype.Et = function(h, s) {
          this.zd.S(h, 3, s);
        }, i.prototype.Ym = function(h) {
          var s = this.zd.Ce(), o = this.lh.Ph();
          return this.UW(s, o), h != -1 ? (this.lh.addElement(o, h), this.g.Ra(h, this.xh, s), this.cr(s, this.g.Ua(h))) : this.cr(s, -1), s;
        }, i.prototype.HP = function(h) {
          this.zd.jd(h);
        }, i.prototype.LD = function(h, s) {
          this.lh.addElement(this.Sr(h), s), this.g.Ra(s, this.xh, h);
        }, i.prototype.nt = function(h) {
          var s = this.hb.Ce(), o = this.Qd.Ph();
          return this.ZW(s, o), h != -1 && this.Qd.addElement(o, h), s;
        }, i.prototype.MD = function(h, s) {
          this.Qd.addElement(this.Rh(h), s);
        }, i.prototype.Uu = function(h) {
          this.hb.jd(h), 0 <= (h = this.nh.lF(h)) && this.nh.SV(h);
        }, i.prototype.hj = function(h, s) {
          if (this.pg(h, 0) == -1) this.LB(h, 0, s);
          else {
            if (this.pg(h, 1) != -1) throw e.i.Qa();
            this.LB(h, 1, s);
          }
          this.ky(h, s);
        }, i.prototype.ky = function(h, s) {
          var o = this.il(s);
          if (o != -1) {
            var a = this.Rp(o, s);
            this.hr(a, s, h), this.fr(h, s, a), this.fr(o, s, h), this.hr(h, s, o);
          } else this.hr(h, s, h), this.fr(h, s, h), this.ln(s, h);
        }, i.prototype.Op = function(h, s) {
          return this.pg(h, 0) == s ? 0 : 1;
        }, i.prototype.Xm = function(h, s) {
          var o, a = this.dz(s);
          if (a != -1 && (this.df.vd(a, -1), this.Et(s, -1)), (a = this.il(s)) != -1) {
            var u = o = a;
            do {
              var c = !1, l = this.Op(o, s), p = this.RF(o, l);
              if (this.pg(o, l + 1 & 1) == h) {
                if (this.Xu(o), this.Qd.bh(this.Rh(o)), this.Uu(o), o == p) {
                  a = -1;
                  break;
                }
                a == o && (a = this.il(s), u = p, c = !0);
              }
              o = p;
            } while (o != u || c);
            if (a != -1) {
              do
                l = this.Op(o, s), p = this.RF(o, l), this.LB(o, l, h), o = p;
              while (o != u);
              (o = this.il(h)) != -1 ? (u = this.Rp(o, h), c = this.Rp(a, h), u == o ? (this.ln(h, a), this.ky(o, h), this.ln(h, o)) : c == a && this.ky(a, h), this.fr(a, h, u), this.hr(u, h, a), this.fr(o, h, c), this.hr(c, h, o)) : this.ln(h, a);
            }
          }
          for (a = this.Sr(h), o = this.Sr(s), u = this.lh.rc(o); u != -1; u = this.lh.lb(u)) this.g.Ra(this.lh.ja(u), this.xh, h);
          this.lh.Hy(a, o), this.HP(s);
        }, i.prototype.UT = function(h, s) {
          var o = this.pg(h, 0), a = this.pg(h, 1), u = this.pg(s, 0), c = this.pg(s, 1);
          this.Qd.Hy(this.Rh(h), this.Rh(s)), s == this.il(o) && this.ln(o, h), s == this.il(a) && this.ln(a, h), this.Xu(s), this.Uu(s), o == u && a == c || a == u && o == c || (this.Hn(o, this.yo), this.Hn(u, this.Pi), this.yo.qb(this.Pi) ? (o != u && this.Xm(o, u), a != c && this.Xm(a, c)) : (a != u && this.Xm(a, u), o != c && this.Xm(o, c)));
        }, i.prototype.Xu = function(h) {
          var s = this.pg(h, 1);
          this.dF(h, this.pg(h, 0)), this.dF(h, s);
        }, i.prototype.dF = function(h, s) {
          var o = this.Rp(h, s), a = this.NR(h, s), u = this.il(s);
          o != h ? (this.fr(a, s, o), this.hr(o, s, a), u == h && this.ln(s, o)) : this.ln(s, -1);
        }, i.prototype.WD = function(h, s, o) {
          var a = this.Qd.rc(h), u = this.Qd.ja(a);
          h = this.Le(u);
          var c = this.Le(this.g.U(u));
          for (this.g.jr(u, s, o, !0), a = this.Qd.lb(a); a != -1; a = this.Qd.lb(a)) {
            u = this.Qd.ja(a);
            var l = this.Le(u) == h;
            this.g.jr(u, s, o, l);
          }
          a = s.Vp(o, 0).ac(), s = s.Vp(o, s.ol(o) - 1).wc(), this.BK(h, a), this.BK(c, s);
        }, i.prototype.ZE = function(h, s, o) {
          var a = this.Rh(h), u = this.pg(h, 0), c = this.pg(h, 1), l = this.nt(-1);
          for (this.nh.add(l), this.Pl(l, -3), this.Ff.add(l), this.hj(l, u), h = 1, s = s.ol(o); h < s; h++) o = this.Ym(-1), this.Ak.add(o), this.Ff.add(o), this.hj(l, o), l = this.nt(-1), this.nh.add(l), this.Pl(l, -3), this.Ff.add(l), this.hj(l, o);
          for (this.hj(l, c), a = this.Qd.rc(a); a != -1; a = this.Qd.lb(a)) if (c = this.Qd.ja(a), this.Le(c) == u) {
            h = 0;
            do
              0 < h && (l = this.Ff.get(h - 1), this.LD(l, c), this.ez(l) == -1 && this.cr(l, this.g.Ua(c))), l = this.Ff.get(h), h += 2, this.MD(l, c), c = this.g.U(c);
            while (h < this.Ff.size);
          } else {
            h = this.Ff.size - 1;
            do
              h < this.Ff.size - 2 && (l = this.Ff.get(h + 1), this.LD(l, c), 0 > this.ez(l) && this.cr(l, this.g.Ua(c))), l = this.Ff.get(h), h -= 2, this.MD(l, c), c = this.g.U(c);
            while (0 <= h);
          }
          this.Ff.clear(!1);
        }, i.prototype.Le = function(h) {
          return this.g.Pa(h, this.xh);
        }, i.prototype.TI = function(h, s, o) {
          var a = this.pg(s, 0), u = new e.h();
          this.Hn(a, u);
          var c = new e.h(), l = this.pg(s, 1);
          this.Hn(l, c);
          var p = o.ol(h), y = o.Vp(h, 0), d = new e.h();
          if (y.Yp(d), !u.qb(d)) {
            if (!this.Ng) {
              var g = u.compare(this.vh);
              0 > g * (d = d.compare(this.vh)) && (this.Ng = !0);
            }
            this.vF(a, this.Ff), this.Ak.add(a);
          }
          for (!this.Ng && 1 < p && (g = u.compare(c), y = y.wc(), (u.compare(y) != g || y.compare(c) != g || 0 > y.compare(this.vh)) && (this.Ng = !0)), h = (y = o.Vp(h, p - 1)).wc(), c.qb(h) || (this.Ng || 0 > (g = c.compare(this.vh)) * (d = h.compare(this.vh)) && (this.Ng = !0), this.vF(l, this.Ff), this.Ak.add(l)), this.Ff.add(s), c = 0, l = this.Ff.size; c < l; c++) h = this.Ff.get(c), o = this.Pp(h), e.$c.LG(o) && (this.Mc.vd(o, -1), this.Pl(h, -1)), h != s && this.Pp(h) != -3 && (this.nh.add(h), this.Pl(h, -3));
          this.Ff.clear(!1);
        }, i.prototype.lO = function(h, s) {
          this.$d.compare(this.Mc, this.Mc.ja(h), s), this.$d.rg && (this.$d.Kr(), this.oF(h, s));
        }, i.prototype.oF = function(h, s) {
          this.Wn = !0, h = this.Mc.ja(h), s = this.Mc.ja(s);
          var o = this.Qd.Jn(this.Rh(h)), a = this.Qd.Jn(this.Rh(s)), u = this.g.bc(o);
          u == null && (this.ie == null && (this.ie = new e.yb()), this.g.ed(o, this.ie), u = this.ie), (o = this.g.bc(a)) == null && (this.Nm == null && (this.Nm = new e.yb()), this.g.ed(a, this.Nm), o = this.Nm), this.Gk.Oo(u), this.Gk.Oo(o), this.Gk.Ea(this.qa, !0) && (this.Ng = !0), this.hK(h, s, -1, this.Gk), this.Gk.clear();
        }, i.prototype.GQ = function(h, s) {
          this.Wn = !0, s = this.Mc.ja(s);
          var o = this.Qd.Jn(this.Rh(s)), a = this.g.bc(o);
          a == null && (this.ie == null && (this.ie = new e.yb()), this.g.ed(o, this.ie), a = this.ie), o = this.BF(h), this.Gk.Oo(a), this.g.Vi(o, this.jo), this.Gk.Kz(this.qa, this.jo, !0), this.hK(s, -1, h, this.Gk), this.Gk.clear();
        }, i.prototype.xS = function() {
          if (this.nh.size != 0) for (; this.nh.size != 0; ) {
            if (this.nh.size > Math.max(100, this.g.fd)) {
              this.nh.clear(!1), this.Ng = !0;
              break;
            }
            var h = this.nh.Fc();
            this.nh.If(), this.Pl(h, -1), this.WS(h) != -1 && this.wS(h), this.Vn = !1;
          }
        }, i.prototype.wS = function(h) {
          if (this.Vn) {
            var s = this.Mc.zu(this.MH, this.GH, h, !0);
            this.Vn = !1;
          } else s = this.Mc.KD(h);
          s == -1 ? this.UT(this.Mc.ja(this.Mc.FF()), h) : (this.Pl(h, s), this.$d.rg && (this.$d.Kr(), this.oF(this.$d.Dm, s)));
        }, i.prototype.WS = function(h) {
          var s = this.pg(h, 0);
          if (h = this.pg(h, 1), this.Hn(s, this.yo), this.Hn(h, this.Pi), e.h.yc(this.yo, this.Pi) <= this.UA) return this.Ng = !0, -1;
          var o = this.yo.compare(this.vh), a = this.Pi.compare(this.vh);
          return 0 >= o && 0 < a ? h : 0 >= a && 0 < o ? s : -1;
        }, i.prototype.oQ = function() {
          var h = new e.ia(0);
          h.Jb(this.g.fd);
          for (var s = this.g.Yq(), o = s.next(); o != -1; o = s.next()) this.g.Pa(o, this.xh) != -1 && h.add(o);
          this.g.nx(h, h.size), this.pQ(h);
        }, i.prototype.pQ = function(h) {
          this.df.clear(), this.df.De(h.size), this.df.Vo(new v(this.g));
          var s = new e.h();
          s.Rc();
          for (var o = -1, a = new e.h(), u = 0, c = h.size; u < c; u++) {
            var l = h.get(u);
            this.g.Gc(l, a), a.qb(s) ? (l = this.g.Pa(l, this.xh), this.Xm(o, l)) : (o = this.Le(l), this.g.Gc(l, s), l = this.df.xn(l), this.Et(o, l));
          }
        }, i.prototype.qQ = function() {
          var h = new e.ia(0);
          h.Jb(this.g.fd);
          for (var s = this.df.rc(-1); s != -1; s = this.df.lb(s)) h.add(this.df.ja(s));
          this.df.clear(), this.g.nx(h, h.size), s = 0;
          for (var o = h.size; s < o; s++) {
            var a = h.get(s), u = this.Le(a);
            a = this.df.xn(a), this.Et(u, a);
          }
        }, i.prototype.vF = function(h, s) {
          var o = this.il(h);
          if (o != -1) {
            var a = o;
            do
              e.$c.LG(this.Pp(a)) && s.add(a), a = this.Rp(a, h);
            while (a != o);
          }
        }, i.prototype.BK = function(h, s) {
          for (h = this.lh.rc(this.Sr(h)); h != -1; h = this.lh.lb(h)) this.g.mf(this.lh.ja(h), s);
        }, i.prototype.hK = function(h, s, o, a) {
          this.Xu(h), s != -1 && this.Xu(s), this.TI(0, h, a), s != -1 && this.TI(1, s, a), o != -1 && (a.Bf.D(this.yo), this.Hn(o, this.Pi), this.Pi.qb(this.yo) || this.Ak.add(o)), o = 0;
          for (var u = this.Ak.size; o < u; o++) {
            var c = this.Ak.get(o), l = this.dz(c);
            l != -1 && (this.df.vd(l, -1), this.Et(c, -1));
          }
          for (o = this.Rh(h), u = s != -1 ? this.Rh(s) : -1, this.WD(o, a, 0), s != -1 && this.WD(u, a, 1), this.ZE(h, a, 0), s != -1 && this.ZE(s, a, 1), this.Qd.bh(o), this.Uu(h), s != -1 && (this.Qd.bh(u), this.Uu(s)), o = 0, u = this.Ak.size; o < u; o++) (c = this.Ak.get(o)) == this.Jq && (this.Xv = !0), (l = this.dz(c)) == -1 && ((l = this.df.KD(this.BF(c))) == -1 ? (h = this.Le(this.df.ja(this.df.FF())), this.Xm(h, c)) : this.Et(c, l));
          this.Ak.clear(!1);
        }, i.prototype.Hn = function(h, s) {
          this.g.dG(this.ez(h), s);
        }, i.prototype.BF = function(h) {
          return this.lh.Jn(this.Sr(h));
        }, i.prototype.jC = function() {
          this.Xv = !1, this.Jq = -1, this.$d == null && (this.Mc.Rv = !1, this.$d = new r(this), this.Mc.Zn = this.$d);
          var h = new e.ia(0), s = null, o = null;
          this.GH = this.MH = -1, this.Vn = !1;
          for (var a = this.df.rc(-1); a != -1; ) {
            this.Vn = !1;
            var u = this.df.ja(a);
            this.Jq = this.Le(u), this.g.Gc(u, this.vh), this.$d.$J(this.vh.y, this.vh.x);
            var c = this.il(this.Jq), l = c == -1;
            if (!l) {
              u = c;
              do {
                var p = this.Pp(u);
                p == -1 ? (this.nh.add(u), this.Pl(u, -3)) : p != -3 && h.add(p), u = this.Rp(u, this.Jq);
              } while (u != c);
            }
            if (0 < h.size) {
              for (this.Vn = h.size == 1 && this.nh.size == 1, l = 0, c = h.size; l < c; l++) u = this.Mc.ja(h.get(l)), this.Pl(u, -2);
              var y = -2, d = -2;
              for (l = 0, c = h.size; l < c; l++) {
                if (p = h.get(l), y == -2) {
                  var g = this.Mc.we(p);
                  g != -1 ? (u = this.Mc.ja(g), (u = this.Pp(u)) != -2 && (y = g)) : y = -1;
                }
                if (d == -2 && ((p = this.Mc.lb(p)) != -1 ? (u = this.Mc.ja(p), (u = this.Pp(u)) != -2 && (d = p)) : d = -1), y != -2 && d != -2) break;
              }
              for (l = 0, c = h.size; l < c; l++) p = h.get(l), u = this.Mc.ja(p), this.Mc.vd(p, -1), this.Pl(u, -1);
              h.clear(!1), this.MH = y != -1 ? y : -1, this.GH = d != -1 ? d : -1, y != -1 && d != -1 ? this.Vn || this.lO(y, d) : y == -1 && d == -1 && (this.Vn = !1);
            } else l && (s == null && (s = new n(this)), s.Dh(this.vh), this.Mc.uJ(s), s.rg && (s.Kr(), this.GQ(this.Jq, s.Dm)));
            this.xS(), this.Xv ? (this.Xv = !1, o == null && (o = new f(this.g)), o.Dh(this.vh), a = this.df.uJ(o)) : a = this.df.lb(a);
          }
          return this.Wn;
        }, i.prototype.er = function(h) {
          for (this.g = h, this.xh = this.g.Gd(), this.hb.De(h.fd + 32), this.zd.De(h.fd), this.lh.At(h.fd), this.lh.fn(h.fd), this.Qd.At(h.fd + 32), this.Qd.fn(h.fd + 32), h = this.g.ld; h != -1; h = this.g.ue(h)) if (e.aa.Hc(this.g.ic(h))) for (p = this.g.Ob(h); p != -1; p = this.g.Rb(p)) {
            var s = this.g.Ja(p), o = this.g.Xa(p), a = this.Ym(o), u = this.nt(o);
            for (this.hj(u, a), y = this.g.U(o), o = 0, s -= 2; o < s; o++) {
              var c = this.g.U(y), l = this.Ym(y);
              this.hj(u, l), u = this.nt(y), this.hj(u, l), y = c;
            }
            this.g.dc(p) ? (l = this.Ym(y), this.hj(u, l), u = this.nt(y), this.hj(u, l), this.hj(u, a)) : (l = this.Ym(y), this.hj(u, l));
          }
          else for (var p = this.g.Ob(h); p != -1; p = this.g.Rb(p)) {
            var y = this.g.Xa(p);
            for (a = 0, s = this.g.Ja(p); a < s; a++) this.Ym(y), y = this.g.U(y);
          }
          this.oQ();
        }, i;
      }();
      e.RC = t;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n, t, i) {
          var h = f.call(this) || this;
          if (n !== void 0) if (i !== void 0) {
            h.description = e.ee.og();
            var s = new e.Nd();
            s.K(n, t, i), h.dC(s);
          } else if (t !== void 0) h.description = e.ee.og(), h.Cb(n, t);
          else if (n instanceof e.ra) h.description = n;
          else if (n instanceof e.h) h.description = e.ee.og(), h.Cb(n);
          else {
            if (!(n instanceof r)) throw e.i.N();
            h.description = n.description, h.Cb(n.Lg(), n.ih()), n.ka !== null && (h.ka = n.ka.slice(0));
          }
          else h.description = e.ee.og();
          return h;
        }
        return J(r, f), r.prototype.D = function(n) {
          if (n === void 0) {
            if (this.Ac()) throw e.i.fa("This operation should not be performed on an empty geometry.");
            return (n = new e.h()).ma(this.ka[0], this.ka[1]), n;
          }
          if (this.Ac()) throw e.i.fa("This operation should not be performed on an empty geometry.");
          n.ma(this.ka[0], this.ka[1]);
        }, r.prototype.Cb = function(n, t) {
          typeof n == "number" ? (this.vc(), this.ka == null && this.un(), this.ka[0] = n, this.ka[1] = t) : (this.vc(), this.Cb(n.x, n.y));
        }, r.prototype.Cz = function() {
          if (this.Ac()) throw e.i.fa("This operation should not be performed on an empty geometry.");
          var n = new e.Nd();
          return n.x = this.ka[0], n.y = this.ka[1], n.z = this.description.iG() ? this.ka[2] : e.ra.se(1), n;
        }, r.prototype.dC = function(n) {
          this.vc();
          var t = this.hasAttribute(1);
          t || e.ra.DG(1, n.z) || (this.re(1), t = !0), this.ka == null && this.un(), this.ka[0] = n.x, this.ka[1] = n.y, t && (this.ka[2] = n.z);
        }, r.prototype.Lg = function() {
          if (this.Ac()) throw e.i.fa("This operation should not be performed on an empty geometry.");
          return this.ka[0];
        }, r.prototype.cC = function(n) {
          this.setAttribute(0, 0, n);
        }, r.prototype.ih = function() {
          if (this.Ac()) throw e.i.fa("This operation should not be performed on an empty geometry.");
          return this.ka[1];
        }, r.prototype.aK = function(n) {
          this.setAttribute(0, 1, n);
        }, r.prototype.bS = function() {
          return this.Uc(1, 0);
        }, r.prototype.wX = function(n) {
          this.setAttribute(1, 0, n);
        }, r.prototype.zR = function() {
          return this.Uc(2, 0);
        }, r.prototype.hX = function(n) {
          this.setAttribute(2, 0, n);
        }, r.prototype.Ec = function() {
          return this.yF(3, 0);
        }, r.prototype.LJ = function(n) {
          this.setAttribute(3, 0, n);
        }, r.prototype.Uc = function(n, t) {
          var i = this.description.Pf(n);
          return 0 <= i ? this.ka[this.description.$j(i) + t] : e.ra.se(n);
        }, r.prototype.yF = function(n, t) {
          var i = this.description.Pf(n);
          return 0 <= i ? this.ka[this.description.$j(i) + t] : e.ra.se(n);
        }, r.prototype.setAttribute = function(n, t, i) {
          this.vc();
          var h = this.description.Pf(n);
          0 > h && (this.re(n), h = this.description.Pf(n)), this.ka == null && this.un(), this.ka[this.description.$j(h) + t] = i;
        }, r.prototype.getType = function() {
          return 33;
        }, r.prototype.Db = function() {
          return 0;
        }, r.prototype.Oa = function() {
          this.vc(), this.ka != null && (this.ka[0] = NaN, this.ka[1] = NaN);
        }, r.prototype.sn = function(n) {
          if (this.ka != null) {
            for (var t = e.ee.Iw(n, this.description), i = [], h = 0, s = 0, o = n.Aa; s < o; s++) {
              var a = n.kd(s), u = e.ra.Va(a);
              if (t[s] == -1) {
                var c = e.ra.se(a);
                for (a = 0; a < u; a++) i[h] = c, h++;
              } else for (c = this.description.$j(t[s]), a = 0; a < u; a++) i[h] = this.ka[c], h++, c++;
            }
            this.ka = i;
          }
          this.description = n;
        }, r.prototype.un = function() {
          this.lJ(this.description.Ae.length), r.cE(this.description.Ae, this.ka, this.description.Ae.length), this.ka[0] = NaN, this.ka[1] = NaN;
        }, r.prototype.Oc = function(n) {
          if (n instanceof e.Dd) {
            if (!this.Ac()) {
              var t = this.D();
              n.Eh(t, t), this.Cb(t);
            }
          } else this.Ac() || (this.re(1), t = this.Cz(), this.dC(n.fp(t)));
        }, r.prototype.copyTo = function(n) {
          if (n.getType() != 33) throw e.i.N();
          n.vc(), this.ka == null ? (n.Oa(), n.ka = null, n.Nf(this.description)) : (n.Nf(this.description), n.lJ(this.description.Ae.length), r.cE(this.ka, n.ka, this.description.Ae.length));
        }, r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.B = function() {
          return this.Ac();
        }, r.prototype.Ac = function() {
          return this.ka == null || isNaN(this.ka[0]) || isNaN(this.ka[1]);
        }, r.prototype.bn = function(n) {
          n.Oa(), this.description != n.description && n.Nf(this.description), n.Zb(this);
        }, r.prototype.A = function(n) {
          this.Ac() ? n.Oa() : (n.v = this.ka[0], n.G = this.ka[1], n.C = this.ka[0], n.H = this.ka[1]);
        }, r.prototype.Qo = function(n) {
          if (this.Ac()) n.Oa();
          else {
            var t = this.Cz();
            n.v = t.x, n.G = t.y, n.Ye = t.z, n.C = t.x, n.H = t.y, n.Bg = t.z;
          }
        }, r.prototype.Tg = function(n, t) {
          var i = new e.Nc();
          return this.Ac() ? (i.Oa(), i) : (n = this.Uc(n, t), i.oa = n, i.va = n, i);
        }, r.prototype.lJ = function(n) {
          if (this.ka == null) this.ka = e.O.lg(n);
          else if (this.ka.length < n) {
            for (var t = this.ka.slice(0), i = this.ka.length; i < n; i++) t[i] = 0;
            this.ka = t;
          }
        }, r.cE = function(n, t, i) {
          if (0 < i) for (i = 0; i < n.length; i++) t[i] = n[i];
        }, r.prototype.Nb = function(n) {
          if (n == this) return !0;
          if (!(n instanceof r) || this.description != n.description) return !1;
          if (this.Ac()) return !!n.Ac();
          for (var t = 0, i = this.description.Ae.length; t < i; t++) if (this.ka[t] != n.ka[t]) return !1;
          return !0;
        }, r.prototype.cc = function() {
          var n = this.description.cc();
          if (!this.Ac()) for (var t = 0, i = this.description.Ae.length; t < i; t++) {
            var h = this.ka[t];
            h = e.O.truncate(h ^ h >>> 32), n = e.O.Th(h, n);
          }
          return n;
        }, r.prototype.mg = function() {
          return null;
        }, r;
      }(e.aa);
      e.Sa = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t) {
          r !== void 0 && (this.x = r, this.y = n, this.z = t);
        }
        return f.construct = function(r, n, t) {
          var i = new f();
          return i.x = r, i.y = n, i.z = t, i;
        }, f.prototype.K = function(r, n, t) {
          this.x = r, this.y = n, this.z = t;
        }, f.prototype.lx = function() {
          this.z = this.y = this.x = 0;
        }, f.prototype.normalize = function() {
          var r = this.length();
          r == 0 && (this.x /= r, this.y /= r, this.z /= r);
        }, f.prototype.length = function() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }, f.prototype.sub = function(r) {
          return new f(this.x - r.x, this.y - r.y, this.z - r.z);
        }, f.prototype.Ag = function(r) {
          new f(this.x * r, this.y * r, this.z * r);
        }, f.prototype.Qh = function(r) {
          return this.x * r.x + this.y * r.y + this.z * r.z;
        }, f;
      }();
      e.Nd = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r, n, t) {
          this.Gw = this.DA = null, this.Xf = n, this.FT = n.y - t, this.ET = n.y + t, this.Ew = 0, this.dA = r, this.qa = t, this.RT = t * t, this.eA = t != 0, this.Lv = !1;
        }
        return f.prototype.result = function() {
          return this.Ew != 0 ? 1 : 0;
        }, f.prototype.ZM = function(r) {
          return r = r.hc(r.fe(this.Xf, !1)), e.h.yc(r, this.Xf) <= this.RT;
        }, f.prototype.fF = function(r) {
          if (!this.eA && (this.dA && this.Xf.qb(r.ac()) || this.Xf.qb(r.wc()))) this.Lv = !0;
          else if (r.na == this.Xf.y && r.na == r.la) {
            if (this.dA && !this.eA) {
              var n = Math.max(r.sa, r.pa);
              this.Xf.x > Math.min(r.sa, r.pa) && this.Xf.x < n && (this.Lv = !0);
            }
          } else {
            var t = !1;
            if (n = Math.max(r.sa, r.pa), this.Xf.x > n ? t = !0 : this.Xf.x >= Math.min(r.sa, r.pa) && (t = 0 < r.cq(!0, this.Xf.y, this.Gw, null) && this.Gw[0] <= this.Xf.x), t) {
              if (this.Xf.y == r.ac().y) {
                if (this.Xf.y < r.wc().y) return;
              } else if (this.Xf.y == r.wc().y && this.Xf.y < r.ac().y) return;
              this.Ew = this.dA ? 1 ^ this.Ew : this.Ew + (r.ac().y > r.wc().y ? 1 : -1);
            }
          }
        }, f.prototype.SI = function(r) {
          var n = r.Tg(0, 1);
          if (n.oa > this.ET || n.va < this.FT) return !1;
          if (this.eA && this.ZM(r)) return !0;
          if (n.oa > this.Xf.y || n.va < this.Xf.y) return !1;
          if (this.DA == null && (this.DA = [null, null, null, null, null]), this.Gw == null && (this.Gw = [0, 0, 0]), 0 < (n = r.eG())) for (r = 0; r < n; r++) {
            var t = this.DA[r].get();
            if (this.fF(t), this.Lv) return !0;
          }
          else if (this.fF(r), this.Lv) return !0;
          return !1;
        }, f.PM = function(r, n, t) {
          for (n = new f(r.In() == 0, n, t), r = r.Ga(); r.$a(); ) for (; r.Ha(); ) if (t = r.ha(), n.SI(t)) return -1;
          return n.result();
        }, f.QM = function(r, n, t, i) {
          var h = new e.l();
          r.xc(h), h.W(i, i);
          var s = new f(r.In() == 0, t, i);
          r = r.Ga();
          var o = new e.l();
          for (o.K(h), o.C = t.x + i, o.G = t.y - i, o.H = t.y + i, i = (t = n.MF(o, i)).next(); i != -1; i = t.next()) if (r.Vb(n.ja(i)), r.Ha() && (i = r.ha(), s.SI(i))) return -1;
          return s.result();
        }, f.wm = function(r, n, t) {
          if (r.B()) return 0;
          var i = new e.l();
          if (r.xc(i), i.W(t, t), !i.contains(n)) return 0;
          if ((i = r.Bb) != null) {
            var h = i.Fk;
            if (h != null) {
              if ((h = h.So(n.x, n.y)) == 1) return 1;
              if (h == 0) return 0;
            }
            if ((i = i.Fb) != null) return f.QM(r, i, n, t);
          }
          return f.PM(r, n, t);
        }, f.bT = function(r, n, t) {
          return n.B() ? 0 : f.wm(r, n.D(), t);
        }, f.Ml = function(r, n) {
          return !(16 > (r = r.I())) && 2 * r + Math.log(r) / Math.log(2) * n < 1 * r * n;
        }, f;
      }();
      e.Dg = v;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n) {
          return f.call(this, !0, n) || this;
        }
        return J(r, f), r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.Db = function() {
          return 2;
        }, r.prototype.getType = function() {
          return 1736;
        }, r.prototype.xG = function(n, t, i) {
          this.JS(n, t, i);
        }, r.prototype.qR = function() {
          this.FR();
        }, r;
      }(e.Vk);
      e.Da = v;
    }(k || (k = {})), function(e) {
      (function(v) {
        v[v.PiPOutside = 0] = "PiPOutside", v[v.PiPInside = 1] = "PiPInside", v[v.PiPBoundary = 2] = "PiPBoundary";
      })(e.RL || (e.RL = {})), e.hd = function() {
        function v() {
        }
        return v.KG = function(f, r, n) {
          return (f = e.Dg.bT(f, r, n)) == 0 ? 0 : f == 1 ? 1 : 2;
        }, v.Yd = function(f, r, n) {
          return (f = e.Dg.wm(f, r, n)) == 0 ? 0 : f == 1 ? 1 : 2;
        }, v.WX = function(f, r, n, t, i) {
          if (r.length < n || i.length < n) throw e.i.N();
          for (var h = 0; h < n; h++) i[h] = v.Yd(f, r[h], t);
        }, v.sK = function(f, r, n, t, i) {
          if (f.getType() == 1736) v.WX(f, r, n, t, i);
          else {
            if (f.getType() != 197) throw e.i.fa("invalid_call");
            var h = new e.l();
            f.A(h), v.$M(h, r, n, t, i);
          }
        }, v.$M = function(f, r, n, t, i) {
          if (r.length < n || i.length < n) throw e.i.N();
          if (f.B()) for (t = 0; t < n; t++) i[t] = 0;
          else for (f.W(0.5 * -t, 0.5 * -t), f.W(0.5 * t, 0.5 * t), t = 0; t < n; t++) f.contains(r[t]) ? i[t] = 1 : f.contains(r[t]) ? i[t] = 2 : i[t] = 0;
        }, v.YX = function(f, r, n, t, i) {
          for (var h = 0; h < n; h++) i[h] = f.qs(r[h], t) ? 2 : 0;
        }, v.XX = function(f, r, n, t, i) {
          var h = f.Bb, s = null;
          h != null && (s = h.Fk), h = n;
          for (var o = 0; o < n; o++) if (i[o] = 1, s != null) {
            var a = r[o];
            s.So(a.x, a.y) == 0 && (i[o] = 0, h--);
          }
          if (h != 0) for (f = f.Ga(); f.$a() && h != 0; ) for (; f.Ha() && h != 0; ) for (s = f.ha(), o = 0; o < n && h != 0; o++) i[o] == 1 && s.qs(r[o], t) && (i[o] = 2, h--);
          for (o = 0; o < n; o++) i[o] == 1 && (i[o] = 0);
        }, v.tK = function(f, r, n, t, i) {
          var h = f.getType();
          if (h == 1607) v.XX(f, r, n, t, i);
          else {
            if (!e.aa.yd(h)) throw e.i.fa("Invalid call.");
            v.YX(f, r, n, t, i);
          }
        }, v;
      }();
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r(n, t) {
          if (arguments.length == 2) {
            var i = f.call(this, !1, n.description) || this;
            i.nf(n), i.lineTo(t);
          } else i = f.call(this, !1, n) || this;
          return i;
        }
        return J(r, f), r.prototype.Ia = function() {
          return new r(this.description);
        }, r.prototype.Db = function() {
          return 1;
        }, r.prototype.getType = function() {
          return 1607;
        }, r.prototype.xG = function(n, t, i) {
          this.KS(n, t, i);
        }, r;
      }(e.Vk);
      e.Ta = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.prototype.progress = function() {
          return !0;
        }, f.zp = function(r) {
          if (r != null && !r.progress(-1, -1)) throw e.i.WC();
        }, f;
      }();
      e.mp = v;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.PK || (e.PK = {}))[v.clipWithInputHorizon = 1] = "clipWithInputHorizon", v[v.clipWithOutputHorizon = 2] = "clipWithOutputHorizon";
      var f = function() {
        function t() {
          this.Kg = 3, this.Vu = this.Jr = NaN;
        }
        return t.prototype.PW = function(i) {
          this.QB(1, i);
        }, t.prototype.QW = function(i) {
          this.QB(2, i);
        }, t.prototype.hS = function() {
          return this.hs(1);
        }, t.prototype.iS = function() {
          return this.hs(2);
        }, t.prototype.QB = function(i, h) {
          this.Kg = h ? this.Kg | i : this.Kg & ~i;
        }, t.prototype.hs = function(i) {
          return (this.Kg & i) != 0;
        }, t.prototype.Of = function() {
          var i = new t();
          return i.Jr = this.Jr, i.Vu = this.Vu, i.Kg = this.Kg, i;
        }, t;
      }();
      e.yC = f, function(t) {
        t[t.Dont_Geonomalize_Polygon = 2147483648] = "Dont_Geonomalize_Polygon", t[t.Dont_Adjust_At_Poles = 1073741824] = "Dont_Adjust_At_Poles";
      }(e.QK || (e.QK = {}));
      var r = function() {
        function t() {
          this.Kg = 0;
        }
        return t.prototype.QB = function(i, h) {
          this.Kg = h ? this.Kg | i : this.Kg & ~i;
        }, t.prototype.hs = function(i) {
          return (this.Kg & i) != 0;
        }, t.jg = function(i) {
          var h = new t();
          return h.Kg = i.Kg, h;
        }, t.prototype.mM = function(i) {
          this.Kg = i.Kg;
        }, t;
      }();
      e.AY = r;
      var n = function() {
        function t(i, h, s) {
          this.ef = i, this.Yf = h, this.Uf = new e.l(), this.Uf.K(s), this.AT = i.cc() + h.cc() + this.Uf.cc().toString();
        }
        return t.prototype.cc = function() {
          return this.AT;
        }, t.prototype.Nb = function(i) {
          return this == i || this.ef.Nb(i.ef) && this.Yf.Nb(i.Yf) && this.Uf.Nb(i.Uf);
        }, t;
      }();
      e.FY = n, n = function() {
        function t() {
          this.Yf = this.ef = null, this.rH = new f(), this.sH = new r(), this.ww = this.Wf = null, this.mw = this.Tn = !0;
        }
        return t.Nr = function(i, h, s, o) {
          var a;
          o === void 0 && (o = null), a === void 0 && (a = null);
          var u = new t();
          return u.qp(i, h, s, o, a), u;
        }, t.prototype.qp = function(i, h, s, o, a) {
          if (i == null || h == null) throw e.i.fa("invalidArgument");
          if (this.ef = i, this.Yf = h, this.mw = this.Tn = !1, o != null && (this.rH = o.Of()), a != null && this.sH.mM(a), a = !1, h.Sb() == 1 && o != null && (o = o.Jr, isNaN(o) || o == 0 || (a = !0)), i == h) this.Tn = !a, this.mw = !0;
          else {
            o = i.Sb();
            var u = h.Sb();
            if (o == 0 || u == 0) {
              if (s != null) throw e.i.N();
              i.Hd() != null && h.Hd() != null && (this.Tn = i.Hd().Nb(h.Hd()));
            } else o == 3 || u == 3 ? this.Tn = i.Nb(h) : this.ef.kS(this.Yf) ? this.Tn = !a : this.Tn = !1, this.Wf = s, this.Wf != null && this.Wf.ix(), this.mw = (this.Wf == null || this.Wf.count() == 0) && this.ef.sc().Nb(this.Yf.sc());
          }
          this.oY();
        }, t.prototype.isIdentity = function() {
          return this.Tn;
        }, t.prototype.nR = function() {
          return this.rH.Of();
        }, t.prototype.Nb = function(i) {
          return i == this || !!(i instanceof t && this.ef.Nb(i.ef) && this.Yf.Nb(i.Yf)) && (this.Wf == i.Wf || !(this.Wf == null || i.Wf == null || !this.Wf.Nb(i.Wf)));
        }, t.prototype.oY = function() {
          this.ww = new e.bu(this);
        }, t;
      }(), e.vr = n;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.Cp = function(r) {
          return r * f.oW;
        }, f.mx = function(r, n) {
          return f.gP(n - r);
        }, f.hP = function(r) {
          return -360 <= r && 720 > r ? (0 > r ? r += 360 : 360 <= r && (r -= 360), r) : (0 > (r = e.lc.RK(r)) && (r += 360), r);
        }, f.gP = function(r) {
          return 180 < (r = f.hP(r)) && (r -= 360), r;
        }, f.oW = 57.29577951308232, f;
      }();
      e.qr = v, e.Hh = function() {
        function f() {
        }
        return f.lj = function(r, n) {
          var t = new e.l();
          r.A(t);
          var i = e.cb.gh(n), h = new e.l();
          return h.K(i), h.v = t.v, h.C = t.C, h.W(0.01 * h.ca(), 0), n = e.ta.Wd(n, t, !1), h.contains(t) ? r : e.Ud.clip(r, h, n, 0);
        }, f.ks = function(r, n, t, i, h) {
          if (!e.cb.Wc(n)) throw e.i.N();
          var s = e.ta.kj(n, r, !1), o = e.cb.gh(n), a = e.cb.sc(n), u = a.Hd().ai, c = e.cb.vv(a);
          a = e.cb.ev(a), c *= 2 - c;
          var l = new e.Nc();
          o.cn(l);
          var p = [[0, 0], [0, 0]];
          if (e.Eg.Sb(n) == 2 ? i ? (p[0][0] = f.Zm(h, l), p[0][1] = o.Jp(), e.cb.vt(), o = p[0][0] * u) : (p[0][0] = o.gk(), p[0][1] = h, e.cb.vt(), o = p[0][1] * u) : o = h * u, !i && o != 0) throw e.i.N();
          var y = new e.ga(), d = new e.gd();
          r = d.Ib(r);
          for (var g = [0], b = new e.h(), x = new e.h(), m = new e.h(), w = new e.h(), j = new e.h(), M = new e.h(), A = d.Ob(r); A != -1; A = d.Rb(A)) {
            var z = d.Xa(A);
            d.D(z, m);
            for (var N = !1, I = z = d.U(z); I != -1; I = d.U(I)) {
              if (I == z) {
                if (N) break;
                N = !0;
              }
              if (d.D(I, w), i && s < h - m.x && w.x - h > s || s < h - w.x && m.x - h > s || !i && s < -m.y && w.y > s || s < -w.y && m.y > s) do
                if (!(Math.abs(m.x - w.x) >= 0.5 * l.R())) {
                  if (e.Eg.Sb(n) == 2 ? (p[0][0] = f.Zm(m.x, l), p[0][1] = m.y, p[1][0] = f.Zm(w.x, l), p[1][1] = w.y, e.cb.dW(), j.x = p[0][0] * u, j.y = p[0][1] * u, M.x = p[1][0] * u, M.y = p[1][1] * u) : (j.x = m.x * u, j.y = m.y * u, M.x = w.x * u, M.y = w.y * u), M.x = 6.283185307179586 * (w.x - m.x) / l.R() + j.x, i) {
                    if (x.x = o, x.y = f.Nz(a, c, j, M, o, t), isNaN(x.y)) break;
                  } else {
                    if (x.x = f.Lz(a, c, j, M, t), isNaN(x.x)) break;
                    x.y = 0;
                  }
                  e.kb.wd(a, c, j.x, j.y, M.x, M.y, y, null, null, t);
                  var C = y.u;
                  e.kb.wd(a, c, j.x, j.y, x.x, x.y, y, null, null, t);
                  var T = y.u;
                  e.Eg.Sb(n) == 2 ? (p[0][0] = x.x / u, p[0][1] = x.y / u, e.cb.bR(), i ? (b.y = p[0][1], b.x = h) : (b.x = f.os(p[0][0], m.x, w.x, l), b.y = h)) : i ? (b.x = h, b.y = x.y / u) : (b.x = f.os(x.x / u, m.x, w.x, l), b.y = h), g[0] = 0 < C ? e.O.Rk(T / C, 0, 1) : 0.5, g[0] != 0 && g[0] != 1 && (C = d.Ma(I), d.Ul(C, g, 1), d.Cb(d.U(C), b.x, b.y));
                }
              while (!1);
              m.L(w);
            }
          }
          return d.Ne(r);
        }, f.Fn = function(r, n, t, i, h) {
          if (r.B()) return r;
          var s = e.cb.bf(n);
          return f.Hp(r, t - 180 * s, 360 * s, n, i, h, !0);
        }, f.Nz = function(r, n, t, i, h, s) {
          if (3.141592653589793 <= Math.abs(t.x - i.x) || !f.Sn(t.x, i.x, h)) return NaN;
          if (t.x > i.x) var o = i;
          else o = t, t = i;
          i = new e.ga(0);
          var a = new e.ga(0), u = new e.ga(0);
          e.kb.wd(r, n, o.x, o.y, t.x, t.y, a, i, null, s);
          var c = a.u, l = 0, p = 1, y = new e.h();
          for (y.L(o); c * (p - l) > 1e-12 * r; ) {
            var d = 0.5 * (l + p);
            if (e.kb.oj(r, n, o.x, o.y, c * d, i.u, a, u, s), y.x = a.u, y.y = u.u, y.x == h) break;
            if (f.Sn(o.x, y.x, h)) p = d;
            else {
              if (!f.Sn(t.x, y.x, h)) return NaN;
              l = d;
            }
          }
          return y.y;
        }, f.Sn = function(r, n, t) {
          return r = v.Cp(r), n = v.mx(r, v.Cp(n)), (t = v.mx(r, v.Cp(t))) == 0 || 0 < n && 0 < t && t <= n || 0 > n && 0 > t && t >= n;
        }, f.Zm = function(r, n) {
          var t = n.va - n.oa;
          return n.It(r - Math.floor((r - n.oa) / t) * t);
        }, f.os = function(r, n, t, i) {
          var h = new e.Nc();
          for (h.K(n, t), t = i.R(), r = Math.floor((r - n) / t) * t + r, h = h.sf(); Math.abs(r - h) > Math.abs(r + t - h); ) r += t;
          return r;
        }, f.Lz = function(r, n, t, i, h) {
          if (t.y > i.y) var s = i;
          else s = t, t = i;
          if ((i = new e.Nc()).K(s.y, t.y), !i.contains(0) || 3.141592653589793 <= Math.abs(s.x - t.x)) return NaN;
          if (s.x == t.x) return s.x;
          var o = new e.ga(0), a = new e.ga(0), u = new e.ga(0);
          e.kb.wd(r, n, s.x, s.y, t.x, t.y, a, o, null, h);
          var c = a.u, l = 0, p = 1, y = new e.h();
          for (y.L(s); c * (p - l) > 1e-12 * r; ) {
            var d = 0.5 * (l + p);
            if (e.kb.oj(r, n, s.x, s.y, c * d, o.u, a, u, h), y.x = a.u, y.y = u.u, i.K(s.y, y.y), y.y == 0) break;
            if (i.contains(0)) p = d;
            else {
              if (i.K(t.y, y.y), !i.contains(0)) return NaN;
              l = d;
            }
          }
          return y.x;
        }, f.Hp = function(r, n, t, i, h, s, o) {
          var a = new e.l();
          if (r.A(a), a.B()) return r;
          var u = new e.Nc();
          a.cn(u);
          var c = new e.Nc();
          if (c.K(n, n + t), c.contains(u) && c.va != u.va) return r;
          var l = new e.l();
          l.K(a);
          var p = r.getType();
          if (p == 33) return ((a = (l = h ? r : r.Of()).Lg()) < c.oa || a >= c.va || o && a == c.va) && (a += Math.ceil((c.oa - a) / t) * t, a = c.It(a), l.cC(a)), l;
          if (p == 550) {
            for (i = (l = h ? r : r.Of()).ub(0), p = 2 * l.I(), r = !1, h = 0; h < p; h += 2) ((a = i.read(h)) < c.oa || a >= c.va || o && a == c.va) && (r = !0, a += Math.ceil((c.oa - a) / t) * t, a = c.It(a), i.write(h, a));
            return r && l.Pc(1993), l;
          }
          if (c.contains(u)) return r;
          if (p == 197) return t = h ? r : r.Of(), a.Ea(l), t.Xo(a), t;
          var y = 0.1 * Math.max(a.ca(), a.R());
          for (l.W(0, y), o = r, c = i.Xd(0), r = e.Gh.local(), h = new e.Dd(); ; ) {
            var d = Math.floor((u.oa - n) / t), g = Math.ceil((u.va - n) / t);
            if (!(3 < g - d)) break;
            d = Math.floor(0.5 * (g + d)), l.v = a.v - y, l.C = n + t * d;
            var b = e.Ud.clip(o, l, c, s);
            l.v = l.C, l.C = a.C + y;
            var x = e.Ud.clip(o, l, c, s);
            h.gg((d - g) * t, 0), x.Oc(h), p == 1736 ? o = r.V(b, x, i, null) : (o = b).add(x, !1), o.A(a), a.cn(u);
          }
          for (l.v = n, l.C = n + t, (n = new e.l()).K(l), n.W(c, 0), (n = Math.floor((a.v - l.v) / t) * t) != 0 ? (l.move(n, 0), h.gg(-n, 0)) : h.RB(), n = p == 1607 ? new e.Ta(o.description) : new e.Da(o.description), s = new e.l(), u = new e.l(); a.C > l.v; ) (y = e.Ud.clip(o, l, c, 0)).A(u), (p == 1607 ? !y.B() && (u.R() > c || u.ca() > c) : !y.B() && (p != 1736 || u.R() > c)) && (y.Oc(h), y.A(u), n.A(s), s.W(c, c), s.isIntersecting(u) && p == 1736 ? n = r.V(n, y, i, null) : n.add(y, !1)), l.move(t, 0), h.shift(-t, 0);
          return n;
        }, f.WI = function(r, n, t, i) {
          var h = new e.de(t.description);
          h.Fd(t, 0, -1), h = e.cb.zh(h, r, n);
          var s = t.I();
          if (i.Oa(), !e.cb.Wc(r) || s != h.I()) return !1;
          var o = new e.l();
          t.A(o);
          var a = new e.l();
          if (h.A(a), o = o.R(), a = a.R(), o != 0 && a != 0) {
            if (a /= o, r = e.cb.gh(n).R() / e.cb.gh(r).R(), 1e-10 < Math.abs(a / r - 1)) return !1;
          } else if (o != 0 || a != 0) return !1;
          for (i.add(t, !1), t = 0; t < s; t++) r = h.Na(t), i.Cb(t, r);
          return !0;
        }, f.Oz = function() {
          throw e.i.Ie();
        }, f;
      }();
    }(k || (k = {})), function(e) {
      var v, f, r;
      (f = v = e.si || (e.si = {}))[f.Clip = 0] = "Clip", f[f.DontClip = 1] = "DontClip", f[f.PannableFold = 2] = "PannableFold", function(n) {
        n[n.Geodesic = 0] = "Geodesic", n[n.Loxodrome = 1] = "Loxodrome", n[n.GreatElliptic = 2] = "GreatElliptic", n[n.NormalSection = 3] = "NormalSection", n[n.ShapePreserving = 4] = "ShapePreserving";
      }(r = e.WK || (e.WK = {})), e.zb = function() {
        function n() {
        }
        return n.xv = function(t, i, h) {
          if (h || 0 < i) {
            for (t = t.toString(e.Sc.PE_STR_NAME_CANON | e.Sc.PE_STR_AUTH_NONE), i = [], h = 0; h < t.length; h++) i[h] = "a" <= t[h] && "z" >= t[h] ? i[h] = t[h].toUpperCase() : t[h];
            return i.join();
          }
          return t.toString(e.Sc.PE_STR_AUTH_TOP);
        }, n.ur = function(t, i, h, s) {
          var o = s.length, a = h.I();
          if (a != 0) {
            var u = h.ub(0), c = Math.min(a, o), l = 0, p = t.eh();
            isNaN(i) && (i = 0);
            for (var y = t.Wc(), d = 179 * (t = y ? t.sc().Oe().R() : 0) / 360; 0 < a; ) {
              if (u.uB(l << 1, c, s), e.ej.projToGeogCenter(p, c, s, i), y) for (var g = 0; g < c; g++) {
                var b = s[g][0] - i, x = e.lc.sign(b), m = u.read(2 * (l + g));
                0 > x * e.lc.sign(m) && Math.abs(b) > d && (s[g][0] += -x * t);
              }
              u.uC(l << 1, c, s), l += c, a -= c, c = Math.min(a, o);
            }
            h.Pc(1993);
          }
        }, n.IL = function(t, i, h, s) {
          var o = 0, a = t.eh();
          isNaN(o) && (o = 0);
          var u = t.Wc(), c = t.bf();
          t = 360 * c, c *= 179;
          for (var l = s.length, p = 0; p < h; ) {
            for (var y = p; y < h && i[y].isNaN(); ++y) p++;
            var d = Math.min(l, h - p);
            if (0 < d) {
              y = 1;
              for (var g = p + 1; y < d; ++y, ++g) if (i[g].isNaN()) {
                d = y;
                break;
              }
              if (e.ta.Jy(s, i, p, d), e.ej.projToGeogCenter(a, d, s, o), u) for (y = 0, g = p; y < d; ++y, ++g) {
                var b = i[g].x, x = s[y][0] - o, m = e.lc.sign(x);
                0 > m * e.lc.sign(b) && Math.abs(x) > c && (s[y][0] -= m * t);
              }
              e.ta.Iy(i, p, s, d), p += d;
            }
          }
        }, n.Lx = function(t, i, h) {
          var s = h.length, o = i.I();
          if (!(1 > o)) {
            var a = i.ub(0), u = Math.min(o, s), c = 0, l = t.eh(), p = t.Wc(), y = p ? t.Oe().R() : 0, d = 179 * y / 360, g = 0;
            for (p && (g = t.zi()); 0 < o; ) {
              if (a.uB(c << 1, u, h), e.ej.geogToProj(l, u, h), p) for (t = 0; t < u; t++) {
                var b = h[t][0], x = e.lc.sign(b), m = a.read(2 * (c + t)) - g;
                0 > x * e.lc.sign(m) && Math.abs(b) > d && (h[t][0] += -x * y);
              }
              a.uC(c << 1, u, h), c += u, o -= u, u = Math.min(o, s);
            }
            i.Pc(1993);
          }
        }, n.HL = function(t, i, h, s) {
          if (h != 0) {
            var o = t.eh(), a = t.Wc(), u = a ? t.Oe().R() : 0, c = 179 * u / 360, l = 0;
            for (a && (l = t.zi()), t = 0; t < h; ) {
              for (var p = t; p < h && i[p].isNaN(); ++p) t++;
              var y = Math.min(s.length, h - t);
              if (0 < y) {
                p = 1;
                for (var d = t + 1; p < y; ++p, ++d) if (i[d].isNaN()) {
                  y = p;
                  break;
                }
                if (e.ta.Jy(s, i, t, y), e.ej.geogToProj(o, y, s), a) for (p = 0, d = t; p < y; p++) {
                  var g = s[p][0], b = e.lc.sign(g);
                  0 > b * e.lc.sign(i[d].x - l) && Math.abs(g) > c && (s[p][0] -= b * u);
                }
                e.ta.Iy(i, t, s, y), t += y;
              }
            }
          }
        }, n.tr = function(t, i, h, s) {
          var o = i.I();
          if (o != 0) {
            var a = i.ub(0), u = t.ef, c = t.Yf, l = u.sc().Qp(), p = c.sc().Qp(), y = u.bf(), d = c.bf();
            if ((t = t.Wf) == null || t.count() == 0) {
              for (h = l / p, s = (u.Up() - c.Up()) * d, p = -90 * y, t = 90 * y, l = !1, d = 1, u = 2 * o; d < u; ) y = a.get(d), (c = e.O.Rk(y, p, t)) != y && (a.set(d, c), l = !0), d += 2;
              if (s != 0 || h != 1) for (l = !0, p = new e.h(), d = 0; d < o; d++) a.tc(2 * d, p), p.x *= h, p.x += s, p.y *= h, a.Tt(2 * d, p);
              l && i.Pc(1993);
            } else {
              u = s.length, c = Math.min(o, u);
              var g = e.O.lg(c), b = null, x = 0, m = NaN, w = NaN, j = 360 * d, M = d / y;
              h && (w = 90 * d, m = 89.9 * y, b = e.O.lg(c));
              for (var A = !0, z = 0; o != 0; ) {
                for (y = !1, a.uB(x << 1, c, s), d = 0; d < c; d++) g[d] = s[d][0];
                if (h) for (d = 0; d < c; d++) {
                  var N = Math.abs(s[d][1]) - m;
                  0 < N && (y = s[d][1], s[d][1] = e.lc.Cn(m, y), b[d] = e.lc.Cn(N, y), y = !0);
                }
                for (d = s[0][0], t.transform(s, c, l, p), A && (z = s[0][0] - M * d, A = !1), d = 0; d < c; d++) N = s[d][0] - g[d] * M - z, 200 < Math.abs(N) && (s[d][0] = 0 < N ? s[d][0] - j : s[d][0] + j);
                if (y) {
                  for (d = 0; d < c; d++) b[d] != 0 && (s[d][1] += M * b[d], s[d][1] > w ? s[d][1] = w : s[d][1] < -w && (s[d][1] = -w));
                  for (y = 0; y < c; y++) b[y] = 0;
                }
                a.uC(x << 1, c, s), x += c, o -= c, c = Math.min(o, u);
              }
              i.Pc(1993);
            }
          }
        }, n.GL = function(t, i, h, s) {
          if (t.mw) s = 90 * t.ef.bf(), e.ta.dK(i, h, -s, s);
          else {
            var o = t.Wf, a = t.ef, u = t.Yf;
            t = a.Xr();
            var c = u.Xr(), l = a.bf(), p = 90 * l, y = u.bf();
            if (o == null || o.count() == 0) {
              if (s = t / c, o = (a.Up() - u.Up()) * y, e.ta.dK(i, h, -p, p), o != 0 || s != 1) for (y = 0; y < h; y++) i[y].x *= s, i[y].x += o, i[y].y *= s;
            } else {
              a = Math.min(h, s.length), p = e.O.lg(a), u = 360 * y, l = y / l;
              for (var d = !0, g = 0, b = 0; h != 0; ) {
                for (y = 0; y < a; y++) p[y] = i[y + b].x;
                for (y = i[0].x, e.ta.Jy(s, i, b, a), o.transform(s, a, t, c), e.ta.Iy(i, b, s, a), d && (g = i[0].x - l * y, d = !1), y = 0; y < a; y++) {
                  var x = i[b + y].x - p[y] * l - g;
                  200 < Math.abs(x) && (i[b + y].x = 0 < x ? i[b + y].x - u : i[b + y].x + u);
                }
                b += a, h -= a, a = Math.min(h, s.length);
              }
            }
          }
        }, n.dv = function(t, i) {
          return t = t.gh(), isNaN(i) || t.Ju(i, 0), t;
        }, n.UQ = function(t, i, h, s, o, a, u, c) {
          for (var l = n.dv(s, o), p = l.R(), y = p / 360, d = n.pE * y, g = t.ub(0), b = i.Wc(), x = b ? p / i.Oe().R() : 0, m = !1, w = new e.Da(h.description), j = 0, M = h.da(); j < M; ++j) {
            var A = b, z = new e.Ta(h.description);
            if (z.addPath(h, j, !0), u != 0) {
              var N = n.PD(!0, z, l.H - c, l.H, u);
              (m = m || N) && (A = !1);
            }
            var I = -1;
            A && (I = t.Ba(j));
            var C = z.ub(0), T = z.I(), D = 0, B = C.read(0), E = 0;
            N = 3 * s.Xd(0);
            var G = !1, H = new e.h();
            H.Rc();
            var U = new e.h();
            U.Rc();
            for (var $ = !1, W = 1; W < T; ++W) {
              var R = e.h.construct(C.eg(2 * W), C.eg(2 * W + 1)), K = R.x, S = K + D, X = S - B;
              if (R.x = S, Math.abs(X) > d) {
                if (A) {
                  var V = I + (W + 1 < T ? W : 0), nt = g.read(2 * (I + W - 1));
                  V = (g.read(2 * V) - nt) * x, Math.abs(X - V) > 1 * y && (A = !1);
                }
                A || (S = K + (D -= e.lc.Cn(p, S - B)), ++E, $ = D != 0, R.x = S);
              } else G || e.ta.AG(U, H, R, N) && (G = !0);
              $ && C.write(2 * W, S), B = S, U.L(H), H.L(R);
            }
            0 < E && z.Pc(1993), A = z.Na(0), T = z.Na(T - 1), z = e.h.tb(A, T) < N ? n.uQ(z, s, o, a, G) : n.vQ(t, j, z, s, o), w.add(z, !1);
          }
          return o = s.Xd(0), h = l.R() / 180, n.Jt(w, l, 0.1 * o, !1), w = w != (o = e.ri.clip(w, l, o, h, a)), t = t.Ke(), u = 0, 0 < (c = o.Ke()) && 0 > t ? u = 1 : 0 >= c && 0 < t && (c == 0 ? (c = NaN, i.Sb() == 2 ? c = i.ml().Ke() : i.Sb() == 1 && (c = i.Oe().wF()), t > 0.99 * c && (u = -1)) : u = -1), u != 0 && ((i = new e.Da(o.description)).tp(l), (i = e.Xl.local().V(i, h, a)).add(o, !1), w = !0, o = i), w && (o = e.Yl.local().V(o, s, !1, a)), o;
        }, n.vQ = function(t, i, h, s, o) {
          var a = h.I(), u = h.Na(0), c = h.Na(a - 1);
          o = (s = n.dv(s, o)).R(), u = e.lc.sign(c.x - u.x);
          var l = new e.l();
          h.xc(l);
          var p = s.gk();
          if (c = p - o, p += o, 0 <= u) {
            var y = Math.ceil((c - l.v) / o);
            for (y *= o; c > l.v + y; ) y += o;
            for (; c < l.C + y; ) y -= o;
            var d = y;
            720 < l.R() && (p = c + 360 * Math.ceil(l.R() / 360));
          } else {
            for (y = Math.ceil((p - l.C) / o), y *= o; p < l.C + y; ) y -= o;
            for (; p > l.v + y; ) y += o;
            d = y, 720 < l.R() && (c = p - 360 * Math.ceil(l.R() / 360));
          }
          y = u * o;
          var g = e.l.construct(l.v, l.G, l.C, l.H);
          g.move(d, 0);
          var b = new e.Dd();
          b.gg(d, 0), h.Oc(b), (l = new e.Ta(h.description)).add(h, !1), d = h.Na(a - 1), o = 0;
          for (var x = l.Na(0).x, m = 0; 0 < u ? g.C < p : g.v > c; ) 1024 <= m && (m = 0), g.move(y, 0), b.Gb = y, h.Oc(b), x += y, s.v <= x && s.C >= x && (o = l.I() - 1), h.Cb(0, d), d = h.Na(a - 1), l.Dr(h, 0, 0, a - 1, !1);
          return h = new e.Da(l.description), a = 0 < t.Ir(i), h.add(l, !1), t = l.Na(0), c = l.Na(l.I() - 1), i = h.da() - 1, (0 > u ? a : !a) ? (u = e.h.construct(c.x, s.H), h.Ci(u), u = e.h.construct(s.gk(), s.H), h.Ci(u), s = e.h.construct(t.x, s.H)) : (u = e.h.construct(c.x, s.G), h.Ci(u), u = e.h.construct(s.gk(), s.G), h.Ci(u), s = e.h.construct(t.x, s.G)), h.Ci(s), h.xG(0, i, 0), h.kO(o), h;
        }, n.uQ = function(t, i, h, s, o) {
          var a = new e.Da(t.description);
          a.add(t, !1), a.DB(0, a.I() - 1);
          var u = new e.l();
          a.xc(u);
          var c = (h = n.dv(i, h)).R(), l = Math.ceil((h.v - u.v) / c);
          for (l *= c; h.v > u.v + l; ) l += c;
          for (; h.v < u.C + l; ) l -= c;
          if ((l += c) != 0) {
            u.move(l, 0);
            var p = new e.Dd();
            p.gg(l, 0), a.Oc(p);
          }
          if (h.v <= u.v && h.C > u.C) return o && (o = a.Ke(), i = (a = e.Yl.local().V(a, i, !0, s)).Ke(), (i = e.lc.sign(o) != e.lc.sign(i)) && a.oJ()), a;
          for ((t = new e.Da(t.description)).add(a, !1), o = o || u.R() > c - i.Xd(0); u.v < h.C; ) u.move(c, 0), (p = new e.Dd()).gg(c, 0), a.Oc(p), t.add(a, !1);
          return o && (o = t.Ke(), t.Yo(1), i = (t = e.Yl.local().V(t, i, !0, s)).Ke(), (i = e.lc.sign(o) != e.lc.sign(i)) && t.oJ()), t;
        }, n.PD = function(t, i, h, s, o) {
          for (var a = i.ub(0), u = i.I(), c = !1, l = 0; l < u; l++) {
            var p = e.h.construct(a.eg(2 * l), a.eg(2 * l + 1));
            if (1 & o && p.y >= h) {
              c = !0;
              break;
            }
            if (2 & o && p.y <= -h) {
              c = !0;
              break;
            }
          }
          if (!c) return !1;
          a = !1, t && (a = i.Nn(0)), u = (t = new e.gd()).Ib(i), c = t.Ob(u);
          var y = -1, d = !0, g = new e.h();
          g.Rc(), l = new e.Sa();
          for (var b = -1, x = t.Xa(c); x != -1; x = t.U(x)) {
            p = t.Na(x);
            var m = 1 & o && 90 <= p.y ? 1 : 0;
            if (m |= 2 & o && p.y <= -h ? 2 : 0, 0 < y && y != m) {
              if (g.x != p.x) {
                g.x = p.x, t.Vi(t.Ma(x), l);
                var w = t.wj(c, x, l);
                t.mf(w, g);
              }
              if (a) for (b = b != -1 ? t.U(b) : t.Xa(c), w = t.Ma(x); b != w; ) b = t.pd(b, !1);
              b = -1;
            }
            0 < m && (p.y = e.lc.Cn(s, p.y), t.mf(x, p), d || y == m || (p.x != g.x ? (t.Vi(x, l), w = t.wj(c, x, l), t.Cb(w, g.x, p.y), b = w) : b = x)), y = m, g = p, d = !1;
          }
          if (a) {
            if (b != -1) for (b = t.U(b); b != -1; ) b = t.pd(b, !1);
            h = t.Xa(c), t.fq(h, t.rj(c)) || (t.Vi(h, l), t.wj(c, -1, l));
          }
          return t.Ne(u).copyTo(i), !0;
        }, n.Mz = function(t, i, h, s) {
          var o = t;
          if (o.B() || h == v.DontClip) return o;
          var a = o.getType();
          if (a == 33) return o = [(s = o).D()], n.yG(o, 1, i, h), o[0].isNaN() ? s.Oa() : s.Cb(o[0]), t;
          var u = (t = i.sc()).bf(), c = 90 * u, l = 180 * u, p = 360 * u, y = i.zi(), d = 0.5 * u, g = new e.l();
          o.A(g);
          var b = i.Vr(), x = i.PQ(), m = b.getType() == 197;
          if (i = new e.l(), b.A(i), h == v.PannableFold && (h = t.Oe().R(), i.v = y - 0.5 * h, i.C = i.v + h), g.G < -c || g.H > c) {
            if (new e.l().K(g.v - u, -c, g.C + u, c), (o = e.ri.Nu(o, i, t, NaN, 0, s)).B()) return o;
            o.A(g);
          }
          if (x && (i.H < g.G || i.G > g.H)) return o.Ia();
          if (g.R() > p && (o = n.Hp(o, y - l, p, t, !0, 0, !0, s)).A(g), (c = n.eO(g.v, g.C, i.v, i.C, p)) != 0 && g.move(c, 0), g.C > i.C || g.v < i.v) {
            if (g.C > i.C) for (; g.v >= i.C; ) g.move(-p, 0), c -= p;
            for (; g.v < i.C - p; ) g.move(p, 0), c += p;
          }
          if (h = e.ta.Hu(t, b), c != 0 && ((u = new e.Dd()).gg(c, 0), o.Oc(u)), x) {
            if (m && i.contains(g)) return o;
            for (x = [null, null], c = 0; 2 > c; c++) {
              if (m ? u = e.aa.Hc(a) ? e.ri.clip(o, i, h, d, s) : e.ri.clip(o, i, h, 0, s) : (u = e.Xj.local().V(o, b, t, s)) == b && (u = e.aa.jg(u)), i.v <= g.v && i.C >= g.C || i.v >= g.v && i.C <= g.C) return u;
              x[c] = u, c == 0 && (g.move(-p, 0), (u = new e.Dd()).gg(-p, 0), o.Oc(u));
            }
            if (a == 550) x[0].Fd(x[1], 0, -1);
            else if (e.aa.Hc(a)) x[0].add(x[1], !1);
            else {
              if (a != 33) throw e.i.fa("intersect_with_GCS_horizon: unexpected geometry type");
              x[0].B() && (x[0] = x[1]);
            }
            return x[0];
          }
          if (i.H < g.G || i.G > g.H) return o;
          for (a = 0; !o.B() && g.C > i.v; ) a != 0 && ((u = new e.Dd()).gg(a, 0), o.Oc(u)), e.dj.local().V(4, o, b, t, s) || b == (o = e.kp.local().V(o, b, t, s)) && (o = e.aa.jg(o)), a != 0 && ((d = new e.Dd()).gg(-a, 0), o.Oc(d)), a -= p, g.move(-p, 0);
          return o;
        }, n.yG = function(t, i, h, s) {
          if (i != 0 && s != v.DontClip) if (s == v.PannableFold) {
            s = h.HR();
            for (var o = i, a = 0; a < i; a++) (t[a].y > s.H || t[a].y < s.G) && (t[a].Rc(), o--);
            o != 0 && n.av(t, i, s.v, s.R());
          } else {
            var u = 90 * (s = h.bf()), c = 180 * s;
            for (s *= 360, o = i, a = 0; a < i; a++) (t[a].y > u || t[a].y < -u) && (t[a].Rc(), o--);
            if (o != 0) {
              (o = new e.l()).Zw(t, i), u = h.Vr();
              var l = h.hv();
              a = u.getType() == 197;
              var p = new e.l();
              if (u.A(p), !l || !(p.H < o.G || p.G > o.H)) if (l) if (n.av(t, i, p.gk() - c, s), o = i, a) for (a = 0; a < i; a++) p.contains(t[a]) || (t[a].Rc(), o--);
              else for (h = e.ta.Hu(h.sc(), u), a = 0; a < i; a++) (c = e.hd.Yd(u, t[a], h) != 0) || (t[a].Rc(), o--);
              else for (n.av(t, i, -c, s), o = i, h = e.ta.Hu(h.sc(), u), a = 0; a < i; a++) (c = t[a]).isNaN() && o--, l = n.tE(c.x, p.v, p.C, s), c.x += l, (c = e.hd.Yd(u, c, h) != 0) && (t[a].Rc(), o--);
            }
          }
        }, n.Hp = function(t, i, h, s, o, a, u, c) {
          var l = t.getType(), p = i + h;
          if (l === 33) {
            var y = (s = o ? t : t.Of()).Lg();
            return (y < i || y >= p || u && y == p) && (y += Math.ceil((i - y) / h) * h, y = e.O.Rk(y, i, p), s.cC(y)), s;
          }
          if (t.B() || (y = new e.l(), t.A(y), y.B())) return t;
          var d = new e.Nc();
          y.cn(d);
          var g = new e.Nc();
          if (g.K(i, p), g.contains(d)) return t;
          if ((p = new e.l()).K(y), l === 550) {
            for (c = (s = o ? t : t.Of()).ub(0), l = 2 * s.I(), p = !1, i = 0; i < l; i += 2) ((y = c.read(i)) < g.oa || y >= g.va || u && y == g.va) && (p = !0, y += Math.ceil((g.oa - y) / h) * h, y = g.It(y), c.write(i, y));
            return p && s.Pc(1993), s;
          }
          if (l == 197) return h = o ? t : t.Of(), y.Ea(p), h.Xo(y), h;
          var b = 0.1 * Math.max(y.ca(), y.R());
          for (p.W(0, b), u = t, g = s.Xd(0), t = e.Gh.local(), o = new e.Dd(); ; ) {
            var x = Math.floor((d.oa - i) / h), m = Math.ceil((d.va - i) / h);
            if (!(3 < m - x)) break;
            x = Math.floor(0.5 * (m + x)), p.v = y.v - b, p.C = i + h * x;
            var w = e.ri.clip(u, p, g, a, c);
            p.v = p.C, p.C = y.C + b;
            var j = e.ri.clip(u, p, g, a, c);
            o.gg((x - m) * h, 0), j.Oc(o), l == 1736 ? u = t.V(w, j, s, null) : (u = w).add(j, !1), u.A(y), y.cn(d);
          }
          for (p.v = i, p.C = i + h, (i = new e.l()).K(p), i.W(g, 0), (i = Math.floor((y.v - p.v) / h) * h) != 0 ? (p.move(i, 0), o.gg(-i, 0)) : o.RB(), i = l == 1607 ? new e.Ta(u.description) : new e.Da(u.description), a = new e.l(), d = new e.l(); y.C > p.v; ) (b = e.ri.clip(u, p, g, 0, c)).A(d), (l == 1607 ? !b.B() && (d.R() > g || d.ca() > g) : !b.B() && (l != 1736 || d.R() > g)) && (b.Oc(o), b.A(d), i.A(a), a.W(g, g), a.isIntersecting(d) && l == 1736 ? i = t.V(i, b, s, null) : i.add(b, !1)), p.move(h, 0), o.shift(-h, 0);
          return i;
        }, n.av = function(t, i, h, s) {
          for (var o = h + s, a = 0; a < i; a++) {
            var u = t[a].x;
            h <= u && u < o || !(u < h || u > o || u == o) || (u += Math.ceil((h - u) / s) * s, u = e.O.Rk(u, h, o), t[a].x = u);
          }
        }, n.Fn = function(t, i, h, s, o, a) {
          if (!i.Wc()) throw e.i.fa("fold_into_360_degree_range");
          if (t.B()) return t;
          if (i.Sb() == 2) {
            h = i.pv();
            var u = i.ov() - h;
          } else {
            var c = i.bf();
            u = 360 * c, h -= 180 * c;
          }
          return n.Hp(t, h, u, i, s, o, !0, a);
        }, n.qF = function(t, i, h, s) {
          if (h.Sb() == 2) s = h.pv(), h = h.ov() - s;
          else {
            var o = h.bf();
            h = 360 * o, s -= 180 * o;
          }
          n.av(t, i, s, h);
        }, n.lj = function(t, i) {
          var h = i.Oe();
          if (t.getType() == 33) {
            var s = t.ih();
            return h.G <= s && s <= h.H ? t : t.Ia();
          }
          s = new e.l(), t.A(s);
          var o = new e.l();
          return o.K(h), o.v = s.v, o.C = s.C, o.W(0.01 * o.ca(), 0), h = e.ta.uy(i, s), o.contains(s) ? t : e.ri.clip(t, o, h, 0, null);
        }, n.ir = function(t, i, h) {
          return t > i.C && t - i.C < h ? i.C : t < i.v && i.v - t < h ? i.v : t;
        }, n.FX = function(t, i, h, s) {
          s.x = n.ir(t.x, i, h), s.y = t.y;
        }, n.EX = function(t, i, h, s) {
          for (var o = 0; o < i; o++) t[o].y < h.G || t[o].y > h.H ? t[o].Rc() : t[o].x = n.ir(t[o].x, h, s);
        }, n.Jt = function(t, i, h, s) {
          if (!t.B()) {
            var o = t.getType();
            if (!s || o != 1736) if (e.aa.xj(o)) {
              s = t.ub(0), o = 0;
              for (var a = t.I(); o < a; o++) {
                var u = s.read(2 * o), c = n.ir(u, i, h);
                c != u && s.write(2 * o, c);
              }
              t.Pc(1993);
            } else if (o == 197) s = new e.l(), t.A(s), s.v = n.ir(s.v, i, h), s.C = n.ir(s.C, i, h), t.Xo(s);
            else {
              if (o != 33) throw e.i.fa("internal error");
              t.cC(n.ir(t.Lg(), i, h));
            }
          }
        }, n.uS = function(t, i, h, s) {
          var o = new e.gd(), a = o.Ib(t);
          return t = e.ta.Hu(i, t), n.ks(o, a, i, t, h, !0, s), o.Ne(a);
        }, n.ks = function(t, i, h, s, o, a, u) {
          if (!h.Wc()) throw e.i.N("invalid call");
          var c = h.Oe(), l = h.sc(), p = l.eh().getDatum().getSpheroid();
          l = l.Hd().ai;
          var y = p.getFlattening();
          p = p.getAxis(), y *= 2 - y;
          var d = new e.Nc();
          c.cn(d);
          var g = null, b = [[0, 0], [0, 0]];
          if (h.Sb() == 2 ? (g = h.eh(), a ? (b[0][0] = n.Zm(u, d), b[0][1] = c.Jp(), e.ej.projToGeog(g, 1, b), c = b[0][0] * l) : (b[0][0] = c.gk(), b[0][1] = u, e.ej.projToGeog(g, 1, b), c = b[0][1] * l)) : c = u * l, !a && c != 0 && o != r.GreatElliptic) throw e.i.fa("invalid argument");
          var x = new e.ga(), m = [0], w = new e.h(), j = new e.h(), M = new e.h(), A = [null, null], z = new e.h(), N = new e.h(), I = new e.h(), C = new e.h();
          for (i = t.Ob(i); i != -1; i = t.Rb(i)) {
            var T = t.Xa(i);
            t.D(T, z);
            for (var D = !1, B = T = t.U(T); B != -1; B = t.U(B)) {
              if (B == T) {
                if (D) break;
                D = !0;
              }
              if (t.D(B, N), a && (s < u - z.x && N.x - u > s || s < u - N.x && z.x - u > s) || !a && (u != 0 || s < -z.y && N.y > s || s < -N.y && z.y > s)) do
                if (!(Math.abs(z.x - N.x) >= 0.5 * d.R())) {
                  if (h.Sb() == 2 ? (b[0][0] = n.Zm(z.x, d), b[0][1] = z.y, b[1][0] = n.Zm(N.x, d), b[1][1] = N.y, e.ej.projToGeogCenter(g, 2, b, 0), I.x = b[0][0] * l, I.y = b[0][1] * l, C.y = b[1][1] * l) : (I.x = z.x * l, I.y = z.y * l, C.y = N.y * l), C.x = 2 * (N.x - z.x) * Math.PI / d.R() + I.x, a) {
                    if (j.x = c, j.y = n.Nz(p, y, I, C, c, o), isNaN(j.y)) break;
                    A[0] = j;
                    var E = 1;
                  } else if (o == r.GreatElliptic) {
                    var G = [0, 0];
                    if ((E = e.Ox.Oz(y, I, C, c, G)) == 0) break;
                    j.x = G[0], j.y = c, A[0] = j, E == 2 && (M.x = G[1], M.y = c, A[1] = M);
                  } else {
                    if (j.x = n.Lz(p, y, I, C, o), isNaN(j.x)) break;
                    j.y = 0, A[0] = j, E = 1;
                  }
                  var H = -1;
                  for (G = 0; G < E; G++) {
                    e.kb.wd(p, y, I.x, I.y, C.x, C.y, x, null, null, o);
                    var U = x.u;
                    e.kb.wd(p, y, I.x, I.y, A[G].x, A[G].y, x, null, null, o);
                    var $ = x.u;
                    if (h.Sb() == 2 ? (b[0][0] = A[G].x / l, b[0][1] = A[G].y / l, e.ej.geogToProj(g, 1, b), a ? (w.y = b[0][1], w.x = u) : (w.x = n.os(b[0][0], z.x, N.x, d), w.y = u)) : a ? (w.x = u, w.y = A[G].y / l) : (w.x = n.os(A[G].x / l, z.x, N.x, d), w.y = u), m[0] = 0 < U ? e.O.Rk($ / U, 0, 1) : 0.5, m[0] == 0 || m[0] == 1) break;
                    H > m[0] || (H = t.Ma(B), t.Ul(H, m, 1), t.Cb(t.U(H), w.x, w.y), H = m[0]);
                  }
                }
              while (!1);
              z.L(N);
            }
          }
        }, n.Zm = function(t, i) {
          var h = i.va - i.oa;
          return i.It(t - Math.floor((t - i.oa) / h) * h);
        }, n.os = function(t, i, h, s) {
          var o = new e.Nc();
          for (o.K(i, h), h = s.R(), t = Math.floor((t - i) / h) * h + t, o = o.sf(); Math.abs(t - o) > Math.abs(t + h - o); ) t += h;
          return t;
        }, n.Sn = function(t, i, h) {
          return t = e.qr.Cp(t), i = e.qr.mx(t, e.qr.Cp(i)), (h = e.qr.mx(t, e.qr.Cp(h))) == 0 || 0 < i && 0 < h && h <= i || 0 > i && 0 > h && h >= i;
        }, n.Nz = function(t, i, h, s, o, a) {
          if (a == r.GreatElliptic) return e.Ox.SS(i, h, s, o);
          if (Math.abs(h.x - s.x) >= Math.PI || !n.Sn(h.x, s.x, o)) return NaN;
          if (h.x > s.x) var u = s;
          else u = h, h = s;
          s = new e.ga();
          var c = new e.ga(), l = new e.ga();
          e.kb.wd(t, i, u.x, u.y, h.x, h.y, c, s, null, a);
          var p = c.u, y = 0, d = 1, g = new e.h();
          for (g.L(u); p * (d - y) > 1e-12 * t; ) {
            var b = 0.5 * (y + d);
            if (e.kb.oj(t, i, u.x, u.y, p * b, s.u, c, l, a), g.x = c.u, g.y = l.u, g.x == o) break;
            if (n.Sn(u.x, g.x, o)) d = b;
            else {
              if (!n.Sn(h.x, g.x, o)) return NaN;
              y = b;
            }
          }
          return g.y;
        }, n.Lz = function(t, i, h, s, o) {
          if (o == r.GreatElliptic) return t = [0, 0], e.Ox.Oz(i, h, s, 0, t), t[0];
          if (h.y > s.y) var a = s;
          else a = h, h = s;
          if ((s = new e.Nc()).K(a.y, h.y), !s.contains(0) || Math.abs(a.x - h.x) >= Math.PI) return NaN;
          if (a.x == h.x) return a.x;
          var u = new e.ga(), c = new e.ga(), l = new e.ga();
          e.kb.wd(t, i, a.x, a.y, h.x, h.y, c, u, null, o);
          var p = c.u, y = 0, d = 1, g = new e.h();
          for (g.L(a); p * (d - y) > 1e-12 * t; ) {
            var b = 0.5 * (y + d);
            if (e.kb.oj(t, i, a.x, a.y, p * b, u.u, c, l, o), g.x = c.u, g.y = l.u, s.K(a.y, g.y), g.y == 0) break;
            if (s.contains(0)) d = b;
            else {
              if (s.K(h.y, g.y), !s.contains(0)) return NaN;
              y = b;
            }
          }
          return g.x;
        }, n.WI = function(t, i, h, s) {
          if (!t.ef.Wc()) return !1;
          var o = new e.de(i.description);
          if (o.Fd(i, 0, -1), s = e.Hx.local().V(o, t, s), o = i.I(), h.Oa(), o != s.I()) return !1;
          var a = new e.l();
          i.A(a);
          var u = new e.l();
          if (s.A(u), a = a.R(), u = u.R(), a != 0 && u != 0) {
            if (u /= a, t = t.Yf.gh().R() / t.ef.gh().R(), 1e-10 < Math.abs(u / t - 1)) return !1;
          } else if (a != 0 || u != 0) return !1;
          for (h.add(i, !1), i = new e.h(), t = 0; t < o; t++) s.D(t, i), h.Cb(t, i);
          return !0;
        }, n.qN = function(t, i) {
          return (t %= 360 * i) >= 180 * i && (t -= 360 * i), t;
        }, n.UI = function(t, i, h, s) {
          if (h == v.Clip) {
            var o = i.ml();
            o.getType() == 197 ? (h = new e.l(), o.A(h), o = e.ta.uy(i, h), t = e.ri.clip(t, h, o, 5e4 * i.pm(), s)) : e.dj.local().V(1, o, t, i, s) || (t = e.Xj.local().V(t, o, i, s)) == o && (t = e.Vk.jg(t));
          } else i.Wc() && (s = new e.l(), t.xc(s), i.Oe().contains(s) || (n.Jt(t, i.Oe(), i.Xd(0), !0), h == v.PannableFold && (t = n.lj(t, i)), t = n.Fn(t, i, 0, !0, 1e5 * i.pm(), null)));
          return t;
        }, n.XD = function(t, i, h) {
          var s = i.Wr();
          if (s == null) return t;
          var o = (i = i.sc()).Oe().R(), a = new e.l();
          t.xc(a);
          var u = new e.Nc();
          a.cn(u), a = s.Ga(), s = null;
          for (var c = new e.Dd(); a.$a(); ) for (; a.Ha(); ) {
            var l = a.ha(), p = l.Tg(0, 0), y = new e.Nc();
            for (y.K(p.oa, p.va), p = 0; y.va > u.oa; ) y.move(-o), --p;
            for (; y.oa <= u.va; ) {
              if (y.isIntersecting(u)) {
                s == null && (s = new e.Ta());
                var d = e.yb.cP(l.ac(), l.wc());
                p != 0 && (c.gg(p * o, 0), d.Oc(c)), s.oc(d, !0);
              }
              y.move(o), ++p;
            }
          }
          return s != null ? (i = e.ta.gO(i, s), i = e.ta.Er(i), e.$t.lP(t, s, i, h)) : t;
        }, n.eO = function(t, i, h, s, o) {
          return t >= h && i <= s ? 0 : n.tE(0.5 * (i + t), h, s, o);
        }, n.tE = function(t, i, h, s) {
          return e.lc.round((0.5 * (h + i) - t) / s) * s;
        }, n.VQ = function(t, i, h, s, o, a, u, c) {
          var l = n.dv(s, o), p = l.R(), y = p / 360, d = n.pE * y, g = t.ub(0), b = i.Wc(), x = b ? p / i.Oe().R() : 0;
          i = t.Ia();
          for (var m = 0, w = h.da(); m < w; ++m) {
            var j = b, M = new e.Ta(h.description);
            M.addPath(h, m, !0);
            var A = h.dc(m);
            u != 0 && (A = n.PD(A, M, l.H - c, l.H, u)) && (j = !1);
            var z = -1;
            A = M.I();
            var N = !1;
            j && (z = t.Ba(m), N = t.dc(m));
            var I = M.ub(0), C = 0, T = I.read(0), D = 0, B = 3 * s.Xd(0), E = !1, G = new e.h();
            G.Rc();
            var H = new e.h();
            H.Rc();
            for (var U = !1, $ = 1; $ < A; ++$) {
              var W = e.h.construct(I.eg(2 * $), I.eg(2 * $ + 1)), R = W.x, K = R + C, S = K - T;
              if (W.x = K, Math.abs(S) > d) {
                if (j) {
                  var X = z + $ - 1, V = z;
                  (!N || $ + 1 < A) && (V += $), X = g.read(2 * X), V = (g.read(2 * V) - X) * x, Math.abs(S - V) > 1 * y && (b = !1);
                }
                j || (K = R + (C -= e.lc.Cn(p, K - T)), ++D, U = C != 0, W.x = K);
              } else E || e.ta.AG(G, H, W, B) && (E = !0);
              U && I.write(2 * $, K), T = K, G.L(H), H.L(W);
            }
            D != 0 && M.Pc(1993), j = M.Na(0), A = M.Na(A - 1), e.h.tb(j, A), M = n.wQ(M, s, isNaN(o) ? 0 : o, a), i.add(M, !1);
          }
          return t = s.Xd(0), h = l.R() / 180, n.Jt(i, l, 0.1 * t, !1), e.ri.clip(i, l, t, h, a);
        }, n.wQ = function(t, i, h, s) {
          return n.Fn(t, i, h, !0, 0, s);
        }, n.OS = function(t, i, h, s) {
          var o = t.getType();
          if (o == 1736) for (i = i != null ? i.Xd(0) : 0, o = 0; o < s; o++) e.hd.Yd(t, h[o], i) != 1 && h[o].Rc();
          else {
            if (o != 197) throw e.i.N();
            for (o = 0; o < s; o++) t.dP(h[o]) || h[o].Rc();
          }
        }, n.$k = function(t, i, h, s) {
          if (32 > h) for (var o = new e.Sa(), a = 0; a < h; a++) o.Cb(i[a]), t.$k(o, s).D(i[a]);
          else {
            var u = new e.de();
            for (u.re(3), u.HD(i, h), o = u.ub(3), a = 0; a < h; a++) o.write(a, a);
            for (a = t.$k(u, s), t = a.ub(0), o = a.ub(3), s = e.h.construct(NaN, NaN), u = 0; u < h; u++) i[u] = s;
            for (h = a.I(), a = 0; a < h; a++) s = o.read(a), t.tc(2 * a, i[s]);
          }
        }, n.Zk = function(t, i, h, s) {
          if (32 > h) for (var o = new e.Sa(), a = 0; a < h; a++) o.Cb(i[a]), t.Zk(o, s).D(i[a]);
          else {
            var u = new e.de();
            for (u.re(3), u.HD(i, h), o = u.ub(3), a = 0; a < h; a++) o.write(a, a);
            for (a = t.Zk(u, s), t = a.ub(0), o = a.ub(3), s = e.h.construct(NaN, NaN), u = 0; u < h; u++) i[u] = s;
            for (h = a.I(), a = 0; a < h; a++) s = o.read(a), t.tc(2 * a, i[s]);
          }
        }, n.pE = 210, n;
      }();
    }(k || (k = {})), function(e) {
      var v;
      (v = e.UL || (e.UL = {}))[v.rightSide = 1] = "rightSide";
      var f = function() {
        function r(n, t, i) {
          this.Bs = new e.h(), n === void 0 ? this.Io = -1 : (this.Bs.L(n), this.Io = t, this.Ka = i, this.nw = 0);
        }
        return r.prototype.WJ = function(n) {
          this.nw = n ? 1 | this.nw : -2 & this.nw;
        }, r.prototype.B = function() {
          return 0 > this.Io;
        }, r.prototype.fz = function() {
          if (this.B()) throw e.i.fa("invalid call");
          return new e.Sa(this.Bs.x, this.Bs.y);
        }, r.prototype.Ua = function() {
          if (this.B()) throw e.i.fa("invalid call");
          return this.Io;
        }, r.prototype.hz = function() {
          if (this.B()) throw e.i.fa("invalid call");
          return this.Ka;
        }, r.prototype.Sz = function() {
          return (1 & this.nw) != 0;
        }, r.prototype.ey = function(n, t, i, h) {
          this.Bs.x = n, this.Bs.y = t, this.Io = i, this.Ka = h;
        }, r;
      }();
      e.$l = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function r() {
        }
        return r.prototype.Uo = function(n, t) {
          if (this.th.resize(0), this.Ii.length = 0, this.tk = -1, n.xc(this.Ek), this.Ek.W(t, t), this.Ek.isIntersecting(this.Fb.Ca)) {
            var i = n.getType();
            (this.vs = e.aa.yd(i)) ? (this.TH = n.ac(), this.SH = n.wc(), this.qa = t) : this.qa = NaN, this.th.add(this.Fb.kf), this.Ii.push(this.Fb.Ca), this.Qs = this.Fb.Ur(this.Fb.kf);
          } else this.Qs = -1;
        }, r.prototype.Xi = function(n, t) {
          this.th.resize(0), this.Ii.length = 0, this.tk = -1, this.Ek.K(n), this.Ek.W(t, t), this.qa = NaN, this.Ek.isIntersecting(this.Fb.Ca) ? (this.th.add(this.Fb.kf), this.Ii.push(this.Fb.Ca), this.Qs = this.Fb.Ur(this.Fb.kf), this.vs = !1) : this.Qs = -1;
        }, r.prototype.next = function() {
          if (this.th.size == 0) return -1;
          this.tk = this.Qs;
          var n = null, t = null, i = null, h = null;
          this.vs && (n = new e.h(), t = new e.h(), i = new e.l());
          for (var s = !1; !s; ) {
            for (; this.tk != -1; ) {
              var o = this.Fb.bz(this.Fb.fv(this.tk));
              if (o.isIntersecting(this.Ek)) {
                if (!this.vs) {
                  s = !0;
                  break;
                }
                if (n.L(this.TH), t.L(this.SH), i.K(o), i.W(this.qa, this.qa), 0 < i.zy(n, t)) {
                  s = !0;
                  break;
                }
              }
              this.tk = this.Fb.nv(this.tk);
            }
            if (this.tk == -1) {
              o = this.th.Fc();
              var a = this.Ii[this.Ii.length - 1];
              for (h == null && ((h = [])[0] = new e.l(), h[1] = new e.l(), h[2] = new e.l(), h[3] = new e.l()), f.EJ(a, h), this.th.If(), --this.Ii.length, a = 0; 4 > a; a++) {
                var u = this.Fb.Lp(o, a);
                if (u != -1 && 0 < this.Fb.WR(u) && h[a].isIntersecting(this.Ek)) if (this.vs) {
                  if (n.L(this.TH), t.L(this.SH), i.K(h[a]), i.W(this.qa, this.qa), 0 < i.zy(n, t)) {
                    var c = new e.l();
                    c.K(h[a]), this.th.add(u), this.Ii.push(c);
                  }
                } else (c = new e.l()).K(h[a]), this.th.add(u), this.Ii.push(c);
              }
              if (this.th.size == 0) return -1;
              this.tk = this.Fb.Ur(this.th.get(this.th.size - 1));
            }
          }
          return this.Qs = this.Fb.nv(this.tk), this.tk;
        }, r.bP = function(n, t, i) {
          var h = new r();
          return h.Fb = n, h.Ek = new e.l(), h.th = new e.ia(0), h.Ii = [], h.Uo(t, i), h;
        }, r.aP = function(n, t, i) {
          var h = new r();
          return h.Fb = n, h.Ek = new e.l(), h.th = new e.ia(0), h.Ii = [], h.Xi(t, i), h;
        }, r.$O = function(n) {
          var t = new r();
          return t.Fb = n, t.Ek = new e.l(), t.th = new e.ia(0), t.Ii = [], t;
        }, r;
      }();
      e.GY = v;
      var f = function() {
        function r(n, t) {
          this.jf = new e.$c(11), this.Zh = new e.$c(5), this.ws = [], this.gw = new e.ia(0), this.Ca = new e.l(), this.Nk(n, t);
        }
        return r.prototype.reset = function(n, t) {
          this.jf.mj(!1), this.Zh.mj(!1), this.ws.length = 0, this.gw.clear(!1), this.Nk(n, t);
        }, r.prototype.vj = function(n, t) {
          return this.zv(n, t, 0, this.Ca, this.kf, !1, -1);
        }, r.prototype.Jz = function(n, t, i) {
          i = i == -1 ? this.kf : this.WF(i);
          var h = this.ca(i), s = this.oR(i);
          return this.zv(n, t, h, s, i, !1, -1);
        }, r.prototype.ja = function(n) {
          return this.jR(n);
        }, r.prototype.GF = function(n) {
          return this.bz(this.fv(n));
        }, r.prototype.ca = function(n) {
          return this.jv(n);
        }, r.prototype.oR = function(n) {
          var t = new e.l();
          t.K(this.Ca);
          var i = this.jv(n);
          n = this.QF(n);
          for (var h = 0; h < 2 * i; h += 2) {
            var s = e.O.truncate(3 & n >> h);
            s == 0 ? (t.v = 0.5 * (t.v + t.C), t.G = 0.5 * (t.G + t.H)) : s == 1 ? (t.C = 0.5 * (t.v + t.C), t.G = 0.5 * (t.G + t.H)) : (s == 2 ? t.C = 0.5 * (t.v + t.C) : t.v = 0.5 * (t.v + t.C), t.H = 0.5 * (t.G + t.H));
          }
          return t;
        }, r.prototype.WR = function(n) {
          return this.Az(n);
        }, r.prototype.vR = function(n, t) {
          return v.bP(this, n, t);
        }, r.prototype.MF = function(n, t) {
          return v.aP(this, n, t);
        }, r.prototype.getIterator = function() {
          return v.$O(this);
        }, r.prototype.Nk = function(n, t) {
          if (0 > t || 32 < 2 * t) throw e.i.N("invalid height");
          this.BT = t, this.Ca.K(n), this.kf = this.jf.Ce(), this.jx(this.kf, 0), this.ax(this.kf, 0), this.NJ(this.kf, 0), this.KJ(this.kf, 0);
        }, r.prototype.zv = function(n, t, i, h, s, o, a) {
          if (!h.contains(t)) return i == 0 ? -1 : this.zv(n, t, 0, this.Ca, this.kf, o, a);
          if (!o) for (var u = s; u != -1; u = this.IR(u)) this.jx(u, this.Az(u) + 1);
          (u = new e.l()).K(h), h = s;
          var c = [];
          for (c[0] = new e.l(), c[1] = new e.l(), c[2] = new e.l(), c[3] = new e.l(); i < this.BT && this.iO(h); i++) {
            r.EJ(u, c);
            for (var l = !1, p = 0; 4 > p; p++) if (c[p].contains(t)) {
              l = !0;
              var y = this.Lp(h, p);
              y == -1 && (y = this.rP(h, p)), this.jx(y, this.Az(y) + 1), h = y, u.K(c[p]);
              break;
            }
            if (!l) break;
          }
          return this.sS(n, t, i, u, h, o, s, a);
        }, r.prototype.sS = function(n, t, i, h, s, o, a, u) {
          var c = this.NF(s);
          if (o) {
            if (s == a) return u;
            this.SP(u), o = u;
          } else o = this.tP(), this.NB(o, n), this.KW(this.fv(o), t);
          return this.mX(o, s), c != -1 ? (this.hx(o, c), this.bx(c, o)) : this.GJ(s, o), this.SB(s, o), this.ax(s, this.lv(s) + 1), this.hO(s) && this.MQ(i, h, s), o;
        }, r.prototype.SP = function(n) {
          var t = this.WF(n), i = this.NF(t), h = this.OR(n), s = this.nv(n);
          this.Ur(t) == n ? (s != -1 ? this.hx(s, -1) : this.SB(t, -1), this.GJ(t, s)) : i == n ? (this.bx(h, -1), this.SB(t, h)) : (this.hx(s, h), this.bx(h, s)), this.hx(n, -1), this.bx(n, -1), this.ax(t, this.lv(t) - 1);
        }, r.EJ = function(n, t) {
          var i = 0.5 * (n.v + n.C), h = 0.5 * (n.G + n.H);
          t[0].K(i, h, n.C, n.H), t[1].K(n.v, h, i, n.H), t[2].K(n.v, n.G, i, h), t[3].K(i, n.G, n.C, h);
        }, r.prototype.hO = function(n) {
          return this.lv(n) == 8 && !this.gG(n);
        }, r.prototype.MQ = function(n, t, i) {
          var h = this.Ur(i);
          do {
            var s = this.fv(h), o = this.Zh.T(h, 0);
            s = this.bz(s), this.zv(o, s, n, t, i, !0, h), h = o = this.nv(h);
          } while (h != -1);
        }, r.prototype.iO = function(n) {
          return 8 <= this.lv(n) || this.gG(n);
        }, r.prototype.gG = function(n) {
          return this.Lp(n, 0) != -1 || this.Lp(n, 1) != -1 || this.Lp(n, 2) != -1 || this.Lp(n, 3) != -1;
        }, r.prototype.rP = function(n, t) {
          var i = this.jf.Ce();
          return this.OW(n, t, i), this.jx(i, 0), this.ax(i, 0), this.Pk(i, n), this.KJ(i, this.jv(n) + 1), this.NJ(i, t << 2 * this.jv(n) | this.QF(n)), i;
        }, r.prototype.tP = function() {
          var n = this.Zh.Ce();
          if (0 < this.gw.size) {
            var t = this.gw.Fc();
            this.gw.If();
          } else t = this.ws.length, this.ws.push(new e.l());
          return this.LW(n, t), n;
        }, r.prototype.Lp = function(n, t) {
          return this.jf.T(n, t);
        }, r.prototype.OW = function(n, t, i) {
          this.jf.S(n, t, i);
        }, r.prototype.Ur = function(n) {
          return this.jf.T(n, 4);
        }, r.prototype.GJ = function(n, t) {
          this.jf.S(n, 4, t);
        }, r.prototype.NF = function(n) {
          return this.jf.T(n, 5);
        }, r.prototype.SB = function(n, t) {
          this.jf.S(n, 5, t);
        }, r.prototype.QF = function(n) {
          return this.jf.T(n, 6);
        }, r.prototype.NJ = function(n, t) {
          this.jf.S(n, 6, t);
        }, r.prototype.lv = function(n) {
          return this.jf.T(n, 7);
        }, r.prototype.Az = function(n) {
          return this.jf.T(n, 8);
        }, r.prototype.ax = function(n, t) {
          this.jf.S(n, 7, t);
        }, r.prototype.jx = function(n, t) {
          this.jf.S(n, 8, t);
        }, r.prototype.IR = function(n) {
          return this.jf.T(n, 9);
        }, r.prototype.Pk = function(n, t) {
          this.jf.S(n, 9, t);
        }, r.prototype.jv = function(n) {
          return this.jf.T(n, 10);
        }, r.prototype.KJ = function(n, t) {
          this.jf.S(n, 10, t);
        }, r.prototype.jR = function(n) {
          return this.Zh.T(n, 0);
        }, r.prototype.NB = function(n, t) {
          this.Zh.S(n, 0, t);
        }, r.prototype.OR = function(n) {
          return this.Zh.T(n, 1);
        }, r.prototype.nv = function(n) {
          return this.Zh.T(n, 2);
        }, r.prototype.hx = function(n, t) {
          this.Zh.S(n, 1, t);
        }, r.prototype.bx = function(n, t) {
          this.Zh.S(n, 2, t);
        }, r.prototype.WF = function(n) {
          return this.Zh.T(n, 3);
        }, r.prototype.mX = function(n, t) {
          this.Zh.S(n, 3, t);
        }, r.prototype.fv = function(n) {
          return this.Zh.T(n, 4);
        }, r.prototype.LW = function(n, t) {
          this.Zh.S(n, 4, t);
        }, r.prototype.bz = function(n) {
          return this.ws[n];
        }, r.prototype.KW = function(n, t) {
          this.ws[n].K(t);
        }, r;
      }();
      e.du = f;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.aL || (e.aL = {}))[v.Outside = 0] = "Outside", v[v.Inside = 1] = "Inside", v[v.Border = 2] = "Border";
      var f = function() {
        function n(t, i) {
          this.PT = i, this.Vh = t;
        }
        return n.prototype.setColor = function(t, i) {
          this.iH != i && t.flush(), this.iH = i;
        }, n.prototype.gF = function(t, i) {
          for (var h = 0; h < i; ) for (var s = t[h++], o = t[h++], a = t[h++] * this.PT; s < o; s++) this.Vh[a + (s >> 4)] |= this.iH << 2 * (15 & s);
        }, n;
      }();
      e.HY = f;
      var r = function() {
        function n(t, i, h) {
          this.Vh = null, this.SA = this.Ik = this.cI = this.aI = this.Es = this.qH = this.Gf = this.Um = 0, this.Ri = this.Jk = this.vl = null, this.Fz(t, i, h);
        }
        return n.create = function(t, i, h) {
          if (!n.zE(t)) throw e.i.N();
          return n.wP(t, i, h);
        }, n.pW = function(t) {
          switch (t) {
            case 0:
              t = 1024;
              break;
            case 1:
              t = 16384;
              break;
            case 2:
              t = 262144;
              break;
            default:
              throw e.i.fa("Internal Error");
          }
          return t;
        }, n.zE = function(t) {
          return !(t.B() || t.getType() != 1607 && t.getType() != 1736);
        }, n.prototype.rQ = function(t, i) {
          i = i.Ga();
          for (var h = new e.h(), s = new e.h(); i.$a(); ) for (; i.Ha(); ) {
            var o = i.ha();
            if (o.getType() != 322) throw e.i.fa("Internal Error");
            t.Eh(o.ac(), h), t.Eh(o.wc(), s), this.Ri.jy(h.x, h.y, s.x, s.y);
          }
          this.Ri.iJ(e.Px.Cx);
        }, n.prototype.sQ = function() {
          throw e.i.fa("Internal Error");
        }, n.prototype.Ry = function(t, i) {
          for (var h = 1; 4 > h; h++) t.jy(i[h - 1].x, i[h - 1].y, i[h].x, i[h].y);
          t.jy(i[3].x, i[3].y, i[0].x, i[0].y), this.Ri.iJ(e.Px.Cx);
        }, n.prototype.rK = function(t, i, h) {
          for (var s = [null, null, null, null], o = 0; o < s.length; o++) s[o] = new e.h();
          i = i.Ga(), h = this.Jk.dY(h) + 1.5, o = new e.h();
          for (var a = new e.h(), u = new e.h(), c = new e.h(), l = new e.h(), p = new e.l(), y = new e.h(); i.$a(); ) {
            var d = !1, g = !0;
            for (y.ma(0, 0); i.Ha(); ) {
              var b = i.ha();
              if (c.x = b.sa, c.y = b.na, l.x = b.pa, l.y = b.la, p.Oa(), p.Zb(c.x, c.y), p.Lk(l.x, l.y), this.vl.HG(p)) {
                this.Jk.Eh(l, l), g ? (this.Jk.Eh(c, c), y.L(c), g = !1) : c.L(y), o.uc(l, c);
                var x = 0.5 > (b = o.length());
                b == 0 ? o.ma(1, 0) : (x || y.L(l), o.scale(h / b), a.ma(-o.y, o.x), u.ma(o.y, -o.x), c.sub(o), l.add(o), s[0].add(c, a), s[1].add(c, u), s[2].add(l, u), s[3].add(l, a), x ? d = !0 : this.Ry(t, s));
              } else d && (this.Ry(t, s), d = !1), g = !0;
            }
            d && this.Ry(t, s);
          }
        }, n.prototype.sC = function(t) {
          return e.O.truncate(t * this.qH + this.aI);
        }, n.prototype.tC = function(t) {
          return e.O.truncate(t * this.Es + this.cI);
        }, n.wP = function(t, i, h) {
          return new n(t, i, h);
        }, n.prototype.Fz = function(t, i, h) {
          this.Gf = Math.max(e.O.truncate(2 * Math.sqrt(h) + 0.5), 64), this.Um = e.O.truncate((2 * this.Gf + 31) / 32), this.vl = new e.l(), this.Ik = i, h = 0;
          for (var s = this.Gf, o = this.Um; 8 <= s; ) h += s * o, s = e.O.truncate(s / 2), o = e.O.truncate((2 * s + 31) / 32);
          this.Vh = e.O.lg(h, 0), this.Ri = new e.Px(), h = new f(this.Vh, this.Um, this), this.Ri.AX(this.Gf, this.Gf, h), t.A(this.vl), this.vl.W(i, i), s = new e.l();
          var a = i * (o = e.l.construct(1, 1, this.Gf - 2, this.Gf - 2)).R();
          switch (i *= o.ca(), s.K(this.vl.sf(), Math.max(a, this.vl.R()), Math.max(i, this.vl.ca())), this.SA = this.Ik, this.Jk = new e.Dd(), this.Jk.pS(s, o), new e.Dd(), t.getType()) {
            case 550:
              h.setColor(this.Ri, 2), this.sQ();
              break;
            case 1607:
              h.setColor(this.Ri, 2), this.rK(this.Ri, t, this.SA);
              break;
            case 1736:
              h.setColor(this.Ri, 1), this.rQ(this.Jk, t), h.setColor(this.Ri, 2), this.rK(this.Ri, t, this.SA);
          }
          this.qH = this.Jk.bb, this.Es = this.Jk.ab, this.aI = this.Jk.Gb, this.cI = this.Jk.Lb, this.XN();
        }, n.prototype.XN = function() {
          this.Ri.flush();
          for (var t = 0, i = this.Gf * this.Um, h = this.Gf, s = e.O.truncate(this.Gf / 2), o = this.Um, a = e.O.truncate((2 * s + 31) / 32); 8 < h; ) {
            for (h = 0; h < s; h++) for (var u = 2 * h, c = 2 * h + 1, l = 0; l < s; l++) {
              var p = 2 * l, y = 2 * l + 1, d = p >> 4;
              p = 2 * (15 & p);
              var g = y >> 4;
              y = 2 * (15 & y);
              var b = this.Vh[t + o * u + d] >> p & 3;
              b |= this.Vh[t + o * u + g] >> y & 3, b |= this.Vh[t + o * c + d] >> p & 3, b |= this.Vh[t + o * c + g] >> y & 3, this.Vh[i + a * h + (l >> 4)] |= b << 2 * (15 & l);
            }
            h = s, o = a, t = i, s = e.O.truncate(h / 2), a = e.O.truncate((2 * s + 31) / 32), i = t + o * h;
          }
        }, n.prototype.So = function(t, i) {
          return this.vl.contains(t, i) ? (t = this.sC(t), i = this.tC(i), 0 > t || t >= this.Gf || 0 > i || i >= this.Gf || (i = this.Vh[this.Um * i + (t >> 4)] >> 2 * (15 & t) & 3) == 0 ? 0 : i == 1 ? 1 : 2) : 0;
        }, n.prototype.Ro = function(t) {
          if (!t.Ea(this.vl)) return 0;
          var i = this.sC(t.v), h = this.sC(t.C), s = this.tC(t.G);
          if (t = this.tC(t.H), 0 > i && (i = 0), 0 > s && (s = 0), h >= this.Gf && (h = this.Gf - 1), t >= this.Gf && (t = this.Gf - 1), i > h || s > t) return 0;
          for (var o = Math.max(h - i, 1) * Math.max(t - s, 1), a = 0, u = this.Um, c = this.Gf, l = 0; ; ) {
            if (32 > o || 16 > c) {
              for (o = s; o <= t; o++) for (var p = i; p <= h; p++) if (1 < (l = this.Vh[a + u * o + (p >> 4)] >> 2 * (15 & p) & 3)) return 2;
              if (l == 0) return 0;
              if (l == 1) return 1;
            }
            a += u * c, c = e.O.truncate(c / 2), u = e.O.truncate((2 * c + 31) / 32), i = e.O.truncate(i / 2), s = e.O.truncate(s / 2), h = e.O.truncate(h / 2), t = e.O.truncate(t / 2), o = Math.max(h - i, 1) * Math.max(t - s, 1);
          }
        }, n.prototype.RR = function() {
          return this.Gf * this.Um;
        }, n;
      }();
      e.Nx = r;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.VL || (e.VL = {}))[v.contains = 1] = "contains", v[v.within = 2] = "within", v[v.equals = 3] = "equals", v[v.disjoint = 4] = "disjoint", v[v.touches = 8] = "touches", v[v.crosses = 16] = "crosses", v[v.overlaps = 32] = "overlaps", v[v.unknown = 0] = "unknown", v[v.intersects = 1073741824] = "intersects";
      var f = function() {
        function n() {
        }
        return n.construct = function(t, i, h, s, o, a, u, c) {
          var l = new n();
          return l.pw = t, l.Mm = i, l.Kj = h, l.Si = s, l.BH = o, l.SY = a, l.TY = u, l.UY = c, l;
        }, n;
      }();
      e.Vt = function() {
        function n() {
        }
        return n.CD = function(t, i, h) {
          if (n.wy(t)) {
            var s = e.ta.kj(i, t, !1);
            i = !1, e.Uk.CE(t) && (i = i || t.lu(s, h)), (s = t.getType()) != 1736 && s != 1607 || !e.Uk.AE(t) || h == 0 || (i = i || t.fj(h)), s != 1736 && s != 1607 || !e.Uk.BE(t) || h == 0 || i || t.hM();
          }
        }, n.wy = function(t) {
          return e.Uk.CE(t) || e.Uk.AE(t) || e.Uk.BE(t);
        }, n;
      }();
      var r = function() {
        function n() {
          this.rh = [];
        }
        return n.zB = function(t, i, h, s, o) {
          var a = t.getType(), u = i.getType();
          if (a == 197) {
            if (u == 197) return n.tW(t, i, h, s);
            if (u == 33) return s == 2 ? s = 1 : s == 1 && (s = 2), n.hJ(i, t, h, s);
          } else if (a == 33) {
            if (u == 197) return n.hJ(t, i, h, s);
            if (u == 33) return n.vW(t, i, h, s);
          }
          if (t.B() || i.B()) return s == 4;
          var c = new e.l();
          t.A(c);
          var l = new e.l();
          i.A(l);
          var p = new e.l();
          if (p.K(c), p.Zb(l), h = e.ta.Wd(h, p, !1), n.dk(c, l, h)) return s == 4;
          switch (c = !1, e.Vk.yd(a) && ((a = new e.Ta(t.description)).oc(t, !0), t = a, a = 1607), e.Vk.yd(u) && ((u = new e.Ta(i.description)).oc(i, !0), i = u, u = 1607), a != 197 && u != 197 ? (t.Db() < i.Db() || a == 33 && u == 550) && (s == 2 ? s = 1 : s == 1 && (s = 2)) : a != 1736 && u != 197 && (s == 2 ? s = 1 : s == 1 && (s = 2)), a) {
            case 1736:
              switch (u) {
                case 1736:
                  c = n.rt(t, i, h, s, o);
                  break;
                case 1607:
                  c = n.$m(t, i, h, s, o);
                  break;
                case 33:
                  c = n.qt(t, i, h, s);
                  break;
                case 550:
                  c = n.pt(t, i, h, s, o);
                  break;
                case 197:
                  c = n.GI(t, i, h, s, o);
              }
              break;
            case 1607:
              switch (u) {
                case 1736:
                  c = n.$m(i, t, h, s, o);
                  break;
                case 1607:
                  c = n.gB(t, i, h, s, o);
                  break;
                case 33:
                  c = n.tt(t, i, h, s, o);
                  break;
                case 550:
                  c = n.st(t, i, h, s, o);
                  break;
                case 197:
                  c = n.MI(t, i, h, s);
              }
              break;
            case 33:
              switch (u) {
                case 1736:
                  c = n.qt(i, t, h, s);
                  break;
                case 1607:
                  c = n.tt(i, t, h, s, o);
                  break;
                case 550:
                  c = n.lt(i, t, h, s);
              }
              break;
            case 550:
              switch (u) {
                case 1736:
                  c = n.pt(i, t, h, s, o);
                  break;
                case 1607:
                  c = n.st(i, t, h, s, o);
                  break;
                case 550:
                  c = n.ZA(t, i, h, s, o);
                  break;
                case 33:
                  c = n.lt(t, i, h, s);
                  break;
                case 197:
                  c = n.hI(t, i, h, s);
              }
              break;
            case 197:
              switch (u) {
                case 1736:
                  c = n.GI(i, t, h, s, o);
                  break;
                case 1607:
                  c = n.MI(i, t, h, s);
                  break;
                case 550:
                  c = n.hI(i, t, h, s);
              }
          }
          return c;
        }, n.tW = function(t, i, h, s) {
          if (t.B() || i.B()) return s == 4;
          var o = new e.l(), a = new e.l(), u = new e.l();
          switch (t.A(o), i.A(a), u.K(o), u.Zb(a), t = e.ta.Wd(h, u, !1), s) {
            case 4:
              return n.dk(o, a, t);
            case 2:
              return n.jF(a, o, t);
            case 1:
              return n.jF(o, a, t);
            case 3:
              return n.ek(o, a, t);
            case 8:
              return n.cQ(o, a, t);
            case 32:
              return n.bQ(o, a, t);
            case 16:
              return n.aQ(o, a, t);
          }
          return !1;
        }, n.hJ = function(t, i, h, s) {
          if (t.B() || i.B()) return s == 4;
          t = t.D();
          var o = new e.l(), a = new e.l();
          switch (i.A(o), a.K(t), a.Zb(o), i = e.ta.Wd(h, a, !1), s) {
            case 4:
              return n.Rw(t, o, i);
            case 2:
              return n.eB(t, o, i);
            case 1:
              return n.RU(t, o, i);
            case 3:
              return n.vI(t, o, i);
            case 8:
              return n.dB(t, o, i);
          }
          return !1;
        }, n.vW = function(t, i, h, s) {
          if (t.B() || i.B()) return s == 4;
          t = t.D(), i = i.D();
          var o = new e.l();
          switch (o.K(t), o.Zb(i), h = e.ta.Wd(h, o, !1), s) {
            case 4:
              return n.SU(t, i, h);
            case 2:
              return n.uI(i, t, h);
            case 1:
              return n.uI(t, i, h);
            case 3:
              return n.wI(t, i, h);
          }
          return !1;
        }, n.rt = function(t, i, h, s, o) {
          switch (s) {
            case 4:
              return n.kV(t, i, h);
            case 2:
              return n.Sw(i, t, h, o);
            case 1:
              return n.Sw(t, i, h, o);
            case 3:
              return n.nV(t, i, h);
            case 8:
              return n.vV(t, i, h);
            case 32:
              return n.qV(t, i, h, o);
          }
          return !1;
        }, n.$m = function(t, i, h, s, o) {
          switch (s) {
            case 4:
              return n.lV(t, i, h);
            case 1:
              return n.fB(t, i, h, o);
            case 8:
              return n.wV(t, i, h, o);
            case 16:
              return n.gV(t, i, h);
          }
          return !1;
        }, n.qt = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.jV(t, i, h);
            case 1:
              return n.dV(t, i, h);
            case 8:
              return n.uV(t, i, h);
          }
          return !1;
        }, n.pt = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.iV(t, i, h);
            case 1:
              return n.cV(t, i, h);
            case 8:
              return n.tV(t, i, h);
            case 16:
              return n.fV(t, i, h);
          }
          return !1;
        }, n.GI = function(t, i, h, s, o) {
          if (n.hV(t, i, h)) return s == 4;
          if (s == 4) return !1;
          switch (s) {
            case 2:
              return n.xV(t, i, h);
            case 1:
              return n.bV(t, i, h);
            case 3:
              return n.mV(t, i, h);
            case 8:
              return n.sV(t, i, h, o);
            case 32:
              return n.pV(t, i, h, o);
            case 16:
              return n.eV(t, i, h, o);
          }
          return !1;
        }, n.gB = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.GV(t, i, h);
            case 2:
              return n.KI(i, t, h);
            case 1:
              return n.KI(t, i, h);
            case 3:
              return n.IV(t, i, h);
            case 8:
              return n.NI(t, i, h);
            case 32:
              return n.MV(t, i, h);
            case 16:
              return n.LI(t, i, h);
          }
          return !1;
        }, n.tt = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.FV(t, i, h);
            case 1:
              return n.AV(t, i, h);
            case 8:
              return n.QV(t, i, h);
          }
          return !1;
        }, n.st = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.EV(t, i, h);
            case 1:
              return n.zV(t, i, h);
            case 8:
              return n.PV(t, i, h);
            case 16:
              return n.CV(t, i, h);
          }
          return !1;
        }, n.MI = function(t, i, h, s) {
          if (n.DV(t, i, h)) return s == 4;
          if (s == 4) return !1;
          switch (s) {
            case 2:
              return n.RV(t, i, h);
            case 1:
              return n.yV(t, i, h);
            case 3:
              return n.HV(t, i, h);
            case 8:
              return n.OV(t, i, h);
            case 32:
              return n.LV(t, i, h);
            case 16:
              return n.BV(t, i, h);
          }
          return !1;
        }, n.ZA = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.gU(t, i, h);
            case 2:
              return n.eI(i, t, h);
            case 1:
              return n.eI(t, i, h);
            case 3:
              return n.iU(t, i, h);
            case 32:
              return n.oU(t, i, h);
          }
          return !1;
        }, n.lt = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.fI(t, i, h);
            case 2:
              return n.sU(t, i, h);
            case 1:
              return n.dU(t, i, h);
            case 3:
              return n.Nw(t, i, h);
          }
          return !1;
        }, n.hI = function(t, i, h, s) {
          switch (s) {
            case 4:
              return n.fU(t, i, h);
            case 2:
              return n.rU(t, i, h);
            case 1:
              return n.cU(t, i, h);
            case 3:
              return n.hU(t, i, h);
            case 8:
              return n.qU(t, i, h);
            case 16:
              return n.eU(t, i, h);
          }
          return !1;
        }, n.nV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !!n.ek(s, o, h) && (s = n.qc(t, i, !1)) != 4 && s != 1 && s != 2 && (!!n.dI(t, i, h) || (s = t.Qb(), o = i.Qb(), !(Math.abs(s - o) > 4 * Math.max(t.I(), i.I()) * h) && n.Wz(t, i, h, !0)));
        }, n.kV = function(t, i, h) {
          var s = n.qc(t, i, !0);
          return s == 4 || s != 1 && s != 2 && s != 1073741824 && n.EI(t, i, h);
        }, n.vV = function(t, i, h) {
          var s = n.qc(t, i, !1);
          return s != 4 && s != 1 && s != 2 && n.II(t, i, h, null);
        }, n.qV = function(t, i, h, s) {
          var o = n.qc(t, i, !1);
          return o != 4 && o != 1 && o != 2 && n.FI(t, i, h, s);
        }, n.Sw = function(t, i, h, s) {
          var o = new e.l(), a = new e.l();
          return t.A(o), i.A(a), !!n.zc(o, a, h) && (o = n.qc(t, i, !1)) != 4 && o != 2 && (o == 1 || n.BI(t, i, h, s));
        }, n.lV = function(t, i, h) {
          var s = n.qc(t, i, !0);
          return s == 4 || s != 1 && s != 1073741824 && n.EI(t, i, h);
        }, n.wV = function(t, i, h, s) {
          var o = n.qc(t, i, !1);
          return o != 4 && o != 1 && n.JI(t, i, h, s);
        }, n.gV = function(t, i, h) {
          var s = n.qc(t, i, !1);
          return s != 4 && s != 1 && n.DI(t, i, h, null);
        }, n.fB = function(t, i, h, s) {
          var o = new e.l(), a = new e.l();
          return t.A(o), i.A(a), !!n.zc(o, a, h) && (o = n.qc(t, i, !1)) != 4 && (o == 1 || n.CI(t, i, h, s));
        }, n.jV = function(t, i, h) {
          return e.hd.KG(t, i, h) == 0;
        }, n.uV = function(t, i, h) {
          return i = i.D(), n.HI(t, i, h);
        }, n.dV = function(t, i, h) {
          return i = i.D(), n.AI(t, i, h);
        }, n.iV = function(t, i, h) {
          var s = n.qc(t, i, !1);
          if (s == 4) return !0;
          if (s == 1) return !1;
          s = new e.l(), t.A(s), s.W(h, h);
          for (var o = new e.h(), a = 0; a < i.I(); a++) if (i.D(a, o), s.contains(o)) {
            var u = e.hd.Yd(t, o, h);
            if (u == 1 || u == 2) return !1;
          }
          return !0;
        }, n.tV = function(t, i, h) {
          var s = this.qc(t, i, !1);
          if (s == 4 || s == 1) return !1;
          s = new e.l(), t.A(s), s.W(h, h);
          for (var o = !1, a = t, u = !1, c = 0; c < i.I(); c++) {
            var l = i.Na(c);
            if (s.contains(l)) {
              if ((l = e.hd.Yd(a, l, h)) == 2) o = !0;
              else if (l == 1) return !1;
            }
            u || (!e.Dg.Ml(t, i.I() - 1) || t.Bb != null && t.Bb.Fb != null ? a = t : (a = new e.Da(), t.copyTo(a), a.fj(1)), u = !0);
          }
          return !!o;
        }, n.fV = function(t, i, h) {
          var s = this.qc(t, i, !1);
          if (s == 4 || s == 1) return !1;
          var o = new e.l();
          s = new e.l();
          var a = new e.l();
          t.A(o), i.A(a), s.K(o), s.W(h, h), a = o = !1;
          for (var u = t, c = !1, l = 0; l < i.I(); l++) {
            var p = i.Na(l);
            if (s.contains(p) ? (p = e.hd.Yd(u, p, h)) == 0 ? a = !0 : p == 1 && (o = !0) : a = !0, o && a) return !0;
            c || (!e.Dg.Ml(t, i.I() - 1) || t.Bb != null && t.Bb.Fb != null ? u = t : (u = new e.Da(), t.copyTo(u), u.fj(1)), c = !0);
          }
          return !1;
        }, n.cV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), !this.zc(s, o, h) || (o = this.qc(t, i, !1)) == 4) return !1;
          if (o == 1) return !0;
          o = !1;
          for (var a = t, u = !1, c = 0; c < i.I(); c++) {
            var l = i.Na(c);
            if (!s.contains(l)) return !1;
            if ((l = e.hd.Yd(a, l, h)) == 1) o = !0;
            else if (l == 0) return !1;
            u || (!e.Dg.Ml(t, i.I() - 1) || t.Bb != null && t.Bb.Fb != null ? a = t : (a = new e.Da(), t.copyTo(a), a.fj(1)), u = !0);
          }
          return o;
        }, n.mV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !!n.ek(s, o, h) && ((s = new e.Da()).ad(i, !1), n.Wz(t, s, h, !0));
        }, n.hV = function(t, i, h) {
          var s = n.qc(t, i, !1);
          if (s == 4) return !0;
          if (s == 1 || s == 2) return !1;
          var o = new e.l();
          if (s = new e.l(), t.A(o), i.A(s), n.zc(s, o, h) || (o = new e.h(), s.dn(o), (i = e.hd.Yd(t, o, h)) != 0) || (s.$I(o), (i = e.hd.Yd(t, o, h)) != 0) || (s.en(o), (i = e.hd.Yd(t, o, h)) != 0) || (s.cJ(o), (i = e.hd.Yd(t, o, h)) != 0)) return !1;
          i = t.ub(0), (o = new e.l()).K(s), o.W(h, h);
          for (var a = 0, u = t.I(); a < u; a++) {
            var c = i.read(2 * a), l = i.read(2 * a + 1);
            if (o.contains(c, l)) return !1;
          }
          return !n.TG(t, s, h);
        }, n.sV = function(t, i, h, s) {
          var o = n.qc(t, i, !1);
          if (o == 4 || o == 1 || o == 2) return !1;
          o = new e.l();
          var a = new e.l();
          return t.A(o), i.A(a), !n.zc(a, o, h) && (a.R() <= h && a.ca() <= h ? (i = i.Ip(), n.HI(t, i, h)) : a.R() <= h || a.ca() <= h ? (o = new e.Ta(), a = new e.Sa(), i.Hf(0, a), o.nf(a), i.Hf(2, a), o.lineTo(a), n.JI(t, o, h, s)) : ((o = new e.Da()).ad(i, !1), n.II(t, o, h, s)));
        }, n.pV = function(t, i, h, s) {
          var o = n.qc(t, i, !1);
          if (o == 4 || o == 1 || o == 2) return !1;
          o = new e.l();
          var a = new e.l();
          return t.A(o), i.A(a), !(n.zc(a, o, h) || a.R() <= h || a.ca() <= h) && ((o = new e.Da()).ad(i, !1), n.FI(t, o, h, s));
        }, n.xV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), n.zc(o, s, h);
        }, n.bV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !!n.zc(s, o, h) && (s = n.qc(t, i, !1)) != 4 && s != 2 && (s == 1 || (o.R() <= h && o.ca() <= h ? (i = i.Ip(), n.AI(t, i, h)) : o.R() <= h || o.ca() <= h ? (o = new e.Ta(), s = new e.Sa(), i.Hf(0, s), o.nf(s), i.Hf(2, s), o.lineTo(s), n.CI(t, o, h, null)) : ((o = new e.Da()).ad(i, !1), n.BI(t, o, h, null))));
        }, n.eV = function(t, i, h, s) {
          var o = new e.l(), a = new e.l();
          return t.A(o), i.A(a), !(n.zc(a, o, h) || a.ca() > h && a.R() > h || a.ca() <= h && a.R() <= h) && (o = new e.Ta(), a = new e.Sa(), i.Hf(0, a), o.nf(a), i.Hf(2, a), o.lineTo(a), n.DI(t, o, h, s));
        }, n.IV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(!n.ek(s, o, h) || n.qc(t, i, !1) == 4) && (!!n.dI(t, i, h) || n.Wz(t, i, h, !1));
        }, n.GV = function(t, i, h) {
          return this.qc(t, i, !1) == 4 || !!new e.Zl(t, i, h, !0).next() && !this.UG(t, i, h);
        }, n.NI = function(t, i, h) {
          if (n.qc(t, i, !1) == 4) return !1;
          var s = new e.be(0);
          if (n.Xz(t, i, h, s) != 0) return !1;
          for (var o = new e.de(), a = 0; a < s.size; a += 2) {
            var u = s.read(a), c = s.read(a + 1);
            o.Bu(u, c);
          }
          return t = t.mg(), i = i.mg(), t.Fd(i, 0, i.I()), n.Mw(t, o, h);
        }, n.LI = function(t, i, h) {
          if (n.qc(t, i, !1) == 4) return !1;
          var s = new e.be(0);
          if (n.Xz(t, i, h, s) != 0) return !1;
          for (var o = new e.de(), a = 0; a < s.size; a += 2) {
            var u = s.read(a), c = s.read(a + 1);
            o.Bu(u, c);
          }
          return t = t.mg(), i = i.mg(), t.Fd(i, 0, i.I()), !n.Mw(t, o, h);
        }, n.MV = function(t, i, h) {
          return n.qc(t, i, !1) != 4 && n.WG(t, i, h);
        }, n.KI = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(!n.zc(s, o, h) || n.qc(t, i, !1) == 4) && n.ym(i, t, h, !1);
        }, n.FV = function(t, i, h) {
          return n.qc(t, i, !1) == 4 || (i = i.D(), !n.Yz(t, i, h));
        }, n.QV = function(t, i, h) {
          return n.qc(t, i, !1) != 4 && (i = i.D(), n.Zz(t, i, h));
        }, n.AV = function(t, i, h) {
          return n.qc(t, i, !1) != 4 && (i = i.D(), n.SG(t, i, h));
        }, n.EV = function(t, i, h) {
          return n.qc(t, i, !1) == 4 || !n.VG(t, i, h, !1);
        }, n.PV = function(t, i, h) {
          if (this.qc(t, i, !1) == 4) return !1;
          var s = t.Ga(), o = new e.l(), a = new e.l(), u = new e.l();
          t.A(o), i.A(a), o.W(h, h), a.W(h, h), u.K(o), u.Ea(a), o = null;
          var c = t.Bb;
          if (c != null) {
            var l = c.Fb;
            o = c.zo, l == null && (l = c = e.ta.jj(t, u));
          } else l = c = e.ta.jj(t, u);
          var p = l.getIterator(), y = null;
          o != null && (y = o.getIterator());
          var d = new e.h(), g = new e.h(), b = !1, x = h * h;
          for (o = new e.pn(i.I()), c = 0; c < i.I(); c++) o.write(c, 0);
          for (c = 0; c < i.I(); c++) if (i.D(c, d), u.contains(d)) {
            if (a.K(d.x, d.y, d.x, d.y), y != null && (y.Xi(a, h), y.next() == -1)) continue;
            p.Xi(a, h);
            for (var m = p.next(); m != -1; m = p.next()) if (s.Vb(l.ja(m)), (m = s.ha()).hc(m.fe(d, !1), g), e.h.yc(d, g) <= x) {
              o.write(c, 1), b = !0;
              break;
            }
          }
          if (!b) return !1;
          for (t = t.mg(), s = new e.de(), a = new e.h(), c = 0; c < i.I(); c++) o.read(c) != 0 && (i.D(c, a), s.Bu(a.x, a.y));
          return this.Mw(t, s, h);
        }, n.CV = function(t, i, h) {
          if (this.qc(t, i, !1) == 4) return !1;
          var s = t.Ga(), o = new e.l(), a = new e.l(), u = new e.l();
          t.A(o), i.A(a), o.W(h, h), a.W(h, h), u.K(o), u.Ea(a), o = null;
          var c = t.Bb;
          if (c != null) {
            var l = c.Fb;
            o = c.zo, l == null && (l = c = e.ta.jj(t, u));
          } else l = c = e.ta.jj(t, u);
          var p = l.getIterator(), y = null;
          o != null && (y = o.getIterator());
          var d = new e.h(), g = new e.h(), b = !1, x = !1, m = h * h;
          for (o = new e.pn(i.I()), c = 0; c < i.I(); c++) o.write(c, 0);
          for (c = 0; c < i.I(); c++) if (i.D(c, d), u.contains(d)) {
            if (a.K(d.x, d.y, d.x, d.y), y != null && (y.Xi(a, h), y.next() == -1)) {
              x = !0;
              continue;
            }
            p.Xi(a, h);
            for (var w = !1, j = p.next(); j != -1; j = p.next()) if (s.Vb(l.ja(j)), (j = s.ha()).hc(j.fe(d, !1), g), e.h.yc(d, g) <= m) {
              o.write(c, 1), w = b = !0;
              break;
            }
            w || (x = !0);
          } else x = !0;
          if (!b || !x) return !1;
          for (t = t.mg(), s = new e.de(), a = new e.h(), c = 0; c < i.I(); c++) o.read(c) != 0 && (i.D(c, a), s.Bu(a.x, a.y));
          return !this.Mw(t, s, h);
        }, n.zV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(!n.zc(s, o, h) || n.qc(t, i, !1) == 4 || !n.VG(t, i, h, !0)) && (t = t.mg(), !n.gI(t, i, h));
        }, n.HV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(o.ca() > h && o.R() > h) && n.ek(s, o, h);
        }, n.DV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !n.zc(o, s, h) && !n.TG(t, o, h);
        }, n.OV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), o.ca() <= h && o.R() <= h) return o = i.Ip(), n.Zz(t, o, h);
          if (o.ca() <= h || o.R() <= h) return o = new e.Ta(), s = new e.Sa(), i.Hf(0, s), o.nf(s), i.Hf(2, s), o.lineTo(s), n.NI(t, o, h);
          t = t.Ga(), i = new e.l(), s = new e.l(), i.K(o), s.K(o), i.W(-h, -h), s.W(h, h), o = !1;
          for (var a = new e.l(), u = new e.l(); t.$a(); ) for (; t.Ha(); ) {
            if (t.ha().A(a), u.K(i), u.Ea(a), !u.B() && (u.ca() > h || u.R() > h)) return !1;
            u.K(s), u.Ea(a), u.B() || (o = !0);
          }
          return o;
        }, n.LV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(n.zc(s, o, h) || n.zc(o, s, h) || n.zc(o, s, h) || o.ca() > h && o.R() > h || o.ca() <= h && o.R() <= h) && (s = new e.Ta(), o = new e.Sa(), i.Hf(0, o), s.nf(o), i.Hf(2, o), s.lineTo(o), n.WG(t, s, h));
        }, n.RV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), !n.zc(o, s, h) || o.ca() <= h && o.R() <= h) return !1;
          if (o.ca() <= h || o.R() <= h) return n.zc(o, s, h);
          t = t.Ga(), (i = new e.l()).K(o), i.W(-h, -h), o = !1, s = new e.l();
          for (var a = new e.l(); t.$a(); ) for (; t.Ha(); ) t.ha().A(s), i.hm(s) ? o = !0 : (a.K(i), a.Ea(s), !a.B() && (a.ca() > h || a.R() > h) && (o = !0));
          return o;
        }, n.yV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return i.A(o), t.A(s), !(!n.zc(s, o, h) || o.ca() > h && o.R() > h) && (o.ca() <= h && o.R() <= h ? (i = i.Ip(), n.SG(t, i, h)) : (s = new e.Ta(), o = new e.Sa(), i.Hf(0, o), s.nf(o), i.Hf(2, o), s.lineTo(o), n.ym(s, t, h, !1)));
        }, n.BV = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), n.zc(o, s, h) || o.ca() <= h && o.R() <= h) return !1;
          if (o.ca() <= h || o.R() <= h) return s = new e.Ta(), o = new e.Sa(), i.Hf(0, o), s.nf(o), i.Hf(2, o), s.lineTo(o), n.LI(t, s, h);
          t = t.Ga(), i = new e.l(), (s = new e.l()).K(o), i.K(o), s.W(-h, -h), i.W(h, h);
          for (var a = o = !1, u = new e.l(), c = new e.l(); t.$a(); ) for (; t.Ha(); ) if (t.ha().A(u), a || i.contains(u) || (a = !0), o || (c.K(s), c.Ea(u), !c.B() && (c.ca() > h || c.R() > h) && (o = !0)), o && a) return !0;
          return !1;
        }, n.iU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !!n.ek(s, o, h) && (!!n.jU(t, i, h) || n.YA(t, i, h, !1, !0, !1));
        }, n.gU = function(t, i, h) {
          return !n.gI(t, i, h);
        }, n.oU = function(t, i, h) {
          return n.YA(t, i, h, !1, !1, !0);
        }, n.eI = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !!n.zc(s, o, h) && n.YA(i, t, h, !0, !1, !1);
        }, n.Mw = function(t, i, h) {
          h *= h;
          for (var s = new e.h(), o = new e.h(), a = 0; a < i.I(); a++) {
            i.D(a, o);
            for (var u = !1, c = 0; c < t.I(); c++) if (t.D(c, s), e.h.yc(s, o) <= h) {
              u = !0;
              break;
            }
            if (!u) return !1;
          }
          return !0;
        }, n.Nw = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), n.ek(s, o, h);
        }, n.fI = function(t, i, h) {
          return i = i.D(), n.kt(t, i, h);
        }, n.sU = function(t, i, h) {
          return n.Nw(t, i, h);
        }, n.dU = function(t, i, h) {
          return !n.fI(t, i, h);
        }, n.hU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(o.ca() > h || o.R() > h) && n.ek(s, o, h);
        }, n.fU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), n.zc(o, s, h)) return !1;
          for ((i = new e.l()).K(o), i.W(h, h), h = new e.h(), o = 0; o < t.I(); o++) if (t.D(o, h), i.contains(h)) return !1;
          return !0;
        }, n.qU = function(t, i, h) {
          var s = new e.l(), o = new e.l(), a = new e.l();
          if (i.A(s), s.ca() <= h && s.R() <= h) return !1;
          if (s.ca() <= h || s.R() <= h) {
            i = new e.h();
            var u = !1;
            o.K(s), a.K(s), o.W(h, h), s.ca() > h ? a.W(0, -h) : a.W(-h, 0);
            for (var c = 0; c < t.I(); c++) if (t.D(c, i), o.contains(i)) {
              if (s.ca() > h) {
                if (i.y > a.G && i.y < a.H) return !1;
              } else if (i.x > a.v && i.x < a.C) return !1;
              u = !0;
            }
            return u;
          }
          for (o.K(s), a.K(s), o.W(h, h), a.W(-h, -h), i = new e.h(), u = !1, c = 0; c < t.I(); c++) if (t.D(c, i), o.contains(i)) {
            if (a.hm(i)) return !1;
            u = !0;
          }
          return u;
        }, n.rU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), !n.zc(o, s, h)) return !1;
          if (o.ca() <= h && o.R() <= h) return n.ek(s, o, h);
          if (o.ca() <= h || o.R() <= h) {
            i = !1, s = new e.l();
            var a = new e.l();
            s.K(o), a.K(o), o.ca() > h ? s.W(0, -h) : s.W(-h, 0), a.W(h, h);
            for (var u = new e.h(), c = 0; c < t.I(); c++) {
              if (t.D(c, u), !a.contains(u)) return !1;
              o.ca() > h ? u.y > s.G && u.y < s.H && (i = !0) : u.x > s.v && u.x < s.C && (i = !0);
            }
            return i;
          }
          for (i = !1, s = new e.l(), a = new e.l(), s.K(o), a.K(o), s.W(-h, -h), a.W(h, h), u = new e.h(), c = 0; c < t.I(); c++) {
            if (t.D(c, u), !a.contains(u)) return !1;
            s.hm(u) && (i = !0);
          }
          return i;
        }, n.cU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          return t.A(s), i.A(o), !(!n.zc(s, o, h) || o.ca() > h || o.R() > h) && (i = i.Ip(), !n.kt(t, i, h));
        }, n.eU = function(t, i, h) {
          var s = new e.l(), o = new e.l();
          if (t.A(s), i.A(o), n.zc(o, s, h) || o.ca() <= h && o.R() <= h) return !1;
          if (o.ca() <= h || o.R() <= h) {
            i = new e.l(), s = new e.l(), i.K(o), o.ca() > h ? i.W(0, -h) : i.W(-h, 0), s.K(o), s.W(h, h);
            for (var a = new e.h(), u = !1, c = !1, l = 0; l < t.I(); l++) if (t.D(l, a), u || (o.ca() > h ? a.y > i.G && a.y < i.H && (u = !0) : a.x > i.v && a.x < i.C && (u = !0)), c || s.contains(a) || (c = !0), u && c) return !0;
            return !1;
          }
          for (i = new e.l(), s = new e.l(), i.K(o), i.W(-h, -h), s.K(o), s.W(h, h), a = new e.h(), c = u = !1, l = 0; l < t.I(); l++) if (t.D(l, a), !u && i.hm(a) && (u = !0), c || s.contains(a) || (c = !0), u && c) return !0;
          return !1;
        }, n.wI = function(t, i, h) {
          return e.h.yc(t, i) <= h * h;
        }, n.SU = function(t, i, h) {
          return e.h.yc(t, i) > h * h;
        }, n.uI = function(t, i, h) {
          return n.wI(t, i, h);
        }, n.vI = function(t, i, h) {
          var s = new e.l();
          return s.K(t), n.ek(s, i, h);
        }, n.Rw = function(t, i, h) {
          var s = new e.l();
          return s.K(i), s.W(h, h), !s.contains(t);
        }, n.dB = function(t, i, h) {
          if (i.ca() <= h && i.R() <= h) return !1;
          var s = new e.l(), o = new e.l();
          if (s.K(i), s.W(h, h), !s.contains(t)) return !1;
          if (i.ca() <= h || i.R() <= h) {
            if (o.K(i), i.ca() > h ? o.W(0, -h) : o.W(-h, 0), i.ca() > h) {
              if (t.y > o.G && t.y < o.H) return !1;
            } else if (t.x > o.v && t.x < o.C) return !1;
            return !0;
          }
          return o.K(i), o.W(-h, -h), !o.hm(t);
        }, n.eB = function(t, i, h) {
          if (i.ca() <= h && i.R() <= h) return !0;
          if (i.ca() <= h || i.R() <= h) {
            var s = new e.l();
            s.K(i), i.ca() > h ? s.W(0, -h) : s.W(-h, 0);
            var o = !1;
            return i.ca() > h ? t.y > s.G && t.y < s.H && (o = !0) : t.x > s.v && t.x < s.C && (o = !0), o;
          }
          return (s = new e.l()).K(i), s.W(-h, -h), s.hm(t);
        }, n.RU = function(t, i, h) {
          return n.vI(t, i, h);
        }, n.ek = function(t, i, h) {
          return n.zc(t, i, h) && n.zc(i, t, h);
        }, n.dk = function(t, i, h) {
          var s = new e.l();
          return s.K(i), s.W(h, h), !t.isIntersecting(s);
        }, n.cQ = function(t, i, h) {
          if (t.ca() <= h && t.R() <= h) {
            var s = t.sf();
            return n.dB(s, i, h);
          }
          if (i.ca() <= h && i.R() <= h) return s = i.sf(), n.dB(s, t, h);
          if (t.ca() > h && t.R() > h && (i.ca() <= h || i.R() <= h) ? s = i : (s = t, t = i), s.ca() <= h || s.R() <= h) {
            if (t.ca() <= h || t.R() <= h) {
              i = new e.yb();
              var o = new e.yb(), a = [0, 0], u = [0, 0], c = new e.h();
              return s.dn(c), i.Dc(c), s.en(c), i.Qc(c), t.dn(c), o.Dc(c), t.en(c), o.Qc(c), i.Ea(o, null, a, u, h), i.Ea(o, null, null, null, h) == 1 && (a[0] == 0 || a[1] == 1 || u[0] == 0 || u[1] == 1);
            }
            return i = new e.l(), o = new e.l(), i.K(t), i.W(-h, -h), o.K(i), o.Ea(s), !(!o.B() && (o.ca() > h || o.R() > h));
          }
          return t.W(h, h), (o = new e.l()).K(s), o.Ea(t), !(o.B() || !o.B() && o.ca() > h && o.R() > h);
        }, n.bQ = function(t, i, h) {
          if (n.zc(t, i, h) || n.zc(i, t, h) || t.ca() <= h && t.R() <= h || i.ca() <= h && i.R() <= h) return !1;
          if (t.ca() <= h || t.R() <= h) {
            if (i.ca() > h && i.R() > h) return !1;
            var s = new e.yb(), o = new e.yb(), a = [0, 0], u = [0, 0], c = new e.h();
            return t.dn(c), s.Dc(c), t.en(c), s.Qc(c), i.dn(c), o.Dc(c), i.en(c), o.Qc(c), s.Ea(o, null, a, u, h), s.Ea(o, null, null, null, h) == 2 && (0 < a[0] || 1 > a[1]) && (0 < u[0] || 1 > u[1]);
          }
          return !(i.ca() <= h || i.R() <= h) && ((s = new e.l()).K(t), s.Ea(i), !(s.B() || s.ca() <= h || s.R() <= h));
        }, n.jF = function(t, i, h) {
          if (!n.zc(t, i, h)) return !1;
          if (t.ca() <= h && t.R() <= h) return t = t.sf(), n.eB(t, i, h);
          if (i.ca() <= h && i.R() <= h) return i = i.sf(), n.eB(i, t, h);
          if (t.ca() <= h || t.R() <= h) return n.zc(t, i, h);
          if (i.ca() <= h || i.R() <= h) {
            var s = new e.l();
            return s.K(t), s.W(-h, -h), s.hm(i) ? !0 : ((t = new e.l()).K(s), t.Ea(i), !(t.B() || t.ca() <= h && t.R() <= h));
          }
          return n.zc(t, i, h);
        }, n.aQ = function(t, i, h) {
          if (n.zc(t, i, h) || n.zc(i, t, h) || t.ca() <= h && t.R() <= h || i.ca() <= h && i.R() <= h || i.ca() > h && i.R() > h && t.ca() > h && t.R() > h) return !1;
          if (t.ca() > h && t.R() > h) var s = i;
          else s = t, t = i;
          if (t.ca() > h && t.R() > h) {
            i = new e.l();
            var o = new e.l();
            return o.K(t), o.W(-h, -h), i.K(o), i.Ea(s), !(i.B() || i.ca() <= h && i.R() <= h);
          }
          i = new e.yb(), o = new e.yb();
          var a = [0, 0], u = [0, 0], c = new e.h();
          return s.dn(c), i.Dc(c), s.en(c), i.Qc(c), t.dn(c), o.Dc(c), t.en(c), o.Qc(c), i.Ea(o, null, a, u, h), i.Ea(o, null, null, null, h) == 1 && 0 < a[0] && 1 > a[1] && 0 < u[0] && 1 > u[1];
        }, n.EI = function(t, i, h) {
          var s = new e.l(), o = new e.l(), a = new e.Zl(t, i, h, !0);
          if (!a.next()) return !0;
          if (this.UG(t, i, h)) return !1;
          var u = t, c = null;
          i.getType() == 1736 && (c = i);
          var l = !1, p = !1;
          do {
            var y = a.nl(), d = a.hl();
            if (d = i.Na(i.Ba(d)), s.K(a.uz()), s.W(h, h), s.contains(d) && (d = e.hd.Yd(u, d, 0)) != 0 || i.getType() == 1736 && (y = t.Na(t.Ba(y)), o.K(a.az()), o.W(h, h), o.contains(y) && (d = e.hd.Yd(c, y, 0)) != 0)) return !1;
            l || (!e.Dg.Ml(t, i.da() - 1) || t.Bb != null && t.Bb.Fb != null ? u = t : (u = new e.Da(), t.copyTo(u), u.fj(1)), l = !0), i.getType() != 1736 || p || (p = i, !e.Dg.Ml(p, t.da() - 1) || i.Bb != null && i.Bb.Fb != null ? c = i : (c = new e.Da(), p.copyTo(c), c.fj(1)), p = !0);
          } while (a.next());
          return !0;
        }, n.zc = function(t, i, h) {
          var s = new e.l();
          return s.K(t), s.W(h, h), s.contains(i);
        }, n.ls = function(t, i, h) {
          var s = new e.l();
          return s.K(i), s.W(h, h), i = new e.h(), t.dn(i), !s.contains(i) || (t.$I(i), !s.contains(i) || (t.cJ(i), !s.contains(i) || (t.en(i), !s.contains(i))));
        }, n.dI = function(t, i, h) {
          if (t.da() != i.da() || t.I() != i.I()) return !1;
          var s = new e.h(), o = new e.h(), a = !0;
          h *= h;
          for (var u = 0; u < t.da(); u++) {
            if (t.Vc(u) != i.Vc(u)) {
              a = !1;
              break;
            }
            for (var c = t.Ba(u); c < i.Vc(u); c++) if (t.D(c, s), i.D(c, o), e.h.yc(s, o) > h) {
              a = !1;
              break;
            }
            if (!a) break;
          }
          return !!a;
        }, n.jU = function(t, i, h) {
          if (t.I() != i.I()) return !1;
          var s = new e.h(), o = new e.h(), a = !0;
          h *= h;
          for (var u = 0; u < t.I(); u++) if (t.D(u, s), i.D(u, o), e.h.yc(s, o) > h) {
            a = !1;
            break;
          }
          return !!a;
        }, n.YA = function(t, i, h, s, o, a) {
          var u = !1;
          if (t.I() > i.I()) {
            s && (s = !1, u = !0);
            var c = i;
          } else c = t, t = i;
          if (i = null, o || a || u) {
            i = new e.pn(t.I());
            for (var l = 0; l < t.I(); l++) i.write(l, 0);
          }
          l = new e.l();
          var p = new e.l(), y = new e.l();
          c.A(l), t.A(p), l.W(h, h), p.W(h, h), y.K(l), y.Ea(p), p = new e.h();
          for (var d = new e.h(), g = !0, b = e.ta.oE(t, y), x = b.getIterator(), m = h * h, w = 0; w < c.I(); w++) if (c.D(w, p), y.contains(p)) {
            var j = !1;
            l.K(p.x, p.y, p.x, p.y), x.Xi(l, h);
            for (var M = x.next(); M != -1 && (M = b.ja(M), t.D(M, d), !(e.h.yc(p, d) <= m && ((o || a || u) && i.write(M, 1), j = !0, s))); M = x.next()) ;
            if (!j && (g = !1, o || s)) return !1;
          } else {
            if (o || s) return !1;
            g = !1;
          }
          if (a && g) return !1;
          if (s) return !0;
          for (l = 0; l < t.I(); l++) if (i.read(l) == 1) {
            if (a) return !0;
          } else if (o || u) return !1;
          return !a;
        }, n.gI = function(t, i, h) {
          if (t.I() > i.I()) var s = i;
          else s = t, t = i;
          i = new e.l();
          var o = new e.l(), a = new e.l();
          s.A(i), t.A(o), i.W(h, h), o.W(h, h), a.K(i), a.Ea(o), o = new e.h();
          for (var u = new e.h(), c = h * h, l = e.ta.oE(t, a), p = l.getIterator(), y = 0; y < s.I(); y++) if (s.D(y, o), a.contains(o)) {
            i.K(o.x, o.y, o.x, o.y), p.Xi(i, h);
            for (var d = p.next(); d != -1; d = p.next()) if (t.D(l.ja(d), u), e.h.yc(o, u) <= c) return !0;
          }
          return !1;
        }, n.Wz = function(t, i, h, s) {
          return n.ym(t, i, h, s) && n.ym(i, t, h, s);
        }, n.ym = function(t, i, h, s) {
          function o(D, B) {
            return d.QE(D, B);
          }
          var a, u = !0, c = [0, 0], l = [0, 0], p = 0, y = new e.ia(0), d = new n(), g = new e.l(), b = new e.l(), x = new e.l();
          t.A(g), i.A(b), g.W(h, h), b.W(h, h), x.K(g), x.Ea(b), t = t.Ga(), b = i.Ga();
          var m = null, w = m = null, j = i.Bb;
          for (j != null ? (m = j.Fb, w = j.zo, m == null && (m = e.ta.jj(i, x))) : m = e.ta.jj(i, x), i = m.getIterator(), j = null, w != null && (j = w.getIterator()); t.$a(); ) for (; t.Ha(); ) {
            var M = !1, A = t.ha();
            if (A.A(g), !g.isIntersecting(x) || j != null && (j.Xi(g, h), j.next() == -1)) return !1;
            for (w = A.Qb(), i.Uo(A, h), a = i.next(); a != -1; a = i.next()) {
              b.Vb(m.ja(a)), a = b.ha();
              var z = A.Ea(a, null, c, l, h);
              if (z == 2 && (!s || l[0] <= l[1])) {
                z = c[0];
                var N = c[1], I = l[0], C = l[1];
                if (z * w <= h && (1 - N) * w <= h) {
                  M = !0, p = 0, y.resize(0), d.rh.length = 0;
                  var T = t.wb();
                  for (I = !0; I; ) {
                    if (t.Ha()) {
                      if (w = (A = t.ha()).Qb(), (z = A.Ea(a, null, c, l, h)) == 2 && (!s || l[0] <= l[1]) && (z = c[0], N = c[1], z * w <= h && (1 - N) * w <= h)) {
                        T = t.wb();
                        continue;
                      }
                      if (b.Ha() && (a = b.ha(), (z = A.Ea(a, null, c, l, h)) == 2 && (!s || l[0] <= l[1]) && (z = c[0], N = c[1], z * w <= h && (1 - N) * w <= h))) {
                        T = t.wb();
                        continue;
                      }
                    }
                    I = !1;
                  }
                  T != t.wb() && (t.Vb(T), t.ha());
                  break;
                }
                T = t.wb(), a = f.construct(T, t.gb, z, N, b.wb(), b.gb, I, C), d.rh.push(a), y.add(y.size);
              }
            }
            if (!M) {
              if (p == d.rh.length) return !1;
              for (1 < y.size - p && y.Vd(p, y.size, o), M = 0; p < d.rh.length; p++) if (!((a = d.rh[y.get(p)]).Kj < M && a.Si < M)) {
                if (w * (a.Kj - M) > h) return !1;
                if (w * (1 - (M = a.Si)) <= h || M == 1) break;
              }
              if (w * (1 - M) > h) return !1;
              p = 0, y.resize(0), d.rh.length = 0;
            }
          }
          return u;
        }, n.WG = function(t, i, h) {
          if (1 > n.Xz(t, i, h, null)) return !1;
          var s = new e.l(), o = new e.l();
          t.A(s), i.A(o);
          var a = n.ls(s, o, h);
          return s = n.ls(o, s, h), !(!a || !s) || (a && !s ? !n.ym(i, t, h, !1) : s && !a ? !n.ym(t, i, h, !1) : !n.ym(t, i, h, !1) && !n.ym(i, t, h, !1));
        }, n.Xz = function(t, i, h, s) {
          function o(H, U) {
            return g.QE(H, U);
          }
          if (t.yz() > i.yz()) var a = i, u = t;
          else a = t, u = i;
          t = a.Ga(), i = u.Ga();
          var c = [0, 0], l = [0, 0], p = -1, y = 0, d = new e.ia(0), g = new n(), b = new e.l(), x = new e.l(), m = new e.l();
          a.A(b), u.A(x), b.W(h, h), x.W(h, h), m.K(b), m.Ea(x), a = null, s != null && (a = new e.h());
          var w = x = x = null, j = u.Bb;
          for (j != null ? (x = j.Fb, w = j.zo, x == null && (x = e.ta.jj(u, m))) : x = e.ta.jj(u, m), u = x.getIterator(), j = null, w != null && (j = w.getIterator()); t.$a(); ) for (w = 0; t.Ha(); ) {
            var M = t.ha();
            if (M.A(b), b.isIntersecting(m)) {
              if (j != null && (j.Xi(b, h), j.next() == -1)) continue;
              var A = M.Qb();
              u.Uo(M, h);
              for (var z = u.next(); z != -1; z = u.next()) {
                var N = x.ja(z);
                i.Vb(N);
                var I = i.ha(), C = I.Qb(), T = M.Ea(I, null, c, l, h);
                if (0 < T) {
                  z = c[0], p = l[0];
                  var D = T == 2 ? c[1] : NaN, B = T == 2 ? l[1] : NaN;
                  if (T == 2) {
                    if (A * (D - z) > h) return 1;
                    var E = A * (D - z);
                    if (i.Ha()) {
                      if (I = i.ha(), (T = M.Ea(I, null, c, null, h)) == 2) {
                        T = c[0];
                        var G = c[1];
                        if (E + (T = A * (G - T)) > h) return 1;
                      }
                      i.Vb(N), i.ha();
                    }
                    if (!i.vm()) {
                      if (i.li(), I = i.li(), (T = M.Ea(I, null, c, null, h)) == 2 && (T = c[0], E + (T = A * ((G = c[1]) - T)) > h)) return 1;
                      i.Vb(N), i.ha();
                    }
                    if (t.Ha()) {
                      if (N = t.wb(), (T = (M = t.ha()).Ea(I, null, c, null, h)) == 2 && (T = c[0], E + (T = A * ((G = c[1]) - T)) > h)) return 1;
                      t.Vb(N), t.ha();
                    }
                    if (!t.vm()) {
                      if (N = t.wb(), t.li(), (T = (M = t.li()).Ea(I, null, c, null, h)) == 2 && (T = c[0], E + (T = C * ((G = c[1]) - T)) > h)) return 1;
                      t.Vb(N), t.ha();
                    }
                    I = f.construct(t.wb(), t.gb, z, D, i.wb(), i.gb, p, B), g.rh.push(I), d.add(d.size);
                  }
                  p = 0, s != null && (M.hc(z, a), s.add(a.x), s.add(a.y));
                }
              }
              if (y < g.rh.length) {
                for (d.Vd(y, d.size, o), M = 0, z = g.rh[d.get(y)].Mm; y < g.rh.length; y++) if (!((I = g.rh[d.get(y)]).Kj < M && I.Si < M)) if (A * (I.Kj - M) > h) w = A * (I.Si - I.Kj), M = I.Si, z = I.Mm;
                else {
                  if (I.Mm != z ? (w = A * (I.Si - I.Kj), z = I.Mm) : w += A * (I.Si - I.Kj), w > h) return 1;
                  if ((M = I.Si) == 1) break;
                }
                A * (1 - M) > h && (w = 0), y = 0, d.resize(0), g.rh.length = 0;
              }
            }
          }
          return p;
        }, n.UG = function(t, i, h) {
          var s = t.Ga(), o = i.Ga();
          for (t = new e.Zl(t, i, h, !1); t.next(); ) {
            i = t.nl();
            var a = t.hl();
            if (s.Vb(i), o.Vb(a), i = s.ha(), 0 < o.ha().Ea(i, null, null, null, h)) return !0;
          }
          return !1;
        }, n.VG = function(t, i, h, s) {
          var o = t.Ga(), a = new e.l(), u = new e.l(), c = new e.l();
          t.A(a), i.A(u), a.W(h, h), a.contains(u), u.W(h, h), c.K(a), c.Ea(u), (a = t.Bb) != null ? (a = a.Fb) == null && (a = e.ta.jj(t, c)) : a = e.ta.jj(t, c), t = a.getIterator();
          for (var l = new e.h(), p = new e.h(), y = h * h, d = 0; d < i.I(); d++) if (i.D(d, l), c.contains(l)) {
            u.K(l.x, l.y, l.x, l.y), t.Xi(u, h);
            for (var g = !1, b = t.next(); b != -1; b = t.next()) if (o.Vb(a.ja(b)), (b = o.ha()).hc(b.fe(l, !1), p), e.h.yc(p, l) <= y) {
              g = !0;
              break;
            }
            if (s) {
              if (!g) return !1;
            } else if (g) return !0;
          }
          return !!s;
        }, n.Yz = function(t, i, h) {
          var s = new e.h(), o = h * h, a = t.Ga();
          if ((t = t.Bb) != null && (t = t.Fb) != null) {
            var u = new e.l();
            for (u.K(i), u = (h = t.MF(u, h)).next(); u != -1; u = h.next()) if (a.Vb(t.ja(u)), a.Ha()) {
              var c = (u = a.ha()).fe(i, !1);
              if (u.hc(c, s), e.h.yc(i, s) <= o) return !0;
            }
            return !1;
          }
          for (t = new e.l(); a.$a(); ) for (; a.Ha(); ) if ((u = a.ha()).A(t), t.W(h, h), t.contains(i) && (c = u.fe(i, !1), u.hc(c, s), e.h.yc(i, s) <= o)) return !0;
          return !1;
        }, n.SG = function(t, i, h) {
          return n.Yz(t, i, h) && !n.Zz(t, i, h);
        }, n.Zz = function(t, i, h) {
          return t = t.mg(), !n.kt(t, i, h);
        }, n.TG = function(t, i, h) {
          if (t.tm()) {
            var s = new e.yb(i.v, i.G, i.v, i.H), o = new e.yb(i.v, i.H, i.C, i.H), a = new e.yb(i.C, i.H, i.C, i.G);
            for (i = new e.yb(i.C, i.G, i.v, i.G), t = t.Ga(); t.$a(); ) for (; t.Ha(); ) {
              var u = t.ha();
              if (u.isIntersecting(s, h) || u.isIntersecting(o, h) || u.isIntersecting(a, h) || u.isIntersecting(i, h)) return !0;
            }
          } else {
            (s = new e.l()).K(i), s.W(h, h), h = t.ub(0), o = new e.h(), a = new e.h(), i = new e.h(), u = new e.h();
            for (var c = 0, l = t.da(); c < l; c++) for (var p = !0, y = t.Ba(c), d = t.Vc(c); y < d; y++) if (p) h.tc(2 * y, a), p = !1;
            else {
              if (h.tc(2 * y, o), i.L(a), u.L(o), s.zy(i, u) != 0) return !0;
              a.L(o);
            }
          }
          return !1;
        }, n.qc = function(t, i, h) {
          var s = t.getType(), o = i.getType();
          if (e.aa.xj(s)) {
            var a = t.Bb;
            if (a != null && (a = a.Fk) != null) if (o == 33) {
              var u = i.D();
              if ((u = a.So(u.x, u.y)) == 1) return 1;
              if (u == 0) return 4;
            } else {
              if (u = new e.l(), i.A(u), (u = a.Ro(u)) == 1) return 1;
              if (u == 0) return 4;
              if (h && e.aa.xj(o) && n.HE(i, a)) return 1073741824;
            }
          }
          if (e.aa.xj(o) && (a = i.Bb) != null && (a = a.Fk) != null) if (s == 33) {
            if (t = t.D(), (u = a.So(t.x, t.y)) == 1) return 2;
            if (u == 0) return 4;
          } else {
            if (i = new e.l(), t.A(i), (u = a.Ro(i)) == 1) return 2;
            if (u == 0) return 4;
            if (h && e.aa.xj(s) && n.HE(t, a)) return 1073741824;
          }
          return 0;
        }, n.HE = function(t, i) {
          for (var h = t.I(), s = new e.h(), o = 0; o < h; o++) if (t.D(o, s), i.So(s.x, s.y) == 1) return !0;
          return !1;
        }, n.II = function(t, i, h, s) {
          for (var o = 1 <= t.om(0) && 1 <= i.om(0), a = t.Ga(), u = i.Ga(), c = [0, 0], l = [0, 0], p = new e.Zl(t, i, h, !1), y = !1; p.next(); ) {
            var d = p.nl(), g = p.hl();
            if (a.Vb(d), u.Vb(g), d = a.ha(), (g = u.ha().Ea(d, null, l, c, h)) == 2) {
              if (y = c[0], g = c[1], d = d.Qb(), o && (g - y) * d > h) return !1;
              y = !0;
            } else if (g != 0) {
              if (y = c[0], d = l[0], 0 < y && 1 > y && 0 < d && 1 > d) return !1;
              y = !0;
            }
          }
          return !!y && (a = new e.l(), u = new e.l(), o = new e.l(), t.A(a), i.A(u), a.W(1e3 * h, 1e3 * h), u.W(1e3 * h, 1e3 * h), o.K(a), o.Ea(u), !(10 < t.I() && (t = e.Ud.clip(t, o, h, 0), t.B()) || 10 < i.I() && (i = e.Ud.clip(i, o, h, 0), i.B())) && e.am.rt(t, i, h, "F********", s));
        }, n.FI = function(t, i, h, s) {
          var o = 1 <= t.om(0) && 1 <= i.om(0), a = new e.l(), u = new e.l(), c = new e.l();
          t.A(a), i.A(u);
          for (var l = !1, p = n.ls(a, u, h), y = n.ls(u, a, h), d = t.Ga(), g = i.Ga(), b = [0, 0], x = [0, 0], m = new e.Zl(t, i, h, !1); m.next(); ) {
            var w = m.nl(), j = m.hl();
            if (d.Vb(w), g.Vb(j), j = d.ha(), (w = g.ha().Ea(j, null, x, b, h)) == 2) {
              w = b[0];
              var M = b[1];
              if (j = j.Qb(), o && (M - w) * j > h && (l = !0, p && y)) return !0;
            } else if (w != 0 && (w = b[0], j = x[0], 0 < w && 1 > w && 0 < j && 1 > j)) return !0;
          }
          if (o = new e.l(), d = new e.l(), o.K(a), o.W(1e3 * h, 1e3 * h), d.K(u), d.W(1e3 * h, 1e3 * h), c.K(o), c.Ea(d), a = "", a = l ? a + "**" : a + "T*", p) {
            if (10 < i.I() && (i = e.Ud.clip(i, c, h, 0)).B()) return !1;
            a += "****";
          } else a += "T***";
          if (y) {
            if (10 < t.I() && (t = e.Ud.clip(t, c, h, 0)).B()) return !1;
            a += "***";
          } else a += "T**";
          return e.am.rt(t, i, h, a.toString(), s);
        }, n.BI = function(t, i, h, s) {
          var o = [!1], a = n.zI(t, i, h, o);
          return o[0] ? a : (o = new e.l(), i.A(o), o.W(1e3 * h, 1e3 * h), !(10 < t.I() && (t = e.Ud.clip(t, o, h, 0), t.B())) && e.am.Sw(t, i, h, s));
        }, n.zI = function(t, i, h, s) {
          s[0] = !1;
          for (var o = t.Ga(), a = i.Ga(), u = [0, 0], c = [0, 0], l = new e.Zl(t, i, h, !1), p = !1; l.next(); ) {
            var y = l.nl(), d = l.hl();
            if (o.Vb(y, -1), a.Vb(d, -1), y = o.ha(), (y = a.ha().Ea(y, null, c, u, h)) != 0 && (p = !0, y == 1 && (y = u[0], d = c[0], 0 < y && 1 > y && 0 < d && 1 > d))) return s[0] = !0, !1;
          }
          if (!p) {
            for (s[0] = !0, u = new e.l(), t.A(u), u.W(h, h), l = t, p = !1, c = new e.l(), s = 0, o = i.da(); s < o; s++) if (0 < i.Ja(s)) {
              if (i.Rj(s, c), !u.isIntersecting(c) || (a = i.Na(i.Ba(s)), (a = e.Dg.wm(l, a, 0)) == 0)) return !1;
              p || (!e.Dg.Ml(t, i.da() - 1) || t.Bb != null && t.Bb.Fb != null ? l = t : (a = new e.Da(), t.copyTo(a), a.fj(1), l = a), p = !0);
            }
            if (t.da() == 1 || i.getType() == 1607) return !0;
            for (u = new e.l(), i.A(u), u.W(h, h), c = i, l = !1, h = new e.l(), s = 0, o = t.da(); s < o; s++) if (0 < t.Ja(s)) {
              if (t.Rj(s, h), u.isIntersecting(h) && (a = t.Na(t.Ba(s)), (a = e.Dg.wm(c, a, 0)) == 1)) return !1;
              l || (!e.Dg.Ml(i, t.da() - 1) || i.Bb != null && i.Bb.Fb != null ? c = i : (a = new e.Da(), i.copyTo(a), a.fj(1), c = a), l = !0);
            }
            return !0;
          }
          return !1;
        }, n.JI = function(t, i, h, s) {
          for (var o = t.Ga(), a = i.Ga(), u = [0, 0], c = [0, 0], l = new e.Zl(t, i, h, !1), p = !1; l.next(); ) {
            var y = l.nl(), d = l.hl();
            if (o.Vb(y), a.Vb(d), y = o.ha(), (y = a.ha().Ea(y, null, c, u, h)) == 2) p = !0;
            else if (y != 0) {
              if (p = u[0], y = c[0], 0 < p && 1 > p && 0 < y && 1 > y) return !1;
              p = !0;
            }
          }
          return !!p && (a = new e.l(), u = new e.l(), o = new e.l(), t.A(a), i.A(u), a.W(1e3 * h, 1e3 * h), u.W(1e3 * h, 1e3 * h), o.K(a), o.Ea(u), !(10 < t.I() && (t = e.Ud.clip(t, o, h, 0), t.B()) || 10 < i.I() && (i = e.Ud.clip(i, o, h, 0), i.B())) && e.am.$m(t, i, h, "F********", s));
        }, n.DI = function(t, i, h, s) {
          for (var o = t.Ga(), a = i.Ga(), u = [0, 0], c = [0, 0], l = new e.Zl(t, i, h, !1), p = !1; l.next(); ) {
            var y = l.nl(), d = l.hl();
            if (o.Vb(y), a.Vb(d), y = o.ha(), (y = a.ha().Ea(y, null, c, u, h)) == 2) p = !0;
            else if (y != 0) {
              if (p = u[0], y = c[0], 0 < p && 1 > p && 0 < y && 1 > y) return !0;
              p = !0;
            }
          }
          return !!p && (a = new e.l(), u = new e.l(), c = new e.l(), l = new e.l(), o = new e.l(), t.A(a), i.A(u), n.ls(u, a, h) ? (c.K(a), c.W(1e3 * h, 1e3 * h), l.K(u), l.W(1e3 * h, 1e3 * h), o.K(c), o.Ea(l), !(10 < t.I() && (t = e.Ud.clip(t, o, h, 0), t.B()) || 10 < i.I() && (i = e.Ud.clip(i, o, h, 0), i.B())) && (h = e.am.$m(t, i, h, "T********", s))) : h = e.am.$m(t, i, h, "T*****T**", s));
        }, n.CI = function(t, i, h, s) {
          var o = [!1], a = n.zI(t, i, h, o);
          return o[0] ? a : (o = new e.l(), i.A(o), o.W(1e3 * h, 1e3 * h), !(10 < t.I() && (t = e.Ud.clip(t, o, h, 0), t.B())) && e.am.fB(t, i, h, s));
        }, n.AI = function(t, i, h) {
          return e.hd.Yd(t, i, h) == 1;
        }, n.HI = function(t, i, h) {
          return e.hd.Yd(t, i, h) == 2;
        }, n.kt = function(t, i, h) {
          var s = new e.h();
          h *= h;
          for (var o = 0; o < t.I(); o++) if (t.D(o, s), e.h.yc(s, i) <= h) return !1;
          return !0;
        }, n.prototype.QE = function(t, i) {
          return t = this.rh[t], i = this.rh[i], t.Mm < i.Mm || t.Mm == i.Mm && (t.pw < i.pw || t.pw == i.pw && (t.Kj < i.Kj || t.Kj == i.Kj && (t.Si < i.Si || t.Si == i.Si && t.BH < i.BH))) ? -1 : 1;
        }, n;
      }();
      e.ud = r;
    }(k || (k = {})), function(e) {
      var v, f, r;
      (f = v || (v = {}))[f.InteriorInterior = 0] = "InteriorInterior", f[f.InteriorBoundary = 1] = "InteriorBoundary", f[f.InteriorExterior = 2] = "InteriorExterior", f[f.BoundaryInterior = 3] = "BoundaryInterior", f[f.BoundaryBoundary = 4] = "BoundaryBoundary", f[f.BoundaryExterior = 5] = "BoundaryExterior", f[f.ExteriorInterior = 6] = "ExteriorInterior", f[f.ExteriorBoundary = 7] = "ExteriorBoundary", f[f.ExteriorExterior = 8] = "ExteriorExterior", function(n) {
        n[n.AreaAreaPredicates = 0] = "AreaAreaPredicates", n[n.AreaLinePredicates = 1] = "AreaLinePredicates", n[n.LineLinePredicates = 2] = "LineLinePredicates", n[n.AreaPointPredicates = 3] = "AreaPointPredicates", n[n.LinePointPredicates = 4] = "LinePointPredicates", n[n.PointPointPredicates = 5] = "PointPointPredicates";
      }(r || (r = {})), v = function() {
        function n() {
          this.le = 0, this.j = new e.iu(), this.J = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.Za = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.ea = [!1, !1, !1, !1, !1, !1, !1, !1, !1], this.Sm = this.vw = -1;
        }
        return n.yB = function(t, i, h, s, o) {
          if (s.length != 9) throw e.i.fa("relation string length has to be 9 characters");
          for (var a = 0; 9 > a; a++) {
            var u = s.charAt(a);
            if (u != "*" && u != "T" && u != "F" && u != "0" && u != "1" && u != "2") throw e.i.fa("relation string");
          }
          if ((a = this.MR(s, t.Db(), i.Db())) != 0) return e.ud.zB(t, i, h, a, o);
          a = new e.l(), t.A(a), u = new e.l(), i.A(u);
          var c = new e.l();
          if (c.K(a), c.Zb(u), h = e.ta.Wd(h, c, !1), t = this.WE(t, h), i = this.WE(i, h), t.B() || i.B()) return this.uW(t, i, s);
          switch (a = t.getType(), u = i.getType(), c = !1, a) {
            case 1736:
              switch (u) {
                case 1736:
                  c = this.rt(t, i, h, s, o);
                  break;
                case 1607:
                  c = this.$m(t, i, h, s, o);
                  break;
                case 33:
                  c = this.qt(t, i, h, s);
                  break;
                case 550:
                  c = this.pt(t, i, h, s, o);
              }
              break;
            case 1607:
              switch (u) {
                case 1736:
                  c = this.$m(i, t, h, this.Zp(s), o);
                  break;
                case 1607:
                  c = this.gB(t, i, h, s, o);
                  break;
                case 33:
                  c = this.tt(t, i, h, s, o);
                  break;
                case 550:
                  c = this.st(t, i, h, s, o);
              }
              break;
            case 33:
              switch (u) {
                case 1736:
                  c = this.qt(i, t, h, this.Zp(s));
                  break;
                case 1607:
                  c = this.tt(i, t, h, this.Zp(s), o);
                  break;
                case 33:
                  c = this.$U(t, i, h, s);
                  break;
                case 550:
                  c = this.lt(i, t, h, this.Zp(s));
              }
              break;
            case 550:
              switch (u) {
                case 1736:
                  c = this.pt(i, t, h, this.Zp(s), o);
                  break;
                case 1607:
                  c = this.st(i, t, h, this.Zp(s), o);
                  break;
                case 550:
                  c = this.ZA(t, i, h, s, o);
                  break;
                case 33:
                  c = this.lt(t, i, h, s);
              }
              break;
            default:
              c = !1;
          }
          return c;
        }, n.rt = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.xJ();
          var u = new e.l(), c = new e.l();
          return t.A(u), i.A(c), s = !1, e.ud.dk(u, c, h) && (a.Cu(t, i), s = !0), s || ((u = e.ud.qc(t, i, !1)) == 4 ? (a.Cu(t, i), s = !0) : u == 1 ? (a.ly(i), s = !0) : u == 2 && (a.ZD(t), s = !0)), s || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.Bp(t, i), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.Sw = function(t, i, h, s) {
          var o = new n();
          o.Yi(), o.bj("T*****F**"), o.xJ();
          var a = new e.l(), u = new e.l();
          t.A(a), i.A(u);
          var c = !1;
          return e.ud.dk(a, u, h) && (o.Cu(t, i), c = !0), c || ((a = e.ud.qc(t, i, !1)) == 4 ? (o.Cu(t, i), c = !0) : a == 1 ? (o.ly(i), c = !0) : a == 2 && (o.ZD(t), c = !0)), c ? this.fg(o.J, o.Xc) : (t = (c = new e.gd()).Ib(t), a = c.Ib(i), e.Tk.V(c, h, s, !1), h = c.Ne(a).mg(), c.Gp(0, !0, !0), e.rn.V(c, t, -1, !1, s), c.I(t) != 0 && (e.rn.V(c, a, -1, !1, s), o.er(c, s), (i = c.I(a) == 0) || (o.Bp(t, a), o.j.Ug(), a = this.fg(o.J, o.Xc)) ? (t = c.Ne(t), t = (c = new e.gd()).Ib(t), a = c.Ib(h), o.er(c, s), o.le = 0, o.Yi(), o.bj(i ? "T*****F**" : "******F**"), o.IB(), o.Bp(t, a), o.j.Ug(), this.fg(o.J, o.Xc)) : a));
        }, n.$m = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.IB();
          var u = new e.l(), c = new e.l();
          return t.A(u), i.A(c), s = !1, e.ud.dk(u, c, h) && (a.Du(t, i), s = !0), s || ((u = e.ud.qc(t, i, !1)) == 4 ? (a.Du(t, i), s = !0) : u == 1 && (a.$D(i), s = !0)), s || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.kh = a.j.Dp(), n.Jw(i, a.j, a.kh), a.Bp(t, i), a.j.Ep(a.kh), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.fB = function(t, i, h, s) {
          var o = new n();
          o.Yi(), o.bj("T*****F**"), o.IB();
          var a = new e.l(), u = new e.l();
          t.A(a), i.A(u);
          var c = !1;
          return e.ud.dk(a, u, h) && (o.Du(t, i), c = !0), c || ((a = e.ud.qc(t, i, !1)) == 4 ? (o.Du(t, i), c = !0) : a == 1 && (o.$D(i), c = !0)), c ? this.fg(o.J, o.Xc) : (t = (c = new e.gd()).Ib(t), i = c.Ib(i), o.Wo(c, h, s), c.I(t) != 0 && (o.Bp(t, i), o.j.Ug(), this.fg(o.J, o.Xc)));
        }, n.pt = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.yJ();
          var u = new e.l(), c = new e.l();
          return t.A(u), i.A(c), s = !1, e.ud.dk(u, c, h) && (a.Eu(t), s = !0), s || ((u = e.ud.qc(t, i, !1)) == 4 ? (a.Eu(t), s = !0) : u == 1 && (a.zN(), s = !0)), s || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.Gy(t, i), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.gB = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.eX(), s = new e.l();
          var u = new e.l();
          t.A(s), i.A(u);
          var c = !1;
          return e.ud.dk(s, u, h) && (a.PG(t, i), c = !0), c || e.ud.qc(t, i, !1) != 4 || (a.PG(t, i), c = !0), c || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.Yh = a.j.Dp(), a.kh = a.j.Dp(), n.Jw(t, a.j, a.Yh), n.Jw(i, a.j, a.kh), a.Bp(t, i), a.j.Ep(a.Yh), a.j.Ep(a.kh), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.st = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.MJ(), s = new e.l();
          var u = new e.l();
          t.A(s), i.A(u);
          var c = !1;
          return e.ud.dk(s, u, h) && (a.Vz(t), c = !0), c || e.ud.qc(t, i, !1) != 4 || (a.Vz(t), c = !0), c || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.Yh = a.j.Dp(), n.Jw(t, a.j, a.Yh), a.Gy(t, i), a.j.Ep(a.Yh), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.ZA = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.RJ(), s = new e.l();
          var u = new e.l();
          t.A(s), i.A(u);
          var c = !1;
          return e.ud.dk(s, u, h) && (a.yI(), c = !0), c || (t = (s = new e.gd()).Ib(t), i = s.Ib(i), a.Wo(s, h, o), a.Gy(t, i), a.j.Ug()), n.fg(a.J, a.Xc);
        }, n.qt = function(t, i, h, s) {
          var o = new n();
          o.Yi(), o.bj(s), o.yJ();
          var a = new e.l();
          t.A(a), i = i.D();
          var u = !1;
          return e.ud.Rw(i, a, h) && (o.Eu(t), u = !0), u || ((h = e.hd.Yd(t, i, h)) == 1 ? (o.J[0] = 0, o.J[2] = 2, o.J[3] = -1, o.J[5] = 1, o.J[6] = -1) : h == 2 ? (o.J[6] = -1, t.Ke() != 0 ? (o.J[0] = -1, o.J[3] = 0, o.J[2] = 2, o.J[5] = 1) : (o.J[0] = 0, o.J[3] = -1, o.J[5] = -1, h = new e.l(), t.A(h), o.J[2] = h.ca() == 0 && h.R() == 0 ? -1 : 1)) : o.Eu(t)), this.fg(o.J, s);
        }, n.tt = function(t, i, h, s, o) {
          var a = new n();
          a.Yi(), a.bj(s), a.MJ();
          var u = new e.l();
          t.A(u), s = i.D();
          var c = !1;
          if (e.ud.Rw(s, u, h) && (a.Vz(t), c = !0), !c) {
            u = null;
            var l = c = !1;
            (a.ea[0] || a.ea[6]) && (e.ud.Yz(t, s, h) ? (a.ea[0] && (u = e.pi.gm(t, o), l = !e.ud.kt(u, s, h), c = !0, a.J[0] = l ? -1 : 0), a.J[6] = -1) : (a.J[0] = -1, a.J[6] = 0)), a.ea[3] && (u != null && u.B() ? a.J[3] = -1 : (c || (u == null && (u = e.pi.gm(t, o)), l = !e.ud.kt(u, s, h), c = !0), a.J[3] = l ? 0 : -1)), a.ea[5] && (u != null && u.B() ? a.J[5] = -1 : c && !l ? a.J[5] = 0 : (u == null && (u = e.pi.gm(t, o)), o = e.ud.Nw(u, i, h), a.J[5] = o ? -1 : 0)), a.ea[2] && (t.Qb() != 0 ? a.J[2] = 1 : ((o = new e.de(t.description)).Fd(t, 0, t.I()), t = e.ud.Nw(o, i, h), a.J[2] = t ? -1 : 0));
          }
          return this.fg(a.J, a.Xc);
        }, n.lt = function(t, i, h, s) {
          var o = new n();
          o.Yi(), o.bj(s), o.RJ();
          var a = new e.l();
          t.A(a), i = i.D();
          var u = !1;
          if (e.ud.Rw(i, a, h) && (o.yI(), u = !0), !u) {
            a = !1, u = !0, h *= h;
            for (var c = 0; c < t.I(); c++) {
              var l = t.Na(c);
              if (e.h.yc(l, i) <= h ? a = !0 : u = !1, a && !u) break;
            }
            a ? (o.J[0] = 0, o.J[2] = u ? -1 : 0, o.J[6] = -1) : (o.J[0] = -1, o.J[2] = 0, o.J[6] = 0);
          }
          return n.fg(o.J, s);
        }, n.$U = function(t, i, h, s) {
          t = t.D(), i = i.D();
          for (var o = [], a = 0; 9 > a; a++) o[a] = -1;
          return e.h.yc(t, i) <= h * h ? o[0] = 0 : (o[2] = 0, o[6] = 0), o[8] = 2, n.fg(o, s);
        }, n.fg = function(t, i) {
          for (var h = 0; 9 > h; h++) switch (i.charAt(h)) {
            case "T":
              if (t[h] == -1) return !1;
              break;
            case "F":
              if (t[h] != -1) return !1;
              break;
            case "0":
              if (t[h] != 0) return !1;
              break;
            case "1":
              if (t[h] != 1) return !1;
              break;
            case "2":
              if (t[h] != 2) return !1;
          }
          return !0;
        }, n.uW = function(t, i, h) {
          var s = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
          if (t.B() && i.B()) {
            for (var o = 0; 9 > o; o++) s[o] = -1;
            return this.fg(s, h);
          }
          return o = !1, t.B() && (t = i, o = !0), s[0] = -1, s[1] = -1, s[3] = -1, s[4] = -1, s[6] = -1, s[7] = -1, s[8] = 2, i = t.getType(), e.aa.Hc(i) ? i == 1736 ? t.Ke() != 0 ? (s[2] = 2, s[5] = 1) : (s[5] = -1, i = new e.l(), t.A(i), s[2] = i.ca() == 0 && i.R() == 0 ? 0 : 1) : (i = t.Qb() != 0, s[2] = i ? 1 : 0, s[5] = e.pi.aq(t) ? 0 : -1) : (s[2] = 0, s[5] = -1), o && this.vK(s), this.fg(s, h);
        }, n.MR = function(t, i, h) {
          return n.dQ(t) ? 3 : n.UP(t) ? 4 : n.cY(t, i, h) ? 8 : n.CP(t, i, h) ? 16 : n.eP(t) ? 1 : n.EU(t, i, h) ? 32 : 0;
        }, n.dQ = function(t) {
          return t.charAt(0) == "T" && t.charAt(1) == "*" && t.charAt(2) == "F" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "F" && t.charAt(6) == "F" && t.charAt(7) == "F" && t.charAt(8) == "*";
        }, n.UP = function(t) {
          return t.charAt(0) == "F" && t.charAt(1) == "F" && t.charAt(2) == "*" && t.charAt(3) == "F" && t.charAt(4) == "F" && t.charAt(5) == "*" && t.charAt(6) == "*" && t.charAt(7) == "*" && t.charAt(8) == "*";
        }, n.cY = function(t, i, h) {
          return (i != 0 || h != 0) && ((i != 2 || h != 2) && (t.charAt(0) == "F" && t.charAt(1) == "*" && t.charAt(2) == "*" && t.charAt(3) == "T" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "*" && t.charAt(7) == "*" && t.charAt(8) == "*" || i == 1 && h == 1 && t.charAt(0) == "F" && t.charAt(1) == "T" && t.charAt(2) == "*" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "*" && t.charAt(7) == "*" && t.charAt(8) == "*") || h != 0 && t.charAt(0) == "F" && t.charAt(1) == "*" && t.charAt(2) == "*" && t.charAt(3) == "*" && t.charAt(4) == "T" && t.charAt(5) == "*" && t.charAt(6) == "*" && t.charAt(7) == "*" && t.charAt(8) == "*");
        }, n.CP = function(t, i, h) {
          return i > h ? t.charAt(0) == "T" && t.charAt(1) == "*" && t.charAt(2) == "*" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "T" && t.charAt(7) == "*" && t.charAt(8) == "*" : i == 1 && h == 1 && t.charAt(0) == "0" && t.charAt(1) == "*" && t.charAt(2) == "*" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "*" && t.charAt(7) == "*" && t.charAt(8) == "*";
        }, n.eP = function(t) {
          return t.charAt(0) == "T" && t.charAt(1) == "*" && t.charAt(2) == "*" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "F" && t.charAt(7) == "F" && t.charAt(8) == "*";
        }, n.EU = function(t, i, h) {
          if (i == h) {
            if (i != 1) return t.charAt(0) == "T" && t.charAt(1) == "*" && t.charAt(2) == "T" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "T" && t.charAt(7) == "*" && t.charAt(8) == "*";
            if (t.charAt(0) == "1" && t.charAt(1) == "*" && t.charAt(2) == "T" && t.charAt(3) == "*" && t.charAt(4) == "*" && t.charAt(5) == "*" && t.charAt(6) == "T" && t.charAt(7) == "*" && t.charAt(8) == "*") return !0;
          }
          return !1;
        }, n.Jw = function(t, i, h) {
          t = i.La(t);
          for (var s = i.Re; s != -1; s = i.Rf(s)) if (i.xd(s) & t) {
            var o = i.Me(s);
            if (o == -1) i.nn(s, h, 0);
            else {
              var a = o, u = 0;
              do
                i.dh(a) & t && u++, a = i.jc(i.xa(a));
              while (a != o);
              i.nn(s, h, u);
            }
          }
        }, n.Zp = function(t) {
          var i = "" + t.charAt(0);
          return i += t.charAt(3), i += t.charAt(6), i += t.charAt(1), i += t.charAt(4), i += t.charAt(7), i += t.charAt(2), (i += t.charAt(5)) + t.charAt(8);
        }, n.prototype.Yi = function() {
          for (var t = 0; 9 > t; t++) this.J[t] = -2, this.Za[t] = -2;
        }, n.vK = function(t) {
          var i = t[1], h = t[2], s = t[5];
          t[1] = t[3], t[2] = t[6], t[5] = t[7], t[3] = i, t[6] = h, t[7] = s;
        }, n.prototype.bj = function(t) {
          for (this.Xc = t, t = 0; 9 > t; t++) this.Xc.charAt(t) != "*" ? (this.ea[t] = !0, this.le++) : this.ea[t] = !1;
        }, n.prototype.UJ = function() {
          for (var t = 0; 9 > t; t++) this.ea[t] && this.J[t] == -2 && (this.J[t] = -1, this.ea[t] = !1);
        }, n.prototype.pc = function(t) {
          return this.J[t] != -2 && (this.J[t] == -1 ? (this.ea[t] = !1, this.le--, !0) : this.Xc.charAt(t) != "T" && this.Xc.charAt(t) != "F" ? !(this.J[t] < this.Za[t]) && (this.ea[t] = !1, this.le--, !0) : (this.ea[t] = !1, this.le--, !0));
        }, n.prototype.xJ = function() {
          this.vw = 0, this.Za[0] = 2, this.Za[1] = 1, this.Za[2] = 2, this.Za[3] = 1, this.Za[4] = 1, this.Za[5] = 1, this.Za[6] = 2, this.Za[7] = 1, this.Za[8] = 2, this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.IB = function() {
          this.vw = 1, this.Sm = 3, this.Za[0] = 1, this.Za[1] = 0, this.Za[2] = 2, this.Za[3] = 1, this.Za[4] = 0, this.Za[5] = 1, this.Za[6] = 1, this.Za[7] = 0, this.Za[8] = 2, this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.eX = function() {
          this.vw = 2, this.Sm = 4, this.Za[0] = 1, this.Za[1] = 0, this.Za[2] = 1, this.Za[3] = 0, this.Za[4] = 0, this.Za[5] = 0, this.Za[6] = 1, this.Za[7] = 0, this.Za[8] = 2, this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.yJ = function() {
          this.Sm = 3, this.Za[0] = 0, this.Za[1] = -1, this.Za[2] = 2, this.Za[3] = 0, this.Za[4] = -1, this.Za[5] = 1, this.Za[6] = 0, this.Za[7] = -1, this.Za[8] = 2, this.ea[1] && (this.J[1] = -1, this.ea[1] = !1, this.le--), this.ea[4] && (this.J[4] = -1, this.ea[4] = !1, this.le--), this.ea[7] && (this.J[7] = -1, this.ea[7] = !1, this.le--), this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.MJ = function() {
          this.Sm = 4, this.Za[0] = 0, this.Za[1] = -1, this.Za[2] = 1, this.Za[3] = 0, this.Za[4] = -1, this.Za[5] = 0, this.Za[6] = 0, this.Za[7] = -1, this.Za[8] = 2, this.ea[1] && (this.J[1] = -1, this.ea[1] = !1, this.le--), this.ea[4] && (this.J[4] = -1, this.ea[4] = !1, this.le--), this.ea[7] && (this.J[7] = -1, this.ea[7] = !1, this.le--), this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.RJ = function() {
          this.Sm = 5, this.Za[0] = 0, this.Za[1] = -1, this.Za[2] = 0, this.Za[3] = -1, this.Za[4] = -1, this.Za[5] = -1, this.Za[6] = 0, this.Za[7] = -1, this.Za[8] = 2, this.ea[1] && (this.J[1] = -1, this.ea[1] = !1, this.le--), this.ea[3] && (this.J[3] = -1, this.ea[3] = !1, this.le--), this.ea[4] && (this.J[4] = -1, this.ea[4] = !1, this.le--), this.ea[5] && (this.J[5] = -1, this.ea[5] = !1, this.le--), this.ea[7] && (this.J[7] = -1, this.ea[7] = !1, this.le--), this.ea[8] && (this.J[8] = 2, this.ea[8] = !1, this.le--);
        }, n.prototype.xN = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.CS(t, i, h), s = s && this.pc(0)), this.ea[1] && (this.sG(t, i, 1), s = s && this.pc(1)), this.ea[2] && (this.tG(t, i, h, 2), s = s && this.pc(2)), this.ea[3] && (this.sG(t, h, 3), s = s && this.pc(3)), this.ea[4] && (this.BN(t, i, h), s = s && this.pc(4)), this.ea[5] && (this.eE(t, h, 5), s = s && this.pc(5)), this.ea[6] && (this.tG(t, h, i, 6), s = s && this.pc(6)), this.ea[7] && (this.eE(t, i, 7), s = s && this.pc(7)), s;
        }, n.prototype.Cu = function(t, i) {
          this.J[0] = -1, this.J[1] = -1, this.J[3] = -1, this.J[4] = -1, this.Fr(t, this.ea[2] ? 2 : -1, this.Xc.charAt(2), this.ea[5] ? 5 : -1, this.Xc.charAt(5)), this.Fr(i, this.ea[6] ? 6 : -1, this.Xc.charAt(6), this.ea[7] ? 7 : -1, this.Xc.charAt(7));
        }, n.prototype.Fr = function(t, i, h, s, o) {
          i == -1 && s == -1 || ((h != "T" && h != "F" && i != -1 || o != "T" && o != "F" && s != -1) && t.Ke() == 0 ? (s != -1 && (this.J[s] = -1), i != -1 && (h = new e.l(), t.A(h), this.J[i] = h.ca() == 0 && h.R() == 0 ? 0 : 1)) : (i != -1 && (this.J[i] = 2), s != -1 && (this.J[s] = 1)));
        }, n.prototype.ly = function(t) {
          this.J[2] = 2, this.J[3] = -1, this.J[4] = -1, this.J[5] = 1, this.J[6] = -1, this.J[7] = -1, this.Fr(t, this.ea[0] ? 0 : -1, this.Xc.charAt(0), this.ea[1] ? 1 : -1, this.Xc.charAt(1));
        }, n.prototype.ZD = function(t) {
          this.ly(t), n.vK(this.J);
        }, n.prototype.Du = function(t, i) {
          if (this.J[0] = -1, this.J[1] = -1, this.J[3] = -1, this.J[4] = -1, this.ea[6]) {
            var h = this.Xc.charAt(6);
            h = h == "T" || h == "F" || i.Qb() != 0, this.J[6] = h ? 1 : 0;
          }
          this.ea[7] && (i = e.pi.aq(i), this.J[7] = i ? 0 : -1), this.Fr(t, this.ea[2] ? 2 : -1, this.Xc.charAt(2), this.ea[5] ? 5 : -1, this.Xc.charAt(5));
        }, n.prototype.$D = function(t) {
          if (this.ea[0]) {
            var i = this.Xc.charAt(0);
            i = i == "T" || i == "F" || t.Qb() != 0, this.J[0] = i ? 1 : 0;
          }
          this.ea[1] && (t = e.pi.aq(t), this.J[1] = t ? 0 : -1), this.J[2] = 2, this.J[3] = -1, this.J[4] = -1, this.J[5] = 1, this.J[6] = -1, this.J[7] = -1;
        }, n.prototype.Eu = function(t) {
          this.J[0] = -1, this.J[3] = -1, this.J[6] = 0, this.Fr(t, this.ea[2] ? 2 : -1, this.Xc.charAt(2), this.ea[5] ? 5 : -1, this.Xc.charAt(5));
        }, n.prototype.zN = function() {
          this.J[0] = 0, this.J[2] = 2, this.J[3] = -1, this.J[5] = 1, this.J[6] = -1;
        }, n.prototype.PG = function(t, i) {
          if (this.J[0] = -1, this.J[1] = -1, this.J[3] = -1, this.J[4] = -1, this.ea[2]) {
            var h = this.Xc.charAt(2);
            h = h == "T" || h == "F" || t.Qb() != 0, this.J[2] = h ? 1 : 0;
          }
          this.ea[5] && (t = e.pi.aq(t), this.J[5] = t ? 0 : -1), this.ea[6] && (h = (h = this.Xc.charAt(6)) == "T" || h == "F" || i.Qb() != 0, this.J[6] = h ? 1 : 0), this.ea[7] && (i = e.pi.aq(i), this.J[7] = i ? 0 : -1);
        }, n.prototype.Vz = function(t) {
          if (this.J[0] = -1, this.J[3] = -1, this.ea[2]) {
            var i = this.Xc.charAt(2);
            i = i == "T" || i == "F" || t.Qb() != 0, this.J[2] = i ? 1 : 0;
          }
          this.ea[5] && (t = e.pi.aq(t), this.J[5] = t ? 0 : -1), this.J[6] = 0;
        }, n.prototype.yI = function() {
          this.J[0] = -1, this.J[2] = 0, this.J[6] = 0;
        }, n.prototype.yN = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.DS(t, i), s = s && this.pc(0)), this.ea[1] && (this.zS(t, i, h, this.kh), s = s && this.pc(1)), this.ea[2] && (this.AS(t, i), s = s && this.pc(2)), this.ea[3] && (this.FN(t, i, h, this.kh), s = s && this.pc(3)), this.ea[4] && (this.CN(t, i, h, this.kh), s = s && this.pc(4)), this.ea[5] && (this.DN(t, i, h), s = s && this.pc(5)), this.ea[6] && (this.lQ(t, i), s = s && this.pc(6)), this.ea[7] && (this.kQ(t, i, h, this.kh), s = s && this.pc(7)), s;
        }, n.prototype.mT = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.GS(t, i, h, this.Yh, this.kh), s = s && this.pc(0)), this.ea[1] && (this.uG(t, i, h, this.Yh, this.kh, 1), s = s && this.pc(1)), this.ea[2] && (this.vG(t, i, h, 2), s = s && this.pc(2)), this.ea[3] && (this.uG(t, h, i, this.kh, this.Yh, 3), s = s && this.pc(3)), this.ea[4] && (this.HN(t, i, h, this.Yh, this.kh), s = s && this.pc(4)), this.ea[5] && (this.fE(t, h, this.Yh, 5), s = s && this.pc(5)), this.ea[6] && (this.vG(t, h, i, 6), s = s && this.pc(6)), this.ea[7] && (this.fE(t, i, this.kh, 7), s = s && this.pc(7)), s;
        }, n.prototype.aE = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.ES(t, i), s = s && this.pc(0)), this.ea[2] && (this.BS(t, i), s = s && this.pc(2)), this.ea[3] && (this.GN(t, i, h), s = s && this.pc(3)), this.ea[5] && (this.EN(t, i), s = s && this.pc(5)), this.ea[6] && (this.mQ(t, i), s = s && this.pc(6)), s;
        }, n.prototype.QG = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.HS(t, i, h, this.Yh), s = s && this.pc(0)), this.ea[2] && (this.FS(t, h), s = s && this.pc(2)), this.ea[3] && (this.JN(t, i, h, this.Yh), s = s && this.pc(3)), this.ea[5] && (this.IN(t, i, h, this.Yh), s = s && this.pc(5)), this.ea[6] && (this.nQ(t, i, h), s = s && this.pc(6)), s;
        }, n.prototype.ZU = function(t, i, h) {
          var s = !0;
          return this.ea[0] && (this.IS(t, i, h), s = s && this.pc(0)), this.ea[2] && (this.wG(t, i, h, 2), s = s && this.pc(2)), this.ea[6] && (this.wG(t, h, i, 6), s = s && this.pc(6)), s;
        }, n.prototype.CS = function(t, i, h) {
          this.J[0] != 2 && (t = this.j.af(t)) & i && t & h && (this.J[0] = 2);
        }, n.prototype.sG = function(t, i, h) {
          if (this.J[h] != 1) {
            var s = this.j.af(this.j.xa(t));
            this.j.af(t) & i && s & i && (this.J[h] = 1);
          }
        }, n.prototype.tG = function(t, i, h, s) {
          this.J[s] != 2 && (t = this.j.af(t)) & i && !(t & h) && (this.J[s] = 2);
        }, n.prototype.BN = function(t, i, h) {
          if (this.J[4] != 1) {
            var s = this.j.dh(t);
            s & i && s & h ? this.J[4] = 1 : this.J[4] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1 && (t = this.j.xd(this.j.uf(t))) & i && t & h && (this.J[4] = 0);
          }
        }, n.prototype.eE = function(t, i, h) {
          if (this.J[h] != 1) {
            var s = this.j.af(this.j.xa(t));
            !(this.j.af(t) & i) && !(s & i) && (this.J[h] = 1);
          }
        }, n.prototype.DS = function(t, i) {
          if (this.J[0] != 1) {
            var h = this.j.af(this.j.xa(t));
            this.j.af(t) & i && h & i && (this.J[0] = 1);
          }
        }, n.prototype.zS = function(t, i, h, s) {
          if (this.J[1] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1) {
            var o = this.j.uf(t), a = this.j.xd(o);
            !(a & i) && this.j.af(t) & i && (t = this.j.ng(o, s), a & h && t % 2 != 0 && (this.J[1] = 0));
          }
        }, n.prototype.AS = function(t, i) {
          this.J[2] != 2 && this.j.dh(t) & i && (this.J[2] = 2);
        }, n.prototype.FN = function(t, i, h, s) {
          if (this.J[3] != 1) {
            var o = this.j.dh(t);
            o & i && o & h ? this.J[3] = 1 : this.J[3] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1 && (o = this.j.uf(t), (t = this.j.xd(o)) & i && (i = this.j.ng(o, s), t & h && i % 2 == 0 && (this.J[3] = 0)));
          }
        }, n.prototype.CN = function(t, i, h, s) {
          if (this.J[4] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1) {
            var o = this.j.uf(t);
            (t = this.j.xd(o)) & i && (i = this.j.ng(o, s), t & h && i % 2 != 0 && (this.J[4] = 0));
          }
        }, n.prototype.DN = function(t, i, h) {
          this.J[5] != 1 && (t = this.j.dh(t)) & i && !(t & h) && (this.J[5] = 1);
        }, n.prototype.lQ = function(t, i) {
          if (this.J[6] != 1) {
            var h = this.j.af(this.j.xa(t));
            !(this.j.af(t) & i) && !(h & i) && (this.J[6] = 1);
          }
        }, n.prototype.kQ = function(t, i, h, s) {
          if (this.J[7] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1) {
            var o = this.j.uf(t), a = this.j.xd(o);
            !(a & i) && !(this.j.af(t) & i) && (t = this.j.ng(o, s), a & h && t % 2 != 0 && (this.J[7] = 0));
          }
        }, n.prototype.GS = function(t, i, h, s, o) {
          if (this.J[0] != 1) {
            var a = this.j.dh(t);
            a & i && a & h ? this.J[0] = 1 : this.J[0] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1 && (t = this.j.uf(t), (a = this.j.xd(t)) & i && a & h && (i = this.j.ng(t, s), o = this.j.ng(t, o), i % 2 == 0 && o % 2 == 0 && (this.J[0] = 0)));
          }
        }, n.prototype.uG = function(t, i, h, s, o, a) {
          if (this.J[a] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1) {
            t = this.j.uf(t);
            var u = this.j.xd(t);
            u & i && u & h && (i = this.j.ng(t, s), o = this.j.ng(t, o), i % 2 == 0 && o % 2 != 0 && (this.J[a] = 0));
          }
        }, n.prototype.vG = function(t, i, h, s) {
          this.J[s] != 1 && (t = this.j.dh(t)) & i && !(t & h) && (this.J[s] = 1);
        }, n.prototype.HN = function(t, i, h, s, o) {
          if (this.J[4] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1) {
            t = this.j.uf(t);
            var a = this.j.xd(t);
            a & i && a & h && (i = this.j.ng(t, s), o = this.j.ng(t, o), i % 2 != 0 && o % 2 != 0 && (this.J[4] = 0));
          }
        }, n.prototype.fE = function(t, i, h, s) {
          this.J[s] != 0 && this.j.Ab(this.j.te(this.j.xa(t)), this.Ui) != 1 && (t = this.j.uf(t), !(this.j.xd(t) & i) && this.j.ng(t, h) % 2 != 0 && (this.J[s] = 0));
        }, n.prototype.ES = function(t, i) {
          this.J[0] != 0 && !(this.j.xd(t) & i) && this.j.hk(this.j.cz(t)) & i && (this.J[0] = 0);
        }, n.prototype.BS = function(t, i) {
          this.J[2] != 2 && this.j.xd(t) & i && (this.J[2] = 2);
        }, n.prototype.GN = function(t, i, h) {
          this.J[3] != 0 && (t = this.j.xd(t)) & i && t & h && (this.J[3] = 0);
        }, n.prototype.EN = function(t, i) {
          this.J[5] != 1 && this.j.xd(t) & i && (this.J[5] = 1);
        }, n.prototype.mQ = function(t, i) {
          this.J[6] != 0 && !(this.j.xd(t) & i) && !(this.j.hk(this.j.cz(t)) & i) && (this.J[6] = 0);
        }, n.prototype.HS = function(t, i, h, s) {
          if (this.J[0] != 0) {
            var o = this.j.xd(t);
            o & i && o & h && this.j.ng(t, s) % 2 == 0 && (this.J[0] = 0);
          }
        }, n.prototype.FS = function(t, i) {
          this.J[2] != 1 && (this.j.Me(t) != -1 ? this.J[2] = 1 : this.J[2] != 0 && !(this.j.xd(t) & i) && (this.J[2] = 0));
        }, n.prototype.JN = function(t, i, h, s) {
          if (this.J[3] != 0) {
            var o = this.j.xd(t);
            o & i && o & h && this.j.ng(t, s) % 2 != 0 && (this.J[3] = 0);
          }
        }, n.prototype.IN = function(t, i, h, s) {
          if (this.J[5] != 0) {
            var o = this.j.xd(t);
            o & i && !(o & h) && this.j.ng(t, s) % 2 != 0 && (this.J[5] = 0);
          }
        }, n.prototype.nQ = function(t, i, h) {
          this.J[6] != 0 && !((t = this.j.xd(t)) & i) && t & h && (this.J[6] = 0);
        }, n.prototype.IS = function(t, i, h) {
          this.J[0] != 0 && (t = this.j.xd(t)) & i && t & h && (this.J[0] = 0);
        }, n.prototype.wG = function(t, i, h, s) {
          this.J[s] != 0 && (t = this.j.xd(t)) & i && !(t & h) && (this.J[s] = 0);
        }, n.prototype.Bp = function(t, i) {
          var h = !1;
          t = this.j.La(t), i = this.j.La(i), this.Ui = this.j.$g();
          for (var s = this.j.Re; s != -1; s = this.j.Rf(s)) {
            var o = this.j.Me(s);
            if (o == -1) {
              if (this.Sm != -1) switch (this.Sm) {
                case 3:
                  h = this.aE(s, t, i);
                  break;
                case 4:
                  h = this.QG(s, t, i);
                  break;
                default:
                  throw e.i.fa("internal error");
              }
            } else {
              var a = o;
              do {
                var u = a;
                if (this.j.Ab(u, this.Ui) != 1) do {
                  switch (this.vw) {
                    case 0:
                      h = this.xN(u, t, i);
                      break;
                    case 1:
                      h = this.yN(u, t, i);
                      break;
                    case 2:
                      h = this.mT(u, t, i);
                      break;
                    default:
                      throw e.i.fa("internal error");
                  }
                  if (h) break;
                  this.j.Kb(u, this.Ui, 1), u = this.j.jc(u);
                } while (u != a && !h);
                if (h) break;
                a = this.j.jc(this.j.xa(u));
              } while (a != o);
              if (h) break;
            }
          }
          h || this.UJ(), this.j.Jg(this.Ui);
        }, n.prototype.Gy = function(t, i) {
          var h = !1;
          t = this.j.La(t), i = this.j.La(i);
          for (var s = this.j.Re; s != -1; s = this.j.Rf(s)) {
            switch (this.Sm) {
              case 3:
                h = this.aE(s, t, i);
                break;
              case 4:
                h = this.QG(s, t, i);
                break;
              case 5:
                h = this.ZU(s, t, i);
                break;
              default:
                throw e.i.Qa();
            }
            if (h) break;
          }
          h || this.UJ();
        }, n.prototype.er = function(t, i) {
          this.j.dr(t, i);
        }, n.prototype.Wo = function(t, i, h) {
          this.YP(t, i, h), this.er(t, h);
        }, n.prototype.YP = function(t, i, h) {
          for (e.Tk.V(t, i, h, !1), t.Gp(0, !0, !0), i = t.ld; i != -1; i = t.ue(i)) t.ic(i) == 1736 && e.rn.V(t, i, -1, !1, h);
        }, n.WE = function(t, i) {
          var h = t.getType();
          return e.aa.yd(h) ? ((i = new e.Ta(t.description)).oc(t, !0), i) : h == 197 ? (h = new e.l(), t.A(h), h.ca() <= i && h.R() <= i ? (i = new e.Sa(t.description), t.sf(i), i) : h.ca() <= i || h.R() <= i ? (i = new e.Ta(t.description), h = new e.Sa(), t.Hf(0, h), i.nf(h), t.Hf(2, h), i.lineTo(h), i) : ((i = new e.Da(t.description)).ad(t, !1), i)) : t;
        }, n;
      }(), e.am = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function n(t) {
          this.Em = new e.ia(0), this.dw = new e.ia(0), this.wt = new e.h(), this.xt = new e.h(), this.g = t, this.Hs = -1;
        }
        return n.prototype.bc = function(t) {
          return this.g.bc(this.zz(t));
        }, n.prototype.Bv = function(t) {
          var i = this.iz(t);
          if (t = this.HF(t), this.g.Ma(i) == t) {
            var h = i;
            i = t, t = h;
          }
          return this.g.Gc(i, this.wt), this.g.Gc(t, this.xt), this.wt.y < this.xt.y;
        }, n.prototype.zz = function(t) {
          var i = this.iz(t);
          return t = this.HF(t), this.g.U(i) == t ? i : t;
        }, n.prototype.iz = function(t) {
          return this.Em.get(t);
        }, n.prototype.HF = function(t) {
          return this.dw.get(t);
        }, n.prototype.rF = function(t) {
          this.Em.set(t, this.Hs), this.Hs = t;
        }, n.prototype.nI = function(t) {
          if (this.Hs != -1) {
            var i = this.Hs;
            return this.Hs = this.Em.get(i), this.Em.set(i, t), this.dw.set(i, this.g.U(t)), i;
          }
          return this.Em == null && (this.Em = new e.ia(0), this.dw = new e.ia(0)), i = this.Em.size, this.Em.add(t), this.dw.add(this.g.U(t)), i;
        }, n.prototype.rz = function(t) {
          return this.g.bd(this.iz(t));
        }, n;
      }();
      e.yY = v;
      var f = function() {
        function n(t) {
          this.Be = t, this.ie = new e.yb(), this.Nm = new e.yb(), this.CH = 0, this.Ao = null, this.yA = -1;
        }
        return n.prototype.compare = function(t, i, h) {
          h = t.ja(h);
          var s = this.Be.hb;
          if (this.yA == i) var o = this.CH;
          else this.Ao = s.bc(i), this.Ao == null ? ((t = s.g).ed(s.zz(i), this.ie), this.Ao = this.ie, o = this.ie.Pe(this.Be.yh, 0)) : o = this.Ao.Pe(this.Be.yh, 0), this.CH = o, this.yA = i;
          if ((t = s.bc(h)) == null) {
            (t = s.g).ed(s.zz(h), this.Nm), t = this.Nm;
            var a = this.Nm.Pe(this.Be.yh, 0);
          } else a = t.Pe(this.Be.yh, 0);
          return o == a && (i = s.Bv(i), h = s.Bv(h), (i = 0.5 * ((h = Math.min(i ? this.Ao.la : this.Ao.na, h ? t.la : t.na)) + this.Be.yh)) == this.Be.yh && (i = h), o = this.Ao.Pe(i, 0), a = t.Pe(i, 0)), o < a ? -1 : o > a ? 1 : 0;
        }, n.prototype.reset = function() {
          this.yA = -1;
        }, n;
      }(), r = function() {
        function n() {
          this.Wm = this.Gl = null, this.fb = new e.Yj(), this.fb.RP(), this.$d = new f(this), this.fb.Vo(this.$d);
        }
        return n.prototype.HQ = function() {
          var t = !1;
          if (this.fw && (t = this.IQ()), this.g.da(this.X) == 1) {
            var i = this.g.Ob(this.X);
            return t = this.g.wz(i), this.g.PB(i, !0), 0 > t && (t = this.g.Xa(i), this.g.pJ(t), this.g.Wg(i, this.g.Ma(t)), !0);
          }
          for (this.El = this.g.Ky(), this.wo = this.g.Ky(), i = this.g.Ob(this.X); i != -1; i = this.g.Rb(i)) this.g.gr(i, this.El, 0), this.g.gr(i, this.wo, -1);
          i = new e.ia(0), this.yh = NaN;
          var h = new e.h();
          this.et = this.g.da(this.X), this.ro = this.g.Gd(), this.Rs = this.g.Gd();
          for (var s = this.Gl.rc(this.Gl.je); s != -1; s = this.Gl.lb(s)) {
            var o = this.Gl.getData(s);
            if (this.g.Gc(o, h), h.y != this.yh && i.size != 0 && (t = this.ut(i) || t, this.$d.reset(), i.clear(!1)), i.add(o), this.yh = h.y, this.et == 0) break;
          }
          for (0 < this.et && (t = this.ut(i) || t, i.clear(!1)), this.g.Td(this.ro), this.g.Td(this.Rs), i = this.g.Ob(this.X); i != -1; ) if (this.g.sj(i, this.El) == 3) {
            for (this.g.PB(i, !0), h = i, i = this.g.sj(i, this.wo); i != -1; ) s = this.g.sj(i, this.wo), this.g.ZT(this.X, this.g.Rb(h), i), h = i, i = s;
            i = this.g.Rb(h);
          } else this.g.PB(i, !1), i = this.g.Rb(i);
          return this.g.CB(this.El), this.g.CB(this.wo), t;
        }, n.prototype.ut = function(t) {
          return this.$V(t);
        }, n.prototype.$V = function(t) {
          var i = !1;
          this.hb == null && (this.hb = new v(this.g)), this.Wm == null ? (this.Wm = new e.ia(0), this.Wm.Jb(16)) : this.Wm.clear(!1), this.ZV(t);
          for (var h = 0, s = t.size; h < s; h++) {
            var o = t.get(h);
            o != -1 && this.oG(o, -1);
          }
          for (h = 0; h < this.Wm.size && 0 < this.et; h++) if (t = this.Wm.get(h), o = this.hb.rz(this.fb.ja(t)), s = -1, this.g.sj(o, this.El) == 0) {
            o = this.fb.we(t);
            for (var a, u = t; o != -1; ) {
              var c = this.fb.ja(o), l = this.hb.rz(c), p = this.g.sj(l, this.El);
              if (p != 0) {
                s = l;
                break;
              }
              u = o, o = this.fb.we(o);
            }
            o == -1 ? (a = !0, o = u) : (c = this.fb.ja(o), a = this.hb.Bv(c), o = this.fb.lb(o), a = !a);
            do {
              if (c = this.fb.ja(o), l = this.hb.rz(c), (p = this.g.sj(l, this.El)) == 0 && (a != this.hb.Bv(c) && (i = this.g.Xa(l), this.g.pJ(i), this.g.Wg(l, this.g.Ma(i)), i = !0), this.g.gr(l, this.El, a ? 3 : 2), a || (u = this.g.sj(s, this.wo), this.g.gr(s, this.wo, l), this.g.gr(l, this.wo, u)), this.et--, this.et == 0)) return i;
              s = l, u = o, o = this.fb.lb(o), a = !a;
            } while (u != t);
          }
          return i;
        }, n.prototype.ZV = function(t) {
          for (var i = 0, h = t.size; i < h; i++) {
            var s = t.get(i), o = this.g.Pa(s, this.ro), a = this.g.Pa(s, this.Rs);
            if (o != -1) {
              var u = this.fb.ja(o);
              this.hb.rF(u), this.g.Ra(s, this.ro, -1);
            }
            a != -1 && (u = this.fb.ja(a), this.hb.rF(u), this.g.Ra(s, this.Rs, -1)), u = -1, o != -1 && a != -1 ? (this.fb.vd(o, -1), this.fb.vd(a, -1), t.set(i, -1)) : u = o != -1 ? o : a, u != -1 && (this.oG(s, u) || this.fb.vd(u, -1), t.set(i, -1));
          }
        }, n.prototype.oG = function(t, i) {
          var h = new e.h(), s = new e.h();
          this.g.Gc(t, h);
          var o = this.g.U(t);
          this.g.Gc(o, s);
          var a = !1;
          if (h.y < s.y) {
            a = !0;
            var u = this.hb.nI(t);
            if (i == -1) var c = this.fb.addElement(u, -1);
            else c = i, this.fb.Sj(c, u);
            (u = this.g.Pa(o, this.ro)) == -1 ? this.g.Ra(o, this.ro, c) : this.g.Ra(o, this.Rs, c), o = this.g.bd(t), this.g.sj(o, this.El) == 0 && this.Wm.add(c);
          }
          return o = this.g.Ma(t), this.g.Gc(o, s), h.y < s.y && (a = !0, u = this.hb.nI(o), i == -1 ? c = this.fb.addElement(u, -1) : (c = i, this.fb.Sj(c, u)), (u = this.g.Pa(o, this.ro)) == -1 ? this.g.Ra(o, this.ro, c) : this.g.Ra(o, this.Rs, c), o = this.g.bd(t), this.g.sj(o, this.El) == 0 && this.Wm.add(c)), a;
        }, n.V = function(t, i, h, s) {
          var o = new n();
          return o.g = t, o.X = i, o.Gl = h, o.fw = s, o.HQ();
        }, n.prototype.IQ = function() {
          var t = new e.ia(0), i = new e.ia(0), h = -1, s = -1, o = new e.h();
          o.Rc();
          for (var a = -1, u = -1, c = -1, l = new e.h(), p = this.Gl.rc(this.Gl.je); p != -1; p = this.Gl.lb(p)) {
            var y = this.Gl.getData(p);
            this.g.Gc(y, l);
            var d = this.g.bd(y);
            o.qb(l) && u == d ? (s == -1 && (h = this.g.Ky(), s = this.g.Gd()), c == -1 && (c = i.size, this.g.Ra(a, s, c), i.add(1), this.g.sj(d, h) == -1 && (this.g.gr(d, h, a), t.add(d))), this.g.Ra(y, s, c), i.bX(i.Fc() + 1)) : (c = -1, o.L(l)), a = y, u = d;
          }
          if (t.size == 0) return !1;
          for (o = new e.ia(0), a = new e.ia(0), u = 0, c = t.size; u < c; u++) {
            d = t.get(u);
            var g = this.g.sj(d, h);
            for (y = this.g.Pa(g, s), o.clear(!1), a.clear(!1), o.add(g), a.add(y), y = this.g.U(g); y != g; y = this.g.U(y)) {
              var b = y;
              if ((l = this.g.Pa(b, s)) != -1) if (a.size == 0) a.add(l), o.add(b);
              else if (a.Fc() == l) {
                p = o.Fc();
                var x = this.g.U(p);
                g = this.g.U(b), this.g.Bc(p, g), this.g.Cc(g, p), this.g.Bc(b, x), this.g.Cc(x, b), b = [!1], x = this.g.nG(this.X, x, this.g.Xa(d), b), this.g.Ra(y, s, -1), b[0] && this.g.Jf(d, g), y = this.g.Ja(d), y -= g = this.g.Ja(x), this.g.Vj(d, y), i.set(l, i.get(l) - 1), i.get(l) == 1 && (i.set(l, 0), a.If(), o.If()), y = g = p;
              } else o.add(y), a.add(l);
            }
          }
          return this.g.CB(h), this.g.Td(s), !0;
        }, n;
      }();
      e.WL = r;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.prototype.ig = function() {
          this.PA = this.sb = null;
        }, f.prototype.get = function() {
          return this.PA;
        }, f.prototype.set = function(r) {
          if (this.PA = r, r != null) throw r.getType() == 322 && (this.sb = r), e.i.Qa();
        }, f.prototype.create = function(r) {
          if (r != 322) throw e.i.fa("Not Implemented");
          this.Or();
        }, f.prototype.Or = function() {
          this.sb == null && (this.sb = new e.yb()), this.PA = this.sb;
        }, f;
      }();
      e.ig = v;
    }(k || (k = {})), function(e) {
      (e = e.XL || (e.XL = {}))[e.enumLineSeg = 1] = "enumLineSeg", e[e.enumBezierSeg = 2] = "enumBezierSeg", e[e.enumArcSeg = 4] = "enumArcSeg", e[e.enumNonlinearSegmentMask = 6] = "enumNonlinearSegmentMask", e[e.enumSegmentMask = 7] = "enumSegmentMask", e[e.enumDensified = 8] = "enumDensified";
    }(k || (k = {})), function(e) {
      var v = function(r) {
        this.$i = r, this.qC = this.rC = 1, this.sB = this.rB = this.tB = 0;
      }, f = function() {
        function r() {
          this.Fq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.Bk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.Bf = new e.Sa(), this.qa = this.Cw = 0, this.mo = [], this.$s = [], this.yw = [], this.Iq = [], this.MA = [];
        }
        return r.prototype.wB = function(n) {
          if (n != null) {
            for (var t = 0, i = n.length; t < i; t++) this.rW(n[t]);
            n.length = 0;
          }
        }, r.prototype.rW = function(n) {
          n.$i = null, this.Iq.push(n);
        }, r.prototype.Ow = function(n) {
          if (this.Iq.length === 0) var t = new v(n);
          else (t = this.Iq[this.Iq.length - 1]).$i = n, --this.Iq.length;
          return t;
        }, r.prototype.SR = function(n, t) {
          return n == 0 ? this.$s[t] : this.yw[t];
        }, r.prototype.aB = function() {
          this.Cw >= this.MA.length && this.MA.push(new e.ig());
          var n = this.MA[this.Cw];
          return this.Cw++, n;
        }, r.prototype.clear = function() {
          this.wB(this.mo), this.wB(this.$s), this.wB(this.yw), this.Cw = 0;
        }, r.prototype.Oo = function(n) {
          this.mo.push(this.Ow(n));
        }, r.prototype.ol = function(n) {
          return n == 0 ? this.$s.length : this.yw.length;
        }, r.prototype.Vp = function(n, t) {
          return this.SR(n, t).$i;
        }, r.prototype.Ea = function(n, t) {
          if (this.mo.length != 2) throw e.i.Qa();
          this.qa = n;
          var i = e.lc.ox(0.01 * n), h = !1, s = this.mo[0], o = this.mo[1];
          if (t || 5 & s.$i.zr(o.$i, n, !0)) {
            if (s.$i.getType() == 322) {
              var a = s.$i;
              if (o.$i.getType() == 322) {
                t = o.$i;
                var u = e.yb.Zx(a, t, null, this.Fq, this.Bk, n);
                if (u == 0) throw e.yb.Zx(a, t, null, this.Fq, this.Bk, n), e.i.Qa();
                n = Array(9), e.O.$u(n, null);
                for (var c = 0; c < u; c++) {
                  var l = this.Fq[c], p = this.Bk[c], y = s.sB, d = 1;
                  l == 0 ? (y = s.tB, d = s.rC) : l == 1 && (y = s.rB, d = s.qC);
                  var g = o.sB, b = 1;
                  p == 0 ? (g = o.tB, b = o.rC) : p == 1 && (g = o.rB, b = o.qC);
                  var x = new e.h();
                  y == g ? (y = new e.h(), a.hc(l, y), l = new e.h(), t.hc(p, l), b /= p = d + b, e.lc.OG(y, l, b, x), e.h.yc(x, y) + e.h.yc(x, l) > i && (h = !0)) : y > g ? (a.hc(l, x), l = new e.h(), t.hc(p, l), e.h.yc(x, l) > i && (h = !0)) : (t.hc(p, x), y = new e.h(), a.hc(l, y), e.h.yc(x, y) > i && (h = !0)), n[c] = x;
                }
                for (s = 0, o = -1, c = 0; c <= u; c++) (b = c < u ? this.Fq[c] : 1) != s && (i = this.aB(), a.ah(s, b, i), o != -1 && i.get().Dc(n[o]), c != u && i.get().Qc(n[c]), s = b, this.$s.push(this.Ow(i.get()))), o = c;
                for (a = [0, 0, 0, 0, 0, 0, 0, 0, 0], c = 0; c < u; c++) a[c] = c;
                for (1 < u && this.Bk[0] > this.Bk[1] && (b = this.Bk[0], this.Bk[0] = this.Bk[1], this.Bk[1] = b, c = a[0], a[0] = a[1], a[1] = c), s = 0, o = -1, c = 0; c <= u; c++) (b = c < u ? this.Bk[c] : 1) != s && (i = this.aB(), t.ah(s, b, i), o != -1 && (s = a[o], i.get().Dc(n[s])), c != u && (s = a[c], i.get().Qc(n[s])), s = b, this.yw.push(this.Ow(i.get()))), o = c;
                return h;
              }
            }
            throw e.i.Qa();
          }
          return !1;
        }, r.prototype.Kz = function(n, t, i) {
          if (t.copyTo(this.Bf), this.mo.length != 1) throw e.i.Qa();
          this.qa = n;
          var h = this.mo[0];
          if (i || h.$i.ru(t.D(), n, !0)) {
            if (h.$i.getType() != 322) throw e.i.Qa();
            var s = (n = h.$i).fe(t.D(), !1);
            this.Fq[0] = s;
            var o = h.sB;
            for (i = 1, s == 0 ? (o = h.tB, i = h.rC) : s == 1 && (o = h.rB, i = h.qC), h = new e.h(), o == 0 ? (o = new e.h(), n.hc(s, o), t = t.D(), e.lc.OG(o, t, 1 / (i + 1), h)) : 0 < o ? (h = new e.h(), n.hc(s, h)) : h = t.D(), i = 0, s = -1, o = 0; 1 >= o; o++) {
              if ((t = 1 > o ? this.Fq[o] : 1) != i) {
                var a = this.aB();
                n.ah(i, t, a), s != -1 && a.get().Dc(h), o != 1 && a.get().Qc(h), i = t, this.$s.push(this.Ow(a.get()));
              }
              s = o;
            }
            this.Bf.Cb(h);
          }
        }, r;
      }();
      e.TC = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          this.Ds = this.rk = this.sb = null, this.ag = 0, this.zm = !1, this.zf = -1, this.Cl = this.Jd = 0, this.gb = -1, this.ib = r, this.ag = this.Wx(this.Cl), this.zm = !1, this.rk = null, this.Ds = new e.h();
        }
        return f.prototype.BW = function(r) {
          if (this.ib != r.ib) throw e.i.Hb();
          this.zf = r.zf, this.Jd = r.Jd, this.gb = r.gb, this.Cl = r.Cl, this.ag = r.ag, this.zm = r.zm, this.rk = null;
        }, f.prototype.ha = function() {
          if (this.zf != this.Jd && this.BD(), this.zm) this.Jd = (this.Jd + 1) % this.ag;
          else {
            if (this.Jd == this.ag) throw e.i.ce();
            this.Jd++;
          }
          return this.rk;
        }, f.prototype.li = function() {
          if (this.zm) this.Jd = (this.ag + this.Jd - 1) % this.ag;
          else {
            if (this.Jd == 0) throw e.i.ce();
            this.Jd--;
          }
          return this.Jd != this.zf && this.BD(), this.rk;
        }, f.prototype.DW = function() {
          this.zf = -1, this.Jd = 0;
        }, f.prototype.EW = function() {
          this.Jd = this.ag, this.zf = -1;
        }, f.prototype.Vb = function(r, n) {
          if (n === void 0 && (n = -1), 0 <= this.gb && this.gb < this.ib.da()) {
            var t = this.IM();
            if (r >= t && r < this.ib.Vc(this.gb)) return this.zf = -1, void (this.Jd = r - t);
          }
          n = 0 <= n && n < this.ib.da() && r >= this.ib.Ba(n) && r < this.ib.Vc(n) ? n : this.ib.sz(r), this.Cl = n + 1, this.gb = n, this.zf = -1, this.Jd = r - this.ib.Ba(n), this.ag = this.Wx(n), this.ib.Ba(this.gb), this.ib.dc(this.gb);
        }, f.prototype.$a = function() {
          return this.gb = this.Cl, !(this.gb >= this.ib.da()) && (this.zf = -1, this.Jd = 0, this.ag = this.Wx(this.gb), this.ib.Ba(this.gb), this.ib.dc(this.gb), this.Cl++, !0);
        }, f.prototype.Zi = function() {
          this.ag = this.Jd = this.zf = -1, this.Cl = 0, this.gb = -1;
        }, f.prototype.Wx = function(r) {
          if (this.ib.Ac()) return 0;
          var n = 1;
          return this.ib.dc(r) && (n = 0), this.ib.Ja(r) - n;
        }, f.prototype.On = function() {
          return this.zf == this.ag - 1 && this.ib.dc(this.gb);
        }, f.prototype.JB = function() {
          this.zm = !0;
        }, f.prototype.wb = function() {
          return this.ib.nb.o[this.gb] + this.zf;
        }, f.prototype.IM = function() {
          return this.ib.Ba(this.gb);
        }, f.prototype.ik = function() {
          return this.On() ? this.ib.Ba(this.gb) : this.wb() + 1;
        }, f.prototype.vm = function() {
          return this.zf == 0;
        }, f.prototype.Qn = function() {
          return this.zf == this.ag - 1;
        }, f.prototype.Ha = function() {
          return this.Jd < this.ag;
        }, f.prototype.Ez = function() {
          return 0 < this.Jd;
        }, f.prototype.Of = function() {
          var r = new f(this.ib);
          return r.zf = this.zf, r.Jd = this.Jd, r.ag = this.ag, r.gb = this.gb, r.Cl = this.Cl, r.ib = this.ib, r.zm = this.zm, r;
        }, f.prototype.BD = function() {
          if (0 > this.Jd || this.Jd >= this.ag) throw e.i.ce();
          this.zf = this.Jd;
          var r = this.wb();
          this.ib.mc();
          var n = this.ib.Ve, t = 1;
          switch (n != null && (t = 7 & n.read(r)), n = this.ib.description, t) {
            case 1:
              this.sb == null && (this.sb = new e.yb()), this.rk = this.sb;
              break;
            case 2:
              throw e.i.fa("internal error");
            default:
              throw e.i.Qa();
          }
          this.rk.Nf(n), t = this.ik(), this.ib.Gc(r, this.Ds), this.rk.Dc(this.Ds), this.ib.Gc(t, this.Ds), this.rk.Qc(this.Ds);
          for (var i = 1, h = n.Aa; i < h; i++) for (var s = n.kd(i), o = e.ra.Va(s), a = 0; a < o; a++) {
            var u = this.ib.Uc(s, r, a);
            this.rk.YB(s, a, u), u = this.ib.Uc(s, t, a), this.rk.OB(s, a, u);
          }
        }, f.prototype.$S = function() {
          return this.gb == this.ib.da() - 1;
        }, f.prototype.Pn = function() {
          var r = this.ib.VR();
          return r != null && (7 & r.read(this.zf)) != 1;
        }, f;
      }();
      e.YL = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          r instanceof e.aa ? (this.xH = r, this.ya = -1, this.Ei = 1) : (this.vT = r.slice(0), this.ya = -1, this.Ei = r.length);
        }
        return f.prototype.La = function() {
          return this.ya;
        }, f.prototype.next = function() {
          return this.ya < this.Ei - 1 ? (this.ya++, this.xH != null ? this.xH : this.vT[this.ya]) : null;
        }, f.prototype.qe = function() {
        }, f;
      }();
      e.Zc = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        this.next = null;
      }, f = function() {
        function r() {
          this.Tq = this.Kw = this.Lw = 0, this.kF = !1, this.gK = 0, this.gn = this.Kf = this.Wl = this.Jh = null, this.Ol = 0, this.vy = null, this.pl = this.oi = -1;
        }
        return r.prototype.AX = function(n, t, i) {
          this.oi = n, this.pl = t, this.Jh = this.Wl = null, this.Tq = 0, this.vy = i, this.gn == null && (this.gn = e.O.lg(384, 0)), this.nK();
        }, r.prototype.R = function() {
          return this.oi;
        }, r.prototype.ca = function() {
          return this.pl;
        }, r.prototype.flush = function() {
          0 < this.Ol && (this.vy.gF(this.gn, this.Ol), this.Ol = 0);
        }, r.prototype.nK = function() {
          if (0 < this.Tq) {
            for (var n = 0; n < this.pl; n++) {
              for (var t = this.Wl[n]; t != null; ) {
                var i = t;
                t = t.next, i.next = null;
              }
              this.Wl[n] = null;
            }
            this.Jh = null;
          }
          this.Lw = this.pl, this.Kw = -1, this.Tq = 0;
        }, r.prototype.iJ = function(n) {
          for (this.kF = n == r.Cx, n = this.Lw; n <= this.Kw; n++) this.sN(), this.lN(n), this.ZP();
          this.nK();
        }, r.prototype.jy = function(n, t, i, h) {
          if (t != h) {
            var s = 1;
            if (t > h && (s = n, n = i, i = s, s = t, t = h, h = s, s = -1), !(0 > h || t >= this.pl)) {
              0 > n && 0 > i ? i = n = -1 : n >= this.oi && i >= this.oi && (i = n = this.oi);
              var o = (i - n) / (h - t);
              h > this.pl && (i = o * ((h = this.pl) - t) + n), 0 > t && (n = o * (0 - t) + n, t = 0);
              var a = Math.max(this.oi + 1, 8388607);
              -8388607 > n ? (t = (0 - n) / o + t, n = 0) : n > a && (t = (this.oi - n) / o + t, n = this.oi), -8388607 > i ? h = (0 - n) / o + t : i > a && (h = (this.oi - n) / o + t), (t = e.O.truncate(t)) != (h = e.O.truncate(h)) && ((i = new v()).x = e.O.truncate(4294967296 * n), i.y = t, i.H = h, i.WP = e.O.truncate(4294967296 * o), i.dir = s, this.Wl == null && (this.Wl = e.O.lg(this.pl, null)), i.next = this.Wl[i.y], this.Wl[i.y] = i, i.y < this.Lw && (this.Lw = i.y), i.H > this.Kw && (this.Kw = i.H), this.Tq++);
            }
          }
        }, r.prototype.sN = function() {
          if (this.Jh != null) {
            for (var n = !1, t = null, i = this.Jh; i != null; ) if (i.y++, i.y == i.H) {
              var h = i;
              i = i.next, t != null ? t.next = i : this.Jh = i, h.next = null;
            } else i.x += i.WP, t != null && t.x > i.x && (n = !0), t = i, i = i.next;
            n && (this.Jh = this.fK(this.Jh));
          }
        }, r.prototype.lN = function(n) {
          if (!(n >= this.pl)) {
            var t = this.Wl[n];
            if (t != null) {
              this.Wl[n] = null, t = this.fK(t), this.Tq -= this.gK, n = this.Jh;
              for (var i = !0, h = t, s = null; n != null && h != null; ) n.x > h.x ? (i && (this.Jh = h), i = h.next, h.next = n, s != null && (s.next = h), s = h, h = i) : (i = n.next, n.next = h, s != null && (s.next = n), s = n, n = i), i = !1;
              this.Jh == null && (this.Jh = t);
            }
          }
        }, r.eK = function(n, t) {
          return 0 > n ? 0 : n > t ? t : n;
        }, r.prototype.ZP = function() {
          if (this.Jh != null) {
            for (var n = 0, t = this.Jh, i = e.O.truncate(e.O.XG(t.x)), h = t.next; h != null; h = h.next) if (n = this.kF ? 1 ^ n : n + h.dir, h.x > t.x) {
              var s = e.O.truncate(e.O.XG(h.x));
              n != 0 && (t = r.eK(i, this.oi), (i = r.eK(s, this.oi)) > t && t < this.oi && (this.gn[this.Ol++] = t, this.gn[this.Ol++] = i, this.gn[this.Ol++] = h.y, this.Ol == this.gn.length && (this.vy.gF(this.gn, this.Ol), this.Ol = 0))), t = h, i = s;
            }
          }
        }, r.prototype.fK = function(n) {
          for (var t = 0, i = n; i != null; i = i.next) t++;
          if (this.gK = t, t == 1) return n;
          this.Kf == null ? this.Kf = e.O.lg(Math.max(t, 16), null) : this.Kf.length < t && (this.Kf = e.O.lg(Math.max(t, 2 * this.Kf.length), null));
          var h = 0;
          for (i = n; i != null; i = i.next) this.Kf[h++] = i;
          for (t == 2 ? this.Kf[0].x > this.Kf[1].x && (n = this.Kf[0], this.Kf[0] = this.Kf[1], this.Kf[1] = n) : r.AN(this.Kf, t, function(s, o) {
            return s == o ? 0 : s.x < o.x ? -1 : s.x > o.x ? 1 : 0;
          }), n = this.Kf[0], this.Kf[0] = null, i = n, h = 1; h < t; h++) i.next = this.Kf[h], i = this.Kf[h], this.Kf[h] = null;
          return i.next = null, n;
        }, r.AN = function(n, t, i) {
          if (t == n.length) n.sort(i);
          else {
            var h = n.slice(0, 0), s = n.slice(t);
            t = n.slice(0, t).sort(i), n.length = 0, n.push.apply(n, h.concat(t).concat(s));
          }
        }, r.Cx = 0, r;
      }();
      e.Px = f;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.prototype.ui = function(r, n) {
          var t = this.g.Pa(r, this.Pq);
          if (this.Dl == t && (this.Dl = this.oe.lb(this.Dl)), this.ho == t && (this.ho = this.oe.lb(this.ho)), this.oe.jd(this.RA, t), this.bk(r), n && (n = this.g.bd(r)) != -1 && this.g.Xa(n) == r) {
            var i = this.g.U(r);
            if (i != r) {
              if ((t = this.g.bd(i)) == n) return void this.g.Jf(n, i);
              if ((i = this.g.Ma(r)) != r && (t = this.g.bd(i)) == n) return void this.g.Jf(n, i);
            }
            this.g.Jf(n, -1), this.g.Wg(n, -1);
          }
        }, f.prototype.pD = function() {
          for (var r = !1, n = new e.h(); ; ) {
            this.Wh == null ? (this.Wh = new e.ia(0), this.zs = new e.ia(0), this.xe = new e.ia(0)) : (this.Wh.clear(!1), this.zs.clear(!1), this.xe.clear(!1));
            for (var t = this.ho, i = 0, h = !0; t != this.Dl; ) {
              var s = this.oe.getData(t), o = new e.h();
              this.g.Gc(s, o), h && (this.g.Gc(s, n), h = !1), o = this.g.Ma(s);
              var a = this.g.U(s);
              this.g.Pa(o, this.zg) != -559038737 && (this.Wh.add(o), this.g.Ra(o, this.zg, -559038737), this.zs.add(s), this.xe.add(i++)), this.g.Pa(a, this.zg) != -559038737 && (this.Wh.add(a), this.g.Ra(a, this.zg, -559038737), this.zs.add(s), this.xe.add(i++)), t = this.oe.lb(t);
            }
            if (2 > this.Wh.size) break;
            var u = this;
            for (this.xe.Vd(0, this.xe.size, function(c, l) {
              return u.pM(c, l);
            }), t = 0, i = this.xe.size; t < i; t++) h = this.xe.get(t), h = this.Wh.get(h), this.g.Ra(h, this.zg, t), o = new e.h(), this.g.Gc(h, o);
            for (o = this.TM(n), t = 0, i = this.xe.size; t < i; t++) (h = this.xe.get(t)) != -1 && (h = this.Wh.get(h), this.g.Ra(h, this.zg, -1));
            if (!o) break;
            r = !0;
          }
          return r;
        }, f.prototype.TM = function(r) {
          for (var n = !1, t = !0; t; ) {
            t = !1;
            var i = 0;
            this.xe.get(i) == -1 && (i = this.cm(i));
            for (var h = this.cm(i), s = 0, o = this.xe.size; s < o && i != -1 && h != -1 && i != h; s++) {
              var a = this.xe.get(i);
              h = this.xe.get(h), a = this.Wh.get(a), h = this.Wh.get(h);
              var u = this.g.U(a);
              this.g.Dv(u, r) || (u = this.g.Ma(a));
              var c = this.g.U(h);
              this.g.Dv(c, r) || (c = this.g.Ma(h));
              var l = this.pu(u, a), p = this.pu(c, h), y = l ? this.g.Ma(u) : this.g.U(u), d = p ? this.g.Ma(c) : this.g.U(c), g = !1;
              (this.sp(u) || this.sp(c) || this.sp(a) || this.sp(h) || this.sp(y) || this.sp(d)) && (g = !0), !g && this.g.fq(a, h) && (g = !0, this.tD(l, p, u, a, c, h)), !g && this.g.fq(y, d) && (g = !0, this.tD(!l, !p, u, y, c, d)), g && (n = !0), t = t || g, i = this.cm(i), h = this.cm(i);
            }
          }
          if (!n) for (i = 0, this.xe.get(i) == -1 && (i = this.cm(i)), h = this.cm(i), s = 0, o = this.xe.size; s < o && i != -1 && h != -1 && i != h; s++) a = this.xe.get(i), h = this.xe.get(h), a = this.Wh.get(a), h = this.Wh.get(h), u = this.g.U(a), this.g.Dv(u, r) || (u = this.g.Ma(a)), c = this.g.U(h), this.g.Dv(c, r) || (c = this.g.Ma(h)), l = this.pu(u, a), p = this.pu(c, h), y = l ? this.g.Ma(u) : this.g.U(u), d = p ? this.g.Ma(c) : this.g.U(c), this.DM(l, p, a, u, y, h, c, d) && (n = !0), i = this.cm(i), h = this.cm(i);
          return n;
        }, f.prototype.XM = function() {
          this.g.ic(this.X) == 1736 && this.g.In(this.X) == 1 && new e.Fg().MU(this.fw, this.g, this.X, this.nd);
          var r = !1, n = !0;
          this.zg = this.Pq = -1;
          var t = this.g.I(this.X), i = new e.ia(0);
          i.Jb(t);
          for (var h = this.g.Ob(this.X); h != -1; h = this.g.Rb(h)) for (var s = this.g.Xa(h), o = 0, a = this.g.Ja(h); o < a; o++) i.add(s), s = this.g.U(s);
          var u = this.g.td.o, c = this.g.td.stride;
          this.g.vb.mc();
          var l = this.g.vb.za[0].o;
          for (i.Vd(0, t, function(y, d) {
            var g = u[c * y], b = u[c * d], x = l[2 * g];
            g = l[2 * g + 1];
            var m = l[2 * b];
            return (x = g < (b = l[2 * b + 1]) ? -1 : g > b ? 1 : x < m ? -1 : x > m ? 1 : 0) == 0 && (x = (y = u[c * y + 3]) < (d = u[c * d + 3]) ? -1 : y == d ? 0 : 1), x;
          }), this.Pq = this.g.Gd(), this.oe = new e.jp(), this.RA = this.oe.Ph(0), this.oe.fn(t), h = 0; h < t; h++) s = i.get(h), o = this.oe.addElement(this.RA, s), this.g.Ra(s, this.Pq, o);
          for (this.zg = this.g.Gd(), this.Dl = -1, this.cD() && (r = !0); n; ) {
            n = !1, t = 0, i = !1;
            do {
              i = !1, this.ho = -1, a = 0, h = new e.h(), o = new e.h();
              for (var p = this.oe.rc(this.RA); p != -1; ) s = this.oe.getData(p), this.ho != -1 ? (this.g.Gc(s, o), h.qb(o) ? a++ : (h.L(o), this.Dl = p, 0 < a && (s = this.pD()) && (i = !0, this.Dl != -1 && (s = this.oe.getData(this.Dl), this.g.Gc(s, h))), this.ho = p = this.Dl, a = 0)) : (this.ho = p, this.g.Gc(this.oe.getData(p), h), a = 0), p != -1 && (p = this.oe.lb(p));
              if (this.Dl = -1, 0 < a && (s = this.pD()) && (i = !0), 10 < t++) throw e.i.Qa();
              i && this.GM(), this.cD() && (i = !0), n = n || i && !1, r = r || i;
            } while (i);
          }
          return this.g.Td(this.Pq), this.g.Td(this.zg), e.WL.V(this.g, this.X, this.oe, this.fw) || r;
        }, f.prototype.pu = function(r, n) {
          return this.g.U(n) != r;
        }, f.prototype.DM = function(r, n, t, i, h, s, o, a) {
          if (i == o) return this.bk(t), this.bk(s), !1;
          var u = this.g.Pa(t, this.zg), c = this.g.Pa(h, this.zg), l = this.g.Pa(s, this.zg), p = this.g.Pa(a, this.zg), y = [0, 0, 0, 0];
          for ((t = [0, 0, 0, 0, 0, 0, 0, 0])[0] = 0, y[0] = u, t[1] = 0, y[1] = c, t[2] = 1, y[2] = l, t[3] = 1, y[3] = p, u = 1; 4 > u; u++) {
            for (c = y[u], l = t[u], p = u - 1; 0 <= p && y[p] > c; ) y[p + 1] = y[p], t[p + 1] = t[p], p--;
            y[p + 1] = c, t[p + 1] = l;
          }
          return y = 0, t[0] != 0 && (y |= 1), t[1] != 0 && (y |= 2), t[2] != 0 && (y |= 4), t[3] != 0 && (y |= 8), (y == 5 || y == 10) && (r == n ? r ? (this.g.Bc(a, i), this.g.Cc(i, a), this.g.Bc(h, o), this.g.Cc(o, h)) : (this.g.Cc(a, i), this.g.Bc(i, a), this.g.Cc(h, o), this.g.Bc(o, h)) : r ? (this.g.Cc(i, s), this.g.Bc(s, i), this.g.Cc(o, h), this.g.Bc(h, o)) : (this.g.Bc(i, s), this.g.Cc(s, i), this.g.Bc(o, h), this.g.Cc(h, o)), !0);
        }, f.prototype.tD = function(r, n, t, i, h, s) {
          this.MY ? this.VM() : this.UM(r, n, t, i, h, s);
        }, f.prototype.VM = function() {
          throw e.i.fa("not implemented.");
        }, f.prototype.UM = function(r, n, t, i, h, s) {
          if (r != n) r ? (this.g.Bc(t, h), this.g.Cc(h, t), this.g.Bc(s, i), this.g.Cc(i, s), this.vn(h, t), this.ui(h, !0), this.g.mi(h, !0), this.bk(t), this.vn(s, i), this.ui(s, !0), this.g.mi(s, !1)) : (this.g.Bc(h, t), this.g.Cc(t, h), this.g.Bc(i, s), this.g.Cc(s, i), this.vn(h, t), this.ui(h, !0), this.g.mi(h, !1), this.bk(t), this.vn(s, i), this.ui(s, !0), this.g.mi(s, !0)), this.bk(i);
          else {
            var o = r ? t : i, a = n ? h : s;
            for (r = r ? i : t, n = n ? s : h, h = !1, this.g.Bc(o, a), this.g.Bc(a, o), this.g.Cc(r, n), this.g.Cc(n, r), s = n; s != a; ) t = this.g.Ma(s), i = this.g.U(s), this.g.Cc(s, i), this.g.Bc(s, t), h = h || s == o, s = i;
            h || (t = this.g.Ma(a), i = this.g.U(a), this.g.Cc(a, i), this.g.Bc(a, t)), this.vn(a, o), this.ui(a, !0), this.g.mi(a, !1), this.bk(o), this.vn(n, r), this.ui(n, !0), this.g.mi(n, !1), this.bk(r);
          }
        }, f.prototype.cD = function() {
          for (var r = !1, n = this.g.Ob(this.X); n != -1; ) {
            for (var t = this.g.Xa(n), i = 0, h = this.g.Ja(n); i < h && 1 < h; ) {
              var s = this.g.Ma(t), o = this.g.U(t);
              this.g.fq(s, o) ? (r = !0, this.ui(t, !1), this.g.pd(t, !0), this.ui(o, !1), this.g.pd(o, !0), t = s, i = 0, h = this.g.Ja(n)) : (t = o, i++);
            }
            if (2 > this.g.Ja(n)) {
              for (r = this.g.Xa(n), i = 0, h = this.g.Ja(n); i < h; i++) this.ui(r, !1), r = this.g.U(r);
              n = this.g.Zq(n), r = !0;
            } else n = this.g.Rb(n);
          }
          return r;
        }, f.prototype.sp = function(r) {
          for (var n = !1; ; ) {
            var t = this.g.U(r), i = this.g.Ma(r);
            if (t == r) return this.ui(r, !0), this.g.mi(r, !1), !0;
            if (!this.g.fq(t, i) || (n = !0, this.bk(i), this.bk(t), this.ui(r, !0), this.g.mi(r, !1), this.vn(t, i), this.ui(t, !0), this.g.mi(t, !0), t == i)) break;
            r = i;
          }
          return n;
        }, f.prototype.GM = function() {
          for (var r = 0, n = this.oe.rc(this.oe.je); n != -1; n = this.oe.lb(n)) {
            var t = this.oe.getData(n);
            this.g.aj(t, -1);
          }
          for (var i = 0, h = this.g.Ob(this.X); h != -1; ) if ((n = this.g.Xa(h)) == -1 || this.g.bd(n) != -1) t = h, h = this.g.Rb(h), this.g.$q(t);
          else {
            this.g.aj(n, h);
            var s = 1;
            for (t = this.g.U(n); t != n; t = this.g.U(t)) this.g.aj(t, h), s++;
            this.g.cp(h, !1), this.g.Vj(h, s), this.g.Wg(h, this.g.Ma(n)), i += s, r++, h = this.g.Rb(h);
          }
          for (n = this.oe.rc(this.oe.je); n != -1; n = this.oe.lb(n)) t = this.oe.getData(n), this.g.bd(t) == -1 && (h = this.g.nG(this.X, t, t, null), i += this.g.Ja(h), r++);
          for (this.g.Rl(this.X, r), this.g.Tj(this.X, i), r = 0, i = this.g.ld; i != -1; i = this.g.ue(i)) r += this.g.I(i);
          this.g.bC(r);
        }, f.prototype.cm = function(r) {
          for (var n = 0, t = this.xe.size - 1; n < t; n++) if (r = (r + 1) % this.xe.size, this.xe.get(r) != -1) return r;
          return -1;
        }, f.prototype.vn = function(r, n) {
          var t = this.g.Pa(n, this.Pq), i = this.g.Pa(n, this.zg);
          this.g.lC(r, n), this.g.Ra(n, this.Pq, t), this.g.Ra(n, this.zg, i);
        }, f.prototype.bk = function(r) {
          var n = this.g.Pa(r, this.zg);
          n != -1 && (this.xe.set(n, -1), this.g.Ra(r, this.zg, -1));
        }, f.V = function(r, n, t, i, h) {
          var s = new f();
          return s.g = r, s.X = n, s.xA = t, s.fw = i, s.nd = h, s.XM();
        }, f.prototype.pM = function(r, n) {
          var t = this.Wh.get(r), i = new e.h();
          this.g.Gc(t, i), t = new e.h();
          var h = this.Wh.get(n);
          return this.g.Gc(h, t), i.qb(t) ? 0 : (h = this.zs.get(r), r = new e.h(), this.g.Gc(h, r), h = this.zs.get(n), n = new e.h(), this.g.Gc(h, n), (h = new e.h()).uc(i, r), (i = new e.h()).uc(t, n), e.h.nu(h, i));
        }, f;
      }();
      e.rn = v;
    }(k || (k = {})), function(e) {
      var v;
      (v = e.$L || (e.$L = {}))[v.Local = 0] = "Local", v[v.Geographic = 1] = "Geographic", v[v.Projected = 2] = "Projected", v[v.Image = 3] = "Image", v[v.Unknown = 4] = "Unknown", function(r) {
        r[r.Integer32 = 0] = "Integer32", r[r.Integer64 = 1] = "Integer64", r[r.FloatingPoint = 2] = "FloatingPoint";
      }(e.TL || (e.TL = {}));
      var f = function() {
        function r() {
          this.mA = null, this.pp = "", this.su = null, this.dg = 0, this.ZH = this.Ho = -1, this.wh = null;
        }
        return r.prototype.Ec = function() {
          return this.dg;
        }, r.prototype.VF = function() {
          return 1;
        }, r.prototype.VW = function(n) {
          this.mA = n;
        }, r.prototype.Xd = function() {
          if (this.mA !== null) return this.mA;
          var n = 1e-3;
          return this.dg != 0 ? n = e.wr.CQ(this.dg) : this.wh != null && (n = e.XC.DQ(this.wh)), n;
        }, r.prototype.Bz = function() {
          return this.wh;
        }, r.prototype.Hd = function() {
          return this.dg != 0 ? e.Tc.Zg(e.wr.Sy(this.dg)) : this.wh != null ? e.XC.EQ(this.wh) : void 0;
        }, r.Sb = function(n) {
          if (n.dg != 0) {
            if (e.wr.ZS(n.dg) === !0) return 1;
            if (e.wr.aT(n.dg) === !0) return 2;
          }
          return 4;
        }, r.prototype.$r = function() {
          var n = this.Ec();
          return this.Ho != -1 ? this.Ho : (this.Ho = e.wr.FK(n), this.Ho != -1 ? this.Ho : n);
        }, r.create = function(n) {
          if (0 >= n) throw e.i.N("Invalid or unsupported wkid: " + n);
          var t = new r();
          return t.dg = n, t;
        }, r.qP = function(n) {
          if (n == null || n.length == 0) throw e.i.N("Cannot create SpatialReference from null or empty text.");
          var t = new r();
          return t.wh = n, t;
        }, r.prototype.Nb = function(n) {
          return this == n || n != null && this.constructor == n.constructor && this.dg == n.dg && (this.dg != 0 || this.wh === n.wh);
        }, r.prototype.toString = function() {
          return "[ tol: " + this.Kn() + "; wkid: " + this.Ec() + "; wkt: " + this.Bz() + "]";
        }, r.prototype.cc = function() {
          if (this.pp !== "") return this.pp;
          var n = this.toString();
          if (Array.prototype.reduce) return this.pp = "S" + n.split("").reduce(function(h, s) {
            return (h = (h << 5) - h + s.charCodeAt(0)) & h;
          }, 0);
          var t = 0;
          if (n.length === 0) return "";
          for (var i = 0; i < n.length; i++) t = (t << 5) - t + n.charCodeAt(i), t &= t;
          return this.pp = "S" + t;
        }, r.prototype.Kn = function() {
          return this.Xd(0);
        }, r.prototype.fh = function() {
          return this.su !== null ? this.su : this.su = e.gu.yP(this);
        }, r.ZN = 2147483645, r.$N = 9007199254740990, r;
      }();
      e.Eg = f;
    }(k || (k = {})), function(e) {
      var v = function(f) {
        function r() {
          var n = f !== null && f.apply(this, arguments) || this;
          return n.Ji = null, n.ST = null, n.Hq = new e.ZL(), n.Eo = null, n.jw = null, n;
        }
        return J(r, f), r.yP = function(n) {
          var t = new r();
          if (t.dg = n.dg, t.Ho = n.Ho, t.ZH = n.ZH, t.wh = n.wh, t.wh !== "" && t.wh !== null) {
            n = r.kM(t.wh);
            var i = r.iM(t.wh);
            t.Hq.Xx(n, i, e.hu.Integer64), t.by(n), t.gy(i), t.dg = n.$r();
          } else n = r.jM(t.dg), t.by(n), t.gy(null), t.Hq.Xx(n, null, e.hu.Integer64);
          return t;
        }, r.prototype.Xd = function(n) {
          return this.Hq.Kn(n);
        }, r.iM = function(n) {
          if (0 >= n.length) throw e.i.N();
          var t = null;
          try {
            t = e.NC.fromString(n);
          } catch {
            t = null;
          }
          return t == null ? null : r.bD(t, !0);
        }, r.prototype.by = function(n) {
          this.Kd = n, this.Eo = this.Kd.Hd();
        }, r.prototype.gy = function(n) {
          this.KH = n, this.ST = this.KH != null ? this.KH.Eo : null;
        }, r.prototype.Wc = function() {
          return this.Sb() != 0 && this.Sb() != 3 && this.Kd.Wc();
        }, r.prototype.IG = function() {
          return this.Sb() != 0 && (this.Sb() == 3 ? this.Ji.fk().Wc() : this.Kd.Wc());
        }, r.prototype.eh = function() {
          return this.Kd != null ? this.Kd.Ue : null;
        }, r.prototype.pm = function() {
          return this.Kd.pm();
        }, r.prototype.bf = function() {
          return this.Kd.bf();
        }, r.prototype.hh = function() {
          return this.Kd != null ? this.Kd.sw : NaN;
        }, r.prototype.Up = function() {
          return this.Kd.Up();
        }, r.prototype.Wr = function() {
          return this.Kd.Wr();
        }, r.prototype.kk = function() {
          return this.Kd.kk();
        }, r.prototype.kS = function(n) {
          return e.OC.Py(this.Kd, n.Kd);
        }, r.prototype.ml = function() {
          return this.Kd.ml();
        }, r.prototype.Vr = function() {
          return this.Kd.Vr();
        }, r.prototype.zi = function() {
          return this.Sb() == 3 ? this.Ji.fk().zi() : this.Kd.zi();
        }, r.prototype.gh = function() {
          if (!this.Wc()) throw e.i.N("!isPannable()");
          var n = new e.l();
          return this.Kd.gh(n), n;
        }, r.prototype.Oe = function() {
          if (!this.Wc()) throw e.i.N("!isPannable()");
          return this.Kd.so;
        }, r.prototype.HR = function() {
          if (!this.Wc()) throw e.i.N("!isPannable()");
          var n = new e.l();
          return this.Kd.GR(n), n;
        }, r.prototype.pv = function() {
          if (!this.Wc()) throw e.i.N("!isPannable()");
          return this.Kd.pv();
        }, r.prototype.ov = function() {
          if (!this.Wc()) throw e.i.N("!isPannable()");
          return this.Kd.ov();
        }, r.prototype.Xr = function() {
          return this.Ji != null ? this.Ji.fk().Xr() : this.Kd.Xr();
        }, r.prototype.PQ = function() {
          return this.Kd.hv();
        }, r.prototype.Qp = function() {
          return this.Eo.getUnitFactor();
        }, r.prototype.vz = function(n) {
          return this.Hq.vz(n);
        }, r.prototype.sc = function() {
          var n = this.Sb();
          if (n == 1) return this;
          if (n == 3) return this.Ji.fk().sc();
          if (n == 0 || n === 4) throw e.i.fa("invalid call");
          if (this.jw !== null) return this.jw;
          if ((n = this.eh().getGeogcs()) == null) throw e.i.Qa();
          return this.jw = r.bF(n, this.Hq.VF());
        }, r.bF = function(n, t) {
          if (n == null) throw e.i.N("null pointer.");
          var i = new r();
          return n = r.mu(n, !0), i.Hq.Xx(n, null, t), i.by(n), i.gy(null), i.dg = n.$r(), i;
        }, r.prototype.Sb = function() {
          var n = this.eh();
          if (n != null) switch (n.getType()) {
            case e.Sc.PE_TYPE_GEOGCS:
              return 1;
            case e.Sc.PE_TYPE_PROJCS:
              return 2;
          }
          return 4;
        }, r.prototype.hv = function() {
          return this.Kd.hv();
        }, r.mu = function(n, t) {
          var i = n.getCode();
          if (0 >= i && 0 < (i = e.pf.getCode(n))) {
            if ((n = e.pf.coordsys(i)) == null) throw e.i.N("Text to wkid mapping had failed: " + i);
            return r.mu(n, t);
          }
          if (t && 0 < i && (t = r.qx[i])) return t;
          t = e.zb.xv(n, i, !1);
          var h = r.lK[t];
          return h || (n = 0 >= i ? n : e.pf.coordsys(i), n = new e.OC(n), r.lK[t] = n, 0 < i && (r.qx[i] = n), n);
        }, r.jM = function(n) {
          if (0 >= n) throw e.i.N("Invalid or unsupported wkid: " + n);
          var t = r.qx[n];
          if (t != null) return t;
          if ((t = e.pf.coordsys(n)) == null) throw e.i.N("Invalid or unsupported wkid: " + n);
          return (t = r.mu(t, !1)).$r() != n && (r.qx[n] = t), t;
        }, r.kM = function(n) {
          if (n == null || n === void 0 || n.length == 0) throw e.i.N("Cannot create SpatialReference from null or empty text.");
          var t = null;
          try {
            t = e.pf.fromString(e.Sc.PE_TYPE_COORDSYS, n);
          } catch (i) {
            throw e.i.N("Cannot create SpatialReference from text. " + i.message);
          }
          if (t === null) throw e.i.N("Cannot create SpatialReference from text. ");
          return r.mu(t, !0);
        }, r.bD = function(n, t) {
          var i, h = n.getCode();
          if (0 >= h && 0 < (h = e.pf.getCode(n))) {
            if ((h = e.pf.vertcs(h)) === null) throw e.i.N();
            return r.bD(h, t);
          }
          if (t && 0 < h && (t = r.kK[h]) || (n = e.zb.xv(n, h, !1), t = r.mK[n])) return t;
          if (0 >= h || (i = e.pf.vertcs(h)), i === null) throw e.i.N();
          return i = new e.PL(i), r.mK[n] = i, 0 < h && (r.kK[h] = i), i;
        }, r.sI = function(n, t) {
          if (t === null || t.B()) return null;
          var i = new e.l();
          if (t !== null && n.Sb() != 1) {
            var h = n.sc(), s = h.eh();
            n = e.vr.Nr(n, h, null, null), (t = e.Hx.local().V(t, n, null)).A(i);
          } else s = n.eh(), t.A(i);
          return t = s.getPrimem().getLongitude(), s = s.getUnit().getUnitFactor(), new e.LC(i.v, i.G, i.C, i.H, t, s);
        }, r.lD = function(n) {
          var t = { name: "", steps: [], _pt: null, _entry: null }, i = 0;
          for (n = n.getEntries(); i < n.length; i++) {
            var h = n[i], s = { LY: !1, ZY: "", YY: -1, geogtran: null };
            h.getDirection() === 0 ? s.isInverse = !1 : s.isInverse = !0;
            var o = h.getGeogtran().getCode();
            -1 < o ? s.wkid = o : s.wkt = h.getGeogtran().toString(), t.steps.push(s);
          }
          return t;
        }, r.XR = function(n, t, i, h) {
          return i === void 0 && (i = null), i = r.sI(h, i), n = e.lp.getGTlist(n.eh(), t.eh(), 2, e.lp.PE_GTLIST_OPTS_COMMON, i, 1), t = null, n && 0 < n.length && (t = this.lD(n[0]), e.Mx.destroy(n)), i !== null && i.destroy(), t;
        }, r.YR = function(n, t, i, h) {
          var s;
          if (i === void 0 && (i = null), h === void 0 && (h = null), s === void 0 && (s = 30), i = r.sI(h, i), n = e.lp.getGTlist(n.eh(), t.eh(), 2, e.lp.PE_GTLIST_OPTS_COMMON, i, s), t = [], n && 0 < n.length) {
            for (s = 0; s < n.length; s++) t.push(this.lD(n[s]));
            e.Mx.destroy(n);
          }
          return i !== null && i.destroy(), t;
        }, r.qx = {}, r.lK = {}, r.kK = {}, r.mK = {}, r;
      }(e.Eg);
      e.gu = v;
    }(k || (k = {})), function(e) {
      var v, f;
      (f = v = e.hu || (e.hu = {}))[f.Integer32 = 0] = "Integer32", f[f.Integer64 = 1] = "Integer64", f[f.FloatingPoint = 2] = "FloatingPoint";
      var r = function() {
        function n() {
          this.qp();
        }
        return n.prototype.assign = function(t) {
          this.Fm = t.Fm, this.Gm = t.Gm, this.Pj = t.Pj, this.sA = t.sA, this.Fo = t.Fo, this.rA = t.rA, this.Ik = t.Ik, this.Mq = t.Mq, this.Lq = t.Lq, this.Rm = t.Rm;
        }, n.prototype.VF = function() {
          return this.Rm;
        }, n.prototype.qp = function() {
          this.Gm = this.Fm = 0, this.Pj = 1, this.sA = 0, this.Fo = 1, this.rA = 0, this.Lq = this.Mq = this.Ik = 2220446049250313e-29, this.Rm = v.FloatingPoint;
        }, n.prototype.Xx = function(t, i, h) {
          if (this.qp(), this.Rm = h, h != v.FloatingPoint) {
            var s = new e.l();
            t.hR(s), this.Fm = s.v, this.Gm = s.G;
          } else this.Gm = this.Fm = -17976931348623157e292;
          (s = t.Ue.getType()) == e.Sc.PE_TYPE_GEOGCS ? (s = (h == v.Integer64 ? 1e-9 : 1 / 18e5) * t.bf(), this.Pj = 1 / s) : s == e.Sc.PE_TYPE_PROJCS && (s = (h == v.Integer64 ? 1e-4 : 1e-3) * t.pm(), this.Pj = 1 / s), i != null ? (s = (h == v.Integer32 ? 1e-3 : 1e-4) * i.IH, this.Fo = 1 / s) : this.Fo = 1e4, this.YM(), this.Ik = t.sw, this.Mq = i != null ? 1e-3 * i.IH : 1e-3, this.Lq = 2220446049250313e-29;
        }, n.prototype.YM = function() {
          if (this.Rm != v.FloatingPoint) {
            var t = this.Rm == v.Integer64 ? e.Eg.$N : e.Eg.ZN, i = t / this.Pj, h = this.Fm + i, s = e.O.truncate((h - this.Fm) * this.Pj);
            s > t && (this.Pj = t / (h - this.Fm)), i = this.Gm + i, (s = e.O.truncate((i - this.Gm) * this.Pj)) > t && (this.Pj = t / (i - this.Gm));
          }
        }, n.prototype.aC = function(t) {
          switch (t) {
            case 0:
              this.Ik = void 0;
            case 1:
              this.Mq = void 0;
            case 2:
              this.Lq = void 0;
          }
        }, n.prototype.Kn = function(t) {
          switch (t) {
            case 0:
              return this.Ik;
            case 1:
              return this.Mq;
            case 2:
              return this.Lq;
          }
          return 0;
        }, n.prototype.vz = function(t) {
          if (this.Rm == v.FloatingPoint) return 0;
          switch (t) {
            case 0:
              return 1 / this.Pj;
            case 1:
            case 2:
              return 1 / this.Fo;
            default:
              return 0;
          }
        }, n.prototype.toString = function() {
          var t = "SRPD [m_toleranceXY: " + this.Ik.toString();
          return (t = (t = (t = (t = (t = (t = (t = (t = (t = t + ";m_falseX: " + this.Fm.toString()) + ";m_falseY: " + this.Gm.toString()) + ";m_unitsXY: " + this.Pj.toString()) + ";m_falseZ: " + this.sA.toString()) + ";m_unitsZ: " + this.Fo.toString()) + ";m_falseM: " + this.rA.toString()) + ";m_toleranceZ: " + this.Mq.toString()) + ";m_toleranceM: " + this.Lq.toString()) + ";m_precision: " + this.Rm.toString()) + "] ";
        }, n;
      }();
      e.ZL = r;
    }(k || (k = {})), function(e) {
      function v(h, s) {
        return 89.99999 < s ? s = 89.99999 : -89.99999 > s && (s = -89.99999), s *= 0.017453292519943, [111319.49079327169 * h, 31890685e-1 * Math.log((1 + Math.sin(s)) / (1 - Math.sin(s)))];
      }
      function f(h, s, o) {
        return h = h / 6378137 * 57.29577951308232, o ? [h, 57.29577951308232 * (1.5707963267948966 - 2 * Math.atan(Math.exp(-1 * s / 6378137)))] : [h - 360 * Math.floor((h + 180) / 360), 57.29577951308232 * (1.5707963267948966 - 2 * Math.atan(Math.exp(-1 * s / 6378137)))];
      }
      function r(h, s, o) {
        var a = h.Of();
        if (h.getType() === 33) s = s(a.Lg(), a.ih()), a.Cb(s[0], s[1]);
        else if (h.getType() === 197) {
          var u = s(h.es(), h.gs(), o);
          s = s(h.ds(), h.fs(), o), a.K(u[0], u[1], s[0], s[1]);
        } else for (u = new e.h(), h = 0; h < a.I(); h++) {
          a.D(h, u);
          var c = s(u.x, u.y, o);
          u.ma(c[0], c[1]), a.Cb(h, u);
        }
        return a;
      }
      function n(h) {
        return r(h, f, !0);
      }
      function t(h) {
        return r(h, v, !0);
      }
      var i = Math.PI / 180;
      e.UK = function() {
        function h() {
        }
        return h.vu = function(s) {
          var o = Math.sqrt(0.006694379990197414), a = Math.sin(s.y * i);
          return e.h.construct(6378137 * s.x * i, 3.1677196636462314e6 * (a / (1 - 0.006694379990197414 * a * a) - 1 / (2 * o) * Math.log((1 - o * a) / (1 + o * a))));
        }, h.Vx = function(s, o, a, u) {
          var c = 0.0033528106647474805, l = Math.sin(a);
          a = Math.cos(a);
          var p = (1 - c) * Math.tan(s), y = p * (s = 1 / Math.sqrt(1 + p * p)), d = Math.atan2(p, a), g = (p = s * l) * p, b = 1 - g, x = 27233160610754688e-5 * b / 4040829998466145e-2, m = 1 + x / 16384 * (4096 + x * (x * (320 - 175 * x) - 768)), w = x / 1024 * (256 + x * (x * (74 - 47 * x) - 128));
          x = u / (635675231424518e-8 * m);
          for (var j, M, A, z = 2 * Math.PI; 1e-12 < Math.abs(x - z); ) A = Math.cos(2 * d + x), z = x, x = u / (635675231424518e-8 * m) + w * (j = Math.sin(x)) * (A + w / 4 * ((M = Math.cos(x)) * (2 * A * A - 1) - w / 6 * A * (4 * j * j - 3) * (4 * A * A - 3)));
          return u = y * j - s * M * a, b = c / 16 * b * (4 + c * (4 - 3 * b)), e.h.construct((o + (Math.atan2(j * l, s * M - y * j * a) - (1 - b) * c * p * (x + b * j * (A + b * M * (2 * A * A - 1))))) / i, Math.atan2(y * M + s * j * a, (1 - c) * Math.sqrt(g + u * u)) / i);
        }, h.MM = function(s, o, a, u) {
          var c = 0.0033528106647474805, l = u - o, p = Math.atan((1 - c) * Math.tan(s)), y = Math.atan((1 - c) * Math.tan(a)), d = Math.sin(p);
          p = Math.cos(p);
          var g = Math.sin(y);
          y = Math.cos(y);
          var b = l, x = 1e3;
          do {
            var m = Math.sin(b), w = Math.cos(b), j = Math.sqrt(y * m * y * m + (p * g - d * y * w) * (p * g - d * y * w));
            if (j === 0) return 0;
            w = d * g + p * y * w;
            var M = Math.atan2(j, w), A = p * y * m / j, z = 1 - A * A;
            m = w - 2 * d * g / z, isNaN(m) && (m = 0);
            var N = c / 16 * z * (4 + c * (4 - 3 * z)), I = b;
            b = l + (1 - N) * c * A * (M + N * j * (m + N * w * (2 * m * m - 1)));
          } while (1e-12 < Math.abs(b - I) && 0 < --x);
          return x === 0 ? (d = u - o, { azimuth: Math.atan2(Math.sin(d) * Math.cos(a), Math.cos(s) * Math.sin(a) - Math.sin(s) * Math.cos(a) * Math.cos(d)), geodesicDistance: 6371008771415059e-9 * Math.acos(Math.sin(s) * Math.sin(a) + Math.cos(s) * Math.cos(a) * Math.cos(u - o)) }) : (o = (s = 27233160610754688e-5 * z / 4040829998466145e-2) / 1024 * (256 + s * (s * (74 - 47 * s) - 128)), { azimuth: Math.atan2(y * Math.sin(b), p * g - d * y * Math.cos(b)), YQ: 635675231424518e-8 * (1 + s / 16384 * (4096 + s * (s * (320 - 175 * s) - 768))) * (M - o * j * (m + o / 4 * (w * (2 * m * m - 1) - o / 6 * m * (4 * j * j - 3) * (4 * m * m - 3)))), XY: Math.atan2(p * Math.sin(b), p * g * Math.cos(b) - d * y) });
        }, h.jQ = function(s) {
          var o = s.hasAttribute(1), a = s.hasAttribute(2), u = [], c = s.da(), l = null, p = null;
          o && (l = s.ub(1)), a && (p = s.ub(2));
          for (var y = new e.h(), d = 0; d < c; d++) {
            for (var g = s.Ba(d), b = s.Ja(d), x = 0, m = 0, w = NaN, j = NaN, M = NaN, A = NaN, z = s.dc(d), N = [], I = g; I < g + b; I++) {
              s.D(I, y), A = M = NaN;
              var C = [y.x, y.y];
              o && (M = l.get(I), C.push(M)), a && (c = p.get(I), C.push(A)), I == g && z && (x = y.x, m = y.y, w = M, j = A), N.push(C);
            }
            !z || x == y.x && m == y.y && (!o || isNaN(w) && isNaN(M) || w == M) && (!a || isNaN(j) && isNaN(A) || j == A) || N.push(N[0].slice(0)), u.push(N);
          }
          return u;
        }, h.Wy = function(s, o) {
          s = h.jQ(s), 637.100877141506 > o && (o = 637.100877141506);
          for (var a, u = [], c = 0; c < s.length; c++) {
            var l, p, y = s[c];
            u.push(a = []), a.push([y[0][0], y[0][1]]);
            var d = y[0][0] * i, g = y[0][1] * i;
            for (l = 0; l < y.length - 1; l++) {
              var b = y[l + 1][0] * i, x = y[l + 1][1] * i;
              if (d !== b || g !== x) {
                b = (x = h.MM(g, d, x, b)).azimuth;
                var m = (x = x.YQ) / o;
                if (1 < m) {
                  for (p = 1; p <= m - 1; p++) {
                    var w = h.Vx(g, d, b, p * o);
                    a.push([w.x, w.y]);
                  }
                  p = h.Vx(g, d, b, (x + Math.floor(m - 1) * o) / 2), a.push([p.x, p.y]);
                }
                g = h.Vx(g, d, b, x), a.push([g.x, g.y]), d = g.x * i, g = g.y * i;
              }
            }
          }
          return { qJ: u };
        }, h.XQ = function(s) {
          for (var o = [], a = 0; a < s.length; a++) {
            var u = s[a];
            u = h.Wy(u, 1e4), o.push(u);
          }
          s = [];
          for (var c = 0; c < o.length; c++) {
            u = o[c];
            var l = 0;
            for (a = 0; a < u.qJ.length; a++) {
              var p, y = u.qJ[a], d = h.vu(e.h.construct(y[0][0], y[0][1])), g = h.vu(e.h.construct(y[y.length - 1][0], y[y.length - 1][1])), b = g.x * d.y - d.x * g.y;
              for (p = 0; p < y.length - 1; p++) d = h.vu(e.h.construct(y[p + 1][0], y[p + 1][1])), b += (g = h.vu(e.h.construct(y[p][0], y[p][1]))).x * d.y - d.x * g.y;
              l += b;
            }
            l /= 1, s.push(l / -2);
          }
          return s;
        }, h;
      }(), e.cb = function() {
        function h() {
        }
        return h.xB = function(s, o, a, u, c, l, p) {
          h.gD[s.cc()] = o, isNaN(a) == 0 && (h.mD[s.cc()] = a), isNaN(u) == 0 && (h.zD[s.cc()] = u), isNaN(c) == 0 && (h.aD[s.cc()] = c), h.nD[s.cc()] = l, p !== null && (h.oD[s.cc()] = p);
        }, h.Ww = function(s, o, a) {
          h.sD[s.cc() + "-" + o.cc()] = a;
        }, h.sc = function(s) {
          if ((s = h.gD[s.cc()]) == null) throw e.i.Ie();
          return s;
        }, h.bf = function(s) {
          if ((s = h.mD[s.cc()]) == null) throw e.i.Ie();
          return s;
        }, h.vv = function(s) {
          if ((s = h.zD[s.cc()]) == null) throw e.i.Ie();
          return s;
        }, h.ev = function(s) {
          if ((s = h.aD[s.cc()]) == null) throw e.i.Ie();
          return s;
        }, h.gh = function(s) {
          if ((s = h.oD[s.cc()]) == null) throw e.i.Ie();
          return e.l.construct(s[0], s[1], s[2], s[3]);
        }, h.Wc = function(s) {
          if ((s = h.nD[s.cc()]) == null) throw e.i.Ie();
          return s;
        }, h.zh = function(s, o, a) {
          if (o.Nb(a)) return s;
          var u = h.sD[o.cc() + "-" + a.cc()];
          if (u !== void 0) return u(s, o, a);
          throw e.i.Ie();
        }, h.vt = function() {
          throw e.i.Ie();
        }, h.bR = function() {
          throw e.i.Ie();
        }, h.dW = function() {
          throw e.i.Ie();
        }, h.ml = function() {
          throw e.i.Ie();
        }, h.sW = function() {
          var s = e.Eg.create(102100), o = e.Eg.create(3857), a = e.Eg.create(4326);
          e.cb.xB(s, a, NaN, NaN, NaN, !1, null), e.cb.xB(a, a, 1, 0.0033528106647474805, 6378137, !0, [-180, -90, 180, 90]), e.cb.xB(o, a, NaN, NaN, NaN, !1, null), e.cb.Ww(s, a, n), e.cb.Ww(a, s, t), e.cb.Ww(o, a, n), e.cb.Ww(a, o, t);
        }, h.gD = [], h.mD = [], h.zD = [], h.aD = [], h.nD = [], h.oD = [], h.sD = [], h;
      }();
    }(k || (k = {})), k.cb.sW(), function(e) {
      var v = function() {
        function f(r) {
          this.o = new Int32Array(0), this.io = -1, this.Hg = this.size = this.Bl = 0, this.stride = r;
        }
        return f.prototype.jd = function(r) {
          r < this.Bl ? (this.o[r * this.stride] = this.io, this.io = r) : this.Bl--, this.size--;
        }, f.prototype.T = function(r, n) {
          return this.o[r * this.stride + n];
        }, f.prototype.S = function(r, n, t) {
          this.o[r * this.stride + n] = t;
        }, f.prototype.Ce = function() {
          var r = this.io;
          if (r == -1) {
            if (this.Bl == this.Hg) {
              if (2147483647 < (r = this.Hg != 0 ? e.O.truncate(3 * (this.Hg + 1) / 2) : 1) && (r = 2147483647), r == this.Hg) throw e.i.ce();
              this.Dz(r);
            }
            r = this.Bl, this.Bl++;
          } else this.io = this.o[r * this.stride];
          this.size++;
          for (var n = r * this.stride; n < r * this.stride + this.stride; n++) this.o[n] = -1;
          return r;
        }, f.prototype.Ll = function(r) {
          var n = this.io;
          if (n == -1) {
            if (this.Bl == this.Hg) {
              if (2147483647 < (n = this.Hg != 0 ? e.O.truncate(3 * (this.Hg + 1) / 2) : 1) && (n = 2147483647), n == this.Hg) throw e.i.ce();
              this.Dz(n);
            }
            n = this.Bl, this.Bl++;
          } else this.io = this.o[n * this.stride];
          this.size++;
          for (var t = n * this.stride, i = 0; i < r.length; i++) this.o[t + i] = r[i];
          return n;
        }, f.prototype.mj = function(r) {
          this.io = -1, this.size = this.Bl = 0, r && (this.o = null, this.Hg = 0);
        }, f.prototype.De = function(r) {
          r > this.Hg && this.Dz(r);
        }, f.prototype.tx = function(r, n) {
          r *= this.stride, n *= this.stride;
          for (var t = 0; t < this.stride; t++) {
            var i = this.o[n + t];
            this.o[n + t] = this.o[r + t], this.o[r + t] = i;
          }
        }, f.prototype.gC = function(r, n, t) {
          var i = this.o[this.stride * n + t];
          this.o[this.stride * n + t] = this.o[this.stride * r + t], this.o[this.stride * r + t] = i;
        }, f.LG = function(r) {
          return 0 <= r;
        }, f.prototype.Dz = function(r) {
          this.o == null && (this.o = new Int32Array(0));
          var n = new Int32Array(this.stride * r);
          n.set(this.o, 0), this.o = n, this.Hg = r;
        }, f;
      }();
      e.$c = v;
    }(k || (k = {})), function(e) {
      var v, f;
      (f = v || (v = {}))[f.enumInputModeBuildGraph = 0] = "enumInputModeBuildGraph", f[f.enumInputModeSimplifyAlternate = 4] = "enumInputModeSimplifyAlternate", f[f.enumInputModeSimplifyWinding = 5] = "enumInputModeSimplifyWinding", f[f.enumInputModeIsSimplePolygon = 7] = "enumInputModeIsSimplePolygon";
      var r = function() {
        function t(i) {
          this.Be = i, this.yh = NaN, this.eH = new e.ig(), this.fH = new e.ig(), this.ms = new e.Nc(), this.ns = new e.Nc();
        }
        return t.prototype.compare = function(i, h, s) {
          if (i = i.ja(s), this.Be.pB(h, this.eH), this.Be.pB(i, this.fH), h = this.eH.get(), i = this.fH.get(), this.ms.K(h.sa, h.pa), this.ns.K(i.sa, i.pa), this.ms.va < this.ns.oa) return -1;
          if (this.ms.oa > this.ns.va) return 1;
          s = h.na == h.la;
          var o = i.na == i.la;
          if (s || o) {
            if (s && o) return 0;
            if (h.na == i.na && h.sa == i.sa) return s ? 1 : -1;
            if (h.la == i.la && h.pa == i.pa) return s ? -1 : 1;
          }
          return (s = h.Pe(this.yh, this.ms.oa)) == (o = i.Pe(this.yh, this.ns.oa)) && ((o = 0.5 * ((s = Math.min(h.la, i.la)) + this.yh)) == this.yh && (o = s), s = h.Pe(o, this.ms.oa), o = i.Pe(o, this.ns.oa)), s < o ? -1 : s > o ? 1 : 0;
        }, t.prototype.aK = function(i) {
          this.yh = i;
        }, t;
      }(), n = function() {
        function t(i) {
          this.ib = i, this.WH = new e.ig(), this.Bf = new e.h(), this.wA = new e.Nc();
        }
        return t.prototype.kX = function(i) {
          this.Bf.L(i);
        }, t.prototype.compare = function(i, h) {
          return this.ib.pB(i.ja(h), this.WH), i = this.WH.get(), this.wA.K(i.sa, i.pa), this.Bf.x < this.wA.oa ? -1 : this.Bf.x > this.wA.va ? 1 : (i = i.Pe(this.Bf.y, this.Bf.x), this.Bf.x < i ? -1 : this.Bf.x > i ? 1 : 0);
        }, t;
      }();
      v = function() {
        function t() {
          this.hH = this.Di = this.Gi = this.kA = this.Yn = this.ye = this.Kc = this.jh = this.ge = null, this.Go = this.xg = -1, this.gH = !0, this.pA = !1, this.lA = NaN, this.Ni = new e.Md(), this.bO = 2147483647, this.aO = e.O.truncate(-2147483648), this.cg = this.ae = this.Hl = this.Cq = this.Cm = this.Bq = this.Os = this.Re = -1, this.wa = 0;
        }
        return t.prototype.yy = function(i) {
          this.lA = i;
        }, t.prototype.Ym = function() {
          this.ge == null && (this.ge = new e.$c(8));
          var i = this.ge.Ce();
          return this.ge.S(i, 1, 0), i;
        }, t.prototype.vU = function() {
          this.Kc == null && (this.Kc = new e.$c(8));
          var i = this.Kc.Ce();
          this.Kc.S(i, 2, 0), this.Kc.S(i, 3, 0);
          var h = this.Kc.Ce();
          return this.Kc.S(h, 2, 0), this.Kc.S(h, 3, 0), this.JJ(i, h), this.JJ(h, i), i;
        }, t.prototype.mI = function() {
          this.ye == null && (this.ye = new e.$c(8));
          var i = this.ye.Ce();
          return this.ye.S(i, 2, 0), i;
        }, t.prototype.TW = function(i, h) {
          this.ge.S(i, 7, h);
        }, t.prototype.mn = function(i, h) {
          this.ge.S(i, 2, h);
        }, t.prototype.SW = function(i, h) {
          this.ge.S(i, 1, h);
        }, t.prototype.lX = function(i, h) {
          this.ge.S(i, 3, h);
        }, t.prototype.iX = function(i, h) {
          this.ge.S(i, 4, h);
        }, t.prototype.cr = function(i, h) {
          this.ge.S(i, 5, h);
        }, t.prototype.eR = function(i) {
          return this.ge.T(i, 5);
        }, t.prototype.RW = function(i, h) {
          this.ge.S(i, 6, h);
        }, t.prototype.cN = function(i, h) {
          this.RW(h, i);
        }, t.prototype.IJ = function(i, h) {
          this.Kc.S(i, 1, h);
        }, t.prototype.JJ = function(i, h) {
          this.Kc.S(i, 4, h);
        }, t.prototype.Tl = function(i, h) {
          this.Kc.S(i, 5, h);
        }, t.prototype.Sl = function(i, h) {
          this.Kc.S(i, 6, h);
        }, t.prototype.$W = function(i, h) {
          this.Kc.S(i, 2, h);
        }, t.prototype.$w = function(i, h) {
          this.Kc.S(i, 3, h);
        }, t.prototype.LF = function(i) {
          return this.Kc.T(i, 3);
        }, t.prototype.Gt = function(i, h) {
          this.Kc.S(i, 7, h);
        }, t.prototype.EK = function(i, h) {
          if (this.mm(i) != -1) for (h = h ? -1 : i, i = this.mm(i); i != -1; i = this.js(i)) this.g.Ra(this.tj(i), this.Cq, h);
        }, t.prototype.yx = function(i, h) {
          i != -1 && (this.EK(i, h), this.EK(this.xa(i), h));
        }, t.prototype.Dt = function(i, h) {
          this.ye.S(i, 1, h);
        }, t.prototype.Vg = function(i, h) {
          this.ye.S(i, 2, h);
        }, t.prototype.jn = function(i, h) {
          this.ye.S(i, 3, h), this.NW(i, this.dR(h)), this.MW(h, i);
        }, t.prototype.MW = function(i, h) {
          this.ye.S(i, 4, h);
        }, t.prototype.NW = function(i, h) {
          this.ye.S(i, 5, h);
        }, t.prototype.DJ = function(i, h) {
          this.ye.S(i, 6, h);
        }, t.prototype.BJ = function(i, h) {
          this.ye.S(i, 7, h);
        }, t.prototype.AJ = function(i, h) {
          this.Yn.write(i, h);
        }, t.prototype.CJ = function(i, h) {
          this.kA.write(i, h);
        }, t.prototype.kY = function(i) {
          var h = 0, s = 0, o = this.AF(i), a = new e.h(), u = new e.h(), c = new e.h();
          this.Yr(o, a), u.L(a);
          var l = o;
          do
            this.lm(l, c), s += e.h.tb(u, c), this.$e(this.xa(l)) != i && (h += (c.x - a.x - (u.x - a.x)) * (c.y - a.y + (u.y - a.y)) * 0.5), u.L(c), l = this.jc(l);
          while (l != o);
          this.Yn.write(i, h), this.kA.write(i, s);
        }, t.prototype.PU = function(i, h) {
          var s = new r(this), o = new e.Yj();
          o.De(e.O.truncate(this.wa / 2)), o.Vo(s);
          for (var a = new e.ia(0), u = this.$g(), c = null, l = 0, p = new e.h(), y = this.Re; y != -1; y = this.Rf(y)) {
            if (!(255 & ++l) && h != null && !h.progress(-1, -1)) throw e.i.WC();
            var d = this.Me(y);
            if (d != -1) {
              if (a.Bh(0), !this.gY(o, u, a, d)) {
                this.D(y, p), s.aK(p.y);
                var g = d;
                do {
                  var b = this.Ab(g, u);
                  b != -1 && (o.vd(b, -1), this.Kb(g, u, -2)), g = this.jc(this.xa(g));
                } while (d != g);
                g = d;
                do
                  (b = this.Ab(g, u)) == -1 && (b = o.addElement(g, -1), a.add(b)), g = this.jc(this.xa(g));
                while (d != g);
              }
              for (d = a.size - 1; 0 <= d; d--) b = a.get(d), g = o.ja(b), this.Kb(this.xa(g), u, b), this.OU(o, b, i);
            } else this.cz(y) == -1 && (c == null && (c = new n(this)), this.D(y, p), c.kX(p), g = o.IW(c), d = this.Hl, g != -1 && (b = o.ja(g), this.$e(b) == this.$e(this.xa(b)) && (b = this.OF(o, g)), b != -1 && (d = this.$e(b))), this.cN(d, y));
          }
          this.Jg(u);
        }, t.prototype.OU = function(i, h, s) {
          var o = i.ja(h), a = this.$e(o);
          if (this.Gn(a) == -1) {
            var u = this.OF(i, h), c = this.xa(o), l = this.$e(c);
            this.Kp(a), this.Kp(l);
            var p = this.Gn(a), y = this.Gn(l);
            if (u == -1 && p == -1 && (l == a ? (this.jn(l, this.Hl), p = y = this.Hl) : (y == -1 && (this.jn(l, this.Hl), y = this.Hl), this.jn(a, l), p = l)), u != -1) {
              var d = this.$e(u);
              y == -1 && (0 >= this.Kp(d) ? (y = this.Gn(d), this.jn(l, y)) : (this.jn(l, d), y = d), l == a && (p = y));
            }
            p == -1 && this.hY(a, l), s == 0 ? this.jW(i, h, o, u, a, l) : s == 5 ? this.kW(i, h, o, c, a, l) : s == 4 && this.iW(o, u, a, l);
          }
        }, t.prototype.jW = function(i, h, s, o, a, u) {
          var c = this.hk(a);
          if (o != -1) {
            var l = this.hk(u), p = this.hk(this.$e(o));
            o = c & l & p, p ^= p & this.dh(s), (p |= o) != 0 && (this.Vg(u, l | p), this.Vg(a, p | c), c = c || p);
          }
          for (h = i.lb(h); h != -1 && (o = i.ja(h), s = this.$e(this.xa(o)), a = this.hk(s), u = this.dh(o), l = this.$e(o), o = a & (p = this.hk(l)) & c, c ^= c & u, (c |= o) != 0); h = i.lb(h)) this.Vg(s, a | c), this.Vg(l, p | c);
        }, t.prototype.kW = function(i, h, s, o, a, u) {
          if (a != u) {
            s = this.Ab(s, this.cg), s += this.Ab(o, this.cg), o = 0;
            var c = new e.ia(0), l = new e.ia(0);
            l.add(0);
            for (var p = i.rc(-1); p != h; p = i.lb(p)) {
              var y = i.ja(p), d = this.xa(y), g = this.$e(y), b = this.$e(d);
              if (g != b) {
                if (y = this.Ab(y, this.cg), o += y += this.Ab(d, this.cg), d = !1, c.size != 0 && c.Fc() == b && (l.If(), c.If(), d = !0), this.Gn(b) == -1) throw e.i.Qa();
                d && this.Gn(b) == g || (l.add(o), c.add(g));
              }
            }
            o += s, c.size != 0 && c.Fc() == u && (l.If(), c.If()), o != 0 ? l.Fc() == 0 && (i = this.g.ld, i = this.La(i), this.Vg(a, i)) : l.Fc() != 0 && (i = this.g.ld, i = this.La(i), this.Vg(a, i));
          }
        }, t.prototype.iW = function(i, h, s, o) {
          var a = this.La(this.g.ld);
          if (h == -1) this.Vg(o, this.Go), 1 & (i = this.Ab(i, this.xg)) ? this.Vg(s, a) : this.Vg(s, this.Go);
          else {
            var u = this.hk(o);
            u == 0 ? (u = this.hk(this.$e(h)), this.Vg(o, u), 1 & (i = this.Ab(i, this.xg)) ? this.Vg(s, u == a ? this.Go : a) : this.Vg(s, u)) : 1 & (i = this.Ab(i, this.xg)) ? this.Vg(s, u == a ? this.Go : a) : this.Vg(s, u);
          }
        }, t.prototype.gY = function(i, h, s, o) {
          var a = o, u = -1, c = -1, l = 0;
          do {
            if (l == 2) return !1;
            var p = this.Ab(a, h);
            if (p != -1) {
              if (u != -1) return !1;
              u = p;
            } else {
              if (c != -1) return !1;
              c = a;
            }
            l++, a = this.jc(this.xa(a));
          } while (o != a);
          return c != -1 && u != -1 && (this.Kb(i.ja(u), h, -2), i.Sj(u, c), s.add(u), !0);
        }, t.prototype.hY = function(i, h) {
          var s = this.Kp(i);
          if (s != 0) {
            var o = this.Kp(h);
            0 < s && 0 > o || 0 > s && 0 < o ? this.jn(i, h) : (h = this.Gn(h)) != -1 && this.jn(i, h);
          }
        }, t.prototype.vP = function(i, h) {
          this.Cq = this.g.Gd();
          for (var s = 0, o = h.size; s < o; s++) {
            var a = h.get(s), u = this.g.Pa(a, this.Cm), c = this.g.Qf(this.g.bd(a)), l = this.g.ic(c);
            if (e.aa.Hc(l)) {
              var p = this.g.U(a);
              if (p != -1) {
                var y = this.g.Pa(p, this.Cm);
                if (u != y) {
                  var d = this.vU(), g = this.xa(d), b = this.jh.Ce();
                  this.jh.S(b, 0, a), this.jh.S(b, 1, -1), this.Gt(d, b), this.IJ(d, u), (b = this.Me(u)) == -1 ? (this.mn(u, d), this.Tl(d, g), this.Sl(g, d)) : (u = this.te(b), this.Tl(b, g), this.Sl(g, b), this.Sl(u, d), this.Tl(d, u)), this.IJ(g, y), (u = this.Me(y)) == -1 ? (this.mn(y, g), this.Sl(d, g), this.Tl(g, d)) : (y = this.te(u), this.Tl(u, d), this.Sl(d, u), this.Sl(y, g), this.Tl(g, y)), c = this.La(c), i == 0 ? (this.Kb(g, this.ae, 0), this.Kb(d, this.ae, l == 1736 ? c : 0)) : i == 5 ? (y = new e.h(), this.g.D(a, y), a = new e.h(), this.g.D(p, a), u = p = 0, 0 > y.compare(a) ? p = 1 : u = -1, this.Kb(g, this.ae, 0), this.Kb(d, this.ae, 0), this.Kb(d, this.cg, p), this.Kb(g, this.cg, u)) : i == 7 ? (this.Kb(g, this.ae, this.Go), this.Kb(d, this.ae, l == 1736 ? c : 0)) : i == 4 && (this.Kb(g, this.ae, 0), this.Kb(d, this.ae, 0), this.Kb(d, this.xg, 1), this.Kb(g, this.xg, 1)), l = l == 1736 ? this.aO : 0, this.$w(d, c | l), this.$w(g, c | l);
                }
              }
            }
          }
        }, t.prototype.VT = function(i, h) {
          var s = this.mm(h);
          if (s != -1) {
            var o = this.mm(i);
            this.jh.S(s, 1, o), this.Gt(i, s), this.Gt(h, -1);
          }
          i = this.xa(i), h = this.xa(h), (s = this.mm(h)) != -1 && (o = this.mm(i), this.jh.S(s, 1, o), this.Gt(i, s), this.Gt(h, -1));
        }, t.prototype.IX = function(i) {
          function h(M, A) {
            return o.HO(M, A);
          }
          var s = new e.ia(0);
          s.Jb(10);
          for (var o = this, a = this.Re; a != -1; a = this.Rf(a)) {
            s.clear(!1);
            var u = this.Me(a);
            if (u != -1) {
              var c = u;
              do
                s.add(c), c = this.jc(this.xa(c));
              while (c != u);
              if (1 < s.size) {
                if (c = !0, 2 < s.size) s.Vd(0, s.size, h), s.add(s.get(0));
                else if (0 < this.GO(s.get(0), s.get(1))) {
                  var l = s.get(0);
                  s.set(0, s.get(1)), s.set(1, l);
                } else c = !1;
                for (var p = l = s.get(0), y = this.uf(p), d = this.xa(p), g = -1, b = 1, x = s.size; b < x; b++) {
                  var m = s.get(b), w = this.xa(m), j = this.jk(w);
                  if (j == y && m != p) {
                    if (i == 0) g = this.LF(p) | this.LF(m), this.$w(p, g), this.$w(d, g), this.Kb(p, this.ae, this.Ab(p, this.ae) | this.Ab(m, this.ae)), this.Kb(d, this.ae, this.Ab(d, this.ae) | this.Ab(w, this.ae));
                    else if (this.cg != -1) g = this.Ab(p, this.cg) + this.Ab(m, this.cg), w = this.Ab(d, this.cg) + this.Ab(w, this.cg), this.Kb(p, this.cg, g), this.Kb(d, this.cg, w);
                    else {
                      if (i == 7) return void (this.Ni = new e.Md(5, a, -1));
                      this.xg != -1 && (g = this.Ab(p, this.xg) + this.Ab(m, this.xg), w = this.Ab(d, this.xg) + this.Ab(w, this.xg), this.Kb(p, this.xg, g), this.Kb(d, this.xg, w));
                    }
                    this.VT(p, m), this.Ly(m), g = p, s.set(b, -1), m == l && (s.set(0, -1), l = -1);
                  } else this.yx(g, !1), g = -1, p = m, y = j, d = w;
                }
                if (this.yx(g, !1), g = -1, c) {
                  for (l = -1, b = 0, x = s.size; b < x; b++) if ((m = s.get(b)) != -1) {
                    if (l == -1) p = l = m, y = this.uf(p), d = this.xa(p);
                    else if (m != p && (w = this.xa(m), j = this.jk(w), this.Sl(d, m), this.Tl(m, d), p = m, y = j, d = w, i == 7 && (this.Ab(m, this.ae) | this.Ab(this.te(m), this.ae)) == (1 | this.Go))) return void (this.Ni = new e.Md(5, a, -1));
                  }
                  this.mn(a, l);
                } else {
                  for (l = -1, b = 0, x = s.size; b < x; b++) if ((m = s.get(b)) != -1) {
                    l = m;
                    break;
                  }
                  u != l && this.mn(a, l);
                }
              }
            }
          }
        }, t.prototype.WN = function() {
          for (var i = -1, h = this.$g(), s = this.Re; s != -1; s = this.Rf(s)) {
            var o = this.Me(s);
            if (o != -1) {
              var a = o;
              do {
                if (this.Ab(a, h) != 1) {
                  var u = this.mI();
                  this.Dt(u, a), this.BJ(u, i), i != -1 && this.DJ(i, u), i = u;
                  var c = 0, l = a;
                  do
                    c |= this.Ab(l, this.ae), this.$W(l, u), this.Kb(l, h, 1), l = this.jc(l);
                  while (l != a);
                  this.Vg(u, c);
                }
                a = this.jc(this.xa(a));
              } while (a != o);
            }
          }
          u = this.mI(), this.Dt(u, -1), this.BJ(u, i), i != -1 && this.DJ(i, u), this.Hl = u, this.Yn = e.be.qf(this.ye.size, NaN), this.kA = e.be.qf(this.ye.size, NaN), this.AJ(this.Hl, 1 / 0), this.CJ(this.Hl, 1 / 0), this.Jg(h);
        }, t.prototype.sR = function(i, h, s) {
          if ((h = h != -1 ? h : this.Me(i)) == -1) return -1;
          for (i = h; ; ) {
            if (this.Ab(h, s) != 1) return h;
            if ((h = this.jc(this.xa(h))) == i) return -1;
          }
        }, t.prototype.yW = function() {
          for (var i = this.$g(), h = this.Re; h != -1; h = this.Rf(h)) for (var s = -1; ; ) {
            var o = this.sR(h, s, i);
            if (o == -1) break;
            s = this.jc(this.xa(o));
            for (var a = o; ; ) {
              var u = this.jc(a), c = this.te(a), l = this.xa(a);
              if (c == l) {
                if (this.IP(a), s != a && s != l || (s = -1), a == o || c == o) {
                  if (a == (o = u) || c == o) break;
                  a = u;
                  continue;
                }
              } else this.Kb(a, i, 1);
              if ((a = u) == o) break;
            }
          }
          this.Jg(i);
        }, t.prototype.MB = function(i, h, s, o, a) {
          this.Ug(), this.gH = a, this.g = i, this.Bq = this.g.aF(), (i = new e.ia(0)).Jb(s != null ? this.g.I(s.get(0)) : this.g.fd);
          var u = 0, c = 1, l = s != null ? s.get(0) : this.g.ld;
          for (a = 1; l != -1; ) {
            this.g.HJ(l, this.Bq, c), c <<= 1;
            for (var p = this.g.Ob(l); p != -1; p = this.g.Rb(p)) for (var y = this.g.Xa(p), d = 0, g = this.g.Ja(p); d < g; d++) i.add(y), y = this.g.U(y);
            e.aa.Rn(this.g.ic(l)) || (u += this.g.da(l)), s != null ? (l = a < s.size ? s.get(a) : -1, a++) : l = this.g.ue(l);
          }
          for (this.Go = c, this.wa = i.size, this.g.nx(i, this.wa), this.jh == null && (this.jh = new e.$c(2), this.ge = new e.$c(8), this.Kc = new e.$c(8), this.ye = new e.$c(8)), this.jh.De(this.wa), e.mp.zp(o), this.ge.De(this.wa + 10), this.Kc.De(2 * this.wa + 32), this.ye.De(Math.max(32, u)), this.Cm = this.g.Gd(), s = new e.h(), a = 0, u = new e.h(), s.Rc(), c = 0; c <= this.wa; c++) if (c < this.wa ? (y = i.get(c), this.g.D(y, u)) : u.Rc(), !s.qb(u)) {
            if (a < c) {
              for (y = this.Ym(), g = d = -1; a < c; a++) g = i.get(a), this.g.Ra(g, this.Cm, y), l = this.jh.Ce(), this.jh.S(l, 0, g), this.jh.S(l, 1, d), d = l, p = this.g.bd(g), l = this.g.Qf(p), l = this.La(l), this.SW(y, this.xd(y) | l);
              this.TW(y, d), this.cr(y, this.g.Ua(g)), this.Os != -1 && this.iX(this.Os, y), this.lX(y, this.Os), this.Os = y, this.Re == -1 && (this.Re = y);
            }
            a = c, s.L(u);
          }
          e.mp.zp(o), this.ae = this.$g(), h == 5 && (this.cg = this.$g()), h == 4 && (this.xg = this.$g()), this.vP(h, i), this.Ni.Jj == 0 && (this.IX(h), this.Ni.Jj == 0 && (isNaN(this.lA) || this.xO() ? (this.WN(), this.Ni.Jj == 0 && (this.Jg(this.ae), this.ae = -1, this.gH && this.PU(h, o))) : this.pA = !0));
        }, t.prototype.Ly = function(i) {
          var h = this.jc(i), s = this.te(i), o = this.xa(i), a = this.jc(o), u = this.te(o);
          h != o && (this.Sl(u, h), this.Tl(h, u)), s != o && (this.Sl(s, a), this.Tl(a, s)), s = this.jk(i), this.Me(s) == i && (a != i ? this.mn(s, a) : this.mn(s, -1)), a = this.jk(o), this.Me(a) == o && (h != o ? this.mn(a, h) : this.mn(a, -1)), this.Kc.jd(i), this.Kc.jd(o);
        }, t.prototype.OF = function(i, h) {
          for (; ; ) {
            if ((h = i.we(h)) == -1) return -1;
            var s = i.ja(h);
            if (this.$e(s) != this.$e(this.xa(s))) return s;
          }
        }, t.prototype.dr = function(i, h) {
          var s;
          s === void 0 && (s = !0), this.MB(i, 0, null, h, s);
        }, t.prototype.vJ = function(i, h, s) {
          var o = new e.ia(0);
          o.add(h), this.MB(i, 4, o, s, i.ic(h) == 1736);
        }, t.prototype.wJ = function(i, h, s) {
          var o = new e.ia(0);
          o.add(h), this.MB(i, 5, o, s, !0);
        }, t.prototype.Ug = function() {
          this.g != null && (this.Bq != -1 && (this.g.xW(this.Bq), this.Bq = -1), this.Cm != -1 && (this.g.Td(this.Cm), this.Cm = -1), this.Cq != -1 && (this.g.Td(this.Cq), this.Cq = -1), this.ae != -1 && (this.Jg(this.ae), this.ae = -1), this.cg != -1 && (this.Jg(this.cg), this.cg = -1), this.xg != -1 && (this.Jg(this.xg), this.xg = -1), this.g = null, this.ge.mj(!0), this.jh.mj(!0), this.Os = this.Re = -1, this.Kc != null && this.Kc.mj(!0), this.Gi != null && (this.Gi.length = 0), this.Di != null && (this.Di.length = 0), this.hH != null && (this.hH.length = 0), this.ye != null && this.ye.mj(!0), this.Hl = -1, this.Yn = null);
        }, t.prototype.Me = function(i) {
          return this.ge.T(i, 2);
        }, t.prototype.D = function(i, h) {
          this.g.dG(this.eR(i), h);
        }, t.prototype.xd = function(i) {
          return this.ge.T(i, 1);
        }, t.prototype.Rf = function(i) {
          return this.ge.T(i, 4);
        }, t.prototype.cz = function(i) {
          return this.ge.T(i, 6);
        }, t.prototype.km = function(i) {
          return this.ge.T(i, 7);
        }, t.prototype.js = function(i) {
          return this.jh.T(i, 1);
        }, t.prototype.tj = function(i) {
          return this.jh.T(i, 0);
        }, t.prototype.ng = function(i, h) {
          return (h = this.Di[h]).size <= i ? -1 : h.read(i);
        }, t.prototype.nn = function(i, h, s) {
          (h = this.Di[h]).size <= i && h.resize(this.ge.size, -1), h.write(i, s);
        }, t.prototype.Dp = function() {
          this.Di == null && (this.Di = []);
          for (var i = e.ia.qf(this.ge.Hg, -1), h = 0, s = this.Di.length; h < s; h++) if (this.Di[h] == null) return this.Di[h] = i, h;
          return this.Di.push(i), this.Di.length - 1;
        }, t.prototype.Ep = function(i) {
          this.Di[i] = null;
        }, t.prototype.jk = function(i) {
          return this.Kc.T(i, 1);
        }, t.prototype.uf = function(i) {
          return this.jk(this.xa(i));
        }, t.prototype.xa = function(i) {
          return this.Kc.T(i, 4);
        }, t.prototype.te = function(i) {
          return this.Kc.T(i, 5);
        }, t.prototype.jc = function(i) {
          return this.Kc.T(i, 6);
        }, t.prototype.$e = function(i) {
          return this.Kc.T(i, 2);
        }, t.prototype.af = function(i) {
          return this.hk(this.Kc.T(i, 2));
        }, t.prototype.mm = function(i) {
          return this.Kc.T(i, 7);
        }, t.prototype.Yr = function(i, h) {
          this.D(this.jk(i), h);
        }, t.prototype.lm = function(i, h) {
          this.D(this.uf(i), h);
        }, t.prototype.dh = function(i) {
          return this.Kc.T(i, 3) & this.bO;
        }, t.prototype.Ab = function(i, h) {
          return (h = this.Gi[h]).size <= i ? -1 : h.read(i);
        }, t.prototype.Kb = function(i, h, s) {
          (h = this.Gi[h]).size <= i && h.resize(this.Kc.size, -1), h.write(i, s);
        }, t.prototype.$g = function() {
          this.Gi == null && (this.Gi = []);
          for (var i = e.ia.qf(this.Kc.Hg, -1), h = 0, s = this.Gi.length; h < s; h++) if (this.Gi[h] == null) return this.Gi[h] = i, h;
          return this.Gi.push(i), this.Gi.length - 1;
        }, t.prototype.Jg = function(i) {
          this.Gi[i] = null;
        }, t.prototype.IP = function(i) {
          var h = this.$e(i), s = this.xa(i), o = this.jc(i);
          o == s && (o = this.jc(o)) == i && (o = -1);
          var a = this.AF(h);
          a !== i && a != s || this.Dt(h, o), s = this.Yn.read(h), isNaN(s) || (this.AJ(h, NaN), this.CJ(h, NaN)), this.yx(i, !0), this.Ly(i);
        }, t.prototype.JP = function(i) {
          for (var h = 0, s = i.size; h < s; h++) {
            var o = i.get(h), a = this.$e(this.xa(o));
            this.Dt(this.$e(o), -1), this.Dt(a, -1), this.yx(o, !0), this.Ly(o);
          }
        }, t.prototype.AF = function(i) {
          return this.ye.T(i, 1);
        }, t.prototype.hk = function(i) {
          return this.ye.T(i, 2);
        }, t.prototype.Gn = function(i) {
          return this.ye.T(i, 3);
        }, t.prototype.dR = function(i) {
          return this.ye.T(i, 4);
        }, t.prototype.Kp = function(i) {
          var h = this.Yn.read(i);
          return isNaN(h) && (this.kY(i), h = this.Yn.read(i)), h;
        }, t.prototype.La = function(i) {
          return this.g.KF(i, this.Bq);
        }, t.prototype.Le = function(i) {
          return this.g.Pa(i, this.Cm);
        }, t.prototype.uR = function(i) {
          return this.g.Pa(i, this.Cq);
        }, t.prototype.tR = function(i, h) {
          var s = this.Me(i);
          if (s == -1) return -1;
          var o = s, a = -1, u = -1;
          do {
            if (this.uf(o) == h) return o;
            if (a == -1) {
              if ((a = this.Me(h)) == -1) break;
              u = a;
            }
            if (this.uf(u) == i) return this.xa(u);
            o = this.jc(this.xa(o)), u = this.jc(this.xa(u));
          } while (o != s && u != a);
          return -1;
        }, t.prototype.pB = function(i, h) {
          h.Or(), h = h.get();
          var s = new e.h();
          this.Yr(i, s), h.Dc(s), this.lm(i, s), h.Qc(s);
        }, t.prototype.HO = function(i, h) {
          if (i == h) return 0;
          var s = new e.h();
          this.lm(i, s);
          var o = new e.h();
          return this.lm(h, o), s.qb(o) ? 0 : (h = new e.h(), this.Yr(i, h), (i = new e.h()).uc(s, h), (s = new e.h()).uc(o, h), e.h.nu(i, s));
        }, t.prototype.GO = function(i, h) {
          if (i == h) return 0;
          var s = new e.h();
          this.lm(i, s);
          var o = new e.h();
          return this.lm(h, o), s.qb(o) ? 0 : (h = new e.h(), this.Yr(i, h), (i = new e.h()).uc(s, h), (s = new e.h()).uc(o, h), 0 <= s.y && 0 < i.y ? e.h.nu(i, s) : 0);
        }, t.prototype.xO = function() {
          for (var i = e.lc.ox(this.lA), h = new e.h(), s = new e.h(), o = new e.h(), a = new e.h(), u = new e.h(), c = this.Re; c != -1; c = this.Rf(c)) {
            var l = this.Me(c);
            if (l != -1) {
              var p = l;
              this.Yr(p, h), this.lm(p, s), u.uc(s, h);
              var y = u.Sk();
              do {
                var d = p;
                if ((p = this.jc(this.xa(p))) != d) {
                  this.lm(p, o), a.uc(o, h), d = a.Sk();
                  var g = a.wi(u);
                  if (g * g / (d * y) * Math.min(d, y) <= i) return !1;
                  u.L(a), y = d, s.L(o);
                }
              } while (p != l);
            }
          }
          return !0;
        }, t;
      }(), e.iu = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
          this.j = null, this.oH = new e.h(), this.pH = new e.h(), this.Gj = null, this.Mv = !1, this.tl = -1;
        }
        return f.prototype.cf = function(r) {
          return r < this.Gj.length && this.Gj[r];
        }, f.prototype.dl = function(r, n, t, i) {
          var h = e.aa.tf(this.j.g.ic(t));
          if (e.aa.tf(this.j.g.ic(n)) != 2 || h != 1) throw e.i.Qa();
          this.FP(r, n, t, i);
        }, f.prototype.dr = function(r, n) {
          this.j == null && (this.j = new e.iu()), this.j.dr(r, n);
        }, f.prototype.Ft = function(r, n, t) {
          for (e.Tk.V(r, n, t, !0), n = r.ld; n != -1; n = r.ue(n)) r.ic(n) == 1736 && e.rn.V(r, n, -1, this.Mv, t);
          this.dr(r, t);
        }, f.prototype.ME = function(r, n, t, i, h) {
          var s = this.j.g;
          if (s.ic(r) == 1736) for (r = s.Ob(r); r != -1; r = s.Rb(r)) {
            var o = s.Xa(r);
            this.j.Le(o), this.j.Le(s.U(o));
            var a = this.j.uR(o);
            if (a != -1) {
              var u = this.j.Ab(a, t);
              if (u != 1 && u != 2) if (this.cf(this.j.af(a))) {
                this.j.Kb(a, t, 1), u = s.vf(n, -1);
                var c = a, l = this.j.Le(o), p = 1;
                do {
                  var y = this.sm(o, h);
                  s.ij(u, y), i != -1 && this.j.nn(l, i, 1), this.j.Kb(c, t, 1), c = this.j.jc(c);
                  do
                    var d = (y = p == 1 ? s.U(o) : s.Ma(o)) != -1 ? this.j.Le(y) : -1;
                  while (d == l);
                  var g = this.j.jk(c);
                  if (g != d) {
                    do
                      d = (y = p == 1 ? s.Ma(o) : s.U(o)) != -1 ? this.j.Le(y) : -1;
                    while (d == l);
                    g != d ? (d = g, y = this.j.tj(this.j.km(d))) : p = -p;
                  }
                  l = d, o = y;
                } while (c != a);
                s.kn(u, !0);
              } else this.j.Kb(a, t, 2);
            }
          }
        }, f.prototype.eF = function() {
          for (var r = this.j.$g(), n = new e.ia(0), t = this.j.Re; t != -1; t = this.j.Rf(t)) {
            var i = this.j.Me(t), h = i;
            if (i != -1) do {
              if (this.j.Ab(h, r) != 1) {
                var s = this.j.xa(h);
                this.j.Kb(s, r, 1), this.j.Kb(h, r, 1), this.cf(this.j.af(h)) && this.cf(this.j.af(s)) && n.add(h);
              }
              h = this.j.jc(this.j.xa(h));
            } while (h != i);
          }
          this.j.Jg(r), this.j.JP(n);
        }, f.prototype.sm = function(r, n) {
          return n == -1 ? r : this.aS(r, n);
        }, f.prototype.aS = function(r, n) {
          var t = this.j.g, i = this.j.km(this.j.Le(r));
          do {
            var h = this.j.tj(i);
            if (t.Qf(t.bd(h)) == n) return h;
            i = this.j.js(i);
          } while (i != -1);
          return r;
        }, f.prototype.Ot = function(r, n, t) {
          this.eF();
          var i = this.j.g, h = i.Ig(1736), s = this.j.$g();
          return this.uK(r, n, h, t, s, -1), this.j.Jg(s), e.rn.V(i, h, 1, this.Mv, null), h;
        }, f.prototype.uK = function(r, n, t, i, h, s) {
          for (this.ME(r, t, h, s, i), n != -1 && this.ME(n, t, h, s, i), r = this.j.g, n = this.j.Re; n != -1; n = this.j.Rf(n)) {
            var o = this.j.Me(n);
            if (o != -1) {
              var a = o;
              do {
                var u = this.j.Ab(a, h);
                if (u != 1 && u != 2) if (this.cf(this.j.af(a))) {
                  u = r.vf(t, -1);
                  var c = a;
                  do {
                    var l = this.j.mm(c);
                    l != -1 ? l = this.j.tj(l) : (l = this.j.tj(this.j.mm(this.j.xa(c))), l = this.j.g.U(l)), l = this.sm(l, i), r.ij(u, l), this.j.Kb(c, h, 1), s != -1 && (l = this.j.Le(l), this.j.nn(l, s, 1)), c = this.j.jc(c);
                  } while (c != a);
                  r.kn(u, !0);
                } else this.j.Kb(a, h, 2);
                a = this.j.jc(this.j.xa(a));
              } while (a != o);
            }
          }
        }, f.prototype.aY = function(r, n, t) {
          var i = this.j.g, h = i.Ig(1736), s = i.Ig(1607), o = i.Ig(550);
          this.eF();
          var a = -1, u = this.j.$g(), c = this.j.Dp();
          for (this.uK(r, n, h, t, u, c), r = this.j.Re; r != -1; r = this.j.Rf(r)) if ((n = this.j.Me(r)) != -1) {
            var l = n;
            do {
              var p = this.j.Ab(l, u), y = this.j.Ab(this.j.xa(l), u);
              if ((p |= y) == 2) if (p = this.j.dh(l), this.cf(p)) {
                var d = i.vf(s, -1), g = l;
                p = this.Yw(r, i), p = this.sm(p, t), i.ij(d, p), this.j.nn(r, c, 1);
                do {
                  if (p = this.j.uf(g), y = this.Yw(p, i), y = this.sm(y, t), i.ij(d, y), this.j.Kb(g, u, 1), this.j.Kb(this.j.xa(g), u, 1), this.j.nn(p, c, 1), g = this.j.jc(g), p = this.j.Ab(g, u), (p |= y = this.j.Ab(this.j.xa(g), u)) != 2) break;
                  if (p = this.j.dh(g), !this.cf(p)) {
                    this.j.Kb(g, u, 1), this.j.Kb(this.j.xa(g), u, 1);
                    break;
                  }
                } while (g != l);
              } else this.j.Kb(l, u, 1), this.j.Kb(this.j.xa(l), u, 1);
              l = this.j.jc(this.j.xa(l));
            } while (l != n);
          }
          for (r = this.j.Re; r != -1; r = this.j.Rf(r)) (p = this.j.ng(r, c)) != 1 && (p = this.j.xd(r), this.cf(p) && (a == -1 && (a = i.vf(o, -1)), (n = this.j.km(r)) != -1 && (n = this.j.tj(n), p = this.sm(n, t), i.ij(a, p))));
          return this.j.Ep(c), this.j.Jg(u), e.rn.V(i, h, 1, this.Mv, null), (t = [])[0] = o, t[1] = s, t[2] = h, t;
        }, f.prototype.Yw = function(r, n) {
          var t = -1;
          for (r = this.j.km(r); r != -1; r = this.j.js(r)) {
            var i = this.j.tj(r);
            t == -1 && (t = i);
            var h = this.j.La(n.Qf(n.bd(i)));
            if (this.cf(h)) {
              t = i;
              break;
            }
          }
          return t;
        }, f.prototype.lB = function(r, n) {
          for (var t = this.jl(n), i = this.j.jk(n), h = this.j.uf(n), s = 0, o = 0, a = this.j.km(i); a != -1; a = this.j.js(a)) {
            var u = this.j.tj(a), c = r.bd(u), l = this.j.La(r.Qf(c));
            c = r.Xa(c), (l = (l & t) != 0) && c == u && (this.tl = n);
            var p = r.U(u);
            p != -1 && this.j.Le(p) == h ? (s++, l && (this.tl === -1 && c == p && (u = this.j.jc(n), this.cf(this.jl(u)) && (this.tl = u)), o++)) : (u = r.Ma(u)) != -1 && this.j.Le(u) == h && (s--, l && (this.tl === -1 && c === u && (u = this.j.jc(n), this.cf(this.jl(u)) && (this.tl = u)), o--));
          }
          return this.j.D(i, this.oH), this.j.D(h, this.pH), (o != 0 ? o : s) * (r = e.h.tb(this.oH, this.pH));
        }, f.prototype.jl = function(r) {
          return this.j.dh(r) | this.j.af(r) | this.j.af(this.j.xa(r));
        }, f.prototype.xK = function(r) {
          for (var n = this.j.xa(this.j.te(r)), t = -1; n != r; ) {
            if (this.cf(this.jl(n))) {
              if (t != -1) return -1;
              t = n;
            }
            n = this.j.xa(this.j.te(n));
          }
          return t != -1 ? this.j.xa(t) : -1;
        }, f.prototype.yK = function(r) {
          for (var n = this.j.xa(this.j.jc(r)), t = -1; n != r; ) {
            if (this.cf(this.jl(n))) {
              if (t != -1) return -1;
              t = n;
            }
            n = this.j.xa(this.j.jc(n));
          }
          return t != -1 ? this.j.xa(t) : -1;
        }, f.prototype.mJ = function(r, n, t, i, h) {
          var s = this.j.g, o = r, a = this.j.xa(o);
          this.j.Kb(o, t, 1), this.j.Kb(a, t, 1), this.tl = -1;
          for (var u = this.lB(s, o), c = o, l = -1, p = !1, y = 1; ; ) {
            var d = this.j.te(o);
            if (d == a) break;
            if (a = this.j.jc(a), this.j.xa(d) != a) {
              if ((o = this.xK(o)) == -1) {
                p = !0;
                break;
              }
              a = this.j.xa(o);
            } else o = d;
            if (o == r) {
              l = r;
              break;
            }
            if (d = this.jl(o), !this.cf(d)) break;
            this.j.Kb(o, t, 1), this.j.Kb(a, t, 1), c = o, u += this.lB(s, o), y++;
          }
          if (l == -1) for (o = r, a = this.j.xa(o), l = o; (r = this.j.jc(o)) != a; ) {
            if (a = this.j.te(a), this.j.xa(r) != a) {
              if ((o = this.yK(o)) == -1) {
                p = !0;
                break;
              }
              a = this.j.xa(o);
            } else o = r;
            if (d = this.jl(o), !this.cf(d)) break;
            this.j.Kb(o, t, 1), this.j.Kb(a, t, 1), l = o, u += this.lB(s, o), y++;
          }
          else if (this.tl != -1 && (c = this.tl, l = this.j.te(this.tl), this.j.xa(l) != this.j.jc(this.j.xa(c)) && (l = this.xK(c)) == -1)) throw e.i.Qa();
          for (0 <= u || (o = l, l = this.j.xa(c), c = this.j.xa(o)), t = s.vf(n, -1), o = c, c = this.j.jk(c), p = this.j.uf(l) == c && p, u = this.Yw(c, s), u = this.sm(u, h), s.ij(t, u), i != -1 && this.j.nn(c, i, 1), c = 0, y = p ? e.O.truncate((y + 1) / 2) : -1; r = this.j.uf(o), u = this.Yw(r, s), u = this.sm(u, h), s.ij(t, u), c++, i != -1 && this.j.nn(r, i, 1), p && c == y && (t = s.vf(n, -1), s.ij(t, u)), o != l; ) if (r = this.j.jc(o), this.j.te(this.j.xa(o)) != this.j.xa(r)) {
            if ((o = this.yK(o)) == -1) throw e.i.Qa();
          } else o = r;
        }, f.prototype.Pt = function(r) {
          for (var n = this.j.g.Ig(1607), t = this.j.$g(), i = this.j.Re; i != -1; i = this.j.Rf(i)) {
            var h = this.j.Me(i), s = h;
            do
              this.j.Ab(s, t) != 1 && this.cf(this.jl(s)) && this.mJ(s, n, t, -1, r), s = this.j.jc(this.j.xa(s));
            while (s != h);
          }
          return this.j.Jg(t), n;
        }, f.prototype.bY = function(r) {
          for (var n = this.j.g, t = n.Ig(1607), i = n.Ig(550), h = this.j.$g(), s = this.j.Dp(), o = -1, a = this.j.Re; a != -1; a = this.j.Rf(a)) {
            var u = this.j.Me(a), c = u;
            do {
              var l = this.j.Ab(c, h);
              l != 1 && (l = this.jl(c), this.cf(l) && this.mJ(c, t, h, s, r)), c = this.j.jc(this.j.xa(c));
            } while (c != u);
          }
          for (a = this.j.Re; a != -1; a = this.j.Rf(a)) (l = this.j.ng(a, s)) != 1 && (l = this.j.xd(a), this.cf(l) && (o == -1 && (o = n.vf(i, -1)), (u = this.j.km(a)) != -1 && (u = this.j.tj(u), u = this.sm(u, r), n.ij(o, u))));
          return this.j.Jg(h), this.j.Ep(s), (r = [])[0] = i, r[1] = t, r;
        }, f.prototype.mr = function() {
          for (var r = this.j.g, n = r.Ig(550), t = r.vf(n, -1), i = this.j.Re; i != -1; i = this.j.Rf(i)) if (this.cf(this.j.xd(i))) {
            for (var h = -1, s = this.j.km(i); s != -1; s = this.j.js(s)) {
              var o = this.j.tj(s);
              h == -1 && (h = o);
              var a = this.j.La(r.Qf(r.bd(o)));
              if (this.cf(a)) {
                h = o;
                break;
              }
            }
            r.ij(t, h);
          }
          return n;
        }, f.prototype.bq = function(r) {
          this.Gj = [];
          for (var n = 0; n < r; n++) this.Gj[n] = !1;
        }, f.aW = function(r, n, t) {
          var i = r.Ia(), h = Array(1e3);
          e.O.$u(h, null);
          var s = e.O.lg(1e3, 0), o = r.I(), a = !0, u = n.Db() == 2;
          if (n.Db() != 1 && n.Db() != 2) throw e.i.Qa();
          for (var c = 0; c < o; ) {
            var l = e.O.truncate(r.lW(h, c) - c);
            u ? e.hd.sK(n, h, l, t, s) : e.hd.tK(n, h, l, t, s);
            for (var p = 0, y = 0; y < l; y++) s[y] == 0 && (a && (a = !1, i.Fd(r, 0, c)), p != y && i.Fd(r, c + p, c + y), p = y + 1);
            a || p == l || i.Fd(r, c + p, c + l), c += l;
          }
          return a ? r : i;
        }, f.zG = function(r, n, t) {
          return r instanceof e.de ? f.aW(r, n, t) : n instanceof e.Sa ? r.B() || n.B() ? r.Ia() : e.Tk.zU(t, r, n) ? e.Tk.CO(r, n) : r.Ia() : f.bW(r, n, t);
        }, f.Av = function(r, n, t, i) {
          var h = new e.l();
          r.A(h);
          var s = new e.l();
          n.A(s);
          var o = new e.l();
          if (o.K(h), o.Zb(s), t = e.ta.Wd(t, o, !0), (o = new e.l()).K(s), s = e.ta.Er(t), o.W(s, s), !h.isIntersecting(o)) {
            if (r.Db() <= n.Db()) return f.ki(f.Xe(r.Ia()), r, "&");
            if (r.Db() > n.Db()) return f.ki(f.Xe(n.Ia()), r, "&");
          }
          return s = new f(), o = (h = new e.gd()).Ib(f.Xe(r)), n = h.Ib(f.Xe(n)), s.Ft(h, t, i), i = s.Av(o, n), r = f.ki(h.Ne(i), r, "&"), e.aa.Hc(r.getType()) && (r.Ch(2, t), r.getType() == 1736 && r.fm()), r;
        }, f.bW = function(r, n, t) {
          if (r.B() || n.B()) return r.Ia();
          var i = [null], h = [0], s = n.Db() == 2;
          if (n.Db() != 1 && n.Db() != 2) throw e.i.Qa();
          return i[0] = r.D(), s ? e.hd.sK(n, i, 1, t, h) : e.hd.tK(n, i, 1, t, h), h[0] == 0 ? r.Ia() : r;
        }, f.prototype.LU = function(r, n, t, i, h) {
          if (r.B()) return r;
          var s = new e.gd();
          return r = s.Ib(r), this.Mk(s, r, n, t, i, h);
        }, f.prototype.NU = function(r, n, t, i, h, s) {
          if (h && r.ic(n) != 550) {
            var o = new e.RC();
            o.TX(r, t), o.Ng ? (e.Tk.V(r, t, s, !0), h = !1) : this.j.yy(t);
          } else e.Tk.V(r, t, s, !0), h = !1;
          if (i && r.ic(n) != 550 ? this.j.wJ(r, n, s) : this.j.vJ(r, n, s), this.j.pA) return this.j.Ug(), this.j = null, this.Mk(r, n, t, i, !1, s);
          if (this.j.yy(NaN), s = this.j.La(n), this.bq(s + 1), this.Gj[s] = !0, r.ic(n) == 1736 || i && r.ic(n) != 550) return r.Yo(n, 0), n = this.Ot(n, -1, -1), (r = r.Ne(n)).Yo(0), h ? r.Ch(1, 0) : (r.Ch(2, t), r.fm()), r;
          if (r.ic(n) == 1607) return n = this.Pt(-1), r = r.Ne(n), h || r.Ch(2, t), r;
          if (r.ic(n) == 550) return n = this.mr(), r = r.Ne(n), h || r.Ch(2, t), r;
          throw e.i.Qa();
        }, f.prototype.Mk = function(r, n, t, i, h, s) {
          this.j = new e.iu();
          try {
            return this.NU(r, n, t, i, h, s);
          } finally {
            this.j.Ug();
          }
        }, f.Mk = function(r, n, t, i, h) {
          return new f().LU(r, n, t, i, h);
        }, f.prototype.MU = function(r, n, t, i) {
          this.Mv = r, this.j = new e.iu(), r = n.In(t);
          var h = n.ic(t);
          if (r != 1 || h == 550 ? this.j.vJ(n, t, i) : this.j.wJ(n, t, i), !this.j.pA) if (this.j.yy(NaN), i = this.j.La(t), this.bq(i + 1), this.Gj[i] = !0, n.ic(t) == 1736 || r == 1 && n.ic(t) != 550) n.Yo(t, 0), i = this.Ot(t, -1, -1), n.hC(i, t), n.BB(i);
          else if (n.ic(t) == 1607) i = this.Pt(-1), n.hC(i, t), n.BB(i);
          else {
            if (n.ic(t) != 550) throw e.i.fa("internal error");
            i = this.mr(), n.hC(i, t), n.BB(i);
          }
        }, f.prototype.im = function(r, n) {
          var t = e.aa.tf(this.j.g.ic(r)), i = e.aa.tf(this.j.g.ic(n));
          if (t > i) return r;
          var h = this.j.La(r), s = this.j.La(n);
          if (this.bq(1 + (h | s)), this.Gj[this.j.La(r)] = !0, t == 2 && i == 2) return this.Ot(r, n, -1);
          if (t == 1 && i == 2 || t == 1 && i == 1) return this.Pt(-1);
          if (t == 0) return this.mr();
          throw e.i.Qa();
        }, f.prototype.Av = function(r, n) {
          var t = e.aa.tf(this.j.g.ic(r)), i = e.aa.tf(this.j.g.ic(n)), h = this.j.La(r), s = this.j.La(n);
          if (this.bq(1 + (h | s)), this.Gj[this.j.La(r) | this.j.La(n)] = !0, h = -1, 1 < this.j.g.ht.Aa && (h = r), t == 2 && i == 2) return this.Ot(r, n, h);
          if (t == 1 && 0 < i || i == 1 && 0 < t) return this.Pt(h);
          if (t == 0 || i == 0) return this.mr();
          throw e.i.Qa();
        }, f.prototype.Pz = function(r, n) {
          var t = e.aa.tf(this.j.g.ic(r)), i = e.aa.tf(this.j.g.ic(n)), h = this.j.La(r), s = this.j.La(n);
          if (this.bq(1 + (h | s)), this.Gj[this.j.La(r) | this.j.La(n)] = !0, h = -1, 1 < this.j.g.ht.Aa && (h = r), t == 2 && i == 2) return this.aY(r, n, h);
          if (t == 1 && 0 < i || i == 1 && 0 < t) return this.bY(h);
          if (t == 0 || i == 0) return (r = [])[0] = this.mr(), r;
          throw e.i.Qa();
        }, f.prototype.ep = function(r, n) {
          var t = e.aa.tf(this.j.g.ic(r)), i = e.aa.tf(this.j.g.ic(n)), h = this.j.La(r), s = this.j.La(n);
          if (this.bq(1 + (h | s)), this.Gj[this.j.La(r)] = !0, this.Gj[this.j.La(n)] = !0, t == 2 && i == 2) return this.Ot(r, n, -1);
          if (t == 1 && i == 1) return this.Pt(-1);
          if (t == 0 && i == 0) return this.mr();
          throw e.i.Qa();
        }, f.Xe = function(r) {
          var n = r.getType();
          return n == 197 ? (n = new e.Da(r.description), r.B() || n.ad(r, !1), n) : n == 33 ? (n = new e.de(r.description), r.B() || n.add(r), n) : n == 322 ? (n = new e.Ta(r.description), r.B() || n.oc(r, !0), n) : r;
        }, f.ki = function(r, n, t) {
          var i = r.getType();
          return i == 197 ? (n = new e.Da(r.description), r.B() || n.ad(r, !1), n) : i != 33 || t != "|" && t != "^" ? i == 322 ? (n = new e.Ta(r.description), r.B() || n.oc(r, !0), n) : i == 33 && t == "-" && n.getType() == 33 || i == 550 && t == "&" && n.getType() == 33 ? (n = new e.Sa(r.description), r.B() || r.ve(0, n), n) : r : (n = new e.de(r.description), r.B() || n.add(r), n);
        }, f.im = function(r, n, t, i) {
          if (r.B() || n.B() || r.Db() > n.Db()) return f.ki(f.Xe(r), r, "-");
          var h = new e.l();
          r.A(h);
          var s = new e.l();
          if (n.A(s), !h.isIntersecting(s)) return f.ki(f.Xe(r), r, "-");
          var o = new e.l();
          return o.K(h), o.Zb(s), t = e.ta.Wd(t, o, !0), s = new f(), o = (h = new e.gd()).Ib(f.Xe(r)), n = h.Ib(f.Xe(n)), s.Ft(h, t, i), i = s.im(o, n), i = h.Ne(i), r = f.ki(i, r, "-"), e.aa.Hc(r.getType()) && (r.Ch(2, t), r.getType() == 1736 && r.fm()), r;
        }, f.VP = function(r, n, t) {
          if (2 > r.length) throw e.i.N("not enough geometries to dissolve");
          for (var i = 0, h = 0, s = r.length; h < s; h++) i = Math.max(r[h].Db(), i);
          var o = new e.l();
          o.Oa();
          var a = new e.gd(), u = -1, c = 0, l = -1;
          for (h = 0, s = r.length; h < s; h++) if (r[h].Db() == i) if (r[h].B()) l == -1 && (l = h);
          else {
            l = h, u == -1 ? u = a.Ib(f.Xe(r[h])) : a.uN(u, f.Xe(r[h]));
            var p = new e.l();
            r[h].xc(p), o.Zb(p), c++;
          }
          return 2 > c ? f.Xe(r[l]) : (r = i == 2, n = e.ta.Wd(i == 0 ? n : null, o, !0), new f().Mk(a, u, n, r, !0, t));
        }, f.Pz = function(r, n, t, i) {
          var h = [null, null, null], s = new e.l();
          r.A(s);
          var o = new e.l();
          n.A(o);
          var a = new e.l();
          if (a.K(s), a.Zb(o), t = e.ta.Wd(t, a, !0), (a = new e.l()).K(o), o = e.ta.Er(t), a.W(o, o), !s.isIntersecting(a)) {
            if (r.Db() <= n.Db()) return h[(r = f.ki(f.Xe(r.Ia()), r, "&")).Db()] = r, h;
            if (r.Db() > n.Db()) return h[(r = f.ki(f.Xe(n.Ia()), r, "&")).Db()] = r, h;
          }
          for (o = new f(), a = (s = new e.gd()).Ib(f.Xe(r)), n = s.Ib(f.Xe(n)), o.Ft(s, t, i), i = o.Pz(a, n), n = 0; n < i.length; n++) o = f.ki(s.Ne(i[n]), r, "&"), e.aa.Hc(o.getType()) && (o.Ch(2, t), o.getType() == 1736 && o.fm()), h[o.Db()] = o;
          return h;
        }, f.ep = function(r, n, t, i) {
          if (r.Db() > n.Db()) return f.ki(f.Xe(r), r, "^");
          if (r.Db() < n.Db() || r.B()) return f.ki(f.Xe(n), r, "^");
          if (n.B()) return f.ki(f.Xe(r), r, "^");
          var h = new e.l();
          r.A(h);
          var s = new e.l();
          n.A(s);
          var o = new e.l();
          return o.K(h), o.Zb(s), t = e.ta.Wd(t, o, !0), s = new f(), o = (h = new e.gd()).Ib(f.Xe(r)), n = h.Ib(f.Xe(n)), s.Ft(h, t, i), i = s.ep(o, n), r = f.ki(h.Ne(i), r, "^"), e.aa.Hc(r.getType()) && (r.Ch(2, t), r.getType() == 1736 && r.fm()), r;
        }, f.prototype.LQ = function(r, n) {
          var t = this.j.g;
          r = t.vf(r, -1);
          for (var i = n.size, h = 0; h < i; h++) {
            var s = n.get(h);
            t.ij(r, s);
          }
          t.kn(r, !0);
        }, f.prototype.aX = function(r, n) {
          for (var t = this.j.g, i = t.ld; i != -1; i = t.ue(i)) if (i == n) for (var h = t.Ob(i); h != -1; h = t.Rb(h)) {
            var s = t.Xa(h);
            if (s != -1) for (var o = t.U(s); o != -1; ) {
              s = this.j.Le(s);
              var a = this.j.Le(o);
              (s = this.j.tR(s, a)) != -1 && (a = this.j.xa(s), this.j.Kb(s, r, 1), this.j.Kb(a, r, 2)), s = o, o = t.U(s);
            }
          }
        }, f.prototype.cW = function(r, n, t, i) {
          t = this.j.La(t), i = this.j.La(i);
          var h = new e.ia(0);
          h.Jb(256);
          for (var s = this.j.g, o = this.j.$g(), a = this.j.Re; a != -1; a = this.j.Rf(a)) {
            var u = this.j.Me(a);
            if (u != -1) {
              var c = u;
              do {
                if (this.j.Ab(c, o) != 1) {
                  var l = c, p = c, y = !1, d = 0;
                  do {
                    if (this.j.Kb(l, o, 1), !y) {
                      var g = this.j.dh(l);
                      g & i && this.j.af(l) & t && (p = l, y = !0);
                    }
                    y && (h.add(this.j.tj(this.j.km(this.j.jk(l)))), r != -1 && (g = this.j.dh(l)) & i && (d |= g = this.j.Ab(l, r))), l = this.j.jc(l);
                  } while (l != p);
                  y && 0 < this.j.Kp(this.j.$e(p)) && (l = s.Ig(1736), this.LQ(l, h), n != -1 && s.HJ(l, n, d)), h.clear(!1);
                }
                c = this.j.jc(this.j.xa(c));
              } while (c != u);
            }
          }
          this.j.Jg(o);
        }, f.prototype.FP = function(r, n, t, i) {
          this.j.yW();
          var h = -1;
          r != -1 && (h = this.j.$g(), this.aX(h, t)), this.cW(h, r, n, t), h != -1 && (this.j.Jg(h), h = -1);
          var s = this.j.g;
          for (r = 0, h = s.ld; h != -1; h = s.ue(h)) h != n && h != t && (i.add(h), r++);
          i.Vd(0, r, function(o, a) {
            return (o = s.wz(s.Ob(o))) < (a = s.wz(s.Ob(a))) ? -1 : o == a ? 0 : 1;
          });
        }, f.prototype.Ug = function() {
          this.j != null && (this.j.Ug(), this.j = null);
        }, f;
      }();
      e.Fg = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f(r) {
          r !== void 0 ? this.setScale(r) : this.RB();
        }
        return f.prototype.lx = function() {
          this.Lb = this.Gb = this.jb = this.eb = this.ab = this.bb = 0;
        }, f.prototype.Nb = function(r) {
          return this == r || r instanceof f && this.bb == r.bb && this.eb == r.eb && this.Gb == r.Gb && this.jb == r.jb && this.ab == r.ab && this.Lb == r.Lb;
        }, f.prototype.cc = function() {
          return e.O.uj(), e.O.uj(), e.O.uj(), e.O.uj(), e.O.uj(), e.O.uj();
        }, f.prototype.Eh = function(r, n) {
          var t = this.jb * r.x + this.ab * r.y + this.Lb;
          n.x = this.bb * r.x + this.eb * r.y + this.Gb, n.y = t;
        }, f.prototype.eY = function(r, n, t) {
          for (var i = 0; i < n; i++) {
            var h = r[i].x, s = r[i].y, o = this.bb * h + this.eb * s + this.Gb;
            h = this.jb * h + this.ab * s + this.Lb, t[i] != null ? t[i].ma(o, h) : t[i] = e.h.construct(o, h);
          }
        }, f.prototype.multiply = function(r) {
          f.multiply(this, r, this);
        }, f.multiply = function(r, n, t) {
          var i = r.bb * n.bb + r.jb * n.eb, h = r.eb * n.bb + r.ab * n.eb, s = r.Gb * n.bb + r.Lb * n.eb + n.Gb, o = r.bb * n.jb + r.jb * n.ab, a = r.eb * n.jb + r.ab * n.ab;
          r = r.Gb * n.jb + r.Lb * n.ab + n.Lb, t.bb = i, t.eb = h, t.Gb = s, t.jb = o, t.ab = a, t.Lb = r;
        }, f.prototype.Of = function() {
          var r = new f();
          return r.bb = this.bb, r.eb = this.eb, r.Gb = this.Gb, r.jb = this.jb, r.ab = this.ab, r.Lb = this.Lb, r;
        }, f.prototype.mC = function(r) {
          if (!r.B()) {
            for (var n = [], t = 0; 4 > t; t++) n[t] = new e.h();
            r.nB(n), this.fY(n, n), r.Zw(n, 4);
          }
        }, f.prototype.fY = function(r, n) {
          for (var t = 0; t < r.length; t++) {
            var i = new e.h(), h = r[t];
            i.x = this.bb * h.x + this.eb * h.y + this.Gb, i.y = this.jb * h.x + this.ab * h.y + this.Lb, n[t] = i;
          }
        }, f.prototype.pS = function(r, n) {
          r.B() || n.B() || r.R() == 0 || r.ca() == 0 ? this.lx() : (this.eb = this.jb = 0, this.bb = n.R() / r.R(), this.ab = n.ca() / r.ca(), this.Gb = n.v - r.v * this.bb, this.Lb = n.G - r.G * this.ab);
        }, f.prototype.dY = function(r) {
          var n = new e.h(), t = new e.h();
          n.ma(this.bb, this.jb), t.ma(this.eb, this.ab), n.sub(n);
          var i = 0.5 * n.Sk();
          return n.ma(this.bb, this.jb), t.ma(this.eb, this.ab), n.add(t), r * (i > (n = 0.5 * n.Sk()) ? Math.sqrt(i) : Math.sqrt(n));
        }, f.prototype.RB = function() {
          this.bb = 1, this.jb = this.Gb = this.eb = 0, this.ab = 1, this.Lb = 0;
        }, f.prototype.isIdentity = function(r) {
          if (r !== void 0) {
            var n = e.h.construct(0, 1);
            return this.Eh(n, n), n.sub(e.h.construct(0, 1)), n.Sk() > r * r ? !1 : (n.ma(0, 0), this.Eh(n, n), !(n.Sk() > r * r) && (n.ma(1, 0), this.Eh(n, n), n.sub(e.h.construct(1, 0)), n.Sk() <= r * r));
          }
          return this.bb == 1 && this.ab == 1 && this.eb == 0 && this.Gb == 0 && this.jb == 0 && this.Lb == 0;
        }, f.prototype.Bi = function(r) {
          return Math.abs(this.bb * this.ab - this.jb * this.eb) <= 2 * r * (Math.abs(this.bb * this.ab) + Math.abs(this.jb * this.eb));
        }, f.prototype.gg = function(r, n) {
          this.bb = 1, this.eb = 0, this.Gb = r, this.jb = 0, this.ab = 1, this.Lb = n;
        }, f.prototype.setScale = function(r, n) {
          n !== void 0 ? (this.bb = r, this.jb = this.Gb = this.eb = 0, this.ab = n, this.Lb = 0) : this.setScale(r, r);
        }, f.prototype.$B = function() {
          this.bb = 0, this.eb = 1, this.Gb = 0, this.jb = 1, this.Lb = this.ab = 0;
        }, f.prototype.setRotate = function(r) {
          this.pX(Math.cos(r), Math.sin(r));
        }, f.prototype.pX = function(r, n) {
          this.bb = r, this.eb = -n, this.Gb = 0, this.jb = n, this.ab = r, this.Lb = 0;
        }, f.prototype.shift = function(r, n) {
          this.Gb += r, this.Lb += n;
        }, f.prototype.scale = function(r, n) {
          this.bb *= r, this.eb *= r, this.Gb *= r, this.jb *= n, this.ab *= n, this.Lb *= n;
        }, f.prototype.flipX = function(r, n) {
          this.bb = -this.bb, this.eb = -this.eb, this.Gb = r + n - this.Gb;
        }, f.prototype.flipY = function(r, n) {
          this.jb = -this.jb, this.ab = -this.ab, this.Lb = r + n - this.Lb;
        }, f.prototype.rotate = function(r) {
          var n = new f();
          n.setRotate(r), this.multiply(n);
        }, f.prototype.inverse = function(r) {
          if (r !== void 0) {
            var n = this.bb * this.ab - this.eb * this.jb;
            n == 0 ? r.lx() : (n = 1 / n, r.Gb = (this.eb * this.Lb - this.Gb * this.ab) * n, r.Lb = (this.Gb * this.jb - this.bb * this.Lb) * n, r.bb = this.ab * n, r.eb = -this.eb * n, r.jb = -this.jb * n, r.ab = this.bb * n);
          } else this.inverse(this);
        }, f;
      }();
      e.Dd = v;
    }(k || (k = {})), function(e) {
      var v = function() {
        function f() {
        }
        return f.prototype.lx = function() {
          this.hg = this.Lb = this.Gb = this.He = this.Fe = this.Ee = this.Ge = this.ab = this.eb = this.Ze = this.jb = this.bb = 0;
        }, f.prototype.setScale = function(r, n, t) {
          this.bb = r, this.eb = this.Ze = this.jb = 0, this.ab = n, this.Fe = this.Ee = this.Ge = 0, this.He = t, this.hg = this.Lb = this.Gb = 0;
        }, f.prototype.setTranslate = function(r, n, t) {
          this.bb = 1, this.eb = this.Ze = this.jb = 0, this.ab = 1, this.Fe = this.Ee = this.Ge = 0, this.He = 1, this.Gb = r, this.Lb = n, this.hg = t;
        }, f.prototype.translate = function(r, n, t) {
          this.Gb += r, this.Lb += n, this.hg += t;
        }, f.prototype.mC = function(r) {
          if (!r.B()) {
            for (var n = new e.Nd[8](), t = 0; 8 > t; t++) n[t] = new e.Nd();
            r.nB(n), this.transform(n, 8, n), r.Zw(n);
          }
        }, f.prototype.transform = function(r, n, t) {
          for (var i = 0; i < n; i++) {
            var h = new e.Nd(), s = r[i];
            h.x = this.bb * s.x + this.eb * s.y + this.Ee * s.z + this.Gb, h.y = this.jb * s.x + this.ab * s.y + this.Fe * s.z + this.Lb, h.z = this.Ze * s.x + this.Ge * s.y + this.He * s.z + this.hg, t[i] = h;
          }
        }, f.prototype.fp = function(r) {
          var n = new e.Nd();
          return n.x = this.bb * r.x + this.eb * r.y + this.Ee * r.z + this.Gb, n.y = this.jb * r.x + this.ab * r.y + this.Fe * r.z + this.Lb, n.z = this.Ze * r.x + this.Ge * r.y + this.He * r.z + this.hg, n;
        }, f.prototype.Ag = function(r) {
          f.multiply(this, r, this);
        }, f.multiply = function(r, n, t) {
          var i = r.bb * n.bb + r.jb * n.eb + r.Ze * n.Ee, h = r.bb * n.jb + r.jb * n.ab + r.Ze * n.Fe, s = r.bb * n.Ze + r.jb * n.Ge + r.Ze * n.He, o = r.eb * n.bb + r.ab * n.eb + r.Ge * n.Ee, a = r.eb * n.jb + r.ab * n.ab + r.Ge * n.Fe, u = r.eb * n.Ze + r.ab * n.Ge + r.Ge * n.He, c = r.Ee * n.bb + r.Fe * n.eb + r.He * n.Ee, l = r.Ee * n.jb + r.Fe * n.ab + r.He * n.Fe, p = r.Ee * n.Ze + r.Fe * n.Ge + r.He * n.He, y = r.Gb * n.bb + r.Lb * n.eb + r.hg * n.Ee + n.Gb, d = r.Gb * n.jb + r.Lb * n.ab + r.hg * n.Fe + n.Lb;
          r = r.Gb * n.Ze + r.Lb * n.Ge + r.hg * n.He + n.hg, t.bb = i, t.jb = h, t.Ze = s, t.eb = o, t.ab = a, t.Ge = u, t.Ee = c, t.Fe = l, t.He = p, t.Gb = y, t.Lb = d, t.hg = r;
        }, f.inverse = function(r, n) {
          var t = r.bb * (r.ab * r.He - r.Ge * r.Fe) - r.jb * (r.eb * r.He - r.Ge * r.Ee) + r.Ze * (r.eb * r.Fe - r.ab * r.Ee);
          if (t == 0) throw e.i.fa("math singularity");
          var i = 1 / t;
          t = (r.ab * r.He - r.Ge * r.Fe) * i;
          var h = -(r.eb * r.He - r.Ge * r.Ee) * i, s = (r.eb * r.Fe - r.ab * r.Ee) * i, o = -(r.jb * r.He - r.Fe * r.Ze) * i, a = (r.bb * r.He - r.Ze * r.Ee) * i, u = -(r.bb * r.Fe - r.jb * r.Ee) * i, c = (r.jb * r.Ge - r.Ze * r.ab) * i, l = -(r.bb * r.Ge - r.Ze * r.eb) * i;
          i *= r.bb * r.ab - r.jb * r.eb;
          var p = -(r.Gb * t + r.Lb * h + r.hg * s), y = -(r.Gb * o + r.Lb * a + r.hg * u);
          r = -(r.Gb * c + r.Lb * l + r.hg * i), n.bb = t, n.jb = o, n.Ze = c, n.eb = h, n.ab = a, n.Ge = l, n.Ee = s, n.Fe = u, n.He = i, n.Gb = p, n.Lb = y, n.hg = r;
        }, f.prototype.Of = function() {
          var r = new f();
          return r.bb = this.bb, r.jb = this.jb, r.Ze = this.Ze, r.eb = this.eb, r.ab = this.ab, r.Ge = this.Ge, r.Ee = this.Ee, r.Fe = this.Fe, r.He = this.He, r.Gb = this.Gb, r.Lb = this.Lb, r.hg = this.hg, r;
        }, f;
      }();
      e.JY = v;
    }(k || (k = {})), function(e) {
      var v = function(r) {
        function n(t) {
          if (t !== void 0) t = r.call(this, t.cc(), t) || this;
          else {
            (t = r.call(this) || this).bg = [], t.bg[0] = 0, t.Aa = 1, t.uh = [];
            for (var i = 0; 10 > i; i++) t.uh[i] = -1;
            t.uh[t.bg[0]] = 0;
          }
          return t.jq = !0, t;
        }
        return J(n, r), n.prototype.re = function(t) {
          this.hasAttribute(t) || (this.uh[t] = 0, this.jD());
        }, n.prototype.removeAttribute = function(t) {
          if (t == 0) throw e.i.N("Position attribue cannot be removed");
          this.hasAttribute(t) && (this.uh[t] = -1, this.jD());
        }, n.prototype.reset = function() {
          this.bg[0] = 0, this.Aa = 1;
          for (var t = 0; t < this.uh.length; t++) this.uh[t] = -1;
          this.uh[this.bg[0]] = 0, this.jq = !0;
        }, n.prototype.EF = function() {
          return f.kz().add(this);
        }, n.og = function() {
          return f.kz().$R();
        }, n.prototype.tM = function() {
          var t = this.cc();
          return new e.ra(t, this);
        }, n.prototype.jD = function() {
          for (var t = this.Aa = 0, i = 0; 10 > t; t++) 0 <= this.uh[t] && (this.bg[i] = t, this.uh[t] = i, i++, this.Aa++);
          this.jq = !0;
        }, n.prototype.cc = function() {
          return this.jq && (this.wl = this.An(), this.jq = !1), this.wl;
        }, n.prototype.Nb = function(t) {
          if (t == null) return !1;
          if (t == this) return !0;
          if (!(t instanceof n) || t.Aa != this.Aa) return !1;
          for (var i = 0; i < this.Aa; i++) if (this.bg[i] != t.bg[i]) return !1;
          return this.jq == t.jq;
        }, n.prototype.GG = function(t) {
          if (t.Aa != this.Aa) return !1;
          for (var i = 0; i < this.Aa; i++) if (this.bg[i] != t.bg[i]) return !1;
          return !0;
        }, n.Iw = function(t, i) {
          for (var h = [], s = 0; s < t.Aa; s++) h[s] = -1;
          s = 0;
          for (var o = t.Aa; s < o; s++) h[s] = i.Pf(t.kd(s));
          return h;
        }, n.BR = function(t, i) {
          return (t = new n(t)).re(i), t.EF();
        }, n.CR = function(t, i) {
          for (var h = null, s = 0; 10 > s; s++) !t.hasAttribute(s) && i.hasAttribute(s) && (h == null && (h = new n(t)), h.re(s));
          return h != null ? h.EF() : t;
        }, n;
      }(e.ra);
      e.ee = v;
      var f = function() {
        function r() {
          this.map = [];
          var n = new v();
          this.add(n), (n = new v()).re(1), this.add(n);
        }
        return r.kz = function() {
          return r.bL;
        }, r.prototype.$R = function() {
          return r.ft;
        }, r.prototype.add = function(n) {
          var t = n.cc();
          if (r.ft != null && r.ft.cc() == t && n.GG(r.ft)) return r.ft;
          if (r.Dw != null && r.Dw.cc() == t && n.GG(r.Dw)) return r.Dw;
          var i = null;
          return this.map[t] !== void 0 && (i = this.map[t]), i == null && ((i = n.tM()).Aa == 1 ? r.ft = i : i.Aa == 2 && i.kd(1) == 1 ? r.Dw = i : this.map[t] = i), i;
        }, r.bL = new r(), r;
      }();
    }(k || (k = {}));
    var kt = { feet: 9002, kilometers: 9036, meters: 9001, miles: 9093, "nautical-miles": 9030, yards: 9096 }, Mt = { acres: 109402, ares: 109463, hectares: 109401, "square-feet": 109405, "square-kilometers": 109414, "square-meters": 109404, "square-miles": 109439, "square-yards": 109442 }, at = new (function() {
      function e() {
        this.RM = 50, this.np = /* @__PURE__ */ new Map(), this.gj = [];
      }
      return e.prototype.clear = function() {
        this.gj.length = 0, this.np.clear();
      }, e.prototype.delete = function(v) {
        return !!this.np.delete(v) && (this.gj.splice(this.gj.indexOf(v), 1), !0);
      }, e.prototype.get = function(v) {
        var f = this.np.get(v);
        if (f !== void 0) return this.gj[0] !== v && (this.gj.splice(this.gj.indexOf(v), 1), this.gj.unshift(v)), f;
      }, e.prototype.has = function(v) {
        return this.np.has(v);
      }, e.prototype.set = function(v, f) {
        return this.get(v) !== void 0 && this.delete(v), this.gj.unshift(v), this.np.set(v, f), this.oM(), this;
      }, e.prototype.oM = function() {
        for (; this.gj.length && this.gj.length > this.RM; ) {
          var v = this.gj.pop();
          this.np.delete(v);
        }
      }, e;
    }())(), P = ((Z = {}).convertJSONToGeometry = function(e) {
      return k.$b.fP(e);
    }, Z.hasM = function(e) {
      return e.hasAttribute(k.Ih.M);
    }, Z.hasZ = function(e) {
      return e.hasAttribute(k.Ih.Z);
    }, Z.getPointX = function(e) {
      return e.Lg();
    }, Z.getPointY = function(e) {
      return e.ih();
    }, Z.getPointZ = function(e) {
      return e.bS();
    }, Z.getPointM = function(e) {
      return e.zR();
    }, Z.getXMin = function(e) {
      return e.es();
    }, Z.getYMin = function(e) {
      return e.gs();
    }, Z.getXMax = function(e) {
      return e.ds();
    }, Z.getYMax = function(e) {
      return e.fs();
    }, Z.getZExtent = function(e) {
      return e.Tg(k.Ih.Z, 0);
    }, Z.getMExtent = function(e) {
      return e.Tg(k.Ih.M, 0);
    }, Z.exportPaths = function(e) {
      var v = [], f = e.da(), r = null, n = null, t = e.hasAttribute(k.Ih.Z), i = e.hasAttribute(k.Ih.M);
      t && (r = e.ub(k.Ih.Z)), i && (n = e.ub(k.Ih.M));
      for (var h = new k.h(), s = 0; s < f; s++) {
        for (var o = e.Ba(s), a = e.Ja(s), u = 0, c = 0, l = NaN, p = NaN, y = NaN, d = NaN, g = e.dc(s), b = [], x = o; x < o + a; x++) {
          e.D(x, h), d = y = NaN;
          var m = [h.x, h.y];
          t && (y = r.get(x), m.push(y)), i && (d = n.get(x), m.push(d)), x == o && g && (u = h.x, c = h.y, l = y, p = d), b.push(m);
        }
        !g || u == h.x && c == h.y && (!t || isNaN(l) && isNaN(y) || l == y) && (!i || isNaN(p) && isNaN(d) || p == d) || b.push(b[0].slice(0)), v.push(b);
      }
      return v;
    }, Z.exportPathsFlat = function() {
    }, Z.exportPoints = function(e) {
      var v = e.hasAttribute(k.Ih.Z), f = e.hasAttribute(k.Ih.M), r = null, n = null;
      v && (r = e.ub(k.Ih.Z)), f && (n = e.ub(k.Ih.M));
      for (var t = new k.h(), i = e.I(), h = [], s = 0; s < i; s++) {
        e.D(s, t);
        var o = [t.x, t.y];
        v && o.push(r.get(s)), f && o.push(n.get(s)), h.push(o);
      }
      return h;
    }, Z.exportPointsFlat = function() {
    }, Z), ft = /* @__PURE__ */ new Map();
    return function() {
      function e() {
      }
      return e.buffer = Xt, e.clip = It, e.contains = Ct, e.convexHull = Jt, e.crosses = Bt, e.cut = Tt, e.densify = ti, e.difference = Kt, e.disjoint = Et, e.distance = Pt, e.equals = Dt, e.extendedSpatialReferenceInfo = Nt, e.generalize = _t, e.geodesicArea = ri, e.geodesicBuffer = Yt, e.geodesicDensify = ii, e.geodesicLength = ei, e.intersect = Ut, e.intersects = qt, e.isSimple = Ht, e.nearestCoordinate = Qt, e.nearestVertex = $t, e.nearestVertices = Zt, e.offset = Vt, e.overlaps = St, e.planarArea = ni, e.planarLength = hi, e.relate = Ot, e.simplify = Rt, e.symmetricDifference = Lt, e.touches = Gt, e.union = Wt, e.within = Ft, e.rotate = k.Ex.rotate, e.flipHorizontal = k.Ex.JQ, e.flipVertical = k.Ex.KQ, e.intersectLinesToPoints = li, e.ExtendedParams = k.yC, e.clearDefaultSpatialReferenceTolerance = ci, e.changeDefaultSpatialReferenceTolerance = fi, e._enableProjection = si, e._project = ui, e._getTransformation = oi, e._getTransformationBySuitability = ai, e;
    }();
  }
  var rt = lt();
  rt !== void 0 && (ct.exports = rt);
})(At);
var zt = At.exports;
const vi = pi(zt), gi = yi({ __proto__: null, default: vi }, [zt]);
export {
  vi as G,
  gi as g
};
//# sourceMappingURL=geometryEngineBase-BixW4fnL.js.map
