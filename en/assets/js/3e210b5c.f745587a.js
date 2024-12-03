"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8262],{255:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"base/convention","title":"\u7ea6\u5b9a","description":"\u4ecb\u7ecd LCUI \u7684\u547d\u540d\u98ce\u683c\u548c\u63a8\u8350\u7684 LCUI \u5e94\u7528\u9879\u76ee\u7684\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\u3002","source":"@site/versioned_docs/version-2.x/base/convention.md","sourceDirName":"base","slug":"/base/convention","permalink":"/en/docs/2.x/base/convention","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/base/convention.md","tags":[],"version":"2.x","frontMatter":{"description":"\u4ecb\u7ecd LCUI \u7684\u547d\u540d\u98ce\u683c\u548c\u63a8\u8350\u7684 LCUI \u5e94\u7528\u9879\u76ee\u7684\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\u3002"},"sidebar":"docsSidebar","previous":{"title":"\u4ecb\u7ecd","permalink":"/en/docs/2.x/base/introduction"},"next":{"title":"XML","permalink":"/en/docs/2.x/base/xml-syntax"}}');var r=s(4848),l=s(8453);const c={description:"\u4ecb\u7ecd LCUI \u7684\u547d\u540d\u98ce\u683c\u548c\u63a8\u8350\u7684 LCUI \u5e94\u7528\u9879\u76ee\u7684\u4ee3\u7801\u7ec4\u7ec7\u65b9\u5f0f\u3002"},t="\u7ea6\u5b9a",d={},o=[{value:"\u547d\u540d\u7ea6\u5b9a",id:"\u547d\u540d\u7ea6\u5b9a",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:4},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:4},{value:"\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784",id:"\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u7ea6\u5b9a",children:"\u7ea6\u5b9a"})}),"\n",(0,r.jsx)(n.h3,{id:"\u547d\u540d\u7ea6\u5b9a",children:"\u547d\u540d\u7ea6\u5b9a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6b63\u5f0f\u5f00\u59cb\u4f7f\u7528 LCUI \u524d\uff0c\u6211\u4eec\u5148\u4e86\u89e3\u4e00\u4e0b LCUI \u7684\u547d\u540d\u7ea6\u5b9a\uff0c\u8fd9\u5c06\u6709\u52a9\u4e8e\u8bb0\u5fc6\u548c\u67e5\u627e\u4f60\u9700\u8981\u7684 API\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u516c\u5171\u7684\u6570\u636e\u7c7b\u578b\u90fd\u91c7\u7528\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5\uff08Camel-Case\uff09\uff0c\u5e76\u5e26\u6709 ",(0,r.jsx)(n.code,{children:"LCUI_"})," \u524d\u7f00\uff0c\u50cf\u94fe\u8868\uff08LinkedList\uff09\u3001\u7ea2\u9ed1\u6811\uff08RBTree\uff09 \u548c\u5b57\u5178\uff08Dict\uff09\u8fd9\u7c7b\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff0c\u7531\u4e8e\u540d\u79f0\u957f\u5ea6\u548c\u53ef\u66ff\u4ee3\u6027\uff0c\u672a\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"LCUI_"})," \u524d\u7f00\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u5e38\u4ee5\u6307\u9488\u5f62\u6001\u5f15\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u7684\u5b9a\u4e49\u4f1a\u662f\u8fd9\u6837\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"typedef struct LCUI_FooRec_*  LCUI_Foo;\n\ntypedef struct  LCUI_FooRec_\n{\n  /* fields for the 'foo' class */\n  ...\n\n} LCUI_FooRec;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u79cd\u5199\u6cd5\u53c2\u8003\u81ea FreeType\uff0c\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u53c2\u8003\u5b83\u7684\u8bbe\u8ba1\u6587\u6863\uff1a\u300a",(0,r.jsx)(n.a,{href:"https://www.freetype.org/freetype2/docs/design/design-3.html#section-1",children:"FreeType Design"}),"\u300b"]}),"\n",(0,r.jsx)(n.h4,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e LCUI \u5728\u5f00\u53d1\u521d\u671f\u5e76\u672a\u786e\u5b9a\u6700\u4f73\u7684\u547d\u540d\u98ce\u683c\uff0c\u53d7\u5230\u7ef4\u62a4\u4eba\u5458\u7684\u4e0d\u7a33\u5b9a\u7684\u7f16\u7a0b\u4e60\u60ef\u4ee5\u53ca\u5176\u5b83\u5f00\u6e90\u9879\u76ee\u7684\u5f71\u54cd\uff0c\u6bcf\u5f53\u5f15\u5165\u65b0\u529f\u80fd\u7684\u4ee3\u7801\u65f6\u5019\u90fd\u6709\u53ef\u80fd\u91c7\u7528\u5176\u5b83\u547d\u540d\u98ce\u683c\uff0c\u56e0\u6b64\uff0c\u4f60\u4f1a\u53d1\u73b0 LCUI \u7684\u6e90\u7801\u4e2d\u5b58\u5728\u591a\u79cd\u547d\u540d\u98ce\u683c\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u9762\u5411\u5bf9\u8c61 + \u9a7c\u5cf0\u98ce\u683c\uff1a"})," \u4f7f\u7528\u4e0e\u7c7b\u578b\u540d\u540c\u540d\u7684\u51fd\u6570\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\uff0c\u8be5\u5bf9\u8c61\u7684\u6240\u6709\u64cd\u4f5c\u51fd\u6570\u90fd\u4ee5\u7c7b\u578b\u540d\u5f00\u5934\uff0c\u5e76\u4ee5\u4e0b\u5212\u7ebf\u5206\u9694\uff0c\u5bf9\u8c61\u7684\u6790\u6784\u51fd\u6570\u540d\u79f0\u90fd\u662f Delete\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"LCUI_StyleSheet sheet1 = StyleSheet();\nLCUI_StyleSheet sheet2 = StyleSheet();\nStyleSheet_Merge(sheet1, sheet2);\nStyleSheet_Delete(sheet2);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LCUI_"})," ",(0,r.jsx)(n.strong,{children:"\u524d\u7f00 + \u9a7c\u5cf0\u98ce\u683c\uff1a"})," \u4f9d\u8d56 LCUI \u6838\u5fc3\u529f\u80fd\u7684\u516c\u5171\u51fd\u6570\u5927\u90fd\u91c7\u7528\u6b64\u98ce\u683c\uff0c\u6709\u7684\u51fd\u6570\u4e3a\u907f\u514d\u547d\u540d\u51b2\u7a81\u4e5f\u4f1a\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"LCUI_"})," \u524d\u7f00\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"LCUI_Init():\nLCUI_SetTimeout();\nLCUI_Quit();\nLCUI_Main();\nLCUI_EncodeString();\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u9a7c\u5cf0\u98ce\u683c\uff1a"})," \u51fd\u6570\u4ee5\u64cd\u4f5c\u5bf9\u8c61\u7684\u7c7b\u578b\u540d\u5f00\u5934\uff0c\u5e76\u4ee5\u4e0b\u5212\u7ebf\u5206\u9694\u5bf9\u8c61\u7c7b\u578b\u540d\u4e0e\u65b9\u6cd5\u540d\u3002\u5982\u679c\u51fd\u6570\u64cd\u4f5c\u7684\u5bf9\u8c61\u662f\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\u7684\u5168\u5c40\u5171\u4eab\u5bf9\u8c61\uff0c\u901a\u5e38\u8fd8\u4f1a\u52a0\u4e0a LCUI \u524d\u7f00\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"Widget_Append();\nDict_FetchValue();\nLinkedList_Append();\nLCUIFont_RenderBitmap();\nLCUIFont_LoadFile();\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"**\u5168\u5c0f\u5199\u98ce\u683c\uff1a**\u4e0e\u6807\u51c6\u5e93\u51fd\u6570\u7684\u547d\u540d\u98ce\u683c\u7c7b\u4f3c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"strhash();\nstrsplit();\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784",children:"\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"app/:"})," \u5e94\u7528\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e\u8fd0\u884c\u65f6\u6240\u9700\u7684\u8d44\u6e90\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"build/:"})," \u6784\u5efa\u5de5\u5177\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u5305\u542b\u4e00\u4e9b\u914d\u7f6e\u6587\u4ef6\u548c\u6784\u5efa\u4ea7\u7269\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"config/:"})," \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"include/:"})," \u5934\u6587\u4ef6\u76ee\u5f55\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"src/:"})," \u6e90\u7801\u76ee\u5f55\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"lib/:"})," \u57fa\u7840\u5e93\u76ee\u5f55\uff0c\u5305\u542b\u5e94\u7528\u7684\u6838\u5fc3\u529f\u80fd\u6e90\u7801\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ui/:"})," \u7528\u6237\u754c\u9762\u76ee\u5f55\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"components/:"})," \u7ec4\u4ef6\u76ee\u5f55\uff0c\u5305\u542b\u80fd\u591f\u5728\u7528\u6237\u754c\u9762\u4e2d\u590d\u7528\u7684\u57fa\u7840\u7ec4\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"effects/:"})," \u6548\u679c\u76ee\u5f55\uff0c\u5305\u542b\u4e00\u4e9b\u52a8\u6548\u3001\u624b\u52bf\u3001\u62d6\u62fd\u7b49\u754c\u9762\u4ea4\u4e92\u6548\u679c\u7684\u5b9e\u73b0\u6e90\u7801\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"views/:"})," \u89c6\u56fe\u76ee\u5f55\uff0c\u5305\u542b\u80fd\u591f\u5b8c\u6210\u7279\u5b9a\u529f\u80fd\u7684\u5b8c\u6574\u754c\u9762\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"app.c:"})," \u5e94\u7528\u7684\u5165\u53e3\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ui.c:"})," \u7528\u6237\u754c\u9762\u7684\u5165\u53e3\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"vendor/:"})," \u7b2c\u4e09\u65b9\u5e93\u76ee\u5f55\uff0c\u5305\u542b\u7b2c\u4e09\u65b9\u5e93\u7684\u5934\u6587\u4ef6\u548c\u5e93\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5f85\u529e\u4e8b\u9879",children:"\u5f85\u529e\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u91cd\u65b0\u8bbe\u8ba1\u7f16\u7801\u89c4\u8303"})}),"\n",(0,r.jsx)(n.p,{children:"\u53c2\u8003\u4e3b\u6d41\u7684 C \u5f00\u6e90\u9879\u76ee\u7684\u7f16\u7801\u98ce\u683c\uff0c\u4e3a LCUI \u8bbe\u8ba1\u6700\u4f73\u7f16\u7801\u89c4\u8303\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);