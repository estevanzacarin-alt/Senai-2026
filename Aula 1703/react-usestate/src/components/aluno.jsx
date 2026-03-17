import { useState } from 'react';

export default function Aluno({titulo}){
    const[nome, setNome] = useState('Estevin');
    const[idade, setIdade] = useState('17');
    const[ra, setRa] = useState('101010');
    const[nota, setNota] = useState('9,5');

    return(
        <>
        <h1>{titulo}</h1>
        <h3>{nome}</h3>
        <h4>{idade}</h4>
        <h4>{ra}</h4>
        <h4>{nota}</h4>
        </>
    )
}