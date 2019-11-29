//Som Lydia
var audio_q1 = document.getElementById('audio_q1');

function playaudio_q1() {
    if (audio_q1.paused) {
        audio_q1.play();
    }
}


//texto lydia
let text1Lydia = "This is the bedroom. It’s completely automatic so it does everything for you. " +
    "To open the curtains you just need to raise your eyebrows.";
let i1 = 0;
let speed = 50;
let lydia= document.querySelector(".lydia");

function aparecerTexto(){
    if (i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
    audio_q1.play();
}
lydia.addEventListener("click", aparecerTexto);


//CAMA
var audio_cama = document.getElementById('audio_cama');
var cama = document.getElementById("cama");

function mouseOverCama() {
    var cama = document.getElementById("cama");
    cama.src = "images/quarto/cama_azul.png";
}
function mouseLeftCama() {
    var cama = document.getElementById("cama");
    if(audio_cama.ended || audio_cama.paused){
        cama.src = "images/quarto/cama.png";
    }
}

function audio_cama_f() {
    if (audio_cama.paused && audio_q1.paused) {
        audio_cama.play();
        document.getElementById("cama").classList.add("cama_azul");
    } else if(audio_cama.paused && !(audio_q1.paused)) {
        audio_q1.pause();
        audio_q1.currentTime = 0;
        audio_cama.play();
        document.getElementById("cama").classList.add("cama_azul");
    }
    else {
        audio_cama.pause();
        audio_cama.currentTime = 0;
        document.getElementById("cama").classList.remove("cama_azul");
    }
}

cama.addEventListener("mouseenter", mouseOverCama);
cama.addEventListener("mouseleave", mouseLeftCama);
cama.addEventListener("click", audio_cama_f);

audio_cama.addEventListener("ended", function(){
    cama.src = "images/quarto/cama.png";
});
