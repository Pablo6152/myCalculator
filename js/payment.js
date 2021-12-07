const baseSalaryEl = document.getElementById("base-salary")
const bonusEl = document.getElementById("bonus")
const notWorkedHoursEl = document.getElementById("not-worked-hours")
const paymentCalcBtn = document.getElementById("payment-calculate")
const paymentResultEl = document.getElementById("payment-result")
let baseSalary = 0
let bonus = 0
let notWorkedHours = 0
let paymentResult = 0


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
