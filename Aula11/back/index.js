const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Servidor ligado");
});

app.post("/disciplinas", (req, res) => {
    const { sigla, ementa, equivalencia } = req.body;

    let disciplinas = [];

    // Verificar se o arquivo disciplinas.json existe antes de ler
    if (fs.existsSync("disciplinas.json")) {
        disciplinas = JSON.parse(fs.readFileSync("disciplinas.json", { encoding: "utf8" }));
    }

    // Verificar se já existe uma disciplina com a mesma sigla
    for (let disciplina of disciplinas) {
        if (disciplina.sigla.toLowerCase() === sigla.toLowerCase()) {
            return res.send(`Disciplina com a sigla ${sigla} já existe.`);
        }
    }

    const id = disciplinas.length + 1;

    const nova_disciplina = {
        id: id,
        sigla: sigla,
        ementa: ementa,
        equivalencia: equivalencia
    };

    disciplinas.push(nova_disciplina);

    fs.writeFileSync('disciplinas.json', JSON.stringify(disciplinas, null, 2));

    res.send('Disciplina adicionada com sucesso');
});
