"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[6929],{3997:function(e,s,a){var n=a(2791),i=a(3504),t=a(5912),r=a(7333),c=a(9140),l=a(5695),o=a(4330),d=a(1694),m=a.n(d),u=a(184),x=function(e){var s=e.children,a=e.eventKey,l=e.containerClass,d=e.linkClass,x=e.callback,h=(0,n.useContext)(t.Z).activeEventKey,p=(0,r.k)(a,(function(){return x&&x(a)})),f=h===a;return(0,u.jsx)(i.rU,{to:"#",className:m()(d,{collapsed:!f}),onClick:p,children:(0,u.jsx)(c.Z.Header,{children:(0,u.jsxs)("h5",{className:l,children:[s," ",(0,u.jsx)(o.Z,{icon:"chevron-down",className:"icon-xs accordion-arrow"})]})})})};s.Z=function(){return(0,u.jsx)("div",{id:"faqContent",children:(0,u.jsx)(l.Z,{defaultActiveKey:"0",className:"custom-accordionwitharrow",id:"accordionExample",children:([{question:"Can I use this template for my client?",ans:" Yup, the marketplace license allows you to use this theme in any end products.For more information on licenses, please refere license terms on marketplace."},{question:"Can this theme work with WordPress?",ans:"No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme."},{question:"How do I get help with the theme?",ans:"Use our dedicated support email (support@coderthemes.com) to send your issues or feedback.We are here to help anytime."},{question:"Will you regularly give updates of Prompt ?",ans:"Yes, We will update the Prompt regularly. All the future updates would be available without any cost."}]||[]).map((function(e,s){return(0,u.jsxs)(c.Z,{className:"mb-2 border rounded-sm",children:[(0,u.jsx)(x,{eventKey:String(s),containerClass:"my-1 fw-medium",linkClass:"text-dark",children:e.question}),(0,u.jsx)(l.Z.Collapse,{eventKey:String(s),children:(0,u.jsx)(c.Z.Body,{className:"text-muted pt-1",children:e.ans})})]},s.toString())}))})})}},4466:function(e,s,a){var n=a(1413),i=a(3504),t=a(9743),r=a(2677),c=a(9140),l=a(4330),o=a(1694),d=a.n(o),m=a(184);s.Z=function(e){var s=e.plans,a=e.containerClass,o=e.hasAnimation;return(0,m.jsx)(t.Z,{className:a,children:(s||[]).map((function(e,s){return(0,m.jsx)(r.Z,{lg:4,children:(0,m.jsx)(c.Z,(0,n.Z)((0,n.Z)({className:"border position-relative hoverable overflow-hidden"},o&&{"data-aos":"fade-up","data-aos-duration":100*(s+(7+s))}),{},{children:(0,m.jsxs)(c.Z.Body,{className:"text-center",children:[e.isPopular&&(0,m.jsx)("span",{className:"ribbon2 bg-primary text-white shadow",children:"Popular"}),(0,m.jsx)("h4",{className:"my-0 text-primary",children:e.name}),(0,m.jsxs)("h1",{className:"mb-0",children:[(0,m.jsx)("span",{className:"fw-normal text-muted fs-13 align-top",children:"$"}),(0,m.jsx)("span",{className:"fw-bolder display-5",children:e.price}),(0,m.jsx)("span",{className:"fw-normal text-muted fs-13 align-middle",children:e.duration})]}),(0,m.jsx)("ul",{className:"list-unstyled border-top py-4 mt-4 text-start",children:e.features.map((function(e,s){return(0,m.jsx)("li",{className:"py-2 d-flex align-items-center",children:e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,{icon:"check",className:"icon-xs text-success align-middle me-2"}),e]})},s.toString())}))}),(0,m.jsx)(i.rU,{to:"#",className:d()("btn",e.isRecommended?"btn-primary":"btn-soft-primary","d-block"),children:"Purchase Now"})]})}))},s.toString())}))})}},7383:function(e,s,a){var n=a(3504),i=a(9743),t=a(2677),r=a(9140),c=a(4330),l=a(1694),o=a.n(l),d=a(184);s.Z=function(e){var s=e.plans;return(0,d.jsx)(i.Z,{className:"mt-5",children:s.map((function(e,s){return(0,d.jsx)(t.Z,{lg:4,children:(0,d.jsxs)(r.Z,{className:"border hoverable",children:[e.isRecommended&&(0,d.jsx)("div",{className:"card-img-top-overlay d-none d-lg-block",children:(0,d.jsx)("span",{className:"card-badge top-right bg-warning text-white shadow-sm",children:"Recommended"})}),(0,d.jsxs)(r.Z.Body,{children:[(0,d.jsx)("h4",{className:"my-0 text-primary",children:e.name}),(0,d.jsxs)("h1",{children:[(0,d.jsx)("span",{className:"fw-normal text-muted fs-13 align-top",children:"$"}),(0,d.jsx)("span",{className:"fw-bolder display-5",children:e.price}),(0,d.jsx)("span",{className:"fw-normal text-muted fs-13 align-middle",children:e.duration})]}),(0,d.jsx)(n.rU,{to:"#",className:o()("btn",e.isRecommended?"btn-primary":"btn-soft-success","d-block"),children:"Purchase Now"}),(0,d.jsx)("ul",{className:"list-unstyled border-top pt-4 mt-4 text-start",children:e.features.map((function(e,s){return(0,d.jsxs)("li",{className:"py-2 d-flex align-items-center",children:[(0,d.jsx)(c.Z,{icon:"check",className:"icon-xs text-success align-middle me-2"}),e]},s.toString())}))})]})]})},s.toString())}))})}},6490:function(e,s,a){a.d(s,{I:function(){return n.Z}});var n=a(4466);a(7383)},3143:function(e,s,a){var n=a(1413),i=a(2558),t=a(6089),r=a(184);s.Z=function(e){var s=e.slides;return(0,r.jsx)(t.t,(0,n.Z)((0,n.Z)({modules:[i.tl,i.pt]},{breakpoints:{576:{slidesPerView:1.2},768:{slidesPerView:1}},pagination:{dynamicBullets:!0},roundLengths:!0,slidesPerView:1,loop:!0,spaceBetween:0,autoplay:{delay:5e3}}),{},{children:(s||[]).map((function(e,s){return(0,r.jsxs)(t.o,{children:[(0,r.jsx)("div",{className:"row text-center",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)("img",{src:e.image,alt:"",className:"w-75"})})}),(0,r.jsx)("div",{className:"row text-center my-4 pb-5",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("h5",{className:"fw-medium fs-16",children:e.slideTitle}),(0,r.jsx)("p",{className:"text-muted",children:e.description})]})})]},s.toString())}))}))}},244:function(e,s,a){a.d(s,{Q:function(){return d},R:function(){return m}});var n=a(201),i=a(236),t=a(3029),r=a(9064),c=a(918),l=a(5231),o=a(450),d=[{statement:" This app is a truly blessing for all professionals! A day to day project management was never easy for me.But with prompt, I can manage more than 100 projects easily.",customer:{avatar:n,name:"Cersei Lannister",designation:"Senior Project Manager"},logo:t.Z},{statement:"It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others.Simply loved it!",customer:{avatar:i,name:"John Stark",designation:"Engineering Director"},logo:r.Z}],m=[{image:c,slideTitle:"Manage your saas business with ease",description:"Make your saas application stand out with high-quality landing page designed and developed by professional."},{image:l,slideTitle:"The best way to showcase your mobile app",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."},{image:o,slideTitle:"Smart Solution that convert Lead to Customer",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."}]},1091:function(e,s,a){a.d(s,{Lm:function(){return l}});a(3143);var n=a(1413),i=a(9140),t=a(2558),r=a(6089),c=a(184),l=function(e){var s=e.slides,a=e.hasLogo;return(0,c.jsx)(r.t,(0,n.Z)((0,n.Z)({modules:[t.W_,t.pt]},{loop:!0,spaceBetween:24,autoplay:{delay:5e3},breakpoints:{768:{slidesPerView:1},1024:{slidesPerView:2}},roundLengths:!0,slidesPerView:1,navigation:{nextEl:".swiper-custom-next",prevEl:".swiper-custom-prev"}}),{},{children:(s||[]).map((function(e,s){return(0,c.jsx)(r.o,{children:(0,c.jsx)(i.Z,{className:"mb-0 border rounded",children:(0,c.jsxs)(i.Z.Body,{className:"testimonial-body shadow",children:[(0,c.jsx)("p",{className:"quotation-mark text-muted mb-0",children:"\u201c"}),(0,c.jsx)("h4",{className:"fw-normal mb-3 mt-0",children:e.statement}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"d-flex pt-2 align-items-center",children:[(0,c.jsx)("img",{src:e.customer.avatar,alt:"avtar",className:"me-2 rounded-circle",height:"36"}),(0,c.jsxs)("div",{className:"flex-grow-1",children:[(0,c.jsx)("h6",{className:"m-0",children:e.customer.name}),(0,c.jsx)("p",{className:"my-0 text-muted fs-13",children:e.customer.designation})]}),a&&(0,c.jsx)("img",{src:e.logo,alt:"logo",height:"32"})]})]})})},s.toString())}))}))};a(7430),a(4330)},9020:function(e,s,a){a.r(s),a.d(s,{default:function(){return O}});var n=a(3790),i=a(2581),t=a(3882),r=a(4188),c=a(2791),l=a(5912),o=a(7333),d=a(5695),m=a(7022),u=a(9743),x=a(2677),h=a(5736),p=a(3504),f=a(4330),j=a(1694),v=a.n(j),N=a(918),g=a(184),y=function(e){var s=e.children,a=e.eventKey,n=e.linkClass,i=e.callback,t=(0,c.useContext)(l.Z).activeEventKey,r=(0,o.k)(a,(function(){return i&&i(a)})),d=t===a;return(0,g.jsx)(p.rU,{to:"#",className:v()(n,{collapsed:!d}),onClick:r,children:s})},b=function(e){var s=e.item,a=e.index;return(0,g.jsxs)("div",{className:s.containerClass,children:[(0,g.jsx)("span",{className:v()("bg-soft-"+s.variant,"avatar","avatar-sm","rounded-lg","icon","icon-with-bg","icon-xs","text-"+s.variant,"me-3","flex-shrink-0"),children:(0,g.jsx)(f.Z,{icon:s.avatar,className:v()("icon-dual-"+s.variant)})}),(0,g.jsxs)("div",{className:"flex-grow-1",children:[(0,g.jsx)(y,{eventKey:String(a),containerClass:"m-0",linkClass:"text-dark h4",children:s.title}),(0,g.jsx)(d.Z.Collapse,{eventKey:String(a),children:(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"text-muted mt-1 mb-4",children:s.description}),(0,g.jsxs)(p.rU,{to:"#",className:"h6 text-primary",children:["Learn more",(0,g.jsx)(f.Z,{className:"ms-1 icon-xxs",icon:"arrow-right"})]})]})})]})]})},Z=function(e){var s=e.features,a=e.containerClass;return(0,g.jsx)("section",{className:a,children:(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(u.Z,{className:"justify-content-center",children:(0,g.jsxs)(x.Z,{className:"text-center",children:[(0,g.jsx)(h.Z,{pill:!0,bg:"",className:"badge-soft-primary px-2 py-1",children:"Features"}),(0,g.jsx)("h1",{className:"display-5 fw-medium",children:"Better Management. Better Performance"}),(0,g.jsxs)("p",{className:"text-muted mx-auto",children:["Start working with ",(0,g.jsx)("span",{className:"text-primary fw-bold",children:"Prompt"})," to manage your workforce better"]})]})}),(0,g.jsxs)(u.Z,{className:"pt-5 align-items-center features-3",children:[(0,g.jsx)(x.Z,{lg:6,children:(0,g.jsx)("div",{className:"img-content position-relative",children:(0,g.jsx)("div",{className:"img-up mb-lg-0 mb-6",children:(0,g.jsx)("img",{src:N,alt:"",className:"img-fluid d-block rounded","data-aos":"fade-right","data-aos-duration":"200"})})})}),(0,g.jsx)(x.Z,{lg:{offset:1,span:5},children:(0,g.jsx)("div",{id:"features-list","data-aos":"fade-up","data-aos-duration":"300",children:(0,g.jsx)(d.Z,{defaultActiveKey:"0",children:(s||[]).map((function(e,s){return(0,g.jsx)(b,{item:e,index:s},s.toString())}))})})})]})]})})},w=a(5231),k=function(){return(0,g.jsx)("section",{className:"position-relative overflow-hidden py-7 features-3",children:(0,g.jsx)(m.Z,{children:(0,g.jsxs)(u.Z,{className:"align-items-center",children:[(0,g.jsx)(x.Z,{lg:5,children:(0,g.jsxs)("div",{className:"mb-5 mb-lg-0","data-aos":"fade-up","data-aos-duration":"200",children:[(0,g.jsx)("span",{className:"bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 mb-4",children:(0,g.jsx)(f.Z,{icon:"disc",className:"icon-dual-primary"})}),(0,g.jsx)("h1",{className:"text-dark",children:"Smart Payroll. Paying your people couldn't be easier"}),(0,g.jsx)("p",{className:"text-muted my-4",children:"You can modify your pages with drag-dropping , can import demos with just \u201d One Click\u201d and can modify theme setting easy-to-use options panel."}),(0,g.jsxs)(p.rU,{to:"#",className:"h6 text-primary pt-3",children:["Learn more",(0,g.jsx)(f.Z,{className:"ms-1 icon-xxs",icon:"arrow-right"})]})]})}),(0,g.jsx)(x.Z,{lg:{offset:1,span:6},children:(0,g.jsx)("div",{className:"img-content2 position-relative",children:(0,g.jsx)("div",{className:"img-up",children:(0,g.jsx)("img",{src:w,alt:"app img",className:"img-fluid d-block rounded","data-aos":"fade-left","data-aos-duration":"300"})})})})]})})})},C=function(){return(0,g.jsx)("section",{className:"position-relative pb-6 pt-lg-6 pt-4 features-3",children:(0,g.jsxs)(m.Z,{"data-aos":"fade-up","data-aos-duration":"500",children:[(0,g.jsx)(u.Z,{className:"justify-content-center",children:(0,g.jsx)(x.Z,{className:"text-center",children:(0,g.jsx)("h3",{className:"fw-medium mb-5",children:"Many more powerful features"})})}),(0,g.jsxs)(u.Z,{children:[(0,g.jsxs)(x.Z,{lg:3,md:6,children:[(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Hire and Retain Top Talent"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Team Management"]})]}),(0,g.jsxs)(x.Z,{lg:3,md:6,children:[(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Stay Compliant"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Improve Productivity"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Improve Experience"]})]}),(0,g.jsxs)(x.Z,{lg:3,md:6,children:[(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Self-service Time Tracking"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Performance Management"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Expert HR"]})]}),(0,g.jsxs)(x.Z,{lg:3,md:6,children:[(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"New Hire Checklist"]}),(0,g.jsxs)("h6",{className:"fw-medium fs-16 mb-4",children:[(0,g.jsx)(f.Z,{className:"icon-sm icon-dual-success me-2",icon:"check"}),"Tax Calculator"]})]})]}),(0,g.jsx)(u.Z,{className:"mt-5 justify-content-center",children:(0,g.jsx)(x.Z,{xs:"auto",children:(0,g.jsxs)(p.rU,{to:"#",className:"btn btn-primary mb-2",children:["Sign Up Now ",(0,g.jsx)(f.Z,{className:"icon-xs ms-2",icon:"arrow-right"})]})})})]})})},P=a(3029),S=a(9064),A=a(5557);var K=a.p+"static/media/spotify.482c49d0676163701adc2562fdd5a6ab.svg",E=a(354),T=function(){return(0,g.jsxs)("section",{className:"section pt-8 pb-6 bg-gradient3 position-relative",children:[(0,g.jsx)("div",{className:"divider top d-none d-sm-block"}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(u.Z,{"data-aos":"fade-up","data-aos-duration":"200",children:(0,g.jsxs)(x.Z,{className:"text-center",children:[(0,g.jsx)(h.Z,{pill:!0,bg:"",className:"badge-soft-primary px-2 py-1",children:"Clients"}),(0,g.jsx)("h1",{className:"display-5 fw-medium",children:"The smart people management you need"}),(0,g.jsxs)("p",{className:"text-muted mx-auto",children:["21,000+ organizations trust ",(0,g.jsx)("span",{className:"text-primary fw-bold",children:"Prompt"})," to drive perfomance & engagement"]}),(0,g.jsxs)("ul",{className:"list-inline mt-5",children:[(0,g.jsx)("li",{className:"list-inline-item mx-4 mx-xl-5 mb-3",children:(0,g.jsx)("img",{src:P.Z,alt:"",height:"32"})}),(0,g.jsx)("li",{className:"list-inline-item mx-4 mx-xl-5 mb-3",children:(0,g.jsx)("img",{src:S.Z,alt:"",height:"32"})}),(0,g.jsx)("li",{className:"list-inline-item mx-4 mx-xl-5 mb-3",children:(0,g.jsx)("img",{src:A.Z,alt:"",height:"32"})}),(0,g.jsx)("li",{className:"list-inline-item mx-4 mx-xl-5 mb-3",children:(0,g.jsx)("img",{src:K,alt:"",height:"32"})}),(0,g.jsx)("li",{className:"list-inline-item mx-4 mx-xl-5 mb-3",children:(0,g.jsx)("img",{src:E.Z,alt:"",height:"32"})})]})]})})})]})},U=a(3360),R=a(1091),B=a(244),I=function(){return(0,g.jsx)("section",{className:"section pt-5 pb-7 py-sm-9 position-relative features-4",children:(0,g.jsx)(m.Z,{children:(0,g.jsxs)(u.Z,{className:"testimonials-2","data-aos":"fade-up","data-aos-duration":"200",children:[(0,g.jsxs)(x.Z,{lg:3,children:[(0,g.jsx)(u.Z,{className:"align-items-center",children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(h.Z,{pill:!0,bg:"",className:"badge-soft-primary px-2 py-1",children:"Feedback"}),(0,g.jsx)("h1",{className:"display-5 fw-medium",children:"What people say"}),(0,g.jsx)("p",{className:"text-muted mx-auto",children:"Few valuables words from our customers"})]})}),(0,g.jsx)(u.Z,{className:"mt-3",children:(0,g.jsx)(x.Z,{xs:"auto",className:"text-sm-right pt-2 pt-sm-0",children:(0,g.jsxs)("div",{className:"navigations",children:[(0,g.jsx)(U.Z,{variant:"link",className:"text-normal p-0 swiper-custom-prev",children:(0,g.jsx)(f.Z,{icon:"arrow-left",className:"icon-dual"})}),(0,g.jsx)(U.Z,{variant:"link",className:"text-normal p-0 swiper-custom-next",children:(0,g.jsx)(f.Z,{icon:"arrow-right",className:"icon-dual"})})]})})})]}),(0,g.jsx)(x.Z,{lg:{span:8,offset:1},children:(0,g.jsx)("div",{className:"slider",children:(0,g.jsx)(R.Lm,{slides:B.Q})})})]})})})},H=a(6490),q=function(e){var s=e.plans;return(0,g.jsxs)("section",{className:"section py-6 py-sm-8 bg-gradient3 position-relative",children:[(0,g.jsx)("div",{className:"divider top d-none d-sm-block"}),(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(u.Z,{children:(0,g.jsxs)(x.Z,{className:"text-center",children:[(0,g.jsx)(h.Z,{pill:!0,bg:"",className:"badge-soft-primary px-2 py-1",children:"Plans"}),(0,g.jsx)("h1",{className:"display-5 fw-medium",children:"Pricing Plans"}),(0,g.jsxs)("p",{className:"text-muted mx-auto",children:["Pricing that ",(0,g.jsx)("span",{className:"text-primary fw-bold",children:"works"})," for everyone"]})]})}),(0,g.jsx)(H.I,{plans:s,hasAnimation:!0,containerClass:"align-items-center mt-0 mt-sm-5"})]})]})},L=a(3997),M=function(){return(0,g.jsx)("section",{className:"section py-6 pt-sm-6 position-relative",children:(0,g.jsxs)(m.Z,{"data-aos":"fade-up","data-aos-duration":"2000",children:[(0,g.jsx)(u.Z,{children:(0,g.jsxs)(x.Z,{className:"text-center",children:[(0,g.jsx)(h.Z,{pill:!0,bg:"",className:"badge-soft-primary px-2 py-1",children:"FAQs"}),(0,g.jsx)("h1",{className:"display-5 fw-medium",children:"Frequently Asked Questions"}),(0,g.jsx)("p",{className:"text-muted mx-auto",children:"Here are some of the basic types of questions for our customers"})]})}),(0,g.jsx)(u.Z,{className:"justify-content-center mt-5",children:(0,g.jsx)(x.Z,{md:10,lg:8,children:(0,g.jsx)(L.Z,{})})}),(0,g.jsx)(u.Z,{className:"justify-content-center mt-5",children:(0,g.jsx)(x.Z,{xs:"auto",children:(0,g.jsx)("div",{className:"rounded d-inline-block py-2 px-3 alert bg-light",children:(0,g.jsx)("div",{className:"align-items-center",children:(0,g.jsxs)("div",{className:"text-dark",children:["Still have unanswered questions? ",(0,g.jsx)(p.rU,{to:"#",children:"Contact Us"})]})})})})})]})})},F=[{avatar:"users",title:"Improve Employee Experience",description:"Before we dive into why companies must invest in employee experience (EX), it\u2019s important to understand what this concept entails.",variant:"primary",containerClass:"d-flex border-bottom pb-4"},{avatar:"user-plus",title:"Hiring & Onboarding",description:"Post your job, interview candidates and make offers, all on Prompt. Start hiring today.",variant:"success",containerClass:"d-flex border-bottom py-4"},{avatar:"bar-chart",title:"People Data & Analytics",description:"Finding committed employees is one of public and private organizations\u2019 top priorities.",variant:"orange",containerClass:"d-flex pt-4"}],W=[{id:1,name:"Starter",price:"49",duration:"/ month",features:["Up to 600 minutes usage time","Use for personal only","Add up to 10 attendees","1 User","Technical support via email"],isRecommended:!1},{id:2,name:"Professional",price:"99",duration:"/ month",features:["Up to 6000 minutes usage time","Use for personal or a commercial","Add up to 100 attendees","Up to 5 teams","Technical support via email"],isRecommended:!0},{id:3,name:"Enterprise",price:"599",duration:"/ month",features:["Unlimited usage time","Use for personal or a commercial","Add Unlimited attendees","24x7 Technical support via phone","Technical support via email"],isRecommended:!1}],O=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(n.A3,{navClass:"navbar-light",isSticky:!1,fixedWidth:!0,buttonClass:"btn-primary btn-sm"}),(0,g.jsx)(i.tn,{})]}),(0,g.jsx)(Z,{features:F,containerClass:"position-relative overflow-hidden py-4 pb-lg-7"}),(0,g.jsx)(k,{}),(0,g.jsx)(C,{}),(0,g.jsx)(T,{}),(0,g.jsx)(I,{}),(0,g.jsx)(q,{plans:W}),(0,g.jsx)(M,{}),(0,g.jsx)(r.gH,{}),(0,g.jsx)(t.Z,{})]})}},5695:function(e,s,a){a.d(s,{Z:function(){return A}});var n=a(1413),i=a(5987),t=a(1694),r=a.n(t),c=a(2791),l=a(2592),o=a(162),d=a(7858),m=a(5912),u=a(184),x=["as","bsPrefix","className","children","eventKey"],h=c.forwardRef((function(e,s){var a=e.as,t=void 0===a?"div":a,l=e.bsPrefix,h=e.className,p=e.children,f=e.eventKey,j=(0,i.Z)(e,x),v=(0,c.useContext)(m.Z).activeEventKey;return l=(0,o.vE)(l,"accordion-collapse"),(0,u.jsx)(d.Z,(0,n.Z)((0,n.Z)({ref:s,in:(0,m.T)(v,f)},j),{},{className:r()(h,l),children:(0,u.jsx)(t,{children:c.Children.only(p)})}))}));h.displayName="AccordionCollapse";var p=h,f=a(8410),j=["as","bsPrefix","className"],v=c.forwardRef((function(e,s){var a=e.as,t=void 0===a?"div":a,l=e.bsPrefix,d=e.className,m=(0,i.Z)(e,j);l=(0,o.vE)(l,"accordion-body");var x=(0,c.useContext)(f.Z).eventKey;return(0,u.jsx)(p,{eventKey:x,children:(0,u.jsx)(t,(0,n.Z)((0,n.Z)({ref:s},m),{},{className:r()(d,l)}))})}));v.displayName="AccordionBody";var N=v,g=a(7333),y=["as","bsPrefix","className","children","onClick"],b=c.forwardRef((function(e,s){var a=e.as,t=void 0===a?"h2":a,c=e.bsPrefix,l=e.className,d=e.children,m=e.onClick,x=(0,i.Z)(e,y);return c=(0,o.vE)(c,"accordion-header"),(0,u.jsx)(t,(0,n.Z)((0,n.Z)({ref:s},x),{},{className:r()(l,c),children:(0,u.jsx)(g.Z,{onClick:m,children:d})}))}));b.displayName="AccordionHeader";var Z=b,w=["as","bsPrefix","className","eventKey"],k=c.forwardRef((function(e,s){var a=e.as,t=void 0===a?"div":a,l=e.bsPrefix,d=e.className,m=e.eventKey,x=(0,i.Z)(e,w);l=(0,o.vE)(l,"accordion-item");var h=(0,c.useMemo)((function(){return{eventKey:m}}),[m]);return(0,u.jsx)(f.Z.Provider,{value:h,children:(0,u.jsx)(t,(0,n.Z)((0,n.Z)({ref:s},x),{},{className:r()(d,l)}))})}));k.displayName="AccordionItem";var C=k,P=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],S=c.forwardRef((function(e,s){var a=(0,l.Ch)(e,{activeKey:"onSelect"}),t=a.as,d=void 0===t?"div":t,x=a.activeKey,h=a.bsPrefix,p=a.className,f=a.onSelect,j=a.flush,v=a.alwaysOpen,N=(0,i.Z)(a,P),g=(0,o.vE)(h,"accordion"),y=(0,c.useMemo)((function(){return{activeEventKey:x,onSelect:f,alwaysOpen:v}}),[x,f,v]);return(0,u.jsx)(m.Z.Provider,{value:y,children:(0,u.jsx)(d,(0,n.Z)((0,n.Z)({ref:s},N),{},{className:r()(p,g,j&&"".concat(g,"-flush"))}))})}));S.displayName="Accordion";var A=Object.assign(S,{Button:g.Z,Collapse:p,Item:C,Header:Z,Body:N})},7333:function(e,s,a){a.d(s,{k:function(){return h}});var n=a(1413),i=a(5987),t=a(3433),r=a(2791),c=a(1694),l=a.n(c),o=a(5912),d=a(8410),m=a(162),u=a(184),x=["as","bsPrefix","className","onClick"];function h(e,s){var a=(0,r.useContext)(o.Z),n=a.activeEventKey,i=a.onSelect,c=a.alwaysOpen;return function(a){var r=e===n?null:e;c&&(r=Array.isArray(n)?n.includes(e)?n.filter((function(s){return s!==e})):[].concat((0,t.Z)(n),[e]):[e]),null==i||i(r,a),null==s||s(a)}}var p=r.forwardRef((function(e,s){var a=e.as,t=void 0===a?"button":a,c=e.bsPrefix,p=e.className,f=e.onClick,j=(0,i.Z)(e,x);c=(0,m.vE)(c,"accordion-button");var v=(0,r.useContext)(d.Z).eventKey,N=h(v,f),g=(0,r.useContext)(o.Z).activeEventKey;return"button"===t&&(j.type="button"),(0,u.jsx)(t,(0,n.Z)((0,n.Z)({ref:s,onClick:N},j),{},{"aria-expanded":v===g,className:l()(p,c,!(0,o.T)(g,v)&&"collapsed")}))}));p.displayName="AccordionButton",s.Z=p},5912:function(e,s,a){function n(e,s){return Array.isArray(e)?e.includes(s):e===s}a.d(s,{T:function(){return n}});var i=a(2791).createContext({});i.displayName="AccordionContext",s.Z=i},8410:function(e,s,a){var n=a(2791).createContext({eventKey:""});n.displayName="AccordionItemContext",s.Z=n},5736:function(e,s,a){var n=a(1413),i=a(5987),t=a(1694),r=a.n(t),c=a(2791),l=a(162),o=a(184),d=["bsPrefix","bg","pill","text","className","as"],m=c.forwardRef((function(e,s){var a=e.bsPrefix,t=e.bg,c=e.pill,m=e.text,u=e.className,x=e.as,h=void 0===x?"span":x,p=(0,i.Z)(e,d),f=(0,l.vE)(a,"badge");return(0,o.jsx)(h,(0,n.Z)((0,n.Z)({ref:s},p),{},{className:r()(u,f,c&&"rounded-pill",m&&"text-".concat(m),t&&"bg-".concat(t))}))}));m.displayName="Badge",m.defaultProps={bg:"primary",pill:!1},s.Z=m},6144:function(e,s,a){var n=a(1413),i=a(5987),t=a(1694),r=a.n(t),c=a(2791),l=a(162),o=a(184),d=["bsPrefix","size","vertical","className","as"],m=c.forwardRef((function(e,s){var a=e.bsPrefix,t=e.size,c=e.vertical,m=e.className,u=e.as,x=void 0===u?"div":u,h=(0,i.Z)(e,d),p=(0,l.vE)(a,"btn-group"),f=p;return c&&(f="".concat(p,"-vertical")),(0,o.jsx)(x,(0,n.Z)((0,n.Z)({},h),{},{ref:s,className:r()(m,f,t&&"".concat(p,"-").concat(t))}))}));m.displayName="ButtonGroup",m.defaultProps={vertical:!1,role:"group"},s.Z=m},2479:function(e,s,a){a(2791);!function(e){if(e&&"undefined"!==typeof window){var s=document.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=e,document.head.appendChild(s)}}("@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}")}}]);
//# sourceMappingURL=6929.1c94e032.chunk.js.map