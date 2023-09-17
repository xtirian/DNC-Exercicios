import React from 'react'


import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.scss'

//Views
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  //Rotas dinâmicas = Colocando os : faz o react entender que o productsId é uma variável e que dependendo do valor desta variável ele irá chamar uma determinada página
  {
    path: "/products/:productsId",
    element: <Products/>,
  },
  {
    path: "/pay",
    element: <Pay title="Contador" lista={['maçã', 'pera', 'uva']} />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={rotas} />
  </React.StrictMode>,
)
