const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lclayout-DBtd__Z4.js","./main-Bd3SZcXj.js","./preload-helper-ExcqyqRp.js","./main-Bh92dUh-.css"])))=>i.map(i=>d[i]);
import{f4 as Ie,dM as Pe,dQ as Ge,a0 as me,aY as fe,s as ee,G as $,d8 as Le,d0 as W,dq as Se,c7 as He,_ as Ce,aW as ke,bb as v,bc as _,bd as $e,d$ as Oe}from"./main-Bd3SZcXj.js";import{M as Be,h as Fe,a as le,w as A,b as te,c as ae,D as w,I as Ue}from"./KnowledgeGraphSublayer-DVs08Fo4.js";import{_ as ze}from"./preload-helper-ExcqyqRp.js";import{R as Qe}from"./knowledgeGraphService-DKISLaJK.js";import"./FeatureStore-BTsFF1zJ.js";import"./BoundsStore-WTV-d1jl.js";import"./PooledRBush-vvpk5Qq5.js";import"./timeSupport-Lab0Eo4S.js";import"./json-Wa8cmqdu.js";import"./QueryEngine-CkuFVbHs.js";import"./WhereClause-CwfeHhTz.js";import"./TimeOnly-DyZpOaTG.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-BCLoap5v.js";import"./utils-CIXHtZ1m.js";import"./utils-fr1OAAsS.js";import"./clientSideDefaults-CY5YpiXd.js";import"./GraphQueryStreaming-DOJ3EMgt.js";var ie;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(ie||(ie={}));let he,c=null;function je(){return he||(he=ze(()=>import("./lclayout-DBtd__Z4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.l).then(({default:e})=>e({locateFile:a=>Ie(`esri/libs/linkchartlayout/${a}`)})).then(e=>{Ye(e)}),he)}function Ye(e){c=e}var O,ne;function j(e,a,s,t,i,n){const o=s.length,p=i.length,g=Float64Array.BYTES_PER_ELEMENT,f=Uint32Array.BYTES_PER_ELEMENT,m=Uint8Array.BYTES_PER_ELEMENT,y=16,D=y+o*(m+2*g)+p*(2*f),x=c._malloc(D);try{const h=x+y-x%y,k=h+o*g,L=k+o*g,b=L+p*f,I=b+p*f,u=()=>[c.HEAPF64.subarray(h>>3,(h>>3)+o),c.HEAPF64.subarray(k>>3,(k>>3)+o),c.HEAPU32.subarray(L>>2,(L>>2)+p),c.HEAPU32.subarray(b>>2,(b>>2)+p),c.HEAPU8.subarray(I,I+o)],[R,U,B,z,F]=u();R.set(s),U.set(t),B.set(i),z.set(n),F.set(a);let S=e(o,I,h,k,p,L,b),M=null,P=null;if(S){const l=c.getLayoutLinksTypes(),N=c.getLayoutLinksVerticesEndIndices(),H=c.getLayoutLinksVertices(),E=c.countLayoutLinksVertices();!p||l&&N?E&&!H?S=!1:(M={types:new Uint8Array(c.HEAPU8.subarray(l,l+p)),vertexEndIndex:new Uint32Array(c.HEAPU32.subarray(N>>2,(N>>2)+p)),vertices:new Float64Array(c.HEAPF64.subarray(H>>3,(H>>3)+2*E))},P=c.getAuxiliaryGraphicElements()):S=!1}const[q,J,K,r,d]=u();return s.set(q),t.set(J),i.set(K),n.set(r),a.set(d),{success:S,links:M,graphics:P}}finally{c._free(x),c.cleanupLayout()}}(function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot"})(O||(O={})),function(e){e[e.Regular=0]="Regular",e[e.Orthogonal=1]="Orthogonal",e[e.Curved=2]="Curved",e[e.Recursive=3]="Recursive"}(ne||(ne={}));const Me=2,be=1,Ee=-1;var de,ue,pe,ce,ye,ge,we,Te,De;(function(e){function a(){return c.getMinIdealEdgeLength()}function s(t,i,n,o,p,g=Me,f=be,m=Ee){return j((y,D,x,h,k,L,b)=>c.applyForceDirectedLayout(y,D,x,h,k,L,b,g,f,m),t,i,n,o,p)}e.getMinIdealEdgeLength=a,e.apply=s})(de||(de={})),function(e){function a(s,t,i,n,o,p=Me,g=be,f=Ee){return j((m,y,D,x,h,k,L)=>c.applyCommunityLayout(m,y,D,x,h,k,L,p,g,f),s,t,i,n,o)}e.apply=a}(ue||(ue={})),function(e){function a(s,t,i,n,o){return j(c.applySimpleLayout,s,t,i,n,o)}e.apply=a}(pe||(pe={})),function(e){function a(s,t,i,n,o){return j(c.applyHierarchicalLayout,s,t,i,n,o)}e.apply=a}(ce||(ce={})),function(e){function a(s,t,i,n,o){return j(c.applyRadialTreeLayout,s,t,i,n,o)}e.apply=a}(ye||(ye={})),function(e){function a(s,t,i,n,o){return j(c.applySmartTreeLayout,s,t,i,n,o)}e.apply=a}(ge||(ge={})),function(e){function a(s,t,i,n,o,p,g,f,m){return j((y,D,x,h,k,L,b)=>{if(n.length!==y||o.length!==y||f.length!==k||m.length!==k)return!1;const I=Float64Array.BYTES_PER_ELEMENT,u=16,R=c._malloc(u+y*I),U=c._malloc(u+y*I),B=c._malloc(u+k*I),z=c._malloc(u+k*I),F=R+u-R%u,S=U+u-U%u,M=B+u-B%u,P=z+u-z%u;try{return c.HEAPF64.subarray(F>>3,(F>>3)+y).set(n),c.HEAPF64.subarray(S>>3,(S>>3)+y).set(o),c.HEAPF64.subarray(M>>3,(M>>3)+k).set(f),c.HEAPF64.subarray(P>>3,(P>>3)+k).set(m),c.applyChronologicalLayout(y,D,x,h,F,S,k,L,b,M,P)}finally{c._free(R),c._free(U),c._free(B),c._free(z)}},s,t,i,p,g)}e.apply=a}(we||(we={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(Te||(Te={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(De||(De={}));let T=class extends Pe(Ge(Oe)){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new me,this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.sublayerIdsCache=new Map,this.tables=new me,this.type="link-chart",this._originalInclusionList=e.inclusionModeDefinition,e.dataPreloadedInLocalCache&&!e.inclusionModeDefinition)throw new ee("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it")}normalizeCtorArgs(e){return{url:e.url,title:e.title,dataPreloadedInLocalCache:e.dataPreloadedInLocalCache,defaultLinkChartConfig:e.defaultLinkChartConfig}}_initializeLayerProperties(e){if(!this.title&&this.url){const n=this.url.split("/");this.title=n[n.length-2]}const a=new Set;let s=[],t=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new ee("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)}),e.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)}),e.inclusionModeDefinition?.generateAllSublayers?(s=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((n,o)=>{const p=this._graphTypeLookup.get(o);if(!p)return $.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(o);p.type==="relationship"?a.has(o)||(a.add(o),t.push(p)):p.type==="entity"?a.has(o)||(a.add(o),s.push(p)):($.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(o))}):(s=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]);const i=new Be({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=s,this.memberRelationshipTypes=t,this.dataManager=i}load(e){return this.addResolvingPromise(new Promise(a=>{Qe(this.url).then(s=>{if(this._initializeLayerProperties({knowledgeGraph:s,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(t=>{t.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(t=>{t.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(t.name,{useAllData:!0})})),this.dataPreloadedInLocalCache)this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(t=>{t.useAllData=!1,t.members?.forEach(i=>{let n;n=i.linkChartLocation instanceof Le?i.linkChartLocation:i.linkChartLocation?W(i.linkChartLocation):null,n&&n.coords.length===2&&n.lengths.length===0?this.entityLinkChartDiagramLookup.set(i.id,n):this.relationshipLinkChartDiagramLookup.set(i.id,n)}),this.addResolvingPromise(this._initializeDiagram().then(async()=>{this.layers.forEach(async i=>{await i.refreshCachedQueryEngine()}),this.tables.forEach(async i=>{await i.refreshCachedQueryEngine()})}))});else{const t=this.defaultLinkChartConfig?.layoutMode==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,t,!0).then(async()=>{Se(e);const i=[],n=[];this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1,this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach(o=>{o.useAllData=!1})),await this._initializeDiagram(),this.layers.forEach(o=>{n.push(o.refreshCachedQueryEngine()),i.push(new Promise(p=>{o.on("layerview-create",()=>{p(null)})}))}),this.tables.forEach(o=>{n.push(o.refreshCachedQueryEngine())}),await Promise.all(n)}))}a(null)})})),Promise.resolve(this)}async addRecords(e,a){let s=[];a?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(s=await Fe(e,this.dataManager.knowledgeGraph));const t=e.concat(s).filter(i=>!this.sublayerIdsCache.get(i.typeName)?.has(i.id));await this._handleNewRecords(t)}async removeRecords(e,{cascadeRemoveRelationships:a=!0,recalculateLayout:s=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let t=[];for(const n of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n.typeName)?.members?.has(n.id)&&t.push(n);if(a){const n=new Set,o=[];for(const p of t)if(this.dataManager.nodeConnectionsLookup.has(p.id))for(const g of this.dataManager.nodeConnectionsLookup.get(p.id))n.add(g);for(const p of n)if(this.dataManager.memberIdTypeLookup.has(p))for(const g of this.dataManager.memberIdTypeLookup.get(p))this.dataManager.relationshipTypeNames.has(g)&&o.push({id:p,typeName:g});t=t.concat(o)}this.dataManager.removeFromLayer(t);for(const n of t)this.sublayerIdsCache.get(n.typeName)?.delete(n.id),this.dataManager.relationshipTypeNames.has(n.typeName)?this.relationshipLinkChartDiagramLookup.delete(n.id):this.entityLinkChartDiagramLookup.delete(n.id);s&&await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const i=[];return this.layers.forEach(n=>{i.push(n.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes(),t}async expand(e,a){const s=await this.dataManager.getConnectedRecordIds(e,a),t=s.filter(i=>!this.sublayerIdsCache.get(i.typeName)?.has(i.id));return await this._handleNewRecords(s),{records:t}}loadLayerAssumingLocalCache(){this.memberRelationshipTypes.forEach(e=>{const a=new le({objectType:e,parentCompositeLayer:this,graphType:"relationship",title:e.name});a.geometryType?this.layers.push(a):this.tables.push(a),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)}),this.memberEntityTypes.forEach(e=>{const a=new le({objectType:e,parentCompositeLayer:this,graphType:"entity",title:e.name});a.geometryType?this.layers.push(a):this.tables.push(a),this.dataManager.sublayerCaches.has(e.name)||this.dataManager.sublayerCaches.set(e.name,new Map)}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e,a)=>{const s=He(this.sublayerIdsCache,a,()=>new Set);e.members?.forEach(t=>{if(s.add(t.id),t.linkChartLocation)if(t.linkChartLocation instanceof Le)this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(t.id,t.linkChartLocation):this.entityLinkChartDiagramLookup.set(t.id,t.linkChartLocation);else{const i=W(t.linkChartLocation);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(t.id,t.linkChartLocation?i:null):this.entityLinkChartDiagramLookup.set(t.id,t.linkChartLocation?i:null)}})})}async calculateLinkChartLayout(e="RADIAL_TREE",a){const s=[],t=[],i=[];this.dataManager.sublayerCaches.forEach((r,d)=>{this.dataManager.entityTypeNames.has(d)?r.forEach(l=>{s.push({typeName:d,feature:l})}):this.dataManager.relationshipTypeNames.has(d)&&r.forEach(l=>{t.push({typeName:d,feature:l})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const n=new Map,o=new Map,p=new Map,g=new Map,f=new Uint8Array(s.length),m=new Float64Array(s.length),y=new Float64Array(s.length),D=new Uint32Array(t.length),x=new Uint32Array(t.length),h=[],k="FORCE_DIRECTED",L=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let b,I="FORCE_DIRECTED",u=0,R=0;switch(I=e==="GEOGRAPHIC"?k:e,I){case"FORCE_DIRECTED":b=de.apply;break;case"COMMUNITY":b=ue.apply;break;case"HIERARCHICAL":b=ce.apply;break;case"RADIAL_TREE":b=ye.apply;break;case"SMART_TREE":b=ge.apply;break;default:b=pe.apply}s.forEach(({typeName:r,feature:d})=>{if(a?.lockedNodeLocations?.has(d.attributes[A])){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(r)?f[u]=O.IsGeographic:f[u]=O.None;const l=a.lockedNodeLocations.get(d.attributes[A]);m[u]=l.x,y[u]=l.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(r)){f[u]=O.IsGeographic;let l=null;const N=d.attributes[this.dataManager.geographicLookup.get(r).name];switch(this.dataManager.geographicLookup.get(r)?.geometryType){case"esriGeometryPoint":m[u]=N?.x,y[u]=N?.y;break;case"esriGeometryPolygon":l=N?.centroid,l?.x!=null&&l?.y!=null?(m[u]=l.x,y[u]=l.y):f[u]=O.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":l=N?.extent?.center,l?.x!=null&&l?.y!=null?(m[u]=l.x,y[u]=l.y):f[u]=O.IsMovable;break;default:f[u]=O.IsMovable}(m[u]==null||y[u]==null||Number.isNaN(m[u])||Number.isNaN(y[u]))&&(f[u]=O.IsMovable,m[u]=0,y[u]=0)}else f[u]=O.IsMovable,m[u]=0,y[u]=0;g.set(d.attributes[A],u),h[u]={feature:d,typeName:r},u++});let U=!1;const B=new Map;t.forEach(r=>{const d=r.feature.attributes[te],l=r.feature.attributes[ae],N=g.get(d),H=g.get(l);if(N!==void 0&&H!==void 0){const E=d+"-"+l,G=B.get(E);G?.has(r.typeName)||(D[R]=N,x[R]=H,G===void 0?B.set(E,new Map([[r.typeName,R]])):G.set(r.typeName,R),R++),i.push(r)}else U=!0,this.relationshipLinkChartDiagramLookup.set(d,null)}),U&&$.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const z=this._validateLayoutSettings(e,a),F=this._convertLayoutSettingsToCalculationSettings(z);await je();const{success:S,links:M}=b(f,m,y,D.subarray(0,R),x.subarray(0,R),F.computationBudgetTime,F.idealEdgeLengthMultiplier,F.repulsionRadiusMultiplier);if(!S)throw new ee("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let r=0;r<h.length;r++){if(y[r]>84.9999?y[r]=84.9999:y[r]<-84.9999&&(y[r]=-84.9999),m[r]>179.9999?m[r]=179.9999:m[r]<-179.9999&&(m[r]=-179.9999),h[r].feature.attributes[w]=new Ce(m[r],y[r]),n.has(h[r].typeName))n.get(h[r].typeName)?.set(h[r].feature.attributes[A],h[r].feature);else{const l=new Map;l.set(h[r].feature.attributes[A],h[r].feature),n.set(h[r].typeName,l)}p.set(h[r].feature.attributes[A],h[r].feature);const d=W(h[r].feature.attributes[w]);this.entityLinkChartDiagramLookup.set(h[r].feature.attributes[A],h[r].feature.attributes[w]?d:null),h[r].feature.attributes[w].x<L.xmin&&(L.xmin=h[r].feature.attributes[w].x),h[r].feature.attributes[w].x>L.xmax&&(L.xmax=h[r].feature.attributes[w].x),h[r].feature.attributes[w].y<L.ymin&&(L.ymin=h[r].feature.attributes[w].y),h[r].feature.attributes[w].y>L.ymax&&(L.ymax=h[r].feature.attributes[w].y)}if(this.linkChartExtent.xmin=L.xmin,this.linkChartExtent.xmax=L.xmax,this.linkChartExtent.ymin=L.ymin,this.linkChartExtent.ymax=L.ymax,!M)throw new ee("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const P=new Map,q=new Map,J=new Map,K=new Set;for(let r=0;r<i.length;r++){const d=[],l=i[r],N=l.feature.attributes[te],H=l.feature.attributes[ae],E=N+"-"+H,G=B.get(E).get(l.typeName),Y=G===0?0:M?.vertexEndIndex[G-1];if(!K.has(G)){if(K.add(G),M.types[G]===ne.Recursive){const C=[M.vertices[2*Y],M.vertices[2*Y+1]],oe=[M.vertices[2*(Y+1)],M.vertices[2*(Y+1)+1]],V=[.5*(C[0]+oe[0]),.5*(C[1]+oe[1])],Z=[V[0]-C[0],V[1]-C[1]],_e=[V[0]+Z[1],V[1]-Z[0]],Ae=[V[0]-Z[1],V[1]+Z[0]];d.push(C),d.push(_e),d.push(oe),d.push(Ae),d.push(C)}else{if(M.types[G]!==ne.Regular){$.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let C=Y;C<M.vertexEndIndex[G];C++)d.push([M.vertices[2*C],M.vertices[2*C+1]])}const Q=h[g.get(N)]?.feature.attributes[w],X=h[g.get(H)]?.feature.attributes[w];d[0][0]===Q.x&&d[0][1]===Q.y||(d[0]=[Q.x,Q.y]),d[d.length-1][0]===X.x&&d[d.length-1][1]===X.y||(d[d.length-1]=[X.x,X.y]);for(let C=1;C<d.length-1;C++)d[C][1]>85.5?d[C][1]=85.5:d[C][1]<-85.5&&(d[C][1]=-85.5),d[C][0]>179.9999?d[C][0]=179.9999:d[C][0]<-179.9999&&(d[C][0]=-179.9999);P.has(E)?P.get(E).push(d):P.set(E,[d])}const xe=P.get(E);q.has(E)||(q.set(E,new Map),J.set(E,new Map));const se=q.get(E),re=J.get(E);se.has(l.typeName)||(se.set(l.typeName,xe.shift()),re.set(l.typeName,0));const Ne=se.get(l.typeName);re.set(l.typeName,re.get(l.typeName)+1);const ve=new ke({paths:Ne});if(l.feature.attributes[w]=ve,o.has(l.typeName))o.get(l.typeName)?.set(l.feature.attributes[A],l.feature);else{const Q=new Map;Q.set(l.feature.attributes[A],l.feature),o.set(l.typeName,Q)}p.set(l.feature.attributes[A],l.feature);const Re=W(l.feature.attributes[w]);this.relationshipLinkChartDiagramLookup.set(l.feature.attributes[A],l.feature.attributes[w]?Re:null)}for(const r of i)r.feature.attributes[Ue]=J.get(r.feature.attributes[te]+"-"+r.feature.attributes[ae])?.get(r.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:z},{nodes:n,links:o,idMap:p}}async applyNewLinkChartLayout(e="RADIAL_TREE",a){const s=[];await this.calculateLinkChartLayout(e,a),this.layers.forEach(t=>{s.push(t.refreshCachedQueryEngine())}),await Promise.all(s),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(a=>{a?.members?.forEach(s=>{const t=s.linkChartLocation;let i;const n=s.id;t&&(i="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]},e.set(n,new Ce({x:i.x,y:i.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((a,s)=>{if(a.useAllData=!1,a.members&&a.members.size>0){if(!this.dataManager.sublayerCaches.get(s))return;const t=new Set(Array.from(this.dataManager.sublayerCaches.get(s).keys()));Array.from(a.members.keys()).filter(i=>!t.has(i)).forEach(i=>{a.members?.delete(i)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const a=[];this.layers.forEach(s=>{a.push(s.refreshCachedQueryEngine())}),await Promise.all(a),this._refreshNamedTypes()}async connectEntities(e){let a=[];for(const t of this.dataManager.relationshipTypeNames){const i=this.sublayerIdsCache.get(t);i&&(a=a.concat(Array.from(i.keys())))}const s=await this.dataManager.getAttachedRelationships(e,a);return await this._handleNewRecords(s),{records:s}}async _handleNewRecords(e){const a=[];this.dataManager.addToLayer(e);for(const t of e)this.sublayerIdsCache.has(t.typeName)||(this.sublayerIdsCache.set(t.typeName,new Set),a.push(t.typeName)),this.sublayerIdsCache.get(t.typeName).add(t.id);for(const t of a){const i=this._graphTypeLookup.get(t);if(i){const n=new le({objectType:i,parentCompositeLayer:this,graphType:i.type,title:t});i.type==="entity"?this.dataManager.entityTypeNames.add(t):this.dataManager.relationshipTypeNames.add(t),n.geometryType?this.layers.push(n):this.tables.push(n),this.dataManager.sublayerCaches.set(t,new Map)}}await this.dataManager.refreshCacheContent(e.map(t=>t.id));const s=Object.assign({},this._currentLinkChartConfig.layoutOptions);s.lockedNodeLocations=this.getCurrentNodeLocations(),await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,s)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,a)=>{e?.members?.forEach(s=>{const t=s.linkChartLocation;let i;const n=s.id;if(!t)return;i="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]};const o=W(i);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(n,o):this.entityLinkChartDiagramLookup.set(n,o),this.linkChartExtent.xmin>i.x&&(this.linkChartExtent.xmin=i.x),this.linkChartExtent.xmax<i.x&&(this.linkChartExtent.xmax=i.x),this.linkChartExtent.ymin>i.y&&(this.linkChartExtent.ymin=i.y),this.linkChartExtent.ymax<i.y&&(this.linkChartExtent.ymax=i.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(a=>{const s=this.relationshipLinkChartDiagramLookup.get(a.attributes[te]),t=this.relationshipLinkChartDiagramLookup.get(a.attributes[ae]);if(s&&t){const i=W(new ke({paths:[[s.coords[0],s.coords[1]],[t.coords[0],t.coords[1]]]}));this.relationshipLinkChartDiagramLookup.set(a.attributes[A],i)}else this.relationshipLinkChartDiagramLookup.set(a.attributes[A],null)})})):await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this.calculateLinkChartLayout("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,a){const s=h=>typeof h=="number"&&!isNaN(h),t=h=>s(h)&&h>=1,i=h=>s(h)&&h>=1,n=h=>Object.values(ie).includes(h),o=h=>s(h)&&h>=0,p=new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC"]),g={};if(!p.has(e)||!a)return!p.has(e)&&a&&$.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"),g;const{computationBudgetTime:f,repulsionRadiusMultiplier:m,idealEdgeLength:y,idealEdgeLengthType:D}=a;i(f)?g.computationBudgetTime=f:f!==void 0&&$.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),t(m)?g.repulsionRadiusMultiplier=m:m!==void 0&&$.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");const x=y!==void 0||D!==void 0;return e!=="GEOGRAPHIC"&&x?$.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored"):e==="GEOGRAPHIC"&&x&&(n(D)?g.idealEdgeLengthType=D:D!==void 0&&$.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),o(y)?g.idealEdgeLength=y:y!==void 0&&$.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),g}_convertLayoutSettingsToCalculationSettings(e){let a=e.idealEdgeLength;return e.idealEdgeLengthType===ie.ABSOLUTE&&(a===void 0?a=-1:a*=-1),{computationBudgetTime:e.computationBudgetTime,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:a}}};v([_()],T.prototype,"dataPreloadedInLocalCache",void 0),v([_()],T.prototype,"defaultLinkChartConfig",void 0),v([_()],T.prototype,"dataManager",void 0),v([_()],T.prototype,"knowledgeGraph",void 0),v([_()],T.prototype,"layers",void 0),v([_()],T.prototype,"entityLinkChartDiagramLookup",void 0),v([_()],T.prototype,"relationshipLinkChartDiagramLookup",void 0),v([_()],T.prototype,"linkChartExtent",void 0),v([_()],T.prototype,"memberEntityTypes",void 0),v([_()],T.prototype,"memberRelationshipTypes",void 0),v([_()],T.prototype,"sublayerIdsCache",void 0),v([_()],T.prototype,"tables",void 0),v([_({json:{read:!1}})],T.prototype,"type",void 0),T=v([$e("esri.layers.LinkChartLayer")],T);const ut=T;export{ut as default};