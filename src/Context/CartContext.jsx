import { Children, createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([])
  const addToCart = (product) => {
    const itemInCart = cartItem.find(item => item.id === product.id);
    if (itemInCart) {
      // Increase quantity if item is already there
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? {
            ...item,
            quantity: item.quantity + 1,
            selectedWeight: product.selectedWeight || item.selectedWeight,
            units: product.units || item.units
          }
          : item
      )
      setCartItem(updatedCart)
    }
    else {
      // Add a new item
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
  }
  const updateQuantity = (productId, action) => {
    setCartItem(prevCart =>
      prevCart
        .map(item => {
          if (item.id === productId) {
            if (action === 'increment') {
              return {
                ...item,
                quantity: item.quantity + 1,
                selectedWeight: item.selectedWeight,
                units: item.units
              };
            } else if (action === 'decrement' && item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
                selectedWeight: item.selectedWeight,
                units: item.units
              };
            } else if (action === 'decrement' && item.quantity === 1) {
              return null; // Remove item if quantity goes to 0
            }
          }
          return item;
        })
        .filter(item => item != null)
    );
  };
  const deleteItem = (productId) => {
    setCartItem(prevCart => prevCart.filter(item => item.id !== productId));
  };



  return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
    {children}
  </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)