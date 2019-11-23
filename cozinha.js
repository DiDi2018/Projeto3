var clicar=0;
var carta=  document.getElementById('carta');

carta.addEventListener("click", ShowLetter);
function ShowLetter() {
    text="<img id='papel' src='images/cozinha/papel.png'> <div id='fundo'></div> <div id='textoPsicologo'><p id='date'></p></br></br></br><p id='conteudo'> Dear Nome, </br></br>" +
        "\n" + "\n" + "I’m writing this letter to warn you! Although you won this house, you must know that there are a lot of dangers that you should be aware of. \n" + "\n" +
        "</br></br>Carol must not know that I wrote this letter. If you ever want to turn off the house go to the nursery, you will know what to do. \n" +
        "\n" +
        "</br></br>Don’t let technology blind you like it blinded the last family that lived here. </br></br>Be careful!</p></br></br></br></br></br></br> <p id='assinado'>Mr.McClean</p></div> ";
    document.getElementById('texto').innerHTML = text;
    clicar++;
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
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
