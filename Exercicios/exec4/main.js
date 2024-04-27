const equacaoRef = document.querySelector('#idAreaEquacao')
const btnGera = document.querySelector('#btnGerarQ')

const btnValidaRes = document.querySelector('#btnValidarRes')
const respostaRef = document.querySelector('#resposta')

const resultado = document.querySelector('#idAreaResp')

// Crio como variavel global para ser acessada por ambas as funções
let resposta

btnGera.addEventListener('click', () => {
    resultado.innerText = ''

    const n1 = getRandom(10)
    const n2 = getRandom(10)
    const operacoes = ['*', '+', '-']
    const opEscolhida = operacoes[getRandom(3)]

    equacaoRef.innerText = `${n1} ${opEscolhida} ${n2}`

    // Calculo a respota correta
    opEscolhida === '*' ? resposta = n1 * n2 : opEscolhida === '+' ? resposta = n1 + n2 : resposta = n1 - n2
})

btnValidaRes.addEventListener('click', () => {
    if(respostaRef.value === ''){
        alert('Digite uma resposta!')
        return -1
    }
    
    // Verifico se a resposta esta correta
    if(Number(respostaRef.value) === resposta){
        resultado.innerText = "Parabens!"
        resultado.style.color = 'green'  
    }else{
        resultado.innerText = `Deu ruim! A resposta era ${resposta}`
        resultado.style.color = 'red' 
    }
})

const getRandom = (qtd) => Math.floor(Math.random() * qtd)
    
