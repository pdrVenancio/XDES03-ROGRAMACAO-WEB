const url = 'https://swapi.dev/api/planets'

const btn = document.querySelector('#btn-pessoas')
const ul = document.querySelector('#lista-pessoas')

btn.addEventListener('click', async () => {
    const resposta = await fetch(url)
    const dados = await resposta.json()
    
    for(let pessoa of dados.results){
        const li = document.createElement('li')
        li.innerText = pessoa.name
        ul.append(li)
    }
})

// MANEIRAS ANTIGAS
// const resposta = fetch(url)

// resposta.then(retorno =>{
//     console.log(retorno)
//     const dadosJSON = retorno.json()
//     dadosJSON.then((dados) =>{
//         console.log(dados)
//     })
// })
// console.log(resposta)

// resposta.then((retorno) =>{
//     return retorno.json()
// })
// .then((dados) =>{
//     console.log(dados)
// })
// .catch((e) =>{
//     console.log(e)
// })


// FUNÇÃO ASSINCRONA
// async function buscaStarWars(){
//     const resposta = await fetch(url)
//     const dados = await resposta.json()
//     console.log(dados.results[0].name)
// }

// buscaStarWars()