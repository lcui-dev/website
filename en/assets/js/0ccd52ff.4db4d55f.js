"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1476],{6926:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),l=i(8453);const s={},r="\u5206\u6790\u9700\u6c42",o={id:"tutorial/todolist/analyze-requirements",title:"\u5206\u6790\u9700\u6c42",description:"\u6309\u7167\u7f51\u9875\u7248\u5f85\u529e\u6e05\u5355\u7a0b\u5e8f\u7684\u5c55\u793a\u6548\u679c\uff0c\u6211\u4eec\u6784\u5efa\u7684\u5f85\u529e\u6e05\u5355\u7a0b\u5e8f\u754c\u9762\u5e94\u8be5\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a",source:"@site/versioned_docs/version-3.x/tutorial/01-todolist/02-analyze-requirements.md",sourceDirName:"tutorial/01-todolist",slug:"/tutorial/todolist/analyze-requirements",permalink:"/en/docs/tutorial/todolist/analyze-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/01-todolist/02-analyze-requirements.md",tags:[],version:"3.x",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb",permalink:"/en/docs/tutorial/todolist/intro"},next:{title:"\u5236\u5b9a\u65b9\u6848",permalink:"/en/docs/tutorial/todolist/solution"}},c={},d=[];function u(n){const e={h1:"h1",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5206\u6790\u9700\u6c42",children:"\u5206\u6790\u9700\u6c42"}),"\n",(0,t.jsx)(e.p,{children:"\u6309\u7167\u7f51\u9875\u7248\u5f85\u529e\u6e05\u5355\u7a0b\u5e8f\u7684\u5c55\u793a\u6548\u679c\uff0c\u6211\u4eec\u6784\u5efa\u7684\u5f85\u529e\u6e05\u5355\u7a0b\u5e8f\u754c\u9762\u5e94\u8be5\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6807\u9898\uff0c\u663e\u793a\u5f53\u524d\u65f6\u95f4"}),"\n",(0,t.jsx)(e.li,{children:"\u4efb\u52a1\u6570\u91cf"}),"\n",(0,t.jsx)(e.li,{children:"All\u3001Active\u3001Completed \u4e09\u79cd\u7b5b\u9009\u6309\u94ae"}),"\n",(0,t.jsx)(e.li,{children:"\u4efb\u52a1\u8f93\u5165\u6846"}),"\n",(0,t.jsxs)(e.li,{children:["\u4efb\u52a1\u5217\u8868","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u72b6\u6001\u56fe\u6807"}),"\n",(0,t.jsx)(e.li,{children:"\u4efb\u52a1\u540d\u79f0"}),"\n",(0,t.jsx)(e.li,{children:"\u5220\u9664\u56fe\u6807"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u754c\u9762\u7684\u5e03\u5c40\u662f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6807\u9898\u72ec\u5360\u4e00\u884c"}),"\n",(0,t.jsx)(e.li,{children:"\u4efb\u52a1\u6570\u91cf\u548c\u4e09\u4e2a\u72b6\u6001\u7b5b\u9009\u6309\u94ae\u5360\u4e00\u884c\uff0c\u7b5b\u9009\u6309\u94ae\u9760\u53f3\u5bf9\u9f50"}),"\n",(0,t.jsx)(e.li,{children:"\u8f93\u5165\u6846\u72ec\u5360\u4e00\u884c"}),"\n",(0,t.jsx)(e.li,{children:"\u6bcf\u4e2a\u4efb\u52a1\u5360\u4e00\u884c\uff0c\u5305\u542b\u72b6\u6001\u56fe\u6807\u3001\u540d\u79f0\u548c\u5220\u9664\u6309\u94ae"}),"\n",(0,t.jsx)(e.li,{children:"\u72b6\u6001\u56fe\u6807\u548c\u5220\u9664\u56fe\u6807\u4f4d\u4e8e\u4e24\u7aef\u4e14\u5c3a\u5bf8\u56fa\u5b9a\uff0c\u4efb\u52a1\u540d\u79f0\u5728\u4e2d\u95f4\uff0c\u5bbd\u5ea6\u5360\u6ee1\u5269\u4f59\u7a7a\u95f4"}),"\n",(0,t.jsx)(e.li,{children:"\u4e3b\u754c\u9762\u6c34\u5e73\u5c45\u4e2d\u3001\u5782\u76f4\u5c45\u4e2d"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u754c\u9762\u7684\u4ea4\u4e92\u6548\u679c\u662f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u70b9\u51fb All \u65f6\u663e\u793a\u5168\u90e8\u72b6\u6001\u7684\u4efb\u52a1"}),"\n",(0,t.jsx)(e.li,{children:"\u70b9\u51fb Active \u65f6\u663e\u793a\u672a\u5b8c\u6210\u7684\u4efb\u52a1"}),"\n",(0,t.jsx)(e.li,{children:"\u70b9\u51fb Completed \u65f6\u663e\u793a\u5df2\u5b8c\u6210\u7684\u4efb\u52a1"}),"\n",(0,t.jsx)(e.li,{children:"\u5f53\u524d\u4efb\u52a1\u603b\u6570\u4f1a\u968f\u7740\u7b5b\u9009\u6761\u4ef6\u81ea\u52a8\u66f4\u65b0"}),"\n",(0,t.jsx)(e.li,{children:"\u5728\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u6587\u672c\u6309\u56de\u8f66\u540e\uff0c\u5411\u4efb\u52a1\u5217\u8868\u8ffd\u52a0\u8be5\u4efb\u52a1\uff0c\u5e76\u6e05\u7a7a\u8f93\u5165\u6846"}),"\n",(0,t.jsx)(e.li,{children:"\u70b9\u51fb\u4efb\u52a1\u540d\u79f0\u5de6\u8fb9\u7684\u72b6\u6001\u56fe\u6807\u4f1a\u5207\u6362\u4efb\u52a1\u72b6\u6001\uff0c\u5df2\u5b8c\u6210\u662f\u7eff\u8272\u80cc\u666f\u7684\u52fe\uff0c\u672a\u5b8c\u6210\u5219\u662f\u5706\u5708"}),"\n",(0,t.jsx)(e.li,{children:"\u70b9\u51fb\u4efb\u52a1\u540d\u79f0\u53f3\u8fb9\u7684\u5220\u9664\u56fe\u6807\uff0c\u4f1a\u5220\u9664\u8be5\u4efb\u52a1"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u7ed3\u5408\u4e0a\u8ff0\u9700\u6c42\uff0c\u7a0b\u5e8f\u5185\u90e8\u8bb0\u5f55\u7684\u4efb\u52a1\u5217\u8868\u5e94\u8be5\u5305\u542b\u6bcf\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\u548c\u540d\u79f0\u3002\u4e3a\u4e86\u6ee1\u8db3\u4ea4\u4e92\u9700\u6c42\uff0c\u8fd8\u9700\u8981\u5b9e\u73b0\u4efb\u52a1\u5217\u8868\u6570\u636e\u7684\u589e\u5220\u64cd\u4f5c\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var t=i(6540);const l={},s=t.createContext(l);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);