"use strict";(self.webpackChunkrail_app=self.webpackChunkrail_app||[]).push([[364],{1959:(e,a,s)=>{s.d(a,{Z:()=>t});s(2791);var l=s(5316),r=s(3360),n=s(184);const t=e=>(0,n.jsx)("div",{children:(0,n.jsxs)(l.Z,{show:e.DELETESTATE,onHide:e.ONCLICK,centered:!0,children:[(0,n.jsx)(l.Z.Header,{closeButton:!0,children:(0,n.jsx)(l.Z.Title,{children:e.DELETETITLE})}),(0,n.jsxs)(l.Z.Body,{children:[e.DESCRIPTION," ?"]}),(0,n.jsxs)(l.Z.Footer,{children:[(0,n.jsx)(r.Z,{variant:"danger",onClick:e.YES,children:"Yes"}),(0,n.jsx)(r.Z,{variant:"secondary",onClick:e.ONCLICK,children:"No"})]})]})})},1609:(e,a,s)=>{s.d(a,{Z:()=>d});s(2791);var l=s(9743),r=s(2677),n=s(3360),t=s(4316),c=s(184);const d=e=>(0,c.jsx)("div",{className:"ml-xxl-n3 ml-xl-n3 ml-lg-n3",children:(0,c.jsxs)(l.Z,{className:"d-flex flex-row justify-content-between align-items-center  mb-2",children:[(0,c.jsx)(r.Z,{className:"d-flex flex-column flex-wrap-wrap align-content-center ",children:(0,c.jsx)("h4",{className:"fw-bold ",children:e.HEADING})}),(0,c.jsxs)(r.Z,{className:"d-flex flex-row flex-wrap-wrap justify-content-end align-items-center mr-lg-4 mr-xxl-4 mr-xl-4",children:[(0,c.jsx)(n.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded fw-bold ",onClick:e.ONCLICK,children:(0,c.jsx)(t.wEH,{size:18,color:"white",className:" fw-bold"})}),(0,c.jsxs)(n.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-block d-xxl-block d-none d-sm-none rounded fw-bold text-light",onClick:e.ONCLICK,children:[(0,c.jsx)(t.wEH,{size:18,className:"mr-2 fw-bold mx-1"}),e.BUTTON_NAME]})]})]})})},7246:(e,a,s)=>{s.d(a,{Z:()=>j});var l=s(2791),r=s(1358),n=s(7022),t=s(9743),c=s(2591),d=s(2677),i=s(3360),o=s(8744),x=s(2202),m=s(9108),u=s(6048),h=s.n(u),g=s(2119),p=(s(1502),s(184));const j=e=>{const a=(0,l.useMemo)((()=>e.COLUMNS),[e.COLUMNS]),s=(0,l.useMemo)((()=>e.MOCK_DATA||[]),[e.MOCK_DATA]),{getTableProps:u,getTableBodyProps:j,headerGroups:N,prepareRow:C,page:f}=(0,r.useTable)({columns:a,data:s,autoResetWidth:!1},r.useGlobalFilter,r.useSortBy,r.usePagination);return(0,p.jsx)("div",{children:(0,p.jsx)(n.Z,{fluid:!0,className:"ml-xxl-n4 ml-xl-n4 ml-lg-n4",children:(0,p.jsxs)(t.Z,{children:[(0,p.jsxs)(c.Z,{className:"justify-content-center align-items-center",striped:!0,bordered:!0,hover:!0,...u(),responsive:!0,style:{width:"100%"},children:[(0,p.jsx)("thead",{children:N.map((e=>(0,l.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e=>(0,l.createElement)("th",{...e.getHeaderProps(),key:e.id,className:"text-center text-dark",style:{width:"".concat(e.width,"px"),whiteSpace:"nowrap",justifyContent:"center",alignItems:"center"},onClick:a=>{a.target.classList.contains("fa-sort")||"ACTIONS"===e.render("Header")||e.toggleSortBy(!e.isSortedDesc)}},"ACTIONS"===e.render("Header")?(0,p.jsx)(p.Fragment,{children:e.render("Header")}):(0,p.jsxs)("div",{children:[e.render("Header"),(0,p.jsx)(x.roE,{className:"mx-2"})]})))))))}),(0,p.jsx)("tbody",{...j(),children:f.length>0?f.map((e=>(C(e),(0,l.createElement)("tr",{...e.getRowProps(),key:e.id},e.cells.map((e=>(0,l.createElement)("td",{...e.getCellProps(),key:e.column.id,className:"text-secondary text-center ",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20ch"}},e.render("Cell")))))))):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:a.length,className:"text-center text-dark",children:"No Data Found"})})})]}),(0,p.jsxs)(d.Z,{className:"".concat(f.length>0?"d-flex":"d-none"," flex-row justify-content-center align-items-center"),children:[(0,p.jsxs)(d.Z,{className:"d-flex justify-content-start align-items-center flex-wrap",children:[(0,p.jsxs)("span",{className:"m-1",children:["Page"," ",(0,p.jsxs)("strong",{className:"m-2",children:[e.currentPage," of ",e.totalPages]})]}),(0,p.jsx)(t.Z,{children:(0,p.jsxs)("span",{className:"m-1",children:["Items per page"," ",(0,p.jsx)("strong",{className:"m-2",children:e.itemsPerPage})]})})]}),(0,p.jsx)(d.Z,{className:"d-none d-sm-none d-md-none d-xxl-flex d-xl-flex d-lg-flex justify-content-end align-items-center",children:(0,p.jsx)(h(),{breakLabel:"...",onPageChange:a=>e.setCurrentPage(a.selected+1),pageRangeDisplayed:5,pageCount:e.totalPages,renderOnZeroPageCount:null,activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",containerClassName:"pagination",previousLabel:(0,p.jsx)(g.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,p.jsx)(m._u0,{})}),nextLabel:(0,p.jsx)(g.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,p.jsx)(m.bBv,{})})})}),(0,p.jsxs)(d.Z,{className:"d-flex d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none justify-content-end align-items-center",children:[(0,p.jsx)(i.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>e.setCurrentPage(e.currentPage-1),disabled:1===e.currentPage,className:"m-2",children:(0,p.jsx)(o.WOK,{size:14})}),(0,p.jsx)(i.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>{e.setCurrentPage(e.currentPage+1)},disabled:e.currentPage===e.totalPages,children:(0,p.jsx)(o.U6L,{size:14})})]})]})]})})})}},364:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var l=s(2791),r=s(3360),n=s(7022),t=s(9743),c=s(5630),d=s(2677),i=s(2202),o=s(1909),x=s(7689),m=s(1087),u=s(7246),h=s(1609),g=s(4434),p=s(2564),j=s(8048),N=s(1959),C=s(1212),f=s(5804),v=s(184);const b=()=>{const[e,a]=(0,l.useState)([]),[s,b]=(0,l.useState)(1),[Z,y]=(0,l.useState)(1),[w,P]=(0,l.useState)(!1),[T,k]=(0,l.useState)(""),[E,H]=(0,l.useState)({value:"chennai",label:"Chennai"}),[L,S]=(0,l.useState)(""),[O,I]=(0,l.useState)(),{data:D,isLoading:A}=(0,g.mA)({page:Z,city:E.value,search:L,id:T}),B=(0,x.s0)(),[K]=(0,g.aT)();(0,l.useEffect)((()=>{D&&D.data&&(a(D.data),b(D.pagination.totalPages),I(D.pagination.itemsPerPage))}),[D]),(0,l.useEffect)((()=>{y(1),S("")}),[E]);const M=[{Header:"ID",accessor:"s_no"},{Header:"Train No",accessor:"trainNo"},{Header:"Train Name",accessor:"trainName"},{Header:"Type",accessor:"type"},{Header:"Zone",accessor:"zone"},{Header:"Updated On",accessor:"updatedOn"},{Header:"From",accessor:"from"},{Header:"Departure",accessor:"departure"},{Header:"To",accessor:"to"},{Header:"Arrival",accessor:"arrival"},{Header:"Duration",accessor:"duration"},{Header:"Distance",accessor:"distance"},{Header:"Speed",accessor:"speed"},{Header:"Halts",accessor:"halts"},{Header:"sClasses",accessor:"sClasses"},{Header:"sRunsOn",accessor:"sRunsOn"},{Header:"Train ID",accessor:"trainID"},{Header:"ACTIONS",accessor:"action",Cell:e=>{const a=e.row.original._id;return(0,v.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-row",children:[(0,v.jsx)(m.rU,{to:"/admin/edit-localtrain/:".concat(a),children:(0,v.jsx)(r.Z,{variant:"warning",children:(0,v.jsx)(i.fmQ,{})})}),(0,v.jsx)(r.Z,{variant:"danger",className:"m-1",onClick:()=>(k(a),void P(!0)),children:(0,v.jsx)(o.ZkW,{})})]})}}];return(0,v.jsxs)("div",{children:[A?(0,v.jsx)(j.Z,{}):(0,v.jsxs)(n.Z,{fluid:!0,className:"mt-3",children:[(0,v.jsxs)(t.Z,{className:"",children:[(0,v.jsx)(h.Z,{ONCLICK:()=>B("/admin/add-localtrain"),HEADING:"Local Trains",BUTTON_NAME:"Add Local Train"}),(0,v.jsx)("hr",{className:"mt-3"})]}),(0,v.jsx)(t.Z,{className:"mb-3",children:(0,v.jsxs)(c.Z,{onSubmit:e=>e.preventDefault(),className:"d-flex flex-column flex-md-row align-items-md-center justify-content-start",children:[(0,v.jsx)(d.Z,{xs:12,md:4,lg:3,className:"m-2",children:(0,v.jsxs)(c.Z.Group,{controlId:"city",children:[(0,v.jsx)(c.Z.Label,{className:"fs-4",children:"Select City:"}),(0,v.jsx)(C.ZP,{value:E,onChange:e=>{H(e)},options:[{value:"chennai",label:"Chennai"},{value:"delhi",label:"Delhi"},{value:"pune",label:"Pune"},{value:"kolkata",label:"Kolkata"},{value:"mumbai",label:"Mumbai"},{value:"hyderabad",label:"Hyderabad"}]})]})}),(0,v.jsx)(d.Z,{xs:12,md:4,lg:3,className:"m-2",children:(0,v.jsxs)(c.Z.Group,{controlId:"search",className:"position-relative",children:[(0,v.jsx)(c.Z.Label,{className:"fs-4",children:"Search:"}),(0,v.jsxs)("div",{className:"input-group",children:[(0,v.jsx)("span",{className:"input-group-text",children:(0,v.jsx)(f.dVI,{})}),(0,v.jsx)(c.Z.Control,{type:"text",value:L,onChange:e=>{S(e.target.value)},placeholder:"Search LocalTrain"}),L&&(0,v.jsx)("span",{className:"input-group-text",onClick:()=>S(""),children:(0,v.jsx)(f.z3f,{style:{cursor:"pointer"}})})]})]})})]})}),(0,v.jsx)(t.Z,{className:"",children:e.length>0?(0,v.jsx)(u.Z,{COLUMNS:M,MOCK_DATA:e,currentPage:Z,totalPages:s,setCurrentPage:y,itemsPerPage:O}):(0,v.jsx)("div",{className:"text-center",children:"No data found."})})]}),(0,v.jsx)(N.Z,{YES:async()=>{try{const s=await K({city:E.value,id:T});var e,a;if(null!==s&&void 0!==s&&s.data)p.Am.success(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.message,{autoClose:1e3}),P(!1),k("");else p.Am.error(null===s||void 0===s||null===(a=s.error)||void 0===a?void 0:a.data.error,{autoClose:1e3}),P(!1),k("")}catch(s){console.error(s)}},DELETESTATE:w,ONCLICK:()=>{P(!1)},DESCRIPTION:"Are you sure you want to delete this Train",DELETETITLE:"Local Train"})]})}},8048:(e,a,s)=>{s.d(a,{Z:()=>t});s(2791);var l=s(9329),r=s(7022),n=s(184);const t=()=>(0,n.jsxs)(r.Z,{className:"vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center",children:[(0,n.jsx)(l.s5,{visible:!0,height:"96",width:"96",strokeColor:"#0077B2",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""}),(0,n.jsx)("p",{className:"",children:"Loading Please Wait"})]})},1502:()=>{}}]);
//# sourceMappingURL=364.80a8759d.chunk.js.map