document.addEventListener("click",function(){
    let image1 = document.querySelector(".hallway:nth-child(1)").style.transform;
    let value1 = image1.match(/translateZ\(([-]?)[0-9]{1,4}px\)/);
    let value = parseInt(value1[0].slice(11,value1[0].length - 3));

    if(value < -500){
        for(let i=1; i<17; i++){
            let image = document.querySelector(`.hallway:nth-child(${i})`);
            let imageCSS = image.style.transform;
            let valueIni = imageCSS.match(/translateZ\(([-]?)[0-9]{1,4}px\)/);
            let value = parseInt(valueIni[0].slice(11,valueIni[0].length - 3)) + 5;
            value.toString();

            image.style.transform = imageCSS.replace(/translateZ\(([-]?)[0-9]{1,4}px\)/,`translateZ(${value}px)`);
        }
    }

});

//CÂMARA

var capture;
var tracker;
var w = 640,
    h = 480;
var positions;

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

    if (positions.length > 0) {
        var mouthUp = createVector();
        var mouthLow = createVector();

    }
}
