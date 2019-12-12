var audio_pub = document.getElementById('audio_pub');

function surgir(){

    document.querySelector("#publicidade").style.display = "block";
}
setTimeout(surgir, 10);

/*
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
}*/

//Alternância imagens popup
var nrImagem = 0;
var imagens = [];
var refrescar = 1;
var p=document.querySelector(".participar");
var texto="PARTICIPATE NOW!";
// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/index/fundo1.png";
imagens[1] = "images/index/fundo.png";
function blink(){
    if(p.innerHTML === texto){
        p.innerHTML = "";
    }
    else {
        p.innerHTML = texto;
    }
    timeout = setTimeout(blink,200);
}
blink();
function rodarImagens() {
    document.querySelector(".fundopopup").src = imagens[nrImagem++];

    if (nrImagem >= imagens.length)
        nrImagem = 0;

    setTimeout("rodarImagens()", refrescar * 1000);
}
rodarImagens();

function aparecer(){
    document.querySelector(".aparecerTicket").style.display = "block";
    document.addEventListener("click", fecharfora);
    audio_pub.play();

}

function sair() {
    document.querySelector(".aparecerTicket").style.display= "none";
    document.removeEventListener("click", fecharfora);
}

function fecharfora(evt) {
    let formParticipar = document.querySelector('.formParticipar').contains(evt.target);
    let ticket = document.querySelector('.ticket').contains(evt.target);
    let participar = document.querySelector('.participar').contains(evt.target);


    if (!formParticipar && !ticket && !participar) {
        return sair();
    }
}
