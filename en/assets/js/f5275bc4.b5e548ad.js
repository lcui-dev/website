"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5001],{8518:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=t(4848),a=t(8453);const c={},l="\u5207\u6362\u56fe\u7247",o={id:"tutorial/kantu/switch",title:"\u5207\u6362\u56fe\u7247",description:"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4f60\u7684\u5e94\u7528\u8fd8\u53ea\u80fd\u67e5\u770b\u5355\u5f20\u56fe\u7247\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5f15\u5165\u4e4b\u524d\u5199\u7684\u6536\u96c6\u5668\uff0c\u8ba9\u754c\u9762\u80fd\u591f\u5229\u7528\u5df2\u6536\u96c6\u7684\u56fe\u7247\u5217\u8868\u5b9e\u73b0\u56fe\u7247\u5207\u6362\u3002",source:"@site/docs/tutorial/04-kantu/13-switch.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/switch",permalink:"/en/docs/next/tutorial/kantu/switch",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/13-switch.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94\u6eda\u8f6e\u548c\u62d6\u52a8",permalink:"/en/docs/next/tutorial/kantu/draging-and-wheel"},next:{title:"\u53cd\u9988\u56fe\u7247\u52a0\u8f7d\u72b6\u6001",permalink:"/en/docs/next/tutorial/kantu/status"}},r={},s=[];function _(e){const i={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"\u5207\u6362\u56fe\u7247",children:"\u5207\u6362\u56fe\u7247"}),"\n",(0,n.jsx)(i.p,{children:"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4f60\u7684\u5e94\u7528\u8fd8\u53ea\u80fd\u67e5\u770b\u5355\u5f20\u56fe\u7247\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5f15\u5165\u4e4b\u524d\u5199\u7684\u6536\u96c6\u5668\uff0c\u8ba9\u754c\u9762\u80fd\u591f\u5229\u7528\u5df2\u6536\u96c6\u7684\u56fe\u7247\u5217\u8868\u5b9e\u73b0\u56fe\u7247\u5207\u6362\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u9996\u5148\u4fee\u6539\u79c1\u6709\u6570\u636e\u5b9a\u4e49\uff0c\u6dfb\u52a0\u6536\u96c6\u5668\u5bf9\u8c61\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=image-view.c",children:"  typedef struct image_view {\n          float mouse_x, mouse_y;\n          float mouse_offset_x, mouse_offset_y;\n          bool dragging;\n\n          image_view_refs_t refs;\n          image_controller_t controller;\n+         image_collector_t collector;\n  } image_view_t;\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u7136\u540e\u521d\u59cb\u5316\u6536\u96c6\u5668\uff0c\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\uff0c\u7ed9\u5207\u6362\u6309\u94ae\u6dfb\u52a0\u70b9\u51fb\u4e8b\u4ef6\u7ed1\u5b9a\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:'image_collector_init(&view->collector);\nview->collector.callback = image_view_on_load_siblings;\nview->collector.callback_arg = w;\nui_widget_on(view->refs.prev, "click", image_view_on_prev, w);\nui_widget_on(view->refs.next, "click", image_view_on_next, w);\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u6536\u96c6\u5668\u5360\u7528\u7684\u8d44\u6e90\u662f\u9700\u8981\u4e3b\u52a8\u9500\u6bc1\u7684\uff0c\u4f60\u5e94\u8be5\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u9500\u6bc1\u6536\u96c6\u5668\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"image_collector_destroy(&view->collector);\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u4e4b\u540e\u5728\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u91cc\u8c03\u7528\u6536\u96c6\u5668\u7684\u65b9\u6cd5\u83b7\u53d6\u4e0a\u4e00\u5f20/\u4e0b\u4e00\u5f20\u56fe\u7247\u7684\u8def\u5f84\u5e76\u52a0\u8f7d\u5b83\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"void image_view_on_next(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n        image_view_load_file(e->data, image_collector_next(&view->collector));\n}\n\nvoid image_view_on_prev(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n        image_view_load_file(e->data, image_collector_prev(&view->collector));\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u9664\u4e86\u70b9\u51fb\u4e8b\u4ef6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u6309\u952e\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u6dfb\u52a0\u5feb\u6377\u952e\u652f\u6301\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"case KEY_LEFT:\n        file = image_collector_prev(&view->collector);\n        image_view_load_file(w, file);\n        free(file);\n        break;\ncase KEY_RIGHT:\n        file = image_collector_next(&view->collector);\n        image_view_load_file(w, file);\n        free(file);\n        break;\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u6536\u96c6\u5668\u6536\u96c6\u5b8c\u5168\u90e8\u56fe\u7247\u540e\uff0c\u4f60\u9700\u8981\u5728\u56de\u8c03\u51fd\u6570\u91cc\u66f4\u65b0\u754c\u9762\u72b6\u6001\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"void image_view_on_load_siblings(image_collector_t *c, void *arg)\n{\n        image_view_update(arg);\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u66f4\u65b0\u7684\u5185\u5bb9\u4e5f\u5c31\u662f\u6839\u636e\u7ed3\u679c\u663e\u793a/\u9690\u85cf\u5207\u6362\u6309\u94ae\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"if (image_collector_has_prev(&view->collector)) {\n        ui_widget_show(view->refs.prev);\n} else {\n        ui_widget_hide(view->refs.prev);\n}\nif (image_collector_has_next(&view->collector)) {\n        ui_widget_show(view->refs.next);\n} else {\n        ui_widget_hide(view->refs.next);\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["\u6700\u540e\uff0c\u5728 ",(0,n.jsx)(i.code,{children:"image_view_load_file()"})," \u51fd\u6570\u4e2d\u8c03\u7528\u6536\u96c6\u5668\u7684\u6587\u4ef6\u52a0\u8f7d\u51fd\u6570\u4ee5\u8ba9\u6536\u96c6\u5668\u5f00\u59cb\u5de5\u4f5c\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"image_collector_load_file(&view->collector, file);\n"})})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>o});var n=t(6540);const a={},c=n.createContext(a);function l(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);