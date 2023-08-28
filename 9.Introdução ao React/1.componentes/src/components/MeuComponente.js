import React from "react";

import styles from './styles.module.css'

export default function MeuComponente() {
  const nome = "Matheus"
  const soma = 1 + 3

  const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRReQlm_Y-62qpkESsGZ7oaapxqq1yUnAOyQ5bGLa7fww&s"
  return (
    <div className={styles}>
      <h1 className="componente">Título</h1>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae aliquet massa. Sed pretium magna ligula, quis consequat ipsum pretium et. Vestibulum a congue diam. Sed hendrerit iaculis leo, eu gravida lectus egestas lobortis. Nam tempor nisi scelerisque lacus pharetra, at efficitur ex aliquam. Cras finibus mi mollis, fringilla felis quis, lobortis leo. Fusce dapibus mi eget sapien sodales fringilla sed ut nibh. Nunc luctus dui eget finibus fringilla. Donec blandit erat sit amet urna faucibus, vitae sodales ante pulvinar. Mauris eget porttitor nisi. Nam pharetra ullamcorper volutpat. Mauris elit quam, pulvinar et justo eu, interdum ultrices magna. Aliquam nisl justo, accumsan in ultricies quis, ullamcorper a ligula. Curabitur efficitur velit eu lectus faucibus tempus. Praesent ultricies neque non commodo ultricies. Fusce vitae justo at velit consequat tristique. 
      </p>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* <h1>Título</h1>
    <h2>Subtítulo</h2>
    <p>{nome}</p> {/* Chamado de Interpolação
    <p>{soma}</p>
    <img src={logo} width={150} alt="ERROR" /> */}
    </div>
  );
}
