(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{2199:function(e,t,l){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var b in l)Object.prototype.hasOwnProperty.call(l,b)&&(e[b]=l[b])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return b}))},2200:function(e,t,l){"use strict";function b(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}l.d(t,"a",(function(){return b}))},2201:function(e,t,l){"use strict";l.d(t,"a",(function(){return O})),l.d(t,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},O=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var l=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),O=i(l),j=b,s=O["".concat(r,".").concat(j)]||O[j]||d[j]||c;return l?n.a.createElement(s,a(a({ref:t},o),{},{components:l})):n.a.createElement(s,a({ref:t},o))}));function s(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=l.length,r=new Array(c);r[0]=j;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:b,r[1]=a;for(var o=2;o<c;o++)r[o]=l[o];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"},354:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return a})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return i}));var b=l(2199),n=l(2200),c=(l(0),l(2201)),r={title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},a={unversionedId:"apis/media/image/chooseMedia",id:"version-3.2.0-canary.3/apis/media/image/chooseMedia",isDocsHomePage:!1,title:"Taro.chooseMedia(option)",description:"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/media/image/chooseMedia.md",slug:"/apis/media/image/chooseMedia",permalink:"/taro/docs/3.2.0-canary.3/apis/media/image/chooseMedia",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/media/image/chooseMedia.md",version:"3.2.0-canary.3",sidebar_label:"chooseMedia"},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ChooseMedia",id:"choosemedia",children:[]},{value:"mediaType",id:"mediatype",children:[]},{value:"sourceType",id:"sourcetype",children:[]},{value:"camera",id:"camera",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:u};function i(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"count"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"mediaType"),Object(c.b)("td",null,Object(c.b)("code",null,'("video" | "image")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6587\u4ef6\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"sourceType"),Object(c.b)("td",null,Object(c.b)("code",null,'("album" | "camera")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u56fe\u7247\u548c\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxDuration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u65f6\u95f4\u8303\u56f4\u4e3a 3s \u81f3 30s \u4e4b\u95f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"sizeType"),Object(c.b)("td",null,Object(c.b)("code",null,'("original" | "compressed")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4ec5\u5bf9 mediaType \u4e3a image \u65f6\u6709\u6548\uff0c\u662f\u5426\u538b\u7f29\u6240\u9009\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4ec5\u5728 sourceType \u4e3a camera \u65f6\u751f\u6548\uff0c\u4f7f\u7528\u524d\u7f6e\u6216\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFiles"),Object(c.b)("td",null,Object(c.b)("code",null,"ChooseMedia[]")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6709\u6548\u503c\u6709 image \u3001video")))),Object(c.b)("h3",{id:"choosemedia"},"ChooseMedia"),Object(c.b)("p",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84)")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u89c6\u9891\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"thumbTempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u89c6\u9891\u7f29\u7565\u56fe\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")))),Object(c.b)("h3",{id:"mediatype"},"mediaType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"video"),Object(c.b)("td",null,"\u53ea\u80fd\u62cd\u6444\u89c6\u9891\u6216\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),Object(c.b)("tr",null,Object(c.b)("td",null,"image"),Object(c.b)("td",null,"\u53ea\u80fd\u62cd\u6444\u56fe\u7247\u6216\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")))),Object(c.b)("h3",{id:"sourcetype"},"sourceType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"album"),Object(c.b)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444")))),Object(c.b)("h3",{id:"camera"},"camera"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"back"),Object(c.b)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"front"),Object(c.b)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMedia({\n  count: 9,\n  mediaType: ['image','video'],\n  sourceType: ['album', 'camera'],\n  maxDuration: 30,\n  camera: 'back',\n  success: (res) => {\n    console.log(res.tempFiles)\n    console.log(res.type)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Taro.chooseMedia"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}i.isMDXComponent=!0}}]);