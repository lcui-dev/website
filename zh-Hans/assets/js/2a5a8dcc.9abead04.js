"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=o(n),v=i,m=s["".concat(p,".").concat(v)]||s[v]||c[v]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=v;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:i,a[1]=u;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=n(7462),i=(n(7294),n(3905));const l={},a="UI \u670d\u52a1\u5668",u={unversionedId:"rfcs/lib-ui-server",id:"rfcs/lib-ui-server",title:"UI \u670d\u52a1\u5668",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-04-09",source:"@site/docs/rfcs/0010-lib-ui-server.md",sourceDirName:"rfcs",slug:"/rfcs/lib-ui-server",permalink:"/zh-Hans/docs/next/rfcs/lib-ui-server",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/0010-lib-ui-server.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"UI \u6838\u5fc3\u5e93",permalink:"/zh-Hans/docs/next/rfcs/lib-ui"},next:{title:"UI \u56fe\u50cf\u7f13\u5b58\u548c\u5f02\u6b65\u52a0\u8f7d",permalink:"/zh-Hans/docs/next/rfcs/lib-ui-image"}},p={},o=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u547d\u540d",id:"\u547d\u540d",level:3},{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u63a5\u53e3\u8bbe\u8ba1",id:"\u63a5\u53e3\u8bbe\u8ba1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],d={toc:o},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ui-\u670d\u52a1\u5668"},"UI \u670d\u52a1\u5668"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-04-09"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/pull/272"},"#272"))),(0,i.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,i.kt)("p",null,"\u6dfb\u52a0 UI \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b9e\u73b0 UI \u90e8\u4ef6\u4e0e\u7cfb\u7edf\u7a97\u53e3\u7684\u6570\u636e\u540c\u6b65\u3002\u5b83\u57fa\u4e8e UIMutationObserver \u63a5\u53e3\u76d1\u542c\u90e8\u4ef6\u7684\u53d8\u52a8\uff0c\u80fd\u5c06\u90e8\u4ef6\u7684\u56fe\u5f62\u5185\u5bb9\u3001\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u7b49\u6570\u636e\u540c\u6b65\u5230\u4e0e\u4e4b\u7ed1\u5b9a\u7684\u7cfb\u7edf\u7a97\u53e3\u3002"),(0,i.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'\n#include <ui.h>\n#include <platform.h>\n\nvoid example(void)\n{\n    ui_widget_t *w;\n    app_window_t *wnd;\n\n    app_init(L"My Application");\n    ui_init();\n    // \u521d\u59cb\u5316\u670d\u52a1\u5668\n    ui_server_init();\n    // \u521b\u5efa\u4e00\u4e2a\u90e8\u4ef6\n    w = ui_widget_create(NULL);\n    // \u521b\u5efa\u4e00\u4e2a\u7a97\u53e3\n    wnd = app_window_create("My Widget", 0, 0, 0, 0, NULL);\n    // \u8c03\u6574\u90e8\u4ef6\u5c3a\u5bf8\n    ui_widget_resize(800, 600);\n    // \u8fde\u63a5\u90e8\u4ef6\u548c\u7a97\u53e3\n    ui_server_connect(w, wnd);\n    // \u8fd0\u884c\u4e3b\u5faa\u73af\n    app_run();\n    // \u89e3\u9664\u90e8\u4ef6\u4e0e\u7a97\u53e3\u7684\u8fde\u63a5\n    ui_server_disconnect(w, wnd);\n    ui_server_destroy();\n    ui_destroy();\n    return 0;\n}\n')),(0,i.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,i.kt)("p",null,"\u5728 2.x \u7248\u672c\u4e2d\uff0c\u663e\u793a\u63a7\u5236\u5668\u5b9e\u73b0\u4e86 UI \u90e8\u4ef6\u4e0e\u7a97\u53e3\u7684\u7ed1\u5b9a\u3002\u5b83\u4f1a\u6839\u636e\u663e\u793a\u6a21\u5f0f\u81ea\u52a8\u5904\u7406\u6839\u90e8\u4ef6\u548c\u5b50\u90e8\u4ef6\u7684\u7a97\u53e3\u7ed1\u5b9a\u3002\u7136\u800c\uff0c\u7531\u4e8e\u7ed1\u5b9a\u64cd\u4f5c\u63a5\u53e3\u5e76\u672a\u516c\u5f00\uff0c\u4e14\u9ed8\u8ba4\u7ed1\u5b9a\u5bf9\u8c61\u662f\u6839\u90e8\u4ef6\u548c\u5b50\u90e8\u4ef6\uff0c\u6211\u4eec\u65e0\u6cd5\u5c06\u5176\u5b83\u90e8\u4ef6\u4e0e\u7a97\u53e3\u7ed1\u5b9a\uff0c\u5bfc\u81f4\u5176\u7075\u6d3b\u6027\u8f83\u5dee\u3002"),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,i.kt)("h3",{id:"\u547d\u540d"},"\u547d\u540d"),(0,i.kt)("p",null,"\u6a21\u5757\u7684\u5019\u9009\u540d\u79f0\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui-mapper"),"\uff1awidget \u4e0e window \u4e4b\u95f4\u662f\u6620\u5c04\u5173\u7cfb\uff0c\u90a3\u4e48\u7ba1\u7406\u8fd9\u4e9b\u6620\u5c04\u5173\u7cfb\u7684\u529f\u80fd\u6a21\u5757\u5c31\u662f mapper\uff0c\u4f46\u8be5\u540d\u79f0\u4e0d\u8db3\u4ee5\u8054\u60f3\u5230\u5b83\u7684\u4f5c\u7528\uff0c\u5bb9\u6613\u88ab\u7406\u89e3\u4e3a\u5176\u5b83\u529f\u80fd\u6a21\u5757\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui-player"),"\uff1a\u5982\u679c\u5c06\u201cwidget \u5185\u5bb9\u540c\u6b65\u81f3 window \u5185\u201d\u8fd9\u4e00\u8fc7\u7a0b\u79f0\u4e3a\u201c\u64ad\u653e\u201d\u7684\u8bdd\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u8be5\u529f\u80fd\u6a21\u5757\u547d\u540d\u4e3a player\uff0c\u4f46\u8fd9\u540d\u5b57\u66f4\u5bb9\u6613\u8ba9\u5176\u4ed6\u4eba\u7406\u89e3\u4e3a\u5a92\u4f53\u64ad\u653e\u5668\u7ec4\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui-display"),"\uff1a\u539f\u6a21\u5757\u7684\u540d\u79f0\u5c31\u662f display\uff0c\u65e2\u662f\u52a8\u8bcd\u4e5f\u662f\u540d\u8bcd\uff0c\u5728\u65b0\u7684\u547d\u540d\u98ce\u683c\u4e2d\u53ef\u80fd\u4f1a\u4ea7\u751f\u6b67\u4e49\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"ui_display_map"),"\uff0c\u8be5\u7406\u89e3\u4e3a\u201c\u5c06 map \u663e\u793a\u51fa\u6765\u201d\uff0c\u8fd8\u662f\u201c\u8c03\u7528\u663e\u793a\u6a21\u5757\u7684 map \u65b9\u6cd5\u201d\uff1f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui-server"),"\uff1a\u4ece\u547d\u540d\u53ef\u77e5\u8fd9\u4e2a\u6a21\u5757\u662f\u4e3a UI \u63d0\u4f9b\u670d\u52a1\u7684\uff0c\u53ef\u4ee5\u8054\u60f3\u5230 ",(0,i.kt)("a",{parentName:"li",href:"https://www.x.org/wiki/XServer/"},"X Server"),"\u3002")),(0,i.kt)("p",null,"\u7efc\u5408\u8003\u8651\uff0cui-server \u662f\u6700\u4e3a\u5408\u9002\u7684\u3002"),(0,i.kt)("h3",{id:"\u5de5\u4f5c\u539f\u7406"},"\u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"\u5185\u90e8\u7ef4\u62a4\u4e00\u4e2a\u5217\u8868\u7528\u4e8e\u5b58\u50a8\u5404\u4e2a\u90e8\u4ef6\u4e0e\u7a97\u53e3\u7684\u8fde\u63a5\uff0c UI \u90e8\u4ef6\u5230\u7cfb\u7edf\u7a97\u53e3\u7684\u540c\u6b65\u57fa\u4e8e UIMutationObserver \u5b9e\u73b0\uff0c\u800c\u7a97\u53e3\u5230 UI \u90e8\u4ef6\u7684\u540c\u6b65\u5219\u901a\u8fc7\u54cd\u5e94\u7a97\u53e3\u4e8b\u4ef6\u6765\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"\u63a5\u53e3\u8bbe\u8ba1"},"\u63a5\u53e3\u8bbe\u8ba1"),(0,i.kt)("p",null,"\u51fa\u4e8e\u7075\u6d3b\u6027\u4e0a\u7684\u8003\u8651\uff0c\u4e0d\u5728 ui-server \u91cc\u63d0\u4f9b 2.x \u7248\u672c\u4e2d\u7684\u5355\u7a97\u53e3\u6a21\u5f0f\u3001\u5168\u5c4f\u6a21\u5f0f\u548c\u65e0\u7f1d\u6a21\u5f0f\u7684\u5207\u6362\u529f\u80fd\uff0c\u6539\u4e3a\u5728 lcui \u5e94\u7528\u5c42\u63d0\u4f9b\uff0c\u4e5f\u5c31\u662f\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lcui_ui.c")," \u4e2d\u63d0\u4f9b\u3002"),(0,i.kt)("p",null,"ui-server \u63d0\u4f9b\u7684\u63a5\u53e3\u6bd4\u8f83\u5c11\uff0c\u9664\u53bb\u521d\u59cb\u5316\u548c\u9500\u6bc1\u63a5\u53e3\uff0c\u53ef\u5206\u4e3a\u8fd9\u51e0\u7c7b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7ba1\u7406\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"ui_widget_t *ui_server_get_widget(app_window_t *window);\napp_window_t *ui_server_get_window(ui_widget_t *widget);\nint ui_server_disconnect(ui_widget_t *widget, app_window_t *window);\nvoid ui_server_connect(ui_widget_t *widget, app_window_t *window);\n"))),(0,i.kt)("li",{parentName:"ul"},"\u6e32\u67d3\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"size_t ui_server_render(void);\nvoid ui_server_present(void);\n"))),(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\uff1a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void ui_server_set_threads(int threads);\nvoid ui_server_set_paint_flashing_enabled(LCUI_BOOL enabled);\n")))),(0,i.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,i.kt)("p",null,"\u65e0\u3002"),(0,i.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,i.kt)("p",null,"\u65e0\u3002"),(0,i.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u9700\u8981\u5c06 2.x \u7248\u672c\u4e2d\u7684\u663e\u793a\u63a7\u5236\u6a21\u5757\u6539\u4e3a\u57fa\u4e8e ui-server \u5b9e\u73b0\u3002"))}c.isMDXComponent=!0}}]);