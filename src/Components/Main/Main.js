import React, { useContext } from 'react';
import { ProductContext } from '../../utils/context';
import products from '../../utils/info_ps1';
import locations from '../../utils/locations';
import { FaWhatsapp } from 'react-icons/fa6';

/* PS1: Product Structure 1*/
import PS1 from '../PS1/PS1';
import Branch from '../Branch/Branch';

export default function Main() {
  const { goToProducts, goToBranches } = useContext(ProductContext);

  return (
    <div className="content">
      <section
        ref={goToProducts}
        className="content__products"
      >
        {products.map((item) => (
          <PS1
            key={item.id}
            title={item.title}
            img={item.image}
            description={item.description}
          />
        ))}
      </section>
      <section
        ref={goToBranches}
        className="content__location"
      >
        <h2 className="content__location-title">Sucursales</h2>
        {locations.map((item) => (
          <Branch
            key={item.id}
            location={item.location}
            direction={item.direction}
            map={item.map}
            schedule={item.schedule}
          />
        ))}
      </section>
      <section className="content__orders">
        <h2 className="content__orders-title">Pedidos</h2>
        <div className="content__orders-numbers">
          <FaWhatsapp className="content__orders-icon" />
          <span className="content__orders-item">871 123 45 67,</span>
          <span className="content__orders-item">871 765 43 21</span>
        </div>
      </section>
    </div>
  );
}
