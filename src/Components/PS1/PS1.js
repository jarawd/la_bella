import React from 'react';

export default function PS1({ title, img, description }) {
  return (
    <div className="product">
      <h2 className="product__title">{title}</h2>
      <img
        src={img}
        alt={`Imagen de ${title}`}
        className="product__img"
      />
      <p className="product__description">{description}</p>
    </div>
  );
}
