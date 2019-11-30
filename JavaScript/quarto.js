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
let lydia = document.querySelector(".lydia");

function aparecerTexto() {
    if (i1 < text1Lydia.length) {
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
    //var cama = document.getElementById("cama");
    cama.src = "images/quarto/cama_azul.png";
}

function mouseLeftCama() {
    //var cama = document.getElementById("cama");
    if (audio_cama.ended || audio_cama.paused) {
        cama.src = "images/quarto/cama.png";
    }
}

function audio_cama_f() {
    if (audio_cama.paused && audio_q1.paused) {
        audio_cama.play();
        document.getElementById("cama").classList.add("cama_azul");
    } else if (audio_cama.paused && !(audio_q1.paused)) {
        audio_q1.pause();
        audio_q1.currentTime = 0;
        audio_cama.play();
        document.getElementById("cama").classList.add("cama_azul");
    } else {
        audio_cama.pause();
        audio_cama.currentTime = 0;
        document.getElementById("cama").classList.remove("cama_azul");
    }
}

cama.addEventListener("mouseenter", mouseOverCama);
cama.addEventListener("mouseleave", mouseLeftCama);
cama.addEventListener("click", audio_cama_f);

audio_cama.addEventListener("ended", function () {
        cama.src = "images/quarto/cama.png";
    }
);

//RELÓGIO
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('horas').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } // add zero in front of numbers < 10
    return i;
}

var relogio = document.getElementById("relogio");
var horas = document.getElementById("horas");

function mouseOverRelogio() {
    relogio.src = "images/quarto/relogio_azul.png";
    document.getElementById("horas").style.color = "blue";
}

function mouseLeftRelogio() {
    relogio.src = "images/quarto/relogio.png";
    document.getElementById("horas").style.color = "lightgrey";
}

relogio.addEventListener("mouseenter", mouseOverRelogio);
relogio.addEventListener("mouseleave", mouseLeftRelogio);
horas.addEventListener("mouseenter", mouseOverRelogio);
horas.addEventListener("mouseleave", mouseLeftRelogio);


//CORTINA
var audio_cortina = document.getElementById('audio_cortina');
var cortina_esq = document.getElementById("cortina_esq");
var cortina_dir = document.getElementById("cortina_dir");

function mouseOverCortinas() {
    cortina_esq.src = "images/quarto/cortina_azul_esq.png";
    cortina_dir.src = "images/quarto/cortina_azul_dir.png";
}

function mouseLeftCortinas() {
    if (audio_cortina.ended || audio_cortina.paused) {
        cortina_esq.src = "images/quarto/cortina_esq.png";
        cortina_dir.src = "images/quarto/cortina_dir.png";
    }
}

function audio_cortina_f() {
    if (audio_cortina.paused && audio_q1.paused) {
        audio_cortina.play();
        document.getElementById("cortina_esq").classList.add("cortina_esq_azul");
        document.getElementById("cortina_dir").classList.add("cortina_dir_azul");
    } else if (audio_cortina.paused && !(audio_q1.paused)) {
        audio_q1.pause();
        audio_q1.currentTime = 0;
        audio_cortina.play();
        document.getElementById("ccortina_esq").classList.add("cortina_esq_azul");
        document.getElementById("cortina_dir").classList.add("cortina_dir_azul");
    } else {
        audio_cortina.pause();
        audio_cortina.currentTime = 0;
        document.getElementById("cortina_esq").classList.remove("cortina_esq_azul");
        document.getElementById("cortina_dir").classList.remove("cortina_dir_azul");
    }
}

cortina_esq.addEventListener("mouseenter", mouseOverCortinas);
cortina_esq.addEventListener("mouseleave", mouseLeftCortinas);
cortina_dir.addEventListener("mouseenter", mouseOverCortinas);
cortina_dir.addEventListener("mouseleave", mouseLeftCortinas);
cortina_esq.addEventListener("click", audio_cortina_f);
cortina_dir.addEventListener("click", audio_cortina_f);

audio_cortina.addEventListener("ended", function () {
        cortina_esq.src = "images/quarto/cortina_esq.png";
        cortina_dir.src = "images/quarto/cortina_dir.png";
    }
);