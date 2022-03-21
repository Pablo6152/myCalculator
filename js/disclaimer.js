let disclaimerAccepted = localStorage.getItem("disclaimerAccepted")
const disclaimerBtn = document.getElementById("accept-disclaimer-btn")

disclaimerBtn.addEventListener("click", function(){
    closeModal()
    localStorage.setItem("disclaimerAccepted", "1")
})

function checkDisclaimerModal(){
    if (JSON.parse(disclaimerAccepted)){
        closeModal()
    }
}

function closeModal(){
    document.getElementById("disclaimer-box").style.display = "none"
}

export { checkDisclaimerModal, disclaimerBtn }