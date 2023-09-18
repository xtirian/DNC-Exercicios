import React from 'react'

//STYLE
import './home.scss'

//components
import Header from '../../components/sections/Header/Header'
import SearchBar from '../../components/elements/searchBar/searchBar'
import ProductCard from '../../components/elements/productCard/productCard'

//MOCK DE PRODUTOS


const Home = ({data}) => {



  
  return (
    <>
    <Header nav={true} page="home" />
    <div className="home_container">
      <SearchBar />

      <div className='product_grid'>
        {data.map(product => {
          return <ProductCard 
          key={product.id}
          data={product}
          />
        })}
        
        
      </div>
    </div>
    </>
  )
}

export default Home