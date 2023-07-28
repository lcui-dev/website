"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7360],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>_});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,_=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(_,l(l({ref:n},c),{},{components:t})):r.createElement(_,l({ref:n},c))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l="\u5e73\u53f0\u5e93",p={unversionedId:"rfcs/lib-platform",id:"rfcs/lib-platform",title:"\u5e73\u53f0\u5e93",description:"- \u5f00\u59cb\u65e5\u671f\uff1a2023-04-22",source:"@site/docs/rfcs/0013-lib-platform.md",sourceDirName:"rfcs",slug:"/rfcs/lib-platform",permalink:"/zh-Hans/docs/next/rfcs/lib-platform",draft:!1,editUrl:"https://github.com/lcui-dev/website/tree/main/docs/docs/rfcs/0013-lib-platform.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"rfcSidebar",previous:{title:"UI \u53d8\u66f4\u89c2\u5bdf\u5668",permalink:"/zh-Hans/docs/next/rfcs/lib-ui-mutation-observer"},next:{title:"\u6d4b\u8bd5\u5e93",permalink:"/zh-Hans/docs/next/rfcs/lib-ctest"}},o={},s=[{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u6b65\u8fdb\u5b9a\u65f6\u5668",id:"\u6b65\u8fdb\u5b9a\u65f6\u5668",level:3},{value:"\u4e8b\u4ef6\u5faa\u73af",id:"\u4e8b\u4ef6\u5faa\u73af",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u5907\u9009\u65b9\u6848",id:"\u5907\u9009\u65b9\u6848",level:2},{value:"\u91c7\u7528\u7b56\u7565",id:"\u91c7\u7528\u7b56\u7565",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e73\u53f0\u5e93"},"\u5e73\u53f0\u5e93"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u65e5\u671f\uff1a2023-04-22"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u4e3b\u8981\u7248\u672c\uff1a3.x"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003\u95ee\u9898\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lc-soft/LCUI/discussions/246"},"#246")),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 PR\uff1a\u65e0")),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("p",null,"\u5c06\u7a97\u53e3\u7ba1\u7406\u3001\u6d88\u606f\u5faa\u73af\u3001\u7cfb\u7edf\u76f8\u5173\u63a5\u53e3\u6574\u5408\u4e3a libplatform \u5e73\u53f0\u652f\u6301\u5e93\uff0c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7684\u5e73\u53f0\u76f8\u5173\u529f\u80fd\u63d0\u4f9b\u8de8\u5e73\u53f0\u7edf\u4e00\u7684\u63a5\u53e3\u3002"),(0,a.kt)("h2",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u7684\u521d\u59cb\u5316\u548c\u4e3b\u5faa\u73af\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <platform.h>\n#include <platform/main.h>\n\nint main(int argc, char *argv[])\n{\n        // \u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u7528\u4e8e\u6ce8\u518c\u7a97\u53e3\u7c7b\u540d\n        app_init(L"My Application");\n\n        // \u8fd0\u884c\u4e3b\u5faa\u73af\n        return app_run();\n}\n')),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5904\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <platform.h>\n\n#define MY_CUSTOM_EVENT (APP_EVENT_USER + 1)\n\nvoid on_my_custom_event(app_event_t *e, void *arg)\n{\n        const char *str = arg;\n\n        printf("my custom event, str: %s\\n", str);\n}\n\nint main(int argc, char *argv[])\n{\n        app_window_t *wnd;\n        app_event_t e = { 0 };\n        const char *listener_data = "event listener data";\n        const char *event_data = "event data";\n\n        // \u8bbe\u7f6e\u4e8b\u4ef6\u7c7b\u578b\n        e.type = MY_CUSTOM_EVENT;\n        // \u8bbe\u7f6e\u4e8b\u4ef6\u76f8\u5173\u6570\u636e\n        e.data = event_data;\n\n        app_init(L"My Application");\n        // \u6dfb\u52a0\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u4e5f\u5c31\u662f\u5c06\u56de\u8c03\u51fd\u6570\u4e0e\u4e8b\u4ef6\u7ed1\u5b9a\n        app_on_event(MY_CUSTOM_EVENT, on_my_custom_event, listener_data);\n        // \u6295\u9012\u4e8b\u4ef6\u5230\u4e8b\u4ef6\u961f\u5217\uff0c\u7b49\u5f85\u88ab\u4e8b\u4ef6\u5faa\u73af\u5904\u7406\n        app_post_event(&e);\n        return app_run();\n}\n')),(0,a.kt)("p",null,"\u7a97\u53e3\u7ba1\u7406\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <pandagl.h>\n#include <platform.h>\n\nvoid on_window_paint(app_event_t *e, void *arg)\n{\n        app_window_paint_t paint = { 0 };\n        // \u5f00\u59cb\u7ed8\u5236\uff0c\u521b\u5efa\u7ed8\u5236\u4e0a\u4e0b\u6587\n        paint = app_window_begin_paint(e->window, &e->paint.rect);\n        // \u81ea\u5b9a\u4e49\u7ed8\u5236\u7a97\u53e3\u5185\u5bb9\uff0c\u4f8b\u5982\u586b\u5145\u767d\u8272\uff1a\n        pd_canvas_fill_rect(&paint->canvas, RGB(255, 255, 255), NULL, TRUE);\n        // \u7ed3\u675f\u7ed8\u5236\uff0c\u9500\u6bc1\u7ed8\u5236\u4e0a\u4e0b\u6587\n        app_window_end_paint(e->window, paint);\n}\n\nint main(int argc, char *argv[])\n{\n        app_window_t *wnd;\n\n        app_init(L"My Application");\n        // \u521b\u5efa\u4e00\u4e2a\u7a97\u53e3\uff0c\u5e76\u8bbe\u7f6e\u521d\u59cb\u6807\u9898\u3001\u4f4d\u7f6e\u548c\u5c3a\u5bf8\n        wnd = app_window_create("Main window", 200, 200, 800, 600, NULL);\n        // \u8bbe\u7f6e\u5c3a\u5bf8\n        app_window_set_size(wnd, 320, 240);\n        // \u8bbe\u7f6e\u4f4d\u7f6e\n        app_window_set_position(wnd, 100, 100);\n        // \u6fc0\u6d3b\u7a97\u53e3\n        app_window_activate(wnd);\n        // \u6dfb\u52a0\u7a97\u53e3\u7ed8\u5236\u4e8b\u4ef6\u5904\u7406\u5668\n        app_on_event(APP_EVENT_PAINT, on_window_paint, NULL);\n        return app_run();\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u6b65\u8fdb\u5b9a\u65f6\u5668\u7ba1\u7406\u5b9a\u65f6\u5faa\u73af\uff0c\u5178\u578b\u7684\u7528\u6cd5\u662f\u5728\u6e32\u67d3\u6bcf\u5e27\u4e4b\u524d\u8c03\u7528\u4e00\u6b21 Tick \u56de\u8c03\u51fd\u6570\uff0c\u4f8b\u5982 1 \u79d2\u5185\u8c03\u7528 60 \u6b21\u4ee5\u5b9e\u73b0\u6bcf\u79d2\u6e32\u67d3 60 \u5e27\u753b\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include <platform.h>\n\nvoid on_tick(step_timer_t *timer, void *data)\n{\n        int *frames = data;\n\n        *frames += 1;\n        printf("tick\\n");\n}\n\nint main(int argc, char *argv)\n{\n        int frames = 0;\n        step_timer_t timer;\n\n        // \u8bbe\u7f6e\u6bcf\u79d2 60 tick\n        timer.target_elapsed_time = 1000 / 60;\n        timer.is_fixed_time_step = TRUE;\n        step_timer_init(&timer);\n        while (frames <= 240) {\n                step_timer_tick(&timer, on_tick, &frames);\n        }\n        return 0;\n}\n')),(0,a.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,a.kt)("p",null,"\u73b0\u6709\u7684\u7cfb\u7edf\u62bd\u8c61\u5c42\u4ec5\u4ec5\u5b9e\u73b0\u4e86\u4e00\u4e9b\u5fc5\u8981\u7684\u529f\u80fd\uff0c\u4e0e SDL \u8fd9\u7c7b\u5e93\u76f8\u6bd4\u8fc7\u4e8e\u7b80\u964b\uff0c\u800c LCUI \u7ef4\u62a4\u4eba\u5458\u5e76\u4e0d\u6253\u7b97\u518d\u7ee7\u7eed\u66f4\u65b0\u8fd9\u5757\u529f\u80fd\uff0c\u56e0\u6b64\uff0c\u6709\u5fc5\u8981\u5c06\u7cfb\u7edf\u62bd\u8c61\u5c42\u7684\u5b9e\u73b0\u4ee3\u7801\u6574\u5408\u6210\u72ec\u7acb\u7684\u5e93\uff0c\u4ee5\u4fbf\u4ed6\u4eba\u6839\u636e\u81ea\u8eab\u7684\u9700\u6c42\u5bf9\u5176\u5b9a\u5236\u548c\u6539\u8fdb\uff0c\u53c8\u6216\u662f\u57fa\u4e8e SDL \u91cd\u65b0\u5b9e\u73b0\u5b83\uff0c\u4f7f LCUI \u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5c06 SDL \u4f5c\u4e3a\u540e\u7aef\u6765\u4e3a\u56fe\u5f62\u754c\u9762\u7684\u5404\u9879\u80fd\u529b\u63d0\u4f9b\u66f4\u597d\u7684\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,a.kt)("h3",{id:"\u6b65\u8fdb\u5b9a\u65f6\u5668"},"\u6b65\u8fdb\u5b9a\u65f6\u5668"),(0,a.kt)("p",null,"2.x \u7248\u672c\u4e2d\u7684\u6b65\u8fdb\u5b9a\u65f6\u5668\u662f\u57fa\u4e8e\u4e92\u65a5\u9501\u3001\u6761\u4ef6\u53d8\u91cf\u5b9a\u65f6\u7b49\u5f85\u5b9e\u73b0\u7684\uff0c\u6bcf\u6b21\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"StepTimer_Remain()")," \u65f6\u82e5\u5f53\u524d\u5e27\u8017\u65f6\u4f4e\u4e8e\u6307\u5b9a\u7684\u5e73\u5747\u8017\u65f6\u5219\u4f1a\u4e3b\u52a8\u8fdb\u5165\u4f11\u7720\u4ee5\u8865\u5168\u603b\u8017\u65f6\u3002\u8fd9\u79cd\u505a\u6cd5\u4f1a\u963b\u585e\u4e8b\u4ef6\u961f\u5217\uff0c\u51b5\u4e14\u6b65\u8fdb\u5b9a\u65f6\u5668\u7684\u76ee\u7684\u53ea\u662f\u4e3a\u4e86\u9650\u5236\u6e32\u67d3\u5e27\u7387\uff0c\u6ca1\u5fc5\u8981\u8fde\u4e8b\u4ef6\u961f\u5217\u4e5f\u9650\u5236\uff0c\u56e0\u6b64\uff0c\u5e94\u8be5\u91cd\u65b0\u8bbe\u8ba1\u6b65\u8fdb\u5b9a\u65f6\u5668\uff0c\u53d6\u6d88\u5b83\u7684\u4e3b\u52a8\u4f11\u7720\u80fd\u529b\u3002"),(0,a.kt)("p",null,"2.x \u7248\u672c\u4e2d\u7684 UWP \u9002\u914d\u4ee3\u7801\u7528\u5230\u4e86 DirectX \u793a\u4f8b\u9879\u76ee\u4e2d\u81ea\u5e26\u7684 StepTimer\uff0c\u5b83\u7684\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// \u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\u65f6\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u5e94\u7528\u7a0b\u5e8f\u8d44\u4ea7\u3002\nMain::Main(const std::shared_ptr<DX::DeviceResources>& deviceResources) :\n    m_deviceResources(deviceResources)\n{\n    // \u6ce8\u518c\u4ee5\u5728\u8bbe\u5907\u4e22\u5931\u6216\u91cd\u65b0\u521b\u5efa\u65f6\u6536\u5230\u901a\u77e5\n    m_deviceResources->RegisterDeviceNotify(this);\n\n    m_renderer = std::unique_ptr<Renderer>(new Renderer(m_deviceResources));\n\n    // TODO: \u5982\u679c\u9700\u8981\u9ed8\u8ba4\u7684\u53ef\u53d8\u65f6\u95f4\u6b65\u957f\u6a21\u5f0f\u4e4b\u5916\u7684\u5176\u4ed6\u6a21\u5f0f\uff0c\u8bf7\u66f4\u6539\u8ba1\u65f6\u5668\u8bbe\u7f6e\u3002\n    // \u4f8b\u5982\uff0c\u5bf9\u4e8e 60 FPS \u56fa\u5b9a\u65f6\u95f4\u6b65\u957f\u66f4\u65b0\u903b\u8f91\uff0c\u8bf7\u8c03\u7528:\n    /*\n    m_timer.SetFixedTimeStep(true);\n    m_timer.SetTargetElapsedSeconds(1.0 / 60);\n    */\n}\n\n// \u6bcf\u5e27\u66f4\u65b0\u4e00\u6b21\u5e94\u7528\u7a0b\u5e8f\u72b6\u6001\u3002\nvoid Main::Update()\n{\n    // \u66f4\u65b0\u573a\u666f\u5bf9\u8c61\u3002\n    m_timer.Tick([&]() {\n        m_renderer->Update(m_timer);\n    });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"m_timer.Tick()")," \u4f1a\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"m_renderer->Update(m_timer)")," \u4ec5\u5728\u5408\u9002\u7684\u65f6\u673a\u8c03\u7528\u3002\u663e\u7136\uff0c\u8fd9\u79cd\u7528\u6cd5\u4e0e\u6211\u4eec\u7684\u9700\u6c42\u662f\u975e\u5e38\u5339\u914d\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/DirectXTK/wiki/StepTimer"},"Microsoft/DirectXTK/StepTimer"),"\u7684\u6e90\u7801\uff0c\u5c06\u5176\u6539\u7528 C \u8bed\u8a00\u5b9e\u73b0\uff0c\u4ee5\u4f9b LCUI \u7684\u4e3b\u5faa\u73af\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u4e8b\u4ef6\u5faa\u73af"},"\u4e8b\u4ef6\u5faa\u73af"),(0,a.kt)("p",null,"\u53c2\u8003 SDL \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af\u548c\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e8b\u4ef6/\u6d88\u606f\u5faa\u73af\u76f8\u5173\u6587\u6863\uff0c\u8bbe\u8ba1\u4e8b\u4ef6\u5faa\u73af\u76f8\u5173\u63a5\u53e3\u3002\u7531\u4e8e\u53ea\u662f\u505a\u4e86\u7b80\u5355\u7684\u8c03\u7814\uff0c\u5185\u5bb9\u4ec5\u4f9b\u53c2\u8003\uff0c\u90e8\u5206\u5185\u5bb9\u8fd8\u6709\u5f85\u9a8c\u8bc1\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows \u6d88\u606f\u5faa\u73af\uff1a")),(0,a.kt)("p",null,"\u7cfb\u7edf\u4ec5\u5728\u7ebf\u7a0b\u6267\u884c\u9700\u8981\u4e8b\u4ef6\u961f\u5217\u7684\u76f8\u5173\u64cd\u4f5c\u65f6\u521b\u5efa\u4e8b\u4ef6\u961f\u5217\u3002\u5982\u679c\u7ebf\u7a0b\u521b\u5efa\u4e86\u4e00\u4e2a\u6216\u66f4\u591a\u4e2a\u7a97\u53e3\uff0c\u5219\u5fc5\u987b\u63d0\u4f9b\u6d88\u606f\u5faa\u73af\u3002\u6b64\u6d88\u606f\u5faa\u73af\u4ece\u7ebf\u7a0b\u7684\u6d88\u606f\u961f\u5217\u4e2d\u68c0\u7d22\u6d88\u606f\uff0c\u5e76\u5c06\u5176\u5206\u6d3e\u5230\u9002\u5f53\u7684\u7a97\u53e3\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51942953/is-it-possible-to-create-a-message-loop-without-creating-a-window-in-c"},"visual c++ - Is it possible to create a message loop without creating a window in C++ - Stack Overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/win32/winmsg/using-messages-and-message-queues#creating-a-message-loop"},"Using Messages and Message Queues - Win32 apps | Microsoft Docs"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"X11 \u4e8b\u4ef6\u5faa\u73af\uff1a")),(0,a.kt)("p",null,"XSendEvent() \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5fc5\u987b\u6307\u5b9a\u4e00\u4e2a\u7a97\u53e3\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u60f3\u5b9e\u73b0\u7a97\u53e3\u65e0\u5173\u7684\u4e8b\u4ef6\u901a\u4fe1\u7684\u8bdd\uff0c\u5219\u9700\u8981\u989d\u5916\u521b\u5efa\u4e00\u4e2a\u4e13\u7528\u7a97\u53e3\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tronche.com/gui/x/xlib/event-handling/XSendEvent.html"},"Xlib Programming Manual: XSendEvent"))),(0,a.kt)("h2",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("p",null,"\u65e0\u3002"),(0,a.kt)("h2",{id:"\u5907\u9009\u65b9\u6848"},"\u5907\u9009\u65b9\u6848"),(0,a.kt)("p",null,"\u6539\u7528 SDL\u3002\u4e0d\u5efa\u8bae\u91c7\u7528\u6b64\u65b9\u6848\uff0c\u56e0\u4e3a\u6539\u52a8\u8f83\u5927\uff0c\u6210\u672c\u592a\u9ad8\uff0c\u8fd8\u8981\u6295\u5165\u6210\u672c\u53bb\u5b66\u4e60 SDL\u3002"),(0,a.kt)("h2",{id:"\u91c7\u7528\u7b56\u7565"},"\u91c7\u7528\u7b56\u7565"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e2a\u7834\u574f\u6027\u7684\u6539\u52a8\uff0c\u6d89\u53ca\u4e3b\u5faa\u73af\u3001\u7a97\u53e3\u7ba1\u7406\u7684\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);