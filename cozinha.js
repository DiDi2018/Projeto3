var clicar=0;
var carta=  document.getElementById('carta');

carta.addEventListener("click", ShowLetter);

    function ShowLetter() {
        clicar++;
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
        document.getElementById("texto").style.display="block";
    }

let cruz = document.getElementById("cruz");

function sair() {
    document.getElementById('texto').style.display = "none";
}
cruz.addEventListener("click", sair);
document.addEventListener("click", fecharfora);

function fecharfora(evt) {
    let papel = document.getElementById('papel').contains(evt.target);
    let textoPsicologo = document.getElementById('textoPsicologo').contains(evt.target);
    let carta = document.getElementById('carta').contains(evt.target);

    if (!papel && !textoPsicologo && !carta) {
        return sair();
    }
}

    if (clicar>0){
        function mouseOverMonstro1() {
            var monstro1 = document.querySelector("#monstro1"); // works
            monstro1.src = "images/cozinha/Monstro1.1.png";
        }
        function mouseLeftMonstro1() {
            var monstro1 = document.querySelector("#monstro1"); // works
            monstro1.src = "images/cozinha/Monstro1.png";
        }

        function mouseOverMonstro2() {
            var monstro2 = document.querySelector("#monstro2"); // works
            monstro2.src = "images/cozinha/Monstro2.1.png";
        }
        function mouseLeftMonstro2() {
            var monstro2 = document.querySelector("#monstro2"); // works
            monstro2.src = "images/cozinha/Monstro2.png";
        }
    }
