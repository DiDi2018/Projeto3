<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TV Code</title>
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
</head>

<body>

<?php include 'headerinfo.php' ?>

<main>
    <audio id="audio_ruido" src="sons/corredor/ruido.mp3"></audio>
    <audio id="audio_lydia" src="sons/corredor/textoLydia.mp3"></audio>

    <img id="ruido" src="images/corredor/ruido.jpg" alt="" style="width:100%; height: 100vh; position: absolute; display: none; z-index: 10">

    <img class="code" src="images/corredor/tv_ruido.png" height="958" width="1023" alt=""/>

    <div class="letters" style="display: none">
        <a class="letter" style="top: 20%; left: 30%;">W</a>
        <a class="letter" style="top: 25%; left: 53%;">U</a>
        <a class="letter" style="top: 15%; left: 40%;">a</a>
        <a class="letter" style="top: 40%; left: 33%;">J</a>
        <a class="letter" style="top: 30%; left: 45%;">k</a>
        <a class="letter" style="top: 45%; left: 55%;">I</a>
        <a class="letter" style="top: 32%; left: 27%; font-weight: lighter">E</a>
        <a class="letter" style="top: 20%; left: 48%;">l</a>
        <a class="letter" style="top: 40%; left: 50%; font-style: italic">v</a>
        <a class="letter" style="top: 26%; left: 38%;">d</a>
        <a class="letter" style="top: 45%; left: 42%; font-weight: bold">T</a>
    </div>

    <div class="word" style="display: none">
        <ul>
            <li class="guess">_</li>
            <li class="guess">_</li>
            <li class="guess">_</li>
            <li class="guess">_</li>
            <li class="guess">_</li>
        </ul>
    </div>

    <img class="lydia" src="images/Lydia1.png" height="1000" width="1000" alt="Lydia"/>
    <div class="lydiaTexto">
        <p></p>
    </div>
</main>


<script src="JavaScript/codigo.js"></script>
<script src="JavaScript/help.js"></script>

</body>
</html>