import{u as i,k as N,l as x,j as e,f as m,d as g,e as y,H as S,S as f,s as C,t as u,v as h}from"./index-CMbCRzoG.js";import{S as T}from"./ScrollBar-DxGYl0pj.js";import{L as j}from"./Logo-Dnwo5kzU.js";import{V as E}from"./VerticalMenuContent-B2XmDh0S.js";import{b as _,w as R}from"./UserProfileDropdown-CCV6HWnE.js";import{u as A,N as D}from"./Drawer-BUzX-TaF.js";const H={width:u,minWidth:u},I={width:h,minWidth:h},b=({translationSetup:l=!0,background:r=!0,className:n,contentClass:a,mode:d})=>{const c=i(s=>s.mode),o=i(s=>s.direction),t=i(s=>s.layout.sideNavCollapse),p=N(s=>s.currentRouteKey),v=x(s=>s.user.authority);return e.jsxs("div",{style:t?I:H,className:m("side-nav",r&&"side-nav-bg",!t&&"side-nav-expand",n),children:[e.jsx(g,{to:y.authenticatedEntryPath,className:"side-nav-header flex flex-col justify-center",style:{height:S},children:e.jsx(j,{imgClass:"max-h-10",mode:d||c,type:t?"streamline":"full",className:m(t&&"ltr:ml-[11.5px] ltr:mr-[11.5px]",t?f:C)})}),e.jsx("div",{className:m("side-nav-content",a),children:e.jsx(T,{style:{height:"100%"},direction:o,children:e.jsx(E,{collapsed:t,navigationTree:_,routeKey:p,direction:o,translationSetup:l,userAuthority:v||[]})})})]})},L=({className:l})=>{const{layout:r,setSideNavCollapse:n}=i(o=>o),a=r.sideNavCollapse,{larger:d}=A(),c=()=>{n(!a)};return e.jsx(e.Fragment,{children:d.md&&e.jsx("div",{className:l,role:"button",onClick:c,children:e.jsx(D,{className:"text-2xl",toggled:a})})})},k=R(L);export{b as S,k as a};