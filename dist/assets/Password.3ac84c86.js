import{u as i,e,bf as u,I as c,_ as g,J as p,bM as m,a0 as o,bg as d,bc as a,B as s,W as h}from"./index.cfe5f7e5.js";import{u as f}from"./useT.a73bbebf.js";import{b}from"./Layout.0fda2772.js";import{L as $}from"./index.e824947a.js";import"./useTitle.1d86f45d.js";import"./Markdown.4334ed27.js";import"./api.c0102957.js";import"./useUtil.6ece911f.js";import"./index.84ffc11a.js";import"./FolderTree.f97a61e2.js";const P=()=>{const t=f(),{refresh:n}=b(),{back:l}=i();return e(h,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(u,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return g()},get background(){return p("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(d,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:$,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{P as default};
