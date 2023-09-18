import React from "react";
import { Link } from "react-router-dom";

import './productCard.scss'

const productCard = ({ data }) => {
  return (
    <div className="cardContainer">
      <img src={data.imgPath} alt={`image-${data.id}-${data.title}`} />
      <p>{data.title}</p>

      <button>
        <Link to={`/product/${data.id}`}>Comprar</Link>
      </button>
    </div>
  );
};

export default productCard;
