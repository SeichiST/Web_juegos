// src/components/Navbar.js
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../Img/Logo.png";
function Navbar() {
  return (
    <header>
      <Link to="/"><img className="Logo" src={Logo} alt="Logo" /></Link>
      <div className="barra">
        <ul className="menu">
          <li><Link to="/ofertas">Ofertas</Link></li>
          <li>
            <Link to="/juegos">Juegos</Link>
            <ul className="submenu">
              <li><Link to="/juegos#Accion">Acción</Link></li>
              <li><Link to="/juegos#Aventura">Aventura</Link></li>
              <li><Link to="/juegos#Casuales">Casuales</Link></li>
              <li><Link to="/juegos#Estrategia">Estrategia</Link></li>
              <li><Link to="/juegos#Rol">Rol</Link></li>
            </ul>
          </li>
          <li><Link to="/sobrenosotros">Sobre nosotros</Link></li>
          <li><Link to="/contactanos">Contáctanos</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
