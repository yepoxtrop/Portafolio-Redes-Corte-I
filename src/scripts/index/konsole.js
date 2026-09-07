"use strict";

import { ARRAY_INIT_KONSOLE, ARRAY_KONSOLE_LUIS, ARRAY_KONSOLE_CESAR, ARRAY_KONSOLE_SANTIAGO, ARRAY_KONSOLE_JHON, ARRAY_KONSOLE_ERROR } from "../consts/konsole.index.js";

const SECTION_KONSOLE = document.querySelector(".terminal-body-section1");
const SECTION_KONSOLE_LUIS = document.querySelector(".terminal-body-luis");
const SECTION_KONSOLE_CESAR = document.querySelector(".terminal-body-cesar");
const SECTION_KONSOLE_SANTIAGO = document.querySelector(".terminal-body-santiago");
const SECTION_KONSOLE_JHON = document.querySelector(".terminal-body-jhon");

function konsole(listContent, listObjectsDOM) {
    
    try {

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

        // Si ambos array tienen longitudes diferentes
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

        // Funcionamiento normal de la funcion
        let delay = 1;
        listObjectsDOM[0].style.display = "flex";
        listObjectsDOM[0].style.flexDirection = "column";
        listObjectsDOM[0].style.width = "100%";
        listObjectsDOM[0].style.marginBottom = "1.5rem";

        listContent[0].forEach((element, index) => {
        
            setTimeout(() => {
                listObjectsDOM[0].innerHTML += element;
                
                if (index >= listContent[0].length-1){
                    setTimeout(()=>{
                        listObjectsDOM[0].style.display = 'none'
                    },3000)
                } 
            }, 500 * delay);

            delay++;
        });

        // Recursividad
        setTimeout(()=>{
            listContent.shift();
            listObjectsDOM.shift();

            if (listContent.length === 0 && listObjectsDOM.length === 0) {
                console.log("Finalizó el ciclo");
                return;
            }else{
                console.log("finalizo el ciclo")
                konsole(listContent, listObjectsDOM);
            }
        }, (listContent[0].length*500)+3500)
        
    } catch (error) {
        console.log(error)

        // Si se presenta un error en la funcion
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

konsole(
    [ARRAY_INIT_KONSOLE, ARRAY_KONSOLE_LUIS, ARRAY_KONSOLE_CESAR, ARRAY_KONSOLE_SANTIAGO, ARRAY_KONSOLE_JHON],
    [SECTION_KONSOLE, SECTION_KONSOLE_LUIS, SECTION_KONSOLE_CESAR, SECTION_KONSOLE_SANTIAGO, SECTION_KONSOLE_JHON]
)