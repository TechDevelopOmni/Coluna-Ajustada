import{an as rt,ak as mt,r as w,ao as Kt}from"./index-C5xnPUKa.js";async function Ce(){return rt.fetchDataWithAxios({url:"/setting/profile",method:"get"})}async function Ae(){return rt.fetchDataWithAxios({url:"/setting/notification",method:"get"})}async function be(){return rt.fetchDataWithAxios({url:"/setting/billing",method:"get"})}async function Ve(){return rt.fetchDataWithAxios({url:"/setting/intergration",method:"get"})}const P=()=>{},O=P(),lt=Object,a=t=>t===O,y=t=>typeof t=="function",U=(t,e)=>({...t,...e}),Yt=t=>y(t.then),st=new WeakMap;let Xt=0;const Q=t=>{const e=typeof t,n=t&&t.constructor,i=n==Date;let s,r;if(lt(t)===t&&!i&&n!=RegExp){if(s=st.get(t),s)return s;if(s=++Xt+"~",st.set(t,s),n==Array){for(s="@",r=0;r<t.length;r++)s+=Q(t[r])+",";st.set(t,s)}if(n==lt){s="#";const c=lt.keys(t).sort();for(;!a(r=c.pop());)a(t[r])||(s+=r+":"+Q(t[r])+",");st.set(t,s)}}else s=i?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},x=new WeakMap,ft={},ot={},St="undefined",it=typeof window!=St,Rt=typeof document!=St,Qt=()=>it&&typeof window.requestAnimationFrame!=St,Mt=(t,e)=>{const n=x.get(t);return[()=>!a(e)&&t.get(e)||ft,i=>{if(!a(e)){const s=t.get(e);e in ot||(ot[e]=s),n[5](e,U(s,i),s||ft)}},n[6],()=>!a(e)&&e in ot?ot[e]:!a(e)&&t.get(e)||ft]};let gt=!0;const Zt=()=>gt,[Tt,_t]=it&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[P,P],te=()=>{const t=Rt&&document.visibilityState;return a(t)||t!=="hidden"},ee=t=>(Rt&&document.addEventListener("visibilitychange",t),Tt("focus",t),()=>{Rt&&document.removeEventListener("visibilitychange",t),_t("focus",t)}),ne=t=>{const e=()=>{gt=!0,t()},n=()=>{gt=!1};return Tt("online",e),Tt("offline",n),()=>{_t("online",e),_t("offline",n)}},se={isOnline:Zt,isVisible:te},oe={initFocus:ee,initReconnect:ne},yt=!mt.useId,Z=!it||"Deno"in window,re=t=>Qt()?window.requestAnimationFrame(t):setTimeout(t,1),dt=Z?w.useEffect:w.useLayoutEffect,Et=typeof navigator<"u"&&navigator.connection,Ft=!Z&&Et&&(["slow-2g","2g"].includes(Et.effectiveType)||Et.saveData),wt=t=>{if(y(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Q(t):"",[t,e]};let ie=0;const pt=()=>++ie,Pt=0,Ut=1,qt=2,ae=3;var X={__proto__:null,ERROR_REVALIDATE_EVENT:ae,FOCUS_EVENT:Pt,MUTATE_EVENT:qt,RECONNECT_EVENT:Ut};async function Ht(...t){const[e,n,i,s]=t,r=U({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let c=r.populateCache;const h=r.rollbackOnError;let d=r.optimisticData;const b=D=>typeof h=="function"?h(D):h!==!1,p=r.throwOnError;if(y(n)){const D=n,R=[],I=e.keys();for(const T of I)!/^\$(inf|sub)\$/.test(T)&&D(e.get(T)._k)&&R.push(T);return Promise.all(R.map(g))}return g(n);async function g(D){const[R]=wt(D);if(!R)return;const[I,T]=Mt(e,R),[at,o,tt,K]=x.get(e),M=()=>{const V=at[R];return(y(r.revalidate)?r.revalidate(I().data,D):r.revalidate!==!1)&&(delete tt[R],delete K[R],V&&V[0])?V[0](qt).then(()=>I().data):I().data};if(t.length<3)return M();let m=i,C;const H=pt();o[R]=[H,0];const E=!a(d),G=I(),L=G.data,$=G._c,q=a($)?L:$;if(E&&(d=y(d)?d(q,L):d,T({data:d,_c:q})),y(m))try{m=m(q)}catch(V){C=V}if(m&&Yt(m))if(m=await m.catch(V=>{C=V}),H!==o[R][0]){if(C)throw C;return m}else C&&E&&b(C)&&(c=!0,T({data:q,_c:O}));if(c&&!C)if(y(c)){const V=c(m,q);T({data:V,error:O,_c:O})}else T({data:m,error:O,_c:O});if(o[R][1]=pt(),Promise.resolve(M()).then(()=>{T({_c:O})}),C){if(p)throw C;return}return m}}const Wt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},ce=(t,e)=>{if(!x.has(t)){const n=U(oe,e),i={},s=Ht.bind(O,t);let r=P;const c={},h=(p,g)=>{const D=c[p]||[];return c[p]=D,D.push(g),()=>D.splice(D.indexOf(g),1)},d=(p,g,D)=>{t.set(p,g);const R=c[p];if(R)for(const I of R)I(g,D)},b=()=>{if(!x.has(t)&&(x.set(t,[i,{},{},{},s,d,h]),!Z)){const p=n.initFocus(setTimeout.bind(O,Wt.bind(O,i,Pt))),g=n.initReconnect(setTimeout.bind(O,Wt.bind(O,i,Ut)));r=()=>{p&&p(),g&&g(),x.delete(t)}}};return b(),[t,s,b,r]}return[t,x.get(t)[4]]},ue=(t,e,n,i,s)=>{const r=n.errorRetryCount,c=s.retryCount,h=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!a(r)&&c>r||setTimeout(i,h,s)},le=(t,e)=>Q(t)==Q(e),[Gt,fe]=ce(new Map),de=U({onLoadingSlow:P,onSuccess:P,onError:P,onErrorRetry:ue,onDiscarded:P,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ft?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ft?5e3:3e3,compare:le,isPaused:()=>!1,cache:Gt,mutate:fe,fallback:{}},se),Ee=(t,e)=>{const n=U(t,e);if(e){const{use:i,fallback:s}=t,{use:r,fallback:c}=e;i&&r&&(n.use=i.concat(r)),s&&c&&(n.fallback=U(s,c))}return n},he=w.createContext({}),Re="$inf$",$t=it&&window.__SWR_DEVTOOLS_USE__,ge=$t?window.__SWR_DEVTOOLS_USE__:[],Te=()=>{$t&&(window.__SWR_DEVTOOLS_REACT__=mt)},_e=t=>y(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],pe=()=>U(de,w.useContext(he)),me=t=>(e,n,i)=>t(e,n&&((...r)=>{const[c]=wt(e),[,,,h]=x.get(Gt);if(c.startsWith(Re))return n(...r);const d=h[c];return a(d)?n(...r):(delete h[c],d)}),i),Se=ge.concat(me),we=t=>function(...n){const i=pe(),[s,r,c]=_e(n),h=Ee(i,c);let d=t;const{use:b}=h,p=(b||[]).concat(Se);for(let g=p.length;g--;)d=p[g](d);return d(s,r||h.fetcher||null,h)},De=(t,e,n)=>{const i=e[t]||(e[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s>=0&&(i[s]=i[i.length-1],i.pop())}};Te();const xt=mt.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),ht={dedupe:!0},ve=(t,e,n)=>{const{cache:i,compare:s,suspense:r,fallbackData:c,revalidateOnMount:h,revalidateIfStale:d,refreshInterval:b,refreshWhenHidden:p,refreshWhenOffline:g,keepPreviousData:D}=n,[R,I,T,at]=x.get(i),[o,tt]=wt(t),K=w.useRef(!1),M=w.useRef(!1),m=w.useRef(o),C=w.useRef(e),H=w.useRef(n),E=()=>H.current,G=()=>E().isVisible()&&E().isOnline(),[L,$,q,V]=Mt(i,o),j=w.useRef({}).current,jt=a(c)?n.fallback[o]:c,Dt=(u,l)=>{for(const S in j){const f=S;if(f==="data"){if(!s(u[f],l[f])&&(!a(u[f])||!s(nt,l[f])))return!1}else if(l[f]!==u[f])return!1}return!0},vt=w.useMemo(()=>{const u=!o||!e?!1:a(h)?E().isPaused()||r?!1:a(d)?!0:d:h,l=v=>{const F=U(v);return delete F._k,u?{isValidating:!0,isLoading:!0,...F}:F},S=L(),f=V(),N=l(S),J=S===f?N:l(f);let _=N;return[()=>{const v=l(L());return Dt(v,_)?(_.data=v.data,_.isLoading=v.isLoading,_.isValidating=v.isValidating,_.error=v.error,_):(_=v,v)},()=>J]},[i,o]),k=Kt.useSyncExternalStore(w.useCallback(u=>q(o,(l,S)=>{Dt(S,l)||u()}),[i,o]),vt[0],vt[1]),Ot=!K.current,kt=R[o]&&R[o].length>0,B=k.data,z=a(B)?jt:B,et=k.error,Ct=w.useRef(z),nt=D?a(B)?Ct.current:B:z,At=kt&&!a(et)?!1:Ot&&!a(h)?h:E().isPaused()?!1:r?a(z)?!1:d:a(z)||d,bt=!!(o&&e&&Ot&&At),Bt=a(k.isValidating)?bt:k.isValidating,zt=a(k.isLoading)?bt:k.isLoading,Y=w.useCallback(async u=>{const l=C.current;if(!o||!l||M.current||E().isPaused())return!1;let S,f,N=!0;const J=u||{},_=!T[o]||!J.dedupe,v=()=>yt?!M.current&&o===m.current&&K.current:o===m.current,F={isValidating:!1,isLoading:!1},It=()=>{$(F)},Lt=()=>{const A=T[o];A&&A[1]===f&&delete T[o]},Nt={isValidating:!0};a(L().data)&&(Nt.isLoading=!0);try{if(_&&($(Nt),n.loadingTimeout&&a(L().data)&&setTimeout(()=>{N&&v()&&E().onLoadingSlow(o,n)},n.loadingTimeout),T[o]=[l(tt),pt()]),[S,f]=T[o],S=await S,_&&setTimeout(Lt,n.dedupingInterval),!T[o]||T[o][1]!==f)return _&&v()&&E().onDiscarded(o),!1;F.error=O;const A=I[o];if(!a(A)&&(f<=A[0]||f<=A[1]||A[1]===0))return It(),_&&v()&&E().onDiscarded(o),!1;const W=L().data;F.data=s(W,S)?W:S,_&&v()&&E().onSuccess(S,o,n)}catch(A){Lt();const W=E(),{shouldRetryOnError:ct}=W;W.isPaused()||(F.error=A,_&&v()&&(W.onError(A,o,W),(ct===!0||y(ct)&&ct(A))&&(!E().revalidateOnFocus||!E().revalidateOnReconnect||G())&&W.onErrorRetry(A,o,W,Jt=>{const ut=R[o];ut&&ut[0]&&ut[0](X.ERROR_REVALIDATE_EVENT,Jt)},{retryCount:(J.retryCount||0)+1,dedupe:!0})))}return N=!1,It(),!0},[o,i]),Vt=w.useCallback((...u)=>Ht(i,m.current,...u),[]);if(dt(()=>{C.current=e,H.current=n,a(B)||(Ct.current=B)}),dt(()=>{if(!o)return;const u=Y.bind(O,ht);let l=0;const f=De(o,R,(N,J={})=>{if(N==X.FOCUS_EVENT){const _=Date.now();E().revalidateOnFocus&&_>l&&G()&&(l=_+E().focusThrottleInterval,u())}else if(N==X.RECONNECT_EVENT)E().revalidateOnReconnect&&G()&&u();else{if(N==X.MUTATE_EVENT)return Y();if(N==X.ERROR_REVALIDATE_EVENT)return Y(J)}});return M.current=!1,m.current=o,K.current=!0,$({_k:tt}),At&&(a(z)||Z?u():re(u)),()=>{M.current=!0,f()}},[o]),dt(()=>{let u;function l(){const f=y(b)?b(L().data):b;f&&u!==-1&&(u=setTimeout(S,f))}function S(){!L().error&&(p||E().isVisible())&&(g||E().isOnline())?Y(ht).then(l):l()}return l(),()=>{u&&(clearTimeout(u),u=-1)}},[b,p,g,o]),w.useDebugValue(nt),r&&a(z)&&o){if(!yt&&Z)throw new Error("Fallback data is required when using suspense in SSR.");C.current=e,H.current=n,M.current=!1;const u=at[o];if(!a(u)){const l=Vt(u);xt(l)}if(a(et)){const l=Y(ht);a(nt)||(l.status="fulfilled",l.value=!0),xt(l)}else throw et}return{mutate:Vt,get data(){return j.data=!0,nt},get error(){return j.error=!0,et},get isValidating(){return j.isValidating=!0,Bt},get isLoading(){return j.isLoading=!0,zt}}},Ie=we(ve);export{Ce as a,Ae as b,be as c,Ve as d,Ie as u};
