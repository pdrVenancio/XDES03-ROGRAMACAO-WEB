// Referencia para o input
const qtd = document.querySelector('#qtd')
const produto = document.querySelector('#produto')

const btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    console.log(qtd.value)
    console.log(produto.value)
})