(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),o=t(14),u=t.n(o),i=(t(20),t(3)),s=function(e){var n=e.person,t=e.deleteButton;return Object(c.jsxs)("div",{children:[n.name," ",n.number," ",Object(c.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]})},d=function(e){var n=e.persons,t=e.deleteButton;return Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)(s,{person:e,deleteButton:t},e.name)}))})},l=function(e){var n=e.search,t=e.handleSearch;return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:n,onChange:t})]})},h=function(e){var n=e.addPerson,t=e.newName,r=e.handleNewName,a=e.newNumber,o=e.handleNewNumber;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:r})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:a,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},f=t(4),j=t.n(f),b="/api/persons",m=function(){return j.a.get(b).then((function(e){return e.data}))},O=function(e){return j.a.post(b,e).then((function(e){return e.data}))},v=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return j.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},x=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),s=u[0],f=u[1],j=Object(r.useState)(""),b=Object(i.a)(j,2),x=b[0],g=b[1],N=Object(r.useState)(""),C=Object(i.a)(N,2),S=C[0],k=C[1],L=Object(r.useState)(null),y=Object(i.a)(L,2),B=y[0],P=y[1];Object(r.useEffect)((function(){m().then((function(e){a(e)}))}),[]);var D=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(w,{message:B}),Object(c.jsx)(l,{search:S,handleSearch:function(e){k(e.target.value)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(h,{addPerson:function(e){e.preventDefault();var n={name:s,number:x};if(t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length>0){var c=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));window.confirm("".concat(c.name," is already added to the phonebook, replace the old number with a new one?"))&&p(c.id,n).then((function(e){a(t.map((function(n){return n.id!==c.id?n:e}))),P("Changed number for ".concat(e.name))})).catch((function(e){P("Information of ".concat(c.name," has already been removed from the server"))}))}else O(n).then((function(e){a(t.concat(e)),P("Added ".concat(e.name))})).catch((function(e){console.log(e.response.data),P("".concat(e.response.data))}));setTimeout((function(){P(null)}),5e3),f(""),g("")},newName:s,handleNewName:function(e){f(e.target.value)},newNumber:x,handleNewNumber:function(e){g(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(d,{persons:D,deleteButton:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&v(e).then((function(n){console.log(n),a(t.filter((function(n){return n.id!==e})))})).catch((function(c){P("the person ".concat(n.name," was already deleted from the server")),a(t.filter((function(n){return n.id!==e})))})),setTimeout((function(){P(null)}),5e3)}})]})};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.86e84a90.chunk.js.map