"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2936],{1083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=t(4848),s=t(8453);const l={},r="\u5236\u5b9a\u65b9\u6848",c={id:"tutorial/todolist/solution",title:"\u5236\u5b9a\u65b9\u6848",description:"\u5728\u5f00\u59cb\u5f00\u53d1\u4e4b\u524d\u5236\u5b9a\u6280\u672f\u65b9\u6848\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u7406\u89e3\u9700\u6c42\uff0c\u660e\u786e\u5f00\u53d1\u5185\u5bb9\uff0c\u51cf\u5c11\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u56e0\u65b9\u6848\u53d8\u52a8\u800c\u4ea7\u751f\u7684\u989d\u5916\u6210\u672c\u3002",source:"@site/versioned_docs/version-3.x/tutorial/01-todolist/03-solution.md",sourceDirName:"tutorial/01-todolist",slug:"/tutorial/todolist/solution",permalink:"/en/docs/tutorial/todolist/solution",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/01-todolist/03-solution.md",tags:[],version:"3.x",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u6790\u9700\u6c42",permalink:"/en/docs/tutorial/todolist/analyze-requirements"},next:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/en/docs/tutorial/todolist/create-project"}},d={},o=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u754c\u9762\u63cf\u8ff0\u65b9\u5f0f",id:"\u754c\u9762\u63cf\u8ff0\u65b9\u5f0f",level:2},{value:"\u5e03\u5c40\u65b9\u5f0f",id:"\u5e03\u5c40\u65b9\u5f0f",level:2},{value:"\u6570\u636e\u7ba1\u7406",id:"\u6570\u636e\u7ba1\u7406",level:2},{value:"\u754c\u9762\u4ea4\u4e92",id:"\u754c\u9762\u4ea4\u4e92",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5236\u5b9a\u65b9\u6848",children:"\u5236\u5b9a\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u5f00\u53d1\u4e4b\u524d\u5236\u5b9a\u6280\u672f\u65b9\u6848\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u7406\u89e3\u9700\u6c42\uff0c\u660e\u786e\u5f00\u53d1\u5185\u5bb9\uff0c\u51cf\u5c11\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u56e0\u65b9\u6848\u53d8\u52a8\u800c\u4ea7\u751f\u7684\u989d\u5916\u6210\u672c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"todolist/               \u9879\u76ee\u6839\u76ee\u5f55\n    app/                \u5de5\u4f5c\u76ee\u5f55\n    src/                \u6e90\u7801\u76ee\u5f55\n        tasklist.c      \u4efb\u52a1\u5217\u8868\u6570\u636e\u7ba1\u7406\n        tasklist.h      \u4efb\u52a1\u5217\u8868\u6570\u636e\u7ba1\u7406\n        ui_tasklist.c   \u754c\u9762\u4e0a\u7684\u4efb\u52a1\u5217\u8868\n        ui_tasklist.h   \u754c\u9762\u4e0a\u7684\u4efb\u52a1\u5217\u8868\n        main.c          \u7a0b\u5e8f\u4e3b\u5165\u53e3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7a0b\u5e8f\u7684\u754c\u9762\u4f9d\u8d56\u4e00\u4e9b\u5916\u90e8\u8d44\u6e90\u6587\u4ef6\uff08xml\u3001css\uff09\uff0c\u51fa\u4e8e\u6253\u5305\u548c\u53d1\u5e03\u4fbf\u5229\u6027\u4e0a\u7684\u8003\u8651\uff0c\u9700\u8981\u6709\u4e2a\u5de5\u4f5c\u76ee\u5f55\u6765\u5b58\u653e\u7a0b\u5e8f\u7684\u53ef\u6267\u884c\u6587\u4ef6\u548c\u8d44\u6e90\u6587\u4ef6\uff0c\u8be5\u76ee\u5f55\u547d\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"app"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6e90\u6587\u4ef6\u5212\u5206\u65b9\u9762\uff0c\u4efb\u52a1\u5217\u8868\u7684\u6570\u636e\u7ba1\u7406\u4ee3\u7801\u8f83\u4e3a\u72ec\u7acb\uff0c\u800c\u4efb\u52a1\u5217\u8868\u90e8\u4ef6\u7684\u4ea4\u4e92\u5b9e\u73b0\u8f83\u4e3a\u590d\u6742\uff0c\u56e0\u6b64\u5c06\u5b83\u4eec\u5212\u5206\u5230\u72ec\u7acb\u7684\u6587\u4ef6\u4e2d\uff0c\u5176\u4f59\u7684\u4ea4\u4e92\u4ee3\u7801\u8f83\u4e3a\u7b80\u5355\uff0c\u90fd\u5199\u5230 main.c \u4e2d\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u754c\u9762\u63cf\u8ff0\u65b9\u5f0f",children:"\u754c\u9762\u63cf\u8ff0\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u53bb\u4efb\u52a1\u5217\u8868\u9700\u8981\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u66f4\u65b0\u5916\uff0c\u5176\u5b83\u5143\u7d20\u90fd\u662f\u9759\u6001\u7684\uff0c\u56e0\u6b64\uff0c\u4f7f\u7528 xml \u63cf\u8ff0\u754c\u9762\u7ed3\u6784\uff0c\u800c\u4efb\u52a1\u5217\u8868\u5219\u4f7f\u7528 C \u4ee3\u7801\u521b\u5efa\u548c\u66f4\u65b0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5e03\u5c40\u65b9\u5f0f",children:"\u5e03\u5c40\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3b\u754c\u9762\u9700\u8981\u5728\u7a97\u53e3\u5185\u5782\u76f4\u6c34\u5e73\u5c45\u4e2d\uff0c\u53ef\u5c06\u6839\u5e03\u5c40\u8bbe\u7f6e\u4e3a flex \u5bb9\u5668\uff0c\u7136\u540e\u7528 justify-content \u548c align-items \u5c5e\u6027\u63a7\u5236\u4e3b\u754c\u9762\u6c34\u5e73\u548c\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4efb\u52a1\u6570\u91cf\u548c\u7b5b\u9009\u6309\u94ae\u7684\u5de6\u53f3\u5bf9\u9f50\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u7528 flex \u5e03\u5c40\u5b9e\u73b0\u3002\u5148\u5c06\u5b83\u4eec\u7684\u7236\u90e8\u4ef6\u8bbe\u4e3a flex \u5bb9\u5668\uff0c\u7136\u540e\u5c06\u4efb\u52a1\u6570\u91cf\u7684 margin-right \u8bbe\u4e3a auto \u4ee5\u5360\u6ee1\u5269\u4f59\u7a7a\u95f4\uff0c\u4ece\u800c\u5c06\u7b5b\u9009\u6309\u94ae\u6324\u5230\u6700\u53f3\u7aef\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4efb\u52a1\u5217\u8868\u4e2d\uff0c\u72b6\u6001\u56fe\u6807\u548c\u5220\u9664\u56fe\u6807\u5c3a\u5bf8\u56fa\u5b9a\uff0c\u7528 ",(0,i.jsx)(n.code,{children:"flex: none"})," \u7981\u6b62\u62c9\u4f38\u548c\u6536\u7f29\u3002\u4e2d\u95f4\u6587\u672c\u81ea\u7531\u4f38\u7f29\u5360\u6ee1\u5269\u4f59\u7a7a\u95f4\uff0c\u7528 ",(0,i.jsx)(n.code,{children:"flex: auto"})," \u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u7ba1\u7406",children:"\u6570\u636e\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u4efb\u52a1\u5217\u8868\u6570\u636e\u5305\u542b\u6bcf\u4e2a\u4efb\u52a1\u7684\u72b6\u6001\u548c\u540d\u79f0\uff0c\u72b6\u6001\u6709\u5b8c\u6210\u548c\u672a\u5b8c\u6210\uff0c\u4e3a\u65b9\u4fbf\u589e\u5220\u6539\u64cd\u4f5c\uff0c\u6570\u636e\u8fd8\u5e94\u8be5\u5305\u542b id\uff0c\u7c7b\u578b\u4e3a ",(0,i.jsx)(n.code,{children:"int"}),"\uff0c\u751f\u6210\u65b9\u5f0f\u662f\u4ece 1 \u5f00\u59cb\u9012\u589e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4efb\u52a1\u5217\u8868\u662f\u52a8\u6001\u589e\u5220\u7684\uff0c\u4e3a\u65b9\u4fbf\u64cd\u4f5c\u4efb\u52a1\u6570\u636e\uff0c\u5e94\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"<yutil.h>"})," \u4e2d\u63d0\u4f9b\u7684\u6570\u636e\u7ed3\u6784 ",(0,i.jsx)(n.code,{children:"list_t"})," \u6765\u5b58\u50a8\uff0c\u5e76\u63d0\u4f9b\u4efb\u52a1\u5217\u8868\u7684\u521d\u59cb\u5316\u3001\u8ffd\u52a0\u3001\u5220\u9664\u3001\u66f4\u65b0\u3001\u7b5b\u9009\u51fd\u6570\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u754c\u9762\u4ea4\u4e92",children:"\u754c\u9762\u4ea4\u4e92"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6807\u9898\uff1a"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u524d\u65f6\u95f4\u53ef\u4ee5\u7528\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"time()"})," \u51fd\u6570\u83b7\u53d6\uff0c\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"localtime()"})," \u8f6c\u6362\u6210 ",(0,i.jsx)(n.code,{children:"struct tm"})," \u7c7b\u578b, \u7136\u540e\u7528 ",(0,i.jsx)(n.code,{children:"strftime()"})," \u51fd\u6570\u683c\u5f0f\u5316\u6210\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4efb\u52a1\u6570\u91cf\uff1a"})}),"\n",(0,i.jsx)(n.p,{children:"\u4efb\u52a1\u6570\u91cf\u968f\u4efb\u52a1\u5217\u8868\u66f4\u65b0\uff0c\u53ef\u5728\u8ffd\u52a0\u548c\u5220\u9664\u4efb\u52a1\u65f6\u8c03\u7528\u76f8\u5173\u51fd\u6570\u6765\u66f4\u65b0\u4efb\u52a1\u6570\u91cf\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7b5b\u9009\u6309\u94ae\uff1a"})}),"\n",(0,i.jsx)(n.p,{children:"\u7b5b\u9009\u6309\u94ae\u6709\u4e09\u4e2a\uff0c\u4e3a\u4fbf\u4e8e\u533a\u5206\u5b83\u4eec\u6240\u643a\u5e26\u7684\u7b5b\u9009\u53c2\u6570\uff0c\u53ef\u7ed9\u5b83\u4eec\u8bbe\u7f6e data-value \u5c5e\u6027\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u7ed9\u6309\u94ae\u7684\u7236\u90e8\u4ef6\u6dfb\u52a0 click \u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u5148\u901a\u8fc7\u4e8b\u4ef6\u76ee\u6807\u627e\u5230\u7b5b\u9009\u6309\u94ae\u90e8\u4ef6\uff0c\u7136\u540e\u83b7\u53d6 ",(0,i.jsx)(n.code,{children:"data-value"})," \u5c5e\u6027\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u7b5b\u9009\u51fd\u6570\u4ee5\u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u4efb\u52a1\u5217\u8868\u6570\u636e\uff0c\u4e4b\u540e\u4f7f\u7528\u8be5\u6570\u636e\u91cd\u65b0\u521b\u5efa\u4efb\u52a1\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8f93\u5165\u6846\uff1a"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6dfb\u52a0 keydown \u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u5f53\u4e8b\u4ef6\u4e2d\u7684\u6309\u952e\u7801\u4e3a ",(0,i.jsx)(n.code,{children:"KEY_ENTER"})," \u65f6\u5f80\u4efb\u52a1\u5217\u8868\u8ffd\u52a0\u4efb\u52a1\u5e76\u6e05\u7a7a\u8f93\u5165\u6846\u5185\u5bb9\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4efb\u52a1\u5217\u8868\uff1a"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6dfb\u52a0\u4efb\u52a1\u5217\u8868\u521b\u5efa\u51fd\u6570\uff0c\u53c2\u6570\u662f\u4efb\u52a1\u5217\u8868\u6570\u636e\uff0c\u65b9\u6cd5\u5148\u6e05\u7a7a\u4efb\u52a1\u5217\u8868\u90e8\u4ef6\uff0c\u7136\u540e\u662f\u904d\u5386\u4efb\u52a1\u5217\u8868\u6570\u636e\uff0c\u4e3a\u6bcf\u4e00\u9879\u6570\u636e\u521b\u5efa\u4efb\u52a1\u90e8\u4ef6\u3002\u4e3a\u4e86\u65b9\u4fbf\u540e\u7eed\u7684\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\uff0c\u9700\u8981\u5c06\u4efb\u52a1\u7684 id \u4fdd\u5b58\u4e3a\u4efb\u52a1\u90e8\u4ef6\u7684\u5c5e\u6027\uff0c\u5c5e\u6027\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"data-id"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7ed9\u4efb\u52a1\u5217\u8868\u90e8\u4ef6\u6dfb\u52a0 click \u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u5728\u91cc\u9762\u5b9e\u73b0\u5bf9\u72b6\u6001\u56fe\u6807\u548c\u5220\u9664\u56fe\u6807\u7684 click \u4e8b\u4ef6\u5904\u7406\uff0c\u4e8b\u4ef6\u76ee\u6807\u7684\u533a\u5206\u65b9\u6cd5\u662f\u5224\u65ad\u5b83\u53ca\u5176\u7236\u90e8\u4ef6\u662f\u5426\u6709\u5305\u542b\u72b6\u6001\u56fe\u6807\u6216\u5220\u9664\u56fe\u6807\u7684\u7c7b\u540d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4efb\u52a1\u72b6\u6001\u5207\u6362\u6d89\u53ca\u90e8\u4ef6\u548c\u6570\u636e\u7684\u64cd\u4f5c\u3002\u5bf9\u4e8e\u90e8\u4ef6\u64cd\u4f5c\uff0c\u72b6\u6001\u7684\u6539\u53d8\u53ea\u662f\u5f71\u54cd\u90e8\u4ef6\u7684\u6837\u5f0f\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u6839\u636e\u72b6\u6001\u6765\u66f4\u6539\u7c7b\u540d\u3002\u800c\u5bf9\u4e8e\u6570\u636e\u64cd\u4f5c\uff0c\u8c03\u7528\u6570\u636e\u7ba1\u7406\u6a21\u5757\u63d0\u4f9b\u7684\u66f4\u65b0\u51fd\u6570\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4efb\u52a1\u7684\u5220\u9664\u529f\u80fd\u9700\u8981\u5c06\u6570\u636e\u548c\u90e8\u4ef6\u4e00\u540c\u5220\u9664\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u53ea\u9700\u8981\u8c03\u7528\u73b0\u6709\u7684\u51fd\u6570\u5373\u53ef\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);