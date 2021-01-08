(window.webpackJsonp=window.webpackJsonp||[]).push([[1535],{1600:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return o}));var b=n(2199),c=n(2200),a=(n(0),n(2201)),l=n(2205),r=n(2206),O={title:"Textarea",sidebar_label:"Textarea"},j={unversionedId:"components/forms/textarea",id:"components/forms/textarea",isDocsHomePage:!1,title:"Textarea",description:"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236",source:"@site/docs/components/forms/textarea.md",slug:"/components/forms/textarea",permalink:"/taro/docs/next/components/forms/textarea",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/textarea.md",version:"current",sidebar_label:"Textarea",sidebar:"components",previous:{title:"Switch",permalink:"/taro/docs/next/components/forms/switch"},next:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"TextareaProps",id:"textareaprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onFocusEventDetail",id:"onfocuseventdetail",children:[]},{value:"onBlurEventDetail",id:"onblureventdetail",children:[]},{value:"onLineChangeEventDetail",id:"onlinechangeeventdetail",children:[]},{value:"onInputEventDetail",id:"oninputeventdetail",children:[]},{value:"onConfirmEventDetail",id:"onconfirmeventdetail",children:[]},{value:"onKeyboardHeightChangeEventDetail",id:"onkeyboardheightchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:d};function o(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u591a\u884c\u8f93\u5165\u6846\u3002\u8be5\u7ec4\u4ef6\u662f\u539f\u751f\u7ec4\u4ef6\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u76f8\u5173\u9650\u5236"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextareaProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(a.b)(r.a,{value:"React",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</Text>\n        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>\n        <Text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</Text>\n        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>\n      </View>\n    )\n  }\n}\n"))),Object(a.b)(r.a,{value:"Vue",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>\u8f93\u5165\u533a\u57df\u9ad8\u5ea6\u81ea\u9002\u5e94\uff0c\u4e0d\u4f1a\u51fa\u73b0\u6eda\u52a8\u6761</text>\n    <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" auto-height="true" />\n    <text>\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u805a\u7126\u7684 textarea</text>\n    <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" auto-focusd="true" />\n  </view>\n</template>\n')))),Object(a.b)("h2",{id:"textareaprops"},"TextareaProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(a.b)("td",null,"\u8f93\u5165\u6846\u7684\u5185\u5bb9")),Object(a.b)("tr",null,Object(a.b)("td",null,"placeholder"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u8f93\u5165\u6846\u4e3a\u7a7a\u65f6\u5360\u4f4d\u7b26")),Object(a.b)("tr",null,Object(a.b)("td",null,"placeholderStyle"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f")),Object(a.b)("tr",null,Object(a.b)("td",null,"placeholderClass"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"textarea-placeholder"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6307\u5b9a placeholder \u7684\u6837\u5f0f\u7c7b")),Object(a.b)("tr",null,Object(a.b)("td",null,"disabled"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(a.b)("tr",null,Object(a.b)("td",null,"maxlength"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"140")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6700\u5927\u8f93\u5165\u957f\u5ea6\uff0c\u8bbe\u7f6e\u4e3a -1 \u7684\u65f6\u5019\u4e0d\u9650\u5236\u6700\u5927\u957f\u5ea6")),Object(a.b)("tr",null,Object(a.b)("td",null,"autoFocus"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u81ea\u52a8\u805a\u7126\uff0c\u62c9\u8d77\u952e\u76d8")),Object(a.b)("tr",null,Object(a.b)("td",null,"focus"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u83b7\u53d6\u7126\u70b9")),Object(a.b)("tr",null,Object(a.b)("td",null,"autoHeight"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u81ea\u52a8\u589e\u9ad8\uff0c\u8bbe\u7f6e autoHeight \u65f6\uff0cstyle.height\u4e0d\u751f\u6548")),Object(a.b)("tr",null,Object(a.b)("td",null,"fixed"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5982\u679c Textarea \u662f\u5728\u4e00\u4e2a ",Object(a.b)("code",null,"position:fixed")," \u7684\u533a\u57df\uff0c\u9700\u8981\u663e\u793a\u6307\u5b9a\u5c5e\u6027 fixed \u4e3a true")),Object(a.b)("tr",null,Object(a.b)("td",null,"cursorSpacing"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"0")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6307\u5b9a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d px \u3002\u53d6 Textarea \u8ddd\u79bb\u5e95\u90e8\u7684\u8ddd\u79bb\u548c cursorSpacing \u6307\u5b9a\u7684\u8ddd\u79bb\u7684\u6700\u5c0f\u503c\u4f5c\u4e3a\u5149\u6807\u4e0e\u952e\u76d8\u7684\u8ddd\u79bb")),Object(a.b)("tr",null,Object(a.b)("td",null,"cursor"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"-1")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6307\u5b9a focus \u65f6\u7684\u5149\u6807\u4f4d\u7f6e")),Object(a.b)("tr",null,Object(a.b)("td",null,"showConfirmBar"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"true")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u663e\u793a\u952e\u76d8\u4e0a\u65b9\u5e26\u6709\u201d\u5b8c\u6210\u201c\u6309\u94ae\u90a3\u4e00\u680f")),Object(a.b)("tr",null,Object(a.b)("td",null,"selectionStart"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"-1")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5149\u6807\u8d77\u59cb\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionEnd \u642d\u914d\u4f7f\u7528")),Object(a.b)("tr",null,Object(a.b)("td",null,"selectionEnd"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"-1")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5149\u6807\u7ed3\u675f\u4f4d\u7f6e\uff0c\u81ea\u52a8\u805a\u96c6\u65f6\u6709\u6548\uff0c\u9700\u4e0e selectionStart \u642d\u914d\u4f7f\u7528")),Object(a.b)("tr",null,Object(a.b)("td",null,"adjustPosition"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"true")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u952e\u76d8\u5f39\u8d77\u65f6\uff0c\u662f\u5426\u81ea\u52a8\u4e0a\u63a8\u9875\u9762")),Object(a.b)("tr",null,Object(a.b)("td",null,"holdKeyboard"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"focus \u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u65f6\u5019\u4e0d\u6536\u8d77\u952e\u76d8")),Object(a.b)("tr",null,Object(a.b)("td",null,"disableDefaultPadding"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u53bb\u6389 iOS \u4e0b\u7684\u9ed8\u8ba4\u5185\u8fb9\u8ddd")),Object(a.b)("tr",null,Object(a.b)("td",null,"onFocus"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onFocusEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u8f93\u5165\u6846\u805a\u7126\u65f6\u89e6\u53d1")),Object(a.b)("tr",null,Object(a.b)("td",null,"onBlur"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onBlurEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u8f93\u5165\u6846\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1")),Object(a.b)("tr",null,Object(a.b)("td",null,"onLineChange"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onLineChangeEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u8f93\u5165\u6846\u884c\u6570\u53d8\u5316\u65f6\u8c03\u7528\uff0cevent.detail = ","{height: 0, heightRpx: 0, lineCount: 0}")),Object(a.b)("tr",null,Object(a.b)("td",null,"onInput"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onInputEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u952e\u76d8\u8f93\u5165\u65f6\uff0c\u89e6\u53d1 input \u4e8b\u4ef6\uff0cevent.detail = ","{value, cursor, keyCode}",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("strong",null,"onInput \u5904\u7406\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5e76\u4e0d\u4f1a\u53cd\u6620\u5230 textarea \u4e0a"))),Object(a.b)("tr",null,Object(a.b)("td",null,"onConfirm"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onConfirmEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u70b9\u51fb\u5b8c\u6210\u65f6\uff0c \u89e6\u53d1 confirm \u4e8b\u4ef6\uff0cevent.detail = ","{value: value}")),Object(a.b)("tr",null,Object(a.b)("td",null,"onKeyboardHeightChange"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onKeyboardHeightChangeEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u6b64\u4e8b\u4ef6")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.value"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.placeholder"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderStyle"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.placeholderClass"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.disabled"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.maxlength"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.autoFocus"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.focus"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.autoHeight"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.fixed"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.cursorSpacing"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.cursor"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.showConfirmBar"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.selectionStart"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.selectionEnd"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.adjustPosition"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.holdKeyboard"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.disableDefaultPadding"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onFocus"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onBlur"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onLineChange"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onInput"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onConfirm"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"TextareaProps.onKeyboardHeightChange"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(a.b)("h3",{id:"onfocuseventdetail"},"onFocusEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u8f93\u5165\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"height"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")))),Object(a.b)("h3",{id:"onblureventdetail"},"onBlurEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u8f93\u5165\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"cursor"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")))),Object(a.b)("h3",{id:"onlinechangeeventdetail"},"onLineChangeEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"height"),Object(a.b)("td",null,Object(a.b)("code",null,"number"))),Object(a.b)("tr",null,Object(a.b)("td",null,"heightRpx"),Object(a.b)("td",null,Object(a.b)("code",null,"number"))),Object(a.b)("tr",null,Object(a.b)("td",null,"lineCount"),Object(a.b)("td",null,Object(a.b)("code",null,"number"))))),Object(a.b)("h3",{id:"oninputeventdetail"},"onInputEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u8f93\u5165\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"cursor"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u5149\u6807\u4f4d\u7f6e")),Object(a.b)("tr",null,Object(a.b)("td",null,"keyCode"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u952e\u503c")))),Object(a.b)("h3",{id:"onconfirmeventdetail"},"onConfirmEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u8f93\u5165\u503c")))),Object(a.b)("h3",{id:"onkeyboardheightchangeeventdetail"},"onKeyboardHeightChangeEventDetail"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"height"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u952e\u76d8\u9ad8\u5ea6")),Object(a.b)("tr",null,Object(a.b)("td",null,"duration"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Textarea"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}o.isMDXComponent=!0},2199:function(e,t,n){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var b in n)Object.prototype.hasOwnProperty.call(n,b)&&(e[b]=n[b])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return b}))},2200:function(e,t,n){"use strict";function b(e,t){if(null==e)return{};var n,b,c={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return b}))},2201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var b=n(0),c=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,c=function(e,t){if(null==e)return{};var n,b,c={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var j=c.a.createContext({}),d=function(e){var t=c.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},i=c.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,l=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),u=d(n),i=b,p=u["".concat(l,".").concat(i)]||u[i]||o[i]||a;return n?c.a.createElement(p,r(r({ref:t},j),{},{components:n})):c.a.createElement(p,r({ref:t},j))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,l=new Array(a);l[0]=i;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:b,l[1]=r;for(var j=2;j<a;j++)l[j]=n[j];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},2202:function(e,t,n){"use strict";function b(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(c&&(c+=" "),c+=t);return c}},2203:function(e,t,n){"use strict";var b=n(0),c=n(2204);t.a=function(){var e=Object(b.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2204:function(e,t,n){"use strict";var b=n(0),c=Object(b.createContext)(void 0);t.a=c},2205:function(e,t,n){"use strict";var b=n(0),c=n.n(b),a=n(2203),l=n(2202),r=n(51),O=n.n(r),j=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.children,u=e.defaultValue,o=e.values,i=e.groupId,p=e.className,s=Object(a.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,h=Object(b.useState)(u),N=h[0],f=h[1];if(null!=i){var y=m[i];null!=y&&y!==N&&o.some((function(e){return e.value===y}))&&f(y)}var x=function(e){f(e),null!=i&&g(i,e)},v=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},o.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(l.a)("tabs__item",O.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case j:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(b.cloneElement)(r.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},r.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},2206:function(e,t,n){"use strict";var b=n(2199),c=n(0),a=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return a.a.createElement("div",Object(b.a)({role:"tabpanel"},{hidden:n,className:c}),t)}}}]);