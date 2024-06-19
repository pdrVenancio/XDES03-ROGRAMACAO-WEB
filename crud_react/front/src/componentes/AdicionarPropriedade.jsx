import { useState } from "react"
import { Link, Navigate } from "react-router-dom";//npm install react-router-dom
import axios from 'axios';//npm install axios

export default function AdicionarPropriedade() {
    
    const [msg, setMsg] = useState('');

    const [propriedade, setPropriedade] = useState({
        id : Date.now(),
        nome : '',
        preco : '',
        avaliacao : ''
    });


    const handleChange = (e) =>{
        //constroi o novo valor
        const novoValor = {
            id : Date.now(),
            [e.target.name] : e.target.value
        }
        //atualizar
        setPropriedade({
            ...propriedade,
            ...novoValor
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(propriedade);
        try {
            const resposta = await axios.post('http://localhost:3000/adicionar-propriedade',propriedade);
            if(resposta.status === 200)
                setMsg('OK');
        } catch (error) {
            console.log(error);    
        }

    }

    if(msg === 'OK'){
        //NAVEGAR PARA HOME
        return <Navigate to='/'></Navigate>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="avaliacao">Avaliação</label>
                <input type="text" name="avaliacao" id="avaliacao" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="preco">Preço</label>
                <input type="text" name="preco" id="preco" 
                onChange={handleChange}
                />
            </div>
            <Link to="/" >Voltar</Link>
            <button>Enviar</button>

        </form>
    )
}
