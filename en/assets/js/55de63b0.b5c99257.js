"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1031],{1618:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>S,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=r(4848),t=r(8453);const c={description:"CSS \u89e3\u6790\u5668\u7684\u6d41\u7a0b\u548c\u89e3\u6790\u5668\u7684\u6dfb\u52a0\u65b9\u6cd5\u4ecb\u7ecd\u3002"},a="CSS \u89e3\u6790\u5668",i={id:"css/parser",title:"CSS \u89e3\u6790\u5668",description:"CSS \u89e3\u6790\u5668\u7684\u6d41\u7a0b\u548c\u89e3\u6790\u5668\u7684\u6dfb\u52a0\u65b9\u6cd5\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/css/parser.md",sourceDirName:"css",slug:"/css/parser",permalink:"/en/docs/2.x/css/parser",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/css/parser.md",tags:[],version:"2.x",frontMatter:{description:"CSS \u89e3\u6790\u5668\u7684\u6d41\u7a0b\u548c\u89e3\u6790\u5668\u7684\u6dfb\u52a0\u65b9\u6cd5\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"CSS \u6570\u636e\u5e93",permalink:"/en/docs/2.x/css/library"},next:{title:"\u5e03\u5c40",permalink:"/en/docs/2.x/layout/"}},l={},o=[{value:"\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u7b80\u5355\u7684\u4f8b\u5b50",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"\u6dfb\u52a0 at \u89c4\u5219\u89e3\u6790\u5668",id:"\u6dfb\u52a0-at-\u89c4\u5219\u89e3\u6790\u5668",level:3},{value:"\u6dfb\u52a0 CSS \u5c5e\u6027\u89e3\u6790\u5668",id:"\u6dfb\u52a0-css-\u5c5e\u6027\u89e3\u6790\u5668",level:3},{value:"\u5f85\u529e\u4e8b\u9879",id:"\u5f85\u529e\u4e8b\u9879",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"css-\u89e3\u6790\u5668",children:"CSS \u89e3\u6790\u5668"}),"\n",(0,s.jsx)(n.h3,{id:"\u7b80\u5355\u7684\u4f8b\u5b50",children:"\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4ece\u5b57\u7b26\u4e32\u4e2d\u52a0\u8f7d CSS \u6837\u5f0f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <LCUI.h>\n#include <LCUI/gui/css_library.h>\n#include <LCUI/gui/css_parser.h>\n\nint main(void)\n{\n    LCUI_Selector selector = Selector(".button");\n    LCUI_StyleSheet stylesheet = StyleSheet();\n\n    LCUI_InitCSSLibrary();\n    LCUI_InitCSSParser();\n    LCUI_LoadCSSString(".toolbar .button { color: #000 }");\n    LCUI_GetStyleSheet(selector, stylesheet);\n    LCUI_PrintStyleSheet(stylesheet);\n    StyleSheet_Delete(stylesheet);\n    Selector_Delete(selector);\n    LCUI_FreeCSSParser();\n    LCUI_FreeCSSLibrary();\n    return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LCUI_LoadCSSString()"})," \u51fd\u6570\u7528\u4e8e\u4ece\u5b57\u7b26\u4e32\u4e2d\u52a0\u8f7d CSS \u6837\u5f0f\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u5b83\u5185\u90e8\u4f1a\u8c03\u7528\u4e00\u7cfb\u5217\u7684\u89e3\u6790\u5668\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u89e3\u6790\uff0c\u6700\u7ec8\u8f6c\u6362\u6210\u4fbf\u4e8e\u64cd\u4f5c\u7684\u6570\u636e\u7ed3\u6784\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5de5\u4f5c\u6d41\u7a0b",children:"\u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"CSS \u89e3\u6790\u5668\u5728\u89e3\u6790\u65f6\u4f1a\u5c06\u89e3\u6790\u76ee\u6807\u5206\u4e3a\uff1a\u65e0\u3001\u6ce8\u91ca\u3001\u89c4\u5219\u540d\u79f0\u3001\u89c4\u5219\u6570\u636e\u3001\u9009\u62e9\u5668\u3001CSS \u5c5e\u6027\u540d \u548c CSS \u5c5e\u6027\u503c\uff0c\u4f8b\u5982\u4ee5\u4e0b CSS \u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'@import "common.css";\n\n/* button style */\n.btn {\n  font-size: 16px;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"CSS \u89e3\u6790\u5668\u4f1a\u5c06\u5b83\u8bc6\u522b\u4e3a\u4ee5\u4e0b\u76ee\u6807\u8fdb\u884c\u89e3\u6790\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"@[rule-name] [rule-data];\n\n[comment]\n[selector] {\n    [css-property-name]: [css-property-value];\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u4e2a\u89e3\u6790\u76ee\u6807\u90fd\u6709\u5bf9\u5e94\u7684\u89e3\u6790\u5668\uff0c\u5b83\u4eec\u7684\u89e3\u6790\u884c\u4e3a\u5927\u81f4\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["**\u65e0\uff1a**\u5bfb\u627e\u89e3\u6790\u76ee\u6807\uff0c\u904d\u5386\u5b57\u7b26\u4e32\uff0c\u6839\u636e\u5f53\u524d\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u6765\u51b3\u5b9a\u5207\u6362\u5230\u54ea\u79cd\u89e3\u6790\u76ee\u6807\uff0c\u4f8b\u5982\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u662f ",(0,s.jsx)(n.code,{children:"@"})," \uff0c\u5219\u5207\u6362\u89e3\u6790\u76ee\u6807\u4e3a\u89c4\u5219\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"**\u89c4\u5219\u540d\u79f0\uff1a**\u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u76f4\u5230\u8bfb\u53d6\u7684\u5b57\u7b26\u662f\u7a7a\u767d\u7b26\u4e3a\u6b62\uff0c\u89e3\u6790\u5b8c\u540e\u5207\u6362\u89e3\u6790\u76ee\u6807\u4e3a\u89c4\u5219\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"**\u89c4\u5219\u6570\u636e\uff1a**\u5982\u679c\u6709\u4e0e\u89c4\u5219\u540d\u79f0\u5bf9\u5e94\u7684\u89c4\u5219\u89e3\u6790\u5668\uff0c\u5219\u8c03\u7528\u5b83\u89e3\u6790\uff0c\u5426\u5219\u5ffd\u7565\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["**\u9009\u62e9\u5668\uff1a**\u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u76f4\u5230\u89e3\u6790\u5230\u5de6\u62ec\u53f7 ",(0,s.jsx)(n.code,{children:"{"})," \u4e3a\u6b62\uff0c\u8f6c\u6362\u5b57\u7b26\u4e32\u4e3a\u9009\u62e9\u5668\uff0c\u7136\u540e\u5207\u6362\u89e3\u6790\u76ee\u6807\u4e3a CSS \u5c5e\u6027\u540d\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["**CSS \u5c5e\u6027\u540d\uff1a**\u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u76f4\u5230\u5192\u53f7 ",(0,s.jsx)(n.code,{children:":"}),"\u4e3a\u6b62\uff0c\u5c06\u5b58\u50a8\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5c5e\u6027\u540d\uff0c\u5e76\u8bb0\u5f55\u5bf9\u5e94\u7684 CSS \u5c5e\u6027\u89e3\u6790\u5668\uff0c\u7136\u540e\u5207\u6362\u89e3\u6790\u76ee\u6807\u4e3a CSS \u5c5e\u6027\u503c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["**CSS \u5c5e\u6027\u503c\uff1a**\u5b58\u50a8\u6bcf\u4e2a\u5b57\u7b26\u76f4\u5230\u53f3\u62ec\u53f7 ",(0,s.jsx)(n.code,{children:"}"})," \u6216\u5206\u53f7 ",(0,s.jsx)(n.code,{children:";"})," \u4e3a\u6b62\uff0c\u5982\u679c\u5b58\u5728\u5bf9\u5e94\u7684 CSS \u5c5e\u6027\u89e3\u6790\u5668\uff0c\u5219\u8c03\u7528\u5b83\u66f4\u65b0\u5f53\u524d\u89e3\u6790\u4e0a\u4e0b\u6587\u4e2d\u7684\u6837\u5f0f\u8868\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["**\u6ce8\u91ca\uff1a**\u4ee5\u4e0a\u89e3\u6790\u5668\u5728\u89e3\u6790\u5230\u659c\u6746 ",(0,s.jsx)(n.code,{children:"/"})," \u65f6\u90fd\u4f1a\u5207\u6362\u89e3\u6790\u76ee\u6807\u4e3a\u6ce8\u91ca\uff0c\u5f53\u89e3\u6790\u5b8c\u6ce8\u91ca\u540e\u518d\u6062\u590d\u89e3\u6790\u76ee\u6807\u4e3a\u4e0a\u4e2a\u89e3\u6790\u76ee\u6807\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6dfb\u52a0-at-\u89c4\u5219\u89e3\u6790\u5668",children:"\u6dfb\u52a0 at \u89c4\u5219\u89e3\u6790\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\u9884\u8bbe\u7684 at \u89c4\u5219\u6709\uff1a",(0,s.jsx)(n.code,{children:"@font-face"}),"\u3001",(0,s.jsx)(n.code,{children:"@import"})," \u548c ",(0,s.jsx)(n.code,{children:"@media"}),"\uff0c\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"@media"})," \u89c4\u5219\u89e3\u6790\u6682\u672a\u5b9e\u73b0\uff0c\u5982\u679c\u4f60\u60f3\u6dfb\u52a0\u65b0\u7684 at \u89c4\u5219\u89e3\u6790\u5668\uff0c\u5219\u5fc5\u987b\u4fee\u6539 CSS \u89e3\u6790\u5668\u6e90\u7801\u624d\u80fd\u505a\u5230\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u7f16\u8f91",(0,s.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/include/LCUI/gui/css_parser.h#L62",children:" include/LCUI/gui/css_parser.h"})," \u5934\u6587\u4ef6\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"LCUI_CSSRule"})," \u679a\u4e3e\u7684\u5b9a\u4e49\u91cc\u8ffd\u52a0\u4f60\u7684\u65b0\u89c4\u5219\u7684\u679a\u4e3e\u503c\uff08\u4f8b\u5982\uff1a",(0,s.jsx)(n.code,{children:"CSS_RULE_MY_RULE"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u5b9a\u4e49\u4f60\u7684\u89c4\u5219\u89e3\u6790\u4e0a\u4e0b\u6587\u548c\u89e3\u6790\u5668\u51fd\u6570\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define GetParserContext(CTX) (CTX)->rule.parsers[CSS_RULE_MY_RULE].data\n\ntypedef struct MyRuleParserContextRec_ {\n    // Define your data\n    // ...\n} MyRuleParserContextRec, *MyRuleParserContext;\n\nstatic int MyRuleParser_Begin(LCUI_CSSParserContext ctx)\n{\n    // Initialize your parser context\n    // ...\n    // ctx->\n    ctx->rule.state = /* your parser initial state */;\n    return 0;\n}\n\nstatic void MyRuleParser_End(LCUI_CSSParserContext ctx)\n{\n    MyRuleParserContext data = GetParserContext(ctx);\n\n    // Destroy your data\n    // ...\n    // free(data->xxx);\n}\n\nint CSSParser_InitMyRuleParser(LCUI_CSSParserContext ctx)\n{\n    LCUI_CSSRuleParser parser;\n    FontFaceParserContext data;\n\n    parser = &ctx->rule.parsers[CSS_RULE_MY_RULE];\n    data = NEW(MyRuleParserContextRec, 1);\n    if (!data) {\n        return -ENOMEM;\n    }\n    // Initialize your data\n    // ...\n    // data->xxxx = xxxx;\n    parser->data = data;\n    parser->parse = MyRuleParser_Parse;\n    parser->begin = MyRuleParser_Begin;\n    strcpy(parser->name, "my-rule");\n    return 0;\n}\n\n\nvoid CSSParser_FreeMyRuleParser(LCUI_CSSParserContext ctx)\n{\n    FontFaceParserContext data = GetParserContext(ctx);\n\n    MyRuleParser_End(ctx);\n    free(data);\n    ctx->rule.parsers[CSS_RULE_MY_RULE].data = NULL;\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5b9a\u4e49\u597d\u540e\uff0c\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/gui/css_parser.c",children:"src/gui/css_parser.c"})," \u7684\u4e2d\u8ffd\u52a0\u8c03\u7528\u4f60\u7684\u89e3\u6790\u5668\u7684\u521d\u59cb\u5316\u548c\u9500\u6bc1\u51fd\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"LCUI_CSSParserContext CSSParser_Begin(size_t buffer_size, const char *space)\n{\n    ...\n    \n    CSSParser_InitMyRuleParser(ctx);\n    return ctx;\n}\n\nvoid CSSParser_End(LCUI_CSSParserContext ctx)\n{\n    ...\n    CSSParser_FreeMyRuleParser(ctx);\n    ...\n    free(ctx->buffer);\n    free(ctx);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u8be6\u7ec6\u7684\u89c4\u5219\u89e3\u6790\u5668\u5b9e\u73b0\u65b9\u5f0f\uff0c\u53ef\u53c2\u8003 ",(0,s.jsx)(n.code,{children:"@font-face"})," \u89c4\u5219\u89e3\u6790\u5668\u7684\u6e90\u7801\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/gui/css_rule_font_face.c",children:"src/gui/css_rule_font_face.c"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6dfb\u52a0-css-\u5c5e\u6027\u89e3\u6790\u5668",children:"\u6dfb\u52a0 CSS \u5c5e\u6027\u89e3\u6790\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6dfb\u52a0\u65b0\u7684 CSS \u5c5e\u6027\u89e3\u6790\u5668\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u7528 ",(0,s.jsx)(n.code,{children:"LCUI_AddCssPropertyName()"})," \u6ce8\u518c\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u79f0\uff0c\u62ff\u5230\u8be5\u5c5e\u6027\u7684\u6807\u8bc6\u53f7\uff0c\u4e5f\u5c31\u662f\u8be5\u5c5e\u6027\u5728\u6837\u5f0f\u8868\u4e2d\u7684\u4e0b\u6807\uff0c\u7136\u540e\u8c03\u7528",(0,s.jsx)(n.code,{children:"LCUI_AddCSSPropertyParser()"})," \u51fd\u6570\u6ce8\u518c\u6211\u4eec\u7684\u89e3\u6790\u5668\u7684\u81ea\u5b9a\u4e49\u6807\u8bc6\u53f7\u3001\u89e3\u6790\u51fd\u6570\u548c\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u4ece\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u6765\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 CSS \u5c5e\u6027\u89e3\u6790\u5668\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define GetMYPropertyKey(CTX) keys[(CTX)->parser->key]\n#define SetMyProperty(CTX, S) \\\n\tCSSStyleParser_SetCSSProperty(CTX, GetMYPropertyKey(CTX), S);\n\nenum CSSMyPropertyKey {\n    key_my_css_property,\n    // define other css property keys\n    // key_xxx\n    // ...\n    MY_PROPERTY_KEY_TOTAL\n};\n\nstatic int keys[MY_PROPERTY_KEY_TOTAL];\n\nstatic int OnParseMyCSSProperty(LCUI_CSSParserStyleContext ctx, const char *str)\n{\n    LCUI_StyleRec style;\n\n    // parse data from str\n    // ...\n    \n    CSSStyleParser_SetCSSProperty(ctx, keys[ctx->parser-key], style);\n    return 0;\n}\n\nvoid InitMyCSSProperties(void)\n{\n    LCUI_CSSPropertyParserRec my_parser = {\n        key_my_css_property,\n        "my-css-property",\n        OnParseMyCSSProperty\n    };\n    \n    keys[my_parser->key] = LCUI_AddCSSPropertyName(my_parser->name);\n    LCUI_AddCSSPropertyParser(my_parser);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u9700\u4e86\u89e3\u66f4\u8be6\u7ec6\u7684 CSS \u5c5e\u6027\u89e3\u6790\u5668\u5b9e\u73b0\u65b9\u5f0f\uff0c\u53ef\u53c2\u8003\u5b57\u4f53\u6837\u5f0f\u89e3\u6790\u5668\u7684\u6e90\u7801\uff1a",(0,s.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/master/src/gui/css_fontstyle.c",children:"src/gui/css_fontstyle.c"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u5f85\u529e\u4e8b\u9879",children:"\u5f85\u529e\u4e8b\u9879"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5b8c\u5584 CSS \u89e3\u6790\u5668\u7684\u9519\u8bef\u5904\u7406"})}),"\n",(0,s.jsx)(n.p,{children:"CSS \u89e3\u6790\u5668\u662f\u4ee5 CSS \u4ee3\u7801\u5b8c\u5168\u6b63\u786e\u4e3a\u524d\u63d0\u800c\u5de5\u4f5c\u7684\uff0c\u4e00\u65e6\u52a0\u8f7d\u7684 CSS \u4ee3\u7801\u5b58\u5728\u8bed\u6cd5\u9519\u8bef\u6216\u4e0d\u652f\u6301\u7684\u8bed\u6cd5\u65f6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u602a\u5f02\u7684\u89e3\u6790\u884c\u4e3a\u548c\u89e3\u6790\u7ed3\u679c\uff0c\u4e3a\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u6211\u4eec\u5e94\u8be5\u8865\u5145\u9519\u8bef\u5224\u65ad\u5e76\u8f93\u51fa\u76f8\u5173\u9519\u8bef\u4fe1\u606f\uff0c\u4ee5\u4fbf\u5f00\u53d1\u8005\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"})]})}function S(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(6540);const t={},c=s.createContext(t);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);