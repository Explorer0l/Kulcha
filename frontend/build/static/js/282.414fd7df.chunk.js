"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[282],{59:(r,e,t)=>{t.d(e,{A:()=>l});var a=t(43),i=t(216),o=t(464),s=t(367),n=t(579);const c=o.Ay.nav`
  display: flex;
  justify-content: space-between;
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  margin: var(--spacing-md) 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
    margin: 0;
  }
`,d=o.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-sm);
  background: ${r=>r.active?"linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.08), transparent)":"transparent"};
  border: none;
  color: ${r=>r.active?"var(--primary-color)":"var(--text-secondary)"};
  font-size: 0.9rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  font-weight: ${r=>r.active?"600":"500"};
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${r=>r.active?"40%":"0"};
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 3px 3px 0 0;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &:hover:not(:disabled) {
    color: var(--primary-color);
    background-color: rgba(var(--primary-color-rgb), 0.05);
    
    &::after {
      width: ${r=>r.active?"60%":"30%"};
    }
    
    svg {
      transform: translateY(-2px);
    }
  }
  
  svg {
    margin-bottom: var(--spacing-xs);
    width: 20px;
    height: 20px;
    stroke-width: 2;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  @media (max-width: 767px) {
    padding: var(--spacing-sm) var(--spacing-xs);
    font-size: 0.8rem;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
`,l=()=>{const r=(0,i.Zp)(),e=(0,i.zy)(),{selectedCity:t,selectedRestaurant:o,restaurants:l,deliveryMethod:p,setDeliveryMethod:g}=(0,s.Us)(),[h,m]=(0,a.useState)("home");(0,a.useEffect)((()=>{e.pathname.includes("city-selection")?m("city"):e.pathname.includes("restaurant-selection")?m("restaurant"):"/"===e.pathname&&m("home")}),[e.pathname]);const x=null!==o?l.find((r=>r.id===o)):null;return(0,n.jsxs)(c,{children:[(0,n.jsxs)(d,{onClick:()=>{r("/city-selection")},active:"city"===h,children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,n.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,n.jsxs)(d,{onClick:()=>{t&&r(o?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===h,children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,n.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,n.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),x?x.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,n.jsxs)(d,{onClick:()=>g("delivery"),active:"delivery"===p,children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,n.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,n.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,n.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,n.jsxs)(d,{onClick:()=>g("pickup"),active:"pickup"===p,children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M4 10h12"}),(0,n.jsx)("path",{d:"M4 14h9"}),(0,n.jsx)("path",{d:"M4 18h6"}),(0,n.jsx)("path",{d:"M18 15v6"}),(0,n.jsx)("path",{d:"M15 18h6"}),(0,n.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},282:(r,e,t)=>{t.r(e),t.d(e,{default:()=>ir});var a=t(43),i=t(216),o=t(464),s=t(997),n=t(526),c=t(59),d=t(367),l=t(505),p=t(343),g=t(105),h=t(274),m=t(579);const x=o.Ay.div`
  padding: var(--spacing-md);
  max-width: 1400px;
  margin: 0 auto;
`,v=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
`,u=o.Ay.h2`
  margin: 0;
  color: var(--text-color);
`,b=o.Ay.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  overflow-x: auto;
  padding-bottom: var(--spacing-xs);
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--card-bg);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }
`,f=o.Ay.button`
  background-color: ${r=>r.$active?"var(--primary-color)":"var(--card-bg)"};
  color: ${r=>r.$active?"white":"var(--text-color)"};
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: ${r=>r.$active?"600":"400"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  svg, span {
    margin-right: var(--spacing-xs);
    font-size: 1.1rem;
  }
  
  &:hover {
    background-color: ${r=>r.$active?"var(--primary-light)":"var(--card-hover)"};
    transform: translateY(-2px);
  }
`,w=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  transition: opacity 0.3s ease;
`,y=o.Ay.div`
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--card-bg);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
  }
`,k=o.Ay.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.2) 100%);
    pointer-events: none;
  }
`,j=o.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  // Добавляем стили для ускорения рендеринга на мобильных устройствах
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`,A=o.Ay.div`
  padding: var(--spacing-md);
`,z=o.Ay.h3`
  margin: 0 0 var(--spacing-xs) 0;
  font-size: 1.1rem;
  color: var(--text-color);
`,C=o.Ay.p`
  margin: 0 0 var(--spacing-md) 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=o.Ay.div`
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
`,M=o.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  height: 32px;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: 0;
  opacity: 0;
  
  &.visible {
    max-height: 40px;
    opacity: 1;
    margin-bottom: var(--spacing-sm);
  }
`,$=o.Ay.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--card-hover);
  color: var(--text-color);
  border: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
    color: white;
    transform: scale(1.1);
  }
  
  &:disabled {
    background-color: var(--border-color);
    color: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }
`,Y=o.Ay.span`
  font-weight: 600;
  color: var(--text-color);
  font-size: 1.1rem;
`,B=o.Ay.div`
  position: absolute;
  top: -20px;
  right: 10px;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
  animation: flyUp 0.8s forwards;
  opacity: 0;
  z-index: 10;
  
  @keyframes flyUp {
    0% { transform: translateY(0); opacity: 0; }
    10% { opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translateY(-40px); opacity: 0; }
  }
`,W=(0,o.Ay)(y)`
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${r=>r.$delay}s;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,S=(0,o.Ay)(w)`
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,I=o.Ay.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  gap: var(--spacing-xs);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.added {
    background-color: #4CAF50; /* Зеленый цвет для успешного добавления */
    animation: pulse 0.6s ease-in-out;
  }
  
  &.active {
    background-color: var(--secondary-color); /* Контрастный цвет при активации */
    box-shadow: 0 0 12px rgba(46, 196, 182, 0.6); /* Свечение для привлечения внимания */
    transform: translateY(-2px); /* Легкий подъем для объемности */
  }
  
  &.added svg {
    transform: scale(1.2);
    animation: checkmarkAnim 0.5s ease-in-out;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes checkmarkAnim {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.4); opacity: 1; }
    100% { transform: scale(1.2); opacity: 1; }
  }
`,U=o.Ay.button`
  width: 100%;
  background-color: var(--success-color);
  color: white;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  gap: var(--spacing-xs);
  position: relative;
  overflow: hidden;
  margin-top: var(--spacing-sm);
  opacity: 0;
  max-height: 0;
  
  &.visible {
    opacity: 1;
    max-height: 60px;
    margin-top: var(--spacing-sm);
  }
  
  &:hover {
    background-color: var(--success-color);
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,T=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  text-align: center;
  border-radius: var(--border-radius-md);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 10;
  
  &.visible {
    opacity: 1;
    animation: pulse-hint 2s ease-in-out;
  }
  
  @keyframes pulse-hint {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
`,E=o.Ay.span`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  z-index: 5;
`,F=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-md);
    color: var(--border-color);
  }
  
  h3 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--text-color);
  }
  
  p {
    margin: 0;
  }
`,Z=[{id:"all",name:"\u0412\u0441\u0435",icon:"\ud83c\udf7d\ufe0f"},{id:"main",name:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435",icon:"\ud83c\udf72"},{id:"soups",name:"\u0421\u0443\u043f\u044b",icon:"\ud83e\udd63"},{id:"appetizers",name:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438",icon:"\ud83e\udd6a"},{id:"desserts",name:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b",icon:"\ud83c\udf70"},{id:"drinks",name:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438",icon:"\ud83e\udd64"}],H={main:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435",soups:"\u0421\u0443\u043f",appetizers:"\u0417\u0430\u043a\u0443\u0441\u043a\u0430",desserts:"\u0414\u0435\u0441\u0435\u0440\u0442",drinks:"\u041d\u0430\u043f\u0438\u0442\u043e\u043a"},N=r=>{if(!r)return"main";const e=r.toLowerCase();return["\u0441\u0443\u043f","\u0441\u0443\u043f\u044b","soup","soups"].includes(e)?"soups":["\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435","\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430","main course","main"].includes(e)?"main":["\u0437\u0430\u043a\u0443\u0441\u043a\u0430","\u0437\u0430\u043a\u0443\u0441\u043a\u0438","appetizer","appetizers"].includes(e)?"appetizers":["\u0434\u0435\u0441\u0435\u0440\u0442","\u0434\u0435\u0441\u0435\u0440\u0442\u044b","dessert","desserts"].includes(e)?"desserts":["\u043d\u0430\u043f\u0438\u0442\u043e\u043a","\u043d\u0430\u043f\u0438\u0442\u043a\u0438","drink","drinks"].includes(e)?"drinks":"main"},R=r=>{try{r.target&&r.currentTarget&&(r.target.src="/food-placeholder.png",r.currentTarget.classList&&r.currentTarget.classList.add("image-error"))}catch(e){console.warn("Error handling image error:",e)}},_=(0,a.memo)((r=>{let{src:e,alt:t,...i}=r;const[o,s]=(0,a.useState)(!1),n=(0,a.useCallback)((r=>{s(!0),R&&R(r)}),[]);return(0,m.jsx)(j,{src:o?"/food-placeholder.png":e||"/food-placeholder.png",alt:t||"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onError:n,loading:"lazy",decoding:"async",...i})}));_.displayName="SafeImage";const q=r=>{let{menuItems:e}=r;const[t,i]=(0,a.useState)("all"),{addToCart:o,cart:s}=(0,d.Us)(),[n,c]=(0,a.useState)({}),[l,p]=(0,a.useState)({}),[g,w]=(0,a.useState)({}),[y,j]=(0,a.useState)(!0),[R,q]=(0,a.useState)({}),[D,P]=(0,a.useState)({}),[V,X]=(0,a.useState)({});(0,a.useEffect)((()=>{const r={};s.forEach((e=>{r[e.id]=!0})),q(r)}),[s]),(0,a.useEffect)((()=>{j(!0);const r=setTimeout((()=>{j(!1)}),800);return()=>clearTimeout(r)}),[t]);const K=(0,a.useCallback)((r=>l[r]||1),[l]),G=(0,a.useCallback)((r=>{p((e=>({...e,[r]:Math.min((e[r]||1)+1,10)})))}),[]),J=(0,a.useCallback)((r=>{p((e=>({...e,[r]:Math.max((e[r]||1)-1,1)})))}),[]),O=(0,a.useCallback)((r=>{D[r.id]||(P((e=>({...e,[r.id]:!0}))),X((e=>({...e,[r.id]:!0}))),setTimeout((()=>{X((e=>({...e,[r.id]:!1})))}),3e3))}),[D]),Q=(0,a.useCallback)((r=>{if(n[r.id])return;c((e=>({...e,[r.id]:!0})));const e=K(r.id);w((e=>({...e,[r.id]:!0}))),setTimeout((()=>{w((e=>({...e,[r.id]:!1})))}),800),o({...r,quantity:e}),P((e=>({...e,[r.id]:!1}))),setTimeout((()=>{c((e=>({...e,[r.id]:!1})))}),1500)}),[o,n,K]),rr=(0,a.useCallback)((r=>{P((e=>({...e,[r]:!1}))),X((e=>({...e,[r]:!1})))}),[]),er=(0,a.useMemo)((()=>"all"===t?e.filter((r=>r.available)):e.filter((r=>N(r.category)===t&&r.available))),[e,t]),tr=(0,a.useCallback)((r=>{i(r)}),[]),ar=(0,a.useMemo)((()=>(0,m.jsx)(h.A,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u0435\u043d\u044e..."})),[]),ir=(0,a.useMemo)((()=>y?ar:0===er.length?(0,m.jsxs)(F,{children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M3 2h18"}),(0,m.jsx)("path",{d:"M10 11v4"}),(0,m.jsx)("path",{d:"M14 9v6"}),(0,m.jsx)("path",{d:"M4 22h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"})]}),(0,m.jsx)("h3",{children:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0431\u043b\u044e\u0434"}),(0,m.jsx)("p",{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0431\u043b\u044e\u0434."})]}):(0,m.jsx)(S,{children:er.map(((r,e)=>{return(0,m.jsxs)(W,{$delay:e%8*.05,children:[(0,m.jsxs)(k,{children:[(0,m.jsx)(E,{children:H[N(r.category)]||"\u0411\u043b\u044e\u0434\u043e"}),(0,m.jsx)(_,{src:r.imageUrl||"/food-placeholder.png",alt:r.name}),(0,m.jsx)(T,{className:V[r.id]?"visible":"",children:'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"'})]}),(0,m.jsxs)(A,{children:[(0,m.jsx)(z,{children:r.name}),(0,m.jsx)(C,{children:r.description}),(0,m.jsxs)(L,{children:["\u20bd",(t=r.price,new Intl.NumberFormat("ru-RU").format(t))]}),(0,m.jsxs)(M,{className:D[r.id]?"visible":"",children:[(0,m.jsx)($,{onClick:()=>J(r.id),disabled:K(r.id)<=1||n[r.id],children:"-"}),(0,m.jsx)(Y,{children:K(r.id)}),(0,m.jsx)($,{onClick:()=>G(r.id),disabled:K(r.id)>=10||n[r.id],children:"+"})]}),!D[r.id]&&(0,m.jsx)(I,{onClick:()=>O(r),disabled:n[r.id],className:n[r.id]?"added":D[r.id]?"active":"",children:n[r.id]?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,m.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}),(0,m.jsx)("path",{d:"M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}),(0,m.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})}),(0,m.jsxs)(U,{className:D[r.id]?"visible":"",onClick:()=>Q(r),disabled:n[r.id],children:[g[r.id]&&(0,m.jsxs)(B,{children:["+",K(r.id)]}),n[r.id]?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,m.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,m.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",K(r.id)>1?`(${K(r.id)})`:""]})]}),D[r.id]&&(0,m.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"var(--spacing-xs)"},children:(0,m.jsx)("button",{onClick:()=>rr(r.id),style:{background:"transparent",border:"none",color:"var(--text-secondary)",cursor:"pointer",fontSize:"0.9rem",padding:"var(--spacing-xs)"},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})})]})]},r.id);var t}))})),[er,O,Q,rr,D,n,K,G,J,g,y,ar,V]);return(0,m.jsxs)(x,{children:[(0,m.jsx)(v,{children:(0,m.jsx)(u,{children:"\u041c\u0435\u043d\u044e"})}),(0,m.jsx)(b,{children:Z.map((r=>(0,m.jsxs)(f,{$active:t===r.id,onClick:()=>tr(r.id),children:[(0,m.jsx)("span",{children:r.icon})," ",r.name]},r.id)))}),ir]})},D=a.memo(q),P=(0,o.Ay)(s.Z_)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding-bottom: 60px; /* Учитываем навигацию снизу в Telegram */
  }
`,V=o.Ay.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  @media (min-width: 768px) {
    height: 380px;
  }
  
  @media (max-width: 767px) {
    height: 280px;
    margin: var(--spacing-sm) var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--border-radius-md);
  }
  
  &:hover {
    transform: translateY(-4px);
  }
`,X=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-xl);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
  
  @media (max-width: 767px) {
    padding: var(--spacing-lg);
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`,K=o.Ay.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: ${r=>r.$bgImage?`url(${r.$bgImage})`:"url('/assets/images/paneer-tikka.jpg')"};
  background-position: center;
  background-size: cover;
  filter: brightness(0.9) contrast(1.05);
  animation: subtle-zoom 30s infinite alternate;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, 
                rgba(255, 159, 13, 0.1), 
                transparent 60%);
  }
  
  @keyframes subtle-zoom {
    0% {
      transform: scale(1.05) translate(0%, 0%);
    }
    50% {
      transform: scale(1.1) translate(-1%, -0.5%);
    }
    100% {
      transform: scale(1.15) translate(-2%, -1%);
    }
  }
`,G=o.Ay.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: white;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  max-width: 70%;
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (max-width: 767px) {
    font-size: 2rem;
    max-width: 100%;
    margin-bottom: var(--spacing-sm);
  }
`,J=o.Ay.p`
  font-size: 1.4rem;
  margin-bottom: var(--spacing-lg);
  color: rgba(255, 255, 255, 0.9);
  max-width: 60%;
  font-weight: 400;
  line-height: 1.4;
  
  @media (max-width: 767px) {
    font-size: 1.1rem;
    max-width: 100%;
    margin-bottom: var(--spacing-md);
  }
`,O=o.Ay.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 20px rgba(255, 159, 13, 0.4);
  transition: all 0.3s ease;
  letter-spacing: 0.02em;
  
  svg {
    margin-right: var(--spacing-sm);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(255, 159, 13, 0.5);
    
    svg {
      transform: translateX(2px);
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  @media (max-width: 767px) {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.95rem;
  }
`,Q=o.Ay.div`
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 767px) {
    margin: 0 var(--spacing-sm) var(--spacing-lg);
    padding: var(--spacing-md);
  }
`,rr=o.Ay.h2`
  color: var(--text-color);
  margin: 0 0 var(--spacing-xs) 0;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: 1.6rem;
`,er=o.Ay.p`
  color: var(--text-secondary);
  margin: 0;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-xs);
    color: var(--primary-color);
  }
`,tr=(0,o.Ay)(s.pp)`
  padding: var(--spacing-xl) var(--spacing-lg);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: var(--spacing-xl) auto;
  text-align: center;
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--primary-color);
    margin-bottom: var(--spacing-lg);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
    font-size: 1.1rem;
    line-height: 1.5;
  }
  
  @media (max-width: 767px) {
    margin: var(--spacing-lg) var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-md);
  }
`,ar=()=>{const r=(0,i.Zp)(),{selectedCity:e,selectedRestaurant:t,setSelectedRestaurant:o,restaurants:h}=(0,d.Us)(),{hideBackButton:x,hideMainButton:v}=(0,l.A)(),[u,b]=(0,a.useState)([]),f=t?h.find((r=>r.id===t)):null;(0,a.useEffect)((()=>{f&&(console.log("HomePage: \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430:",f),console.log("HomePage: URL \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f:",f.coverImage))}),[f]),(0,a.useEffect)((()=>{x(),v(),e?t||r("/restaurant-selection",{replace:!0}):r("/city-selection",{replace:!0})}),[x,v,e,t,r]),(0,a.useEffect)((()=>{if(t){(async()=>{try{const r=await(0,g.gL)(t);b(r)}catch(r){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043c\u0435\u043d\u044e:",r),b([])}})()}}),[t]);const w=()=>{v(),e?t||r("/restaurant-selection"):r("/city-selection")};return(0,m.jsxs)(P,{children:[(0,m.jsxs)(s.mc,{children:[(0,m.jsx)(n.A,{}),(0,m.jsx)(c.A,{}),(0,m.jsx)(s.DF,{children:e&&t?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(V,{children:[(0,m.jsx)(K,{$bgImage:null===f||void 0===f?void 0:f.coverImage}),(0,m.jsxs)(X,{children:[(0,m.jsx)(G,{children:null===f||void 0===f?void 0:f.name}),(0,m.jsxs)(J,{children:["\u041d\u0430\u0441\u043b\u0430\u0434\u0438\u0442\u0435\u0441\u044c \u043b\u0443\u0447\u0448\u0435\u0439 \u0435\u0434\u043e\u0439 \u0432 ",(null===e||void 0===e?void 0:e.name)||""]}),(0,m.jsxs)(O,{onClick:async()=>{try{await o(null),r("/restaurant-selection")}catch(e){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u0431\u0440\u043e\u0441\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430:",e)}},children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M11 17l-5-5 5-5"}),(0,m.jsx)("path",{d:"M18 17l-5-5 5-5"})]}),"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]})]})]}),(0,m.jsxs)(Q,{children:[(0,m.jsx)(rr,{children:null===f||void 0===f?void 0:f.name}),(0,m.jsxs)(er,{children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,m.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),null===e||void 0===e?void 0:e.name,", ",null===f||void 0===f?void 0:f.address]})]}),(0,m.jsx)(D,{menuItems:u})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(V,{children:[(0,m.jsx)(K,{}),(0,m.jsxs)(X,{children:[(0,m.jsx)(G,{children:"\u0412\u043a\u0443\u0441\u043d\u0430\u044f \u0435\u0434\u0430 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439"}),(0,m.jsx)(J,{children:"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0434\u043b\u044f \u0441\u0435\u0431\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0447\u043d\u044b\u0435 \u0432\u043a\u0443\u0441\u044b \u043b\u0443\u0447\u0448\u0438\u0445 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),(0,m.jsxs)(O,{onClick:w,children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,m.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"\u041d\u0430\u0447\u0430\u0442\u044c"]})]})]}),(0,m.jsxs)(tr,{children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,m.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,m.jsx)("h3",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),(0,m.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u0438 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"}),(0,m.jsxs)(O,{onClick:w,children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,m.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,m.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]})]})]})})]}),(0,m.jsx)(p.A,{})]})},ir=a.memo(ar)},343:(r,e,t)=>{t.d(e,{A:()=>c});t(43);var a=t(216),i=t(464),o=t(367),s=t(579);const n=i.Ay.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(var(--primary-color-rgb), 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 99;
  
  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
    transition: transform 0.3s ease;
  }
  
  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--secondary-color);
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    border: 2px solid var(--background-color);
    transform-origin: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 24px rgba(var(--primary-color-rgb), 0.5);
    
    svg {
      transform: scale(1.1);
    }
    
    span {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 20px rgba(var(--primary-color-rgb), 0.45);
  }
  
  @media (max-width: 767px) {
    bottom: 80px;
    right: 16px;
    width: 52px;
    height: 52px;
  }
`,c=()=>{const r=(0,a.Zp)(),{cart:e}=(0,o.Us)(),t=e.reduce(((r,e)=>r+e.quantity),0);return(0,s.jsxs)(n,{onClick:()=>r("/cart"),children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,s.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,s.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),t>0&&(0,s.jsx)("span",{children:t}),(0,s.jsx)("style",{children:"\n  @keyframes cartItemAppear {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"})]})}},526:(r,e,t)=>{t.d(e,{A:()=>p});t(43);var a=t(216),i=t(464),o=t(367),s=t(579);const n=i.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--border-color),
      transparent
    );
    opacity: 0.6;
  }
`,c=i.Ay.div`
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    height: 38px;
    object-fit: contain;
    
    @media (max-width: 767px) {
      height: 32px;
    }
  }
`,d=i.Ay.button`
  background: none;
  border: none;
  color: var(--text-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, 
                 rgba(var(--primary-color-rgb), 0.1), 
                 rgba(var(--primary-color-rgb), 0));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    border-radius: 50%;
  }
  
  &:hover {
    transform: translateY(-2px);
    color: var(--primary-color);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      stroke-width: 2.2;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }
`,l=i.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,p=()=>{const r=(0,a.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,o.Us)();return(0,s.jsxs)(n,{children:[(0,s.jsx)(c,{onClick:()=>r("/"),children:(0,s.jsx)(l,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,s.jsx)(d,{onClick:()=>r("/profile"),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}}}]);
//# sourceMappingURL=282.414fd7df.chunk.js.map