import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import React, { useState, useEffect, useRef } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import * as THREE from "three";


function App() {
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.00,
  //         scaleMobile: 1.00,
  //         birdSize: 0.60,
  //         wingSpan: 40.00,
  //         speedLimit: 3.00,
  //         separation: 100.00,
  //         alignment: 8.00,
  //         cohesion: 100.00
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
