const milesEl = document.getElementById("miles")
const workingHoursEl = document.getElementById("working-hours")
const milesCalcBtn = document.getElementById("miles-calculate")
const milesResultEl = document.getElementById("miles-result")
let milesResult = 0

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