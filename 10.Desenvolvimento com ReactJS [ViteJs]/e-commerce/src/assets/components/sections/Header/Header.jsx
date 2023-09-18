import React, {useState} from "react";
import './header.scss'

import NavBar from "../../elements/navBar/navBar";



const Header = (props) => {
  let showNav = props.nav
  let currentPage = props.page

  if(showNav === false){
    console.log(document.getElementById('navBar'))
    }


  return (
    <>
      <header className="header_container">
       <div className="header_container-grid">
        <div className="header_container-grid-logo">
         <img src="/logo.png" alt="logo" />
        </div >       

        {showNav === true && <NavBar currentPage={currentPage} />}  

        

       </div>

      </header>
    </>
  );
};

export default Header;
