const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SettingsProfile-cNJ4EWxz.js","assets/index-CMbCRzoG.js","assets/index-DyzGhdtm.css","assets/Button-IRfaz3lr.js","assets/classNames-D22wyvZC.js","assets/cloneDeep-DdLAMrfy.js","assets/_getPrototype-lZRB4pca.js","assets/CloseButton-49zcuuf0.js","assets/react-number-format.es-CSyCFurv.js","assets/StatusIcon-wYa6QBF6.js","assets/index-wV1ajn27.js","assets/isNil-0GsE-w0K.js","assets/index-e4bOXpT4.js","assets/index-AUY5bPco.js","assets/index-DjIUylqS.js","assets/sleep-BvINh1mj.js","assets/Drawer-BUzX-TaF.js","assets/SettingsSecurity-Bgg92Npq.js","assets/isLastChild-C77o0yaH.js","assets/SettingsNotification-ebv5rxmO.js","assets/Switcher-jFoVpXzF.js","assets/SettingsBilling-DJqZCjxR.js","assets/SettingIntegration-d28A8Miw.js"])))=>i.map(i=>d[i]);
import{r as t,C as V,x,j as e,R as L,f as h,T as I,U as A,G as d}from"./index-CMbCRzoG.js";import{M as b}from"./index-DhAQYJ7R.js";import{S as k}from"./ScrollBar-DxGYl0pj.js";import{m as F,n as M,o as O,p as z,q as B,N as q,D as H,u as U}from"./Drawer-BUzX-TaF.js";import"./CloseButton-49zcuuf0.js";const $={bordered:!0},G={bordered:!0},g=t.forwardRef((s,a)=>{var p;const{ui:l}=V(),{bodyClass:n,children:c,className:i,clickable:r=!1,bordered:f=((p=l==null?void 0:l.card)==null?void 0:p.cardBordered)??!0,header:m={},footer:_={},onClick:j,...w}=s,o={...$,...m},u={...G,..._},C=x("card",i,f?"card-border":"card-shadow",r&&"cursor-pointer user-select-none"),S=x("card-body",n),R=x("card-header",o.bordered&&"card-header-border",o.extra&&"card-header-extra",o.className),T=x("card-footer",u.bordered&&"card-footer-border",u.className),D=()=>typeof o.content=="string"?e.jsx("h4",{children:o.content}):e.jsx(e.Fragment,{children:o.content}),P=E=>{j==null||j(E)};return e.jsxs("div",{ref:a,className:C,role:"presentation",onClick:P,...w,children:[o.content&&e.jsxs("div",{className:R,children:[D(),o.extra&&e.jsx("span",{children:o.extra})]}),e.jsx("div",{className:S,children:c}),u.content&&e.jsx("div",{className:T,children:u.content})]})});g.displayName="Card";const K=s=>{const{adaptiveCardActive:a}=L(),{className:l,bodyClass:n,...c}=s;return e.jsx(g,{className:h(l,a&&"border-none dark:bg-transparent"),bodyClass:h(n,a&&"p-0"),...c})},Q={currentView:"profile"},v=I(s=>({...Q,setCurrentView:a=>s(()=>({currentView:a}))}));function J(){const{search:s}=A();return t.useMemo(()=>new URLSearchParams(s),[s])}const{MenuItem:W}=b,X=[{label:"Perfil",value:"profile",icon:e.jsx(F,{})},{label:"Segurança",value:"security",icon:e.jsx(M,{})},{label:"Notificação",value:"notification",icon:e.jsx(O,{})},{label:"Pagamento",value:"billing",icon:e.jsx(z,{})},{label:"Integração",value:"integration",icon:e.jsx(B,{})}],N=({onChange:s})=>{const a=J(),{currentView:l,setCurrentView:n}=v(),c=a.get("category")||a.get("label")||"inbox",i=r=>{n(r),s==null||s()};return e.jsx("div",{className:"flex flex-col justify-between h-full",children:e.jsx(k,{className:"h-full overflow-y-auto",children:e.jsx(b,{className:"mx-2 mb-10",children:X.map(r=>e.jsxs(W,{eventKey:r.value,className:`mb-2 ${l===r.value?"bg-gray-100 dark:bg-gray-700":""}`,isActive:c===r.value,onSelect:()=>i(r.value),children:[e.jsx("span",{className:"text-2xl ltr:mr-2 rtl:ml-2",children:r.icon}),e.jsx("span",{children:r.label})]},r.value))})})})},y=t.forwardRef((s,a)=>{const{children:l,placement:n="left",...c}=s,[i,r]=t.useState(!1),f=()=>{r(!1)},m=()=>{r(!0)};return t.useImperativeHandle(a,()=>({handleCloseDrawer:f,handleOpenDrawer:m}),[]),e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"close-button text-xl",type:"button",onClick:()=>r(!i),children:e.jsx(q,{toggled:i})}),e.jsx(H,{isOpen:i,width:330,placement:n,onClose:()=>r(!1),onRequestClose:()=>r(!1),...c,children:l})]})});y.displayName="ToggleDrawer";const Y=()=>{const s=t.useRef(null);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(y,{ref:s,title:"Navigation",children:e.jsx(N,{onChange:()=>{var a;(a=s.current)==null||a.handleCloseDrawer()}})})})})},Z=t.lazy(()=>d(()=>import("./SettingsProfile-cNJ4EWxz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))),ee=t.lazy(()=>d(()=>import("./SettingsSecurity-Bgg92Npq.js"),__vite__mapDeps([17,1,2,13,12,7,3,4,10,11,18,16,15]))),se=t.lazy(()=>d(()=>import("./SettingsNotification-ebv5rxmO.js"),__vite__mapDeps([19,1,2,4,5,6,16,7,20,14]))),re=t.lazy(()=>d(()=>import("./SettingsBilling-DJqZCjxR.js"),__vite__mapDeps([21,1,2,3,4,13,12,7,8,9,10,11,18,16,14,15]))),ae=t.lazy(()=>d(()=>import("./SettingIntegration-d28A8Miw.js"),__vite__mapDeps([22,1,2,13,12,7,3,4,20,18,16,14]))),ie=()=>{const{currentView:s}=v(),{smaller:a,larger:l}=U();return e.jsx(K,{className:"h-full",children:e.jsxs("div",{className:"flex flex-auto h-full",children:[l.lg&&e.jsx("div",{className:"'w-[200px] xl:w-[280px]",children:e.jsx(N,{})}),e.jsxs("div",{className:"ltr:xl:pl-6 rtl:xl:pr-6 flex-1 py-2",children:[a.lg&&e.jsx("div",{className:"mb-6",children:e.jsx(Y,{})}),e.jsxs(t.Suspense,{fallback:e.jsx(e.Fragment,{}),children:[s==="profile"&&e.jsx(Z,{}),s==="security"&&e.jsx(ee,{}),s==="notification"&&e.jsx(se,{}),s==="billing"&&e.jsx(re,{}),s==="integration"&&e.jsx(ae,{})]})]})]})})};export{ie as default};
