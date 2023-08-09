function alterarDestaque() {
  var cards = document.getElementsByClassName("card-produto");
  cards = Array.from(cards);

  for (x = 0; x < cards.length; x++) {
    cards[x].classList.toggle("card-produto-destaque");
  }
}

setInterval(alterarDestaque, 1500);

function getProduct() {
  fetch("http://localhost:3000/produtos")
    .then((response) => response.json())
    .then((data) => {
      let list = document.getElementById("product-list");

      console.log(list.innerHTML);

      for (let x = 0; x < data.length; x++) {
        console.log(list.innerHTML)

        list.innerHTML = list.innerHTML +
          `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12"><div class="sport_product card-produto"><figure><img src="${data[x].urlImagem}" alt="img" /></figure><h3> <strong class="price_text">${data[x].preco}</strong></h3><h4>${data[x].nomeProduto}</h4></div></div>`;
      }
    });
}

getProduct();
