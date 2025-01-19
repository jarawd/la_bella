import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

export default function Branch({ name, direction, map, schedule }) {
  return (
    <div className="branch">
      <h3 className="branch__name">{name}</h3>
      <p className="branch__direction">{direction}</p>
      <div className="branch__location">
        <FaLocationDot className="branch__location-icon" />
        <a
          href={map}
          target="_blank"
          rel="noreferrer"
          className="branch__location-link"
        >
          Ver ubicación
        </a>
      </div>
      <p className="branch__schedule">{schedule}</p>
    </div>
  );
}
