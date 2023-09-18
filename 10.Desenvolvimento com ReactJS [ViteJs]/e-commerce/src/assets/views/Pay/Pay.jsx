import React from 'react'

import { useParams } from 'react-router-dom'

//STYLE
import './pay.scss'

//COMPONENTS
import Header from '../../components/sections/Header/Header';
import PaymentDetail from '../../components/sections/PaymentDetail/PaymentDetail';


const Pay = ({data}) => {
  const { payId }  = useParams();

  const selectedProduct = data.find(product => product.id == payId)  


  return (
    <div>
      <Header nav={false} />
      <PaymentDetail data={selectedProduct} />

      
    </div>
  )
}

export default Pay