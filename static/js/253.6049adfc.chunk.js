"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{47:function(e,t,n){n.d(t,{e:function(){return i}});n(791);var r,a=n(731),c=n(168),u=n(202).default.ul(r||(r=(0,c.Z)(["\n  margin-top: ","px;\n  a {\n    display: block;\n    padding-top: ","px;\n    padding-bottom: ","px;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[1]}),(function(e){return e.theme.space[1]}),(function(e){return e.theme.colors.accent})),o=n(184),i=function(e){var t=e.movies,n=e.isMoviePage,r=void 0!==n&&n,c=e.previousLocation;return(0,o.jsx)(u,{children:r?t.map((function(e){var t=e.id,n=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"".concat(t),state:{from:"".concat(c)},children:n})},t)})):t.map((function(e){var t=e.id,n=e.title;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"movies/".concat(t),state:{from:"".concat(c)},children:n})},t)}))})}},524:function(e,t,n){n.d(t,{$h:function(){return r},S4:function(){return o},SR:function(){return s},_n:function(){return a},ax:function(){return f},js:function(){return p},mw:function(){return i},vu:function(){return u},wi:function(){return c}});var r="1351fe1fee33f4dc7ca86c3a4fb4a61c",a="https://api.themoviedb.org/3/",c="trending/movie/day",u="search/movie",o="movie/",i="/credits",s="/reviews",p="https://image.tmdb.org/t/p/w500",f="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},253:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r,a,c=n(982),u=n(861),o=n(885),i=n(687),s=n.n(i),p=n(791),f=n(731),l=n(689),h=n(933),v=n(168),d=n(202),m=d.default.main(r||(r=(0,v.Z)(["\n  padding: ","px;\n"])),(function(e){return e.theme.space[4]})),g=n(47),x=d.default.form(a||(a=(0,v.Z)(["\n  label {\n    display: flex;\n    flex-direction: column;\n  }\n\n  input {\n    margin-top: ","px;\n    padding: ","px;\n    border-radius: 4px;\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[2]})),y=n(184),Z=function(e){var t=e.onSubmit;return(0,y.jsx)(x,{onSubmit:t,children:(0,y.jsxs)("label",{children:["Search",(0,y.jsx)("input",{name:"query",type:"text",placeholder:"Please, enter keyword for searching"})]})})},w=function(){var e=(0,p.useState)(),t=(0,o.Z)(e,2),n=t[0],r=t[1],a=(0,f.lr)(),i=(0,o.Z)(a,2),v=i[0],d=i[1],x=(0,l.TH)(),w=v.get("query");(0,p.useEffect)((function(){function e(){return e=(0,u.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.E.searchByKeyWord(t);case 3:n=e.sent,r((0,c.Z)(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}w&&function(t){e.apply(this,arguments)}(w)}),[w]);return(0,y.jsxs)(m,{children:[(0,y.jsx)(Z,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value.trim();t?(d({query:t}),e.target.reset()):alert("query field cannot be empty")}}),0===n.length&&w&&(0,y.jsx)("p",{children:"There are no movies found. Please, try again"}),n.length>0&&(0,y.jsx)(g.e,{movies:n,isMoviePage:!0,previousLocation:x.pathname+x.search})]})}},933:function(e,t,n){n.d(t,{E:function(){return d}});var r=n(683),a=n(861),c=n(671),u=n(144),o=n(274),i=n(359),s=n(687),p=n.n(s),f=n(44),l=n(524),h=(0,i.Z)("params"),v=function(){function e(){(0,c.Z)(this,e),Object.defineProperty(this,h,{writable:!0,value:{api_key:l.$h,language:"en-US"}})}return(0,u.Z)(e,[{key:"getTrendingMovies",value:function(){var e=(0,a.Z)(p().mark((function e(){var t,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l._n).concat(l.wi),e.prev=1,e.next=4,f.ZP.get(t,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,h)[h]),{},{page:1})});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"searchByKeyWord",value:function(){var e=(0,a.Z)(p().mark((function e(t){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l._n).concat(l.vu),e.prev=1,e.next=4,f.ZP.get(n,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,h)[h]),{},{query:t,page:1})});case 4:return a=e.sent,e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var e=(0,a.Z)(p().mark((function e(t){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l._n).concat(l.S4).concat(t),e.prev=1,e.next=4,f.ZP.get(n,{params:(0,r.Z)({},(0,o.Z)(this,h)[h])});case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCreditsById",value:function(){var e=(0,a.Z)(p().mark((function e(t){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l._n).concat(l.S4).concat(t).concat(l.mw),e.prev=1,e.next=4,f.ZP.get(n,{params:(0,r.Z)({},(0,o.Z)(this,h)[h])});case 4:return a=e.sent,e.abrupt("return",a.data.cast);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var e=(0,a.Z)(p().mark((function e(t){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l._n).concat(l.S4).concat(t).concat(l.SR),e.prev=1,e.next=4,f.ZP.get(n,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,h)[h]),{},{page:1})});case 4:return a=e.sent,e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),d=new v}}]);
//# sourceMappingURL=253.6049adfc.chunk.js.map