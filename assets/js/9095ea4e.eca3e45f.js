"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1489],{5737:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"layout/flexbox","title":"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40","description":"\u5f39\u6027\u76d2\u5b50\uff08Flexible Box\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u6309\u884c\u6216\u6309\u5217\u5e03\u5c40\u5143\u7d20\u7684\u4e00\u7ef4\u5e03\u5c40\u65b9\u6cd5\uff0c\u4f7f\u7528\u8be5\u5e03\u5c40\u7684\u7ec4\u4ef6\u5373\u4e3a\u5f39\u6027\u5bb9\u5668\uff08flex container\uff09\uff0c\u5bb9\u5668\u5185\u7684\u76f4\u7cfb\u5b50\u7ec4\u4ef6\u5219\u662f\u5f39\u6027\u9879\u76ee\uff08flex item\uff09\uff0c\u4ed6\u4eec\u53ef\u4ee5\u81a8\u80c0\u4ee5\u586b\u5145\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u6536\u7f29\u4ee5\u9002\u5e94\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u5b83\u4eec\u5728 CSS \u5c5e\u6027\u90fd\u4e3a\u521d\u59cb\u7684\u60c5\u51b5\u4e0b\u90fd\u4f1a\u6709\u4e0b\u5217\u884c\u4e3a\uff1a","source":"@site/versioned_docs/version-2.x/layout/flexbox.md","sourceDirName":"layout","slug":"/layout/flexbox","permalink":"/docs/2.x/layout/flexbox","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/layout/flexbox.md","tags":[],"version":"2.x","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\u6b63\u5e38\u6d41\u5e03\u5c40","permalink":"/docs/2.x/layout/normal-flow-layout"},"next":{"title":"\u56fe\u5f62","permalink":"/docs/2.x/graphics/"}}');var s=o(4848),l=o(8453);const i={},r="\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",c={},d=[];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",children:"\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f39\u6027\u76d2\u5b50\uff08Flexible Box\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u6309\u884c\u6216\u6309\u5217\u5e03\u5c40\u5143\u7d20\u7684\u4e00\u7ef4\u5e03\u5c40\u65b9\u6cd5\uff0c\u4f7f\u7528\u8be5\u5e03\u5c40\u7684\u7ec4\u4ef6\u5373\u4e3a\u5f39\u6027\u5bb9\u5668\uff08flex container\uff09\uff0c\u5bb9\u5668\u5185\u7684\u76f4\u7cfb\u5b50\u7ec4\u4ef6\u5219\u662f\u5f39\u6027\u9879\u76ee\uff08flex item\uff09\uff0c\u4ed6\u4eec\u53ef\u4ee5\u81a8\u80c0\u4ee5\u586b\u5145\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u6536\u7f29\u4ee5\u9002\u5e94\u66f4\u5c0f\u7684\u7a7a\u95f4\uff0c\u5b83\u4eec\u5728 CSS \u5c5e\u6027\u90fd\u4e3a\u521d\u59cb\u7684\u60c5\u51b5\u4e0b\u90fd\u4f1a\u6709\u4e0b\u5217\u884c\u4e3a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u9879\u76ee\u6392\u5217\u6210\u4e00\u884c\u3002\uff08\u5bb9\u5668\u7684 ",(0,s.jsx)(n.code,{children:"flex-direction"})," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u662f ",(0,s.jsx)(n.code,{children:"row"}),"\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9879\u76ee\u4ece\u4e3b\u8f74\u7684\u8d77\u59cb\u7ebf\u5f00\u59cb\u3002\uff08\u5bb9\u5668\u7684 ",(0,s.jsx)(n.code,{children:"justify-content"})," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u662f ",(0,s.jsx)(n.code,{children:"flex-start"}),"\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u9879\u76ee\u4e0d\u4f1a\u5728\u4e3b\u8f74\u7ef4\u5ea6\u65b9\u5411\u62c9\u4f38\uff0c\u4f46\u53ef\u4ee5\u7f29\u5c0f\u3002\uff08\u9879\u76ee\u7684 ",(0,s.jsx)(n.code,{children:"flex-grow"})," \u548c ",(0,s.jsx)(n.code,{children:"flex-shirnk"})," \u5c5e\u6027\u7684\u521d\u59cb\u503c\u5206\u522b\u662f ",(0,s.jsx)(n.code,{children:"0"})," \u548c ",(0,s.jsx)(n.code,{children:"1"}),"\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5143\u7d20\u88ab\u62c9\u5347\u6765\u586b\u5145\u4ea4\u53c9\u8f74\u5927\u5c0f\u3002\uff08\u5bb9\u5668\u7684 ",(0,s.jsx)(n.code,{children:"align-items"})," \u5c5e\u6027\u521d\u59cb\u503c\u662f ",(0,s.jsx)(n.code,{children:"stretch"}),"\uff09"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u5e03\u5c40\u4e2d\u5b58\u5728\u4e3b\u8f74\uff08main axis\uff09\u548c\u4ea4\u53c9\u8f74\uff08cross axis\uff09\uff0c\u4e3b\u8f74\u7531 ",(0,s.jsx)(n.code,{children:"flex-direction"})," \u5b9a\u4e49\uff0c\u4ea4\u53c9\u8f74\u5782\u76f4\u4e8e\u4e3b\u8f74\uff0c\u5bb9\u5668\u5185\u7684\u9879\u76ee\u6cbf\u7740\u4e3b\u8f74\u6392\u5217\uff0c\u5f53\u4e3b\u8f74\u6392\u6ee1\u9879\u76ee\u540e\uff0c\u5982\u679c ",(0,s.jsx)(n.code,{children:"flex-wrap"})," \u503c\u4e3a ",(0,s.jsx)(n.code,{children:"wrap"})," \u5219\u4f1a\u6cbf\u7740\u4ea4\u53c9\u8f74\u8ffd\u52a0\u65b0\u7684\u4e3b\u8f74\u5e76\u5728\u65b0\u4e3b\u8f74\u4e0a\u7ee7\u7eed\u6392\u5217\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5f39\u6027\u76d2\u5b50\u5e03\u5c40\u7684\u6982\u5ff5\u548c\u7528\u6cd5\uff0c\u53ef\u53c2\u8003 MDN \u4e0a\u7684\u6587\u6863\uff1a\u300a",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",children:"flex \u5e03\u5c40\u7684\u57fa\u672c\u6982\u5ff5 - CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09 | MDN"}),"\u300b"]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"test/test_flex_layout.c"})," \u5c55\u793a\u4e86\u5e38\u89c1\u5e03\u5c40\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u6548\u679c\u4e0e\u4e0b\u9762\u7684\u5728\u7ebf\u793a\u4f8b\u4e00\u81f4\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u5e76\u8fd0\u884c\u5b83\u6765\u4f53\u9a8c\u5b9e\u9645\u6548\u679c\u3002"]}),"\n",(0,s.jsx)("iframe",{height:"600",style:{width:"100%"},scrolling:"no",title:"Flexbox",src:"https://codepen.io/lc-soft/embed/XWNObPw?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:(0,s.jsxs)(n.p,{children:["See the Pen ",(0,s.jsx)("a",{href:"https://codepen.io/lc-soft/pen/XWNObPw",children:"\nFlexbox"})," by Liu (",(0,s.jsx)("a",{href:"https://codepen.io/lc-soft",children:"@lc-soft"}),")\non ",(0,s.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(6540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);