"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[255],{477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorial/render-fabric/ui-init","title":"\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f","description":"\u5728 main.c \u4e2d\u6dfb\u52a0\u5934\u6587\u4ef6\u5305\u542b\u4ee3\u7801\u548c main() \u51fd\u6570\uff0c\u7136\u540e\u5728 main() \u51fd\u6570\u4e2d\u521d\u59cb\u5316 LCUi \u548c\u5e03\u6599\u6a21\u62df\u76f8\u5173\u6570\u636e\uff1a","source":"@site/docs/tutorial/03-render-fabric/07-ui-init.md","sourceDirName":"tutorial/03-render-fabric","slug":"/tutorial/render-fabric/ui-init","permalink":"/docs/next/tutorial/render-fabric/ui-init","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/03-render-fabric/07-ui-init.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u8f6c\u8bd1\u51fd\u6570\u5b9a\u4e49","permalink":"/docs/next/tutorial/render-fabric/functions"},"next":{"title":"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u90e8\u4ef6","permalink":"/docs/next/tutorial/render-fabric/ui-widget"}}');var r=t(4848),c=t(8453);const a={},o="\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f",s={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f",children:"\u521d\u59cb\u5316\u56fe\u5f62\u754c\u9762\u7a0b\u5e8f"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"main.c"})," \u4e2d\u6dfb\u52a0\u5934\u6587\u4ef6\u5305\u542b\u4ee3\u7801\u548c ",(0,r.jsx)(n.code,{children:"main()"})," \u51fd\u6570\uff0c\u7136\u540e\u5728 ",(0,r.jsx)(n.code,{children:"main()"})," \u51fd\u6570\u4e2d\u521d\u59cb\u5316 LCUi \u548c\u5e03\u6599\u6a21\u62df\u76f8\u5173\u6570\u636e\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",metastring:'title="src/main.c"',children:'#include <LCUI.h>\n#include <LCUI/main.h>\n#include "fabric.h"\n\nint main(int argc, char **argv)\n{\n        // \u521d\u59cb\u5316 LCUI\n        lcui_init();\n\n        // \u521d\u59cb\u5316\u5e03\u6599\u6a21\u62df\u76f8\u5173\u6570\u636e\n        Fabric_init(66, 55, 800, 600);\n\n        // \u8bbe\u7f6e\u4e3b\u7a97\u53e3\u6807\u9898\u4e3a Fabric\n        ui_widget_set_title(ui_root(), L"Fabric");\n\n        // \u6267\u884c\u4e3b\u5faa\u73af\n        return lcui_main();\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},c=i.createContext(r);function a(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);