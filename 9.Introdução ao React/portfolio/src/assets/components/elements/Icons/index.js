import style from './style.module.css'
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";


export default function Icons() {
  return (
    <header>
      <div className={style.IconContainer}>  
         <ul>
          <li> <a href='https://www.instagram.com/xtirian/' target='_blank'><FaInstagram size={30} /></a></li>
          <li> <a href='https://github.com/xtirian'  target='_blank'><FaGithub size={30} /></a></li>
          <li> <a href='https://www.linkedin.com/in/mf-cunha/' target='_blank'><FaLinkedinIn size={30} /></a></li>
         </ul>
      </div>
    </header>
  );
}
