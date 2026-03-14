import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import ServicesMenu from "./components/ServicesMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <ServicesMenu />;
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
}

export default App;
