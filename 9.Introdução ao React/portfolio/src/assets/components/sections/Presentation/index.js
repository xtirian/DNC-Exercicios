import ButtonA from "../../elements/ButtonA";
import ButtonB from "../../elements/ButtonB";
import style from "./style.module.css";

export default function Presentation() {
  return (
    <section className={style.Presentation} id="Presentation">
      <p>
        <strong>
         Bem-vindo ao meu Portfólio
         </strong>
      </p>
      <h1>Olá, eu sou Matheus</h1>
      <p>Sou apaixonado por desafios e sempre estou em busca de aprendizado contínuo. Com um amor profundo por livros e música, vejo a vida como uma constante oportunidade de explorar e crescer. Atualmente, estou focado em construir uma base para me tornar um futuro Desenvolvedor Full-Stack. Minha jornada me levou a me aprofundar no ambiente do Desenvolvimento Web com JavaScript, React, Node e Express, enquanto também estou explorando as complexidades do Java e suas aplicações Front-End com Angular. Acredito que o crescimento se dá com a combinação única de criatividade, resolução de problemas e oportunidades. Estou sempre pronto para abraçar novos conhecimentos e desafios, a fim de contribuir para projetos inovadores e impactantes.</p>

      <ButtonA link="https://github.com/xtirian" children="Conecte-se Comigo!!" />
    </section>
  );
}
