"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="\u521b\u5efa\u9879\u76ee",l={unversionedId:"tutorials/todolist/create-project",id:"tutorials/todolist/create-project",title:"\u521b\u5efa\u9879\u76ee",description:"\u73af\u5883\u9700\u6c42",source:"@site/docs/tutorials/01-todolist/04-create-project.md",sourceDirName:"tutorials/01-todolist",slug:"/tutorials/todolist/create-project",permalink:"/zh-Hans/docs/next/tutorials/todolist/create-project",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorials/01-todolist/04-create-project.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5236\u5b9a\u65b9\u6848",permalink:"/zh-Hans/docs/next/tutorials/todolist/solution"},next:{title:"\u521b\u5efa\u754c\u9762",permalink:"/zh-Hans/docs/next/tutorials/todolist/create-ui"}},c={},p=[{value:"\u73af\u5883\u9700\u6c42",id:"\u73af\u5883\u9700\u6c42",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u5b89\u88c5\u548c\u6784\u5efa",id:"\u5b89\u88c5\u548c\u6784\u5efa",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,o.kt)("h2",{id:"\u73af\u5883\u9700\u6c42"},"\u73af\u5883\u9700\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/download/"},"Git"),"\uff1a\u7248\u672c\u7ba1\u7406\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://xmake.io/#/zh-cn/?id=%e5%ae%89%e8%a3%85"},"XMake"),"\uff1a\u6784\u5efa\u5de5\u5177")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u5047\u5b9a\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86\u6784\u5efa C/C++ \u9879\u76ee\u6240\u9700\u7684\u73af\u5883")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u5047\u5b9a\u4f60\u5df2\u7ecf\u77e5\u9053\u4ec0\u4e48\u662f\u547d\u4ee4\u884c\u3001\u5982\u4f55\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\u3001\u5982\u4f55\u5728\u7a97\u53e3\u5185\u6267\u884c\u547d\u4ee4")),(0,o.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4f7f\u7528 Git \u4e0b\u8f7d\u793a\u4f8b\u9879\u76ee\u7684\u4ee3\u7801\u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/lcui-dev/lcui-quick-start.git\n\n# \u6216\u6539\u7528\u56fd\u5185\u7684\u6e90\ngit clone https://gitee.com/lcui-dev/lcui-quick-start.git\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u548c\u6784\u5efa"},"\u5b89\u88c5\u548c\u6784\u5efa"),(0,o.kt)("p",null,"\u8fdb\u5165\u9879\u76ee\u6e90\u7801\u76ee\u5f55\u540e\uff0c\u4f7f\u7528 XMake\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xmake\n")),(0,o.kt)("p",null,"\u4e4b\u540e XMake \u4f1a\u63d0\u793a\u662f\u5426\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u5b89\u88c5\u5b8c\u540e\u4f1a\u5f00\u59cb\u6784\u5efa\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,o.kt)("p",null,"\u7528 XMake \u7684\u5feb\u6377\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xmake run app\n")),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u4f60\u4f1a\u770b\u5230\u8fd9\u4e2a\u793a\u4f8b\u9879\u76ee\u7684\u8fd0\u884c\u6548\u679c\u3002"))}d.isMDXComponent=!0}}]);