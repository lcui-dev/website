"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3771],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>f});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=c(l),m=n,f=s["".concat(p,".").concat(m)]||s[m]||k[m]||a;return l?r.createElement(f,i(i({ref:t},o),{},{components:l})):r.createElement(f,i({ref:t},o))}));function f(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=l[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1014:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=l(7462),n=(l(7294),l(3905));const a={sidebar_position:0,sidebar_label:"\u610f\u89c1\u5f81\u96c6"},i="\u610f\u89c1\u5f81\u96c6",u={unversionedId:"rfcs/README",id:"rfcs/README",title:"\u610f\u89c1\u5f81\u96c6",description:"\u8bb8\u591a\u6539\u52a8\uff0c\u5305\u62ec\u9519\u8bef\u4fee\u590d\u548c\u6587\u6863\u6539\u8fdb\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u6b63\u5e38\u7684 GitHub/Gitee \u62c9\u53d6\u8bf7\u6c42\u5de5\u4f5c\u6d41\u7a0b\u5b9e\u65bd\u548c\u5ba1\u67e5\u3002",source:"@site/docs/rfcs/README.md",sourceDirName:"rfcs",slug:"/rfcs/",permalink:"/zh-Hans/docs/next/rfcs/",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/README.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"\u610f\u89c1\u5f81\u96c6"},sidebar:"rfcSidebar",next:{title:"\u7f16\u7801\u89c4\u8303",permalink:"/zh-Hans/docs/next/rfcs/style-guide"}},p={},c=[{value:"RFC \u751f\u547d\u5468\u671f",id:"rfc-\u751f\u547d\u5468\u671f",level:2},{value:"\u8d21\u732e\u8005\u534f\u8bae (CLA)",id:"\u8d21\u732e\u8005\u534f\u8bae-cla",level:2},{value:"\u4f55\u65f6\u9075\u5faa\u6b64\u6d41\u7a0b",id:"\u4f55\u65f6\u9075\u5faa\u6b64\u6d41\u7a0b",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f60\u9700\u8981\u8fd9\u6837\u505a",id:"\u4e3a\u4ec0\u4e48\u4f60\u9700\u8981\u8fd9\u6837\u505a",level:2},{value:"\u5728\u63d0\u4ea4\u524d\u6536\u96c6\u53cd\u9988",id:"\u5728\u63d0\u4ea4\u524d\u6536\u96c6\u53cd\u9988",level:2},{value:"\u6d41\u7a0b\u662f\u4ec0\u4e48",id:"\u6d41\u7a0b\u662f\u4ec0\u4e48",level:2},{value:"\u6709\u5173\u6d3b\u52a8 RFC \u7684\u8be6\u7ec6\u4fe1\u606f",id:"\u6709\u5173\u6d3b\u52a8-rfc-\u7684\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u5b9e\u73b0 RFC",id:"\u5b9e\u73b0-rfc",level:2},{value:"\u5ba1\u67e5 RFC",id:"\u5ba1\u67e5-rfc",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],o={toc:c},s="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(s,(0,r.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u610f\u89c1\u5f81\u96c6"},"\u610f\u89c1\u5f81\u96c6"),(0,n.kt)("p",null,"\u8bb8\u591a\u6539\u52a8\uff0c\u5305\u62ec\u9519\u8bef\u4fee\u590d\u548c\u6587\u6863\u6539\u8fdb\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u6b63\u5e38\u7684 GitHub/Gitee \u62c9\u53d6\u8bf7\u6c42\u5de5\u4f5c\u6d41\u7a0b\u5b9e\u65bd\u548c\u5ba1\u67e5\u3002"),(0,n.kt)("p",null,"\u867d\u7136\u6709\u4e9b\u6539\u52a8\u662f\u201c\u5b9e\u8d28\u6027\u7684\u201d\uff0c\u4f46\u6211\u4eec\u8981\u6c42\u8fd9\u4e9b\u6539\u52a8\u7ecf\u8fc7\u4e00\u4e9b\u8bbe\u8ba1\u8fc7\u7a0b\uff0c\u5e76\u5728 LCUI \u6838\u5fc3\u56e2\u961f\u4e2d\u8fbe\u6210\u5171\u8bc6\u3002"),(0,n.kt)("p",null,"\u201cRFC\u201d\uff08\u610f\u89c1\u5f81\u96c6\uff09\u6d41\u7a0b\u65e8\u5728\u4e3a\u65b0\u529f\u80fd\u8fdb\u5165\u9879\u76ee\u63d0\u4f9b\u4e00\u81f4\u4e14\u53d7\u63a7\u7684\u8def\u5f84\u3002"),(0,n.kt)("h2",{id:"rfc-\u751f\u547d\u5468\u671f"},"RFC \u751f\u547d\u5468\u671f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f85\u5904\u7406\uff1a\u5f53 RFC \u4f5c\u4e3a PR \u63d0\u4ea4\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u751f\u6548\uff1a\u5f53 RFC PR \u5df2\u5408\u5e76\u3001\u4e14\u6b63\u5728\u5b9e\u65bd\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u843d\u5730\uff1a\u5f53 RFC \u63d0\u8bae\u7684\u66f4\u6539\u5728\u5b9e\u9645\u7248\u672c\u4e2d\u53d1\u5e03\u65f6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u62d2\u7edd\uff1a\u5f53\u4e00\u4e2a RFC PR \u5728\u6ca1\u6709\u88ab\u5408\u5e76\u7684\u60c5\u51b5\u4e0b\u88ab\u5173\u95ed\u3002")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/lc-soft/LCUI/pulls?search=%E5%BE%81%E6%B1%82%E6%84%8F%E8%A7%81"},"\u6d3b\u8dc3\u7684\u610f\u89c1\u5f81\u96c6\u7a3f\u5217\u8868")),(0,n.kt)("h2",{id:"\u8d21\u732e\u8005\u534f\u8bae-cla"},"\u8d21\u732e\u8005\u534f\u8bae (CLA)"),(0,n.kt)("p",null,"\u4e3a\u4e86\u63a5\u53d7\u4f60\u7684\u62c9\u53d6\u8bf7\u6c42\uff0c\u6211\u4eec\u9700\u8981\u4f60\u63d0\u4ea4\u8d21\u732e\u8005\u534f\u8bae\u3002\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u63d0\u4ea4\u62c9\u53d6\u8bf7\u6c42\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\u4f60\u5df2\u5b8c\u6210 \u8d21\u732e\u8005\u534f\u8bae\u7b7e\u7f72\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gitee.com/organizations/lc-ui/cla/lcui-cla"},"\u70b9\u51fb\u6b64\u5904\u7b7e\u7f72\u4f60\u7684\u8d21\u732e\u8005\u534f\u8bae")),(0,n.kt)("h2",{id:"\u4f55\u65f6\u9075\u5faa\u6b64\u6d41\u7a0b"},"\u4f55\u65f6\u9075\u5faa\u6b64\u6d41\u7a0b"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6253\u7b97\u5bf9 LCUI \u6216\u5176\u6587\u6863\u8fdb\u884c\u201c\u5b9e\u8d28\u6027\u201d\u6539\u52a8\uff0c\u5219\u5e94\u8003\u8651\u4f7f\u7528\u6b64\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,"\u6784\u6210\u201c\u5b9e\u8d28\u6027\u201d\u53d8\u5316\u7684\u5185\u5bb9\u662f\u6839\u636e\u793e\u533a\u89c4\u8303\u4e0d\u65ad\u6f14\u53d8\u7684\uff0c\u4f46\u53ef\u80fd\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u65b0 API \u63a5\u53e3\u5b9e\u73b0\u7684\u65b0\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664\u5df2\u4f5c\u4e3a\u53d1\u5e03\u6e20\u9053\u7684\u4e00\u90e8\u5206\u63d0\u4f9b\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u5f15\u5165\u65b0\u7684\u60ef\u7528\u7528\u6cd5\u6216\u7ea6\u5b9a\uff0c\u5373\u4f7f\u5b83\u4eec\u4e0d\u5305\u62ec\u5bf9 LCUI \u672c\u8eab\u7684\u4ee3\u7801\u66f4\u6539")),(0,n.kt)("p",null,"\u4e00\u4e9b\u66f4\u6539\u4e0d\u9700\u8981\u610f\u89c1\u5f81\u96c6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6539\u5199\u3001\u91cd\u7ec4\u6216\u91cd\u6784"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6216\u5220\u9664\u8b66\u544a"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7684\u5185\u5bb9\u53ea\u4f1a\u88ab\u5176\u4ed6 LCUI \u5b9e\u73b0\u8005\u6ce8\u610f\u5230\uff0c\u800c\u5bf9 LCUI \u7528\u6237\u662f\u4e0d\u53ef\u89c1\u7684")),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f60\u9700\u8981\u8fd9\u6837\u505a"},"\u4e3a\u4ec0\u4e48\u4f60\u9700\u8981\u8fd9\u6837\u505a"),(0,n.kt)("p",null,"\u4e3a\u4e86\u63d0\u5347\u7a33\u5b9a\u6027\uff0c\u66f4\u591a\u5730\u8003\u8651\u6211\u4eec\u6240\u505a\u7684\u6bcf\u4e00\u9879\u66f4\u6539\u5bf9\u6700\u7ec8\u7528\u6237\u53ef\u80fd\u9020\u6210\u7684\u5f71\u54cd\uff0c\u53e6\u4e00\u65b9\u9762\uff0c\u4e5f\u9700\u8981\u9632\u6b62\u65b0 API \u53d8\u5f97\u66f4\u590d\u6742\u3002"),(0,n.kt)("p",null,"\u5728 LCUI \u7684 2.x \u7248\u672c\u4e4b\u524d\uff0c\u6240\u6709\u6539\u52a8\u90fd\u6ca1\u6709\u6587\u6863\uff0c\u5176\u4e2d\u6709\u4e9b\u6539\u52a8\u5e76\u6ca1\u6709\u7ecf\u8fc7\u8ba4\u771f\u601d\u8003\u548c\u8bbe\u8ba1\uff0c\u5728\u540e\u671f\u7ef4\u62a4\u65f6\uff0c\u5b83\u4eec\u4f1a\u963b\u788d\u6211\u4eec\u7406\u89e3\u76f8\u5173\u9700\u6c42\u548c\u8bbe\u8ba1\u610f\u56fe\u3002\u5bf9\u4e8e\u7528\u6237\u800c\u8a00\uff0c\u6211\u4eec\u5e0c\u671b\u516c\u5f00 LCUI \u5df2\u5b9e\u65bd\u7684\u548c\u5f85\u5b9e\u65bd\u7684\u6539\u52a8\uff0c\u4ee5\u5f81\u6c42\u66f4\u597d\u7684\u6539\u8fdb\u610f\u89c1\uff0c\u8ba9\u65b0\u589e\u7684\u6539\u52a8\u5185\u5bb9\u66f4\u7a33\u5b9a\u53ef\u9760\uff0c\u800c\u4e0d\u662f\u50cf\u4ee5\u524d\u90a3\u6837\u968f\u4fbf\u589e\u52a0\u4e86\u4e00\u4e9b\u6ca1\u6709\u6587\u6863\u7684\u529f\u80fd\uff0c\u7136\u540e\u53c8\u968f\u4fbf\u5220\u6389\uff0c\u53c8\u6216\u662f\u63a8\u5012\u91cd\u5199\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u5728\u5bf9 LCUI \u8fdb\u884c\u66f4\u6539\u65f6\uff0cRFC \u6d41\u7a0b\u53ef\u4ee5\u5f15\u5bfc\u4f60\u5b8c\u6210\u6211\u4eec\u7684\u601d\u8003\u8fc7\u7a0b\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u8ba8\u8bba\u4e3a\u4ec0\u4e48\u6216\u4e3a\u4ec0\u4e48\u4e0d\u5e94\u8be5\u8fdb\u884c\u8fd9\u4e9b\u66f4\u6539\u65f6\u8fbe\u6210\u5171\u8bc6\u3002"),(0,n.kt)("h2",{id:"\u5728\u63d0\u4ea4\u524d\u6536\u96c6\u53cd\u9988"},"\u5728\u63d0\u4ea4\u524d\u6536\u96c6\u53cd\u9988"),(0,n.kt)("p",null,"\u5728\u6df1\u5165\u7814\u7a76 RFC \u6240\u9700\u7684 API \u8bbe\u8ba1\u7ec6\u8282\u7ea7\u522b\u4e4b\u524d\uff0c\u83b7\u5f97\u5bf9\u4f60\u7684\u6982\u5ff5\u7684\u53cd\u9988\u901a\u5e38\u5f88\u6709\u5e2e\u52a9\u3002\u4f60\u53ef\u4ee5\u5728\u6b64\u4ed3\u5e93\u4e0a\u63d0\u51fa\u95ee\u9898\u4ee5\u5c55\u5f00\u8ba8\u8bba\uff0c\u76ee\u6807\u662f\u6700\u7ec8\u5236\u5b9a\u5177\u6709\u7279\u5b9a\u5b9e\u73b0\u8bbe\u8ba1\u7684 RFC \u62c9\u53d6\u8bf7\u6c42\u3002"),(0,n.kt)("h2",{id:"\u6d41\u7a0b\u662f\u4ec0\u4e48"},"\u6d41\u7a0b\u662f\u4ec0\u4e48"),(0,n.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u8981\u5c06\u4e3b\u8981\u529f\u80fd\u6dfb\u52a0\u5230 LCUI\uff0c\u9996\u5148\u5fc5\u987b\u5c06 RFC \u4f5c\u4e3a markdown \u6587\u4ef6\u5408\u5e76\u5230\u6b64\u4ee3\u7801\u5e93\u4e2d\u3002\u5c4a\u65f6 RFC \u7684\u72b6\u6001\u662f\u201c\u5df2\u786e\u8ba4\u201d\u5e76\u4e14\u53ef\u80fd\u4ee5\u6700\u7ec8\u5305\u542b\u5230 LCUI \u4e2d\u4e3a\u76ee\u6807\u6765\u5b9e\u73b0\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6b64\u4ee3\u7801\u5e93\u4e2d\u7684\u6a21\u677f (",(0,n.kt)("inlineCode",{parentName:"li"},"0000-template.zh-cn.md"),") \uff0c\u5728\u65b0\u7684 Markdown \u6587\u4ef6\u4e2d\u64b0\u5199\u4f60\u7684\u63d0\u6848\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u7ec6\u8282\uff1aRFC \u6ca1\u6709\u63d0\u4f9b\u4ee4\u4eba\u4fe1\u670d\u7684\u52a8\u673a\uff0c\u6ca1\u6709\u5c55\u793a\u5bf9\u8bbe\u8ba1\u5f71\u54cd\u7684\u7406\u89e3\uff0c\u6216\u8005\u5bf9\u7f3a\u70b9\u6216\u66ff\u4ee3\u65b9\u6848\u4e0d\u8bda\u5b9e\uff0c\u5f80\u5f80\u4e0d\u4f1a\u88ab\u63a5\u53d7\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u5728",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/discussions"},"\u8ba8\u8bba\u677f\u5757"),"\u4e2d\u6253\u5f00\u4e00\u4e2a\u65b0\u4e3b\u9898\u5e16\uff0c\u5e76\u786e\u4fdd\u5c06\u7c7b\u522b\u8bbe\u7f6e\u4e3a\u201cRFC Discussions\u201d\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u8ba8\u8bba\u4e3b\u9898\u5e16\u4e2d\u5efa\u7acb\u5171\u8bc6\u5e76\u6574\u5408\u53cd\u9988\u3002 \u83b7\u5f97\u5e7f\u6cdb\u652f\u6301\u7684 RFC \u6bd4\u90a3\u4e9b\u6ca1\u6709\u6536\u5230\u4efb\u4f55\u8bc4\u8bba\u7684 RFC \u66f4\u6709\u53ef\u80fd\u53d6\u5f97\u8fdb\u5c55\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u6848\u6536\u5230\u793e\u533a\u6210\u5458\u7684\u6781\u5927\u5174\u8da3\u548c\u666e\u904d\u79ef\u6781\u7684\u53cd\u9988\uff0c\u4f60\u53ef\u4ee5\u51c6\u5907\u4e00\u4e2a \u62c9\u53d6\u8bf7\u6c42\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fork \u6b64\u4ed3\u5e93\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4f60\u7684\u63d0\u6848\u5e76\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"active-rfcs/0000-my-feature.md"),' (\u5176\u4e2d\u7684 "my-feature" \u5bf9\u63d0\u6848\u7684\u63cf\u8ff0\uff0c\u800c\u7f16\u53f7\u65e0\u9700\u6307\u5b9a)\u3002'),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u62c9\u53d6\u8bf7\u6c42\u3002\u786e\u4fdd\u5b83\u94fe\u63a5\u5230\u8ba8\u8bba\u5e16\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u6700\u7ec8\uff0c\u6838\u5fc3\u56e2\u961f\u5c06\u786e\u5b9a\u662f\u5426\u7eb3\u5165 LCUI \u4e2d\u7684\u5019\u9009 RFC\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RFC \u53ef\u6839\u636e\u6838\u5fc3\u56e2\u961f\u548c\u793e\u533a\u7684\u53cd\u9988\u8fdb\u884c\u4fee\u6539\u3002\u91cd\u5927\u4fee\u6539\u53ef\u80fd\u4f1a\u89e6\u53d1\u65b0\u7684\u6700\u7ec8\u8bc4\u8bba\u671f\u3002"),(0,n.kt)("li",{parentName:"ul"},"RFC \u5728\u516c\u4f17\u8ba8\u8bba\u5df2\u7ecf\u89e3\u51b3\u5e76\u4e14\u8bc4\u8bba\u603b\u7ed3\u4e86\u62d2\u7edd\u7684\u7406\u7531\u4e4b\u540e\u53ef\u80fd\u4f1a\u88ab\u62d2\u7edd\u3002\u7136\u540e\uff0c\u6838\u5fc3\u56e2\u961f\u7684\u4e00\u540d\u6210\u5458\u5e94\u8be5\u5173\u95ed RFC \u7684\u76f8\u5173\u62c9\u53d6\u8bf7\u6c42\u3002"),(0,n.kt)("li",{parentName:"ul"},"RFC \u53ef\u80fd\u4f1a\u5728\u5176\u6700\u7ec8\u8bc4\u8bba\u671f\u7ed3\u675f\u65f6\u88ab\u63a5\u53d7\u3002 \u6838\u5fc3\u56e2\u961f\u6210\u5458\u5c06\u5408\u5e76 RFC \u7684\u76f8\u5173\u62c9\u53d6\u8bf7\u6c42\uff0c\u6b64\u65f6 RFC \u5c06\u53d8\u4e3a\u201c\u5df2\u751f\u6548\u201d\u72b6\u6001\u3002")))),(0,n.kt)("h2",{id:"\u6709\u5173\u6d3b\u52a8-rfc-\u7684\u8be6\u7ec6\u4fe1\u606f"},"\u6709\u5173\u6d3b\u52a8 RFC \u7684\u8be6\u7ec6\u4fe1\u606f"),(0,n.kt)("p",null,"\u4e00\u65e6 RFC \u751f\u6548\uff0c\u4f5c\u8005\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5b83\u5e76\u5c06\u8be5\u529f\u80fd\u4f5c\u4e3a\u62c9\u53d6\u8bf7\u6c42\u63d0\u4ea4\u5230 LCUI \u5b58\u50a8\u5e93\u3002 \u53d8\u4e3a\u201c\u751f\u6548\u201d\u610f\u5473\u7740\u6838\u5fc3\u56e2\u961f\u5df2\u7ecf\u539f\u5219\u4e0a\u540c\u610f\u5e76\u613f\u610f\u5408\u5e76\u5b83\uff0c\u5e76\u4e0d\u610f\u5473\u7740\u8be5\u529f\u80fd\u6700\u7ec8\u4f1a\u88ab\u5408\u5e76\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0c\u7ed9\u5b9a\u7684 RFC \u5df2\u88ab\u63a5\u53d7\u5e76\u5904\u4e8e\u201c\u751f\u6548\u201d\u72b6\u6001\u8fd9\u4e00\u4e8b\u5b9e\u5e76\u4e0d\u610f\u5473\u7740\u5206\u914d\u7ed9\u5176\u5b9e\u73b0\u7684\u4f18\u5148\u7ea7\u662f\u4ec0\u4e48\uff0c\u4e5f\u4e0d\u610f\u5473\u7740\u5f53\u524d\u662f\u5426\u6709\u4eba\u6b63\u5728\u5904\u7406\u5b83\u3002"),(0,n.kt)("p",null,"\u540e\u7eed\u7684 PR \u53ef\u5bf9\u751f\u6548\u7684 RFC \u8fdb\u884c\u4fee\u6539\u3002\u6211\u4eec\u52aa\u529b\u4ee5\u53cd\u6620\u529f\u80fd\u6700\u7ec8\u8bbe\u8ba1\u7684\u65b9\u5f0f\u7f16\u5199\u6bcf\u4e2a RFC\uff1b\u4f46\u662f\u8fd9\u4e2a\u8fc7\u7a0b\u7684\u6027\u8d28\u610f\u5473\u7740\u6211\u4eec\u4e0d\u80fd\u671f\u671b\u6bcf\u4e2a\u5408\u5e76\u7684 RFC \u90fd\u80fd\u5b9e\u9645\u53cd\u6620\u4e0b\u4e00\u4e2a\u4e3b\u8981\u7248\u672c\u53d1\u5e03\u65f6\u7684\u6700\u7ec8\u7ed3\u679c\uff1b\u56e0\u6b64\uff0c\u6211\u4eec\u5c1d\u8bd5\u6309\u8ba1\u5212\u4f7f\u6bcf\u4e2a RFC \u6587\u6863\u4e0e\u8bed\u8a00\u529f\u80fd\u4fdd\u6301\u540c\u6b65\uff0c\u5e76\u901a\u8fc7\u5bf9\u6587\u6863\u7684\u540e\u7eed\u62c9\u53d6\u8bf7\u6c42\u6765\u8ddf\u8e2a\u6b64\u7c7b\u66f4\u6539\u3002"),(0,n.kt)("h2",{id:"\u5b9e\u73b0-rfc"},"\u5b9e\u73b0 RFC"),(0,n.kt)("p",null,"RFC \u7684\u4f5c\u8005\u6ca1\u6709\u4e49\u52a1\u5b9e\u65bd\u5b83\u3002 \u5f53\u7136\uff0c\u6b22\u8fce RFC \u4f5c\u8005\uff08\u50cf\u4efb\u4f55\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u4e00\u6837\uff09\u5728 RFC \u88ab\u63a5\u53d7\u540e\u53d1\u5e03\u5b9e\u73b0\u4ee5\u4f9b\u5ba1\u67e5\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u751f\u6548\u7684 RFC \u5e94\u8be5\u6709\u6307\u5411\u5b9e\u73b0 PR \u7684\u94fe\u63a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002 \u5bf9\u5b9e\u9645\u5b9e\u73b0\u7684\u53cd\u9988\u5e94\u8be5\u5728\u5b9e\u73b0 PR \u800c\u4e0d\u662f\u539f\u6765\u7684 RFC PR \u4e2d\u8fdb\u884c\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u201c\u6d3b\u8dc3\u201dRFC \u7684\u5b9e\u73b0\u611f\u5174\u8da3\uff0c\u4f46\u65e0\u6cd5\u786e\u5b9a\u5176\u4ed6\u4eba\u662f\u5426\u5df2\u7ecf\u5728\u5904\u7406\u5b83\uff0c\u8bf7\u968f\u65f6\u63d0\u95ee\uff08\u4f8b\u5982\uff0c\u901a\u8fc7\u5bf9\u76f8\u5173\u95ee\u9898\u53d1\u8868\u8bc4\u8bba\uff09\u3002"),(0,n.kt)("h2",{id:"\u5ba1\u67e5-rfc"},"\u5ba1\u67e5 RFC"),(0,n.kt)("p",null,"\u6838\u5fc3\u56e2\u961f\u7684\u6210\u5458\u5c06\u5c1d\u8bd5\u5b9a\u671f\u5ba1\u67e5\u4e00\u4e9b\u5df2\u6253\u5f00\u7684 RFC \u62c9\u53d6\u8bf7\u6c42\u3002 \u5982\u679c\u6838\u5fc3\u56e2\u961f\u6210\u5458\u8ba4\u4e3a RFC PR \u5df2\u51c6\u5907\u597d\u63a5\u53d7\u8fdb\u5165\u751f\u6548\u72b6\u6001\uff0c\u4ed6\u4eec\u53ef\u4ee5\u4f7f\u7528 GitHub/Gitee \u7684\u5ba1\u67e5\u529f\u80fd\u6279\u51c6 PR\uff0c\u4ee5\u8868\u793a\u4ed6\u4eec\u6279\u51c6\u4e86 RFC\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("p",null,"LCUI \u7684 RFC \u6d41\u7a0b\u53ca\u6587\u6863\u5185\u5bb9\u53c2\u8003\u81ea\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reactjs/rfcs"},"https://github.com/reactjs/rfcs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vuejs/rfcs"},"https://github.com/vuejs/rfcs"))))}k.isMDXComponent=!0}}]);