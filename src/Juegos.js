import React from "react";
import "./Css/Juegos.css";
import "./Css/Carrito.css";

function Juegos() {
  return (
    <div id="Contenedor">
      <section>
        <div className="General" id="lista_de_prod">
          {/* ===== ACCIÓN ===== */}
            <h2 id="Accion">Acción</h2>
            <div className="AllGames">
             <div className="JuegoMarco">
              <img src="/Img/Juegos/GTA.jpg" alt="" />
              <div className="infoHei">
                <div className="info">
                  <h3>Grand Theft Auto V Enhanced</h3>
                </div>
                <div className="precio">
                  <button className="agregar_carrito" data-id="1">Comprar</button>
                  <p className="dinero">S/.110.90</p>
                </div>
                </div>
            </div>

            <div className="JuegoMarco">
              <img src="/Img/Juegos/ELDEN_RING_NIGHTREIGN.jpg" alt="" />
              <div className="infoHei">
                <div className="info">
                  <h3>ELDEN RING NIGHTREIGN</h3>
                </div>
                <div className="precio">
                  <button className="agregar_carrito" data-id="2">Comprar</button>
                  <p className="dinero">S/.120.00</p>
                </div>
              </div>
            </div>

            <div className="JuegoMarco">
              <img src="/Img/Juegos/Resident_Evil_4.jpg" alt="" />
              <div className="infoHei">
                <div className="info">
                  <h3>Resident Evil 4</h3>
                </div>
                <div className="precio">
                  <button className="agregar_carrito" data-id="3">Comprar</button>
                  <p className="dinero">S/.109.00</p>
                </div>
              </div>
            </div>
        </div>

        <h2 id="Aventura">Aventura</h2>
<div className="AllGames">
  <div className="JuegoMarco">
    <img src="/Img/Juegos/Subnautica.jpg" alt="Subnautica" />
    <div className="infoHei">
      <div className="info">
        <h3>Subnautica</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="4">Comprar</button>
        <p className="dinero">S/.110.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Grounde_2.jpg" alt="Grounder 2" />
    <div className="infoHei">
      <div className="info">
        <h3>Grounder 2</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="5">Comprar</button>
        <p className="dinero">S/.109.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Far_cry_6.jpg" alt="Far Cry 6" />
    <div className="infoHei">
      <div className="info">
        <h3>Far cry 6</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="6">Comprar</button>
        <p className="dinero">S/.199.99</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Black_myth_wukong.jpg" alt="Black Myth: Wukong" />
    <div className="infoHei">
      <div className="info">
        <h3>Black Myth: Wukong</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="7">Comprar</button>
        <p className="dinero">S/.199.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Raft.jpg" alt="Raft" />
    <div className="infoHei">
      <div className="info">
        <h3>Raft</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="8">Comprar</button>
        <p className="dinero">S/.49.95</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Lies_of_P.png" alt="Lies of P" />
    <div className="infoHei">
      <div className="info">
        <h3>Lies of P</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="9">Comprar</button>
        <p className="dinero">S/.170.00</p>
      </div>
    </div>
  </div>
</div>
<h2 id="Casuales">Casuales</h2>
<div className="AllGames">
  <div className="JuegoMarco">
    <img src="/Img/Juegos/Coral_island.webp" alt="Coral Island" />
    <div className="infoHei">
      <div className="info">
        <h3>Coral Island</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="10">Comprar</button>
        <p className="dinero">S/.70.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/garden_of_witches.jpg" alt="Garden of Witches" />
    <div className="infoHei">
      <div className="info">
        <h3>Garden of Witches</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="11">Comprar</button>
        <p className="dinero">S/.41.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Unpacking.jpg" alt="Unpacking" />
    <div className="infoHei">
      <div className="info">
        <h3>Unpacking</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="12">Comprar</button>
        <p className="dinero">S/.66.60</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Stardew_Valley.jpg" alt="Stardew Valley" />
    <div className="infoHei">
      <div className="info">
        <h3>Stardew Valley</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="13">Comprar</button>
        <p className="dinero">S/.39.95</p>
      </div>
    </div>
  </div>
</div>

<h2 id="Estrategia">Estrategia</h2>
<div className="AllGames">
  <div className="JuegoMarco">
    <img src="/Img/Juegos/Sid_Meier's_Civilization_VII.jpg" alt="Sid Meier's Civilization VII" />
    <div className="infoHei">
      <div className="info">
        <h3>Sid Meier's Civilization VII</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="14">Comprar</button>
        <p className="dinero">S/.220.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Age_of_Empires_IV.jpg" alt="Age of Empires IV: Anniversary Edition" />
    <div className="infoHei">
      <div className="info">
        <h3>Age of Empires IV: Anniversary Edition</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="15">Comprar</button>
        <p className="dinero">S/.74.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Cities_Skylines_II.jpg" alt="Cities: Skylines II" />
    <div className="infoHei">
      <div className="info">
        <h3>Cities: Skylines II</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="16">Comprar</button>
        <p className="dinero">S/.173.95</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Balatro.jpg" alt="Balatro" />
    <div className="infoHei">
      <div className="info">
        <h3>Balatro</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="17">Comprar</button>
        <p className="dinero">S/.33.50</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Liar's_bar.png" alt="Liar's Bar" />
    <div className="infoHei">
      <div className="info">
        <h3>Liar's Bar</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="18">Comprar</button>
        <p className="dinero">S/.17.00</p>
      </div>
    </div>
  </div>
</div>

<h2 id="Rol">Rol</h2>
<div className="AllGames">
  <div className="JuegoMarco">
    <img src="/Img/Juegos/Final_fantasy_xiv.jpeg" alt="FINAL FANTASY XIV Online" />
    <div className="infoHei">
      <div className="info">
        <h3>FINAL FANTASY XIV Online</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="19">Comprar</button>
        <p className="dinero">S/.56.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/MONSTER_HUNTER_RISE.jpg" alt="MONSTER HUNTER RISE" />
    <div className="infoHei">
      <div className="info">
        <h3>MONSTER HUNTER RISE</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="20">Comprar</button>
        <p className="dinero">S/.109.00</p>
      </div>
    </div>
  </div>

  <div className="JuegoMarco">
    <img src="/Img/Juegos/Age_of_Wonders_4.png" alt="Age of Wonders 4" />
    <div className="infoHei">
      <div className="info">
        <h3>Age of Wonders 4</h3>
        <p></p>
      </div>
      <div className="precio">
        <button className="agregar_carrito" data-id="21">Comprar</button>
        <p className="dinero">S/.173.95</p>
      </div>
    </div>
  </div>
</div>

        </div>

        <button id="btnSubir">⬆</button>
      </section>
    </div>
  );
}

export default Juegos;
