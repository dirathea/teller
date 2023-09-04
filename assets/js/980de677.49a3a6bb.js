"use strict";(self.webpackChunkdocs_tlr_dev=self.webpackChunkdocs_tlr_dev||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},l="Runtime Isolation",a={unversionedId:"features/runtime-isolation",id:"features/runtime-isolation",title:"Runtime Isolation",description:"Running subprocesses",source:"@site/docs/features/runtime-isolation.md",sourceDirName:"features",slug:"/features/runtime-isolation",permalink:"/features/runtime-isolation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customization",permalink:"/features/customization"},next:{title:"Security Enhancement",permalink:"/features/security-enhancement"}},s={},u=[{value:"\ud83c\udfc3\u200d\u2642\ufe0f Running subprocesses",id:"\ufe0f-running-subprocesses",level:2},{value:"\ud83d\udd0e Inspecting variables",id:"-inspecting-variables",level:2},{value:"\ud83d\udcfa Local shell population",id:"-local-shell-population",level:2},{value:"\ud83d\udc33 Easy Docker environment",id:"-easy-docker-environment",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-isolation"},"Runtime Isolation"),(0,o.kt)("h2",{id:"\ufe0f-running-subprocesses"},"\ud83c\udfc3\u200d\u2642\ufe0f Running subprocesses"),(0,o.kt)("p",null,"Manually exporting and setting up environment variables for running a process with demo-like / production-like set up?"),(0,o.kt)("p",null,"Got bitten by using ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production")," and exposing it in the local project itself?"),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"teller")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},".teller.yml")," file that exposes nothing to the prying eyes, you can work fluently and seamlessly with zero risk, also no need for quotes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ teller run -- your-process arg1 arg2... --switch1 ...\n")),(0,o.kt)("h2",{id:"-inspecting-variables"},"\ud83d\udd0e Inspecting variables"),(0,o.kt)("p",null,"This will output the current variables ",(0,o.kt)("inlineCode",{parentName:"p"},"teller")," picks up. Only first 2 letters will be shown from each, of course."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ teller show\n")),(0,o.kt)("h2",{id:"-local-shell-population"},"\ud83d\udcfa Local shell population"),(0,o.kt)("p",null,"Hardcoding secrets into your shell scripts and dotfiles?"),(0,o.kt)("p",null,"In some cases it makes sense to eval variables into your current shell. For example in your ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," it makes much more sense to use ",(0,o.kt)("inlineCode",{parentName:"p"},"teller"),", and not hardcode all those into the ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," file itself."),(0,o.kt)("p",null,"In this case, this is what you should add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'eval "$(teller sh)"\n')),(0,o.kt)("h2",{id:"-easy-docker-environment"},"\ud83d\udc33 Easy Docker environment"),(0,o.kt)("p",null,"Tired of grabbing all kinds of variables, setting those up, and worried about these appearing in your shell history as well?"),(0,o.kt)("p",null,"Use this one liner from now on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run --rm -it --env-file <(teller env) alpine sh\n")))}d.isMDXComponent=!0}}]);