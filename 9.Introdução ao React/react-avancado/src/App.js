import './App.css';
import Clique from './Components/Clique';
import ListaCondicional from './Components/Condicional';
import Estado from './Components/Estado';
import EstadoCondicional from './Components/EstadoCondicional';
import Lista from './Components/Lista';
import Effect from './Components/UseEffect';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>renderização de Listas</h2>
        <Lista />
        <ListaCondicional />
        <h2>mouse Event</h2>
        <Clique />

        <h2>useState</h2>
        <Estado />

        <EstadoCondicional />

          <h2>useEffect</h2>
        <Effect />
      </header>
    </div>
  );
}

export default App;
