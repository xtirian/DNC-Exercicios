import React from "react";
import "./style.css"


export default function Header() {
  return (
    <div className="nav-container" >
      <nav className="nav">
        <p className="font">Gmail</p>
        <p className="font">Imagens</p>
        
        <img src="/images/icon/menu.svg" alt="menu.svg" />
        <img src="/images/profile.svg" alt="profile.svg" />
      </nav>
    </div>
  );
}
