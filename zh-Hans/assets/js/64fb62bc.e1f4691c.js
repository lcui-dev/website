"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9097],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var n=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var u=n.createContext({}),o=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},_="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),_=o(l),p=i,k=_["".concat(u,".").concat(p)]||_[p]||d[p]||r;return l?n.createElement(k,a(a({ref:t},c),{},{components:l})):n.createElement(k,a({ref:t},c))}));function k(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=l.length,a=new Array(r);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[_]="string"==typeof e?e:i,a[1]=s;for(var o=2;o<r;o++)a[o]=l[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},6035:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=l(7462),i=(l(7294),l(3905));const r={},a="CSS \u89e3\u6790\u5668\u548c\u9009\u62e9\u5f15\u64ce\u5e93",s={unversionedId:"rfcs/lib-css",id:"rfcs/lib-css",title:"CSS \u89e3\u6790\u5668\u548c\u9009\u62e9\u5f15\u64ce\u5e93",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-05-01",source:"@site/docs/rfcs/0005-lib-css.md",sourceDirName:"rfcs",slug:"/rfcs/lib-css",permalink:"/zh-Hans/docs/next/rfcs/lib-css",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/0005-lib-css.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"\u5b9e\u7528\u5de5\u5177\u5e93",permalink:"/zh-Hans/docs/next/rfcs/lib-yutil"},next:{title:"CSS \u503c\u5b9a\u4e49\u8bed\u6cd5",permalink:"/zh-Hans/docs/next/rfcs/lib-css-value-definition-syntax"}},u={},o=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u8c03\u6574\u547d\u540d",id:"\u8c03\u6574\u547d\u540d",level:3},{value:"\u8c03\u6574\u6570\u636e\u7ed3\u6784",id:"\u8c03\u6574\u6570\u636e\u7ed3\u6784",level:3},{value:"\u79fb\u9664\u7ebf\u7a0b\u5e93\u4f9d\u8d56",id:"\u79fb\u9664\u7ebf\u7a0b\u5e93\u4f9d\u8d56",level:3},{value:"\u79fb\u9664\u5b57\u4f53\u5e93\u548c UI \u5e93\u4f9d\u8d56",id:"\u79fb\u9664\u5b57\u4f53\u5e93\u548c-ui-\u5e93\u4f9d\u8d56",level:3},{value:"\u8c03\u6574 UI \u5e93\u7684\u6837\u5f0f\u64cd\u4f5c\u65b9\u6cd5",id:"\u8c03\u6574-ui-\u5e93\u7684\u6837\u5f0f\u64cd\u4f5c\u65b9\u6cd5",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],c={toc:o},_="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(_,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"css-\u89e3\u6790\u5668\u548c\u9009\u62e9\u5f15\u64ce\u5e93"},"CSS \u89e3\u6790\u5668\u548c\u9009\u62e9\u5f15\u64ce\u5e93"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-05-01"),(0,i.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a\u65e0")),(0,i.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,i.kt)("p",null,"\u5c06 CSS \u76f8\u5173\u7684\u529f\u80fd\u6a21\u5757\u6574\u5408\u4e3a\u72ec\u7acb\u7684\u5b50\u5e93\uff0c\u91cd\u65b0\u8bbe\u8ba1\u90e8\u5206\u63a5\u53e3\uff0c\u79fb\u9664\u5bf9 UI \u5e93\u3001\u7ebf\u7a0b\u5e93\u3001\u5b57\u4f53\u5e93\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <css.h>\n\nchar css_str[] = "\\\n* {\\\n    box-sizing: border-box;\\\n}\\\n.btn {\\\n    font-size: 14px;\\\n}\\\n";\n\nint main(void)\n{\n    css_prop_t *prop;\n    css_selector_t *selector;\n    css_style_decl_t *style;\n\n    css_init();\n    css_load_from_string(css_str);\n    selector = css_selector_create(".btn");\n    style = css_select_style(selector);\n    prop = css_style_decl_find(style, css_key_font_size);\n    if (prop != NULL) {\n        printf("font-size: %fpx\\n", prop->value.unit_value.value);\n    }\n    css_selector_destroy(selector);\n    css_style_decl_destroy(style);\n    css_destroy();\n    return 0;\n}\n')),(0,i.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u51cf\u5c11\u4f9d\u8d56\u9879\uff1a")," \u6837\u5f0f\u6570\u636e\u5e93\u64cd\u4f5c\u4f9d\u8d56\u7ebf\u7a0b\u5e93\u7684\u4e92\u65a5\u9501\u3001font-family \u5c5e\u6027\u89e3\u6790\u5668\u4f9d\u8d56\u5b57\u4f53\u5e93\u3001@font-face \u89c4\u5219\u89e3\u6790\u5668\u4f9d\u8d56 UI \u5e93\u7684 TextView \u90e8\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7ea0\u6b63 CSS \u76f8\u5173\u6570\u636e\u7c7b\u578b\u7684\u547d\u540d\uff1a")," \u90e8\u5206 CSS \u76f8\u5173\u6570\u636e\u7c7b\u578b\u547d\u540d\u5e76\u4e0d\u6b63\u786e\uff0c\u4f8b\u5982\uff1a\u6837\u5f0f\u8868\uff08StyleeSheet\uff09\u662f\u5305\u542b\u4e86 CSS \u89c4\u5219\u96c6\u7684\u5bf9\u8c61\uff0c\u7136\u800c ",(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_StyleSheet")," \u91cc\u9762\u5374\u662f CSS \u5c5e\u6027\u5217\u8868\uff0c\u6b63\u786e\u7684\u547d\u540d\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"StyleDeclaration"),"\u3002")),(0,i.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,i.kt)("h3",{id:"\u8c03\u6574\u547d\u540d"},"\u8c03\u6574\u547d\u540d"),(0,i.kt)("p",null,"\u4e3a\u63d0\u5347\u8fa8\u8bc6\u5ea6\uff0c\u6240\u6709\u6807\u8bc6\u7b26\u547d\u540d\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"css_")," \u5f00\u5934\u3002"),(0,i.kt)("p",null,"\u53c2\u8003 LibCSS \u5e93\u548c MDN \u4e2d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model"},"CSS \u5bf9\u8c61\u6a21\u578b"),"\u76f8\u5173\u7684\u6587\u7ae0\uff0c\u786e\u5b9a CSS \u5e93\u4e2d\u7684\u5bf9\u8c61\u7c7b\u578b\u540d\u548c\u91ca\u4e49\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"120"},"\u5bf9\u8c61"),(0,i.kt)("td",{width:"160"},"CSSOM \u4e2d\u7684\u540d\u79f0"),(0,i.kt)("td",{width:"160"},"CSS \u5e93\u4e2d\u7684\u540d\u79f0"),(0,i.kt)("td",null,"\u542b\u4e49"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u6837\u5f0f\u8868"),(0,i.kt)("td",null,"CSSStyleSheet"),(0,i.kt)("td",null,"css_stylesheet_t"),(0,i.kt)("td",null,"\u5404\u79cd\u89c4\u5219\u7684\u96c6\u5408")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u6837\u5f0f\u58f0\u660e"),(0,i.kt)("td",null,"CSSStyleDeclaration"),(0,i.kt)("td",null,"css_style_decl_t"),(0,i.kt)("td",null,"CSS \u5c5e\u6027\u952e\u503c\u5bf9\u7684\u96c6\u5408")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u89c4\u5219"),(0,i.kt)("td",null,"CSSRule"),(0,i.kt)("td",null,"css_rule_t"),(0,i.kt)("td",null,"\uff08\u5b57\u9762\u610f\u601d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u6837\u5f0f\u89c4\u5219"),(0,i.kt)("td",null,"CSSStyleRule"),(0,i.kt)("td",null,"css_style_rule_t"),(0,i.kt)("td",null,"\u5b9a\u4e49\u4e86\u4e00\u7ec4\u5c5e\u6027\u548c\u503c\uff0c\u4ee5\u53ca\u5e94\u7528\u8fd9\u4e9b\u5c5e\u6027\u548c\u503c\u7684\u5143\u7d20\u3002")))),(0,i.kt)("p",null,"\u4e3b\u8981\u6807\u8bc6\u7b26\u547d\u540d\u6539\u52a8\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_StyleSheet")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_style_decl_t"),"\uff0cStyleSheet \u4fdd\u5b58\u4e86\u6240\u6709 CSS \u5c5e\u6027\uff0c\u6570\u7ec4\u4e0b\u6807\u65e2\u662f\u5c5e\u6027\u7f16\u53f7\u3002\u4e3a\u8282\u7701\u5185\u5b58\u5360\u7528\uff0c\u6539\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"css_style_decl_t"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_StyleList")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_style_decl_t"),"\uff0cStyleList \u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u4ec5\u5b58\u50a8\u4e86\u4f7f\u7528\u7684 CSS \u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_Style")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_style_value_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_Selector")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_selector_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_SelectorNode")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_selector_node_t")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_LoadCSSFile()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_load_from_file()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_LoadCSSString()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_load_from_string()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CSSParser_Begin()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_parser_create()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CSSParser_End()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_parser_destroy()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LCUI_GetStyleSheet()")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"css_select_style()"))),(0,i.kt)("p",null,"\u5176\u5b83\u6539\u52a8\u662f\u76f8\u4f3c\u7684\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,i.kt)("h3",{id:"\u8c03\u6574\u6570\u636e\u7ed3\u6784"},"\u8c03\u6574\u6570\u636e\u7ed3\u6784"),(0,i.kt)("p",null,"\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API#cssstylevalue_interfaces"},"CSS Typed Object Model API")," \u6587\u6863\u4e2d\u7684\u5404\u79cd\u503c\u7c7b\u578b\u63a5\u53e3\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"LCUI_Style")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"px"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"sp"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"style"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"val_string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"val_image")," \u7b49\u6210\u5458\u6539\u4e3a\u5982\u4e0b\u6240\u793a\u7684\u51e0\u7c7b\u6210\u5458\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct css_style_value_t {\n        css_style_value_type_t type;\n        union {\n                css_private_value_t value;\n                css_numeric_value_t numeric_value;\n                css_integer_value_t integer_value;\n                css_string_value_t string_value;\n                css_unit_value_t unit_value;\n                css_color_value_t color_value;\n                css_image_value_t image_value;\n                css_unparsed_value_t unparsed_value;\n                css_keyword_value_t keyword_value;\n                css_style_array_value_t array_value;\n                css_boolean_value_t boolean_value;\n        };\n};\n")),(0,i.kt)("h3",{id:"\u79fb\u9664\u7ebf\u7a0b\u5e93\u4f9d\u8d56"},"\u79fb\u9664\u7ebf\u7a0b\u5e93\u4f9d\u8d56"),(0,i.kt)("p",null,"\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"LCUI_Mutex")," \u548c\u76f8\u5173\u51fd\u6570\u8c03\u7528\u3002"),(0,i.kt)("h3",{id:"\u79fb\u9664\u5b57\u4f53\u5e93\u548c-ui-\u5e93\u4f9d\u8d56"},"\u79fb\u9664\u5b57\u4f53\u5e93\u548c UI \u5e93\u4f9d\u8d56"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"css_font_face_parser_t")," \u5185\u65b0\u589e callback \u51fd\u6570\u6307\u9488\u6210\u5458\uff0c\u65b0\u589e ",(0,i.kt)("inlineCode",{parentName:"p"},"css_font_face_parser_on_load()")," \u51fd\u6570\u7528\u4e8e\u8bbe\u7f6e callback\uff0c\u7531 UI \u5e93\u8c03\u7528\u5b83\u6765\u54cd\u5e94\u5b57\u4f53\u52a0\u8f7d\u3002"),(0,i.kt)("h3",{id:"\u8c03\u6574-ui-\u5e93\u7684\u6837\u5f0f\u64cd\u4f5c\u65b9\u6cd5"},"\u8c03\u6574 UI \u5e93\u7684\u6837\u5f0f\u64cd\u4f5c\u65b9\u6cd5"),(0,i.kt)("p",null,"\u53d6\u6d88 ",(0,i.kt)("inlineCode",{parentName:"p"},"Widget_SetStyle()")," \u51fd\u6570\u5b8f\uff0c\u65b0\u589e\u51e0\u4e2a\u51fd\u6570\u7528\u4e8e\u64cd\u4f5c\u4e0d\u540c\u7c7b\u578b\u7684\u5c5e\u6027\u503c\uff0c\u547d\u540d\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"ui_widget_set_style_")," \u5f00\u5934\uff0c\u540e\u9762\u63a5 CSS \u5c5e\u6027\u503c\u7c7b\u578b\u540d\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void ui_widget_set_style_unit_value(ui_widget_t *w, int key,\n                                    css_numeric_value_t value,\n                                    css_unit_t unit);\nvoid ui_widget_set_style_keyword_value(ui_widget_t *w, int key,\n                                       css_keyword_value_t value);\nvoid ui_widget_set_style_color_value(ui_widget_t *w, int key,\n                                     css_color_value_t value);\nvoid ui_widget_set_style_numeric_value(ui_widget_t *w, int key,\n                                       css_numeric_value_t value);\n")),(0,i.kt)("p",null,"\u7528\u6cd5\u5bf9\u6bd4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// \u4e4b\u524d\nWidget_SetStyle(widget, key_width, 100, px);\n\n// \u4e4b\u540e\nui_widget_set_style_unit_value(widget, css_prop_width, 100, CSS_UNIT_PX);\n")),(0,i.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,i.kt)("p",null,"\u65e0\u3002"),(0,i.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,i.kt)("p",null,"\u53c2\u8003 LibCSS \u7684\u8bbe\u8ba1\uff0c\u66f4\u6539\u6570\u636e\u7c7b\u578b\u548c\u51fd\u6570\u7684\u547d\u540d\uff0c\u4f7f CSS \u5e93\u7684\u7528\u6cd5\u4e0e LibCSS \u5e93\u9ad8\u5ea6\u76f8\u4f3c\u3002\u8fd9\u4e2a\u65b9\u6848\u6210\u672c\u592a\u9ad8\uff0c\u6682\u4e0d\u8003\u8651\u3002"),(0,i.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u9700\u8981\u5bf9\u6240\u6709\u7528\u5230 CSS \u529f\u80fd\u7684\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u7531\u4e8e\u4e3b\u8981\u6539\u52a8\u90fd\u5728\u547d\u540d\u4e0a\uff0c\u8fd9\u4e9b\u6587\u4ef6\u901a\u5e38\u53ea\u9700\u8981\u5168\u5c40\u66ff\u6362\u540d\u79f0\u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);