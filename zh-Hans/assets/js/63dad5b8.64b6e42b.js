"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6632],{3905:(A,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>_});var t=e(7294);function r(A,n,e){return n in A?Object.defineProperty(A,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[n]=e,A}function a(A,n){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(A,n).enumerable}))),e.push.apply(e,t)}return e}function g(A){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(A,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(A,n,Object.getOwnPropertyDescriptor(e,n))}))}return A}function i(A,n){if(null==A)return{};var e,t,r=function(A,n){if(null==A)return{};var e,t,r={},a=Object.keys(A);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||(r[e]=A[e]);return r}(A,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}var C=t.createContext({}),o=function(A){var n=t.useContext(C),e=n;return A&&(e="function"==typeof A?A(n):g(g({},n),A)),e},s=function(A){var n=o(A.components);return t.createElement(C.Provider,{value:n},A.children)},I="mdxType",p={inlineCode:"code",wrapper:function(A){var n=A.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(A,n){var e=A.components,r=A.mdxType,a=A.originalType,C=A.parentName,s=i(A,["components","mdxType","originalType","parentName"]),I=o(e),d=r,_=I["".concat(C,".").concat(d)]||I[d]||p[d]||a;return e?t.createElement(_,g(g({ref:n},s),{},{components:e})):t.createElement(_,g({ref:n},s))}));function _(A,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof A||r){var a=e.length,g=new Array(a);g[0]=d;var i={};for(var C in n)hasOwnProperty.call(n,C)&&(i[C]=n[C]);i.originalType=A,i[I]="string"==typeof A?A:r,g[1]=i;for(var o=2;o<a;o++)g[o]=e[o];return t.createElement.apply(null,g)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},2561:(A,n,e)=>{e.r(n),e.d(n,{assets:()=>C,contentTitle:()=>g,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=e(7462),r=(e(7294),e(3905));const a={},g="\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62",i={unversionedId:"graphics/drawing-complex-graphics",id:"version-2.x/graphics/drawing-complex-graphics",title:"\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62",description:"LCUI \u5b9e\u73b0\u4e86\u4e00\u4e9b\u56fe\u5f62 API \u7528\u4e8e\u89e3\u51b3\u7ec4\u4ef6\u7684\u80cc\u666f\u3001\u8fb9\u6846\u548c\u9634\u5f71\u7684\u7ed8\u5236\u95ee\u9898\u3002\u5b83\u4eec\u90fd\u4f9d\u8d56\u7ed8\u5236\u4e0a\u4e0b\u6587\u4e14\u90fd\u652f\u6301\u5c40\u90e8\u533a\u57df\u7ed8\u5236\uff0c\u4f7f\u5f97 LCUI \u80fd\u591f\u5229\u7528\u810f\u77e9\u5f62\u673a\u5236\u548c OpenMP \u5e76\u884c\u6e32\u67d3\u6765\u63d0\u5347\u6e32\u67d3\u6027\u80fd\u3002",source:"@site/versioned_docs/version-2.x/graphics/drawing-complex-graphics.md",sourceDirName:"graphics",slug:"/graphics/drawing-complex-graphics",permalink:"/zh-Hans/docs/graphics/drawing-complex-graphics",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/graphics/drawing-complex-graphics.md",tags:[],version:"2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u7ed8\u5236\u7b80\u5355\u7684\u56fe\u5f62",permalink:"/zh-Hans/docs/graphics/drawing-simple-graphics"},next:{title:"\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c",permalink:"/zh-Hans/docs/graphics/image-file-operation"}},C={},o=[{value:"\u7ed8\u5236\u80cc\u666f",id:"\u7ed8\u5236\u80cc\u666f",level:3},{value:"\u4f7f\u7528\u80cc\u666f\u56fe",id:"\u4f7f\u7528\u80cc\u666f\u56fe",level:4},{value:"\u62c9\u4f38\u80cc\u666f\u56fe",id:"\u62c9\u4f38\u80cc\u666f\u56fe",level:4},{value:"\u8bbe\u7f6e\u80cc\u666f\u56fe\u4f4d\u7f6e",id:"\u8bbe\u7f6e\u80cc\u666f\u56fe\u4f4d\u7f6e",level:4},{value:"\u7ed8\u5236\u8fb9\u6846",id:"\u7ed8\u5236\u8fb9\u6846",level:3},{value:"\u7ed8\u5236\u9634\u5f71",id:"\u7ed8\u5236\u9634\u5f71",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}],s={toc:o},I="wrapper";function p(A){let{components:n,...a}=A;return(0,r.kt)(I,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62"},"\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62"),(0,r.kt)("p",null,"LCUI \u5b9e\u73b0\u4e86\u4e00\u4e9b\u56fe\u5f62 API \u7528\u4e8e\u89e3\u51b3\u7ec4\u4ef6\u7684\u80cc\u666f\u3001\u8fb9\u6846\u548c\u9634\u5f71\u7684\u7ed8\u5236\u95ee\u9898\u3002\u5b83\u4eec\u90fd\u4f9d\u8d56\u7ed8\u5236\u4e0a\u4e0b\u6587\u4e14\u90fd\u652f\u6301\u5c40\u90e8\u533a\u57df\u7ed8\u5236\uff0c\u4f7f\u5f97 LCUI \u80fd\u591f\u5229\u7528\u810f\u77e9\u5f62\u673a\u5236\u548c OpenMP \u5e76\u884c\u6e32\u67d3\u6765\u63d0\u5347\u6e32\u67d3\u6027\u80fd\u3002"),(0,r.kt)("h3",{id:"\u7ed8\u5236\u80cc\u666f"},"\u7ed8\u5236\u80cc\u666f"),(0,r.kt)("p",null,"\u80cc\u666f\u7ed8\u5236\u53c2\u6570\u88ab\u5b9a\u4e49\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"LCUI_Background")," \u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"Background_Paint()")," \u51fd\u6570\u8d1f\u8d23\u7ed8\u5236\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u753b\u5e03\u4e2d\u7684\u533a\u57df ",(0,r.kt)("inlineCode",{parentName:"p"},"(200, 100, 400, 30)")," \u4f5c\u4e3a\u80cc\u666f\u533a\u57df\uff0c\u7531\u4e8e\u6211\u4eec\u8981\u8ba9\u80cc\u666f\u533a\u57df\u88ab\u5b8c\u6574\u7ed8\u5236\u51fa\u6765\uff0c\u6240\u4ee5\u53c8\u5c06\u8be5\u533a\u57df\u4f5c\u4e3a\u7ed8\u5236\u533a\u57df\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u80cc\u666f\u533a\u57df\u548c\u7ed8\u5236\u90fd\u5171\u7528\u540c\u4e00\u4e2a\u539f\u70b9\uff0c\u53ea\u6709\u8fd9\u4e24\u4e2a\u533a\u57df\u76f8\u91cd\u53e0\u90e8\u5206\u624d\u4f1a\u88ab\u7ed8\u5236\u51fa\u6765\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint main(void)\n{\n        LCUI_Graph canvas;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Rect rect = { 200, 100, 400, 300 };\n        LCUI_Background bg = { 0 };\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Create(&canvas, 800, 600);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&canvas, &rect);\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, &rect, paint);\n        LCUI_WritePNGFile("test_paint_background_color.png", &canvas);\n        LCUIPainter_End(paint);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_background_color.png",src:e(1705).Z,width:"800",height:"600"})),(0,r.kt)("h4",{id:"\u4f7f\u7528\u80cc\u666f\u56fe"},"\u4f7f\u7528\u80cc\u666f\u56fe"),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u662f\u586b\u5145\u989c\u8272\u7684\u8bdd\uff0c\u76f4\u63a5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph_FillRect()")," \u4f1a\u66f4\u7b80\u5355\u4e9b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Background_Paint()")," \u7684\u6838\u5fc3\u529f\u80fd\u662f\u5bf9\u80cc\u666f\u56fe\u7684\u5904\u7406\uff0c\u586b\u5145\u80cc\u666f\u8272\u53ea\u662f\u5b83\u5728\u7ed8\u5236\u80cc\u666f\u56fe\u524d\u7684\u4e00\u9879\u51c6\u5907\u5de5\u4f5c\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u901a\u8fc7\u52a0\u8f7d\u80cc\u666f\u56fe\u7136\u540e\u8bbe\u7f6e\u80cc\u666f\u53c2\u6570\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," \u6210\u5458\u53d8\u91cf\u6765\u5c06\u80cc\u666f\u56fe\u7ed8\u5236\u5230\u80cc\u666f\u533a\u57df\u5185\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint main(void)\n{\n        LCUI_Graph canvas;\n        LCUI_Graph image;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Rect rect = { 200, 100, 400, 300 };\n        LCUI_Background bg = { 0 };\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Init(&image);\n        Graph_Create(&canvas, 800, 600);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n        // \u8bfb\u53d6\u80cc\u666f\u56fe\u7247\n        if (LCUI_ReadImageFile("test_image_reader.png", &image) != 0) {\n                return -1;\n        }\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u8bbe\u7f6e\u80cc\u666f\u56fe\n        bg.image = &image;\n        bg.size.width = image.width;\n        bg.size.height = image.height;\n        // \u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&canvas, &rect);\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, &rect, paint);\n        LCUI_WritePNGFile("test_paint_background_image.png", &canvas);\n        LCUIPainter_End(paint);\n        Graph_Free(&image);\n        Graph_Free(&canvas);\n        return 0;\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_background_image.png",src:e(1045).Z,width:"800",height:"600"})),(0,r.kt)("h4",{id:"\u62c9\u4f38\u80cc\u666f\u56fe"},"\u62c9\u4f38\u80cc\u666f\u56fe"),(0,r.kt)("p",null,"\u5f53\u80cc\u666f\u56fe\u7684\u5c3a\u5bf8\u4e0e\u80cc\u666f\u533a\u57df\u5c3a\u5bf8\u4e0d\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u80cc\u666f\u56fe\u8bbe\u7f6e\u6210\u4e0e\u80cc\u666f\u533a\u57df\u76f8\u540c\u7684\u5bbd\u9ad8\u4f7f\u80cc\u666f\u56fe\u586b\u6ee1\u80cc\u666f\u533a\u57df\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint main(void)\n{\n        LCUI_Graph canvas;\n        LCUI_Graph image;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Rect rect = { 200, 100, 400, 300 };\n        LCUI_Background bg = { 0 };\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Init(&image);\n        Graph_Create(&canvas, 800, 600);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n        // \u8bfb\u53d6\u80cc\u666f\u56fe\u7247\n        if (LCUI_ReadImageFile("test_image_reader.png", &image) != 0) {\n                return -1;\n        }\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u8bbe\u7f6e\u80cc\u666f\u56fe\n        bg.image = &image;\n        // \u5c06\u80cc\u666f\u56fe\u8bbe\u7f6e\u6210\u4e0e\u80cc\u666f\u533a\u57df\u76f8\u540c\u7684\u5c3a\u5bf8\n        bg.size.width = rect.width;\n        bg.size.height = rect.height;\n        // \u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&canvas, &rect);\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, &rect, paint);\n        LCUI_WritePNGFile("test_paint_background_image_with_size.png", &canvas);\n        LCUIPainter_End(paint);\n        Graph_Free(&image);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_background_image_with_size.png",src:e(737).Z,width:"800",height:"600"})),(0,r.kt)("h4",{id:"\u8bbe\u7f6e\u80cc\u666f\u56fe\u4f4d\u7f6e"},"\u8bbe\u7f6e\u80cc\u666f\u56fe\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u80cc\u666f\u7ed8\u5236\u53c2\u6570\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," \u6210\u5458\u7528\u4e8e\u63a7\u5236\u80cc\u666f\u56fe\u7684\u4f4d\u7f6e\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6211\u4eec\u901a\u8fc7\u5c06\u4f4d\u7f6e\u8bbe\u4e3a\u80cc\u666f\u56fe\u4e0e\u80cc\u666f\u533a\u57df\u7684\u5bbd\u9ad8\u5dee\u503c\u7684\u4e00\u534a\u8ba9\u80cc\u666f\u56fe\u5c45\u4e2d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint main(void)\n{\n        LCUI_Graph canvas;\n        LCUI_Graph image;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Rect rect = { 200, 100, 400, 300 };\n        LCUI_Background bg = { 0 };\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Init(&image);\n        Graph_Create(&canvas, 800, 600);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n        // \u8bfb\u53d6\u80cc\u666f\u56fe\u7247\n        if (LCUI_ReadImageFile("test_image_reader.png", &image) != 0) {\n                return -1;\n        }\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u8bbe\u7f6e\u80cc\u666f\u56fe\n        bg.image = &image;\n        bg.size.width = image.width;\n        bg.size.height = image.height;\n        // \u8ba9\u80cc\u666f\u56fe\u5c45\u4e2d\n        bg.position.x = (rect.width - image.width) / 2;\n        bg.position.y = (rect.height - image.height) / 2;\n        // \u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&canvas, &rect);\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, &rect, paint);\n        LCUI_WritePNGFile("test_paint_background_image_with_position.png",\n                          &canvas);\n        LCUIPainter_End(paint);\n        Graph_Free(&image);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_background_image_with_position.png",src:e(1820).Z,width:"800",height:"600"})),(0,r.kt)("h3",{id:"\u7ed8\u5236\u8fb9\u6846"},"\u7ed8\u5236\u8fb9\u6846"),(0,r.kt)("p",null,"\u8fb9\u6846\u7ed8\u5236\u53c2\u6570\u88ab\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LCUI_Border")," \u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"Border_Paint()")," \u51fd\u6570\u8d1f\u8d23\u7ed8\u5236\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u57fa\u4e8e\u4e0a\u9762\u7684\u80cc\u666f\u56fe\u4f8b\u5b50\u7ee7\u7eed\u6dfb\u52a0\u7528\u4e8e\u7ed8\u5236\u8fb9\u6846\u7684\u4ee3\u7801\uff0c\u8ba9\u80cc\u666f\u533a\u57df\u88ab\u4e00\u4e2a\u5706\u89d2\u8fb9\u6846\u5305\u56f4\u3002"),(0,r.kt)("p",null,"\u5706\u89d2\u8fb9\u6846\u7684\u7ed8\u5236\u5305\u542b\u8fb9\u6846\u5916\u90e8\u50cf\u7d20\u5254\u9664\u64cd\u4f5c\uff0c\u8fd9\u4e2a\u5254\u9664\u64cd\u4f5c\u672c\u8d28\u4e0a\u662f\u5c06\u50cf\u7d20\u70b9\u7684 alpha \u503c\u8bbe\u7f6e\u4e3a 0\uff0c\u4e5f\u5c31\u662f\u8ba9\u50cf\u7d20\u70b9\u900f\u660e\uff0c\u8fd9\u610f\u5473\u7740\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u76f4\u63a5\u57fa\u4e8e\u753b\u5e03\u7ed8\u5236\u7684\u8bdd\uff0c\u753b\u5e03\u5185\u7684\u90e8\u5206\u533a\u57df\u4e5f\u4f1a\u5254\u9664\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u627f\u8f7d\u7ed8\u5236\u7ed3\u679c\u7684\u56fe\u5f62\u5bf9\u8c61\u7684\u8272\u5f69\u7c7b\u578b\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"LCUI_COLOR_TYPE_ARGB"),"\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u65b0\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"layer"),"\u7684\u56fe\u5f62\u5bf9\u8c61\uff0c\u5c06\u5b83\u7684\u8272\u5f69\u7c7b\u578b\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LCUI_COLOR_TYPE_ARGB"),"\uff0c\u5145\u5f53\u4e34\u65f6\u753b\u5e03\u6765\u5b58\u50a8\u80cc\u666f\u548c\u8fb9\u6846\u7684\u7ed8\u5236\u7ed3\u679c\uff0c\u7136\u540e\u57fa\u4e8e\u5b83\u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\u3002\u7531\u4e8e\u8fb9\u6846\u7684\u5bbd\u9ad8\u4f9d\u8d56\u4e8e\u80cc\u666f\u7684\u5bbd\u9ad8\uff0c\u6211\u4eec\u91cd\u65b0\u5b9a\u4e49\u4e86\u80cc\u666f\u533a\u57df\u548c\u8fb9\u6846\u533a\u57df\uff0c\u4f7f\u5f97\u80cc\u666f\u533a\u57df\u80fd\u591f\u7531\u8fb9\u6846\u533a\u57df\u548c\u8fb9\u6846\u7ebf\u7684\u5927\u5c0f\u8ba1\u7b97\u800c\u6765\u3002\u5728\u7ed8\u5236\u5b8c\u540e\uff0c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Graph_Mix()")," \u51fd\u6570\u5c06\u5b83\u6df7\u5408\u5230\u753b\u5e03\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint paint_background(LCUI_PaintContext paint, LCUI_Rect *box)\n{\n        LCUI_Graph image;\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Background bg = { 0 };\n\n        Graph_Init(&image);\n        // \u8bfb\u53d6\u80cc\u666f\u56fe\u7247\n        if (LCUI_ReadImageFile("test_image_reader.png", &image) != 0) {\n                return -1;\n        }\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u8bbe\u7f6e\u80cc\u666f\u56fe\n        bg.image = &image;\n        bg.size.width = image.width;\n        bg.size.height = image.height;\n        // \u8ba9\u80cc\u666f\u56fe\u5c45\u4e2d\n        bg.position.x = (box->width - image.width) / 2;\n        bg.position.y = (box->height - image.height) / 2;\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, box, paint);\n        Graph_Free(&image);\n        return 0;\n}\n\nvoid paint_border(LCUI_PaintContext paint, LCUI_Rect *box)\n{\n        LCUI_Border border = { 0 };\n        LCUI_Color black = RGB(0, 0, 0);\n\n        border.top.color = black;\n        border.top.style = SV_SOLID;\n        border.top.width = 4;\n        border.right.color = black;\n        border.right.style = SV_SOLID;\n        border.right.width = 4;\n        border.bottom.color = black;\n        border.bottom.style = SV_SOLID;\n        border.bottom.width = 4;\n        border.left.color = black;\n        border.left.style = SV_SOLID;\n        border.left.width = 4;\n        border.top_left_radius = 32;\n        border.top_right_radius = 32;\n        border.bottom_left_radius = 32;\n        border.bottom_right_radius = 32;\n        Border_Paint(&border, box, paint);\n}\n\nint main(void)\n{\n        int border_size = 4;\n\n        LCUI_Graph canvas;\n        LCUI_Graph layer;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_Rect border_box = { 0, 0, 400, 300 };\n        LCUI_Rect bg_box = { border_box.x + border_size,\n                             border_box.y + border_size,\n                             border_box.width - border_size * 2,\n                             border_box.height - border_size * 2 };\n        LCUI_Rect layer_rect = { 0, 0, border_box.width, border_box.height };\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Create(&canvas, 800, 600);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n\n        Graph_Init(&layer);\n        layer.color_type = LCUI_COLOR_TYPE_ARGB;\n        Graph_Create(&layer, layer_rect.width, layer_rect.height);\n\n        // \u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&layer, &layer_rect);\n        paint->with_alpha = TRUE;\n        paint_background(paint, &bg_box);\n        paint_border(paint, &border_box);\n        Graph_Mix(&canvas, &layer, (canvas.width - layer_rect.width) / 2,\n                  (canvas.height - layer_rect.height) / 2, FALSE);\n        LCUI_WritePNGFile("test_paint_border.png", &canvas);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_border.png",src:e(8099).Z,width:"800",height:"600"})),(0,r.kt)("h3",{id:"\u7ed8\u5236\u9634\u5f71"},"\u7ed8\u5236\u9634\u5f71"),(0,r.kt)("p",null,"\u9634\u5f71\u7ed8\u5236\u53c2\u6570\u88ab\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"LCUI_BoxShadow")," \u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"BoxShadow_GetCanvasRect()")," \u51fd\u6570\u8d1f\u8d23\u8ba1\u7b97\u6307\u5b9a\u533a\u57df\u5728\u6dfb\u52a0\u9634\u5f71\u540e\u7684\u533a\u57df\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"BoxShadow_Paint()")," \u51fd\u6570\u8d1f\u8d23\u7ed8\u5236\u3002"),(0,r.kt)("p",null,"\u7ee7\u7eed\u57fa\u4e8e\u4e0a\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u518d\u6dfb\u52a0\u9634\u5f71\u7684\u7ed8\u5236\u4ee3\u7801\u3002\u4e0e\u8fb9\u6846\u7684\u7ed8\u5236\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u9634\u5f71\u533a\u57df\u9700\u8981\u7531\u8fb9\u6846\u533a\u57df\u548c\u9634\u5f71\u53c2\u6570\u8ba1\u7b97\u800c\u6765\uff0c\u56e0\u6b64\u6211\u4eec\u53c8\u8c03\u6574\u4e86\u80cc\u666f\u3001\u8fb9\u6846\u548c\u9634\u5f71\u7684\u533a\u57df\u5b9a\u4e49\u4ee3\u7801\uff0c\u7136\u540e\u6309\u7167\u80cc\u666f -",">"," \u8fb9\u6846 -",">"," \u9634\u5f71\u7684\u987a\u5e8f\u8ba1\u7b97\u5404\u4e2a\u533a\u57df\u3002\u5982\u679c\u4f60\u770b\u8fc7",(0,r.kt)("a",{parentName:"p",href:"../layout/"},"\u5e03\u5c40"),"\u7ae0\u8282\u4e2d\u5bf9\u76d2\u6a21\u578b\u7684\u4ecb\u7ecd\uff0c\u4f60\u4f1a\u53d1\u73b0\u8fd9\u4e00\u7cfb\u5217\u7684\u533a\u57df\u8ba1\u7b97\u5c31\u662f\u5728\u8ba1\u7b97\u76d2\u5b50\u6a21\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <LCUI.h>\n#include <LCUI/graph.h>\n#include <LCUI/image.h>\n#include <LCUI/painter.h>\n\nint paint_background(LCUI_PaintContext paint, LCUI_Rect *box)\n{\n        LCUI_Graph image;\n        LCUI_Color green = RGB(102, 204, 0);\n        LCUI_Background bg = { 0 };\n\n        Graph_Init(&image);\n        // \u8bfb\u53d6\u80cc\u666f\u56fe\u7247\n        if (LCUI_ReadImageFile("test_image_reader.png", &image) != 0) {\n                return -1;\n        }\n        // \u8bbe\u7f6e\u80cc\u666f\u8272\n        bg.color = green;\n        // \u8bbe\u7f6e\u80cc\u666f\u56fe\n        bg.image = &image;\n        bg.size.width = image.width;\n        bg.size.height = image.height;\n        // \u8ba9\u80cc\u666f\u56fe\u5c45\u4e2d\n        bg.position.x = (box->width - image.width) / 2;\n        bg.position.y = (box->height - image.height) / 2;\n        // \u7ed8\u5236\u80cc\u666f\n        Background_Paint(&bg, box, paint);\n        Graph_Free(&image);\n        return 0;\n}\n\nvoid paint_border(LCUI_PaintContext paint, LCUI_Rect *box, int size, int radius)\n{\n        LCUI_Border border = { 0 };\n        LCUI_Color black = RGB(0, 0, 0);\n\n        border.top.color = black;\n        border.top.style = SV_SOLID;\n        border.top.width = size;\n        border.right.color = black;\n        border.right.style = SV_SOLID;\n        border.right.width = size;\n        border.bottom.color = black;\n        border.bottom.style = SV_SOLID;\n        border.bottom.width = size;\n        border.left.color = black;\n        border.left.style = SV_SOLID;\n        border.left.width = size;\n        border.top_left_radius = radius;\n        border.top_right_radius = radius;\n        border.bottom_left_radius = radius;\n        border.bottom_right_radius = radius;\n        Border_Paint(&border, box, paint);\n}\n\nint main(void)\n{\n        int border_size = 4;\n        int border_radius = 32;\n        int width = 800;\n        int height = 600;\n\n        LCUI_Graph canvas;\n        LCUI_Graph layer;\n        LCUI_Color gray = RGB(240, 240, 240);\n        LCUI_BoxShadow shadow = { .x = 0,\n                                  .y = 0,\n                                  .blur = 40,\n                                  .spread = 0,\n                                  .color = ARGB(150, 0, 0, 0),\n                                  .top_left_radius = border_radius,\n                                  .top_right_radius = border_radius,\n                                  .bottom_left_radius = border_radius,\n                                  .bottom_right_radius = border_radius };\n        LCUI_Rect shadow_box;\n        LCUI_Rect border_box;\n        LCUI_Rect bg_box;\n        LCUI_Rect layer_rect;\n        LCUI_PaintContext paint;\n\n        Graph_Init(&canvas);\n        Graph_Create(&canvas, width, height);\n        Graph_FillRect(&canvas, gray, NULL, FALSE);\n\n        // \u8bbe\u7f6e\u5c45\u4e2d\u7684\u80cc\u666f\u533a\u57df\n        bg_box.width = 400;\n        bg_box.height = 300;\n        bg_box.x = (width - bg_box.width) / 2;\n        bg_box.y = (height - bg_box.height) / 2;\n        // \u57fa\u4e8e\u80cc\u666f\u533a\u57df\uff0c\u8ba1\u7b97\u8fb9\u6846\u533a\u57df\n        border_box.x = bg_box.x - border_size;\n        border_box.y = bg_box.y - border_size;\n        border_box.width = bg_box.width + border_size * 2;\n        border_box.height = bg_box.height + border_size * 2;\n        // \u57fa\u4e8e\u8fb9\u6846\u533a\u57df\uff0c\u8ba1\u7b97\u9634\u5f71\u533a\u57df\n        BoxShadow_GetCanvasRect(&shadow, &border_box, &shadow_box);\n\n        // \u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u7ed8\u5236\u5c42\n        Graph_Init(&layer);\n        layer_rect.x = 0;\n        layer_rect.y = 0;\n        layer_rect.width = shadow_box.width;\n        layer_rect.height = shadow_box.height;\n        layer.color_type = LCUI_COLOR_TYPE_ARGB;\n        Graph_Create(&layer, layer_rect.width, layer_rect.height);\n\n        // \u57fa\u4e8e\u4e34\u65f6\u7ed8\u5236\u5c42\u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = LCUIPainter_Begin(&layer, &layer_rect);\n        paint->with_alpha = TRUE;\n        // \u5c06\u80cc\u666f\u533a\u57df\u548c\u8fb9\u6846\u533a\u57df\u7684\u5750\u6807\u8f6c\u6362\u6210\u76f8\u5bf9\u4e8e\u9634\u5f71\u533a\u57df\n        bg_box.x -= shadow_box.x;\n        bg_box.y -= shadow_box.y;\n        border_box.x -= shadow_box.x;\n        border_box.y -= shadow_box.y;\n        paint_background(paint, &bg_box);\n        paint_border(paint, &border_box, border_size, border_radius);\n        BoxShadow_Paint(&shadow, &layer_rect, border_box.width,\n                        border_box.height, paint);\n\n        // \u5c06\u4e34\u65f6\u7ed8\u5236\u5c42\u6df7\u5408\u5230\u753b\u5e03\u4e2d\n        Graph_Mix(&canvas, &layer, shadow_box.x, shadow_box.y, FALSE);\n        LCUI_WritePNGFile("test_paint_boxshadow.png", &canvas);\n        Graph_Free(&canvas);\n        return 0;\n}\n\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test_paint_boxshadow.png",src:e(8432).Z,width:"800",height:"600"})),(0,r.kt)("h3",{id:"\u5f85\u529e\u4e8b\u9879"},"\u5f85\u529e\u4e8b\u9879"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6837\u5f0f\u8f6c\u7ed8\u5236\u53c2\u6570\u7684\u51fd\u6570")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ed8\u5236\u80cc\u666f\u56fe\u7684\u793a\u4f8b\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\u50cf\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u8fd9\u7c7b\u53c2\u6570\u90fd\u8981\u6211\u4eec\u7f16\u5199\u4ee3\u7801\u53bb\u8ba1\u7b97\uff0c\u800c\u4e14\u9700\u8981\u4e9b\u5f88\u591a\u884c\u4ee3\u7801\u53bb\u9010\u4e2a\u8bbe\u7f6e\u5c5e\u6027\uff0c\u8981\u662f\u80fd\u7528 css \u4ee3\u7801\u63cf\u8ff0\u7684\u8bdd\u4f1a\u65b9\u4fbf\u5f88\u591a\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u51fd\u6570\u80fd\u591f\u8bfb\u53d6\u6837\u5f0f\u8868\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"background-")," \u5f00\u5934\u7684\u5c5e\u6027\u7136\u540e\u8f93\u51fa\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"LCUI_Background")," \u7c7b\u578b\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u5316\u5706\u89d2\u8fb9\u6846\u7684\u7ed8\u5236\u7b97\u6cd5")),(0,r.kt)("p",null,"\u5f53\u524d\u7684\u7ed8\u5236\u7b97\u6cd5\u7528\u4e86\u56db\u4e2a\u51fd\u6570\u5206\u522b\u7ed8\u5236\u5de6\u4e0a\u3001\u53f3\u4e0a\u3001\u53f3\u4e0b\u3001\u5de6\u4e0b\u89d2\u7684\u5706\u89d2\uff0c\u8fd9\u56db\u4e2a\u51fd\u6570\u5185\u7684\u4ee3\u7801\u5927\u90e8\u5206\u662f\u76f8\u540c\u7684\uff0c\u5e94\u8be5\u5c06\u5b83\u4eec\u7cbe\u7b80\u6210\u4e00\u4e2a\u51fd\u6570\u3002"))}p.isMDXComponent=!0},1705:(A,n,e)=>{e.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAIAAAAVFBUnAAAKx0lEQVR4nO3YQQ3DQBAEwTgKAIMIxoAwxoBYCCbR0km+KgTzbM0xMy8AADrv1QMAAJ5GYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEDss3oAO/r9z9UTgI1c31k9ge14sAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYgILACAmsAAAYsfMrN4AAPAoHiwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgNgNA+0NUcRChp0AAAAASUVORK5CYII="},1045:(A,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/test_paint_background_image-0c30578449ff2c7d7889afc1754ed341.png"},1820:(A,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/test_paint_background_image_with_position-b6f66c282296a2cf748b961562c738a7.png"},737:(A,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/test_paint_background_image_with_size-600068d0a42b8af7b3e23f9171a93bb4.png"},8099:(A,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/test_paint_border-b18a749fc995278ec64e4144bb557068.png"},8432:(A,n,e)=>{e.d(n,{Z:()=>t});const t=e.p+"assets/images/test_paint_boxshadow-6bf427e08e20ebdb9605d95ad832f9c6.png"}}]);