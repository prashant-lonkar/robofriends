(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,r,n){},12:function(e,r,n){"use strict";n.r(r);var t=n(0),c=n(1),s=n(4),a=n.n(s),o=n(3),i=(n(10),function(e){var r=e.searchTermChange;return Object(t.jsx)("input",{className:"searchbar",type:"search",placeholder:"Search your friend...",onChange:r})}),h=(n(11),function(e){var r=e.name,n=e.username;return Object(t.jsxs)("div",{className:"card hvr-hang",children:[Object(t.jsx)("img",{src:"https://robohash.org/".concat(r),alt:"robot-faces"}),Object(t.jsxs)("div",{children:[Object(t.jsx)("h2",{className:"name",children:r}),Object(t.jsx)("p",{className:"username",children:n}),Object(t.jsx)("button",{className:"hvr-bounce-to-right",children:"Know More"})]})]})}),d=function(e){var r=e.filteredFriends;return Object(t.jsx)("div",{className:"card-container",children:r.length?r.map((function(e){var r=e.id,n=e.name,c=e.username;return Object(t.jsx)(h,{name:n,username:c},r)})):Object(t.jsx)("p",{className:"no-data",children:"No friend to display"})})},j=function(e){var r=e.children;return Object(t.jsx)("div",{style:{overflowY:"scroll",height:"500px"},children:r})},l=function(){var e=Object(c.useState)([]),r=Object(o.a)(e,2),n=r[0],s=r[1],a=Object(c.useState)(""),h=Object(o.a)(a,2),l=h[0],u=h[1],b=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)})),Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{className:"friends hvr-underline-from-center",children:"Robofriends"}),Object(t.jsx)(i,{searchTermChange:function(e){u(e.target.value)}}),Object(t.jsx)(j,{children:Object(t.jsx)(d,{filteredFriends:b})})]})};a.a.render(Object(t.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f231d77a.chunk.js.map