let help = document.querySelector(".help");
let instrucoes = document.querySelector(".instrucoes");
let sobre = document.querySelector(".sobre");
let creditos = document.querySelector(".creditos");
let clicar = false;
let clicar2 = false;

function aparecer() {

    if (clicar === false) {
        instrucoes.style.display = "block";
        creditos.style.display = "none";
        clicar = true;
        clicar2=false;

    }
    else if(clicar === true) {
        instrucoes.style.display = "none";
        creditos.style.display = "none";
        clicar = false;
    }

}

if (help !== null) {
    help.addEventListener("click", aparecer);
} else {
    sobre.style.right = "1%";
}


function aparecer2() {
    if (clicar2 === false) {
        creditos.style.display = "block";
        if (help !== null) {
            instrucoes.style.display = "none";
        }
        clicar2 = true;
        clicar = false;

    } else if(clicar2) {
        creditos.style.display = "none";
        if (help !== null) {
            instrucoes.style.display = "none";
        }
        clicar2 = false;
    }

}

sobre.addEventListener("click", aparecer2);