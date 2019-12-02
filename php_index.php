<?php

session_start();
$nome = $_POST['name'];
$_SESSION['name']=$nome;

?>