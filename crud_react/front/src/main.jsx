import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AdicionarPropriedade from './componentes/AdicionarPropriedade.jsx'

// Roteamento de paginas
const routes = createBrowserRouter([
  {
    path: '/',
    element : <App /> 
  },
  {
    path: '/adicionar-propriedade',
    element: <AdicionarPropriedade />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)