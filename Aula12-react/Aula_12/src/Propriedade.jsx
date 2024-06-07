import React from 'react';

export default function Propriedade({nome, avaliacao, preco}){

    return(
        <>
            <p>Nome: {nome}</p>
            <p>Avaliação: {avaliacao} &#9733;</p>
            <p>Preço: {preco}</p>  
        </>
    )
}