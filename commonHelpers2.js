import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as i,i as h}from"./assets/vendor-651d7991.js";const o=document.querySelector("[data-start]");o.disabled=!0;const d=new Date,y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0]<=d){h.show({title:"Error",message:"Please choose a date in the future"});return}o.disabled=!1}};i("#datetime-picker",y);o.addEventListener("click",C);function p(t){const n=t-d;if(n<=0){clearInterval(u);return}const{days:a,hours:s,minutes:c,seconds:r}=q(n);document.querySelector("[data-days]").textContent=e(a),document.querySelector("[data-hours]").textContent=e(s),document.querySelector("[data-minutes]").textContent=e(c),document.querySelector("[data-seconds]").textContent=e(r)}function e(t){return t<10?`0${t}`:t}function q(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}let u;function C(){const t=i("#datetime-picker").selectedDates[0];t&&(u=setInterval(()=>p(t),1e3),o.disabled=!0)}
//# sourceMappingURL=commonHelpers2.js.map