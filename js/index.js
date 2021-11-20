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
