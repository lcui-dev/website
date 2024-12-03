"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6e3],{1156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"rfc/lcui-cli/javascript-compiler","title":"CSS \u7f16\u8bd1\u5668","description":"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14","source":"@site/versioned_docs/version-3.x/rfc/lcui-cli/0006-javascript-compiler.md","sourceDirName":"rfc/lcui-cli","slug":"/rfc/lcui-cli/javascript-compiler","permalink":"/en/docs/rfc/lcui-cli/javascript-compiler","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0006-javascript-compiler.md","tags":[],"version":"3.x","sidebarPosition":6,"frontMatter":{},"sidebar":"rfcSidebar","previous":{"title":"SASS \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/sass-compiler"},"next":{"title":"React TSX \u7f16\u8bd1\u5668","permalink":"/en/docs/rfc/lcui-cli/react-tsx-compiler"}}');var s=t(4848),r=t(8453);const c={},a="CSS \u7f16\u8bd1\u5668",d={},l=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"css-\u7f16\u8bd1\u5668",children:"CSS \u7f16\u8bd1\u5668"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,s.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,s.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0 JavaScript \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u6267\u884c JavaScript \u6587\u4ef6\u5e76\u5c06\u5176\u8fd4\u56de\u7684 JSON \u6570\u636e\u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b JavaScript \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="home.js"',children:'module.exports = {\n  name: "lcui-app",\n  children: [\n    {\n      name: "resource",\n      attributes: { type: "text/css", src: "home.css" },\n    },\n    {\n      name: "resource",\n      attributes: {\n        type: "application/font-ttf",\n        src: "iconfont.ttf",\n      },\n    },\n    {\n      name: "ui",\n      children: [\n        {\n          name: "text",\n          children: [{ type: "text", text: "Enter a message and save it." }],\n        },\n        {\n          name: "textedit",\n          attributes: {\n            ref: "input-message",\n            placeholder: "eg: hello, world!",\n          },\n        },\n        {\n          name: "button",\n          attributes: { ref: "btn-save-message" },\n          children: [{ type: "text", text: "Save" }],\n        },\n        {\n          name: "text",\n          attributes: { ref: "feedback", class: "feedback" },\n          children: [{ type: "text", text: "Message has been saved!" }],\n        },\n      ],\n    },\n  ],\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="home.css"',children:"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c ",(0,s.jsx)(n.code,{children:"lcui compile home.js"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,s.jsx)(n.code,{children:"home.js.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",metastring:'title="home.js.h"',children:'/** This file is generated from home.js */\n\n#include <ui.h>\n\ntypedef struct {\n        ui_widget_t *input_message;\n        ui_widget_t *btn_save_message;\n        ui_widget_t *feedback;\n} Home_refs_t;\n\nstatic const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n\n\nstatic void Home_load_template(ui_widget_t *Home_parent, Home_refs_t *refs)\n{\n        ui_widget_t *w[4];\n\n        w[0] = ui_create_widget("text");\n        w[1] = ui_create_widget(NULL);\n        ui_widget_set_text(w[1], "Enter a message and save it.");\n        ui_widget_append(w[0], w[1]);\n        refs->input_message = ui_create_widget("textedit");\n        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");\n        refs->btn_save_message = ui_create_widget("button");\n        w[2] = ui_create_widget(NULL);\n        ui_widget_set_text(w[2], "Save");\n        ui_widget_append(refs->btn_save_message, w[2]);\n        refs->feedback = ui_create_widget("text");\n        ui_widget_add_class(refs->feedback, "feedback");\n        w[3] = ui_create_widget(NULL);\n        ui_widget_set_text(w[3], "Message has been saved!");\n        ui_widget_append(refs->feedback, w[3]);\n        ui_widget_append(Home_parent, w[0]);\n        ui_widget_append(Home_parent, refs->input_message);\n        ui_widget_append(Home_parent, refs->btn_save_message);\n        ui_widget_append(Home_parent, refs->feedback);\n}\n\nstatic void Home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.css");\n        pd_font_library_load_file("iconfont.ttf");\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:'#include "home.js.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e9b\u524d\u7aef\u5f00\u53d1\u76f8\u5173\u5de5\u5177\u652f\u6301 js \u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6709\u4e00\u5b9a\u7684\u9002\u7528\u573a\u666f\uff0c\u53ef\u4ee5\u52a0\u4e0a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.p,{children:"\u8bfb\u53d6 js \u6587\u4ef6\u5185\u5bb9\uff0c\u7136\u540e\u8c03\u7528 eval() \u51fd\u6570\u6267\u884c\uff0c\u5c06\u8fd4\u56de\u503c\u4f20\u7ed9 JSON \u7f16\u8bd1\u5668\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);