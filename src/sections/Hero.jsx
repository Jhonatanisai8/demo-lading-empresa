import React from "react";

const subtitulo =
  "Simplifica tus Pagos. Gestiona tus transacciones sin complicaciones.";
const parrafo =
  "Nuestra plataforma te ayuda a recibir y enviar pagos de forma segura y eficiente, optimizando tu tiempo y recursos para que te enfoques en lo que realmente importa.";
export const Hero = () => {
  return (
    <>
      <section className="section__container">
        <header>
          <h2 className="section__subtitle">{subtitulo}</h2>
          <p className="section__parrafo">{parrafo}</p>
        </header>
      </section>
    </>
  );
};
