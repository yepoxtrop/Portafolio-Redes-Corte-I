import { SKILLS } from "../consts/skills.index.js";

function loadSkills(){
    let containerSkills = document.getElementById("skills-container");
    
    for (let i=0; i<SKILLS.length; i++){
        containerSkills.innerHTML += `
            <div class="skill-card">
                <div class="skill-card-header">
                    <h4>TEMA_${i<10 ? `0${i}` : i}</h4>
                    <div>
                        <img src="${SKILLS[i].status?'../../media/img/icon/circle.svg':'../../media/img/icon/circle.svg'}" alt="icono de estado">
                        <span>${SKILLS[i].status?'Completado':SKILLS[i].status === false?'Pendiente':'No iniciado'}</span>
                    </div>
                </div>
                <div>
                    <h3>${SKILLS[i].title}</h3>
                </div>
                <hr>
                <div>
                    <p>${SKILLS[i].description}</p>
                    <div></div>
                </div>
            </div>`
    }
}

window.onload = loadSkills;