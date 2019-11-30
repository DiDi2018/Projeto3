var carta=  document.getElementById('carta');
var monstro1 = document.getElementById("monstro1"); // works
var monstro2 = document.getElementById("monstro2"); // works
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var psicologo=document.getElementById('psicologo');
var count1=false;
var count2=false;
var count3=false;


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
        monstro2.src = "images/cozinha/Monstro2.png";
        audio1.pause();
        audio1.currentTime = 0;
        monstro1.src = "images/cozinha/Monstro1.png";
        psicologo.play();
    }

let cruz = document.getElementById("cruz");

function sair() {
    document.getElementById('texto').style.display = "none";
    psicologo.pause();
    psicologo.currentTime = 0;
    count1=true;
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
count2=true;
monstro1.addEventListener("mouseenter", mouseOverMonstro1);
monstro1.addEventListener("mouseleave", mouseLeftMonstro1);
monstro1.addEventListener("click", playaudio1);
count1=true;

audio2.addEventListener("ended", function(){
    monstro2.src = "images/cozinha/Monstro2.png";
});

audio1.addEventListener("ended", function(){
    monstro1.src = "images/cozinha/Monstro1.png";
});


//texto lydia

let text1Lydia = "This room has the best instruments that you could ever dream of. You will never ever have to worry about dinner anymore, as soon as you get home you’ll have warm food on the table. Go ahead and take a look!";
let i1 = 0;
let speed = 50;
let apresentacao = document.getElementById("apresentacao");
let lydia= document.querySelector(".lydia");

function aparecerTexto(){
    if (i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }

/*}

function desaparecerTexto() {
*/
 if (i1 >= text1Lydia.length - 1) {
        text1Lydia.replace(text1Lydia, '');

    }
    apresentacao.play();

}

aparecerTexto();
//desaparecerTexto();

if( count1===true && count2===true && count3===true){
    document.getElementById('won').style.display = "block";
}




