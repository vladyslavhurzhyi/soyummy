"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[383],{730:function(e,t,a){a.d(t,{e:function(){return o}});var r=a(6389),n=a(184),o=function(e){var t=e.pageTitle,a=e.className,o=!!a.includes("accent");return(0,n.jsxs)("div",{className:"relative",children:[!o&&(0,n.jsxs)("div",{children:[(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[104px]  md:top-[85px]  md:left-[187px]  xl:top-[116px]  xl:left-[228px]  size "}),(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[231px]  md:top-[155px]  md:left-[405px]  lg:top-[155px]  lg:left-[437px]  xl:top-[199px]  xl:left-[707px]  size animate-pulse"}),(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  right-[0px]   md:top-[98px]  xl:top-[129px]  xl:left-[1250px]  bg-gradient-to-r from-white to-white via-accentMain animate-gradient-x xl:right-[71px]  size"})]}),(0,n.jsx)("h1",{className:a,children:t})]})}},7683:function(e,t,a){a.d(t,{U:function(){return x}});var r=a(9439),n=a(2791),o=a(7689),l=a(4620),i=a(9085),s=a(9434),c=a(2242),d=a(184),x=function(){var e=(0,n.useState)(""),t=(0,r.Z)(e,2),a=t[0],x=t[1],p=(0,o.s0)(),u=(0,s.I0)();return(0,d.jsx)("div",{className:"w-[295px] md:w-[369px] xl:w-[510px] h-[52px] xl:h-[71px] rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] border-grey1 border-solid border mx-auto",children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=a.toLowerCase();return""===t&&(i.Am.error("Enter your query",{position:"top-center"}),x()),console.log(a),x(t),u((0,c.R5)(a)),console.log(a),p("/search?query=".concat(t))},className:"flex justify-end rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] h-full relative",children:[(0,d.jsx)("input",{type:"text",value:a,onChange:function(e){x(e.target.value)},className:"text-secondaryText dark:text-greyInput font-main text-base leading-6 w-full h-full  border-none outline-none rounded-tl-[45px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[45px] bg-white dark:bg-accentDarker pl-[48px]"}),(0,d.jsx)(l.k,{type:"submit",text:"Search",cssClass:"searchbl-btn absolute right-[-1px] -top-0.5 h-[53px] xl:h-[72px] dark:bg-accentMain"})]})})}},6383:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var r=a(730),n=a(2791),o=a(6839),l=a(9434),i=function(e){return e.search.items},s=function(e){return e.search.isLoading},c=function(e){return e.search.error},d=function(e){return e.search.queryType},x=function(e){return e.search.query},p=a(7683),u=a(9439),h=a(2242),m=a(7689),g=a(184),f=[{searchType:"title"},{searchType:"ingredients"}],b=function(){var e=(0,m.TH)();console.log(e.state);var t=(0,n.useState)("title"),a=(0,u.Z)(t,2),r=a[0],o=a[1],i=(0,l.I0)();return(0,g.jsxs)("div",{className:"relative z-0 w-40 mt-4 md:mt-6 gap-[18px]",children:[(0,g.jsx)("select",{name:"select",value:r,onChange:function(e){return function(e){var t=e.target.value;console.log(t),o(t),i((0,h.tS)(t))}(e)},className:"pt-2 pb-1 md:pt-3 md:pb-2 block w-full px-0 mt-0 text-center text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain",children:f.map((function(e){var t=e.searchType;return(0,g.jsx)("option",{value:t,className:"bg-accentGray dark:bg-accentMain text-center",children:t},t)}))}),(0,g.jsx)("label",{htmlFor:"select",className:"absolute duration-300 top-1 -z-1 origin-0  text-mainText font-main font-semibold text-customXs md:text-[18px] lg:text-customeBase dark:text-whiteText",children:"Search by:"})]})},w=function(){return(0,g.jsxs)("div",{className:"flex flex-col justify-center items-center gap-5 mb-[50px] relative z-10",children:[(0,g.jsx)(p.U,{}),(0,g.jsx)(b,{})]})},v=a(854),y=a(1087),j=a(9085),k=a(3914),N=a(6389),T=function(){var e=(0,l.v9)(i),t=(0,l.v9)(s),a=(0,l.v9)(c);return(0,g.jsxs)(g.Fragment,{children:[a&&j.Am.error("Something went wrong, please try again later",{autoClose:3e3}),t&&!a&&(0,g.jsx)(v.a,{}),0===e.length?(0,g.jsxs)("div",{className:"flex flex-col gap-[32px] items-center mt-[50px] mb-[200px] w-[350]",children:[(0,g.jsx)("img",{src:k,alt:"vegetables assortment"}),(0,g.jsx)("p",{className:"text-center Poppins text-customBase dark:text-white",children:"Try looking for something else.."})]}):(0,g.jsx)("div",{children:(0,g.jsx)("ul",{className:"mb-[50px] flex flex-wrap w-full gap-0 md:gap-8 xl:gap-3 justify-center md:justify-between",children:e.map((function(e){var t=e.thumb,a=e._id,r=e.title;return(0,g.jsx)(N.E.li,{initial:{y:-20,opacity:0},viewport:{once:!0},transition:{duration:1},whileInView:{y:0,opacity:1},className:"w-[100%] h-[343px] md:h-[336px] xl:h-[300px] rounded-lg relative md:w-[calc(50%-16px)] xl:w-[calc(25%-12px)] object-cover shadow hover:shadow-lg focus:shadow-lg  shadow-black hover:shadow-black focus:shadow-black  dark:shadow-white dark:hover:shadow-white dark:focus:shadow-white",children:(0,g.jsx)(y.OL,{to:"/recipes/".concat(a),className:"bg-gray-200  rounded-lg bg-cover bg-center w-full h-full bg-no-repeat block",style:{backgroundImage:"url('".concat(t)},children:(0,g.jsx)("div",{className:"absolute font-medium text-base leading-5 tracking-tight text-secondaryText p-4 bg-white bottom-[26px] left-0 right-0 mx-auto rounded-lg w-[calc(100%-18px)] xl:w-[calc(100%-16px)] whitespace-nowrap overflow-hidden text-ellipsis dark:text-whiteText dark:bg-accentDark shadow shadow-black dark:shadow-white",children:r})})},a)}))})})]})},I=a(6907),S=function(){var e=(0,l.v9)(x),t=(0,l.v9)(d),a=(0,l.I0)();return console.log(t),(0,n.useEffect)((function(){if(e)switch(t){case"title":a((0,o.L)(e)),console.log(e),console.log(t);break;case"ingredients":a((0,o.w)(e)),console.log(e),console.log(t);break;default:return}}),[a,e,t]),(0,g.jsx)("main",{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)(I.ql,{children:(0,g.jsx)("title",{children:"Search"})}),(0,g.jsx)(r.e,{pageTitle:"Search",className:"main-title mb-[50px]"}),(0,g.jsx)(w,{}),(0,g.jsx)(T,{})]})})}},3914:function(e,t,a){e.exports=a.p+"static/media/placeholder.3c0232a5f0c7332b77cc.png"}}]);
//# sourceMappingURL=383.0a7833c6.chunk.js.map