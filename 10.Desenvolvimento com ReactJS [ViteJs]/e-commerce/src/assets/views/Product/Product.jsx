import React from 'react'

import Header from '../../components/sections/Header/Header'
import SearchBar from '../../components/elements/searchBar/searchBar'
import ProductDetail from '../../components/sections/ProductDetail/ProductDetail'


//STYLE
import './product.scss'
import { useParams } from 'react-router-dom'

const Products = ({data}) => {
  const { productId } = useParams();

  const selectedProduct = data.find(product => product.id == productId)

  return (
    <>
    <Header nav={true} page="home" />
    <div className="home_container">
      <SearchBar />      
      <ProductDetail data={selectedProduct} />       
        
      
    </div>
    
    </>
  )
}

export default Products