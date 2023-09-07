import style from './style.module.css';
import Button from '../../elements/ButtonB';
import ProjectCards from '../../elements/ProjectCards';
import project1 from '../../../images/projects/thumbnail-project1.webp';
import project6 from '../../../images/projects/thumbnail-project6.webp';
import project5 from '../../../images/projects/thumbnail-project5.webp'



export default function Projects(){
 return (
  <section id='Projects' className={style.Projects}>
   <h2>Projects</h2>

   <ProjectCards img={project1} liveURL="https://bmi-calculator-blond-two.vercel.app/" title="BMI Calculator" technologies="HTML, SASS, CSS, JAVASCRIPT" content="Este site é uma Calculadora de índice de massa corporal, com formulário personalizado, manipulação de DOM e layout responsivo. " link="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator" />
   <ProjectCards img={project6} liveURL="https://xtirian-portfolio.vercel.app/" title="Portifolio Dev" technologies="Next.JS Typescript CSS" content="Este site é um portifólio minimalistam formato single page, com os meus principais projetos." link="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/sp-developer-portfolio" />
   <ProjectCards img={project5} liveURL="https://pod-alpha.vercel.app/" title="Podcast Request" technologies="HTML CSS JAVASCRIPT" content="Nesta página uso um formulário com validação personalizada" link="https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/pod-request-access-landing-page"  />

   <Button link="https://github.com/xtirian?tab=repositories">Ver repositório completo.</Button>
  </section>
 )
}