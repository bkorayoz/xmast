(this.webpackJsonpxmast=this.webpackJsonpxmast||[]).push([[0],{58:function(n,t,e){},59:function(n,t,e){},68:function(n,t,e){"use strict";e.r(t);var o=e(17),a=e(3),c=e.n(a),u=e(50),r=e.n(u),s=(e(58),e(32)),i=e(37),l=(e(59),e(20));function f(){var n=Object(s.a)(['\n          query MyQuery {\n            constants(where:{_or:[{key:{_eq:"xmastNames"}},{key:{_eq:"isXmastNumbersLocked"}}]}) {\n              key\n              value\n            }\n          }\n        ']);return f=function(){return n},n}function d(){var n=Object(s.a)(['\n        mutation MyMutation {\n          update_constants(where: {key:{_eq: "isXmastNumbersLocked"}}, _set: {value: ',"}) {\n            affected_rows\n          }\n        }\n      "]);return d=function(){return n},n}function v(){var n=Object(s.a)(['\n        mutation MyMutation {\n          update_constants(where: {key:{_eq: "xmastNames"}}, _set: {value: ',"}) {\n            affected_rows\n          }\n        }\n      "]);return v=function(){return n},n}var h=function(){var n=new l.ApolloClient({uri:"https://wealthy-seal-95.hasura.app/v1/graphql",cache:new l.InMemoryCache}),t=Object(a.useState)(!1),e=Object(i.a)(t,2),c=e[0],u=e[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),h=s[0],b=s[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){n.query({query:Object(l.gql)(f())}).then((function(n){var t,e,o,a,c,r;console.log(n),b((null===(t=n.data)||void 0===t||null===(e=t.constants)||void 0===e?void 0:e.length)>0&&(null===(o=n.data)||void 0===o?void 0:o.constants[0].value)||[]),u((null===(a=n.data)||void 0===a||null===(c=a.constants)||void 0===c?void 0:c.length)>1&&"locked"===(null===(r=n.data)||void 0===r?void 0:r.constants[1].value[0])||!1)}))},j=function(t){for(var e,o,a,c=JSON.parse(JSON.stringify(t)),u=c.length;0!==u;)o=Math.floor(Math.random()*u),e=c[u-=1],c[u]=c[o],c[o]=e;b(JSON.parse(JSON.stringify(c))),a=c,n.mutate({mutation:Object(l.gql)(v(),JSON.stringify(a))}).then((function(n){return console.log(n)}))};return Object(o.jsxs)("div",{className:"App",children:[h.map((function(n,t){return Object(o.jsx)("p",{children:"".concat(t+1," - ").concat(n)})})),!c&&Object(o.jsx)("button",{onClick:function(){return j(h)},children:"Press to suffle names"}),!c&&Object(o.jsx)("button",{onClick:function(){return t="locked",n.mutate({mutation:Object(l.gql)(d(),JSON.stringify([t]))}).then((function(n){return console.log(n)})),void u(!0);var t},children:"Lock the numbers"})]})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,69)).then((function(t){var e=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;e(n),o(n),a(n),c(n),u(n)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),b()}},[[68,1,2]]]);
//# sourceMappingURL=main.c0552407.chunk.js.map