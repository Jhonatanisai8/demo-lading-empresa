import React from "react";
import CardServiceTestimonials from "../components/CardServiceTestimonials";
const parrafos = [
  "La plataforma de IsaiX ha transformado por completo la forma en que gestionamos nuestros pagos. Es intuitiva, rápida y el soporte es insuperable.",
  "Nunca pensé que la gestión financiera podría ser tan sencilla. Gracias a IsaiX, hemos optimizado nuestro tiempo y evitado errores costosos.",
];
const autores = [
  "Jhonatan Isai, CEO de IsaiX",
  "Luis Morales, Director de Finanzas en Global Solutions",
];
export const Testimonials = () => {
  return (
    <>
      <section className="testimonials__container">
        <div>
          <h2 className="testimonial__title">Lo que Nuestros Clientes Dicen</h2>
        </div>
        <div className="testimonials_card">
          <CardServiceTestimonials
            parrafo={parrafos[0]}
            autor={autores[0]}
          ></CardServiceTestimonials>
          <CardServiceTestimonials
            parrafo={parrafos[1]}
            autor={autores[1]}
          ></CardServiceTestimonials>
        </div>
      </section>
    </>
  );
};
