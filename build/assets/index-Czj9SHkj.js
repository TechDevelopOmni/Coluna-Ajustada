import{r as h,j as e,N as v,G as F}from"./index-C5xnPUKa.js";import{u as S,A as y,a as N}from"./useTimeOutMessage-D_qmnJuV.js";import{B as x}from"./Button-00hYv7Hf.js";import{z as u,u as w,t as C,F as P,a as k,C as B,I as E}from"./index-Bqj6aw2Y.js";import"./StatusIcon-C6Vy-A8T.js";import"./CloseButton-BVrOH7-u.js";import"./classNames-BhlWOSM5.js";import"./isNil-CBg1yYkj.js";import"./index-S9UlLO8O.js";const A=u.object({email:u.string().email().min(5)}),I=r=>{var d;const[s,t]=h.useState(!1),{className:i,setMessage:a,setEmailSent:o,emailSent:n,children:p}=r,{handleSubmit:g,formState:{errors:c},control:j}=w({resolver:C(A)}),f=async l=>{const{email:b}=l;try{await v({email:b})&&(t(!1),o==null||o(!0))}catch(m){a==null||a(typeof m=="string"?m:"Some error occured!"),t(!1)}t(!1)};return e.jsx("div",{className:i,children:n?e.jsx(e.Fragment,{children:p}):e.jsxs(P,{onSubmit:g(f),children:[e.jsx(k,{label:"Email",invalid:!!c.email,errorMessage:(d=c.email)==null?void 0:d.message,children:e.jsx(B,{name:"email",control:j,render:({field:l})=>e.jsx(E,{type:"email",placeholder:"Email",autoComplete:"off",...l})})}),e.jsx(x,{block:!0,loading:s,variant:"solid",type:"submit",children:s?"Submiting...":"Submit"})]})})},M=({signInUrl:r="/sign-in"})=>{const[s,t]=h.useState(!1),[i,a]=S(),o=F(),n=()=>{o(r)};return e.jsxs("div",{children:[e.jsx("div",{className:"mb-6",children:s?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2",children:"Check your email"}),e.jsx("p",{className:"font-semibold heading-text",children:"We have sent a password recovery to your email"})]}):e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2",children:"Forgot Password"}),e.jsx("p",{className:"font-semibold heading-text",children:"Please enter your email to receive a verification code"})]})}),i&&e.jsx(y,{showIcon:!0,className:"mb-4",type:"danger",children:i}),e.jsx(I,{emailSent:s,setMessage:a,setEmailSent:t,children:e.jsx(x,{block:!0,variant:"solid",type:"button",onClick:n,children:"Continue"})}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsx("span",{children:"Back to "}),e.jsx(N,{to:r,className:"heading-text font-bold",themeColor:!1,children:"Sign in"})]})]})},H=()=>e.jsx(M,{});export{M as ForgotPasswordBase,H as default};
