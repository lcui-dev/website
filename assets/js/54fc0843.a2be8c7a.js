"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[218],{1931:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"font/engine","title":"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce","description":"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u7684\u5de5\u4f5c\u4e3b\u8981\u662f\u5b57\u4f53\u6587\u4ef6\u64cd\u4f5c\u548c\u6587\u5b57\u6e32\u67d3\uff0cLCUI \u5c06\u5176\u62bd\u8c61\u6210\u4e86 LCUI_FontEngine \u63a5\u53e3\uff0c\u4f7f\u5f97  LCUI \u7684\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u53ef\u88ab\u5207\u6362\u548c\u6269\u5c55\u3002","source":"@site/versioned_docs/version-2.x/font/engine.md","sourceDirName":"font","slug":"/font/engine","permalink":"/docs/2.x/font/engine","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/font/engine.md","tags":[],"version":"2.x","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\u5b57\u4f53","permalink":"/docs/2.x/font/"},"next":{"title":"\u5b57\u4f53\u6570\u636e\u5e93","permalink":"/docs/2.x/font/library"}}');var o=t(4848),r=t(8453);const c={},s="\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce",d={},l=[{value:"\u5185\u7f6e\u5f15\u64ce",id:"\u5185\u7f6e\u5f15\u64ce",level:3},{value:"FreeType \u5f15\u64ce",id:"freetype-\u5f15\u64ce",level:3},{value:"\u6dfb\u52a0\u65b0\u7684\u5f15\u64ce",id:"\u6dfb\u52a0\u65b0\u7684\u5f15\u64ce",level:3}];function a(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce",children:"\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u7684\u5de5\u4f5c\u4e3b\u8981\u662f\u5b57\u4f53\u6587\u4ef6\u64cd\u4f5c\u548c\u6587\u5b57\u6e32\u67d3\uff0cLCUI \u5c06\u5176\u62bd\u8c61\u6210\u4e86 ",(0,o.jsx)(e.code,{children:"LCUI_FontEngine"})," \u63a5\u53e3\uff0c\u4f7f\u5f97  LCUI \u7684\u5b57\u4f53\u6e32\u67d3\u5f15\u64ce\u53ef\u88ab\u5207\u6362\u548c\u6269\u5c55\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u76ee\u524d\u57fa\u4e8e\u8be5\u63a5\u53e3\u5b9e\u73b0\u7684\u5f15\u64ce\u6709\u5185\u7f6e\u5f15\u64ce\u548c FreeType \u5f15\u64ce\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u518d\u6df1\u5165\u4e86\u89e3\u5b83\u4eec\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"\u5185\u7f6e\u5f15\u64ce",children:"\u5185\u7f6e\u5f15\u64ce"}),"\n",(0,o.jsx)(e.p,{children:"\u5185\u7f6e\u5f15\u64ce\u662f LCUI \u521d\u59cb\u5316\u7684\u7b2c\u4e00\u4e2a\u5f15\u64ce\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u5728\u65e0\u5176\u5b83\u53ef\u7528\u5f15\u64ce\u7684\u60c5\u51b5\u4e0b\u52a0\u8f7d\u9884\u7f6e\u7684\u5b57\u4f53\u4f4d\u56fe\u6570\u636e\uff0c\u4ee5\u786e\u4fdd\u754c\u9762\u4e2d\u7684\u6587\u5b57\u80fd\u591f\u88ab\u6e32\u67d3\u51fa\u6765\u3002"}),"\n",(0,o.jsxs)(e.p,{children:["\u5185\u7f6e\u5f15\u64ce\u53ea\u80fd\u52a0\u8f7d ",(0,o.jsx)(e.code,{children:"in-core.inconsolata"})," \u5b57\u4f53\uff0c\u8be5\u5b57\u4f53\u5df2\u7ecf\u8f6c\u6362\u4e3a\u70b9\u9635\u5b57\u5e93\u5d4c\u5165\u5728\u6e90\u7801\u4e2d\uff0c\u5e76\u968f\u7740 LCUI \u5e94\u7528\u7a0b\u5e8f\u7684\u8fd0\u884c\u800c\u4e00\u540c\u88ab\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5bf9\u4e8e\u5185\u7f6e\u5f15\u64ce\u800c\u8a00\uff0c\u6e32\u67d3\u8fc7\u7a0b\u53ea\u662f\u7b80\u5355\u7684\u5c06\u8be5\u5b57\u5e93\u4e2d\u7684\u6587\u5b57\u4f4d\u56fe\u53d6\u51fa\u6765\u7136\u540e\u6df7\u5408\u5230\u753b\u5e03\u4e0a\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u4f60\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u5728\u6027\u80fd\u3001\u5185\u5b58\u548c\u5b58\u50a8\u6761\u4ef6\u8f83\u4e3a\u82db\u523b\u7684\u73af\u5883\u4e2d\u8fd0\u884c\u7684\uff0c\u6ca1\u6709\u591a\u4f59\u7684\u8d44\u6e90\u4f9b FreeType \u5f15\u64ce\u4f7f\u7528\uff0c\u90a3\u4e48\u53ea\u4f7f\u7528\u5185\u7f6e\u5f15\u64ce\u662f\u5f00\u9500\u6700\u5c0f\u4e00\u79cd\u529e\u6cd5\uff0c\u4f46\u5185\u7f6e\u7684\u70b9\u9635\u5b57\u5e93\u5305\u542b 12px ~ 18px \u7684\u5b57\u4f53\u4f4d\u56fe\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5220\u9664\u4e00\u4e9b\u4f4d\u56fe\u4ee5\u7f29\u51cf\u5b57\u5e93\u7684\u5927\u5c0f\u3002"}),"\n",(0,o.jsx)(e.h3,{id:"freetype-\u5f15\u64ce",children:"FreeType \u5f15\u64ce"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.freetype.org/",children:"FreeType"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u6e32\u67d3\u5b57\u4f53\u7684\u8f6f\u4ef6\u5e93\uff0c\u5b83\u91c7\u7528 C \u8bed\u8a00\u7f16\u5199\uff0c\u88ab\u8bbe\u8ba1\u4e3a\u5c0f\u578b\u3001\u9ad8\u6548\u3001\u9ad8\u53ef\u5b9a\u5236\u3001\u53ef\u79fb\u690d\u6027\u7684\u540c\u65f6\u8fd8\u80fd\u591f\u4ea7\u751f\u5927\u591a\u6570\u77e2\u91cf\u548c\u4f4d\u56fe\u5b57\u4f53\u683c\u5f0f\u7684\u9ad8\u8d28\u91cf\u8f93\u51fa\u3002"]}),"\n",(0,o.jsx)(e.h3,{id:"\u6dfb\u52a0\u65b0\u7684\u5f15\u64ce",children:"\u6dfb\u52a0\u65b0\u7684\u5f15\u64ce"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"LCUI_FontEngine"})," \u5728",(0,o.jsx)(e.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/font/fontlibrary.h#L82-L88",children:" include/LCUI/font/fontlibrary.h"})," \u4e2d\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"struct LCUI_FontEngine {\n    char name[64];\n    int(*open)(const char*, LCUI_Font**);\n    int(*render)(LCUI_FontBitmap*, wchar_t, int, LCUI_Font);\n    void(*close)(void*);\n};\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u4ece\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u65b0\u7684\u5f15\u64ce\u5b9a\u4e49 ",(0,o.jsx)(e.code,{children:"open()"}),"\u3001",(0,o.jsx)(e.code,{children:"render()"})," \u548c ",(0,o.jsx)(e.code,{children:"close()"})," \u65b9\u6cd5\uff0c\u7136\u540e\u8bbe\u7f6e\u8fd9\u56db\u4e2a\u5b57\u6bb5\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:'static int MyFontEngine_Open(const char *filepath, LCUI_Font **outfonts)\n{\n    ...\n}\n\nstatic void MyFontEngine_Close(void *data)\n{\n    ...\n}\n\nstatic int MyFontEngine_Render(LCUI_FontBitmap *bmp, wchar_t ch,\n                               int pixel_size, LCUI_Font font)\n{\n    ...\n}\n\nint LCUIFont_InitMyFontEngine(LCUI_FontEngine *engine)\n{\n    ....\n\n    strcpy(engine->name, "MyFontEngine");\n    engine->render = MyFontEngine_Render;\n    engine->open = MyFontEngine_Open;\n    engine->close = MyFontEngine_Close;\n    return 0;\n}\n\nint LCUIFont_ExitMyFontEngine(void)\n{\n    ...\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u9700\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u53c2\u8003\u73b0\u6709\u5f15\u64ce\u7684\u6e90\u7801\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/font/freetype.c",children:"src/font/freetype.c"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/font/in_core_font.c",children:"src/font/in_core_font.c"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);