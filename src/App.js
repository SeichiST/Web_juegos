import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Juegos from "./Juegos";
import Sobrenosotros from "./Sobre_Nosotros";
import Ofertas from "./Ofertas";
import Contactanos from "./Contactanos";
import Carrito from "./Carrito";
import { CarritoProvedor } from "./Contexto/ContextoCarrito"

function App() {
  return (
    <Router>
      <CarritoProvedor>
        <div id="Contenedor">
          <header>
                <Link to="/Juegos">
                  <img className="Logo" src="/Img/Logo.png" alt="Logo" />
                </Link>
                <div className="barra">
                  <ul className="menu">
                    <li>
                      <Link to="/Ofertas">Ofertas</Link>
                    </li>
                    <li>
                      <Link to="/Juegos">Juegos</Link>
                        <ul className="submenu">
                          <li><Link to="/juegos#Accion">Acción</Link></li>
                          <li><Link to="/juegos#Aventura">Aventura</Link></li>
                          <li><Link to="/juegos#Casuales">Casuales</Link></li>
                          <li><Link to="/juegos#Estrategia">Estrategia</Link></li>
                          <li><Link to="/juegos#Rol">Rol</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                    <li><Link to="/Contactanos">Contáctanos</Link></li>
                  </ul>
                </div>
                  <Carrito />
              </header>

        <Routes>
          <Route path="/Juegos" element={<Juegos />} />
         <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/SobreNosotros" element={<Sobrenosotros />} />
         <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>

        <footer>
          <p>Copyright 2025</p>
          <div className="redes">
            <img src="/Img/whatsapp.png" alt="" />
            <img src="/Img/facebook.png" alt="" />
            <img src="/Img/Instagram.png" alt="" />
          </div>
        </footer>
      </div>
      </CarritoProvedor>
    </Router>
  );
}

export default App;
