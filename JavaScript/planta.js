let kitchen = document.querySelector("#kitchen");
let livingroom = document.querySelector("#livingroom");
let bedroom = document.querySelector("#bedroom");
let nursery = document.querySelector("#nursery");


//Kitchen
function hoverkitchen1() {
    kitchen.src = "../images/plantas/kitchen1.png";
}
function nothoverkitchen() {
    kitchen.src = "../images/plantas/kitchen.png";
}

//LivingRoom
function hoverlivingroom1() {
    livingroom.src = "../images/plantas/livingroom1.png";
}
function hoverlivingroom2() {
    livingroom.src = "../images/plantas/livingroom2.png";
}
function nothoverlivingroom() {
    livingroom.src = "../images/plantas/livingroom.png";
}

//Bedroom
function hoverbedroom1() {
    bedroom.src = "../images/plantas/bedroom1.png";
}
function hoverbedroom2() {
    bedroom.src = "../images/plantas/bedroom2.png";
}
function hoverbedroom3() {
    bedroom.src = "../images/plantas/bedroom3.png";
}
function nothoverbedroom() {
    bedroom.src = "../images/plantas/bedroom.png";
}

//Nursery
function hovernursery1() {
    nursery.src = "../images/plantas/nursery1.png";
}
function hovernursery2() {
    nursery.src = "../images/plantas/nursery2.png";
}
function hovernursery3() {
    nursery.src = "../images/plantas/nursery3.png";
}
function hovernursery4() {
    nursery.src = "../images/plantas/nursery4.png";
}
function nothovernursery() {
    nursery.src = "../images/plantas/nursery.png";
}

//textoLydia

let audio = document.querySelector("audio");
let i = 0;
let p = document.querySelector(".lydiaTexto p");
let texto = p.innerHTML;
p.innerHTML = "";
p.removeAttribute("style");

audio.play();
typewriter();

function typewriter (){
    if (i < texto.length){
        p.innerHTML += texto.charAt(i);
        i++;
        setTimeout(typewriter,50);
    }
    else {
        removeText();
    }
}

function removeText(){
    if(i>0 && audio.ended){
        let tmp = p.innerHTML;
        tmp = tmp.slice(0,i -1);
        p.innerHTML = tmp;
        i = i - 1;
        setTimeout(removeText, 30);
    }
    if(!audio.ended){
        setTimeout(removeText, 30);
    }
}

imageMapResize();