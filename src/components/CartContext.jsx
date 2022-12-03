import React, { useState, createContext } from 'react';

export const cartContext = createContext();

export default function CartProvider ({ children }) {

    const [carrito , setCarrito] = useState([]);
    
    function isInCart (itemId) {
      const hay = carrito.findIndex((item) => item.id === itemId)
      return hay;
    }
    
    function addItem(item, cantidad){
      const pos = isInCart(item.id);
      if (pos === -1){
        setCarrito([...carrito, {...item, cantidad}])
      }else {
        const carritoDuplicado = [...carrito];
        carritoDuplicado[pos] = {...carrito[pos], cantidad: carrito[pos].cantidad + cantidad}
        setCarrito(carritoDuplicado);
      }
    }
    
    function removeItem (itemId) {
      setCarrito(carrito.filter((item) => item.id !== itemId))
    }
    
    function clear () {
      setCarrito([]);
    }


    const totalPrecio = () => carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0 );
    
    
    return (
    <cartContext.Provider value={{carrito, addItem, removeItem, clear, totalPrecio}}>
        {children}
    </cartContext.Provider>
  );
}
