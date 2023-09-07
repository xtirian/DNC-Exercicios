export default function Lista() {

  const Mercado = [
    {id:1, name:"Arroz", price:6.79},
    {id:2, name:"Feijão", price:11.30},
    {id:3, name:"Açúcar", price:4.19},
    {id:4, name:"Café", price:17.69},
    {id:5, name:"Macarrão", price:4.55},
  ]


  const chamaLista = Mercado.map(
    (arr) =>  (
      //faz a renderização dos itens da lista
      <p key={arr.id}>{arr.name} possui o preço: R${arr.price}</p>
    )
  )

  return (
    <div>
      <h3>Lista</h3>
      {chamaLista}
    </div>
  );
}
