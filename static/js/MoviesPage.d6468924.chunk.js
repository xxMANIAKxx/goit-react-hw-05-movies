"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{990:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(683),a=r(861),u=r(152),c=r(757),s=r.n(c),o="MoviesPage_searchbar__h5+Hv",i="MoviesPage_searchForm__MtlmP",p="MoviesPage_searchFormButton__wppho",f="MoviesPage_SearchFormInput__weghc",h=r(791),l=r(207),v=r(931),m=r(523),d=r(686),g=r.n(d),w=r(184),x=function(){var e=(0,h.useState)(""),t=(0,u.Z)(e,2),r=t[0],c=t[1],d=(0,h.useState)([]),x=(0,u.Z)(d,2),y=x[0],_=x[1],k=(0,v.TH)(),b=(0,v.k6)();(0,h.useEffect)((function(){var e=new URLSearchParams(k.search).get("query");if(e){var t=function(){var t=(0,a.Z)(s().mark((function t(){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.z1)(e);case 2:r=t.sent,n=r.results,_(n),c(e),console.log(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[k.search]);var Z=function(){var e=(0,a.Z)(s().mark((function e(t){var a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r.trim()){e.next=10;break}return e.next=4,(0,l.z1)(r);case 4:a=e.sent,u=a.results,_(u),c(""),0===u.length&&g().Notify.warning("No movies found! Please change your request and try again"),b.push((0,n.Z)((0,n.Z)({},k),{},{search:"query=".concat(r)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("header",{className:o,children:(0,w.jsxs)("form",{className:i,onSubmit:Z,children:[(0,w.jsx)("input",{onChange:function(e){return c(e.target.value)},className:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r}),(0,w.jsx)("button",{type:"submit",className:p,children:"search"})]})}),y.length>0&&y.map((function(e){var t=e.id,r=e.title;e.poster_path;return(0,w.jsx)("ul",{children:(0,w.jsx)("li",{children:(0,w.jsx)(m.rU,{to:{pathname:"/movies/".concat("".concat(t)),state:{from:{location:k}}},children:(0,w.jsx)("p",{children:r})})},t)})}))]})}},207:function(e,t,r){r.d(t,{Jh:function(){return l},M1:function(){return h},TP:function(){return p},wr:function(){return f},yA:function(){return o},z1:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(980);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="57e0b96b05e3b80d867b27d0f314d0f1",o="https://image.tmdb.org/t/p/w500",i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,c.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"$?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,c.Z.get(t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits$?api_key={apiKey}&language=en-US"),e.next=3,c.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=MoviesPage.d6468924.chunk.js.map