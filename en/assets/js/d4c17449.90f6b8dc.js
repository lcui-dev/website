"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4667],{8732:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorial/render-fabric/ui-widget","title":"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6","description":"\u5728 LCUI \u4e2d\u8981\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\u3001\u8f93\u51fa\u6e32\u67d3\u7ed3\u679c\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u90e8\u4ef6\u3002\u521b\u5efa\u65b9\u6cd5\u662f\u5148\u521b\u5efa\u539f\u578b\uff0c\u7136\u540e\u6307\u5b9a\u90e8\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570\u3001\u9500\u6bc1\u51fd\u6570\uff1a","source":"@site/versioned_docs/version-3.x/tutorial/03-render-fabric/08-ui-widget.md","sourceDirName":"tutorial/03-render-fabric","slug":"/tutorial/render-fabric/ui-widget","permalink":"/en/docs/tutorial/render-fabric/ui-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/03-render-fabric/08-ui-widget.md","tags":[],"version":"3.x","sidebarPosition":8,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f","permalink":"/en/docs/tutorial/render-fabric/ui-init"},"next":{"title":"\u6dfb\u52a0\u6837\u5f0f","permalink":"/en/docs/tutorial/render-fabric/ui-style"}}');var n=i(4848),o=i(8453);const c={},a="\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6",s={},d=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6",children:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6"})}),"\n",(0,n.jsx)(t.p,{children:"\u5728 LCUI \u4e2d\u8981\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\u3001\u8f93\u51fa\u6e32\u67d3\u7ed3\u679c\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u90e8\u4ef6\u3002\u521b\u5efa\u65b9\u6cd5\u662f\u5148\u521b\u5efa\u539f\u578b\uff0c\u7136\u540e\u6307\u5b9a\u90e8\u4ef6\u7684\u521d\u59cb\u5316\u51fd\u6570\u3001\u9500\u6bc1\u51fd\u6570\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'ui_widget_prototype_t *ui_fabric_proto;\n\nvoid ui_fabric_on_init(ui_widget_t *w)\n{\n        ui_fabric_proto->proto->init(w);\n}\n\nvoid ui_fabric_on_destroy(ui_widget_t *w)\n{\n        ui_fabric_proto->proto->destroy(w);\n}\n\nvoid ui_register_fabric(void)\n{\n        ui_fabric_proto = ui_create_widget_prototype("fabric", "canvas");\n        ui_fabric_proto->init = ui_fabric_on_init;\n        ui_fabric_proto->destroy = ui_fabric_on_destroy;\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u90e8\u4ef6\u7c7b\u578b\u540d\u662f fabric\uff0c\u5b83\u7ee7\u627f\u81ea canvas\u3002canvas \u90e8\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u753b\u5e03\u548c\u4e00\u4e9b\u7ed8\u5236\u65b9\u6cd5\uff0c\u80fd\u8ba9\u6211\u4eec\u66f4\u4e13\u6ce8\u4e8e\u7ed8\u5236\u56fe\u5f62\u3002"})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var r=i(6540);const n={},o=r.createContext(n);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);