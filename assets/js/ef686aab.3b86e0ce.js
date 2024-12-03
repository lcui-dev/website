"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7926],{9758:(t,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorial/todolist/data-operation","title":"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406","description":"\u6dfb\u52a0 src/tasklist.c \u6587\u4ef6\u7528\u4e8e\u5b58\u653e\u4efb\u52a1\u5217\u8868\u6570\u636e\u7684\u7ba1\u7406\u4ee3\u7801\uff0c\u6dfb\u52a0 src/tasklist.h \u6587\u4ef6\u5b58\u653e\u516c\u5171\u51fd\u6570\u58f0\u660e\u3002","source":"@site/docs/tutorial/01-todolist/07-data-operation.md","sourceDirName":"tutorial/01-todolist","slug":"/tutorial/todolist/data-operation","permalink":"/docs/next/tutorial/todolist/data-operation","draft":false,"unlisted":false,"editUrl":"https://github.com/lcui-dev/website/tree/main/docs/docs/tutorial/01-todolist/07-data-operation.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6dfb\u52a0\u6837\u5f0f","permalink":"/docs/next/tutorial/todolist/add-style"},"next":{"title":"\u6dfb\u52a0\u4ea4\u4e92","permalink":"/docs/next/tutorial/todolist/add-interaction"}}');var i=e(4848),l=e(8453);const a={},d="\u6dfb\u52a0\u6570\u636e\u7ba1\u7406",r={},c=[{value:"\u5b9a\u4e49\u7c7b\u578b",id:"\u5b9a\u4e49\u7c7b\u578b",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u8ffd\u52a0",id:"\u8ffd\u52a0",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u6e05\u7a7a",id:"\u6e05\u7a7a",level:2},{value:"\u7b5b\u9009",id:"\u7b5b\u9009",level:2}];function o(t){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406",children:"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406"})}),"\n",(0,i.jsx)(s.p,{children:"\u6dfb\u52a0 src/tasklist.c \u6587\u4ef6\u7528\u4e8e\u5b58\u653e\u4efb\u52a1\u5217\u8868\u6570\u636e\u7684\u7ba1\u7406\u4ee3\u7801\uff0c\u6dfb\u52a0 src/tasklist.h \u6587\u4ef6\u5b58\u653e\u516c\u5171\u51fd\u6570\u58f0\u660e\u3002"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:'#include "tasklist.h"\n#include <stdlib.h>\n'})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"#include <stdbool.h>\n#include <yutil.h>\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5b9a\u4e49\u7c7b\u578b",children:"\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"typedef struct task_t {\n        int id;\n        bool is_completed;\n        wchar_t *name;\n} task_t;\n\ntypedef list_t tasklist_t;\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsxs)(s.p,{children:["\u76f4\u63a5\u8c03\u7528 ",(0,i.jsx)(s.code,{children:"list_create()"})," \u51fd\u6570\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"void tasklist_init(list_t *list)\n{\n        list_create(list);\n}\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"void tasklist_init(list_t *list);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u8ffd\u52a0",children:"\u8ffd\u52a0"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"task_t *tasklist_append(tasklist_t *list, const wchar_t *name,\n                        bool is_completed)\n{\n        static int id = 1;\n        task_t *task = malloc(sizeof(task_t));\n\n        task->id = id++;\n        task->name = wcsdup(name);\n        task->is_completed = is_completed;\n        return task;\n}\n\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"task_t *tasklist_append(tasklist_t *list, const wchar_t *name,\n                        bool is_completed);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5c40\u90e8\u53d8\u91cf id \u7528\u4e8e\u7ed9\u6bcf\u4e2a\u4efb\u52a1\u5206\u914d\u81ea\u589e\u7684 id\uff0c\u81ea\u589e\u65b9\u5f0f\u5c31\u662f\u7b80\u5355\u7684 ",(0,i.jsx)(s.code,{children:"id++"}),"\u3002\u4f7f\u7528 static \u5173\u952e\u5b57\u4fee\u9970 id \u662f\u4e3a\u4e86\u8ba9\u5b83\u5728\u51fd\u6570\u6267\u884c\u5b8c\u540e\u4ecd\u4fdd\u7559\u503c\uff0c\u4e0b\u6b21\u6267\u884c\u51fd\u6570\u65f6\u80fd\u7ee7\u7eed\u81ea\u589e\uff0c\u800c\u4e0d\u662f\u59cb\u7ec8\u4ece 1 \u5f00\u59cb\u81ea\u589e\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u51fd\u6570\u8fd4\u56de\u503c\u7c7b\u578b\u662f ",(0,i.jsx)(s.code,{children:"task_t"}),"\uff0c\u8fd9\u6837\u8bbe\u8ba1\u53ef\u8ba9\u754c\u9762\u5c42\u7684\u4ee3\u7801\u62ff\u5230\u65b0\u5efa\u7684\u4efb\u52a1\u6570\u636e\u53bb\u66f4\u65b0\u754c\u9762\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,i.jsx)(s.p,{children:"\u66f4\u65b0\u64cd\u4f5c\u7531\u67e5\u627e\u548c\u4fee\u6539\u7ec4\u6210\uff0c\u5176\u4e2d\u7684\u4fee\u6539\u64cd\u4f5c\u4ec5\u4ec5\u662f\u4fee\u6539\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u4e13\u4e3a\u8fd9\u79cd\u573a\u666f\u800c\u4e3a\u51fd\u6570\u589e\u52a0\u53c2\u6570\u7684\u8bdd\u6709\u70b9\u8fc7\u5ea6\u8bbe\u8ba1\u4e86\uff0c\u56e0\u6b64\uff0c\u53ea\u5b9e\u73b0\u67e5\u627e\u529f\u80fd\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"task_t *tasklist_find(tasklist_t *list, int id)\n{\n        task_t *task;\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                task = node->data;\n                if (task->id == id) {\n                        return task;\n                }\n        }\n        return NULL;\n}\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"task_t *tasklist_find(tasklist_t *list, int id);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,i.jsx)(s.p,{children:"\u5148\u904d\u5386\u4efb\u52a1\u5217\u8868\uff0c\u627e\u5230\u6307\u5b9a id \u7684\u4efb\u52a1\uff0c\u7136\u540e\u8c03\u7528 list \u7684\u5220\u9664\u51fd\u6570\u3002"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"void task_destroy(task_t *task)\n{\n        free(task->name);\n        free(task);\n}\n\nbool tasklist_remove(tasklist_t *list, int id)\n{\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                if (((task_t*)node->data)->id == id) {\n                        list_delete_node(list, node);\n                        task_destroy(node->data);\n                        return true;\n                }\n        }\n        return false;\n}\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"bool tasklist_remove(tasklist_t *list, int id);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5b9a\u4e49 ",(0,i.jsx)(s.code,{children:"task_destroy()"})," \u51fd\u6570\u662f\u4e3a\u4e86\u7edf\u4e00\u4efb\u52a1\u5217\u8868\u7684\u5220\u9664\u548c\u6e05\u7a7a\u51fd\u6570\u4e2d\u7684\u4efb\u52a1\u9500\u6bc1\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u6e05\u7a7a",children:"\u6e05\u7a7a"}),"\n",(0,i.jsxs)(s.p,{children:["list \u7684 ",(0,i.jsx)(s.code,{children:"list_destroy()"})," \u51fd\u6570\u53ef\u6e05\u7a7a\u5217\u8868\u5185\u5bb9\uff0c\u7ed9\u5b83\u4f20\u5165 ",(0,i.jsx)(s.code,{children:"task_destroy"})," \u51fd\u6570\u6307\u9488\u5373\u53ef\u81ea\u5b9a\u4e49\u5217\u8868\u9879\u7684\u9500\u6bc1\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"void tasklist_empty(tasklist_t *list)\n{\n        list_destroy(list, (list_item_destructor_t)task_destroy);\n}\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"void tasklist_empty(tasklist_t *list);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u7b5b\u9009",children:"\u7b5b\u9009"}),"\n",(0,i.jsx)(s.p,{children:"\u7b5b\u9009\u5c31\u662f\u904d\u5386\u5217\u8868\uff0c\u5c06\u5176\u4e2d\u7684\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u4efb\u52a1\u6570\u636e\u6dfb\u52a0\u5230\u65b0\u5217\u8868\u4e2d\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u7b5b\u9009\u6761\u4ef6\u7531 status \u53c2\u6570\u6307\u5b9a\uff0c\u5b83\u6709\u4e09\u79cd\u503c\uff0c\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"0: \u672a\u5b8c\u6210"}),"\n",(0,i.jsx)(s.li,{children:"1: \u5df2\u5b8c\u6210"}),"\n",(0,i.jsx)(s.li,{children:"3: \u5168\u90e8"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.c"',children:"void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list)\n{\n        list_node_t *node;\n\n        for (list_each(node, list)) {\n                if ((status == 0 && ((task_t*)node->data)->is_completed) ||\n                  (status == 1 && !((task_t*)node->data)->is_completed)) {\n                    continue;\n                }\n                list_append(filtered_list, node->data);\n        }\n}\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",metastring:'title="src/tasklist.h"',children:"void tasklist_filter(tasklist_t *list, int status, tasklist_t *filtered_list);\n"})})]})}function h(t={}){const{wrapper:s}={...(0,l.R)(),...t.components};return s?(0,i.jsx)(s,{...t,children:(0,i.jsx)(o,{...t})}):o(t)}},8453:(t,s,e)=>{e.d(s,{R:()=>a,x:()=>d});var n=e(6540);const i={},l=n.createContext(i);function a(t){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof t?t(s):{...s,...t}}),[s,t])}function d(t){let s;return s=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),n.createElement(l.Provider,{value:s},t.children)}}}]);