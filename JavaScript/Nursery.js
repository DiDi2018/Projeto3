var nrImagem = 0;
var imagens = [];
var refrescar = 1;

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/nursery/girafa.png";
imagens[1] = "images/nursery/girafa_ruido.png";


function rodarImagem() {
    document.querySelector('#girafa').setAttribute('src', imagens[nrImagem++]);
    if (nrImagem >= imagens.length)
        nrImagem = 0;
    setTimeout("rodarImagem()", refrescar * 500);
}

rodarImagem();

let audio = document.querySelectorAll("audio");
let text1Lydia = "This room is the heart of the house. Whenever you feel like escaping reality " +
                "you can do it without actually leaving. You will feel like you're in another world!";
let i1 = 0;
let speed = 45;

function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
    else {
        removerTexto();
    }
}

function removerTexto(){
    if(i1>0 && audio[0].ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i1 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removerTexto, 30);
    }
    if(!audio[0].ended){
        setTimeout(removerTexto, 30);
    }
}

audio[0].play();
aparecerTexto();