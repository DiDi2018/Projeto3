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
    document.querySelector(".lydiaTexto p").innerHTML = "";
    winLetra("l");
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
var positions, xInitial, yInitial, zInitial, stepLeftX = [], stepLeftY = [], initial = false;
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
    /*
    image(capture, 0, 0, w, h);
    noFill();
    stroke(255);
    beginShape();
    for (let i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();
    for (let i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        // ellipse(positions[i][0], positions[i][1], 2, 2);
        text(i, positions[i][0], positions[i][1]);
    }
    */
    if (positions.length > 0 && audios[0].ended && audios[1].ended && initial === false) {
        initial = true;
        xInitial = positions[35][0] - positions[1][0];
        yInitial = positions[12][0] - positions[35][0];
        //zInitial = positions[7][0] - positions[53][0];

        for(let i=26; i<30; i++){
            left[i] = document.styleSheets[0].cssRules[i].style.left;
            left[i] = left[i].replace('vw', '');
            left[i] = parseFloat(left[i]);

            if (i===26){
                stepLeftX[i] = (48 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
                console.log(stepLeftX + " " + stepLeftY);
            }
            else if (i===27){
                stepLeftX[i] = (46 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
                console.log(stepLeftX + " " + stepLeftY);
            }
            else if(i===28){
                stepLeftX[i] = (66 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
                console.log(stepLeftX + " " + stepLeftY);
            }
            else{
                stepLeftX[i] = (63 - left[i]) / xInitial;
                stepLeftY[i] = (left[i] - 0.5) / yInitial;
                console.log(stepLeftX + " " + stepLeftY);
            }
        }
    }

    if (positions.length > 0 && audios[0].ended && audios[1].ended && gatoEvent === false && initial) {
        //rules dos moveis começam no 26
        for(let i=26; i<30; i++){
            if((positions[12][0] - positions[35][0]) < yInitial){
                let positionLeft = left[i] - stepLeftY[i]*(yInitial - (positions[12][0] - positions[35][0]));
                positionLeft = positionLeft.toString() + "vw";
                document.styleSheets[0].cssRules[i].style.left = positionLeft;
            }
            else {
                let positionLeft = left[i] + stepLeftX[i]*(xInitial - (positions[35][0] - positions[1][0]));
                positionLeft = positionLeft.toString() + "vw";
                document.styleSheets[0].cssRules[i].style.left = positionLeft;
            }
        }
    }
}
