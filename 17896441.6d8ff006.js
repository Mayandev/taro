(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{2194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n(20),c=n(2208),u=n(2207);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(u.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(u.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},l=n(2212);var d=function(){Object(o.default)().siteConfig.title;var e,t=Object(l.useActivePlugin)({failfast:!0}).pluginId,n=(Object(l.useActiveVersion)(t),Object(l.useDocVersionSuggestions)(t)),a=n.latestDocSuggestion,i=n.latestVersionSuggestion;return i?(null!=a||(e=i).docs.find((function(t){return t.id===e.mainDocId})),r.a.createElement("div",null)):r.a.createElement(r.a.Fragment,null)},f=n(2236),m=n(2202),v=n(269),g=n.n(v);t.default=function(e){var t,n=Object(o.default)().siteConfig,a=n.url,u=n.title,v=n.titleDelimiter,p=e.content,h=p.metadata,b=h.description,E=h.title,D=h.permalink,w=h.editUrl,O=h.lastUpdatedAt,A=h.lastUpdatedBy,y=p.frontMatter,j=y.image,N=y.keywords,_=y.hide_title,V=y.hide_table_of_contents,L=Object(l.useActivePlugin)({failfast:!0}).pluginId,k=Object(l.useVersions)(L),P=Object(l.useActiveVersion)(L),x=k.length>1,C=E?E+" "+v+" "+u:u,S=Object(c.a)(j,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,C),r.a.createElement("meta",{property:"og:title",content:C}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:S}),j&&r.a.createElement("meta",{property:"twitter:image",content:S}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),D&&r.a.createElement("meta",{property:"og:url",content:a+D}),D&&r.a.createElement("link",{rel:"canonical",href:a+D})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(m.a)("col",(t={},t[g.a.docItemCol]=!V,t))},r.a.createElement(d,null),r.a.createElement("div",{className:g.a.docItemContainer},r.a.createElement("article",null,x&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",P.label)),!_&&r.a.createElement("header",null,r.a.createElement("h1",{className:g.a.docTitle},E)),r.a.createElement("div",{className:"markdown"},r.a.createElement(p,null))),(w||O||A)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},w&&r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(O||A)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",O&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*O).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*O).toLocaleDateString()),A&&" "),A&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,A)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:h})))),!V&&p.rightToc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(f.a,{headings:p.rightToc}))))}},2202:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},2207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(7),o=n(2210),c=n(8),u=Object(a.createContext)({collectLink:function(){}}),s=n(2208),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,m=e.to,v=e.href,g=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),E=Object(s.b)().withBaseUrl,D=Object(a.useContext)(u),w=m||v,O=Object(o.a)(w),A=null==w?void 0:w.replace("pathname://",""),y=void 0!==A?function(e){return e.startsWith("/")}(n=A)?E(n):n:void 0,j=Object(a.useRef)(!1),N=f?i.e:i.c,_=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!_&&O&&window.docusaurus.prefetch(y),function(){_&&d&&d.disconnect()}}),[y,_,O]);var V=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,L=!y||!O||V;return y&&O&&!V&&!h&&D.collectLink(y),L?r.a.createElement("a",Object.assign({href:y},w&&!O&&{target:"_blank",rel:"noopener noreferrer"},b)):r.a.createElement(N,Object.assign({},b,{onMouseEnter:function(){j.current||(window.docusaurus.preload(y),j.current=!0)},innerRef:function(e){var t,n;_&&e&&O&&(t=e,n=function(){window.docusaurus.prefetch(y)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:y||""},f&&{isActive:p,activeClassName:g}))}},2208:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(20),r=n(2210);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2210:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},2211:function(e,t,n){"use strict";n.r(t);var a=n(7);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"generatePath",(function(){return a.l})),n.d(t,"matchPath",(function(){return a.m})),n.d(t,"useHistory",(function(){return a.n})),n.d(t,"useLocation",(function(){return a.o})),n.d(t,"useParams",(function(){return a.p})),n.d(t,"useRouteMatch",(function(){return a.q})),n.d(t,"withRouter",(function(){return a.r})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},2212:function(e,t,n){try{e.exports=n(2227)}catch(a){e.exports={}}},2227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(2211),r=n(2228),i=n(2229);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},2228:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(20);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},2229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(2211);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},2236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2202);var o=function(e,t,n){var r=Object(a.useState)(void 0),i=r[0],o=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,c=!1,u=document.getElementsByClassName(e);r<u.length&&!c;){var s=u[r],l=s.href,d=decodeURIComponent(l.substring(l.indexOf("#")+1));a.id===d&&(i&&i.classList.remove(t),s.classList.add(t),o(s),c=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c=n(54),u=n.n(c),s="table-of-contents__link";function l(e){var t=e.headings,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(l,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return o(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(i.a)(u.a.tableOfContents,"thin-scrollbar")},r.a.createElement(l,{headings:t}))}}}]);