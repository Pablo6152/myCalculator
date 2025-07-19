import { checkIndicatorsStatus } from "../index.js"
import { agentData } from "./data.js"
checkIndicatorsStatus()

const weeklyWorkHoursEl = document.getElementById("weekly-work-hours")
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

class PaymentCalculator{
    constructor(data){
        Object.assign(this, data)
    }
        
    calculate(){
        const {name, moneyPerHour, nightHour} = this
        
        let baseSalary = moneyPerHour * (weeklyWorkHoursEl.valueAsNumber)

        const notWorkedHours = notWorkedHoursEl.valueAsNumber ? moneyPerHour * notWorkedHoursEl.valueAsNumber : 0
        const reposition = repositionEl.valueAsNumber ? moneyPerHour * repositionEl.valueAsNumber : 0
        const bonus = ((baseSalary - notWorkedHours) + reposition) * (bonusEl.valueAsNumber / 100)
        const holidayBonus = holidayBonusEl.valueAsNumber ? (moneyPerHour * holidayBonusEl.valueAsNumber) * 2 : 0
        const dominicalBonus = dominicalEl.valueAsNumber ? (moneyPerHour * dominicalEl.valueAsNumber) * .25 : 0
        const nightHours = nightHoursEl.valueAsNumber ? (nightHour * nightHoursEl.valueAsNumber) : 0

        let totalEarned = baseSalary + bonus + holidayBonus + reposition + nightHours + dominicalBonus
        let totalPaid = totalEarned - notWorkedHours

        totalEarnedEl.textContent = `${Math.round(totalEarned * 100) / 100}`
        totalNotWorkedEl.textContent = `${notWorkedHours.toFixed(2)}`
        totalPaidEl.textContent = `${Math.round(totalPaid * 100) / 100}`
    }
}

// const makeNationalPayment = new PaymentCalculator(agentData.national)
const makeBilingualPayment = new PaymentCalculator(agentData.bilingual)

paymentCalcBtn.addEventListener("click", function(){
    // makeNationalPayment.calculate()
    makeBilingualPayment.calculate()
})