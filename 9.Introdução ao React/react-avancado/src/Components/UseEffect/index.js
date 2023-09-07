import React, { useEffect, useState } from "react";

function Effect() {
  const [valor, setValor] = useState(0);

  const incrementarValor = () => {
    // Usar uma função no setState quando o novo estado depende do estado anterior.
    setValor((prevValor) => prevValor + 1);
  };

  useEffect(() => {
    window.alert("Adicionou um ponto");
  }, [valor]);

  return (
    <div>
      <p>{valor}</p>
      <button onClick={incrementarValor}>Incrementar Valor</button>
    </div>
  );
}

export default Effect;
