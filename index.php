<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>An interactive experience</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
</head>
<body>
<?php include ("headerinfo.php");?>
<div id="publicidade">
    <img class="fundopopup" alt="popup" src="images/index/fundo.png" height="2480" width="3508"/>
    <img class="casa" alt="casa" src="images/index/Casa.png"/>
    <img class="mulher" alt="mulher" src="images/index/mulher.png"/>
    <h1 class="titulo">GET A CHANCE OF WINNING AN AMAZING HAPPY LIFE HOME!</h1>
    <h1 class="participar" onclick="aparecer()">PARTICIPATE NOW!</h1>
    <div class="aparecerTicket">
        <div id="fundo"></div>
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
</body>
</html>