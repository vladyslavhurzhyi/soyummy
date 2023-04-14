"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[802],{730:function(e,t,r){r.d(t,{e:function(){return i}});var a=r(6389),n=r(184),i=function(e){var t=e.pageTitle,r=e.className,i=!!r.includes("accent");return(0,n.jsxs)("div",{className:"relative",children:[!i&&(0,n.jsxs)("div",{children:[(0,n.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[104px]  md:top-[85px]  md:left-[187px]  xl:top-[116px]  xl:left-[228px]  size "}),(0,n.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[231px]  md:top-[155px]  md:left-[405px]  lg:top-[155px]  lg:left-[437px]  xl:top-[199px]  xl:left-[707px]  size animate-pulse"}),(0,n.jsx)(a.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  right-[0px]   md:top-[98px]  xl:top-[129px]  xl:left-[1250px]  bg-gradient-to-r from-white to-white via-accentMain animate-gradient-x xl:right-[71px]  size"})]}),(0,n.jsx)("h1",{className:r,children:t})]})}},9802:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var a=r(2791),n=r(9434),i=r(5861),o=r(1413),c=r(9439),s=r(4687),d=r.n(s),l=r(9085),m=JSON.parse('[{"time":"5 min"},{"time":"10 min"},{"time":"15 min"},{"time":"20 min"},{"time":"25 min"},{"time":"30 min"},{"time":"35 min"},{"time":"40 min"},{"time":"45 min"},{"time":"50 min"},{"time":"55 min"},{"time":"1 h"},{"time":"1h 5 min"},{"time":"1h 10 min"},{"time":"1h 15 min"},{"time":"1h 20 min"},{"time":"1h 25 min"},{"time":"1h 30 min"},{"time":"1h 35 min"},{"time":"1h 40 min"},{"time":"1h 45 min"},{"time":"1h 50 min"},{"time":"1h 55 min"},{"time":"2 h"}]'),u=r(184),x=function(e){var t=e.data,r=e.categories,a=e.updateData,n=e.updateImg,i=e.previewImg;return(0,u.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,u.jsx)("div",{className:"w-[280px] h-[280px] mx-auto mb-8 xl:w-[360px] xl:h-[360px] md:mx-0 md:mb-o md:mr-8 bg-accentMain rounded-lg flex justify-center items-center border-4 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain",children:(0,u.jsxs)("label",{htmlFor:"thumb",className:"block w-full h-full object-cover ",children:[(0,u.jsx)("img",{src:i,alt:"recipe poster",className:"block w-full h-full object-cover rounded-lg "}),(0,u.jsx)("input",{className:"hidden",type:"file",id:"thumb",name:"thumb",onChange:n,accept:"image/png, image/jpg, image/jpeg"})]})}),(0,u.jsxs)("div",{className:" flex flex-col md:w-[400px] mt-2",children:[(0,u.jsxs)("div",{className:"relative z-0 w-full mb-6",children:[(0,u.jsx)("input",{type:"text",name:"title",placeholder:" ",autoComplete:"off",id:"title",required:!0,className:"pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",value:t.title,onChange:a}),(0,u.jsx)("label",{htmlFor:"title",className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Enter Recipe Title"})]}),(0,u.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,u.jsx)("input",{type:"text",name:"description",placeholder:" ",autoComplete:"off",id:"description",required:!0,className:"pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",value:t.description,onChange:a}),(0,u.jsx)("label",{htmlFor:"description",className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Enter adout recipe"})]}),(0,u.jsxs)("div",{className:"flex flex-row space-x-4 my-6",children:[(0,u.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,u.jsxs)("select",{name:"category",id:"category",required:!0,value:t.category,onChange:a,className:"pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",children:[(0,u.jsx)("option",{value:"",disabled:!0,hidden:!0}),r.map((function(e){var t=e._id,r=e.category;return(0,u.jsx)("option",{value:t,className:"bg-lime-50 text-center dark:bg-accentMain",children:r},t)}))]}),(0,u.jsx)("label",{htmlFor:"category",className:"absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Category"})]}),(0,u.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,u.jsxs)("select",{name:"time",id:"time",required:!0,value:t.time,onChange:a,className:"pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",children:[(0,u.jsx)("option",{value:"",disabled:!0,hidden:!0}),m.map((function(e){var t=e.time;return(0,u.jsx)("option",{value:t,className:"bg-lime-50 text-center dark:bg-accentMain",children:t},t)}))]}),(0,u.jsx)("label",{htmlFor:"time",className:"absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Cooking time"})]})]})]})]})},p=r(3433),b=r(7085),f=r(4620),h=JSON.parse('[{"type":"pcs"},{"type":"tbsp"},{"type":"tsp"},{"type":"cup"},{"type":"ml"},{"type":"l"},{"type":"g"},{"type":"kg"},{"type":"oz"},{"type":"fl oz"},{"type":"qt"},{"type":"pt"}]'),g=function(e){var t=e.items,r=e.updateItems,n=e.removeItem,i=e.ingredients,o=(0,a.useState)([]),s=(0,c.Z)(o,2),d=s[0],m=s[1],x=(0,a.useState)(""),g=(0,c.Z)(x,2),v=g[0],k=g[1],w=(0,a.useState)(""),y=(0,c.Z)(w,2),j=y[0],N=y[1],M=(0,a.useState)("1"),C=(0,c.Z)(M,2),T=C[0],z=C[1],S=(0,a.useState)("pcs"),Z=(0,c.Z)(S,2),F=Z[0],I=Z[1],D=function(e){var t=e.target,r=t.value,a=t.dataset;"amount"===a.name&&z(r),"measure"===a.name&&I(r)};return(0,u.jsxs)("div",{className:"my-11 md:my-24",children:[(0,u.jsx)("h2",{className:"mb-6 md:mb-9 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Ingredients"}),(0,u.jsxs)("div",{className:"flex mb-4 md:mb-6",children:[(0,u.jsxs)("div",{className:"relative z-0 w-1/2 ",children:[(0,u.jsx)("input",{type:"text",name:"ingredient",placeholder:" ",autoComplete:"off",required:!0,className:"pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",value:v,onInput:function(e){var t=e.target.value.trim();k(t);var r=i.filter((function(e){var r;return null===(r=e.ttl)||void 0===r?void 0:r.toLowerCase().includes(t.toLowerCase())}));m(r)}}),(0,u.jsx)("ul",{className:"list-none",children:d.length>1&&d.map((function(e){var t=e.ttl,r=e._id;return(0,u.jsx)("li",{value:r,onClick:function(){return function(e,t){N(t),k(e),m([])}(t,r)},className:"bg-lime-50 dark:bg-accentMain",children:t},r)}))}),(0,u.jsx)("label",{htmlFor:"ingredient",className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Choose ingredient"})]}),(0,u.jsxs)("div",{className:"relative z-0 w-14 mr-1 md:mr-2",children:[(0,u.jsx)("input",{type:"number",name:"amount","data-name":"amount",placeholder:" ",step:"0.5",min:"0.5",required:!0,className:"pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 text-sm md:text-base bg-accentGray rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",value:T,onChange:function(e){return D(e)}}),(0,u.jsx)("label",{htmlFor:"amount",className:"absolute duration-300 top-2 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-gray-500",children:"amount"})]}),(0,u.jsxs)("div",{className:"relative z-0 w-20 ",children:[(0,u.jsx)("select",{name:"measure","data-name":"measure",value:F,onChange:function(e){return D(e)},className:"pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 mt-0 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain",children:h.map((function(e){var t=e.type;return(0,u.jsx)("option",{value:t,className:"bg-lime-50 dark:bg-accentMain",children:t},t)}))}),(0,u.jsx)("label",{htmlFor:"measure",className:"absolute duration-300 top-2 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm  dark:text-gray-500",children:"measure"})]})]},j),(0,u.jsx)(f.k,{text:"add ingredient",cssClass:"othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring mb-3 md:mb-5",onClick:function(){if(" "===v)return l.Am.error("Choose ingredient",{autoClose:3e3});var e={ttl:v,id:j,amount:T,measure:F};r([].concat((0,p.Z)(t),[e])),k(" "),N(""),z("1"),I("pcs")}}),(0,u.jsx)("ul",{className:"w-full md:w-2/3 xl:w-1/2",children:t.length>=1&&t.map((function(e){var t=e.ttl,r=e.id,a=e.amount,i=e.measure;return(0,u.jsxs)("li",{className:"m-1 px-2 py-[2px] lg:px-4 flex items-center justify-between  bg-lime-50 rounded-lg focus:outline-none focus:ring-0 focus:border-accentMain border-transparent dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain",children:[(0,u.jsxs)("div",{className:" p-[1px] md:p-2 font-normal md:font-medium  text-customXs md:text-customSm bg-[#EBF3D4] dark:bg-transparent dark:text-whiteText flex rounded-md ",children:[(0,u.jsxs)("p",{className:"mr-4",children:[t,":"]}),(0,u.jsx)("p",{children:a}),(0,u.jsx)("p",{children:i})]}),(0,u.jsx)("button",{type:"button",className:"flex ml-1 md:ml-3 lg:ml-5",onClick:function(){return n(r)},children:(0,u.jsx)(b.T,{trash:"true",cssClassIcon:"iconTrash",cssClassDiv:"divIconTrash hover:dark:stroke-accentMain focus:dark:stroke-accentMain"})})]},r)}))})]})},v=function(e){var t=e.data,r=e.updateData;return(0,u.jsxs)("div",{className:"w-full ",children:[(0,u.jsx)("label",{htmlFor:"method",className:"font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Recipe Preparation"}),(0,u.jsx)("textarea",{name:"method",value:t.instructions,id:"instructions",required:!0,placeholder:"Enter recipe method",onChange:r,className:"p-3 block w-full h-40 my-[18px] md:my-[32px] md:w-2/3 lg:w-1/2 rounded-lg bg-accentGray border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-accentMain hover:border-accentMain border-transparent dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain dark:hover:border-accentMain"}),(0,u.jsxs)("div",{className:"flex relative",children:[(0,u.jsx)("input",{type:"checkbox",id:"isPublic",onChange:r,className:"appearance-none text-accentMain cursor-pointer w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded bg-transparent border-solid border-opacity-50 checked:opacity-0 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer"}),(0,u.jsx)("div",{className:"absolute flex justify-center items-center w-[18px] md:w-[35px] h-[18px] md:h-[35px] rounded pointer-events-none bg-transparent opacity-0 border border-solid border-opacity-50 border-[#7E7E7E80] dark:border-[#FAFAFA80] transition-all duration-300 peer-checked:opacity-100",children:(0,u.jsx)("svg",{viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-2.5 md:w-5 h-2.5 md:h-5",children:(0,u.jsx)("path",{d:"M7.77377 1.01229C8.04472 0.612637 8.58836 0.508303 8.98801 0.779256C9.38767 1.05021 9.492 1.59384 9.22105 1.9935L4.47925 8.98765C4.13243 9.4992 3.37879 9.4992 3.03197 8.98765L0.779622 5.66544C0.508669 5.26578 0.613003 4.72215 1.01266 4.45119C1.41231 4.18024 1.95595 4.28457 2.2269 4.68423L3.75561 6.93907L7.77377 1.01229Z",fill:"#8BAA36"})})}),(0,u.jsx)("p",{className:"absolute top-1 left-6 md:top-2 md:left-11 text-gray-500 text-customRecipesTime md:text-customSm dark:text-whiteText",children:"add to the public recipe database SoYummy"})]})]})},k=r(3440),w=r(7689),y=r(2400),j=r(9605),N=function(e){return e.ingredients.items},M=r(4994),C=r(2816),T="https://placehold.co/357x344?text=Upload+image",z={title:"",description:"",category:"",time:"",ingredients:[],isPublic:!1,instructions:""},S=function(){var e=(0,n.v9)(N),t=(0,n.v9)(C.us),r=(0,n.I0)(),s=(0,w.s0)();(0,a.useEffect)((function(){r((0,j.A)()),r((0,M.C)())}),[r]);var m=(0,a.useState)(T),p=(0,c.Z)(m,2),b=p[0],h=p[1],S=(0,a.useState)((0,o.Z)({},z)),Z=(0,c.Z)(S,2),F=Z[0],I=Z[1],D=function(e){var t=e.target,r=t.id,a=t.value,n=(0,o.Z)({},F);n[r]="isPublic"===r?!n.isPublic:a,I(n)},E=function(e){I((0,o.Z)((0,o.Z)({},F),{},{ingredients:e}))},L=function(){var e=(0,i.Z)(d().mark((function e(t,a){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r((0,y.XD)(a)),s("/my"),A(t);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),A=function(e){e.reset(),I((0,o.Z)((0,o.Z)({},z),{},{ingredients:[]})),h(T)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"relative",children:[(0,u.jsxs)("form",{noValidate:"",onSubmit:function(e){e.preventDefault();var t=new FormData,r=(0,c.Z)(e.target.thumb.files,1)[0];if(!r)return l.Am.error("Select a recipe image!",{autoClose:3e3});t.append("thumb",r);var a=(0,o.Z)((0,o.Z)({},F),{},{ingredients:F.ingredients.map((function(e){return{id:e.id,amount:e.amount,measure:e.measure}}))});t.append("jsonData",JSON.stringify(a)),L(e.target,t)},children:[(0,u.jsx)(x,{data:F,categories:t,updateData:D,updateImg:function(e){var t=(0,c.Z)(e.target.files,1)[0];h(t?URL.createObjectURL(t):T)},previewImg:b}),(0,u.jsx)(g,{ingredients:e,items:F.ingredients,updateItems:E,removeItem:function(e){var t=F.ingredients.filter((function(t){return t.id!==e}));E(t)}}),(0,u.jsx)(v,{data:F,updateData:D}),(0,u.jsx)(f.k,{type:"submit",text:"Publish recipe",cssClass:"searchbl-btn mt-6 mb-16 md:mb-24 lg:mb-0 dark:bg-accentMain dark:text-accentDarker  dark:hover:bg-accentLighter dark:focus:bg-accentLighter"})]}),(0,u.jsxs)("div",{className:"hidden lg:block w-40 absolute top-0 left-[900px] xl:left-[1056px]",children:[(0,u.jsx)("h2",{className:"font-main font-semibold text-secondaryText text-customBase mb-10 dark:text-whiteText",children:"Follow Us"}),(0,u.jsx)(k.L,{className:"followus-addrecipe"})]})]})})},Z=r(730),F=r(1087),I=function(e){var t=e.data;return(0,u.jsxs)("div",{className:"relative md:w-full lg:w-80 lg:absolute lg:top-[500px] lg:left-[900px] xl:left-[1056px]",children:[(0,u.jsx)("h2",{className:"mb-2 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Popular recipe"}),(0,u.jsx)("ul",{className:"flex flex-col md:flex-row md:flex-wrap lg:flex-col",children:t.map((function(e){var t=e._id,r=e.title,a=e.description,n=e.thumb;return(0,u.jsx)("li",{className:"flex md:w-1/2 lg:w-full border-b-2 border-gray-300 pb-3.5 pt-6 pr-2 dark:border-gray-500 hover:border-accentMain focus:border-accentMain dark:hover:border-accentMain dark:focus:border-accentMain",children:(0,u.jsxs)(F.rU,{to:"/recipes/".concat(t),className:"flex",children:[(0,u.jsx)("img",{className:"w-[104px] h-[85px] rounded-md mr-3",src:n,alt:r}),(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)("p",{className:"text-customSm text-secondaryText font-medium dark:text-whiteText",children:r}),(0,u.jsx)("p",{className:"text-xs text-gray-500 font-normal dark:text-gray-400",children:a})]})]})},t)}))})]})},D=r(2556),E=r(6907),L=function(){var e=(0,n.v9)(D.O2),t=(0,n.I0)();return(0,a.useEffect)((function(){t((0,y.ZS)())}),[t]),(0,u.jsxs)("div",{className:"container  relative z-10",children:[(0,u.jsx)(E.ql,{children:(0,u.jsx)("title",{children:"Add new recipe"})}),(0,u.jsx)(Z.e,{pageTitle:"Add recipe",className:"main-title mb-[72px] md:mb-[100px]"}),(0,u.jsx)(S,{}),e.length>0?(0,u.jsx)(I,{data:e}):(0,u.jsx)(u.Fragment,{})]})}},2816:function(e,t,r){r.d(t,{$_:function(){return n},us:function(){return a}});var a=function(e){return e.categories.list},n=function(e){return e.categories.currentCategory}},2556:function(e,t,r){r.d(t,{ML:function(){return o},O2:function(){return a},xU:function(){return n},zh:function(){return i}});var a=function(e){return e.recipes.items},n=function(e){return e.recipes.isLoading},i=function(e){return e.recipes.error},o=function(e){return e.recipes.recipeById}}}]);
//# sourceMappingURL=802.5a42f911.chunk.js.map