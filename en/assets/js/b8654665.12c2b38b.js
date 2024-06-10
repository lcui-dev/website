"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1699],{4345:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>_,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=e(4848),s=e(8453);const a={},d="\u6dfb\u52a0\u4ea4\u4e92",l={id:"tutorial/todolist/add-interaction",title:"\u6dfb\u52a0\u4ea4\u4e92",description:"\u4ea4\u4e92\u662f\u6307\u7528\u6237\u4e0e\u8ba1\u7b97\u673a\u7a0b\u5e8f\u4e4b\u95f4\u7684\u53cc\u5411\u901a\u4fe1\u8fc7\u7a0b\u3002\u5b83\u6d89\u53ca\u7528\u6237\u901a\u8fc7\u9f20\u6807\u3001\u952e\u76d8\u6216\u5176\u4ed6\u8f93\u5165\u8bbe\u5907\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4e92\u52a8\uff0c\u4ee5\u4fbf\u6267\u884c\u7279\u5b9a\u7684\u64cd\u4f5c\u6216\u83b7\u53d6\u6240\u9700\u7684\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-3.x/tutorial/01-todolist/08-add-interaction.md",sourceDirName:"tutorial/01-todolist",slug:"/tutorial/todolist/add-interaction",permalink:"/en/docs/tutorial/todolist/add-interaction",draft:!1,unlisted:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/versioned_docs/version-3.x/tutorial/01-todolist/08-add-interaction.md",tags:[],version:"3.x",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u6570\u636e\u7ba1\u7406",permalink:"/en/docs/tutorial/todolist/data-operation"},next:{title:"\u603b\u7ed3",permalink:"/en/docs/tutorial/todolist/end"}},_={},c=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u52a8\u6001\u521b\u5efa\u4efb\u52a1",id:"\u52a8\u6001\u521b\u5efa\u4efb\u52a1",level:2},{value:"\u8ffd\u52a0\u4efb\u52a1",id:"\u8ffd\u52a0\u4efb\u52a1",level:2},{value:"\u7b5b\u9009\u4efb\u52a1\u5217\u8868",id:"\u7b5b\u9009\u4efb\u52a1\u5217\u8868",level:2},{value:"\u66f4\u65b0\u6807\u9898",id:"\u66f4\u65b0\u6807\u9898",level:2},{value:"\u66f4\u65b0\u4efb\u52a1\u6570\u91cf",id:"\u66f4\u65b0\u4efb\u52a1\u6570\u91cf",level:2},{value:"\u70b9\u51fb\u72b6\u6001\u56fe\u6807\u5207\u6362\u72b6\u6001",id:"\u70b9\u51fb\u72b6\u6001\u56fe\u6807\u5207\u6362\u72b6\u6001",level:2},{value:"\u70b9\u51fb X \u56fe\u6807\u5220\u9664\u4efb\u52a1",id:"\u70b9\u51fb-x-\u56fe\u6807\u5220\u9664\u4efb\u52a1",level:2},{value:"\u8f93\u5165\u6846\u5185\u6309\u4e0b\u56de\u8f66\u952e\u6dfb\u52a0\u65b0\u4efb\u52a1",id:"\u8f93\u5165\u6846\u5185\u6309\u4e0b\u56de\u8f66\u952e\u6dfb\u52a0\u65b0\u4efb\u52a1",level:2},{value:"\u70b9\u51fb\u7b5b\u9009\u6309\u94ae\u7b5b\u9009\u4efb\u52a1\u5217\u8868",id:"\u70b9\u51fb\u7b5b\u9009\u6309\u94ae\u7b5b\u9009\u4efb\u52a1\u5217\u8868",level:2},{value:"\u9884\u6dfb\u52a0\u51e0\u4e2a\u4efb\u52a1",id:"\u9884\u6dfb\u52a0\u51e0\u4e2a\u4efb\u52a1",level:2}];function r(t){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"\u6dfb\u52a0\u4ea4\u4e92",children:"\u6dfb\u52a0\u4ea4\u4e92"}),"\n",(0,n.jsx)(i.p,{children:"\u4ea4\u4e92\u662f\u6307\u7528\u6237\u4e0e\u8ba1\u7b97\u673a\u7a0b\u5e8f\u4e4b\u95f4\u7684\u53cc\u5411\u901a\u4fe1\u8fc7\u7a0b\u3002\u5b83\u6d89\u53ca\u7528\u6237\u901a\u8fc7\u9f20\u6807\u3001\u952e\u76d8\u6216\u5176\u4ed6\u8f93\u5165\u8bbe\u5907\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4e92\u52a8\uff0c\u4ee5\u4fbf\u6267\u884c\u7279\u5b9a\u7684\u64cd\u4f5c\u6216\u83b7\u53d6\u6240\u9700\u7684\u4fe1\u606f\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u73b0\u5728\u7684\u5f85\u529e\u6e05\u5355\u7a0b\u5e8f\u53ea\u662f\u901a\u8fc7\u56fe\u5f62\u754c\u9762\u5411\u7528\u6237\u5c55\u793a\u4e00\u4e9b\u4fe1\u606f\uff0c\u5e76\u4e0d\u4f1a\u54cd\u5e94\u7528\u6237\u7684\u9f20\u6807\u548c\u6309\u952e\u64cd\u4f5c\uff0c\u800c LCUI \u7684\u56fe\u5f62\u754c\u9762\u662f\u7531\u4e8b\u4ef6\u9a71\u52a8\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u5668\u6765\u5b8c\u6210\u4ea4\u4e92\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,n.jsxs)(i.p,{children:["\u548c main \u51fd\u6570\u7c7b\u4f3c\uff0c\u754c\u9762\u76f8\u5173\u4ea4\u4e92\u7684\u521d\u59cb\u5316\u6700\u597d\u662f\u96c6\u4e2d\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\u6267\u884c\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u4efb\u52a1\u5217\u8868\u754c\u9762\u7684\u521d\u59cb\u5316\u51fd\u6570\u547d\u540d\u4e3a ",(0,n.jsx)(i.code,{children:"ui_tasklist_init"}),"\uff0c\u7136\u540e\u8865\u5145\u76f8\u5173\u4ee3\u7801\uff1a"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.c",children:'#include "ui_tasklist.h"\n\nstatic tasklist_t *tasklist;\nstatic ui_widget_t *ui_tasklist;\n\nvoid ui_tasklist_init(ui_widget_t *w, tasklist_t *data)\n{\n        ui_tasklist = w;\n        tasklist = data;\n}\n'})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.h",children:'#include <ui.h>\n#include "tasklist.h"\n\nvoid ui_tasklist_init(ui_widget_t *w, tasklist_t *data);\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u4e4b\u540e\u4fee\u6539\u5728 main.c \u4e2d\u589e\u52a0\u8c03\u7528\u4ee3\u7801\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:'+ #include "ui_tasklist.h"\n  ...\n+ static tasklist_t tasks;\n  ...\n  int main(int argc, char **argv)\n  {\n  ...\n+         ui_tasklist_init(ui_get_widget("list"), &tasks);\n          return lcui_main();\n  }\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"\u5c06\u4f20\u5165\u7684\u90e8\u4ef6\u8f6c\u5b58\u5230\u5168\u5c40\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u65b9\u4fbf\u540e\u7eed\u7684\u51fd\u6570\u4f7f\u7528\u5b83\uff0c\u56e0\u4e3a\u6574\u4e2a\u7a0b\u5e8f\u4e2d\u53ea\u6709\u4e00\u4e2a\u4efb\u52a1\u5217\u8868\u3002"})}),"\n",(0,n.jsx)(i.h2,{id:"\u52a8\u6001\u521b\u5efa\u4efb\u52a1",children:"\u52a8\u6001\u521b\u5efa\u4efb\u52a1"}),"\n",(0,n.jsx)(i.p,{children:"\u7b5b\u9009\u548c\u65b0\u5efa\u90fd\u9700\u8981\u521b\u5efa\u4efb\u52a1\u90e8\u4ef6\u5e76\u63d2\u5165\u5230\u5217\u8868\u4e2d\uff0c\u56e0\u6b64\u5b9a\u4e49\u4e00\u4e2a\u4efb\u52a1\u90e8\u4ef6\u521b\u5efa\u51fd\u6570\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.c",children:'ui_widget_t *ui_taskitem_create(task_t *task)\n{\n        char id[32] = { 0 };\n        ui_widget_t *item = ui_create_widget("text");\n        ui_widget_t *status = ui_create_widget(NULL);\n        ui_widget_t *del = ui_create_widget(NULL);\n        ui_widget_t *name = ui_create_widget("text");\n        snprintf(id, 32, "%u", task->id);\n        ui_text_set_content_w(name, task->name);\n        ui_widget_set_attr(item, "data-id", id);\n        ui_widget_add_class(item, "task-item");\n        if (task->is_completed) {\n                ui_widget_add_class(item, "is-completed");\n        }\n        ui_widget_add_class(status, "task-status");\n        ui_widget_add_class(del, "task-delete");\n        ui_widget_append(item, status);\n        ui_widget_append(item, name);\n        ui_widget_append(item, del);\n        return item;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"\u8ffd\u52a0\u4efb\u52a1",children:"\u8ffd\u52a0\u4efb\u52a1"}),"\n",(0,n.jsx)(i.p,{children:"\u5148\u66f4\u65b0\u6570\u636e\uff0c\u540e\u66f4\u65b0\u90e8\u4ef6\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.c",children:"void ui_tasklist_append(const wchar_t *name, bool is_completed)\n{\n        ui_widget_append(ui_tasklist, ui_taskitem_create(tasklist_append(\n                                          tasklist, name, is_completed)));\n}\n\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.h",children:"void ui_tasklist_append(const wchar_t *name, bool is_completed);\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u7b5b\u9009\u4efb\u52a1\u5217\u8868",children:"\u7b5b\u9009\u4efb\u52a1\u5217\u8868"}),"\n",(0,n.jsx)(i.p,{children:"\u7531\u4e8e\u6570\u636e\u7ba1\u7406\u6a21\u5757\u5df2\u7ecf\u63d0\u4f9b\u4e86\u7b5b\u9009\u51fd\u6570\uff0c\u754c\u9762\u5c42\u7684\u4ee3\u7801\u53ea\u9700\u8981\u904d\u5386\u7b5b\u9009\u7ed3\u679c\u7136\u540e\u91cd\u65b0\u521b\u5efa\u4efb\u52a1\u5217\u8868\u5373\u53ef\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.c",children:"void ui_tasklist_filter(int status)\n{\n        list_node_t *node;\n        tasklist_t filtered_list;\n        tasklist_init(&filtered_list);\n        tasklist_filter(tasklist, status, &filtered_list);\n        ui_widget_empty(ui_tasklist);\n        for (list_each(node, &filtered_list)) {\n                ui_widget_append(ui_tasklist, ui_taskitem_create(node->data));\n        }\n        tasklist_empty(&filtered_list);\n}\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.h",children:"void ui_tasklist_filter(int status);\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u66f4\u65b0\u6807\u9898",children:"\u66f4\u65b0\u6807\u9898"}),"\n",(0,n.jsx)(i.p,{children:"\u5b9a\u4e49\u6807\u9898\u66f4\u65b0\u51fd\u6570\uff0c\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\uff0c\u5c06\u5176\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u66f4\u65b0\u5230\u90e8\u4ef6\u4e2d\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/main.c",children:'void update_title(void)\n{\n        char str[64];\n        time_t t = time(NULL);\n        struct tm *tm = localtime(&t);\n\n        strftime(str, 64, "%a %b %d %Y", tm);\n        ui_text_set_content(ui_get_widget("title"), str);\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u589e\u52a0\u5934\u6587\u4ef6\u5305\u542b\u548c\u51fd\u6570\u8c03\u7528\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:"+ #include <time.h>\n  ...\n  int main(int argc, char **argv)\n  {\n  ...\n+         update_title();\n          return lcui_main();\n  }\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u66f4\u65b0\u4efb\u52a1\u6570\u91cf",children:"\u66f4\u65b0\u4efb\u52a1\u6570\u91cf"}),"\n",(0,n.jsx)(i.p,{children:"\u5b9a\u4e49\u4efb\u52a1\u6570\u91cf\u66f4\u65b0\u51fd\u6570\uff0c\u5c06\u5f53\u524d\u7684\u4efb\u52a1\u603b\u6570\u8f6c\u6362\u6210\u6587\u672c\uff0c\u7136\u540e\u66f4\u65b0\u5230\u90e8\u4ef6\u4e2d\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/main.c",children:'void update_count(void)\n{\n        wchar_t text[32];\n\n        swprintf(text, 32, tasks.length > 1 ? L"%u tasks" : L"%u task",\n                 tasks.length);\n        ui_text_set_content_w(ui_get_widget("count"), text);\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u66f4\u65b0\u521d\u59cb\u6570\u91cf\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:"  ...\n  int main(int argc, char **argv)\n  {\n  ...\n+         update_count();\n          return lcui_main();\n  }\n"})}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u540e\u7eed\u7684\u589e\u52a0\u548c\u5220\u9664\u4efb\u52a1\u64cd\u4f5c\u4e2d\uff0c\u90fd\u9700\u8981\u8c03\u7528\u8be5\u51fd\u6570\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u70b9\u51fb\u72b6\u6001\u56fe\u6807\u5207\u6362\u72b6\u6001",children:"\u70b9\u51fb\u72b6\u6001\u56fe\u6807\u5207\u6362\u72b6\u6001"}),"\n",(0,n.jsx)(i.p,{children:"\u5b9a\u4e49\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u5148\u627e\u5230\u4e8b\u4ef6\u76ee\u6807\u6240\u5c5e\u4efb\u52a1\u90e8\u4ef6\uff0c\u7136\u540e\u83b7\u53d6 id \u5b57\u7b26\u4e32\uff0c\u5c06\u5176\u8f6c\u6362\u6210 int \u7c7b\u578b\u540e\u518d\u66f4\u65b0\u4efb\u52a1\u5217\u8868\u4e2d\u7684\u5bf9\u5e94\u4efb\u52a1\u72b6\u6001\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/ui_tasklist.c",children:'void ui_tasklist_on_click(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        int id;\n        const char *id_str;\n        task_t *task;\n        ui_widget_t *item;\n        ui_event_t ev;\n\n        // \u627e\u5230\u5f53\u524d\u4e8b\u4ef6\u76ee\u6807\u6240\u5c5e\u7684\u4efb\u52a1\u90e8\u4ef6\n        for (item = e->target; !ui_widget_has_class(item, "task-item");\n             item = item->parent)\n                ;\n        id_str = ui_widget_get_attr(item, "data-id");\n        if (!id_str || sscanf(id_str, "%d", &id) != 1) {\n                return;\n        }\n        if (ui_widget_has_class(e->target, "task-status")) {\n                task = tasklist_find(tasklist, id);\n                if (task != NULL) {\n                        task->is_completed = !task->is_completed;\n                        if (task->is_completed) {\n                                ui_widget_remove_class(item, "is-completed");\n                        } else {\n                                ui_widget_add_class(item, "is-completed");\n                        }\n                }\n        } else if (ui_widget_has_class(e->target, "task-delete")) {\n                ui_widget_remove(item);\n                tasklist_remove(tasklist, id);\n                ui_event_init(&ev, "update");\n                ui_widget_emit_event(item->parent, ev, NULL);\n        }\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u5c06\u4e4b\u4e0e click \u4e8b\u4ef6\u7ed1\u5b9a\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/ui_tasklist.c",children:'  void ui_tasklist_init(ui_widget_t *w, tasklist_t *data)\n  {\n          ui_tasklist = w;\n          tasklist = data;\n+         ui_widget_on(w, "click", ui_tasklist_on_click, NULL);\n  }\n'})}),"\n",(0,n.jsx)(i.h2,{id:"\u70b9\u51fb-x-\u56fe\u6807\u5220\u9664\u4efb\u52a1",children:"\u70b9\u51fb X \u56fe\u6807\u5220\u9664\u4efb\u52a1"}),"\n",(0,n.jsxs)(i.p,{children:["\u6d41\u7a0b\u548c\u72b6\u6001\u56fe\u6807\u7684\u4e00\u6837\uff0c \u56e0\u6b64\u590d\u7528 ",(0,n.jsx)(i.code,{children:"ui_tasklist_on_click()"}),"\uff0c\u5728\u91cc\u9762\u6dfb\u52a0\u4efb\u52a1\u90e8\u4ef6\u548c\u6570\u636e\u7684\u5220\u9664\u4ee3\u7801\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/ui_tasklist.c",children:'  void ui_tasklist_on_click(ui_widget_t *w, ui_event_t *e, void *arg)\n  {\n          int id;\n          const char *id_str;\n          task_t *task;\n          ui_widget_t *item;\n+         ui_event_t ev;\n\n          if (ui_widget_has_class(e->target, "task-status")) {\n  ...\n-         }\n+         } else if (ui_widget_has_class(e->target, "task-delete")) {\n+                 ui_widget_remove(item);\n+                 tasklist_remove(tasklist, id);\n+                 ui_event_init(&ev, "update");\n+                 ui_widget_emit_event(item->parent, ev, NULL);\n+         }\n  }\n'})}),"\n",(0,n.jsx)(i.p,{children:"\u5220\u9664\u4efb\u52a1\u540e\uff0c\u89e6\u53d1 update \u4e8b\u4ef6\u4ee5\u901a\u77e5\u4e3b\u754c\u9762\u66f4\u65b0\u4efb\u52a1\u6570\u91cf\u3002\u4e3b\u754c\u9762\u8fd9\u8fb9\u9700\u8981\u518d\u6dfb\u52a0 update \u4e8b\u4ef6\u7ed1\u5b9a\uff1a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:'  ...\n  int main(int argc, char **argv)\n  {\n  ...\n          ui_root_append(pack);\n          ui_widget_unwrap(pack);\n          ui_widget_set_title(ui_root(), L"Todo list");\n          ui_tasklist_init(ui_get_widget("list"), &tasks);\n          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);\n          ui_widget_on(ui_get_widget("filters"), "click", on_filter_click, NULL);\n+         ui_widget_on(ui_get_widget("list"), "update",\n+                      (ui_event_handler_t)update_count, NULL);\n  ...\n          return lcui_main();\n  }\n'})}),"\n",(0,n.jsx)(i.h2,{id:"\u8f93\u5165\u6846\u5185\u6309\u4e0b\u56de\u8f66\u952e\u6dfb\u52a0\u65b0\u4efb\u52a1",children:"\u8f93\u5165\u6846\u5185\u6309\u4e0b\u56de\u8f66\u952e\u6dfb\u52a0\u65b0\u4efb\u52a1"}),"\n",(0,n.jsx)(i.p,{children:"\u5b9a\u4e49\u6309\u952e\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u5f53\u6309\u4e0b\u7684\u662f\u56de\u8f66\u952e\u65f6\uff0c\u83b7\u53d6\u8f93\u5165\u6846\u7684\u5185\u5bb9\uff0c\u5c06\u5176\u521b\u5efa\u4e3a\u4efb\u52a1\uff0c\u7136\u540e\u6dfb\u52a0\u5230\u4efb\u52a1\u5217\u8868\u4e2d\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/main.c",children:"void on_input_keydown(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        wchar_t name[256];\n\n        if (e->key.code == KEY_ENTER) {\n                ui_textedit_get_text_w(w, 0, 255, name);\n                ui_tasklist_append(name, false);\n                ui_textedit_clear_text(w);\n                update_count();\n        }\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["\u8c03\u7528 ",(0,n.jsx)(i.code,{children:"ui_widget_on()"})," \u4e3a\u8f93\u5165\u6846\u6dfb\u52a0\u6309\u952e\u4e8b\u4ef6\u7ed1\u5b9a\u5904\u7406\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:'  ...\n  int main(int argc, char **argv)\n  {\n  ...\n+         ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);\n          return lcui_main();\n  }\n'})}),"\n",(0,n.jsx)(i.h2,{id:"\u70b9\u51fb\u7b5b\u9009\u6309\u94ae\u7b5b\u9009\u4efb\u52a1\u5217\u8868",children:"\u70b9\u51fb\u7b5b\u9009\u6309\u94ae\u7b5b\u9009\u4efb\u52a1\u5217\u8868"}),"\n",(0,n.jsxs)(i.p,{children:["\u5b9a\u4e49\u7b5b\u9009\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u6839\u636e\u4e8b\u4ef6\u76ee\u6807\u7684 ",(0,n.jsx)(i.code,{children:"data-value"})," \u5c5e\u6027\u503c\u6765\u7b5b\u9009\u4efb\u52a1\u5217\u8868\uff0c\u7136\u540e\u66f4\u65b0\u4efb\u52a1\u6570\u91cf\u548c\u6309\u94ae\u72b6\u6001\uff0c\u5176\u4e2d\u7684\u6309\u94ae\u72b6\u6001\u66f4\u65b0\u65b9\u6cd5\u662f\u904d\u5386\u6bcf\u4e2a\u6309\u94ae\uff0c\u79fb\u9664\u5176\u5b83\u7b5b\u9009\u6309\u94ae\u7684\u6fc0\u6d3b\u72b6\u6001\uff0c\u7ed9\u5f53\u524d\u6309\u94ae\u6dfb\u52a0\u6fc0\u6d3b\u72b6\u6001\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",metastring:"title=src/main.c",children:'void on_filter_click(ui_widget_t *w, ui_event_t *e, void *arg)\n{\n        const char *status = ui_widget_get_attr(e->target, "data-value");\n\n        if (status == NULL) {\n                return;\n        }\n        if (strcmp(status, "active") == 0) {\n                ui_tasklist_filter(0);\n        } else if (strcmp(status, "completed") == 0) {\n                ui_tasklist_filter(1);\n        } else {\n                ui_tasklist_filter(3);\n        }\n        update_count();\n        ui_widget_each(ui_get_widget("filters"), ui_widget_remove_class,\n                       (void *)"is-active");\n        ui_widget_add_class(e->target, "is-active");\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["\u5728 ",(0,n.jsx)(i.code,{children:"main()"})," \u51fd\u6570\u4e2d\u5c06\u8be5\u51fd\u6570\u4e0e ",(0,n.jsx)(i.code,{children:"click"})," \u4e8b\u4ef6\u7ed1\u5b9a\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:'  ...\n  int main(int argc, char **argv)\n  {\n  ...\n          ui_root_append(pack);\n          ui_widget_unwrap(pack);\n          ui_widget_set_title(ui_root(), L"Todo list");\n          ui_tasklist_init(ui_get_widget("list"), &tasks);\n          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);\n+         ui_widget_on(ui_get_widget("filters"), "click", on_filter_click, NULL);\n  ...\n          return lcui_main();\n  }\n'})}),"\n",(0,n.jsx)(i.h2,{id:"\u9884\u6dfb\u52a0\u51e0\u4e2a\u4efb\u52a1",children:"\u9884\u6dfb\u52a0\u51e0\u4e2a\u4efb\u52a1"}),"\n",(0,n.jsxs)(i.p,{children:["\u8c03\u7528 ",(0,n.jsx)(i.code,{children:"tasklist_append()"})," \u51fd\u6570\u5f80\u4efb\u52a1\u5217\u8868\u6dfb\u52a0\u51e0\u6761\u4efb\u52a1\uff1a"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-diff",metastring:"title=src/main.c",children:'+ #include <time.h>\n  ...\n  int main(int argc, char **argv)\n  {\n  ...\n+         tasklist_append(&tasks, L"Download LCUI source code", true);\n+         tasklist_append(&tasks, L"Build LCUI", true);\n+         tasklist_append(&tasks, L"Read LCUI tutorials", false);\n+         tasklist_append(&tasks, L"Create my LCUI application", false);\n+\n          ui_root_append(pack);\n          ui_widget_unwrap(pack);\n          ui_widget_set_title(ui_root(), L"Todo list");\n          ui_tasklist_init(ui_get_widget("list"), &tasks);\n          ui_widget_on(ui_get_widget("input"), "keydown", on_input_keydown, NULL);\n\n          update_title();\n          update_count();\n          return lcui_main();\n  }\n'})})]})}function u(t={}){const{wrapper:i}={...(0,s.R)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}},8453:(t,i,e)=>{e.d(i,{R:()=>d,x:()=>l});var n=e(6540);const s={},a=n.createContext(s);function d(t){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(i):{...i,...t}}),[i,t])}function l(t){let i;return i=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),n.createElement(a.Provider,{value:i},t.children)}}}]);