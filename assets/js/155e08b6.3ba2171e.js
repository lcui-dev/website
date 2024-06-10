"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7491],{3039:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var e=t(4848),s=t(8453);const l={description:"\u6dfb\u52a0\u5b9e\u7528\u5de5\u5177\u5e93\uff0c\u63d0\u4f9b\u94fe\u8868\uff08LinkedList\uff09\u3001\u5b57\u5178\uff08Dict\uff09\u3001\u65e5\u5fd7\uff08Logger\uff09\u7b49\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u548c\u51fd\u6570\u3002"},r="\u5b9e\u7528\u5de5\u5177\u5e93",c={id:"rfc/lcui/lib-yutil",title:"\u5b9e\u7528\u5de5\u5177\u5e93",description:"\u6dfb\u52a0\u5b9e\u7528\u5de5\u5177\u5e93\uff0c\u63d0\u4f9b\u94fe\u8868\uff08LinkedList\uff09\u3001\u5b57\u5178\uff08Dict\uff09\u3001\u65e5\u5fd7\uff08Logger\uff09\u7b49\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u548c\u51fd\u6570\u3002",source:"@site/docs/rfc/lcui/0004-lib-yutil.md",sourceDirName:"rfc/lcui",slug:"/rfc/lcui/lib-yutil",permalink:"/docs/next/rfc/lcui/lib-yutil",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfc/lcui/0004-lib-yutil.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"\u6dfb\u52a0\u5b9e\u7528\u5de5\u5177\u5e93\uff0c\u63d0\u4f9b\u94fe\u8868\uff08LinkedList\uff09\u3001\u5b57\u5178\uff08Dict\uff09\u3001\u65e5\u5fd7\uff08Logger\uff09\u7b49\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u548c\u51fd\u6570\u3002"},sidebar:"rfcSidebar",previous:{title:"\u6784\u5efa\u548c\u5b89\u88c5",permalink:"/docs/next/rfc/lcui/build-and-install"},next:{title:"CSS \u89e3\u6790\u5668\u548c\u9009\u62e9\u5f15\u64ce\u5e93",permalink:"/docs/next/rfc/lcui/lib-css"}},d={},h=[];function o(n){const i={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"\u5b9e\u7528\u5de5\u5177\u5e93",children:"\u5b9e\u7528\u5de5\u5177\u5e93"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5f00\u59cb\u65e5\u671f\uff1a2021-09-28"}),"\n",(0,e.jsx)(i.li,{children:"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"}),"\n",(0,e.jsx)(i.li,{children:"\u53c2\u8003\u95ee\u9898\uff1a\u65e0"}),"\n",(0,e.jsxs)(i.li,{children:["\u5b9e\u73b0 PR\uff1a",(0,e.jsx)(i.a,{href:"https://github.com/lc-soft/LCUI/pull/264",children:"#264"})]}),"\n"]}),"\n",(0,e.jsx)(i.h1,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,e.jsx)(i.p,{children:"\u6dfb\u52a0\u5b9e\u7528\u5de5\u5177\u5e93\uff0c\u63d0\u4f9b\u94fe\u8868\uff08LinkedList\uff09\u3001\u5b57\u5178\uff08Dict\uff09\u3001\u65e5\u5fd7\uff08Logger\uff09\u7b49\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\u548c\u51fd\u6570\u3002"}),"\n",(0,e.jsx)(i.h1,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,e.jsx)(i.p,{children:"\u5b9e\u7528\u5de5\u5177\u5e93\u7684\u6784\u5efa\u547d\u4ee4\uff1a"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-sh",children:"# \u6784\u5efa\u5e93\nxmake build yutil\n\n# \u6784\u5efa\u6d4b\u8bd5\u7528\u4f8b\nxmake build yutil_test\n\n# \u8fd0\u884c\u6d4b\u8bd5\nxmake run yutil_test\n"})}),"\n",(0,e.jsx)(i.p,{children:"list \u7684\u4f7f\u7528\u4f8b\u5b50\uff1a"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-c",children:"#include <yutil.h>\n\nvoid test_list(void)\n{\n\tint arr[] = { 0, 4, 8, 16, 32, 64, 1024, 2048 };\n\tsize_t i;\n\tsize_t n = sizeof(arr) / sizeof(int);\n\n\t//\u521b\u5efa\u4e00\u4e2a\u94fe\u8868\u7ed3\u6784\n\tlist_t list;\n\t//\u521b\u9020\u4e00\u4e2a\u7ed3\u70b9\u7c7b\u578b\u7684\u6307\u9488\n\tlist_node_t *node;\n\n\t//\u521d\u59cb\u5316\u94fe\u8868\n\tlist_create(&list);\n\n\t// append data\n\tfor (i = 0; i < n; ++i) {\n\t\tlist_append(&list, arr + i);\n\t}\n\n\t// delete data\n\tfor (i = 0; i < n; ++i) {\n\t\tlist_delete(&list, 0);\n\t}\n\n\t// insert data\n\tfor (i = 0; i < n; ++i) {\n\t\tlist_insert(&list, i, arr + i);\n\t}\n\n\t// insert head\n\tlist_insert_head(&list, 0);\n\t// delete head\n\tlist_delete_head(&list);\n\n\tlist_append(&list, 0);\n\n\t// delete tail\n\tlist_delete_last(&list);\n\n\t//\u904d\u5386\n\ti = 0;\n\tlist_for_each(node, &list)\n\t{\n\t\tif (node->data != arr + i) {\n\t\t\tbreak;\n\t\t}\n\t\t++i;\n\t}\n\n\t// \u53cd\u5411\u904d\u5386\n\ti = n - 1;\n\tlist_for_each_reverse(node, &list)\n\t{\n\t\tif (node->data != arr + i) {\n\t\t\tbreak;\n\t\t}\n\t\tif (i == 0) {\n\t\t\ti = n;\n\t\t\tbreak;\n\t\t}\n\t\t--i;\n\t}\n\n\t//\u9500\u6bc1\u94fe\u8868\n\tlist_destroy(&list, NULL);\n}\n"})}),"\n",(0,e.jsx)(i.h1,{id:"\u52a8\u673a",children:"\u52a8\u673a"}),"\n",(0,e.jsx)(i.h1,{id:"\u8be6\u7ec6\u8bbe\u8ba1",children:"\u8be6\u7ec6\u8bbe\u8ba1"}),"\n",(0,e.jsx)(i.p,{children:"\u53c2\u8003 glib\u3001tbox \u8bbe\u8ba1 API\uff0c\u5c06\u4e00\u4e9b\u5de5\u5177\u7c7b\u51fd\u6570\u6574\u7406\u8fdb\u72ec\u7acb\u7684\u5b50\u5e93\u4e2d\uff0c\u5b50\u5e93\u547d\u540d\u4e3a\u6613\u5de5\u5177\uff08yutil\uff09\uff0c\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\u6a21\u5757\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"list\uff1a"})," \u5217\u8868\u3002\u57fa\u4e8e\u53cc\u5411\u94fe\u8868\u5b9e\u73b0\uff0c\u7531\u5217\u8868\u5143\u7d20\u5728\u5185\u90e8\u7ef4\u62a4\u7684\u94fe\u8868\u8282\u70b9\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"list_entry:"})," \u53cc\u5411\u5faa\u73af\u94fe\u8868\u3002\u94fe\u8868\u8282\u70b9\u4e0d\u5305\u542b\u6570\u636e\uff0c\u4f7f\u7528\u65f6\u9700\u5c06\u94fe\u8868\u8282\u70b9\u6dfb\u52a0\u4e3a\u5143\u7d20\u6570\u636e\u7ed3\u6784\u6210\u5458\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"rbtree\uff1a"})," \u7ea2\u9ed1\u6811\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"dict\uff1a"})," \u5b57\u5178\uff08\u54c8\u5e0c\u8868\uff09\u3002\u57fa\u4e8e 2021\u5e74 8 \u6708\u4e3a\u6b62\u6700\u65b0\u7684 redis \u4e2d\u7684 dict \u4ee3\u7801\u505a\u4fee\u6539\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"string\uff1a"})," \u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u7684\u5b57\u7b26\u4e32\u64cd\u4f5c\u51fd\u6570\uff0c\u5305\u62ec\uff1a\u8f6c\u6362\u6210\u5c0f\u5199\u3001\u751f\u6210\u54c8\u5e0c\u503c\u3001\u5206\u5272\u5b57\u7b26\u4e32\u3001\u6e05\u9664\u5b57\u7b26\u4e32\u9996\u5c3e\u7684\u5b57\u7b26\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"strpool\uff1a"})," \u5b57\u7b26\u4e32\u6c60\u3002\u7528\u4e8e\u89e3\u51b3\u5927\u91cf\u76f8\u540c\u5b57\u7b26\u4e32\u7684\u5185\u5b58\u5360\u7528\u95ee\u9898\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"strlist\uff1a"})," \u5b57\u7b26\u4e32\u5217\u8868\u3002\u9488\u5bf9\u90e8\u4ef6\u548c CSS \u9009\u62e9\u5668\u7684\u591a\u5b57\u7b26\u4e32\u5b58\u50a8\u9700\u6c42\u800c\u8bbe\u8ba1\uff0c\u914d\u5408 strpool \u4f7f\u7528\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"logger\uff1a"})," \u65e5\u5fd7\u8f93\u51fa\u548c\u7ba1\u7406\u3002\u63d0\u4f9b\u65e5\u5fd7\u8f93\u51fa\u548c\u6309\u7ea7\u522b\u8fc7\u6ee4\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"timer\uff1a"})," \u5b9a\u65f6\u5668\u3002\u7528\u6cd5\u662f\u7ef4\u62a4\u4e00\u4e2a\u5b9a\u65f6\u5668\u5217\u8868\uff0c\u6bcf\u6b21\u8c03\u7528\u5904\u7406\u51fd\u6570\u65f6\u83b7\u53d6\u5df2\u8fc7\u671f\u7684\u5b9a\u65f6\u5668\uff0c\u5e76\u8c03\u7528\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"dirent\uff1a"})," \u76ee\u5f55\u64cd\u4f5c\u76f8\u5173\u51fd\u6570\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"charset\uff1a"})," UTF-8 \u7f16\u7801\u548c\u89e3\u7801\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"time\uff1a"})," \u63d0\u4f9b\u9ad8\u7cbe\u5ea6\u65f6\u95f4\u76f8\u5173\u63a5\u53e3\u3002"]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.strong,{children:"math\uff1a"})," \u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u7684\u6570\u5b66\u8fd0\u7b97\u64cd\u4f5c\uff0c\u5305\u62ec\u6700\u5927\u3001\u6700\u5c0f\u548c\u53d6\u6574\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"\u5220\u9664\u539f src/util \u76ee\u5f55\u4e2d\u7684\u4ee5\u4e0b\u6587\u4ef6\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"parse.c\uff1a\u5b57\u7b26\u4e32\u89e3\u6790\u529f\u80fd\u53ea\u6709 CSS \u5e93\u5728\u7528\uff0c\u5e94\u8be5\u7531 CSS \u5e93\u5185\u90e8\u5305\u542b\u5b83\u3002"}),"\n",(0,e.jsx)(i.li,{children:"object.c\uff1a\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0 UI \u548c\u6570\u636e\u7684\u53cc\u5411\u7ed1\u5b9a\uff0c\u5c5e\u4e8e\u5b9e\u9a8c\u6027\u7684\u529f\u80fd\uff0c3.x \u7248\u672c\u6682\u65f6\u4e0d\u9700\u8981\u8003\u8651\u5b83\u3002"}),"\n",(0,e.jsx)(i.li,{children:"task.c\uff1a\u7528\u4e8e\u4e0e\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4efb\u52a1\u5904\u7406\uff0c\u5e94\u8be5\u5305\u542b\u5230\u5de5\u4f5c\u7ebf\u7a0b\u5e93\u4e2d\u3002"}),"\n",(0,e.jsx)(i.li,{children:"event.c\uff1aUI \u548c\u4e3b\u5faa\u73af\u90fd\u7528\u5230\u4e86\u4e8b\u4ef6\u673a\u5236\uff0c\u8fd9\u5757\u5e94\u8be5\u7531\u5b83\u4eec\u5185\u90e8\u5b9e\u73b0\u3002"}),"\n",(0,e.jsx)(i.li,{children:"rect.c\uff1a\u77e9\u5f62\u6570\u636e\u7ed3\u6784\u6709\u6d6e\u70b9\u578b\u548c\u6574\u578b\u8fd9\u4e24\u4e2a\u7248\u672c\uff0c\u5206\u522b\u7528\u4e8e UI \u5e93\u548c\u56fe\u5f62\u5e93\uff0c\u5b83\u5e94\u8be5\u7531\u8fd9\u4e24\u4e2a\u5e93\u5185\u90e8\u5b9e\u73b0\u3002"}),"\n",(0,e.jsx)(i.li,{children:"steptimer.c\uff1a\u4f9d\u8d56\u7ebf\u7a0b\u5e93\u7684\u4e92\u65a5\u9501\u548c\u6761\u4ef6\u53d8\u91cf\u64cd\u4f5c\u51fd\u6570\uff0c\u4e0d\u9002\u5408\u653e\u5165\u5de5\u5177\u5e93\u5185\uff0c\u5e94\u8be5\u8003\u8651\u7531\u5e73\u53f0\u5e93\u63d0\u4f9b\u3002"}),"\n",(0,e.jsx)(i.li,{children:"uri.c/uri.cpp\uff1aURI \u7684\u6253\u5f00\u51fd\u6570\u5c5e\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\uff0c\u5e94\u8be5\u7531\u5e73\u53f0\u5e93\u63d0\u4f9b\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.p,{children:["\u5b50\u5e93\u662f\u8d21\u732e\u8005 ",(0,e.jsx)(i.a,{href:"https://gitee.com/yidianyiko/yutil",children:"@yidianyiko"})," \u5f00\u53d1\u7684\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u56e0\u6b64\u4ee5 git \u5b50\u6a21\u5757\u7684\u65b9\u5f0f\u5f15\u5165\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5c06\u5b83\u7684\u6e90\u7801\u6574\u5408\u8fdb LCUI \u9879\u76ee\u5185\u3002"]}),"\n",(0,e.jsx)(i.p,{children:"\u5177\u4f53\u7ec6\u8282\u53ef\u67e5\u9605\u4ee5\u4e0b\u6587\u6863\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u9700\u6c42\u6587\u6863\uff1a",(0,e.jsx)(i.a,{href:"https://gitee.com/yidianyiko/yutil/tree/main/docs/RA/",children:"lib/yutil/docs/RA"})]}),"\n",(0,e.jsxs)(i.li,{children:["\u8c03\u7814\u6587\u6863\uff1a",(0,e.jsx)(i.a,{href:"https://gitee.com/yidianyiko/yutil/tree/main/docs/RA/",children:"lib/yutil/docs/Research_Report"})]}),"\n",(0,e.jsxs)(i.li,{children:["API \u8bbe\u8ba1\u6587\u6863\uff1a",(0,e.jsx)(i.a,{href:"https://gitee.com/yidianyiko/yutil/tree/main/docs/RA/",children:"lib/yutil/docs/API"})]}),"\n"]}),"\n",(0,e.jsx)(i.h1,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,e.jsx)(i.p,{children:"\u65e0\u3002"}),"\n",(0,e.jsx)(i.h1,{id:"\u5907\u9009\u65b9\u6848",children:"\u5907\u9009\u65b9\u6848"}),"\n",(0,e.jsx)(i.p,{children:"\u76f4\u63a5\u4f7f\u7528 glib\u3001tbox\u3002\u7f3a\u70b9\u662f\u6539\u52a8\u91cf\u6bd4 yutil \u8981\u5927\uff0c\u800c\u4e14\u4f1a\u589e\u52a0 LCUI \u9879\u76ee\u7684\u4f53\u79ef\u548c\u6784\u5efa\u914d\u7f6e\u590d\u6742\u5ea6\u3002"}),"\n",(0,e.jsx)(i.h1,{id:"\u91c7\u7528\u7b56\u7565",children:"\u91c7\u7528\u7b56\u7565"}),"\n",(0,e.jsx)(i.p,{children:"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u6539\u52a8\uff0c\u9700\u8981\u5bf9\u6240\u6709\u7528\u5230\u5de5\u5177\u51fd\u6570\u7684\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\u3002\u7531\u4e8e\u4e3b\u8981\u6539\u52a8\u90fd\u5728\u547d\u540d\u4e0a\uff0c\u8fd9\u4e9b\u6587\u4ef6\u901a\u5e38\u53ea\u9700\u8981\u5168\u5c40\u66ff\u6362\u540d\u79f0\u5373\u53ef\u3002"}),"\n",(0,e.jsx)(i.h1,{id:"\u672a\u89e3\u51b3\u7684\u95ee\u9898",children:"\u672a\u89e3\u51b3\u7684\u95ee\u9898"}),"\n",(0,e.jsx)(i.p,{children:"\u6807\u51c6\u5e93\u5df2\u7ecf\u63d0\u4f9b\u5b57\u7b26\u7f16\u89e3\u7801\u51fd\u6570 wcstombs() \u548c mbstowcs()\uff0ccharset \u6a21\u5757\u5b58\u5728\u610f\u4e49\u4e0d\u5927\uff0c\u5e94\u8be5\u8003\u8651\u79fb\u9664\u3002"}),"\n",(0,e.jsx)(i.p,{children:"math \u63d0\u4f9b\u7684\u6700\u5927\u3001\u6700\u5c0f\u548c\u53d6\u6574\u51fd\u6570\u7528\u9014\u4e0d\u5927\uff0c\u5e94\u8be5\u8003\u8651\u79fb\u9664\u5b83\u4eec\u3002"}),"\n",(0,e.jsx)(i.p,{children:"rbtree \u5728 LCUI \u5185\u7684\u7528\u9014\u5f88\u5c11\uff0c\u5e94\u8be5\u8003\u8651\u79fb\u9664\u5b83\uff0c\u7528 dict \u4ee3\u66ff\u3002"}),"\n",(0,e.jsx)(i.p,{children:"string \u6a21\u5757\u4e2d\u7684\u4e00\u4e9b\u51fd\u6570\u7684\u901a\u7528\u6027\u8f83\u5dee\uff0c\u5e94\u8be5\u8003\u8651\u79fb\u51fa\u53bb\uff0c\u4f5c\u4e3a\u5185\u90e8\u51fd\u6570\u3002"}),"\n",(0,e.jsxs)(i.p,{children:["time \u6a21\u5757\u4e2d\u7684 ",(0,e.jsx)(i.code,{children:"sleep()"})," \u51fd\u6570\u4e0e Linux \u63d0\u4f9b\u7684 ",(0,e.jsx)(i.code,{children:"sleep()"})," \u5b58\u5728\u540d\u79f0\u51b2\u7a81\uff0c\u5e94\u8be5\u8003\u8651\u8c03\u6574\u547d\u540d\u3002"]}),"\n",(0,e.jsx)(i.p,{children:"\u79fb\u9664 bool_t\uff1f"})]})}function x(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}},8453:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var e=t(6540);const s={},l=e.createContext(s);function r(n){const i=e.useContext(l);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),e.createElement(l.Provider,{value:i},n.children)}}}]);