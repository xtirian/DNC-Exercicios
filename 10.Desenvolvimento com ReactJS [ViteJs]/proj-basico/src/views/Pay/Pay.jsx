import React, { Component } from "react";

//Neste caso, ao invés de criar o componente com o método de função, vou criar com o método de classe

export default class Pay extends Component {
  //Agora vou usar o state. Para usar o state preciso chamar a propriedade:
  state = {
    // quando a gente vai ter uma variável que vai ser atualizada dinamicamente  conforme um evento, precisamos que esta variável seja de estado. Assim que chamamos a variável de estado:
    count: 0,
  };

  //Para criar os eventos a gente precisa passar uma instrução de função.

  aumentar() {
    this.setState({ count: this.state.count + 1 });
  }

  //Para usar o props na classe, fazemos da seguinte forma: this.props.nome_da_props
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Aumenta
        </button>
        <ul>
          {this.props.lista.map((fruta, index) => (
            <div>
              <li>{fruta}</li>
              <div>{`item: ${index + 1} - fruta: ${fruta}`}</div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

