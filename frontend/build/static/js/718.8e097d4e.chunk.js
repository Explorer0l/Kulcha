"use strict";(self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[]).push([[718],{718:(e,o,r)=>{r.r(o),r.d(o,{default:()=>D});var t=r(43),i=r(216),n=r(464),s=r(105),d=r(367),a=r(579);const l=n.Ay.div`
  padding: 20px;
  background-color: #1e1e1e;
  min-height: 100vh;
  color: #f8f9fa;
`,c=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #2d2d2d;
`,p=n.Ay.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
`,x=n.Ay.div`
  background-color: #2d2d2d;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,g=n.Ay.h2`
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
`,h=n.Ay.div`
  margin-bottom: 20px;
`,u=n.Ay.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`,b=n.Ay.input`
  width: 100%;
  padding: 10px 12px;
  background-color: #3a3a3a;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  color: #f8f9fa;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ff9f0d;
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,f=n.Ay.textarea`
  width: 100%;
  padding: 10px 12px;
  background-color: #3a3a3a;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  color: #f8f9fa;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #ff9f0d;
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,m=n.Ay.button`
  background-color: #ff9f0d;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5960c;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-right: 8px;
  }
`,v=(0,n.Ay)(m)`
  background-color: transparent;
  border: 1px solid #6c757d;
  color: #f8f9fa;
  margin-right: 10px;
  
  &:hover {
    background-color: #2d2d2d;
    border-color: #f8f9fa;
  }
`,y=n.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,j=n.Ay.div`
  margin-bottom: 20px;
`,w=n.Ay.div`
  border: 2px dashed #4d4d4d;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  margin-bottom: 16px;
  background-color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ff9f0d;
    background-color: #3a3a3a;
  }
  
  &.dragover {
    border-color: #ff9f0d;
    background-color: rgba(255, 159, 13, 0.1);
  }
`,k=n.Ay.input`
  display: none;
`,A=(n.Ay.div`
  margin-top: 16px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,n.Ay.img`
  width: 100%;
  display: block;
  max-height: 300px;
  object-fit: cover;
`,n.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(220, 53, 69, 0.8);
    transform: scale(1.1);
  }
`,n.Ay.div`
  color: #dc3545;
  background-color: rgba(220, 53, 69, 0.1);
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`),S=n.Ay.div`
  color: #28a745;
  background-color: rgba(40, 167, 69, 0.1);
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`,C=n.Ay.p`
  margin-top: 8px;
  font-size: 0.85rem;
  color: #adb5bd;
`,L=n.Ay.div`
  display: flex;
  margin-bottom: 16px;
  border-bottom: 1px solid #4d4d4d;
`,z=n.Ay.button`
  background: none;
  border: none;
  padding: 10px 16px;
  color: ${e=>e.active?"#ff9f0d":"#adb5bd"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: 2px solid ${e=>e.active?"#ff9f0d":"transparent"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: #ff9f0d;
  }
`,R=n.Ay.div`
  margin-top: 20px;
  border: 1px solid #4d4d4d;
  border-radius: 8px;
  overflow: hidden;
`,B=n.Ay.div`
  padding: 10px;
  background-color: #333;
  border-bottom: 1px solid #4d4d4d;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: #adb5bd;
`,P=n.Ay.div`
  max-width: 375px;
  height: 667px;
  margin: 20px auto;
  border: 10px solid #333;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
`,W=n.Ay.div`
  max-width: 900px;
  height: 500px;
  margin: 20px auto;
  border: 10px solid #333;
  border-top-width: 20px;
  border-bottom-width: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
`,D=()=>{const e=(0,i.Zp)(),{refreshRestaurantData:o}=(0,d.Us)(),[r,n]=(0,t.useState)(null),[D,I]=(0,t.useState)(!0),[M,F]=(0,t.useState)(null),[U,E]=(0,t.useState)(null),[N,O]=(0,t.useState)(null),[$,_]=(0,t.useState)(null),[G,H]=(0,t.useState)(!1),[T,q]=(0,t.useState)("desktop"),[J,V]=(0,t.useState)(!1),Y=(0,t.useRef)(null);(0,t.useEffect)((()=>{(async()=>{const o=localStorage.getItem("adminUser")||localStorage.getItem("currentUser"),r=localStorage.getItem("isAuthenticated"),t=localStorage.getItem("userRole");if(o&&"true"===r&&"admin"===t)try{const e=JSON.parse(o),r=await(0,s.EB)(e.restaurantId);r?(n(r),(r.coverImage||r.cover_image)&&E(r.coverImage||r.cover_image||"")):O("Failed to fetch restaurant data")}catch(N){console.error("Error fetching restaurant data:",N),O("An error occurred while fetching restaurant data")}else e("/admin/login");I(!1)})()}),[e]);const Z=e=>{if(!["image/jpeg","image/png","image/webp"].includes(e.type))return void O("Please upload a valid image file (JPEG, PNG, or WebP)");if(e.size>5242880)return void O("Image size should be less than 5MB");O(null),F(e);const o=URL.createObjectURL(e);E(o)},K=e=>{const{name:o,value:r}=e.target;n((e=>e?{...e,[o]:r}:e))};return(0,a.jsxs)(l,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(p,{children:"Restaurant Profile"})}),D?(0,a.jsx)(x,{children:(0,a.jsx)("div",{style:{textAlign:"center",padding:"40px 0"},children:(0,a.jsx)("p",{children:"Loading restaurant data..."})})}):(0,a.jsxs)(a.Fragment,{children:[N&&(0,a.jsx)(A,{children:N}),$&&(0,a.jsx)(S,{children:$}),(0,a.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),r){H(!0),O(null),_(null);try{const e={name:r.name,description:r.description,address:r.address};if(M){const o=new FileReader;o.readAsDataURL(M),await new Promise((r=>{o.onloadend=()=>{"string"===typeof o.result&&(e.coverImage=o.result,r())}}))}else null===U&&(e.coverImage="");const t=await(0,s.Bj)(r.id,e);t?(n(t),_("Restaurant profile updated successfully"),await o(r.id),U&&U.startsWith("blob:")&&(URL.revokeObjectURL(U),E(t.coverImage||t.cover_image||null))):O("Failed to update restaurant profile")}catch(N){console.error("Error updating restaurant data:",N),O("An error occurred while updating restaurant profile")}finally{H(!1)}}},children:[(0,a.jsxs)(x,{children:[(0,a.jsxs)(g,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.jsx)("path",{d:"M12 8v8"}),(0,a.jsx)("path",{d:"M8 12h8"})]}),"Basic Information"]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(u,{htmlFor:"name",children:"Restaurant Name"}),(0,a.jsx)(b,{type:"text",id:"name",name:"name",value:(null===r||void 0===r?void 0:r.name)||"",onChange:K,required:!0})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(u,{htmlFor:"address",children:"Address"}),(0,a.jsx)(b,{type:"text",id:"address",name:"address",value:(null===r||void 0===r?void 0:r.address)||"",onChange:K,required:!0})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(u,{htmlFor:"description",children:"Description"}),(0,a.jsx)(f,{id:"description",name:"description",value:(null===r||void 0===r?void 0:r.description)||"",onChange:K,required:!0})]})]}),(0,a.jsxs)(x,{children:[(0,a.jsxs)(g,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,a.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,a.jsx)("polyline",{points:"21 15 16 10 5 21"})]}),"Hero Image"]}),(0,a.jsxs)(j,{children:[(0,a.jsxs)(w,{onClick:()=>{Y.current&&Y.current.click()},onDragEnter:e=>{e.preventDefault(),e.stopPropagation(),V(!0)},onDragLeave:e=>{e.preventDefault(),e.stopPropagation(),V(!1)},onDragOver:e=>{e.preventDefault(),e.stopPropagation()},onDrop:e=>{e.preventDefault(),e.stopPropagation(),V(!1);const o=e.dataTransfer.files;o&&o.length>0&&Z(o[0])},className:J?"dragover":"",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"#adb5bd",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,a.jsx)("polyline",{points:"17 8 12 3 7 8"}),(0,a.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),(0,a.jsx)("p",{children:"Drag & drop an image here, or click to select"}),(0,a.jsx)(k,{type:"file",ref:Y,onChange:e=>{const o=e.target.files;if(o&&o.length>0){const e=o[0];Z(e)}},accept:"image/jpeg,image/png,image/webp"})]}),(0,a.jsx)(C,{children:"Supported formats: JPEG, PNG, WebP | Max size: 5MB"}),U&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(L,{children:[(0,a.jsx)(z,{active:"desktop"===T,onClick:()=>q("desktop"),children:"Desktop"}),(0,a.jsx)(z,{active:"mobile"===T,onClick:()=>q("mobile"),children:"Mobile"})]}),(0,a.jsxs)(R,{children:[(0,a.jsx)(B,{children:"desktop"===T?"Desktop Preview":"Mobile Preview (Telegram Web App)"}),"desktop"===T?(0,a.jsx)(W,{children:(0,a.jsxs)("div",{style:{position:"relative",width:"100%",height:"380px",overflow:"hidden",borderRadius:"8px"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url(${U})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.9) contrast(1.05)"}}),(0,a.jsxs)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.2) 100%)",display:"flex",flexDirection:"column",justifyContent:"center",padding:"40px",color:"white"},children:[(0,a.jsx)("h2",{style:{fontSize:"2.5rem",fontWeight:700,marginBottom:"12px"},children:(null===r||void 0===r?void 0:r.name)||"Restaurant Name"}),(0,a.jsx)("p",{style:{fontSize:"1.2rem",marginBottom:"24px",maxWidth:"60%"},children:"Enjoy the best food in town"}),(0,a.jsx)("button",{style:{backgroundColor:"#ff9f0d",color:"white",border:"none",padding:"12px 20px",borderRadius:"6px",fontWeight:600,width:"fit-content"},children:"Browse Menu"})]})]})}):(0,a.jsxs)(P,{children:[(0,a.jsxs)("div",{style:{position:"relative",width:"100%",height:"280px",overflow:"hidden"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url(${U})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(0.9) contrast(1.05)"}}),(0,a.jsxs)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.4) 100%)",display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px",color:"white"},children:[(0,a.jsx)("h2",{style:{fontSize:"1.8rem",fontWeight:700,marginBottom:"8px"},children:(null===r||void 0===r?void 0:r.name)||"Restaurant Name"}),(0,a.jsx)("p",{style:{fontSize:"1rem",marginBottom:"16px"},children:"Enjoy the best food in town"}),(0,a.jsx)("button",{style:{backgroundColor:"#ff9f0d",color:"white",border:"none",padding:"8px 16px",borderRadius:"6px",fontWeight:600,width:"fit-content"},children:"Browse Menu"})]})]}),(0,a.jsx)("div",{style:{padding:"16px",backgroundColor:"#1e1e1e",color:"#adb5bd",fontSize:"0.8rem"},children:(0,a.jsx)("p",{children:"Telegram Web App Preview"})})]})]}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:(0,a.jsxs)(m,{type:"button",onClick:()=>{U&&U.startsWith("blob:")&&URL.revokeObjectURL(U),E(null),F(null),Y.current&&(Y.current.value="")},children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,a.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),(0,a.jsx)("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),(0,a.jsx)("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),"Remove Image"]})})]})]})]}),(0,a.jsxs)(y,{children:[(0,a.jsxs)(v,{type:"button",onClick:()=>e("/owner/statistics"),children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,a.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"Back"]}),(0,a.jsx)(m,{type:"submit",disabled:G,children:G?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{animation:"spin 1s linear infinite"},children:[(0,a.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),(0,a.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),(0,a.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),(0,a.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),(0,a.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),(0,a.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),(0,a.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),(0,a.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]}),"Saving..."]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,a.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,a.jsx)("polyline",{points:"7 3 7 8 15 8"})]}),"Save Changes"]})})]})]})]})]})}}}]);
//# sourceMappingURL=718.8e097d4e.chunk.js.map