import style from './style.module.css'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'


export default function NavBar() {
  return (
    <header>
      <div className={style.NavBarContainer}>        
         <ul>
          <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
          <li> <Nav.Link href="#Skills">Habilidades</Nav.Link></li>
          <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
         </ul>
         <ul>
          <li> <a href='https://www.instagram.com/xtirian/' target='_blank'><FaInstagram size={30} /></a></li>
          <li> <a href='https://github.com/xtirian'  target='_blank'><FaGithub size={30} /></a></li>
          <li> <a href='https://www.linkedin.com/in/mf-cunha/' target='_blank'><FaLinkedinIn size={30} /></a></li>
         </ul>
      </div>
    </header>
  );
}
