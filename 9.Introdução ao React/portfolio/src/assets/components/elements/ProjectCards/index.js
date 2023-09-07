import style from './style.module.css';
import Button from '../ButtonB';

import Project1 from '../../../images/projects/thumbnail-project1.webp'

export default function ProjectCards({img, liveURL, title, technologies, content, link}) {
 return (
  <div className={style.cardProject}>
   <a href={liveURL} target="_blank">
   <img src={img} />
   </a>
   <section>
    <h3>{title}</h3>
    <p><strong>Tecnologias:</strong> {technologies}</p>
    <p><em>{content}</em></p>
    <Button link={link}>Acesse ao Repositório</Button>
   </section>
  </div>
 )
}