//document.addEventListener("click", aproximar);
var tv = document.getElementById("tv");
var audio_ruido = document.getElementById('audio_ruido');
var audio_lydia1 = document.getElementById("audio1");
var audio_lydia2 = document.getElementById("audio2");
let i1 = 0, i2 = 0, speed = 50, textos = false, textoGritos = false;
let text1Lydia = 'Say "hi" to the hallway!';
let text2Lydia = "Ohhh... Can you hear it? These screams come from the Nursery! Can't wait to show you that amazing room!" +
    " To get there we have to go through the hallway!";

var capture;
var tracker;
var w = 640,
    h = 480;
var gritos=document.getElementById("grito");

function aproximar() {
    let image1 = document.querySelector(".hallway:nth-child(1)").style.transform;
    let value1 = image1.match(/translateZ\(([-]?)[0-9]{1,4}px\)/);
    let value = parseInt(value1[0].slice(11, value1[0].length - 3));

    if (value < -500) {
        for (let i = 1; i < 17; i++) {
            let image = document.querySelector(`.hallway:nth-child(${i})`);
            let imageCSS = image.style.transform;
            let valueIni = imageCSS.match(/translateZ\(([-]?)[0-9]{1,4}px\)/);
            let value = parseInt(valueIni[0].slice(11, valueIni[0].length - 3)) + 25;
            if(value>=-200 && value<-25 && image.className === "hallway lamp"){
                image.src="images/corredor/lamp_yellow.png"
            }
            else if(value >= -25){
                image.style.display = "none";
            }
            value.toString();

            image.style.transform = imageCSS.replace(/translateZ\(([-]?)[0-9]{1,4}px\)/, `translateZ(${value}px)`);
        }
    }
    else if(value >= -500 && textos){
        textos = false;
        winLetra('T');
    }
}

function typewriter1() {
    if(i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(typewriter1, speed);
    }
    else {
        removeText1();
    }
}

function removeText1(){
    if(i1 > 0 && audio_lydia1.ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i1 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removeText1, 30);
    }
    if(!audio_lydia1.ended){
        setTimeout(removeText1, 30);
    }
}

function typewriter2() {
    if(i2 < text2Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i2);
        i2++;
        setTimeout(typewriter2, speed);
    }
    else {
        removeText2();
    }
}

function removeText2(){
    if(i2 > 0 && audio_lydia2.ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i2 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i2 = i2 - 1;
        setTimeout(removeText2, 30);
    }

    if(!audio_lydia2.ended){
        setTimeout(removeText2, 30);
    }
}

audio_lydia2.addEventListener("ended",function(){
    textos = true;
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

    //distância entre sobrancelha e olho
    if (positions.length > 0 && textos) {
        var MouthTop = createVector(positions[58][0], positions[58][1]);
        var MouthBottom = createVector(positions[59][0], positions[59][1]);
        var boca = MouthTop.dist(MouthBottom);
    }

    if (boca >= 26) {
        aproximar();
        gritos.play();
        if(textoGritos === false){
            textoGritos = true;
            setTimeout(typewriter2, 30);
            setTimeout(function(){
                audio_lydia2.play();
            }, 30);
        }
    }

    else{
        gritos.pause();
    }
}

//RUIDO
/*function mudar() {
    setTimeout(ruidar, 1000);
    setTimeout(desafio, 4000);
}
*/
function ruido() {
    document.getElementById("ruido").style.display = "block";
    audio_ruido.play();
    gritos.pause();
    setTimeout(function () {
        window.location.href = "codigo.html";
    },1000);
}
/*
function desafio() {
    tv.src = "images/corredor/tv.png";
    audio_ruido.pause();
    gritos.pause();
}*/

audio_lydia1.play();
typewriter1();