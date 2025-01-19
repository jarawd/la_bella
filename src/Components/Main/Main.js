import React, { useContext } from 'react';
import { ProductContext } from '../../utils/context';
import products from '../../utils/info_ps1';
import locations from '../../utils/locations';

/* PS1: Product Structure 1*/
import PS1 from '../PS1/PS1';
import Branch from '../Branch/Branch';

export default function Main() {
  const { setDropMenu } = useContext(ProductContext);

  return (
    <div
      onClick={() => setDropMenu(false)}
      className="content"
      id="home"
    >
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__title">
            Quesadillas La Bella: Las Mejores de la Comarca Lagunera!
          </h1>
          <p className="hero__description">
            ¡Descubre el sabor de la Comarca Lagunera!, Ofrecemos quesadillas
            con los mejores guisos caseros, preparadas con amor y tradición.
            ¡Visítanos hoy y deleita tu paladar con nuestro sazón único!
          </p>
        </div>
        <div className="hero__blurred"></div>
        <div className="hero__focused"></div>
        <div className="hero__shadow"></div>
      </div>
      <section
        id="products"
        className="content__products"
      >
        <h2 className="content__section-title">Menú</h2>
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
        id="branches"
        className="content__location"
      >
        <h2 className="content__section-title">Sucursales</h2>
        {locations.map((item) => (
          <Branch
            key={item.id}
            name={item.name}
            direction={item.direction}
            map={item.map}
            schedule={item.schedule}
          />
        ))}
      </section>
    </div>
  );
}
