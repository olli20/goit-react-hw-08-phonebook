"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{1898:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a=t(2791),r=t(9434),c=t(4942),s=t(1413),o=t(9439),i=t(8038),l=t(7994),u=t(4905),d={name:{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,label:"Name",placeholder:""},number:{type:"text",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{0,4}[-.s]?d{0,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,label:"Number",placeholder:""}},m={name:"",number:""},f="contact-form_form__f7EO7",h="contact-form_card__rYrfl",_="contact-form_button__63jxu",v=t(184),b=function(e){var n=e.onSubmit,t=e.contacts,r=(0,a.useState)((0,s.Z)({},m)),b=(0,o.Z)(r,2),p=b[0],x=b[1],j=function(e){var n=e.target,t=n.name,a=n.value;x((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,c.Z)({},t,a))}))},g=p.name,C=p.number;return(0,v.jsx)(i.Z,{className:h,children:(0,v.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.filter((function(e){return e.name.toLowerCase()===g.toLowerCase()})).length)return alert("".concat(g," is already in contacts"));n({name:g,number:C}),x((0,s.Z)({},m))},className:f,children:[(0,v.jsx)(l.Z,(0,s.Z)({value:g,handleChange:j},d.name)),(0,v.jsx)(l.Z,(0,s.Z)({value:C,handleChange:j},d.number)),(0,v.jsx)(u.Z,{type:"submit",className:_,children:"Add contact"})]})})},p=b;b.defaultProps={contacts:[]};var x="filter_filter__53wF1",j=function(e){var n=e.filter,t=e.changeFilter;return(0,v.jsx)("div",{className:x,children:(0,v.jsx)(l.Z,{value:n,handleChange:t,label:"Find contacts by name"})})},g=t(2007),C=t.n(g),Z=t(2244),N="contact-list_list__inua9",y="contact-list_listItem__Gpmai",k="contact-list_btn__gWG8c",w=function(e){var n=e.id,t=e.name,a=e.number,r=e.onRemoveContact;return(0,v.jsxs)("li",{className:y,children:[(0,v.jsxs)("span",{children:[t,": "]}),(0,v.jsx)("span",{children:a}),(0,v.jsx)("button",{onClick:function(){return r(n)},type:"button",className:k,children:(0,v.jsx)(Z.s5_,{})})]})},R=function(e){var n=e.contacts,t=void 0===n?[]:n,a=e.onRemoveContact,r=t.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,v.jsx)(w,{id:n,name:t,number:r,onRemoveContact:a},n)}));return(0,v.jsx)("ul",{className:N,children:r})};w.defaultProps={contacts:[]},w.propTypes={contacts:C().arrayOf(C().shape({id:C().string.isRequired,name:C().string.isRequired,number:C().string.isRequired})).isRequired,onRemoveContact:C().func.isRequired};var q=t(3822),A=t(2595),F=t(5653),L=function(e){return e.contacts.items},P=function(e){return e.contacts.error},z=function(e){return e.contacts.loading},E=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},S=function(e){return e.filter},G="contacts-page_main__P1mdV",I="contacts-page_contacts__XgEx1",T="contacts-page_title__daPAH",V=function(){var e=(0,r.v9)(L),n=(0,r.v9)(z),t=(0,r.v9)(P),c=(0,r.v9)(E),s=(0,r.v9)(S),o=(0,r.I0)();(0,a.useEffect)((function(){o((0,A.CL)())}),[o]);var l=(null===c||void 0===c?void 0:c.length)>0,u=(null===e||void 0===e?void 0:e.length)>0;return(0,v.jsxs)("main",{className:G,children:[(0,v.jsxs)(i.Z,{className:I,children:[(0,v.jsx)("h1",{className:T,children:"Your contacts"}),(0,v.jsx)(j,{filter:s,changeFilter:function(e){var n=e.target;o((0,F.T)(n.value))}}),l&&(0,v.jsx)(R,{contacts:c,onRemoveContact:function(e){o((0,A.in)(e))}}),!u&&(0,v.jsx)("p",{children:"You have no added contacts jet"}),n&&(0,v.jsx)(q.Z,{}),Boolean(t)&&(0,v.jsx)("p",{children:t})]}),(0,v.jsx)(p,{onSubmit:function(e){var n=e.name,t=e.number;o((0,A.v6)({name:n,number:t}))},contacts:e})]})}},4905:function(e,n,t){t.d(n,{Z:function(){return c}});var a="button_button__vTaVn",r=t(184),c=function(e){var n=e.className,t=e.disabled,c=e.type,s=e.onClick,o=e.children;return(0,r.jsx)("button",{type:c||"button",className:"".concat(n," ").concat(a),onClick:s,disabled:t,children:o})}},8038:function(e,n,t){t.d(n,{Z:function(){return c}});var a="card_card__L6k2k",r=t(184),c=function(e){var n=e.className,t=e.children,c="".concat(a," ").concat(n);return(0,r.jsx)("div",{className:c,children:t})}},7994:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(1413),r=t(4925),c=t(2791),s=t(5984),o="text-field_field__q+3UI",i="text-field_label__49yKV",l="text-field_input__8dG8E",u=t(184),d=["label","handleChange"],m=function(e){var n=e.label,t=e.handleChange,m=(0,r.Z)(e,d),f=(0,c.useMemo)((function(){return(0,s.x0)()}),[]);return(0,u.jsxs)("div",{className:o,children:[(0,u.jsx)("label",{className:i,htmlFor:f,children:n}),(0,u.jsx)("input",(0,a.Z)({className:l,id:f,onChange:t},m))]})}}}]);
//# sourceMappingURL=898.319c706f.chunk.js.map