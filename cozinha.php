<?php
session_start();
$_SESSION['name'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Kitchen</title>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/p5.dom.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<!--<object onmouseover = "mouseOverImage()" id="monstro2" type="image/svg+xml" data="images/cozinha/Monstro2.svg"></object>-->
<img id="monstro1" src="images/cozinha/Monstro1.png" alt="monstro1">
<audio id="audio1" src="sons/cozinha/Monstro1.ogg"></audio>


<img id="cadeira1" src="images/cozinha/cadeira.png" alt="cadeira1">
<img id="cadeira2" src="images/cozinha/cadeira.png" alt="cadeira2">
<img id="mesa" src="images/cozinha/mesa.png" alt="mesa">
<img id="carta" src="images/cozinha/carta.png" alt="carta">
<img id="monstro2" src="images/cozinha/Monstro2.png" alt="monstro2" >

<audio id="audio2" src="sons/cozinha/Monstro2.ogg"></audio>
<img class="lydia" src="images/Lydia1.png" alt="lydia" height="1000" width="1000"/>
<div class="lydiaTexto">
    <p></p>
</div>
<audio id="apresentacao" src="sons/cozinha/ApresentacaoCozinha.ogg"></audio>
<audio id="smile" src="sons/cozinha/SmileLydia.ogg"></audio>
<audio id="psicologo" src="sons/cozinha/Psicologo.ogg"></audio>
<div id="texto">
    <img id='papel' src='images/cozinha/papel.png' alt="papelcarta">
    <div id='fundo'></div>
    <div id='textoPsicologo'>
        <p id='date'></p>
        <br>
        <br>
        <br>
        <p id='conteudo'> Dear <?php $_POST['name'] ?>,<br>
            <br>
            I’m writing this letter to warn you! Although you won this house, you must know that there are a lot of dangers that you should be aware of.
            <br>
            <br>
            Carol must not know that I wrote this letter. If you ever want to turn off the house go to the nursery, you will know what to do.
            <br>
            <br>
            Don’t let technology blind you like it blinded the last family that lived here.
            <br>
            <br>
            Be careful!</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <p id='assinado'>Mr.McClean</p>
        <img id='cruz' src='images/cozinha/cruz.png' alt="cruz">
    </div>
</div>

<img id="won" src="images/paper_choque.png" height="753" width="1564"/>
<div class="win">
    <div>
    </div>
    <img src="images/seta.png" width="319" height="133" alt="" usemap="#setamap">
</div>
<script src="JavaScript/cozinha.js"></script>
<script src="JavaScript/main.js"></script>
</body>
</html>
