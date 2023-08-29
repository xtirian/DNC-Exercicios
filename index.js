import React from "react";
import "./style.css";

import searchIcon from '/images/icon/search.svg'

export default function SearchBar() {
  return (
    <div>
      <form className="search-form">
        <label style={{backgroundImage: `url(${searchIcon})`}} className="search-label">
          <input className="search-input"></input>
        </label>
      </form>
    </div>
  );
}
