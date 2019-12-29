<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sorteio</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>

<body style="overflow: hidden">

<header>
    <img class="sobre" src="images/header/sobre.png" alt=""/>

    <div class="creditos">
        <!--<div class="creditostexto">
            <h4>Made By</h4>
            <p>Diana Dias</p><br>
            <p>Maria Figueira</p><br>
            <p>Maria Soares</p>
            <h4>Guidance of</h4>
            <p>Ana Boavida, Luís Pereira and Pedro Martins</p>
            <h4>Design and Multimedia</h4>
            <p>Project 3 - Multimedia Applications</p>
            <h4>University of Coimbra</h4>
            <p> Faculty of Sciences and Technology</p>
            <h5>2019/2020</h5>
        </div>-->
        <img class="maquina" src="images/header/maquina3.png" alt=""/>
        <div class="fundo"></div>
    </div>
</header>

<div id="triangulo1"></div>
<div id="triangulo2"></div>


    <div id="id_1">
        <p class="txt_won"> The draw has just started and we already have a winner! Click on the hat to find out!</p>
        <a id="botao_start" href="acenar.html"> START TOUR </a>
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