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

const buttonMinizeKonsole = document.querySelector("#minimize-btn");
buttonMinizeKonsole.addEventListener("click", ()=>{
    window.alert("No puedes minizar la consola")
})

const buttonCloseKonsole = document.querySelector("#close-btn");
buttonCloseKonsole.addEventListener("click", ()=>{
    window.alert("No puedes cerrar la consola")
})

const buttonEnlargeKonsole = document.querySelector("#enlarge-btn");
buttonEnlargeKonsole.addEventListener("click", ()=>{
    window.alert("No puedes agrandar la consola")
})
