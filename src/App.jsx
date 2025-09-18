import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";

function App() {
  return (
    <>
      {/* <h1>Hola Mundo</h1> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
    </>
  );
}

export default App;
