"use strict";(self.webpackChunkrail_app=self.webpackChunkrail_app||[]).push([[4080],{9315:(e,l,a)=>{a.d(l,{Z:()=>i});a(2791);var n=a(3360),s=a(4849),t=a(184);const i=e=>{const{variant:l,onClick:a,label:i,size:o,icon:d,className:r,isLoading:c,loaderVariant:m,loaderSize:x,type:u}=e;return(0,t.jsx)(n.Z,{style:{backgroundColor:"#0077B2",borderColor:"#0077B2",color:"white"},variant:l,className:r,size:o,type:u,onClick:a,disabled:!!c,children:c?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{size:"".concat(x||"sm"),variant:"".concat(m||"#0077B2")})}):(0,t.jsxs)(t.Fragment,{children:[d," ",i]})})}},5761:(e,l,a)=>{a.d(l,{Z:()=>t});a(2791);var n=a(5630),s=a(184);const t=e=>{const{label:l,name:a,id:t,type:i,placeholder:o,htmlFor:d,lableClassName:r,value:c,onChange:m,onBlur:x,disabled:u,className:g,lg:h,md:b,xxl:f,xl:j,sm:y,validation:v,star:p}=e;return(0,s.jsxs)(n.Z.Group,{children:[(0,s.jsxs)(n.Z.Label,{htmlFor:d,className:r,children:[l,(0,s.jsx)("span",{className:"text-danger ".concat("none"===p?"d-".concat(p):""),children:"*"})]}),(0,s.jsx)(n.Z.Control,{name:a,id:t,type:i,placeholder:o,value:c,onChange:m,onBlur:x,disabled:u,className:g,lg:h,md:b,xxl:f,xl:j,sm:y}),v]})}},4080:(e,l,a)=>{a.r(l),a.d(l,{default:()=>j});var n=a(5705),s=a(2791),t=a(7022),i=a(5630),o=a(9743),d=a(2677),r=a(7689),c=a(9108),m=a(8007);const x=m.Ry().shape({title:m.nK().required(" Title Must be Required..!"),body:m.nK().required(" Subtitle Must be Required..!"),image:m.nK().required(" Image Must be Required..!")});var u=a(9315),g=a(5761),h=a(3625),b=a(2564),f=a(184);const j=()=>{const[e,l]=(0,s.useState)(""),[a,m]=(0,s.useState)(""),[j,y]=(0,s.useState)(""),[v,{isLoading:p}]=(0,h.E0)(),N=(0,r.s0)(),Z=()=>{N("/admin/general")},C=async()=>{try{const t=await v({title:e,body:a,image:j});var n,s;if(null!==t&&void 0!==t&&t.data)b.Am.success(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message,{autoClose:1e3}),l(""),m(""),y(""),N("/admin/general"),console.log(t.error.data);else b.Am.error(null===t||void 0===t||null===(s=t.error)||void 0===s?void 0:s.data.error,{autoClose:1e3}),console.log("else part"),console.log(t.error)}catch(t){console.error(t)}};return(0,f.jsx)("div",{children:(0,f.jsx)(t.Z,{fluid:!0,children:(0,f.jsx)(n.J9,{initialValues:{title:"",body:"",image:""},validationSchema:x,onSubmit:C,children:n=>{let{values:s,errors:t,touched:r,handleChange:x,handleBlur:h,handleSubmit:b,isSubmitting:v}=n;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(i.Z,{children:[(0,f.jsxs)(o.Z,{className:"d-flex flex-row justify-content-between align-items-center",children:[(0,f.jsxs)(d.Z,{className:"d-flex justify-content-start mb-3 mt-3",children:[(0,f.jsx)("h4",{onClick:Z,children:(0,f.jsx)(c.kyg,{})}),(0,f.jsx)("h4",{children:"Add General"})]}),(0,f.jsxs)(d.Z,{className:"d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center",children:[(0,f.jsx)(u.Z,{className:"m-1",variant:"secondary",onClick:Z,label:"Cancel"}),(0,f.jsx)(u.Z,{className:"m-1",label:"Save",type:"button",isLoading:p,loaderVariant:"info",disabled:v,onClick:""===e||""===a||""===j||r.title&&t.title||r.body&&t.body||r.image&&t.image?b:C})]})]}),(0,f.jsxs)(o.Z,{className:"d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4",children:[(0,f.jsxs)(d.Z,{className:"m-1 p-4 d-flex flex-wrap flex-column shadow rounded",children:[(0,f.jsx)(d.Z,{className:"m-2",lg:"6",xxl:"6",xl:"12",md:"12",sm:"12",children:(0,f.jsx)(g.Z,{label:"Title",type:"",name:"title",className:"form-control ".concat(r.title&&t.title?"is-invalid":""),onChange:e=>{l(e.target.value),x(e)},onBlur:h,validation:r.title&&t.title?(0,f.jsx)("p",{className:"text-danger",children:t.title}):""})}),(0,f.jsx)(d.Z,{className:"m-2",lg:"6",xxl:"6",xl:"12",md:"12",sm:"12",children:(0,f.jsx)(g.Z,{label:"body",type:"",name:"body",className:"form-control ".concat(r.body&&t.body?"is-invalid":""),onChange:e=>{m(e.target.value),x(e)},onBlur:h,validation:r.body&&t.body?(0,f.jsx)("p",{className:"text-danger",children:t.body}):""})})]}),(0,f.jsx)(d.Z,{className:"m-1 p-4 d-flex flex-wrap flex-column shadow rounded",children:(0,f.jsx)(d.Z,{className:"m-2",lg:"6",xxl:"6",xl:"12",md:"12",sm:"12",children:(0,f.jsx)(g.Z,{label:"Image",type:"file",name:"image",className:"form-control ".concat(r.image&&t.image?"is-invalid":""),onChange:e=>{y(e.target.files[0]),x(e)},onBlur:h,validation:r.image&&t.image?(0,f.jsx)("p",{className:"text-danger",children:t.image}):""})})})]}),(0,f.jsxs)(o.Z,{className:"d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center mt-3",children:[(0,f.jsx)(d.Z,{className:"d-flex justify-content-start align-items-center",children:(0,f.jsx)(u.Z,{className:"m-1",variant:"secondary",onClick:Z,label:"Cancel"})}),(0,f.jsx)(d.Z,{className:"d-flex justify-content-end align-items-center",children:(0,f.jsx)(u.Z,{className:"m-1",label:"Save",type:"button",isLoading:p,loaderVariant:"info",disabled:v,onClick:""===e||""===a||""===j||r.title&&t.title||r.body&&t.body||r.image&&t.image?b:C})})]})]})})}})})})}}}]);
//# sourceMappingURL=4080.be46fe3e.chunk.js.map