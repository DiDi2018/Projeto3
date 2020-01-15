//pôr src nas imagens

function srcImage(){
    let imagens = document.querySelectorAll('#final div img');
    for(let i = 0; i < imagens.length; i++){
        if(i === 0){
            imagens[i].src = sessionStorage.getItem('imagemAcenar');
        }
        else if(i === 1){
            imagens[i].src = sessionStorage.getItem('imagemCozinha');
        }
        else if(i === 2){
            imagens[i].src = sessionStorage.getItem('imagemSala');
        }
        else if(i === 3){
            imagens[i].src = sessionStorage.getItem('imagemQuarto');
        }
        else {
            imagens[i].src = sessionStorage.getItem('imagemCorredor');
        }
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
},3000);

setTimeout(function () {
    divs[1].style.opacity = '0';
    setTimeout(function(){
        divs[2].style.opacity = '1';
    },500);
},6000);

setTimeout(function () {
    divs[2].style.opacity = '0';
    setTimeout(function(){
        divs[3].style.opacity = '1';
    },500);
},9000);

setTimeout(function () {
    divs[3].style.opacity = '0';
    setTimeout(function(){
        divs[4].style.opacity = '1';
    },500);
},12000);

setTimeout(function(){
    divs[4].style.opacity = '0';
    document.querySelector('#ruido').style.visibility = 'visible';
    document.querySelector('#audio_ruido').play();
},15000);

setTimeout(function(){
    document.querySelector('#ruido').style.visibility = 'hidden';
    document.querySelector('#audio_ruido').pause();
    document.querySelector('#texto_erro').style.display = 'block';
},17000);

setTimeout(function(){
    sessionStorage.clear();
    window.location = 'index.php';
},18000);