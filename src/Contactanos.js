import React from "react";
import "./Css/Contáctanos.css";
import "./Css/Carrito.css";

const Contactanos = () => {
  return (
    <div id="Contenedor">
      <section>
        <div className="Integrantes">
          <h2>Integrantes</h2>
          <div className="Perfil">
            <figure>
              <img src="Img/Perfil/Seichi.jpg" alt="Seichi Susuki" />
              <figcaption>Seichi Susuki</figcaption>
            </figure>
            <figure>
              <img src="Img/Perfil/Gianello.jpg" alt="Nombre" />
              <figcaption>Gianello Marcos</figcaption>
            </figure>
            <figure>
              <img src="Img/Perfil/xxx" alt="Nombre" />
              <figcaption>Nombre</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactanos;
