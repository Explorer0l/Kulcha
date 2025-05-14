"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[555],{59:(r,e,t)=>{t.d(e,{A:()=>l});var i=t(43),o=t(216),n=t(464),s=t(367),a=t(579);const c=n.Ay.nav`
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
`,d=n.Ay.button`
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
`,l=()=>{const r=(0,o.Zp)(),e=(0,o.zy)(),{selectedCity:t,selectedRestaurant:n,restaurants:l,deliveryMethod:h,setDeliveryMethod:p}=(0,s.Us)(),[x,g]=(0,i.useState)("home");(0,i.useEffect)((()=>{e.pathname.includes("city-selection")?g("city"):e.pathname.includes("restaurant-selection")?g("restaurant"):"/"===e.pathname&&g("home")}),[e.pathname]);const v=null!==n?l.find((r=>r.id===n)):null;return(0,a.jsxs)(c,{children:[(0,a.jsxs)(d,{onClick:()=>{r("/city-selection")},active:"city"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,a.jsxs)(d,{onClick:()=>{t&&r(n?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,a.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,a.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),v?v.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,a.jsxs)(d,{onClick:()=>p("delivery"),active:"delivery"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,a.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,a.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,a.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,a.jsxs)(d,{onClick:()=>p("pickup"),active:"pickup"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 10h12"}),(0,a.jsx)("path",{d:"M4 14h9"}),(0,a.jsx)("path",{d:"M4 18h6"}),(0,a.jsx)("path",{d:"M18 15v6"}),(0,a.jsx)("path",{d:"M15 18h6"}),(0,a.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},526:(r,e,t)=>{t.d(e,{A:()=>h});t(43);var i=t(216),o=t(464),n=t(367),s=t(579);const a=o.Ay.header`
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
`,c=o.Ay.div`
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
`,d=o.Ay.button`
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
`,l=o.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,h=()=>{const r=(0,i.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,n.Us)();return(0,s.jsxs)(a,{children:[(0,s.jsx)(c,{onClick:()=>r("/"),children:(0,s.jsx)(l,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,s.jsx)(d,{onClick:()=>r("/profile"),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}},555:(r,e,t)=>{t.r(e),t.d(e,{default:()=>D});var i=t(43),o=t(216),n=t(464),s=t(997),a=t(526),c=t(59),d=t(367),l=t(505),h=t(579);const p=(0,n.Ay)(s.Z_)`
  min-height: 70vh;
`,x=n.Ay.div`
  margin-bottom: var(--spacing-xl);
`,g=(0,n.Ay)(s.Wk)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,v=n.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`,m=n.Ay.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`,u=n.Ay.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
`,y=n.Ay.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 159, 13, 0.15);
  color: var(--primary-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-lg);
`,j=n.Ay.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`,w=n.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,b=n.Ay.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`,f=n.Ay.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  
  &:last-child {
    margin-bottom: 0;
  }
`,k=n.Ay.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  width: 40%;
`,A=n.Ay.span`
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
`,z=n.Ay.div`
  margin-top: var(--spacing-md);
`,C=n.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,L=n.Ay.span`
  font-size: 0.95rem;
  color: var(--text-color);
`,M=n.Ay.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
`,B=n.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,W=n.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,$=n.Ay.span`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`,Z=n.Ay.span`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
`,H=n.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,Y=(0,n.Ay)(s.$n)`
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`,_=(0,n.Ay)(s.$n)`
  flex: 1;
  padding: var(--spacing-md);
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    background-color: rgba(255, 159, 13, 0.1);
    transform: translateY(-2px);
  }
`,D=()=>{const{orderHistory:r}=(0,d.Us)(),e=(0,o.Zp)(),{showBackButton:t,hideBackButton:n}=(0,l.A)(),D=r.length>0?r[r.length-1]:null;(0,i.useEffect)((()=>(n(),D?(console.log("Last order found:",D.id,"for restaurant:",D.restaurantId),localStorage.setItem(`order_synced_${D.id}`,"true"),()=>{t()}):(console.log("No order found in history, redirecting to home"),void e("/")))),[n,D,e,t]);return D?(0,h.jsx)(p,{children:(0,h.jsxs)(s.mc,{children:[(0,h.jsx)(a.A,{}),(0,h.jsx)(c.A,{}),(0,h.jsx)(s.DF,{children:(0,h.jsxs)(x,{children:[(0,h.jsx)(g,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,h.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d"]})}),(0,h.jsxs)(v,{children:[(0,h.jsx)(m,{children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,h.jsxs)(u,{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",D.id]}),(0,h.jsx)(y,{children:(r=>{try{switch(r){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}}catch(e){return console.error("Error getting status label:",e),"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}})(D.status)}),(0,h.jsxs)(j,{children:["\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437! \u041c\u044b \u0443\u0436\u0435 \u043d\u0430\u0447\u0430\u043b\u0438 \u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c.",(0,h.jsx)("br",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."]})]}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(b,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,h.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,h.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,h.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,h.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(k,{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430:"}),(0,h.jsxs)(A,{children:["#",D.id]})]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(k,{children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f:"}),(0,h.jsx)(A,{children:(r=>{try{const e=new Date(r);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e)}catch(e){return console.error("Error formatting date:",e),r}})(D.date)})]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(k,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f:"}),(0,h.jsx)(A,{children:"delivery"===D.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),(0,h.jsxs)(b,{style:{marginTop:"var(--spacing-lg)"},children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,h.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,h.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,h.jsx)(z,{children:D.items.map(((r,e)=>(0,h.jsxs)(C,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(L,{children:r.name}),(0,h.jsxs)(M,{children:["x",r.quantity]})]}),(0,h.jsxs)(B,{children:["\u20bd",r.price*r.quantity]})]},e)))}),(0,h.jsxs)(W,{children:[(0,h.jsx)($,{children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,h.jsxs)(Z,{children:["\u20bd",D.totalAmount]})]})]}),(0,h.jsxs)(H,{children:[(0,h.jsxs)(Y,{onClick:()=>e("/"),children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,h.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"]}),(0,h.jsxs)(_,{onClick:()=>e("/profile"),children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),(0,h.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),(0,h.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),(0,h.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),(0,h.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),(0,h.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]})]})]})})]})}):null}}}]);
//# sourceMappingURL=555.8bc84aa2.chunk.js.map