({form:document.querySelector(".form")}).form.addEventListener("submit",(e=>{e.preventDefault()}));new Promise(((e,o)=>{Math.random()>.3&&e("привет"),o("пока")})).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.b8c097f6.js.map
