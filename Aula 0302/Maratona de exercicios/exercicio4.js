const prompt = require("prompt-sync")();
let numeroParouImpar = Number(prompt("Digite um número para verificar se é par ou ímpar: "));
if (numeroParouImpar % 2 === 0) {
    console.log("O número " + numeroParouImpar + " é par.");
} else {
    console.log("O número " + numeroParouImpar + " é ímpar.");
}