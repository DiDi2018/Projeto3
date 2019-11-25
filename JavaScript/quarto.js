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
function alterar_cama(){
    document.getElementById('cama').src = "images/quarto/cama_azul.png"
    audio_cama.play();
}

//SOM CAMA

var audio_cama = document.getElementById('audio_cama');

function playaudio_cama() {
    if (audio_cama.paused) {
        audio_cama.play();
    }
}

