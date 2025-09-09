import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const QuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Mock images for the product (in real app, this would come from product data)
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleClose = () => {
    setSelectedImage(0);
    setQuantity(1);
    setIsAdded(false);
    onClose();
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-gray-50 p-8">
                {/* Main Image */}
                <motion.div 
                  className="aspect-square rounded-xl overflow-hidden mb-4"
                  key={selectedImage}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <img
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Thumbnail Images */}
                <div className="flex space-x-2 overflow-x-auto">
                  {productImages.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === index 
                          ? 'border-brand-red' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Product Badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  New
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <motion.div
                    className="text-brand-red text-sm font-medium mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {product.category.replace('-', ' ').toUpperCase()}
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.name}
                  </motion.h1>

                  {/* Price */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-4xl font-bold text-brand-red">{product.price} EGP</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{(product.price * 1.5).toFixed(0)} EGP</span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {product.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold mb-3">Features:</h3>
                    <ul className="space-y-2">
                      {[
                        "Premium quality materials",
                        "Easy peel-and-stick application",
                        "Bubble-free installation",
                        "Durable and long-lasting",
                        "Easy to remove without residue"
                      ].map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center space-x-1 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    <span className="text-gray-600">(4.8) • 127 reviews</span>
                  </motion.div>
                </div>

                {/* Add to Cart Section */}
                <motion.div
                  className="border-t pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {/* Quantity Selector */}
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-700 mr-4">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <motion.button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </motion.button>
                      <span className="px-4 py-2 font-medium">{quantity}</span>
                      <motion.button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={handleAddToCart}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isAdded 
                        ? 'bg-green-500 text-white' 
                        : 'bg-brand-black text-white hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={isAdded ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg 
                      className="w-5 h-5" 
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
                    <span>{isAdded ? 'Added to Cart!' : `Add ${quantity} to Cart`}</span>
                  </motion.button>

                  {/* Additional Actions */}
                  <div className="flex space-x-3 mt-4">
                    <motion.button
                      className="flex-1 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Wishlist
                    </motion.button>
                    <motion.button
                      className="flex-1 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Share
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickView;
