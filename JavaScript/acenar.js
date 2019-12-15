let p = document.querySelector('p');
let texto = "To go inside the house please wave!";
let casa = document.querySelector('.casa_ac');
let div = document.querySelector('#preto');
let timeout;

function blink(){
    if(p.innerHTML === texto || p.innerHTML === "Loading..."){
        p.innerHTML = "";
    }
    else {
        p.innerHTML = texto;
    }
    timeout = setTimeout(blink,400);
}

function end(){
    clearTimeout(timeout);
    p.innerHTML = "";
    casa.style.transform = "scale(10)";
    casa.style.marginLeft = "-11%";
    casa.style.marginTop = "0%";
    div.style.opacity = "1";
    setTimeout(function(){
        window.location = "Menus/Kitchen.html";
    },4000);
}

let video = document.querySelector("video");
let model = null;

function runDetection() {
    model.detect(video).then(predictions => {
        if(predictions.length > 0) {
            console.log("Predictions: ", predictions);
            end();
        }
        else {
            requestAnimationFrame(runDetection);
        }
    });
}

function startVideo(){
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            runDetection();
        }
    });
}

handTrack.load().then(lmodel => {
    startVideo();
    blink();
    model = lmodel;
});

