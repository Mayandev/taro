(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{1738:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1739:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1740:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(b,".").concat(d)]||p[d]||O[d]||c;return r?a.a.createElement(f,l(l({ref:t},i),{},{components:r})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<c;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},888:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(1738),a=r(1739),c=(r(0),r(1740)),b={title:"nodesRef.scrollOffset([callback])",sidebar_label:"nodesRef.scrollOffset"},l={unversionedId:"apis/interface/wxml/nodesRef_scrollOffset",id:"version-1.x/apis/interface/wxml/nodesRef_scrollOffset",isDocsHomePage:!1,title:"nodesRef.scrollOffset([callback])",description:"\u6dfb\u52a0\u8282\u70b9\u7684\u6eda\u52a8\u4f4d\u7f6e\u67e5\u8be2\u8bf7\u6c42\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002\u8282\u70b9\u5fc5\u987b\u662f scroll-view \u6216\u8005 viewport\u3002\u8fd4\u56de\u503c\u662f nodesRef \u5bf9\u5e94\u7684 selectorQuery\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/nodesRef_scrollOffset.md",slug:"/apis/interface/wxml/nodesRef_scrollOffset",permalink:"/taro/docs/1.x/apis/interface/wxml/nodesRef_scrollOffset",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/wxml/nodesRef_scrollOffset.md",version:"1.x",sidebar_label:"nodesRef.scrollOffset",sidebar:"version-1.x/API",previous:{title:"nodesRef.boundingClientRect([callback])",permalink:"/taro/docs/1.x/apis/interface/wxml/nodesRef_boundingClientRect"},next:{title:"nodesRef.fields(fields, [callback])",permalink:"/taro/docs/1.x/apis/interface/wxml/nodesRef_fields"}},o=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6dfb\u52a0\u8282\u70b9\u7684\u6eda\u52a8\u4f4d\u7f6e\u67e5\u8be2\u8bf7\u6c42\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002\u8282\u70b9\u5fc5\u987b\u662f scroll-view \u6216\u8005 viewport\u3002\u8fd4\u56de\u503c\u662f nodesRef \u5bf9\u5e94\u7684 selectorQuery\u3002"),Object(c.b)("p",null,"\u8fd4\u56de\u7684\u8282\u70b9\u4fe1\u606f\u4e2d\uff0c\u6bcf\u4e2a\u8282\u70b9\u7684\u6eda\u52a8\u4f4d\u7f6e\u7528 scrollLeft\u3001scrollTop \u5b57\u6bb5\u63cf\u8ff0\u3002\u5982\u679c\u63d0\u4f9b\u4e86 callback \u56de\u8c03\u51fd\u6570\uff0c\u5728\u6267\u884c selectQuery \u7684 exec \u65b9\u6cd5\u540e\uff0c\u8282\u70b9\u4fe1\u606f\u4f1a\u5728 callback \u4e2d\u8fd4\u56de\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.createSelectorQuery()\n  .selectViewport()\n  .scrollOffset(rect => {\n    rect.id      // \u8282\u70b9\u7684 ID\n    rect.dataset // \u8282\u70b9\u7684 dataset\n    res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n    res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n  })\n  .exec()\n})\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.in"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.select"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectAll"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectViewport"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.boundingClientRect"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.scrollOffset"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.fields"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.exec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);