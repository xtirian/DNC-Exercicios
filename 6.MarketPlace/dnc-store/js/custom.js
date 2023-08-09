function alterarDestaque() {
  var cards = document.getElementsByClassName("card-produto");
  cards = Array.from(cards);

  for (x = 0; x < cards.length; x++) {
    
    cards[x].classList.toggle("card-produto-destaque");

    
  }
}

setInterval(alterarDestaque, 1500);


function getProduct () {
  fetch('http://localhost:3000/produtos').then( (response) => response.json() ).then((data) => {
    console.log(data)
  })
}

getProduct()