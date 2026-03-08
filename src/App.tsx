import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}

export default App;
