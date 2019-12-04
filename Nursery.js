var nrImagem = 0;
var imagens = [];
var refrescar = 1;

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/nursery/borboleta.png";
imagens[1] = "images/nursery/borboleta_ruido.png";


function rodarImagem() {
    document.querySelector(".b1").src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagem()", refrescar * 500);
}
rodarImagem();


let text1Lydia = "This is the bedroom. It’s completely automatic so it does everything for you. " +
    "To open the curtains you just need to raise your eyebrows.";
let i1=0;
let speed = 50;

function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
}
audio_q1.play();
aparecerTexto();