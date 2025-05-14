"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[227],{59:(r,t,e)=>{e.d(t,{A:()=>l});var o=e(43),a=e(216),i=e(464),n=e(367),s=e(579);const c=i.Ay.nav`
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
`,d=i.Ay.button`
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
`,l=()=>{const r=(0,a.Zp)(),t=(0,a.zy)(),{selectedCity:e,selectedRestaurant:i,restaurants:l,deliveryMethod:h,setDeliveryMethod:p}=(0,n.Us)(),[x,g]=(0,o.useState)("home");(0,o.useEffect)((()=>{t.pathname.includes("city-selection")?g("city"):t.pathname.includes("restaurant-selection")?g("restaurant"):"/"===t.pathname&&g("home")}),[t.pathname]);const m=null!==i?l.find((r=>r.id===i)):null;return(0,s.jsxs)(c,{children:[(0,s.jsxs)(d,{onClick:()=>{r("/city-selection")},active:"city"===x,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,s.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),e?e.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,s.jsxs)(d,{onClick:()=>{e&&r(i?"/home":"/restaurant-selection")},disabled:!e,active:"restaurant"===x,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,s.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,s.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),m?m.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,s.jsxs)(d,{onClick:()=>p("delivery"),active:"delivery"===h,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,s.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,s.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,s.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,s.jsxs)(d,{onClick:()=>p("pickup"),active:"pickup"===h,children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M4 10h12"}),(0,s.jsx)("path",{d:"M4 14h9"}),(0,s.jsx)("path",{d:"M4 18h6"}),(0,s.jsx)("path",{d:"M18 15v6"}),(0,s.jsx)("path",{d:"M15 18h6"}),(0,s.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},227:(r,t,e)=>{e.r(t),e.d(t,{default:()=>C});var o=e(43),a=e(216),i=e(997),n=e(526),s=e(59),c=e(343),d=e(367),l=e(505),h=e(464),p=e(291),x=e(579);const g=h.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  height: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--box-shadow);
    
    &::after {
      opacity: 0.7;
    }
    
    .restaurant-info {
      transform: translateY(0);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
    opacity: 0.5;
    transition: opacity var(--transition-normal);
    z-index: 1;
  }
`,m=h.Ay.div`
  width: 100%;
  height: 100%;
  background-image: ${r=>r.$bgImage?`url(${r.$bgImage})`:"linear-gradient(45deg, var(--primary-dark), var(--primary-color))"};
  background-size: cover;
  background-position: center;
  transition: transform var(--transition-normal);
  
  ${g}:hover & {
    transform: scale(1.1);
  }
`,u=h.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-md);
  color: var(--text-color);
  z-index: 2;
  transform: translateY(10px);
  transition: transform var(--transition-normal);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 4px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
  }
`,v=(0,h.Ay)(i.hD)`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-light);
  }
`,b=h.Ay.span`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background-color: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,f=h.Ay.div`
  margin-bottom: var(--spacing-md);
  position: relative;
`,w=(0,h.Ay)(i.pd)`
  padding-left: 40px;
  width: 100%;
  background-color: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,y=h.Ay.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,j=(0,h.Ay)(i.pp)`
  padding: var(--spacing-lg);
  margin-top: var(--spacing-md);
`,k=["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4","https://images.unsplash.com/photo-1552566626-52f8b828add9","https://images.unsplash.com/photo-1514933651103-005eec06c04b","https://images.unsplash.com/photo-1559339352-11d035aa65de"],C=()=>{const r=(0,a.Zp)(),{selectedCity:t,setSelectedRestaurant:e}=(0,d.Us)(),[h,C]=(0,o.useState)(""),[A,z]=(0,o.useState)([]),[L,M]=(0,o.useState)(!0),[B,$]=(0,o.useState)(null),{showBackButton:Y,hideBackButton:Z,hideMainButton:S,setBackButtonCallback:W}=(0,l.A)();(0,o.useEffect)((()=>{(async()=>{if(t)try{M(!0);const r=await p.FH.getRestaurantsByCity(t.id);z(r),M(!1)}catch(r){console.error(`Failed to load restaurants for city ${t.id}:`,r),M(!1)}})()}),[t]);const D=(0,o.useMemo)((()=>{if(!t)return[];let r=A;if(h.trim()){const t=h.toLowerCase().trim();r=r.filter((r=>r.name.toLowerCase().includes(t)||r.address.toLowerCase().includes(t)))}return r}),[A,t,h]);(0,o.useEffect)((()=>{t||r("/city-selection")}),[t,r]),(0,o.useEffect)((()=>(t?(Y(),W((()=>{r("/city-selection")}))):Z(),S(),()=>{Z()})),[Y,Z,S,W,r,t]);const H=r=>k[r%k.length];return L?(0,x.jsxs)(i.mc,{children:[(0,x.jsx)(n.A,{}),(0,x.jsx)(s.A,{}),(0,x.jsx)(i.DF,{children:(0,x.jsx)(i._k,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432..."})})]}):(0,x.jsx)(i.Z_,{children:(0,x.jsxs)(i.mc,{children:[(0,x.jsx)(n.A,{}),(0,x.jsx)(s.A,{}),(0,x.jsxs)(i.DF,{children:[(0,x.jsx)(i._k,{children:t?`\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ${t.name}`:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"}),(0,x.jsxs)(f,{children:[(0,x.jsx)(y,{children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,x.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),(0,x.jsx)(w,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432...",value:h,onChange:r=>C(r.target.value)})]}),D.length>0?(0,x.jsx)(i.DZ,{children:D.map(((t,o)=>(0,x.jsxs)(g,{onClick:()=>(async t=>{try{$(t),await e(t),r("/home")}catch(o){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430:",o),$(null)}})(t.id),children:[(0,x.jsx)(m,{$bgImage:t.coverImage||H(o)}),t.rating>=4.5&&(0,x.jsx)(b,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439"}),(0,x.jsxs)(u,{className:"restaurant-info",children:[(0,x.jsx)("h3",{children:t.name}),(0,x.jsx)("p",{children:t.address}),(0,x.jsx)(v,{children:B===t.id?(0,x.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):(0,x.jsx)("span",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"})})]})]},t.id)))}):(0,x.jsx)(j,{children:h?"\u041d\u0435\u0442 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443":"\u0412 \u044d\u0442\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"})]}),(0,x.jsx)(c.A,{})]})})}},343:(r,t,e)=>{e.d(t,{A:()=>c});e(43);var o=e(216),a=e(464),i=e(367),n=e(579);const s=a.Ay.button`
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
`,c=()=>{const r=(0,o.Zp)(),{cart:t}=(0,i.Us)(),e=t.reduce(((r,t)=>r+t.quantity),0);return(0,n.jsxs)(s,{onClick:()=>r("/cart"),children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,n.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,n.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),e>0&&(0,n.jsx)("span",{children:e}),(0,n.jsx)("style",{children:"\n  @keyframes cartItemAppear {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"})]})}},526:(r,t,e)=>{e.d(t,{A:()=>h});e(43);var o=e(216),a=e(464),i=e(367),n=e(579);const s=a.Ay.header`
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
`,c=a.Ay.div`
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
`,d=a.Ay.button`
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
`,l=a.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,h=()=>{const r=(0,o.Zp)(),{selectedCity:t,selectedRestaurant:e}=(0,i.Us)();return(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{onClick:()=>r("/"),children:(0,n.jsx)(l,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,n.jsx)(d,{onClick:()=>r("/profile"),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,n.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}}}]);
//# sourceMappingURL=227.9c5e5ea7.chunk.js.map