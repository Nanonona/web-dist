import{e,a0 as l,z as $,aB as h,aE as b,ck as u,k as f,aC as w,bq as j,ae as k,bb as p,am as y,ag as A,bc as a,bt as C,bD as v,d,K as I,cl as S,cm as z,cn as O,af as m,v as P,o as M,W as B}from"./index.cfe5f7e5.js";import{u as E}from"./useT.a73bbebf.js";import{I as L}from"./Folder.85a92c32.js";import{b as T,M as D}from"./Layout.0fda2772.js";import{c as W}from"./useUtil.6ece911f.js";import{I as F}from"./index.e824947a.js";import{O as H}from"./obj.fca5b341.js";import{g as _}from"./icon.301aa26d.js";import"./useTitle.1d86f45d.js";import"./Markdown.4334ed27.js";import"./api.c0102957.js";import"./index.84ffc11a.js";import"./FolderTree.f97a61e2.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],q=t=>{const{isHide:o}=W();if(o(t.obj))return null;const{setPathAs:c}=T(),{show:s}=L({id:1});return e(D.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",get _hover(){return{transform:"scale(1.01)",bgColor:$(),transition:"all 0.3s"}},as:F,get href(){return t.obj.name},onMouseEnter:()=>{c(t.obj.name,t.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),u(t.index,!0,!0)}),s(r,{props:t.obj})},get children(){return[e(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[e(f,{get when(){return w()},get children(){return e(j,{"on:click":r=>{r.stopPropagation()},get checked(){return t.obj.selected},onChange:r=>{u(t.index,r.target.checked)}})}}),e(k,{class:"icon",boxSize:"$6",get color(){return p()},get as(){return _(t.obj)},mr:"$1","on:click":r=>{t.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),y.emit("gallery",t.obj.name))}}),e(A,{get label(){return t.obj.name},get children(){return e(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get children(){return t.obj.name}})}})]}}),e(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return C(t.obj.size)}}),e(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return v(t.obj.modified)}})]}})}})},ne=()=>{const t=E(),[o,c]=d(),[s,r]=d(!1);I(()=>{o()&&S(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return e(B,{class:"list",w:"$full",spacing:"$1",get children(){return[e(l,{class:"title",w:"$full",p:"$2",get children(){return[e(l,{get w(){return n[0].w},spacing:"$1",get children(){return[e(f,{get when(){return w()},get children(){return e(j,{get checked(){return z()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),e(a,m(()=>g(n[0]),{get children(){return t(`home.obj.${n[0].name}`)}}))]}}),e(a,m({get w(){return n[1].w}},()=>g(n[1]),{get children(){return t(`home.obj.${n[1].name}`)}})),e(a,m({get w(){return n[2].w}},()=>g(n[1]),{display:{"@initial":"none","@md":"inline"},get children(){return t(`home.obj.${n[2].name}`)}}))]}}),e(P,{get each(){return M.objs},children:(i,x)=>e(q,{obj:i,get index(){return x()}})})]}})};export{ne as default};
