// const h1 = document.querySelector('h1');
// const centro = document.querySelector('.centro');

// const  mudaCor = () => {
//     let n1 = Math.floor(Math.random() * 226);
//     let n2 = Math.floor(Math.random() * 226);
//     let n3 = Math.floor(Math.random() * 226);

//     h1.innerText = `Cor de Fundo: rgb(${n1},${n2},${n3})`;
//     centro.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`;
// }

// RESOLUÇAÔ AULA

const h1 = document.querySelector('#titulo')
const btn = document.querySelector('button')
const main = document.querySelector('.centro')
btn.addEventListener('click', () =>{
    const cor = gerarNovaCor() 
    h1.innerText = `Cor de fundo: rgb(${cor.r},${cor.g},${cor.b})`
    main.style.backgroundColor = `rgb(${cor.r}, ${cor.g}, ${cor.b})`;


})

// função para gerar cor aleatoria

const gerarNovaCor = () => novaCor = {
        r : Math.floor(Math.random() * 226),
        g : Math.floor(Math.random() * 226),
        b : Math.floor(Math.random() * 226)
    }



 