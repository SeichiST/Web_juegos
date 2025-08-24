// src/Carrito.jsx
import React from "react";
import { UsarCarrito } from "./Contexto/ContextoCarrito";

export default function Carrito() {
  const { items, RemoverCarrito, LimpiarCarrito } = UsarCarrito();

  const total = items.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
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

          <div className="Productos">
            {items.map((p) => (
              <div key={p.id} className="productoRow">
                <img src={p.imagen} alt={p.titulo} />
                <p>{p.titulo}</p>
                <p>S/.{(p.precio * p.cantidad).toFixed(2)}</p>
                <p>
                  <span>{p.cantidad}</span>
                </p>
                <p>
                  <span className="Borrar" onClick={() => RemoverCarrito(p.id)}>
                    X
                  </span>
                </p>
              </div>
            ))}
            <div className="totalCarrito">
            <strong>Total:</strong> S/.{total.toFixed(2)}
            {items.length > 0 && (
              <button className="vaciar" onClick={LimpiarCarrito}>
                Vaciar
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
