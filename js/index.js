let disclaimerAccepted = localStorage.getItem("disclaimerAccepted")
const disclaimerBtn = document.getElementById("accept-disclaimer-btn")

function checkDisclaimerModal(){
    if (JSON.parse(disclaimerAccepted)){
        closeModal()
    }
}

// Modals
disclaimerBtn.addEventListener("click", function(){
    closeModal()
    localStorage.setItem("disclaimerAccepted", "1")
})

function closeModal(){
    document.getElementById("disclaimer-box").style.display = "none"
}


checkDisclaimerModal()

export {checkDisclaimerModal, disclaimerBtn}