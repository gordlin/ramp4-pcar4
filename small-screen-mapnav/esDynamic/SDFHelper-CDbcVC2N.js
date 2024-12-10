import{o as j}from"./floatRGBA-sT2WpWuu.js";import{aM as z}from"./main-D8a2_wp1.js";import{t as B}from"./UpdateTracking2D-CceQFrXW.js";import{D as q,t as D}from"./definitions-Doe0g1C2.js";function G(t){switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;if(!o||o.length!==1)return null;const n=o[0];return n.type!=="CIMVectorMarker"?null:G(n)}case"CIMVectorMarker":{const o=t.markerGraphics;if(!o||o.length!==1)return null;const n=o[0];if(!n)return null;const r=n.geometry;if(!r)return null;const s=n.symbol;return!s||s.type!=="CIMPolygonSymbol"&&s.type!=="CIMLineSymbol"||s.symbolLayers?.some(l=>!!l.effects)?null:{type:"sdf",geom:r,asFill:s.type==="CIMPolygonSymbol"}}}}function E(t){return t?t.rings?t.rings:t.paths?t.paths:t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function H(t){let o=1/0,n=-1/0,r=1/0,s=-1/0;for(const l of t)for(const e of l)e[0]<o&&(o=e[0]),e[0]>n&&(n=e[0]),e[1]<r&&(r=e[1]),e[1]>s&&(s=e[1]);return new B(o,r,n-o,s-r)}function U(t){let o=1/0,n=-1/0,r=1/0,s=-1/0;for(const l of t)for(const e of l)e[0]<o&&(o=e[0]),e[0]>n&&(n=e[0]),e[1]<r&&(r=e[1]),e[1]>s&&(s=e[1]);return[o,r,n,s]}function J(t){return t?t.rings?U(t.rings):t.paths?U(t.paths):z(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function K(t,o,n,r,s){const[l,e,a,u]=t;if(a<l||u<e)return[0,0,0,1];const i=a-l,f=u-e,m=q,c=D,x=Math.floor(.5*(.5*m-c)),y=(m-2*(x+c))/Math.max(i,f),p=Math.round(i*y)+2*x,b=Math.round(f*y)+2*x;let w=1;o&&(w=b/y/(o.ymax-o.ymin));let h=0,g=0,d=1;r&&(s?o&&n&&o.ymax-o.ymin>0&&(d=(o.xmax-o.xmin)/(o.ymax-o.ymin),h=r.x/(n*d),g=r.y/n):(h=r.x,g=r.y)),o&&(h=.5*(o.xmax+o.xmin)+h*(o.xmax-o.xmin),g=.5*(o.ymax+o.ymin)+g*(o.ymax-o.ymin)),h-=l,g-=e,h*=y,g*=y,h+=x,g+=x;let M=h/p-.5,C=g/b-.5;return s&&n&&(M*=n*d,C*=n),[w,M,C,d]}function T(t){const o=E(t.geom),n=H(o),r=q,s=D,l=Math.floor(.5*(.5*r-s)),e=(r-2*(l+s))/Math.max(n.width,n.height),a=Math.round(n.width*e)+2*l,u=Math.round(n.height*e)+2*l,i=[];for(const m of o)if(m&&m.length>1){const c=[];for(const x of m){let[y,p]=x;y-=n.x,p-=n.y,y*=e,p*=e,y+=l-.5,p+=l-.5,t.asFill?c.push([y,p]):c.push([Math.round(y),Math.round(p)])}if(t.asFill){const x=c.length-1;c[0][0]===c[x][0]&&c[0][1]===c[x][1]||c.push(c[0])}i.push(c)}const f=W(i,a,u,l);return t.asFill&&X(i,a,u,l,f),[$(f,l),a,u]}function W(t,o,n,r){const s=o*n,l=new Array(s),e=r*r+1;for(let a=0;a<s;++a)l[a]=e;for(const a of t){const u=a.length;for(let i=1;i<u;++i){const f=a[i-1],m=a[i];let c,x,y,p;f[0]<m[0]?(c=f[0],x=m[0]):(c=m[0],x=f[0]),f[1]<m[1]?(y=f[1],p=m[1]):(y=m[1],p=f[1]);let b=Math.floor(c)-r,w=Math.floor(x)+r,h=Math.floor(y)-r,g=Math.floor(p)+r;b<0&&(b=0),w>o&&(w=o),h<0&&(h=0),g>n&&(g=n);const d=m[0]-f[0],M=m[1]-f[1],C=d*d+M*M;for(let S=b;S<w;S++)for(let k=h;k<g;k++){const L=S+.5,P=k+.5;let I,v,F=(L-f[0])*d+(P-f[1])*M;F<0?(I=f[0],v=f[1]):F>C?(I=m[0],v=m[1]):(F/=C,I=f[0]+F*d,v=f[1]+F*M);const A=(L-I)*(L-I)+(P-v)*(P-v),V=(n-k-1)*o+S;A<l[V]&&(l[V]=A)}}}for(let a=0;a<s;++a)l[a]=Math.sqrt(l[a]);return l}function X(t,o,n,r,s){for(const l of t){const e=l.length;for(let a=1;a<e;++a){const u=l[a-1],i=l[a];let f,m,c,x;u[0]<i[0]?(f=u[0],m=i[0]):(f=i[0],m=u[0]),u[1]<i[1]?(c=u[1],x=i[1]):(c=i[1],x=u[1]);let y=Math.floor(f),p=Math.floor(m)+1,b=Math.floor(c),w=Math.floor(x)+1;y<r&&(y=r),p>o-r&&(p=o-r),b<r&&(b=r),w>n-r&&(w=n-r);for(let h=b;h<w;++h){if(u[1]>h==i[1]>h)continue;const g=h+.5,d=(n-h-1)*o;for(let M=y;M<p;++M)M+.5<(i[0]-u[0])*(g-u[1])/(i[1]-u[1])+u[0]&&(s[d+M]=-s[d+M]);for(let M=r;M<y;++M)s[d+M]=-s[d+M]}}}}function $(t,o){const n=2*o,r=t.length,s=new Uint8Array(4*r);for(let l=0;l<r;++l){const e=.5-t[l]/n;j(e,s,4*l)}return s}export{K as a,T as c,G as l,J as m};
