import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Css/Web_juegos.css";
import "./Css/Carrito.css";
import { UsarCarrito } from "./Contexto/ContextoCarrito";

export default function Juegos() {
  const location = useLocation();

  const {addAlCarrito} = UsarCarrito();

    const productos = [
    // Accion
        { id: 1, precio: 110.90, imagen: "/Img/Juegos/GTA.jpg", nombre: "Grand Theft Auto V Enhanced" },
        { id: 2, precio: 120.00, imagen: "/Img/Juegos/ELDEN_RING_NIGHTREIGN.jpg", nombre: "ELDEN RING NIGHTREIGN" },
        { id: 3, precio: 109.00, imagen: "/Img/Juegos/Resident_Evil_4.jpg", nombre: "Resident Evil 4" },
    // Aventura
        { id: 4, precio: 110.00, imagen: "/Img/Juegos/Subnautica.jpg", nombre: "Subnautica" },
        { id: 5, precio: 109.00, imagen: "/Img/Juegos/Grounde_2.jpg", nombre: "Grounder 2" },
        { id: 6, precio: 199.99, imagen: "/Img/Juegos/Far_cry_6.jpg", nombre: "Far Cry 6" },
        { id: 7, precio: 199.00, imagen: "/Img/Juegos/Black_myth_wukong.jpg", nombre: "Black Myth: Wukong" },
        { id: 8, precio: 49.95, imagen: "/Img/Juegos/Raft.jpg", nombre: "Raft" },
        { id: 9, precio: 170.00, imagen: "/Img/Juegos/Lies_of_P.png", nombre: "Lies of P" },
    // Casuales
        { id: 10, precio: 70.00, imagen: "/Img/Juegos/Coral_island.webp", nombre: "Coral Island" },
        { id: 11, precio: 41.00, imagen: "/Img/Juegos/garden_of_witches.jpg", nombre: "Garden of Witches" },
        { id: 12, precio: 66.60, imagen: "/Img/Juegos/Unpacking.jpg", nombre: "Unpacking" },
        { id: 13, precio: 39.95, imagen: "/Img/Juegos/Stardew_Valley.jpg", nombre: "Stardew Valley" },
    // Estrategia
        { id: 14, precio: 220.00, imagen: "/Img/Juegos/Sid_Meier's_Civilization_VII.jpg", nombre: "Sid Meier's Civilization VII" },
        { id: 15, precio: 74.00, imagen: "/Img/Juegos/Age_of_Empires_IV.jpg", nombre: "Age of Empires IV: Anniversary Edition" },
        { id: 16, precio: 173.95, imagen: "/Img/Juegos/Cities_Skylines_II.jpg", nombre: "Cities: Skylines II" },
        { id: 17, precio: 33.50, imagen: "/Img/Juegos/Balatro.jpg", nombre: "Balatro" },
        { id: 18, precio: 17.00, imagen: "/Img/Juegos/Liar's_bar.png", nombre: "Liar's Bar" },
    // Rol
        { id: 19, precio: 56.00, imagen: "/Img/Juegos/Final_fantasy_xiv.jpeg", nombre: "FINAL FANTASY XIV Online" },
        { id: 20, precio: 109.00, imagen: "/Img/Juegos/MONSTER_HUNTER_RISE.jpg", nombre: "MONSTER HUNTER RISE" },
        { id: 21, precio: 173.95, imagen: "/Img/Juegos/Age_of_Wonders_4.png", nombre: "Age of Wonders 4" }
      ];


      const accion = productos.filter(prod => prod.id <= 3);
      const aventura = productos.filter(prod => prod.id >= 4 && prod.id <= 9);
      const casuales = productos.filter(prod => prod.id >= 10 && prod.id <= 13);
      const estrategia = productos.filter(prod => prod.id >= 14 && prod.id <= 18);
      const rol = productos.filter(prod => prod.id >= 19 && prod.id <= 21);

      useEffect(() => {
        if (location.hash) {
          const section = document.querySelector(location.hash);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, [location]);
          
      useEffect(() => {
  const btnSubir = document.getElementById("btnSubir");
  btnSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return () => btnSubir.removeEventListener("click", () => {});
}, []);

  return (
    <div id="Contenedor">
      <section className="Ventas">
        <div className="GeneralJuegos" id="lista_de_prod">
            <h2 id="Accion">Acción</h2>
              <div className="AllGames">
                {accion.map(prod => (
                  <div className="JuegoMarco" key={prod.id}>
                    <img src={prod.imagen} alt={prod.nombre} />
                    <div className="infoHei">
                      <div className="info">
                        <h3>{prod.nombre}</h3>
                      </div>
                      <div className="precio">
                        <button
                          className="agregar_carrito"
                          onClick={() =>
                            addAlCarrito({
                              id: prod.id,
                              titulo: prod.nombre,
                              precio: prod.precio,
                              imagen: prod.imagen,
                            })
                          }
                        >
                          Comprar
                        </button>
                        <p className="dinero">S/.{prod.precio.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <h2 id="Aventura">Aventura</h2>
              <div className="AllGames">
            {aventura.map(prod => ( 
              <div className="JuegoMarco" key={prod.id}>
                  <img src={prod.imagen} alt="" />
                  <div className="infoHei">
                    <div className="info">
                      <h3>{prod.nombre}</h3>
                    </div>
                    <div className="precio">
                      <button className="agregar_carrito" onClick={() => 
                        addAlCarrito({
                          id: prod.id,
                          titulo: prod.nombre,
                          precio: prod.precio,
                          imagen: prod.imagen,
                        })
                      }>
                        Comprar
                      </button>
                      <p className="dinero">S/.{prod.precio.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>

            <h2 id="Casuales">Casuales</h2>
              <div className="AllGames">
              {casuales.map(prod => (
                <div className="JuegoMarco" key={prod.id}>
                    <img src={prod.imagen} alt="" />
                    <div className="infoHei">
                      <div className="info">
                        <h3>{prod.nombre}</h3>
                      </div>
                      <div className="precio">
                        <button className="agregar_carrito" onClick={() => 
                          addAlCarrito({
                            id: prod.id,
                            titulo: prod.nombre,
                            precio: prod.precio,
                            imagen: prod.imagen,
                          })
                        }>
                          Comprar
                        </button>
                        <p className="dinero">S/.{prod.precio.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <h2 id="Estrategia">Estrategia</h2>
              <div className="AllGames">
                {estrategia.map(prod => (
                  <div className="JuegoMarco" key={prod.id}>
                    <img src={prod.imagen} alt="" />
                    <div className="infoHei">
                      <div className="info">
                        <h3>{prod.nombre}</h3>
                      </div>
                      <div className="precio">
                        <button className="agregar_carrito" onClick={() => 
                          addAlCarrito({
                            id: prod.id,
                            titulo: prod.nombre,
                            precio: prod.precio,
                            imagen: prod.imagen,
                          })
                        }>
                          Comprar
                        </button>
                        <p className="dinero">S/.{prod.precio.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <h2 id="Rol">Rol</h2>
              <div className="AllGames">
                {rol.map(prod => (
                  <div className="JuegoMarco" key={prod.id}>
                    <img src={prod.imagen} alt="" />
                    <div className="infoHei">
                      <div className="info">
                        <h3>{prod.nombre}</h3>
                      </div>
                      <div className="precio">
                        <button className="agregar_carrito" onClick={() => 
                          addAlCarrito({
                            id: prod.id,
                            titulo: prod.nombre,
                            precio: prod.precio,
                            imagen: prod.imagen,
                          })
                        }>
                          Comprar
                        </button>
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
}