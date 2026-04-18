import React, { createContext, useContext, useState, useEffect } from 'react';
import { normalizeCartItem } from '../utils/dataSync';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on app load
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart.map(item => normalizeCartItem(item)));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      // Ensure product has all required properties
      const normalizedProduct = normalizeCartItem(product);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...normalizedProduct, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...normalizedProduct, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const getCartItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartTax = (taxRate = 0.14) => {
    return getCartSubtotal() * taxRate;
  };

  const getCartTotalWithTax = (taxRate = 0.14) => {
    return getCartSubtotal() + getCartTax(taxRate);
  };

  const getCartSummary = () => {
    const subtotal = getCartSubtotal();
    const tax = getCartTax();
    const total = getCartTotalWithTax();
    const itemsCount = getCartItemsCount();

    return {
      subtotal,
      tax,
      total,
      itemsCount,
      items: cartItems
    };
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    isInCart,
    getCartItemQuantity,
    getCartSubtotal,
    getCartTax,
    getCartTotalWithTax,
    getCartSummary
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
