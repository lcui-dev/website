"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1643],{2724:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=n(4848),r=n(8453);const s={},a="\u6784\u5efa\u754c\u9762",c={id:"tutorial/kantu/ui-build",title:"\u6784\u5efa\u754c\u9762",description:"\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u7f16\u8bd1 TSX \u4ee3\u7801\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u6784\u5efa\u754c\u9762\u3002",source:"@site/docs/tutorial/04-kantu/09-ui-build.md",sourceDirName:"tutorial/04-kantu",slug:"/tutorial/kantu/ui-build",permalink:"/docs/next/tutorial/kantu/ui-build",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/04-kantu/09-ui-build.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u754c\u9762\u5e03\u5c40",permalink:"/docs/next/tutorial/kantu/ui-layout"},next:{title:"\u663e\u793a\u56fe\u7247",permalink:"/docs/next/tutorial/kantu/show-image"}},d={},o=[{value:"\u7f16\u8bd1 TSX",id:"\u7f16\u8bd1-tsx",level:2},{value:"\u8865\u5168\u7ec4\u4ef6\u5b9e\u73b0",id:"\u8865\u5168\u7ec4\u4ef6\u5b9e\u73b0",level:2},{value:"\u4f7f\u7528\u7ec4\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"\u6784\u5efa\u754c\u9762",children:"\u6784\u5efa\u754c\u9762"}),"\n",(0,t.jsx)(i.p,{children:"\u8ba9\u6211\u4eec\u5b66\u4e60\u5982\u4f55\u7f16\u8bd1 TSX \u4ee3\u7801\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4e3a\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u6784\u5efa\u754c\u9762\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"\u7f16\u8bd1-tsx",children:"\u7f16\u8bd1 TSX"}),"\n",(0,t.jsx)(i.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8ba9 lcui-cli \u7f16\u8bd1 src \u76ee\u5f55\u5185\u7684\u6240\u6709\u6587\u4ef6\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-terminal",children:"lcui compile src\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u8fd0\u884c\u5b8c\u540e\u4f1a\u4ea7\u751f ",(0,t.jsx)(i.code,{children:".tsx.h"})," \u540e\u7f00\u540d\u7684\u6587\u4ef6\uff0c\u67e5\u770b\u8fd9\u4e9b\u6587\u4ef6\u7684\u5185\u5bb9\u53ef\u77e5\u5b83\u5305\u542b\u4e86\u7ec4\u4ef6\u7684\u6784\u5efa\u548c\u8d44\u6e90\u52a0\u8f7d\u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u8865\u5168\u7ec4\u4ef6\u5b9e\u73b0",children:"\u8865\u5168\u7ec4\u4ef6\u5b9e\u73b0"}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u4eec\u9700\u8981\u7f16\u5199\u4ee3\u7801\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\u624d\u80fd\u8865\u5168\u7ec4\u4ef6\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u8fd9\u4e9b\u4ee3\u7801\u53ef\u5199\u5728\u56fe\u7247\u67e5\u770b\u754c\u9762\u7684\u6e90\u6587\u4ef6\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",metastring:"title=image-view.c",children:'#include "image-view.tsx.h"\n\ntypedef struct image_view {\n        image_view_refs_t refs;\n} image_view_t;\n\nvoid image_view_init(ui_widget_t *w)\n{\n        image_view_t *view;\n\n        view = ui_widget_add_data(w, image_view_proto, sizeof(image_view_t));\n        image_view_load_template(w, &view->refs);\n}\n\nvoid image_view_destroy(ui_widget_t *w)\n{\n}\n\nvoid ui_register_image_view(void)\n{\n        image_view_load_resources();\n        image_view_init_prototype();\n        image_view_proto->init = image_view_init;\n        image_view_proto->destroy = image_view_destroy;\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u4eec\u5b9a\u4e49\u4e86\u7ec4\u4ef6\u7684\u79c1\u6709\u6570\u636e\u7c7b\u578b\u3001\u521d\u59cb\u5316\u51fd\u6570\u3001\u9500\u6bc1\u51fd\u6570\u548c\u6ce8\u518c\u51fd\u6570\u3002"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"image_view_t"})," \u662f\u7ec4\u4ef6\u7684\u79c1\u6709\u6570\u636e\u7c7b\u578b\uff0c\u76ee\u524d\u8fd8\u53ea\u6709\u4e00\u4e2a refs \u6210\u5458\uff0c\u5b83\u7684\u7c7b\u578b\u662f ",(0,t.jsx)(i.code,{children:"image_view_refs_t"}),"\uff0c\u5305\u542b tsx \u4ee3\u7801\u4e2d\u5404\u4e2a\u5143\u7d20\u7684 ",(0,t.jsx)(i.code,{children:"$ref"})," \u5c5e\u6027\u6240\u5f15\u7528\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u5728\u521d\u59cb\u5316\u51fd\u6570\u4e2d\uff0c\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u4e86\u7c7b\u578b\u4e3a ",(0,t.jsx)(i.code,{children:"image_view_t"})," \u7684\u79c1\u6709\u6570\u636e\uff0c\u7136\u540e\u8c03\u7528 tsx \u4e2d\u7684 ",(0,t.jsx)(i.code,{children:"image_view_load_template()"})," \u51fd\u6570\u6765\u6784\u5efa\u7ec4\u4ef6\u7684\u5185\u5bb9\u3002\u8be5\u51fd\u6570\u4f1a\u4fee\u6539\u4f20\u5165\u7684 refs \u53c2\u6570\uff0c\u5c06\u5176\u4e2d\u7684\u5404\u4e2a\u7ec4\u4ef6\u6307\u9488\u6307\u5411\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u6ce8\u518c\u51fd\u6570\u8d1f\u8d23\u8d44\u6e90\u52a0\u8f7d\u548c\u7ec4\u4ef6\u539f\u578b\u521d\u59cb\u5316\uff0c",(0,t.jsx)(i.code,{children:"image_view_proto"})," \u6307\u5411\u7ec4\u4ef6\u539f\u578b\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u4e2d\u7684 init \u548c destroy \u51fd\u6570\u6307\u9488\u6307\u5411\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u548c\u9500\u6bc1\u51fd\u6570\uff0c\u4ee5\u8ba9 LCUI \u5728\u521b\u5efa\u548c\u9500\u6bc1\u7ec4\u4ef6\u65f6\u8c03\u7528\u5b83\u4eec\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"\u4f7f\u7528\u7ec4\u4ef6",children:"\u4f7f\u7528\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(i.p,{children:["app.c \u548c app.tsx \u5305\u542b\u7684\u662f\u6f14\u793a\u4ee3\u7801\uff0c\u5bf9\u6211\u4eec\u7684\u7a0b\u5e8f\u5e76\u6ca1\u6709\u7528\uff0c\u6240\u4ee5\u6211\u4eec\u53e6\u5916\u65b0\u5efa\u4e00\u4e2a ",(0,t.jsx)(i.code,{children:"main.c"})," \u6587\u4ef6\uff1a"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",metastring:"title=main.c",children:'#include <LCUI.h>\n#include <LCUI/main.h>\n#include "image-view.h"\n\nint main(int argc, char **argv)\n{\n        ui_widget_t *w;\n\n        lcui_init();\n        ui_register_image_view();\n        w = ui_create_widget("ImageView");\n        ui_root_append(w);\n        return lcui_main();\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["\u5728 ",(0,t.jsx)(i.code,{children:"main()"})," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u5148\u521d\u59cb\u5316\u4e86 LCUI\uff0c\u7136\u540e\u6ce8\u518c\u4e86 ImageView \u7ec4\u4ef6\uff0c\u4e4b\u540e\u521b\u5efa\u5b83\u5e76\u5c06\u5176\u8ffd\u52a0\u5230\u6839\u7ec4\u4ef6\u5185\uff0c\u6700\u540e\u8fdb\u5165 LCUI \u7684\u4e3b\u5faa\u73af\u3002"]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>c});var t=n(6540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);