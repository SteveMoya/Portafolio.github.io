const body=document.querySelector("body"),sidebar=body.querySelector("nav"),toggle=body.querySelector(".toggle"),searchBtn=body.querySelector(".search-box"),modeSwitch=body.querySelector(".toggle-switch");modeText=body.querySelector(".mode-text"),toggle.addEventListener("click",(()=>{sidebar.classList.toggle("close")})),searchBtn.addEventListener("click",(()=>{sidebar.classList.remove("close")})),modeSwitch.addEventListener("click",(()=>{body.classList.toggle("dark"),body.classList.contains("dark")?modeText.innerText="Light mode":modeText.innerText="Dark mode"}));const enlaces=document.querySelectorAll(".ul .a"),lightbox=document.querySelector(".lightbox"),grande=document.querySelector(".grande"),cerrar=document.querySelector(".cerrar");enlaces.forEach(((e,t)=>{enlaces[t].addEventListener("click",(t=>{t.preventDefault();let o=e.querySelector(".img").src;console.log(o),lightbox.classList.add("activo"),grande.setAttribute("src",o)}))})),cerrar.addEventListener("click",(()=>{lightbox.classList.remove("activo")}));