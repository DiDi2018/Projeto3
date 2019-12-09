<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sorteio</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
</head>

<body>

<header>
    <div id="id_1">
        <p class="txt_won"> The draw has just started and we already have a winner! Click on the hat to find out!</p>
        <a id="botao_start" href="acenar.html"> START TOUR </a>
    </div>
    <img class="sorteiochapeu" alt="chapeu" src="images/sorteio/chapeu.png" onclick="revelacao()"/>

    <div class="id_2">
        <img id="bilhete" src="images/sorteio/ticketblue.png" alt="ticket">
        <p id="vencedor"> <?php echo $_SESSION['nome'] ?></p>
    </div>

</header>
<script src="JavaScript/sorteio.js"></script>

</body>
</html>