"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9967],{3090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453);const r={},s="\u521b\u5efa\u9879\u76ee",c={id:"tutorial/todolist/create-project",title:"\u521b\u5efa\u9879\u76ee",description:"\u73af\u5883\u9700\u6c42",source:"@site/docs/tutorial/01-todolist/04-create-project.md",sourceDirName:"tutorial/01-todolist",slug:"/tutorial/todolist/create-project",permalink:"/en/docs/next/tutorial/todolist/create-project",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/01-todolist/04-create-project.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5236\u5b9a\u65b9\u6848",permalink:"/en/docs/next/tutorial/todolist/solution"},next:{title:"\u521b\u5efa\u754c\u9762",permalink:"/en/docs/next/tutorial/todolist/create-ui"}},l={},d=[{value:"\u73af\u5883\u9700\u6c42",id:"\u73af\u5883\u9700\u6c42",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u5b89\u88c5\u548c\u6784\u5efa",id:"\u5b89\u88c5\u548c\u6784\u5efa",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u521b\u5efa\u9879\u76ee",children:"\u521b\u5efa\u9879\u76ee"}),"\n",(0,i.jsx)(t.h2,{id:"\u73af\u5883\u9700\u6c42",children:"\u73af\u5883\u9700\u6c42"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://git-scm.com/download/",children:"Git"}),"\uff1a\u7248\u672c\u7ba1\u7406\u5de5\u5177"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://xmake.io/#/zh-cn/?id=%e5%ae%89%e8%a3%85",children:"XMake"}),"\uff1a\u6784\u5efa\u5de5\u5177"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"\u672c\u6559\u7a0b\u5047\u5b9a\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86\u6784\u5efa C/C++ \u9879\u76ee\u6240\u9700\u7684\u73af\u5883"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"\u672c\u6559\u7a0b\u5047\u5b9a\u4f60\u5df2\u7ecf\u77e5\u9053\u4ec0\u4e48\u662f\u547d\u4ee4\u884c\u3001\u5982\u4f55\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\u3001\u5982\u4f55\u5728\u7a97\u53e3\u5185\u6267\u884c\u547d\u4ee4"})}),"\n",(0,i.jsx)(t.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,i.jsx)(t.p,{children:"\u4f7f\u7528 Git \u4e0b\u8f7d\u793a\u4f8b\u9879\u76ee\u7684\u4ee3\u7801\u5e93\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/lcui-dev/lcui-quick-start.git\n\n# \u6216\u6539\u7528\u56fd\u5185\u7684\u6e90\ngit clone https://gitee.com/lcui-dev/lcui-quick-start.git\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u5b89\u88c5\u548c\u6784\u5efa",children:"\u5b89\u88c5\u548c\u6784\u5efa"}),"\n",(0,i.jsx)(t.p,{children:"\u8fdb\u5165\u9879\u76ee\u6e90\u7801\u76ee\u5f55\u540e\uff0c\u4f7f\u7528 XMake\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"xmake\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4e4b\u540e XMake \u4f1a\u63d0\u793a\u662f\u5426\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u5b89\u88c5\u5b8c\u540e\u4f1a\u5f00\u59cb\u6784\u5efa\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,i.jsx)(t.p,{children:"\u7528 XMake \u7684\u5feb\u6377\u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"xmake run app\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u4f60\u4f1a\u770b\u5230\u8fd9\u4e2a\u793a\u4f8b\u9879\u76ee\u7684\u8fd0\u884c\u6548\u679c\u3002"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);