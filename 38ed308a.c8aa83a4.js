(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{1738:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1739:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}n.d(t,"a",(function(){return r}))},1740:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return p}));var r=n(0),b=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),O=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},j=function(e){var t=O(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(n),d=r,p=j["".concat(c,".").concat(d)]||j[d]||u[d]||a;return n?b.a.createElement(p,l(l({ref:t},i),{},{components:n})):b.a.createElement(p,l({ref:t},i))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},446:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var r=n(1738),b=n(1739),a=(n(0),n(1740)),c={title:"WebView",sidebar_label:"WebView"},l={unversionedId:"components/open/web-view",id:"version-2.x/components/open/web-view",isDocsHomePage:!1,title:"WebView",description:"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.x/components/open/web-view.md",slug:"/components/open/web-view",permalink:"/taro/docs/2.x/components/open/web-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/open/web-view.md",version:"2.x",sidebar_label:"WebView",sidebar:"version-2.x/components",previous:{title:"OpenData",permalink:"/taro/docs/2.x/components/open/open-data"},next:{title:"\u5176\u4ed6",permalink:"/taro/docs/2.x/components/open/others"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"WebViewProps",id:"webviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onMessageEventDetail",id:"onmessageeventdetail",children:[]},{value:"onLoadEventDetail",id:"onloadeventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:o};function O(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"web-view \u7ec4\u4ef6\u662f\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u627f\u8f7d\u7f51\u9875\u7684\u5bb9\u5668\uff0c\u4f1a\u81ea\u52a8\u94fa\u6ee1\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u3002\u4e2a\u4eba\u7c7b\u578b\u4e0e\u6d77\u5916\u7c7b\u578b\u7684\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u4f7f\u7528\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<WebViewProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  handleMessage () {}\n  \n  render () {\n    return (\n      <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"webviewprops"},"WebViewProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"src"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u662f"),Object(a.b)("td",null,"webview \u6307\u5411\u7f51\u9875\u7684\u94fe\u63a5\u3002\u53ef\u6253\u5f00\u5173\u8054\u7684\u516c\u4f17\u53f7\u7684\u6587\u7ae0\uff0c\u5176\u5b83\u7f51\u9875\u9700\u767b\u5f55\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u4e1a\u52a1\u57df\u540d\u3002")),Object(a.b)("tr",null,Object(a.b)("td",null,"onMessage"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onMessageEventDetail>")),Object(a.b)("td",null,"\u5426"),Object(a.b)("td",null,"\u7f51\u9875\u5411\u5c0f\u7a0b\u5e8f postMessage \u65f6\uff0c\u4f1a\u5728\u7279\u5b9a\u65f6\u673a\uff08\u5c0f\u7a0b\u5e8f\u540e\u9000\u3001\u7ec4\u4ef6\u9500\u6bc1\u3001\u5206\u4eab\uff09\u89e6\u53d1\u5e76\u6536\u5230\u6d88\u606f\u3002e.detail = ","{ data }")),Object(a.b)("tr",null,Object(a.b)("td",null,"onLoad"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onLoadEventDetail>")),Object(a.b)("td",null,"\u5426"),Object(a.b)("td",null,"\u7f51\u9875\u52a0\u8f7d\u6210\u529f\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")),Object(a.b)("tr",null,Object(a.b)("td",null,"onError"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(a.b)("td",null,"\u5426"),Object(a.b)("td",null,"\u7f51\u9875\u52a0\u8f7d\u5931\u8d25\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6\u3002e.detail = ","{ src }")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WebViewProps.src"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onMessage"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onLoad"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WebViewProps.onError"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(a.b)("h3",{id:"onmessageeventdetail"},"onMessageEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"data"),Object(a.b)("td",null,Object(a.b)("code",null,"any[]")),Object(a.b)("td",null,"\u6d88\u606f\u6570\u636e\uff0c\u662f\u591a\u6b21 postMessage \u7684\u53c2\u6570\u7ec4\u6210\u7684\u6570\u7ec4")))),Object(a.b)("h3",{id:"onloadeventdetail"},"onLoadEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"src"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u7f51\u9875\u94fe\u63a5")))),Object(a.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"src"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u7f51\u9875\u94fe\u63a5")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"WebView"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}O.isMDXComponent=!0}}]);