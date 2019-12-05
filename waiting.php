<?php
session_start();
$_SESSION['nome']=$_POST['name'];
?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Processing</title>
        <link rel="stylesheet" href="main.css">
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
    </head>
    <body>
    <header>
        <div id="quadrado_waiting"></div>
        <div class="txt_processing">
            <p>We are processing your submission...</p>
        </div>
        <img id="relogio_processing" src="images/relogio.png" alt="relogio">
        <a href="sorteio.php" id="botao_start">START TOUR</a>
    </header>
    <script src="JavaScript/waiting.js"></script>
    </body>
    </html><?php