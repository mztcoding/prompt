"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[3766],{3882:function(e,s,n){var a=n(3504),t=n(4330),l=n(1694),i=n.n(l),c=n(184),r=function(e){var s=e.variant;return(0,c.jsx)(a.rU,{className:i()("btn","btn-soft-"+s,"shadow-none","btn-icon","btn-back-to-top"),id:"btn-back-to-top",to:"#",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:(0,c.jsx)(t.Z,{icon:"arrow-up",className:"icon-xxs"})})};r.defaultProps={variant:"primary"},s.Z=r},3997:function(e,s,n){var a=n(2791),t=n(3504),l=n(5912),i=n(7333),c=n(9140),r=n(5695),o=n(4330),d=n(1694),m=n.n(d),x=n(184),h=function(e){var s=e.children,n=e.eventKey,r=e.containerClass,d=e.linkClass,h=e.callback,u=(0,a.useContext)(l.Z).activeEventKey,j=(0,i.k)(n,(function(){return h&&h(n)})),f=u===n;return(0,x.jsx)(t.rU,{to:"#",className:m()(d,{collapsed:!f}),onClick:j,children:(0,x.jsx)(c.Z.Header,{children:(0,x.jsxs)("h5",{className:r,children:[s," ",(0,x.jsx)(o.Z,{icon:"chevron-down",className:"icon-xs accordion-arrow"})]})})})};s.Z=function(){return(0,x.jsx)("div",{id:"faqContent",children:(0,x.jsx)(r.Z,{defaultActiveKey:"0",className:"custom-accordionwitharrow",id:"accordionExample",children:([{question:"Can I use this template for my client?",ans:" Yup, the marketplace license allows you to use this theme in any end products.For more information on licenses, please refere license terms on marketplace."},{question:"Can this theme work with WordPress?",ans:"No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme."},{question:"How do I get help with the theme?",ans:"Use our dedicated support email (support@coderthemes.com) to send your issues or feedback.We are here to help anytime."},{question:"Will you regularly give updates of Prompt ?",ans:"Yes, We will update the Prompt regularly. All the future updates would be available without any cost."}]||[]).map((function(e,s){return(0,x.jsxs)(c.Z,{className:"mb-2 border rounded-sm",children:[(0,x.jsx)(h,{eventKey:String(s),containerClass:"my-1 fw-medium",linkClass:"text-dark",children:e.question}),(0,x.jsx)(r.Z.Collapse,{eventKey:String(s),children:(0,x.jsx)(c.Z.Body,{className:"text-muted pt-1",children:e.ans})})]},s.toString())}))})})}},5735:function(e,s,n){var a=n(4533),t=n(5353),l=n(6871),i=n(3504),c=n(4330),r=n(1694),o=n.n(r),d=n(184);s.Z=function(e){var s=e.navClass,n=e.buttonClass,r=e.showDownload,m=e.loggedInUser,x=(0,l.TH)(),h=function(e){return!!x.pathname&&x.pathname.includes(e)};return(0,d.jsxs)(a.Z,{as:"ul",className:o()("align-items-lg-center",s),children:[(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/home",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Home"})}),(0,d.jsxs)(t.Z,{as:"li",className:"nav-item","aria-labelledby":"navbarPages",children:[(0,d.jsxs)(t.Z.Toggle,{as:a.Z.Link,id:"accountPages",className:o()(h("/pages/account")?"active":""),children:["Account ",(0,d.jsx)("div",{className:"arrow"})]}),(0,d.jsx)(t.Z.Menu,{renderOnMount:!0,children:(0,d.jsxs)(a.Z,{as:"ul",navbar:!1,children:[(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/account/dashboard",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Dashboard"})}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/account/settings",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Settings"})})]})})]}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/company",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Company"})}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/career",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Career"})}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/pricing",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Pricing"})}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/contact",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Contact"})}),(0,d.jsxs)(t.Z,{as:"li",className:"nav-item",children:[(0,d.jsxs)(t.Z.Toggle,{as:a.Z.Link,id:"navbarPages",className:o()(h("/pages")?"active":""),children:["Others ",(0,d.jsx)(c.Z,{icon:"chevron-down",className:"d-inline-block icon icon-xxs ms-1 mt-lg-0 mt-1"})]}),(0,d.jsx)(t.Z.Menu,{renderOnMount:!0,children:(0,d.jsx)(a.Z,{as:"ul",navbar:!1,children:(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/pages/help",end:!0,className:o()("nav-link",(function(e){return Object.assign({},e)&&"active"})),children:"Help"})})})})]}),r&&(0,d.jsxs)(d.Fragment,{children:[m?(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/auth/logout",className:"nav-link btn me-2 shadow-none",children:"Logout"})}):(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.OL,{to:"/auth/login",className:"nav-link btn me-2 shadow-none",children:"Log In"})}),(0,d.jsx)(a.Z.Item,{as:"li",children:(0,d.jsx)(i.rU,{to:"#",className:o()("btn",n),children:"Download"})})]})]})}},9226:function(e,s,n){var a=n(9439),t=n(2791),l=n(9506),i=n(7022),c=n(4533),r=n(1694),o=n.n(r),d=n(7217),m=n(5735),x=n(4427),h=n(1931),u=n(184);s.Z=function(e){var s=e.isSticky,n=e.navClass,r=e.buttonClass,j=e.fixedWidth,f=e.hideSearch,p=(0,d.aF)(),N=(0,a.Z)(p,1)[0];return(0,t.useEffect)((function(){var e=document.getElementById("btn-back-to-top"),s=document.getElementById("sticky");window.addEventListener("scroll",(function(n){n.preventDefault(),e&&(document.body.scrollTop>=50||document.documentElement.scrollTop>=50?e.classList.add("show"):e.classList.remove("show")),s&&(document.body.scrollTop>=240||document.documentElement.scrollTop>=240?s.classList.add("navbar-sticky"):s.classList.remove("navbar-sticky"))}))}),[]),(0,u.jsx)("header",{children:(0,u.jsx)(l.Z,{id:s?"sticky":"",collapseOnSelect:!0,expand:"lg",className:o()("topnav-menu",n),children:(0,u.jsxs)(i.Z,{fluid:!j,children:[(0,u.jsxs)(l.Z.Brand,{href:"/",className:"logo",children:[(0,u.jsx)("img",{src:x,height:"30",className:"align-top logo-dark",alt:""}),(0,u.jsx)("img",{src:h,height:"30",className:"align-top logo-light",alt:""})]}),(0,u.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,u.jsxs)(l.Z.Collapse,{id:"topnav-menu-content",children:[!f&&(0,u.jsx)(c.Z,{className:"align-items-lg-center d-flex me-auto",children:(0,u.jsx)(c.Z.Item,{as:"li",children:(0,u.jsx)("form",{id:"search",className:"form-inline d-none d-sm-flex",children:(0,u.jsxs)("div",{className:"form-control-with-hint ms-lg-2 ms-xl-4",children:[(0,u.jsx)("input",{type:"text",className:"form-control",id:"search-input",placeholder:"What are you looking for?"}),(0,u.jsx)("span",{className:"form-control-feedback uil uil-search fs-16"})]})})})}),(0,u.jsx)(m.Z,{showDownload:!0,loggedInUser:N,navClass:"ms-auto",buttonClass:r||"btn-primary"})]})]})})})}},4678:function(e,s,n){var a=n(9439),t=n(2791),l=n(9506),i=n(7022),c=n(4533),r=n(1694),o=n.n(r),d=n(7217),m=n(5735),x=n(4427),h=n(184);s.Z=function(e){var s=e.isSticky,n=e.navClass,r=(e.buttonClass,e.fixedWidth),u=e.hideSearch,j=(0,d.aF)(),f=(0,a.Z)(j,1)[0];return(0,t.useEffect)((function(){var e=document.getElementById("btn-back-to-top"),s=document.getElementById("sticky");window.addEventListener("scroll",(function(n){n.preventDefault(),e&&(document.body.scrollTop>=50||document.documentElement.scrollTop>=50?e.classList.add("show"):e.classList.remove("show")),s&&(document.body.scrollTop>=240||document.documentElement.scrollTop>=240?s.classList.add("navbar-sticky"):s.classList.remove("navbar-sticky"))}))}),[]),(0,h.jsx)("header",{children:(0,h.jsx)(l.Z,{id:s?"sticky":"",collapseOnSelect:!0,expand:"lg",className:o()("topnav-menu",n),children:(0,h.jsxs)(i.Z,{fluid:!r,children:[(0,h.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav",className:"me-3"}),(0,h.jsx)(l.Z.Brand,{href:"/",className:"me-lg-4 me-auto",children:(0,h.jsx)("img",{src:x,height:"30",className:"d-inline-block align-top",alt:""})}),(0,h.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[!u&&(0,h.jsx)(c.Z,{className:"align-items-lg-center d-flex",children:(0,h.jsx)(c.Z.Item,{as:"li",children:(0,h.jsx)("form",{id:"search",className:"form-inline d-none d-sm-flex me-lg-3",children:(0,h.jsxs)("div",{className:"form-control-with-hint ms-lg-2 ms-xl-4",children:[(0,h.jsx)("input",{type:"text",className:"form-control",id:"search-input",placeholder:"What are you looking for?"}),(0,h.jsx)("span",{className:"form-control-feedback uil uil-search fs-16"})]})})})}),(0,h.jsx)(m.Z,{showDownload:!0,loggedInUser:f})]})]})})})}},3194:function(e,s,n){var a=n(9439),t=n(2791),l=n(9506),i=n(7022),c=n(4533),r=n(3504),o=n(1694),d=n.n(o),m=n(7217),x=n(5735),h=n(4427),u=n(184);s.Z=function(e){var s=e.isSticky,n=e.navClass,o=e.buttonClass,j=e.fixedWidth,f=(0,m.aF)(),p=(0,a.Z)(f,1)[0];return(0,t.useEffect)((function(){var e=document.getElementById("btn-back-to-top"),s=document.getElementById("sticky");window.addEventListener("scroll",(function(n){n.preventDefault(),e&&(document.body.scrollTop>=50||document.documentElement.scrollTop>=50?e.classList.add("show"):e.classList.remove("show")),s&&(document.body.scrollTop>=240||document.documentElement.scrollTop>=240?s.classList.add("navbar-sticky"):s.classList.remove("navbar-sticky"))}))}),[]),(0,u.jsx)("header",{children:(0,u.jsx)(l.Z,{id:s?"sticky":"",collapseOnSelect:!0,expand:"lg",className:d()("topnav-menu",n),children:(0,u.jsxs)(i.Z,{fluid:!j,children:[(0,u.jsx)(l.Z.Brand,{href:"/",children:(0,u.jsx)("img",{src:h,height:"30",className:"d-inline-block align-top",alt:""})}),(0,u.jsx)(l.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,u.jsxs)(l.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,u.jsx)(x.Z,{navClass:"mx-auto",buttonClass:o||"btn-primary"}),(0,u.jsxs)(c.Z,{as:"ul",className:"align-items-lg-center",children:[p?(0,u.jsx)(c.Z.Item,{as:"li",children:(0,u.jsx)(r.OL,{to:"/auth/logout",className:"btn btn-sm me-2 fw-medium fs-15 shadow-none text-dark",children:"Logout"})}):(0,u.jsx)(c.Z.Item,{as:"li",children:(0,u.jsx)(r.OL,{to:"/auth/login",className:"btn btn-sm me-2 fw-medium fs-15 shadow-none text-dark",children:"Log In"})}),(0,u.jsx)(c.Z.Item,{as:"li",children:(0,u.jsx)(r.rU,{to:"#",className:d()("btn",o||"btn-soft-primary"),children:"Download"})})]})]})]})})})}},7752:function(e,s,n){n.d(s,{Z:function(){return Z}});var a=n(9506),t=n(7022),l=n(4533),i=n(1694),c=n.n(i),r=n(4330),o=n(184),d=function(){return(0,o.jsxs)(l.Z,{as:"ul",className:"mx-auto",children:[(0,o.jsx)(l.Z.Item,{as:"li",className:"pe-3",children:(0,o.jsx)(l.Z.Link,{href:"/",className:"active",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:"icon-xxs me-1 flex-shrink-0",children:(0,o.jsx)(r.Z,{icon:"grid",className:"icon-dual-primary"})}),(0,o.jsx)("div",{className:"flex-grow-1",children:"Home"})]})})}),(0,o.jsx)(l.Z.Item,{as:"li",className:"pe-3",children:(0,o.jsx)(l.Z.Link,{href:"/",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:"icon-xxs me-1 flex-shrink-0",children:(0,o.jsx)(r.Z,{icon:"folder",className:"icon-dual-dark"})}),(0,o.jsx)("div",{className:"flex-grow-1",children:"Projects"})]})})}),(0,o.jsx)(l.Z.Item,{as:"li",className:"pe-3",children:(0,o.jsx)(l.Z.Link,{href:"/",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:"icon-xxs me-1 flex-shrink-0",children:(0,o.jsx)(r.Z,{icon:"list",className:"icon-dual-dark"})}),(0,o.jsx)("div",{className:"flex-grow-1",children:"Tasks"})]})})}),(0,o.jsx)(l.Z.Item,{as:"li",className:"pe-3",children:(0,o.jsx)(l.Z.Link,{href:"/",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:"icon-xxs me-1 flex-shrink-0",children:(0,o.jsx)(r.Z,{icon:"bar-chart-2",className:"icon-dual-dark"})}),(0,o.jsx)("div",{className:"flex-grow-1",children:"Reports"})]})})}),(0,o.jsx)(l.Z.Item,{as:"li",className:"pe-3",children:(0,o.jsx)(l.Z.Link,{href:"/",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:"icon-xxs me-1 flex-shrink-0",children:(0,o.jsx)(r.Z,{icon:"tool",className:"icon-dual-dark"})}),(0,o.jsx)("div",{className:"flex-grow-1",children:"Settings"})]})})})]})},m=n(3504),x=n(5353),h=function(e){var s=e.notifications;return(0,o.jsxs)(x.Z,{as:"li",className:"nav-item",children:[(0,o.jsx)(x.Z.Toggle,{as:l.Z.Link,id:"notifications",children:(0,o.jsx)("span",{className:"icon-xs",children:(0,o.jsx)(r.Z,{icon:"bell",className:"icon-dual-dark"})})}),(0,o.jsxs)(x.Z.Menu,{className:"p-2",renderOnMount:!0,children:[(s||[]).map((function(e,s){return(0,o.jsx)(x.Z.Item,{className:"p-2",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("span",{className:c()("bg-soft-"+e.variant,"text-"+e.variant,"avatar","avatar-xs","rounded icon","icon-with-bg","icon-xxs","me-3","flex-shink-0"),children:(0,o.jsx)(r.Z,{icon:e.icon,className:c()("icon-dual-"+e.variant)})}),(0,o.jsxs)("div",{className:"flex-grow-1",children:[(0,o.jsx)("h6",{className:"fw-medium my-0 fs-13",children:e.text}),(0,o.jsx)("span",{className:"text-muted",children:(0,o.jsx)("small",{children:e.time})})]})]})},s.toString())})),(0,o.jsx)(m.rU,{to:"#",className:"btn btn-light btn-sm bg-light text-center fs-13 d-block mt-2",children:"View All"})]})]})},u=n(2791),j=n(201),f=function(e){var s=e.profileOptions;return(0,o.jsxs)(x.Z,{as:"li",className:"nav-item",children:[(0,o.jsx)(x.Z.Toggle,{as:l.Z.Link,id:"user",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("div",{className:"flex-shrink-0",children:(0,o.jsx)("img",{src:j,alt:"user",className:"avatar avatar-xs rounded-circle me-2"})}),(0,o.jsxs)("div",{className:"flex-grow-1 ms-1 lh-base",children:[(0,o.jsx)("span",{className:"fw-semibold fs-13 d-block line-height-normal",children:"Greeva N"}),(0,o.jsx)("span",{className:"text-muted fs-13",children:"Admin"})]})]})}),(0,o.jsx)(x.Z.Menu,{className:"p-2",renderOnMount:!0,children:(s||[]).map((function(e,n){return(0,o.jsxs)(u.Fragment,{children:[n===s.length-1&&(0,o.jsx)(x.Z.Divider,{as:"div"}),(0,o.jsxs)(x.Z.Item,{className:"p-2",children:[(0,o.jsx)(r.Z,{icon:e.icon,className:"icon icon-xxs me-1 icon-dual"}),e.label]})]},n.toString())}))})]})},p=[{icon:"user-plus",variant:"primary",text:"New User Registered",time:"2 min ago"},{icon:"message-square",variant:"orange",text:"A new comment on your post",time:"3 min ago"},{icon:"paperclip",variant:"success",text:"A new message from",time:"10 min ago"},{icon:"heart",variant:"danger",text:"A new like on your comment",time:"14 min ago"}],N=[{icon:"user",label:"Profile",redirectTo:"#"},{icon:"settings",label:"Settings",redirectTo:"#"},{icon:"aperture",label:"Support",redirectTo:"#"},{icon:"unlock",label:"Sign Out",redirectTo:"#"}],v=n(4427),g=n(1931),Z=function(e){var s=e.isSticky,n=e.navClass,i=e.fixedWidth;return(0,o.jsx)("header",{children:(0,o.jsx)(a.Z,{id:s?"sticky":"",collapseOnSelect:!0,expand:"lg",className:c()("topnav-menu",n),children:(0,o.jsxs)(t.Z,{fluid:!i,children:[(0,o.jsxs)(a.Z.Brand,{href:"/",className:"logo",children:[(0,o.jsx)("img",{src:v,height:"30",className:"align-top logo-dark",alt:""}),(0,o.jsx)("img",{src:g,height:"30",className:"align-top logo-light",alt:""})]}),(0,o.jsx)(a.Z.Toggle,{className:"me-3","aria-controls":"topnav-menu-content4"}),(0,o.jsxs)(a.Z.Collapse,{id:"topnav-menu-content4",children:[(0,o.jsx)(d,{}),(0,o.jsxs)(l.Z,{as:"ul",className:"align-items-lg-center",children:[(0,o.jsx)(h,{notifications:p}),(0,o.jsx)(f,{profileOptions:N})]})]})]})})})}},3790:function(e,s,n){n.d(s,{$_:function(){return a.Z},A3:function(){return t.Z},X8:function(){return l.Z}});var a=n(9226),t=(n(4678),n(3194)),l=n(7752)},3766:function(e,s,n){n.r(s),n.d(s,{default:function(){return g}});var a=n(7022),t=n(9743),l=n(2677),i=n(3790),c=n(3882),r=n(4330),o=n(184),d=function(){return(0,o.jsx)("section",{className:"hero-4 pb-5 pt-7 py-sm-7 bg-gradient2",children:(0,o.jsx)(a.Z,{children:(0,o.jsx)(t.Z,{className:"justify-content-center",children:(0,o.jsxs)(l.Z,{lg:7,className:"text-center",children:[(0,o.jsx)("h1",{className:"hero-title",children:"How can we help?"}),(0,o.jsx)("p",{className:"fs-17 text-muted",children:"Explore our knowledge badge to learn more about all the functionality Prompt is offering. If you don't find what you are looking, feel free to contact our support team."}),(0,o.jsx)("div",{className:"mt-5",children:(0,o.jsxs)("div",{className:"form-control-with-hint",children:[(0,o.jsx)("input",{type:"text",className:"form-control",id:"query",name:"query",placeholder:"Ask a question..."}),(0,o.jsx)("span",{className:"form-control-feedback",children:(0,o.jsx)(r.Z,{className:"icon-xs",icon:"search"})})]})}),(0,o.jsxs)(t.Z,{className:"align-items-center mt-1 g-0",children:[(0,o.jsx)(l.Z,{xs:"auto",children:(0,o.jsx)("div",{className:"fw-medium text-uppercase text-muted mb-0 fs-13",children:"Recent searches:"})}),(0,o.jsx)(l.Z,{className:"text-start",children:(0,o.jsx)("div",{className:"text-muted ps-2",children:"How to prepare upload documents, Linking Payment Account"})})]})]})})})})},m=n(3504),x=function(e){var s=e.helpLinks;return(0,o.jsx)(t.Z,{children:(s||[]).map((function(e,s){return(0,o.jsx)(l.Z,{md:4,children:(0,o.jsxs)("div",{className:"mb-5 mb-lg-0",children:[(0,o.jsx)("span",{className:"icon icon-sm text-primary",children:(0,o.jsx)(r.Z,{icon:e.icon,className:"icon-dual-primary"})}),(0,o.jsx)("h4",{className:"mt-4 fw-semibold mb-0",children:e.title}),(0,o.jsx)("ul",{className:"list-unstyled text-muted mb-4",children:(e.links||[]).map((function(e,s){return(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:e})},s.toString())}))}),(0,o.jsxs)(m.rU,{to:"#",className:"text-primary fw-medium",children:["View More ",(0,o.jsx)(r.Z,{className:"icon-xs ms-1",icon:"chevron-right"})]})]})},s.toString())}))})},h=n(3997),u=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{className:"mt-7 fw-semibold mb-0",children:"Frequently Asked Questions"}),(0,o.jsx)("p",{className:"text-muted mx-auto",children:"Here are some of the basic types of questions for our customers"}),(0,o.jsx)(t.Z,{className:"mt-3",children:(0,o.jsx)(l.Z,{lg:10,children:(0,o.jsx)("div",{className:"mt-3 mb-lg-0 mb-4",children:(0,o.jsx)(h.Z,{})})})})]})},j=n(9140),f=function(){return(0,o.jsx)(j.Z,{className:"rounded border sticky-el",children:(0,o.jsxs)(j.Z.Body,{className:"px-5 py-4",children:[(0,o.jsxs)("h4",{className:"fw-medium",children:[(0,o.jsx)(r.Z,{className:"icon icon-sm text-muted me-3",icon:"life-buoy"}),"Support center"]}),(0,o.jsxs)("h5",{className:"text-muted fw-normal mb-4 pb-3",children:[(0,o.jsx)("span",{className:"fw-medium",children:"Can't find the answer?"})," We are here to help you all the time."]}),(0,o.jsx)("h5",{className:"fw-normal",children:(0,o.jsxs)(m.rU,{to:"/pages/contact",className:"text-muted",children:[(0,o.jsx)(r.Z,{className:"icon-xs me-2",icon:"message-square"}),"Talk to Support Team"]})}),(0,o.jsx)("h5",{className:"fw-normal mt-3",children:(0,o.jsxs)(m.rU,{to:"#",className:"text-muted",children:[(0,o.jsx)(r.Z,{className:"icon-xs me-2",icon:"mail"}),"help@coderthemes.com"]})}),(0,o.jsx)("h5",{className:"fw-normal mt-3",children:(0,o.jsxs)(m.rU,{to:"#",className:"text-muted",children:[(0,o.jsx)(r.Z,{className:"icon-xs me-2",icon:"twitter"}),"@coderthemes"]})})]})})},p=n(4427),N=function(){return(0,o.jsx)("section",{className:"mt-lg-5 pt-5 pb-4 bg-gradient3 position-relative",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(t.Z,{children:[(0,o.jsxs)(l.Z,{md:4,children:[(0,o.jsx)(m.rU,{className:"navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0",to:"#",children:(0,o.jsx)("img",{src:p,height:"30",alt:""})}),(0,o.jsx)("p",{className:"text-muted w-75",children:"Make your web application stand out with high-quality landing page"})]}),(0,o.jsx)(l.Z,{md:"auto",sm:6,children:(0,o.jsxs)("div",{className:"ps-md-5",children:[(0,o.jsx)("h6",{className:"mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase",children:" Platform"}),(0,o.jsxs)("ul",{className:"list-unstyled",children:[(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Demo"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Pricing"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Integrations"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Status"})})]})]})}),(0,o.jsx)(l.Z,{md:"auto",sm:6,children:(0,o.jsxs)("div",{className:"ps-md-5",children:[(0,o.jsx)("h6",{className:"mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase",children:"Knowledge Base"}),(0,o.jsxs)("ul",{className:"list-unstyled",children:[(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Blog"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Help Center"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Sales Tools catalog"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"API"})})]})]})}),(0,o.jsx)(l.Z,{md:"auto",sm:6,children:(0,o.jsxs)("div",{className:"ps-md-5",children:[(0,o.jsx)("h6",{className:"mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase",children:"Company"}),(0,o.jsxs)("ul",{className:"list-unstyled",children:[(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"About Us"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Career"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Contact Us"})})]})]})}),(0,o.jsx)(l.Z,{md:"auto",sm:6,children:(0,o.jsxs)("div",{className:"ps-md-5",children:[(0,o.jsx)("h6",{className:"mb-4 mt-5 mt-sm-2 fs-14 fw-semibold text-uppercase",children:"Legal"}),(0,o.jsxs)("ul",{className:"list-unstyled",children:[(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Usage Policy"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Privacy Policy"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Terms of Service"})}),(0,o.jsx)("li",{className:"my-3",children:(0,o.jsx)(m.rU,{to:"#",className:"text-muted",children:"Trust"})})]})]})})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(t.Z,{className:"text-md-start text-center",children:[(0,o.jsx)(l.Z,{md:6,children:(0,o.jsxs)("p",{className:"pb-0 mb-0 text-muted",children:[(new Date).getFullYear()," \xa9 Prompt. All rights reserved. Crafted by"," ",(0,o.jsx)("a",{href:"https://coderthemes.com/",children:"Coderthemes"})]})}),(0,o.jsx)(l.Z,{md:6,className:"text-md-end",children:(0,o.jsx)("div",{className:"align-items-end mt-md-0 mt-4",children:(0,o.jsxs)("ul",{className:"list-unstyled mb-0",children:[(0,o.jsx)("li",{className:"d-inline-block me-4",children:(0,o.jsx)(m.rU,{to:"#",children:(0,o.jsx)(r.Z,{icon:"facebook",className:"icon icon-xs"})})}),(0,o.jsx)("li",{className:"d-inline-block me-4",children:(0,o.jsx)(m.rU,{to:"#",children:(0,o.jsx)(r.Z,{icon:"twitter",className:"icon icon-xs"})})}),(0,o.jsx)("li",{className:"d-inline-block",children:(0,o.jsx)(m.rU,{to:"#",children:(0,o.jsx)(r.Z,{icon:"linkedin",className:"icon icon-xs"})})})]})})})]})]})})},v=[{icon:"terminal",title:"Getting started",links:["General information","Signup help","Preparing the documents"]},{icon:"user",title:"Managing my account",links:["Account information","Identity verification","Linking a paymeny method"]},{icon:"git-merge",title:"API & Integrations",links:["Rest API Integrations","API SDKs","Embed scripts"]}],g=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(i.$_,{hideSearch:!0,fixedWidth:!0,navClass:"navbar-light zindex-10",buttonClass:"btn-outline-secondary btn-sm"}),(0,o.jsx)(d,{})]}),(0,o.jsx)("section",{className:"section py-5 py-lg-8 mb-5 mb-sm-0 position-relative",children:(0,o.jsx)(a.Z,{children:(0,o.jsxs)(t.Z,{children:[(0,o.jsxs)(l.Z,{lg:8,children:[(0,o.jsx)(x,{helpLinks:v}),(0,o.jsx)(u,{})]}),(0,o.jsx)(l.Z,{lg:4,children:(0,o.jsx)(f,{})})]})})}),(0,o.jsx)(N,{}),(0,o.jsx)(c.Z,{})]})}},5695:function(e,s,n){n.d(s,{Z:function(){return P}});var a=n(1413),t=n(5987),l=n(1694),i=n.n(l),c=n(2791),r=n(2592),o=n(162),d=n(7858),m=n(5912),x=n(184),h=["as","bsPrefix","className","children","eventKey"],u=c.forwardRef((function(e,s){var n=e.as,l=void 0===n?"div":n,r=e.bsPrefix,u=e.className,j=e.children,f=e.eventKey,p=(0,t.Z)(e,h),N=(0,c.useContext)(m.Z).activeEventKey;return r=(0,o.vE)(r,"accordion-collapse"),(0,x.jsx)(d.Z,(0,a.Z)((0,a.Z)({ref:s,in:(0,m.T)(N,f)},p),{},{className:i()(u,r),children:(0,x.jsx)(l,{children:c.Children.only(j)})}))}));u.displayName="AccordionCollapse";var j=u,f=n(8410),p=["as","bsPrefix","className"],N=c.forwardRef((function(e,s){var n=e.as,l=void 0===n?"div":n,r=e.bsPrefix,d=e.className,m=(0,t.Z)(e,p);r=(0,o.vE)(r,"accordion-body");var h=(0,c.useContext)(f.Z).eventKey;return(0,x.jsx)(j,{eventKey:h,children:(0,x.jsx)(l,(0,a.Z)((0,a.Z)({ref:s},m),{},{className:i()(d,r)}))})}));N.displayName="AccordionBody";var v=N,g=n(7333),Z=["as","bsPrefix","className","children","onClick"],b=c.forwardRef((function(e,s){var n=e.as,l=void 0===n?"h2":n,c=e.bsPrefix,r=e.className,d=e.children,m=e.onClick,h=(0,t.Z)(e,Z);return c=(0,o.vE)(c,"accordion-header"),(0,x.jsx)(l,(0,a.Z)((0,a.Z)({ref:s},h),{},{className:i()(r,c),children:(0,x.jsx)(g.Z,{onClick:m,children:d})}))}));b.displayName="AccordionHeader";var y=b,k=["as","bsPrefix","className","eventKey"],w=c.forwardRef((function(e,s){var n=e.as,l=void 0===n?"div":n,r=e.bsPrefix,d=e.className,m=e.eventKey,h=(0,t.Z)(e,k);r=(0,o.vE)(r,"accordion-item");var u=(0,c.useMemo)((function(){return{eventKey:m}}),[m]);return(0,x.jsx)(f.Z.Provider,{value:u,children:(0,x.jsx)(l,(0,a.Z)((0,a.Z)({ref:s},h),{},{className:i()(d,r)}))})}));w.displayName="AccordionItem";var C=w,I=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],L=c.forwardRef((function(e,s){var n=(0,r.Ch)(e,{activeKey:"onSelect"}),l=n.as,d=void 0===l?"div":l,h=n.activeKey,u=n.bsPrefix,j=n.className,f=n.onSelect,p=n.flush,N=n.alwaysOpen,v=(0,t.Z)(n,I),g=(0,o.vE)(u,"accordion"),Z=(0,c.useMemo)((function(){return{activeEventKey:h,onSelect:f,alwaysOpen:N}}),[h,f,N]);return(0,x.jsx)(m.Z.Provider,{value:Z,children:(0,x.jsx)(d,(0,a.Z)((0,a.Z)({ref:s},v),{},{className:i()(j,g,p&&"".concat(g,"-flush"))}))})}));L.displayName="Accordion";var P=Object.assign(L,{Button:g.Z,Collapse:j,Item:C,Header:y,Body:v})},7333:function(e,s,n){n.d(s,{k:function(){return u}});var a=n(1413),t=n(5987),l=n(3433),i=n(2791),c=n(1694),r=n.n(c),o=n(5912),d=n(8410),m=n(162),x=n(184),h=["as","bsPrefix","className","onClick"];function u(e,s){var n=(0,i.useContext)(o.Z),a=n.activeEventKey,t=n.onSelect,c=n.alwaysOpen;return function(n){var i=e===a?null:e;c&&(i=Array.isArray(a)?a.includes(e)?a.filter((function(s){return s!==e})):[].concat((0,l.Z)(a),[e]):[e]),null==t||t(i,n),null==s||s(n)}}var j=i.forwardRef((function(e,s){var n=e.as,l=void 0===n?"button":n,c=e.bsPrefix,j=e.className,f=e.onClick,p=(0,t.Z)(e,h);c=(0,m.vE)(c,"accordion-button");var N=(0,i.useContext)(d.Z).eventKey,v=u(N,f),g=(0,i.useContext)(o.Z).activeEventKey;return"button"===l&&(p.type="button"),(0,x.jsx)(l,(0,a.Z)((0,a.Z)({ref:s,onClick:v},p),{},{"aria-expanded":N===g,className:r()(j,c,!(0,o.T)(g,N)&&"collapsed")}))}));j.displayName="AccordionButton",s.Z=j},5912:function(e,s,n){function a(e,s){return Array.isArray(e)?e.includes(s):e===s}n.d(s,{T:function(){return a}});var t=n(2791).createContext({});t.displayName="AccordionContext",s.Z=t},8410:function(e,s,n){var a=n(2791).createContext({eventKey:""});a.displayName="AccordionItemContext",s.Z=a},201:function(e,s,n){e.exports=n.p+"static/media/img-8.c267b43bec8bd66f19b2.jpg"},1931:function(e,s,n){e.exports=n.p+"static/media/logo-light.245cc8d840a0a0ff40ae.png"},4427:function(e,s,n){e.exports=n.p+"static/media/logo.09120addfd68a935385a.png"}}]);
//# sourceMappingURL=3766.2ce165c2.chunk.js.map