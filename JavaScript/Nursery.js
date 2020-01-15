var capture;
var tracker;
var w = 640,
    h = 480;
var gritos = document.getElementById("grito");
var imagens = [];

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/nursery/girafa.png";
imagens[1] = "images/nursery/girafa_ruido.png";
imagens[2] = "images/nursery/abutre.png";
imagens[3] = "images/nursery/abutre_ruido.png";
imagens[4] = "images/nursery/leao.png";
imagens[5] = "images/nursery/leao_ruido.png";
imagens[6] = "images/nursery/leao_amarelo.png";
imagens[7] = "images/nursery/leao_amarelo_ruido.png";
imagens[8] = "images/nursery/zebra.png";
imagens[9] = "images/nursery/zebra_ruido.png";

var psi = false;
var fecharcarta = false;
let interrupt = false;

function rodarImagem(x) {
    let nrImagem;
    let src = document.querySelector(`#${x}`).getAttribute("src");

    for (let i = 0; i < imagens.length; i++) {
        if (imagens[i] === src) {
            if (src.includes('ruido')) nrImagem = i - 1;
            else nrImagem = i + 1;
        }
    }

    document.querySelector(`#${x}`).setAttribute('src', imagens[nrImagem]);
    //se a imagem tiver passado para normal, esperar um tempo random para mudar de imagem outra vez
    //para parecer mais como uma falha, não ser algo constante
    if (nrImagem % 2 === 0) {
        setTimeout("rodarImagem('" + x + "')", Math.floor(Math.random() * (800 - 70)) + 70);
    } else {
        setTimeout("rodarImagem('" + x + "')", 70);
    }
}

setTimeout("rodarImagem('girafa')", 13000);
setTimeout("rodarImagem('girafa2')", 15000);
setTimeout("rodarImagem('abutre')", 19000);
setTimeout("rodarImagem('abutre2')", 13000);
setTimeout("rodarImagem('leao')", 17000);
setTimeout("rodarImagem('zebra')", 15000);
setTimeout("rodarImagem('leao_amarelo')", 15000);
setTimeout("rodarImagem('leao_amarelo2')", 15000);


//LYDIA

let audio = document.querySelectorAll("audio");
let text1Lydia = "This room is the heart of the house. Whenever you feel like escaping reality " +
    "you can do it without actually leaving. You will feel like you're in another world!";
let i1 = 0;
let speed = 25;

function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    } else {
        removerTexto();
    }
}

function removerTexto() {
    if (i1 > 0 && audio[3].ended) {
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0, i1 - 1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removerTexto, 30);
    } else if (!audio[3].ended) {
        setTimeout(removerTexto, 30);
    }
}

document.querySelector('a-scene').addEventListener('loaded', function () {
    audio[3].play();
    aparecerTexto();
});


//CÂMARA
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
    smile();
}

var MouthLeft;
var MouthRight;
var sorriso;
var MouthLeft0;
var MouthRight0;
var sorriso0;
let timeoutSorriso;

var MouthTop;
var MouthBottom;
var boca;
var MouthTop0;
var MouthBottom0;
var boca0;

function draw() {
    var positions = tracker.getCurrentPosition();
    if (positions.length > 0) {
        if (fecharcarta) {
            if (sorriso0 === undefined) {
                MouthLeft0 = createVector(positions[50][0], positions[50][1]);
                MouthRight0 = createVector(positions[44][0], positions[44][1]);
                sorriso0 = MouthLeft0.dist(MouthRight0);
            } else {
                MouthLeft = createVector(positions[50][0], positions[50][1]);
                MouthRight = createVector(positions[44][0], positions[44][1]);
                sorriso = MouthLeft.dist(MouthRight);
            }
        }
        if (fecharcarta) {
            if (boca0 === undefined) {
                MouthTop0 = createVector(positions[58][0], positions[58][1]);
                MouthBottom0 = createVector(positions[59][0], positions[59][1]);
                boca0 = MouthTop0.dist(MouthBottom0);
            } else {
                MouthTop = createVector(positions[58][0], positions[58][1]);
                MouthBottom = createVector(positions[59][0], positions[59][1]);
                boca = MouthTop.dist(MouthBottom);
            }
        }
    }

    if (sorriso0 < sorriso && sorriso >= 1.3 * sorriso0) {
        gritos.play();
    } else {
        gritos.pause();
    }
}

//SmilePopUp

function smile(){
    if (fecharcarta && interrupt === false) {
        if (sorriso0 < sorriso && sorriso >= 1.3 * sorriso0) {
            document.querySelector(".PopUpSorriso").style.display = "none";
        }
        else {
            document.querySelector(".PopUpSorriso").style.display = "block";
        }
        setTimeout(smile, 50);
    }
    else {
        setTimeout(smile, 500);
    }
}

let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let date = d + "/" + m + "/" + y;
let nome = document.getElementById("php").innerHTML;
let t1 = "If you have found this letter it's because you're in the Nursery.";
let t2 = "Now you only have one way out! This if technology hasn't taken over you yet. Find the security panel and turn off the Happy Life Home by choosing the right switch.";
let t3 = "Hurry up and good luck!";
let assinado = "Mr.McClean";
let n5 = 0;
let n6 = 0;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;

function ler() {
    if (n5 < date.length) {
        document.querySelector("#date").innerHTML += date.charAt(n5);
        n5++;
    } else if (n6 < nome.length && n5 >= date.length) {
        document.querySelector("#nome").innerHTML += nome.charAt(n6);
        n6++;
    } else if (n1 < t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p1").innerHTML += t1.charAt(n1);
        n1++;
    } else if (n2 < t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p2").innerHTML += t2.charAt(n2);
        n2++;
    } else if (n3 < t3.length && n2 >= t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p3").innerHTML += t3.charAt(n3);
        n3++;
    } else if (n4 < assinado.length && n3 >= t3.length && n2 >= t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#assinado").innerHTML += assinado.charAt(n4);
        n4++;
    }

    if (n4 < assinado.length) {
        setTimeout(ler, 60);
    }
}

function aparecer() {
    if (document.getElementById("lydianursery").ended) {
        document.getElementById("textoCartaNursery").style.display = "block";
        if (psi === false) {
            document.getElementById("psicologofinal").play();
        }
        psi = true;
        ler();
    }
}

function aparecerInterruptor() {
    if (document.getElementById("lydianursery").ended) {
        interrupt = true;
        clearTimeout(timeoutSorriso);
        document.querySelector(".PopUpSorriso").style.display = "none";
        document.getElementById("Interruptor").style.display = "block";
        imageMapResize();
    }
}

function sair() {
    if (document.getElementById("psicologofinal").ended) {
        fecharcarta = true;
        document.getElementById('textoCartaNursery').style.display = "none";
    }
}

let interruptores = document.querySelector("#switch");

function hoverswitch1() {
    interruptores.src = "images/nursery/Switch1.png";
}

function hoverswitch2() {
    interruptores.src = "images/nursery/Switch2.png";
}

function hoverswitch3() {
    interruptores.src = "images/nursery/Switch3.png";
}

function nothoverswitch() {
    interruptores.src = "images/nursery/Switch.png";
}

function clickInterruptores() {
    document.querySelector(".PopUpSorriso").style.display = "none";
    document.getElementById('textoCartaNursery').style.display = "none";
    document.querySelector('a-scene').style.display = "none";
    document.querySelector("#ruido").style.display = "block";
    document.getElementById("audio_ruido").play();
    gritos.pause();
    setTimeout(function () {
        window.location.href = "final.php";
    }, 2000);
}