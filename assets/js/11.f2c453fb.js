(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{265:function(t,n,s){},413:function(t,n,s){"use strict";var r=s(7),e=s(140)(!0);r(r.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),s(96)("includes")},414:function(t,n,s){"use strict";var r=s(7),e=s(147);r(r.P+r.F*s(148)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},415:function(t,n,s){"use strict";var r=s(265);s.n(r).a},418:function(t,n,s){"use strict";s.r(n);s(413),s(414),s(142),s(65);var r={props:{columns:{default:{name:"Plugin",desc:"Description",date:"Creation"},type:Object},tag:{default:null,type:String}},data:function(){return{sortKey:"date",sortAsc:!1}},computed:{pluginsPages:function(){var t=this;return this.$site.pages.filter(function(n){return n.frontmatter.plugin&&t.isTagged(n)})},sortedPages:function(){var t=this,n=this.pluginsPages.sort(function(n,s){return(n=n.frontmatter.plugin[t.sortKey])<(s=s.frontmatter.plugin[t.sortKey])?-1:n>s?1:0});return this.sortAsc?n:n.reverse()}},methods:{sortBy:function(t){this.sortKey==t?this.sortAsc=!this.sortAsc:(this.sortKey=t,this.sortAsc=!0)},isTagged:function(t){return!this.tag||t.frontmatter.plugin.tags&&t.frontmatter.plugin.tags.includes(this.tag)}}},e=(s(415),s(47)),i=Object(e.a)(r,function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.sortedPages.length?s("table",{staticClass:"plugin-list"},[s("tr",t._l(t.columns,function(n,r){return s("th",{class:{active:t.sortKey==r},on:{click:function(n){t.sortBy(r)}}},[t._v("\n        "+t._s(n)+"\n        "),s("span",{staticClass:"arrow",class:t.sortKey==r&&t.sortAsc?"asc":"dsc"})])}),0),t._v(" "),t._l(t.sortedPages,function(n){return s("tr",t._l(t.columns,function(r,e){return s("td",["name"==e?s("router-link",{attrs:{to:n.path}},[t._v("\n        "+t._s(n.frontmatter.plugin[e])+"\n      ")]):[t._v("\n      "+t._s(n.frontmatter.plugin[e])+"\n      ")]],2)}),0)})],2):s("p",[t._v("No plugin found")])},[],!1,null,"977e6532",null);n.default=i.exports}}]);