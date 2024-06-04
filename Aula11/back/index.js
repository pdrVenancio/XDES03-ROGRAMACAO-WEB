const express = require("express")
const app = express()

// fs: Módulo que trabalha com arquivos (file system)
const fs = require("fs")
const { stringify } = require("querystring")

app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Servidor ligado")
})


app.post("/disciplinas", (req, res) => {
    const {sigla, ementa, equivalencia} = req.body;

    const disciplinas = JSON.parse(fs.readFileSync("disciplinas.json", {encoding: "utf8"}))

    const id = disciplinas.length + 1

    const nova_disciplina = {
        id: id,
        sigla: sigla,
        ementa: ementa,
        equivalencia: equivalencia
    }

    disciplinas.push(nova_disciplina)

    fs.writeFileSync('disciplinas.json', JSON.stringify(disciplinas,null, 2))

    res.send('deu tudo certo marcha')


    // for(let disciplina of disciplinas) {
    //     if(disciplina.sigla.toLowerCase() === sigla.toLowerCase()) {
    //         // Apenas uma mensagem por vez (tipo um return), por isso o send de baixo n foi enviado
    //         res.send(disciplina.ementa)
    //     }
    // }
})

