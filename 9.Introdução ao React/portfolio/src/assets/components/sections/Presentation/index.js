import ButtonA from "../../elements/ButtonA";
import ButtonB from "../../elements/ButtonB";
import style from "./style.module.css";
import React, {useState, useEffect} from 'react';

export default function Presentation() {
  //set o texto inicial
  const [text, setText] = useState('');
  // lista de textos que serão rotacionados para digitar na tela.
  const toRotate = ['Matheus Fernandes...','xTirian...', 'Dev Front-End...', 'Bookworm...'];

  //criar uma variavel de estado com o index do elemento que será digitado natela
  const [loop, setLoop] = useState(0);

  //Set o estado se está escrevendo ou deletando o testo, visto que queremos que ele escrava letra por letra e depois apague do mesmo modo. Começará com writing porque quero que comece escrevendo
  const [status, setStatus] = useState('writing')

  const period = 150
  const [delta, setDelta] = useState(25)


  //funcao cleanUP
  useEffect(() => {
    let ticker = setInterval(() => {
      //aqui o useEffect está chamando a função de digitação que vai digitar letra por letra no tempo definido
      toType()
    }, delta);
    return () => {clearInterval(ticker)};
  }, [text]
  );

  function toType(){
    //esta variável vai pegar a posição do texto que vai ser digitado. ela vai ser cíclica por iisto vamos usar a variavel loop e o resto do array com os textos
    let currentTextPosition = loop % toRotate.length;
    let selectedText = toRotate[currentTextPosition];
    //esta estrutura irá verificar se está digitando ou está deletando e retornar a letra digitada
    let updatedText = status === "writing" ? (selectedText.substring(0,text.length+1)) : (selectedText.substring(0,text.length-1));

    setText(updatedText)

    if(status === "writing" && updatedText === selectedText){

      setStatus("deleting")
      setDelta(25)

    } else if (status === "deleting" && updatedText === ''){
      setStatus("writing")
      setDelta(period)
      setLoop(loop+1)
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
