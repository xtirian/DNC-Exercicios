import React from 'react'

import './movieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = ({title, id, image}) => {
  return (
    <div className='MovieCard'>
      <div className='movie-image'>
        <img src={`https://image.tmdb.org/t/p/w1280${image}`} alt={title+id} />
      </div>
      <div className="movie-description">
        <h3>{title}</h3>
        <Link to={`/movie/${id}`} className='btn-details'>
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}

export default MovieCard