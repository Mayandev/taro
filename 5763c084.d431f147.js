(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{2199:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},2200:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}n.d(e,"a",(function(){return r}))},2201:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return j}));var r=n(0),c=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var i=c.a.createContext({}),u=function(t){var e=c.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return c.a.createElement(i.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},d=c.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,b=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),s=u(n),d=r,j=s["".concat(b,".").concat(d)]||s[d]||O[d]||l;return n?c.a.createElement(j,a(a({ref:e},i),{},{components:n})):c.a.createElement(j,a({ref:e},i))}));function j(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,b=new Array(l);b[0]=d;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:r,b[1]=a;for(var i=2;i<l;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},805:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return u}));var r=n(2199),c=n(2200),l=(n(0),n(2201)),b={title:"Taro.showToast(option)",sidebar_label:"showToast"},a={unversionedId:"apis/ui/interaction/showToast",id:"version-3.x/apis/ui/interaction/showToast",isDocsHomePage:!1,title:"Taro.showToast(option)",description:"\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846",source:"@site/versioned_docs/version-3.x/apis/ui/interaction/showToast.md",slug:"/apis/ui/interaction/showToast",permalink:"/taro/docs/apis/ui/interaction/showToast",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/interaction/showToast.md",version:"3.x",sidebar_label:"showToast",sidebar:"version-3.x/API",previous:{title:"Page",permalink:"/taro/docs/apis/framework/Page"},next:{title:"Taro.showModal(option)",permalink:"/taro/docs/apis/ui/interaction/showModal"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Taro.showLoading \u548c Taro.showToast \u540c\u65f6\u53ea\u80fd\u663e\u793a\u4e00\u4e2a"),Object(l.b)("li",{parentName:"ul"},"Taro.showToast \u5e94\u4e0e Taro.hideToast \u914d\u5bf9\u4f7f\u7528")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"title"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u63d0\u793a\u7684\u5185\u5bb9")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"duration"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63d0\u793a\u7684\u5ef6\u8fdf\u65f6\u95f4")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"icon"),Object(l.b)("td",null,Object(l.b)("code",null,'"success" | "loading" | "none"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u56fe\u6807",Object(l.b)("br",null),Object(l.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(l.b)("br",null),"- 'success': \u663e\u793a\u6210\u529f\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u663e\u793a 7 \u4e2a\u6c49\u5b57\u957f\u5ea6;",Object(l.b)("br",null),"- 'loading': \u663e\u793a\u52a0\u8f7d\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u663e\u793a 7 \u4e2a\u6c49\u5b57\u957f\u5ea6;",Object(l.b)("br",null),"- 'none': \u4e0d\u663e\u793a\u56fe\u6807\uff0c\u6b64\u65f6 title \u6587\u672c\u6700\u591a\u53ef\u663e\u793a\u4e24\u884c")),Object(l.b)("tr",null,Object(l.b)("td",null,"image"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807\u7684\u672c\u5730\u8def\u5f84\uff0cimage \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e icon")),Object(l.b)("tr",null,Object(l.b)("td",null,"mask"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u663e\u793a\u900f\u660e\u8499\u5c42\uff0c\u9632\u6b62\u89e6\u6478\u7a7f\u900f")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.showToast({\n  title: '\u6210\u529f',\n  icon: 'success',\n  duration: 2000\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.showToast"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);