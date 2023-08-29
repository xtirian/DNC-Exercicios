import React from "react";
import "./style.css"

import SearchBar from "../searchBar";
import Button from "../Button";


export default function Main() {
  return (
    <div className="search-sect" >
      <img src="/images/logo.svg " alt="logo" width={256}  />
      
      <SearchBar />
      <div className="button-container">
        <Button>Pesquisa Google</Button>
        <Button>Estou com sorte</Button>
      </div>

      <div className="secuity-container">
        <img src="/images/security.svg" alt="iiiiuuuiiiiuuuiiiuuu.svg" />
        <span style={{color: `#1A0DBD`,fontSize:"15px"}}>Faça o Check-up de privacidade</span>
      </div>
    </div>
  );
}
