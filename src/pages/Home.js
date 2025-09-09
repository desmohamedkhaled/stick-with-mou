import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 6);

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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Stick With Mo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
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
              <h3 className="text-xl font-semibold mb-2">Easy Installation</h3>
              <p className="text-gray-600">
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
              <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
              <p className="text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
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
