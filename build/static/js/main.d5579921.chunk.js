(this["webpackJsonptask-list"]=this["webpackJsonptask-list"]||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(17),s=n.n(r),o=(n(26),n(8)),a=n(1),l=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper blue darken-1 px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"Dmitry"}),Object(a.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/about",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})})]})]})})},u=n(2),d=n(15),j=n(20),b=n(21),m=function(e){var t=Object(c.useRef)(null);return Object(a.jsxs)("div",{className:"input-field mt2",children:[Object(a.jsx)("input",{type:"text",id:"title",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",ref:t,onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")}}),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"})]})},p=function(e){var t=e.todos,n=e.onRemove,c=e.onToggle;if(0===t.length)return Object(a.jsx)("p",{className:"center",children:"\u041f\u043e\u043a\u0430 \u0434\u0435\u043b \u043d\u0435\u0442!"});return Object(a.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),console.log(e.completed),Object(a.jsx)("li",{className:t.join(" "),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,onChange:c.bind(null,e.id)}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})},e.id)}))})},f=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");i(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onAdd:function(e){var t={title:e,id:Date.now(),completed:!1};i((function(e){return[t].concat(Object(j.a)(e))}))}}),Object(a.jsx)(p,{todos:n,onRemove:function(e){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442?")&&i((function(t){return t.filter((function(t){return t.id!==e}))}))},onToggle:function(e){i((function(t){return t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}))}))}})]})},h=function(){var e=Object(u.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, debitis dolorem impedit in iste natus repellendus. Ab adipisci aperiam assumenda aut cupiditate doloremque dolores eius eos exercitationem explicabo facilis fuga illo incidunt ipsa ipsum iste itaque iure libero minima, neque officiis pariatur ratione sapiente, tempore tenetur unde voluptas voluptatibus? Aliquam asperiores cum debitis maiores perferendis quam quibusdam. Cum quis quos ut."}),Object(a.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0434\u0435\u043b"})]})},O=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:f}),Object(a.jsx)(u.a,{path:"/about",component:h})]})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.d5579921.chunk.js.map