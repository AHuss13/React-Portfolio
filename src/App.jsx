import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import About from "./components/AboutMe";
import Project from "./pages/MyWork";
import Footer from "./components/Footer";
import UnderConstruction from "./components/Disclaimer";

const App = () => (
  <div className="App">
    <Header />
    <Nav />
    <UnderConstruction />
    <About />
    <Project />
    <Footer />
  </div>
);

export default App;
