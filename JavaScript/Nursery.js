var capture;
var tracker;
var w = 640,
    h = 480;
var gritos=document.getElementById("grito");

var nrImagem = 0;
var imagens = [];
var refrescar = 1;

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "images/nursery/girafa.png";
imagens[1] = "images/nursery/girafa_ruido.png";

function rodarImagemGirafa() {
    document.querySelector('#girafa').setAttribute('src', imagens[nrImagem++]);
    if (nrImagem >= imagens.length)
        nrImagem = 0;
    setTimeout("rodarImagemGirafa()", refrescar * 70);
}
//setTimeout("rodarImagemGirafa()",9000);
rodarImagemGirafa();


var nrImagem2 = 0;
var imagens2 = [];

imagens2[0] = "images/nursery/abutre.png";
imagens2[1] = "images/nursery/abutre_ruido.png";

function rodarImagem() {
    document.querySelector('#abutre').setAttribute('src', imagens2[nrImagem2++]);
    if (nrImagem2 >= imagens2.length)
        nrImagem2 = 0;
    setTimeout("rodarImagem()", refrescar * 120);
}
//setTimeout("rodarImagem()",9000);
rodarImagem();


//LYDIA

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
    if(i1>0 && audio[1].ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i1 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removerTexto, 30);
    }

    else if(!audio[1].ended){
        setTimeout(removerTexto, 30);
    }

    if(i1 <= 0){
        setTimeout(function(){
            document.querySelector("#ruido").style.display = "block";
            document.querySelector('a-scene').style.display = "none";
            document.getElementById("audio_ruido").play();
        },10000);
        setTimeout(function(){
            document.querySelector("#ruido").style.display = "none";
            document.getElementById("audio_ruido").pause();
            document.querySelector(".lydia_nursery").style.display = "none";
            document.querySelector("#texto_erro").style.display = "block";
        },12000);

        setTimeout(function(){
            window.location.href = "index.php";
        },15000);
        }

}

document.querySelector('a-scene').addEventListener('loaded', function () {
    audio[1].play();
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
}

function draw() {
    // image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();


    if (positions.length > 0 /*&& audio_lydia1.ended*/) {
        var MouthTop = createVector(positions[58][0], positions[58][1]);
        var MouthBottom = createVector(positions[59][0], positions[59][1]);
        var boca = MouthTop.dist(MouthBottom);
    }

    if (boca >= 26) {
        gritos.play();
    }

    else{
        gritos.pause();
    }
}
