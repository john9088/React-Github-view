(this["webpackJsonpten-github-react-project"]=this["webpackJsonpten-github-react-project"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),i=(a(49),a(10)),j=(a.p,a(50),a(51),a(16)),l=a(9),o=a(17),b=(a(52),a(20)),d=(a(53),a(21)),u=a.n(d),x=a(22),h=a(23),O=a.n(h),m=a(91),p=a(92),f=a(93),g=a(94),v=a(95),w=a(109),y=a(96),N=a(87),S=a(88),C=a(2),P=function(e){var t=e.user;return Object(C.jsxs)(N.a,{className:"text-center mt-3 mb-4",children:[Object(C.jsx)("img",{src:t.avatar_url,className:"img-thumbnail"}),Object(C.jsxs)(S.a,{children:[Object(C.jsx)("div",{className:"text-primary",children:t.name}),Object(C.jsx)("div",{className:"text-primary",children:t.location}),Object(C.jsx)("div",{className:"text-primary",children:t.bio}),Object(C.jsx)("div",{className:"text-primary",children:t.name}),Object(C.jsxs)("div",{className:"text-primary",children:["Available for Hire: ",t.hireable?"YES":"NO"]}),Object(C.jsxs)("div",{className:"text-primary",children:["Followers: ",t.followers]})]})]})},k=a(89),I=a(90),U=function(e){var t=e.repos_url,a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1],j=function(){var e=Object(x.a)(u.a.mark((function e(){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t);case 2:a=e.sent,c=a.data,r(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[t]),Object(C.jsx)(k.a,{children:n.map((function(e){return Object(C.jsxs)(I.a,{id:e.id,children:[Object(C.jsx)("div",{className:"text-primary",children:e.name}),Object(C.jsx)("div",{className:"text-secondary",children:e.language}),Object(C.jsx)("div",{className:"text-info",children:e.description})]})}))})},E=Object(c.createContext)(),F=function(){var e,t=Object(c.useContext)(E),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],j=Object(c.useState)(null),b=Object(i.a)(j,2),d=b[0],h=b[1],N=function(){var e=Object(x.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.github.com/users/".concat(n));case 3:t=e.sent,a=t.data,h(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(o.b)("Not able to find User",{type:"Error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{className:" mt-3",children:[Object(C.jsxs)(f.a,{md:"5",children:[Object(C.jsxs)(g.a,{children:[Object(C.jsx)(v.a,{type:"text",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Please provide the username"}),Object(C.jsx)(w.a,{addonType:"append",children:Object(C.jsx)(y.a,{onClick:N,color:"primary",children:"Fetch User"})})]}),d?Object(C.jsx)(P,{user:d}):null]}),Object(C.jsx)(f.a,{md:"7",children:d?Object(C.jsx)(U,{repos_url:d.repos_url}):null})]})}):Object(C.jsx)(l.a,{to:"/signin"})},D=a(97),A=a(98),B=a(99),G=a(100),L=a(101),J=function(){var e,t=Object(c.useContext)(E),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),u=d[0],x=d[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(l.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(f.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),b.a.auth().signInWithEmailAndPassword(n,u).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(o.b)(e.message,{type:"error"})}))},children:[Object(C.jsx)(A.a,{className:"",children:"SignIn here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(B.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(C.jsxs)(B.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:u,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(L.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign In"})})]})})})})})},T=function(){var e,t=Object(c.useContext)(E),a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),u=d[0],x=d[1];return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(l.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(f.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),b.a.auth().createUserWithEmailAndPassword(n,u).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),Object(o.b)(e.message,{type:"error"})}))},children:[Object(C.jsx)(A.a,{className:"",children:"SignUp here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(B.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:n,onChange:function(e){return r(e.target.value)}})})]}),Object(C.jsxs)(B.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:u,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(L.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign Up"})})]})})})})})},_=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"PageNotFound Page"})})},Q=function(){return Object(C.jsx)(m.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-3",children:"Jason Britto Get Git Profile"})},z=a(102),K=a(103),M=a(104),W=a(105),H=a(110),X=a(106),Y=a(107),Z=a(108),q=function(){var e,t=Object(c.useContext)(E),a=Object(c.useState)(!1),s=Object(i.a)(a,2),n=s[0],r=s[1];return Object(C.jsxs)(z.a,{color:"info",light:!0,expand:"md",children:[Object(C.jsx)(K.a,{children:Object(C.jsx)(j.b,{to:"/",light:!0,expand:"md",className:"text-white",children:"Jason Britto Git App"})}),Object(C.jsx)(M.a,{onClick:function(){return r(!n)}}),Object(C.jsx)(W.a,{className:"text-white",children:(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""}),Object(C.jsx)(H.a,{isOpen:n,navbar:!0,children:Object(C.jsx)(X.a,{className:"ml-auto",navbar:!0,children:t.user?Object(C.jsx)(Y.a,{className:"text-white",children:Object(C.jsx)(Z.a,{onClick:function(){t.setUser(null)},className:"text-white",children:"Logout"})}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Y.a,{className:"text-white",children:Object(C.jsx)(Z.a,{tag:j.b,to:"/signup",className:"text-white",children:"SignUp"})}),Object(C.jsx)(Y.a,{className:"text-white",children:Object(C.jsx)(Z.a,{tag:j.b,to:"/signin",className:"text-white",children:"SignIn"})})]})})})]})};b.a.initializeApp({apiKey:"AIzaSyDMQn4teK652DxLCjpp6EmfteX9P65b95c",authDomain:"fir-gitapp.firebaseapp.com",projectId:"fir-gitapp",storageBucket:"fir-gitapp.appspot.com",messagingSenderId:"847680363735",appId:"1:847680363735:web:a21b581f19bb6bda03e492",measurementId:"G-GTQDQ5Z3L8"});var R=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(C.jsxs)("div",{children:[Object(C.jsxs)(j.a,{children:[Object(C.jsx)(o.a,{}),Object(C.jsxs)(E.Provider,{value:{user:a,setUser:s},children:[Object(C.jsx)(q,{}),Object(C.jsxs)(l.d,{children:[Object(C.jsx)(l.b,{exact:!0,path:"/",component:F}),Object(C.jsx)(l.b,{exact:!0,path:"/signin",component:J}),Object(C.jsx)(l.b,{exact:!0,path:"/signup",component:T}),Object(C.jsx)(l.b,{exact:!0,path:"*",component:_})]})]})]}),Object(C.jsx)(Q,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(R,{})}),document.getElementById("root")),V()}},[[86,1,2]]]);
//# sourceMappingURL=main.f3e6a636.chunk.js.map