(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=f(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+l+o+a+r+t+n+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,o=c.default.createElement(k,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,i(r),o):o})),k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=f(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,p=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:L?1:0,transition:z?"opacity "+b+"ms":"none"},o),H="boolean"==typeof y?"lightgray":y,V={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&V,o,m),T={title:t,alt:this.state.isVisible?"":a,style:N,className:f,itemProp:E};if(h){var M=h,W=g(h);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),W.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:M,generateSources:O}),W.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:M,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(M),c.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,s.default)({alt:a,title:t,loading:S},W,{imageVariants:M}))}}))}if(p){var P=p,q=g(p),A=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete A.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},H&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&V)}),q.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:T,imageVariants:P,generateSources:O}),q.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:T,imageVariants:P,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,w(P),c.default.createElement(k,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,s.default)({alt:a,title:t,loading:S},q,{imageVariants:P}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),H=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:C,sizes:H,fixed:V(d.default.oneOfType([C,d.default.arrayOf(C)])),fluid:V(d.default.oneOfType([H,d.default.arrayOf(H)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=z;t.default=N},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("9Dj+"),l=a("H8eV"),o=a("tRbT"),s=a("ofer"),c=a("Z3vd"),d=a("Wbzz"),u=a("9eSz"),m=a.n(u),f=function(e){return i.a.createElement(d.StaticQuery,{query:"1022643890",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return a?i.a.createElement(m.a,{alt:e.alt,fluid:a.node.childImageSharp.fluid}):null}})},g=a("1NhI"),h=function(){return i.a.createElement(o.a,{container:!0,spacing:3,style:{minHeight:500}},i.a.createElement(o.a,{item:!0,xs:12,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{paddingLeft:40,paddingRight:40}},i.a.createElement(s.a,{variant:"h4",color:"inherit",style:{marginBottom:20}},"Virtual Healthcare for you"),i.a.createElement(s.a,{variant:"subtitle1",style:{marginBottom:30}},"We provide progressive, and affordable healthcare, accessible on mobile and online for everyone"),i.a.createElement(c.a,{variant:"contained",color:"primary",size:"large"},"Consult Today")),i.a.createElement(g.a,{xsDown:!0},i.a.createElement(o.a,{item:!0,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{padding:10}},i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(f,{alt:"Virtual Healthcare for you",filename:"hero-image.png"})))))},p=a("zLVn"),y=a("wx14"),b=a("Ff2n"),v=a("iuhU"),E=a("kKAo"),w=a("H2TA"),S=r.forwardRef((function(e,t){var a=e.classes,i=e.className,n=e.raised,l=void 0!==n&&n,o=Object(b.a)(e,["classes","className","raised"]);return r.createElement(E.a,Object(y.a)({className:Object(v.a)(a.root,i),elevation:l?8:1,ref:t},o))})),x=Object(w.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(S),O=r.forwardRef((function(e,t){var a=e.classes,i=e.className,n=e.component,l=void 0===n?"div":n,o=Object(b.a)(e,["classes","className","component"]);return r.createElement(l,Object(y.a)({className:Object(v.a)(a.root,i),ref:t},o))})),I=Object(w.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(O),L=function(e){var t=e.service;Object(p.a)(e,["service"]);return i.a.createElement(x,null,i.a.createElement(I,{style:{textAlign:"start",minHeight:200}},i.a.createElement("div",{style:{width:80,padding:10}},i.a.createElement(f,{alt:t.title,filename:t.image})),i.a.createElement(s.a,{variant:"h6",color:"inherit"},t.title),i.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)))},j=a("hlFM"),R=a("ye/S"),k=r.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,n=e.classes,l=e.className,o=e.component,s=void 0===o?"hr":o,c=e.flexItem,d=void 0!==c&&c,u=e.light,m=void 0!==u&&u,f=e.orientation,g=void 0===f?"horizontal":f,h=e.role,p=void 0===h?"hr"!==s?"separator":void 0:h,E=e.variant,w=void 0===E?"fullWidth":E,S=Object(b.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(s,Object(y.a)({className:Object(v.a)(n.root,l,"fullWidth"!==w&&n[w],i&&n.absolute,d&&n.flexItem,m&&n.light,"vertical"===g&&n.vertical),role:p,ref:t},S))})),z=Object(w.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(R.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(k),C=a("RD7I"),H=Object(C.a)((function(e){return{divider:{background:"#000",height:2,marginTop:10,marginBottom:10}}})),V=function(){var e=H();return i.a.createElement(j.a,{style:{width:80}},i.a.createElement(z,{classes:{root:e.divider}}))},N=function(){return i.a.createElement(o.a,{container:!0,spacing:3,style:{textAlign:"center",minHeight:200,padding:10}},i.a.createElement(o.a,{item:!0,xs:12,container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(s.a,{variant:"h5"},"Our Services"),i.a.createElement(V,null),i.a.createElement(s.a,{variant:"subtitle1",style:{margin:30}},"We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health")),[{id:1,image:"search-doctor-icon.png",title:"Search Doctor",description:"Choose your doctor from thousands of specialist, general, and trusted hospitals."},{id:2,image:"online-pharmacy-icon.png",title:"Online Pharmacy",description:"Buy your medicines with our mobile application with a simple delivery system."},{id:3,image:"consultation-icon.png",title:"Consultation",description:"Free consultation with our trusted doctors and get the best recommendations."},{id:4,image:"details-info-icon.png",title:"Detail Info",description:"Free consultation with our trusted doctors and get the best recommendations."},{id:5,image:"emergency-care-icon.png",title:"Emergency Care",description:"You can get 24/7 urgent care for yourself or your children and your lovely family."},{id:6,image:"tracking-icon.png",title:"Tracking",description:"Track and save your medical history and health data."}].map((function(e){return i.a.createElement(o.a,{item:!0,xs:12,sm:4,key:e.id},i.a.createElement(L,{service:e}))})),i.a.createElement(o.a,{item:!0,xs:12},i.a.createElement(c.a,{variant:"outlined",color:"primary",size:"large"},"Learn More")))},T=function(){return i.a.createElement(o.a,{container:!0,spacing:3,style:{minHeight:500}},i.a.createElement(g.a,{xsDown:!0},i.a.createElement(o.a,{item:!0,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{padding:10}},i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(f,{alt:"Virtual Healthcare for you",filename:"about-illustration.png"})))),i.a.createElement(o.a,{item:!0,xs:12,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{paddingLeft:40,paddingRight:40}},i.a.createElement(s.a,{variant:"h4",color:"inherit"},"Leading blog providers"),i.a.createElement(V,null),i.a.createElement(s.a,{variant:"subtitle1",style:{marginBottom:30,marginTop:20}},"Hi...my name is hessam Ghoreyshi We provide progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"),i.a.createElement(c.a,{variant:"outlined",color:"primary",size:"large"},"Learn More")))},M=["video","audio","picture","iframe","img"],W=r.forwardRef((function(e,t){var a=e.children,i=e.classes,n=e.className,l=e.component,o=void 0===l?"div":l,s=e.image,c=e.src,d=e.style,u=Object(b.a)(e,["children","classes","className","component","image","src","style"]),m=-1!==M.indexOf(o),f=!m&&s?Object(y.a)({backgroundImage:'url("'.concat(s,'")')},d):d;return r.createElement(o,Object(y.a)({className:Object(v.a)(i.root,n,m&&i.media,-1!=="picture img".indexOf(o)&&i.img),ref:t,style:f,src:m?s||c:void 0},u),a)})),P=Object(w.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(W),q=r.forwardRef((function(e,t){var a=e.disableSpacing,i=void 0!==a&&a,n=e.classes,l=e.className,o=Object(b.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(y.a)({className:Object(v.a)(n.root,l,!i&&n.spacing),ref:t},o))})),A=Object(w.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(q),D=a("k449"),F=a.n(D),B=function(e){var t=e.article;Object(p.a)(e,["article"]);return i.a.createElement(x,null,i.a.createElement(P,{image:t.image},i.a.createElement(f,{alt:t.title,filename:t.image})),i.a.createElement(I,{style:{textAlign:"start"}},i.a.createElement(s.a,{variant:"h6",color:"inherit"},t.title),i.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)),i.a.createElement(A,{style:{paddingLeft:20}},i.a.createElement(c.a,{size:"small",color:"primary"},"Read More ",i.a.createElement(F.a,{style:{marginLeft:5}}))))},_=function(){return i.a.createElement(o.a,{container:!0,spacing:3,style:{textAlign:"center"}},i.a.createElement(o.a,{item:!0,xs:12,container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(s.a,{variant:"h5"},"Check out our latest articles"),i.a.createElement(V,null)),[{title:"Disease detection, check up in the laboratory",description:"In this case, the role of the health laboratory is very important to do a disease detection...",url:"",image:"blog1.png"},{title:"Herbal medicines that are safe for consumption",description:"Herbal medicine is very widely used at this time because of its very good for your health...",url:"",image:"blog2.png"},{title:"Natural care for healthy facial skin",description:"A healthy lifestyle should start from now and also for your skin health. There are some...",url:"",image:"blog3.png"}].map((function(e){return i.a.createElement(o.a,{item:!0,xs:12,sm:4,key:e.title},i.a.createElement(B,{article:e}))})),i.a.createElement(o.a,{item:!0,xs:12},i.a.createElement(c.a,{variant:"outlined",color:"primary",size:"large"},"Veiw All")))},G=a("bWLx"),J=a("dl/7"),Q=a("viY9"),U=Object(Q.a)({typography:{subtitle1:{color:"#7D7987"}},palette:{type:"light",primary:{main:"#458FF6"},error:{main:J.a.A400},background:{default:"#fff"},text:{primary:"#000",secondary:"#7D7987",disabled:"#CCC",hint:"#7D7987"}},shape:{borderRadius:20}}),Y=a("mQs5"),Z=a.n(Y),K=function(){return i.a.createElement(o.a,{container:!0,spacing:3,style:{minHeight:500}},i.a.createElement(o.a,{item:!0,xs:12,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{paddingLeft:40,paddingRight:40}},i.a.createElement(s.a,{variant:"h4",color:"inherit"},"salam bar shoma"),i.a.createElement(V,null),i.a.createElement(s.a,{variant:"subtitle1",style:{marginBottom:30,marginTop:20}},"salam bar shoma"),i.a.createElement(c.a,{variant:"outlined",color:"primary",size:"large",endIcon:i.a.createElement(Z.a,null)},"Download")),i.a.createElement(g.a,{xsDown:!0},i.a.createElement(o.a,{item:!0,sm:6,container:!0,direction:"column",justify:"center",alignItems:"flex-start",style:{padding:10}},i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(f,{alt:"Virtual Healthcare for you",filename:"apps-panel-image.png"})))))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,{theme:U},i.a.createElement(n.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement(h,null),i.a.createElement(N,null),i.a.createElement(T,null),i.a.createElement(K,null),i.a.createElement(_,null))))}},k449:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=(0,r(a("8/g6")).default)(i.default.createElement("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");t.default=n},mQs5:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("q1tI")),n=(0,r(a("8/g6")).default)(i.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=n}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9206e542ea61ba614787.js.map