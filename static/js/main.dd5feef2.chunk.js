(this["webpackJsonpshopify-frontend-challenge"]=this["webpackJsonpshopify-frontend-challenge"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),s=(n(11),n(1)),a=n.n(s),o=n(8),r=n.n(o),c=n(3),l=n(4),u=n(2),d=n(6),h=n(5),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("input",{type:"text",className:"search-bar",placeholder:"Enter a title...",onChange:function(t){e.searchResults(t.target.value).then((function(e){return e.json()})).then((function(t){e.props.updateResults(t)})).catch((function(e){console.log("".concat(e))}))}})}},{key:"searchResults",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="https://www.omdbapi.com/?apikey=".concat("17595268","&s=").concat(e,"&type=movie&page=").concat(t);return fetch(n)}}]),n}(a.a.Component);var j=function(e){var t,n,s=e.results;if(null===s||"False"===s.Response){var a="Incorrect IMDb ID."==s.Error?"Search results will appear here.":s.Error;n=Object(i.jsx)("div",{children:a})}else t=s.Search.map((function(t){var n=e.nominations.length>=5||e.nominations.includes(t),s="https://www.imdb.com/title/".concat(t.imdbID);return Object(i.jsxs)("li",{children:[Object(i.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:[t.Title," (",t.Year,")"]}),Object(i.jsx)("button",{disabled:n,onClick:function(){return e.Add(t)},children:"Nominate this movie"})]},t.imdbID)}));return Object(i.jsxs)("div",{id:"movie-results",className:"bg-light m-2 p-2 border border-dark rounded",children:[Object(i.jsx)("h2",{className:"p-1",children:"Search Results"}),n,Object(i.jsx)("ul",{children:t})]})};var b=function(e){var t,n,s=e.nominations;return 0===s.length?n=Object(i.jsx)("div",{children:"No nominations- add some by searching for movies!"}):(t=e.nominations.map((function(t){return Object(i.jsxs)("li",{children:[Object(i.jsxs)("span",{children:[t.Title," (",t.Year,")"]}),Object(i.jsx)("button",{onClick:function(){return e.Remove(t)},children:"Remove from nominations"})]},t.Title)})),5===s.length&&(n=Object(i.jsx)("div",{class:"alert alert-success",role:"alert",children:"Maximum number of nominations reached! Thank you!"}))),Object(i.jsxs)("div",{id:"nomination-list",className:"bg-light m-2 p-2 border border-dark rounded",children:[Object(i.jsxs)("h2",{className:"p-1",children:["Current Nominations (",s.length," / 5)"]}),n,Object(i.jsx)("ul",{children:t})]})},p=(n(15),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={results:{Response:"False",Error:"Incorrect IMDb ID."},nominations:[]},i.updateResults=i.updateResults.bind(Object(u.a)(i)),i.addNomination=i.addNomination.bind(Object(u.a)(i)),i.removeNomination=i.removeNomination.bind(Object(u.a)(i)),i}return Object(l.a)(n,[{key:"updateResults",value:function(e){this.setState({results:e})}},{key:"addNomination",value:function(e){var t=this.state.nominations.slice();t.push(e),this.setState({nominations:t})}},{key:"removeNomination",value:function(e){var t=this.state.nominations.indexOf(e),n=this.state.nominations.slice();n.splice(t,1),this.setState({nominations:n})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"p-2 m-2",children:[Object(i.jsx)("h1",{children:"OMDB Nominations"}),Object(i.jsx)(m,{updateResults:this.updateResults})]}),Object(i.jsxs)("div",{className:"container m-0 bg-light",children:[Object(i.jsx)(j,{results:this.state.results,nominations:this.state.nominations,Add:this.addNomination}),Object(i.jsx)(b,{nominations:this.state.nominations,Remove:this.removeNomination})]})]})}}]),n}(a.a.Component));r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dd5feef2.chunk.js.map