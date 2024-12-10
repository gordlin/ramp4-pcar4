import{u as _}from"./main-D8a2_wp1.js";var F,G,H,I={exports:{}};F=I,G=function(){function m(e,n,x){x=x||2;var r,i,u,t,f,v,o,s=n&&n.length,h=s?n[0]*x:e.length,y=B(e,0,h,x,!0),a=[];if(!y||y.next===y.prev)return a;if(s&&(y=O(e,n,y,x)),e.length>80*x){r=u=e[0],i=t=e[1];for(var p=x;p<h;p+=x)(f=e[p])<r&&(r=f),(v=e[p+1])<i&&(i=v),f>u&&(u=f),v>t&&(t=v);o=(o=Math.max(u-r,t-i))!==0?1/o:0}return g(y,a,x,r,i,o),a}function B(e,n,x,r,i){var u,t;if(i===A(e,n,x,r)>0)for(u=n;u<x;u+=r)t=E(u,e[u],e[u+1],t);else for(u=x-r;u>=n;u-=r)t=E(u,e[u],e[u+1],t);if(t&&M(t,t.next)){var f=t.next;w(t),t=f}return t}function c(e,n){if(!e)return e;n||(n=e);var x,r=e;do if(x=!1,r.steiner||!M(r,r.next)&&l(r.prev,r,r.next)!==0)r=r.next;else{var i=r.prev;if(w(r),(r=n=i)===r.next)break;x=!0}while(x||r!==n);return n}function g(e,n,x,r,i,u,t){if(e){!t&&u&&T(e,r,i,u);for(var f,v,o=e;e.prev!==e.next;)if(f=e.prev,v=e.next,u?K(e,r,i,u):J(e))n.push(f.i/x),n.push(e.i/x),n.push(v.i/x),w(e),e=v.next,o=v.next;else if((e=v)===o){t?t===1?g(e=L(c(e),n,x),n,x,r,i,u,2):t===2&&N(e,n,x,r,i,u):g(c(e),n,x,r,i,u,1);break}}}function J(e){var n=e.prev,x=e,r=e.next;if(l(n,x,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(Z(n.x,n.y,x.x,x.y,r.x,r.y,i.x,i.y)&&l(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function K(e,n,x,r){var i=e.prev,u=e,t=e.next;if(l(i,u,t)>=0)return!1;for(var f=i.x<u.x?i.x<t.x?i.x:t.x:u.x<t.x?u.x:t.x,v=i.y<u.y?i.y<t.y?i.y:t.y:u.y<t.y?u.y:t.y,o=i.x>u.x?i.x>t.x?i.x:t.x:u.x>t.x?u.x:t.x,s=i.y>u.y?i.y>t.y?i.y:t.y:u.y>t.y?u.y:t.y,h=j(f,v,n,x,r),y=j(o,s,n,x,r),a=e.prevZ,p=e.nextZ;a&&a.z>=h&&p&&p.z<=y;){if(a!==e.prev&&a!==e.next&&Z(i.x,i.y,u.x,u.y,t.x,t.y,a.x,a.y)&&l(a.prev,a,a.next)>=0||(a=a.prevZ,p!==e.prev&&p!==e.next&&Z(i.x,i.y,u.x,u.y,t.x,t.y,p.x,p.y)&&l(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;a&&a.z>=h;){if(a!==e.prev&&a!==e.next&&Z(i.x,i.y,u.x,u.y,t.x,t.y,a.x,a.y)&&l(a.prev,a,a.next)>=0)return!1;a=a.prevZ}for(;p&&p.z<=y;){if(p!==e.prev&&p!==e.next&&Z(i.x,i.y,u.x,u.y,t.x,t.y,p.x,p.y)&&l(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function L(e,n,x){var r=e;do{var i=r.prev,u=r.next.next;!M(i,u)&&C(i,r,r.next,u)&&d(i,u)&&d(u,i)&&(n.push(i.i/x),n.push(r.i/x),n.push(u.i/x),w(r),w(r.next),r=e=u),r=r.next}while(r!==e);return c(r)}function N(e,n,x,r,i,u){var t=e;do{for(var f=t.next.next;f!==t.prev;){if(t.i!==f.i&&W(t,f)){var v=D(t,f);return t=c(t,t.next),v=c(v,v.next),g(t,n,x,r,i,u),void g(v,n,x,r,i,u)}f=f.next}t=t.next}while(t!==e)}function O(e,n,x,r){var i,u,t,f=[];for(i=0,u=n.length;i<u;i++)(t=B(e,n[i]*r,i<u-1?n[i+1]*r:e.length,r,!1))===t.next&&(t.steiner=!0),f.push(V(t));for(f.sort(P),i=0;i<f.length;i++)x=c(x=Q(f[i],x),x.next);return x}function P(e,n){return e.x-n.x}function k(e){if(e.next.prev===e)return e;let n=e;for(;;){const x=n.next;if(x.prev===n||x===n||x===e)break;n=x}return n}function Q(e,n){var x=R(e,n);if(!x)return n;var r=D(x,e),i=c(x,x.next);let u=k(r);return c(u,u.next),i=k(i),k(n===x?i:n)}function R(e,n){var x,r=n,i=e.x,u=e.y,t=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var f=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(f<=i&&f>t){if(t=f,f===i){if(u===r.y)return r;if(u===r.next.y)return r.next}x=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!x)return null;if(i===t)return x;var v,o=x,s=x.x,h=x.y,y=1/0;r=x;do i>=r.x&&r.x>=s&&i!==r.x&&Z(u<h?i:t,u,s,h,u<h?t:i,u,r.x,r.y)&&(v=Math.abs(u-r.y)/(i-r.x),d(r,e)&&(v<y||v===y&&(r.x>x.x||r.x===x.x&&S(x,r)))&&(x=r,y=v)),r=r.next;while(r!==o);return x}function S(e,n){return l(e.prev,e,n.prev)<0&&l(n.next,e,e.next)<0}function T(e,n,x,r){var i=e;do i.z===null&&(i.z=j(i.x,i.y,n,x,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,U(i)}function U(e){var n,x,r,i,u,t,f,v,o=1;do{for(x=e,e=null,u=null,t=0;x;){for(t++,r=x,f=0,n=0;n<o&&(f++,r=r.nextZ);n++);for(v=o;f>0||v>0&&r;)f!==0&&(v===0||!r||x.z<=r.z)?(i=x,x=x.nextZ,f--):(i=r,r=r.nextZ,v--),u?u.nextZ=i:e=i,i.prevZ=u,u=i;x=r}u.nextZ=null,o*=2}while(t>1);return e}function j(e,n,x,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-x)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*i)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function V(e){var n=e,x=e;do(n.x<x.x||n.x===x.x&&n.y<x.y)&&(x=n),n=n.next;while(n!==e);return x}function Z(e,n,x,r,i,u,t,f){return(i-t)*(n-f)-(e-t)*(u-f)>=0&&(e-t)*(r-f)-(x-t)*(n-f)>=0&&(x-t)*(u-f)-(i-t)*(r-f)>=0}function W(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!X(e,n)&&(d(e,n)&&d(n,e)&&Y(e,n)&&(l(e.prev,e,n.prev)||l(e,n.prev,n))||M(e,n)&&l(e.prev,e,e.next)>0&&l(n.prev,n,n.next)>0)}function l(e,n,x){return(n.y-e.y)*(x.x-n.x)-(n.x-e.x)*(x.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function C(e,n,x,r){var i=b(l(e,n,x)),u=b(l(e,n,r)),t=b(l(x,r,e)),f=b(l(x,r,n));return i!==u&&t!==f||!(i!==0||!z(e,x,n))||!(u!==0||!z(e,r,n))||!(t!==0||!z(x,e,r))||!(f!==0||!z(x,n,r))}function z(e,n,x){return n.x<=Math.max(e.x,x.x)&&n.x>=Math.min(e.x,x.x)&&n.y<=Math.max(e.y,x.y)&&n.y>=Math.min(e.y,x.y)}function b(e){return e>0?1:e<0?-1:0}function X(e,n){var x=e;do{if(x.i!==e.i&&x.next.i!==e.i&&x.i!==n.i&&x.next.i!==n.i&&C(x,x.next,e,n))return!0;x=x.next}while(x!==e);return!1}function d(e,n){return l(e.prev,e,e.next)<0?l(e,n,e.next)>=0&&l(e,e.prev,n)>=0:l(e,n,e.prev)<0||l(e,e.next,n)<0}function Y(e,n){var x=e,r=!1,i=(e.x+n.x)/2,u=(e.y+n.y)/2;do x.y>u!=x.next.y>u&&x.next.y!==x.y&&i<(x.next.x-x.x)*(u-x.y)/(x.next.y-x.y)+x.x&&(r=!r),x=x.next;while(x!==e);return r}function D(e,n){var x=new q(e.i,e.x,e.y),r=new q(n.i,n.x,n.y),i=e.next,u=n.prev;return e.next=n,n.prev=e,x.next=i,i.prev=x,r.next=x,x.prev=r,u.next=r,r.prev=u,r}function E(e,n,x,r){var i=new q(e,n,x);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function w(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function q(e,n,x){this.i=e,this.x=n,this.y=x,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(e,n,x,r){for(var i=0,u=n,t=x-r;u<x;u+=r)i+=(e[t]-e[u])*(e[u+1]+e[t+1]),t=u;return i}return m.deviation=function(e,n,x,r){var i=n&&n.length,u=i?n[0]*x:e.length,t=Math.abs(A(e,0,u,x));if(i)for(var f=0,v=n.length;f<v;f++){var o=n[f]*x,s=f<v-1?n[f+1]*x:e.length;t-=Math.abs(A(e,o,s,x))}var h=0;for(f=0;f<r.length;f+=3){var y=r[f]*x,a=r[f+1]*x,p=r[f+2]*x;h+=Math.abs((e[y]-e[p])*(e[a+1]-e[y+1])-(e[y]-e[a])*(e[p+1]-e[y+1]))}return t===0&&h===0?0:Math.abs((h-t)/t)},m.flatten=function(e){for(var n=e[0][0].length,x={vertices:[],holes:[],dimensions:n},r=0,i=0;i<e.length;i++){for(var u=0;u<e[i].length;u++)for(var t=0;t<n;t++)x.vertices.push(e[i][u][t]);i>0&&(r+=e[i-1].length,x.holes.push(r))}return x},m},(H=G())!==void 0&&(F.exports=H);const $=_(I.exports);export{$ as i};
