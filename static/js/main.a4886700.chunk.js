(this["webpackJsonpgify-loader"]=this["webpackJsonpgify-loader"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(5),i=n.n(c),s=(n(13),n(14),n(2)),o=(n(15),function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(t((function(e){return[i]})),o(""))},children:Object(a.jsx)("input",{className:"text",placeholder:"Search: ej. Goku",type:"text",value:i,onChange:function(e){o(e.target.value)}})})}),u=n(7),d=n(4),j=n.n(d),l=n(6),f=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a,r,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"sU2u86pEn8MX8RY5F1EizU2r8Fyr8FmI",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=21&api_key=").concat("sU2u86pEn8MX8RY5F1EizU2r8Fyr8FmI"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=(n(17),n(18),function(e){var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeInUp",children:[Object(a.jsx)("img",{width:"400",height:"300",src:n,alt:t}),Object(a.jsxs)("p",{children:[" ",t," "]}),Object(a.jsx)("a",{className:"ox-btn ox-btn-success ox-btn-rounded",href:n,title:t,alt:t+".gif",rel:"noreferrer",target:"_blank",children:"Download"})]})}),m=(n(19),function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{className:"animate__animated animate__zoomIn",children:[" ",t," "]}),i&&Object(a.jsxs)("div",{className:"load lds-facebook",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(a.jsx)(b,Object(u.a)({},e),e.id)}))})]})}),h=(n(20),function(e){var t=e.defaultCategories,n=void 0===t?[]:t,c=Object(r.useState)(n),i=Object(s.a)(c,2),u=i[0],d=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"title animate__animated animate__heartBeat",children:"GifyLoader"}),Object(a.jsx)(o,{setCategories:d}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:u.map((function(e){return Object(a.jsx)(m,{category:e},e)}))})]})});i.a.render(Object(a.jsx)(h,{}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a4886700.chunk.js.map