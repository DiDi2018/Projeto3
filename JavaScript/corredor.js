//document.addEventListener("click", aproximar);
var tv = document.getElementById("tv");
var audio_ruido = document.getElementById('audio_ruido');

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
            if(value>=-25 && value<0 && image.className === "hallway lamp"){
                image.src="images/corredor/lamp_yellow.png"
            }
            value.toString();

            image.style.transform = imageCSS.replace(/translateZ\(([-]?)[0-9]{1,4}px\)/, `translateZ(${value}px)`);



        }
    }
    if(value === -700){
        setTimeout(mudar, 500);
    }
}

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
    if (positions.length > 0) {
        var MouthTop = createVector(positions[58][0], positions[58][1]);
        var MouthBottom = createVector(positions[59][0], positions[59][1]);
        var boca = MouthTop.dist(MouthBottom);
    }

    if (boca >= 26) {
        aproximar();
        gritos.play();

    }
    else{
        gritos.pause();


    }
}

//RUIDO
function mudar() {
    setTimeout(ruidar, 1000);
    setTimeout(desafio, 4000);
}

function ruidar() {
    tv.src = "images/corredor/tv_ruido.png";
    audio_ruido.play();
    gritos.pause();
}

function desafio() {
    tv.src = "images/corredor/tv.png";
    audio_ruido.pause();
    gritos.pause();
}

//mover letras
var dragMe = document.getElementById("letra_A"),
    /* o x inicial do drag*/
    dragOfX = 15;
    /* o y inicial do drag */
    dragOfY = 15;

/* ao segurar o elemento */
function dragStart(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;

    /* adiciona os eventos */
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
}

/* ao ser arrastado */
function dragMove(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
}

/* ao terminar o drag */
function dragEnd() {
    /* remove os eventos */
    removeEventListener("mousemove", dragMove);
    removeEventListener("mouseup", dragEnd);
}

/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);
