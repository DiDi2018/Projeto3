//pôr src nas imagens

function srcImage(){
    let imagens = document.querySelectorAll('#final div img');
    let values = Object.keys(sessionStorage);
    for(let i = 0; i < imagens.length; i++){
        imagens[i].src = sessionStorage.getItem(values[i]);
    }
}

srcImage();

//mostrar as imagens

let divs = document.querySelectorAll('#final div');

setTimeout(function () {
    divs[0].style.opacity = '1';
},500);

setTimeout(function () {
    divs[0].style.opacity = '0';
    setTimeout(function(){
        divs[1].style.opacity = '1';
    },500);
},2500);

setTimeout(function () {
    divs[1].style.opacity = '0';
    setTimeout(function(){
        divs[2].style.opacity = '1';
    },500);
},5000);

setTimeout(function () {
    divs[2].style.opacity = '0';
    setTimeout(function(){
        divs[3].style.opacity = '1';
    },500);
},7000);

setTimeout(function () {
    divs[3].style.opacity = '0';
    setTimeout(function(){
        divs[4].style.opacity = '1';
    },500);
},9000);

setTimeout(function(){
    divs[4].style.opacity = '0';
    document.querySelector('#ruido').style.visibility = 'visible';
    document.querySelector('#audio_ruido').play();
},11000);

setTimeout(function(){
    document.querySelector('#ruido').style.visibility = 'hidden';
    document.querySelector('#audio_ruido').pause();
    document.querySelector('#texto_erro').style.display = 'block';
},13000);

setTimeout(function(){
    sessionStorage.clear();
    window.location = 'index.php';
},14000);