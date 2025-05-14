"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[554],{59:(r,e,t)=>{t.d(e,{A:()=>c});var i=t(43),o=t(216),s=t(464),n=t(367),a=t(579);const d=s.Ay.nav`
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
`,c=()=>{const r=(0,o.Zp)(),e=(0,o.zy)(),{selectedCity:t,selectedRestaurant:s,restaurants:c,deliveryMethod:h,setDeliveryMethod:p}=(0,n.Us)(),[x,g]=(0,i.useState)("home");(0,i.useEffect)((()=>{e.pathname.includes("city-selection")?g("city"):e.pathname.includes("restaurant-selection")?g("restaurant"):"/"===e.pathname&&g("home")}),[e.pathname]);const m=null!==s?c.find((r=>r.id===s)):null;return(0,a.jsxs)(d,{children:[(0,a.jsxs)(l,{onClick:()=>{r("/city-selection")},active:"city"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,a.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),t?t.name:"\u0413\u043e\u0440\u043e\u0434"]}),(0,a.jsxs)(l,{onClick:()=>{t&&r(s?"/home":"/restaurant-selection")},disabled:!t,active:"restaurant"===x,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,a.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,a.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),m?m.name:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]}),(0,a.jsxs)(l,{onClick:()=>p("delivery"),active:"delivery"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,a.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,a.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,a.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"]}),(0,a.jsxs)(l,{onClick:()=>p("pickup"),active:"pickup"===h,children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 10h12"}),(0,a.jsx)("path",{d:"M4 14h9"}),(0,a.jsx)("path",{d:"M4 18h6"}),(0,a.jsx)("path",{d:"M18 15v6"}),(0,a.jsx)("path",{d:"M15 18h6"}),(0,a.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"]})]})}},526:(r,e,t)=>{t.d(e,{A:()=>h});t(43);var i=t(216),o=t(464),s=t(367),n=t(579);const a=o.Ay.header`
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
`,h=()=>{const r=(0,i.Zp)(),{selectedCity:e,selectedRestaurant:t}=(0,s.Us)();return(0,n.jsxs)(a,{children:[(0,n.jsx)(d,{onClick:()=>r("/"),children:(0,n.jsx)(c,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,n.jsx)(l,{onClick:()=>r("/profile"),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,n.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})}},554:(r,e,t)=>{t.r(e),t.d(e,{default:()=>D});var i=t(43),o=t(216),s=t(464),n=t(997),a=t(526),d=t(59),l=t(367),c=t(505),h=t(579);const p=s.i7`
  0% { box-shadow: 0 0 0 0 rgba(255, 159, 13, 0.3); }
  70% { box-shadow: 0 0 0 10px rgba(255, 159, 13, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 159, 13, 0); }
`,x=s.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,g=(0,s.Ay)(n.Z_)`
  min-height: 70vh;
`,m=s.Ay.div`
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,v=(0,s.Ay)(n.Wk)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`,u=s.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--primary-light));
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`,b=s.Ay.h3`
  font-size: 1.3rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  font-weight: 600;
  letter-spacing: -0.02em;
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
`,y=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,w=s.Ay.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  overflow: hidden;
  position: relative;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--primary-light));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &.selected {
    background-color: rgba(255, 159, 13, 0.1);
    border: 2px solid var(--primary-color);
    box-shadow: 0 5px 15px rgba(255, 159, 13, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
  
  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin-right: var(--spacing-md);
    position: relative;
    flex-shrink: 0;
    transition: all 0.2s ease;
    padding: 0;
    background-color: transparent;
    
    &:checked {
      border-color: var(--primary-color);
      border-width: 2px;
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        width: 8px;
        height: 8px;
        background-color: var(--primary-color);
        border-radius: 50%;
        animation: radioCheck 0.2s ease-in-out;
      }
      
      @keyframes radioCheck {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 159, 13, 0.25);
    }
  }
  
  label {
    cursor: pointer;
    width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    
    span {
      display: flex;
      align-items: center;
      
      svg {
        width: 16px;
        height: 16px;
        margin-right: var(--spacing-sm);
        color: var(--primary-color);
      }
    }
  }
`,j=s.Ay.div`
  background-color: var(--card-bg);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary-color), var(--primary-light));
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`,f=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-of-type {
    margin-bottom: 0;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`,k=s.Ay.span`
  font-size: 1rem;
  color: var(--text-secondary);
`,L=s.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,A=(0,s.Ay)(k)`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`,C=(0,s.Ay)(L)`
  font-size: 1.4rem;
  color: var(--primary-color);
  font-weight: 700;
`,M=s.Ay.div`
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`,z=s.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`,B=s.Ay.span`
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 500;
`,W=s.Ay.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-sm);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
`,$=s.Ay.span`
  font-weight: 600;
  color: var(--text-color);
`,S=(0,s.Ay)(n.$n)`
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  border-radius: var(--border-radius-md);
  box-shadow: 0 8px 20px rgba(255, 159, 13, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: var(--spacing-lg);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(255, 159, 13, 0.4);
    background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1;
    opacity: 0;
  }
  
  &:hover::after {
    opacity: 1;
    transform: rotate(45deg) translate(10%, 10%);
  }
  
  span {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
  }
`,N=(0,s.Ay)(n.pd)`
  width: 100%;
  padding: var(--spacing-md);
  background-color: var(--input-bg);
  border: 2px solid ${r=>r.error?"var(--error-color)":"rgba(255, 255, 255, 0.1)"};
  border-radius: var(--border-radius-md);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(255, 159, 13, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`,X=(0,s.Ay)(n.JU)`
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-xs);
    color: var(--primary-color);
  }
`,F=s.Ay.span`
  color: var(--error-color);
  font-size: 0.85rem;
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 4px;
    flex-shrink: 0;
  }
`,E=s.Ay.div`
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: var(--spacing-lg);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 75%; /* Третий шаг из четырех */
    background: linear-gradient(to right, var(--primary-color), var(--primary-light));
    border-radius: 2px;
  }
`,Z=s.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    display: none;
  }
`,H=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  
  .step-number {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${r=>r.$completed?"var(--primary-color)":r.$active?"rgba(255, 159, 13, 0.2)":"rgba(255, 255, 255, 0.1)"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    color: ${r=>r.$completed||r.$active?"var(--primary-color)":"var(--text-secondary)"};
    font-weight: 600;
    transition: all 0.3s ease;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  .step-label {
    font-size: 0.8rem;
    color: ${r=>r.$active?"var(--text-color)":"var(--text-secondary)"};
    font-weight: ${r=>r.$active?"600":"400"};
  }
`,Y=(0,s.Ay)(S)`
  animation: ${p} 2s infinite;
`,U=s.Ay.div`
  border: 4px solid rgba(var(--primary-color-rgb), 0.15);
  border-radius: 50%;
  border-top: 4px solid var(--primary-color);
  width: 36px;
  height: 36px;
  animation: ${x} 1s cubic-bezier(0.16, 1, 0.3, 1) infinite;
`,O=(0,s.Ay)(U)`
  width: 20px;
  height: 20px;
  border-width: 2px;
  margin-right: var(--spacing-sm);
`,D=()=>{const{cart:r,placeOrder:e,deliveryMethod:t,setDeliveryMethod:s,userAddress:p,updateUserAddress:x,resetUserAddressForm:S}=(0,l.Us)(),U=(0,o.Zp)(),{showBackButton:D,hideBackButton:V,setBackButtonCallback:q}=(0,c.A)(),[I,J]=(0,i.useState)({name:"",phone:"",address:"",city:""}),[T,_]=(0,i.useState)({name:"",phone:"",address:"",city:""}),[R,K]=(0,i.useState)(""),[G,P]=(0,i.useState)(!1);(0,i.useEffect)((()=>(D(),q((()=>{U("/cart")})),()=>{V()})),[V,U,q,D]),(0,i.useEffect)((()=>{const r=localStorage.getItem("orderFormSession");let e="";if(r)try{e=JSON.parse(r).timestamp||""}catch(t){console.error("Error parsing order form session:",t)}e||(e=(new Date).toISOString(),localStorage.setItem("orderFormSession",JSON.stringify({timestamp:e}))),K(e),console.log("Order form session initialized:",e)}),[]),(0,i.useEffect)((()=>{p&&R&&(J({name:p.name||"",phone:p.phone||"",address:p.address||"",city:"object"===typeof p.city&&null!==p.city?p.city.name||"":String(p.city||"")}),console.log("Loaded user address for form session:",R))}),[p,R]);const Q="delivery"===t?150:0,rr=r.reduce(((r,e)=>r+e.price*e.quantity),0),er=rr+Q,tr=r=>{const{name:e,value:t}=r.target;J({...I,[e]:t}),x({...p||{name:"",phone:"",address:"",city:""},[e]:t}),_({...T,[e]:""})},ir=r=>{s(r)};return(0,h.jsx)(g,{children:(0,h.jsxs)(n.mc,{children:[(0,h.jsx)(a.A,{}),(0,h.jsx)(d.A,{}),(0,h.jsx)(n.DF,{children:(0,h.jsxs)(m,{children:[(0,h.jsx)(v,{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M10 21H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}),(0,h.jsx)("path",{d:"M7 7h10"}),(0,h.jsx)("path",{d:"M7 11h5"}),(0,h.jsx)("path",{d:"M19 15v6"}),(0,h.jsx)("path",{d:"M16 18h6"})]}),"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"]})}),(0,h.jsxs)(Z,{children:[(0,h.jsxs)(H,{$completed:!0,children:[(0,h.jsx)("div",{className:"step-number",children:(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,h.jsx)("div",{className:"step-label",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),(0,h.jsxs)(H,{$active:!0,children:[(0,h.jsx)("div",{className:"step-number",children:"2"}),(0,h.jsx)("div",{className:"step-label",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435"})]}),(0,h.jsxs)(H,{children:[(0,h.jsx)("div",{className:"step-number",children:"3"}),(0,h.jsx)("div",{className:"step-label",children:"\u041e\u043f\u043b\u0430\u0442\u0430"})]}),(0,h.jsxs)(H,{children:[(0,h.jsx)("div",{className:"step-number",children:"4"}),(0,h.jsx)("div",{className:"step-label",children:"\u0413\u043e\u0442\u043e\u0432\u043e"})]})]}),(0,h.jsx)(E,{}),(0,h.jsxs)(u,{children:[(0,h.jsxs)(b,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,h.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"]}),(0,h.jsxs)(n.gE,{children:[(0,h.jsxs)(X,{htmlFor:"name",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,h.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),"\u0418\u043c\u044f"]}),(0,h.jsx)(N,{type:"text",id:"name",name:"name",value:I.name,onChange:tr,placeholder:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432",error:T.name}),T.name&&(0,h.jsxs)(F,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,h.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),T.name]})]}),(0,h.jsxs)(n.gE,{children:[(0,h.jsxs)(X,{htmlFor:"phone",children:[(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,h.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"]}),(0,h.jsx)(N,{type:"tel",id:"phone",name:"phone",value:I.phone,onChange:tr,placeholder:"+7 (XXX) XXX-XX-XX",error:T.phone}),!T.phone&&(0,h.jsx)("small",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"4px"},children:"\u041f\u0440\u0438\u043c\u0435\u0440: +7 (999) 123-45-67"}),T.phone&&(0,h.jsxs)(F,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,h.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),T.phone]})]})]}),(0,h.jsxs)(u,{children:[(0,h.jsxs)(b,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,h.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f"]}),(0,h.jsxs)(y,{children:[(0,h.jsxs)(w,{className:"delivery"===t?"selected":"",onClick:()=>ir("delivery"),children:[(0,h.jsx)("input",{type:"radio",id:"delivery",name:"deliveryMethod",checked:"delivery"===t,onChange:()=>ir("delivery")}),(0,h.jsxs)("label",{htmlFor:"delivery",children:[(0,h.jsxs)("span",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M5 18h14M5 14h14M5 6h14M5 10h14"}),(0,h.jsx)("rect",{x:"3",y:"2",width:"18",height:"20",rx:"2"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c"}),(0,h.jsx)("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",marginTop:"4px"},children:"\u0414\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 40-60 \u043c\u0438\u043d\u0443\u0442"})]})]}),(0,h.jsx)("span",{style:{fontWeight:"bold",color:"var(--primary-color)"},children:"+\u20bd150"})]})]}),(0,h.jsxs)(w,{className:"pickup"===t?"selected":"",onClick:()=>ir("pickup"),children:[(0,h.jsx)("input",{type:"radio",id:"pickup",name:"deliveryMethod",checked:"pickup"===t,onChange:()=>ir("pickup")}),(0,h.jsxs)("label",{htmlFor:"pickup",children:[(0,h.jsxs)("span",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),(0,h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"}),(0,h.jsx)("div",{style:{fontSize:"0.8rem",color:"var(--text-secondary)",marginTop:"4px"},children:"\u0417\u0430\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043a\u0430\u0437 \u0438\u0437 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"})]})]}),(0,h.jsx)("span",{style:{fontWeight:"bold",color:"var(--success-color)"},children:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})]})]})]}),"delivery"===t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.gE,{children:[(0,h.jsxs)(X,{htmlFor:"city",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,h.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"\u0413\u043e\u0440\u043e\u0434"]}),(0,h.jsx)(N,{type:"text",id:"city",name:"city",value:I.city,onChange:tr,placeholder:"\u041c\u043e\u0441\u043a\u0432\u0430",error:T.city}),T.city&&(0,h.jsxs)(F,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,h.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),T.city]})]}),(0,h.jsxs)(n.gE,{children:[(0,h.jsxs)(X,{htmlFor:"address",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),(0,h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"]}),(0,h.jsx)(N,{type:"text",id:"address",name:"address",value:I.address,onChange:tr,placeholder:"\u0443\u043b. \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u0434. 10, \u043a\u0432. 5",error:T.address}),T.address&&(0,h.jsxs)(F,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,h.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,h.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),T.address]})]})]})]}),(0,h.jsxs)(j,{children:[(0,h.jsxs)(b,{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,h.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,h.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"]}),(0,h.jsx)(M,{children:r.map((r=>(0,h.jsxs)(z,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(B,{children:r.name}),(0,h.jsxs)(W,{children:["\xd7",r.quantity]})]}),(0,h.jsxs)($,{children:["\u20bd",r.price*r.quantity]})]},r.id)))}),(0,h.jsxs)(f,{children:[(0,h.jsx)(k,{children:"\u041f\u043e\u0434\u044b\u0442\u043e\u0433"}),(0,h.jsxs)(L,{children:["\u20bd",rr]})]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(k,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,h.jsx)(L,{children:Q>0?`\u20bd${Q}`:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"})]}),(0,h.jsxs)(f,{children:[(0,h.jsx)(A,{children:"\u0418\u0442\u043e\u0433\u043e \u043a \u043e\u043f\u043b\u0430\u0442\u0435"}),(0,h.jsxs)(C,{children:["\u20bd",er]})]}),(0,h.jsx)(Y,{onClick:async()=>{if((()=>{const r={name:"",phone:"",address:"",city:""};let e=!0;if(I.name.trim()||(r.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",e=!1),I.phone.trim()){const t=I.phone.replace(/[^0-9+]/g,"");/^[+]?\d+$/.test(t)?(t.startsWith("+")&&(t.length<11||t.length>15)||!t.startsWith("+")&&(t.length<10||t.length>14))&&(r.phone="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043d\u043e\u043c\u0435\u0440\u0430",e=!1):(r.phone="\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b",e=!1)}else r.phone="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",e=!1;return"delivery"===t&&(I.address.trim()||(r.address="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",e=!1),I.city.trim()||(r.city="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",e=!1)),_(r),e})())try{P(!0),x({name:I.name,phone:I.phone,address:I.address,city:I.city});await e()?(S(),U("/order-success")):alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.")}catch(r){console.error("Error placing order:",r),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.")}finally{P(!1)}},disabled:G,children:G?(0,h.jsxs)("span",{children:[(0,h.jsx)(O,{}),"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435..."]}):(0,h.jsxs)("span",{children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,h.jsx)("path",{d:"M9 12l2 2 4-4"}),(0,h.jsx)("path",{d:"M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9"})]}),"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"]})})]})]})})]})})}}}]);
//# sourceMappingURL=554.3feb33e9.chunk.js.map