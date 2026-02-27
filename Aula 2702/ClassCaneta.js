class Caneta{
    cor = 'amarela';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 10;//ml
    tampa = false;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }

    getQtdTinta(){
        return this.qtdTinta;
    }
}
const canetaFina = newCaneta();
canetaFina.escrever();
canetaFina.getQtdTinta();
console.log('A qtde. retante de tinta é ' + canetaFina.getQtdTinta());