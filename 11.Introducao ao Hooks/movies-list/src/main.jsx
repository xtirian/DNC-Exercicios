import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';

//STYLES
import './index.scss'

import App from './App';
import Home from './views/home/Home.jsx';
import MovieDetail from './views/movieDetail/MovieDetail';


/*const router = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    children: [
      {
        path: ``,
        element: <Home />
      },
      {
        path: `/movie/:movieId`,
        element: <MovieDetail />
      }
    ]
  },
  
])*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
