<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>...</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>

<body class="notFadeIn">

<header>
    <img class="sobre" src="images/header/sobre.png" alt=""/>

    <div class="creditos">
        <img class="maquina" src="images/header/maquina3.png" alt=""/>
        <div class="fundo"></div>
    </div>
</header>

<main>
    <img id="ruido" src="images/corredor/ruido.jpg" alt="">
    <audio id="audio_ruido" src="sons/corredor/ruido.mp3"></audio>

    <div id="final">
        <div style="opacity: 0; left: 5%; top: 5%">
            <img alt="Waving image" src="">
            <p>Something</p>
        </div>

        <div style="opacity: 0; left: 35%; top: 20%">
            <img alt="Kitchen image" src="">
            <p>Look at that fake smile</p>
        </div>

        <div style="opacity: 0; right: 10%; top: 40%">
            <img alt="Living-room image" src="">
            <p>Something</p>
        </div>

        <div style="opacity: 0; left: 10%; top: 40%">
            <img alt="Bedroom image" src="">
            <p>Something</p>
        </div>

        <div style="opacity: 0; right: 10%; top: 15%">
            <img alt="Hallway image" src="">
            <p>Something</p>
        </div>
    </div>

    <div id="texto_erro">
        <p>ERROR CONNECTION </p>
    </div>

</main>

<script src="JavaScript/final.js"></script>
<script src="JavaScript/help.js"></script>

</body>