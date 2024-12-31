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
        className="products"
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
        className="location"
      >
        <h2 className="location-title">Sucursales</h2>
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
      <section className="orders">
        <h2 className="orders__title">Pedidos</h2>
        <div className="orders__contact">
          <p className="orders__number">
            <FaWhatsapp className="orders__icon" />
            871 123 45 67
          </p>
          <p className="orders__number">
            <FaWhatsapp className="orders__icon" />
            871 765 43 21
          </p>
        </div>
      </section>
    </div>
  );
}
