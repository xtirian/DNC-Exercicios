import React, { useCallback } from 'react'

const CallBack = ({productId, referrer, theme}) => {

  const handleSubmit = useCallback(
    () => {
      postMessage(`/product/` + productId + `/buy`, {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer],
  )


  return (
    <div>
      
      <h1>CallBack</h1>
    </div>
  )
}

export default CallBack