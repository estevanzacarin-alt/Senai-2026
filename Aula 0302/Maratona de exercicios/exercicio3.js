const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
console.log("A média das notas é: " + ((nota1 + nota2 + nota3) / 3));
