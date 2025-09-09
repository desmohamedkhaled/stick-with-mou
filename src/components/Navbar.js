import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-brand-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-brand-red">Stick</span>
              <span className="text-white"> With </span>
              <span className="text-brand-gold">Mo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/about" className="hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/my-account" 
                  className="hover:text-brand-gold transition-colors"
                >
                  My Account
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="hover:text-brand-gold transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="hover:text-brand-gold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-brand-gold transition-colors">
                  Login
                </Link>
                <Link to="/register" className="hover:text-brand-gold transition-colors">
                  Register
                </Link>
              </div>
            )}
            
            {/* Cart */}
            <Link to="/cart" className="relative hover:text-brand-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-gold focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-black">
              <Link
                to="/"
                className="block px-3 py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {user ? (
                <>
                  <Link
                    to="/my-account"
                    className="block px-3 py-2 hover:text-brand-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Account
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 hover:text-brand-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 hover:text-brand-gold transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 hover:text-brand-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 hover:text-brand-gold transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
              <Link
                to="/cart"
                className="block px-3 py-2 hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart ({getCartItemsCount()})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
