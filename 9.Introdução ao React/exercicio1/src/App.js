import './App.css';

import Header from './Componentes/Header'
import Footer from './Componentes/Footer'

import Main from './Componentes/Main';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
       <Header />
       <Footer />
      </header>
      <main className='main-contet'>
        <Main />
      </main>
    </div>
  );
}

export default App;
