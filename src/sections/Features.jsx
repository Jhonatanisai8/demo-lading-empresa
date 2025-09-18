import React from "react";
import img1 from "../assets/seguridad.png";
import img2 from "../assets/24-hours.png";
import img3 from "../assets/transacciones.png";
import CardService from "../components/CardService";
const tituloMain = "¿Por qué elegirnos?";
export const Features = () => {
  return (
    <>
      <main className="container">
        <h2 className="main__title">{tituloMain}</h2>
        <article className="main__cards">
          <CardService
            titulo="Máxima Seguridad"
            parrafo="Utilizamos la última tecnología de encriptación para proteger tus datos y transacciones en todo momento."
            img={img1}
          />
          <CardService
            titulo="Máxima Seguridad"
            parrafo="Agiliza tus cobros y pagos. Envía y recibe dinero en segundos, sin demoras ni procesos complicados."
            img={img2}
          />
          <CardService
            titulo="Soporte 24/7"
            parrafo="Nuestro equipo de expertos está siempre disponible para ayudarte a resolver cualquier duda o problema."
            img={img3}
          />
        </article>
      </main>
    </>
  );
};
