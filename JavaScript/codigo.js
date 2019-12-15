let tv = document.querySelector(".code");
let audio_ruido = document.getElementById("audio_ruido");
let letras = document.querySelector(".letters");
let word = document.querySelector(".word");
let array = ['v','E','l','d','T'];
let guess = document.querySelectorAll('.guess');
let letter = document.querySelectorAll('.letter');
let correto = 0;

//RUIDO

function ruido() {
    audio_ruido.play();
    setTimeout(desafio, 1000);
}

function desafio() {
    tv.src = "images/corredor/tv.png";
    letras.style.display = "block";
    word.style.display = "block";
    audio_ruido.pause();
}

ruido();
console.log(letter);

for(let i=0; i<letter.length; i++){
    letter[i].addEventListener('click',function(){
        click(i);
    })
}

function click(x){
    let a = letter[x].innerHTML;
    let css1 = letter[x].style.fontWeight;
    let css2 = letter[x].style.fontStyle;
    if(array.includes(a)){
        guess[array.indexOf(a)].setAttribute("style",css1);
        guess[array.indexOf(a)].setAttribute("style",css2);
        guess[array.indexOf(a)].innerText = a;
        correto++;
        if(correto === 5){
            setTimeout(function(){
                document.querySelector("#ruido").style.display = "block";
                audio_ruido.play();
            },250);
            setTimeout(function(){
                window.location.href = "nursery.html";
            },1250);
        }
    }
}