import axios from 'axios'
import { useEffect, useState } from 'react'
import Propriedade from './Propriedade';

import {Link} from 'react-router-dom' //npm i react-router-dom

export default function ListaPropriedades() {
    
    const [propriedades, setPropriedades] = useState([]);

    useEffect(() =>{
        
        async function buscaPropriedades(){
            const dado = await axios.get('http://localhost:3000/propriedades');
            //Armazenar a resposta em um state
            setPropriedades(dado.data);
            console.log(dado.data);
        }
        buscaPropriedades();
    },[]);
  
    return (
        <div>
            <Link to="/adicionar-propriedade">Adicionar nova peopriedade</Link>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Avaliação</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {
                        propriedades.map(p => <Propriedade key={p.id} {...p}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}
