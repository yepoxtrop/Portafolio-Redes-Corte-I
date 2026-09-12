document.addEventListener("DOMContentLoaded", () => {
    
    // Variables para capturar los elementos del HTML
    const modalPremisa1 = document.getElementById("modal-premisa1");
    const btnAbrirPremisa1 = document.getElementById("btn-abrir-premisa1");
    const btnCerrarPremisa1 = document.getElementById("btn-cerrar-premisa1");

    // 1. Abrir modal al hacer clic en "PREMISA 1"
    if(btnAbrirPremisa1 && modalPremisa1) {
        btnAbrirPremisa1.addEventListener("click", () => {
            modalPremisa1.style.display = "block";
        });
    }

    // 2. Cerrar modal al hacer clic en la "X"
    if(btnCerrarPremisa1 && modalPremisa1) {
        btnCerrarPremisa1.addEventListener("click", () => {
            modalPremisa1.style.display = "none";
        });
    }

    // 3. (Opcional pero recomendado) Cerrar modal al hacer clic en la zona oscura fuera de la caja blanca
    window.addEventListener("click", (evento) => {
        if (evento.target === modalPremisa1) {
            modalPremisa1.style.display = "none";
        }
    });

});