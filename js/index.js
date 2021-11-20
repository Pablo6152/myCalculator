let darkmode = localStorage.getItem("darkmode")

const themeBtn = document.getElementById("theme-btn")
const lightInput = document.querySelectorAll(".light-input")
const lightBtn = document.querySelectorAll(".light-btn")

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

function enableDarkMode(){
    themeBtn.innerHTML = `Dark mode is 
    <span class="text-accent2">ON</span>!`
    
    document.body.classList.add("dark-color")
    for (i = 0; i < lightInput.length; i++){
        lightInput[i].classList.add("dark-input")
    }
    for (i = 0; i < lightBtn.length; i++){
        lightBtn[i].classList.add("dark-btn")
    }

    localStorage.setItem("darkmode", "1")
    
}

function disableDarkMode(){
    themeBtn.innerHTML = `Dark mode is 
    <span class="text-accent2">OFF</span>!`

    document.body.classList.remove("dark-color")
    for (i = 0; i < lightInput.length; i++){
        lightInput[i].classList.remove("dark-input")
    }
    for (i = 0; i < lightBtn.length; i++){
        lightBtn[i].classList.remove("dark-btn")
    }

    localStorage.setItem("darkmode", "0")
}

if (JSON.parse(darkmode)){
    enableDarkMode()
} else {themeBtn.innerHTML = `Dark mode is 
<span class="text-accent2">OFF</span>!`}

themeBtn.addEventListener("click", function(){
    darkmode = localStorage.getItem("darkmode")
    if (JSON.parse(darkmode)){
        disableDarkMode()
    } else{
        enableDarkMode()
    }
    
})

milesCalcBtn.addEventListener("click", function(){
    if (milesEl.valueAsNumber && workingHoursEl.valueAsNumber){
    milesResult = Math.floor( ( (milesEl.valueAsNumber * 14 / 30) / 96) * (workingHoursEl.valueAsNumber * 2) )
    
    milesResultEl.innerHTML = `You are going to recieve approximately 
        <span class="text-accent">${milesResult}$ MXN</span>
         (Mexican Pesos).`

    } else{
        milesResultEl.textContent = "Please enter values in both fields."
    }
})

paymentCalcBtn.addEventListener("click", function(){
    baseSalary = 30.38 * (baseSalaryEl.valueAsNumber * 2)
    bonus = baseSalary * (bonusEl.valueAsNumber / 100)

    if (notWorkedHoursEl.valueAsNumber){  
    notWorkedHours = 30.38 * notWorkedHoursEl.valueAsNumber
    paymentResult = Math.round(baseSalary + bonus - notWorkedHours)
    } else {
        paymentResult = Math.round(baseSalary + bonus)
    }
    
    paymentResultEl.textContent = paymentResult
})
