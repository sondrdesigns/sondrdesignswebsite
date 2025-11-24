import{j as hr}from"./motion-vendor-D74ZQyhE.js";import{a as Pt,d as vc}from"./react-vendor-CMwLWSY4.js";import{c as Tc}from"./ui-vendor-CJeLSyWv.js";var wc=Symbol.for("react.lazy"),dr=vc[" use ".trim().toString()];function Ic(n){return typeof n=="object"&&n!==null&&"then"in n}function da(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===wc&&"_payload"in n&&Ic(n._payload)}function Ac(n){const t=Rc(n),e=Pt.forwardRef((r,i)=>{let{children:o,...l}=r;da(o)&&typeof dr=="function"&&(o=dr(o._payload));const u=Pt.Children.toArray(o),d=u.find(Cc);if(d){const p=d.props.children,v=u.map(T=>T===d?Pt.Children.count(p)>1?Pt.Children.only(null):Pt.isValidElement(p)?p.props.children:null:T);return hr.jsx(t,{...l,ref:i,children:Pt.isValidElement(p)?Pt.cloneElement(p,void 0,v):null})}return hr.jsx(t,{...l,ref:i,children:o})});return e.displayName=`${n}.Slot`,e}var bc=Ac("Slot");function Rc(n){const t=Pt.forwardRef((e,r)=>{let{children:i,...o}=e;if(da(i)&&typeof dr=="function"&&(i=dr(i._payload)),Pt.isValidElement(i)){const l=Vc(i),u=Pc(o,i.props);return i.type!==Pt.Fragment&&(u.ref=r?Tc(r,l):l),Pt.cloneElement(i,u)}return Pt.Children.count(i)>1?Pt.Children.only(null):null});return t.displayName=`${n}.SlotClone`,t}var Sc=Symbol("radix.slottable");function Cc(n){return Pt.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Sc}function Pc(n,t){const e={...t};for(const r in t){const i=n[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?e[r]=(...u)=>{const d=o(...u);return i(...u),d}:i&&(e[r]=i):r==="style"?e[r]={...i,...o}:r==="className"&&(e[r]=[i,o].filter(Boolean).join(" "))}return{...n,...e}}function Vc(n){let t=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?n.ref:(t=Object.getOwnPropertyDescriptor(n,"ref")?.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?n.props.ref:n.props.ref||n.ref)}function fa(n){var t,e,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(t=0;t<i;t++)n[t]&&(e=fa(n[t]))&&(r&&(r+=" "),r+=e)}else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function pa(){for(var n,t,e=0,r="",i=arguments.length;e<i;e++)(n=arguments[e])&&(t=fa(n))&&(r&&(r+=" "),r+=t);return r}const ro=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,so=pa,kc=(n,t)=>e=>{var r;if(t?.variants==null)return so(n,e?.class,e?.className);const{variants:i,defaultVariants:o}=t,l=Object.keys(i).map(p=>{const v=e?.[p],T=o?.[p];if(v===null)return null;const b=ro(v)||ro(T);return i[p][b]}),u=e&&Object.entries(e).reduce((p,v)=>{let[T,b]=v;return b===void 0||(p[T]=b),p},{}),d=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((p,v)=>{let{class:T,className:b,...P}=v;return Object.entries(P).every(N=>{let[M,V]=N;return Array.isArray(V)?V.includes({...o,...u}[M]):{...o,...u}[M]===V})?[...p,T,b]:p},[]);return so(n,l,d,e?.class,e?.className)},Dc=(n,t)=>{const e=new Array(n.length+t.length);for(let r=0;r<n.length;r++)e[r]=n[r];for(let r=0;r<t.length;r++)e[n.length+r]=t[r];return e},xc=(n,t)=>({classGroupId:n,validator:t}),ma=(n=new Map,t=null,e)=>({nextPart:n,validators:t,classGroupId:e}),fr="-",io=[],Nc="arbitrary..",Oc=n=>{const t=Lc(n),{conflictingClassGroups:e,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return Mc(l);const u=l.split(fr),d=u[0]===""&&u.length>1?1:0;return ga(u,d,t)},getConflictingClassGroupIds:(l,u)=>{if(u){const d=r[l],p=e[l];return d?p?Dc(p,d):d:p||io}return e[l]||io}}},ga=(n,t,e)=>{if(n.length-t===0)return e.classGroupId;const i=n[t],o=e.nextPart.get(i);if(o){const p=ga(n,t+1,o);if(p)return p}const l=e.validators;if(l===null)return;const u=t===0?n.join(fr):n.slice(t).join(fr),d=l.length;for(let p=0;p<d;p++){const v=l[p];if(v.validator(u))return v.classGroupId}},Mc=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=n.slice(1,-1),e=t.indexOf(":"),r=t.slice(0,e);return r?Nc+r:void 0})(),Lc=n=>{const{theme:t,classGroups:e}=n;return Fc(e,t)},Fc=(n,t)=>{const e=ma();for(const r in n){const i=n[r];Ds(i,e,r,t)}return e},Ds=(n,t,e,r)=>{const i=n.length;for(let o=0;o<i;o++){const l=n[o];Uc(l,t,e,r)}},Uc=(n,t,e,r)=>{if(typeof n=="string"){Bc(n,t,e);return}if(typeof n=="function"){jc(n,t,e,r);return}zc(n,t,e,r)},Bc=(n,t,e)=>{const r=n===""?t:_a(t,n);r.classGroupId=e},jc=(n,t,e,r)=>{if($c(n)){Ds(n(r),t,e,r);return}t.validators===null&&(t.validators=[]),t.validators.push(xc(e,n))},zc=(n,t,e,r)=>{const i=Object.entries(n),o=i.length;for(let l=0;l<o;l++){const[u,d]=i[l];Ds(d,_a(t,u),e,r)}},_a=(n,t)=>{let e=n;const r=t.split(fr),i=r.length;for(let o=0;o<i;o++){const l=r[o];let u=e.nextPart.get(l);u||(u=ma(),e.nextPart.set(l,u)),e=u}return e},$c=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,qc=n=>{if(n<1)return{get:()=>{},set:()=>{}};let t=0,e=Object.create(null),r=Object.create(null);const i=(o,l)=>{e[o]=l,t++,t>n&&(t=0,r=e,e=Object.create(null))};return{get(o){let l=e[o];if(l!==void 0)return l;if((l=r[o])!==void 0)return i(o,l),l},set(o,l){o in e?e[o]=l:i(o,l)}}},ps="!",oo=":",Gc=[],ao=(n,t,e,r,i)=>({modifiers:n,hasImportantModifier:t,baseClassName:e,maybePostfixModifierPosition:r,isExternal:i}),Hc=n=>{const{prefix:t,experimentalParseClassName:e}=n;let r=i=>{const o=[];let l=0,u=0,d=0,p;const v=i.length;for(let M=0;M<v;M++){const V=i[M];if(l===0&&u===0){if(V===oo){o.push(i.slice(d,M)),d=M+1;continue}if(V==="/"){p=M;continue}}V==="["?l++:V==="]"?l--:V==="("?u++:V===")"&&u--}const T=o.length===0?i:i.slice(d);let b=T,P=!1;T.endsWith(ps)?(b=T.slice(0,-1),P=!0):T.startsWith(ps)&&(b=T.slice(1),P=!0);const N=p&&p>d?p-d:void 0;return ao(o,P,b,N)};if(t){const i=t+oo,o=r;r=l=>l.startsWith(i)?o(l.slice(i.length)):ao(Gc,!1,l,void 0,!0)}if(e){const i=r;r=o=>e({className:o,parseClassName:i})}return r},Wc=n=>{const t=new Map;return n.orderSensitiveModifiers.forEach((e,r)=>{t.set(e,1e6+r)}),e=>{const r=[];let i=[];for(let o=0;o<e.length;o++){const l=e[o],u=l[0]==="[",d=t.has(l);u||d?(i.length>0&&(i.sort(),r.push(...i),i=[]),r.push(l)):i.push(l)}return i.length>0&&(i.sort(),r.push(...i)),r}},Kc=n=>({cache:qc(n.cacheSize),parseClassName:Hc(n),sortModifiers:Wc(n),...Oc(n)}),Qc=/\s+/,Xc=(n,t)=>{const{parseClassName:e,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:o}=t,l=[],u=n.trim().split(Qc);let d="";for(let p=u.length-1;p>=0;p-=1){const v=u[p],{isExternal:T,modifiers:b,hasImportantModifier:P,baseClassName:N,maybePostfixModifierPosition:M}=e(v);if(T){d=v+(d.length>0?" "+d:d);continue}let V=!!M,q=r(V?N.substring(0,M):N);if(!q){if(!V){d=v+(d.length>0?" "+d:d);continue}if(q=r(N),!q){d=v+(d.length>0?" "+d:d);continue}V=!1}const G=b.length===0?"":b.length===1?b[0]:o(b).join(":"),H=P?G+ps:G,st=H+q;if(l.indexOf(st)>-1)continue;l.push(st);const at=i(q,V);for(let Z=0;Z<at.length;++Z){const y=at[Z];l.push(H+y)}d=v+(d.length>0?" "+d:d)}return d},Jc=(...n)=>{let t=0,e,r,i="";for(;t<n.length;)(e=n[t++])&&(r=ya(e))&&(i&&(i+=" "),i+=r);return i},ya=n=>{if(typeof n=="string")return n;let t,e="";for(let r=0;r<n.length;r++)n[r]&&(t=ya(n[r]))&&(e&&(e+=" "),e+=t);return e},Yc=(n,...t)=>{let e,r,i,o;const l=d=>{const p=t.reduce((v,T)=>T(v),n());return e=Kc(p),r=e.cache.get,i=e.cache.set,o=u,u(d)},u=d=>{const p=r(d);if(p)return p;const v=Xc(d,e);return i(d,v),v};return o=l,(...d)=>o(Jc(...d))},Zc=[],ct=n=>{const t=e=>e[n]||Zc;return t.isThemeGetter=!0,t},Ea=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,va=/^\((?:(\w[\w-]*):)?(.+)\)$/i,tu=/^\d+\/\d+$/,eu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ru=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,su=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,iu=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Oe=n=>tu.test(n),B=n=>!!n&&!Number.isNaN(Number(n)),ee=n=>!!n&&Number.isInteger(Number(n)),ss=n=>n.endsWith("%")&&B(n.slice(0,-1)),$t=n=>eu.test(n),ou=()=>!0,au=n=>nu.test(n)&&!ru.test(n),Ta=()=>!1,lu=n=>su.test(n),cu=n=>iu.test(n),uu=n=>!k(n)&&!D(n),hu=n=>He(n,Aa,Ta),k=n=>Ea.test(n),_e=n=>He(n,ba,au),is=n=>He(n,gu,B),lo=n=>He(n,wa,Ta),du=n=>He(n,Ia,cu),Yn=n=>He(n,Ra,lu),D=n=>va.test(n),gn=n=>We(n,ba),fu=n=>We(n,_u),co=n=>We(n,wa),pu=n=>We(n,Aa),mu=n=>We(n,Ia),Zn=n=>We(n,Ra,!0),He=(n,t,e)=>{const r=Ea.exec(n);return r?r[1]?t(r[1]):e(r[2]):!1},We=(n,t,e=!1)=>{const r=va.exec(n);return r?r[1]?t(r[1]):e:!1},wa=n=>n==="position"||n==="percentage",Ia=n=>n==="image"||n==="url",Aa=n=>n==="length"||n==="size"||n==="bg-size",ba=n=>n==="length",gu=n=>n==="number",_u=n=>n==="family-name",Ra=n=>n==="shadow",yu=()=>{const n=ct("color"),t=ct("font"),e=ct("text"),r=ct("font-weight"),i=ct("tracking"),o=ct("leading"),l=ct("breakpoint"),u=ct("container"),d=ct("spacing"),p=ct("radius"),v=ct("shadow"),T=ct("inset-shadow"),b=ct("text-shadow"),P=ct("drop-shadow"),N=ct("blur"),M=ct("perspective"),V=ct("aspect"),q=ct("ease"),G=ct("animate"),H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],st=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],at=()=>[...st(),D,k],Z=()=>["auto","hidden","clip","visible","scroll"],y=()=>["auto","contain","none"],f=()=>[D,k,d],m=()=>[Oe,"full","auto",...f()],E=()=>[ee,"none","subgrid",D,k],_=()=>["auto",{span:["full",ee,D,k]},ee,D,k],w=()=>[ee,"auto",D,k],g=()=>["auto","min","max","fr",D,k],ut=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],St=()=>["start","end","center","stretch","center-safe","end-safe"],Dt=()=>["auto",...f()],zt=()=>[Oe,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...f()],L=()=>[n,D,k],ce=()=>[...st(),co,lo,{position:[D,k]}],Un=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Je=()=>["auto","cover","contain",pu,hu,{size:[D,k]}],Ce=()=>[ss,gn,_e],ht=()=>["","none","full",p,D,k],dt=()=>["",B,gn,_e],Kt=()=>["solid","dashed","dotted","double"],Pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],et=()=>[B,ss,co,lo],Ve=()=>["","none",N,D,k],ue=()=>["none",B,D,k],ke=()=>["none",B,D,k],Ye=()=>[B,D,k],he=()=>[Oe,"full",...f()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[$t],breakpoint:[$t],color:[ou],container:[$t],"drop-shadow":[$t],ease:["in","out","in-out"],font:[uu],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[$t],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[$t],shadow:[$t],spacing:["px",B],text:[$t],"text-shadow":[$t],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Oe,k,D,V]}],container:["container"],columns:[{columns:[B,k,D,u]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:at()}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:y()}],"overscroll-x":[{"overscroll-x":y()}],"overscroll-y":[{"overscroll-y":y()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:m()}],"inset-x":[{"inset-x":m()}],"inset-y":[{"inset-y":m()}],start:[{start:m()}],end:[{end:m()}],top:[{top:m()}],right:[{right:m()}],bottom:[{bottom:m()}],left:[{left:m()}],visibility:["visible","invisible","collapse"],z:[{z:[ee,"auto",D,k]}],basis:[{basis:[Oe,"full","auto",u,...f()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[B,Oe,"auto","initial","none",k]}],grow:[{grow:["",B,D,k]}],shrink:[{shrink:["",B,D,k]}],order:[{order:[ee,"first","last","none",D,k]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:_()}],"col-start":[{"col-start":w()}],"col-end":[{"col-end":w()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:_()}],"row-start":[{"row-start":w()}],"row-end":[{"row-end":w()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":g()}],"auto-rows":[{"auto-rows":g()}],gap:[{gap:f()}],"gap-x":[{"gap-x":f()}],"gap-y":[{"gap-y":f()}],"justify-content":[{justify:[...ut(),"normal"]}],"justify-items":[{"justify-items":[...St(),"normal"]}],"justify-self":[{"justify-self":["auto",...St()]}],"align-content":[{content:["normal",...ut()]}],"align-items":[{items:[...St(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...St(),{baseline:["","last"]}]}],"place-content":[{"place-content":ut()}],"place-items":[{"place-items":[...St(),"baseline"]}],"place-self":[{"place-self":["auto",...St()]}],p:[{p:f()}],px:[{px:f()}],py:[{py:f()}],ps:[{ps:f()}],pe:[{pe:f()}],pt:[{pt:f()}],pr:[{pr:f()}],pb:[{pb:f()}],pl:[{pl:f()}],m:[{m:Dt()}],mx:[{mx:Dt()}],my:[{my:Dt()}],ms:[{ms:Dt()}],me:[{me:Dt()}],mt:[{mt:Dt()}],mr:[{mr:Dt()}],mb:[{mb:Dt()}],ml:[{ml:Dt()}],"space-x":[{"space-x":f()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":f()}],"space-y-reverse":["space-y-reverse"],size:[{size:zt()}],w:[{w:[u,"screen",...zt()]}],"min-w":[{"min-w":[u,"screen","none",...zt()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[l]},...zt()]}],h:[{h:["screen","lh",...zt()]}],"min-h":[{"min-h":["screen","lh","none",...zt()]}],"max-h":[{"max-h":["screen","lh",...zt()]}],"font-size":[{text:["base",e,gn,_e]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,D,is]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ss,k]}],"font-family":[{font:[fu,k,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,D,k]}],"line-clamp":[{"line-clamp":[B,"none",D,is]}],leading:[{leading:[o,...f()]}],"list-image":[{"list-image":["none",D,k]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",D,k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Kt(),"wavy"]}],"text-decoration-thickness":[{decoration:[B,"from-font","auto",D,_e]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[B,"auto",D,k]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",D,k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",D,k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:Un()}],"bg-size":[{bg:Je()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ee,D,k],radial:["",D,k],conic:[ee,D,k]},mu,du]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:Ce()}],"gradient-via-pos":[{via:Ce()}],"gradient-to-pos":[{to:Ce()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:ht()}],"rounded-s":[{"rounded-s":ht()}],"rounded-e":[{"rounded-e":ht()}],"rounded-t":[{"rounded-t":ht()}],"rounded-r":[{"rounded-r":ht()}],"rounded-b":[{"rounded-b":ht()}],"rounded-l":[{"rounded-l":ht()}],"rounded-ss":[{"rounded-ss":ht()}],"rounded-se":[{"rounded-se":ht()}],"rounded-ee":[{"rounded-ee":ht()}],"rounded-es":[{"rounded-es":ht()}],"rounded-tl":[{"rounded-tl":ht()}],"rounded-tr":[{"rounded-tr":ht()}],"rounded-br":[{"rounded-br":ht()}],"rounded-bl":[{"rounded-bl":ht()}],"border-w":[{border:dt()}],"border-w-x":[{"border-x":dt()}],"border-w-y":[{"border-y":dt()}],"border-w-s":[{"border-s":dt()}],"border-w-e":[{"border-e":dt()}],"border-w-t":[{"border-t":dt()}],"border-w-r":[{"border-r":dt()}],"border-w-b":[{"border-b":dt()}],"border-w-l":[{"border-l":dt()}],"divide-x":[{"divide-x":dt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":dt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Kt(),"hidden","none"]}],"divide-style":[{divide:[...Kt(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...Kt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[B,D,k]}],"outline-w":[{outline:["",B,gn,_e]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",v,Zn,Yn]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",T,Zn,Yn]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:dt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[B,_e]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":dt()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",b,Zn,Yn]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[B,D,k]}],"mix-blend":[{"mix-blend":[...Pe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Pe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[B]}],"mask-image-linear-from-pos":[{"mask-linear-from":et()}],"mask-image-linear-to-pos":[{"mask-linear-to":et()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":et()}],"mask-image-t-to-pos":[{"mask-t-to":et()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":et()}],"mask-image-r-to-pos":[{"mask-r-to":et()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":et()}],"mask-image-b-to-pos":[{"mask-b-to":et()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":et()}],"mask-image-l-to-pos":[{"mask-l-to":et()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":et()}],"mask-image-x-to-pos":[{"mask-x-to":et()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":et()}],"mask-image-y-to-pos":[{"mask-y-to":et()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[D,k]}],"mask-image-radial-from-pos":[{"mask-radial-from":et()}],"mask-image-radial-to-pos":[{"mask-radial-to":et()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":st()}],"mask-image-conic-pos":[{"mask-conic":[B]}],"mask-image-conic-from-pos":[{"mask-conic-from":et()}],"mask-image-conic-to-pos":[{"mask-conic-to":et()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:Un()}],"mask-size":[{mask:Je()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",D,k]}],filter:[{filter:["","none",D,k]}],blur:[{blur:Ve()}],brightness:[{brightness:[B,D,k]}],contrast:[{contrast:[B,D,k]}],"drop-shadow":[{"drop-shadow":["","none",P,Zn,Yn]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",B,D,k]}],"hue-rotate":[{"hue-rotate":[B,D,k]}],invert:[{invert:["",B,D,k]}],saturate:[{saturate:[B,D,k]}],sepia:[{sepia:["",B,D,k]}],"backdrop-filter":[{"backdrop-filter":["","none",D,k]}],"backdrop-blur":[{"backdrop-blur":Ve()}],"backdrop-brightness":[{"backdrop-brightness":[B,D,k]}],"backdrop-contrast":[{"backdrop-contrast":[B,D,k]}],"backdrop-grayscale":[{"backdrop-grayscale":["",B,D,k]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[B,D,k]}],"backdrop-invert":[{"backdrop-invert":["",B,D,k]}],"backdrop-opacity":[{"backdrop-opacity":[B,D,k]}],"backdrop-saturate":[{"backdrop-saturate":[B,D,k]}],"backdrop-sepia":[{"backdrop-sepia":["",B,D,k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":f()}],"border-spacing-x":[{"border-spacing-x":f()}],"border-spacing-y":[{"border-spacing-y":f()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",D,k]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[B,"initial",D,k]}],ease:[{ease:["linear","initial",q,D,k]}],delay:[{delay:[B,D,k]}],animate:[{animate:["none",G,D,k]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[M,D,k]}],"perspective-origin":[{"perspective-origin":at()}],rotate:[{rotate:ue()}],"rotate-x":[{"rotate-x":ue()}],"rotate-y":[{"rotate-y":ue()}],"rotate-z":[{"rotate-z":ue()}],scale:[{scale:ke()}],"scale-x":[{"scale-x":ke()}],"scale-y":[{"scale-y":ke()}],"scale-z":[{"scale-z":ke()}],"scale-3d":["scale-3d"],skew:[{skew:Ye()}],"skew-x":[{"skew-x":Ye()}],"skew-y":[{"skew-y":Ye()}],transform:[{transform:[D,k,"","none","gpu","cpu"]}],"transform-origin":[{origin:at()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:he()}],"translate-x":[{"translate-x":he()}],"translate-y":[{"translate-y":he()}],"translate-z":[{"translate-z":he()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",D,k]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",D,k]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[B,gn,_e,is]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Eu=Yc(yu);function Sa(...n){return Eu(pa(n))}const vu=kc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function nm({className:n,variant:t,size:e,asChild:r=!1,...i}){const o=r?bc:"button";return hr.jsx(o,{"data-slot":"button",className:Sa(vu({variant:t,size:e,className:n})),...i})}function rm({className:n,type:t,...e}){return hr.jsx("input",{type:t,"data-slot":"input",className:Sa("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...e})}const Tu=()=>{};var uo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},wu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],u=n[e++],d=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,u=l?n[i+1]:0,d=i+2<n.length,p=d?n[i+2]:0,v=o>>2,T=(o&3)<<4|u>>4;let b=(u&15)<<2|p>>6,P=p&63;d||(P=64,l||(b=64)),r.push(e[v],e[T],e[b],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ca(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const p=i<n.length?e[n.charAt(i)]:64;++i;const T=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||p==null||T==null)throw new Iu;const b=o<<2|u>>4;if(r.push(b),p!==64){const P=u<<4&240|p>>2;if(r.push(P),T!==64){const N=p<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Au=function(n){const t=Ca(n);return Pa.encodeByteArray(t,!0)},pr=function(n){return Au(n).replace(/\./g,"")},bu=function(n){try{return Pa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=()=>Ru().__FIREBASE_DEFAULTS__,Cu=()=>{if(typeof process>"u"||typeof uo>"u")return;const n=uo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&bu(n[1]);return t&&JSON.parse(t)},xs=()=>{try{return Tu()||Su()||Cu()||Pu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vu=n=>xs()?.emulatorHosts?.[n],ku=n=>{const t=Vu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Va=()=>xs()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[pr(JSON.stringify(e)),pr(JSON.stringify(l)),""].join(".")}const En={};function Ou(){const n={prod:[],emulator:[]};for(const t of Object.keys(En))En[t]?n.emulator.push(t):n.prod.push(t);return n}function Mu(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ho=!1;function Lu(n,t){if(typeof window>"u"||typeof document>"u"||!Ns(window.location.host)||En[n]===t||En[n]||ho)return;En[n]=t;function e(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=Ou().prod.length>0;function l(){const b=document.getElementById(r);b&&b.remove()}function u(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function d(b,P){b.setAttribute("width","24"),b.setAttribute("id",P),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function p(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{ho=!0,l()},b}function v(b,P){b.setAttribute("id",P),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=Mu(r),P=e("text"),N=document.getElementById(P)||document.createElement("span"),M=e("learnmore"),V=document.getElementById(M)||document.createElement("a"),q=e("preprendIcon"),G=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const H=b.element;u(H),v(V,M);const st=p();d(G,q),H.append(G,N,V,st),document.body.appendChild(H)}o?(N.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){const n=xs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bu(){return!Uu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ju(){try{return typeof indexedDB=="object"}catch{return!1}}function zu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="FirebaseError";class Ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=$u,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?qu(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new Ke(i,u,r)}}function qu(n,t){return n.replace(Gu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gu=/\{\$([^}]+)}/g;function mr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(fo(o)&&fo(l)){if(!mr(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function fo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Du;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ku(t))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ye){return this.instances.has(t)}getOptions(t=ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ye){return this.component?this.component.multipleInstances?t:ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wu(n){return n===ye?void 0:n}function Ku(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Xu={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Ju=$.INFO,Yu={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Zu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Yu[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=Ju,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const th=(n,t)=>t.some(e=>n instanceof e);let po,mo;function eh(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return mo||(mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xa=new WeakMap,ms=new WeakMap,Na=new WeakMap,os=new WeakMap,Os=new WeakMap;function rh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(ne(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&xa.set(e,n)}).catch(()=>{}),Os.set(t,n),t}function sh(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});ms.set(n,t)}let gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Na.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ne(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ih(n){gs=n(gs)}function oh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(as(this),t,...e);return Na.set(r,t.sort?t.sort():[t]),ne(r)}:nh().includes(n)?function(...t){return n.apply(as(this),t),ne(xa.get(this))}:function(...t){return ne(n.apply(as(this),t))}}function ah(n){return typeof n=="function"?oh(n):(n instanceof IDBTransaction&&sh(n),th(n,eh())?new Proxy(n,gs):n)}function ne(n){if(n instanceof IDBRequest)return rh(n);if(os.has(n))return os.get(n);const t=ah(n);return t!==n&&(os.set(n,t),Os.set(t,n)),t}const as=n=>Os.get(n);function lh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),u=ne(l);return r&&l.addEventListener("upgradeneeded",d=>{r(ne(l.result),d.oldVersion,d.newVersion,ne(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const ch=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],ls=new Map;function go(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=uh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ch.includes(e)))return;const o=async function(l,...u){const d=this.transaction(l,i?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[e](...u),i&&d.done]))[0]};return ls.set(t,o),o}ih(n=>({...n,get:(t,e,r)=>go(t,e)||n.get(t,e,r),has:(t,e)=>!!go(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dh(n){return n.getComponent()?.type==="VERSION"}const _s="@firebase/app",_o="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Da("@firebase/app"),fh="@firebase/app-compat",ph="@firebase/analytics-compat",mh="@firebase/analytics",gh="@firebase/app-check-compat",_h="@firebase/app-check",yh="@firebase/auth",Eh="@firebase/auth-compat",vh="@firebase/database",Th="@firebase/data-connect",wh="@firebase/database-compat",Ih="@firebase/functions",Ah="@firebase/functions-compat",bh="@firebase/installations",Rh="@firebase/installations-compat",Sh="@firebase/messaging",Ch="@firebase/messaging-compat",Ph="@firebase/performance",Vh="@firebase/performance-compat",kh="@firebase/remote-config",Dh="@firebase/remote-config-compat",xh="@firebase/storage",Nh="@firebase/storage-compat",Oh="@firebase/firestore",Mh="@firebase/ai",Lh="@firebase/firestore-compat",Fh="firebase",Uh="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Bh={[_s]:"fire-core",[fh]:"fire-core-compat",[mh]:"fire-analytics",[ph]:"fire-analytics-compat",[_h]:"fire-app-check",[gh]:"fire-app-check-compat",[yh]:"fire-auth",[Eh]:"fire-auth-compat",[vh]:"fire-rtdb",[Th]:"fire-data-connect",[wh]:"fire-rtdb-compat",[Ih]:"fire-fn",[Ah]:"fire-fn-compat",[bh]:"fire-iid",[Rh]:"fire-iid-compat",[Sh]:"fire-fcm",[Ch]:"fire-fcm-compat",[Ph]:"fire-perf",[Vh]:"fire-perf-compat",[kh]:"fire-rc",[Dh]:"fire-rc-compat",[xh]:"fire-gcs",[Nh]:"fire-gcs-compat",[Oh]:"fire-fst",[Lh]:"fire-fst-compat",[Mh]:"fire-vertex","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,jh=new Map,Es=new Map;function yo(n,t){try{n.container.addComponent(t)}catch(e){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function _r(n){const t=n.name;if(Es.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,n);for(const e of gr.values())yo(e,n);for(const e of jh.values())yo(e,n);return!0}function zh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function $h(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},re=new ka("app","Firebase",qh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=Uh;function Oa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ys,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw re.create("bad-app-name",{appName:String(i)});if(e||(e=Va()),!e)throw re.create("no-options");const o=gr.get(i);if(o){if(mr(e,o.options)&&mr(r,o.config))return o;throw re.create("duplicate-app",{appName:i})}const l=new Qu(i);for(const d of Es.values())l.addComponent(d);const u=new Gh(e,r,l);return gr.set(i,u),u}function Wh(n=ys){const t=gr.get(n);if(!t&&n===ys&&Va())return Oa();if(!t)throw re.create("no-app",{appName:n});return t}function Fe(n,t,e){let r=Bh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}_r(new Rn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="firebase-heartbeat-database",Qh=1,Sn="firebase-heartbeat-store";let cs=null;function Ma(){return cs||(cs=lh(Kh,Qh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw re.create("idb-open",{originalErrorMessage:n.message})})),cs}async function Xh(n){try{const e=(await Ma()).transaction(Sn),r=await e.objectStore(Sn).get(La(n));return await e.done,r}catch(t){if(t instanceof Ke)Wt.warn(t.message);else{const e=re.create("idb-get",{originalErrorMessage:t?.message});Wt.warn(e.message)}}}async function Eo(n,t){try{const r=(await Ma()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(t,La(n)),await r.done}catch(e){if(e instanceof Ke)Wt.warn(e.message);else{const r=re.create("idb-set",{originalErrorMessage:e?.message});Wt.warn(r.message)}}}function La(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=1024,Yh=30;class Zh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ed(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Yh){const i=nd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Wt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vo(),{heartbeatsToSend:e,unsentEntries:r}=td(this._heartbeatsCache.heartbeats),i=pr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Wt.warn(t),""}}}function vo(){return new Date().toISOString().substring(0,10)}function td(n,t=Jh){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),To(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ed{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ju()?zu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Xh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eo(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function To(n){return pr(JSON.stringify({version:2,heartbeats:n})).length}function nd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n){_r(new Rn("platform-logger",t=>new hh(t),"PRIVATE")),_r(new Rn("heartbeat",t=>new Zh(t),"PRIVATE")),Fe(_s,_o,n),Fe(_s,_o,"esm2020"),Fe("fire-js","")}rd("");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ms;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,f){function m(){}m.prototype=f.prototype,y.F=f.prototype,y.prototype=new m,y.prototype.constructor=y,y.D=function(E,_,w){for(var g=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)g[ut-2]=arguments[ut];return f.prototype[_].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,f,m){m||(m=0);const E=Array(16);if(typeof f=="string")for(var _=0;_<16;++_)E[_]=f.charCodeAt(m++)|f.charCodeAt(m++)<<8|f.charCodeAt(m++)<<16|f.charCodeAt(m++)<<24;else for(_=0;_<16;++_)E[_]=f[m++]|f[m++]<<8|f[m++]<<16|f[m++]<<24;f=y.g[0],m=y.g[1],_=y.g[2];let w=y.g[3],g;g=f+(w^m&(_^w))+E[0]+3614090360&4294967295,f=m+(g<<7&4294967295|g>>>25),g=w+(_^f&(m^_))+E[1]+3905402710&4294967295,w=f+(g<<12&4294967295|g>>>20),g=_+(m^w&(f^m))+E[2]+606105819&4294967295,_=w+(g<<17&4294967295|g>>>15),g=m+(f^_&(w^f))+E[3]+3250441966&4294967295,m=_+(g<<22&4294967295|g>>>10),g=f+(w^m&(_^w))+E[4]+4118548399&4294967295,f=m+(g<<7&4294967295|g>>>25),g=w+(_^f&(m^_))+E[5]+1200080426&4294967295,w=f+(g<<12&4294967295|g>>>20),g=_+(m^w&(f^m))+E[6]+2821735955&4294967295,_=w+(g<<17&4294967295|g>>>15),g=m+(f^_&(w^f))+E[7]+4249261313&4294967295,m=_+(g<<22&4294967295|g>>>10),g=f+(w^m&(_^w))+E[8]+1770035416&4294967295,f=m+(g<<7&4294967295|g>>>25),g=w+(_^f&(m^_))+E[9]+2336552879&4294967295,w=f+(g<<12&4294967295|g>>>20),g=_+(m^w&(f^m))+E[10]+4294925233&4294967295,_=w+(g<<17&4294967295|g>>>15),g=m+(f^_&(w^f))+E[11]+2304563134&4294967295,m=_+(g<<22&4294967295|g>>>10),g=f+(w^m&(_^w))+E[12]+1804603682&4294967295,f=m+(g<<7&4294967295|g>>>25),g=w+(_^f&(m^_))+E[13]+4254626195&4294967295,w=f+(g<<12&4294967295|g>>>20),g=_+(m^w&(f^m))+E[14]+2792965006&4294967295,_=w+(g<<17&4294967295|g>>>15),g=m+(f^_&(w^f))+E[15]+1236535329&4294967295,m=_+(g<<22&4294967295|g>>>10),g=f+(_^w&(m^_))+E[1]+4129170786&4294967295,f=m+(g<<5&4294967295|g>>>27),g=w+(m^_&(f^m))+E[6]+3225465664&4294967295,w=f+(g<<9&4294967295|g>>>23),g=_+(f^m&(w^f))+E[11]+643717713&4294967295,_=w+(g<<14&4294967295|g>>>18),g=m+(w^f&(_^w))+E[0]+3921069994&4294967295,m=_+(g<<20&4294967295|g>>>12),g=f+(_^w&(m^_))+E[5]+3593408605&4294967295,f=m+(g<<5&4294967295|g>>>27),g=w+(m^_&(f^m))+E[10]+38016083&4294967295,w=f+(g<<9&4294967295|g>>>23),g=_+(f^m&(w^f))+E[15]+3634488961&4294967295,_=w+(g<<14&4294967295|g>>>18),g=m+(w^f&(_^w))+E[4]+3889429448&4294967295,m=_+(g<<20&4294967295|g>>>12),g=f+(_^w&(m^_))+E[9]+568446438&4294967295,f=m+(g<<5&4294967295|g>>>27),g=w+(m^_&(f^m))+E[14]+3275163606&4294967295,w=f+(g<<9&4294967295|g>>>23),g=_+(f^m&(w^f))+E[3]+4107603335&4294967295,_=w+(g<<14&4294967295|g>>>18),g=m+(w^f&(_^w))+E[8]+1163531501&4294967295,m=_+(g<<20&4294967295|g>>>12),g=f+(_^w&(m^_))+E[13]+2850285829&4294967295,f=m+(g<<5&4294967295|g>>>27),g=w+(m^_&(f^m))+E[2]+4243563512&4294967295,w=f+(g<<9&4294967295|g>>>23),g=_+(f^m&(w^f))+E[7]+1735328473&4294967295,_=w+(g<<14&4294967295|g>>>18),g=m+(w^f&(_^w))+E[12]+2368359562&4294967295,m=_+(g<<20&4294967295|g>>>12),g=f+(m^_^w)+E[5]+4294588738&4294967295,f=m+(g<<4&4294967295|g>>>28),g=w+(f^m^_)+E[8]+2272392833&4294967295,w=f+(g<<11&4294967295|g>>>21),g=_+(w^f^m)+E[11]+1839030562&4294967295,_=w+(g<<16&4294967295|g>>>16),g=m+(_^w^f)+E[14]+4259657740&4294967295,m=_+(g<<23&4294967295|g>>>9),g=f+(m^_^w)+E[1]+2763975236&4294967295,f=m+(g<<4&4294967295|g>>>28),g=w+(f^m^_)+E[4]+1272893353&4294967295,w=f+(g<<11&4294967295|g>>>21),g=_+(w^f^m)+E[7]+4139469664&4294967295,_=w+(g<<16&4294967295|g>>>16),g=m+(_^w^f)+E[10]+3200236656&4294967295,m=_+(g<<23&4294967295|g>>>9),g=f+(m^_^w)+E[13]+681279174&4294967295,f=m+(g<<4&4294967295|g>>>28),g=w+(f^m^_)+E[0]+3936430074&4294967295,w=f+(g<<11&4294967295|g>>>21),g=_+(w^f^m)+E[3]+3572445317&4294967295,_=w+(g<<16&4294967295|g>>>16),g=m+(_^w^f)+E[6]+76029189&4294967295,m=_+(g<<23&4294967295|g>>>9),g=f+(m^_^w)+E[9]+3654602809&4294967295,f=m+(g<<4&4294967295|g>>>28),g=w+(f^m^_)+E[12]+3873151461&4294967295,w=f+(g<<11&4294967295|g>>>21),g=_+(w^f^m)+E[15]+530742520&4294967295,_=w+(g<<16&4294967295|g>>>16),g=m+(_^w^f)+E[2]+3299628645&4294967295,m=_+(g<<23&4294967295|g>>>9),g=f+(_^(m|~w))+E[0]+4096336452&4294967295,f=m+(g<<6&4294967295|g>>>26),g=w+(m^(f|~_))+E[7]+1126891415&4294967295,w=f+(g<<10&4294967295|g>>>22),g=_+(f^(w|~m))+E[14]+2878612391&4294967295,_=w+(g<<15&4294967295|g>>>17),g=m+(w^(_|~f))+E[5]+4237533241&4294967295,m=_+(g<<21&4294967295|g>>>11),g=f+(_^(m|~w))+E[12]+1700485571&4294967295,f=m+(g<<6&4294967295|g>>>26),g=w+(m^(f|~_))+E[3]+2399980690&4294967295,w=f+(g<<10&4294967295|g>>>22),g=_+(f^(w|~m))+E[10]+4293915773&4294967295,_=w+(g<<15&4294967295|g>>>17),g=m+(w^(_|~f))+E[1]+2240044497&4294967295,m=_+(g<<21&4294967295|g>>>11),g=f+(_^(m|~w))+E[8]+1873313359&4294967295,f=m+(g<<6&4294967295|g>>>26),g=w+(m^(f|~_))+E[15]+4264355552&4294967295,w=f+(g<<10&4294967295|g>>>22),g=_+(f^(w|~m))+E[6]+2734768916&4294967295,_=w+(g<<15&4294967295|g>>>17),g=m+(w^(_|~f))+E[13]+1309151649&4294967295,m=_+(g<<21&4294967295|g>>>11),g=f+(_^(m|~w))+E[4]+4149444226&4294967295,f=m+(g<<6&4294967295|g>>>26),g=w+(m^(f|~_))+E[11]+3174756917&4294967295,w=f+(g<<10&4294967295|g>>>22),g=_+(f^(w|~m))+E[2]+718787259&4294967295,_=w+(g<<15&4294967295|g>>>17),g=m+(w^(_|~f))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(_+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.v=function(y,f){f===void 0&&(f=y.length);const m=f-this.blockSize,E=this.C;let _=this.h,w=0;for(;w<f;){if(_==0)for(;w<=m;)i(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<f;)if(E[_++]=y.charCodeAt(w++),_==this.blockSize){i(this,E),_=0;break}}else for(;w<f;)if(E[_++]=y[w++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=f},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;f=this.o*8;for(var m=y.length-8;m<y.length;++m)y[m]=f&255,f/=256;for(this.v(y),y=Array(16),f=0,m=0;m<4;++m)for(let E=0;E<32;E+=8)y[f++]=this.g[m]>>>E&255;return y};function o(y,f){var m=u;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=f(y)}function l(y,f){this.h=f;const m=[];let E=!0;for(let _=y.length-1;_>=0;_--){const w=y[_]|0;E&&w==f||(m[_]=w,E=!1)}this.g=m}var u={};function d(y){return-128<=y&&y<128?o(y,function(f){return new l([f|0],f<0?-1:0)}):new l([y|0],y<0?-1:0)}function p(y){if(isNaN(y)||!isFinite(y))return T;if(y<0)return V(p(-y));const f=[];let m=1;for(let E=0;y>=m;E++)f[E]=y/m|0,m*=4294967296;return new l(f,0)}function v(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return V(v(y.substring(1),f));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=p(Math.pow(f,8));let E=T;for(let w=0;w<y.length;w+=8){var _=Math.min(8,y.length-w);const g=parseInt(y.substring(w,w+_),f);_<8?(_=p(Math.pow(f,_)),E=E.j(_).add(p(g))):(E=E.j(m),E=E.add(p(g)))}return E}var T=d(0),b=d(1),P=d(16777216);n=l.prototype,n.m=function(){if(M(this))return-V(this).m();let y=0,f=1;for(let m=0;m<this.g.length;m++){const E=this.i(m);y+=(E>=0?E:4294967296+E)*f,f*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(M(this))return"-"+V(this).toString(y);const f=p(Math.pow(y,6));var m=this;let E="";for(;;){const _=st(m,f).g;m=q(m,_.j(f));let w=((m.g.length>0?m.g[0]:m.h)>>>0).toString(y);if(m=_,N(m))return w+E;for(;w.length<6;)w="0"+w;E=w+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function M(y){return y.h==-1}n.l=function(y){return y=q(this,y),M(y)?-1:N(y)?0:1};function V(y){const f=y.g.length,m=[];for(let E=0;E<f;E++)m[E]=~y.g[E];return new l(m,~y.h).add(b)}n.abs=function(){return M(this)?V(this):this},n.add=function(y){const f=Math.max(this.g.length,y.g.length),m=[];let E=0;for(let _=0;_<=f;_++){let w=E+(this.i(_)&65535)+(y.i(_)&65535),g=(w>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=g>>>16,w&=65535,g&=65535,m[_]=g<<16|w}return new l(m,m[m.length-1]&-2147483648?-1:0)};function q(y,f){return y.add(V(f))}n.j=function(y){if(N(this)||N(y))return T;if(M(this))return M(y)?V(this).j(V(y)):V(V(this).j(y));if(M(y))return V(this.j(V(y)));if(this.l(P)<0&&y.l(P)<0)return p(this.m()*y.m());const f=this.g.length+y.g.length,m=[];for(var E=0;E<2*f;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const w=this.i(E)>>>16,g=this.i(E)&65535,ut=y.i(_)>>>16,St=y.i(_)&65535;m[2*E+2*_]+=g*St,G(m,2*E+2*_),m[2*E+2*_+1]+=w*St,G(m,2*E+2*_+1),m[2*E+2*_+1]+=g*ut,G(m,2*E+2*_+1),m[2*E+2*_+2]+=w*ut,G(m,2*E+2*_+2)}for(y=0;y<f;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=f;y<2*f;y++)m[y]=0;return new l(m,0)};function G(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function H(y,f){this.g=y,this.h=f}function st(y,f){if(N(f))throw Error("division by zero");if(N(y))return new H(T,T);if(M(y))return f=st(V(y),f),new H(V(f.g),V(f.h));if(M(f))return f=st(y,V(f)),new H(V(f.g),f.h);if(y.g.length>30){if(M(y)||M(f))throw Error("slowDivide_ only works with positive integers.");for(var m=b,E=f;E.l(y)<=0;)m=at(m),E=at(E);var _=Z(m,1),w=Z(E,1);for(E=Z(E,2),m=Z(m,2);!N(E);){var g=w.add(E);g.l(y)<=0&&(_=_.add(m),w=g),E=Z(E,1),m=Z(m,1)}return f=q(y,_.j(f)),new H(_,f)}for(_=T;y.l(f)>=0;){for(m=Math.max(1,Math.floor(y.m()/f.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),w=p(m),g=w.j(f);M(g)||g.l(y)>0;)m-=E,w=p(m),g=w.j(f);N(w)&&(w=b),_=_.add(w),y=q(y,g)}return new H(_,y)}n.B=function(y){return st(this,y).h},n.and=function(y){const f=Math.max(this.g.length,y.g.length),m=[];for(let E=0;E<f;E++)m[E]=this.i(E)&y.i(E);return new l(m,this.h&y.h)},n.or=function(y){const f=Math.max(this.g.length,y.g.length),m=[];for(let E=0;E<f;E++)m[E]=this.i(E)|y.i(E);return new l(m,this.h|y.h)},n.xor=function(y){const f=Math.max(this.g.length,y.g.length),m=[];for(let E=0;E<f;E++)m[E]=this.i(E)^y.i(E);return new l(m,this.h^y.h)};function at(y){const f=y.g.length+1,m=[];for(let E=0;E<f;E++)m[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(m,y.h)}function Z(y,f){const m=f>>5;f%=32;const E=y.g.length-m,_=[];for(let w=0;w<E;w++)_[w]=f>0?y.i(w+m)>>>f|y.i(w+m+1)<<32-f:y.i(w+m);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=v,Ms=l}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,yn,Ua,or,vs,Ba,ja,za;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in c))break t;c=c[I]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&c.push([h,a[h]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function d(s,a,c){return s.call.apply(s.bind,arguments)}function p(s,a,c){return p=d,p.apply(null,arguments)}function v(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function T(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(h,I,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return a.prototype[I].apply(h,C)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const a=s.length;if(a>0){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function N(s,a){for(let h=1;h<arguments.length;h++){const I=arguments[h];var c=typeof I;if(c=c!="object"?c:I?Array.isArray(I)?"array":c:"null",c=="array"||c=="object"&&typeof I.length=="number"){c=s.length||0;const A=I.length||0;s.length=c+A;for(let C=0;C<A;C++)s[c+C]=I[C]}else s.push(I)}}class M{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function V(s){l.setTimeout(()=>{throw s},0)}function q(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class G{constructor(){this.h=this.g=null}add(a,c){const h=H.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var H=new M(()=>new st,s=>s.reset());class st{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let at,Z=!1,y=new G,f=()=>{const s=Promise.resolve(void 0);at=()=>{s.then(m)}};function m(){for(var s;s=q();){try{s.h.call(s.g)}catch(c){V(c)}var a=H;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}Z=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function g(s){return/^[\s\xa0]*$/.test(s)}function ut(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}T(ut,_),ut.prototype.init=function(s,a){const c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&ut.Z.h.call(this)},ut.prototype.h=function(){ut.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Dt=0;function zt(s,a,c,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=I,this.key=++Dt,this.da=this.fa=!1}function L(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ce(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function Un(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function Je(s){const a={};for(const c in s)a[c]=s[c];return a}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(s,a){let c,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(c in h)s[c]=h[c];for(let A=0;A<Ce.length;A++)c=Ce[A],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function dt(s){this.src=s,this.g={},this.h=0}dt.prototype.add=function(s,a,c,h,I){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const C=Pe(s,a,h,I);return C>-1?(a=s[C],c||(a.fa=!1)):(a=new zt(a,this.src,A,!!h,I),a.fa=c,s.push(a)),a};function Kt(s,a){const c=a.type;if(c in s.g){var h=s.g[c],I=Array.prototype.indexOf.call(h,a,void 0),A;(A=I>=0)&&Array.prototype.splice.call(h,I,1),A&&(L(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Pe(s,a,c,h){for(let I=0;I<s.length;++I){const A=s[I];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==h)return I}return-1}var et="closure_lm_"+(Math.random()*1e6|0),Ve={};function ue(s,a,c,h,I){if(Array.isArray(a)){for(let A=0;A<a.length;A++)ue(s,a[A],c,h,I);return null}return c=li(c),s&&s[St]?s.J(a,c,u(h)?!!h.capture:!1,I):ke(s,a,c,!1,h,I)}function ke(s,a,c,h,I,A){if(!a)throw Error("Invalid event type");const C=u(I)?!!I.capture:!!I;let U=Ur(s);if(U||(s[et]=U=new dt(s)),c=U.add(a,c,h,C,A),c.proxy)return c;if(h=Ye(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)w||(I=C),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(ai(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ye(){function s(c){return a.call(s.src,s.listener,c)}const a=Wl;return s}function he(s,a,c,h,I){if(Array.isArray(a))for(var A=0;A<a.length;A++)he(s,a[A],c,h,I);else h=u(h)?!!h.capture:!!h,c=li(c),s&&s[St]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],c=Pe(a,c,h,I),c>-1&&(L(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=Ur(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Pe(a,c,h,I)),(c=s>-1?a[s]:null)&&Fr(c))}function Fr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[St])Kt(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(ai(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=Ur(a))?(Kt(c,s),c.h==0&&(c.src=null,a[et]=null)):L(s)}}}function ai(s){return s in Ve?Ve[s]:Ve[s]="on"+s}function Wl(s,a){if(s.da)s=!0;else{a=new ut(a,this);const c=s.listener,h=s.ha||s.src;s.fa&&Fr(s),s=c.call(h,a)}return s}function Ur(s){return s=s[et],s instanceof dt?s:null}var Br="__closure_events_fn_"+(Math.random()*1e9>>>0);function li(s){return typeof s=="function"?s:(s[Br]||(s[Br]=function(a){return s.handleEvent(a)}),s[Br])}function vt(){E.call(this),this.i=new dt(this),this.M=this,this.G=null}T(vt,E),vt.prototype[St]=!0,vt.prototype.removeEventListener=function(s,a,c,h){he(this,s,a,c,h)};function bt(s,a){var c,h=s.G;if(h)for(c=[];h;h=h.G)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var I=a;a=new _(h,s),ht(a,I)}I=!0;let A,C;if(c)for(C=c.length-1;C>=0;C--)A=a.g=c[C],I=Bn(A,h,!0,a)&&I;if(A=a.g=s,I=Bn(A,h,!0,a)&&I,I=Bn(A,h,!1,a)&&I,c)for(C=0;C<c.length;C++)A=a.g=c[C],I=Bn(A,h,!1,a)&&I}vt.prototype.N=function(){if(vt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let h=0;h<c.length;h++)L(c[h]);delete s.g[a],s.h--}}this.G=null},vt.prototype.J=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},vt.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function Bn(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let I=!0;for(let A=0;A<a.length;++A){const C=a[A];if(C&&!C.da&&C.capture==c){const U=C.listener,lt=C.ha||C.src;C.fa&&Kt(s.i,C),I=U.call(lt,h)!==!1&&I}}return I&&!h.defaultPrevented}function Kl(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=p(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function ci(s){s.g=Kl(()=>{s.g=null,s.i&&(s.i=!1,ci(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ql extends E{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ci(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(s){E.call(this),this.h=s,this.g={}}T(Ze,E);var ui=[];function hi(s){ce(s.g,function(a,c){this.g.hasOwnProperty(c)&&Fr(a)},s),s.g={}}Ze.prototype.N=function(){Ze.Z.N.call(this),hi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=l.JSON.stringify,Xl=l.JSON.parse,Jl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function di(){}function fi(){}var tn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zr(){_.call(this,"d")}T(zr,_);function $r(){_.call(this,"c")}T($r,_);var de={},pi=null;function jn(){return pi=pi||new vt}de.Ia="serverreachability";function mi(s){_.call(this,de.Ia,s)}T(mi,_);function en(s){const a=jn();bt(a,new mi(a))}de.STAT_EVENT="statevent";function gi(s,a){_.call(this,de.STAT_EVENT,s),this.stat=a}T(gi,_);function Rt(s){const a=jn();bt(a,new gi(a,s))}de.Ja="timingevent";function _i(s,a){_.call(this,de.Ja,s),this.size=a}T(_i,_);function nn(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function rn(){this.g=!0}rn.prototype.ua=function(){this.g=!1};function Yl(s,a,c,h,I,A){s.info(function(){if(s.g)if(A){var C="",U=A.split("&");for(let K=0;K<U.length;K++){var lt=U[K].split("=");if(lt.length>1){const ft=lt[0];lt=lt[1];const Ft=ft.split("_");C=Ft.length>=2&&Ft[1]=="type"?C+(ft+"="+lt+"&"):C+(ft+"=redacted&")}}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+c+`
`+C})}function Zl(s,a,c,h,I,A,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+c+`
`+A+" "+C})}function De(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ec(s,c)+(h?" "+h:"")})}function tc(s,a){s.info(function(){return"TIMEOUT: "+a})}rn.prototype.info=function(){};function ec(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var c=A[s];if(!(c.length<2)){var h=c[1];if(Array.isArray(h)&&!(h.length<1)){var I=h[0];if(I!="noop"&&I!="stop"&&I!="close")for(let C=1;C<h.length;C++)h[C]=""}}}}return jr(A)}catch{return a}}var zn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ei;function qr(){}T(qr,di),qr.prototype.g=function(){return new XMLHttpRequest},Ei=new qr;function sn(s){return encodeURIComponent(String(s))}function nc(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function Qt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.S=h||1,this.V=new Ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vi}function vi(){this.i=null,this.g="",this.h=!1}var Ti={},Gr={};function Hr(s,a,c){s.M=1,s.A=qn(Lt(a)),s.u=c,s.R=!0,wi(s,null)}function wi(s,a){s.F=Date.now(),$n(s),s.B=Lt(s.A);var c=s.B,h=s.S;Array.isArray(h)||(h=[String(h)]),Oi(c.i,"t",h),s.C=0,c=s.j.L,s.h=new vi,s.g=Zi(s.j,c?a:null,!s.u),s.P>0&&(s.O=new Ql(p(s.Y,s,s.g),s.P)),a=s.V,c=s.g,h=s.ba;var I="readystatechange";Array.isArray(I)||(I&&(ui[0]=I.toString()),I=ui);for(let A=0;A<I.length;A++){const C=ue(c,I[A],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.J?Je(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),en(),Yl(s.i,s.v,s.B,s.l,s.S,s.u)}Qt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Yt(s)==3?a.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const U=Yt(this.g),lt=this.g.ya(),K=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||zi(this.g)))){this.K||U!=4||lt==7||(lt==8||K<=0?en(3):en(2)),Wr(this);var a=this.g.ca();this.X=a;var c=rc(this);if(this.o=a==200,Zl(this.i,this.v,this.B,this.l,this.S,U,a),this.o){if(this.U&&!this.L){e:{if(this.g){var h,I=this.g;if((h=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(h)){var A=h;break e}}A=null}if(s=A)De(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kr(this,s);else{this.o=!1,this.m=3,Rt(12),fe(this),on(this);break t}}if(this.R){s=!0;let ft;for(;!this.K&&this.C<c.length;)if(ft=sc(this,c),ft==Gr){U==4&&(this.m=4,Rt(14),s=!1),De(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Ti){this.m=4,Rt(15),De(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else De(this.i,this.l,ft,null),Kr(this,ft);if(Ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,Rt(16),s=!1),this.o=this.o&&s,!s)De(this.i,this.l,c,"[Invalid Chunked Response]"),fe(this),on(this);else if(c.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),ns(C),C.P=!0,Rt(11))}}else De(this.i,this.l,c,null),Kr(this,c);U==4&&fe(this),this.o&&!this.K&&(U==4?Qi(this.j,this):(this.o=!1,$n(this)))}else yc(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),fe(this),on(this)}}}catch{}finally{}};function rc(s){if(!Ii(s))return s.g.la();const a=zi(s.g);if(a==="")return"";let c="";const h=a.length,I=Yt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return fe(s),on(s),"";s.h.i=new l.TextDecoder}for(let A=0;A<h;A++)s.h.h=!0,c+=s.h.i.decode(a[A],{stream:!(I&&A==h-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function Ii(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function sc(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?Gr:(c=Number(a.substring(c,h)),isNaN(c)?Ti:(h+=1,h+c>a.length?Gr:(a=a.slice(h,h+c),s.C=h+c,a)))}Qt.prototype.cancel=function(){this.K=!0,fe(this)};function $n(s){s.T=Date.now()+s.H,Ai(s,s.H)}function Ai(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=nn(p(s.aa,s),a)}function Wr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}Qt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(tc(this.i,this.B),this.M!=2&&(en(),Rt(17)),fe(this),this.m=2,on(this)):Ai(this,this.T-s)};function on(s){s.j.I==0||s.K||Qi(s.j,s)}function fe(s){Wr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,hi(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Kr(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||Qr(c.h,s))){if(!s.L&&Qr(c.h,s)&&c.I==3){try{var h=c.Ba.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Qn(c),Wn(c);else break t;es(c),Rt(18)}}else c.xa=I[1],0<c.xa-c.K&&I[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=nn(p(c.Va,c),6e3));Si(c.h)<=1&&c.ta&&(c.ta=void 0)}else me(c,11)}else if((s.L||c.g==s)&&Qn(c),!g(a))for(I=c.Ba.g.parse(a),a=0;a<I.length;a++){let K=I[a];const ft=K[0];if(!(ft<=c.K))if(c.K=ft,K=K[1],c.I==2)if(K[0]=="c"){c.M=K[1],c.ba=K[2];const Ft=K[3];Ft!=null&&(c.ka=Ft,c.j.info("VER="+c.ka));const ge=K[4];ge!=null&&(c.za=ge,c.j.info("SVER="+c.za));const Zt=K[5];Zt!=null&&typeof Zt=="number"&&Zt>0&&(h=1.5*Zt,c.O=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const te=s.g;if(te){const Jn=te.g?te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var A=h.h;A.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Xr(A,A.h),A.h=null))}if(h.G){const rs=te.g?te.g.getResponseHeader("X-HTTP-Session-Id"):null;rs&&(h.wa=rs,X(h.J,h.G,rs))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),h=c;var C=s;if(h.na=Yi(h,h.L?h.ba:null,h.W),C.L){Ci(h.h,C);var U=C,lt=h.O;lt&&(U.H=lt),U.D&&(Wr(U),$n(U)),h.g=C}else Wi(h);c.i.length>0&&Kn(c)}else K[0]!="stop"&&K[0]!="close"||me(c,7);else c.I==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?me(c,7):ts(c):K[0]!="noop"&&c.l&&c.l.qa(K),c.A=0)}}en(4)}catch{}}var ic=class{constructor(s,a){this.g=s,this.map=a}};function bi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ri(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Si(s){return s.h?1:s.g?s.g.size:0}function Qr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Xr(s,a){s.g?s.g.add(a):s.h=a}function Ci(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}bi.prototype.cancel=function(){if(this.i=Pi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Pi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return P(s.i)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const h=s[c].indexOf("=");let I,A=null;h>=0?(I=s[c].substring(0,h),A=s[c].substring(h+1)):I=s[c],a(I,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Xt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Xt?(this.l=s.l,an(this,s.j),this.o=s.o,this.g=s.g,ln(this,s.u),this.h=s.h,Jr(this,Mi(s.i)),this.m=s.m):s&&(a=String(s).match(Vi))?(this.l=!1,an(this,a[1]||"",!0),this.o=cn(a[2]||""),this.g=cn(a[3]||"",!0),ln(this,a[4]),this.h=cn(a[5]||"",!0),Jr(this,a[6]||"",!0),this.m=cn(a[7]||"")):(this.l=!1,this.i=new hn(null,this.l))}Xt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(un(a,ki,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(un(a,ki,!0),"@"),s.push(sn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(un(c,c.charAt(0)=="/"?cc:lc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",un(c,hc)),s.join("")},Xt.prototype.resolve=function(s){const a=Lt(this);let c=!!s.j;c?an(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var h=s.h;if(c)ln(a,s.u);else if(c=!!s.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var I=a.h.lastIndexOf("/");I!=-1&&(h=a.h.slice(0,I+1)+h)}if(I=h,I==".."||I==".")h="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){h=I.lastIndexOf("/",0)==0,I=I.split("/");const A=[];for(let C=0;C<I.length;){const U=I[C++];U=="."?h&&C==I.length&&A.push(""):U==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),h&&C==I.length&&A.push("")):(A.push(U),h=!0)}h=A.join("/")}else h=I}return c?a.h=h:c=s.i.toString()!=="",c?Jr(a,Mi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function Lt(s){return new Xt(s)}function an(s,a,c){s.j=c?cn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function ln(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Jr(s,a,c){a instanceof hn?(s.i=a,dc(s.i,s.l)):(c||(a=un(a,uc)),s.i=new hn(a,s.l))}function X(s,a,c){s.i.set(a,c)}function qn(s){return X(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function cn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function un(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,ac),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ac(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ki=/[#\/\?@]/g,lc=/[#\?:]/g,cc=/[#\?]/g,uc=/[#\?@]/g,hc=/#/g;function hn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function pe(s){s.g||(s.g=new Map,s.h=0,s.i&&oc(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=hn.prototype,n.add=function(s,a){pe(this),this.i=null,s=xe(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Di(s,a){pe(s),a=xe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function xi(s,a){return pe(s),a=xe(s,a),s.g.has(a)}n.forEach=function(s,a){pe(this),this.g.forEach(function(c,h){c.forEach(function(I){s.call(a,I,h,this)},this)},this)};function Ni(s,a){pe(s);let c=[];if(typeof a=="string")xi(s,a)&&(c=c.concat(s.g.get(xe(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return pe(this),this.i=null,s=xe(this,s),xi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=Ni(this,s),s.length>0?String(s[0]):a):a};function Oi(s,a,c){Di(s,a),c.length>0&&(s.i=null,s.g.set(xe(s,a),P(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let h=0;h<a.length;h++){var c=a[h];const I=sn(c);c=Ni(this,c);for(let A=0;A<c.length;A++){let C=I;c[A]!==""&&(C+="="+sn(c[A])),s.push(C)}}return this.i=s.join("&")};function Mi(s){const a=new hn;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function xe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function dc(s,a){a&&!s.j&&(pe(s),s.i=null,s.g.forEach(function(c,h){const I=h.toLowerCase();h!=I&&(Di(this,h),Oi(this,I,c))},s)),s.j=a}function fc(s,a){const c=new rn;if(l.Image){const h=new Image;h.onload=v(Jt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=v(Jt,c,"TestLoadImage: error",!1,a,h),h.onabort=v(Jt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=v(Jt,c,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function pc(s,a){const c=new rn,h=new AbortController,I=setTimeout(()=>{h.abort(),Jt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(I),A.ok?Jt(c,"TestPingServer: ok",!0,a):Jt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Jt(c,"TestPingServer: error",!1,a)})}function Jt(s,a,c,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(c)}catch{}}function mc(){this.g=new Jl}function Yr(s){this.i=s.Sb||null,this.h=s.ab||!1}T(Yr,di),Yr.prototype.g=function(){return new Gn(this.i,this.h)};function Gn(s,a){vt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Gn,vt),n=Gn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,fn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Li(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Li(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?dn(this):fn(this),this.readyState==3&&Li(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,dn(this))},n.Na=function(s){this.g&&(this.response=s,dn(this))},n.ga=function(){this.g&&dn(this)};function dn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,fn(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function fn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Fi(s){let a="";return ce(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Zr(s,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=Fi(c),typeof s=="string"?c!=null&&sn(c):X(s,a,c))}function nt(s){vt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(nt,vt);var gc=/^https?$/i,_c=["POST","PUT"];n=nt.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ei.g(),this.g.onreadystatechange=b(p(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){Ui(this,A);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)c.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())c.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(_c,a,void 0)>=0)||h||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){Ui(this,A)}};function Ui(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Bi(s),Hn(s)}function Bi(s){s.A||(s.A=!0,bt(s,"complete"),bt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,bt(this,"complete"),bt(this,"abort"),Hn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hn(this,!0)),nt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ji(this):this.Xa())},n.Xa=function(){ji(this)};function ji(s){if(s.h&&typeof o<"u"){if(s.v&&Yt(s)==4)setTimeout(s.Ca.bind(s),0);else if(bt(s,"readystatechange"),Yt(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=A===0){let C=String(s.D).match(Vi)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),h=!gc.test(C?C.toLowerCase():"")}c=h}if(c)bt(s,"complete"),bt(s,"success");else{s.o=6;try{var I=Yt(s)>2?s.g.statusText:""}catch{I=""}s.l=I+" ["+s.ca()+"]",Bi(s)}}finally{Hn(s)}}}}function Hn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||bt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Xl(a)}};function zi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function yc(s){const a={};s=(s.g&&Yt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(g(s[h]))continue;var c=nc(s[h]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[I]||[];a[I]=A,A.push(c)}Un(a,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function pn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function $i(s){this.za=0,this.i=[],this.j=new rn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pn("baseRetryDelayMs",5e3,s),this.Za=pn("retryDelaySeedMs",1e4,s),this.Ta=pn("forwardChannelMaxRetries",2,s),this.va=pn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new bi(s&&s.concurrentRequestLimit),this.Ba=new mc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=$i.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,h){Rt(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.J=Yi(this,null,this.W),Kn(this)};function ts(s){if(qi(s),s.I==3){var a=s.V++,c=Lt(s.J);if(X(c,"SID",s.M),X(c,"RID",a),X(c,"TYPE","terminate"),mn(s,c),a=new Qt(s,s.j,a),a.M=2,a.A=qn(Lt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=Zi(a.j,null),a.g.ea(a.A)),a.F=Date.now(),$n(a)}Ji(s)}function Wn(s){s.g&&(ns(s),s.g.cancel(),s.g=null)}function qi(s){Wn(s),s.v&&(l.clearTimeout(s.v),s.v=null),Qn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function Kn(s){if(!Ri(s.h)&&!s.m){s.m=!0;var a=s.Ea;at||f(),Z||(at(),Z=!0),y.add(a,s),s.D=0}}function Ec(s,a){return Si(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=nn(p(s.Ea,s,a),Xi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const I=new Qt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=Je(A),ht(A,this.U)):A=this.U),this.u!==null||this.R||(I.J=A,A=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Hi(this,I,a),c=Lt(this.J),X(c,"RID",s),X(c,"CVER",22),this.G&&X(c,"X-HTTP-Session-Id",this.G),mn(this,c),A&&(this.R?a="headers="+sn(Fi(A))+"&"+a:this.u&&Zr(c,this.u,A)),Xr(this.h,I),this.Ra&&X(c,"TYPE","init"),this.S?(X(c,"$req",a),X(c,"SID","null"),I.U=!0,Hr(I,c,null)):Hr(I,c,a),this.I=2}}else this.I==3&&(s?Gi(this,s):this.i.length==0||Ri(this.h)||Gi(this))};function Gi(s,a){var c;a?c=a.l:c=s.V++;const h=Lt(s.J);X(h,"SID",s.M),X(h,"RID",c),X(h,"AID",s.K),mn(s,h),s.u&&s.o&&Zr(h,s.u,s.o),c=new Qt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Hi(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Xr(s.h,c),Hr(c,h,a)}function mn(s,a){s.H&&ce(s.H,function(c,h){X(a,h,c)}),s.l&&ce({},function(c,h){X(a,h,c)})}function Hi(s,a,c){c=Math.min(s.i.length,c);const h=s.l?p(s.l.Ka,s.l,s):null;t:{var I=s.i;let U=-1;for(;;){const lt=["count="+c];U==-1?c>0?(U=I[0].g,lt.push("ofs="+U)):U=0:lt.push("ofs="+U);let K=!0;for(let ft=0;ft<c;ft++){var A=I[ft].g;const Ft=I[ft].map;if(A-=U,A<0)U=Math.max(0,I[ft].g-100),K=!1;else try{A="req"+A+"_"||"";try{var C=Ft instanceof Map?Ft:Object.entries(Ft);for(const[ge,Zt]of C){let te=Zt;u(Zt)&&(te=jr(Zt)),lt.push(A+ge+"="+encodeURIComponent(te))}}catch(ge){throw lt.push(A+"type="+encodeURIComponent("_badmap")),ge}}catch{h&&h(Ft)}}if(K){C=lt.join("&");break t}}C=void 0}return s=s.i.splice(0,c),a.G=s,C}function Wi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;at||f(),Z||(at(),Z=!0),y.add(a,s),s.A=0}}function es(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=nn(p(s.Da,s),Xi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ki(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=nn(p(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),Wn(this),Ki(this))};function ns(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Ki(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=Lt(s.na);X(a,"RID","rpc"),X(a,"SID",s.M),X(a,"AID",s.K),X(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&X(a,"TO",s.ia),X(a,"TYPE","xmlhttp"),mn(s,a),s.u&&s.o&&Zr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=qn(Lt(a)),c.u=null,c.R=!0,wi(c,s)}n.Va=function(){this.C!=null&&(this.C=null,Wn(this),es(this),Rt(19))};function Qn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Qi(s,a){var c=null;if(s.g==a){Qn(s),ns(s),s.g=null;var h=2}else if(Qr(s.h,a))c=a.G,Ci(s.h,a),h=1;else return;if(s.I!=0){if(a.o)if(h==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var I=s.D;h=jn(),bt(h,new _i(h,c)),Kn(s)}else Wi(s);else if(I=a.m,I==3||I==0&&a.X>0||!(h==1&&Ec(s,a)||h==2&&es(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),I){case 1:me(s,5);break;case 4:me(s,10);break;case 3:me(s,6);break;default:me(s,2)}}}function Xi(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function me(s,a){if(s.j.info("Error code "+a),a==2){var c=p(s.bb,s),h=s.Ua;const I=!h;h=new Xt(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||an(h,"https"),qn(h),I?fc(h.toString(),c):pc(h.toString(),c)}else Rt(2);s.I=0,s.l&&s.l.pa(a),Ji(s),qi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Ji(s){if(s.I=0,s.ja=[],s.l){const a=Pi(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function Yi(s,a,c){var h=c instanceof Xt?Lt(c):new Xt(c);if(h.g!="")a&&(h.g=a+"."+h.g),ln(h,h.u);else{var I=l.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;const A=new Xt(null);h&&an(A,h),a&&(A.g=a),I&&ln(A,I),c&&(A.h=c),h=A}return c=s.G,a=s.wa,c&&a&&X(h,c,a),X(h,"VER",s.ka),mn(s,h),h}function Zi(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new nt(new Yr({ab:c})):new nt(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function to(){}n=to.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Xn(){}Xn.prototype.g=function(s,a){return new kt(s,a)};function kt(s,a){vt.call(this),this.g=new $i(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!g(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!g(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ne(this)}T(kt,vt),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){ts(this.g)},kt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=jr(s),s=c);a.i.push(new ic(a.Ya++,s)),a.I==3&&Kn(a)},kt.prototype.N=function(){this.g.l=null,delete this.j,ts(this.g),delete this.g,kt.Z.N.call(this)};function eo(s){zr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}T(eo,zr);function no(){$r.call(this),this.status=1}T(no,$r);function Ne(s){this.g=s}T(Ne,to),Ne.prototype.ra=function(){bt(this.g,"a")},Ne.prototype.qa=function(s){bt(this.g,new eo(s))},Ne.prototype.pa=function(s){bt(this.g,new no)},Ne.prototype.oa=function(){bt(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,za=function(){return new Xn},ja=function(){return jn()},Ba=de,vs={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zn.NO_ERROR=0,zn.TIMEOUT=8,zn.HTTP_ERROR=6,or=zn,yi.COMPLETE="complete",Ua=yi,fi.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",vt.prototype.listen=vt.prototype.J,yn=fi,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,Fa=nt}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const Io="@firebase/firestore",Ao="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Da("@firebase/firestore");function Me(){return we.logLevel}function x(n,...t){if(we.logLevel<=$.DEBUG){const e=t.map(Ls);we.debug(`Firestore (${Qe}): ${n}`,...e)}}function Ie(n,...t){if(we.logLevel<=$.ERROR){const e=t.map(Ls);we.error(`Firestore (${Qe}): ${n}`,...e)}}function Pr(n,...t){if(we.logLevel<=$.WARN){const e=t.map(Ls);we.warn(`Firestore (${Qe}): ${n}`,...e)}}function Ls(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,$a(n,r,e)}function $a(n,t,e){let r=`FIRESTORE (${Qe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ie(r),new Error(r)}function rt(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||$a(t,i,r)}function Q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wt.UNAUTHENTICATED)))}shutdown(){}}class id{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class od{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){rt(this.o===void 0,42304);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ve;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ve,t.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},u=d=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((d=>u(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ve)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rt(typeof r.accessToken=="string",31837,{l:r}),new qa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return rt(t===null||typeof t=="string",2055,{h:t}),new wt(t)}}class ad{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ld{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ad(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$h(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){rt(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new bo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(rt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new bo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ud(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function W(n,t){return n<t?-1:n>t?1:0}function Ts(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return us(i)===us(o)?W(i,o):us(i)?1:-1}return W(n.length,t.length)}const hd=55296,dd=57343;function us(n){const t=n.charCodeAt(0);return t>=hd&&t<=dd}function je(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&j(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ut.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return W(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),i=Ut.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):Ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ms.fromString(t.substring(4,t.length-2))}}class tt extends Ut{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new tt(e)}static emptyPath(){return new tt([])}}const fd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ut{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return fd.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ro}static keyField(){return new yt([Ro])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(r+=u,i++):(o(),i++)}if(o(),l)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(tt.fromString(t))}static fromName(t){return new F(tt.fromString(t).popFirst(5))}static empty(){return new F(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new tt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function pd(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function So(n){if(!F.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Co(n){if(F.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ha(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Us(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function Wa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Us(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,t){const e={typeString:n};return t&&(e.value=t),e}function xn(n,t){if(!Ha(n))throw new O(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new O(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-62135596800,Vo=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Vo);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Po)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vo}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(xn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Po;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ot("string",Y._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new Y(0,0))}static max(){return new J(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=-1;function md(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new ie(i,F.empty(),t)}function gd(n){return new ie(n.readTime,n.key,Cn)}class ie{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ie(J.min(),F.empty(),Cn)}static max(){return new ie(J.max(),F.empty(),Cn)}}function _d(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:W(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ed{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==yd)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let i=0,o=0,l=!1;t.forEach((u=>{++i,u.next((()=>{++o,l&&o===i&&e()}),(d=>r(d)))})),l=!0,o===i&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((i=>i?R.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,i)=>{const o=t.length,l=new Array(o);let u=0;for(let d=0;d<o;d++){const p=d;e(t[p]).next((v=>{l[p]=v,++u,u===o&&r(l)}),(v=>i(v)))}}))}static doWhile(t,e){return new R(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function vd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Nn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}js.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=-1;function $s(n){return n==null}function yr(n){return n===0&&1/n==-1/0}function Td(n){return typeof n=="number"&&Number.isInteger(n)&&!yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="";function wd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ko(t)),t=Id(n.get(e),t);return ko(t)}function Id(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ka:e+="";break;default:e+=o}}return e}function ko(n){return n+Ka+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Qa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new Vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new Vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new gt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.comparator=t,this.data=new Vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(t){return new xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof Et)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Et(this.comparator);return e.data=t,e}}class xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new Et(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ad("Invalid base64 string: "+o):o}})(t);return new Bt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o})(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const bd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ae(n){if(rt(!!n,39018),typeof n=="string"){let t=0;const e=bd.exec(n);if(rt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:_t(n.seconds),nanos:_t(n.nanos)}}function _t(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ze(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="server_timestamp",Ja="__type__",Ya="__previous_value__",Za="__local_write_time__";function qs(n){return(n?.mapValue?.fields||{})[Ja]?.stringValue===Xa}function Gs(n){const t=n.mapValue.fields[Ya];return qs(t)?Gs(t):t}function Er(n){const t=Ae(n.mapValue.fields[Za].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,e,r,i,o,l,u,d,p,v){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=p,this.isUsingEmulator=v}}const vr="(default)";class Tr{constructor(t,e){this.projectId=t,this.database=e||vr}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database===vr}isEqual(t){return t instanceof Tr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="__type__",Sd="__max__",nr={mapValue:{}},el="__vector__",ws="value";function be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qs(n)?4:Pd(n)?9007199254740991:Cd(n)?10:11:j(28295,{value:n})}function jt(n,t){if(n===t)return!0;const e=be(n);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Er(n).isEqual(Er(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=Ae(i.timestampValue),u=Ae(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ze(i.bytesValue).isEqual(ze(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return _t(i.geoPointValue.latitude)===_t(o.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return _t(i.integerValue)===_t(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=_t(i.doubleValue),u=_t(o.doubleValue);return l===u?yr(l)===yr(u):isNaN(l)&&isNaN(u)}return!1})(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return(function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Do(l)!==Do(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!jt(l[d],u[d])))return!1;return!0})(n,t);default:return j(52216,{left:n})}}function Pn(n,t){return(n.values||[]).find((e=>jt(e,t)))!==void 0}function $e(n,t){if(n===t)return 0;const e=be(n),r=be(t);if(e!==r)return W(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return W(n.booleanValue,t.booleanValue);case 2:return(function(o,l){const u=_t(o.integerValue||o.doubleValue),d=_t(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1})(n,t);case 3:return No(n.timestampValue,t.timestampValue);case 4:return No(Er(n),Er(t));case 5:return Ts(n.stringValue,t.stringValue);case 6:return(function(o,l){const u=ze(o),d=ze(l);return u.compareTo(d)})(n.bytesValue,t.bytesValue);case 7:return(function(o,l){const u=o.split("/"),d=l.split("/");for(let p=0;p<u.length&&p<d.length;p++){const v=W(u[p],d[p]);if(v!==0)return v}return W(u.length,d.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,l){const u=W(_t(o.latitude),_t(l.latitude));return u!==0?u:W(_t(o.longitude),_t(l.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Oo(n.arrayValue,t.arrayValue);case 10:return(function(o,l){const u=o.fields||{},d=l.fields||{},p=u[ws]?.arrayValue,v=d[ws]?.arrayValue,T=W(p?.values?.length||0,v?.values?.length||0);return T!==0?T:Oo(p,v)})(n.mapValue,t.mapValue);case 11:return(function(o,l){if(o===nr.mapValue&&l===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(l===nr.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),p=l.fields||{},v=Object.keys(p);d.sort(),v.sort();for(let T=0;T<d.length&&T<v.length;++T){const b=Ts(d[T],v[T]);if(b!==0)return b;const P=$e(u[d[T]],p[v[T]]);if(P!==0)return P}return W(d.length,v.length)})(n.mapValue,t.mapValue);default:throw j(23264,{he:e})}}function No(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return W(n,t);const e=Ae(n),r=Ae(t),i=W(e.seconds,r.seconds);return i!==0?i:W(e.nanos,r.nanos)}function Oo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=$e(e[i],r[i]);if(o)return o}return W(e.length,r.length)}function qe(n){return Is(n)}function Is(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=Ae(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ze(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Is(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Is(e.fields[l])}`;return i+"}"})(n.mapValue):j(61005,{value:n})}function ar(n){switch(be(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gs(n);return t?16+ar(t):16;case 5:return 2*n.stringValue.length;case 6:return ze(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+ar(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Xe(r.fields,((o,l)=>{i+=o.length+ar(l)})),i})(n.mapValue);default:throw j(13486,{value:n})}}function As(n){return!!n&&"integerValue"in n}function Hs(n){return!!n&&"arrayValue"in n}function lr(n){return!!n&&"mapValue"in n}function Cd(n){return(n?.mapValue?.fields||{})[tl]?.stringValue===el}function vn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Xe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=vn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=vn(n.arrayValue.values[e]);return t}return{...n}}function Pd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!lr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vn(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach(((l,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=u.popLast()}l?r[u.lastSegment()]=vn(l):i.push(u.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());lr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];lr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Xe(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Nt(vn(this.value))}}function nl(n){const t=[];return Xe(n.fields,((e,r)=>{const i=new yt([e]);if(lr(r)){const o=nl(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)})),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,r,i,o,l,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new xt(t,0,J.min(),J.min(),J.min(),Nt.empty(),0)}static newFoundDocument(t,e,r,i){return new xt(t,1,e,J.min(),r,i,0)}static newNoDocument(t,e){return new xt(t,2,e,J.min(),J.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,J.min(),J.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.position=t,this.inclusive=e}}function Mo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(l.referenceValue),e.key):r=$e(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{}class mt extends rl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dd(t,e,r):e==="array-contains"?new Od(t,r):e==="in"?new Md(t,r):e==="not-in"?new Ld(t,r):e==="array-contains-any"?new Fd(t,r):new mt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new xd(t,r):new Nd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison($e(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends rl{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new oe(t,e)}matches(t){return sl(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sl(n){return n.op==="and"}function il(n){return kd(n)&&sl(n)}function kd(n){for(const t of n.filters)if(t instanceof oe)return!1;return!0}function bs(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+qe(n.value);if(il(n))return n.filters.map((t=>bs(t))).join(",");{const t=n.filters.map((e=>bs(e))).join(",");return`${n.op}(${t})`}}function ol(n,t){return n instanceof mt?(function(r,i){return i instanceof mt&&r.op===i.op&&r.field.isEqual(i.field)&&jt(r.value,i.value)})(n,t):n instanceof oe?(function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,l,u)=>o&&ol(l,i.filters[u])),!0):!1})(n,t):void j(19439)}function al(n){return n instanceof mt?(function(e){return`${e.field.canonicalString()} ${e.op} ${qe(e.value)}`})(n):n instanceof oe?(function(e){return e.op.toString()+" {"+e.getFilters().map(al).join(" ,")+"}"})(n):"Filter"}class Dd extends mt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class xd extends mt{constructor(t,e){super(t,"in",e),this.keys=ll("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Nd extends mt{constructor(t,e){super(t,"not-in",e),this.keys=ll("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ll(n,t){return(t.arrayValue?.values||[]).map((e=>F.fromName(e.referenceValue)))}class Od extends mt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hs(e)&&Pn(e.arrayValue,this.value)}}class Md extends mt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pn(this.value.arrayValue,e)}}class Ld extends mt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Pn(this.value.arrayValue,e)}}class Fd extends mt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Pn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e=null,r=[],i=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.Te=null}}function Fo(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Ud(n,t,e,r,i,o,l)}function Ws(n){const t=Q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>bs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),$s(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>qe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>qe(r))).join(",")),t.Te=e}return t.Te}function Ks(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ol(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Lo(n.startAt,t.startAt)&&Lo(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e=null,r=[],i=[],o=null,l="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Bd(n,t,e,r,i,o,l,u){return new Vr(n,t,e,r,i,o,l,u)}function jd(n){return new Vr(n)}function Uo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zd(n){return n.collectionGroup!==null}function Tn(n){const t=Q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new Et(yt.comparator);return l.filters.forEach((d=>{d.getFlattenedFilters().forEach((p=>{p.isInequality()&&(u=u.add(p.field))}))})),u})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Ir(o,r))})),e.has(yt.keyField().canonicalString())||t.Ie.push(new Ir(yt.keyField(),r))}return t.Ie}function Te(n){const t=Q(n);return t.Ee||(t.Ee=$d(t,Tn(n))),t.Ee}function $d(n,t){if(n.limitType==="F")return Fo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Ir(i.field,o)}));const e=n.endAt?new wr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new wr(n.startAt.position,n.startAt.inclusive):null;return Fo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Rs(n,t,e){return new Vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function cl(n,t){return Ks(Te(n),Te(t))&&n.limitType===t.limitType}function ul(n){return`${Ws(Te(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>al(i))).join(", ")}]`),$s(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>qe(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>qe(i))).join(",")),`Target(${r})`})(Te(n))}; limitType=${n.limitType})`}function Qs(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Tn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(l,u,d){const p=Mo(l,u,d);return l.inclusive?p<=0:p<0})(r.startAt,Tn(r),i)||r.endAt&&!(function(l,u,d){const p=Mo(l,u,d);return l.inclusive?p>=0:p>0})(r.endAt,Tn(r),i))})(n,t)}function qd(n){return(t,e)=>{let r=!1;for(const i of Tn(n)){const o=Gd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Gd(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(o,l,u){const d=l.data.field(o),p=u.data.field(o);return d!==null&&p!==null?$e(d,p):j(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Xe(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Qa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Vt(F.comparator);function Ar(){return Hd}const hl=new Vt(F.comparator);function rr(...n){let t=hl;for(const e of n)t=t.insert(e.key,e);return t}function dl(n){let t=hl;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Ee(){return wn()}function fl(){return wn()}function wn(){return new Re((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Wd=new Vt(F.comparator),Kd=new Et(F.comparator);function It(...n){let t=Kd;for(const e of n)t=t.add(e);return t}const Qd=new Et(W);function Xd(){return Qd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function pl(n){return{integerValue:""+n}}function Jd(n,t){return Td(t)?pl(t):Xs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this._=void 0}}function Yd(n,t,e){return n instanceof Vn?(function(i,o){const l={fields:{[Ja]:{stringValue:Xa},[Za]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&qs(o)&&(o=Gs(o)),o&&(l.fields[Ya]=o),{mapValue:l}})(e,t):n instanceof kn?gl(n,t):n instanceof Dn?_l(n,t):(function(i,o){const l=ml(i,o),u=Bo(l)+Bo(i.Ae);return As(l)&&As(i.Ae)?pl(u):Xs(i.serializer,u)})(n,t)}function Zd(n,t,e){return n instanceof kn?gl(n,t):n instanceof Dn?_l(n,t):e}function ml(n,t){return n instanceof br?(function(r){return As(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class Vn extends kr{}class kn extends kr{constructor(t){super(),this.elements=t}}function gl(n,t){const e=yl(t);for(const r of n.elements)e.some((i=>jt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class Dn extends kr{constructor(t){super(),this.elements=t}}function _l(n,t){let e=yl(t);for(const r of n.elements)e=e.filter((i=>!jt(i,r)));return{arrayValue:{values:e}}}class br extends kr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Bo(n){return _t(n.integerValue||n.doubleValue)}function yl(n){return Hs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e){this.field=t,this.transform=e}}function ef(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof kn&&i instanceof kn||r instanceof Dn&&i instanceof Dn?je(r.elements,i.elements,jt):r instanceof br&&i instanceof br?jt(r.Ae,i.Ae):r instanceof Vn&&i instanceof Vn})(n.transform,t.transform)}class nf{constructor(t,e){this.version=t,this.transformResults=e}}class qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qt}static exists(t){return new qt(void 0,t)}static updateTime(t){return new qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dr{}function El(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Tl(n.key,qt.none()):new On(n.key,n.data,qt.none());{const e=n.data,r=Nt.empty();let i=new Et(yt.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Se(n.key,r,new Mt(i.toArray()),qt.none())}}function rf(n,t,e){n instanceof On?(function(i,o,l){const u=i.value.clone(),d=zo(i.fieldTransforms,o,l.transformResults);u.setAll(d),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()})(n,t,e):n instanceof Se?(function(i,o,l){if(!cr(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=zo(i.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(vl(i)),d.setAll(u),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()})(n,t,e):(function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function In(n,t,e,r){return n instanceof On?(function(o,l,u,d){if(!cr(o.precondition,l))return u;const p=o.value.clone(),v=$o(o.fieldTransforms,d,l);return p.setAll(v),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null})(n,t,e,r):n instanceof Se?(function(o,l,u,d){if(!cr(o.precondition,l))return u;const p=$o(o.fieldTransforms,d,l),v=l.data;return v.setAll(vl(o)),v.setAll(p),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((T=>T.field)))})(n,t,e,r):(function(o,l,u){return cr(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u})(n,t,e)}function sf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ml(r.transform,i||null);o!=null&&(e===null&&(e=Nt.empty()),e.set(r.field,o))}return e||null}function jo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&je(r,i,((o,l)=>ef(o,l)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class On extends Dr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Se extends Dr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vl(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function zo(n,t,e){const r=new Map;rt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,u=t.data.field(o.field);r.set(o.field,Zd(l,u,e[i]))}return r}function $o(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,Yd(o,l,t))}return r}class Tl extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class of extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&rf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=fl();return this.mutations.forEach((i=>{const o=t.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(i.key)?null:u;const d=El(l,u);d!==null&&r.set(i.key,d),l.isValidDocument()||l.convertToNoDocument(J.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),It())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,((e,r)=>jo(e,r)))&&je(this.baseMutations,t.baseMutations,((e,r)=>jo(e,r)))}}class Js{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){rt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return Wd})();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Js(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,z;function cf(n){switch(n){case S.OK:return j(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function uf(n){if(n===void 0)return Ie("GRPC error has no .code"),S.UNKNOWN;switch(n){case it.OK:return S.OK;case it.CANCELLED:return S.CANCELLED;case it.UNKNOWN:return S.UNKNOWN;case it.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case it.INTERNAL:return S.INTERNAL;case it.UNAVAILABLE:return S.UNAVAILABLE;case it.UNAUTHENTICATED:return S.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case it.NOT_FOUND:return S.NOT_FOUND;case it.ALREADY_EXISTS:return S.ALREADY_EXISTS;case it.PERMISSION_DENIED:return S.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case it.ABORTED:return S.ABORTED;case it.OUT_OF_RANGE:return S.OUT_OF_RANGE;case it.UNIMPLEMENTED:return S.UNIMPLEMENTED;case it.DATA_LOSS:return S.DATA_LOSS;default:return j(39323,{code:n})}}(z=it||(it={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ms([4294967295,4294967295],0);class hf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function df(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ff(n,t){return Ss(n,t.toTimestamp())}function Ue(n){return rt(!!n,49232),J.fromTimestamp((function(e){const r=Ae(e);return new Y(r.seconds,r.nanos)})(n))}function wl(n,t){return Cs(n,t).canonicalString()}function Cs(n,t){const e=(function(i){return new tt(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function pf(n){const t=tt.fromString(n);return rt(wf(t),10190,{key:t.toString()}),t}function Ps(n,t){return wl(n.databaseId,t.path)}function mf(n){const t=pf(n);return t.length===4?tt.emptyPath():_f(t)}function gf(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _f(n){return rt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qo(n,t,e){return{name:Ps(n,t),fields:e.value.mapValue.fields}}function yf(n,t){let e;if(t instanceof On)e={update:qo(n,t.key,t.value)};else if(t instanceof Tl)e={delete:Ps(n,t.key)};else if(t instanceof Se)e={update:qo(n,t.key,t.data),updateMask:Tf(t.fieldMask)};else{if(!(t instanceof of))return j(16599,{Vt:t.type});e={verify:Ps(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,l){const u=l.transform;if(u instanceof Vn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof kn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Dn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof br)return{fieldPath:l.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:ff(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)})(n,t.precondition)),e}function Ef(n,t){return n&&n.length>0?(rt(t!==void 0,14353),n.map((e=>(function(i,o){let l=i.updateTime?Ue(i.updateTime):Ue(o);return l.isEqual(J.min())&&(l=Ue(o)),new nf(l,i.transformResults||[])})(e,t)))):[]}function vf(n){let t=mf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){rt(r===1,65062);const v=e.from[0];v.allDescendants?i=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=(function(T){const b=Il(T);return b instanceof oe&&il(b)?b.getFilters():[b]})(e.where));let l=[];e.orderBy&&(l=(function(T){return T.map((b=>(function(N){return new Ir(Le(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(b)))})(e.orderBy));let u=null;e.limit&&(u=(function(T){let b;return b=typeof T=="object"?T.value:T,$s(b)?null:b})(e.limit));let d=null;e.startAt&&(d=(function(T){const b=!!T.before,P=T.values||[];return new wr(P,b)})(e.startAt));let p=null;return e.endAt&&(p=(function(T){const b=!T.before,P=T.values||[];return new wr(P,b)})(e.endAt)),Bd(t,i,l,o,u,"F",d,p)}function Il(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Le(e.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Le(e.unaryFilter.field);return mt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Le(e.unaryFilter.field);return mt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Le(e.unaryFilter.field);return mt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}})(n):n.fieldFilter!==void 0?(function(e){return mt.create(Le(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return oe.create(e.compositeFilter.filters.map((r=>Il(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}})(e.compositeFilter.op))})(n):j(30097,{filter:n})}function Le(n){return yt.fromServerFormat(n.fieldPath)}function Tf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.yt=t}}function Af(n){const t=vf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.Cn=new Rf}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(ie.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Et(tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Et(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Al=41943040;class Ct{static withCacheSize(t){return new Ct(t,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(Al,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ge(0)}static cr(){return new Ge(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="LruGarbageCollector",Sf=1048576;function Wo([n,t],[e,r]){const i=W(n,e);return i===0?W(t,r):i}class Cf{constructor(t){this.Ir=t,this.buffer=new Et(Wo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Wo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Pf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){x(Ho,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Nn(e)?x(Ho,"Ignoring IndexedDB error during garbage collection: ",e):await Bs(e)}await this.Vr(3e5)}))}}class Vf{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(js.ce);const r=new Cf(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Go)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Go):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,l,u,d,p;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,l=Date.now(),this.nthSequenceNumber(t,i)))).next((T=>(r=T,u=Date.now(),this.removeTargets(t,r,e)))).next((T=>(o=T,d=Date.now(),this.removeOrphanedDocuments(t,r)))).next((T=>(p=Date.now(),Me()<=$.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${i} in `+(u-l)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${T} documents in `+(p-d)+`ms
Total Duration: ${p-v}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T}))))}}function kf(n,t){return new Vf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.changes=new Re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&In(r.mutation,i,Mt.empty(),Y.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,It()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=It()){const i=Ee();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let l=rr();return o.forEach(((u,d)=>{l=l.insert(u,d.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=Ee();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,It())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((l,u)=>{e.set(l,u)}))}))}computeViews(t,e,r,i){let o=Ar();const l=wn(),u=(function(){return wn()})();return e.forEach(((d,p)=>{const v=r.get(p.key);i.has(p.key)&&(v===void 0||v.mutation instanceof Se)?o=o.insert(p.key,p):v!==void 0?(l.set(p.key,v.mutation.getFieldMask()),In(v.mutation,p,v.mutation.getFieldMask(),Y.now())):l.set(p.key,Mt.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((p,v)=>l.set(p,v))),e.forEach(((p,v)=>u.set(p,new xf(v,l.get(p)??null)))),u)))}recalculateAndSaveOverlays(t,e){const r=wn();let i=new Vt(((l,u)=>l-u)),o=It();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const u of l)u.keys().forEach((d=>{const p=e.get(d);if(p===null)return;let v=r.get(d)||Mt.empty();v=u.applyToLocalView(p,v),r.set(d,v);const T=(i.get(u.batchId)||It()).add(d);i=i.insert(u.batchId,T)}))})).next((()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),p=d.key,v=d.value,T=fl();v.forEach((b=>{if(!o.has(b)){const P=El(e.get(b),r.get(b));P!==null&&T.set(b,P),o=o.add(b)}})),l.push(this.documentOverlayCache.saveOverlays(t,p,T))}return R.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(l){return F.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(Ee());let u=Cn,d=o;return l.next((p=>R.forEach(p,((v,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(v)?R.resolve():this.remoteDocumentCache.getEntry(t,v).next((b=>{d=d.insert(v,b)}))))).next((()=>this.populateOverlays(t,p,o))).next((()=>this.computeViews(t,d,p,It()))).next((v=>({batchId:u,changes:dl(v)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let i=rr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=rr();return this.indexManager.getCollectionParents(t,o).next((u=>R.forEach(u,(d=>{const p=(function(T,b){return new Vr(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,i).next((v=>{v.forEach(((T,b)=>{l=l.insert(T,b)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((l=>{o.forEach(((d,p)=>{const v=p.getKey();l.get(v)===null&&(l=l.insert(v,xt.newInvalidDocument(v)))}));let u=rr();return l.forEach(((d,p)=>{const v=o.get(d);v!==void 0&&In(v.mutation,p,Mt.empty(),Y.now()),Qs(e,p)&&(u=u.insert(d,p))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ue(i.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Af(i.bundledQuery),readTime:Ue(i.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.overlays=new Vt(F.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ee();return R.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=Ee(),o=e.length+1,l=new F(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,p=d.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Vt(((p,v)=>p-v));const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let v=o.get(p.largestBatchId);v===null&&(v=Ee(),o=o.insert(p.largestBatchId,v)),v.set(p.getKey(),p)}}const u=Ee(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((p,v)=>u.set(p,v))),!(u.size()>=i)););return R.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new lf(e,r));let o=this.qr.get(e);o===void 0&&(o=It(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.Qr=new Et(pt.$r),this.Ur=new Et(pt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new pt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new pt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new F(new tt([])),r=new pt(e,t),i=new pt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),o.push(l.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new tt([])),r=new pt(e,t),i=new pt(e,t+1);let o=It();return this.Ur.forEachInRange([r,i],(l=>{o=o.add(l.key)})),o}containsKey(t){const e=new pt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class pt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||W(t.Yr,e.Yr)}static Kr(t,e){return W(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new Et(pt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new af(o,e,r,i);this.mutationQueue.push(l);for(const u of i)this.Zr=this.Zr.add(new pt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?zs:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new pt(e,0),i=new pt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(l=>{const u=this.Xr(l.Yr);o.push(u)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Et(W);return e.forEach((i=>{const o=new pt(i,0),l=new pt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],(u=>{r=r.add(u.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const l=new pt(new F(o),0);let u=new Et(W);return this.Zr.forEachWhile((d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(u=u.add(d.Yr)),!0)}),l),R.resolve(this.ti(u))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){rt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(i=>{const o=new pt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new pt(e,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.ri=t,this.docs=(function(){return new Vt(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=Ar();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():xt.newInvalidDocument(i))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ar();const l=e.path,u=new F(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:p,value:{document:v}}=d.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||_d(gd(v),r)<=0||(i.has(v.key)||Qs(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){j(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Bf(this)}getSize(t){return R.resolve(this.size)}}class Bf extends Df{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.persistence=t,this.si=new Re((e=>Ws(e)),Ks),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new Ys,this.targetCount=0,this.ai=Ge.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((l,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((l=>{o.push(i.markPotentiallyOrphaned(t,l))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,e){this.ui={},this.overlays={},this.ci=new js(0),this.li=!1,this.li=!0,this.hi=new Lf,this.referenceDelegate=t(this),this.Pi=new jf(this),this.indexManager=new bf,this.remoteDocumentCache=(function(i){return new Uf(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new If(e),this.Ii=new Of(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Ff(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const i=new zf(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class zf extends Ed{constructor(t){super(),this.currentSequenceNumber=t}}class Zs{constructor(t){this.persistence=t,this.Ri=new Ys,this.Vi=null}static mi(t){return new Zs(t)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const i=F.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,J.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Rr{constructor(t,e){this.persistence=t,this.pi=new Re((r=>wd(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=kf(this,e)}static mi(t,e){return new Rr(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?R.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(l=>this.br(t,l,e).next((u=>{u||(r++,o.removeEntry(l,J.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ar(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=It(),i=It();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ti(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Bu()?8:vd(Fu())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((l=>{o.result=l})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((l=>{o.result=l}))})).next((()=>{if(o.result)return;const l=new $f;return this.Ss(t,e,l).next((u=>{if(o.result=u,this.Vs)return this.bs(t,e,l,u.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Me()<=$.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",_n(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Me()<=$.DEBUG&&x("QueryEngine","Query:",_n(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Me()<=$.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",_n(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Te(e))):R.resolve())}ys(t,e){if(Uo(e))return R.resolve(null);let r=Te(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Rs(e,null,"F"),r=Te(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const l=It(...o);return this.ps.getDocuments(t,l).next((u=>this.indexManager.getMinOffset(t,r).next((d=>{const p=this.Ds(e,u);return this.Cs(e,p,l,d.readTime)?this.ys(t,Rs(e,null,"F")):this.vs(t,p,e,d)}))))})))))}ws(t,e,r,i){return Uo(e)||i.isEqual(J.min())?R.resolve(null):this.ps.getDocuments(t,r).next((o=>{const l=this.Ds(e,o);return this.Cs(e,l,r,i)?R.resolve(null):(Me()<=$.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_n(e)),this.vs(t,l,e,md(i,Cn)).next((u=>u)))}))}Ds(t,e){let r=new Et(qd(t));return e.forEach(((i,o)=>{Qs(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Me()<=$.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",_n(e)),this.ps.getDocumentsMatchingQuery(t,e,ie.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((l=>{o=o.insert(l.key,l)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="LocalStore";class Hf{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new Vt(W),this.xs=new Re((o=>Ws(o)),Ks),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Wf(n,t,e,r){return new Hf(n,t,e,r)}async function Rl(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const l=[],u=[];let d=It();for(const p of i){l.push(p.batchId);for(const v of p.mutations)d=d.add(v.key)}for(const p of o){u.push(p.batchId);for(const v of p.mutations)d=d.add(v.key)}return e.localDocuments.getDocuments(r,d).next((p=>({Ls:p,removedBatchIds:l,addedBatchIds:u})))}))}))}function Kf(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,d,p,v){const T=p.batch,b=T.keys();let P=R.resolve();return b.forEach((N=>{P=P.next((()=>v.getEntry(d,N))).next((M=>{const V=p.docVersions.get(N);rt(V!==null,48541),M.version.compareTo(V)<0&&(T.applyToRemoteDocument(M,p),M.isValidDocument()&&(M.setReadTime(p.commitVersion),v.addEntry(M)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(d,T)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let d=It();for(let p=0;p<u.mutationResults.length;++p)u.mutationResults[p].transformResults.length>0&&(d=d.add(u.batch.mutations[p].key));return d})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function Qf(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Xf(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=zs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Ko{constructor(){this.activeTargetIds=Xd()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jf{constructor(){this.Mo=new Ko,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Ko,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="ConnectivityMonitor";class Xo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Qo,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){x(Qo,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function Vs(){return sr===null?sr=(function(){return 268435456+Math.round(2147483648*Math.random())})():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RestConnection",Zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tp{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===vr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const l=Vs(),u=this.zo(t,e.toUriEncodedString());x(hs,`Sending RPC '${t}' ${l}:`,u,r);const d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,i,o);const{host:p}=new URL(u),v=Ns(p);return this.Jo(t,u,d,r,v).then((T=>(x(hs,`Received RPC '${t}' ${l}: `,T),T)),(T=>{throw Pr(hs,`RPC '${t}' ${l} failed with error: `,T,"url: ",u,"request:",r),T}))}Ho(t,e,r,i,o,l){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qe})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Zf[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class np extends tp{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const l=Vs();return new Promise(((u,d)=>{const p=new Fa;p.setWithCredentials(!0),p.listenOnce(Ua.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case or.NO_ERROR:const T=p.getResponseJson();x(Tt,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(T)),u(T);break;case or.TIMEOUT:x(Tt,`RPC '${t}' ${l} timed out`),d(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const b=p.getStatus();if(x(Tt,`RPC '${t}' ${l} failed with status:`,b,"response text:",p.getResponseText()),b>0){let P=p.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P?.error;if(N&&N.status&&N.message){const M=(function(q){const G=q.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN})(N.status);d(new O(M,N.message))}else d(new O(S.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new O(S.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:t,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{x(Tt,`RPC '${t}' ${l} completed.`)}}));const v=JSON.stringify(i);x(Tt,`RPC '${t}' ${l} sending request:`,i),p.send(e,"POST",v,r,15)}))}T_(t,e,r){const i=Vs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=za(),u=ja(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const v=o.join("");x(Tt,`Creating RPC '${t}' stream ${i}: ${v}`,d);const T=l.createWebChannel(v,d);this.I_(T);let b=!1,P=!1;const N=new ep({Yo:V=>{P?x(Tt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(b||(x(Tt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),b=!0),x(Tt,`RPC '${t}' stream ${i} sending:`,V),T.send(V))},Zo:()=>T.close()}),M=(V,q,G)=>{V.listen(q,(H=>{try{G(H)}catch(st){setTimeout((()=>{throw st}),0)}}))};return M(T,yn.EventType.OPEN,(()=>{P||(x(Tt,`RPC '${t}' stream ${i} transport opened.`),N.o_())})),M(T,yn.EventType.CLOSE,(()=>{P||(P=!0,x(Tt,`RPC '${t}' stream ${i} transport closed`),N.a_(),this.E_(T))})),M(T,yn.EventType.ERROR,(V=>{P||(P=!0,Pr(Tt,`RPC '${t}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),N.a_(new O(S.UNAVAILABLE,"The operation could not be completed")))})),M(T,yn.EventType.MESSAGE,(V=>{if(!P){const q=V.data[0];rt(!!q,16349);const G=q,H=G?.error||G[0]?.error;if(H){x(Tt,`RPC '${t}' stream ${i} received error:`,H);const st=H.status;let at=(function(f){const m=it[f];if(m!==void 0)return uf(m)})(st),Z=H.message;at===void 0&&(at=S.INTERNAL,Z="Unknown error status: "+st+" with message "+H.message),P=!0,N.a_(new O(at,Z)),T.close()}else x(Tt,`RPC '${t}' stream ${i} received:`,q),N.u_(q)}})),M(u,Ba.STAT_EVENT,(V=>{V.stat===vs.PROXY?x(Tt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===vs.NOPROXY&&x(Tt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function ds(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){return new hf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="PersistentStream";class rp{constructor(t,e,r,i,o,l,u,d){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Sl(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ie(e.toString()),Ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return x(Jo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(x(Jo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sp extends rp{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return rt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,rt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){rt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Ef(t.writeResults,t.commitTime),r=Ue(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=gf(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>yf(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{}class op extends ip{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Go(t,Cs(e,r),i,o,l))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Ho(t,Cs(e,r),i,l,u,o))).catch((l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new O(S.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class ap{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ie(e),this.aa=!1):x("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="RemoteStore";class lp{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{Fn(this)&&(x(Mn,"Restarting streams for network reachability change."),await(async function(d){const p=Q(d);p.Ea.add(4),await Ln(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Nr(p)})(this))}))})),this.Ra=new ap(r,i)}}async function Nr(n){if(Fn(n))for(const t of n.da)await t(!0)}async function Ln(n){for(const t of n.da)await t(!1)}function Fn(n){return Q(n).Ea.size===0}async function Cl(n,t,e){if(!Nn(t))throw t;n.Ea.add(1),await Ln(n),n.Ra.set("Offline"),e||(e=()=>Qf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{x(Mn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Nr(n)}))}function Pl(n,t){return t().catch((e=>Cl(n,e,t)))}async function Or(n){const t=Q(n),e=ae(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:zs;for(;cp(t);)try{const i=await Xf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,up(t,i)}catch(i){await Cl(t,i)}Vl(t)&&kl(t)}function cp(n){return Fn(n)&&n.Ta.length<10}function up(n,t){n.Ta.push(t);const e=ae(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Vl(n){return Fn(n)&&!ae(n).x_()&&n.Ta.length>0}function kl(n){ae(n).start()}async function hp(n){ae(n).ra()}async function dp(n){const t=ae(n);for(const e of n.Ta)t.ea(e.mutations)}async function fp(n,t,e){const r=n.Ta.shift(),i=Js.from(r,t,e);await Pl(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Or(n)}async function pp(n,t){t&&ae(n).X_&&await(async function(r,i){if((function(l){return cf(l)&&l!==S.ABORTED})(i.code)){const o=r.Ta.shift();ae(r).B_(),await Pl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Or(r)}})(n,t),Vl(n)&&kl(n)}async function Yo(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),x(Mn,"RemoteStore received new credentials");const r=Fn(e);e.Ea.add(3),await Ln(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Nr(e)}async function mp(n,t){const e=Q(n);t?(e.Ea.delete(2),await Nr(e)):t||(e.Ea.add(2),await Ln(e),e.Ra.set("Unknown"))}function ae(n){return n.fa||(n.fa=(function(e,r,i){const o=Q(e);return o.sa(),new sp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:hp.bind(null,n),r_:pp.bind(null,n),ta:dp.bind(null,n),na:fp.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Or(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Mn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,u=new ei(t,e,l,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dl(n,t){if(Ie("AsyncQueue",`${t}: ${n}`),Nn(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}class gp{constructor(){this.queries=Zo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=Q(e),o=i.queries;i.queries=Zo(),o.forEach(((l,u)=>{for(const d of u.Sa)d.onError(r)}))})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Zo(){return new Re((n=>ul(n)),cl)}function _p(n){n.Ca.forEach((t=>{t.next()}))}var ta,ea;(ea=ta||(ta={})).Ma="default",ea.Cache="cache";const yp="SyncEngine";class Ep{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Re((u=>ul(u)),cl),this.Iu=new Map,this.Eu=new Set,this.du=new Vt(F.comparator),this.Au=new Map,this.Ru=new Ys,this.Vu={},this.mu=new Map,this.fu=Ge.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vp(n,t,e){const r=Ap(n);try{const i=await(function(l,u){const d=Q(l),p=Y.now(),v=u.reduce(((P,N)=>P.add(N.key)),It());let T,b;return d.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let N=Ar(),M=It();return d.Ns.getEntries(P,v).next((V=>{N=V,N.forEach(((q,G)=>{G.isValidDocument()||(M=M.add(q))}))})).next((()=>d.localDocuments.getOverlayedDocuments(P,N))).next((V=>{T=V;const q=[];for(const G of u){const H=sf(G,T.get(G.key).overlayedDocument);H!=null&&q.push(new Se(G.key,H,nl(H.value.mapValue),qt.exists(!0)))}return d.mutationQueue.addMutationBatch(P,p,q,u)})).next((V=>{b=V;const q=V.applyToLocalDocumentSet(T,M);return d.documentOverlayCache.saveOverlays(P,V.batchId,q)}))})).then((()=>({batchId:b.batchId,changes:dl(T)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(l,u,d){let p=l.Vu[l.currentUser.toKey()];p||(p=new Vt(W)),p=p.insert(u,d),l.Vu[l.currentUser.toKey()]=p})(r,i.batchId,e),await Mr(r,i.changes),await Or(r.remoteStore)}catch(i){const o=Dl(i,"Failed to persist write");e.reject(o)}}function na(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,l)=>{const u=l.view.va(t);u.snapshot&&i.push(u.snapshot)})),(function(l,u){const d=Q(l);d.onlineState=u;let p=!1;d.queries.forEach(((v,T)=>{for(const b of T.Sa)b.va(u)&&(p=!0)})),p&&_p(d)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Tp(n,t){const e=Q(n),r=t.batch.batchId;try{const i=await Kf(e.localStore,t);Nl(e,r,null),xl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Mr(e,i)}catch(i){await Bs(i)}}async function wp(n,t,e){const r=Q(n);try{const i=await(function(l,u){const d=Q(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let v;return d.mutationQueue.lookupMutationBatch(p,u).next((T=>(rt(T!==null,37113),v=T.keys(),d.mutationQueue.removeMutationBatch(p,T)))).next((()=>d.mutationQueue.performConsistencyCheck(p))).next((()=>d.documentOverlayCache.removeOverlaysForBatchId(p,v,u))).next((()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,v))).next((()=>d.localDocuments.getDocuments(p,v)))}))})(r.localStore,t);Nl(r,t,e),xl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Mr(r,i)}catch(i){await Bs(i)}}function xl(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Nl(n,t,e){const r=Q(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function Mr(n,t,e){const r=Q(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((u,d)=>{l.push(r.pu(d,t,e).then((p=>{if((p||e)&&r.isPrimaryClient){const v=p?!p.fromCache:e?.targetChanges.get(d.targetId)?.current;r.sharedClientState.updateQueryState(d.targetId,v?"current":"not-current")}if(p){i.push(p);const v=ti.As(d.targetId,p);o.push(v)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(d,p){const v=Q(d);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>R.forEach(p,(b=>R.forEach(b.Es,(P=>v.persistence.referenceDelegate.addReference(T,b.targetId,P))).next((()=>R.forEach(b.ds,(P=>v.persistence.referenceDelegate.removeReference(T,b.targetId,P)))))))))}catch(T){if(!Nn(T))throw T;x(Gf,"Failed to update sequence numbers: "+T)}for(const T of p){const b=T.targetId;if(!T.fromCache){const P=v.Ms.get(b),N=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(N);v.Ms=v.Ms.insert(b,M)}}})(r.localStore,o))}async function Ip(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){x(yp,"User change. New user:",t.toKey());const r=await Rl(e.localStore,t);e.currentUser=t,(function(o,l){o.mu.forEach((u=>{u.forEach((d=>{d.reject(new O(S.CANCELLED,l))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Mr(e,r.Ls)}}function Ap(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Tp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wp.bind(null,t),t}class Sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=xr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Wf(this.persistence,new qf,t.initialUser,this.serializer)}Cu(t){return new bl(Zs.mi,this.serializer)}Du(t){return new Jf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sr.provider={build:()=>new Sr};class bp extends Sr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){rt(this.persistence.referenceDelegate instanceof Rr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pf(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new bl((r=>Rr.mi(r,e)),this.serializer)}}class ks{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>na(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ip.bind(null,this.syncEngine),await mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new gp})()}createDatastore(t){const e=xr(t.databaseInfo.databaseId),r=(function(o){return new np(o)})(t.databaseInfo);return(function(o,l,u,d){return new op(o,l,u,d)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,l,u){return new lp(r,i,o,l,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>na(this.syncEngine,e,0)),(function(){return Xo.v()?new Xo:new Yf})())}createSyncEngine(t,e){return(function(i,o,l,u,d,p,v){const T=new Ep(i,o,l,u,d,p);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=Q(e);x(Mn,"RemoteStore shutting down."),r.Ea.add(5),await Ln(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ks.provider={build:()=>new ks};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="FirestoreClient";class Rp{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Fs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async l=>{x(le,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(x(le,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Dl(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function fs(n,t){n.asyncQueue.verifyOperationInProgress(),x(le,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Rl(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function ra(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Sp(n);x(le,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Yo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Yo(t.remoteStore,i))),n._onlineComponents=t}async function Sp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(le,"Using user provided OfflineComponentProvider");try{await fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Pr("Error using user provided cache. Falling back to memory cache: "+e),await fs(n,new Sr)}}else x(le,"Using default OfflineComponentProvider"),await fs(n,new bp(void 0));return n._offlineComponents}async function Cp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(le,"Using user provided OnlineComponentProvider"),await ra(n,n._uninitializedComponentsProvider._online)):(x(le,"Using default OnlineComponentProvider"),await ra(n,new ks))),n._onlineComponents}function Pp(n){return Cp(n).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firestore.googleapis.com",ia=!0;class oa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ml,this.ssl=ia}else this.host=t.host,this.ssl=t.ssl??ia;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Al;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Sf)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ol(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Lr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sd;switch(r.type){case"firstParty":return new ld(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=sa.get(e);r&&(x("ComponentProvider","Removing Datastore"),sa.delete(e),r.terminate())})(this),Promise.resolve()}}function Vp(n,t,e,r={}){n=Wa(n,Lr);const i=Ns(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&(xu(`https://${u}`),Lu("Firestore",!0)),o.host!==Ml&&o.host!==u&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...o,host:u,ssl:i,emulatorOptions:r};if(!mr(d,l)&&(n._setSettings(d),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=wt.MOCK_USER;else{p=Nu(r.mockUserToken,n._app?.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new wt(T)}n._authCredentials=new id(new qa(p,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ni(this.firestore,t,this._query)}}class At{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(xn(e,At._jsonSchema))return new At(t,r||null,new F(tt.fromString(e.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:ot("string",At._jsonSchemaVersion),referencePath:ot("string")};class se extends ni{constructor(t,e,r){super(t,e,jd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new F(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function im(n,t,...e){if(n=bn(n),Ga("collection","path",t),n instanceof Lr){const r=tt.fromString(t,...e);return Co(r),new se(n,null,r)}{if(!(n instanceof At||n instanceof se))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Co(r),new se(n.firestore,null,r)}}function kp(n,t,...e){if(n=bn(n),arguments.length===1&&(t=Fs.newId()),Ga("doc","path",t),n instanceof Lr){const r=tt.fromString(t,...e);return So(r),new At(n,null,new F(r))}{if(!(n instanceof At||n instanceof se))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return So(r),new At(n.firestore,n instanceof se?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="AsyncQueue";class la{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Sl(this,"async_queue_retry"),this._c=()=>{const r=ds();r&&x(aa,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ve;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Nn(t))throw t;x(aa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ie("INTERNAL UNHANDLED ERROR: ",ca(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ei.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:ca(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function ca(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ll extends Lr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new la,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new la(t),this._firestoreClient=void 0,await t}}}function Dp(n,t){const e=typeof n=="object"?n:Wh(),r=typeof n=="string"?n:vr,i=zh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ku("firestore");o&&Vp(i,...o)}return i}function xp(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Np(n),n._firestoreClient}function Np(n){const t=n._freezeSettings(),e=(function(i,o,l,u){return new Rd(i,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ol(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Rp(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ot(Bt.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ot(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(xn(t,Ot._jsonSchema))return Ot.fromBase64String(t.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:ot("string",Ot._jsonSchemaVersion),bytes:ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gt._jsonSchemaVersion}}static fromJSON(t){if(xn(t,Gt._jsonSchema))return new Gt(t.latitude,t.longitude)}}Gt._jsonSchemaVersion="firestore/geoPoint/1.0",Gt._jsonSchema={type:ot("string",Gt._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(xn(t,Ht._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ht(t.vectorValues);throw new O(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:ot("string",Ht._jsonSchemaVersion),vectorValues:ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=/^__.*__$/;class Mp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new On(t,this.data,e,this.fieldTransforms)}}function Fl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class ii{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ii({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Cr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Fl(this.Ac)&&Op.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Lp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||xr(t)}Cc(t,e,r,i=!1){return new ii({Ac:t,methodName:e,Dc:r,path:yt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fp(n){const t=n._freezeSettings(),e=xr(n._databaseId);return new Lp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Up(n,t,e,r,i,o={}){const l=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);zl("Data must be an object, but it was:",l,r);const u=Bl(r,l);let d,p;if(o.merge)d=new Mt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const T of o.mergeFields){const b=Bp(t,T,e);if(!l.contains(b))throw new O(S.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);zp(v,b)||v.push(b)}d=new Mt(v),p=l.fieldTransforms.filter((T=>d.covers(T.field)))}else d=null,p=l.fieldTransforms;return new Mp(new Nt(u),d,p)}class oi extends si{_toFieldTransform(t){return new tf(t.path,new Vn)}isEqual(t){return t instanceof oi}}function Ul(n,t){if(jl(n=bn(n)))return zl("Unsupported field value:",t,n),Bl(n,t);if(n instanceof si)return(function(r,i){if(!Fl(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const u of r){let d=Ul(u,i.wc(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=bn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:Ss(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ss(i.serializer,o)}}if(r instanceof Gt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:df(i.serializer,r._byteString)};if(r instanceof At){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ht)return(function(l,u){return{mapValue:{fields:{[tl]:{stringValue:el},[ws]:{arrayValue:{values:l.toArray().map((p=>{if(typeof p!="number")throw u.Sc("VectorValues must only contain numeric values.");return Xs(u.serializer,p)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Us(r)}`)})(n,t)}function Bl(n,t){const e={};return Qa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xe(n,((r,i)=>{const o=Ul(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function jl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Gt||n instanceof Ot||n instanceof At||n instanceof si||n instanceof Ht)}function zl(n,t,e){if(!jl(e)||!Ha(e)){const r=Us(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Bp(n,t,e){if((t=bn(t))instanceof ri)return t._internalPath;if(typeof t=="string")return $l(n,t);throw Cr("Field path arguments must be of type string or ",n,!1,void 0,e)}const jp=new RegExp("[~\\*/\\[\\]]");function $l(n,t,e){if(t.search(jp)>=0)throw Cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ri(...t.split("."))._internalPath}catch{throw Cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Cr(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${r}`),l&&(d+=` in document ${i}`),d+=")"),new O(S.INVALID_ARGUMENT,u+n+d)}function zp(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $p(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $p extends ql{data(){return super.data()}}function Gl(n,t){return typeof t=="string"?$l(n,t):t instanceof ri?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class ir{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Be extends ql{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Be._jsonSchemaVersion="firestore/documentSnapshot/1.0",Be._jsonSchema={type:ot("string",Be._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class ur extends Be{data(t={}){return super.data(t)}}class An{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ir(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new ir(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((u=>{const d=new ur(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ir(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:d,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const d=new ur(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ir(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,v=-1;return u.type!==0&&(p=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),v=l.indexOf(u.doc.key)),{type:Gp(u.type),doc:d,oldIndex:p,newIndex:v}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=An._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Fs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Gp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:ot("string",An._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};function om(n,t){const e=Wa(n.firestore,Ll),r=kp(n),i=qp(n.converter,t);return Hp(e,[Up(Fp(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then((()=>r))}function Hp(n,t){return(function(r,i){const o=new ve;return r.asyncQueue.enqueueAndForget((async()=>vp(await Pp(r),i,o))),o.promise})(xp(n),t)}function am(){return new oi("serverTimestamp")}(function(t,e=!0){(function(i){Qe=i})(Hh),_r(new Rn("firestore",((r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new Ll(new od(r.getProvider("auth-internal")),new cd(l,r.getProvider("app-check-internal")),(function(p,v){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(p.options.projectId,v)})(l,i),l);return o={useFetchStreams:e,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Fe(Io,Ao,t),Fe(Io,Ao,"esm2020")})();var Wp="firebase",Kp="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(Wp,Kp,"app");const Qp={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"your-api-key-here",VITE_FIREBASE_APP_ID:"your-app-id",VITE_FIREBASE_AUTH_DOMAIN:"your-project-id.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"your-messaging-sender-id",VITE_FIREBASE_PROJECT_ID:"your-project-id",VITE_FIREBASE_STORAGE_BUCKET:"your-project-id.appspot.com"},Hl={apiKey:"your-api-key-here",authDomain:"your-project-id.firebaseapp.com",projectId:"your-project-id",storageBucket:"your-project-id.appspot.com",messagingSenderId:"your-messaging-sender-id",appId:"your-app-id"},Xp=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],ua=Xp.filter(n=>{const t=Qp[n];return!t||t.includes("your-")||t.includes("your-project-id")||t.includes("your-api-key")||t.includes("your-messaging-sender-id")||t.includes("your-app-id")});ua.length>0&&(console.error("❌ Firebase Configuration Error: Missing or placeholder environment variables:"),ua.forEach(n=>{console.error(`   - ${n}`)}),console.error(`
📝 Please update your .env file with your Firebase configuration values.`),console.error(`   See FIREBASE_SETUP.md for instructions.
`));const Jp=Object.values(Hl).some(n=>typeof n=="string"&&n.includes("your-"));Jp&&(console.warn("⚠️  Warning: Firebase configuration contains placeholder values."),console.warn(`   The contact form will not work until you add your Firebase credentials to .env
`));let ha,Yp;try{ha=Oa(Hl),Yp=Dp(ha),console.log("✅ Firebase initialized successfully")}catch(n){throw console.error("❌ Firebase initialization failed:",n),n}export{nm as B,rm as I,om as a,Sa as b,im as c,Yp as d,am as s};
