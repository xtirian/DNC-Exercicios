import style from './style.module.css';
import Button from '../../elements/ButtonB';


export default function Projects(){
 return (
  <section id='Projects' className={style.Projects}>
   <h2>Projects</h2>

   <Button link="https://github.com/xtirian?tab=repositories">Ver repositório completo.</Button>
  </section>
 )
}