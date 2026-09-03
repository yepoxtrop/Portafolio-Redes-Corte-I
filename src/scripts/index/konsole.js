const arrayInitKonsole = [
    "Welcome to Debiam 13 (GNU/Linux x86_64)",
    "* Documentation:  https://www.debian.org/intro/index#community",
    "* Management:     https://www.debian.org/intro/people",
    "* Support:        https://www.debian.org/support"
]

function konsole() {
    const sectionKonsole = document.querySelectorAll(".introduction-terminal");
    let delay = 1;
    
    sectionKonsole.forEach(element => {
        setTimeout(() => {
            console.log(element);
        }, 5000 * delay);
        delay++;
    });
}

// Ejecuta la función cuando el DOM está listo
window.addEventListener('DOMContentLoaded', konsole);