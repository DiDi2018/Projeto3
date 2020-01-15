<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Living-Room</title>
    <link rel="stylesheet" href="main.css">
    <script src="JavaScript/imageMapResizer.min.js"></script>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>

<body style="position: fixed; width: 100%;">

    <img class="sala" src="images/sala/gato.png" height="1828" width="1368" alt="" usemap="#catmap"/>
    <img class="sala" src="images/sala/sofa_pb.png" height="655" width="1458" alt=""/>
    <img class="sala" src="images/sala/sala_table_pb.png" height="484" width="750" alt=""/>
    <img class="sala" src="images/sala/lamp.png" height="1000" width="262" alt=""/>
    <img class="sala" src="images/sala/comando_pb.png" height="600" width="800" alt=""/>
    <img class="sala" src="images/sala/TVLisa.png" height="510" width="378" alt=""/>
    <img class="sala" src="images/sala/carpete.png" height="428" width="920" alt=""/>
    <div id="parede" style="background-color:#76d9fc ; width:100%; height:58%; z-index:-10; position:fixed;"></div>

    <map name="catmap">
        <area shape="poly" alt="image" onmouseover="hover()" onmouseout="nothover()" onclick="gatoclick()"
              coords="529,1750,597,1764,621,1766,627,1783,680,1793,757,1788,801,1751,889,1762,932,1762,987,1746,1060,1741,1085,1729,1184,1723,1267,1701,1285,1678,1296,1585,1322,1530,1338,1450,1342,1378,1324,1317,1316,1236,1314,1167,1256,1049,1204,956,1152,898,1080,846,1126,839,1135,837,1219,834,1287,834,1309,831,1328,807,1330,761,1343,754,1343,550,1337,548,1348,47,1333,21,1304,12,111,9,70,3,40,17,24,36,31,545,23,554,26,753,34,766,34,806,44,825,60,839,230,839,242,842,474,846,470,971,555,1198,593,1326,609,1439,494,1460,436,1492,364,1571,350,1603,367,1646,451,1680,507,1698,536,1676,534,1646,506,1600,557,1569,601,1564,624,1569,626,1608,591,1668,543,1680,517,1711">
    </map>

    <img class="lydia" src="images/Lydia1.png" height="1000" width="1000" alt="Lydia"/>
    <div class="lydiaTexto">
        <p></p>
    </div>

    <div class="win">
        <div>
        </div>
        <a><img src="images/seta.png" width="319" height="133" alt=""  onclick="FadeOut()"></a>
    </div>

    <?php include 'headerinfo.php' ?>

    <audio src="sons/sala/1_1.mp3"></audio>
    <audio src="sons/sala/3.mp3"></audio>

    <script src="JavaScript/sala.js"></script>
    <script src="JavaScript/main.js"></script>
    <script src="JavaScript/help.js"></script>

</body>

</html>