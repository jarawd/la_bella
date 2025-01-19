import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../utils/context';
import Header from '../Header/Header';

export default function About() {
  const { setMainActive, setAboutActive, setGoUp } = useContext(ProductContext);

  const navigate = useNavigate();

  const goToHome = () => {
    setMainActive(true);
    setAboutActive(false);
    setGoUp(true);
    navigate('/');
  };

  return (
    <div className="about">
      <Header />
      <Link
        onClick={goToHome}
        className="about__go-back"
        to={'/'}
      >
        Volver al inicio
      </Link>
      <section className="about__section">
        <h2 className="about__title">Nosotros</h2>
        <p className="about__content">
          Bienvenidos a <strong>Quesadillas la Bella</strong>, un nuevo destino
          culinario en la Comarca Lagunera, donde la tradición y el sabor se
          encuentran para ofrecerte una experiencia gastronómica única. Abrimos
          nuestras puertas este año 2025, trayendo a la región nuestras
          deliciosas quesadillas elaboradas con ingredientes frescos y locales.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Nuestra Historia</h2>
        <p className="about__content">
          Nacimos de una pasión familiar por la cocina y un deseo de compartir
          los auténticos sabores de nuestra tierra. Inspirados por una receta
          transmitida de generación en generación, decidimos fundar "Quesadillas
          la Bella" para que todos pudieran disfrutar de nuestras exquisitas
          creaciones.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Nuestra Filosofía</h2>
        <p className="about__content">
          En "Quesadillas la Bella", valoramos la calidad y la autenticidad en
          cada platillo. Nos comprometemos a mantener vivos los métodos
          tradicionales de preparación y trabajamos con productores locales que
          comparten nuestra pasión por la excelencia. Cada quesadilla que
          servimos es un reflejo de nuestro amor por la buena comida y el
          servicio excepcional.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Nuestro Equipo</h2>
        <p className="about__content">
          Nuestro equipo está formado por personas apasionadas y dedicadas,
          listas para brindarte una experiencia memorable desde el primer día.
          Desde nuestras cocineras hasta nuestro personal de servicio, todos
          compartimos el mismo objetivo: hacerte sentir como en casa y que
          disfrutes cada bocado de nuestras quesadillas.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__title">Ven a Conocernos</h2>
        <p className="about__content">
          Te invitamos a visitarnos y descubrir por ti mismo por qué
          "Quesadillas la Bella" será tu nuevo lugar favorito. Ya sea que vengas
          solo, con amigos o con la familia, estamos aquí para ofrecerte un
          momento delicioso y acogedor. ¡Gracias por ser parte de nuestra nueva
          historia!
        </p>
      </section>
    </div>
  );
}
