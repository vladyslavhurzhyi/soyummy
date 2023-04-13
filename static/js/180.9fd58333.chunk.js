"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[180],{7683:function(e,t,a){a.d(t,{U:function(){return c}});var r=a(9439),s=a(2791),x=a(1087),n=a(7689),l=a(4620),i=a(9085),o=a(184),c=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),a=t[0],c=t[1],d=(0,x.lr)(),m=(0,r.Z)(d,2)[1],p=(0,n.s0)();return(0,o.jsx)("div",{className:"w-[295px] md:w-[369px] xl:w-[510px] h-[52px] xl:h-[71px] rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border mx-auto",children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=a.toLowerCase();return""===t?(i.Am.error("Enter your query",{position:"top-center"}),void m()):(m({query:t}),p("/search?query=".concat(t)))},className:"flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative",children:[(0,o.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)},className:"text-secondaryText dark:text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] bg-white dark:bg-accentDarker pl-[48px]"}),(0,o.jsx)(l.k,{type:"submit",text:"Search",cssClass:"searchbl-btn absolute right-[-1px] -top-0.5 h-[53px] xl:h-[72px] dark:bg-accentMain"})]})})}},3180:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(4620),s=a(2791),x=a(9434),n=function(e){return e.mainRecipes.mainCategories},l=a(4778),i=a(4994),o=a(4805),c=a(1087),d=a(7689),m=a(184),p=function(){var e,t=(0,x.v9)(n),a=(0,x.I0)(),p=(0,o.useMediaQuery)({minWidth:1440}),u=(0,o.useMediaQuery)({minWidth:768,maxWidth:1439}),h=(0,d.s0)();(0,s.useEffect)((function(){if(t.length<=0){a((0,l.i)({categoriesLimit:4,recipesInCategory:4}))}}),[a,t]),e=p?4:u?2:1;return(0,m.jsx)("ul",{className:"xl:px-0 flex flex-col gap-24",children:t.map((function(t){var s=t.category,x=t.recipes;return x.length>=4?(0,m.jsxs)("li",{className:"text-left ",children:[(0,m.jsx)("p",{className:"font-semibold leading-7 text-[28px] md:text-[44px] md:leading-[44px] tracking-tight text-mainText capitalize mb-10 dark:text-whiteText",children:s}),(0,m.jsx)("ul",{className:"mb-[50px] flex flex-wrap w-full gap-0 md:gap-8 xl:gap-3 justify-center md:justify-between",children:x.slice(0,e).map((function(e){var t=e._id,a=e.title,r=e.preview;return(0,m.jsx)("li",{className:"w-[100%] h-[343px] md:h-[336px] xl:h-[300px] rounded-lg relative md:w-[calc(50%-16px)] xl:w-[calc(25%-12px)] object-cover shadow hover:shadow-lg focus:shadow-lg  shadow-black hover:shadow-black focus:shadow-black  dark:shadow-white dark:hover:shadow-white dark:focus:shadow-white ",children:(0,m.jsxs)(c.OL,{to:"/recipes/".concat(t),children:[(0,m.jsx)("img",{src:r,alt:a,className:"h-full w-full rounded-lg object-cover"}),(0,m.jsx)("p",{className:"absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white ",children:a})]})},t)}))}),(0,m.jsx)("div",{className:"flex justify-end",children:(0,m.jsx)(r.k,{type:"button",onClick:function(){return function(e){a((0,i.w)(e)),h("/categories/".concat(e)),window.scrollTo({top:0,behavior:"smooth"})}(s)},text:"See all",cssClass:"logout-btn",className:"flex justify-end "})})]},s):""}))})},u=a(7683),h=a(7701),f=a(9765),g=function(){return(0,m.jsxs)("div",{className:"relative w-full z-0 mx-auto",children:[(0,m.jsx)("img",{src:h,alt:"",className:"absolute z-0 bottom-[110px] left-0 right-0 mx-auto md:mr-0 md:bottom-[-10px] md:right-[-40px] xl:bottom-[-90px] xl:right-[70px] w-[320px] h-[300px] md:w-[378px] md:h-[350px] xl:w-[578px] xl:h-[539px]"}),(0,m.jsx)("img",{src:f,alt:"",className:"absolute z-0 bottom-[80px] left-0 right-0 mx-auto md:mr-0 md:bottom-[-45px] md:right-[25px] xl:bottom-[-130px] xl:right-[50px] w-[180px] h-[100px] md:w-[180px] md:h-[100px] xl:w-[220px] xl:h-[170px]"}),(0,m.jsxs)("div",{className:"absolute bottom-[115px] left-0 right-0 mx-auto md:mr-0 md:bottom-[25px] md:right-0 xl:bottom-1 xl:right-0  w-[298px] md:w-[261px] md:h-[100px] h-28 bg-white rounded-lg p-2 leading-5 text-secondaryText mb-8 md:mb-0 md:flex justify-between flex-col dark:bg-accentDark",children:[(0,m.jsxs)("p",{className:"font-main font-medium text-sm tracking-tight dark:text-whiteText",children:[(0,m.jsx)("span",{className:"text-accentMain ",children:"Delicious and healthy "}),"way to enjoy a variety of fresh ingredients in one satisfying meal"]}),(0,m.jsxs)(c.OL,{to:"/categories/breakfast",className:"text-[10px] tracking-[0.2px] flex justify-end items-center hover:text-accentMain dark:text-whiteText",children:["See recipes"," ",(0,m.jsx)("svg",{className:"w-4 h-3 ml-1 flex",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{className:"stroke-current",d:"M1.5 6H13.5M13.5 6L9 1.5M13.5 6L9 10.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})},b=function(){var e=(0,d.s0)();return(0,m.jsxs)("section",{children:[(0,m.jsx)("div",{className:" bg-main_m md:bg-main_t xl:bg-main_d bg-no-repeat bg-center bg-size_main h-48.5 md:h-[640px] xl:h-[777px] pt-[68px]  xl:pt-52  md:flex items-center justify-center",children:(0,m.jsxs)("div",{className:"container relative mx-auto xl:mx-0  w-full px-[16px] md:px-[2.25rem] lg:px-[60px] xl:px-[6rem] block md:flex justify-between flex-row items-end xl:pb-64",children:[(0,m.jsxs)("div",{className:"flex  flex-col mx-auto md:mx-0 xl:justify-start  mb-8 ",children:[(0,m.jsxs)("h1",{className:"text-accentDark text-center md:text-left font-normal text-[60px] md:text-[72px] xl:text-[100px] font-main dark:text-whiteText",children:[(0,m.jsx)("span",{className:"  leading-10  tracking-tighter text-accentMain",children:"So"}),"Yummy"]}),(0,m.jsx)("p",{className:"font-normal text-center mx-auto text-sm xl:text-lg font-main leading-6 md:text-left mb-[390px] md:mb-[32px] xl:mb-12 w-[248px] md:w-[362px] xl:w-[460px] tracking-tight dark:text-whiteText",children:'"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.'}),(0,m.jsx)(u.U,{})]}),(0,m.jsx)(g,{})]})}),(0,m.jsxs)("div",{className:"relative z-[1] text-center  container",children:[(0,m.jsx)(p,{className:"relative z-10 "}),(0,m.jsx)(c.rU,{to:"/categories/beef",children:(0,m.jsx)(r.k,{type:"button",onClick:function(t){e("/categories/breakfast")},text:"Other categories",cssClass:"othercateg-btn dark:text-whiteText mt-10"})})]})]})}},9765:function(e,t,a){e.exports=a.p+"static/media/arrow.f5a84af47e40671a7e9e.png"},7701:function(e,t,a){e.exports=a.p+"static/media/spoon.7ecd64cfc7c8ba1fde5d.png"}}]);
//# sourceMappingURL=180.9fd58333.chunk.js.map