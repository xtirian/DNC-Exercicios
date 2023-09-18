import React from "react";
import { Link } from "react-router-dom";

import "./paymentDetail.scss";

const PaymentDetail = ({ data }) => {

 

  return (
    <div className="paymentDetail_container">
      <div className="paymentDetail_container-grid">
        <div className="paymentDetail_container-left">
          <form action="#">
            <label>
              Nome:
              <input placeholder="Nome Completo" type="text" name="Nome" id="nome" />
            </label>
            <label>
              Endereço de entrega:
              <input placeholder="Endereço de Entrega" type="text" name="endereco" id="endereco" />
            </label>

            <label name="forma-pagamento" htmlFor="forma-pagamento" className="forma_de_pagamenrto">
              <span>
                <input 
                  type="checkbox"
                  name="pix"
                  id="forma-pagamento"
                  value="pix"
                />Pix
              </span>
              <span>
                <input
                  type="checkbox"
                  name="boleto"
                  id="forma-pagamento"
                  value="boleto"
                />Boleto
              </span>
              <span>
                <input
                  type="checkbox"
                  name="cartao-de-credito"
                  id="forma-pagamento"
                  value="cartao-de-credito"
                />Cartão de Crédito
              </span>
            </label>

            <button><Link to={`/home`}>Enviar Pedido</Link></button>
          </form>
        </div>

        <div className="paymentDetail_container-right">
          <div className="resumo_card">
            <p className="title">Resumo do pedido</p>
            <div className="line line1">
             <p>Produto (1)</p> <span>{data.price}</span>
            </div>
            <div className="line ">
             <p>Total:</p> <span>{data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
