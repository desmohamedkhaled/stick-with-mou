import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav 
      className="bg-william dark:bg-dark-surface text-white shadow-lg sticky top-0 z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="text-2xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span 
                  className="text-stiletto"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Stick
                </motion.span>
                <span className="text-white"> With </span>
                <motion.span 
                  className="text-anzac"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Mo
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {['Home', 'Shop', 'About', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="hover:text-anzac transition-colors relative group"
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-anzac group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/my-account" 
                  className="hover:text-anzac transition-colors"
                >
                  My Account
                </Link>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="hover:text-anzac transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="hover:text-anzac transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-anzac transition-colors">
                  Login
                </Link>
                <Link to="/register" className="hover:text-anzac transition-colors">
                  Register
                </Link>
              </div>
            )}
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <motion.svg 
                  className="w-5 h-5 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    // Sun icon for light mode
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  ) : (
                    // Moon icon for dark mode
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  )}
                </motion.svg>
              </motion.button>
            </motion.div>
            
            {/* Cart */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/cart" className="relative hover:text-anzac transition-colors">
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </motion.svg>
                  <AnimatePresence>
                    {getCartItemsCount() > 0 && (
                      <motion.span 
                        className="absolute -top-2 -right-2 bg-stiletto text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                      >
                        {getCartItemsCount()}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-anzac focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-william"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {['Home', 'Shop', 'About', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="block px-3 py-2 hover:text-anzac transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                
                {user ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Link
                        to="/my-account"
                        className="block px-3 py-2 hover:text-anzac transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        My Account
                      </Link>
                    </motion.div>
                    {user.role === 'admin' && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                      >
                        <Link
                          to="/admin"
                          className="block px-3 py-2 hover:text-anzac transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Admin
                        </Link>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 hover:text-anzac transition-colors"
                      >
                        Logout
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Link
                        to="/login"
                        className="block px-3 py-2 hover:text-anzac transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <Link
                        to="/register"
                        className="block px-3 py-2 hover:text-anzac transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </motion.div>
                  </>
                )}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <button
                    onClick={toggleTheme}
                    className="block w-full text-left px-3 py-2 hover:text-anzac transition-colors"
                  >
                    {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  <Link
                    to="/cart"
                    className="block px-3 py-2 hover:text-anzac transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cart ({getCartItemsCount()})
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
