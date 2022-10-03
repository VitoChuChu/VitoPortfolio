import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "animate.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./pages/Homepage/Homepage";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <Routes>
        <Route path="VitoPortfolio/" exact element={<Homepage />} />
        <Route path="VitoPortfolio/Projects" exact element={<Projects />} />
        <Route path="VitoPortfolio/Resume" exact element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
