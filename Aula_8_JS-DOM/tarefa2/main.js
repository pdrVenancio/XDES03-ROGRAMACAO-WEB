// Referencia para o input
const qtd = document.querySelector('#qtd')
const produto = document.querySelector('#produto')
const listaCompra = document.querySelector('#lista-pedidos')
const pListaCompra = document.querySelector('.lista-pedidos p')

const btn = document.querySelector('#btnADD')

const msgCarrinho = "O carrinho esta vazio!"

pListaCompra.innerText = msgCarrinho

btn.addEventListener('click', () =>{
    const qtdValue = qtd.value
    const prodValue = produto.value
    
    if(qtdValue === "" || prodValue === ""){
        alert("Campo vazio")
        return -1
    }

    const newLi = document.createElement('li')
    newLi.innerText = `${qtdValue} : ${prodValue}`

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'x'
    deleteBtn.addEventListener('click', funDelete)

    // Add os elementos dinamicamente
    newLi.insertAdjacentElement('beforeend', deleteBtn)
    listaCompra.insertAdjacentElement('beforeend', newLi)

    pListaCompra.innerText = ''
})

const funDelete = e => {
    //deleto o elemento pai do botão o seja deleto o li
    e.target.parentNode.remove()

    const liPedidos = document.querySelectorAll('#lista-pedidos li')
    if(liPedidos.length === 0)
        pListaCompra.innerText = msgCarrinho
}