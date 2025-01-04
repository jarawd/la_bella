import React, { useContext } from 'react';
import { ProductContext } from '../../utils/context';

export default function PS1({ title, img, description, price }) {
  const { setPopupActive, setPopupData } = useContext(ProductContext);

  const getData = () => {
    setPopupData({
      img,
      title,
      description,
      price,
    });
    setPopupActive(true);
  };

  return (
    <div
      onClick={getData}
      className="product"
    >
      <img
        src={img}
        alt={`Imagen de ${title}`}
        className="product__img"
      />
      <h2 className="product__title">{title}</h2>
    </div>
  );
}
