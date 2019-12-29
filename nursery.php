<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nursery</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
    <script src="https://aframe.io/releases/1.0.2/aframe.min.js"></script>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
</head>

<body>
<header>
    <p id='php'> Dear <?php echo $_SESSION['nome'] ?>,</p>
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

<img id="ruido" src="images/corredor/ruido.jpg" alt=""
     style="width:100%; height: 100vh; position: absolute; display: none; z-index: 10">
<audio id="audio_ruido" src="sons/corredor/ruido.mp3"></audio>

<a-scene id="fundo_nursery" background="color: yellow" vr-mode-ui="enabled: false">
    <a-assets>
        <img alt="" src="images/nursery/arvore.png" height="741" width="1472"/>
        <img alt="" src="images/nursery/Bush.png" height="500" width="624"/>
        <img alt="" src="images/nursery/arvoredo.png" height="256" width="256"/>
        <img alt="" src="images/nursery/bush_yellow.png" height="500" width="624"/>

        <img alt="leao" src="images/nursery/leao.png"/>
        <img alt="" src="images/nursery/leao_ruido.png" height="582" width="900"/>

        <img alt="abutre" src="images/nursery/abutre.png" height="582" width="1080"/>
        <img alt="" src="images/nursery/abutre_ruido.png" height="582" width="1080"/>

        <img alt="zebra" src="images/nursery/zebra.png"/>
        <img alt="" src="images/nursery/zebra_ruido.png" height="582" width="840"/>

        <img alt="girafa" src="images/nursery/girafa.png" height="1080" width="582"/>
        <img alt="" src="images/nursery/girafa_ruido.png" height="1080" width="582"/>

        <img alt="leao_amarelo" src="images/nursery/leao_amarelo.png"/>
        <img alt="" src="images/nursery/leao_amarelo_ruido.png" height="582" width="840"/>

        <img alt="" src="images/nursery/painel.jpg"/>
        <img alt="carta" src="images/cozinha/carta.png">

    </a-assets>

    <!--Leões, zebras, girafas e abutres-->
    <a-image id="abutre" src="images/nursery/abutre.png" position="-2 8 -10" height="3" width="6" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image id="abutre2" src="images/nursery/abutre.png" position="-2 15 40" height="5" width="8" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image id="leao" src="images/nursery/leao.png" position="19 -4 -15" height="15" width="25" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image id="leao_amarelo" src="images/nursery/leao_amarelo.png" position="-80 -6 -40" rotation="0 60 0" height="20"
             width="25" depth="1" material="alphaTest: 0.5"></a-image>
    <a-image id="leao_amarelo2" src="images/nursery/leao_amarelo.png" position="90 -6 -15" rotation="0 60 0" height="20"
             width="25" depth="1" material="alphaTest: 0.5"></a-image>
    <a-image id="zebra" src="images/nursery/zebra.png" position="4 -12 90" height="30" width="30" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image id="girafa" src="images/nursery/girafa.png" position="-50 -6 -90" height="90" width="50" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image id="girafa2" src="images/nursery/girafa.png" position="100 -12 180" height="90" width="50" depth="1"
             material="alphaTest: 0.5"></a-image>

    <!--Arvore-->
    <a-image src="images/nursery/arvore.png" position="700 -6 -500" height="400" width="400" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="-400 -6 -1000" height="900" width="900" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="700 -6 500" height="400" width="400" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="-400 -6 1000" height="900" width="900" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="1600 -6 250" rotation="0 60 0" height="400" width="400" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="2000 -6 100" rotation="0 60 0" height="250" width="250" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="-4000 -6 500" rotation="0 60 0" height="900" width="900"
             depth="1" material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvore.png" position="-1500 -6 500" rotation="0 90 0" height="900" width="900"
             depth="1" material="alphaTest: 0.5"></a-image>

    <!--Arbustos-->
    <a-image src="images/nursery/Bush.png" position="8 -10 -50" height="20" width="20" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/bush_yellow.png" position="-10 -10 -40" height="20" width="20" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvoredo.png" position="-50 -12 -40" height="20" width="20" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/arvoredo.png" position="50 -12 20" rotation="0 60 0" height="20" width="20" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/Bush.png" position="-50 -10 25" rotation="0 90 0" height="25" width="25" depth="1"
             material="alphaTest: 0.5"></a-image>
    <a-image src="images/nursery/bush_yellow.png" position="-210 -20 -10" rotation="0 60 0" height="25" width="25"
             depth="1" material="alphaTest: 0.5"></a-image>

    <!--Tablet-->
    <a-image src="images/nursery/painel.jpg" position="90 10 250" height="30" width="20" depth="1"
             material="alphaTest: 0.5"></a-image>

    <!--Carta do Psicólogo-->
    <a-entity cursor="rayOrigin: mouse"></a-entity>
    <a-image id="cartaNursery" src="images/cozinha/carta.png" position="0 -11 -30" height="6" width="6" depth="1" material="alphaTest: 0.5" rotation="0 0 20" onclick="aparecer()"></a-image>
</a-scene>
<audio id="psicologofinal" src="sons/nursery/psicologofinal.mp3"></audio>
<div id="textoCartaNursery">
    <img class='folha' src='images/cozinha/papel.png' alt="papelcarta">
    <div class='fundo'></div>
    <img class='cruzNursery' src='images/cozinha/cruz.png' alt="cruz" onclick="sair()">
    <div id='textoPsicologo'>
        <p id='date'></p>
        <br>
        <p id='nome'></p>
        <p id='p1'> </p>
        <p id='p2'></p>
        <p id='p3'> </p>
        <br>
        <p id='assinado'></p>
    </div>
</div>

<div class="lydiaTexto" style="z-index: 10">
    <p style="background-color: yellow"></p>
</div>

<audio id="grito" src="sons/corredor/ScreamingPeople.ogg"></audio>

<img class="lydia_nursery" src="images/Lydia1.png" height="1000" width="1000" alt=""/>
<div id="texto_erro">
    <p>ERROR CONNECTION </p>
</div>

<audio src="sons/nursery/text1Lydia.mp3"></audio>

<script src="JavaScript/Nursery.js"></script>

</body>
</html>