"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8379],{9422:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"app/mainloop","title":"\u4e3b\u5faa\u73af","description":"\u4e3b\u5faa\u73af\u7684\u6982\u5ff5\u548c\u76f8\u5173\u529f\u80fd\u4ecb\u7ecd\u3002","source":"@site/versioned_docs/version-2.x/app/mainloop.md","sourceDirName":"app","slug":"/app/mainloop","permalink":"/docs/2.x/app/mainloop","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/app/mainloop.md","tags":[],"version":"2.x","frontMatter":{"description":"\u4e3b\u5faa\u73af\u7684\u6982\u5ff5\u548c\u76f8\u5173\u529f\u80fd\u4ecb\u7ecd\u3002"},"sidebar":"docsSidebar","previous":{"title":"\u5b9e\u4f8b","permalink":"/docs/2.x/app/"},"next":{"title":"\u5de5\u4f5c\u7ebf\u7a0b","permalink":"/docs/2.x/app/worker"}}');var t=i(4848),c=i(8453);const s={description:"\u4e3b\u5faa\u73af\u7684\u6982\u5ff5\u548c\u76f8\u5173\u529f\u80fd\u4ecb\u7ecd\u3002"},r="\u4e3b\u5faa\u73af",l={},a=[{value:"\u5e27\u7387\u63a7\u5236",id:"\u5e27\u7387\u63a7\u5236",level:3},{value:"\u591a\u4e2a\u4e3b\u5faa\u73af",id:"\u591a\u4e2a\u4e3b\u5faa\u73af",level:3},{value:"\u4e0d\u4f7f\u7528\u4e3b\u5faa\u73af",id:"\u4e0d\u4f7f\u7528\u4e3b\u5faa\u73af",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u4e3b\u5faa\u73af",children:"\u4e3b\u5faa\u73af"})}),"\n",(0,t.jsx)(e.p,{children:"\u5e94\u7528\u7a0b\u5e8f\u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u4e3a\u4e86\u80fd\u591f\u4e0d\u65ad\u7684\u5bf9\u7528\u6237\u7684\u64cd\u4f5c\u8fdb\u884c\u54cd\u5e94\u548c\u53cd\u9988\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u662f\u5c06\u4e8b\u4ef6\u5904\u7406\u3001\u72b6\u6001\u66f4\u65b0\u548c\u754c\u9762\u91cd\u7ed8\u7b49\u4efb\u52a1\u5f80\u590d\u6267\u884c\uff0c\u800c\u8fd9\u4e00\u5faa\u73af\u6267\u884c\u7684\u8fc7\u7a0b\u5373\u4e3a\u4e3b\u5faa\u73af\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["LCUI \u7684\u4e3b\u5faa\u73af\u6240\u6267\u884c\u7684\u4efb\u52a1\u5305\u62ec\u5904\u7406\u5b9a\u65f6\u5668\u3001\u5904\u7406\u4e8b\u4ef6\u961f\u5217\u3001\u66f4\u65b0\u7ec4\u4ef6\u3001\u6e32\u67d3\u7ec4\u4ef6\u7b49\uff0c\u8fd9\u4e9b\u4efb\u52a1\u7684\u8c03\u5ea6\u4ee3\u7801\u90fd\u5728 ",(0,t.jsx)(e.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/src/main.c#L214-L224",children:"src/main.c"})," \u6587\u4ef6\u4e2d\u7684 ",(0,t.jsx)(e.code,{children:"LCUI_RunFrame()"})," \u51fd\u6570\u4e2d\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void LCUI_RunFrame(void)\n{\n\tLCUI_ProcessTimers();\n\tLCUI_ProcessEvents();\n\tLCUICursor_Update();\n\tLCUIWidget_Update();\n\tLCUIDisplay_Update();\n\tLCUIDisplay_Render();\n\tLCUIDisplay_Present();\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u5e27\u7387\u63a7\u5236",children:"\u5e27\u7387\u63a7\u5236"}),"\n",(0,t.jsx)(e.p,{children:"\u4e3b\u5faa\u73af\u7684\u6bcf\u6b21\u5faa\u73af\u5373\u4e3a\u4e00\u5e27\uff0c\u4e3a\u4e86\u907f\u514d\u4e0d\u5fc5\u8981\u7684 CPU \u8d44\u6e90\u5360\u7528\uff0c\u4e3b\u5faa\u73af\u7684\u6267\u884c\u9891\u7387\u4f1a\u53d7\u5230\u5e27\u7387\u63a7\u5236\uff0c\u9884\u8bbe\u7684\u5e27\u7387\u9650\u5236\u662f 120 \u5e27\u6bcf\u79d2\uff0c\u4e5f\u5c31\u662f\u4e3b\u5faa\u73af\u6bcf\u79d2\u6700\u591a\u6267\u884c 120 \u904d\uff0c\u6bcf\u5e27\u81f3\u5c11\u5360\u7528\u7ea6 8.33 \u6beb\u79d2\u7684\u65f6\u95f4\uff0c\u5982\u679c\u4e00\u5e27\u7684\u8017\u65f6\u4f4e\u4e8e 8.33 \u6beb\u79d2\u5219\u4f1a\u5229\u7528\u5269\u4e0b\u7684\u65f6\u95f4\u8fdb\u5165\u4f11\u7720\u72b6\u6001\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u60f3\u8981\u81ea\u5b9a\u4e49\u5e27\u7387\u9650\u5236\uff0c\u53ef\u4ee5\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"LCUI_ApplySettings()"})," \u4fee\u6539\u5168\u5c40\u8bbe\u7f6e\u4e2d\u7684 ",(0,t.jsx)(e.code,{children:"frame_rate_cap"})," \u8bbe\u7f6e\u9879\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#include <LCUI.h>\n#include <LCUI/settings.h>\n\nint main(void)\n{\n    LCUI_SettingsRec settings;\n    \n    Settings_Init(&settings);\n    settings.frame_rate_cap = 60;\n    LCUI_ApplySettings(&settings);\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u591a\u4e2a\u4e3b\u5faa\u73af",children:"\u591a\u4e2a\u4e3b\u5faa\u73af"}),"\n",(0,t.jsxs)(e.p,{children:["\u8bd5\u7740\u8003\u8651\u8fd9\u79cd\u573a\u666f\uff1a\u5728\u7528\u6237\u70b9\u51fb\u6309\u94ae\u540e\u5f39\u51fa\u4e00\u4e2a\u786e\u8ba4\u6846\uff0c\u7b49\u5f85\u7528\u6237\u70b9\u51fb\u786e\u8ba4\u540e\u518d\u6267\u884c\u64cd\u4f5c\u3002\u8fd9\u79cd\u573a\u666f\u6bd4\u8f83\u5e38\u89c1\uff0c\u6211\u4eec\u4f1a\u5e0c\u671b\u6709\u4e2a ",(0,t.jsx)(e.code,{children:"ShowConfirmDialog()"})," \u51fd\u6570\u80fd\u591f\u5b8c\u6210\u8fd9\u4ef6\u4e8b\u60c5\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'LCUI_BOOL ShowConfirmDialog(const char *title, const char *content)\n{\n    ...\n    if (isOkButtonClicked) {\n        return TRUE;\n    }\n    return FALSE;\n}\n\nvoid OnButtonClick()\n{\n    if (ShowConfirmDialog("Confirm", "Are you sure you want to do it?")) {\n        DoSomeThing();\n    }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u5668\u90fd\u662f\u5728\u4e3b\u5faa\u73af\u4e2d\u6267\u884c\u7684\uff0c\u5982\u679c ",(0,t.jsx)(e.code,{children:"ShowConfirmDialog()"})," \u51fd\u6570\u8981\u7b49\u5230\u7528\u6237\u70b9\u51fb\u5f39\u6846\u91cc\u7684\u6309\u94ae\u540e\u624d\u9000\u51fa\u7684\u8bdd\uff0c\u5b83\u5728\u8fd9\u6bb5\u7b49\u5f85\u65f6\u95f4\u5185\u4f1a\u4e00\u76f4\u963b\u585e\u4e3b\u5faa\u73af\u7684\u6267\u884c\uff0c\u5bfc\u81f4\u6574\u4e2a\u754c\u9762\u65e0\u6cd5\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\uff0c\u7531\u4e8e\u754c\u9762\u65e0\u6cd5\u54cd\u5e94\u64cd\u4f5c\uff0c ",(0,t.jsx)(e.code,{children:"ShowConfirmDialog()"})," \u51fd\u6570\u4e5f\u65e0\u6cd5\u5f97\u77e5\u7528\u6237\u662f\u5426\u70b9\u51fb\u4e86\u786e\u8ba4\u6309\u94ae\u6216\u53d6\u6d88\u6309\u94ae\uff0c\u8fd9\u5c31\u6210\u4e86\u4e00\u4e2a\u6b7b\u5faa\u73af\uff0c\u90a3\u4e48\u5982\u4f55\u89e3\u51b3\u6b64\u95ee\u9898\uff1f\u6709\u4e00\u79cd\u65b9\u6cd5\u662f\u5728 ",(0,t.jsx)(e.code,{children:"ShowConfirmDialog()"})," \u51fd\u6570\u4e2d\u518d\u521b\u5efa\u4e00\u4e2a\u4e3b\u5faa\u73af\u4ee5\u54cd\u5e94\u540e\u7eed\u7684\u7528\u6237\u64cd\u4f5c\u548c\u754c\u9762\u66f4\u65b0\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'typedef struct DialogContextRec_ {\n    LCUI_BOOL result;\n    LCUI_MainLoop loop;\n} DialogContextRec, *DialogContext;\n\nstatic void OnBtnOkClick(LCUI_Widget w, LCUI_WidgetEvent e, void *arg)\n{\n    DialogContext ctx = e->data;\n    ctx->result = TRUE;\n    LCUIMainLoop_Quit(ctx->loop);\n}\n\nstatic void OnBtnCancelClick(LCUI_Widget w, LCUI_WidgetEvent e, void *arg)\n{\n    DialogContext ctx = e->data;\n    ctx->result = FALSE;\n    LCUIMainLoop_Quit(ctx->loop);\n}\n\nLCUI_BOOL ShowConfirmDialog(const wchar_t* title, const wchar_t *content)\n{\n    DialogContextRec ctx = { 0 };\n    LCUI_Widget btn_cancel = LCUIWidget_New("button");\n    LCUI_Widget btn_ok = LCUIWidget_New("button");\n\n    ...\n\n    Widget_BindEvent(btn_ok, "click", OnBtnOkClick, &ctx, NULL);\n    Widget_BindEvent(btn_cancel, "click", OnBtnCancelClick, &ctx, NULL);\n    ctx.loop = LCUIMainLoop_New();\n    LCUIMainLoop_Run(ctx.loop);\n    Widget_Destroy(dialog);\n    return ctx.result;\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u7701\u7565\u4e86\u5f39\u6846\u7ec4\u4ef6\u7684\u6784\u9020\u4ee3\u7801\uff0c\u5982\u9700\u4e86\u89e3\u5b8c\u6574\u7684\u5b9e\u73b0\u4ee3\u7801\u53ef\u4ee5\u67e5\u770b LC Finder \u9879\u76ee\u4e2d\u7684 ",(0,t.jsx)(e.a,{href:"https://github.com/lc-soft/LC-Finder/blob/573f200698e2604450665716ebc6608837b4b73a/src/ui/components/dialog_confirm.c",children:"src/ui/components/dialog_confirm.c"})," \u6587\u4ef6\u3002"]})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u5148\u5b9a\u4e49\u4e86",(0,t.jsx)(e.code,{children:"DialogContextRec"})," \u7c7b\u578b\u7684 ctx \u53d8\u91cf\u7528\u4e8e\u8bb0\u5f55\u6309\u94ae\u70b9\u51fb\u72b6\u6001\u548c\u4e3b\u5faa\u73af\u7684\u6307\u9488\uff0c\u7136\u540e\u4e3a\u786e\u8ba4\u6309\u548c\u53d6\u6d88\u6309\u94ae\u7ed1\u5b9a\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u4e4b\u540e\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"LCUIMainLop_New()"})," \u65b0\u5efa\u4e86\u4e00\u4e2a\u4e3b\u5faa\u73af\uff0c\u518d\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"LCUIMainLoop_Run()"})," \u6267\u884c\u8fd9\u4e2a\u65b0\u7684\u4e3b\u5faa\u73af\u3002\u5728\u6309\u94ae\u88ab\u70b9\u51fb\u540e\uff0c\u4e8b\u4ef6\u5904\u7406\u5668\u4f1a\u4fee\u6539 ctx \u4e2d\u7684\u6309\u94ae\u70b9\u51fb\u72b6\u6001\uff0c\u7136\u540e\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"LCUIMainLoop_Quit()"})," \u9000\u51fa\u6307\u5b9a\u7684\u4e3b\u5faa\u73af\u3002\u5728",(0,t.jsx)(e.code,{children:"LCUIMainLoop_Run()"})," \u51fd\u6570\u9000\u51fa\u540e\uff0c\u9500\u6bc1\u5f39\u6846\u5e76\u5c06\u7528\u6237\u7684\u64cd\u4f5c\u7ed3\u679c\u8fd4\u56de\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u6539\u7528\u56de\u8c03\u51fd\u6570\u7684\u54cd\u5e94\u64cd\u4f5c\u7ed3\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'LCUI_BOOL ShowConfirmDialog(\n    const char *title,\n    const char *content,\n    void (*onResult)(LCUI_BOOL, void*)\n);\n\nvoid OnConfirm(LCUI_BOOL isConfirmed)\n{\n    if (isConfirmed) {\n        DoSomeThing();\n    }\n}\n\nvoid OnButtonClick()\n{\n    ShowConfirmDialog(\n        "Confirm",\n        "Are you sure you want to do it?",\n        OnConfirm\n    );\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u4e0d\u5efa\u8bae\u91c7\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83\u5b58\u5728\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u518d\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u63a5\u6536\u64cd\u4f5c\u7ed3\u679c\uff0c\u4f7f\u5f97\u64cd\u4f5c\u903b\u8f91\u88ab\u5206\u6563\u3002"}),"\n",(0,t.jsxs)(e.li,{children:["\u5982\u679c\u8fd9\u4e2a\u51fd\u6570\u9700\u8981\u989d\u5916\u7684\u53c2\u6570\u8bdd\uff0c\u8fd8\u8981\u7ed9 ",(0,t.jsx)(e.code,{children:"ShowConfirmDialog()"})," \u518d\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\uff0c\u589e\u52a0\u4e86\u51fd\u6570\u590d\u6742\u5ea6\u548c\u4ee3\u7801\u91cf\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u7531\u4e8e C \u8bed\u8a00\u6ca1\u6709\u50cf JavaScript \u90a3\u6837\u7684\u95ed\u5305\u7279\u6027\u548c\u5bf9\u5f02\u6b65\u7f16\u7a0b\u7684 async/await \u5173\u952e\u5b57\u652f\u6301\uff0c\u4f7f\u5f97\u8fd9\u79cd\u65b9\u6cd5\u7684\u5b9e\u73b0\u4ee3\u7801\u548c\u8c03\u7528\u4ee3\u7801\u5e76\u4e0d\u4f18\u96c5\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u4e0d\u4f7f\u7528\u4e3b\u5faa\u73af",children:"\u4e0d\u4f7f\u7528\u4e3b\u5faa\u73af"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6709\u81ea\u5df1\u7684\u4e3b\u5faa\u73af\uff0c\u4e0d\u5e0c\u671b\u4e3a\u9002\u5e94 LCUI \u7684\u4e3b\u5faa\u73af\u800c\u505a\u6539\u52a8\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u4e3b\u5faa\u73af\u4e2d\u8c03\u7528 ",(0,t.jsx)(e.code,{children:"LCUI_RunFrame()"})," \u51fd\u6570\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"while (your_app.active) {\n    your_app_main_loop_task1();\n    your_app_main_loop_task2();\n    your_app_main_loop_task3();\n    ...\n    LCUI_RunFrame();\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>r});var o=i(6540);const t={},c=o.createContext(t);function s(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);