(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{1738:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1739:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1740:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(r),s=n,y=u["".concat(c,".").concat(s)]||u[s]||f[s]||o;return r?a.a.createElement(y,i(i({ref:t},b),{},{components:r})):a.a.createElement(y,i({ref:t},b))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},812:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1738),a=r(1739),o=(r(0),r(1740)),c={title:"Taro.faceVerifyForPay(option)",sidebar_label:"faceVerifyForPay"},i={unversionedId:"apis/open-api/payment/faceVerifyForPay",id:"apis/open-api/payment/faceVerifyForPay",isDocsHomePage:!1,title:"Taro.faceVerifyForPay(option)",description:"\u652f\u4ed8\u5404\u4e2a\u5b89\u5168\u573a\u666f\u9a8c\u8bc1\u4eba\u8138",source:"@site/docs/apis/open-api/payment/faceVerifyForPay.md",slug:"/apis/open-api/payment/faceVerifyForPay",permalink:"/taro/docs/next/apis/open-api/payment/faceVerifyForPay",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/payment/faceVerifyForPay.md",version:"current",sidebar_label:"faceVerifyForPay",sidebar:"API",previous:{title:"Taro.requestPayment(option)",permalink:"/taro/docs/next/apis/open-api/payment/requestPayment"},next:{title:"Taro.authorize(option)",permalink:"/taro/docs/next/apis/open-api/authorize/authorize"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u652f\u4ed8\u5404\u4e2a\u5b89\u5168\u573a\u666f\u9a8c\u8bc1\u4eba\u8138"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.faceVerifyForPay.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: any) => Promise<any>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.faceVerifyForPay(params).then(...)\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.faceVerifyForPay"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);