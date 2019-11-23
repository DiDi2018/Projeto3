let gato = document.querySelector(".sala:first-child");

function hover(){
    gato.src = "images/sala/gato_cor.png";
}
function nothover(){
    gato.src = "images/sala/gato.png";
}
imageMapResize();

let text1Lydia = "Umm... There's something missing in here. Why don't you try to find it?";
let i1 = 0;
let speed = 50;

function typeWriter1(){
    let audios = document.querySelectorAll("audio");
    if (i1 === 0){
        audios[0].play();
    }
    if (i1 >= 39 && !audios[0].onplaying){
        audios[1].play();
    }
    if (i1 < text1Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
        i1++;
        setTimeout(typeWriter1, speed);
    }
}

typeWriter1();