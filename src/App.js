import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("dark");

  const lightModeStyles = {
    backgroundColor: "#FAF9F6",
    color: "#201F20",
  };
  
  const darkModeStyles = {
    backgroundColor: "#201F20",
    color: "#FAF9F6",
  };

  return (
    <div style={mode === "light" ? lightModeStyles : darkModeStyles}>
      <NavBar setMode={setMode} mode={mode} lightModeStyles={lightModeStyles} darkModeStyles={darkModeStyles}/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
