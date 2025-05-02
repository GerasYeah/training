let person = "Paulo";
let money = 1500;
let patrimony = 500620;

const sum = (a, b) => a + b;

function isMillionaire(money, patrimony) {
    let totalMoney = sum(money, patrimony);

    if (totalMoney >= 1000000) {
        return true;
    } else {
        return false;
    }
}

function sayHello(person, money, patrimony) {
    console.log("Olá, " + person + "!")
    console.log("Você tem um total de: " + sum(money, patrimony) + " reais.");
    console.log(isMillionaire(money, patrimony) ? "Você é milhionário!" : "Você não é milionário!");
}

sayHello(person, money, patrimony);