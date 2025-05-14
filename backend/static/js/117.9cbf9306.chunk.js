"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[117],{59:(r,e,t)=>{t.d(e,{A:()=>l});var i=t(43),n=t(216),o=t(464),s=t(367),a=t(579);const d=o.Ay.nav`
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
`,c=o.Ay.button`
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
`,l=()=>{const r=(0,n.Zp)(),e=(0,n.zy)(),{selectedCity:t,selectedRestaurant:o,restaurants:l,deliveryMethod:h,setDeliveryMethod:p}=(0,s.Us)(),[x,g]=(0,i.useState)("home");(0,i.useEffect)((()=>{e.pathname.includes("city-selection")?g("city"):e.pathname.includes("restaurant-selection")?g("restaurant"):"/"===e.pathname&&g("home")}),[e.pathname]);const u=null!==o?l.find((r=>r.id===o)):null;return(0,a.jsxs)(d,{children:[(0,a.jsxs)(c,{onClick:()=>{r("/city-selection")},active:"city"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,a.jsxs)(c,{onClick:()=>{t&&r(o?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,a.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,a.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),u?u.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,a.jsxs)(c,{onClick:()=>p("delivery"),active:"delivery"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,a.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,a.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,a.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,a.jsxs)(c,{onClick:()=>p("pickup"),active:"pickup"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 10h12"}),(0,a.jsx)("path",{d:"M4 14h9"}),(0,a.jsx)("path",{d:"M4 18h6"}),(0,a.jsx)("path",{d:"M18 15v6"}),(0,a.jsx)("path",{d:"M15 18h6"}),(0,a.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},117:(r,e,t)=>{t.r(e),t.d(e,{default:()=>j});var i=t(43),n=t(216),o=t(997),s=t(526),a=t(59),d=t(343),c=t(367),l=t(505),h=t(464),p=t(579);const x=(0,h.Ay)(o.Z_)`
  min-height: 70vh;
`,g=(0,h.Ay)(o.jt)`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--background-color);
  padding: var(--spacing-sm) 0;
  margin-bottom: var(--spacing-lg);
`,u=(0,h.Ay)(o.m_)`
  border-radius: var(--border-radius-lg);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,m=h.Ay.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,v=(0,h.Ay)(o.gE)`
  grid-column: span 2;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`,b=h.Ay.button`
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  width: 100%;
  margin-top: var(--spacing-md);
  
  &:hover {
    background-color: var(--primary-light);
  }
`,y=((0,h.Ay)(o.gO)`
  background-color: var(--card-bg);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,h.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,h.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,h.Ay.span`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${r=>{switch(r.$status){case"delivered":return"#4CAF50";case"cancelled":return"#F44336";default:return"#FF9800"}}};
  color: white;
`,h.Ay.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-sm);
`,h.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`),j=(h.Ay.span`
  color: var(--text-color);
`,h.Ay.span`
  color: var(--text-secondary);
`,h.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-sm);
`,()=>{const[r,e]=(0,i.useState)("orders"),[t,h]=(0,i.useState)(!1),j=(0,n.Zp)(),{orderHistory:w,userAddress:f,updateUserAddress:k}=(0,c.Us)(),{showBackButton:C,hideBackButton:A,setBackButtonCallback:B,hideMainButton:L}=(0,l.A)();(0,i.useEffect)((()=>(C(),L(),B((()=>{j("/")})),()=>{A()})),[A,L,j,B,C]);const z=r=>{const{name:e,value:t}=r.target;k({...f||{name:"",phone:"",address:"",city:""},[e]:t}),h(!1)},M=r=>{switch(r){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";case"rejected":return"\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}},_=r=>{switch(r){case"pending":return"#FFC107";case"confirmed":return"#2196F3";case"preparing":return"#9C27B0";case"ready":return"#4CAF50";case"delivered":return"#8BC34A";case"rejected":return"#F44336";default:return"#607D8B"}};return(0,p.jsx)(x,{children:(0,p.jsxs)(o.mc,{children:[(0,p.jsx)(s.A,{}),(0,p.jsx)(a.A,{}),(0,p.jsxs)(o.DF,{children:[(0,p.jsx)(o._k,{children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,p.jsxs)(g,{children:[(0,p.jsxs)(u,{onClick:()=>e("orders"),$active:"orders"===r,children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,p.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,p.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]}),(0,p.jsxs)(u,{onClick:()=>e("address"),$active:"address"===r,children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,p.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"]})]}),"address"===r&&(0,p.jsxs)(o.WB,{children:[(0,p.jsx)(o._k,{children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),t&&(0,p.jsxs)("div",{style:{padding:"var(--spacing-sm)",backgroundColor:"#4CAF50",color:"white",borderRadius:"var(--border-radius-sm)",marginBottom:"var(--spacing-md)",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"8px"},children:[(0,p.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,p.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d!"]}),(0,p.jsxs)(m,{onSubmit:r=>{r.preventDefault(),h(!0)},children:[(0,p.jsxs)(o.gE,{children:[(0,p.jsx)(o.JU,{htmlFor:"name",children:"\u0418\u043c\u044f"}),(0,p.jsx)(o.pd,{type:"text",id:"name",name:"name",value:(null===f||void 0===f?void 0:f.name)||"",onChange:z,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0})]}),(0,p.jsxs)(o.gE,{children:[(0,p.jsx)(o.JU,{htmlFor:"phone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,p.jsx)(o.pd,{type:"tel",id:"phone",name:"phone",value:(null===f||void 0===f?void 0:f.phone)||"",onChange:z,placeholder:"+7 (___) ___-__-__",required:!0})]}),(0,p.jsxs)(o.gE,{children:[(0,p.jsx)(o.JU,{htmlFor:"city",children:"\u0413\u043e\u0440\u043e\u0434"}),(0,p.jsx)(o.pd,{type:"text",id:"city",name:"city",value:"object"===typeof(null===f||void 0===f?void 0:f.city)&&null!==(null===f||void 0===f?void 0:f.city)?f.city.name||"":String((null===f||void 0===f?void 0:f.city)||""),onChange:z,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"})]}),(0,p.jsxs)(o.gE,{children:[(0,p.jsx)(o.JU,{htmlFor:"address",children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,p.jsx)(o.pd,{type:"text",id:"address",name:"address",value:(null===f||void 0===f?void 0:f.address)||"",onChange:z,placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c, \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430"})]}),(0,p.jsx)(v,{children:(0,p.jsx)(b,{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441"})})]})]}),"orders"===r&&(0,p.jsxs)(o.rd,{children:[(0,p.jsx)(o._k,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),0===w.length?(0,p.jsxs)(o.pp,{children:[(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,p.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,p.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,p.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),(0,p.jsx)("h3",{children:"\u041d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),(0,p.jsx)("p",{children:"\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430."}),(0,p.jsx)(b,{onClick:()=>j("/"),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"})]}):w.map((r=>{return(0,p.jsxs)(y,{onClick:()=>{return e=r.id,void j(`/orders/${e}`);var e},children:[(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-sm)"},children:[(0,p.jsxs)("div",{style:{fontWeight:"bold"},children:["\u0417\u0430\u043a\u0430\u0437 #",r.id]}),(0,p.jsx)("div",{style:{display:"inline-block",padding:"4px 8px",borderRadius:"12px",fontSize:"0.8rem",fontWeight:"bold",color:"white",backgroundColor:_(r.status)},children:M(r.status)})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"var(--spacing-sm)"},children:[(0,p.jsx)("div",{children:(e=r.date,new Date(e).toLocaleString())}),(0,p.jsx)("div",{children:"delivery"===r.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"var(--spacing-sm)"},children:[(0,p.jsxs)("div",{style:{fontSize:"0.9rem"},children:[r.items.length," ",1===r.items.length?"\u0442\u043e\u0432\u0430\u0440":r.items.length>=2&&r.items.length<=4?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),(0,p.jsxs)("div",{style:{fontWeight:"bold",color:"var(--primary-color)"},children:["\u20bd",r.totalAmount]})]})]},r.id);var e}))]})]}),(0,p.jsx)(d.A,{})]})})})},343:(r,e,t)=>{t.d(e,{A:()=>d});t(43);var i=t(216),n=t(464),o=t(367),s=t(579);const a=n.Ay.button`
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
`,d=()=>{const r=(0,i.Zp)(),{cart:e}=(0,o.Us)(),t=e.reduce(((r,e)=>r+e.quantity),0);return(0,s.jsxs)(a,{onClick:()=>r("/cart"),children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,s.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,s.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),t>0&&(0,s.jsx)("span",{children:t}),(0,s.jsx)("style",{children:"\n  @keyframes cartItemAppear {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n    }\n    50% {\n      transform: scale(1.2);\n    }\n    100% {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"})]})}},526:(r,e,t)=>{t.d(e,{A:()=>h});t(43);var i=t(216),n=t(464),o=t(367),s=t(579);const a=n.Ay.header`
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
`,d=n.Ay.div`
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
`,c=n.Ay.button`
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
`,l=n.Ay.img`
  height: 38px;
  object-fit: contain;
  transition: filter 0.3s ease;
  
  @media (max-width: 767px) {
    height: 32px;
  }
`,h=()=>{const r=(0,i.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,o.Us)();return(0,s.jsxs)(a,{children:[(0,s.jsx)(d,{onClick:()=>r("/"),children:(0,s.jsx)(l,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,s.jsx)(c,{onClick:()=>r("/profile"),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}}}]);
//# sourceMappingURL=117.9cbf9306.chunk.js.map