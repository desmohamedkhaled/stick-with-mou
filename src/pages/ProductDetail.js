import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductContext';
import { getProductImage, formatCategory } from '../utils/dataSync';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  // Mock images for the product (in real app, this would come from product data)
  const productImages = [
    getProductImage(product),
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"
  ].filter(Boolean);

  useEffect(() => {
    if (!product) {
      navigate('/shop');
    }
  }, [product, navigate]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={handleGoBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          العودة للمتجر
        </motion.button>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Main Image */}
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg"
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto">
              {productImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-brand-red shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Category */}
            <motion.div
              className="text-stiletto text-sm font-medium uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {formatCategory(product.category_slug || product.category)}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.name}
            </motion.h1>

            {/* Price */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-5xl font-bold text-stiletto">{product.price} EGP</span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-2xl text-gray-500 line-through">{product.original_price} EGP</span>
              )}
            </motion.div>

            {/* Rating */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(product.rating || 4.8) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-gray-600">({product.rating || 4.8}) • {product.reviews_count || 127} مراجعة</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {product.description}
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">المميزات:</h3>
              <ul className="space-y-2">
                {[
                  "مواد عالية الجودة",
                  "سهولة التركيب",
                  "تركيب بدون فقاعات",
                  "متانة وطول عمر",
                  "سهولة الإزالة بدون بقايا"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quantity and Add to Cart */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-700">الكمية:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </motion.button>
                  <span className="px-6 py-2 font-medium text-lg">{quantity}</span>
                  <motion.button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-semibold text-xl transition-all duration-200 flex items-center justify-center space-x-3 ${
                  isAdded 
                    ? 'bg-green-500 text-white' 
                    : 'bg-william text-white hover:bg-finch'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={isAdded ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <motion.svg 
                  className="w-6 h-6" 
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
                <span>{isAdded ? 'تم الإضافة للسلة!' : `أضف ${quantity} للسلة`}</span>
              </motion.button>

              {/* Additional Actions */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  className="py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  أضف للمفضلة
                </motion.button>
                <motion.button
                  className="py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  مشاركة
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
