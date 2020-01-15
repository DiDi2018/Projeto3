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
    aparecerTexto();
}

function begin(){
    if(document.readyState === 'complete'){
        ruido();
    }
    else {
        setTimeout(begin,50);
    }
}

begin();

//CLICAR NAS LETRAS

for(let i=0; i<letter.length; i++){
    letter[i].addEventListener('click',function(){
        click(i);
    })
}

function click(x){
    let a = letter[x].innerHTML;
    let css1 = letter[x].style.fontWeight;
    let css2 = letter[x].style.fontStyle;
    if(array.includes(a) && guess[array.indexOf(a)].innerText === '_'){
        if(css1 !== ""){
            guess[array.indexOf(a)].setAttribute("style","font-weight: " + css1);
        }
        else if(css2 !== ""){
            guess[array.indexOf(a)].setAttribute("style","font-style:" + css2);
        }
        guess[array.indexOf(a)].innerText = a;
        correto++;
        if(correto === 5){
            setTimeout(function(){
                document.querySelector("#ruido").style.display = "block";
                audio_ruido.play();
            },250);
            setTimeout(function(){
                window.location.href = "nursery.php";
            },1250);
        }
    }
}

//LYDIA

let i =0;
let texto = "To unlock the room guess the code by clicking on the letters you received and finding the missing one.";
let speed = 40;
let audioLydia = document.getElementById("audio_lydia");

function aparecerTexto() {
    if (i === 0){
        audioLydia.play();
    }
    if(i < texto.length){
        document.querySelector(".lydiaTexto p").innerHTML += texto.charAt(i);
        i++;
        setTimeout(aparecerTexto, speed);
    }
    else {
        remover();
    }
}

function remover(){
    if(i > 0 && audioLydia.ended){
        let tmp = document.querySelector(".lydiaTexto p").innerHTML;
        tmp = tmp.slice(0,i -1);
        document.querySelector(".lydiaTexto p").innerHTML = tmp;
        i = i - 1;
        setTimeout(remover, 30);
    }
    if(!audioLydia.ended){
        setTimeout(remover, 30);
    }
}