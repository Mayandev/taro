(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{2199:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2200:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},2201:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,s=d["".concat(o,".").concat(p)]||d[p]||O[p]||l;return n?c.a.createElement(s,b(b({ref:t},i),{},{components:n})):c.a.createElement(s,b({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var b={};for(var a in t)hasOwnProperty.call(t,a)&&(b[a]=t[a]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<l;i++)o[i]=n[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(2199),c=n(2200),l=(n(0),n(2201)),o={title:"Taro.createBLEConnection(option)",sidebar_label:"createBLEConnection"},b={unversionedId:"apis/device/ble/createBLEConnection",id:"version-2.x/apis/device/ble/createBLEConnection",isDocsHomePage:!1,title:"Taro.createBLEConnection(option)",description:"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/createBLEConnection.md",slug:"/apis/device/ble/createBLEConnection",permalink:"/taro/docs/2.x/apis/device/ble/createBLEConnection",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/createBLEConnection.md",version:"2.x",sidebar_label:"createBLEConnection",sidebar:"version-2.x/API",previous:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/docs/2.x/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"Taro.closeBLEConnection(option)",permalink:"/taro/docs/2.x/apis/device/ble/closeBLEConnection"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:a};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002"),Object(l.b)("p",null,"\u82e5\u5c0f\u7a0b\u5e8f\u5728\u4e4b\u524d\u5df2\u6709\u641c\u7d22\u8fc7\u67d0\u4e2a\u84dd\u7259\u8bbe\u5907\uff0c\u5e76\u6210\u529f\u5efa\u7acb\u8fde\u63a5\uff0c\u53ef\u76f4\u63a5\u4f20\u5165\u4e4b\u524d\u641c\u7d22\u83b7\u53d6\u7684 deviceId \u76f4\u63a5\u5c1d\u8bd5\u8fde\u63a5\u8be5\u8bbe\u5907\uff0c\u65e0\u9700\u8fdb\u884c\u641c\u7d22\u64cd\u4f5c\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8bf7\u4fdd\u8bc1\u5c3d\u91cf\u6210\u5bf9\u7684\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"createBLEConnection")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u63a5\u53e3\u3002\u5b89\u5353\u5982\u679c\u591a\u6b21\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"createBLEConnection")," \u521b\u5efa\u8fde\u63a5\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u6301\u6709\u540c\u4e00\u8bbe\u5907\u591a\u4e2a\u8fde\u63a5\u7684\u5b9e\u4f8b\uff0c\u5bfc\u81f4\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u7684\u65f6\u5019\u5e76\u4e0d\u80fd\u771f\u6b63\u7684\u65ad\u5f00\u4e0e\u8bbe\u5907\u7684\u8fde\u63a5\u3002"),Object(l.b)("li",{parentName:"ul"},"\u84dd\u7259\u8fde\u63a5\u968f\u65f6\u53ef\u80fd\u65ad\u5f00\uff0c\u5efa\u8bae\u76d1\u542c Taro.onBLEConnectionStateChange \u56de\u8c03\u4e8b\u4ef6\uff0c\u5f53\u84dd\u7259\u8bbe\u5907\u65ad\u5f00\u65f6\u6309\u9700\u6267\u884c\u91cd\u8fde\u64cd\u4f5c"),Object(l.b)("li",{parentName:"ul"},"\u82e5\u5bf9\u672a\u8fde\u63a5\u7684\u8bbe\u5907\u6216\u5df2\u65ad\u5f00\u8fde\u63a5\u7684\u8bbe\u5907\u8c03\u7528\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u7684\u63a5\u53e3\uff0c\u4f1a\u8fd4\u56de 10006 \u9519\u8bef\uff0c\u5efa\u8bae\u8fdb\u884c\u91cd\u8fde\u64cd\u4f5c\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"promised"},"Promised"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"deviceId"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: BluetoothError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"timeout"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\uff0c\u4e0d\u586b\u8868\u793a\u4e0d\u4f1a\u8d85\u65f6")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.createBLEConnection({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.createBLEConnection"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);