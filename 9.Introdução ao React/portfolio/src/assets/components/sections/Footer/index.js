import Icons from '../../elements/Icons'
import style from './styles.module.css'

export default function Footer(){
 return (
  <div className={style.FooterContainer}>
   <Icons />
   <div>
    <p><a href="mailto:tirianx@yahoo.com">tirianx@yahoo.com</a></p>
    <p>xTirian © 2023</p>

   </div>
  </div>
 )
}