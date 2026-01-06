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

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="block">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Evolution />
          <Capabilities />
          <Architecture />
          <Experience />
          <Exploring />
          <Contact />
        </main>

        <footer className="py-10 text-center border-t border-white/5 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Dawit Haile. Built with Passion &
            React.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
