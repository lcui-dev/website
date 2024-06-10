"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3591],{6343:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>_,metadata:()=>a,toc:()=>l});var n=t(4848),o=t(8453);const _={},s="\u54cd\u5e94\u6eda\u8f6e\u548c\u62d6\u52a8",a={id:"tutorial/kantu/draging-and-wheel",title:"\u54cd\u5e94\u6eda\u8f6e\u548c\u62d6\u52a8",description:"\u62d6\u52a8\u56fe\u7247",source:"@site/docs/tutorial/04-kantu/12-draging-and-wheel.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/draging-and-wheel",permalink:"/docs/next/tutorial/kantu/draging-and-wheel",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/12-draging-and-wheel.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u5177\u680f\u4ea4\u4e92",permalink:"/docs/next/tutorial/kantu/toolbar"},next:{title:"\u5207\u6362\u56fe\u7247",permalink:"/docs/next/tutorial/kantu/switch"}},r={},l=[{value:"\u62d6\u52a8\u56fe\u7247",id:"\u62d6\u52a8\u56fe\u7247",level:2},{value:"\u6eda\u8f6e\u7f29\u653e",id:"\u6eda\u8f6e\u7f29\u653e",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"\u54cd\u5e94\u6eda\u8f6e\u548c\u62d6\u52a8",children:"\u54cd\u5e94\u6eda\u8f6e\u548c\u62d6\u52a8"}),"\n",(0,n.jsx)(i.h2,{id:"\u62d6\u52a8\u56fe\u7247",children:"\u62d6\u52a8\u56fe\u7247"}),"\n",(0,n.jsx)(i.p,{children:"\u5f53\u7528\u6237\u6309\u4f4f\u9f20\u6807\u5de6\u952e\u5e76\u79fb\u52a8\u65f6\uff0c\u56fe\u7247\u5e94\u8be5\u540c\u6b65\u79fb\u52a8\uff0c\u76f4\u5230\u7528\u6237\u677e\u5f00\u6309\u952e\u4e3a\u6b62\u3002\u9f20\u6807\u7684\u6309\u952e\u6309\u4e0b\u3001\u79fb\u52a8\u3001\u677e\u5f00\u6309\u952e\u89e6\u53d1\u7684\u4e8b\u4ef6\u5206\u522b\u662f mousedown\u3001 mouseup\u3001mousemove\uff0c\u56fe\u7247\u7684\u79fb\u52a8\u8ddd\u79bb\u7b49\u4e8e\u5f53\u524d\u9f20\u6807\u6307\u9488\u4f4d\u7f6e\u4e0e\u6309\u4e0b\u5de6\u952e\u65f6\u7684\u4f4d\u7f6e\u7684\u8ddd\u79bb\u3002\u7531\u6b64\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u5927\u81f4\u7684\u5b9e\u73b0\u601d\u8def\uff1a"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u5728 mousedown \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u8bb0\u5f55\u5f53\u524d\u9f20\u6807\u6307\u9488\u76f8\u5bf9\u4e8e\u56fe\u7247\u7684\u4f4d\u7f6e\uff0c\u5e76\u8bbe\u7f6e\u62d6\u52a8\u72b6\u6001"}),"\n",(0,n.jsx)(i.li,{children:"\u5728 mousemove \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u66f4\u65b0\u56fe\u7247\u4f4d\u7f6e"}),"\n",(0,n.jsx)(i.li,{children:"\u5728 mouseup \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u53d6\u6d88\u62d6\u52a8\u72b6\u6001"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["\u8fd9\u4e9b\u6570\u636e\u5c5e\u4e8e\u7ec4\u4ef6\u7684\u79c1\u6709\u6570\u636e\uff0c\u4f60\u5e94\u8be5\u66f4\u6539 ",(0,n.jsx)(i.code,{children:"image_view_t"})," \u7c7b\u578b\u5b9a\u4e49\uff1a"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=image-view.c",children:"  typedef struct image_view {\n+         float mouse_offset_x, mouse_offset_y;\n+         bool dragging;\n\n          image_view_refs_t refs;\n          image_controller_t controller;\n} image_view_t;\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u7136\u540e\uff0c\u6dfb\u52a0\u4e8b\u4ef6\u7ed1\u5b9a\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:'ui_widget_on(view->refs.content, "mouseup", image_view_on_mouseup, w);\nui_widget_on(view->refs.content, "mousedown", image_view_on_mousedown, w);\nui_widget_on(view->refs.content, "mousemove", image_view_on_mousemove, w);\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u4ee5\u53ca\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:"void image_view_on_mousedown(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        float offset_x, offset_y;\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n\n        ui_widget_get_offset(w, NULL, &offset_x, &offset_y);\n        ui_widget_set_mouse_capture(w);\n        view->mouse_offset_x = e->mouse.x - offset_x - view->controller.x;\n        view->mouse_offset_y = e->mouse.y - offset_y - view->controller.y;\n        view->dragging = true;\n}\n\nvoid image_view_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        float offset_x, offset_y;\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n\n        ui_widget_get_offset(w, NULL, &offset_x, &offset_y);\n        if (view->dragging) {\n                image_controller_set_position(\n                    &view->controller, e->mouse.x - offset_x - view->mouse_offset_x,\n                    e->mouse.y - offset_y - view->mouse_offset_y);\n                image_view_update(e->data);\n        }\n}\n\nvoid image_view_on_mouseup(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n        view->dragging = false;\n        ui_widget_release_mouse_capture(w);\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u56fe\u7247\u968f\u9f20\u6807\u6307\u9488\u79fb\u52a8\uff0c\u6307\u9488\u59cb\u7ec8\u6307\u5411\u56fe\u7247\u4e2d\u7684\u540c\u4e00\u4f4d\u7f6e\uff0c\u8fd9\u8868\u660e\u9f20\u6807\u6307\u9488\u76f8\u5bf9\u4e8e\u56fe\u7247\u7684\u4f4d\u7f6e\u662f\u4e0d\u53d8\u7684\uff0c\u90a3\u4e48\u6211\u4eec\u53ea\u9700\u8981\u5728\u62d6\u52a8\u5f00\u59cb\u65f6\u8ba1\u7b97\u5e76\u5b58\u50a8\u8fd9\u4e2a\u76f8\u5bf9\u4f4d\u7f6e\uff0c\u7136\u540e\u5728\u6307\u9488\u79fb\u52a8\u8fc7\u7a0b\u4e2d\u5c06\u6307\u9488\u4f4d\u7f6e\u51cf\u53bb\u8be5\u76f8\u5bf9\u4f4d\u7f6e\u5c31\u80fd\u5f97\u51fa\u79fb\u52a8\u540e\u7684\u56fe\u7247\u4f4d\u7f6e\u3002"}),"\n",(0,n.jsxs)(i.p,{children:["\u4e8b\u4ef6\u7ed3\u6784\u4f53\u4e2d\u7684\u9f20\u6807\u6307\u9488\u4f4d\u7f6e\u662f\u76f8\u5bf9\u4e8e\u6839\u7ec4\u4ef6\u7684\uff0c\u4e3a\u4e86\u8ba1\u7b97\u51fa\u5b83\u76f8\u5bf9\u4e8e\u56fe\u7247\u7684\u4f4d\u7f6e\uff0c\u4f60\u9700\u8981\u5148\u8c03\u7528 ",(0,n.jsx)(i.code,{children:"ui_widget_get_offset()"})," \u83b7\u53d6\u7ec4\u4ef6\u76f8\u5bf9\u4e8e\u6839\u7ec4\u4ef6\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u5c06\u9f20\u6807\u6307\u9488\u4f4d\u7f6e\u51cf\u53bb\u8be5\u4f4d\u7f6e\uff0c\u518d\u51cf\u53bb\u56fe\u7247\u4f4d\u7f6e\u3002"]}),"\n",(0,n.jsxs)(i.p,{children:["\u4e3a\u4e86\u907f\u514d\u5728\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u56e0\u9f20\u6807\u79fb\u51fa\u7a97\u53e3\u800c\u5931\u53bb\u4e8b\u4ef6\u54cd\u5e94\uff0c\u4f60\u5e94\u8be5\u5728\u5f00\u59cb\u62d6\u52a8\u65f6\u8c03\u7528 ",(0,n.jsx)(i.code,{children:"ui_widget_set_mouse_capture()"})," \u51fd\u6570\u72ec\u5360\u9f20\u6807\u4e8b\u4ef6\uff0c\u76f4\u5230\u62d6\u52a8\u7ed3\u675f\u65f6\u8c03\u7528 ",(0,n.jsx)(i.code,{children:"ui_widget_release_mouse_capture()"})," \u89e3\u9664\u72ec\u5360\u3002"]}),"\n",(0,n.jsx)(i.h2,{id:"\u6eda\u8f6e\u7f29\u653e",children:"\u6eda\u8f6e\u7f29\u653e"}),"\n",(0,n.jsxs)(i.p,{children:["\u9f20\u6807\u6eda\u8f6e\u4e8b\u4ef6\u662f mousewheel\uff0c\u7ed3\u5408\u524d\u51e0\u7ae0\u7684\u7ec3\u4e60\uff0c\u518d\u67e5\u770b ",(0,n.jsx)(i.code,{children:"ui_event_t"})," \u7684\u5b9a\u4e49\uff0c\u76f8\u4fe1\u4f60\u4f1a\u5f88\u5bb9\u6613\u5730\u5199\u51fa\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff1a"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"image-view.c",children:"void image_view_on_mousewheel(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n\n        if (e->wheel.delta_y > 0) {\n                image_controller_zoom_in(&view->controller);\n        } else {\n                image_controller_zoom_out(&view->controller);\n        }\n        image_view_update(e->data);\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u5b9e\u9645\u4f53\u9a8c\u540e\u4f60\u4f1a\u53d1\u73b0\u56fe\u7247\u662f\u57fa\u4e8e\u53ef\u89c6\u533a\u57df\u7684\u4e2d\u5fc3\u8fdb\u884c\u7f29\u653e\u7684\uff0c\u800c\u4e0d\u662f\u9f20\u6807\u6307\u9488\u6240\u5904\u4f4d\u7f6e\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u9700\u8981\u5728\u7f29\u653e\u524d\u8ba1\u7b97\u51fa\u9f20\u6807\u6307\u9488\u76f8\u5bf9\u4e8e\u539f\u59cb\u5c3a\u5bf8\u56fe\u7247\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u6309\u6bd4\u4f8b\u7f29\u653e\u8be5\u4f4d\u7f6e\uff0c\u518d\u5728\u7f29\u653e\u540e\u5c06\u5176\u8bbe\u7f6e\u4e3a\u56fe\u7247\u4f4d\u7f6e\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u7531\u4e8e mousewheel \u4e8b\u4ef6\u7ed3\u6784\u4f53\u4e2d\u4e0d\u5305\u542b\u9f20\u6807\u6307\u9488\u4f4d\u7f6e\uff0c\u4f60\u9700\u8981\u5355\u72ec\u7f16\u5199\u4ee3\u7801\u53bb\u8bb0\u5f55\u5b83\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=image-view.c",children:"  typedef struct image_view {\n+         float mouse_x, mouse_y;\n          float mouse_offset_x, mouse_offset_y;\n          bool dragging;\n\n          image_view_refs_t refs;\n          image_controller_t controller;\n} image_view_t;\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=image-view.c",children:"  void image_view_on_mousemove(ui_widget_t *w, ui_event_t *e, void *arg)\n  {\n          float offset_x, offset_y;\n          image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n\n          ui_widget_get_offset(w, NULL, &offset_x, &offset_y);\n+         view->mouse_x = e->mouse.x - offset_x;\n+         view->mouse_y = e->mouse.y - offset_y;\n          if (view->dragging) {\n                  image_controller_set_position(\n                      &view->controller, e->mouse.x - offset_x - view->mouse_offset_x,\n                      e->mouse.y - offset_y - view->mouse_offset_y);\n                  image_view_update(e->data);\n          }\n  }\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u4e4b\u540e\u5c31\u662f\u8865\u5145\u56fe\u7247\u4f4d\u7f6e\u7684\u8ba1\u7b97\u548c\u8bbe\u7f6e\u4ee3\u7801\u4e86\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=image-view.c",children:"  void image_view_on_mousewheel(ui_widget_t *w, ui_event_t *e, void *arg)\n  {\n          image_view_t *view = ui_widget_get_data(e->data, image_view_proto);\n+         float scale = view->controller.scale;\n+         float center_x = (-view->controller.x + view->mouse_x) / scale;\n+         float center_y = (-view->controller.y + view->mouse_y) / scale;\n\n          if (e->wheel.delta_y > 0) {\n                  image_controller_zoom_in(&view->controller);\n          } else {\n                  image_controller_zoom_out(&view->controller);\n          }\n+         image_controller_set_position(\n+             &view->controller,\n+             -(center_x * view->controller.scale - view->mouse_x),\n+             -(center_y * view->controller.scale - view->mouse_y));\n          image_view_update(e->data);\n}\n"})})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},_=n.createContext(o);function s(e){const i=n.useContext(_);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(_.Provider,{value:i},e.children)}}}]);