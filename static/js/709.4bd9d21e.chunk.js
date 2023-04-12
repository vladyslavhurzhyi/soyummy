"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[709],{730:function(e,t,n){n.d(t,{e:function(){return a}});var r=n(6389),i=n(184),a=function(e){var t=e.pageTitle,n=e.className,a=!!n.includes("accent");return(0,i.jsxs)("div",{className:"relative",children:[!a&&(0,i.jsxs)("div",{children:[(0,i.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[104px]  md:top-[85px]  md:left-[187px]  xl:top-[116px]  xl:left-[228px]  size "}),(0,i.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[231px]  md:top-[155px]  md:left-[405px]  lg:top-[155px]  lg:left-[437px]  xl:top-[199px]  xl:left-[707px]  size animate-pulse"}),(0,i.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  right-[0px]   md:top-[98px]  xl:top-[129px]  xl:left-[1250px]  bg-gradient-to-r from-white to-white via-accentMain animate-gradient-x xl:right-[71px]  size"})]}),(0,i.jsx)("h1",{className:n,children:t})]})}},6709:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(9439),i=n(2791),a=n(6389),o=n(1413),c=n(4925),l=n(5956),s=(0,i.createContext)(null),u=n(9829),d=n(3898),x=n(3478);var m=["children","as","axis","onReorder","values"];var p=(0,i.forwardRef)((function(e,t){var n=e.children,r=e.as,p=void 0===r?"ul":r,v=e.axis,g=void 0===v?"y":v,y=e.onReorder,b=e.values,w=(0,c.Z)(e,m),j=(0,u.h)((function(){return(0,a.E)(p)})),k=[],N=(0,i.useRef)(!1);(0,l.k)(Boolean(b),"Reorder.Group must be provided a values prop");var I={axis:g,registerItem:function(e,t){t&&-1===k.findIndex((function(t){return e===t.value}))&&(k.push({value:e,layout:t[g]}),k.sort(h))},updateOrder:function(e,t,n){if(!N.current){var r=function(e,t,n,r){if(!r)return e;var i=e.findIndex((function(e){return e.value===t}));if(-1===i)return e;var a=r>0?1:-1,o=e[i+a];if(!o)return e;var c=e[i],l=o.layout,s=(0,x.C)(l.min,l.max,.5);return 1===a&&c.layout.max+n>s||-1===a&&c.layout.min+n<s?(0,d.uo)(e,i,i+a):e}(k,e,t,n);k!==r&&(N.current=!0,y(r.map(f).filter((function(e){return-1!==b.indexOf(e)}))))}}};return(0,i.useEffect)((function(){N.current=!1})),i.createElement(j,(0,o.Z)((0,o.Z)({},w),{},{ref:t,ignoreStrict:!0}),i.createElement(s.Provider,{value:I},n))}));function f(e){return e.value}function h(e,t){return e.layout.min-t.layout.min}var v=n(937),g=n(9090);function y(e){var t=(0,u.h)((function(){return(0,v.B)(e)}));if((0,i.useContext)(g._).isStatic){var n=(0,i.useState)(e),a=(0,r.Z)(n,2)[1];(0,i.useEffect)((function(){return t.on("change",a)}),[])}return t}var b=n(5544),w=function(e){return function(e){return"object"===typeof e&&e.mix}(e)?e.mix:void 0};var j=n(3272),k=n(2199);function N(e,t,n,i){var a="function"===typeof t?t:function(){var e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=1+t<0||arguments.length<=1+t?void 0:arguments[1+t],i=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],a=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],c=(0,b.s)(r,i,(0,o.Z)({mixer:w(i[0])},a));return e?c(n):c}(t,n,i);return Array.isArray(e)?I(e,a):I([e],(function(e){var t=(0,r.Z)(e,1)[0];return a(t)}))}function I(e,t){var n=(0,u.h)((function(){return[]}));return function(e,t){var n=y(t()),r=function(){return n.set(t())};return r(),(0,k.L)((function(){var t=function(){return j.Z_.update(r,!1,!0)},n=e.map((function(e){return e.on("change",t)}));return function(){n.forEach((function(e){return e()})),j.qY.update(r)}})),n}(e,(function(){n.length=0;for(var r=e.length,i=0;i<r;i++)n[i]=e[i].get();return t(n)}))}var T=n(1453),E=["children","style","value","as","onDrag","layout"];function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,T.i)(e)?e:y(t)}var L={Group:p,Item:(0,i.forwardRef)((function(e,t){var n=e.children,d=e.style,x=void 0===d?{}:d,m=e.value,p=e.as,f=void 0===p?"li":p,h=e.onDrag,v=e.layout,g=void 0===v||v,y=(0,c.Z)(e,E),b=(0,u.h)((function(){return(0,a.E)(f)})),w=(0,i.useContext)(s),j={x:Z(x.x),y:Z(x.y)},k=N([j.x,j.y],(function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return n||i?1:"unset"})),I=(0,i.useRef)(null);(0,l.k)(Boolean(w),"Reorder.Item must be a child of Reorder.Group");var T=w.axis,L=w.registerItem,S=w.updateOrder;return(0,i.useEffect)((function(){L(m,I.current)}),[w]),i.createElement(b,(0,o.Z)((0,o.Z)({drag:T},y),{},{dragSnapToOrigin:!0,style:(0,o.Z)((0,o.Z)({},x),{},{x:j.x,y:j.y,zIndex:k}),layout:g,onDrag:function(e,t){var n=t.velocity;n[T]&&S(m,j[T].get(),n[T]),h&&h(e,t)},onLayoutMeasure:function(e){I.current=e},ref:t,ignoreStrict:!0}),n)}))},S=n(1518),D=n(184),R=function(){return(0,D.jsxs)("div",{className:"flex flex-col justify-center items-center py-5",children:[(0,D.jsx)("h2",{className:"mb-2 text-mainText dark:text-whiteText font-main font-semibold ",children:"\ud83d\ude1e No Product in your list!"}),(0,D.jsx)("img",{src:S,alt:"empty-gif",className:"rounded-3xl"})]})},C=n(9434),M=n(4478),z=n(1196),G=n(5323),H=n(7085),O=function(e){var t=e.id,n=e.thb,r=e.ttl,i=e.amount,a=e.measure,o=e.recipeId,c=e.idx,l=e.arr,s=e.handleDeleteItem,u=e.loading;return(0,D.jsxs)(L.Item,{value:l[c],initial:{x:c%2===0?-200:200,opacity:0},transition:{duration:.6},whileInView:{x:0,opacity:1},className:"flex flex-row items-center py-6 md:py-11 px-2 border-b xl:px-10",children:[(0,D.jsx)("img",{src:n,alt:"ingredient",className:"rounded-md object-cover max-w-[60px] h-[60px] md:max-w-[93px] md:h-[97px] dark:bg-accentHalfDark"}),(0,D.jsx)("p",{className:"ml-[10px] md:ml-4 font-main font-medium text-[10px] leading-3 md:text-base text-secondaryText dark:text-whiteText",children:r}),(0,D.jsx)("p",{className:"flex items-center justify-center px-2 ml-auto  min-w-[37px] h-[23px] md:min-w-[68px] md:h-[35PX] rounded bg-accentMain font-main font-semibold text-[10px] leading-[15px] md:text-[18px] md:leading-[27px] text-whiteText",children:"".concat(i," ").concat(a)}),(0,D.jsx)("button",{onClick:function(){return s(t,o)},type:"button",className:"ml-[46px] mr-5 md:mr-12 md:ml-28 xl:ml-44  hover:animate-pulse",children:(0,D.jsx)("div",{className:"divIconTrash dark:bg-transparent dark:hover:bg-accentHalfDark",children:u?(0,D.jsx)(G.a,{}):(0,D.jsx)(H.T,{trash:!0,cssClassIcon:"iconTrash",cssClassDiv:"stroke-black dark:stroke-white"})})})]})},P=n(1087),V=n(8776),A=function(){return(0,D.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 md:gap-6 p-2 md:p-10",children:[(0,D.jsx)("h2",{className:"dark:text-whiteText text-accentDark font-bold",children:"Oops \ud83d\ude28 Something go's wrong ..."}),(0,D.jsx)("img",{src:V,alt:"error plug"}),(0,D.jsx)(P.rU,{to:"/main",replace:!0,style:{borderRadius:"9% 23% 11% 21% / 26% 57% 34% 60%  "},className:"othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring",children:"Go Home"})]})},B=function(){var e=(0,i.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],c=(0,C.I0)(),l=(0,C.v9)(z.Qh),s=(0,C.v9)(z.bl),u=(0,C.v9)(z.mH);(0,i.useEffect)((function(){l.length<=0&&null===n&&c((0,M.Tx)()),o(l)}),[c,l]);var d=function(e,t){c((0,M.ci)({id:e,recipeId:t}))};return u?(0,D.jsx)(A,{}):(0,D.jsx)(D.Fragment,{children:(null===n||void 0===n?void 0:n.length)>0?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(a.E.div,{initial:{y:-20,opacity:0},viewport:{once:!0},transition:{duration:1},whileInView:{y:0,opacity:1},className:"flex flex-row items-center justify-center px-[10px] md:px-[20px] xl:px-10 h-9 md:h-[60px] bg-accentMain rounded-lg",children:[(0,D.jsx)("h3",{className:"mr-auto font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText",children:"Product"}),(0,D.jsx)("h3",{className:"font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText",children:"Number"}),(0,D.jsx)("h3",{className:"ml-6 md:ml-[78px] xl:ml-[142px] font-main font-semibold text-customShoppingList md:text-lg xl:tracking-[0.03em] text-whiteText",children:"Remove"})]}),(0,D.jsx)(L.Group,{className:"mt-2",values:n,axis:"y",onReorder:o,children:null===n||void 0===n?void 0:n.map((function(e,t,n){var r=e.id,i=e.thb,a=e.ttl,o=e.amount,c=e.measure,l=e.recipeId;return(0,D.jsx)(O,{id:r,thb:i,ttl:a,amount:o,measure:c,recipeId:l,idx:t,arr:n,loading:s,handleDeleteItem:d},"".concat(l).concat(c).concat(r))}))})]}):(0,D.jsx)(R,{})})},q=n(730),F=n(6907),Q=function(){return(0,D.jsxs)("div",{className:"container",children:[(0,D.jsx)(F.ql,{children:(0,D.jsx)("title",{children:"Shopping list"})}),(0,D.jsx)(q.e,{pageTitle:"Shopping list",className:"main-title pb-[50px] md:pb-[72px]"}),(0,D.jsx)("section",{className:"dark:bg-accentDarker relative z-[999]",children:(0,D.jsx)("div",{className:" max-w-[375px] md:max-w-3xl xl:max-w-7xl mx-auto px-2 md:px-8 xl:px-[100px] pb-24 md:pb-48",children:(0,D.jsx)(B,{})})})]})}},1196:function(e,t,n){n.d(t,{Qh:function(){return r},bl:function(){return a},mH:function(){return i}});var r=function(e){return e.shoppingList.shoppingList},i=function(e){return e.shoppingList.error},a=function(e){return e.shoppingList.isLoading}},8776:function(e,t,n){e.exports=n.p+"static/media/ErrorPlug.481519e4807601d2262d.gif"},1518:function(e,t,n){e.exports=n.p+"static/media/emptyShoppingList.a8ba52e465ec571d2b95.gif"}}]);
//# sourceMappingURL=709.4bd9d21e.chunk.js.map