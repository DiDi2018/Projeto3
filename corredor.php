<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
    <title>Hallway</title>
    <script src="JavaScript/imageMapResizer.min.js"></script>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
    <link rel="stylesheet" href="main.css">
</head>

<body id="body_fade" style="position: fixed; width: 100%;">

<?php include 'headerinfo.php' ?>

<main style="height: 100%;">
    <audio id="audio_ruido" src="sons/corredor/ruido.wav"></audio>
    <audio id="grito" src="sons/corredor/ScreamingPeople.ogg"></audio>
    <audio id="audio1" src="sons/corredor/text1Lydia.mp3"></audio>
    <audio id="audio2" src="sons/corredor/text2Lydia.mp3"></audio>

    <div class="scene">
        <img class="hallway tv" id="tv" src="images/corredor/tv.png" height="958" width="1023" alt="" style="transform: translateZ(-2500px)"/>

        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(200%) translateY(110%) translateZ(-2000px) rotate(-70deg);"/>
        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(-240%) translateY(90%) translateZ(-2000px) rotate(40deg);"/>

        <img class="hallway bush" src="images/corredor/Bush.png" height="348" width="612" alt="" style="width: 30%; transform: translateX(-150%) translateY(280%) translateZ(-1800px)"/>

        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(200%) translateY(110%) translateZ(-1200px) rotate(-100deg);"/>
        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(-240%) translateY(110%) translateZ(-1200px) rotate(55deg);"/>

        <img class="hallway bush" src="images/corredor/Bush.png" height="348" width="612" alt="" style="width: 50%; transform: translateX(95%) translateY(140%) translateZ(-1000px);"/>

        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(200%) translateY(110%) translateZ(-600px) rotate(-70deg);"/>
        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(-240%) translateY(110%) translateZ(-650px) rotate(85deg);"/>

        <img class="hallway bush" src="images/corredor/Bush.png" height="348" width="612" alt="" style="width: 35%; transform: translateX(-110%) translateY(190%) translateZ(-310px);"/>

        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(260%) translateY(105%) translateZ(-350px) rotate(-110deg)"/>
        <img class="hallway lamp" src="images/corredor/lamp_pb.png" width="" height="" alt="" style="transform: translateX(-260%) translateY(110%) translateZ(-300px) rotate(105deg)"/>

        <img class="hallway bush" src="images/corredor/Bush.png" height="348" width="612" alt="" style="width: 45%; transform: translateX(110%) translateY(150%) translateZ(-200px);"/>

        <img class="hallway lamp" src="images/corredor/lamp_yellow.png" width="" height="" alt="" style="transform: translateX(200%) translateY(115%) translateZ(0) rotate(-40deg)"/>
        <img class="hallway lamp" src="images/corredor/lamp_yellow.png" width="" height="" alt="" style="transform: translateX(-240%) translateY(110%) translateZ(0) rotate(50deg)"/>

        <img class="hallway bush" src="images/corredor/Bush.png" height="348" width="612" alt="" style="width:35%; top: 70%; left: -17%; transform: translateZ(0);"/>
    </div>

    <img class="lydia" src="images/Lydia1.png" height="1000" width="1000" alt="Lydia"/>
    <div class="lydiaTexto">
        <p></p>
    </div>

    <div class="win">
        <div>
        </div>
        <a><img src="images/seta.png" width="319" height="133" alt="" onclick="FadeOut()" style="cursor: pointer"></a>
    </div>
</main>

<script src="JavaScript/corredor.js"></script>
<script src="JavaScript/main.js"></script>
<script src="JavaScript/help.js"></script>

</body>

</html>