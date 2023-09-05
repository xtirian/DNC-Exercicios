import "./App.css";
import NavBar from "./assets/components/sections/NavBar";
import Presentation from "./assets/components/sections/Presentation";
import Skills from "./assets/components/sections/Skills";
import Projects from "./assets/components/sections/Projects";
import Footer from "./assets/components/sections/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Presentation />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
