(self["webpackChunkgeneral_tools"]=self["webpackChunkgeneral_tools"]||[]).push([[866],{80638:function(){},60327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});n(65056),n(6999);var r=n(75485),c=r.Z,o=n(21584),a=o.Z,s=(n(57663),n(27884)),i=n(67294),l=n(71124),u=n(85893),d=()=>{var e=(0,i.useCallback)((e=>{l.m8.push(e)}),[]);return(0,u.jsxs)("div",{className:"__general_tools-layout-content",children:[(0,u.jsx)("div",{className:"__general_tools-layout-content-banner",children:(0,u.jsxs)("div",{className:"__general_tools-layout-content-banner-inner __general_tools-inner",children:[(0,u.jsx)("h1",{children:"General Tools"}),(0,u.jsx)("p",{children:"\u4e00\u4e2a\u5de5\u5177\u7f51\u7ad9"}),(0,u.jsx)("div",{className:"__general_tools-layout-content-buttons",children:(0,u.jsx)(s.Z,{type:"primary",children:"\u5f00\u59cb\u4f7f\u7528"})})]})}),(0,u.jsx)("div",{className:"__general_tools-inner __general_tools-list",children:(0,u.jsxs)(c,{gutter:[16,16],children:[(0,u.jsxs)(a,{className:"__general_tools-list-item",span:8,onClick:()=>e("/compress-image"),children:[(0,u.jsx)("img",{src:"/images/pic.png"}),(0,u.jsx)("h3",{children:"\u56fe\u7247\u538b\u7f29"}),(0,u.jsx)("p",{children:"\u57fa\u4e8e compressor \u8fdb\u884c\u56fe\u7247\u538b\u7f29"})]}),(0,u.jsx)(a,{className:"__general_tools-list-item",span:8}),(0,u.jsx)(a,{className:"__general_tools-list-item",span:8})]})})]})},f=d},24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return o}});var r=n(96156),c=n(22122),o=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=new Map,i=-1,l={},u={matchHandlers:{},dispatch:function(e){return l=e,s.forEach((function(e){return e(l)})),s.size>=1},subscribe:function(e){return s.size||this.register(),i+=1,s.set(i,e),e(l),i},unsubscribe:function(e){s["delete"](e),s.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),s.clear()},register:function(){var e=this;Object.keys(a).forEach((function(t){var n=a[t],o=function(n){var o=n.matches;e.dispatch((0,c.Z)((0,c.Z)({},l),(0,r.Z)({},t,o)))},s=window.matchMedia(n);s.addListener(o),e.matchHandlers[n]={mql:s,listener:o},o(s)}))}};t["ZP"]=u},99134:function(e,t,n){"use strict";var r=n(67294),c=(0,r.createContext)({});t["Z"]=c},21584:function(e,t,n){"use strict";var r=n(96156),c=n(22122),o=n(90484),a=n(67294),s=n(94184),i=n.n(s),l=n(99134),u=n(65632),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};function f(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var p=["xs","sm","md","lg","xl","xxl"],m=a.forwardRef((function(e,t){var n,s=a.useContext(u.E_),m=s.getPrefixCls,h=s.direction,x=a.useContext(l.Z),v=x.gutter,g=x.wrap,y=x.supportFlexGap,Z=e.prefixCls,b=e.span,_=e.order,j=e.offset,w=e.push,O=e.pull,C=e.className,E=e.children,N=e.flex,P=e.style,k=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=m("col",Z),R={};p.forEach((function(t){var n,a={},s=e[t];"number"===typeof s?a.span=s:"object"===(0,o.Z)(s)&&(a=s||{}),delete k[t],R=(0,c.Z)((0,c.Z)({},R),(n={},(0,r.Z)(n,"".concat(A,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(A,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(A,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(A,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(A,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(A,"-rtl"),"rtl"===h),n))}));var S=i()(A,(n={},(0,r.Z)(n,"".concat(A,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(A,"-order-").concat(_),_),(0,r.Z)(n,"".concat(A,"-offset-").concat(j),j),(0,r.Z)(n,"".concat(A,"-push-").concat(w),w),(0,r.Z)(n,"".concat(A,"-pull-").concat(O),O),n),C,R),G={};if(v&&v[0]>0){var H=v[0]/2;G.paddingLeft=H,G.paddingRight=H}if(v&&v[1]>0&&!y){var L=v[1]/2;G.paddingTop=L,G.paddingBottom=L}return N&&(G.flex=f(N),"auto"!==N||!1!==g||G.minWidth||(G.minWidth=0)),a.createElement("div",(0,c.Z)({},k,{style:(0,c.Z)((0,c.Z)({},G),P),className:S,ref:t}),E)}));m.displayName="Col",t["Z"]=m},75485:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,c=n(22122),o=n(96156),a=n(90484),s=n(28481),i=n(67294),l=n(94184),u=n.n(l),d=n(65632),f=n(99134),p=n(93355),m=n(24308),h=n(98924),x=function(){return(0,h.Z)()&&window.document.documentElement},v=function(){if(!x())return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r},g=function(){var e=i.useState(!1),t=(0,s.Z)(e,2),n=t[0],r=t[1];return i.useEffect((function(){r(v())}),[]),n},y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},Z=((0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var n,r=e.prefixCls,l=e.justify,p=e.align,h=e.className,x=e.style,v=e.children,Z=e.gutter,b=void 0===Z?0:Z,_=e.wrap,j=y(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=i.useContext(d.E_),O=w.getPrefixCls,C=w.direction,E=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),N=(0,s.Z)(E,2),P=N[0],k=N[1],A=g(),R=i.useRef(b);i.useEffect((function(){var e=m.ZP.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&k(e)}));return function(){return m.ZP.unsubscribe(e)}}),[]);var S=function(){var e=[0,0],t=Array.isArray(b)?b:[b,0];return t.forEach((function(t,n){if("object"===(0,a.Z)(t))for(var r=0;r<m.c4.length;r++){var c=m.c4[r];if(P[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e},G=O("row",r),H=S(),L=u()(G,(n={},(0,o.Z)(n,"".concat(G,"-no-wrap"),!1===_),(0,o.Z)(n,"".concat(G,"-").concat(l),l),(0,o.Z)(n,"".concat(G,"-").concat(p),p),(0,o.Z)(n,"".concat(G,"-rtl"),"rtl"===C),n),h),z={},M=H[0]>0?H[0]/-2:void 0,T=H[1]>0?H[1]/-2:void 0;if(M&&(z.marginLeft=M,z.marginRight=M),A){var q=(0,s.Z)(H,2);z.rowGap=q[1]}else T&&(z.marginTop=T,z.marginBottom=T);var B=i.useMemo((function(){return{gutter:H,wrap:_,supportFlexGap:A}}),[H,_,A]);return i.createElement(f.Z.Provider,{value:B},i.createElement("div",(0,c.Z)({},j,{className:L,style:(0,c.Z)((0,c.Z)({},z),x),ref:t}),v))})));Z.displayName="Row";var b=Z},6999:function(e,t,n){"use strict";n(65056),n(80638)}}]);