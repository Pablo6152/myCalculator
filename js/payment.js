const baseSalaryEl = document.getElementById("base-salary-el")
const bonusEl = document.getElementById("bonus-el")
const notWorkedHoursEl = document.getElementById("not-worked-hours-el")
const holidayBonusEl = document.getElementById("holiday-bonus-el")
const repositionEl = document.getElementById("reposition-el")
const nightHoursEl = document.getElementById("night-hours-el")
const dominicalEl = document.getElementById("dominical-el")

const paymentCalcBtn = document.getElementById("payment-calculate")
const totalEarnedEl = document.getElementById("total-earned-el")
const totalNotWorkedEl = document.getElementById("total-not-worked-el")
const totalPaidEl = document.getElementById("total-paid-el")

const moneyPerHour = 30.38
const nightHour = 10.53
let baseSalary = 0
let bonus = 0
let notWorkedHours = 0
let holidayBonus = 0
let nightHours = 0
let reposition = 0
let dominicalBonus = 0
let paymentResult = 0
let totalEarned = 0
let totalNotWorked = 0
let totalPaid = 0

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
    if (notWorkedHoursEl.valueAsNumber){
        notWorkedHours = moneyPerHour * notWorkedHoursEl.valueAsNumber
        baseSalary = ((baseSalaryEl.valueAsNumber * 2) * (moneyPerHour))
        reposition = moneyPerHour * repositionEl.valueAsNumber
        bonus = ((baseSalary - notWorkedHours) + reposition) * (bonusEl.valueAsNumber / 100)

        if (holidayBonusEl.valueAsNumber){
            holidayBonus = (moneyPerHour * holidayBonusEl.valueAsNumber) * 2
        } else {holidayBonus === 0}

        if (dominicalEl.valueAsNumber){
        dominicalBonus = (moneyPerHour * dominicalEl.valueAsNumber) * .25
        } else {dominicalBonus === 0}

        if (nightHoursEl.valueAsNumber){
        nightHours = (nightHour * nightHoursEl.valueAsNumber)
        } else {nightHours === 0}
        
        totalEarned = baseSalary + bonus + holidayBonus + dominicalBonus + nightHours + reposition
        totalNotWorked = notWorkedHours
        totalPaid = totalEarned - totalNotWorked

    } else {
        baseSalary = ((baseSalaryEl.valueAsNumber * 2) * (moneyPerHour))
        bonus = (baseSalary + reposition) * (bonusEl.valueAsNumber / 100)

        if (holidayBonusEl.valueAsNumber){
            holidayBonus = (moneyPerHour * holidayBonusEl.valueAsNumber) * 2
        } else {holidayBonus === 0}
        
        if (dominicalEl.valueAsNumber){
            dominicalBonus = (moneyPerHour * dominicalEl.valueAsNumber) * .25
            } else {dominicalBonus === 0}

        if (nightHoursEl.valueAsNumber){
            nightHours = (nightHour * nightHoursEl.valueAsNumber)
            } else {nightHours === 0}

        
        totalEarned = baseSalary + bonus + holidayBonus + dominicalBonus + nightHours + reposition
        totalNotWorked = notWorkedHours
        totalPaid = totalEarned - totalNotWorked
    }
    
    // paymentResultEl.innerHTML = `Approximately 
    // <span class="text-accent">${paymentResult}$ MXN</span>
    // (Mexican Pesos).`

    totalEarnedEl.textContent = `$ ${totalEarned}`
    totalNotWorkedEl.textContent = `$ ${totalNotWorked}`
    totalPaidEl.textContent = `$ ${totalPaid}`
    
    console.log(`Base salary: ${baseSalary}`)
    console.log(`Reposition: ${reposition}`)
    console.log(`Bonus: ${bonus}`)
    console.log(`Holiday bonus: ${holidayBonus}`)
    console.log(`Dominical bonus: ${dominicalBonus}`)
    console.log(`Night hours: ${nightHours}`)
    console.log(`Not worked hours: ${notWorkedHours}`)
    console.log(`Total payment: ${paymentResult}`)

    resetValues()

})



