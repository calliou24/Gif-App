import{j as g,P as m,r as p,p as h,l as y,t as b,T as x,R as v,a as N}from"./vendor.219c5d47.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};R();const k="_form_10d6d_1",T="_inputCont_10d6d_11",G="_searchBar_10d6d_19",S="_textReflect_10d6d_35",z="_btnCont_10d6d_51",L="_btn_10d6d_51";var l={form:k,inputCont:T,searchBar:G,textReflect:S,btnCont:z,btn:L};const o=g.exports.jsx,d=g.exports.jsxs,_=({add:i,reset:t})=>{const[n,c]=p.exports.useState("");function e(a){c(a.target.value)}function s(a){a.preventDefault(),i(n),c("")}function r(a){a.preventDefault(),t()}return d("form",{className:l.form,onSubmit:a=>s(a),children:[d("div",{className:l.inputCont,children:[o("input",{className:l.searchBar,onChange:a=>e(a),placeholder:"Search",value:n}),o("p",{id:"p",className:l.textReflect,children:n.length<20?n:o("p",{style:{color:"red"},children:"Too many characters!"})})]}),d("div",{className:l.btnCont,children:[o("button",{type:"submit",className:l.btn,children:"ADD"}),o("button",{onClick:a=>r(a),type:"submit",className:l.btn,children:"DEFAULT"})]})]})};_.propTypes={add:m.func.isRequired,reset:m.func.isRequired};const P="_item_vmlot_1";var j={item:P};const C=({title:i,url:t,toast:n})=>o(y.CopyToClipboard,{text:t,children:o("li",{className:j.item,onClick:()=>n("Copied URL"),children:o("img",{src:t,alt:i})})});C.propTypes={title:h.exports.PropTypes.string.isRequired,url:h.exports.PropTypes.string.isRequired};const A=async i=>{const t=`https://api.giphy.com/v1/gifs/search?q=${i}&limit=6&api_key=TOH7KYyn452h30J4PokPr9IC8piozssx`,n=await fetch(t),{data:c}=await n.json();return c.map(({id:s,title:r,images:a})=>({id:s,title:r,url:a.fixed_width_downsampled.url}))},D=i=>{const[t,n]=p.exports.useState({data:[],loading:!0});return p.exports.useEffect(()=>{A(i).then(c=>n({data:c,loading:!1}))},[]),t},I="_gifCategory_1kszg_1",O="_titleCont_1kszg_11",q="_title_1kszg_11",w="_deleteCat_1kszg_31",B="_listGrid_1kszg_61",E="_checkIcon_1kszg_77";var u={gifCategory:I,titleCont:O,title:q,deleteCat:w,listGrid:B,checkIcon:E};const V=({category:i,deleteCategory:t})=>{const{data:n,loading:c}=D(i);return d("div",{className:u.gifCategory,children:[d("div",{className:u.titleCont,children:[c?"Loading...":o("h2",{className:u.title,children:i&&i}),d("button",{className:u.deleteCat,onClick:()=>t(i),children:[" ","delete"," "]})]}),o("ul",{className:u.listGrid,children:n.map(({id:e,title:s,url:r})=>o(C,{toast:b,title:s,url:r},e))}),o(x,{toastOptions:{className:"",duration:2e3,style:{background:"#363636",color:"#fff",borderRadius:"0px",fontSize:"1.2rem"}}})]})};function F(){const i=["Web Dev"],[t,n]=p.exports.useState(i),c=r=>{if(!t.includes(r)&&r!=="")return n([r,...t])},e=()=>{n(i)};function s(r){const a=t.filter(f=>f===r?"":f);return n(a)}return d("div",{className:"App",children:[o("div",{className:"app-header",children:o(_,{add:c,reset:e})}),o("div",{className:"categories",children:t.map(r=>o(V,{deleteCategory:s,category:r},r))})]})}v.render(o(N.StrictMode,{children:o(F,{})}),document.getElementById("root"));
