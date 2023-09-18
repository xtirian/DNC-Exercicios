import React, { useState } from "react";
import "./productDetail.scss";

import { Link } from "react-router-dom";

const ProductDetail = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState(data.colors[0]);

  let traduzirCor = (selectedColor) => {
    switch (selectedColor) {
      case "black":
        return "preto";
        break;
      case "red":
        return "vermelho";
        break;
      case "green":
        return "verde";
        break;
      case "white":
        return "branco";
        break;
      case "blue":
        return "azul";
        break;
      case "beige":
        return "bege";
        break;

      default:
        break;
    }
  };

  

  return (
    <div className="productDetail_container">
      <div className="productDetail_grid">
        <div className="productDetail_grid-left">
          <div className="left-product_card">
            <img src={data.imgPath} alt={`foto-de-${data.title}`} />
            <p>{data.title}</p>
          </div>

          <div className="left-descricao">
            <p className="title">Descrição</p>
            <p className="content">{data.title}</p>
          </div>
        </div>
      </div>

      <div className="productDetail_grid-right">
        <p className="right-title">Informações Sobre o Produto</p>

        <p className="right-price">{data.price}</p>

        <p className="right-color">
          {" "}
          Cor: <span>{traduzirCor(selectedColor)}</span>
        </p>

        <div className="right-colors-div">
          {data.colors.map((cor) => (
            
              <div><input type="radio" id={`cor-${cor}`} name="selectedColor" value={cor} />
              <label
              style={{ backgroundColor: `${cor}` }}
              for={`cor-${cor}`}
              onClick={(e) => setSelectedColor(e.target.control.value)}></label>
              </div>
          ))}
        </div>
        <div className="right-size">
          <p>Tamanho:</p>

          <div className="right-size-grid">
            {data.sizes.map((size) => (
              <div className="size-mini-card">
                <input type="radio" name="sizeSelected" id={`size${size}`} />
                <label for={`size${size}`}>{size}</label></div>
            ))}
          </div>
        </div>

        <Link to={`/pay/${data.id}`}>
          <button className="right-button-productDetail">
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
