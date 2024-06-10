"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8138],{6744:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var s=r(4848),t=r(8453);const o={description:"\u5de5\u4f5c\u7ebf\u7a0b\u7684\u6982\u5ff5\u3001\u7528\u9014\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\u7684\u4ecb\u7ecd\u3002"},c="\u5de5\u4f5c\u7ebf\u7a0b",a={id:"app/worker",title:"\u5de5\u4f5c\u7ebf\u7a0b",description:"\u5de5\u4f5c\u7ebf\u7a0b\u7684\u6982\u5ff5\u3001\u7528\u9014\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\u7684\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-2.x/app/worker.md",sourceDirName:"app",slug:"/app/worker",permalink:"/en/docs/2.x/app/worker",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-2.x/app/worker.md",tags:[],version:"2.x",frontMatter:{description:"\u5de5\u4f5c\u7ebf\u7a0b\u7684\u6982\u5ff5\u3001\u7528\u9014\u4ee5\u53ca\u76f8\u5173\u51fd\u6570\u7684\u4ecb\u7ecd\u3002"},sidebar:"docsSidebar",previous:{title:"\u4e3b\u5faa\u73af",permalink:"/en/docs/2.x/app/mainloop"},next:{title:"\u5b9a\u65f6\u5668",permalink:"/en/docs/2.x/app/timer"}},d={},i=[{value:"\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898",id:"\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898",level:3},{value:"<strong>\u4e0e UI \u7ebf\u7a0b\u901a\u4fe1</strong>",id:"\u4e0e-ui-\u7ebf\u7a0b\u901a\u4fe1",level:3},{value:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u7ebf\u7a0b\u6c60",id:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u7ebf\u7a0b\u6c60",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5de5\u4f5c\u7ebf\u7a0b",children:"\u5de5\u4f5c\u7ebf\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3b\u7ebf\u7a0b\u901a\u5e38\u88ab\u7528\u4e8e\u8fd0\u884c\u4e3b\u5faa\u73af\uff0c\u800c\u4e3b\u5faa\u73af\u8d1f\u8d23\u7684\u90fd\u662f UI \u76f8\u5173\u7684\u5de5\u4f5c\uff0c\u6240\u4ee5\u4e5f\u53ef\u4ee5\u8bf4\u4e3b\u7ebf\u7a0b\u662f UI \u7ebf\u7a0b\u3002\u4e3a\u4e86\u4e0d\u5f71\u54cd UI \u7ebf\u7a0b\u7684\u5de5\u4f5c\u6548\u7387\uff0c\u6211\u4eec\u4f1a\u9700\u8981\u521b\u5efa\u989d\u5916\u7684\u7ebf\u7a0b\u6765\u8d1f\u8d23\u5404\u79cd\u5404\u6837\u7684\u5de5\u4f5c\uff0c\u800c\u8fd9\u4e9b\u7ebf\u7a0b\u5c31\u662f\u5de5\u4f5c\u7ebf\u7a0b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e3b\u5faa\u73af\u7684\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u5230\u4e3b\u5faa\u73af\u6267\u884c\u9891\u7387\u5f71\u54cd\u754c\u9762\u7684\u6d41\u7545\u5ea6\uff0c\u5b83\u7684\u6bcf\u4e00\u6b21\u5faa\u73af\u90fd\u4f1a\u6309\u987a\u5e8f\u6267\u884c\u5904\u7406\u5b9a\u65f6\u5668\u3001\u5904\u7406\u4e8b\u4ef6\u961f\u5217\u3001\u66f4\u65b0\u7ec4\u4ef6\u3001\u6e32\u67d3\u7ec4\u4ef6\u7b49\u4efb\u52a1\uff0c\u5176\u4e2d\u6700\u5bb9\u6613\u5f71\u54cd\u5230\u4e3b\u5faa\u73af\u7684\u6267\u884c\u9891\u7387\u7684\u4efb\u52a1\u662f\u5904\u7406\u4e8b\u4ef6\u961f\u5217\uff0c\u56e0\u4e3a\u5927\u90e8\u5206\u7684\u4e8b\u4ef6\u5904\u7406\u5668\u90fd\u662f\u5e94\u7528\u7a0b\u5e8f\u4e3b\u52a8\u7ed1\u5b9a\u7684\uff0c\u5bf9\u4e8e\u7f3a\u4e4f\u6027\u80fd\u4f18\u5316\u610f\u8bc6\u7684\u65b0\u624b\u800c\u8a00\uff0c\u53ef\u80fd\u4f1a\u5728\u4e8b\u4ef6\u5904\u7406\u5668\u4e2d\u76f4\u63a5\u8fdb\u884c\u4e00\u4e9b\u8017\u65f6\u8f83\u9ad8\u7684\u64cd\u4f5c\uff0c\u4ece\u800c\u5bfc\u81f4\u754c\u9762\u5728\u64cd\u4f5c\u7ed3\u675f\u524d\u4e00\u76f4\u5904\u4e8e\u672a\u54cd\u5e94\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u7684\u5e38\u89c1\u505a\u6cd5\u662f\u5c06\u64cd\u4f5c\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 LCUI \u63d0\u4f9b\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6c60\u6765\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'void DoSomeThing(void *arg1, void *arg2)\n{\n    printf("key: %s\\n", arg1);\n    printf("value: %s\\n", arg2);\n}\n\nvoid OnButtonClick()\n{\n    LCUI_TaskRec task = { 0 };\n    \n    LCUI_Init();\n    task.arg[0] = strdup("color");\n    task.arg[1] = strdup("red");\n    task.destroy_arg[0] = free;\n    task.destroy_arg[1] = free;\n    task.func = DoSomeThing;\n    \n    LCUI_PostAsyncTask(&task);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LCUITaskRec"})," \u7c7b\u578b\u7684 task \u53d8\u91cf\u63cf\u8ff0\u4e86\u4efb\u52a1\u7684\u6267\u884c\u51fd\u6570\u53ca\u5176\u53c2\u6570\uff0c",(0,s.jsx)(n.code,{children:"arg"})," \u6210\u5458\u53d8\u91cf\u8bb0\u5f55\u4e86\u53c2\u6570\u5217\u8868\uff0c",(0,s.jsx)(n.code,{children:"destroy_arg"})," \u5219\u662f\u8fd9\u4e9b\u53c2\u6570\u7684\u9500\u6bc1\u51fd\u6570\uff0c\u8fd9\u91cc\u6211\u4eec\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"strdup()"})," \u5206\u914d\u4e86\u65b0\u7684\u5185\u5b58\u5b58\u50a8\u5b57\u7b26\u4e32\uff0c\u5e76\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"free()"})," \u4f5c\u4e3a\u53c2\u6570\u7684\u9500\u6bc1\u51fd\u6570\u3002\u51c6\u5907\u5b8c\u4efb\u52a1\u540e\uff0c\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"LCUI_PostAsyncTask()"})," \u51fd\u6570\u5c06\u4efb\u52a1\u6dfb\u52a0\u5230\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4efb\u52a1\u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898",children:"\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898"}),"\n",(0,s.jsx)(n.p,{children:"UI \u8d44\u6e90\u662f\u5168\u5c40\u5171\u4eab\u7684\uff0c\u4efb\u610f\u7ebf\u7a0b\u90fd\u80fd\u8bbf\u95ee\u548c\u4fee\u6539\u5b83\uff0c\u5f53\u6709\u591a\u4e2a\u7ebf\u7a0b\u5728\u64cd\u4f5c UI \u8d44\u6e90\u7684\u65f6\u5019\uff0c\u4efb\u610f\u4e00\u4e2a\u7ebf\u7a0b\u5bf9 UI \u7684\u6539\u52a8\u90fd\u6709\u53ef\u80fd\u5f71\u54cd\u5176\u5b83\u7ebf\u7a0b\u64cd\u4f5c\u7ed3\u679c\uff0c\u8f7b\u5219\u754c\u9762\u5185\u5bb9\u5f02\u5e38\uff0c\u91cd\u5219\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u5d29\u6e83\uff0c\u56e0\u6b64\uff0cUI \u8d44\u6e90\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9274\u4e8e\u591a\u7ebf\u7a0b\u64cd\u4f5c UI \u7684\u9700\u6c42\u91cf\u548c\u6027\u80fd\u4e0a\u7684\u8003\u8651\uff0cLCUI \u672a\u91c7\u7528\u4e92\u65a5\u9501\u4e4b\u7c7b\u7684\u673a\u5236\u6765\u89e3\u51b3\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\uff0c\u6211\u4eec\u5728\u5f00\u53d1\u7684\u65f6\u5019\u5e94\u5c3d\u91cf\u5728 UI \u7ebf\u7a0b\u4e0a\u96c6\u4e2d\u8fdb\u884c UI \u64cd\u4f5c\uff0c\u4ee5\u6b64\u907f\u514d\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0e-ui-\u7ebf\u7a0b\u901a\u4fe1",children:(0,s.jsx)(n.strong,{children:"\u4e0e UI \u7ebf\u7a0b\u901a\u4fe1"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u6211\u4eec\u9700\u8981\u5c06\u5de5\u4f5c\u7ebf\u7a0b\u7684\u5904\u7406\u7ed3\u679c\u66f4\u65b0\u5230 UI \u4e0a\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"LCUI_PostTask()"})," \u51fd\u6570\u5c06 UI \u76f8\u5173\u64cd\u4f5c\u79fb\u52a8\u5230 UI \u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u5b83\u7684\u7528\u6cd5\u4e0e ",(0,s.jsx)(n.code,{children:"LCUI_PostAsyncTask()"})," \u76f8\u540c\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'void UpdateText(void *arg1, void *arg2)\n{\n        char *text = arg2;\n        LCUI_Widget textview = arg1;\n        TextView_SetText(textview, text);\n}\n\n        ...\n\n        LCUI_Widget textview;\n        char *text = strdup("Task has been completed!");\n\n        ...\n\n        LCUI_AppTaskRec task = { 0 };\n\n        task.func = UpdateText;\n        task.arg[0] = textview;\n        task.arg[1] = text;\n        task.destroy_arg[0] = NULL;\n        task.destroy_arg[1] = free;\n\n        LCUI_PostTask(&task);\n        // ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4efb\u52a1\u7684\u53c2\u6570\u4e0d\u9700\u8981\u9500\u6bc1\uff0c\u5219\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"LCUI_PostSimpleTask()"})," \u51fd\u6570\u5f0f\u5b8f\u4ee3\u66ff ",(0,s.jsx)(n.code,{children:"LCUI_PostTask()"})," \uff0c\u4ee5\u8282\u7701 ",(0,s.jsx)(n.code,{children:"LCUI_AppTask"})," \u5bf9\u8c61\u7684\u6784\u9020\u4ee3\u7801\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u7ebf\u7a0b\u6c60",children:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u7ebf\u7a0b\u6c60"}),"\n",(0,s.jsxs)(n.p,{children:["LCUI \u7684\u5de5\u4f5c\u7ebf\u7a0b\u6c60\u4e2d\u9ed8\u8ba4\u521b\u5efa\u4e86 4 \u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u4e3a\u4e86\u8ba9\u8fd9\u4e9b\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u6709\u4efb\u52a1\u6267\u884c\uff0c",(0,s.jsx)(n.code,{children:"LCUI_PostAsyncTask()"})," \u51fd\u6570\u4f1a\u5728\u6bcf\u6b21\u6295\u9012\u5b8c\u4efb\u52a1\u540e\u5c06\u76ee\u6807\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u5982\u679c\u8fd9\u79cd\u7b80\u5355\u7684\u4efb\u52a1\u5206\u914d\u7b56\u7565\u4e0d\u7b26\u5408\u4f60\u7684\u9700\u6c42\uff0c\u4f60\u4e5f\u53ef\u4ee5\u57fa\u4e8e ",(0,s.jsx)(n.a,{href:"https://github.com/lc-soft/LCUI/blob/345031d74ca65225ec3623e0c92d448f54f5052b/src/worker.c",children:"src/worker.c"})," \u63d0\u4f9b\u7684\u51fd\u6570\u521b\u5efa\u81ea\u5df1\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6c60\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// \u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u4efb\u52a1\u961f\u5217\u7684\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u7136\u540e\u8fd0\u884c\u5b83\nLCUI_Worker worker = LCUIWorker_New();\nLCUIWorker_RunAsync(worker);\n\n...\n\n// \u7ed9\u5de5\u4f5c\u7ebf\u7a0b\u6295\u9012\u4efb\u52a1\nLCUI_TaskRec task = { 0 };\n\ntask.arg[0] = strdup("color");\ntask.arg[1] = strdup("red");\ntask.destroy_arg[0] = free;\ntask.destroy_arg[1] = free;\ntask.func = DoSomeThing;\nLCUIWorker_PostTask(worker, task);\n\n...\n\n// \u9500\u6bc1\u5de5\u4f5c\u7ebf\u7a0b\nLCUIWorker_Destroy(worker);\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var s=r(6540);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);