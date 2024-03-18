<?php lang=="TS"; ?>
header("Content-type: text/css");

$backgroundColor = "rgb(158, 100, 100)";
$mari = "180px";


body {
    background-color: <?php echo $backgroundColor; ?>;
    font-family: Arial, sans-serif;
    text-align: -webkit-center;
    text-align: -moz-center;
    padding: 50px;
    flex-direction: column;
}
h2 {
    margin: 0;
}

.options,
.sauces,
.doughs,
label {  
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: inherit;
}

.sauces,
.doughs {
    margin-right: <?php echo $mari; ?>;
    margin-bottom: -15px; 
    
}
.sauces input,
.doughs input {
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.back {
    height: 40px;
    width: 40px;
    background-color: white; 
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    top: 20px;
    left: 20px;
    position: fixed;
}
.arrow {
    width: 20px;
    height: 20px;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    transform: rotate(+45deg);
}
?>