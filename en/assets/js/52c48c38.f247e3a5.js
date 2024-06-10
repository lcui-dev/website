"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7185],{9671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>_,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=t(4848),o=t(8453);const r={},s="\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94",c={id:"tutorial/render-fabric/ui-events",title:"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94",description:"\u6211\u4eec\u53ef\u4ee5\u5728 JS \u6e90\u7801\u672b\u5c3e\u5904\u770b\u5230\u4e8b\u4ef6\u7ed1\u5b9a\u4ee3\u7801\uff1a",source:"@site/docs/tutorial/03-render-fabric/10-ui-events.md",sourceDirName:"tutorial/03-render-fabric",slug:"/tutorial/render-fabric/ui-events",permalink:"/en/docs/next/tutorial/render-fabric/ui-events",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/03-render-fabric/10-ui-events.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u6837\u5f0f",permalink:"/en/docs/next/tutorial/render-fabric/ui-style"},next:{title:"\u5b9a\u65f6\u91cd\u7ed8",permalink:"/en/docs/next/tutorial/render-fabric/ui-animation"}},d={},u=[];function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94",children:"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728 JS \u6e90\u7801\u672b\u5c3e\u5904\u770b\u5230\u4e8b\u4ef6\u7ed1\u5b9a\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'///---EVENTS---///\n\n//scaling\nwindow.addEventListener(\'resize\', scaleToWindow);\n\n//interaction\ndocument.addEventListener("mousedown", grabFabric);\ndocument.addEventListener("mousemove", moveFabric);\ndocument.addEventListener("mouseup", dropFabric);\n\ndocument.addEventListener("touchstart", grabFabric);\ndocument.addEventListener("touchmove", moveFabric);\ndocument.addEventListener("touchend", dropFabric);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u5757\u4ee3\u7801\u6dfb\u52a0\u4e86\u9f20\u6807\u4e8b\u4ef6\u548c\u89e6\u63a7\u4e8b\u4ef6\u7684\u5904\u7406\u5668\uff0c\u5c3d\u7ba1 LCUI \u652f\u6301\u5904\u7406\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u4f46\u5176\u4e2d\u7684\u89e6\u63a7\u4e8b\u4ef6\u7684\u6570\u636e\u7ed3\u6784\u548c\u4f7f\u7528\u65b9\u5f0f\u5e76\u4e0d\u76f8\u540c\u3002\u4e3a\u4e86\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u6211\u4eec\u4ec5\u7ed1\u5b9a\u9f20\u6807\u4e8b\u4ef6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5728\u90e8\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570 ",(0,i.jsx)(n.code,{children:"ui_fabric_on_init()"})," \u4e2d\u6dfb\u52a0\u4e8b\u4ef6\u7ed1\u5b9a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'ui_widget_on(w, "mousedown", ui_fabric_on_mousedown, NULL);\nui_widget_on(w, "mousemove", ui_fabric_on_mousemove, NULL);\nui_widget_on(w, "mouseup", ui_fabric_on_mouseup, NULL);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:"title=src/main.c",children:"static void ui_fabric_on_mousedown(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        float x, y;\n\n        ui_widget_get_offset(w, NULL, &x, &y);\n        Fabric_grab(e->mouse.x - x, e->mouse.y - y);\n        ui_widget_set_mouse_capture(w);\n}\n\nstatic void ui_fabric_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        float x, y;\n\n        ui_widget_get_offset(w, NULL, &x, &y);\n        Fabric_move(e->mouse.x - x, e->mouse.y - y);\n}\n\nstatic void ui_fabric_on_mouseup(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        Fabric_drop();\n        ui_widget_release_mouse_capture(w);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0e JS \u6e90\u7801\u7c7b\u4f3c\uff0cmousedown \u548c mousemove \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u90fd\u4f1a\u8f6c\u6362\u9f20\u6807\u6307\u9488\u5750\u6807\uff0c\u4e5f\u5c31\u662f\u4ece\u76f8\u5bf9\u4e8e\u6839\u90e8\u4ef6\u8f6c\u6362\u4e3a\u76f8\u5bf9\u4e8e\u5e03\u6599\u533a\u57df\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8f6c\u6362\u65b9\u6cd5\u662f\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"ui_widget_get_offset()"})," \u83b7\u53d6\u90e8\u4ef6\u76f8\u5bf9\u4e8e\u6839\u90e8\u4ef6\u7684\u5750\u6807\uff0c\u7136\u540e\u7528\u9f20\u6807\u5750\u6807\u51cf\u53bb\u8be5\u5750\u6807\u5373\u53ef\u5f97\u5230\u76f8\u5bf9\u5750\u6807\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u9f20\u6807\u79fb\u51fa\u7a97\u53e3\u540e\u5931\u53bb mousemove \u548c mouseup \u4e8b\u4ef6\u54cd\u5e94\uff0c\u6211\u4eec\u5728 mousedown \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u8c03\u7528\u4e86 ",(0,i.jsx)(n.code,{children:"ui_widget_set_mouse_capture()"})," \u6765\u72ec\u5360\u9f20\u6807\u4e8b\u4ef6\u3002\u5728\u9f20\u6807\u6309\u952e\u91ca\u653e\u540e\uff0c\u6211\u4eec\u518d\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"ui_widget_release_mouse_capture()"})," \u6765\u53d6\u6d88\u72ec\u5360\u3002"]})]})}function _(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);