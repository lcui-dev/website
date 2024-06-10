"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1848],{8407:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=i(4848),r=i(8453);const a={},o="\u5b9a\u65f6\u91cd\u7ed8",c={id:"tutorial/render-fabric/ui-animation",title:"\u5b9a\u65f6\u91cd\u7ed8",description:"JS \u6e90\u7801\u4e2d\u7684 update() \u51fd\u6570\u901a\u8fc7\u8c03\u7528 window.requestAnimationFrame() \u6765\u8ba9 update() \u80fd\u591f\u5728\u6bcf\u6b21\u52a8\u753b\u5e27\u88ab\u8c03\u7528\uff0c\u867d\u7136 LCUI \u4e2d\u5e76\u6ca1\u6709\u8fd9\u79cd\u51fd\u6570\uff0c\u4f46\u53ef\u4ee5\u7528\u5b9a\u65f6\u5668\u5b9e\u73b0\u7c7b\u4f3c\u7684\u6548\u679c\u3002",source:"@site/docs/tutorial/03-render-fabric/11-ui-animation.md",sourceDirName:"tutorial/03-render-fabric",slug:"/tutorial/render-fabric/ui-animation",permalink:"/docs/next/tutorial/render-fabric/ui-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/03-render-fabric/11-ui-animation.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u4e8b\u4ef6\u54cd\u5e94",permalink:"/docs/next/tutorial/render-fabric/ui-events"},next:{title:"\u4f7f\u7528 cairo \u7ed8\u5236\u56fe\u5f62",permalink:"/docs/next/tutorial/render-fabric/cairo-rendering"}},d={},s=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u5b9a\u65f6\u91cd\u7ed8",children:"\u5b9a\u65f6\u91cd\u7ed8"}),"\n",(0,n.jsxs)(t.p,{children:["JS \u6e90\u7801\u4e2d\u7684 ",(0,n.jsx)(t.code,{children:"update()"})," \u51fd\u6570\u901a\u8fc7\u8c03\u7528 ",(0,n.jsx)(t.code,{children:"window.requestAnimationFrame()"})," \u6765\u8ba9 ",(0,n.jsx)(t.code,{children:"update()"})," \u80fd\u591f\u5728\u6bcf\u6b21\u52a8\u753b\u5e27\u88ab\u8c03\u7528\uff0c\u867d\u7136 LCUI \u4e2d\u5e76\u6ca1\u6709\u8fd9\u79cd\u51fd\u6570\uff0c\u4f46\u53ef\u4ee5\u7528\u5b9a\u65f6\u5668\u5b9e\u73b0\u7c7b\u4f3c\u7684\u6548\u679c\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u9996\u5148\u7ed9\u90e8\u4ef6\u5b9a\u4e49\u79c1\u6709\u6570\u636e\u7684\u7ed3\u6784\uff0c\u91cc\u9762\u7684 timer \u6210\u5458\u7528\u4e8e\u5b58\u653e\u5b9a\u65f6\u5668\u7684\u7f16\u53f7\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"typedef struct ui_fabric_t {\n        int timer;\n} ui_fabric_t;\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u7136\u540e\u6dfb\u52a0\u5b9a\u65f6\u5668\u7684\u521b\u5efa\u548c\u9500\u6bc1\u4ee3\u7801\uff0c\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",metastring:"title=src/main.c",children:"void ui_fabric_on_frame(ui_widget_t *w)\n{\n\n}\n\nvoid ui_fabric_on_init(ui_widget_t *w)\n{\n        ui_fabric_t *data;\n        ui_fabric_proto->proto->init(w);\n        data = ui_widget_add_data(w, ui_fabric_proto, sizeof(ui_fabric_t));\n        data->timer = lcui_set_interval(LCUI_MAX_FRAME_MSEC,\n                                        (timer_callback)ui_fabric_on_frame, w);\n}\n\nvoid ui_fabric_on_destroy(ui_widget_t *w)\n{\n        ui_fabric_t *data;\n        data = ui_widget_get_data(w, ui_fabric_proto);\n        lcui_destroy_timer(data->timer);\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8fd9\u6837\uff0c",(0,n.jsx)(t.code,{children:"ui_fabric_on_frame()"})," \u51fd\u6570\u5c31\u80fd\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u88ab\u8c03\u7528\u3002"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(6540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);