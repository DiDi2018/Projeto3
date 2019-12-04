<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sorteio</title>
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <div class="txt_won">
        <p>Hello <?php echo $_SESSION['nome'] ?>!</p>
        <p>We are happy to inform you that you've won the draw! Your visit to the Happy Life Home was scheduled for today. See you there.</p>
        <a href="cozinha.php" id="botao_start">START TOUR</a>
    </div>
</header>
</body>
</html>