var n1 = parseFloat(prompt("Enter the first number"));
var n2 = parseFloat(prompt("Enter the second number"));

var oper = prompt("Enter the operator (+ or *)");

function add(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function calc(n1, n2, oper) {
    if (oper === "+") {
        return add(n1, n2);
    } else if (oper === "*") {
        return multiply(n1, n2);
    } else {
        return "Invalid operator";
    }
}

var res = calc(n1, n2, oper);

alert(res);
document.querySelector("h1").textContent = res;
