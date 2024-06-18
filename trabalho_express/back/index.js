
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});
