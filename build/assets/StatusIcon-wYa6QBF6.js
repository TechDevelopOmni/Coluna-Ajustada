import{r as e,j as n}from"./index-CMbCRzoG.js";import{d as l,e as x,f,g as m}from"./CloseButton-49zcuuf0.js";function E(o,c=0,s=!0){const t=e.useRef(),r=e.useRef(o),i=e.useCallback(()=>{t.current&&clearTimeout(t.current)},[]),u=e.useCallback(()=>{t.current&&clearTimeout(t.current),s&&(t.current=setTimeout(()=>{var a;(a=r.current)==null||a.call(r)},c))},[c,s]);return e.useEffect(()=>{r.current=o},[o]),e.useEffect(()=>(u(),i),[c,s,u,i]),{clear:i,reset:u}}const C={success:{color:"text-success",icon:n.jsx(l,{})},info:{color:"text-info",icon:n.jsx(x,{})},warning:{color:"text-warning",icon:n.jsx(f,{})},danger:{color:"text-error",icon:n.jsx(m,{})}},g=o=>{const{type:c="info",custom:s,iconColor:t}=o,r=C[c];return n.jsx("span",{className:`text-2xl ${t||r.color}`,children:s||r.icon})};export{g as S,E as u};