import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { getFeaturedProducts, getTopRatedProducts } = useProducts();
  const featuredProducts = getFeaturedProducts();
  const topRatedProducts = getTopRatedProducts(4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const discountVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-black to-gray-800 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-brand-gold/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(251, 191, 36, 0.1))",
              "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.1))",
              "linear-gradient(225deg, rgba(239, 68, 68, 0.1), rgba(251, 191, 36, 0.1))",
              "linear-gradient(315deg, rgba(251, 191, 36, 0.1), rgba(239, 68, 68, 0.1))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={heroVariants}
              >
                <motion.span 
                  className="text-brand-red"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Stick
                </motion.span> With{' '}
                <motion.span 
                  className="text-brand-gold"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Mo
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-300"
                variants={itemVariants}
              >
                Premium laptop stickers, skins, and keyboard covers to personalize your device and express your unique style.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/shop"
                    className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-center block"
                  >
                    Shop Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-gold hover:text-black transition-colors duration-200 text-center block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
                alt="Laptop with custom stickers and skin"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 bg-brand-gold text-black p-4 rounded-full"
                variants={discountVariants}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-bold">50%</span>
                <span className="block text-sm">OFF</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Why Choose Stick With Mo?
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
              We offer the highest quality laptop accessories with premium materials and unique designs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Premium Quality</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                High-quality materials that protect your device while looking amazing.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-brand-gold text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Easy Installation</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Simple peel-and-stick application with no bubbles or wrinkles.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-brand-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Unique Designs</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Stand out with our exclusive designs and customizable options.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary">
              Discover our most popular laptop accessories
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="bg-brand-black text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
              >
                View All Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Follow Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-8">
              Stay connected and see our latest products and designs
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Facebook */}
            {/* <motion.a 
              href="https://www.facebook.com/stickwithmo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Follow us on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a> */}
            
            {/* Instagram */}
            <motion.a 
              href="https://www.instagram.com/stickwith.mou?igsh=dXQ2N2x3MnBwOGJw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            
            {/* Twitter */}
            {/* <motion.a 
              href="https://www.twitter.com/stickwithmo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Follow us on Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
             */}
            {/* YouTube */}
            {/* <motion.a 
              href="https://www.youtube.com/@stickwithmo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Subscribe to our YouTube channel"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </motion.a>
             */}
            {/* TikTok */}
            <motion.a 
              href="https://www.tiktok.com/@stickwith.mou?_t=ZS-8zZtls9UccS&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title="Follow us on TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Top Rated Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
              Top Rated Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-dark-text-secondary">
              Our customers' favorite picks with highest ratings
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topRatedProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/shop">
              <motion.button 
                className="bg-brand-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brand-black text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-gold/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(251, 191, 36, 0.2))",
              "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.2))",
              "linear-gradient(225deg, rgba(239, 68, 68, 0.2), rgba(251, 191, 36, 0.2))",
              "linear-gradient(315deg, rgba(251, 191, 36, 0.2), rgba(239, 68, 68, 0.2))"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest news about new products and exclusive offers
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-md mx-auto flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-brand-gold"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button 
              className="bg-brand-red px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
