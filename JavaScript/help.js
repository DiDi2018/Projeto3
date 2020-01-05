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

//RESIZE

let body = document.querySelector('body');
let widthOriginal = 1852;
let heightOriginal = 900;
body.style.width = '1852px';
body.style.height = '900px';

function resize(){
    let height = window.innerHeight;
    let width = window.innerWidth;

    body.style.top = 0;
    body.style.left = 0;

    let scale = Math.min(width / widthOriginal, height / heightOriginal);
    body.style.transform = "scale(" + scale + ")";

    let position = body.getBoundingClientRect();
    let top = - position['top'] + ((height - position['height'])/2);
    let left = - position['left'] + ((width - position['width'])/2);
    body.style.top = top + 'px';
    body.style.left = left + 'px';

    console.log(width + ", " + height);
}

window.addEventListener('resize', resize);

function resizeBegin(){
    if(document.readyState === 'complete'){
        body.style.visibility = 'visible';
        resize();
    }
    else {
        setTimeout(resizeBegin,50);
    }
}

resizeBegin();
