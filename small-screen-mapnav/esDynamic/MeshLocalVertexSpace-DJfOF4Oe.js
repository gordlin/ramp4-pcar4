import{bU as s,O as e,dB as p,P as a,Q as n,bV as i,aI as l}from"./main-D8a2_wp1.js";let o=class extends s(i){constructor(t){super(t),this.type="georeferenced",this.origin=null}};e([p({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),e([a({type:[Number],nonNullable:!1,json:{write:!0}})],o.prototype,"origin",void 0),o=e([n("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const c=o;let r=class extends s(i){constructor(t){super(t),this.type="local",this.origin=l()}};e([p({local:"local"},{readOnly:!0})],r.prototype,"type",void 0),e([a({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=e([n("esri.geometry.support.MeshLocalVertexSpace")],r);const y=r;export{y as a,c as i};
