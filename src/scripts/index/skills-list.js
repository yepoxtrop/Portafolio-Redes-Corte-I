import { SKILLS } from "../consts/skills.index.js";

function loadSkills(){
    let containerSkills = document.getElementById("skills-container");
    
    for (let i=0; i<SKILLS.length; i++){
        containerSkills.innerHTML += `
            <div class="skill-card">
                <div class="skill-card-sub">
                    <div class="skill-card-header">
                        <h4 class="skill-card-${SKILLS[i].status == true || SKILLS[i].status == false?"number":"null-number"}">TEMA_${i<10 ? `0${i}` : i}</h4>
                        <div id="skill-card-status-container" class="skill-card-status-container-${SKILLS[i].status == true || SKILLS[i].status == false?"status":"null-status"}">
                            <span class="icon-status-${SKILLS[i].status ? "true":(SKILLS[i].status == false?"false":"null")}"></span>
                            <span class="skill-card-${SKILLS[i].status == true || SKILLS[i].status == false?"status":"null-status"}">${SKILLS[i].status?'Completado':SKILLS[i].status === false?'Pendiente':'No iniciado'}</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="skill-card-${SKILLS[i].status == true || SKILLS[i].status == false?"title":"null-title"}">${SKILLS[i].title}</h3>
                    </div>
                </div>
                <hr class="card-dev-line">
                <div class="skill-card-description">
                    <p class="skill-card-${SKILLS[i].status == true || SKILLS[i].status == false?"paragraph":"null-paragraph"}">${SKILLS[i].description}</p>
                    <div class="skill-card-lines-container">
                        <span class="skill-card-line-base"></span>
                        <span class="skill-card-line-${SKILLS[i].status?"true":(SKILLS[i].status == false?"false":"null")}" style="width:${SKILLS[i].percentage}%"></span>
                    </div>
                    
                </div>
            </div>`
    }
    

}

loadSkills();