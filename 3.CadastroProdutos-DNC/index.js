const listaTela = window.document.getElementById("listaProdutos");

const arrLista = [];

class Produto {
  constructor() {
    this.id = 1;

    this.ListaSalva = [];
  }

  addItem() {
    let produto = this.lerDados(); // Aqui chama a leitura de dados
    if (this.validar(produto) != true) { //Aqui confere se os campos foram preenchidos
      this.salvarProduto(produto); //se os campos foram preenchidos, salva o produto na Lista Salva onde ficarão agrupados todos os arrays
    }
    console.log(this.ListaSalva );
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;

    produto.nomeDoProduto = window.document.getElementById("nomeProduto").value;

    produto.valorDoProduto = parseFloat(
      window.document.getElementById("valorProduto").value
    )
      .toFixed(2)
      .replace(".", ",");

    return produto; //aqui retorna o produto para o addItem
  }

  validar(produto) {
    let msg = "";

    if (produto.nomeDoProduto == "") {
      msg += "Preencha o campo com o nome do produto \n\n";
    }
    if (produto.valorDoProduto == "NaN") {
      msg += "Agora preencha o campo com o valor do produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }
  }

  salvarProduto(produto) {
    this.ListaSalva.push(produto);
    this.id++;
  }
}

var produto = new Produto();
