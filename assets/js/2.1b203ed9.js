(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,n){"use strict";var i=n(7),r=n(51)(3);i(i.P+i.F*!n(30)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},247:function(t,e,n){"use strict";var i=n(11),r=n(48),s=n(21),a=n(66),o=n(137),l=n(138),u=Math.max,c=Math.min,h=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(139)("replace",2,function(t,e,n,d){return[function(i,r){var s=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var h=i(t),f=String(this),p="function"==typeof e;p||(e=String(e));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var b=[];;){var _=l(h,f);if(null===_)break;if(b.push(_),!v)break;""===String(_[0])&&(h.lastIndex=o(f,s(h.lastIndex),m))}for(var k,x="",$=0,C=0;C<b.length;C++){_=b[C];for(var w=String(_[0]),y=u(c(a(_.index),f.length),0),S=[],L=1;L<_.length;L++)S.push(void 0===(k=_[L])?k:String(k));var O=_.groups;if(p){var I=[w].concat(S,y,f);void 0!==O&&I.push(O);var E=String(e.apply(void 0,I))}else E=g(w,f,y,S,O,e);y>=$&&(x+=f.slice($,y)+E,$=y+w.length)}return x+f.slice($)}];function g(t,e,i,s,a,o){var l=i+t.length,u=s.length,c=p;return void 0!==a&&(a=r(a),c=f),n.call(o,c,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(l);case"<":o=a[r.slice(1,-1)];break;default:var c=+r;if(0===c)return n;if(c>u){var f=h(c/10);return 0===f?n:f<=u?void 0===s[f-1]?r.charAt(1):s[f-1]+r.charAt(1):n}o=s[c-1]}return void 0===o?"":o})}})},249:function(t,e,n){},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){},258:function(t,e,n){},259:function(t,e,n){},260:function(t,e,n){},261:function(t,e,n){},267:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},269:function(t,e,n){"use strict";n(270)("link",function(t){return function(e){return t(this,"a","href",e)}})},270:function(t,e,n){var i=n(7),r=n(28),s=n(29),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},271:function(t,e,n){"use strict";var i=n(249);n.n(i).a},272:function(t,e,n){t.exports=n(273)},273:function(t,e,n){n(274),t.exports=n(0).parseInt},274:function(t,e,n){var i=n(1),r=n(275);i(i.G+i.F*(parseInt!=r),{parseInt:r})},275:function(t,e,n){var i=n(3).parseInt,r=n(276).trim,s=n(267),a=/^[-+]?0[xX]/;t.exports=8!==i(s+"08")||22!==i(s+"0x16")?function(t,e){var n=r(String(t),3);return i(n,e>>>0||(a.test(n)?16:10))}:i},276:function(t,e,n){var i=n(1),r=n(68),s=n(17),a=n(267),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),l=r[t]=o?e(h):a[t];n&&(r[n]=l),i(i.P+i.F*o,"String",r)},h=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},277:function(t,e,n){"use strict";var i=n(250);n.n(i).a},278:function(t,e,n){"use strict";var i=n(7),r=n(140)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(30)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},279:function(t,e,n){"use strict";n(280)("trim",function(t){return function(){return t(this,3)}})},280:function(t,e,n){var i=n(7),r=n(29),s=n(28),a=n(281),o="["+a+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),l=r[t]=o?e(h):a[t];n&&(r[n]=l),i(i.P+i.F*o,"String",r)},h=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},281:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},282:function(t,e,n){"use strict";var i=n(251);n.n(i).a},283:function(t,e,n){var i=n(5),r=n(284),s=n(31).f,a=n(288).f,o=n(141),l=n(149),u=i.RegExp,c=u,h=u.prototype,f=/a/g,p=/a/g,d=new u(f)!==f;if(n(22)&&(!d||n(28)(function(){return p[n(2)("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),s=void 0===e;return!n&&i&&t.constructor===u&&s?t:r(d?new c(i&&!s?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&s?l.call(t):e),n?this:h,u)};for(var g=function(t){t in u||s(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},v=a(c),m=0;v.length>m;)g(v[m++]);h.constructor=u,u.prototype=h,n(32)(i,"RegExp",u)}n(146)("RegExp")},284:function(t,e,n){var i=n(16),r=n(285).set;t.exports=function(t,e,n){var s,a=e.constructor;return a!==n&&"function"==typeof a&&(s=a.prototype)!==n.prototype&&i(s)&&r&&r(t,s),t}},285:function(t,e,n){var i=n(16),r=n(11),s=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(33)(Function.call,n(286).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},286:function(t,e,n){var i=n(287),r=n(97),s=n(67),a=n(144),o=n(50),l=n(143),u=Object.getOwnPropertyDescriptor;e.f=n(22)?u:function(t,e){if(t=s(t),e=a(e,!0),l)try{return u(t,e)}catch(t){}if(o(t,e))return r(!i.f.call(t,e),t[e])}},287:function(t,e){e.f={}.propertyIsEnumerable},288:function(t,e,n){var i=n(145),r=n(98).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},289:function(t,e,n){"use strict";var i=n(252);n.n(i).a},290:function(t,e,n){"use strict";var i=n(253);n.n(i).a},291:function(t,e,n){"use strict";var i=n(254);n.n(i).a},292:function(t,e,n){"use strict";var i=n(255);n.n(i).a},293:function(t,e,n){"use strict";var i=n(256);n.n(i).a},294:function(t,e,n){"use strict";var i=n(257);n.n(i).a},295:function(t,e,n){"use strict";var i=n(258);n.n(i).a},296:function(t,e,n){"use strict";var i=n(259);n.n(i).a},297:function(t,e,n){"use strict";var i=n(260);n.n(i).a},298:function(t,e,n){"use strict";var i=n(261);n.n(i).a},417:function(t,e,n){"use strict";n.r(e);var i=n(44),r=n.n(i);n(246),n(269);const s=/#.*$/,a=/\.(md|html)$/,o=/\/$/,l=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(s,"").replace(a,"")}function c(t){return l.test(t)}function h(t){if(c(t))return t;const e=t.match(s),n=e?e[0]:"",i=u(t);return o.test(i)?t:i+".html"+n}function f(t,e){const n=t.hash,i=function(t){const e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&u(t.path)===u(e)}function p(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var m={props:{item:{required:!0}},computed:{link:function(){return h(this.item.link)},exact:function(){var t=this;return this.$site.locales?r()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:c,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},b=n(47),_=Object(b.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,k={components:{NavLink:_},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},x=(n(271),Object(b.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),$=n(272),C=n.n($),w=(n(277),Object(b.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),y=(n(136),n(65),n(116)),S=n.n(y),L=n(15),O=n.n(L),I=(n(278),n(279),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var a=e[s];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=5);o++){var l=a.headers[o];i(l)&&r.push(O()({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=S()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),E=(n(282),Object(b.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),T=(n(283),n(61)),N=(n(247),n(49),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),P=(n(289),Object(b.a)(N,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),j={components:{NavLink:_,DropdownTransition:P},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},A=(n(290),{components:{NavLink:_,DropdownLink:Object(b.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&r()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:r()(e).map(function(r){var a,o=e[r],l=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some(function(t){return t.path===a})||(a=r)),{text:l,link:a}})};return[].concat(Object(T.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return O()(v(t),{items:(t.items||[]).map(v)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),D=(n(291),Object(b.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function U(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var M={components:{SidebarButton:w,NavLinks:D,SearchBox:E,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=C()(U(this.$el,"paddingLeft"))+C()(U(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},R=(n(292),Object(b.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);n(34),n(52);function H(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(T.a)(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var W={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,H(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?p(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,H(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,l=t.docsRepo,c=void 0===l?e:l,h=u(this.$page.path);return o.test(h)?h+="README.md":h+=".md",c&&n?this.createEditLink(e,c,r,a,h):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(l.test(e)?e:t).replace(o,"")+"/".concat(i)+(n?"/"+n.replace(o,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(l.test(e)?e:"https://github.com/".concat(e)).replace(o,"")+"/edit/".concat(i)+(n?"/"+n.replace(o,""):"")+r}}},G=(n(293),Object(b.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);function B(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function q(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var a=f(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[B(t,n+"#"+e.slug,e.title,a),q(t,e.children,n,i,r,s+1)])}))}var F={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,r=n.$site,a=n.$route,o=e.props.item,l=f(a,o.path),u="auto"===o.type?l||o.children.some(function(t){return f(a,o.basePath+"#"+t.slug)}):l,c=B(t,o.path,o.title||o.path,u),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:r.themeConfig.sidebarDepth,p=null==h?1:h,d=!!r.themeConfig.displayAllHeaders;return"auto"===o.type?[c,q(t,o.children,o.basePath,a,p)]:(u||d)&&o.headers&&!s.test(o.path)?[c,q(t,g(o.headers),o.path,a,p)]:c}},z=(n(294),Object(b.a)(F,void 0,void 0,!1,null,null,null).exports),V={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:z,DropdownTransition:P}};n(295);var X={components:{SidebarGroup:Object(b.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:z,NavLinks:D},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return f(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return f(this.$route,t.regularPath)}}},J=(n(296),{components:{Home:x,Page:G,Sidebar:Object(b.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:R},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return d(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),Y=(n(297),n(298),Object(b.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=Y.exports}}]);