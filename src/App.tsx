import React from "react";
import "./App.css";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import Evolution from "./sections/Evolution";
import { Capabilities } from "./sections/Capabilities";
import { Architecture } from "./sections/Architecture";
import { Experience } from "./sections/Experience";
import { Exploring } from "./sections/Exploring";
import { Footer } from "./components/Footer";
import { Skills } from "./sections/Skills";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="block">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Evolution />
          <Skills />
          <Capabilities />
          <Architecture />
          <Experience />
          <Exploring />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
