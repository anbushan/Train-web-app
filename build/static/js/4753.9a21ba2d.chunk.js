(self.webpackChunkrail_app=self.webpackChunkrail_app||[]).push([[4753],{1959:(e,s,a)=>{"use strict";a.d(s,{Z:()=>l});a(2791);var t=a(5316),n=a(3360),r=a(184);const l=e=>(0,r.jsx)("div",{children:(0,r.jsxs)(t.Z,{show:e.DELETESTATE,onHide:e.ONCLICK,centered:!0,children:[(0,r.jsx)(t.Z.Header,{closeButton:!0,children:(0,r.jsx)(t.Z.Title,{children:e.DELETETITLE})}),(0,r.jsxs)(t.Z.Body,{children:[e.DESCRIPTION," ?"]}),(0,r.jsxs)(t.Z.Footer,{children:[(0,r.jsx)(n.Z,{variant:"danger",onClick:e.YES,children:"Yes"}),(0,r.jsx)(n.Z,{variant:"secondary",onClick:e.ONCLICK,children:"No"})]})]})})},1609:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});a(2791);var t=a(9743),n=a(2677),r=a(3360),l=a(4316),i=a(184);const o=e=>(0,i.jsx)("div",{className:"ml-xxl-n3 ml-xl-n3 ml-lg-n3",children:(0,i.jsxs)(t.Z,{className:"d-flex flex-row justify-content-between align-items-center  mb-2",children:[(0,i.jsx)(n.Z,{className:"d-flex flex-column flex-wrap-wrap align-content-center ",children:(0,i.jsx)("h4",{className:"fw-bold ",children:e.HEADING})}),(0,i.jsxs)(n.Z,{className:"d-flex flex-row flex-wrap-wrap justify-content-end align-items-center mr-lg-4 mr-xxl-4 mr-xl-4",children:[(0,i.jsx)(r.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded fw-bold ",onClick:e.ONCLICK,children:(0,i.jsx)(l.wEH,{size:18,color:"white",className:" fw-bold"})}),(0,i.jsxs)(r.Z,{style:{backgroundColor:"#0077B2",border:"none"},className:"d-lg-block d-xxl-block d-none d-sm-none rounded fw-bold text-light",onClick:e.ONCLICK,children:[(0,i.jsx)(l.wEH,{size:18,className:"mr-2 fw-bold mx-1"}),e.BUTTON_NAME]})]})]})})},7246:(e,s,a)=>{"use strict";a.d(s,{Z:()=>j});var t=a(2791),n=a(1358),r=a(7022),l=a(9743),i=a(2591),o=a(2677),c=a(3360),d=a(8744),x=a(2202),m=a(9108),g=a(6048),h=a.n(g),u=a(2119),p=(a(1502),a(184));const j=e=>{const s=(0,t.useMemo)((()=>e.COLUMNS),[e.COLUMNS]),a=(0,t.useMemo)((()=>e.MOCK_DATA||[]),[e.MOCK_DATA]),{getTableProps:g,getTableBodyProps:j,headerGroups:f,prepareRow:N,page:C}=(0,n.useTable)({columns:s,data:a,autoResetWidth:!1},n.useGlobalFilter,n.useSortBy,n.usePagination);return(0,p.jsx)("div",{children:(0,p.jsx)(r.Z,{fluid:!0,className:"ml-xxl-n4 ml-xl-n4 ml-lg-n4",children:(0,p.jsxs)(l.Z,{children:[(0,p.jsxs)(i.Z,{className:"justify-content-center align-items-center",striped:!0,bordered:!0,hover:!0,...g(),responsive:!0,style:{width:"100%"},children:[(0,p.jsx)("thead",{children:f.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e=>(0,t.createElement)("th",{...e.getHeaderProps(),key:e.id,className:"text-center text-dark",style:{width:"".concat(e.width,"px"),whiteSpace:"nowrap",justifyContent:"center",alignItems:"center"},onClick:s=>{s.target.classList.contains("fa-sort")||"ACTIONS"===e.render("Header")||e.toggleSortBy(!e.isSortedDesc)}},"ACTIONS"===e.render("Header")?(0,p.jsx)(p.Fragment,{children:e.render("Header")}):(0,p.jsxs)("div",{children:[e.render("Header"),(0,p.jsx)(x.roE,{className:"mx-2"})]})))))))}),(0,p.jsx)("tbody",{...j(),children:C.length>0?C.map((e=>(N(e),(0,t.createElement)("tr",{...e.getRowProps(),key:e.id},e.cells.map((e=>(0,t.createElement)("td",{...e.getCellProps(),key:e.column.id,className:"text-secondary text-center ",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",maxWidth:"20ch"}},e.render("Cell")))))))):(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:s.length,className:"text-center text-dark",children:"No Data Found"})})})]}),(0,p.jsxs)(o.Z,{className:"".concat(C.length>0?"d-flex":"d-none"," flex-row justify-content-center align-items-center"),children:[(0,p.jsxs)(o.Z,{className:"d-flex justify-content-start align-items-center flex-wrap",children:[(0,p.jsxs)("span",{className:"m-1",children:["Page"," ",(0,p.jsxs)("strong",{className:"m-2",children:[e.currentPage," of ",e.totalPages]})]}),(0,p.jsx)(l.Z,{children:(0,p.jsxs)("span",{className:"m-1",children:["Items per page"," ",(0,p.jsx)("strong",{className:"m-2",children:e.itemsPerPage})]})})]}),(0,p.jsx)(o.Z,{className:"d-none d-sm-none d-md-none d-xxl-flex d-xl-flex d-lg-flex justify-content-end align-items-center",children:(0,p.jsx)(h(),{breakLabel:"...",onPageChange:s=>e.setCurrentPage(s.selected+1),pageRangeDisplayed:5,pageCount:e.totalPages,renderOnZeroPageCount:null,activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",containerClassName:"pagination",previousLabel:(0,p.jsx)(u.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,p.jsx)(m._u0,{})}),nextLabel:(0,p.jsx)(u.Pd.Provider,{value:{color:"#0077B2",size:"28px"},children:(0,p.jsx)(m.bBv,{})})})}),(0,p.jsxs)(o.Z,{className:"d-flex d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none justify-content-end align-items-center",children:[(0,p.jsx)(c.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>e.setCurrentPage(e.currentPage-1),disabled:1===e.currentPage,className:"m-2",children:(0,p.jsx)(d.WOK,{size:14})}),(0,p.jsx)(c.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:()=>{e.setCurrentPage(e.currentPage+1)},disabled:e.currentPage===e.totalPages,children:(0,p.jsx)(d.U6L,{size:14})})]})]})]})})})}},7950:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>f});var t=a(2791),n=a(3360),r=a(7022),l=a(9743),i=a(2677),o=a(1909),c=a(7689),d=a(7246),x=a(1609),m=a(8048),g=a(3625),h=a(2564),u=a(1959),p=a(5804),j=a(184);const f=()=>{const e=(0,c.s0)(),[s,a]=(0,t.useState)([]),[f,N]=(0,t.useState)(1),[C,y]=(0,t.useState)(""),[v,w]=(0,t.useState)(!1),[b,P]=(0,t.useState)(1),[Z,k]=(0,t.useState)(),[T,E]=(0,t.useState)(""),[S,O]=(0,t.useState)(""),{data:L,isLoading:I,refetch:A}=(0,g.tE)({page:b,search:T}),[H]=(0,g.sJ)();(0,t.useEffect)((()=>{L&&L.data&&(a(L.data),N(L.pagination.totalPages),P(b),k(L.pagination.itemsPerPage))}),[L,b]),console.log(L);const D=()=>{E(S),A({page:b,search:S})},_=[{Header:"ID",accessor:"s_no"},{Header:"Title",accessor:"title",width:"auto",minWidth:100},{Header:"Sub Title",accessor:"body",width:"auto",minWidth:100},{Header:"Image",accessor:"image",Cell:e=>{const s=e.value;return(0,j.jsx)("img",{src:s,alt:"img",style:{maxWidth:"50px",maxHeight:"50px"}})}},{Header:"Created Date",accessor:"createdAt.date",width:"auto",minWidth:100},{Header:"Created Time",accessor:"createdAt.time",width:"auto",minWidth:100},{Header:"ACTIONS",accessor:"action",fixed:"right",Cell:e=>{const s=e.row.original._id;return(0,j.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-row",children:(0,j.jsx)(n.Z,{variant:"danger",className:"m-1",onClick:()=>(y(s),void w(!0)),children:(0,j.jsx)(o.ZkW,{})})})}}];return(0,j.jsx)("div",{children:I?(0,j.jsx)(m.Z,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(r.Z,{fluid:!0,className:"my-4",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(i.Z,{children:(0,j.jsx)(x.Z,{ONCLICK:()=>e("/admin/add-general"),HEADING:" General Notification",BUTTON_NAME:"Add General",headingClassName:"text-center text-md-start m-md-4 m-xl-2"})})}),(0,j.jsx)("hr",{className:"bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "}),(0,j.jsxs)(l.Z,{className:"d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row",children:[(0,j.jsx)(i.Z,{className:"my-4 mx-2",xxl:3,xl:3,lg:3,sm:6,md:6,children:(0,j.jsxs)("div",{className:"input-group",children:[(0,j.jsx)("span",{className:"input-group-text",children:(0,j.jsx)(p.dVI,{})}),(0,j.jsx)("input",{type:"text",placeholder:"Search notification...",className:"form-control",value:S,onChange:e=>O(e.target.value),onKeyPress:e=>{"Enter"===e.key&&D()}}),S&&(0,j.jsx)("span",{className:"input-group-text",onClick:()=>{O(""),E("")},children:(0,j.jsx)(p.z3f,{})})]})}),(0,j.jsx)(i.Z,{className:"d-flex flex-column text-center my-4",xxl:2,xl:2,lg:2,sm:3,md:3,children:(0,j.jsx)(n.Z,{style:{backgroundColor:"#0077B2",border:"none"},onClick:D,className:"",children:"Search"})})]}),(0,j.jsx)(l.Z,{className:"justify-content-center",children:(0,j.jsx)(i.Z,{xs:12,lg:12,xl:12,xxl:12,md:12,className:"table-responsive",children:(0,j.jsx)(d.Z,{COLUMNS:_,MOCK_DATA:s,currentPage:b,totalPages:f,setCurrentPage:P,itemsPerPage:Z})})})]}),(0,j.jsx)(u.Z,{DELETESTATE:v,ONCLICK:()=>w(!1),YES:async()=>{try{const a=await H(C);var e,s;if(w(!1),y(""),null!==a&&void 0!==a&&a.data)h.Am.success(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.message,{autoClose:1e3}),console.log(a);else h.Am.error(null===a||void 0===a||null===(s=a.error)||void 0===s?void 0:s.data.error,{autoClose:1e3}),console.log("else part"),console.log(a.error)}catch(a){console.error(a)}},DESCRIPTION:"Confirm to Delete this notification",DELETETITLE:"Notification"})]})})}},8048:(e,s,a)=>{"use strict";a.d(s,{Z:()=>l});a(2791);var t=a(9329),n=a(7022),r=a(184);const l=()=>(0,r.jsxs)(n.Z,{className:"vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center",children:[(0,r.jsx)(t.s5,{visible:!0,height:"96",width:"96",strokeColor:"#0077B2",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading",wrapperStyle:{},wrapperClass:""}),(0,r.jsx)("p",{className:"",children:"Loading Please Wait"})]})},888:(e,s,a)=>{"use strict";var t=a(9047);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,s,a,n,r,l){if(l!==t){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function s(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},2007:(e,s,a)=>{e.exports=a(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1502:()=>{}}]);
//# sourceMappingURL=4753.9a21ba2d.chunk.js.map