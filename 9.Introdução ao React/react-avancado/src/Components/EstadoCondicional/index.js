import React, { useState } from "react";

function EstadoCondicional() {
  const [requisito, setRequisito] = useState(false)
  
  function Validacao(){
    //verifica o estado do requisito e define o próximo estado.
    requisito === true? setRequisito(false):setRequisito(true)
  }

  return <div>   
   <button onClick={Validacao}>validar</button>   
   {/* Chama esta mensagem apenas se o requisito for true */}
   {requisito === true && <p>Seu login foi validado!</p>}
  </div>;
}

export default EstadoCondicional;
