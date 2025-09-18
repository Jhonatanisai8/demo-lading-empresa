import React from "react";

const CardService = ({ titulo, parrafo, img }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={titulo} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{titulo}</h3>
        <p className="card__parrafo">{parrafo}</p>
      </div>
    </div>
  );
};

export default CardService;
