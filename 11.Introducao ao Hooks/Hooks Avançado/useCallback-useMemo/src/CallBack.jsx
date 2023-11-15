import React, { useCallback, useMemo, useState } from 'react'

const CallBack = () => {

  
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const carac = useMemo(() => {
    return text.length
  }, [text.length]);


  const nameLimit = useCallback(
    () => {
      console.log(240 - text.length)
    },
    [text.length],
  )
  

  


  return (
    <div className='card'>
      <p>Coloque o nome:</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>Coloque o texto:</p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />

      <div>
        <p>Nome: {name}</p>
        <p>Texto: {text}</p>
        <p>Número de Caracteres: {carac}</p>
        <button onClick={nameLimit}>Validar</button>

      </div>
    </div>


  )
}

export default CallBack