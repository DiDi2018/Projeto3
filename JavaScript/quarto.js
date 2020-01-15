//CORTINAS
var audio_cortina = document.getElementById('audio_cortina');
var cortina_esq = document.getElementById("cortina_esq");
var cortina_dir = document.getElementById("cortina_dir");

//RELOGIO
var audio_relogio = document.getElementById('audio_relogio');
var relogio = document.getElementById("relogio");
var horas = document.getElementById("horas");

//CAPTURA DA CAMARA
var capture;
var tracker;
var w = 640, h = 480;

//Som Lydia
var audio_q1 = document.getElementById('audio_q1');

//texto lydia
let text1Lydia = "This is the bedroom. It’s completely automatic so it does everything for you. " +
    "To open the curtains you just need to raise your eyebrows.";
let i1 = 0, i2 = 0;
let speed = 50;
let lydia = document.querySelector(".lydia");

var correr = 0;

//PRIMEIRO TEXTO
function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    }
}

function begin(){
    if(document.readyState === 'complete'){
        setTimeout(function(){
            audio_q1.play();
            aparecerTexto();
        },1000);
    }
    else {
        setTimeout(begin,50);
    }
}

begin();

//TEXTO LYDIA 2
var audio_q2 = document.getElementById('audio_q2');
let text2Lydia = "Explore the rest of the wonders of the bedroom.";

function texto2() {
    if (i2 < text2Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i2);
        i2++;
        setTimeout(texto2, speed);
    } else {
        cama.setAttribute("usemap", "#bedmap");
        removeText2();
    }
}

function removeText2() {
    if (i2 > 0 && audio_q2.ended) {
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0, i2 - 1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i2 = i2 - 1;
        setTimeout(removeText2, 30);
    }
    if (!audio_q2.ended) {
        setTimeout(removeText2, 30);
    }
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
    createCanvas(1, 1);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

var sobrancelha0;
var olho0;
var open0;
var sobrancelha;
var olho;
var open;

function draw() {
    var positions = tracker.getCurrentPosition();

    //distância entre sobrancelha e olho
    if (positions.length > 0 && audio_q1.ended) {
        if (open0 === undefined) {
            sobrancelha0 = createVector(positions[20][0], positions[20][1]);
            olho0 = createVector(positions[24][0], positions[24][1]);
            open0 = sobrancelha0.dist(olho0);

        } else {
            sobrancelha = createVector(positions[20][0], positions[20][1]);
            olho = createVector(positions[24][0], positions[24][1]);
            open = sobrancelha.dist(olho);
        }

        if (open0 < open && open >= 1.2 * open0 && i1 === text1Lydia.length && audio_q1.ended && correr === 0) {
            //save image
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = w;
            canvas.height = h;
            context.drawImage(capture.elt, 0, 0);
            let data = canvas.toDataURL('image/png');
            sessionStorage.setItem('imagemQuarto', data);

            document.getElementById("cortina_esq").classList.add("cortina_esq_azul");
            document.getElementById("cortina_dir").classList.add("cortina_dir_azul");
            cortina_esq.src = "images/quarto/cortina_azul_esq.png";
            cortina_dir.src = "images/quarto/cortina_azul_dir.png";
            document.getElementById("quadrado").style.background = "white";
            document.getElementById("quadrado").style.zIndex = "-10";
            audio_cortina.play();
            setTimeout(alertFunc, 2000);

            function alertFunc() {
                cortina_esq.src = "images/quarto/cortina_esq.png";
                cortina_dir.src = "images/quarto/cortina_dir.png";
            }

            correr = 1;
            setTimeout(function () {
                document.querySelector(".lydiaTexto p").innerHTML = "";
                texto2();
                audio_q2.play();
            }, 2001);
        }
    }
}


//CAMA RODAR
var audio_cama = document.getElementById('audio_cama');
var cama = document.getElementById("cama");

function mouseOverCama() {
    cama.src = "images/quarto/cama_azul.png";
}

function mouseLeftCama() {
    if (audio_cama.paused || audio_cama.ended) {
        cama.src = "images/quarto/cama.png";
    }
}

function audio_cama_f() {
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
        cama.src = "images/quarto/cama.png";
        document.getElementById("cama").classList.remove("cama_azul");
        eventsRelogio();
    }
}

audio_cama.addEventListener("ended", function () {
    document.getElementById("cama").classList.remove("cama_azul");
    eventsRelogio();
});

//RELÓGIO FALA

function eventsRelogio() {
    cama.src = "images/quarto/cama.png";
    relogio.setAttribute("usemap", "#clockmap");

    horas.addEventListener("mouseenter", mouseOverRelogio);
    horas.addEventListener("mouseleave", mouseLeftRelogio);
    horas.addEventListener("click", audio_relogio_f);

    audio_relogio.addEventListener("ended", function () {
        relogio.src = "images/quarto/relogio.png";
        document.getElementById("horas").style.color = "lightgrey";
        winLetra('v');
    });
}

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

function mouseOverRelogio() {
    if (audio_q1.paused && audio_cama.paused) {
        relogio.src = "images/quarto/relogio_azul.png";
        document.getElementById("horas").style.color = "dodgerblue";
    }
}

function mouseLeftRelogio() {
    if ((audio_q1.paused && audio_cama.paused) && (audio_relogio.paused || audio_relogio.ended)) {
        relogio.src = "images/quarto/relogio.png";
        document.getElementById("horas").style.color = "lightgrey";
    }
}

function audio_relogio_f() {
    if (audio_cama.paused && audio_relogio.paused) {
        audio_relogio.play();
        document.getElementById("horas").style.color = "dodgerblue";
        relogio.src = "images/quarto/relogio_azul.png";
    } else {
        audio_relogio.pause();
        audio_relogio.currentTime = 0;
        document.getElementById("horas").style.color = "lightgrey";
        relogio.src = "images/quarto/relogio.png";
    }

}

//FADE OUT
function FadeOut(){
    document.querySelector("body").classList.add("fadeOut");
    setTimeout(function(){
        window.location.href="Menus/Nursery.html";
    }, 800);
}