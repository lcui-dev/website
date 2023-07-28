"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={description:"XML \u7684\u5199\u6cd5\u548c\u5e38\u7528\u5143\u7d20\u7684\u4ecb\u7ecd\u3002"},i="XML",o={unversionedId:"base/xml-syntax",id:"version-2.x/base/xml-syntax",title:"XML",description:"XML \u7684\u5199\u6cd5\u548c\u5e38\u7528\u5143\u7d20\u7684\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/base/xml-syntax.md",sourceDirName:"base",slug:"/base/xml-syntax",permalink:"/zh-Hans/docs/base/xml-syntax",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/base/xml-syntax.md",tags:[],version:"2.x",frontMatter:{description:"XML \u7684\u5199\u6cd5\u548c\u5e38\u7528\u5143\u7d20\u7684\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u7ea6\u5b9a",permalink:"/zh-Hans/docs/base/convention"},next:{title:"CSS",permalink:"/zh-Hans/docs/base/css-syntax"}},p={},u=[{value:"\u5e38\u7528\u5143\u7d20",id:"\u5e38\u7528\u5143\u7d20",level:3},{value:"resource",id:"resource",level:4},{value:"widget",id:"widget",level:4},{value:"API",id:"api",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xml"},"XML"),(0,a.kt)("p",null,"XML \u662f\u4e00\u79cd\u53ef\u6269\u5c55\u7684\u6807\u8bb0\u8bed\u8a00\uff0cLCUI \u4e4b\u6240\u4ee5\u91c7\u7528 XML \u800c\u4e0d\u662f HTML\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u7406\u7531\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XML \u6bd4 HTML \u66f4\u7b80\u5355\u3002"),(0,a.kt)("li",{parentName:"ul"},"LCUI \u4e0d\u662f\u6d4f\u89c8\u5668\uff0c\u4e0d\u6253\u7b97\u5b9e\u73b0 HTML \u4e2d\u7684\u6240\u6709\u6807\u7b7e\u7684\u529f\u80fd\uff0c\u56e0\u4e3a\u8fd9\u662f\u65e2\u6d6a\u8d39\u65f6\u95f4\u53c8\u6ca1\u6709\u610f\u4e49\u7684\u4e8b\u60c5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 HTML \u4f1a\u8ba9\u7528\u6237\u4ee5\u5f00\u53d1\u7f51\u9875\u7684\u601d\u7ef4\u65b9\u5f0f\u53bb\u7f16\u5199 LCUI \u5e94\u7528\uff0c\u7136\u540e\u8bef\u4ee5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"<img>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"<table>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"<video>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"<audio>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"<table>")," \u7b49\u6807\u7b7e\u5728 LCUI \u4e2d\u4f1a\u6709\u6548\u679c\u3002")),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u6211\u4eec\u5047\u5b9a\u4f60\u5df2\u7ecf\u719f\u6089 HTML \u6216 XML \u8fd9\u7c7b\u6807\u8bb0\u8bed\u8a00\u7684\u8bed\u6cd5\uff0c\u672c\u6587\u5c06\u8df3\u8fc7\u57fa\u672c\u8bed\u6cd5\u548c\u76f8\u5173\u672f\u8bed\u7684\u4ecb\u7ecd\uff0c\u76f4\u63a5\u8bb2\u89e3 LCUI \u7684 XML \u6587\u6863\u5199\u6cd5\u548c\u5e38\u7528\u5143\u7d20\u7684\u7528\u6cd5\uff0c\u5982\u9700\u4e86\u89e3\u66f4\u591a\u8bf7\u67e5\u9605\u76f8\u5173\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u5230 LCUI \u7684 XML \u6587\u6863\u5185\u5bb9\u683c\u5f0f\u548c\u9884\u5b9a\u4e49\u5143\u7d20\u7684\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<?xml version="1.0" encoding="UTF-8" ?>\n<lcui-app>\n  <resource type="text/css" src="main.css"/>\n  <ui>\n    <textview id="text" type="textview">\n      Hello, World!\n    </textview>\n  </ui>\n</lcui-app>\n')),(0,a.kt)("p",null,"\u7b2c\u4e00\u884c\u58f0\u660e\u6587\u6863\u7684\u7c7b\u578b\uff0c\u7b2c\u4e8c\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"<lcui-app>")," \u58f0\u660e\u4e86\u5b83\u5305\u88f9\u7684\u5185\u5bb9\u9002\u7528\u4e8e LCUI \u5e94\u7528\uff0c\u7b2c\u4e09\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ui>")," \u5305\u88f9\u4e86\u6574\u4e2a\u7528\u6237\u754c\u9762\u7684\u7ed3\u6784\u53ca\u5176\u6240\u6709\u7ec4\u4ef6\u7684\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u5e38\u7528\u5143\u7d20"},"\u5e38\u7528\u5143\u7d20"),(0,a.kt)("h4",{id:"resource"},"resource"),(0,a.kt)("p",null,"\u58f0\u660e\u8d44\u6e90\u4fe1\u606f\uff0c\u53ef\u7528\u4e8e\u52a0\u8f7d\u8d44\u6e90\u6587\u4ef6\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"\u8d44\u6e90\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u6709\uff1a"),(0,a.kt)("p",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"application/font-ttf")," \uff1a\u4f5c\u4e3a ttf \u5b57\u4f53\u6587\u4ef6\u52a0\u8f7d"),(0,a.kt)("li",null,(0,a.kt)("code",null,"text/css")," \uff1a\u4f5c\u4e3a css \u6587\u672c\u6587\u4ef6\u52a0\u8f7d"),(0,a.kt)("li",null," ",(0,a.kt)("code",null,"text/xml")," \uff1a\u4f5c\u4e3a xml \u6587\u6863\u52a0\u8f7d")),(0,a.kt)("p",null,"\u5f53\u503c\u4e3a ",(0,a.kt)("code",null,"text/xml")," \u65f6\uff0c\u6548\u679c\u76f8\u5f53\u4e8e\u5c06\u76ee\u6807 xml \u6587\u6863\u7684\u5185\u5bb9\u63d2\u5165\u5230 ",(0,a.kt)("code",null,"<","resource>")," \u6240\u5728\u4f4d\u7f6e\u3002"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6587\u4ef6\u7684\u6765\u6e90\u8def\u5f84")))),(0,a.kt)("h4",{id:"widget"},"widget"),(0,a.kt)("p",null,"\u58f0\u660e\u7ec4\u4ef6\uff0c\u4ec5\u9650\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ui>")," \u5185\u4f7f\u7528\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7684\u7c7b\u578b\u540d\u79f0\uff0c\u9700\u8981\u662f\u7ec4\u4ef6\u539f\u578b\u5e93\u4e2d\u5df2\u6ce8\u518c\u7684\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"\u552f\u4e00\u6807\u8bc6\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"class"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7c7b\u540d\u79f0")))),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ui>")," \u4e2d\uff0c\u5982\u679c\u5143\u7d20\u7684\u6807\u7b7e\u540d\u4e0d\u662f\u9884\u5b9a\u4e49\u7684\uff0c\u5219\u4f1a\u89c6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"<widget>")," \u5143\u7d20\uff0c\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7ec4\u4ef6\u7c7b\u578b\u540d\u4f5c\u4e3a\u6807\u7b7e\u540d\uff0c\u4f8b\u5982\u4ee5\u4e0b\u4e24\u884c\u5143\u7d20\u662f\u7b49\u6548\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<widget type="textview" class="text">hello</widget>\n<textview class="text">hello</textview>\n')),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,"LCUI \u63d0\u4f9b\u7684 XML \u6587\u6863\u76f8\u5173\u7684\u51fd\u6570\u6709\u4e24\u4e2a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"LCUI_Widget LCUIBuilder_LoadString(const char *str, int size);\n\nLCUI_Widget LCUIBuilder_LoadFile(const char *filepath);\n")),(0,a.kt)("p",null,"\u4ece\u51fd\u6570\u539f\u578b\u53ef\u4ee5\u77e5\u9053\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u5206\u522b\u7528\u4e8e\u4ece\u5b57\u7b26\u4e32\u548c\u6587\u4ef6\u4e2d\u52a0\u8f7d XML \u6587\u6863\u5185\u5bb9\uff0c\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u90fd\u662f\u4e00\u4e2a\u6839\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u6839\u7ec4\u4ef6\u53ea\u662f\u5145\u5f53\u5305\u542b\u4e86\u6240\u6709\u7ec4\u4ef6\u7684\u5bb9\u5668\uff0c\u771f\u6b63\u6709\u7528\u7684\u662f\u5b83\u91cc\u9762\u7ec4\u4ef6\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget_Unwrap()")," \u51fd\u6570\u5c55\u5f00\u8be5\u5bb9\u5668\u7ec4\u4ef6\uff0c\u5c06\u5b83\u91cc\u9762\u7684\u7ec4\u4ef6\u66b4\u9732\u5230\u5916\u9762\u3002"))}d.isMDXComponent=!0}}]);