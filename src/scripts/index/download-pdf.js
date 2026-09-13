"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const buttonPDF = document.querySelector(".button-pdf");
    
    buttonPDF.addEventListener("click", ()=>{
        const element = document.body;
        html2pdf()
        .from(element)
        .set({
            margin: 0.2,
            filename: 'documento.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
        })
        .save();    
    })
});


