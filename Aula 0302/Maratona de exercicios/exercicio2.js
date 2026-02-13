const prompt = require("prompt-sync")();
let a = Number(prompt("Digite o primeiro número para somar: "));
let b = Number(prompt("Digite o segundo número para somar: "));
let soma = a + b;
console.log("A soma de " + a + " e " + b + " é: " + soma);
