import React from 'react'
import ReactDOM from 'react-dom/client'
//ROUTER DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//global styles
import './index.scss'

//VIEWS
import Login from './assets/views/Login/Login'
import Home from './assets/views/Home/Home'
import Product from './assets/views/Product/Product'
import Pay from './assets/views/Pay/Pay'

const Rotas = createBrowserRouter([
  {
    path: `/`,
    element: <Login />
  },
  {
    path: `/home`,
    element: <Home />
  },
  {
    path: `/product/:productId`,
    element: <Product />
  },
  {
    path: `/pay/:payId`,
    element: <Pay />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas} />
  </React.StrictMode>,
)
