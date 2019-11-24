var carta=  document.getElementById('carta');
var monstro1 = document.getElementById("monstro1"); // works
var monstro2 = document.getElementById("monstro2"); // works
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');


carta.addEventListener("click", ShowLetter);

    function ShowLetter() {
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
        document.getElementById("texto").style.display="block";
        audio2.pause();
        audio2.currentTime = 0;
        audio1.pause();
        audio1.currentTime = 0;
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
    var monstro1 = document.querySelector("#monstro1");
    monstro1.src = "images/cozinha/Monstro1.1.png";
}
function mouseLeftMonstro1() {
    var monstro1 = document.querySelector("#monstro1"); // works
    if(audio1.ended || audio1.paused){
        monstro1.src = "images/cozinha/Monstro1.png";
    }
}

function mouseOverMonstro2() {
    var monstro2 = document.querySelector("#monstro2"); // works
    monstro2.src = "images/cozinha/Monstro2.1.png";
}
function mouseLeftMonstro2() {
    var monstro2 = document.querySelector("#monstro2"); // works
    if(audio2.ended || audio2.paused){
        monstro2.src = "images/cozinha/Monstro2.png";
    }
}

function playaudio1() {
    if (audio1.paused && audio2.paused) {
        audio1.play();
    } else if(audio1.paused && !(audio2.paused)) {
        audio2.pause();
        audio2.currentTime = 0;
        audio1.play();
        monstro2.src = "images/cozinha/Monstro2.png";
    }
    else {
        audio1.pause();
        audio1.currentTime = 0;
    }
}
function playaudio2() {
    if (audio2.paused && audio1.paused) {
        audio2.play();
    }else if(audio2.paused && !(audio1.paused)) {
        audio1.pause();
        audio1.currentTime = 0;
        audio2.play();
        monstro1.src = "images/cozinha/Monstro1.png";
    }
    else {
        audio2.pause();
        audio2.currentTime = 0;
    }
}


monstro2.addEventListener("mouseenter", mouseOverMonstro2);
monstro2.addEventListener("mouseleave", mouseLeftMonstro2);
monstro2.addEventListener("click", playaudio2);
monstro1.addEventListener("mouseenter", mouseOverMonstro1);
monstro1.addEventListener("mouseleave", mouseLeftMonstro1);
monstro1.addEventListener("click", playaudio1);

audio2.addEventListener("ended", function(){
    monstro2.src = "images/cozinha/Monstro2.png";
});

audio1.addEventListener("ended", function(){
    monstro1.src = "images/cozinha/Monstro1.png";
});





/*monstro2.addEventListener("mouseleave",mouseLeftMonstro2 );*/

        /*


        function azul() {
                monstro2.src = "images/cozinha/Monstro2.1.png"
        }*/




