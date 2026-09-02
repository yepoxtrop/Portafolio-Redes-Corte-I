import { SKILLS } from "../consts/skills.index.js";

function loadSkills(){
    let containerSkills = document.getElementById("skills-container");
    
    for (let i=0; i<SKILLS.length; i++){
        containerSkills.innerHTML += `<p>Hola brocontainerSkills</p>`
        console.log(SKILLS[i])
    }

    
}

window.onload = loadSkills();