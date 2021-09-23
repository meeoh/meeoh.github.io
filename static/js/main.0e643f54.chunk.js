(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("dark"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o={homepage:"https://meeoh.github.io/"},j="Shameel Abdullah",h="Fullstack Developer",d="I am a 26 year old Computer Science graduate (University Of Waterloo). I have a passion for programming and technology. I am currently working as a senior developer at Shopify.",b="https://meeoh.github.io/resume.pdf",u={linkedin:"https://www.linkedin.com/in/shameel-abdullah-07a4ab85/",github:"https://github.com/meeoh"},m=[{name:"Tikok Web Audio Control",description:"Chrome extension to adjust the volume on tiktoks web platform.",stack:["Javascript","HTML","CSS"],sourceCode:"https://github.com/meeoh/Tiktok-Web-Audio-Control",livePreview:"https://chrome.google.com/webstore/detail/tiktok-audio-control/gkkbemmahdfblbnggbdbfhhdbmajpcab?hl=en-GB"},{name:"Hydroelectricity Tracker",description:"Script to read the amount of hydro-electricity used in the past day",stack:["Javascript","Puppeteer"],sourceCode:"https://github.com/meeoh/Kwhydro-tracker"},{name:"Slowed and Reverbed Bot",description:"Script to find new hiphop music and apply slowing and reverb effects and uploading to youtube",stack:["Python"],sourceCode:"https://github.com/meeoh/Slowed-And-Reverbed",livePreview:"https://www.youtube.com/channel/UCXhdKuPUh7YjZp2xDdgZK5w"}],p=[{name:"Shopify (2020 - Current)",description:"At Shopify I work as a full stack developer, I initially started on the merchant analytics team where I helped our merchants gain a better unstanding of their business. As of recently I have moved teams and am helping improve our internal processes. ",livePreview:"https://www.shopify.com/"},{name:"Applyboard (2018 - 2019)",description:"I spent around two years at Applyboard, where I was a full stack developer helping build a platform that assists international students in persuing education in North America",livePreview:"https://www.applyboard.com/"},{name:"eSentire (2017 - 2018)",description:"I began working as a full-time Software Developer for eSentire in May of 2017. An Easy to use field productivity tools that delivers powerful results.",livePreview:"https://www.esentire.com/"}],O=["HTML","CSS","JavaScript","TypeScript","React","Redux","Git","CI/CD","Jest","Rails","Python","Docker"],x="shameel.abdullah@gmail.com",f=n(14),v=n.n(f),k=n(12),g=n.n(k),N=n(16),w=n.n(N),_=n(15),y=n.n(_),C=(n(26),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#experiences",onClick:d,className:"link link--nav",children:"Experiences"})}):null,m.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(y.a,{}):Object(a.jsx)(w.a,{})})]})}),S=(n(32),function(){var e=o.homepage,t=o.title;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),I=n(10),P=n.n(I),A=n(17),E=n.n(A),T=(n(33),function(){var e=j,t=h,n=d,c=b,s=u;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(E.a,{})})]})]})]})}),R=n(7),J=n.n(R),D=n(18),H=n.n(D),L=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})}),B=(n(36),function(){return m.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Recent Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(a.jsx)(L,{project:e},J()())}))})]}):null}),K=(n(37),function(){return p.length?Object(a.jsxs)("section",{id:"experiences",className:"section experiences",children:[Object(a.jsx)("h2",{className:"section__title",children:"Experience"}),Object(a.jsx)("div",{className:"experiences__grid",children:p.map((function(e){return Object(a.jsx)(L,{project:e},J()())}))})]}):null}),M=(n(38),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),U=n(19),W=n.n(U),F=(n(39),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(W.a,{fontSize:"large"})})}):null}),G=(n(40),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(S,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(K,{}),Object(a.jsx)(B,{}),Object(a.jsx)(M,{}),Object(a.jsx)(G,{})]}),Object(a.jsx)(F,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0e643f54.chunk.js.map