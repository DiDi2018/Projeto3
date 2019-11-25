let gatoEvent = false;

//hover gato

let gato = document.querySelector(".sala:first-child");

function hover(){
    gato.src = "images/sala/gato_cor.png";
}
function nothover(){
    if (gatoEvent === false){
        gato.src = "images/sala/gato.png";
    }
}

imageMapResize();

//texto lydia

let text1Lydia = "Umm... There's something missing in here. Why don't you try to find it?";
let text2Lydia = "There it is! That silly cat is always hiding!";
let i1 = 0;
let i2 = 0;
let audio1Run = false;
let speed = 45;
let audios = document.querySelectorAll("audio");

function typeWriter1(){
    if (i1 >= 39 && audios[0].ended && audio1Run === false){
        audio1Run = true;
        audios[1].play();
    }
    if (i1 < text1Lydia.length){
            document.querySelector(".lydiaTexto p").innerHTML += text1Lydia.charAt(i1);
            i1++;
            setTimeout(typeWriter1, speed);
    }
}

Promise.all([audios[0],audios[1]]).then(function(){
    audios[0].play();
    typeWriter1();
});

function typeWriter2(){
    if(i2 === 0){
        audios[2].play();
    }
    if (i2 < text2Lydia.length){
        document.querySelector(".lydiaTexto p").innerHTML += text2Lydia.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
        if (i2 === 42){
            winLetra("l");
        }
    }
}

//clicar gato

function gatoclick(){
    gatoEvent = true;
    document.querySelector(".lydiaTexto p").innerHTML = "";
    typeWriter2();
}

