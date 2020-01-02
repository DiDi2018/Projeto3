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
    divs[0].style.display = 'inline-block';
},500);

setTimeout(function () {
    divs[1].style.display = 'inline-block';
},2500);

setTimeout(function () {
    divs[2].style.display = 'inline-block';
},5500);

setTimeout(function () {
    divs[3].style.display = 'inline-block';
},8000);

setTimeout(function () {
    divs[4].style.display = 'inline-block';
},9500);

setTimeout(function(){
    for(let i = 0; i < divs.length; i++){
        divs[i].style.display = 'none';
    }
    document.querySelector('#texto_erro').style.display = 'block';
},11000);

setTimeout(function(){
    sessionStorage.clear();
    window.location = 'index.php';
},13000);