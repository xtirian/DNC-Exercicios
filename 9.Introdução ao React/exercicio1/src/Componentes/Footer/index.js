import React from "react";
import "./style.css"


export default function Footer() {
  return (
    <div className="footer-container" >
      <section className="location footer-sect">
       <p>Brasil</p>
      </section>
      <footer className="footer-sect">
       <section className="links">
        <p>Sobre</p>
        <p>Publicidade</p>
        <p>Negócios</p>
        <p>Como funciona a Pesquisa</p>
       </section>
       <section className="copy">
        <p>Privacidade</p>
        <p>Termos</p>
        <p>Configurações</p>
       </section>
      </footer>
    </div>
  );
}
