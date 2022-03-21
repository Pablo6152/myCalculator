import {loadTheme} from "./theme.js"
import {checkNavMode} from "./navBar.js"
import {checkDisclaimerModal} from "./disclaimer.js"

function checkIndicatorsStatus(){
    loadTheme()
    checkDisclaimerModal()
    if (document.getElementById("ui-controls")){
        checkNavMode()
    }
}

checkIndicatorsStatus()

export {checkIndicatorsStatus}