//RESIZE

let body = document.querySelector('body');
let widthOriginal = 1800;
let heightOriginal = 891;
body.style.width = '1800px';
body.style.height = '891px';

function resize(){
    let height = window.innerHeight;
    let width = window.innerWidth;

    body.style.top = 0;
    body.style.left = 0;

    let scale = Math.min(width / widthOriginal, height / heightOriginal);
    body.style.transform = "scale(" + scale + ")";

    let position = body.getBoundingClientRect();
    let top = - position['top'] + ((height - position['height'])/2);
    let left = - position['left'] + ((width - position['width'])/2);
    body.style.top = top + 'px';
    body.style.left = left + 'px';
}

window.addEventListener('resize', resize);

function resizeBegin(){
    if(document.readyState === 'complete'){
        resize();
        body.style.visibility = 'visible';
        body.classList.add('fadeIn');
        setTimeout(function(){
            window.location.href="sorteio.php";
        }, 3000);
    }
    else {
        setTimeout(resizeBegin,50);
    }
}

resizeBegin();