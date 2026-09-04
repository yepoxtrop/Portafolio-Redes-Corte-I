const buttonSourcePage = document.querySelector(".button-source");
buttonSourcePage.addEventListener("click", ()=>{
    window.location.assign("https://github.com/yepoxtrop/Portafolio-Redes-Corte-I")
})

const buttonRateUs = document.querySelector("#rate-button");
buttonRateUs.addEventListener("click", ()=>{
    modal = document.getElementById("rate-form");
    modal.showModal();
    modal.classList.add("active-modal");
    document.body.style.overflow = 'hidden';
})

const buttonSendRateUs = document.querySelector("#send-rate-form");
buttonSendRateUs.addEventListener("click", ()=>{
    modal = document.getElementById("rate-form");
    modal.close();
    modal.classList.remove("active-modal");
    document.body.style.overflow = '';
    
})