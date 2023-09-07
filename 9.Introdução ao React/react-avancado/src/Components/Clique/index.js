export default function Clique () {
 function Clicado () {
  window.alert("Você clicou no botão")
 }

 function PassouPorCima(){
  window.alert("Passou por cima do botão")
 }
 
 return (
 <div>
  <button onClick={Clicado}>Clique aqui</button>
  <button onMouseEnter={PassouPorCima}>onMouseEnter Teste!</button>
 </div>
 )
}