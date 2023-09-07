export default function ListaCondicional() {

 const Mercado = [
   {id:1, name:"Arroz", price:6.79, estoque:0},
   {id:2, name:"Feijão", price:11.30, estoque:15},
   {id:3, name:"Açúcar", price:4.19, estoque:5},
   {id:4, name:"Café", price:17.69, estoque:4},
   {id:5, name:"Macarrão", price:4.55, estoque:20},
 ]


 const chamaListaCondicional = Mercado.map(
   (arr) => {
    if(arr.estoque > 0){
     return (
    
      //faz validação de condição antes do da renderização
      <p key={arr.id}>{arr.name} possui o preço: R${arr.price} {arr.estoque <=5 && "Últimas unidades"} </p>

      //A AND Expression é uma alternativa a expressão ternária, onde no AND Expression você pode renderizar um item quando você não precisa de uma resposta para condição negativa.
     
    )
    }
   }  
 )

 return (
   <div>
     <h3>Lista <br/> Condicional</h3>
     {chamaListaCondicional}
   </div>
 );
}
