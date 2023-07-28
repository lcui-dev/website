"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,h=d["".concat(o,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(h,p(p({ref:n},s),{},{components:t})):r.createElement(h,p({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:i,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={},p="\u50cf\u7d20\u64cd\u4f5c",l={unversionedId:"graphics/pixel-operation",id:"version-2.x/graphics/pixel-operation",title:"\u50cf\u7d20\u64cd\u4f5c",description:"\u5728\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u5230\u56fe\u50cf\u7684\u6570\u636e\u7ed3\u6784\u3001\u6805\u683c\u3001\u5750\u6807\u7cfb\u548c\u5750\u6807\u8f6c\u4e0b\u6807\u7684\u65b9\u6cd5\uff0c\u4ec5\u51ed LCUI \u63d0\u4f9b\u7684\u8fd9\u70b9\u56fe\u5f62 API \u65e0\u6cd5\u8ba9\u6211\u4eec\u8f7b\u677e\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62\uff0c\u6240\u4ee5\u6211\u4eec\u6709\u5fc5\u8981\u5b66\u4f1a\u5982\u4f55\u64cd\u4f5c\u50cf\u7d20\u6570\u636e\uff0c\u4ee5\u4fbf\u81ea\u5df1\u624b\u52a8\u7f16\u7801\u6216\u501f\u52a9\u5176\u5b83\u56fe\u5f62\u5e93\u7684\u80fd\u529b\u6765\u7ed8\u5236\u56fe\u5f62\u3002",source:"@site/versioned_docs/version-2.x/graphics/pixel-operation.md",sourceDirName:"graphics",slug:"/graphics/pixel-operation",permalink:"/zh-Hans/docs/graphics/pixel-operation",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/graphics/pixel-operation.md",tags:[],version:"2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u56fe\u50cf\u6587\u4ef6\u64cd\u4f5c",permalink:"/zh-Hans/docs/graphics/image-file-operation"},next:{title:"\u5b57\u4f53",permalink:"/zh-Hans/docs/font/"}},o={},c=[{value:"\u56fe\u7247\u7070\u5ea6\u548c\u53cd\u76f8\u989c\u8272",id:"\u56fe\u7247\u7070\u5ea6\u548c\u53cd\u76f8\u989c\u8272",level:3}],s={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(d,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u50cf\u7d20\u64cd\u4f5c"},"\u50cf\u7d20\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5728\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u5230\u56fe\u50cf\u7684\u6570\u636e\u7ed3\u6784\u3001\u6805\u683c\u3001\u5750\u6807\u7cfb\u548c\u5750\u6807\u8f6c\u4e0b\u6807\u7684\u65b9\u6cd5\uff0c\u4ec5\u51ed LCUI \u63d0\u4f9b\u7684\u8fd9\u70b9\u56fe\u5f62 API \u65e0\u6cd5\u8ba9\u6211\u4eec\u8f7b\u677e\u7ed8\u5236\u590d\u6742\u7684\u56fe\u5f62\uff0c\u6240\u4ee5\u6211\u4eec\u6709\u5fc5\u8981\u5b66\u4f1a\u5982\u4f55\u64cd\u4f5c\u50cf\u7d20\u6570\u636e\uff0c\u4ee5\u4fbf\u81ea\u5df1\u624b\u52a8\u7f16\u7801\u6216\u501f\u52a9\u5176\u5b83\u56fe\u5f62\u5e93\u7684\u80fd\u529b\u6765\u7ed8\u5236\u56fe\u5f62\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u867d\u7136\u50cf\u7d20\u6570\u636e\u7684\u7c7b\u578b\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"LCUI_ARGB"),"\uff0c\u4f46\u8fd9\u4e9b\u989c\u8272\u901a\u9053\u7684\u503c\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u7684\u987a\u5e8f\u662f BGRA\u3002\u4e4b\u6240\u4ee5\u91c7\u7528\u8fd9\u79cd\u987a\u5e8f\uff0c\u662f\u56e0\u4e3a Linux \u4e2d\u7684\u5e27\u7f13\u5b58\uff08FrameBuffer\uff09 \u548c Windows \u4e2d\u7684\u4f4d\u56fe\u5bf9\u8c61\uff08HBITMAP\uff09 \u90fd\u662f\u8fd9\u6837\u3002")),(0,i.kt)("h3",{id:"\u56fe\u7247\u7070\u5ea6\u548c\u53cd\u76f8\u989c\u8272"},"\u56fe\u7247\u7070\u5ea6\u548c\u53cd\u76f8\u989c\u8272"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u5c06\u56fe\u7247\u5206\u6210\u56db\u4e2a\u90e8\u5206\uff0c\u5176\u4e2d\u4e09\u4e2a\u5206\u522b\u8fdb\u884c\u53cd\u8272\uff08inverted\uff09\u3001\u7070\u5ea6\uff08grayscale\uff09\u3001\u8910\u8272\uff08sepia\uff09\u5904\u7406\uff0c\u7136\u540e\u5c06\u5904\u7406\u7ed3\u679c\u8f93\u51fa\u5230\u56fe\u7247\u6587\u4ef6\u4e2d\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"invert()")," \u51fd\u6570\u5c06\u989c\u8272\u7684\u6700\u5927\u8272\u503c 255 \u51cf\u53bb\u50cf\u7d20\u7684\u8272\u503c\u4f5c\u4e3a\u7ed3\u679c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"grayscale()")," \u51fd\u6570\u5c06\u7ea2\u7eff\u84dd\u4e09\u8272\u503c\u7684\u5e73\u5747\u503c\u4f5c\u4e3a\u7ed3\u679c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u52a0\u6743\u5e73\u5747\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"x = 0.299r + 0.587g + 0.114b")," \u8fd9\u4e2a\u516c\u5f0f\uff0c\u66f4\u591a\u8d44\u6599\u8bf7\u53c2\u8003\u7ef4\u57fa\u767e\u79d1\u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Grayscale"},"Grayscale"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"sepia()")," \u51fd\u6570\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"grayscale()")," \u51fd\u6570\u91c7\u7528\u4e86\u7c7b\u4f3c\u7684\u7b97\u6cd5\u3002"),(0,i.kt)("p",null,"\u50cf\u7d20\u64cd\u4f5c\u7684\u6d41\u7a0b\u662f\u76f8\u4f3c\u7684\uff0c\u5148\u4f7f\u7528\u4e24\u5c42 for \u5faa\u73af\u5728\u6307\u5b9a\u533a\u57df\u5185\u5b9a\u4f4d\u8981\u64cd\u4f5c\u7684\u50cf\u7d20\u70b9\uff0c\u7136\u540e\u83b7\u53d6\u50cf\u7d20\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u4e4b\u540e\u5199\u5165\u6570\u636e\u5230\u56fe\u50cf\u4e2d\u3002\u4e3a\u4e86\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u6211\u4eec\u5c06\u91cd\u590d\u7684\u4ee3\u7801\u5b9a\u4e49\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"PixelManipulationBegin")," \u5b8f\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"PixelManipulationEnd")," \u5b8f\uff0c\u5176\u4e2d\u50cf\u7d20\u64cd\u4f5c\u7528\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"GraphGetPixel()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphSetPixel()")," \u662f\u51fd\u6570\u5f0f\u5b8f\uff0c\u5b83\u5c01\u88c5\u4e86\u5750\u6807\u8f6c\u4e0b\u6807\u7684\u8ba1\u7b97\u4ee3\u7801\uff0c\u4f7f\u5f97\u6211\u4eec\u65e0\u9700\u518d\u7f16\u5199\u5197\u957f\u7684\u4ee3\u7801\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5b83\u4f1a\u4e3a\u6bcf\u4e2a\u50cf\u7d20\u70b9\u8ba1\u7b97\u4e0b\u6807\uff0c\u800c\u8fd9\u8ba1\u7b97\u4e2d\u5305\u542b\u91cd\u590d\u8ba1\u7b97\uff0c\u6240\u4ee5\u6548\u7387\u6bd4\u8f83\u4f4e\uff0c\u5982\u679c\u4f60\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u6bd4\u8f83\u6ce8\u91cd\u6027\u80fd\u7684\u8bdd\u53ef\u4ee5\u505a\u4e00\u70b9\u4f18\u5316\uff0c\u4f8b\u5982\u5728 y \u8f74\u7684\u5faa\u73af\u91cc\u63d0\u524d\u8ba1\u7b97\u6bcf\u884c\u8d77\u70b9\u4e0b\u6807\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"row_start = y * graph.width + rect.x"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <math.h>\n#include <LCUI.h>\n#include <LCUI/image.h>\n\n#define PixelManipulationBegin                                   \\\n        int x, y;                                                \\\n        LCUI_Color pixel;                                        \\\n                                                                 \\\n        for (y = rect.y; y < rect.y + rect.height; ++y) {        \\\n                for (x = rect.x; x < rect.x + rect.width; ++x) { \\\n                        Graph_GetPixel(graph, x, y, pixel);\n\n#define PixelManipulationEnd                \\\n        Graph_SetPixel(graph, x, y, pixel); \\\n        }                                   \\\n        }\n\nvoid invert(LCUI_Graph *graph, LCUI_Rect rect)\n{\n        PixelManipulationBegin;\n        pixel.red = (unsigned char)(255 - pixel.red);\n        pixel.green = (unsigned char)(255 - pixel.green);\n        pixel.blue = (unsigned char)(255 - pixel.blue);\n        PixelManipulationEnd;\n}\n\nvoid grayscale(LCUI_Graph *graph, LCUI_Rect rect)\n{\n        unsigned char avg;\n\n        PixelManipulationBegin;\n        avg = (unsigned char)((pixel.red + pixel.green + pixel.blue) / 3);\n        pixel.red = avg;\n        pixel.green = avg;\n        pixel.blue = avg;\n        PixelManipulationEnd;\n}\n\nvoid sepia(LCUI_Graph *graph, LCUI_Rect rect)\n{\n        PixelManipulationBegin;\n        pixel.red = (unsigned char)min(\n            round(0.393 * pixel.red + 0.769 * pixel.green + 0.189 * pixel.blue),\n            255);\n        pixel.green = (unsigned char)min(\n            round(0.349 * pixel.red + 0.686 * pixel.green + 0.168 * pixel.blue),\n            255);\n        pixel.blue = (unsigned char)min(\n            round(0.272 * pixel.red + 0.534 * pixel.green + 0.131 * pixel.blue),\n            255);\n        PixelManipulationEnd;\n}\n\nint main(void)\n{\n        int i;\n        LCUI_Graph graph = { 0 };\n        LCUI_Rect rects[4];\n\n        if (LCUI_ReadImageFile("dog.jpg", &graph) != 0) {\n                return -1;\n        }\n        for (i = 0; i < 4; ++i) {\n                rects[i].height = graph.height;\n                rects[i].width = graph.width / 4;\n                rects[i].x = i * rects[i].width;\n                rects[i].y = 0;\n        }\n        sepia(&graph, rects[1]);\n        grayscale(&graph, rects[2]);\n        invert(&graph, rects[3]);\n        LCUI_WritePNGFile("test_pixel_manipulation.png", &graph);\n        return 0;\n}\n\n')),(0,i.kt)("p",null,"\u6e90\u56fe\u7247\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dog.jpg",src:t(9420).Z,width:"1440",height:"961"})),(0,i.kt)("p",null,"\u5904\u7406\u7ed3\u679c\uff08\u539f\u59cb\uff0c\u8910\u8272\uff0c\u7070\u5ea6\uff0c\u53cd\u8272\uff09\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test_pixel_manipulation.png",src:t(742).Z,width:"1440",height:"961"})))}u.isMDXComponent=!0},9420:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dog-a27c4d6f3c891227ef9f59d6c001b0c1.jpg"},742:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/test_pixel_manipulation-a1bb664e3124547640a7d032d26551ba.png"}}]);