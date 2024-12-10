import{D as A}from"./main-D8a2_wp1.js";const C=()=>A.getLogger("esri.views.3d.support.buffer.math");function E(r,f,t){if(r.count!==f.count)return;const e=r.count,s=t[0],n=t[1],c=t[2],o=t[3],u=t[4],i=t[5],l=t[6],p=t[7],y=t[8],v=t[9],B=t[10],m=t[11],h=t[12],V=t[13],w=t[14],_=t[15],d=r.typedBuffer,j=r.typedBufferStride,a=f.typedBuffer,z=f.typedBufferStride;for(let O=0;O<e;O++){const g=O*j,S=O*z,M=a[S],b=a[S+1],q=a[S+2],x=a[S+3];d[g]=s*M+u*b+y*q+h*x,d[g+1]=n*M+i*b+v*q+V*x,d[g+2]=c*M+l*b+B*q+w*x,d[g+3]=o*M+p*b+m*q+_*x}}function $(r,f,t,e=4,s=e){if(r.length/e!=f.length/s)return void C().error("source and destination buffers need to have the same number of elements");const n=r.length/e,c=t[0],o=t[1],u=t[2],i=t[3],l=t[4],p=t[5],y=t[6],v=t[7],B=t[8],m=t[9],h=t[10],V=t[11],w=t[12],_=t[13],d=t[14],j=t[15];let a=0,z=0;for(let O=0;O<n;O++){const g=f[a],S=f[a+1],M=f[a+2],b=f[a+3];r[z]=c*g+l*S+B*M+w*b,r[z+1]=o*g+p*S+m*M+_*b,r[z+2]=u*g+y*S+h*M+d*b,r[z+3]=i*g+v*S+V*M+j*b,a+=s,z+=e}}function P(r,f,t){D(r.typedBuffer,f.typedBuffer,t,r.typedBufferStride,f.typedBufferStride)}function D(r,f,t,e=4,s=e){if(r.length/e!=f.length/s)return;const n=r.length/e,c=t[0],o=t[1],u=t[2],i=t[3],l=t[4],p=t[5],y=t[6],v=t[7],B=t[8];let m=0,h=0;for(let V=0;V<n;V++){const w=f[m],_=f[m+1],d=f[m+2],j=f[m+3];r[h]=c*w+i*_+y*d,r[h+1]=o*w+l*_+v*d,r[h+2]=u*w+p*_+B*d,r[h+3]=j,m+=s,h+=e}}function T(r,f){const t=Math.min(r.count,f.count),e=r.typedBuffer,s=r.typedBufferStride,n=f.typedBuffer,c=f.typedBufferStride;for(let o=0;o<t;o++){const u=o*s,i=o*c,l=n[i],p=n[i+1],y=n[i+2],v=l*l+p*p+y*y;if(v>0){const B=1/Math.sqrt(v);e[u]=B*l,e[u+1]=B*p,e[u+2]=B*y}}}function k(r,f,t){L(r.typedBuffer,f,t,r.typedBufferStride)}function L(r,f,t,e=4){const s=Math.min(r.length/e,f.count),n=f.typedBuffer,c=f.typedBufferStride;let o=0,u=0;for(let i=0;i<s;i++)r[u]=t*n[o],r[u+1]=t*n[o+1],r[u+2]=t*n[o+2],r[u+3]=t*n[o+3],o+=c,u+=e}Object.freeze(Object.defineProperty({__proto__:null,normalize:T,scale:L,scaleView:k,transformMat3:D,transformMat3View:P,transformMat4:$,transformMat4View:E},Symbol.toStringTag,{value:"Module"}));export{P as f,D as n,T as o,L as s,k as u};