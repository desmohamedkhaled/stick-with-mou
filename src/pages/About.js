import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <motion.span 
                className="text-brand-red"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                Stick
              </motion.span> With <motion.span 
                className="text-brand-gold"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.2 }}
              >
                Mo
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're passionate about helping you personalize your devices with premium quality laptop accessories that reflect your unique style.
            </motion.p>
          </motion.div>

          {/* Story Section */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 dark:text-dark-text-secondary">
              <p className="mb-4">
                Founded in 2024, Stick With Mo began with a simple mission: to provide high-quality, 
                stylish laptop accessories that allow people to express their personality through their devices.
              </p>
              <p className="mb-4">
                What started as a small collection of custom laptop stickers has grown into a comprehensive 
                line of premium laptop skins, keyboard covers, and accessories. We believe that your laptop 
                should be as unique as you are.
              </p>
              <p>
                Every product in our collection is carefully designed and manufactured using the highest 
                quality materials to ensure durability, easy application, and stunning visual appeal.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Quality First</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                We use only premium materials and rigorous quality control to ensure every product meets our high standards.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Customer Love</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Your satisfaction is our priority. We're committed to providing exceptional customer service and support.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">Innovation</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                We continuously innovate to bring you the latest designs and cutting-edge materials.
              </p>
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-dark-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500 dark:text-dark-text">MO</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-dark-text">Mo Johnson</h3>
                <p className="text-brand-red font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  Passionate about design and technology, Mo started Stick With Mo to help people express their creativity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-dark-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500 dark:text-dark-text">AS</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-dark-text">Alex Smith</h3>
                <p className="text-brand-red font-medium mb-2">Head of Design</p>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  Creative visionary responsible for our unique product designs and brand aesthetic.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-dark-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500 dark:text-dark-text">SJ</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-dark-text">Sarah Johnson</h3>
                <p className="text-brand-red font-medium mb-2">Customer Success</p>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                  Dedicated to ensuring every customer has an amazing experience with our products.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-brand-black to-gray-800 dark:from-dark-surface dark:to-gray-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-6">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
