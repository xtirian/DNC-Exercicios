import ButtonA from "../../elements/ButtonA";
import ButtonB from "../../elements/ButtonB";
import style from "./style.module.css";
import React, {useState, useEffect} from 'react';

export default function Presentation() {
  const [text, setText] = useState('');
  const toRotate = ['Matheus Fernandes!','xTirian?!', 'Desenvolvedor Front End.', 'Bookworm...'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100)
  

  useEffect(()=>{
      let ticker = setInterval(()=>{
          toType()
      }, delta)
      return()=> {clearInterval(ticker)}

  }, [text])

  const toType = () =>{
     let i = loop % toRotate.length;
     let fullText = toRotate[i]
     let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

     setText(updatedText);

     if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
     }else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
     }

  }



  return (
    <section className={style.Presentation} id="Presentation">
      <p>
        <strong>
         Bem-vindo ao meu Portfólio
         </strong>
      </p>
      <h1>Olá, eu sou {text}</h1>
      <p>Sou apaixonado por desafios e sempre estou em busca de aprendizado contínuo. Com um amor profundo por livros e música, vejo a vida como uma constante oportunidade de explorar e crescer. Atualmente, estou focado em construir uma base para me tornar um futuro Desenvolvedor Full-Stack. Minha jornada me levou a me aprofundar no ambiente do Desenvolvimento Web com JavaScript, React, Node e Express, enquanto também estou explorando as complexidades do Java e suas aplicações Front-End com Angular. Acredito que o crescimento se dá com a combinação única de criatividade, resolução de problemas e oportunidades. Estou sempre pronto para abraçar novos conhecimentos e desafios, a fim de contribuir para projetos inovadores e impactantes.</p>

      <ButtonA link="https://github.com/xtirian" >Conecte-se Comigo!!</ButtonA>
    </section>
  );
}
