import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s=document.querySelector(".form-input");s.addEventListener("focus",function(){s.setAttribute("placeholder","Type area")});s.addEventListener("blur",function(){s.setAttribute("placeholder","")});const e={email:"",message:""},o="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",t=>{e[t.target.name]=t.target.value,localStorage.setItem(o,JSON.stringify(e))});document.addEventListener("DOMContentLoaded",()=>{const t=JSON.parse(localStorage.getItem(o));t&&(e.email=t.email,e.message=t.message,a.elements.email.value=e.email,a.elements.message.value=e.message)});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(o),a.reset(),Object.keys(e).forEach(r=>e[r]="")});
//# sourceMappingURL=2-form.js.map
