import React from "react";
import { Link } from "react-router-dom";
import "./Css/Ofertas.css";
import "./Css/Carrito.css";

const Ofertas = () => {
  const productos = [
    { id: 26, precio: "S/.25.90" },
    { id: 27, precio: "S/.18.00" },
    { id: 28, precio: "S/.22.00" },
    { id: 29, precio: "S/.16.00" },
  ];

  return (
    <div id="Contenedor">
      <section>
        <div className="General" id="lista_de_prod">
          <h2 id="Ofertas">Ofertas</h2>
          <div className="AllOfertas">
            {productos.map((prod) => (
              <div className="JuegoOferta" key={prod.id}>
                <img src="/Img/Juegos/ELDEN_RING_NIGHTREIGN.jpg" alt="Juego" />
                <div className="infoHei">
                  <div className="info">
                    <h3>Text</h3>
                    <p>Descripción del juego</p>
                  </div>
                  <div className="precio">
                    <button className="agregar_carrito" data-id={prod.id}>
                      Comprar
                    </button>
                    <p className="dinero">{prod.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button id="btnSubir">⬆</button>
      </section>
    </div>
  );
};

export default Ofertas;
