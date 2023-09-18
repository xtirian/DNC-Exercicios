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

//MOCK PRODUTOS
import { PRODUCTS_MOCK } from './mock/products.mock'

const Rotas = createBrowserRouter([
  {
    path: `/`,
    element: <Login />
  },
  {
    path: `/home`,
    element: <Home data={PRODUCTS_MOCK} />
  },
  {
    path: `/product/:productId`,
    element: <Product data={PRODUCTS_MOCK} />
  },
  {
    path: `/pay/:payId`,
    element: <Pay data={PRODUCTS_MOCK} />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas} />
  </React.StrictMode>,
)
