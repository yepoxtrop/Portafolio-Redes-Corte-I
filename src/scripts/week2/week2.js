"use strict";

// Solo controla las ventanas de las premisas de la semana 2.
(() => {
  const section = document.querySelector(".p2m-seccion");
  if (!section) return;
  let previousOverflow = "";
  let trigger = null;

  section.querySelectorAll("[data-p2m-abrir]").forEach(button => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.p2mAbrir);
      if (!dialog || dialog.open) return;
      trigger = button;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = "hidden";
      dialog.querySelector(".p2m-scroll").scrollTop = 0;
    });
  });

  section.querySelectorAll(".p2m-modal").forEach(dialog => {
    dialog.querySelector("[data-p2m-cerrar]").addEventListener("click", () => dialog.close());
    // Cerrar únicamente si el clic cae fuera del rectángulo de la ventana.
    dialog.addEventListener("click", event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right ||
          event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
    // Escape funciona de forma nativa; el evento close restaura la página.
    dialog.addEventListener("close", () => {
      document.body.style.overflow = previousOverflow;
      if (trigger) trigger.focus();
    });
  });
})();
