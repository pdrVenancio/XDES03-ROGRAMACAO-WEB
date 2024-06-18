//importar libs externas
const express = require('express'); //npm i express
const cors = require('cors'); //npm i cors
//importar libs standard
const fs = require('fs');
const path = require('path');

//Conexao com banco de dados
const bdPath = path.join(__dirname,'.','db','propriedades.json');
const propriedades = JSON.parse(fs.readFileSync(bdPath, {encoding: 'utf-8'}));

//Ligar o servidor
const app = express();

//Liberar rota cors
app.use(cors());
// lib para extrair do pacote ip
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Servidor Ouvindo');
});

//Rota para buscar as propriedades
app.get('/propriedades', (req,res) =>{

    //Devolve as propriedades em formato JSON
    res.status(200).json(propriedades);
});

app.post('/adicionar-propriedade', (req, res) =>{

    console.log(req.body)
    const {id, nome, preco, avaliacao} = req.body

    const novaPropriedade = {
        id,
        nome,
        preco,
        avaliacao
    }
    propriedades.push(novaPropriedade)

    fs.writeFileSync(bdPath, JSON.stringify(propriedades, null, 2))

    res.status(200).send('ok')
})