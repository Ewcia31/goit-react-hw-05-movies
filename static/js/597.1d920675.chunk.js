"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,e,c){c.r(e);var n=c(439),a=c(791),i=c(689),r=c(634),o=c(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,a.useState)([]),c=(0,n.Z)(e,2),s=c[0],h=c[1],l=(0,a.useState)(!1),p=(0,n.Z)(l,2),m=p[0],u=p[1];return(0,a.useEffect)((function(){u(!0),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=239c049de0b29663e150db4d68e3ffb7")).then((function(t){return t.json()})).then((function(t){h(t.cast),u(!1)})).catch((function(t){console.error("Error fetching cast:",t),u(!1)}))}),[t]),m?(0,o.jsx)(r.Z,{}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Cast"}),(0,o.jsx)("ul",{children:s.map((function(t){return(0,o.jsxs)("li",{style:{listStyleType:"none",marginBottom:"10px"},children:[(0,o.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://via.placeholder.com/200x300?text=No+Image",alt:t.name,style:{width:"100px",height:"150px",marginRight:"10px",verticalAlign:"middle"}}),t.name," as ",t.character]},t.cast_id)}))})]})}}}]);
//# sourceMappingURL=597.1d920675.chunk.js.map