"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[8557],{3882:function(e,s,a){var i=a(3504),r=a(4330),t=a(1694),n=a.n(t),l=a(184),c=function(e){var s=e.variant;return(0,l.jsx)(i.rU,{className:n()("btn","btn-soft-"+s,"shadow-none","btn-icon","btn-back-to-top"),id:"btn-back-to-top",to:"#",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:(0,l.jsx)(r.Z,{icon:"arrow-up",className:"icon-xxs"})})};c.defaultProps={variant:"primary"},s.Z=c},8486:function(e,s,a){a.d(s,{q:function(){return t}});var i=a(6971),r=a(184),t=function(e){var s=e.images,a=e.photoIndex,t=e.closeLightbox,n=e.moveNext,l=e.movePrev;return(0,r.jsx)(i.Z,{mainSrc:s[a].src,nextSrc:s[(a+1)%s.length].src,prevSrc:s[(a+s.length-1)%s.length].src,onCloseRequest:t,onMovePrevRequest:l,onMoveNextRequest:n,imageTitle:(0,r.jsx)("p",{children:s[a].caption}),mainSrcThumbnail:s[a].caption})}},2826:function(e,s,a){a.d(s,{y:function(){return N},J:function(){return l}});var i=a(1413),r=a(2791),t=a(4259),n=a(184),l=function(e){var s=e.defaultValues,a=e.resolver,l=e.children,c=e.onSubmit,o=e.formClass,m=(0,t.cI)({defaultValues:s,resolver:a}),d=m.handleSubmit,u=m.register,p=m.control,x=m.formState.errors;return(0,n.jsx)("form",{onSubmit:d(c),className:o,noValidate:!0,children:Array.isArray(l)?l.map((function(e){return e.props&&e.props.name?r.createElement(e.type,(0,i.Z)({},(0,i.Z)((0,i.Z)({},e.props),{},{register:u,key:e.props.name,errors:x,control:p}))):e})):l})},c=a(5987),o=a(9795),m=a(9410),d=["type","name","placeholder","register","errors","comp","rows","className","refCallback"],u=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],x=["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"],h=["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"],j=function(e){var s=e.type,a=e.name,r=e.placeholder,t=e.register,l=e.errors,m=e.comp,u=e.rows,p=e.className,x=e.refCallback,h=(0,c.Z)(e,d);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Control,(0,i.Z)((0,i.Z)({type:s,placeholder:r,name:a,as:m,id:a,ref:function(e){x&&x(e)},className:p,isInvalid:!(!l||!l[a])},t?t(a):{}),{},{rows:u},h)),l&&l[a]&&(0,n.jsx)(o.Z.Control.Feedback,{type:"invalid",className:"d-block",children:l[a].message})]})},b=function(e){var s=e.type,a=e.label,r=e.name,t=(e.placeholder,e.register),l=e.errors,m=(e.comp,e.rows,e.className),d=e.refCallback,p=(0,c.Z)(e,u);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Check,(0,i.Z)((0,i.Z)({type:s,label:a,name:r,id:r,ref:function(e){d&&d(e)},className:m,isInvalid:!(!l||!l[r])},t?t(r):{}),p)),l&&l[r]&&(0,n.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[r].message})]})},f=function(e){var s=e.type,a=e.label,r=e.name,t=(e.placeholder,e.register),l=e.errors,m=(e.comp,e.rows,e.className),d=e.refCallback,u=(0,c.Z)(e,p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Select,(0,i.Z)((0,i.Z)({type:s,label:a,name:r,id:r,ref:function(e){d&&d(e)},className:m,isInvalid:!(!l||!l[r])},t?t(r):{}),u)),l&&l[r]&&(0,n.jsx)(o.Z.Control.Feedback,{type:"invalid",children:l[r].message})]})},g=function(e){var s=e.startIcon,a=e.type,r=e.name,t=e.placeholder,l=e.comp,o=e.register,d=e.errors,u=e.rows,p=e.className,h=e.textClassName,b=e.refCallback,g=(0,c.Z)(e,x);return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(m.Z.Text,{className:h,children:s}),"select"===a?(0,n.jsx)(f,(0,i.Z)({type:a,name:r,placeholder:t,refCallback:b,comp:l,errors:d,register:o,className:p,rows:u},g)):(0,n.jsx)(j,(0,i.Z)({type:a,name:r,placeholder:t,refCallback:b,comp:l,errors:d,register:o,className:p,rows:u},g))]})},N=function(e){var s=e.startIcon,a=e.label,r=e.type,t=e.name,l=e.placeholder,m=e.register,d=e.errors,u=(e.control,e.className),p=e.labelClassName,x=e.containerClass,N=e.textClassName,v=e.refCallback,y=e.action,Z=e.rows,q=(0,c.Z)(e,h),w="textarea"===r?"textarea":"select"===r?"select":"input";return(0,n.jsx)(n.Fragment,{children:"hidden"===r?(0,n.jsx)("input",(0,i.Z)((0,i.Z)({type:r,name:t},m?m(t):{}),q)):(0,n.jsx)(n.Fragment,{children:"checkbox"===r||"radio"===r?(0,n.jsx)(o.Z.Group,{className:x,children:(0,n.jsx)(b,(0,i.Z)({type:r,label:a,name:t,placeholder:l,refCallback:v,errors:d,register:m,comp:w,className:u,rows:Z},q))}):"select"===r?(0,n.jsxs)(o.Z.Group,{className:x,children:[a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Label,{className:p,children:a}),y&&y]}),s?(0,n.jsx)(g,(0,i.Z)({type:r,startIcon:s,name:t,comp:w,textClassName:N,placeholder:l,refCallback:v,errors:d,register:m,className:u,rows:Z},q)):(0,n.jsx)(f,(0,i.Z)({type:r,name:t,placeholder:l,refCallback:v,errors:d,register:m,comp:w,className:u,rows:Z},q))]}):(0,n.jsxs)(o.Z.Group,{className:x,children:[a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z.Label,{className:p,children:a}),y&&y]}),s?(0,n.jsx)(g,(0,i.Z)({type:r,startIcon:s,name:t,comp:w,textClassName:N,placeholder:l,refCallback:v,errors:d,register:m,className:u,rows:Z},q)):(0,n.jsx)(j,(0,i.Z)({type:r,name:t,placeholder:l,refCallback:v,errors:d,register:m,comp:w,className:u,rows:Z},q))]})})})}},8557:function(e,s,a){a.r(s),a.d(s,{default:function(){return M}});var i=a(3790),r=a(4188),t=a(3882),n=a(7022),l=a(9743),c=a(2677),o=a(2461),m=a(5736),d=a(3504),u=a(4330),p=a(8895),x=a(184),h=function(){return(0,x.jsx)("section",{className:"hero-4 pb-5 pt-8 pt-lg-6 pb-sm-4",children:(0,x.jsxs)(n.Z,{children:[(0,x.jsx)(l.Z,{className:"justify-content-center",children:(0,x.jsxs)(c.Z,{lg:12,children:[(0,x.jsxs)(o.Z,{children:[(0,x.jsx)(o.Z.Item,{href:"#",children:"Home"}),(0,x.jsx)(o.Z.Item,{href:"#",children:"Blog"}),(0,x.jsx)(o.Z.Item,{active:!0,children:"Announcing-the-free-upgrade"})]}),(0,x.jsx)("div",{className:"mt-4",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(m.Z,{bg:"",className:"badge-soft-orange mb-1",children:"Announcement"})})}),(0,x.jsx)("h1",{className:"hero-title mt-0",children:"Announcing the free upgrade for the subscribed plans"})]})}),(0,x.jsxs)(l.Z,{className:"mt-4 align-items-center",children:[(0,x.jsx)(c.Z,{xs:"auto",children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("img",{className:"me-2 avatar avatar-sm rounded-circle avatar-border",src:p,alt:""}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{className:"m-0",children:(0,x.jsx)(d.rU,{to:"#",children:"Emily Blunt"})}),(0,x.jsx)("p",{className:"text-muted mb-0 fs-13",children:"11 Mar, 2020 \xb7 3 min read"})]})]})}),(0,x.jsx)(c.Z,{children:(0,x.jsx)("div",{className:"text-md-end",children:(0,x.jsxs)("ul",{className:"list-inline mb-0",children:[(0,x.jsx)("li",{className:"list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium",children:"Share:"}),(0,x.jsx)("li",{className:"list-inline-item me-2 align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-primary",icon:"facebook"})})}),(0,x.jsx)("li",{className:"list-inline-item me-2 align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-info",icon:"twitter"})})}),(0,x.jsx)("li",{className:"list-inline-item align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-danger",icon:"instagram"})})})]})})})]})]})})},j=a(9439),b=a(2791),f=a(9140),g=a(8486),N=function(e){var s=e.gallery,a=(s||[]).map((function(e){return e.image})),i=(0,b.useState)(!1),r=(0,j.Z)(i,2),t=r[0],n=r[1],o=(0,b.useState)(0),m=(0,j.Z)(o,2),u=m[0],p=m[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{"data-aos":"fade-up",children:(s||[]).map((function(e,s){return(0,x.jsx)(c.Z,{lg:6,children:(0,x.jsx)(d.rU,{to:"#",className:"image-popup",title:e.image.caption,onClick:function(){return function(e){p(e),n(!0)}(s)},children:(0,x.jsx)(f.Z,{className:"shadow rounded-sm",children:(0,x.jsx)(f.Z.Body,{className:"p-1",children:(0,x.jsx)("img",{src:e.image.src,alt:"",className:"img-fluid rounded-sm"})})})})},s.toString())}))}),t&&(0,x.jsx)(g.q,{images:a,photoIndex:u,closeLightbox:function(){n(!1)},moveNext:function(){p((function(e){return(e+1)%a.length}))},movePrev:function(){p((function(e){return(e+a.length-1)%a.length}))}})]})},v=function(e){var s=e.gallery;return(0,x.jsx)("section",{className:"position-relative pb-5",children:(0,x.jsx)(n.Z,{children:(0,x.jsx)(l.Z,{children:(0,x.jsxs)(c.Z,{lg:12,children:[(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa."}),(0,x.jsx)("p",{className:"mb-4",children:"Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni."}),(0,x.jsxs)("figure",{className:"figure",children:[(0,x.jsx)("img",{src:"https://source.unsplash.com/GXNo-OJynTQ/1920x720",alt:"",className:"figure-img img-fluid rounded"}),(0,x.jsx)("figcaption",{className:"figure-caption text-center",children:"The image caption referencing the above image"})]}),(0,x.jsx)("h3",{className:"mt-4",children:"Itaque earum rerum hic tenetur sapiente delectu"}),(0,x.jsx)("p",{className:"mb-2",children:"Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus."}),(0,x.jsxs)("blockquote",{className:"blockquote p-4 my-4 bg-light",children:[(0,x.jsx)("p",{className:"",children:"Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo tempore cum soluta."}),(0,x.jsx)("footer",{className:"blockquote-footer mt-0",children:(0,x.jsx)("small",{className:"fs-13",children:"Christian Hall"})})]}),(0,x.jsx)("p",{className:"pb-2",children:"At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et fuga."}),(0,x.jsx)("p",{className:"pb-2",children:"Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias consequ perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo."}),(0,x.jsx)("p",{className:"pb-2",children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate lit esse quam nihil molestiae consequatur eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est vel illum qui dolorem eum fugiat quo voluptas aperiam, eaque ipsa quae ab illo inventore."}),(0,x.jsx)("div",{className:"mt-4",children:(0,x.jsx)(N,{gallery:s})}),(0,x.jsx)("h5",{className:"mt-2",children:"Conclusion"}),(0,x.jsx)("p",{children:"Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat qui dolorem ipsum quia dolor sit amet consectetur velitsedquia non numquam eius modi tempora incidunt."}),(0,x.jsx)("p",{className:"mb-2",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)(u.Z,{className:"icon-xs icon me-2",icon:"minus"})," Dream places"]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)(u.Z,{className:"icon-xs icon me-2",icon:"minus"})," Walking/Hiking tours"]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)(u.Z,{className:"icon-xs icon me-2",icon:"minus"})," Tennis lessons with expert coaches"]}),(0,x.jsxs)("p",{className:"mb-2",children:[(0,x.jsx)(u.Z,{className:"icon-xs icon me-2",icon:"minus"})," Sailing adventures"]}),(0,x.jsxs)("div",{className:"mt-5",children:[(0,x.jsx)(d.rU,{className:"btn btn-sm btn-soft-secondary mb-1 me-1",to:"#",children:"Startup"}),(0,x.jsx)(d.rU,{className:"btn btn-sm btn-soft-secondary mb-1 me-1",to:"#",children:"Website Design"}),(0,x.jsx)(d.rU,{className:"btn btn-sm btn-soft-secondary mb-1 me-1",to:"#",children:"Website Development"}),(0,x.jsx)(d.rU,{className:"btn btn-sm btn-soft-secondary mb-1",to:"#",children:"Bootstrap"})]}),(0,x.jsxs)("ul",{className:"list-inline mb-0 mt-4",children:[(0,x.jsx)("li",{className:"list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium",children:"Share:"}),(0,x.jsx)("li",{className:"list-inline-item me-2 align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-primary",icon:"facebook"})})}),(0,x.jsx)("li",{className:"list-inline-item me-2 align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-info",icon:"twitter"})})}),(0,x.jsx)("li",{className:"list-inline-item align-middle",children:(0,x.jsx)(d.rU,{to:"#",children:(0,x.jsx)(u.Z,{className:"icon-xs icon-dual-danger",icon:"instagram"})})})]})]})})})})},y=a(468),Z=a(8396),q=a(8918),w=a(1152),k=(0,x.jsx)(y.Z,{id:"prev-popover",children:(0,x.jsx)(y.Z.Body,{children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("img",{src:q,width:"60",className:"me-3 rounded-sm",alt:"thumb"}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h6",{className:"fs-14 fw-semibold mt-0 mb-1",children:"Introducing new blazzing fast user interface"}),(0,x.jsx)("span",{className:"d-block fs-13 text-muted",children:"by Emily Blunt"})]})]})})}),C=(0,x.jsx)(y.Z,{id:"prev-popover",children:(0,x.jsx)(y.Z.Body,{children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("img",{src:w,width:"60",className:"me-3 rounded-sm",alt:"thumb"}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h6",{className:"fs-14 fw-semibold mt-0 mb-1",children:"What you should know before..."}),(0,x.jsx)("span",{className:"d-block fs-13 text-muted",children:"by Emily Blunt"})]})]})})}),S=function(){return(0,x.jsx)("section",{className:"position-relative pb-5",children:(0,x.jsx)(n.Z,{children:(0,x.jsxs)(l.Z,{className:"border-top border-bottom py-4 align-items-center",children:[(0,x.jsx)(c.Z,{lg:2,xs:6,children:(0,x.jsx)(Z.Z,{placement:"top",overlay:k,children:(0,x.jsxs)(d.rU,{to:"#",className:"btn btn-white",children:[(0,x.jsx)("i",{className:"icon-xs icon-left-arrow me-2"}),(0,x.jsx)("span",{className:"d-none d-sm-inline-flex",children:"Prev Post"})]})})}),(0,x.jsx)(c.Z,{lg:{offset:1,span:6},children:(0,x.jsx)("div",{className:"d-flex justify-content-lg-center py-lg-0 py-4",children:(0,x.jsxs)("div",{className:"d-flex align-items-center",children:[(0,x.jsx)("img",{className:"me-3 avatar avatar-sm rounded-circle align-self-center",src:p,alt:""}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h5",{className:"m-0",children:(0,x.jsx)(d.rU,{to:"#",children:"Emily Blunt"})}),(0,x.jsx)("p",{className:"text-muted mb-0 fs-14",children:"I write about the latest trend in web design and development."})]})]})})}),(0,x.jsx)(c.Z,{lg:{offset:1,span:2},className:"text-lg-end text-start col-6",children:(0,x.jsx)(Z.Z,{placement:"top",overlay:C,children:(0,x.jsxs)(d.rU,{to:"#",className:"btn btn-white",children:[(0,x.jsx)("span",{className:"d-none d-sm-inline-flex",children:"Next Post"}),(0,x.jsx)("i",{className:"icon-xs icon-right-arrow ms-2"})]})})})]})})})},P=a(3360),I=a(4259),U=a(1724),E=a(1265),R=a(2826),F=function(){var e=(0,E.X)(U.Ry().shape({name:U.Z_().required("Please enter Name"),email:U.Z_().required("Please enter Email").email("Please enter valid Email"),subject:U.Z_().required("Please enter Subject"),message:U.Z_().required("Please enter Message")})),s=(0,I.cI)({defaultValues:{},resolver:e}),a=s.handleSubmit,i=s.register,r=s.control,t=s.formState.errors;return(0,x.jsx)("div",{className:"mt-5 mb-lg-0 mb-5",children:(0,x.jsx)(f.Z,{className:"border",children:(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("h4",{className:"mb-3 mt-0",children:"Post a comment"}),(0,x.jsx)("form",{onSubmit:a((function(){})),className:"account-form",children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(R.y,{type:"text",placeholder:"Name",name:"name",containerClass:"mb-3",register:i,errors:t,control:r})}),(0,x.jsx)(c.Z,{md:6,children:(0,x.jsx)(R.y,{type:"email",placeholder:"Email",name:"email",containerClass:"mb-3",register:i,errors:t,control:r})}),(0,x.jsx)(c.Z,{md:12,children:(0,x.jsx)(R.y,{type:"text",placeholder:"Subject",name:"subject",containerClass:"mb-3",register:i,errors:t,control:r})}),(0,x.jsxs)(c.Z,{md:12,children:[(0,x.jsx)(R.y,{type:"textarea",rows:3,placeholder:"Message",name:"message",containerClass:"mb-3",register:i,errors:t,control:r}),(0,x.jsx)(P.Z,{type:"submit",variant:"secondary",children:"Submit"})]})]})})]})})})},A=a(4653),B=a(3065),T=function(){return(0,x.jsx)("section",{className:"position-relative pb-5",children:(0,x.jsx)(n.Z,{children:(0,x.jsx)(l.Z,{children:(0,x.jsxs)(c.Z,{lg:12,children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h4",{className:"mb-3",children:["Comments",(0,x.jsx)(m.Z,{bg:"",className:"badge-soft-secondary fs-14 align-middle ms-2",children:"3"})]}),(0,x.jsxs)("div",{className:"d-flex align-items-top mt-4",children:[(0,x.jsx)("img",{className:"me-2 rounded-sm",src:A,alt:"",height:"36"}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h6",{className:"m-0",children:"Sansa Stark "}),(0,x.jsx)("p",{className:"text-muted mb-0",children:(0,x.jsx)("small",{children:"2 days ago"})}),(0,x.jsx)("p",{className:"my-1",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."}),(0,x.jsx)("div",{children:(0,x.jsxs)(d.rU,{to:"#",className:"btn btn-sm btn-link text-primary fw-medium p-0",children:[(0,x.jsx)(u.Z,{className:"icon-xxs icon me-1",icon:"message-circle"}),"Reply"]})}),(0,x.jsxs)("div",{className:"d-flex align-items-top mt-4",children:[(0,x.jsx)("img",{className:"me-2 rounded-sm",src:B,alt:"",height:"36"}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h6",{className:"m-0",children:"Cersei Lannister "}),(0,x.jsx)("p",{className:"text-muted mb-0",children:(0,x.jsx)("small",{children:"1 day ago"})}),(0,x.jsx)("p",{className:"my-1",children:"Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias consequatur aut perferendis"}),(0,x.jsx)("div",{children:(0,x.jsxs)(d.rU,{to:"#",className:"btn btn-sm btn-link text-primary fw-medium p-0",children:[(0,x.jsx)(u.Z,{className:"icon-xxs icon me-1",icon:"message-circle"}),"Reply"]})})]})]})]})]}),(0,x.jsx)("hr",{className:"my-4"}),(0,x.jsxs)("div",{className:"d-flex align-items-top mt-4",children:[(0,x.jsx)("img",{className:"me-2 rounded-sm",src:A,alt:"",height:"36"}),(0,x.jsxs)("div",{className:"flex-grow-1",children:[(0,x.jsx)("h6",{className:"m-0",children:"Sansa Stark "}),(0,x.jsx)("p",{className:"text-muted mb-0",children:(0,x.jsx)("small",{children:"2 days ago"})}),(0,x.jsx)("p",{className:"my-1",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."}),(0,x.jsx)("div",{children:(0,x.jsxs)(d.rU,{to:"#",className:"btn btn-sm btn-link text-primary fw-medium p-0",children:[(0,x.jsx)(u.Z,{className:"icon-xxs icon me-1",icon:"message-circle"}),"Reply"]})})]})]})]}),(0,x.jsx)(F,{})]})})})})},W=a(9831),M=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(i.$_,{hideSearch:!0,fixedWidth:!0,navClass:"navbar-light zindex-10 shadow",buttonClass:"btn-outline-secondary btn-sm"}),(0,x.jsx)(h,{})]}),(0,x.jsx)(v,{gallery:W.lj}),(0,x.jsx)(S,{}),(0,x.jsx)(T,{}),(0,x.jsx)(r.Qc,{}),(0,x.jsx)(t.Z,{})]})}},9831:function(e,s,a){a.d(s,{bn:function(){return l},lj:function(){return c},vy:function(){return o}});var i=a(3205),r=a(3665),t=a(1905),n=a(1398),l=[{icon:"compass",title:"Relocation Support",description:"We'll help to move and get settled and handle the visa process for you"},{icon:"server",title:"Technology",description:"A special training to get start with our technical stack by professionals"},{icon:"dollar-sign",title:"Growth budget",description:"A specific budget for your professionals growth which you spend on throughout the year"},{icon:"users",title:"Team activities & retreats",description:"Many team building activities and retreat every quarter, so you don't get bored"},{icon:"map-pin",title:"Work from anywhere",description:"Work from anywhere you like. We offer remote working to all the employees"},{icon:"coffee",title:"Work/life balance",description:"Flexible work hours gives you complete balance with your personal and professional life."}],c=[{id:3,image:{src:i,caption:"Office Desks"}},{id:4,image:{src:r,caption:"Meeting Room view"}},{id:5,image:{src:n,caption:"Outside view"}},{id:6,image:{src:t,caption:"A common seating area"}}],o=[{category:"Engineering",jobs:[{designation:"Techical Support Engineer",type:"Remote"},{designation:"Senior Software Engineer (Frontend)",type:"Remote"},{designation:"Senior Software Engineer (Backend)",type:"Remote"},{designation:"Engineering Manager",type:"Remote"}]},{category:"Marketing",jobs:[{designation:"Junior copywriter/editor",type:"Remote"}]}]},2461:function(e,s,a){a.d(s,{Z:function(){return j}});var i=a(1413),r=a(5987),t=a(1694),n=a.n(t),l=a(2791),c=a(162),o=a(6445),m=a(184),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=l.forwardRef((function(e,s){var a=e.bsPrefix,t=e.active,l=e.children,u=e.className,p=e.as,x=void 0===p?"li":p,h=e.linkAs,j=void 0===h?o.Z:h,b=e.linkProps,f=e.href,g=e.title,N=e.target,v=(0,r.Z)(e,d),y=(0,c.vE)(a,"breadcrumb-item");return(0,m.jsx)(x,(0,i.Z)((0,i.Z)({ref:s},v),{},{className:n()(y,u,{active:t}),"aria-current":t?"page":void 0,children:t?l:(0,m.jsx)(j,(0,i.Z)((0,i.Z)({},b),{},{href:f,title:g,target:N,children:l}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var p=u,x=["bsPrefix","className","listProps","children","label","as"],h=l.forwardRef((function(e,s){var a=e.bsPrefix,t=e.className,l=e.listProps,o=e.children,d=e.label,u=e.as,p=void 0===u?"nav":u,h=(0,r.Z)(e,x),j=(0,c.vE)(a,"breadcrumb");return(0,m.jsx)(p,(0,i.Z)((0,i.Z)({"aria-label":d,className:t,ref:s},h),{},{children:(0,m.jsx)("ol",(0,i.Z)((0,i.Z)({},l),{},{className:n()(j,null==l?void 0:l.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};var j=Object.assign(h,{Item:p})},3065:function(e,s,a){e.exports=a.p+"static/media/img-6.9e6731872d1a4aedbba8.jpg"},8918:function(e,s,a){e.exports=a.p+"static/media/post1.6d5ba615b4707170662a.jpg"},1152:function(e,s,a){e.exports=a.p+"static/media/post2.320734477228a8441b62.jpg"},1398:function(e,s,a){e.exports=a.p+"static/media/10.df56c6ce62de070e170b.jpg"},3205:function(e,s,a){e.exports=a.p+"static/media/3.a9a1d7227876871395ce.jpg"},3665:function(e,s,a){e.exports=a.p+"static/media/4.10b70c4109d002ecdfd9.jpg"},1905:function(e,s,a){e.exports=a.p+"static/media/5.bf30a5c1ebb939a4153a.jpg"}}]);
//# sourceMappingURL=8557.db985274.chunk.js.map