"use strict";(self.webpackChunksoyummy=self.webpackChunksoyummy||[]).push([[592],{8592:function(e,n,o){o.r(n),o.d(n,{default:function(){return _}});var i=o(9434),r=o(2811),t=o(1087),l=o(5108),s=o(5705),a=o(3148),d=o(184),c=function(){var e=(0,i.I0)(),n=(0,s.TA)({initialValues:{email:"",password:""},validationSchema:a.k,onSubmit:function(o){e((0,r.zB)(o)),n.resetForm()}});return console.log("formik",n),(0,d.jsxs)("section",{className:" formWrapSection",children:[(0,d.jsx)("div",{className:" svgWrap ",children:(0,d.jsx)(l.r,{})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{className:"foraWrap",onSubmit:n.handleSubmit,children:[(0,d.jsx)("h2",{className:" pl-2 text-3xl font-extrabold text-whiteText",children:"Sign in"}),(0,d.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:" relative",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",className:"inputSVG",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"})}),(0,d.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"inputField ".concat(n.errors.email&&n.touched.email?"border-red-600":"border-gray-300"),placeholder:"Email",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.email})]}),n.errors.email&&n.touched.email&&(0,d.jsx)("p",{className:"text-red-500 text-xs italic",children:n.errors.email})]}),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsxs)("label",{className:" relative",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"white",className:"inputSVG",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",clipRule:"evenodd"})}),(0,d.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:" ".concat(n.errors.password&&n.touched.password?"border-red-600":"border-gray-300"," inputField "),placeholder:"Password",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.password})]}),n.errors.password&&n.touched.password&&(0,d.jsx)("p",{className:"text-red-500 text-xs italic",children:n.errors.password})]})]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-accentMain hover:bg-accentDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Sign in"})})]}),(0,d.jsxs)("div",{className:"flex justify-center",children:[" ",(0,d.jsx)(t.OL,{className:" text-center mt-4 text-white self-center underline text-base  ",to:"/register",children:"Registration"})]})]})]})},u=o(1413),v=o(4925),m=o(9439),h=o(2791),p=["onSuccess","onError","useOneTap","promptMomentNotification","type","theme","size","text","shape","logo_alignment","width","locale","click_listener","containerProps"];var f=(0,h.createContext)(null);function w(e){var n=e.clientId,o=e.nonce,i=e.onScriptLoadSuccess,r=e.onScriptLoadError,t=e.children,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.nonce,o=e.onScriptLoadSuccess,i=e.onScriptLoadError,r=(0,h.useState)(!1),t=(0,m.Z)(r,2),l=t[0],s=t[1],a=(0,h.useRef)(o);a.current=o;var d=(0,h.useRef)(i);return d.current=i,(0,h.useEffect)((function(){var e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=function(){var e;s(!0),null===(e=a.current)||void 0===e||e.call(a)},e.onerror=function(){var e;s(!1),null===(e=d.current)||void 0===e||e.call(d)},document.body.appendChild(e),function(){document.body.removeChild(e)}}),[n]),l}({nonce:o,onScriptLoadSuccess:i,onScriptLoadError:r}),s=(0,h.useMemo)((function(){return{clientId:n,scriptLoadedSuccessfully:l}}),[n,l]);return h.createElement(f.Provider,{value:s},t)}function x(){var e=(0,h.useContext)(f);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function g(e){var n;return null!==(n=null===e||void 0===e?void 0:e.clientId)&&void 0!==n?n:null===e||void 0===e?void 0:e.client_id}var S={large:40,medium:32,small:20};function j(e){var n=e.onSuccess,o=e.onError,i=e.useOneTap,r=e.promptMomentNotification,t=e.type,l=void 0===t?"standard":t,s=e.theme,a=void 0===s?"outline":s,d=e.size,c=void 0===d?"large":d,m=e.text,f=e.shape,w=e.logo_alignment,j=e.width,y=e.locale,_=e.click_listener,b=e.containerProps,E=(0,v.Z)(e,p),N=(0,h.useRef)(null),C=x(),k=C.clientId,L=C.scriptLoadedSuccessfully,R=(0,h.useRef)(n);R.current=n;var T=(0,h.useRef)(o);T.current=o;var O=(0,h.useRef)(r);return O.current=r,(0,h.useEffect)((function(){var e,n,o,r,t,s,d,v,h;if(L)return null===(o=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===o||o.initialize((0,u.Z)({client_id:k,callback:function(e){var n;if(!(null===e||void 0===e?void 0:e.credential))return null===(n=T.current)||void 0===n?void 0:n.call(T);var o=e.credential,i=e.select_by;R.current({credential:o,clientId:g(e),select_by:i})}},E)),null===(s=null===(t=null===(r=null===window||void 0===window?void 0:window.google)||void 0===r?void 0:r.accounts)||void 0===t?void 0:t.id)||void 0===s||s.renderButton(N.current,{type:l,theme:a,size:c,text:m,shape:f,logo_alignment:w,width:j,locale:y,click_listener:_}),i&&(null===(h=null===(v=null===(d=null===window||void 0===window?void 0:window.google)||void 0===d?void 0:d.accounts)||void 0===v?void 0:v.id)||void 0===h||h.prompt(O.current)),function(){var e,n,o;i&&(null===(o=null===(n=null===(e=null===window||void 0===window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===n?void 0:n.id)||void 0===o||o.cancel())}}),[k,L,i,l,a,c,m,f,w,j,y]),h.createElement("div",(0,u.Z)((0,u.Z)({},b),{},{ref:N,style:(0,u.Z)({height:S[c]},null===b||void 0===b?void 0:b.style)}))}var y=function(){var e=(0,i.I0)(),n={NODE_ENV:"production",PUBLIC_URL:"/soyummy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SO_YUMMY_URL_BACK:"https://so-yummy-golt.onrender.com/api/v1"}.REACT_APP_GOOGLE_CLIENT_ID;return(0,d.jsx)(w,{clientId:n,children:(0,d.jsx)(j,{clientId:n,buttonText:"Sign in with Google",onSuccess:function(n){e((0,r.qj)(n))},onFailure:function(e){console.error(e)},cookiePolicy:"single_host_origin"})})},_=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{}),(0,d.jsx)(y,{})]})}}}]);
//# sourceMappingURL=592.abd95ac3.chunk.js.map