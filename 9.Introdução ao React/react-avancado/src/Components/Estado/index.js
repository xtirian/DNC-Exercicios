import React, { useState } from "react";

function Estado() {

 // [valorAtual, setNovoValor] = useState("Valor Iniial")
  const [valor, setValor] = useState(0);


  const adicionarValor = () => (

   //Aqui eu defino que o setValor vai ser o valor atual + 1, então vai adicionar 1 ao valor atual sempre que a função for chamada.
   setValor(valor+1)
  )

  return <div>
   <p>{valor}</p>
   <button onClick={adicionarValor}>Adicionar valor</button>
  </div>;
}

export default Estado;
