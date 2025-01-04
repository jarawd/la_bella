import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { ProductContext } from '../../utils/context';

export default function Popup({ active, data }) {
  const { setPopupActive } = useContext(ProductContext);

  const handlePopup = () => {
    setPopupActive(false);
  };

  return (
    <div className={`popup${active ? ' active' : ''}`}>
      <div className="popup__shadow"></div>
      <div className="popup__content">
        <IoClose
          className="popup__content-close"
          onClick={handlePopup}
        />
        <img
          src={data.img}
          alt={`Imagen de ${data.title}`}
          className="popup__content-image"
        />
        <h2 className="popup__content-title">{data.title}</h2>
        <p className="popup__content-description">{data.description}</p>
        <p className="popup__content-price">${data.price}</p>
      </div>
    </div>
  );
}
