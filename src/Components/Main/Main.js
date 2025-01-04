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
        <h2 className="section-title">Menú</h2>
        {products.map((item) => (
          <PS1
            key={item.id}
            title={item.title}
            img={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </section>
      <section
        ref={goToBranches}
        className="location"
      >
        <h2 className="section-title">Sucursales</h2>
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
    </div>
  );
}
