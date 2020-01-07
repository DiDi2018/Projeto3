var carta = document.getElementById('carta');
var cruz = document.getElementById('cruz');
var monstro1 = document.getElementById("monstro1"); // works
var monstro2 = document.getElementById("monstro2"); // works
var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var psicologo = document.getElementById('psicologo');
let apresentacao = document.getElementById("apresentacao");
let smile = document.getElementById("smile");
let count1 = false;
let count2 = false;
let count3 = false;
let count4 = false;
let count5 = false;
let i3 = 0;
var capture;
var tracker;
var w = 640,
    h = 480;
var positions, MouthLeft, MouthRight, sorriso;
var areaMonstro1 = document.getElementById("areaMonstro1");
var areaMonstro2 = document.getElementById("areaMonstro2");


//TEXTO LYDIA
let text1Lydia = "This room has the best instruments that you could ever dream of. You will never ever have to worry about dinner anymore, as soon as you get home you’ll have warm food on the table. Go ahead and take a look!";
let i1 = 0;
let speed = 40;
let lydia = document.querySelector(".lydia");

function aparecerTexto() {
    if (i1 < text1Lydia.length) {
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(aparecerTexto, speed);
    } else {
        removerText();
    }
}

apresentacao.play();
aparecerTexto();

function removerText() {
    if (i1 > 0 && apresentacao.ended) {
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0, i1 - 1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removerText, 30);
    }
    if (!apresentacao.ended) {
        setTimeout(removerText, 30);
    }
}

//MOSTRAR A CARTA
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let date = d + "/" + m + "/" + y;
let nome = document.getElementById("php").innerHTML;
let t1 = "I’m writing this letter to warn you! Although you won this house, you must know that there are a lot of dangers that you should be aware of.";
let t2 = "Lydia must not know that I wrote this letter. If you ever want to turn off the house go to the nursery, you will know what to do.";
let t3 = "Don’t let technology blind you like it blinded the last family that lived here.";
let t4 = "Be careful!";
let assinado = "Mr.McClean";
let i7 = 0;
let n5 = 0;
let n6 = 0;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n7 = 0;

function ler() {
    if (n5 < date.length) {
        document.querySelector("#date").innerHTML += date.charAt(n5);
        n5++;
    }
    if (n6 < nome.length && n5 >= date.length) {
        document.querySelector("#nome").innerHTML += nome.charAt(n6);
        n6++;
    }

    if (n1 < t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p1").innerHTML += t1.charAt(n1);
        n1++;
    }
    if (n2 < t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p2").innerHTML += t2.charAt(n2);
        n2++;
    }
    if (n3 < t3.length && n2 >= t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p3").innerHTML += t3.charAt(n3);
        n3++;
    }
    if (n4 < t4.length && n3 >= t3.length && n2 >= t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#p4").innerHTML += t4.charAt(n4);
        n4++;
    }
    if (n7 < assinado.length && n4 >= t4.length && n3 >= t3.length && n2 >= t2.length && n1 >= t1.length && n6 >= nome.length && n5 >= date.length) {
        document.querySelector("#assinado").innerHTML += assinado.charAt(n7);
        n7++;
    }
    if (n7 < assinado.length) {
        setTimeout(ler, speed);
    } else {
        cruz.addEventListener("click", sair);
        //document.addEventListener("click", fecharfora);
    }

}

carta.addEventListener("click", ShowLetter);

function ShowLetter() {
    if (apresentacao.ended) {
        document.getElementById("texto").style.display = "block";
        audio2.pause();
        audio2.currentTime = 0;
        monstro2.src = "images/cozinha/Monstro2.png";
        audio1.pause();
        audio1.currentTime = 0;
        monstro1.src = "images/cozinha/Monstro1.png";
        if (count1 === false) {
            psicologo.play();
        }
        count1 = true;
        ler();
    }
}

//SAIR DA CARTA

function sair() {
    document.getElementById('texto').style.display = "none";
    psicologo.currentTime = 0;
    areaMonstro1.removeAttribute("style");
    areaMonstro2.removeAttribute("style");
    cruz.removeEventListener("click", sair);
    //   document.removeEventListener("click", fecharfora);
}

/*
function fecharfora(evt) {
    let papel = document.getElementById('papel').contains(evt.target);
    let textoPsicologo = document.getElementById('textoPsicologo').contains(evt.target);
    let carta = document.getElementById('carta').contains(evt.target);

    if (!papel && !textoPsicologo && !carta) {
        return sair();
    }
}
*/

//MONSTROS

function mouseOverMonstro1() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        monstro1.src = "images/cozinha/Monstro1.1.png";
    }
}

function mouseLeftMonstro1() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        if (audio1.ended || audio1.paused) {
            monstro1.src = "images/cozinha/Monstro1.png";
        }
    }
}

function mouseOverMonstro2() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        monstro2.src = "images/cozinha/Monstro2.1.png";
    }
}

function mouseLeftMonstro2() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        if (audio2.ended || audio2.paused) {
            monstro2.src = "images/cozinha/Monstro2.png";
        }
    }
}

//MONSTROS_SOM

function playaudio1() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        if (audio1.paused && audio2.paused) {
            audio1.play();
        } else if (audio1.paused && !(audio2.paused)) {
            audio2.pause();
            audio2.currentTime = 0;
            audio1.play();
            monstro2.src = "images/cozinha/Monstro2.png";
        } else {
            audio1.pause();
            audio1.currentTime = 0;
        }
        count2 = true;
    }
}


function playaudio2() {
    if (apresentacao.paused && count1 === true && smile.paused) {
        if (audio2.paused && audio1.paused) {
            audio2.play();
        } else if (audio2.paused && !(audio1.paused)) {
            audio1.pause();
            audio1.currentTime = 0;
            audio2.play();
            monstro1.src = "images/cozinha/Monstro1.png";
        } else {
            audio2.pause();
            audio2.currentTime = 0;
        }
        count3 = true;

    }
}

//ao parar o audio a imagem do monstro volta para pb
audio2.addEventListener("ended", function () {
    monstro2.src = "images/cozinha/Monstro2.png";
});

audio1.addEventListener("ended", function () {
    monstro1.src = "images/cozinha/Monstro1.png";
});

let text3Lydia = "Wait a second! Why are you not smiling? You just won this amazing House, so Smile!";

function lydiaSmile() {
    if (audio1.paused && audio2.paused) {
        if (i3 === 0) {
            smile.play();
        }
        if (i3 < text3Lydia.length) {
            document.querySelector(".lydiaTexto p").innerHTML += text3Lydia.charAt(i3);
            i3++;
            setTimeout(lydiaSmile, speed);
            count4 = true;
            monstro1.src = "images/cozinha/Monstro1.png";
            monstro2.src = "images/cozinha/Monstro2.png";
        } else {
            removerText2();
        }
    }
}

audio1.addEventListener("ended", function () {
    if (count1 && count2 && count3) {
        lydiaSmile();
    }
});
audio2.addEventListener("ended", function () {
    if (count1 && count2 && count3) {
        lydiaSmile();
    }
});

audio1.addEventListener("pause", function () {
    if (count1 && count2 && count3) {
        lydiaSmile();
    }
});
audio2.addEventListener("pause", function () {
    if (count1 && count2 && count3) {
        lydiaSmile();
    }
});

function removerText2() {
    if (i3 > 0 && smile.ended) {
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0, i3 - 1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i3 = i3 - 1;
        setTimeout(removerText2, 30);
    }
    if (!smile.ended) {
        setTimeout(removerText2, 30);
    }
}

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

var MouthLeft0;
var MouthRight0;
var sorriso0;

function draw() {
    positions = tracker.getCurrentPosition();

    if (smile.ended && positions.length > 0) {
        if (sorriso0 === undefined) {
            MouthLeft0 = createVector(positions[50][0], positions[50][1]);
            MouthRight0 = createVector(positions[44][0], positions[44][1]);
            sorriso0 = MouthLeft0.dist(MouthRight0);
        } else {
            MouthLeft = createVector(positions[50][0], positions[50][1]);
            MouthRight = createVector(positions[44][0], positions[44][1]);
            sorriso = MouthLeft.dist(MouthRight);
        }

        if (count1 && count2 && count3 && count4 && sorriso0 < sorriso && sorriso>=1.3*sorriso0 && count5 === false) {
            //save image
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = w;
            canvas.height = h;
            context.drawImage(capture.elt, 0, 0);
            let data = canvas.toDataURL('image/png');
            sessionStorage.setItem('imagemCozinha', data);

            count5 = true;
            winLetra("E");
        }
    }
}

//FADE OUT
function FadeOut(){
    document.getElementById("body_fade").classList.add("fadeOut");
    setTimeout(function(){
        window.location.href="Menus/LivingRoom.html";
    }, 800);
}