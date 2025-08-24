import React from "react";
import "./Css/Web_juegos.css";
import "./Css/Carrito.css";
import Contacto from "./componentes/Contacto.jsx"

const Contactanos = () => {
  return (
    <div id="Contenedor">
      <section className="SecContactos">
        <div className="Integrantes">
          <h2>Integrantes</h2>
          <div className="Perfil">
            <figure>
              <img src="Img/Perfil/Seichi.jpg" alt="Seichi Susuki" />
              <figcaption>Seichi Susuki</figcaption>
            </figure>
            <figure>
              <img src="Img/Perfil/Gianello.jpg" alt="Gianello" />
              <figcaption>Gianello Marcos</figcaption>
            </figure>
            <figure>
              <img src="Img/Perfil/Sebastian.jpeg" alt="sebastian" />
              <figcaption>Sebastián Cahuana</figcaption>
            </figure>
          </div>
        </div>
        <div className="Formulario">
          <Contacto />
        </div>
      </section>
    </div>
  );
};

export default Contactanos;
