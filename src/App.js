import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Particles from "react-tsparticles";
import Footer from "./components/Footer/Footer";
import { loadFull } from "tsparticles";

// Particles setting vvvvv
const particlesInit = async (main) => {
  await loadFull(main);
};
const particlesLoaded = (container) => {
  return;
};
const options = {
  fpsLimit: 30,
  interactivity: {
    detect_on: "canvas",
    modes: {
      push: {
        quantity: 8,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#807E68",
    },
    links: {
      color: "#CCCABA",
      distance: 150,
      enable: true,
      opacity: 0.6,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 120,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
// Particles setting ^^^^^

function App() {
  return (
    <div className="container-fluid">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="particles"
      />
      <Nav />
      <hr className="m-1 pb-4" />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/Projects" exact element={<Projects />} />
        <Route path="/Resume" exact element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
