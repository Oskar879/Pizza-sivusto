<?php
header("Content-type: text/css");

$backgroundColor = "rgb(158, 100, 100)";
$marginRight = "180px";
$margin = "0"; 
$display = "flex";
$flexdirection = "column";
$alignitems = "center";
$justifycontent= "center";
?>
body {
    background-color: <?php echo $backgroundColor; ?>;
    font-family: Arial, sans-serif;
    text-align: -webkit-center;
    text-align: -moz-center;
    padding: 50px;
    flex-direction: <?php echo $flexdirection; ?>;
}
h2 {
    margin: <?php echo $margin; ?>;
}

.options,
.sauces,
.doughs,
#label {  
    display: <?php echo $display; ?>;
    flex-direction: <?php echo $flexdirection; ?>;
    width: 30%;
    align-items: <?php echo $alignitems; ?>;
    justify-content: <?php echo $justifycontent; ?>;
    text-align: inherit;
}

.sauces,
.doughs {
    margin-right: 180px;
    margin-bottom: -15px; 
    
}
.sauces input,
.doughs input {
    display: <?php echo $display; ?>;
    align-items: <?php echo $alignitems; ?>;
    margin-right: 10px;
}
.back {
    height: 40px;
    width: 40px;
    background-color: white; /* Circle color */
    border-radius: 50%; /* Make it a circle */
    display: <?php echo $display; ?>;
    justify-content: <?php echo $justifycontent; ?>;
    align-items: <?php echo $alignitems; ?>;
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
