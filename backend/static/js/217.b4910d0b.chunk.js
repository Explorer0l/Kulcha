"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[217],{217:(r,e,a)=>{a.r(e),a.d(e,{default:()=>q});var t=a(43),o=a(216),i=a(464),n=a(997),s=a(105),d=a(579);const c=(0,i.Ay)(n.Z_)`
  min-height: 100vh;
  background-color: var(--background-color);
`,l=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
`,g=i.Ay.h1`
  color: var(--text-color);
  margin: 0;
  font-size: 1.5rem;
`,u=i.Ay.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: var(--error-color);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--error-dark);
  }
`,m=i.Ay.div`
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`,p=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
`,h=i.Ay.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`,v=i.Ay.div`
  font-size: 2rem;
  font-weight: 700;
  margin: var(--spacing-md) 0;
  color: var(--text-color);
`,x=i.Ay.div`
  font-size: 0.9rem;
  color: var(--text-muted);
`,b=i.Ay.h2`
  color: var(--text-color);
  margin: var(--spacing-xl) 0 var(--spacing-md) 0;
  font-size: 1.3rem;
`,j=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-md);
`,f=i.Ay.div`
  display: flex;
  align-items: center;
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,y=i.Ay.div`
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius-md);
  background-color: var(--background-color);
  background-size: cover;
  background-position: center;
  margin-right: var(--spacing-md);
  flex-shrink: 0;
`,k=i.Ay.div`
  flex: 1;
`,w=i.Ay.div`
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-color);
`,A=i.Ay.div`
  color: var(--primary-color);
  font-weight: 700;
`,S=i.Ay.button`
  width: 100%;
  padding: var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: var(--spacing-lg);

  &:hover {
    background-color: var(--primary-dark);
  }
`,I=i.Ay.div`
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: var(--spacing-md);
`,z=i.Ay.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.8fr;
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
`,C=i.Ay.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.8fr;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  background-color: var(--card-bg);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--card-hover);
  }

  &:last-child {
    border-bottom: none;
  }
`,L=i.Ay.div`
  display: flex;
  align-items: center;
`,M=i.Ay.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  background-color: ${r=>{switch(r.status){case"completed":return"var(--success-bg)";case"pending":return"var(--warning-bg)";case"cancelled":return"var(--error-bg)";default:return"var(--card-hover)"}}};
  color: ${r=>{switch(r.status){case"completed":return"var(--success-color)";case"pending":return"var(--warning-color)";case"cancelled":return"var(--error-color)";default:return"var(--text-color)"}}};
`,q=()=>{const r=(0,o.Zp)(),[e,a]=(0,t.useState)(!1),[i,n]=(0,t.useState)(null),[q,E]=(0,t.useState)([]),[O,N]=(0,t.useState)(!0),[R,Z]=(0,t.useState)(null),[$,_]=(0,t.useState)([]),B=(0,t.useCallback)((()=>{const r={},e=R?(0,s.Nr)(R.restaurantId):[];q.forEach((a=>{(async()=>{const r=await e,a=[];if(r&&r.length>0){const e=Math.floor(3*Math.random())+1;for(let t=0;t<e;t++){const e=r[Math.floor(Math.random()*r.length)],t=Math.floor(3*Math.random())+1;a.push({id:e.id,name:e.name,price:e.price,quantity:t})}}return a})().then((e=>{e.forEach((e=>{r[e.id]||(r[e.id]={count:0,name:e.name,price:e.price,id:e.id}),r[e.id].count+=e.quantity}))}))}));const a=Object.values(r).sort(((r,e)=>e.count-r.count));return 0===a.length&&R?[{id:1,name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u043e 1",price:350,quantity:1,image:"/assets/images/paneer-tikka.jpg"},{id:2,name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u043e 2",price:450,quantity:1,image:"/assets/images/paneer-tikka.jpg"},{id:3,name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u043e 3",price:550,quantity:1,image:"/assets/images/paneer-tikka.jpg"}]:a.slice(0,3).map((r=>({id:r.id,name:r.name,price:r.price,quantity:1,image:"/assets/images/paneer-tikka.jpg"})))}),[q,R]);(0,t.useEffect)((()=>{const e=localStorage.getItem("isAuthenticated"),t=localStorage.getItem("userRole"),o=localStorage.getItem("currentUser");if("true"!==e||"admin"!==t)return void r("/admin/login");(async()=>{if(o){const r=JSON.parse(o);Z(r);try{const e=await(0,s.EB)(r.restaurantId),t=await(0,s.Xx)(r.restaurantId);e&&n(e),E(t.slice(0,10)),a(!0)}catch(e){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",e)}}else r("/admin/login");N(!1)})()}),[r]),(0,t.useEffect)((()=>{R&&q.length>0&&_(B())}),[B,R,q]);return O?(0,d.jsx)(c,{children:(0,d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"var(--text-color)"},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):e&&i?(0,d.jsxs)(c,{children:[(0,d.jsxs)(l,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(g,{children:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"}),0===(null===R||void 0===R?void 0:R.restaurantId)&&(0,d.jsx)("div",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginTop:"8px"},children:"\u0420\u0435\u0436\u0438\u043c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 (\u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430\u043c)"}),0!==(null===R||void 0===R?void 0:R.restaurantId)&&i&&(0,d.jsx)("div",{style:{color:"var(--text-muted)",fontSize:"0.9rem",marginTop:"8px"},children:i.name})]}),(0,d.jsx)(u,{onClick:()=>{localStorage.removeItem("currentUser"),localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userRole"),r("/")},children:"\u0412\u044b\u0439\u0442\u0438"})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(b,{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,d.jsxs)(p,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{children:"\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),(0,d.jsx)(v,{children:i.totalOrders})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{children:"\u0412\u044b\u0440\u0443\u0447\u043a\u0430"}),(0,d.jsxs)(v,{children:["\u20bd",i.totalRevenue.toLocaleString()]})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{children:"\u0427\u0438\u0441\u0442\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c"}),(0,d.jsxs)(v,{children:["\u20bd",i.netProfit.toLocaleString()]})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(x,{children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a"}),(0,d.jsxs)(v,{children:["\u20bd",i.averageOrderValue.toLocaleString()]})]})]}),(0,d.jsx)(b,{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u044b"}),q.length>0?(0,d.jsxs)(I,{children:[(0,d.jsxs)(z,{children:[(0,d.jsx)(L,{children:"ID"}),(0,d.jsx)(L,{children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),(0,d.jsx)(L,{children:"\u0414\u0430\u0442\u0430"}),(0,d.jsx)(L,{children:"\u0421\u0443\u043c\u043c\u0430"}),(0,d.jsx)(L,{children:"\u0421\u0442\u0430\u0442\u0443\u0441"})]}),q.map((r=>(0,d.jsxs)(C,{children:[(0,d.jsxs)(L,{children:["#",r.id]}),(0,d.jsx)(L,{children:r.customer}),(0,d.jsx)(L,{children:r.date}),(0,d.jsxs)(L,{children:["\u20bd",r.amount.toLocaleString()]}),(0,d.jsx)(L,{children:(0,d.jsxs)(M,{status:r.status,children:["completed"===r.status&&"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d","pending"===r.status&&"\u041e\u0436\u0438\u0434\u0430\u0435\u0442","cancelled"===r.status&&"\u041e\u0442\u043c\u0435\u043d\u0435\u043d"]})})]},r.id)))]}):(0,d.jsx)("div",{style:{textAlign:"center",padding:"var(--spacing-lg)",color:"var(--text-muted)"},children:"\u041d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}),(0,d.jsx)(b,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430"}),$.length>0?(0,d.jsx)(j,{children:$.map((r=>(0,d.jsxs)(f,{children:[(0,d.jsx)(y,{style:{backgroundImage:`url(${r.image})`}}),(0,d.jsxs)(k,{children:[(0,d.jsx)(w,{children:r.name}),(0,d.jsxs)(A,{children:["\u20bd",r.price]})]})]},r.id)))}):(0,d.jsx)("div",{style:{textAlign:"center",padding:"var(--spacing-lg)",color:"var(--text-muted)"},children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u043b\u044e\u0434"}),(0,d.jsx)(S,{onClick:()=>{r("/admin/menu-management")},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0435\u043d\u044e"}),(0,d.jsxs)("button",{className:"dashboard-action-btn",onClick:()=>{r("/owner/profile")},children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,d.jsx)("path",{d:"M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"})}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"]})]})]}):null}}}]);
//# sourceMappingURL=217.b4910d0b.chunk.js.map