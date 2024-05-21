const Calculator = require('../libraries/calculator')

let myCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let sum = myCalc.add(number1, number2)
    console.log(number1, '+', number2, '=', sum)
    res.status(200).json({result: sum})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let difference = myCalc.subtract(number1, number2)
    console.log(number1, '-', number2, '=', difference)
    res.status(200).json({result: difference})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let product = myCalc.multiply(number1, number2)
    console.log(number1, '*', number2, '=', product)
    res.status(200).json({result: product})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    let quotient = myCalc.divide(number1, number2)
    console.log(number1, '/', number2, '=', quotient)
    res.status(200).json({result: quotient})
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}