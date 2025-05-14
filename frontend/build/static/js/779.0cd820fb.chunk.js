"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[779],{59:(r,e,t)=>{t.d(e,{A:()=>l});var o=t(43),i=t(216),a=t(464),n=t(367),s=t(579);const c=a.Ay.nav`
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
`,d=a.Ay.button`
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
`,l=()=>{const r=(0,i.Zp)(),e=(0,i.zy)(),{selectedCity:t,selectedRestaurant:a,restaurants:l,deliveryMethod:h,setDeliveryMethod:p}=(0,n.Us)(),[x,g]=(0,o.useState)("home");(0,o.useEffect)((()=>{e.pathname.includes("city-selection")?g("city"):e.pathname.includes("restaurant-selection")?g("restaurant"):"/"===e.pathname&&g("home")}),[e.pathname]);const u=null!==a?l.find((r=>r.id===a)):null;return(0,s.jsxs)(c,{children:[(0,s.jsxs)(d,{onClick:()=>{r("/city-selection")},active:"city"===x,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,s.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,s.jsxs)(d,{onClick:()=>{t&&r(a?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===x,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,s.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,s.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),u?u.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,s.jsxs)(d,{onClick:()=>p("delivery"),active:"delivery"===h,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,s.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,s.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,s.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,s.jsxs)(d,{onClick:()=>p("pickup"),active:"pickup"===h,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M4 10h12"}),(0,s.jsx)("path",{d:"M4 14h9"}),(0,s.jsx)("path",{d:"M4 18h6"}),(0,s.jsx)("path",{d:"M18 15v6"}),(0,s.jsx)("path",{d:"M15 18h6"}),(0,s.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},343:(r,e,t)=>{t.d(e,{A:()=>c});t(43);var o=t(216),i=t(464),a=t(367),n=t(579);const s=i.Ay.button`
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
`,c=()=>{const r=(0,o.Zp)(),{cart:e}=(0,a.Us)(),t=e.reduce(((r,e)=>r+e.quantity),0);return(0,n.jsxs)(s,{onClick:()=>r("/cart"),children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,n.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,n.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),t>0&&(0,n.jsx)("span",{children:t}),(0,n.jsx)("style",{children:"\n  @keyframes cartItemAppear {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"})]})}},526:(r,e,t)=>{t.d(e,{A:()=>h});t(43);var o=t(216),i=t(464),a=t(367),n=t(579);const s=i.Ay.header`
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
`,h=()=>{const r=(0,o.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,a.Us)();return(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{onClick:()=>r("/"),children:(0,n.jsx)(l,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,n.jsx)(d,{onClick:()=>r("/profile"),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,n.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}},779:(r,e,t)=>{t.r(e),t.d(e,{default:()=>b});var o=t(43),i=t(216),a=t(997),n=t(526),s=t(59),c=t(343),d=t(367),l=t(505),h=t(291),p=t(464),x=t(579);const g=p.Ay.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-lg);
`,u=p.Ay.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
  border: 2px solid var(--primary-color); /* Оранжевая обводка */
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background-color: #2F2F2F; /* Серый фон */
  color: white; /* Белый текст для контраста */
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:focus {
    border-color: var(--primary-light);
    box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);
    outline: none;
  }
  
  &::placeholder {
    color: #BBBBBB; /* Светло-серый для плейсхолдера */
  }
  
  /* Стили для темной темы */
  .dark-theme & {
    background-color: #2A2A2A;
    border-color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    
    &:focus {
      border-color: var(--primary-light);
      box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.35);
    }
    
    &::placeholder {
      color: #aaa;
    }
  }
`,v=p.Ay.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  .dark-theme & {
    color: #aaa;
  }
`,m=p.Ay.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-secondary);
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-md);
`,b=()=>{const r=(0,i.Zp)(),{selectedCity:e,setSelectedCity:t}=(0,d.Us)(),{hideBackButton:p,hideMainButton:b}=(0,l.A)(),[w,y]=(0,o.useState)([]),[f,j]=(0,o.useState)(!0),[k,C]=(0,o.useState)("");(0,o.useEffect)((()=>{(async()=>{try{j(!0);const r=await h.FH.getCities();Array.isArray(r)?y(r):(console.error("Cities data is not an array:",r),y([])),j(!1)}catch(r){console.error("Failed to load cities:",r),j(!1)}})()}),[]),(0,o.useEffect)((()=>{f||0!==w.length||r("/")}),[w,r,f]),(0,o.useEffect)((()=>(p(),b(),()=>{p()})),[p,b]);const A=w.filter((r=>r.name.toLowerCase().includes(k.toLowerCase())));return f?(0,x.jsxs)(a.mc,{children:[(0,x.jsx)(n.A,{}),(0,x.jsx)(s.A,{}),(0,x.jsx)(a.DF,{children:(0,x.jsx)(a._k,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u043e\u0432..."})})]}):(0,x.jsxs)(a.mc,{children:[(0,x.jsx)(n.A,{}),(0,x.jsx)(s.A,{}),(0,x.jsxs)(a.DF,{children:[(0,x.jsx)(a._k,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0433\u043e\u0440\u043e\u0434"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(a.gE,{children:[(0,x.jsx)(a.JU,{htmlFor:"citySearch",children:"\u041f\u043e\u0438\u0441\u043a \u0433\u043e\u0440\u043e\u0434\u0430"}),(0,x.jsxs)(g,{children:[(0,x.jsx)(v,{children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,x.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),(0,x.jsx)(u,{id:"citySearch",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430...",value:k,onChange:r=>{C(r.target.value)},autoComplete:"off"})]})]}),(0,x.jsx)("h3",{style:{marginTop:"30px"},children:k?"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),A.length>0?(0,x.jsx)(a.DZ,{children:A.map((e=>(0,x.jsxs)(a.Qf,{onClick:()=>(e=>{const o=w.find((r=>r.id===e));o&&(t(o),r("/restaurant-selection"))})(e.id),children:[(0,x.jsx)(a.Ry,{children:e.name}),(0,x.jsx)(a.hD,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434"})]},e.id)))}):(0,x.jsx)(m,{children:(0,x.jsx)("p",{children:"\u0413\u043e\u0440\u043e\u0434\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441."})})]})]}),(0,x.jsx)(c.A,{})]})}}}]);
//# sourceMappingURL=779.0cd820fb.chunk.js.map