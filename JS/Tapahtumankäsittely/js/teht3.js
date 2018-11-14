
function laske() {
  'use strict';
let tulos;
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

let operaattori = document.getElementById("operaattori").value;
num1 = parseFloat(num1);
num2 = parseFloat(num2);

switch (operaattori) {
    case "+":
        tulos = num1 + num2 ;
        break;
    case "-":
        tulos = num1 - num2 ;
        break;
    case "*":
        tulos = num1 * num2 ;
        break;
    case "/":
        tulos = num1 / num2 ;
        break;
}
    document.getElementById("vastaus").innerHTML = tulos;
}
document.getElementById("laske").addEventListener("click", laske);
