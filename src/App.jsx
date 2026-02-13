import React from "react";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/SubComponents/Title/Title";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Sessions from "./Components/Sessions/Sessions";
import Passes from "./Components/Passes/Passes";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Services />
      <About />
      <Sessions />
      <Passes />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
