import {loadTheme} from "./theme.js"
import { checkDisclaimerModal } from "./index.js"
import {toggleNavBtn, checkNavMode} from "./utils.js"

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

//National values are not updated to current wages.
const agentData = {
    national: {
        name: `Agente nacional (Español)`,
        moneyPerHour: 19.95,
        nightHour: 10.53,
    },
    bilingual: {
        name: `Agente bilingüe (English)`,
        moneyPerHour: 30.38,
        nightHour: 10.53,
    }
}

function PaymentCalculator(data){
    Object.assign(this, data)

    this.calculate = function(){
        const {name, moneyPerHour, nightHour} = this
        
        let baseSalary = moneyPerHour * (weeklyWorkHoursEl.valueAsNumber * 2)

        let notWorkedHours = 0
        if(notWorkedHoursEl.valueAsNumber){
            notWorkedHours = moneyPerHour * notWorkedHoursEl.valueAsNumber
        }

        let reposition = 0
        if(repositionEl.valueAsNumber){
            reposition = moneyPerHour * repositionEl.valueAsNumber
        }

        let bonus = ((baseSalary - notWorkedHours) + reposition) * (bonusEl.valueAsNumber / 100)

        let holidayBonus = 0
        if (holidayBonusEl.valueAsNumber){
            holidayBonus = (moneyPerHour * holidayBonusEl.valueAsNumber) * 2
        }

        let dominicalBonus = 0
        if (dominicalEl.valueAsNumber){
            dominicalBonus = (moneyPerHour * dominicalEl.valueAsNumber) * .25
        }

        let nightHours = 0
        if (nightHoursEl.valueAsNumber){
            nightHours = (nightHour * nightHoursEl.valueAsNumber)
        }

        let totalEarned = baseSalary + bonus + holidayBonus + reposition + nightHours + dominicalBonus
        let totalPaid = totalEarned - notWorkedHours

        console.log(`

        Agent name: ${name},
        Base salary: ${baseSalary}, 
        Not worked hours: ${notWorkedHours}, 
        Bonus: ${bonus},
        Night hours: ${nightHours},
        Holiday bonus: ${holidayBonus},
        Dominical bonus: ${dominicalBonus},
        TotalEarned: ${totalEarned},
        Not worked: ${notWorkedHours},
        TotalPaid: ${totalPaid}

        `)

        totalEarnedEl.textContent = `${Math.round(totalEarned * 100) / 100}`
        totalNotWorkedEl.textContent = `${notWorkedHours}`
        totalPaidEl.textContent = `${Math.round(totalPaid * 100) / 100}`
    }

}

const makeNationalPayment = new PaymentCalculator(agentData.national)
const makeBilingualPayment = new PaymentCalculator(agentData.bilingual)

paymentCalcBtn.addEventListener("click", function(){
    makeNationalPayment.calculate()
    makeBilingualPayment.calculate()
})


loadTheme()
checkDisclaimerModal()
checkNavMode()