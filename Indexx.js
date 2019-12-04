var audio_pub = document.getElementById('audio_pub');
var nclicou=0;

function popup(){
    if(nclicou===0) {
        setTimeout(aparecer, 2000);
    }
}
popup();

function aparecer() {
    document.getElementById("popup").style.display = "block";
    audio_pub.play();
    setTimeout(audio_pub, 2000);
}

function desaparecer(){
    document.getElementById("popup").style.display = "none";
    setTimeout(aparecer, 500);
}

//Alternância imagens popup
var nrImagem = 0;
var imagens = [];
var refrescar = 1;

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/index/fundo1.png";
imagens[1] = "images/index/fundo.png";


function rodarImagens() {
    document.querySelector(".fundopopup").src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagens()", refrescar * 1000);
}
rodarImagens();
