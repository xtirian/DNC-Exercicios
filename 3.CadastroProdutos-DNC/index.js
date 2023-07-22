const arrLista = [];

class Produto {
  constructor() {
    this.id = 1;

    this.ListaSalva = new Array(); //Aqui eu chamei a lista salva com o constructor new Array para informar que aquela lista é um array, mas eu poderia só colocar '= []' também que seria a mesma coisa. Decidi colocar desta forma que parece mais profissional
  }

  addItem() {
    let produto = this.lerDados(); // Aqui chama a leitura de dados
    if (this.validar(produto) != false) {
      //Aqui confere se os campos foram preenchidos
      this.salvarProduto(produto); //se os campos foram preenchidos, salva o produto na Lista Salva onde ficarão agrupados todos os arrays
    }

    this.Listar(this.ListaSalva); 

    this.LimparCampos(); //Aqui eu chamo a função de limpar os campos, que retornam os valores dos campos para vazio
  }

  lerDados() {
    let produto = new Object(); //Aqui eu informei que o produto seria um objeto

    produto.id = this.id; // quando faço esta sentença, eu estou criando uma chave dentro do produto. Seria o mesmo que criar o produto = { id: this.id } Lembrando que o this é para informar que este dado id é referente ao Produto. Também pode ser usado em funções

    produto.nomeDoProduto = window.document.getElementById("nomeProduto").value;

    produto.valorDoProduto = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(window.document.getElementById("valorProduto").value); //Aqui eu estou criando a chave valorDoProduto dentro do objeto produto, dentro da classe Produto. aproveitei e usei esta nova função intl.numberformat que formata o valor recebido como se fosse uma moeda, colocando a formação que eu queria que quando chegasse em 1000 ele ficasse - 1.0000. Por isso eu pude retirar parseFloat, to fix e o replace. É genial pois dá para fazer outros tipos de moedas e etc com maior facilidade.

    // `R$ ${parseFloat(
    //   window.document.getElementById("valorProduto").value
    // )
    //   .toFixed(2)
    //   .replace(".", ",")}`;

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

  Listar(lista) {
    const listaTela = window.document.getElementById("listaProdutos");
    listaTela.innerHTML = ``;

    //No começo eu fiz de um jeito bem fraco, do tipo pegar a litaTela e fazer um innerHTML adicionando a ele por escrito <tr> <td>${lista[x].id}</td> ... </tr>, mas aprendi uma forma nova que é usando o insetRow() e i insertCell().

    for (let x = 0; x < lista.length; x++) {
      let tr = listaTela.insertRow();

      let td_id = tr.insertCell();
      let td_Nome = tr.insertCell();
      let td_Preco = tr.insertCell();
      let td_Editar = tr.insertCell();

      td_id.innerText = lista[x].id;
      td_Nome.innerText = lista[x].nomeDoProduto;
      td_Preco.innerText = lista[x].valorDoProduto;

      let delImagem = document.createElement("img");
      delImagem.src = "./assets/del.png";
      delImagem.setAttribute(
        "onclick",
        "produto.RemoverProduto(" + lista[x].id + ")"
      );

      td_Editar.appendChild(delImagem);
    }
  }

  LimparCampos() {
    window.document.getElementById("nomeProduto").value = "";

    window.document.getElementById("valorProduto").value = "";
  }

  RemoverProduto(id) {
    const listaTela = window.document.getElementById("listaProdutos");

    for (let x = 0; x < this.ListaSalva.length; x++) {
      if (this.ListaSalva[x].id == id) {
        window.alert(
        `O produto ${this.ListaSalva[x].nomeDoProduto} foi apagado com sucesso`);
        
        this.ListaSalva.splice((x), 1);
        listaTela.deleteRow(x);
      }
    }
  }
}

var produto = new Produto();
