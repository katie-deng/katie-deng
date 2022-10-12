// Message on click
function giveAlert() {
    alert ("BOO");
}

// Mouse hover
var x = document.getElementById ("btn");
x.addEventListener ("mouseover", function1);
x.addEventListener ("click", function2);
x.addEventListener ("mouseout", function3);

function function1(){
    document.getElementById("text").innerHTML += "over! <br>";
}
function function2(){
    document.getElementById("text").innerHTML += "clicked! <br>";
}
function function3(){
    document.getElementById("text").innerHTML += "out! <br>";
}

// Input box
function keyupfunction() {
    document.getElementById("box").style.backgroundColor = "red";
}
function keydownfunction() {
    document.getElementById("box").style.backgroundColor = "blue";
}