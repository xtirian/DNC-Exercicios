import { Component } from "react";

export default class HomeClass extends Component {
  state = {
    titulo: "Home Class",
    subtitle: "Subtitle"
  };

  componentDidMount() {
    console.log("Montado")
  }

  componentDidUpdate(){
    console.log("Algo foi atualizado")
  }

  componentWillUnmount(){
    console.log("Desmontou")
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <h2>{this.state.subtitle}</h2>
        <button onClick={() => this.setState({titulo: "Novo Titulo", subtitle: "Novo Subtitle"})}>Alterar Titulo</button>
      </div>
    );
  }
}
