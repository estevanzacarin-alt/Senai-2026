const prompt = require("prompt-sync")();
function verificaIdade(idade) {
    if (idade <12) {
        console.log("Você é uma criança.");
    } else if (idade >= 12 && idade < 18) {
        console.log("Você é um adolescente.");
    } else if (idade >= 18) {
        console.log("Você é um adulto.");
    } else if (idade >= 60) {
        console.log("Você é um idoso.");
    }
}

let idade = Number(prompt("Digite sua idade: "));
verificaIdade(idade);
