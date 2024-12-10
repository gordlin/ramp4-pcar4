import { N as e, O as t, P as s, dN as n, b_ as i } from "./main-BcMvGAQ2.js";
let u = class extends i {
  constructor() {
    super(...arguments), this.nodesPerPage = null, this.rootIndex = 0, this.lodSelectionMetricType = null;
  }
};
e([t({ type: Number })], u.prototype, "nodesPerPage", void 0), e([t({ type: Number })], u.prototype, "rootIndex", void 0), e([t({ type: String })], u.prototype, "lodSelectionMetricType", void 0), u = e([s("esri.layer.support.I3SNodePageDefinition")], u);
let a = class extends i {
  constructor() {
    super(...arguments), this.factor = 1;
  }
};
e([t({ type: Number, json: { read: { source: "textureSetDefinitionId" } } })], a.prototype, "id", void 0), e([t({ type: Number })], a.prototype, "factor", void 0), a = e([s("esri.layer.support.I3SMaterialTexture")], a);
let l = class extends i {
  constructor() {
    super(...arguments), this.baseColorFactor = [1, 1, 1, 1], this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.metallicFactor = 1, this.roughnessFactor = 1;
  }
};
e([t({ type: [Number] })], l.prototype, "baseColorFactor", void 0), e([t({ type: a })], l.prototype, "baseColorTexture", void 0), e([t({ type: a })], l.prototype, "metallicRoughnessTexture", void 0), e([t({ type: Number })], l.prototype, "metallicFactor", void 0), e([t({ type: Number })], l.prototype, "roughnessFactor", void 0), l = e([s("esri.layer.support.I3SMaterialPBRMetallicRoughness")], l);
let o = class extends i {
  constructor() {
    super(...arguments), this.alphaMode = "opaque", this.alphaCutoff = 0.25, this.doubleSided = !1, this.cullFace = "none", this.normalTexture = null, this.occlusionTexture = null, this.emissiveTexture = null, this.emissiveFactor = null, this.pbrMetallicRoughness = null;
  }
};
e([n({ opaque: "opaque", mask: "mask", blend: "blend" })], o.prototype, "alphaMode", void 0), e([t({ type: Number })], o.prototype, "alphaCutoff", void 0), e([t({ type: Boolean })], o.prototype, "doubleSided", void 0), e([n({ none: "none", back: "back", front: "front" })], o.prototype, "cullFace", void 0), e([t({ type: a })], o.prototype, "normalTexture", void 0), e([t({ type: a })], o.prototype, "occlusionTexture", void 0), e([t({ type: a })], o.prototype, "emissiveTexture", void 0), e([t({ type: [Number] })], o.prototype, "emissiveFactor", void 0), e([t({ type: l })], o.prototype, "pbrMetallicRoughness", void 0), o = e([s("esri.layer.support.I3SMaterialDefinition")], o);
let y = class extends i {
};
e([t({ type: String, json: { read: { source: ["name", "index"], reader: (v, x) => v ?? `${x.index}` } } })], y.prototype, "name", void 0), e([n({ jpg: "jpg", png: "png", dds: "dds", "ktx-etc2": "ktx-etc2", ktx2: "ktx2", basis: "basis" })], y.prototype, "format", void 0), y = e([s("esri.layer.support.I3STextureFormat")], y);
let c = class extends i {
  constructor() {
    super(...arguments), this.atlas = !1;
  }
};
e([t({ type: [y] })], c.prototype, "formats", void 0), e([t({ type: Boolean })], c.prototype, "atlas", void 0), c = e([s("esri.layer.support.I3STextureSetDefinition")], c);
let p = class extends i {
};
e([n({ Float32: "Float32", UInt64: "UInt64", UInt32: "UInt32", UInt16: "UInt16", UInt8: "UInt8" })], p.prototype, "type", void 0), e([t({ type: Number })], p.prototype, "component", void 0), p = e([s("esri.layer.support.I3SGeometryAttribute")], p);
let d = class extends i {
};
e([n({ draco: "draco" })], d.prototype, "encoding", void 0), e([t({ type: [String] })], d.prototype, "attributes", void 0), d = e([s("esri.layer.support.I3SGeometryCompressedAttributes")], d);
let r = class extends i {
  constructor() {
    super(...arguments), this.offset = 0;
  }
};
e([t({ type: Number })], r.prototype, "offset", void 0), e([t({ type: p })], r.prototype, "position", void 0), e([t({ type: p })], r.prototype, "normal", void 0), e([t({ type: p })], r.prototype, "uv0", void 0), e([t({ type: p })], r.prototype, "color", void 0), e([t({ type: p })], r.prototype, "uvRegion", void 0), e([t({ type: p })], r.prototype, "featureId", void 0), e([t({ type: p })], r.prototype, "faceRange", void 0), e([t({ type: d })], r.prototype, "compressedAttributes", void 0), r = e([s("esri.layer.support.I3SGeometryBuffer")], r);
let m = class extends i {
};
e([n({ triangle: "triangle" })], m.prototype, "topology", void 0), e([t()], m.prototype, "geometryBuffers", void 0), m = e([s("esri.layer.support.I3SGeometryDefinition")], m);
export {
  o as l,
  m,
  u as s,
  c as u
};
//# sourceMappingURL=I3SLayerDefinitions-C3jSJvpW.js.map
