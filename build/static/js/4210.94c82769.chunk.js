(self.webpackChunkrail_app=self.webpackChunkrail_app||[]).push([[4210],{1959:(e,s,a)=>{"use strict";a.d(s,{Z:()=>l});a(2791);var t=a(5316),n=a(3360),r=a(184);const l=e=>(0,r.jsx)("div",{children:(0,r.jsxs)(t.Z,{show:e.DELETESTATE,onHide:e.ONCLICK,centered:!0,children:[(0,r.jsx)(t.Z.Header,{closeButton:!0,children:(0,r.jsx)(t.Z.Title,{children:e.DELETETITLE})}),(0,r.jsxs)(t.Z.Body,{children:[e.DESCRIPTION," ?"]}),(0,r.jsxs)(t.Z.Footer,{children:[(0,r.jsx)(n.Z,{variant:"danger",onClick:e.YES,children:"Yes"}),(0,r.jsx)(n.Z,{variant:"secondary",onClick:e.ONCLICK,children:"No"})]})]})})},1609:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});a(2791);var t=a(9743),n=a(2677),r=a(3360),l=a(4316),o=a(184);const c=e=>(0,o.jsx)("div",{className:"ml-xxl-n3 ml-xl-n3 ml-lg-n3",children:(0,o.jsxs)(t.Z,{className:"d-flex flex-row justify-content-between align-items-center  mb-2",children:[(0,o.jsx)(n.Z,{className:"d-flex flex-column flex-wrap-wrap align-content-center ",children:(0,o.jsx)("h4",{className:"fw-bold ",children:e.HEADING})}),(0,o.jsxs)(n.Z,{className:"d-flex flex-row flex-wrap-wrap justify-content-end align-items-center mr-lg-4 mr-xxl-4 mr-xl-4",children:[(0,o.jsx)(r.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded fw-bold ",onClick:e.ONCLICK,children:(0,o.jsx)(l.wEH,{size:18,color:"white",className:" fw-bold"})}),(0,o.jsxs)(r.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-block d-xxl-block d-none d-sm-none rounded fw-bold text-light",onClick:e.ONCLICK,children:[(0,o.jsx)(l.wEH,{size:18,className:"mr-2 fw-bold mx-1"}),e.BUTTON_NAME]})]})]})})},7246:(e,s,a)=>{"use strict";a.d(s,{Z:()=>j});var t=a(2791),n=a(1358),r=a(7022),l=a(9743),o=a(2591),c=a(2677),i=a(3360),d=a(8744),x=a(2202),m=a(9108),u=a(6048),g=a.n(u),p=a(2119),h=(a(1502),a(184));const j=e=>{const s=(0,t.useMemo)((()=>e.COLUMNS),[e.COLUMNS]),a=(0,t.useMemo)((()=>e.MOCK_DATA||[]),[e.MOCK_DATA]),{getTableProps:u,getTableBodyProps:j,headerGroups:f,prepareRow:N,page:C}=(0,n.useTable)({columns:s,data:a,autoResetWidth:!1},n.useGlobalFilter,n.useSortBy,n.usePagination);return(0,h.jsx)("div",{children:(0,h.jsx)(r.Z,{fluid:!0,className:"ml-xxl-n4 ml-xl-n4 ml-lg-n4",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(o.Z,{className:"justify-content-center align-items-center",striped:!0,bordered:!0,hover:!0,...u(),responsive:!0,style:{width:"100%"},children:[(0,h.jsx)("thead",{children:f.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e=>(0,t.createElement)("th",{...e.getHeaderProps(),key:e.id,className:"text-center text-dark",style:{width:"".concat(e.width,"px"),whiteSpace:"nowrap",justifyContent:"center",alignItems:"center"},onClick:s=>{s.target.classList.contains("fa-sort")||"ACTIONS"===e.render("Header")||e.toggleSortBy(!e.isSortedDesc)}},"ACTIONS"===e.render("Header")?(0,h.jsx)(h.Fragment,{children:e.render("Header")}):(0,h.jsxs)("div",{children:[e.render("Header"),(0,h.jsx)(x.roE,{className:"mx-2"})]})))))))}),(0,h.jsx)("tbody",{...j(),children:C.length>0?C.map((e=>(N(e),(0,t.createElement)("tr",{...e.getRowProps(),key:e.id},e.cells.map((e=>(0,t.createElement)("td",{...e.getCellProps(),key:e.column.id,className:"text-secondary text-center ",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20ch"}},e.render("Cell")))))))):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:s.length,className:"text-center text-dark",children:"No Data Found"})})})]}),(0,h.jsxs)(c.Z,{className:"".concat(C.length>0?"d-flex":"d-none"," flex-row justify-content-center align-items-center"),children:[(0,h.jsxs)(c.Z,{className:"d-flex justify-content-start align-items-center flex-wrap",children:[(0,h.jsxs)("span",{className:"m-1",children:["Page"," ",(0,h.jsxs)("strong",{className:"m-2",children:[e.currentPage," of ",e.totalPages]})]}),(0,h.jsx)(l.Z,{children:(0,h.jsxs)("span",{className:"m-1",children:["Items per page"," ",(0,h.jsx)("strong",{className:"m-2",children:e.itemsPerPage})]})})]}),(0,h.jsx)(c.Z,{className:"d-none d-sm-none d-md-none d-xxl-flex d-xl-flex d-lg-flex justify-content-end align-items-center",children:(0,h.jsx)(g(),{breakLabel:"...",onPageChange:s=>e.setCurrentPage(s.selected+1),pageRangeDisplayed:5,pageCount:e.totalPages,renderOnZeroPageCount:null,activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",containerClassName:"pagination",previousLabel:(0,h.jsx)(p.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,h.jsx)(m._u0,{})}),nextLabel:(0,h.jsx)(p.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,h.jsx)(m.bBv,{})})})}),(0,h.jsxs)(c.Z,{className:"d-flex d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none justify-content-end align-items-center",children:[(0,h.jsx)(i.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>e.setCurrentPage(e.currentPage-1),disabled:1===e.currentPage,className:"m-2",children:(0,h.jsx)(d.WOK,{size:14})}),(0,h.jsx)(i.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>{e.setCurrentPage(e.currentPage+1)},disabled:e.currentPage===e.totalPages,children:(0,h.jsx)(d.U6L,{size:14})})]})]})]})})})}},1625:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>C});var t=a(2791),n=a(3360),r=a(7022),l=a(9743),o=a(2677),c=a(2202),i=a(1909),d=a(7689),x=a(1087),m=a(7246),u=a(1609),g=a(1959),p=a(368),h=a(2564),j=a(8048),f=a(5804),N=a(184);const C=()=>{const[e,s]=(0,t.useState)(!1),[a,C]=(0,t.useState)(""),[y,v]=(0,t.useState)(""),[w,P]=(0,t.useState)(""),[b,Z]=(0,t.useState)([]),[k,S]=(0,t.useState)(1),[E,T]=(0,t.useState)(1),[O,L]=(0,t.useState)(),{data:I,isLoading:A,refetch:H}=(0,p.Wv)({page:E,search:y});console.log(I);const[_]=(0,p.KK)(),D=(0,d.s0)();(0,t.useEffect)((()=>{I&&I.data&&(Z(I.data),S(I.pagination.totalPages),T(I.pagination.currentPage),L(I.pagination.itemsPerPage))}),[I]);const B=()=>{v(w),H({page:E,search:w})},K=[{Header:"ID",accessor:"s_no"},{Header:"Station Code",accessor:"stationCode"},{Header:"Station Name",accessor:"stationName"},{Header:"City",accessor:"city"},{Header:"State",accessor:"state"},{Header:"Created At",accessor:"createdAt"},{Header:"Updated At",accessor:"updatedAt"},{Header:"ACTIONS",accessor:"action",Cell:e=>{const a=e.row.original._id;return(0,N.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-row",children:[(0,N.jsx)(x.rU,{to:"/admin/edit-station/".concat(a),children:(0,N.jsx)(n.Z,{variant:"warning",children:(0,N.jsx)(c.fmQ,{})})}),(0,N.jsx)(n.Z,{variant:"danger",className:"m-1",onClick:()=>(C(a),void s(!0)),children:(0,N.jsx)(i.ZkW,{})})]})}}];return(0,N.jsxs)("div",{children:[A?(0,N.jsx)(j.Z,{}):(0,N.jsxs)(r.Z,{fluid:!0,className:"mt-3",children:[(0,N.jsxs)(l.Z,{children:[(0,N.jsx)(u.Z,{ONCLICK:()=>D("/admin/add-station"),HEADING:"Stations",BUTTON_NAME:"Add Station"}),(0,N.jsx)("hr",{className:"mt-3"})]}),(0,N.jsxs)(l.Z,{className:"d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row",children:[(0,N.jsx)(o.Z,{className:"my-4 mx-2",xxl:3,xl:3,lg:3,sm:6,md:6,children:(0,N.jsxs)("div",{className:"input-group",children:[(0,N.jsx)("span",{className:"input-group-text",children:(0,N.jsx)(f.dVI,{})}),(0,N.jsx)("input",{type:"text",placeholder:"Search Station...",className:"form-control",value:w,onChange:e=>P(e.target.value),onKeyPress:e=>{"Enter"===e.key&&B()}}),w&&(0,N.jsx)("span",{className:"input-group-text",onClick:()=>{P(""),v("")},children:(0,N.jsx)(f.z3f,{})})]})}),(0,N.jsx)(o.Z,{className:"d-flex flex-column text-center my-4",xxl:2,xl:2,lg:2,sm:3,md:3,children:(0,N.jsx)(n.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:B,className:"",children:"Search"})})]}),(0,N.jsx)(l.Z,{className:"d-flex flex-column align-items-center justift-content-center",children:(0,N.jsx)(o.Z,{xs:12,lg:12,xl:12,xxl:12,md:12,className:"table-responsive",children:(0,N.jsx)(m.Z,{COLUMNS:K,MOCK_DATA:b,currentPage:E,totalPages:k,setCurrentPage:T,itemsPerPage:O})})})]}),(0,N.jsx)(g.Z,{YES:async()=>{try{const n=await _(a);var e,t;if(s(!1),C(""),null!==n&&void 0!==n&&n.data)h.Am.success(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.message,{autoClose:1e3});else h.Am.error(null===n||void 0===n||null===(t=n.error)||void 0===t?void 0:t.data.error,{autoClose:1e3})}catch(n){console.error(n)}},DELETESTATE:e,ONCLICK:()=>s(!1),DESCRIPTION:"Are you sure you want to delete this Station",DELETETITLE:"Station"})]})}},8048:(e,s,a)=>{"use strict";a.d(s,{Z:()=>l});a(2791);var t=a(9329),n=a(7022),r=a(184);const l=()=>(0,r.jsxs)(n.Z,{className:"vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center",children:[(0,r.jsx)(t.s5,{visible:!0,height:"96",width:"96",strokeColor:"#0077B2",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""}),(0,r.jsx)("p",{className:"",children:"Loading Please Wait"})]})},888:(e,s,a)=>{"use strict";var t=a(9047);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,s,a,n,r,l){if(l!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function s(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},2007:(e,s,a)=>{e.exports=a(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1502:()=>{}}]);
//# sourceMappingURL=4210.94c82769.chunk.js.map