var S=Object.defineProperty,x=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var v=(e,u,n)=>u in e?S(e,u,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[u]=n,C=(e,u)=>{for(var n in u||(u={}))q.call(u,n)&&v(e,n,u[n]);if(g)for(var n of g(u))y.call(u,n)&&v(e,n,u[n]);return e},A=(e,u)=>x(e,z(u));import{j as m,r as E,a as t,T as I,F as N,t as b,L as w,R as O,b as Q,c as k}from"./vendor.026c6318.js";const L=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};L();function R(e,u,n,a){if(!e)return"";if(u===n)return"green";if(u===a&&a!==n)return"red"}function T(e){const u=R(e.isDisabled,e.index,e.rAnswer,e.clickedNum);return m("div",{className:`answer ${u}`,onClick:()=>e.funOnClick(e.index),children:[e.index,". ",e.option]})}function j(e){const[u,n]=E.exports.useState(!1),[a,r]=E.exports.useState(!0),[i,l]=E.exports.useState(),c=u;function f(o){c||(e.corAnswer===o?D():h(),l(o))}function D(){c||(r(!0),n(!0))}function h(){c||(r(!1),n(!0))}const B="\u0412\u0435\u0440\u043D\u043E!",s="\u041D\u0435 \u0432\u0435\u0440\u043D\u043E!";return m("div",{children:[t("p",{children:e.question}),e.options.map((o,d)=>t(T,{rAnswer:e.corAnswer,option:o.value,funOnClick:f,index:d+1,isDisabled:c,clickedNum:i},o.value)),t("div",{children:u?m("div",{children:[m("p",{children:[" ",a?B:s," "]}),t("p",{className:"answer-comment",children:e.answer})]}):null})]})}function H(e){let[u,n]=E.exports.useState(""),[a,r]=E.exports.useState(""),[i,l]=E.exports.useState(""),[c,f]=E.exports.useState([{value:""}]);function D(){n(""),r(""),l(""),f([{value:""}])}function h(s,o){let d=c.map((p,F)=>o===F?A(C({},p),{value:s.target.value}):p);d[d.length-1].value!==""&&d.push({value:""}),f(d)}return t("form",{onSubmit:s=>{s.preventDefault();let o={question:u,options:c.slice(0,-1),answer:a,corAnswer:Number(i)};e.setNewQuizItems([...e.quizitems,o]),localStorage.setItem("localStorageQuizItems",JSON.stringify([...e.quizitems,o])),D(),b.success("\u041D\u043E\u0432\u044B\u0439 Quiz \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!")},children:m("div",{children:[t("p",{children:"\u0412\u043E\u043F\u0440\u043E\u0441"}),t("input",{type:"text",name:"question",value:u,onChange:s=>n(s.target.value)}),t("p",{children:"\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u043E\u0442\u0432\u0435\u0442\u0430"}),t("div",{children:c.map((s,o)=>t("div",{children:t("input",{type:"text",name:"options",value:s.value,onChange:d=>h(d,o)})},o))}),t("p",{children:"\u041E\u0442\u0432\u0435\u0442"}),t("input",{type:"text",name:"answer",value:a,onChange:s=>r(s.target.value)}),t("p",{children:"\u041D\u043E\u043C\u0435\u0440 \u0432\u0435\u0440\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430"}),t("input",{type:"number",name:"answerNumber",value:i,onChange:s=>l(s.target.value)}),t("div",{children:t("button",{type:"submit",children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"})}),t(I,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1,transition:N})]})})}const J=[{question:"\u041A\u0442\u043E \u0438\u0437 \u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u043E\u0432 \u0421\u0428\u0410 \u043D\u0430\u043F\u0438\u0441\u0430\u043B \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0441\u0441\u043A\u0430\u0437 \u043F\u0440\u043E \u0428\u0435\u0440\u043B\u043E\u043A\u0430 \u0425\u043E\u043B\u043C\u0441\u0430?",options:[{value:"\u0414\u0436\u043E\u043D \u041A\u0435\u043D\u043D\u0435\u0434\u0438"},{value:"\u0424\u0440\u0430\u043D\u043A\u043B\u0438\u043D \u0420\u0443\u0437\u0432\u0435\u043B\u044C\u0442"},{value:"\u0420\u043E\u043D\u0430\u043B\u044C\u0434 \u0420\u0435\u0439\u0433\u0430\u043D"}],answer:"32-\u0439 \u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0421\u0428\u0410 \u0424\u0440\u0430\u043D\u043A\u043B\u0438\u043D \u0420\u0443\u0437\u0432\u0435\u043B\u044C\u0442 \u0431\u044B\u043B \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043D \u0438 \u043A\u0430\u043A \u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C. \u0412 1945 \u0433\u043E\u0434\u0443 \u043E\u043D \u043F\u043E\u043F\u044B\u0442\u0430\u043B\u0441\u044F \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437 \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u043E\u0433\u043E \u043B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u0433\u0435\u0440\u043E\u044F, \u043D\u0430\u043F\u0438\u0441\u0430\u0432 \u0441\u043E\u0447\u0438\u043D\u0435\u043D\u0438\u0435 \xAB\u0411\u0435\u0439\u043A\u0435\u0440-\u0441\u0442\u0440\u0438\u0442 \u0444\u043E\u043B\u0438\u043E: \u043F\u044F\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u043E\u043A \u043E \u0428\u0435\u0440\u043B\u043E\u043A\u0435 \u0425\u043E\u043B\u043C\u0441\u0435 \u043E\u0442 \u0424\u0440\u0430\u043D\u043A\u043B\u0438\u043D\u0430 \u0414\u0435\u043B\u0430\u043D\u043E \u0420\u0443\u0437\u0432\u0435\u043B\u044C\u0442\u0430\xBB.",corAnswer:2},{question:"\u041A\u0430\u043A\u0443\u044E \u043F\u043E\u0448\u043B\u0438\u043D\u0443 \u0432\u0432\u0435\u043B\u0438 \u0432 XII  \u0432\u0435\u043A\u0435 \u0432 \u0410\u043D\u0433\u043B\u0438\u0438 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043C\u0443\u0436\u0447\u0438\u043D \u043F\u043E\u0439\u0442\u0438 \u043D\u0430 \u0432\u043E\u0439\u043D\u0443?",options:[{value:"\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u0442\u0443\u043D\u0435\u044F\u0434\u0441\u0442\u0432\u043E"},{value:"\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u0442\u0440\u0443\u0441\u043E\u0441\u0442\u044C"},{value:"\u041D\u0430\u043B\u043E\u0433 \u043D\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0430\u043F\u043E\u0433"}],answer:"\u0410\u043D\u0433\u043B\u0438\u0447\u0430\u043D\u0430\u043C \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0430\u043B\u043E\u0433 \u043D\u0430 \u0442\u0440\u0443\u0441\u043E\u0441\u0442\u044C. \u0418\u043C \u043E\u0431\u043B\u0430\u0433\u0430\u043B\u0438 \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u043D\u0435 \u0436\u0435\u043B\u0430\u043B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0432\u043E\u0439\u043D\u0430\u0445 \u0432\u043E \u0441\u043B\u0430\u0432\u0443 \u043A\u043E\u0440\u043E\u043B\u044F.",corAnswer:2}];let P=e=>t(Q,{children:e.quizitems.map((u,n)=>t(j,{question:u.question,options:u.options,answer:u.answer,corAnswer:u.corAnswer},u.question))});function M(){localStorage.getItem("localStorageQuizItems")===null&&localStorage.setItem("localStorageQuizItems",JSON.stringify(J));let e=JSON.parse(localStorage.getItem("localStorageQuizItems")||""),[u,n]=E.exports.useState(e);return m("div",{className:"App",children:[t("h1",{children:"QUIZ!"}),m("nav",{children:[t(w,{className:"nav-link",to:"/quiz/",children:"Home"})," |"," ",t(w,{className:"nav-link",to:"/quiz/new",children:"Add new question"})]}),m(O,{children:[t(P,{path:"/quiz/",quizitems:u}),t(H,{path:"/quiz/new",quizitems:u,setNewQuizItems:n})]})]})}k.render(t(M,{}),document.getElementById("root"));
