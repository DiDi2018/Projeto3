<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bedroom</title>
    <script src="JavaScript/imageMapResizer.min.js"></script>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>

<body onload="startTime()">

<?php include 'headerinfo.php' ?>

<main>
    <!--Objetos quarto-->
    <img id="cortina_esq" alt="cortina_esq" src="images/quarto/cortina_esq.png" height="2384" width="1026"/>
    <img id="cortina_dir" alt="cortina_dir" src="images/quarto/cortina_dir.png" height="2480" width="1230"/>
    <img id="cama" alt="cama" src="images/quarto/cama.png" height="1366" width="3029" usemap="#bedmap"/>
    <map name="bedmap">
        <area shape="poly" alt="image" onmouseover="mouseOverCama()" onmouseout="mouseLeftCama()" onclick="audio_cama_f()"
              coords="577,1301,612,1301,622,1178,2371,1175,2395,1295,2424,1290,2422,996,2400,964,2422,924,2430,862,2422,817,2414,753,2250,595,2264,582,2267,552,2285,534,2293,467,2347,510,2403,552,2486,582,2595,627,2657,651,2726,731,2791,798,2791,846,2807,868,2828,820,2863,841,2849,878,2860,905,2879,881,2903,913,2924,865,2962,894,2956,822,2919,761,2785,681,2785,657,2627,520,2561,448,2464,381,2523,435,2443,405,2462,360,2387,306,2336,360,2315,357,2312,341,2283,341,2267,328,2181,346,2186,56,826,61,839,345,753,323,697,356,636,310,556,366,572,398,507,428,550,382,481,425,387,511,390,527,229,663,237,679,96,757,66,799,48,858,48,898,90,866,109,912,133,890,152,912,165,879,157,847,168,821,189,829,211,866,219,850,224,797,261,762,275,730,288,738,326,706,363,658,539,580,625,545,670,511,716,465,732,524,745,545,753,580,764,601,657,740,604,842,601,946,561,1000">
    </map>
    <img id="relogio" alt="relogio" src="images/quarto/relogio.png" height="230" width="460"/>
    <map name="clockmap">
        <area shape="poly" alt="image" onmouseover="mouseOverRelogio()" onmouseout="mouseLeftRelogio()" onclick="audio_relogio_f()"
              coords="26,57,241,57,235,71,219,72,123,71,105,73,104,203,120,215,447,202,448,75,322,71,300,14,291,9,269,9,257,17,252,34,25,35,17,11,9,25,8,48,10,66,15,80,23,70">
    </map>
    <img id="poltrona" alt="poltrona" src="images/quarto/poltrona.png" height="1000" width="1000"/>
    <img id="janela" src="images/quarto/window_pb.png" height="1120" width="1280" alt="janela"/>
    <img id="almofada" alt="almofada" src="images/quarto/almofada2.png"/>

    <div id="horas"></div>
    <div id="quadrado"></div>
    <div id="chao"></div>

    <!--Sons quarto-->
    <audio id="audio_cama" src="sons/quarto/audio_cama.mp3"></audio>
    <audio id="audio_cortina" src="sons/quarto/audio_cortina.wav"></audio>
    <audio id="audio_relogio" src="sons/quarto/audio_relogio.mp3"></audio>

    <!--Lydia-->
    <audio id="audio_q1" src="sons/quarto/audio_1.mp3"></audio>
    <audio id="audio_q2" src="sons/quarto/audio_2.mp3"></audio>
    <img class="lydia" src="images/Lydia1.png" alt="lydia" height="1000" width="1000"/>
    <div class="lydiaTexto">
        <p></p>
    </div>

    <div class="win">
        <div>
        </div>
        <a href="Menus/Nursery.html"><img src="images/seta.png" width="319" height="133" alt=""></a>
    </div>

</main>

<script src="JavaScript/quarto.js"></script>
<script src="JavaScript/main.js"></script>
<script src="JavaScript/help.js"></script>

</body>
</html>