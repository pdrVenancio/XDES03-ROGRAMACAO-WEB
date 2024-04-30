const btn = document.querySelector('button')
const p = document.querySelector('#relogio')


btn.addEventListener('click', () =>{
    setInterval(mostraRelogio, 1000)

    const p = document.createElement('p')
    p.innerText = 'fui criado'
    document.body.append(p)
})

const mostraRelogio = () =>{
    let date = new Date()
    let dateS = date.toLocaleTimeString()

    p.innerText = dateS
}