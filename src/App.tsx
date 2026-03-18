import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import ServiceDetailPage from "./components/ServiceDetailPage";
import type { ServiceData } from "./components/ServiceDetailPage";

function App() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null);

  return (
    <div className="app">
      <Header onServiceSelect={setActiveService} />
      <main>
        <Home />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      {activeService && (
        <ServiceDetailPage
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </div>
  );
}

export default App;
