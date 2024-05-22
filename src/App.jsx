import React from "react";
import "./App.css";
import Header from "../components/Header";
import Nav from "../components/Navigation";
import About from "../components/AboutMe";
import Project from "../components/Project";
import Footer from "../components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Nav />
    <About />
    <Project />
    <Footer />
  </div>
);

export default App;
