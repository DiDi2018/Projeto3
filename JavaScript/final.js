//pôr src nas imagens

function srcImage() {
    let imagens = document.querySelectorAll('#final div img');
    imagens[0].src = sessionStorage.getItem('imagemAcenar');
    imagens[1].src = sessionStorage.getItem('imagemCozinha');
    imagens[2].src = sessionStorage.getItem('imagemSala');
    imagens[3].src = sessionStorage.getItem('imagemQuarto');
    imagens[4].src = sessionStorage.getItem('imagemCorredor');
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
},4000);

setTimeout(function () {
    divs[1].style.opacity = '0';
    setTimeout(function(){
        divs[2].style.opacity = '1';
    },500);
},8000);

setTimeout(function () {
    divs[2].style.opacity = '0';
    setTimeout(function(){
        divs[3].style.opacity = '1';
    },500);
},11000);

setTimeout(function () {
    divs[3].style.opacity = '0';
    setTimeout(function(){
        divs[4].style.opacity = '1';
    },500);
},15000);

setTimeout(function(){
    divs[4].style.opacity = '0';
    document.querySelector('#ruido').style.display = 'block';
    document.querySelector('#audio_ruido').play();
},19000);

setTimeout(function(){
    document.querySelector('#ruido').style.display = 'none';
    document.querySelector('#audio_ruido').pause();
    document.querySelector('#texto_erro').style.display = 'block';
},21000);

setTimeout(function(){
    sessionStorage.clear();
    window.location = 'index.php';
},22000);