let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let result = document.getElementById("sum-el");

function add() {
    let add = num1 + num2;
    result.textContent = "Result: " + add;
}

function subtract() {
    let rest = num1 - num2;
    result.textContent = "Result: " + rest;
}

function divide() {
    let div = num1 / num2;
    result.textContent = "Result: " + div;
}

function multiply() {
    let mul = num1 * num2;
    result.textContent = "Result: " + mul;
}
