
function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 + num2;
    document.getElementById("result").innerHTML = `${num1} + ${num2} = ${result}`;
}

function substract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 - num2;
    document.getElementById("result").innerHTML = `${num1} - ${num2} = ${result}`;
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 / num2;
    document.getElementById("result").innerHTML = `${num1} / ${num2} = ${result}`;
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 * num2;
    document.getElementById("result").innerHTML = `${num1} x ${num2} = ${result}`;
}

function exponent() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 ** num2;
    document.getElementById("result").innerHTML = `${num1} ** ${num2} = ${result}`;
}

function reminder() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if(!Number(num1)) {alert("You must type only a number")}
    if(!Number(num2)) {alert("You must type only a number")}
    let result = num1 % num2;
    document.getElementById("result").innerHTML = `${num1} % ${num2} = ${result}`;
}

