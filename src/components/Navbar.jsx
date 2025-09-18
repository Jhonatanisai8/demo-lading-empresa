import React from "react";

const seccionesNavbar = ["Inicio", "Sobre Nosotros", "Testimonios"];
export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Empresa Jhonatan´s</h1>
      <ul className="navbar__ul">
        {seccionesNavbar.map((seccion, index) => (
          <li className="navbar__ul--item" key={index}>{seccion}</li>
        ))}
      </ul>
    </nav>
  );
};
