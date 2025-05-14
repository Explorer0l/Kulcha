"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[283],{283:(r,e,a)=>{a.r(e),a.d(e,{default:()=>U});var i=a(43),o=a(216),n=a(464),t=a(997),s=a(105),c=a(579);const l=(0,n.Ay)(t.Z_)`
  min-height: 100vh;
  background-color: var(--background-color);
`,d=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
`,p=n.Ay.h1`
  color: var(--text-color);
  margin: 0;
  font-size: 1.5rem;
`,g=n.Ay.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: var(--primary-dark);
  }
`,h=n.Ay.div`
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
`,v=n.Ay.h2`
  color: var(--text-color);
  margin: var(--spacing-xl) 0 var(--spacing-md) 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,m=n.Ay.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: var(--success-color);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: var(--success-dark);
  }
`,x=n.Ay.div`
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: var(--spacing-md);
`,u=n.Ay.div`
  display: grid;
  grid-template-columns: 0.6fr 1.5fr 2fr 0.8fr 0.6fr 0.8fr;
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  
  @media (max-width: 768px) {
    grid-template-columns: 0.6fr 1.5fr 0.8fr 0.6fr 0.6fr;
  }
`,b=n.Ay.div`
  display: grid;
  grid-template-columns: 0.6fr 1.5fr 2fr 0.8fr 0.6fr 0.8fr;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  background-color: var(--card-bg);
  transition: background-color 0.2s;
  align-items: center;

  &:hover {
    background-color: var(--card-hover);
  }

  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 0.6fr 1.5fr 0.8fr 0.6fr 0.6fr;
  }
`,y=n.Ay.div`
  display: flex;
  align-items: center;
`,j=n.Ay.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  background-color: ${r=>r.available?"var(--success-bg)":"var(--error-bg)"};
  color: ${r=>r.available?"var(--success-color)":"var(--error-color)"};
`,f=n.Ay.button`
  padding: 6px;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: ${r=>"edit"===r.variant?"var(--primary-bg)":"var(--error-bg)"};
  color: ${r=>"edit"===r.variant?"var(--primary-color)":"var(--error-color)"};
  cursor: pointer;
  margin-right: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${r=>"edit"===r.variant?"var(--primary-light-bg)":"var(--error-light-bg)"};
  }
`,k=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${r=>r.isOpen?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,w=n.Ay.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`,A=n.Ay.h2`
  color: var(--text-color);
  margin-top: 0;
  margin-bottom: var(--spacing-lg);
  font-size: 1.3rem;
`,C=n.Ay.div`
  margin-bottom: var(--spacing-md);
`,S=n.Ay.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--text-color);
  font-size: 0.9rem;
`,z=n.Ay.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,L=n.Ay.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,$=n.Ay.select`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,I=n.Ay.div`
  display: flex;
  align-items: center;
  
  input {
    margin-right: var(--spacing-sm);
  }
  
  label {
    margin-bottom: 0;
  }
`,F=n.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`,M=n.Ay.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-md);
  background-color: ${r=>{switch(r.variant){case"primary":return"var(--primary-color)";case"danger":return"var(--error-color)";default:return"var(--card-hover)"}}};
  color: ${r=>"cancel"===r.variant?"var(--text-color)":"white"};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${r=>{switch(r.variant){case"primary":return"var(--primary-dark)";case"danger":return"var(--error-dark)";default:return"var(--border-color)"}}};
  }
`,B=n.Ay.div`
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--text-muted);
`,U=()=>{const r=(0,o.Zp)(),[e,a]=(0,i.useState)([]),[n,t]=(0,i.useState)(!1),[U,N]=(0,i.useState)(""),[W,O]=(0,i.useState)(!0),[E,R]=(0,i.useState)(!1),[V,Z]=(0,i.useState)("create"),[_,q]=(0,i.useState)(null),[D,H]=(0,i.useState)(0),[J,G]=(0,i.useState)({name:"",description:"",price:"",image:"",category:"main",available:!0}),[K,P]=(0,i.useState)(!1),[Q,T]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=localStorage.getItem("isAuthenticated"),i=localStorage.getItem("userRole"),o=localStorage.getItem("currentUser");if("true"!==e||"admin"!==i)return void r("/admin/login");(async()=>{if(o){const r=JSON.parse(o);try{const e=await(0,s.Nr)(r.restaurantId);a(e),H(r.restaurantId);const i=await(0,s.EB)(r.restaurantId);i&&N(i.name),t(!0)}catch(e){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:",e)}}else r("/admin/login");O(!1)})()}),[r]);const X=()=>{Z("create"),G({name:"",description:"",price:"",image:"",category:"main",available:!0}),R(!0)},Y=r=>{const{name:e,value:a,type:i}=r.target;if("checkbox"===i){const a=r.target.checked;G((r=>({...r,[e]:a})))}else G((r=>({...r,[e]:a})))};return W?(0,c.jsx)(l,{children:(0,c.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"var(--text-color)"},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):n?(0,c.jsxs)(l,{children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(p,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u044e"}),(0,c.jsxs)(g,{onClick:()=>r("/admin/dashboard"),children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,c.jsx)("path",{d:"M15 18l-6-6 6-6"})}),"\u041d\u0430\u0437\u0430\u0434"]})]}),(0,c.jsxs)(h,{children:[(0,c.jsxs)(v,{children:[U?`\u041c\u0435\u043d\u044e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 "${U}"`:"\u041c\u0435\u043d\u044e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430",(0,c.jsxs)(m,{onClick:X,children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,c.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"]})]}),e.length>0?(0,c.jsxs)(x,{children:[(0,c.jsxs)(u,{children:[(0,c.jsx)(y,{children:"ID"}),(0,c.jsx)(y,{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,c.jsx)(y,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,c.jsx)(y,{children:"\u0426\u0435\u043d\u0430"}),(0,c.jsx)(y,{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,c.jsx)(y,{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),e.map((r=>{var e,i;return(0,c.jsxs)(b,{children:[(0,c.jsxs)(y,{children:["#",r.id]}),(0,c.jsx)(y,{children:r.name}),(0,c.jsx)(y,{style:{fontSize:"0.9rem"},children:r.description.length>100?`${r.description.substring(0,100)}...`:r.description}),(0,c.jsxs)(y,{children:["\u20bd",r.price]}),(0,c.jsx)(y,{children:(0,c.jsx)(j,{available:null!==(e=r.available)&&void 0!==e&&e,onClick:()=>(async r=>{const e={...r,available:!r.available};try{const i=await(0,s.q2)(e);a((e=>e.map((e=>e.id===r.id&&i||e))))}catch(i){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438:",i)}})(r),style:{cursor:"pointer"},children:null!==(i=r.available)&&void 0!==i&&i?"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e":"\u041d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"})}),(0,c.jsx)(y,{children:(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)(f,{variant:"edit",onClick:()=>(r=>{q(r.id),Z("edit"),G({name:r.name,description:r.description,price:r.price.toString(),image:r.imageUrl||"",category:r.category||"main",available:r.available||!0}),R(!0)})(r),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,c.jsx)("path",{d:"M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"})})}),(0,c.jsx)(f,{variant:"delete",onClick:()=>{return e=r.id,T(e),void P(!0);var e},children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("path",{d:"M3 6h18"}),(0,c.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,c.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})})]})})]},r.id)}))]}):(0,c.jsxs)(B,{children:[(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{margin:"0 auto 16px",display:"block",opacity:.6},children:[(0,c.jsx)("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),(0,c.jsx)("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),(0,c.jsx)("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),(0,c.jsx)("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})]}),(0,c.jsx)("p",{children:"\u0412 \u043c\u0435\u043d\u044e \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0431\u043b\u044e\u0434. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0435\u0440\u0432\u043e\u0435 \u0431\u043b\u044e\u0434\u043e!"}),(0,c.jsx)(M,{variant:"primary",onClick:X,style:{margin:"16px auto",display:"block"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u043b\u044e\u0434\u043e"})]})]}),(0,c.jsx)(k,{isOpen:E,children:(0,c.jsxs)(w,{children:[(0,c.jsx)(A,{children:"create"===V?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0431\u043b\u044e\u0434\u043e":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u043b\u044e\u0434\u043e"}),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{htmlFor:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,c.jsx)(z,{id:"name",name:"name",value:J.name,onChange:Y,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"})]}),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{htmlFor:"description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),(0,c.jsx)(L,{id:"description",name:"description",value:J.description,onChange:Y,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"})]}),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{htmlFor:"price",children:"\u0426\u0435\u043d\u0430 (\u20bd)"}),(0,c.jsx)(z,{id:"price",name:"price",type:"number",value:J.price,onChange:Y,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443 \u0431\u043b\u044e\u0434\u0430"})]}),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{htmlFor:"image",children:"URL \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(z,{id:"image",name:"image",value:J.image,onChange:Y,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u043b\u044e\u0434\u0430"})]}),(0,c.jsxs)(C,{children:[(0,c.jsx)(S,{htmlFor:"category",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),(0,c.jsxs)($,{id:"category",name:"category",value:J.category,onChange:Y,children:[(0,c.jsx)("option",{value:"main",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430"}),(0,c.jsx)("option",{value:"appetizers",children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438"}),(0,c.jsx)("option",{value:"desserts",children:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b"}),(0,c.jsx)("option",{value:"drinks",children:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"})]})]}),(0,c.jsx)(C,{children:(0,c.jsxs)(I,{children:[(0,c.jsx)("input",{id:"available",name:"available",type:"checkbox",checked:J.available,onChange:r=>{const{name:e,checked:a}=r.target;G((r=>({...r,[e]:a})))}}),(0,c.jsx)(S,{htmlFor:"available",children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430"})]})}),(0,c.jsxs)(F,{children:[(0,c.jsx)(M,{variant:"cancel",onClick:()=>R(!1),children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),(0,c.jsx)(M,{variant:"primary",onClick:async()=>{if((()=>{if(!J.name.trim())return!1;if(!J.description.trim())return!1;const r=Number(J.price);return!(isNaN(r)||r<=0)&&!!J.category})()){if("create"===V){const e={id:Date.now(),name:J.name,description:J.description,price:parseFloat(J.price),imageUrl:J.image,category:J.category,available:J.available,restaurantId:D};try{const r=await(0,s.x2)(e);if(!r)throw new Error("Failed to create menu item");a((e=>[...e,r]))}catch(r){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044e:",r),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0435\u043d\u044e")}}else if("edit"===V&&null!==_){const e={id:_,name:J.name,description:J.description,price:parseFloat(J.price),imageUrl:J.image,category:J.category,available:J.available,restaurantId:D};try{const r=await(0,s.q2)(e);a((e=>e.map((e=>e.id===_&&r||e))))}catch(r){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044e:",r),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0435\u043d\u044e")}}R(!1),G({name:"",description:"",price:"",image:"",category:"main",available:!0}),q(null)}else alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e")},children:"create"===V?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})}),(0,c.jsx)(k,{isOpen:K,children:(0,c.jsxs)(w,{children:[(0,c.jsx)(A,{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f"}),(0,c.jsx)("p",{style:{color:"var(--text-color)",marginBottom:"var(--spacing-lg)"},children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u0443\u043d\u043a\u0442 \u043c\u0435\u043d\u044e? \u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c."}),(0,c.jsxs)(F,{children:[(0,c.jsx)(M,{variant:"cancel",onClick:()=>P(!1),children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),(0,c.jsx)(M,{variant:"danger",onClick:async()=>{if(Q){try{await(0,s.ax)(Q),a((r=>r.filter((r=>r.id!==Q))))}catch(r){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044e:",r),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0435\u043d\u044e")}P(!1),T(null)}},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})]}):null}}}]);
//# sourceMappingURL=283.0e98525a.chunk.js.map