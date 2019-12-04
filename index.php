<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>An interactive experience</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <div id="fundo_index"></div>
    <div id="popup">
        <img id='cruz_index' src='images/index/cruz.png' alt="cruz" onclick="desaparecer()">
        <img class="fundopopup" alt="""popup" src="images/index/fundo.png" height="2480" width="3508"/>
        <img class="casa" alt="casa" src="images/index/Casa.png"/>
        <h1>GET A CHANCE OF WINING AN AMAZING HAPPY LIFE HOME!</h1>

        <form action="waiting.php" method="POST" >
            <h2>Enter now</h2>
            <input type="text" name="name" required><br>
            <label>
                <button type="submit">Submit</button><br>
            </label>
        </form>
    </div>
    <audio id="audio_pub" src="sons/pub.ogg"></audio>
</header>
<script src="Indexx.js"></script>
</body>
</html>