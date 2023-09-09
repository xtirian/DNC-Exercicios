import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/home",
  //   element: <App />,
  // },
  // {
  //   path: "/products",
  //   element: <App />,
  // },
  // {
  //   path: "/pay",
  //   element: <App />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
