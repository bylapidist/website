(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=f;var s=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var u=0,c=s.length;u<c;u++){var f=s[u];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;p.has(l)?o=!1:(p.add(l),r[f]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}var d=o.default();function h(t){var e=t.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(t){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),a=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),f=n("yXPU");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}var s=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=y,e.default=void 0;var p=s(n("q1tI")),d=n("g/15");function h(t){return m.apply(this,arguments)}function m(){return(m=f(r.mark((function t(e){var n,a,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,a=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,a);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var v=function(t){i(n,t);var e=l(n);function n(){return a(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,a=t.__N_SSG,o=t.__N_SSP;return(p.default.createElement(n,Object.assign({},r,a||o?{}:{url:y(e)})))}}]),n}(p.default.Component);function y(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",a=n||e;return t.push(r,a)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",a=n||e;return t.replace(r,a)}}}e.default=v,v.origGetInitialProps=h,v.getInitialProps=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),f=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var s=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(f(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){i(f,u);var c=l(f);function f(t){var o;return r(this,f),o=c.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(s.Component))}},cha2:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),u=n("foSv"),c=n("q1tI"),f=n.n(c),l=n("8Bbg"),s=n.n(l),p=n("8Kt/"),d=n.n(p),h=n("LFw+"),m=n.n(h),v=n("mUOf"),y=n.n(v),g=f.a.createElement;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var b=function(t){Object(o.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return g(f.a.Fragment,null,g(d.a,null,g("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-48222807-1"}),g("script",{dangerouslySetInnerHTML:{__html:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        gtag('config', 'UA-48222807-1');\n                    "}}),g("title",null,"Brett Dorrans: Software Engineer in Glasgow, Scotland"),g("meta",{name:"description",content:"Brett Dorrans: Senior Software Engineer in Glasgow, Scotland"}),g("meta",{property:"og:title",content:"Brett Dorrans"}),g("meta",{property:"og:description",content:"Senior Software Engineer in Glasgow, Scotland"}),g("meta",{property:"og:type",content:"website"}),g("meta",{property:"og:url",content:"https://lapidist.net/"}),g("meta",{property:"og:image",content:"https://lapidist.net/logo.png"}),g("meta",{name:"theme-color",content:"#ffffff"}),g("link",{rel:"apple-touch-icon",sizes:"180x180",href:"apple-touch-icon.png"}),g("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"favicon-32x32.png"}),g("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"favicon-16x16.png"}),g("link",{rel:"manifest",href:"manifest.json"}),g("link",{rel:"mask-icon",href:"safari-pinned-tab.svg",color:"#5bbad5"}),g("link",{rel:"canonical",href:"https://lapidist.net/"})),g(m.a,null,g(y.a,{padding:"40px"},g(e,n))))}}]),n}(s.a)},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("q1tI"));e.AmpStateContext=a.createContext({})},mUOf:function(t,e,n){"use strict";var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o,i=a(n("vOnD")),u=n("Qidb"),c=n("LFw+"),f=i.default.div(o||(o=r(["\n    ",";\n    ",";\n\n    max-width: ",";\n    padding: ",";\n\n    @media "," {\n        padding: ",";\n    }\n"],["\n    ",";\n    ",";\n\n    max-width: ",";\n    padding: ",";\n\n    @media "," {\n        padding: ",";\n    }\n"])),u.relative(),u.centeredHorizontal(),(function(t){return t.maxWidth||c.defaultTheme.breakpoints.laptop.l}),(function(t){return t.padding||c.defaultTheme.sizing.m}),u.breakpoint("tablet-large"),(function(t){return t.padding||c.defaultTheme.sizing.s}));e.default=f}},[[0,0,1,2,3]]]);