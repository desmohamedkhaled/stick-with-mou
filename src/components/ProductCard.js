import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import QuickView from './QuickView';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const successVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: { 
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          variants={imageVariants}
          whileHover="hover"
        />
        <motion.div 
          className="absolute top-3 right-3 bg-brand-red text-white px-2 py-1 rounded-full text-xs font-semibold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          New
        </motion.div>
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            onClick={() => setShowQuickView(true)}
            className="bg-white text-brand-black px-4 py-2 rounded-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quick View
          </motion.button>
        </motion.div>
      </div>
      
      <div className="p-5">
        <motion.h3 
          className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {product.name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {product.description}
        </motion.p>
        
        <div className="flex items-center justify-between mb-3">
          <motion.span 
            className="text-2xl font-bold text-brand-red"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {product.price} EGP
          </motion.span>
          
          <motion.button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-brand-black text-white hover:bg-gray-800'
            }`}
            variants={isAdded ? successVariants : buttonVariants}
            whileHover="hover"
            whileTap="tap"
            animate={isAdded ? "animate" : "initial"}
          >
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={isAdded ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              {isAdded ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              )}
            </motion.svg>
            <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
          </motion.button>
        </div>
        
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          <span className="text-xs text-gray-500 capitalize">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className="w-3 h-3 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 + i * 0.1 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <QuickView 
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </motion.div>
  );
};

export default ProductCard;
