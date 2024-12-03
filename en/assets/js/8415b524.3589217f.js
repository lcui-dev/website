"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5040],{7426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"rfc/lcui-cli/sass-compiler","title":"SASS \u7f16\u8bd1\u5668","description":"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14","source":"@site/versioned_docs/version-3.x/rfc/lcui-cli/0005-sass-compiler.md","sourceDirName":"rfc/lcui-cli","slug":"/rfc/lcui-cli/sass-compiler","permalink":"/en/docs/rfc/lcui-cli/sass-compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0005-sass-compiler.md","tags":[],"version":"3.x","sidebarPosition":5,"frontMatter":{},"sidebar":"rfcSidebar","previous":{"title":"CSS \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/css-compiler"},"next":{"title":"CSS \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/javascript-compiler"}}');var i=s(4848),l=s(8453);const r={},o="SASS \u7f16\u8bd1\u5668",t={},d=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sass-\u7f16\u8bd1\u5668",children:"SASS \u7f16\u8bd1\u5668"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,i.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,i.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,i.jsx)(n.p,{children:"\u589e\u52a0 SASS \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 SASS \u548c SCSS \u6587\u4ef6\u5185\u5bb9\u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b SCSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",metastring:'title="home.scss"',children:"$bg: #f6f8fa;\n$color: #28a745;\n\nroot {\n  background-color: $bg;\n}\n\n.feedback {\n  color: $color;\n  font-size: 12px;\n  margin-top: 5px;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"lcui compile home.scss"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,i.jsx)(n.code,{children:"home.scss.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:'title="home.yml.h"',children:'static const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:'#include "home.css.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,i.jsx)(n.p,{children:"SASS \u5bf9 CSS \u505a\u4e86\u6269\u5c55\uff0c\u53ef\u4ee5\u8ba9 CSS \u66f4\u6613\u4e8e\u7ef4\u62a4\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/sass",children:"sass"})," \u5e93\u63d0\u4f9b\u7684 ",(0,i.jsx)(n.code,{children:"compileString()"})," \u51fd\u6570\u5b9e\u73b0\u7f16\u8bd1\uff0c\u81ea\u5b9a\u4e49\u5b83\u7684 ",(0,i.jsx)(n.code,{children:"importer.findFileUrl"})," \u4ee5\u89e3\u51b3\u6587\u4ef6\u5f15\u5165\u7684\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var c=s(6540);const i={},l=c.createContext(i);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);