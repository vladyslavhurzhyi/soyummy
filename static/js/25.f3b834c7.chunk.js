"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[25],{730:function(e,t,n){n.d(t,{e:function(){return r}});var a=n(6389),i=n(184),r=function(e){var t=e.pageTitle,n=e.className,r=!!n.includes("accent");return(0,i.jsxs)("div",{className:"relative",children:[!r&&(0,i.jsxs)("div",{children:[(0,i.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[104px]  md:top-[85px]  md:left-[187px]  xl:top-[116px]  xl:left-[228px]  size "}),(0,i.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[231px]  md:top-[155px]  md:left-[405px]  lg:top-[155px]  lg:left-[437px]  xl:top-[199px]  xl:left-[707px]  size animate-pulse"}),(0,i.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  right-[0px]   md:top-[98px]  xl:top-[129px]  xl:left-[1250px]  bg-gradient-to-r from-white to-white via-accentMain animate-gradient-x xl:right-[71px]  size"})]}),(0,i.jsx)("h1",{className:n,children:t})]})}},2265:function(e,t,n){n.d(t,{A:function(){return u}});var a=n(854),i=n(5861),r=n(4687),s=n.n(r),l=n(4620),c=n(7085),o=(n(2791),n(9434)),x=n(7689),d=n(3939),m=n(184),p=function(e){var t=e.img,n=e.id,a=e.title,r=e.description,p=e.time,u=e.cssClass,f=void 0===u?"seerecipe-btn":u,h=e.remove,g=e.paginationPage;console.log("time",p);var v=(0,o.I0)(),j=(0,x.s0)(),w=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(h(n));case 2:return e.next=4,v((0,d.lZ)(g));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("li",{className:"flex mx-auto mb-10 last:mb-0 bg-[#ffffff] rounded-lg dark:bg-accentHalfDark w-full",children:(0,m.jsx)("div",{className:"min-w-[290px] w-full",children:(0,m.jsxs)("div",{className:"flex my-[14px] md:my-7 xl:my-10 ",children:[(0,m.jsx)("img",{className:"w-[124px] h-[124px] mx-[14px]  md:w-[228px] md:h-[232px]  xl:w-[318px] xl:h-[324px] md:mr-6 md:ml-6 xl:mx-10 rounded-lg object-cover  ",src:t,alt:t}),(0,m.jsxs)("div",{className:"flex flex-col mr-[9px] md:mr-6 xl:mr-10 w-full",children:[(0,m.jsxs)("div",{className:"flex  mb-[14px] xl:mb-8 ",children:[(0,m.jsx)("h2",{className:"text-sm xl:text-2xl md:text-[24px]  dark:text-[#FAFAFA]",children:a}),(0,m.jsx)("button",{className:"flex ml-auto ",onClick:w,children:(0,m.jsx)(c.T,{trash:!0,cssClassIcon:"iconTrash",cssClassDiv:"divIconTrash"})})]}),(0,m.jsxs)("div",{className:"flex h-full w-full justify-between flex-col ",children:[(0,m.jsx)("p",{className:"text-[8px] md:text-sm xl:text-lg mb-4 w-full ",children:r}),(0,m.jsxs)("div",{className:"flex justify-between ",children:[(0,m.jsxs)("p",{className:"mt-auto text-[10px] md:text-sm xl:text-lg font-medium font-main dark:text-[#FAFAFA]",children:[p," ",p.includes("min")?"":"min"]}),(0,m.jsx)(l.k,{cssClass:f,text:"See recipe",onClick:function(){j("/recipes/".concat(n))}})]})]})]})]})})})})},u=function(e){var t=e.data,n=e.cssClass,i=e.removeRecipe,r=e.isLoading,s=e.paginationPage;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:"flex flex-col mt-[100px] mb-[50px]  font-main dark:bg-accentDarker dark:text-[#FAFAFA99]",children:r?(0,m.jsx)(a.a,{}):(0,m.jsx)(m.Fragment,{children:t.map((function(e){return(0,m.jsx)(p,{paginationPage:s,remove:i,id:e._id,img:e.thumb,title:e.title,description:e.description,time:e.time,cssClass:n},e._id)}))})})})})}},9646:function(e,t,n){n.d(t,{r:function(){return i}});n(2791);var a=n(184),i=function(e){for(var t=e.total,n=e.current_page,i=e.per_page,r=e.handlePaginationClick,s=e.pageIncrement,l=e.pageDecrement,c=e.isLoading,o=[],x=Math.ceil(t/i),d=1;d<=x;d++)o.push(d);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"relative flex justify-center mb-[100px]  dark:bg-transparent z-[19] ",children:(0,a.jsx)("nav",{className:"inline-flex items-center -space-x-px ","aria-label":"Pagination",children:(0,a.jsxs)("ul",{className:"flex items-center border border-gray-300 rounded-3xl shadow-custom text-[12px] py-[14px] max-h-[55px]",children:[(0,a.jsxs)("button",{disabled:1===n,className:"nextBtn  ".concat(1===n?"hover:text-[#A9A9A9] cursor-not-allowed":"hover:text-gray-700"),onClick:l,children:[(0,a.jsx)("span",{className:"sr-only",children:"Previous"}),(0,a.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),o.map((function(e){return(0,a.jsx)("button",{onClick:r,"aria-current":"page",className:"".concat(e===n?"currentPage":"paginationPage"," ").concat(c&&e===n?"loadingPagination":""),children:e},e)})),(0,a.jsxs)("button",{disabled:n===x,className:"prevBtn  ".concat(n===x?"hover:text-[#A9A9A9] cursor-not-allowed":"hover:text-gray-700"),onClick:s,children:[(0,a.jsx)("span",{className:"sr-only",children:"Next"}),(0,a.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})})})})}},8025:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(9439),i=n(2791),r=n(9434),s=n(2265),l=n(3939),c=n(4013),o=n(9646),x=n(9085),d=n(3914),m=n(5222),p=n(184),u=function(){var e=(0,i.useState)(1),t=(0,a.Z)(e,2),n=t[0],u=t[1],f=(0,r.v9)(c.ZF),h=f.current_page,g=f.data,v=f.total,j=f.per_page,w=(0,r.v9)(c.Gw),b=(0,r.v9)(c.BP),N=(0,r.I0)(),y=Math.ceil(Number(v)/Number(j)),k=h>y;(0,i.useEffect)((function(){k&&u(y)}),[k,y]),(0,i.useEffect)((function(){N((0,l.lZ)(n))}),[N,n]);return(0,p.jsxs)(p.Fragment,{children:[w&&x.Am.error("Something went wrong, please try again later",{autoClose:3e3}),(null===g||void 0===g?void 0:g.length)>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.A,{paginationPage:n,removeRecipe:l.QJ,data:g,isLoading:b}),v>0&&(0,p.jsx)(o.r,{current_page:h,total:v,per_page:j,handlePaginationClick:function(e){var t=Number(e.target.textContent);(0,m.k)(),u(t)},pageIncrement:function(){u((function(e){return e+1}))},pageDecrement:function(){u((function(e){return e-1}))}})]}):(0,p.jsxs)("div",{className:"flex flex-col items-center object-center text-center",children:[(0,p.jsx)("img",{src:d,alt:"error",className:"rounded mb-3.5 md:mb-8 pt-4 md:h-[327px] xl:h-[331px]"}),(0,p.jsx)("p",{className:"text-[18px] md:text-customBase font-semibold mb-2 md:mb-3.5 dark:text-whiteText",children:"We are sorry,"}),(0,p.jsx)("p",{className:"text-customXxs md:text-[18px] leading-[18px] mb-[100px] md:mb-[204px] w-48 md:w-full md:min-w-[430px] dark:text-[#FAFAFA80]",children:"You don't have any added recipes ..."})]})]})},f=n(730),h=n(6907),g=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.ql,{children:(0,p.jsx)("title",{children:"My favorites"})}),(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(f.e,{pageTitle:"Favorites",className:"main-title pb-[50px] md:pb-[72px]"}),(0,p.jsx)("section",{className:"bg-[#FAFAFA] dark:bg-accentDarker",children:(0,p.jsx)(u,{})})]})]})}},4013:function(e,t,n){n.d(t,{BP:function(){return i},Gw:function(){return r},ZF:function(){return a}});var a=function(e){return e.favoriteRecipes.items},i=function(e){return e.favoriteRecipes.isLoading},r=function(e){return e.favoriteRecipes.error}},3914:function(e,t,n){e.exports=n.p+"static/media/placeholder.3c0232a5f0c7332b77cc.png"}}]);
//# sourceMappingURL=25.f3b834c7.chunk.js.map