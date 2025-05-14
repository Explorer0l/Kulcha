"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[636],{59:(e,r,i)=>{i.d(r,{A:()=>c});var t=i(43),o=i(216),s=i(464),n=i(367),a=i(579);const d=s.Ay.nav`
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
`,l=s.Ay.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-sm);
  background: ${e=>e.active?"linear-gradient(to bottom, rgba(var(--primary-color-rgb), 0.08), transparent)":"transparent"};
  border: none;
  color: ${e=>e.active?"var(--primary-color)":"var(--text-secondary)"};
  font-size: 0.9rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  font-weight: ${e=>e.active?"600":"500"};
  
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
    width: ${e=>e.active?"40%":"0"};
    height: 3px;
    background-color: var(--primary-color);
    border-radius: 3px 3px 0 0;
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  &:hover:not(:disabled) {
    color: var(--primary-color);
    background-color: rgba(var(--primary-color-rgb), 0.05);
    
    &::after {
      width: ${e=>e.active?"60%":"30%"};
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
`,c=()=>{const e=(0,o.Zp)(),r=(0,o.zy)(),{selectedCity:i,selectedRestaurant:s,restaurants:c,deliveryMethod:h,setDeliveryMethod:x}=(0,n.Us)(),[p,g]=(0,t.useState)("home");(0,t.useEffect)((()=>{r.pathname.includes("city-selection")?g("city"):r.pathname.includes("restaurant-selection")?g("restaurant"):"/"===r.pathname&&g("home")}),[r.pathname]);const v=null!==s?c.find((e=>e.id===s)):null;return(0,a.jsxs)(d,{children:[(0,a.jsxs)(l,{onClick:()=>{e("/city-selection")},active:"city"===p,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),i?i.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,a.jsxs)(l,{onClick:()=>{i&&e(s?"/home":"/restaurant-selection")},disabled:!i,active:"restaurant"===p,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,a.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,a.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),v?v.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,a.jsxs)(l,{onClick:()=>x("delivery"),active:"delivery"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,a.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,a.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,a.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,a.jsxs)(l,{onClick:()=>x("pickup"),active:"pickup"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 10h12"}),(0,a.jsx)("path",{d:"M4 14h9"}),(0,a.jsx)("path",{d:"M4 18h6"}),(0,a.jsx)("path",{d:"M18 15v6"}),(0,a.jsx)("path",{d:"M15 18h6"}),(0,a.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},526:(e,r,i)=>{i.d(r,{A:()=>h});i(43);var t=i(216),o=i(464),s=i(367),n=i(579);const a=o.Ay.header`
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
`,d=o.Ay.div`
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
`,c=o.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,h=()=>{const e=(0,t.Zp)(),{selectedCity:r,selectedRestaurant:i}=(0,s.Us)();return(0,n.jsxs)(a,{children:[(0,n.jsx)(d,{onClick:()=>e("/"),children:(0,n.jsx)(c,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,n.jsx)(l,{onClick:()=>e("/profile"),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,n.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}},636:(e,r,i)=>{i.r(r),i.d(r,{default:()=>D});var t=i(43),o=i(216),s=i(464),n=i(997),a=i(526),d=i(59),l=i(367),c=i(505),h=i(579);const x=(0,s.Ay)(n.Z_)`
  min-height: 70vh;
`,p=s.Ay.div`
  margin-bottom: var(--spacing-xl);
`,g=(0,s.Ay)(n.Wk)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,v=s.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,j=s.Ay.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 159, 13, 0.15);
  color: var(--primary-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`,m=s.Ay.div`
  display: flex;
  justify-content: space-between;
  margin: var(--spacing-lg) 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 1;
  }
`,u=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 1;
  
  &:first-child {
    align-items: flex-start;
  }
  
  &:last-child {
    align-items: flex-end;
  }
`,w=s.Ay.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${e=>e.$completed?"var(--primary-color)":e.$active?"var(--primary-dark)":"var(--background-light)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xs);
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.$completed||e.$active?"var(--primary-color)":"transparent"};
  
  svg {
    color: ${e=>e.$completed?"white":e.$active?"var(--primary-color)":"var(--text-secondary)"};
  }
`,y=s.Ay.span`
  font-size: 0.8rem;
  color: ${e=>e.$completed||e.$active?"var(--primary-color)":"var(--text-secondary)"};
  font-weight: ${e=>e.$completed||e.$active?"600":"400"};
  text-align: center;
  max-width: 100px;
  
  @media (max-width: 600px) {
    display: none;
  }
`,k=s.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,f=s.Ay.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`,b=s.Ay.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  
  &:last-child {
    margin-bottom: 0;
  }
`,$=s.Ay.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  width: 40%;
`,A=s.Ay.span`
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
`,L=s.Ay.div`
  margin-top: var(--spacing-md);
`,C=s.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,z=s.Ay.span`
  font-size: 0.95rem;
  color: var(--text-color);
`,B=s.Ay.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
`,M=s.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,W=s.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,H=s.Ay.span`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`,V=s.Ay.span`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
`,Z=(0,s.Ay)(n.$n)`
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
`,D=()=>{const{orderHistory:e}=(0,l.Us)(),r=(0,o.Zp)(),{orderId:i}=(0,o.g)(),{showBackButton:s,hideBackButton:D,setBackButtonCallback:F}=(0,c.A)(),S=e.find((e=>e.id.toString()===i));(0,t.useEffect)((()=>(s(),F((()=>{r("/profile")})),()=>{D()})),[D,r,F,s]);const U=(e,r)=>e<=r,Y=(e,r)=>e===r;if(!S)return(0,h.jsxs)(n.mc,{children:[(0,h.jsx)(a.A,{}),(0,h.jsx)(d.A,{}),(0,h.jsx)(n.DF,{children:(0,h.jsxs)(n.pp,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,h.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,h.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,h.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,h.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),(0,h.jsx)("h3",{children:"\u0417\u0430\u043a\u0430\u0437 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),(0,h.jsx)("p",{children:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0437\u0430\u043a\u0430\u0437 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d."}),(0,h.jsx)(n.$n,{onClick:()=>r("/profile"),children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})})]});const R=(T=S.status,["pending","confirmed","preparing","ready","delivered"].indexOf(T));var T;return(0,h.jsx)(x,{children:(0,h.jsxs)(n.mc,{children:[(0,h.jsx)(a.A,{}),(0,h.jsx)(d.A,{}),(0,h.jsx)(n.DF,{children:(0,h.jsxs)(p,{children:[(0,h.jsx)(g,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,h.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,h.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,h.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,h.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0417\u0430\u043a\u0430\u0437 \u2116",S.id]})}),(0,h.jsxs)(v,{children:[(0,h.jsx)(j,{children:(e=>{switch(e){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}})(S.status)}),(0,h.jsxs)(m,{children:[(0,h.jsxs)(u,{$active:Y(0,R),$completed:U(0,R),children:[(0,h.jsx)(w,{$active:Y(0,R),$completed:U(0,R),children:U(0,R)?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}),(0,h.jsx)(y,{$active:Y(0,R),$completed:U(0,R),children:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"})]}),(0,h.jsxs)(u,{$active:Y(1,R),$completed:U(1,R),children:[(0,h.jsx)(w,{$active:Y(1,R),$completed:U(1,R),children:U(1,R)?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,h.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),(0,h.jsx)(y,{$active:Y(1,R),$completed:U(1,R),children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"})]}),(0,h.jsxs)(u,{$active:Y(2,R),$completed:U(2,R),children:[(0,h.jsx)(w,{$active:Y(2,R),$completed:U(2,R),children:U(2,R)?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),(0,h.jsx)(y,{$active:Y(2,R),$completed:U(2,R),children:"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f"})]}),(0,h.jsxs)(u,{$active:Y(3,R),$completed:U(3,R),children:[(0,h.jsx)(w,{$active:Y(3,R),$completed:U(3,R),children:U(3,R)?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("polyline",{points:"20 12 20 22 4 22 4 12"}),(0,h.jsx)("rect",{x:"2",y:"7",width:"20",height:"5"}),(0,h.jsx)("line",{x1:"12",y1:"22",x2:"12",y2:"7"}),(0,h.jsx)("path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}),(0,h.jsx)("path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"})]})}),(0,h.jsx)(y,{$active:Y(3,R),$completed:U(3,R),children:"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435"})]}),(0,h.jsxs)(u,{$active:Y(4,R),$completed:U(4,R),children:[(0,h.jsx)(w,{$active:Y(4,R),$completed:U(4,R),children:U(4,R)?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,h.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),(0,h.jsx)("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]})}),(0,h.jsx)(y,{$active:Y(4,R),$completed:U(4,R),children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"})]})]})]}),(0,h.jsxs)(k,{children:[(0,h.jsxs)(f,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,h.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,h.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,h.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,h.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430:"}),(0,h.jsxs)(A,{children:["#",S.id]})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f:"}),(0,h.jsx)(A,{children:(e=>{const r=new Date(e);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)})(S.date)})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f:"}),(0,h.jsx)(A,{children:"delivery"===S.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),"delivery"===S.deliveryMethod&&S.userAddress&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f,{style:{marginTop:"var(--spacing-md)"},children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c:"}),(0,h.jsx)(A,{children:S.userAddress.name})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"}),(0,h.jsx)(A,{children:S.userAddress.phone})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u0413\u043e\u0440\u043e\u0434:"}),(0,h.jsx)(A,{children:"object"===typeof S.userAddress.city&&null!==S.userAddress.city?S.userAddress.city.name||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d":String(S.userAddress.city||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d")})]}),(0,h.jsxs)(b,{children:[(0,h.jsx)($,{children:"\u0410\u0434\u0440\u0435\u0441:"}),(0,h.jsx)(A,{children:S.userAddress.address})]})]}),(0,h.jsxs)(f,{style:{marginTop:"var(--spacing-lg)"},children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,h.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,h.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,h.jsx)(L,{children:S.items.map(((e,r)=>(0,h.jsxs)(C,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(z,{children:e.name}),(0,h.jsxs)(B,{children:["x",e.quantity]})]}),(0,h.jsxs)(M,{children:["\u20bd",e.price*e.quantity]})]},r)))}),(0,h.jsxs)(W,{children:[(0,h.jsx)(H,{children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,h.jsxs)(V,{children:["\u20bd",S.totalAmount]})]})]}),(0,h.jsxs)(Z,{onClick:()=>r("/profile"),children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,h.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]})]})})]})})}}}]);
//# sourceMappingURL=636.fc9bce58.chunk.js.map