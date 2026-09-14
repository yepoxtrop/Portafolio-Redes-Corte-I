"use strict";

import { ARRAY_INIT_KONSOLE, ARRAY_KONSOLE_ERROR } from "../consts/konsole.index.js";

const SECTION_KONSOLE = document.querySelector(".terminal-body-section1");
const SECTION_KONSOLE_ERROR = document.querySelector(".terminal-error");

function konsole(listContent, listObjectsDOM) {
    
    try {

        /* Si la cantidad de elementos es cero genera error */
        if (listContent.length === 0 || listObjectsDOM.length === 0) {
            document.querySelector(".terminal-container").style.backgroundColor = "#000000"
            let time = 1;
            
            ARRAY_KONSOLE_ERROR.forEach((element)=>{

                setTimeout(()=>{
                    listObjectsDOM[0].innerHTML += element;
                }, 500*time)
                time++;
            })
            return;
        }

        /* Si los array tienen longitudes diferentes genera error */
        if (listContent.length != listObjectsDOM.length ){
            document.querySelector(".terminal-container").style.backgroundColor = "#000000"
            let time = 1;
            
            ARRAY_KONSOLE_ERROR.forEach((element)=>{

                setTimeout(()=>{
                    listObjectsDOM[0].innerHTML += element;
                }, 500*time)
                time++;
            })
            return;
        }

        /* Funcionamiento normal de la funcion */
        let delay = 1;
        listObjectsDOM[0].style.display = "flex";
        listObjectsDOM[0].style.flexDirection = "column";
        listObjectsDOM[0].style.width = "100%";
        listObjectsDOM[0].style.marginBottom = "1.5rem";

        /* Recorrido de los elementos del array */
        listContent[0].forEach((element, index) => {
        
            setTimeout(() => {
                listObjectsDOM[0].innerHTML += element;
                
                if (index >= listContent[0].length-1){
                    setTimeout(()=>{
                        if (listContent.length > 1) {
                            listObjectsDOM[0].style.display = 'none'
                        }
                    },3000)
                } 
            }, 500 * delay);

            delay++;
        });

        /* Recursividad de la funcion */
        setTimeout(()=>{
            listContent.shift();
            listObjectsDOM.shift();

            if (listContent.length === 0 && listObjectsDOM.length === 0) {
                console.log("Finalizó el ciclo");
                return;
            }else{
                console.log("finalizo el ciclo")
                if (listContent.length === 1) {
                    document.querySelector(".terminal-container").style.backgroundColor = "#000000"
                }
                konsole(listContent, listObjectsDOM);
            }
        }, (listContent[0].length*500)+3500)
        
    } catch (error) {
        console.log(error)

        /* Si se presenta un error en la funcion */
        document.querySelector(".terminal-container").style.backgroundColor = "#000000"
        let time = 1;
            
        ARRAY_KONSOLE_ERROR.forEach((element)=>{
            setTimeout(()=>{
                document.querySelector(".terminal-body-section1").innerHTML += element;
            }, 500*time)
            time++;
        })
        return;
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    
    /* Se ejecuta la funcion konsole al cargar la pagina */
    konsole(
        [ARRAY_INIT_KONSOLE, ARRAY_KONSOLE_ERROR],
        [SECTION_KONSOLE, SECTION_KONSOLE_ERROR]
    )
})