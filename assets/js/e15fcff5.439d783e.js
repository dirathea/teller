"use strict";(self.webpackChunkdocs_tlr_dev=self.webpackChunkdocs_tlr_dev||[]).push([[178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="How to add a new provider",l={unversionedId:"developer-guide/new-provider",id:"developer-guide/new-provider",title:"How to add a new provider",description:"Adding a new Teller provider is very easy, but you still need to know where to start. We summarize the steps very shortly to make your life easier",source:"@site/docs/developer-guide/new-provider.md",sourceDirName:"developer-guide",slug:"/developer-guide/new-provider",permalink:"/teller/developer-guide/new-provider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/teller/developer-guide/"}},p={},s=[{value:"Provider implementation",id:"provider-implementation",level:2},{value:"Verify your work:",id:"verify-your-work",level:3},{value:"Notes",id:"notes",level:3},{value:"Adding third-party packages",id:"adding-third-party-packages",level:3},{value:"Adding tests",id:"adding-tests",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-new-provider"},"How to add a new provider"),(0,a.kt)("p",null,"Adding a new Teller provider is very easy, but you still need to know where to start. We summarize the steps very shortly to make your life easier"),(0,a.kt)("h2",{id:"provider-implementation"},"Provider implementation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the file ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tellerops/teller/blob/master/examples/providers/example.go"},"example.go")," from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tellerops/teller/blob/master/examples/providers/example.go"},"examples/providers/example.go")," and make sure to implement all the required behaviors. The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tellerops/teller/blob/master/examples/providers/example.go"},"example.go")," file is a skeleton for adding a new provider, it contains stubs for an interface which declares the required functionality that any provider must have."),(0,a.kt)("li",{parentName:"ol"},"After copying to the providers dir, remove the comment from the ",(0,a.kt)("inlineCode",{parentName:"li"},"init")," function to register your provider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},' // func init() {\n//  metaInto := core.MetaInfo{\n//      Description:    "ProviderName",\n//      Name:           "provider_name",\n//      Authentication: "If you have the Consul CLI working and configured, there\'s no special action to take.\\nConfiguration is environment based, as defined by client standard. See variables [here](https://github.com/hashicorp/consul/blob/master/api/api.go#L28).",\n//      ConfigTemplate: `\n//   provider:\n//     env:\n//       KEY_EAXMPLE:\n//         path: pathToKey\n// `,\n//      Ops: core.OpMatrix{Get: true, GetMapping: true, Put: true, PutMapping: true},\n//  }\n//  RegisterProvider(metaInto, NewExample)\n// }\n')),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"Description, Name, and Authentication"),", as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"OpMatrix")," that descibes the action this provider supports, based on your implementation."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add a provider template configuration in path: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tellerops/teller/blob/master/pkg/wizard_template.go"},"pkg/wizard_template.go"),". This will be used to auto-generate a configuration.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'{{- if index .ProviderKeys "example" }}\n  # Add here some authentication requirements, like a token that should be in the user\'s environment.\n  example:\n    env_sync:\n       path: redis/config\n    env:\n      ETC_DSN:\n        path: redis/config/foobar\n\n{{end}}\n')),(0,a.kt)("p",null,"You're done! \ud83d\ude80"),(0,a.kt)("h3",{id:"verify-your-work"},"Verify your work:"),(0,a.kt)("p",null,"Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"go run main.go new")," and run through the flow in the wizard.\nEnsure that you see your provider in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Select your secret providers")," question."),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"teller.yml")," file is created, run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"go run main.go yaml"),", you should see the message :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'FATA[0000] could not load all variables from the given existing providers  error="provider \\"Example\\" does not implement write yet"\n')),(0,a.kt)("p",null,"This means that you configured the provider successfully and are ready to implement the functions in it."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since each provider uses some kind of system behind it (e.g. Hashicorp Vault provider connects to the Hashicorp Vault itself) try to wrap the access to the backend or system with your own abstract client-provider with an interface. It will help you to test your provider easier."),(0,a.kt)("li",{parentName:"ul"},"Use provider logger for better visibility when an error occurs."),(0,a.kt)("li",{parentName:"ul"},"Add the new provider to provider mapping in ",(0,a.kt)("a",{parentName:"li",href:"../providers/#remapping-provider-variables"},"README.md"),".")),(0,a.kt)("h3",{id:"adding-third-party-packages"},"Adding third-party packages"),(0,a.kt)("p",null,"We ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor")," our dependencies and push them to the repo. This creates an immutable, independent build, that's also free from risks of fetching unknown code in CI/release time."),(0,a.kt)("p",null,"After adding your packages to import in your provider file, run the commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ go mod tidy\n$ go mod vendor\n")),(0,a.kt)("h2",{id:"adding-tests"},"Adding tests"),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"example_test.go")," file in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tellerops/teller/tree/master/pkg/providers"},"pkg/providers")," folder."),(0,a.kt)("p",null,"In case you warp the client-provider with an interface you can run a mock generator with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/mock"},"mock")," framework and add this command to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tellerops/teller/blob/master/Makefile"},"Makefile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mockgen -source pkg/providers/example.go -destination pkg/providers/mock_providers/example_mock.go\n")),(0,a.kt)("p",null,"Test guidelines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"TestExample")," function and call ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tellerops/teller/blob/master/pkg/providers/helpers_test.go"},"AssertProvider")," for testing main functionality."),(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"TestExampleFailures")," for testing error handling."),(0,a.kt)("li",{parentName:"ul"},"You can also add more tests for testing private functions."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make lint")," to validate linting."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"make test")," for make sure that all the test pass.")))}m.isMDXComponent=!0}}]);