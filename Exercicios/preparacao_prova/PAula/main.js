const btnPlay1 = document.querySelector('#play1')
const btnPlay2 = document.querySelector('#play2')
const btnReset = document.querySelector('#reset')

const selPont = document.querySelector('#pontuacao')

const spP1 = document.querySelector('#pont-play-1')
const spP2 = document.querySelector('#pont-play-2')

const pVit = document.querySelector('#vit')

let pontPlay1 = 0
let pontPlay2 = 0

spP1.innerText = `${pontPlay1}`
spP2.innerText = `${pontPlay2}`

btnPlay1.addEventListener('click', () => {
    pontPlay1 = pontPlay1 + 1
    spP1.innerText = `${pontPlay1}`
    verVitory(pontPlay1, "play1 ganhou")
})

btnPlay2.addEventListener('click', () => {
    pontPlay2 = pontPlay2 + 1
    spP2.innerText = `${pontPlay2}`
    verVitory(pontPlay2, "play2 ganhou")
})

btnReset.addEventListener('click', () => {
    pontPlay1 = 0
    pontPlay2 = 0

    spP1.innerText = `${pontPlay1}`
    spP2.innerText = `${pontPlay2}`

    btnPlay1.style.display = "inline"
    btnPlay2.style.display = "inline"

    pVit.innerText = `Use os botoes para marcar a pontuação vitoriosa!`

})

const verVitory = (pont, ganhador) => {
    if (pont === Number(selPont.value)) {
        pVit.innerText = `${ganhador}`
        btnPlay1.style.display = "none"
        btnPlay2.style.display = "none"
    }
    else
        return false
}