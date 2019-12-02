//CORTINAS
var audio_cortina = document.getElementById('audio_cortina');
var cortina_esq = document.getElementById("cortina_esq");
var cortina_dir = document.getElementById("cortina_dir");


//CAPTURA DA CAMARA
var capture;
var tracker;
var w = 640, h = 480;

//Som Lydia
var audio_q1 = document.getElementById('audio_q1');

//texto lydia
let text1Lydia = "This is the bedroom. It’s completely automatic so it does everything for you. " +
    "To open the curtains you just need to raise your eyebrows.";
let i1 = 0;
let speed = 40;
let lydia = document.querySelector(".lydia");

var correr = 0;
var myVar;

//PRIMEIRO TEXTO
function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
    audio_q1.play();
}
aparecerTexto();

//TEXTO LYDIA 2
var audio_q2 = document.getElementById('audio_q2');
let text2Lydia = "Explore the rest of the wonders of the bedroom";

function texto2() {
    document.querySelector(".lydiaTexto p").innerHTML = "";

    function b() {
        if (i1 < text2Lydia.length) {
            document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i1);
            i1++;
            setTimeout(b, speed);
        }
    }
    audio_q2.play();
    b();
}

//CÂMARA ABRIR CORTINAS
function setup() {

    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function () {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

}

function draw() {
    // image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();

    //distância entre sobrancelha e olho
    if (positions.length > 0) {
        var sobrancelha = createVector(positions[20][0], positions[20][1]);
        var olho = createVector(positions[24][0], positions[24][1]);
        var open = sobrancelha.dist(olho);
    }

    if (open >= 50 && i1 === text1Lydia.length && audio_q1.ended) {
        if (correr === 0) {
            audio_cortina.play();
            document.getElementById("cortina_esq").classList.add("cortina_esq_azul");
            document.getElementById("cortina_dir").classList.add("cortina_dir_azul");
            cortina_esq.src = "images/quarto/cortina_azul_esq.png";
            cortina_dir.src = "images/quarto/cortina_azul_dir.png";
            document.getElementById("quadrado").style.background = "lightyellow";
            document.getElementById("quadrado").style.zIndex = "-10";
            myVar = setInterval(alertFunc, 2000);

            function alertFunc() {
                cortina_esq.src = "images/quarto/cortina_esq.png";
                cortina_dir.src = "images/quarto/cortina_dir.png";
            }
            correr = 1;
            setInterval(texto2,2001);
        }
    }
}


//CAMA RODAR
var audio_cama = document.getElementById('audio_cama');
var cama = document.getElementById("cama");

function mouseOverCama() {
    if (audio_q1.paused) {
        cama.src = "images/quarto/cama_azul.png";
    }
}

function mouseLeftCama() {
    if (audio_q1.paused) {
        cama.src = "images/quarto/cama.png";
    }
}

function audio_cama_f() {
    if (audio_q1.paused) {
        if (audio_cama.paused) {
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
}

cama.addEventListener("mouseenter", mouseOverCama);
cama.addEventListener("mouseleave", mouseLeftCama);
cama.addEventListener("click", audio_cama_f);

audio_cama.addEventListener("ended", function () {
        cama.src = "images/quarto/cama.png";
    }
);

//RELÓGIO FALA
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

var audio_relogio = document.getElementById('audio_relogio');
var relogio = document.getElementById("relogio");
var horas = document.getElementById("horas");

function mouseOverRelogio() {
    if (audio_q1.paused && audio_cama.paused) {
        relogio.src = "images/quarto/relogio_azul.png";
        document.getElementById("horas").style.color = "blue";
    }
}

function mouseLeftRelogio() {
    if (audio_q1.paused && audio_cama.paused) {
        relogio.src = "images/quarto/relogio.png";
        document.getElementById("horas").style.color = "lightgrey";
    }
}

function audio_relogio_f() {
    if (audio_q1.paused && audio_cama.paused) {
        audio_relogio.play();
        document.getElementById("horas").style.color = "blue";
        relogio.src = "images/quarto/relogio_azul.png";

    } else if (audio_relogio.paused && !(audio_q1.paused)) {
        audio_q1.pause();
        audio_q1.currentTime = 0;
        audio_relogio.play();
        document.getElementById("horas").style.color = "blue";
        relogio.src = "images/quarto/relogio_azul.png";

    } else {
        audio_relogio.pause();
        audio_relogio.currentTime = 0;
        document.getElementById("horas").style.color = "lightgrey";
        relogio.src = "images/quarto/relogio.png";
    }
}

relogio.addEventListener("mouseenter", mouseOverRelogio);
relogio.addEventListener("mouseleave", mouseLeftRelogio);
horas.addEventListener("mouseenter", mouseOverRelogio);
horas.addEventListener("mouseleave", mouseLeftRelogio);

relogio.addEventListener("click", audio_relogio_f);
horas.addEventListener("click", audio_relogio_f);

audio_relogio.addEventListener("ended", function () {
        relogio.src = "images/quarto/relogio.png";
        document.getElementById("horas").style.color = "lightgrey";
    }
);

//GANHAR