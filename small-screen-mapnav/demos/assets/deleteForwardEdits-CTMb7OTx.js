import{s as n,c2 as f,c3 as p,c4 as u,U as m}from"./main-Bd3SZcXj.js";import"./preload-helper-ExcqyqRp.js";async function h(i,s,o,r){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=f(i),e=o.toJSON(),a=p(t.query,{query:u({...e,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:c}=await m(d,a);return c}export{h as deleteForwardEdits};
