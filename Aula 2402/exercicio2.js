class Cidade {
    qntdHabitantes = 209000;
    estado = 'São Paulo';
    nome = 'Araçatuba';
    pais = 'Brasil';

    mostrarDados() {
        console.log('Cidade: Araçatuba');
        console.log('Estado: São Paulo');
        console.log('País: Brasil');
        console.log('População: 208 415 habitantes');
    }
}

const ultimaCidade = new Cidade();
ultimaCidade.mostrarDados();