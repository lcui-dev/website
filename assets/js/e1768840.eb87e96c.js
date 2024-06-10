"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9726],{8041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var i=t(4848),s=t(8453);const c={},r="XML \u7f16\u8bd1\u5668",l={id:"rfc/lcui-cli/xml-compiler",title:"XML \u7f16\u8bd1\u5668",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-08-14",source:"@site/versioned_docs/version-3.x/rfc/lcui-cli/0002-xml-compiler.md",sourceDirName:"rfc/lcui-cli",slug:"/rfc/lcui-cli/xml-compiler",permalink:"/docs/rfc/lcui-cli/xml-compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/rfc/lcui-cli/0002-xml-compiler.md",tags:[],version:"3.x",sidebarPosition:2,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"JSON \u7f16\u8bd1\u5668",permalink:"/docs/rfc/lcui-cli/json-compiler"},next:{title:"YAML \u7f16\u8bd1\u5668",permalink:"/docs/rfc/lcui-cli/yaml-compiler"}},d={},a=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"xml-\u7f16\u8bd1\u5668",children:"XML \u7f16\u8bd1\u5668"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2023-08-14"}),"\n",(0,i.jsx)(n.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a1.x"}),"\n",(0,i.jsx)(n.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0 PR\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,i.jsx)(n.p,{children:"\u589e\u52a0 XML \u7f16\u8bd1\u5668\uff0c\u7528\u4e8e\u5c06 XML \u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b XML \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:"title=home.xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<lcui-app>\n  <resource type="text/css" src="home.css"/>\n  <resource type="application/font-ttf" src="iconfont.ttf"/>\n  <ui>\n    <text>Enter a message and save it.</text>\n    <textedit ref="input-message" placeholder="eg: hello, world!" />\n    <button ref="btn-save-message">Save</button>\n    <text ref="feedback" class="feedback">Message has been saved!</text>\n  </ui>\n</lcui-app>\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b CSS \u6587\u4ef6\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:"title=home.css",children:"root {\n  background-color: #f6f8fa;\n}\n\n.feedback {\n  color: #28a745;\n  font-size: 12px;\n  margin-top: 5px;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"lcui compile home.xml"})," \u547d\u4ee4\u540e\uff0c\u751f\u6210 ",(0,i.jsx)(n.code,{children:"home.xml.h"})," \u6587\u4ef6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",metastring:"title=home.xml.h",children:'/** This file is generated from home.xml */\n\n#include <ui.h>\n\ntypedef struct {\n        ui_widget_t *input_message;\n        ui_widget_t *btn_save_message;\n        ui_widget_t *feedback;\n} home_refs_t;\n\nstatic const char *css_str_0 = "\\\nroot {\\\n  background-color: #f6f8fa;\\\n}\\\n\\\n.feedback {\\\n  color: #28a745;\\\n  font-size: 12px;\\\n  margin-top: 5px;\\\n}\\\n\\\n";\n\n\nstatic void home_load_template(ui_widget_t *home_parent, home_refs_t *refs)\n{\n        ui_widget_t *w[5];\n\n        w[0] = ui_create_widget(NULL);\n        w[1] = ui_create_widget("text");\n        w[2] = ui_create_widget(NULL);\n        ui_widget_set_text(w[2], "Enter a message and save it.");\n        ui_widget_append(w[1], w[2]);\n        refs->input_message = ui_create_widget("textedit");\n        ui_widget_set_attr(refs->input_message, "placeholder", "eg: hello, world!");\n        refs->btn_save_message = ui_create_widget("button");\n        w[3] = ui_create_widget(NULL);\n        ui_widget_set_text(w[3], "Save");\n        ui_widget_append(refs->btn_save_message, w[3]);\n        refs->feedback = ui_create_widget("text");\n        ui_widget_add_class(refs->feedback, "feedback");\n        w[4] = ui_create_widget(NULL);\n        ui_widget_set_text(w[4], "Message has been saved!");\n        ui_widget_append(refs->feedback, w[4]);\n        ui_widget_append(home_parent, w[1]);\n        ui_widget_append(home_parent, refs->input_message);\n        ui_widget_append(home_parent, refs->btn_save_message);\n        ui_widget_append(home_parent, refs->feedback);\n}\n\nstatic void home_load_resources(void)\n{\n        ui_load_css_string(css_str_0, "home.css");\n        pd_font_library_load_file("iconfont.ttf");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"home.c"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:'#include "home.xml.h"'})," \u5373\u53ef\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,i.jsx)(n.p,{children:"LCUI \u7684 XML \u6587\u4ef6\u89e3\u6790\u529f\u80fd\u4f9d\u8d56 libxml2 \u5e93\uff0c\u8be5\u5e93\u7684\u4f53\u79ef\u8f83\u5927\uff0c\u5982\u679c LCUI CLI \u80fd\u9884\u5148\u5c06 XML \u6587\u4ef6\u7f16\u8bd1\u4e3a C \u4ee3\u7801\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u9ed8\u8ba4\u7981\u7528\u751a\u81f3\u5220\u9664 XML \u6587\u4ef6\u89e3\u6790\u529f\u80fd\uff0c\u4ee5\u51cf\u5c11 LCUI \u7684\u5e93\u6587\u4ef6\u4f53\u79ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0c\u540e\u7eed\u53ef\u4ee5\u57fa\u4e8e XML \u6dfb\u52a0 ref \u6536\u96c6\u3001CSS \u5b57\u7b26\u4e32\u5185\u5d4c\u7b49\u65b0\u7279\u6027\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,i.jsxs)(n.p,{children:["XML \u89e3\u6790\u5668\u57fa\u4e8e ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/xml-js",children:"xml-js"})," \u5b9e\u73b0\uff0c\u53c2\u8003\u5176\u6587\u6863\u8bbe\u7f6e\u89e3\u6790\u5668\u914d\u7f6e\u9879\u4ee5\u5c06\u7ed3\u70b9\u7684\u6570\u636e\u7ed3\u6784\u8f6c\u6362\u4e3a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  type: "element",\n  name: "widget",\n  attributes: {\n    attr: "value"\n  },\n  text: "",\n  children: []\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u8c03\u7528\u5df2\u6709\u7684 json \u7f16\u8bd1\u5668\u5c06\u5b83\u7f16\u8bd1\u4e3a C \u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"\u65e0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u9879\u65b0\u589e\u7684\u529f\u80fd\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);