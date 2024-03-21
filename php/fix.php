<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $satisfaction = $_POST["satisfaction"];
    $feedback = $_POST["feedback"];

    header("Location:palaute.html");
    exit;
}
?>