import React from "react";

const CardServiceTestimonials = ({ parrafo, autor }) => {
  return (
    <div className="card card_testimonio">
      <div className="card__content">
        <h3 className="card__testimonio--parrafo">
          <i>"{parrafo}"</i>
        </h3>
        <p className="card__testimonio--autor">
          <i>{autor}</i>
        </p>
      </div>
    </div>
  );
};

export default CardServiceTestimonials;
