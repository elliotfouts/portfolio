(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/grocerease.a691dfaf.png"},101:function(e,t,a){e.exports=a.p+"static/media/javascriptQuiz.51c7abcc.png"},102:function(e,t,a){e.exports=a.p+"static/media/weatherForecast.441f6d27.png"},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=a(161),c=a(81),m=a(7),s=a(35),p=a(162),d=a(157),u=a(163),g=a(73),f=a.n(g),h=a(72),E=a.n(h),x="#3CB7FF",v="#3CB7FF30",b="#000000",w="#00000070",y="#FFFFFF";var k=a(68),j=a.n(k),C=Object(p.a)({menu:{"& div":{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"90vh",fontSize:"3rem",color:x,"& p, & a":{color:"currentColor",textDecoration:"none",transition:"all 300ms","&:hover":{color:b}}}},menuIcon:{color:x},root:{"&>main":{position:"fixed",top:"0",zIndex:"50",width:"100%",background:y,boxShadow:"4px 4px 4px rgba(0, 0, 0, 0.2)","&>nav":{height:"10vh",width:"100%",padding:"0 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",color:x,"&>span":{height:"30px",width:"30px",border:"1px solid currentColor",borderRadius:"50%",display:"grid",placeItems:"center","&>p":{margin:"0",padding:"0"}}}}}}),O=function(e){var t=e.children,a=C(),o=Object(n.useState)(!1),i=Object(s.a)(o,2),l=i[0],c=i[1],m=function(e){c(!1),window.open("/Portfolio/#".concat(e.target.getAttribute("name")),"_self")};return r.a.createElement("div",{className:a.root},r.a.createElement("main",null,r.a.createElement("nav",null,r.a.createElement("span",null,r.a.createElement("p",null,"E")),r.a.createElement(u.a,{onClick:function(){return c(!l)}},l?r.a.createElement(E.a,{className:a.menuIcon}):r.a.createElement(f.a,{className:a.menuIcon}))),r.a.createElement(d.a,{in:l,className:a.menu,timeout:1e3},r.a.createElement("div",null,r.a.createElement("p",{onClick:m,name:"home"},"HOME"),r.a.createElement("p",{onClick:m,name:"work"},"WORK"),r.a.createElement("a",{href:j.a,target:"blank"},"RESUME"),r.a.createElement("p",{onClick:m,name:"contact"},"CONTACT")))),t)},S=a(166),z=a(74),N=a.n(z),I=Object(p.a)({root:{height:"100%",width:"100%",padding:"5rem",display:"flex",flexDirection:"column",justifyContent:"center","& h3":{margin:"0",padding:"0",fontSize:"1.5rem",color:w,fontWeight:"100"},"& h1":{margin:"0",marginBottom:"2rem",padding:"0",fontSize:"3rem",color:v,textStroke:"1px ".concat(x)},"& h2":{margin:"0",marginBottom:"8rem",padding:"0",paddingLeft:"1rem",fontSize:"3rem",fontWeight:"100",color:x,borderLeft:"1px solid ".concat(x)},"& span":{textDecoration:"none",color:w,alignSelf:"center",display:"grid",placeItems:"center",transition:"all 300ms",position:"relative",top:"0","&:hover":{color:b,top:"5px"},"& p":{}},"@media (max-width: 700px)":{padding:"3rem","& h1":{fontSize:"2rem"},"& h2":{fontSize:"2rem"},"& h3":{fontSize:"1rem"}}}}),A=function(){var e=I();return r.a.createElement("div",{className:e.root},r.a.createElement("h3",null,"Hello, my name is"),r.a.createElement("h1",null,"Elliot Fouts."),r.a.createElement("h2",null,"I build web applications"),r.a.createElement("span",{onClick:function(){return function(e){var t=document.getElementById("work").offsetTop;window.scroll({top:t,behavior:"smooth"})}()}},r.a.createElement("p",null,"view work"),r.a.createElement(N.a,null)))},T={imageArr:["codifyMobile.png","grocerease.png","weatherForecast.png","javascriptQuiz.png","code.png","gitConnected.png"]},F=Object(p.a)({root:{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",padding:"2rem",gridGap:"2rem",justifyItems:"center",alignItems:"center","& img":{marginRight:"6rem",maxHeight:"200px",maxWidth:"200px"},"@media (max-width: 1150px)":{"& img":{marginRight:"4rem",maxHeight:"150px",maxWidth:"150px"}}}}),D=function(){var e=F();return r.a.createElement("div",{className:e.root},T.imageArr.map((function(e,t){return r.a.createElement("img",{key:t,alt:"device with example website on screen",src:a(59)("./"+e)})})))},U=Object(p.a)({root:{height:"90vh",display:"flex",paddingTop:"10vh"}}),W=function(){var e=U();return r.a.createElement("div",{id:"home",className:e.root},r.a.createElement(A,null),r.a.createElement(S.a,{smDown:!0},r.a.createElement(D,null)))},R=Object(p.a)({root:{display:"flex",color:"#000000",alignItems:"center","& div":{flex:"1",marginLeft:"1rem",height:"1px",background:"#00000030"}}}),L=function(e){var t=e.text,a=e.style,n=R();return r.a.createElement("div",{className:n.root,style:a},r.a.createElement("h1",null,t),r.a.createElement("div",null))},B={WorkArr:[{imageUrl:"codifyDesktop.png",imageAlt:"picture of MacBook with website on screen",title:"Codify",githubUrl:"https://github.com/yankidank/Codify",demoUrl:"https://codify.works/",description:"A website to help software developers organize and track their progress throughout the job application process"},{imageUrl:"grocerease.png",imageAlt:"picture of iPhone with app on screen",title:"Grocer-ease",githubUrl:"https://github.com/elliotfouts/grocer-ease",demoUrl:"https://drive.google.com/file/d/1AVGWSh-yev6b12TczLxtEjiAsRRYwOWS/view?usp=sharing",description:"A simple, intuitive PWA to help families create, modify, and share grocery lists "},{imageUrl:"gitConnected.png",imageAlt:"picture of iPhone with app on screen",title:"GitConnected",githubUrl:"",demoUrl:"",description:"An app to help software developers find contract work, new teammates, and open-source projects"}]},M=a(158),G=a(45),H=a.n(G),P=a(75),_=a.n(P),J=Object(p.a)({root:{"& .image-container":{display:"grid",placeItems:"center",height:"200px",margin:"2rem"},"& img":{maxHeight:"200px",maxWidth:"200px"},"& header":{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center","&>h1":{fontWeight:"100"},"& span a":{marginLeft:"1rem",color:"currentColor",transition:"all 300ms","&:hover":{color:w}}},"& p":{color:w}}}),Q=function(e){var t=e.info,n=t.imageUrl,o=t.imageAlt,i=t.title,l=t.githubUrl,c=t.demoUrl,m=t.description,s=J();return r.a.createElement("div",{className:s.root},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{alt:o,src:a(59)("./"+n)})),r.a.createElement("header",null,r.a.createElement("h1",null,i),r.a.createElement("span",null,r.a.createElement("a",{href:l,target:"blank"},r.a.createElement(H.a,null)),r.a.createElement("a",{href:c,target:"blank"},r.a.createElement(_.a,null)))),r.a.createElement(M.a,null),r.a.createElement("p",null,m))},V=Object(p.a)({root:{padding:"4rem 0",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"6rem","@media (max-width: 1200px)":{gridTemplateColumns:"1fr 1fr"},"@media (max-width: 800px)":{gridTemplateColumns:"1fr"}}}),Z=function(){var e=V();return r.a.createElement("div",{className:e.root},B.WorkArr.map((function(e,t){return r.a.createElement(Q,{key:t,info:e})})))},K=Object(p.a)({root:{width:"100%",display:"grid",placeItems:"center","& a":{color:x,padding:"1rem 2rem",borderRadius:"0.5rem",border:"1px solid currentColor",transition:"all 300ms",textDecoration:"none","&:hover":{background:v}}}}),Y=function(){var e=K();return r.a.createElement("div",{className:e.root},r.a.createElement("a",{href:"https://github.com/elliotfouts",target:"blank"},"VIEW ALL PROJECTS"))},$=Object(p.a)({root:{marginTop:"5rem",padding:"5rem","@media (max-width: 500px)":{padding:"3rem"}}}),q=function(){var e=$();return r.a.createElement("div",{id:"work",className:e.root},r.a.createElement(L,{text:"Selected Work",style:{color:b}}),r.a.createElement(Z,null),r.a.createElement(Y,null))},X=a(51),ee=a.n(X),te=a(76),ae=a(46),ne=a(38),re=a(165),oe=a(160),ie=a(164),le=a(77),ce=a.n(le);function me(e){return r.a.createElement(ie.a,Object.assign({elevation:6,variant:"filled"},e))}var se=Object(p.a)({root:{width:"50%",display:"grid",gridTemplateColumns:"1fr",gridGap:"1rem","&>div>input, &>textarea":{border:"none",fontSize:"1.5rem",padding:"10px",fontFamily:"inherit",width:"100%","&:focus":{outline:"2px solid ".concat(x)}},"&>div":{display:"flex","&>.send-button":{marginLeft:"1rem",background:x,border:"none",color:y,textTransform:"uppercase",padding:"0 2rem",transition:"all 300ms","&:hover":{background:"#0e98e9"},"&:focus":{outline:"none"}}},"@media (max-width: 1395px)":{width:"75%"},"@media (max-width: 1000px)":{width:"85%","& input, & textarea":{fontSize:"1rem"}}},loading:{color:x,marginLeft:"1rem"}}),pe=function(){var e=se(),t=Object(n.useState)({message:"",email:""}),a=Object(s.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)({open:!1,message:"",severity:"success"}),c=Object(s.a)(l,2),m=c[0],p=c[1],d=Object(n.useState)(!1),u=Object(s.a)(d,2),g=u[0],f=u[1],h=function(e){var t=e.target,a=t.value,n=t.name;i(Object(ne.a)(Object(ne.a)({},o),{},Object(ae.a)({},n,a)))},E=function(){var e=Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()){e.next=14;break}return e.prev=1,f(!0),e.next=5,ce.a.post("/email",o);case 5:e.sent,f(!1),p({open:!0,message:"your message has been sent!",severity:"success"}),i({message:"",email:""}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),p({open:!0,message:"message could not be submitted - it is not your fault!",severity:"error"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),x=function(){p(Object(ne.a)(Object(ne.a)({},m),{},{open:!1}))},v=function(){var e=o.message,t=o.email;if(e){if(t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))return!0;p({open:!0,message:"please enter a valid email",severity:"error"})}else p({open:!0,message:"please enter a message",severity:"error"});return!1};return r.a.createElement("div",{className:e.root},r.a.createElement(re.a,{open:m.open,autoHideDuration:6e3,onClose:x},r.a.createElement(me,{onClose:x,severity:m.severity},m.message)),r.a.createElement("textarea",{onChange:h,name:"message",value:o.message,rows:"7",placeholder:"Hello Elliot,"}),r.a.createElement("div",null,r.a.createElement("input",{onChange:h,name:"email",value:o.email,placeholder:"your@email.com"}),r.a.createElement("button",{className:"send-button",onClick:E},g?r.a.createElement(oe.a,{style:{color:y,height:"30px",width:"30px"}}):r.a.createElement("p",{style:{margin:"0",padding:"0",color:"currentColor"}},"SEND"))))},de=a(78),ue=a.n(de),ge=a(79),fe=a.n(ge),he=a(80),Ee=a.n(he),xe=Object(p.a)({root:{padding:"6rem","& a":{fontSize:"50px",color:x,margin:"2rem",transition:"all 300ms","&:hover":{color:w}},"@media (max-width: 1000px)":{padding:"4rem","& a":{fontSize:"40px"}},"@media (max-width: 675px)":{paddingBottom:"0rem","& a":{fontSize:"25px",margin:"0.5rem"}}}}),ve=function(){var e=xe();return r.a.createElement("div",{className:e.root},r.a.createElement("a",{target:"blank",href:"https://github.com/elliotfouts"},r.a.createElement(H.a,{style:{fontSize:"inherit"}})),r.a.createElement("a",{target:"blank",href:"https://www.linkedin.com/in/elliotfouts/"},r.a.createElement(ue.a,{style:{fontSize:"inherit"}})),r.a.createElement("a",{target:"blank",href:"https://www.instagram.com/efoutsy/"},r.a.createElement(fe.a,{style:{fontSize:"inherit"}})),r.a.createElement("a",{target:"blank",href:"https://twitter.com/efoutsy"},r.a.createElement(Ee.a,{style:{fontSize:"inherit"}})))},be=Object(p.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",background:v,marginTop:"9rem",padding:"3rem","&>div":{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"},"& p":{paddingTop:"7rem",color:w},"@media (max-width: 1395px)":{"&>div":{flexDirection:"column"},"& p":{paddingTop:"0rem"}},"@media (max-width: 1000px)":{padding:"2rem"}}}),we=function(){var e=be();return r.a.createElement("div",{id:"contact",className:e.root},r.a.createElement(L,{text:"Get in touch",style:{color:w}}),r.a.createElement("div",null,r.a.createElement(pe,null),r.a.createElement(ve,null)),r.a.createElement("p",null,"Copyright 2020"))},ye=function(){return r.a.createElement("div",null,r.a.createElement(O,null,r.a.createElement(W,null),r.a.createElement(q,null),r.a.createElement(we,null)))};var ke=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"*"},r.a.createElement(ye,null)))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root"))},59:function(e,t,a){var n={"./code.png":96,"./codifyDesktop.png":97,"./codifyMobile.png":98,"./gitConnected.png":99,"./grocerease.png":100,"./javascriptQuiz.png":101,"./weatherForecast.png":102};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=59},68:function(e,t,a){e.exports=a.p+"static/media/Elliot_Fouts_Resume.732a490a.pdf"},87:function(e,t,a){e.exports=a(123)},96:function(e,t,a){e.exports=a.p+"static/media/code.e765e3fe.png"},97:function(e,t,a){e.exports=a.p+"static/media/codifyDesktop.3b977052.png"},98:function(e,t,a){e.exports=a.p+"static/media/codifyMobile.f9233937.png"},99:function(e,t,a){e.exports=a.p+"static/media/gitConnected.057611a9.png"}},[[87,1,2]]]);
//# sourceMappingURL=main.d78a847d.chunk.js.map