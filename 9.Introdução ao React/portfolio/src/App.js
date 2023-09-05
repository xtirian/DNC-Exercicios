
import './App.css';
import NavBar from './components/sections/NavBar';
import Presentation from './components/sections/Presentation';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
