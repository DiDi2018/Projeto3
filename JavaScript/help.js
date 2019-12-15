let help = document.querySelector(".help");
let instrucoes = document.querySelector(".instrucoes");
let clicar = false;

function aparecer() {
    if (clicar === false) {
        instrucoes.style.display = "block";
        clicar = true;
    }
    else{
        instrucoes.style.display = "none";
        clicar=false;
    }
}

if(help !== null){
    help.addEventListener("click", aparecer);
}

let sobre = document.querySelector(".sobre");
let creditos = document.querySelector(".creditos");
let clicar2 = false;

function aparecer2() {
    if (clicar2 === false) {
        creditos.style.display = "block";
        clicar2 = true;
    }
    else{
        creditos.style.display = "none";
        clicar2=false;
    }
}

sobre.addEventListener("click", aparecer2);