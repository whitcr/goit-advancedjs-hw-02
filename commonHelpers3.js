import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as u}from"./assets/vendor-651d7991.js";const e=document.querySelector(".form");e.addEventListener("submit",c);function a(m,s){return new Promise((n,o)=>{const t=Math.random()>.3;setTimeout(()=>{t?n({position:m,delay:s}):o({position:m,delay:s})},s)})}function c(m){m.preventDefault();const s=Number(e.elements.delay.value),n=Number(e.elements.step.value),o=Number(e.elements.amount.value);e.elements.delay.value="",e.elements.step.value="",e.elements.amount.value="";for(let t=1;t<=o;t++){const i=s+(t-1)*n;a(t,i).then(({position:l,delay:r})=>{u.success({title:"Fulfilled",message:`✅ Fulfilled promise ${l} in ${r}ms`})}).catch(({position:l,delay:r})=>{u.error({title:"Rejected",message:`❌ Rejected promise ${l} in ${r}ms`})})}}
//# sourceMappingURL=commonHelpers3.js.map
