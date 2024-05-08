const n1Ref = document.querySelector('#n1')
const n2Ref = document.querySelector('#n2')

const btnSoma = document.querySelector('#soma')
const btnSub = document.querySelector('#sub')
const btnMult = document.querySelector('#mult')
const btnResult = document.querySelector('#result')

const pOp = document.querySelector('#op')
const pRes = document.querySelector('#sresult')

let resultado = undefined
let operacao = false


btnMult.addEventListener('click', () =>{
    pOp.innerText = '*'
    resultado = n1Ref.value * n2Ref.value
    operacao = true
})

btnSub.addEventListener('click', () =>{
    pOp.innerText = '-'
    resultado = n1Ref.value - n2Ref.value
    operacao = true
})

btnSoma.addEventListener('click', () =>{
    pOp.innerText = '+'
    resultado = Number(n1Ref.value) + Number(n2Ref.value)
    operacao = true
})

btnResult.addEventListener('click', () =>{
    if(operacao === false)
        alert('selecione uma operação')
    if(n1Ref.value == ""){
        alert('Digite o N1')
        return -1
    }
    if(n2Ref.value == ""){
        alert('Digite o N2')
        return -1
    }    
    pRes.innerText = `Resultado: ${resultado}`
})

