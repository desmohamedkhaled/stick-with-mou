import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { getProductImage, formatCategory } from '../utils/dataSync';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartSummary, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const cartSummary = getCartSummary();

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Thank you for your order! This is a prototype - no real payment was processed.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">Your cart is empty</h1>
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/shop"
              className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                  Cart Items ({cartItems.length})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-dark-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={getProductImage(item)}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-dark-text-secondary capitalize">
                          {formatCategory(item.category_slug || item.category)}
                        </p>
                        <p className="text-lg font-semibold text-stiletto mt-1">
                          {item.price} EGP
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-dark-border dark:bg-dark-surface flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        
                        <span className="w-8 text-center font-medium text-gray-900 dark:text-dark-text">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 dark:border-dark-border dark:bg-dark-surface flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900 dark:text-dark-text">
                          {(item.price * item.quantity)} EGP
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 text-sm mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 dark:border-dark-border">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-text-secondary">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-dark-text">{cartSummary.subtotal} EGP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-text-secondary">Shipping</span>
                  <span className="font-medium text-gray-900 dark:text-dark-text">50 EGP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-text-secondary">Tax (14%)</span>
                  <span className="font-medium text-gray-900 dark:text-dark-text">{Math.round(cartSummary.tax)} EGP</span>
                </div>
                <div className="border-t border-gray-200 dark:border-dark-border pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-dark-text">Total</span>
                    <span className="text-lg font-semibold text-stiletto">
                      {cartSummary.total + 50} EGP
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-stiletto text-white py-3 rounded-lg font-semibold hover:bg-chestnut-rose transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Proceed to Checkout'
                )}
              </button>
              
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary text-center mt-4">
                This is a prototype. No real payment will be processed.
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-border">
                <Link
                  to="/shop"
                  className="block text-center text-brand-red hover:text-red-700 font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
