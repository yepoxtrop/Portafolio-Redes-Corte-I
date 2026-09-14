"use strict";

const buttonSourcePage = document.querySelector(".button-source");
buttonSourcePage.addEventListener("click", ()=>{
    window.location.assign("https://github.com/yepoxtrop/Portafolio-Redes-Corte-I")
})

const menuToggle = document.querySelector("#menu-toggle");
const titleNav = document.querySelector("#title-nav");

function closeMenu() {
    menuToggle.classList.remove("is-open");
    titleNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", ()=>{
    const isOpen = menuToggle.classList.toggle("is-open");
    titleNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
})

titleNav.querySelectorAll("a").forEach((link)=>{
    link.addEventListener("click", closeMenu);
})

document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") {
        closeMenu();
    }
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

