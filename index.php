<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>An interactive experience</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<header>
    <div id="fundo_index" onclick="aparecer()"></div>
    <div id="popup">
        <img id='cruz_index' src='images/index/cruz.png' alt="cruz" onclick="desaparecer()">
        <img class="fundopopup" src="images/index/fundo.png" height="2480" width="3508"/>
        <img class="casa" src="images/index/Casa.png"/>
        <h1>GET A CHANCE OF WINING AN AMAZING HAPPY LIFE HOME!</h1>

        <form action="waiting.html" method="POST" >
            <h2>Enter now</h2>
            <input type="text" name="name" required><br>
            <label>
                    <input type="submit" value="Submit">
            </label>
        </form>
    </div>
</header>
<script src="Indexx.js"></script>
</body>
</html>