(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{2199:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2200:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},2201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),O=r,d=p["".concat(o,".").concat(O)]||p[O]||u[O]||c;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},985:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2199),a=n(2200),c=(n(0),n(2201)),o={title:"Taro.checkSession(option)",sidebar_label:"checkSession"},i={unversionedId:"apis/open-api/login/checkSession",id:"version-3.2.0-canary.3/apis/open-api/login/checkSession",isDocsHomePage:!1,title:"Taro.checkSession(option)",description:"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/open-api/login/checkSession.md",slug:"/apis/open-api/login/checkSession",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/login/checkSession",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/open-api/login/checkSession.md",version:"3.2.0-canary.3",sidebar_label:"checkSession",sidebar:"version-3.2.0-canary.3/API",previous:{title:"Taro.login(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/login/login"},next:{title:"Taro.navigateToMiniProgram(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/navigate/navigateToMiniProgram"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002"),Object(c.b)("p",null,"\u901a\u8fc7 Taro.login \u63a5\u53e3\u83b7\u5f97\u7684\u7528\u6237\u767b\u5f55\u6001\u62e5\u6709\u4e00\u5b9a\u7684\u65f6\u6548\u6027\u3002\u7528\u6237\u8d8a\u4e45\u672a\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6237\u767b\u5f55\u6001\u8d8a\u6709\u53ef\u80fd\u5931\u6548\u3002\u53cd\u4e4b\u5982\u679c\u7528\u6237\u4e00\u76f4\u5728\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u5219\u7528\u6237\u767b\u5f55\u6001\u4e00\u76f4\u4fdd\u6301\u6709\u6548\u3002\u5177\u4f53\u65f6\u6548\u903b\u8f91\u7531\u5fae\u4fe1\u7ef4\u62a4\uff0c\u5bf9\u5f00\u53d1\u8005\u900f\u660e\u3002\u5f00\u53d1\u8005\u53ea\u9700\u8981\u8c03\u7528 Taro.checkSession \u63a5\u53e3\u68c0\u6d4b\u5f53\u524d\u7528\u6237\u767b\u5f55\u6001\u662f\u5426\u6709\u6548\u3002"),Object(c.b)("p",null,"\u767b\u5f55\u6001\u8fc7\u671f\u540e\u5f00\u53d1\u8005\u53ef\u4ee5\u518d\u8c03\u7528 Taro.login \u83b7\u53d6\u65b0\u7684\u7528\u6237\u767b\u5f55\u6001\u3002\u8c03\u7528\u6210\u529f\u8bf4\u660e\u5f53\u524d session_key \u672a\u8fc7\u671f\uff0c\u8c03\u7528\u5931\u8d25\u8bf4\u660e session_key \u5df2\u8fc7\u671f\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"}),"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.checkSession({\n  success: function () {\n    //session_key \u672a\u8fc7\u671f\uff0c\u5e76\u4e14\u5728\u672c\u751f\u547d\u5468\u671f\u4e00\u76f4\u6709\u6548\n  },\n  fail: function () {\n    // session_key \u5df2\u7ecf\u5931\u6548\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c\u767b\u5f55\u6d41\u7a0b\n    Taro.login() //\u91cd\u65b0\u767b\u5f55\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.checkSession"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);