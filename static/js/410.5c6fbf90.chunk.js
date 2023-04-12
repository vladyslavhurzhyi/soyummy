"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[410],{730:function(e,t,a){a.d(t,{e:function(){return i}});var r=a(6389),n=a(184),i=function(e){var t=e.pageTitle,a=e.className,i=!!a.includes("accent");return(0,n.jsxs)("div",{className:"relative",children:[!i&&(0,n.jsxs)("div",{children:[(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:.5},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  w-2 md:w-3.5  h-2 md:h-3.5  top-[76px]  left-[104px]  md:top-[85px]  md:left-[187px]  xl:top-[116px]  xl:left-[228px]  size "}),(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:1.5},whileInView:{opacity:1},className:" absolute  bg-accentDark  dark:bg-whiteText rounded-[3px]  rotate-[-25deg]  w-1.5 md:w-3  h-1.5 md:h-3  top-[142px]  left-[231px]  md:top-[155px]  md:left-[405px]  lg:top-[155px]  lg:left-[437px]  xl:top-[199px]  xl:left-[707px]  size animate-pulse"}),(0,n.jsx)(r.E.div,{initial:{opacity:0},viewport:{once:!0},transition:{duration:1,delay:2},whileInView:{opacity:1},className:" absolute  bg-accentMain  rounded-[3px]  rotate-[-25deg]  opacity-90  w-2 md:w-3.5  h-2 md:h-3.5 top-[109px]  right-[0px]   md:top-[98px]  xl:top-[129px]  xl:right-[71px]  size"})]}),(0,n.jsx)("h1",{className:a,children:t})]})}},1410:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r=a(2791),n=a(9434),i=a(5861),s=a(3433),o=a(1413),c=a(9439),d=a(4687),l=a.n(d),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},u=JSON.parse('[{"time":"5 min"},{"time":"10 min"},{"time":"15 min"},{"time":"20 min"},{"time":"25 min"},{"time":"30 min"},{"time":"35 min"},{"time":"40 min"},{"time":"45 min"},{"time":"50 min"},{"time":"55 min"},{"time":"1 h"},{"time":"1h 5 min"},{"time":"1h 10 min"},{"time":"1h 15 min"},{"time":"1h 20 min"},{"time":"1h 25 min"},{"time":"1h 30 min"},{"time":"1h 35 min"},{"time":"1h 40 min"},{"time":"1h 45 min"},{"time":"1h 50 min"},{"time":"1h 55 min"},{"time":"2 h"}]'),p=a(184),x=function(e){var t=e.data,a=e.categories,r=e.updateData,n=e.updateImg,i=e.previewImg;return(0,p.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,p.jsx)("div",{className:"w-[280px] h-[280px] mx-auto mb-8 xl:w-[360px] xl:h-[360px] md:mx-0 md:mb-o md:mr-8 bg-accentMain rounded-lg flex justify-center items-center",children:(0,p.jsxs)("label",{htmlFor:"thumb",className:"block w-full h-full object-cover ",children:[(0,p.jsx)("img",{src:i,alt:"recipe poster",className:"block w-full h-full object-cover rounded-lg "}),(0,p.jsx)("input",{className:"hidden",type:"file",id:"thumb",name:"thumb",onChange:n,accept:"image/png, image/jpg, image/jpeg"})]})}),(0,p.jsxs)("div",{className:" flex flex-col md:w-[400px] mt-2",children:[(0,p.jsxs)("div",{className:"relative z-0 w-full mb-6",children:[(0,p.jsx)("input",{type:"text",name:"title",placeholder:" ",autoComplete:"off",id:"title",required:!0,className:"pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain",value:t.title,onChange:r}),(0,p.jsx)("label",{htmlFor:"title",className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Enter Recipe Title"})]}),(0,p.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,p.jsx)("input",{type:"text",name:"description",placeholder:" ",id:"description",required:!0,className:"pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain",value:t.description,onChange:r}),(0,p.jsx)("label",{htmlFor:"description",className:"absolute duration-300 top-3 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Enter adout recipe"})]}),(0,p.jsxs)("div",{className:"flex flex-row space-x-4 my-6",children:[(0,p.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,p.jsxs)("select",{name:"category",id:"category",required:!0,value:t.category,onChange:r,className:"pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200  dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain",children:[(0,p.jsx)("option",{value:"",disabled:!0,hidden:!0}),a.map((function(e){var t=e._id,a=e.category;return(0,p.jsx)("option",{value:t,className:"bg-lime-50 text-center dark:bg-accentMain",children:a},t)}))]}),(0,p.jsx)("label",{htmlFor:"category",className:"absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Category"})]}),(0,p.jsxs)("div",{className:"relative z-0 w-full ",children:[(0,p.jsxs)("select",{name:"time",id:"time",required:!0,value:t.time,onChange:r,className:"pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-gray-200 dark:text-whiteText dark:border-gray-500 dark:focus:border-accentMain",children:[(0,p.jsx)("option",{value:"",disabled:!0,hidden:!0}),u.map((function(e){var t=e.time;return(0,p.jsx)("option",{value:t,className:"bg-lime-50 text-center dark:bg-accentMain",children:t},t)}))]}),(0,p.jsx)("label",{htmlFor:"time",className:"absolute duration-300 top-3 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-whiteText",children:"Cooking time"})]})]})]})]})},b=a(7085);var f=a.p+"static/media/trash.b64908bfb2afd2d11b16eec0bbe55278.svg",g=a(4620),h=JSON.parse('[{"type":"pcs"},{"type":"tbsp"},{"type":"tsp"},{"type":"cup"},{"type":"ml"},{"type":"l"},{"type":"g"},{"type":"kg"},{"type":"oz"},{"type":"fl oz"},{"type":"qt"},{"type":"pt"}]'),v=function(e){var t=e.items,a=e.updateItems,r=e.addItem,n=e.removeItem,i=e.ingredients,o=function(e,r){var n=e.target,i=n.value,o=n.dataset,c=(0,s.Z)(t),d=c.findIndex((function(e){return e.id===r}));c[d][o.name]=i,a((0,s.Z)(c))};return(0,p.jsxs)("div",{className:"my-11 md:my-24",children:[(0,p.jsx)("h2",{className:"mb-6 md:mb-9 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Ingredients"}),t.map((function(e){return(0,p.jsxs)("div",{className:"flex mb-4 md:mb-6",children:[(0,p.jsx)("select",{name:"name","data-name":"id",value:e.id,onChange:function(t){return o(t,e.id)},className:"pt-2 pb-1 md:pt-3 md:pb-2 pl-2 md:pl-4 block w-48 md:w-96 lg:w-[600px] px-0 mr-3.5 md:mr-8 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain",children:i.map((function(e){var t=e.ttl,a=e._id;return(0,p.jsx)("option",{value:a,className:"bg-lime-50 dark:bg-accentMain",children:t},a)}))}),(0,p.jsxs)("div",{className:"relative z-0 w-14 mr-1 md:mr-2",children:[(0,p.jsx)("input",{type:"number",name:"amount","data-name":"amount",placeholder:" ",step:"0.5",min:"0.5",required:!0,className:"pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 text-sm md:text-base bg-accentGray rounded-lg border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain",value:e.amount,onChange:function(t){return o(t,e.id)}}),(0,p.jsx)("label",{htmlFor:"amount",className:"absolute duration-300 top-2 -z-1 origin-0 text-gray-500 font-main font-normal text-customXs md:text-customSm dark:text-gray-500",children:"amount"})]}),(0,p.jsxs)("div",{className:"relative z-0 w-20 ",children:[(0,p.jsx)("select",{name:"measure","data-name":"measure",value:e.measure,onChange:function(t){return o(t,e.id)},className:"pt-2 pb-1 md:pt-3 md:pb-2 pl-3 block w-full px-0 mt-0 text-sm md:text-base bg-accentGray rounded-lg  border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-accentMain border-transparent  dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain",children:h.map((function(e){var t=e.type;return(0,p.jsx)("option",{value:t,className:"bg-lime-50 dark:bg-accentMain",children:t},t)}))}),(0,p.jsx)("label",{htmlFor:"measure",className:"absolute duration-300 top-2 -z-1 origin-0  text-gray-500 font-main font-normal text-customXs md:text-customSm  dark:text-gray-500",children:"measure"})]}),t.length>1&&(0,p.jsx)("button",{type:"button",className:"flex ml-1 md:ml-3 lg:ml-5 ",onClick:function(){return n(e.id)},children:(0,p.jsx)(b.T,{newLogo:f,cssClassIcon:"iconTrash",cssClassDiv:"divIconTrash"})})]},e.key)})),(0,p.jsx)(g.k,{text:"add ingredient",cssClass:"othercateg-btn dark:bg-accentDarker dark:text-accentMain  dark:hover:text-accentLighter dark:hover:border-accentLighter dark:focus:ring",onClick:r})]})},k=function(e){var t=e.data,a=e.updateData;return(0,p.jsxs)("div",{className:"w-full ",children:[(0,p.jsx)("label",{htmlFor:"method",className:"font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Recipe Preparation"}),(0,p.jsx)("textarea",{name:"method",value:t.instructions,id:"instructions",required:!0,placeholder:"Enter recipe method",onChange:a,className:"p-3 block w-full h-40 my-[18px] md:my-[32px] md:w-2/3 lg:w-1/2 rounded-lg bg-accentGray border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:border-accentMain border-transparent dark:text-whiteText dark:bg-accentDarker dark:border-2 dark:border-gray-500 dark:focus:border-accentMain"}),(0,p.jsxs)("label",{className:"text-gray-500 text-customXs md:text-customSm ",children:[(0,p.jsx)("input",{type:"checkbox",id:"isPublic",value:t.isPublic,onChange:a,className:"appearance-none "})," ","add to the public recipe database SoYummy"]})]})},y=a(3440),j=a(7689),w=a(2400),N=a(9605),T=function(e){return e.ingredients.items},M=a(4994),C=a(2816),z="https://placehold.co/357x344?text=Upload+image",Z=function(){var e,t,a,d=(0,n.v9)(T),u=(0,n.v9)(C.us),b=(0,n.I0)(),f=(0,j.s0)(),h={id:null!==(e=null===(t=d[0])||void 0===t?void 0:t._id)&&void 0!==e?e:"",amount:"1",measure:"pcs"},Z={title:"",description:"",category:"",time:"",ingredients:[{id:null===(a=d[0])||void 0===a?void 0:a._id,amount:"1",measure:"pcs",key:m()}],isPublic:!1,instructions:""};(0,r.useEffect)((function(){b((0,N.A)()),b((0,M.C)())}),[b]);var I=(0,r.useState)(z),S=(0,c.Z)(I,2),D=S[0],F=S[1],E=(0,r.useState)((0,o.Z)({},Z)),L=(0,c.Z)(E,2),q=L[0],P=L[1],U=function(e){var t=e.target,a=t.id,r=t.value,n=(0,o.Z)({},q);n[a]="isPublic"===a?!n.isPublic:r,P(n)},X=function(e){P((0,o.Z)((0,o.Z)({},q),{},{ingredients:e}))},_=function(){var e=(0,i.Z)(l().mark((function e(t,a){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b((0,w.XD)(a)),f("/my"),R(t);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(e){e.reset(),P((0,o.Z)((0,o.Z)({},Z),{},{ingredients:[(0,o.Z)((0,o.Z)({},h),{},{id:m()})]})),F(z)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsxs)("form",{noValidate:"",onSubmit:function(e){e.preventDefault();var t=new FormData,a=(0,c.Z)(e.target.thumb.files,1)[0];if(!a)return alert("Select a recipe image!");t.append("thumb",a);var r=(0,o.Z)((0,o.Z)({},q),{},{ingredients:q.ingredients.map((function(e){return{id:e.id,amount:e.amount,measure:e.measure}}))});t.append("jsonData",JSON.stringify(r)),_(e.target,t)},children:[(0,p.jsx)(x,{data:q,categories:u,updateData:U,updateImg:function(e){var t=(0,c.Z)(e.target.files,1)[0];F(t?URL.createObjectURL(t):z)},previewImg:D}),(0,p.jsx)(v,{ingredients:d,items:q.ingredients,updateItems:X,addItem:function(){var e=(0,s.Z)(q.ingredients);e.push((0,o.Z)((0,o.Z)({},h),{},{key:m()})),X(e)},removeItem:function(e){var t=q.ingredients.filter((function(t){return t.id!==e}));X(t)}}),(0,p.jsx)(k,{data:q,updateData:U}),(0,p.jsx)(g.k,{type:"submit",text:"Publish recipe",cssClass:"searchbl-btn mt-6 mb-16 md:mb-24 lg:mb-0 dark:bg-accentMain dark:text-accentDarker  dark:hover:bg-accentLighter dark:focus:bg-accentLighter"})]}),(0,p.jsxs)("div",{className:"hidden lg:block w-40 absolute top-0 left-[900px] xl:left-[1056px]",children:[(0,p.jsx)("h2",{className:"font-main font-semibold text-secondaryText text-customBase mb-10 dark:text-whiteText",children:"Follow Us"}),(0,p.jsx)(y.L,{className:"followus-addrecipe"})]})]})})},I=a(730),S=a(1087),D=function(e){var t=e.data;return(0,p.jsxs)("div",{className:"relative md:w-full lg:w-80 lg:absolute lg:top-[500px] lg:left-[900px] xl:left-[1056px]",children:[(0,p.jsx)("h2",{className:"mb-2 font-main font-semibold text-secondaryText text-customBase dark:text-whiteText",children:"Popular recipe"}),(0,p.jsx)("ul",{className:"flex flex-col md:flex-row md:flex-wrap lg:flex-col",children:t.map((function(e){var t=e._id,a=e.title,r=e.description,n=e.thumb;return(0,p.jsx)("li",{className:"flex md:w-1/2 lg:w-full border-b-2 border-gray-300 pb-3.5 pt-6 pr-2 dark:border-gray-500",children:(0,p.jsxs)(S.rU,{to:"/recipes/".concat(t),className:"flex",children:[(0,p.jsx)("img",{className:"w-[104px] h-[85px] rounded-md mr-3",src:n,alt:a}),(0,p.jsxs)("div",{className:"flex flex-col",children:[(0,p.jsx)("p",{className:"text-customSm text-secondaryText font-medium dark:text-whiteText",children:a}),(0,p.jsx)("p",{className:"text-xs text-gray-500 font-normal dark:text-gray-400",children:r})]})]})},t)}))})]})},F=a(2556),E=function(){var e=(0,n.v9)(F.qE),t=(0,n.I0)();return(0,r.useEffect)((function(){t((0,w.ZS)())}),[t]),(0,p.jsxs)("div",{className:"container mb-16 md:mb-24 xl:mb-52 relative z-10",children:[(0,p.jsx)(I.e,{pageTitle:"Add recipe",className:"main-title mb-[72px] md:mb-[100px]"}),(0,p.jsx)(Z,{}),e.length>0?(0,p.jsx)(D,{data:e}):(0,p.jsx)(p.Fragment,{})]})}},2816:function(e,t,a){a.d(t,{$_:function(){return n},us:function(){return r}});var r=function(e){return e.categories.list},n=function(e){return e.categories.currentCategory}},2556:function(e,t,a){a.d(t,{ML:function(){return s},O2:function(){return r},qE:function(){return o},xU:function(){return n},zh:function(){return i}});var r=function(e){return e.recipes.items},n=function(e){return e.recipes.isLoading},i=function(e){return e.recipes.error},s=function(e){return e.recipes.recipeById},o=function(e){return e.recipes.newRecipe}}}]);
//# sourceMappingURL=410.5c6fbf90.chunk.js.map