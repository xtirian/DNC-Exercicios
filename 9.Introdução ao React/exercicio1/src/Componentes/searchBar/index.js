import React from "react";
import "./style.css";

export default function SearchBar() {
  return (
    <div className="searchBar-container">
      <form className="search-form">
        <span
          for="Bar"
          style={{ backgroundImage: "url(/images/icon/search.svg)" }}
          className="search-span"
        ></span>
        <input id="Bar" className="search-input" type="text" />
        <div className="second-icons-grid">
          <img src="/images/icon/teclado.svg" alt="teclado" />
          <img src="/images/icon/microfone.svg" alt="mic" />
        </div>
      </form>
    </div>
  );
}
