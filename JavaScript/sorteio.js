var nrImagem = 0;
var imagens = [];
var refrescar = 1;
var audio_sorteio = document.getElementById('audio_sorteio');

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/sorteio/chapeu.png";
imagens[1] = "images/sorteio/chapeu1.png";


function rodarImagens() {
    document.querySelector(".sorteiochapeu").src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagens()", refrescar * 1000);
}

rodarImagens();

function revelacao(){
    document.querySelector("#botao_start").style.display="block";
    document.querySelector("#vencedor").classList.add("vencedorSurgir");
    document.querySelector("#bilhete").classList.add("bilheteSurgir");
    audio_sorteio.play();
}

//FADE OUT
function FadeOut(){
    document.querySelector("body").classList.add("fadeOut");
    setTimeout(function(){
        window.location.href="acenar.html";
    }, 800);
}
