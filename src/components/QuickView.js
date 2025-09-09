import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getProductImage, formatCategory } from '../utils/dataSync';

const QuickView = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    addToCart(product, quantity);
    onClose();
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
    onClose();
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-dark-surface rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
                  {product.name}
                </h2>
                <motion.button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <div className="space-y-4">
                  <motion.img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Price */}
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-stiletto">
                      {product.price} EGP
                    </span>
                    {product.original_price && product.original_price > product.price && (
                      <span className="text-xl text-gray-500 line-through">
                        {product.original_price} EGP
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary">
                      {product.description || product.short_description}
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      {formatCategory(product.category_slug || product.category)}
                    </span>
                  </div>

                  {/* Stock */}
                  <div>
                    <span className="text-sm text-gray-600 dark:text-dark-text-secondary">
                      Stock: {product.stock_quantity || product.stock || 0} available
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </motion.button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <motion.button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleAddToCart}
                      className="w-full bg-stiletto text-white py-3 rounded-lg font-semibold hover:bg-chestnut-rose transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                    
                    <motion.button
                      onClick={handleViewDetails}
                      className="w-full border-2 border-anzac text-anzac py-3 rounded-lg font-semibold hover:bg-anzac hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Full Details
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickView;