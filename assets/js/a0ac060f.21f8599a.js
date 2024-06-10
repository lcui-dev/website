"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[988],{5320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var c=s(4848),i=s(8453);const t={},l="TypeScript",r={id:"guide/typescript",title:"TypeScript",description:"\u5728 Web \u524d\u7aef\u9886\u57df\uff0c\u6709\u5f88\u591a\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u5e93\u548c\u6846\u67b6\uff0c\u5982 React\u3001Vue.js\u3001Solid.js \u548c Svelte\u3002\u5176\u4e2d\u7684",source:"@site/docs/guide/4-typescript.md",sourceDirName:"guide",slug:"/guide/typescript",permalink:"/docs/next/guide/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/guide/4-typescript.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/next/guide/quick-start"}},d={},a=[{value:"\u7528\u6cd5\u6982\u89c8",id:"\u7528\u6cd5\u6982\u89c8",level:2},{value:"\u5e38\u7528\u8bed\u6cd5",id:"\u5e38\u7528\u8bed\u6cd5",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>const</code>",id:"const",level:3},{value:"\u5f00\u53d1\u5de5\u5177",id:"\u5f00\u53d1\u5de5\u5177",level:2},{value:"\u9884\u5904\u7406",id:"\u9884\u5904\u7406",level:2},{value:"React \u5e93",id:"react-\u5e93",level:2},{value:"\u7ec4\u4ef6\u51fd\u6570",id:"\u7ec4\u4ef6\u51fd\u6570",level:3},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:3},{value:"\u54cd\u5e94\u4e8b\u4ef6",id:"\u54cd\u5e94\u4e8b\u4ef6",level:3},{value:"\u6761\u4ef6\u6e32\u67d3",id:"\u6761\u4ef6\u6e32\u67d3",level:3},{value:"\u6e32\u67d3\u5217\u8868",id:"\u6e32\u67d3\u5217\u8868",level:3},{value:"\u56fe\u6807\u5e93",id:"\u56fe\u6807\u5e93",level:2},{value:"\u6837\u5f0f",id:"\u6837\u5f0f",level:2},{value:"\u5168\u5c40\u6837\u5f0f",id:"\u5168\u5c40\u6837\u5f0f",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"Tailwind CSS",id:"tailwind-css",level:3},{value:"Sass",id:"sass",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"typescript",children:"TypeScript"}),"\n",(0,c.jsx)(n.p,{children:"\u5728 Web \u524d\u7aef\u9886\u57df\uff0c\u6709\u5f88\u591a\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684\u5e93\u548c\u6846\u67b6\uff0c\u5982 React\u3001Vue.js\u3001Solid.js \u548c Svelte\u3002\u5176\u4e2d\u7684\nReact \u662f\u4e00\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684\u5e93\uff0c\u5b83\u4f7f\u7528 JSX\uff08JavaScript XML\uff09\u4f5c\u4e3a\u8bed\u6cd5\u6269\u5c55\uff0c\u901a\u8fc7\u7ec4\u4ef6\u5316\u65b9\u5f0f\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u5c06\u7528\u6237\u754c\u9762\u62c6\u5206\u6210\u72ec\u7acb\u7684\u3001\u53ef\u91cd\u7528\u7684\u90e8\u5206\uff0c\u7b80\u5316\u4e86\u5f00\u53d1\u548c\u7ef4\u62a4\u7684\u8fc7\u7a0b\u3002\u6b64\u5916\uff0cCSS \u89e3\u51b3\u65b9\u6848\u5982 CSS Modules\u3001Sass \u548c Tailwind CSS \u4e5f\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u7ba1\u7406\u548c\u7ec4\u7ec7\u6837\u5f0f\u3002\u8fd8\u6709 Webpack\u3001rollup \u8fd9\u6837\u7684\u5de5\u5177\u7528\u4e8e\u7ba1\u7406\u3001\u6253\u5305\u8d44\u6e90\u6587\u4ef6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"TypeScript \u662f JavaScript \u7684\u8d85\u96c6\uff0c\u589e\u52a0\u4e86\u53ef\u9009\u7684\u9759\u6001\u7c7b\u578b\u548c\u57fa\u4e8e\u7c7b\u7684\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u3002\u9009\u62e9 TypeScript \u53ef\u4ee5\u66f4\u597d\u5730\u878d\u5408 Web \u524d\u7aef\u7684\u4e00\u4e9b\u6280\u672f\uff0c\u800c\u4e14\u501f\u52a9 JavaScript \u7684\u751f\u6001\u7cfb\u7edf\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5f00\u53d1\u4e00\u4e9b\u5de5\u5177\u548c\u5e93\u6765\u589e\u5f3a UI \u5f00\u53d1\u4f53\u9a8c\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u96c6\u6210 CSS Modules\u3001Sass \u548c Tailwind CSS \u7b49\u65b9\u6848\u89e3\u51b3 CSS \u6837\u5f0f\u95ee\u9898"}),"\n",(0,c.jsx)(n.li,{children:"\u63d0\u4f9b\u7c7b\u4f3c\u4e8e Webpack \u7684\u80fd\u529b\u6765\u7ec4\u7ec7\u3001\u52a0\u8f7d\u548c\u6253\u5305\u8d44\u6e90\u6587\u4ef6"}),"\n",(0,c.jsx)(n.li,{children:"\u6dfb\u52a0\u56fe\u6807\u5e93\u3001\u7ec4\u4ef6\u5e93\u3001\u5de5\u5177\u5e93\u6765\u7b80\u5316\u754c\u9762\u5f00\u53d1"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u7528 TypeScript\u3001JSX\u3001React \u518d\u642d\u914d\u5404\u79cd\u5de5\u5177\u548c\u5e93\u6765\u5f00\u53d1\u7528\u6237\u754c\u9762\uff0c\u76f8\u6bd4\u4e8e\u4f7f\u7528 C \u642d\u914d XML \u548c CSS \u6765\u7f16\u5199\u754c\u9762\uff0cReact \u7684\u58f0\u660e\u5f0f\u7f16\u7a0b\u65b9\u5f0f\u4f7f\u5f97\u72b6\u6001\u7ed1\u5b9a\u3001\u4e8b\u4ef6\u7ed1\u5b9a\u3001\u6761\u4ef6\u6e32\u67d3\u3001\u5217\u8868\u6e32\u67d3\u548c\u8d44\u6e90\u5f15\u5165\u66f4\u52a0\u7b80\u6d01\u548c\u76f4\u89c2\u3002\u4f7f\u7528 JSX \u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u5728\u540c\u4e00\u6587\u4ef6\u4e2d\u5904\u7406\u903b\u8f91\u548c\u89c6\u56fe\uff0c\u51cf\u5c11\u4e86\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u5f00\u53d1\u6548\u7387\u4e5f\u66f4\u9ad8\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u7528\u6cd5\u6982\u89c8",children:"\u7528\u6cd5\u6982\u89c8"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u7528\u62c5\u5fc3\uff0c\u4f60\u65e0\u9700\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u53bb\u6df1\u5165\u5b66\u4e60 TypeScript \u8bed\u8a00\uff0c\u56e0\u4e3a\u7528\u6237\u754c\u9762\u76f8\u5173\u7684\u4ee3\u7801\u4ec5\u6d89\u53ca\u4e00\u4e9b\u57fa\u672c\u4e14\u5e38\u89c1\u7684\u8bed\u6cd5\uff0c\u6240\u4ee5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4f60\u53ea\u9700\u8981\u53c2\u8003\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u6765\u7f16\u5199\u5373\u53ef\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { useState, TextInput, Button, useRef, Text } from "@lcui/react";\nimport { EmojiSparkle } from "@lcui/react-icons";\n\nexport default function App() {\n  const inputRef = useRef();\n  const [name, setName] = useState("LCUI");\n\n  return (\n    <div className="container">\n      <div className="flex flex-col items-center pt-6">\n        <EmojiSparkle fontSize={40} className="text-yellow-500" />\n        <Text className="my-4 text-2xl text-center">Hello, {name}!</Text>\n        <TextInput\n          $ref={inputRef}\n          className="mt-2"\n          placeholder="Please input..."\n        />\n        <Button\n          className="mt-2"\n          onClick={() => setName(inputRef.current.value)}\n        >\n          Change\n        </Button>\n      </div>\n    </div>\n  );\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u5e38\u7528\u8bed\u6cd5",children:"\u5e38\u7528\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.h3,{id:"import",children:(0,c.jsx)(n.code,{children:"import"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5bfc\u5165\u7531\u53e6\u4e00\u4e2a\u6a21\u5757\u5bfc\u51fa\u7684\u7ed1\u5b9a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"import"})," \u8bed\u53e5\u5f15\u5165 JavaScript \u6a21\u5757\u3001\u56fe\u7247\u3001CSS \u6837\u5f0f\u6587\u4ef6\u3001\u5b57\u4f53\u6587\u4ef6\u7b49\u6587\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import"})]})}),"\n",(0,c.jsx)(n.h3,{id:"export",children:(0,c.jsx)(n.code,{children:"export"})}),"\n",(0,c.jsx)(n.p,{children:"\u5bfc\u51fa\u503c\u3002\u4e0e default \u7ec4\u5408\u4f7f\u7528\u65f6\u8868\u793a\u58f0\u660e\u4e3a\u9ed8\u8ba4\u5bfc\u51fa\u3002"}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export"})]})}),"\n",(0,c.jsx)(n.h3,{id:"const",children:(0,c.jsx)(n.code,{children:"const"})}),"\n",(0,c.jsx)(n.p,{children:"\u58f0\u660e\u7528\u4e8e\u58f0\u660e\u5757\u4f5c\u7528\u57df\u7684\u5c40\u90e8\u53d8\u91cf\u3002"}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const"})]})}),"\n",(0,c.jsx)(n.h2,{id:"\u5f00\u53d1\u5de5\u5177",children:"\u5f00\u53d1\u5de5\u5177"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@lcui/cli"})," \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u96c6\u6210\u4e86\u5305\u62ec TypeScript \u7f16\u8bd1\u5668\u3001Sass \u9884\u5904\u7406\u5668\u3001\u8d44\u6e90\u6587\u4ef6\u52a0\u8f7d\u5668\u7b49\u5728\u5185\u7684\u4e00\u4e9b\u4e0e LCUI \u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u76f8\u5173\u7684\u529f\u80fd\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u4f9d\u8d56 JavaScript \u8fd0\u884c\u65f6\u73af\u5883\uff0c\u4f60\u9700\u8981\u5148",(0,c.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"\u5b89\u88c5 Node.js"}),"\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u5b83\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install -g @lcui/cli\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u9884\u5904\u7406",children:"\u9884\u5904\u7406"}),"\n",(0,c.jsx)(n.p,{children:"LCUI \u6240\u91c7\u7528\u7684 TypeScript \u652f\u6301\u65b9\u6848\u662f\u9884\u5904\u7406\u5668\uff0c\u76f8\u8f83\u4e8e\u5185\u7f6e JavaScript \u5f15\u64ce\u548c JavaScript \u5230 C \u7684\u7f16\u8bd1\u5668\u8fd9\u4e24\u79cd\u65b9\u6848\uff0c\u5b83\u7684\u5b9e\u73b0\u6210\u672c\u548c\u590d\u6742\u5ea6\u90fd\u6bd4\u8f83\u4f4e\uff0c\u800c\u4e14\u672a\u6765\u4e5f\u53ef\u4ee5\u589e\u52a0\u5bf9\u90e8\u5206 JavaScript \u8bed\u6cd5\u7684\u7f16\u8bd1\u80fd\u529b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u9884\u5904\u7406\u5668\u7684\u6587\u4ef6\u52a0\u8f7d\u65b9\u5f0f\u53c2\u8003\u4e86 Webpack\uff0c\u7531\u52a0\u8f7d\u5668\uff08Loader\uff09\u63d0\u4f9b\u7279\u5b9a\u7c7b\u578b\u6587\u4ef6\u7684\u52a0\u8f7d\u548c\u7f16\u8bd1\u80fd\u529b\uff0c\u6839\u636e\u6587\u4ef6\u540e\u7f00\u540d\u6765\u5339\u914d\u5408\u9002\u7684\u52a0\u8f7d\u5668\u3002\u9884\u5904\u7406\u5668\u5728\u5904\u7406 TypeScript \u6587\u4ef6\u65f6\uff0c\u4f1a\u5148\u8c03\u7528 TypeScript \u52a0\u8f7d\u5668\u89e3\u6790\u6587\u4ef6\u5185\u7684\u4ee3\u7801\uff0c\u83b7\u53d6\u5176\u4f9d\u8d56\u7684\u6a21\u5757\u5e76\u52a0\u8f7d\u5b83\u4eec\uff0c\u7136\u540e\u5c06\u8be5\u6587\u4ef6\u8f6c\u6362\u4e3a JavaScript \u6a21\u5757\uff0c\u4e4b\u540e\u6267\u884c\u5b83\uff0c\u6839\u636e\u7ec4\u4ef6\u51fd\u6570\u5185\u90e8\u7684\u51fd\u6570\u8c03\u7528\u884c\u4e3a\u548c\u8fd4\u56de\u7ed3\u679c\uff0c\u751f\u6210\u76f8\u5e94\u7684 C \u6e90\u6587\u4ef6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e00\u5904\u7406\u8fc7\u7a0b\u4e0e C \u7f16\u8bd1\u5668\u7684\u9884\u5904\u7406\u7c7b\u4f3c\uff0c\u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a\u4f60\u5199\u7684 tsx \u6587\u4ef6\u662f\u914d\u7f6e\u6587\u4ef6\uff0c\u91cc\u9762\u7684 TypeScript \u4ee3\u7801\u90fd\u662f\u9884\u5904\u7406\u6307\u4ee4\uff0c\u5b83\u53ea\u5728\u9884\u5904\u7406\u9636\u6bb5\u6267\u884c\uff0c\u5e76\u4e0d\u4f1a\u6210\u4e3a\u8fd0\u884c\u65f6\u4ee3\u7801\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"react-\u5e93",children:"React \u5e93"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@lcui/react"})," \u662f\u4e00\u4e2a\u9488\u5bf9 LCUI \u7684\u7279\u6027\u548c\u9884\u5904\u7406\u5668\u5de5\u4f5c\u6a21\u5f0f\u7684\u7528\u6237\u754c\u9762\u5e93\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9884\u7f6e\u7ec4\u4ef6\u3001\u5de5\u5177\u51fd\u6570\u4ee5\u53ca Hook \u51fd\u6570\u3002\u5b83\u76f8\u5f53\u4e8e LCUI \u7248\u7684 React \u5e93\uff0c\u8ba9\u4f60\u53ef\u4ee5\u50cf\u5199 React \u7ec4\u4ef6\u4e00\u6837\u5199 LCUI \u7684\u7ec4\u4ef6\u3002\u4e0d\u8fc7\uff0c\u5b83\u76ee\u524d\u63d0\u4f9b\u7684\u529f\u80fd\u5f88\u6709\u9650\uff0c\u4f60\u53ea\u80fd\u58f0\u660e\u7ec4\u4ef6\u7684\u72b6\u6001\u3001\u6570\u636e\u7ed1\u5b9a\u548c\u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u5bf9\u4e8e\u6761\u4ef6\u6e32\u67d3\u3001\u5217\u8868\u6e32\u67d3\u7b49\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u4f60\u4ecd\u9700\u8981\u7f16\u5199 C \u4ee3\u7801\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install @lcui/react\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7ec4\u4ef6\u51fd\u6570",children:"\u7ec4\u4ef6\u51fd\u6570"}),"\n",(0,c.jsxs)(n.p,{children:["\u9884\u5904\u7406\u5668\u7684 TypeScript \u52a0\u8f7d\u5668\u4f1a\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"@lcui/react"})," \u5e93\u7684 ",(0,c.jsx)(n.code,{children:"render"})," \u51fd\u6570\u6765\u6e32\u67d3\u7ec4\u4ef6\uff0c\u5176\u5185\u90e8\u5b9e\u73b0\u5c31\u662f\u76f4\u63a5\u6267\u884c\u7ec4\u4ef6\u51fd\u6570\uff0c\u6536\u96c6\u7ec4\u4ef6\u51fd\u6570\u5185\u6267\u884c\u7684 ",(0,c.jsx)(n.code,{children:"useState"}),"\u3001",(0,c.jsx)(n.code,{children:"useRef"})," \u7b49\u51fd\u6570\u4ea7\u51fa\u7684\u6570\u636e\u548c\u7ec4\u4ef6\u51fd\u6570\u8fd4\u56de\u7684 JSX \u5143\u7d20\uff0c\u7136\u540e\u8f6c\u6362\u6210 C \u4ee3\u7801\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7ec4\u4ef6\u51fd\u6570\u8fd4\u56de\u503c\u7684\u5fc5\u987b\u662f\u4e00\u4e2a JSX \u5143\u7d20\uff0c\u4e0d\u80fd\u662f ",(0,c.jsx)(n.code,{children:"<Fragment>"}),"\u3001null\u3001undefined\u3001\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u7b49\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6682\u4e0d\u652f\u6301\u58f0\u660e\u548c\u4f20\u9012\u7ec4\u4ef6 ",(0,c.jsx)(n.code,{children:"props"})," \u53c2\u6570\u3002"]}),"\n"]})}),"\n",(0,c.jsx)(n.h3,{id:"\u72b6\u6001\u7ba1\u7406",children:"\u72b6\u6001\u7ba1\u7406"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u51fd\u6570\u7528\u4e8e\u4e3a\u7ec4\u4ef6\u58f0\u660e\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { useState } from '@lcui/react';\n\nfunction MyComponent() {\n  const [age, setAge] = useState(23);\n  const [name, setName] = useState('Taylor');\n  // ...\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6309\u7167\u60ef\u4f8b\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://javascript.info/destructuring-assignment",children:"\u6570\u7ec4\u89e3\u6784"})," \u6765\u547d\u540d\u72b6\u6001\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"[something, setSomething]"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u8fd4\u56de\u4e00\u4e2a\u53ea\u5305\u542b\u4e24\u4e2a\u9879\u7684\u6570\u7ec4\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8be5\u72b6\u6001\u53d8\u91cf\uff0c\u521d\u59cb\u503c\u4e3a\u4f60\u4f20\u7ed9 ",(0,c.jsx)(n.code,{children:"useState"})," \u7684\u503c\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"set \u51fd\u6570\uff0c\u5b83\u5141\u8bb8\u4f60\u5728\u54cd\u5e94\u4ea4\u4e92\u65f6\u5c06\u72b6\u6001\u53d8\u91cf\u66f4\u6539\u4e3a\u4efb\u4f55\u5176\u4ed6\u503c\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u51fd\u6570\u4f1a\u4e3a\u7ec4\u4ef6\u7684\u72b6\u6001\u7ed3\u6784\u4f53\u6dfb\u52a0\u4e00\u4e2a\u6210\u5458\uff0c\u7136\u540e\u5728\u7ec4\u4ef6\u7684\u72b6\u6001\u521d\u59cb\u5316\u51fd\u6570\u4e2d\u6dfb\u52a0\u8be5\u6210\u5458\u7684\u521d\u59cb\u5316\u4ee3\u7801\u3002\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u4e3a\u4f8b\uff0c",(0,c.jsx)(n.code,{children:"useState"})," \u51fd\u6570\u4f1a\u751f\u6210\u4ee5\u4e0b C \u4ee3\u7801\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"// \u7ec4\u4ef6\u72b6\u6001\u7ed3\u6784\u4f53\nstruct MyComponent_state {\n  int age;\n  char *name;\n};\n\n// \u7ec4\u4ef6\u521d\u59cb\u5316\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\n_that->state.age = 23;\n_that->state.name = strdup2('Taylor');\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u72b6\u6001\u7684 set \u51fd\u6570\u4f1a\u5728\u5f53\u524d\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u63d2\u5165\u7528\u4e8e\u53d8\u66f4\u72b6\u6001\u7684 C \u4ee3\u7801\uff0c\u4f8b\u5982\u6267\u884c ",(0,c.jsx)(n.code,{children:"setAge(30)"}),"\uff0c\u4f1a\u751f\u6210\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"_that->state.age = 30;\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"})," \u7684\u53c2\u6570\u53ea\u80fd\u662f string\u3001number \u7c7b\u578b\u3002"]})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u53c2\u8003 React \u6587\u6863\uff1a",(0,c.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react/useState",children:"https://zh-hans.react.dev/reference/react/useState"})]})}),"\n",(0,c.jsx)(n.h3,{id:"\u5f15\u7528",children:"\u5f15\u7528"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u64cd\u4f5c\u7279\u5b9a\u7684\u7ec4\u4ef6\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u521b\u5efa\u4e00\u4e2a\u53d8\u91cf\u6765\u5f15\u7528\u8be5\u7ec4\u4ef6\u5bf9\u8c61\u3002\u5728 JSX \u4e2d\u8fd9\u4e00\u521b\u5efa\u64cd\u4f5c\u53ef\u4ee5\u9760\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"$ref"})," \u5c5e\u6027\u6765\u5b8c\u6210\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'<Input $ref="input" />\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u5728 C \u4ee3\u7801\u4e2d\u4f7f\u7528\u5b83\u6765\u64cd\u4f5c\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'ui_textinput_set_content(_that->refs.input, "hello");\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u4e3a\u4ec0\u4e48\u4e0d\u547d\u540d\u4e3a ",(0,c.jsx)(n.code,{children:"ref"}),"\uff1f\u56e0\u4e3a\u5728 React \u4e2d\u4f20\u9012 ",(0,c.jsx)(n.code,{children:"ref"})," \u9700\u8981\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://react.docschina.org/reference/react/forwardRef",children:(0,c.jsx)(n.code,{children:"forwardRef"})})," \u51fd\u6570\uff0c\u5199\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\u3002"]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"$ref"})," \u5c5e\u6027\u7684\u503c\u8fd8\u53ef\u4ee5\u662f ",(0,c.jsx)(n.code,{children:"useRef"})," \u51fd\u6570\u8fd4\u56de\u7684\u5f15\u7528\u5bf9\u8c61\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { useRef } from '@lcui/react';\n\nfunction MyComponent() {\n  const inputRef = useRef();\n\n  return <Input $ref={inputRef} />\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u5f15\u7528\u5bf9\u8c61\u53ea\u6709\u5355\u4e2a ",(0,c.jsx)(n.code,{children:"current"})," \u5c5e\u6027\uff0c\u5b83\u7ed1\u5b9a\u4e86\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u5141\u8bb8\u4f60\u5728 TypeScript \u4e2d\u58f0\u660e\u5b83\u7684\u64cd\u4f5c\u65b9\u5f0f\u3002\u4e0d\u8fc7\uff0c\u76ee\u524d ",(0,c.jsx)(n.code,{children:"useRef"})," \u53ea\u5b9e\u73b0\u4e86 TextInput \u7ec4\u4ef6\u7684 value \u5c5e\u6027\u7684\u8bfb\u5199\u64cd\u4f5c\u7ed1\u5b9a\uff0c\u7528\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"inputRef.current.value = 'World';\n\n<Button onClick={() => setName(inputRef.current.value)}>Click</Button>\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@lcui/react"})," \u5e93\u7684 ",(0,c.jsx)(n.code,{children:"useRef"})," \u548c React \u5e93\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"useRef"})," \u4e0d\u4e00\u6837\uff0c\u4ec5\u7528\u4e8e\u5f15\u7528\u7279\u5b9a\u7684\u7ec4\u4ef6\u5bf9\u8c61\u3002"]})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u53c2\u8003 React \u6587\u6863\uff1a",(0,c.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react/useRef",children:"https://zh-hans.react.dev/reference/react/useRef"})]})}),"\n",(0,c.jsx)(n.h3,{id:"\u54cd\u5e94\u4e8b\u4ef6",children:"\u54cd\u5e94\u4e8b\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 JSX \u4e2d\u901a\u8fc7\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"on + \u4e8b\u4ef6\u540d"})," \u5c5e\u6027\u6765\u58f0\u660e\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u4f8b\u5982\u58f0\u660e\u6309\u94ae\u7684\u70b9\u51fb\uff08Click\uff09\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'export default function Button() {\n  return (\n    <Button onClick="handleClick">\n      \u70b9\u6211\n    </Button>\n  );\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u9884\u5904\u7406\u5668\u5c06\u4f1a\u751f\u6210\u8fd9\u6837\u7684 C \u4ee3\u7801\u6765\u7ed1\u5b9a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'ui_widget_on(_that->refs.ref_0, "click", handleClick, w);\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5c06 JavaScript \u7684\u51fd\u6570\u4e0e\u4e8b\u4ef6\u7ed1\u5b9a\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { useState, Text, Button } from '@lcui/react';\n\nexport default function Button() {\n  const [text, setText] = useState(\"\u70b9\u6211\");\n\n  function handleClick() {\n    setText('\u4f60\u5df2\u70b9\u51fb');\n  }\n\n  return (\n    <Button onClick={handleClick}>\n      {text}\n    </Button>\n  );\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9884\u5904\u7406\u5668\u4f1a\u6267\u884c\u8be5\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u6839\u636e\u5185\u90e8\u4ee3\u7801\u6267\u884c\u7ed3\u679c\uff0c\u4e3a\u5176\u751f\u6210 C \u8bed\u8a00\u7248\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsx)(n.p,{children:"\u6682\u65f6\u53ea\u652f\u6301\u5728\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6267\u884c\u72b6\u6001\u53d8\u91cf\u7684 set \u51fd\u6570\uff0c\u4e0d\u652f\u6301\u8bbf\u95ee\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u4e0d\u652f\u6301\u6267\u884c\u5176\u5b83\u8bed\u53e5"})}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u8bf7\u53c2\u8003 React \u6587\u6863\uff1a",(0,c.jsx)(n.a,{href:"https://zh-hans.react.dev/learn/responding-to-events",children:"https://zh-hans.react.dev/learn/responding-to-events"})]})}),"\n",(0,c.jsx)(n.h3,{id:"\u6761\u4ef6\u6e32\u67d3",children:"\u6761\u4ef6\u6e32\u67d3"}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:["\u6682\u4e0d\u652f\u6301\u3002\n\u6211\u4eec\u6b63\u8003\u8651\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"<Show>"})," \u7ec4\u4ef6\u5b9e\u73b0\u6761\u4ef6\u6e32\u67d3\uff0c\u53c2\u8003 ",(0,c.jsxs)(n.a,{href:"https://www.solidjs.com/docs/latest/api#show",children:["Solid.js - ",(0,c.jsx)(n.code,{children:"<Show>"})]})]})}),"\n",(0,c.jsx)(n.h3,{id:"\u6e32\u67d3\u5217\u8868",children:"\u6e32\u67d3\u5217\u8868"}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsxs)(n.p,{children:["\u6682\u4e0d\u652f\u6301\u3002\n\u6211\u4eec\u6b63\u8003\u8651\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"<For>"})," \u7ec4\u4ef6\u5b9e\u73b0\u6570\u7ec4\u904d\u5386\uff0c\u53c2\u8003 ",(0,c.jsxs)(n.a,{href:"https://www.solidjs.com/docs/latest/api#for",children:["Solid.js - ",(0,c.jsx)(n.code,{children:"<For>"})]})]})}),"\n",(0,c.jsx)(n.h2,{id:"\u56fe\u6807\u5e93",children:"\u56fe\u6807\u5e93"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://gitee.com/lcui-dev/fluent-ui-system-icons",children:"@lcui/react-icons"})," \u662f\u4e13\u4e3a LCUI \u9002\u914d\u7684\u56fe\u6807\u5e93\uff0c\u56fe\u6807\u90fd\u6765\u81ea ",(0,c.jsx)(n.a,{href:"https://github.com/microsoft/fluentui-system-icons",children:"fluentui-system-icons"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install @lcui/icons\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 fluentui-system-icons \u9879\u76ee\u63d0\u4f9b\u7684 ",(0,c.jsx)(n.a,{href:"https://aka.ms/fluentui-system-icons",children:"aka.ms/fluentui-system-icons"})," \u9875\u9762\u91cc\u9009\u53d6\u56fe\u6807\u3002\u4ee5\u653e\u5927\u56fe\u6807\u4e3a\u4f8b\uff0c\u82f1\u6587\u540d\u901a\u5e38\u662f Zoom In\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fd9\u6837\u641c\u7d22\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u9009\u53d6\u56fe\u6807",src:s(5520).A+"",width:"638",height:"224"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece\u4e0a\u56fe\u53ef\u770b\u51fa fluentui-system-icons \u7684\u56fe\u6807\u6709 16\u300120\u300124 \u7b49\u51e0\u79cd\u5c3a\u5bf8\u53ef\u9009\uff0c\u56fe\u6807\u547d\u540d\u65b9\u5f0f\u662f\u56fe\u6807\u540d+\u5c3a\u5bf8+\u98ce\u683c\u3002",(0,c.jsx)(n.code,{children:"@lcui/react-icons"})," \u56fe\u6807\u5e93\u7684\u547d\u540d\u65b9\u5f0f\u662f\u56fe\u6807\u540d+\u98ce\u683c\uff0c\u5f53\u98ce\u683c\u4e3a Regular \u65f6\u53ef\u4ee5\u7701\u7565\u5b83\u3002\u5177\u4f53\u7528\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { ZoomIn } from "@lcui/react-icons";\n\n<ZoomIn />\n'})}),"\n",(0,c.jsxs)(n.p,{children:["fluentui-system-icons \u63d0\u4f9b\u7684\u51e0\u79cd\u5c3a\u5bf8\u56fe\u6807\u662f\u9488\u5bf9\u8be5\u5c3a\u5bf8\u4f18\u5316\u7684\uff0c\u770b\u8d77\u6765\u90fd\u662f\u50cf\u7d20\u5b8c\u7f8e\u7684\u3002",(0,c.jsx)(n.code,{children:"@lcui/react-icons"})," \u7684\u56fe\u6807\u4f7f\u7528\u7684\u5c3a\u5bf8\u9ed8\u8ba4\u662f 20\uff0c\u5982\u679c\u4f60\u7684\u56fe\u6807\u5c3a\u5bf8\u56fa\u5b9a\uff0c\u4e14\u5e0c\u671b\u56fe\u6807\u6709\u66f4\u597d\u7684\u6e32\u67d3\u6548\u679c\uff0c\u5219\u53ef\u4ee5\u6307\u5b9a size \u53c2\u6570\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<ZoomIn size={32} />\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6837\u5f0f",children:"\u6837\u5f0f"}),"\n",(0,c.jsx)(n.p,{children:"\u9884\u5904\u7406\u5668\u652f\u6301\u591a\u79cd\u6837\u5f0f\u8bbe\u7f6e\u65b9\u5f0f\uff0c\u5305\u62ec\u5168\u5c40 CSS\u3001CSS Modules\u3001Tailwind CSS\u3001Sass\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u5168\u5c40\u6837\u5f0f",children:"\u5168\u5c40\u6837\u5f0f"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"import"})," \u8bed\u53e5\u4ece CSS \u6587\u4ef6\u5f15\u5165\u7684 CSS \u6837\u5f0f\u662f\u5168\u5c40\u751f\u6548\u7684\u3002\u5bf9\u4e8e\u90a3\u4e9b\u6709\u4f20\u7edf CSS \u7ecf\u9a8c\u7684\u4eba\u6765\u8bf4\uff0c\u4f7f\u7528\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4e5f\u5f88\u719f\u6089\uff0c\u4f46\u968f\u7740\u5e94\u7528\u7a0b\u5e8f\u7684\u53d1\u5c55\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6837\u5f0f\u8d8a\u6765\u8d8a\u96be\u4ee5\u7ba1\u7406\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"css-modules",children:"CSS Modules"}),"\n",(0,c.jsx)(n.p,{children:"CSS \u7684\u4f5c\u7528\u57df\u662f\u5168\u5c40\u7684\uff0c\u5982\u679c\u4f60\u62c5\u5fc3\u6837\u5f0f\u51b2\u7a81\uff0c\u5219\u53ef\u4ee5\u91c7\u7528 CSS Modules \u65b9\u6848\u6765\u521b\u5efa\u5c40\u90e8\u4f5c\u7528\u57df\u7684 CSS \u7c7b\u4ee5\u907f\u514d\u547d\u540d\u51b2\u7a81\u5e76\u63d0\u9ad8\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6dfb\u52a0 ",(0,c.jsx)(n.code,{children:".module.css"})," \u540e\u7f00\u7684\u6587\u4ef6\uff0c\u5199\u5165 CSS \u4ee3\u7801\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-css",metastring:"title=MyComponent.module.css",children:".card {\n  border: 1px solid #eee;\n  border-radius: 4px;\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,c.jsx)(n.code,{children:".tsx"})," \u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"import"})," \u8bed\u53e5\u5bfc\u5165\u5b83\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",metastring:"title=MyComponent.tsx",children:"import styles from './MyComponent.module.css'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e4b\u540e\u5c06 JSX \u8868\u8fbe\u5f0f\u4e2d\u7684\u8d4b\u7ed9 className \u5c5e\u6027\u7684\u5b57\u7b26\u4e32\u66ff\u6362\u6210 styles \u7684\u5bf9\u5e94\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-diff",children:'- <div className="card" />\n+ <div className={styles.card} />\n'})}),"\n",(0,c.jsx)(n.h3,{id:"tailwind-css",children:"Tailwind CSS"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://tailwindcss.com/",children:"Tailwind CSS"})," \u662f\u4e00\u4e2a\u529f\u80fd\u7c7b\u4f18\u5148\uff08Utility-First\uff09\u7684 CSS \u6846\u67b6\uff0c\u5b83\u901a\u8fc7\u63d0\u4f9b\u4e00\u7cfb\u5217\u9884\u5b9a\u4e49\u7684 CSS \u7c7b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u3001\u7075\u6d3b\u5730\u4e3a\u7ec4\u4ef6\u8bbe\u7f6e\u6837\u5f0f\u3002\u76f8\u6bd4\u4f20\u7edf\u7684 CSS \u7f16\u5199\u65b9\u5f0f\uff0c\u4f60\u65e0\u9700\u518d\u82b1\u8d39\u65f6\u95f4\u53bb\u65b0\u5efa CSS \u6587\u4ef6\u3001\u7f16\u5199 CSS \u89c4\u5219\u4ee5\u53ca\u601d\u8003 CSS \u7c7b\u540d\u5982\u4f55\u547d\u540d\u3002\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5b83\u53ef\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u7ec4\u4ef6\u4ee3\u7801\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u5b83\u548c\u76f8\u5173\u4f9d\u8d56\u9879\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install -D tailwindcss postcss @thedutchcoder/postcss-rem-to-px\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e4b\u540e\uff0c\u5c06 ",(0,c.jsx)(n.a,{href:"https://github.com/lcui-dev/lcui-quick-start",children:"lcui-quick-start"})," \u6a21\u677f\u9879\u76ee\u4e2d\u7684 ",(0,c.jsx)(n.a,{href:"https://github.com/lcui-dev/lcui-quick-start/blob/develop/postcss.config.js",children:"postcss.config.js"}),"\u3001",(0,c.jsx)(n.a,{href:"https://github.com/lcui-dev/lcui-quick-start/blob/develop/tailwind.config.js",children:"tailwind.config.js"}),"\u3001",(0,c.jsx)(n.a,{href:"https://github.com/lcui-dev/lcui-quick-start/blob/develop/app/global.css",children:"app/global.css"})," \u8fd9\u51e0\u4e2a\u6587\u4ef6\u590d\u5236\u5230\u4f60\u7684\u9879\u76ee\u6e90\u7801\u76ee\u5f55\u5185\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u60f3\u5c06 global.css \u653e\u5230 app \u76ee\u5f55\u5185\uff0c\u8bf7\u66f4\u6539 tailwindcss.config.js \u6587\u4ef6\u5185\u7684 content \u914d\u7f6e\u9879\u7684\u8def\u5f84\u5339\u914d\u89c4\u5219\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"sass",children:"Sass"}),"\n",(0,c.jsx)(n.p,{children:"\u4e00\u4e2a\u6d41\u884c\u7684 CSS \u9884\u5904\u7406\u5668\uff0c\u5b83\u901a\u8fc7\u53d8\u91cf\u3001\u5d4c\u5957\u89c4\u5219\u548c\u6df7\u5408\u5143\u7d20\u7b49\u529f\u80fd\u6269\u5c55 CSS\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u9884\u5904\u7406\u5668\u5df2\u7ecf\u5185\u7f6e\u4e86\u5b83\uff0c\u5728\u7f16\u8bd1 ",(0,c.jsx)(n.code,{children:".sass"})," \u548c ",(0,c.jsx)(n.code,{children:".scss"})," \u540e\u7f00\u7684\u6587\u4ef6\u65f6\u4f1a\u81ea\u52a8\u8c03\u7528 Sass \u9884\u5904\u7406\u5668\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},5520:(e,n,s)=>{s.d(n,{A:()=>c});const c=s.p+"assets/images/search-icons-8ad7245cc2647d57cacf7b96cb6f0f62.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var c=s(6540);const i={},t=c.createContext(i);function l(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);