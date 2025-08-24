import React from "react";
import "./Css/Web_juegos.css";
import "./Css/Carrito.css";

const SobreNosotros = () => {
  return (
    <div id="Contenedor">
      <section className="Nosotros">
        <img src="/Img/Juegos/Sobre_nosotros.jpg" alt="Sobre Nosotros" />
        <div>
          <h1><strong><u>Sobre Nosotros</u></strong></h1>
          <br />
          <p>
            En esta tienda vivimos y respiramos videojuegos. Nos dedicamos a ofrecerte los títulos más recientes, los clásicos que no pueden faltar y las mejores ofertas para que disfrutes al máximo tu experiencia gamer.  
            <br /><br />
            Nuestra misión es brindarte un servicio ágil, seguro y cercano, acompañándote en cada partida y ayudándote a descubrir nuevos mundos, desafíos y aventuras.  
            <br /><br />
            Gracias por confiar en nosotros y ser parte de nuestra comunidad de jugadores. ¡Que comience la partida!
          </p>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
