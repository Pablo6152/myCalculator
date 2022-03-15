let navBarMode = localStorage.getItem("navbarmode")

const toggleNavBtn = document.getElementById("toggle-navbar")
const siteTitleEl = document.getElementById("site-title")
const navContainerEl = document.getElementById("nav-container")

toggleNavBtn.addEventListener("click", toggleNavbar)

function checkNavMode(){
    navBarMode = localStorage.getItem("navbarmode")
    if (JSON.parse(navBarMode) === 1){
        setNavMode(1)
    } else if(JSON.parse(navBarMode) === 0){
        setNavMode(0)
    }
}

function setNavMode(mode){
    if (mode === 0) {

        siteTitleEl.style.display = "none"
        navContainerEl.style.display = "none"
    
        localStorage.setItem("navbarmode", "0")
    } else if (mode === 1) {

        siteTitleEl.style.display = "block"
        navContainerEl.style.display = "block"
    
        localStorage.setItem("navbarmode", "1")
    }
}

function toggleNavbar(){
    navBarMode = localStorage.getItem("navbarmode")
    if (JSON.parse(navBarMode) !== 0){
        setNavMode(0)
    } else if (JSON.parse(navBarMode) !== 1){
        setNavMode(1)
    }
    
}

export {toggleNavBtn, checkNavMode}