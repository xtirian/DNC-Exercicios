import style from './style.module.css'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import Icons from '../../elements/Icons';


export default function NavBar() {
  return (
    <header>
      <div className={style.NavBarContainer}>        
         <ul>
          <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
          <li> <Nav.Link href="#Skills">Habilidades</Nav.Link></li>
          <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
         </ul>
         <Icons />
      </div>
    </header>
  );
}
