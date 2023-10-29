import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import MovieDetail from './views/movieDetail/MovieDetail'
import Home from './views/home/Home'

const App = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div style={{backgroundColor: "#303030"}}>
      {/* Primeiro fiz a parte do header e depois fiz esta parte aqui para passar de filho para pai */}
      <Header onSubmit={(searchValue)=> setInputValue(searchValue)} />
      {/* Eu quero que o Header seja fixo e mude apena o conteudo da página;
      Para isso, vou usar  Outlet que vai apresentar os elementos filhos. */}
      {/* <Outlet /> */}
      <Routes>
        <Route 
          path="/"
         element={<Home searchValueProp={inputValue} />} 
         />
         <Route 
          path={`/movie/:movieId`}
         element={<MovieDetail />} />
      </Routes>
    </div>
  )
}



export default App