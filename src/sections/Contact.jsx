import React from "react";
import { Button } from "../components/Button";

const titulo = "¿Listo para transformar tus pagos?";
const subtitulo =
  "Únete a miles de empresas que ya confían en nosotros para una gestión financiera más inteligente, segura y eficiente.";

export const Contact = () => {
  return (
    <>
      <section className="contat__container">
        <header>
          <h2 className="contat_title">{titulo}</h2>
        </header>
        <p className="contat__parrafo">{subtitulo}</p>
        <Button titulo={"Registrate ahora y empieza"}></Button>
      </section>
    </>
  );
};
