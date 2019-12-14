var help = document.querySelector(".help");
var instrucoes = document.querySelector(".instrucoes");
let clicar = false;

function aparecer() {
    if (clicar == false) {
        instrucoes.style.display = "block";
        clicar = true;
    }
    else{
        instrucoes.style.display = "none";
        clicar=false;
    }
}


help.addEventListener("click", aparecer);