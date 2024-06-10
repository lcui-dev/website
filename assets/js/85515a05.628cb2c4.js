"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4075],{8208:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=i(4848),r=i(8453);const d={},l="\u5b57\u4f53\u6570\u636e\u5e93",s={id:"font/library",title:"\u5b57\u4f53\u6570\u636e\u5e93",description:"\u7b80\u5355\u7684\u793a\u4f8b",source:"@site/versioned_docs/version-2.x/font/library.md",sourceDirName:"font",slug:"/font/library",permalink:"/docs/2.x/font/library",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/font/library.md",tags:[],version:"2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce",permalink:"/docs/2.x/font/engine"},next:{title:"\u6587\u672c\u6392\u7248\u4e0e\u6e32\u67d3",permalink:"/docs/2.x/font/textlayer"}},o={},c=[{value:"\u7b80\u5355\u7684\u793a\u4f8b",id:"\u7b80\u5355\u7684\u793a\u4f8b",level:3},{value:"\u9009\u62e9\u5b57\u578b",id:"\u9009\u62e9\u5b57\u578b",level:3},{value:"\u6e32\u67d3\u6587\u5b57",id:"\u6e32\u67d3\u6587\u5b57",level:3},{value:"\u5b57\u4f53\u6570\u636e\u5e93",id:"\u5b57\u4f53\u6570\u636e\u5e93-1",level:3},{value:"\u5b57\u578b\u7f13\u5b58",id:"\u5b57\u578b\u7f13\u5b58",level:3},{value:"\u4f4d\u56fe\u7f13\u5b58",id:"\u4f4d\u56fe\u7f13\u5b58",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5b57\u4f53\u6570\u636e\u5e93",children:"\u5b57\u4f53\u6570\u636e\u5e93"}),"\n",(0,t.jsx)(e.h3,{id:"\u7b80\u5355\u7684\u793a\u4f8b",children:"\u7b80\u5355\u7684\u793a\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u52a0\u8f7d\u4e00\u4e2a\u5b57\u4f53\u6587\u4ef6\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <LCUI.h>\n#include <LCUI/font.h>\n\nint main(int argc, char *argv[])\n{\n    int ret;\n    if (argc < 2) {\n        printf("Please specify the font file path");\n        return -1;\n    }\n    LCUI_InitFontLibrary();\n    ret = LCUIFont_LoadFile(argv[1]);\n    LCUI_FreeFontLibrary();\n    return ret;\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u9009\u62e9\u5b57\u578b",children:"\u9009\u62e9\u5b57\u578b"}),"\n",(0,t.jsx)(e.p,{children:"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u7684\u63a5\u53e3\u90fd\u4f9d\u8d56\u4e8e\u5b57\u578b id\uff0c\u4e3a\u4e86\u5f97\u5230\u5b57\u578b id\uff0c\u6211\u4eec\u9700\u8981\u7528\u5230\u8fd9\u4e24\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"int LCUIFont_GetId(const char *family_name, LCUI_FontStyle style,\n\t\t\t\t\t\t\t\t\t LCUI_FontWeight weight);\n\nsize_t LCUIFont_GetIdByNames(int **font_ids, LCUI_FontStyle style,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t LCUI_FontWeight weight, const char *names);\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"LCUIFont_GetId()"})," \u7528\u4e8e\u6839\u636e\u4f20\u5165\u7684\u5b57\u65cf\u540d\u79f0\u3001\u6837\u5f0f\u548c\u5b57\u91cd\u83b7\u53d6\u5339\u914d\u7684\u5b57\u578b id\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'int font_id = LCUIFont_GetId("Verdana", FONT_STYLE_NORMAL, FONT_WEIGHT_NORMAL);\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"LCUIFont_GetIdByNames()"})," \u662f\u5b83\u7684\u6279\u91cf\u7248\u672c\uff0c\u53ef\u83b7\u53d6\u591a\u4e2a\u5b57\u578b id\uff0c\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'int *font_ids = NULL;\n\nLCUIFont_GetIdByNames(\n    &font_ids,\n    FONT_STYLE_NORMAL,\n    FONT_WEIGHT_NORMAL,\n    "Verdana, Arial, Helvetica"\n);\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["\u5f53\u8fd9\u4e24\u4e2a\u51fd\u6570\u672a\u627e\u5230\u4e0e\u6307\u5b9a\u7684\u98ce\u683c\u548c\u5b57\u91cd\u76f8\u5339\u914d\u7684\u5b57\u578b\u65f6\uff0c\u4f1a\u6309\u7167\u56de\u9000\u89c4\u5219\u9009\u62e9\u76f8\u8fd1\u7684\u5b57\u578b\uff0c\u5176\u4e2d\u98ce\u683c\u7684\u56de\u9000\u89c4\u5219\u662f\u6309\u7167 oblique -> italic -> normal \u987a\u5e8f\u56de\u9000\u76f4\u5230 normal \u4e3a\u6b62\uff0c\u800c\u5b57\u91cd\u7684\u56de\u9000\u89c4\u5219\u5219\u662f\u91c7\u7528\u4e86\u4e0e\u6d4f\u89c8\u5668\u76f8\u540c\u7684\u505a\u6cd5\uff0c\u8be6\u89c1 MDN \u4e0a\u7684",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight#%E5%9B%9E%E9%80%80%E6%9C%BA%E5%88%B6",children:"\u5b57\u91cd\u7684\u56de\u9000\u89c4\u5219"}),"\u3002"]})}),"\n",(0,t.jsx)(e.h3,{id:"\u6e32\u67d3\u6587\u5b57",children:"\u6e32\u67d3\u6587\u5b57"}),"\n",(0,t.jsxs)(e.p,{children:["\u6e32\u67d3\u6587\u5b57\u524d\uff0c\u9700\u8981\u5148\u51c6\u5907\u4e00\u5757\u753b\u5e03\uff0c\u7136\u540e\u7528 ",(0,t.jsx)(e.code,{children:"LCUIFont_RenderBitmap()"})," \u51fd\u6570\u5c06\u6307\u5b9a\u5b57\u7b26\u7684\u5b57\u578b\u6e32\u67d3\u4e3a\u4f4d\u56fe\uff0c\u4e4b\u540e\u518d\u7528 ",(0,t.jsx)(e.code,{children:"FontBitmap_Mix()"})," \u5c06\u4f4d\u56fe\u6df7\u5408\u5230\u753b\u5e03\u4e0a\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0b\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u6e32\u67d3\u6587\u5b57\u5e76\u8f93\u51fa\u5230 PNG \u56fe\u7247\u4e2d\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/image.h>\n#include <LCUI/font.h>\n\nint main(void)\n{\n    int ret, fid;\n    LCUI_Graph img;\n    LCUI_FontBitmap bmp;\n    LCUI_Pos pos = { 25, 25 };\n    LCUI_Color bg = RGB(240, 240, 240);\n    LCUI_Color color = RGB(255, 0, 0);\n\n    /* \u521d\u59cb\u5316\u5b57\u4f53\u5904\u7406\u529f\u80fd */\n    LCUI_InitFontLibrary();\n\n    /* \u521b\u5efa\u4e00\u4e2a\u753b\u5e03\uff0c\u5e76\u586b\u5145\u80cc\u666f\u4e3a\u7070\u8272 */\n    Graph_Init(&img);\n    Graph_Create(&img, 100, 100);\n    Graph_FillRect(&img, bg, NULL, FALSE);\n\n    /* \u8f7d\u5165\u5b57\u4f53\u6587\u4ef6 */\n    ret = LCUIFont_LoadFile("C:/Windows/fonts/simsun.ttc");\n    while (ret == 0) {\n        /* \u83b7\u53d6\u5b57\u4f53ID */\n        fid = LCUIFont_GetId("SimSun", 0, 0);\n        if (fid < 0) {\n            break;\n        }\n        /* \u6e32\u67d3\u5bf9\u5e94\u7684\u6587\u5b57\u4f4d\u56fe\uff0c\u5927\u5c0f\u4e3a 48 \u50cf\u7d20 */\n        ret = LCUIFont_RenderBitmap(&bmp, L\'\u5b57\', fid, 48);\n        if (ret != 0) {\n            break;\n        }\n        /* \u7ed8\u5236\u7ea2\u8272\u6587\u5b57\u5230\u56fe\u50cf\u4e0a */\n        FontBitmap_Mix(&img, pos, &bmp, color);\n        LCUI_WritePNGFile("test_char_render.png", &img);\n        /* \u91ca\u653e\u5185\u5b58\u8d44\u6e90 */\n        FontBitmap_Free(&bmp);\n        Graph_Free(&img);\n        break;\n    }\n\n    /* \u91ca\u653e\u5b57\u4f53\u5904\u7406\u529f\u80fd\u76f8\u5173\u8d44\u6e90 */\n    LCUI_FreeFontLibrary();\n    return ret;\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd0\u884c\u8be5\u7a0b\u5e8f\u540e\u6253\u5f00 ",(0,t.jsx)(e.code,{children:"test_char_render.png"})," \u6587\u4ef6\uff0c\u4f60\u4f1a\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"\u6587\u5b57\u6e32\u67d3\u6548\u679c",src:i(5457).A+"",width:"100",height:"100"})}),"\n",(0,t.jsx)(e.h3,{id:"\u5b57\u4f53\u6570\u636e\u5e93-1",children:"\u5b57\u4f53\u6570\u636e\u5e93"}),"\n",(0,t.jsx)(e.p,{children:"\u5b57\u4f53\u6570\u636e\u5e93\u7531\u5982\u4e0b\u6570\u636e\u7ed3\u6784\u7ec4\u6210\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"**\u5b57\u65cf\u8868\uff08Dict\uff09\uff1a**\u8bb0\u5f55\u4e86\u6240\u6709\u5b57\u65cf\u7ed3\u70b9\u7684\u54c8\u5e0c\u8868\uff0c\u4ee5\u5b57\u65cf\u540d\u79f0\u4f5c\u4e3a\u7d22\u5f15\u952e\u503c\u3002"}),"\n",(0,t.jsx)(e.li,{children:"**\u5b57\u65cf\u7ed3\u70b9\uff08FontFamilyNode\uff09\uff1a**\u8bb0\u5f55\u8be5\u5b57\u65cf\u4e0b\u7684\u6240\u6709\u5b57\u4f53\u6837\u5f0f\u7ed3\u70b9\u5217\u8868\u3002"}),"\n",(0,t.jsx)(e.li,{children:"**\u5b57\u4f53\u6837\u5f0f\u7ed3\u70b9\uff08FontStyleNode\uff09\uff1a**\u8bb0\u5f55\u4e86\u8be5\u5b57\u4f53\u6837\u5f0f\u4e0b\u7684\u5b57\u4f53\u5217\u8868\uff0c\u5b57\u4f53\u5728\u6570\u7ec4\u91cd\u7684\u4e0b\u6807\u4e0e\u5b57\u91cd\u5bf9\u5e94\u3002"}),"\n",(0,t.jsx)(e.li,{children:"**\u5b57\u578b\uff08Font\uff09\uff1a**\u8bb0\u5f55\u4e86\u5b57\u578b\u7684 id\u3001\u6240\u5c5e\u5b57\u65cf\u3001\u6837\u5f0f\u3001\u5b57\u91cd\uff0c\u4ee5\u53ca\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u6240\u9700\u7684\u4e00\u4e9b\u6570\u636e\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u5b57\u578b\u7f13\u5b58",children:"\u5b57\u578b\u7f13\u5b58"}),"\n",(0,t.jsx)(e.p,{children:"\u5b57\u4f53\u6587\u4ef6\u4e2d\u7684\u5b57\u578b\u6570\u636e\u4f1a\u5728\u52a0\u8f7d\u65f6\u88ab\u6dfb\u52a0\u5230\u5b57\u578b\u7f13\u5b58\u4e2d\uff0c\u8be5\u7f13\u5b58\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6bcf\u4e2a\u5143\u7d20\u90fd\u5305\u542b\u56fa\u5b9a\u957f\u5ea6\u6570\u7ec4\uff0c\u7ed3\u6784\u4e0e\u4e8c\u7ef4\u6570\u7ec4\u7c7b\u4f3c\u3002\u7f13\u5b58\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u5feb\u901f\u8bbf\u95ee\u5b57\u578b\u6570\u636e\uff0c\u5b57\u578b\u7684 id \u5c31\u662f\u5b83\u5728\u7f13\u5b58\u4e2d\u7684\u4f4d\u7f6e\uff0c\u7ecf\u8fc7\u5982\u4e0b\u8ba1\u7b97\u5373\u53ef\u8bbf\u95ee\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"font_cache[id / FONT_CACHE_SIZE]->fonts[id % FONT_CACHE_SIZE]\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u4f4d\u56fe\u7f13\u5b58",children:"\u4f4d\u56fe\u7f13\u5b58"}),"\n",(0,t.jsx)(e.p,{children:"\u6e32\u67d3\u6587\u672c\u7684\u4e3b\u8981\u8fc7\u7a0b\u662f\u5c06\u6bcf\u4e2a\u5b57\u7b26\u7684\u5b57\u5f62\u6805\u683c\u5316\u6210\u4f4d\u56fe\u7136\u540e\u7ed8\u5236\u5230\u76ee\u6807\u9762\u4e0a\uff0c\u5176\u4e2d\u6805\u683c\u5316\u7684\u8017\u65f6\u76f8\u6bd4\u76f4\u63a5\u8bfb\u53d6\u4f4d\u56fe\u7684\u8017\u65f6\u8981\u9ad8\u4e00\u70b9\uff0c\u800c\u53c8\u7531\u4e8e\u4e00\u6bb5\u6587\u672c\u901a\u5e38\u90fd\u4f1a\u5305\u542b\u4e00\u4e9b\u91cd\u590d\u7684\u5b57\u7b26\uff0c\u5c24\u5176\u662f\u7531 26 \u4e2a\u5b57\u6bcd\u548c\u4e00\u4e9b\u7b26\u53f7\u7ec4\u6210\u7684\u82f1\u6587\u6587\u672c\uff0c\u4e3a\u51cf\u5c11\u56e0\u6805\u683c\u5316\u8fd9\u4e9b\u91cd\u590d\u7684\u5b57\u7b26\u800c\u589e\u52a0\u7684\u8017\u65f6\uff0c\u4e8e\u662f\u5c31\u6709\u4e86\u4f4d\u56fe\u7f13\u5b58\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f4d\u56fe\u7f13\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7531\u5d4c\u5957\u4e09\u5c42\u7684\u7ea2\u9ed1\u6811\uff08RBTree\uff09\u7ec4\u6210\uff0c\u8fd9\u4e09\u5c42\u7ea2\u9ed1\u6811\u5206\u522b\u4ee5\u5b57\u7b26\u7801\u3001\u5b57\u578b id \u548c \u5b57\u4f53\u5927\u5c0f\u4e3a\u7d22\u5f15\u952e\uff0c\u5b9e\u73b0\u4e86\u5bf9\u6bcf\u4e2a\u5b57\u7b26\u4f4d\u56fe\u7684\u5206\u7c7b\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u5f85\u529e\u4e8b\u9879",children:"\u5f85\u529e\u4e8b\u9879"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u4f18\u5316\u4f4d\u56fe\u7f13\u5b58\u7684\u5b58\u50a8\u7ed3\u6784\u548c\u6027\u80fd"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f18\u5316\u76ee\u6807\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u63d0\u9ad8\u7f13\u5b58\u8bfb\u5199\u6027\u80fd\uff1a\u8003\u8651\u6539\u7528\u6570\u7ec4\u4ee3\u66ff\u7ea2\u9ed1\u6811\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u51cf\u5c11\u5185\u5b58\u5360\u7528\uff1a\u6d4b\u8bd5\u5b57\u5f62\u7684\u6805\u683c\u5316\u8017\u65f6\uff0c\u5982\u679c\u8017\u65f6\u53ef\u4ee5\u5ffd\u7565\uff0c\u5219\u53ef\u6539\u4e3a\u7f13\u5b58\u5b57\u5f62\u6570\u636e\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u91cd\u65b0\u8bbe\u8ba1\u5b57\u4f53\u6570\u636e\u5e93\u7684\u63a5\u53e3"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"LCUIFont_LoadFile()"})," \u7684\u8fd4\u56de\u503c\u53ea\u8868\u793a\u52a0\u8f7d\u662f\u5426\u6210\u529f\uff0c\u5e94\u7528\u7a0b\u5e8f\u65e0\u6cd5\u5f97\u77e5\u5df2\u52a0\u8f7d\u7684\u5b57\u4f53\u6587\u4ef6\u7684\u4fe1\u606f\uff0c\u662f\u5426\u9700\u8981\u6539\u9020\u63a5\u53e3\u4f7f\u5176\u8fd4\u56de\u5b57\u65cf\u540d\u79f0\uff1f\u6216\u8005\u53c2\u8003\u5176\u5b83\u5b57\u4f53\u5e93\uff0c\u91cd\u65b0\u8bbe\u5b57\u4f53\u6570\u636e\u5e93\u7684\u5168\u90e8\u63a5\u53e3\uff1f"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},5457:(n,e,i)=>{i.d(e,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAFG0lEQVR4nO3aTUgUfxjA8Wdmdt3dWdetDm1uVkugSaJ1EIyI6NShRAJZX/bURgbRG4QHQTC6dIgKgtA6xEKQBVtmlkiFdInSoqCCoBeCkrQlCRedfZud+f0Pq3//9U+dZ5vZGeH5XHxh5jcPX2Znh53lpqamgGjDmz3AckKxECgWAsVCoFgIFAuBYiFQLASKhUCxECgWAsVCoFgIFAuBYiFQLASKhUCxECgWAsVCoFgIFAuBYiFQLATzYwmvXgFjZk+hifmxiiKR4p07bY8emT3I0syPlTx3DnheDAbFxkbuyxezx1mM+bHA4UhcuQIOh2142LNjh+3hQ7MHWpAFYgGolZXpEycAAKanxXCY+/nT7In+zBKxACB9/DhbuRIAQJLsfX1mj/NnxsbixsYgk9G0aXGx3NIy+7vGXQC48XGQ5bxGy4exscS2Nv79e40bZ0Ih4DiltjYTDmvaIZVyNzeLwSBMT+c/IobNwLVlWXjzRnj3jnm9WjZnXm/i2jV10ybuxw8t2zvPn+ffvuUBiuvrpWiUrV79d+MujTPum3/Ckyfu+nqDFv+NGggk+vrUjRsNPYqBZ5b9zh0ASF69Kjc26r96Ou3ZupWbmACA7N69mQMH1NJS/Y/yK6NicbFY0c2bAGDQBaXo+nVuYoKtWZO4fFnZtcuIQ/yfUbGcHR0gSQAARUX6r57NOi5eVMvLpf5+tnat/usvwJB3Q/uNG7nXIACo5eX6LCrL/56k9lu3IJuVBgYKWQqMiMV//Og6eTL3u1pdrdTW6rCooogHD7pbWyGVAsYc3d1Sby8z/iL1G/1fhsxuz+7ezX/+rFRWpk6fBo6DeJyLx/9mTeeZM7a7dwFADIcTkUjy7Fl1yxad5kUw8NZh/hixmLuhQfvd6eLklpZkTw9wnC6roRh5UzqH+XzSvXv23l61qkqpqGBeL3g8IAiadlZVZ2dnUU/P7FJ+P/N6uW/fWFmZgRMvoBBnVv6SSbGtzXb/PgCoVVXp9na5oUFrZQMU4szKDzc5Kba2Ci9eML8/1dUlNzeb8tL7L4vG4j99EoNBfmwsc+xYqqMD3G6zJwKwZixhZEQMhdi6dTOPH6vV1WaPM88qH/7xHz64Dh/mJidt/f3upqbMkSMzw8OWKgXWucBz4+OezZvB62UulxSNWi1TjlXOLJa7KsXj3PfvjgsXQFU17si/fp17uywAq8QClyv3Uw0E0u3twGsazDY4WLxnj7h/v/32bSOHmzucjmtxsRik03nuPPdQWq2pYR4P9/XrknvYBwacXV25c9B16BAoitzUlOfRtdHzmiU8e+YOBmFmRq8FcXg+eemSHAoZdwSdL/DC6Kjw8qVSU6MGAqykBDwe7XeSJStWAIAcCiW7u3UcSUc632cpdXVKXZ2+a1qHZS7wywHFQqBYCBQLgWIhUCwEioVAsRAoFoJlYuWe9VtboT9WFp4+FcNhdf16tayM+f1qaSlbtQocDtvQ0NwWpj28WVKhYynbt0uDg7YHD+zRqDD3fYhfNqioKPBI2pn5sbIwMuI8dUoYHZ3/l9c7/fw58/nMGmlxZl6zlG3bpKGhzNGjs397PIlIxLKlwBIPLBhz79un+nypzk62YYPJwyzKArEAgDHTnzZrYY1bh+VQCqwSa5mgWAgUC4FiIVAsBIqFQLEQKBYCxUKgWAgUC4FiIVAsBIqFQLEQKBYCxUKgWAgUC4FiIVAsBIqFQLEQKBYCxUKgWAgUC4FiIfwD+OWCmC2RIo0AAAAASUVORK5CYII="},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var t=i(6540);const r={},d=t.createContext(r);function l(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);