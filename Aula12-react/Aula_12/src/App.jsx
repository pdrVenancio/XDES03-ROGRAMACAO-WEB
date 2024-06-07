import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ListaPropriedades from './ListaPropriedades';


// import Dado from './Dado'
// import Rolagem from './Rolagem'

const prop = [
  { id: 129031, nome: "Pousada Maria da Fé", avaliacao: 4.9, preco: 150 },
  { id: 129331, nome: "Casa da Montanha", avaliacao: 4.8, preco: 250 },
  { id: 129032, nome: "Vale dos Sonhos", avaliacao: 4.75, preco: 300 },
  { id: 129033, nome: "Pousada Ar Puro", avaliacao: 4.9, preco: 120 },
  { id: 129034, nome: "Hotel Vila Maria", avaliacao: 4.7, preco: 140 },
  { id: 129035, nome: "Café e Sono", avaliacao: 4.69, preco: 96 },
];


export default function App() {

  return (
    <>
      <ListaPropriedades propriedades={prop}/>
    </>
  )
}


