let gatoEvent = false;
let timeout;

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

let text1Lydia = "Umm... There's something missing in here. Move your face and try to find it!";
let text2Lydia = "There it is! That silly cat is always hiding!";
let i1 = 0;
let i2 = 0;
let speed = 40;
let audios = document.querySelectorAll("audio");

function typeWriter1(){
    if (i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(typeWriter1, speed);
    }
    else {
        removeText();
    }
}

function removeText(){
    if(i1>0 && audios[0].ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i1 -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i1 = i1 - 1;
        setTimeout(removeText, 30);
    }
    if(!audios[0].ended){
        setTimeout(removeText, 30);
    }
}

Promise.all([audios[0],audios[1]]).then(function(){
    audios[0].play();
    typeWriter1();
});

function typeWriter2(){
    if(i2 === 0){
        audios[1].play();
    }
    if (i2 < text2Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
    }
}

audios[1].addEventListener("ended", function(){
    document.querySelector(".lydiaTexto p").innerHTML = "";
    winLetra("l");
});

//clicar gato

function gatoclick() {
    //save image
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    context.drawImage(capture.elt, 0, 0);
    let data = canvas.toDataURL('image/png');
    sessionStorage.setItem('imagemSala', data);

    gatoEvent = true;
    document.querySelector(".lydiaTexto p").innerHTML = "";
    typeWriter2();
}

//CÂMARA

var capture;
var tracker;
var w = 640,
    h = 480;
var positions, xInitial, yInitial, stepLeftX = [], stepLeftY = [], initial = false;
var left = [];

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
    frameRate(20);
}

function draw() {
    positions = tracker.getCurrentPosition();

    if (positions.length > 0 && audios[0].ended && initial === false) {
        initial = true;
        xInitial = positions[35][0] - positions[1][0];
        yInitial = positions[12][0] - positions[35][0];

        for(let i=44; i<50; i++){
            left[i] = document.styleSheets[0].cssRules[i].style.left;
            left[i] = left[i].replace('%', '');
            left[i] = parseFloat(left[i]);

            if (i===44){
                stepLeftX[i] = (33 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }
            else if (i===45){
                stepLeftX[i] = (49 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }
            else if(i===46){
                stepLeftX[i] = (77 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }
            else if(i===47){
                stepLeftX[i] = (58 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }
            else if(i===48){
                stepLeftX[i] = (70 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }
            else {
                stepLeftX[i] = (34 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
            }

        }
    }

    if (positions.length > 0 && audios[0].ended && gatoEvent === false && initial) {
        //rules dos moveis começam no 46
        for(let i=44; i<50; i++){
            if((positions[12][0] - positions[35][0]) < yInitial){
                let positionLeft = left[i] - stepLeftY[i]*(yInitial - (positions[12][0] - positions[35][0]));
                positionLeft = positionLeft.toString() + "%";
                document.styleSheets[0].cssRules[i].style.left = positionLeft;
            }
            else {
                let positionLeft = left[i] + stepLeftX[i]*(xInitial - (positions[35][0] - positions[1][0]));
                positionLeft = positionLeft.toString() + "%";
                document.styleSheets[0].cssRules[i].style.left = positionLeft;
            }
        }
    }
}

//FADE OUT
function FadeOut(){
    document.getElementById("body_fade").classList.add("fadeOut");
    setTimeout(function(){
        window.location.href="Menus/Bedroom.html";
    }, 800);
}
