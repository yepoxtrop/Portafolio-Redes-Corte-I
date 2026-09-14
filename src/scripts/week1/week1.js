document.addEventListener("DOMContentLoaded", () => {
    
    // Variables para capturar los elementos del HTML
    const modalPremisa1 = document.getElementById("modal-premisa1");
    const btnAbrirPremisa1 = document.getElementById("btn-abrir-premisa1");
    const btnCerrarPremisa1 = document.getElementById("btn-cerrar-premisa1");

    // Abrir modal al hacer clic en "PREMISA 1"
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

    // Cerrar modal al hacer clic en la zona oscura fuera de la caja blanca
    window.addEventListener("click", (evento) => {
        if (evento.target === modalPremisa1) {
            modalPremisa1.style.display = "none";
        }
    });

});

// Esperamos a que la página cargue igual que con el modal
document.addEventListener("DOMContentLoaded", () => {
    
    // --- CREACIÓN DE LOGICA DEL CARRUSEL  ---
    const pista = document.querySelector(".carrusel-pista");
    const slides = document.querySelectorAll(".carrusel-slide");
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");

    // Validamos que el carrusel exista
    if (pista && slides.length > 0) {
        let indiceActual = 0;

        function actualizarCarrusel() {
            // Calcula cuánto debe desplazarse la pista en porcentaje
            const desplazamiento = -(indiceActual * 100);
            pista.style.transform = `translateX(${desplazamiento}%)`;
        }

        btnNext.addEventListener("click", () => {
            if (indiceActual < slides.length - 1) {
                indiceActual++;
            } else {
                indiceActual = 0; // Efecto bucle: si está en el último, vuelve al inicio
            }
            actualizarCarrusel();
        });

        btnPrev.addEventListener("click", () => {
            if (indiceActual > 0) {
                indiceActual--;
            } else {
                indiceActual = slides.length - 1; // Efecto bucle inverso
            }
            actualizarCarrusel();
        });
    }
});