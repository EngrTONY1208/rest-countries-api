// toggle dropdown
const filter = document.querySelector(".region-container");
const dropdown = document.querySelector(".region-dropdown");
 

filter.addEventListener("click", () =>{
  dropdown.classList.toggle("active")
})

const lightmode =  document.querySelector("toggle-container");
const sunmode = document.querySelector("sun");


const darkMode = document.querySelector(".moon-icon");
const lightMode = document.querySelector(".dark");
const  toggleLightMenu = document.querySelector(".light-mode")
   const darkModeContainer = document.querySelector(".dark")
   lightMode.addEventListener("click", (e) => {
    if (e.target.matches(".moon-icon") || e.target.parentElement.matches(".moon-icon")) {
        document.body.classList.add("light-mode")
        darkMode.innerHTML = `
        <span class="moon toggle-icon"><i class="fa fa-moon-o"></i>dark mode </span>
        `
    }else {
        document.body.classList.remove("light-mode")
        darkMode.innerHTML = `
        <span class="sun toggle-icon"><i class="fa fa-sun-o"></i>light mode </span>
       `
      
    }
  
    
})
  