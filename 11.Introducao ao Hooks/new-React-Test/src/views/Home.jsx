import { useState, useEffect } from 'react'

const Home = () => {
  const[titulo, setTitulo] = useState("Home");

  useEffect(() => {   
    console.log("Hello World Hook")
    }, [])
  



  return (
    <div>
      <h1>{titulo}</h1>
      <button onClick={() => setTitulo("Novo Título")}>Alterar Titulo</button>
    </div>
  )
}

export default Home
