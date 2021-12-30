const baseSalaryEl = document.getElementById("base-salary-el")
const bonusEl = document.getElementById("bonus-el")
const notWorkedHoursEl = document.getElementById("not-worked-hours-el")
const holidayBonusEl = document.getElementById("holiday-bonus-el")
const nightHoursEl = document.getElementById("night-hours-el")
const dominicalEl = document.getElementById("dominical-el")

const paymentCalcBtn = document.getElementById("payment-calculate")
const paymentResultEl = document.getElementById("payment-result")
const moneyPerHour = 30.38
let baseSalary = 0
let bonus = 0
let notWorkedHours = 0
let holidayBonus = 0
let nightHours = 0
let dominicalBonus = 0
let paymentResult = 0

function resetValues(){
    baseSalary = 0
    bonus = 0
    notWorkedHours = 0
    holidayBonus = 0
    nightHours = 0
    dominicalBonus = 0
    paymentResult = 0
}

paymentCalcBtn.addEventListener("click", function(){
    paymentResultEl.innerHTML = " "

    if (notWorkedHoursEl.valueAsNumber){
        notWorkedHours = moneyPerHour * notWorkedHoursEl.valueAsNumber
        baseSalary = ((baseSalaryEl.valueAsNumber * 2) * (moneyPerHour)) - notWorkedHours
        bonus = baseSalary * (bonusEl.valueAsNumber / 100)

        if (holidayBonusEl.valueAsNumber){
            holidayBonus = (moneyPerHour * holidayBonusEl.valueAsNumber) + (moneyPerHour * holidayBonusEl.valueAsNumber) * 2
        } else {holidayBonus === 0}

        if (dominicalEl.valueAsNumber){
        dominicalBonus = (moneyPerHour * dominicalEl.valueAsNumber) * .25
        } else {dominicalBonus === 0}

        paymentResult = baseSalary + bonus + holidayBonus + dominicalBonus - notWorkedHours
    } else {
        baseSalary = ((baseSalaryEl.valueAsNumber * 2) * (moneyPerHour))
        bonus = baseSalary * (bonusEl.valueAsNumber / 100)

        if (holidayBonusEl.valueAsNumber){
            holidayBonus = (moneyPerHour * holidayBonusEl.valueAsNumber) + (moneyPerHour * holidayBonusEl.valueAsNumber) * 2
        } else {holidayBonus === 0}
        
        if (dominicalEl.valueAsNumber){
            dominicalBonus = (moneyPerHour * dominicalEl.valueAsNumber) * .25
            } else {dominicalBonus === 0}


        paymentResult = baseSalary + bonus + holidayBonus + dominicalBonus
    }
    

    // notWorkedHours = 30.38 * notWorkedHoursEl.valueAsNumber
    // baseSalary = 30.38 * (baseSalaryEl.valueAsNumber * 2) - notWorkedHours
    // bonus = baseSalary * (bonusEl.valueAsNumber / 100)
    
    // if (notWorkedHoursEl.valueAsNumber){  
    //     paymentResult = Math.round(baseSalary + bonus - notWorkedHours)
    // } else {
    //     paymentResult = Math.round(baseSalary + bonus)
    // }
    

    paymentResultEl.innerHTML = `Approximately 
    <span class="text-accent">${paymentResult}$ MXN</span>
    (Mexican Pesos).`
    resetValues()
})
