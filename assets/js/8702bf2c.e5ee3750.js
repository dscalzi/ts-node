(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[960],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2473:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"CommonJS vs native ECMAScript modules"},s={unversionedId:"imports",id:"imports",isDocsHomePage:!1,title:"CommonJS vs native ECMAScript modules",description:"TypeScript is almost always written using modern import syntax, but you can choose to either transform to CommonJS or use node's native ESM support.  Configuration is different for each.",source:"@site/docs/imports.md",sourceDirName:".",slug:"/imports",permalink:"/ts-node/docs/imports",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/imports.md",version:"current",frontMatter:{title:"CommonJS vs native ECMAScript modules"},sidebar:"primarySidebar",previous:{title:"Options",permalink:"/ts-node/docs/options"},next:{title:"Troubleshooting",permalink:"/ts-node/docs/troubleshooting"}},p=[{value:"CommonJS",id:"commonjs",children:[]},{value:"Native ECMAScript modules",id:"native-ecmascript-modules",children:[]}],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript is almost always written using modern ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," syntax, but you can choose to either transform to CommonJS or use node's native ESM support.  Configuration is different for each."),(0,a.kt)("p",null,"Here is a brief comparison of the two."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"CommonJS"),(0,a.kt)("th",{parentName:"tr",align:null},"Native ECMAScript modules"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Write native ",(0,a.kt)("inlineCode",{parentName:"td"},"import")," syntax"),(0,a.kt)("td",{parentName:"tr",align:null},"Write native ",(0,a.kt)("inlineCode",{parentName:"td"},"import")," syntax")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Transforms ",(0,a.kt)("inlineCode",{parentName:"td"},"import")," into ",(0,a.kt)("inlineCode",{parentName:"td"},"require()")),(0,a.kt)("td",{parentName:"tr",align:null},"Does not transform ",(0,a.kt)("inlineCode",{parentName:"td"},"import"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node executes scripts using the classic ",(0,a.kt)("a",{parentName:"td",href:"https://nodejs.org/dist/latest-v16.x/docs/api/modules.html"},"CommonJS loader")),(0,a.kt)("td",{parentName:"tr",align:null},"Node executes scripts using the new ",(0,a.kt)("a",{parentName:"td",href:"https://nodejs.org/dist/latest-v16.x/docs/api/esm.html"},"ESM loader"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use any of:",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"ts-node")," CLI",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"node -r ts-node/register"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},'NODE_OPTIONS="ts-node/register" node'),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"require('ts-node').register({/* options */})")),(0,a.kt)("td",{parentName:"tr",align:null},"Must use the ESM loader via:",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"node --loader ts-node/esm"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},'NODE_OPTIONS="--loader ts-node/esm" node'))))),(0,a.kt)("h2",{id:"commonjs"},"CommonJS"),(0,a.kt)("p",null,"Transforming to CommonJS is typically simpler and more widely supported because it is older.  You must remove or set ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#packages_type"},(0,a.kt)("inlineCode",{parentName:"a"},'"type": "commonjs"'))," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig/#module"},(0,a.kt)("inlineCode",{parentName:"a"},'"module": "CommonJS"'))," in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  // This can be omitted; commonjs is the default\n  "type": "commonjs"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "module": "CommonJS"\n  }\n}\n')),(0,a.kt)("p",null,"If you must keep ",(0,a.kt)("inlineCode",{parentName:"p"},'"module": "ESNext"')," for ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),", webpack, or another build tool, you can set an override for ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "module": "ESNext"\n  },\n  "ts-node": {\n    "compilerOptions": {\n      "module": "CommonJS"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"native-ecmascript-modules"},"Native ECMAScript modules"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_experimental_loaders"},"Node's ESM loader hooks")," are ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/documentation.html#documentation_stability_index"},(0,a.kt)("strong",{parentName:"a"},"experimental"))," and subject to change. ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node"),"'s ESM support is also experimental. They may have\nbreaking changes in minor and patch releases and are not recommended for production."),(0,a.kt)("p",null,"For complete usage, limitations, and to provide feedback, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node/issues/1007"},"#1007"),"."),(0,a.kt)("p",null,"You must set ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/packages.html#packages_type"},(0,a.kt)("inlineCode",{parentName:"a"},'"type": "module"'))," in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig/#module"},(0,a.kt)("inlineCode",{parentName:"a"},'"module": "ESNext"'))," in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "type": "module"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "module": "ESNext" // or ES2015, ES2020\n  }\n}\n')))}m.isMDXComponent=!0}}]);