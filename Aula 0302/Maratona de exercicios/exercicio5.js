const prompt = require("prompt-sync")();

let primeironumero = Number(prompt("Digite o primeiro número para comparar: "));
let segundonumero = Number(prompt("Digite o segundo número para comparar: "));
if (primeironumero === 0 && segundonumero === 0) {
    console.log("Ambos os números são zero.");
} else if (primeironumero === 0) {
    console.log("O primeiro número é zero");
} else if (segundonumero === 0) {
    console.log("O segundo número é zero");
} else if (primeironumero > segundonumero) {
    console.log("O maior número é: " + primeironumero);
} else if (segundonumero > primeironumero) {
    console.log("O maior número é: " + segundonumero);
} else {
    console.log("Os números são iguais.");
}