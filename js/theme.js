let darkmode = localStorage.getItem("darkmode")
const themeBtn = document.getElementById("theme-btn")


// When page loads
if (JSON.parse(darkmode)){
    setTheme(1)
} else {themeBtn.textContent = `brightness_7`}


// Dark mode
function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 0) {

        root.style.setProperty('--primary-color', '#f5f5fa');
        root.style.setProperty('--text-color', '#000');
        root.style.setProperty('--secondary-color', '#b6b7d5');
        root.style.setProperty('--accent-color', '#4E9F3D'); 
        
        localStorage.setItem("darkmode", "0")

        themeBtn.textContent = `brightness_7`
    } else if (theme === 1) {

        root.style.setProperty('--primary-color', '#252525');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--secondary-color', '#121212');
        root.style.setProperty('--accent-color', '#5fc44b'); 
        
        localStorage.setItem("darkmode", "1")

        themeBtn.textContent = `brightness_2`
    }
}
themeBtn.addEventListener("click", function(){
    darkmode = localStorage.getItem("darkmode")
    if (JSON.parse(darkmode) !== 1){
        setTheme(1)
    } else if (JSON.parse(darkmode) !== 0){
        setTheme(0)
    }
})