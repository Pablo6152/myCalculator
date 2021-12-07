let darkmode = localStorage.getItem("darkmode")
let disclaimerAccepted = localStorage.getItem("disclaimerAccepted")


const themeBtn = document.getElementById("theme-btn")
const disclaimerBtn = document.getElementById("accept-disclaimer-btn")

const milesEl = document.getElementById("miles")
const workingHoursEl = document.getElementById("working-hours")
const milesCalcBtn = document.getElementById("miles-calculate")
const milesResultEl = document.getElementById("miles-result")
let milesResult = 0

const baseSalaryEl = document.getElementById("base-salary")
const bonusEl = document.getElementById("bonus")
const notWorkedHoursEl = document.getElementById("not-worked-hours")
const paymentCalcBtn = document.getElementById("payment-calculate")
const paymentResultEl = document.getElementById("payment-result")
let baseSalary = 0
let bonus = 0
let notWorkedHours = 0
let paymentResult = 0

// "baseSalaryEl && workingHoursEl" inputs are redundant, You might be able to simplify the funcionality
// Maybe predifining the base salary but letting the user modify it might help

// When page loads
if (JSON.parse(darkmode)){
    setTheme(1)
} else {themeBtn.textContent = `brightness_7`}

if (JSON.parse(disclaimerAccepted)){
    closeModal()
}

// Modals
disclaimerBtn.addEventListener("click", function(){
    closeModal()
    localStorage.setItem("disclaimerAccepted", "1")
})

function closeModal(){
    document.getElementById("disclaimer-box").style.display = "none"
}


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


// Calculation functions
milesCalcBtn.addEventListener("click", function(){
    if (milesEl.valueAsNumber && workingHoursEl.valueAsNumber){
    milesResult = Math.floor( ( (milesEl.valueAsNumber * 14 / 30) / 96) * (workingHoursEl.valueAsNumber * 2) )
    
    milesResultEl.innerHTML = `Approximately 
        <span class="text-accent">${milesResult}$ MXN</span>
         (Mexican Pesos).`

    } else{
        milesResultEl.textContent = "Please enter values in both fields."
    }
})

paymentCalcBtn.addEventListener("click", function(){
    notWorkedHours = 30.38 * notWorkedHoursEl.valueAsNumber
    baseSalary = 30.38 * (baseSalaryEl.valueAsNumber * 2) - notWorkedHours
    console.log(baseSalary)
    bonus = baseSalary * (bonusEl.valueAsNumber / 100)

    if (notWorkedHoursEl.valueAsNumber){  
        paymentResult = Math.round(baseSalary + bonus - notWorkedHours)
    } else {
        paymentResult = Math.round(baseSalary + bonus)
    }
    
    paymentResultEl.textContent = paymentResult
})
