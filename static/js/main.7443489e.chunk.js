(this["webpackJsonphomework7-phonebook"]=this["webpackJsonphomework7-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={label:"Search_label__2uFD5",input:"Search_input__2VQ5k"}},17:function(t,e,n){t.exports={item:"ContactItem_item__RmaAn",btn:"ContactItem_btn__PcArD"}},28:function(t,e,n){t.exports={list:"ContactList_list__1bIRP"}},5:function(t,e,n){t.exports={container:"Form_container__2xqhl",label:"Form_label__17I_M",input:"Form_input__sf1H1",btn:"Form_btn__4fV57"}},59:function(t,e,n){"use strict";n.r(e);var c,o=n(1),a=n(0),r=n.n(a),i=n(8),u=n.n(i),s=n(10),b=n(18),l=n(61),j=n(5),h=n.n(j),d=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],i=c[1],u=Object(a.useState)(""),s=Object(b.a)(u,2),j=s[0],d=s[1],f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":d(c);break;default:return}};return Object(o.jsxs)("form",{className:h.a.container,onSubmit:function(t){t.preventDefault(),e({id:Object(l.a)(),name:r,number:j}),i(""),d("")},children:[Object(o.jsxs)("label",{className:h.a.label,children:["Name",Object(o.jsx)("input",{className:h.a.input,required:!0,type:"text",name:"name",value:r,onChange:f})]}),Object(o.jsxs)("label",{className:h.a.label,children:["Number",Object(o.jsx)("input",{className:h.a.input,required:!0,type:"tel",name:"number",value:j,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",placeholder:"000-00-00",onChange:f})]}),Object(o.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})},f=n(16),O=n.n(f),m=function(t){var e=t.onChange,n=t.filter;return Object(o.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(o.jsx)("input",{className:O.a.input,type:"text",name:"filter",value:n,onChange:function(t){var n=t.currentTarget.value;e(n)}})]})},p=function(t){var e=t.title,n=t.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e}),n]})},x=n(17),C=n.n(x),_=function(t){var e=t.contact,n=t.handleClick;return Object(o.jsxs)("li",{className:C.a.item,children:[Object(o.jsxs)("div",{children:[e.name,": ",e.number]}),Object(o.jsx)("button",{className:C.a.btn,onClick:function(){return n(e.id)},children:"Delete"})]})},k=n(28),v=n.n(k),N=function(t){var e=t.contacts,n=t.onDelete;return Object(o.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(o.jsx)(_,{contact:t,handleClick:n},t.id)}))})},g=n(2),y=Object(g.b)("phonebook/setFilter"),S=Object(g.b)("phonebook/fetchContactRequest"),F=Object(g.b)("phonebook/fetchContactSuccess"),w=Object(g.b)("phonebook/fetchContactError"),q=Object(g.b)("phonebook/addContactRequest"),D=Object(g.b)("phonebook/addContactSuccess"),E=Object(g.b)("phonebook/addContactError"),I=Object(g.b)("phonebook/deleteContactRequest"),L=Object(g.b)("phonebook/deleteContactSuccess"),R=Object(g.b)("phonebook/deleteContactError"),A=n(11),M=n.n(A),P="http://localhost:4040/contacts",J=function(t){return t.phonebook.items},T=function(t){return t.phonebook.filter},V=Object(s.b)((function(t){return{contacts:J(t),filter:T(t)}}),(function(t){return{fetchContact:function(){return t((function(t){t(S()),M.a.get(P).then((function(e){var n=e.data;return t(F(n))})).catch((function(e){return t(w(e))}))}))},addContact:function(e){return t(function(t){return function(e){e(q()),M.a.post(P,t).then((function(t){var n=t.data;return e(D(n))})).catch((function(t){return e(E(t))}))}}(e))},setFilter:function(e){return t(y(e))},deleteContact:function(e){return t(function(t){return function(e){e(I()),M.a.delete("".concat(P,"/").concat(t)).then((function(){return e(L(t))})).catch((function(t){return e(R(t))}))}}(e))}}}))((function(t){var e=t.contacts,n=t.filter,c=t.addContact,r=t.setFilter,i=t.deleteContact,u=t.fetchContact;Object(a.useEffect)((function(){u()}),[]);var s=Object(a.useMemo)((function(){return e.filter((function(t){return t.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))}),[e,n]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(p,{title:"Phonebook",children:Object(o.jsx)(d,{onSubmit:function(t){e.find((function(e){return e.name===t.name}))?alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c!"):c(t)}})}),Object(o.jsxs)(p,{title:"Contacts",children:[e.length>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(m,{onChange:r,filter:n}),s.length>0?Object(o.jsx)(N,{contacts:s,onDelete:i}):Object(o.jsx)("span",{children:"Contacts is not found"})]}),!e.length&&Object(o.jsx)("span",{children:"No contacts yet. Add contacts"})]})]})})),B=n(7),H=n(29),Q=n(4),z=Object(g.c)([],(c={},Object(B.a)(c,F,(function(t,e){return e.payload})),Object(B.a)(c,D,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(B.a)(c,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),G=Object(g.c)("",Object(B.a)({},y,(function(t,e){return e.payload}))),K=Object(Q.c)({items:z,filter:G}),U=Object(g.a)({reducer:{phonebook:K}});u.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(s.a,{store:U,children:Object(o.jsx)(V,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.7443489e.chunk.js.map