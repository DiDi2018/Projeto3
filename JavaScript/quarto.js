//Som Lydia
var audio_q1 = document.getElementById('audio_q1');

function playaudio_q1() {
    if (audio_q1.paused) {
        audio_q1.play();
    }
    else {
        audio1.pause();
        audio1.currentTime = 0;
    }
}

//texto lydia
let text1Lydia = "This is the bedroom. It’s completely automatic so it does everything for you. To open the curtains you just need to raise your eyebrows.";
let i1 = 0;
let speed = 80;
/*let audios = document.querySelectorAll("audio");*/

function aparecerTexto(){
    /* if (i1 === 0){
         audios[0].play();
     }
     if (i1 >= 39 && audios[0].ended){
         audios[1].play();
     }*/
    if (i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
}
aparecerTexto();
/*Promise.all(audios).then(aparecerTexto);*/

//CAMA
function alterar_cama(){
    document.getElementById('cama').src = "images/quarto/cama_azul.png"
}
