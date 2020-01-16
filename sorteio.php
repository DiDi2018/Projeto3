<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Happy Life Home</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>

<body style="overflow: hidden">

<header>
    <img class="sobre" src="images/header/sobre.png" alt=""/>

    <div class="creditos">
        <img class="maquina" src="images/header/maquina3.png" alt=""/>
        <div class="fundo"></div>
    </div>
</header>

<img src="images/sorteio/fundo.png" id="triangulo">


    <div id="id_1">
        <p class="txt_won"> The draw has just started and we already have a winner! Click on the hat to find out!</p>
        <a id="botao_start" href="javascript:FadeOut()"> START TOUR </a>
    </div>
    <img class="sorteiochapeu" alt="chapeu" src="images/sorteio/chapeu.png" onclick="revelacao()"/>

    <div class="id_2">
        <img id="bilhete" src="images/sorteio/ticketblue.png" alt="ticket">
        <p id="vencedor"> <?php echo $_SESSION['nome'] ?></p>
    </div>

<audio id="audio_sorteio" src="sons/index/win_sorteio.wav"></audio>

<script src="JavaScript/sorteio.js"></script>
<script src="JavaScript/help.js"></script>

</body>
</html>