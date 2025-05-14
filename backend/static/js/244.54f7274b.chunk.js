"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[244],{59:(r,e,t)=>{t.d(e,{A:()=>d});var i=t(43),o=t(216),n=t(464),s=t(367),a=t(579);const c=n.Ay.nav`
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
`,l=n.Ay.button`
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
`,d=()=>{const r=(0,o.Zp)(),e=(0,o.zy)(),{selectedCity:t,selectedRestaurant:n,restaurants:d,deliveryMethod:h,setDeliveryMethod:x}=(0,s.Us)(),[p,g]=(0,i.useState)("home");(0,i.useEffect)((()=>{e.pathname.includes("city-selection")?g("city"):e.pathname.includes("restaurant-selection")?g("restaurant"):"/"===e.pathname&&g("home")}),[e.pathname]);const v=null!==n?d.find((r=>r.id===n)):null;return(0,a.jsxs)(c,{children:[(0,a.jsxs)(l,{onClick:()=>{r("/city-selection")},active:"city"===p,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,a.jsxs)(l,{onClick:()=>{t&&r(n?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===p,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,a.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,a.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),v?v.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,a.jsxs)(l,{onClick:()=>x("delivery"),active:"delivery"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,a.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,a.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,a.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,a.jsxs)(l,{onClick:()=>x("pickup"),active:"pickup"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 10h12"}),(0,a.jsx)("path",{d:"M4 14h9"}),(0,a.jsx)("path",{d:"M4 18h6"}),(0,a.jsx)("path",{d:"M18 15v6"}),(0,a.jsx)("path",{d:"M15 18h6"}),(0,a.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},244:(r,e,t)=>{t.r(e),t.d(e,{default:()=>q});var i=t(43),o=t(216),n=t(464),s=t(997),a=t(526),c=t(59),l=t(343),d=t(367),h=t(505),x=t(579);const p=(0,n.Ay)(s.Z_)`
  min-height: 70vh;
`,g=n.Ay.div`
  margin-bottom: var(--spacing-xl);
`,v=(0,n.Ay)(s.Wk)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,m=n.Ay.div`
  display: flex;
  align-items: center;
`,u=n.Ay.button`
  background-color: transparent;
  color: #F44336;
  border: 1px solid #F44336;
  padding: 8px 12px;
  border-radius: var(--border-radius-sm);
  font-size: 0.95rem;
  font-weight: 500;
  margin-left: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #F44336;
    color: white;
    transform: translateY(-2px);
  }
`,b=n.Ay.div`
  margin-bottom: var(--spacing-xl);
`,w=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,y=n.Ay.div`
  flex: 1;
`,j=n.Ay.h3`
  font-size: 1.1rem;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
`,f=n.Ay.div`
  font-weight: 600;
  color: var(--primary-color);
`,k=n.Ay.div`
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  margin-left: var(--spacing-md);
`,A=n.Ay.button`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
  }
  
  &:disabled {
    background-color: var(--primary-dark);
    opacity: 0.6;
    cursor: not-allowed;
  }
`,C=n.Ay.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.1rem;
`,L=n.Ay.div`
  display: flex;
  align-items: center;
`,z=n.Ay.button`
  background-color: #F44336;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #D32F2F;
    transform: scale(1.05);
  }
`,B=n.Ay.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,M=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`,W=n.Ay.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
`,F=n.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,H=(0,n.Ay)(W)`
  font-size: 1.1rem;
  color: var(--text-color);
`,Y=(0,n.Ay)(F)`
  font-size: 1.2rem;
  color: var(--primary-color);
`,Z=(0,n.Ay)(s.$n)`
  width: 100%;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`,q=()=>{const{cart:r,updateCartItemQuantity:e,removeFromCart:t,clearCart:n}=(0,d.Us)(),q=(0,o.Zp)(),{showBackButton:$,hideBackButton:V,setBackButtonCallback:D}=(0,h.A)();(0,i.useEffect)((()=>($(),D((()=>{q(-1)})),()=>{V()})),[V,q,D,$]);const U=r.reduce(((r,e)=>r+e.price*e.quantity),0),I=U+150;return(0,x.jsx)(p,{children:(0,x.jsxs)(s.mc,{children:[(0,x.jsx)(a.A,{}),(0,x.jsx)(c.A,{}),(0,x.jsx)(s.DF,{children:(0,x.jsxs)(g,{children:[(0,x.jsxs)(v,{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,x.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,x.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),r.length>0&&(0,x.jsxs)(m,{children:[(0,x.jsxs)("span",{style:{fontSize:"1.1rem"},children:[r.length," ",1===r.length?"\u0442\u043e\u0432\u0430\u0440":r.length>=2&&r.length<=4?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),(0,x.jsxs)(u,{onClick:n,children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,x.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})]})]}),0===r.length?(0,x.jsxs)(s.pp,{children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,x.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,x.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),(0,x.jsx)("h3",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),(0,x.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u043a\u0443\u0441\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c!"}),(0,x.jsx)(s.$n,{onClick:()=>q("/home"),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b,{children:r.map((r=>(0,x.jsxs)(w,{children:[(0,x.jsxs)(y,{children:[(0,x.jsx)(j,{children:r.name}),(0,x.jsxs)(f,{children:["\u20bd",r.price]})]}),(0,x.jsxs)(L,{children:[(0,x.jsxs)(k,{children:[(0,x.jsx)(A,{onClick:()=>{return i=r.id,void((o=r.quantity)>1?e(i,o-1):t(i));var i,o},"aria-label":"Decrease quantity",children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,x.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),(0,x.jsx)(C,{children:r.quantity}),(0,x.jsx)(A,{onClick:()=>{return t=r.id,i=r.quantity,void e(t,i+1);var t,i},"aria-label":"Increase quantity",children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,x.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),(0,x.jsx)(z,{onClick:()=>t(r.id),"aria-label":"Remove item",children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,x.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]},r.id)))}),(0,x.jsxs)(B,{children:[(0,x.jsxs)(M,{children:[(0,x.jsx)(W,{children:"\u041f\u043e\u0434\u044b\u0442\u043e\u0433"}),(0,x.jsxs)(F,{children:["\u20bd",U]})]}),(0,x.jsxs)(M,{children:[(0,x.jsx)(W,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,x.jsxs)(F,{children:["\u20bd",150]})]}),(0,x.jsxs)(M,{children:[(0,x.jsx)(H,{children:"\u0418\u0442\u043e\u0433\u043e"}),(0,x.jsxs)(Y,{children:["\u20bd",I]})]}),(0,x.jsxs)(Z,{onClick:()=>{q("/checkout")},children:[(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,x.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,x.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e"]})]})]})]})}),(0,x.jsx)(l.A,{})]})})}},343:(r,e,t)=>{t.d(e,{A:()=>c});t(43);var i=t(216),o=t(464),n=t(367),s=t(579);const a=o.Ay.button`
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
`,c=()=>{const r=(0,i.Zp)(),{cart:e}=(0,n.Us)(),t=e.reduce(((r,e)=>r+e.quantity),0);return(0,s.jsxs)(a,{onClick:()=>r("/cart"),children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,s.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,s.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),t>0&&(0,s.jsx)("span",{children:t}),(0,s.jsx)("style",{children:"\n  @keyframes cartItemAppear {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"})]})}},526:(r,e,t)=>{t.d(e,{A:()=>h});t(43);var i=t(216),o=t(464),n=t(367),s=t(579);const a=o.Ay.header`
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
`,l=o.Ay.button`
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
`,d=o.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,h=()=>{const r=(0,i.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,n.Us)();return(0,s.jsxs)(a,{children:[(0,s.jsx)(c,{onClick:()=>r("/"),children:(0,s.jsx)(d,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,s.jsx)(l,{onClick:()=>r("/profile"),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}}}]);
//# sourceMappingURL=244.54f7274b.chunk.js.map