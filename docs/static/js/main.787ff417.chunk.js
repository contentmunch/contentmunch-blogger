(this["webpackJsonpcontentmunch-blog"]=this["webpackJsonpcontentmunch-blog"]||[]).push([[0],{102:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},244:function(e,t,n){},269:function(e,t){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),o=n.n(i),s=n(91),a=n.n(s),r=n(25),d=n(12),l=n(4),j=(n(102),n(18)),u=n(13),h="/implicit/callback",b=window.location.host,O=window.location.protocol,x={issuer:"https://auth.contentmunch.com/oauth2/default",clientId:"0oakabbaYBaBrYgFf5d5",redirectUri:"".concat(O,"//").concat(b).concat(h),scopes:["openid","profile","email"],pkce:!0},f=function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:"Resource Not Found"})}),Object(c.jsx)("section",{className:"section-align--center",children:Object(c.jsx)("h2",{children:"Uh-oh, this is a 404"})})]})},m=n(10),v=n(3),p=(n(225),n(226),function(){var e=Object(i.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],s=function(){console.log("search button clicked")};return Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)(v.Input,{name:"query",placeholder:"Search articles",onKeyDown:function(e){"Enter"===e.key&&""!==n&&s()},onChange:function(e){o(e.target.value)},icon:"type"}),Object(c.jsx)(v.Button,{title:"Search",variant:"secondary",disabled:""===n,onClick:s,children:Object(c.jsx)(v.Icon,{name:"search"})})]})}),g=n(95),w=n.n(g).a.create({baseURL:"https://www.contentmunch.com/api/"}),k=function(e){return{headers:{Authorization:"Bearer "+e}}},C=function(e){for(var t,n,c=(new DOMParser).parseFromString("<div>"+e+"</div>","text/html"),i="",o=0;o<c.documentElement.childNodes.length;o++){var s=c.documentElement.childNodes[o];if(s.textContent&&""!==s.textContent){i=s.textContent;break}}return n||(n=150),(t=i).length>n?t.substring(0,n)+"...":t},N=function(){var e=Object(u.useOktaAuth)(),t=e.authState,n=e.authService,s=Object(i.useState)(""),a=Object(m.a)(s,2),r=a[0],d=a[1],j=Object(i.useState)(!1),h=Object(m.a)(j,2),b=h[0],O=h[1],f="".concat(window.location.origin),g=Object(i.useState)(!1),C=Object(m.a)(g,2),N=C[0],S=C[1],y=Object(l.k)();Object(i.useEffect)((function(){(null===t||void 0===t?void 0:t.isAuthenticated)&&(null===n||void 0===n||n.getUser().then((function(e){d(null===e||void 0===e?void 0:e.name)})))}),[n,t]);return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("a",{href:"https://www.contentmunch.com","data-title":"Contentmunch.com home",children:Object(c.jsx)(v.Icon,{name:"muncher",weight:1})}),Object(c.jsx)("div",{className:"header-search",children:Object(c.jsx)(p,{})}),t.isAuthenticated?Object(c.jsx)(v.DropdownButton,{size:"small",title:"Hello "+r+"!",element:Object(c.jsx)(v.Icon,{name:"user",weight:1}),showContent:N,setShowContent:S,children:Object(c.jsxs)("div",{className:"header-dropdown--content",children:[Object(c.jsxs)(v.Button,{size:"small",title:"Edit",variant:"secondary",onClick:function(){var e;O(!0),(e=t.idToken,w.post("articles?projection=withId",{title:"",content:"",status:"active"},k(e)).then((function(e){return e.data}))).then((function(e){O(!1),y.push(_+"/"+e.id+"/edit")}))},disabled:b,children:[Object(c.jsx)(v.Icon,{name:"edit",weight:1})," Create\xa0",b?Object(c.jsx)(v.Spinner,{size:"tiny"}):""]}),Object(c.jsxs)(v.Button,{size:"small",title:"Logout",variant:"secondary",onClick:function(){n.logout("/"),window.location.href="".concat(x.issuer,"/v1/logout?id_token_hint=").concat(t.idToken,"&post_logout_redirect_uri=").concat(f)},children:[Object(c.jsx)(v.Icon,{name:"log-out",weight:1})," Log Out"]})]})}):Object(c.jsx)(o.a.Fragment,{children:Object(c.jsxs)(v.Button,{size:"small",title:"Login",onClick:function(){return n.login(_)},disabled:t.isPending,children:[Object(c.jsx)(v.Icon,{name:"log-in",weight:1})," \xa0",t.isPending?Object(c.jsx)(v.Spinner,{size:"tiny"}):""]})})]})})})},S=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("div",{className:"container",children:" Footer"})})},y=(n(244),n(24)),I=n.n(y),B=function(e){var t=e.article,n=Object(l.k)(),i=Object(u.useOktaAuth)().authState;return Object(c.jsxs)("div",{className:"article-card",children:[Object(c.jsx)("h2",{children:Object(c.jsx)(d.Link,{to:"/"+t.id,children:t.title})}),Object(c.jsx)("p",{children:C(t.content)}),Object(c.jsx)("div",{className:"article-card--footer",children:Object(c.jsxs)("p",{children:["Created ",I()(t.createdAt).endOf("day").fromNow(),(null===i||void 0===i?void 0:i.isAuthenticated)?Object(c.jsx)(v.Button,{size:"small",onClick:function(){n.push("/"+t.id+"/edit")},children:Object(c.jsx)(v.Icon,{name:"edit"})}):""]})})]})},A=(n(76),function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){var e;(e=5,w.get("articles?projection=withId&sort=createdAt,desc&size="+e).then((function(e){return e.data._embedded.articles}))).then((function(e){o(e)}))}),[]),Object(c.jsx)("main",{children:Object(c.jsx)("section",{className:"section-home container",children:n.map((function(e){return Object(c.jsx)(B,{article:e},e.id)}))})})}),z=n(96),F=n.n(z),L=(n(287),function(e){var t=e.content;return Object(c.jsx)("div",{className:"article-content",children:t?F()(t):""})}),E=function(){var e=Object(i.useState)(),t=Object(m.a)(e,2),n=t[0],o=t[1],s=Object(l.m)(),a=Object(l.k)();return Object(i.useEffect)((function(){var e;(e=s.id,w.get("articles/"+e+"?projection=withId").then((function(e){return e.data}))).then((function(e){o(e)})).catch((function(){a.push(_+"/not-found")}))}),[s,a]),Object(c.jsxs)("main",{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:null===n||void 0===n?void 0:n.title})}),Object(c.jsxs)("section",{className:"section-home container",children:[Object(c.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(c.jsx)(L,{content:null===n||void 0===n?void 0:n.content}),Object(c.jsxs)("p",{children:["keywords: ",null===n||void 0===n?void 0:n.keywords]}),Object(c.jsxs)("p",{children:["status: ",null===n||void 0===n?void 0:n.status]}),Object(c.jsxs)("p",{children:["Created ",I()(null===n||void 0===n?void 0:n.createdAt).endOf("day").fromNow()]}),Object(c.jsxs)("p",{children:["LastModified ",I()(null===n||void 0===n?void 0:n.lastModifiedAt).endOf("day").fromNow()]})]})]})},_="/articles",P=function(){return Object(c.jsx)(j.b,{children:Object(c.jsx)(d.HashRouter,{hashType:"noslash",children:Object(c.jsxs)(u.Security,Object(r.a)(Object(r.a)({},x),{},{children:[Object(c.jsx)(N,{}),Object(c.jsxs)(l.g,{children:[Object(c.jsx)(l.d,{exact:!0,path:h,component:u.LoginCallback}),Object(c.jsx)(l.d,{exact:!0,path:"/",children:Object(c.jsx)(A,{})}),Object(c.jsx)(l.d,{path:"/:id",children:Object(c.jsx)(E,{})}),Object(c.jsx)(l.d,{path:"*",children:Object(c.jsx)(f,{})})]}),Object(c.jsx)(S,{})]}))})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),o(e),s(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),T()},76:function(e,t,n){}},[[288,1,2]]]);
//# sourceMappingURL=main.787ff417.chunk.js.map