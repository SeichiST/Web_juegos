import React from "react";
import "./Css/Web_juegos.css";
import "./Css/Carrito.css";
import { UsarCarrito } from "./Contexto/ContextoCarrito";

const Ofertas = () => {
  const {addAlCarrito} = UsarCarrito();

  const productos = [
    { id: 22, precio: 99.00, precioOriginal: "S/.165.00", imagen: "/Img/Juegos/Kingdom_heart.jpg", nombre: "KINGDOM HEARTS -HD 1.5+2.5 ReMIX-"},
    { id: 23, precio: 35.50, precioOriginal: "S/.63.00", imagen: "/Img/Juegos/Palworld.jpg", nombre: "Palworld"},
    { id: 24, precio: 105.00, precioOriginal: "S/.199.00", imagen: "/Img/Juegos/Cyberpunk_2077.jpg", nombre: "Cyberpunk 2077"},
    { id: 25, precio: 41.20, precioOriginal: "S/.135.00", imagen: "/Img/Juegos/Death_Stranding_Director_Cut.jpg", nombre: "Death Stranding Director's Cut"},
  ];

  return (
    <div id="Contenedor">
      <section>
        <div className="Ventas" id="lista_de_prod">
          <h2 id="Ofertas">Ofertas</h2>
          <div className="AllOfertas">
            {productos.map((prod) => (
              <div className="JuegoOferta" key={prod.id}>
                <img src={prod.imagen} alt="Juego" />
                <div className="infoHei">
                  <div className="info">
                    <h3>{prod.nombre}</h3>
                    <p></p>
                  </div>
                  <div className="precio">
                    <button className="agregar_carrito" 
                    onClick={() => 
                      addAlCarrito({
                        id: prod.id,
                        titulo: prod.nombre,
                        precio: prod.precio,
                        imagen: prod.imagen,
                      })
                    }>
                      Comprar
                    </button>
                    <p className="precioOrg">{prod.precioOriginal}</p>
                    <p className="dinero">S/.{prod.precio.toFixed(2)}</p>
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
