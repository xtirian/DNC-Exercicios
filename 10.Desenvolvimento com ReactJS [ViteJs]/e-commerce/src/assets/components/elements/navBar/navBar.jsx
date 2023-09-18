import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

import "./navBar.scss";

const navBar = (props) => {
  const NavigationList = [
    "home",
    "novidades",
    "feminino",
    "masculino",
    "atendimento",
  ];

  let activePage = props.currentPage;

  return (
    <div className="navBar-container">
      <nav className="page_navigation">
        <ul id="pageNavigationList">
          {NavigationList.map(item => {
            if (activePage == item) {
              return <li className="page_active">{item}</li>;
            } else {
              return <li>{item}</li>;
            }
          })}
        </ul>
      </nav>
      <nav className="cart_container">
        <p>
          Meu Carrinho <AiOutlineShoppingCart className="cart_icon" size={33} />
        </p>
      </nav>
    </div>
  );
};

export default navBar;
