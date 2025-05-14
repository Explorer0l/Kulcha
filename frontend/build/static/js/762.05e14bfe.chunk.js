"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[762],{762:(e,r,t)=>{t.r(r),t.d(r,{default:()=>K});var o=t(43),s=t(216),n=t(464),i=t(105),a=t(367),l=t(579);const d=n.DU`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  
  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`,h=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: ${e=>e.theme.colors.header};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 0.75rem;
  }
`,x=n.Ay.div`
  display: flex;
  flex-direction: column;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: ${e=>e.theme.colors.text};
  }
  
  p {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
    color: ${e=>e.theme.colors.textSecondary};
  }
`,g=n.Ay.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
    padding: 0.5rem 0;
    margin: 0 -0.5rem;
    padding: 0 0.5rem;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 165, 0, 0.5);
      border-radius: 4px;
    }
  }
`,p=n.Ay.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>{switch(e.$variant){case"primary":default:return e.theme.colors.primary;case"warning":return e.theme.colors.warning;case"danger":return e.theme.colors.danger}}};
  color: ${e=>"primary"===e.$variant?"#000000":"#FFFFFF"};
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 165, 0, 0.3);
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.875rem;
    font-size: 0.8125rem;
  }
`,u=n.Ay.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,m=n.Ay.div`
  background-color: ${e=>e.theme.colors.card};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-left: 4px solid ${e=>e.theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    margin-bottom: 1.25rem;
  }
`,w=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,v=n.Ay.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
`,j=n.Ay.p`
  font-size: 0.9375rem;
  color: ${e=>e.theme.colors.textSecondary};
  margin: 0;
`,f=n.Ay.p`
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0.5rem 0 0;
  color: ${e=>e.theme.colors.text};
`,y=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Фиксированно 3 колонки */
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr); /* На планшетах 2 колонки */
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr; /* На мобильных 1 колонка */
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
`,b=n.Ay.div`
  position: relative;
  /* Добавляем отступ снизу, чтобы вместить тень и трансформацию */
  padding-bottom: 8px;
  /* Все карточки имеют фиксированную высоту в сетке */
  height: 100%;
  min-height: 150px; /* Минимальная высота для достаточного размера */
`,k=n.Ay.div`
  background-color: ${e=>e.theme.colors.card};
  border-radius: 12px;
  padding: 1.5rem; /* Больше padding для большего пространства */
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  /* Используем абсолютное позиционирование для стабильной анимации */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 8px; /* Оставляем место для тени при трансформации */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden; /* Обрезаем контент, который может выходить за пределы */
  /* Добавляем рамку изначально, но делаем ее прозрачной */
  border: 1px solid transparent;
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${e=>e.theme.colors.primary};
    z-index: 1; /* Поднимаем элемент над соседними при наведении */
  }
`,$=n.Ay.div`
  width: 56px; /* Больше размер иконки */
  height: 56px;
  border-radius: 12px;
  background-color: ${e=>e.$color?`${e.$color}20`:"rgba(255, 165, 0, 0.15)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem; /* Увеличиваем отступ справа */
  flex-shrink: 0;
  
  svg {
    color: ${e=>e.$color||e.theme.colors.primary};
    width: 28px; /* Больше размер SVG */
    height: 28px;
  }
`,A=n.Ay.div`
  flex: 1;
  min-width: 0;
  /* Добавляем больше расстояния между элементами */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%; /* Гарантируем, что контент не выйдет за пределы */
`,C=n.Ay.div`
  font-size: 0.9375rem; /* Увеличенный размер шрифта */
  color: ${e=>e.theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.02em; /* Улучшаем читаемость */
`,F=n.Ay.div`
  font-size: 1.75rem; /* Больший размер для ценности */
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2; /* Улучшаем высоту строки */
`,L=n.Ay.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,S=(n.Ay.div`
  font-size: 0.875rem;
  color: ${e=>e.$positive?"#40c057":"#fa5252"};
  display: flex;
  align-items: center;
  font-weight: 500; /* Делаем немного жирнее */
  
  &::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin-right: 4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: ${e=>e.$positive?"4px solid #40c057":"none"};
    border-top: ${e=>e.$positive?"none":"4px solid #fa5252"};
  }
`,"#FFA500"),M="#FFA500",B="#FFA500",O="#FFA500",R="#FFA500",z=n.Ay.div`
  margin-top: 1.5rem;
  background-color: ${e=>e.theme.colors.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`,I=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: ${e=>"#0F0F0F"};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,V=n.Ay.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,W=n.Ay.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 165, 0, 0.1);
    color: ${e=>e.theme.colors.primary};
  }
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.375rem;
    color: ${e=>e.theme.colors.primary};
  }
`,P=n.Ay.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem 1.25rem 0;
  background-color: ${e=>e.theme.colors.card};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 165, 0, 0.3);
    border-radius: 4px;
  }
`,E=n.Ay.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.$isActive?e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"#000000":e.theme.colors.textSecondary};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${e=>e.$isActive?"600":"400"};
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary:"rgba(255, 165, 0, 0.1)"};
  }
`,U=n.Ay.div`
  display: ${e=>e.$isCollapsed?"none":"block"};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 165, 0, 0.3);
    border-radius: 3px;
  }
`,q=n.Ay.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`,H=n.Ay.thead`
  background-color: #0F0F0F;
`,D=n.Ay.tr``,N=n.Ay.th`
  padding: 0.875rem 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,Y=n.Ay.tbody``,_=n.Ay.tr`
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${e=>e.theme.colors.card};
  }
  
  &:last-child {
    border-bottom: none;
  }
`,J=n.Ay.td`
  padding: 0.875rem 1rem;
  text-align: ${e=>e.$centered?"center":"left"};
  color: ${e=>e.theme.colors.text};
  font-size: 0.875rem;
`,T=n.Ay.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.02em;
  background-color: ${e=>{switch(e.$status){case"new":case"pending":return"rgba(255, 193, 7, 0.2)";case"confirmed":return"rgba(33, 150, 243, 0.2)";case"preparing":return"rgba(156, 39, 176, 0.2)";case"ready":return"rgba(76, 175, 80, 0.2)";case"delivered":case"completed":return"rgba(139, 195, 74, 0.2)";case"rejected":case"cancelled":return"rgba(244, 67, 54, 0.2)";default:return"rgba(96, 125, 139, 0.2)"}}};
  color: ${e=>{switch(e.$status){case"new":case"pending":return"#fcc419";case"confirmed":return"#339af0";case"preparing":return"#ae3ec9";case"ready":return"#51cf66";case"delivered":case"completed":return"#94d82d";case"rejected":case"cancelled":return"#ff6b6b";default:return"#868e96"}}};
  border: 1px solid ${e=>{switch(e.$status){case"new":case"pending":return"rgba(255, 193, 7, 0.3)";case"confirmed":return"rgba(33, 150, 243, 0.3)";case"preparing":return"rgba(156, 39, 176, 0.3)";case"ready":return"rgba(76, 175, 80, 0.3)";case"delivered":case"completed":return"rgba(139, 195, 74, 0.3)";case"rejected":case"cancelled":return"rgba(244, 67, 54, 0.3)";default:return"rgba(96, 125, 139, 0.3)"}}};
`,X=n.Ay.button`
  padding: 0.375rem 0.75rem;
  background-color: ${e=>e.theme.colors.primary};
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  
  &:hover {
    background-color: #FFB52E;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(255, 165, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,G=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  color: ${e=>e.theme.colors.textSecondary};
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  p {
    font-size: 0.9375rem;
    text-align: center;
    margin: 0;
  }
`,Z=e=>{if(null===e||void 0===e)return 0;if("number"===typeof e)return e;if("string"===typeof e){const r=e.replace(/\s/g,"").replace(",","."),t=parseFloat(r);return isNaN(t)?0:t}return 0},K=()=>{const e=(0,s.Zp)(),{isDarkMode:r}=(0,a.Us)(),[t,K]=(0,o.useState)(null),[Q,ee]=(0,o.useState)([]),[re,te]=(0,o.useState)([]),[oe,se]=(0,o.useState)([]),[ne,ie]=(0,o.useState)(0),[ae,le]=(0,o.useState)(!0),[de,ce]=(0,o.useState)(null),[he,xe]=(0,o.useState)("all"),[ge,pe]=(0,o.useState)(!1),[ue,me]=(0,o.useState)({totalRevenue:0,totalOrders:0,uniqueCustomers:0,rating:0,deliveryPercent:0,averageOrderValue:0}),we={isDarkMode:!0,colors:{primary:"#FFA500",secondary:"#4263eb",success:"#40c057",danger:"#e03131",warning:"#f59f00",background:"#000000",card:"#121212",header:"#0A0A0A",text:"#FFFFFF",textSecondary:"#B0B0B0",border:"#1A1A1A"}};(0,o.useEffect)((()=>{(async()=>{le(!0);const r=localStorage.getItem("adminUser")||localStorage.getItem("currentUser"),t=localStorage.getItem("isAuthenticated"),o=localStorage.getItem("userRole");if(console.log("Auth state:",{storedUser:!!r,isAuthenticated:t,userRole:o}),r&&"true"===t&&"admin"===o)try{const e=JSON.parse(r);ce(e);const t=await(0,i.EB)(e.restaurantId);console.log("Restaurant data:",t),t?(K(t),ie(t.totalOrders||t.total_orders||0)):console.warn("Restaurant data not found for ID:",e.restaurantId);const o=await(0,i.Xx)(e.restaurantId);if(console.log("Restaurant orders:",o),o&&o.length>0){const e=o.map((e=>({...e,deliveryMethod:Math.random()>.5?"delivery":"pickup"})));ee(e);const r=e.filter((e=>"delivered"===e.status||"ready"===e.status||"completed"===e.status)),t=e.filter((e=>"new"===e.status||"confirmed"===e.status||"preparing"===e.status||"pending"===e.status));te(r),se(t)}else ee([]),te([]),se([]);const s=await(0,i.JP)(e.restaurantId);console.log("Fetched restaurant statistics:",s),s&&s.statistics&&(console.log("Raw statistics data:"),console.log("totalRevenue:",s.statistics.totalRevenue,"type:",typeof s.statistics.totalRevenue),console.log("totalSales:",s.statistics.totalSales,"type:",typeof s.statistics.totalSales),console.log("deliveryPercent:",s.statistics.deliveryPercent,"type:",typeof s.statistics.deliveryPercent),me({totalRevenue:Z(s.statistics.totalRevenue||s.statistics.totalSales||0),totalOrders:Z(s.statistics.totalOrders||s.statistics.orderCount||0),uniqueCustomers:Z(s.statistics.uniqueCustomers||0),rating:Z(s.statistics.rating||0),deliveryPercent:Z(s.statistics.deliveryPercent||0),averageOrderValue:Z(s.statistics.averageOrderValue||0)}),console.log("Parsed statistics:",ue))}catch(s){console.error("Error parsing user data:",s),e("/admin/login")}else console.log("User is not authenticated, redirecting to login"),e("/admin/login");le(!1)})()}),[e]);const ve=()=>{localStorage.removeItem("isAuthenticated"),localStorage.removeItem("currentUser"),localStorage.removeItem("userRole"),localStorage.removeItem("adminUser"),e("/role-selection")},je=e=>{const r=new Date(e);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(r)},fe=e=>e.toLocaleString("ru-RU")+" \u20bd",ye=async()=>{if(de){console.log("Refreshing data..."),le(!0);try{const e=await(0,i.EB)(de.restaurantId);e&&(K(e),ie(e.totalOrders||e.total_orders||0));const r=await(0,i.Xx)(de.restaurantId);if(r&&r.length>0){const e=r.map((e=>({...e,deliveryMethod:Math.random()>.5?"delivery":"pickup"})));ee(e);const t=e.filter((e=>"delivered"===e.status||"ready"===e.status||"completed"===e.status)),o=e.filter((e=>"new"===e.status||"confirmed"===e.status||"preparing"===e.status||"pending"===e.status));te(t),se(o)}const t=await(0,i.JP)(de.restaurantId);t&&t.statistics&&me({totalRevenue:Z(t.statistics.totalRevenue||t.statistics.totalSales||0),totalOrders:Z(t.statistics.totalOrders||t.statistics.orderCount||0),uniqueCustomers:Z(t.statistics.uniqueCustomers||0),rating:Z(t.statistics.rating||0),deliveryPercent:Z(t.statistics.deliveryPercent||0),averageOrderValue:Z(t.statistics.averageOrderValue||0)}),console.log("Data refresh completed")}catch(e){console.error("Error refreshing data:",e),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.")}finally{le(!1)}}};(0,o.useEffect)((()=>{const r=window.Telegram,t=r&&r.WebApp;if(t)try{return t.expand(),t.BackButton.show(),t.BackButton.onClick((()=>e("/owner/menu"))),"function"===typeof t.enableClosingConfirmation&&t.enableClosingConfirmation(),"function"===typeof t.setHeaderColor&&t.setHeaderColor("#FF9F0D"),"function"===typeof t.setBackgroundColor&&t.setBackgroundColor("#181818"),()=>{t.BackButton.onClick((()=>{})),"function"===typeof t.disableClosingConfirmation&&t.disableClosingConfirmation()}}catch(o){console.error("Error setting up Telegram WebApp:",o)}}),[e]),(0,o.useEffect)((()=>{(()=>{const e=document.querySelectorAll('[data-active="true"]');if(e.length>0){const r=e[0];r&&r.parentElement&&(r.parentElement.scrollLeft=r.offsetLeft-16)}})()}),[he]);const{totalOrders:be,totalRevenue:ke,averageOrderValue:$e}=(()=>{if(Q&&Q.length>0){console.log("Calculating stats from",Q.length,"orders");const e=Q.length,r=Q.reduce(((e,r)=>e+r.amount),0),t=e>0?r/e:0;return console.log("Calculated stats:",{totalOrders:e,totalRevenue:r,averageOrderValue:t}),{totalOrders:e,totalRevenue:r,averageOrderValue:t}}return t?(console.log("Using restaurant data for stats:",{totalOrders:t.totalOrders||0,totalRevenue:t.totalRevenue||0,averageOrderValue:t.averageOrderValue||0}),{totalOrders:t.totalOrders||0,totalRevenue:t.totalRevenue||0,averageOrderValue:t.averageOrderValue||0}):(console.log("No data available for stats, returning zeros"),{totalOrders:0,totalRevenue:0,averageOrderValue:0})})();(0,o.useEffect)((()=>{console.log("All orders:",Q),console.log("Active tab:",he),console.log("Filtered orders:","all"===he?Q:"pending"===he?oe:"completed"===he?re:"cancelled"===he?Q.filter((e=>"cancelled"===e.status)):"delivery"===he?Q.filter((e=>"delivery"===e.deliveryMethod)):Q.filter((e=>"pickup"===e.deliveryMethod)))}),[Q,oe,re,he]);const Ae=e=>{switch(e){case"new":return"\u041d\u043e\u0432\u044b\u0439";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";case"completed":return"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d";case"rejected":case"cancelled":return"\u041e\u0442\u043c\u0435\u043d\u0435\u043d";default:return"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"}};return ae?(0,l.jsxs)(n.NP,{theme:we,children:[(0,l.jsx)(d,{}),(0,l.jsx)(c,{children:(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"#e0e0e0"},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.75rem",animation:"spin 1s linear infinite"},children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,l.jsx)("path",{d:"M12 6v6l4 2"})]}),"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."]})})]}):t?(0,l.jsxs)(n.NP,{theme:we,children:[(0,l.jsx)(d,{}),(0,l.jsxs)(c,{children:[(0,l.jsxs)(h,{children:[(0,l.jsxs)(x,{children:[(0,l.jsx)("h1",{children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"}),(0,l.jsx)("p",{children:(null===t||void 0===t?void 0:t.name)||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]}),(0,l.jsxs)(g,{children:[(0,l.jsxs)(p,{onClick:()=>{e("/owner/menu")},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,l.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,l.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u043d\u044e"]}),(0,l.jsxs)(p,{onClick:()=>{e("/owner/profile")},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,l.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"]}),(0,l.jsxs)(p,{onClick:ye,children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M3 2v6h6"}),(0,l.jsx)("path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}),(0,l.jsx)("path",{d:"M21 22v-6h-6"}),(0,l.jsx)("path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"})]}),"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"]}),(0,l.jsxs)(p,{$variant:"danger",onClick:ve,children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,l.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,l.jsx)("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"\u0412\u044b\u0439\u0442\u0438"]})]})]}),(0,l.jsxs)(u,{children:[t&&(0,l.jsx)(m,{children:(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{children:t.name}),(0,l.jsxs)(j,{children:[t.address,t.city?`, ${String(t.city)}`:""]}),(0,l.jsx)(f,{children:t.description})]})}),(0,l.jsxs)(y,{children:[(0,l.jsx)(b,{children:(0,l.jsxs)(k,{children:[(0,l.jsx)($,{$color:S,children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),(0,l.jsx)("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),(0,l.jsxs)(A,{children:[(0,l.jsx)(C,{children:"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430"}),(0,l.jsx)(F,{children:fe(Z(ue.totalRevenue)||0)}),(0,l.jsx)(L,{children:"\u0417\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b"})]})]})}),(0,l.jsx)(b,{children:(0,l.jsxs)(k,{children:[(0,l.jsx)($,{$color:M,children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),(0,l.jsx)("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}),(0,l.jsx)("path",{d:"M9 14h6"}),(0,l.jsx)("path",{d:"M9 18h6"}),(0,l.jsx)("path",{d:"M9 10h6"})]})}),(0,l.jsxs)(A,{children:[(0,l.jsx)(C,{children:"\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),(0,l.jsx)(F,{children:Z(ue.totalOrders)||0}),(0,l.jsx)(L,{children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})]})}),(0,l.jsx)(b,{children:(0,l.jsxs)(k,{children:[(0,l.jsx)($,{$color:B,children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,l.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,l.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,l.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),(0,l.jsxs)(A,{children:[(0,l.jsx)(C,{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"}),(0,l.jsx)(F,{children:Z(ue.uniqueCustomers)||0}),(0,l.jsx)(L,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"})]})]})}),(0,l.jsx)(b,{children:(0,l.jsxs)(k,{children:[(0,l.jsx)($,{$color:O,children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}),(0,l.jsxs)(A,{children:[(0,l.jsx)(C,{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"}),(0,l.jsx)(F,{children:"number"===typeof ue.rating?ue.rating.toFixed(1):"string"===typeof ue.rating?parseFloat(ue.rating).toFixed(1):(Z(ue.rating)||0).toFixed(1)}),(0,l.jsx)(L,{children:"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0446\u0435\u043d\u043e\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"})]})]})}),(0,l.jsx)(b,{children:(0,l.jsxs)(k,{children:[(0,l.jsx)($,{$color:R,children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("rect",{x:"1",y:"3",width:"15",height:"13"}),(0,l.jsx)("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),(0,l.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,l.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})}),(0,l.jsxs)(A,{children:[(0,l.jsx)(C,{children:"% \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,l.jsxs)(F,{children:[Z(ue.deliveryPercent)||0,"%"]}),(0,l.jsx)(L,{children:"\u0417\u0430\u043a\u0430\u0437\u043e\u0432 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439"})]})]})})]}),(0,l.jsxs)(z,{children:[(0,l.jsxs)(I,{children:[(0,l.jsxs)(V,{children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,l.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,l.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0417\u0430\u043a\u0430\u0437\u044b (",Q.length,")"]}),(0,l.jsxs)(W,{onClick:()=>{pe(!ge)},children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:ge?(0,l.jsx)("polyline",{points:"6 9 12 15 18 9"}):(0,l.jsx)("polyline",{points:"18 15 12 9 6 15"})}),ge?"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"]})]}),(0,l.jsxs)(U,{$isCollapsed:ge,children:[(0,l.jsxs)(P,{children:[(0,l.jsxs)(E,{$isActive:"all"===he,onClick:()=>xe("all"),children:["\u0412\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u044b (",Q.length,")"]}),(0,l.jsxs)(E,{$isActive:"active"===he,onClick:()=>xe("active"),children:["\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 (",oe.length,")"]}),(0,l.jsxs)(E,{$isActive:"completed"===he,onClick:()=>xe("completed"),children:["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 (",re.length,")"]})]}),(0,l.jsxs)(q,{children:[(0,l.jsx)(H,{children:(0,l.jsxs)(D,{children:[(0,l.jsx)(N,{children:"\u2116 \u0417\u0430\u043a\u0430\u0437\u0430"}),(0,l.jsx)(N,{children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),(0,l.jsx)(N,{children:"\u0414\u0430\u0442\u0430"}),(0,l.jsx)(N,{children:"\u0421\u0443\u043c\u043c\u0430"}),(0,l.jsx)(N,{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,l.jsx)(N,{children:"\u0414\u0435\u0442\u0430\u043b\u0438"})]})}),(0,l.jsxs)(Y,{children:[("all"===he?Q:"active"===he?oe:re).map((e=>(0,l.jsxs)(_,{children:[(0,l.jsx)(J,{children:e.id}),(0,l.jsx)(J,{children:e.customer}),(0,l.jsx)(J,{children:je(e.date)}),(0,l.jsx)(J,{children:fe(e.amount)}),(0,l.jsx)(J,{children:(0,l.jsx)(T,{$status:e.status,children:Ae(e.status)})}),(0,l.jsx)(J,{children:(0,l.jsx)(X,{onClick:()=>(e=>{const r=e.orderItems||[],t=r.length>0;let o=`\n      \u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 #${e.id}\n      \n      \u041a\u043b\u0438\u0435\u043d\u0442: ${e.customer}\n      \u0414\u0430\u0442\u0430: ${je(e.date)}\n      \u0421\u0443\u043c\u043c\u0430: ${fe(e.amount)}\n      \u0421\u0442\u0430\u0442\u0443\u0441: ${Ae(e.status)}\n      \u041c\u0435\u0442\u043e\u0434 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ${"delivery"===e.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"}\n    `;t?(o+="\n\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430:\n",r.forEach((e=>{o+=`- ${e.name} - ${e.quantity} x ${fe(e.price)} = ${fe(e.quantity*e.price)}\n`}))):o+="\n\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u0441\u0442\u0430\u0432\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430",alert(o)})(e),children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"})})]},e.id))),("all"===he?0===Q.length:"active"===he?0===oe.length:0===re.length)&&(0,l.jsx)(_,{children:(0,l.jsx)(J,{colSpan:6,$centered:!0,children:(0,l.jsxs)(G,{children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,l.jsx)("path",{d:"M8 12h8"})]}),(0,l.jsx)("p",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})]})})})]})]})]})]})]})]})]}):(0,l.jsxs)(n.NP,{theme:we,children:[(0,l.jsx)(d,{}),(0,l.jsxs)(c,{children:[(0,l.jsxs)(h,{children:[(0,l.jsx)(x,{children:(0,l.jsx)("h1",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"})}),(0,l.jsxs)(g,{children:[(0,l.jsxs)(p,{onClick:ye,children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M3 2v6h6"}),(0,l.jsx)("path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}),(0,l.jsx)("path",{d:"M21 22v-6h-6"}),(0,l.jsx)("path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"})]}),"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"]}),(0,l.jsxs)(p,{$variant:"danger",onClick:ve,children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),(0,l.jsx)("polyline",{points:"16 17 21 12 16 7"}),(0,l.jsx)("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"\u0412\u044b\u0439\u0442\u0438"]})]})]}),(0,l.jsx)(u,{children:(0,l.jsxs)(G,{children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),(0,l.jsx)("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),(0,l.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),(0,l.jsx)("h2",{children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430"}),(0,l.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u0430\u043d\u043e\u0432\u043e."})]})})]})]})}}}]);
//# sourceMappingURL=762.05e14bfe.chunk.js.map