"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={description:"\u5b9a\u65f6\u5668\u7684\u6982\u5ff5\u53ca\u7528\u6cd5\u4ecb\u7ecd\u3002"},a="\u5b9a\u65f6\u5668",p={unversionedId:"app/timer",id:"version-2.x/app/timer",title:"\u5b9a\u65f6\u5668",description:"\u5b9a\u65f6\u5668\u7684\u6982\u5ff5\u53ca\u7528\u6cd5\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/app/timer.md",sourceDirName:"app",slug:"/app/timer",permalink:"/zh-Hans/docs/app/timer",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/app/timer.md",tags:[],version:"2.x",frontMatter:{description:"\u5b9a\u65f6\u5668\u7684\u6982\u5ff5\u53ca\u7528\u6cd5\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u5de5\u4f5c\u7ebf\u7a0b",permalink:"/zh-Hans/docs/app/worker"},next:{title:"\u4e8b\u4ef6",permalink:"/zh-Hans/docs/app/events"}},l={},c=[{value:"\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u7b80\u5355\u7684\u4f8b\u5b50",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9a\u65f6\u5668"},"\u5b9a\u65f6\u5668"),(0,i.kt)("p",null,"\u5b9a\u65f6\u5668\u7528\u4e8e\u5c06\u4e00\u4e9b\u64cd\u4f5c\u63a8\u8fdf\u5230\u6307\u5b9a\u65f6\u95f4\u4e4b\u540e\u6267\u884c\u3002LCUI \u7684\u5b9a\u65f6\u5668\u90fd\u662f\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u5904\u7406\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5b9a\u65f6\u5668\u7684\u65f6\u95f4\u7c92\u5ea6\u53d7\u5230\u5e27\u7387\u7684\u9650\u5236\uff0c\u4e0d\u80fd\u5c0f\u4e8e\u6bcf\u5e27\u7684\u505c\u7559\u65f6\u95f4\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a\u5f53\u524d\u5e27\u7387\u4e3a 120 \u5e27\u6bcf\u79d2\uff0c\u90a3\u4e48\u65f6\u95f4\u7c92\u5ea6\u5c31\u662f 8.33 \u6beb\u79d2\uff0c\u5982\u679c\u4f60\u8bbe\u7f6e\u5b9a\u65f6\u5668\u7684\u7b49\u5f85\u65f6\u95f4\u662f 20 \u6beb\u79d2\uff0c\u90a3\u4e48\u5b9e\u9645\u7684\u7b49\u5f85\u65f6\u95f4\u5c31\u4f1a\u5927\u4e8e\u7b49\u4e8e 25 \u6beb\u79d2\uff0c\u4e5f\u5c31\u662f\u5728\u8bbe\u7f6e\u5b9a\u65f6\u5668\u540e\u7684\u7b2c\u4e09\u5e27\u65f6\u5904\u7406\u8fd9\u4e2a\u5b9a\u65f6\u5668\u3002\u8fd9\u79cd\u7cbe\u786e\u5ea6\u7684\u5b9a\u65f6\u5668\u80fd\u591f\u5e94\u4ed8\u5927\u591a\u6570\u573a\u666f\uff0c\u5982\u679c\u4f60\u9700\u8981\u66f4\u52a0\u7cbe\u786e\u7684\u5b9a\u65f6\u5668\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u9009\u62e9\u5176\u5b83\u5b9a\u65f6\u5668\u5e93\uff0c\u6216\u81ea\u884c\u7f16\u7801\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u7b80\u5355\u7684\u4f8b\u5b50"},"\u7b80\u5355\u7684\u4f8b\u5b50"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e\u548c\u91ca\u653e\u5b9a\u65f6\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <LCUI.h>\n\nvoid OnTimeout(void *arg)\n{\n    int *timer_id = arg;\n\n    LCUITimer_Free(*timer_id);\n    LCUI_Quit();\n    printf("timeout\\n");\n}\n\nvoid OnInterval(void *arg)\n{\n    printf("interval\\n");\n}\n\nint main(void)\n{\n    int timer_id;\n\n    LCUI_Init();\n    timer_id = LCUI_SetInterval(1000, OnInterval, 0);\n    LCUI_SetTimeout(5000, OnTimeout, &timer_id);\n    return LCUI_Main();\n}\n')),(0,i.kt)("p",null,"\u9996\u5148\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"LCUI_SetInterval()")," \u8bbe\u7f6e\u5b9a\u65f6\u5668\u6bcf\u9694 1 \u79d2\u8c03\u7528\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnInterval()")," \u51fd\u6570\uff0c\u5e76\u5c06\u5b83\u8fd4\u56de\u7684\u5b9a\u65f6\u5668\u6807\u8bc6\u53f7\u8d4b\u503c\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"timer_id")," \uff0c\u7136\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"LCUI_SetTimeout()")," \u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\u5728 5 \u79d2\u540e\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnTimeout()")," \u51fd\u6570\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"timer_id")," \u7684\u5f15\u7528\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"OnTimeout()")," \u51fd\u6570\u3002"))}m.isMDXComponent=!0}}]);