import{bJ as j,bK as z,bL as E,bM as G,bN as L,bO as A,bP as B,bQ as C,aE as D,bR as J}from"./main-Bd3SZcXj.js";import{r as K}from"./vec3f32-nZdmKIgz.js";import{n as N,h as Q}from"./WGLContainer-CWqGt0mI.js";import{E as k}from"./Container-BEV9YswJ.js";class V extends N{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=j()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const s of this.children)s.beforeRender(e)}prepareRenderPasses(e){const s=e.registerRenderPass({name:"overlay",brushes:[Q.overlay],target:()=>this.children,drawPhase:k.MAP});return[...super.prepareRenderPasses(e),s]}_updateMatrices(e){const{state:s}=e,{id:a,size:d,pixelRatio:r,resolution:h,rotation:l,viewpoint:u,displayMat3:b}=s;if(this._viewStateId===a)return;const p=Math.PI/180*l,i=r*d[0],n=r*d[1];this._localOrigin=u.targetGeometry.clone();const{x:c,y:_}=this._localOrigin,M=z(c,s.spatialReference);this._localOrigin.x=M,this._localOrigin.y=_;const v=h*i,m=h*n,t=E(this._dvsMat3);G(t,t,b),L(t,t,A(i/2,n/2)),B(t,t,K(i/v,-n/m,1)),C(t,t,-p),this._viewStateId=a}_updateOverlays(e,s){const{state:a}=e,{rotation:d,spatialReference:r,worldScreenWidth:h,size:l,viewpoint:u}=a,b=this._localOrigin;let p,i=0;const n=D(r);if(n&&r.isWrappable){const c=l[0],_=l[1],M=180/Math.PI*d,v=Math.abs(Math.cos(M)),m=Math.abs(Math.sin(M)),t=Math.round(c*v+_*m),[R,x]=n.valid,o=J(r),{x:O,y:I}=u.targetGeometry,S=[O,I],g=[0,0];a.toScreen(g,S);const f=[0,0];let w;w=t>h?.5*h:.5*t;const P=Math.floor((O+.5*o)/o),$=R+P*o,W=x+P*o,y=[g[0]+w,0];a.toMap(f,y),f[0]>W&&(i=o),y[0]=g[0]-w,a.toMap(f,y),f[0]<$&&(i=-o),p={worldWidth:o,xBounds:[R,x]}}for(const c of s)c.updateDrawCoords(b,i,r,p)}}export{V as f};
