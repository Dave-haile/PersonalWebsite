import React, { useEffect, useState } from "react";
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
import LoadingOverlay from "./components/LoadingOverlay";
import { subscribeLoadingState } from "./three/loadingManager";

const App: React.FC = () => {
  const [loading, setLoading] = useState({ visible: true, progress: 0 });

  useEffect(() => {
    return subscribeLoadingState((s) => {
      setLoading({ visible: !s.ready, progress: s.progress });
    });
  }, []);

  useEffect(() => {
    if (!loading.visible) {
      document.body.style.overflow = "";
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [loading.visible]);

  return (
    <div className="relative min-h-screen">
      <LoadingOverlay visible={loading.visible} progress={loading.progress} />
      <div className={loading.visible ? "block pointer-events-none" : "block"}>
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
