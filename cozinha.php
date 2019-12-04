<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Kitchen</title>
    <script src="JavaScript/imageMapResizer.min.js"></script>
    <script src="JavaScript/p5.min.js"></script>
    <script src="JavaScript/clmtrackr.min.js"></script>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<!--<object onmouseover = "mouseOverImage()" id="monstro2" type="image/svg+xml" data="images/cozinha/Monstro2.svg"></object>-->

<img id="monstro1" src="images/cozinha/Monstro1.png" alt="monstro1" usemap="#monstro1map"/>
<map name="monstro1map">
    <area id="areaMonstro1" shape="poly" alt="" onmouseover="mouseOverMonstro1()" onmouseout="mouseLeftMonstro1()" onclick="playaudio1()"
          coords="484,1527,987,1529,993,1574,998,1627,1014,1691,1022,1781,1016,1838,1014,1871,1024,1903,1012,1965,1018,2003,1016,2069,1010,2147,1036,2177,1126,2198,1192,2175,1202,2106,1192,2063,1151,1901,1137,1846,1134,1813,1122,1783,1137,1658,1169,1529,1245,1529,1253,1623,1265,1770,1253,1817,1249,1844,1216,1871,1222,1914,1214,1969,1210,2026,1210,2085,1267,2130,1312,2124,1363,2100,1363,2061,1347,1903,1341,1879,1355,1838,1357,1783,1357,1744,1402,1529,2003,1529,2003,1492,1995,1476,1997,979,1905,881,1807,881,1895,775,2089,654,2169,542,2163,523,2199,480,2183,460,2157,458,2214,270,1966,196,1915,399,1854,431,1791,566,1772,630,1746,664,1684,705,1560,775,1592,824,1502,883,1329,879,1312,842,1278,834,1278,765,1374,765,1378,550,1361,546,1355,683,1271,681,1269,605,1255,591,1251,278,1222,215,1184,178,1149,182,1118,194,1100,219,1075,254,1059,331,1030,519,1075,523,1100,343,1120,276,1139,241,1165,225,1188,235,1198,268,1210,311,1212,358,1212,597,1196,603,1190,830,1153,834,1153,877,975,879,765,756,628,630,581,581,503,513,468,503,446,476,425,448,435,423,458,409,482,380,495,350,442,145,300,147,286,305,288,372,317,417,354,437,352,458,368,480,311,517,319,544,317,577,339,605,335,628,388,666,376,687,321,707,356,722,433,711,509,701,544,707,709,881,554,885,482,979,501,1456,509,1480,489,1486"
    style="cursor: default;">
</map>


<!--<img id="monstro1" src="images/cozinha/Monstro1.png" alt="monstro1">-->
<audio id="audio1" src="sons/cozinha/Monstro1.ogg"></audio>


<img id="cadeira1" src="images/cozinha/cadeira.png" alt="cadeira1">
<img id="cadeira2" src="images/cozinha/cadeira.png" alt="cadeira2">
<img id="mesa" src="images/cozinha/mesa.png" alt="mesa">
<img id="carta" src="images/cozinha/carta.png" alt="carta">
<img id="monstro2" src="images/cozinha/Monstro2.png" alt="monstro2" usemap="#monstro2map">
<map name="monstro2map">
    <area id="areaMonstro2" shape="poly" alt="" onmouseover="mouseOverMonstro2()" onmouseout="mouseLeftMonstro2()" onclick="playaudio2()"
          coords="1140,1001,843,1082,775,1091,738,1113,713,1144,651,1169,607,1187,552,1206,521,1206,505,1225,496,1246,499,1265,505,1290,482,1294,460,1284,451,1266,432,1281,432,1306,404,1303,373,1322,348,1306,348,1284,370,1253,367,1207,355,1222,345,1256,330,1312,324,1340,299,1343,287,1318,287,1275,318,1160,299,1167,212,1242,181,1242,172,1223,274,1112,389,1062,417,1041,476,1028,618,1000,761,937,913,856,953,841,1012,804,1130,707,1126,437,1187,320,1190,187,1202,159,1233,140,1270,134,2073,132,2114,141,2129,151,2142,169,2148,188,2154,318,2203,420,2216,436,2210,582,2223,600,2233,665,2291,717,2304,730,2360,752,2639,690,2660,686,2676,686,2719,674,2738,662,2744,615,2756,572,2762,538,2759,494,2741,463,2722,445,2673,435,2635,417,2608,389,2682,386,2645,364,2651,336,2632,321,2670,327,2704,321,2722,327,2750,258,2790,199,2840,155,2899,124,2976,118,3075,131,3116,155,3153,180,3185,174,3213,177,3241,190,3263,183,3285,196,3297,214,3291,236,3285,258,3272,283,3269,310,3288,335,3294,351,3319,376,3331,385,3353,385,3309,425,3195,441,3142,441,3127,453,3092,469,3074,488,3052,503,3034,522,3015,534,2990,559,2962,581,2944,603,2916,630,2894,655,2869,683,2845,714,2810,742,2786,761,2776,776,2770,813,2755,847,2742,863,2748,888,2724,897,2722,929,2753,1078,2667,1091,2656,1118,2365,1149,2350,1007,2300,1013,2204,954,2201,1384,2185,1394,2188,1418,2201,1434,2190,1662,1963,1665,1941,1908,1929,1973,1920,2091,1901,2097,1920,2159,1917,2209,1917,2265,1879,2302,1852,2321,1827,2365,1765,2396,1688,2409,1617,2402,1548,2396,1524,2387,1524,2362,1539,2334,1583,2285,1620,2244,1657,2211,1660,2157,1688,2105,1688,2074,1694,1978,1706,1941,1731,1879,1750,1836,1719,1662,1641,1662,1632,1718,1641,1817,1632,1898,1641,1929,1647,1982,1644,2003,1660,2056,1663,2090,1657,2134,1660,2177,1641,2202,1526,2214,1468,2217,1364,2251,1290,2266,1222,2266,1163,2257,1123,2241,1082,2214,1097,2192,1116,2171,1147,2158,1197,2152,1240,2136,1277,2124,1308,2099,1345,2074,1370,2040,1389,2025,1404,2012,1426,1926,1414,1882,1401,1814,1389,1737,1386,1662,1144,1661,1144,1463,1144,1432,1138,1376,1144,1342"
    style="cursor:default;">
</map>


<audio id="audio2" src="sons/cozinha/Monstro2.ogg"></audio>
<img class="lydia" src="images/Lydia1.png" alt="lydia" height="1000" width="1000"/>
<div class="lydiaTexto">
    <p></p>
</div>
<audio id="apresentacao" src="sons/cozinha/ApresentacaoCozinha.ogg"></audio>
<audio id="smile" src="sons/cozinha/SmileLydia.ogg"></audio>
<audio id="psicologo" src="sons/cozinha/Psicologo.ogg"></audio>
<div id="texto">
    <img id='papel' src='images/cozinha/papel.png' alt="papelcarta">
    <div id='fundo'></div>
    <div id='textoPsicologo'>
        <p id='date'></p>
        <br>
        <br>
        <br>
        <p id='conteudo'> Dear <?php echo $_SESSION['nome'] ?>,<br>
            <br>
            I’m writing this letter to warn you! Although you won this house, you must know that there are a lot of dangers that you should be aware of.
            <br>
            <br>
            Carol must not know that I wrote this letter. If you ever want to turn off the house go to the nursery, you will know what to do.
            <br>
            <br>
            Don’t let technology blind you like it blinded the last family that lived here.
            <br>
            <br>
            Be careful!</p>
        <br>
        <br>
        <br>
        <p id='assinado'>Mr.McClean</p>
        <img id='cruz' src='images/cozinha/cruz.png' alt="cruz">
    </div>
</div>

<!--<img id="won" src="images/paper_choque.png" height="753" width="1564"/>-->

<map name="setamap">
    <area shape="rect" alt="image" href="Menus/LivingRoom.html"
          coords="207,16,319,124">
</map>

<div class="win">
    <div></div>
    <img src="images/seta.png" width="319" height="133" alt="" usemap="#setamap">
</div>

<script src="JavaScript/cozinha.js"></script>
<script src="JavaScript/main.js"></script>
</body>
</html>
