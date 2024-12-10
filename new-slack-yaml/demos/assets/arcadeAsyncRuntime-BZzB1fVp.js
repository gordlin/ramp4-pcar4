import { C, Y as Y$1, M, W as W$1, f, a as ae$1, z as z$1, b as a, r, Q as Q$1, U, H as H$1, G, N, L, E, e, o, s, w, F, O, R, J as J$1, I, p, u, B, h as he$1, d as de$1, c as ce$1, m as me$1, _ as _e, Z as Ze$1, D, g as r$1, i as s$1, n as n$1, j as s$2 } from './arcadeUtils-DWI76gO7.js';
import { registerFunctions as xn } from './geomasync-BGUDNNpt.js';
import { eN as n, bk as f$1 } from './main-Bmb_kS21.js';
import './preload-helper-dJJaZANz.js';
import './TimeOnly-B5YNmSOd.js';
import './ImmutableArray-DC4Q0AOY.js';
import './number-B3rDMraH.js';
import './portalUtils-DgVGY5lb.js';
import './geometryEngineAsync-CXNII92j.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function q(e){return e&&"function"==typeof e.then}const T=100;async function W(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await Y(e,t.arguments[r]));return n}async function V(e,t,n){if(!0===t.preparsed)return n(e,null,t.arguments);return n(e,t,await W(e,t))}class _ extends r$1{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t;}createFunction(e){return (...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new a(e,r.MaximumCallDepth,null);return Pe(this.definition,n,t,null)}}call(e,t){return H(e,t,((n,a$1,i)=>{const l={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(l.depthCounter.depth>64)throw new a(e,r.MaximumCallDepth,t);return Pe(this.definition,l,i,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!I(t)||t instanceof s$1?t:n$1(t,e,r))),n$1(await Pe(this.definition,l,i,t),n,r)}))}}class z extends s$2{constructor(e){super(e);}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await Y(this.executingContext,t.node),t.valueset=!0),I(t.value)&&!(t.value instanceof s$1)){const e=new s$1;e.fn=t.value,e.parameterEvaluator=H,e.context=this.executingContext,t.value=e;}return t.value}setGlobal(e,t){if(I(t))throw new a(null,r.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null};}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let n=e.spatialReference;null==n&&(n=new f$1({wkid:102100})),this.moduleScope=Ge({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:n,services:e.services,libraryResolver:new s(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Ze,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await Y(this.executingContext,this.source.syntax);}}async function H(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return q(r),r}const r=n(e,t,await W(e,t));return q(r),r}async function Y(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,Y(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await xe(e,t);case"ImportDeclaration":return await ve(e,t);case"ExportNamedDeclaration":return await be(e,t);case"VariableDeclaration":return await Se(e,t,0);case"BlockStatement":case"Program":return await he(e,t);case"FunctionDeclaration":return await ye(e,t);case"ReturnStatement":return await ge(e,t);case"IfStatement":return await de(e,t);case"ExpressionStatement":return await we(e,t);case"UpdateExpression":return await ue(e,t);case"AssignmentExpression":return await pe(e,t);case"ForStatement":return await ne(e,t);case"WhileStatement":return await X(e,t);case"ForInStatement":return await ce(e,t);case"BreakStatement":return R;case"EmptyStatement":return O;case"ContinueStatement":return J$1;case"TemplateElement":return await ke(e,t);case"TemplateLiteral":return await Ee(e,t);case"Identifier":return await Me(e,t);case"MemberExpression":return await Fe(e,t);case"Literal":return t.value;case"CallExpression":return await je(e,t);case"UnaryExpression":return await Ie(e,t);case"BinaryExpression":return await Ae(e,t);case"LogicalExpression":return await Re(e,t);case"ArrayExpression":return await Ce(e,t);case"ObjectExpression":return await J(e,t);case"Property":return await Q(e,t);default:throw new a(e,r.Unrecognized,t)}}catch(i){throw u(e,t,i)}}async function J(e,t){const a$1=[];for(let n=0;n<t.properties.length;n++)a$1[n]=await Y(e,t.properties[n]);const i={},l=new Map;for(let n=0;n<a$1.length;n++){const s=a$1[n];if(I(s.value))throw new a(e,r.NoFunctionInDictionary,t);if(!1===G(s.key))throw new a(e,r.KeyMustBeString,t);let c=s.key.toString();const u=c.toLowerCase();l.has(u)?c=l.get(u):l.set(u,c),s.value===O?i[c]=null:i[c]=s.value;}const s=new N(i);return s.immutable=!1,s}async function Q(e,t){const n=await Y(e,t.value);if("Identifier"===t.key.type)return {key:t.key.name,value:n};return {key:await Y(e,t.key),value:n}}async function X(e,t){const n={testResult:!0,lastAction:O};if(n.testResult=await Y(e,t.test),!1===n.testResult)return O;if(!0!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await Y(e,t.body),n.lastAction!==R)&&!(n.lastAction instanceof w);)if(n.testResult=await Y(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);return n.lastAction instanceof w?n.lastAction:O}async function $(e,t,n){const r=await Y(e,t.body);return n.lastAction=r,n.lastAction===R||n.lastAction instanceof w?(n.testResult=!1,n):null!==t.update?(await Y(e,t.update),n):n}async function ee(e,t,n){if(null!==t.test){const a$1=await Y(e,t.test);if(!0===e.abortSignal?.aborted)throw new a(e,r.Cancelled,t);if(n.testResult=a$1,!1===n.testResult)return n;if(!0!==n.testResult)throw new a(e,r.BooleanConditionRequired,t);return $(e,t,n)}return $(e,t,n)}function te(e,t,n,r,o,a){try{ee(e,t,n).then((()=>{try{!0===n.testResult?++a>T?(a=0,setTimeout((()=>{te(e,t,n,r,o,a);}),0)):te(e,t,n,r,o,a):n.lastAction instanceof w?r(n.lastAction):r(O);}catch(i){o(i);}}),(e=>{o(e);}));}catch(i){o(i);}}function ne(e,t){try{return null!==t.init?Y(e,t.init).then((()=>new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:O},(e=>{n(e);}),(e=>{r(e);}),0);})))):new Promise(((n,r)=>{te(e,t,{testResult:!0,lastAction:O},(e=>{n(e);}),(e=>{r(e);}),0);}))}catch(n){return Promise.reject(n)}}function re(e,t,n,r,o,a,i,l,s,c){try{if(r<=a)return void l(O);o.value="k"===i?n[a]:a,Y(e,t.body).then((u=>{try{u instanceof w?l(u):u===R?l(O):++c>T?(c=0,setTimeout((()=>{re(e,t,n,r,o,a+1,i,l,s,c);}),0)):re(e,t,n,r,o,a+1,i,l,s,c);}catch(f){s(f);}}),(e=>{s(e);}));}catch(u){s(u);}}function oe(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(O);r.value="k"===a?n.get(o):o,Y(e,t.body).then((c=>{c instanceof w?i(c):c===R?i(O):++s>T?(s=0,setTimeout((()=>{oe(e,t,n,r,o+1,a,i,l,s);}),0)):oe(e,t,n,r,o+1,a,i,l,s);}),(e=>{l(e);}));}catch(c){l(c);}}function ae(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O);re(e,t,n,n.length,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function ie(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(O);oe(e,t,n,o,0,a,(e=>{r.resolve(e);}),(e=>{r.reject(e);}),0);}catch(i){r.reject(i);}}function le(e,t,n,r,o){try{ae(e,t,n.keys(),r,o,"k");}catch(a){r.reject(a);}}function se(e,t,n,r,o,a,l,s){try{e.next().then((c=>{try{if(null===c)a(O);else {const u=D.createFromGraphicLikeObject(c.geometry,c.attributes,r,t.timeZone);u._underlyingGraphic=c,o.value=u;Y(t,n.body).then((i=>{try{i===R?a(O):i instanceof w?a(i):++s>T?(s=0,setTimeout((()=>{se(e,t,n,r,o,a,l,s);}),0)):se(e,t,n,r,o,a,l,s);}catch(c){l(c);}}),(e=>{l(e);}));}}catch(u){l(u);}}),(e=>{l(e);}));}catch(c){l(c);}}async function ce(e,t){return new Promise(((a$1,i)=>{Y(e,t.right).then((l=>{try{let s=null;s="VariableDeclaration"===t.left.type?Y(e,t.left):Promise.resolve(),s.then((()=>{try{let s="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(s=e.name);}else "Identifier"===t.left.type&&(s=t.left.name);if(!s)throw new a(e,r.InvalidIdentifier,t);s=s.toLowerCase();let c=null;if(null!=e.localScope&&void 0!==e.localScope[s]&&(c=e.localScope[s]),null===c&&void 0!==e.globalScope[s]&&(c=e.globalScope[s]),null===c)return void i(new a(e,r.InvalidIdentifier,t));U(l)||G(l)?ae(e,t,l,{reject:i,resolve:a$1},c):Q$1(l)?ie(e,t,l,{reject:i,resolve:a$1},c):l instanceof N||H$1(l)?le(e,t,l,{reject:i,resolve:a$1},c):B(l)?se(l.iterator(e.abortSignal),e,t,l,c,(e=>{a$1(e);}),(e=>{i(e);}),0):ae(e,t,[],{reject:i,resolve:a$1},c);}catch(s){i(s);}}),i);}catch(s){i(s);}}),i);}))}async function ue(e,t){const a$1=t.argument;if("MemberExpression"===a$1.type){const i={t:null},l=await Y(e,a$1.object);let s=null;i.t=l,!0===a$1.computed?s=await Y(e,a$1.property):"Identifier"===a$1.property.type&&(s=a$1.property.name);const c=i.t;let u;if(U(c)){if(!E(s))throw new a(e,r.ArrayAccessorMustBeNumber,t);if(s<0&&(s=c.length+s),s<0||s>=c.length)throw new a(e,r.OutOfBounds,t);u=he$1(c[s]),c[s]="++"===t.operator?u+1:u-1;}else if(c instanceof N){if(!1===G(s))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==c.hasField(s))throw new a(e,r.FieldNotFound,t,{key:s});u=he$1(c.field(s)),c.setField(s,"++"===t.operator?u+1:u-1);}else if(c instanceof z){if(!1===G(s))throw new a(e,r.ModuleAccessorMustBeString,t);if(!0!==c.hasGlobal(s))throw new a(e,r.ModuleExportNotFound,t);u=he$1(await c.global(s)),c.setGlobal(s,"++"===t.operator?u+1:u-1);}else {if(!H$1(c))throw Q$1(c)?new a(e,r.Immutable,t):new a(e,r.InvalidParameter,t);if(!1===G(s))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==c.hasField(s))throw new a(e,r.FieldNotFound,t,{key:s});u=he$1(c.field(s)),c.setField(s,"++"===t.operator?u+1:u-1);}return !1===t.prefix?u:"++"===t.operator?u+1:u-1}const i="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!i)throw new a(e,r.InvalidIdentifier,t);let l;if(null!=e.localScope&&void 0!==e.localScope[i])return l=he$1(e.localScope[i].value),e.localScope[i]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;if(void 0!==e.globalScope[i])return l=he$1(e.globalScope[i].value),e.globalScope[i]={value:"++"===t.operator?l+1:l-1,valueset:!0,node:t},!1===t.prefix?l:"++"===t.operator?l+1:l-1;throw new a(e,r.InvalidIdentifier,t)}function fe(e,t,n,a$1,i){switch(t){case"=":return e===O?null:e;case"/=":return he$1(n)/he$1(e);case"*=":return he$1(n)*he$1(e);case"-=":return he$1(n)-he$1(e);case"+=":return G(n)||G(e)?de$1(n)+de$1(e):he$1(n)+he$1(e);case"%=":return he$1(n)%he$1(e);default:throw new a(i,r.UnsupportedOperator,a$1)}}async function pe(e,t){const a$1=t.left;if("MemberExpression"===a$1.type){const i=await Y(e,a$1.object);let l=null;if(!0===a$1.computed)l=await Y(e,a$1.property);else {if("Identifier"!==a$1.property.type)throw new a(e,r.InvalidIdentifier,t);l=a$1.property.name;}const s=await Y(e,t.right);if(U(i)){if(!E(l))throw new a(e,r.ArrayAccessorMustBeNumber,t);if(l<0&&(l=i.length+l),l<0||l>i.length)throw new a(e,r.OutOfBounds,t);if(l===i.length){if("="!==t.operator)throw new a(e,r.OutOfBounds,t);i[l]=fe(s,t.operator,i[l],t,e);}else i[l]=fe(s,t.operator,i[l],t,e);}else if(i instanceof N){if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0===i.hasField(l))i.setField(l,fe(s,t.operator,i.field(l),t,e));else {if("="!==t.operator)throw new a(e,r.FieldNotFound,t,{key:l});i.setField(l,fe(s,t.operator,null,t,e));}}else if(i instanceof z){if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0!==i.hasGlobal(l))throw new a(e,r.ModuleExportNotFound,t);i.setGlobal(l,fe(s,t.operator,await i.global(l),t,e));}else {if(!H$1(i))throw Q$1(i)?new a(e,r.Immutable,t):new a(e,r.InvalidParameter,t);if(!1===G(l))throw new a(e,r.KeyAccessorMustBeString,t);if(!0===i.hasField(l))i.setField(l,fe(s,t.operator,i.field(l),t,e));else {if("="!==t.operator)throw new a(e,r.FieldNotFound,t,{key:l});i.setField(l,fe(s,t.operator,null,t,e));}}return O}const i=a$1.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[i]){const n=await Y(e,t.right);return e.localScope[i]={value:fe(n,t.operator,e.localScope[i].value,t,e),valueset:!0,node:t.right},O}if(void 0!==e.globalScope[i]){const n=await Y(e,t.right);return e.globalScope[i]={value:fe(n,t.operator,e.globalScope[i].value,t,e),valueset:!0,node:t.right},O}throw new a(e,r.InvalidIdentifier,t)}async function we(e,t){if("AssignmentExpression"===t.expression.type)return Y(e,t.expression);if("CallExpression"===t.expression.type){const n=await Y(e,t.expression);return n===O?O:new F(n)}const n=await Y(e,t.expression);return n===O?O:new F(n)}async function de(e,t){const n=await Y(e,t.test);if(!0===n)return Y(e,t.consequent);if(!1===n)return null!==t.alternate?Y(e,t.alternate):O;throw new a(e,r.BooleanConditionRequired,t)}async function he(e,t){return me(e,t,0)}async function me(e,t,n){if(n>=t.body.length)return O;const r=await Y(e,t.body[n]);return r instanceof w||r===R||r===J$1||n===t.body.length-1?r:me(e,t,n+1)}async function ge(e,t){if(null===t.argument)return new w(O);const n=await Y(e,t.argument);return new w(n)}async function ye(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new _(t,e)},O}async function ve(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new z(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},O}async function be(e,t){if(await Y(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return O}async function Se(e,t,n){return n>=t.declarations.length?O:(await Y(e,t.declarations[n]),n===t.declarations.length-1||await Se(e,t,n+1),O)}async function xe(e,t){let n=null;if(n=null===t.init?null:await Y(e,t.init),null!==e.localScope){if(n===O&&(n=null),"Identifier"!==t.id.type)throw new a(e,r.InvalidIdentifier,t);const a$1=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[a$1]={value:n,valueset:!0,node:t.init}),O}if("Identifier"!==t.id.type)throw new a(e,r.InvalidIdentifier,t);const a$1=t.id.name.toLowerCase();return n===O&&(n=null),e.globalScope[a$1]={value:n,valueset:!0,node:t.init},O}async function Fe(e,t){const a$1=await Y(e,t.object);if(null===a$1)throw new a(e,r.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(a$1 instanceof N||H$1(a$1))return a$1.field(t.property.name);if(a$1 instanceof n)return L(a$1,t.property.name,e,t);if(a$1 instanceof z){if(!a$1.hasGlobal(t.property.name))throw new a(e,r.InvalidIdentifier,t);return a$1.global(t.property.name)}throw new a(e,r.InvalidMemberAccessKey,t)}throw new a(e,r.InvalidMemberAccessKey,t)}let i=await Y(e,t.property);if(a$1 instanceof N||H$1(a$1)){if(G(i))return a$1.field(i);throw new a(e,r.InvalidMemberAccessKey,t)}if(a$1 instanceof z){if(G(i))return a$1.global(i);throw new a(e,r.InvalidMemberAccessKey,t)}if(a$1 instanceof n){if(G(i))return L(a$1,i,e,t);throw new a(e,r.InvalidMemberAccessKey,t)}if(U(a$1)){if(E(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a$1.length+i),i>=a$1.length||i<0)throw new a(e,r.OutOfBounds,t);return a$1[i]}throw new a(e,r.InvalidMemberAccessKey,t)}if(Q$1(a$1)){if(E(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a$1.length()+i),i>=a$1.length()||i<0)throw new a(e,r.OutOfBounds,t);return a$1.get(i)}throw new a(e,r.InvalidMemberAccessKey,t)}if(G(a$1)){if(E(i)&&isFinite(i)&&Math.floor(i)===i){if(i<0&&(i=a$1.length+i),i>=a$1.length||i<0)throw new a(e,r.OutOfBounds,t);return a$1[i]}throw new a(e,r.InvalidMemberAccessKey,t)}throw new a(e,r.InvalidMemberAccessKey,t)}async function Ie(e,t){const n=await Y(e,t.argument);if(z$1(n)){if("!"===t.operator)return !n;if("-"===t.operator)return -1*he$1(n);if("+"===t.operator)return 1*he$1(n);if("~"===t.operator)return ~he$1(n);throw new a(e,r.UnsupportedUnaryOperator,t)}if("-"===t.operator)return -1*he$1(n);if("+"===t.operator)return 1*he$1(n);if("~"===t.operator)return ~he$1(n);throw new a(e,r.UnsupportedUnaryOperator,t)}async function Ce(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await Y(e,t.elements[r]));for(let a$1=0;a$1<n.length;a$1++){if(I(n[a$1]))throw new a(e,r.NoFunctionInArray,t);n[a$1]===O&&(n[a$1]=null);}return n}async function Ae(e,t){const n=[];n[0]=await Y(e,t.left),n[1]=await Y(e,t.right);const a$1=n[0],i=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return _e(he$1(a$1),he$1(i),t.operator);case"==":return me$1(a$1,i);case"!=":return !me$1(a$1,i);case"<":case">":case"<=":case">=":return ce$1(a$1,i,t.operator);case"+":return G(a$1)||G(i)?de$1(a$1)+de$1(i):he$1(a$1)+he$1(i);case"-":return he$1(a$1)-he$1(i);case"*":return he$1(a$1)*he$1(i);case"/":return he$1(a$1)/he$1(i);case"%":return he$1(a$1)%he$1(i);default:throw new a(e,r.UnsupportedOperator,t)}}async function Re(e,t){const n=await Y(e,t.left);let a$1=null;if(!z$1(n))throw new a(e,r.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(a$1=await Y(e,t.right),z$1(a$1))return a$1;throw new a(e,r.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(a$1=await Y(e,t.right),z$1(a$1))return a$1;throw new a(e,r.LogicExpressionOrAnd,t);default:throw new a(e,r.LogicExpressionOrAnd,t)}}async function Me(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Y(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new a(e,r.InvalidIdentifier,t)}async function je(e,t){if("MemberExpression"===t.callee.type){const n=await Y(e,t.callee.object);if(!(n instanceof z))throw new a(e,r.FunctionNotFound,t);const a$1=!1===t.callee.computed?t.callee.property.name:await Y(e,t.callee.property);if(!n.hasGlobal(a$1))throw new a(e,r.FunctionNotFound,t);const i=await n.global(a$1);if(!I(i))throw new a(e,r.CallNonFunction,t);return i.call(e,t)}if("Identifier"!==t.callee.type)throw new a(e,r.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if(I(n.value))return n.value.call(e,t);throw new a(e,r.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if(I(n.value))return n.value.call(e,t);throw new a(e,r.CallNonFunction,t)}throw new a(e,r.FunctionNotFound,t)}async function ke(e,t){return t.value?t.value.cooked:""}function Le(e,t,n){if(I(e))throw new a(t,r.NoFunctionInTemplateLiteral,n);return e}async function Ee(e,t){const n=[];for(let a=0;a<t.expressions.length;a++){const r=await Y(e,t.expressions[a]);n[a]=de$1(r);}let r="",o=0;for(const a of t.quasis)if(r+=a.value?a.value.cooked:"",!1===a.tail){r+=n[o]?Le(n[o],e,t):"",o++;}return r}const Ne={};async function Oe(e,t,n,r){const o=await Y(e,t.arguments[n]);if(me$1(o,r))return Y(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?Y(e,t.arguments[n]):2===a?null:3===a?Y(e,t.arguments[n+2]):Oe(e,t,n+2,r)}async function Be(e,t,n,a$1){if(!0===a$1)return Y(e,t.arguments[n+1]);if(3===t.arguments.length-n)return Y(e,t.arguments[n+2]);const i=await Y(e,t.arguments[n+2]);if(!1===z$1(i))throw new a(e,r.ModuleExportNotFound,t.arguments[n+2]);return Be(e,t,n+2,i)}async function Pe(e,t,n,a$1){const i=e.body;if(n.length!==e.params.length)throw new a(t,r.WrongNumberOfParameters,null);for(let r=0;r<n.length;r++){const o=e.params[r];"Identifier"===o.type&&null!=t.localScope&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null});}const l=await Y(t,i);if(l instanceof w)return l.value;if(l===R)throw new a(t,r.UnexpectedToken,a$1);if(l===J$1)throw new a(t,r.UnexpectedToken,a$1);return l instanceof F?l.value:l}C(Ne,V),Y$1(Ne,V),M(Ne,V),W$1(Ne,V),f(Ne,V),xn({functions:Ne,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:V,standardFunctionAsync:H}),Ne.iif=async function(e,t){ae$1(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await Y(e,t.arguments[0]);if(!1===z$1(n))throw new a(e,r.BooleanConditionRequired,t);return Y(e,n?t.arguments[1]:t.arguments[2])},Ne.defaultvalue=async function(e,t){ae$1(null===t.arguments?[]:t.arguments,2,3,e,t);const a$1=await Y(e,t.arguments[0]);if(3===t.arguments.length){const i=await Y(e,t.arguments[1]);let l=[];if(Q$1(i))l=i.toArray();else {if(!U(i))throw new a(e,r.InvalidParameter,t);l=i;}let s=a$1;if(null===s)return Y(e,t.arguments[2]);for(const r of l)if(H$1(s)){if(!1===G(r))return Y(e,t.arguments[2]);if(!s.hasField(r))return Y(e,t.arguments[2]);s=s.field(r);}else if(s instanceof N){if(!1===G(r))return Y(e,t.arguments[2]);if(!s.hasField(r))return Y(e,t.arguments[2]);s=s.field(r);}else if(s instanceof n){if(!1===G(r))return Y(e,t.arguments[2]);if(s=L(s,r,null,null,2),null===s)return Y(e,t.arguments[2]);if("notfound"===s?.keystate)return Y(e,t.arguments[2])}else if(U(s)){if(!1===E(r))return Y(e,t.arguments[2]);if(s=s[r],null==s)return Y(e,t.arguments[2])}else {if(!Q$1(s))return Y(e,t.arguments[2]);if(!1===E(r))return Y(e,t.arguments[2]);if(s=s.get(r),null==s)return Y(e,t.arguments[2])}return s}return null==a$1||""===a$1?Y(e,t.arguments[1]):a$1},Ne.decode=async function(e,t){if(t.arguments.length<2)throw new a(e,r.WrongNumberOfParameters,t);if(2===t.arguments.length)return Y(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new a(e,r.WrongNumberOfParameters,t);return Oe(e,t,1,await Y(e,t.arguments[0]))},Ne.when=async function(e,t){if(t.arguments.length<3)throw new a(e,r.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new a(e,r.WrongNumberOfParameters,t);const n=await Y(e,t.arguments[0]);if(!1===z$1(n))throw new a(e,r.BooleanConditionRequired,t.arguments[0]);return Be(e,t,0,n)};const Ke={fixSpatialReference:Ze$1,parseArguments:W,standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(const We in Ne)Ne[We]={value:new e(Ne[We]),valueset:!0,node:null};const De=function(){};function Ge(e$1,t,r){const o=new De;null==e$1&&(e$1={}),null==t&&(t={});const a=new N({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,o.textformatting={value:a,valueset:!0,node:null};for(const n in t)o[n]={value:new e(t[n]),native:!0,valueset:!0,node:null};for(const n in e$1)e$1[n]&&"esri.Graphic"===e$1[n].declaredClass?o[n]={value:D.createFromGraphic(e$1[n],r),valueset:!0,node:null}:o[n]={value:e$1[n],valueset:!0,node:null};return o}function Ze(e){console.log(e);}De.prototype=Ne,De.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},De.prototype.pi={value:Math.PI,valueset:!0,node:null};const Ue=Ke;function qe(e$1){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:V,standardFunctionAsync:H,evaluateIdentifier:Me};for(let n=0;n<e$1.length;n++)e$1[n].registerFunctions(t);for(const n in t.functions)Ne[n]={value:new e(t.functions[n]),valueset:!0,node:null},De.prototype[n]=Ne[n];for(let n=0;n<t.signatures.length;n++)o(t.signatures[n],"async");}async function Te(e,n){let a$1=n.spatialReference;null==a$1&&(a$1=new f$1({wkid:102100}));let i=null;e.usesModules&&(i=new s(new Map,e.loadedModules));const l=Ge(n.vars,n.customfunctions,n.timeZone),s$1={spatialReference:a$1,services:n.services,exports:{},libraryResolver:i,abortSignal:void 0===n.abortSignal||null===n.abortSignal?{aborted:!1}:n.abortSignal,globalScope:l,console:n.console??Ze,timeZone:n.timeZone??null,lrucache:n.lrucache,interceptor:n.interceptor,localScope:null,depthCounter:{depth:1}};let c=await Y(s$1,e);if(c instanceof w&&(c=c.value),c instanceof F&&(c=c.value),c===O&&(c=null),c===R)throw new a(s$1,r.IllegalResult,null);if(c===J$1)throw new a(s$1,r.IllegalResult,null);if(I(c))throw new a(s$1,r.IllegalResult,null);return c}qe([p]);

export { Te as executeScript, qe as extend, Ue as functionHelper };
