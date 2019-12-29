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

function rodarImagem(x) {
    let nrImagem;
    let src = document.querySelector(`#${x}`).getAttribute("src");

    for(let i = 0; i < imagens.length; i++){
        if(imagens[i] === src){
            if (src.includes('ruido')) nrImagem = i - 1;
            else nrImagem = i + 1;
        }
    }

    document.querySelector(`#${x}`).setAttribute('src', imagens[nrImagem]);
    //se a imagem tiver passado para normal, esperar um tempo random para mudar de imagem outra vez
    //para parecer mais como uma falha, não ser algo constante
    if(nrImagem % 2 === 0){
        setTimeout("rodarImagem('" + x + "')", Math.floor(Math.random() * (800 - 70)) + 70);
    }
    else {
        setTimeout("rodarImagem('" + x + "')", 70);
    }
}
setTimeout("rodarImagem('girafa')",13000);
setTimeout("rodarImagem('girafa2')",15000);
setTimeout("rodarImagem('abutre')",19000);
setTimeout("rodarImagem('abutre2')",13000);
setTimeout("rodarImagem('leao')",17000);
setTimeout("rodarImagem('zebra')",15000);
setTimeout("rodarImagem('leao_amarelo')",15000);
setTimeout("rodarImagem('leao_amarelo2')",15000);


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
    if(i1>0 && audio[2].ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i1 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removerTexto, 30);
    }

    else if(!audio[2].ended){
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
    audio[2].play();
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

function aparecer(){
    document.getElementById("textoCartaNursery").style.display = "block";
}


