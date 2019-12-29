<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>An interactive experience</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700,700i&display=swap" rel="stylesheet">
</head>
<body>

<header>
    <img class="sobre" src="images/header/sobre.png" alt=""/>

    <div class="creditos">
        <img class="maquina" src="images/header/maquina3.png" alt=""/>
        <div class="fundo"></div>
    </div>
</header>

<div id="publicidade">
    <img class="fundopopup" alt="popup" src="images/index/fundo.png" height="2480" width="3508"/>
    <img class="casa" alt="casa" src="images/index/Casa.png"/>
    <img class="mulher" alt="mulher" src="images/index/mulher.png"/>
    <h1 class="titulo">GET A CHANCE OF WINNING AN AMAZING HAPPY LIFE HOME!</h1>
    <h1 class="participar" onclick="aparecerPopUp()">PARTICIPATE NOW!</h1>
    <div class="aparecerTicket">
        <div class="fundo"></div>
        <img class="ticket" alt="ticket" src="images/index/ticket.png"/>
        <form class="formParticipar" action="waiting.php" method="POST">
            <h2>Please enter your name:</h2>
            <label>
                <input type="text" name="name" required>
            </label>
            <br>
            <label>
                <button type="submit">Submit</button>
                <br>
            </label>
        </form>
    </div>
</div>
<audio id="audio_pub" src="sons/index/pub.ogg"></audio>

<script src="JavaScript/Indexx.js"></script>
<script src="JavaScript/help.js"></script>

</body>
</html>