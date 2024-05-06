const inicioRef = document.querySelector("#inicio")
const fimRef = document.querySelector("#fim")
const btnPensar = document.querySelector("#btn-pensar")

const chuteRef = document.querySelector("#chute")
const btnVerifica = document.querySelector("#btn-verificar")

const pRes = document.querySelector("#resp")
const nPens = document.querySelector("#nPens")

let nPensado = undefined

btnPensar.addEventListener("click", () =>{
    if(inicioRef.value === "" || fimRef.value === ""){
        pRes.innerText = "digite um valor de inicio e de fim"
        return -1
    }

    let ini = inicioRef.value
    let fim = fimRef.value

    //if(ini > fim)
        //[ini, fim] = [fim, ini]
    
    nPensado = Math.floor(Math.random() * (fim - ini + 1)) + Number(ini)
})
btnVerifica.addEventListener("click", () => {
    if(nPensado === undefined){
        pRes.innerText = "Calma la! Nem pensei em um numero ainda"
        return -1
    }

    const chute = Number(chuteRef.value)

    if(chute === nPensado)
        pRes.innerText = "Parabens voce Acertou"
    
    if(chute > nPensado)
        pRes.innerText = "Tente um numero menor"
    
    if(chute < nPensado)
        pRes.innerText = "Tente um numero maior"  
})

