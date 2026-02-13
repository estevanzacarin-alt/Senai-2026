//primeira tipo de função padrão
function saudacao(nome,sobrenome){
    console.log('Olá, seja bem vindo ' + nome + ' ' + sobrenome);
}

saudacao('Pedro','Darim');//chamada da funcao

//segundo tipo - funcao anônima
const somar = function(num1,num2){
    console,log('a soma dos numeros é = ' + (num1+num2));
}
somar(25,35);

//arrow function
const subtrair = (num1,num2) => {
    console.log('a subtracao dos numeros é = ' + (num1-num2));
}
subtrair(30,50);

//terceiro tipo - arrow function 
const subtrairComRetorno = (num1,num2) => {
    return num1-num2;
}
console.log('subtracao com retorno dos numeros é = ' + subtrairComRetorno (30,50));

