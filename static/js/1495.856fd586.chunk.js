"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[1495],{3029:function(e,a,r){r(2791);a.Z=r.p+"static/media/amazon.7c6888d17c8158f608833bdd6006f4f7.svg"},9064:function(e,a,r){r(2791);a.Z=r.p+"static/media/google.1bb5de275cfd8bc45d9aa17446eddb81.svg"},2826:function(e,a,r){r.d(a,{y:function(){return y},J:function(){return o}});var s=r(1413),n=r(2791),t=r(4259),i=r(184),o=function(e){var a=e.defaultValues,r=e.resolver,o=e.children,c=e.onSubmit,l=e.formClass,d=(0,t.cI)({defaultValues:a,resolver:r}),m=d.handleSubmit,p=d.register,u=d.control,f=d.formState.errors;return(0,i.jsx)("form",{onSubmit:m(c),className:l,noValidate:!0,children:Array.isArray(o)?o.map((function(e){return e.props&&e.props.name?n.createElement(e.type,(0,s.Z)({},(0,s.Z)((0,s.Z)({},e.props),{},{register:p,key:e.props.name,errors:f,control:u}))):e})):o})},c=r(5987),l=r(9795),d=r(9410),m=["type","name","placeholder","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],u=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],f=["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"],g=["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"],h=function(e){var a=e.type,r=e.name,n=e.placeholder,t=e.register,o=e.errors,d=e.comp,p=e.rows,u=e.className,f=e.refCallback,g=(0,c.Z)(e,m);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Control,(0,s.Z)((0,s.Z)({type:a,placeholder:n,name:r,as:d,id:r,ref:function(e){f&&f(e)},className:u,isInvalid:!(!o||!o[r])},t?t(r):{}),{},{rows:p},g)),o&&o[r]&&(0,i.jsx)(l.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message})]})},b=function(e){var a=e.type,r=e.label,n=e.name,t=(e.placeholder,e.register),o=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,u=(0,c.Z)(e,p);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Check,(0,s.Z)((0,s.Z)({type:a,label:r,name:n,id:n,ref:function(e){m&&m(e)},className:d,isInvalid:!(!o||!o[n])},t?t(n):{}),u)),o&&o[n]&&(0,i.jsx)(l.Z.Control.Feedback,{type:"invalid",children:o[n].message})]})},x=function(e){var a=e.type,r=e.label,n=e.name,t=(e.placeholder,e.register),o=e.errors,d=(e.comp,e.rows,e.className),m=e.refCallback,p=(0,c.Z)(e,u);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Select,(0,s.Z)((0,s.Z)({type:a,label:r,name:n,id:n,ref:function(e){m&&m(e)},className:d,isInvalid:!(!o||!o[n])},t?t(n):{}),p)),o&&o[n]&&(0,i.jsx)(l.Z.Control.Feedback,{type:"invalid",children:o[n].message})]})},v=function(e){var a=e.startIcon,r=e.type,n=e.name,t=e.placeholder,o=e.comp,l=e.register,m=e.errors,p=e.rows,u=e.className,g=e.textClassName,b=e.refCallback,v=(0,c.Z)(e,f);return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(d.Z.Text,{className:g,children:a}),"select"===r?(0,i.jsx)(x,(0,s.Z)({type:r,name:n,placeholder:t,refCallback:b,comp:o,errors:m,register:l,className:u,rows:p},v)):(0,i.jsx)(h,(0,s.Z)({type:r,name:n,placeholder:t,refCallback:b,comp:o,errors:m,register:l,className:u,rows:p},v))]})},y=function(e){var a=e.startIcon,r=e.label,n=e.type,t=e.name,o=e.placeholder,d=e.register,m=e.errors,p=(e.control,e.className),u=e.labelClassName,f=e.containerClass,y=e.textClassName,j=e.refCallback,Z=e.action,N=e.rows,w=(0,c.Z)(e,g),C="textarea"===n?"textarea":"select"===n?"select":"input";return(0,i.jsx)(i.Fragment,{children:"hidden"===n?(0,i.jsx)("input",(0,s.Z)((0,s.Z)({type:n,name:t},d?d(t):{}),w)):(0,i.jsx)(i.Fragment,{children:"checkbox"===n||"radio"===n?(0,i.jsx)(l.Z.Group,{className:f,children:(0,i.jsx)(b,(0,s.Z)({type:n,label:r,name:t,placeholder:o,refCallback:j,errors:m,register:d,comp:C,className:p,rows:N},w))}):"select"===n?(0,i.jsxs)(l.Z.Group,{className:f,children:[r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Label,{className:u,children:r}),Z&&Z]}),a?(0,i.jsx)(v,(0,s.Z)({type:n,startIcon:a,name:t,comp:C,textClassName:y,placeholder:o,refCallback:j,errors:m,register:d,className:p,rows:N},w)):(0,i.jsx)(x,(0,s.Z)({type:n,name:t,placeholder:o,refCallback:j,errors:m,register:d,comp:C,className:p,rows:N},w))]}):(0,i.jsxs)(l.Z.Group,{className:f,children:[r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z.Label,{className:u,children:r}),Z&&Z]}),a?(0,i.jsx)(v,(0,s.Z)({type:n,startIcon:a,name:t,comp:C,textClassName:y,placeholder:o,refCallback:j,errors:m,register:d,className:p,rows:N},w)):(0,i.jsx)(h,(0,s.Z)({type:n,name:t,placeholder:o,refCallback:j,errors:m,register:d,comp:C,className:p,rows:N},w))]})})})}},3143:function(e,a,r){var s=r(1413),n=r(2558),t=r(6089),i=r(184);a.Z=function(e){var a=e.slides;return(0,i.jsx)(t.t,(0,s.Z)((0,s.Z)({modules:[n.tl,n.pt]},{breakpoints:{576:{slidesPerView:1.2},768:{slidesPerView:1}},pagination:{dynamicBullets:!0},roundLengths:!0,slidesPerView:1,loop:!0,spaceBetween:0,autoplay:{delay:5e3}}),{},{children:(a||[]).map((function(e,a){return(0,i.jsxs)(t.o,{children:[(0,i.jsx)("div",{className:"row text-center",children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)("img",{src:e.image,alt:"",className:"w-75"})})}),(0,i.jsx)("div",{className:"row text-center my-4 pb-5",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("h5",{className:"fw-medium fs-16",children:e.slideTitle}),(0,i.jsx)("p",{className:"text-muted",children:e.description})]})})]},a.toString())}))}))}},244:function(e,a,r){r.d(a,{Q:function(){return d},R:function(){return m}});var s=r(201),n=r(236),t=r(3029),i=r(9064),o=r(918),c=r(5231),l=r(450),d=[{statement:" This app is a truly blessing for all professionals! A day to day project management was never easy for me.But with prompt, I can manage more than 100 projects easily.",customer:{avatar:s,name:"Cersei Lannister",designation:"Senior Project Manager"},logo:t.Z},{statement:"It is one of the very convenient to use project manager ever! I have tried many project management apps for my daily tasks, but this one is far better than others.Simply loved it!",customer:{avatar:n,name:"John Stark",designation:"Engineering Director"},logo:i.Z}],m=[{image:o,slideTitle:"Manage your saas business with ease",description:"Make your saas application stand out with high-quality landing page designed and developed by professional."},{image:c,slideTitle:"The best way to showcase your mobile app",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."},{image:l,slideTitle:"Smart Solution that convert Lead to Customer",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."}]},1234:function(e,a,r){r(2791);var s=r(3504),n=r(7022),t=r(9743),i=r(2677),o=r(9140),c=r(3143),l=r(244),d=r(4427),m=r(184),p=function(e){var a=e.hasSlider,r=e.children,p=e.bottomLinks;return(0,m.jsx)("div",{className:"bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,m.jsx)(n.Z,{children:(0,m.jsx)(t.Z,{className:"justify-content-center",children:(0,m.jsxs)(i.Z,{xl:a?12:6,md:!a&&10,lg:!a&&8,children:[(0,m.jsx)(o.Z,{children:(0,m.jsx)(o.Z.Body,{className:"p-0",children:(0,m.jsxs)(t.Z,{className:"g-0",children:[(0,m.jsx)(i.Z,{xs:!a&&12,md:a&&5,className:a?"shadow":"",children:(0,m.jsxs)("div",{className:"p-xl-5 p-3",children:[(0,m.jsx)("div",{className:"mx-auto mb-5",children:(0,m.jsx)(s.rU,{to:"/",className:"d-flex",children:(0,m.jsx)("img",{src:d,alt:"logo",height:"30",className:"align-self-center"})})}),r]})}),a&&(0,m.jsx)(i.Z,{md:{offset:1,span:5},className:"d-none d-md-inline-block",children:(0,m.jsx)("div",{className:"position-relative mt-5 pt-5",children:(0,m.jsx)(c.Z,{slides:l.R})})})]})})}),(0,m.jsx)(t.Z,{className:"mt-3",children:(0,m.jsx)(i.Z,{xs:12,className:"text-center",children:p})})]})})})})};p.defaultProps={hasSlider:!1},a.Z=p},2469:function(e,a,r){var s=r(1413),n=r(5987),t=r(1694),i=r.n(t),o=r(2791),c=r(2592),l=r(9007),d=r(6445),m=r(162),p=r(611),u=r(473),f=r(7472),g=r(6543),h=r(184),b=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],x=(0,f.Z)("h4");x.displayName="DivStyledAsH4";var v=(0,g.Z)("alert-heading",{Component:x}),y=(0,g.Z)("alert-link",{Component:d.Z}),j={variant:"primary",show:!0,transition:p.Z,closeLabel:"Close alert"},Z=o.forwardRef((function(e,a){var r=(0,c.Ch)(e,{show:"onClose"}),t=r.bsPrefix,o=r.show,d=r.closeLabel,f=r.closeVariant,g=r.className,x=r.children,v=r.variant,y=r.onClose,j=r.dismissible,Z=r.transition,N=(0,n.Z)(r,b),w=(0,m.vE)(t,"alert"),C=(0,l.Z)((function(e){y&&y(!1,e)})),k=!0===Z?p.Z:Z,S=(0,h.jsxs)("div",(0,s.Z)((0,s.Z)({role:"alert"},k?void 0:N),{},{ref:a,className:i()(g,w,v&&"".concat(w,"-").concat(v),j&&"".concat(w,"-dismissible")),children:[j&&(0,h.jsx)(u.Z,{onClick:C,"aria-label":d,variant:f}),x]}));return k?(0,h.jsx)(k,(0,s.Z)((0,s.Z)({unmountOnExit:!0},N),{},{ref:void 0,in:o,children:S})):o?S:null}));Z.displayName="Alert",Z.defaultProps=j,a.Z=Object.assign(Z,{Link:y,Heading:v})},3168:function(e,a,r){r.d(a,{$:function(){return f}});var s=r(9439),n=r(4942),t=r(2791),i=r(4909);function o(){if(console&&console.warn){for(var e,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var c={};function l(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];"string"===typeof a[0]&&c[a[0]]||("string"===typeof a[0]&&(c[a[0]]=new Date),o.apply(void 0,a))}function d(e,a,r){e.loadNamespaces(a,(function(){if(e.isInitialized)r();else{e.on("initialized",(function a(){setTimeout((function(){e.off("initialized",a)}),0),r()}))}}))}function m(e,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!a.languages||!a.languages.length)return l("i18n.languages were undefined or empty",a.languages),!0;var s=a.languages[0],n=!!a.options&&a.options.fallbackLng,t=a.languages[a.languages.length-1];if("cimode"===s.toLowerCase())return!0;var i=function(e,r){var s=a.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===s||2===s};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!i(a.isLanguageChangingTo,e))&&(!!a.hasResourceBundle(s,e)||(!a.services.backendConnector.backend||!(!i(s,e)||n&&!i(t,e))))}function p(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?p(Object(r),!0).forEach((function(a){(0,n.Z)(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function f(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.i18n,n=(0,t.useContext)(i.OO)||{},o=n.i18n,c=n.defaultNS,p=r||o||(0,i.nI)();if(p&&!p.reportNamespaces&&(p.reportNamespaces=new i.zv),!p){l("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}p.options.react&&void 0!==p.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=u(u(u({},(0,i.JP)()),p.options.react),a),b=h.useSuspense,x=h.keyPrefix,v=e||c||p.options&&p.options.defaultNS;v="string"===typeof v?[v]:v||["translation"],p.reportNamespaces.addUsedNamespaces&&p.reportNamespaces.addUsedNamespaces(v);var y=(p.isInitialized||p.initializedStoreOnce)&&v.every((function(e){return m(e,p,h)}));function j(){return p.getFixedT(null,"fallback"===h.nsMode?v:v[0],x)}var Z=(0,t.useState)(j),N=(0,s.Z)(Z,2),w=N[0],C=N[1],k=(0,t.useRef)(!0);(0,t.useEffect)((function(){var e=h.bindI18n,a=h.bindI18nStore;function r(){k.current&&C(j)}return k.current=!0,y||b||d(p,v,(function(){k.current&&C(j)})),e&&p&&p.on(e,r),a&&p&&p.store.on(a,r),function(){k.current=!1,e&&p&&e.split(" ").forEach((function(e){return p.off(e,r)})),a&&p&&a.split(" ").forEach((function(e){return p.store.off(e,r)}))}}),[p,v.join()]);var S=(0,t.useRef)(!0);(0,t.useEffect)((function(){k.current&&!S.current&&C(j),S.current=!1}),[p]);var O=[w,p,y];if(O.t=w,O.i18n=p,O.ready=y,y)return O;if(!y&&!b)return O;throw new Promise((function(e){d(p,v,(function(){e()}))}))}},236:function(e,a,r){e.exports=r.p+"static/media/img-5.c2cff304107e61c2be86.jpg"},201:function(e,a,r){e.exports=r.p+"static/media/img-8.c267b43bec8bd66f19b2.jpg"},918:function(e,a,r){e.exports=r.p+"static/media/saas1.62a2e25d8eadc7ca481e.jpg"},5231:function(e,a,r){e.exports=r.p+"static/media/saas2.e4cd4f7dbc3c7b76e22e.jpg"},450:function(e,a,r){e.exports=r.p+"static/media/saas3.ebaed104551d142a933f.jpg"},4427:function(e,a,r){e.exports=r.p+"static/media/logo.09120addfd68a935385a.png"}}]);
//# sourceMappingURL=1495.856fd586.chunk.js.map