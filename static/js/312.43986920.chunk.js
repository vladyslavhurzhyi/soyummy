"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[312],{730:function(e,a,t){t.d(a,{e:function(){return r}});var n=t(6389),s=t(184),r=function(e){var a=e.pageTitle,t=e.className,r=!!t.includes("accent");return(0,s.jsxs)("div",{children:[!r&&(0,s.jsxs)("div",{children:[(0,s.jsx)(n.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[120px]  md:top-[85px]  md:left-[219px]  xl:top-[116px]  xl:left-[328px]  size "}),(0,s.jsx)(n.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[247px]  md:top-155px]  md:left-[437px]  xl:top-[199px]  xl:left-[807px]  size animate-pulse"}),(0,s.jsx)(n.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  left-[349px]   md:top-[98px]  md:left-[726px]  xl:top-[129px]  xl:left-[1250px]  size"})]}),(0,s.jsx)("h1",{className:t,children:a})]})}},2265:function(e,a,t){t.d(a,{A:function(){return u}});var n=t(1495),s=t(5861),r=t(4687),l=t.n(r),i=t(4620),c=t(7085),d=(t(2791),t(9434)),x=t(7689),o=t(3939),m=t(184),p=function(e){var a=e.img,t=e.id,n=e.title,r=e.description,p=e.time,u=e.cssClass,g=void 0===u?"seerecipe-btn":u,f=e.remove,h=e.paginationPage,v=(0,d.I0)(),j=(0,x.s0)(),w=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(f(t));case 2:return e.next=4,v((0,o.lZ)(h));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("li",{className:"flex mx-auto mb-10 last:mb-0 bg-[#ffffff] rounded-lg dark:bg-accentHalfDark w-full",children:(0,m.jsx)("div",{className:"min-w-[290px] w-full",children:(0,m.jsxs)("div",{className:"flex my-[14px] md:my-7 xl:my-10 ",children:[(0,m.jsx)("img",{className:"w-[124px] h-[124px] mx-[14px]  md:w-[228px] md:h-[232px]  xl:w-[318px] xl:h-[324px] md:mr-6 md:ml-6 xl:mx-10 rounded-lg object-cover  ",src:a,alt:a}),(0,m.jsxs)("div",{className:"flex flex-col mr-[9px] md:mr-6 xl:mr-10 w-full",children:[(0,m.jsxs)("div",{className:"flex  mb-[14px] xl:mb-8 ",children:[(0,m.jsx)("h2",{className:"text-sm xl:text-2xl md:text-[24px]  dark:text-[#FAFAFA]",children:n}),(0,m.jsx)("button",{className:"flex ml-auto ",onClick:w,children:(0,m.jsx)(c.T,{trash:!0,cssClassIcon:"iconTrash",cssClassDiv:"divIconTrash"})})]}),(0,m.jsxs)("div",{className:"flex h-full w-full justify-between flex-col ",children:[(0,m.jsx)("p",{className:"text-[8px] md:text-sm xl:text-lg mb-4 w-full ",children:r}),(0,m.jsxs)("div",{className:"flex justify-between ",children:[(0,m.jsxs)("p",{className:"mt-auto text-[10px] md:text-sm xl:text-lg font-medium font-main dark:text-[#FAFAFA]",children:[p," min"]}),(0,m.jsx)(i.k,{cssClass:g,text:"See recipe",onClick:function(){j("/recipes/".concat(t))}})]})]})]})]})})})})},u=function(e){var a=e.data,t=e.cssClass,s=e.removeRecipe,r=e.isLoading,l=e.paginationPage;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:"flex flex-col mt-[100px] mb-[50px]  font-main dark:bg-accentDarker dark:text-[#FAFAFA99]",children:r?(0,m.jsx)(n.O,{className:"w-[300px] h-[140px] md:w-[700px] md:h-[288px] xl:w-[900px] xl:h-[300px]"}):(0,m.jsx)(m.Fragment,{children:a.map((function(e){return(0,m.jsx)(p,{paginationPage:l,remove:s,id:e._id,img:e.thumb,title:e.title,description:e.description,time:e.time,cssClass:t},e._id)}))})})})})}},9646:function(e,a,t){t.d(a,{r:function(){return s}});t(2791);var n=t(184),s=function(e){for(var a=e.total,t=e.current_page,s=e.per_page,r=e.handlePaginationClick,l=e.pageIncrement,i=e.pageDecrement,c=e.isLoading,d=[],x=Math.ceil(a/s),o=1;o<=x;o++)d.push(o);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"relative flex justify-center mb-[100px]  dark:bg-accentDarker z-[19]",children:(0,n.jsx)("nav",{className:"inline-flex items-center -space-x-px ","aria-label":"Pagination",children:(0,n.jsxs)("ul",{className:"flex items-center border border-gray-300 rounded-3xl shadow-custom text-[12px] py-[14px] max-h-[55px]",children:[(0,n.jsxs)("button",{disabled:1===t,className:"nextBtn  ".concat(1===t?"hover:text-[#A9A9A9] cursor-not-allowed":"hover:text-gray-700"),onClick:i,children:[(0,n.jsx)("span",{className:"sr-only",children:"Previous"}),(0,n.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),d.map((function(e){return(0,n.jsx)("button",{onClick:r,"aria-current":"page",className:"".concat(e===t?"currentPage":"paginationPage"," ").concat(c&&e===t?"loadingPagination":""),children:e},e)})),(0,n.jsxs)("button",{disabled:t===x,className:"prevBtn  ".concat(t===x?"hover:text-[#A9A9A9] cursor-not-allowed":"hover:text-gray-700"),onClick:l,children:[(0,n.jsx)("span",{className:"sr-only",children:"Next"}),(0,n.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})})})})}},1495:function(e,a,t){t.d(a,{O:function(){return s}});t(2791);var n=t(184),s=function(e){return(0,n.jsxs)("div",{role:"status",className:"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center",children:[(0,n.jsx)("div",{className:"flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700",children:(0,n.jsx)("svg",{className:"w-12 h-12 text-gray-200",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 640 512",children:(0,n.jsx)("path",{d:"M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"})})}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),(0,n.jsx)("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"}),(0,n.jsx)("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"}),(0,n.jsx)("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"}),(0,n.jsx)("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"}),(0,n.jsx)("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},5312:function(e,a,t){t.r(a),t.d(a,{default:function(){return f}});var n=t(730),s=t(9439),r=t(2791),l=t(9434),i=t(9646),c=t(2265),d=t(2719),x=function(e){return e.myRecipes.items},o=function(e){return e.myRecipes.isLoading},m=function(e){return e.myRecipes.error},p=t(9085),u=t(184),g=function(e){var a=e.cssClass,t=(0,r.useState)(1),n=(0,s.Z)(t,2),g=n[0],f=n[1],h=(0,l.v9)(x),v=h.current_page,j=h.total,w=h.data,b=h.per_page,y=(0,l.v9)(m),N=(0,l.v9)(o),C=(0,l.I0)(),k=Math.ceil(Number(j)/Number(b)),A=v>k;(0,r.useEffect)((function(){A&&f(k)}),[A,k]),(0,r.useEffect)((function(){C((0,d._)(g))}),[C,g]);return(0,u.jsxs)(u.Fragment,{children:[y&&p.Am.error("Something went wrong, please try again later",{autoClose:3e3}),(null===w||void 0===w?void 0:w.length)>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.A,{paginationPage:g,isLoading:N,removeRecipe:d.N,cssClass:a,data:w}),j>0&&(0,u.jsx)(i.r,{current_page:v,total:j,per_page:b,handlePaginationClick:function(e){var a=Number(e.target.textContent);f(a)},pageIncrement:function(){f((function(e){return e+1}))},pageDecrement:function(){f((function(e){return e-1}))},isLoading:N})]})]})},f=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(n.e,{pageTitle:"My recipes",className:"main-title pb-[50px] md:pb-[72px] px-4 md:px-8 xl:px-24"}),(0,u.jsx)("section",{className:"bg-[#FAFAFA] dark:bg-accentDarker",children:(0,u.jsx)(g,{cssClass:"seerecipegreen-btn"})})]})})}}}]);
//# sourceMappingURL=312.43986920.chunk.js.map