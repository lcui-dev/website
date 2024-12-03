"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2095],{118:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guide/installation","title":"\u5b89\u88c5","description":"\u6709\u591a\u79cd\u65b9\u6cd5\u5b89\u88c5 LCUI\uff0c\u4f46\u5728\u6b64\u4e4b\u524d\u4f60\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u5de5\u5177\uff1a","source":"@site/versioned_docs/version-3.x/guide/2-installation.md","sourceDirName":"guide","slug":"/guide/installation","permalink":"/en/docs/guide/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/guide/2-installation.md","tags":[],"version":"3.x","sidebarPosition":2,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\u7b80\u4ecb","permalink":"/en/docs/guide/introduction"},"next":{"title":"\u5feb\u901f\u5165\u95e8","permalink":"/en/docs/guide/quick-start"}}');var s=i(4848),d=i(8453);const r={},l="\u5b89\u88c5",a={},c=[{value:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",level:2},{value:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",level:2},{value:"\u6709\u5176\u5b83\u5efa\u8bae\uff1f",id:"\u6709\u5176\u5b83\u5efa\u8bae",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u591a\u79cd\u65b9\u6cd5\u5b89\u88c5 LCUI\uff0c\u4f46\u5728\u6b64\u4e4b\u524d\u4f60\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u5de5\u5177\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://xmake.io/#/zh-cn/getting_started?id=%e5%ae%89%e8%a3%85",children:"XMake"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5",children:"\u4ece\u6e90\u7801\u76ee\u5f55\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u76ee\u5f55\u4e2d\u6709\u4e2a vendor \u76ee\u5f55\u4e13\u7528\u4e8e\u5b58\u653e\u7b2c\u4e09\u65b9\u5e93\u7684\u6e90\u7801\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d LCUI \u7684\u6e90\u7801\u5305\u7136\u540e\u89e3\u538b\u5230 vendor \u76ee\u5f55\u4e2d\uff0c\u518d\u5c06 LCUI \u7684 xmake.lua \u5305\u542b\u8fdb\u6765\u5373\u53ef\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",metastring:'title="xmake.lua"',children:'includes("vendor/LCUI/xmake.lua")\n\ntarget("app")\n  set_kind("binary")\n  add_deps("lcui")\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u5728\u9700\u8981\u5347\u7ea7 LCUI \u7248\u672c\u7684\u65f6\u5019\u6bd4\u8f83\u9ebb\u70e6\uff0c\u53ef\u6539\u7528 git submodule \u4ee3\u66ff\u5b83\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git submodule add https://gitee.com/lc-soft/LCUI.git vendor/LCUI\ngit submodule update --init --recursive\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u65b0\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"git submodule sync --recursive\ngit submodule update --init --recursive\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5",children:"\u4ece\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u8f7d LCUI \u7684\u5df2\u7f16\u8bd1\u7684\u6587\u4ef6\u5305\uff0c\u89e3\u538b\u5230\u7279\u5b9a\u7684\u76ee\u5f55\u5185\uff0c\u4f8b\u5982\uff1avendor \u76ee\u5f55\uff0c\u7136\u540e\u6dfb\u52a0\u7f16\u8bd1\u548c\u94fe\u63a5\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",metastring:'title="xmake.lua"',children:'target("myapp")\n  add_includedirs("vendor/include")\n  add_linkdirs("vendor/lib")\n  add_links("lcui")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6709\u5176\u5b83\u5efa\u8bae",children:"\u6709\u5176\u5b83\u5efa\u8bae\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b22\u8fce\u53c2\u4e0e\u6539\u8fdb\u300a",(0,s.jsx)(n.a,{href:"../rfc/lcui/build-and-install",children:"RFC0003: \u6784\u5efa\u548c\u5b89\u88c5"}),"\u300b\u610f\u89c1\u5f81\u96c6\u7a3f\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);