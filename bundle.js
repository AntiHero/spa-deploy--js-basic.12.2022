(()=>{function e(e){const t=window.location.href;document.querySelector("#app").textContent=e?t.includes("#")?t.replace(/#.*/,e):t+e:window.location.href}document.body.addEventListener("click",(t=>{t.target.matches("a")&&e(t.target.hash)})),e()})();