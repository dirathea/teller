"use strict";(self.webpackChunkdocs_tlr_dev=self.webpackChunkdocs_tlr_dev||[]).push([[767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Customization",p={unversionedId:"features/customization",id:"features/customization",title:"Customization",description:"Prompts and options",source:"@site/docs/features/customization.md",sourceDirName:"features",slug:"/features/customization",permalink:"/teller/features/customization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration Management",permalink:"/teller/features/configuration-management"},next:{title:"Runtime Isolation",permalink:"/teller/features/runtime-isolation"}},l={},s=[{value:"\u2705 Prompts and options",id:"-prompts-and-options",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customization"},"Customization"),(0,o.kt)("h2",{id:"-prompts-and-options"},"\u2705 Prompts and options"),(0,o.kt)("p",null,"There are a few options that you can use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"carry_env")," - carry the environment from the parent process into the child process. By default we isolate the child process from the parent process. (default: ",(0,o.kt)("em",{parentName:"p"},"false"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"confirm")," - an interactive question to prompt the user before taking action (such as running a process). (default: ",(0,o.kt)("em",{parentName:"p"},"empty"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"opts")," - a dict for our own variable/setting substitution mechanism. For example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"opts:\n  region: env:AWS_REGION\n  stage: qa\n")),(0,o.kt)("p",null,"And now you can use paths like ",(0,o.kt)("inlineCode",{parentName:"p"},"/{{stage}}/{{region}}/billing-svc")," where ever you want (this templating is available for the ",(0,o.kt)("strong",{parentName:"p"},"confirm")," question too)."),(0,o.kt)("p",null,"If you prefix a value with ",(0,o.kt)("inlineCode",{parentName:"p"},"env:")," it will get pulled from your current environment."))}m.isMDXComponent=!0}}]);