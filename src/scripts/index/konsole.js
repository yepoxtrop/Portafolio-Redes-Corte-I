const arrayInitKonsole = [
    "<span>Welcome to Debiam 13 (GNU/Linux x86_64)</span>",
    "<span>* Documentation:&emsp;&emsp;<a href='https://www.debian.org/intro/index#community' target='_blank'>https://www.debian.org/intro/index#community</a></span>",
    "<span>* Management:&emsp;&emsp;&emsp;<a href='https://www.debian.org/intro/people' target='_blank'>https://www.debian.org/intro/people</a></span>",
    "<span>* Support:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<a href='https://www.debian.org/support' target='_blank'>https://www.debian.org/support</a></span>",
    `<span>System information as of ${new Date()}</span>`,
    "<span>System load:&emsp;&emsp;&nbsp;0.16&emsp;&emsp;&emsp;&nbsp;Processes:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;168</span>",
    "<span>Usage of /:&emsp;&emsp;&emsp;&nbsp;39.7%&emsp;&emsp;of 28.37GB   Users logged in:&emsp;1</span>",
    "<span>Memory usage:&emsp;66%&emsp;&emsp;&emsp;IPv4 address for eth0:&emsp;&emsp;&emsp;&ensp;&nbsp;192.167.0.11</span>",
    "<span>Swap usage:&emsp;&emsp;&ensp;9%</span>",
    "<span>*** System starting right now ***</span>",
    `<span>Last login: ${new Date()}</span>`,
]

const arrayKonsoleLuis = [
    "<span>User:█</span>",
    "<span>Password:</span>",
    "<span>luis@net_archive:~$cat MiExpectativaDeRedes.txt</span>",
    "<span>[TEXTO]</span>",
    "<span>luis@net_archive:~$clear",
    "<span>luis@net_archive:~$su cesar</span>",
    "<span>password for cesar:</span>",
]

const arrayKonsoleCesar = [
    "<span>cesar@net_archive:~$cat MiExpectativaDeRedes.txt</span>",
    "<span>[TEXTO]</span>",
    "<span>cesar@net_archive:~$clear",
    "<span>cesar@net_archive:~$su santiago</span>",
    "<span>password for santiago:</span>",
]

const arrayInitSantiago = [
    "<span>santiago@net_archive:~$cat MiExpectativaDeRedes.txt</span>",
    "<span>[TEXTO]</span>",
    "<span>santiago@net_archive:~$clear",
    "<span>santiago@net_archive:~$exit</span>",
    "<span>cesargo@net_archive:~$exit</span>",
    "<span>luis@net_archive:~$poweroff</span>",
    "<span>...</span>",
]

function konsole() {
    const sectionKonsole = document.querySelector(".terminal-body-section1");
    const sectionKonsoleLuis = document.querySelector(".terminal-body-luis");
    const sectionKonsoleCesar = document.querySelector(".terminal-body-cesar");
    const sectionKonsoleSantiago = document.querySelector(".terminal-body-santiago");
    let delay = 1;
    
    arrayInitKonsole.forEach(element => {
        setTimeout(() => {
            sectionKonsole.innerHTML += element;
            
        }, 1000 * delay);

        delay++;
    });

    delay = 1;
    arrayKonsoleLuis.forEach(element => {
        setTimeout(() => {
            sectionKonsoleLuis.innerHTML += element;
            
        }, 1000 * delay);

        delay++;
    });



}

// Ejecuta la función cuando el DOM está listo
window.addEventListener('DOMContentLoaded', konsole);