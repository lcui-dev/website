"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7562],{5707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(4848),a=n(8453);const r={},c="\u66f4\u65b0\u7a97\u53e3\u6807\u9898",s={id:"tutorial/kantu/window-title",title:"\u66f4\u65b0\u7a97\u53e3\u6807\u9898",description:"\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u5c06\u7a97\u53e3\u6807\u9898\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u540d\u3002",source:"@site/docs/tutorial/04-kantu/15-window-title.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/window-title",permalink:"/en/docs/next/tutorial/kantu/window-title",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/15-window-title.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53cd\u9988\u56fe\u7247\u52a0\u8f7d\u72b6\u6001",permalink:"/en/docs/next/tutorial/kantu/status"},next:{title:"\u54cd\u5e94\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316",permalink:"/en/docs/next/tutorial/kantu/mutation-observer"}},o={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u66f4\u65b0\u7a97\u53e3\u6807\u9898",children:"\u66f4\u65b0\u7a97\u53e3\u6807\u9898"}),"\n",(0,i.jsx)(t.p,{children:"\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u5c06\u7a97\u53e3\u6807\u9898\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u540d\u3002"}),"\n",(0,i.jsx)(t.p,{children:"LCUI \u7684\u9ed8\u8ba4\u663e\u793a\u6a21\u5f0f\u662f\u5355\u7a97\u53e3\uff0c\u8be5\u7a97\u53e3\u4e0e\u6839\u7ea7\u7ec4\u4ef6\u7ed1\u5b9a\uff0c\u7ec4\u4ef6\u7684\u5bbd\u9ad8\u3001\u6807\u9898\u5c5e\u6027\u7684\u53d8\u52a8\u90fd\u4f1a\u540c\u6b65\u5230\u7a97\u53e3\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4fee\u6539\u6839\u7ec4\u4ef6\u7684 title \u5c5e\u6027\u6765\u8bbe\u7f6e\u7a97\u53e3\u6807\u9898\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u7a97\u53e3\u6807\u9898\u663e\u793a\u6587\u4ef6\u540d\u548c\u56fe\u7247\u5c3a\u5bf8\uff0c\u4e3a\u4e86\u907f\u514d\u56fe\u7247\u5c3a\u5bf8\u56e0\u6587\u4ef6\u540d\u8fc7\u957f\u800c\u88ab\u6324\u51fa\u7a97\u53e3\u6807\u9898\u53ef\u89c1\u533a\u57df\uff0c\u4f60\u5e94\u8be5\u9650\u5236\u6587\u4ef6\u540d\u7684\u6700\u5927\u957f\u5ea6\uff0c\u8fc7\u957f\u65f6\u622a\u65ad\u5b83\u5e76\u5728\u672b\u5c3e\u8ffd\u52a0\u7701\u7565\u53f7 ",(0,i.jsx)(t.code,{children:"..."}),"\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ui_image_t"})," \u5bf9\u8c61\u4e2d\u7684 path \u6210\u5458\u5b58\u50a8\u4e86\u56fe\u7247\u6587\u4ef6\u8def\u5f84\uff0c\u4f46\u5b83\u662f char \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\uff0c\u5176\u5185\u5bb9\u6309\u672c\u5730\u7f16\u7801\u65b9\u5f0f\u7f16\u7801\uff0c\u975e\u82f1\u6587\u5b57\u7b26\u4f1a\u5360\u7528\u591a\u4e2a\u5b57\u8282\uff0c\u76f4\u63a5\u5bf9 char \u7c7b\u578b\u5b57\u7b26\u4e32\u8fdb\u884c\u622a\u65ad\u7684\u8bdd\u5bb9\u6613\u7834\u574f\u7f16\u7801\u5e76\u51fa\u73b0\u4e71\u7801\u7684\u95ee\u9898\uff0c\u56e0\u6b64\uff0c\u4f60\u5e94\u8be5\u5c06\u6587\u4ef6\u540d\u89e3\u7801\u6210\u4e00\u4e2a\u4e2a\u4e0e\u5b57\u7b26\u5bf9\u5e94\u7684\u7801\u70b9\uff08Code Point\uff09\uff0c\u7136\u540e\u518d\u5904\u7406\u5b83\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u89e3\u7801\u64cd\u4f5c\u53ef\u4ee5\u8c03\u7528 ",(0,i.jsx)(t.code,{children:"mbstowcs()"})," \u51fd\u6570\u5b9e\u73b0\u3002\u5148\u5b9a\u4e49 wchar_t \u7c7b\u578b\u6570\u7ec4\u7528\u4e8e\u5b58\u653e\u89e3\u7801\u540e\u7684\u5b57\u7b26\u4e32\uff0c\u6700\u5927\u957f\u5ea6\u8bbe\u7f6e\u4e3a 64\uff0c\u7136\u540e\u5224\u65ad\u89e3\u7801\u540e\u7684\u5b9e\u9645\u957f\u5ea6\uff0c\u518d\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:"title=image-view.c",children:"wchar_t truncated_name[64];\n\nlen = mbstowcs(truncated_name, name, 64);\nif (len > 60) {\n        truncated_name[60] = '.';\n        truncated_name[61] = '.';\n        truncated_name[62] = '.';\n        truncated_name[63] = 0;\n} else {\n        truncated_name[len] = 0;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ui_image_t"})," \u5bf9\u8c61\u4e2d\u6709\u56fe\u7247\u5c3a\u5bf8\u6570\u636e\uff0c\u5b83\u4ec5\u5728\u56fe\u7247\u6b63\u786e\u52a0\u8f7d\u5b8c\u6210\u540e\u6709\u6548\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 ",(0,i.jsx)(t.code,{children:"ui_image_valid()"})," \u51fd\u6570\u68c0\u6d4b\u5b83\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",metastring:"title=image-view.c",children:'if (ui_image_valid(image)) {\n        swprintf(title, 80, L"%ls (%ux%u)", truncated_name,\n                  image->data.width, image->data.height);\n        title[79] = 0;\n} else {\n        wcscpy(title, truncated_name);\n}\nui_widget_set_title(ui_root(), title);\n'})}),"\n",(0,i.jsxs)(t.p,{children:["\u56fe\u7247\u5c3a\u5bf8\u8981\u7b49\u5230\u56fe\u7247\u52a0\u8f7d\u5b8c\u540e\u624d\u80fd\u83b7\u53d6\uff0c\u800c\u8fd9\u65f6 ",(0,i.jsx)(t.code,{children:"image_view_update()"})," \u4e5f\u4f1a\u88ab\u8c03\u7528\uff0c\u56e0\u6b64\uff0c\u4f60\u5e94\u8be5\u5728 ",(0,i.jsx)(t.code,{children:"image_view_update()"})," \u51fd\u6570\u91cc\u6dfb\u52a0\u7a97\u53e3\u6807\u9898\u66f4\u65b0\u4ee3\u7801\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(6540);const a={},r=i.createContext(a);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);