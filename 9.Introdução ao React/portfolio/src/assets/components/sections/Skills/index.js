import style from './style.module.css'

import jsIcon from '../../../images/skills/js.svg'
import htmlIcon from '../../../images/skills/html.svg'
import cssIcon from '../../../images/skills/css.svg'
import reactIcon from '../../../images/skills/react.svg'
import tsIcon from '../../../images/skills/ts.svg'

export default function Skills(){
 return (
  <section id='Skills' className={style.Skills}>
   <h2>Habilidades</h2>
   <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
   <div className={style.skillsGrid}>

    <img src={jsIcon} />
    <img src={htmlIcon} />
    <img src={cssIcon} />
    <img src={reactIcon} />
    <img src={tsIcon} />
   </div>
  </section>
 )
}