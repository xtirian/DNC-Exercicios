import './App.css'

import React, { useReducer, useState } from 'react'

function reducer(state, action){

  switch (action.type) {
    case "Click":
      return {
        count: state.count +1,
        text: !state.text

      }
      
      break;
  
    default:
      break;
  }
}

const HookReducer = () => {
  // const [count, setCount] = useState(0)
  // const [text, setText] = useState(true)

  const [state, dispatch] = useReducer(reducer, {
    count:0,
    text:true

  })


  function Counter(){
    dispatch({type:'Click'})
    /*setCount((count) => count +1)

    if(count%2 != 0){
      setText(true)
    } else {
      setText(false)
    }*/
  }


  return (
    <div>
      <h1>Contador</h1>
      <div className='card'>
        <button onClick={Counter}>
          A contagem é {state.count}
        </button>
        <p>
          {state.text && (<p>Olá</p>)}
        </p>
      </div>
    </div>
  )
}


export default HookReducer