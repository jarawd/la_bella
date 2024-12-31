import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

export default function Branch({ location, direction, map, schedule }) {
  return (
    <div className="branch">
      <h3 className="branch__location">{location}</h3>
      <p className="branch__direction">{direction}</p>
      <div className="branch__map">
        <FaLocationDot className="branch__map-icon" />
        <a
          href={map}
          target="_blank"
          rel="noreferrer"
          className="branch__map-link"
        >
          Ver mapa
        </a>
      </div>
      <p className="branch__schedule">{schedule}</p>
    </div>
  );
}
