(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(6),c=a(9),r=a(2),o=a(1),l=(a(14),a(8)),u=a.n(l),m=(a(15),a(0)),d=function(e){var t=e.user;return Object(m.jsx)("div",{className:"User",children:Object(m.jsxs)("ul",{className:"User__list",children:[Object(m.jsx)("li",{className:"User__item",children:"For ".concat(t.name," ").concat(t.username)}),Object(m.jsx)("li",{className:"User__email",children:t.email})]})})},p=(a(17),function(e){var t=e.title,a=e.status,n=e.user;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"Todo__title",children:t}),Object(m.jsx)("p",{className:u()("Todo__status",{Todo__active:a}),children:a?"completed":"not completed"}),a&&Object(m.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/5930/5930432.png",width:"20px",alt:"icon completed"}),n&&Object(m.jsx)(d,{user:n})]})}),h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],j=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(o.useState)(""),l=Object(r.a)(s,2),u=l[0],d=l[1],j=Object(o.useState)(b),g=Object(r.a)(j,2),y=g[0],_=g[1],O=Object(o.useState)("not completed"),f=Object(r.a)(O,2),x=f[0],v=f[1],w=Object(o.useState)(null),S=Object(r.a)(w,2),N=S[0],A=S[1],C=Object(o.useState)(null),k=Object(r.a)(C,2),z=k[0],P=k[1],L=Object(o.useMemo)((function(){return y.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})}))}),[y]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"List of todos"}),Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u||A("Please choose a user"),a.trim()||P("Please enter the title"),u&&a.trim()){var t=h.find((function(e){return e.name===u})),s={id:y[y.length-1].id+1,title:a,userId:t?t.id:0,completed:"completed"===x};_((function(e){return[].concat(Object(c.a)(e),[s])})),n(""),d(""),v("not completed")}},className:"App__form",children:[Object(m.jsx)("h2",{className:"App__form-title",children:"Create a new todo"}),Object(m.jsxs)("div",{className:"App__wrapper",children:[Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"title",value:a,placeholder:"Title",onChange:function(e){var t=e.target.value;n(t.replace(/[^a-zA-Z0-9\u0410-\u042f\u0430-\u044f\s]/g,"")),P(null)},className:"App__input-title"})}),z&&Object(m.jsx)("span",{className:"App__error",children:z}),Object(m.jsxs)("select",{name:"user",value:u,onChange:function(e){d(e.target.value),A(null)},className:"App__select",children:[Object(m.jsx)("option",{value:"",children:"Choose a user"}),h.map((function(e){var t=e.name,a=e.id;return Object(m.jsx)("option",{value:t,children:t},a)}))]}),N&&Object(m.jsx)("span",{className:"App__error",children:N})]}),Object(m.jsxs)("label",{className:"App__label",htmlFor:"status_not",children:[Object(m.jsx)("input",{type:"radio",id:"status_not",name:"status",value:"not completed",checked:"not completed"===x,onChange:function(e){v(e.target.value)},className:"App__radio"}),"Not completed"]}),Object(m.jsxs)("label",{className:"App__label",htmlFor:"status_yes",children:[Object(m.jsx)("input",{type:"radio",id:"status_yes",name:"status",value:"completed",checked:"completed"===x,onChange:function(e){return v(e.target.value)},className:"App__radio"}),"Completed"]}),Object(m.jsx)("button",{type:"submit",className:"App__button",children:"Add"})]}),Object(m.jsx)("ul",{className:"App__list",children:L.map((function(e){return Object(m.jsx)("li",{className:"App__item",children:Object(m.jsx)(p,{title:e.title,status:e.completed,user:e.user})},e.id)}))})]})};s.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a72ee1e5.chunk.js.map