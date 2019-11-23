var carta=  document.getElementById('carta');
var monstro2 = document.getElementById("monstro2"); // works
var audio = document.getElementById('audio');


carta.addEventListener("click", ShowLetter);

    function ShowLetter() {
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
        document.getElementById("texto").style.display="block";
        audio.pause();
        audio.currentTime = 0;
    }

let cruz = document.getElementById("cruz");

function sair() {
    document.getElementById('texto').style.display = "none";
}
cruz.addEventListener("click", sair);
document.addEventListener("click", fecharfora);

function fecharfora(evt) {
    let papel = document.getElementById('papel').contains(evt.target);
    let textoPsicologo = document.getElementById('textoPsicologo').contains(evt.target);
    let carta = document.getElementById('carta').contains(evt.target);

    if (!papel && !textoPsicologo && !carta) {
        return sair();
    }
}
function mouseOverMonstro1() {
    var monstro1 = document.querySelector("#monstro1"); // works
    monstro1.src = "images/cozinha/Monstro1.1.png";
}
function mouseLeftMonstro1() {
    var monstro1 = document.querySelector("#monstro1"); // works
    monstro1.src = "images/cozinha/Monstro1.png";
}

function mouseOverMonstro2() {
    var monstro2 = document.querySelector("#monstro2"); // works
    monstro2.src = "images/cozinha/Monstro2.1.png";
}
function mouseLeftMonstro2() {
    var monstro2 = document.querySelector("#monstro2"); // works
    monstro2.src = "images/cozinha/Monstro2.png";
}

function play() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
    monstro2.addEventListener("mouseenter", mouseOverMonstro2);
monstro2.addEventListener("mouseleave", mouseLeftMonstro2);



/*monstro2.addEventListener("mouseleave",mouseLeftMonstro2 );*/

        /*


        function azul() {
                monstro2.src = "images/cozinha/Monstro2.1.png"
        }*/




