(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{22:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var n=r(2),i=r.n(n),s=r(12),c=r.n(s),a=(r(22),r.p+"static/media/logo.6ce24c58.svg"),o=r(13),l=r(14),d=r(17),u=r(16),m=r(0);var f=function(e){return Object(m.jsx)("div",{className:"flex w-full border border-white",children:e.children})};var j=function(e){return Object(m.jsx)("p",{onClick:e.onclick,className:"".concat(e.sortable?"cursor-pointer":""," text-").concat(e.fontSize||"sm"," text-blue-500 border-r border-l w-").concat(e.size,"/12 flex-grow border-white p-1 flex items-center justify-center"),children:e.info||e.children})};var h=function(e){return Object(m.jsx)("div",{className:"p-4 flex items-center justify-center border-r border-l border-white w-".concat(e.size,"/12"),children:Object(m.jsx)("img",{className:"h-12 w-12 rounded-full object-cover",src:e.img})})},b=r(15),p=r.n(b),x=function(e){return p.a.get("https://randomuser.me/api/?results="+e)},O=function(e,t,r){var n=r?1:-1;return"name"==t?e.sort((function(e,t){var r=e.name.last.toUpperCase(),i=t.name.last.toUpperCase(),s=0;return r>i?s=1:r<i&&(s=-1),s*n})):e.sort((function(e,t){var r=e.email.split("@")[0].toUpperCase(),i=t.email.split("@")[0].toUpperCase(),s=0;return r>i?s=1:r<i&&(s=-1),s*n})),e},g=function(e,t){return t="\u2640"==t?"female":"male",e.filter((function(e){return e.gender==t}))},v=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={results:{},orderDirection:{email:!0,name:!0},filter:null},e.storedData=[],e.getEmployees=function(t){x(t).then((function(t){e.setState({results:t.data.results}),e.storedData=e.state.results,console.log(e.storedData)})).catch((function(e){return console.log(e)}))},e.handleFilterBy=function(){e.state.filter||(e.state.filter="\u2642"),e.setState({results:g(e.storedData,e.state.filter),orderDirection:{email:e.state.orderDirection.email,name:e.state.orderDirection.name},filter:"\u2642"==e.state.filter?"\u2640":"\u2642"})},e.handleOrderBy=function(t){var r={};r="email"===t?{name:e.state.orderDirection.name,email:!e.state.orderDirection.email}:{name:!e.state.orderDirection.name,email:e.state.orderDirection.email},e.setState({results:O(e.state.results,t,e.state.orderDirection[t]),orderDirection:{email:r.email,name:r.name},filter:e.state.filter})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.getEmployees(20)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(f,{children:[Object(m.jsx)(j,{fontSize:"md",size:"1",info:"Avatar"}),Object(m.jsx)(j,{fontSize:"md",size:"3",sortable:"true",onclick:function(){return e.handleOrderBy("name")},children:"Name ".concat(this.state.orderDirection.name?"\u2191":"\u2193")}),Object(m.jsx)(j,{fontSize:"md",size:"4",sortable:"true",onclick:function(){return e.handleOrderBy("email")},children:"Email ".concat(this.state.orderDirection.email?"\u2191":"\u2193")}),Object(m.jsx)(j,{fontSize:"md",size:"2",info:"Phone"}),Object(m.jsx)(j,{fontSize:"md",size:"2",sortable:"true",info:"Gender ".concat(this.state.filter?"".concat(this.state.filter):"--"),onclick:this.handleFilterBy})]}),this.state.results.length>0?this.state.results.map((function(e){return Object(m.jsxs)(f,{children:[Object(m.jsx)(h,{size:"1",img:e.picture.thumbnail}),Object(m.jsx)(j,{size:"3",info:"".concat(e.name.first," ").concat(e.name.last)}),Object(m.jsx)(j,{size:"4",info:e.email}),Object(m.jsx)(j,{size:"2",info:e.phone}),Object(m.jsx)(j,{size:"2",info:e.gender})]})})):Object(m.jsx)("p",{className:"text-red-400",children:"nothing..."})]})}}]),r}(i.a.Component);r(42);var y=function(){return Object(m.jsxs)("div",{className:"App flex flex-col items-center",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(m.jsx)("p",{className:"text-2xl font-mono",children:"React Directory"})]}),Object(m.jsx)("p",{className:"text-2xl font-mono",children:"\u2764\ufe0f Nick Graffis"})]}),Object(m.jsx)("section",{className:"App-body w-4/6  py-12",children:Object(m.jsx)(v,{})})]})},D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),D()}},[[43,1,2]]]);
//# sourceMappingURL=main.14a04b60.chunk.js.map