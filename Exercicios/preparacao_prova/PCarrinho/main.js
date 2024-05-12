const nomePro = document.querySelector('#nome')
const qtdPro = document.querySelector('#qtd')

const btnAdd = document.querySelector('#adicionar')

const ulList = document.querySelector("#prods")

btnAdd.addEventListener('click', () =>{
    console.log(`${qtdPro} - ${nomePro.value}`)
    if(nomePro.value === ""){
        alert('Digite o nome de um produto')
        return -1
    }

    const liItem = document.createElement('li')
    liItem.innerHTML = `${qtdPro.value} - ${nomePro.value}`

    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'X'
    
    btnDelete.addEventListener('click', dletar)
    
    liItem.insertAdjacentElement('beforeend', btnDelete)
    
    ulList.insertAdjacentElement('beforeend', liItem)
})

const dletar = (e) =>{
    e.target.parentNode.remove()     
}