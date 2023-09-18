import React from "react";

import { FaSearch } from "react-icons/fa";
import { GoPerson, GoHeart } from "react-icons/go";

import './searchBar.scss'

const searchBar = () => {
  return (
    <div className="searchBar_container">
      <label className="searchBar">
        
        <FaSearch
          size={24}
          style={{ color: "#7a7a7a55", transform: "scaleX(-1)" }}
        />
        <input type="text" placeholder="O que você está procurando?" />
      </label>
      <div className="profile_container">
        <GoPerson size={35} />
        <GoHeart size={35} />

      </div>
    </div>
  );
};

export default searchBar;
