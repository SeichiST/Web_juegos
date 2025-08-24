import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CarritoContexto = createContext();

export function CarritoProvedor({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("carritoJuegos");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("carritoJuegos", JSON.stringify(items));
  }, [items]);

  const addAlCarrito = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], cantidad: next[idx].cantidad + 1 };
        return next;
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  const RemoverCarrito = (id) =>
    setItems((prev) => prev.filter((p) => p.id !== id));



  const LimpiarCarrito = () => setItems([]);

  const value = useMemo(
    () => ({ items, addAlCarrito, RemoverCarrito, LimpiarCarrito }),
    [items]
  );

  return <CarritoContexto.Provider value={value}>{children}</CarritoContexto.Provider>;
}

export const UsarCarrito = () => useContext(CarritoContexto);
