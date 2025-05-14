"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[818],{818:(r,e,i)=>{i.r(e),i.d(e,{default:()=>C});var a=i(43),o=i(464),n=i(475),s=i(216),l=i(105),t=i(997),c=i(579);const d=(0,o.Ay)(t.Z_)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
  padding: var(--spacing-lg);
`,h=o.Ay.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  padding: var(--spacing-xl);
  position: relative;
  overflow: hidden;
`,x=o.Ay.h1`
  color: var(--text-color);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  font-size: 1.8rem;
`,u=o.Ay.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,p=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`,g=o.Ay.label`
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
`,m=o.Ay.input`
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
  }
`,v=o.Ay.div`
  color: var(--error-color);
  background-color: var(--error-bg);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  svg {
    min-width: 20px;
  }
`,b=o.Ay.button`
  padding: var(--spacing-md);
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: var(--disabled-color);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,j=(0,o.Ay)(n.N_)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: white;
  margin-top: var(--spacing-lg);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: var(--text-color);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,y=o.Ay.div`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);

  svg {
    width: 36px;
    height: 36px;
  }
`,k=o.Ay.div`
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: var(--border-radius-md);
  color: white;
  font-size: 0.85rem;
  max-width: 450px;
  width: 100%;
  backdrop-filter: blur(5px);
`,w=o.Ay.h3`
  font-size: 0.95rem;
  margin-bottom: var(--spacing-sm);
  color: white;
  text-align: center;
`,f=o.Ay.div`
  margin-bottom: var(--spacing-xs);
  display: flex;
  justify-content: space-between;
  
  &:last-child {
    margin-bottom: 0;
  }
`,A=o.Ay.span`
  font-family: monospace;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2px 6px;
  border-radius: 3px;
`,C=()=>{const[r,e]=(0,a.useState)(""),[i,o]=(0,a.useState)(""),[n,t]=(0,a.useState)(!1),[C,S]=(0,a.useState)(null),z=(0,s.Zp)(),K=r=>{e(r),o("kulcha2024")};return(0,c.jsxs)(d,{children:[(0,c.jsxs)(y,{children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,c.jsx)("path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}),(0,c.jsx)("line",{x1:"12",y1:"6",x2:"12",y2:"18"})]}),"\u041a\u0443\u043b\u0447\u0430"]}),(0,c.jsxs)(h,{children:[(0,c.jsx)(x,{children:"\u0412\u0445\u043e\u0434 \u0434\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432"}),C&&(0,c.jsxs)(v,{children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,c.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),C]}),(0,c.jsxs)(u,{onSubmit:async e=>{e.preventDefault(),t(!0),S(null);try{const e=await(0,l.N$)(r,i);e?(localStorage.setItem("isAuthenticated","true"),localStorage.setItem("userRole","admin"),localStorage.setItem("currentUser",JSON.stringify(e)),localStorage.setItem("adminUser",JSON.stringify(e)),z("/owner/statistics")):S("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.")}catch(C){console.error("Login error:",C),S("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.")}finally{t(!1)}},children:[(0,c.jsxs)(p,{children:[(0,c.jsx)(g,{htmlFor:"email",children:"Email"}),(0,c.jsx)(m,{id:"email",type:"email",value:r,onChange:r=>e(r.target.value),required:!0,placeholder:"your@email.com"})]}),(0,c.jsxs)(p,{children:[(0,c.jsx)(g,{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,c.jsx)(m,{id:"password",type:"password",value:i,onChange:r=>o(r.target.value),required:!0,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})]}),(0,c.jsx)(b,{type:"submit",disabled:n,children:n?"\u0412\u0445\u043e\u0434...":"\u0412\u043e\u0439\u0442\u0438"})]})]}),(0,c.jsxs)(k,{children:[(0,c.jsx)(w,{children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439:"})," ",(0,c.jsx)(A,{onClick:()=>K("central@kulcha.ru"),children:"central@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441:"})," ",(0,c.jsx)(A,{onClick:()=>K("express@kulcha.ru"),children:"express@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u041f\u0440\u0435\u043c\u0438\u0443\u043c:"})," ",(0,c.jsx)(A,{onClick:()=>K("premium@kulcha.ru"),children:"premium@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u0424\u044d\u043c\u0438\u043b\u0438:"})," ",(0,c.jsx)(A,{onClick:()=>K("family@kulcha.ru"),children:"family@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439:"})," ",(0,c.jsx)(A,{onClick:()=>K("east@kulcha.ru"),children:"east@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u0413\u0443\u0440\u043c\u044d:"})," ",(0,c.jsx)(A,{onClick:()=>K("gourmet@kulcha.ru"),children:"gourmet@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"Kulcha \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u0438:"})," ",(0,c.jsx)(A,{onClick:()=>K("tradition@kulcha.ru"),children:"tradition@kulcha.ru"})]}),(0,c.jsxs)(f,{children:[(0,c.jsx)("span",{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445:"})," ",(0,c.jsx)(A,{children:"kulcha2024"})]})]}),(0,c.jsxs)(j,{to:"/role-selection",children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,c.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u043e\u0440\u0443 \u0440\u043e\u043b\u0438"]})]})}}}]);
//# sourceMappingURL=818.d07c37a6.chunk.js.map