function mouseOverImage() {
    var monstro2 = document.querySelector("#monstro2"); // works
    monstro2.src = "images/cozinha/Monstro1.1.png";
}
function mouseLeftImage() {
    var monstro2 = document.querySelector("#monstro2"); // works
    monstro2.src = "images/cozinha/Monstro1.png";
}

var carta=  document.getElementById('carta');
carta.addEventListener("click", ShowLetter);

function ShowLetter() {
    text="<img id='papel' src='images/cozinha/papel.png'>";
    document.getElementById('texto').innerHTML = text;

}