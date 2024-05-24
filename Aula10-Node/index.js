const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('Server ta on papai!')
})

app.use((req, res) =>{
    console.log('requisição chegou!')
    res.send(' <h1> Deu boa </h1> ')
})