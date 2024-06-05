function calc(number1, number2, operation) {
    let num1 = Number.parseFloat(number1)
    let num2 = Number.parseFloat(number2)
    switch (operation) {
    case '+':
        const add = num1 + num2;
        return add;
    case '-':
        const subtract = num1 - num2;
        return subtract;
    case '*':
        const multiply = num1 * num2;
        return multiply;
    case '/':
        const divide = num1 / num2;
        return divide;
    default:
        return num1 + num2;
    };
}

function display(val) {
    console.log(val)
    document.getElementById("result").innerHTML += val
    return val
}


function solve() {
    let displayVal = document.getElementById("result").innerHTML
    console.log(displayVal)
    let operator
    for (char of displayVal) {
        console.log(char)
        if (char === '+') {
            operator = char 
        } else if (char === "-") {
            operator = char
        } else if (char === "*") {
            operator = char
        } else if (char === "/") {
            operator = char
        }
    }
    const myArray = displayVal.split(operator)
    console.log(myArray)
    
    document.getElementById("result").innerHTML = calc(myArray[0], myArray[1], operator)
}

function reset() {
    document.getElementById("result").innerHTML = ''
}