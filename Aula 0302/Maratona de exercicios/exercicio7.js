const prompt = require("prompt-sync")();
function calcularOperacoes(numero1, numero2, operacao) {
    if (operacao === '+') {
        return numero1 + numero2;
    } else if (operacao === '-') {
        return numero1 - numero2;
    } else if (operacao === '*') {
        return numero1 * numero2;
    } else if (operacao === '/') {
        return numero1 / numero2;
    }
}

let numero1 = Number(prompt("Digite um número para realizar uma operação: "));
let numero2 = Number(prompt("Digite outro número para realizar a operação: "));
let operacao = prompt("Digite a operação (+, -, *, /): ");
console.log("O resultado da operação é: " + calcularOperacoes(numero1, numero2, operacao));
