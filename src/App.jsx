import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* <h1>Hola Mundo</h1> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
