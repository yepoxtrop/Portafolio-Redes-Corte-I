document.addEventListener("DOMContentLoaded", () => {
    
    // Lógica del Carrusel de Imágenes (Actividad 2)
    const carruselAct2 = document.getElementById("carrusel-act2");
    
    if (carruselAct2) {
        const pista = carruselAct2.querySelector(".carrusel-pista");
        const slides = carruselAct2.querySelectorAll(".carrusel-slide");
        const btnPrev = carruselAct2.querySelector(".btn-prev");
        const btnNext = carruselAct2.querySelector(".btn-next");
        let indiceActual = 0;

        function moverCarrusel() {
            // Desplaza la pista multiplicando el índice por el 100% de ancho
            pista.style.transform = `translateX(-${indiceActual * 100}%)`;
        }

        btnNext.addEventListener("click", () => {
            indiceActual = (indiceActual < slides.length - 1) ? indiceActual + 1 : 0;
            moverCarrusel();
        });

        btnPrev.addEventListener("click", () => {
            indiceActual = (indiceActual > 0) ? indiceActual - 1 : slides.length - 1;
            moverCarrusel();
        });
    }
});