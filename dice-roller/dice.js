function diceRoll(num,num2,Name1) {
    console.log("this is how many sides:", num, num2)
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2)
}

function numberMinMax(min,max) {
    const diceRoll = Math.floor(Math.random() * (max - min +1)) + min
    console.log(diceRoll)
    return(diceRoll)
}