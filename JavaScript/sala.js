let gatoEvent = false;

//hover gato

let gato = document.querySelector(".sala:first-child");

function hover(){
    gato.src = "images/sala/gato_cor.png";
}
function nothover(){
    if (gatoEvent === false){
        gato.src = "images/sala/gato.png";
    }
}

//texto lydia

let text1Lydia = "Umm... There's something missing in here. Why don't you try to find it?";
let text2Lydia = "There it is! That silly cat is always hiding!";
let i1 = 0;
let i2 = 0;
let audio1Run = false;
let speed = 45;
let audios = document.querySelectorAll("audio");

function typeWriter1(){
    if (i1 >= 39 && audios[0].ended && audio1Run === false){
        audio1Run = true;
        audios[1].play();
    }
    if (i1 < text1Lydia.length){
            document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
            i1++;
            setTimeout(typeWriter1, speed);
    }
}

Promise.all([audios[0],audios[1]]).then(function(){
    audios[0].play();
    typeWriter1();
});

function typeWriter2(){
    if(i2 === 0){
        audios[2].play();
    }
    if (i2 < text2Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}

audios[2].addEventListener("ended", function(){
    winLetra("l")
});

//clicar gato

function gatoclick() {
    gatoEvent = true;
    document.querySelector(".lydiaTexto p").innerHTML = "";
    typeWriter2();
}

//CÂMARA

var capture;
var tracker;
var w = 640,
    h = 480;
var positions, xInitial, yInitial, zInitial;
let moveis = document.querySelectorAll("img.sala");

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
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
    positions = tracker.getCurrentPosition();

    if (positions.length > 0 && frameCount >= 300) {
        xInitial = positions[35][0] - positions[1][0];
        yInitial = positions[12][0] - positions[39][0];
        zInitial = positions[7][0] - positions[53][0];
        moveFace();
    }
}

function moveFace(){
    if (positions.length > 0 && frameCount >= 360) {
        //rules dos moveis começam no 16
        for(let i=16;i<19; i++){
            let step = (document.styleSheets[0].cssRules[i].left - 0.5)/yInitial;
            let positionLeft = document.styleSheets[0].cssRules[i].style.left - step*(positions[12][0] - positions[39][0]);
            document.styleSheets[0].cssRules[i].style.left = `${positionLeft}`;
            console.log(positionLeft);
        }
    }
}