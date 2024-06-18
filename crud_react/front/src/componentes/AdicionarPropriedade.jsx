import React, { useState } from 'react'
import {Link, Navigate} from 'react-router-dom' //npm i react-router-dom
import axios  from 'axios' //npm instal axios


export default function AdicionarPropriedade() {
    
    const [msg, setMsg] = useState()
    
    const [propriedade, setPropriedade] = useState({
        id : Date.now(),
        nome : '',
        preco : '',
        avaliacao : ''      
    })
    
    const handleChange = (e) => {
        // constroi o novo valor
        const novovalor = {
            id : Date.now(),
            [e.target.name] : e.target.value
        }

        // atualizar
        setPropriedade({
            ...propriedade,
            ...novovalor
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefaut()
        console.log(propriedade)
        try{
            const resposta = await axios.post('http://localhost:3000/adicionar-propriedade', propriedade)
            if(resposta.status === 200)
                setMsg('OK')
        } catch(erro){
            console.log(erro)
        }

    }


    if(msg === 'OK'){
        return <Navigate to='/'></Navigate>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id='nome' name='nome' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="avaliacao">Avalição:</label>
                <input type="text" id='avaliacao' name='avaliacao' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="preco">Preço:</label>
                <input type="text" id='preco' name='preco' onChange={handleChange}/>
            </div>

            <button type=''>Enviar</button>
            <Link to='/'>voltar</Link>
        </form>
    )
    }
