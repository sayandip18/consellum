import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import ServiceDetailPage from "./components/ServiceDetailPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Home />
              <About />
              <Services />
              <WhyChooseUs />
              <Contact />
            </main>
          }
        />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
