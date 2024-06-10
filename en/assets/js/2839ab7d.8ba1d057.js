"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2305],{2054:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var c=i(4848),s=i(8453);const l={description:"CSS \u6570\u636e\u5e93\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u548c\u76f8\u5173\u6982\u5ff5\u4ecb\u7ecd\u3002"},r="CSS \u6570\u636e\u5e93",d={id:"css/library",title:"CSS \u6570\u636e\u5e93",description:"CSS \u6570\u636e\u5e93\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u548c\u76f8\u5173\u6982\u5ff5\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/css/library.md",sourceDirName:"css",slug:"/css/library",permalink:"/en/docs/2.x/css/library",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/css/library.md",tags:[],version:"2.x",frontMatter:{description:"CSS \u6570\u636e\u5e93\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u548c\u76f8\u5173\u6982\u5ff5\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"CSS",permalink:"/en/docs/2.x/css/"},next:{title:"CSS \u89e3\u6790\u5668",permalink:"/en/docs/2.x/css/parser"}},t={},o=[{value:"\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u7b80\u5355\u7684\u4f8b\u5b50",level:3},{value:"\u672f\u8bed\u7ea6\u5b9a",id:"\u672f\u8bed\u7ea6\u5b9a",level:3},{value:"\u5b58\u50a8\u65b9\u5f0f",id:"\u5b58\u50a8\u65b9\u5f0f",level:3},{value:"\u67e5\u8be2\u65b9\u5f0f",id:"\u67e5\u8be2\u65b9\u5f0f",level:3},{value:"\u6dfb\u52a0 CSS \u5c5e\u6027",id:"\u6dfb\u52a0-css-\u5c5e\u6027",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"css-\u6570\u636e\u5e93",children:"CSS \u6570\u636e\u5e93"}),"\n",(0,c.jsx)(n.h3,{id:"\u7b80\u5355\u7684\u4f8b\u5b50",children:"\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u7b80\u5355\u7684\u5c55\u793a\u4e86\u5982\u4f55\u5b58\u50a8\u548c\u67e5\u8be2 CSS \u6837\u5f0f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/css_library.h>\n\nvoid PutStyleSheet(void)\n{\n    LCUI_Color black = RGB(0, 0, 0);\n    LCUI_Selector selector = Selector(".toolbar .button");\n    LCUI_StyleSheet stylesheet = StyleSheet();\n\n    SetStyle(stylesheet, key_color, black, color);\n    LCUI_PutStyleSheet(selector, stylesheet, NULL);\n    StyleSheet_Delete(stylesheet);\n    Selector_Delete(selector);\n}\n\nvoid GetStyleSheet(void)\n{\n    LCUI_Selector selector = Selector(".button");\n    LCUI_StyleSheet stylesheet = StyleSheet();\n    LCUI_GetStyleSheet(selector, stylesheet);\n    LCUI_PrintStyleSheet(stylesheet);\n    StyleSheet_Delete(stylesheet);\n    Selector_Delete(selector);\n}\n\nint main(void)\n{\n    LCUI_InitCSSLibrary();\n    PutStyleSheet();\n    GetStyleSheet();\n    LCUI_FreeCSSLibrary();\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u6211\u4eec\u53ef\u4ee5\u4e86\u89e3\u5230\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5728\u4f7f\u7528 CSS \u6570\u636e\u5e93\u524d\uff0c\u9700\u8981\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"LCUI_InitCSSLibrary()"})," \u521d\u59cb\u5316 CSS \u6570\u636e\u5e93\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u62e9\u5668\u662f\u5b58\u50a8\u548c\u67e5\u8be2 CSS \u6837\u5f0f\u7684\u4f9d\u636e\uff0cCSS \u6570\u636e\u5e93\u5f15\u64ce\u4f1a\u6839\u636e\u5b83\u6765\u9009\u62e9\u5408\u9002\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u6211\u4eec\u624b\u52a8\u521b\u5efa\u7684\u9009\u62e9\u5668\u548c\u6837\u5f0f\u8868\u5728\u4f7f\u7528\u5b8c\u540e\u90fd\u9700\u8981\u624b\u52a8\u9500\u6bc1\u3002"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"LCUI_PrintStyleSheet()"})," \u51fd\u6570\u7528\u4e8e\u4ee5 ",(0,c.jsx)(n.code,{children:"key: value"})," \u7684\u683c\u5f0f\u6253\u5370\u6837\u5f0f\u8868\u4e2d\u7684\u5185\u5bb9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5728\u4f7f\u7528\u5b8c CSS \u6570\u636e\u5e93\u540e\uff0c\u9700\u8981\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"LCUI_FreeCSSLibrary()"})," \u91ca\u653e CSS \u6570\u636e\u5e93\u5360\u7528\u7684\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u672f\u8bed\u7ea6\u5b9a",children:"\u672f\u8bed\u7ea6\u5b9a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u9009\u62e9\u5668\uff08Selector\uff09\u662f\u4e00\u4e2a\u5b9a\u4e49\u4e86 CSS \u6837\u5f0f\u4f5c\u7528\u5bf9\u8c61\u7684\u67e5\u627e\u89c4\u5219\u7684\u5b57\u7b26\u4e32\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u9009\u62e9\u5668\u7ed3\u70b9\uff08SelectorNode\uff09\u662f\u9009\u62e9\u5668\u7684\u7ec4\u6210\u5143\u7d20\uff0c\u76f8\u5f53\u4e8e\u94fe\u8868\u4e2d\u7684\u7ed3\u70b9\uff0c\u4f8b\u5982\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".btn.active .icon"})," \uff0c\u5b83\u7531  ",(0,c.jsx)(n.code,{children:".btn.active"})," \u548c ",(0,c.jsx)(n.code,{children:".icon"})," \u4e24\u4e2a\u9009\u62e9\u5668\u7ed3\u70b9\u7ec4\u6210\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u62e9\u5668\u5bf9\u8c61\u662f\u9009\u62e9\u5668\u5b57\u7b26\u4e32\u7ecf\u8fc7\u89e3\u6790\u540e\u7684\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u6743\u91cd\uff08rank\uff09\u7528\u4e8e\u8868\u793a\u9009\u62e9\u5668\u7684\u4f18\u5148\u7ea7\uff0c\u9009\u62e9\u5668\u89c4\u5219\u8d8a\u591a\uff0c\u6743\u91cd\u8d8a\u9ad8\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u6279\u6b21\uff08batch_num\uff09\u662f\u4e00\u4e2a\u8bb0\u5f55\u6837\u5f0f\u8868\u52a0\u8f7d\u987a\u5e8f\u7684\u7f16\u53f7\uff0c\u5f53\u4e24\u5f20\u6837\u5f0f\u8868\u7684\u6743\u91cd\u4e00\u6837\u65f6\u5219\u4f18\u5148\u4f7f\u7528\u6279\u6b21\u5927\u7684\u6837\u5f0f\u8868\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5b58\u50a8\u65b9\u5f0f",children:"\u5b58\u50a8\u65b9\u5f0f"}),"\n",(0,c.jsx)(n.p,{children:"\u6837\u5f0f\u6570\u636e\u5e93\u7531\u5982\u4e0b\u6570\u636e\u7ed3\u6784\u7ec4\u6210\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"**\u6837\u5f0f\u7ec4\u94fe\u8868\uff08LinkedList\uff09\uff1a**\u5b58\u50a8\u6240\u6709\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsx)(n.li,{children:"**\u6837\u5f0f\u7ec4\uff08Dict\uff09\uff1a**\u5b58\u50a8\u6837\u5f0f\u94fe\u63a5\u7ec4\u7684\u54c8\u5e0c\u8868\uff0c\u4ee5\u9009\u62e9\u5668\u8282\u70b9\u5168\u79f0\u4f5c\u4e3a\u7d22\u5f15\u952e\u3002"}),"\n",(0,c.jsx)(n.li,{children:"**\u6837\u5f0f\u94fe\u63a5\u7ec4\uff08StyleLinkGroup\uff09\uff1a**\u5b58\u50a8\u9009\u62e9\u5668\u7ed3\u70b9\u548c\u6837\u5f0f\u94fe\u63a5\u8868\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["**\u6837\u5f0f\u94fe\u63a5\u8868\uff08Dict\uff09\uff1a**\u5b58\u50a8\u6837\u5f0f\u94fe\u63a5\uff0c\u4ee5\u540e\u4ee3\u9009\u62e9\u5668\u4f5c\u4e3a\u7d22\u5f15\u952e\u3002\u4f8b\u5982\u5f53\u524d\u9009\u62e9\u5668\u662f ",(0,c.jsx)(n.code,{children:".btn-group .btn .icon"})," \uff0c\u90a3\u4e48\u5b83\u7684\u540e\u4ee3\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".btn .icon"})," \u5c31\u4f1a\u88ab\u4f5c\u4e3a\u7d22\u5f15\u952e\u6765\u5b58\u653e\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["**\u6837\u5f0f\u94fe\u63a5\uff08StyleLink\uff09\uff1a**\u5b58\u50a8\u4e0e\u5f53\u524d\u9009\u62e9\u5668\u5339\u914d\u7684\u6837\u5f0f\u8868\u5217\u8868 ",(0,c.jsx)(n.code,{children:"styles"}),"\uff0c\u4ee5\u53ca\u94fe\u63a5\u5230\u7236\u7ea7\u6837\u5f0f\u7ec4\u7684\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"}),"\u3002\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"styles"})," \u662f\u4e2a\u7528\u4e8e\u5b58\u653e\u6837\u5f0f\u7ed3\u70b9\u7684\u94fe\u8868\uff0c\u800c ",(0,c.jsx)(n.code,{children:"parents"})," \u662f\u4e2a\u54c8\u5e0c\u8868\uff0c\u4ee5\u9009\u62e9\u5668\u7ed3\u70b9\u5168\u79f0\u4f5c\u4e3a\u7d22\u5f15\u952e\uff0c\u5b58\u653e\u4e0e\u7236\u7ea7\u6837\u5f0f\u7ec4\u7684\u94fe\u63a5\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"**\u6837\u5f0f\u7ed3\u70b9\uff08StyleNode\uff09\uff1a**\u5b58\u50a8\u6837\u5f0f\u8868\u3001\u9009\u62e9\u5668\u3001\u6743\u91cd\u3001\u6279\u6b21\uff0c\u4e3a\u4e86\u8282\u7701\u5185\u5b58\u5360\u7528\uff0c\u91c7\u7528\u94fe\u8868\u6765\u5b58\u653e\u5b9e\u9645\u7528\u5230\u7684\u6837\u5f0f\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u7eaf\u6587\u5b57\u7684\u63cf\u8ff0\u4e2d\u6211\u4eec\u53ef\u80fd\u5f88\u96be\u51c6\u786e\u60f3\u8c61\u51fa\u6574\u4e2a\u6570\u636e\u5e93\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u6211\u4eec\u518d\u770b\u770b\u8fd9\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u5047\u8bbe\u8981\u52a0\u8f7d\u7684 CSS \u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-css",children:".icon { font-size: 16px };\n.btn .icon { opactiy: 0.8 };\n.btn-group .btn .icon { color: #333 };\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7ecf\u8fc7\u52a0\u8f7d\u540e\uff0c\u5b83\u7684\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"CSS \u6570\u636e\u5e93\u7684\u5b58\u50a8\u7ed3\u6784",src:i(3884).A+"",width:"980",height:"380"})}),"\n",(0,c.jsx)(n.p,{children:"\u5b58\u50a8\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5b58\u50a8 ",(0,c.jsx)(n.code,{children:".icon"})," \u7684\u6837\u5f0f\u8868\u3002","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e00\u904d\u5faa\u73af\uff0c**\u4ece\u6700\u540e\u4e00\u4e2a\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".icon"})," \u5f00\u59cb\u904d\u5386\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 0 \u4e2a\u6837\u5f0f\u7ec4\uff0c\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u7ec4\u5217\u8868\u4e3a\u7a7a\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ece\u65b0\u5efa\u7684\u6837\u5f0f\u7ec4\u4e2d\u83b7\u53d6 ",(0,c.jsx)(n.code,{children:".icon"})," \u7d22\u5f15\u7684\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u56e0\u4e3a\u8be5\u6837\u5f0f\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u5e76\u4ee5 ",(0,c.jsx)(n.code,{children:".icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u56e0\u4e3a\u5f53\u524d\u662f\u7b2c 0 \u4e2a\u6837\u5f0f\u7ec4\uff0c\u6240\u4ee5\u5c06 ",(0,c.jsx)(n.code,{children:"*"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u6765\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u4e00\u4e2a\u6837\u5f0f\u94fe\u63a5\uff0c\u8bb0\u5f55\u5b83\u6240\u5c5e\u7684\u6837\u5f0f\u94fe\u63a5\u7ec4\u3001\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:"*"})," \uff0c\u7136\u540e\u4ee5 ",(0,c.jsx)(n.code,{children:"*"})," \u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u94fe\u63a5\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"**\u9009\u62e9\u5668\u904d\u5386\u7ed3\u675f\uff0c**\u65b0\u5efa\u6837\u5f0f\u7ed3\u70b9\u6570\u636e\uff0c\u5c06\u6837\u5f0f\u8868\u5b58\u653e\u5230\u8be5\u7ed3\u70b9\u4e2d\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5c06\u6837\u5f0f\u7ed3\u70b9\u6dfb\u52a0\u5230\u5f53\u524d\u9009\u4e2d\u7684\u6837\u5f0f\u94fe\u63a5\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5b58\u50a8 ",(0,c.jsx)(n.code,{children:".btn .icon"})," \u7684\u6837\u5f0f\u8868\u3002","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e00\u904d\u5faa\u73af\uff0c**\u4ece\u6700\u540e\u4e00\u4e2a\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".icon"})," \u5f00\u59cb\u904d\u5386\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 0 \u4e2a\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:".icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:"*"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u4ece\u8be5\u6837\u5f0f\u94fe\u63a5\u7ec4\u4e2d\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u9009\u62e9\u5668\u4e3a ",(0,c.jsx)(n.code,{children:".btn"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u7684\u7236\u6837\u5f0f\u7ec4\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e8c\u904d\u5faa\u73af\uff0c**\u904d\u5386\u5230\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".btn"})," \u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 1 \u4e2a\u6837\u5f0f\u7ec4\uff0c\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u7ec4\u5217\u8868\u4e3a\u7a7a\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:".btn"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002\u56e0\u4e3a\u8be5\u6837\u5f0f\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u5e76\u4ee5 ",(0,c.jsx)(n.code,{children:".btn"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5\u4e0a\u6b21\u8bb0\u5f55\u7684\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u4e00\u4e2a\u6837\u5f0f\u94fe\u63a5\uff0c\u8bb0\u5f55\u5b83\u6240\u5c5e\u7684\u6837\u5f0f\u94fe\u63a5\u7ec4\u3001\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".icon"})," \uff0c\u7136\u540e\u4ee5 ",(0,c.jsx)(n.code,{children:".icon"})," \u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u94fe\u63a5\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u9009\u62e9\u5668\u4e3a ",(0,c.jsx)(n.code,{children:".btn .icon"})," \u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5c06\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u4ee5 ",(0,c.jsx)(n.code,{children:".btn"})," \u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u4e0a\u6b21\u8bb0\u5f55\u7684\u7236\u6837\u5f0f\u7ec4\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"})," \u4e2d\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"**\u9009\u62e9\u5668\u904d\u5386\u7ed3\u675f\uff0c**\u65b0\u5efa\u6837\u5f0f\u7ed3\u70b9\u6570\u636e\uff0c\u5c06\u6837\u5f0f\u8868\u5b58\u653e\u5230\u8be5\u7ed3\u70b9\u4e2d\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5c06\u6837\u5f0f\u7ed3\u70b9\u6dfb\u52a0\u5230\u5f53\u524d\u9009\u4e2d\u7684\u6837\u5f0f\u94fe\u63a5\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5b58\u50a8 ",(0,c.jsx)(n.code,{children:".btn-group .btn .icon"})," \u7684\u6837\u5f0f\u8868\u3002","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e00\u904d\u5faa\u73af\uff0c**\u4ece\u6700\u540e\u4e00\u4e2a\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".icon"})," \u5f00\u59cb\u904d\u5386\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 0 \u4e2a\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:".icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:"*"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u4ece\u8be5\u6837\u5f0f\u94fe\u63a5\u7ec4\u4e2d\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u9009\u62e9\u5668\u4e3a ",(0,c.jsx)(n.code,{children:".btn"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u7684\u7236\u6837\u5f0f\u7ec4\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e8c\u904d\u5faa\u73af\uff0c**\u904d\u5386\u5230\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".btn"})," \u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 1 \u4e2a\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5 ",(0,c.jsx)(n.code,{children:".btn"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5\u4e0a\u6b21\u8bb0\u5f55\u7684\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u9009\u62e9\u5668\u4e3a ",(0,c.jsx)(n.code,{children:".btn .icon"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["**\u7b2c\u4e09\u904d\u5faa\u73af\uff0c**\u904d\u5386\u5230\u9009\u62e9\u5668\u7ed3\u70b9 ",(0,c.jsx)(n.code,{children:".btn-group"}),"\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9009\u4e2d\u7b2c 2 \u4e2a\u6837\u5f0f\u7ec4\uff0c\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u7ec4\u5217\u8868\u4e3a\u7a7a\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ece\u65b0\u5efa\u7684\u6837\u5f0f\u7ec4\u4e2d\u83b7\u53d6 ",(0,c.jsx)(n.code,{children:".btn-group"})," \u7d22\u5f15\u7684\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u56e0\u4e3a\u8be5\u6837\u5f0f\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u5e76\u4ee5 ",(0,c.jsx)(n.code,{children:".btn-group"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ee5\u4e0a\u6b21\u8bb0\u5f55\u7684\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".btn .icon"})," \u4f5c\u4e3a\u7d22\u5f15\u952e\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u56e0\u4e3a\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u7ec4\u662f\u7a7a\u7684\uff0c\u6240\u4ee5\u65b0\u5efa\u4e00\u4e2a\u6837\u5f0f\u94fe\u63a5\uff0c\u8bb0\u5f55\u5b83\u6240\u5c5e\u7684\u6837\u5f0f\u94fe\u63a5\u7ec4\u3001\u9009\u62e9\u5668 ",(0,c.jsx)(n.code,{children:".btn .icon"})," \uff0c\u7136\u540e\u4ee5 ",(0,c.jsx)(n.code,{children:".btn .icon"})," \u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u6837\u5f0f\u94fe\u63a5\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8bb0\u5f55\u5f53\u524d\u9009\u62e9\u5668\u4e3a ",(0,c.jsx)(n.code,{children:".btn-group .btn .icon"})," \u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5c06\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u4ee5 ",(0,c.jsx)(n.code,{children:".btn"})," \u4e3a\u7d22\u5f15\u952e\u6dfb\u52a0\u5230\u4e0a\u6b21\u8bb0\u5f55\u7684\u7236\u6837\u5f0f\u7ec4\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"})," \u4e2d\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"**\u9009\u62e9\u5668\u904d\u5386\u7ed3\u675f\uff0c**\u65b0\u5efa\u6837\u5f0f\u7ed3\u70b9\u6570\u636e\uff0c\u5c06\u6837\u5f0f\u8868\u5b58\u653e\u5230\u8be5\u7ed3\u70b9\u4e2d\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5c06\u6837\u5f0f\u7ed3\u70b9\u6dfb\u52a0\u5230\u5f53\u524d\u9009\u4e2d\u7684\u6837\u5f0f\u94fe\u63a5\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u5b58\u50a8\u8fc7\u7a0b\u770b\u4e0a\u53bb\u6bd4\u8f83\u590d\u6742\uff0c\u6211\u4eec\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u4e3a\uff1a\u4ece\u53f3\u81f3\u5de6\u904d\u5386\u9009\u62e9\u5668\uff0c\u6309\u7167\u6837\u5f0f\u7ec4 -> \u6837\u5f0f\u94fe\u63a5\u7ec4 -> \u6837\u5f0f\u94fe\u63a5\u8fd9\u6837\u7684\u987a\u5e8f\u8fdb\u884c\u67e5\u627e\uff0c\u5982\u679c\u76f8\u5173\u6570\u636e\u4e0d\u5b58\u5728\u5219\u8865\u5168\u5b83\uff0c\u67e5\u627e\u5b8c\u540e\u5c06\u6837\u5f0f\u8868\u6dfb\u52a0\u5230\u6700\u540e\u9009\u4e2d\u7684\u6837\u5f0f\u94fe\u63a5\u4e2d\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u91c7\u7528\u8fd9\u79cd\u5b58\u50a8\u7ed3\u6784\u7684\u597d\u5904\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u68c0\u67e5\u67d0\u4e2a\u7ec4\u4ef6\u7684\u9009\u62e9\u5668\u53d8\u5316\u540e\u662f\u5426\u9700\u8981\u66f4\u65b0\u5b50\u7ec4\u4ef6\u6837\u5f0f\uff0c\u4ee5\u8df3\u8fc7\u65e0\u7528\u7684\u8ba1\u7b97\u6837\u5f0f\u548c\u7ec4\u4ef6\u66f4\u65b0\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u50cf ",(0,c.jsx)(n.code,{children:":hover"})," \u548c ",(0,c.jsx)(n.code,{children:":active"})," \u8fd9\u4e24\u4e2a\u9009\u62e9\u5668\u5e38\u88ab\u7528\u4e8e\u5b9e\u73b0\u7ec4\u4ef6\u5bf9\u9f20\u6807\u64cd\u4f5c\u7684\u53cd\u9988\uff0c\u5b83\u4eec\u4e00\u822c\u88ab\u7528\u5728\u7ec4\u4ef6\u81ea\u8eab\u6216\u7236\u7ec4\u4ef6\u4e0a\uff0c\u5047\u8bbe\u8fd9\u79cd\u7ec4\u4ef6\u5728\u754c\u9762\u4e2d\u7684\u8def\u5f84\u662f ",(0,c.jsx)(n.code,{children:".window .list .list-item .btn-group .btn"}),"\uff0c\u5728\u7528\u6237\u64cd\u4f5c\u9f20\u6807\u89e6\u53d1 ",(0,c.jsx)(n.code,{children:".window"})," \u7ec4\u4ef6\u7684",(0,c.jsx)(n.code,{children:"hover"})," \u548c ",(0,c.jsx)(n.code,{children:"active"})," \u72b6\u6001\u53d8\u5316\u65f6\uff0c\u51fa\u4e8e\u6027\u80fd\u4e0a\u7684\u8003\u8651\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e0d\u66f4\u65b0\u4efb\u4f55\u7ec4\u4ef6\u80af\u5b9a\u662f\u6027\u80fd\u6700\u4f18\u7684\uff0c\u90a3\u4e48\u57fa\u4e8e\u73b0\u6709\u7684\u5b58\u50a8\u7ed3\u6784\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\u5c31\u80fd\u5224\u65ad\u662f\u5426\u9700\u8981\u66f4\u65b0\u5b50\u7ec4\u4ef6\u7684\u6837\u5f0f\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4ece\u7b2c\u4e00\u4e2a\u6837\u5f0f\u7ec4\uff08\u5373\uff1a",(0,c.jsx)(n.code,{children:"groups[1]"}),"\uff09 \u5f00\u59cb\uff0c\u904d\u5386\u6240\u6709\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u68c0\u67e5\u5b83\u4eec\u7684\u6837\u5f0f\u94fe\u63a5\u8868\u4e2d\u662f\u5426\u6709 ",(0,c.jsx)(n.code,{children:".btn"})," \u8bb0\u5f55\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u67e5\u8be2\u65b9\u5f0f",children:"\u67e5\u8be2\u65b9\u5f0f"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheet()"})," \u51fd\u6570\u8d1f\u8d23\u6837\u5f0f\u67e5\u8be2\uff0c\u5b83\u7684\u67e5\u8be2\u8fc7\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u4ece\u7b2c 0 \u4e2a\u6837\u5f0f\u7ec4\u5f00\u59cb\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4ece\u9009\u62e9\u5668\u7684\u6700\u540e\u4e00\u4e2a\u7ed3\u70b9\u5f00\u59cb\uff0c\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"SelectorNode_GetNames()"})," \u51fd\u6570\u751f\u6210\u8be5\u7ed3\u70b9\u7684\u6240\u6709\u540d\u79f0\u7ec4\u5408\uff0c\u4f8b\u5982\uff1a\u9009\u62e9\u5668\u7ed3\u70b9",(0,c.jsx)(n.code,{children:".icon:hover"})," \u7684\u7ec4\u5408\u7ec4\u5408\u6709 ",(0,c.jsx)(n.code,{children:".icon"})," \u3001",(0,c.jsx)(n.code,{children:".:hover"})," \u548c ",(0,c.jsx)(n.code,{children:".icon:hover"})," \u8fd9\u4e09\u79cd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u904d\u5386\u540d\u79f0\u7ec4\u5408\u5217\u8868\u3002","\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u4ee5\u540d\u79f0\u7ec4\u5408\u4f5c\u4e3a\u7d22\u5f15\u952e\uff0c\u4ece\u6837\u5f0f\u7ec4\u4e2d\u83b7\u53d6\u6837\u5f0f\u94fe\u63a5\u7ec4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u6709\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u5219\u904d\u5386\u6837\u5f0f\u94fe\u63a5\u7ec4\uff0c\u5e76\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheetFromLink()"})," \u51fd\u6570\u4ece\u4e2d\u83b7\u53d6\u6837\u5f0f\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u6e05\u9664\u540d\u79f0\u7ec4\u5408\uff0c\u7136\u540e\u8fd4\u56de\u5339\u914d\u7684\u6837\u5f0f\u8868\u6570\u91cf\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece\u8fd9\u4e2a\u8fc7\u7a0b\u6211\u4eec\u53ef\u4ee5\u770b\u51fa ",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheet()"})," \u51fd\u6570\u53ea\u662f\u8d1f\u8d23\u5b9a\u4f4d\u67e5\u8be2\u5165\u53e3\uff0c\u5269\u4e0b\u7684\u67e5\u8be2\u5de5\u4f5c\u5219\u4ea4\u7ed9\u4e86",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheetFromLink()"})," \u51fd\u6570\uff0c\u800c\u5b83\u4e3b\u8981\u505a\u4e86\u8fd9\u4e24\u4e2a\u5de5\u4f5c\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u5c06\u5f53\u524d\u6837\u5f0f\u94fe\u63a5\u4e2d\u7684\u6837\u5f0f\u8868\u8ffd\u52a0\u5230\u8f93\u51fa\u7ed3\u679c\u4e2d\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u7ee7\u7eed\u4ece\u53f3\u5230\u5de6\u904d\u5386\u9009\u62e9\u5668\u7ed3\u70b9\uff0c\u4e3a\u6bcf\u4e2a\u6837\u5f0f\u7ed3\u70b9\u751f\u6210\u540d\u79f0\u7ec4\u5408\uff0c\u7136\u540e\u4ee5\u540d\u79f0\u7ec4\u5408\u4e3a\u7d22\u5f15\u952e\u4ece\u7236\u7ea7\u6837\u5f0f\u94fe\u63a5\u8868 ",(0,c.jsx)(n.code,{children:"parents"})," \u4e2d\u67e5\u627e\u6837\u5f0f\u94fe\u63a5\uff0c\u5982\u679c\u5b58\u5728\u5219\u57fa\u4e8e\u8be5\u7236\u7ea7\u6837\u5f0f\u94fe\u63a5\u548c\u5f53\u524d\u9009\u62e9\u5668\u7ed3\u70b9\uff0c\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheetFromLink()"})," \u51fd\u6570\u7ee7\u7eed\u67e5\u8be2\u6837\u5f0f\u8868\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6dfb\u52a0-css-\u5c5e\u6027",children:"\u6dfb\u52a0 CSS \u5c5e\u6027"}),"\n",(0,c.jsxs)(n.p,{children:["\u73b0\u6709\u7684\u6837\u5f0f\u8868\u53ea\u5305\u542b\u5e38\u7528\u7684 CSS \u5c5e\u6027\uff0c\u5982\u679c\u4f60\u60f3\u6269\u5c55\u65b0\u7684 CSS \u5c5e\u6027\uff0c\u5219\u53ef\u4ee5\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"LCUI_AddCSSPropertyName()"})," \u6765\u5b9e\u73b0\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'enum CSSTransitionPropertyKey {\n    key_transition_property,\n    key_transition_duration,\n    key_transition_timing_function,\n    TRANSITION_KEY_TOTAL\n};\n\nint i;\nint keys[TRANSITION_KEY_TOTAL];\n\nkeys[0] = LCUI_AddCSSPropertyName("transition-property");\nkeys[1] = LCUI_AddCSSPropertyName("transition-duration");\nkeys[2] = LCUI_AddCSSPropertyName("transition-timing-function");\nkeys[3] = LCUI_AddCSSPropertyName("transition-delay");\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"LCUI_AddCSSPropertyName()"})," \u51fd\u6570\u4f1a\u4e3a\u7ed9\u5b9a\u7684 CSS \u5c5e\u6027\u540d\u79f0\u5206\u914d\u4e00\u4e2a\u6807\u8bc6\u53f7\u5e76\u5c06\u5b83\u548c\u540d\u79f0\u6dfb\u52a0\u5230\u5c5e\u6027\u540d\u6620\u5c04\u8868\u4e2d\uff0c\u8fd9\u4e2a\u6807\u8bc6\u53f7\u5c31\u662f CSS \u5c5e\u6027\u5728\u6837\u5f0f\u8868\u4e2d\u7684\u4e0b\u6807\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u8bbf\u95ee\u8be5 CSS \u5c5e\u6027\u7684\u503c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6dfb\u52a0\u65b0\u7684 CSS \u5c5e\u6027\u540e\u4f1a\u5f71\u54cd\u4e4b\u540e\u65b0\u5efa\u7684\u6837\u5f0f\u8868\u7684\u957f\u5ea6\uff0c\u4e3a\u907f\u514d\u5728\u8bbf\u95ee\u6837\u5f0f\u8868\u65f6\u51fa\u73b0\u8bbf\u95ee\u8d8a\u754c\u7684\u95ee\u9898\uff0c\u4f60\u5e94\u8be5\u5148\u68c0\u67e5\u4e0b\u6807\u662f\u5426\u8d85\u51fa\u6837\u5f0f\u8868\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u53c2\u8003\u8fd9\u4e9b\u6e90\u6587\u4ef6\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/gui/css_fontstyle.c#L461",children:"src/gui/css_fontstyle.c"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/src/gui/widget/textview.c#L434",children:"src/gui/widget/textview.c"})}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5f85\u529e\u4e8b\u9879",children:"\u5f85\u529e\u4e8b\u9879"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4f18\u5316\u6837\u5f0f\u8ba1\u7b97\u6027\u80fd"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6837\u5f0f\u5339\u914d\u662f\u6837\u5f0f\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u8017\u65f6\u8f83\u9ad8\u7684\u4e00\u4e2a\u64cd\u4f5c\uff0c\u5b83\u7684\u5b9e\u73b0\u4ee3\u7801\u5728 ",(0,c.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/src/gui/css_library.c#L1383-L1423",children:"src/gui/css_library.c"})," \u4e2d\uff0c\u9700\u8981\u4f18\u5316\u7684\u5730\u65b9\u5c31\u5728 ",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheetFromGroup()"}),"  ->",(0,c.jsx)(n.code,{children:"SelectorNode_GetNames()"})," ->",(0,c.jsx)(n.code,{children:"SelectorNode_GetNames()"}),"  -> ",(0,c.jsx)(n.code,{children:"NamesFinder_Find()"})," \u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u94fe\u4e2d\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u67e5\u8be2\u6837\u5f0f\u6570\u636e\u5e93\u524d\uff0c",(0,c.jsx)(n.code,{children:"LCUI_FindStyleSheetFromGroup()"})," \u51fd\u6570\u4f1a\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"SelectorNode_GetNames()"})," \u51fd\u6570\u83b7\u53d6\u9009\u62e9\u5668\u8282\u70b9\u7684\u6240\u6709\u540d\u79f0\u7ec4\u5408\uff0c\u8be5\u51fd\u6570\u53ea\u662f\u7b80\u5355\u7684\u8c03\u7528\u4e86 ",(0,c.jsx)(n.code,{children:"NamesFinder_Find()"})," \u51fd\u6570\uff0c\u800c ",(0,c.jsx)(n.code,{children:"NamesFinder_Find()"})," \u51fd\u6570\u5219\u8d1f\u8d23\u6839\u636e\u7ed9\u5b9a\u7684\u9009\u62e9\u5668\u8282\u70b9\u4e2d\u7684 id\u3001\u7c7b\u578b\u3001\u7c7b\u548c\u4f2a\u7c7b\u6765\u751f\u6210\u6240\u6709\u7684\u7ec4\u5408\uff0c\u6d89\u53ca\u8f83\u591a\u7684\u5b57\u7b26\u4e32\u64cd\u4f5c\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},3884:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/css-library-struct-446f2971898dabcbbb1f524cffcc158d.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var c=i(6540);const s={},l=c.createContext(s);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);