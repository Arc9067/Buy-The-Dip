import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Tokenomics from "./Components/Tokenomics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-primary font-Papernotes font-bold">
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
