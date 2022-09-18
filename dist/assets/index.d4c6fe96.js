import{af as k,a$ as I,bo as f,a4 as T,J as G,e,Y as $,d as p,bp as j,a as L,b4 as M,u as N,W as U,bg as w,a5 as E,bf as O,k as P,I as v,bq as W,bc as D,a0 as F,B as x,bk as _,aT as H,aU as K,aa as V,h as Z,n as S}from"./index.cfe5f7e5.js";import{u as q}from"./useT.a73bbebf.js";import{a as A}from"./useTitle.1d86f45d.js";const J=T('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Y=t=>{const s=k({startColor:"#28aff0",endColor:"#120fc4"},t);return(()=>{const o=J.cloneNode(!0),u=o.firstChild,a=u.firstChild,g=a.nextSibling,l=g.firstChild,d=l.nextSibling;return I(r=>{const i=s.startColor,c=s.endColor;return i!==r._v$&&f(l,"stop-color",r._v$=i),c!==r._v$2&&f(d,"stop-color",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),o})()},Q=T('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),X=t=>{const s=k({startColor:"#28aff0",endColor:"#120fc4"},t);return(()=>{const o=Q.cloneNode(!0),u=o.firstChild,a=u.firstChild,g=a.nextSibling,l=g.firstChild,d=l.nextSibling;return I(r=>{const i=s.startColor,c=s.endColor;return i!==r._v$&&f(l,"stop-color",r._v$=i),c!==r._v$2&&f(d,"stop-color",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),o})()},ee=()=>{const t=G("#a9c6ff","#062b74");return e($,{get bgColor(){return t()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e($,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(X,{})}}),e($,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Y,{})}})]}})},oe=()=>{const t=q();A(()=>t("login.title"));const s=G("white","$neutral1"),[o,u]=p(localStorage.getItem("username")||""),[a,g]=p(localStorage.getItem("password")||""),[l,d]=p(""),[r,i]=j("remember-pwd","false"),[c,R]=L(()=>M.post("/auth/login",{username:o(),password:a(),otp_code:l()})),{searchParams:b,to:y}=N(),h=async()=>{r()==="true"?(localStorage.setItem("username",o()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const n=await R();Z(n,C=>{S.success(t("login.success")),_(C.token),y(decodeURIComponent(b.redirect||"/"),!0)},(C,B)=>{!m()&&B===402?z(!0):S.error(C)})},[m,z]=p(!1);return e(V,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(U,{get bgColor(){return s()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(w,{alignItems:"center",justifyContent:"space-around",get children(){return[e(E,{boxSize:"$12",src:"https://jsd.nn.ci/gh/alist-org/logo@main/logo.svg"}),e(O,{color:"$info9",fontSize:"$2xl",get children(){return t("login.title")}})]}}),e(P,{get when(){return!m()},get fallback(){return e(v,{get placeholder(){return t("login.otp-tips")},get value(){return l()},onChange:n=>d(n.currentTarget.value),onKeyDown:n=>{n.key==="Enter"&&h()}})},get children(){return[e(v,{get placeholder(){return t("login.username-tips")},get value(){return o()},onInput:n=>u(n.currentTarget.value)}),e(v,{get placeholder(){return t("login.password-tips")},type:"password",get value(){return a()},onInput:n=>g(n.currentTarget.value),onKeyDown:n=>{n.key==="Enter"&&h()}}),e(w,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(W,{get checked(){return r()==="true"},onChange:()=>i(r()==="true"?"false":"true"),get children(){return t("login.remember")}}),e(D,{as:"a",target:"_blank",get href(){return t("login.forget_url")},get children(){return t("login.forget")}})]}})]}}),e(F,{w:"$full",spacing:"$2",get children(){return[e(x,{colorScheme:"primary",w:"$full",onClick:()=>{m()?d(""):(u(""),g(""))},get children(){return t("login.clear")}}),e(x,{w:"$full",get loading(){return c()},onClick:h,get children(){return t("login.login")}})]}}),e(x,{w:"$full",colorScheme:"accent",onClick:()=>{_(),y(decodeURIComponent(b.redirect||"/"),!0)},get children(){return t("login.use_guest")}}),e(w,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(H,{}),e(K,{})]}})]}}),e(ee,{})]}})};export{oe as default};
