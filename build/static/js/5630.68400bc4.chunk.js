(self.webpackChunkrail_app=self.webpackChunkrail_app||[]).push([[5630],{888:(e,t,a)=>{"use strict";var s=a(9047);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,l,o){if(o!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return a.PropTypes=a,a}},2007:(e,t,a)=>{e.exports=a(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1701:(e,t,a)=>{"use strict";a.d(t,{Ed:()=>l,UI:()=>r,XW:()=>o});var s=a(2791);function r(e,t){let a=0;return s.Children.map(e,(e=>s.isValidElement(e)?t(e,a++):e))}function l(e,t){let a=0;s.Children.forEach(e,(e=>{s.isValidElement(e)&&t(e,a++)}))}function o(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}},5630:(e,t,a)=>{"use strict";a.d(t,{Z:()=>G});var s=a(1418),r=a.n(s),l=a(2007),o=a.n(l),n=a(2791),i=a(184);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=n.forwardRef(((e,t)=>{let{as:a="div",className:s,type:l="valid",tooltip:o=!1,...n}=e;return(0,i.jsx)(a,{...n,ref:t,className:r()(s,"".concat(l,"-").concat(o?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=c;const f=d,m=n.createContext({});var p=a(162);const u=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,className:l,type:o="checkbox",isValid:c=!1,isInvalid:d=!1,as:f="input",...u}=e;const{controlId:b}=(0,n.useContext)(m);return s=(0,p.vE)(s,"form-check-input"),(0,i.jsx)(f,{...u,ref:t,type:o,id:a||b,className:r()(l,s,c&&"is-valid",d&&"is-invalid")})}));u.displayName="FormCheckInput";const b=u,x=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,htmlFor:l,...o}=e;const{controlId:c}=(0,n.useContext)(m);return a=(0,p.vE)(a,"form-check-label"),(0,i.jsx)("label",{...o,ref:t,htmlFor:l||c,className:r()(s,a)})}));x.displayName="FormCheckLabel";const y=x;var h=a(1701);const v=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,bsSwitchPrefix:l,inline:o=!1,reverse:c=!1,disabled:d=!1,isValid:u=!1,isInvalid:x=!1,feedbackTooltip:v=!1,feedback:N,feedbackType:j,className:w,style:I,title:F="",type:k="checkbox",label:g,children:C,as:E="input",...R}=e;s=(0,p.vE)(s,"form-check"),l=(0,p.vE)(l,"form-switch");const{controlId:P}=(0,n.useContext)(m),T=(0,n.useMemo)((()=>({controlId:a||P})),[P,a]),O=!C&&null!=g&&!1!==g||(0,h.XW)(C,y),_=(0,i.jsx)(b,{...R,type:"switch"===k?"checkbox":k,ref:t,isValid:u,isInvalid:x,disabled:d,as:E});return(0,i.jsx)(m.Provider,{value:T,children:(0,i.jsx)("div",{style:I,className:r()(w,O&&s,o&&"".concat(s,"-inline"),c&&"".concat(s,"-reverse"),"switch"===k&&l),children:C||(0,i.jsxs)(i.Fragment,{children:[_,O&&(0,i.jsx)(y,{title:F,children:g}),N&&(0,i.jsx)(f,{type:j,tooltip:v,children:N})]})})})}));v.displayName="FormCheck";const N=Object.assign(v,{Input:b,Label:y});a(2391);const j=n.forwardRef(((e,t)=>{let{bsPrefix:a,type:s,size:l,htmlSize:o,id:c,className:d,isValid:f=!1,isInvalid:u=!1,plaintext:b,readOnly:x,as:y="input",...h}=e;const{controlId:v}=(0,n.useContext)(m);return a=(0,p.vE)(a,"form-control"),(0,i.jsx)(y,{...h,type:s,size:o,ref:t,readOnly:x,id:c||v,className:r()(d,b?"".concat(a,"-plaintext"):a,l&&"".concat(a,"-").concat(l),"color"===s&&"".concat(a,"-color"),f&&"is-valid",u&&"is-invalid")})}));j.displayName="FormControl";const w=Object.assign(j,{Feedback:f}),I=n.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:l="div",...o}=e;return s=(0,p.vE)(s,"form-floating"),(0,i.jsx)(l,{ref:t,className:r()(a,s),...o})}));I.displayName="FormFloating";const F=I,k=n.forwardRef(((e,t)=>{let{controlId:a,as:s="div",...r}=e;const l=(0,n.useMemo)((()=>({controlId:a})),[a]);return(0,i.jsx)(m.Provider,{value:l,children:(0,i.jsx)(s,{...r,ref:t})})}));k.displayName="FormGroup";const g=k;var C=a(2677);const E=n.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:s,column:l=!1,visuallyHidden:o=!1,className:c,htmlFor:d,...f}=e;const{controlId:u}=(0,n.useContext)(m);s=(0,p.vE)(s,"form-label");let b="col-form-label";"string"===typeof l&&(b="".concat(b," ").concat(b,"-").concat(l));const x=r()(c,s,o&&"visually-hidden",l&&b);return d=d||u,l?(0,i.jsx)(C.Z,{ref:t,as:"label",className:x,htmlFor:d,...f}):(0,i.jsx)(a,{ref:t,className:x,htmlFor:d,...f})}));E.displayName="FormLabel";const R=E,P=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,id:l,...o}=e;const{controlId:c}=(0,n.useContext)(m);return a=(0,p.vE)(a,"form-range"),(0,i.jsx)("input",{...o,type:"range",ref:t,className:r()(s,a),id:l||c})}));P.displayName="FormRange";const T=P,O=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:s,htmlSize:l,className:o,isValid:c=!1,isInvalid:d=!1,id:f,...u}=e;const{controlId:b}=(0,n.useContext)(m);return a=(0,p.vE)(a,"form-select"),(0,i.jsx)("select",{...u,size:l,ref:t,className:r()(o,a,s&&"".concat(a,"-").concat(s),c&&"is-valid",d&&"is-invalid"),id:f||b})}));O.displayName="FormSelect";const _=O,S=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:l="small",muted:o,...n}=e;return a=(0,p.vE)(a,"form-text"),(0,i.jsx)(l,{...n,ref:t,className:r()(s,a,o&&"text-muted")})}));S.displayName="FormText";const L=S,V=n.forwardRef(((e,t)=>(0,i.jsx)(N,{...e,ref:t,type:"switch"})));V.displayName="Switch";const z=Object.assign(V,{Input:N.Input,Label:N.Label}),W=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:l,controlId:o,label:n,...c}=e;return a=(0,p.vE)(a,"form-floating"),(0,i.jsxs)(g,{ref:t,className:r()(s,a),controlId:o,...c,children:[l,(0,i.jsx)("label",{htmlFor:o,children:n})]})}));W.displayName="FloatingLabel";const U=W,A={_ref:o().any,validated:o().bool,as:o().elementType},D=n.forwardRef(((e,t)=>{let{className:a,validated:s,as:l="form",...o}=e;return(0,i.jsx)(l,{...o,ref:t,className:r()(a,s&&"was-validated")})}));D.displayName="Form",D.propTypes=A;const G=Object.assign(D,{Group:g,Control:w,Floating:F,Check:N,Switch:z,Label:R,Text:L,Range:T,Select:_,FloatingLabel:U})},2391:e=>{"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=5630.68400bc4.chunk.js.map