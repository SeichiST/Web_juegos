import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Juegos from "./Juegos";
import Sobrenosotros from "./Sobre_Nosotros";
import Ofertas from "./Ofertas";
import Contactanos from "./Contactanos";

function App() {
  return (
    <Router>
      <div id="Contenedor">
        <header>
                <Link to="/">
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
                        <li><Link to="/Juegos#Accion">Acción</Link></li>
                        <li><Link to="/Juegos#Aventura">Aventura</Link></li>
                        <li><Link to="/Juegos#Casuales">Casuales</Link></li>
                        <li><Link to="/Juegos#Estrategia">Estrategia</Link></li>
                        <li><Link to="/Juegos#Rol">Rol</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                    <li><Link to="/Contactanos">Contáctanos</Link></li>
                  </ul>
                </div>
        
                <nav id="carrito">
                  <div className="compras">
                    <img className="carro" src="/Img/carro de compra.png" alt="Carrito" />
                    <div className="carritoBuy">
                      <ul className="carritoNav">
                        <li>Producto</li>
                        <li>Nombre</li>
                        <li>Precio</li>
                        <li>Cantidad</li>
                        <li>ㅤ</li>
                      </ul>
                      <div className="Productos"></div>
                    </div>
                  </div>
                </nav>
              </header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
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
    </Router>
  );
}

export default App;
