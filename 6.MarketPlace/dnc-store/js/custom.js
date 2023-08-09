function alterarDestaque() {
  var cards = document.getElementsByClassName("card-produto");
  cards = Array.from(cards);

  for (x = 0; x < cards.length; x++) {
    console.log(cards[x].classList);

    cards[x].classList.toggle("card-produto-destaque");

    console.log(cards[x].classList);
  }
}

setInterval(alterarDestaque, 1500);
