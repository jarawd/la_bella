import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          Quesadillas La Bella: Las Mejores de la Comarca Lagunera!
        </h1>
        <p className="hero__description">
          ¡Descubre el sabor de la Comarca Lagunera! Ofrecemos quesadillas con
          los mejores guisos caseros, preparadas con amor y tradición.
          ¡Visítanos hoy y deleita tu paladar con nuestro sazón único!
        </p>
      </div>
      <div className="hero__blurred"></div>
      <div className="hero__focused"></div>
      <div className="hero__shadow"></div>
    </div>
  );
}
